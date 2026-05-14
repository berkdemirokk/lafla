// Lafla — Mistake tracker.
//
// Persistent layer on top of mistake-patterns. Counts how many times the user
// has repeated each mistake, stores up to 3 verbatim examples per pattern,
// and tracks resolution (3 correct attempts in a row → resolved).
//
// Storage:
//   key:  lafla.mistakes.tracked
//   shape: Record<patternId, TrackedMistake>
//
// Why a single JSON blob (vs one row per mistake):
// - With 40+ patterns the blob is still <8 KB even for power users.
// - AsyncStorage is slow; one read/write per session beats N round-trips.
// - The drill generator reads the WHOLE state to rank, so a map is natural.

import AsyncStorage from "@react-native-async-storage/async-storage";
import { detectMistakes, getPattern } from "./mistake-patterns";

const K_MISTAKES = "lafla.mistakes.tracked";
const MAX_EXAMPLES_PER_MISTAKE = 3;
const CONSECUTIVE_CORRECT_TO_RESOLVE = 3;

export interface TrackedMistake {
  patternId: string;
  count: number;
  firstSeenAt: string;
  lastSeenAt: string;
  examples: string[];
  resolved: boolean;
  /**
   * Internal counter for consecutive correct drill answers. Hits
   * CONSECUTIVE_CORRECT_TO_RESOLVE → flips `resolved` true.
   * Persisted so progress survives app restarts.
   */
  consecutiveCorrect: number;
}

type Store = Record<string, TrackedMistake>;

// ---------------------------------------------------------------------------
// Read / write the whole map atomically. The map is small enough that we
// don't bother with per-key writes.
// ---------------------------------------------------------------------------

async function readStore(): Promise<Store> {
  try {
    const raw = await AsyncStorage.getItem(K_MISTAKES);
    if (!raw) return {};
    const parsed = JSON.parse(raw) as Store;
    return parsed && typeof parsed === "object" ? parsed : {};
  } catch {
    return {};
  }
}

async function writeStore(store: Store): Promise<void> {
  try {
    await AsyncStorage.setItem(K_MISTAKES, JSON.stringify(store));
  } catch {
    // Best-effort — never block the chat path on storage failure.
  }
}

// ---------------------------------------------------------------------------
// recordUserText
// Public entry — called from freechat/scenario after every user turn.
// Runs the detector, upserts each hit into the store, and reports newly
// surfaced patterns so callers can mirror them into coach.weaknesses[].
// ---------------------------------------------------------------------------

export async function recordUserText(text: string): Promise<{
  newMistakes: string[];
  totalActive: number;
}> {
  const hits = detectMistakes(text);
  if (hits.length === 0) {
    const store = await readStore();
    return { newMistakes: [], totalActive: countActive(store) };
  }

  const store = await readStore();
  const now = new Date().toISOString();
  const newMistakes: string[] = [];

  for (const hit of hits) {
    const existing = store[hit.patternId];
    if (!existing) {
      // First time seeing this mistake — promote to weakness list.
      store[hit.patternId] = {
        patternId: hit.patternId,
        count: 1,
        firstSeenAt: now,
        lastSeenAt: now,
        examples: [hit.matchedSubstring],
        resolved: false,
        consecutiveCorrect: 0,
      };
      newMistakes.push(hit.patternId);
    } else {
      // Repeat. Bump count, refresh lastSeen, and break any active streak
      // because the user just made the mistake again — they're not "resolving".
      const examples = existing.examples.slice();
      if (
        !examples.some(
          (e) => e.toLowerCase() === hit.matchedSubstring.toLowerCase(),
        ) &&
        examples.length < MAX_EXAMPLES_PER_MISTAKE
      ) {
        examples.push(hit.matchedSubstring);
      }
      store[hit.patternId] = {
        ...existing,
        count: existing.count + 1,
        lastSeenAt: now,
        examples,
        resolved: false,
        consecutiveCorrect: 0,
      };
    }
  }

  await writeStore(store);
  return { newMistakes, totalActive: countActive(store) };
}

// ---------------------------------------------------------------------------
// Listing / lookup helpers.
// ---------------------------------------------------------------------------

export async function getActiveMistakes(): Promise<TrackedMistake[]> {
  const store = await readStore();
  return Object.values(store)
    .filter((m) => !m.resolved && getPattern(m.patternId))
    .sort((a, b) => {
      // Rank by severity (pattern weight × count), then recency.
      const aWeight = getPattern(a.patternId)?.weight ?? 1;
      const bWeight = getPattern(b.patternId)?.weight ?? 1;
      const aScore = aWeight * a.count;
      const bScore = bWeight * b.count;
      if (aScore !== bScore) return bScore - aScore;
      return (
        new Date(b.lastSeenAt).getTime() - new Date(a.lastSeenAt).getTime()
      );
    });
}

export async function getTopMistakes(n: number): Promise<TrackedMistake[]> {
  const active = await getActiveMistakes();
  return active.slice(0, Math.max(0, n));
}

// ---------------------------------------------------------------------------
// markCorrectAttempt
// Called from the drill screen when the user solves a drill exercise for
// a given pattern. Increments the consecutive-correct counter; on threshold
// the mistake is auto-resolved (won't surface in future drills).
// ---------------------------------------------------------------------------

export async function markCorrectAttempt(patternId: string): Promise<void> {
  const store = await readStore();
  const existing = store[patternId];
  if (!existing) return; // nothing to mark
  const nextStreak = existing.consecutiveCorrect + 1;
  const resolved = nextStreak >= CONSECUTIVE_CORRECT_TO_RESOLVE;
  store[patternId] = {
    ...existing,
    consecutiveCorrect: nextStreak,
    resolved,
    lastSeenAt: new Date().toISOString(),
  };
  await writeStore(store);
}

/**
 * Called when the user fumbles the drill for `patternId`. Resets the streak
 * so they need a fresh CONSECUTIVE_CORRECT_TO_RESOLVE run to graduate.
 */
export async function markIncorrectAttempt(patternId: string): Promise<void> {
  const store = await readStore();
  const existing = store[patternId];
  if (!existing) return;
  store[patternId] = {
    ...existing,
    consecutiveCorrect: 0,
    resolved: false,
    lastSeenAt: new Date().toISOString(),
  };
  await writeStore(store);
}

/**
 * Manual clear for the settings screen or a "I understand it now" tap.
 * Deletes the row entirely so it never resurfaces in the active list.
 */
export async function clearMistake(patternId: string): Promise<void> {
  const store = await readStore();
  if (!store[patternId]) return;
  delete store[patternId];
  await writeStore(store);
}

/** Wipe everything — used by "Reset Coach" in settings. */
export async function clearAllMistakes(): Promise<void> {
  try {
    await AsyncStorage.removeItem(K_MISTAKES);
  } catch {
    // ignore
  }
}

// ---------------------------------------------------------------------------
// Internal helpers.
// ---------------------------------------------------------------------------

function countActive(store: Store): number {
  return Object.values(store).filter(
    (m) => !m.resolved && getPattern(m.patternId),
  ).length;
}

/**
 * Diagnostic — returns the raw store for the journal/profile screens that
 * want to show "all mistakes you've made", including resolved ones.
 */
export async function getAllTrackedMistakes(): Promise<TrackedMistake[]> {
  const store = await readStore();
  return Object.values(store);
}
