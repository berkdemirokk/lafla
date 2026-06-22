import { advanceRoleplayMastery } from "../roleplay-mastery";

describe("roleplay mastery", () => {
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
});
