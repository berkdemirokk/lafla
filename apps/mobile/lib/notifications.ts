// Lafla — Notifications (lifecycle + dropoff push messages).
//
// 2026-05-20 — Hedef: kullanıcı bir gün ara verirse 2. günden sonra geri
// gelme oranı (D2 retention) %20'den %50'ye çıksın. Yani retention'ın
// tek silahı: bireysel + zamanında + Türkçe + spesifik push.
//
// Stratejik tasarım:
// - 6 saat sessizlik: "yarım kaldı" hook (sahne tamamlanmamış)
// - 24 saat: streak FOMO ("kırılmasın")
// - 3 gün: spesifik sahne challenge (içerik teaser)
// - 7 gün: pasif kaybetme uyarısı (last-chance)
// - Günlük 19:00 hatırlatma (kullanıcı opt-in, varsayılan kapalı)
//
// Tüm mesajlar Türkçe + kişiselleştirilmiş ({name} placeholder).
// İlk-kullanım izin promptu home'a girince + 24h gecikme (Apple HIG önerisi).

import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Notifications from "expo-notifications";
import { Platform } from "react-native";

import { trackEvent } from "./analytics";

// ─── storage keys ─────────────────────────────────────────────────────────

const K_NOTIFY_ENABLED = "lafla.notify.enabled";
const K_NOTIFY_HOUR = "lafla.notify.hour";
const K_NOTIFY_PROMPTED = "lafla.notify.prompted";
const K_LAST_ACTIVE = "lafla.notify.lastActive";
const K_LAST_SCENE = "lafla.notify.lastScene";

const DEFAULT_HOUR = 19;

// ─── notification IDs (cancel ile geri al) ────────────────────────────────

const ID_6H_INCOMPLETE = "lafla.6h.incomplete";
const ID_24H_STREAK = "lafla.24h.streak";
const ID_3D_CHALLENGE = "lafla.3d.challenge";
const ID_7D_GONE = "lafla.7d.gone";
const ID_DAILY_REMINDER = "lafla.daily.reminder";

// ============================================================
// MESAJ KOPYALARI — Türkçe, kişiselleştirilmiş
// ============================================================

interface NotifContext {
  name?: string;
  lastSceneTitle?: string;
  streakDays?: number;
}

function formatName(name?: string): string {
  if (!name || !name.trim()) return "";
  return name.trim();
}

// 6 saat sessizlik — kullanıcı bir sahneyi yarım bıraktıysa.
// Hook: "yarım kaldı" loss aversion + spesifik sahne ipucu.
function msg6HIncomplete(ctx: NotifContext): { title: string; body: string } {
  const name = formatName(ctx.name);
  const scene = ctx.lastSceneTitle ?? "sahnen";
  return {
    title: name ? `${name}, sahne yarım kaldı` : "Sahnen yarım kaldı",
    body: `${scene} — 90 saniye yeter. Konuş, çalış. 🎙️`,
  };
}

// 24 saat — streak FOMO. Day 1 inactive sonrası en güçlü hook.
function msg24HStreak(ctx: NotifContext): { title: string; body: string } {
  const name = formatName(ctx.name);
  const days = ctx.streakDays ?? 0;
  if (days >= 7) {
    return {
      title: name
        ? `🔥 ${name}, ${days} günlük streak'i koru`
        : `🔥 ${days} günlük streak'i koru`,
      body: "Bir sahne yeter. 2 dakika içinde streak güvende.",
    };
  }
  if (days >= 3) {
    return {
      title: name ? `${name}, streak'in seni bekliyor 🔥` : "Streak'in seni bekliyor 🔥",
      body: `${days} gün üst üste. Bugün de kırma. ⚡`,
    };
  }
  return {
    title: name ? `${name}, bugünün pratiği?` : "Bugünün pratiği?",
    body: "Streak yarın 2. günde — bir sahne kurar.",
  };
}

// 3 gün — spesifik sahne challenge, kullanıcının "donduğu" konuyu kurcala.
const D3_CHALLENGES = [
  {
    title: "Bar sahnesinde takıldın",
    body: "'I'd like a beer' diyorsun ama barmen 'tap or bottled?' diyor. Cevap?",
  },
  {
    title: "Tinder match yazdı",
    body: "'Hey what's up :)' geldi. Donmadan 3 saniye cevap — pratik?",
  },
  {
    title: "Havaalanı görevlisi durdurdu",
    body: "'What's the purpose of your visit?' — Türkçe düşünme, direkt cevapla.",
  },
  {
    title: "Slack'te etiketlendin",
    body: "'@you can you take a look?' — kibar reddi nasıl yazılır?",
  },
  {
    title: "Kafede karışan terim",
    body: "'Whole milk or oat?' diye soruyor. Türk için tuzak burada.",
  },
];

