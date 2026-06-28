import { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
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
import { RoleplayChat } from "../components/exercises/RoleplayChat";
import { trackEvent } from "../lib/analytics";
import type { ExerciseResult } from "../lib/engine";
import {
  generateCustomScenario,
  generateEmergencyAnswers,
  type CustomScenario,
  type EmergencyAnswers,
} from "../lib/real-life-tools";
import { tokens } from "../theme";

type ToolMode = "emergency" | "scenario";

const EXAMPLES: Record<ToolMode, string[]> = {
  emergency: [
    "Patronuma gecikeceğimi söyleyeceğim",
    "Toplantıyı başka güne almak istiyorum",
  ],
  scenario: [
    "Maaş görüşmesi yapacağım",
    "Bu WhatsApp mesajına cevap provası: Yarın konuşabilir miyiz?",
  ],
};

export default function RealLifeScreen() {
  const router = useRouter();
  const [mode, setMode] = useState<ToolMode>("emergency");
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [answers, setAnswers] = useState<EmergencyAnswers | null>(null);
  const [scenario, setScenario] = useState<CustomScenario | null>(null);
  const [scenarioResult, setScenarioResult] = useState<ExerciseResult | null>(
    null,
  );

  const reset = () => {
    setAnswers(null);
    setScenario(null);
    setScenarioResult(null);
    setError(null);
    setInput("");
  };

  const generate = async () => {
    const request = input.trim();
    if (!request || loading) return;
    setLoading(true);
    setError(null);
    setAnswers(null);
    setScenario(null);
    setScenarioResult(null);
    const startedAt = Date.now();
    try {
      if (mode === "emergency") {
        const result = await generateEmergencyAnswers(request);
        setAnswers(result);
        void trackEvent("emergency_english_generated", {
          source: result.source,
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
        reason instanceof Error
          ? reason.message
          : "Bu isteği şu anda hazırlayamadım.",
      );
    } finally {
      setLoading(false);
    }
  };

  if (scenario) {
    return (
      <SafeAreaView style={styles.safe} edges={["top", "bottom"]}>
        <StatusBar style="light" />
        <View style={styles.header}>
          <Pressable
            onPress={reset}
            style={styles.headerBtn}
            accessibilityRole="button"
            accessibilityLabel="Senaryo oluşturma ekranına dön"
          >
            <Text style={styles.headerBtnText}>← Yeni</Text>
          </Pressable>
          <Text style={styles.headerTitle} numberOfLines={1}>
            {scenario.titleTr}
          </Text>
          <View style={styles.sourceBadge}>
            <Text style={styles.sourceBadgeText}>
              {scenario.source === "ai" ? "ÖZEL" : "ÇEVRİMDIŞI"}
            </Text>
          </View>
        </View>
        {scenarioResult ? (
          <View style={styles.doneWrap}>
            <Text style={styles.doneEyebrow}>KİŞİSEL PROVA TAMAMLANDI</Text>
            <Text style={styles.doneTitle}>Gerçek konuşmaya hazırsın</Text>
            <Text style={styles.doneText}>
              {scenarioResult.mistakes?.[0]?.reason_tr ??
                "Mesajını kısa, doğal ve anlaşılır biçimde kurdun."}
            </Text>
            <Button label="Aynı durumu yeniden prova et" onPress={() => setScenarioResult(null)} />
            <Button label="Yeni durum oluştur" variant="secondary" onPress={reset} />
          </View>
        ) : (
          <View style={styles.roleplayWrap}>
            <RoleplayChat
              scenarioDescription={scenario.descriptionTr}
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
      <StatusBar style="light" />
      <View style={styles.header}>
        <Pressable
          onPress={() => router.back()}
          style={styles.headerBtn}
          accessibilityRole="button"
          accessibilityLabel="Geri"
        >
          <Text style={styles.headerBtnText}>← Geri</Text>
        </Pressable>
        <Text style={styles.headerTitle}>Gerçek Hayat</Text>
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
              label="Acil İngilizce"
              onPress={() => {
                setMode("emergency");
                reset();
              }}
            />
            <ModeButton
              active={mode === "scenario"}
              label="Kendi senaryon"
              onPress={() => {
                setMode("scenario");
                reset();
              }}
            />
          </View>

          <View>
            <Text style={styles.eyebrow}>
              {mode === "emergency" ? "ANINDA KULLAN" : "SANA ÖZEL PROVA"}
            </Text>
            <Text style={styles.title}>
              {mode === "emergency"
                ? "Türkçe yaz, doğal İngilizceyi al."
                : "Durumu veya mesajı yapıştır."}
            </Text>
            <Text style={styles.subtitle}>
              {mode === "emergency"
                ? "Resmî, doğal ve samimi üç seçenek; her biri sesli."
                : "Lafla iki turluk, baskısız bir konuşma provası hazırlasın."}
            </Text>
          </View>

          <TextInput
            value={input}
            onChangeText={setInput}
            maxLength={500}
            multiline
            placeholder={
              mode === "emergency"
                ? "Örn. Patronuma gecikeceğimi söyleyeceğim"
                : "Örn. Yarınki müşteri toplantısında fiyat artışını açıklayacağım"
            }
            placeholderTextColor={tokens.text.tertiary}
            style={styles.input}
            accessibilityLabel={
              mode === "emergency"
                ? "Türkçe iletişim ihtiyacı"
                : "Kişisel senaryo açıklaması"
            }
          />

          <View style={styles.chips}>
            {EXAMPLES[mode].map((example) => (
              <Pressable
                key={example}
                onPress={() => setInput(example)}
                style={styles.chip}
                accessibilityRole="button"
                accessibilityLabel={`Örnek metni doldur: ${example}`}
              >
                <Text style={styles.chipText}>{example}</Text>
              </Pressable>
            ))}
          </View>

          {error && (
            <Text style={styles.error} accessibilityLiveRegion="polite">
              {error}
            </Text>
          )}

          <Button
            label={
              mode === "emergency" ? "Üç seçenek hazırla" : "Provayı oluştur"
            }
            onPress={() => void generate()}
            disabled={!input.trim()}
            loading={loading}
            stacked
          />

          {answers && (
            <View style={styles.answerList}>
              <AnswerCard label="RESMÎ" text={answers.formal} />
              <AnswerCard label="DOĞAL" text={answers.neutral} />
              <AnswerCard label="SAMİMİ" text={answers.friendly} />
              {answers.source === "fallback" && (
                <Text style={styles.offlineNote}>
                  Canlı koç erişilemedi; güvenli çevrimdışı öneriler gösterildi.
                </Text>
              )}
            </View>
          )}
        </ScrollView>
      </KeyboardAvoidingView>
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
  return (
    <Pressable
      onPress={onPress}
      style={[styles.modeBtn, active && styles.modeBtnActive]}
      accessibilityRole="tab"
      accessibilityLabel={`Gerçek hayat modu: ${label}`}
      accessibilityState={{ selected: active }}
    >
      <Text style={[styles.modeText, active && styles.modeTextActive]}>{label}</Text>
    </Pressable>
  );
}

function AnswerCard({ label, text }: { label: string; text: string }) {
  return (
    <View style={styles.answerCard}>
      <View style={styles.answerHeader}>
        <Text style={styles.answerLabel}>{label}</Text>
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
  input: { minHeight: 128, padding: 16, color: tokens.text.primary, fontSize: 16, lineHeight: 23, textAlignVertical: "top", borderRadius: tokens.radius.lg, backgroundColor: tokens.bg.surfaceContainer, borderWidth: 1, borderColor: tokens.border.outlineVariant },
  chips: { gap: 8 },
  chip: { alignSelf: "flex-start", paddingVertical: 8, paddingHorizontal: 12, borderRadius: tokens.radius.full, backgroundColor: tokens.bg.surfaceContainerHigh, borderWidth: 1, borderColor: tokens.border.light },
  chipText: { color: tokens.text.secondary, fontSize: 12 },
  error: { color: tokens.semantic.error, fontSize: 13, lineHeight: 19 },
  answerList: { gap: 12, marginTop: 6 },
  answerCard: { padding: 16, borderRadius: tokens.radius.lg, backgroundColor: tokens.bg.surfaceContainer, borderWidth: 1, borderColor: tokens.border.outlineVariant, gap: 8 },
  answerHeader: { flexDirection: "row", alignItems: "center", justifyContent: "space-between" },
  answerLabel: { color: tokens.brand.tertiary, fontSize: 10, fontWeight: tokens.weight.extrabold, letterSpacing: 1.4 },
  answerText: { color: tokens.text.primary, fontSize: 16, lineHeight: 23, fontWeight: tokens.weight.semibold },
  offlineNote: { color: tokens.text.tertiary, fontSize: 11, lineHeight: 16, textAlign: "center" },
  roleplayWrap: { flex: 1, paddingHorizontal: 16, paddingBottom: 8 },
  doneWrap: { flex: 1, justifyContent: "center", padding: 28, gap: 16, alignItems: "center" },
  doneEyebrow: { color: tokens.brand.primary, fontSize: 10, fontWeight: tokens.weight.extrabold, letterSpacing: 1.3 },
  doneTitle: { color: tokens.text.primary, fontSize: 26, textAlign: "center", fontWeight: tokens.weight.black, fontFamily: tokens.font.display },
  doneText: { color: tokens.text.secondary, fontSize: 14, lineHeight: 21, textAlign: "center" },
});
