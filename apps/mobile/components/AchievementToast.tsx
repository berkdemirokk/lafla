// Achievement unlock celebration — appears briefly when user earns a badge.

import { useEffect, useRef } from "react";
import { Animated, Text, View, StyleSheet, Pressable } from "react-native";
import { tokens } from "../theme";
import type { AchievementDef } from "../lib/achievements";
import { useTranslation } from "../lib/i18n";

interface Props {
  achievement: AchievementDef | null;
  onDismiss: () => void;
}

export function AchievementToast({ achievement, onDismiss }: Props) {
  const { t } = useTranslation();
  const translateY = useRef(new Animated.Value(-120)).current;
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (!achievement) return;
    // Reset animation state for new achievement
    translateY.setValue(-120);
    opacity.setValue(0);
    Animated.parallel([
      Animated.timing(translateY, {
        toValue: 0,
        duration: 350,
        useNativeDriver: true,
      }),
      Animated.timing(opacity, {
        toValue: 1,
        duration: 250,
        useNativeDriver: true,
      }),
    ]).start();

    const dismissTimer = setTimeout(() => {
      Animated.parallel([
        Animated.timing(translateY, {
          toValue: -120,
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.timing(opacity, {
          toValue: 0,
          duration: 250,
          useNativeDriver: true,
        }),
      ]).start(() => onDismiss());
    }, 3500);

    return () => clearTimeout(dismissTimer);
  }, [achievement, translateY, opacity, onDismiss]);

  if (!achievement) return null;

  return (
    <Animated.View
      style={[
        styles.container,
        { transform: [{ translateY }], opacity },
      ]}
      pointerEvents="box-none"
      accessibilityLiveRegion="polite"
    >
      <Pressable
        onPress={onDismiss}
        style={styles.toast}
        accessibilityRole="button"
        accessibilityLabel={t("achievement.accessibility", {
          title: achievement.title,
          description: achievement.description,
        })}
        accessibilityHint={t("achievement.dismiss_hint")}
      >
        <View style={styles.text}>
          <Text style={styles.unlocked}>{t("achievement.milestone")}</Text>
          <Text style={styles.title}>{achievement.title}</Text>
          <Text style={styles.desc} numberOfLines={2}>
            {achievement.description}
          </Text>
        </View>
      </Pressable>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 60,
    left: 16,
    right: 16,
    zIndex: 100,
  },
  toast: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
    backgroundColor: tokens.brand.secondary,
    borderRadius: tokens.radius.base,
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderWidth: 1,
    borderColor: tokens.brand.primaryFixed,
    shadowColor: tokens.brand.secondary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 4,
  },
  text: {
    flex: 1,
  },
  unlocked: {
    color: tokens.brand.onSecondary,
    fontSize: 11,
    fontWeight: tokens.weight.bold,
    letterSpacing: 1.5,
    marginBottom: 2,
  },
  title: {
    color: tokens.brand.onSecondary,
    fontSize: 18,
    fontWeight: tokens.weight.extrabold,
    marginBottom: 2,
  },
  desc: {
    color: tokens.brand.onSecondary,
    opacity: 0.72,
    fontSize: 13,
    lineHeight: 18,
  },
});
