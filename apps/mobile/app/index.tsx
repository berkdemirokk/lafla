// Splash — dark bg, wordmark, glowing pink line.
// Auto-routes: signed-in + onboarded → /home; signed-in only → /onboarding;
// signed-out → /auth. Tap on screen accelerates routing.

import { useEffect } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useRouter } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withDelay,
  Easing,
} from "react-native-reanimated";
import { useSession } from "../lib/useSession";
import { getCurrentProfile } from "../lib/auth";
import { tokens } from "../theme";

export default function Splash() {
  const router = useRouter();
  const { session, loading } = useSession();

  // Brand reveal animation — wordmark fade-in (200ms), accent line draws
  // out (240ms, delayed 120ms), tagline fades in last (delayed 320ms).
  // Total length ~500ms; well inside the 300ms route delay below since
  // most animations are driven on the UI thread via Reanimated.
  const wordmarkOpacity = useSharedValue(0);
  const wordmarkTranslate = useSharedValue(8);
  const accentScale = useSharedValue(0);
  const taglineOpacity = useSharedValue(0);

  useEffect(() => {
    wordmarkOpacity.value = withTiming(1, { duration: 220 });
    wordmarkTranslate.value = withTiming(0, {
      duration: 220,
      easing: Easing.out(Easing.cubic),
    });
    accentScale.value = withDelay(
      120,
      withTiming(1, { duration: 260, easing: Easing.out(Easing.cubic) }),
    );
    taglineOpacity.value = withDelay(320, withTiming(1, { duration: 200 }));
  }, [accentScale, taglineOpacity, wordmarkOpacity, wordmarkTranslate]);

  const wordmarkStyle = useAnimatedStyle(() => ({
    opacity: wordmarkOpacity.value,
    transform: [{ translateY: wordmarkTranslate.value }],
  }));
  const accentStyle = useAnimatedStyle(() => ({
    transform: [{ scaleX: accentScale.value }],
  }));
  const taglineStyle = useAnimatedStyle(() => ({
    opacity: taglineOpacity.value,
  }));

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
        <Animated.Text style={[styles.wordmark, wordmarkStyle]}>
          Lafla
        </Animated.Text>
        <Animated.View style={[styles.accentLine, accentStyle]} />
        <Animated.Text style={[styles.tagline, taglineStyle]}>
          Konuş, çalış.
        </Animated.Text>
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
