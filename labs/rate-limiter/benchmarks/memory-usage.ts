/**
 * Memory Usage Benchmark
 *
 * Measures memory consumption for each rate limiting strategy
 * with varying numbers of active users.
 */

interface MemoryBenchmarkConfig {
  /** Strategy to benchmark */
  strategy: "fixed-window" | "sliding-window" | "token-bucket" | "leaky-bucket";
  /** Number of unique users */
  userCount: number;
  /** Requests per user */
  requestsPerUser: number;
}

async function runMemoryBenchmark(
  config: MemoryBenchmarkConfig
): Promise<{
  strategy: string;
  userCount: number;
  heapUsedBytes: number;
  heapTotalBytes: number;
  rssBytes: number;
  bytesPerUser: number;
}> {
  // TODO: implement
  throw new Error("Not implemented");
}

// Run if executed directly
if (import.meta.url === `file://${process.argv[1]}`) {
  const strategies: Array<
    "fixed-window" | "sliding-window" | "token-bucket" | "leaky-bucket"
  > = ["fixed-window", "sliding-window", "token-bucket", "leaky-bucket"];

  for (const strategy of strategies) {
    // Force GC if available
    if (global.gc) global.gc();

    const before = process.memoryUsage();
    const result = await runMemoryBenchmark({
      strategy,
      userCount: 10000,
      requestsPerUser: 10,
    });
    const after = process.memoryUsage();

    console.log(`\n${strategy}:`);
    console.log(`  Users: ${result.userCount}`);
    console.log(`  Heap used: ${(result.heapUsedBytes / 1024 / 1024).toFixed(2)} MB`);
    console.log(`  Bytes/user: ${result.bytesPerUser}`);
  }
}
