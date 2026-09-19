# Architecture: Transaction Engine

## High-Level Design

The transaction engine follows a layered architecture:

```
CLI / API
    ↓
TransferService (Application Layer)
    ↓
Domain Layer (Account, Transfer, Ledger)
    ↓
Infrastructure Layer (Repositories, Persistence)
```

## Domain Model

- **Account** — has an id, owner, and balance (never negative)
- **Transfer** — has source, destination, amount, idempotency key, and status
- **Ledger** — immutable record of every balance change

## Concurrency Strategy

Optimistic concurrency with version numbers on accounts. Each transfer:

1. Reads source and destination with current versions
2. Validates invariants (sufficient balance, no negative result)
3. Applies changes atomically with version check
4. On conflict: retry with fresh reads

## Persistence

In-memory store with optional WAL (Write-Ahead Log) for crash recovery.

## Flow

See [transaction-flow.mmd](diagrams/transaction-flow.mmd) for the detailed transfer flow.

## Trade-offs to Explore

| Decision | Option A | Option B | Chosen |
|----------|----------|----------|--------|
| Concurrency | Pessimistic locks | Optimistic concurrency | TBD |
| Storage | In-memory | SQLite | TBD |
| Idempotency | Request-scoped | Stored in ledger | TBD |
