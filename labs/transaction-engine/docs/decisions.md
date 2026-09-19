# Technical Decisions: Transaction Engine

## Decision 1: Concurrency Control

**Options:**
- A: Pessimistic locks (lock accounts before transfer)
- B: Optimistic concurrency (version check on write)
- C: Serialized queue per account

**Trade-offs:**
- A: Safe but throughput bottleneck on hot accounts
- B: Better throughput but retries under contention
- C: Good per-account but complex cross-account ordering

**Status:** TBD — will decide after benchmarking

## Decision 2: Storage Strategy

**Options:**
- A: In-memory with no persistence
- B: In-memory with WAL
- C: SQLite

**Trade-offs:**
- A: Fastest, no crash recovery
- B: Fast with recovery, more complex
- C: Durable but slower

**Status:** TBD

## Decision 3: Idempotency Key Storage

**Options:**
- A: Request-scoped (in-memory map)
- B: Stored in ledger alongside transfers
- C: Separate idempotency table

**Trade-offs:**
- A: Simple, lost on restart
- B: Durable,查询 slightly slower
- C: Clean separation, more tables

**Status:** TBD

## Decision 4: Audit Trail Format

**Options:**
- A: Ledger as append-only log
- B: Ledger as balance snapshots
- C: Event sourcing (full replay)

**Trade-offs:**
- A: Compact, easy to verify
- B: Fast balance reads, larger storage
- C: Full history, expensive replay

**Status:** TBD
