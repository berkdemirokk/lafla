// Lafla — Analytics (PostHog).
//
// Real PostHog wiring on top of `posthog-react-native`. The module is
// defensive: if the SDK is not installed, the API key is missing/placeholder,
// or the user has opted out, every public call becomes a silent no-op. Errors
// thrown inside the SDK are swallowed — analytics MUST never crash a user
// flow.
//
// Public API (stable contract for the rest of the app):
//   - initAnalytics()           : boot once at app start
//   - trackEvent(name, props?)  : capture an event
//   - setUserId(id | null)      : identify on sign-in, reset on sign-out
//   - trackScreen(name)         : route-change hook
//   - getDistinctId()           : current distinct id (for crash reports etc)
//   - setAnalyticsEnabled(bool) : user-facing opt-out toggle
//   - isAnalyticsEnabled()      : current opt-out state
//
// In __DEV__ every event is mirrored to console.debug regardless of SDK
// availability, so flows are inspectable without a backend.

import AsyncStorage from "@react-native-async-storage/async-storage";
import Constants from "expo-constants";
import { Platform } from "react-native";
import { getAttStatus } from "./att";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export type EventProps = Record<string, unknown>;
export type UserTraits = Record<string, unknown>;

// Loose shape — matches the surface we use from posthog-react-native@3.x.
// Keeping this local avoids a hard type-dep on a possibly-uninstalled module.
interface PostHogLike {
  capture: (event: string, props?: EventProps) => void;
  screen: (name: string, props?: EventProps) => void;
  identify: (userId: string, traits?: UserTraits) => void;
  reset: () => void;
  optIn: () => void;
  optOut: () => void;
  getDistinctId?: () => string;
  // posthog-react-native@3.x ships an async ready helper. v2 does not.
  identifyAsync?: () => Promise<void>;
}

// ---------------------------------------------------------------------------
// Config
// ---------------------------------------------------------------------------

const KEY = Constants.expoConfig?.extra?.posthogKey as string | undefined;
const HOST =
  (Constants.expoConfig?.extra?.posthogHost as string | undefined) ??
  "https://eu.i.posthog.com";

const K_OPTOUT = "lafla.analytics.optout";

// ---------------------------------------------------------------------------
// State
// ---------------------------------------------------------------------------

let client: PostHogLike | null = null;
let initInProgress: Promise<void> | null = null;
let optedOut = false; // hydrated from AsyncStorage during init

function hasUsableKey(): boolean {
  return !!KEY && KEY.length > 0 && !KEY.includes("YOUR_");
}

function devLog(kind: string, a: string, b?: unknown): void {
  if (__DEV__) {
    // eslint-disable-next-line no-console
    console.debug(`[analytics:${kind}]`, a, b ?? "");
  }
}

async function readOptOut(): Promise<boolean> {
  try {
    const raw = await AsyncStorage.getItem(K_OPTOUT);
    return raw === "true";
  } catch {
    return false;
  }
}

// ---------------------------------------------------------------------------
// initAnalytics — call once from app/_layout.tsx
// ---------------------------------------------------------------------------

