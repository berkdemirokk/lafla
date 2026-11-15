// Lafla — Session hook. Subscribes to Supabase auth state.

import { useEffect, useState } from "react";
import type { Session } from "@supabase/supabase-js";
import { setUserId } from "./analytics";
import { supabase, isSupabaseConfigured } from "./supabase";
import { setUser as setSentryUser } from "./sentry";
import { switchLocalUserData } from "./auth";

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

    let transition = 0;
    let activeUserId: string | null = null;
    const applySession = (s: Session | null) => {
      const currentTransition = ++transition;
      const nextUserId = s?.user.id ?? null;
      void switchLocalUserData(activeUserId, nextUserId)
        .then(() => {
          if (currentTransition !== transition) return;
          activeUserId = nextUserId;
          setSession(s);
          syncSentryUser(s);
          void setUserId(s?.user?.id ?? null).catch(() => {});
          setLoading(false);
        })
        .catch(() => {
          if (currentTransition !== transition) return;
          setSession(null);
          syncSentryUser(null);
          setLoading(false);
          void supabase.auth.signOut();
        });
    };

    const initialTransition = transition;
    supabase.auth.getSession().then(({ data }) => {
      if (initialTransition === transition) applySession(data.session ?? null);
    });

    const { data: subscription } = supabase.auth.onAuthStateChange(
      (_event, newSession) => applySession(newSession),
    );

    return () => {
      subscription.subscription.unsubscribe();
    };
  }, []);

  return { session, loading };
}
