// Scenario runner — 4 phases: SETUP → DRILL (opt) → SCENE → VERDICT.
// Replaces the linear 7-exercise lesson model with a pedagogical arc:
// Presentation → Controlled Practice → Production → Feedback.
//
// Premium polish (Reanimated 3.17):
//   - PhaseShell wraps each phase render and cross-fades on phase change
//     (180ms fade-out, 220ms fade-in, 8px translateY).
//   - PhaseDot animates between pending/active/done states smoothly.
//   - SETUP: vocab hero stacks in with a spring entrance on each step;
//     "Hazırım" CTA breathes a soft pink halo until the user taps it.
//   - SCENE: first time the user enters the scene phase, a brief overlay
//     fades in ("Konuşma başlıyor — hazırsan başla"), auto-dismissing at
//     1200ms or on tap.
//   - VERDICT: subtle "level achieved" pulse on the score card when
//     score ≥ 75; emoji confetti rains down when score ≥ 90.
//   - Achievement unlocks render as a stacked toast queue; a "+N" pill
//     hints at how many more milestones are queued behind the active one.
//   - "← Geri" prompts for confirmation in DRILL/SCENE only — SETUP is
//     considered safe to abandon (nothing persists until the verdict).

import { useEffect, useMemo, useRef, useState } from "react";
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Share,
} from "react-native";
import Animated, {
  Easing,
  cancelAnimation,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withRepeat,
  withSequence,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import { ThemedStatusBar } from "../../components/ThemedStatusBar";
import { useLocalSearchParams, useRouter } from "expo-router";
import { pushRoute, replaceRoute } from "../../lib/routes";
import { SafeAreaView } from "react-native-safe-area-context";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { Button } from "../../components/Button";
import { SpeakerButton } from "../../components/SpeakerButton";
import { RoleplayChat } from "../../components/exercises/RoleplayChat";
import { FillBlank } from "../../components/exercises/FillBlank";
import { WordOrder } from "../../components/exercises/WordOrder";
import { SpotMistake } from "../../components/exercises/SpotMistake";
import { Translate } from "../../components/exercises/Translate";
import { PronouncePhrase } from "../../components/exercises/PronouncePhrase";
import { SpeechShadowing } from "../../components/exercises/SpeechShadowing";
import { ListenAndTranscribe } from "../../components/exercises/ListenAndTranscribe";
// 2026-05-24 — Content expansion exercise components (Agent A).
import { SentencePattern } from "../../components/exercises/SentencePattern";
import { DialogueGap } from "../../components/exercises/DialogueGap";
import { ListenRespond } from "../../components/exercises/ListenRespond";
import { ThinkingTrap } from "../../components/exercises/ThinkingTrap";
import { RecallQuiz } from "../../components/exercises/RecallQuiz";
import { MultipleChoice } from "../../components/exercises/MultipleChoice";
import { AchievementToast } from "../../components/AchievementToast";
import { StreakMilestoneModal } from "../../components/StreakMilestoneModal";
import {
  recordSceneOpen,
  recordSceneComplete,
} from "../../lib/notifications";

import { trackEvent } from "../../lib/analytics";
import {
  getScenario,
  type Scenario,
  type SetupPhrase,
} from "../../lib/scenario";
import {
  recordCefrProgress,
  getCefrLevel,
  filterSetupByLevel,
  type CefrProgressDelta,
  type CefrLevel,
} from "../../lib/cefr-level";
import { ShareCard } from "../../components/ShareCard";
import { captureRef } from "react-native-view-shot";
import * as Sharing from "expo-sharing";
import { completeLesson } from "../../lib/srs";
import {
  getNextInPlan,
  incrementPlanProgress,
} from "../../lib/daily-plan";
import {
  shouldGatePaywall,
  incrementFreeTier,
} from "../../lib/free-tier";
import { recordSceneCompletion } from "../../lib/scene-history";
import { recordVocabFromScene } from "../../lib/vocab-book";
import {
  recordInteraction,
  getRelationship,
  tierFor,
  memoryPromptForRelationship,
  type NpcRelationship,
} from "../../lib/npc-relationships";
import { nameAndBucketForNpc } from "../../lib/npc-names";
import type { SceneMode } from "../../data/scenes";
import {
  bumpModeFluency,
  getLocalProfile,
} from "../../lib/local-progress";
import type { RoleplayMode } from "../../lib/roleplay-progression";
import {
  getRoleplayMode,
  getRoleplayMasteryState,
  recordRoleplayMastery,
} from "../../lib/roleplay-mastery";
import { recordLessonCompletion } from "../../lib/daily-quests";
import { checkUnlocksAfterLesson } from "../../lib/achievements";
import { speak } from "../../lib/tts";
import { modelAnswersForTurn } from "../../lib/roleplay-model";
import { recordProgressComparison } from "../../lib/progress-comparison";
import { hapticImpact, hapticSuccess } from "../../lib/feedback";
import { markHomeTutorialSeen } from "../../lib/tutorial-state";
import { allScenarios } from "../../lib/scenario";
import { tokens } from "../../theme";
import type { AchievementDef } from "../../lib/achievements";
import type { ExerciseResult, RoleplayMistake } from "../../lib/engine";
import {
  assessRoleplayScore,
  roleplayAssessmentLabel,
} from "../../lib/roleplay-assessment";

// 2026-05-24 — Content expansion (Phase 1C, Agent C). 4 → 7 phase.
// Yeni faz veri yoksa (eski lesson) getNextPhase() o fazı atlar; flow eskisi
// gibi setup → drill → scene → verdict olarak akar.
type Phase =
  | "setup"
  | "setup-extra"
  | "drill"
  | "pre-scene"
  | "scene"
  | "recall"
  | "verdict";

// Display name persisted by onboarding under `lafla.displayName`. Used by
// the scene phase (NPC opener personalization) and the verdict screen
// (Turkish verdict copy injection).
const K_DISPLAY_NAME = "lafla.displayName";

// Sanitize a display name for safe inline rendering. Strips control chars,
// collapses whitespace, trims, drops quote chars, and visually truncates
// long names. Casing is preserved verbatim. The stored value is unchanged.
// 2026-05-25 (B-SCN-1) — regex `/[ -]/g` aslında SPACE-DASH printable range
// match ediyordu, kontrol karakterleri DEĞİL. Doğrusu \x00-\x1F + DEL (0x7F).
function sanitizeName(raw: string | null | undefined): string {
  if (!raw) return "";
  // eslint-disable-next-line no-control-regex
  let cleaned = raw.replace(/[\x00-\x1F\x7F]/g, "");
  cleaned = cleaned.replace(/["`]/g, "");
  cleaned = cleaned.replace(/\s+/g, " ").trim();
  if (cleaned.length > 30) cleaned = cleaned.slice(0, 28) + "…";
  return cleaned;
}

function findNextScenario(skillId: string, currentId: string): string | null {
  const inSkill = allScenarios()
    .filter((s) => s.skill_id === skillId)
    .sort((a, b) => a.id.localeCompare(b.id));
  const idx = inSkill.findIndex((s) => s.id === currentId);
  if (idx === -1) return null;
  return inSkill[idx + 1]?.id ?? null;
}

// 2026-05-24 — Content expansion (Phase 1C, Agent C).
// Phase skip helpers — yeni phase'lerin veri kontrolü tek noktada.
// Eski lesson dosyaları setupExtra/preScene için boş array, recallQuiz için
// null döndürür (lib/scenario.ts garantisi). Bu helper'lar o gracefully
// degradation'ı sağlar: veri yoksa o phase atlanır, eski 4-fazlı akış korunur.
function hasSetup(scenario: Scenario): boolean {
  return (scenario.setup?.length ?? 0) > 0;
}
function hasSetupExtra(scenario: Scenario): boolean {
  return (scenario.setupExtra?.length ?? 0) > 0;
}
function hasDrill(scenario: Scenario): boolean {
  return (scenario.warmups?.length ?? 0) > 0;
}
function hasPreScene(scenario: Scenario): boolean {
  return (scenario.preScene?.length ?? 0) > 0;
}
function hasRecall(scenario: Scenario): boolean {
  return scenario.recallQuiz !== null && scenario.recallQuiz !== undefined;
}

/**
 * Bir phase tamamlandığında bir sonraki phase'i hesaplar. Her phase'in veri
 * array'i boş veya null ise o faz atlanır. Bu, eski lesson'ların (yeni
 * egzersiz veri içermeyen) hiç değişmeden mevcut akışta çalışmasını sağlar.
 *
 * Akış: setup → setup-extra → drill → pre-scene → scene → recall → verdict
 */
function getNextPhase(
  scenario: Scenario,
  current: Phase,
): Phase | "complete" {
  switch (current) {
    case "setup":
      if (hasSetupExtra(scenario)) return "setup-extra";
      if (hasDrill(scenario)) return "drill";
      if (hasPreScene(scenario)) return "pre-scene";
      return "scene";
    case "setup-extra":
      if (hasDrill(scenario)) return "drill";
      if (hasPreScene(scenario)) return "pre-scene";
      return "scene";
    case "drill":
      if (hasPreScene(scenario)) return "pre-scene";
      return "scene";
    case "pre-scene":
      return "scene";
    case "scene":
      if (hasRecall(scenario)) return "recall";
      return "verdict";
    case "recall":
      return "verdict";
    case "verdict":
      return "complete";
  }
}

export default function ScenarioScreen() {
  const { id, intro } = useLocalSearchParams<{
    id: string;
    intro?: string;
  }>();
  const router = useRouter();
  const scenario = id ? getScenario(id) : null;
  // ?intro=true onboarding sonrası ilk pratikten gelir. Tamamlanınca işaretlenir
  // ve kullanıcı satış kesintisi olmadan Bugün ekranına döner.
  const isIntro = intro === "true";
  // 2026-05-25 (B-PAY-9) — Paywall'a tek seferlik navigation; quota guard
  // ile hard-mode click gibi paralel tetikleyicilerin duplicate router
  // replace etmesini önler.
  const paywallNavRef = useRef(false);
  const scenarioStartedAtRef = useRef(Date.now());

  const [phase, setPhase] = useState<Phase>("setup");
  const [setupIdx, setSetupIdx] = useState(0);
  // 2026-05-25 — Phase 5D adaptive setup. Lessons pool cap 25 vocab (lesson-
  // bazlı gerçek boyut değişir; filterSetupByLevel user level'a göre comfort-
  // zone +1 band'lardan en fazla 12 vocab seçer). Hydrate edilene kadar
  // fallback olarak scenario.setup'ın ilk 12'sini gösteririz (mount blink
  // riski yok — getCefrLevel <50ms).
  const [filteredSetup, setFilteredSetup] = useState<SetupPhrase[]>(() =>
    scenario ? filterSetupByLevel(scenario.setup, null) : [],
  );
  // 2026-05-24 — Content expansion (Phase 1C, Agent C). Yeni faz indeksleri.
  // setup-extra phase'inde scenario.setupExtra[setupExtraIdx] render edilir.
  // pre-scene phase'inde scenario.preScene[preSceneIdx] render edilir.
  // recall phase'inde scenario.recallQuiz (tek obje, idx yok) render edilir.
  const [setupExtraIdx, setSetupExtraIdx] = useState(0);
  const [drillIdx, setDrillIdx] = useState(0);
  const [preSceneIdx, setPreSceneIdx] = useState(0);
  const [sceneResult, setSceneResult] = useState<ExerciseResult | null>(null);
  const [roleplayMode, setRoleplayMode] = useState<RoleplayMode>("multi-choice");
  // Personalization: read once on mount, sanitized for inline injection.
  // Empty string = no name set; both RoleplayChat and VerdictView treat ""
  // as "render the un-personalized version" so this is safe to read late.
  const [displayName, setDisplayName] = useState<string>("");
  // 2026-05-21 — user's current CEFR level, paired with scenario.cefrLevel
  // (scene anchor) to drive RoleplayChat's stretch/matched/review adaptation.
  // Null until hydrated or for users who haven't completed onboarding's
  // level step — RoleplayChat treats null as "matched mode" (no delta).
  const [userLevel, setUserLevel] = useState<CefrLevel | null>(null);
  // 2026-05-21 — Daily Plan auto-advance. Bu sahne kullanıcının bugünkü
  // planındaysa nextInPlan bir sonraki Scene objesi, değilse null. Verdict
  // ekranı "Sıradaki sahne 3s" countdown'unu burada gözükür.
  const [nextInPlanScene, setNextInPlanScene] = useState<
    import("../../data/scenes").Scene | null
  >(null);
  // 2026-05-21 — Hard mode toggle (Premium). Setup phase'de gözükür,
  // sahne başlamadan kullanıcı seçer. Free user toggle'a basınca paywall'a.
  const [hardMode, setHardMode] = useState(false);
  const [isPremiumState, setIsPremiumState] = useState<boolean | null>(null);
  // 2026-05-23 — Audit fix #3: NPC ilişki banner sahne içinde.
  // recordInteraction sahne bitiminde counter artırıyor, AMA sahne öncesi
  // tier'ı UI'da göstermiyorduk — feature "shipped but invisible" idi.
  // Şimdi mount'ta getRelationship çek, RoleplayChat üstünde subtle chip
  // ile göster: "Mia · Arkadaş · 5. sahnen".
  const [npcRel, setNpcRel] = useState<NpcRelationship | null>(null);
  useEffect(() => {
    (async () => {
      // eslint-disable-next-line @typescript-eslint/no-require-imports
      const iap = require("../../lib/iap") as {
        isPremium: () => Promise<boolean>;
      };
      const p = await iap.isPremium().catch(() => false);
      setIsPremiumState(p);
    })();
  }, []);
  // First-time scene overlay — shown once per scenario load, on initial entry
  // to the scene phase. Auto-dismisses after 1200ms or on tap.
  const [showSceneIntro, setShowSceneIntro] = useState(false);
  const sceneIntroShownRef = useRef(false);

  // Hydrate the user's display name + CEFR level once on mount. Single
  // effect so the scenario starts with the personalization context it needs;
  // both reads are best-effort (empty string / null on failure).
  useEffect(() => {
    (async () => {
      try {
        const raw = await AsyncStorage.getItem(K_DISPLAY_NAME);
        setDisplayName(sanitizeName(raw));
      } catch {
        setDisplayName("");
      }
      // 2026-05-25 — Phase 5D: userLevel resolve edildikten hemen sonra
      // adaptive setup filter'ı uygula. Level null ise filterSetupByLevel
      // ilk 12 vocab'ı döner; partial-retag durumunda untagged vocab her
      // zaman dahil edilir → eski lesson davranışı korunur.
      let resolvedLevel: CefrLevel | null = null;
      try {
        resolvedLevel = await getCefrLevel();
      } catch {
        resolvedLevel = null;
      }
      setUserLevel(resolvedLevel);
      if (scenario) {
        setFilteredSetup(filterSetupByLevel(scenario.setup, resolvedLevel));
      }
      // Daily plan next-in-line lookup. Bu sahne kullanıcının bugünkü plan
      // sırasındaysa, bir sonraki sahneyi bul — verdict ekranı auto-advance
      // için kullanır. Best-effort; başarısızsa nextInPlan null kalır,
      // verdict legacy navigate'e döner.
      if (scenario?.id) {
        try {
          setNextInPlanScene(await getNextInPlan(scenario.id));
        } catch {
          setNextInPlanScene(null);
        }
      }
      // NPC relationship pre-fetch. Bu NPC daha önce karşıya geldiyse
      // tier'ı UI'da göster. Yeni karşılaşmada null kalır → banner yok.
      if (scenario?.scene?.npc_role || scenario?.scene?.setting) {
        try {
          const { name, bucket } = nameAndBucketForNpc(
            scenario.scene.npc_role ?? "",
            scenario.scene.setting ?? "",
            scenario.id,
          );
          const rel = await getRelationship(name, bucket);
          setNpcRel(rel);
        } catch {
          setNpcRel(null);
        }
      }
    })();
  }, [scenario?.id]);

  // On mount: decide roleplay mode based on previous attempts
  useEffect(() => {
    if (!scenario) return;
    scenarioStartedAtRef.current = Date.now();
    (async () => {
      const [resolvedMode, mastery] = await Promise.all([
        getRoleplayMode(scenario.id),
        getRoleplayMasteryState(scenario.id),
      ]);
      setRoleplayMode(resolvedMode);
      void trackEvent("scenario_started", {
        scenario_id: scenario.id,
        skill_id: scenario.skill_id,
        mode: scenario.mode,
        scene_level: scenario.cefrLevel ?? "unknown",
        estimated_minutes: scenario.estimated_minutes,
        attempt_number: mastery.attempts + 1,
        is_repeat: mastery.attempts > 0,
      }).catch(() => {});
    })();
    // 2026-05-24 — Sahne açılış sinyali. notifications.ts 6h "yarım kaldı"
    // bildirimini bu başlığı kullanarak kuracak; sahne tamamlanmazsa 6 saat
    // sonra "X sahnen yarım kaldı" push'u atar.
    void recordSceneOpen(
      scenario.title?.replace(/\n/g, " ") ?? "sahnen",
    ).catch(() => {});
  }, [scenario]);

  useEffect(() => {
    if (!scenario) return;
    void trackEvent("scenario_phase_entered", {
      scenario_id: scenario.id,
      phase,
      elapsed_ms: Date.now() - scenarioStartedAtRef.current,
    }).catch(() => {});
  }, [phase, scenario]);

  // 2026-05-21 — Free-tier paywall gate.
  // intro (force-first Match) → her zaman geç, ilk değer öncesi paywall yok
  // Premium → geç
  // Free quota dolduysa → /paywall'a redirect
  // Gate check FIRST_RENDER'da, scenario hidden olur.
  useEffect(() => {
    if (!scenario || isIntro) return;
    let cancelled = false;
    (async () => {
      const gated = await shouldGatePaywall().catch(() => false);
      // 2026-05-25 (B-PAY-9) — Async navigation race koruması; başka bir
      // path (örn. hard-mode tap) önce paywall'a yönlendirdiyse ya da
      // component unmount olduysa duplicate replace etme.
      if (cancelled || paywallNavRef.current) return;
      if (gated) {
        paywallNavRef.current = true;
        void trackEvent("paywall_triggered_by_free_quota", {
          scenario_id: scenario.id,
        }).catch(() => {});
        replaceRoute(router, "/paywall?from=quota");
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [scenario, isIntro, router]);
  const [unlockedToast, setUnlockedToast] = useState<AchievementDef | null>(null);
  const [unlockQueue, setUnlockQueue] = useState<AchievementDef[]>([]);
  // 2026-05-24 — Streak milestone modal state. streak_7, streak_30, streak_100
  // unlock'larında AchievementToast yerine full-screen kutlama. streak_3 ve
  // diğer (lesson count, xp, perfect_scene, mode_master, first_signin) toast
  // ile devam eder.
  const [streakMilestone, setStreakMilestone] = useState<{
    visible: boolean;
    days: number;
  }>({ visible: false, days: 0 });
  const savedRef = useRef(false);

  // Auto-speak the current setup phrase
  useEffect(() => {
    if (phase !== "setup" || !scenario) return;
    // 2026-05-25 — Phase 5D: filteredSetup üzerinden oku (cap 12, adaptive).
    const phrase = filteredSetup[setupIdx];
    if (!phrase) return;
    const t = setTimeout(() => speak(phrase.en), 400);
    return () => clearTimeout(t);
  }, [phase, setupIdx, scenario, filteredSetup]);

  // Trigger the scene intro overlay the first time scene phase is reached.
  useEffect(() => {
    if (phase !== "scene" || sceneIntroShownRef.current) return;
    sceneIntroShownRef.current = true;
    setShowSceneIntro(true);
    const t = setTimeout(() => setShowSceneIntro(false), 1200);
    return () => clearTimeout(t);
  }, [phase]);

  // When verdict reached, persist + evaluate achievements
  useEffect(() => {
    if (phase !== "verdict" || !sceneResult || savedRef.current || !scenario) {
      return;
    }
    savedRef.current = true;
    const masteryScore = sceneResult.mastery_score ?? sceneResult.score;
    const accuracy = masteryScore / 100;
    void trackEvent("scenario_completed", {
      scenario_id: scenario.id,
      skill_id: scenario.skill_id,
      mode: scenario.mode,
      score: sceneResult.score,
      mastery_score: masteryScore,
      assisted_turns: sceneResult.assisted_turns ?? 0,
      duration_ms: Date.now() - scenarioStartedAtRef.current,
      low_pressure: !hardMode,
    }).catch(() => {});
    // 2026-05-24 — Sahne tamamlandı: 6h "yarım kaldı" bildirimini iptal et,
    // dropoff zincirini (24h streak / 3d challenge / 7d gone) yeniden zamanla.
    void recordSceneComplete().catch(() => {});
    (async () => {
      // Snapshot the pre-completion profile so we can identify streak/XP
      // milestones that *cross* during this lesson rather than ones that
      // were already true beforehand. completeLesson() below will mutate
      // current_streak, total_xp and last_lesson_at via local-progress.
      await getLocalProfile().catch(() => null);
      await completeLesson({
        lesson_id: scenario.id,
        skill_id: scenario.skill_id,
        accuracy,
        exercises_completed: 1,
      }).catch(() => {});
      await bumpModeFluency(scenario.mode, accuracy).catch(() => {});
      await recordLessonCompletion({
        xpEarned: 20 + Math.round(accuracy * 30),
        isRoleplay: true,
      }).catch(() => {});
      // checkUnlocksAfterLesson is idempotent — already-earned achievements
      // are filtered out of the return set, so re-runs after retries are safe.
      const earned = await checkUnlocksAfterLesson(
        masteryScore,
        scenario.mode,
      ).catch(() => [] as AchievementDef[]);
      if (earned.length > 0) {
        // 2026-05-24 — Streak milestone'ları toast queue'dan ayrıştır.
        // streak_7/30/100 → full-screen modal (habit formation kritik anlar).
        // Diğerleri (streak_3 dahil) → AchievementToast catch-all.
        const STREAK_DAYS_BY_ID: Record<string, number> = {
          streak_7: 7,
          streak_30: 30,
          streak_100: 100,
        };
        // En yüksek streak milestone'unu seç (varsa).
        const streakHit = earned
          .map((a) => STREAK_DAYS_BY_ID[a.id])
          .filter((d): d is number => typeof d === "number")
          .sort((a, b) => b - a)[0];
        if (streakHit !== undefined) {
          setStreakMilestone({ visible: true, days: streakHit });
        }
        const others = earned.filter((a) => !(a.id in STREAK_DAYS_BY_ID));
        if (others.length > 0) setUnlockQueue(others);
      }

      // Variable reward sayacı (Adım 4, 2026-05-20). Sahne tamamlanınca
      // counter++. Threshold'a ulaşırsa bir sonraki home açılışında
      // "🎁 SÜRPRİZ" banner'ı gözükür. Intro sahnesinde tetikleme yapmaz —
      // ilk sahne zaten zorla "yeni-hissi" veriyor.
      if (!isIntro) {
        // eslint-disable-next-line @typescript-eslint/no-require-imports
        const vr = require("../../lib/variable-reward") as {
          bumpSurpriseCounter: () => Promise<boolean>;
        };
        await vr.bumpSurpriseCounter().catch(() => false);
      }

      // AdMob interstitial — her 3 sahne tamamlamasında 1 (free-tier only).
      // Premium kullanıcı için no-op. Intro hariç tutuluyor — kullanıcının
      // ilk verdict deneyiminde reklam olmasın, value-first.
      if (!isIntro) {
        // eslint-disable-next-line @typescript-eslint/no-require-imports
        const ads = require("../../lib/ads") as {
          onScenarioComplete: () => Promise<void>;
        };
        await ads.onScenarioComplete().catch(() => {});
      }

      // SRS vocab enqueue — bu sahnenin vocab_tile ve translate hedeflerini
      // review queue'ya at. Recall faktörü success path = 1.5×, fail = 0.4×.
      // Intro sahnesi dahil — kullanıcı ilk Match cümlelerini hatırlasın.
      // eslint-disable-next-line @typescript-eslint/no-require-imports
      const srsVocab = require("../../lib/srs-vocab") as {
        enqueueVocab: (i: {
          word: string;
          translation: string;
          source_lesson_id: string;
          source_lesson_title: string;
          was_correct?: boolean;
        }) => Promise<void>;
      };
      // Lesson exercises'i tarar — vocab_tile + translate enqueue eder.
      for (const phrase of filteredSetup) {
        await srsVocab
          .enqueueVocab({
            word: phrase.en,
            translation: phrase.tr,
            source_lesson_id: scenario.id,
            source_lesson_title: scenario.title,
            was_correct: true,
          })
          .catch(() => {});
      }
      const lessonExercises = scenario.warmups ?? [];
      // scenario.warmups type BundledLesson["exercises"] = ReadonlyArray<Record<string, unknown>>
      for (const ex of lessonExercises) {
        const exObj = ex as Record<string, unknown>;
        const type = exObj["type"] as string | undefined;
        if (type === "vocab_tile") {
          const word = exObj["word_or_phrase"] as string | undefined;
          const tr = exObj["tr_translation"] as string | undefined;
          if (word && tr) {
            await srsVocab
              .enqueueVocab({
                word,
                translation: tr,
                source_lesson_id: scenario.id,
                source_lesson_title: scenario.title,
                was_correct: true,
              })
              .catch(() => {});
          }
        } else if (type === "translate") {
          const target = exObj["target"] as string | undefined;
          const source = exObj["source"] as string | undefined;
          if (target && source) {
            // Translate ödeve girer ama daha düşük weight — half-life baseline 1.0
            await srsVocab
              .enqueueVocab({
                word: target,
                translation: source,
                source_lesson_id: scenario.id,
                source_lesson_title: scenario.title,
                was_correct: true,
              })
              .catch(() => {});
          }
        }
      }
    })();
  }, [phase, sceneResult, scenario, isIntro, filteredSetup]);

  // Drain achievement queue — when the active toast clears, slide the next
  // queued unlock in. We also auto-advance after 2s when there are multiple
  // pending so a backlog of unlocks doesn't sit waiting at ~3.5s each.
  useEffect(() => {
    if (unlockedToast === null && unlockQueue.length > 0) {
      setUnlockedToast(unlockQueue[0]!);
      setUnlockQueue((q) => q.slice(1));
    }
  }, [unlockedToast, unlockQueue]);

  useEffect(() => {
    if (!unlockedToast || unlockQueue.length === 0) return;
    const t = setTimeout(() => setUnlockedToast(null), 2000);
    return () => clearTimeout(t);
  }, [unlockedToast, unlockQueue.length]);

  if (!scenario) {
    return (
      <SafeAreaView style={styles.safe} edges={["top", "bottom"]}>
        <View style={styles.notFound}>
          <Text style={styles.notFoundTitle}>Sahne bulunamadı</Text>
          <Button label="Geri" onPress={() => router.back()} />
        </View>
      </SafeAreaView>
    );
  }

  const onExitConfirmed = () => {
    if (phase !== "verdict") {
      void trackEvent("scenario_abandoned", {
        scenario_id: scenario.id,
        phase,
        elapsed_ms: Date.now() - scenarioStartedAtRef.current,
        setup_index: setupIdx,
        drill_index: drillIdx,
        pre_scene_index: preSceneIdx,
      }).catch(() => {});
    }
    router.back();
  };
  const handleExit = () => {
    // SETUP is safe to abandon outright — nothing persisted yet, no scene
    // started. VERDICT is post-save, also safe. DRILL, SCENE, and the new
    // expansion phases (setup-extra, pre-scene, recall) all confirm because
    // progress is in-flight and won't be retained.
    if (phase === "setup" || phase === "verdict") {
      onExitConfirmed();
      return;
    }
    Alert.alert(
      "Sahneden çık?",
      "Sahneden çıkmak istediğine emin misin? İlerlemen kaydedilmeyecek.",
      [
        { text: "Devam et", style: "cancel" },
        { text: "Çık", style: "destructive", onPress: onExitConfirmed },
      ],
    );
  };

  // 2026-05-24 — Phase advance helpers. Her phase'in son adımı tamamlandığında
  // getNextPhase() ile bir sonraki phase'i sor (boş array veri olan phase'ler
  // atlanır). "verdict" hariç hepsi setPhase ile geçer; verdict'e geçiş
  // onSceneComplete'te tetiklenir (sceneResult set edilir).
  const goToNextPhase = (from: Phase) => {
    const next = getNextPhase(scenario, from);
    if (next === "complete") return;
    setPhase(next);
  };

  // 2026-05-25 — M-3 defensive guard. Bir lesson vocab_tile içermiyorsa
  // (örn. sadece thinking_trap'lerden oluşan exotik bir test case) setup
  // phase'i boş array'le açılır ve SetupView'da `setup[0]!` non-null
  // assertion crash eder. Mount'ta phase === "setup" ama scenario.setup boş
  // ise direkt bir sonraki phase'e atla. Tipik lesson'larda hiç tetiklenmez.
  useEffect(() => {
    if (!scenario) return;
    if (phase === "setup" && !hasSetup(scenario)) {
      const next = getNextPhase(scenario, "setup");
      if (next !== "complete") setPhase(next);
    }
  }, [phase, scenario]);

  const advanceSetup = () => {
    hapticImpact("light");
    // BUG-14 FIX: functional update prevents stale closure on rapid taps
    setSetupIdx((i) => {
      if (i + 1 < filteredSetup.length) {
        return i + 1;
      }
      // Side-effect: advance phase when we've exhausted setup items.
      // We schedule this in a microtask so it doesn't conflict with the
      // state update currently being processed by React.
      queueMicrotask(() => goToNextPhase("setup"));
      return i;
    });
  };

  const advanceSetupExtra = () => {
    if (setupExtraIdx + 1 < (scenario.setupExtra?.length ?? 0)) {
      setSetupExtraIdx((i) => i + 1);
    } else {
      goToNextPhase("setup-extra");
    }
  };

  // BUG-3 FIX: optional chaining prevents crash when warmups is undefined
  const advanceDrill = () => {
    if (drillIdx + 1 < (scenario.warmups?.length ?? 0)) {
      setDrillIdx((i) => i + 1);
    } else {
      goToNextPhase("drill");
    }
  };

  // BUG-13 FIX: functional update prevents stale closure on rapid taps
  const advancePreScene = () => {
    const maxIdx = (scenario.preScene?.length ?? 0) - 1;
    setPreSceneIdx((i) => {
      if (i < maxIdx) return i + 1;
      queueMicrotask(() => goToNextPhase("pre-scene"));
      return i;
    });
  };

  // Recall faz tek bir quiz objesi içerir. RecallQuiz onComplete döndüğünde
  // direkt verdict'e (veya getNextPhase'in döndüğü yere) geçer. sceneResult
  // değişmez — recall puanı verdict score'unu etkilemez (Phase 1 kararı).
  const advanceRecall = () => {
    goToNextPhase("recall");
  };

  const skipDrill = () => {
    hapticImpact("light");
    // Drill skip — pre-scene ya da direkt scene'e (veri yoksa atlanır).
    goToNextPhase("drill");
  };

  const onSceneComplete = (result: ExerciseResult) => {
    setSceneResult(result);
    void recordRoleplayMastery(
      scenario.id,
      result.mastery_score ?? result.score,
    );
    // Daily plan progress — sadece bu sahne planın bir parçasıysa artar.
    // (getNextInPlan null değilse veya scenario.id planda son sahneyse de
    // sayılır; tek artırım, "Bugünün planı: 5 sahne · 20 dk" başlangıcının
    // her tamamlamada güncel kalması için.)
    // 2026-05-25 (B-EDGE-15) — lessonId verince idempotent: aynı sahne 2 kez
    // tetiklenirse (double-effect / hot reload) 2 kez sayılmaz.
    incrementPlanProgress(scenario.id).catch(() => {});

    // 2026-05-21 — Free-tier sayacı artır (premium muaf).
    // Sahne tamamlandığında — verdict ekranı açılırken. Bir sonraki sahne
    // açılışında shouldGatePaywall true dönerse paywall'a yönlendirir.
    // intro/Match sahnesi sayılmaz (force-first ücretsiz pattern).
    if (!isIntro) {
      incrementFreeTier().catch(() => {});
    }

    // 2026-05-21 — Local history record (History sayfası için).
    // intro dahil her sahne kaydedilir — kullanıcı geçmişini görmek için.
    recordSceneCompletion({
      lessonId: scenario.id,
      title: scenario.title,
      mode: scenario.mode as SceneMode,
      score: result.score,
    }).catch(() => {});

    const firstUserTurn = scenario.scene.turns.find(
      (turn) => turn.speaker === "user",
    );
    const firstResponse = result.user_responses?.[0];
    const coachedResponse = firstUserTurn
      ? modelAnswersForTurn(firstUserTurn)[0]
      : undefined;
    if (firstResponse && coachedResponse) {
      void recordProgressComparison({
        scenarioId: scenario.id,
        scenarioTitle: scenario.title.replace(/\n/g, " "),
        userText: firstResponse,
        coachedText: coachedResponse,
      });
    }

    // 2026-05-21 — Vocab book record. Sahnenin vocab_tile'ları kişisel
    // defter'e eklenir. Dedupe edilir (aynı sahne tekrar oynanırsa
    // kelimeler çift yazılmaz). Retention için kullanıcı "bu hafta 24
    // kelime öğrendim" hissini görsün.
    recordVocabFromScene(scenario.id, scenario.mode as SceneMode).catch(() => {});

    // 2026-05-23 — NPC İlişkileri (Engagement #6). Sahnenin NPC ismini
    // çek + relationship counter artır. Lafla'nın USP'si: aynı NPC ile
    // tekrar konuşunca ilişki "Tanıdık → Arkadaş → Yakın" yükseliyor.
    // Fire-and-forget — sahne flow'unu bloklamaz, hata olsa bile verdict
    // ekranı normal akar.
    try {
      // role + setting Scene içinde gömülü. nameAndBucketForNpc bucket'ı
      // da döner — bu sayede "barista:Mia" vs "workplace:Mia" gibi
      // collision'lar relationship tracker'da ayrı kalır.
      const role = scenario.scene?.npc_role ?? "";
      const setting = scenario.scene?.setting ?? "";
      if (role || setting) {
        const { name, bucket } = nameAndBucketForNpc(
          role,
          setting,
          scenario.id,
        );
        void recordInteraction({
          npcName: name,
          npcBucket: bucket,
          mode: scenario.mode,
          episode: {
            scenarioId: scenario.id,
            title: scenario.title.replace(/\n/g, " "),
            outcome:
              result.score >= 80
                ? "goal_met"
                : result.score >= 50
                  ? "close"
                  : "retry",
            userSummary: result.user_responses?.[0]?.slice(0, 140),
          },
        }).catch(() => {});
      }
    } catch {
      // Defense-in-depth — relationships shouldn't ever break a scene.
    }
    hapticSuccess();
    // 2026-05-24 — Recall phase varsa önce ona geç (sceneResult zaten set
    // edildi, verdict'e geçişte aynı obje render edilir). Yoksa direkt verdict.
    goToNextPhase("scene");
  };

  const nextScenario = findNextScenario(scenario.skill_id, scenario.id);
  const phaseProgress =
    phase === "setup" || phase === "setup-extra"
      ? { now: 1, text: "Kurulum, 1 / 4" }
      : phase === "drill" || phase === "pre-scene"
        ? { now: 2, text: "Alıştırma, 2 / 4" }
        : phase === "scene"
          ? { now: 3, text: "Sahne, 3 / 4" }
          : { now: 4, text: "Bitiş, 4 / 4" };

  return (
    <SafeAreaView style={styles.safe} edges={["top", "bottom"]}>
      <ThemedStatusBar />
      <KeyboardAvoidingView
        style={styles.flex}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <View style={styles.header}>
          <Pressable
            onPress={handleExit}
            style={styles.exitBtn}
            accessibilityRole="button"
            accessibilityLabel="Sahneden çık"
          >
            <Text style={styles.exitText}>← Geri</Text>
          </Pressable>
          {/* 2026-05-24 — 7-fazlı yeni akışı 4 dot'a kondense ettik
              (kullanıcıya 7 dot karıştırır):
                Dot 1 (Kurulum): setup + setup-extra
                Dot 2 (Alıştırma): drill + pre-scene
                Dot 3 (Sahne): scene
                Dot 4 (Bitiş): recall + verdict */}
          <View
            style={styles.phaseDots}
            accessible
            accessibilityRole="progressbar"
            accessibilityLabel="Sahne ilerlemesi"
            accessibilityValue={{ min: 1, max: 4, ...phaseProgress }}
          >
            <PhaseDot
              active={phase === "setup" || phase === "setup-extra"}
              done={
                phase === "drill" ||
                phase === "pre-scene" ||
                phase === "scene" ||
                phase === "recall" ||
                phase === "verdict"
              }
            />
            <PhaseDot
              active={phase === "drill" || phase === "pre-scene"}
              done={
                phase === "scene" || phase === "recall" || phase === "verdict"
              }
            />
            <PhaseDot
              active={phase === "scene"}
              done={phase === "recall" || phase === "verdict"}
            />
            <PhaseDot
              active={phase === "recall" || phase === "verdict"}
              done={false}
            />
          </View>
          <View style={styles.spacer} />
        </View>

        {/* PhaseShell cross-fades between phase renders so the swap from
            setup → drill → scene → verdict feels deliberate, not abrupt. */}
        <PhaseShell phaseKey={phase} style={styles.flex}>
          {phase === "setup" && filteredSetup[setupIdx] && (
            <View style={{ flex: 1 }}>
              <SetupView
                key={`setup-${setupIdx}`}
                phrase={filteredSetup[setupIdx]}
                stepIndex={setupIdx}
                total={filteredSetup.length}
                onNext={advanceSetup}
              />
              {/* 2026-05-21 — Hard Mode toggle (Premium). Setup'ta gözükür
                  ki kullanıcı sahneye girmeden seçim yapsın. Free user
                  paywall'a yönlendirilir. */}
              {setupIdx === 0 && (
                <Pressable
                  onPress={() => {
                    // 2026-05-23 (v0.9.3) — Audit fix: isPremiumState === null
                    // window'da paid feature briefly accessible. Null durumda
                    // güvenli default = "not premium" → paywall'a yönlendir.
                    // RevenueCat init ~50-500ms sürüyor; o aralıkta tap'lar
                    // accidental premium unlock'a yol açıyordu.
                    if (isPremiumState !== true) {
                      if (paywallNavRef.current) return;
                      paywallNavRef.current = true;
                      pushRoute(router, "/paywall?from=hard-mode");
                    } else {
                      setHardMode((p) => !p);
                    }
                  }}
                  disabled={isPremiumState === null}
                  style={({ pressed }) => [
                    styles.hardModeToggle,
                    hardMode && styles.hardModeToggleActive,
                    pressed && { opacity: 0.85 },
                    isPremiumState === null && { opacity: 0.5 },
                  ]}
                  accessibilityRole={isPremiumState === true ? "switch" : "button"}
                  accessibilityLabel={
                    isPremiumState === true
                      ? "Hard Mode"
                      : "Hard Mode, Lafla Pro ile aç"
                  }
                  accessibilityState={{
                    checked: isPremiumState === true ? hardMode : undefined,
                    disabled: isPremiumState === null,
                  }}
                >
                  <Text
                    style={[
                      styles.hardModeToggleText,
                      hardMode && styles.hardModeToggleTextActive,
                    ]}
                  >
                    {isPremiumState === false
                      ? "🔒 🔥 HARD MODE · Lafla Pro ile aç"
                      : hardMode
                        ? "🔥 HARD MODE açık — ipuçsuz, tam cümle"
                        : "🔥 Hard Mode dene · Premium"}
                  </Text>
                </Pressable>
              )}
            </View>
          )}

          {/* 2026-05-24 — Content expansion. setup-extra phase: sentence_pattern
              + dialogue_gap egzersizleri vocab setup'tan sonra, drill öncesi.
              Veri yoksa getNextPhase setup → drill geçer, bu blok hiç render
              olmaz (eski lesson akışı korunur). */}
          {phase === "setup-extra" &&
            scenario.setupExtra &&
            scenario.setupExtra[setupExtraIdx] && (
              <View style={styles.drillWrap}>
                <View style={styles.drillHeader}>
                  <Text style={styles.drillLabel}>
                    YAPI · {setupExtraIdx + 1}/{scenario.setupExtra.length}
                  </Text>
                  <Pressable
                    onPress={() => goToNextPhase("setup-extra")}
                    hitSlop={8}
                    accessibilityRole="button"
                    accessibilityLabel="Yapı alıştırmasını atla"
                  >
                    <Text style={styles.drillSkip}>Atla</Text>
                  </Pressable>
                </View>
                <View style={styles.drillBody}>
                  <DrillRenderer
                    key={`setup-extra-${scenario.id}-${setupExtraIdx}-${scenario.setupExtra[setupExtraIdx]!.type}`}
                    exercise={scenario.setupExtra[setupExtraIdx]!}
                    onComplete={advanceSetupExtra}
                  />
                </View>
              </View>
            )}

          {phase === "drill" && scenario.warmups[drillIdx] && (
            <View style={styles.drillWrap}>
              <View style={styles.drillHeader}>
                <Text style={styles.drillLabel}>
                  ALIŞTIRMA · {drillIdx + 1}/{scenario.warmups.length}
                </Text>
                <Pressable
                  onPress={skipDrill}
                  hitSlop={8}
                  accessibilityRole="button"
                  accessibilityLabel="Alıştırmayı atla, sahneye geç"
                >
                  <Text style={styles.drillSkip}>Sahneye atla</Text>
                </Pressable>
              </View>
              <View style={styles.drillBody}>
                <DrillRenderer
                  key={`drill-${scenario.id}-${drillIdx}-${scenario.warmups[drillIdx]!.type}`}
                  exercise={scenario.warmups[drillIdx]!}
                  onComplete={advanceDrill}
                />
              </View>
            </View>
          )}

          {/* 2026-05-24 — pre-scene phase: listen_respond rehearsal (en fazla
              3 tur). Voice-first NPC dinle + 3sn düşün + cevap. Sahne öncesi
              ısınma. Veri yoksa drill → scene'e geçer. */}
          {phase === "pre-scene" &&
            scenario.preScene &&
            scenario.preScene[preSceneIdx] && (
              <View style={styles.drillWrap}>
                <View style={styles.drillHeader}>
                  <Text style={styles.drillLabel}>
                    HAZIRLIK · {preSceneIdx + 1}/{scenario.preScene.length}
                  </Text>
                  <Pressable
                    onPress={() => goToNextPhase("pre-scene")}
                    hitSlop={8}
                    accessibilityRole="button"
                    accessibilityLabel="Hazırlığı atla, sahneye geç"
                  >
                    <Text style={styles.drillSkip}>Sahneye atla</Text>
                  </Pressable>
                </View>
                <View style={styles.drillBody}>
                  <DrillRenderer
                    key={`pre-scene-${scenario.id}-${preSceneIdx}-${scenario.preScene[preSceneIdx]!.type}`}
                    exercise={scenario.preScene[preSceneIdx]!}
                    onComplete={advancePreScene}
                  />
                </View>
              </View>
            )}

          {phase === "scene" && (
            <View style={styles.sceneWrap}>
              {/* NPC ilişki banner — sahnede tanıdık biri varsa subtle chip.
                  Brand-safe: sade tek satır, "Mia · Arkadaş · 6. sahnen".
                  Yeni NPC ise (null) render edilmez — yabancı hissi natural. */}
              {npcRel && npcRel.sceneCount > 0 && (
                <View style={styles.npcRelBanner}>
                  <Text style={styles.npcRelEmoji}>👤</Text>
                  <Text style={styles.npcRelName}>{npcRel.name}</Text>
                  <Text style={styles.npcRelSep}>·</Text>
                  <Text
                    style={[
                      styles.npcRelTier,
                      tierFor(npcRel.sceneCount).tier === "close" &&
                        styles.npcRelTierClose,
                      tierFor(npcRel.sceneCount).tier === "friend" &&
                        styles.npcRelTierFriend,
                    ]}
                  >
                    {tierFor(npcRel.sceneCount).labelTr}
                  </Text>
                  <Text style={styles.npcRelSep}>·</Text>
                  <Text style={styles.npcRelCount}>
                    {npcRel.sceneCount + 1}. sahnen
                  </Text>
                </View>
              )}
              <RoleplayChat
                scenarioDescription={scenario.scene.description}
                npcRole={scenario.scene.npc_role}
                setting={scenario.scene.setting}
                turns={scenario.scene.turns}
                onComplete={onSceneComplete}
                mode={roleplayMode}
                seed={scenario.id}
                userName={displayName}
                sceneLevel={scenario.cefrLevel}
                userLevel={userLevel ?? undefined}
                hardMode={hardMode}
                lowPressure={!hardMode}
                memoryPrompt={memoryPromptForRelationship(npcRel) ?? undefined}
                estimatedMinutes={scenario.estimated_minutes}
              />
            </View>
          )}

          {/* 2026-05-24 — recall phase: sahnenin sonunda, verdict öncesi son
              hızlı 5-soru flashcard. recallQuiz null ise (eski lesson veya
              author atlamış) bu blok render olmaz, scene → verdict geçer.
              DrillRenderer "recall_quiz" case'i RecallQuiz component'ini
              çağırır; tek obje olduğu için idx state'i yok. */}
          {phase === "recall" && scenario.recallQuiz && (
            <View style={styles.drillWrap}>
              <View style={styles.drillHeader}>
                <Text style={styles.drillLabel}>HATIRLAMA</Text>
                <Pressable
                  onPress={advanceRecall}
                  hitSlop={8}
                  accessibilityRole="button"
                  accessibilityLabel="Hatırlama alıştırmasını atla"
                >
                  <Text style={styles.drillSkip}>Atla</Text>
                </Pressable>
              </View>
              <View style={styles.drillBody}>
                <DrillRenderer
                  key={`recall-${scenario.id}-${scenario.recallQuiz.type}`}
                  exercise={scenario.recallQuiz}
                  onComplete={advanceRecall}
                />
              </View>
            </View>
          )}

          {phase === "verdict" && sceneResult && (
            <VerdictView
              scenario={scenario}
              sceneResult={sceneResult}
              hasNext={!!nextScenario || !!nextInPlanScene}
              userName={displayName}
              planNextLabel={
                nextInPlanScene
                  ? nextInPlanScene.title.replace(/\n/g, " ")
                  : null
              }
              onContinue={() => {
                // Switch-trigger #1 — force-first intro scene biterse:
                // 1) "completed" flag yaz (bir daha tetiklenmez)
                // 2) Bugün ekranına dön. İlk başarıdan hemen sonra satış
                //    ekranı göstermek öğrenme ivmesini kesiyordu.
                if (isIntro) {
                  void AsyncStorage.setItem(
                    "lafla.intro.match.completed",
                    "true",
                  ).catch(() => {});
                  void markHomeTutorialSeen().catch(() => {});
                  replaceRoute(router, "/today");
                  return;
                }
                // 2026-05-21 — Daily Plan auto-advance.
                // Plan sırasındaki bir sonraki sahne varsa direkt ona git
                // (legacy "next in skill" yerine plan akışı önceliklidir).
                // Plan bitti veya kullanıcı plan dışı bir sahnedeyse legacy
                // davranış: aynı skill'de sıradaki veya home.
                if (nextInPlanScene) {
                  replaceRoute(
                    router,
                    `/scenario/${nextInPlanScene.lessonId}`,
                  );
                  return;
                }
                if (nextScenario) {
                  router.replace(`/scenario/${nextScenario}` as never);
                } else {
                  router.replace("/today" as never);
                }
              }}
            />
          )}
        </PhaseShell>

        {showSceneIntro && (
          <SceneIntroOverlay onDismiss={() => setShowSceneIntro(false)} />
        )}

        <AchievementToast
          achievement={unlockedToast}
          onDismiss={() => setUnlockedToast(null)}
        />
        {unlockedToast && unlockQueue.length > 0 && (
          <View style={stackStyles.badgeWrap} pointerEvents="none">
            <View style={stackStyles.badge}>
              <Text style={stackStyles.badgeText}>+{unlockQueue.length}</Text>
            </View>
          </View>
        )}
      </KeyboardAvoidingView>

      {/* Streak milestone full-screen modal — 7/30/100 günlerinde toast yerine
          ekrana hâkim kutlama + paylaşım. Modal kapanınca toast queue normal
          akar (öncesinde streak harici achievement varsa). */}
      <StreakMilestoneModal
        visible={streakMilestone.visible}
        streakDays={streakMilestone.days}
        onClose={() => setStreakMilestone({ visible: false, days: 0 })}
      />
    </SafeAreaView>
  );
}

// ============================================================
// PhaseShell — cross-fade wrapper for phase transitions
// ============================================================

// Wraps phase content so each phase change cross-fades (180ms out then
// 220ms in) with an 8px translateY easing back to zero. The two timings
// run sequentially on the same shared value so the perceived total
// transition is ~360ms — short enough to feel responsive, long enough
// to register as intentional motion.
function PhaseShell({
  phaseKey,
  children,
  style,
}: {
  phaseKey: string;
  children: React.ReactNode;
  style?: object;
}) {
  const opacity = useSharedValue(0);
  const translateY = useSharedValue(8);

  useEffect(() => {
    opacity.value = withSequence(
      withTiming(0, {
        duration: 180,
        easing: Easing.in(Easing.cubic),
      }),
      withTiming(1, {
        duration: 220,
        easing: Easing.out(Easing.cubic),
      }),
    );
    translateY.value = withSequence(
      withTiming(8, { duration: 180, easing: Easing.in(Easing.cubic) }),
      withTiming(0, { duration: 220, easing: Easing.out(Easing.cubic) }),
    );
    return () => {
      cancelAnimation(opacity);
      cancelAnimation(translateY);
    };
  }, [phaseKey, opacity, translateY]);

  const animStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
    transform: [{ translateY: translateY.value }],
  }));

  return (
    <Animated.View style={[style, animStyle]}>{children}</Animated.View>
  );
}

function DrillRenderer({
  exercise,
  onComplete,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  exercise: any;
  onComplete: (r: ExerciseResult) => void;
}) {
  switch (exercise.type) {
    case "multiple_choice":
      return (
        <MultipleChoice
          question={exercise.question}
          options={exercise.options}
          correctIndex={exercise.correct_index}
          explanation={exercise.tr_explanation}
          onComplete={onComplete}
        />
      );
    case "fill_blank":
      return (
        <FillBlank
          sentence={exercise.sentence_template}
          answer={exercise.answer}
          distractors={exercise.distractors}
          trHint={exercise.tr_hint}
          onComplete={onComplete}
        />
      );
    case "word_order":
      return (
        <WordOrder
          scrambledTokens={exercise.scrambled_tokens}
          correctSentence={exercise.correct_sentence}
          trTranslation={exercise.tr_translation}
          onComplete={onComplete}
        />
      );
    case "spot_mistake":
      return (
        <SpotMistake
          incorrectSentence={exercise.incorrect_sentence}
          correctSentence={exercise.correct_sentence}
          trExplanation={exercise.tr_explanation}
          onComplete={onComplete}
        />
      );
    case "translate":
      return (
        <Translate
          source={exercise.source}
          target={exercise.target}
          acceptedVariants={exercise.accepted_variants ?? []}
          direction={exercise.direction}
          trHint={exercise.tr_hint}
          onComplete={onComplete}
        />
      );
    case "pronounce_phrase":
      return (
        <PronouncePhrase
          phrase={exercise.phrase}
          trHint={exercise.tr_hint}
          onComplete={onComplete}
        />
      );
    case "speech_shadowing":
      // SpeechShadowing expects an array of phrases; new lesson data ships
      // a single native_text per exercise so we wrap it.
      return (
        <SpeechShadowing
          phrases={[exercise.native_text]}
          trTranslations={exercise.tr_hint ? [exercise.tr_hint] : undefined}
          onComplete={onComplete}
        />
      );
    case "listen_and_transcribe":
      return (
        <ListenAndTranscribe
          sentence={exercise.audio_text}
          acceptedVariants={
            exercise.transcription_target
              ? [exercise.transcription_target]
              : []
          }
          trHint={exercise.tr_hint}
          onComplete={onComplete}
        />
      );
    // 2026-05-24 — Content expansion (Phase 1C, Agent C). Yeni egzersiz tipleri.
    // Plan dokümanı (CONTENT_EXPANSION_PLAN.md) schema:
    //   sentence_pattern: { template, slots, tr_hint, example_filled }
    //   dialogue_gap: { turns, missing_at, accepted_patterns, tr_hint }
    //   listen_respond: { npc_line, accepted_patterns, think_seconds, tr_hint }
    //   thinking_trap: { tr_thought, wrong_en, right_en, why_tr }
    //   recall_quiz: { items: [{ q, options, correct, tr_explanation }] }
    case "sentence_pattern":
      return (
        <SentencePattern
          template={exercise.template}
          slots={exercise.slots}
          tr_hint={exercise.tr_hint}
          example_filled={exercise.example_filled}
          onComplete={onComplete}
        />
      );
    case "dialogue_gap":
      return (
        <DialogueGap
          turns={exercise.turns}
          missing_at={exercise.missing_at}
          accepted_patterns={exercise.accepted_patterns}
          tr_hint={exercise.tr_hint}
          ideal_answer={exercise.ideal_answer}
          onComplete={onComplete}
        />
      );
    case "listen_respond":
      return (
        <ListenRespond
          npc_line={exercise.npc_line}
          accepted_patterns={exercise.accepted_patterns}
          think_seconds={exercise.think_seconds ?? 3}
          tr_hint={exercise.tr_hint}
          ideal_response={exercise.ideal_response}
          onComplete={onComplete}
        />
      );
    case "thinking_trap":
      return (
        <ThinkingTrap
          tr_thought={exercise.tr_thought}
          wrong_en={exercise.wrong_en}
          right_en={exercise.right_en}
          why_tr={exercise.why_tr}
          onComplete={onComplete}
        />
      );
    case "recall_quiz":
      return (
        <RecallQuiz items={exercise.items} onComplete={onComplete} />
      );
    default:
      // 2026-05-25 (B-SCN-17) — Recap_quiz beklenen auto-skip; ama bilinmeyen
      // type "skipped" ID ile kayıtlanırsa analytics'te ayırt edilemez.
      // Beklenmedik type'ı tek seferlik kaydet (content team patch'lesin).
      if (exercise.type !== "recap_quiz") {
        void trackEvent("exercise_unknown_type_autoskipped", {
          exercise_type: exercise.type ?? "(undefined)",
        }).catch(() => {});
      }
      onComplete({
        exercise_id: exercise.type === "recap_quiz" ? "skipped" : `unknown_${exercise.type}`,
        exercise_type: exercise.type,
        correct: false,
        score: 0,
        feedback: "Bu alıştırma bu sürümde desteklenmiyor.",
      });
      return null;
  }
}

// ============================================================
// PhaseDot — animated progress indicator
// ============================================================

// Dot transitions smoothly between three visual states:
//   - pending: dim grey base layer only
//   - active:  brand-pink layer at full opacity, scaleY 1.4 (thicker bar)
//   - done:    brand-pink-dim layer at full opacity
// The base styles supply the pending colour; two absolute layers fade in
// over the top for done/active so we avoid the snappy "swap" look that
// non-animated style toggles produce.
function PhaseDot({ active, done }: { active: boolean; done: boolean }) {
  const activeProgress = useSharedValue(active ? 1 : 0);
  const doneProgress = useSharedValue(done ? 1 : 0);

  useEffect(() => {
    activeProgress.value = withTiming(active ? 1 : 0, {
      duration: 320,
      easing: Easing.out(Easing.cubic),
    });
    doneProgress.value = withTiming(done ? 1 : 0, {
      duration: 320,
      easing: Easing.out(Easing.cubic),
    });
    return () => {
      cancelAnimation(activeProgress);
      cancelAnimation(doneProgress);
    };
  }, [active, done, activeProgress, doneProgress]);

  const activeStyle = useAnimatedStyle(() => ({
    opacity: activeProgress.value,
    transform: [{ scaleY: 1 + activeProgress.value * 0.4 }],
  }));
  // Done layer fades when active overlays it so the active colour wins.
  const doneStyle = useAnimatedStyle(() => ({
    opacity: doneProgress.value * (1 - activeProgress.value),
  }));

  return (
    <View style={phaseStyles.dot} importantForAccessibility="no">
      <Animated.View
        style={[phaseStyles.dotLayer, phaseStyles.dotDone, doneStyle]}
      />
      <Animated.View
        style={[phaseStyles.dotLayer, phaseStyles.dotActive, activeStyle]}
      />
    </View>
  );
}

// ============================================================
// SetupView — vocab card with spring entrance + breathing CTA
// ============================================================

function SetupView({
  phrase,
  stepIndex,
  total,
  onNext,
}: {
  phrase: {
    en: string;
    tr: string;
    example?: string;
    example_tr?: string;
    cefr_band?: CefrLevel;
  };
  stepIndex: number;
  total: number;
  onNext: () => void;
}) {
  // Spring-in entrance for the hero on every step. Re-mounts are forced
  // by the outer `key` (set on the SetupView call site) so this effect
  // runs cleanly for each vocab item rather than relying on dep tracking.
  const heroOpacity = useSharedValue(0);
  const heroTranslateY = useSharedValue(14);
  const exampleOpacity = useSharedValue(0);
  const exampleTranslateY = useSharedValue(10);

  useEffect(() => {
    heroOpacity.value = withTiming(1, {
      duration: 320,
      easing: Easing.out(Easing.cubic),
    });
    heroTranslateY.value = withSpring(0, {
      damping: 14,
      stiffness: 160,
      mass: 0.9,
    });
    // Example card lags slightly so the eye lands on the hero first.
    exampleOpacity.value = withDelay(
      120,
      withTiming(1, { duration: 320, easing: Easing.out(Easing.cubic) }),
    );
    exampleTranslateY.value = withDelay(
      120,
      withSpring(0, { damping: 16, stiffness: 150 }),
    );
    return () => {
      cancelAnimation(heroOpacity);
      cancelAnimation(heroTranslateY);
      cancelAnimation(exampleOpacity);
      cancelAnimation(exampleTranslateY);
    };
  }, [
    heroOpacity,
    heroTranslateY,
    exampleOpacity,
    exampleTranslateY,
  ]);

  const heroStyle = useAnimatedStyle(() => ({
    opacity: heroOpacity.value,
    transform: [{ translateY: heroTranslateY.value }],
  }));
  const exampleStyle = useAnimatedStyle(() => ({
    opacity: exampleOpacity.value,
    transform: [{ translateY: exampleTranslateY.value }],
  }));

  // Tap on the hero card replays the audio. Preserves the existing
  // speaker-chip behaviour while turning the whole card into a hit target,
  // which several testers reached for instinctively.
  const replayAudio = () => {
    hapticImpact("light");
    speak(phrase.en);
  };

  return (
    <ScrollView contentContainerStyle={setupStyles.content}>
      <View style={setupStyles.labelRow}>
        <Text style={setupStyles.label}>
          KURULUM · {stepIndex + 1}/{total}
        </Text>
        {phrase.cefr_band ? (
          <View style={setupStyles.levelBadge}>
            <Text style={setupStyles.levelBadgeText}>{phrase.cefr_band}</Text>
          </View>
        ) : null}
      </View>

      <Pressable
        onPress={replayAudio}
        accessibilityRole="button"
        accessibilityLabel="Cümleyi tekrar dinle"
      >
        <Animated.View style={[setupStyles.hero, heroStyle]}>
          <View style={setupStyles.wordRow}>
            <Text style={setupStyles.word}>{phrase.en}</Text>
            <SpeakerButton text={phrase.en} size="lg" />
          </View>
          <View style={setupStyles.divider} />
          <Text style={setupStyles.tr}>{phrase.tr}</Text>
        </Animated.View>
      </Pressable>

      {phrase.example && (
        <Animated.View style={[setupStyles.exampleBox, exampleStyle]}>
          <View style={setupStyles.exampleHeader}>
            <Text style={setupStyles.exampleLabel}>Örnek kullanım</Text>
            <SpeakerButton text={phrase.example} size="sm" />
          </View>
          <Text style={setupStyles.exampleEn}>"{phrase.example}"</Text>
          {phrase.example_tr && (
            <Text style={setupStyles.exampleTr}>"{phrase.example_tr}"</Text>
          )}
        </Animated.View>
      )}

      <View style={setupStyles.footer}>
        <GlowingCta
          label={stepIndex + 1 >= total ? "Hazırım" : "Devam"}
          onPress={onNext}
        />
      </View>
    </ScrollView>
  );
}

// CTA wrapper with a soft "breathing" halo. A low-opacity pink glow loops
// in/out behind the button until the user taps; on press we cancel the
// animation so subsequent phases don't keep cycling the value off-screen.
function GlowingCta({
  label,
  onPress,
}: {
  label: string;
  onPress: () => void;
}) {
  const glow = useSharedValue(0.35);

  useEffect(() => {
    glow.value = withRepeat(
      withSequence(
        withTiming(0.9, {
          duration: 1100,
          easing: Easing.inOut(Easing.quad),
        }),
        withTiming(0.35, {
          duration: 1100,
          easing: Easing.inOut(Easing.quad),
        }),
      ),
      -1,
      false,
    );
    return () => {
      cancelAnimation(glow);
    };
  }, [glow]);

  const glowStyle = useAnimatedStyle(() => ({
    opacity: glow.value,
    transform: [{ scale: 1 + (glow.value - 0.35) * 0.08 }],
  }));

  const handlePress = () => {
    cancelAnimation(glow);
    glow.value = 0;
    onPress();
  };

  return (
    <View style={glowStyles.wrap}>
      <Animated.View
        style={[glowStyles.halo, glowStyle]}
        pointerEvents="none"
      />
      <Button label={label} onPress={handlePress} stacked />
    </View>
  );
}

// ============================================================
// SceneIntroOverlay — first-time scene-phase greeting
// ============================================================

function SceneIntroOverlay({ onDismiss }: { onDismiss: () => void }) {
  const opacity = useSharedValue(0);
  const translateY = useSharedValue(12);

  useEffect(() => {
    opacity.value = withTiming(1, {
      duration: 220,
      easing: Easing.out(Easing.cubic),
    });
    translateY.value = withSpring(0, { damping: 14, stiffness: 140 });
    return () => {
      cancelAnimation(opacity);
      cancelAnimation(translateY);
    };
  }, [opacity, translateY]);

  const overlayStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
  }));
  const cardStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }],
  }));

  return (
    <Animated.View
      style={[introStyles.overlay, overlayStyle]}
      pointerEvents="box-none"
    >
      <Pressable
        onPress={onDismiss}
        style={introStyles.fill}
        accessibilityRole="button"
        accessibilityLabel="Konuşma başlıyor, hazırsan başla"
      >
        <Animated.View style={[introStyles.card, cardStyle]}>
          <Text style={introStyles.label}>SAHNE</Text>
          <Text style={introStyles.title}>Konuşma başlıyor</Text>
          <Text style={introStyles.body}>Hazırsan başla.</Text>
        </Animated.View>
      </Pressable>
    </Animated.View>
  );
}

