// PhonemeFeedback — surface phoneme-level pronunciation analysis.
//
// 2026-05-21 — Phoneme grader (lib/phoneme-grader.ts) has Needleman-Wunsch
// alignment + Turkish confusion table + per-phoneme coaching tips. UI
// was missing — this component surfaces the analysis after a voice
// exercise scores below the comfort band.
//
// What it shows:
//   - Per-word breakdown: ATTRIBUTED ipa with each phoneme color-coded
//     (correct=cyan, near=warning, wrong/dropped=error).
//   - Top 2-3 weak sounds with Turkish coaching tip (defaultHint or
//     perSub from CONFUSIONS table).
//
// Lerna AI / Speak gives generic pronunciation %; Lafla gives per-phoneme
// "şu sesi yanlış çıkardın" — Türk-niche moat.

import { View, Text, StyleSheet } from "react-native";

import { tokens } from "../theme";
import type { PhonemeAnalysisResult } from "../lib/pronunciation-grader";
import type {
  PhonemeBand,
  WordPhonemeAnalysis,
} from "../lib/phoneme-grader";

export function PhonemeFeedback({
  analysis,
}: {
  analysis: PhonemeAnalysisResult;
}) {
  // Hiç tip yoksa — analysis worth showing değil (kullanıcı zaten %90+).
  // Caller'da gate ediliyor olabilir ama defansif olalım.
  if (analysis.tipsTr.length === 0 && analysis.perWord.every(
    (w) => w.phonemes.every((p) => p.band === "correct"),
  )) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🎙️ Fonem analizi</Text>

      {/* Per-word IPA breakdown */}
      <View style={styles.wordsList}>
        {analysis.perWord.map((w, i) => (
          <WordRow key={i} word={w} />
        ))}
      </View>

      {/* Top weak sounds — coaching tips */}
      {analysis.tipsTr.length > 0 && (
        <View style={styles.tipsBox}>
          <Text style={styles.tipsLabel}>İPUCU</Text>
          {analysis.tipsTr.slice(0, 3).map((tip, i) => (
            <Text key={i} style={styles.tip}>
              • {tip}
            </Text>
          ))}
        </View>
      )}
    </View>
  );
}

// ─── per-word row ────────────────────────────────────────────────────

function WordRow({ word }: { word: WordPhonemeAnalysis }) {
  return (
    <View style={styles.wordRow}>
      <Text style={styles.wordText}>{word.word}</Text>
      <View style={styles.ipaRow}>
        {word.phonemes.map((p, i) => (
          <Text key={i} style={[styles.ipaSym, colorForBand(p.band)]}>
            {p.targetIpa}
          </Text>
        ))}
      </View>
    </View>
  );
}

function colorForBand(band: PhonemeBand) {
  switch (band) {
    case "correct":
      return { color: tokens.brand.tertiary };
    case "near":
      return { color: tokens.semantic.warning };
    case "wrong":
    case "dropped":
      return { color: tokens.semantic.error };
  }
}

// ─── styles ──────────────────────────────────────────────────────────

const styles = StyleSheet.create({
  container: {
    marginTop: 12,
    paddingHorizontal: 16,
    paddingVertical: 14,
    backgroundColor: tokens.bg.surfaceContainer,
    borderRadius: tokens.radius.lg,
    borderWidth: 1,
    borderColor: tokens.border.outline,
    gap: 10,
  },
  title: {
    fontSize: 11,
    fontWeight: tokens.weight.bold,
    color: tokens.text.tertiary,
    letterSpacing: 1.2,
  },

  wordsList: {
    gap: 6,
  },
  wordRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    paddingVertical: 4,
  },
  wordText: {
    fontSize: 13,
    fontWeight: tokens.weight.semibold,
    color: tokens.text.primary,
    minWidth: 80,
  },
  ipaRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 4,
    flex: 1,
  },
  ipaSym: {
    fontSize: 14,
    fontWeight: tokens.weight.bold,
    fontFamily: tokens.font.system,
    letterSpacing: 0.4,
  },

  tipsBox: {
    marginTop: 4,
    paddingTop: 10,
    borderTopWidth: 1,
    borderTopColor: tokens.border.light,
    gap: 4,
  },
  tipsLabel: {
    fontSize: 10,
    fontWeight: tokens.weight.bold,
    color: tokens.brand.tertiary,
    letterSpacing: 1.2,
    marginBottom: 2,
  },
  tip: {
    fontSize: 13,
    lineHeight: 18,
    color: tokens.text.primary,
  },
});
