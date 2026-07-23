// Lafla — Pronunciation score history (FIFO ring buffer).
//
// 2026-05-23 — Created as part of CEFR audit fix #2. The IELTS Band
// Estimator previously approximated pronunciation as `fluency - 0.25`
// because there was no place to read the phoneme-grader output from.
// That placeholder was the single biggest weakness in the band-score
// credibility — a Türk user practicing for IELTS Speaking expects the
// pronunciation column to reflect *their* actual phonemic accuracy, not
// a flat subtraction from fluency.
//
// This module gives PronouncePhrase + SpeechShadowing a write path
// (push their phoneme-grader-derived score) and the band estimator a
// read path (mean over the last N scores). Storage is AsyncStorage —
// local, fast, survives reinstall via iOS backup.
//
// Ring-buffer cap of 30 keeps the average reactive without one bad day
// poisoning the estimate forever. If we ever need long-term phonemic
// progression for analytics, the per-event timestamps survive.

import AsyncStorage from "@react-native-async-storage/async-storage";

import { isObject, parseSafe } from "./json-safe";

const K_PRON_SCORES = "lafla.pron.scores";
const MAX_SCORES = 30;

export interface PronScoreEntry {
  /** Phoneme-grader score, 0..100. */
  score: number;
  /** ISO timestamp of when the user produced this utterance. */
  at: string;
  /** Optional source — useful for analytics later. */
  source?: "pronounce_phrase" | "speech_shadowing";
}

function isPronScoreEntry(x: unknown): x is PronScoreEntry {
  return (
    isObject(x) &&
    typeof (x as { score?: unknown }).score === "number" &&
    typeof (x as { at?: unknown }).at === "string"
  );
}

async function readList(): Promise<PronScoreEntry[]> {
  try {
    const raw = await AsyncStorage.getItem(K_PRON_SCORES);
    if (!raw) return [];
    const parsed = parseSafe<unknown[]>(raw, [], Array.isArray, {
      source: "pron-history.readList",
    });
    return parsed.filter(isPronScoreEntry);
  } catch {
    return [];
  }
}

async function writeList(list: PronScoreEntry[]): Promise<void> {
  try {
    await AsyncStorage.setItem(K_PRON_SCORES, JSON.stringify(list));
  } catch {
    // Best effort.
  }
}

/**
 * Append a new pronunciation score. Drops the oldest entry when the ring
 * is full so we always show "what the user sounds like *now*", not "what
 * they sounded like on day 1".
 *
 * Fire-and-forget at the call site — never blocks UI.
 */
export async function pushPronScore(
  score: number,
  source?: PronScoreEntry["source"],
): Promise<void> {
  if (!Number.isFinite(score) || score < 0 || score > 100) return;
  const list = await readList();
  list.push({ score, at: new Date().toISOString(), source });
  while (list.length > MAX_SCORES) list.shift();
  await writeList(list);
}

/**
 * Mean of all stored scores, or null when none yet. Caller can decide
 * whether to fall back to a fluency-derived approximation.
 */
export async function getPronAvg(): Promise<number | null> {
  const list = await readList();
  if (list.length === 0) return null;
  return list.reduce((s, x) => s + x.score, 0) / list.length;
}

/**
 * Count of stored scores. Used by the band estimator to gate the
 * pronunciation component — under 3 samples, the average is too noisy
 * to display alongside the other rubric columns.
 */
export async function getPronCount(): Promise<number> {
  const list = await readList();
  return list.length;
}

/** Timestamped scores for honest weekly comparisons and progress charts. */
export async function getPronHistory(): Promise<PronScoreEntry[]> {
  return readList();
}

/**
 * Debug / settings → "Reset progress" entry point.
 */
export async function clearPronHistory(): Promise<void> {
  try {
    await AsyncStorage.removeItem(K_PRON_SCORES);
  } catch {
    // ignore
  }
}
