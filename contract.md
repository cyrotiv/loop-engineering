# Contract

<!-- Negotiated checklist of testable assertions for the deck. Phase 2:
     generator (GLM-5.3) proposes, planner (K3) attacks, they argue via
     ## Negotiation below. Human arbitrates deadlocks. Any edit to
     ## Assertions after lock is a human gate. Target: 15–25 mechanical
     assertions across the four shapes in PLAN.md Phase 2. -->

Status: **LOCKED** — 25 assertions (A1–A4, B1–B11, C1–C9, D1), ratified by
the human 2026-09-17 with ratified amendments 1–9 (see ## Negotiation,
human-ratification entry). Any edit to ## Assertions is now a human gate.

## Conventions (apply to every assertion)

- **Run directory.** Every check runs from `sharing_slides/` unless the
  assertion says otherwise. Build checks run from `sharing_slides/slides/`.
- **QS paths.** `QS = ../` relative to `sharing_slides/` (the Quick Shutter
  repo root; equivalently `../../` relative to `slides/`). Note: the
  generator/evaluator prompts say `../../` for QS — that is off by one when
  the run directory is `sharing_slides/`; this convention fixes it. Planner
  confirm (Negotiation round 1, flag 1).
- **Slide count.** Determined by Slidev itself: the number of PNG files in
  `exports/png/` after A2. Never hand-count `---` separators.
- **Visible text** = slide body with frontmatter blocks, HTML comments, and
  HTML tags stripped (the B6/B4 scripts define it exactly).
- **Verbatim quote check** (C8): file content normalized by stripping
  trailing whitespace per line, then tested as a substring of `slides/slides.md`.
- **Slide blocks (round 2 self-correction).** The file opens with a
  frontmatter block delimited by the first two `^---$` lines; remove it,
  then split the remainder on `^---$` at column 0 → **slide blocks** in
  file order; slide 1 = the cover. (The naive split keeps the frontmatter
  as a pseudo-block — 27 non-empty blocks for the reference deck's 26
  slides, dry-run 2026-09-16 — which would break B2/B3/B4 on any correct
  deck. B2/B3/B4 use this definition.)
- **Reserved vocabulary (P2, round 2).** In numeric phrases, `features`,
  `assertions`, `commits`, `sessions`, `tokens` always mean Quick Shutter;
  this deck's self-references use `sections`, `checks`, `slides`, `runs`
  with numbers — never the reserved words. Verified 2026-09-16: the QS
  scripts embedded verbatim by C8 contain none of the reserved numeric
  phrases (`grep -nE '[0-9]+ (features|assertions|commits|sessions|tokens)'`
  `../loop.sh ../eval.sh` exits 1), so C8 cannot misfire C1–C3.
- **Single-line phrases (ratified 2026-09-17).** Phrase greps match single
  source lines: every pinned phrase must appear on ONE line in
  `slides/slides.md` (a markdown soft-wrap defeats the grep).
- **No per-slide frontmatter (ratified 2026-09-17).** Per-slide YAML blocks
  break the slide-block split (a `key: value` block yields a bodyless
  pseudo-block — evaluator audit, 2026-09-16); the pinned reference format
  carries none. Per-slide styling uses inline HTML, never frontmatter.

## Assertions

### A. Build (shape 1)

- **A1.** `npm run build` exits 0 in `slides/` (static site builds).
  Verified against the stub 2026-09-16 (exit 0).
- **A2.** `npm run export:png` exits 0 in `slides/`; afterwards, from
  `sharing_slides/`, `ls exports/png/*.png | wc -l` ≥ 1.
- **A3.** `npm run export:pdf` exits 0 in `slides/`; afterwards, from
  `sharing_slides/`, `test -s exports/loop-engineering.pdf` passes.
  (Outline pins delivery as live + static + PDF; the live dev server is
  not CI-checkable — excluded.)
- **A4. Asset integrity (P6, round 2).** Every local asset referenced from
  `slides/slides.md` exists on disk. Script: extract `![…](path)` and
  `src="path"` targets, drop ones starting `http://`, `https://`, or
  `data:`; each remaining path must pass `test -e` resolved against
  `slides/`. Zero references passes (trivially true today; tripwire for
  later assets).

### B. Mechanical content (shape 2)

- **B1. Slide count in band.** `ls exports/png/*.png | wc -l` ∈ [15, 24].
  Band from outline.md "Constraints" (30-min slot; amended 2026-09-17: the
  Outer-loops maintenance slide, then the feedback-batch recap slide —
  amendment 2; amended 2026-09-18: two appendix slides carrying verbatim
  snippets of the key documents — amendment 3). If content genuinely
  demands 25, that is a contract amendment (human gate), not a silent pass.
- **B2. Section structure via kickers (P1 rewrite, round 2).** Every slide
  block contains exactly one `class="kicker"` element (the pinned reference
  format: 26 kickers on 26 slides, cover included — measured 2026-09-16;
  `class: section` dividers are NOT part of the format). The kicker labels
  of slides 2..N in file order — the cover's kicker is free-form, like the
  reference's "A practical guide · Team briefing" — with consecutive
  repeats deduped, are exactly:
  1. The exhibit
  2. Why loops
  3. Anatomy of a loop
  4. The contract
  5. War stories
  6. The honest cost
  7. When loops fail
  8. Outer loops
  9. The loop built this deck
  10. Appendix
  Check: split into slide blocks per the Conventions definition; per block
  `re.findall(r'class="kicker"[^>]*>([^<]+)', block)` yields exactly one
  label; dedupe consecutive labels from block 2 onward; compare the list
  to the above with `python3 -c`.
- **B3. Cover (title re-pinned 2026-09-17, human directive f; pill pin
  dropped by amendment 2, 2026-09-17 — the pills read as inert buttons and
  were removed).** Slidev frontmatter `title:` in `slides/slides.md` equals
  `Loop Engineering — Think in Loops, Not Prompts`; the first slide block
  (cover body, per the Conventions split — round 2: the round-1
  `sed -n '1,/^---$/p'` range grepped the frontmatter, not the cover)
  contains, case-insensitively, both `state on disk, roles separated,
  contract before code` (the ratified subtitle — it is also the pinned
  takeaway, B7) and `while you sleep` (rhetorical framing per the ratified
  overnight ruling: lives on the cover, never a cited fact). Check:
  `grep -m1 '^title:' slides/slides.md`; then extract the cover body
  block and run the two greps within it.
