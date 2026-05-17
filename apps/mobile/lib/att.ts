// Lafla — App Tracking Transparency (ATT) helper.
//
// Apple Guideline 5.1.1: any app that wants to track users across other apps
// or websites — including IDFA-based analytics like PostHog / AdMob — MUST
// request permission via ATT before doing so. Calling this before tracking is
// the only way to keep the app on the Store.
//
// We trigger this once, after onboarding completes, so the prompt arrives
// AFTER the user has seen the value of the app (better consent rate). The
// result is cached locally so we don't pester users on subsequent launches.

import { Platform } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const K_ATT_REQUESTED = "lafla.att.requested.v1";

export type AttStatus = "granted" | "denied" | "restricted" | "not-determined";

// Defensive require: package is only present once `expo install` adds it.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
let ATT: any = null;
try {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  ATT = require("expo-tracking-transparency");
} catch {
  ATT = null;
}

/**
 * Check whether we've already shown the ATT prompt this install.
 * Apple only allows requesting once per install — re-asking is a no-op.
 */
export async function hasRequestedAtt(): Promise<boolean> {
  try {
    const v = await AsyncStorage.getItem(K_ATT_REQUESTED);
    return v === "true";
  } catch {
    return false;
  }
}

/**
 * Request ATT permission. Resolves with the user's choice (or "not-determined"
 * if we can't ask — Android, simulator, or module missing). Caches the fact we
 * asked so subsequent launches skip silently.
 */
export async function requestAtt(): Promise<AttStatus> {
  if (Platform.OS !== "ios") return "granted"; // not applicable
  if (!ATT?.requestTrackingPermissionsAsync) return "not-determined";

  try {
    const { status } = await ATT.requestTrackingPermissionsAsync();
    await AsyncStorage.setItem(K_ATT_REQUESTED, "true").catch(() => {});
    return (status as AttStatus) ?? "not-determined";
  } catch {
    return "not-determined";
  }
}

/**
 * One-shot: requests ATT only if we haven't yet. Safe to call repeatedly
 * (e.g. on every app launch); will only show the system sheet once.
 */
export async function requestAttOnce(): Promise<AttStatus | null> {
  if (await hasRequestedAtt()) return null;
  return requestAtt();
}
