/**
 * Worker domain entity.
 * Represents a process that claims and executes jobs.
 */

export type WorkerStatus = "idle" | "busy" | "dead";

export interface Worker {
  /** Unique worker identifier */
  id: string;
  /** Current status */
  status: WorkerStatus;
  /** Id of the job currently being processed, if any */
  currentJobId?: string;
  /** Timestamp when the worker was created */
  createdAt: number;
  /** Timestamp of last heartbeat */
  lastHeartbeatAt: number;
  /** Total jobs completed by this worker */
  jobsCompleted: number;
  /** Total jobs failed by this worker */
  jobsFailed: number;
}

/**
 * Creates a new Worker in idle status.
 */
export function createWorker(id: string): Worker {
  // TODO: implement
  throw new Error("Not implemented");
}

/**
 * Claims a job for this worker.
 * Transitions worker to busy status.
 */
export function claimJob(worker: Worker, jobId: string): Worker {
  // TODO: implement
  throw new Error("Not implemented");
}

/**
 * Releases the current job.
 * Transitions worker back to idle status.
 */
export function releaseJob(
  worker: Worker,
  success: boolean
): Worker {
  // TODO: implement
  throw new Error("Not implemented");
}
