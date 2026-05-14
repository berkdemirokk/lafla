// Lafla — Sentry crash reporting scaffold.
//
// This module is a defensive wrapper around @sentry/react-native. The SDK is
// NOT installed yet; every export here is a safe no-op until you run:
//
//   pnpm --filter mobile add @sentry/react-native
//   npx @sentry/wizard@latest -i reactNative
//
// After install, set EXPO_PUBLIC_SENTRY_DSN in your env (or pass a dsn to
// initSentry) and call initSentry() once from app/_layout.tsx. The dynamic
// require below means TypeScript and Metro will not fail when the package
// is absent — the wrapper just logs to console instead.
//
// See docs/SENTRY.md for the full setup walkthrough.

type SentryLike = {
  init: (opts: Record<string, unknown>) => void;
  captureException: (err: unknown, ctx?: Record<string, unknown>) => void;
  addBreadcrumb: (bc: Record<string, unknown>) => void;
  wrap?: <T>(c: T) => T;
};

let sentry: SentryLike | null = null;
let initialized = false;

function loadSentry(): SentryLike | null {
  if (sentry) return sentry;
  try {
    // Dynamic require so bundler does not hard-fail when the dep is missing.
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const mod = require("@sentry/react-native");
    sentry = (mod?.default ?? mod) as SentryLike;
    return sentry;
  } catch {
    return null;
  }
}

export type InitOptions = {
  dsn?: string;
  environment?: string;
  release?: string;
  tracesSampleRate?: number;
  debug?: boolean;
};

/**
 * Initialize Sentry. Safe to call even when @sentry/react-native is not
 * installed — falls back to console logging. Call once at app boot, e.g.
 * inside app/_layout.tsx before the first render.
 */
export function initSentry(opts: InitOptions = {}): void {
  if (initialized) return;
  initialized = true;

  const dsn = opts.dsn ?? process.env.EXPO_PUBLIC_SENTRY_DSN;
  if (!dsn) {
    if (__DEV__) console.log("[sentry] no DSN configured — skipping init");
    return;
  }

  const s = loadSentry();
  if (!s) {
    if (__DEV__) console.log("[sentry] @sentry/react-native not installed — running as no-op");
    return;
  }

  try {
    s.init({
      dsn,
      environment: opts.environment ?? (__DEV__ ? "development" : "production"),
      release: opts.release,
      tracesSampleRate: opts.tracesSampleRate ?? 0.1,
      debug: opts.debug ?? false,
      enableAutoSessionTracking: true,
    });
  } catch (e) {
    console.warn("[sentry] init failed", e);
  }
}

/**
 * Report a caught error. The optional `ctx` is attached as extra context
 * (tags, user, extra data). Falls back to console.error when the SDK is
 * not present.
 */
export function captureException(err: unknown, ctx?: Record<string, unknown>): void {
  const s = loadSentry();
  if (!s) {
    console.error("[sentry] captureException:", err, ctx ?? "");
    return;
  }
  try {
    s.captureException(err, ctx ? { extra: ctx } : undefined);
  } catch (e) {
    console.warn("[sentry] captureException failed", e);
    console.error(err);
  }
}

export type Breadcrumb = {
  category: string;
  message: string;
  data?: Record<string, unknown>;
};

/**
 * Record a breadcrumb (navigation event, network call, user action) that
 * will be attached to the next captured exception. No-op when the SDK is
 * not installed.
 */
export function addBreadcrumb(bc: Breadcrumb): void {
  const s = loadSentry();
  if (!s) {
    if (__DEV__) console.log(`[sentry] breadcrumb ${bc.category}: ${bc.message}`, bc.data ?? "");
    return;
  }
  try {
    s.addBreadcrumb({
      category: bc.category,
      message: bc.message,
      data: bc.data,
      level: "info",
    });
  } catch {
    // breadcrumbs must never throw upward
  }
}

/**
 * Convenience re-export of Sentry.wrap when available. Returns the
 * component unchanged when the SDK is missing, so it is safe to use as
 *   export default wrapRoot(RootLayout);
 */
export function wrapRoot<T>(component: T): T {
  const s = loadSentry();
  if (!s || typeof s.wrap !== "function") return component;
  try {
    return s.wrap(component);
  } catch {
    return component;
  }
}
