# Experiments: Rate Limiter

## Experiment 1: Single User Normal Traffic

**Goal:** Verify basic rate limiting works correctly.

**Setup:**
- 1 user, 100 req/min limit
- 50 requests over 30 seconds

**Metrics:**
- All 50 allowed
- No false rejections

## Experiment 2: Single User Exceeding Limit

**Goal:** Verify limit enforcement.

**Setup:**
- 1 user, 10 req/min limit
- 20 requests in rapid succession

**Metrics:**
- First 10 allowed
- Last 10 rejected
- Counter accuracy

## Experiment 3: Many Concurrent Users

**Goal:** Verify no cross-user interference.

**Setup:**
- 100 users, each with 10 req/min limit
- 10 requests per user concurrently

**Metrics:**
- All 1000 requests allowed (within limits)
- No user affects another's counter

## Experiment 4: Boundary Bursts

**Goal:** Compare how algorithms handle window boundaries.

**Setup:**
- 1 user, 10 req/min limit
- 10 requests at T-1s, 10 requests at T+1s (across window boundary)

**Metrics:**
- Fixed Window: allows 20 (boundary burst)
- Sliding Window: allows ~10 (weighted)
- Token Bucket: allows based on capacity

## Experiment 5: Cross-Algorithm Comparison

**Goal:** Fair comparison of all four strategies.

**Setup:**
- Same traffic pattern for all algorithms
- Measure precision, latency, memory

**Metrics:**
- Requests evaluated / allowed / rejected
- Latency p50/p95
- Memory usage
