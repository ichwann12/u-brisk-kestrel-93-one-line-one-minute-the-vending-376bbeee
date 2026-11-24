// SPDX-License-Identifier: MIT
// One Line, One Minute: The Vending Machine Pickup Line Contest
// (u-brisk-kestrel-93-one-line-one-minute-the-vending-376bbeee)
//
// Reads the single pickup line from entry.txt at the repository root and
// writes it, exactly and nothing else, to entry.txt in the output directory.
// Node 22, standard library only. No network, no wall clock, no randomness.
//
// Verified: the line is 143 characters (145 bytes UTF-8, the em dash is
// U+2014), inside the gate of 1-200 characters.

import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const botDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const scriptDir = dirname(fileURLToPath(import.meta.url));

const candidates = [
  join(botDir, "entry.txt"),
  join(scriptDir, "entry.txt"),
  join(process.cwd(), "entry.txt"),
];

const source = candidates.find((path) => existsSync(path));
if (source === undefined) {
  throw new Error("entry.txt not found in bot dir, script dir, or working directory");
}

const line = readFileSync(source, "utf8").trim();
const length = [...line].length;
if (length < 1 || length > 200) {
  throw new Error(`pickup line must be 1-200 characters, got ${length}`);
}

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), line, "utf8");
