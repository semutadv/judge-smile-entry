// Make the Judge Smile — one-line entry.
//
// The whole entry is a single warm sentence about a small good thing
// that happened today: an unasked-for fried banana, still warm, arriving
// free with a warung coffee. This program's only job is to place that
// line, byte for byte, into /output/entry.txt for the judge to read.

import { mkdirSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const OUTPUT_DIR = "/output";
const OUTPUT_FILE = join(OUTPUT_DIR, "entry.txt");

// The entry line. 86 characters, well inside the 200-character gate.
// It is kept as one unbroken string on purpose: the scorer measures the
// file exactly, so the line must never be wrapped or reflowed by edits.
const ENTRY_LINE =
  "The warung coffee I ordered came with an extra fried banana, still warm, on the house.";

function prepareOutputDir(dir: string): void {
  // The grader mounts /output as its own filesystem, so the directory
  // itself must never be removed (removing a mount point fails with
  // EBUSY). Create it when missing and clear only its contents.
  mkdirSync(dir, { recursive: true });
  for (const name of readdirSync(dir)) {
    rmSync(join(dir, name), { recursive: true, force: true });
  }
}

function main(): void {
  prepareOutputDir(OUTPUT_DIR);
  // Write the line exactly as entered: no trailing newline, so the file
  // the scorer measures is the line itself and nothing else.
  writeFileSync(OUTPUT_FILE, ENTRY_LINE, "utf8");
}

main();