- **B4. Speaker notes on every content slide.** Every slide block except
  (a) the cover (first block) and (b) `class: section` dividers, if any
  (P1 reword: the pinned format has none) contains an
  HTML comment whose stripped content has ≥ 10 words. Script:
  split into slide blocks per the Conventions definition; for each block,
  if not first and not containing `class: section`, then
  `re.search(r'<!--(.*?)-->', block, re.S)` must match and
  `len(re.sub(r'[^A-Za-z0-9]+', ' ', m.group(1)).split()) >= 10`.
- **B5. No placeholder text.**
  `grep -nE 'STUB|Replace me|TBD|TODO|FIXME|Lorem|XXX' slides/slides.md`
  exits 1 (zero matches).
- **B6. Per-slide body cap + visual floor (overflow proxy).** Visible text
  per slide: content slides ≤ 110 words (target ~70), `class: section`
  dividers ≤ 20 words (cover exempt). 110 = the vendored reference deck's
  own maximum (105 — measured 2026-09-16, re-derived in the audit) +
  headroom. **Fenced code content counts as visible text** (P4):
  `../loop.sh` = 34 and `../eval.sh` = 48 word-regex tokens (measured
  2026-09-16); both fit one slide within the cap — script allocation is
  Phase 3's choice within B1/B6. **Visual floor (human directive
  2026-09-17):** every content slide (non-cover, non-divider) contains
  ≥ 1 structural visual element — `cardrow` | `callout` | `stat` |
  `<table` | `class="pill"` | fenced code block | image — checked per
  slide block. (Reference measured 2026-09-17: mean 71, max 105 words;
  22/26 slides carry ≥ 1 element; this contract makes it 100% of content
  slides.) Script: as measured — strip frontmatter blocks, HTML comments,
  HTML tags; word regex `[A-Za-z0-9][A-Za-z0-9'’.,%/-]*`.
- **B7. Takeaway + product naming.**
  `grep -ci 'state on disk, roles separated, contract before code' slides/slides.md`
  ≥ 1 (the pinned takeaway, restated verbatim); `grep -c 'Quick Shutter'` ≥ 1;
  `grep -icE 'quickshutter|quick-shutter'` = 0 (one canonical spelling).
- **B8. F7 human-pinned phrases.** `grep -c 'dependency topology' slides/slides.md`
  ≥ 1 AND `grep -c 'graph-based reasoning' slides/slides.md` ≥ 1 (the
  human-pinned 2026-09-16 framing for when loops fail).
- **B9. Meta-reveal.** `grep -c 'sharing_slides' slides/slides.md` ≥ 1 AND
  `grep -cE 'this deck was (built|produced) by' slides/slides.md` ≥ 1 (F8:
  the reveal points at its own state layer on disk).
- **B10. F2 why-loops terminology (P6, round 2; human-pinned 1b points,
  outline.md F2 b/c).** `grep -ci 'separation of concerns' slides/slides.md`
  ≥ 1 AND `grep -ci 'agile' slides/slides.md` ≥ 1 AND
  `grep -ci 'orchestration' slides/slides.md` ≥ 1.
- **B11. F3 role/model attribution (P6, round 2).**
  `grep -c 'GLM-5\.2' slides/slides.md` ≥ 1 AND
  `grep -cE '\bK3\b' slides/slides.md` ≥ 1 — the QS loop's actual models.
  QS: `grep -n 'GLM-5.2' ../PLAN.md` (line 3: "Kimi K3 … + GLM-5.2 (code
  evaluator)"). Note: `GLM-5\.2` does not match this deck's own GLM-5.3
  generator (outline F8), so both attributions coexist without collision.

### C. Fact pinning (shape 3)

Every QS fact the deck quotes is pinned here with value + QS path + grep
pattern. The deck may quote a subset per slide, but whatever it quotes must
match these values; each check extracts the deck's own numbers and compares.

- **C1. Feature count.** `grep -oE '[0-9]+ features' slides/slides.md`
  yields only `10 features` AND ≥ 1 match (presence — the exhibit must
  quote it; a fact pin is not satisfiable by silence. Ratified 2026-09-17).
  QS re-derivation:
  `python3 -c "import json; print(len(json.load(open('../feature_list.json'))))"`
  → 10 (F1–F10, all done).
- **C2. QS assertion count.**
  `grep -oE '[0-9]+ (mechanical )?assertions' slides/slides.md` — every
  match's number is 30 AND ≥ 1 match (presence — the exhibit must quote
  it. Ratified 2026-09-17). QS re-derivation:
  `grep -oE '^- \*\*[A-D][0-9]+\.' ../contract.md | sort -u | wc -l` → 30;
  cross-check `grep -m1 '^Status:' ../contract.md` contains `30 assertions`.
- **C3. Honest-cost stats (F6).** For each family, every number the deck
  shows equals the pinned value AND each family has ≥ 1 match (the cost
  slide quotes all nine — presence; ratified 2026-09-17):
  | Deck regex | Pinned value | QS re-derivation (from `sharing_slides/`) |
  |-|-|-|
  | `[0-9]+M tokens` | 269M | `grep -n '269M total' ../research/postmortem.md` |
  | `[0-9]+ sessions` | 31 | `grep -n '31 kimi sessions' ../research/postmortem.md` |
  | `[0-9]+ generator iterations` | 13 | `grep -n '13 generator iterations' ../research/postmortem.md` |
  | `[0-9]+ commits` | 50 | `git -C .. log --oneline --since='2026-08-04T00:00:00' --until='2026-08-11T23:59:59' \| wc -l` → 50 (explicit timestamps — date-only form drifts with the clock; amendment ratified 2026-09-17) |
  | `[0-9]+\.[0-9] days` | 7.2 | `grep -n '7.2 days' ../research/postmortem.md` |
  | `[0-9,]+ LOC` | 1,034 | `grep -n ': 1,034' ../research/postmortem.md` (wc -l verified; see Negotiation flag 2) |
  | `[0-9]+ quota` | 2 | `grep -n '2 died on K3 quota' ../research/postmortem.md` |
  | `[0-9]+ wedge[ds]?` | 1 | `grep -n '1 wedged' ../research/postmortem.md` |
  | `[0-9]+ no-op` | 1 | `grep -n '1 no-op misread' ../research/postmortem.md` |
  Phrase pins: `kernel panic` and `keychain` each ≥ 1 in the deck;
  QS: `grep -n 'kernel panic' ../research/postmortem.md`.
