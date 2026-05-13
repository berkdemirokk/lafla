// Root navigator — light bg default, dark surfaces inherit per-screen.

import { Stack } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { tokens } from "../theme";

export default function RootLayout() {
  return (
    <SafeAreaProvider>
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
      </Stack>
    </SafeAreaProvider>
  );
}
