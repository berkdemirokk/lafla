// Lafla — Listen & Transcribe mod (Faz 2 yeni mod).
//
// 2026-05-23 — Passive learning. Audio çalar, kullanıcı duyduğunu yazar.
// MİC GEREKMEZ — kulaklık + klavye. Otobüs, iş, gece için ideal.
//
// AI gideri YOK: TTS yerel (bundled MP3 → fallback expo-speech), matching
// engine local (matchPhrase). Pure offline-capable.
//
// 5 clip per seans (~3-4 dakika). Brand-safe adult.

import { useCallback, useState } from "react";
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
import { ListenAndTranscribe } from "../components/exercises/ListenAndTranscribe";
import type { ExerciseResult } from "../lib/engine";
import { getCefrLevel, type CefrLevel } from "../lib/cefr-level";
import { trackEvent } from "../lib/analytics";
import { hapticImpact, hapticSuccess } from "../lib/feedback";
import { pickClipsForLevel, type ListenClip } from "../data/listen-bank";

const SESSION_SIZE = 5;

export default function ListenModeScreen() {
  const router = useRouter();
  const [clips, setClips] = useState<ListenClip[]>([]);
  const [idx, setIdx] = useState(0);
  const [scores, setScores] = useState<number[]>([]);
  const [finished, setFinished] = useState(false);
  const [, setUserLevel] = useState<CefrLevel | null>(null);

  const load = useCallback(async () => {
    const lvl = await getCefrLevel().catch(() => null);
    setUserLevel(lvl);
    const session = pickClipsForLevel(lvl ?? "B1", SESSION_SIZE);
    setClips(session);
    setIdx(0);
    setScores([]);
    setFinished(false);
  }, []);

  useFocusEffect(
    useCallback(() => {
      void load();
      void trackEvent("listen_mode_started").catch(() => {});
    }, [load]),
  );

  const handleClipComplete = (result: ExerciseResult) => {
    const next = [...scores, result.score];
    setScores(next);
    if (idx + 1 < clips.length) {
      setIdx(idx + 1);
    } else {
      setFinished(true);
      hapticSuccess();
      const avg = next.reduce((s, x) => s + x, 0) / Math.max(1, next.length);
      void trackEvent("listen_mode_session_complete", {
        avg_score: Math.round(avg),
        count: next.length,
      }).catch(() => {});
    }
  };

  const handleRestart = () => {
    hapticImpact("light");
    void load();
  };

  const currentClip = clips[idx];

  // ─── Done state
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
            accessibilityLabel="Geri"
          >
            <Icon name="arrowLeft" size={24} color={tokens.text.primary} />
          </Pressable>
          <Text style={styles.headerTitle}>Dinleme pratiği</Text>
          <View style={{ width: 40 }} />
        </View>
        <ScrollView contentContainerStyle={styles.doneWrap}>
          <View style={styles.scoreHero}>
            <Text style={styles.scoreEyebrow}>SEANS ORTALAMASI</Text>
            <Text style={styles.scoreNum}>{avg}</Text>
            <Text style={styles.scoreOf}>/ 100</Text>
          </View>
          <Text style={styles.doneSub}>
            {avg >= 85
              ? "Kulağın iyi yakalıyor. Çetin cümleler bile geçti."
              : avg >= 70
                ? "İyi gidiş. Aksanlı cümlelerde biraz pratik daha."
                : "Bu seviye zor — yarın tekrar dene, otomatik daha kolay gelecek."}
          </Text>
          <View style={styles.doneActions}>
            <Pressable
              onPress={handleRestart}
              style={styles.primaryBtn}
              accessibilityRole="button"
              accessibilityLabel="Dinleme seansını yeniden başlat"
            >
              <Text style={styles.primaryBtnText}>Yeniden başla</Text>
            </Pressable>
            <Pressable
              onPress={() => router.back()}
              style={styles.secondaryBtn}
              accessibilityRole="button"
              accessibilityLabel="Dinleme seansını bitir"
            >
              <Text style={styles.secondaryBtnText}>Bitir</Text>
            </Pressable>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }

  if (!currentClip) return null;

  return (
    <SafeAreaView style={styles.safe} edges={["top", "bottom"]}>
      <ThemedStatusBar />
      <View style={styles.header}>
        <Pressable
          onPress={() => router.back()}
          style={styles.backBtn}
          hitSlop={12}
          accessibilityRole="button"
          accessibilityLabel="Geri"
        >
          <Icon name="arrowLeft" size={24} color={tokens.text.primary} />
        </Pressable>
        <View style={styles.headerCenter}>
          <Text style={styles.headerTitle}>Dinleme pratiği</Text>
          <Text style={styles.headerProgress}>
            {idx + 1} / {clips.length}
          </Text>
        </View>
        <View style={{ width: 40 }} />
      </View>

      <View style={styles.dotsRow}>
        {clips.map((_, i) => (
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
        <View style={styles.metaCard}>
          <Text style={styles.metaContext}>{currentClip.context}</Text>
          <Text style={styles.metaLevel}>{currentClip.level}</Text>
        </View>

        {/*
          ListenAndTranscribe — TTS plays the sentence, user types what
          they heard. Matching uses Levenshtein-on-tokens fallback if no
          acceptedVariants match exactly. Phoneme grading is NOT used —
          this is text-level transcription accuracy.
        */}
        <ListenAndTranscribe
          sentence={currentClip.sentence}
          acceptedVariants={currentClip.acceptedVariants}
          trHint={currentClip.tr_hint}
          onComplete={handleClipComplete}
        />
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
    backgroundColor: tokens.brand.tertiary,
    shadowColor: tokens.brand.tertiary,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.7,
    shadowRadius: 8,
  },
  dotDone: { backgroundColor: tokens.brand.primary },

  body: {
    paddingHorizontal: 16,
    paddingBottom: 24,
    gap: 14,
  },
  metaCard: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: tokens.radius.full,
    backgroundColor: tokens.bg.surfaceContainer,
    borderWidth: 1,
    borderColor: tokens.border.outlineVariant,
    alignSelf: "flex-start",
  },
  metaContext: {
    fontSize: 11,
    fontWeight: tokens.weight.extrabold,
    color: tokens.brand.tertiary,
    letterSpacing: 1,
  },
  metaLevel: {
    fontSize: 10,
    fontWeight: tokens.weight.extrabold,
    color: tokens.text.tertiary,
    letterSpacing: 0.5,
    marginLeft: "auto",
  },

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
    borderColor: "rgba(255,255,255,0.08)",
    ...tokens.shadow.hero,
  },
  scoreEyebrow: {
    fontSize: 11,
    fontWeight: tokens.weight.extrabold,
    color: tokens.text.tertiary,
    letterSpacing: 1.4,
    marginBottom: 6,
  },
  scoreNum: {
    fontSize: 64,
    fontWeight: tokens.weight.black,
    color: tokens.brand.tertiary,
    letterSpacing: -2,
    lineHeight: 70,
  },
  scoreOf: {
    fontSize: 20,
    color: tokens.text.tertiary,
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
    backgroundColor: tokens.brand.tertiary,
    alignItems: "center",
  },
  primaryBtnText: {
    fontSize: 15,
    fontWeight: tokens.weight.extrabold,
    color: tokens.brand.onTertiary,
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