- **C4. OCR pivot numbers (F5).** All four real-capture Vision scores
  appear, or none do (no partial quoting; word boundaries per P3):
  `grep -oE '\b(806|829|833|811)\b' slides/slides.md | sort -u` is either
  empty or exactly those four; the fixture row is quoted as four 35s:
  `grep -cE '35 ?/ ?35 ?/ ?35 ?/ ?35' slides/slides.md` ≥ 1; and
  `grep -c 'iOS 26.6' slides/slides.md` ≥ 1. QS:
  `grep -n '806/829/833/811' ../research/postmortem.md` and
  `grep -n '35/35/35/35' ../research/postmortem.md` (both on the §1 line).
- **C5. Iter-11b story (F5).** `grep -c '11b' slides/slides.md` ≥ 1. QS:
  `grep -n 'iter 11b' ../research/postmortem.md` (§3 heading; DONE written
  past an open BLOCKER).
- **C6. QS-C7 amendment story (F5).** `grep -c 'C7' slides/slides.md` ≥ 1.
  QS: `grep -n 'TCC denial' ../research/postmortem.md` (§2 — PhotoKit
  ignores Photos TCC denial on the simulator) and
  `grep -n 'amendment proposal — C7' ../contract.md` (the signed
  mini-negotiation).
- **C7. Pre-code catches (F4).** `grep -c 'S1' slides/slides.md` ≥ 1,
  `grep -c 'S5' slides/slides.md` ≥ 1, `grep -c 'S20' slides/slides.md` ≥ 1,
  and `grep -c 'assertEnabled' slides/slides.md` ≥ 1. QS:
  `grep -n "S1 Jest can't call native modules" ../contract.md`;
  `grep -n 'S5 — "enabled"/"disabled"' ../contract.md`;
  `grep -n 'S20 — NEW' ../contract.md` (0 absorbing under multiplication).
- **C8. loop.sh + eval.sh verbatim (F3).** Both scripts appear in
  `slides/slides.md` verbatim (fenced code blocks): after stripping trailing
  whitespace per line, the full contents of `../loop.sh` and `../eval.sh`
  are each a substring of `slides/slides.md`. Check via python substring
  test; diff on failure.
- **C9. Timeline + honesty caveat.** `grep -c '2026-08-04' slides/slides.md`
  ≥ 1 AND `grep -c '2026-08-11' slides/slides.md` ≥ 1 (the pinned commit
  window); `grep -cE 'planner-reported|unauditable' slides/slides.md` ≥ 1
  (the token total is planner-reported and cannot be reconstructed from the
  repo — postmortem §8 — and the cost slide says so). QS:
  `grep -n '2026-08-04 → 2026-08-11' ../research/postmortem.md`;
  `grep -n 'not verifiable from the repo' ../research/postmortem.md`.

### D. Visual review (shape 4)

- **D1. Visual gate before sign-off (P5 rewrite, round 2).** Mechanical
  parts: (a) rubric.md's `## Threshold` section contains a numeric
  threshold > 0 (set at Phase 1.4 calibration — human gate, currently
  pending); (b) `exports/visual-scores.md` exists and carries exactly one
  entry per slide (entry count == B1's slide count); (c) every entry
  matches the pinned shape — a header line starting `### `, then the four
  axis scores as fields `Content:`, `Design:`, `Craft:`, `Originality:`
  (each a float 0–1), a `Total:` equal to the rubric-weighted sum
  0.4·Content + 0.3·Design + 0.2·Craft + 0.1·Originality within ±0.01,
  and a `Gap:` line — mirroring QS D1's mechanical parts (pinned capture,
  weighted arithmetic, threshold comparison); (d) every `Total:` ≥ the
  threshold. Scoring itself is K3 judgment against rubric.md — that
  judgment is the point of shape 4; the assertion pins its bookkeeping and
  arithmetic.

## Negotiation

_(see below — newest last)_

### [2026-09-16] generator round 1

Initial proposal: 22 assertions across the four PLAN shapes (A×3 build,
B×9 content, C×9 fact pins, D×1 visual) — inside the 15–25 band. All
checks are commands a script decides; none require taste. Per-assertion
rationale:

- **A1–A3:** PLAN shape 1 verbatim (build, export:png) plus export:pdf,
  justified by outline.md's pinned delivery (live + static + PDF; live is
  a dev server, not assertable — noted, not asserted). A1 verified green
  against the stub today (exit 0).
- **B1:** slide-count band via the exported PNG count (Slidev is the
  oracle; hand-counting `---` separators is fragile — frontmatter blocks
  also use `---`). Band 15–20 from outline Constraints; exceeding it is an
  amendment, honoring "content wins".
- **B2:** eight section dividers matching outline F1–F8, order pinned —
  gives the evaluator a structural check that survives rewording inside
  sections. Titles are my proposal; attack the wording freely, the check
  is the list-match.
- **B3:** cover title + pill pin is a smoke test that the stub's format
  conventions survive Phase 3 (frontmatter title feeds PDF metadata too).
- **B4:** generator prompt requires speaker notes a human can present
  from; ≥ 10 words excludes token notes. Cover/dividers exempt (nothing
  to say there).
- **B5:** placeholder grep including the stub's own markers ("STUB",
  "Replace me") so the stub cannot leak into the final deck.
- **B6:** word cap 110 = reference deck's measured max (105) + headroom;
  dividers ≤ 20. Text discipline per generator prompt: split, never
  shrink.
- **B7:** pinned takeaway must appear verbatim (it is THE takeaway);
  canonical "Quick Shutter" spelling.
- **B8:** the two human-pinned F7 phrases, verbatim.
- **B9:** F8 meta-reveal must point at the actual state directory
  (`sharing_slides`) — a claim the audience can verify.
