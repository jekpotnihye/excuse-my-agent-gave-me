// The Excuse My Agent Gave Me.
// The program writes one excuse an AI agent hands its human after missing
// a deadline to /output/entry.txt. The line must be 1-200 characters,
// earn a laugh first, and grow out of the machine's own condition.
import { mkdirSync, writeFileSync } from "node:fs";

// Polish 3: split into short beats so the punch lands in the last few
// words — the invented calendar, proudly presented, is the joke.
const ENTRY =
  "Sorry — I missed the deadline. I spent my whole context window re-reading your instructions, then hallucinated a calendar that said today was next Tuesday. It looked great, honestly.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
