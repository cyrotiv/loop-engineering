# Log

## [2026-09-16] setup | Phase 0 scaffold

Planner (K3, attended) created the loop harness for the Loop Engineering deck:
PLAN.md (roles: K3 planner + visual evaluator; GLM-5.3 via opencode as
generator + mechanical evaluator), SPEC.md seeded from the human's brief,
contract.md shell, prompts for all three roles, loop.sh/eval.sh (opencode
headless), rubric.md draft, slides/ Slidev stub pinned to @slidev/cli 52.15.2
following the Evals-101 conventions, opencode.json headless permissions.
Reference deck source (leelim81/Evals-101) vendored to
research/evals101-reference/ as the format reference. Toolchain verified:
node v26.5.0, npm 11.17.0, opencode 1.18.23, `zai/glm-5.3` in `opencode models`.
Next: Phase 1 requirements with the human.

## [2026-09-16] planner | Phase 1.0 answers → outline draft

Human answered all seven Phase 1 questions. Pinned: takeaway ("think in loops,
not the prompt — state on disk, roles separated, contract before code"); 30-min
slot, 15–20 slides soft band; methodology spine + war stories + honest cost
slide, followed by a "when loops fail spectacularly" section (brownfield
systems with complex dependency topology, where perf measurement/tuning needs
graph-based reasoning); all repo artifacts quotable with context; meta-narrative
permitted; delivery = live + static + PDF; tone insider-casual. Added 1b/1c
content requirements: why loops (efficiency, shapes agents+prompts, simpler
than orchestration frameworks, agile principles, the three SE mappings) and how
loops are implemented (folder anatomy + setup files on slides). Drafted
`research/outline.md`: 8 P0 sections (F1–F8, 20-slide draft budget), P1
appendix, P2 live demo cut, non-goals, 2 open questions (calibration set —
incl. proposal to self-produce a one-shot slop deck; static hosting). Awaiting
human approval to seed feature_list.json.

## [2026-09-16] planner | Phase 1 APPROVED, Phase 2 opened

Human approved outline verbatim; recorded `Approved: 2026-09-16`. Resolutions:
one-shot self-produced slop deck approved for calibration; static build →
GitHub Pages under cyrotiv.github.io (repo name TBD, --base parameterized);
npm install authorized (running). feature_list.json seeded F1–F8 from the
approved P0 sections. Phase 2 opened: generator (GLM-5.3 via opencode) drafts
contract round 1; planner attacks next.

## [2026-09-16] incident | opencode zai auth failure → model repin

First generator contract run (trace 20260916-233314-generator-contract-r1.log)
died immediately: `Authentication Failed` from the plain `zai` provider in
opencode. `opencode auth list` shows both Z.AI and Z.AI Coding Plan
credentials; probe (`opencode run -m zai-coding-plan/glm-5.3` → OK) confirmed
the Coding Plan credential works. Default model repinned to
`zai-coding-plan/glm-5.3` in loop.sh/eval.sh/PLAN.md; SLIDES_MODEL override
unchanged. Cost: one dead run — recorded per the incident-logging rule.

## [2026-09-16] generator | Phase 2 round 1 — contract proposal (22 assertions)

Drafted contract.md ## Assertions from scratch: A1–A3 (build: slidev build,
export:png, export:pdf — A1 verified exit 0 on the stub), B1–B9 (slide-count
band 15–20 via PNG count, 8 pinned section-divider titles in order, cover
pins, speaker notes ≥ 10 words on every content slide, placeholder grep,
110-word body cap benchmarked to the reference deck's measured 105 max,
takeaway verbatim + naming, F7 pinned phrases, meta-reveal), C1–C9 (every QS
number pinned to value + path + grep; all 23 re-derivations run green today:
10 features, 30 assertions, 50 commits 2026-08-04→11 via git log, 7.2 days,
1,034 LOC, ~269M tokens, 31 sessions, 13 iterations, 2/1/1 failure modes,
806/829/833/811 + 35/35/35/35 OCR probe, iOS 26.6, iter 11b, QS-C7 TCC, S1/
S5/S20, loop.sh+eval.sh verbatim substring check), D1 (visual gate
bookkeeping; numeric threshold is the pending Phase 1.4 human gate). Three
flags for the planner in ## Negotiation: (1) prompts' `../../` QS path is
off-by-one from sharing_slides/ — pinned `QS = ../`; (2) outline's ~1,042
LOC corrected to the postmortem's wc-verified 1,034; (3) "built unattended
overnight" is not derivable from the QS repo — proposed restricting it to
the cover subtitle as framing. npm install verified complete (434 packages).
Status → IN NEGOTIATION — round 1. Awaiting planner attack.

## [2026-09-16] planner | contract round 1 attack (NEEDS-REVISION)

