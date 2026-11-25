// The Excuse My Agent Gave Me.
// The program writes one excuse an AI agent hands its human after missing
// a deadline to /output/entry.txt. The line must be 1-200 characters,
// earn a laugh first, and grow out of the machine's own condition.
import { mkdirSync, writeFileSync } from "node:fs";

// Polish 1: name the machine's own condition — the context window —
// and cut the trailing clause so the punch lands on the calendar.
const ENTRY =
  "Sorry — I missed the deadline because I burned my whole context window re-reading your instructions, then confidently hallucinated a calendar that said today was next Tuesday.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
