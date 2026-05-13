// Scene card — Cyber-Electric Modern
// Black card body, yellow top accent + CTA, blue tertiary tag for progress.

import { Pressable, Text, View, StyleSheet } from "react-native";
import { tokens } from "../theme";

interface Props {
  emoji: string;
  title: string;
  description: string;
  durationMin: number;
  isNew?: boolean;
  progressLabel?: string;
  onPress: () => void;
}

export function SceneCard({
  emoji,
  title,
  description,
  durationMin,
  isNew,
  progressLabel,
  onPress,
}: Props) {
  return (
    <Pressable
      style={({ pressed }) => [styles.card, pressed && styles.cardPressed]}
      onPress={onPress}
    >
      {/* Yellow top accent bar */}
      <View style={styles.accentBar} />

      {/* Background emoji watermark */}
      <Text style={styles.emojiBg}>{emoji}</Text>

      <View style={styles.content}>
        <View style={styles.tags}>
          <View style={styles.tag}>
            <Text style={styles.tagText}>⏱ {durationMin} dk</Text>
          </View>
          {isNew && (
            <View style={[styles.tag, styles.tagPrimary]}>
              <Text style={styles.tagPrimaryText}>🔥 Yeni</Text>
            </View>
          )}
          {progressLabel && (
            <View style={[styles.tag, styles.tagTertiary]}>
              <Text style={styles.tagTertiaryText}>📊 {progressLabel}</Text>
            </View>
          )}
        </View>

        <Text style={styles.title}>{title}</Text>
        <Text style={styles.desc}>{description}</Text>

        <View style={styles.btn}>
          <Text style={styles.btnLabel}>BAŞLA →</Text>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    borderRadius: tokens.radius.base,
    backgroundColor: tokens.brand.secondary, // BLACK card (Cyber-Electric)
    overflow: "hidden",
    position: "relative",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 20 },
    shadowOpacity: 0.4,
    shadowRadius: 30,
    elevation: 12,
  },
  cardPressed: {
    opacity: 0.92,
    transform: [{ scale: 0.99 }],
  },
  accentBar: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: 3,
    backgroundColor: tokens.brand.primary, // yellow accent
    zIndex: 3,
  },
  emojiBg: {
    position: "absolute",
    top: 40,
    right: -20,
    fontSize: 280,
    opacity: 0.06,
    transform: [{ rotate: "-12deg" }],
  },
  content: {
    flex: 1,
    justifyContent: "flex-end",
    padding: tokens.spacing.md,
    zIndex: 2,
  },
  tags: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    marginBottom: tokens.spacing.sm,
  },
  tag: {
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: tokens.radius.full,
    backgroundColor: tokens.bg.inverseSurfaceLight,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.10)",
  },
  tagText: {
    color: tokens.text.inverseOnSurface,
    fontSize: 13,
    fontWeight: tokens.weight.semibold,
  },
  tagPrimary: {
    backgroundColor: tokens.brand.primary,
    borderColor: tokens.brand.primary,
  },
  tagPrimaryText: {
    color: tokens.text.onPrimary,
    fontSize: 13,
    fontWeight: tokens.weight.bold,
  },
  tagTertiary: {
    backgroundColor: tokens.brand.tertiary,
    borderColor: tokens.brand.tertiary,
  },
  tagTertiaryText: {
    color: tokens.text.onTertiary,
    fontSize: 13,
    fontWeight: tokens.weight.bold,
  },
  title: {
    fontSize: 36,
    fontWeight: tokens.weight.extrabold,
    color: tokens.text.inverseOnSurface,
    letterSpacing: -0.6,
    lineHeight: 40,
    marginBottom: tokens.spacing.sm,
  },
  desc: {
    fontSize: 16,
    color: tokens.text.secondaryFixedDim,
    lineHeight: 24,
    marginBottom: tokens.spacing.md,
  },
  btn: {
    backgroundColor: tokens.brand.primary,
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: tokens.radius.full,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    shadowColor: tokens.brand.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.35,
    shadowRadius: 14,
    elevation: 6,
  },
  btnPressed: {
    opacity: 0.9,
    transform: [{ scale: 0.98 }],
  },
  btnLabel: {
    color: tokens.text.onPrimary,
    fontSize: 16,
    fontWeight: tokens.weight.extrabold,
    letterSpacing: 2,
    textTransform: "uppercase",
  },
});
