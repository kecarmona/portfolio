# Experiments: Transaction Engine

## Experiment 1: Concurrent Random Transfers

**Goal:** Verify global balance is conserved under high concurrency.

**Setup:**
- 100 accounts with random initial balances
- 10,000 transfers between random accounts
- 10 concurrent workers

**Metrics:**
- Total balance before vs after
- Number of failed transfers
- Throughput (ops/s)
- Latency p50/p95

## Experiment 2: Hot Account Contention

**Goal:** Measure throughput when many transfers target the same account.

**Setup:**
- 10 accounts, 1 "hot" account receiving 80% of transfers
- 5,000 transfers total
- 10 concurrent workers

**Metrics:**
- Retry rate
- Throughput degradation vs Experiment 1
- Latency p95

## Experiment 3: Duplicate Rejection

**Goal:** Verify idempotency — same transfer applied twice returns original result.

**Setup:**
- Send the same transfer (same idempotency key) 100 times
- Concurrent workers

**Metrics:**
- Number of transfers actually applied (should be 1)
- Balance integrity
- Response consistency

## Experiment 4: Insufficient Balance

**Goal:** Verify rejected transfers don't modify balances.

**Setup:**
- Account with balance 100
- 10 transfers of 200 each (all should fail)
- Concurrent workers

**Metrics:**
- Balance unchanged
- No ledger entries for rejected transfers

## Experiment 5: Mid-Processing Failure

**Goal:** Verify system recovers from crash during transfer.

**Setup:**
- Simulate process death after debit, before credit
- Restart and verify consistency

**Metrics:**
- Balance conservation
- Ledger completeness
