import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

// The Dog Reviews the Mailman entry: one original line, a dog's review of the mailman.
// Gate: /output/entry.txt must be UTF-8 text of 1 to 200 characters (this line is 104).
const line =
  "Day 412: he still runs from me. I have never caught him, but he knows. Five stars — would terrify again.";

if (line.length < 1 || line.length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${line.length}`);
}

if (line.includes("\n") || line.includes("\r")) {
  throw new Error("entry must be a single line");
}

if (line !== line.trim()) {
  throw new Error("entry must not start or end with whitespace");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
if (readFileSync("/output/entry.txt", "utf8") !== line) {
  throw new Error("entry.txt does not match the dog review line");
}
console.log(`wrote ${line.length} characters to /output/entry.txt`);
