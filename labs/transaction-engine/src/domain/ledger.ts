/**
 * Ledger domain entity.
 * Immutable append-only record of every balance change.
 * Used for auditability and invariant verification.
 */

export interface LedgerEntry {
  /** Unique entry identifier */
  id: string;
  /** Related transfer id */
  transferId: string;
  /** Account affected */
  accountId: string;
  /** Type of change */
  type: "debit" | "credit";
  /** Amount changed */
  amount: number;
  /** Balance after this change */
  balanceAfter: number;
  /** Timestamp */
  timestamp: number;
}

/**
 * Creates a new LedgerEntry.
 */
export function createLedgerEntry(
  id: string,
  transferId: string,
  accountId: string,
  type: "debit" | "credit",
  amount: number,
  balanceAfter: number
): LedgerEntry {
  // TODO: implement
  throw new Error("Not implemented");
}

/**
 * Verifies that the global balance is conserved.
 * Returns the total balance across all accounts.
 */
export function verifyGlobalBalance(
  entries: LedgerEntry[],
  initialBalances: Map<string, number>
): { totalBefore: number; totalAfter: number; conserved: boolean } {
  // TODO: implement
  throw new Error("Not implemented");
}
