// Lafla — Network status hook.
//
// Defensive wrapper around @react-native-community/netinfo. The package is
// NOT a hard dependency; we dynamically `require` it so Metro and TypeScript
// do not fail when it is absent. When missing, we default to "online" and
// type="unknown" — most network code in the app already handles request
// failures gracefully (Supabase optional, local-progress AsyncStorage),
// so an optimistic default is safe.
//
// To enable real connectivity detection:
//
//   pnpm --filter mobile add @react-native-community/netinfo
//
// See docs/NETWORK.md for the offline-first architecture and which features
// degrade without a network.

import { useEffect, useState } from "react";

export type NetworkType = "wifi" | "cellular" | "none" | "unknown";

export type NetworkStatus = {
  isOnline: boolean;
  type: NetworkType;
};

// Subset of the @react-native-community/netinfo surface we rely on. Kept
// minimal so the dynamic require stays decoupled from the library's full
// type graph (which would otherwise force us to install the package).
type NetInfoStateLike = {
  isConnected: boolean | null;
  isInternetReachable: boolean | null;
  type: string | null;
};

type NetInfoLike = {
  addEventListener: (cb: (state: NetInfoStateLike) => void) => () => void;
  fetch: () => Promise<NetInfoStateLike>;
};

let cachedNetInfo: NetInfoLike | null | undefined = undefined;

function loadNetInfo(): NetInfoLike | null {
  if (cachedNetInfo !== undefined) return cachedNetInfo;
  try {
    // Dynamic require so the bundler does not hard-fail when the dep is
    // missing. The package's default export shape varies across versions,
    // so we accept both `default` and the namespace.
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const mod = require("@react-native-community/netinfo");
    cachedNetInfo = (mod?.default ?? mod) as NetInfoLike;
    return cachedNetInfo;
  } catch {
    cachedNetInfo = null;
    return null;
  }
}

function normalizeType(raw: string | null | undefined): NetworkType {
  switch (raw) {
    case "wifi":
      return "wifi";
    case "cellular":
      return "cellular";
    case "none":
      return "none";
    default:
      return "unknown";
  }
}

function deriveOnline(state: NetInfoStateLike): boolean {
  // Treat null fields as "online" — most NetInfo backends report null
  // briefly during boot before the first probe completes. We would rather
  // suppress a transient false-offline banner than flash it.
  if (state.isInternetReachable === false) return false;
  if (state.isConnected === false) return false;
  return true;
}

/**
 * Subscribe to OS-level connectivity changes. When
 * @react-native-community/netinfo is not installed, returns a stable
 * { isOnline: true, type: "unknown" } so callers do not block features.
 */
export function useNetworkStatus(): NetworkStatus {
  const [status, setStatus] = useState<NetworkStatus>({
    isOnline: true,
    type: "unknown",
  });

  useEffect(() => {
    const netInfo = loadNetInfo();
    if (!netInfo) {
      // Library missing — stay optimistic. Nothing to subscribe to.
      return;
    }

    let alive = true;

    const apply = (state: NetInfoStateLike) => {
      if (!alive) return;
      setStatus({
        isOnline: deriveOnline(state),
        type: normalizeType(state.type),
      });
    };

    // Seed with current state so the first render reflects reality rather
    // than the optimistic default.
    netInfo
      .fetch()
      .then(apply)
      .catch(() => {
        // ignore — keep optimistic default
      });

    let unsubscribe: (() => void) | undefined;
    try {
      unsubscribe = netInfo.addEventListener(apply);
    } catch {
      // Some shims expose addEventListener with a different signature.
      // Falling back to the optimistic default is preferable to crashing.
    }

    return () => {
      alive = false;
      if (unsubscribe) {
        try {
          unsubscribe();
        } catch {
          // never throw on cleanup
        }
      }
    };
  }, []);

  return status;
}
