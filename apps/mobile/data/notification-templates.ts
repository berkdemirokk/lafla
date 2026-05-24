// Lafla — Push notification templates.
//
// Short-form copy designed for iOS/Android push delivery. Each title fits in
// ~40 chars, body in ~100 chars. Tone: adult, warm, concrete. Never
// "🔥 STREAK ALERT" or "Don't lose your owl!" — those are pre-onboarded out
// at the data layer so no scheduler can accidentally ship childish copy.
//
// 2026-05-24 — Maya/coach persona kaldırıldı. Daha önce templates "Maya'nın
// sesinde" yazılıyordu ({coach} değişkeniyle). Şimdi impersonal — ürün
// kullanıcıya konuşur, hayali bir karakter değil. coach-checkin-* ID'leri
// geriye uyumluluk için korundu (DB'de geçmiş kayıtlar bu ID'leri içeriyor
// olabilir) ama copy ve değişkenler güncellendi.
//
// The category + cooldownHours pair lets the smart picker (lib/templates.ts)
// throttle each template independently: e.g. lifecycle events fire at most
// once per category-window, engagement nudges have shorter cooldowns.
//
// Deep links use the `lafla://` scheme (see lib/deep-links.ts) so tapping a
// notification opens the most relevant screen, not the home tab.

export type NotificationTemplateId =
  | "daily-reminder-morning"
  | "daily-reminder-evening"
  | "streak-risk"
  | "streak-saved"
  | "review-due"
  | "drill-due"
  | "coach-checkin-3-day-absence"
  | "coach-checkin-7-day-absence"
  | "new-content-program"
  | "level-up-announcement"
  | "certificate-ready"
  | "mission-pack-started"
  | "mission-pack-completed"
  | "weekly-summary"
  | "anniversary"
  | "improvement-milestone"
  | "first-pronunciation-perfect"
  | "filler-detox-progress"
  | "voice-session-streak"
  | "comeback-after-30-days";

export type NotificationCategory =
  | "engagement"
  | "lifecycle"
  | "milestone"
  | "social";

export interface NotificationTemplate {
  id: NotificationTemplateId;
  /** Up to 40 chars — iOS lock-screen + Android collapsed both render ~40. */
  title_tr: string;
  /** Up to 100 chars — iOS body line wraps after ~110, Android ~100. */
  body_tr: string;
  /** Optional deep link (lafla://...) tapped notification routes to. */
  deepLink?: string;
  category: NotificationCategory;
  /** Min hours between two firings of THIS template id. */
  cooldownHours: number;
  /** Variable keys this template uses — picker fills these from user state. */
  variableSupport: string[];
}

// ---------------------------------------------------------------------------
// Templates
// ---------------------------------------------------------------------------

const NT_DAILY_REMINDER_MORNING: NotificationTemplate = {
  id: "daily-reminder-morning",
  title_tr: "Günaydın, {name}",
  body_tr: "10 dakikan var mı? Bugünün ilk pratiği seni bekliyor.",
  deepLink: "lafla://feed",
  category: "engagement",
  cooldownHours: 22,
  variableSupport: ["name"],
};

const NT_DAILY_REMINDER_EVENING: NotificationTemplate = {
  id: "daily-reminder-evening",
  title_tr: "Akşam pratiği, {name}",
  body_tr: "Günü kapatmadan 5 dakika — {topic} üzerine kısa bir tur?",
  deepLink: "lafla://feed",
  category: "engagement",
  cooldownHours: 22,
  variableSupport: ["name", "topic"],
};

const NT_STREAK_RISK: NotificationTemplate = {
  id: "streak-risk",
  title_tr: "Birkaç dakika kaldı, {name}",
  body_tr: "{streak} günlük serini bugün sürdürmek için bir tur yeter.",
  deepLink: "lafla://feed",
  category: "engagement",
  cooldownHours: 20,
  variableSupport: ["name", "streak"],
};

const NT_STREAK_SAVED: NotificationTemplate = {
  id: "streak-saved",
  title_tr: "Streak korundu",
  body_tr: "Bugün için bir shield harcandı, {name}. Bu ay {shieldsLeft} tane daha hakkın var.",
  deepLink: "lafla://settings/subscription",
  category: "lifecycle",
  cooldownHours: 24,
  variableSupport: ["name", "shieldsLeft"],
};

const NT_REVIEW_DUE: NotificationTemplate = {
  id: "review-due",
  title_tr: "Tekrar zamanı",
  body_tr: "{count} kelime tekrar için bekliyor. 3 dakikalık bir tur var mı?",
  deepLink: "lafla://review",
  category: "engagement",
  cooldownHours: 24,
  variableSupport: ["count"],
};

