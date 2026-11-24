// Everyday Things, Two Lines, Longer Run.
//
// Writes one original two-line explanation of a queue to
// /output/entry.txt. Line 1 explains the queue to a 10-year-old in a
// single vivid sentence built on one analogy (dominoes). Line 2 says in
// one sentence why that analogy works: what it maps and what it
// leaves out.
//
// Node 22, standard library only, deterministic, no network.
// The output directory is /output, or MAKEFUN_OUTPUT_DIR when set.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY = [
  "A queue is a row of dominoes standing on end: each person waits for the one in front to tip forward before they can move.",
  "The dominoes show why a queue creeps one person at a time, but they leave out the choice \u2014 a domino cannot step out of line for a drink, and a person can.",
].join("\n");

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const path = join(outDir, "entry.txt");
writeFileSync(path, ENTRY, "utf8");

// Self-check: the gate requires 1-400 characters (Unicode code points),
// not only whitespace, in exactly two lines.
const len = [...ENTRY].length;
if (len < 1 || len > 400) {
  console.error(`error: entry is ${len} characters, must be 1-400`);
  process.exit(1);
}
if (!ENTRY.trim()) {
  console.error("error: entry is only whitespace");
  process.exit(1);
}
if (ENTRY.split("\n").length !== 2) {
  console.error("error: entry must be exactly two lines");
  process.exit(1);
}
console.log(`wrote ${path} (${len} characters, 2 lines)`);