export async function initAnalytics(): Promise<void> {
  if (client) return;
  if (initInProgress) return initInProgress;

  initInProgress = (async () => {
    try {
      optedOut = await readOptOut();

      if (!hasUsableKey()) {
        devLog("init", "no PostHog key — skipping");
        return;
      }

      // Apple ATT gate (Guideline 5.1.2). Do NOT initialize PostHog before
      // the user has granted tracking permission. Pre-grant we stay in
      // no-op mode; once ATT resolves with "granted" the onboarding flow
      // calls initAnalytics() again and we proceed.
      if (Platform.OS === "ios") {
        const att = await getAttStatus();
        if (att !== "granted") {
          devLog("init", `ATT not granted (${att}) — staying in no-op mode`);
          optedOut = true;
          return;
        }
      }

      // Lazy require so Metro doesn't fail when the dep isn't installed yet.
      // eslint-disable-next-line @typescript-eslint/no-require-imports
      const mod = require("posthog-react-native") as
        | {
            default?: new (
              key: string,
              opts?: { host?: string },
            ) => PostHogLike;
            PostHog?: new (
              key: string,
              opts?: { host?: string },
            ) => PostHogLike;
          }
        | undefined;

      const Ctor = (mod?.default ?? mod?.PostHog) as
        | (new (key: string, opts?: { host?: string }) => PostHogLike)
        | undefined;

      if (!Ctor) {
        devLog("init", "posthog-react-native not installed — staying in no-op mode");
        return;
      }

      const instance = new Ctor(KEY as string, { host: HOST });
      // v3 exposes identifyAsync(); awaiting it makes sure the distinct_id is
      // available before the first capture. v2 has no equivalent.
      if (typeof instance.identifyAsync === "function") {
        await instance.identifyAsync().catch(() => {});
      }
      client = instance;

      if (optedOut) {
        try {
          client.optOut();
        } catch {
          // ignore
        }
      }

      devLog("init", "PostHog ready", { host: HOST, optedOut });
    } catch (e) {
      // Init must never crash the app.
      devLog("init-error", String(e));
      client = null;
    } finally {
      initInProgress = null;
    }
  })();

  return initInProgress;
}

// ---------------------------------------------------------------------------
// Public surface — every call wrapped in try/catch.
// ---------------------------------------------------------------------------

export async function trackEvent(
  event: string,
  props?: EventProps,
): Promise<void> {
  devLog("track", event, props);
  if (optedOut) return;
  try {
    client?.capture(event, props);
  } catch {
    // swallow
  }
}

export async function setUserId(userId: string | null): Promise<void> {
  devLog("identify", userId ?? "(reset)");
  if (optedOut) return;
  try {
    if (userId) {
      client?.identify(userId);
    } else {
      client?.reset();
    }
  } catch {
    // swallow
  }
}

export async function trackScreen(name: string): Promise<void> {
  devLog("screen", name);
  if (optedOut) return;
  try {
    client?.screen(name);
  } catch {
    // swallow
  }
}

export async function getDistinctId(): Promise<string | null> {
  try {
    const fn = client?.getDistinctId;
    if (typeof fn === "function") {
      const v = fn.call(client);
      return typeof v === "string" ? v : null;
    }
    return null;
  } catch {
    return null;
  }
}

// ---------------------------------------------------------------------------
// Opt-out — wired to the "Analytics olmadan kullan" toggle in settings.
// ---------------------------------------------------------------------------

export async function setAnalyticsEnabled(enabled: boolean): Promise<void> {
  optedOut = !enabled;
  try {
    await AsyncStorage.setItem(K_OPTOUT, optedOut ? "true" : "false");
  } catch {
    // ignore
  }
  try {
    if (!client) return;
    if (enabled) {
      client.optIn();
    } else {
      client.optOut();
    }
  } catch {
    // ignore
  }
}

export async function isAnalyticsEnabled(): Promise<boolean> {
  // Single source of truth: the AsyncStorage flag. We refresh the in-memory
  // mirror at the same time so subsequent calls in this session are accurate.
  const out = await readOptOut();
  optedOut = out;
  return !out;
}

// ---------------------------------------------------------------------------
// Legacy compatibility — older call sites used `track / identify / screen`.
// Keep them around as thin wrappers so existing imports don't break.
// ---------------------------------------------------------------------------

export function track(event: string, props?: EventProps): void {
  void trackEvent(event, props);
}

export function identify(userId: string, traits?: UserTraits): void {
  devLog("identify", userId, traits);
  if (optedOut) return;
  try {
    client?.identify(userId, traits);
  } catch {
    // swallow
  }
}

export function screen(name: string, props?: EventProps): void {
  devLog("screen", name, props);
  if (optedOut) return;
  try {
    client?.screen(name, props);
  } catch {
    // swallow
  }
}

export const analytics = {
  init: initAnalytics,
  track: trackEvent,
  identify: setUserId,
  screen: trackScreen,
  getDistinctId,
  setEnabled: setAnalyticsEnabled,
  isEnabled: isAnalyticsEnabled,
};

export default analytics;
