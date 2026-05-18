// Lafla — Home (tek-eylem)
//
// Replaces the previous 11-section feed.tsx with a single primary action:
// "🎤 Maya ile konuş". Everything else is either secondary (next scene
// card, streak chip) or moved to the bottom nav. The goal is that within
// 3 seconds of opening the app the user knows exactly what to do.
//
// Layout:
//   - Top bar: wordmark + streak chip
//   - Hero card: greeting + giant Maya CTA
//   - Next-scene card: surfaces one unfinished practice scenario
//   - Bottom nav: Konuş (active), Pratik, Profil
//
// All data is local-first via existing libs (coach, local-progress, scenes).

import { useCallback, useMemo, useState } from "react";
import { useFocusEffect, useRouter } from "expo-router";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import * as Haptics from "expo-haptics";

import { getCoachState, type CoachState } from "../lib/coach";
import {
  getLocalProfile,
  getCompletedLessonIds,
  type LocalProfile,
} from "../lib/local-progress";
import { SAMPLE_SCENES, type Scene } from "../data/scenes";
import { tokens } from "../theme";

interface HomeState {
  coach: CoachState | null;
  profile: LocalProfile | null;
  completed: Set<string>;
}

const EMPTY_STATE: HomeState = {
  coach: null,
  profile: null,
  completed: new Set(),
};

export default function Home() {
  const router = useRouter();
  const [state, setState] = useState<HomeState>(EMPTY_STATE);

  const load = useCallback(async () => {
    const [coach, profile, completed] = await Promise.all([
      getCoachState(),
      getLocalProfile(),
      getCompletedLessonIds(),
    ]);
    setState({ coach, profile, completed });
  }, []);

  useFocusEffect(
    useCallback(() => {
      void load();
    }, [load]),
  );

  // Pick the first non-completed scene as today's practice surface.
  // Prefer shorter ones (≤5 min) for the home card so the user can pick
  // it off in one sitting.
  const nextScene = useMemo<Scene | null>(() => {
    const fresh = SAMPLE_SCENES.filter((s) => !state.completed.has(s.lessonId));
    if (fresh.length === 0) {
      // All done — re-surface a random one for review.
      return SAMPLE_SCENES[0] ?? null;
    }
    const short = fresh.filter((s) => s.durationMin <= 5);
    const pool = short.length > 0 ? short : fresh;
    return pool[0] ?? null;
  }, [state.completed]);

  const userName = state.coach?.userDisplayName ?? null;
  const coachName = state.coach?.name ?? "Maya";
  const streak = state.profile?.current_streak ?? 0;

  const goMaya = async () => {
    try {
      await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    } catch {
      // haptics is optional
    }
    router.push("/freechat-voice" as never);
  };

  const goScene = async (lessonId: string) => {
    try {
      await Haptics.selectionAsync();
    } catch {}
    router.push(`/scenario/${lessonId}` as never);
  };

  return (
    <SafeAreaView style={styles.safe} edges={["top", "bottom"]}>
      <StatusBar style="light" />

      {/* Top bar: wordmark + streak */}
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
        {/* Hero — Maya CTA */}
        <View style={styles.heroCard}>
          <Text style={styles.heroEyebrow}>
            {coachName.toUpperCase()} · BUGÜN
          </Text>
          <Text style={styles.heroGreeting}>
            {userName ? `Selam ${userName}!` : "Selam!"}
          </Text>
          <Text style={styles.heroBody}>
            İngilizce konuşma pratiği için hazır mısın? 5 dakika konuş, anında
            geri bildirim al.
          </Text>

          <Pressable
            onPress={goMaya}
            style={({ pressed }) => [
              styles.heroBtn,
              pressed && styles.heroBtnPressed,
            ]}
            accessibilityRole="button"
            accessibilityLabel={`${coachName} ile konuşmaya başla`}
          >
            <Text style={styles.heroBtnIcon}>🎤</Text>
            <View style={styles.heroBtnText}>
              <Text style={styles.heroBtnTitle}>{coachName} ile konuş</Text>
              <Text style={styles.heroBtnSub}>~5 dk · sesli pratik</Text>
            </View>
            <Text style={styles.heroBtnChev}>›</Text>
          </Pressable>
        </View>

        {/* Next scene */}
        {nextScene ? (
          <Pressable
            onPress={() => goScene(nextScene.lessonId)}
            style={({ pressed }) => [
              styles.sceneCard,
              pressed && styles.cardPressed,
            ]}
            accessibilityRole="button"
            accessibilityLabel={`Sahne pratiği: ${nextScene.title}`}
          >
            <View style={styles.sceneTop}>
              <Text style={styles.sceneEyebrow}>HAZIR SAHNE</Text>
              {nextScene.cefrLevel ? (
                <View style={styles.sceneLevelChip}>
                  <Text style={styles.sceneLevelChipText}>
                    {nextScene.cefrLevel}
                  </Text>
                </View>
              ) : null}
            </View>
            <View style={styles.sceneBody}>
              <Text style={styles.sceneEmoji}>{nextScene.emoji}</Text>
              <View style={styles.sceneTextWrap}>
                <Text style={styles.sceneTitle} numberOfLines={2}>
                  {nextScene.title.replace(/\s+/g, " ").trim()}
                </Text>
                <Text style={styles.sceneMeta}>
                  {nextScene.durationMin} dk · senaryo pratiği
                </Text>
              </View>
              <Text style={styles.sceneChev}>›</Text>
            </View>
          </Pressable>
        ) : null}

        {/* Streak progress (only if user has any) */}
        {streak > 0 ? (
          <View style={styles.streakCard}>
            <Text style={styles.streakCardEyebrow}>SERİ</Text>
            <Text style={styles.streakCardTitle}>
              {streak} gün üst üste — devam et
            </Text>
            <View style={styles.streakDots}>
              {Array.from({ length: 7 }).map((_, i) => (
                <View
                  key={i}
                  style={[
                    styles.streakDot,
                    i < streak && styles.streakDotFilled,
                  ]}
                />
              ))}
            </View>
          </View>
        ) : null}
      </ScrollView>

      {/* Bottom nav — 3 sekme */}
      <View style={styles.nav}>
        <NavTab label="Konuş" active />
        <NavTab
          label="Pratik"
          onPress={() => router.push(`/scenario/${nextScene?.lessonId ?? SAMPLE_SCENES[0].lessonId}` as never)}
        />
        <NavTab label="Profil" onPress={() => router.push("/profile" as never)} />
      </View>
    </SafeAreaView>
  );
}

