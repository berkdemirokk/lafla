// Lafla — App Tracking Transparency (ATT) helper.
//
// Apple Guideline 5.1.1: any app that wants to track users across other apps
// or websites — including IDFA-based analytics like PostHog / AdMob — MUST
// request permission via ATT before doing so. Calling this before tracking is
// the only way to keep the app on the Store.
//
// We trigger this once on first launch (from app/_layout.tsx), gated to fire
// only when the app is foreground-active and sequenced BEFORE AdMob init so no
// IDFA is read pre-consent. The result is cached locally — but ONLY once iOS
// returns a determinate answer — so we ask exactly once and never lose the
// prompt to a failed presentation (e.g. a request fired during the splash).

import { AppState, Platform } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const K_ATT_REQUESTED = "lafla.att.requested.v1";

/**
 * The ATT system prompt only presents while the app is foreground-active.
 * On a cold launch our first request fires while the splash screen is up, so
 * we wait for AppState to settle on "active" before asking — otherwise iOS
 * silently no-ops the prompt and we'd cache a bogus "not-determined".
 */
async function waitForActive(timeoutMs = 4000): Promise<void> {
  if (AppState.currentState === "active") return;
  await new Promise<void>((resolve) => {
    let done = false;
    const finish = () => {
      if (done) return;
      done = true;
      sub.remove();
      clearTimeout(timer);
      resolve();
    };
    const sub = AppState.addEventListener("change", (s) => {
      if (s === "active") finish();
    });
    const timer = setTimeout(finish, timeoutMs);
  });
}

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
 * Read the current ATT status without prompting. Used to gate tracking SDKs
 * (PostHog, etc.) before any data is sent. Non-iOS returns "granted" because
 * ATT does not apply there.
 */
export async function getAttStatus(): Promise<AttStatus> {
  if (Platform.OS !== "ios") return "granted";
  if (!ATT?.getTrackingPermissionsAsync) return "not-determined";
  try {
    const { status } = await ATT.getTrackingPermissionsAsync();
    return (status as AttStatus) ?? "not-determined";
  } catch {
    return "not-determined";
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
    await waitForActive();
    const { status } = await ATT.requestTrackingPermissionsAsync();
    const resolved = (status as AttStatus) ?? "not-determined";
    // Only remember that we asked once iOS actually returned a real answer.
    // If the prompt couldn't present (still "not-determined"), leave the flag
    // unset so a later call retries — otherwise the prompt is lost forever and
    // App Review never sees it (Guideline 5.1.2(i) rejection).
    if (resolved !== "not-determined") {
      await AsyncStorage.setItem(K_ATT_REQUESTED, "true").catch(() => {});
    }
    return resolved;
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
