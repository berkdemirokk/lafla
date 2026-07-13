// Lafla — Onboarding finalize helper (2026-05-21).
//
// Aynı işin iki çağrı yeri olduğu için bunu helper'a çıkarıyoruz:
//   1. app/onboarding.tsx → handlePickLevel (self-report CEFR yolu)
//   2. app/placement.tsx → handleAccept (adaptive test sonu)
//
// İş:
//   - setCefrLevel
//   - setInterests
//   - AsyncStorage.removeItem("lafla.track") cleanup (pre-pivot artığı)
//   - setDisplayName (eğer var)
//   - setOnboarded(true)
//   - setOnboardingStep(null)
//   - completeOnboarding (Supabase sync, best effort)
//   - requestAttOnce → initAnalytics (granted ise)
//   - trackEvent("onboarding_completed")
//
// intro Match yönlendirmesi caller'da. Bu helper sadece state finalize eder.

import AsyncStorage from "@react-native-async-storage/async-storage";

import { initAnalytics, trackEvent } from "./analytics";
import { requestAttOnce } from "./att";
import { completeOnboarding } from "./auth";
import { setCefrLevel, type CefrLevel } from "./cefr-level";
import {
  setInterests,
  setOnboarded,
  setOnboardingStep,
} from "./onboarding-state";
import { addBreadcrumb, captureException } from "./sentry";

const K_DISPLAY_NAME = "lafla.displayName";

export interface FinalizeOpts {
  level: CefrLevel;
  interests: string[];
  displayName: string;
  /** Hangi yoldan geldi — placement_test veya self_report. */
  source: "placement_test" | "self_report";
}

export async function finalizeOnboarding(opts: FinalizeOpts): Promise<void> {
  // 2026-05-23 — Sentry breadcrumb: onboarding finalize çalışıyor. Mid-finalize
  // crash'leri (Supabase timeout, ATT prompt crash) buradan track edebilelim.
  addBreadcrumb({
    category: "onboarding",
    message: "finalize_start",
    data: { source: opts.source, level: opts.level },
  });

  try {
    await setCefrLevel(opts.level);
    await setInterests(opts.interests);

    const trimmed = opts.displayName.trim();
    if (trimmed.length > 0) {
      await AsyncStorage.setItem(K_DISPLAY_NAME, trimmed);
    } else {
      await AsyncStorage.removeItem(K_DISPLAY_NAME);
    }

    // Completion is the commit marker and is intentionally written last.
    // A failure before this point keeps the learner in onboarding so retrying
    // repairs any earlier partial writes instead of entering a broken home.
    await setOnboarded(true);

    // Cleanup and remote/analytics work must not invalidate a locally durable
    // completion. A stale step is ignored while `lafla.onboarded` is true.
    await setOnboardingStep(null).catch(() => {});
    await AsyncStorage.removeItem("lafla.track").catch(() => {});
    await completeOnboarding(opts.interests, trimmed).catch(() => {});

    // ATT — value seen (Apple HIG önerisi). Granted ise analytics re-init.
    const attStatus = await requestAttOnce().catch(() => null);
    if (attStatus === "granted") {
      await initAnalytics().catch(() => {});
    }

    addBreadcrumb({
      category: "onboarding",
      message: "finalize_complete",
      data: { source: opts.source, att: attStatus ?? "unknown" },
    });

    void trackEvent("onboarding_completed", {
      level: opts.level,
      interests: opts.interests,
      had_name: trimmed.length > 0,
      source: opts.source,
    }).catch(() => {});
  } catch (err) {
    // Onboarding finalize partial failure'da kullanıcı stuck olabilir —
    // Sentry'ye throw'u yansıt, sonra re-throw et ki caller "tekrar dene"
    // UI'ı gösterebilsin.
    captureException(err, { source: "finalizeOnboarding", opts });
    throw err;
  }
}
