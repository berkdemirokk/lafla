import { useState } from "react";
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
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
import { TabBar } from "../components/TabBar";
import { RoleplayChat } from "../components/exercises/RoleplayChat";
import { trackEvent } from "../lib/analytics";
import { enqueueVocab } from "../lib/srs-vocab";
import type { ExerciseResult } from "../lib/engine";
import {
  generateCustomScenario,
  generateEmergencyAnswers,
  type CustomScenario,
  type EmergencyAnswers,
} from "../lib/real-life-tools";
import { tokens } from "../theme";
import { useTranslation } from "../lib/i18n";

type ToolMode = "emergency" | "scenario";

const EXAMPLE_KEYS: Record<ToolMode, string[]> = {
  emergency: [
    "real_life.example.accident",
    "real_life.example.allergy",
  ],
  scenario: [
    "real_life.example.salary",
    "real_life.example.whatsapp",
  ],
};

const QUICK_REQUESTS: ReadonlyArray<{
  mode: ToolMode;
  titleKey: string;
  subtitleKey: string;
  textKey: string;
}> = [
  {
    mode: "emergency",
    titleKey: "real_life.quick.ambulance_title",
    subtitleKey: "real_life.quick.ambulance_subtitle",
    textKey: "real_life.quick.ambulance_text",
  },
  {
    mode: "emergency",
    titleKey: "real_life.quick.police_title",
    subtitleKey: "real_life.quick.police_subtitle",
    textKey: "real_life.quick.police_text",
  },
  {
    mode: "emergency",
    titleKey: "real_life.quick.fire_title",
    subtitleKey: "real_life.quick.fire_subtitle",
    textKey: "real_life.quick.fire_text",
  },
  {
    mode: "emergency",
    titleKey: "real_life.quick.passport_title",
    subtitleKey: "real_life.quick.passport_subtitle",
    textKey: "real_life.quick.passport_text",
  },
  {
    mode: "scenario",
    titleKey: "real_life.quick.salary_title",
    subtitleKey: "real_life.quick.salary_subtitle",
    textKey: "real_life.quick.salary_text",
  },
  {
    mode: "scenario",
    titleKey: "real_life.quick.whatsapp_title",
    subtitleKey: "real_life.quick.whatsapp_subtitle",
    textKey: "real_life.quick.whatsapp_text",
  },
];

const TRUST_POINT_KEYS = [
  { labelKey: "real_life.trust.speed_label", detailKey: "real_life.trust.speed_detail" },
  { labelKey: "real_life.trust.tones_label", detailKey: "real_life.trust.tones_detail" },
  { labelKey: "real_life.trust.audio_label", detailKey: "real_life.trust.audio_detail" },
];

const EMERGENCY_TRUST_POINT_KEYS = [
  { labelKey: "real_life.trust.emergency_label", detailKey: "real_life.trust.emergency_detail" },
  { labelKey: "real_life.trust.steps_label", detailKey: "real_life.trust.steps_detail" },
  { labelKey: "real_life.trust.audio_label", detailKey: "real_life.trust.audio_detail" },
];

const TONE_HINT_KEYS: Record<"formal" | "neutral" | "friendly", string> = {
  formal: "real_life.tone.formal_hint",
  neutral: "real_life.tone.neutral_hint",
  friendly: "real_life.tone.friendly_hint",
};

