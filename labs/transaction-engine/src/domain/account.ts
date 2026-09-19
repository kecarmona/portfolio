/**
 * Account domain entity.
 * Represents a financial account with an id, owner, and balance.
 * Invariant: balance must never go negative.
 */

export interface Account {
  /** Unique identifier */
  id: string;
  /** Account owner name */
  owner: string;
  /** Current balance (never negative) */
  balance: number;
  /** Version number for optimistic concurrency control */
  version: number;
}

/**
 * Creates a new Account with the given properties.
 * Throws if initial balance is negative.
 */
export function createAccount(
  id: string,
  owner: string,
  initialBalance: number
): Account {
  if (initialBalance < 0) {
    throw new Error("Initial balance cannot be negative");
  }
  // TODO: implement
  throw new Error("Not implemented");
}

/**
 * Debits (subtracts) amount from the account.
 * Throws if resulting balance would be negative.
 * Returns a new Account with incremented version.
 */
export function debit(account: Account, amount: number): Account {
  // TODO: implement
  throw new Error("Not implemented");
}

/**
 * Credits (adds) amount to the account.
 * Returns a new Account with incremented version.
 */
export function credit(account: Account, amount: number): Account {
  // TODO: implement
  throw new Error("Not implemented");
}
