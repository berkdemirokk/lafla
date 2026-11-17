// Lafla — Personal Weakness Report (Premium feature).
//
// 2026-05-21 — Türk öğrenciye "haftalık zayıflık raporu" verir. Mevcut
// mistake-tracker pattern istatistiklerini topluyor; bu ekran onları
// gruplandırıp "Bu hafta 'present perfect'te 12 hata yaptın" der.
//
// Free: locked preview + paywall
// Premium: top 5 zayıflık + her biri için ne yapacağı + drill önerisi

import { useCallback, useEffect, useState } from "react";
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  ScrollView,
} from "react-native";
import { ThemedStatusBar } from "../components/ThemedStatusBar";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

import { tokens } from "../theme";
import { isPremium } from "../lib/iap";
import { getMistakeDNA } from "../lib/mistake-dna";
import { PRO_MONTHLY_PRICE_COMPACT } from "../lib/monetization";
import { useTranslation } from "../lib/i18n";
import { AsyncScreenState, type AsyncScreenStatus } from "../components/AsyncScreenState";

interface WeaknessRow {
  patternId: string;
  count: number;
  reason_tr: string;
  example_right: string;
  example_wrong?: string;
  weight: number;
}

export default function WeaknessReportScreen() {
  const router = useRouter();
  const { t } = useTranslation();
  const [premium, setPremium] = useState<boolean | null>(null);
  const [rows, setRows] = useState<WeaknessRow[]>([]);
  const [focusLabel, setFocusLabel] = useState("");
  const [totalRecent, setTotalRecent] = useState(0);
  const [status, setStatus] = useState<AsyncScreenStatus>("loading");

  const load = useCallback(async () => {
    setStatus("loading");
    try {
      const isP = await isPremium();
      setPremium(isP);
      if (isP) {
        const dna = await getMistakeDNA(21);
        const enriched = (dna?.items ?? []).map<WeaknessRow>((item) => ({
          patternId: item.pattern.id,
          count: item.recentCount,
          reason_tr: item.pattern.reason_tr,
          example_right: item.pattern.example_right,
          example_wrong: item.pattern.example_wrong,
          weight: item.pattern.weight,
        }));
        setFocusLabel(dna?.dominantLabelTr ?? "");
        setTotalRecent(dna?.totalRecent ?? 0);
        setRows(enriched);
      }
      setStatus("ready");
    } catch {
      setStatus("error");
    }
  }, []);
  useEffect(() => { void load(); }, [load]);

  if (status !== "ready" || premium === null) {
    return (
      <SafeAreaView style={styles.safe} edges={["top", "bottom"]}>
        <ThemedStatusBar />
        <AsyncScreenState
          status={status === "ready" ? "loading" : status}
          onRetry={() => void load()}
        />
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
          hitSlop={12}
          accessibilityRole="button"
          accessibilityLabel={t("common.back")}
        >
          <Text style={styles.backText}>‹</Text>
        </Pressable>
        <Text style={styles.title}>{t("weakness.title")}</Text>
        <View style={styles.backBtn} />
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        {!premium ? (
          <PaywallPreview onUpgrade={() => router.push("/paywall?from=weakness" as never)} />
        ) : rows.length === 0 ? (
          <NoDataYet onGo={() => router.replace("/today" as never)} />
        ) : (
          <Report
            rows={rows}
            focusLabel={focusLabel}
            totalRecent={totalRecent}
            onTrain={() => router.push("/mistake-coach" as never)}
          />
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

function PaywallPreview({ onUpgrade }: { onUpgrade: () => void }) {
  const { t } = useTranslation();
  return (
    <View>
      <View style={styles.lockHero}>
        <Text style={styles.lockEmoji}>📊</Text>
        <Text style={styles.lockTitle}>{t("weakness.hero")}</Text>
      </View>

      <View style={styles.previewCard}>
        <Text style={styles.previewLabel}>{t("weakness.sample")}</Text>
        <PreviewWeakness
          rank={1}
          count={18}
          reason={t("weakness.preview.present_perfect")}
          example="'I lived here for 3 years' → 'I've lived here for 3 years'"
        />
        <PreviewWeakness
          rank={2}
          count={11}
          reason={t("weakness.preview.agree")}
          example="'I am agree' → 'I agree'"
        />
        <PreviewWeakness
          rank={3}
          count={9}
          reason={t("weakness.preview.opinion")}
          example="'According to me' → 'In my opinion'"
        />
      </View>

      <View style={styles.benefitsCard}>
        <Text style={styles.benefitsTitle}>{t("ielts_band.unlocked")}</Text>
        <BenefitLine icon="📊" text={t("weakness.benefit_top")} />
        <BenefitLine icon="🎯" text={t("weakness.benefit_correct")} />
        <BenefitLine icon="📚" text={t("weakness.benefit_drill")} />
        <BenefitLine icon="📈" text={t("weakness.benefit_progress")} />
      </View>

      <Pressable
        onPress={onUpgrade}
        style={({ pressed }) => [styles.cta, pressed && { opacity: 0.88 }]}
        accessibilityRole="button"
        accessibilityLabel={t("ielts_band.unlock")}
      >
        <Text style={styles.ctaText}>
          {t("ielts_band.unlock_price", { price: PRO_MONTHLY_PRICE_COMPACT })}
        </Text>
      </Pressable>
    </View>
  );
}

function NoDataYet({ onGo }: { onGo: () => void }) {
  const { t } = useTranslation();
  return (
    <View style={styles.notReadyWrap}>
      <Text style={styles.notReadyEmoji}>✨</Text>
      <Text style={styles.notReadyTitle}>{t("weakness.empty_title")}</Text>
      <Text style={styles.notReadySub}>
        {t("weakness.empty_body")}
      </Text>
      <Pressable
        onPress={onGo}
        style={({ pressed }) => [styles.cta, pressed && { opacity: 0.88 }]}
        accessibilityRole="button"
        accessibilityLabel={t("weakness.go_today")}
      >
        <Text style={styles.ctaText}>{t("weakness.go_today")}</Text>
      </Pressable>
    </View>
  );
}

function Report({
  rows,
  focusLabel,
  totalRecent,
  onTrain,
}: {
  rows: WeaknessRow[];
  focusLabel: string;
  totalRecent: number;
  onTrain: () => void;
}) {
  const { t, locale } = useTranslation();
  return (
    <View>
      <View style={styles.summaryCard}>
        <Text style={styles.summaryLabel}>{t("weakness.summary")}</Text>
        <Text style={styles.summaryNum}>{totalRecent}</Text>
        <Text style={styles.summarySub}>
          {t("weakness.focus", { focus: focusLabel || t("weakness.general_focus") })}
        </Text>
      </View>

      <Pressable
        onPress={onTrain}
        style={({ pressed }) => [styles.coachCta, pressed && { opacity: 0.88 }]}
        accessibilityRole="button"
        accessibilityLabel={t("weakness.start_label")}
      >
        <Text style={styles.coachCtaEyebrow}>{t("weakness.coach_eyebrow")}</Text>
        <Text style={styles.coachCtaTitle}>{t("weakness.coach_title")}</Text>
      </Pressable>

      {rows.map((row, i) => (
        <View key={row.patternId} style={styles.weaknessCard}>
          <View style={styles.weaknessHeader}>
            <Text style={styles.weaknessRank}>#{i + 1}</Text>
            <View style={styles.weaknessCountBadge}>
              <Text style={styles.weaknessCountText}>{row.count}×</Text>
            </View>
          </View>
          <Text style={styles.weaknessReason}>
            {locale === "tr" ? row.reason_tr : t("learning.mistake_fallback_en")}
          </Text>
          {row.example_wrong && (
            <Text style={styles.weaknessWrong}>✗ {row.example_wrong}</Text>
          )}
          <Text style={styles.weaknessRight}>✓ {row.example_right}</Text>
        </View>
      ))}

      <Text style={styles.disclaimer}>
        {t("weakness.disclaimer")}
      </Text>
    </View>
  );
}

function PreviewWeakness({
  rank,
  count,
  reason,
  example,
}: {
  rank: number;
  count: number;
  reason: string;
  example: string;
}) {
  return (
    <View style={styles.previewWeakness}>
      <Text style={styles.previewRank}>#{rank} · {count}×</Text>
      <Text style={styles.previewReason}>{reason}</Text>
      <Text style={styles.previewExample}>{example}</Text>
    </View>
  );
}

function BenefitLine({ icon, text }: { icon: string; text: string }) {
  return (
    <View style={styles.benefitLine}>
      <Text style={styles.benefitIcon}>{icon}</Text>
      <Text style={styles.benefitText}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: tokens.bg.app },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingTop: 8,
    paddingBottom: 12,
  },
  backBtn: { width: 44, height: 44, alignItems: "center", justifyContent: "center" },
  backText: { fontSize: 32, color: tokens.text.primary, fontWeight: tokens.weight.bold, marginTop: -4 },
  title: { fontSize: 18, fontWeight: tokens.weight.black, color: tokens.text.primary, letterSpacing: -0.3, fontFamily: tokens.font.display },
  content: { paddingHorizontal: 20, paddingBottom: 32, gap: 14 },

  // PaywallPreview
  lockHero: { alignItems: "center", paddingVertical: 22, gap: 10 },
  lockEmoji: { fontSize: 56 },
  lockTitle: {
    fontSize: 22,
    fontWeight: tokens.weight.black,
    color: tokens.text.primary,
    textAlign: "center",
    fontFamily: tokens.font.display,
    letterSpacing: -0.5,
    lineHeight: 28,
  },
  previewCard: {
    padding: 16,
    borderRadius: tokens.radius.lg,
    backgroundColor: tokens.bg.surfaceContainer,
    borderWidth: 1.5,
    borderColor: tokens.brand.primary,
    opacity: 0.75,
    gap: 12,
  },
  previewLabel: {
    fontSize: 10,
    fontWeight: tokens.weight.extrabold,
    color: tokens.brand.primary,
    letterSpacing: 1.5,
    marginBottom: 4,
  },
  previewWeakness: { gap: 3 },
  previewRank: {
    fontSize: 11,
    fontWeight: tokens.weight.extrabold,
    color: tokens.brand.primary,
    letterSpacing: 0.6,
  },
  previewReason: {
    fontSize: 13,
    color: tokens.text.primary,
    fontWeight: tokens.weight.semibold,
  },
  previewExample: {
    fontSize: 12,
    color: tokens.text.tertiary,
    fontStyle: "italic",
  },
  benefitsCard: {
    padding: 18,
    borderRadius: tokens.radius.lg,
    backgroundColor: tokens.bg.surfaceContainer,
    borderWidth: 1,
    borderColor: tokens.border.outlineVariant,
    gap: 8,
    // Faz 1 premium polish
    ...tokens.shadow.card,
  },
  benefitsTitle: {
    fontSize: 14,
    fontWeight: tokens.weight.extrabold,
    color: tokens.text.primary,
    letterSpacing: 0.3,
    marginBottom: 4,
  },
  benefitLine: { flexDirection: "row", alignItems: "center", gap: 10 },
  benefitIcon: { fontSize: 18, width: 26 },
  benefitText: { fontSize: 13, color: tokens.text.primary, flex: 1, lineHeight: 18 },
  cta: {
    paddingVertical: 16,
    borderRadius: tokens.radius.full,
    backgroundColor: tokens.brand.primary,
    alignItems: "center",
    shadowColor: tokens.brand.primary,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 14,
  },
  ctaText: {
    fontSize: 16,
    fontWeight: tokens.weight.extrabold,
    color: tokens.text.onPrimary,
    letterSpacing: 0.4,
  },

  // NoDataYet
  notReadyWrap: { alignItems: "center", paddingVertical: 40, gap: 10 },
  notReadyEmoji: { fontSize: 48 },
  notReadyTitle: {
    fontSize: 18,
    fontWeight: tokens.weight.extrabold,
    color: tokens.text.primary,
  },
  notReadySub: {
    fontSize: 14,
    color: tokens.text.secondary,
    textAlign: "center",
    lineHeight: 20,
    paddingHorizontal: 24,
    marginBottom: 12,
  },

  // Report
  summaryCard: {
    padding: 24,
    borderRadius: tokens.radius.lg,
    backgroundColor: tokens.semantic.errorContainer,
    borderWidth: 2,
    borderColor: tokens.semantic.error,
    alignItems: "center",
    gap: 4,
  },
  summaryLabel: {
    fontSize: 11,
    fontWeight: tokens.weight.extrabold,
    color: tokens.semantic.error,
    letterSpacing: 1.5,
  },
  summaryNum: {
    fontSize: 48,
    fontWeight: tokens.weight.black,
    color: tokens.semantic.error,
    fontFamily: tokens.font.display,
    letterSpacing: -2,
  },
  summarySub: {
    fontSize: 12,
    color: tokens.text.secondary,
    textAlign: "center",
    marginTop: 4,
    paddingHorizontal: 8,
  },
  weaknessCard: {
    padding: 14,
    borderRadius: tokens.radius.lg,
    backgroundColor: tokens.bg.surfaceContainer,
    borderLeftWidth: 3,
    borderLeftColor: tokens.semantic.warning,
    gap: 6,
  },
  coachCta: {
    marginVertical: 14,
    padding: 18,
    borderRadius: tokens.radius.lg,
    backgroundColor: tokens.brand.primary,
    gap: 4,
  },
  coachCtaEyebrow: {
    fontSize: 10,
    fontWeight: tokens.weight.extrabold,
    color: tokens.text.onPrimary,
    letterSpacing: 1.2,
    opacity: 0.72,
  },
  coachCtaTitle: {
    fontSize: 17,
    fontWeight: tokens.weight.black,
    color: tokens.text.onPrimary,
  },
  weaknessHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  weaknessRank: {
    fontSize: 13,
    fontWeight: tokens.weight.black,
    color: tokens.text.secondary,
    fontFamily: tokens.font.display,
  },
  weaknessCountBadge: {
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: tokens.radius.full,
    backgroundColor: tokens.semantic.errorContainer,
    borderWidth: 1,
    borderColor: tokens.semantic.error,
  },
  weaknessCountText: {
    fontSize: 11,
    fontWeight: tokens.weight.extrabold,
    color: tokens.semantic.error,
  },
  weaknessReason: {
    fontSize: 14,
    fontWeight: tokens.weight.bold,
    color: tokens.text.primary,
    lineHeight: 19,
  },
  weaknessWrong: {
    fontSize: 12,
    color: tokens.semantic.error,
    fontStyle: "italic",
  },
  weaknessRight: {
    fontSize: 13,
    color: tokens.brand.tertiary,
    fontWeight: tokens.weight.bold,
  },
  disclaimer: {
    fontSize: 11,
    color: tokens.text.tertiary,
    textAlign: "center",
    lineHeight: 16,
    paddingHorizontal: 16,
    marginTop: 8,
  },
});
