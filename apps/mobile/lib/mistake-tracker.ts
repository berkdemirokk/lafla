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
import { trackEvent } from "./analytics";
import { detectMistakes, getPattern } from "./mistake-patterns";
import { isObject, parseSafe } from "./json-safe";

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
  /** Recent occurrence timestamps used by the rolling Mistake DNA window. */
  recentOccurrences?: string[];
}

type Store = Record<string, TrackedMistake>;
let mistakeWriteChain: Promise<unknown> = Promise.resolve();

function enqueueMistakeWrite<T>(work: () => Promise<T>): Promise<T> {
  const job = mistakeWriteChain.then(work, work);
  mistakeWriteChain = job.catch(() => undefined);
  return job;
}

// ---------------------------------------------------------------------------
// Read / write the whole map atomically. The map is small enough that we
// don't bother with per-key writes.
// ---------------------------------------------------------------------------

async function readStore(): Promise<Store> {
  try {
    const raw = await AsyncStorage.getItem(K_MISTAKES);
    // Validator: outer object. Per-entry shape is not deep-checked because
    // mistake records have ~6 fields and the listing helpers already
    // tolerate undefined `weight` / `examples` (they default in code).
    return parseSafe<Store>(raw, {}, isObject, {
      source: "mistake-tracker.readStore",
    });
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
  return enqueueMistakeWrite(() => recordUserTextInner(text));
}

async function recordUserTextInner(text: string): Promise<{
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
        recentOccurrences: [now],
      };
      newMistakes.push(hit.patternId);
      void trackEvent("mistake_detected", {
        patternId: hit.patternId,
        firstTime: true,
      }).catch(() => {});
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
        recentOccurrences: [...(existing.recentOccurrences ?? []), now].slice(
          -30,
        ),
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
  await mistakeWriteChain.catch(() => undefined);
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

export function markCorrectAttempt(patternId: string): Promise<void> {
  return enqueueMistakeWrite(() => markCorrectAttemptInner(patternId));
}

async function markCorrectAttemptInner(patternId: string): Promise<void> {
  const store = await readStore();
  const existing = store[patternId];
  if (!existing) return; // nothing to mark
  const nextStreak = existing.consecutiveCorrect + 1;
  const resolved = nextStreak >= CONSECUTIVE_CORRECT_TO_RESOLVE;
  store[patternId] = {
    ...existing,
    consecutiveCorrect: nextStreak,
    resolved,
  };
  await writeStore(store);
}

/**
 * Called when the user fumbles the drill for `patternId`. Resets the streak
 * so they need a fresh CONSECUTIVE_CORRECT_TO_RESOLVE run to graduate.
 */
export function markIncorrectAttempt(patternId: string): Promise<void> {
  return enqueueMistakeWrite(() => markIncorrectAttemptInner(patternId));
}

async function markIncorrectAttemptInner(patternId: string): Promise<void> {
  const store = await readStore();
  const existing = store[patternId];
  if (!existing) return;
  store[patternId] = {
    ...existing,
    consecutiveCorrect: 0,
    resolved: false,
    lastSeenAt: new Date().toISOString(),
    recentOccurrences: [
      ...(existing.recentOccurrences ?? []),
      new Date().toISOString(),
    ].slice(-30),
  };
  await writeStore(store);
}

/**
 * Manual clear for the settings screen or a "I understand it now" tap.
 * Deletes the row entirely so it never resurfaces in the active list.
 */
export function clearMistake(patternId: string): Promise<void> {
  return enqueueMistakeWrite(() => clearMistakeInner(patternId));
}

async function clearMistakeInner(patternId: string): Promise<void> {
  const store = await readStore();
  if (!store[patternId]) return;
  delete store[patternId];
  await writeStore(store);
}

/** Wipe everything — used by "Reset Coach" in settings. */
export function clearAllMistakes(): Promise<void> {
  return enqueueMistakeWrite(async () => {
    try {
      await AsyncStorage.removeItem(K_MISTAKES);
    } catch {
      // ignore
    }
  });
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
