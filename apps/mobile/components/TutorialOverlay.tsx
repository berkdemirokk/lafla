// Lafla — Home tutorial overlay (first-time user).
//
// 2026-05-21 — Yeni kullanıcı home'da "şimdi ne yapacağım" diye duruyor.
// TikTok feed alışık olmayan biri için belirsiz. Bu overlay ilk açılışta
// 1 kere gözükür, 4 maddelik kart + tek CTA ("Başlayalım").
//
// Felsefe:
//   - Yetişkin Türk audience — mascot, animasyon, walkthrough karşıtı
//   - Tek ekran — multi-step ders gibi değil
//   - 4 madde: feed mekaniği + voice + plan + dismiss
//   - Tap dışına basarak da kapanır (forgiving)

import { useEffect } from "react";
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  Modal,
  Dimensions,
} from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  Easing,
} from "react-native-reanimated";
import * as Haptics from "expo-haptics";

import { tokens } from "../theme";
import { useTranslation } from "../lib/i18n";

const SCREEN = Dimensions.get("window");

interface Props {
  /** Kullanıcının ekranda göreceği ad. Boşsa "selam!" generic. */
  displayName: string;
  /** Bugün plan'da kaç sahne var (banner ile aynı bilgi — tutarlılık için). */
  planTotal: number;
  /** Tahmini süre (dk). */
  planEstimatedMin: number;
  /** Overlay'i dismiss et + flag set et. */
  onDismiss: () => void;
}

export function TutorialOverlay({
  displayName,
  planTotal,
  planEstimatedMin,
  onDismiss,
}: Props) {
  const { t } = useTranslation();
  // Fade + scale entry — overlay açılırken yumuşak, "patlatma" değil.
  const fade = useSharedValue(0);
  const scale = useSharedValue(0.94);

  useEffect(() => {
    fade.value = withTiming(1, { duration: 220, easing: Easing.out(Easing.quad) });
    scale.value = withTiming(1, { duration: 240, easing: Easing.out(Easing.cubic) });
    try {
      void Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
    } catch {
      // ignore
    }
  }, [fade, scale]);

  const cardStyle = useAnimatedStyle(() => ({
    opacity: fade.value,
    transform: [{ scale: scale.value }],
  }));

  const backdropStyle = useAnimatedStyle(() => ({
    opacity: fade.value * 0.92,
  }));

  const handleDismiss = () => {
    try {
      void Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    } catch {
      // ignore
    }
    fade.value = withTiming(0, { duration: 160 });
    setTimeout(onDismiss, 170);
  };

  // Plan satırı için fallback — plan yoksa generic CTA
  const planLine =
    planTotal > 0
      ? t("tutorial.plan", {
          scenes: String(planTotal),
          minutes: String(planEstimatedMin),
        })
      : t("tutorial.pick_scene");

  return (
    <Modal transparent visible animationType="none" onRequestClose={handleDismiss}>
      {/* Backdrop — dışına basarak da dismiss edilir */}
      <Pressable
        style={StyleSheet.absoluteFill}
        onPress={handleDismiss}
        accessibilityRole="button"
        accessibilityLabel={t("tutorial.close")}
      >
        <Animated.View style={[styles.backdrop, backdropStyle]} />
      </Pressable>

      <View style={styles.center} pointerEvents="box-none">
        <Animated.View style={[styles.card, cardStyle]}>
          {/* Header */}
          <Text style={styles.greeting}>
            {displayName
              ? t("tutorial.greeting_name", { name: displayName })
              : t("tutorial.greeting")}
          </Text>
          <Text style={styles.subhead}>{t("tutorial.title")}</Text>

          {/* 4 madde — kullanıcının bilmesi gereken her şey tek ekranda */}
          <View style={styles.itemList}>
            <Item
              icon="📅"
              text={planLine}
            />
            <Item
              icon="👆"
              text={t("tutorial.swipe")}
            />
            <Item
              icon="🎙️"
              text={t("tutorial.voice")}
            />
            <Item
              icon="🎯"
              text={t("tutorial.progress")}
            />
          </View>

          {/* CTA */}
          <Pressable
            onPress={handleDismiss}
            style={({ pressed }) => [
              styles.cta,
              pressed && styles.ctaPressed,
            ]}
            accessibilityRole="button"
            accessibilityLabel={t("tutorial.start")}
          >
            <Text style={styles.ctaText}>{t("tutorial.start")}</Text>
          </Pressable>
        </Animated.View>
      </View>
    </Modal>
  );
}

function Item({ icon, text }: { icon: string; text: string }) {
  return (
    <View style={styles.item}>
      <Text style={styles.itemIcon}>{icon}</Text>
      <Text style={styles.itemText}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.78)",
  },
  center: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 24,
  },
  card: {
    width: Math.min(SCREEN.width - 48, 420),
    backgroundColor: tokens.bg.surface,
    borderRadius: tokens.radius.lg,
    borderWidth: 1.5,
    borderColor: tokens.brand.primary,
    paddingTop: 28,
    paddingBottom: 22,
    paddingHorizontal: 22,
    // Neon Noir glow — primary pink halo
    shadowColor: tokens.brand.primary,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 24,
    elevation: 12,
  },
  greeting: {
    fontSize: 22,
    fontWeight: tokens.weight.black,
    color: tokens.text.primary,
    letterSpacing: -0.5,
    marginBottom: 4,
  },
  subhead: {
    fontSize: 13,
    fontWeight: tokens.weight.semibold,
    color: tokens.text.tertiary,
    letterSpacing: 0.4,
    marginBottom: 18,
  },
  itemList: {
    gap: 14,
    marginBottom: 22,
  },
  item: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 12,
  },
  itemIcon: {
    fontSize: 20,
    width: 28,
    textAlign: "center",
    marginTop: 1,
  },
  itemText: {
    flex: 1,
    fontSize: 14,
    lineHeight: 20,
    color: tokens.text.primary,
    letterSpacing: -0.1,
  },
  cta: {
    paddingVertical: 16,
    borderRadius: tokens.radius.full,
    backgroundColor: tokens.brand.primary,
    alignItems: "center",
  },
  ctaPressed: {
    opacity: 0.88,
    transform: [{ scale: 0.98 }],
  },
  ctaText: {
    fontSize: 16,
    fontWeight: tokens.weight.extrabold,
    color: tokens.text.onPrimary,
    letterSpacing: 0.5,
  },
});
