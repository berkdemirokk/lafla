// Lafla — Shareable progress cards.
//
// Builds 1080x1920 viral cards from the user's local stats (level, vocab,
// streak, weekly wrap, course completion). Captures a rendered <View/> with
// `react-native-view-shot` and hands the resulting file to `expo-sharing`
// (or the platform share sheet) so the user can drop it straight into
// Instagram Story / WhatsApp / Twitter / Photos.
//
// DEFENSIVE: `react-native-view-shot` and `expo-sharing` are NOT listed in
// apps/mobile/package.json yet. Both are loaded via try-require so the rest
// of the app keeps building. The share UI surfaces a clear "modülü kur"
// error if either is missing.
//
// To enable on-device sharing:
//   cd apps/mobile
//   npx expo install react-native-view-shot expo-sharing
//
// No runtime LLM. No network. Pure local read of progress + on-device share.
//
// Trigger points (integrate ShareCardCarousel — do NOT auto-route):
//   1. components/LessonComplete.tsx — render <ShareCardCarousel/> beneath
//      the stats grid when progress.total_score >= 80 or every Nth lesson.
//   2. app/streakcalendar.tsx — render carousel under the hero number when
//      current_streak hits 3 / 7 / 30 / 100.
//   3. app/profile.tsx — a small "Paylaş" pill next to the CEFR level chip
//      that pushes to "/share/level-up".
//   4. app/placement-test.tsx — after the result reveal, push to
//      "/share/level-up" so the first level becomes an identity moment.

import { Platform } from "react-native";
import type React from "react";
import type { View } from "react-native";
import { getCefrLevel, type CefrLevel } from "./cefr-level";
import { getLocalProfile } from "./local-progress";
import { computeMetrics, getWeeklyReport } from "./metrics";
import { getCurrentProfile } from "./auth";
import { getActiveProgram, getProgramDef } from "./programs";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export type ShareTemplate =
  | "level-up"
  | "weekly-wrap"
  | "milestone"
  | "streak-day"
  | "course-complete";

export interface ShareCardData {
  template: ShareTemplate;
  userName: string;
  level?: string; // "B2"
  previousLevel?: string; // "B1"
  stats?: {
    practiceMinutes?: number;
    vocabCount?: number;
    streakDays?: number;
    coachMinutes?: number;
  };
  customTitle_tr?: string;
  customDescription_tr?: string;
}

export interface CaptureResult {
  ok: boolean;
  uri?: string;
  error?: string;
}

// ---------------------------------------------------------------------------
// Defensive module loaders
// ---------------------------------------------------------------------------

type ViewShotModule = {
  captureRef: (
    ref: unknown,
    opts?: {
      format?: "png" | "jpg";
      quality?: number;
      result?: "tmpfile" | "base64" | "data-uri";
      width?: number;
      height?: number;
    },
  ) => Promise<string>;
};

type ExpoSharingModule = {
  isAvailableAsync: () => Promise<boolean>;
  shareAsync: (
    url: string,
    options?: { mimeType?: string; dialogTitle?: string; UTI?: string },
  ) => Promise<void>;
};

function tryRequireViewShot(): ViewShotModule | null {
  try {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const mod = require("react-native-view-shot") as ViewShotModule;
    if (mod && typeof mod.captureRef === "function") return mod;
    return null;
  } catch {
    return null;
  }
}

function tryRequireExpoSharing(): ExpoSharingModule | null {
  try {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const mod = require("expo-sharing") as ExpoSharingModule;
    if (mod && typeof mod.shareAsync === "function") return mod;
    return null;
  } catch {
    return null;
  }
}

// ---------------------------------------------------------------------------
// Public — capture + share
// ---------------------------------------------------------------------------

export const VIEW_SHOT_OPTIONS = {
  format: "png" as const,
  quality: 0.95,
  result: "tmpfile" as const,
  // Render-time width/height. The card itself renders at this aspect, scaled
  // down for the UI but captured at story resolution.
  width: 1080,
  height: 1920,
};

const MISSING_MODULE_HINT =
  "Paylaşım modülü kurulu değil. " +
  "Geliştirici: `npx expo install react-native-view-shot expo-sharing` çalıştır.";

