// Lafla — Session hook. Subscribes to Supabase auth state.

import { useEffect, useState } from "react";
import type { Session } from "@supabase/supabase-js";
import { setUserId } from "./analytics";
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

export function useSession(): SessionState {
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!isSupabaseConfigured) {
      setLoading(false);
      return;
    }

    supabase.auth.getSession().then(({ data }) => {
      const s = data.session ?? null;
      setSession(s);
      syncSentryUser(s);
      void setUserId(s?.user?.id ?? null).catch(() => {});
      setLoading(false);
    });

    const { data: subscription } = supabase.auth.onAuthStateChange((_event, newSession) => {
      setSession(newSession);
      syncSentryUser(newSession);
      void setUserId(newSession?.user?.id ?? null).catch(() => {});
    });

    return () => {
      subscription.subscription.unsubscribe();
    };
  }, []);

  return { session, loading };
}
