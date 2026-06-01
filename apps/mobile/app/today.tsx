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
import { pushRoute } from "../lib/routes";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Animated, {
  Easing,
  FadeInDown,
  cancelAnimation,
  interpolate,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withRepeat,
  withSequence,
  withSpring,
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
import { Icon } from "../components/Icon";
import { tokens } from "../theme";
import { TabBar } from "../components/TabBar";
import type { Scene, SceneMode } from "../data/scenes";
import { SCENE_COUNT_DISPLAY } from "../lib/scene-counts";
import { recordActive } from "../lib/notifications";
import { isPremium } from "../lib/iap";
import {
  isRewardedPremiumActive,
  getRewardedExpiresAt,
} from "../lib/rewarded";
import { showRewardedAd } from "../lib/ads";

const K_DISPLAY_NAME = "lafla.displayName";

function greetingFor(hour: number): string {
  if (hour >= 6 && hour < 12) return "Günaydın";
  if (hour >= 12 && hour < 18) return "İyi günler";
  if (hour >= 18 && hour < 22) return "İyi akşamlar";
  return "İyi geceler";
}

// 2026-05-24 — Rewarded grant bitiş zamanına kalan süreyi kısa-format döner.
// "23 sa 47 dk" / "5 sa" / "12 dk" / "2 dk altı" gibi human-readable.
function formatTimeUntil(target: Date): string {
  const diffMs = target.getTime() - Date.now();
  if (diffMs <= 0) return "0 dk";
  const totalMin = Math.floor(diffMs / 60000);
  if (totalMin < 2) return "2 dk altı";
  const hours = Math.floor(totalMin / 60);
  const mins = totalMin % 60;
  if (hours === 0) return `${mins} dk`;
  if (mins === 0) return `${hours} sa`;
  return `${hours} sa ${mins} dk`;
}

function sanitizeName(raw: string | null | undefined): string {
  if (!raw) return "";
  // 2026-05-25 — Regex artık kontrol karakterleri striplediyor (\x00-\x1F\x7F),
  // önceki versiyon `/[ -]/g` printable SPACE-DASH'i siliyordu → "Berk Demir-Ok"
  // → "BerkDemirOk". Fix scenario/[id].tsx'tedüzeltilmişti; today + profile'a
  // taşındı.
  // eslint-disable-next-line no-control-regex
  const cleaned = raw.replace(/[\x00-\x1F\x7F]/g, "").replace(/\s+/g, " ").trim();
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
  // 2026-05-24 — Rewarded ad state.
  // isPremiumActive: RC veya rewarded grant. true → ad CTA gizli.
  // rewardedActive + rewardedExpiresAt: aktif rewarded varsa "Bugün Pro açık"
  // satırı + bitiş zamanı göster. Yoksa CTA "Reklamı izle, bugün için Pro aç".
  isPremiumActive: boolean;
  rewardedActive: boolean;
  rewardedExpiresAt: Date | null;
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
  isPremiumActive: false,
  rewardedActive: false,
  rewardedExpiresAt: null,
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
    return () => {
      cancelAnimation(heroPulse);
    };
  }, [heroPulse]);

  const heroGlowStyle = useAnimatedStyle(() => ({
    shadowOpacity: 0.32 + heroPulse.value * 0.42, // 0.32 → 0.74
    shadowRadius: 14 + heroPulse.value * 14, //       14   → 28
  }));

  const planDoneGlowStyle = useAnimatedStyle(() => ({
    // Reuse the same driver so done state breathes cyan in sync.
    shadowOpacity: 0.26 + heroPulse.value * 0.32, // 0.26 → 0.58
    shadowRadius: 12 + heroPulse.value * 10, //       12   → 22
  }));

  // ─── Press feedback (2026-05-24 — sade press scale, 3D tilt YOK) ──
  // Önceki versiyon hero kartına ±4° rotateX/rotateY uyguluyordu. İlk açılışta
  // tatlı görünüyordu ama 4. kullanımda "kart düşecek mi" hissi veriyordu.
  // Apple Music kart eğmez. Sadece subtle scale press kalıyor.
  // scrollY — background waveform parallax driver (korundu, faydalı).
  // streakFlip — mount'ta streak chip'in spring-pop'u (1 kere, kalıyor).
  const heroPress = useSharedValue(0); // 0 = idle, 1 = pressed
  const scrollY = useSharedValue(0);
  const streakFlip = useSharedValue(0);

  const onScroll = useAnimatedScrollHandler({
    onScroll: (e) => {
      scrollY.value = e.contentOffset.y;
    },
  });

  const onHeroPressIn = () => {
    heroPress.value = withSpring(1, { damping: 14, stiffness: 200 });
  };
  const onHeroPressOut = () => {
    heroPress.value = withSpring(0, { damping: 16, stiffness: 240 });
  };

  // 3D press effect: scale + 3D tilt (rotateX) with perspective
  const heroPressStyle = useAnimatedStyle(() => ({
    transform: [
      { perspective: 1000 },
      { scale: 1 - heroPress.value * 0.02 },
      { rotateX: `${-2 * heroPress.value}deg` },
    ],
  }));

  // Background waveform parallax — moves at ~30% scroll speed for depth.
  // Top layer (cyan) moves slightly slower than bottom (pink) for layered feel.
  const heroBackdropBottomStyle = useAnimatedStyle(() => ({
    transform: [
      { translateY: interpolate(scrollY.value, [0, 200], [0, -30]) },
    ],
  }));
  const heroBackdropTopStyle = useAnimatedStyle(() => ({
    transform: [
      { translateY: interpolate(scrollY.value, [0, 200], [0, -16]) },
    ],
  }));

  // Streak chip — Apple Activity ring achievement tarzı subtle pop.
  // 2026-05-23 ilk versiyon 360° rotateY ile flip ediyordu — kullanıcı
  // "çıkartma gibi durmasın" dedi, çocuksu/Duolingo XP rozeti hissi
  // veriyordu. Şimdi: spring pop scale (0.85 → 1) + heartbeat pulse.
  // Tactile, premium, oyun değil.
  const streakStyle = useAnimatedStyle(() => ({
    transform: [
      // streakFlip 0 → 1 boyunca scale 0.85 → 1 (spring pop)
      // Sonra heartbeat pulse normal çalışır.
      // 2026-05-24 — pulse intensity 0.08 → 0.04 (daha subtle, "atan kalp"
      // değil "sakin nabız" hissi).
      { scale: (0.85 + streakFlip.value * 0.15) * (1 + streakPulse.value * 0.04) },
    ],
    opacity: 0.4 + streakFlip.value * 0.6, // hafif fade-in
  }));
  // NOTE: streak flip useEffect is declared LATER (after `streak` const)
  // — see ~line 290 below. JS hoisting doesn't help here because `streak`
  // is a `const` derived from `state`, not a function.

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
    // 2026-05-24 — Rewarded ad / premium status.
    const [isPremiumActive, rewardedActive, rewardedExpiresAt] =
      await Promise.all([
        isPremium().catch(() => false),
        isRewardedPremiumActive().catch(() => false),
        getRewardedExpiresAt().catch(() => null),
      ]);

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
      isPremiumActive,
      rewardedActive,
      rewardedExpiresAt,
    });
    setShowTutorial(!tutorialSeen);
  }, []);

  // 2026-05-24 — Rewarded ad handler. CTA tap → showRewardedAd → reward
  // callback'inde grant + Today reload. Failure path sessizce log'lanır.
  const [rewardedLoading, setRewardedLoading] = useState(false);
  const handleWatchRewardedAd = useCallback(async () => {
    if (rewardedLoading) return;
    setRewardedLoading(true);
    try {
      const result = await showRewardedAd();
      if (result.ok) {
        // Reload Today — banner gizlenir, "Bugün Pro açık" satırı görünür.
        await load();
      }
      // Failure path: result.userClosed → kullanıcı X bastı, sessizce kapat.
      // result.reason → diğer fail; bilinçli olarak Alert göstermiyoruz çünkü
      // network fail / no fill / AdMob limit gibi durumlar kullanıcının suçu
      // değil ve onları rahatsız etmemeli. Analytics zaten log'ladı.
    } finally {
      setRewardedLoading(false);
    }
  }, [load, rewardedLoading]);

  useFocusEffect(
    useCallback(() => {
      void load();
      // 2026-05-24 — Today focus = "kullanıcı aktif" sinyali. notifications.ts
      // dropoff zincirini (6h / 24h / 3d / 7d) yeniden zamanla. recordActive
      // permission yoksa no-op döner; cancel + reschedule idempotent.
      void recordActive().catch(() => {});
    }, [load]),
  );

  const streak = state.profile?.current_streak ?? 0;
  const remainingInPlan = Math.max(0, state.planTotal - state.planCompleted);

  // 2026-05-24 — Streak heartbeat sadece streak > 0 iken çalışsın. Önceki
  // versiyon mount'ta loop'u her zaman başlatıyordu; chip render edilmese
  // bile shared value loop CPU/battery harcıyordu. Şimdi: streak değiştikçe
  // loop start/stop.
  useEffect(() => {
    if (streak <= 0) {
      cancelAnimation(streakPulse);
      streakPulse.value = 0;
      return;
    }
    // 2026-05-25 (B-EDGE-12) — Önce explicit reset, withRepeat mid-sequence
    // cancellation'da shared value yarım durumda kalabiliyordu (chip frozen
    // mid-pulse). Reset 0'a, sonra loop başlat.
    cancelAnimation(streakPulse);
    streakPulse.value = 0;
    // Streak chip: heartbeat — quick up, quick down, long rest. Mimics
    // a real pulse so the chip feels alive without being annoying.
    // Cycle ~3.5s (yavaşlatma sonrası): 280ms up + 320ms down + 2900ms rest.
    streakPulse.value = withRepeat(
      withSequence(
        withTiming(1, { duration: 280, easing: Easing.out(Easing.quad) }),
        withTiming(0, { duration: 320, easing: Easing.in(Easing.quad) }),
        withDelay(2900, withTiming(0, { duration: 1 })),
      ),
      -1,
      false,
    );
    return () => {
      cancelAnimation(streakPulse);
    };
  }, [streak, streakPulse]);

  // 2026-05-25 — 2×2 action grid. Önceki "banner cap 2" logic'i kaldırıldı.
  // Şimdi 4 tile hep görünür: Kelime tekrarı / Sürpriz / Günün özeli / Günlük.
  // Her tile rozet (sayı veya ✓) gösterir; yokken sade ikon + label.
  // Tile boş veri ile de tıklanır — kullanıcı tıklayıp ilgili ekranı gezer.
  // 2026-05-26 — Badge cap "99+". Tile.minWidth: 22 → 3+ haneli sayı overflow.
  const vocabBadge =
    state.vocabDue > 0
      ? state.vocabDue > 99
        ? "99+"
        : String(state.vocabDue)
      : null;
  const surpriseBadge = state.surprise ? "•" : null;
  const dailyBadge = state.dailyCompleted ? "✓" : state.daily ? "•" : null;
  const diaryBadge = state.diaryWrittenToday ? "✓" : null;

  // Empty state — plan yoksa ve done değilse (state hydrated ama plan boş).
  // Yeni kullanıcı / plan generator hata verdi / hot-reload sonrası gibi durumlar.
  const showEmptyState =
    state.hydrated && !state.planFirstScene && !state.planIsComplete;

  // Streak chip flip — mount-time 360° rotateY. Triggered once when
  // streak > 0 first becomes true. Combined with existing heartbeat
  // pulse for layered animation. perspective ensures rotation reads as
  // 3D card flip, not 2D mirror.
  useEffect(() => {
    if (streak > 0 && streakFlip.value === 0) {
      // Delay a bit so the flip lands after the entrance animation.
      streakFlip.value = withDelay(
        500,
        withTiming(1, {
          duration: 700,
          easing: Easing.out(Easing.cubic),
        }),
      );
    }
  }, [streak, streakFlip]);

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
          <Animated.View
            style={[styles.streakChip, streakStyle]}
            accessibilityRole="text"
            accessibilityLabel={`${streak} günlük seri`}
          >
            <Text
              style={styles.streakChipText}
              accessibilityElementsHidden
              importantForAccessibility="no"
            >
              🔥 {streak}
            </Text>
          </Animated.View>
        ) : null}
      </View>

      <Animated.ScrollView
        contentContainerStyle={styles.scroll}
        showsVerticalScrollIndicator={false}
        onScroll={onScroll}
        scrollEventThrottle={16}
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
          // Outer wrapper applies the 3D press tilt + persistent halo.
          // We split into two Animated.View layers so the tilt transform
          // doesn't conflict with the halo's shadow animation (combining
          // perspective + animated shadowOpacity on a single view causes
          // iOS to flicker on first press).
          <Animated.View style={heroPressStyle}>
            <Animated.View
              entering={FadeInDown.duration(420)}
              style={[styles.heroFrame, heroGlowStyle]}
            >
              {/* Premium inner highlight — 1px üst kenarda ışık yansıması.
                  Apple buton bevel'ı tarzı, tactile depth. */}
              <View
                style={styles.heroInnerHighlight}
                pointerEvents="none"
              />
              <View style={styles.heroBackdrop} pointerEvents="none">
                {/* Parallax: bottom pink waveform scrolls -30px over 200px */}
                <Animated.View
                  style={[
                    styles.heroBackdropLayerBottom,
                    heroBackdropBottomStyle,
                  ]}
                >
                  <VoiceWaveform
                    bars={14}
                    barWidth={3}
                    gap={8}
                    height={92}
                    color={tokens.brand.primary}
                    accessibilityLabel=""
                  />
                </Animated.View>
                {/* Top cyan moves slower (-16px) — depth layering */}
                <Animated.View
                  style={[
                    styles.heroBackdropLayerTop,
                    heroBackdropTopStyle,
                  ]}
                >
                  <VoiceWaveform
                    bars={10}
                    barWidth={3}
                    gap={12}
                    height={58}
                    color={tokens.brand.tertiary}
                    accessibilityLabel=""
                  />
                </Animated.View>
              </View>
              <Pressable
                onPress={() => {
                  // BUG-5 FIX: guard null planFirstScene
                  const scene = state.planFirstScene;
                  if (scene) {
                    pushRoute(router, `/scenario/${scene.lessonId}`);
                  } else {
                    pushRoute(router, "/home");
                  }
                }}
                onPressIn={onHeroPressIn}
                onPressOut={onHeroPressOut}
                style={styles.heroPressable}
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
        ) : showEmptyState ? (
          // 2026-05-24 — Empty state. Plan hazır değil, "yeni başladın" hissi.
          // Tek CTA: Akış'ı aç. Sertbir hata göstermeyiz; nazikçe yönlendiririz.
          <Animated.View
            entering={FadeInDown.duration(420)}
            style={styles.emptyState}
          >
            <Text style={styles.emptyTitle}>Hadi başlayalım</Text>
            <Text style={styles.emptySub}>
              Henüz bir plan yok. Akış'tan ilk sahneni seç, gerisi
              kendiliğinden gelir.
            </Text>
            <Pressable
              onPress={() => pushRoute(router, "/home")}
              style={({ pressed }) => [
                styles.emptyCta,
                pressed && styles.pressed,
              ]}
              accessibilityRole="button"
              accessibilityLabel="Akış'ı aç"
            >
              <Text style={styles.emptyCtaText}>Akış'ı aç</Text>
            </Pressable>
          </Animated.View>
        ) : null}

        {/* Tek satır banner — priority queue (streak risk > erozyon) */}
        {/* Banner stagger: hero ~420ms → banners drift in 120/180/240/300/360. */}
        {state.streakAtRisk ? (
          <Animated.View entering={FadeInDown.delay(120).duration(360)}>
            <View style={styles.warningBanner}>
              <Icon name="streak" size={14} color={tokens.semantic.warning} />
              <Text style={styles.warningText}>
                Streak risk altında — 1 sahne kurtarır
              </Text>
            </View>
          </Animated.View>
        ) : state.erosionDecay > 0 ? (
          <Animated.View entering={FadeInDown.delay(120).duration(360)}>
            <View style={styles.erosionBanner}>
              <View style={styles.erosionLabelRow}>
                <Icon
                  name="warning"
                  size={12}
                  color={tokens.semantic.error}
                />
                <Text style={styles.erosionLabel}>CEFR İLERLEMEN GERİLİYOR</Text>
              </View>
              <Text style={styles.erosionText}>
                {state.erosionDroppedLevel
                  ? `${state.erosionDaysIdle} gün ara — ${state.erosionDroppedLevel}'e düştün.`
                  : `${state.erosionDaysIdle} gün ara — −${state.erosionDecay.toFixed(2)} aşındı.`}
              </Text>
            </View>
          </Animated.View>
        ) : null}

        {/* 2×2 ACTION GRID — 4 hızlı eylem her zaman görünür.
            Önceki "banner cap 2" 3 ayrı dikey kart üretiyordu (vocab/surprise/
            daily) + 1 diary banner. Şimdi grid: kullanıcı her zaman 4 seçenek
            görür, ilgili olan rozet (sayı / ✓) gösterir. Daha az dikey scroll,
            daha okunaklı hierarchy. */}
        <Animated.View
          entering={FadeInDown.delay(180).duration(360)}
          style={styles.tileGrid}
        >
          <Pressable
            onPress={() => pushRoute(router, "/review")}
            style={({ pressed }) => [styles.tile, pressed && styles.pressed]}
            accessibilityRole="button"
            accessibilityLabel={
              state.vocabDue > 0
                ? `Kelime tekrarı: ${state.vocabDue} kelime`
                : "Kelime tekrarı"
            }
          >
            <View style={styles.tileInnerHighlight} pointerEvents="none" />
            <View
              style={[
                styles.tileGlowBlob,
                { backgroundColor: tokens.brand.primary },
              ]}
              pointerEvents="none"
            />
            <View style={styles.tileIconRow}>
              <View
                style={[
                  styles.tileIconWrap,
                  { backgroundColor: tokens.brand.primarySoft },
                ]}
              >
                <Icon name="vocab" size={22} color={tokens.brand.primary} />
              </View>
              {vocabBadge ? (
                <View style={styles.tileBadge}>
                  <Text style={styles.tileBadgeText}>{vocabBadge}</Text>
                </View>
              ) : null}
            </View>
            <View>
              <Text style={styles.tileEyebrow}>PRATİK</Text>
              <Text style={styles.tileTitle}>Kelime</Text>
            </View>
          </Pressable>

          <Pressable
            onPress={async () => {
              if (state.surprise) {
                const id = state.surprise.lessonId;
                await consumeSurprise().catch(() => {});
                pushRoute(router, `/scenario/${id}`);
              } else {
                // Sürpriz hazır değil — kullanıcıyı Akış'a yönlendir.
                pushRoute(router, "/home");
              }
            }}
            style={({ pressed }) => [styles.tile, pressed && styles.pressed]}
            accessibilityRole="button"
            accessibilityLabel={
              state.surprise
                ? `Sürpriz sahne: ${state.surprise.title.replace(/\n/g, " ")}`
                : "Sürpriz — Akış'tan keşfet"
            }
          >
            <View style={styles.tileInnerHighlight} pointerEvents="none" />
            <View
              style={[
                styles.tileGlowBlob,
                { backgroundColor: tokens.brand.tertiary },
              ]}
              pointerEvents="none"
            />
            <View style={styles.tileIconRow}>
              <View
                style={[
                  styles.tileIconWrap,
                  { backgroundColor: tokens.brand.tertiarySoft },
                ]}
              >
                <Icon name="surprise" size={22} color={tokens.brand.tertiary} />
              </View>
              {surpriseBadge ? (
                <View style={[styles.tileBadge, styles.tileBadgeCyan]}>
                  <Text style={styles.tileBadgeText}>{surpriseBadge}</Text>
                </View>
              ) : null}
            </View>
            <View>
              <Text style={styles.tileEyebrow}>KEŞFET</Text>
              <Text style={styles.tileTitle}>Sürpriz</Text>
            </View>
          </Pressable>

          <Pressable
            onPress={() => {
              if (state.daily) {
                pushRoute(router, `/scenario/${state.daily.lessonId}`);
              } else {
                pushRoute(router, "/home");
              }
            }}
            style={({ pressed }) => [styles.tile, pressed && styles.pressed]}
            accessibilityRole="button"
            accessibilityLabel={
              state.daily
                ? `Bugün için: ${state.daily.title.replace(/\n/g, " ")}`
                : "Günün özel sahnesi"
            }
          >
            <View style={styles.tileInnerHighlight} pointerEvents="none" />
            <View
              style={[
                styles.tileGlowBlob,
                { backgroundColor: tokens.brand.tertiary },
              ]}
              pointerEvents="none"
            />
            <View style={styles.tileIconRow}>
              <View
                style={[
                  styles.tileIconWrap,
                  { backgroundColor: tokens.brand.tertiarySoft },
                ]}
              >
                <Icon
                  name={state.dailyCompleted ? "checkmark" : "target"}
                  size={22}
                  color={tokens.brand.tertiary}
                />
              </View>
              {dailyBadge ? (
                <View style={[styles.tileBadge, styles.tileBadgeCyan]}>
                  <Text style={styles.tileBadgeText}>{dailyBadge}</Text>
                </View>
              ) : null}
            </View>
            <View>
              <Text style={styles.tileEyebrow}>ÖZEL</Text>
              <Text style={styles.tileTitle}>Günün Özeli</Text>
            </View>
          </Pressable>

          <Pressable
            onPress={() => pushRoute(router, "/diary")}
            style={({ pressed }) => [styles.tile, pressed && styles.pressed]}
            accessibilityRole="button"
            accessibilityLabel={
              state.diaryWrittenToday
                ? "Bugünün günlük cümlesi yazıldı"
                : "Bugünün cümlesini yazmak için günlüğü aç"
            }
          >
            <View style={styles.tileInnerHighlight} pointerEvents="none" />
            <View
              style={[
                styles.tileGlowBlob,
                {
                  backgroundColor: state.diaryWrittenToday
                    ? tokens.brand.tertiary
                    : tokens.text.secondary,
                },
              ]}
              pointerEvents="none"
            />
            <View style={styles.tileIconRow}>
              <View
                style={[
                  styles.tileIconWrap,
                  { backgroundColor: "rgba(255,255,255,0.06)" },
                ]}
              >
                <Icon
                  name={state.diaryWrittenToday ? "checkmark" : "diary"}
                  size={22}
                  color={
                    state.diaryWrittenToday
                      ? tokens.brand.tertiary
                      : tokens.text.secondary
                  }
                />
              </View>
              {diaryBadge ? (
                <View style={[styles.tileBadge, styles.tileBadgeCyan]}>
                  <Text style={styles.tileBadgeText}>{diaryBadge}</Text>
                </View>
              ) : null}
            </View>
            <View>
              <Text style={styles.tileEyebrow}>ARŞİV</Text>
              <Text style={styles.tileTitle}>Günlük</Text>
            </View>
          </Pressable>
        </Animated.View>

        {/* HAFTALIK İLERLEME — 7 nokta, bu hafta kaç gün pratik yapıldı.
            longest_streak'ten değil, son 7 günün her birinde sahne tamamlandı
            mı bilgisinden gelir. Local profile.current_streak fallback olarak
            kullanılır (gerçek günlük completion verisi yoksa). */}
        <Animated.View
          entering={FadeInDown.delay(280).duration(360)}
          style={styles.weeklyCard}
        >
          <View style={styles.weeklyHeader}>
            <Text style={styles.weeklyLabel}>HAFTALIK İLERLEME</Text>
            <Text style={styles.weeklyCount}>
              {Math.min(streak, 7)} / 7 Gün
            </Text>
          </View>
          <View style={styles.weeklyDotsRow}>
            {Array.from({ length: 7 }).map((_, i) => {
              const filled = i < Math.min(streak, 7);
              return (
                <View
                  key={i}
                  style={[
                    styles.weeklyDot,
                    filled ? styles.weeklyDotFilled : styles.weeklyDotEmpty,
                  ]}
                />
              );
            })}
          </View>
        </Animated.View>

        {/* "Akış'ta keşfet" CTA — kullanıcı plan dışı bir şey istiyorsa */}
        <Animated.View entering={FadeInDown.delay(380).duration(360)}>
          <Pressable
            onPress={() => pushRoute(router, "/home")}
            style={({ pressed }) => [
              styles.exploreCard,
              pressed && styles.pressed,
            ]}
            accessibilityRole="button"
            accessibilityLabel="Akıştan rastgele sahneler keşfet"
          >
            <View style={styles.exploreIconCircle}>
              <Icon name="explore" size={22} color={tokens.brand.primary} />
            </View>
            <View style={styles.exploreText}>
              <Text style={styles.exploreTitle}>Akış'tan keşfet</Text>
              <Text style={styles.exploreSub}>
                Plan dışı {SCENE_COUNT_DISPLAY} sahneyi kaydırarak gez.
              </Text>
            </View>
            <Icon name="chevronRight" size={20} color={tokens.text.tertiary} />
          </Pressable>
        </Animated.View>

        {/* Rewarded ad CTA — sadece free kullanıcı + aktif rewarded grant yok.
            Aktif grant varsa "Bugün Pro açık ✓" satırı göster (CTA değil,
            durum bildirimi). Premium (RC) kullanıcıya hiçbir şey gösterme. */}
        {state.rewardedActive && state.rewardedExpiresAt ? (
          <Animated.View entering={FadeInDown.delay(440).duration(360)}>
            <View style={styles.rewardedActive}>
              <Icon
                name="checkmark"
                size={16}
                color={tokens.brand.tertiary}
              />
              <Text style={styles.rewardedActiveText}>
                Bugün Pro açık · {formatTimeUntil(state.rewardedExpiresAt)}{" "}
                kaldı
              </Text>
            </View>
          </Animated.View>
        ) : !state.isPremiumActive ? (
          <Animated.View entering={FadeInDown.delay(440).duration(360)}>
            <Pressable
              onPress={() => void handleWatchRewardedAd()}
              disabled={rewardedLoading}
              style={({ pressed }) => [
                styles.rewardedCta,
                pressed && styles.pressed,
                rewardedLoading && styles.rewardedCtaLoading,
              ]}
              accessibilityRole="button"
              accessibilityLabel="Reklam izle, bugün için Pro aç"
            >
              <View style={styles.rewardedIconCircle}>
                <Icon name="play" size={20} color={tokens.brand.tertiary} />
              </View>
              <View style={styles.rewardedText}>
                <Text style={styles.rewardedTitle}>
                  {rewardedLoading ? "Hazırlanıyor..." : "Reklamı izle, Pro aç"}
                </Text>
                <Text style={styles.rewardedSub}>
                  30 sn reklam · 30 dk reklamsız + sınırsız sahne
                </Text>
              </View>
              <Icon name="chevronRight" size={20} color={tokens.text.tertiary} />
            </Pressable>
          </Animated.View>
        ) : null}
      </Animated.ScrollView>

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
  // 2026-05-24 — Renk diet: streak chip pembe → cyan. Pembe artık sadece
  // "şu anki tek aksiyon" (CTA) için ayrılıyor. Streak başarı/devamlılık
  // göstergesi olduğu için cyan (success accent) daha doğru semantik.
  streakChip: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: tokens.radius.full,
    backgroundColor: tokens.brand.tertiarySoft,
    borderWidth: 1,
    borderColor: tokens.brand.tertiary,
  },
  streakChipText: {
    fontSize: 13,
    fontWeight: tokens.weight.extrabold,
    color: tokens.brand.tertiary,
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
  // 2026-05-23 premium pass:
  // - borderWidth 2 → 1.5 (Apple HIG: hairline borders feel premium)
  // - borderColor primary → softer primary mix (60% opacity equivalent)
  // - shadowOffset 0,0 → 0,4 (subtle drop = "lifted" feel, Apple Music card)
  // - shadowOpacity 0.55 → 0.45 (less aggressive)
  // - shadowRadius 22 → 18 (tighter, focused glow)
  //
  // The frame owns: backgroundColor, borderRadius, border, shadow (animated),
  // and overflow:hidden so the backdrop clips to the rounded corners.
  // The Pressable inside is transparent and owns padding + content layout.
  heroFrame: {
    borderRadius: tokens.radius.lg,
    backgroundColor: tokens.brand.primarySoft,
    borderWidth: 1.5,
    borderColor: tokens.brand.primary,
    shadowColor: tokens.brand.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.45,
    shadowRadius: 18,
    elevation: 10,
    overflow: "hidden",
    position: "relative",
  },
  // Inner highlight — kart üst kenarında 1px semi-transparent beyaz hat.
  // iOS button bevel hissi, kartın "yukarıdan ışık alıyor" izlenimi.
  // Reklamı yok ama tactile premium fark yaratır (Linear / Notion'dan).
  heroInnerHighlight: {
    position: "absolute",
    top: 0,
    left: 1,
    right: 1,
    height: 1,
    backgroundColor: "rgba(255, 255, 255, 0.18)",
    borderTopLeftRadius: tokens.radius.lg,
    borderTopRightRadius: tokens.radius.lg,
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
    // Premium: cyan halo + lifted drop shadow + tighter radius.
    // shadowOffset 0,4 ile "havada lebileyen" hissi.
    shadowColor: tokens.brand.tertiary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.35,
    shadowRadius: 14,
    elevation: 8,
    overflow: "hidden",
    position: "relative",
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
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: tokens.radius.full,
    backgroundColor: tokens.semantic.warningContainer,
    borderWidth: 1,
    borderColor: tokens.semantic.warning,
    alignSelf: "center",
  },
  // Banner label row — icon + text combo used across surprise/daily/vocab/diary
  bannerLabelRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  erosionLabelRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    marginBottom: 4,
  },
  // Explore card icon circle — replaces standalone emoji
  exploreIconCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: tokens.brand.primarySoft,
    borderWidth: 1,
    borderColor: tokens.brand.primary,
    alignItems: "center",
    justifyContent: "center",
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
  // 2026-05-24 — Renk diet: aktif state'in pembe sol stripe'ı kaldırıldı.
  // Pembe artık sadece Plan Hero için ayrılıyor (primary CTA tek odak). Diary
  // nudge'da pembe sadece ikonda; kart kendisi neutral surface.
  diaryNudge: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: tokens.radius.lg,
    backgroundColor: tokens.bg.surfaceContainer,
    borderWidth: 1,
    borderColor: tokens.border.outlineVariant,
    gap: 2,
  },
  diaryNudgeLabel: {
    fontSize: 10,
    fontWeight: tokens.weight.extrabold,
    color: tokens.text.tertiary,
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

  // 2026-05-25 — 2×2 action grid stilleri (modernize redesign).
  // Eski vocab/surprise/daily/diary banner stilleri korunuyor (geri dönüş
  // gerekirse erişilebilir), ama yeni tasarımda kullanılmıyor.
  tileGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
    marginTop: 4,
  },
  // 2026-05-25 — 3D depth pass. Eski flat tile → multi-layer:
  //   • SurfaceContainerHigh (daha açık) backgroundColor
  //   • Daha kalın gölge + offset (lifted card)
  //   • Inner highlight top edge (Apple HIG bevel)
  //   • Inner radial-style accent blob (alt sağ köşede color tint)
  tile: {
    flexBasis: "48%",
    flexGrow: 1,
    aspectRatio: 1,
    backgroundColor: tokens.bg.surfaceContainerHigh,
    borderWidth: 1,
    borderColor: tokens.border.outlineVariant,
    borderRadius: 22,
    padding: 16,
    justifyContent: "space-between",
    overflow: "hidden",
    position: "relative",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.35,
    shadowRadius: 12,
    elevation: 8,
  },
  // Inner highlight — kart üst kenarında 1px parlak hat (bevel hissi).
  tileInnerHighlight: {
    position: "absolute",
    top: 0,
    left: 1,
    right: 1,
    height: 1,
    backgroundColor: "rgba(255,255,255,0.10)",
    borderTopLeftRadius: 22,
    borderTopRightRadius: 22,
  },
  // Alt-sağ köşede tint glow (radial yok RN'de — blurred large circle ile fake).
  tileGlowBlob: {
    position: "absolute",
    bottom: -28,
    right: -28,
    width: 80,
    height: 80,
    borderRadius: 40,
    opacity: 0.12,
  },
  tileIconRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  tileIconWrap: {
    width: 48,
    height: 48,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
    // Icon container'a da hafif shadow — "ikon yüzeyden hafif yukarıda" hissi.
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 3,
  },
  tileBadge: {
    minWidth: 22,
    height: 22,
    borderRadius: 11,
    paddingHorizontal: 6,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: tokens.brand.primary,
  },
  tileBadgeCyan: {
    backgroundColor: tokens.brand.tertiary,
  },
  tileBadgeText: {
    fontSize: 11,
    fontWeight: tokens.weight.extrabold,
    color: tokens.text.onPrimary,
    letterSpacing: 0.2,
  },
  tileEyebrow: {
    fontSize: 10,
    fontWeight: tokens.weight.extrabold,
    color: tokens.text.tertiary,
    letterSpacing: 1.2,
    marginBottom: 4,
  },
  tileTitle: {
    fontSize: 16,
    fontWeight: tokens.weight.bold,
    color: tokens.text.primary,
    letterSpacing: -0.2,
    fontFamily: tokens.font.display,
  },

  // Haftalık ilerleme widget'ı — 7 nokta + depth pass.
  weeklyCard: {
    backgroundColor: tokens.bg.surfaceContainerHigh,
    borderWidth: 1,
    borderColor: tokens.border.outlineVariant,
    borderRadius: 22,
    padding: 18,
    gap: 14,
    marginTop: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.30,
    shadowRadius: 10,
    elevation: 6,
    overflow: "hidden",
    position: "relative",
  },
  weeklyHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  weeklyLabel: {
    fontSize: 11,
    fontWeight: tokens.weight.extrabold,
    color: tokens.text.primary,
    letterSpacing: 1.5,
  },
  weeklyCount: {
    fontSize: 13,
    color: tokens.text.tertiary,
    fontWeight: tokens.weight.medium,
  },
  weeklyDotsRow: {
    flexDirection: "row",
    gap: 6,
  },
  weeklyDot: {
    flex: 1,
    height: 6,
    borderRadius: 3,
  },
  weeklyDotFilled: {
    backgroundColor: tokens.brand.tertiary,
    shadowColor: tokens.brand.tertiary,
    shadowOpacity: 0.5,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 0 },
  },
  weeklyDotEmpty: {
    backgroundColor: tokens.border.light,
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

  // 2026-05-24 — Rewarded ad CTA + active indicator
  rewardedCta: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderRadius: tokens.radius.lg,
    backgroundColor: tokens.bg.surfaceContainer,
    borderWidth: 1,
    borderColor: tokens.brand.tertiarySoft,
    gap: 14,
    marginTop: 8,
  },
  rewardedCtaLoading: {
    opacity: 0.6,
  },
  rewardedIconCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: tokens.brand.tertiarySoft,
    borderWidth: 1,
    borderColor: tokens.brand.tertiary,
    alignItems: "center",
    justifyContent: "center",
  },
  rewardedText: { flex: 1, gap: 2 },
  rewardedTitle: {
    fontSize: 15,
    color: tokens.text.primary,
    fontFamily: tokens.font.display,
    letterSpacing: -0.2,
  },
  rewardedSub: {
    fontSize: 12,
    color: tokens.text.tertiary,
    fontFamily: tokens.font.sans,
    lineHeight: 16,
  },
  rewardedActive: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: tokens.radius.full,
    backgroundColor: tokens.brand.tertiarySoft,
    borderWidth: 1,
    borderColor: tokens.brand.tertiary,
    alignSelf: "center",
    marginTop: 8,
  },
  rewardedActiveText: {
    fontSize: 12,
    color: tokens.brand.tertiary,
    fontFamily: tokens.font.sansBold,
    letterSpacing: 0.3,
  },

  // 2026-05-24 — Empty state (plan yok, done değil — yeni kullanıcı/hata).
  emptyState: {
    paddingVertical: 32,
    paddingHorizontal: 22,
    borderRadius: tokens.radius.lg,
    backgroundColor: tokens.bg.surfaceContainer,
    borderWidth: 1,
    borderColor: tokens.brand.primarySoft,
    alignItems: "center",
    gap: 10,
  },
  emptyTitle: {
    fontSize: 22,
    color: tokens.text.primary,
    fontFamily: tokens.font.display,
    letterSpacing: -0.4,
  },
  emptySub: {
    fontSize: 14,
    color: tokens.text.secondary,
    textAlign: "center",
    lineHeight: 20,
    fontFamily: tokens.font.sans,
    marginBottom: 8,
  },
  emptyCta: {
    paddingVertical: 14,
    paddingHorizontal: 28,
    borderRadius: tokens.radius.full,
    backgroundColor: tokens.brand.primary,
    shadowColor: tokens.brand.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 10,
    elevation: 4,
  },
  emptyCtaText: {
    fontSize: 15,
    color: tokens.brand.onPrimary,
    fontFamily: tokens.font.sansExtra,
    letterSpacing: 0.3,
  },
});
