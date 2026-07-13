import AsyncStorage from "@react-native-async-storage/async-storage";

jest.mock("../analytics", () => ({
  trackEvent: jest.fn(async () => undefined),
}));

import {
  bumpSurpriseCounter,
  consumeSurprise,
} from "../variable-reward";

describe("variable reward persistence", () => {
  beforeEach(async () => {
    jest.restoreAllMocks();
    await AsyncStorage.clear();
    await AsyncStorage.setItem("lafla.surprise.threshold", "7");
  });

  it("serializes concurrent counter increments", async () => {
    await Promise.all([bumpSurpriseCounter(), bumpSurpriseCounter()]);

    await expect(
      AsyncStorage.getItem("lafla.surprise.counter"),
    ).resolves.toBe("2");
  });

  it("surfaces a failed counter write", async () => {
    jest
      .spyOn(AsyncStorage, "setItem")
      .mockRejectedValueOnce(new Error("disk full"));

    await expect(bumpSurpriseCounter()).rejects.toThrow("disk full");
    await expect(
      AsyncStorage.getItem("lafla.surprise.counter"),
    ).resolves.toBeNull();
  });

  it("keeps the pending marker until the next cycle is durable", async () => {
    await AsyncStorage.multiSet([
      ["lafla.surprise.pending", "scene-hotel-checkin"],
      ["lafla.surprise.counter", "7"],
    ]);
    jest
      .spyOn(AsyncStorage, "removeItem")
      .mockRejectedValueOnce(new Error("cleanup failed"));

    await expect(consumeSurprise()).rejects.toThrow("cleanup failed");
    await expect(
      AsyncStorage.getItem("lafla.surprise.pending"),
    ).resolves.toBe("scene-hotel-checkin");
    await expect(
      AsyncStorage.getItem("lafla.surprise.counter"),
    ).resolves.toBe("0");
  });
});
