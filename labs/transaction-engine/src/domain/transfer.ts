/**
 * Transfer domain entity.
 * Represents a money transfer between two accounts.
 * Has an idempotency key to prevent duplicate processing.
 */

export type TransferStatus =
  | "pending"
  | "approved"
  | "rejected"
  | "duplicate";

export interface Transfer {
  /** Unique transfer identifier */
  id: string;
  /** Source account id */
  sourceId: string;
  /** Destination account id */
  destinationId: string;
  /** Amount to transfer (must be positive) */
  amount: number;
  /** Idempotency key for duplicate detection */
  idempotencyKey: string;
  /** Current status */
  status: TransferStatus;
  /** Timestamp of creation */
  createdAt: number;
  /** Rejection reason, if rejected */
  rejectReason?: string;
}

export type RejectReason =
  | "INSUFFICIENT_BALANCE"
  | "WOULD_OVERDRAW_SOURCE"
  | "INVALID_AMOUNT"
  | "SAME_ACCOUNT";

/**
 * Creates a new Transfer in pending status.
 */
export function createTransfer(
  id: string,
  sourceId: string,
  destinationId: string,
  amount: number,
  idempotencyKey: string
): Transfer {
  // TODO: implement
  throw new Error("Not implemented");
}

/**
 * Marks a transfer as approved.
 */
export function approveTransfer(transfer: Transfer): Transfer {
  // TODO: implement
  throw new Error("Not implemented");
}

/**
 * Marks a transfer as rejected with a reason.
 */
export function rejectTransfer(
  transfer: Transfer,
  reason: RejectReason
): Transfer {
  // TODO: implement
  throw new Error("Not implemented");
}
