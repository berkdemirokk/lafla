// Lafla — Home (Netflix-rows feed)
//
// 8 yatay mod satırı + üstte günün önerilen sahnesi. Türkçe-odaklı UI, Neon Noir tema.
// Mod taksonomisi: Flört / İş / Travel / Sosyal / Sipariş / Banter / Spor / Sağlık.
// İlk 6 modun mevcut data ile dolu satırları var; Spor ve Sağlık "Yakında" rozeti ile.

import { memo, useCallback, useMemo, useState } from "react";
import { useFocusEffect, useRouter } from "expo-router";
import {
  FlatList,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import * as Haptics from "expo-haptics";

import {
  getLocalProfile,
  getCompletedLessonIds,
  type LocalProfile,
} from "../lib/local-progress";
import { SAMPLE_SCENES, type Scene, type SceneMode } from "../data/scenes";
import { tokens } from "../theme";

// ---------------------------------------------------------------------------
// Mode taxonomy — 8 user-facing rows
// ---------------------------------------------------------------------------

interface ModeRow {
  key: string;
  emoji: string;
  title: string;
  // Bir satır birden fazla mode'u toplayabilir (örn. İş = work + professional + career).
  modes: SceneMode[];
  comingSoon?: boolean;
}

const MODE_ROWS: ReadonlyArray<ModeRow> = [
  { key: "flirt", emoji: "🧊", title: "Flört", modes: ["flirt"] },
  {
    key: "work",
    emoji: "💼",
    title: "İş",
    modes: ["work", "professional", "career"],
  },
  { key: "travel", emoji: "✈️", title: "Seyahat", modes: ["travel"] },
  {
    key: "social",
    emoji: "👥",
    title: "Sosyal",
    modes: ["daily", "personal"],
  },
  { key: "order", emoji: "🍽️", title: "Sipariş", modes: ["order"] },
  { key: "banter", emoji: "🎉", title: "Espri", modes: ["banter"] },
  { key: "sport", emoji: "💪", title: "Spor", modes: ["sport"], comingSoon: true },
  { key: "health", emoji: "🩺", title: "Sağlık", modes: ["health"], comingSoon: true },
];

// ---------------------------------------------------------------------------
// State + data
// ---------------------------------------------------------------------------

interface HomeState {
  profile: LocalProfile | null;
  completed: Set<string>;
}

const EMPTY_STATE: HomeState = { profile: null, completed: new Set() };

export default function Home() {
  const router = useRouter();
  const [state, setState] = useState<HomeState>(EMPTY_STATE);

  const load = useCallback(async () => {
    const [profile, completed] = await Promise.all([
      getLocalProfile(),
      getCompletedLessonIds(),
    ]);
    setState({ profile, completed });
  }, []);

  useFocusEffect(
    useCallback(() => {
      void load();
    }, [load]),
  );

  // Sahneleri mod'a göre grupla (memoized — SAMPLE_SCENES her renderda yeniden traverse edilmesin).
  const scenesByRow = useMemo(() => {
    const map: Record<string, Scene[]> = {};
    for (const row of MODE_ROWS) {
      if (row.comingSoon) {
        map[row.key] = [];
        continue;
      }
      map[row.key] = SAMPLE_SCENES.filter((s) => row.modes.includes(s.mode));
    }
    return map;
  }, []);

  // Hero — günün önerilen sahnesi: tamamlanmamış olan ilk isNew sahne, yoksa ilk tamamlanmamış.
  const hero = useMemo<Scene | null>(() => {
    const fresh = SAMPLE_SCENES.filter((s) => !state.completed.has(s.lessonId));
    const newOne = fresh.find((s) => s.isNew);
    return newOne ?? fresh[0] ?? SAMPLE_SCENES[0] ?? null;
  }, [state.completed]);

  const streak = state.profile?.current_streak ?? 0;

  // useCallback so SceneCard's memo doesn't re-render every time
  // `state.completed` changes for unrelated cards.
  const goScene = useCallback(
    async (lessonId: string) => {
      try {
        await Haptics.selectionAsync();
      } catch {}
      router.push(`/scenario/${lessonId}` as never);
    },
    [router],
  );

  const goHero = useCallback(async () => {
    if (!hero) return;
    try {
      await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    } catch {}
    router.push(`/scenario/${hero.lessonId}` as never);
  }, [hero, router]);

  return (
    <SafeAreaView style={styles.safe} edges={["top", "bottom"]}>
      <StatusBar style="light" />

      {/* Top bar — wordmark + streak chip */}
      <View style={styles.topBar}>
        <Text style={styles.wordmark}>Lafla</Text>
        {streak > 0 ? (
          <View style={styles.streakChip}>
            <Text style={styles.streakChipText}>🔥 {streak} gün</Text>
          </View>
        ) : null}
      </View>

      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Hero card — günün önerilen sahnesi */}
        {hero ? (
          <Pressable
            onPress={goHero}
            style={({ pressed }) => [styles.hero, pressed && styles.heroPressed]}
            accessibilityRole="button"
            accessibilityLabel={`Günün sahnesi: ${hero.title.replace(/\n/g, " ")}`}
          >
            <Text style={styles.heroEyebrow}>BUGÜN İÇİN</Text>
            <Text style={styles.heroEmoji}>{hero.emoji}</Text>
            <Text style={styles.heroTitle} numberOfLines={3}>
              {hero.title}
            </Text>
            <Text style={styles.heroSub}>
              {hero.durationMin} dk
              {hero.cefrLevel ? ` · ${hero.cefrLevel}` : ""} · pratiğe başla
            </Text>
          </Pressable>
        ) : null}

        {/* Mod satırları */}
        {MODE_ROWS.map((row) => {
          const scenes = scenesByRow[row.key] ?? [];
          return (
            <View key={row.key} style={styles.row}>
              <View style={styles.rowHeader}>
                <Text style={styles.rowTitle}>
                  {row.emoji}  {row.title}
                </Text>
                {row.comingSoon ? (
                  <View style={styles.soonChip}>
                    <Text style={styles.soonChipText}>YAKINDA</Text>
                  </View>
                ) : (
                  <Text style={styles.rowCount}>{scenes.length} sahne</Text>
                )}
              </View>

              {row.comingSoon ? (
                <View style={styles.soonCard}>
                  <Text style={styles.soonCardText}>
                    {row.title} senaryoları yakında. İlgini gösterdin —
                    içerik üretildikçe ilk burada görünecek.
                  </Text>
                </View>
              ) : (
                <FlatList
                  data={scenes}
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  keyExtractor={(item) => item.id}
                  contentContainerStyle={styles.rowList}
                  initialNumToRender={4}
                  maxToRenderPerBatch={4}
                  windowSize={3}
                  getItemLayout={(_, index) => ({
                    length: 172,
                    offset: 172 * index,
                    index,
                  })}
                  renderItem={({ item }) => (
                    <SceneCard
                      scene={item}
                      completed={state.completed.has(item.lessonId)}
                      onPress={goScene}
                    />
                  )}
                />
              )}
            </View>
          );
        })}
      </ScrollView>

      {/* Bottom nav */}
      <View style={styles.nav}>
        <NavTab label="Anasayfa" active />
        <NavTab label="Profil" onPress={() => router.push("/profile" as never)} />
      </View>
    </SafeAreaView>
  );
}

