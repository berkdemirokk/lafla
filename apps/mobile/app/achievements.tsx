// Achievements gallery — locked vs unlocked badges.

import { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  ACHIEVEMENTS,
  getEarnedAchievements,
  type AchievementId,
} from "../lib/achievements";
import { tokens } from "../theme";

export default function AchievementsScreen() {
  const router = useRouter();
  const [earned, setEarned] = useState<Set<AchievementId>>(new Set());

  useEffect(() => {
    getEarnedAchievements().then((ids) => setEarned(new Set(ids)));
  }, []);

  const earnedCount = earned.size;
  const totalCount = ACHIEVEMENTS.length;

  return (
    <SafeAreaView style={styles.safe} edges={["top", "bottom"]}>
      <StatusBar style="dark" />

      <View style={styles.header}>
        <Pressable onPress={() => router.back()} style={styles.backBtn}>
          <Text style={styles.backText}>← Geri</Text>
        </Pressable>
        <Text style={styles.title}>Başarımlar</Text>
        <View style={styles.spacer} />
      </View>

      <View style={styles.progressBar}>
        <Text style={styles.progressLabel}>
          {earnedCount}/{totalCount} kazanıldı
        </Text>
        <View style={styles.bar}>
          <View
            style={[
              styles.barFill,
              { width: `${(earnedCount / totalCount) * 100}%` },
            ]}
          />
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.grid}>
        {ACHIEVEMENTS.map((a) => {
          const isEarned = earned.has(a.id);
          return (
            <View
              key={a.id}
              style={[styles.card, !isEarned && styles.cardLocked]}
            >
              <Text style={[styles.emoji, !isEarned && styles.emojiLocked]}>
                {isEarned ? a.emoji : "🔒"}
              </Text>
              <Text
                style={[
                  styles.cardTitle,
                  !isEarned && styles.cardTitleLocked,
                ]}
              >
                {a.title}
              </Text>
              <Text style={styles.cardDesc}>{a.description}</Text>
            </View>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: tokens.bg.app },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    height: 56,
  },
  backBtn: { width: 70 },
  backText: { color: tokens.text.secondary, fontSize: 15 },
  title: {
    fontSize: 20,
    fontWeight: tokens.weight.extrabold,
    color: tokens.text.primary,
  },
  spacer: { width: 70 },
  progressBar: {
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  progressLabel: {
    fontSize: 14,
    fontWeight: tokens.weight.semibold,
    color: tokens.text.secondary,
    marginBottom: 8,
  },
  bar: {
    height: 8,
    backgroundColor: tokens.bg.surfaceContainer,
    borderRadius: 4,
    overflow: "hidden",
  },
  barFill: {
    height: "100%",
    backgroundColor: tokens.brand.primary,
    borderRadius: 4,
  },
  grid: {
    padding: 16,
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
  },
  card: {
    flexBasis: "47%",
    flexGrow: 1,
    backgroundColor: tokens.bg.surfaceContainer,
    borderRadius: tokens.radius.base,
    padding: 16,
    alignItems: "center",
    borderWidth: 2,
    borderColor: tokens.brand.primary,
  },
  cardLocked: {
    borderColor: tokens.border.outlineVariant,
    opacity: 0.65,
  },
  emoji: {
    fontSize: 48,
    marginBottom: 10,
  },
  emojiLocked: {
    opacity: 0.5,
  },
  cardTitle: {
    fontSize: 15,
    fontWeight: tokens.weight.bold,
    color: tokens.text.primary,
    textAlign: "center",
    marginBottom: 6,
  },
  cardTitleLocked: {
    color: tokens.text.tertiary,
  },
  cardDesc: {
    fontSize: 12,
    color: tokens.text.secondary,
    textAlign: "center",
    lineHeight: 16,
  },
});
