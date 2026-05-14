// Lafla — Analytics wrapper.
// Safe-to-call scaffold for PostHog (posthog-react-native).
// If the SDK is not installed, all calls are no-ops; in __DEV__ we
// echo events via console.debug so analytics flow stays visible during
// development. Once posthog-react-native is added, swap the loader below
// to forward calls to the real client.

export type EventProps = Record<string, unknown>;
export type UserTraits = Record<string, unknown>;

// Lazy, optional import. We avoid `import ... from "posthog-react-native"`
// at module top-level so Metro does not fail when the dep is absent.
type PostHogLike = {
  capture: (event: string, props?: EventProps) => void;
  identify: (userId: string, traits?: UserTraits) => void;
  screen: (name: string, props?: EventProps) => void;
};

let client: PostHogLike | null = null;
let resolved = false;

function getClient(): PostHogLike | null {
  if (resolved) return client;
  resolved = true;
  try {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const mod = require("posthog-react-native");
    // PostHog v3+ exposes a default class; consumers typically instantiate
    // it via <PostHogProvider> at the app root and read it from context.
    // For this scaffold we assume a globally-attached singleton if any.
    // When wiring the SDK, replace this block to return your real client.
    const candidate =
      (mod && mod.posthog) ||
      (mod && mod.default && mod.default.__instance) ||
      null;
    if (candidate && typeof candidate.capture === "function") {
      client = candidate as PostHogLike;
    }
  } catch {
    // SDK not installed — stay in no-op mode.
    client = null;
  }
  return client;
}

function devLog(kind: "track" | "identify" | "screen", a: string, b?: unknown) {
  if (__DEV__) {
    // eslint-disable-next-line no-console
    console.debug(`[analytics:${kind}]`, a, b ?? "");
  }
}

export function track(event: string, props?: EventProps): void {
  devLog("track", event, props);
  const c = getClient();
  if (c) {
    try {
      c.capture(event, props);
    } catch {
      // swallow — analytics must never crash the app
    }
  }
}

export function identify(userId: string, traits?: UserTraits): void {
  devLog("identify", userId, traits);
  const c = getClient();
  if (c) {
    try {
      c.identify(userId, traits);
    } catch {
      // swallow
    }
  }
}

export function screen(name: string, props?: EventProps): void {
  devLog("screen", name, props);
  const c = getClient();
  if (c) {
    try {
      c.screen(name, props);
    } catch {
      // swallow
    }
  }
}

export const analytics = { track, identify, screen };
export default analytics;