// ---------------------------------------------------------------------------
// Subcomponents
// ---------------------------------------------------------------------------

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
        active && navStyles.tabActive,
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
    fontSize: 24,
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
    padding: 20,
    paddingTop: 12,
    paddingBottom: 32,
    gap: 16,
  },

  // Hero card (Maya CTA)
  heroCard: {
    padding: 24,
    borderRadius: tokens.radius.lg,
    backgroundColor: tokens.bg.surfaceContainer,
    borderWidth: 1,
    borderColor: tokens.border.light,
    gap: 12,
  },
  heroEyebrow: {
    fontSize: 11,
    fontWeight: tokens.weight.extrabold,
    color: tokens.brand.tertiary,
    letterSpacing: 1.6,
  },
  heroGreeting: {
    fontSize: 32,
    fontWeight: tokens.weight.black,
    color: tokens.text.primary,
    letterSpacing: -1,
    lineHeight: 36,
  },
  heroBody: {
    fontSize: 15,
    lineHeight: 22,
    color: tokens.text.secondary,
    marginBottom: 8,
  },
  heroBtn: {
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
    paddingVertical: 18,
    paddingHorizontal: 20,
    borderRadius: tokens.radius.full,
    backgroundColor: tokens.brand.primary,
    shadowColor: tokens.brand.primary,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.4,
    shadowRadius: 18,
    elevation: 8,
  },
  heroBtnPressed: {
    opacity: 0.9,
    transform: [{ scale: 0.98 }],
  },
  heroBtnIcon: {
    fontSize: 28,
  },
  heroBtnText: {
    flex: 1,
  },
  heroBtnTitle: {
    fontSize: 18,
    fontWeight: tokens.weight.extrabold,
    color: tokens.text.onPrimary,
    letterSpacing: -0.3,
  },
  heroBtnSub: {
    fontSize: 12,
    color: tokens.text.onPrimary,
    opacity: 0.85,
    fontWeight: tokens.weight.semibold,
    marginTop: 2,
  },
  heroBtnChev: {
    fontSize: 24,
    color: tokens.text.onPrimary,
    fontWeight: tokens.weight.black,
  },

  // Scene card
  sceneCard: {
    padding: 16,
    borderRadius: tokens.radius.base,
    backgroundColor: tokens.bg.surfaceContainerLow,
    borderWidth: 1,
    borderColor: tokens.border.light,
    gap: 12,
  },
  cardPressed: {
    opacity: 0.85,
    transform: [{ scale: 0.99 }],
  },
  sceneTop: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  sceneEyebrow: {
    fontSize: 11,
    fontWeight: tokens.weight.extrabold,
    color: tokens.text.tertiary,
    letterSpacing: 1.6,
  },
  sceneLevelChip: {
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: tokens.radius.full,
    backgroundColor: tokens.brand.tertiarySoft,
  },
  sceneLevelChipText: {
    fontSize: 11,
    fontWeight: tokens.weight.extrabold,
    color: tokens.brand.tertiary,
    letterSpacing: 0.4,
  },
  sceneBody: {
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
  },
  sceneEmoji: {
    fontSize: 36,
  },
  sceneTextWrap: { flex: 1 },
  sceneTitle: {
    fontSize: 16,
    fontWeight: tokens.weight.extrabold,
    color: tokens.text.primary,
    lineHeight: 21,
    letterSpacing: -0.2,
  },
  sceneMeta: {
    fontSize: 12,
    fontWeight: tokens.weight.semibold,
    color: tokens.text.tertiary,
    marginTop: 2,
  },
  sceneChev: {
    fontSize: 24,
    color: tokens.text.tertiary,
    fontWeight: tokens.weight.bold,
  },

  // Streak card
  streakCard: {
    padding: 16,
    borderRadius: tokens.radius.base,
    backgroundColor: tokens.bg.surfaceContainerLow,
    borderWidth: 1,
    borderColor: tokens.border.light,
    gap: 10,
  },
  streakCardEyebrow: {
    fontSize: 11,
    fontWeight: tokens.weight.extrabold,
    color: tokens.brand.primary,
    letterSpacing: 1.6,
  },
  streakCardTitle: {
    fontSize: 15,
    fontWeight: tokens.weight.bold,
    color: tokens.text.primary,
  },
  streakDots: {
    flexDirection: "row",
    gap: 6,
    marginTop: 4,
  },
  streakDot: {
    width: 28,
    height: 6,
    borderRadius: 3,
    backgroundColor: tokens.bg.surfaceContainerHigh,
  },
  streakDotFilled: {
    backgroundColor: tokens.brand.primary,
  },

  // Bottom nav container
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

const navStyles = StyleSheet.create({
  tab: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
  },
  tabActive: {
    // active styling via label color only — keep nav clean
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
