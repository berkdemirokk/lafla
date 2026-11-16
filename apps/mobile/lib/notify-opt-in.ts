// Lafla — Post-onboarding notification opt-in (2026-11-16).
//
// Audit bulgusu: dropoff + daily-words bildirimleri yalnızca
// "lafla.notify.enabled" === "true" iken çalışıyor; bu bayrağı tek yazan
// enableDailyReminder() ve hiçbir akış kullanıcıya sormuyordu → bildirimler
// pratikte hiç açılmıyordu.
//
// Çözüm: ilk pratik (intro sahne) bittikten sonra kısa, atlanabilir bir
// "hatırlatma saati seç" ekranı (app/notify-opt-in.tsx). Kurallar:
//   - Yalnızca bir kez teklif edilir (K_OFFERED). "Şimdi değil" → bir daha
//     sorulmaz; kullanıcı Ayarlar'dan açabilir.
//   - Sistem izni daha önce sorulduysa (Ayarlar'dan) veya iOS/Android izni
//     "denied" ise ekran hiç gösterilmez — reddeden kullanıcıyı darlamayız.
//   - Birincil buton enableDailyReminder(hour) çağırır; sistem izin
//     penceresini O tetikler (custom pre-prompt sadece değer anlatır,
//     karar sistem penceresindedir).

import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Notifications from "expo-notifications";
import { Platform } from "react-native";

import { trackEvent } from "./analytics";
import {
  enableDailyReminder,
  hasBeenPrompted,
  isNotificationsEnabled,
} from "./notifications";
import { isOnboarded } from "./onboarding-state";

const K_OFFERED = "lafla.notifyOptIn.offered.v1";

/** Hatırlatma saati presetleri (saat, dakika 00). */
export const NOTIFY_OPT_IN_HOURS = [9, 13, 20] as const;
export type NotifyOptInHour = (typeof NOTIFY_OPT_IN_HOURS)[number];
export const DEFAULT_NOTIFY_OPT_IN_HOUR: NotifyOptInHour = 20;

export const NOTIFY_OPT_IN_ROUTE = "/notify-opt-in" as const;

export function formatReminderHour(hour: number): string {
  return `${String(hour).padStart(2, "0")}:00`;
}

async function markOffered(): Promise<void> {
  await AsyncStorage.setItem(K_OFFERED, "true").catch(() => {});
}

/**
 * Opt-in ekranı gösterilmeli mi? Sadece: native platform, bildirimler kapalı,
 * daha önce teklif edilmemiş, sistem izni hiç sorulmamış ve reddedilmemiş.
 */
export async function shouldOfferNotifyOptIn(): Promise<boolean> {
  if (Platform.OS === "web") return false;
  if (await isNotificationsEnabled()) return false;
  const offered = await AsyncStorage.getItem(K_OFFERED).catch(() => null);
  if (offered === "true") return false;
  if (await hasBeenPrompted()) return false;
  try {
    const perm = await Notifications.getPermissionsAsync();
    if (perm.status === "denied") return false;
    if (perm.status !== "granted" && perm.canAskAgain === false) return false;
  } catch {
    // İzin durumu okunamazsa sormaya değer — sistem penceresi zaten karar verir.
  }
  return true;
}

// Oturum başına bir kez (getTodayNotifyOptInRoute); onboarding akışı karar
// verdiyse /today aynı oturumda tekrar sormasın.
let _todayChecked = false;

/** Onboarding / intro sonrası gidilecek route. */
export async function routeAfterOnboarding(): Promise<
  typeof NOTIFY_OPT_IN_ROUTE | "/today"
> {
  _todayChecked = true;
  const offer = await shouldOfferNotifyOptIn().catch(() => false);
  return offer ? NOTIFY_OPT_IN_ROUTE : "/today";
}

/**
 * /today ilk yüklemesi: onboarding akışında hiç teklif edilmemiş (1.0.5'ten
 * güncelleyen veya intro'yu erken bırakan) kullanıcıya bir kez teklif route'u
 * döner; yoksa null. Oturum başına en fazla bir kez kontrol eder.
 */
export async function getTodayNotifyOptInRoute(): Promise<
  typeof NOTIFY_OPT_IN_ROUTE | null
> {
  if (_todayChecked) return null;
  _todayChecked = true;
  if (!(await isOnboarded().catch(() => false))) return null;
  const offer = await shouldOfferNotifyOptIn().catch(() => false);
  return offer ? NOTIFY_OPT_IN_ROUTE : null;
}

/**
 * Kullanıcı "Hatırlat" dedi: sistem izni istenir + günlük hatırlatma kurulur.
 * İzin reddedilirse false döner; tekrar sorulmaz (offered işaretlenir).
 */
export async function acceptNotifyOptIn(hour: number): Promise<boolean> {
  await markOffered();
  const enabled = await enableDailyReminder(hour).catch(() => false);
  void trackEvent("notify_opt_in_result", { hour, enabled }).catch(() => {});
  return enabled;
}

/** "Şimdi değil" — bir daha teklif etme. */
export async function skipNotifyOptIn(): Promise<void> {
  await markOffered();
  void trackEvent("notify_opt_in_skipped").catch(() => {});
}
