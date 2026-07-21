import AsyncStorage from "@react-native-async-storage/async-storage";

import {
  computeMetrics,
  getActiveDaysLast7,
  getWeeklyReport,
} from "../metrics";

describe("honest learning metrics", () => {
  beforeEach(async () => {
    jest.useFakeTimers().setSystemTime(new Date("2026-07-22T12:00:00.000Z"));
    await AsyncStorage.clear();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it("reads the pronunciation grader's real storage channel", async () => {
    await AsyncStorage.multiSet([
      [
        "lafla.pron.scores",
        JSON.stringify([
          { score: 60, at: "2026-07-21T10:00:00.000Z" },
          { score: 80, at: "2026-07-22T10:00:00.000Z" },
        ]),
      ],
      [
        "lafla.vocabBook",
        JSON.stringify([
          { en: "Could you", addedAt: "2026-07-21T10:00:00.000Z" },
          { en: "could you", addedAt: "2026-07-22T10:00:00.000Z" },
        ]),
      ],
      [
        "lafla.sceneHistory",
        JSON.stringify([
          { lessonId: "legacy-a", completedAt: "2026-07-21T10:00:00.000Z" },
          { lessonId: "legacy-b", completedAt: "2026-07-22T10:00:00.000Z" },
        ]),
      ],
    ]);

    await expect(computeMetrics()).resolves.toMatchObject({
      pronunciationAvg: 70,
      activeVocabSize: 1,
      totalPracticeMinutes: 6,
      scenesCompleted: 2,
    });
  });

  it("derives weekly change and active days from recorded evidence", async () => {
    await AsyncStorage.multiSet([
      [
        "lafla.pron.scores",
        JSON.stringify([
          { score: 50, at: "2026-07-14T10:00:00.000Z" },
          { score: 80, at: "2026-07-21T10:00:00.000Z" },
        ]),
      ],
      [
        "lafla.daily",
        JSON.stringify({
          "2026-07-20": { xp: 10, lessons: 1 },
          "2026-07-21": { xp: 10, lessons: 1 },
        }),
      ],
      [
        "lafla.vocabBook",
        JSON.stringify([
          { en: "deadline", addedAt: "2026-07-21T10:00:00.000Z" },
        ]),
      ],
    ]);

    await expect(getActiveDaysLast7()).resolves.toBe(2);
    await expect(getWeeklyReport()).resolves.toMatchObject({
      daysActive: 2,
      pronunciationDelta: 30,
      newVocabAdded: 1,
    });
  });
});