export default function RealLifeScreen() {
  const router = useRouter();
  const { t, locale } = useTranslation();
  const [mode, setMode] = useState<ToolMode>("emergency");
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [answers, setAnswers] = useState<EmergencyAnswers | null>(null);
  const [scenario, setScenario] = useState<CustomScenario | null>(null);
  const [scenarioResult, setScenarioResult] = useState<ExerciseResult | null>(
    null,
  );
  const [savingAnswers, setSavingAnswers] = useState(false);
  const [answersSaved, setAnswersSaved] = useState(false);

  const reset = () => {
    setAnswers(null);
    setScenario(null);
    setScenarioResult(null);
    setError(null);
    setInput("");
    setAnswersSaved(false);
  };

  const generateFrom = async (
    rawRequest = input,
    activeMode: ToolMode = mode,
  ) => {
    const request = rawRequest.trim();
    if (!request || loading) return;
    if (rawRequest !== input) setInput(rawRequest);
    if (activeMode !== mode) setMode(activeMode);
    setLoading(true);
    setError(null);
    setAnswers(null);
    setScenario(null);
    setScenarioResult(null);
    setAnswersSaved(false);
    const startedAt = Date.now();
    try {
      if (activeMode === "emergency") {
        const result = await generateEmergencyAnswers(request);
        setAnswers(result);
        void trackEvent("emergency_english_generated", {
          source: result.source,
          category: result.category,
          kind: result.kind,
          latency_ms: Date.now() - startedAt,
        }).catch(() => {});
      } else {
        const result = await generateCustomScenario(request);
        setScenario(result);
        void trackEvent("custom_scenario_generated", {
          source: result.source,
          latency_ms: Date.now() - startedAt,
        }).catch(() => {});
      }
    } catch (reason) {
      setError(
        locale === "tr" && reason instanceof Error
          ? reason.message
          : t("real_life.error_generate"),
      );
    } finally {
      setLoading(false);
    }
  };

  const generate = async () => generateFrom();

  const saveAnswersForReview = async () => {
    if (!answers || savingAnswers || answersSaved) return;
    setSavingAnswers(true);
    try {
      for (const phrase of [answers.formal, answers.neutral, answers.friendly]) {
        await enqueueVocab({
          word: phrase,
          translation: input.trim(),
          source_lesson_id: `real-life.${answers.intentId}`,
          source_lesson_title: t("real_life.review_source_title"),
          was_correct: false,
        });
      }
      setAnswersSaved(true);
      void trackEvent("emergency_english_saved", {
        category: answers.category,
        intent_id: answers.intentId,
      }).catch(() => {});
      Alert.alert(
        t("real_life.saved_title"),
        t("real_life.saved_body"),
      );
    } catch {
      setError(t("real_life.error_save"));
    } finally {
      setSavingAnswers(false);
    }
  };

  if (scenario) {
    return (
      <SafeAreaView style={styles.safe} edges={["top", "bottom"]}>
        <ThemedStatusBar />
        <View style={styles.header}>
          <Pressable
            onPress={reset}
            style={styles.headerBtn}
            accessibilityRole="button"
            accessibilityLabel={t("real_life.back_to_builder")}
          >
            <Text style={styles.headerBtnText}>← {t("real_life.new")}</Text>
          </Pressable>
          <Text style={styles.headerTitle} numberOfLines={1}>
            {locale === "tr" ? scenario.titleTr : t("real_life.custom_scenario_title")}
          </Text>
          <View style={styles.sourceBadge}>
            <Text style={styles.sourceBadgeText}>
              {t("real_life.source_local")}
            </Text>
          </View>
        </View>
        {scenarioResult ? (
          <View style={styles.doneWrap}>
            <Text style={styles.doneEyebrow}>{t("real_life.done_eyebrow")}</Text>
            <Text style={styles.doneTitle}>{t("real_life.done_title")}</Text>
            <Text style={styles.doneText}>
              {locale === "tr" && scenarioResult.mistakes?.[0]?.reason_tr
                ? scenarioResult.mistakes[0].reason_tr
                : t("real_life.done_body")}
            </Text>
            <Button label={t("real_life.retry")} onPress={() => setScenarioResult(null)} />
            <Button label={t("real_life.new_situation")} variant="secondary" onPress={reset} />
          </View>
        ) : (
          <View style={styles.roleplayWrap}>
            <RoleplayChat
              scenarioDescription={
                locale === "tr" ? scenario.descriptionTr : t("real_life.custom_scenario_description")
              }
              npcRole={scenario.npcRole}
              setting={scenario.settingTr}
              turns={scenario.turns}
              mode="multi-choice"
              lowPressure
              seed={`custom:${input}`}
              onComplete={(result) => {
                setScenarioResult(result);
                void trackEvent("custom_scenario_completed", {
                  source: scenario.source,
                  score: result.score,
                }).catch(() => {});
              }}
            />
          </View>
        )}
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.safe} edges={["top", "bottom"]}>
      <ThemedStatusBar />
      <View style={styles.header}>
        <Pressable
          onPress={() => router.back()}
          style={styles.headerBtn}
          accessibilityRole="button"
          accessibilityLabel={t("common.back")}
        >
          <Text style={styles.headerBtnText}>← {t("common.back")}</Text>
        </Pressable>
        <Text style={styles.headerTitle}>{t("real_life.title")}</Text>
        <View style={styles.headerBtn} />
      </View>

      <KeyboardAvoidingView
        style={styles.flex}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <ScrollView
          contentContainerStyle={styles.content}
          keyboardShouldPersistTaps="handled"
        >
          <View style={styles.segment}>
            <ModeButton
              active={mode === "emergency"}
              label={t("real_life.emergency_tab")}
              onPress={() => {
                setMode("emergency");
                reset();
              }}
            />
            <ModeButton
              active={mode === "scenario"}
              label={t("real_life.scenario_tab")}
              onPress={() => {
                setMode("scenario");
                reset();
              }}
            />
          </View>

          <View>
            <Text style={styles.eyebrow}>
              {mode === "emergency"
                ? t("real_life.emergency_eyebrow")
                : t("real_life.scenario_eyebrow")}
            </Text>
            <Text style={styles.title}>
              {mode === "emergency"
                ? t("real_life.emergency_title")
                : t("real_life.scenario_title")}
            </Text>
            <Text style={styles.subtitle}>
              {mode === "emergency"
                ? t("real_life.emergency_subtitle")
                : t("real_life.scenario_subtitle")}
            </Text>
          </View>

          <View style={styles.promiseRow}>
            {(mode === "emergency" ? EMERGENCY_TRUST_POINT_KEYS : TRUST_POINT_KEYS).map((item) => (
              <View key={item.labelKey} style={styles.promisePill}>
                <Text style={styles.promiseLabel}>{t(item.labelKey)}</Text>
                <Text style={styles.promiseDetail}>{t(item.detailKey)}</Text>
              </View>
            ))}
          </View>

          <View style={styles.quickPanel}>
            <Text style={styles.sectionLabel}>{t("real_life.quick_title")}</Text>
            <View style={styles.quickGrid}>
              {QUICK_REQUESTS.filter((item) => item.mode === mode).map(
                (item) => (
                  <Pressable
                    key={item.titleKey}
                    onPress={() => void generateFrom(t(item.textKey), item.mode)}
                    style={({ pressed }) => [
                      styles.quickCard,
                      pressed && styles.pressed,
                    ]}
                    accessibilityRole="button"
                    accessibilityLabel={t("real_life.quick_accessibility", {
                      title: t(item.titleKey),
                    })}
                  >
                    <Text style={styles.quickTitle}>{t(item.titleKey)}</Text>
                    <Text style={styles.quickSub}>{t(item.subtitleKey)}</Text>
                  </Pressable>
                ),
              )}
            </View>
          </View>

          <TextInput
            value={input}
            onChangeText={setInput}
            maxLength={500}
            multiline
            placeholder={
              mode === "emergency"
                ? t("real_life.emergency_placeholder")
                : t("real_life.scenario_placeholder")
            }
            placeholderTextColor={tokens.text.tertiary}
            style={styles.input}
            accessibilityLabel={
              mode === "emergency"
                ? t("real_life.emergency_input_label")
                : t("real_life.scenario_input_label")
            }
          />

          <View style={styles.chips}>
            {EXAMPLE_KEYS[mode].map((exampleKey) => {
              const example = t(exampleKey);
              return (
              <Pressable
                key={exampleKey}
                onPress={() => setInput(example)}
                style={styles.chip}
                accessibilityRole="button"
                accessibilityLabel={t("real_life.fill_example", { example })}
              >
                <Text style={styles.chipText}>{example}</Text>
              </Pressable>
              );
            })}
          </View>

          {error && (
            <Text style={styles.error} accessibilityLiveRegion="polite">
              {error}
            </Text>
          )}

          <Button
            label={
              mode === "emergency"
                ? t("real_life.generate_answers")
                : t("real_life.generate_scenario")
            }
            onPress={() => void generate()}
            disabled={!input.trim()}
            loading={loading}
            stacked
          />

          {answers && (
            <View style={styles.answerList}>
              {answers.kind === "critical" && (
                <View style={styles.criticalNotice} accessibilityRole="alert">
                  <Text style={styles.criticalNoticeTitle}>
                    {t("real_life.critical_notice_title")}
                  </Text>
                  <Text style={styles.criticalNoticeBody}>
                    {t("real_life.critical_notice_body")}
                  </Text>
                </View>
              )}
              <AnswerCard
                label={t(answers.kind === "critical" ? "real_life.step.first" : "real_life.tone.formal")}
                hint={t(answers.kind === "critical" ? "real_life.step.first_hint" : TONE_HINT_KEYS.formal)}
                text={answers.formal}
              />
              <AnswerCard
                label={t(answers.kind === "critical" ? "real_life.step.detail" : "real_life.tone.neutral")}
                hint={t(answers.kind === "critical" ? "real_life.step.detail_hint" : TONE_HINT_KEYS.neutral)}
                text={answers.neutral}
              />
              <AnswerCard
                label={t(answers.kind === "critical" ? "real_life.step.keep_open" : "real_life.tone.friendly")}
                hint={t(answers.kind === "critical" ? "real_life.step.keep_open_hint" : TONE_HINT_KEYS.friendly)}
                text={answers.friendly}
              />
              <Text style={styles.offlineNote}>{t("real_life.offline_notice")}</Text>
              <Button
                label={t("real_life.convert_to_rehearsal")}
                variant="secondary"
                onPress={() => void generateFrom(input, "scenario")}
                disabled={!input.trim()}
                loading={loading}
                stacked
              />
              <Button
                label={t(answersSaved ? "real_life.saved_cta" : "real_life.save_for_review")}
                variant="secondary"
                onPress={() => void saveAnswersForReview()}
                disabled={answersSaved}
                loading={savingAnswers}
                stacked
              />
            </View>
          )}
        </ScrollView>
      </KeyboardAvoidingView>
      <TabBar active="real-life" />
    </SafeAreaView>
  );
}

