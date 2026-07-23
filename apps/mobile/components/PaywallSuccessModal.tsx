// Lafla — Paywall success celebration modal.
//
// 2026-05-24 — Alert.alert() iOS sistem dialogu yerine full-screen kutlama.
// En premium an (Lafla Pro aktif), en custom UX olmalı. Pembe halo + cyan
// vurgu noktaları + breathing animation → "premium hissi" değil "kutlama" izlenimi.
//
// Akış: paywall.tsx purchase başarılı → setShowSuccess(true) → modal mount
// → 600ms entrance animation → kullanıcı CTA basar → onClose() çağrılır →
// paywall navigation logic devreye girer (from=intro ise /today, değilse back).

import { useEffect } from "react";
import { Modal, Pressable, StyleSheet, Text, View } from "react-native";
import { ThemedStatusBar } from "./ThemedStatusBar";
import Animated, {
  Easing,
  cancelAnimation,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withRepeat,
  withSequence,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import { SafeAreaView } from "react-native-safe-area-context";

import { Icon } from "./Icon";
import { tokens } from "../theme";
import { useTranslation } from "../lib/i18n";
import { useReduceMotionPreference } from "../lib/use-reduce-motion-preference";

interface Props {
  visible: boolean;
  onClose: () => void;
}

const UNLOCKED: Array<{ icon: "infinite" | "trending" | "shield"; labelKey: string }> = [
  { icon: "infinite", labelKey: "paywall.success.unlimited" },
  { icon: "trending", labelKey: "paywall.success.ielts" },
  { icon: "shield", labelKey: "paywall.success.streak" },
];

export function PaywallSuccessModal({ visible, onClose }: Props) {
  const { t } = useTranslation();
  const reduceMotion = useReduceMotionPreference();
  // Halo nabız — slow breath 2.4s sin loop.
  const haloPulse = useSharedValue(0);
  // Hero scale-in (mount'ta).
  const heroScale = useSharedValue(0.85);
  const heroOpacity = useSharedValue(0);
  // Feature list staggered fade-in.
  const featuresOpacity = useSharedValue(0);
  const ctaOpacity = useSharedValue(0);

  useEffect(() => {
    if (!visible) {
      // 2026-05-26 (P1 audit fix) — withRepeat(-1) infinite loop scheduler'ı
      // sadece value reset etmek durdurmuyor. cancelAnimation ile UI thread
      // worklet'i de iptal et — open/close hızlı tekrarında scheduler leak
      // birikmesin.
      cancelAnimation(haloPulse);
      // Reset to initial state so next open animates again.
      haloPulse.value = 0;
      heroScale.value = 0.85;
      heroOpacity.value = 0;
      featuresOpacity.value = 0;
      ctaOpacity.value = 0;
      return;
    }
    if (reduceMotion) {
      cancelAnimation(haloPulse);
      haloPulse.value = 0;
      heroScale.value = 1;
      heroOpacity.value = 1;
      featuresOpacity.value = 1;
      ctaOpacity.value = 1;
    } else {
      haloPulse.value = withRepeat(
        withSequence(
          withTiming(1, { duration: 1200, easing: Easing.inOut(Easing.sin) }),
          withTiming(0, { duration: 1200, easing: Easing.inOut(Easing.sin) }),
        ),
        -1,
        false,
      );
      heroScale.value = withSpring(1, { damping: 12, stiffness: 180 });
      heroOpacity.value = withTiming(1, {
        duration: 360,
        easing: Easing.out(Easing.cubic),
      });
      featuresOpacity.value = withDelay(
        280,
        withTiming(1, { duration: 420, easing: Easing.out(Easing.cubic) }),
      );
      ctaOpacity.value = withDelay(
        520,
        withTiming(1, { duration: 380, easing: Easing.out(Easing.cubic) }),
      );
    }
  }, [visible, reduceMotion, haloPulse, heroScale, heroOpacity, featuresOpacity, ctaOpacity]);

  const haloStyle = useAnimatedStyle(() => ({
    opacity: 0.28 + haloPulse.value * 0.32,
    transform: [{ scale: 1 + haloPulse.value * 0.08 }],
  }));
  const heroStyle = useAnimatedStyle(() => ({
    opacity: heroOpacity.value,
    transform: [{ scale: heroScale.value }],
  }));
  const featuresStyle = useAnimatedStyle(() => ({
    opacity: featuresOpacity.value,
  }));
  const ctaStyle = useAnimatedStyle(() => ({ opacity: ctaOpacity.value }));

  return (
    <Modal
      animationType="fade"
      visible={visible}
      transparent={false}
      statusBarTranslucent
      onRequestClose={onClose}
    >
      <SafeAreaView style={styles.safe} edges={["top", "bottom"]}>
        <ThemedStatusBar />
        <View style={styles.body}>
          {/* Pembe halo arka plan — breathing */}
          <Animated.View style={[styles.halo, haloStyle]} pointerEvents="none" />

          {/* Hero: checkmark + başlık */}
          <Animated.View style={[styles.hero, heroStyle]}>
            <View style={styles.checkCircle}>
              <Icon name="checkmark" size={36} color={tokens.brand.tertiary} />
            </View>
            <Text style={styles.title}>{t("paywall.success.title")}</Text>
            <Text style={styles.subtitle}>{t("paywall.success.subtitle")}</Text>
          </Animated.View>

          {/* Açılan özellikler */}
          <Animated.View style={[styles.features, featuresStyle]}>
            {UNLOCKED.map((f) => (
              <View key={f.labelKey} style={styles.featureRow}>
                <View style={styles.featureIcon}>
                  <Icon name={f.icon} size={18} color={tokens.brand.primary} />
                </View>
                <Text style={styles.featureLabel}>{t(f.labelKey)}</Text>
              </View>
            ))}
          </Animated.View>

          {/* CTA */}
          <Animated.View style={[styles.ctaWrap, ctaStyle]}>
            <Pressable
              onPress={onClose}
              style={({ pressed }) => [styles.cta, pressed && styles.ctaPressed]}
              accessibilityRole="button"
              accessibilityLabel={t("paywall.success.cta_label")}
            >
              <Text style={styles.ctaText}>{t("paywall.success.cta")}</Text>
            </Pressable>
          </Animated.View>
        </View>
      </SafeAreaView>
    </Modal>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: tokens.bg.app },
  body: {
    flex: 1,
    paddingHorizontal: 24,
    paddingBottom: 40,
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  halo: {
    position: "absolute",
    top: "20%",
    width: 340,
    height: 340,
    borderRadius: 170,
    backgroundColor: tokens.brand.primarySoft,
    shadowColor: tokens.brand.primary,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.6,
    shadowRadius: 60,
    elevation: 18,
  },
  hero: {
    alignItems: "center",
    marginBottom: tokens.spacing.lg,
  },
  checkCircle: {
    width: 88,
    height: 88,
    borderRadius: 44,
    backgroundColor: tokens.brand.tertiarySoft,
    borderWidth: 2,
    borderColor: tokens.brand.tertiary,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: tokens.spacing.md,
    shadowColor: tokens.brand.tertiary,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.6,
    shadowRadius: 20,
    elevation: 8,
  },
  title: {
    fontSize: 32,
    color: tokens.text.primary,
    fontFamily: tokens.font.display,
    letterSpacing: -0.6,
    marginBottom: 10,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 15,
    color: tokens.text.secondary,
    textAlign: "center",
    lineHeight: 22,
    paddingHorizontal: 12,
    fontFamily: tokens.font.sans,
  },
  features: {
    width: "100%",
    gap: 10,
    marginBottom: tokens.spacing.lg,
  },
  featureRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    paddingVertical: 12,
    paddingHorizontal: 14,
    borderRadius: tokens.radius.base,
    backgroundColor: tokens.bg.surfaceContainer,
    borderWidth: 1,
    borderColor: tokens.border.outlineVariant,
  },
  featureIcon: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: tokens.brand.primarySoft,
    alignItems: "center",
    justifyContent: "center",
  },
  featureLabel: {
    flex: 1,
    fontSize: 15,
    color: tokens.text.primary,
    fontFamily: tokens.font.sansSemi,
    letterSpacing: -0.2,
  },
  ctaWrap: { width: "100%" },
  cta: {
    backgroundColor: tokens.brand.primary,
    paddingVertical: 18,
    borderRadius: tokens.radius.full,
    alignItems: "center",
    shadowColor: tokens.brand.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 14,
    elevation: 8,
  },
  ctaPressed: {
    opacity: 0.92,
    transform: [{ scale: 0.98 }],
  },
  ctaText: {
    fontSize: 17,
    color: tokens.brand.onPrimary,
    fontFamily: tokens.font.sansExtra,
    letterSpacing: 0.3,
  },
});
