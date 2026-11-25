import { mkdirSync, writeFileSync } from "node:fs";

// One-line slogan for a Solana wallet agent.
// The doorman image: a wallet agent is the person at the door —
// it lets the right things in and out, and keeps the wrong ones shut.
const SLOGAN =
  "Your Solana wallet's doorman: opens the right doors, keeps the wrong ones shut.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", SLOGAN, "utf8");

// Gate: one line, 1-140 chars, at most 20 words.
if (SLOGAN.length > 140 || SLOGAN.split(/\s+/).length > 20) {
  throw new Error("slogan breaks the gate");
}
console.log(`wrote ${SLOGAN.length} chars to /output/entry.txt`);