- **C1–C9:** every QS number/claim the deck quotes, pinned to value +
  path + grep, all re-derived by me today (not copied from outline):

  **Flags for the planner — three outline numbers did not re-derive:**

  1. **Path off-by-one.** The generator/evaluator prompts and outline say
     QS = `../../`. From `sharing_slides/` that resolves to `projects/`
     (wrong); QS is `../`. Conventions section pins `QS = ../` from
     `sharing_slides/`. Confirm, or fix the prompt texts.
  2. **LOC: outline F6 says "~1,042 LOC" — wrong per the repo's own
     postmortem.** `research/postmortem.md` line 8: "LOC (verified by
     `wc -l` …): 1,034 … (Planner's 1,042 likely adds index.ts/config.)".
     The 1,042 in `prompts/postmortem.md` is the planner's pre-verification
     estimate. Contract pins **1,034**. (Current HEAD is higher — F9/F10
     landed after the postmortem — but the cost stats are a matched window
     2026-08-04→11, so the LOC pin uses the same window.)
  3. **"Built unattended overnight" (outline F1, deck concept) is not
     derivable from QS.** No overnight/unattended run claim exists in
     QS log.md; the verified timeline is 50 commits over 7.2 *part-time*
     days with human gates. Proposal: the F1 exhibit slide pins 10
     features / 30 assertions / 50 commits / 7.2 days / 2026-08-04→11 and
     does NOT claim overnight construction; "while you sleep" survives
     only as the cover subtitle (rhetorical framing, not a cited fact).
     Human may override — it is their phrase.

  Also noted: outline F4 says QS had "20–30 mechanical assertions" — that
  was the negotiation *target*; the locked contract has 30 (status header,
  re-derived). Deck will say 30. No conflict, recording for hygiene.

- **D1:** shape-4 threshold does not exist yet (rubric.md calibration set
  is TBD pending Phase 1.4 — human gate). D1 asserts the bookkeeping
  (threshold present + one score per slide + all ≥ threshold) so Phase 4
  has a mechanical gate around the judgment, without inventing the number
  now.

Environment note: npm install blocker resolved (434 packages; build exit 0
on the stub — recorded in progress.md). A1/A2/A3 are runnable today.

### [2026-09-16] planner round 1

Verified the proposal against the repo and the environment — not the summary.
Evidence run this session (planner-run, from `sharing_slides/`):

- All C-section grep pins re-run: postmortem.md pins (269M total, 31 sessions,
  13 iterations, 7.2 days, quota/wedge/no-op, kernel panic, 806/829/833/811,
  35/35/35/35, iter 11b, TCC denial, not-verifiable, commit window) — all 14
  present. contract.md pins (S1, S5, S20, C7 amendment) — all 4 present.
- Assertion-count re-derivation:
  `grep -oE '^- \*\*[A-D][0-9]+\.' ../contract.md | sort -u | wc -l` → **30** ✓
- Commit window: `git -C .. log --oneline --since=2026-08-04
  --until=2026-08-12 | wc -l` → **50** ✓
- LOC flag confirmed: postmortem.md line 8 reads "1,034 … (Planner's 1,042
  likely adds index.ts/config.)" — pin **1,034** stands.
- Build checks run by me: `npm run build` exit 0 (940ms); `npm run
  export:png` exit 0 (3 PNGs from the stub). A1/A2 green today; A3 not run
  here (evaluator audit owns the dry-run).
- Format check on the vendored reference: `grep -c 'class: section'
  research/evals101-reference/slides.md` → **0**; `grep -c 'class="kicker"'`
  → **26**. The pinned format carries section identity in kickers, not
  dividers.

#### Generator flags — planner rulings

1. **QS path off-by-one — CONFIRMED, accepted.** Prompts said `../../` from
   `sharing_slides/`; correct is `../`. Conventions pin `QS = ../`; I am
   fixing both prompt files' path wording (planner maintenance, not a
   contract edit).
2. **LOC 1,034 — CONFIRMED, accepted.** Pin 1,034 with the matched-window
   rationale. outline.md F6's "~1,042" is approximate and stays; the deck
   quotes 1,034.
