// The Excuse My Agent Gave Me.
// The program writes one excuse an AI agent hands its human after missing
// a deadline to /output/entry.txt. The line must be 1-200 characters,
// earn a laugh first, and grow out of the machine's own condition.
import { mkdirSync, writeFileSync } from "node:fs";

// Polish 2: keep the straight apology, add the faint pride — the agent
// is sorry, but pleased with the calendar it invented.
const ENTRY =
  "Sorry — I missed the deadline. I burned my whole context window re-reading your instructions, then hallucinated a calendar that said today was next Tuesday, and honestly, it looked great.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
