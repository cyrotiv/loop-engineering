#!/bin/bash
# Phase 3 build loop (PLAN.md). Runs the generator until progress.md says DONE.
# Invocation: opencode headless, GLM-5.3. Override with SLIDES_MODEL.
cd "$(dirname "$0")"
MODEL="${SLIDES_MODEL:-zai-coding-plan/glm-5.3}"
while ! grep -qx "DONE" progress.md; do
  ts=$(date +%Y%m%d-%H%M%S)
  opencode run -m "$MODEL" "$(cat prompts/generator.md)" > "traces/${ts}-generator.log" 2>&1
  sleep 10
done
