// Lafla — Reading mode listing screen.
// Cyber-Electric Modern: light bg, BLUE active filter pill, yellow CTA.
//
// To integrate: add to _layout.tsx Stack:
//   <Stack.Screen name="reading" ... />
//   <Stack.Screen name="reading/[id]" ... />

import { useEffect, useMemo, useState } from "react";
import {
  FlatList,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button } from "../components/Button";
import { getCompletedReadings } from "../lib/reading";
import { readingArticles, type ReadingArticle } from "../data/reading-articles";
import { tokens } from "../theme";

type CefrLevel = ReadingArticle["cefrLevel"];

const CATEGORY_TR: Record<ReadingArticle["category"], string> = {
  news: "Haber",
  science: "Bilim",
  culture: "Kültür",
  tech: "Teknoloji",
  history: "Tarih",
  psychology: "Psikoloji",
  business: "İş Dünyası",
};

const LEVEL_FILTERS: ReadonlyArray<"all" | CefrLevel> = [
  "all",
  "A1",
  "A2",
  "B1",
  "B2",
  "C1",
];

export default function ReadingListing() {
  const router = useRouter();
  const articles = readingArticles;
  const [filter, setFilter] = useState<"all" | CefrLevel | ReadingArticle["category"]>("all");
  const [completed, setCompleted] = useState<Set<string>>(new Set());

  useEffect(() => {
    (async () => {
      const ids = await getCompletedReadings();
      setCompleted(new Set(ids));
    })();
  }, []);

  // Category list, derived from the data
  const categories = useMemo(() => {
    const set = new Set<ReadingArticle["category"]>();
    for (const a of articles) set.add(a.category);
    return Array.from(set);
  }, [articles]);

  const filtered = useMemo(() => {
    if (filter === "all") return articles.slice();
    if ((LEVEL_FILTERS as ReadonlyArray<string>).includes(filter)) {
      return articles.filter((a) => a.cefrLevel === filter);
    }
    return articles.filter((a) => a.category === filter);
  }, [articles, filter]);

  return (
    <SafeAreaView style={styles.safe} edges={["top", "bottom"]}>
      <StatusBar style="dark" />

      <View style={styles.header}>
        <Pressable onPress={() => router.back()} style={styles.backBtn}>
          <Text style={styles.backText}>← Geri</Text>
        </Pressable>
        <Text style={styles.headerLabel}>Okuma</Text>
        <View style={styles.spacer} />
      </View>

      <View style={styles.intro}>
        <Text style={styles.title}>Okuma pratiği</Text>
        <Text style={styles.subtitle}>
          Seviyene göre kısa makaleler. Altı çizili kelimelere dokunarak
          çevirisini gör.
        </Text>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.filtersRow}
      >
        {LEVEL_FILTERS.map((lvl) => (
          <FilterPill
            key={lvl}
            label={lvl === "all" ? "Tümü" : lvl}
            active={filter === lvl}
            onPress={() => setFilter(lvl)}
          />
        ))}
        {categories.map((cat) => (
          <FilterPill
            key={cat}
            label={CATEGORY_TR[cat] ?? cat}
            active={filter === cat}
            onPress={() => setFilter(cat)}
          />
        ))}
      </ScrollView>

      {articles.length === 0 ? (
        <View style={styles.empty}>
          <Text style={styles.emptyEmoji}>📚</Text>
          <Text style={styles.emptyTitle}>Makaleler hazırlanıyor</Text>
          <Text style={styles.emptyDesc}>
            Yakında seviyene uygun kısa metinler burada olacak.
          </Text>
          <Button label="Geri" onPress={() => router.back()} variant="secondary" />
        </View>
      ) : (
        <FlatList
          data={filtered}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.list}
          ItemSeparatorComponent={() => <View style={{ height: 12 }} />}
          renderItem={({ item }) => (
            <ArticleCard
              article={item}
              done={completed.has(item.id)}
              onPress={() => router.push(`/reading/${item.id}` as never)}
            />
          )}
        />
      )}
    </SafeAreaView>
  );
}

function FilterPill({
  label,
  active,
  onPress,
}: {
  label: string;
  active: boolean;
  onPress: () => void;
}) {
  return (
    <Pressable
      onPress={onPress}
      style={[pillStyles.pill, active && pillStyles.pillActive]}
    >
      <Text style={[pillStyles.label, active && pillStyles.labelActive]}>
        {label}
      </Text>
    </Pressable>
  );
}

