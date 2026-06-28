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
import { StatusBar } from "expo-status-bar";
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
      <StatusBar style="light" />
      <View style={styles.header}>
        <Pressable
          onPress={() => router.back()}
          style={styles.backBtn}
          accessibilityRole="button"
          accessibilityLabel="Geri"
        >
          <Text style={styles.backText}>‹</Text>
        </Pressable>
        <Text style={styles.headerTitle}>Tek Odaklı Koç</Text>
        <View style={styles.backBtn} />
      </View>

      {!focus || !dna ? (
        <View style={styles.empty}>
          <Text style={styles.emptyTitle}>Henüz çalışma gerektiren hata yok</Text>
          <Text style={styles.emptyText}>
            Roleplay yaptıkça Lafla son üç haftadaki tekrar eden hatalarını burada
            tek bir çalışmaya dönüştürecek.
          </Text>
          <Button label="Bugüne dön" onPress={() => router.replace("/today" as never)} />
        </View>
      ) : finished ? (
        <View style={styles.empty}>
          <Text style={styles.doneEyebrow}>3 DAKİKALIK ODAK TAMAMLANDI</Text>
          <Text style={styles.doneScore}>{correctCount}/3</Text>
          <Text style={styles.emptyTitle}>{dna.dominantLabelTr}</Text>
          <Text style={styles.emptyText}>
            Bir sonraki konuşmada koç aynı yapıyı yeniden kontrol edecek.
          </Text>
          <SpeakerButton text={spokenCorrection} size="lg" />
          <Button label="Bugüne dön" onPress={() => router.replace("/today" as never)} />
        </View>
      ) : (
        <ScrollView contentContainerStyle={styles.content} keyboardShouldPersistTaps="handled">
          <View style={styles.progressRow}>
            <Text style={styles.progressLabel}>BUGÜNÜN TEK ODAĞI</Text>
            <Text style={styles.progressValue}>{step + 1}/3</Text>
          </View>
          <Text style={styles.focusTitle}>{dna.dominantLabelTr}</Text>
          <Text style={styles.focusMeta}>
            Son {dna.windowDays} günde {focus.recentCount} kez yakalandı
          </Text>

          <View style={styles.questionCard}>
            <Text style={styles.questionTitle}>
              {step === 0
                ? "Hangisi doğal ve doğru?"
                : step === 1
                  ? "Hangi cümle düzeltilmeli?"
                  : "Yanlış cümleyi doğru biçimde yeniden yaz"}
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
                      accessibilityLabel={`Yanıt seçeneği: ${option}`}
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
                  placeholder="Doğru cümleyi İngilizce yaz"
                  placeholderTextColor={tokens.text.tertiary}
                  style={styles.input}
                  accessibilityLabel="Düzeltilmiş İngilizce cümle"
                />
                {correct === null && (
                  <Button
                    label="Kontrol et"
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
                  {correct ? "Doğru" : "Bu yapıya odaklan"}
                </Text>
                <Text style={styles.reason}>{focus.pattern.reason_tr}</Text>
                <View style={styles.answerRow}>
                  <Text style={styles.rightAnswer}>
                    ✓ {focus.pattern.example_right}
                  </Text>
                  <SpeakerButton text={spokenCorrection} size="sm" />
                </View>
                <Button
                  label={step === 2 ? "Çalışmayı bitir" : "Devam"}
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
