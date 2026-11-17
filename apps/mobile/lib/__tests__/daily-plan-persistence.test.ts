import AsyncStorage from "@react-native-async-storage/async-storage";

import {
  getOrCreateDailyPlan,
  getPlanProgress,
  incrementPlanProgress,
  selectWeakSkillLessonId,
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

  it("selects one scene from the learner's weakest practiced skill", () => {
    const cafe = SAMPLE_SCENES.find((scene) => scene.skillId === "order.cafe")!;
    const restaurant = SAMPLE_SCENES.find(
      (scene) => scene.skillId === "order.restaurant",
    )!;
    expect(
      selectWeakSkillLessonId([cafe, restaurant], {
        "order.cafe": { score: 0.62, lessons_completed: 2 },
        "order.restaurant": { score: 0.31, lessons_completed: 1 },
      }),
    ).toBe(restaurant.lessonId);
  });

  it("does not force mastered or unpracticed skills into the plan", () => {
    const scene = SAMPLE_SCENES[0]!;
    expect(
      selectWeakSkillLessonId([scene], {
        [scene.skillId]: { score: 0.9, lessons_completed: 4 },
      }),
    ).toBeNull();
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
    await expect(getPlanProgress()).resolves.toMatchObject({
      completed: 0,
      completedLessonIds: [],
    });

    await incrementPlanProgress(dueScene.lessonId);
    await expect(getPlanProgress()).resolves.toMatchObject({
      completed: 1,
      completedLessonIds: [dueScene.lessonId],
    });
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
