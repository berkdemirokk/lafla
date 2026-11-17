import { useCallback, useEffect, useState } from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { ThemedStatusBar } from "../components/ThemedStatusBar";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

import { SpeakerButton } from "../components/SpeakerButton";
import {
  comparisonDaysApart,
  getProgressComparisons,
  type ProgressComparison,
} from "../lib/progress-comparison";
import { tokens } from "../theme";
import { useTranslation } from "../lib/i18n";
import { AsyncScreenState, type AsyncScreenStatus } from "../components/AsyncScreenState";
import {
  getWeeklyLearningEvidence,
  type WeeklyLearningEvidence,
} from "../lib/learning-evidence";

export default function ProgressCompareScreen() {
  const router = useRouter();
  const { t } = useTranslation();
  const [items, setItems] = useState<ProgressComparison[]>([]);
  const [evidence, setEvidence] = useState<WeeklyLearningEvidence | null>(null);
  const [status, setStatus] = useState<AsyncScreenStatus>("loading");

  const load = useCallback(async () => {
    setStatus("loading");
    try {
      const [comparisons, weekly] = await Promise.all([
        getProgressComparisons(),
        getWeeklyLearningEvidence(),
      ]);
      setItems(comparisons);
      setEvidence(weekly);
      setStatus("ready");
    } catch {
      setStatus("error");
    }
  }, []);
  useEffect(() => { void load(); }, [load]);

  return (
    <SafeAreaView style={styles.safe} edges={["top", "bottom"]}>
      <ThemedStatusBar />
      <View style={styles.header}>
        <Pressable
          onPress={() => router.back()}
          style={styles.back}
          accessibilityRole="button"
          accessibilityLabel={t("common.back")}
        >
          <Text style={styles.backText}>‹</Text>
        </Pressable>
        <Text style={styles.headerTitle}>{t("progress_compare.header")}</Text>
        <View style={styles.back} />
      </View>
      {status !== "ready" ? (
        <AsyncScreenState status={status} onRetry={() => void load()} />
      ) : <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>{t("progress_compare.title")}</Text>
        <Text style={styles.subtitle}>{t("progress_compare.subtitle")}</Text>
        {evidence ? <WeeklyEvidence summary={evidence} /> : null}
        {items.length === 0 ? (
          <View style={styles.empty}>
            <Text style={styles.emptyTitle}>{t("progress_compare.empty_title")}</Text>
            <Text style={styles.emptyText}>{t("progress_compare.empty_body")}</Text>
          </View>
        ) : (
          items.map((item) => (
            <ComparisonCard key={item.scenarioId} item={item} />
          ))
        )}
      </ScrollView>}
    </SafeAreaView>
  );
}

function WeeklyEvidence({ summary }: { summary: WeeklyLearningEvidence }) {
  const { t } = useTranslation();
  const trend =
    summary.scoreChange === null
      ? t("progress_compare.collecting_baseline")
      : summary.scoreChange >= 0
        ? t("progress_compare.score_up", { score: String(summary.scoreChange) })
        : t("progress_compare.score_down", {
            score: String(Math.abs(summary.scoreChange)),
          });
  return (
    <View style={styles.evidenceBand}>
      <View style={styles.evidenceHeader}>
        <Text style={styles.evidenceTitle}>{t("progress_compare.this_week")}</Text>
        <Text style={styles.evidenceTrend}>{trend}</Text>
      </View>
      <View style={styles.evidenceGrid}>
        <EvidenceMetric
          value={String(summary.spokenMinutes)}
          label={t("progress_compare.spoken_minutes")}
        />
        <EvidenceMetric
          value={String(summary.completedScenes)}
          label={t("progress_compare.completed_scenes")}
        />
        <EvidenceMetric
          value={String(summary.unsupportedScenes)}
          label={t("progress_compare.without_help")}
        />
        <EvidenceMetric
          value={String(summary.pronunciationAttempts)}
          label={t("progress_compare.voice_checks")}
        />
      </View>
    </View>
  );
}

function EvidenceMetric({ value, label }: { value: string; label: string }) {
  return (
    <View style={styles.evidenceMetric}>
      <Text style={styles.evidenceValue}>{value}</Text>
      <Text style={styles.evidenceLabel}>{label}</Text>
    </View>
  );
}

