# Failure Cases: Job Processor

## What happens if a worker dies?

**Scenario:** Worker crashes after claiming a job but before completing it.

**Expected behavior:**
- Job stays in PROCESSING state
- Timeout sweeper detects stuck job
- Job transitions to RETRYING (if retries remain) or DEAD
- No data corruption

## What happens on duplicate processing?

**Scenario:** Two workers claim the same job simultaneously.

**Expected behavior:**
- Atomic claim ensures only one worker wins
- Second worker gets a different job or waits
- Job is processed exactly once

## What happens on timeout?

**Scenario:** A job takes longer than the configured timeout.

**Expected behavior:**
- Sweeper detects expired PROCESSING job
- Job is retried or sent to DEAD
- Original worker's result is ignored (if it arrives late)

## What happens under increasing load?

**Scenario:** 10x normal job volume.

**Expected behavior:**
- Throughput increases with worker count
- Queue depth grows but jobs are not lost
- Latency increases but remains bounded

## What happens when two operations compete?

**Scenario:** Two workers try to claim the same PENDING job.

**Expected behavior:**
- CAS operation ensures atomicity
- One worker wins, one gets next available job
- No double-processing
