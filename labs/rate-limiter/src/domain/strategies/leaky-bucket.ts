/**
 * Leaky Bucket rate limiting strategy.
 *
 * Requests enter a bucket (queue) and are processed at a fixed rate.
 * If the bucket is full, new requests are rejected.
 * Produces smooth, evenly-spaced output.
 *
 * Pros: Smooth output, predictable processing rate
 * Cons: Higher latency under load, more memory for queue
 */

import type { Limiter, RateLimitResult } from "../limiter.js";

export interface LeakyBucketConfig {
  /** Maximum queue size (bucket capacity) */
  capacity: number;
  /** Processing rate (requests per millisecond) */
  leakRate: number;
}

export class LeakyBucket implements Limiter {
  private config: LeakyBucketConfig;
  private buckets: Map<
    string,
    { queue: number[]; lastLeak: number }
  > = new Map();

  constructor(config: LeakyBucketConfig) {
    this.config = config;
  }

  allow(userId: string, timestamp: number): RateLimitResult {
    // TODO: implement
    throw new Error("Not implemented");
  }

  peek(userId: string, timestamp: number): number {
    // TODO: implement
    throw new Error("Not implemented");
  }

  reset(userId: string): void {
    this.buckets.delete(userId);
  }
}
