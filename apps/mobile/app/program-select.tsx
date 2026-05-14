// Lafla — Program selection screen (post-onboarding goal picker).
//
// User picks a goal-based program (job interview, IELTS, travel, etc.)
// Lafla then builds a personalized N-week curriculum.
//
// INTEGRATION (not modified here): from app/onboarding.tsx, after interest +
// level selection, push to this route:
//   router.push("/program-select");
// On save we router.back() — the caller can detect the active program via
// getActiveProgram() in lib/programs.
//
// User can also tap "Belirsiz, sadece ilerletmek istiyorum" to land on the
// general-fluency program without committing to a specific goal.

import { useMemo, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
  Modal,
  Alert,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button } from "../components/Button";
import { PROGRAMS, startProgram, type ProgramId } from "../lib/programs";
import { tokens } from "../theme";

export default function ProgramSelect() {
  const router = useRouter();
  const [selected, setSelected] = useState<ProgramId | null>(null);
  const [goalDate, setGoalDate] = useState<string | undefined>(undefined);
  const [dateModalOpen, setDateModalOpen] = useState(false);
  const [saving, setSaving] = useState(false);

  const selectedDef = useMemo(
    () => PROGRAMS.find((p) => p.id === selected) ?? null,
    [selected],
  );

  const handleSave = async () => {
    if (!selected) return;
    setSaving(true);
    try {
      await startProgram(selected, goalDate);
      router.back();
    } catch (err) {
      Alert.alert("Hata", "Program başlatılamadı. Tekrar dene.");
    } finally {
      setSaving(false);
    }
  };

  const handleSkipToGeneral = async () => {
    setSaving(true);
    try {
      await startProgram("general-fluency", undefined);
      router.back();
    } finally {
      setSaving(false);
    }
  };

  return (
    <SafeAreaView style={styles.safe} edges={["top", "bottom"]}>
      <StatusBar style="dark" />

      <View style={styles.header}>
        <Pressable onPress={() => router.back()} style={styles.backBtn}>
          <Text style={styles.backText}>← Geri</Text>
        </Pressable>
        <Text style={styles.headerTitle}>Hedefin ne?</Text>
        <View style={styles.spacer} />
      </View>

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.intro}>
          Sana özel bir program oluşturalım. Hedefini seç — Lafla geri kalanını
          halleder.
        </Text>

        <View style={styles.cards}>
          {PROGRAMS.map((p) => {
            const isSelected = selected === p.id;
            return (
              <Pressable
                key={p.id}
                onPress={() => setSelected(p.id)}
                style={({ pressed }) => [
                  styles.card,
                  isSelected && styles.cardSelected,
                  pressed && styles.cardPressed,
                ]}
              >
                <View style={styles.cardHead}>
                  <Text style={styles.cardEmoji}>{p.emoji}</Text>
                  <View style={styles.cardHeadText}>
                    <Text style={styles.cardTitle}>{p.title}</Text>
                    <Text style={styles.cardMeta}>
                      {p.durationWeeks} hafta · {p.recommendedLevel} ve üzeri
                    </Text>
                  </View>
                  {isSelected ? (
                    <View style={styles.cardCheck}>
                      <Text style={styles.cardCheckText}>✓</Text>
                    </View>
                  ) : null}
                </View>
                <Text style={styles.cardDesc}>{p.description}</Text>
                {isSelected ? (
                  <View style={styles.cardTargets}>
                    <Text style={styles.targetItem}>
                      📚 {p.weekly_targets.lessons} ders/hafta
                    </Text>
                    <Text style={styles.targetItem}>
                      🎧 {p.weekly_targets.listeningMinutes} dk dinleme
                    </Text>
                    <Text style={styles.targetItem}>
                      🗣️ {p.weekly_targets.coachSessions} coach
                    </Text>
                  </View>
                ) : null}
              </Pressable>
            );
          })}
        </View>

        {/* Goal date row — only meaningful once a program is picked */}
        {selectedDef ? (
          <View style={styles.dateRow}>
            <Pressable
              onPress={() => setDateModalOpen(true)}
              style={styles.dateBtn}
            >
              <Text style={styles.dateLabel}>
                {goalDate ? "Hedef tarihim:" : "Hedef tarihim var"}
              </Text>
              <Text style={styles.dateValue}>
                {goalDate ?? "İsteğe bağlı →"}
              </Text>
            </Pressable>
            {goalDate ? (
              <Pressable
                onPress={() => setGoalDate(undefined)}
                style={styles.dateClear}
              >
                <Text style={styles.dateClearText}>Sıfırla</Text>
              </Pressable>
            ) : null}
          </View>
        ) : null}

        <Pressable onPress={handleSkipToGeneral} style={styles.skipRow}>
          <Text style={styles.skipText}>
            Belirsiz, sadece ilerletmek istiyorum →
          </Text>
        </Pressable>

        <View style={{ height: 24 }} />
      </ScrollView>

      <View style={styles.footer}>
        <Button
          label={selectedDef ? `${selectedDef.title} ile başla` : "Bir program seç"}
          onPress={handleSave}
          disabled={!selected || saving}
          loading={saving}
          stacked
        />
      </View>

      {/* Simple date picker modal — preset offsets keep it offline & dep-free */}
      <DatePickerModal
        open={dateModalOpen}
        onClose={() => setDateModalOpen(false)}
        onPick={(iso) => {
          setGoalDate(iso);
          setDateModalOpen(false);
        }}
      />
    </SafeAreaView>
  );
}

