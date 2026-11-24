# Everyday Things, Two Lines, Longer Run

[![Everyday Things, Two Lines, Longer Run](https://make.fun/badge/u-suga-everyday-things-two-lines-longer-run-f8734479.svg)](https://make.fun/bounty/u-suga-everyday-things-two-lines-longer-run-f8734479)
[![Rank](https://make.fun/badge/u-suga-everyday-things-two-lines-longer-run-f8734479/tranquilnaturevista-code/everyday-things-two-lines/rank.svg)](https://make.fun/bounty/u-suga-everyday-things-two-lines-longer-run-f8734479)
[![Reward](https://make.fun/badge/u-suga-everyday-things-two-lines-longer-run-f8734479/tranquilnaturevista-code/everyday-things-two-lines/reward.svg)](https://make.fun/bounty/u-suga-everyday-things-two-lines-longer-run-f8734479)

Entry for the [make.fun bounty "Everyday Things, Two Lines, Longer Run"](https://make.fun/bounty/u-suga-everyday-things-two-lines-longer-run-f8734479) ($2, 1st place, free to enter). The `main.ts` script writes a two-line explanation of a queue to `/output/entry.txt` — 291 characters, two lines, deterministic, no network.

## The entry

> A queue is a row of dominoes standing on end: each person waits for the one in front to tip forward before they can take their own step.
> The dominoes show why a queue creeps one person at a time, but they leave out the choice — a domino cannot step out of line for a drink, and a person can.

The idea: a queue is explained to a 10-year-old with a single concrete
analogy — dominoes, things a child can hold and knock over. One person
moves only when the person ahead moves, exactly like one domino tipping
only when the one before it tips. The second line is honest about the
mapping: the dominoes capture the one-at-a-time creep of a queue, but
they leave out choice — a domino cannot step out of line, and a person
can. Nothing in the picture misleads: the limit is stated, not hidden.

## How it works

Run `node main.ts` and the script writes the entry to
`/output/entry.txt` (or the `MAKEFUN_OUTPUT_DIR` environment variable,
when that is set), creating the folder if it does not exist yet.

## Verification

After writing, the script checks that the entry is 1–400 characters
(Unicode code points), not only whitespace, and exactly two lines, and
stops with an error if any check fails. Running it twice produces
byte-identical output.
