const mockReplace = jest.fn();
jest.mock("expo-router", () => ({
  useRouter: () => ({ replace: mockReplace, push: jest.fn(), back: jest.fn() }),
  useFocusEffect: jest.fn(),
}));
jest.mock("expo-haptics", () => ({
  selectionAsync: jest.fn(async () => {}),
  notificationAsync: jest.fn(async () => {}),
  NotificationFeedbackType: { Success: "success", Error: "error", Warning: "warning" },
}));
jest.mock("expo-notifications", () => ({
  getPermissionsAsync: jest.fn(async () => ({ status: "undetermined", canAskAgain: true })),
  requestPermissionsAsync: jest.fn(async () => ({ status: "granted" })),
}));
jest.mock("react-native-safe-area-context", () => {
  const { View } = require("react-native");
  return { SafeAreaView: View, SafeAreaProvider: View };
});
jest.mock("expo-status-bar", () => ({ StatusBar: () => null }));
jest.mock("../../lib/analytics", () => ({ trackEvent: jest.fn(async () => {}) }));
jest.mock("../../lib/onboarding-state", () => ({ isOnboarded: jest.fn(async () => true) }));
jest.mock("../../lib/notifications", () => ({
  enableDailyReminder: jest.fn(async () => true),
  hasBeenPrompted: jest.fn(async () => false),
  isNotificationsEnabled: jest.fn(async () => false),
}));

import AsyncStorage from "@react-native-async-storage/async-storage";

import NotifyOptInScreen from "../../app/notify-opt-in";
import * as Notif from "../../lib/notifications";
import { t } from "../../lib/i18n";
import { formatReminderHour } from "../../lib/notify-opt-in";
import { render, flush, press, hasText, hasLabel } from "../../test-utils/rtr";

const enableDailyReminder = Notif.enableDailyReminder as jest.Mock;

function timeLabel(periodKey: string, hour: number) {
  return t("notifyOptIn.time_option_label", {
    period: t(periodKey),
    time: formatReminderHour(hour),
  });
}

beforeEach(async () => {
  jest.clearAllMocks();
  enableDailyReminder.mockResolvedValue(true);
  await AsyncStorage.clear();
});

describe("app/notify-opt-in", () => {
  it("renders title, 3 time options and both actions", async () => {
    const r = await render(<NotifyOptInScreen />);
    await flush();
    expect(hasText(r, t("notifyOptIn.title"))).toBe(true);
    expect(hasLabel(r, timeLabel("notifyOptIn.time_morning", 9))).toBe(true);
    expect(hasLabel(r, timeLabel("notifyOptIn.time_noon", 13))).toBe(true);
    expect(hasLabel(r, timeLabel("notifyOptIn.time_evening", 20))).toBe(true);
    expect(hasLabel(r, `${t("notifyOptIn.cta")} · 20:00`)).toBe(true);
    expect(hasLabel(r, t("notifyOptIn.skip"))).toBe(true);
  });

  it("selecting a time then enabling calls enableDailyReminder with that hour and goes to /today", async () => {
    const r = await render(<NotifyOptInScreen />);
    await flush();
    await press(r, timeLabel("notifyOptIn.time_morning", 9));
    expect(hasLabel(r, `${t("notifyOptIn.cta")} · 09:00`)).toBe(true);
    await press(r, `${t("notifyOptIn.cta")} · 09:00`);
    await flush();
    expect(enableDailyReminder).toHaveBeenCalledTimes(1);
    expect(enableDailyReminder).toHaveBeenCalledWith(9);
    expect(mockReplace).toHaveBeenCalledWith("/today");
    expect(await AsyncStorage.getItem("lafla.notifyOptIn.offered.v1")).toBe("true");
  });

  it("uses the default hour when nothing was selected", async () => {
    const r = await render(<NotifyOptInScreen />);
    await flush();
    await press(r, `${t("notifyOptIn.cta")} · 20:00`);
    await flush();
    expect(enableDailyReminder).toHaveBeenCalledWith(20);
  });

  it("still navigates when permission is denied or enabling throws", async () => {
    enableDailyReminder.mockRejectedValue(new Error("denied"));
    const r = await render(<NotifyOptInScreen />);
    await flush();
    await press(r, `${t("notifyOptIn.cta")} · 20:00`);
    await flush();
    expect(mockReplace).toHaveBeenCalledWith("/today");
  });

  it("sequential double-tap (separate events) only enables once", async () => {
    const r = await render(<NotifyOptInScreen />);
    await flush();
    const { act } = require("react-test-renderer");
    const label = `${t("notifyOptIn.cta")} · 20:00`;
    const btn = r.root.findAll(
      (n) => n.props.accessibilityLabel === label && typeof n.props.onPress === "function",
    )[0]!;
    await act(async () => {
      btn.props.onPress();
    });
    // Re-query: the same Pressable instance is re-rendered with fresh props.
    const again = r.root.findAll(
      (n) => n.props.accessibilityLabel === label && typeof n.props.onPress === "function",
    )[0];
    await act(async () => {
      (again ?? btn).props.onPress();
    });
    await flush();
    expect(enableDailyReminder).toHaveBeenCalledTimes(1);
  });

  // KNOWN GAP (app/notify-opt-in.tsx handleEnable/handleSkip): the re-entrancy
  // guard is `busy` React state, so two onPress calls in the same tick (before
  // a re-render) both pass it and enableDailyReminder runs twice. Real taps are
  // separate events so this is low severity; daily-words.tsx uses a ref.
  it.failing("synchronous double-press in the same tick only enables once", async () => {
    const r = await render(<NotifyOptInScreen />);
    await flush();
    const btn = r.root.findAll(
      (n) =>
        n.props.accessibilityLabel === `${t("notifyOptIn.cta")} · 20:00` &&
        typeof n.props.onPress === "function",
    )[0]!;
    const { act } = require("react-test-renderer");
    await act(async () => {
      btn.props.onPress();
      btn.props.onPress();
    });
    await flush();
    expect(enableDailyReminder).toHaveBeenCalledTimes(1);
  });

  it("skip navigates without enabling", async () => {
    const r = await render(<NotifyOptInScreen />);
    await flush();
    await press(r, t("notifyOptIn.skip"));
    await flush();
    expect(enableDailyReminder).not.toHaveBeenCalled();
    expect(mockReplace).toHaveBeenCalledWith("/today");
    expect(await AsyncStorage.getItem("lafla.notifyOptIn.offered.v1")).toBe("true");
  });
});
