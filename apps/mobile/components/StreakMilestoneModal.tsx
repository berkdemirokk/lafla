// Lafla — Streak milestone full-screen celebration.
//
// 2026-05-24 — Day-7/30/100 streak hit'leri için AchievementToast'ın 3.5sn'lik
// versiyonu yetersiz kalıyordu. Habit formation'ın en kritik anı için ekrana
// hâkim bir kutlama. Modal layered:
//   1. Layered halo (cyan + pembe nabız) — streak rengi cyan, başarı semantik
//   2. Streak number — büyük, gradient-like effect
//   3. Milestone title (örn "1 HAFTA ARALIKSIZ")
//   4. Subtitle (örn "Yedi gün üst üste pratik.")
//   5. "Paylaş" CTA — captureRef + Sharing.shareAsync ile story-friendly kart
//   6. "Devam et" CTA — modal'ı kapatır
//
// AchievementToast catch-all kalır (lesson sayıları, XP, perfect_scene, mode
// mastery, first_signin için). Sadece streak_7/streak_30/streak_100 → modal.

import { forwardRef, useEffect, useRef, useState } from "react";
import {
  Modal,
  Pressable,
  StyleSheet,
  Text,
  View,
  Platform,
  type ViewStyle,
} from "react-native";
import { ThemedStatusBar } from "./ThemedStatusBar";
import { SafeAreaView } from "react-native-safe-area-context";
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
import { captureRef } from "react-native-view-shot";
import * as Sharing from "expo-sharing";

import { Icon } from "./Icon";
import { tokens } from "../theme";
import { hapticImpact, hapticSuccess } from "../lib/feedback";
import { trackEvent } from "../lib/analytics";
import { useTranslation } from "../lib/i18n";
import { useReduceMotionPreference } from "../lib/use-reduce-motion-preference";

interface Props {
  visible: boolean;
  /** Streak gün sayısı (7, 30, 100 gibi) */
  streakDays: number;
  /** Modal kapanma callback'i */
  onClose: () => void;
}

interface MilestoneCopy {
  /** Modal hero title (büyük) */
  titleKey: string;
  /** Subtitle (küçük) */
  subtitleKey: string;
  /** Share card slogan satırı */
  shareSloganKey: string;
  /** Icon name (Icon component'inden) */
  iconName: "streak" | "trending";
}

function copyKeysFor(days: number): MilestoneCopy {
  if (days >= 100) {
    return {
      titleKey: "streak.milestone.100_title",
      subtitleKey: "streak.milestone.100_subtitle",
      shareSloganKey: "streak.milestone.100_share",
      iconName: "trending",
    };
  }
  if (days >= 30) {
    return {
      titleKey: "streak.milestone.30_title",
      subtitleKey: "streak.milestone.30_subtitle",
      shareSloganKey: "streak.milestone.30_share",
      iconName: "trending",
    };
  }
  if (days >= 7) {
    return {
      titleKey: "streak.milestone.7_title",
      subtitleKey: "streak.milestone.7_subtitle",
      shareSloganKey: "streak.milestone.7_share",
      iconName: "streak",
    };
  }
  // Fallback — düşük gün için modal kullanılmamalı ama defensive
  return {
    titleKey: "streak.milestone.default_title",
    subtitleKey: "streak.milestone.default_subtitle",
    shareSloganKey: "streak.milestone.default_share",
    iconName: "streak",
  };
}

