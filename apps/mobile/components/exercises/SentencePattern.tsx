// SentencePattern — şablon doldur, çoklu slot. CONTENT_EXPANSION Phase 1A.
//
// "I'd like to ___ because I ___" gibi bir şablon; her ___ yerine slot
// gelir. Her slot için bir doğru cevap + 3 distractor chip listesi var.
// User chip'leri tap'lar, slot dolar. Tüm slotlar dolduğunda "Kontrol et".
//
// Score: doldurulan slot'ların doğru oranı × 100 (her slot eşit ağırlık).
// Bu egzersiz tek-doğru-cevaplı drill değil; gerçek üretim cümlesinin
// yapısını öğretir. Distractor'lar grammatically plausible ama yanlış
// olmalı (lesson data tarafında doğru şekilde verilecek).

import { useMemo, useState } from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import Animated, { FadeInDown } from "react-native-reanimated";
import { Button } from "../Button";
import { tokens } from "../../theme";
import { hapticForScore, hapticSelection } from "../../lib/feedback";
import { type ExerciseResult } from "../../lib/engine";

interface Slot {
  /** Accepted answers — first entry treated as the canonical. */
  accepted: string[];
  /** Distractor chips to mix in for THIS slot. 3 önerilir. */
  distractors?: string[];
  /** Görsel placeholder ("a coffee", "a movie" gibi kısa hint). */
  placeholder?: string;
}

interface Props {
  template: string;
  slots: Slot[];
  tr_hint: string;
  example_filled: string;
  onComplete: (result: ExerciseResult) => void;
}

// Şablonu "___" üzerinden parçalara böl. N slot → N+1 text parça.
function splitTemplate(template: string): string[] {
  return template.split("___");
}

