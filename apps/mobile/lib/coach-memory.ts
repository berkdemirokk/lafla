// Lafla — AI Coach memory smart-summarizer.
//
// Maya's conversations accumulate over many sessions. If we feed her full
// history to the LLM on every turn, the system prompt + context window grows
// without bound: latency creeps up, free-tier token quotas burn faster, and
// some providers (Groq notably) silently truncate from the middle of the
// system block — which is exactly where the most load-bearing memory lives.
//
// This module is the compression layer that sits between the raw transcript
// and the LLM. The contract:
//
//   compactHistory(turns)
//     -> takes the full ordered turn list
//     -> if the list is long enough, takes the OLDEST chunk and asks the
//        LLM to summarise it into a single MemorySnapshot
//     -> persists the snapshot to AsyncStorage (capped at 20 most recent)
//     -> returns the RECENT slice verbatim + a memory prefix string ready
//        to prepend to the regular coach system prompt
//
// Failure mode: if the summariser LLM call fails for any reason, we fall
// back silently to a truncating compactor that drops the oldest turns and
// returns no new snapshot. The chat path NEVER crashes on memory issues —
// this is best-effort context shaping, not a critical feature.
//
// Storage key:
//   lafla.coach.memory.snapshots -> JSON MemorySnapshot[] (cap 20, newest first)
//
// Design choices worth noting:
//   - We store both `recap_tr` and `recap_en` even though only `recap_en`
//     feeds the LLM. The Turkish recap is for future surfaces (e.g. an
//     "what Maya remembers about you" settings screen) where showing the
//     user a Turkish summary is friendlier than translating client-side.
//   - We summarise in WINDOWS, not incrementally. Each snapshot covers a
//     contiguous block of turns; multiple snapshots accumulate over time.
//     buildMemoryPromptPrefix concatenates them oldest-to-newest so the LLM
//     sees the timeline as it actually happened.

import AsyncStorage from "@react-native-async-storage/async-storage";
import { chatComplete } from "./llm-router";
import { addBreadcrumb } from "./sentry";
import { isArray, parseSafe } from "./json-safe";

const K_SNAPSHOTS = "lafla.coach.memory.snapshots";
const MAX_SNAPSHOTS = 20;

const DEFAULT_KEEP_RECENT = 10;
const DEFAULT_SUMMARIZE_THRESHOLD = 30;

// ---------------------------------------------------------------------------
// Public types
// ---------------------------------------------------------------------------

export interface ConversationTurn {
  role: "user" | "assistant";
  text: string;
  timestamp: string;
}

export interface MemorySnapshot {
  id: string;
  createdAt: string;
  /** 100–250 words in Turkish — meant for surfacing back to the user. */
  recap_tr: string;
  /** 100–250 words in English (Maya's POV) — fed into the LLM system prompt. */
  recap_en: string;
  /** 5–10 main topics covered during the window. */
  topics: string[];
  /** Patterns / weak spots the student kept hitting during the window. */
  weaknessesObserved: string[];
  /** ISO timestamp of the first turn covered by this snapshot. */
  turnsFrom: string;
  /** ISO timestamp of the last turn covered by this snapshot. */
  turnsTo: string;
  /** How many raw turns this snapshot replaces. */
  originalTurnCount: number;
}

// ---------------------------------------------------------------------------
// Internal: AsyncStorage read/write. Defensive against malformed legacy blobs.
// ---------------------------------------------------------------------------

async function readSnapshots(): Promise<MemorySnapshot[]> {
  try {
    const raw = await AsyncStorage.getItem(K_SNAPSHOTS);
    // parseSafe protects against corrupt storage (older builds, partial writes,
    // a manual edit in Reactotron). Validator only asserts "is array" — the
    // per-field normalisation below already tolerates missing keys, so a
    // stricter validator would just throw away salvageable snapshots.
    const parsed = parseSafe<unknown[]>(raw, [], isArray, {
      source: "coach-memory.readSnapshots",
    });
    return parsed
      .filter(
        (s): s is Record<string, unknown> =>
          s !== null && typeof s === "object" && typeof (s as { id?: unknown }).id === "string",
      )
      .map((s) => ({
        id: s.id as string,
        createdAt:
          typeof s.createdAt === "string" ? s.createdAt : new Date(0).toISOString(),
        recap_tr: typeof s.recap_tr === "string" ? s.recap_tr : "",
        recap_en: typeof s.recap_en === "string" ? s.recap_en : "",
        topics: Array.isArray(s.topics)
          ? (s.topics as unknown[]).filter((t): t is string => typeof t === "string").slice(0, 10)
          : [],
        weaknessesObserved: Array.isArray(s.weaknessesObserved)
          ? (s.weaknessesObserved as unknown[]).filter((w): w is string => typeof w === "string").slice(0, 10)
          : [],
        turnsFrom: typeof s.turnsFrom === "string" ? s.turnsFrom : "",
        turnsTo: typeof s.turnsTo === "string" ? s.turnsTo : "",
        originalTurnCount: Number.isFinite(s.originalTurnCount as number)
          ? Math.max(0, Math.floor(s.originalTurnCount as number))
          : 0,
      }));
  } catch {
    return [];
  }
}

