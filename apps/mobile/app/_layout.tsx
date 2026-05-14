// Root navigator — light bg default, dark surfaces inherit per-screen.

import { Stack } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { ErrorBoundary } from "../components/ErrorBoundary";
import { tokens } from "../theme";

export default function RootLayout() {
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
        <Stack.Screen name="scoreboard" />
        <Stack.Screen name="streakcalendar" />
        <Stack.Screen name="pronunciation/[id]" />
        {/* Wave 3 — CEFR pivot routes */}
        <Stack.Screen name="placement-test" />
        <Stack.Screen name="program-select" />
        <Stack.Screen name="listening" />
        <Stack.Screen name="listening/[id]" />
        <Stack.Screen name="reading" />
        <Stack.Screen name="reading/[id]" />
        <Stack.Screen name="review" />
        <Stack.Screen name="decks" />
        <Stack.Screen name="deck/[id]" />
        {/* Wave 4 — Lucida-killer routes */}
        <Stack.Screen name="freechat-voice" />
        <Stack.Screen name="drill" />
        <Stack.Screen name="voip" />
        <Stack.Screen name="voip/[id]" />
        <Stack.Screen name="cultural" />
        <Stack.Screen name="cultural-quiz" />
        <Stack.Screen name="missions" />
        <Stack.Screen name="mission/[id]" />
        <Stack.Screen name="visa-bank" />
        <Stack.Screen name="visa-question/[id]" />
        <Stack.Screen name="share/[template]" />
        <Stack.Screen name="certificate" />
        <Stack.Screen name="certificate/[id]" />
        {/* Wave 5 — extension routes */}
        <Stack.Screen name="bookmarks" />
        <Stack.Screen name="coach-notes" />
        <Stack.Screen name="family" />
        <Stack.Screen name="backup" />
      </Stack>
      </ErrorBoundary>
    </SafeAreaProvider>
  );
}
