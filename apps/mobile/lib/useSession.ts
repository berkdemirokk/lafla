// Lafla — Session hook. Subscribes to Supabase auth state.

import { useEffect, useState } from "react";
import type { Session } from "@supabase/supabase-js";
import { setUserId as setAnalyticsUserId } from "./analytics";
import { setUserId as setRevenueCatUserId } from "./iap";
import { supabase, isSupabaseConfigured } from "./supabase";
import { setUser as setSentryUser } from "./sentry";

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
  await Promise.all([
    setAnalyticsUserId(userId).catch(() => {}),
    setRevenueCatUserId(userId).catch(() => {}),
  ]);
}

export function useSession(): SessionState {
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!isSupabaseConfigured) {
      setLoading(false);
      return;
    }

    supabase.auth.getSession().then(async ({ data }) => {
      const s = data.session ?? null;
      setSession(s);
      syncSentryUser(s);
      await syncExternalUserIds(s);
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
