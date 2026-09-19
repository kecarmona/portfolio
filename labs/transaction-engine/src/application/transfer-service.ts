/**
 * TransferService — application layer.
 * Orchestrates the transfer process: validation, concurrency control,
 * idempotency check, and audit trail.
 */

import type { Account } from "../domain/account.js";
import type { Transfer, RejectReason } from "../domain/transfer.js";
import type { LedgerEntry } from "../domain/ledger.js";

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

/**
 * Service for processing transfers between accounts.
 */
export class TransferService {
  private config: TransferServiceConfig;

  constructor(config: TransferServiceConfig) {
    this.config = config;
  }

  /**
   * Processes a transfer between two accounts.
   *
   * Steps:
   * 1. Check idempotency key → return cached result if exists
   * 2. Validate transfer (amount > 0, different accounts)
   * 3. Check sufficient balance
   * 4. Debit source (with version check)
   * 5. Credit destination (with version check)
   * 6. Record ledger entries
   * 7. Return result
   */
  async transfer(
    sourceId: string,
    destinationId: string,
    amount: number,
    idempotencyKey: string
  ): Promise<TransferResult> {
    // TODO: implement
    throw new Error("Not implemented");
  }

  /**
   * Verifies all invariants hold.
   * Returns a report of any violations.
   */
  verifyInvariants(): {
    globalBalanceConserved: boolean;
    noNegativeBalances: boolean;
    allTransfersAppliedOnce: boolean;
    violations: string[];
  } {
    // TODO: implement
    throw new Error("Not implemented");
  }
}
