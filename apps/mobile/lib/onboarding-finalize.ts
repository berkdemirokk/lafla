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

const K_DISPLAY_NAME = "lafla.displayName";

export interface FinalizeOpts {
  level: CefrLevel;
  interests: string[];
  displayName: string;
  /** Hangi yoldan geldi — placement_test veya self_report. */
  source: "placement_test" | "self_report";
}

export async function finalizeOnboarding(opts: FinalizeOpts): Promise<void> {
  await setCefrLevel(opts.level);
  await setInterests(opts.interests).catch(() => {});
  await AsyncStorage.removeItem("lafla.track").catch(() => {});

  const trimmed = opts.displayName.trim();
  if (trimmed.length > 0) {
    await AsyncStorage.setItem(K_DISPLAY_NAME, trimmed).catch(() => {});
  }

  await setOnboarded(true);
  await setOnboardingStep(null);
  await completeOnboarding(opts.interests).catch(() => {});

  // ATT — value seen (Apple HIG önerisi). Granted ise analytics re-init.
  const attStatus = await requestAttOnce().catch(() => null);
  if (attStatus === "granted") {
    await initAnalytics().catch(() => {});
  }

  void trackEvent("onboarding_completed", {
    level: opts.level,
    interests: opts.interests,
    had_name: trimmed.length > 0,
    source: opts.source,
  }).catch(() => {});
}
