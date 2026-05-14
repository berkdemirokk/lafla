// Lafla — Notifications stub.
// Re-enable by adding expo-notifications back to package.json + plugins,
// then running `eas credentials:configure-build --platform ios` to add
// aps-environment to the provisioning profile.

import AsyncStorage from "@react-native-async-storage/async-storage";

const K_NOTIFY_ENABLED = "lafla.notify.enabled";
const K_NOTIFY_HOUR = "lafla.notify.hour";
const DEFAULT_HOUR = 19;

export async function requestPermission(): Promise<boolean> {
  return false;
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

export async function enableDailyReminder(_hour = DEFAULT_HOUR): Promise<boolean> {
  // Stub: notifications not yet enabled in this build.
  return false;
}

export async function disableReminders(): Promise<void> {
  await AsyncStorage.setItem(K_NOTIFY_ENABLED, "false").catch(() => {});
}
