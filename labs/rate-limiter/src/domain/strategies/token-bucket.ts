/**
 * Token Bucket rate limiting strategy.
 *
 * Tokens are added to a bucket at a fixed rate.
 * Each request consumes one token. If no tokens are available, the request is rejected.
 * Allows bursts up to the bucket capacity.
 *
 * Pros: Excellent burst handling, low memory, smooth rate
 * Cons: Slightly more complex to reason about
 */

import type { Limiter, RateLimitResult } from "../limiter.js";

export interface TokenBucketConfig {
  /** Maximum tokens (bucket capacity) */
  capacity: number;
  /** Tokens added per millisecond */
  refillRate: number;
}

export class TokenBucket implements Limiter {
  private config: TokenBucketConfig;
  private buckets: Map<
    string,
    { tokens: number; lastRefill: number }
  > = new Map();

  constructor(config: TokenBucketConfig) {
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
