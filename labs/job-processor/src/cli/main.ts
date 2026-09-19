/**
 * CLI entry point for the Job Processor.
 * Provides commands for enqueuing jobs, checking status, and managing workers.
 */

async function main(): Promise<void> {
  const args = process.argv.slice(2);
  const command = args[0];

  switch (command) {
    case "enqueue": {
      // TODO: implement enqueue command
      // Usage: tsx src/cli/main.ts enqueue <type> <payload-json>
      console.log("Enqueue command — not implemented");
      break;
    }
    case "status": {
      // TODO: implement status command
      console.log("Status command — not implemented");
      break;
    }
    case "workers": {
      // TODO: implement workers command
      console.log("Workers command — not implemented");
      break;
    }
    case "sweep": {
      // TODO: implement sweep command
      console.log("Sweep command — not implemented");
      break;
    }
    default:
      console.log(
        "Usage: tsx src/cli/main.ts <enqueue|status|workers|sweep>"
      );
      process.exit(1);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