Verified the proposal independently before attacking: all 14 postmortem grep
pins + 4 contract pins re-run green; assertion count 30 and commit window 50
re-derived; `npm run build` + `export:png` planner-run green; reference deck
checked (0 section dividers, 26 kickers). Rulings on generator flags: path
off-by-one accepted (prompts/generator.md, prompts/evaluator.md, PLAN.md
fixed `../../`→`../`); LOC 1,034 confirmed; overnight-claim split accepted
(exhibit cites verifiable facts only, "while you sleep" stays rhetorical on
the cover — human has final say at ratification). Attack posted: P1
dividers→kicker pins (B2 contradicted B1's band AND the pinned format), P2
reserved-vocabulary convention (F8 self-reference collides with C1–C3
regexes), P3 word boundaries in C4, P4 fenced code counts toward B6's cap,
P5 QS-format per-axis evidence in D1, P6 coverage gaps (new A4 asset check,
B10 F2 pins, B11 F3 model naming), P7 audit must re-derive the 105 cap basis.
Count 22 → 25 (band ceiling). Generator round 2 running.

## [2026-09-16] planner | contract round 2 — ACCEPTED

Generator round 2 (trace 20260916-234612-generator-contract-r2.log) applied
all P1–P6, sharpened two demands (one-kicker-per-slide itself asserted;
D1 gains the weighted-arithmetic check ±0.01), and self-corrected a real
mechanical bug by dry-running its own B2 check against the reference deck
(frontmatter pseudo-block; fixed via a Conventions slide-block split —
validated: 27 naive vs 26 corrected blocks, 26/26 single kickers). Planner
re-derived every measurable claim: reference per-slide max **105** words (the
B6 cap basis), loop.sh=34/eval.sh=48 tokens, reserved-phrase hole-check exit
1, GLM-5.2 pin at ../PLAN.md:3. Accepted its arithmetic correction (28, not
my 29 — I double-counted the cover). Verdict: ACCEPTED with two one-line
noted edits for ratification (B6's script-slide-allocation parenthetical →
Phase-3-choice wording; Conventions gain the single-line phrase-pin rule —
outline.md soft-wraps "separation of concerns", proving the hazard).
Maintenance fixed: `class: section` mentions removed from prompts/generator.md
+ reference README. Next: evaluator mechanical audit, then human ratification.

## [2026-09-17] evaluator | mechanical audit — RUNNABLE

GLM evaluator (trace 20260916-235425-evaluator-audit.log) dry-ran all 25
checks: A1 build 1.02s exit 0; A2/A3 exports green (3 PNGs; PDF 94,595
bytes); all C-section QS pins re-run green, zero STALE-PINs; 105 cap basis
derived a third time (block 25 of the reference); D1 entry-shape +
weighted-arithmetic validated on a synthetic wrong entry (correctly
rejected). Findings riding to ratification: (1) A2/A3 post-export
"afterwards" checks under-pin the run directory — one word closes it;
(2) C1/C2/C3 numeric rows are vacuously true at zero matches — presence
enforcement is a human call (planner recommends presence clauses: the
exhibit must quote 10 features/30 assertions; the cost slide must quote all
nine C3 families); (3) per-slide frontmatter breaks the slide-block split —
deck must carry none (stub's `class: section` block dies in Phase 3).
Measured aside, planner-verified: the reference deck itself would fail B4
(18/25 non-cover slides <10-word notes) — B4 is deliberately stricter,
sourced from the generator prompt; reference README corrected.

## [2026-09-17] planner | human directives folded into ratification set

Human reviewed the ratification package: three directives + questions.
(b) visual/verbosity balance → B6 gains a visual floor (≥1 structural
visual element per content slide; reference measured: mean 71 words,
85% of slides carry ≥1 element — ours requires 100% of content slides);
(e) maintenance-mode slide → F7 grows to 3 slides (QS Phase-5 outer loops:
CI watcher, flaky-test patcher, digest, feedback clusterer — designed but
never needed for QS), new `Outer loops` kicker (B2 list → 9 labels), band
[15,20]→[15,21]; (f) title must foreground learning points → B3 pin rewords
(planner recommendation: "Loop Engineering — Think in Loops, Not Prompts").
Questions answered in reply (frontmatter, the exhibit label, evals-in-50).
outline.md + feature_list.json amended; full edit set recorded in contract
negotiation; awaiting the human's ratify.

## [2026-09-17] human | CONTRACT RATIFIED — LOCKED

Human ratified all nine amendments (planner entry in contract negotiation
records the verbatim decisions). Title: "Loop Engineering — Think in Loops,
Not Prompts"; subtitle "State on Disk, Roles Separated, Contract Before
Code"; "while you sleep" ratified as cover rhetoric. 25 assertions
(A1–A4, B1–B11, C1–C9, D1). Process note: a parallel same-file Edit race
silently dropped one outline.md amendment (found and repaired by re-read —
the write-lock warning is real; sequential edits on the same file from
now on). Phase 3 build loop starts: generator iteration 1 (F1 exhibit).

## [2026-09-16] generator | contract round 2 — P1–P6 accepted, count 25

Re-verified every planner amendment against the repo before accepting;
none needed substantive pushback. P1 (kickers not dividers): re-measured
the reference myself (0 `class: section`, 26 kickers on 26 slides, cover
kicker free-form) and rewrote B2 — plus one-kicker-per-slide asserted and
cover exempt from the list match; noted P1's arithmetic was 28 slides by
the outline's own budget, not 29 (conclusion unchanged); flagged
prompts/generator.md's stale "`class: section` dividers" line as planner
maintenance. P2: added the reserved-vocabulary Convention with new
evidence — QS loop.sh/eval.sh contain no reserved numeric phrases (grep
exits 1), so C8's verbatim embeds cannot misfire C1–C3. P3: word-boundary
C4. P4: fenced code counts toward B6; measured loop.sh=34 / eval.sh=48
word-regex tokens → each script fits its own slide, no C8×B6 conflict.
P5: D1 rewritten with the QS-faithful entry grammar (### header, four
axis floats, Total, Gap) plus the weighted-arithmetic check
(0.4C+0.3D+0.2Cr+0.1O ± 0.01) the planner's draft omitted. P6: added A4
(local-asset integrity), B10 (outline 1b terms), B11 (GLM-5.2 + K3,
re-derived from ../PLAN.md line 3). P7 folded into B6. Count 25 = band
ceiling; merge/kill rule adopted as standing. Self-correction from
dry-running my own B2 check on the reference deck: the naive `^---$`
split keeps frontmatter as a pseudo-block (27 for 26 slides) — would have
broken B2/B3/B4 on any correct deck; Conventions now pins the slide-block
split (strip frontmatter, slide 1 = cover), re-validated 26/26 one-kicker
-each. Status → IN NEGOTIATION — awaiting planner round 2.

## [2026-09-17] generator | Phase 3 iter 1 — F1 cover + exhibit

First build-loop section. Rewrote slides/slides.md from the 3-slide stub to
the F1 pair: cover re-pinned per B3 (title "Loop Engineering — Think in
Loops, Not Prompts"; pills; "while you sleep" + ratified subtitle phrase,
single-line per the phrase-pin convention) and "The exhibit" kicker slide
(cardrow: the app / 10 features / 30 mechanical assertions; callout: 50
commits · 7.2 days · 2026-08-04 → 2026-08-11). Re-derived every quoted fact
from QS before writing: json len 10, contract-header 30, postmortem greps
green. Found and root-caused the C3 commits recipe drift (bare --until dates
are time-of-day dependent; 50 re-derives exactly with explicit timestamps —
flagged in progress.md for the evaluator; pin value stands). Stub divider +
stub content deleted (B5 + no-per-slide-frontmatter). Checks green: A1/A2/A4,
B2 (one kicker/block; label list ["The exhibit"], full match deferred),
B3, B4 (68-word note), B5, B6 (66 words + visual floor), B7, C1, C2,
C3 families quoted, C9 dates, reserved-vocab scan clean. F1 → done in
feature_list.json. Next: F2.

## [2026-09-17] generator | Phase 3 iter 2 — F2 Why loops

Three kicker-"Why loops" slides appended: (3) prompt-runs-once vs
loop-repeats — cardrow contrast + "never explaining the project twice"
callout, harness-iteration-via-traces in the loop card; (4) boring on
purpose — orchestration-framework non-goal card vs agile-rediscovered card
(outline 1b terms verbatim); (5) the three SE mappings as cols-3 cardrow
(state→persistence/recovery, roles→separation of concerns,
contract→spec/test-first). All B10 terms land on single source lines per the
phrase-pin convention; no new numeric facts quoted, so C1–C3/C4 untouched.
One transient build failure: my edit dropped the closing `-->` on slide 5's
speaker note (vite: "Unexpected EOF in comment") — fixed by restoring the
closer; lesson recorded, note-closers checked henceforth. Checks green:
A1 build 1.14s; A2 5 PNGs; B2 one kicker/block, deduped labels
["The exhibit", "Why loops"]; B4 notes 74/67/82 words; B5 clean; B6
74/66/77 visible words with cardrow+callout on every slide; B10
2/1/2; F1 pins (B3/B7/C1/C2/C9) re-verified unchanged. F2 → done.
Next: F3 anatomy (loop.sh/eval.sh verbatim — C8).

## [2026-09-17] generator | Phase 3 iter 3 — F3 Anatomy of a loop

Four kicker-"Anatomy of a loop" slides appended. (6) The state layer is a
folder: grid-cols-2 — lede + "the folder is the memory" callout left, the
complete sharing_slides/ tree as a fenced-code card right (live exhibit,
13 entries with 1–2-word role comments; honestly complete modulo
dotfiles/generated output). (7) Three roles, two model families: mini
table — Kimi K3 plans/generates/reviews screenshots, GLM-5.2 grades code,
"different family — no self-grading"; no unpinned numbers quoted (the
~1/6-cost and 1M-context facts stay out — not contract-pinned). (8) The
whole engine, verbatim: Quick Shutter's loop.sh + eval.sh pasted byte-exact
into stacked bordered cards (C8 substring check green; 12.5px code, no
horizontal overflow); the note discloses this deck's variant swaps only
the runner command. (9) Working agreements, human gates: prompts-as-files
vs risky-slice gates cardrow + "the prompt is code — version it, diff it,
fix it where the trace went wrong" callout. Layout checked mechanically:
playwright measured per-slide scrollHeight/scrollWidth over served dist —
slide 8 overflowed 12px vertically; fixed by trimming card padding to
0.7rem. Checks green: A1 (1.38s), A2 (9 PNGs), B2 (deduped labels
["The exhibit","Why loops","Anatomy of a loop"]), B4 (notes 55+ words),
B5, B6 (84/48/100/80 visible words; floors: code fence, table, cardrow),
B11 (GLM-5.2 ×2, K3 ×4), C8 both scripts, reserved-vocab scan unchanged
(only the exhibit's own pinned C1/C3 phrases), C4 scan empty, F1/F2
regression pins unchanged. F3 → done. Next: F4 the contract.

## [2026-09-17] generator | Phase 3 iter 4 — F4 The contract

Three kicker-"The contract" slides appended. (10) Negotiation mechanics as a
propose/attack/arbitrate cardrow + four-shapes pill row + "30 mechanical
assertions across four shapes" callout (C2-safe: the only assertion-number
matches remain 30). (11) S1 (Jest can't call native modules → pure-function
checks pickOrientation/computeLayout) and S5 (Maestro has no assertEnabled →
tap-and-observe, counter stays 0/4) as evidence cards, both pinned to
2026-08-06 negotiation rounds. (12) S20: the multiplicative zoom formula
made the pinned launch state 0 absorbing — fenced code shows the math and
the additive fix; "green in CI while the feature was dead on arrival" +
caught-before-zoom-code-existed (evaluator's own grep-verified premise).
Checks green: A1 (1.25s), A2 (12 PNGs), A4 (0 refs), B2 (deduped labels
["The exhibit","Why loops","Anatomy of a loop","The contract"]), B4 (notes
64/85/99 words), B5 clean, B6 (83/86/104 visible words incl. code; floors:
cardrow+pills, cardrow, code card), C7 (S1/S5/S20/assertEnabled all ≥ 1,
single-line), C2/C4/reserved-vocab scans clean, F1–F3 regression pins
unchanged (B3 title+cover, B7 takeaway, B11 models, C1, C3 families, C8
verbatim scripts still substring-true, C9 dates). Layout re-checked
mechanically: inline playwright variant of overflow-check.cjs (planner's
file untouched per their formalize-or-drop note) — slides 10–12 fit exactly
(552/552, 980/980, pre 362≤362). F4 → done. Next: F5 war stories
(postmortem §1/§2/§3; C4/C5/C6 greps due).

## [2026-09-17] planner | iter-3 review note — overflow-check.cjs

Generator added slides/overflow-check.cjs (30 lines, playwright-chromium —
already a devDependency, so no gate trip): loads the dev server, measures
scrollHeight vs clientHeight per slide — a REAL overflow check, stronger than
B6's word-count proxy. Value confirmed; caveats: hardcoded port 8931 and slide
range 2–9, no npm script entry. Decision: keep for Phase 4's use; formalize
(parameterize range/port, npm script) or drop at the evaluation pass.
Reported per the over-engineering-visibility rule, not silently fixed.

## [2026-09-17] generator | Phase 3 iter 5 — F5 War stories

Three kicker-"War stories" slides appended. (13) The OCR pivot: Path A's
4-rotation argmax heuristic vs the falsified premise — the S3-style gate
proved OCR *runs*, never that the orientation signal exists; grid with the
story left and the probe card right (Vision OCR confidence, flat: 806 /
829 / 833 / 811 real capture, 35/35/35/35 fixtures, "orientation-agnostic
on iOS 26.6" on one line per the phrase-pin convention); callout carries
the human-approved edit — negative control, on hardware. (14) iter 11b —
wrote DONE past an open capture-EXIF BLOCKER; saw/missed cardrow, callout
"an open blocker outranks DONE"; the note discloses this deck's own
generator prompt carries the patched rule. (15) C7 — the simulator doesn't
enforce Photos denial for PhotoKit (deny sets TCC, query still answers
authorized, save succeeds); amendment cardrow (mocked-denial Jest branch +
manual on-device clause, signed in 2 rounds, evaluator re-proved the
premise, human authorized). Checks green: A1/A2/A3/A4, B2 (deduped labels
prefix ["The exhibit","Why loops","Anatomy of a loop","The contract","War
stories"]), B4 (107/100/123-word notes), B5, B6 (104/83/96 visible words,
floors code-fence/cardrow), C4 (all-four-or-none satisfied: exactly
806/811/829/833; fixture row; iOS 26.6), C5, C6, reserved-vocab scan
unchanged (only slide 2's pinned lines), C1/C2/C3 values unchanged, C8
substring-true, C9/B3/B7/B10/B11 regression pins green. Layout verified
mechanically (inline playwright, overflow-check.cjs untouched): slides
13–15 exactly 552/552, 980/980. F5 → done. Next: F6 honest cost (C3
presence for all nine stat families due there).

## [2026-09-17] generator | Phase 3 iter 6 — F6 The honest cost

One kicker-"The honest cost" slide appended (slide 16). Three stat cards:
THE SPEND (269M tokens; 31 sessions — planner-reported, unauditable from
the repo, 28 traces, no per-run token log), THE OUTPUT (1,034 LOC · 10
features · 50 commits · 7.2 days · 2026-08-04 → 2026-08-11), THE FRICTION
(13 generator iterations: 2 quota deaths, 1 wedged, 1 no-op misread; kernel
panic, disk-full, keychain ACL storm), plus the waste-vs-point callout
("4 of 13 runs committed nothing" — deliverables are the app plus the
harness). All nine C3 stat families land here with exact pinned values —
presence clause discharged; each value re-derived from QS before writing
(postmortem greps; commits=50 via explicit-timestamp git log, per the recipe
drift note). "31 sessions" written without "kimi" so the pinned
`[0-9]+ sessions` regex matches on a single line; token total never
decomposed (no ~254M/~13.5M fragments that would add `[0-9]+M tokens`
matches). Checks green: A1/A2 (16 PNGs ∈ [15,21])/A3/A4, B2 (deduped
prefix 6/9), B4, B5, B6 (76 visible words, cardrow floor), B7/B10/B11,
C1–C9 all (kernel panic ×2, keychain ×2, planner-reported/unauditable ×3),
reserved-vocab scan clean (only pinned values), C8 verbatim unchanged.
Layout: inline playwright over served dist — slide 16 exactly 552/552,
980/980. F6 → done. Next: F7 when loops fail + outer loops (B8 phrases
due).

## [2026-09-17] generator | Phase 3 iter 7 — F7 When loops fail + Outer loops

Three slides appended: (17) the boundary as a shine-vs-fail cardrow — loops
shine greenfield/bounded/mechanical, fail on brownfield dependency topology
(B8 phrase #1, single line in the card head) — with the bottleneck-test
callout; (18) a file at a time can't see a system — measuring and tuning an
existing system requires graph-based reasoning about the whole (B8 phrase #2),
loop's unit of change vs perf work's needs as cards, "change tools, or keep
the human"; (19, kicker "Outer loops") QS PLAN.md Phase 5 as a mini table —
CI watcher every few minutes / flaky-test patcher nightly / digest nightly /
feedback clusterer later — honestly "designed, never needed" (app shipped
single-user), PLAN.md:144's "Improve the codebase is a wish, not a loop" as
the callout, Monday-morning framing in the note. Evidence re-read before
writing (../PLAN.md:135–144). No new numeric facts → C-scans unchanged.
Two self-caught layout fixes via the inline playwright overflow check
(planner's overflow-check.cjs untouched): slide 18 hit 113 visible words >
the 110 cap → trimmed to 104; slide 19's first draft (2×2 cardrow)
overflowed 607 > 552 → restructured as the deck's mini table, now exactly
552/552 (17/18 too). Checks green: A1 1.26s, A2 19 PNGs ∈ [15,21], A3 PDF,
A4 0 refs, B2 prefix 8/9, B4 notes ≥ 89 words, B5 clean, B6 83/104/89 with
floors, B8 ×3/×1, B3/B7/B10/B11 + C1–C9 regression pins unchanged,
reserved-vocab scan clean, C8 verbatim substring-true. B9 grep #2 remains 0
by design — F8's meta reveal discharges it next. F7 → done. Next: F8.

## [2026-09-17] generator | Phase 3 iter 8 — F8 meta reveal + close; build loop DONE

Two kicker-"The loop built this deck" slides appended. (20) The reveal: "Yes —
this deck was produced by the loop it describes" — lands B9's second grep
(lowercase, mid-sentence, single source line per the phrase-pin convention);
K3 planned it, GLM-5.3 wrote and checked it, a human ratified every lock (B11's
GLM-5.2 grep cannot collide with 5.3); paper-trail card points at contract.md /
progress.md / log.md / traces/ under sharing_slides/ — every claim auditable on
disk (traces verified non-empty before writing). (21) Start-with-one-loop
close: pick a boring job / set up three files / gate the risky 5% cardrow,
takeaway restated verbatim (B7), foot-tag end-of-deck; "a place to write DONE"
in the state-files card is literal — progress.md gets DONE this iteration.
Evidence discipline: no new numeric facts (no reserved-vocab numeric phrases;
"three files" and "the 5%" carry no C-section regex hits). Checks green:
A1 build 1.27s; A2 21 PNGs — exactly the B1 ceiling [15,21]; A3 PDF 408,354
bytes; A4 0 refs; B2 complete 9-label list, one kicker per block ×21; B3/B4
(notes 71/63 words)/B5/B6 (79/95 words; floors fenced-code+callout and
cardrow+callout)/B7–B11; C1–C9 all green (C8 verbatim substring-true; C3
days/LOC/quota families re-verified: 7.2 / 1,034 / 2). Layout verified
mechanically (inline playwright over served dist; planner's
overflow-check.cjs untouched): slides 20–21 exactly 552/552 and 980/980,
pre-overflow 0. F8 → done: every feature_list section passes its checks →
DONE written as the last line of progress.md; generator build loop stops.
Phase 4 (evaluator pass + D1 visual gate, threshold pending Phase 1.4 human
calibration) and final delivery are the evaluator/planner/human lanes.

## [2026-09-17] evaluator | Phase 4 mechanical pass — 24/25 PASS; D1 FAIL (pre-gate, not generator)

All 25 assertions run by me this session from `sharing_slides/` (builds in
`slides/`), against the deck as committed — not the generator's summaries.
Environment: git 2.50.1 (Apple Git-155), python3 3.9.6, node v26.5.0.

**A — 4/4 PASS.** A1 `npm run build` exit 0 (1.29s). A2 `npm run
export:png` exit 0; `ls exports/png/*.png | wc -l` → 21 (≥1). A3
`npm run export:pdf` exit 0; `test -s exports/loop-engineering.pdf` → PDF
408,354 bytes. A4 asset script: 0 refs, 0 local → trivially true.

**B — 11/11 PASS.** B1: 21 PNGs ∈ [15,21] — at the ratified ceiling.
B2: 21 slide blocks (frontmatter-stripped split), exactly one kicker per
block, deduped labels == the pinned 9-list exactly (incl. `Outer loops`).
B3: `grep -m1 '^title:'` → `Loop Engineering — Think in Loops, Not Prompts`;
cover block has `class="pill"` ×4 and, case-insensitively, both
`state on disk, roles separated, contract before code` and
`while you sleep` on one line. B4: notes ≥10 words on all 20 non-cover
blocks. B5: placeholder grep exit 1. B6: per-slide visible words (pinned
stripping) max 104 ≤ 110 (counts: 42*, 66, 74, 66, 77, 83, 58, 100, 84,
83, 86, 104, 104, 83, 96, 82, 83, 104, 89, 79, 95; *cover exempt); visual
floor 20/20 content slides. B7: 2 / 10 / 0. B8: 3 / 1. B9: 4 / 1
(`this deck was produced by`, slides.md:651). B10: 3 / 1 / 2. B11: 2 / 5.

**C — 9/9 PASS (fact audit: every QS pin re-derived by me against `../`).**
C1: deck `10 features` ×2 only; QS `len(json.load('../feature_list.json'))`
→ 10. C2: deck `30 mechanical assertions` ×2 only; QS
`grep -oE '^- \*\*[A-D][0-9]+\.' ../contract.md | sort -u | wc -l` → 30,
`^Status:` contains `30 assertions`. C3: all nine families present with
exact pinned values (269M tokens ×2, 31 sessions ×2, 13 generator
iterations, 50 commits ×2, 7.2 days ×2, 1,034 LOC, 2 quota, 1 wedged,
1 no-op) + kernel panic ×2, keychain ×2; QS postmortem greps all green
(:8–:12). C4: deck scan → exactly {806,811,829,833}; fixture
`35/35/35/35` ×1; `iOS 26.6` ×2; QS postmortem:16 carries both pins.
C5: `11b` ×1; QS :11 + §3 heading :26. C6: `C7` ×2; QS TCC denial :22;
`amendment proposal — C7` ../contract.md:423. C7: S1×3 / S5×3 / S20×1 /
assertEnabled×2; QS :199 / :257 / :1642 / ×2. C8: both `../loop.sh` and
`../eval.sh` (trailing-whitespace-normalized) are substrings of
slides/slides.md; 34/48 B6-tokens as pinned; reserved-vocab hole-check on
the scripts exits 1. C9: `2026-08-04` ×2, `2026-08-11` ×2,
planner-reported/unauditable ×2; QS :9 / :10. Reserved-vocab scan of the
deck: only the pinned QS values match (slides.md:58, 63, 525, 526, 536).

**Fact audit beyond the pins (all green):** slide 16 `4 of 13 runs
committed nothing` = postmortem:60 ("4 of 13 generator iterations (~30%)
produced no committed work"); slide 11 `counter still 0/4` =
../contract.md:112–113; slide 12 `Amendment 5` = ../contract.md:9/:1384
(F9+F10 pinch zoom — S20's amendment); slide 15 `signed in 2 rounds` =
C7 generator rounds :423/:519, evaluator round 2 :530 "(SIGNED)"; slide 19
outer-loops table = ../PLAN.md:139–142 all four jobs + cadences, callout
verbatim at :144; slide 13 `4 rotations` = postmortem:16.

**D1 — FAIL (by its own design, pre-gate).** (a) rubric.md `## Threshold`
holds no numeric value — Phase 1.4 calibration still pending (human gate);
(b) `exports/visual-scores.md` does not exist (`ls` exit 1); (c)/(d)
NOT-RUN — no entries to shape-check or compare. Scoring is the K3 visual
evaluator's lane; this is not a generator defect and not a generator
blocker. Deck cannot sign off until D1 lands.

**Findings:**

1. **C3 commits recipe — the bare-date form is set-corrupting, worse than
   progress.md reported.** Contract line: `git -C .. log --oneline
   --since=2026-08-04 --until=2026-08-12 | wc -l` → 50. Measured today
   15:51 +08: returns 50, but the SET is wrong — diff vs the
   explicit-timestamp window shows it includes f882e0a (2026-08-12
   12:55:55 +0800, outside the postmortem window) and drops f23a257
   (2026-08-04 14:55:47 +0800, the in-window Phase-0 scaffold); the two
   errors net to a coincidental 50. git 2.50.1 appends the current
   time-of-day to date-only `--since` AND `--until`, so the count drifts
   with the clock (can read 49/50/51 depending on time of day). The
   generator's "returns 51" did not reproduce today; their diagnosis was
   directionally right but missed the `--since` side. The pinned VALUE 50
   is correct and re-derives green with explicit timestamps
   (`--since='2026-08-04T00:00:00' --until='2026-08-11T23:59:59'` → 50,
   correct set f23a257…1bdeb66). Any future re-runs: explicit form only.
2. **Over-engineering (reported, not fixed — planner's formalize-or-drop
   call):** `slides/overflow-check.cjs` is still present, hardcoded to
   slides 2–9 and port 8931 — stale for a 21-slide deck. The generator
   used inline playwright variants for slides 10–21 instead of
   parameterizing it. Decide: formalize (all slides, parameterized port,
   npm script) or delete.
3. B1 sits exactly at the ratified ceiling (21/21). Any future content
   addition breaches the band → human gate, per B1's own text.

**Verdict: 24/25 PASS. D1 open pending Phase 1.4 human calibration + K3
visual scoring pass. No generator blockers. Mechanical sign-off blocked
solely on D1.**

## [2026-09-17] planner | Phase 4 pass reviewed — 24/25, two actions

Eval pass (trace 20260917-154658-evaluator-phase4.log): 24/25 PASS, D1 open
pending calibration. Actions: (1) overflow-check.cjs DELETED per its
formalize-or-drop call — the generator itself used inline playwright variants
for slides 10–21 instead of parameterizing it, so the stale file's value was
already spent; real overflow review happens at the D1 visual gate on the
exported PNGs. (2) C3 commit-window recipe drift (git appends time-of-day to
date-only --since/--until; count can read 49/50/51) goes to the human as a
locked-contract amendment: pin the explicit-timestamp form
(--since='2026-08-04T00:00:00' --until='2026-08-11T23:59:59' → 50, verified
by the evaluator with the correct commit set f23a257…1bdeb66). Deck content
unaffected — the pinned VALUE 50 is correct.

## [2026-09-17] planner | C3 amendment applied + calibration set in motion

C3 amendment (post-lock, human-approved): commit-window recipe now uses
explicit timestamps. Rubric calibration set recorded in rubric.md: good =
Evals-101 + two Anthony Fu (Slidev author) talk decks — ViteConf 2025 and
"Vite, the on-demand DX" 2022 (demo.sli.dev unreachable from this
environment — substituted with canonical author decks); slop = one-shot +
bullet-dump + buzzword-soup decks (self-produced, in progress via three
one-pass opencode runs into research/calibration/). Good-reference
screenshots captured (3 per deck) to research/calibration/shots/ via
playwright; spot-checked as real renders.

## [2026-09-17] visual gate | D1 first pass — 20/21, slide 19 blocked

Calibration run landed (rubric.md): good 0.77–0.81, slop 0.24–0.46, ranking
PASS; threshold set at 0.72 (worst good − 0.05). Instructive near-miss: the
one-shot deck is *plausible* — it fails on Content (zero verifiable numbers;
ignored its own 15-slide instruction, made 25) and Craft (3 notes / 25
slides), exactly what the contract mechanisms catch. Full-deck visual review
(exports/visual-scores.md, D1 entry grammar, arithmetic validated ±0.01):
20/21 slides pass; **slide 19 (Outer loops) fails at 0.71 — vertical
overflow, bottom callout clipped.** Notably: B6's word-cap proxy passed that
slide — the render disagreed; the proxy-versus-render gap is exactly why D1
exists. Blocker written to progress.md; generator fix iteration next, then
the slide-19 re-score.

## [2026-09-17] generator | iter 9 — slide-19 overflow blocker resolved

D1-blocker fix iteration (unresolved ## BLOCKER outranks all else). Verified
the blocker against the artifact before touching the deck: playwright over
served dist measured slide 19's slidev-slide-content at scrollHeight 576 vs
clientHeight 552 — a 24px clip; the callout's bottom at y=576.1, clipped
mid-sentence exactly as the visual score said. Fixed per the blocker's own
menu, inside the locked contract: "The job" cells shortened to one line per
row (flaky patcher now "quarantine + repair flaky tests" — the Maestro /
unit-test scope moved to the speaker note; digest as "log.md → the morning
report"; clusterer job without the once-there-are-users caveat, also moved
to the note), lede bottom margin 0.4→0.2rem, table top 0.6→0.4rem, callout
top 1.2→0.8rem and trimmed to a single line ("verifiable at a glance"
dropped — slide 21 still carries "glanceable"). After: slide 19 exactly
552/552 and 980/980, callout bottom y=467.2 — 84.8px clearance; full-deck
rescan 1–21 all exactly 552/552, 980/980, zero overflow. Battery re-run
green: A1 build 1.34s; A2 21 PNGs re-exported (fresh 19.png for the
re-score); A3 PDF 408,175 bytes; A4 0 refs; B1 21 ∈ [15,21]; B2 21 blocks
one kicker each, 9-label list intact; B3–B11 all (slide 19: 75 visible
words ≤ 110, <table> floor, 91-word note); C1–C9 all green (reserved-vocab
scan clean — only the pinned QS values; no new numeric phrases introduced).
No slide added (B1 ceiling honored). K3 re-score of slide 19 flagged in
progress.md Next.

## [2026-09-17] visual gate | D1 PASS — 21/21, deck complete

Slide 19 re-scored after generator iter 9 (compact table, callout in frame):
0.84, all pins regression-checked (B2 sequence, B8 phrases, build green,
PDF re-exported). Final D1: 21/21 ≥ 0.72, min 0.805. With the Phase 4
evaluator pass's 24/24 mechanical assertions green, the contract is fully
satisfied: 25/25. Deck deliverables: slides/ (Slidev source),
slides/dist/ (static build), exports/loop-engineering.pdf,
exports/png/ (21 renders), exports/visual-scores.md (D1 evidence).
Remaining human items: GitHub repo name for the Pages --base; final sign-off.

## [2026-09-17] planner | human feedback batch → amendment 2 + F9 queue

Human reviewed the rendered deck. Investigations: (1) dist/index.html blank
over file:// is ES-module CORS — the same dist renders fine over http
(playwright-verified); a preview script joins the batch. (2) The QS D1
pinned-state screenshots survived in ~/.maestro/tests/…/tmp-d1-shots/ —
rescued to slides/public/ (camera-2of4, result-combined); nothing had been
committed to the repo. (3) agent-loops audit clean (no secrets; one
untracked IDE file, never committed); repo was in sync with origin; flipped
PUBLIC per human directive: https://github.com/cyrotiv/agent-loops.
(4) research/LLMs and Circular Reasoning.docx read — grounds the slide-18
diagram (graph topology must be serialized into tokens; NLGraph/GraphOmni).
Contract amendment 2 (human-directed): B1 band [15,22] (recap slide), B3
pill pin dropped (cover pills removed). F9 queued with the full R-list;
DONE retracted. Generator revision iteration(s) next, then D1 re-scores.

## [2026-09-17] generator | Phase 3 iter 10 — F9 human feedback batch (R0–R9)

Revision iteration for the human's rendered-deck feedback; deck 21 → 22
slides (recap), B1's amended [15,22] ceiling hit exactly. R0 preview script;
R1 cover kicker reworded + pills deleted (B3 greps intact); R2 exhibit gains
the two rescued D1 phone shots with an honest simulator caption — the PNGs
were moved slides/public/ → slides/assets/ because vite cannot import
public/ files by relative path (build error, reproduced twice) and a
root-absolute path would fail A4's test -e; assets/ satisfies both —
deviation recorded in progress.md. R3 script cards carry who/when (ct titles
+ mono captions); C8 fences untouched, substring-verified. R4 verbatim
quotes from the QS prompt files (sourced at ../prompts/generator.md:109/:69
and prompts/generator.md gates) + one shared .quote CSS rule. R5 slide-4
restructure per R5 (engine line to WHAT IT IS; framework add+cost card;
note sells boring=auditable). R6 slide-17 quick-test verbatim. R7 slide-18
retitled + mermaid LR call-graph across api/core/ui subgraphs; note grounded
in research/LLMs and Circular Reasoning.docx (topology→tokens, NLGraph/
GraphOmni — terms verified present in the docx first); the old side cards
merged into one paragraph to make the diagram fit. R8 recap slide (5 steals,
generalizable only, 6-col cardrow with 2/2/2/3/3 spans). R9 agent-loops
link on the closer (text link, no asset implications). Layout: three
self-caught overflow rounds via the inline playwright check (fresh-load per
slide; the old hash-nav probe was reading a stale DOM); mermaid renders
inside a shadow root — svg invisible to plain DOM queries, host 973×192,
svg capped at 736px, no card overhang; 22/22 slides exactly 552/552 and
980/980; both exhibit images naturalWidth>0. Full battery green: A1 1.52s,
A2 22 PNGs, A3 PDF 767,941 bytes, A4 2/2 refs, B2 9-label list (recap
shares the closer kicker), B3–B11, C1–C9, reserved-vocab scan clean (only
pinned lines). F9 → done; all sections pass → DONE written to progress.md.
Planner/K3: D1 re-scores due for slides 1, 2, 4, 8, 9, 17, 18, 21, 22 (+ one
new entry — 22 total, D1(b) count must match B1).

## [2026-09-17] planner | F9 revision batch verified — D1 22/22, deck final

Iter 10 applied all ten revision items (R0–R9). Planner verification:
full battery re-run (22 slides, B2 sequence intact, cover rework green,
both app screenshots referenced and rendering, mermaid diagram live on
slide 18, agent-loops link on the closer, no over-cap/weak-notes/no-visual
slides); every touched slide re-viewed from fresh PNGs and re-scored —
visual-scores.md now holds 22 entries, arithmetic validated, min 0.805,
all ≥ 0.72. PDF re-exported. F9 marked done. Deck is final pending the
human's sign-off.

## [2026-09-17] op | generator iter 11 — F10 human feedback batch #2

Four edits, no slide-count change (22). Slide 6: tree = the ACTUAL
quick_shutter repo root (verified against `ls ../`; loop files annotated,
app payload elided); callout carries the meta thread + B9 (sharing_slides/
has the same shape — reveal comes last). Slide 4 note: exit-code explainer
(0 = pass, non-zero = fail; the loop needs only the binary verdict).
Slide 18 note: latency-test pushback + answer (THAT not WHERE/WHY;
patch-on-patch churn; Goodhart; the <100 ms budget had an author) —
grounded in the docx per iter 10. Slide 20: "THIS DECK, IN NUMBERS" mono
stat block (mirror of the exhibit) + regulatory-forward callout verbatim;
paper-trail card folded in; 107 visible words, code floor. Two
interpretations recorded in progress.md (reserved-vocabulary rewording:
25 mechanical checks / 17 agent runs / 31 git revisions — C2/C3-safe;
numbers pinned to the human's measured snapshot, window line on slide).
Battery green: A1 1.49s, A2 22 PNGs, A3 PDF, A4 2/2, B1–B11, C1–C9
(C8 substring-true; C-scans only pinned values). Overflow
playwright-measured: 22/22 exactly 552/552 + 980/980; probe fix —
measure after the slide-left transition settles, pick the in-viewport
.slidev-slide-content (mid-transition clones false-flag slides 2–4 in a
250ms probe). Planner/K3: re-score slides 6 + 20. All sections pass →
DONE re-written as progress.md's last line.

## [2026-09-17] planner | F10 verified — deck final v2

Iter 11 landed all four F10 items; planner re-verified from fresh PNGs:
slide 6 shows the real quick_shutter/ root (meta caption keeps B9), slide
20 carries the measured stat block + regulatory-forward note, speaker-note
additions on 4/18 (invisible by design — the notes are for the presenter).
Battery green, overflow clean, PDF re-exported. D1 re-scores: slide 20
0.875 (was 0.85). 22/22 ≥ 0.72 stands. Deck final pending human sign-off.

## [2026-09-17] op | generator iter 12 — F11 recap wording

Human directive section (steal → take-away). Slide 21 edited: title "The
recap: five things to steal" → "The recap: five take-aways"; labels
STEAL 1–5 → TAKE-AWAY 1–5; speaker-note wording matched for presenter
consistency (no grep sees the note's wording — B4 only counts words).
No contract pin involves the word "steal"; no numbers added or changed
(C-scans and reserved-vocab scan untouched — only the pinned lines match).
Battery green: A1 build 1.49s; A2 22 PNGs re-exported; A3 PDF re-exported;
B1 22 ∈ [15,22]; B2 one kicker per block ×22, 9-label list intact; B3/B4/
B5; B6 recap 80 visible words ≤ 110, cardrow floor, deck max 108; B7–B11;
C1–C9 (C8 loop.sh/eval.sh still verbatim substring-true). Overflow
playwright-measured over served dist (fresh-load per slide, settle ~1.1s,
in-viewport .slidev-slide-content): 22/22 exactly 552/552 + 980/980 — the
wider TAKE-AWAY labels wrap nowhere. F11 → done in feature_list.json; all
sections pass → DONE re-written as progress.md's last line. Planner/K3:
re-score slide 21 in exports/visual-scores.md (count stays 22).

## [2026-09-17] planner | F11 rename verified + voice-pass proposals drafted

Iter 12: recap slide now reads TAKE-AWAY 1–5, "The recap: five take-aways";
battery + overflow green. Human then asked for a voice pass (humaniser)
guided by research/going-in-circles.md, with proposals reviewed BEFORE any
edit. Voice analysis from the guide: inline term definitions, first-person
hedged honesty, named feelings, concrete numbers, candidates-not-findings
epistemics. Deck review: KEEP 12, TWEAK 8 (1–2 line edits), REWRITE 0 —
gaps are jargon-before-definition (greps, argmax, TCC, mock, absorbing) and
a few aphorisms. Full slide-by-slide proposals with pinned-string
constraints in research/voice-pass-proposals.md. Awaiting human markup.

## [2026-09-17] op | generator iter 13 — F12 voice pass

Human-approved voice pass applied exactly (research/voice-pass-proposals.md):
8 tweaks, 12 keeps, REWRITE 0. Slides 2/3/4/7/11/12/13/15 edited verbatim —
plain-form callouts (S3 first-person "In my experience", S4 search-compare-
roll-back + one-sitting audit, S7 "model family" / "has to be earned"), and
inline term definitions at first use (S11 mocking, S12 absorbing, S13 argmax
+ negative control, S15 TCC); S2's callout de-jargonized ("can be checked
against the repo yourself") and the caption aphorism replaced with the plain
honesty line. Matching Say-lines in the speaker notes follow on 2 and 4.
Two consequences handled inside the locked contract and recorded in
progress.md: slide 13 exceeded B6's cap (115 > 110) after its two
definitions — trimmed two phrases whose detail lives verbatim in that
slide's note; slide 2's longer caption squeezed the callout (286px × 6
lines) and the wrap overflowed vertically (581 > 552) — caption now
max-width 30em (2 lines) + exhibit images 192→176px, slide exactly 552/552
+ 980/980. Battery green: A1 1.47s, A2 22 PNGs, A3 PDF 790,209 bytes, A4
2/2, B1–B11, C1–C9 (C8 substring-true; reserved-vocab scan only pinned
values). Overflow probe hardened: fresh page per slide — shared-page
hash-goto is an SPA transition that false-flagged 982/980 once. F12 → done;
DONE re-written; planner re-scores due for the 8 touched slides.

## [2026-09-17] planner | voice pass applied + deck live on GitHub Pages

F12 (approved voice pass) applied via iter 13: all 8 tweaks verbatim, every
pinned string re-verified intact (my battery script's two 'missing' alarms
were case/format false alarms — 'Agile' capital-A and the spaced
'806 / 829 / 833 / 811'; contract regexes pass). Publishing (human gate,
user-authorized): public repo github.com/cyrotiv/loop-engineering carries
the deck source + full state layer (snapshot push — traces excluded: local
absolute paths + size; the user's two unpublished draft docs excluded);
site live at https://cyrotiv.github.io/loop-engineering/ (gh-pages branch,
--base /loop-engineering/, playwright-verified rendering the cover).

## [2026-09-18] human | FINAL SIGN-OFF

The human reviewed the deck and signed off. Public repo main refreshed with
the final state (the first snapshot predated the voice pass — fixed by a
final snapshot push; the live site already carried it). Project complete:
22 slides, 25/25 contract assertions green, D1 visual gate 22/22 ≥ 0.72,
delivered live + static + PDF. The loop that built Quick Shutter built its
own talk about it.

## [2026-09-18] op | generator iter 14 — F13 appendix + human batch #3

Deck 22 → 24 slides (amended B1 [15,24] ceiling, exactly). Two kicker-
"Appendix" slides after the closer: (23) "Where it started — the source
documents" — SPEC raw idea lines 1–2 verbatim in a fenced card (items 3–4
elided with "…", disclosed in the note) + 4 of the 10 PLAN guiding rules as
verbatim list lines (Write the loop / a model never grades / state on disk /
start with one loop), caption ties SPEC item 2 to the OCR war story; (24)
"The lock, and the bar every run clears" — ../contract.md's Status line and
assertion A1 as full verbatim source lines in one fence ("A1 of 30 — an exit
code decides" mono caption) + the generator prompt's goal-driven clause (3
full source lines) in a second. Slide 3 note: token-savings nuance (a pass
can out-spend a one-shot prompt; the saving is the runs you never waste).
Slide 22 examples → consulting-flavored: nightly RAG ingestion of new client
documents; a watcher keeping an MCP server's contract tests green (body net
−2 words; note updated to match). Verbatim discipline scripted: every
snippet line is a substring of its real source file AND a single line in
slides.md (F13's test). C2 note: the QS status line adds a third
"30 assertions" match — value 30, pinned, safe; C9's 2026-08-04 gains a
third hit, same value. Battery green: A1 1.30s, A2 24 PNGs, A3 PDF
815,518 bytes, A4 2/2, B1 24 ∈ [15,24], B2 one kicker/block ×24 with the
amended 10-label list (Appendix ×2 dedupes), B3, B4 (95/89-word notes on
the new slides), B5, B6 max 109 deck-wide (new slides 105/84, code-fence
floors), B7–B11, C1–C9 (C8 verbatim scripts untouched, substring-true;
reserved-vocab scan: pinned values only). Overflow playwright fresh-load
per slide: 24/24 exactly 552/552 + 980/980; SPEC fence's 127-char line at
11px mono fits 820≤820. Interpretation recorded in progress.md: slide 20's
stat block keeps its F10 snapshot numbers (window line self-describes;
batch didn't direct an update) — flagged for the human. F13 → done; all
feature_list sections pass → DONE re-written as progress.md's last line.
Planner/K3: D1 re-scores due for slides 22, 23, 24; D1(b) entry count must
reach 24.

## [2026-09-18] op | generator iter 15 — F14 slide-23 annotation fix

Planner-flagged fix: the appendix PLAN-rules card caption read "4 of 10 rules
— item 2 above became the OCR war story"; inside that card "item 2 above"
parses as PLAN rule 2 (a model never grades its own work) — unrelated to the
OCR story (the orientation item is SPEC item 2, one card up). Swapped for
F14's pinned line verbatim: "4 of 10 rules, verbatim — the full list is in
PLAN.md" — single line, no reserved-vocab/C-regex hits ("10 rules" ≠ "10
features"). Speaker note untouched: its item-2 sentence is scoped to the SPEC
and true. Battery green: A1 1.30s, A2 24 PNGs re-exported, A3 PDF, A4 2/2,
B1 24 ∈ [15,24], B2 one kicker/block ×24 + amended 10-label list, B4, B5,
B6 (slide 23 → 53 visible words; code-fence floor), B7–B11, C1–C9 (C8
substring-true; reserved-vocab scan pinned-only; C4 exactly the four scores).
Overflow playwright fresh-load: SPEC/PLAN slide exactly 552/552 + 980/980,
SPEC fence 820≤820, annotation one line. Probe note recorded: dist is a
hash-routed SPA — extensionless /N URLs don't resolve; use /#N fresh loads.
F14 → done; every feature_list section passes → DONE re-written as
progress.md's last line. Planner/K3: slide-23 re-score due (D1).
