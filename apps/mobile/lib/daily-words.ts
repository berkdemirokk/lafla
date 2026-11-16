// Lafla — Daily 10 words.
//
// Every local calendar day the learner gets DAILY_WORD_COUNT new words at
// their CEFR level, drawn from the vocab_tile exercises already bundled in
// the lesson packs (~12k tiles). Words the learner has met before — in a
// previous daily set or anywhere in the SRS review queue — are skipped, so
// the set is always new material. Finishing the set feeds every word into
// the existing SRS queue and counts toward the streak.

import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Notifications from "expo-notifications";

import type { BundledLesson } from "./engine";
import type { CefrLevel } from "./cefr-level";
import { CEFR_LEVELS, getCefrLevel } from "./cefr-level";
import { localDayKey } from "./day-key";
import { enqueueVocab, getQueuedWordKeys } from "./srs-vocab";
import { bumpDailyActivity, bumpStreak, bumpXp } from "./local-progress";
import { isNotificationsEnabled } from "./notifications";
import { trackEvent } from "./analytics";
import { t } from "./i18n";

export const DAILY_WORD_COUNT = 10;
export const DAILY_WORDS_XP = 10;

const K_STATE = "lafla.dailyWords.state.v1";
const K_SEEN = "lafla.dailyWords.seen.v1";
const ID_WORDS_NUDGE = "lafla.dailyWords.nudge";
const NUDGE_HOUR = 20;
const NUDGE_MINUTE = 30;
const DEFAULT_LEVEL: CefrLevel = "A2";
const MAX_WORDS_IN_TILE = 4;
const MAX_TILE_LENGTH = 32;

export interface DailyWord {
  /** Lowercased English word — stable across lessons. */
  key: string;
  word: string;
  translation: string;
  example?: string;
  exampleTr?: string;
  cefr: CefrLevel;
  lessonId: string;
  lessonTitle: string;
}

interface DailyWordsState {
  dayKey: string;
  keys: string[];
  completedAt?: string;
  correctCount?: number;
}

export interface DailyWordsToday {
  dayKey: string;
  words: DailyWord[];
  completed: boolean;
  correctCount: number | null;
}

// ─── pool ─────────────────────────────────────────────────────────────

function isCefr(value: unknown): value is CefrLevel {
  return typeof value === "string" && (CEFR_LEVELS as string[]).includes(value);
}

function str(value: unknown): string | undefined {
  return typeof value === "string" && value.trim() ? value.trim() : undefined;
}

/** "Bilet" → "bilet" for lowercase English words; leaves acronyms ("ATM") alone. */
function matchCase(word: string, translation: string): string {
  if (!/^[a-z]/.test(word)) return translation;
  const [first, second] = translation;
  if (!first || !second || second !== second.toLocaleLowerCase("tr")) return translation;
  return first.toLocaleLowerCase("tr") + translation.slice(1);
}

/** Extract unique, short vocab tiles from bundled lessons. First occurrence wins. */
export function buildWordPool(lessons: ReadonlyArray<BundledLesson>): DailyWord[] {
  const byKey = new Map<string, DailyWord>();
  for (const lesson of lessons) {
    for (const ex of lesson.exercises) {
      if (ex["type"] !== "vocab_tile") continue;
      const word = str(ex["word_or_phrase"]);
      const translation = str(ex["tr_translation"]);
      const cefr = ex["cefr_band"];
      if (!word || !translation || !isCefr(cefr)) continue;
      if (word.length > MAX_TILE_LENGTH) continue;
      if (word.split(/\s+/).length > MAX_WORDS_IN_TILE) continue;
      const key = word.toLowerCase();
      if (byKey.has(key)) continue;
      byKey.set(key, {
        key,
        word,
        translation: matchCase(word, translation),
        example: str(ex["example"]),
        exampleTr: str(ex["example_tr"]),
        cefr,
        lessonId: lesson.id,
        lessonTitle: lesson.title,
      });
    }
  }
  return Array.from(byKey.values());
}

let cachedPool: DailyWord[] | null = null;

function getPool(): DailyWord[] {
  if (!cachedPool) {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const { allLessons } = require("../data/lessons") as {
      allLessons: ReadonlyArray<BundledLesson>;
    };
    cachedPool = buildWordPool(allLessons);
  }
  return cachedPool;
}

