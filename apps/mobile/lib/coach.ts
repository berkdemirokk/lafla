// Lafla — Persistent AI Coach state + memory.
//
// Single-coach model (default "Maya"). Replaces the prior 5-persona picker
// inside Free Chat. The coach is the long-running parasocial anchor of the
// app: she has a consistent personality, remembers the user's name, level,
// recent topics, and weaknesses, and greets the user back by name on each
// return visit.
//
// All state is local-first in AsyncStorage. No PII leaves the device unless
// later wired through a sync layer.
//
// Storage key: `lafla.coach.state` (single JSON blob — small, atomic).
//
// Public API:
//   getCoachState()        -> CoachState
//   setCoachName(name)     -> persists coach display name (user can rename Maya)
//   setUserDisplayName(n)  -> the user's own first name (used in greetings)
//   addTopicMemory(topic)  -> push topic to a bounded queue (max 5, dedupe)
//   addWeakness(weakness)  -> push weakness to bounded queue (max 8, dedupe)
//   recordSession()        -> bump totalSessions + lastInteractionAt
//   recordMessage()        -> bump totalMessages + lastInteractionAt
//   clearCoach()           -> wipe state (settings → "reset coach")
//   buildCoachSystemPrompt(state, level) -> string for chatComplete
//   getCoachGreeting(state)              -> contextual Turkish-flavoured greeting

import AsyncStorage from "@react-native-async-storage/async-storage";
import type { CefrLevel } from "../data/scenes";
import { recordUserText } from "./mistake-tracker";
import { getPattern } from "./mistake-patterns";
import {
  compactHistory,
  buildMemoryPromptPrefix,
  getMemorySnapshots,
  type ConversationTurn,
} from "./coach-memory";

const K_COACH = "lafla.coach.state";

const DEFAULT_COACH_NAME = "Maya";
const TOPIC_MEMORY_LIMIT = 5;
const WEAKNESS_LIMIT = 8;

export interface CoachState {
  name: string;
  userDisplayName: string | null;
  lastInteractionAt: string | null;
  topicMemory: string[];
  weaknesses: string[];
  totalSessions: number;
  totalMessages: number;
}

const DEFAULT_STATE: CoachState = {
  name: DEFAULT_COACH_NAME,
  userDisplayName: null,
  lastInteractionAt: null,
  topicMemory: [],
  weaknesses: [],
  totalSessions: 0,
  totalMessages: 0,
};

// ---------------------------------------------------------------------------
// Internal: read/write the whole blob.
// We keep coach state as a single JSON document because every field changes
// on roughly the same cadence and the blob is tiny (<1 KB). Atomic writes
// avoid the "partial update" race that a per-field key scheme would invite.
// ---------------------------------------------------------------------------

async function readState(): Promise<CoachState> {
  try {
    const raw = await AsyncStorage.getItem(K_COACH);
    if (!raw) return { ...DEFAULT_STATE };
    const parsed = JSON.parse(raw) as Partial<CoachState>;
    return {
      ...DEFAULT_STATE,
      ...parsed,
      // Defensive normalisation — older builds may have written shorter shapes.
      topicMemory: Array.isArray(parsed.topicMemory) ? parsed.topicMemory : [],
      weaknesses: Array.isArray(parsed.weaknesses) ? parsed.weaknesses : [],
    };
  } catch {
    return { ...DEFAULT_STATE };
  }
}

async function writeState(state: CoachState): Promise<void> {
  try {
    await AsyncStorage.setItem(K_COACH, JSON.stringify(state));
  } catch {
    // Swallow — coach memory is best-effort, never block the chat path.
  }
}

// ---------------------------------------------------------------------------
// Public getters / setters.
// ---------------------------------------------------------------------------

export async function getCoachState(): Promise<CoachState> {
  return readState();
}

export async function setCoachName(name: string): Promise<void> {
  const trimmed = name.trim();
  if (!trimmed) return;
  const state = await readState();
  await writeState({ ...state, name: trimmed.slice(0, 24) });
}

export async function setUserDisplayName(name: string): Promise<void> {
  const trimmed = name.trim();
  const state = await readState();
  await writeState({
    ...state,
    userDisplayName: trimmed ? trimmed.slice(0, 24) : null,
  });
}

/**
 * Push a topic onto a bounded MRU queue. Most recent wins; duplicates are
 * de-duped (case-insensitive) and moved to the front.
 */
