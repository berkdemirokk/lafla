// Placement — adaptive CEFR test (2026-05-21).
//
// Onboarding'in son adımı (self-report cefr) yerine veya onun "Test ile
// belirle" CTA'sı arkasında. 6 soru, adaptive: doğru → seviye yukarı,
// yanlış → aşağı. Final level setCefrLevel ile kaydedilir, kullanıcı
// home'a yönlendirilir (intro Tinder zorunlu sahne onboarding tarafı
// hâlâ koşar).

import { useEffect, useMemo, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  ScrollView,
} from "react-native";
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { StatusBar } from "expo-status-bar";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

import AsyncStorage from "@react-native-async-storage/async-storage";

import { tokens } from "../theme";
import { Button } from "../components/Button";
import { hapticImpact, hapticSelection, hapticSuccess } from "../lib/feedback";
import { type CefrLevel } from "../lib/cefr-level";
import { trackEvent } from "../lib/analytics";
import { finalizeOnboarding } from "../lib/onboarding-finalize";
import { getInterests } from "../lib/local-progress";
import {
  PLACEMENT_QUESTION_COUNT,
  computeFinalLevel,
  nextLevelDown,
  nextLevelUp,
  pickQuestionFromLevel,
  type PlacementQuestion,
} from "../data/cefr-placement-bank";

interface HistoryEntry {
  level: CefrLevel;
  correct: boolean;
  question_id: string;
}

