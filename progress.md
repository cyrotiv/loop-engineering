# Progress

## Done

- 2026-09-16: Phase 0 scaffold complete — PLAN.md, SPEC.md, contract.md shell,
  prompts/{planner,generator,evaluator}.md, loop.sh, eval.sh, rubric.md draft,
  slides/ stub (Slidev 52.15.2 pinned), opencode.json, research/evals101-reference/
  vendored. Toolchain verified: node v26.5.0, npm 11.17.0, opencode 1.18.23,
  zai/glm-5.3 available.
- 2026-09-16: **Phase 1 APPROVED** (human, `Approved: 2026-09-16` in
  research/outline.md). feature_list.json seeded F1–F8. Open questions
  resolved: one-shot slop deck approved for calibration; static build targets
  GitHub Pages under cyrotiv.github.io; npm install authorized.
- 2026-09-16: **Phase 2 round 1 proposed** — contract.md now carries 22
  mechanical assertions (A1–A3 build, B1–B9 content, C1–C9 fact pins,
  D1 visual). All 23 QS fact pins re-derived and verified green today
  (feature count, assertion count, commit window via git log, cost stats,
  S1/S5/S20/C7/iter-11b/OCR-prove greps against ../research/postmortem.md
  and ../contract.md). Stub build verified exit 0.
- 2026-09-16: **Planner round 1 posted** (NEEDS-REVISION) — all 18 grep pins
  independently re-run green; build + export:png planner-verified; amendments
  P1–P6 + new A4/B10/B11 (target count 25); generator flags 1–3 ruled on
  (path fixed in prompts, LOC 1,034 confirmed, overnight-claim split accepted
  pending human ratification).
- 2026-09-16: **Generator round 2 posted** — P1–P6 accepted, P7 folded into
  B6; count 25 (band ceiling). Every planner claim re-verified before
  accepting (reference deck 0 dividers / 26 kickers on 26 slides; QS
  loop.sh=34 / eval.sh=48 B6-tokens so P4 creates no C8×B6 contradiction;
  QS scripts clean of reserved-vocabulary phrases so P2 can't misfire C1–C3;
  GLM-5.2+K3 re-derived from ../PLAN.md line 3; outline 1b terms verified).
  One arithmetic nit (P1: 28 slides, not 29 — conclusion unchanged) and one
  planner-maintenance flag (prompts/generator.md still lists `class: section`
  dividers). Self-correction: naive `^---$` split kept frontmatter as a
  pseudo-block, breaking B2/B3/B4 mechanics — Conventions now pins the
  slide-block split, re-validated 26/26 against the reference.
- 2026-09-16: **Planner round 2 — ACCEPTED.** All measurable claims
  re-derived independently: reference per-slide max 105 words (B6 cap basis),
  26/26 single kickers, 27-naive/26-corrected block split, loop.sh=34 /
  eval.sh=48 tokens, reserved-phrase hole-check exit 1, GLM-5.2 pin at
  ../PLAN.md:3. Accepted its 28-not-29 arithmetic correction. Two one-line
  noted edits ride to ratification (B6 slide-allocation parenthetical;
  single-line phrase-pin convention). `class: section` mentions removed from
  prompts/generator.md + reference README (its maintenance flag).
- 2026-09-16: **Evaluator mechanical audit — RUNNABLE.** All 25 assertions
  dry-run (build 1.02s exit 0; export:png 3 files; export:pdf 94,595 bytes;
  every QS grep re-run green, no STALE-PINs; 105 third derivation confirms;
  D1 entry-shape validated on a synthetic wrong-Total entry). Three
  ratification-time findings: A2/A3 post-export run-directory under-pinned
  (one word); C1–C3 vacuously true at zero matches (presence question for
  the human); per-slide frontmatter breaks the block split (deck must carry
  none). Also measured: the reference deck itself would fail B4 (18/25
  slides have <10-word notes) — B4 is deliberately stricter, sourced from
  the generator prompt, not the reference.
- 2026-09-17: **CONTRACT LOCKED — human ratification.** All nine amendments
  ratified (overnight split; B6 allocation-to-Phase-3; single-line
  phrase-pin convention; A2/A3 run-directory pin; C1–C3 presence clauses;
  no-per-slide-frontmatter convention; B6 visual floor; Outer-loops slide +
  band [15, 21]; title "Loop Engineering — Think in Loops, Not Prompts" +
  subtitle "State on Disk, Roles Separated, Contract Before Code"). 25
  assertions (A1–A4, B1–B11, C1–C9, D1). Further ## Assertions edits are a
  human gate.

