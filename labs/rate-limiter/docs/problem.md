# Problem: Rate Limiter

## Context

A system must allow a maximum number of requests per user within a time window. Example configurations:

- 100 requests / minute
- 10 requests / second
- Max burst of 20

## Core Challenge

Enforce these limits accurately and efficiently under high concurrency while controlling memory consumption and maintaining low decision latency.

## Why This Is Hard

1. **Concurrency** — many users making requests simultaneously
2. **Precision** — boundary effects can allow bursts exceeding limits
3. **Memory** — per-user counters must be cleaned up when expired
4. **Latency** — each request must be evaluated in microseconds

## Success Criteria

The rate limiter is successful if:

- No user exceeds their configured limit
- Decision latency is consistently low
- Memory usage is bounded and predictable
- Different algorithms can be compared fairly
- Results are deterministic for the same input sequence
