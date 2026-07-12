import AsyncStorage from "@react-native-async-storage/async-storage";

import { bumpModeFluency, bumpSkillMastery, saveLessonState } from "../local-progress";

describe("local progress storage integrity", () => {
  beforeEach(async () => {
    jest.clearAllMocks();
    await AsyncStorage.clear();
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
