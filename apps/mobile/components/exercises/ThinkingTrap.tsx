// ThinkingTrap — Türk hatası reveal. CONTENT_EXPANSION Phase 1A.
//
// Pure öğretici (no input). Türk kullanıcının kafasında nasıl kurduğu (TR)
// vs İngilizce'de nasıl olması gerektiği (right) arasındaki köprü. wrong_en
// = direkt çeviri tuzağı, right_en = native ifade.
//
// Staged reveal (timing-driven, no user interaction until end):
//   t=0      → tr_thought görünür ("Türkçede şöyle düşünürsün")
//   t=800ms  → wrong_en görünür (✗ kırmızı — "ama böyle dersen yanlış")
//   t=1600ms → right_en görünür (✓ cyan — "doğrusu bu")
//   t=2400ms → why_tr görünür (Türkçe açıklama)
//   t=2500ms → "Anladım" butonu fade-in
//
// onComplete: { correct: true, score: 100 } — pedagojik egzersiz, başarısızlık
// kavramı yok; user gördü, anladı.

import { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import Animated, { FadeInDown, FadeIn } from "react-native-reanimated";
import { Button } from "../Button";
import { tokens } from "../../theme";
import { hapticImpact, hapticSuccess } from "../../lib/feedback";
import { type ExerciseResult } from "../../lib/engine";

interface Props {
  tr_thought: string;
  wrong_en: string;
  right_en: string;
  why_tr: string;
  onComplete: (result: ExerciseResult) => void;
}

type RevealStage = 0 | 1 | 2 | 3 | 4 | 5;
// 0 = nothing, 1 = tr_thought, 2 = wrong, 3 = right, 4 = why, 5 = button

export function ThinkingTrap({
  tr_thought,
  wrong_en,
  right_en,
  why_tr,
  onComplete,
}: Props) {
  const [stage, setStage] = useState<RevealStage>(0);

  // Staged reveal timeline. Tüm timer'ları toplu cleanup için array tut.
  useEffect(() => {
    const timers: Array<ReturnType<typeof setTimeout>> = [];

    timers.push(
      setTimeout(() => {
        setStage(1);
      }, 100),
    );
    timers.push(
      setTimeout(() => {
        setStage(2);
        hapticImpact("light");
      }, 900),
    );
    timers.push(
      setTimeout(() => {
        setStage(3);
        hapticImpact("medium");
      }, 1700),
    );
    timers.push(
      setTimeout(() => {
        setStage(4);
      }, 2500),
    );
    timers.push(
      setTimeout(() => {
        setStage(5);
        hapticSuccess();
      }, 2700),
    );

    return () => {
      for (const t of timers) clearTimeout(t);
    };
  }, []);

  const handleContinue = () => {
    onComplete({
      exercise_id: "thinking_trap",
      exercise_type: "thinking_trap",
      correct: true,
      score: 100,
      feedback: "Tuzak görüldü.",
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.prompt}>Düşünce Tuzağı</Text>
      <Text style={styles.subprompt}>
        Türkçe düşününce yanlış yola çıkmak çok kolay
      </Text>

      <View style={styles.stack}>
        {stage >= 1 && (
          <Animated.View
            entering={FadeInDown.duration(420)}
            style={styles.trCard}
          >
            <Text style={styles.trLabel}>Aklından şöyle geçer</Text>
            <Text style={styles.trText}>{tr_thought}</Text>
          </Animated.View>
        )}

        {stage >= 2 && (
          <Animated.View
            entering={FadeInDown.duration(420)}
            style={styles.wrongCard}
            accessibilityLabel={`Yanlış İngilizce: ${wrong_en}`}
          >
            <View style={styles.markRow}>
              <Text style={styles.wrongMark}>✗</Text>
              <Text style={styles.wrongLabel}>Türkçeden çevirirsen</Text>
            </View>
            <Text style={styles.wrongText}>{wrong_en}</Text>
          </Animated.View>
        )}

        {stage >= 3 && (
          <Animated.View
            entering={FadeInDown.duration(420)}
            style={styles.rightCard}
            accessibilityLabel={`Doğru İngilizce: ${right_en}`}
          >
            <View style={styles.markRow}>
              <Text style={styles.rightMark}>✓</Text>
              <Text style={styles.rightLabel}>İngilizler şöyle der</Text>
            </View>
            <Text style={styles.rightText}>{right_en}</Text>
          </Animated.View>
        )}

        {stage >= 4 && (
          <Animated.View
            entering={FadeIn.duration(420)}
            style={styles.whyCard}
          >
            <Text style={styles.whyLabel}>Neden</Text>
            <Text style={styles.whyText}>{why_tr}</Text>
          </Animated.View>
        )}
      </View>

      <View style={styles.footer}>
        {stage >= 5 && (
          <Animated.View entering={FadeIn.duration(380)}>
            <Button label="Anladım →" onPress={handleContinue} />
          </Animated.View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  prompt: {
    fontSize: 14,
    fontFamily: tokens.font.sansBold,
    fontWeight: tokens.weight.bold,
    color: tokens.text.secondary,
    textTransform: "uppercase",
    letterSpacing: 1.5,
  },
  subprompt: {
    fontSize: 14,
    fontFamily: tokens.font.sans,
    color: tokens.text.tertiary,
    marginTop: 4,
    marginBottom: tokens.spacing.md,
    lineHeight: 20,
  },
  stack: {
    gap: tokens.spacing.sm,
  },
  trCard: {
    backgroundColor: tokens.bg.surfaceContainer,
    borderRadius: tokens.radius.base,
    padding: tokens.spacing.md,
    borderLeftWidth: 3,
    borderLeftColor: tokens.text.tertiary,
    gap: 4,
  },
  trLabel: {
    fontSize: 11,
    fontFamily: tokens.font.sansBold,
    fontWeight: tokens.weight.bold,
    color: tokens.text.tertiary,
    textTransform: "uppercase",
    letterSpacing: 1,
  },
  trText: {
    fontSize: 18,
    fontFamily: tokens.font.sansSemi,
    fontWeight: tokens.weight.semibold,
    color: tokens.text.primary,
    lineHeight: 26,
    fontStyle: "italic",
  },
  wrongCard: {
    backgroundColor: tokens.semantic.errorContainer,
    borderRadius: tokens.radius.base,
    padding: tokens.spacing.md,
    borderWidth: 1,
    borderColor: tokens.semantic.error,
    gap: 4,
  },
  markRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  wrongMark: {
    fontSize: 22,
    fontFamily: tokens.font.sansExtra,
    fontWeight: tokens.weight.extrabold,
    color: tokens.semantic.error,
  },
  wrongLabel: {
    fontSize: 11,
    fontFamily: tokens.font.sansBold,
    fontWeight: tokens.weight.bold,
    color: tokens.semantic.error,
    textTransform: "uppercase",
    letterSpacing: 1,
  },
  wrongText: {
    fontSize: 18,
    fontFamily: tokens.font.sansBold,
    fontWeight: tokens.weight.bold,
    color: tokens.text.primary,
    lineHeight: 26,
    textDecorationLine: "line-through",
  },
  rightCard: {
    backgroundColor: tokens.brand.tertiarySoft,
    borderRadius: tokens.radius.base,
    padding: tokens.spacing.md,
    borderWidth: 1,
    borderColor: tokens.brand.tertiary,
    gap: 4,
  },
  rightMark: {
    fontSize: 22,
    fontFamily: tokens.font.sansExtra,
    fontWeight: tokens.weight.extrabold,
    color: tokens.brand.tertiary,
  },
  rightLabel: {
    fontSize: 11,
    fontFamily: tokens.font.sansBold,
    fontWeight: tokens.weight.bold,
    color: tokens.brand.tertiary,
    textTransform: "uppercase",
    letterSpacing: 1,
  },
  rightText: {
    fontSize: 20,
    fontFamily: tokens.font.display,
    fontWeight: tokens.weight.bold,
    color: tokens.text.primary,
    lineHeight: 28,
  },
  whyCard: {
    backgroundColor: tokens.bg.surfaceContainerLowest,
    borderRadius: tokens.radius.base,
    padding: tokens.spacing.md,
    borderWidth: 1,
    borderColor: tokens.border.outlineVariant,
    gap: 4,
  },
  whyLabel: {
    fontSize: 11,
    fontFamily: tokens.font.sansBold,
    fontWeight: tokens.weight.bold,
    color: tokens.text.tertiary,
    textTransform: "uppercase",
    letterSpacing: 1,
  },
  whyText: {
    fontSize: 14,
    fontFamily: tokens.font.sans,
    color: tokens.text.secondary,
    lineHeight: 20,
  },
  footer: {
    marginTop: "auto",
    paddingTop: tokens.spacing.md,
    minHeight: 80,
  },
});
