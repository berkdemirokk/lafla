// Lesson screen — wires together the lesson runner state with exercise UIs.
// For MVP loads cafe.1.1 hardcoded. Backend integration comes later.

import { useState } from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

import { ProgressDots } from "../../components/ProgressDots";
import { VocabTile } from "../../components/exercises/VocabTile";
import { Translate } from "../../components/exercises/Translate";
import { FillBlank } from "../../components/exercises/FillBlank";
import { SpotMistake } from "../../components/exercises/SpotMistake";
import { RecapQuiz } from "../../components/exercises/RecapQuiz";
import { LessonComplete } from "../../components/LessonComplete";

import {
  startLesson,
  applyResult,
  type LessonProgress,
  type ExerciseResult,
} from "../../lib/engine";
import { cafeLesson_1_1 } from "../../data/cafe-lesson";
import { tokens } from "../../theme";

export default function LessonScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();

  // For MVP, only cafe.1.1 is wired up. Other IDs show placeholder.
  if (id !== "order.cafe.1.1") {
    return <Placeholder lessonId={id} onBack={() => router.back()} />;
  }

  const lesson = cafeLesson_1_1;
  const [progress, setProgress] = useState<LessonProgress>(() =>
    startLesson(lesson),
  );

  if (progress.completed) {
    return (
      <SafeAreaView style={styles.safe}>
        <LessonComplete
          progress={progress}
          onContinue={() => router.replace("/feed")}
        />
      </SafeAreaView>
    );
  }

  const exercise = lesson.exercises[progress.current_index]!;

  const onExerciseDone = (result: ExerciseResult) => {
    setProgress((prev) => applyResult(lesson, prev, result));
  };

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.header}>
        <Pressable onPress={() => router.back()} hitSlop={12}>
          <Text style={styles.back}>← Çık</Text>
        </Pressable>
        <Text style={styles.title} numberOfLines={1}>
          {lesson.title}
        </Text>
        <View style={{ width: 60 }} />
      </View>

      <View style={styles.content}>
        <ProgressDots
          total={lesson.exercises.length}
          currentIndex={progress.current_index}
        />

        <ExerciseRenderer
          key={exercise.id}
          exercise={exercise}
          onComplete={onExerciseDone}
        />
      </View>
    </SafeAreaView>
  );
}

// ------------------------------------------------------------
// Dispatcher — picks the right exercise UI based on type
// ------------------------------------------------------------
function ExerciseRenderer({
  exercise,
  onComplete,
}: {
  exercise: (typeof cafeLesson_1_1.exercises)[number];
  onComplete: (result: ExerciseResult) => void;
}) {
  switch (exercise.type) {
    case "vocab_tile":
      return (
        <VocabTile
          wordOrPhrase={exercise.word_or_phrase}
          trTranslation={exercise.tr_translation}
          example={exercise.example}
          exampleTr={exercise.example_tr}
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
    case "spot_mistake":
      return (
        <SpotMistake
          incorrectSentence={exercise.incorrect_sentence}
          correctSentence={exercise.correct_sentence}
          trExplanation={exercise.tr_explanation}
          onComplete={onComplete}
        />
      );
    case "recap_quiz":
      return <RecapQuiz questions={exercise.questions} onComplete={onComplete} />;
  }
}

// ------------------------------------------------------------
function Placeholder({
  lessonId,
  onBack,
}: {
  lessonId?: string;
  onBack: () => void;
}) {
  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.placeholder}>
        <Text style={styles.placeholderIcon}>🚧</Text>
        <Text style={styles.placeholderTitle}>Ders Henüz Hazır Değil</Text>
        <Text style={styles.placeholderId}>{lessonId}</Text>
        <Text style={styles.placeholderDesc}>
          Şu an sadece "order.cafe.1.1" çalışıyor. Diğer içerikler yakında.
        </Text>
        <Pressable style={styles.placeholderBtn} onPress={onBack}>
          <Text style={styles.placeholderBtnText}>Akışa Geri Dön</Text>
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
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingTop: 8,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: tokens.border.default,
  },
  back: {
    color: tokens.text.secondary,
    fontSize: 15,
    fontWeight: tokens.weight.semibold,
    width: 60,
  },
  title: {
    flex: 1,
    textAlign: "center",
    color: tokens.text.primary,
    fontSize: 14,
    fontWeight: tokens.weight.bold,
  },
  content: {
    flex: 1,
    padding: 24,
  },
  placeholder: {
    flex: 1,
    padding: 32,
    alignItems: "center",
    justifyContent: "center",
  },
  placeholderIcon: {
    fontSize: 64,
    marginBottom: 16,
  },
  placeholderTitle: {
    fontSize: 22,
    fontWeight: tokens.weight.extrabold,
    color: tokens.text.primary,
    textAlign: "center",
    marginBottom: 8,
  },
  placeholderId: {
    fontSize: 13,
    color: tokens.text.tertiary,
    fontFamily: "monospace",
    marginBottom: 24,
  },
  placeholderDesc: {
    fontSize: 14,
    color: tokens.text.secondary,
    textAlign: "center",
    lineHeight: 22,
    marginBottom: 32,
  },
  placeholderBtn: {
    backgroundColor: tokens.bg.card,
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 16,
  },
  placeholderBtnText: {
    color: tokens.text.primary,
    fontSize: 16,
    fontWeight: tokens.weight.bold,
  },
});