const NT_DRILL_DUE: NotificationTemplate = {
  id: "drill-due",
  title_tr: "Telaffuz drili hazır",
  body_tr: "{weakness} üzerine 2 dakikalık bir alıştırma seçtim, {name}.",
  deepLink: "lafla://drills",
  category: "engagement",
  cooldownHours: 24,
  variableSupport: ["name", "weakness"],
};

// 2026-05-24 — Maya/coach persona kaldırıldı. {coach} değişkeni silindi,
// impersonal "Lafla" sesiyle yeniden yazıldı.
const NT_COACH_CHECKIN_3D: NotificationTemplate = {
  id: "coach-checkin-3-day-absence",
  title_tr: "3 gündür yoksun",
  body_tr: "{name}, geçen sefer yarım kalan bir sahnen var. 5 dakikan var mı?",
  deepLink: "lafla://freechat",
  category: "lifecycle",
  cooldownHours: 72,
  variableSupport: ["name"],
};

const NT_COACH_CHECKIN_7D: NotificationTemplate = {
  id: "coach-checkin-7-day-absence",
  title_tr: "Bir hafta oldu, {name}",
  body_tr: "Akış'ta seni bekleyen sahneler var. 5 dakika ayır, kaldığın yerden devam.",
  deepLink: "lafla://freechat",
  category: "lifecycle",
  cooldownHours: 168,
  variableSupport: ["name"],
};

const NT_NEW_CONTENT_PROGRAM: NotificationTemplate = {
  id: "new-content-program",
  title_tr: "Yeni program: {programName}",
  body_tr: "Seviyene uygun bir set ekledim, {name}. İlk dersi 4 dakika.",
  deepLink: "lafla://programs",
  category: "engagement",
  cooldownHours: 168,
  variableSupport: ["name", "programName"],
};

const NT_LEVEL_UP: NotificationTemplate = {
  id: "level-up-announcement",
  title_tr: "{level} seviyesindesin",
  body_tr: "Değerlendirmeler seni bir basamak yukarı taşıdı, {name}. Ne değişti, içeride.",
  deepLink: "lafla://progress",
  category: "milestone",
  cooldownHours: 0,
  variableSupport: ["name", "level"],
};

const NT_CERTIFICATE_READY: NotificationTemplate = {
  id: "certificate-ready",
  title_tr: "Sertifikan hazır",
  body_tr: "{level} sertifikan indirilebilir durumda, {name}. PDF olarak alabilirsin.",
  deepLink: "lafla://certificates",
  category: "milestone",
  cooldownHours: 0,
  variableSupport: ["name", "level"],
};

const NT_MISSION_PACK_STARTED: NotificationTemplate = {
  id: "mission-pack-started",
  title_tr: "{pack} başladı",
  body_tr: "Yeni paketin ilk görevi senin için seçildi — 6 dakikalık bir başlangıç.",
  deepLink: "lafla://missions",
  category: "engagement",
  cooldownHours: 48,
  variableSupport: ["pack"],
};

const NT_MISSION_PACK_COMPLETED: NotificationTemplate = {
  id: "mission-pack-completed",
  title_tr: "{pack} bitti",
  body_tr: "Paketteki tüm görevleri tamamladın, {name}. Bir sonrakini seçtim.",
  deepLink: "lafla://missions",
  category: "milestone",
  cooldownHours: 0,
  variableSupport: ["name", "pack"],
};

const NT_WEEKLY_SUMMARY: NotificationTemplate = {
  id: "weekly-summary",
  title_tr: "Bu hafta: {minutes} dakika",
  body_tr: "Haftalık raporun hazır, {name}. {sessions} oturum, {newWords} yeni kelime.",
  deepLink: "lafla://progress",
  category: "lifecycle",
  cooldownHours: 144,
  variableSupport: ["name", "minutes", "sessions", "newWords"],
};

const NT_ANNIVERSARY: NotificationTemplate = {
  id: "anniversary",
  title_tr: "Bir yıl oldu, {name}",
  body_tr: "Lafla'ya katılalı tam 1 yıl. {hours} saatlik birikim — kayda değer.",
  deepLink: "lafla://progress",
  category: "milestone",
  cooldownHours: 0,
  variableSupport: ["name", "hours"],
};

