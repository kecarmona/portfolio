# Job Processor

> Fault-tolerant background job processor with explicit states, retries, timeout recovery, and worker failure simulation.

## The Problem

A queue contains many pending jobs. Workers take jobs, process them, and report results. The system must handle errors, retries, duplicates, timeouts, and jobs that get stuck mid-processing.

## Main Question

> How can I guarantee that a job is never lost when a worker dies during processing?

## Constraints

- A worker can die during processing
- A job can fail and need retries
- Some jobs take much longer than others
- A job must not be lost indefinitely
- A job must not be processed twice at the same time
- There must be visibility into each job's current state

## States

```
PENDING → PROCESSING → COMPLETED
                        ↓
                    RETRYING → PROCESSING
                        ↓
                      FAILED → DEAD
```

## Invariants

- Every job must be in a valid state
- A completed job must never re-execute
- A failed job must retry up to a defined limit
- A job in PROCESSING that exceeds its timeout must be recovered
- No job may disappear without a final state
- Every state change must be recorded

## Architecture

![Architecture](docs/diagrams/architecture.mmd)

## Experiments

1. Process N jobs with multiple workers
2. Simulate workers dying before completion
3. Simulate jobs failing multiple times
4. Verify expired jobs become available again
5. Verify completed jobs are not reprocessed
6. Measure throughput with different worker counts

## Results

*Pending implementation — will be populated after benchmarks run.*

## Trade-offs

*Pending — will document decisions after implementation.*

## Run Locally

```bash
pnpm install
pnpm --filter job-processor test
pnpm --filter job-processor benchmark
```
