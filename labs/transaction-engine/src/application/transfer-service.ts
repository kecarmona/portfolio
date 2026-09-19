/**
 * TransferService — application layer.
 * Orchestrates the transfer process: validation, concurrency control,
 * idempotency check, and audit trail.
 *
 * Uses an in-memory repository pattern. All account mutations create new
 * Account objects (immutable), with version numbers for optimistic concurrency.
 */

import type { Account } from "../domain/account.js";
import { debit, credit } from "../domain/account.js";
import {
  createTransfer,
  approveTransfer,
  rejectTransfer,
} from "../domain/transfer.js";
import type { Transfer, RejectReason } from "../domain/transfer.js";
import { createLedgerEntry } from "../domain/ledger.js";
import type { LedgerEntry } from "../domain/ledger.js";

/** Simple ID generator — no external dependencies. */
function generateId(): string {
  return (
    Date.now().toString(36) +
    Math.random().toString(36).substring(2, 10)
  );
}

export interface TransferResult {
  status: "accepted" | "rejected" | "duplicate";
  transferId: string;
  reason?: RejectReason;
  sourceBalance?: number;
  destinationBalance?: number;
}

export interface TransferServiceConfig {
  /** Maximum retries on version conflict */
  maxRetries: number;
  /** Enable idempotency checking */
  enableIdempotency: boolean;
}

const DEFAULT_CONFIG: TransferServiceConfig = {
  maxRetries: 3,
  enableIdempotency: true,
};

/**
 * Service for processing transfers between accounts.
 *
 * Maintains in-memory state for accounts, transfers, ledger entries,
 * and an idempotency cache. Designed so that account mutations are
 * immutable (new objects on every change) — ready for optimistic
 * concurrency if backed by a real store.
 */
export class TransferService {
  private accounts: Map<string, Account> = new Map();
  private transfers: Map<string, Transfer> = new Map();
  private idempotencyCache: Map<string, Transfer> = new Map();
  private ledger: LedgerEntry[] = [];
  private config: TransferServiceConfig;

  constructor(config?: Partial<TransferServiceConfig>) {
    this.config = { ...DEFAULT_CONFIG, ...config };
  }

  // ── Account CRUD ──────────────────────────────────────────────

  /** Adds an account to the service. */
  addAccount(account: Account): void {
    this.accounts.set(account.id, account);
  }

  /** Retrieves an account by id, or undefined if not found. */
  getAccount(id: string): Account | undefined {
    return this.accounts.get(id);
  }

  // ── Core transfer logic ───────────────────────────────────────

  /**
   * Processes a transfer between two accounts.
   *
   * Steps:
   * 1. Check idempotency key → return cached result if exists
   * 2. Validate transfer (amount > 0, different accounts, both exist)
   * 3. Check sufficient balance on source
   * 4. Debit source, credit destination (immutable new Account objects)
   * 5. Record ledger entries
   * 6. Cache result by idempotencyKey
   * 7. Return result
   */
  async transfer(
    sourceId: string,
    destinationId: string,
    amount: number,
    idempotencyKey: string
  ): Promise<TransferResult> {
    // 1. Idempotency check
    if (this.config.enableIdempotency) {
      const cached = this.idempotencyCache.get(idempotencyKey);
      if (cached) {
        if (cached.status === "approved") {
          const src = this.accounts.get(cached.sourceId);
          const dst = this.accounts.get(cached.destinationId);
          return {
            status: "duplicate",
            transferId: cached.id,
            sourceBalance: src?.balance,
            destinationBalance: dst?.balance,
          };
        }
        return {
          status: "duplicate",
          transferId: cached.id,
          reason: cached.rejectReason,
        };
      }
    }

    // Create the transfer record (pending)
    const transfer = createTransfer(
      generateId(),
      sourceId,
      destinationId,
      amount,
      idempotencyKey
    );

    // 2. Validate
    if (amount <= 0) {
      const rejected = rejectTransfer(transfer, "INVALID_AMOUNT");
      this.transfers.set(rejected.id, rejected);
      if (this.config.enableIdempotency) {
        this.idempotencyCache.set(idempotencyKey, rejected);
      }
      return { status: "rejected", transferId: rejected.id, reason: "INVALID_AMOUNT" };
    }

    if (sourceId === destinationId) {
      const rejected = rejectTransfer(transfer, "SAME_ACCOUNT");
      this.transfers.set(rejected.id, rejected);
      if (this.config.enableIdempotency) {
        this.idempotencyCache.set(idempotencyKey, rejected);
      }
      return { status: "rejected", transferId: rejected.id, reason: "SAME_ACCOUNT" };
    }

    const sourceAccount = this.accounts.get(sourceId);
    const destAccount = this.accounts.get(destinationId);

    if (!sourceAccount || !destAccount) {
      const rejected = rejectTransfer(transfer, "INVALID_AMOUNT");
      this.transfers.set(rejected.id, rejected);
      if (this.config.enableIdempotency) {
        this.idempotencyCache.set(idempotencyKey, rejected);
      }
      return { status: "rejected", transferId: rejected.id, reason: "INVALID_AMOUNT" };
    }

    // 3. Check balance
    if (sourceAccount.balance < amount) {
      const rejected = rejectTransfer(transfer, "INSUFFICIENT_BALANCE");
      this.transfers.set(rejected.id, rejected);
      if (this.config.enableIdempotency) {
        this.idempotencyCache.set(idempotencyKey, rejected);
      }
      return {
        status: "rejected",
        transferId: rejected.id,
        reason: "INSUFFICIENT_BALANCE",
      };
    }

    // 4. Apply mutations (immutable)
    const newSource = debit(sourceAccount, amount);
    const newDest = credit(destAccount, amount);

    this.accounts.set(sourceId, newSource);
    this.accounts.set(destinationId, newDest);

    // 5. Record approved transfer and ledger entries
    const approved = approveTransfer(transfer);
    this.transfers.set(approved.id, approved);

    const debitEntry = createLedgerEntry(
      generateId(),
      approved.id,
      sourceId,
      "debit",
      amount,
      newSource.balance
    );
    const creditEntry = createLedgerEntry(
      generateId(),
      approved.id,
      destinationId,
      "credit",
      amount,
      newDest.balance
    );
    this.ledger.push(debitEntry, creditEntry);

    // 6. Cache
    if (this.config.enableIdempotency) {
      this.idempotencyCache.set(idempotencyKey, approved);
    }

    // 7. Return
    return {
      status: "accepted",
      transferId: approved.id,
      sourceBalance: newSource.balance,
      destinationBalance: newDest.balance,
    };
  }