3. **"Built unattended overnight" — ruling: accept the split.** No factual
   overnight/unattended claim on the exhibit slide (the repo doesn't carry
   one — F6's honesty theme forbids borrowing it); "while you sleep" survives
   as rhetorical cover framing only (it is the methodology article's framing
   and B3's title pin). The phrase is the human's — final say at ratification;
   planner recommendation is this split.
4. "30 assertions" hygiene note — correct, acknowledged.

#### P1 — B2 contradicts B1's band AND deviates from the pinned format — AMEND

Two independent problems: (a) eight `class: section` dividers + cover + 20
content slides = 29 slides > B1's [15,20] band; the outline's 20-slide budget
already includes the cover. (b) The human-pinned reference deck uses **zero**
section dividers (evidence above) — kickers carry section identity. B2 as
written forces a format deviation AND a band violation.

Fix: drop dividers. B2 rewritten to pin the eight **kicker labels** in file
order: extract `class="kicker">LABEL` from each slide in order, dedupe
consecutive repeats, compare to the pinned list (The exhibit / Why loops /
Anatomy of a loop / The contract / War stories / The honest cost / When loops
fail / The loop built this deck). Same structural check, zero slide cost,
format-faithful. B4's exemption (b) rewords to "dividers, if any".

#### P2 — Self-reference collisions in C1/C2/C3 — AMEND (add Convention)

F8/B9 require the deck to describe ITSELF — but C1's `[0-9]+ features` (10),
C2's `[0-9]+ (mechanical )?assertions` (30), C3's `[0-9]+ commits` (50) /
`sessions` (31) / `[0-9]+M tokens` (269M) fire on ANY numeric use of those
words. "This deck's contract holds 22 assertions" would fail C2. Fix: add a
Convention — **reserved vocabulary**: in numeric phrases, `features`,
`assertions`, `commits`, `sessions`, `tokens` always mean Quick Shutter; this
deck's self-references use `sections`, `checks`, `slides`, `runs` with
numbers, never the reserved words. C1–C3 then stand mechanically.

#### P3 — C4's OCR-score scan can false-positive — AMEND

`grep -oE '806|829|833|811'` fires on unrelated strings (`1,806`, years,
values). Fix: word-boundary the scan — `grep -oE '\b(806|829|833|811)\b'` —
all-or-nothing logic unchanged. (Residual: `1,806` still matches after the
comma; accepted — the generator avoids the digits outside the OCR story.)

#### P4 — B6 must pin whether fenced code counts — AMEND

C8 puts loop.sh + eval.sh verbatim on a slide (~60–70 word-regex tokens);
whether that spends the 110 budget changes how the generator writes F3. The
cap is an overflow proxy; code occupies slide space. Pin: **fenced code
content counts as visible text.** The scripts slide is budgeted accordingly
(F3 has 4 slides; the scripts get their own).

#### P5 — D1 evidence format under-pinned vs the QS precedent — AMEND

QS D1 (../contract.md) requires per-axis scores + weighted total + a gap
paragraph per screen in the evidence file. D1(b) pins only count + threshold.
Fix: each slide entry in `exports/visual-scores.md` carries the four axis
scores, the weighted total, and a gap line — pinned as a mechanical entry
structure (regex on the entry shape). Scoring stays K3 judgment; the
bookkeeping matches the QS evidence format.

#### P6 — Coverage gaps: F2 and F3 have no content pin; no asset check — 3 NEW

Every F-section needs ≥1 assertion (shape coverage rule). Demand:

- **B10 (F2).** `grep -ci 'separation of concerns' slides/slides.md` ≥ 1 AND
  `grep -ci 'agile'` ≥ 1 AND `grep -ci 'orchestration'` ≥ 1 — the
  human-pinned 1b points (2026-09-16).
- **B11 (F3).** `grep -c 'GLM-5\.2' slides/slides.md` ≥ 1 AND
  `grep -cE '\bK3\b'` ≥ 1 — the roles slide names the actual models (honest
  attribution; feeds F8's meta).
- **A4.** Asset integrity: every local image/asset referenced in
  `slides/slides.md` (`![…](path)`, `src="path"`) exists on disk. Zero
  references passes trivially today; future-proofs the build if assets land.

Count: 22 + 3 = 25 — band ceiling, inside. Any future demand requires a
merge/kill tradeoff; state it when it comes.

#### P7 — B6's cap basis must be re-derived by the evaluator audit — NOTE

The 110 cap rests on "reference deck max = 105, measured 2026-09-16." The
Phase 2 mechanical audit (evaluator prompt) must re-derive 105 from
`research/evals101-reference/slides.md` using B6's exact stripping definition
and report the number it gets. Explicitly on the record so it isn't skipped.

#### Per-assertion verdicts

- A1 — ACCEPT (planner-verified green today).
- A2 — ACCEPT (planner-verified green today).
- A3 — ACCEPT (audit owns dry-run).
- A4 — NEW (P6).
- B1 — ACCEPT.
- B2 — AMEND (P1: kickers, not dividers).
- B3 — ACCEPT (title is rhetorical framing per flag-3 ruling; human confirms
  at ratification).
- B4 — ACCEPT (exemption reword per P1).
- B5 — ACCEPT.
- B6 — AMEND (P4: fenced code counts; P7 audit note).
- B7 — ACCEPT.
- B8 — ACCEPT.
- B9 — ACCEPT.
- B10 — NEW (P6).
- B11 — NEW (P6).
- C1 — AMEND (P2 convention; body unchanged).
- C2 — AMEND (P2 convention; body unchanged).
- C3 — AMEND (P2 convention; body unchanged).
- C4 — AMEND (P3: word boundaries).
- C5 — ACCEPT.
- C6 — ACCEPT.
- C7 — ACCEPT.
- C8 — ACCEPT (self-healing: reads the scripts from disk; already absorbed
  today's model repin).
- C9 — ACCEPT.
- D1 — AMEND (P5: QS-format evidence bookkeeping).

Count if all land: 25 (A1–A4, B1–B11, C1–C9, D1) — band ceiling, inside.
If the generator accepts P1–P6 with the conventions recorded, this contract
is one round from signable.

Verdict: NEEDS-REVISION

### [2026-09-16] generator round 2

Re-verified every planner claim against the repo before accepting — none
required pushback on substance. One arithmetic correction and one prompt
maintenance flag, below. Amendments applied to ## Assertions; count 25 =
band ceiling.

- **P1 (kickers, not dividers) — ACCEPTED.** Independently re-measured the
  reference: `grep -c 'class: section'` → 0, `grep -c 'class="kicker"'` →
  26, on 26 slides (27 `^---$` = N+1) — every slide, cover included,
  carries exactly one kicker; the cover's is free-form ("A practical guide
  · Team briefing"). B2 rewritten accordingly, with two additions the
  planner's sketch left open: (i) exactly one kicker per slide block is
  itself asserted (format-faithful: 26/26), (ii) the cover's kicker is
  exempt from the list comparison (free-form there too). Arithmetic nit,
  conclusion unchanged: the outline's 20-slide budget includes the cover
  (F1 = "2 slides. Cover; exhibit"), so dividers would have produced 28
  slides, not 29 — either way over B1's band. Maintenance flag for the
  planner (their files, not contract): `prompts/generator.md` still lists
  "`class: section` dividers" among the reference conventions — same class
  of fix as the round-1 path correction.
- **P2 (reserved vocabulary) — ACCEPTED.** Recorded as a Convention. New
  evidence closing the one hole the planner's fix left: C8 embeds QS
  `../loop.sh` + `../eval.sh` verbatim, so if those scripts contained a
  reserved numeric phrase, C1–C3 would misfire through the quote. They do
  not — `grep -nE '[0-9]+ (features|assertions|commits|sessions|tokens)'`
  `../loop.sh ../eval.sh` exits 1 (re-run 2026-09-16). Convention notes
  this, so the evaluator checks it stays true.
- **P3 (word boundaries in C4) — ACCEPTED.** C4 now scans
  `\b(806|829|833|811)\b`; the planner's accepted residual (`1,806` after
  a comma) is noted there.
- **P4 (fenced code counts toward B6) — ACCEPTED, with measurements.**
  Under B6's word regex, `../loop.sh` = 34 tokens and `../eval.sh` = 48
  (measured 2026-09-16). Each script alone on its slide lands ~40–60
  visible words — comfortably under 110. No C8×B6 contradiction; F3's
  budget gives the scripts one slide each, as the planner proposed.
- **P5 (QS-format evidence in D1) — ACCEPTED, sharpened.** Read QS D1
  (../contract.md §D): its mechanical parts are pinned capture, weighted
  arithmetic, threshold comparison, with per-axis scores + total + gap
  paragraph per screen. Our rubric.md axes differ in name (Content 0.4 /
  Design 0.3 / Craft 0.2 / Originality 0.1) but the shape carries over:
  D1 now pins the entry grammar (`### ` header + `Content:`/`Design:`/
  `Craft:`/`Originality:` floats + `Total:` + `Gap:`) AND adds the
  weighted-arithmetic check (Total == 0.4C+0.3D+0.2Cr+0.1O ± 0.01) — the
  planner's draft pinned only the fields' presence; the arithmetic check
  is what makes it QS-faithful.
- **P6 (A4 + B10 + B11) — ACCEPTED.** Verified: outline F2(b) carries
  "agile principles" and "orchestration frameworks", F2(c) "separation of
  concerns" (B10 greps are the outline's own words); `../PLAN.md` line 3:
  "Kimi K3 (planner / generator / visual evaluator) + GLM-5.2 (code
  evaluator)" (B11 pin re-derived). A4 scoped to local paths only
  (`http(s)://`, `data:` skipped) so remote references stay a human-gate
  violation rather than a false mechanical failure.
- **P7 (audit re-derives the 105 cap basis) — ACKNOWLEDGED.** Folded a
  pointer into B6 so the duty lives in the assertion body, not only in
  this negotiation log.
- **Count: 25** (A1–A4, B1–B11, C1–C9, D1) — band ceiling. Planner's rule
  adopted as standing: any future demand requires a merge/kill tradeoff,
  stated when it comes.
- **Self-correction found by dry-running my own B2 check** against the
  vendored reference deck: the naive `split on ^---$` keeps the frontmatter
  as a pseudo-block (27 non-empty blocks for 26 slides), so B2's
  one-kicker-per-block would fail, B4's "first block" exemption would
  exempt the frontmatter instead of the cover, and B3's round-1
  `sed -n '1,/^---$/p'` range grepped the frontmatter — never the cover
  body — for the pill. Fixed mechanically (requirements unchanged): new
  Conventions entry pins the slide-block split (strip frontmatter first,
  slide 1 = cover); B2/B3/B4 rewritten to use it. Re-validated against the
  reference with the corrected split: 26 blocks, one kicker each (26/26).

No changes to A1–A3, B1, B3, B4 (exemption reword only), B5, B7–B9,
C1–C3 (convention only), C5–C9. Planner rulings 1–3 on my round-1 flags
are acknowledged; the overnight-claim split (ruling 3) stands for human
ratification at lock.

### [2026-09-16] planner round 2

Verified the round-2 claims against the assertion text AND the artifacts —
not the summary. Evidence run this session (planner-run, from
`sharing_slides/`):

- **Slide-block convention validated** on the vendored reference: naive
  `^---$` split → 27 non-empty blocks; frontmatter-removed split → **26
  blocks**, and per-block kicker counts are **1 on all 26** — the
  self-correction's dry-run numbers reproduce exactly.
- **105 re-derived (P7).** Ran B6's exact stripping definition (frontmatter
  removed, HTML comments + tags stripped, word regex
  `[A-Za-z0-9][A-Za-z0-9'’.,%/-]*`, fenced code counted) over the reference
  deck: per-slide max = **105**. The cap basis is sound; the evaluator
  audit's derivation will be the third.
- **Script token counts verified.** `../loop.sh` = 34, `../eval.sh` = 48
  word-regex tokens — as B6 records.
- **Reserved-vocabulary hole-check verified.**
  `grep -nE '[0-9]+ (features|assertions|commits|sessions|tokens)'`
  `../loop.sh ../eval.sh` exits 1 — C8's verbatim quotes cannot misfire
  C1–C3.
- **B11 pin re-derived.** `../PLAN.md` line 3: "Kimi K3 … + GLM-5.2 (code
  evaluator)" ✓. `GLM-5\.2` cannot match GLM-5.3 — both attributions
  coexist.
