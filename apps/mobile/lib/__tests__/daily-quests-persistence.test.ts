import AsyncStorage from "@react-native-async-storage/async-storage";

import {
  claimQuest,
  getDailyQuests,
  progressQuest,
  type DailyQuestState,
} from "../daily-quests";

const STORAGE_KEY = "lafla.dailyquests";

function todayState(
  progress = 1,
  claimed = false,
): DailyQuestState {
  return {
    date: new Date().toISOString().slice(0, 10),
    quests: [{ id: "complete_lesson", progress, claimed }],
  };
}

describe("daily quest persistence", () => {
  beforeEach(async () => {
    jest.restoreAllMocks();
    await AsyncStorage.clear();
  });

  it("grants a completed quest only once under concurrent claims", async () => {
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(todayState()));

    const rewards = await Promise.all([
      claimQuest("complete_lesson"),
      claimQuest("complete_lesson"),
    ]);

    expect(rewards.sort((a, b) => (b ?? -1) - (a ?? -1))).toEqual([20, null]);
    const stored = JSON.parse(
      (await AsyncStorage.getItem(STORAGE_KEY)) ?? "null",
    ) as DailyQuestState;
    expect(stored.quests[0]?.claimed).toBe(true);
  });

  it("does not return XP when the durable claim write fails", async () => {
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(todayState()));
    jest
      .spyOn(AsyncStorage, "setItem")
      .mockRejectedValueOnce(new Error("disk full"));

    await expect(claimQuest("complete_lesson")).rejects.toThrow("disk full");

    const stored = JSON.parse(
      (await AsyncStorage.getItem(STORAGE_KEY)) ?? "null",
    ) as DailyQuestState;
    expect(stored.quests[0]?.claimed).toBe(false);
  });

  it("serializes concurrent progress without losing an update", async () => {
    await AsyncStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({
        date: new Date().toISOString().slice(0, 10),
        quests: [
          { id: "complete_3_lessons", progress: 0, claimed: false },
        ],
      } satisfies DailyQuestState),
    );

    await Promise.all([
      progressQuest((id) => (id === "complete_3_lessons" ? 1 : 0)),
      progressQuest((id) => (id === "complete_3_lessons" ? 1 : 0)),
    ]);

    const stored = await getDailyQuests();
    expect(stored.quests[0]?.progress).toBe(2);
  });

  it("repairs malformed stored quest entries", async () => {
    await AsyncStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({
        date: new Date().toISOString().slice(0, 10),
        quests: [{ id: "unknown", progress: "many", claimed: "yes" }],
      }),
    );

    const repaired = await getDailyQuests();

    expect(repaired.quests).toHaveLength(3);
    expect(repaired.quests.every((quest) => typeof quest.progress === "number"))
      .toBe(true);
  });
});
