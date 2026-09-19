#!/bin/bash
set -e

echo "=== Rate Limiter Benchmarks ==="
echo ""

echo "1. Latency Benchmark"
npx tsx benchmarks/latency-benchmark.ts
echo ""

echo "2. Memory Usage Benchmark"
npx tsx benchmarks/memory-usage.ts
echo ""

echo "=== Done ==="
