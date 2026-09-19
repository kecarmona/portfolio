import { describe, it, expect, beforeEach } from "vitest";
import { TransferService } from "../src/application/transfer-service.js";
import { createAccount } from "../src/domain/account.js";

describe("Concurrency", () => {
  let service: TransferService;

  beforeEach(() => {
    service = new TransferService({ maxRetries: 3, enableIdempotency: true });
  });

  it("should handle 100 concurrent transfers without inconsistency", async () => {
    const accounts = Array.from({ length: 10 }, (_, i) => `acc-${i}`);
    for (const id of accounts) {
      service.addAccount(createAccount(id, `Owner ${id}`, 10000));
    }

    const initialTotal = accounts.reduce(
      (sum, id) => sum + service.getAccount(id)!.balance,
      0
    );

    // Fire 100 concurrent transfers between random pairs
    const transfers = Array.from({ length: 100 }, (_, i) => {
      const src = accounts[i % accounts.length];
      const dst = accounts[(i + 3) % accounts.length];
      return service.transfer(src, dst, 10, `conc-${i}`);
    });

    const results = await Promise.all(transfers);

    // Every transfer must be accepted or rejected — no errors
    for (const r of results) {
      expect(["accepted", "rejected", "duplicate"]).toContain(r.status);
    }

    // Global balance must be conserved
    const finalTotal = accounts.reduce(
      (sum, id) => sum + service.getAccount(id)!.balance,
      0
    );
    expect(finalTotal).toBe(initialTotal);

    // No account should be negative
    for (const id of accounts) {
      expect(service.getAccount(id)!.balance).toBeGreaterThanOrEqual(0);
    }
  });

  it("should handle 50 concurrent transfers against the same account", async () => {
    const source = "source";
    const dest = "dest";
    service.addAccount(createAccount(source, "Source", 100000));
    service.addAccount(createAccount(dest, "Dest", 0));

    const transfers = Array.from({ length: 50 }, (_, i) => {
      return service.transfer(source, dest, 100, `hot-${i}`);
    });

    const results = await Promise.all(transfers);

    const approved = results.filter((r) => r.status === "accepted");
    const rejected = results.filter((r) => r.status === "rejected");

    // Source balance: 100000 - (approved.length * 100)
    const expectedSourceBalance = 100000 - approved.length * 100;
    const expectedDestBalance = approved.length * 100;

    expect(service.getAccount(source)!.balance).toBe(expectedSourceBalance);
    expect(service.getAccount(dest)!.balance).toBe(expectedDestBalance);
    expect(expectedSourceBalance).toBeGreaterThanOrEqual(0);
    expect(approved.length + rejected.length).toBe(50);
  });

  it("should not lose money under high contention", async () => {
    const accounts = Array.from({ length: 20 }, (_, i) => `a${i}`);
    for (const id of accounts) {
      service.addAccount(createAccount(id, id, 5000));
    }

    const initialTotal = 20 * 5000;

    // 200 concurrent transfers
    const transfers = Array.from({ length: 200 }, (_, i) => {
      const src = accounts[i % accounts.length];
      const dst = accounts[(i + 1) % accounts.length];
      return service.transfer(src, dst, 25, `no-loss-${i}`);
    });

    await Promise.all(transfers);

    const finalTotal = accounts.reduce(
      (sum, id) => sum + service.getAccount(id)!.balance,
      0
    );
    expect(finalTotal).toBe(initialTotal);
  });

  it("should not create money under high contention", async () => {
    const accounts = Array.from({ length: 20 }, (_, i) => `b${i}`);
    for (const id of accounts) {
      service.addAccount(createAccount(id, id, 5000));
    }

    const initialTotal = 20 * 5000;

    const transfers = Array.from({ length: 200 }, (_, i) => {
      const src = accounts[i % accounts.length];
      const dst = accounts[(i + 1) % accounts.length];
      return service.transfer(src, dst, 25, `no-create-${i}`);
    });

    await Promise.all(transfers);

    const finalTotal = accounts.reduce(
      (sum, id) => sum + service.getAccount(id)!.balance,
      0
    );
    // Must be exactly equal — no money created
    expect(finalTotal).toBe(initialTotal);
  });

  it("should handle mixed valid and invalid transfers concurrently", async () => {
    service.addAccount(createAccount("a", "A", 1000));
    service.addAccount(createAccount("b", "B", 500));

    const transfers = [
      // Valid transfers
      service.transfer("a", "b", 100, "mix-1"),
      service.transfer("b", "a", 50, "mix-2"),
      // Invalid: insufficient balance
      service.transfer("a", "b", 5000, "mix-3"),
      // Invalid: same account
      service.transfer("a", "a", 100, "mix-4"),
      // Invalid: negative amount
      service.transfer("a", "b", -10, "mix-5"),
      // Valid
      service.transfer("a", "b", 200, "mix-6"),
      // Duplicate of mix-1
      service.transfer("a", "b", 100, "mix-1"),
    ];

    const results = await Promise.all(transfers);

    // Count outcomes
    const accepted = results.filter((r) => r.status === "accepted");
    const rejected = results.filter((r) => r.status === "rejected");
    const duplicate = results.filter((r) => r.status === "duplicate");

    expect(accepted.length).toBe(3); // mix-1, mix-2, mix-6
    expect(rejected.length).toBe(3); // mix-3, mix-4, mix-5
    expect(duplicate.length).toBe(1); // mix-1 dup

    // Verify global conservation (can't predict individual balances
    // because concurrent execution order is non-deterministic)
    const a = service.getAccount("a")!.balance;
    const b = service.getAccount("b")!.balance;
    expect(a + b).toBe(1500); // 1000 + 500

    // Both non-negative
    expect(a).toBeGreaterThanOrEqual(0);
    expect(b).toBeGreaterThanOrEqual(0);
  });

  it("should handle concurrent duplicate transfers", async () => {
    service.addAccount(createAccount("a", "A", 10000));
    service.addAccount(createAccount("b", "B", 0));

    // 20 concurrent transfers with the SAME idempotency key
    const transfers = Array.from({ length: 20 }, () =>
      service.transfer("a", "b", 100, "shared-key")
    );

    const results = await Promise.all(transfers);

    const accepted = results.filter((r) => r.status === "accepted");
    const duplicate = results.filter((r) => r.status === "duplicate");

    // Exactly one should be accepted, rest duplicate
    expect(accepted.length).toBe(1);
    expect(duplicate.length).toBe(19);

    // Balance should reflect exactly ONE transfer
    expect(service.getAccount("a")!.balance).toBe(9900);
    expect(service.getAccount("b")!.balance).toBe(100);
  });
});
