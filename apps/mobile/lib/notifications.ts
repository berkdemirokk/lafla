// Lafla — Local push notifications for daily streak reminders.
// Uses expo-notifications. iOS only (we're iOS-only).

import * as Notifications from "expo-notifications";
import * as Device from "expo-device";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Platform } from "react-native";

const K_NOTIFY_ENABLED = "lafla.notify.enabled";
const K_NOTIFY_HOUR = "lafla.notify.hour"; // 0-23, default 19
const DEFAULT_HOUR = 19;

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldShowBanner: true,
    shouldShowList: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});

export async function requestPermission(): Promise<boolean> {
  if (!Device.isDevice) return false;
  if (Platform.OS !== "ios") return false;
  const settings = await Notifications.getPermissionsAsync();
  if (settings.granted) return true;
  const req = await Notifications.requestPermissionsAsync({
    ios: {
      allowAlert: true,
      allowBadge: true,
      allowSound: true,
    },
  });
  return req.granted;
}

export async function isNotificationsEnabled(): Promise<boolean> {
  try {
    const v = await AsyncStorage.getItem(K_NOTIFY_ENABLED);
    return v === "true";
  } catch {
    return false;
  }
}

export async function getReminderHour(): Promise<number> {
  try {
    const v = await AsyncStorage.getItem(K_NOTIFY_HOUR);
    return v ? Number.parseInt(v, 10) : DEFAULT_HOUR;
  } catch {
    return DEFAULT_HOUR;
  }
}

export async function enableDailyReminder(hour = DEFAULT_HOUR): Promise<boolean> {
  const ok = await requestPermission();
  if (!ok) return false;

  await Notifications.cancelAllScheduledNotificationsAsync();
  await Notifications.scheduleNotificationAsync({
    content: {
      title: "Lafla",
      body: pickReminderBody(),
      sound: "default",
    },
    trigger: {
      type: Notifications.SchedulableTriggerInputTypes.DAILY,
      hour,
      minute: 0,
    },
  });
  await AsyncStorage.multiSet([
    [K_NOTIFY_ENABLED, "true"],
    [K_NOTIFY_HOUR, String(hour)],
  ]).catch(() => {});
  return true;
}

export async function disableReminders() {
  await Notifications.cancelAllScheduledNotificationsAsync();
  await AsyncStorage.setItem(K_NOTIFY_ENABLED, "false").catch(() => {});
}

function pickReminderBody(): string {
  const messages = [
    "Bugünkü 5 dakikan hazır mı? Söyle gitsin.",
    "Streak'ini koru — bir ders seni bekliyor.",
    "İngilizce hayatın bir parçası. Bugün de devam.",
    "5 dakika = 1 ders. Hadi başlayalım.",
    "Söyle gitsin. Lafla seni bekliyor.",
  ];
  return messages[Math.floor(Math.random() * messages.length)]!;
}