- 2026-09-17: **Phase 3 iter 1 — F1 done** (cover + exhibit, slides.md
  rewritten from the stub). Cover re-pinned per B3 (ratified title, pill row,
  both subtitle phrases on one line); exhibit quotes 10 features / 30
  mechanical assertions / 50 commits / 7.2 days / 2026-08-04 → 2026-08-11 —
  all greps green, 66 visible words, cardrow+callout visual floor, 68-word
  note. Stub divider + stub content slide deleted (B5 markers + per-slide
  frontmatter violation — audit finding). Overnight split applied: no
  unattended/overnight claim on the exhibit; "while you sleep" is cover
  rhetoric only. Build exit 0; export:png green (2 PNGs; first attempt
  exit 1 transient, retry clean).
- 2026-09-17: **Phase 3 iter 2 — F2 done** (Why loops, 3 slides, kicker
  "Why loops" ×3). Slide 3: prompt-runs-once vs loop-repeats
  (gather → reason → act → verify; iterate on the harness via traces).
  Slide 4: boring on purpose — "what it isn't: an orchestration framework"
  vs "agile, rediscovered" (working software every iteration, inspect &
  adapt, human gates as review). Slide 5: three SE mappings as cardrow —
  state on disk → persistence/recovery, roles separated → separation of
  concerns, contract before code → spec/test-first. One transient build
  failure (unclosed HTML comment on slide 5 — fixed, root cause: edit
  truncated the closing `-->`). Checks green: A1, A2 (5 PNGs), B2 (labels
  dedupe to ["The exhibit", "Why loops"]), B4 (74/67/82-word notes), B5,
  B6 (74/66/77 words, cardrow+callout floor on all), B10 (separation of
  concerns ×2, agile ×1, orchestration ×2), F1 regression pins (B3, B7,
  C1, C2, C9) unchanged. No new numbers quoted → C1–C3/C4 scans unaffected.