/**
 * Capture the referenced View and hand it to the platform share sheet.
 * Safe to call when the underlying modules aren't installed — returns
 * `{ ok: false, error }` instead of throwing.
 */
export async function captureAndShare(
  viewRef: React.RefObject<unknown>,
  fileName: string = "lafla-progress.png",
): Promise<CaptureResult> {
  const viewShot = tryRequireViewShot();
  if (!viewShot) {
    return { ok: false, error: MISSING_MODULE_HINT };
  }
  const sharing = tryRequireExpoSharing();

  let uri: string;
  try {
    uri = await viewShot.captureRef(viewRef.current, VIEW_SHOT_OPTIONS);
  } catch (err) {
    return {
      ok: false,
      error: `Görseli oluşturamadık: ${(err as Error).message ?? "bilinmeyen hata"}`,
    };
  }

  if (!sharing) {
    // Capture succeeded — we just can't open the share sheet. Return the URI
    // so the screen can fall back to a "Galeriye kaydet" affordance later.
    return {
      ok: true,
      uri,
      error: "expo-sharing kurulu değil — görsel hazır, paylaşım sheet'i yok.",
    };
  }

  try {
    const available = await sharing.isAvailableAsync();
    if (!available) {
      return {
        ok: true,
        uri,
        error: "Bu cihazda paylaşım sheet'i kullanılamıyor.",
      };
    }
    await sharing.shareAsync(uri, {
      mimeType: "image/png",
      dialogTitle: "Lafla — ilerlemeni paylaş",
      UTI: "public.png",
    });
    void fileName; // reserved for future on-disk renaming
    return { ok: true, uri };
  } catch (err) {
    return {
      ok: true,
      uri,
      error: `Paylaşım sheet'i açılmadı: ${(err as Error).message ?? "iptal"}`,
    };
  }
}

/**
 * Best-effort attempt to open Instagram Stories directly with the captured
 * image. iOS uses the `instagram-stories://share` deep link; Android falls
 * back to the system share sheet (which Instagram receives as an Intent).
 */
export async function captureAndShareToInstagram(
  viewRef: React.RefObject<unknown>,
): Promise<CaptureResult> {
  const viewShot = tryRequireViewShot();
  if (!viewShot) return { ok: false, error: MISSING_MODULE_HINT };

  let uri: string;
  try {
    uri = await viewShot.captureRef(viewRef.current, VIEW_SHOT_OPTIONS);
  } catch (err) {
    return {
      ok: false,
      error: `Görseli oluşturamadık: ${(err as Error).message ?? "bilinmeyen hata"}`,
    };
  }

  // iOS: try the official Stories deep link first. If Linking can't open it
  // (Instagram not installed), we fall through to the share sheet.
  if (Platform.OS === "ios") {
    try {
      // eslint-disable-next-line @typescript-eslint/no-require-imports
      const Linking = require("expo-linking") as {
        canOpenURL: (url: string) => Promise<boolean>;
        openURL: (url: string) => Promise<void>;
      };
      const url = "instagram-stories://share?source_application=lafla";
      if (await Linking.canOpenURL(url).catch(() => false)) {
        // The image-as-pasteboard handoff requires native UIPasteboard work,
        // which isn't available without a custom dev client. We open the
        // stories composer; the user can paste the just-captured image from
        // Photos. This still beats no deep link at all.
        await Linking.openURL(url);
        return { ok: true, uri };
      }
    } catch {
      // fall through
    }
  }

  // Default path — generic share sheet (Instagram appears as a target on
  // both iOS and Android when installed).
  const sharing = tryRequireExpoSharing();
  if (!sharing) {
    return {
      ok: true,
      uri,
      error: "expo-sharing kurulu değil — görsel oluşturuldu.",
    };
  }
  try {
    await sharing.shareAsync(uri, {
      mimeType: "image/png",
      dialogTitle: "Instagram Story'e paylaş",
      UTI: "public.png",
    });
    return { ok: true, uri };
  } catch (err) {
    return {
      ok: true,
      uri,
      error: `Paylaşım iptal: ${(err as Error).message ?? "iptal"}`,
    };
  }
}

// ---------------------------------------------------------------------------
// Public — build ShareCardData from current user state
// ---------------------------------------------------------------------------