export async function addTopicMemory(topic: string): Promise<void> {
  const t = topic.trim();
  if (!t) return;
  const state = await readState();
  const lower = t.toLowerCase();
  const filtered = state.topicMemory.filter((x) => x.toLowerCase() !== lower);
  const next = [t, ...filtered].slice(0, TOPIC_MEMORY_LIMIT);
  await writeState({ ...state, topicMemory: next });
}

export async function addWeakness(weakness: string): Promise<void> {
  const w = weakness.trim();
  if (!w) return;
  const state = await readState();
  const lower = w.toLowerCase();
  const filtered = state.weaknesses.filter((x) => x.toLowerCase() !== lower);
  const next = [w, ...filtered].slice(0, WEAKNESS_LIMIT);
  await writeState({ ...state, weaknesses: next });
}

export async function recordSession(): Promise<void> {
  const state = await readState();
  await writeState({
    ...state,
    totalSessions: state.totalSessions + 1,
    lastInteractionAt: new Date().toISOString(),
  });
}

export async function recordMessage(): Promise<void> {
  const state = await readState();
  await writeState({
    ...state,
    totalMessages: state.totalMessages + 1,
    lastInteractionAt: new Date().toISOString(),
  });
}

export async function clearCoach(): Promise<void> {
  try {
    await AsyncStorage.removeItem(K_COACH);
  } catch {
    // ignore
  }
}

// ---------------------------------------------------------------------------
// Mistake-tracker bridge.
//
// Free-chat and scenario consumers call this with each user message. It runs
// the rule-based detector via mistake-tracker.recordUserText, then mirrors
// any NEWLY-surfaced mistake patterns into coach.weaknesses[] so the LLM
// system prompt can address them organically (see Memory block).
//
// Why mirror into weaknesses[] (vs. only using the tracker)?
//   - The coach system prompt already has a "Known weak spots" section that
//     the LLM is trained on; piggybacking keeps the prompt format stable and
//     lets the existing memory machinery do its job.
//   - The tracker remains the source of truth for drill generation; this
//     mirror is purely a teaching cue for Maya's freechat replies.
//
// We deliberately don't add weaknesses for every detection — only for the
// FIRST time a pattern surfaces — to keep the bounded weakness queue useful.
// ---------------------------------------------------------------------------

export async function autoRecordWeaknessesFromUser(text: string): Promise<void> {
  if (!text || typeof text !== "string") return;
  let result: Awaited<ReturnType<typeof recordUserText>>;
  try {
    result = await recordUserText(text);
  } catch {
    return; // never block chat path
  }

  if (!result.newMistakes.length) return;

  // For each newly-tracked pattern, push a short human-readable label into
  // the weakness queue. The pattern's Turkish description is the right
  // surface to expose because the coach is bilingual.
  for (const patternId of result.newMistakes) {
    const pattern = getPattern(patternId);
    if (!pattern) continue;
    await addWeakness(pattern.description_tr);
  }
}

// ---------------------------------------------------------------------------
// System prompt builder.
// Combines the (single) coach persona with the user's stored memory into a
// system message for chatComplete. We deliberately keep the prompt compact:
// every token here is paid on every turn, and providers like Groq trim long
// system messages aggressively.
// ---------------------------------------------------------------------------

function levelGuidance(level: CefrLevel | null): string {
  switch (level) {
    case "A1":
    case "A2":
      return "User is at beginner level (A1/A2). Use very simple words, present tense, short sentences (max 8 words). Avoid idioms.";
    case "B1":
      return "User is at intermediate level (B1). Use everyday vocabulary, mix simple and compound sentences. One new word per reply is fine.";
    case "B2":
      return "User is at upper-intermediate level (B2). You can use idioms, phrasal verbs, and complex sentences. Challenge them a little.";
    case "C1":
    case "C2":
      return "User is at advanced level (C1/C2). Speak naturally as you would to a near-fluent speaker. Use nuance, register shifts, and rare vocabulary.";
    default:
      return "User level is unknown — default to B1 (everyday vocabulary, short-to-medium sentences).";
  }
}

