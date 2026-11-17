import AsyncStorage from "@react-native-async-storage/async-storage";

jest.mock("../analytics", () => ({
  trackEvent: jest.fn(async () => undefined),
}));
jest.mock("../iap", () => ({
  isPremium: jest.fn(async () => false),
}));

import {
  applyDecayIfDue,
  recordCefrProgress,
} from "../cefr-level";

describe("CEFR progress persistence", () => {
  beforeEach(async () => {
    jest.restoreAllMocks();
    jest.clearAllMocks();
    await AsyncStorage.clear();
    await AsyncStorage.setItem("lafla.cefr.level", "B1");
  });

  it("serializes concurrent progress updates", async () => {
    await Promise.all([recordCefrProgress(90), recordCefrProgress(90)]);

    await expect(
      AsyncStorage.getItem("lafla.cefr.progress"),
    ).resolves.toBe("0.0800");
  });

  it("does not report progress when its durable batch write fails", async () => {
    jest
      .spyOn(AsyncStorage, "multiSet")
      .mockRejectedValueOnce(new Error("disk full"));

    await expect(recordCefrProgress(90)).rejects.toThrow("disk full");
    await expect(
      AsyncStorage.getItem("lafla.cefr.progress"),
    ).resolves.toBeNull();
  });

  it("does not partially drop a level when decay persistence fails", async () => {
    await AsyncStorage.multiSet([
      ["lafla.cefr.progress", "0.0100"],
      [
        "lafla.cefr.lastPracticeAt",
        new Date(Date.now() - 10 * 24 * 60 * 60 * 1000).toISOString(),
      ],
    ]);
    jest
      .spyOn(AsyncStorage, "multiSet")
      .mockRejectedValueOnce(new Error("disk full"));

    await expect(applyDecayIfDue()).rejects.toThrow("disk full");
    await expect(
      AsyncStorage.getItem("lafla.cefr.level"),
    ).resolves.toBe("B1");
    await expect(
      AsyncStorage.getItem("lafla.cefr.progress"),
    ).resolves.toBe("0.0100");
  });
});
