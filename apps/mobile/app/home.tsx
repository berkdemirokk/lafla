// Lafla — Home (two-track entry)
//
// Strategic pivot: from the Turkish-coach "Maya" funnel to a global,
// English-speaking practice app with two clear tracks:
//   1. Daily Life  — real-world conversational English (cafés, work, travel, dating)
//   2. Exam Prep   — IELTS / TOEFL / Cambridge speaking practice
//
// The hero greeting and both track CTAs sit above the fold. A "ready scene"
// card surfaces an unfinished scenario when one is available. Track-specific
// routing lands in Phase 4 once scenario data is partitioned; for now both
// cards route to the same next-scene (or first SAMPLE_SCENE fallback).
//
// Layout (top → bottom):
//   - Top bar: "Lafla" wordmark + streak chip (if streak > 0)
//   - Hero: "Speak English." headline + subtitle
//   - Two track cards (stacked): Daily Life · Exam Prep
//   - Ready-scene card (conditional)
//   - Bottom nav: Home (active) / Practice / Profile

import { useCallback, useMemo, useState } from "react";
import { useFocusEffect, useRouter } from "expo-router";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import * as Haptics from "expo-haptics";

import {
  getLocalProfile,
  getCompletedLessonIds,
  type LocalProfile,
} from "../lib/local-progress";
import { SAMPLE_SCENES, type Scene } from "../data/scenes";
import { tokens } from "../theme";

interface HomeState {
  profile: LocalProfile | null;
  completed: Set<string>;
}

const EMPTY_STATE: HomeState = {
  profile: null,
  completed: new Set(),
};

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

  const streak = state.profile?.current_streak ?? 0;

  // Track CTAs share routing for now (Phase 4 will partition by track).
  // Falls back to the first SAMPLE_SCENE if nothing is unlocked yet.
  const goTrack = async () => {
    try {
      await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    } catch {
      // haptics is optional
    }
    const lessonId = nextScene?.lessonId ?? SAMPLE_SCENES[0]?.lessonId;
    if (!lessonId) return;
    router.push(`/scenario/${lessonId}` as never);
  };

  const goScene = async (lessonId: string) => {
    try {
      await Haptics.selectionAsync();
    } catch {}
    router.push(`/scenario/${lessonId}` as never);
  };

  const goPractice = async () => {
    try {
      await Haptics.selectionAsync();
    } catch {}
    const lessonId = nextScene?.lessonId ?? SAMPLE_SCENES[0]?.lessonId;
    if (!lessonId) return;
    router.push(`/scenario/${lessonId}` as never);
  };

  const goProfile = async () => {
    try {
      await Haptics.selectionAsync();
    } catch {}
    router.push("/profile" as never);
  };

  return (
    <SafeAreaView style={styles.safe} edges={["top", "bottom"]}>
      <StatusBar style="light" />

      {/* Top bar: wordmark + streak */}
      <View style={styles.topBar}>
        <Text style={styles.wordmark}>Lafla</Text>
        {streak > 0 ? (
          <View style={styles.streakChip}>
            <Text style={styles.streakChipText}>
              {`🔥 ${streak} day${streak > 1 ? "s" : ""} streak`}
            </Text>
          </View>
        ) : null}
      </View>

      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Hero greeting */}
        <View style={styles.hero}>
          <Text style={styles.heroTitle}>Speak English.</Text>
          <Text style={styles.heroSubtitle}>
            For real life. For real exams.
          </Text>
        </View>

        {/* Track cards */}
        <View style={styles.tracks}>
          <TrackCard
            tag="DAILY LIFE"
            emoji="🎬"
            title="Real-world English"
            description="Cafés, work, dating, travel"
            cta="Start"
            tone="primary"
            onPress={goTrack}
          />
          <TrackCard
            tag="EXAM PREP"
            emoji="🎓"
            title="Pass your speaking test"
            description="IELTS · TOEFL · Cambridge"
            cta="Start"
            tone="tertiary"
            onPress={goTrack}
          />
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
            accessibilityLabel={`Scenario practice: ${nextScene.title}`}
          >
            <View style={styles.sceneTop}>
              <Text style={styles.sceneEyebrow}>READY SCENE</Text>
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
                  {`${nextScene.durationMin} min · scenario practice`}
                </Text>
              </View>
              <Text style={styles.sceneChev}>›</Text>
            </View>
          </Pressable>
        ) : null}

        {/* Streak progress (only if user has any) */}
        {streak > 0 ? (
          <View style={styles.streakCard}>
            <Text style={styles.streakCardEyebrow}>STREAK</Text>
            <Text style={styles.streakCardTitle}>
              {`${streak} day${streak > 1 ? "s" : ""} in a row — keep it up`}
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

      {/* Bottom nav — 3 tabs */}
      <View style={styles.nav}>
        <NavTab label="Home" active />
        <NavTab label="Practice" onPress={goPractice} />
        <NavTab label="Profile" onPress={goProfile} />
      </View>
    </SafeAreaView>
  );
}

