// Lafla — Visa Interview Question Bank progress storage.
// Tracks which questions a learner has marked as practiced.
// Storage key: lafla.visa.practiced (string[] of question IDs).

import AsyncStorage from "@react-native-async-storage/async-storage";

import {
  VISA_QUESTIONS,
  type VisaCountry,
} from "../data/visa-questions";

const K_PRACTICED = "lafla.visa.practiced";

async function readPracticed(): Promise<string[]> {
  try {
    const raw = await AsyncStorage.getItem(K_PRACTICED);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed)
      ? (parsed.filter((x) => typeof x === "string") as string[])
      : [];
  } catch {
    return [];
  }
}

async function writePracticed(ids: string[]): Promise<void> {
  try {
    await AsyncStorage.setItem(K_PRACTICED, JSON.stringify(ids));
  } catch {
    // ignore — anonymous-mode storage is best-effort
  }
}

/**
 * Mark a visa question as practiced. Idempotent — repeat calls are no-ops.
 */
export async function markQuestionPracticed(qId: string): Promise<void> {
  const current = await readPracticed();
  if (current.includes(qId)) return;
  current.push(qId);
  await writePracticed(current);
}

/**
 * Returns the list of question IDs the user has practiced.
 */
export async function getPracticedQuestions(): Promise<string[]> {
  return readPracticed();
}

/**
 * Per-country progress for the progress bar in the visa-bank screen.
 */
export async function getVisaProgress(
  country: VisaCountry,
): Promise<{ practiced: number; total: number }> {
  const practiced = new Set(await readPracticed());
  const inCountry = VISA_QUESTIONS.filter((q) => q.country === country);
  const total = inCountry.length;
  const practicedCount = inCountry.filter((q) => practiced.has(q.id)).length;
  return { practiced: practicedCount, total };
}

/**
 * Remove a question from practiced — used by the detail screen's undo path.
 */
export async function unmarkQuestionPracticed(qId: string): Promise<void> {
  const current = await readPracticed();
  const next = current.filter((id) => id !== qId);
  if (next.length === current.length) return;
  await writePracticed(next);
}

/**
 * Clear all visa-bank progress. Wired from the settings/reset flow.
 */
export async function clearVisaProgress(): Promise<void> {
  await AsyncStorage.removeItem(K_PRACTICED);
}
