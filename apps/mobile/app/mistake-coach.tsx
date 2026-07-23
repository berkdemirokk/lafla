import { useEffect, useMemo, useState } from "react";
import {
  ActivityIndicator,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { ThemedStatusBar } from "../components/ThemedStatusBar";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

import { Button } from "../components/Button";
import { SpeakerButton } from "../components/SpeakerButton";
import { trackEvent } from "../lib/analytics";
import { getMistakeDNA, type MistakeDNA } from "../lib/mistake-dna";
import {
  markCorrectAttempt,
  markIncorrectAttempt,
} from "../lib/mistake-tracker";
import { tokens } from "../theme";
import { useTranslation } from "../lib/i18n";

function normalize(value: string): string {
  return value
    .toLowerCase()
    .replace(/[’‘]/g, "'")
    .replace(/[^a-z0-9' ]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function acceptedCorrections(example: string): string[] {
  return example
    .split(/\s+\/\s+/)
    .map((value) => value.trim())
    .filter(Boolean);
}

export default function MistakeCoachScreen() {
  const router = useRouter();
  const { t, locale } = useTranslation();
  const [dna, setDna] = useState<MistakeDNA | null | undefined>(undefined);
  const [step, setStep] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [production, setProduction] = useState("");
  const [correct, setCorrect] = useState<boolean | null>(null);
  const [correctCount, setCorrectCount] = useState(0);

  useEffect(() => {
    void getMistakeDNA(21)
      .then((value) => {
        setDna(value);
        if (value) {
          void trackEvent("mistake_dna_drill_started", {
            category: value.dominantCategory,
            pattern_id: value.items[0]?.pattern.id ?? "unknown",
            recent_error_count: value.totalRecent,
          }).catch(() => {});
        }
      })
      .catch(() => setDna(null));
  }, []);

  const focus = dna?.items[0] ?? null;
  const correctionOptions = useMemo(
    () => acceptedCorrections(focus?.pattern.example_right ?? ""),
    [focus],
  );
  const spokenCorrection = correctionOptions[0] ?? "";
  const finished = step >= 3;
  const options = useMemo(() => {
    if (!focus) return [];
    return step === 0
      ? [focus.pattern.example_wrong, focus.pattern.example_right]
      : [focus.pattern.example_right, focus.pattern.example_wrong];
  }, [focus, step]);

  const recordAnswer = (isCorrect: boolean) => {
    if (!focus || correct !== null) return;
    setCorrect(isCorrect);
    if (isCorrect) {
      setCorrectCount((count) => count + 1);
      void markCorrectAttempt(focus.pattern.id);
    } else {
      void markIncorrectAttempt(focus.pattern.id);
    }
  };

  const continueDrill = () => {
    if (step === 2 && focus && dna) {
      void trackEvent("mistake_dna_drill_completed", {
        category: dna.dominantCategory,
        pattern_id: focus.pattern.id,
        correct_answers: correctCount,
      }).catch(() => {});
    }
    setStep((value) => value + 1);
    setSelected(null);
    setProduction("");
    setCorrect(null);
  };

  if (dna === undefined) {
    return (
      <SafeAreaView style={styles.safe} edges={["top", "bottom"]}>
        <ActivityIndicator color={tokens.brand.primary} style={styles.loader} />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.safe} edges={["top", "bottom"]}>
      <ThemedStatusBar />
      <View style={styles.header}>
        <Pressable
          onPress={() => router.back()}
          style={styles.backBtn}
          accessibilityRole="button"
          accessibilityLabel={t("common.back")}
        >
          <Text style={styles.backText}>‹</Text>
        </Pressable>
        <Text style={styles.headerTitle}>{t("mistake_coach.title")}</Text>
        <View style={styles.backBtn} />
      </View>

      {!focus || !dna ? (
        <View style={styles.empty}>
          <Text style={styles.emptyTitle}>{t("mistake_coach.empty_title")}</Text>
          <Text style={styles.emptyText}>
            {t("mistake_coach.empty_body")}
          </Text>
          <Button label={t("mistake_coach.back_today")} onPress={() => router.replace("/today" as never)} />
        </View>
      ) : finished ? (
        <View style={styles.empty}>
          <Text style={styles.doneEyebrow}>{t("mistake_coach.done")}</Text>
          <Text style={styles.doneScore}>{correctCount}/3</Text>
          <Text style={styles.emptyTitle}>
            {locale === "tr" ? dna.dominantLabelTr : t("weakness.general_focus")}
          </Text>
          <Text style={styles.emptyText}>
            {t("mistake_coach.done_body")}
          </Text>
          <SpeakerButton text={spokenCorrection} size="lg" />
          <Button label={t("mistake_coach.back_today")} onPress={() => router.replace("/today" as never)} />
        </View>
      ) : (
        <ScrollView contentContainerStyle={styles.content} keyboardShouldPersistTaps="handled">
          <View style={styles.progressRow}>
            <Text style={styles.progressLabel}>{t("mistake_coach.focus")}</Text>
            <Text style={styles.progressValue}>{step + 1}/3</Text>
          </View>
          <Text style={styles.focusTitle}>
            {locale === "tr" ? dna.dominantLabelTr : t("weakness.general_focus")}
          </Text>
          <Text style={styles.focusMeta}>
            {t("mistake_coach.detected", {
              days: String(dna.windowDays),
              count: String(focus.recentCount),
            })}
          </Text>

          <View style={styles.questionCard}>
            <Text style={styles.questionTitle}>
              {step === 0
                ? t("mistake_coach.question_natural")
                : step === 1
                  ? t("mistake_coach.question_wrong")
                  : t("mistake_coach.question_rewrite")}
            </Text>

            {step < 2 ? (
              <View style={styles.optionList}>
                {options.map((option) => {
                  const chosen = selected === option;
                  const expected =
                    step === 0
                      ? focus.pattern.example_right
                      : focus.pattern.example_wrong;
                  return (
                    <Pressable
                      key={option}
                      disabled={correct !== null}
                      accessibilityRole="button"
                      accessibilityLabel={t("mistake_coach.option", { option })}
                      accessibilityState={{ selected: chosen, disabled: correct !== null }}
                      onPress={() => {
                        setSelected(option);
                        recordAnswer(option === expected);
                      }}
                      style={[
                        styles.option,
                        chosen && styles.optionSelected,
                      ]}
                    >
                      <Text style={styles.optionText}>{option}</Text>
                    </Pressable>
                  );
                })}
              </View>
            ) : (
              <View style={styles.productionWrap}>
                <Text style={styles.wrongPrompt}>✗ {focus.pattern.example_wrong}</Text>
                <TextInput
                  value={production}
                  onChangeText={setProduction}
                  editable={correct === null}
                  autoCapitalize="sentences"
                  autoCorrect={false}
                  multiline
                  placeholder={t("mistake_coach.placeholder")}
                  placeholderTextColor={tokens.text.tertiary}
                  style={styles.input}
                  accessibilityLabel={t("mistake_coach.input_label")}
                />
                {correct === null && (
                  <Button
                    label={t("exercise.check")}
                    disabled={!production.trim()}
                    onPress={() =>
                      recordAnswer(
                        correctionOptions.some(
                          (answer) => normalize(production) === normalize(answer),
                        ),
                      )
                    }
                  />
                )}
              </View>
            )}

            {correct !== null && (
              <View
                style={[
                  styles.feedback,
                  correct ? styles.feedbackGood : styles.feedbackNeedsWork,
                ]}
              >
                <Text style={styles.feedbackLabel}>
                  {correct ? t("exercise.correct") : t("mistake_coach.focus_structure")}
                </Text>
                <Text style={styles.reason}>
                  {locale === "tr" ? focus.pattern.reason_tr : t("learning.mistake_fallback_en")}
                </Text>
                <View style={styles.answerRow}>
                  <Text style={styles.rightAnswer}>
                    ✓ {focus.pattern.example_right}
                  </Text>
                  <SpeakerButton text={spokenCorrection} size="sm" />
                </View>
                <Button
                  label={step === 2 ? t("mistake_coach.finish") : t("common.continue")}
                  onPress={continueDrill}
                />
              </View>
            )}
          </View>
        </ScrollView>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: tokens.bg.app },
  loader: { flex: 1 },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  backBtn: { width: 44, height: 44, alignItems: "center", justifyContent: "center" },
  backText: { color: tokens.text.primary, fontSize: 34, marginTop: -4 },
  headerTitle: { color: tokens.text.primary, fontSize: 18, fontWeight: tokens.weight.black },
  content: { padding: 20, paddingBottom: 40 },
  progressRow: { flexDirection: "row", justifyContent: "space-between", marginBottom: 8 },
  progressLabel: { color: tokens.brand.primary, fontSize: 11, fontWeight: tokens.weight.extrabold, letterSpacing: 1.2 },
  progressValue: { color: tokens.text.secondary, fontSize: 12, fontWeight: tokens.weight.bold },
  focusTitle: { color: tokens.text.primary, fontSize: 28, fontWeight: tokens.weight.black, fontFamily: tokens.font.display },
  focusMeta: { color: tokens.text.secondary, fontSize: 13, marginTop: 4, marginBottom: 18 },
  questionCard: { backgroundColor: tokens.bg.surfaceContainer, borderRadius: tokens.radius.lg, borderWidth: 1, borderColor: tokens.border.outlineVariant, padding: 18, gap: 16 },
  questionTitle: { color: tokens.text.primary, fontSize: 18, lineHeight: 24, fontWeight: tokens.weight.extrabold },
  optionList: { gap: 10 },
  option: { padding: 16, borderRadius: tokens.radius.base, backgroundColor: tokens.bg.surfaceContainerHigh, borderWidth: 1, borderColor: tokens.border.light },
  optionSelected: { borderColor: tokens.brand.primary, borderWidth: 2 },
  optionText: { color: tokens.text.primary, fontSize: 15, lineHeight: 21 },
  productionWrap: { gap: 12 },
  wrongPrompt: { color: tokens.semantic.error, fontSize: 14, fontWeight: tokens.weight.semibold },
  input: { minHeight: 96, borderRadius: tokens.radius.base, borderWidth: 1, borderColor: tokens.border.light, backgroundColor: tokens.bg.surfaceContainerHigh, color: tokens.text.primary, padding: 14, fontSize: 16, textAlignVertical: "top" },
  feedback: { borderRadius: tokens.radius.base, padding: 14, gap: 10, borderWidth: 1 },
  feedbackGood: { backgroundColor: tokens.semantic.successContainer, borderColor: tokens.semantic.success },
  feedbackNeedsWork: { backgroundColor: tokens.semantic.warningContainer, borderColor: tokens.semantic.warning },
  feedbackLabel: { color: tokens.text.primary, fontSize: 15, fontWeight: tokens.weight.extrabold },
  reason: { color: tokens.text.secondary, fontSize: 13, lineHeight: 19 },
  answerRow: { flexDirection: "row", alignItems: "center", gap: 8 },
  rightAnswer: { color: tokens.brand.tertiary, fontSize: 14, lineHeight: 20, fontWeight: tokens.weight.bold, flex: 1 },
  empty: { flex: 1, alignItems: "center", justifyContent: "center", padding: 28, gap: 16 },
  emptyTitle: { color: tokens.text.primary, fontSize: 22, textAlign: "center", fontWeight: tokens.weight.black },
  emptyText: { color: tokens.text.secondary, fontSize: 14, textAlign: "center", lineHeight: 21 },
  doneEyebrow: { color: tokens.brand.primary, fontSize: 11, fontWeight: tokens.weight.extrabold, letterSpacing: 1.2 },
  doneScore: { color: tokens.brand.primary, fontSize: 56, fontWeight: tokens.weight.black, fontFamily: tokens.font.display },
});
