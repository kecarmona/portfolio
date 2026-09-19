/**
 * Hot Account Benchmark
 *
 * Tests throughput when many transfers target the same account.
 * Measures contention and retry rates.
 */

import { TransferService } from "../src/application/transfer-service.js";
import { createAccount } from "../src/domain/account.js";

interface HotAccountConfig {
  /** Number of accounts */
  accountCount: number;
  /** Initial balance per account */
  initialBalance: number;
  /** Number of transfers to execute */
  transferCount: number;
  /** Percentage of transfers targeting the hot account */
  hotPercentage: number;
  /** Number of concurrent workers */
  workerCount: number;
}

interface HotAccountResult {
  hotAccountTransfers: number;
  retryCount: number;
  throughput: number;
  durationMs: number;
  p95LatencyMs: number;
}

async function runHotAccountBenchmark(
  config: HotAccountConfig
): Promise<HotAccountResult> {
  const service = new TransferService({ maxRetries: 3, enableIdempotency: true });

  // Create accounts — first one is the "hot" account
  const accountIds = Array.from({ length: config.accountCount }, (_, i) => `acc-${i}`);
  for (const id of accountIds) {
    service.addAccount(createAccount(id, `Owner ${id}`, config.initialBalance));
  }

  const hotAccountId = accountIds[0];
  const otherAccounts = accountIds.slice(1);

  // Build transfers: hotPercentage go to/from the hot account
  const latencies: number[] = [];
  let retryCount = 0;

  const batchSize = Math.ceil(config.transferCount / config.workerCount);
  const batches: Promise<unknown>[] = [];

  for (let w = 0; w < config.workerCount; w++) {
    const batch = (async () => {
      for (let i = 0; i < batchSize; i++) {
        const isHot = Math.random() * 100 < config.hotPercentage;
        let src: string;
        let dst: string;

        if (isHot) {
          // Transfer involving the hot account
          const other =
            otherAccounts[Math.floor(Math.random() * otherAccounts.length)];
          if (Math.random() < 0.5) {
            src = hotAccountId;
            dst = other;
          } else {
            src = other;
            dst = hotAccountId;
          }
        } else {
          // Transfer between two random non-hot accounts
          const idx1 = Math.floor(Math.random() * otherAccounts.length);
          let idx2 = Math.floor(Math.random() * otherAccounts.length);
          while (idx2 === idx1) {
            idx2 = Math.floor(Math.random() * otherAccounts.length);
          }
          src = otherAccounts[idx1];
          dst = otherAccounts[idx2];
        }

        const amount = Math.floor(Math.random() * 100) + 1;
        const key = `hot-${w}-${i}`;

        const start = performance.now();
        const result = await service.transfer(src, dst, amount, key);
        const elapsed = performance.now() - start;

        latencies.push(elapsed);
        if (result.status === "rejected") {
          retryCount++;
        }
      }
    })();
    batches.push(batch);
  }

  const start = performance.now();
  await Promise.all(batches);
  const durationMs = performance.now() - start;

  // Count hot-account transfers from ledger
  const ledger = service.getLedger();
  const hotAccountTransfers = new Set(
    ledger
      .filter(
        (e) =>
          e.accountId === hotAccountId ||
          ledger.some(
            (e2) =>
              e2.transferId === e.transferId &&
              e2.accountId === hotAccountId
          )
      )
      .map((e) => e.transferId)
  ).size;

  // Compute p95 latency
  latencies.sort((a, b) => a - b);
  const p95Index = Math.floor(latencies.length * 0.95);
  const p95LatencyMs = latencies[p95Index] ?? 0;

  const throughput = (config.transferCount / durationMs) * 1000;

  return {
    hotAccountTransfers,
    retryCount,
    throughput: Math.round(throughput),
    durationMs: Math.round(durationMs),
    p95LatencyMs: Math.round(p95LatencyMs * 100) / 100,
  };
}

// Run if executed directly
const isMain =
  typeof process !== "undefined" &&
  process.argv[1] &&
  import.meta.url === `file://${process.argv[1]}`;

if (isMain) {
  const config: HotAccountConfig = {
    accountCount: 10,
    initialBalance: 100000,
    transferCount: 5000,
    hotPercentage: 80,
    workerCount: 10,
  };

  console.log(
    `Running hot-account benchmark: ${config.transferCount} transfers, ${config.hotPercentage}% targeting hot account...`
  );

  runHotAccountBenchmark(config)
    .then((result) => {
      console.log("\n═══ Hot Account Benchmark Results ═══");
      console.log(`  Hot account transfers: ${result.hotAccountTransfers}`);
      console.log(`  Rejected (retries):    ${result.retryCount}`);
      console.log(`  Duration:              ${result.durationMs}ms`);
      console.log(`  Throughput:            ${result.throughput} transfers/sec`);
      console.log(`  p95 latency:           ${result.p95LatencyMs}ms`);
      console.log(JSON.stringify(result, null, 2));
    })
    .catch(console.error);
}

export { runHotAccountBenchmark };
