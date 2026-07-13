// Splash — dark bg, wordmark, glowing pink line.
// Auto-routes: signed-in + onboarded → /home; signed-in only → /onboarding;
// signed-out → /auth. Tap on screen accelerates routing.

import { useEffect, useRef } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { ThemedStatusBar } from "../components/ThemedStatusBar";
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
import { useTranslation } from "../lib/i18n";
import { tokens } from "../theme";
import {
  consumePendingNotificationRoute,
  waitForNotificationBootstrap,
} from "../lib/notification-routing";
import { useReduceMotionPreference } from "../lib/use-reduce-motion-preference";

export default function Splash() {
  const router = useRouter();
  const { t } = useTranslation();
  const { session, loading } = useSession();
  const reduceMotion = useReduceMotionPreference();
  // 2026-05-25 (B-AUTH-3) — decide() setTimeout ile skip() Pressable arasında
  // race: kullanıcı 300ms reveal sırasında ekrana dokunursa hem skip hem
  // decide router.replace tetikliyordu → expo-router'da çift navigation,
  // last-write-wins. Bayrak: ilk yürüten route'lar, ikinci no-op.
  const routedRef = useRef(false);

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
    if (reduceMotion) {
      wordmarkOpacity.value = 1;
      wordmarkScale.value = 1;
      wordmarkRotate.value = 0;
      accentScale.value = 1;
      taglineOpacity.value = 1;
      taglineFloat.value = 0;
      haloPulse.value = 0;
      return;
    }
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
    reduceMotion,
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

    // 2026-05-25 — Bug fix: session null iken splash /today'e atıyordu
    // (lafla.onboarded="true" varsa). Sonuç: kullanıcı auth ekranını asla
    // göremedi, "kullanıcı girişi çıkmıyor" şikayeti. Doğru davranış:
    // signed-out user her zaman /auth'a gelir; oradan "Atla" ile onboarding/
    // today'e skip edebilir. Local onboarded flag artık SADECE auth'tan
    // Atla path'inde okunur (auth.tsx skipAuth).
    const decide = async () => {
      if (routedRef.current) return; // skip() öne geçtiyse no-op
      // 2026-05-26 (P1 audit fix) — routedRef'i await ÖNCE set etmek çift
      // navigation'ı önlüyordu, AMA getCurrentProfile + AsyncStorage ikisi
      // de throw atarsa router.replace çağrılmadan flag true kalıyordu →
      // splash sonsuza dek "Dokun, devam et" gösteriyordu (skip de no-op).
      // Yeni: navigation hedefini hesapla, sonra flag set + router.replace
      // ATOMIC çağır. Hata path'i de defensive olarak /auth'a düşer.
      await waitForNotificationBootstrap();
      const pendingNotificationRoute = consumePendingNotificationRoute();
      let target: string = "/auth";
      if (session) {
        // 2026-05-25 — Signed-in user için SERVER profili authoritative.
        let profileOnboarded = false;
        try {
          const profile = await getCurrentProfile();
          profileOnboarded = !!profile?.onboarding_completed_at;
        } catch {
          // Network fail — offline fallback to local.
          try {
            const localOnboarded = await AsyncStorage.getItem("lafla.onboarded");
            profileOnboarded = localOnboarded === "true";
          } catch {
            // ignore — onboarded false kalır, en kötü onboarding'e gider
          }
        }
        target = profileOnboarded
          ? pendingNotificationRoute ?? "/today"
          : "/onboarding";
      }
      // Skip() yarışı: hedef hesaplandı, set + replace ATOMIC.
      if (routedRef.current) return; // skip() bu sırada öne geçtiyse no-op
      routedRef.current = true;
      router.replace(target as never);
    };

    // Short brand reveal — keeps the splash perceivable without delaying
    // interactive time. Trimmed from 800ms to 300ms after perf audit.
    const t = setTimeout(decide, 300);
    return () => clearTimeout(t);
  }, [session, loading, router]);

  const skip = async () => {
    if (loading) return;
    if (routedRef.current) return; // decide() öne geçtiyse no-op
    await waitForNotificationBootstrap();
    const pendingNotificationRoute = consumePendingNotificationRoute();
    if (session) {
      let target: string = "/onboarding";
      try {
        const profile = await getCurrentProfile();
        target = profile?.onboarding_completed_at
          ? pendingNotificationRoute ?? "/today"
          : "/onboarding";
      } catch {
        try {
          const localOnboarded = await AsyncStorage.getItem("lafla.onboarded");
          target = localOnboarded === "true"
            ? pendingNotificationRoute ?? "/today"
            : "/onboarding";
        } catch {
          target = "/onboarding";
        }
      }
      if (routedRef.current) return;
      routedRef.current = true;
      router.replace(target as never);
      return;
    }
    // Signed-out tap — same destination as decide(): /auth.
    routedRef.current = true;
    router.replace("/auth" as never);
  };

  return (
    <Pressable
      style={styles.container}
      onPress={skip}
      disabled={loading}
      accessibilityRole="button"
      accessibilityLabel={t("splash.accessibility_label")}
      accessibilityHint={t("splash.accessibility_hint")}
      accessibilityState={{ disabled: loading, busy: loading }}
    >
      <ThemedStatusBar />

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
          {t("splash.tagline")}
        </Animated.Text>
      </View>

      <View style={styles.bottomHint}>
        <Text style={styles.hintText}>{t("splash.tap_to_continue")}</Text>
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