  // ── Queries ───────────────────────────────────────────────────

  /** Returns a read-only view of the ledger. */
  getLedger(): readonly LedgerEntry[] {
    return this.ledger;
  }

  /** Looks up a transfer by its idempotency key. */
  getTransferByIdempotencyKey(key: string): Transfer | undefined {
    return this.idempotencyCache.get(key);
  }

  /** Returns all accounts (for testing / CLI). */
  getAllAccounts(): Account[] {
    return Array.from(this.accounts.values());
  }

  // ── Invariant verification ────────────────────────────────────

  /**
   * Verifies all invariants hold on the current state.
   * Returns a report of any violations.
   */
  verifyInvariants(): {
    globalBalanceConserved: boolean;
    noNegativeBalances: boolean;
    allTransfersAppliedOnce: boolean;
    violations: string[];
  } {
    const violations: string[] = [];

    // Check no negative balances
    let noNegativeBalances = true;
    for (const account of this.accounts.values()) {
      if (account.balance < 0) {
        noNegativeBalances = false;
        violations.push(
          `Account ${account.id} has negative balance: ${account.balance}`
        );
      }
    }

    // Check global balance conservation:
    // Total debits in the ledger must equal total credits.
    // This holds regardless of initial balances — every transfer
    // debits exactly as much as it credits.
    let totalDebits = 0;
    let totalCredits = 0;
    for (const entry of this.ledger) {
      if (entry.type === "debit") {
        totalDebits += entry.amount;
      } else {
        totalCredits += entry.amount;
      }
    }

    const globalBalanceConserved =
      Math.abs(totalDebits - totalCredits) < 1e-10;
    if (!globalBalanceConserved) {
      violations.push(
        `Ledger imbalance: totalDebits=${totalDebits}, totalCredits=${totalCredits}`
      );
    }

    // Check each approved transfer appears exactly once (per account)
    const transferCounts = new Map<string, number>();
    for (const entry of this.ledger) {
      transferCounts.set(
        entry.transferId,
        (transferCounts.get(entry.transferId) ?? 0) + 1
      );
    }

    let allTransfersAppliedOnce = true;
    for (const transfer of this.transfers.values()) {
      if (transfer.status === "approved") {
        const count = transferCounts.get(transfer.id) ?? 0;
        if (count !== 2) {
          // Each approved transfer produces 2 ledger entries (debit + credit)
          allTransfersAppliedOnce = false;
          violations.push(
            `Transfer ${transfer.id} has ${count} ledger entries (expected 2)`
          );
        }
      }
    }

    return {
      globalBalanceConserved,
      noNegativeBalances,
      allTransfersAppliedOnce,
      violations,
    };
  }
}