// ─── selection ────────────────────────────────────────────────────────

function hashString(input: string): number {
  let h = 5381;
  for (let i = 0; i < input.length; i += 1) {
    h = ((h << 5) + h + input.charCodeAt(i)) | 0;
  }
  return h >>> 0;
}

function seededRandom(seed: number): () => number {
  let a = seed || 1;
  return () => {
    a = (a + 0x6d2b79f5) | 0;
    let r = Math.imul(a ^ (a >>> 15), 1 | a);
    r = (r + Math.imul(r ^ (r >>> 7), 61 | r)) ^ r;
    return ((r ^ (r >>> 14)) >>> 0) / 4294967296;
  };
}

function seededShuffle<T>(items: T[], seed: string): T[] {
  const out = items.slice();
  const rand = seededRandom(hashString(seed));
  for (let i = out.length - 1; i > 0; i -= 1) {
    const j = Math.floor(rand() * (i + 1));
    [out[i], out[j]] = [out[j]!, out[i]!];
  }
  return out;
}

/** Level first, then the level below, then above, widening outward. */
function levelOrder(level: CefrLevel): CefrLevel[] {
  const idx = CEFR_LEVELS.indexOf(level);
  const order: CefrLevel[] = [level];
  for (let d = 1; d < CEFR_LEVELS.length; d += 1) {
    const below = CEFR_LEVELS[idx - d];
    const above = CEFR_LEVELS[idx + d];
    if (below) order.push(below);
    if (above) order.push(above);
  }
  return order;
}

/**
 * Deterministic pick: the same pool, level, exclusions and day always give
 * the same words, so reopening the app never reshuffles today's set.
 */
export function pickDailyWords(
  pool: ReadonlyArray<DailyWord>,
  opts: {
    level: CefrLevel;
    exclude: ReadonlySet<string>;
    dayKey: string;
    count?: number;
  },
): DailyWord[] {
  const count = opts.count ?? DAILY_WORD_COUNT;
  const picked: DailyWord[] = [];
  for (const level of levelOrder(opts.level)) {
    if (picked.length >= count) break;
    const candidates = pool.filter(
      (w) => w.cefr === level && !opts.exclude.has(w.key),
    );
    const shuffled = seededShuffle(candidates, `${opts.dayKey}:${level}`);
    picked.push(...shuffled.slice(0, count - picked.length));
  }
  return picked;
}

/** Three wrong English options for a multiple-choice question, same CEFR band when possible. */
export function pickDistractors(
  target: DailyWord,
  pool: ReadonlyArray<DailyWord>,
  count = 3,
): string[] {
  const sameBand = pool.filter(
    (w) => w.key !== target.key && w.cefr === target.cefr && w.translation !== target.translation,
  );
  const source = sameBand.length >= count ? sameBand : pool.filter((w) => w.key !== target.key);
  return seededShuffle(source, `distractor:${target.key}`)
    .slice(0, count)
    .map((w) => w.word);
}

export function getDistractorsFor(target: DailyWord, count = 3): string[] {
  return pickDistractors(target, getPool(), count);
}

// ─── persistence ──────────────────────────────────────────────────────

async function readState(): Promise<DailyWordsState | null> {
  try {
    const raw = await AsyncStorage.getItem(K_STATE);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as DailyWordsState;
    if (typeof parsed.dayKey !== "string" || !Array.isArray(parsed.keys)) return null;
    return parsed;
  } catch {
    return null;
  }
}

async function readSeen(): Promise<Set<string>> {
  try {
    const raw = await AsyncStorage.getItem(K_SEEN);
    const parsed = raw ? (JSON.parse(raw) as unknown) : [];
    return new Set(Array.isArray(parsed) ? parsed.filter((k) => typeof k === "string") : []);
  } catch {
    return new Set();
  }
}

