# Taste Rubric — Loop Engineering deck

<!-- The visual evaluator (Kimi K3) scores each slide's rendered PNG 0–1 against
     this rubric and writes a paragraph explaining the gap. The human reviews
     this file before anything runs. This file and SPEC.md are the boundary
     everything else respects. Weights are a proposal pending human
     confirmation in Phase 1.4. -->

## Axes (weighted)

| Axis | Weight | What it means |
|-|-|-|
| Content | 0.4 | Claims are correct and traceable to the quick_shutter repo; the narrative arc lands the pinned takeaway; a vibe coder leaves with something reusable on Monday. |
| Design | 0.3 | The Swiss system from the reference deck: hierarchy, whitespace, one idea per slide, type discipline, accent used sparingly. |
| Craft | 0.2 | Speaker notes a human can present from; no overflow/truncation; consistent terminology (loop, planner, generator, evaluator, contract); honest caveats. |
| Originality | 0.1 | The meta-narrative (the deck is built by the loop it describes); real numbers including failures and cost — not a victory lap. Deliberately lowest weight: clarity beats novelty. |

Score each axis 0–1; total = weighted sum. Output the number plus a paragraph
explaining the gap.

## Calibration set

<!-- Scored by the visual evaluator (K3) 2026-09-17. Good renders:
     research/calibration/shots/ (live decks, 1440×810). Slop renders:
     research/calibration/{oneshot,bulletdump,buzzword}/png/ (full exports). -->

### Good references

1. **Evals-101** (the format reference — leelim81.github.io/Evals-101/slides/;
   full source + 3 renders)
2. **Anthony Fu — ViteConf 2025** (talks.antfu.me/2025/viteconf/)
3. **Anthony Fu — "Vite, the on-demand DX" 2022** (talks.antfu.me/2022/vite-on-demand-dx/)

### Slop references (self-produced 2026-09-17, one-pass opencode runs, no loop)

1. **oneshot** — same brief, one prompt, no contract, no iteration
2. **bulletdump** — dense bullet walls, no structure
3. **buzzword** — hype and vagueness, zero numbers

## Calibration run (2026-09-17, K3 visual evaluator)

Caveats recorded: the antfu decks are click-animated, so static hash sampling
captured mostly intro frames — their scores rest on fewer renders (vite-dx
title slide, splash craft) plus deck structure, flagged as weaker evidence.
Slop decks fully exported and scored from full PNG sets. Fact probe:
oneshot and buzzword contain **zero** verifiable numbers; bulletdump's are
correct but unpinned (no source, no way for an audience to check).

| Deck | Class | Content (0.4) | Design (0.3) | Craft (0.2) | Orig (0.1) | Total |
|-|-|-|-|-|-|-|
| Evals-101 | good | 0.85 | 0.85 | 0.70 | 0.70 | **0.81** |
| antfu viteconf2025 | good | 0.80 | 0.90 | 0.60 | 0.80 | **0.79** |
| antfu vite-dx | good | 0.80 | 0.85 | 0.60 | 0.75 | **0.77** |
| oneshot | slop | 0.50 | 0.50 | 0.35 | 0.40 | **0.46** |
| bulletdump | slop | 0.60 | 0.30 | 0.20 | 0.20 | **0.39** |
| buzzword | slop | 0.15 | 0.40 | 0.20 | 0.15 | **0.24** |

**Ranking check: PASS** — all good (0.77–0.81) rank above all slop
(0.24–0.46), separation 0.31. Note the instructive near-miss: oneshot is
*plausible* (clean default theme, competent prose) — it fails on Content
(zero verifiable specifics; ignored its own 15-slide instruction, produced
25) and Craft (3 notes across 25 slides), which is exactly what the contract
mechanisms (fact pinning, speaker-note coverage) exist to catch. The rubric
text ranks the calibration set correctly.

## Threshold

Worst good reference (antfu vite-dx, 0.77) minus a small margin →
**threshold = 0.72**. D1: each slide's weighted rubric score must be ≥ 0.72.
