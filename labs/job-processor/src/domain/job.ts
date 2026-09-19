/**
 * Job domain entity.
 * Represents a unit of work to be processed by a worker.
 */

export type JobStatus =
  | "pending"
  | "processing"
  | "completed"
  | "failed"
  | "retrying"
  | "dead";

export interface Job {
  /** Unique job identifier */
  id: string;
  /** Job type identifier */
  type: string;
  /** Arbitrary payload data */
  payload: Record<string, unknown>;
  /** Current status */
  status: JobStatus;
  /** Number of retry attempts so far */
  retryCount: number;
  /** Maximum number of retries allowed */
  maxRetries: number;
  /** Processing timeout in milliseconds */
  timeoutMs: number;
  /** Worker id currently processing this job, if any */
  assignedWorkerId?: string;
  /** Timestamp when the job was created */
  createdAt: number;
  /** Timestamp when processing started */
  processingStartedAt?: number;
  /** State transition history */
  history: JobTransition[];
  /** Result data, if completed */
  result?: Record<string, unknown>;
  /** Error message, if failed */
  error?: string;
}

export interface JobTransition {
  from: JobStatus;
  to: JobStatus;
  timestamp: number;
  reason?: string;
}

/**
 * Creates a new Job in pending status.
 */
export function createJob(
  id: string,
  type: string,
  payload: Record<string, unknown>,
  maxRetries: number,
  timeoutMs: number
): Job {
  // TODO: implement
  throw new Error("Not implemented");
}

/**
 * Validates that a state transition is allowed.
 */
export function isValidTransition(from: JobStatus, to: JobStatus): boolean {
  // TODO: implement
  throw new Error("Not implemented");
}

/**
 * Transitions a job to a new status.
 * Throws if the transition is invalid.
 */
export function transitionJob(
  job: Job,
  to: JobStatus,
  reason?: string
): Job {
  // TODO: implement
  throw new Error("Not implemented");
}
