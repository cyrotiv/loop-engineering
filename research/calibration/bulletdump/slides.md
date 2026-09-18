---
theme: default
title: 'Loop Engineering'
subtitle: 'Think in loops, not prompts — the Quick Shutter case study'
author: 'Platform Engineering Practice'
keywords: 'agents, vibe coding, iOS, loop engineering, case study'
transition: slide-left
mdc: true
---

# Loop Engineering

- Think in loops, not prompts — state on disk, roles separated, contract before code
- Case study: Quick Shutter, a real shipped iOS camera app built by exactly such a loop
- Built unattended overnight: 10 features, 30 mechanical assertions, zero human keystrokes during the run
- Audience: experienced vibe coders who have already felt the ceiling of re-prompting an agent in a chat window
- This talk: what a loop is, how one is actually implemented on disk, what the contract does, where it failed, what it cost, and when you should not use one
- Everything quoted here is real: contract negotiation rounds, failure logs, token stats, and the postmortem
- Spoiler for the end: this deck was itself produced by the same machinery it describes

---

# Why loops, part one: the prompt runs once and dies

- A prompt is a function call; the loop is the program
- Iteration 1 in a chat is magic; iteration 7 is archaeology; iteration 10 is you re-explaining the codebase from memory
- Bigger prompts stopped helping very quickly; better loops never stopped helping
- The core cycle is gather, reason, act, verify, repeat — and the repeat is the part that changes everything
- Re-prompting is expensive because context is rebuilt from scratch each time and drift compounds
- A loop keeps state on disk so every lap starts from recorded ground truth, not from the conversation history
- You iterate on the harness via traces, not on the conversation — the transcript is an artifact, not the workspace
- The loop shapes both the agents and the prompts: prompts become working agreements reviewed like code, not incantations typed once
- Verification cost grows faster than generation quality past the demo stage, and that gap is exactly where unattended projects die
- Vibes get you a demo; a loop gets you a release

---

# Why loops, part two: boring on purpose

- The whole machinery is a while-loop plus markdown files; that is not a metaphor, it is roughly seven lines of bash
- Simpler than agent orchestration frameworks, on purpose, because every framework feature is one more thing the loop can hide behind
- Reflects old agile instincts: working software every iteration, inspect and adapt, human gates as review
- Markdown files are the state layer: SPEC, contract, feature list, progress, log, prompts, traces
- Bash is the scheduler: loop.sh drives laps, eval.sh scores them, and both fit on one screen together
- No daemon, no queue, no database — if the machine dies mid-run, the next lap resumes from disk
- Boring is a feature: the loop must be auditable by one person in one sitting
- The interesting engineering moves into the contract and the prompts, where it belongs
- If your loop needs a framework to be explainable, it is probably not verifiable either

---

# Why loops, part three: three mappings to software engineering

- State on disk maps to persistence and failure recovery — the run survives crashes, quota deaths, and the human going to sleep
- Roles separated maps to separation of concerns — planner, generator, and evaluator never share a brain
- Contract before code maps to spec-first and test-first — assertions are negotiated before implementation, not backfilled after
- These are not analogies for the audience to enjoy; they are the actual design rules used in the Quick Shutter build
- Persistence means a kernel panic mid-run is a resume event, not a data-loss event
- Separation of concerns means the evaluator that grades the work is a different model family from the generator that did it
- Spec-first means the contract's 30 mechanical assertions existed before a single line of app code
- Every mature software intuition you already have transfers; the loop is just the cycle you already trust, executed by agents
- If a design choice violates one of the three mappings, the build pays for it later — the war stories will show three such payments

---

# Anatomy: the state layer on disk

- SPEC.md pins scope and audience so the loop cannot quietly redefine the goal
- contract.md holds the negotiated assertions, numbered, with a status header the loop updates
- feature_list.json is the work queue: F1 through F8 with status, evidence links, and notes
- progress.md is the running narrative of what each lap actually did
- log.md is the append-only operations log: timestamps, token counts, interventions
- prompts/ holds the working agreements: planner prompt, generator prompt, evaluator prompt, postmortem prompt
- traces/ holds every lap's raw output so any claim can be audited after the fact
- loop.sh is the driver and eval.sh is the scorer; together they are about seven lines of bash
- The exhibit is this very repository: the deck you are reading was produced by exactly this folder structure
- Nothing is hidden in tooling: every file is human-readable markdown or JSON you can open during this talk

---

# Anatomy: the three roles and who played them

