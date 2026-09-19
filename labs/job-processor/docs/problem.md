# Problem: Job Processor

## Context

A queue contains many pending jobs. Workers take jobs, process them, and report results.

## Core Challenge

The system must handle:

- Workers dying mid-processing
- Jobs failing and needing retries
- Jobs taking much longer than expected
- Jobs getting lost or stuck
- Concurrent processing of the same job

## Why This Is Hard

1. **Partial failures** — a worker can crash after picking up a job but before completing it
2. **State management** — jobs must transition through valid states without skipping or duplicating
3. **Timeout detection** — a job stuck in PROCESSING must be recovered
4. **Visibility** — operators need to see current job state at all times

## Success Criteria

The processor is successful if:

- No job is ever lost (every job reaches a final state)
- Completed jobs are never reprocessed
- Failed jobs retry up to a configurable limit
- Stuck jobs are recovered via timeout
- Every state change is recorded
- Throughput scales with worker count
