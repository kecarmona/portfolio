/**
 * CLI entry point for the Transaction Engine.
 * Provides commands for creating accounts, processing transfers,
 * and verifying invariants.
 */

async function main(): Promise<void> {
  const args = process.argv.slice(2);
  const command = args[0];

  switch (command) {
    case "transfer": {
      // TODO: implement transfer command
      // Usage: tsx src/cli/main.ts transfer <source> <dest> <amount> <idempotencyKey>
      console.log("Transfer command — not implemented");
      break;
    }
    case "accounts": {
      // TODO: implement list accounts command
      console.log("Accounts command — not implemented");
      break;
    }
    case "verify": {
      // TODO: implement invariant verification command
      console.log("Verify command — not implemented");
      break;
    }
    default:
      console.log("Usage: tsx src/cli/main.ts <transfer|accounts|verify>");
      process.exit(1);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
