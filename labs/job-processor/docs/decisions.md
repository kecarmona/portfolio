# Technical Decisions: Job Processor

## Decision 1: Job Claim Strategy

**Options:**
- A: Polling (workers periodically check for available jobs)
- B: Event-driven (push jobs to workers via channels/queues)

**Trade-offs:**
- A: Simple, but latency取决于 poll interval
- B: Lower latency, more complex infrastructure

**Status:** TBD

## Decision 2: Storage Strategy

**Options:**
- A: In-memory with no persistence
- B: SQLite for durability

**Trade-offs:**
- A: Fastest, no crash recovery
- B: Durable, slower but recoverable

**Status:** TBD

## Decision 3: Recovery Mechanism

**Options:**
- A: Periodic sweep (check for stuck jobs every N seconds)
- B: Heartbeat-based (workers must heartbeat, missing heartbeat = dead)

**Trade-offs:**
- A: Simple, recovery latency = sweep interval
- B: Faster detection, workers must implement heartbeat logic

**Status:** TBD

## Decision 4: State History Format

**Options:**
- A: Array of {from, to, timestamp} tuples
- B: Full event log (event sourcing)

**Trade-offs:**
- A: Compact, sufficient for audit
- B: Full replay capability, more storage

**Status:** TBD