// ---------------------------------------------------------------------------
// Subcomponents
// ---------------------------------------------------------------------------

interface SceneCardProps {
  scene: Scene;
  completed: boolean;
  onPress: (lessonId: string) => void;
}

const SceneCard = memo(function SceneCard({
  scene,
  completed,
  onPress,
}: SceneCardProps) {
  const handlePress = useCallback(() => onPress(scene.lessonId), [
    onPress,
    scene.lessonId,
  ]);
  return (
    <Pressable
      onPress={handlePress}
      style={({ pressed }) => [
        cardStyles.card,
        pressed && cardStyles.cardPressed,
        completed && cardStyles.cardCompleted,
      ]}
      accessibilityRole="button"
      accessibilityLabel={`Sahne: ${scene.title.replace(/\n/g, " ")}`}
    >
      <View style={cardStyles.cardTop}>
        <Text style={cardStyles.cardEmoji}>{scene.emoji}</Text>
        {scene.isNew && !completed ? (
          <View style={cardStyles.newPill}>
            <Text style={cardStyles.newPillText}>YENİ</Text>
          </View>
        ) : null}
      </View>
      <Text style={cardStyles.cardTitle} numberOfLines={3}>
        {scene.title}
      </Text>
      <View style={cardStyles.cardFooter}>
        <Text style={cardStyles.cardMeta}>
          {scene.durationMin} dk
          {scene.cefrLevel ? ` · ${scene.cefrLevel}` : ""}
        </Text>
        {completed ? <Text style={cardStyles.completedTick}>✓</Text> : null}
      </View>
    </Pressable>
  );
});

function NavTab({
  label,
  active,
  onPress,
}: {
  label: string;
  active?: boolean;
  onPress?: () => void;
}) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        navStyles.tab,
        pressed && !active && navStyles.tabPressed,
      ]}
      accessibilityRole="tab"
      accessibilityState={{ selected: !!active }}
    >
      <Text style={[navStyles.label, active && navStyles.labelActive]}>
        {label}
      </Text>
    </Pressable>
  );
}

