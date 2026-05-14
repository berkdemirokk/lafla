// Vize Mülakat Bankası — browse and practice real visa interview questions.
// Turkey-specific moat: questions reported by Turkish applicants at US/UK/
// Schengen/Canada/Australia consulates, with category & difficulty filters.

import { useEffect, useMemo, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

import {
  VISA_QUESTIONS,
  VISA_COUNTRY_LABELS,
  VISA_TYPE_LABELS,
  VISA_CATEGORY_LABELS,
  type VisaCountry,
  type VisaType,
  type VisaQuestion,
} from "../data/visa-questions";
import { getPracticedQuestions } from "../lib/visa-bank";
import { tokens } from "../theme";

const COUNTRIES: readonly VisaCountry[] = [
  "us",
  "uk",
  "schengen",
  "canada",
  "australia",
];

function truncate(text: string, max: number): string {
  if (text.length <= max) return text;
  return text.slice(0, max - 1).trimEnd() + "…";
}

export default function VisaBankScreen() {
  const router = useRouter();
  const [practiced, setPracticed] = useState<Set<string>>(new Set());
  const [country, setCountry] = useState<VisaCountry>("us");
  const [visaType, setVisaType] = useState<VisaType | null>(null);

  useEffect(() => {
    getPracticedQuestions().then((ids) => setPracticed(new Set(ids)));
  }, []);

  // Visa types available within the selected country
  const typesForCountry = useMemo(() => {
    const set = new Set<VisaType>();
    for (const q of VISA_QUESTIONS) {
      if (q.country === country) set.add(q.visaType);
    }
    return Array.from(set);
  }, [country]);

  // Reset visaType filter when country changes
  useEffect(() => {
    setVisaType(null);
  }, [country]);

  const filtered = useMemo(() => {
    return VISA_QUESTIONS.filter((q) => {
      if (q.country !== country) return false;
      if (visaType && q.visaType !== visaType) return false;
      return true;
    });
  }, [country, visaType]);

  const countryPracticed = useMemo(() => {
    const inCountry = VISA_QUESTIONS.filter((q) => q.country === country);
    const total = inCountry.length;
    const done = inCountry.filter((q) => practiced.has(q.id)).length;
    return { done, total };
  }, [country, practiced]);

  return (
    <SafeAreaView style={styles.safe} edges={["top", "bottom"]}>
      <StatusBar style="dark" />

      <View style={styles.header}>
        <Pressable
          onPress={() => router.back()}
          style={styles.backBtn}
          hitSlop={12}
        >
          <Text style={styles.backText}>← Geri</Text>
        </Pressable>
        <Text style={styles.title}>Vize Mülakat Bankası</Text>
        <View style={styles.spacer} />
      </View>

      <ScrollView
        contentContainerStyle={styles.scroll}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.lede}>
          Türk başvuranların gerçekten karşılaştığı mülakat soruları.
          Yüksek puanlı cevap kalıpları ve sık yapılan hatalar.
        </Text>

        {/* Country pills */}
        <View style={styles.pillRow}>
          {COUNTRIES.map((c) => {
            const active = c === country;
            return (
              <Pressable
                key={c}
                onPress={() => setCountry(c)}
                style={[styles.pill, active && styles.pillActive]}
              >
                <Text
                  style={[
                    styles.pillText,
                    active && styles.pillTextActive,
                  ]}
                >
                  {VISA_COUNTRY_LABELS[c]}
                </Text>
              </Pressable>
            );
          })}
        </View>

        {/* Progress bar for the active country */}
        <View style={styles.progressWrap}>
          <Text style={styles.progressLabel}>
            {VISA_COUNTRY_LABELS[country]} — {countryPracticed.done}/
            {countryPracticed.total} soru çalışıldı
          </Text>
          <View style={styles.bar}>
            <View
              style={[
                styles.barFill,
                {
                  width:
                    countryPracticed.total === 0
                      ? "0%"
                      : `${
                          (countryPracticed.done / countryPracticed.total) *
                          100
                        }%`,
                },
              ]}
            />
          </View>
        </View>

        {/* Visa type sub-pills */}
        {typesForCountry.length > 0 ? (
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.subPillRow}
          >
            <Pressable
              onPress={() => setVisaType(null)}
              style={[styles.subPill, !visaType && styles.subPillActive]}
            >
              <Text
                style={[
                  styles.subPillText,
                  !visaType && styles.subPillTextActive,
                ]}
              >
                Tümü
              </Text>
            </Pressable>
            {typesForCountry.map((t) => {
              const active = t === visaType;
              return (
                <Pressable
                  key={t}
                  onPress={() => setVisaType(t)}
                  style={[styles.subPill, active && styles.subPillActive]}
                >
                  <Text
                    style={[
                      styles.subPillText,
                      active && styles.subPillTextActive,
                    ]}
                  >
                    {VISA_TYPE_LABELS[t]}
                  </Text>
                </Pressable>
              );
            })}
          </ScrollView>
        ) : null}

        {/* Question cards */}
        <View style={styles.cards}>
          {filtered.length === 0 ? (
            <Text style={styles.emptyText}>
              Bu filtre için soru yok. Bir filtreyi kaldır.
            </Text>
          ) : (
            filtered.map((q) => (
              <QuestionRow
                key={q.id}
                question={q}
                practiced={practiced.has(q.id)}
                onPress={() => router.push(`/visa-question/${q.id}` as never)}
              />
            ))
          )}
        </View>

        <View style={styles.bottomSpacer} />
      </ScrollView>
    </SafeAreaView>
  );
}

