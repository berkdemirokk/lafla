// Kelime Desteleri (Vocab Decks) — listing screen.
// Thematic 15-card vocabulary decks, standalone study mode.
// Cyber-Electric Modern: light bg, dark cards, yellow accent on level chips.
//
// To integrate: add to _layout.tsx:
//   <Stack.Screen name="decks" />
//   <Stack.Screen name="deck/[id]" />

import { useCallback, useEffect, useMemo, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
  FlatList,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { useRouter, useFocusEffect } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { tokens } from "../theme";
import { getDeckProgress } from "../lib/vocab-deck";

// --- Defensive type import ---------------------------------------------------
// A parallel agent is creating apps/mobile/data/vocab-decks.ts.
// If the file doesn't exist yet, fall back to a minimal local type so this
// screen still type-checks. After all agents finish, the import below should
// resolve cleanly.
// TODO(integration): remove fallback types once data/vocab-decks.ts lands.
type CefrLevelLike = "A1" | "A2" | "B1" | "B2" | "C1";

type LocalVocabCard = {
  id: string;
  english: string;
  turkish: string;
  exampleEn?: string | null;
  exampleTr?: string | null;
};

type LocalVocabDeck = {
  id: string;
  emoji: string;
  title_tr: string;
  description_tr?: string;
  level: CefrLevelLike;
  cards: LocalVocabCard[];
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
let importedDecks: LocalVocabDeck[] | undefined;
try {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const mod = require("../data/vocab-decks");
  importedDecks =
    (mod.VOCAB_DECKS as LocalVocabDeck[]) ??
    (mod.vocabDecks as LocalVocabDeck[]) ??
    (mod.default as LocalVocabDeck[]) ??
    undefined;
} catch {
  importedDecks = undefined;
}
const VOCAB_DECKS: LocalVocabDeck[] = importedDecks ?? [];

// --- Component ---------------------------------------------------------------

type LevelFilter = "ALL" | CefrLevelLike;
const FILTERS: LevelFilter[] = ["ALL", "A1", "A2", "B1", "B2", "C1"];

const LEVEL_LABELS: Record<LevelFilter, string> = {
  ALL: "Tümü",
  A1: "A1",
  A2: "A2",
  B1: "B1",
  B2: "B2",
  C1: "C1",
};

export default function DecksScreen() {
  const router = useRouter();
  const [filter, setFilter] = useState<LevelFilter>("ALL");
  const [progressMap, setProgressMap] = useState<Record<string, number>>({});

  const refreshProgress = async () => {
    const entries = await Promise.all(
      VOCAB_DECKS.map(async (d) => {
        const p = await getDeckProgress(d.id);
        return [d.id, p.learnedIds.length] as const;
      }),
    );
    setProgressMap(Object.fromEntries(entries));
  };

  useEffect(() => {
    refreshProgress();
  }, []);

  // Refresh when screen regains focus (after returning from a deck)
  useFocusEffect(
    useCallback(() => {
      refreshProgress();
    }, []),
  );

  const filteredDecks = useMemo(() => {
    if (filter === "ALL") return VOCAB_DECKS;
    return VOCAB_DECKS.filter((d) => d.level === filter);
  }, [filter]);

  const totalLearned = useMemo(
    () => Object.values(progressMap).reduce((a, b) => a + b, 0),
    [progressMap],
  );

  return (
    <SafeAreaView style={styles.safe} edges={["top", "bottom"]}>
      <StatusBar style="dark" />

      {/* Header */}
      <View style={styles.header}>
        <Pressable onPress={() => router.back()} style={styles.backBtn}>
          <Text style={styles.backText}>← Geri</Text>
        </Pressable>
        <Text style={styles.title}>Kelime Desteleri</Text>
        <View style={styles.spacer} />
      </View>

      {/* Subhead with total stats */}
      <View style={styles.subhead}>
        <Text style={styles.subheadText}>
          {VOCAB_DECKS.length} deste · {totalLearned} kelime öğrenildi
        </Text>
      </View>

      {/* Filter pills */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.filterRow}
      >
        {FILTERS.map((f) => {
          const active = f === filter;
          return (
            <Pressable
              key={f}
              onPress={() => setFilter(f)}
              style={[styles.pill, active && styles.pillActive]}
            >
              <Text
                style={[styles.pillText, active && styles.pillTextActive]}
              >
                {LEVEL_LABELS[f]}
              </Text>
            </Pressable>
          );
        })}
      </ScrollView>

      {/* Deck grid */}
      {VOCAB_DECKS.length === 0 ? (
        <View style={styles.empty}>
          <Text style={styles.emptyTitle}>Desteler henüz hazırlanıyor</Text>
          <Text style={styles.emptyDesc}>
            Kelime kartları yakında burada olacak.
          </Text>
        </View>
      ) : (
        <FlatList
          data={filteredDecks}
          keyExtractor={(d) => d.id}
          contentContainerStyle={styles.list}
          renderItem={({ item }) => {
            const learnedCount = progressMap[item.id] ?? 0;
            const total = item.cards.length;
            const pct = total > 0 ? (learnedCount / total) * 100 : 0;
            return (
              <Pressable
                onPress={() => router.push(`/deck/${item.id}` as never)}
                style={({ pressed }) => [
                  styles.deckCard,
                  pressed && styles.deckCardPressed,
                ]}
              >
                {/* Yellow top accent */}
                <View style={styles.accentBar} />

                {/* Watermark emoji */}
                <Text style={styles.deckEmojiBg}>{item.emoji}</Text>

                <View style={styles.deckContent}>
                  <View style={styles.deckTopRow}>
                    <Text style={styles.deckEmoji}>{item.emoji}</Text>
                    <View style={styles.levelChip}>
                      <Text style={styles.levelChipText}>{item.level}</Text>
                    </View>
                  </View>

                  <Text style={styles.deckTitle} numberOfLines={2}>
                    {item.title_tr}
                  </Text>

                  <View style={styles.deckMetaRow}>
                    <Text style={styles.deckMeta}>{total} kart</Text>
                    <Text style={styles.deckMetaDivider}>·</Text>
                    <Text style={styles.deckMetaProgress}>
                      {learnedCount}/{total} öğrenildi
                    </Text>
                  </View>

                  <View style={styles.progressBar}>
                    <View
                      style={[styles.progressFill, { width: `${pct}%` }]}
                    />
                  </View>
                </View>
              </Pressable>
            );
          }}
          ListEmptyComponent={
            <View style={styles.empty}>
              <Text style={styles.emptyTitle}>Bu seviyede deste yok</Text>
              <Text style={styles.emptyDesc}>
                Başka bir seviye filtresi dene.
              </Text>
            </View>
          }
        />
      )}
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
  subhead: {
    paddingHorizontal: tokens.spacing.md,
    paddingBottom: tokens.spacing.base,
  },
  subheadText: {
    fontSize: 13,
    color: tokens.text.tertiary,
    fontWeight: tokens.weight.semibold,
  },
  filterRow: {
    paddingHorizontal: tokens.spacing.md,
    paddingVertical: tokens.spacing.base,
    gap: 8,
  },
  pill: {
    paddingHorizontal: 18,
    paddingVertical: 9,
    borderRadius: tokens.radius.full,
    backgroundColor: tokens.bg.surfaceContainer,
    borderWidth: 1,
    borderColor: tokens.border.light,
    marginRight: 8,
  },
  pillActive: {
    backgroundColor: tokens.brand.primary,
    borderColor: tokens.brand.primary,
  },
  pillText: {
    fontSize: 13,
    fontWeight: tokens.weight.bold,
    color: tokens.text.secondary,
    letterSpacing: 0.4,
  },
  pillTextActive: {
    color: tokens.text.onPrimary,
  },
  list: {
    padding: tokens.spacing.md,
    paddingTop: tokens.spacing.base,
    paddingBottom: 80,
    gap: tokens.spacing.sm,
  },
  deckCard: {
    borderRadius: tokens.radius.base,
    backgroundColor: tokens.brand.secondary,
    overflow: "hidden",
    position: "relative",
    marginBottom: tokens.spacing.sm,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.25,
    shadowRadius: 18,
    elevation: 8,
  },
  deckCardPressed: {
    opacity: 0.92,
    transform: [{ scale: 0.99 }],
  },
  accentBar: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: 3,
    backgroundColor: tokens.brand.primary,
    zIndex: 3,
  },
  deckEmojiBg: {
    position: "absolute",
    bottom: -30,
    right: -10,
    fontSize: 180,
    opacity: 0.06,
    transform: [{ rotate: "-8deg" }],
  },
  deckContent: {
    padding: tokens.spacing.md,
    zIndex: 2,
  },
  deckTopRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: tokens.spacing.sm,
  },
  deckEmoji: { fontSize: 36 },
  levelChip: {
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: tokens.radius.full,
    backgroundColor: tokens.brand.primary,
  },
  levelChipText: {
    color: tokens.text.onPrimary,
    fontSize: 12,
    fontWeight: tokens.weight.black,
    letterSpacing: 1,
  },
  deckTitle: {
    fontSize: 22,
    fontWeight: tokens.weight.extrabold,
    color: tokens.text.inverseOnSurface,
    letterSpacing: -0.4,
    lineHeight: 28,
    marginBottom: 10,
  },
  deckMetaRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginBottom: 10,
  },
  deckMeta: {
    fontSize: 13,
    color: tokens.text.secondaryFixedDim,
    fontWeight: tokens.weight.semibold,
  },
  deckMetaDivider: {
    color: tokens.text.secondaryFixedDim,
    fontSize: 13,
  },
  deckMetaProgress: {
    fontSize: 13,
    color: tokens.brand.primary,
    fontWeight: tokens.weight.bold,
  },
  progressBar: {
    height: 4,
    backgroundColor: tokens.bg.inverseSurfaceLight,
    borderRadius: 2,
    overflow: "hidden",
  },
  progressFill: {
    height: "100%",
    backgroundColor: tokens.brand.primary,
    borderRadius: 2,
  },
  empty: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: tokens.spacing.lg,
    minHeight: 280,
  },
  emptyEmoji: {
    fontSize: 56,
    marginBottom: tokens.spacing.sm,
  },
  emptyTitle: {
    fontSize: 18,
    fontWeight: tokens.weight.extrabold,
    color: tokens.text.primary,
    marginBottom: 6,
  },
  emptyDesc: {
    fontSize: 14,
    color: tokens.text.tertiary,
    textAlign: "center",
  },
});