async function writeSnapshots(list: MemorySnapshot[]): Promise<void> {
  try {
    // Newest-first ordering is enforced by the caller (saveMemorySnapshot
    // prepends), so we just clamp the length here.
    await AsyncStorage.setItem(
      K_SNAPSHOTS,
      JSON.stringify(list.slice(0, MAX_SNAPSHOTS)),
    );
  } catch {
    // Swallow — best-effort, never block chat path.
  }
}

function makeId(): string {
  // No crypto.randomUUID guarantee on RN — combine time + a short random
  // suffix. Good enough for an on-device key.
  const t = Date.now().toString(36);
  const r = Math.random().toString(36).slice(2, 8);
  return `mem_${t}_${r}`;
}

// ---------------------------------------------------------------------------
// Public storage API
// ---------------------------------------------------------------------------

export async function getMemorySnapshots(): Promise<MemorySnapshot[]> {
  return readSnapshots();
}

/**
 * Persist a snapshot, prepending it so newest is first. Returns the fully
 * formed snapshot (with the assigned id) so the caller can reference it.
 */
export async function saveMemorySnapshot(
  snap: Omit<MemorySnapshot, "id">,
): Promise<MemorySnapshot> {
  const all = await readSnapshots();
  const full: MemorySnapshot = { id: makeId(), ...snap };
  const next = [full, ...all].slice(0, MAX_SNAPSHOTS);
  await writeSnapshots(next);
  return full;
}

// ---------------------------------------------------------------------------
// LLM-driven summariser.
// We ask the model to emit strict JSON so we don't have to NLP-parse prose.
// Returned shape mirrors the snapshot fields, minus storage metadata which
// the caller fills in.
// ---------------------------------------------------------------------------

interface SummaryPayload {
  recap_tr: string;
  recap_en: string;
  topics: string[];
  weaknesses: string[];
}

const SUMMARIZER_SYSTEM = `You are summarizing a coaching conversation between Maya (English coach) and her Turkish-speaking student. Produce a concise recap suitable for future context. Include:
1. Main topics discussed
2. Student's level demonstrated
3. Mistakes the student kept making
4. Strengths shown
5. What was promised for next session (if anything)

Output JSON only:
{ "recap_tr": "...", "recap_en": "...", "topics": [...], "weaknesses": [...] }

Constraints:
- recap_tr: 100-250 words in Turkish, written for the student to read back.
- recap_en: 100-250 words in English from Maya's POV (first person "I"), to be fed into a future system prompt so future-Maya remembers the session.
- topics: 5-10 short noun phrases.
- weaknesses: short labels for grammar/vocab/pronunciation patterns the student missed.
Return ONLY the JSON. No code fence, no commentary.`;

function buildTranscriptForSummary(turns: ConversationTurn[]): string {
  // Keep each line short; the summariser only needs the gist. We label
  // user / Maya rather than user / assistant so the LLM keeps the persona
  // framing consistent.
  return turns
    .map((t) => `${t.role === "assistant" ? "Maya" : "Student"}: ${t.text}`)
    .join("\n");
}

/**
 * Strip code fences and stray prose so JSON.parse can swallow the model's
 * reply even when it disobeys the "JSON only" instruction. We look for the
 * first `{` and the last `}` and treat everything in between as JSON.
 */
function extractJsonBlob(raw: string): string | null {
  if (!raw) return null;
  const start = raw.indexOf("{");
  const end = raw.lastIndexOf("}");
  if (start === -1 || end === -1 || end <= start) return null;
  return raw.slice(start, end + 1);
}