export function StreakMilestoneModal({ visible, streakDays, onClose }: Props) {
  const { t } = useTranslation();
  const reduceMotion = useReduceMotionPreference();
  const copyKeys = copyKeysFor(streakDays);
  const vars = { days: String(streakDays) };
  const copy = {
    iconName: copyKeys.iconName,
    title: t(copyKeys.titleKey, vars),
    subtitle: t(copyKeys.subtitleKey, vars),
    shareSlogan: t(copyKeys.shareSloganKey, vars),
  };
  const shareCardRef = useRef<View | null>(null);
  const [sharing, setSharing] = useState(false);
  // 2026-05-26 (P1 audit fix) — Parent re-render'da visible=true ve aynı
  // streakDays ile effect tekrar fire ederse hapticSuccess + analytics
  // event de re-emit oluyordu. firedRef streak+visible combo'su için
  // idempotency garantiler; visible=false olunca reset.
  const firedRef = useRef<number | null>(null);

  // Halo nabız — slow breath
  const haloPulse = useSharedValue(0);
  // Streak number scale-in
  const numberScale = useSharedValue(0.6);
  const numberOpacity = useSharedValue(0);
  // Title/subtitle stagger
  const titleOpacity = useSharedValue(0);
  const titleTranslate = useSharedValue(12);
  const subtitleOpacity = useSharedValue(0);
  // CTAs
  const ctaOpacity = useSharedValue(0);

  useEffect(() => {
    if (!visible) {
      // 2026-05-26 (P1 audit fix) — withRepeat infinite loop scheduler'ı
      // value reset etmek yetmiyor; cancelAnimation ile worklet de iptal.
      cancelAnimation(haloPulse);
      haloPulse.value = 0;
      numberScale.value = 0.6;
      numberOpacity.value = 0;
      titleOpacity.value = 0;
      titleTranslate.value = 12;
      subtitleOpacity.value = 0;
      ctaOpacity.value = 0;
      // 2026-05-26 — Modal kapanınca firedRef'i sıfırla; aynı streakDays
      // ile tekrar açılırsa haptic+event yeniden fire etsin.
      firedRef.current = null;
      return;
    }
    if (reduceMotion) {
      cancelAnimation(haloPulse);
      haloPulse.value = 0;
      numberScale.value = 1;
      numberOpacity.value = 1;
      titleOpacity.value = 1;
      titleTranslate.value = 0;
      subtitleOpacity.value = 1;
      ctaOpacity.value = 1;
    } else {
    haloPulse.value = withRepeat(
      withSequence(
        withTiming(1, { duration: 1400, easing: Easing.inOut(Easing.sin) }),
        withTiming(0, { duration: 1400, easing: Easing.inOut(Easing.sin) }),
      ),
      -1,
      false,
    );
    // Number pop
    numberScale.value = withSpring(1, { damping: 10, stiffness: 160 });
    numberOpacity.value = withTiming(1, {
      duration: 380,
      easing: Easing.out(Easing.cubic),
    });
    // Title
    titleOpacity.value = withDelay(
      220,
      withTiming(1, { duration: 360, easing: Easing.out(Easing.cubic) }),
    );
    titleTranslate.value = withDelay(
      220,
      withTiming(0, { duration: 360, easing: Easing.out(Easing.cubic) }),
    );
    // Subtitle
    subtitleOpacity.value = withDelay(
      360,
      withTiming(1, { duration: 380, easing: Easing.out(Easing.cubic) }),
    );
    // CTAs
    ctaOpacity.value = withDelay(
      520,
      withTiming(1, { duration: 380, easing: Easing.out(Easing.cubic) }),
    );
    }

    // 2026-05-26 (P1 audit fix) — haptic + analytics idempotency. Parent
    // re-render'da visible=true sabit kalsa bile aynı streak için tek bir
    // hapticSuccess ve tek event emitted olur.
    if (firedRef.current !== streakDays) {
      firedRef.current = streakDays;
      try {
        hapticSuccess();
      } catch {
        // ignore
      }
      void trackEvent("streak_milestone_modal_shown", {
        streak_days: streakDays,
      }).catch(() => {});
    }
  }, [
    visible,
    streakDays,
    reduceMotion,
    haloPulse,
    numberScale,
    numberOpacity,
    titleOpacity,
    titleTranslate,
    subtitleOpacity,
    ctaOpacity,
  ]);

  const haloStyle = useAnimatedStyle(() => ({
    opacity: 0.28 + haloPulse.value * 0.42,
    transform: [{ scale: 1 + haloPulse.value * 0.08 }],
  }));
  const numberStyle = useAnimatedStyle(() => ({
    opacity: numberOpacity.value,
    transform: [{ scale: numberScale.value }],
  }));
  const titleStyle = useAnimatedStyle(() => ({
    opacity: titleOpacity.value,
    transform: [{ translateY: titleTranslate.value }],
  }));
  const subtitleStyle = useAnimatedStyle(() => ({
    opacity: subtitleOpacity.value,
  }));
  const ctaStyle = useAnimatedStyle(() => ({ opacity: ctaOpacity.value }));

  const handleShare = async () => {
    if (sharing) return;
    hapticImpact("medium");
    setSharing(true);
    void trackEvent("streak_milestone_share_initiated", {
      streak_days: streakDays,
    }).catch(() => {});
    try {
      const ref = shareCardRef.current;
      if (!ref) throw new Error("share card ref missing");
      const uri = await captureRef(ref, {
        format: "png",
        quality: 1,
        result: "tmpfile",
      });
      const available = await Sharing.isAvailableAsync();
      if (!available) {
        throw new Error("Sharing not available on this device");
      }
      await Sharing.shareAsync(uri, {
        dialogTitle: copy.shareSlogan,
        mimeType: "image/png",
        UTI: "public.png",
      });
      void trackEvent("streak_milestone_share_completed", {
        streak_days: streakDays,
      }).catch(() => {});
    } catch (err) {
      // Paylaşım fail'i kullanıcının deneyimini bozmaz — sessiz fallback,
      // sadece analytics'e logla.
      void trackEvent("streak_milestone_share_failed", {
        streak_days: streakDays,
        reason: err instanceof Error ? err.message : "unknown",
      }).catch(() => {});
    } finally {
      setSharing(false);
    }
  };

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
          {/* Cyan halo arka plan — breathing */}
          <Animated.View
            style={[styles.haloCyan, haloStyle]}
            pointerEvents="none"
          />
          {/* Pembe alt-halo — daha küçük, sıcak ton katmanı */}
          <View style={styles.haloPink} pointerEvents="none" />

          {/* Streak number */}
          <Animated.View style={[styles.numberWrap, numberStyle]}>
            <Icon
              name={copy.iconName}
              size={36}
              color={tokens.brand.tertiary}
            />
            <Text style={styles.streakNumber}>{streakDays}</Text>
            <Text style={styles.streakDaysLabel}>{t("streak.days")}</Text>
          </Animated.View>

          {/* Title */}
          <Animated.View style={titleStyle}>
            <Text style={styles.title}>{copy.title}</Text>
          </Animated.View>

          {/* Subtitle */}
          <Animated.View style={subtitleStyle}>
            <Text style={styles.subtitle}>{copy.subtitle}</Text>
          </Animated.View>

          {/* CTAs */}
          <Animated.View style={[styles.ctaCol, ctaStyle]}>
            <Pressable
              onPress={() => void handleShare()}
              disabled={sharing}
              style={({ pressed }) => [
                styles.shareCta,
                pressed && styles.shareCtaPressed,
                sharing && styles.shareCtaDisabled,
              ]}
              accessibilityRole="button"
              accessibilityLabel={t("streak.share_label")}
            >
              <Icon name="share" size={18} color={tokens.text.primary} />
              <Text style={styles.shareCtaText}>
                {sharing ? t("streak.preparing") : t("streak.share")}
              </Text>
            </Pressable>

            <Pressable
              onPress={() => {
                hapticImpact("light");
                onClose();
              }}
              style={({ pressed }) => [
                styles.continueCta,
                pressed && styles.continueCtaPressed,
              ]}
              accessibilityRole="button"
              accessibilityLabel={t("common.continue")}
            >
              <Text style={styles.continueCtaText}>{t("common.continue")}</Text>
            </Pressable>
          </Animated.View>
        </View>

        {/* Hidden share card — render off-screen, captureRef ile yakalanır.
            Modal görünür durumdayken layout'ta var ama kullanıcıya görünmez
            (position absolute + opacity 0). View-shot collapsable=false ile
            gerçek pixel'leri yakalar. */}
        <View style={styles.hiddenShareCard} pointerEvents="none">
          <StreakShareCard
            ref={shareCardRef}
            streakDays={streakDays}
            slogan={copy.shareSlogan}
          />
        </View>
      </SafeAreaView>
    </Modal>
  );
}