// ---------------------------------------------------------------------------
// Subcomponents
// ---------------------------------------------------------------------------

function TrackCard({
  tag,
  emoji,
  title,
  description,
  cta,
  tone,
  onPress,
}: {
  tag: string;
  emoji: string;
  title: string;
  description: string;
  cta: string;
  tone: "primary" | "tertiary";
  onPress: () => void;
}) {
  const isPrimary = tone === "primary";
  const accent = isPrimary ? tokens.brand.primary : tokens.brand.tertiary;
  const accentSoft = isPrimary
    ? tokens.brand.primarySoft
    : tokens.brand.tertiarySoft;
  const ctaTextColor = isPrimary
    ? tokens.brand.onPrimary
    : tokens.brand.onTertiary;

  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        trackStyles.card,
        { borderColor: accentSoft },
        pressed && trackStyles.cardPressed,
      ]}
      accessibilityRole="button"
      accessibilityLabel={`${tag}: ${title}`}
    >
      <View style={trackStyles.header}>
        <Text style={trackStyles.emoji}>{emoji}</Text>
        <Text style={[trackStyles.tag, { color: accent }]}>{tag}</Text>
      </View>
      <Text style={trackStyles.title}>{title}</Text>
      <Text style={trackStyles.description}>{description}</Text>
      <View
        style={[
          trackStyles.cta,
          { backgroundColor: accent },
        ]}
      >
        <Text style={[trackStyles.ctaText, { color: ctaTextColor }]}>
          {cta}
        </Text>
        <Text style={[trackStyles.ctaChev, { color: ctaTextColor }]}>›</Text>
      </View>
    </Pressable>
  );
}

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

  // Hero greeting
  hero: {
    paddingVertical: 12,
    gap: 6,
  },
  heroTitle: {
    fontSize: 40,
    fontWeight: tokens.weight.black,
    color: tokens.text.primary,
    letterSpacing: -1.4,
    lineHeight: 44,
  },
  heroSubtitle: {
    fontSize: 16,
    lineHeight: 22,
    color: tokens.text.secondary,
    fontWeight: tokens.weight.medium,
  },

  // Track cards container
  tracks: {
    gap: 12,
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

const trackStyles = StyleSheet.create({
  card: {
    padding: 20,
    borderRadius: tokens.radius.lg,
    backgroundColor: tokens.bg.surfaceContainer,
    borderWidth: 1,
    gap: 8,
  },
  cardPressed: {
    opacity: 0.9,
    transform: [{ scale: 0.99 }],
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginBottom: 2,
  },
  emoji: {
    fontSize: 24,
  },
  tag: {
    fontSize: 11,
    fontWeight: tokens.weight.extrabold,
    letterSpacing: 1.6,
  },
  title: {
    fontSize: 20,
    fontWeight: tokens.weight.black,
    color: tokens.text.primary,
    letterSpacing: -0.5,
    lineHeight: 24,
  },
  description: {
    fontSize: 14,
    color: tokens.text.secondary,
    lineHeight: 20,
    marginBottom: 8,
  },
  cta: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 12,
    paddingHorizontal: 18,
    borderRadius: tokens.radius.full,
    alignSelf: "flex-start",
    minWidth: 110,
  },
  ctaText: {
    fontSize: 15,
    fontWeight: tokens.weight.extrabold,
    letterSpacing: -0.2,
  },
  ctaChev: {
    fontSize: 20,
    fontWeight: tokens.weight.black,
    marginLeft: 8,
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
