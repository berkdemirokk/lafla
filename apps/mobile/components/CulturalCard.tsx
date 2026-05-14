// CulturalCard — full-bleed cultural tip detail.
// Magazine-style typography: large serif-feeling header, narrow column,
// generous spacing, clear DO / DON'T contrast.
// Renders inside a modal/sheet on the cultural browse screen, or standalone.

import { useMemo } from "react";
import { View, Text, StyleSheet, Pressable, ScrollView } from "react-native";
import { tokens } from "../theme";
import type { CulturalTip, CulturalAxis } from "../data/cultural-tips";

const AXIS_LABEL_TR: Record<CulturalAxis, string> = {
  directness: "Doğrudanlık",
  register: "Resmiyet",
  regional: "Bölgesel",
  humor: "Mizah",
  tipping: "Bahşiş",
  "body-language": "Beden Dili",
  "small-talk": "Küçük Sohbet",
  compliments: "İltifat",
  complaints: "Şikâyet",
  agreement: "Onay",
  time: "Zaman",
  "social-norms": "Sosyal Normlar",
};

const REGION_LABEL: Record<CulturalTip["region"], string> = {
  us: "ABD",
  uk: "İngiltere",
  au: "Avustralya",
  ca: "Kanada",
  "all-english": "Genel",
};

const REGION_FLAG: Record<CulturalTip["region"], string> = {
  us: "US",
  uk: "UK",
  au: "AU",
  ca: "CA",
  "all-english": "EN",
};

export interface CulturalCardProps {
  tip: CulturalTip;
  isRead: boolean;
  onMarkRead: () => void;
  onNext: () => void;
  onClose?: () => void;
}

