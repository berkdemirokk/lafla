// Daily quests strip — 3 quests below stats, claim XP on completion.

import { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  ScrollView,
} from "react-native";
import {
  claimQuest,
  getDailyQuests,
  QUEST_POOL,
  type QuestId,
} from "../lib/daily-quests";
import { bumpXp } from "../lib/local-progress";
import { tokens } from "../theme";

interface Props {
  onClaimed?: () => void;
}

export function DailyQuestsBar({ onClaimed }: Props) {
  const [quests, setQuests] = useState<
    Array<{ id: QuestId; progress: number; claimed: boolean }>
  >([]);

  const refresh = async () => {
    const state = await getDailyQuests();
    setQuests(state.quests);
  };

  useEffect(() => {
    refresh();
  }, []);

  const handleClaim = async (id: QuestId) => {
    const reward = await claimQuest(id);
    if (reward !== null) {
      await bumpXp(reward).catch(() => {});
      await refresh();
      onClaimed?.();
    }
  };

  if (quests.length === 0) return null;

  return (
    <View style={styles.wrap}>
      <View style={styles.headerRow}>
        <Text style={styles.label}>GÜNLÜK GÖREVLER</Text>
        <Text style={styles.sublabel}>
          {quests.filter((q) => q.claimed).length}/{quests.length} tamamlandı
        </Text>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {quests.map((q) => {
          const def = QUEST_POOL.find((p) => p.id === q.id);
          if (!def) return null;
          const isDone = q.progress >= def.target;
          const isClaimed = q.claimed;
          const pct = Math.min(100, (q.progress / def.target) * 100);

          return (
            <Pressable
              key={q.id}
              style={[
                styles.questCard,
                isClaimed && styles.questClaimed,
                isDone && !isClaimed && styles.questReady,
              ]}
              disabled={!isDone || isClaimed}
              onPress={() => handleClaim(q.id)}
            >
              <View style={styles.questTop}>
                <Text style={styles.questEmoji}>
                  {isClaimed ? "✓" : def.emoji}
                </Text>
                <Text style={styles.questReward}>+{def.xpReward} XP</Text>
              </View>
              <Text style={styles.questTitle} numberOfLines={2}>
                {def.title}
              </Text>
              <View style={styles.questBar}>
                <View
                  style={[
                    styles.questBarFill,
                    { width: `${pct}%` },
                    isClaimed && styles.questBarFillClaimed,
                  ]}
                />
              </View>
              <Text style={styles.questProgress}>
                {Math.min(q.progress, def.target)}/{def.target} {def.unit}
                {isDone && !isClaimed ? " · AL!" : ""}
              </Text>
            </Pressable>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    paddingTop: 4,
    paddingBottom: 8,
  },
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    marginBottom: 6,
  },
  label: {
    fontSize: 11,
    fontWeight: tokens.weight.bold,
    color: tokens.text.tertiary,
    letterSpacing: 1.3,
  },
  sublabel: {
    fontSize: 11,
    color: tokens.text.secondary,
    fontWeight: tokens.weight.semibold,
  },
  scrollContent: {
    paddingHorizontal: 16,
    gap: 10,
  },
  questCard: {
    width: 150,
    backgroundColor: tokens.bg.surfaceContainer,
    borderRadius: tokens.radius.base,
    padding: 12,
    borderWidth: 2,
    borderColor: tokens.bg.surfaceContainer,
  },
  questReady: {
    borderColor: tokens.brand.primary,
    backgroundColor: "rgba(246, 255, 0, 0.10)",
  },
  questClaimed: {
    opacity: 0.55,
  },
  questTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  questEmoji: { fontSize: 22 },
  questReward: {
    fontSize: 11,
    fontWeight: tokens.weight.bold,
    color: tokens.brand.tertiary,
  },
  questTitle: {
    fontSize: 13,
    fontWeight: tokens.weight.bold,
    color: tokens.text.primary,
    lineHeight: 17,
    marginBottom: 8,
    minHeight: 34,
  },
  questBar: {
    height: 4,
    backgroundColor: tokens.bg.surfaceContainerHigh,
    borderRadius: 2,
    overflow: "hidden",
    marginBottom: 4,
  },
  questBarFill: {
    height: "100%",
    backgroundColor: tokens.brand.primary,
    borderRadius: 2,
  },
  questBarFillClaimed: {
    backgroundColor: tokens.brand.tertiary,
  },
  questProgress: {
    fontSize: 11,
    color: tokens.text.secondary,
    fontWeight: tokens.weight.medium,
  },
});
