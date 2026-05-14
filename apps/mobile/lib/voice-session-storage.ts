// Lafla — Voice session log persistence.
//
// Lightweight ring-buffer of completed voice-call summaries (NOT transcripts).
// We keep only meta (duration, turn count, optional topics) so we can power:
//   - the "recent voice sessions" panel in /freechat-voice
//   - the daily-minutes meter that gates free users at 5 min/day
//   - long-term streak / engagement analytics that the coach memory layer
//     reads opportunistically
//
// Transcripts themselves live in-memory only during a session and intentionally
// do NOT round-trip to disk here (privacy + avoid storage bloat). If the
// product later wants persisted transcripts, that's a separate key.
//
// Storage key:
//   lafla.voice.sessions -> JSON VoiceSessionLog[] (cap 50, newest first)
//
// All public methods swallow storage errors and return a sensible default
// (`[]` for the list, `0` for totals). Voice mode must never crash the app
// because AsyncStorage hiccupped.

import AsyncStorage from "@react-native-async-storage/async-storage";

const K_SESSIONS = "lafla.voice.sessions";
const MAX_SESSIONS = 50;

export interface VoiceSessionLog {
  id: string;
  startedAt: string; // ISO 8601
  durationSec: number;
  turnsCount: number;
  topics?: string[];
}

// ---------------------------------------------------------------------------
// Internal read/write. JSON.parse / JSON.stringify wrapped in try/catch so
// malformed legacy blobs degrade to an empty list instead of throwing.
// ---------------------------------------------------------------------------

async function readAll(): Promise<VoiceSessionLog[]> {
  try {
    const raw = await AsyncStorage.getItem(K_SESSIONS);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as VoiceSessionLog[];
    if (!Array.isArray(parsed)) return [];
    // Light shape normalisation — guards against older builds that may not
    // have written every field.
    return parsed
      .filter((s) => s && typeof s === "object" && typeof s.id === "string")
      .map((s) => ({
        id: s.id,
        startedAt: typeof s.startedAt === "string" ? s.startedAt : new Date(0).toISOString(),
        durationSec: Number.isFinite(s.durationSec) ? Math.max(0, s.durationSec) : 0,
        turnsCount: Number.isFinite(s.turnsCount) ? Math.max(0, s.turnsCount) : 0,
        topics: Array.isArray(s.topics)
          ? s.topics.filter((t) => typeof t === "string").slice(0, 8)
          : undefined,
      }));
  } catch {
    return [];
  }
}

async function writeAll(list: VoiceSessionLog[]): Promise<void> {
  try {
    await AsyncStorage.setItem(K_SESSIONS, JSON.stringify(list));
  } catch {
    // ignore — best-effort
  }
}

// ---------------------------------------------------------------------------
// Public API
// ---------------------------------------------------------------------------

/**
 * Save a completed voice session. Newest entries land at the front; the list
 * is capped at MAX_SESSIONS by dropping the oldest tail entries.
 */
export async function saveVoiceSession(log: VoiceSessionLog): Promise<void> {
  if (!log || !log.id) return;
  const all = await readAll();
  // De-dupe by id — re-saving the same session id overwrites the prior entry
  // (useful if a finalise() happens twice on the same logical call).
  const filtered = all.filter((s) => s.id !== log.id);
  const next = [log, ...filtered].slice(0, MAX_SESSIONS);
  await writeAll(next);
}

/**
 * Return the most-recent N sessions (newest first). Default 10.
 */
export async function getRecentVoiceSessions(
  limit = 10,
): Promise<VoiceSessionLog[]> {
  const all = await readAll();
  const n = Math.max(0, Math.min(MAX_SESSIONS, limit));
  return all.slice(0, n);
}

/**
 * Total minutes of voice usage across ALL stored sessions (rounded to one
 * decimal place). Used by the premium-gate to bill free users 5 min/day.
 *
 * NOTE: today-only minutes are computed inline by the caller because we
 * don't want to bake the date filter into the storage layer — the screen
 * already knows what "today" means.
 */
export async function getTotalVoiceMinutes(): Promise<number> {
  const all = await readAll();
  const totalSec = all.reduce((acc, s) => acc + (s.durationSec || 0), 0);
  return Math.round((totalSec / 60) * 10) / 10;
}

/**
 * Minutes used today (local date), useful for daily caps. Returns a float
 * rounded to 1 decimal (e.g. 2.7).
 */
export async function getVoiceMinutesToday(): Promise<number> {
  const all = await readAll();
  const todayKey = (() => {
    const d = new Date();
    const yyyy = d.getFullYear();
    const mm = String(d.getMonth() + 1).padStart(2, "0");
    const dd = String(d.getDate()).padStart(2, "0");
    return `${yyyy}-${mm}-${dd}`;
  })();

  const totalSec = all.reduce((acc, s) => {
    const t = new Date(s.startedAt).getTime();
    if (!Number.isFinite(t)) return acc;
    const d = new Date(t);
    const yyyy = d.getFullYear();
    const mm = String(d.getMonth() + 1).padStart(2, "0");
    const dd = String(d.getDate()).padStart(2, "0");
    const key = `${yyyy}-${mm}-${dd}`;
    return key === todayKey ? acc + (s.durationSec || 0) : acc;
  }, 0);

  return Math.round((totalSec / 60) * 10) / 10;
}