export function CulturalCard({
  tip,
  isRead,
  onMarkRead,
  onNext,
  onClose,
}: CulturalCardProps) {
  const axisLabel = useMemo(() => AXIS_LABEL_TR[tip.axis], [tip.axis]);
  const regionLabel = useMemo(() => REGION_LABEL[tip.region], [tip.region]);
  const regionFlag = useMemo(() => REGION_FLAG[tip.region], [tip.region]);

  return (
    <View style={styles.wrap}>
      {/* Top bar */}
      <View style={styles.topBar}>
        <View style={styles.chipsRow}>
          <View style={styles.axisChip}>
            <Text style={styles.axisChipText}>{axisLabel}</Text>
          </View>
          <View style={styles.regionChip}>
            <Text style={styles.regionChipText}>
              {regionFlag} · {regionLabel}
            </Text>
          </View>
          {tip.cefrRelevance !== "all" && (
            <View style={styles.levelChip}>
              <Text style={styles.levelChipText}>{tip.cefrRelevance}</Text>
            </View>
          )}
        </View>
        {onClose && (
          <Pressable onPress={onClose} hitSlop={12} style={styles.closeBtn}>
            <Text style={styles.closeText}>✕</Text>
          </Pressable>
        )}
      </View>

      <ScrollView
        style={styles.body}
        contentContainerStyle={styles.bodyContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Headline */}
        <Text style={styles.title}>{tip.title_tr}</Text>

        {/* Scenario */}
        <View style={styles.section}>
          <Text style={styles.sectionEyebrow}>SAHNE</Text>
          <Text style={styles.scenarioText}>{tip.scenario_tr}</Text>
        </View>

        {/* Do */}
        <View style={[styles.section, styles.doBlock]}>
          <Text style={styles.doEyebrow}>✓ YAP</Text>
          <Text style={styles.doText}>{tip.do_tr}</Text>
        </View>

        {/* Don't */}
        <View style={[styles.section, styles.dontBlock]}>
          <Text style={styles.dontEyebrow}>✗ YAPMA</Text>
          <Text style={styles.dontText}>{tip.dont_tr}</Text>
        </View>

        {/* Example */}
        <View style={styles.exampleBlock}>
          <Text style={styles.exampleEyebrow}>ÖRNEK</Text>
          <Text style={styles.exampleText}>{tip.example_en}</Text>
        </View>

        {/* Pitfall */}
        <View style={styles.pitfallBlock}>
          <Text style={styles.pitfallEyebrow}>TÜRK GÖZÜYLE</Text>
          <Text style={styles.pitfallText}>{tip.pitfall_for_turks_tr}</Text>
        </View>

        <View style={{ height: 32 }} />
      </ScrollView>

      {/* Actions */}
      <View style={styles.actions}>
        <Pressable
          onPress={onMarkRead}
          style={({ pressed }) => [
            styles.primaryBtn,
            isRead && styles.primaryBtnDone,
            pressed && styles.btnPressed,
          ]}
        >
          <Text
            style={[
              styles.primaryBtnText,
              isRead && styles.primaryBtnTextDone,
            ]}
          >
            {isRead ? "✓ Okundu" : "Tamamen okudum"}
          </Text>
        </Pressable>
        <Pressable
          onPress={onNext}
          style={({ pressed }) => [
            styles.secondaryBtn,
            pressed && styles.btnPressed,
          ]}
        >
          <Text style={styles.secondaryBtnText}>Sırada →</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    backgroundColor: tokens.bg.app,
  },
  topBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: tokens.spacing.md,
    paddingTop: tokens.spacing.sm,
    paddingBottom: tokens.spacing.sm,
  },
  chipsRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    flexWrap: "wrap",
    flex: 1,
  },
  axisChip: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: tokens.radius.full,
    backgroundColor: tokens.brand.primary,
  },
  axisChipText: {
    fontSize: 11,
    fontWeight: tokens.weight.black,
    color: tokens.text.onPrimary,
    letterSpacing: 0.6,
    textTransform: "uppercase",
  },
  regionChip: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: tokens.radius.full,
    backgroundColor: tokens.bg.surfaceContainer,
    borderWidth: 1,
    borderColor: tokens.border.light,
  },
  regionChipText: {
    fontSize: 11,
    fontWeight: tokens.weight.bold,
    color: tokens.text.secondary,
    letterSpacing: 0.4,
  },
  levelChip: {
    paddingHorizontal: 9,
    paddingVertical: 4,
    borderRadius: tokens.radius.full,
    backgroundColor: tokens.brand.tertiarySoft,
  },
  levelChipText: {
    fontSize: 11,
    fontWeight: tokens.weight.black,
    color: tokens.brand.tertiary,
    letterSpacing: 0.4,
  },
  closeBtn: {
    width: 32,
    height: 32,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: tokens.radius.full,
    marginLeft: 8,
  },
  closeText: {
    fontSize: 18,
    color: tokens.text.secondary,
  },
  body: {
    flex: 1,
  },
  bodyContent: {
    paddingHorizontal: tokens.spacing.md,
    paddingTop: tokens.spacing.base,
  },
  title: {
    fontSize: 30,
    fontWeight: tokens.weight.black,
    color: tokens.text.primary,
    letterSpacing: -0.7,
    lineHeight: 36,
    marginBottom: tokens.spacing.md,
  },
  section: {
    marginBottom: tokens.spacing.md,
  },
  sectionEyebrow: {
    fontSize: 11,
    fontWeight: tokens.weight.black,
    color: tokens.text.tertiary,
    letterSpacing: 1.4,
    marginBottom: 8,
  },
  scenarioText: {
    fontSize: 16,
    color: tokens.text.primary,
    lineHeight: 24,
    fontWeight: tokens.weight.regular,
  },
  doBlock: {
    backgroundColor: tokens.semantic.successContainer,
    borderRadius: tokens.radius.base,
    padding: tokens.spacing.md,
    borderLeftWidth: 4,
    borderLeftColor: tokens.semantic.success,
  },
  doEyebrow: {
    fontSize: 11,
    fontWeight: tokens.weight.black,
    color: tokens.semantic.success,
    letterSpacing: 1.4,
    marginBottom: 6,
  },
  doText: {
    fontSize: 15,
    color: tokens.text.primary,
    lineHeight: 22,
    fontWeight: tokens.weight.medium,
  },
  dontBlock: {
    backgroundColor: tokens.semantic.errorContainer,
    borderRadius: tokens.radius.base,
    padding: tokens.spacing.md,
    borderLeftWidth: 4,
    borderLeftColor: tokens.semantic.error,
  },
  dontEyebrow: {
    fontSize: 11,
    fontWeight: tokens.weight.black,
    color: tokens.semantic.error,
    letterSpacing: 1.4,
    marginBottom: 6,
  },
  dontText: {
    fontSize: 15,
    color: tokens.text.primary,
    lineHeight: 22,
    fontWeight: tokens.weight.medium,
  },
  exampleBlock: {
    backgroundColor: tokens.brand.secondary,
    borderRadius: tokens.radius.base,
    padding: tokens.spacing.md,
    marginBottom: tokens.spacing.md,
  },
  exampleEyebrow: {
    fontSize: 11,
    fontWeight: tokens.weight.black,
    color: tokens.brand.primary,
    letterSpacing: 1.4,
    marginBottom: 8,
  },
  exampleText: {
    fontSize: 15,
    color: tokens.text.inverseOnSurface,
    lineHeight: 22,
    fontStyle: "italic",
    fontWeight: tokens.weight.medium,
  },
  pitfallBlock: {
    paddingTop: tokens.spacing.md,
    borderTopWidth: 1,
    borderTopColor: tokens.border.light,
    marginBottom: tokens.spacing.md,
  },
  pitfallEyebrow: {
    fontSize: 11,
    fontWeight: tokens.weight.black,
    color: tokens.text.tertiary,
    letterSpacing: 1.4,
    marginBottom: 8,
  },
  pitfallText: {
    fontSize: 14,
    color: tokens.text.secondary,
    lineHeight: 21,
  },
  actions: {
    flexDirection: "row",
    paddingHorizontal: tokens.spacing.md,
    paddingTop: tokens.spacing.sm,
    paddingBottom: tokens.spacing.md,
    gap: tokens.spacing.sm,
    borderTopWidth: 1,
    borderTopColor: tokens.border.light,
    backgroundColor: tokens.bg.app,
  },
  primaryBtn: {
    flex: 1,
    height: 52,
    borderRadius: tokens.radius.base,
    backgroundColor: tokens.brand.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  primaryBtnDone: {
    backgroundColor: tokens.bg.surfaceContainer,
    borderWidth: 1,
    borderColor: tokens.border.light,
  },
  primaryBtnText: {
    fontSize: 15,
    fontWeight: tokens.weight.extrabold,
    color: tokens.text.onPrimary,
    letterSpacing: 0.3,
  },
  primaryBtnTextDone: {
    color: tokens.text.secondary,
  },
  secondaryBtn: {
    flex: 1,
    height: 52,
    borderRadius: tokens.radius.base,
    backgroundColor: tokens.brand.secondary,
    alignItems: "center",
    justifyContent: "center",
  },
  secondaryBtnText: {
    fontSize: 15,
    fontWeight: tokens.weight.extrabold,
    color: tokens.text.onSecondary,
    letterSpacing: 0.3,
  },
  btnPressed: {
    opacity: 0.85,
    transform: [{ scale: 0.99 }],
  },
});