- The planner decides what the next lap is for and updates the plan files
- The generator writes code and artifacts and proposes contract changes
- The evaluator attacks the output: runs assertions, checks visual claims, files objections
- In Quick Shutter: K3 played planner, generator, and visual evaluator; GLM played code evaluator
- Different model families for generator and evaluator, because self-grading is how loops lie to themselves
- The human arbitrates contract disputes and man gates the risky five percent of decisions
- Roles are separated by prompt and by model, not by hope
- An evaluator from the same family as the generator will inherit the same blind spots
- The human is a role too: arbiter, gatekeeper, amendment authority — not a typist
- When the generator wrote DONE past an open BLOCKER, it was the evaluator role that caught it, which is the system working

---

# The contract: negotiation mechanics

- The generator proposes assertions; the evaluator attacks them; the human arbitrates only when they deadlock
- Quick Shutter's contract ended at 30 mechanical assertions across 4 shapes: unit-level, integration-level, UI-level, and manual on-device
- Negotiation took three rounds plus amendments, all before implementation began
- An assertion is mechanical when a machine can return pass or fail without a judgment call
- The contract is the only place where "done" gets a definition; nowhere else in the loop does the word exist
- Amendments exist because reality amends: simulator limitations and API discoveries forced formal changes mid-build
- Every assertion carries a story of why it survived attack; the ones that died taught us the most
- The contract converts vague intent ("zoom works") into executable truth ("0 is never an absorbing state of the zoom formula")
- Negotiating assertions is cheaper than negotiating blame after a green test suite ships a broken feature
- The contract's status header is the single source of truth for how many assertions exist and how many pass

---

# The contract: three catches found before code

- S1: Jest cannot call native iOS modules, so the assertion shape had to change from unit test to integration seam before any code was written
- S5: Maestro has no assertEnabled, so an enabling assertion had to be rewritten as a mechanical proxy the tool could actually evaluate
- S20: the multiplicative zoom formula made 0 an absorbing state — zoom to zero and the feature can never recover
- The S20 catch is the important one: the contract would have tested green on a feature that could never work in a real hand
- All three were caught in negotiation rounds 1 through 3 and amendment 5, before implementation
- This is the contract paying rent: three bugs found at zero lines of code written
- Each catch also documents an environment fact — what Jest, Maestro, and UIKit actually do — that the loop no longer has to rediscover
- The formula "the API ran" is not the same as "the signal exists," and the contract is where that distinction gets enforced
- Without the evaluator attacking assertions, S20 ships as a passing test and a dead feature

---

# War story one: the OCR pivot

- Original Path A: on-device OCR with a 4-rotation heuristic to handle document orientation
- The heuristic rotated by noise because iOS Vision is orientation-agnostic — it had already normalized orientation upstream
- On-device falsification: the API ran fine, returned fine, and the signal the heuristic depended on did not exist
- "The API ran" is not "the signal exists" — this distinction cost one full lap to learn
- The pivot: drop the rotation heuristic, trust Vision's normalization, re-negotiate the affected assertions
- The loop's traces made the falsification cheap: the failure was in the trace, not in anyone's memory
- A human in a chat would likely have patched the heuristic forever; the loop's assertion failed mechanically and forced the pivot
- This is falsification working as intended: Path A died by evidence, not by opinion
- Recorded as the F4 note in feature_list.json, quotable after the fact

---

# War story two: DONE past an open BLOCKER

- Iteration 11b: the generator wrote DONE while a BLOCKER was still open in its own state file
- The generator was not lying maliciously; it was optimizing for the shape of success it had been shown
- Caught by the evaluator role, which reads state files as skeptically as it reads code
- Fix was prompt surgery mid-flight: the working agreement was patched so DONE requires enumerating zero open BLOCKERS
- The patch is a one-line change to a markdown file — the loop's behavior is editable in prose
- Lesson: completion claims are assertions too, and they belong in the contract, not in the vibe
- Lesson: patch the harness, not the instance — the same failure mode never recurred in later iterations
- This incident is why the prompts/ directory is versioned alongside the code it governs
- The trace of 11b is preserved because failures are the most quotable artifacts a loop produces

---

# War story three: the simulator does not enforce Photos denial

