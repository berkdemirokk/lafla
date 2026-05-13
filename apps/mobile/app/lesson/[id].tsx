// Lesson screen — wires lesson runner state to exercise UIs.
// Looks up lesson by ID from cafeLessons registry; supports all 7 types.

import { useState } from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useLocalSearchParams, useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

import { ProgressDots } from "../../components/ProgressDots";
import { VocabTile } from "../../components/exercises/VocabTile";
import { Translate } from "../../components/exercises/Translate";
import { FillBlank } from "../../components/exercises/FillBlank";
import { WordOrder } from "../../components/exercises/WordOrder";
import { SpotMistake } from "../../components/exercises/SpotMistake";
import { RoleplayChat } from "../../components/exercises/RoleplayChat";
import { RecapQuiz } from "../../components/exercises/RecapQuiz";
import { LessonComplete } from "../../components/LessonComplete";

import {
  startLesson,
  applyResult,
  type LessonProgress,
  type ExerciseResult,
} from "../../lib/engine";
import { getLesson } from "../../data/lessons";
import { tokens } from "../../theme";

export default function LessonScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();

  const lesson = id ? getLesson(id) : undefined;
  if (!lesson) {
    return <Placeholder lessonId={id} onBack={() => router.back()} />;
  }

  const [progress, setProgress] = useState<LessonProgress>(() =>
    startLesson(lesson),
  );

  if (progress.completed) {
    return (
      <LessonComplete
        progress={progress}
        onContinue={() => router.replace("/feed")}
      />
    );
  }

  const exercise = lesson.exercises[progress.current_index]!;

  const onExerciseDone = (result: ExerciseResult) => {
    setProgress((prev) => applyResult(lesson, prev, result));
  };

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar style="dark" />

      <View style={styles.header}>
        <View style={styles.topRow}>
          <Pressable style={styles.exitBtn} onPress={() => router.back()}>
            <Text style={styles.exitText}>← Çık</Text>
          </Pressable>
          <Text style={styles.lessonTitle} numberOfLines={1}>
            {lesson.title}
          </Text>
          <View style={styles.spacer} />
        </View>

        <ProgressDots
          total={lesson.exercises.length}
          currentIndex={progress.current_index}
        />
      </View>

      <View style={styles.content}>
        <ExerciseRenderer
          key={String(exercise.id)}
          exercise={exercise}
          onComplete={onExerciseDone}
        />
      </View>
    </SafeAreaView>
  );
}

function ExerciseRenderer({
  exercise,
  onComplete,
}: {
  exercise: Record<string, unknown>;
  onComplete: (result: ExerciseResult) => void;
}) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const ex = exercise as any;
  switch (ex.type) {
    case "vocab_tile":
      return (
        <VocabTile
          wordOrPhrase={ex.word_or_phrase}
          trTranslation={ex.tr_translation}
          example={ex.example}
          exampleTr={ex.example_tr}
          onComplete={onComplete}
        />
      );
    case "translate":
      return (
        <Translate
          source={ex.source}
          target={ex.target}
          acceptedVariants={ex.accepted_variants ?? []}
          direction={ex.direction}
          trHint={ex.tr_hint}
          onComplete={onComplete}
        />
      );
    case "fill_blank":
      return (
        <FillBlank
          sentence={ex.sentence_template}
          answer={ex.answer}
          distractors={ex.distractors}
          trHint={ex.tr_hint}
          onComplete={onComplete}
        />
      );
    case "word_order":
      return (
        <WordOrder
          scrambledTokens={ex.scrambled_tokens}
          correctSentence={ex.correct_sentence}
          trTranslation={ex.tr_translation}
          onComplete={onComplete}
        />
      );
    case "spot_mistake":
      return (
        <SpotMistake
          incorrectSentence={ex.incorrect_sentence}
          correctSentence={ex.correct_sentence}
          trExplanation={ex.tr_explanation}
          onComplete={onComplete}
        />
      );
    case "roleplay_chat":
      return (
        <RoleplayChat
          scenarioDescription={ex.scenario_description}
          npcRole={ex.npc_role}
          setting={ex.setting}
          turns={ex.turns}
          onComplete={onComplete}
        />
      );
    case "recap_quiz":
      return <RecapQuiz questions={ex.questions} onComplete={onComplete} />;
    default:
      return (
        <View>
          <Text style={{ color: tokens.text.primary }}>
            Bilinmeyen alıştırma tipi: {ex.type}
          </Text>
        </View>
      );
  }
}

function Placeholder({
  lessonId,
  onBack,
}: {
  lessonId?: string;
  onBack: () => void;
}) {
  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar style="dark" />
      <View style={styles.placeholder}>
        <Text style={styles.placeholderIcon}>🚧</Text>
        <Text style={styles.placeholderTitle}>Ders Henüz Hazır Değil</Text>
        <Text style={styles.placeholderId}>{lessonId}</Text>
        <Text style={styles.placeholderDesc}>
          Bu ders yakında. Hazır olanlar: order.cafe.1.1 - 1.4, order.restaurant.2.1.
        </Text>
        <Pressable style={styles.backBtn} onPress={onBack}>
          <Text style={styles.backBtnText}>Akışa Geri Dön</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: tokens.bg.app,
  },
  header: {
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 8,
  },
  topRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 24,
  },
  exitBtn: { width: 60 },
  exitText: {
    color: tokens.text.secondary,
    fontSize: 14,
    fontWeight: tokens.weight.semibold,
  },
  lessonTitle: {
    flex: 1,
    textAlign: "center",
    color: tokens.text.secondary,
    fontSize: 14,
    fontWeight: tokens.weight.semibold,
    letterSpacing: 1.2,
    textTransform: "uppercase",
  },
  spacer: { width: 60 },
  content: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 32,
    paddingBottom: 16,
  },
  placeholder: {
    flex: 1,
    padding: 32,
    alignItems: "center",
    justifyContent: "center",
  },
  placeholderIcon: { fontSize: 64, marginBottom: 16 },
  placeholderTitle: {
    fontSize: 22,
    fontWeight: tokens.weight.extrabold,
    color: tokens.text.primary,
    textAlign: "center",
    marginBottom: 8,
  },
  placeholderId: {
    fontSize: 13,
    color: tokens.text.secondary,
    marginBottom: 24,
  },
  placeholderDesc: {
    fontSize: 14,
    color: tokens.text.secondary,
    textAlign: "center",
    lineHeight: 22,
    marginBottom: 32,
  },
  backBtn: {
    backgroundColor: tokens.bg.surfaceContainer,
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: tokens.radius.full,
  },
  backBtnText: {
    color: tokens.text.primary,
    fontSize: 16,
    fontWeight: tokens.weight.bold,
  },
});
