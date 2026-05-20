// Root navigator — Neon Noir, 10-route minimum surface.
//
// History: the previous layout registered 32 screens. After the radical cut
// we keep only the 10 routes that map to the new single-action home + voice
// loop. Everything else (decks, listening, reading, tutorial, etc.) was
// removed from routing. If any deep-link or referral URL still points to an
// old route, it now 404s; that's acceptable for v0.1.

import { useEffect } from "react";
import { Stack } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { ErrorBoundary } from "../components/ErrorBoundary";
import { initAnalytics, trackEvent } from "../lib/analytics";
import { initSentry } from "../lib/sentry";
import { initAds } from "../lib/ads";
import { tokens } from "../theme";

// Initialize once at module load so the SDK is live before any render —
// crashes during the very first frame are still captured.
initSentry();

export default function RootLayout() {
  useEffect(() => {
    // Defensive: also run on mount in case the module-level call was a no-op
    // due to a transient config issue. initSentry() is idempotent.
    initSentry();
    // Analytics bootstrap — best-effort. Failures must never crash launch.
    void (async () => {
      try {
        await initAnalytics();
        await trackEvent("app_opened");
      } catch {
        // ignore — analytics is non-critical
      }
    })();
    // AdMob bootstrap — non-blocking. Premium kullanıcıda zaten ad
    // render edilmez, ama SDK initialize lifecycle event'leri için open.
    void initAds().catch(() => {});
  }, []);

  return (
    <SafeAreaProvider>
      <ErrorBoundary>
        <Stack
          screenOptions={{
            headerShown: false,
            contentStyle: { backgroundColor: tokens.bg.app },
            animation: "fade",
          }}
        >
          <Stack.Screen
            name="index"
            options={{ contentStyle: { backgroundColor: tokens.bg.onBackground } }}
          />
          <Stack.Screen name="auth" />
          <Stack.Screen name="onboarding" />
          <Stack.Screen name="home" />
          <Stack.Screen name="scenario/[id]" />
          <Stack.Screen name="freechat" />
          <Stack.Screen name="review" />
          <Stack.Screen name="paywall" />
          <Stack.Screen name="profile" />
          <Stack.Screen name="settings" />
        </Stack>
      </ErrorBoundary>
    </SafeAreaProvider>
  );
}