// ============================================================
// VerdictView — score reveal, level pulse, confetti
// ============================================================

// CEFR ladder helper for the "B2'ye N sahne kaldı" copy (switch-trigger #3).
function nextLevelLabel(level: string): string {
  const ladder: Record<string, string> = {
    A1: "A2",
    A2: "B1",
    B1: "B2",
    B2: "C1",
    C1: "C2",
    C2: "C2",
  };
  return ladder[level] ?? "üst seviye";
}

/** Friendly id formatter for share URLs — strips quotes/encoding hazards. */
function scenarioIdForShare(title: string): string {
  // Use title (already user-facing); strip newlines + multiline.
  return title.replace(/\n/g, " ").trim();
}

function VerdictView({
  scenario,
  sceneResult,
  hasNext,
  userName,
  onContinue,
  planNextLabel,
}: {
  scenario: Scenario;
  sceneResult: ExerciseResult;
  hasNext: boolean;
  /**
   * Sanitized display name. When non-empty, the Turkish verdict copy is
   * personalized for each band (high uses "Aferin {name}, ..."; mid/low
   * prefix with "{name}, ..."). When empty, the original generic copy
   * is shown so the screen still reads naturally.
   */
  userName: string;
  onContinue: () => void;
  /**
   * Daily Plan next-action copy. Plan sırasında bir sonraki sahne varsa
   * başlığı buraya gelir. Geçiş manuel kalır; sonuç ekranı otomatik kapanmaz.
   */
  planNextLabel: string | null;
}) {
  // Share card ref — view-shot ile capture edilir. Off-screen pozisyonda
  // render edilir (görünmez ama mounted), kullanıcı "Skoru paylaş"a basınca
  // captureRef + expo-sharing zincirine alınır.
  const shareCardRef = useRef<View>(null);
  const [sharing, setSharing] = useState(false);

  // Temel hata açıklaması öğrenmenin parçasıdır; abonelik özelliği değildir.
  const [topMistakes, setTopMistakes] = useState<RoleplayMistake[]>(
    sceneResult.mistakes ?? [],
  );
  useEffect(() => {
    if ((sceneResult.mistakes?.length ?? 0) > 0) {
      setTopMistakes((sceneResult.mistakes ?? []).slice(0, 1));
      return;
    }
    (async () => {
      // eslint-disable-next-line @typescript-eslint/no-require-imports
      const tracker = require("../../lib/mistake-tracker") as {
        getTopMistakes: (n: number) => Promise<Array<{
          patternId: string;
          count: number;
        }>>;
      };
      // eslint-disable-next-line @typescript-eslint/no-require-imports
      const patterns = require("../../lib/mistake-patterns") as {
        getPattern: (id: string) => {
          reason_tr: string;
          example_right: string;
          example_wrong?: string;
        } | undefined;
      };
      const top = await tracker.getTopMistakes(1).catch(() => []);
      const enriched = top
        .map((m) => {
          const pat = patterns.getPattern(m.patternId);
          if (!pat || !pat.example_wrong) return null;
          return {
            matched: pat.example_wrong,
            reason_tr: pat.reason_tr,
            correct_example: pat.example_right,
          };
        })
        .filter((x): x is NonNullable<typeof x> => !!x);
      setTopMistakes(enriched);
    })();
  }, [sceneResult.mistakes]);
  // Learning flow should not auto-push the learner away from the result screen.
  // The previous countdown moved to the next plan item after a few seconds,
  // often before the user could read the correction. Keep the next action
  // explicit and user-controlled.
  const assessment = assessRoleplayScore(sceneResult.score);
  const masteryAssessment = assessRoleplayScore(
    sceneResult.mastery_score ?? sceneResult.score,
  );
  const assessmentLabel = roleplayAssessmentLabel(assessment);
  const verdictMsg = (() => {
    const prefix = userName ? `${userName}, ` : "";
    if (assessment === "goal_met") {
      return `${prefix}bu sahnenin hedef cümlelerini doğru kullandın.`;
    }
    if (assessment === "close") {
      return `${prefix}anlamlı bir deneme yaptın; hedef kalıpları bir kez daha çalış.`;
    }
    return `${prefix}bu tur güvenilir biçimde değerlendirilemedi. İpuçlarıyla tekrar dene.`;
  })();
  const firstUserTurn = scenario.scene.turns.find(
    (turn) => turn.speaker === "user",
  );
  const targetTakeaway = firstUserTurn
    ? modelAnswersForTurn(firstUserTurn)[0]
    : undefined;
  const firstUserResponse = sceneResult.user_responses?.[0]?.trim();

  // "Level achieved" pulse on the score card once the count-up finishes.
  // Only triggers at score ≥ 75 so it stays a meaningful reward rather
  // than a default flourish that fires every verdict.
  const pulse = useSharedValue(1);
  useEffect(() => {
    if (assessment !== "goal_met") return;
    // Wait for the count-up to finish (≈900ms) before pulsing so the
    // user reads the final number first.
    pulse.value = withDelay(
      950,
      withSequence(
        withTiming(1.06, { duration: 220, easing: Easing.out(Easing.cubic) }),
        withSpring(1, { damping: 8, stiffness: 180 }),
      ),
    );
    return () => {
      cancelAnimation(pulse);
    };
  }, [assessment, pulse]);

  const pulseStyle = useAnimatedStyle(() => ({
    transform: [{ scale: pulse.value }],
  }));

  // Confetti is rare and rewarding — only at ≥90. We seed five emojis
  // with randomized horizontal offset, delay, drift, and final translateY.
  const showConfetti = assessment === "goal_met";

  // 2026-05-20 — switch-trigger #3: CEFR delta animation.
  // recordCefrProgress sahne sonunda çağrılır → before/after döner.
  // 950ms sonra (skor count-up'tan sonra) animasyon başlar; ilerleme
  // chip'i "B1+0.32 → B1+0.36" şeklinde + "B2'ye N sahne kaldı" satırı.
  const [cefrDelta, setCefrDelta] = useState<CefrProgressDelta | null>(null);
  const [displayedProgress, setDisplayedProgress] = useState<number | null>(
    null,
  );
  const savedDeltaRef = useRef(false);

  useEffect(() => {
    if (savedDeltaRef.current) return;
    savedDeltaRef.current = true;
    // Cleanup: async IIFE'den dönen `return () => ...` useEffect'e ulaşmazdı
    // (zombie timer). Şimdi cancelled flag + timer ref'leri outer scope'ta.
    let cancelled = false;
    let timeoutId: ReturnType<typeof setTimeout> | null = null;
    let intervalId: ReturnType<typeof setInterval> | null = null;
    (async () => {
      // Yalnızca hedef kalıpları gerçekten karşılandığında CEFR ilerlet.
      if (masteryAssessment !== "goal_met") return;
      const d = await recordCefrProgress(
        sceneResult.mastery_score ?? sceneResult.score,
      ).catch(() => null);
      if (cancelled || !d) return;
      setCefrDelta(d);
      // Animate from before → after over ~700ms starting after the score count-up
      const target = d.after;
      const start = d.before;
      const totalMs = 700;
      const steps = 30;
      const stepMs = totalMs / steps;
      const startDelay = 950;
      timeoutId = setTimeout(() => {
        if (cancelled) return;
        setDisplayedProgress(start);
        let i = 0;
        intervalId = setInterval(() => {
          i += 1;
          const t = Math.min(1, i / steps);
          const eased = 1 - Math.pow(1 - t, 3);
          const value = start + (target - start) * eased;
          setDisplayedProgress(value);
          if (i >= steps && intervalId) clearInterval(intervalId);
        }, stepMs);
      }, startDelay);
    })();
    return () => {
      cancelled = true;
      if (timeoutId) clearTimeout(timeoutId);
      if (intervalId) clearInterval(intervalId);
    };
  }, [masteryAssessment, sceneResult.mastery_score, sceneResult.score]);

  return (
    <ScrollView contentContainerStyle={verdictStyles.content}>
      <Text style={verdictStyles.title}>Sahne tamamlandı</Text>
      <Text style={verdictStyles.msg}>{verdictMsg}</Text>

      <Animated.View style={[verdictStyles.scoreCard, pulseStyle]}>
        {/* 2026-05-23 premium: inner highlight, "iOS button bevel" tactile
            depth. Verdict en kritik psikolojik moment — premium feedback. */}
        <View style={verdictStyles.scoreCardHighlight} pointerEvents="none" />
        <Text style={verdictStyles.scoreLabel}>GÖREV SONUCU</Text>
        <Text
          style={verdictStyles.scoreResult}
          accessibilityLiveRegion="polite"
        >
          {assessmentLabel}
        </Text>
      </Animated.View>

      {/* CEFR delta — switch-trigger #3.
          Türk öğrencisinin YDS/IELTS dünyasından geldiği için CEFR
          ölçeği = anladığı dil. "B1+0.32 → B1+0.36" şeklinde fractional
          ilerleme + "B2'ye N sahne kaldı" mikro mesajı. */}
      {cefrDelta && displayedProgress !== null && (
        <View style={verdictStyles.cefrCard}>
          <Text style={verdictStyles.cefrLabel}>
            {cefrDelta.bumped ? "✨ Seviye atladın" : "İlerleme"}
          </Text>
          <Text style={verdictStyles.cefrValue}>
            {cefrDelta.bumped
              ? `${cefrDelta.fromLevel} → ${cefrDelta.toLevel}`
              : `${cefrDelta.toLevel}+${displayedProgress.toFixed(2)}`}
          </Text>
          <Text style={verdictStyles.cefrSub}>
            {cefrDelta.bumped
              ? `${cefrDelta.toLevel} seviyesine ilk adımı attın.`
              : cefrDelta.toLevel === "C2"
                ? "C2 ustalık — en üst seviye."
                : `${nextLevelLabel(cefrDelta.toLevel)}'ye ${cefrDelta.scenesToNext} sahne kaldı.`}
          </Text>
        </View>
      )}

      <View style={verdictStyles.metaRow}>
        <View style={verdictStyles.metaPill}>
          <Text style={verdictStyles.metaText}>{scenario.title}</Text>
        </View>
      </View>

      {targetTakeaway && (
        <View style={verdictStyles.takeawayCard}>
          <Text style={verdictStyles.takeawayLabel}>BUGÜNÜN CÜMLESİ</Text>
          {firstUserResponse ? (
            <View style={verdictStyles.takeawayLine}>
              <Text style={verdictStyles.takeawaySmallLabel}>İlk cevabın</Text>
              <Text style={verdictStyles.takeawayUser}>
                “{firstUserResponse}”
              </Text>
            </View>
          ) : null}
          <View style={verdictStyles.takeawayLine}>
            <Text style={verdictStyles.takeawaySmallLabel}>Daha doğal hali</Text>
            <Text style={verdictStyles.takeawayTarget}>
              “{targetTakeaway}”
            </Text>
          </View>
        </View>
      )}

      {sceneResult.feedback && (
        <Text style={verdictStyles.feedback}>{sceneResult.feedback}</Text>
      )}

      {(sceneResult.assisted_turns ?? 0) > 0 && (
        <Text style={verdictStyles.feedback}>
          {sceneResult.assisted_turns} turu destekle tamamladın. Kalıcı
          ilerleme için bu kalıplar tekrar gününe eklendi.
        </Text>
      )}

      {topMistakes.length > 0 && (
        <View style={verdictStyles.feedbackPremium}>
          <Text style={verdictStyles.feedbackPremiumLabel}>
            🎯 BUGÜNÜN TEK ODAĞI
          </Text>
          {topMistakes.map((m, i) => (
            <View key={i} style={verdictStyles.mistakeRow}>
              <Text style={verdictStyles.mistakeReason}>{m.reason_tr}</Text>
              <View style={verdictStyles.mistakeFix}>
                <Text style={verdictStyles.mistakeWrong}>✗ {m.matched}</Text>
                <Text style={verdictStyles.mistakeRight}>✓ {m.correct_example}</Text>
              </View>
            </View>
          ))}
        </View>
      )}

      <View style={verdictStyles.footer}>
        <Button
          label={
            planNextLabel
              ? `Sıradaki: ${planNextLabel}`
              : hasNext
                ? "Sıradaki sahne"
                : "Bugüne dön"
          }
          onPress={onContinue}
          stacked
        />
        {/* Skoru paylaş — Adım 5 (2026-05-20).
            2026-05-25 — Skor >= 60 olmadıkça gösterme. Düşük skoru paylaş
            CTA'sı kullanıcıya başarısızlığı suratına sokuyordu. Sadece
            kullanıcı kendini iyi hissedeceği skor seviyesinde göster. */}
        {assessment === "goal_met" && (
        <View style={verdictStyles.shareRow}>
          <Pressable
            onPress={async () => {
              if (sharing) return;
              setSharing(true);
              void trackEvent("share_score_initiated", {
                score: sceneResult.score,
                scenario_id: scenario.title,
              }).catch(() => {});
              try {
                const uri = await captureRef(shareCardRef, {
                  format: "png",
                  quality: 1,
                  result: "tmpfile",
                  // 4x pixel-ratio: 270×480 logical → 1080×1920 actual
                  width: 1080,
                  height: 1920,
                });
                const available = await Sharing.isAvailableAsync();
                if (available) {
                  await Sharing.shareAsync(uri, {
                    mimeType: "image/png",
                    dialogTitle: "Başarıyı paylaş",
                  });
                  void trackEvent("share_score_completed", {
                    score: sceneResult.score,
                  }).catch(() => {});
                } else {
                  Alert.alert(
                    "Paylaşım yok",
                    "Bu cihazda paylaşım servisi mevcut değil.",
                  );
                }
              } catch {
                Alert.alert("Hata", "Skor kartı oluşturulamadı.");
              } finally {
                setSharing(false);
              }
            }}
            disabled={sharing}
            style={({ pressed }) => [
              verdictStyles.shareBtn,
              pressed && verdictStyles.shareBtnPressed,
              sharing && verdictStyles.shareBtnDisabled,
            ]}
            accessibilityRole="button"
            accessibilityLabel="Skoru sosyal medyada paylaş"
          >
            <Text style={verdictStyles.shareBtnText}>
              {sharing ? "Hazırlanıyor..." : "📸 Başarıyı paylaş"}
            </Text>
          </Pressable>

          {/* Arkadaşına gönder — Adım 6 (2026-05-20).
              Native Share API → text + universal link. Arkadaş tıklayınca
              docs/index.html'daki script `?scene=` paramı yakalar, app
              installed ise deep link, değilse App Store fallback. */}
          <Pressable
            onPress={async () => {
              const shareUrl = `https://berkdemirokk.github.io/lafla/?scene=${encodeURIComponent(scenarioIdForShare(scenario.title))}`;
              const message = `Lafla'da “${scenario.title.replace(/\n/g, " ")}" konuşma hedefini tamamladım 💪 Sen de dene: ${shareUrl}`;
              try {
                await Share.share({
                  message,
                  url: shareUrl,
                });
                void trackEvent("send_to_friend", {
                  score: sceneResult.score,
                }).catch(() => {});
              } catch {
                // user dismissed — silent
              }
            }}
            style={({ pressed }) => [
              verdictStyles.shareBtn,
              pressed && verdictStyles.shareBtnPressed,
            ]}
            accessibilityRole="button"
            accessibilityLabel="Bu sahneyi WhatsApp'ta arkadaşına gönder"
          >
            <Text style={verdictStyles.shareBtnText}>💬 Arkadaşına gönder</Text>
          </Pressable>
        </View>
        )}
      </View>

      {/* Off-screen share card — capture target. Görünmez ama view-shot
          için DOM'da olması gerekiyor. position: absolute + top: -2000. */}
      <View
        style={{
          position: "absolute",
          top: -2000,
          left: 0,
        }}
        pointerEvents="none"
      >
        <ShareCard
          ref={shareCardRef}
          assessment={assessmentLabel}
          cefrLevel={cefrDelta?.toLevel ?? null}
          cefrProgress={cefrDelta?.after ?? 0}
          sceneTitle={scenario.title}
          sceneMode={scenario.mode}
          userName={userName}
        />
      </View>

      {showConfetti && <Confetti />}
    </ScrollView>
  );
}

