/**
 * CLI entry point for the Transaction Engine.
 * Creates 10 accounts with random balances, runs 100 random transfers,
 * and prints a summary.
 */

import { TransferService } from "../application/transfer-service.js";
import { createAccount } from "../domain/account.js";

function generateId(): string {
  return (
    Date.now().toString(36) +
    Math.random().toString(36).substring(2, 10)
  );
}

function randomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

async function main(): Promise<void> {
  const args = process.argv.slice(2);
  const command = args[0];

  switch (command) {
    case "demo": {
      await runDemo();
      break;
    }
    case "transfer": {
      console.log("Usage: tsx src/cli/main.ts demo");
      console.log("  Runs 10 accounts with 100 random transfers.");
      break;
    }
    default:
      await runDemo();
  }
}

async function runDemo(): Promise<void> {
  const service = new TransferService({ maxRetries: 3, enableIdempotency: true });

  // Create 10 accounts with random balances
  const accountCount = 10;
  const accountIds: string[] = [];

  console.log("═══ Creating Accounts ═══");
  for (let i = 0; i < accountCount; i++) {
    const id = `acc-${i + 1}`;
    const balance = randomInt(1000, 10000);
    service.addAccount(createAccount(id, `Owner ${i + 1}`, balance));
    accountIds.push(id);
    console.log(`  ${id}: $${balance}`);
  }

  const initialTotal = accountIds.reduce(
    (sum, id) => sum + (service.getAccount(id)?.balance ?? 0),
    0
  );
  console.log(`\n  Total balance: $${initialTotal}`);

  // Run 100 random transfers
  console.log("\n═══ Running Transfers ═══");
  let approved = 0;
  let rejected = 0;
  let duplicate = 0;

  const transferCount = 100;

  for (let i = 0; i < transferCount; i++) {
    const srcIdx = randomInt(0, accountIds.length - 1);
    let dstIdx = randomInt(0, accountIds.length - 1);
    while (dstIdx === srcIdx) {
      dstIdx = randomInt(0, accountIds.length - 1);
    }

    const amount = randomInt(10, 500);
    const key = `cli-${i}`;

    const result = await service.transfer(
      accountIds[srcIdx],
      accountIds[dstIdx],
      amount,
      key
    );

    switch (result.status) {
      case "accepted":
        approved++;
        break;
      case "rejected":
        rejected++;
        break;
      case "duplicate":
        duplicate++;
        break;
    }
  }

  // Summary
  const finalTotal = accountIds.reduce(
    (sum, id) => sum + (service.getAccount(id)?.balance ?? 0),
    0
  );

  console.log("\n═══ Summary ═══");
  console.log(`  Total processed: ${transferCount}`);
  console.log(`  Approved:        ${approved}`);
  console.log(`  Rejected:        ${rejected}`);
  console.log(`  Duplicates:      ${duplicate}`);
  console.log(`  Balance before:  $${initialTotal}`);
  console.log(`  Balance after:   $${finalTotal}`);
  console.log(`  Conservation:    ${initialTotal === finalTotal ? "✓ OK" : "✗ VIOLATED"}`);

  // Final account balances
  console.log("\n═══ Final Balances ═══");
  for (const id of accountIds) {
    const account = service.getAccount(id);
    if (account) {
      console.log(`  ${id}: $${account.balance} (v${account.version})`);
    }
  }

  // Invariant check
  const invariants = service.verifyInvariants();
  console.log("\n═══ Invariant Check ═══");
  console.log(`  Global balance conserved: ${invariants.globalBalanceConserved}`);
  console.log(`  No negative balances:     ${invariants.noNegativeBalances}`);
  console.log(`  All transfers applied:    ${invariants.allTransfersAppliedOnce}`);
  if (invariants.violations.length > 0) {
    console.log("  Violations:");
    for (const v of invariants.violations) {
      console.log(`    - ${v}`);
    }
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
