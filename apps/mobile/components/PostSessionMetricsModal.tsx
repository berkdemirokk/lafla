// Lafla — PostSessionMetricsModal
//
// Bottom-sheet style modal shown when a voice session ends. Surfaces the
// final fluency score plus a digestible breakdown so the learner gets a
// clear "how did I do?" moment before deciding to continue or dig in.
//
// Inputs are intentionally optional/defensive — callers can pass whatever
// they have from the session and the modal will gracefully omit missing
// pieces.

import { useMemo } from "react";
import {
  Modal,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { tokens } from "../theme";

export interface PostSessionMetricsModalProps {
  visible: boolean;
  onClose: () => void;
  fluencyScore?: number; // 0-100
  wpmAvg?: number;
  fillerCount?: number;
  topFillers?: string[];
  hints?: string[]; // 2-3 short Turkish hints
  onContinue?: () => void;
  onSeeDetails?: () => void;
}

function bandLabel(score: number): { label: string; color: string } {
  if (score >= 75) return { label: "Akıcı", color: "#3ddc84" };
  if (score >= 50) return { label: "İyi yolda", color: "#f6c700" };
  return { label: "Geliştirilebilir", color: "#ff5252" };
}

export function PostSessionMetricsModal({
  visible,
  onClose,
  fluencyScore,
  wpmAvg,
  fillerCount,
  topFillers,
  hints,
  onContinue,
  onSeeDetails,
}: PostSessionMetricsModalProps): JSX.Element {
  const score = Math.max(0, Math.min(100, Math.round(fluencyScore ?? 0)));
  const band = useMemo(() => bandLabel(score), [score]);
  const fillers = (topFillers ?? []).slice(0, 3);
  const tips = (hints ?? []).slice(0, 3);

  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onClose}
    >
      <View style={styles.backdrop}>
        <Pressable style={styles.backdropTouch} onPress={onClose} />
        <View style={styles.sheet}>
          <View style={styles.handle} />

          <ScrollView
            contentContainerStyle={styles.scrollBody}
            showsVerticalScrollIndicator={false}
          >
            <Text style={styles.title}>Konuşma Özeti</Text>

            <View style={styles.scoreBlock}>
              <Text style={styles.scoreNumber}>{score}</Text>
              <View style={styles.scoreMeta}>
                <Text style={styles.scoreLabel}>Akıcılık skoru</Text>
                <View style={[styles.bandChip, { backgroundColor: band.color }]}>
                  <Text style={styles.bandChipText}>{band.label}</Text>
                </View>
              </View>
            </View>

            <View style={styles.statsRow}>
              <Stat label="Ort. WPM" value={wpmAvg != null ? Math.round(wpmAvg).toString() : "—"} />
              <Stat label="Dolgu kelime" value={fillerCount != null ? fillerCount.toString() : "—"} />
              <Stat
                label="En çok"
                value={fillers.length > 0 ? fillers[0] : "—"}
              />
            </View>

            {fillers.length > 0 && (
              <View style={styles.section}>
                <Text style={styles.sectionTitle}>En sık kullandıkların</Text>
                <View style={styles.fillerList}>
                  {fillers.map((f, idx) => (
                    <View key={`${f}-${idx}`} style={styles.fillerChip}>
                      <Text style={styles.fillerChipText}>{f}</Text>
                    </View>
                  ))}
                </View>
              </View>
            )}

            {tips.length > 0 && (
              <View style={styles.section}>
                <Text style={styles.sectionTitle}>Bir sonraki sefer için</Text>
                {tips.map((h, idx) => (
                  <View key={idx} style={styles.tipRow}>
                    <View style={styles.tipBullet} />
                    <Text style={styles.tipText}>{h}</Text>
                  </View>
                ))}
              </View>
            )}
          </ScrollView>

          <View style={styles.actions}>
            <Pressable
              style={[styles.btn, styles.btnSecondary]}
              onPress={() => {
                onSeeDetails?.();
              }}
            >
              <Text style={styles.btnSecondaryText}>Detayları gör</Text>
            </Pressable>
            <Pressable
              style={[styles.btn, styles.btnPrimary]}
              onPress={() => {
                onContinue?.();
                onClose();
              }}
            >
              <Text style={styles.btnPrimaryText}>Pratiğe devam et</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default PostSessionMetricsModal;

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <View style={styles.stat}>
      <Text style={styles.statValue} numberOfLines={1}>
        {value}
      </Text>
      <Text style={styles.statLabel} numberOfLines={1}>
        {label}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0,0,0,0.45)",
  },
  backdropTouch: {
    ...StyleSheet.absoluteFillObject,
  },
  sheet: {
    backgroundColor: tokens.bg.surfaceContainerLowest,
    borderTopLeftRadius: tokens.radius.lg,
    borderTopRightRadius: tokens.radius.lg,
    paddingBottom: 24,
    maxHeight: "88%",
  },
  handle: {
    width: 40,
    height: 4,
    borderRadius: 2,
    backgroundColor: tokens.bg.surfaceContainerHigh,
    alignSelf: "center",
    marginTop: 10,
    marginBottom: 4,
  },
  scrollBody: {
    paddingHorizontal: 20,
    paddingTop: 8,
    paddingBottom: 12,
  },
  title: {
    fontSize: 13,
    fontWeight: tokens.weight.semibold,
    color: tokens.text.tertiary,
    letterSpacing: 0.6,
    textTransform: "uppercase",
    marginBottom: 12,
  },
  scoreBlock: {
    flexDirection: "row",
    alignItems: "flex-end",
    gap: 14,
    marginBottom: 20,
  },
  scoreNumber: {
    fontSize: 64,
    lineHeight: 68,
    fontWeight: tokens.weight.black,
    color: tokens.text.primary,
    fontVariant: ["tabular-nums"],
    letterSpacing: -2,
  },
  scoreMeta: {
    paddingBottom: 8,
    gap: 6,
  },
  scoreLabel: {
    fontSize: 13,
    color: tokens.text.secondary,
    fontWeight: tokens.weight.medium,
  },
  bandChip: {
    alignSelf: "flex-start",
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: tokens.radius.full,
  },
  bandChipText: {
    fontSize: 11,
    fontWeight: tokens.weight.extrabold,
    color: "#1a1c1c",
    letterSpacing: 0.4,
    textTransform: "uppercase",
  },
  statsRow: {
    flexDirection: "row",
    gap: 8,
    marginBottom: 20,
  },
  stat: {
    flex: 1,
    backgroundColor: tokens.bg.surfaceContainerLow,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderRadius: tokens.radius.base,
    alignItems: "flex-start",
  },
  statValue: {
    fontSize: 20,
    fontWeight: tokens.weight.extrabold,
    color: tokens.text.primary,
    fontVariant: ["tabular-nums"],
  },
  statLabel: {
    fontSize: 11,
    color: tokens.text.tertiary,
    fontWeight: tokens.weight.medium,
    marginTop: 2,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 13,
    fontWeight: tokens.weight.bold,
    color: tokens.text.secondary,
    marginBottom: 8,
  },
  fillerList: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 6,
  },
  fillerChip: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: tokens.bg.surfaceContainerHigh,
    borderRadius: tokens.radius.full,
  },
  fillerChipText: {
    fontSize: 12,
    fontWeight: tokens.weight.semibold,
    color: tokens.text.primary,
  },
  tipRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 10,
    paddingVertical: 4,
  },
  tipBullet: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: tokens.brand.tertiary,
    marginTop: 7,
  },
  tipText: {
    flex: 1,
    fontSize: 14,
    lineHeight: 20,
    color: tokens.text.primary,
    fontWeight: tokens.weight.medium,
  },
  actions: {
    flexDirection: "row",
    gap: 10,
    paddingHorizontal: 20,
    paddingTop: 8,
  },
  btn: {
    flex: 1,
    paddingVertical: 14,
    borderRadius: tokens.radius.full,
    alignItems: "center",
    justifyContent: "center",
  },
  btnPrimary: {
    backgroundColor: tokens.brand.primaryContainer,
  },
  btnPrimaryText: {
    fontSize: 15,
    fontWeight: tokens.weight.extrabold,
    color: tokens.text.onPrimary,
    letterSpacing: 0.3,
  },
  btnSecondary: {
    backgroundColor: tokens.bg.surfaceContainer,
  },
  btnSecondaryText: {
    fontSize: 15,
    fontWeight: tokens.weight.bold,
    color: tokens.text.primary,
    letterSpacing: 0.3,
  },
});