export default function PlacementScreen() {
  const router = useRouter();
  const [history, setHistory] = useState<HistoryEntry[]>([]);
  const [currentLevel, setCurrentLevel] = useState<CefrLevel>("B1");
  const [usedIds, setUsedIds] = useState<Set<string>>(new Set());
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);
  const [revealed, setRevealed] = useState(false);
  const [finished, setFinished] = useState(false);
  const [finalLevel, setFinalLevel] = useState<CefrLevel | null>(null);
  const [saving, setSaving] = useState(false);
  // 2026-05-21 — adaptive transition feedback. Sonraki soru daha kolay
  // veya zor olursa kullanıcıya açıklayalım. Boş string → render edilmez.
  const [adaptiveHint, setAdaptiveHint] = useState<string | null>(null);

  // Bir kez seç — turn boyunca aynı soru
  const current: PlacementQuestion | null = useMemo(() => {
    if (finished) return null;
    return pickQuestionFromLevel(currentLevel, usedIds);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentLevel, finished]);

  useEffect(() => {
    if (current) {
      setUsedIds((prev) => new Set(prev).add(current.id));
    }
  }, [current?.id]);

  useEffect(() => {
    void trackEvent("placement_started").catch(() => {});
  }, []);

  // ─── interaction ────────────────────────────────────────────

  const handleSelect = (idx: number) => {
    if (revealed) return;
    hapticSelection();
    setSelectedIdx(idx);
  };

  const handleConfirm = () => {
    if (selectedIdx === null || !current) return;
    const isCorrect = selectedIdx === current.correct_index;
    hapticImpact(isCorrect ? "light" : "medium");
    setRevealed(true);

    setTimeout(() => {
      const newHistory = [
        ...history,
        { level: current.level, correct: isCorrect, question_id: current.id },
      ];
      setHistory(newHistory);

      // Test bitti mi?
      if (newHistory.length >= PLACEMENT_QUESTION_COUNT) {
        const lvl = computeFinalLevel(newHistory);
        setFinalLevel(lvl);
        setFinished(true);
        void trackEvent("placement_completed", {
          final_level: lvl,
          history: newHistory,
        }).catch(() => {});
        return;
      }

      // Adaptive geçiş + mikro açıklama (2026-05-21 fix).
      // Önceden tek doğru → tam +1 seviye, tek yanlış → tam -1.
      // Şimdi: hâlâ ±1 seviye ama UI'da "bu zor geldi, basitleştirdik"
      // veya "kolay yaptın, zorlaştırdık" feedback'i toast olarak göster.
      const nextLevel = isCorrect
        ? nextLevelUp(current.level)
        : nextLevelDown(current.level);
      setAdaptiveHint(
        nextLevel !== current.level
          ? isCorrect
            ? `Bunu kolay yaptın — biraz zorlaştırıyoruz ⤴︎`
            : `Bu zor geldi, basitleştiriyoruz ⤵︎`
          : null,
      );
      setCurrentLevel(nextLevel);
      setRevealed(false);
      setSelectedIdx(null);
    }, 1500); // 1.5s explanation süresi
  };

  const handleAccept = async () => {
    if (!finalLevel || saving) return;
    setSaving(true);
    hapticSuccess();

    // Finalize onboarding (helper) — setCefrLevel + setOnboarded + ATT +
    // analytics + completeOnboarding (Supabase sync). Interests + name
    // disk'te zaten kaydedildi onboarding tarafında.
    const [interests, nameRaw] = await Promise.all([
      getInterests().catch(() => [] as string[]),
      AsyncStorage.getItem("lafla.displayName").catch(() => null),
    ]);
    await finalizeOnboarding({
      level: finalLevel,
      interests,
      displayName: nameRaw ?? "",
      source: "placement_test",
    });

    // Intro Tinder zorunlu sahne (Switch-1) — placement sonrası da aynı kural
    const introDone = await AsyncStorage.getItem(
      "lafla.intro.tinder.completed",
    ).catch(() => null);
    if (introDone === "true") {
      router.replace("/home" as never);
    } else {
      router.replace("/scenario/intro.tinder.0.1?intro=true" as never);
    }
  };

  // ─── progress dots ──────────────────────────────────────────

  const progress = history.length;
  const total = PLACEMENT_QUESTION_COUNT;

  // ─── finished state ─────────────────────────────────────────

  if (finished && finalLevel) {
    return (
      <SafeAreaView style={styles.safe} edges={["top", "bottom"]}>
        <StatusBar style="light" />
        <ScrollView contentContainerStyle={styles.doneWrap}>
          <Text style={styles.doneEmoji}>🎯</Text>
          <Text style={styles.doneTitle}>Seviyen ölçüldü</Text>
          <View style={styles.levelHero}>
            <Text style={styles.levelHeroText}>{finalLevel}</Text>
          </View>
          <Text style={styles.doneSub}>
            {levelDescription(finalLevel)}
          </Text>
          <Text style={styles.doneFoot}>
            Sahneler bu seviyeden başlar. Yanlış mı? Ayarlar'dan değiştirebilirsin.
          </Text>
          <View style={styles.doneFooter}>
            <Button
              label={saving ? "..." : "Anasayfa"}
              onPress={handleAccept}
              disabled={saving}
              stacked
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }

  // ─── question render ────────────────────────────────────────

  if (!current) return null;

  return (
    <SafeAreaView style={styles.safe} edges={["top", "bottom"]}>
      <StatusBar style="light" />

      {/* Header — progress */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Seviye testi</Text>
        <View style={styles.dotsRow}>
          {Array.from({ length: total }).map((_, i) => (
            <View
              key={i}
              style={[
                styles.dot,
                i < progress && styles.dotDone,
                i === progress && styles.dotActive,
              ]}
            />
          ))}
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.body}>
        {/* Adaptive transition hint — bir önceki cevap seviye değiştirdiyse
            burada kullanıcıya neden değiştiğini söyler. Bu küçük şeffaflık
            kullanıcının "Niye bu soru bu kadar basit/zor?" sorusuna cevap. */}
        {adaptiveHint && (
          <View style={styles.adaptiveHint}>
            <Text style={styles.adaptiveHintText}>{adaptiveHint}</Text>
          </View>
        )}
        <Text style={styles.prompt}>{current.prompt}</Text>
        {current.prompt_tr ? (
          <Text style={styles.promptTr}>{current.prompt_tr}</Text>
        ) : null}

        <View style={styles.optionsCol}>
          {current.options.map((opt, i) => {
            const isSelected = selectedIdx === i;
            const isCorrectOption = i === current.correct_index;
            const showCorrect = revealed && isCorrectOption;
            const showWrong = revealed && isSelected && !isCorrectOption;
            return (
              <Pressable
                key={i}
                onPress={() => handleSelect(i)}
                disabled={revealed}
                style={({ pressed }) => [
                  styles.option,
                  isSelected && !revealed && styles.optionSelected,
                  showCorrect && styles.optionCorrect,
                  showWrong && styles.optionWrong,
                  pressed && !revealed && styles.optionPressed,
                ]}
                accessibilityRole="button"
                accessibilityLabel={opt}
                accessibilityState={{ selected: isSelected, disabled: revealed }}
              >
                <Text
                  style={[
                    styles.optionText,
                    showCorrect && styles.optionTextCorrect,
                    showWrong && styles.optionTextWrong,
                  ]}
                >
                  {opt}
                </Text>
              </Pressable>
            );
          })}
        </View>

        {/* Explanation — sadece revealed sonrası */}
        {revealed && (
          <View style={styles.explainBox}>
            <Text style={styles.explainText}>{current.explanation_tr}</Text>
          </View>
        )}
      </ScrollView>

      <View style={styles.footer}>
        <Button
          label={revealed ? "Sıradaki ›" : "Cevapla"}
          onPress={revealed ? () => {} : handleConfirm}
          disabled={selectedIdx === null || revealed}
          stacked
        />
      </View>
    </SafeAreaView>
  );
}

