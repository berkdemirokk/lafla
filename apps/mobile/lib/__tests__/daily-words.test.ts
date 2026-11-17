import AsyncStorage from "@react-native-async-storage/async-storage";

jest.mock("expo-notifications", () => ({
  cancelScheduledNotificationAsync: jest.fn(async () => {}),
  scheduleNotificationAsync: jest.fn(async () => "id"),
  SchedulableTriggerInputTypes: { DATE: "date" },
}));

import * as Notifications from "expo-notifications";
import {
  DAILY_WORD_COUNT,
  buildWordPool,
  completeTodayWords,
  getTodayWords,
  pickDailyWords,
  pickDistractors,
  syncDailyWordsNudge,
  type DailyWord,
} from "../daily-words";
import { setCefrLevel } from "../cefr-level";
import { getQueuedWordKeys, getVocabStats } from "../srs-vocab";
import { getLocalProfile } from "../local-progress";
import type { BundledLesson } from "../engine";

function tile(word: string, cefr: string, tr = "çeviri") {
  return { type: "vocab_tile", cefr_band: cefr, word_or_phrase: word, tr_translation: tr };
}

function lesson(id: string, exercises: Array<Record<string, unknown>>): BundledLesson {
  return {
    id,
    skill_id: "test",
    index: 0,
    title: id,
    description: "",
    estimated_minutes: 1,
    exercises,
  };
}

function word(key: string, cefr: DailyWord["cefr"]): DailyWord {
  return {
    key,
    word: key,
    translation: `${key}-tr`,
    cefr,
    lessonId: "l",
    lessonTitle: "l",
  };
}

