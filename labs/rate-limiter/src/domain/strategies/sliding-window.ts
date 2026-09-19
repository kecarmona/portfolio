/**
 * Sliding Window rate limiting strategy.
 *
 * Uses a weighted blend of the current and previous window counts
 * to provide a more accurate approximation of the sliding window.
 *
 * Pros: Higher precision than fixed window, handles boundary bursts
 * Cons: Slightly more memory, approximate (not exact)
 */

import type { Limiter, RateLimitResult } from "../limiter.js";

export interface SlidingWindowConfig {
  /** Maximum requests per window */
  maxRequests: number;
  /** Window duration in milliseconds */
  windowMs: number;
}

export class SlidingWindow implements Limiter {
  private config: SlidingWindowConfig;
  private counters: Map<
    string,
    { currentCount: number; previousCount: number; windowStart: number }
  > = new Map();

  constructor(config: SlidingWindowConfig) {
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
    this.counters.delete(userId);
  }
}
