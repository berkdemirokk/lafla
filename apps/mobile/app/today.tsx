// Lafla — Bugün (Today) — yeni default ekran.
//
// 2026-05-21 — 3-ekran yapısı geçişi:
//   /today  → goal-driven. Daily plan + banner cluster + tek CTA.
//   /home   → discovery. TikTok swipe feed (banner yok, sahne yok).
//   /profile → self-reflective. Stats + history + ayarlar.
//
// Kullanıcı kritiği: "uygulama karışık olmamalı". Home'da 5 banner +
// feed + plan üst üste yığılıyordu. Bunlar Today'e taşındı, Home temizlendi.
//
// 2026-05-23 — Option E redesign:
//   • Hero card: pulsing pink halo (slow breathing, 2.2s sin loop)
//   • Hero backdrop: dual-layer voice waveform (pink dense bass + cyan sparse
//     melody, opacity 0.20 / 0.14) — echoes the brand voice metaphor.
//   • Streak chip: 🔥 heartbeat pulse (240ms up, 280ms down, 1.1s rest).
//   • Banners: stagger drift-in via FadeInDown for kinetic first-impression.
//   All animations live on the UI thread (Reanimated 3) — pil-friendly, 60fps.
//
// Tutorial overlay ilk açılışta burada (Today first impression).

import { useCallback, useEffect, useState } from "react";
import { useFocusEffect, useRouter } from "expo-router";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Animated, {
  Easing,
  FadeInDown,
  cancelAnimation,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withRepeat,
  withSequence,
  withTiming,
} from "react-native-reanimated";

import {
  getLocalProfile,
  getCompletedLessonIds,
  getInterests,
  type LocalProfile,
} from "../lib/local-progress";
import {
  getCefrLevel,
  checkErosionForUi,
  type CefrLevel,
} from "../lib/cefr-level";
import { isStreakAtRisk } from "../lib/streak-shield";
import {
  getDailyExclusive,
  isDailyExclusiveCompleted,
} from "../lib/daily-exclusive";
import {
  ensureSurpriseSceneIfPending,
  consumeSurprise,
} from "../lib/variable-reward";
import {
  getDueCount as getVocabDueCount,
  getDueMinutes as getVocabDueMinutes,
} from "../lib/srs-vocab";
import { getOrCreateDailyPlan, getPlanSummary } from "../lib/daily-plan";
import { getTodayEntry } from "../lib/daily-diary";
import {
  hasSeenHomeTutorial,
  markHomeTutorialSeen,
} from "../lib/tutorial-state";
import { interestsToModes } from "../lib/interest-mapping";
import { TutorialOverlay } from "../components/TutorialOverlay";
import { AdBanner } from "../components/AdBanner";
import { VoiceWaveform } from "../components/VoiceWaveform";
import { tokens } from "../theme";
import { TabBar } from "../components/TabBar";
import type { Scene, SceneMode } from "../data/scenes";

const K_DISPLAY_NAME = "lafla.displayName";

function greetingFor(hour: number): string {
  if (hour >= 6 && hour < 12) return "Günaydın";
  if (hour >= 12 && hour < 18) return "İyi günler";
  if (hour >= 18 && hour < 22) return "İyi akşamlar";
  return "İyi geceler";
}

function sanitizeName(raw: string | null | undefined): string {
  if (!raw) return "";
  // eslint-disable-next-line no-control-regex
  const cleaned = raw.replace(/[ -]/g, "").replace(/\s+/g, " ").trim();
  if (cleaned.length <= 30) return cleaned;
  return cleaned.slice(0, 28) + "…";
}

interface TodayState {
  profile: LocalProfile | null;
  hydrated: boolean;
  cefrLevel: CefrLevel | null;
  displayName: string;
  hour: number;
  // Banners (priority queue ile gösterilir)
  streakAtRisk: boolean;
  erosionDecay: number;
  erosionDaysIdle: number;
  erosionDroppedLevel: CefrLevel | null;
  surprise: Scene | null;
  vocabDue: number;
  vocabDueMin: number;
  daily: Scene | null;
  dailyCompleted: boolean;
  // Plan
  planTotal: number;
  planCompleted: number;
  planEstimatedMin: number;
  planIsComplete: boolean;
  planFirstScene: Scene | null;
  // 2026-05-23 — Daily diary nudge state. Bugün entry yoksa Today'de
  // subtle bir banner gösterilir. Banner agresif değil — kullanıcı
  // istediği zaman atlar.
  diaryWrittenToday: boolean;
}

