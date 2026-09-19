# Technical Decisions: Rate Limiter

## Decision 1: Time Source

**Options:**
- A: System clock (Date.now())
- B: Monotonic clock (performance.now())

**Trade-offs:**
- A: Real-world time, but can jump backwards
- B: Monotonically increasing, but relative (not wall-clock)

**Status:** TBD

## Decision 2: Storage Backend

**Options:**
- A: In-memory Map (simple, fast)
- B: Redis-like (distributed, persistent)

**Trade-offs:**
- A: Fastest, single-process only
- B: Distributed, network latency

**Status:** TBD

## Decision 3: Cleanup Strategy

**Options:**
- A: Lazy cleanup (remove expired entries on access)
- B: Active cleanup (periodic sweep)

**Trade-offs:**
- A: Zero overhead when idle, memory grows between accesses
- B: Predictable memory, background thread cost

**Status:** TBD

## Decision 4: Algorithm Implementation

**Options:**
- A: All four algorithms for comparison
- B: Two algorithms (sliding window + token bucket)

**Trade-offs:**
- A: Comprehensive comparison, more code
- B: Focused, less maintenance

**Status:** TBD
