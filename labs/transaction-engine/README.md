# Transaction Engine

> Concurrent transfer engine with idempotency, audit trails, and verifiable financial invariants.

## The Problem

A platform processes transfers between accounts. Each transaction moves money from a source account to a destination account. The system must accept, reject, or recover transactions without breaking basic financial properties — no money created, destroyed, or duplicated.

## Main Question

> How can I process concurrent transfers while guaranteeing that the global balance remains correct, no account goes negative, and a duplicate transfer is never applied twice?

## Constraints

- Many transfers can execute concurrently
- Multiple transfers may touch the same account
- An account cannot have a negative balance
- A transfer may arrive duplicated
- The process can fail mid-processing
- Results must be auditable
- Latency must remain reasonably low

## Invariants

- Total money before == total money after
- No account may have a negative balance
- An approved transfer is applied exactly once
- A rejected transfer modifies no balances
- A duplicate transfer returns the original result
- Every balance change has an auditable ledger entry

## Architecture

![Architecture](docs/diagrams/architecture.mmd)
![Transfer Flow](docs/diagrams/transaction-flow.mmd)

## Experiments

1. Many concurrent transfers between random accounts
2. Many concurrent transfers against the same account
3. Same transfer sent multiple times with the same idempotency key
4. Simulate insufficient balance
5. Simulate failures before/after recording a transfer
6. Verify global balance doesn't change incorrectly

## Results

*Pending implementation — will be populated after benchmarks run.*

## Trade-offs

*Pending — will document decisions after implementation.*

## Run Locally

```bash
pnpm install
pnpm --filter transaction-engine test
pnpm --filter transaction-engine benchmark
```