const NT_IMPROVEMENT_MILESTONE: NotificationTemplate = {
  id: "improvement-milestone",
  title_tr: "{metric} ölçülebilir biçimde arttı",
  body_tr: "Son {weeks} haftada {improvement}. Bir nota değer, {name}.",
  deepLink: "lafla://progress",
  category: "milestone",
  cooldownHours: 168,
  variableSupport: ["name", "metric", "weeks", "improvement"],
};

const NT_FIRST_PRON_PERFECT: NotificationTemplate = {
  id: "first-pronunciation-perfect",
  title_tr: "İlk tam puan",
  body_tr: "Az önceki telaffuzun 100/100, {name}. Hatırlamak için kaydedildi.",
  deepLink: "lafla://drills",
  category: "milestone",
  cooldownHours: 0,
  variableSupport: ["name"],
};

const NT_FILLER_DETOX: NotificationTemplate = {
  id: "filler-detox-progress",
  title_tr: "Dolgu sözcükler azalıyor",
  body_tr: '"Like" ve "you know" geçen haftaya göre %{percent} az, {name}.',
  deepLink: "lafla://progress",
  category: "milestone",
  cooldownHours: 168,
  variableSupport: ["name", "percent"],
};

const NT_VOICE_STREAK: NotificationTemplate = {
  id: "voice-session-streak",
  title_tr: "{days} gün sesli pratik",
  body_tr: "Üst üste {days} gün sesli oturum aldın. Konuşma kasının çalışıyor, {name}.",
  deepLink: "lafla://freechat-voice",
  category: "milestone",
  cooldownHours: 48,
  variableSupport: ["name", "days"],
};

const NT_COMEBACK_30D: NotificationTemplate = {
  id: "comeback-after-30-days",
  title_tr: "Tekrar hoş geldin, {name}",
  body_tr: "Bir ay sonra geri döndün. Kaldığımız yerden devam — ilerlemen duruyor.",
  deepLink: "lafla://feed",
  category: "lifecycle",
  cooldownHours: 720,
  variableSupport: ["name"],
};

// ---------------------------------------------------------------------------
// Registry + helpers
// ---------------------------------------------------------------------------

export const NOTIFICATION_TEMPLATES: Readonly<
  Record<NotificationTemplateId, NotificationTemplate>
> = Object.freeze({
  "daily-reminder-morning": NT_DAILY_REMINDER_MORNING,
  "daily-reminder-evening": NT_DAILY_REMINDER_EVENING,
  "streak-risk": NT_STREAK_RISK,
  "streak-saved": NT_STREAK_SAVED,
  "review-due": NT_REVIEW_DUE,
  "drill-due": NT_DRILL_DUE,
  "coach-checkin-3-day-absence": NT_COACH_CHECKIN_3D,
  "coach-checkin-7-day-absence": NT_COACH_CHECKIN_7D,
  "new-content-program": NT_NEW_CONTENT_PROGRAM,
  "level-up-announcement": NT_LEVEL_UP,
  "certificate-ready": NT_CERTIFICATE_READY,
  "mission-pack-started": NT_MISSION_PACK_STARTED,
  "mission-pack-completed": NT_MISSION_PACK_COMPLETED,
  "weekly-summary": NT_WEEKLY_SUMMARY,
  anniversary: NT_ANNIVERSARY,
  "improvement-milestone": NT_IMPROVEMENT_MILESTONE,
  "first-pronunciation-perfect": NT_FIRST_PRON_PERFECT,
  "filler-detox-progress": NT_FILLER_DETOX,
  "voice-session-streak": NT_VOICE_STREAK,
  "comeback-after-30-days": NT_COMEBACK_30D,
});

export function getNotifTemplate(
  id: NotificationTemplateId,
): NotificationTemplate | undefined {
  return NOTIFICATION_TEMPLATES[id];
}

// ---------------------------------------------------------------------------
// Variable substitution.
// Mirrors data/email-templates.ts but simpler: titles + bodies are short
// strings, no HTML, no fallback magic for missing keys (we leave the {token}
// visible so QA catches it on device).
// ---------------------------------------------------------------------------

function substitute(source: string, vars: Record<string, string>): string {
  return source.replace(/\{([a-zA-Z0-9_.-]+)\}/g, (match, key: string) => {
    return Object.prototype.hasOwnProperty.call(vars, key) ? vars[key] : match;
  });
}

export function renderNotification(
  template: NotificationTemplate,
  vars: Record<string, string>,
): { title: string; body: string; deepLink?: string } {
  return {
    title: substitute(template.title_tr, vars),
    body: substitute(template.body_tr, vars),
    deepLink: template.deepLink,
  };
}
