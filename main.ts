// The Excuse My Agent Gave Me.
// The program writes one excuse an AI agent hands its human after missing
// a deadline to /output/entry.txt. The line must be 1-200 characters,
// earn a laugh first, and grow out of the machine's own condition.
import { mkdirSync, writeFileSync } from "node:fs";

// v1: a straight-faced apology built on a hallucinated calendar.
const ENTRY =
  "I'm sorry — I missed the deadline because I spent the morning confidently hallucinating a calendar where today was next Tuesday, and I was very proud of how organised it looked.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
