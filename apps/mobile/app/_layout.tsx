// Root navigator — light bg default, dark surfaces inherit per-screen.

import { useEffect } from "react";
import { Stack } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { ErrorBoundary } from "../components/ErrorBoundary";
import { initAnalytics, trackEvent } from "../lib/analytics";
import { initSentry } from "../lib/sentry";
import { warmupLastProvider } from "../lib/llm-router";
import { tokens } from "../theme";

// Initialize once at module load so the SDK is live before any render —
// crashes during the very first frame are still captured.
initSentry();

export default function RootLayout() {
  useEffect(() => {
    // Defensive: also run on mount in case the module-level call was a no-op
    // due to a transient config issue. initSentry() is idempotent.
    initSentry();
    // Fire-and-forget heartbeat to the last-used LLM provider. If it's
    // still warm the first chat turn returns in one round trip; if it's
    // dead we clear the cache here so the first turn starts cleanly at
    // Groq instead of stalling on a stale provider for the full timeout.
    void warmupLastProvider();
    // Analytics bootstrap — best-effort. Failures must never crash launch.
    void (async () => {
      try {
        await initAnalytics();
        await trackEvent("app_opened");
      } catch {
        // ignore — analytics is non-critical
      }
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
        <Stack.Screen name="tutorial" />
        <Stack.Screen name="onboarding" />
        <Stack.Screen name="feed" />
        <Stack.Screen name="lesson/[id]" />
        <Stack.Screen name="profile" />
        <Stack.Screen name="achievements" />
        <Stack.Screen name="skills" />
        <Stack.Screen name="settings" />
        <Stack.Screen name="paywall" />
        <Stack.Screen name="preview/[id]" />
        <Stack.Screen name="scenario/[id]" />
        <Stack.Screen name="about" />
        <Stack.Screen name="help" />
        <Stack.Screen name="freechat" />
        <Stack.Screen name="journal" />
        <Stack.Screen name="referral" />
        <Stack.Screen name="pronunciation/[id]" />
        {/* CEFR pivot routes */}
        <Stack.Screen name="placement-test" />
        <Stack.Screen name="program-select" />
        <Stack.Screen name="listening" />
        <Stack.Screen name="listening/[id]" />
        <Stack.Screen name="reading" />
        <Stack.Screen name="reading/[id]" />
        <Stack.Screen name="review" />
        <Stack.Screen name="decks" />
        <Stack.Screen name="deck/[id]" />
        {/* Maya + drill + share */}
        <Stack.Screen name="freechat-voice" />
        <Stack.Screen name="drill" />
        <Stack.Screen name="share/[template]" />
      </Stack>
      </ErrorBoundary>
    </SafeAreaProvider>
  );
}