describe("daily words — pool and selection", () => {
  it("dedupes words across lessons and drops long or unlabeled tiles", () => {
    const pool = buildWordPool([
      lesson("a", [
        tile("Coffee", "A1"),
        tile("coffee", "A2"),
        tile("this phrase has far too many words", "B1"),
        { type: "vocab_tile", word_or_phrase: "nolevel", tr_translation: "x" },
        { type: "translate", source: "x", target: "y" },
      ]),
      lesson("b", [tile("ticket", "A2")]),
    ]);
    expect(pool.map((w) => w.key)).toEqual(["coffee", "ticket"]);
    expect(pool[0]!.cefr).toBe("A1");
  });

  it("lowercases Turkish translations of lowercase words but keeps acronyms", () => {
    const pool = buildWordPool([
      lesson("a", [tile("ticket", "A1", "Bilet"), tile("ATM", "A1", "ATM"), tile("cash", "A1", "ATM")]),
    ]);
    expect(pool.map((w) => w.translation)).toEqual(["bilet", "ATM", "ATM"]);
  });

  it("picks the same words for the same day and different words on another day", () => {
    const pool = Array.from({ length: 60 }, (_, i) => word(`w${i}`, "B1"));
    const a = pickDailyWords(pool, { level: "B1", exclude: new Set(), dayKey: "2026-11-16" });
    const b = pickDailyWords(pool, { level: "B1", exclude: new Set(), dayKey: "2026-11-16" });
    const c = pickDailyWords(pool, { level: "B1", exclude: new Set(), dayKey: "2026-11-17" });
    expect(a).toHaveLength(DAILY_WORD_COUNT);
    expect(a.map((w) => w.key)).toEqual(b.map((w) => w.key));
    expect(a.map((w) => w.key)).not.toEqual(c.map((w) => w.key));
  });

  it("prefers the learner's level, skips excluded words, then widens to nearby levels", () => {
    const pool = [
      ...Array.from({ length: 4 }, (_, i) => word(`b1-${i}`, "B1")),
      ...Array.from({ length: 20 }, (_, i) => word(`a2-${i}`, "A2")),
      ...Array.from({ length: 20 }, (_, i) => word(`c2-${i}`, "C2")),
    ];
    const picked = pickDailyWords(pool, {
      level: "B1",
      exclude: new Set(["b1-0"]),
      dayKey: "d",
    });
    expect(picked).toHaveLength(DAILY_WORD_COUNT);
    expect(picked.filter((w) => w.cefr === "B1").map((w) => w.key).sort()).toEqual([
      "b1-1",
      "b1-2",
      "b1-3",
    ]);
    expect(picked.filter((w) => w.cefr === "A2")).toHaveLength(7);
    expect(picked.some((w) => w.cefr === "C2")).toBe(false);
  });

  it("prefers one- and two-word entries before longer phrases, deterministically", () => {
    const long = Array.from({ length: 30 }, (_, i) => ({ ...word(`a b c ${i}`, "B1"), word: `a b c ${i}` }));
    const short = Array.from({ length: 12 }, (_, i) => ({ ...word(`s${i}`, "B1"), word: i % 2 ? `s ${i}` : `s${i}` }));
    const opts = { level: "B1" as const, exclude: new Set<string>(), dayKey: "2026-11-16" };
    const a = pickDailyWords([...long, ...short], opts);
    expect(a.every((w) => w.word.split(" ").length <= 2)).toBe(true);
    expect(pickDailyWords([...long, ...short], opts).map((w) => w.key)).toEqual(a.map((w) => w.key));
    // with only 3 short words left, the rest fall back to long phrases
    const few = pickDailyWords([...long, ...short.slice(0, 3)], opts);
    expect(few.slice(0, 3).every((w) => w.word.split(" ").length <= 2)).toBe(true);
    expect(few).toHaveLength(DAILY_WORD_COUNT);
  });

  it("filters fragments, normalises casing and translations when building the pool", () => {
    const pool = buildWordPool([
      lesson("a", [
        tile("Full breakdown", "B1", "Detaylı döküm / tam aciklama"),
        tile("share of", "B1", "payı"),
        tile("should subside soon", "B1", "yakında diner"),
        tile("Tap to pay", "A2", "Temassız öde (turnike / kartla)"),
        tile("carry over", "B1", "aktarmak"),
        tile("ATM", "A1", "ATM"),
      ]),
    ]);
    expect(pool.map((w) => [w.word, w.translation])).toEqual([
      ["full breakdown", "detaylı döküm, tam açıklama"],
      ["tap to pay", "temassız öde"],
      ["carry over", "aktarmak"],
      ["ATM", "ATM"],
    ]);
  });

  it("gives three distinct wrong options", () => {
    const pool = Array.from({ length: 10 }, (_, i) => word(`w${i}`, "A2"));
    const options = pickDistractors(pool[0]!, pool);
    expect(options).toHaveLength(3);
    expect(new Set(options).size).toBe(3);
    expect(options).not.toContain("w0");
  });
});

describe("daily words — distractors", () => {
  it("prefer a similar word count to the target", () => {
    const mk = (w: string) => ({ ...word(w, "A2"), word: w });
    const pool = [
      mk("target one"),
      ...Array.from({ length: 6 }, (_, i) => mk(`two ${i}`)),
      ...Array.from({ length: 6 }, (_, i) => mk(`single${i}`)),
      ...Array.from({ length: 6 }, (_, i) => mk(`far away from home ${i}`)),
    ];
    const options = pickDistractors(pool[0]!, pool);
    expect(options).toHaveLength(3);
    expect(options.every((o) => o.split(" ").length === 2)).toBe(true);
  });
});

