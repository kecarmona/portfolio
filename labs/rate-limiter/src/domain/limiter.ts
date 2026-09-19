/**
 * Limiter interface.
 * All rate limiting strategies must implement this interface.
 */

export interface RateLimitResult {
  /** Whether the request is allowed */
  allowed: boolean;
  /** Number of requests remaining in the window */
  remaining: number;
  /** Timestamp when the limit resets */
  resetAt: number;
  /** Total limit for the window */
  limit: number;
}

/**
 * Interface that all rate limiting strategies must implement.
 */
export interface Limiter {
  /**
   * Determines whether a request should be allowed.
   *
   * @param userId - The user making the request
   * @param timestamp - Current timestamp in milliseconds
   * @returns RateLimitResult with allowed status and metadata
   */
  allow(userId: string, timestamp: number): RateLimitResult;

  /**
   * Returns the current count for a user without consuming capacity.
   */
  peek(userId: string, timestamp: number): number;

  /**
   * Resets the counter for a specific user.
   */
  reset(userId: string): void;
}
