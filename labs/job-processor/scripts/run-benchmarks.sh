#!/bin/bash
set -e

echo "=== Job Processor Benchmarks ==="
echo ""

echo "1. Concurrent Jobs Test"
npx tsx benchmarks/concurrent-jobs.ts
echo ""

echo "2. Worker Scalability Test"
npx tsx benchmarks/worker-scalability.ts
echo ""

echo "=== Done ==="