// ============================================================
// Confetti — emoji rain on ≥90 verdict
// ============================================================

const CONFETTI_EMOJIS = ["🎉", "✨", "🎊", "💫", "⭐"];

// Five emojis fall from above the score card, each with a unique
// horizontal offset, delay, and curve. translateY + opacity decay
// together so they fade as they fall — feels lightweight, not gaudy.
function Confetti() {
  // Memoize randomized parameters so the layout is stable across re-renders.
  const pieces = useMemo(
    () =>
      CONFETTI_EMOJIS.map((emoji, i) => ({
        emoji,
        // Spread horizontally across the score card width.
        leftPct: 10 + i * 18 + Math.random() * 6,
        delay: 80 + i * 110,
        duration: 1400 + Math.random() * 500,
        drift: (Math.random() - 0.5) * 30,
      })),
    [],
  );

  return (
    <View style={confettiStyles.layer} pointerEvents="none">
      {pieces.map((p, i) => (
        <ConfettiPiece key={i} {...p} />
      ))}
    </View>
  );
}

function ConfettiPiece({
  emoji,
  leftPct,
  delay,
  duration,
  drift,
}: {
  emoji: string;
  leftPct: number;
  delay: number;
  duration: number;
  drift: number;
}) {
  const translateY = useSharedValue(-40);
  const translateX = useSharedValue(0);
  const opacity = useSharedValue(0);
  const rotate = useSharedValue(0);

  useEffect(() => {
    opacity.value = withDelay(
      delay,
      withSequence(
        withTiming(1, { duration: 220, easing: Easing.out(Easing.cubic) }),
        withTiming(0, {
          duration: duration - 220,
          easing: Easing.in(Easing.quad),
        }),
      ),
    );
    translateY.value = withDelay(
      delay,
      withTiming(220, { duration, easing: Easing.in(Easing.cubic) }),
    );
    translateX.value = withDelay(
      delay,
      withTiming(drift, { duration, easing: Easing.inOut(Easing.quad) }),
    );
    rotate.value = withDelay(
      delay,
      withTiming(drift > 0 ? 35 : -35, {
        duration,
        easing: Easing.inOut(Easing.quad),
      }),
    );
    return () => {
      cancelAnimation(opacity);
      cancelAnimation(translateY);
      cancelAnimation(translateX);
      cancelAnimation(rotate);
    };
  }, [delay, duration, drift, opacity, translateY, translateX, rotate]);

  const animStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
    transform: [
      { translateY: translateY.value },
      { translateX: translateX.value },
      { rotate: `${rotate.value}deg` },
    ],
  }));

  return (
    <Animated.Text
      style={[confettiStyles.piece, { left: `${leftPct}%` }, animStyle]}
    >
      {emoji}
    </Animated.Text>
  );
}

