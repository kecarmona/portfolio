/**
 * Logger — structured logging for lab experiments.
 *
 * Provides consistent, structured output for debugging and benchmarking.
 * Supports different log levels and structured metadata.
 */

export type LogLevel = "debug" | "info" | "warn" | "error";

export interface LogEntry {
  level: LogLevel;
  message: string;
  timestamp: number;
  metadata?: Record<string, unknown>;
}

/**
 * Structured logger for lab experiments.
 */
export class Logger {
  private level: LogLevel;
  private entries: LogEntry[] = [];

  constructor(level: LogLevel = "info") {
    this.level = level;
  }

  debug(message: string, metadata?: Record<string, unknown>): void {
    // TODO: implement
    throw new Error("Not implemented");
  }

  info(message: string, metadata?: Record<string, unknown>): void {
    // TODO: implement
    throw new Error("Not implemented");
  }

  warn(message: string, metadata?: Record<string, unknown>): void {
    // TODO: implement
    throw new Error("Not implemented");
  }

  error(message: string, metadata?: Record<string, unknown>): void {
    // TODO: implement
    throw new Error("Not implemented");
  }

  /**
   * Returns all collected log entries.
   */
  getEntries(): LogEntry[] {
    return [...this.entries];
  }

  /**
   * Clears all collected entries.
   */
  clear(): void {
    this.entries = [];
  }
}