// ─── Streak share card — story-friendly 1080×1920 (270×480 preview) ───

interface StreakShareCardProps {
  streakDays: number;
  slogan: string;
  style?: ViewStyle;
}

const StreakShareCard = forwardRef<View, StreakShareCardProps>(
  function StreakShareCard({ streakDays, slogan, style }, ref) {
    const { t } = useTranslation();
    return (
      <View ref={ref} style={[shareStyles.card, style]} collapsable={false}>
        {/* Glow halo */}
        <View style={shareStyles.bgGlow} pointerEvents="none" />

        {/* Top — wordmark */}
        <View style={shareStyles.topBar}>
          <Text style={shareStyles.wordmark}>Lafla</Text>
          <Text style={shareStyles.tagline}>{t("tagline")}</Text>
        </View>

        {/* Hero — streak number */}
        <View style={shareStyles.hero}>
          <Text style={shareStyles.numberBig}>{streakDays}</Text>
          <Text style={shareStyles.numberSub}>{t("streak.days_unbroken")}</Text>
        </View>

        {/* Footer — slogan + URL */}
        <View style={shareStyles.footer}>
          <Text style={shareStyles.slogan}>{slogan}</Text>
          <Text style={shareStyles.url}>lafla.app</Text>
        </View>
      </View>
    );
  },
);