function ComparisonCard({ item }: { item: ProgressComparison }) {
  const { t } = useTranslation();
  const repeat = item.repeats[0];
  const days = comparisonDaysApart(item);
  return (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>{item.scenarioTitle}</Text>
      <AudioLine label={t("progress_compare.first")} text={item.first.text} />
      <View style={styles.connector} />
      <AudioLine label={t("progress_compare.coached")} text={item.coachedText} coached />
      <View style={styles.connector} />
      {repeat ? (
        <AudioLine
          label={days !== null && days >= 6 ? t("progress_compare.days_later", { days: String(days) }) : t("progress_compare.next_attempt")}
          text={repeat.text}
        />
      ) : (
        <View style={styles.lockedLine}>
          <Text style={styles.lockedLabel}>{t("progress_compare.one_week_later")}</Text>
          <Text style={styles.lockedText}>{t("progress_compare.locked_body")}</Text>
        </View>
      )}
    </View>
  );
}

function AudioLine({
  label,
  text,
  coached = false,
}: {
  label: string;
  text: string;
  coached?: boolean;
}) {
  return (
    <View style={[styles.audioLine, coached && styles.audioLineCoached]}>
      <View style={styles.audioText}>
        <Text style={[styles.audioLabel, coached && styles.audioLabelCoached]}>
          {label}
        </Text>
        <Text style={styles.audioSentence}>{text}</Text>
      </View>
      <SpeakerButton text={text} size="sm" />
    </View>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: tokens.bg.app },
  header: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingHorizontal: 16, paddingVertical: 8 },
  back: { width: 44, height: 44, alignItems: "center", justifyContent: "center" },
  backText: { color: tokens.text.primary, fontSize: 34, marginTop: -4 },
  headerTitle: { color: tokens.text.primary, fontSize: 18, fontWeight: tokens.weight.black },
  content: { padding: 20, paddingBottom: 44, gap: 16 },
  title: { color: tokens.text.primary, fontSize: 30, fontWeight: tokens.weight.black, fontFamily: tokens.font.display },
  subtitle: { color: tokens.text.secondary, fontSize: 14, lineHeight: 20, marginBottom: 4 },
  evidenceBand: { paddingVertical: 16, borderTopWidth: 1, borderBottomWidth: 1, borderColor: tokens.border.outlineVariant, gap: 14 },
  evidenceHeader: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", gap: 12 },
  evidenceTitle: { color: tokens.text.primary, fontSize: 16, fontWeight: tokens.weight.extrabold },
  evidenceTrend: { color: tokens.brand.tertiary, fontSize: 12, fontWeight: tokens.weight.bold, flexShrink: 1, textAlign: "right" },
  evidenceGrid: { flexDirection: "row", justifyContent: "space-between", gap: 8 },
  evidenceMetric: { flex: 1, minWidth: 0, gap: 3 },
  evidenceValue: { color: tokens.text.primary, fontSize: 22, fontWeight: tokens.weight.black },
  evidenceLabel: { color: tokens.text.tertiary, fontSize: 10, lineHeight: 14 },
  card: { padding: 16, borderRadius: tokens.radius.lg, backgroundColor: tokens.bg.surfaceContainer, borderWidth: 1, borderColor: tokens.border.outlineVariant },
  cardTitle: { color: tokens.text.primary, fontSize: 16, fontWeight: tokens.weight.extrabold, marginBottom: 14 },
  audioLine: { flexDirection: "row", alignItems: "center", padding: 12, borderRadius: tokens.radius.base, backgroundColor: tokens.bg.surfaceContainerHigh, gap: 10 },
  audioLineCoached: { borderWidth: 1, borderColor: tokens.brand.tertiary, backgroundColor: tokens.brand.tertiarySoft },
  audioText: { flex: 1, gap: 4 },
  audioLabel: { color: tokens.text.tertiary, fontSize: 9, fontWeight: tokens.weight.extrabold, letterSpacing: 1.1 },
  audioLabelCoached: { color: tokens.brand.tertiary },
  audioSentence: { color: tokens.text.primary, fontSize: 14, lineHeight: 20 },
  connector: { width: 1, height: 10, backgroundColor: tokens.border.outlineVariant, marginLeft: 28 },
  lockedLine: { padding: 12, borderRadius: tokens.radius.base, borderWidth: 1, borderStyle: "dashed", borderColor: tokens.border.outlineVariant, gap: 4 },
  lockedLabel: { color: tokens.text.tertiary, fontSize: 9, fontWeight: tokens.weight.extrabold, letterSpacing: 1.1 },
  lockedText: { color: tokens.text.secondary, fontSize: 13 },
  empty: { marginTop: 24, padding: 24, alignItems: "center", borderRadius: tokens.radius.lg, backgroundColor: tokens.bg.surfaceContainer, gap: 8 },
  emptyTitle: { color: tokens.text.primary, fontSize: 18, fontWeight: tokens.weight.extrabold },
  emptyText: { color: tokens.text.secondary, fontSize: 13, lineHeight: 19, textAlign: "center" },
});