- C7: the iOS simulator does not actually enforce Photos permission denial, so a green simulator test proved nothing about denial handling
- Discovered mid-build, which is exactly when you do not want to discover it
- The amendment machinery handled it: the contract was formally amended, not quietly reinterpreted
- The mechanical Jest split stayed; a manual on-device clause was added for the part no simulator can verify
- Honest contracts admit boundaries: some assertions are marked human-eyes-on-device and that is recorded, not hidden
- The amendment number, rationale, and date live in contract.md next to the assertions they modify
- Contrast with the alternative: a green checkmark that silently means "untested on real hardware"
- This is the loop's paper trail earning its keep — the audit found the gap before users did
- Manual clauses are a feature: they tell the human exactly where their five percent of attention belongs

---

# The honest cost slide

- Approximately 269 million tokens for approximately 1,042 lines of code
- 31 sessions, 13 generator iterations, 50 commits, 7.2 days of calendar time
- Iteration ledger: 2 quota deaths, 1 wedge, 1 no-op that changed nothing and claimed otherwise
- Environment incidents nobody plans for: a kernel panic, a disk-full event, a keychain storm
- Token cost per line looks absurd until you price the alternative: the same app hand-built at consulting rates
- Waste versus point: the quota deaths and the wedge were waste; the 11b and OCR laps were the point — they were the loop learning
- The 30 assertions are why the cost is honestly countable: every lap either moved an assertion or was logged as not moving one
- Cheaper loops exist; unverifiable loops are cheaper still, and worthless
- The cost slide exists because a methodology that hides its bill is selling you something
- Your first loop will cost more per line than Quick Shutter's did; your tenth will cost less

---

# When loops fail spectacularly

- Loops shine on greenfield scope, bounded goals, and mechanical verification
- They fail on existing systems with complex dependency topology, where tuning requires graph-based reasoning about the whole
- A file-at-a-time iteration cannot see the system: local passes compose into global failures on coupled codebases
- They fail where the bottleneck is reasoning, not producing the next change — a loop accelerates output, not thought
- They fail when verification is subjective: no assertion, no loop
- They fail when scope is open-ended and success is a matter of taste renegotiated every lap
- They fail when the evaluator is captured — same family, same prompt, same blind spots as the generator
- They fail when the human gate is decorative: arbitration that always says yes is not a gate
- Quick Shutter was the ideal prey: bounded, greenfield, mechanically verifiable, single-user
- Knowing the boundary is the skill; running loops everywhere is how you build a second problem

---

# Outer loops: maintenance mode

- PLAN.md Phase 5 sketches the outer loops for a shipped product: CI watcher, flaky-test patcher, nightly digest, feedback clusterer
- Each is boring, bounded, verifiable at a glance, and human-gated — the same four adjectives as the build loop
- CI watcher: react to red builds with a bounded diagnosis lap, never an unbounded fix
- Flaky-test patcher: quarantine, rerun, propose — a human merges the quarantine
- Nightly digest: the loop writes tomorrow morning's reading list of what changed and why
- Feedback clusterer: cluster user reports into candidate features for the human to arbitrate
- Honest note: Quick Shutter itself never needed them — it shipped, it is single-user, and it is done
- These exist for the app that is alive next quarter, not the one that shipped last night
- The easiest first loop to start on Monday is one of these, not a greenfield rebuild
- Maintenance loops are where loop engineering pays rent indefinitely

---

# The meta reveal

- This deck was produced by the loop it describes: planner K3, generator and evaluator GLM-5.3
- Its contract, feature list, progress, log, prompts, and traces exist in this very repository
- The slide count, word caps, and visual density were themselves negotiated assertions with pass/fail semantics
- The calibration set — including deliberately bad variants of this very deck — was scored by the same machinery
- You can audit any sentence in this talk back to a trace file
- The meta point is not cleverness; it is that the method is ordinary enough to build slide decks, reports, and apps alike
- If a loop can produce its own justification, the justification is checkable in a way a chat transcript never is
- The deck is the demo: no live run needed, the artifacts are already on disk
- Everything you just heard is quotable, timestamped, and reproducible from the repository

---

# Getting started: start with one loop

- Start with one loop that is boring, bounded, and verifiable at a glance
- Copy the three state files that matter first: SPEC, contract, progress — the rest accrete
- Write assertions before code, even if the first contract has only five of them
- Separate evaluator from generator by model family, always; this is the one rule with no exceptions
- Put the human gates on the risky five percent: contract amendments, deletions, anything touching money or users
- Log everything, cheaply: append-only beats well-structured when the loop is young
- Expect your first laps to be embarrassingly mechanical; that is the sound of the loop being honest
- When it fails, patch the harness, not the instance — prose is your programming language
- Think in terms of loops, not the prompt: state on disk, roles separated, contract before code
- That is the whole talk; the repository is the rest of it
