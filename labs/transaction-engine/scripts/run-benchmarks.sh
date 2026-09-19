#!/bin/bash
set -e

echo "=== Transaction Engine Benchmarks ==="
echo ""

echo "1. Stress Transfer Test"
npx tsx benchmarks/stress-transfer.ts
echo ""

echo "2. Hot Account Test"
npx tsx benchmarks/hot-account.ts
echo ""

echo "=== Done ==="
