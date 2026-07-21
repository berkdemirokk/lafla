import AsyncStorage from "@react-native-async-storage/async-storage";

import {
  getOrCreateDailyPlan,
  getPlanProgress,
  incrementPlanProgress,
} from "../daily-plan";
import { SAMPLE_SCENES } from "../../data/scenes";
import { saveLessonState } from "../local-progress";

const PROGRESS_KEY = "lafla.dailyPlan.progress";

describe("daily plan persistence", () => {
  beforeEach(async () => {
    jest.restoreAllMocks();
    jest.clearAllMocks();
    await AsyncStorage.clear();
  });

  it("does not lose different concurrent scene completions", async () => {
    const plan = await getOrCreateDailyPlan();
    expect(plan.length).toBeGreaterThanOrEqual(2);

    await Promise.all([
      incrementPlanProgress(plan[0]!.lessonId),
      incrementPlanProgress(plan[1]!.lessonId),
    ]);

    await expect(getPlanProgress()).resolves.toMatchObject({ completed: 2 });
  });

  it("puts a due completed lesson back into the daily learning loop", async () => {
    const dueScene = SAMPLE_SCENES[0]!;
    await saveLessonState({
      lesson_id: dueScene.lessonId,
      completed_at: "2026-07-01T10:00:00.000Z",
      next_review_at: "2026-07-02T10:00:00.000Z",
      ease_factor: 2.5,
      interval_days: 1,
      consecutive_correct: 1,
      total_attempts: 4,
      total_correct: 3,
      last_attempt_at: "2026-07-01T10:00:00.000Z",
    });

    const plan = await getOrCreateDailyPlan();

    expect(plan[0]?.lessonId).toBe(dueScene.lessonId);
  });

  it("surfaces progress write failures", async () => {
    const plan = await getOrCreateDailyPlan();
    jest
      .spyOn(AsyncStorage, "setItem")
      .mockRejectedValueOnce(new Error("disk full"));

    await expect(
      incrementPlanProgress(plan[0]!.lessonId),
    ).rejects.toThrow("disk full");
  });

  it("does not overwrite progress when its storage read fails", async () => {
    const plan = await getOrCreateDailyPlan();
    const getItem = AsyncStorage.getItem.bind(AsyncStorage);
    jest.spyOn(AsyncStorage, "getItem").mockImplementation((key) => {
      if (key === PROGRESS_KEY) {
        return Promise.reject(new Error("storage unavailable"));
      }
      return getItem(key);
    });
    const writeSpy = jest.spyOn(AsyncStorage, "setItem");

    await expect(
      incrementPlanProgress(plan[0]!.lessonId),
    ).rejects.toThrow("storage unavailable");
    expect(
      writeSpy.mock.calls.some(([key]) => key === PROGRESS_KEY),
    ).toBe(false);
  });
});