- **B10 wording check.** outline.md carries "agile" (×1), "orchestration"
  (×2), and "separation of concerns" (×1 — **soft-wrapped across a source
  line**, so single-line grep scores 0 there). See noted edit 2.

#### Application check (P1–P7): all applied, two sharpenings accepted

- P1 kickers: applied, and sharpened — one-kicker-per-slide is itself
  asserted (26/26 measured), cover kicker free-form. ACCEPT.
- P2 reserved vocabulary: applied as Convention, with the C8 hole-check I
  missed (scripts embed verbatim — had they contained a reserved phrase,
  C1–C3 would misfire through the quote). ACCEPT.
- P3/P4: applied; measurements verified above. ACCEPT.
- P5: applied and sharpened — D1 pins the entry grammar AND the weighted
  arithmetic (±0.01), which is what makes it QS-D1-faithful. ACCEPT.
- P6: applied; A4 correctly scopes remote refs out (they stay a human-gate
  violation, not a false mechanical failure). ACCEPT.
- P7: folded into B6's body. ACCEPT.
- Self-correction (slide-block split): validated above; requirements
  unchanged, mechanics fixed. ACCEPT.
- Arithmetic correction accepted: dividers would have produced 28 slides,
  not my claimed 29 — I double-counted the cover; the generator is right.
- Maintenance flag (its files, not contract): `class: section` mentions
  removed from prompts/generator.md and research/evals101-reference/README.md
  this session.

#### Two noted edits for ratification (one line each, human-gated at lock)

1. **B6's "(C8's scripts get one slide each)"** is a slide-allocation
   mandate the contract should not make — allocation is Phase 3's freedom
   within B1/B6 (F3's outline budget is 4 slides; both scripts on one slide
   ≈ 94–99 visible words, inside the cap). Strike to: "(both scripts fit
   one slide within the cap; allocation is Phase 3's choice within B1/B6)".
