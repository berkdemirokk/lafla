// DialogueGap — yarım diyalog, eksik replikayı tamamla. Phase 1A.
//
// iMessage-style bubbles (npc/user). turns[missing_at] kullanıcının
// dolduracağı yer (genelde speaker: "user"). User TextInput'a yazar →
// regex/pattern match → score 0 / 60 / 100.
//
// Pattern matching: matchAgainstPatterns (lib/engine) — RoleplayChat ile
// aynı evaluation çekirdeği. Boş giriş 0, "anything in English"-ish 60,
// pattern match 100 (binary'i 3 banda yaymak yerine basit: match/no
// match — bu daha pedagojik, kullanıcıya "ya doğru ya değil" hissi verir).
// Mismatch durumunda "ideal_answer" görsel olarak gösterilir.

import { useRef, useState } from "react";
import {
  View,
  Text,
  TextInput,
  ScrollView,
  StyleSheet,
} from "react-native";
import Animated, { FadeInDown } from "react-native-reanimated";
import { Button } from "../Button";
import { tokens } from "../../theme";
import { hapticForScore } from "../../lib/feedback";
import {
  matchAgainstPatterns,
  type ExerciseResult,
} from "../../lib/engine";
import { useTranslation } from "../../lib/i18n";

interface Turn {
  speaker: "npc" | "user";
  text?: string;
}

interface Props {
  turns: Turn[];
  missing_at: number;
  accepted_patterns: string[];
  tr_hint: string;
  ideal_answer: string;
  onComplete: (result: ExerciseResult) => void;
}

