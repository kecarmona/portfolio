# Architecture: Job Processor

## High-Level Design

```
CLI / API
    ↓
JobProcessor (Application Layer)
    ↓
Domain Layer (Job, Worker, JobState)
    ↓
Infrastructure Layer (WorkerPool, Persistence)
```

## Domain Model

- **Job** — has id, payload, state, retry count, max retries, timeout, and history
- **Worker** — takes jobs from queue, processes them, reports result
- **JobState** — enum of valid states with transition rules

## State Machine

```
PENDING → PROCESSING → COMPLETED
    ↓           ↓
    ↓       RETRYING → PROCESSING
    ↓           ↓
    ↓         FAILED → DEAD
    ↓
  (claimed by worker)
```

## Concurrency Strategy

Atomic claim: workers CAS (compare-and-swap) the job state from PENDING to PROCESSING. Only one worker wins.

## Recovery

A sweeper runs periodically:

1. Find jobs in PROCESSING that exceeded their timeout
2. If retries remaining: transition to RETRYING → PENDING
3. If retries exhausted: transition to FAILED → DEAD

## Trade-offs to Explore

| Decision | Option A | Option B | Chosen |
|----------|----------|----------|--------|
| Claim | Polling | Event-driven | TBD |
| Storage | In-memory | SQLite | TBD |
| Recovery | Periodic sweep | Heartbeat-based | TBD |
