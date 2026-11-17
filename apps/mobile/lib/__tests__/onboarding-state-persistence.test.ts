import AsyncStorage from "@react-native-async-storage/async-storage";

import {
  setInterests,
  setOnboarded,
  setOnboardingStep,
} from "../onboarding-state";

describe("onboarding state persistence", () => {
  beforeEach(async () => {
    jest.restoreAllMocks();
    await AsyncStorage.clear();
  });

  it.each([
    ["interests", () => setInterests(["travel"])],
    ["completion", () => setOnboarded(true)],
    ["resume step", () => setOnboardingStep("cefr")],
  ])("surfaces %s write failures to the screen", async (_label, write) => {
    jest
      .spyOn(AsyncStorage, "setItem")
      .mockRejectedValueOnce(new Error("disk full"));

    await expect(write()).rejects.toThrow("disk full");
  });
});
