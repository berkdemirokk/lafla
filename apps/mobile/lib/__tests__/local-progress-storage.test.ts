import AsyncStorage from "@react-native-async-storage/async-storage";

import {
  bumpModeFluency,
  bumpSkillMastery,
  bumpStreak,
  getLocalProfile,
  saveLessonState,
  setLocalProfile,
} from "../local-progress";

describe("local progress storage integrity", () => {
  beforeEach(async () => {
    jest.useRealTimers();
    jest.clearAllMocks();
    await AsyncStorage.clear();
  });

  it("advances the streak across local midnight regardless of runner timezone", async () => {
    const previousLocalNight = new Date(2026, 6, 20, 23, 30);
    const nextLocalMorning = new Date(2026, 6, 21, 0, 30);
    await setLocalProfile({
      current_streak: 4,
      longest_streak: 4,
      last_lesson_at: previousLocalNight.toISOString(),
    });
    jest.useFakeTimers().setSystemTime(nextLocalMorning);

    await bumpStreak();

    await expect(getLocalProfile()).resolves.toMatchObject({
      current_streak: 5,
      longest_streak: 5,
    });
  });

  it.each([
    ["lesson", () => saveLessonState({
      lesson_id: "lesson-1",
      completed_at: new Date(0).toISOString(),
      next_review_at: null,
      ease_factor: 2.5,
      interval_days: 1,
      consecutive_correct: 1,
      total_attempts: 1,
      total_correct: 1,
      last_attempt_at: new Date(0).toISOString(),
    })],
    ["skill", () => bumpSkillMastery("small-talk", 0.8)],
    ["mode", () => bumpModeFluency("daily", 0.8)],
  ])("propagates a failed %s write instead of reporting false success", async (_name, write) => {
    jest.spyOn(AsyncStorage, "setItem").mockRejectedValueOnce(new Error("disk full"));
    await expect(write()).rejects.toThrow("disk full");
  });
});
