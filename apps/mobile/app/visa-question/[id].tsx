// Single visa interview question — drill / practice screen.
//
// Layout (top → bottom):
//   - Header: country + visa type badge
//   - Question card: English question (TTS button), Turkish meaning, intent
//   - Collapsible: Model answer (EN + TR)
//   - Collapsible: Pitfalls + red flags
//   - Mic button: "Cevabını söyle" — records the learner's spoken answer
//   - Mark practiced toggle
//
// We deliberately keep the model answer / pitfalls collapsed by default so
// the learner is forced to think before peeking. Mirrors how a real interview
// works — you don't get to read the rubric.

import { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  ScrollView,
  Alert,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { useLocalSearchParams, useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

import { Button } from "../../components/Button";
import { SpeakerButton } from "../../components/SpeakerButton";
import {
  getVisaQuestion,
  VISA_COUNTRY_LABELS,
  VISA_TYPE_LABELS,
  VISA_CATEGORY_LABELS,
} from "../../data/visa-questions";
import {
  markQuestionPracticed,
  unmarkQuestionPracticed,
  getPracticedQuestions,
} from "../../lib/visa-bank";
import {
  startListening,
  stopListening,
  isAvailable as isSrAvailable,
} from "../../lib/speech-recognition";
import { hapticImpact, hapticSuccess } from "../../lib/feedback";
import { tokens } from "../../theme";

export default function VisaQuestionScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();
  const question = id ? getVisaQuestion(id) : undefined;

  const [showAnswer, setShowAnswer] = useState(false);
  const [showIntent, setShowIntent] = useState(false);
  const [showPitfalls, setShowPitfalls] = useState(false);
  const [practiced, setPracticed] = useState(false);

  const [recording, setRecording] = useState(false);
  const [transcript, setTranscript] = useState<string>("");
  const [srAvailable, setSrAvailable] = useState<boolean | null>(null);
  const recordingRef = useRef(false);

  useEffect(() => {
    isSrAvailable()
      .then(setSrAvailable)
      .catch(() => setSrAvailable(false));
  }, []);

  useEffect(() => {
    if (!id) return;
    getPracticedQuestions().then((ids) => setPracticed(ids.includes(id)));
  }, [id]);

  // Stop any pending recognition on unmount
  useEffect(() => {
    return () => {
      if (recordingRef.current) {
        void stopListening();
      }
    };
  }, []);

  if (!question) {
    return (
      <SafeAreaView style={styles.safe} edges={["top", "bottom"]}>
        <View style={styles.header}>
          <Pressable
            onPress={() => router.back()}
            style={styles.backBtn}
            hitSlop={12}
          >
            <Text style={styles.backText}>← Geri</Text>
          </Pressable>
          <Text style={styles.title}>Soru bulunamadı</Text>
          <View style={styles.spacer} />
        </View>
        <View style={styles.notFoundWrap}>
          <Text style={styles.notFound}>
            Bu soru artık mevcut değil. Bankaya dön.
          </Text>
        </View>
      </SafeAreaView>
    );
  }

  async function handleMicPress() {
    if (recording) {
      recordingRef.current = false;
      setRecording(false);
      try {
        await stopListening();
      } catch {
        // ignore
      }
      return;
    }

    if (srAvailable === false) {
      Alert.alert(
        "Mikrofon kullanılamıyor",
        "Cihaz konuşma tanımayı desteklemiyor. iOS 17+ ve mikrofon izni gerekiyor.",
      );
      return;
    }

    setTranscript("");
    recordingRef.current = true;
    setRecording(true);
    hapticImpact();

    try {
      await startListening({
        lang: "en-US",
        onResult: (text, isFinal) => {
          if (!recordingRef.current) return;
          setTranscript(text);
          if (isFinal) {
            recordingRef.current = false;
            setRecording(false);
          }
        },
        onError: () => {
          recordingRef.current = false;
          setRecording(false);
        },
      });
    } catch {
      recordingRef.current = false;
      setRecording(false);
    }
  }

  async function handleMarkPracticed() {
    if (!question) return;
    if (practiced) {
      await unmarkQuestionPracticed(question.id);
      setPracticed(false);
    } else {
      await markQuestionPracticed(question.id);
      setPracticed(true);
      hapticSuccess();
    }
  }

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
        <Text style={styles.title}>Mülakat Sorusu</Text>
        <View style={styles.spacer} />
      </View>

      <ScrollView
        contentContainerStyle={styles.scroll}
        showsVerticalScrollIndicator={false}
      >
        {/* Badges */}
        <View style={styles.badgeRow}>
          <View style={[styles.badge, styles.badgeCountry]}>
            <Text style={styles.badgeText}>
              {VISA_COUNTRY_LABELS[question.country]}
            </Text>
          </View>
          <View style={[styles.badge, styles.badgeType]}>
            <Text style={styles.badgeText}>
              {VISA_TYPE_LABELS[question.visaType]}
            </Text>
          </View>
          <View style={[styles.badge, styles.badgeDifficulty]}>
            <Text style={styles.badgeText}>{question.difficulty}</Text>
          </View>
        </View>

        {/* Question */}
        <View style={styles.questionCard}>
          <View style={styles.questionHeader}>
            <Text style={styles.categoryTag}>
              {VISA_CATEGORY_LABELS[question.category]}
            </Text>
            <SpeakerButton text={question.question_en} size="sm" />
          </View>
          <Text style={styles.questionEn}>{question.question_en}</Text>
          <Text style={styles.questionTr}>{question.question_tr}</Text>
        </View>

        {/* Intent (collapsed) */}
        <Pressable
          onPress={() => setShowIntent((v) => !v)}
          style={styles.collapseHeader}
        >
          <Text style={styles.collapseTitle}>
            Memur neyi ölçüyor?
          </Text>
          <Text style={styles.chevron}>{showIntent ? "−" : "+"}</Text>
        </Pressable>
        {showIntent ? (
          <View style={styles.collapseBody}>
            <Text style={styles.bodyText}>{question.intent_tr}</Text>
          </View>
        ) : null}

        {/* Model answer (collapsed) */}
        <Pressable
          onPress={() => setShowAnswer((v) => !v)}
          style={styles.collapseHeader}
        >
          <Text style={styles.collapseTitle}>Model cevap (B2)</Text>
          <Text style={styles.chevron}>{showAnswer ? "−" : "+"}</Text>
        </Pressable>
        {showAnswer ? (
          <View style={styles.collapseBody}>
            <View style={styles.answerHeader}>
              <Text style={styles.answerEnLabel}>İngilizce</Text>
              <SpeakerButton text={question.good_answer_en} size="sm" />
            </View>
            <Text style={styles.answerEn}>{question.good_answer_en}</Text>
            <Text style={styles.answerTrLabel}>Türkçe</Text>
            <Text style={styles.answerTr}>{question.good_answer_tr}</Text>
          </View>
        ) : null}

        {/* Pitfalls & red flags (collapsed) */}
        <Pressable
          onPress={() => setShowPitfalls((v) => !v)}
          style={styles.collapseHeader}
        >
          <Text style={styles.collapseTitle}>Yaygın hatalar + Kırmızı bayraklar</Text>
          <Text style={styles.chevron}>{showPitfalls ? "−" : "+"}</Text>
        </Pressable>
        {showPitfalls ? (
          <View style={styles.collapseBody}>
            <Text style={styles.subHeading}>Sık yapılan hatalar</Text>
            {question.pitfalls_tr.map((p, i) => (
              <View key={`p-${i}`} style={styles.bullet}>
                <Text style={styles.bulletDot}>•</Text>
                <Text style={styles.bulletText}>{p}</Text>
              </View>
            ))}
            <Text style={[styles.subHeading, styles.subHeadingDanger]}>
              Asla söyleme
            </Text>
            {question.redFlags_tr.map((r, i) => (
              <View key={`r-${i}`} style={styles.bullet}>
                <Text style={[styles.bulletDot, styles.bulletDotDanger]}>
                  ⚠
                </Text>
                <Text style={styles.bulletText}>{r}</Text>
              </View>
            ))}
            {question.followUpQuestions && question.followUpQuestions.length > 0 ? (
              <>
                <Text style={styles.subHeading}>Olası takip soruları</Text>
                {question.followUpQuestions.map((f, i) => (
                  <View key={`f-${i}`} style={styles.bullet}>
                    <Text style={styles.bulletDot}>→</Text>
                    <Text style={[styles.bulletText, styles.followText]}>
                      {f}
                    </Text>
                  </View>
                ))}
              </>
            ) : null}
          </View>
        ) : null}

        {/* Mic button + transcript */}
        <View style={styles.micSection}>
          <Text style={styles.micPrompt}>
            Cevabını yüksek sesle söyle. Memur seni dinliyor.
          </Text>
          <Pressable
            onPress={handleMicPress}
            style={[styles.micBtn, recording && styles.micBtnRecording]}
          >
            <Text style={styles.micEmoji}>{recording ? "■" : "🎤"}</Text>
            <Text style={styles.micLabel}>
              {recording ? "Dinleniyor… durdurmak için dokun" : "Cevabını söyle"}
            </Text>
          </Pressable>
          {srAvailable === false ? (
            <Text style={styles.micFallback}>
              Konuşma tanıma kullanılamıyor (iOS 17+ ve mikrofon izni gerekli).
              Yine de yüksek sesle çalış.
            </Text>
          ) : null}
          {transcript.length > 0 ? (
            <View style={styles.transcriptCard}>
              <Text style={styles.transcriptLabel}>Söylediğin:</Text>
              <Text style={styles.transcriptText}>{transcript}</Text>
            </View>
          ) : null}
        </View>

        {/* Mark practiced */}
        <View style={styles.practicedSection}>
          <Button
            label={practiced ? "Çalışıldı ✓ — Geri al" : "Çalıştım olarak işaretle"}
            onPress={handleMarkPracticed}
            variant={practiced ? "secondary" : "primary"}
          />
        </View>

        <View style={styles.bottomSpacer} />
      </ScrollView>
    </SafeAreaView>
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
    paddingBottom: 24,
  },
  notFoundWrap: { flex: 1, alignItems: "center", justifyContent: "center", padding: 24 },
  notFound: { color: tokens.text.secondary, fontSize: 15, textAlign: "center" },

  badgeRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 6,
    marginBottom: 12,
  },
  badge: {
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: tokens.radius.sm,
  },
  badgeCountry: { backgroundColor: tokens.brand.secondary },
  badgeType: { backgroundColor: tokens.brand.tertiaryContainer },
  badgeDifficulty: { backgroundColor: tokens.brand.primary },
  badgeText: {
    fontSize: 11,
    fontWeight: tokens.weight.bold,
    color: tokens.brand.onSecondary,
    textTransform: "uppercase",
    letterSpacing: 0.5,
  },

  questionCard: {
    padding: 16,
    borderRadius: tokens.radius.base,
    backgroundColor: tokens.bg.surfaceContainer,
    borderLeftWidth: 4,
    borderLeftColor: tokens.brand.tertiary,
    marginBottom: 16,
  },
  questionHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  categoryTag: {
    fontSize: 11,
    fontWeight: tokens.weight.bold,
    color: tokens.brand.tertiary,
    textTransform: "uppercase",
    letterSpacing: 0.6,
  },
  questionEn: {
    fontSize: 18,
    fontWeight: tokens.weight.bold,
    color: tokens.text.primary,
    lineHeight: 26,
    marginBottom: 8,
  },
  questionTr: {
    fontSize: 14,
    color: tokens.text.secondary,
    lineHeight: 20,
    fontStyle: "italic",
  },

  collapseHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 14,
    paddingHorizontal: 14,
    backgroundColor: tokens.bg.surfaceContainerLow,
    borderRadius: tokens.radius.base,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: tokens.border.outlineVariant,
  },
  collapseTitle: {
    fontSize: 14,
    fontWeight: tokens.weight.bold,
    color: tokens.text.primary,
  },
  chevron: {
    fontSize: 20,
    fontWeight: tokens.weight.extrabold,
    color: tokens.text.tertiary,
  },
  collapseBody: {
    padding: 14,
    marginBottom: 12,
    marginTop: -4,
    borderRadius: tokens.radius.base,
    backgroundColor: tokens.bg.surfaceContainerLowest,
    borderWidth: 1,
    borderColor: tokens.border.outlineVariant,
  },
  bodyText: {
    fontSize: 14,
    color: tokens.text.primary,
    lineHeight: 21,
  },

  answerHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 6,
  },
  answerEnLabel: {
    fontSize: 11,
    fontWeight: tokens.weight.bold,
    color: tokens.text.tertiary,
    textTransform: "uppercase",
    letterSpacing: 0.6,
  },
  answerEn: {
    fontSize: 15,
    color: tokens.text.primary,
    lineHeight: 22,
    marginBottom: 12,
  },
  answerTrLabel: {
    fontSize: 11,
    fontWeight: tokens.weight.bold,
    color: tokens.text.tertiary,
    textTransform: "uppercase",
    letterSpacing: 0.6,
    marginBottom: 4,
  },
  answerTr: {
    fontSize: 14,
    color: tokens.text.secondary,
    lineHeight: 20,
    fontStyle: "italic",
  },

  subHeading: {
    fontSize: 13,
    fontWeight: tokens.weight.bold,
    color: tokens.text.primary,
    marginTop: 8,
    marginBottom: 6,
  },
  subHeadingDanger: {
    color: tokens.semantic.error,
  },
  bullet: {
    flexDirection: "row",
    gap: 8,
    marginBottom: 6,
  },
  bulletDot: {
    fontSize: 14,
    color: tokens.text.tertiary,
    width: 14,
    fontWeight: tokens.weight.bold,
  },
  bulletDotDanger: {
    color: tokens.semantic.error,
  },
  bulletText: {
    fontSize: 13,
    color: tokens.text.primary,
    lineHeight: 19,
    flex: 1,
  },
  followText: {
    color: tokens.text.secondary,
    fontStyle: "italic",
  },

  micSection: {
    marginTop: 12,
    marginBottom: 16,
    padding: 16,
    borderRadius: tokens.radius.base,
    backgroundColor: tokens.bg.surfaceContainer,
    alignItems: "center",
  },
  micPrompt: {
    fontSize: 13,
    color: tokens.text.secondary,
    textAlign: "center",
    marginBottom: 12,
  },
  micBtn: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    paddingVertical: 14,
    paddingHorizontal: 22,
    backgroundColor: tokens.brand.secondary,
    borderRadius: tokens.radius.full,
  },
  micBtnRecording: {
    backgroundColor: tokens.semantic.error,
  },
  micEmoji: {
    fontSize: 18,
    color: tokens.brand.onSecondary,
    fontWeight: tokens.weight.extrabold,
  },
  micLabel: {
    fontSize: 14,
    fontWeight: tokens.weight.bold,
    color: tokens.brand.onSecondary,
  },
  micFallback: {
    marginTop: 10,
    fontSize: 12,
    color: tokens.text.tertiary,
    textAlign: "center",
    lineHeight: 17,
  },
  transcriptCard: {
    marginTop: 14,
    padding: 12,
    width: "100%",
    borderRadius: tokens.radius.sm,
    backgroundColor: tokens.bg.surfaceContainerLowest,
    borderWidth: 1,
    borderColor: tokens.border.outlineVariant,
  },
  transcriptLabel: {
    fontSize: 11,
    fontWeight: tokens.weight.bold,
    color: tokens.text.tertiary,
    textTransform: "uppercase",
    letterSpacing: 0.6,
    marginBottom: 4,
  },
  transcriptText: {
    fontSize: 14,
    color: tokens.text.primary,
    lineHeight: 20,
  },

  practicedSection: {
    marginTop: 8,
  },
  bottomSpacer: { height: 32 },
});
