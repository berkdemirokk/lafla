// Lafla — Session hook. Subscribes to Supabase auth state.

import { useEffect, useState } from "react";
import type { Session } from "@supabase/supabase-js";
import { setUserId as setAnalyticsUserId } from "./analytics";
import { setUserId as setRevenueCatUserId } from "./iap";
import { supabase, isSupabaseConfigured } from "./supabase";
import { setUser as setSentryUser } from "./sentry";
import { flushCloudProgressOutbox } from "./cloud-progress-outbox";

export type SessionState = {
  session: Session | null;
  loading: boolean;
};

// Tell Sentry who's signed in so crash events carry a user id. Pass null
// on sign-out so anonymous events don't inherit the previous user.
function syncSentryUser(s: Session | null): void {
  if (s?.user) {
    setSentryUser({ id: s.user.id, email: s.user.email ?? undefined });
  } else {
    setSentryUser(null);
  }
}

async function syncExternalUserIds(s: Session | null): Promise<void> {
  const userId = s?.user?.id ?? null;
  await setAnalyticsUserId(userId).catch(() => {});
  // Do not call RevenueCat logOut just because there is no Supabase session.
  // Anonymous StoreKit purchases are tied to RevenueCat's current anonymous
  // app user id; resetting it on every signed-out screen can make a freshly
  // purchased entitlement look lost until restore. Explicit app sign-out still
  // clears RevenueCat in auth.signOut().
  if (userId) {
    await setRevenueCatUserId(userId).catch(() => {});
    await flushCloudProgressOutbox().catch(() => {});
  }
}

export function useSession(): SessionState {
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!isSupabaseConfigured) {
      setLoading(false);
      return;
    }

    supabase.auth
      .getSession()
      .then(async ({ data }) => {
        const s = data.session ?? null;
        setSession(s);
        syncSentryUser(s);
        await syncExternalUserIds(s);
      })
      .catch(() => {
        setSession(null);
        syncSentryUser(null);
      })
      .finally(() => {
        setLoading(false);
      });

    const { data: subscription } = supabase.auth.onAuthStateChange(
      (_event, newSession) => {
        setSession(newSession);
        syncSentryUser(newSession);
        void syncExternalUserIds(newSession);
      },
    );

    return () => {
      subscription.subscription.unsubscribe();
    };
  }, []);

  return { session, loading };
}
