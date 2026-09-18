# Implementation Plan: Agent Loops for Producing the "Loop Engineering" Deck

**Models:** Kimi K3 (planner + contract attacker + visual evaluator, attended)
+ GLM-5.3 via opencode (generator + mechanical evaluator, headless)
**Method:** the same harness that built Quick Shutter (Karpathy `loops.md` +
Hanako scheduled loops) — the deck's subject and its own production method are
deliberately the same thing.
**Status:** Active — Phase 0 completed 2026-09-16

Guiding rules (carried from the quick_shutter harness):

- Write the loop, not the prompt. The loop is: gather, reason, act, verify, repeat.
- Separate roles: planner, generator, evaluator. A model never grades its own work.
- Negotiate a testable contract before any deck content is written.
- State lives on disk, never in context. Three files should be enough to resume
  after a crash.
- Let failed runs restart from disk state instead of patching forever.
- Keep traces of everything; debug by reading transcripts, not by re-prompting.
- Human approves the risky 5%; agents do the boring 95%.
- The bottleneck always moves; the loop's job is to make the next one visible.

---

## Role assignment

| Role | Model | Why |
|-|-|-|
| Planner | Kimi K3 (attended session) | Requirements extraction with the human; contract attacker (different model family from the generator); orchestrates loop runs |
| Generator | GLM-5.3 (`opencode run`, headless) | Writes `slides/slides.md` + style + assets, one section per iteration |
| Mechanical evaluator | GLM-5.3 (`opencode run`, separate adversarial session) | Runs contract checks; re-derives every cited fact from the quick_shutter repo |
| Visual evaluator | Kimi K3 | Per-slide PNG screenshots scored against `rubric.md` |

