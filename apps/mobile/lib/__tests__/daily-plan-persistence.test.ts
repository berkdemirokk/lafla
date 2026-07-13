import AsyncStorage from "@react-native-async-storage/async-storage";

import {
  getOrCreateDailyPlan,
  getPlanProgress,
  incrementPlanProgress,
} from "../daily-plan";

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