/** Today's set — created on first call of the day, then stable until local midnight. */
export async function getTodayWords(now = new Date()): Promise<DailyWordsToday> {
  const dayKey = localDayKey(now);
  const pool = getPool();
  const byKey = new Map(pool.map((w) => [w.key, w]));
  const existing = await readState();

  if (existing && existing.dayKey === dayKey) {
    const words = existing.keys
      .map((k) => byKey.get(k))
      .filter((w): w is DailyWord => Boolean(w));
    if (words.length > 0) {
      return {
        dayKey,
        words,
        completed: Boolean(existing.completedAt),
        correctCount: existing.correctCount ?? null,
      };
    }
  }

  const [level, seen, queued] = await Promise.all([
    getCefrLevel().catch(() => null),
    readSeen(),
    getQueuedWordKeys().catch(() => new Set<string>()),
  ]);
  const exclude = new Set<string>([...seen, ...queued]);
  const words = pickDailyWords(pool, {
    level: level ?? DEFAULT_LEVEL,
    exclude,
    dayKey,
  });
  const state: DailyWordsState = { dayKey, keys: words.map((w) => w.key) };
  await AsyncStorage.setItem(K_STATE, JSON.stringify(state));
  return { dayKey, words, completed: false, correctCount: null };
}

/**
 * Finish today's set: every word goes into the SRS queue (missed ones with a
 * short half-life), words are marked seen, and the day counts for streak/XP.
 * Idempotent — a second call on the same day changes nothing.
 */
export async function completeTodayWords(
  results: ReadonlyArray<{ key: string; correct: boolean }>,
  now = new Date(),
): Promise<{ correctCount: number; alreadyCompleted: boolean }> {
  const today = await getTodayWords(now);
  if (today.completed) {
    return { correctCount: today.correctCount ?? 0, alreadyCompleted: true };
  }
  const correctByKey = new Map(results.map((r) => [r.key, r.correct]));
  let correctCount = 0;
  for (const word of today.words) {
    const correct = correctByKey.get(word.key) ?? false;
    if (correct) correctCount += 1;
    await enqueueVocab({
      word: word.word,
      translation: word.translation,
      source_lesson_id: word.lessonId,
      source_lesson_title: t("dailyWords.source_title"),
      was_correct: correct,
    });
  }

  const seen = await readSeen();
  for (const word of today.words) seen.add(word.key);
  await AsyncStorage.setItem(K_SEEN, JSON.stringify(Array.from(seen)));
  const state: DailyWordsState = {
    dayKey: today.dayKey,
    keys: today.words.map((w) => w.key),
    completedAt: now.toISOString(),
    correctCount,
  };
  await AsyncStorage.setItem(K_STATE, JSON.stringify(state));

  await bumpDailyActivity(DAILY_WORDS_XP);
  await bumpXp(DAILY_WORDS_XP);
  await bumpStreak();
  await cancelDailyWordsNudge();
  void trackEvent("daily_words_completed", {
    correct: correctCount,
    total: today.words.length,
  }).catch(() => {});
  return { correctCount, alreadyCompleted: false };
}

// ─── evening nudge ────────────────────────────────────────────────────

async function cancelDailyWordsNudge(): Promise<void> {
  try {
    await Notifications.cancelScheduledNotificationAsync(ID_WORDS_NUDGE);
  } catch {
    // ignore
  }
}

/**
 * One-shot 20:30 reminder for today when the set is unfinished. Only runs
 * if the user already opted into notifications — never prompts.
 */
export async function syncDailyWordsNudge(completed: boolean, now = new Date()): Promise<void> {
  await cancelDailyWordsNudge();
  if (completed) return;
  if (!(await isNotificationsEnabled().catch(() => false))) return;
  const fireAt = new Date(now);
  fireAt.setHours(NUDGE_HOUR, NUDGE_MINUTE, 0, 0);
  if (fireAt.getTime() <= now.getTime()) return;
  try {
    await Notifications.scheduleNotificationAsync({
      identifier: ID_WORDS_NUDGE,
      content: {
        title: t("dailyWords.nudge_title"),
        body: t("dailyWords.nudge_body", { count: String(DAILY_WORD_COUNT) }),
        sound: "default",
        data: { deepLink: "lafla://daily-words" },
      },
      trigger: {
        type: Notifications.SchedulableTriggerInputTypes.DATE,
        date: fireAt,
      },
    });
  } catch {
    // best effort
  }
}
