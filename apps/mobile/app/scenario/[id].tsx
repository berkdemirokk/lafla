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
import { StatusBar } from "expo-status-bar";
import { useLocalSearchParams, useRouter } from "expo-router";
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
import { AchievementToast } from "../../components/AchievementToast";

import { trackEvent } from "../../lib/analytics";
import { getScenario, computeSceneFluency } from "../../lib/scenario";
import {
  recordCefrProgress,
  type CefrProgressDelta,
} from "../../lib/cefr-level";
import { ShareCard } from "../../components/ShareCard";
import { captureRef } from "react-native-view-shot";
import * as Sharing from "expo-sharing";
import { completeLesson, recordAttempt } from "../../lib/srs";
import {
  bumpModeFluency,
  getLessonState,
  getLocalProfile,
} from "../../lib/local-progress";
import type { RoleplayMode } from "../../components/exercises/RoleplayChat";
import { recordLessonCompletion } from "../../lib/daily-quests";
import { checkUnlocksAfterLesson } from "../../lib/achievements";
import { speak } from "../../lib/tts";
import { hapticImpact, hapticSuccess } from "../../lib/feedback";
import { allScenarios } from "../../lib/scenario";
import { tokens } from "../../theme";
import type { AchievementDef } from "../../lib/achievements";
import type { ExerciseResult } from "../../lib/engine";

type Phase = "setup" | "drill" | "scene" | "verdict";

// Display name persisted by onboarding under `lafla.displayName`. Used by
// the scene phase (NPC opener personalization) and the verdict screen
// (Turkish verdict copy injection).
const K_DISPLAY_NAME = "lafla.displayName";