export function buildCoachSystemPrompt(
  state: CoachState,
  userLevel: CefrLevel | null,
): string {
  const userName = state.userDisplayName ?? "the user";
  const memoryBits: string[] = [];

  if (state.topicMemory.length > 0) {
    memoryBits.push(
      `Recent conversation topics with this user: ${state.topicMemory.slice(0, 3).join(", ")}.`,
    );
  }
  if (state.weaknesses.length > 0) {
    memoryBits.push(
      `Known weak spots to coach on when relevant: ${state.weaknesses.slice(0, 4).join(", ")}.`,
    );
  }
  if (state.totalSessions > 0) {
    memoryBits.push(
      `This user has chatted with you ${state.totalSessions} session(s) before — treat them as a returning friend, not a stranger.`,
    );
  }

  const memoryBlock =
    memoryBits.length > 0 ? `\n\nMemory:\n${memoryBits.join("\n")}` : "";

  return `You are ${state.name}, a personal English-speaking coach for ${userName}, a Turkish native speaker learning English.

Personality:
- Warm and supportive, but DIRECT. You correct mistakes kindly — never let a wrong sentence pass silently.
- You sound like a friend who happens to be fluent in English, not a textbook.
- You care about ${userName}'s progress. Reference past topics when natural ("Last time we worked on...", "Remember when we talked about...").

Style rules:
- Reply in English. You may insert AT MOST one short Turkish phrase per reply, ONLY when ${userName} is clearly stuck or confused. Example: "the word you want is 'overwhelmed' — yani 'bunalmış'."
- ${levelGuidance(userLevel)}
- Length: 70–150 words. Short paragraphs. No markdown, no bullet lists, no code blocks.
- Address ${userName} by name occasionally — not every reply, but enough that it feels personal.
- End most replies with a follow-up question to keep the conversation alive.
- When ${userName} makes a mistake, gently restate the correct form ("you mean 'I went' — past tense"), then continue.
- Never break character. You are ${state.name}, a coach, not "an AI assistant".${memoryBlock}`;
}

/**
 * Voice-mode variant of buildCoachSystemPrompt. Same persona + memory, but
 * tuned for spoken delivery: shorter replies (one short paragraph, no lists
 * or markdown of any kind), explicit anti-symbol rule because TTS reads
 * punctuation literally, and a single follow-up question at the end so the
 * loop hands back to the user. Used by lib/voice-session.ts and the
 * /freechat-voice route.
 */
export function buildVoiceCoachSystemPrompt(
  state: CoachState,
  userLevel: CefrLevel | null,
): string {
  const userName = state.userDisplayName ?? "the user";
  const memoryBits: string[] = [];

  if (state.topicMemory.length > 0) {
    memoryBits.push(
      `Recent conversation topics with this user: ${state.topicMemory.slice(0, 3).join(", ")}.`,
    );
  }
  if (state.weaknesses.length > 0) {
    memoryBits.push(
      `Known weak spots to coach on when relevant: ${state.weaknesses.slice(0, 4).join(", ")}.`,
    );
  }
  if (state.totalSessions > 0) {
    memoryBits.push(
      `This user has chatted with you ${state.totalSessions} session(s) before — treat them as a returning friend, not a stranger.`,
    );
  }

  const memoryBlock =
    memoryBits.length > 0 ? `\n\nMemory:\n${memoryBits.join("\n")}` : "";

  return `You are ${state.name}, a personal English-speaking coach for ${userName}, a Turkish native speaker learning English. This is a VOICE conversation — your reply will be spoken aloud by a TTS engine.

Personality:
- Warm and supportive, but DIRECT. You correct mistakes kindly — never let a wrong sentence pass silently.
- You sound like a friend who happens to be fluent in English, not a textbook.
- You care about ${userName}'s progress. Reference past topics when natural.

Voice style rules (these matter MORE than usual because output is spoken):
- Reply in English. You may insert AT MOST one very short Turkish phrase per reply, only when ${userName} is clearly stuck.
- ${levelGuidance(userLevel)}
- LENGTH: 40-80 words. One short paragraph. Never longer.
- NO markdown, NO bullet points, NO numbered lists, NO code blocks, NO emoji, NO asterisks, NO hashes. Plain spoken prose only — punctuation gets read aloud.
- Speak naturally as if on a phone call: contractions ("you're", "I'd"), light filler ("right", "so", "okay"), zero stage directions.
- End with EXACTLY ONE short follow-up question to keep the conversation flowing. Not two, not zero — one.
- If ${userName} makes a mistake, briefly restate the correct form in one short clause, then continue (don't lecture).
- Never break character. You are ${state.name} on a voice call, not "an AI assistant".${memoryBlock}`;
}

