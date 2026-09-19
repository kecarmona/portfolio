/**
 * Fixed Window rate limiting strategy.
 *
 * Divides time into fixed windows (e.g., 1-minute intervals).
 * Counts requests within each window. Resets at window boundary.
 *
 * Pros: Simple, low memory
 * Cons: Boundary burst problem — allows 2x requests at window edges
 */

import type { Limiter, RateLimitResult } from "../limiter.js";

export interface FixedWindowConfig {
  /** Maximum requests per window */
  maxRequests: number;
  /** Window duration in milliseconds */
  windowMs: number;
}

export class FixedWindow implements Limiter {
  private config: FixedWindowConfig;
  private counters: Map<string, { count: number; windowStart: number }> =
    new Map();

  constructor(config: FixedWindowConfig) {
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
