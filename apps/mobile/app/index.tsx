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
  withRepeat,
  withSequence,
  Easing,
} from "react-native-reanimated";
import { useSession } from "../lib/useSession";
import { getCurrentProfile } from "../lib/auth";
import { tokens } from "../theme";

export default function Splash() {
  const router = useRouter();
  const { session, loading } = useSession();

  // Brand reveal animation — wordmark zooms IN from "behind the screen"
  // with a subtle 3D perspective tilt. Halo glow pulses behind for premium
  // depth (Headspace splash referansı). Tagline floats in last with gentle
  // Y-oscillation. Total length ~500ms; well inside the 300ms route delay.
  //
  // 2026-05-23 — 3D enhancement. Önce sadece translateY + opacity vardı.
  // perspective + scale + rotateY ile "wordmark uzaktan yakına" hissi.
  // Brand-safe: çocuksu değil, Apple "Hello, Photos." stil reveal.
  const wordmarkOpacity = useSharedValue(0);
  const wordmarkScale = useSharedValue(0.7); // 3D zoom-in driver
  const wordmarkRotate = useSharedValue(8); // hafif Y-rotate 8° → 0°
  const accentScale = useSharedValue(0);
  const taglineOpacity = useSharedValue(0);
  const taglineFloat = useSharedValue(0); // Y-oscillation driver
  const haloPulse = useSharedValue(0); // wordmark halo glow

  useEffect(() => {
    wordmarkOpacity.value = withTiming(1, { duration: 280 });
    wordmarkScale.value = withTiming(1, {
      duration: 380,
      easing: Easing.out(Easing.cubic),
    });
    wordmarkRotate.value = withTiming(0, {
      duration: 380,
      easing: Easing.out(Easing.cubic),
    });
    accentScale.value = withDelay(
      140,
      withTiming(1, { duration: 280, easing: Easing.out(Easing.cubic) }),
    );
    taglineOpacity.value = withDelay(340, withTiming(1, { duration: 240 }));
    // Halo pulse — slow loop after entrance.
    haloPulse.value = withDelay(
      280,
      withRepeat(
        withTiming(1, {
          duration: 1800,
          easing: Easing.inOut(Easing.sin),
        }),
        -1,
        true,
      ),
    );
    // Tagline float — subtle 2px Y oscillation, breathing pace.
    taglineFloat.value = withDelay(
      400,
      withRepeat(
        withSequence(
          withTiming(1, { duration: 1400, easing: Easing.inOut(Easing.sin) }),
          withTiming(0, { duration: 1400, easing: Easing.inOut(Easing.sin) }),
        ),
        -1,
        false,
      ),
    );
  }, [
    accentScale,
    taglineOpacity,
    taglineFloat,
    wordmarkOpacity,
    wordmarkScale,
    wordmarkRotate,
    haloPulse,
  ]);

  // perspective 800 → kart "ekranın arkasından öne geliyor" hissi.
  // scale 0.7 → 1 ile yakınlaşma, rotateY 8° → 0° ile hafif "tilted to flat" geçişi.
  const wordmarkStyle = useAnimatedStyle(() => ({
    opacity: wordmarkOpacity.value,
    transform: [
      { perspective: 800 },
      { scale: wordmarkScale.value },
      { rotateY: `${wordmarkRotate.value}deg` },
    ],
  }));
  const accentStyle = useAnimatedStyle(() => ({
    transform: [{ scaleX: accentScale.value }],
  }));
  const taglineStyle = useAnimatedStyle(() => ({
    opacity: taglineOpacity.value,
    transform: [{ translateY: taglineFloat.value * -2 }],
  }));
  // Halo glow ring — Apple Watch face glow tarzı SUBTLE pulsation.
  // 2026-05-23 ilk versiyon shadowRadius 60 + opacity 0.7 yapıyordu —
  // "neon tabela" hissi, brand'a uygun değildi. Şimdi yarı: opacity max
  // 0.22, scale 0.97→1.05 (sınırlı breath). Cookie Clicker değil,
  // Headspace meditation halo.
  const haloStyle = useAnimatedStyle(() => ({
    opacity: 0.10 + haloPulse.value * 0.12,
    transform: [{ scale: 0.97 + haloPulse.value * 0.08 }],
  }));

  useEffect(() => {
    if (loading) return;

    const decide = async () => {
      // Signed-in + onboarding done → home
      if (session) {
        const profile = await getCurrentProfile();
        if (profile?.onboarding_completed_at) {
          router.replace("/today" as never);
          return;
        }
      }
      // Local state — onboarded? home
      try {
        const localOnboarded = await AsyncStorage.getItem("lafla.onboarded");
        if (localOnboarded === "true") {
          router.replace("/today" as never);
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
      router.replace((profile?.onboarding_completed_at ? "/today" : "/onboarding") as never);
      return;
    }
    try {
      const localOnboarded = await AsyncStorage.getItem("lafla.onboarded");
      router.replace((localOnboarded === "true" ? "/today" : "/onboarding") as never);
    } catch {
      router.replace("/onboarding");
    }
  };

  return (
    <Pressable style={styles.container} onPress={skip}>
      <StatusBar style="light" />

      <View style={styles.center}>
        {/* Halo glow ring — wordmark'ın arkasında 3D depth katmanı.
            pointerEvents: none → tap'i Pressable skip'e geçirir. */}
        <Animated.View
          pointerEvents="none"
          style={[styles.halo, haloStyle]}
        />
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
  // Halo glow ring — Apple Watch face glow tarzı. 180px (önceden 280),
  // shadowRadius 28 (önceden 60), opacity animated 0.10-0.22 (önceden
  // 0.35-0.70). Premium minimal pulse, "neon tabela" değil.
  halo: {
    position: "absolute",
    width: 180,
    height: 180,
    borderRadius: 90,
    backgroundColor: tokens.brand.primarySoft,
    shadowColor: tokens.brand.primary,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.55,
    shadowRadius: 28,
    elevation: 10,
    top: -20,
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