// ---------------------------------------------------------------------------
// Styles
// ---------------------------------------------------------------------------

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: tokens.bg.app,
  },
  topBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingTop: 8,
    paddingBottom: 4,
  },
  wordmark: {
    fontSize: 26,
    fontWeight: tokens.weight.black,
    color: tokens.text.primary,
    letterSpacing: -0.8,
  },
  streakChip: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: tokens.radius.full,
    backgroundColor: tokens.brand.primarySoft,
    borderWidth: 1,
    borderColor: tokens.brand.primary,
  },
  streakChipText: {
    fontSize: 12,
    fontWeight: tokens.weight.extrabold,
    color: tokens.brand.primary,
    letterSpacing: 0.3,
  },
  scroll: { flex: 1 },
  scrollContent: {
    paddingBottom: 32,
    paddingTop: 8,
  },

  // Hero
  hero: {
    marginHorizontal: 20,
    marginBottom: 24,
    padding: 24,
    borderRadius: tokens.radius.lg,
    backgroundColor: tokens.bg.surfaceContainer,
    borderWidth: 1,
    borderColor: tokens.brand.primary,
    shadowColor: tokens.brand.primary,
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.35,
    shadowRadius: 22,
    elevation: 10,
  },
  heroPressed: {
    opacity: 0.92,
    transform: [{ scale: 0.99 }],
  },
  heroEyebrow: {
    fontSize: 11,
    fontWeight: tokens.weight.extrabold,
    color: tokens.brand.primary,
    letterSpacing: 1.8,
  },
  heroEmoji: {
    fontSize: 48,
    marginTop: 12,
    marginBottom: 4,
  },
  heroTitle: {
    fontSize: 26,
    fontWeight: tokens.weight.black,
    color: tokens.text.primary,
    letterSpacing: -0.8,
    lineHeight: 30,
    marginTop: 4,
  },
  heroSub: {
    marginTop: 10,
    fontSize: 13,
    fontWeight: tokens.weight.semibold,
    color: tokens.text.secondary,
    letterSpacing: 0.2,
  },

  // Row
  row: {
    marginBottom: 22,
  },
  rowHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  rowTitle: {
    fontSize: 18,
    fontWeight: tokens.weight.extrabold,
    color: tokens.text.primary,
    letterSpacing: -0.3,
  },
  rowCount: {
    fontSize: 11,
    fontWeight: tokens.weight.bold,
    color: tokens.text.tertiary,
    letterSpacing: 0.4,
  },
  rowList: {
    paddingHorizontal: 16,
    gap: 12,
  },
  soonChip: {
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: tokens.radius.full,
    backgroundColor: tokens.bg.surfaceContainerHigh,
    borderWidth: 1,
    borderColor: tokens.border.light,
  },
  soonChipText: {
    fontSize: 10,
    fontWeight: tokens.weight.extrabold,
    color: tokens.text.tertiary,
    letterSpacing: 1.2,
  },
  soonCard: {
    marginHorizontal: 20,
    padding: 18,
    borderRadius: tokens.radius.base,
    backgroundColor: tokens.bg.surfaceContainerLow,
    borderWidth: 1,
    borderColor: tokens.border.light,
    borderStyle: "dashed",
  },
  soonCardText: {
    fontSize: 13,
    lineHeight: 19,
    color: tokens.text.secondary,
  },

  // Bottom nav
  nav: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    height: 60,
    paddingHorizontal: 8,
    borderTopWidth: 1,
    borderTopColor: tokens.border.light,
    backgroundColor: tokens.bg.surfaceContainerLowest,
  },
});

const cardStyles = StyleSheet.create({
  card: {
    width: 160,
    height: 200,
    padding: 14,
    borderRadius: tokens.radius.base,
    backgroundColor: tokens.bg.surfaceContainer,
    borderWidth: 1,
    borderColor: tokens.border.light,
    justifyContent: "space-between",
  },
  cardPressed: {
    opacity: 0.86,
    transform: [{ scale: 0.97 }],
  },
  cardCompleted: {
    opacity: 0.62,
  },
  cardTop: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
  cardEmoji: {
    fontSize: 32,
  },
  newPill: {
    paddingHorizontal: 7,
    paddingVertical: 2,
    borderRadius: tokens.radius.full,
    backgroundColor: tokens.brand.primary,
  },
  newPillText: {
    fontSize: 9,
    fontWeight: tokens.weight.extrabold,
    color: tokens.text.onPrimary,
    letterSpacing: 0.8,
  },
  cardTitle: {
    fontSize: 14,
    fontWeight: tokens.weight.extrabold,
    color: tokens.text.primary,
    lineHeight: 18,
    letterSpacing: -0.2,
  },
  cardFooter: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  cardMeta: {
    fontSize: 11,
    fontWeight: tokens.weight.bold,
    color: tokens.text.tertiary,
    letterSpacing: 0.2,
  },
  completedTick: {
    fontSize: 14,
    fontWeight: tokens.weight.extrabold,
    color: tokens.brand.tertiary,
  },
});

const navStyles = StyleSheet.create({
  tab: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
  },
  tabPressed: {
    opacity: 0.7,
  },
  label: {
    fontSize: 13,
    fontWeight: tokens.weight.bold,
    color: tokens.text.tertiary,
    letterSpacing: 0.3,
  },
  labelActive: {
    color: tokens.brand.primary,
  },
});
