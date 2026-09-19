/**
 * Account domain entity.
 * Represents a financial account with an id, owner, and balance.
 * Invariant: balance must never go negative.
 *
 * All mutation functions return new objects (immutable style)
 * with an incremented version number for optimistic concurrency control.
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
 * @throws {Error} if initial balance is negative
 */
export function createAccount(
  id: string,
  owner: string,
  initialBalance: number
): Account {
  if (initialBalance < 0) {
    throw new Error("Initial balance cannot be negative");
  }
  return { id, owner, balance: initialBalance, version: 0 };
}

/**
 * Debits (subtracts) amount from the account.
 * Returns a new Account with decremented balance and incremented version.
 * @throws {Error} if resulting balance would be negative
 */
export function debit(account: Account, amount: number): Account {
  if (amount < 0) {
    throw new Error("Debit amount cannot be negative");
  }
  if (account.balance - amount < 0) {
    throw new Error("Insufficient balance");
  }
  return {
    id: account.id,
    owner: account.owner,
    balance: account.balance - amount,
    version: account.version + 1,
  };
}

/**
 * Credits (adds) amount to the account.
 * Returns a new Account with incremented balance and version.
 */
export function credit(account: Account, amount: number): Account {
  if (amount < 0) {
    throw new Error("Credit amount cannot be negative");
  }
  return {
    id: account.id,
    owner: account.owner,
    balance: account.balance + amount,
    version: account.version + 1,
  };
}