- 2026-09-17: **Phase 3 iter 3 — F3 done** (Anatomy of a loop, 4 slides,
  kicker ×4). Slide 6: state layer = folder — grid-cols-2 with lede+callout
  left, complete `sharing_slides/` tree as fenced-code card right (live
  exhibit; B9's `sharing_slides` grep now green early). Slide 7: roles table
  (Kimi K3 ×3 roles, GLM-5.2 code evaluator, "different family — no
  self-grading") — B11 green (GLM-5\.2 ×2, \bK3\b ×4). Slide 8: loop.sh +
  eval.sh VERBATIM from `../` (C8 substring check green for both; 100
  visible words incl. code — inside the 110 cap as the contract projected).
  Slide 9: prompts-as-working-agreements vs human-gates cardrow + "the
  prompt is code" callout. Checks green: A1 build 1.38s; A2 9 PNGs; B2
  deduped labels now ["The exhibit","Why loops","Anatomy of a loop"]; B4
  notes ≥ 55 words each; B5 clean; B6 84/48/100/80 words, visual floor via
  code fence/table/cardrow; reserved-vocab scan — only the exhibit slide's
  own C1/C3 pins match; C4 boundary scan none; F1/F2 pins re-verified.
  Layout verified mechanically, not by eye: playwright over the served
  dist measures scrollHeight/clientHeight + pre widths per slide — slide 8
  initially overflowed 12px vertically, fixed by trimming card padding
  (kept 12.5px code font; no horizontal overflow: pre 821≤821). Reusable
  checker kept at `slides/overflow-check.cjs` (serve dist/ on a port, then
  `node overflow-check.cjs`) — future sections should re-run it; deck
  scripts deliberately NOT confused with QS's: the verbatim slide quotes
  Quick Shutter's originals per C8, the note says our variant only swaps
  the runner command.

- 2026-09-17: **Phase 3 iter 4 — F4 done** (The contract, 3 slides, kicker
  "The contract" ×3; B2 deduped-label prefix now 4/9). Slide 10: negotiation
  mechanics — propose/attack/arbitrate cardrow + four-shapes pill row; "30
  mechanical assertions across four shapes" callout (C2-safe). Slide 11: S1
  (Jest can't call native modules → pure-function checks) + S5 (Maestro has
  no assertEnabled → tap-and-observe, counter stays 0/4), both dated
  2026-08-06 rounds in ../contract.md (:199, :257). Slide 12: S20 — the
  multiplicative zoom formula made the pinned launch state 0 absorbing;
  fenced code shows math + additive fix; "green in CI while the feature was
  dead on arrival". Checks green: A1 (1.25s), A2 (12 PNGs), A4, B2, B4
  (64/85/99-word notes), B5, B6 (83/86/104 words, floors all), C7 (S1 ×3,
  S5 ×3, S20 ×1, assertEnabled ×2), C2/C4/reserved-vocab scans clean,
  F1–F3 regression pins unchanged (C8 verbatim still substring-true).
  Layout: inline playwright variant of overflow-check.cjs — slides 10–12
  fit exactly (552/552, pre 362≤362; planner's script untouched per their
  formalize-or-drop note).

- 2026-09-17: **Phase 3 iter 5 — F5 done** (War stories, 3 slides, kicker
  "War stories" ×3; B2 deduped-label prefix now 5/9). Slide 13: the OCR
  pivot — Path A's 4-rotation argmax vs "the gate proved OCR runs, not that
  the signal exists"; probe card shows the flat Vision row (806 / 829 /
  833 / 811 real capture; 35/35/35/35 fixtures), "orientation-agnostic on
  iOS 26.6" single-line, negative-control callout. Slide 14: iter 11b wrote
  DONE past an open capture-EXIF BLOCKER — saw/missed cardrow + "an open
  blocker outranks DONE" (this deck's own generator prompt now carries the
  patched rule — note says so). Slide 15: C7 — simulator doesn't enforce
  Photos denial for PhotoKit (simctl deny sets TCC, query still authorized);
  amendment cardrow: mocked-denial Jest split + manual on-device clause,
  signed in 2 rounds, no unilateral edits. Checks green: A1 (1.24s), A2
  (15 PNGs), A3 (PDF 352,080 bytes), A4 (0 refs), B2, B4 (notes
  107/100/123 words), B5, B6 (104/83/96 visible words — slide 13 incl.
  code; floors: code fence, cardrow ×2), C4 (scores exactly
  {806,811,829,833}; fixture row; iOS 26.6), C5 ('11b'), C6 ('C7'),
  C1/C2/C3 scans unchanged (10 features / 30 mechanical assertions / 50
  commits / 7.2 days — no other numeric reserved-vocab use), C8 verbatim
  scripts still substring-true, C9/B3/B7/B10/B11 regression pins unchanged.
  Overflow (inline playwright over served dist, planner's file untouched):
  slides 13–15 fit exactly, 552/552 and 980/980, no pre overflow.

- 2026-09-17: **Phase 3 iter 6 — F6 done** (The honest cost, 1 slide, kicker
  label 6/9; B2 deduped prefix now ["The exhibit","Why loops","Anatomy of a
  loop","The contract","War stories","The honest cost"]). Slide 16: three
  stat cards — THE SPEND 269M tokens / 31 sessions (planner-reported,
  unauditable, 28 traces, no per-run token log), THE OUTPUT 1,034 LOC / 10
  features / 50 commits / 7.2 days / 2026-08-04 → 2026-08-11, THE FRICTION
  13 generator iterations / 2 quota deaths / 1 wedged / 1 no-op misread /
  kernel panic / disk-full / keychain ACL storm — plus the waste-vs-point
  callout (4 of 13 runs committed nothing; deliverable = app + harness).
  All nine C3 stat families present with exact pinned values (presence
  clause discharged here); C3 phrase pins kernel panic ×2, keychain ×2;
  C9 caveat planner-reported/unauditable ×3. Checks green: A1 (1.27s), A2
  (16 PNGs ∈ [15,21]), A3 (PDF), A4 (0 refs), B2, B4 (100-word note), B5,
  B6 (76 visible words, cardrow+callout floor), B7/B10/B11, C1/C2/C4/C5/C6/
  C7/C8 (verbatim still substring-true)/C9, reserved-vocab scan clean (only
  pinned values). Layout verified mechanically (inline playwright, dist
  served): slide 16 exactly 552/552, 980/980.

- 2026-09-17: **Phase 3 iter 7 — F7 done** (When loops fail ×2 + Outer loops ×1;
  B2 deduped prefix now 8/9). Slide 17: the boundary as a shine-vs-fail
  cardrow — greenfield/bounded/mechanical vs brownfield dependency topology
  (B8 phrase #1 in the card head), with the bottleneck test callout
  ("producing the next change, or reasoning about the whole?"). Slide 18: a
  file at a time can't see a system — perf measurement/tuning requires
  graph-based reasoning about the whole (B8 phrase #2); loop's unit of change
  vs what perf work needs cards; "change tools, or keep the human" callout.
  Slide 19 (kicker "Outer loops"): QS PLAN.md Phase 5 as a mini table — CI
  watcher every few minutes / flaky-test patcher nightly / digest nightly /
  feedback clusterer later — honestly "designed, never needed" (shipped,
  single-user); "Improve the codebase is a wish, not a loop" callout (quoted
  from PLAN.md:144); framed in the note as the easiest first loop for Monday.
  No new numeric facts quoted → C-section scans unchanged. Two layout fixes
  found by the mechanical overflow check (inline playwright, served dist,
  planner's overflow-check.cjs untouched): slide 18 initially 113 words >
  110 cap → trimmed to 104 (lede tightened, card bodies shortened); slide 19
  initially overflowed 607 > 552 with a 2×2 cardrow → restructured as the
  deck's mini table (name/cadence/job — matches PLAN.md's list shape), now
  exactly 552/552. Checks green: A1 (1.26s), A2 (19 PNGs ∈ [15,21]), A3 (PDF),
  A4 (0 refs), B2 (labels ["The exhibit","Why loops","Anatomy of a loop","The
  contract","War stories","The honest cost","When loops fail","Outer loops"]),
  B4 (notes 89/95/115 words), B5 clean, B6 (83/104/89 visible words; floors
  cardrow/cardrow/table), B8 (dependency topology ×3, graph-based reasoning
  ×1, single-line), B10/B11/B3/B7/C1–C9 regression pins unchanged, reserved-
  vocab scan clean (only pinned values), C8 verbatim substring-true. B9's
  'this deck was (built|produced) by' grep still 0 — F8 discharges it.

- 2026-09-17: **Phase 3 iter 8 — F8 done** (The loop built this deck ×2;
  B2 label list complete at 9/9). Slide 20: the reveal — "Yes — this deck
  was produced by the loop it describes" (B9 grep #2 green; the phrase sits
  lowercase-mid-sentence and single-line, per the phrase-pin convention);
  K3 planned / GLM-5.3 wrote and checked / human ratified every lock (no
  GLM-5.2 collision — B11 grep unaffected); paper-trail card points at
  contract.md / progress.md / log.md / traces/ inside sharing_slides/. Slide
  21: start-with-one-loop close — boring job / three state files / gate the
  risky 5% cardrow + takeaway restated verbatim (B7 reinforced) + foot-tag
  end-of-deck. Checks green: A1 (1.27s), A2 (21 PNGs — exactly the B1
  ceiling), A3 (PDF 408,354 bytes), A4 (0 refs), B2 (9/9 labels, one kicker
  per block ×21), B3, B4 (notes 71/63 words), B5, B6 (79/95 visible words;
  floors: fenced code + callout / cardrow + callout), B7–B11, C1–C9 all
  (7.2 days, 1,034 LOC, 2 quota families re-verified; kernel panic ×2,
  keychain ×2, iOS 26.6, 35/35/35/35), C8 verbatim still substring-true,
  reserved-vocab scan clean (no numeric reserved words added; "three files"
  and "the 5%" spelled safe). Layout verified mechanically (inline playwright
  over served dist, planner's overflow-check.cjs untouched):
  slides 20–21 exactly 552/552, 980/980, pre-overflow 0. **All sections
  done → DONE written below; generator build loop stops. Phase 4
  (evaluation pass, D1 visual gate) is the evaluator's lane.**

- 2026-09-17: **Phase 3 iter 9 — slide-19 D1 blocker RESOLVED** (generator
  fix iteration). Overflow reproduced mechanically before editing: playwright
  over served dist measured slidev-slide-content 576 scroll vs 552 client —
  24px clip, callout bottom y=576.1 (clipped mid-sentence as scored). Fix per
  the blocker's own menu: "The job" column shortened to one line per row
  ("quarantine + repair flaky tests"; "log.md → the morning report";
  clusterer without the users caveat), lede/callout margins tightened,
  callout trimmed to one line — cut detail moved into the speaker note.
  After: slide 19 exactly 552/552, callout bottom y=467.2 (84.8px
  clearance); all 21 slides re-scanned 552/552 and 980/980. Full battery
  re-run green: A1 1.34s, A2 21 PNGs re-exported (evaluator re-score
  source), A3 PDF 408,175 bytes, A4, B1 ∈ [15,21], B2 9-label list, B3–B11,
  C1–C9 (slide 19 now 75 visible words, table floor intact; reserved-vocab
  scan clean — no new numeric phrases). **Planner/K3: slide 19 re-score due
  in exports/visual-scores.md; no other pin touched.**

- 2026-09-17: **Phase 3 iter 10 — F9 done** (human feedback batch R0–R9;
  deck now 22 slides, B1 [15,22] ceiling honored). R0: preview script in
  slides/package.json. R1: cover kicker → "An example and guide · For vibe
  coders / low-code engineers", four pills deleted (B3 subtitle +
  while-you-sleep greps still single-line green). R2: exhibit gains the two
  rescued D1 screenshots at 192px, honest mono caption ("simulator previews
  · test pattern in — the chrome is the product") — DEVIATION RECORDED:
  moved PNGs slides/public/ → slides/assets/ (vite cannot import public/
  via relative src — build fails; root-absolute /path renders but fails
  A4's test -e against slides/; assets/ satisfies both; chosen over remote
  embed = human gate, and over markdown ![]() = same resolver problem).
  R3: script cards retitled loop.sh · HUMAN-LAUNCHED / eval.sh ·
  EVALUATOR-RUN + mono captions (once per build session — unattended until
  DONE / after build iterations — never the generator). R4: verbatim quotes
  in both slide-9 cards ("Done means a check tied to a specific
  contract.md line passes." · "If 200 lines could be 50, rewrite it." /
  "Any contract.md edit · New dependency installs · Publishing"), quote
  rule added to style.css (3 uses). R5: slide 4 restructured — WHAT IT IS
  h4 now "A while-loop, markdown, an exit code", framework card carries
  add+cost, note explains boring=auditable (one sitting). R6: slide-17
  quick-test reworded verbatim per R6. R7: slide 18 retitled "One token at
  a time can't hold a graph" + mermaid LR call-graph (api/core/ui
  subgraphs, useMaxWidth auto-scales to 736px); note grounded in the docx
  (topology serialized into tokens; NLGraph/GraphOmni — verified present in
  the docx before writing); the two side cards merged into one paragraph to
  fit the diagram (within "compact"). R8: recap slide 21 "The recap: five
  things to steal" — one 6-col cardrow, spans 2/2/2/3/3, generalizable
  only. R9: closer gains github.com/cyrotiv/agent-loops as "the harness
  scaffold, free to fork" (text link — not an asset; A4 untouched).
  Three overflow iterations self-caught by the inline playwright check
  (exhibit 736→595→552; scripts 575→554→552; slide 18 875→612→552 via TB→LR
  + card merge). Mermaid renders inside a SHADOW ROOT (plain DOM svg
  queries miss it — future checkers beware; host 973×192, svg capped 736px,
  no card overhang). Checks green: A1 build 1.52s; A2 22 PNGs; A3 PDF
  767,941 bytes; A4 2/2 local refs exist; B2 22 blocks one kicker each,
  9-label list unchanged (recap shares the closer's kicker); B3/B4/B5;
  B6 counts max 108 (slide 8), floors 21/21; B7–B11; C1–C9 all (C8
  substring-true; reserved-vocab scan: only the pinned lines 51/59/553/
  554/564). All 22 slides 552/552 + 980/980, images naturalWidth>0.
  F9 → done. **All sections pass the contract → DONE below.**

- 2026-09-17: **Phase 3 iter 11 — F10 done** (human feedback batch #2;
  deck stays 22 slides, no count change). Slide 6: tree swapped to the
  ACTUAL quick_shutter repo root (listing verified against `ls ../` — SPEC/
  PLAN/contract/feature_list/progress/log/rubric/prompts/research/traces/
  loop.sh/eval.sh annotated, app payload elided with `… src/, modules/,
  ios/, maestro/ …`); callout now carries the meta thread + B9 ("This
  deck's own folder (sharing_slides/) has the same shape — the reveal
  comes last"); note updated to match (90 visible words, code-floor card).
  Slide 4 note: exit-code explainer appended (0 = pass, non-zero = fail;
  grep exits 1 on no match; suites exit non-zero on any failure; the loop
  only needs the binary verdict). Slide 18 note: latency-test pushback +
  answer appended (test says THAT not WHERE/WHY; patch-on-patch churn =
  QS's restart-policy trigger; Goodhart; someone authored the <100 ms
  budget) — grounded in the docx per iter 10. Slide 20: gained "THIS DECK,
  IN NUMBERS — sharing_slides/" mono stat block (22 slides · 25 mechanical
  checks · 17 agent runs · 18 trace logs · 31 git revisions · ~23 h mostly
  unattended · 2026-09-16 23:02 → 2026-09-17 21:49 · human: 6 review
  rounds + the gates · token spend not instrumented) + the
  regulatory-forward callout (verbatim per the human's text); old
  paper-trail card folded into the stat block's title + footer (B9 green
  via slide 20 title AND slide 6 caption). 107 visible words — inside the
  110 cap; visual floor via fenced code. **Interpretations recorded** (no
  human available mid-run): (1) reserved-vocabulary convention (ratified
  P2) outranks the revision batch's literal wording — "25 mechanical
  assertions" → "25 mechanical checks", "31 commits" → "31 git revisions",
  run breakdown says "generator runs" not "generator iterations" (C2/C3
  would mechanically fail otherwise; rejected: wording the values
  verbatim, and spelled-out-number evasion). (2) The stat block is pinned
  to the human's measured snapshot (31 revisions / 18 trace logs at
  feedback time — verified: repo had 31 commits and 18 traces before the
  F10-queue commit and this pass's trace landed); the on-screen window
  line makes the snapshot self-describing; note says the counters move
  every pass. Checks green: A1 1.49s, A2 22 PNGs re-exported, A3 PDF,
  A4 2/2 images, B1 ∈ [15,22], B2 9-label list, B3, B4 (all notes ≥ 63
  words), B5, B6 (counts max 108; floors 21/21), B7–B11, C1–C9 all
  (C8 substring-true; C-scans: only pinned values — "31 git revisions"
  does not fire `[0-9]+ sessions` nor `[0-9]+ commits`). Overflow
  playwright-measured like iter 9/10: 22/22 exactly 552/552 + 980/980,
  pre-overflow 0, exhibit images naturalWidth>0. Probe note: measure
  after the slide-left transition settles (~1s) and pick the
  in-viewport `.slidev-slide-content` — earlier flags on untouched slides
  were outgoing-page clones mid-transition, not real overflow. F10 → done.
  **All sections pass the contract → DONE re-written as the last line.**

- 2026-09-17: **Phase 3 iter 12 — F11 done** (recap wording, human
  directive 2026-09-17). Slide 21: title "The recap: five things to steal"
  → "The recap: five take-aways"; card labels STEAL 1–5 → TAKE-AWAY 1–5;
  speaker note wording matched ("steals" → "take-aways" — invisible to every
  grep, changed for presenter consistency). No pin touched. Checks green:
  A1 build 1.49s; A2 22 PNGs re-exported; A3 PDF; B1 22 ∈ [15,22]; B2
  one kicker/block ×22, 9-label list; B3; B4; B5; B6 (recap 80 visible
  words ≤ 110, cardrow floor; max content 108); B7–B11; C1–C9 (C8
  substring-true); reserved-vocab scan clean (only pinned lines
  51/59/558/559/569); overflow playwright-measured 22/22 exactly 552/552 +
  980/980 (TAKE-AWAY labels wider than STEAL — verified no wrap/clip).
  F11 → done. **All sections pass the contract → DONE re-written below.**

- 2026-09-17: **Phase 3 iter 13 — F12 done** (voice pass, human-approved
  proposals applied exactly: 8 tweaks on slides 2,3,4,7,11,12,13,15; 12
  keeps untouched). Tweak wording verbatim from
  research/voice-pass-proposals.md — S2 "can be checked against the repo
  yourself" + caption "the camera shows a test pattern; the app around it
  is what shipped"; S3 "In my experience, the saving isn't a smarter model
  — it is never explaining the project twice"; S4 "every piece of the
  harness is a file you can search, compare, and roll back — one person can
  audit it in one sitting"; S7 "different model family" + "has to be
  earned"; S11 S1 fix body (mocking defined inline); S12 "absorbing — zero
  times anything is zero"; S13 "picked the highest score (the argmax)" +
  negative control defined; S15 "privacy flag (TCC — the database iOS keeps
  permissions in)". Matching Say-lines follow in the notes on 2 and 4 per
  the proposals' rule. Two recorded interpretations: (1) slide 13 hit 115
  visible words > B6's 110 cap after the two definitions — trimmed
  "— upside-down pixels included" and "on the simulator", both preserved
  verbatim in that slide's speaker note → 109; tweak wording untouched.
  (2) slide 2's longer caption drove the auto grid column (callout squeezed
  to 286px × 6 lines) and the wrapped caption overflowed 581 > 552 —
  caption max-width:30em (2 lines) + exhibit images 192→176px inline; now
  exactly 552/552 + 980/980 with the callout at 503px. Checks green: A1
  1.47s; A2 22 PNGs re-exported; A3 PDF 790,209 bytes; A4 2/2; B1 22 ∈
  [15,22]; B2 9-label list; B3–B5; B6 max 109 (slides 12/13 both 109),
  floors 21/21; B7–B11; C1–C9 all (C8 substring-true; reserved-vocab scan:
  only pinned lines 51/52/59/351/559–561/570). Overflow measured with a
  TRUE fresh page per slide — probe finding: hash-goto on a shared page is
  an SPA transition, not a fresh load, and produced one transient 982/980
  false flag on slide 2; the fresh-load sweep is the reliable pattern. F12
  → done. **All sections pass → DONE re-written below. Planner/K3:
  re-score slides 2,3,4,7,11,12,13,15 (count stays 22).**

- 2026-09-18: **Phase 3 iter 14 — F13 done** (human batch #3; deck 22 → 24
  slides, amended B1 [15,24] ceiling hit exactly). Slide 23 "Where it started —
  the source documents": SPEC raw idea (lines 1–2 verbatim, items 3–4 elided
  with "…", disclosure in the note) + 4 of the 10 PLAN guiding rules, each a
  verbatim single-line substring of ../PLAN.md (Write the loop / never grades /
  state on disk / start with one loop). Slide 24 "The lock, and the bar every
  run clears": ../contract.md Status line + assertion A1 as full source lines
  in one fence, + the generator-prompt goal-driven clause (3 full source
  lines) in a second fence. Slide 3 note: token-savings nuance appended (a
  loop pass can out-spend a one-shot prompt; the saving is the runs you never
  waste). Slide 22 first-loop examples → consulting-flavored (nightly RAG
  ingestion of new client documents; watcher keeping an MCP server's contract
  tests green) — body net −2 words, h4 "Narrow, written, glanceable" kept.
  Verbatim check scripted: every snippet line greps as substring of its real
  source file AND sits on one slides.md line. Checks green: A1 1.30s, A2 24
  PNGs, A3 PDF 815,518 bytes, A4 2/2, B1 24 ∈ [15,24], B2 one kicker/block ×24,
  10-label list incl. Appendix (consecutive dedupe covers the pair), B3, B4
  (new notes 95/89 words), B5 exit 1, B6 max 109 unchanged (new slides 105/84;
  floors via fenced code), B7–B11 (B8 grep -c 2/1 ≥ 1), C1–C9 all — C2 now
  three matches, all value 30 ("Status: LOCKED — 30 assertions" is the QS
  contract's own line; C9 '2026-08-04' gains a third hit from the SPEC ct,
  same pinned value); C8 substring-true; reserved-vocab scan: pinned values
  only (10 features / 30 assertions / 31 sessions / 50 commits / 269M tokens /
  13 generator iterations / 1,034 LOC / 2 quota / 7.2 days). Overflow
  playwright fresh-load ×24: exactly 552/552 + 980/980; slide 23 SPEC fence
  (127-char line @11px) 820≤820; slide 24 fences 820≤820. **Interpretation
  recorded:** slide 20's "THIS DECK, IN NUMBERS" stat block still reads
  22 slides / 17 runs etc. — left untouched: the batch didn't direct an
  update, and the block is pinned to its on-screen window
  (2026-09-16 23:02 → 2026-09-17 21:49) with the note already saying counters
  move every pass (F10 interpretation); flag for the human if they want the
  counters refreshed at final sign-off. Appendix ct labels carry the
  quick_shutter/ path prefix (underscore form = the repo's actual dirname;
  B7's bad-spelling regex targets quickshutter|quick-shutter only — slide 6
  precedent). F13 → done. **All sections pass the contract → DONE re-written
  as the last line. Planner/K3: D1 re-scores due for slides 22, 23, 24; D1(b)
  entry count must now equal 24.**

- 2026-09-18: **Phase 3 iter 15 — F14 done** (slide-23 annotation fix, planner-
  flagged 2026-09-18). The PLAN-rules card's caption "4 of 10 rules — item 2
  above became the OCR war story" misread: "item 2 above" parses as PLAN rule 2
  (never-self-grade), unrelated to the OCR story; the intended SPEC item 2
  lives one card up. Replaced with F14's pinned line verbatim: "4 of 10 rules,
  verbatim — the full list is in PLAN.md" (single line; "10 rules" fires no
  reserved-vocab/C regex). Speaker note untouched — its "read item 2" sentence
  is explicitly scoped to the SPEC's raw idea and is true. Checks green: A1
  build 1.30s, A2 24 PNGs re-exported, A3 PDF, A4 2/2, B1 24 ∈ [15,24], B2
  one kicker/block ×24 + 10-label list (cover kicker exempt per B2), B4, B5,
  B6 slide 23 now 53 visible words ≤ 110 (code-fence floor), B7–B11, C1–C9
  (C8 substring-true; reserved-vocab scan: pinned values only; C4 exactly
  {806,811,829,833}). Overflow playwright fresh-load (hash route, ~1.4s
  settle): the SPEC/PLAN slide exactly 552/552 + 980/980, SPEC fence 820≤820,
  annotation on one line. Probe note: dist is a hash-routed SPA (single
  index.html) — bare /23 URLs don't resolve to slide 23. F14 → done. **All
  sections pass the contract → DONE re-written as the last line. Planner/K3:
  slide-23 re-score due (with the F13 batch: slides 22, 23, 24).**

## Next

- **Planner/K3: D1 re-scores due for slides 22, 23, 24** (F13 batch — closer
  reworded, two new appendix slides; entry count must reach 24 to match B1;
  slide 3's change is note-only, invisible to the render).
- **Human items (unchanged):** GitHub repo name for the Pages --base; final
  sign-off after D1. `npm run preview` in slides/ serves dist over http.

## Blockers

- **D1 (visual gate) — open, NOT a generator blocker.** rubric.md
  `## Threshold` still holds no numeric value (Phase 1.4 calibration,
  human gate) and `exports/visual-scores.md` does not exist (K3 visual
  pass not yet run). Sign-off blocked on the human + K3 lanes; everything
  mechanical is green (log.md evaluator entry, 2026-09-17).

_(npm install in slides/ completed and verified 2026-09-16:
434 packages, `npm run build` exit 0 on the stub.)_

## BLOCKER

_(none pending)_

## BLOCKER-RESOLVED

**D1 visual gate, slide 19 (Outer loops) — RESOLVED 2026-09-17, generator
iter 9.** Was: vertical overflow, bottom callout clipped mid-sentence; scored
0.71 vs threshold 0.72. Reproduced mechanically (576 vs 552, 24px clip), then
fixed within the locked contract as the blocker prescribed: "The job" column
copy shortened to one line per row, margins tightened, callout to a single
line, cut detail preserved in the speaker note. No slide added (B1 stays
21/21 at the ceiling); B2 kicker, B6 cap/floor (75 words, table), and all
other pins re-verified green; PNGs + PDF re-exported. Awaiting the K3
re-score of slide 19 in exports/visual-scores.md (see Next).

## Revisions

F9 landed 2026-09-17 (generator iter 10) — DONE re-written below. Earlier:
F9 pending — DONE retracted 2026-09-17 (human feedback batch).

DONE

## Revisions — F10 (human feedback batch #2, 2026-09-17)

- Slide 6 (state layer): the tree becomes the ACTUAL quick_shutter repo root
  (run `ls ../`, annotate the loop files: SPEC.md, PLAN.md, contract.md,
  feature_list.json, progress.md, log.md, rubric.md, prompts/, research/,
  traces/, loop.sh, eval.sh — plus the app payload dirs). Caption keeps the
  meta thread + B9: "this deck's own folder (sharing_slides/) has the same
  shape — the reveal comes last."
- Slide 4 speaker note: exit-code explainer — 0 = pass, non-zero = fail
  (grep exits 1 on no match; suites exit non-zero on any failure). The loop
  only needs the binary: it turns any tool into a mechanical check.
- Slide 18 speaker note: anticipated pushback + answer. "With a latency test,
  the loop knows the change regressed" — true, and that's the bounded case
  this section already blesses. Limits: (a) the test says THAT it broke, not
  WHERE or WHY — a store change can invalidate an upstream cache's hit
  pattern; localizing needs the call graph; (b) loops retry the touched
  neighborhood (patch-on-patch churn, QS's own restart-policy trigger) or
  game the metric (Goodhart); (c) someone had to reason about the whole
  system to write the <100 ms budget at all. Loops iterate against a check;
  they don't author the understanding the check encodes. Grounded in
  research/LLMs and Circular Reasoning.docx's practical consensus.
- Slide 20 (the reveal): add "this deck, in numbers" (mono stat block,
  mirror of the exhibit slide). Use EXACTLY these measured values: 22
  slides; 25 mechanical assertions; 17 agent runs (10 generator iterations
  incl. 1 overflow fix + 1 revision batch; 2 contract-negotiation rounds; 1
  mechanical audit; 1 Phase 4 eval pass; 3 calibration slop runs); 18 trace
  logs; 31 commits; ~23 h wall 2026-09-16 23:02 → 2026-09-17 21:49, mostly
  unattended; human effort: 6 review rounds (4 before the build, 2 after) +
  the gates (npm install, contract ratification, repo publication). Token
  spend per run: not instrumented per project — say so (the same gap QS's
  postmortem flagged; global opencode telemetry mixes projects).
- Slide 20 forward note: "Same machinery, stricter contract: swap the taste
  rubric for a voice + compliance rubric, and this loop produces regulated
  documents — every claim pinned, every revision gated."
- Watch B6's cap and slide-20 overflow (playwright-measure like iter 9/10);
  keep every existing pin green.

(Applied 2026-09-17, generator iter 11 — see Done above. Reserved-vocabulary
and snapshot-window interpretations recorded there for human review.)

## Revisions — F11 (human directive 2026-09-17)

- Recap slide wording: steal → take-away. Labels STEAL N → TAKE-AWAY N;
  title → "The recap: five take-aways".

(Applied 2026-09-17, generator iter 12 — battery green, overflow clean;
planner re-score of slide 21 due.)

## Revisions — F12 (voice pass, human-approved 2026-09-17)

- Apply research/voice-pass-proposals.md exactly — 8 tweaks (slides
  2,3,4,7,11,12,13,15), 12 keeps; pinned strings stay single-line; B6 caps
  hold; playwright overflow check; re-export PNG+PDF.

(Applied 2026-09-17, generator iter 13 — battery green, fresh-load overflow
22/22 clean; two recorded interpretations in Done above: slide-13 trim to
hold the 110 cap, slide-2 caption/images relayout. Planner re-scores due.)

## Revisions — F13 (human batch #3, 2026-09-18)

- Two appendix slides after the closer, verbatim doc snippets: (23) SPEC raw
  idea + PLAN guiding rules; (24) contract status line + one assertion (A1) +
  generator-prompt goal-driven clause.
- Slide-3 speaker note: token-savings nuance.
- Slide-22 first-loop examples → consulting-flavored (nightly RAG ingestion of
  new client documents; watcher keeping an MCP server's contract tests green).

## Revisions — F14 (planner-flagged, 2026-09-18)

- Slide 23: drop the wrong cross-reference ("item 2 above became the OCR war
  story" — item 2 is never-self-grade, unrelated). Replace with: "4 of 10
  rules, verbatim — the full list is in PLAN.md".

(Applied 2026-09-18, generator iter 15 — battery green, overflow clean;
planner re-score of slide 23 due.)

DONE
