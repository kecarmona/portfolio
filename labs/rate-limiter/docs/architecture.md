# Architecture: Rate Limiter

## High-Level Design

```
CLI / API
    ↓
RateLimiterService (Application Layer)
    ↓
Domain Layer (Limiter, Strategies)
    ↓
Infrastructure Layer (Storage)
```

## Domain Model

- **Limiter** — interface for all strategies: `allow(userId, timestamp) → boolean`
- **Strategies** — FixedWindow, SlidingWindow, TokenBucket, LeakyBucket
- **Storage** — per-user counter/state store

## Strategy Comparison

| Strategy | How It Works | Precision | Memory | Burst |
|----------|-------------|-----------|--------|-------|
| Fixed Window | Counter per time window | Low | Low | Poor |
| Sliding Window | Weighted blend of current + previous window | High | Medium | Good |
| Token Bucket | Tokens added at rate, consumed per request | High | Low | Excellent |
| Leaky Bucket | Requests queued, processed at fixed rate | High | Medium | Smooth |

## Trade-offs to Explore

| Decision | Option A | Option B | Chosen |
|----------|----------|----------|--------|
| Storage | In-memory Map | Redis-like | TBD |
| Time source | System clock | Monotonic clock | TBD |
| Cleanup | Lazy (on access) | Active (periodic) | TBD |
