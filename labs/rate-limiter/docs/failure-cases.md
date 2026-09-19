# Failure Cases: Rate Limiter

## What happens if the process dies?

**Scenario:** Server crashes and restarts.

**Expected behavior:**
- In-memory counters are lost
- All users get fresh quotas (safe default)
- No corruption, no incorrect rejections

## What happens on clock skew?

**Scenario:** System clock jumps forward or backward.

**Expected behavior:**
- Forward: window may expire early (slightly permissive)
- Backward: window may not expire (slightly restrictive)
- Neither should cause crashes or corruption

## What happens under extreme load?

**Scenario:** 10,000 requests/second for a single user.

**Expected behavior:**
- Rejection rate increases proportionally
- Latency stays low (O(1) per decision)
- Memory stays bounded (one entry per active user)

## What happens with rapid user turnover?

**Scenario:** 100,000 unique users, each making 1 request.

**Expected behavior:**
- Memory grows with unique users
- Lazy cleanup prevents unbounded growth
- No performance degradation per-request

## What happens when two requests arrive simultaneously?

**Scenario:** Two concurrent requests for the same user at the same timestamp.

**Expected behavior:**
- Atomic counter increment ensures correct count
- One allowed, one rejected (if at limit)
- No race condition
