// Root navigator — Neon Noir, lean surface.
//
// History: the previous layout registered 32 screens. After the radical cut
// (2026-05-20) we kept only routes that map to the single-action home + voice
// loop. Faz 2 (v0.8.0) added phoneme-drill + listen-mode as silent-environment
// alternatives. Faz 3 (v0.9.0) kept the route surface stable. Current count
// is 16 — 10 core routes plus diary, voice-journal, relationships, profile,
// phoneme-drill, listen-mode. If any deep-link or referral URL still points to
// an old removed route, it 404s; that remains acceptable for v0.x.
//
// 2026-05-23 — Faz 3 son durumu: 16 route, hepsi kullanıcı-tarafından
// erişilebilir. Yeni ekran eklerken bu listeyi güncel tut.

import { useEffect } from "react";
import { Stack } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { ErrorBoundary } from "../components/ErrorBoundary";
import { initAnalytics, trackEvent } from "../lib/analytics";
import { initSentry } from "../lib/sentry";
import { initAds } from "../lib/ads";
import { requestAttOnce } from "../lib/att";
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
    // 2026-05-23 — Apple Review safety: AdMob başlatmadan ÖNCE ATT prompt
    // gösterilmeli. ATTrackingManager.requestTrackingAuthorization initAds
    // (mobileAds().initialize()) öncesinde çalışırsa Apple "Sequence
    // correct" der. requestAttOnce idempotent — 2. açılışta no-op.
    void (async () => {
      try {
        await requestAttOnce();
      } catch {
        // ATT failure non-critical; AdMob non-personalized'a düşer
      }
      void initAds().catch(() => {});
    })();
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
          <Stack.Screen name="placement" />
          <Stack.Screen name="paywall" />
          <Stack.Screen name="profile" />
          <Stack.Screen name="settings" />
          <Stack.Screen name="diary" />
          <Stack.Screen name="voice-journal" />
          <Stack.Screen name="relationships" />
          <Stack.Screen name="phoneme-drill" />
          <Stack.Screen name="listen-mode" />
        </Stack>
      </ErrorBoundary>
    </SafeAreaProvider>
  );
}
