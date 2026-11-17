import AsyncStorage from "@react-native-async-storage/async-storage";

const mockIsPremium = jest.fn(async () => false);
const mockPremiumStatus = jest.fn(async () => "inactive");
const mockNotifyPremiumChange = jest.fn();

jest.mock("../iap", () => ({
  isPremium: () => mockIsPremium(),
  getPremiumStatus: () => mockPremiumStatus(),
  notifyPremiumChange: () => mockNotifyPremiumChange(),
}));

import {
  FREE_DAILY_SCENE_QUOTA,
  incrementFreeTier,
  shouldGatePaywall,
} from "../free-tier";
import { grantRewardedPremium } from "../rewarded";

describe("entitlement persistence", () => {
  beforeEach(async () => {
    jest.restoreAllMocks();
    jest.clearAllMocks();
    mockIsPremium.mockResolvedValue(false);
    mockPremiumStatus.mockResolvedValue("inactive");
    await AsyncStorage.clear();
  });

  it("serializes free-tier increments", async () => {
    await Promise.all([incrementFreeTier(), incrementFreeTier()]);

    await expect(
      AsyncStorage.getItem("lafla.freeTier.count"),
    ).resolves.toBe("2");
  });

  it("does not charge the same scene twice for duplicate completion callbacks", async () => {
    await Promise.all([
      incrementFreeTier("scene-1"),
      incrementFreeTier("scene-1"),
    ]);

    await expect(AsyncStorage.getItem("lafla.freeTier.count")).resolves.toBe("1");
  });

  it("charges separate completions of the same scene", async () => {
    await incrementFreeTier("scene-1:attempt-1");
    await incrementFreeTier("scene-1:attempt-2");
    await expect(AsyncStorage.getItem("lafla.freeTier.count")).resolves.toBe("2");
  });

  it("fails closed when the free-tier counter cannot be read", async () => {
    jest
      .spyOn(AsyncStorage, "getItem")
      .mockRejectedValueOnce(new Error("storage unavailable"));

    await expect(shouldGatePaywall()).resolves.toBe(true);
  });

  it("gates once the durable daily quota is reached", async () => {
    for (let index = 0; index < FREE_DAILY_SCENE_QUOTA; index += 1) {
      await incrementFreeTier();
    }

    await expect(shouldGatePaywall()).resolves.toBe(true);
  });

  it("does not charge quota or show a paywall while entitlement is unknown", async () => {
    mockPremiumStatus.mockResolvedValue("unknown");

    await incrementFreeTier();

    await expect(AsyncStorage.getItem("lafla.freeTier.count")).resolves.toBeNull();
    await expect(shouldGatePaywall()).resolves.toBe(false);
  });

  it("notifies premium listeners only after a rewarded grant is saved", async () => {
    jest
      .spyOn(AsyncStorage, "setItem")
      .mockRejectedValueOnce(new Error("disk full"));

    await expect(grantRewardedPremium()).rejects.toThrow("disk full");
    expect(mockNotifyPremiumChange).not.toHaveBeenCalled();
  });

  it("rejects invalid rewarded durations", async () => {
    await expect(grantRewardedPremium(0)).rejects.toThrow(RangeError);
    await expect(grantRewardedPremium(Number.POSITIVE_INFINITY)).rejects.toThrow(
      RangeError,
    );
  });
});
