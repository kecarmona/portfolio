# Failure Cases: Transaction Engine

## What happens if the process dies?

**Scenario:** Crash after debiting source, before crediting destination.

**Expected behavior:**
- On restart, detect incomplete transfer via ledger
- Rollback the debit or complete the credit
- Global balance must still be conserved

**Implementation:** WAL-based recovery or ledger replay.

## What happens if a duplicate arrives?

**Scenario:** Same transfer sent twice with same idempotency key.

**Expected behavior:**
- Second request returns the original result
- No additional balance change
- Ledger shows the transfer applied exactly once

## What happens on timeout?

**Scenario:** Transfer takes too long (worker overwhelmed).

**Expected behavior:**
- Transfer stays in pending/processing state
- Eventually retried or timed out
- No partial state left behind

## What happens under increasing load?

**Scenario:** 10x normal traffic.

**Expected behavior:**
- Throughput increases up to a ceiling
- Latency increases but stays bounded
- No inconsistencies introduced
- Retries may increase but system stays correct

## What happens when two operations compete for the same resource?

**Scenario:** Two transfers debit the same account simultaneously.

**Expected behavior:**
- Optimistic concurrency detects conflict
- One succeeds, one retries
- Final state is consistent
- No negative balance ever occurs