// ─── helpers ────────────────────────────────────────────────────────

function levelDescription(l: CefrLevel): string {
  switch (l) {
    case "A1":
      return "Birkaç kelime biliyorsun, sahneler buradan başlar — yavaş ve net.";
    case "A2":
      return "Basit cümleler kuruyorsun, takıldığın yerler var. Sahneler temel + günlük.";
    case "B1":
      return "Günlük konuşmayı yürütebiliyorsun. Sahneler iş + flört + sosyal karışım.";
    case "B2":
      return "İş ve sosyal hayatta rahatın, akıcılık geliştiriyorsun. Sahneler nüanslı.";
    case "C1":
      return "İleri seviye — idiom + register oynamaları, native-yakın.";
    case "C2":
      return "Ustalık seviyesi. Hâlâ küçük cilalar var ama büyük resmi yakaladın.";
  }
}

// ─── styles ─────────────────────────────────────────────────────────

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: tokens.bg.app },

  header: {
    paddingHorizontal: 20,
    paddingTop: 12,
    paddingBottom: 16,
    gap: 10,
    borderBottomWidth: 1,
    borderBottomColor: tokens.border.light,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: tokens.weight.extrabold,
    color: tokens.text.primary,
    fontFamily: tokens.font.display,
    letterSpacing: -0.3,
  },
  dotsRow: { flexDirection: "row", gap: 6 },
  dot: {
    flex: 1,
    height: 6,
    borderRadius: 3,
    backgroundColor: tokens.bg.surfaceContainerHigh,
  },
  dotActive: {
    backgroundColor: tokens.brand.primary,
    shadowColor: tokens.brand.primary,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.65,
    shadowRadius: 10,
  },
  dotDone: {
    backgroundColor: tokens.brand.tertiary,
  },

  body: {
    paddingHorizontal: 20,
    paddingTop: 28,
    paddingBottom: 24,
  },

  prompt: {
    fontSize: 24,
    lineHeight: 30,
    fontWeight: tokens.weight.bold,
    color: tokens.text.primary,
    textAlign: "center",
    fontFamily: tokens.font.display,
    letterSpacing: -0.3,
    marginBottom: 8,
  },
  promptTr: {
    fontSize: 14,
    color: tokens.text.tertiary,
    textAlign: "center",
    marginBottom: 24,
    lineHeight: 20,
  },
  // Adaptive hint pill — bir önceki cevaba göre seviye değiştiyse mikro
  // açıklama. "Bunu kolay yaptın" / "Bu zor geldi". Pink/Cyan tint.
  adaptiveHint: {
    alignSelf: "center",
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: tokens.radius.full,
    backgroundColor: tokens.brand.tertiarySoft,
    borderWidth: 1,
    borderColor: tokens.brand.tertiary,
    marginBottom: 18,
  },
  adaptiveHintText: {
    fontSize: 12,
    fontWeight: tokens.weight.bold,
    color: tokens.brand.tertiary,
    letterSpacing: 0.3,
  },

  optionsCol: { gap: 10, marginTop: 16 },
  option: {
    paddingVertical: 16,
    paddingHorizontal: 18,
    borderRadius: tokens.radius.base,
    borderWidth: 1.5,
    borderColor: tokens.border.outline,
    backgroundColor: tokens.bg.surfaceContainerLow,
  },
  optionSelected: {
    borderColor: tokens.brand.primary,
    backgroundColor: tokens.brand.primarySoft,
  },
  optionPressed: {
    opacity: 0.85,
    transform: [{ scale: 0.98 }],
  },
  optionCorrect: {
    borderColor: tokens.brand.tertiary,
    backgroundColor: tokens.brand.tertiarySoft,
  },
  optionWrong: {
    borderColor: tokens.semantic.error,
    backgroundColor: tokens.semantic.errorContainer,
  },
  optionText: {
    fontSize: 16,
    fontWeight: tokens.weight.semibold,
    color: tokens.text.primary,
  },
  optionTextCorrect: {
    color: tokens.brand.tertiary,
    fontWeight: tokens.weight.extrabold,
  },
  optionTextWrong: {
    color: tokens.semantic.error,
    fontWeight: tokens.weight.bold,
  },

  explainBox: {
    marginTop: 20,
    padding: 14,
    borderRadius: tokens.radius.base,
    backgroundColor: tokens.bg.surfaceContainer,
    borderLeftWidth: 3,
    borderLeftColor: tokens.brand.tertiary,
  },
  explainText: {
    fontSize: 14,
    lineHeight: 20,
    color: tokens.text.primary,
  },

  footer: {
    paddingHorizontal: 20,
    paddingBottom: 28,
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: tokens.border.light,
    backgroundColor: tokens.bg.app,
  },

  // ─── done ─────────────
  doneWrap: {
    flexGrow: 1,
    paddingHorizontal: 24,
    paddingTop: 48,
    paddingBottom: 32,
    alignItems: "center",
  },
  doneEmoji: { fontSize: 56, marginBottom: 8 },
  doneTitle: {
    fontSize: 24,
    fontWeight: tokens.weight.black,
    color: tokens.text.primary,
    letterSpacing: -0.5,
    fontFamily: tokens.font.display,
    marginBottom: 20,
  },
  levelHero: {
    paddingHorizontal: 32,
    paddingVertical: 18,
    borderRadius: tokens.radius.lg,
    borderWidth: 2,
    borderColor: tokens.brand.primary,
    backgroundColor: tokens.brand.primarySoft,
    shadowColor: tokens.brand.primary,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.6,
    shadowRadius: 20,
    elevation: 8,
    marginBottom: 18,
  },
  levelHeroText: {
    fontSize: 52,
    fontWeight: tokens.weight.black,
    color: tokens.brand.primary,
    letterSpacing: -2,
    fontFamily: tokens.font.display,
  },
  doneSub: {
    fontSize: 15,
    lineHeight: 22,
    color: tokens.text.primary,
    textAlign: "center",
    paddingHorizontal: 12,
    marginBottom: 16,
  },
  doneFoot: {
    fontSize: 12,
    color: tokens.text.tertiary,
    textAlign: "center",
    paddingHorizontal: 24,
    lineHeight: 17,
  },
  doneFooter: {
    width: "100%",
    marginTop: 32,
  },
});
