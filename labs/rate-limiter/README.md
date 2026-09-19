# Rate Limiter

> Multi-strategy rate limiter with precision, latency, and memory comparisons across fixed window, sliding window, token bucket, and leaky bucket algorithms.

## The Problem

A system must allow a maximum number of requests per user within a time window. Example: 100 requests/minute, 10 requests/second, max burst of 20. The challenge is enforcing this accurately and efficiently under high concurrency.

## Main Question

> How can I limit requests per user precisely and efficiently under high concurrency?

## Constraints

- Many active users
- Concurrent requests
- Expiring counters
- Controlled memory consumption
- Low decision latency
- Predictable behavior under bursts

## Algorithms

| Algorithm | Precision | Memory | Burst Handling |
|-----------|-----------|--------|----------------|
| Fixed Window | Low | Low | Poor — boundary burst |
| Sliding Window | High | Medium | Good |
| Token Bucket | High | Low | Excellent |
| Leaky Bucket | High | Medium | Smooth output |

## Invariants

- A user must not exceed the configured limit
- An allowed request must consume capacity
- A rejected request must not consume additional capacity
- The system must release capacity when appropriate
- The decision must be deterministic for the same event sequence

## Architecture

![Architecture](docs/diagrams/architecture.mmd)

## Experiments

1. Single user with normal traffic
2. Single user attempting to exceed the limit
3. Many concurrent users
4. Bursts at window start/end
5. Cross-algorithm comparison

## Results

*Pending implementation — will be populated after benchmarks run.*

## Trade-offs

*Pending — will document decisions after implementation.*

## Run Locally

```bash
pnpm install
pnpm --filter rate-limiter test
pnpm --filter rate-limiter benchmark
```