async function summariseTurnsWithLLM(
  turns: ConversationTurn[],
): Promise<SummaryPayload | null> {
  if (turns.length === 0) return null;

  const transcript = buildTranscriptForSummary(turns);

  let raw = "";
  try {
    raw = await chatComplete(
      [
        { role: "system", content: SUMMARIZER_SYSTEM },
        {
          role: "user",
          content: `Here is the conversation to summarise:\n\n${transcript}`,
        },
      ],
      { maxTokens: 600 },
    );
  } catch {
    return null; // LLM unreachable — caller will fall back.
  }

  const blob = extractJsonBlob(raw);
  if (!blob) {
    // Distinguish "model returned no JSON-shaped output" from a parse error.
    // We log it because a sustained run of empty-blob outputs is a sign the
    // summariser prompt has drifted out of compliance with the provider.
    addBreadcrumb({
      category: "coach-memory",
      message: "summariseTurnsWithLLM: no JSON blob in model output",
      data: { rawLength: raw.length },
    });
    return null;
  }

  // parseSafe wraps JSON.parse so a malformed blob from the LLM no longer
  // throws SyntaxError up the call chain. Validator asserts the result is
  // an object (not array / primitive) — the field-level type guards below
  // remain authoritative for the actual fields.
  const parsed = parseSafe<Partial<SummaryPayload>>(
    blob,
    {},
    (x): x is Partial<SummaryPayload> =>
      x !== null && typeof x === "object" && !Array.isArray(x),
    { source: "coach-memory.summariseTurnsWithLLM" },
  );

  const recap_tr = typeof parsed.recap_tr === "string" ? parsed.recap_tr.trim() : "";
  const recap_en = typeof parsed.recap_en === "string" ? parsed.recap_en.trim() : "";
  if (!recap_tr && !recap_en) {
    // Either the model returned an empty object after a parse failure (we
    // fall through here because parseSafe gave us `{}`), or it returned a
    // technically-valid object missing the load-bearing fields. Both are
    // "no usable summary"; the snapshot save is skipped and the caller
    // falls back to silent truncation.
    addBreadcrumb({
      category: "coach-memory",
      message: "summariseTurnsWithLLM: missing recap_tr and recap_en after parse",
    });
    return null;
  }

  const topics = Array.isArray(parsed.topics)
    ? parsed.topics
        .filter((t): t is string => typeof t === "string" && t.trim().length > 0)
        .map((t) => t.trim())
        .slice(0, 10)
    : [];
  const weaknesses = Array.isArray(parsed.weaknesses)
    ? parsed.weaknesses
        .filter((w): w is string => typeof w === "string" && w.trim().length > 0)
        .map((w) => w.trim())
        .slice(0, 10)
    : [];

  return { recap_tr, recap_en, topics, weaknesses };
}

// ---------------------------------------------------------------------------
// Main entry: compactHistory.
//
// Contract:
//   in:  full ordered turn list (oldest -> newest)
//   out: { newSnapshots, recentTurns, systemMemoryPrefix }
//
//   - If turns.length <= summarizeOlderThanN, this is a no-op aside from
//     loading existing snapshots into the prefix.
//   - Otherwise: take everything except the last `keepRecentTurns` turns
//     as the "older" block, summarise it, persist, and return the recent
//     slice verbatim + a prefix built from ALL stored snapshots (old + new).
// ---------------------------------------------------------------------------

export async function compactHistory(
  turns: ConversationTurn[],
  opts?: {
    keepRecentTurns?: number;
    summarizeOlderThanN?: number;
  },
): Promise<{
  newSnapshots: MemorySnapshot[];
  recentTurns: ConversationTurn[];
  systemMemoryPrefix: string;
}> {
  const keepRecent = Math.max(1, opts?.keepRecentTurns ?? DEFAULT_KEEP_RECENT);
  const threshold = Math.max(
    keepRecent + 1,
    opts?.summarizeOlderThanN ?? DEFAULT_SUMMARIZE_THRESHOLD,
  );

  const safeTurns = Array.isArray(turns) ? turns.filter(isValidTurn) : [];

  // No compaction needed — short conversation. Just surface any existing
  // snapshots in the prefix so prior sessions still flavour the prompt.
  if (safeTurns.length <= threshold) {
    const existing = await readSnapshots();
    return {
      newSnapshots: [],
      recentTurns: safeTurns,
      systemMemoryPrefix: buildMemoryPromptPrefix(existing),
    };
  }

  const older = safeTurns.slice(0, safeTurns.length - keepRecent);
  const recent = safeTurns.slice(safeTurns.length - keepRecent);

  const summary = await summariseTurnsWithLLM(older);

  let saved: MemorySnapshot | null = null;
  if (summary) {
    const turnsFrom = older[0]?.timestamp ?? "";
    const turnsTo = older[older.length - 1]?.timestamp ?? "";
    try {
      saved = await saveMemorySnapshot({
        createdAt: new Date().toISOString(),
        recap_tr: summary.recap_tr,
        recap_en: summary.recap_en,
        topics: summary.topics,
        weaknessesObserved: summary.weaknesses,
        turnsFrom,
        turnsTo,
        originalTurnCount: older.length,
      });
    } catch {
      saved = null;
    }
  }

  // If summarisation or persistence failed, we still need to keep context
  // small — fall back to a silent truncation. The prefix below will use
  // whatever snapshots already exist so the LLM isn't completely amnesic.
  const allSnapshots = await readSnapshots();
  return {
    newSnapshots: saved ? [saved] : [],
    recentTurns: recent,
    systemMemoryPrefix: buildMemoryPromptPrefix(allSnapshots),
  };
}

