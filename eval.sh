#!/bin/bash
# The evaluation pass (PLAN.md Phase 4). Also used for Phase 2 negotiation
# rounds (mode is selected inside prompts/evaluator.md from contract.md state).
# Invocation: opencode headless, GLM-5.3. Override with SLIDES_MODEL.
cd "$(dirname "$0")"
MODEL="${SLIDES_MODEL:-zai-coding-plan/glm-5.3}"
ts=$(date +%Y%m%d-%H%M%S)
opencode run -m "$MODEL" "$(cat prompts/evaluator.md)" > "traces/${ts}-evaluator.log" 2>&1