describe("daily words — persistence", () => {
  beforeEach(async () => {
    jest.clearAllMocks();
    await AsyncStorage.clear();
    await setCefrLevel("B1");
  });

  it("keeps today's set stable and builds it from bundled lessons", async () => {
    const now = new Date(2026, 10, 16, 9, 0);
    const first = await getTodayWords(now);
    const again = await getTodayWords(new Date(2026, 10, 16, 22, 0));
    expect(first.words).toHaveLength(DAILY_WORD_COUNT);
    expect(first.completed).toBe(false);
    expect(again.words.map((w) => w.key)).toEqual(first.words.map((w) => w.key));
    expect(first.words.every((w) => w.cefr === "B1")).toBe(true);
  });

  it("completing adds every word to review, counts the streak, and is idempotent", async () => {
    const now = new Date(2026, 10, 16, 9, 0);
    const today = await getTodayWords(now);
    const results = today.words.map((w, i) => ({ key: w.key, correct: i < 8 }));

    const done = await completeTodayWords(results, now);
    expect(done).toEqual({ correctCount: 8, alreadyCompleted: false });
    expect((await getVocabStats()).total).toBe(DAILY_WORD_COUNT);
    expect((await getLocalProfile()).current_streak).toBe(1);

    const repeat = await completeTodayWords(results, now);
    expect(repeat.alreadyCompleted).toBe(true);
    expect((await getVocabStats()).total).toBe(DAILY_WORD_COUNT);
    expect((await getTodayWords(now)).completed).toBe(true);
  });

  it("a double tap on finish saves once", async () => {
    const now = new Date(2026, 10, 16, 9, 0);
    const today = await getTodayWords(now);
    const results = today.words.map((w) => ({ key: w.key, correct: true }));
    const [a, b] = await Promise.all([
      completeTodayWords(results, now),
      completeTodayWords(results, now),
    ]);
    expect([a.alreadyCompleted, b.alreadyCompleted].sort()).toEqual([false, true]);
    expect((await getVocabStats()).total).toBe(DAILY_WORD_COUNT);
    expect((await getLocalProfile()).total_xp).toBe(10);
  });

  it("finishing after midnight saves the words that were studied", async () => {
    const evening = new Date(2026, 10, 16, 23, 57);
    const today = await getTodayWords(evening);
    const results = today.words.map((w) => ({ key: w.key, correct: true }));
    const afterMidnight = new Date(2026, 10, 17, 0, 2);

    const done = await completeTodayWords(results, afterMidnight, today.dayKey);
    expect(done).toEqual({ correctCount: DAILY_WORD_COUNT, alreadyCompleted: false });
    const queued = await getQueuedWordKeys();
    expect(today.words.every((w) => queued.has(w.key))).toBe(true);

    const nextDay = await getTodayWords(afterMidnight);
    expect(nextDay.completed).toBe(false);
    expect(nextDay.words.some((w) => queued.has(w.key))).toBe(false);
  });

  it("never repeats yesterday's words the next day", async () => {
    const day1 = new Date(2026, 10, 16, 9, 0);
    const first = await getTodayWords(day1);
    await completeTodayWords(first.words.map((w) => ({ key: w.key, correct: true })), day1);

    const second = await getTodayWords(new Date(2026, 10, 17, 9, 0));
    const firstKeys = new Set(first.words.map((w) => w.key));
    expect(second.words).toHaveLength(DAILY_WORD_COUNT);
    expect(second.words.some((w) => firstKeys.has(w.key))).toBe(false);
    const queued = await getQueuedWordKeys();
    expect(second.words.some((w) => queued.has(w.key))).toBe(false);
  });

  it("schedules the evening nudge only for unfinished sets with notifications on", async () => {
    const morning = new Date(2026, 10, 16, 9, 0);
    await syncDailyWordsNudge(false, morning);
    expect(Notifications.scheduleNotificationAsync).not.toHaveBeenCalled();

    await AsyncStorage.setItem("lafla.notify.enabled", "true");
    await syncDailyWordsNudge(false, morning);
    expect(Notifications.scheduleNotificationAsync).toHaveBeenCalledTimes(1);

    await syncDailyWordsNudge(true, morning);
    await syncDailyWordsNudge(false, new Date(2026, 10, 16, 21, 0));
    expect(Notifications.scheduleNotificationAsync).toHaveBeenCalledTimes(1);
  });
});