function isValidTurn(t: unknown): t is ConversationTurn {
  if (!t || typeof t !== "object") return false;
  const r = (t as ConversationTurn).role;
  const text = (t as ConversationTurn).text;
  const ts = (t as ConversationTurn).timestamp;
  return (
    (r === "user" || r === "assistant") &&
    typeof text === "string" &&
    typeof ts === "string"
  );
}

// ---------------------------------------------------------------------------
// Prefix builder.
//
// We surface snapshots oldest-first so the LLM reads them as a timeline.
// Each line: "• topic1, topic2: <first ~180 chars of recap_en>"
//
// The prefix is intentionally compact: every token here is paid on every
// turn. We trust the LLM to handle 3-5 of these without confusion.
// ---------------------------------------------------------------------------

const PREFIX_RECAP_CHAR_LIMIT = 240;
const PREFIX_MAX_SNAPSHOTS = 5;

export function buildMemoryPromptPrefix(snapshots: MemorySnapshot[]): string {
  if (!Array.isArray(snapshots) || snapshots.length === 0) return "";

  // Snapshots are stored newest-first; for prefix-rendering we want a
  // chronological timeline, so we reverse a shallow copy.
  const recent = snapshots.slice(0, PREFIX_MAX_SNAPSHOTS).slice().reverse();

  const lines: string[] = ["Previous conversations summary:"];
  for (const snap of recent) {
    const topics = snap.topics.slice(0, 3).join(", ");
    const recapTrimmed = truncate(snap.recap_en, PREFIX_RECAP_CHAR_LIMIT);
    if (topics) {
      lines.push(`• ${topics}: ${recapTrimmed}`);
    } else {
      lines.push(`• ${recapTrimmed}`);
    }
  }

  // Surface accumulated weaknesses once at the end — the per-line snippet
  // already mentions them, but a consolidated tail makes it easier for the
  // LLM to pattern-match across sessions.
  const allWeak = new Set<string>();
  for (const snap of recent) {
    for (const w of snap.weaknessesObserved) {
      if (w) allWeak.add(w);
    }
  }
  if (allWeak.size > 0) {
    const weakList = Array.from(allWeak).slice(0, 6).join(", ");
    lines.push(`Recurring weak spots across these sessions: ${weakList}.`);
  }

  return lines.join("\n");
}

function truncate(s: string, limit: number): string {
  if (!s) return "";
  if (s.length <= limit) return s;
  // Trim at the last word boundary before the limit to avoid mid-word cuts.
  const head = s.slice(0, limit);
  const lastSpace = head.lastIndexOf(" ");
  const cut = lastSpace > limit * 0.7 ? head.slice(0, lastSpace) : head;
  return `${cut.trimEnd()}…`;
}

// ---------------------------------------------------------------------------
// Maintenance
// ---------------------------------------------------------------------------

/**
 * Drop snapshots whose createdAt is older than N days. Returns the number
 * of removed entries. Useful for a "wipe my old memory" setting or a
 * background hygiene job.
 */
export async function clearOldSnapshots(olderThanDays: number): Promise<number> {
  if (!Number.isFinite(olderThanDays) || olderThanDays <= 0) return 0;
  const all = await readSnapshots();
  const cutoff = Date.now() - olderThanDays * 24 * 60 * 60 * 1000;
  const kept = all.filter((s) => {
    const t = new Date(s.createdAt).getTime();
    if (!Number.isFinite(t)) return true; // keep malformed entries — clearAll exists for that
    return t >= cutoff;
  });
  if (kept.length === all.length) return 0;
  await writeSnapshots(kept);
  return all.length - kept.length;
}

export async function getMemoryStats(): Promise<{
  snapshotCount: number;
  totalTurnsCompressed: number;
  oldestSnapshotAt: string | null;
}> {
  const all = await readSnapshots();
  if (all.length === 0) {
    return {
      snapshotCount: 0,
      totalTurnsCompressed: 0,
      oldestSnapshotAt: null,
    };
  }
  const totalTurnsCompressed = all.reduce(
    (acc, s) => acc + (s.originalTurnCount || 0),
    0,
  );
  // Snapshots are newest-first, so the last entry is the oldest.
  const oldest = all[all.length - 1];
  return {
    snapshotCount: all.length,
    totalTurnsCompressed,
    oldestSnapshotAt: oldest?.createdAt ?? null,
  };
}
