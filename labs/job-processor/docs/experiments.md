# Experiments: Job Processor

## Experiment 1: Concurrent Job Processing

**Goal:** Measure throughput with varying worker counts.

**Setup:**
- 1,000 jobs with random processing times (10-100ms)
- Worker counts: 1, 2, 5, 10, 20

**Metrics:**
- Throughput (jobs/s)
- Average processing time
- Worker utilization

## Experiment 2: Worker Failure Recovery

**Goal:** Verify jobs are recovered when workers die.

**Setup:**
- 100 jobs, 5 workers
- Kill 2 workers mid-processing
- Verify all jobs eventually complete or reach DEAD

**Metrics:**
- Jobs recovered
- Jobs sent to DEAD
- Total processing time

## Experiment 3: Failed Job Retries

**Goal:** Verify retry logic and DEAD state.

**Setup:**
- 50 jobs that always fail
- Max retries: 3

**Metrics:**
- Jobs reaching DEAD state
- Total retry attempts
- No infinite loops

## Experiment 4: Timeout Recovery

**Goal:** Verify stuck jobs are recovered.

**Setup:**
- 20 jobs, some with very long processing time (> timeout)
- Short timeout (100ms)

**Metrics:**
- Jobs recovered from timeout
- Jobs eventually completed after recovery

## Experiment 5: Completed Job Non-Reprocessing

**Goal:** Verify completed jobs are never picked up again.

**Setup:**
- Process 500 jobs to completion
- Attempt to reprocess

**Metrics:**
- Zero reprocessed jobs