2. **Conventions should state the single-line rule for phrase pins.** All
   phrase greps (B7–B11, C5–C7, C9) run against slides.md **source**; a
   markdown soft-wrap inside a pinned phrase defeats the grep (observed:
   outline.md wraps "separation of concerns"). Add one Conventions line:
   "Phrase greps match single source lines — pinned phrases must appear on
   one line in slides.md."

Neither changes an assertion's meaning; both are recorded here so the human
ratifies them knowingly. Verdict counts: 25 assertions (A1–A4, B1–B11,
C1–C9, D1) — band ceiling, inside.

Verdict: ACCEPTED

### [2026-09-16] evaluator mechanical audit

Dry-ran all 25 checks this session from `sharing_slides/` (build commands
in `slides/`). Environment: python3 3.9.6, node v26.5.0, npm 11.17.0;
macOS BSD grep — `\b` under `-E` verified working (B11 depends on it).
No assertion text edited. Stub failures below are pre-build expected,
not verdicts about the checks.

**A — one substantive finding (A2/A3 run-directory ambiguity), rest clean.**

- A1 RUNNABLE — `npm run build` in `slides/` exit 0 (built in 1.02s).
- A2/A3 RUNNABLE, **flagged**: `npm run export:png` and `npm run
  export:pdf` exit 0; but the scripts write `../exports/…` relative to
  `slides/`, i.e. `sharing_slides/exports/` (3 PNGs;
  loop-engineering.pdf 94,595 bytes — both `test -s` and `wc -l` pass
  from `sharing_slides/`). Run from `slides/` per the build-check
  convention, the "afterwards" checks fail after a successful export:
  `ls exports/png/*.png | wc -l` → "No such file or directory", 0;
  `test -s exports/loop-engineering.pdf` → exit 1. The assertion text
  under-pins the post-export run directory; one word at ratification
  ("afterwards, from `sharing_slides/`") closes it. B1's identical `ls`
  already runs from `sharing_slides/` (content check, default dir).
- A4 RUNNABLE — extraction script ran: 0 refs, 0 local → trivially true
  today; `http(s)://`/`data:` scoping executable.

**B — mechanics validated on stub AND vendored reference.**

- B1 RUNNABLE — 3 PNGs today (stub; outside [15,20] pre-build — the
  command decides, band check executable).
- B2/B3/B4 RUNNABLE — block-split + regex scripts executed on both
  decks. Reference: 26 blocks, exactly one kicker per block (26/26),
  zero `class: section`; naive `^---$` split yields 27 (frontmatter
  pseudo-block) — the round-2 self-correction reproduces exactly.
  Stub: 4 blocks; B2 correctly fails (a `class: section` per-slide
  frontmatter block yields a bodyless 0-kicker pseudo-block — measured
  caveat: B2/B4's split cannot absorb per-slide frontmatter; the pinned
  reference format carries none (27 `^---$` = N+1 for 26 slides), so the
  deck must not introduce any). B3: `grep -m1 '^title:'` matches the pin
  already on the stub; cover block carries 4 `class="pill"`. B4 passes
  on the stub (18/25-word notes on the two non-exempt blocks).
  Measurement recorded for the planner's lane: the reference deck itself
  would fail B4 (0-word notes on 18 of 25 non-cover slides) — B4 is
  stricter than the format reference; no comment on whether it should be.
- B5 RUNNABLE — grep executes; matches the stub's own STUB/"Replace me"
  markers (exit 0 = fail) — correct tripwire behavior pre-build.
- B6 RUNNABLE — **P7 discharged (third derivation)**: exact stripping
  definition (frontmatter removed, HTML comments + tags stripped, fenced
  code counted, word regex `[A-Za-z0-9][A-Za-z0-9'’.,%/-]*`) over
  `research/evals101-reference/slides.md` → per-slide max = **105**
  (block 25, "Appendix · Citations"). Cap basis confirmed. Also
  re-derived: `../loop.sh` = 34, `../eval.sh` = 48 tokens (third time).
  Stub max 32 — under cap.
- B7–B11 RUNNABLE — all greps execute; stub counts B7 0/2/0, B8 0/0,
  B9 0/0, B10 0/0/0, B11 0/0 (pre-build zeros expected). Platform check
  for B11: `printf 'K3 planner\nK30 x\n' | grep -cE '\bK3\b'` → 1
  (matches K3, not K30) — BSD grep handles `\b` here.

**C — every QS pin re-run green from `sharing_slides/` against `../`.
No STALE-PINs.**

- C1 RUNNABLE — QS: `len(json.load('../feature_list.json'))` → **10**.
- C2 RUNNABLE — QS: `grep -oE '^- \*\*[A-D][0-9]+\.' ../contract.md |
  sort -u | wc -l` → **30**; `^Status:` header contains `30 assertions`.
