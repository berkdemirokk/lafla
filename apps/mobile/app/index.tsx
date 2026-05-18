// Splash — dark bg, wordmark, glowing pink line.
// Auto-routes: signed-in + onboarded → /home; signed-in only → /onboarding;
// signed-out → /auth. Tap on screen accelerates routing.

import { useEffect } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useRouter } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useSession } from "../lib/useSession";
import { getCurrentProfile } from "../lib/auth";
import { tokens } from "../theme";

export default function Splash() {
  const router = useRouter();
  const { session, loading } = useSession();

  useEffect(() => {
    if (loading) return;

    const decide = async () => {
      // Signed-in + onboarding done → home
      if (session) {
        const profile = await getCurrentProfile();
        if (profile?.onboarding_completed_at) {
          router.replace("/home" as never);
          return;
        }
      }
      // Local state — onboarded? home
      try {
        const localOnboarded = await AsyncStorage.getItem("lafla.onboarded");
        if (localOnboarded === "true") {
          router.replace("/home" as never);
          return;
        }
      } catch {}
      router.replace("/onboarding");
    };

    // Short brand reveal — keeps the splash perceivable without delaying
    // interactive time. Trimmed from 800ms to 300ms after perf audit.
    const t = setTimeout(decide, 300);
    return () => clearTimeout(t);
  }, [session, loading, router]);

  const skip = async () => {
    if (loading) return;
    if (session) {
      const profile = await getCurrentProfile();
      router.replace((profile?.onboarding_completed_at ? "/home" : "/onboarding") as never);
      return;
    }
    try {
      const localOnboarded = await AsyncStorage.getItem("lafla.onboarded");
      router.replace((localOnboarded === "true" ? "/home" : "/onboarding") as never);
    } catch {
      router.replace("/onboarding");
    }
  };

  return (
    <Pressable style={styles.container} onPress={skip}>
      <StatusBar style="light" />

      <View style={styles.center}>
        <Text style={styles.wordmark}>Lafla</Text>
        <View style={styles.accentLine} />
        <Text style={styles.tagline}>Konuş, çalış.</Text>
      </View>

      <View style={styles.bottomHint}>
        <Text style={styles.hintText}>Dokun, devam et</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: tokens.bg.onBackground,
    justifyContent: "center",
    alignItems: "center",
    padding: tokens.spacing.md,
  },
  center: {
    alignItems: "center",
  },
  wordmark: {
    fontSize: 72,
    fontWeight: tokens.weight.black,
    color: tokens.text.primary,
    letterSpacing: -2.5,
    fontFamily: tokens.font.sans,
  },
  accentLine: {
    width: 64,
    height: 2,
    backgroundColor: tokens.brand.primaryContainer,
    borderRadius: 1,
    marginTop: tokens.spacing.xs,
    marginBottom: tokens.spacing.md,
    // Glow effect — RN shadow
    shadowColor: tokens.brand.primaryContainer,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.6,
    shadowRadius: 15,
    elevation: 6,
  },
  tagline: {
    fontSize: 18,
    color: tokens.text.secondaryFixedDim,
    fontWeight: tokens.weight.medium,
    opacity: 0.9,
  },
  bottomHint: {
    position: "absolute",
    bottom: 48,
  },
  hintText: {
    color: tokens.text.secondary,
    fontSize: 14,
    fontWeight: tokens.weight.medium,
    letterSpacing: 1,
  },
});
