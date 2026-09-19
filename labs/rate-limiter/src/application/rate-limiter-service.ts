/**
 * RateLimiterService — application layer.
 * Provides a unified API for rate limiting with configurable strategies.
 */

import type { Limiter, RateLimitResult } from "../domain/limiter.js";
import { FixedWindow } from "../domain/strategies/fixed-window.js";
import { SlidingWindow } from "../domain/strategies/sliding-window.js";
import { TokenBucket } from "../domain/strategies/token-bucket.js";
import { LeakyBucket } from "../domain/strategies/leaky-bucket.js";

export type StrategyType =
  | "fixed-window"
  | "sliding-window"
  | "token-bucket"
  | "leaky-bucket";

export interface RateLimiterServiceConfig {
  /** Rate limiting strategy to use */
  strategy: StrategyType;
  /** Maximum requests per window (for window-based strategies) */
  maxRequests: number;
  /** Window duration in milliseconds (for window-based strategies) */
  windowMs: number;
  /** Bucket capacity (for bucket-based strategies) */
  capacity?: number;
  /** Refill/leak rate in requests per millisecond (for bucket-based strategies) */
  refillRate?: number;
}

/**
 * Service that wraps different rate limiting strategies behind a unified API.
 */
export class RateLimiterService {
  private limiter: Limiter;
  private strategy: StrategyType;

  constructor(config: RateLimiterServiceConfig) {
    this.strategy = config.strategy;

    switch (config.strategy) {
      case "fixed-window":
        this.limiter = new FixedWindow({
          maxRequests: config.maxRequests,
          windowMs: config.windowMs,
        });
        break;
      case "sliding-window":
        this.limiter = new SlidingWindow({
          maxRequests: config.maxRequests,
          windowMs: config.windowMs,
        });
        break;
      case "token-bucket":
        this.limiter = new TokenBucket({
          capacity: config.capacity ?? config.maxRequests,
          refillRate: config.refillRate ?? config.maxRequests / config.windowMs,
        });
        break;
      case "leaky-bucket":
        this.limiter = new LeakyBucket({
          capacity: config.capacity ?? config.maxRequests,
          leakRate: config.refillRate ?? config.maxRequests / config.windowMs,
        });
        break;
      default:
        throw new Error(`Unknown strategy: ${config.strategy}`);
    }
  }

  /**
   * Checks whether a request from the given user should be allowed.
   */
  check(userId: string, timestamp: number): RateLimitResult {
    return this.limiter.allow(userId, timestamp);
  }

  /**
   * Returns current count without consuming capacity.
   */
  peek(userId: string, timestamp: number): number {
    return this.limiter.peek(userId, timestamp);
  }

  /**
   * Resets the counter for a user.
   */
  reset(userId: string): void {
    this.limiter.reset(userId);
  }

  /**
   * Returns the active strategy name.
   */
  getStrategy(): StrategyType {
    return this.strategy;
  }
}
