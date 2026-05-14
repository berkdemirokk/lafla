// Lafla — Premium gate hook.
//
// React-side wrapper around `lib/iap.ts`. Gives any screen reactive access
// to the user's premium status without each one having to manage its own
// loading state.
//
// Usage:
//   const { isPremium, loading, refresh } = usePremium();
//   if (!isPremium) router.push("/paywall");
//
// After a successful `purchasePackage(...)` in iap.ts, call `refresh()` to
// re-read the entitlement — the hook does NOT subscribe to AsyncStorage,
// so callers must explicitly nudge it on transitions (paywall close, etc.).

import { useCallback, useEffect, useRef, useState } from "react";
import { isPremium as readIsPremium } from "./iap";

export type UsePremiumResult = {
  /** True if the user has the premium entitlement. False while still loading. */
  isPremium: boolean;
  /** True until the first read of the persisted state completes. */
  loading: boolean;
  /** Re-read entitlement from storage. Call after purchase / restore. */
  refresh: () => Promise<void>;
};

export function usePremium(): UsePremiumResult {
  const [isPremium, setIsPremium] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  // Track mount state so an in-flight refresh after unmount doesn't setState.
  const mountedRef = useRef(true);

  const refresh = useCallback(async () => {
    try {
      const next = await readIsPremium();
      if (mountedRef.current) setIsPremium(next);
    } catch {
      if (mountedRef.current) setIsPremium(false);
    } finally {
      if (mountedRef.current) setLoading(false);
    }
  }, []);

  useEffect(() => {
    mountedRef.current = true;
    void refresh();
    return () => {
      mountedRef.current = false;
    };
  }, [refresh]);

  return { isPremium, loading, refresh };
}