// ============================================================
// Styles
// ============================================================

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: tokens.bg.app },
  flex: { flex: 1 },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingTop: 8,
    paddingBottom: 12,
  },
  exitBtn: { width: 70 },
  exitText: {
    color: tokens.text.secondary,
    fontSize: 14,
    fontWeight: tokens.weight.semibold,
  },
  phaseDots: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
  },
  spacer: { width: 70 },
  sceneWrap: {
    flex: 1,
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  // NPC ilişki banner — sahnede tanıdık biri varsa subtle chip.
  // Brand-safe: minimal, tek satır, çok az renk. Lafla DNA'sının USP'sini
  // sahnenin başında HİSSETTİRİR (recordInteraction silent yazma yerine).
  npcRelBanner: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
    gap: 6,
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 9999,
    backgroundColor: tokens.bg.surfaceContainer,
    borderWidth: 1,
    borderColor: tokens.border.outlineVariant,
    marginBottom: 12,
    marginTop: 4,
  },
  npcRelEmoji: { fontSize: 13 },
  npcRelName: {
    fontSize: 13,
    fontWeight: tokens.weight.extrabold,
    color: tokens.text.primary,
    letterSpacing: -0.1,
  },
  npcRelSep: {
    fontSize: 11,
    color: tokens.text.tertiary,
    fontWeight: tokens.weight.medium,
  },
  npcRelTier: {
    fontSize: 12,
    fontWeight: tokens.weight.bold,
    color: tokens.text.secondary,
    letterSpacing: 0.2,
  },
  npcRelTierFriend: {
    color: tokens.brand.tertiary,
  },
  npcRelTierClose: {
    color: tokens.brand.primary,
  },
  npcRelCount: {
    fontSize: 11,
    color: tokens.text.tertiary,
    fontWeight: tokens.weight.medium,
  },
  drillWrap: {
    flex: 1,
    paddingHorizontal: 16,
  },
  drillHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 8,
    paddingBottom: 16,
  },
  drillLabel: {
    fontSize: 12,
    color: tokens.text.tertiary,
    fontWeight: tokens.weight.bold,
    letterSpacing: 1.4,
  },
  drillSkip: {
    color: tokens.brand.tertiary,
    fontSize: 14,
    fontWeight: tokens.weight.semibold,
  },
  drillBody: {
    flex: 1,
  },
  // 2026-05-21 — Hard mode toggle (Premium). Setup phase alt kısmında pill.
  hardModeToggle: {
    alignSelf: "center",
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: tokens.radius.full,
    borderWidth: 1.5,
    borderColor: tokens.border.light,
    backgroundColor: tokens.bg.surfaceContainer,
    marginBottom: 12,
  },
  hardModeToggleActive: {
    borderColor: tokens.semantic.error,
    backgroundColor: tokens.semantic.errorContainer,
    shadowColor: tokens.semantic.error,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.4,
    shadowRadius: 10,
  },
  hardModeToggleText: {
    fontSize: 12,
    fontWeight: tokens.weight.extrabold,
    color: tokens.text.secondary,
    letterSpacing: 0.5,
  },
  hardModeToggleTextActive: {
    color: tokens.semantic.error,
  },
  notFound: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 16,
    padding: 32,
  },
  notFoundTitle: {
    fontSize: 20,
    fontWeight: tokens.weight.bold,
    color: tokens.text.primary,
  },
});

