import { describe, it, expect, beforeEach } from "vitest";
import { TransferService } from "../src/application/transfer-service.js";
import { createAccount } from "../src/domain/account.js";

describe("TransferService", () => {
  let service: TransferService;

  beforeEach(() => {
    service = new TransferService({ maxRetries: 3, enableIdempotency: true });
  });

  describe("account management", () => {
    it("should create accounts successfully", () => {
      const account = createAccount("acc-1", "Alice", 1000);
      service.addAccount(account);

      const retrieved = service.getAccount("acc-1");
      expect(retrieved).toBeDefined();
      expect(retrieved!.id).toBe("acc-1");
      expect(retrieved!.owner).toBe("Alice");
      expect(retrieved!.balance).toBe(1000);
    });

    it("should reject negative initial balance", () => {
      expect(() => createAccount("acc-1", "Alice", -100)).toThrow(
        "Initial balance cannot be negative"
      );
    });
  });

  describe("transfer", () => {
    beforeEach(() => {
      service.addAccount(createAccount("src", "Source", 1000));
      service.addAccount(createAccount("dst", "Dest", 500));
    });

    it("should process a valid transfer correctly", async () => {
      const result = await service.transfer("src", "dst", 200, "key-1");

      expect(result.status).toBe("accepted");
      expect(result.transferId).toBeDefined();
      expect(result.sourceBalance).toBe(800);
      expect(result.destinationBalance).toBe(700);

      // Verify account state
      const src = service.getAccount("src")!;
      const dst = service.getAccount("dst")!;
      expect(src.balance).toBe(800);
      expect(dst.balance).toBe(700);
      expect(src.version).toBe(1);
      expect(dst.version).toBe(1);

      // Verify ledger
      const ledger = service.getLedger();
      expect(ledger).toHaveLength(2);
      expect(ledger[0].type).toBe("debit");
      expect(ledger[0].amount).toBe(200);
      expect(ledger[0].balanceAfter).toBe(800);
      expect(ledger[1].type).toBe("credit");
      expect(ledger[1].amount).toBe(200);
      expect(ledger[1].balanceAfter).toBe(700);
    });

    it("should reject transfer with insufficient balance", async () => {
      const result = await service.transfer("src", "dst", 1500, "key-2");

      expect(result.status).toBe("rejected");
      expect(result.reason).toBe("INSUFFICIENT_BALANCE");

      // Balances unchanged
      expect(service.getAccount("src")!.balance).toBe(1000);
      expect(service.getAccount("dst")!.balance).toBe(500);
    });

    it("should reject transfer to self", async () => {
      const result = await service.transfer("src", "src", 100, "key-3");

      expect(result.status).toBe("rejected");
      expect(result.reason).toBe("SAME_ACCOUNT");
      expect(service.getAccount("src")!.balance).toBe(1000);
    });

    it("should reject transfer with non-positive amount", async () => {
      const resultZero = await service.transfer("src", "dst", 0, "key-4a");
      expect(resultZero.status).toBe("rejected");
      expect(resultZero.reason).toBe("INVALID_AMOUNT");

      const resultNeg = await service.transfer("src", "dst", -50, "key-4b");
      expect(resultNeg.status).toBe("rejected");
      expect(resultNeg.reason).toBe("INVALID_AMOUNT");
    });

    it("should handle duplicate transfers via idempotency key", async () => {
      const first = await service.transfer("src", "dst", 100, "idem-1");
      expect(first.status).toBe("accepted");

      const second = await service.transfer("src", "dst", 100, "idem-1");
      expect(second.status).toBe("duplicate");
      expect(second.transferId).toBe(first.transferId);

      // Balances should NOT change again
      expect(service.getAccount("src")!.balance).toBe(900);
      expect(service.getAccount("dst")!.balance).toBe(600);
    });

    it("should return cached result for duplicate transfer", async () => {
      const first = await service.transfer("src", "dst", 100, "idem-2");
      const second = await service.transfer("src", "dst", 100, "idem-2");

      expect(second.status).toBe("duplicate");
      expect(second.transferId).toBe(first.transferId);
    });

    it("should reject transfer to non-existent account", async () => {
      const result = await service.transfer("src", "nobody", 100, "key-5");
      expect(result.status).toBe("rejected");
      expect(result.reason).toBe("INVALID_AMOUNT");
    });
  });
});
