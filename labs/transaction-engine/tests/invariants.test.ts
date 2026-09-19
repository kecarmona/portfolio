import { describe, it, expect, beforeEach } from "vitest";
import { TransferService } from "../src/application/transfer-service.js";
import { createAccount } from "../src/domain/account.js";

describe("Invariants", () => {
  let service: TransferService;

  beforeEach(() => {
    service = new TransferService({ maxRetries: 3, enableIdempotency: true });
  });

  describe("global balance conservation", () => {
    it("should maintain total balance after single transfer", async () => {
      service.addAccount(createAccount("a", "A", 1000));
      service.addAccount(createAccount("b", "B", 2000));

      await service.transfer("a", "b", 300, "k1");

      const a = service.getAccount("a")!.balance;
      const b = service.getAccount("b")!.balance;
      expect(a + b).toBe(3000);
    });

    it("should maintain total balance after many transfers", async () => {
      const accounts = ["a", "b", "c", "d", "e"];
      for (const id of accounts) {
        service.addAccount(createAccount(id, id, 10000));
      }

      // Run 50 sequential transfers between random pairs
      for (let i = 0; i < 50; i++) {
        const src = accounts[i % accounts.length];
        const dst = accounts[(i + 1) % accounts.length];
        await service.transfer(src, dst, 10, `seq-${i}`);
      }

      const total = accounts.reduce(
        (sum, id) => sum + service.getAccount(id)!.balance,
        0
      );
      expect(total).toBe(50000);
    });

    it("should maintain total balance under high concurrency", async () => {
      const accounts = ["a", "b", "c", "d", "e"];
      for (const id of accounts) {
        service.addAccount(createAccount(id, id, 10000));
      }

      const transfers = Array.from({ length: 100 }, (_, i) => {
        const src = accounts[i % accounts.length];
        const dst = accounts[(i + 1) % accounts.length];
        return service.transfer(src, dst, 5, `conc-${i}`);
      });

      await Promise.all(transfers);

      const total = accounts.reduce(
        (sum, id) => sum + service.getAccount(id)!.balance,
        0
      );
      expect(total).toBe(50000);
    });
  });

  describe("no negative balances", () => {
    it("should not allow source to go negative", async () => {
      service.addAccount(createAccount("a", "A", 100));
      service.addAccount(createAccount("b", "B", 0));

      const result = await service.transfer("a", "b", 200, "k1");
      expect(result.status).toBe("rejected");
      expect(service.getAccount("a")!.balance).toBe(100);
    });

    it("should not allow destination to go negative", async () => {
      // Credit always produces non-negative, but test the scenario
      service.addAccount(createAccount("a", "A", 50));
      service.addAccount(createAccount("b", "B", 0));

      const result = await service.transfer("a", "b", 50, "k1");
      expect(result.status).toBe("accepted");
      expect(service.getAccount("b")!.balance).toBe(50);
    });

    it("should allow transfer when balance equals amount exactly", async () => {
      service.addAccount(createAccount("a", "A", 100));
      service.addAccount(createAccount("b", "B", 0));

      const result = await service.transfer("a", "b", 100, "k1");
      expect(result.status).toBe("accepted");
      expect(service.getAccount("a")!.balance).toBe(0);
      expect(service.getAccount("b")!.balance).toBe(100);
    });
  });

  describe("idempotency", () => {
    it("should apply same transfer exactly once", async () => {
      service.addAccount(createAccount("a", "A", 1000));
      service.addAccount(createAccount("b", "B", 1000));

      const r1 = await service.transfer("a", "b", 100, "idem");
      const r2 = await service.transfer("a", "b", 100, "idem");
      const r3 = await service.transfer("a", "b", 100, "idem");

      expect(r1.status).toBe("accepted");
      expect(r2.status).toBe("duplicate");
      expect(r3.status).toBe("duplicate");

      // Only one debit applied
      expect(service.getAccount("a")!.balance).toBe(900);
      expect(service.getAccount("b")!.balance).toBe(1100);
    });

    it("should return same result for duplicate transfer", async () => {
      service.addAccount(createAccount("a", "A", 1000));
      service.addAccount(createAccount("b", "B", 1000));

      const r1 = await service.transfer("a", "b", 100, "idem2");
      const r2 = await service.transfer("a", "b", 100, "idem2");

      expect(r2.transferId).toBe(r1.transferId);
      expect(r2.status).toBe("duplicate");
    });

    it("should not modify balances on duplicate transfer", async () => {
      service.addAccount(createAccount("a", "A", 1000));
      service.addAccount(createAccount("b", "B", 1000));

      await service.transfer("a", "b", 100, "idem3");
      const balanceABefore = service.getAccount("a")!.balance;
      const balanceBBefore = service.getAccount("b")!.balance;

      await service.transfer("a", "b", 100, "idem3");

      expect(service.getAccount("a")!.balance).toBe(balanceABefore);
      expect(service.getAccount("b")!.balance).toBe(balanceBBefore);
    });
  });

  describe("audit trail", () => {
    it("should have ledger entry for every approved transfer", async () => {
      service.addAccount(createAccount("a", "A", 1000));
      service.addAccount(createAccount("b", "B", 1000));

      await service.transfer("a", "b", 50, "k1");
      await service.transfer("a", "b", 30, "k2");

      const ledger = service.getLedger();
      const approvedTransfers = ledger.filter((e) =>
        service.getTransferByIdempotencyKey(
          e.transferId === service.getLedger()[0]?.transferId ? "k1" : "k2"
        )?.status === "approved"
      );

      // Each approved transfer produces 2 ledger entries
      expect(ledger.length).toBe(4);
    });

    it("should not have ledger entry for rejected transfer", async () => {
      service.addAccount(createAccount("a", "A", 1000));
      service.addAccount(createAccount("b", "B", 1000));

      await service.transfer("a", "b", 5000, "k1"); // rejected
      const ledger = service.getLedger();
      expect(ledger.length).toBe(0);
    });

    it("should have correct balance after each ledger entry", async () => {
      service.addAccount(createAccount("a", "A", 1000));
      service.addAccount(createAccount("b", "B", 500));

      await service.transfer("a", "b", 200, "k1");

      const ledger = service.getLedger();
      expect(ledger[0].balanceAfter).toBe(800); // a after debit
      expect(ledger[1].balanceAfter).toBe(700); // b after credit
    });
  });

  describe("verifyInvariants", () => {
    it("should report all invariants as satisfied after valid operations", async () => {
      service.addAccount(createAccount("a", "A", 1000));
      service.addAccount(createAccount("b", "B", 2000));

      await service.transfer("a", "b", 300, "k1");
      await service.transfer("b", "a", 100, "k2");

      const report = service.verifyInvariants();
      expect(report.globalBalanceConserved).toBe(true);
      expect(report.noNegativeBalances).toBe(true);
      expect(report.allTransfersAppliedOnce).toBe(true);
      expect(report.violations).toHaveLength(0);
    });
  });
});
