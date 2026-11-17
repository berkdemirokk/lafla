import AsyncStorage from "@react-native-async-storage/async-storage";

import {
  advanceRoleplayMastery,
  getRoleplayMasteryState,
  recordRoleplayMastery,
} from "../roleplay-mastery";

describe("roleplay mastery", () => {
  beforeEach(async () => {
    jest.restoreAllMocks();
    await AsyncStorage.clear();
  });

  it("requires consecutive demonstrated success", () => {
    const first = advanceRoleplayMastery(
      { attempts: 0, consecutiveGoalMet: 0 },
      true,
    );
    expect(first).toEqual({ attempts: 1, consecutiveGoalMet: 1 });

    const miss = advanceRoleplayMastery(first, false);
    expect(miss).toEqual({ attempts: 2, consecutiveGoalMet: 0 });

    const success1 = advanceRoleplayMastery(miss, true);
    const success2 = advanceRoleplayMastery(success1, true);
    expect(success2).toEqual({ attempts: 4, consecutiveGoalMet: 2 });
  });

  it("serializes concurrent attempts for the same scenario", async () => {
    await Promise.all([
      recordRoleplayMastery("hotel-checkin", 92),
      recordRoleplayMastery("hotel-checkin", 88),
    ]);

    await expect(getRoleplayMasteryState("hotel-checkin")).resolves.toEqual({
      attempts: 2,
      consecutiveGoalMet: 2,
    });
  });

  it("surfaces write failures instead of reporting false mastery", async () => {
    jest
      .spyOn(AsyncStorage, "setItem")
      .mockRejectedValueOnce(new Error("disk full"));

    await expect(recordRoleplayMastery("airport", 95)).rejects.toThrow(
      "disk full",
    );
    await expect(getRoleplayMasteryState("airport")).resolves.toEqual({
      attempts: 0,
      consecutiveGoalMet: 0,
    });
  });
});
