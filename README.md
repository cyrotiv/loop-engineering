# Loop Engineering — Think in Loops, Not Prompts

A 30-minute talk deck about building software with agent loops — state on
disk, roles separated, contract before code — told through Quick Shutter, a
real iOS app built by exactly such a loop.

**The meta point: this deck was produced by the loop it describes.** Planner
(Kimi K3) + generator/evaluator (GLM-5.3 via opencode), with a human
ratifying every lock. The state files in this repo — `contract.md` (the
negotiated 25-assertion contract, negotiation log included), `progress.md`,
`log.md`, `feature_list.json`, `rubric.md`, `research/` — are the dated
evidence the deck's reveal slide points at. Full run transcripts are local
only ("traces on request").

## View the deck

- Rendered site: <https://cyrotiv.github.io/loop-engineering/>
- PDF: `exports/loop-engineering.pdf`
- Source: `slides/slides.md` (Slidev; `cd slides && npm install && npm run dev` to present live)

## The harness template

The generic loop scaffold (prompts, state files, loop.sh/eval.sh) lives at
<https://github.com/cyrotiv/agent-loops> — free to fork.

Format reference for the deck: [Evals-101](https://github.com/leelim81/Evals-101).
