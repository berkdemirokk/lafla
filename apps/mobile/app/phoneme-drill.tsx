// Lafla — Phoneme Drill mod (Faz 2 yeni mod).
//
// 2026-05-23 — Sessiz ortam alternatifi. Roleplay mic'siz çalışamaz; bu
// mod kısa kelime/cümle pratiği için hafif yapılı — kullanıcı 30 sn'de
// 5 drill yapar, her birinde 1 fonem hedefi vurgulanır.
//
// Niye sessiz değil:
//   • Hala mic gerekir (phoneme grader STT bekler)
//   • AMA tek kelime/kısa cümle = hızlı bitir, sosyal stres yok
//   • Türk öğrenci telefonu yüzüne yaklaştırıp fısıldayabilir
//
// Brand: adult premium, çocuksu değil. Audit feedback: "AI gideri olmadan
// mükemmel" — bu ekran TAMAMEN local: phoneme grader + scripted drill.

import { useCallback, useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  ScrollView,
} from "react-native";
import { ThemedStatusBar } from "../components/ThemedStatusBar";
import { useFocusEffect, useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

import { tokens } from "../theme";
import { Icon } from "../components/Icon";
import { PronouncePhrase } from "../components/exercises/PronouncePhrase";
import type { ExerciseResult } from "../lib/engine";
import { getCefrLevel, type CefrLevel } from "../lib/cefr-level";
import { trackEvent } from "../lib/analytics";
import { hapticImpact, hapticSuccess } from "../lib/feedback";
import {
  DRILL_BANK,
  pickDrillsForLevel,
  type DrillItem,
} from "../data/phoneme-drill-data";
import { useTranslation } from "../lib/i18n";
import { AsyncScreenState, type AsyncScreenStatus } from "../components/AsyncScreenState";

const SESSION_SIZE = 5;

export default function PhonemeDrillScreen() {
  const router = useRouter();
  const { t } = useTranslation();
  const [drills, setDrills] = useState<DrillItem[]>([]);
  const [idx, setIdx] = useState(0);
  const [scores, setScores] = useState<number[]>([]);
  const [finished, setFinished] = useState(false);
  const [userLevel, setUserLevel] = useState<CefrLevel | null>(null);
  const [status, setStatus] = useState<AsyncScreenStatus>("loading");

  const load = useCallback(async () => {
    setStatus("loading");
    try {
      const lvl = await getCefrLevel().catch(() => null);
      setUserLevel(lvl);
      const session = pickDrillsForLevel(lvl ?? "B1", SESSION_SIZE);
      if (session.length === 0) throw new Error("No pronunciation drills available");
      setDrills(session);
      setIdx(0);
      setScores([]);
      setFinished(false);
      setStatus("ready");
    } catch {
      setStatus("error");
    }
  }, []);

  useFocusEffect(
    useCallback(() => {
      void load();
      void trackEvent("phoneme_drill_started").catch(() => {});
    }, [load]),
  );

  const handleDrillComplete = (result: ExerciseResult) => {
    const next = [...scores, result.score];
    setScores(next);
    if (idx + 1 < drills.length) {
      setIdx(idx + 1);
    } else {
      setFinished(true);
      hapticSuccess();
      const avg =
        next.reduce((s, x) => s + x, 0) / Math.max(1, next.length);
      void trackEvent("phoneme_drill_session_complete", {
        avg_score: Math.round(avg),
        count: next.length,
      }).catch(() => {});
    }
  };

  // 2026-05-26 (P3-I fix) — Mic izni reddedilirse PronouncePhrase iç
  // error path'inde "Bu egzersizi atla" butonu görünür; bu prop'u
  // bağlamamış olmak drill rotasyonunda kullanıcıyı stuck bırakıyordu.
  // Skip = bu drill'i 0 puanla geç, session devam etsin.
  const handleDrillSkip = () => {
    const cur = drills[idx];
    handleDrillComplete({
      exercise_id: `drill.${cur?.target ?? "unknown"}.${idx}`,
      exercise_type: "pronounce_phrase",
      correct: false,
      score: 0,
      feedback: "skipped",
    });
  };

  const handleRestart = () => {
    hapticImpact("light");
    void load();
  };

  const currentDrill = drills[idx];

  // ─── Finished state ────────────────────────────────────────
  if (finished) {
    const avg = Math.round(
      scores.reduce((s, x) => s + x, 0) / Math.max(1, scores.length),
    );
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
            <Icon name="arrowLeft" size={24} color={tokens.text.primary} />
          </Pressable>
          <Text style={styles.headerTitle}>{t("phoneme_drill.title")}</Text>
          <View style={{ width: 40 }} />
        </View>
        <ScrollView contentContainerStyle={styles.doneWrap}>
          <View style={styles.scoreHero}>
            <Text style={styles.scoreEyebrow}>{t("practice.session_average")}</Text>
            <Text style={styles.scoreNum}>{avg}</Text>
            <Text style={styles.scoreOf}>/ 100</Text>
          </View>
          <Text style={styles.doneSub}>
            {avg >= 85
              ? t("phoneme_drill.result.high")
              : avg >= 70
                ? t("phoneme_drill.result.medium")
                : t("phoneme_drill.result.low")}
          </Text>
          <View style={styles.doneActions}>
            <Pressable
              onPress={handleRestart}
              style={styles.primaryBtn}
              accessibilityRole="button"
              accessibilityLabel={t("phoneme_drill.restart_label")}
            >
              <Text style={styles.primaryBtnText}>{t("practice.restart")}</Text>
            </Pressable>
            <Pressable
              onPress={() => router.back()}
              style={styles.secondaryBtn}
              accessibilityRole="button"
              accessibilityLabel={t("phoneme_drill.finish_label")}
            >
              <Text style={styles.secondaryBtnText}>{t("practice.finish")}</Text>
            </Pressable>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }

  // ─── Active drill ──────────────────────────────────────────
  if (status !== "ready" || !currentDrill) {
    return (
      <SafeAreaView style={styles.safe} edges={["top", "bottom"]}>
        <ThemedStatusBar />
        <AsyncScreenState
          status={status === "ready" ? "error" : status}
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
          <Icon name="arrowLeft" size={24} color={tokens.text.primary} />
        </Pressable>
        <View style={styles.headerCenter}>
          <Text style={styles.headerTitle}>{t("phoneme_drill.title")}</Text>
          <Text style={styles.headerProgress}>
            {idx + 1} / {drills.length}
          </Text>
        </View>
        <View style={{ width: 40 }} />
      </View>

      {/* Progress dots */}
      <View style={styles.dotsRow}>
        {drills.map((_, i) => (
          <View
            key={i}
            style={[
              styles.dot,
              i < idx && styles.dotDone,
              i === idx && styles.dotActive,
            ]}
          />
        ))}
      </View>

      <ScrollView contentContainerStyle={styles.body}>
        {/* Drill meta */}
        <View style={styles.metaCard}>
          <Text style={styles.metaTarget}>
            {t("phoneme_drill.phoneme")}: {targetLabel(currentDrill.target, t)}
          </Text>
          {currentDrill.ipa_hint && (
            <Text style={styles.metaIpa}>{currentDrill.ipa_hint}</Text>
          )}
          <Text style={styles.metaLevel}>{currentDrill.level}</Text>
        </View>

        {/* Use existing PronouncePhrase for the actual recording UX —
            it already handles phoneme grading, retry, score reveal.
            onSkip 2026-05-26 eklendi: mic izni reddedilirse kullanıcı
            drill rotasyonunda stuck kalmasın. */}
        <PronouncePhrase
          phrase={currentDrill.phrase}
          trHint={currentDrill.tr_hint}
          onComplete={handleDrillComplete}
          onSkip={handleDrillSkip}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

function targetLabel(target: DrillItem["target"], t: ReturnType<typeof useTranslation>["t"]): string {
  switch (target) {
    case "th_voiceless":
      return t("phoneme_drill.target.th_voiceless");
    case "th_voiced":
      return t("phoneme_drill.target.th_voiced");
    case "v_vs_w":
      return "/v/ vs /w/";
    case "ae_vowel":
      return t("phoneme_drill.target.ae_vowel");
    case "ih_vs_iy":
      return "/ɪ/ vs /iː/";
    case "ng_consonant":
      return t("phoneme_drill.target.ng_consonant");
    case "final_voicing":
      return t("phoneme_drill.target.final_voicing");
  }
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: tokens.bg.app },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingTop: 4,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: tokens.border.light,
  },
  backBtn: {
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  headerCenter: { alignItems: "center", gap: 2 },
  headerTitle: {
    fontSize: 17,
    fontWeight: tokens.weight.extrabold,
    color: tokens.text.primary,
    letterSpacing: -0.3,
    fontFamily: tokens.font.display,
  },
  headerProgress: {
    fontSize: 11,
    color: tokens.text.tertiary,
    fontWeight: tokens.weight.bold,
    letterSpacing: 1,
  },
  dotsRow: {
    flexDirection: "row",
    gap: 6,
    paddingHorizontal: 20,
    paddingVertical: 14,
  },
  dot: {
    flex: 1,
    height: 4,
    borderRadius: 2,
    backgroundColor: tokens.bg.surfaceContainerHigh,
  },
  dotActive: {
    backgroundColor: tokens.brand.primary,
    shadowColor: tokens.brand.primary,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.7,
    shadowRadius: 8,
  },
  dotDone: { backgroundColor: tokens.brand.tertiary },

  body: {
    paddingHorizontal: 16,
    paddingBottom: 24,
    gap: 16,
  },
  metaCard: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: tokens.radius.full,
    backgroundColor: tokens.bg.surfaceContainer,
    borderWidth: 1,
    borderColor: tokens.border.outlineVariant,
    alignSelf: "flex-start",
  },
  metaTarget: {
    fontSize: 11,
    fontWeight: tokens.weight.extrabold,
    color: tokens.brand.primary,
    letterSpacing: 1,
  },
  metaIpa: {
    fontSize: 12,
    color: tokens.brand.tertiary,
    fontWeight: tokens.weight.bold,
    fontFamily: tokens.font.system,
  },
  metaLevel: {
    fontSize: 10,
    fontWeight: tokens.weight.extrabold,
    color: tokens.text.tertiary,
    letterSpacing: 0.5,
    marginLeft: "auto",
  },

  // ─── Finished
  doneWrap: {
    flexGrow: 1,
    paddingHorizontal: 24,
    paddingTop: 32,
    paddingBottom: 40,
    alignItems: "center",
    gap: 18,
  },
  scoreHero: {
    alignItems: "center",
    paddingVertical: 28,
    paddingHorizontal: 36,
    backgroundColor: tokens.brand.secondary,
    borderRadius: tokens.radius.lg,
    borderWidth: 1,
    borderColor: tokens.brand.primaryFixed,
    ...tokens.shadow.hero,
  },
  scoreEyebrow: {
    fontSize: 11,
    fontWeight: tokens.weight.extrabold,
    color: tokens.brand.onSecondary,
    letterSpacing: 1.4,
    marginBottom: 6,
  },
  scoreNum: {
    fontSize: 64,
    fontWeight: tokens.weight.black,
    color: tokens.brand.primaryFixed,
    letterSpacing: -2,
    lineHeight: 70,
  },
  scoreOf: {
    fontSize: 20,
    color: tokens.brand.onSecondary,
    fontWeight: tokens.weight.bold,
    marginTop: 4,
  },
  doneSub: {
    fontSize: 15,
    color: tokens.text.secondary,
    textAlign: "center",
    lineHeight: 22,
    paddingHorizontal: 18,
  },
  doneActions: {
    flexDirection: "row",
    gap: 12,
    marginTop: 18,
    width: "100%",
  },
  primaryBtn: {
    flex: 1,
    paddingVertical: 16,
    borderRadius: tokens.radius.full,
    backgroundColor: tokens.brand.primary,
    alignItems: "center",
  },
  primaryBtnText: {
    fontSize: 15,
    fontWeight: tokens.weight.extrabold,
    color: tokens.brand.onPrimary,
    letterSpacing: 0.3,
  },
  secondaryBtn: {
    flex: 1,
    paddingVertical: 16,
    borderRadius: tokens.radius.full,
    backgroundColor: tokens.bg.surfaceContainer,
    borderWidth: 1,
    borderColor: tokens.border.outline,
    alignItems: "center",
  },
  secondaryBtnText: {
    fontSize: 15,
    fontWeight: tokens.weight.bold,
    color: tokens.text.secondary,
  },
});

// Workaround: stop TS warning about unused import in scope.
export { DRILL_BANK };
