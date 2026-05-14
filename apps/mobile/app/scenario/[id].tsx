// Scenario runner — 4 phases: SETUP → DRILL (opt) → SCENE → VERDICT.
// Replaces the linear 7-exercise lesson model with a pedagogical arc:
// Presentation → Controlled Practice → Production → Feedback.

import { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { useLocalSearchParams, useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

import { Button } from "../../components/Button";
import { SpeakerButton } from "../../components/SpeakerButton";
import { RoleplayChat } from "../../components/exercises/RoleplayChat";
import { FillBlank } from "../../components/exercises/FillBlank";
import { WordOrder } from "../../components/exercises/WordOrder";
import { SpotMistake } from "../../components/exercises/SpotMistake";
import { Translate } from "../../components/exercises/Translate";
import { AchievementToast } from "../../components/AchievementToast";

import { trackEvent } from "../../lib/analytics";
import { getScenario, computeSceneFluency } from "../../lib/scenario";
import { completeLesson, recordAttempt } from "../../lib/srs";
import { bumpModeFluency, getLessonState } from "../../lib/local-progress";
import type { RoleplayMode } from "../../components/exercises/RoleplayChat";
import { recordLessonCompletion } from "../../lib/daily-quests";
import { evaluateAchievements } from "../../lib/achievements";
import { speak } from "../../lib/tts";
import { hapticImpact, hapticSuccess } from "../../lib/feedback";
import { allScenarios } from "../../lib/scenario";
import { tokens } from "../../theme";
import type { AchievementDef } from "../../lib/achievements";
import type { ExerciseResult } from "../../lib/engine";

type Phase = "setup" | "drill" | "scene" | "verdict";

function findNextScenario(skillId: string, currentId: string): string | null {
  const inSkill = allScenarios()
    .filter((s) => s.skill_id === skillId)
    .sort((a, b) => a.id.localeCompare(b.id));
  const idx = inSkill.findIndex((s) => s.id === currentId);
  if (idx === -1) return null;
  return inSkill[idx + 1]?.id ?? null;
}

export default function ScenarioScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();
  const scenario = id ? getScenario(id) : null;

  const [phase, setPhase] = useState<Phase>("setup");
  const [setupIdx, setSetupIdx] = useState(0);
  const [drillIdx, setDrillIdx] = useState(0);
  const [sceneResult, setSceneResult] = useState<ExerciseResult | null>(null);
  const [roleplayMode, setRoleplayMode] = useState<RoleplayMode>("multi-choice");

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
      const earned = await evaluateAchievements();
      if (earned.length > 0) setUnlockQueue(earned);
    })();
  }, [phase, sceneResult, scenario]);

  // Drain achievement queue
  useEffect(() => {
    if (unlockedToast === null && unlockQueue.length > 0) {
      setUnlockedToast(unlockQueue[0]!);
      setUnlockQueue((q) => q.slice(1));
    }
  }, [unlockedToast, unlockQueue]);

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
    if (phase === "setup" && setupIdx === 0) {
      onExitConfirmed();
      return;
    }
    Alert.alert(
      "Sahneden çık?",
      "İlerlemen kaydedilmedi. Çıkmak istediğine emin misin?",
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
      <StatusBar style="dark" />
      <KeyboardAvoidingView
        style={styles.flex}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <View style={styles.header}>
          <Pressable onPress={handleExit} style={styles.exitBtn}>
            <Text style={styles.exitText}>← Çık</Text>
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

        {phase === "setup" && (
          <SetupView
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
            />
          </View>
        )}

        {phase === "verdict" && sceneResult && (
          <VerdictView
            scenario={scenario}
            sceneResult={sceneResult}
            hasNext={!!nextScenario}
            onContinue={() => {
              if (nextScenario) {
                router.replace(`/scenario/${nextScenario}` as never);
              } else {
                router.replace("/feed");
              }
            }}
          />
        )}

        <AchievementToast
          achievement={unlockedToast}
          onDismiss={() => setUnlockedToast(null)}
        />
      </KeyboardAvoidingView>
    </SafeAreaView>
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

function PhaseDot({ active, done }: { active: boolean; done: boolean }) {
  return (
    <View
      style={[
        phaseStyles.dot,
        done && phaseStyles.dotDone,
        active && phaseStyles.dotActive,
      ]}
    />
  );
}

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
  return (
    <ScrollView contentContainerStyle={setupStyles.content}>
      <Text style={setupStyles.label}>
        KURULUM · {stepIndex + 1}/{total}
      </Text>

      <View style={setupStyles.hero}>
        <View style={setupStyles.wordRow}>
          <Text style={setupStyles.word}>{phrase.en}</Text>
          <SpeakerButton text={phrase.en} size="lg" />
        </View>
        <View style={setupStyles.divider} />
        <Text style={setupStyles.tr}>{phrase.tr}</Text>
      </View>

      {phrase.example && (
        <View style={setupStyles.exampleBox}>
          <View style={setupStyles.exampleHeader}>
            <Text style={setupStyles.exampleLabel}>Örnek kullanım</Text>
            <SpeakerButton text={phrase.example} size="sm" />
          </View>
          <Text style={setupStyles.exampleEn}>"{phrase.example}"</Text>
          {phrase.example_tr && (
            <Text style={setupStyles.exampleTr}>"{phrase.example_tr}"</Text>
          )}
        </View>
      )}

      <View style={setupStyles.footer}>
        <Button
          label={stepIndex + 1 >= total ? "Sahneye geç" : "Devam"}
          onPress={onNext}
        />
      </View>
    </ScrollView>
  );
}

function VerdictView({
  scenario,
  sceneResult,
  hasNext,
  onContinue,
}: {
  scenario: { mode: string; title: string };
  sceneResult: ExerciseResult;
  hasNext: boolean;
  onContinue: () => void;
}) {
  const { band } = computeSceneFluency([sceneResult.score]);
  const verdictMsg =
    band === "high"
      ? "Bu sahneyi artık akıcı yürütüyorsun."
      : band === "mid"
      ? "Sağlam başlangıç. Sahne ileride tekrar gelecek."
      : "Bir tur daha kazandırır. Sahne yarın yine planda.";

  return (
    <ScrollView contentContainerStyle={verdictStyles.content}>
      <Text style={verdictStyles.title}>Sahne tamamlandı</Text>
      <Text style={verdictStyles.msg}>{verdictMsg}</Text>

      <View style={verdictStyles.scoreCard}>
        <Text style={verdictStyles.scoreLabel}>Akıcılık</Text>
        <Text style={verdictStyles.scoreNum}>{sceneResult.score}</Text>
        <Text style={verdictStyles.scoreOf}>/ 100</Text>
      </View>

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
      </View>
    </ScrollView>
  );
}

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
    backgroundColor: "rgba(246, 255, 0, 0.14)",
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
  },
});
