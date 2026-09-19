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
 * Creates a new LedgerEntry for a balance change.
 */
export function createLedgerEntry(
  id: string,
  transferId: string,
  accountId: string,
  type: "debit" | "credit",
  amount: number,
  balanceAfter: number
): LedgerEntry {
  return {
    id,
    transferId,
    accountId,
    type,
    amount,
    balanceAfter,
    timestamp: Date.now(),
  };
}

/**
 * Verifies that the global balance is conserved across all ledger entries.
 * Sums initial balances plus all credits minus all debits to compute final total.
 */
export function verifyGlobalBalance(
  entries: LedgerEntry[],
  initialBalances: Map<string, number>
): { totalBefore: number; totalAfter: number; conserved: boolean } {
  let totalBefore = 0;
  for (const balance of initialBalances.values()) {
    totalBefore += balance;
  }

  // Clone initial balances and replay ledger
  const balances = new Map(initialBalances);
  for (const entry of entries) {
    const current = balances.get(entry.accountId) ?? 0;
    if (entry.type === "credit") {
      balances.set(entry.accountId, current + entry.amount);
    } else {
      balances.set(entry.accountId, current - entry.amount);
    }
  }

  let totalAfter = 0;
  for (const balance of balances.values()) {
    totalAfter += balance;
  }

  return {
    totalBefore,
    totalAfter,
    conserved: Math.abs(totalBefore - totalAfter) < 1e-10,
  };
}
