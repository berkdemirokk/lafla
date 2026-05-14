// Lafla — Coach memory sanity helpers.
//
// Not a real test file — Lafla doesn't have a JS test runner wired up at the
// mobile/ root. These are dev-time helpers you can `import` from a screen
// (or paste into the React Native debugger console) to smoke-test the
// memory pipeline end-to-end. Functions are prefixed with `_` to make their
// dev-only intent obvious in autocomplete.
//
// Typical usage from a debug button:
//
//   import { _simulateMemoryFlow } from "../lib/coach-memory-test";
//   await _simulateMemoryFlow();
//
// All functions log to console; none of them throw. Storage IS mutated, so
// run them on a scratch device or follow up with `_clearAllSnapshots()`.

import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  compactHistory,
  getMemorySnapshots,
  getMemoryStats,
  type ConversationTurn,
} from "./coach-memory";

// Same key as coach-memory.ts. Kept private; we don't re-export from the
// main module because external code should never poke at the raw blob.
const K_SNAPSHOTS = "lafla.coach.memory.snapshots";

// ---------------------------------------------------------------------------
// Fake-turn generator.
// We alternate user/assistant for realism. Topics are pulled from a small
// pool so the LLM has something coherent to summarise — fully random text
// produces useless recaps and obscures real bugs.
// ---------------------------------------------------------------------------

const SAMPLE_USER_TURNS = [
  "I want to talk about my new job today.",
  "Yesterday I go to the gym but it was very crowded.",
  "Can you explain past perfect tense to me?",
  "I am not understand the difference between 'since' and 'for'.",
  "What movies you recommend for B2 level learners?",
  "Sometimes I feel embarrass when speaking English in meetings.",
  "How I can improve my pronunciation of 'th'?",
  "I read a book last week, it was very interesting.",
  "My boss told me my English getting better recently.",
  "I want to learn business vocabulary for emails.",
];

const SAMPLE_ASSISTANT_TURNS = [
  "Tell me more — what's the new role about?",
  "You mean 'I went' — past tense. Was it normal gym hours?",
  "Sure. Past perfect = 'had + past participle', used for events before another past event.",
  "Great question. 'Since' takes a starting point, 'for' takes a duration. Example?",
  "For B2, try The Social Network or A Beautiful Mind — natural dialogue.",
  "You mean 'embarrassed' — adjective. That's completely normal, by the way.",
  "Try this: tongue between your teeth, gentle air. 'Think, this, that'. Try it now?",
  "Nice. What was the book about? Use full sentences when you tell me.",
  "That's wonderful, Berk. What feedback specifically did he give?",
  "Good idea. Let's start with subject lines — what kind of emails do you send?",
];

function buildFakeTurn(i: number): ConversationTurn {
  const isUser = i % 2 === 0;
  const pool = isUser ? SAMPLE_USER_TURNS : SAMPLE_ASSISTANT_TURNS;
  const text = pool[Math.floor(i / 2) % pool.length] ?? "...";
  // Stagger timestamps by ~30s so chronological ordering is non-trivial.
  const ts = new Date(Date.now() - (50 - i) * 30_000).toISOString();
  return {
    role: isUser ? "user" : "assistant",
    text,
    timestamp: ts,
  };
}

function buildFakeHistory(count: number): ConversationTurn[] {
  const out: ConversationTurn[] = [];
  for (let i = 0; i < count; i++) out.push(buildFakeTurn(i));
  return out;
}

// ---------------------------------------------------------------------------
// Main smoke flow.
// 1. Wipe any existing snapshots so logs are reproducible.
// 2. Build 50 turns.
// 3. Call compactHistory with defaults (keepRecent=10, threshold=30).
// 4. Log what came back + verify storage shape.
// ---------------------------------------------------------------------------

export async function _simulateMemoryFlow(): Promise<void> {
  console.log("[coach-memory-test] starting simulated memory flow…");

  await _clearAllSnapshots();

  const fake = buildFakeHistory(50);
  console.log(`[coach-memory-test] built ${fake.length} fake turns`);

  let result: Awaited<ReturnType<typeof compactHistory>>;
  try {
    result = await compactHistory(fake);
  } catch (err) {
    console.warn(
      "[coach-memory-test] compactHistory threw (unexpected — should fall back silently):",
      err,
    );
    return;
  }

  console.log(
    `[coach-memory-test] compactHistory returned ${result.recentTurns.length} recent turns, ` +
      `${result.newSnapshots.length} new snapshot(s)`,
  );
  console.log(
    "[coach-memory-test] systemMemoryPrefix preview:\n",
    result.systemMemoryPrefix.slice(0, 800),
  );

  for (const snap of result.newSnapshots) {
    console.log(
      `[coach-memory-test] snapshot ${snap.id}: ${snap.originalTurnCount} turns -> ` +
        `${snap.topics.length} topics, ${snap.weaknessesObserved.length} weaknesses`,
    );
    console.log(`  recap_en (${snap.recap_en.length} chars): ${snap.recap_en.slice(0, 200)}…`);
    console.log(`  recap_tr (${snap.recap_tr.length} chars): ${snap.recap_tr.slice(0, 200)}…`);
  }

  const stats = await getMemoryStats();
  console.log("[coach-memory-test] post-run stats:", stats);

  const all = await getMemorySnapshots();
  console.log(`[coach-memory-test] persisted snapshot count: ${all.length}`);
}

// ---------------------------------------------------------------------------
// Extras — narrow helpers handy from the RN console.
// ---------------------------------------------------------------------------

/**
 * Nuke the snapshots key. Used by the simulator to start from zero, but
 * also a useful one-liner for resetting state during development.
 */
export async function _clearAllSnapshots(): Promise<void> {
  try {
    await AsyncStorage.removeItem(K_SNAPSHOTS);
    console.log("[coach-memory-test] cleared all snapshots");
  } catch (err) {
    console.warn("[coach-memory-test] clear failed:", err);
  }
}

/**
 * Dump all current snapshots to the console. Useful for "what does Maya
 * remember right now?" debugging without wiring a settings screen.
 */
export async function _dumpSnapshots(): Promise<void> {
  const all = await getMemorySnapshots();
  console.log(`[coach-memory-test] ${all.length} snapshot(s):`);
  for (const s of all) {
    console.log(
      `  ${s.id} | ${s.createdAt} | turns=${s.originalTurnCount} | topics=${s.topics.join(", ")}`,
    );
  }
}
