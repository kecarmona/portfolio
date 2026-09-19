/**
 * Job state machine.
 * Defines valid transitions and enforces state invariants.
 */

import type { JobStatus } from "./job.js";

/**
 * Map of valid transitions: from → set of allowed 'to' states.
 */
const VALID_TRANSITIONS: Record<JobStatus, Set<JobStatus>> = {
  pending: new Set(["processing"]),
  processing: new Set(["completed", "failed", "retrying"]),
  completed: new Set(), // terminal state
  failed: new Set(["retrying", "dead"]),
  retrying: new Set(["processing"]),
  dead: new Set(), // terminal state
};

/**
 * Checks if a transition from one status to another is valid.
 */
export function canTransition(from: JobStatus, to: JobStatus): boolean {
  // TODO: implement
  throw new Error("Not implemented");
}

/**
 * Returns all valid target states from the given state.
 */
export function validTransitionsFrom(from: JobStatus): JobStatus[] {
  // TODO: implement
  throw new Error("Not implemented");
}

/**
 * Checks if a state is terminal (no further transitions possible).
 */
export function isTerminal(status: JobStatus): boolean {
  // TODO: implement
  throw new Error("Not implemented");
}