const phaseStyles = StyleSheet.create({
  dot: {
    width: 24,
    height: 4,
    borderRadius: 2,
    backgroundColor: tokens.bg.surfaceContainerHigh,
    overflow: "hidden",
  },
  dotLayer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: 2,
  },
  dotActive: {
    backgroundColor: tokens.brand.primary,
  },
  dotDone: {
    backgroundColor: tokens.brand.primaryFixed,
  },
});

const setupStyles = StyleSheet.create({
  content: {
    flexGrow: 1,
    padding: tokens.spacing.md,
    justifyContent: "center",
  },
  labelRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    marginBottom: tokens.spacing.md,
  },
  label: {
    fontSize: 12,
    color: tokens.text.tertiary,
    fontWeight: tokens.weight.bold,
    letterSpacing: 1.4,
    textAlign: "center",
  },
  levelBadge: {
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: tokens.radius.full,
    backgroundColor: tokens.brand.tertiaryContainer,
    borderWidth: 1,
    borderColor: tokens.brand.tertiary,
  },
  levelBadgeText: {
    fontSize: 10,
    color: tokens.brand.tertiary,
    fontWeight: tokens.weight.extrabold,
    letterSpacing: 0.7,
  },
  hero: {
    backgroundColor: tokens.brand.primarySoft,
    borderWidth: 2,
    borderColor: tokens.brand.primary,
    borderRadius: tokens.radius.base,
    padding: 32,
    alignItems: "center",
    marginBottom: tokens.spacing.md,
  },
  wordRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
    marginBottom: 14,
  },
  word: {
    fontSize: 32,
    fontWeight: tokens.weight.black,
    color: tokens.text.primary,
    letterSpacing: -0.5,
    textAlign: "center",
  },
  divider: {
    height: 2,
    width: 40,
    backgroundColor: tokens.brand.primaryFixed,
    marginBottom: 14,
  },
  tr: {
    fontSize: 22,
    color: tokens.text.primary,
    fontWeight: tokens.weight.bold,
    textAlign: "center",
  },
  exampleBox: {
    backgroundColor: tokens.bg.surfaceContainer,
    borderRadius: tokens.radius.base,
    padding: tokens.spacing.md,
  },
  exampleHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  exampleLabel: {
    fontSize: 11,
    color: tokens.text.secondary,
    fontWeight: tokens.weight.bold,
    letterSpacing: 1,
  },
  exampleEn: {
    fontSize: 17,
    color: tokens.text.primary,
    fontWeight: tokens.weight.semibold,
    marginBottom: 4,
    lineHeight: 24,
  },
  exampleTr: {
    fontSize: 14,
    color: tokens.text.secondary,
    fontStyle: "italic",
    lineHeight: 20,
  },
  footer: {
    marginTop: tokens.spacing.lg,
  },
});