export function SentencePattern({
  template,
  slots,
  tr_hint,
  example_filled,
  onComplete,
}: Props) {
  const parts = useMemo(() => splitTemplate(template), [template]);

  // Per-slot user selection — null = boş.
  const [filled, setFilled] = useState<Array<string | null>>(
    () => slots.map(() => null),
  );
  // Hangi slot aktif (chip listesi onun için gösterilir).
  const [activeSlot, setActiveSlot] = useState<number>(0);
  const [result, setResult] = useState<ExerciseResult | null>(null);

  // Her slot için chip option listesi — doğru + distractor, deterministik
  // shuffle (her render aynı sıra, sayfa yenileme stabilitesi için).
  //
  // Fallback: distractor yoksa accepted[] tümünü chip olarak göster (her biri
  // doğru sayılır, accepted.some check skor hesaplamada zaten handle ediyor).
  // Lesson data'da %42 item distractor olmadan ship'lendi — tek chip trivial
  // UX'i bu fallback engelliyor. Best case: 3-4 distractor; fallback: 1-3
  // doğru alternatif. Worst case: accepted.length === 1 → tek chip kalır
  // (nadir, ileride content fix).
  const optionsPerSlot = useMemo(
    () =>
      slots.map((s, slotIdx) => {
        const acceptedList = s.accepted ?? [];
        const explicitDistractors = (s.distractors ?? []).slice(0, 3);
        const all =
          explicitDistractors.length > 0
            ? [acceptedList[0] ?? "", ...explicitDistractors]
            : acceptedList.length > 0
              ? acceptedList
              : [""];
        // Stable shuffle — slot index seed.
        return all
          .map((value, i) => ({
            value,
            sort: ((slotIdx + 1) * 7 + i * 13) % 31,
          }))
          .sort((a, b) => a.sort - b.sort)
          .map(({ value }) => value);
      }),
    [slots],
  );

  const allFilled = filled.every((v) => v !== null);

  const handleChipTap = (chip: string) => {
    if (result) return;
    hapticSelection();
    setFilled((prev) => {
      const next = [...prev];
      next[activeSlot] = chip;
      return next;
    });
    // Auto-advance: bir sonraki boş slota geç.
    const nextEmpty = filled.findIndex((v, i) => i !== activeSlot && v === null);
    if (nextEmpty !== -1) setActiveSlot(nextEmpty);
  };

  const handleSlotTap = (idx: number) => {
    if (result) return;
    setActiveSlot(idx);
  };

  const submit = () => {
    if (!allFilled) return;
    // Her slot için: kullanıcı seçimi accepted[] içinde mi? (lowercase exact)
    let correctCount = 0;
    slots.forEach((s, i) => {
      const user = (filled[i] ?? "").trim().toLowerCase();
      const ok = s.accepted.some((a) => a.trim().toLowerCase() === user);
      if (ok) correctCount++;
    });
    const score = Math.round((correctCount / slots.length) * 100);
    const correct = correctCount === slots.length;
    const r: ExerciseResult = {
      exercise_id: "sentence_pattern",
      exercise_type: "sentence_pattern",
      correct,
      score,
      feedback: correct
        ? "Şablon eksiksiz!"
        : `${correctCount}/${slots.length} doğru. Örnek: "${example_filled}"`,
    };
    setResult(r);
    hapticForScore(score);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.prompt}>Şablonu doldur</Text>

      {/* Template rendered with inline filled-slot chips */}
      <Animated.View
        entering={FadeInDown.duration(360)}
        style={styles.templateBlock}
      >
        <Text style={styles.templateText}>
          {parts.map((part, i) => (
            <Text key={`p-${i}`} style={styles.templateText}>
              {part}
              {i < slots.length && (
                <Text
                  // RN doesn't allow Pressable inline in Text — use onPress on
                  // the inner Text. Slot chip styled inline.
                  onPress={() => handleSlotTap(i)}
                  style={[
                    styles.slotInline,
                    activeSlot === i && !result && styles.slotInlineActive,
                    result &&
                      filled[i] &&
                      slots[i]!.accepted.some(
                        (a) =>
                          a.trim().toLowerCase() ===
                          (filled[i] ?? "").trim().toLowerCase(),
                      )
                      ? styles.slotInlineOk
                      : null,
                    result &&
                      filled[i] &&
                      !slots[i]!.accepted.some(
                        (a) =>
                          a.trim().toLowerCase() ===
                          (filled[i] ?? "").trim().toLowerCase(),
                      )
                      ? styles.slotInlineMiss
                      : null,
                  ]}
                  accessibilityRole="button"
                  accessibilityLabel={
                    filled[i]
                      ? `${i + 1}. boşluk: ${filled[i]}`
                      : `${i + 1}. boşluk, ${slots[i]?.placeholder ?? "boş"}`
                  }
                >
                  {filled[i] ?? slots[i]?.placeholder ?? "_____"}
                </Text>
              )}
            </Text>
          ))}
        </Text>
      </Animated.View>

      {/* Active slot label + chip bank */}
      {!result && (
        <Animated.View
          entering={FadeInDown.delay(120).duration(360)}
          style={styles.bankBlock}
        >
          <Text style={styles.bankLabel}>
            {activeSlot + 1}. boşluk için seç
          </Text>
          <View style={styles.chipRow}>
            {(optionsPerSlot[activeSlot] ?? []).map((opt, i) => {
              const isPicked = filled[activeSlot] === opt;
              return (
                <Pressable
                  key={`${activeSlot}-${i}-${opt}`}
                  onPress={() => handleChipTap(opt)}
                  style={[styles.chip, isPicked && styles.chipPicked]}
                  accessibilityRole="button"
                  accessibilityLabel={`${opt} seç`}
                  accessibilityState={{ selected: isPicked }}
                >
                  <Text
                    style={[
                      styles.chipText,
                      isPicked && styles.chipTextPicked,
                    ]}
                  >
                    {opt}
                  </Text>
                </Pressable>
              );
            })}
          </View>
        </Animated.View>
      )}

      {!result && (
        <Text style={styles.hint} accessibilityLabel={`İpucu: ${tr_hint}`}>
          💡 {tr_hint}
        </Text>
      )}

      {result && (
        <View
          style={[
            styles.feedback,
            result.correct ? styles.feedbackOk : styles.feedbackMiss,
          ]}
        >
          <Text style={styles.feedbackTitle}>
            {result.correct ? `✓ ${result.score}/100` : `${result.score}/100`}
          </Text>
          {result.feedback && (
            <Text style={styles.feedbackText}>{result.feedback}</Text>
          )}
          <Text style={styles.feedbackExampleLabel}>Örnek doldurulmuş</Text>
          <Text style={styles.feedbackExample}>{example_filled}</Text>
        </View>
      )}

      <View style={styles.footer}>
        <Button
          label={result ? "Devam et →" : "Kontrol et"}
          onPress={result ? () => onComplete(result) : submit}
          disabled={!result && !allFilled}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  prompt: {
    fontSize: 14,
    color: tokens.text.secondary,
    textTransform: "uppercase",
    letterSpacing: 1.5,
    fontWeight: tokens.weight.bold,
    fontFamily: tokens.font.sansBold,
    marginBottom: tokens.spacing.sm,
  },
  templateBlock: {
    backgroundColor: tokens.bg.surfaceContainer,
    borderRadius: tokens.radius.base,
    padding: tokens.spacing.md,
    marginBottom: tokens.spacing.md,
  },
  templateText: {
    fontSize: 22,
    lineHeight: 34,
    color: tokens.text.primary,
    fontFamily: tokens.font.display,
    fontWeight: tokens.weight.bold,
  },
  slotInline: {
    fontFamily: tokens.font.sansBold,
    fontWeight: tokens.weight.bold,
    color: tokens.brand.primary,
    backgroundColor: tokens.brand.primarySoft,
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: tokens.radius.sm,
    borderBottomWidth: 2,
    borderBottomColor: tokens.brand.primary,
  },
  slotInlineActive: {
    backgroundColor: tokens.brand.tertiarySoft,
    borderBottomColor: tokens.brand.tertiary,
    color: tokens.brand.tertiary,
  },
  slotInlineOk: {
    backgroundColor: tokens.brand.tertiarySoft,
    borderBottomColor: tokens.brand.tertiary,
    color: tokens.brand.tertiary,
  },
  slotInlineMiss: {
    backgroundColor: tokens.semantic.errorContainer,
    borderBottomColor: tokens.semantic.error,
    color: tokens.semantic.error,
  },
  bankBlock: {
    gap: tokens.spacing.sm,
    marginBottom: tokens.spacing.md,
  },
  bankLabel: {
    fontSize: 12,
    fontFamily: tokens.font.sansBold,
    fontWeight: tokens.weight.bold,
    color: tokens.text.secondary,
    textTransform: "uppercase",
    letterSpacing: 1.2,
  },
  chipRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
  },
  chip: {
    paddingVertical: 12,
    paddingHorizontal: 18,
    borderRadius: tokens.radius.full,
    backgroundColor: tokens.bg.surfaceContainerLowest,
    borderWidth: 2,
    borderColor: tokens.bg.surfaceContainerHigh,
  },
  chipPicked: {
    backgroundColor: tokens.brand.primary,
    borderColor: tokens.brand.primary,
  },
  chipText: {
    fontSize: 15,
    fontFamily: tokens.font.sansSemi,
    fontWeight: tokens.weight.semibold,
    color: tokens.text.primary,
  },
  chipTextPicked: {
    color: tokens.text.onPrimary,
    fontFamily: tokens.font.sansBold,
    fontWeight: tokens.weight.bold,
  },
  hint: {
    fontSize: 14,
    fontFamily: tokens.font.sans,
    color: tokens.text.secondary,
    marginTop: tokens.spacing.sm,
    lineHeight: 20,
  },
  feedback: {
    marginTop: tokens.spacing.md,
    padding: tokens.spacing.md,
    borderRadius: tokens.radius.base,
    gap: 4,
  },
  feedbackOk: {
    backgroundColor: tokens.brand.tertiarySoft,
    borderWidth: 1,
    borderColor: tokens.brand.tertiary,
  },
  feedbackMiss: {
    backgroundColor: tokens.semantic.errorContainer,
    borderWidth: 1,
    borderColor: tokens.semantic.error,
  },
  feedbackTitle: {
    fontSize: 20,
    fontFamily: tokens.font.sansExtra,
    fontWeight: tokens.weight.extrabold,
    color: tokens.text.primary,
  },
  feedbackText: {
    fontSize: 13,
    fontFamily: tokens.font.sans,
    color: tokens.text.secondary,
    lineHeight: 18,
  },
  feedbackExampleLabel: {
    fontSize: 11,
    fontFamily: tokens.font.sansBold,
    fontWeight: tokens.weight.bold,
    color: tokens.text.tertiary,
    textTransform: "uppercase",
    letterSpacing: 1,
    marginTop: 6,
  },
  feedbackExample: {
    fontSize: 15,
    fontFamily: tokens.font.sansSemi,
    fontWeight: tokens.weight.semibold,
    color: tokens.text.primary,
  },
  footer: {
    marginTop: "auto",
    paddingTop: tokens.spacing.md,
  },
});