function msg3DChallenge(ctx: NotifContext): { title: string; body: string } {
  const name = formatName(ctx.name);
  // Use a stable day-of-year hash to pick the same challenge for everyone
  // on the same day — keeps logs readable + makes A/B testing easier later.
  const today = new Date();
  const dayOfYear = Math.floor(
    (today.getTime() - new Date(today.getFullYear(), 0, 0).getTime()) /
      86400000,
  );
  const c = D3_CHALLENGES[dayOfYear % D3_CHALLENGES.length]!;
  return {
    title: name ? `${name}, ${c.title.toLowerCase()}` : c.title,
    body: c.body,
  };
}

// 7 gün — last-chance, "Lafla'yı bıraktın mı?" — direkt soru.
function msg7DGone(ctx: NotifContext): { title: string; body: string } {
  const name = formatName(ctx.name);
  return {
    title: name ? `${name}, Lafla'yı bıraktın mı?` : "Lafla'yı bıraktın mı?",
    body: "Bir sahne dene, 90 saniye. Türkçe için açıklama eklenir — söz.",
  };
}

// Günlük 19:00 — opt-in hatırlatma.
const DAILY_VARIANTS = [
  {
    title: "Akşam pratiği zamanı 🎙️",
    body: "5 dakika — bir sahne, bir kahve süresi.",
  },
  {
    title: "Bugünün sahnesi seni bekliyor",
    body: "90 saniye yeter. Lafla.",
  },
  {
    title: "Günü kapatmadan",
    body: "Tek sahne — streak yarın için güvende.",
  },
];

function msgDailyReminder(ctx: NotifContext): { title: string; body: string } {
  const today = new Date();
  const idx = today.getDate() % DAILY_VARIANTS.length;
  const v = DAILY_VARIANTS[idx]!;
  const name = formatName(ctx.name);
  return {
    title: v.title,
    body: name ? v.body.replace(/^/, `${name}, `) : v.body,
  };
}

// ============================================================
// LIFECYCLE — recordActive, recordSceneOpen, recordSceneComplete
// ============================================================

/**
 * Kullanıcı app'i aç-kullan dediği her durum (home focus, scene start, etc).
 * Lifecycle scheduler tüm dropoff bildirimlerini iptal eder ve yenisini kurar.
 */
export async function recordActive(): Promise<void> {
  try {
    await AsyncStorage.setItem(K_LAST_ACTIVE, String(Date.now()));
  } catch {
    // best effort
  }
  await rescheduleDropoffs().catch(() => {});
}

/**
 * Bir sahne açıldı (henüz tamamlanmadı). 6h hook için saklanır.
 * Sahne tamamlanırsa recordSceneComplete temizler.
 */
export async function recordSceneOpen(sceneTitle: string): Promise<void> {
  try {
    await AsyncStorage.setItem(K_LAST_SCENE, sceneTitle);
  } catch {
    // best effort
  }
  await rescheduleDropoffs().catch(() => {});
}

/**
 * Sahne tamamlandı — 6h "yarım kaldı" bildirimini cancel et, diğer
 * dropoff'ları yeniden zamanla (saat sıfırlandı çünkü kullanıcı aktif).
 */
export async function recordSceneComplete(): Promise<void> {
  try {
    await AsyncStorage.removeItem(K_LAST_SCENE);
  } catch {
    // best effort
  }
  await recordActive();
}

// ============================================================
// SCHEDULER — 4 dropoff'u sırayla zamanla
// ============================================================

/**
 * Tüm dropoff bildirimlerini cancel et, son aktiviteyi temel alarak 4'ünü
 * yeniden zamanla. Bildirim izni yoksa no-op döner.
 */
export async function rescheduleDropoffs(): Promise<void> {
  const enabled = await isNotificationsEnabled();
  if (!enabled) return;

  // Cancel previous instances (idempotent).
  await cancelDropoffs();

  // Read context for personalization.
  const ctx = await readContext();

  // Sahne yarım kaldıysa 6h hook ekle.
  if (ctx.lastSceneTitle) {
    const { title, body } = msg6HIncomplete(ctx);
    await scheduleAt(ID_6H_INCOMPLETE, title, body, 6 * 3600);
  }

  const { title: t24, body: b24 } = msg24HStreak(ctx);
  await scheduleAt(ID_24H_STREAK, t24, b24, 24 * 3600);

  const { title: t3, body: b3 } = msg3DChallenge(ctx);
  await scheduleAt(ID_3D_CHALLENGE, t3, b3, 3 * 24 * 3600);

  const { title: t7, body: b7 } = msg7DGone(ctx);
  await scheduleAt(ID_7D_GONE, t7, b7, 7 * 24 * 3600);

  void trackEvent("notifications_dropoff_scheduled", {
    has_incomplete: !!ctx.lastSceneTitle,
    streak_days: ctx.streakDays ?? 0,
  }).catch(() => {});
}

