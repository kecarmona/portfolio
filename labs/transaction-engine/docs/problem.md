# Problem: Transaction Engine

## Context

A platform processes transfers between accounts. Each transaction moves money from a source account to a destination account.

## Core Challenge

The system must accept, reject, or recover transactions without breaking basic financial properties:

- Money cannot be created from nothing
- Money cannot be destroyed
- Money cannot be duplicated
- Every modification must be auditable

## Why This Is Hard

1. **Concurrency** — many transfers execute simultaneously, potentially touching the same accounts
2. **Duplicates** — the same transfer may arrive multiple times (network retries, client bugs)
3. **Partial failures** — the process may crash mid-transfer, leaving an inconsistent state
4. **Auditability** — every balance change must have a traceable record

## Success Criteria

The engine is successful if:

- Global balance is always conserved (total before == total after)
- No account ever has a negative balance
- Duplicate transfers return the original result without reapplying
- Every balance change has a ledger entry
- Throughput is measurable and latency is reasonable