// Sanitize a display name for safe inline rendering. Strips control chars,
// collapses whitespace, trims, drops quote chars, and visually truncates
// long names. Casing is preserved verbatim. The stored value is unchanged.
function sanitizeName(raw: string | null | undefined): string {
  if (!raw) return "";
  // eslint-disable-next-line no-control-regex
  let cleaned = raw.replace(/[ -]/g, "");
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

export default function ScenarioScreen() {
  const { id, intro } = useLocalSearchParams<{
    id: string;
    intro?: string;
  }>();
  const router = useRouter();
  const scenario = id ? getScenario(id) : null;
  // 2026-05-20 switch-trigger #1: ?intro=true onboarding sonrası force-first
  // sahneden gelir. VERDICT bittiğinde "Devam" home yerine paywall'a gider
  // ve `lafla.intro.tinder.completed` true yazılır — bir daha tetiklenmez.
  const isIntro = intro === "true";

  const [phase, setPhase] = useState<Phase>("setup");
  const [setupIdx, setSetupIdx] = useState(0);
  const [drillIdx, setDrillIdx] = useState(0);
  const [sceneResult, setSceneResult] = useState<ExerciseResult | null>(null);
  const [roleplayMode, setRoleplayMode] = useState<RoleplayMode>("multi-choice");
  // Personalization: read once on mount, sanitized for inline injection.
  // Empty string = no name set; both RoleplayChat and VerdictView treat ""
  // as "render the un-personalized version" so this is safe to read late.
  const [displayName, setDisplayName] = useState<string>("");
  // First-time scene overlay — shown once per scenario load, on initial entry
  // to the scene phase. Auto-dismisses after 1200ms or on tap.
  const [showSceneIntro, setShowSceneIntro] = useState(false);
  const sceneIntroShownRef = useRef(false);

  // Hydrate the user's display name once on mount. We don't reload it on
  // every focus because the scenario is a single linear flow — if the user
  // edits their name in Profile and comes back, they'll get the new value
  // on the next scenario open, which is fine for a personalization touch.
  useEffect(() => {
    (async () => {
      try {
        const raw = await AsyncStorage.getItem(K_DISPLAY_NAME);
        setDisplayName(sanitizeName(raw));
      } catch {
        setDisplayName("");
      }
    })();
  }, []);

  // On mount: decide roleplay mode based on previous attempts
  useEffect(() => {
    if (!scenario) return;
    (async () => {
      const state = await getLessonState(scenario.id);
      const attempts = state?.total_attempts ?? 0;
      if (attempts >= 2) setRoleplayMode("free");
      else if (attempts === 1) setRoleplayMode("hinted");
      else setRoleplayMode("multi-choice");
    })();
    void trackEvent("scenario_started", {
      scenario_id: scenario.id,
      skill_id: scenario.skill_id,
      mode: scenario.mode,
    }).catch(() => {});
  }, [scenario]);
  const [unlockedToast, setUnlockedToast] = useState<AchievementDef | null>(null);
  const [unlockQueue, setUnlockQueue] = useState<AchievementDef[]>([]);
  const savedRef = useRef(false);

  // Auto-speak the current setup phrase
  useEffect(() => {
    if (phase !== "setup" || !scenario) return;
    const phrase = scenario.setup[setupIdx];
    if (!phrase) return;
    const t = setTimeout(() => speak(phrase.en), 400);
    return () => clearTimeout(t);
  }, [phase, setupIdx, scenario]);

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
    const accuracy = sceneResult.score / 100;
    void trackEvent("scenario_completed", {
      scenario_id: scenario.id,
      skill_id: scenario.skill_id,
      mode: scenario.mode,
      score: sceneResult.score,
    }).catch(() => {});
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
        sceneResult.score,
        scenario.mode,
      ).catch(() => [] as AchievementDef[]);
      if (earned.length > 0) setUnlockQueue(earned);

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
      // Intro sahnesi dahil — kullanıcı ilk Tinder cümlelerini hatırlasın.
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
  }, [phase, sceneResult, scenario, isIntro]);

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

  const onExitConfirmed = () => router.back();
  const handleExit = () => {
    // SETUP is safe to abandon outright — nothing persisted yet, no scene
    // started. VERDICT is post-save, also safe. DRILL and SCENE always
    // confirm because progress is in-flight and won't be retained.
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

  const advanceSetup = () => {
    hapticImpact("light");
    if (setupIdx + 1 < scenario.setup.length) {
      setSetupIdx(setupIdx + 1);
    } else {
      // After setup: drill phase if warmups exist, otherwise direct to scene
      setPhase(scenario.warmups.length > 0 ? "drill" : "scene");
    }
  };

  const advanceDrill = () => {
    if (drillIdx + 1 < scenario.warmups.length) {
      setDrillIdx(drillIdx + 1);
    } else {
      setPhase("scene");
    }
  };

  const skipDrill = () => {
    hapticImpact("light");
    setPhase("scene");
  };

  const onSceneComplete = (result: ExerciseResult) => {
    setSceneResult(result);
    recordAttempt({
      exercise_id: `${scenario.id}.scene`,
      lesson_id: scenario.id,
      skill_id: scenario.skill_id,
      exercise_type: "roleplay_chat",
      is_correct: result.score >= 60,
    }).catch(() => {});
    hapticSuccess();
    setPhase("verdict");
  };

  const nextScenario = findNextScenario(scenario.skill_id, scenario.id);

  return (
    <SafeAreaView style={styles.safe} edges={["top", "bottom"]}>
      <StatusBar style="light" />
      <KeyboardAvoidingView
        style={styles.flex}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <View style={styles.header}>
          <Pressable onPress={handleExit} style={styles.exitBtn}>
            <Text style={styles.exitText}>← Geri</Text>
          </Pressable>
          <View style={styles.phaseDots}>
            <PhaseDot
              active={phase === "setup"}
              done={phase !== "setup"}
            />
            <PhaseDot
              active={phase === "drill"}
              done={phase === "scene" || phase === "verdict"}
            />
            <PhaseDot
              active={phase === "scene"}
              done={phase === "verdict"}
            />
            <PhaseDot active={phase === "verdict"} done={false} />
          </View>
          <View style={styles.spacer} />
        </View>

        {/* PhaseShell cross-fades between phase renders so the swap from
            setup → drill → scene → verdict feels deliberate, not abrupt. */}
        <PhaseShell phaseKey={phase} style={styles.flex}>
          {phase === "setup" && (
            <SetupView
              key={`setup-${setupIdx}`}
              phrase={scenario.setup[setupIdx]!}
              stepIndex={setupIdx}
              total={scenario.setup.length}
              onNext={advanceSetup}
            />
          )}

          {phase === "drill" && scenario.warmups[drillIdx] && (
            <View style={styles.drillWrap}>
              <View style={styles.drillHeader}>
                <Text style={styles.drillLabel}>
                  ALIŞTIRMA · {drillIdx + 1}/{scenario.warmups.length}
                </Text>
                <Pressable onPress={skipDrill} hitSlop={8}>
                  <Text style={styles.drillSkip}>Sahneye atla</Text>
                </Pressable>
              </View>
              <View style={styles.drillBody}>
                <DrillRenderer
                  exercise={scenario.warmups[drillIdx]!}
                  onComplete={advanceDrill}
                />
              </View>
            </View>
          )}

          {phase === "scene" && (
            <View style={styles.sceneWrap}>
              <RoleplayChat
                scenarioDescription={scenario.scene.description}
                npcRole={scenario.scene.npc_role}
                setting={scenario.scene.setting}
                turns={scenario.scene.turns}
                onComplete={onSceneComplete}
                mode={roleplayMode}
                seed={scenario.id}
                userName={displayName}
              />
            </View>
          )}

          {phase === "verdict" && sceneResult && (
            <VerdictView
              scenario={scenario}
              sceneResult={sceneResult}
              hasNext={!!nextScenario}
              userName={displayName}
              onContinue={() => {
                // Switch-trigger #1 — force-first intro scene biterse:
                // 1) "completed" flag yaz (bir daha tetiklenmez)
                // 2) Paywall'a yönlendir (kullanıcı ilk skoru ile Speak+
                //    teklifini görür — value-first, value-after pattern)
                if (isIntro) {
                  void AsyncStorage.setItem(
                    "lafla.intro.tinder.completed",
                    "true",
                  ).catch(() => {});
                  router.replace("/paywall?from=intro" as never);
                  return;
                }
                if (nextScenario) {
                  router.replace(`/scenario/${nextScenario}` as never);
                } else {
                  router.replace("/home" as never);
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
    default:
      // recap_quiz and others: auto-skip (covered by setup/scene)
      onComplete({
        exercise_id: "skipped",
        exercise_type: exercise.type,
        correct: true,
        score: 100,
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
    <View style={phaseStyles.dot}>
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
  phrase: { en: string; tr: string; example?: string; example_tr?: string };
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
      <Text style={setupStyles.label}>
        KURULUM · {stepIndex + 1}/{total}
      </Text>

      <Pressable onPress={replayAudio} accessibilityRole="button">
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
      <Pressable onPress={onDismiss} style={introStyles.fill}>
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
}: {
  scenario: { mode: string; title: string };
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
}) {
  // Share card ref — view-shot ile capture edilir. Off-screen pozisyonda
  // render edilir (görünmez ama mounted), kullanıcı "Skoru paylaş"a basınca
  // captureRef + expo-sharing zincirine alınır.
  const shareCardRef = useRef<View>(null);
  const [sharing, setSharing] = useState(false);
  const { band } = computeSceneFluency([sceneResult.score]);
  // Verdict copy varies by band AND by whether we have a name to address
  // the user with. The personalized variants change the leading clause to
  // "Aferin {name}," (high) or "{name}," (mid/low) and keep the rest of
  // the sentence identical. Falls back to the original generic copy when
  // userName is empty so first-launch users still see something sensible.
  const verdictMsg = (() => {
    if (userName) {
      if (band === "high") {
        return `Aferin ${userName}, bu sahneyi artık akıcı yürütüyorsun.`;
      }
      if (band === "mid") {
        return `${userName}, sağlam başlangıç. Sahne ileride tekrar gelecek.`;
      }
      return `${userName}, bir tur daha kazandırır. Sahne yarın yine planda.`;
    }
    if (band === "high") return "Bu sahneyi artık akıcı yürütüyorsun.";
    if (band === "mid")
      return "Sağlam başlangıç. Sahne ileride tekrar gelecek.";
    return "Bir tur daha kazandırır. Sahne yarın yine planda.";
  })();

  // Count-up animation — score climbs from 0 to its final value over ~900ms.
  // setInterval on RAF-ish cadence keeps it readable without Reanimated; the
  // verdict screen is short-lived enough that a plain interval is acceptable.
  const [displayedScore, setDisplayedScore] = useState(0);
  useEffect(() => {
    const target = sceneResult.score;
    if (target <= 0) {
      setDisplayedScore(0);
      return;
    }
    const steps = 40;
    const stepMs = 22;
    let i = 0;
    const id = setInterval(() => {
      i += 1;
      // Ease-out curve so the climb decelerates as it approaches the target.
      const t = Math.min(1, i / steps);
      const eased = 1 - Math.pow(1 - t, 3);
      const value = Math.round(target * eased);
      setDisplayedScore(value);
      if (i >= steps) clearInterval(id);
    }, stepMs);
    return () => clearInterval(id);
  }, [sceneResult.score]);

  // "Level achieved" pulse on the score card once the count-up finishes.
  // Only triggers at score ≥ 75 so it stays a meaningful reward rather
  // than a default flourish that fires every verdict.
  const pulse = useSharedValue(1);
  useEffect(() => {
    if (sceneResult.score < 75) return;
    // Wait for the count-up to finish (≈900ms) before pulsing so the
    // user reads the final number first.
    pulse.value = withDelay(
      950,
      withSequence(
        withTiming(1.06, { duration: 220, easing: Easing.out(Easing.cubic) }),
        withSpring(1, { damping: 8, stiffness: 180 }),
      ),
    );
  }, [sceneResult.score, pulse]);

  const pulseStyle = useAnimatedStyle(() => ({
    transform: [{ scale: pulse.value }],
  }));

  // Confetti is rare and rewarding — only at ≥90. We seed five emojis
  // with randomized horizontal offset, delay, drift, and final translateY.
  const showConfetti = sceneResult.score >= 90;

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
    (async () => {
      const d = await recordCefrProgress(sceneResult.score).catch(() => null);
      if (!d) return;
      setCefrDelta(d);
      // Animate from before → after over ~700ms starting after the score count-up
      const target = d.after;
      const start = d.before;
      const totalMs = 700;
      const steps = 30;
      const stepMs = totalMs / steps;
      const startDelay = 950;
      const startTimer = setTimeout(() => {
        setDisplayedProgress(start);
        let i = 0;
        const id = setInterval(() => {
          i += 1;
          const t = Math.min(1, i / steps);
          const eased = 1 - Math.pow(1 - t, 3);
          const value = start + (target - start) * eased;
          setDisplayedProgress(value);
          if (i >= steps) clearInterval(id);
        }, stepMs);
      }, startDelay);
      return () => clearTimeout(startTimer);
    })();
  }, [sceneResult.score]);

  return (
    <ScrollView contentContainerStyle={verdictStyles.content}>
      <Text style={verdictStyles.title}>Sahne tamamlandı</Text>
      <Text style={verdictStyles.msg}>{verdictMsg}</Text>

      <Animated.View style={[verdictStyles.scoreCard, pulseStyle]}>
        <Text style={verdictStyles.scoreLabel}>Akıcılık</Text>
        <Text style={verdictStyles.scoreNum}>{displayedScore}</Text>
        <Text style={verdictStyles.scoreOf}>/ 100</Text>
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

      {sceneResult.feedback && (
        <Text style={verdictStyles.feedback}>{sceneResult.feedback}</Text>
      )}

      <View style={verdictStyles.footer}>
        <Button
          label={hasNext ? "Sıradaki sahne" : "Akışa dön"}
          onPress={onContinue}
          stacked
        />
        {/* Skoru paylaş — Adım 5 (2026-05-20).
            Verdict altında ikincil CTA. Story-friendly 1080×1920 card
            view-shot ile capture, expo-sharing ile native share sheet. */}
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
                    dialogTitle: "Skoru paylaş",
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
              {sharing ? "Hazırlanıyor..." : "📸 Skoru paylaş"}
            </Text>
          </Pressable>

          {/* Arkadaşına gönder — Adım 6 (2026-05-20).
              Native Share API → text + universal link. Arkadaş tıklayınca
              docs/index.html'daki script `?scene=` paramı yakalar, app
              installed ise deep link, değilse App Store fallback. */}
          <Pressable
            onPress={async () => {
              const shareUrl = `https://berkdemirokk.github.io/lafla/?scene=${encodeURIComponent(scenarioIdForShare(scenario.title))}`;
              const scoreLine =
                sceneResult.score >= 75
                  ? `${sceneResult.score}/100 aldım 💪`
                  : sceneResult.score >= 50
                    ? `${sceneResult.score}/100 — fena değil`
                    : `Sen daha iyisini yaparsın 😄`;
              const message = `Lafla'da bu sahneyi denedim, ${scoreLine} — sen de bak: ${shareUrl}`;
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
          score={sceneResult.score}
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
  label: {
    fontSize: 12,
    color: tokens.text.tertiary,
    fontWeight: tokens.weight.bold,
    letterSpacing: 1.4,
    textAlign: "center",
    marginBottom: tokens.spacing.md,
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
  title: {
    fontSize: 26,
    fontWeight: tokens.weight.extrabold,
    color: tokens.text.primary,
    letterSpacing: -0.5,
    marginBottom: 6,
  },
  msg: {
    fontSize: 15,
    color: tokens.text.secondary,
    textAlign: "center",
    marginBottom: tokens.spacing.lg,
    lineHeight: 22,
    paddingHorizontal: 16,
  },
  scoreCard: {
    flexDirection: "row",
    alignItems: "baseline",
    backgroundColor: tokens.brand.secondary,
    paddingHorizontal: 36,
    paddingVertical: 24,
    borderRadius: tokens.radius.base,
    marginBottom: tokens.spacing.md,
    gap: 4,
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
  scoreNum: {
    fontSize: 64,
    fontWeight: tokens.weight.black,
    color: tokens.brand.primary,
    letterSpacing: -2,
  },
  scoreOf: {
    fontSize: 22,
    color: tokens.text.secondaryFixedDim,
    fontWeight: tokens.weight.bold,
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
  footer: {
    width: "100%",
    marginTop: "auto",
    gap: 10,
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