async function cancelDropoffs(): Promise<void> {
  for (const id of [
    ID_6H_INCOMPLETE,
    ID_24H_STREAK,
    ID_3D_CHALLENGE,
    ID_7D_GONE,
  ]) {
    try {
      await Notifications.cancelScheduledNotificationAsync(id);
    } catch {
      // never thrown but defensive
    }
  }
}

async function scheduleAt(
  id: string,
  title: string,
  body: string,
  seconds: number,
): Promise<void> {
  try {
    await Notifications.scheduleNotificationAsync({
      identifier: id,
      content: {
        title,
        body,
        sound: "default",
        // iOS-specific badge bump
        badge: 1,
      },
      trigger: {
        type: Notifications.SchedulableTriggerInputTypes.TIME_INTERVAL,
        seconds,
        repeats: false,
      },
    });
  } catch {
    // expo-notifications can throw if permission was revoked mid-session.
  }
}

async function readContext(): Promise<NotifContext> {
  const [nameRaw, lastSceneRaw, profileRaw] = await Promise.all([
    AsyncStorage.getItem("lafla.displayName").catch(() => null),
    AsyncStorage.getItem(K_LAST_SCENE).catch(() => null),
    AsyncStorage.getItem("lafla.local.profile.v1").catch(() => null),
  ]);
  let streakDays: number | undefined;
  if (profileRaw) {
    try {
      const p = JSON.parse(profileRaw) as { current_streak?: number };
      if (typeof p.current_streak === "number") streakDays = p.current_streak;
    } catch {
      // ignore
    }
  }
  return {
    name: nameRaw ?? undefined,
    lastSceneTitle: lastSceneRaw ?? undefined,
    streakDays,
  };
}

// ============================================================
// DAILY REMINDER (opt-in günlük 19:00 hatırlatma)
// ============================================================

export async function enableDailyReminder(
  hour: number = DEFAULT_HOUR,
): Promise<boolean> {
  const granted = await requestPermission();
  if (!granted) return false;

  try {
    await AsyncStorage.setItem(K_NOTIFY_ENABLED, "true");
    await AsyncStorage.setItem(K_NOTIFY_HOUR, String(hour));
  } catch {
    // best effort
  }

  // Cancel previous, then schedule the new daily.
  try {
    await Notifications.cancelScheduledNotificationAsync(ID_DAILY_REMINDER);
  } catch {
    // ignore
  }

  const ctx = await readContext();
  const { title, body } = msgDailyReminder(ctx);

  try {
    await Notifications.scheduleNotificationAsync({
      identifier: ID_DAILY_REMINDER,
      content: { title, body, sound: "default" },
      trigger: {
        type: Notifications.SchedulableTriggerInputTypes.CALENDAR,
        hour,
        minute: 0,
        repeats: true,
      },
    });
  } catch {
    return false;
  }

  // Yeni reminder kurulunca dropoff zinciri de aktif olsun.
  await rescheduleDropoffs().catch(() => {});

  void trackEvent("notifications_daily_enabled", { hour }).catch(() => {});
  return true;
}

export async function disableReminders(): Promise<void> {
  try {
    await AsyncStorage.setItem(K_NOTIFY_ENABLED, "false");
  } catch {
    // best effort
  }
  try {
    await Notifications.cancelAllScheduledNotificationsAsync();
  } catch {
    // ignore
  }
  void trackEvent("notifications_disabled").catch(() => {});
}

// ============================================================
// PERMISSION & STATE
// ============================================================

export async function requestPermission(): Promise<boolean> {
  if (Platform.OS === "web") return false;
  try {
    const existing = await Notifications.getPermissionsAsync();
    if (
      existing.status === "granted" ||
      existing.ios?.status === Notifications.IosAuthorizationStatus.AUTHORIZED ||
      existing.ios?.status ===
        Notifications.IosAuthorizationStatus.PROVISIONAL
    ) {
      await AsyncStorage.setItem(K_NOTIFY_PROMPTED, "true").catch(() => {});
      return true;
    }
    const result = await Notifications.requestPermissionsAsync({
      ios: {
        allowAlert: true,
        allowBadge: true,
        allowSound: true,
      },
    });
    await AsyncStorage.setItem(K_NOTIFY_PROMPTED, "true").catch(() => {});
    return result.status === "granted";
  } catch {
    return false;
  }
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

export async function hasBeenPrompted(): Promise<boolean> {
  try {
    const v = await AsyncStorage.getItem(K_NOTIFY_PROMPTED);
    return v === "true";
  } catch {
    return false;
  }
}
