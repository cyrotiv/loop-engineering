# Voice pass — slide-by-slide proposals (for human review, 2026-09-17)

Prepared by the planner. Style guide: `research/going-in-circles.md`.
**Nothing is applied yet.** Mark up this file ([author: …] notes welcome) or
reply with which slides to apply. On approval the batch goes through the
generator as one iteration, then evaluator re-check + D1 re-score.

## What I heard in your voice (from going-in-circles.md)

1. **Every technical term gets an inline definition at first use** — "an RCT
   (participants assigned by chance)", "a bottleneck (the slowest node…)".
2. **First-person, hedged honesty** — "in my experience", "to be honest",
   "at the risk of sounding obvious", "by no means a novel methodology".
3. **Feelings named, not just facts** — "that familiar dread… the
   roller-coaster plunge".
4. **Concrete numbers in examples** — "1 hour against a 15-minutes target".
5. **Careful epistemics** — candidates vs findings; "consistent with the
   data but not verified".

The deck's current voice is punchier than yours (consultant aphorisms:
"the chrome is the product", "agreement must be earned"). The pass below
moves it toward plainer, first-person, terms-defined — while keeping
slide-appropriate brevity, per your own caveat that slides ≠ prose.

## Constraints the pass must respect (contract pins)

These strings are contract-pinned (single-line, exact): the takeaway
"state on disk, roles separated, contract before code"; "while you sleep";
the nine kicker labels; "Quick Shutter"; "dependency topology";
"graph-based reasoning"; "sharing_slides"; "this deck was produced by";
"separation of concerns"; "agile"; "orchestration"; "GLM-5.2"; "K3"; all
C-section numbers (10 features, 30 assertions, 50 commits, 7.2 days, 269M
tokens, 31 sessions, 13 generator iterations, 1,034 LOC, 2 quota,
1 wedged, 1 no-op, 806/829/833/811, 35/35/35/35, 11b, C7, S1, S5, S20,
assertEnabled, the 2026-08-04/11 dates, "planner-reported"/"unauditable");
loop.sh + eval.sh verbatim. Proposals keep every one intact on one line.

## Per-slide proposals

### Slide 1 — cover — KEEP
Kicker is your own approved wording; lede carries the two pinned phrases.
Your voice is already in it ("while you sleep" is exactly your kind of
plain ambition). No change.

### Slide 2 — The exhibit — TWEAK (2 lines)
- Card 3 body: "Every claim is a command anyone can run." — KEEP (plain
  and it is your thesis).
- Callout: "…— every number on this slide greps back to the repo."
  → "…— every number on this slide **can be checked against the repo
  yourself**." ("greps back" is jargon; your guide defines or avoids it.)
- Mono caption: "simulator previews · test pattern in — the chrome is the
  product" → "simulator previews — the camera shows a test pattern; the
  app around it is what shipped." (drops the aphorism, keeps the honesty).

### Slide 3 — prompt vs loop — TWEAK (1 line)
- Callout: "The efficiency isn't a smarter model. It's never explaining
  the project twice." → "**In my experience,** the saving isn't a smarter
  model — it is never explaining the project twice." (Your signature move:
  first-person evidence over aphorism.)

### Slide 4 — boring on purpose — TWEAK (1 line)
- Callout: "…everything here greps, diffs, and rolls back."
  → "The boringness is the feature: every piece of the harness is a file
  you can **search, compare, and roll back — one person can audit it in
  one sitting**." (Defines-by-doing; the audit line comes from your
  "auditable by one person in one sitting" instinct.)

### Slide 5 — SE mappings — KEEP
"Good ol' software engineering, aimed at the agents." is plain, warm, and
exactly your register. All three pinned mappings intact.

### Slide 6 — state layer — KEEP
Lede is already plain ("a crashed run loses one pass, never the project").
Tree + meta caption fine.

### Slide 7 — roles table — TWEAK (1 word)
- Callout: "…the evaluator sits in a different family, so agreement must
  be earned." → "…sits in a different **model** family, so agreement **has
  to be** earned." (plain form; B11 pins unaffected.)

### Slide 8 — engine, verbatim — KEEP
Code is the content; the when/who captions are plain mono lines.

### Slide 9 — agreements & gates — KEEP
The verbatim quotes do the talking; "The boring bulk runs while nobody
watches; the risky slice asks first." is already your voice.

### Slide 10 — contract mechanics — KEEP
"…never a judgment call" + the locked-30 callout are plain and factual.
Pills are the four shapes. Nothing to gain.

### Slide 11 — S1/S5 catches — TWEAK (1 card body)
- S1 card body: "Fix: test pure functions — pickOrientation(scores),
  computeLayout(sizes) — mock the boundary."
  → "Fix: test pure functions instead, and replace the phone's hardware
  with fakes for the test (mocking). A side effect: the architecture got
  cleaner for free." (Your guide always unpacks the term.)
- S5 card + callout: KEEP ("the harness got patched, not the app" is
  good plain English).

### Slide 12 — S20 — TWEAK (1 parenthetical)
- "Under multiplication, 0 is absorbing." → "Under multiplication, 0 is
  absorbing — zero times anything is zero." (The one-line definition your
  style insists on; the rest of the slide is strong as-is.)

### Slide 13 — OCR pivot — TWEAK (2 lines)
- "…and took the argmax" → "…and picked the highest score (the argmax)".
- Callout: "…with a negative control, on hardware." → "…with a negative
  control (a case that should **not** detect the signal), on hardware."
  (Same first-use-definition move. Pinned probe numbers untouched.)

### Slide 14 — iter 11b — KEEP
"Did the polite thing and stopped" is already you.

### Slide 15 — C7 — TWEAK (1 parenthetical)
- "sets the TCC flag" → "sets the privacy flag (TCC — the database iOS
  keeps permissions in)". Callout KEEP.

### Slide 16 — honest cost — KEEP
"planner-reported, unauditable from the repo" is literally your
candidates-not-findings epistemics. The strongest voice-match in the deck.

### Slide 17 — where loops earn their keep — KEEP
The quick-test callout is your own rewording; pinned phrase in place.

### Slide 18 — one token at a time — KEEP
"locally sane, globally blind" is punchy but plain; "no exit code checks
it" is fine. The notes carry the full argument.

### Slide 19 — outer loops — KEEP
Plain already; "designed, never needed" is your kind of honesty.

### Slide 20 — the reveal — KEEP
Pinned reveal phrase, plain stat block, "Audit us" line is your
epistemics. No change.

### Slide 21 — recap — KEEP
Five take-aways, terse by design; each earned a slide earlier.

### Slide 22 — closer — KEEP
Plain, the link, the takeaway verbatim.

## Summary

KEEP 12 · TWEAK 8 (all one-or-two-line edits) · REWRITE 0. The deck is
closer to your voice than a first pass usually is — the gaps are jargon
terms used before definition (greps, argmax, TCC, mock, absorbing) and a
few aphorisms where your guide would rather explain. Speaker notes already
read like your working style (plain, first-person); where a slide line
changes above, the matching "Say:" line in the notes follows it.
