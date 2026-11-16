jest.mock("expo-notifications", () => ({
  cancelScheduledNotificationAsync: jest.fn(async () => {}),
  scheduleNotificationAsync: jest.fn(async () => "id"),
  SchedulableTriggerInputTypes: { DATE: "date" },
}));

import {
  EXTRA_LESSON_ID,
  buildExtraWordPool,
  buildWordPool,
  getPool,
  mergeWordPools,
  type DailyWord,
} from "../daily-words";
import { DAILY_WORDS_EXTRA } from "../../data/daily-words-extra";
import { allLessons } from "../../data/lessons";
import { enqueueVocab, getQueuedWordKeys, getVocabStats } from "../srs-vocab";

const lessonPool = buildWordPool(allLessons);
const lessonKeys = new Set(lessonPool.map((w) => w.key));

function countBy(pool: ReadonlyArray<DailyWord>, cefr: DailyWord["cefr"]): number {
  return pool.filter((w) => w.cefr === cefr).length;
}

describe("daily words — curated C1/C2 extra list", () => {
  it("every entry is well-formed", () => {
    const bad = DAILY_WORDS_EXTRA.filter(
      (e) =>
        (e.cefr !== "C1" && e.cefr !== "C2") ||
        !e.word.trim() ||
        e.word !== e.word.trim() ||
        !e.translation.trim() ||
        e.translation !== e.translation.trim() ||
        e.word.split(/\s+/).length > 4 ||
        !e.example.trim() ||
        !e.exampleTr.trim(),
    );
    expect(bad).toEqual([]);
  });

  it("Turkish translations start lowercase", () => {
    const capitalized = DAILY_WORDS_EXTRA.filter((e) => {
      const first = e.translation[0]!;
      return first !== first.toLocaleLowerCase("tr");
    }).map((e) => e.word);
    expect(capitalized).toEqual([]);
  });

  it("has no duplicate keys", () => {
    const seen = new Set<string>();
    const dupes: string[] = [];
    for (const e of DAILY_WORDS_EXTRA) {
      const key = e.word.toLowerCase();
      if (seen.has(key)) dupes.push(key);
      seen.add(key);
    }
    expect(dupes).toEqual([]);
  });

  it("does not repeat any word already taught in the lessons", () => {
    const overlap = DAILY_WORDS_EXTRA.map((e) => e.word.toLowerCase()).filter((k) =>
      lessonKeys.has(k),
    );
    expect(overlap).toEqual([]);
  });

  it("has at least 300 C1 and 150 C2 entries", () => {
    expect(DAILY_WORDS_EXTRA.filter((e) => e.cefr === "C1").length).toBeGreaterThanOrEqual(300);
    expect(DAILY_WORDS_EXTRA.filter((e) => e.cefr === "C2").length).toBeGreaterThanOrEqual(150);
  });
});

describe("daily words — merged pool", () => {
  it("lesson entries win on a duplicate key", () => {
    const lessonWord: DailyWord = {
      key: "robust",
      word: "robust",
      translation: "lesson-tr",
      cefr: "B2",
      lessonId: "real.lesson",
      lessonTitle: "Real",
    };
    const extra = buildExtraWordPool([
      { word: "Robust", translation: "sağlam", cefr: "C1" },
      { word: "ubiquitous", translation: "her yerde bulunan", cefr: "C2", example: "x", exampleTr: "y" },
    ]);
    const merged = mergeWordPools([lessonWord], extra);
    expect(merged.map((w) => w.key)).toEqual(["robust", "ubiquitous"]);
    expect(merged[0]).toBe(lessonWord);
    expect(merged[1]).toMatchObject({
      lessonId: EXTRA_LESSON_ID,
      example: "x",
      exampleTr: "y",
    });
  });

  it("gives C1 and C2 learners a much deeper pool", () => {
    const pool = getPool();
    expect(new Set(pool.map((w) => w.key)).size).toBe(pool.length);
    expect(countBy(pool, "C1")).toBeGreaterThanOrEqual(650);
    expect(countBy(pool, "C2")).toBeGreaterThanOrEqual(240);
    // Lower bands are untouched by the extra list.
    for (const level of ["A1", "A2", "B1", "B2"] as const) {
      expect(countBy(pool, level)).toBe(countBy(lessonPool, level));
    }
  });

  it("extra words go into the SRS queue with the synthetic lesson id", async () => {
    const extraWord = getPool().find((w) => w.lessonId === EXTRA_LESSON_ID)!;
    await enqueueVocab({
      word: extraWord.word,
      translation: extraWord.translation,
      source_lesson_id: extraWord.lessonId,
      source_lesson_title: "Daily words",
      was_correct: true,
    });
    expect((await getVocabStats()).total).toBe(1);
    expect((await getQueuedWordKeys()).has(extraWord.key)).toBe(true);
  });
});