// ─── Styles ───

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: tokens.bg.app },
  body: {
    flex: 1,
    paddingHorizontal: 28,
    paddingBottom: 32,
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    gap: 8,
  },
  // Cyan halo — büyük, breathing
  haloCyan: {
    position: "absolute",
    width: 380,
    height: 380,
    borderRadius: 190,
    backgroundColor: tokens.brand.tertiarySoft,
    shadowColor: tokens.brand.tertiary,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.7,
    shadowRadius: 80,
    elevation: 20,
  },
  // Pembe sıcak ton katmanı — küçük, sabit
  haloPink: {
    position: "absolute",
    top: "50%",
    width: 220,
    height: 220,
    borderRadius: 110,
    marginTop: -110,
    backgroundColor: tokens.brand.primarySoft,
    opacity: 0.35,
  },

  // Streak number
  numberWrap: {
    alignItems: "center",
    marginBottom: tokens.spacing.md,
  },
  streakNumber: {
    fontSize: 128,
    color: tokens.text.primary,
    fontFamily: tokens.font.display,
    letterSpacing: -6,
    lineHeight: 128,
    textShadowColor: tokens.brand.tertiary,
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 22,
    marginTop: 8,
  },
  streakDaysLabel: {
    fontSize: 14,
    color: tokens.brand.tertiary,
    fontFamily: tokens.font.sansExtra,
    letterSpacing: 4,
    marginTop: -8,
  },

  // Title
  title: {
    fontSize: 26,
    color: tokens.text.primary,
    fontFamily: tokens.font.display,
    letterSpacing: 0.4,
    textAlign: "center",
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 15,
    color: tokens.text.secondary,
    fontFamily: tokens.font.sans,
    textAlign: "center",
    lineHeight: 22,
    paddingHorizontal: 12,
    marginBottom: tokens.spacing.md,
  },

  // CTAs
  ctaCol: {
    width: "100%",
    gap: 10,
    marginTop: tokens.spacing.sm,
  },
  shareCta: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    paddingVertical: 16,
    borderRadius: tokens.radius.full,
    backgroundColor: tokens.bg.surfaceContainerHigh,
    borderWidth: 1,
    borderColor: tokens.brand.tertiary,
  },
  shareCtaPressed: { opacity: 0.85, transform: [{ scale: 0.98 }] },
  shareCtaDisabled: { opacity: 0.5 },
  shareCtaText: {
    fontSize: 15,
    color: tokens.text.primary,
    fontFamily: tokens.font.sansBold,
    letterSpacing: 0.3,
  },
  continueCta: {
    paddingVertical: 18,
    borderRadius: tokens.radius.full,
    backgroundColor: tokens.brand.primary,
    alignItems: "center",
    shadowColor: tokens.brand.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 14,
    elevation: 8,
  },
  continueCtaPressed: { opacity: 0.92, transform: [{ scale: 0.98 }] },
  continueCtaText: {
    fontSize: 17,
    color: tokens.brand.onPrimary,
    fontFamily: tokens.font.sansExtra,
    letterSpacing: 0.3,
  },

  // Hidden share card — off-screen capture target
  hiddenShareCard: {
    position: "absolute",
    top: Platform.OS === "ios" ? -2000 : 0,
    left: Platform.OS === "ios" ? -2000 : 0,
    opacity: Platform.OS === "ios" ? 1 : 0,
  },
});

const shareStyles = StyleSheet.create({
  card: {
    width: 270,
    height: 480,
    backgroundColor: tokens.bg.app,
    borderRadius: 18,
    padding: 20,
    justifyContent: "space-between",
    overflow: "hidden",
    borderWidth: 2,
    borderColor: tokens.brand.tertiary,
    shadowColor: tokens.brand.tertiary,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 24,
    position: "relative",
  },
  bgGlow: {
    position: "absolute",
    top: 80,
    left: 35,
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: tokens.brand.tertiarySoft,
    opacity: 0.6,
  },
  topBar: { alignItems: "center", gap: 4 },
  wordmark: {
    fontSize: 32,
    color: tokens.text.primary,
    fontFamily: tokens.font.display,
    letterSpacing: -1.2,
    textShadowColor: tokens.brand.tertiary,
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 12,
  },
  tagline: {
    fontSize: 12,
    color: tokens.text.secondary,
    fontFamily: tokens.font.sansSemi,
    letterSpacing: 0.5,
  },

  hero: { alignItems: "center", gap: 2 },
  numberBig: {
    fontSize: 144,
    color: tokens.brand.tertiary,
    fontFamily: tokens.font.display,
    letterSpacing: -6,
    lineHeight: 144,
    textShadowColor: tokens.brand.tertiary,
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 20,
  },
  numberSub: {
    fontSize: 16,
    color: tokens.text.primary,
    fontFamily: tokens.font.sansExtra,
    letterSpacing: 4,
    marginTop: 4,
  },

  footer: { alignItems: "center", gap: 6 },
  slogan: {
    fontSize: 14,
    color: tokens.text.primary,
    fontFamily: tokens.font.sansBold,
    textAlign: "center",
  },
  url: {
    fontSize: 12,
    color: tokens.brand.tertiary,
    fontFamily: tokens.font.sansBold,
    letterSpacing: 0.5,
  },
});