function ModeButton({
  active,
  label,
  onPress,
}: {
  active: boolean;
  label: string;
  onPress: () => void;
}) {
  const { t } = useTranslation();
  return (
    <Pressable
      onPress={onPress}
      style={[styles.modeBtn, active && styles.modeBtnActive]}
      accessibilityRole="tab"
      accessibilityLabel={t("real_life.mode_accessibility", { label })}
      accessibilityState={{ selected: active }}
    >
      <Text style={[styles.modeText, active && styles.modeTextActive]}>{label}</Text>
    </Pressable>
  );
}

function AnswerCard({
  label,
  hint,
  text,
}: {
  label: string;
  hint: string;
  text: string;
}) {
  return (
    <View style={styles.answerCard}>
      <View style={styles.answerHeader}>
        <View>
          <Text style={styles.answerLabel}>{label}</Text>
          <Text style={styles.answerHint}>{hint}</Text>
        </View>
        <SpeakerButton text={text} size="sm" />
      </View>
      <Text style={styles.answerText}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: tokens.bg.app },
  flex: { flex: 1 },
  header: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingHorizontal: 16, paddingVertical: 8 },
  headerBtn: { width: 72, minHeight: 44, justifyContent: "center" },
  headerBtnText: { color: tokens.text.secondary, fontSize: 14, fontWeight: tokens.weight.semibold },
  headerTitle: { flex: 1, color: tokens.text.primary, fontSize: 18, textAlign: "center", fontWeight: tokens.weight.black, fontFamily: tokens.font.display },
  sourceBadge: { width: 72, alignItems: "flex-end" },
  sourceBadgeText: { color: tokens.brand.tertiary, fontSize: 9, fontWeight: tokens.weight.extrabold, letterSpacing: 1 },
  content: { padding: 20, paddingBottom: 44, gap: 18 },
  segment: { flexDirection: "row", padding: 4, borderRadius: tokens.radius.full, backgroundColor: tokens.bg.surfaceContainer },
  modeBtn: { flex: 1, paddingVertical: 10, borderRadius: tokens.radius.full, alignItems: "center" },
  modeBtnActive: { backgroundColor: tokens.brand.primary },
  modeText: { color: tokens.text.secondary, fontSize: 13, fontWeight: tokens.weight.bold },
  modeTextActive: { color: tokens.text.onPrimary },
  eyebrow: { color: tokens.brand.primary, fontSize: 10, fontWeight: tokens.weight.extrabold, letterSpacing: 1.4, marginBottom: 6 },
  title: { color: tokens.text.primary, fontSize: 28, lineHeight: 34, fontWeight: tokens.weight.black, fontFamily: tokens.font.display },
  subtitle: { color: tokens.text.secondary, fontSize: 14, lineHeight: 20, marginTop: 7 },
  promiseRow: { flexDirection: "row", gap: 8 },
  promisePill: { flex: 1, paddingVertical: 10, paddingHorizontal: 10, borderRadius: 16, backgroundColor: tokens.bg.surfaceContainer, borderWidth: 1, borderColor: tokens.border.outlineVariant },
  promiseLabel: { color: tokens.brand.tertiary, fontSize: 13, fontWeight: tokens.weight.black, fontFamily: tokens.font.display },
  promiseDetail: { color: tokens.text.tertiary, fontSize: 10, marginTop: 2 },
  quickPanel: { gap: 10 },
  sectionLabel: { color: tokens.text.tertiary, fontSize: 10, fontWeight: tokens.weight.extrabold, letterSpacing: 1.3 },
  quickGrid: { flexDirection: "row", flexWrap: "wrap", gap: 10 },
  quickCard: { flexGrow: 1, flexBasis: "46%", minHeight: 86, padding: 14, borderRadius: tokens.radius.lg, backgroundColor: tokens.brand.primarySoft, borderWidth: 1, borderColor: tokens.brand.primary, justifyContent: "space-between" },
  quickTitle: { color: tokens.text.primary, fontSize: 15, fontWeight: tokens.weight.black, fontFamily: tokens.font.display },
  quickSub: { color: tokens.text.secondary, fontSize: 11, lineHeight: 15, marginTop: 5 },
  pressed: { opacity: 0.82, transform: [{ scale: 0.98 }] },
  input: { minHeight: 128, padding: 16, color: tokens.text.primary, fontSize: 16, lineHeight: 23, textAlignVertical: "top", borderRadius: tokens.radius.lg, backgroundColor: tokens.bg.surfaceContainer, borderWidth: 1, borderColor: tokens.border.outlineVariant },
  chips: { gap: 8 },
  chip: { alignSelf: "flex-start", paddingVertical: 8, paddingHorizontal: 12, borderRadius: tokens.radius.full, backgroundColor: tokens.bg.surfaceContainerHigh, borderWidth: 1, borderColor: tokens.border.light },
  chipText: { color: tokens.text.secondary, fontSize: 12 },
  error: { color: tokens.semantic.error, fontSize: 13, lineHeight: 19 },
  answerList: { gap: 12, marginTop: 6 },
  criticalNotice: { padding: 16, borderRadius: tokens.radius.lg, backgroundColor: tokens.semantic.errorContainer, borderWidth: 1, borderColor: tokens.semantic.error },
  criticalNoticeTitle: { color: tokens.semantic.error, fontSize: 14, fontWeight: tokens.weight.black, fontFamily: tokens.font.display },
  criticalNoticeBody: { color: tokens.text.secondary, fontSize: 12, lineHeight: 18, marginTop: 5 },
  answerCard: { padding: 16, borderRadius: tokens.radius.lg, backgroundColor: tokens.bg.surfaceContainer, borderWidth: 1, borderColor: tokens.border.outlineVariant, gap: 8 },
  answerHeader: { flexDirection: "row", alignItems: "center", justifyContent: "space-between" },
  answerLabel: { color: tokens.brand.tertiary, fontSize: 10, fontWeight: tokens.weight.extrabold, letterSpacing: 1.4 },
  answerHint: { color: tokens.text.tertiary, fontSize: 10, marginTop: 2 },
  answerText: { color: tokens.text.primary, fontSize: 16, lineHeight: 23, fontWeight: tokens.weight.semibold },
  offlineNote: { color: tokens.text.tertiary, fontSize: 11, lineHeight: 16, textAlign: "center" },
  roleplayWrap: { flex: 1, paddingHorizontal: 16, paddingBottom: 8 },
  doneWrap: { flex: 1, justifyContent: "center", padding: 28, gap: 16, alignItems: "center" },
  doneEyebrow: { color: tokens.brand.primary, fontSize: 10, fontWeight: tokens.weight.extrabold, letterSpacing: 1.3 },
  doneTitle: { color: tokens.text.primary, fontSize: 26, textAlign: "center", fontWeight: tokens.weight.black, fontFamily: tokens.font.display },
  doneText: { color: tokens.text.secondary, fontSize: 14, lineHeight: 21, textAlign: "center" },
});