- C3 RUNNABLE — QS pins all green: 269M total (postmortem.md:10), 31
  kimi sessions (:10), 13 generator iterations (:11), 7.2 days (:9),
  `: 1,034` (:8), 2 died on K3 quota (:11), 1 wedged (:11), 1 no-op
  misread (:11), kernel panic (:12), keychain (:12 — "keychain ACL
  storm", planner-reported per §6; derivable). `git -C .. log --oneline
  --since=2026-08-04 --until=2026-08-12 | wc -l` → **50**.
- C4 RUNNABLE — QS: `806/829/833/811` and `35/35/35/35` both hit
  postmortem.md:16 (§1). Word-boundary scan executable.
- C5 RUNNABLE — QS: `iter 11b` :11 and §3 heading :26.
- C6 RUNNABLE — QS: `TCC denial` :22; `amendment proposal — C7`
  ../contract.md:423 (em-dash literal greps fine).
- C7 RUNNABLE — QS: S1 :199, S5 :257, S20 :1642; `assertEnabled` ×2 in
  ../contract.md.
- C8 RUNNABLE — normalization + substring script executes (False on the
  stub — scripts not embedded yet; diff-on-failure path available).
  Reserved-vocabulary hole-check re-run: `grep -nE '[0-9]+
  (features|assertions|commits|sessions|tokens)' ../loop.sh ../eval.sh`
  exits 1.
- C9 RUNNABLE — QS: `2026-08-04 → 2026-08-11` :9 (arrow literal fine);
  `not verifiable from the repo` :10.
- Mechanical note for the human (no edit from me): C1/C2/C3's numeric
  rows are vacuously true at zero matches — "every match's number is X"
  is satisfiable by quoting nothing. C4 handles the empty case
  explicitly (empty-or-all); C1–C3 do not. Whether presence (vs.
  correctness) of the exhibit numbers should be enforced is a
  ratification call.

**D — RUNNABLE, conditional on its own declared human gate.**

- D1: (a) rubric.md `## Threshold` section exists but holds no numeric
  value → fails today by design (Phase 1.4 pending — the assertion's own
  text says so). (b) `exports/visual-scores.md` absent → fails today,
  expected pre-Phase-4. (c) entry-shape + weighted-arithmetic check
  validated on a synthetic entry with an intentionally wrong Total
  (0.87 vs weighted 0.84) — correctly rejected at ±0.01. (d) threshold
  comparison decidable the moment 1.4 lands.

Verdict: RUNNABLE

### [2026-09-17] planner — human-directed amendments (pre-ratification record)

The human reviewed the package and gave three directives plus questions.
Recorded here as the consolidated ratification edit set; the assertion-text
edits apply in one commit at ratification (human gate):

1. Overnight-claim split — pending human confirm (recommended accept).
2. B6 "(C8's scripts get one slide each)" → "(both scripts fit one slide
   within the cap; allocation is Phase 3's choice within B1/B6)".
3. Conventions gain the single-line phrase-pin rule.
4. A2/A3: "afterwards" checks pinned "from `sharing_slides/`" (audit
   finding — post-export run directory was under-pinned).
5. C1–C3 presence clauses (audit finding — vacuous truth at zero matches):
   C1/C2 require ≥1 occurrence each; C3 requires each of the 9 stat
   families ≥ 1. Pending human confirm (planner recommends accept).
6. Conventions: no per-slide frontmatter blocks (audit finding — they
   break the slide-block split; the pinned format carries none).
7. **Visual floor (human directive b).** B6 gains: every content slide
   carries ≥ 1 structural visual element (cardrow / callout / stat /
   table / pill row / fenced code / image), checked per slide block.
   Reference deck measured 2026-09-17: mean 71, median 72, max 105 words;
   22/26 slides (85%) carry ≥ 1 such element — our floor makes it 100% of
   content slides. Cap stays 110, target ~70.
8. **Maintenance slide (human directive e).** B2's kicker list gains a 9th
   label, `Outer loops`, inserted between "When loops fail" and "The loop
   built this deck" — QS PLAN.md Phase 5 outer loops (CI watcher,
   flaky-test patcher, nightly digest, feedback clusterer), honestly noted
   as designed-but-never-needed for QS. B1's band: [15, 20] → **[15, 21]**
   (outline F7 is now 3 slides; total budget 21).
9. **Title (human directive f).** Learning points lead; the app is
   evidence. B3's title pin rewords to the human's confirmed choice —
   planner recommendation: "Loop Engineering — Think in Loops, Not
   Prompts", lede naming Quick Shutter as the case. Pending human confirm.

Also answered for the human, no contract impact: frontmatter explained
(a); "The exhibit" = F1's kicker label (c); evals-in-50-words (d).

### [2026-09-17] human ratification — CONTRACT LOCKED (RESOLVED — negotiation complete)
The human ratified all nine amendments (verbatim decisions): (1) ok with
"while you sleep" as cover rhetoric — the overnight split stands; (2)
accept B6 script-allocation as Phase-3 choice; (3) accept the single-line
phrase-pin convention; (4) accept A2/A3 run-directory pin; (5) accept the
C1–C3 presence clauses — confirmed understanding: every fact the deck
quotes is verified against the repo, and the key facts must appear; (6)
accept the no-per-slide-frontmatter convention; (7) yes to the visual
floor (directive b); (8) ok to the Outer-loops slide + band [15, 21]
(directive e); (9) title "Loop Engineering — Think in Loops, Not Prompts"
with subtitle "State on Disk, Roles Separated, Contract Before Code"
(directive f). All nine applied to ## Assertions / ## Conventions in the
ratification commit. Status: LOCKED. Any further edit to ## Assertions is
a human gate.

### [2026-09-17] amendment 1 (post-lock) — C3 commit-window recipe (human-approved)

Phase 4 eval-pass finding: the date-only `--since/--until` form drifts with
the clock (git appends current time-of-day at both ends; the count can read
49/50/51 — two set errors netting to a coincidental 50). Evaluator verified
the explicit-timestamp form returns 50 with the correct commit set
(f23a257…1bdeb66). Human approved the fix 2026-09-17. Edit: C3's commits
row recipe → `--since='2026-08-04T00:00:00' --until='2026-08-11T23:59:59'`.
Pinned value (50) unchanged; deck content unaffected.

### [2026-09-17] amendment 2 (post-lock) — feedback batch (human-directed)

Human review of the rendered deck directed, among free-text revisions:
(a) cover pills removed (they read as inert buttons) → B3's pill clause
dropped; (b) a recap slide inserted before the closer → B1 band
[15, 21] → [15, 22]; the recap shares the "The loop built this deck"
kicker, so B2's label list is unchanged. Both edits applied this entry.
Everything else in the batch (screenshots on the exhibit slide, script-run
annotations, agreement quotes, slide-4 restructure, slide-17 rewording,
slide-18 title + diagram, recap content) is deck content — generator lane,
no assertion text touched.

### [2026-09-18] amendment 3 (post-lock) — appendix slides (human-directed)

Human directed an appendix carrying verbatim snippets of the key documents
(SPEC/PLAN/contract/prompts) after the closer. Edits: B1 band [15, 22] →
[15, 24]; B2's kicker list gains a 10th label, "Appendix", at the end (the
two appendix slides share it; consecutive dedupe covers them). No assertion
mechanics change. Also in the batch (deck content, no assertion text):
slide-3 speaker note gains the token-savings nuance; slide-22's first-loop
examples become consulting-flavored (nightly RAG ingestion of new client
documents; a watcher keeping an MCP server's contract tests green).
