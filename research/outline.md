# Outline — Loop Engineering deck

Status: **Approved: 2026-09-16** (human, verbatim — "approved").
`feature_list.json` seeded F1–F8 from the P0 list; Phase 2 unlocked.

## Deck concept

A 30-minute insider-casual briefing that teaches experienced vibe coders to
think in **loops, not prompts** — using Quick Shutter, a real iOS app built
by exactly such a loop, as the worked example, and revealing at the end that
the deck itself was produced by the same machinery. **Title (ratified
2026-09-17): "Loop Engineering — Think in Loops, Not Prompts"; subtitle
"State on Disk, Roles Separated, Contract Before Code"; "while you sleep"
lives on as cover rhetoric, never a cited fact.** The learning points lead;
the app is evidence.

## Audience & takeaway (pinned 2026-09-16)

- **Audience:** experienced vibe coders / low-code engineers at a tech
  consulting firm. Tone: insider-casual ("while you sleep"), zero hype.
- **Takeaway:** *Think in terms of loops, not the prompt — state on disk,
  roles separated, contract before code.*

## Constraints (pinned 2026-09-16)

- 30-minute slot; 15–20 slides was the target band, not a rule — content
  wins. **Amended 2026-09-17 (human directive, maintenance slide): 21
  slides; contract band becomes [15, 21].**
- **Visual/verbosity balance (human directive 2026-09-17):** ≤ 110 visible
  words per content slide (cap), ~70 target; every content slide carries at
  least one structural visual element (cardrow / callout / stat / table /
  pill row / fenced code / image). Reference deck measured: mean 71 words,
  22/26 slides with ≥1 visual element.
- Delivery: all three — live (`slidev dev`), static build, PDF export.
- Meta-narrative permitted: the deck may reveal it is loop-produced, with its
  own traces/contract as evidence.
- All quick_shutter artifacts are quotable (contract negotiation rounds,
  failure logs, token stats) — with enough context explained for the audience
  to follow each citation.

## Sections

### P0 (must-have) — 20 slides draft budget

- **F1 Opening: the exhibit** — 2 slides. Cover; Quick Shutter in numbers
  (real shipped iOS app, 10 features, 30 mechanical assertions, built
  unattended overnight). Evidence: `../../feature_list.json`,
  `../../contract.md` status header.
- **F2 Why loops** — 3 slides. (a) A prompt runs once and dies; a loop is
  gather → reason → act → verify → repeat — more efficient than re-prompting,
  and the loop shapes both agents and prompts (you iterate on the harness via
  traces, not on the conversation). (b) Boring on purpose: simpler than agent
  orchestration frameworks — a while-loop + markdown files; reflects agile
  principles (working software every iteration, inspect & adapt, human gates
  as review). (c) The three mappings to good ol' software engineering: state
  on disk → persistence & failure recovery; roles separated → separation of
  concerns; contract before code → spec/test-first.
- **F3 Anatomy: how a loop is implemented** — 4 slides. The state-layer folder
  anatomy (SPEC/contract/feature_list/progress/log/prompts/traces, loop.sh,
  eval.sh — this repo's own `sharing_slides/` as the live exhibit); the three
  roles and who played them (K3 planner/generator/visual evaluator, GLM code
  evaluator — different families kill self-grading); `loop.sh` + `eval.sh`
  verbatim (the loop is ~7 lines of bash); prompts as working agreements +
  the human gates list. Evidence: `../../PLAN.md`, `../../loop.sh` analog
  `../../eval.sh`, `../../prompts/`.
- **F4 The contract** — 3 slides. Negotiation mechanics (generator proposes,
  evaluator attacks, human arbitrates; 20–30 mechanical assertions across 4
  shapes); the catches that happened *before code*: S1 (Jest can't call native
  modules), S5 (Maestro has no `assertEnabled`), S20 (the multiplicative zoom
  formula made 0 an absorbing state — the contract would have tested green a
  feature that could never work). Evidence: `../../contract.md` negotiation
  rounds 1–3 + amendment 5.
- **F5 War stories** — 3 slides. The OCR pivot (Path A falsified on-device:
  iOS Vision is orientation-agnostic, so the 4-rotation heuristic rotated by
  noise — "the API ran" ≠ "the signal exists"); iter-11b (generator wrote DONE
  past an open BLOCKER — prompt patched mid-flight); C7 (the simulator doesn't
  enforce Photos denial → the amendment machinery, mechanical Jest split +
  manual on-device clause). Evidence: `../../feature_list.json` F4 note,
  `../../prompts/postmortem.md`, `../../contract.md` C7 amendment.
- **F6 The honest cost slide** — 1 slide. ~269M tokens for ~1,042 LOC; 31
  sessions, 13 generator iterations (2 quota deaths, 1 wedge, 1 no-op), 50
  commits, 7.2 days; environment incidents (kernel panic, disk-full,
  keychain storm). What was waste vs. what was the point. Evidence:
  `../../prompts/postmortem.md`, `../../research/postmortem.md`.
- **F7 When loops fail spectacularly (+ outer loops)** — 3 slides. The
  boundary: loops shine on greenfield, bounded scope, mechanical
  verification. They fail on existing systems with complex dependency
  topology, where measuring and tuning performance requires graph-based
  reasoning about the whole — a file-at-a-time iteration can't see the
  system. Where the bottleneck is reasoning, not producing the next change.
  (Human-pinned framing, 2026-09-16.) **Added 2026-09-17 (human
  directive):** a third slide on loops in **maintenance mode** — the outer
  loops from QS PLAN.md Phase 5 (CI watcher, flaky-test patcher, nightly
  digest, feedback clusterer): boring, bounded, verifiable at a glance,
  human-gated; honest note that Quick Shutter itself never needed them
  (shipped, single-user). Framed as the easiest first loop to start on
  Monday. Carries its own kicker label, `Outer loops`. Slide budget
  20 → 21 (B1 band amendment, human-sanctioned).
- **F8 Meta + takeaway + getting started** — 2 slides. The reveal: this deck
  was produced by the loop it describes (planner K3 + GLM-5.3
  generator/evaluator; its contract and traces exist in `sharing_slides/`).
  Then: start with one loop — boring, bounded, verifiable at a glance; the
  three state files; human gates on the risky 5%. Takeaway restated.

### P1 (nice, time permitting)

- Appendix/backup slides: the full 30-assertion contract list; glossary
  (loop, planner, generator, evaluator, contract, trace); source links.

### P2 (cut)

- Live demo of the loop running — 30-minute slot makes it risky; the traces
  tell the same story safely. Cut unless the human overrules.

## Non-goals

- Not an agent-framework survey — orchestration frameworks appear only as the
  "simpler than this" contrast in F2, never feature-compared.
- Not a Quick Shutter product demo — the app is evidence, not the subject.
- No app code walkthrough beyond what the loop story needs.

## Open Questions

- **Rubric calibration set (Phase 1.4):** good = Evals-101 + 2 planner-picked
  decks (human may override at calibration). Slop = 3 — RESOLVED 2026-09-16:
  one is a self-produced one-shot deck (same brief, single prompt, no loop);
  the other two planner-picked, human confirms at calibration.
- **Static-build hosting:** RESOLVED 2026-09-16 — GitHub Pages under
  https://github.com/cyrotiv (cyrotiv.github.io). Repo name TBD; build
  `--base` parameterized at build time, hash routing avoids SPA-fallback
  needs.
