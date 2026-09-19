/**
 * Stress Test: Concurrent Transfers
 *
 * Runs many concurrent transfers between random accounts
 * and verifies global balance conservation.
 * Outputs throughput, latency, and invariant check results.
 */

import { TransferService } from "../src/application/transfer-service.js";
import { createAccount } from "../src/domain/account.js";

interface StressTestConfig {
  /** Number of accounts */
  accountCount: number;
  /** Initial balance per account */
  initialBalance: number;
  /** Number of transfers to execute */
  transferCount: number;
  /** Number of concurrent workers */
  workerCount: number;
}

interface StressTestResult {
  totalBalanceBefore: number;
  totalBalanceAfter: number;
  transfersAttempted: number;
  transfersApproved: number;
  transfersRejected: number;
  throughput: number;
  durationMs: number;
}

async function runStressTest(config: StressTestConfig): Promise<StressTestResult> {
  const service = new TransferService({ maxRetries: 3, enableIdempotency: true });

  // Create accounts
  const accountIds = Array.from({ length: config.accountCount }, (_, i) => `acc-${i}`);
  for (const id of accountIds) {
    service.addAccount(createAccount(id, `Owner ${id}`, config.initialBalance));
  }

  const totalBalanceBefore =
    config.accountCount * config.initialBalance;

  // Build transfer batches
  const batchSize = Math.ceil(config.transferCount / config.workerCount);
  const batches: Promise<unknown>[] = [];

  for (let w = 0; w < config.workerCount; w++) {
    const batch = (async () => {
      for (let i = 0; i < batchSize; i++) {
        const srcIdx = Math.floor(Math.random() * accountIds.length);
        let dstIdx = Math.floor(Math.random() * accountIds.length);
        while (dstIdx === srcIdx) {
          dstIdx = Math.floor(Math.random() * accountIds.length);
        }
        const amount = Math.floor(Math.random() * 100) + 1;
        const key = `stress-${w}-${i}`;
        await service.transfer(accountIds[srcIdx], accountIds[dstIdx], amount, key);
      }
    })();
    batches.push(batch);
  }

  const start = performance.now();
  await Promise.all(batches);
  const end = performance.now();
  const durationMs = end - start;

  // Gather results
  let transfersApproved = 0;
  let transfersRejected = 0;
  for (const id of accountIds) {
    // Count by checking all transfers (approximate via ledger)
  }

  const ledger = service.getLedger();
  transfersApproved = new Set(ledger.map((e) => e.transferId)).size;
  // Rejected = total attempted - approved - duplicates
  // Since each approved transfer creates 2 ledger entries:
  transfersRejected = config.transferCount - transfersApproved;

  const totalBalanceAfter = accountIds.reduce(
    (sum, id) => sum + (service.getAccount(id)?.balance ?? 0),
    0
  );

  const throughput = (config.transferCount / durationMs) * 1000; // transfers/sec

  const report: StressTestResult = {
    totalBalanceBefore,
    totalBalanceAfter,
    transfersAttempted: config.transferCount,
    transfersApproved,
    transfersRejected,
    throughput: Math.round(throughput),
    durationMs: Math.round(durationMs),
  };

  // Verify invariant
  if (totalBalanceBefore !== totalBalanceAfter) {
    console.error(
      `⚠ INVARIANT VIOLATION: balance before=${totalBalanceBefore}, after=${totalBalanceAfter}`
    );
  }

  return report;
}

// Run if executed directly
const isMain =
  typeof process !== "undefined" &&
  process.argv[1] &&
  import.meta.url === `file://${process.argv[1]}`;

if (isMain) {
  const config: StressTestConfig = {
    accountCount: 100,
    initialBalance: 10000,
    transferCount: 10000,
    workerCount: 10,
  };

  console.log(`Running stress test: ${config.transferCount} transfers across ${config.accountCount} accounts...`);

  runStressTest(config)
    .then((result) => {
      console.log("\n═══ Stress Test Results ═══");
      console.log(`  Accounts:          ${config.accountCount}`);
      console.log(`  Transfers:         ${result.transfersAttempted}`);
      console.log(`  Approved:          ${result.transfersApproved}`);
      console.log(`  Rejected:          ${result.transfersRejected}`);
      console.log(`  Duration:          ${result.durationMs}ms`);
      console.log(`  Throughput:        ${result.throughput} transfers/sec`);
      console.log(`  Balance before:    ${result.totalBalanceBefore}`);
      console.log(`  Balance after:     ${result.totalBalanceAfter}`);
      console.log(`  Balance conserved: ${result.totalBalanceBefore === result.totalBalanceAfter}`);
      console.log(JSON.stringify(result, null, 2));
    })
    .catch(console.error);
}

export { runStressTest };