const glowStyles = StyleSheet.create({
  wrap: {
    position: "relative",
  },
  halo: {
    position: "absolute",
    top: -10,
    left: -10,
    right: -10,
    bottom: -10,
    borderRadius: tokens.radius.full,
    backgroundColor: tokens.brand.primaryGlow,
    // iOS shadow gives the halo a soft falloff; Android uses elevation.
    shadowColor: tokens.brand.primary,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.6,
    shadowRadius: 16,
    elevation: 6,
  },
});

const introStyles = StyleSheet.create({
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.72)",
    zIndex: 90,
    justifyContent: "center",
    alignItems: "center",
  },
  fill: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    backgroundColor: tokens.bg.surfaceContainerHigh,
    borderRadius: tokens.radius.base,
    paddingHorizontal: 32,
    paddingVertical: 28,
    alignItems: "center",
    gap: 6,
    borderWidth: 1,
    borderColor: tokens.brand.primarySoft,
    shadowColor: tokens.brand.primary,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.3,
    shadowRadius: 24,
    elevation: 8,
  },
  label: {
    fontSize: 11,
    color: tokens.brand.primary,
    fontWeight: tokens.weight.bold,
    letterSpacing: 1.6,
    marginBottom: 2,
  },
  title: {
    fontSize: 22,
    color: tokens.text.primary,
    fontWeight: tokens.weight.extrabold,
    letterSpacing: -0.3,
  },
  body: {
    fontSize: 14,
    color: tokens.text.secondary,
    fontWeight: tokens.weight.medium,
  },
});

