import AsyncStorage from "@react-native-async-storage/async-storage";

jest.mock("../analytics", () => ({ trackEvent: jest.fn(async () => {}) }));

jest.mock("expo-notifications", () => ({
  cancelScheduledNotificationAsync: jest.fn(async () => {}),
  cancelAllScheduledNotificationsAsync: jest.fn(async () => {}),
  scheduleNotificationAsync: jest.fn(async () => "id"),
  getPermissionsAsync: jest.fn(async () => ({
    status: "undetermined",
    canAskAgain: true,
  })),
  requestPermissionsAsync: jest.fn(async () => ({ status: "granted" })),
  getExpoPushTokenAsync: jest.fn(async () => ({ data: "" })),
  IosAuthorizationStatus: { AUTHORIZED: 2, PROVISIONAL: 3 },
  SchedulableTriggerInputTypes: {
    DATE: "date",
    CALENDAR: "calendar",
    TIME_INTERVAL: "timeInterval",
  },
}));

jest.mock("../cefr-level", () => ({ getRecentDecay: jest.fn(async () => 0) }));

import * as Notifications from "expo-notifications";
import {
  DEFAULT_NOTIFY_OPT_IN_HOUR,
  NOTIFY_OPT_IN_HOURS,
  acceptNotifyOptIn,
  formatReminderHour,
  routeAfterOnboarding,
  shouldOfferNotifyOptIn,
  skipNotifyOptIn,
} from "../notify-opt-in";
import { isNotificationsEnabled, rescheduleDropoffs } from "../notifications";

const getPermissions = Notifications.getPermissionsAsync as jest.Mock;
const requestPermissions = Notifications.requestPermissionsAsync as jest.Mock;
const schedule = Notifications.scheduleNotificationAsync as jest.Mock;

beforeEach(async () => {
  await AsyncStorage.clear();
  jest.clearAllMocks();
  getPermissions.mockResolvedValue({ status: "undetermined", canAskAgain: true });
  requestPermissions.mockResolvedValue({ status: "granted" });
});

describe("notification opt-in offer", () => {
  it("offers once to a fresh user and routes to the opt-in screen", async () => {
    expect(await shouldOfferNotifyOptIn()).toBe(true);
    expect(await routeAfterOnboarding()).toBe("/notify-opt-in");
  });

  it("never offers again after the user skips", async () => {
    await skipNotifyOptIn();
    expect(await shouldOfferNotifyOptIn()).toBe(false);
    expect(await routeAfterOnboarding()).toBe("/today");
    expect(requestPermissions).not.toHaveBeenCalled();
  });

  it("does not nag when the OS permission was already denied", async () => {
    getPermissions.mockResolvedValue({ status: "denied", canAskAgain: false });
    expect(await shouldOfferNotifyOptIn()).toBe(false);
  });

  it("does not offer when the system prompt was already shown from settings", async () => {
    await AsyncStorage.setItem("lafla.notify.prompted", "true");
    expect(await shouldOfferNotifyOptIn()).toBe(false);
  });

  it("does not offer when reminders are already enabled", async () => {
    await AsyncStorage.setItem("lafla.notify.enabled", "true");
    expect(await shouldOfferNotifyOptIn()).toBe(false);
  });
});

describe("notification opt-in accept", () => {
  it("requests the system permission and schedules the daily reminder at the picked hour", async () => {
    const ok = await acceptNotifyOptIn(9);
    expect(ok).toBe(true);
    expect(requestPermissions).toHaveBeenCalledTimes(1);
    expect(await isNotificationsEnabled()).toBe(true);
    expect(await AsyncStorage.getItem("lafla.notify.hour")).toBe("9");

    const daily = schedule.mock.calls.find(
      ([req]) => req.identifier === "lafla.daily.reminder",
    )?.[0];
    expect(daily.trigger).toMatchObject({ hour: 9, minute: 0, repeats: true });
    expect(daily.content.data).toEqual({ deepLink: "lafla://today" });
    expect(await shouldOfferNotifyOptIn()).toBe(false);
  });

  it("keeps notifications off and stops offering when permission is denied", async () => {
    requestPermissions.mockResolvedValue({ status: "denied" });
    const ok = await acceptNotifyOptIn(DEFAULT_NOTIFY_OPT_IN_HOUR);
    expect(ok).toBe(false);
    expect(await isNotificationsEnabled()).toBe(false);
    expect(schedule).not.toHaveBeenCalled();
    expect(await shouldOfferNotifyOptIn()).toBe(false);
  });

  it("formats presets as HH:00", () => {
    expect(NOTIFY_OPT_IN_HOURS.map(formatReminderHour)).toEqual([
      "09:00",
      "13:00",
      "20:00",
    ]);
  });
});

describe("drop-off notifications", () => {
  it("carry an allowed deep link so taps open today's practice", async () => {
    await AsyncStorage.setItem("lafla.notify.enabled", "true");
    await AsyncStorage.setItem("lafla.notify.lastScene", "Kafede sipariş");
    await rescheduleDropoffs();

    const ids = schedule.mock.calls.map(([req]) => req.identifier);
    expect(ids).toEqual(
      expect.arrayContaining([
        "lafla.6h.incomplete",
        "lafla.24h.streak",
        "lafla.3d.challenge",
        "lafla.7d.gone",
      ]),
    );
    for (const [req] of schedule.mock.calls) {
      expect(req.content.data).toEqual({ deepLink: "lafla://today" });
    }
  });

  it("schedules nothing while notifications are not enabled", async () => {
    await rescheduleDropoffs();
    expect(schedule).not.toHaveBeenCalled();
  });
});
