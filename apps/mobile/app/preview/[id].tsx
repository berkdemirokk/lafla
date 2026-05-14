// Lesson preview — show what user will learn before starting.

import { useMemo } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { useLocalSearchParams, useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button } from "../../components/Button";
import { SpeakerButton } from "../../components/SpeakerButton";
import { getLesson } from "../../data/lessons";
import { tokens } from "../../theme";

const TYPE_LABELS: Record<string, { emoji: string; label: string }> = {
  vocab_tile: { emoji: "📖", label: "Kelime kartı" },
  translate: { emoji: "🔁", label: "Çeviri" },
  fill_blank: { emoji: "✍️", label: "Boşluk doldur" },
  word_order: { emoji: "🧩", label: "Kelime sırala" },
  spot_mistake: { emoji: "🔍", label: "Hatayı bul" },
  roleplay_chat: { emoji: "💬", label: "Roleplay sohbet" },
  recap_quiz: { emoji: "❓", label: "Mini quiz" },
};

export default function LessonPreview() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();
  const lesson = id ? getLesson(id) : undefined;

  const previewWord = useMemo(() => {
    if (!lesson) return null;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const vocab = (lesson.exercises as any[]).find(
      (e) => e.type === "vocab_tile",
    );
    if (!vocab) return null;
    return {
      en: vocab.word_or_phrase as string,
      tr: vocab.tr_translation as string,
    };
  }, [lesson]);

  if (!lesson) {
    return (
      <SafeAreaView style={styles.safe} edges={["top", "bottom"]}>
        <View style={styles.notFound}>
          <Text style={styles.notFoundTitle}>Ders bulunamadı</Text>
          <Button label="Geri" onPress={() => router.back()} />
        </View>
      </SafeAreaView>
    );
  }

  const exerciseTypes = lesson.exercises
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    .map((e: any) => e.type as string);
  const uniqueTypes = [...new Set(exerciseTypes)];

  return (
    <SafeAreaView style={styles.safe} edges={["top", "bottom"]}>
      <StatusBar style="dark" />

      <View style={styles.header}>
        <Pressable onPress={() => router.back()} style={styles.backBtn}>
          <Text style={styles.backText}>← Geri</Text>
        </Pressable>
        <Text style={styles.headerTitle}>Önizleme</Text>
        <View style={styles.spacer} />
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.skillTag}>{lesson.skill_id.toUpperCase()}</Text>
        <Text style={styles.lessonTitle}>{lesson.title}</Text>
        <Text style={styles.lessonDesc}>{lesson.description}</Text>

        <View style={styles.metaRow}>
          <View style={styles.metaPill}>
            <Text style={styles.metaEmoji}>⏱</Text>
            <Text style={styles.metaText}>
              {lesson.estimated_minutes ?? 5} dk
            </Text>
          </View>
          <View style={styles.metaPill}>
            <Text style={styles.metaEmoji}>🎯</Text>
            <Text style={styles.metaText}>
              {lesson.exercises.length} alıştırma
            </Text>
          </View>
        </View>

        {previewWord && (
          <View style={styles.previewCard}>
            <Text style={styles.previewLabel}>Bu derste öğreneceksin</Text>
            <View style={styles.previewWordRow}>
              <Text style={styles.previewWord}>{previewWord.en}</Text>
              <SpeakerButton text={previewWord.en} size="md" />
            </View>
            <Text style={styles.previewTr}>= {previewWord.tr}</Text>
          </View>
        )}

        <View style={styles.typesSection}>
          <Text style={styles.typesLabel}>NE YAPACAKSIN</Text>
          {uniqueTypes.map((type) => {
            const info = TYPE_LABELS[type];
            if (!info) return null;
            const count = exerciseTypes.filter((t) => t === type).length;
            return (
              <View key={type} style={styles.typeRow}>
                <Text style={styles.typeEmoji}>{info.emoji}</Text>
                <Text style={styles.typeLabel}>{info.label}</Text>
                {count > 1 && (
                  <Text style={styles.typeCount}>×{count}</Text>
                )}
              </View>
            );
          })}
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <Button
          label="Başla →"
          onPress={() => router.replace(`/lesson/${lesson.id}`)}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: tokens.bg.app },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    height: 56,
  },
  backBtn: { width: 70 },
  backText: { color: tokens.text.secondary, fontSize: 15 },
  headerTitle: {
    fontSize: 14,
    color: tokens.text.secondary,
    fontWeight: tokens.weight.semibold,
    letterSpacing: 1.2,
    textTransform: "uppercase",
  },
  spacer: { width: 70 },
  content: {
    padding: tokens.spacing.md,
    paddingBottom: 24,
  },
  skillTag: {
    fontSize: 11,
    color: tokens.brand.tertiary,
    fontWeight: tokens.weight.bold,
    letterSpacing: 1.5,
    marginBottom: 8,
  },
  lessonTitle: {
    fontSize: 32,
    fontWeight: tokens.weight.extrabold,
    color: tokens.text.primary,
    letterSpacing: -0.5,
    lineHeight: 38,
    marginBottom: 8,
  },
  lessonDesc: {
    fontSize: 15,
    color: tokens.text.secondary,
    lineHeight: 22,
    marginBottom: 20,
  },
  metaRow: {
    flexDirection: "row",
    gap: 10,
    marginBottom: 20,
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
  metaEmoji: { fontSize: 14 },
  metaText: {
    fontSize: 14,
    color: tokens.text.primary,
    fontWeight: tokens.weight.semibold,
  },
  previewCard: {
    backgroundColor: "rgba(246, 255, 0, 0.10)",
    borderWidth: 2,
    borderColor: tokens.brand.primary,
    borderRadius: tokens.radius.base,
    padding: 20,
    marginBottom: 24,
  },
  previewLabel: {
    fontSize: 11,
    fontWeight: tokens.weight.bold,
    color: tokens.text.secondary,
    letterSpacing: 1.3,
    marginBottom: 12,
  },
  previewWordRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
    marginBottom: 8,
  },
  previewWord: {
    flex: 1,
    fontSize: 26,
    fontWeight: tokens.weight.extrabold,
    color: tokens.text.primary,
  },
  previewTr: {
    fontSize: 16,
    color: tokens.text.secondary,
    fontStyle: "italic",
  },
  typesSection: {
    backgroundColor: tokens.bg.surfaceContainer,
    borderRadius: tokens.radius.base,
    padding: 16,
  },
  typesLabel: {
    fontSize: 11,
    fontWeight: tokens.weight.bold,
    color: tokens.text.tertiary,
    letterSpacing: 1.3,
    marginBottom: 12,
  },
  typeRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: tokens.border.light,
  },
  typeEmoji: { fontSize: 18 },
  typeLabel: {
    flex: 1,
    fontSize: 14,
    fontWeight: tokens.weight.semibold,
    color: tokens.text.primary,
  },
  typeCount: {
    fontSize: 12,
    color: tokens.text.secondary,
    fontWeight: tokens.weight.bold,
  },
  footer: {
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  notFound: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 32,
    gap: 16,
  },
  notFoundTitle: {
    fontSize: 20,
    fontWeight: tokens.weight.bold,
    color: tokens.text.primary,
  },
});