const stackStyles = StyleSheet.create({
  badgeWrap: {
    position: "absolute",
    top: 60,
    left: 0,
    right: 0,
    alignItems: "center",
    zIndex: 101,
  },
  badge: {
    backgroundColor: tokens.brand.primary,
    borderRadius: tokens.radius.full,
    paddingHorizontal: 10,
    paddingVertical: 2,
    transform: [{ translateY: -10 }],
  },
  badgeText: {
    color: tokens.text.onPrimary,
    fontSize: 11,
    fontWeight: tokens.weight.bold,
    letterSpacing: 0.5,
  },
});

const verdictStyles = StyleSheet.create({
  content: {
    flexGrow: 1,
    padding: tokens.spacing.md,
    paddingBottom: tokens.spacing.lg,
    alignItems: "center",
    justifyContent: "center",
  },
  // 2026-05-24 — verdict title Space Grotesk display'a alındı. Önceden
  // fontFamily set edilmemişti (System render); en kritik dopamin
  // moment'inin tipografisi sıradan kalıyordu.
  title: {
    fontSize: 26,
    fontWeight: tokens.weight.extrabold,
    color: tokens.text.primary,
    letterSpacing: -0.5,
    marginBottom: 6,
    fontFamily: tokens.font.display,
  },
  msg: {
    fontSize: 15,
    color: tokens.text.secondary,
    textAlign: "center",
    marginBottom: tokens.spacing.lg,
    lineHeight: 22,
    paddingHorizontal: 16,
    fontFamily: tokens.font.sans,
  },
  scoreCard: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: tokens.brand.secondary,
    paddingHorizontal: 36,
    paddingTop: 40,
    paddingBottom: 24,
    minHeight: 120,
    borderRadius: tokens.radius.lg,
    marginBottom: tokens.spacing.md,
    gap: 4,
    // 2026-05-23 premium pass: floating drop shadow + hairline border.
    // "Skor kartı havada lebeliyor" hissi — verdict en kritik psikolojik
    // moment, premium tactile feedback gerek.
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.06)",
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.45,
    shadowRadius: 18,
    elevation: 10,
    position: "relative",
    overflow: "hidden",
  },
  // Inner highlight — Apple iOS button bevel feel. 1px üst beyaz hat.
  scoreCardHighlight: {
    position: "absolute",
    top: 0,
    left: 1,
    right: 1,
    height: 1,
    backgroundColor: "rgba(255, 255, 255, 0.10)",
    borderTopLeftRadius: tokens.radius.lg,
    borderTopRightRadius: tokens.radius.lg,
  },
  scoreLabel: {
    color: tokens.text.secondaryFixedDim,
    fontSize: 12,
    fontWeight: tokens.weight.bold,
    letterSpacing: 1.4,
    position: "absolute",
    top: 8,
    left: 0,
    right: 0,
    textAlign: "center",
  },
  scoreResult: {
    fontSize: 30,
    color: tokens.brand.primary,
    fontWeight: tokens.weight.black,
    fontFamily: tokens.font.display,
    textAlign: "center",
    paddingHorizontal: 20,
  },
  // CEFR delta card (switch-trigger #3, 2026-05-20).
  // Skor count-up'tan sonra 950ms gecikme ile beliren mini kart.
  // Türk öğrencisinin YDS/IELTS dünyasından geldiği için CEFR = anladığı dil.
  cefrCard: {
    alignSelf: "center",
    paddingHorizontal: 18,
    paddingVertical: 14,
    marginBottom: tokens.spacing.md,
    borderRadius: tokens.radius.lg,
    borderWidth: 1,
    borderColor: tokens.brand.tertiary,
    backgroundColor: tokens.brand.tertiarySoft,
    shadowColor: tokens.brand.tertiary,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.4,
    shadowRadius: 14,
    elevation: 4,
    minWidth: 240,
  },
  cefrLabel: {
    fontSize: 11,
    fontWeight: tokens.weight.bold,
    color: tokens.brand.tertiary,
    letterSpacing: 0.8,
    textTransform: "uppercase",
    textAlign: "center",
    marginBottom: 2,
  },
  cefrValue: {
    fontSize: 28,
    fontWeight: tokens.weight.black,
    color: tokens.text.primary,
    letterSpacing: -0.8,
    textAlign: "center",
    fontFamily: tokens.font.display,
  },
  cefrSub: {
    fontSize: 12,
    color: tokens.text.secondary,
    textAlign: "center",
    marginTop: 4,
  },
  metaRow: {
    flexDirection: "row",
    gap: 10,
    marginBottom: tokens.spacing.md,
  },
  metaPill: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    backgroundColor: tokens.bg.surfaceContainer,
    borderRadius: tokens.radius.full,
    paddingHorizontal: 14,
    paddingVertical: 8,
  },
  metaText: {
    fontSize: 13,
    color: tokens.text.primary,
    fontWeight: tokens.weight.semibold,
  },
  feedback: {
    fontSize: 13,
    color: tokens.text.tertiary,
    textAlign: "center",
    paddingHorizontal: 16,
    lineHeight: 20,
    marginBottom: tokens.spacing.md,
  },
  takeawayCard: {
    width: "100%",
    padding: 16,
    borderRadius: tokens.radius.lg,
    backgroundColor: tokens.bg.surfaceContainer,
    borderWidth: 1,
    borderColor: tokens.border.outlineVariant,
    marginBottom: tokens.spacing.md,
    gap: 12,
  },
  takeawayLabel: {
    fontSize: 11,
    fontWeight: tokens.weight.extrabold,
    color: tokens.brand.primary,
    letterSpacing: 1.4,
  },
  takeawayLine: {
    gap: 4,
  },
  takeawaySmallLabel: {
    fontSize: 11,
    color: tokens.text.tertiary,
    fontWeight: tokens.weight.bold,
  },
  takeawayUser: {
    fontSize: 13,
    color: tokens.text.secondary,
    lineHeight: 18,
    fontStyle: "italic",
  },
  takeawayTarget: {
    fontSize: 15,
    color: tokens.text.primary,
    lineHeight: 21,
    fontWeight: tokens.weight.extrabold,
  },
  // 2026-05-21 — Premium deep feedback gate
  feedbackLocked: {
    width: "100%",
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderRadius: tokens.radius.lg,
    backgroundColor: tokens.bg.surfaceContainer,
    borderWidth: 1.5,
    borderColor: tokens.brand.primary,
    marginBottom: tokens.spacing.md,
    gap: 4,
  },
  feedbackLockedLabel: {
    fontSize: 11,
    fontWeight: tokens.weight.extrabold,
    color: tokens.brand.primary,
    letterSpacing: 1.4,
  },
  feedbackLockedText: {
    fontSize: 13,
    color: tokens.text.primary,
    lineHeight: 18,
  },
  feedbackPremium: {
    width: "100%",
    padding: 14,
    borderRadius: tokens.radius.lg,
    backgroundColor: tokens.brand.tertiarySoft,
    borderLeftWidth: 3,
    borderLeftColor: tokens.brand.tertiary,
    marginBottom: tokens.spacing.md,
    gap: 12,
  },
  feedbackPremiumLabel: {
    fontSize: 11,
    fontWeight: tokens.weight.extrabold,
    color: tokens.brand.tertiary,
    letterSpacing: 1.4,
  },
  mistakeRow: { gap: 4 },
  mistakeReason: {
    fontSize: 13,
    fontWeight: tokens.weight.semibold,
    color: tokens.text.primary,
    lineHeight: 18,
  },
  mistakeFix: { gap: 2, paddingLeft: 8 },
  mistakeWrong: {
    fontSize: 12,
    color: tokens.semantic.error,
    fontStyle: "italic",
  },
  mistakeRight: {
    fontSize: 12,
    color: tokens.brand.tertiary,
    fontWeight: tokens.weight.bold,
  },
  footer: {
    width: "100%",
    marginTop: "auto",
    gap: 10,
  },
  // 2026-05-21 — auto-advance pause hint. Daily plan countdown bar altında
  // tek satır küçük link: "⏸ Mola al". Tıklayınca countdown durur, kullanıcı
  // istediği zaman tekrar manuel basabilir.
  pauseLink: {
    alignSelf: "center",
    paddingHorizontal: 12,
    paddingVertical: 6,
    marginTop: 8,
  },
  pauseLinkText: {
    fontSize: 12,
    fontWeight: tokens.weight.semibold,
    color: tokens.text.tertiary,
    letterSpacing: 0.3,
  },
  // Share row (Adım 5 + Adım 6) — yatay 2 CTA.
  shareRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    justifyContent: "center",
  },
  // Skoru paylaş ikincil CTA — Adım 5 (2026-05-20).
  shareBtn: {
    paddingVertical: 12,
    paddingHorizontal: 18,
    borderRadius: tokens.radius.full,
    borderWidth: 1.5,
    borderColor: tokens.brand.tertiary,
    backgroundColor: tokens.brand.tertiarySoft,
    alignSelf: "center",
  },
  shareBtnPressed: {
    opacity: 0.85,
    transform: [{ scale: 0.97 }],
  },
  shareBtnDisabled: {
    opacity: 0.5,
  },
  shareBtnText: {
    fontSize: 13,
    fontWeight: tokens.weight.extrabold,
    color: tokens.brand.tertiary,
    letterSpacing: 0.4,
  },
});

const confettiStyles = StyleSheet.create({
  layer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: 0, // visual layer only — children are absolute-positioned
    zIndex: 5,
  },
  piece: {
    position: "absolute",
    top: 40,
    fontSize: 28,
    // shadow gives each emoji a subtle pop against dark bg
    textShadowColor: "rgba(0, 0, 0, 0.4)",
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
  },
});
