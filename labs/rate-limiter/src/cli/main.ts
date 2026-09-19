/**
 * CLI entry point for the Rate Limiter.
 * Provides commands for testing rate limiting with different strategies.
 */

async function main(): Promise<void> {
  const args = process.argv.slice(2);
  const command = args[0];

  switch (command) {
    case "check": {
      // TODO: implement check command
      // Usage: tsx src/cli/main.ts check <userId> <strategy>
      console.log("Check command — not implemented");
      break;
    }
    case "compare": {
      // TODO: implement compare command
      // Usage: tsx src/cli/main.ts compare <userId> <requests> <interval>
      console.log("Compare command — not implemented");
      break;
    }
    case "benchmark": {
      // TODO: implement benchmark command
      console.log("Benchmark command — not implemented");
      break;
    }
    default:
      console.log(
        "Usage: tsx src/cli/main.ts <check|compare|benchmark>"
      );
      process.exit(1);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