Known limitation (accepted per the human's role constraint, 2026-09-16):
generator and mechanical evaluator are the same model family — the self-grading
risk the quick_shutter harness avoided by pairing K3 with GLM. Mitigations:
assertions must be script-decidable; the evaluator runs in a separate session
with an adversarial prompt; the planner (different family) attacks the contract
in Phase 2 and spot-checks Phase 4 claims; the visual/taste gate is K3. The
human arbitrates deadlocks.

## Phase 0 — Scaffold the state layer (done 2026-09-16)

```
SPEC.md                 # the brief as given; Phase 1 refines it
contract.md             # negotiated checklist of testable assertions (empty)
feature_list.json       # machine-readable section queue: id, desc, status, test
progress.md             # done / next / blockers
log.md                  # append-only: ## [YYYY-MM-DD] op | title
rubric.md               # taste rubric for the deck, calibrated in Phase 1.4
prompts/planner.md      # Phase 1 attended requirements prompt
prompts/generator.md    # Phase 3 build-loop prompt (GLM-5.3)
prompts/evaluator.md    # Phase 2/4 evaluator prompt (GLM-5.3)
research/               # Phase 1 outputs + evals101-reference/ (vendored format reference)
traces/                 # raw session transcripts, one file per run
slides/                 # the Slidev deck (stub; pinned @slidev/cli 52.15.2)
exports/                # rendered artifacts (PNG per slide, PDF) — build output
loop.sh                 # the build while-loop
eval.sh                 # the evaluation pass
opencode.json           # headless permissions for opencode runs
```

Pending human gate: `cd slides && npm install` (Slidev dependencies; nothing
builds until then). Pre-installed and verified: node v26.5.0, npm 11.17.0,
opencode 1.18.23 with `zai/glm-5.3` configured.

## Phase 1 — Requirements (human + Kimi K3, attended)

Sub-loop 1.0 (always runs): requirements extraction → `research/outline.md` —
deck concept, pinned audience + single takeaway, P0/P1/P2 section list with a
slide budget each, explicit non-goals, `## Open Questions`. Exit: the human
records `Approved: <date>` in `outline.md`; approval seeds `feature_list.json`.
Mechanics in `prompts/planner.md`.

Conditional sub-loops (skip whatever is already decided):

- **1.1 Scope lock** — talk duration, slide budget band. Gate: numbers in outline.md.
- **1.2 Evidence base** — which quick_shutter artifacts may be cited (log.md,
  contract.md negotiation rounds, feature_list.json notes, traces, token/cost
  stats) → `research/sources.md` with pinned values + repo paths the contract
  can grep. Gate: human confirms nothing off-limits is cited.
- **1.3 Delivery format** — present live (`slidev dev`), static build, PDF
  export; where the final artifact goes. Gate: human picks.
- **1.4 Rubric calibration** — confirm axis weights; name 2 more good decks +
  3 slop decks; visual evaluator ranks the set; threshold = worst good − margin.

Phase 1 exit criteria: `outline.md` approved; 1.1–1.4 done or explicitly
skipped; `feature_list.json` seeded. Last fully manual gate until sign-off.

## Phase 2 — Contract negotiation (generator GLM-5.3 vs planner K3, 2–3 rounds)

- Generator (GLM-5.3 headless) proposes testable assertions in `contract.md`.
- Planner (K3, attended) attacks: kills non-mechanical assertions, demands
  runnable checks and missing edge cases. They argue via `## Negotiation` on
  disk. Human arbitrates deadlocks; post-lock edits to `## Assertions` are a
  human gate.
- Target: 15–25 mechanical assertions across four shapes:
  1. **Build:** `npm run build` and `npm run export:png` exit 0 in `slides/`.
  2. **Mechanical content checks:** slide count in band; pinned section titles
     present in order (grep); speaker notes on every content slide; no
     placeholder text; per-slide body size caps (overflow proxy); terminology
     consistency greps.
  3. **Fact pinning:** every cited number/claim (LOC, tokens, iterations,
     assertion counts, dates) equals a pinned value, each with a repo path +
     grep pattern the evaluator re-runs against `../` (the quick_shutter repo
     root).
  4. **Visual review:** per-slide PNG scored vs `rubric.md`; threshold from 1.4.

## Phase 3 — The build loop

`loop.sh`: while `progress.md` lacks a `DONE` line, run the generator prompt
through `opencode run -m zai/glm-5.3`, one section per iteration, traces to
`traces/`. Restart policy: a sideways run's changes get deleted and rebuilt
from state files — that is the loop working, not failing. Human gates per the
generator prompt (no contract edits, no new dependencies, no publishing, no
touching the parent repo outside `sharing_slides/`).

## Phase 4 — The evaluation loop

`eval.sh` after each build iteration (or on demand): GLM-5.3 mechanical pass +
fact audit against the repo. K3 visual review at section milestones and before
sign-off. Failures become blockers in `progress.md`; the generator owns fixes.

## Phases 5–6 — Out of scope

One-shot deck: no outer loops, no server move. Noted so the omission is
deliberate, not forgotten.

## Standing operational rules

- **Traces.** Every run writes `traces/<ts>-<role>.log`. Divergence → grep the
  trace, fix the prompt at that point, rerun. Never tune by vibe.
- **Harness audits.** On any model swap (GLM-5.3 → 5.4, …), re-test the
  scaffolding assumptions; delete what the model now does for free.
- **Bottleneck checks.** After every improvement, name the slowest/most
  failure-prone stage. Instrument it before adding anything.

## Decisions locked (2026-09-16)

- **Roles** as above. Evaluator/generator invocation: `opencode run -m
  zai-coding-plan/glm-5.3` from `sharing_slides/` (env override `SLIDES_MODEL`).
  `opencode.json` grants headless edit/bash/webfetch/external-directory
  permissions inside this folder. (2026-09-16 incident: the plain `zai`
  provider credential in opencode fails auth; the Z.AI Coding Plan credential
  works — default model pinned to it.)
- **Format:** Slidev deck following the Evals-101 conventions (vendored in
  `research/evals101-reference/`): frontmatter shape, Inter/JetBrains Mono,
  Swiss building blocks (kicker/accent/pill/cardrow/callout/section dividers),
  speaker notes in HTML comments, hash routing, `@slidev/cli` pinned 52.15.2.
- **Delivery:** all three — live, static build, PDF. Static build targets
  GitHub Pages under cyrotiv.github.io; repo name TBD, `--base` parameterized
  at build time (hash routing needs no SPA fallback).
- **Calibration:** one-shot self-produced slop deck approved as a slop
  reference; remaining good/slop refs planner-picked, human confirms at
  Phase 1.4.
- **Human gates:** npm install of slides dependencies (authorized 2026-09-16);
  any `contract.md` edit; publishing or sharing the deck externally; final
  deliverable sign-off; anything touching the parent repo outside
  `sharing_slides/`.

## Open questions remaining

- Repo name for the Pages URL (needed only for the final `--base`).
- Phase 1.4 calibration deck names (planner proposes, human confirms at
  calibration time).