interface RowProps {
  question: VisaQuestion;
  practiced: boolean;
  onPress: () => void;
}

function QuestionRow({ question, practiced, onPress }: RowProps) {
  return (
    <Pressable style={styles.card} onPress={onPress}>
      <View style={styles.cardHeader}>
        <Text style={styles.cardCategory}>
          {VISA_CATEGORY_LABELS[question.category]}
        </Text>
        <View style={styles.cardMetaRight}>
          <Text style={styles.cardDifficulty}>{question.difficulty}</Text>
          {practiced ? (
            <Text style={styles.cardCheck}>✓</Text>
          ) : null}
        </View>
      </View>
      <Text style={styles.cardQuestion}>
        {truncate(question.question_en, 110)}
      </Text>
      <Text style={styles.cardSub}>
        {truncate(question.question_tr, 90)}
      </Text>
      {question.recentlyReported_2026 ? (
        <View style={styles.recentTag}>
          <Text style={styles.recentTagText}>2026'da raporlandı</Text>
        </View>
      ) : null}
    </Pressable>
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
  title: {
    fontSize: 18,
    fontWeight: tokens.weight.extrabold,
    color: tokens.text.primary,
  },
  spacer: { width: 70 },
  scroll: {
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  lede: {
    fontSize: 14,
    color: tokens.text.secondary,
    lineHeight: 20,
    marginBottom: 16,
  },
  pillRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    marginBottom: 16,
  },
  pill: {
    paddingVertical: 8,
    paddingHorizontal: 14,
    backgroundColor: tokens.bg.surfaceContainer,
    borderRadius: tokens.radius.full,
    borderWidth: 1.5,
    borderColor: "transparent",
  },
  pillActive: {
    backgroundColor: tokens.brand.primary,
    borderColor: tokens.brand.primary,
  },
  pillText: {
    fontSize: 13,
    fontWeight: tokens.weight.semibold,
    color: tokens.text.secondary,
  },
  pillTextActive: {
    color: tokens.brand.onPrimary,
  },
  progressWrap: {
    marginBottom: 16,
  },
  progressLabel: {
    fontSize: 13,
    fontWeight: tokens.weight.semibold,
    color: tokens.text.secondary,
    marginBottom: 6,
  },
  bar: {
    height: 6,
    backgroundColor: tokens.bg.surfaceContainer,
    borderRadius: 3,
    overflow: "hidden",
  },
  barFill: {
    height: "100%",
    backgroundColor: tokens.brand.tertiary,
    borderRadius: 3,
  },
  subPillRow: {
    gap: 8,
    paddingBottom: 16,
    paddingRight: 8,
  },
  subPill: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    backgroundColor: tokens.bg.surfaceContainerLow,
    borderRadius: tokens.radius.full,
    borderWidth: 1,
    borderColor: tokens.border.outlineVariant,
  },
  subPillActive: {
    backgroundColor: tokens.brand.secondary,
    borderColor: tokens.brand.secondary,
  },
  subPillText: {
    fontSize: 12,
    fontWeight: tokens.weight.medium,
    color: tokens.text.secondary,
  },
  subPillTextActive: {
    color: tokens.brand.onSecondary,
  },
  cards: {
    gap: 10,
  },
  card: {
    padding: 14,
    borderRadius: tokens.radius.base,
    backgroundColor: tokens.bg.surfaceContainer,
    borderWidth: 1,
    borderColor: tokens.border.outlineVariant,
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  cardCategory: {
    fontSize: 11,
    fontWeight: tokens.weight.bold,
    color: tokens.brand.tertiary,
    textTransform: "uppercase",
    letterSpacing: 0.6,
  },
  cardMetaRight: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  cardDifficulty: {
    fontSize: 11,
    fontWeight: tokens.weight.bold,
    color: tokens.text.tertiary,
  },
  cardCheck: {
    fontSize: 14,
    fontWeight: tokens.weight.extrabold,
    color: tokens.brand.tertiary,
  },
  cardQuestion: {
    fontSize: 15,
    fontWeight: tokens.weight.semibold,
    color: tokens.text.primary,
    lineHeight: 21,
    marginBottom: 4,
  },
  cardSub: {
    fontSize: 13,
    color: tokens.text.secondary,
    lineHeight: 18,
  },
  recentTag: {
    marginTop: 10,
    alignSelf: "flex-start",
    backgroundColor: tokens.brand.primarySoft,
    paddingVertical: 3,
    paddingHorizontal: 8,
    borderRadius: tokens.radius.sm,
  },
  recentTagText: {
    fontSize: 11,
    fontWeight: tokens.weight.bold,
    color: tokens.text.primary,
  },
  emptyText: {
    fontSize: 14,
    color: tokens.text.tertiary,
    textAlign: "center",
    padding: 32,
  },
  bottomSpacer: { height: 24 },
});