const FALLBACK_NAME = "Lafla kullanıcısı";

async function resolveUserName(): Promise<string> {
  try {
    const cloud = await getCurrentProfile().catch(() => null);
    if (cloud?.display_name) return cloud.display_name;
  } catch {
    // ignore
  }
  return FALLBACK_NAME;
}

function previousCefr(level: CefrLevel | null): CefrLevel | undefined {
  if (!level) return undefined;
  const order: CefrLevel[] = ["A1", "A2", "B1", "B2", "C1", "C2"];
  const idx = order.indexOf(level);
  if (idx <= 0) return undefined;
  return order[idx - 1];
}

/**
 * Build a `ShareCardData` snapshot from current local state. Pure read —
 * never mutates progress. Falls back to safe defaults when fields are
 * missing so the card always renders something usable.
 */
export async function getShareCardData(
  template: ShareTemplate,
): Promise<ShareCardData> {
  const [userName, level, localProfile, metrics, weekly] = await Promise.all([
    resolveUserName(),
    getCefrLevel(),
    getLocalProfile(),
    computeMetrics().catch(() => null),
    getWeeklyReport().catch(() => null),
  ]);

  const stats = {
    practiceMinutes: metrics?.totalPracticeMinutes ?? 0,
    vocabCount: metrics?.activeVocabSize ?? 0,
    streakDays: localProfile.current_streak ?? 0,
    coachMinutes: metrics?.coachChatMinutes ?? 0,
  };

  // Template-specific extras.
  if (template === "level-up") {
    return {
      template,
      userName,
      level: level ?? "A1",
      previousLevel: previousCefr(level),
      stats,
    };
  }

  if (template === "weekly-wrap") {
    return {
      template,
      userName,
      level: level ?? undefined,
      stats: {
        practiceMinutes: weekly?.totalMinutes ?? stats.practiceMinutes,
        vocabCount: weekly?.newVocabAdded ?? stats.vocabCount,
        streakDays: stats.streakDays,
        coachMinutes: weekly?.coachSessions ?? stats.coachMinutes,
      },
      customDescription_tr: weekly?.highlight_tr,
    };
  }

  if (template === "milestone") {
    // Pick the most impressive number to celebrate.
    let title = "Yeni bir kilometre taşı";
    if ((stats.vocabCount ?? 0) >= 10000)
      title = `${stats.vocabCount?.toLocaleString("tr-TR")} kelime hedefine ulaştım`;
    else if ((stats.vocabCount ?? 0) >= 1000)
      title = `${stats.vocabCount?.toLocaleString("tr-TR")} aktif kelime`;
    else if ((stats.practiceMinutes ?? 0) >= 60)
      title = `${Math.floor((stats.practiceMinutes ?? 0) / 60)} saat pratik tamamlandı`;
    return {
      template,
      userName,
      level: level ?? undefined,
      stats,
      customTitle_tr: title,
    };
  }

  if (template === "streak-day") {
    return {
      template,
      userName,
      level: level ?? undefined,
      stats,
      customTitle_tr: `${stats.streakDays} gün aktif`,
    };
  }

  // course-complete
  const program = await getActiveProgram();
  const def = program ? getProgramDef(program.id) : null;
  return {
    template,
    userName,
    level: level ?? undefined,
    stats,
    customTitle_tr: def
      ? `${def.title} programını tamamladım`
      : "Programı tamamladım",
    customDescription_tr: def?.description,
  };
}

// ---------------------------------------------------------------------------
// Helpers — re-exported for the carousel + screen
// ---------------------------------------------------------------------------

export const ALL_TEMPLATES: ShareTemplate[] = [
  "level-up",
  "weekly-wrap",
  "streak-day",
  "milestone",
  "course-complete",
];

export const TEMPLATE_LABELS_TR: Record<ShareTemplate, string> = {
  "level-up": "Seviye atladım",
  "weekly-wrap": "Bu haftam",
  "milestone": "Kilometre taşı",
  "streak-day": "Aktif günüm",
  "course-complete": "Program bitti",
};

// Used by the screen ref typing: the consumer holds `useRef<View>(null)`
// and forwards it to `<ShareCard ref={ref} />`.
export type ShareCardViewRef = React.RefObject<View>;
