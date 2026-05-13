// Home feed scene card — TikTok-style full-screen card
// Tapping "BAŞLA" routes to the lesson runner.

import { Pressable, Text, View, StyleSheet } from "react-native";
import { tokens } from "../theme";

interface Props {
  emoji: string;
  title: string;
  description: string;
  durationMin: number;
  isNew?: boolean;
  progressLabel?: string;
  accentColor?: string;
  onPress: () => void;
}

export function SceneCard({
  emoji,
  title,
  description,
  durationMin,
  isNew,
  progressLabel,
  accentColor = tokens.brand.accent,
  onPress,
}: Props) {
  return (
    <View style={[styles.card, { backgroundColor: accentColor }]}>
      {/* Large background emoji, decorative */}
      <Text style={styles.emojiBg} pointerEvents="none">
        {emoji}
      </Text>

      <View style={styles.content}>
        <Text style={styles.emojiTop}>{emoji}</Text>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.desc}>{description}</Text>

        <View style={styles.meta}>
          <View style={styles.tag}>
            <Text style={styles.tagText}>⏱ {durationMin} dk</Text>
          </View>
          {isNew ? (
            <View style={[styles.tag, styles.tagNew]}>
              <Text style={[styles.tagText, styles.tagNewText]}>🔥 Yeni</Text>
            </View>
          ) : null}
          {progressLabel ? (
            <View style={styles.tag}>
              <Text style={styles.tagText}>📊 {progressLabel}</Text>
            </View>
          ) : null}
        </View>

        <Pressable
          style={({ pressed }) => [styles.btn, pressed && styles.btnPressed]}
          onPress={onPress}
        >
          <Text style={[styles.btnLabel, { color: accentColor }]}>
            BAŞLA →
          </Text>
        </Pressable>
      </View>

      <Text style={styles.swipeHint}>👆 yukarı kaydır</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    borderRadius: 24,
    padding: 28,
    justifyContent: "flex-end",
    overflow: "hidden",
  },
  emojiBg: {
    position: "absolute",
    top: 30,
    right: 24,
    fontSize: 140,
    opacity: 0.15,
    transform: [{ rotate: "-15deg" }],
  },
  content: {
    zIndex: 2,
  },
  emojiTop: {
    fontSize: 56,
    marginBottom: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: tokens.weight.black,
    color: "white",
    letterSpacing: -1,
    lineHeight: 34,
    marginBottom: 12,
  },
  desc: {
    fontSize: 15,
    color: "rgba(255,255,255,0.9)",
    marginBottom: 24,
    lineHeight: 21,
  },
  meta: {
    flexDirection: "row",
    gap: 8,
    marginBottom: 24,
    flexWrap: "wrap",
  },
  tag: {
    backgroundColor: "rgba(0,0,0,0.4)",
    paddingHorizontal: 12,
    paddingVertical: 7,
    borderRadius: 100,
  },
  tagText: {
    color: "white",
    fontSize: 12,
    fontWeight: tokens.weight.bold,
  },
  tagNew: {
    backgroundColor: "rgba(255,255,255,0.95)",
  },
  tagNewText: {
    color: tokens.brand.accent,
  },
  btn: {
    backgroundColor: "white",
    paddingVertical: 16,
    borderRadius: tokens.radius.button,
    alignItems: "center",
  },
  btnPressed: {
    opacity: 0.9,
    transform: [{ scale: 0.98 }],
  },
  btnLabel: {
    fontSize: 16,
    fontWeight: tokens.weight.extrabold,
    letterSpacing: 0.3,
  },
  swipeHint: {
    position: "absolute",
    bottom: 16,
    left: 0,
    right: 0,
    textAlign: "center",
    color: "rgba(255,255,255,0.6)",
    fontSize: 12,
    fontWeight: tokens.weight.semibold,
  },
});