function ArticleCard({
  article,
  done,
  onPress,
}: {
  article: ReadingArticle;
  done: boolean;
  onPress: () => void;
}) {
  return (
    <Pressable onPress={onPress} style={cardStyles.card}>
      <View style={cardStyles.topRow}>
        <Text style={cardStyles.emoji}>{article.emoji}</Text>
        <View style={cardStyles.chipsRow}>
          <View style={cardStyles.chipBlue}>
            <Text style={cardStyles.chipBlueText}>{article.cefrLevel}</Text>
          </View>
          <View style={cardStyles.chip}>
            <Text style={cardStyles.chipText}>
              {CATEGORY_TR[article.category] ?? article.category}
            </Text>
          </View>
        </View>
      </View>
      <Text style={cardStyles.title}>{article.title_tr}</Text>
      <View style={cardStyles.footerRow}>
        <Text style={cardStyles.meta}>
          ⏱ {article.estimated_minutes} dk
          {done ? "   ·   ✓ Tamamlandı" : ""}
        </Text>
        <View style={cardStyles.cta}>
          <Text style={cardStyles.ctaText}>Oku →</Text>
        </View>
      </View>
    </Pressable>
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
  headerLabel: {
    fontSize: 13,
    color: tokens.text.secondary,
    fontWeight: tokens.weight.semibold,
    letterSpacing: 1.2,
    textTransform: "uppercase",
  },
  spacer: { width: 70 },
  intro: {
    paddingHorizontal: tokens.spacing.md,
    paddingTop: 4,
    paddingBottom: tokens.spacing.sm,
  },
  title: {
    fontSize: 30,
    fontWeight: tokens.weight.extrabold,
    color: tokens.text.primary,
    letterSpacing: -0.5,
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 14,
    color: tokens.text.secondary,
    lineHeight: 20,
  },
  filtersRow: {
    paddingHorizontal: tokens.spacing.md,
    paddingVertical: 12,
    gap: 8,
  },
  list: {
    paddingHorizontal: tokens.spacing.md,
    paddingBottom: 32,
    paddingTop: 4,
  },
  empty: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 32,
    gap: 12,
  },
  emptyEmoji: { fontSize: 56 },
  emptyTitle: {
    fontSize: 20,
    fontWeight: tokens.weight.bold,
    color: tokens.text.primary,
  },
  emptyDesc: {
    fontSize: 14,
    color: tokens.text.secondary,
    textAlign: "center",
    lineHeight: 20,
    marginBottom: 8,
  },
});

const pillStyles = StyleSheet.create({
  pill: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: tokens.radius.full,
    backgroundColor: tokens.bg.surfaceContainer,
    borderWidth: 1,
    borderColor: tokens.border.light,
  },
  pillActive: {
    backgroundColor: tokens.brand.tertiarySoft,
    borderColor: tokens.brand.tertiary,
  },
  label: {
    fontSize: 13,
    fontWeight: tokens.weight.semibold,
    color: tokens.text.secondary,
  },
  labelActive: {
    color: tokens.brand.tertiary,
  },
});

const cardStyles = StyleSheet.create({
  card: {
    backgroundColor: tokens.bg.surfaceContainerLowest,
    borderRadius: tokens.radius.base,
    padding: tokens.spacing.md,
    borderWidth: 1,
    borderColor: tokens.border.light,
  },
  topRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  emoji: { fontSize: 32 },
  chipsRow: {
    flexDirection: "row",
    gap: 6,
  },
  chipBlue: {
    backgroundColor: tokens.brand.tertiarySoft,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: tokens.radius.full,
  },
  chipBlueText: {
    fontSize: 11,
    fontWeight: tokens.weight.bold,
    color: tokens.brand.tertiary,
    letterSpacing: 0.8,
  },
  chip: {
    backgroundColor: tokens.bg.surfaceContainer,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: tokens.radius.full,
  },
  chipText: {
    fontSize: 11,
    fontWeight: tokens.weight.semibold,
    color: tokens.text.secondary,
    letterSpacing: 0.4,
  },
  title: {
    fontSize: 18,
    fontWeight: tokens.weight.bold,
    color: tokens.text.primary,
    lineHeight: 24,
    marginBottom: 12,
  },
  footerRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  meta: {
    fontSize: 12,
    color: tokens.text.secondary,
    fontWeight: tokens.weight.medium,
  },
  cta: {
    backgroundColor: tokens.brand.primaryContainer,
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: tokens.radius.full,
  },
  ctaText: {
    color: tokens.text.onPrimary,
    fontWeight: tokens.weight.extrabold,
    fontSize: 13,
    letterSpacing: 0.3,
  },
});
