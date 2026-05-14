// Lafla — Backup key whitelist.
//
// All AsyncStorage keys the app writes follow the `lafla.*` namespace. This
// file enumerates which prefixes are eligible to be serialized into a backup
// snapshot. We use prefix matching (not exact-match) because several
// subsystems store per-id keys under a parent prefix (e.g. `lafla.lessons`,
// `lafla.lessons.lastSeen`, ...).
//
// Excluded keys are listed explicitly so that mock/debug state never leaks
// into a user-visible backup. Add new exclusions defensively.

export const BACKUPABLE_KEYS_PREFIXES: readonly string[] = [
  // ---- Local progress (lib/local-progress.ts) ----
  "lafla.profile",
  "lafla.lessons",
  "lafla.skills",
  "lafla.daily",
  "lafla.mode_fluency",

  // ---- CEFR + onboarding ----
  "lafla.cefr",
  "lafla.modeFluency",
  "lafla.onboarded",
  "lafla.interests",

  // ---- Coach (Maya) ----
  "lafla.coach",

  // ---- Program / mission / daily quests ----
  "lafla.program",
  "lafla.mission",
  "lafla.dailyquests",
  "lafla.daily_quests",

  // ---- Bookmarks + achievements + journal ----
  "lafla.bookmarks",
  "lafla.achievements",
  "lafla.journal",

  // ---- Streak + shield ----
  "lafla.streak",

  // ---- Vocab + decks + cards ----
  "lafla.cards",
  "lafla.deck",
  "lafla.decks",
  "lafla.vocab",

  // ---- Certificates ----
  "lafla.certificates",
  "lafla.certificate",

  // ---- Mistakes ----
  "lafla.mistakes",
  "lafla.mistake",

  // ---- Metrics / speech metrics ----
  "lafla.metrics",
  "lafla.speech_metrics",

  // ---- Voice sessions ----
  "lafla.voice",
  "lafla.voiceSessions",

  // ---- Listening + reading ----
  "lafla.listening",
  "lafla.reading",

  // ---- Cultural + visa ----
  "lafla.cultural",
  "lafla.visa",

  // ---- Settings + preferences ----
  "lafla.settings",
  "lafla.notifications",
  "lafla.tutorial",
  "lafla.referral",
];

// Explicitly EXCLUDED — these are never serialized.
// Pure prefix match (an excluded prefix wins over a backupable prefix).
export const EXCLUDED_KEYS: readonly string[] = [
  "lafla.premium.mock",      // mock IAP state (lib/iap.ts)
  "lafla.debug",             // debug flags
  "lafla.backup",            // backup metadata itself (avoid recursion)
  "lafla.cache",             // any local caches
  "lafla.audio_cache",       // tts/audio caches
  "lafla.dev",               // dev-only state
];

/**
 * Returns true if a given AsyncStorage key should be included in a backup.
 * Exclusions take precedence over inclusions.
 */
export function shouldBackupKey(key: string): boolean {
  for (const ex of EXCLUDED_KEYS) {
    if (key === ex || key.startsWith(ex + ".")) return false;
  }
  for (const pref of BACKUPABLE_KEYS_PREFIXES) {
    if (key === pref || key.startsWith(pref + ".")) return true;
  }
  return false;
}

/**
 * Map a raw AsyncStorage key to a logical bucket in the backup snapshot.
 * Used by buildBackupSnapshot to organize the `data` object.
 */
export function bucketForKey(key: string): keyof BackupBuckets {
  if (key.startsWith("lafla.profile")) return "profile";
  if (key.startsWith("lafla.lessons") || key.startsWith("lafla.skills") || key.startsWith("lafla.daily") || key.startsWith("lafla.mode_fluency"))
    return "lessons";
  if (key.startsWith("lafla.cefr")) return "cefr";
  if (key.startsWith("lafla.coach")) return "coach";
  if (key.startsWith("lafla.program")) return "program";
  if (key.startsWith("lafla.mission")) return "mission";
  if (key.startsWith("lafla.bookmarks")) return "bookmarks";
  if (key.startsWith("lafla.achievements")) return "achievements";
  if (key.startsWith("lafla.dailyquests") || key.startsWith("lafla.daily_quests") || key.startsWith("lafla.streak"))
    return "dailyquests";
  if (key.startsWith("lafla.journal")) return "journal";
  if (key.startsWith("lafla.certificate")) return "certificates";
  if (key.startsWith("lafla.mistake")) return "mistakes";
  if (key.startsWith("lafla.metrics") || key.startsWith("lafla.speech_metrics"))
    return "metrics";
  if (key.startsWith("lafla.voice")) return "voiceSessions";
  if (key.startsWith("lafla.listening")) return "listening";
  if (key.startsWith("lafla.reading")) return "reading";
  if (key.startsWith("lafla.deck") || key.startsWith("lafla.cards") || key.startsWith("lafla.vocab"))
    return "decks";
  // Everything else (settings, onboarded, interests, notifications, etc.)
  return "settings";
}

export type BackupBuckets = {
  profile: Record<string, unknown>;
  lessons: Record<string, unknown>;
  cefr: Record<string, unknown>;
  coach: Record<string, unknown>;
  program: Record<string, unknown>;
  mission: Record<string, unknown>;
  bookmarks: Record<string, unknown>;
  achievements: Record<string, unknown>;
  dailyquests: Record<string, unknown>;
  journal: Record<string, unknown>;
  certificates: Record<string, unknown>;
  mistakes: Record<string, unknown>;
  metrics: Record<string, unknown>;
  voiceSessions: Record<string, unknown>;
  listening: Record<string, unknown>;
  reading: Record<string, unknown>;
  decks: Record<string, unknown>;
  settings: Record<string, unknown>;
};
