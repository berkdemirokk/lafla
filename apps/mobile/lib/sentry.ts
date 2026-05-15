// Lafla — Sentry crash reporting (production).
//
// Real install of @sentry/react-native. DSN is read from
// expo-constants extra.sentryDsn (set in app.json). When the DSN is missing
// or still the placeholder ("YOUR_..."), all functions become safe no-ops
// so dev / Expo Go sessions don't crash and don't spam Sentry with garbage
// events.
//
// Setup walkthrough: see docs/SENTRY.md.

import * as Sentry from "@sentry/react-native";
import Constants from "expo-constants";

const DSN = Constants.expoConfig?.extra?.sentryDsn as string | undefined;

let initialized = false;

function hasValidDsn(): boolean {
  return !!DSN && !DSN.includes("YOUR_");
}

/**
 * Initialize Sentry. Call once at app boot from app/_layout.tsx. Subsequent
 * calls are ignored.
 */
export function initSentry(): void {
  if (initialized) return;
  if (!hasValidDsn()) {
    if (__DEV__) console.warn("[sentry] DSN not configured");
    return;
  }
  Sentry.init({
    dsn: DSN,
    debug: __DEV__,
    tracesSampleRate: 0.1,
    enableNativeCrashHandling: true,
    // Sentry v8: profiling is opt-in and its native C++ code conflicts
    // with Xcode 26's stricter libcxx std::allocator checks. Disable
    // profiling to keep the build green; re-enable later when sentry-cocoa
    // ships a fix for the allocator-of-const-type pattern.
    profilesSampleRate: 0,
    // Session replay defaults to off in v8 — leave it off (iOS 26 crashes
    // reported when sampleRate > 0 in sentry-react-native 8.10+).
  });
  initialized = true;
}

/**
 * Report a caught error with optional structured context. Safe to call
 * before initSentry() — drops to console in that case.
 */
export function captureException(
  err: unknown,
  context?: Record<string, unknown>,
): void {
  if (!initialized) {
    if (__DEV__) console.error("[sentry] captureException:", err, context ?? "");
    return;
  }
  try {
    Sentry.captureException(err, context ? { extra: context } : undefined);
  } catch (e) {
    if (__DEV__) console.warn("[sentry] captureException failed", e);
  }
}

/**
 * Log a standalone message (no exception) at the given level.
 */
export function captureMessage(
  msg: string,
  level: "info" | "warning" | "error" = "info",
): void {
  if (!initialized) {
    if (__DEV__) console.log(`[sentry] ${level}: ${msg}`);
    return;
  }
  try {
    Sentry.captureMessage(msg, level);
  } catch (e) {
    if (__DEV__) console.warn("[sentry] captureMessage failed", e);
  }
}

/**
 * Attach the signed-in user to subsequent events. Pass null on sign-out so
 * later anonymous events don't bleed PII.
 */
export function setUser(user: { id: string; email?: string } | null): void {
  if (!initialized) return;
  try {
    if (user) {
      Sentry.setUser({ id: user.id, email: user.email });
    } else {
      Sentry.setUser(null);
    }
  } catch (e) {
    if (__DEV__) console.warn("[sentry] setUser failed", e);
  }
}

/**
 * Record a breadcrumb (navigation event, network call, user action) that
 * will be attached to the next captured exception.
 */
export function addBreadcrumb(crumb: {
  category: string;
  message: string;
  data?: Record<string, unknown>;
}): void {
  if (!initialized) {
    if (__DEV__) {
      console.log(`[sentry] breadcrumb ${crumb.category}: ${crumb.message}`, crumb.data ?? "");
    }
    return;
  }
  try {
    Sentry.addBreadcrumb({
      category: crumb.category,
      message: crumb.message,
      data: crumb.data,
      level: "info",
    });
  } catch {
    // breadcrumbs must never throw upward
  }
}