export function DialogueGap({
  turns,
  missing_at,
  accepted_patterns,
  tr_hint,
  ideal_answer,
  onComplete,
}: Props) {
  const { t, locale } = useTranslation();
  const [input, setInput] = useState("");
  const [result, setResult] = useState<ExerciseResult | null>(null);
  const scrollRef = useRef<ScrollView>(null);
  // 2026-05-26 (P1 audit fix) — double-tap guard.
  const submittedRef = useRef(false);

  const missingTurn = turns[missing_at];
  const missingSpeaker: "npc" | "user" = missingTurn?.speaker ?? "user";

  const submit = () => {
    // 2026-05-26 (P1 audit fix) — double-tap guard. setResult queue'da
    // beklerken ikinci tap evaluate'i tekrar çalıştırıyordu.
    if (result || submittedRef.current) return;
    const trimmed = input.trim();
    if (!trimmed) return;
    submittedRef.current = true;
    const matched = matchAgainstPatterns(trimmed, accepted_patterns);
    // 3 band: match=100, attempted (3+ words)=60, else 30.
    let score: number;
    if (matched) {
      score = 100;
    } else {
      const wordCount = trimmed.split(/\s+/).filter((w) => w.length >= 2).length;
      score = wordCount >= 3 ? 60 : 30;
    }
    const r: ExerciseResult = {
      exercise_id: "dialogue_gap",
      exercise_type: "dialogue_gap",
      correct: matched,
      score,
      feedback: matched
        ? t("exercise.feedback.correct_response")
        : t("exercise.example_answer", { answer: ideal_answer }),
    };
    setResult(r);
    hapticForScore(score);
  };

  // Render: bütün turn'leri sırayla göster; missing_at boş bubble (input).
  return (
    <View style={styles.container}>
      <Text style={styles.prompt}>{t("exercise.dialogue_gap.title")}</Text>

      <ScrollView
        ref={scrollRef}
        style={styles.chatScroll}
        contentContainerStyle={styles.chatContent}
        showsVerticalScrollIndicator={false}
      >
        {turns.map((turn, i) => {
          if (i === missing_at) {
            return (
              <Animated.View
                key={`m-${i}`}
                entering={FadeInDown.duration(360)}
                style={[
                  styles.bubbleRow,
                  missingSpeaker === "user"
                    ? styles.rowUser
                    : styles.rowNpc,
                ]}
              >
                <View
                  style={[
                    styles.bubble,
                    styles.bubbleMissing,
                    missingSpeaker === "user"
                      ? styles.bubbleMissingUser
                      : styles.bubbleMissingNpc,
                  ]}
                >
                  {result ? (
                    <Text
                      style={[
                        styles.bubbleText,
                        missingSpeaker === "user"
                          ? styles.bubbleTextUser
                          : styles.bubbleTextNpc,
                      ]}
                    >
                      {input}
                    </Text>
                  ) : (
                    <Text style={styles.bubbleMissingPlaceholder}>
                      {t("exercise.dialogue_gap.your_turn")}
                    </Text>
                  )}
                </View>
              </Animated.View>
            );
          }
          if (!turn.text) return null;
          const isUser = turn.speaker === "user";
          return (
            <View
              key={`t-${i}`}
              style={[
                styles.bubbleRow,
                isUser ? styles.rowUser : styles.rowNpc,
              ]}
            >
              <View
                style={[
                  styles.bubble,
                  isUser ? styles.bubbleUser : styles.bubbleNpc,
                ]}
              >
                <Text
                  style={[
                    styles.bubbleText,
                    isUser ? styles.bubbleTextUser : styles.bubbleTextNpc,
                  ]}
                >
                  {turn.text}
                </Text>
              </View>
            </View>
          );
        })}
      </ScrollView>

      {!result && (
        <View style={styles.inputBlock}>
          <Text style={styles.inputLabel}>
            💡 {locale === "tr" ? tr_hint : t("learning.hint_fallback_en")}
          </Text>
          <TextInput
            style={styles.input}
            value={input}
            onChangeText={setInput}
            placeholder={t("exercise.write_english_answer")}
            placeholderTextColor={tokens.text.tertiary}
            multiline
            autoCapitalize="sentences"
            autoCorrect={false}
            accessibilityLabel={t("exercise.dialogue_gap.answer_label")}
          />
        </View>
      )}

      {result && (
        <View
          style={[
            styles.feedback,
            result.correct ? styles.feedbackOk : styles.feedbackMiss,
          ]}
        >
          <Text style={styles.feedbackTitle}>
            {result.correct
              ? `✓ ${result.score}/100`
              : `${result.score}/100`}
          </Text>
          {!result.correct && (
            <>
              <Text style={styles.feedbackExampleLabel}>{t("exercise.ideal_answer")}</Text>
              <Text style={styles.feedbackExample}>{ideal_answer}</Text>
            </>
          )}
        </View>
      )}

      <View style={styles.footer}>
        <Button
          label={result ? `${t("common.continue")} →` : t("exercise.check")}
          onPress={result ? () => onComplete(result) : submit}
          disabled={!result && !input.trim()}
        />
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
    marginBottom: tokens.spacing.sm,
  },
  chatScroll: {
    maxHeight: 280,
    marginBottom: tokens.spacing.sm,
  },
  chatContent: {
    gap: 8,
    paddingVertical: 8,
  },
  bubbleRow: {
    flexDirection: "row",
    maxWidth: "85%",
  },
  rowNpc: {
    alignSelf: "flex-start",
  },
  rowUser: {
    alignSelf: "flex-end",
  },
  bubble: {
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 20,
  },
  bubbleNpc: {
    backgroundColor: tokens.brand.secondary,
    borderBottomLeftRadius: 4,
  },
  bubbleUser: {
    backgroundColor: tokens.brand.primary,
    borderBottomRightRadius: 4,
  },
  bubbleMissing: {
    borderWidth: 2,
    borderStyle: "dashed",
    minWidth: 200,
  },
  bubbleMissingUser: {
    backgroundColor: tokens.brand.primarySoft,
    borderColor: tokens.brand.primary,
    borderBottomRightRadius: 4,
  },
  bubbleMissingNpc: {
    backgroundColor: tokens.bg.surfaceContainer,
    borderColor: tokens.text.tertiary,
    borderBottomLeftRadius: 4,
  },
  bubbleMissingPlaceholder: {
    fontSize: 14,
    fontFamily: tokens.font.sans,
    color: tokens.text.tertiary,
    fontStyle: "italic",
  },
  bubbleText: {
    fontSize: 15,
    fontFamily: tokens.font.sans,
    lineHeight: 21,
  },
  bubbleTextNpc: {
    color: tokens.text.onSecondary,
  },
  bubbleTextUser: {
    color: tokens.text.onPrimary,
    fontFamily: tokens.font.sansSemi,
    fontWeight: tokens.weight.semibold,
  },
  inputBlock: {
    gap: 8,
  },
  inputLabel: {
    fontSize: 13,
    fontFamily: tokens.font.sans,
    color: tokens.text.secondary,
    lineHeight: 18,
  },
  input: {
    backgroundColor: tokens.bg.surfaceContainerLowest,
    borderWidth: 2,
    borderColor: tokens.bg.surfaceContainerHigh,
    borderRadius: tokens.radius.base,
    padding: tokens.spacing.md,
    color: tokens.text.primary,
    fontFamily: tokens.font.sans,
    fontSize: 16,
    minHeight: 80,
    textAlignVertical: "top",
  },
  feedback: {
    marginTop: tokens.spacing.sm,
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
    fontSize: 16,
    fontFamily: tokens.font.sansSemi,
    fontWeight: tokens.weight.semibold,
    color: tokens.text.primary,
  },
  footer: {
    marginTop: "auto",
    paddingTop: tokens.spacing.md,
  },
});
