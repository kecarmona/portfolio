/**
 * JobProcessor — application layer.
 * Orchestrates job creation, claiming, processing, and recovery.
 */

import type { Job } from "../domain/job.js";
import type { Worker } from "../domain/worker.js";

export interface JobProcessorConfig {
  /** Number of workers in the pool */
  workerCount: number;
  /** Default job timeout in milliseconds */
  defaultTimeoutMs: number;
  /** Maximum retries for failed jobs */
  maxRetries: number;
  /** Sweep interval for stuck job recovery in milliseconds */
  sweepIntervalMs: number;
}

export interface ProcessingResult {
  jobId: string;
  status: "completed" | "failed" | "retried" | "dead";
  duration: number;
  error?: string;
}

/**
 * Core job processor that manages the lifecycle of jobs.
 */
export class JobProcessor {
  private config: JobProcessorConfig;
  private jobs: Map<string, Job> = new Map();
  private workers: Map<string, Worker> = new Map();

  constructor(config: JobProcessorConfig) {
    this.config = config;
  }

  /**
   * Enqueues a new job for processing.
   */
  async enqueue(
    type: string,
    payload: Record<string, unknown>
  ): Promise<Job> {
    // TODO: implement
    throw new Error("Not implemented");
  }

  /**
   * Claims the next available job for a worker.
   * Uses atomic CAS to prevent double-claiming.
   */
  async claimNextJob(workerId: string): Promise<Job | null> {
    // TODO: implement
    throw new Error("Not implemented");
  }

  /**
   * Marks a job as completed with a result.
   */
  async completeJob(
    jobId: string,
    result: Record<string, unknown>
  ): Promise<void> {
    // TODO: implement
    throw new Error("Not implemented");
  }

  /**
   * Marks a job as failed and decides whether to retry or send to dead.
   */
  async failJob(jobId: string, error: string): Promise<void> {
    // TODO: implement
    throw new Error("Not implemented");
  }

  /**
   * Sweeper: finds stuck jobs in PROCESSING state that exceeded their timeout.
   * Retries them or marks as DEAD.
   */
  async sweepStuckJobs(): Promise<ProcessingResult[]> {
    // TODO: implement
    throw new Error("Not implemented");
  }

  /**
   * Returns current status of all jobs.
   */
  getStats(): {
    total: number;
    pending: number;
    processing: number;
    completed: number;
    failed: number;
    dead: number;
  } {
    // TODO: implement
    throw new Error("Not implemented");
  }
}