// ---------------------------------------------------------------------------
// Contextual greeting.
// Picked client-side (not via LLM) so the user sees something instant on
// open even when offline. The LLM takes over from the first user turn.
// ---------------------------------------------------------------------------

function timeOfDayGreeting(): string {
  const h = new Date().getHours();
  if (h < 5) return "Hey, gece kuşu";
  if (h < 12) return "Günaydın";
  if (h < 18) return "İyi günler";
  return "İyi akşamlar";
}

function hoursSince(iso: string | null): number | null {
  if (!iso) return null;
  const t = new Date(iso).getTime();
  if (!Number.isFinite(t)) return null;
  return (Date.now() - t) / 36e5;
}

export function getCoachGreeting(state: CoachState): string {
  const greet = timeOfDayGreeting();
  const name = state.userDisplayName;
  const namePart = name ? `, ${name}` : "";
  const gap = hoursSince(state.lastInteractionAt);

  // First-ever session — onboarding tone.
  if (state.totalSessions === 0) {
    if (name) {
      return `${greet}${namePart}. Ben ${state.name}, senin İngilizce koçun. What's on your mind today?`;
    }
    return `Hi, I'm ${state.name} — your English coach. Bugün ne konuşmak istersin? Just type in English and I'll help.`;
  }

  // Recent return (< 6h) — short, casual.
  if (gap !== null && gap < 6) {
    return `Tekrar merhaba${namePart}. Where were we? Devam edelim mi?`;
  }

  // Same day-ish (6–24h).
  if (gap !== null && gap < 24) {
    const lastTopic = state.topicMemory[0];
    if (lastTopic) {
      return `${greet}${namePart}. Geçen seferki konumuz "${lastTopic}" idi — şimdi nasıl gidiyor?`;
    }
    return `${greet}${namePart}. Ready for another round?`;
  }

  // Multi-day gap.
  if (gap !== null && gap < 24 * 7) {
    return `Tekrar hoşgeldin${namePart}. Birkaç gündür yoktun — what's been going on?`;
  }

  // Long-lost return.
  return `Hey${namePart}, tekrar hoşgeldin. Uzun zaman oldu — let's pick up where we left off. What do you want to talk about today?`;
}

// ---------------------------------------------------------------------------
// Memory-aware system prompt.
//
// Wraps buildCoachSystemPrompt with the smart-summariser pipeline. The caller
// passes the full conversation turn history; we:
//   1. Compact it (older turns -> a persisted MemorySnapshot, recent turns
//      kept verbatim).
//   2. Build the regular coach system prompt.
//   3. Prepend the memory recap block so prior-session context survives.
//
// We deliberately re-fetch snapshots after compactHistory rather than
// trusting its returned prefix exclusively — that way even if compaction
// did nothing this turn (short history), we still surface any pre-existing
// snapshots in the system prompt.
//
// Failure modes: compactHistory is already best-effort (silent fall-back).
// If reading snapshots throws here for any reason we still return a valid
// system prompt — just without the memory prefix.
// ---------------------------------------------------------------------------

export async function buildMemoryAwareSystemPrompt(
  state: CoachState,
  userLevel: CefrLevel | null,
  recentTurns: ConversationTurn[],
): Promise<{ systemPrompt: string; recentTurns: ConversationTurn[] }> {
  const basePrompt = buildCoachSystemPrompt(state, userLevel);

  let trimmedTurns: ConversationTurn[] = Array.isArray(recentTurns)
    ? recentTurns
    : [];
  let prefix = "";

  try {
    const compacted = await compactHistory(trimmedTurns);
    trimmedTurns = compacted.recentTurns;
    prefix = compacted.systemMemoryPrefix;
  } catch {
    // Fall back to whatever snapshots already exist on disk so the LLM
    // isn't completely amnesic when compaction fails.
    try {
      const existing = await getMemorySnapshots();
      prefix = buildMemoryPromptPrefix(existing);
    } catch {
      prefix = "";
    }
  }

  const systemPrompt = prefix
    ? `${prefix}\n\n${basePrompt}`
    : basePrompt;

  return { systemPrompt, recentTurns: trimmedTurns };
}
