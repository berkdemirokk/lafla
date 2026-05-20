// ShareCard — switch-trigger #5 (Adım 5, 2026-05-20).
//
// Verdict ekranında "📸 Skoru paylaş" CTA'sını besler. View-shot ile
// 1080×1920 (story format) bir kart render edilir, ardından expo-sharing
// veya React Native Share API ile Instagram/Twitter/WhatsApp'a gönderilir.
//
// Tasarım: dark gradient (Neon Noir) + büyük skor + CEFR rozet + Lafla
// logo + günün sahnesi snippet'i. Türk öğrenci arkadaşına "bak Tinder
// senaryosunda 78 aldım" diye gönderir → organik viral.

import { forwardRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  type ViewStyle,
} from "react-native";

import { tokens } from "../theme";

export interface ShareCardProps {
  score: number;
  cefrLevel: string | null;
  cefrProgress: number;
  sceneTitle: string;
  sceneMode: string;
  userName: string;
  style?: ViewStyle;
}

const MODE_EMOJI: Record<string, string> = {
  flirt: "💕",
  work: "💼",
  bar: "🍻",
  airport: "✈️",
  daily: "☕",
  order: "🍽️",
};

const MODE_LABEL: Record<string, string> = {
  flirt: "Flört",
  work: "İş",
  bar: "Bar",
  airport: "Havaalanı",
  daily: "Günlük",
  order: "Sipariş",
};

/**
 * View-shot ile yakalanacak kart. ref forward edilir → captureRef(ref).
 * Story-friendly 1080×1920 oran (9:16); ekranda 270×480 olarak preview.
 * View-shot result resolution'ı dahili pixelRatio ile çarpar — gerçek
 * çıktı 1080×1920'e yakın olur.
 */
export const ShareCard = forwardRef<View, ShareCardProps>(function ShareCard(
  { score, cefrLevel, cefrProgress, sceneTitle, sceneMode, userName, style },
  ref,
) {
  const emoji = MODE_EMOJI[sceneMode] ?? "🎯";
  const modeLabel = MODE_LABEL[sceneMode] ?? sceneMode;
  const cefrDisplay = cefrLevel
    ? `${cefrLevel}+${cefrProgress.toFixed(2)}`
    : "—";
  const name = userName?.trim() || "Berk";

  return (
    <View ref={ref} style={[styles.card, style]} collapsable={false}>
      {/* Top — Lafla wordmark + tagline */}
      <View style={styles.topBar}>
        <Text style={styles.wordmark}>Lafla</Text>
        <Text style={styles.tagline}>Konuş, çalış.</Text>
      </View>

      {/* Hero — büyük skor + CEFR */}
      <View style={styles.hero}>
        <Text style={styles.heroEmoji}>{emoji}</Text>
        <Text style={styles.scoreNum}>{score}</Text>
        <Text style={styles.scoreOf}>/ 100</Text>
        <View style={styles.cefrPill}>
          <Text style={styles.cefrText}>{cefrDisplay}</Text>
        </View>
      </View>

      {/* Sahne info */}
      <View style={styles.sceneBox}>
        <Text style={styles.sceneModeLabel}>{modeLabel.toUpperCase()}</Text>
        <Text style={styles.sceneTitle} numberOfLines={3}>
          {sceneTitle.replace(/\n/g, " ")}
        </Text>
      </View>

      {/* Footer — kişisel mesaj + CTA */}
      <View style={styles.footer}>
        <Text style={styles.userName}>— {name}</Text>
        <Text style={styles.cta}>İngilizce konuşurken donmadın mı?{"\n"}lafla.app</Text>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  card: {
    width: 270,
    height: 480, // 9:16 ratio, view-shot 4x pixelRatio ile 1080×1920 export
    backgroundColor: tokens.bg.app,
    borderRadius: 18,
    padding: 20,
    justifyContent: "space-between",
    overflow: "hidden",
    borderWidth: 2,
    borderColor: tokens.brand.primary,
    shadowColor: tokens.brand.primary,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 24,
  },

  topBar: {
    alignItems: "center",
    gap: 4,
  },
  wordmark: {
    fontSize: 32,
    fontWeight: tokens.weight.black,
    color: tokens.text.primary,
    letterSpacing: -1.2,
    fontFamily: tokens.font.display,
    textShadowColor: tokens.brand.primary,
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 12,
  },
  tagline: {
    fontSize: 12,
    color: tokens.text.secondary,
    fontWeight: tokens.weight.semibold,
    letterSpacing: 0.5,
  },

  hero: {
    alignItems: "center",
    gap: 4,
  },
  heroEmoji: {
    fontSize: 56,
    marginBottom: 8,
  },
  scoreNum: {
    fontSize: 96,
    fontWeight: tokens.weight.black,
    color: tokens.brand.primary,
    letterSpacing: -4,
    fontFamily: tokens.font.display,
    lineHeight: 96,
    textShadowColor: tokens.brand.primary,
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 18,
  },
  scoreOf: {
    fontSize: 18,
    color: tokens.text.tertiary,
    fontWeight: tokens.weight.bold,
    marginTop: -8,
  },
  cefrPill: {
    marginTop: 14,
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: tokens.radius.full,
    borderWidth: 1.5,
    borderColor: tokens.brand.tertiary,
    backgroundColor: tokens.brand.tertiarySoft,
  },
  cefrText: {
    fontSize: 14,
    fontWeight: tokens.weight.extrabold,
    color: tokens.brand.tertiary,
    letterSpacing: 0.6,
    fontFamily: tokens.font.display,
  },

  sceneBox: {
    alignItems: "center",
    gap: 6,
    paddingHorizontal: 8,
  },
  sceneModeLabel: {
    fontSize: 10,
    fontWeight: tokens.weight.bold,
    color: tokens.brand.primary,
    letterSpacing: 1.5,
  },
  sceneTitle: {
    fontSize: 14,
    fontWeight: tokens.weight.bold,
    color: tokens.text.primary,
    textAlign: "center",
    lineHeight: 18,
  },

  footer: {
    alignItems: "center",
    gap: 4,
  },
  userName: {
    fontSize: 12,
    fontWeight: tokens.weight.semibold,
    color: tokens.text.secondary,
  },
  cta: {
    fontSize: 11,
    fontWeight: tokens.weight.bold,
    color: tokens.brand.tertiary,
    textAlign: "center",
    lineHeight: 14,
    letterSpacing: 0.3,
  },
});