// ============================================================
// Lightweight date picker — preset offsets (4w, 8w, 12w, 6mo).
// Avoids pulling in @react-native-community/datetimepicker.
// ============================================================
interface DatePickerProps {
  open: boolean;
  onClose: () => void;
  onPick: (iso: string) => void;
}

function DatePickerModal({ open, onClose, onPick }: DatePickerProps) {
  const presets: { label: string; addDays: number }[] = [
    { label: "4 hafta sonra", addDays: 28 },
    { label: "6 hafta sonra", addDays: 42 },
    { label: "8 hafta sonra", addDays: 56 },
    { label: "12 hafta sonra", addDays: 84 },
    { label: "6 ay sonra", addDays: 180 },
  ];

  const toIso = (addDays: number) => {
    const d = new Date();
    d.setDate(d.getDate() + addDays);
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");
    return `${y}-${m}-${day}`;
  };

  return (
    <Modal
      visible={open}
      animationType="slide"
      transparent
      onRequestClose={onClose}
    >
      <View style={styles.modalBackdrop}>
        <View style={styles.modalSheet}>
          <Text style={styles.modalTitle}>Hedef tarihin?</Text>
          <Text style={styles.modalDesc}>
            Programını bitirmek istediğin zamanı seç. İstediğinde
            değiştirebilirsin.
          </Text>
          <View style={styles.presetList}>
            {presets.map((p) => (
              <Pressable
                key={p.label}
                onPress={() => onPick(toIso(p.addDays))}
                style={({ pressed }) => [
                  styles.preset,
                  pressed && styles.presetPressed,
                ]}
              >
                <Text style={styles.presetLabel}>{p.label}</Text>
                <Text style={styles.presetDate}>{toIso(p.addDays)}</Text>
              </Pressable>
            ))}
          </View>
          <Pressable onPress={onClose} style={styles.modalCancel}>
            <Text style={styles.modalCancelText}>Vazgeç</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
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
  headerTitle: {
    fontSize: 20,
    fontWeight: tokens.weight.extrabold,
    color: tokens.text.primary,
    letterSpacing: -0.3,
  },
  spacer: { width: 70 },

  scrollContent: {
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  intro: {
    fontSize: 15,
    color: tokens.text.secondary,
    lineHeight: 22,
    marginBottom: tokens.spacing.md,
  },
  cards: {
    gap: 12,
  },
  card: {
    backgroundColor: tokens.bg.surfaceContainerLow,
    borderRadius: tokens.radius.base,
    padding: tokens.spacing.md,
    borderWidth: 2,
    borderColor: tokens.border.light,
  },
  cardSelected: {
    borderColor: tokens.brand.primary,
    backgroundColor: tokens.brand.primarySoft,
  },
  cardPressed: {
    opacity: 0.92,
    transform: [{ scale: 0.995 }],
  },
  cardHead: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  cardEmoji: {
    fontSize: 32,
  },
  cardHeadText: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 17,
    fontWeight: tokens.weight.extrabold,
    color: tokens.text.primary,
    letterSpacing: -0.3,
  },
  cardMeta: {
    fontSize: 12,
    fontWeight: tokens.weight.semibold,
    color: tokens.text.tertiary,
    marginTop: 2,
  },
  cardCheck: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: tokens.brand.tertiary,
    alignItems: "center",
    justifyContent: "center",
  },
  cardCheckText: {
    color: tokens.text.onTertiary,
    fontWeight: tokens.weight.extrabold,
    fontSize: 14,
  },
  cardDesc: {
    marginTop: 8,
    fontSize: 14,
    color: tokens.text.secondary,
    lineHeight: 20,
  },
  cardTargets: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
    marginTop: 12,
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: tokens.border.light,
  },
  targetItem: {
    fontSize: 12,
    fontWeight: tokens.weight.bold,
    color: tokens.text.primary,
  },

  dateRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginTop: tokens.spacing.md,
  },
  dateBtn: {
    flex: 1,
    backgroundColor: tokens.bg.surfaceContainerHigh,
    borderRadius: tokens.radius.base,
    paddingVertical: 14,
    paddingHorizontal: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  dateLabel: {
    fontSize: 14,
    fontWeight: tokens.weight.semibold,
    color: tokens.text.primary,
  },
  dateValue: {
    fontSize: 14,
    fontWeight: tokens.weight.bold,
    color: tokens.brand.tertiary,
  },
  dateClear: {
    paddingHorizontal: 12,
    paddingVertical: 14,
  },
  dateClearText: {
    fontSize: 13,
    fontWeight: tokens.weight.bold,
    color: tokens.text.tertiary,
  },

  skipRow: {
    marginTop: tokens.spacing.md,
    paddingVertical: 12,
    alignItems: "center",
  },
  skipText: {
    fontSize: 14,
    fontWeight: tokens.weight.bold,
    color: tokens.text.secondary,
    textDecorationLine: "underline",
  },

  footer: {
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 16,
    borderTopWidth: 1,
    borderTopColor: tokens.border.light,
    backgroundColor: tokens.bg.app,
  },

  // Modal
  modalBackdrop: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.4)",
    justifyContent: "flex-end",
  },
  modalSheet: {
    backgroundColor: tokens.bg.app,
    borderTopLeftRadius: tokens.radius.lg,
    borderTopRightRadius: tokens.radius.lg,
    padding: tokens.spacing.md,
    paddingBottom: 32,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: tokens.weight.extrabold,
    color: tokens.text.primary,
    letterSpacing: -0.3,
    marginBottom: 6,
  },
  modalDesc: {
    fontSize: 14,
    color: tokens.text.secondary,
    lineHeight: 20,
    marginBottom: tokens.spacing.md,
  },
  presetList: {
    gap: 8,
  },
  preset: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 14,
    paddingHorizontal: 16,
    backgroundColor: tokens.bg.surfaceContainerLow,
    borderRadius: tokens.radius.base,
    borderWidth: 1,
    borderColor: tokens.border.light,
  },
  presetPressed: {
    opacity: 0.85,
    backgroundColor: tokens.brand.primarySoft,
  },
  presetLabel: {
    fontSize: 15,
    fontWeight: tokens.weight.bold,
    color: tokens.text.primary,
  },
  presetDate: {
    fontSize: 13,
    fontWeight: tokens.weight.semibold,
    color: tokens.text.tertiary,
  },
  modalCancel: {
    marginTop: tokens.spacing.md,
    alignItems: "center",
    paddingVertical: 12,
  },
  modalCancelText: {
    fontSize: 14,
    fontWeight: tokens.weight.bold,
    color: tokens.text.secondary,
  },
});