const EMPTY: TodayState = {
  profile: null,
  hydrated: false,
  cefrLevel: null,
  displayName: "",
  hour: new Date().getHours(),
  streakAtRisk: false,
  erosionDecay: 0,
  erosionDaysIdle: 0,
  erosionDroppedLevel: null,
  surprise: null,
  vocabDue: 0,
  vocabDueMin: 0,
  daily: null,
  dailyCompleted: false,
  planTotal: 0,
  planCompleted: 0,
  planEstimatedMin: 0,
  planIsComplete: false,
  planFirstScene: null,
  diaryWrittenToday: false,
};

export default function Today() {
  const router = useRouter();
  const [state, setState] = useState<TodayState>(EMPTY);
  const [showTutorial, setShowTutorial] = useState(false);

  // ─── Ambient animations ──────────────────────────────────────────────
  // Two independent shared-value drivers. They start once on mount and
  // persist across the load() setState cycles — every focus reload would
  // otherwise restart the loop and feel jittery. UI-thread only.
  const heroPulse = useSharedValue(0);
  const streakPulse = useSharedValue(0);

  useEffect(() => {
    // Hero halo: slow 2.2s sin breath. Goes 0→1→0 forever. Drives shadow
    // opacity + radius so the pink glow gently pumps without distracting.
    heroPulse.value = withRepeat(
      withTiming(1, {
        duration: 2200,
        easing: Easing.inOut(Easing.sin),
      }),
      -1,
      true,
    );
    // Streak chip: heartbeat — quick up, quick down, long rest. Mimics
    // a real pulse so the 🔥 feels alive without being annoying.
    streakPulse.value = withRepeat(
      withSequence(
        withTiming(1, { duration: 240, easing: Easing.out(Easing.quad) }),
        withTiming(0, { duration: 280, easing: Easing.in(Easing.quad) }),
        withDelay(1100, withTiming(0, { duration: 1 })),
      ),
      -1,
      false,
    );
    return () => {
      cancelAnimation(heroPulse);
      cancelAnimation(streakPulse);
    };
  }, [heroPulse, streakPulse]);

  const heroGlowStyle = useAnimatedStyle(() => ({
    shadowOpacity: 0.32 + heroPulse.value * 0.42, // 0.32 → 0.74
    shadowRadius: 14 + heroPulse.value * 14, //       14   → 28
  }));

  const planDoneGlowStyle = useAnimatedStyle(() => ({
    // Reuse the same driver so done state breathes cyan in sync.
    shadowOpacity: 0.26 + heroPulse.value * 0.32, // 0.26 → 0.58
    shadowRadius: 12 + heroPulse.value * 10, //       12   → 22
  }));

  const streakStyle = useAnimatedStyle(() => ({
    transform: [{ scale: 1 + streakPulse.value * 0.12 }],
  }));

  const load = useCallback(async () => {
    const [profile, completed, cefrLevel, interests, nameRaw] =
      await Promise.all([
        getLocalProfile(),
        getCompletedLessonIds(),
        getCefrLevel(),
        getInterests(),
        AsyncStorage.getItem(K_DISPLAY_NAME).catch(() => null),
      ]);
    const interestModes: SceneMode[] | null =
      interests.length > 0 ? interestsToModes(interests) : null;
    const streakAtRisk =
      profile?.current_streak && profile.current_streak > 0
        ? await isStreakAtRisk(profile.last_lesson_at ?? undefined).catch(
            () => false,
          )
        : false;
    const erosion = await checkErosionForUi().catch(() => ({
      decayAmount: 0,
      daysIdle: 0,
      newLevel: null as CefrLevel | null,
    }));
    const daily = await getDailyExclusive({
      cefrLevel,
      interestModes,
    }).catch(() => null);
    const dailyCompletedId = await isDailyExclusiveCompleted(completed).catch(
      () => null,
    );
    const surprise = await ensureSurpriseSceneIfPending({
      completedLessonIds: completed,
      interestModes: interestModes ?? null,
    }).catch(() => null);
    const [vocabDue, vocabDueMin] = await Promise.all([
      getVocabDueCount().catch(() => 0),
      getVocabDueMinutes().catch(() => 0),
    ]);
    const [planScenes, planSummary] = await Promise.all([
      getOrCreateDailyPlan().catch(() => [] as Scene[]),
      getPlanSummary().catch(() => ({
        total: 0,
        completed: 0,
        estimatedMin: 0,
        isComplete: false,
      })),
    ]);
    const planFirstScene =
      planScenes.find((s) => !completed.has(s.lessonId)) ??
      planScenes[0] ??
      null;
    const tutorialSeen = await hasSeenHomeTutorial().catch(() => true);
    // Diary today entry — defansif, hata olsa bile Today crash etmesin.
    const diaryToday = await getTodayEntry().catch(() => null);

    setState({
      profile,
      hydrated: true,
      cefrLevel,
      displayName: sanitizeName(nameRaw),
      hour: new Date().getHours(),
      streakAtRisk,
      erosionDecay: erosion.decayAmount,
      erosionDaysIdle: Math.floor(erosion.daysIdle),
      erosionDroppedLevel: erosion.newLevel,
      surprise,
      vocabDue,
      vocabDueMin,
      daily,
      dailyCompleted: !!dailyCompletedId,
      planTotal: planSummary.total,
      planCompleted: planSummary.completed,
      planEstimatedMin: planSummary.estimatedMin,
      planIsComplete: planSummary.isComplete,
      planFirstScene,
      diaryWrittenToday: diaryToday !== null,
    });
    setShowTutorial(!tutorialSeen);
  }, []);

  useFocusEffect(
    useCallback(() => {
      void load();
    }, [load]),
  );

  const streak = state.profile?.current_streak ?? 0;
  const remainingInPlan = Math.max(0, state.planTotal - state.planCompleted);

  return (
    <SafeAreaView style={styles.safe} edges={["top", "bottom"]}>
      <StatusBar style="light" />

      {/* Top bar */}
      <View style={styles.topBar}>
        <View style={styles.topBarLeft}>
          <Text style={styles.greeting} numberOfLines={1} adjustsFontSizeToFit>
            {greetingFor(state.hour)}
            {state.displayName ? `, ${state.displayName}` : ""}
          </Text>
        </View>
        {streak > 0 ? (
          <Animated.View style={[styles.streakChip, streakStyle]}>
            <Text style={styles.streakChipText}>🔥 {streak}</Text>
          </Animated.View>
        ) : null}
      </View>

      <ScrollView
        contentContainerStyle={styles.scroll}
        showsVerticalScrollIndicator={false}
      >
        {/* HERO — Daily Plan (en güçlü CTA) */}
        {/*
          Option E layout:
            • Outer Animated.View — handles the pulsing pink halo. backgroundColor +
              borderRadius live here so iOS draws shadow correctly. overflow:hidden
              clips the backdrop to the rounded shape; iOS still renders the shadow
              outside those bounds, so the halo survives.
            • HeroBackdrop — absolute-fill dual waveform (pink dense bass + cyan
              sparse melody) with pointerEvents:none so it never steals touches.
            • Inner Pressable — transparent surface, owns padding + content + ripple.
        */}
        {state.planFirstScene && !state.planIsComplete ? (
          <Animated.View
            entering={FadeInDown.duration(420)}
            style={[styles.heroFrame, heroGlowStyle]}
          >
            <View style={styles.heroBackdrop} pointerEvents="none">
              <View style={styles.heroBackdropLayerBottom}>
                <VoiceWaveform
                  bars={14}
                  barWidth={3}
                  gap={8}
                  height={92}
                  color={tokens.brand.primary}
                  accessibilityLabel=""
                />
              </View>
              <View style={styles.heroBackdropLayerTop}>
                <VoiceWaveform
                  bars={10}
                  barWidth={3}
                  gap={12}
                  height={58}
                  color={tokens.brand.tertiary}
                  accessibilityLabel=""
                />
              </View>
            </View>
            <Pressable
              onPress={() =>
                router.push(
                  `/scenario/${state.planFirstScene!.lessonId}` as never,
                )
              }
              style={({ pressed }) => [
                styles.heroPressable,
                pressed && styles.pressed,
              ]}
              accessibilityRole="button"
              accessibilityLabel={`Bugünün planı: ${remainingInPlan} sahne kaldı`}
            >
              <Text style={styles.planLabel}>
                {state.planCompleted > 0
                  ? `▶ DEVAM ET (${state.planCompleted}/${state.planTotal})`
                  : "▶ BUGÜNÜN PLANI"}
              </Text>
              <Text style={styles.planTitle}>
                {remainingInPlan} sahne · ~{state.planEstimatedMin} dk
              </Text>
              <Text style={styles.planSub} numberOfLines={1}>
                Sıradaki: {state.planFirstScene.title.replace(/\n/g, " ")}
              </Text>
            </Pressable>
          </Animated.View>
        ) : state.planIsComplete ? (
          <Animated.View
            entering={FadeInDown.duration(420)}
            style={[styles.planDone, planDoneGlowStyle]}
          >
            <Text style={styles.planDoneEmoji}>🎉</Text>
            <Text style={styles.planDoneTitle}>Bugünün planı tamam</Text>
            <Text style={styles.planDoneSub}>
              Yarın yeni 5 sahne hazırlanır. Akış'tan ekstra sahne yapabilirsin.
            </Text>
          </Animated.View>
        ) : null}

        {/* Tek satır banner — priority queue (streak risk > erozyon) */}
        {/* Banner stagger: hero ~420ms → banners drift in 120/180/240/300/360. */}
        {state.streakAtRisk ? (
          <Animated.View entering={FadeInDown.delay(120).duration(360)}>
            <View style={styles.warningBanner}>
              <Text style={styles.warningText}>
                🔥 Streak risk altında — 1 sahne kurtarır
              </Text>
            </View>
          </Animated.View>
        ) : state.erosionDecay > 0 ? (
          <Animated.View entering={FadeInDown.delay(120).duration(360)}>
            <View style={styles.erosionBanner}>
              <Text style={styles.erosionLabel}>
                ⚠ CEFR İLERLEMEN GERİLİYOR
              </Text>
              <Text style={styles.erosionText}>
                {state.erosionDroppedLevel
                  ? `${state.erosionDaysIdle} gün ara — ${state.erosionDroppedLevel}'e düştün.`
                  : `${state.erosionDaysIdle} gün ara — −${state.erosionDecay.toFixed(2)} aşındı.`}
              </Text>
            </View>
          </Animated.View>
        ) : null}

        {/* Sürpriz sahne (variable reward) */}
        {state.surprise && (
          <Animated.View entering={FadeInDown.delay(180).duration(360)}>
            <Pressable
              onPress={async () => {
                const id = state.surprise!.lessonId;
                await consumeSurprise().catch(() => {});
                router.push(`/scenario/${id}` as never);
              }}
              style={({ pressed }) => [
                styles.surpriseBanner,
                pressed && styles.pressed,
              ]}
              accessibilityRole="button"
              accessibilityLabel={`Sürpriz sahne: ${state.surprise.title.replace(/\n/g, " ")}`}
            >
              <Text style={styles.surpriseLabel}>🎁 SÜRPRİZ</Text>
              <Text style={styles.surpriseTitle} numberOfLines={2}>
                {state.surprise.title.replace(/\n/g, " ")}
              </Text>
            </Pressable>
          </Animated.View>
        )}

        {/* Daily exclusive */}
        {state.daily && (
          <Animated.View entering={FadeInDown.delay(240).duration(360)}>
            <Pressable
              onPress={() =>
                router.push(`/scenario/${state.daily!.lessonId}` as never)
              }
              style={({ pressed }) => [
                styles.dailyBanner,
                pressed && styles.pressed,
              ]}
              accessibilityRole="button"
              accessibilityLabel={`Bugün için: ${state.daily.title.replace(/\n/g, " ")}`}
            >
              <Text style={styles.dailyLabel}>
                {state.dailyCompleted ? "✓ BUGÜN TAMAMLANDI" : "📍 BUGÜN İÇİN"}
              </Text>
              <Text style={styles.dailyTitle} numberOfLines={2}>
                {state.daily.title.replace(/\n/g, " ")}
              </Text>
            </Pressable>
          </Animated.View>
        )}

        {/* Vocab review */}
        {state.vocabDue > 0 && (
          <Animated.View entering={FadeInDown.delay(300).duration(360)}>
            <Pressable
              onPress={() => router.push("/review" as never)}
              style={({ pressed }) => [
                styles.vocabBanner,
                pressed && styles.pressed,
              ]}
              accessibilityRole="button"
              accessibilityLabel={`Bugünkü tekrar: ${state.vocabDue} kelime`}
            >
              <Text style={styles.vocabLabel}>📚 KELİME TEKRARI</Text>
              <Text style={styles.vocabText}>
                {state.vocabDue} kelime · ~{state.vocabDueMin} dk
              </Text>
            </Pressable>
          </Animated.View>
        )}

        {/* Diary nudge — bugün yazılmamışsa ince bir banner. Yazılmışsa
            "Bugün ✓" ile pasif satır göster (negative reinforcement YOK).
            Brand-safe: confetti, mascot, sound effect yok. */}
        <Animated.View entering={FadeInDown.delay(330).duration(360)}>
          <Pressable
            onPress={() => router.push("/diary" as never)}
            style={({ pressed }) => [
              state.diaryWrittenToday ? styles.diaryDone : styles.diaryNudge,
              pressed && styles.pressed,
            ]}
            accessibilityRole="button"
            accessibilityLabel={
              state.diaryWrittenToday
                ? "Bugünün günlük cümlesi yazıldı"
                : "Bugünün cümlesini yazmak için günlüğü aç"
            }
          >
            <Text
              style={
                state.diaryWrittenToday
                  ? styles.diaryDoneLabel
                  : styles.diaryNudgeLabel
              }
            >
              {state.diaryWrittenToday ? "✓ BUGÜN" : "✎ GÜNLÜK"}
            </Text>
            <Text
              style={
                state.diaryWrittenToday
                  ? styles.diaryDoneText
                  : styles.diaryNudgeText
              }
            >
              {state.diaryWrittenToday
                ? "Bugünün cümlesi yazıldı"
                : "Bugün 1 cümle İngilizce yaz"}
            </Text>
          </Pressable>
        </Animated.View>

        {/* "Akış'ta keşfet" CTA — kullanıcı plan dışı bir şey istiyorsa */}
        <Animated.View entering={FadeInDown.delay(380).duration(360)}>
          <Pressable
            onPress={() => router.push("/home" as never)}
            style={({ pressed }) => [
              styles.exploreCard,
              pressed && styles.pressed,
            ]}
            accessibilityRole="button"
            accessibilityLabel="Akıştan rastgele sahneler keşfet"
          >
            <Text style={styles.exploreEmoji}>🎬</Text>
            <View style={styles.exploreText}>
              <Text style={styles.exploreTitle}>Akış'tan keşfet</Text>
              <Text style={styles.exploreSub}>
                Plan dışı 500+ sahneyi kaydırarak gez.
              </Text>
            </View>
            <Text style={styles.exploreArrow}>›</Text>
          </Pressable>
        </Animated.View>
      </ScrollView>

      <AdBanner />
      <TabBar active="today" />

      {showTutorial && state.hydrated && (
        <TutorialOverlay
          displayName={state.displayName}
          planTotal={state.planTotal}
          planEstimatedMin={state.planEstimatedMin}
          onDismiss={() => {
            setShowTutorial(false);
            markHomeTutorialSeen().catch(() => {});
          }}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: tokens.bg.app },
  topBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingTop: 6,
    paddingBottom: 14,
  },
  topBarLeft: { flex: 1, marginRight: 8 },
  greeting: {
    fontSize: 22,
    fontWeight: tokens.weight.black,
    color: tokens.text.primary,
    letterSpacing: -0.6,
  },
  streakChip: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: tokens.radius.full,
    backgroundColor: tokens.brand.primarySoft,
    borderWidth: 1,
    borderColor: tokens.brand.primary,
  },
  streakChipText: {
    fontSize: 13,
    fontWeight: tokens.weight.extrabold,
    color: tokens.brand.primary,
    letterSpacing: 0.3,
  },

  scroll: {
    paddingHorizontal: 16,
    paddingBottom: 28,
    gap: 12,
  },
  pressed: { opacity: 0.86, transform: [{ scale: 0.98 }] },

  // PLAN HERO — primary pink halo with dual-waveform backdrop.
  //
  // The frame owns: backgroundColor, borderRadius, border, shadow (animated),
  // and overflow:hidden so the backdrop clips to the rounded corners.
  // The Pressable inside is transparent and owns padding + content layout.
  heroFrame: {
    borderRadius: tokens.radius.lg,
    backgroundColor: tokens.brand.primarySoft,
    borderWidth: 2,
    borderColor: tokens.brand.primary,
    shadowColor: tokens.brand.primary,
    shadowOffset: { width: 0, height: 0 },
    // shadowOpacity + shadowRadius are animated; defaults match the
    // mid-cycle so the first render before the loop kicks in still glows.
    shadowOpacity: 0.55,
    shadowRadius: 22,
    elevation: 10,
    overflow: "hidden",
    position: "relative",
  },
  heroBackdrop: {
    ...StyleSheet.absoluteFillObject,
    overflow: "hidden",
  },
  // Pink dense bass band hugs the bottom — feels like the brand voice
  // resonating beneath the CTA.
  heroBackdropLayerBottom: {
    position: "absolute",
    bottom: -8,
    left: 0,
    right: 0,
    opacity: 0.22,
  },
  // Cyan sparser melody floats near the top — Neon Noir accent contrast.
  heroBackdropLayerTop: {
    position: "absolute",
    top: -6,
    left: 0,
    right: 0,
    opacity: 0.14,
  },
  heroPressable: {
    padding: 20,
    gap: 8,
    backgroundColor: "transparent",
  },
  planLabel: {
    fontSize: 11,
    fontWeight: tokens.weight.extrabold,
    color: tokens.brand.primary,
    letterSpacing: 1.5,
  },
  planTitle: {
    fontSize: 22,
    fontWeight: tokens.weight.black,
    color: tokens.text.primary,
    fontFamily: tokens.font.display,
    letterSpacing: -0.5,
  },
  planSub: {
    fontSize: 13,
    color: tokens.text.secondary,
    letterSpacing: -0.1,
  },

  planDone: {
    paddingVertical: 24,
    paddingHorizontal: 18,
    borderRadius: tokens.radius.lg,
    backgroundColor: tokens.brand.tertiarySoft,
    borderWidth: 1,
    borderColor: tokens.brand.tertiary,
    alignItems: "center",
    gap: 6,
    // Cyan halo — same heroPulse driver, different tint. Reward feel
    // continues even after the plan is done.
    shadowColor: tokens.brand.tertiary,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.4,
    shadowRadius: 16,
    elevation: 8,
  },
  planDoneEmoji: { fontSize: 36 },
  planDoneTitle: {
    fontSize: 18,
    fontWeight: tokens.weight.extrabold,
    color: tokens.brand.tertiary,
    letterSpacing: -0.3,
  },
  planDoneSub: {
    fontSize: 13,
    color: tokens.text.secondary,
    textAlign: "center",
    lineHeight: 18,
  },

  // Warning/erosion banners
  warningBanner: {
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: tokens.radius.full,
    backgroundColor: tokens.semantic.warningContainer,
    borderWidth: 1,
    borderColor: tokens.semantic.warning,
    alignSelf: "center",
  },
  warningText: {
    fontSize: 12,
    fontWeight: tokens.weight.bold,
    color: tokens.semantic.warning,
    letterSpacing: 0.3,
  },
  erosionBanner: {
    paddingVertical: 12,
    paddingHorizontal: 14,
    borderRadius: tokens.radius.lg,
    backgroundColor: tokens.semantic.errorContainer,
    borderWidth: 1,
    borderColor: tokens.semantic.error,
    gap: 4,
  },
  erosionLabel: {
    fontSize: 10,
    fontWeight: tokens.weight.extrabold,
    color: tokens.semantic.error,
    letterSpacing: 1.2,
  },
  erosionText: {
    fontSize: 13,
    fontWeight: tokens.weight.bold,
    color: tokens.text.primary,
    letterSpacing: -0.1,
    lineHeight: 17,
  },

  // Sürpriz
  surpriseBanner: {
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderRadius: tokens.radius.lg,
    backgroundColor: tokens.brand.primarySoft,
    borderWidth: 1.5,
    borderColor: tokens.brand.primary,
    gap: 4,
    shadowColor: tokens.brand.primary,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.4,
    shadowRadius: 14,
    elevation: 4,
  },
  surpriseLabel: {
    fontSize: 10,
    fontWeight: tokens.weight.extrabold,
    color: tokens.brand.primary,
    letterSpacing: 1.5,
  },
  surpriseTitle: {
    fontSize: 15,
    fontWeight: tokens.weight.extrabold,
    color: tokens.text.primary,
    lineHeight: 19,
    letterSpacing: -0.2,
  },

  // Daily exclusive
  dailyBanner: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: tokens.radius.lg,
    backgroundColor: tokens.brand.tertiarySoft,
    borderWidth: 1,
    borderColor: tokens.brand.tertiary,
    gap: 4,
  },
  dailyLabel: {
    fontSize: 10,
    fontWeight: tokens.weight.bold,
    color: tokens.brand.tertiary,
    letterSpacing: 1.2,
  },
  dailyTitle: {
    fontSize: 14,
    fontWeight: tokens.weight.extrabold,
    color: tokens.text.primary,
    lineHeight: 18,
    letterSpacing: -0.2,
  },

  // Vocab
  vocabBanner: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: tokens.radius.lg,
    backgroundColor: tokens.semantic.warningContainer,
    borderWidth: 1,
    borderColor: tokens.semantic.warning,
    gap: 4,
  },
  vocabLabel: {
    fontSize: 10,
    fontWeight: tokens.weight.extrabold,
    color: tokens.semantic.warning,
    letterSpacing: 1.2,
  },
  vocabText: {
    fontSize: 14,
    fontWeight: tokens.weight.bold,
    color: tokens.text.primary,
    letterSpacing: -0.1,
  },

  // Diary nudge — ciddi/yetişkin minimal banner. Day One app referansı.
  // Bugün yazılmamışsa active (pembe accent), yazıldıysa pasif (cyan ✓).
  diaryNudge: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: tokens.radius.lg,
    backgroundColor: tokens.bg.surfaceContainer,
    borderWidth: 1,
    borderColor: tokens.brand.primary,
    borderLeftWidth: 3,
    gap: 2,
  },
  diaryNudgeLabel: {
    fontSize: 10,
    fontWeight: tokens.weight.extrabold,
    color: tokens.brand.primary,
    letterSpacing: 1.4,
  },
  diaryNudgeText: {
    fontSize: 14,
    fontWeight: tokens.weight.semibold,
    color: tokens.text.primary,
    letterSpacing: -0.1,
  },
  diaryDone: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: tokens.radius.lg,
    backgroundColor: tokens.bg.surfaceContainerLow,
    borderWidth: 1,
    borderColor: tokens.brand.tertiarySoft,
    gap: 2,
  },
  diaryDoneLabel: {
    fontSize: 10,
    fontWeight: tokens.weight.bold,
    color: tokens.brand.tertiary,
    letterSpacing: 1.4,
  },
  diaryDoneText: {
    fontSize: 13,
    color: tokens.text.secondary,
    letterSpacing: -0.1,
  },

  // Explore CTA
  exploreCard: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderRadius: tokens.radius.lg,
    backgroundColor: tokens.bg.surfaceContainer,
    borderWidth: 1,
    borderColor: tokens.border.light,
    gap: 14,
    marginTop: 8,
  },
  exploreEmoji: { fontSize: 28, width: 36, textAlign: "center" },
  exploreText: { flex: 1, gap: 2 },
  exploreTitle: {
    fontSize: 16,
    fontWeight: tokens.weight.extrabold,
    color: tokens.text.primary,
    letterSpacing: -0.3,
  },
  exploreSub: {
    fontSize: 12,
    color: tokens.text.tertiary,
    lineHeight: 16,
  },
  exploreArrow: {
    fontSize: 28,
    color: tokens.text.tertiary,
    fontWeight: tokens.weight.bold,
  },
});
