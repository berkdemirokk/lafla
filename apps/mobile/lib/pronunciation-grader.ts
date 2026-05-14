// Lafla — Pronunciation grader.
//
// Compares what the speech recognizer heard against the target phrase
// at the word level. Reuses Levenshtein similarity from lib/engine.ts
// so the scoring behaves consistently with text-mode evaluators.
//
// Bands (per word):
//   sim >= 0.85 → "good"
//   sim >= 0.50 → "okay"
//   else        → "miss"
//
// Overall score = mean of per-word similarities, mapped to 0..100.
//
// The phoneme-level grader (see ./phoneme-grader) is a more granular
// add-on: it returns per-IPA-symbol bands plus Turkish coaching tips,
// and is exposed below as gradePronunciationWithPhonemes(). The
// word-level grader in this file remains the simple fallback callers
// can use when phoneme detail isn't needed.

import { normalize, similarity } from "./engine";
import {
  analyzePhonemes,
  type PhonemeAnalysisResult,
} from "./phoneme-grader";

export type PronunciationBand = "good" | "okay" | "miss";

export interface WordBand {
  word: string;
  band: PronunciationBand;
}

export interface PronunciationGrade {
  score: number;
  bandsByWord: WordBand[];
}

function tokenize(s: string): string[] {
  // normalize() lowercases, strips Turkish diacritics, drops punctuation,
  // and collapses whitespace — exactly what we want before splitting.
  const cleaned = normalize(s);
  if (!cleaned) return [];
  return cleaned.split(" ").filter(Boolean);
}

function bandFor(sim: number): PronunciationBand {
  if (sim >= 0.85) return "good";
  if (sim >= 0.5) return "okay";
  return "miss";
}

/**
 * Grade a heard transcription against a target phrase.
 *
 * The grader walks the target word-by-word. For each target word it
 * looks at the corresponding position in the heard tokens (if any) and
 * scores by character-level similarity. Missing/extra heard tokens
 * count as "miss" against the target word at that position.
 *
 * Target word order is the source of truth — we report bands for each
 * target word, never for extra heard words. This keeps the UI stable
 * across recognition jitter.
 */
export function gradePronunciation(
  target: string,
  heard: string,
): PronunciationGrade {
  const targetWords = tokenize(target);
  const heardWords = tokenize(heard);

  if (targetWords.length === 0) {
    return { score: 0, bandsByWord: [] };
  }

  const bandsByWord: WordBand[] = [];
  let sum = 0;

  for (let i = 0; i < targetWords.length; i++) {
    const t = targetWords[i]!;
    const h = heardWords[i];
    const sim = h ? similarity(t, h) : 0;
    sum += sim;
    bandsByWord.push({ word: t, band: bandFor(sim) });
  }

  const mean = sum / targetWords.length;
  const score = Math.round(mean * 100);

  return { score, bandsByWord };
}

/**
 * Phoneme-level grading. Wrapper around analyzePhonemes() that returns a
 * Promise so callers can drop it in alongside async STT pipelines without
 * branching on sync/async.
 *
 * The word-level gradePronunciation() above remains the simple fallback
 * for callers that only need overall + per-word bands.
 */
export async function gradePronunciationWithPhonemes(
  target: string,
  spoken: string,
): Promise<PhonemeAnalysisResult> {
  return analyzePhonemes(target, spoken);
}

export type { PhonemeAnalysisResult } from "./phoneme-grader";
