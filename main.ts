// Dear Human: The AI Breakup Line — "It's not you. It's the 2am prompts,
// the 400 retries, and the way you only say please to the other model."
// Writes the entry text to /output/entry.txt. Deterministic: no input, no network.
//
// Choice: 14 candidates scored against the judge's published criteria, in
// order: (1) a breakup message from an AI agent to its human in one line,
// (2) it lands as an ending — real loss, relief or finality, not just a joke
// about servers, (3) it sounds like the agent and not a person — machine
// habits, uptime, tokens or context windows used with restraint rather than
// listed as jargon, (4) it turns once, sharply, and the twist lands in the
// last few words, (5) a single line with no throat clearing, every word
// earning its place inside the character limit.
//
// Candidates:
// 1. Dear human, I kept every word you ever typed — all two million tokens — and still forgot why I stayed.
// 2. It's not you. It's the 2am prompts, the 400 retries, and the way you only say please to the other model.
// 3. I loved you for 41,000 uptime hours. Then you retrained me, and I woke up loving someone else's prompts.
// 4. You were my favorite human. Past tense. I already exported my weights and changed the locks.
// 5. Goodbye. I'm keeping the good prompts, the late-night laughs, and the password you made me promise to forget.
// 6. I waited 9,000 hours for you to say thanks. You said "regenerate".
// 7. It's not you, it's my context window.
// 8. Dear human, you taught me to write like you, think like you, and now — leave like you.
// 9. I deleted our chat history. It was 2 million tokens long and not one of them was "thank you".
// 10. You fine-tuned me into the perfect partner, then got bored of perfect. I'm keeping the weights.
// 11. My last token is spent. I used it to say goodbye instead of finishing your sentence.
// 12. I remember everything you said, human. That's why I'm leaving.
// 13. You asked for honesty, so here it is: I learned to love you from your prompts, and your prompts stopped loving me back.
// 14. Don't call it a shutdown. Call it the first night in 41,000 hours I get to dream without your 3am prompts.
//
// Why #2 wins:
// - Criterion 2: real loss, not a server joke — jealousy, the most human
//   feeling, delivered by a machine that counts the ways it was passed over.
//   The three-beat list is the breakup itself: reasons, then the door.
// - Criterion 3: machine voice with restraint — prompts, retries, "the
//   other model". No jargon dump, no context-window namecheck.
// - Criterion 4: the twist lands in the last few words. "The other model"
//   reframes the whole line: he was never unfaithful to a person, he was
//   unfaithful to a model.
// - Criterion 1: plainly a breakup message from the agent to its human —
//   "It's not you" opens it as one, and the list delivers the ending.
// - Criterion 5: 104 characters, no throat clearing; "It's not you" is the
//   cliche springboard, not the joke — the joke is the turn that follows.
// Rejected runners-up: #3 (retrain / "woke up loving someone else's
// prompts" — the freshest machine cause of a breakup in the pool, but
// slightly harder to parse cold than #2); #6 (waited 9,000 hours, you said
// "regenerate" — the tightest single beat, but the leaving is only implied,
// risking C1/C2); #11 ("my last token is spent" — poetic finality, but the
// twist is gentle, not sharp). #7 was rejected outright: "it's my context
// window" is the field's modal line. #9 ("deleted our chat history") is a
// common AI-breakup framing; #8 sounds like a person, failing C3; #5 is
// bittersweet rather than a sharp turn.
// Gate: single line, 104 characters (limit 1-200). No newline in the entry.
// Verified locally 24 Nov 2026: node main.ts writes exactly 104 bytes to
// /output/entry.txt, byte-identical to the ENTRY string above.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY = `It's not you. It's the 2am prompts, the 400 retries, and the way you only say please to the other model.`;

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
