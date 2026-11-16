import AsyncStorage from "@react-native-async-storage/async-storage";

jest.mock("../analytics", () => ({ trackEvent: jest.fn(async () => {}) }));
jest.mock("expo-notifications", () => ({
  getPermissionsAsync: jest.fn(async () => ({
    status: "undetermined",
    canAskAgain: true,
  })),
}));
jest.mock("../notifications", () => ({
  enableDailyReminder: jest.fn(),
  hasBeenPrompted: jest.fn(async () => false),
  isNotificationsEnabled: jest.fn(async () => false),
}));

beforeEach(async () => {
  await AsyncStorage.clear();
});

describe("today first-load opt-in", () => {
  it("skips users who are not onboarded", async () => {
    jest.resetModules();
    const m = require("../notify-opt-in");
    expect(await m.getTodayNotifyOptInRoute()).toBeNull();
  });

  it("offers once to an onboarded, never-offered user, then not again", async () => {
    jest.resetModules();
    const m = require("../notify-opt-in");
    await AsyncStorage.setItem("lafla.onboarded", "true");
    expect(await m.getTodayNotifyOptInRoute()).toBe("/notify-opt-in");
    expect(await m.getTodayNotifyOptInRoute()).toBeNull();
  });

  it("does not fire after the onboarding flow already decided this session", async () => {
    jest.resetModules();
    const m = require("../notify-opt-in");
    await AsyncStorage.setItem("lafla.onboarded", "true");
    await m.routeAfterOnboarding();
    expect(await m.getTodayNotifyOptInRoute()).toBeNull();
  });

  it("respects the already-offered flag", async () => {
    jest.resetModules();
    const m = require("../notify-opt-in");
    await AsyncStorage.setItem("lafla.onboarded", "true");
    await AsyncStorage.setItem("lafla.notifyOptIn.offered.v1", "true");
    expect(await m.getTodayNotifyOptInRoute()).toBeNull();
  });
});
