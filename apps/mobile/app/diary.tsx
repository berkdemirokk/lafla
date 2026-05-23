// Lafla — Daily Diary screen.
//
// 2026-05-23 — Engagement #4. Adult journaling formati: kullanıcı her
// gün 1 cümle İngilizce yazıyor, timeline'ında biriken cümleler kendi
// scrapbook'unu oluşturuyor.
//
// Brand:
//   • Day One app referansı — minimal, ciddi, kişisel
//   • Neon Noir paleti: pembe accent + cyan timestamp + siyah surface
//   • Confetti yok, mascot yok, "Storyteller" rozeti yok
//   • Sadece bugünün cümlesi + geçmiş timeline
//
// UX akış:
//   1. /today bannerından "Bugünün cümlesi" link → buraya gel
//   2. Bugün entry yoksa → büyük input + "Kaydet" CTA
//   3. Bugün entry varsa → tamamlandı state + edit option
//   4. Aşağıda timeline (yeni → eski) — geçmiş cümleler tarih ile

import { useCallback, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { useFocusEffect, useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

import { tokens } from "../theme";
import { Button } from "../components/Button";
import { hapticImpact, hapticSuccess } from "../lib/feedback";
import { trackEvent } from "../lib/analytics";
import {
  getAllEntries,
  getTodayEntry,
  setTodayEntry,
  type DiaryEntry,
} from "../lib/daily-diary";

const MAX_CHARS = 200;

function formatDate(dateKey: string): string {
  // YYYY-MM-DD → "12 Mart"
  const [y, m, d] = dateKey.split("-");
  if (!y || !m || !d) return dateKey;
  const months = [
    "Ocak",
    "Şubat",
    "Mart",
    "Nisan",
    "Mayıs",
    "Haziran",
    "Temmuz",
    "Ağustos",
    "Eylül",
    "Ekim",
    "Kasım",
    "Aralık",
  ];
  const monthIdx = parseInt(m, 10) - 1;
  if (monthIdx < 0 || monthIdx >= 12) return dateKey;
  return `${parseInt(d, 10)} ${months[monthIdx]}`;
}

function isToday(dateKey: string): boolean {
  const d = new Date();
  const today = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
  return dateKey === today;
}

export default function DiaryScreen() {
  const router = useRouter();
  const [input, setInput] = useState("");
  const [editing, setEditing] = useState(false);
  const [todayEntry, setTodayEntryState] = useState<DiaryEntry | null>(null);
  const [entries, setEntries] = useState<DiaryEntry[]>([]);
  const [saving, setSaving] = useState(false);

  const load = useCallback(async () => {
    const [today, all] = await Promise.all([
      getTodayEntry().catch(() => null),
      getAllEntries().catch(() => [] as DiaryEntry[]),
    ]);
    setTodayEntryState(today);
    setEntries(all);
    setInput(today?.text ?? "");
    setEditing(today === null);
  }, []);

  useFocusEffect(
    useCallback(() => {
      void load();
      void trackEvent("diary_opened").catch(() => {});
    }, [load]),
  );

  const handleSave = async () => {
    const text = input.trim();
    if (!text) return;
    setSaving(true);
    try {
      await setTodayEntry(text);
      hapticSuccess();
      void trackEvent("diary_entry_saved", {
        chars: text.length,
        was_update: todayEntry !== null,
      }).catch(() => {});
      await load();
    } finally {
      setSaving(false);
    }
  };

  const handleEdit = () => {
    hapticImpact("light");
    setEditing(true);
    setInput(todayEntry?.text ?? "");
  };

  const handleCancel = () => {
    hapticImpact("light");
    setEditing(false);
    setInput(todayEntry?.text ?? "");
  };

  // Geçmiş entry'ler (bugün hariç) — yeni → eski.
  const pastEntries = entries.filter((e) => !isToday(e.date));

  return (
    <SafeAreaView style={styles.safe} edges={["top", "bottom"]}>
      <StatusBar style="light" />

      {/* Header — top bar */}
      <View style={styles.header}>
        <Pressable
          onPress={() => router.back()}
          style={styles.backBtn}
          hitSlop={12}
          accessibilityRole="button"
          accessibilityLabel="Geri"
        >
          <Text style={styles.backText}>‹</Text>
        </Pressable>
        <Text style={styles.headerTitle}>Günlüğüm</Text>
        <View style={{ width: 40 }} />
      </View>

      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        keyboardVerticalOffset={Platform.OS === "ios" ? 8 : 0}
      >
        <ScrollView
          contentContainerStyle={styles.scroll}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        >
          {/* Bugünün entry'si — büyük, hero card */}
          <View style={styles.todayCard}>
            <Text style={styles.todayLabel}>BUGÜN</Text>
            <Text style={styles.todayDate}>
              {formatDate(
                `${new Date().getFullYear()}-${String(new Date().getMonth() + 1).padStart(2, "0")}-${String(new Date().getDate()).padStart(2, "0")}`,
              )}
            </Text>

            {editing ? (
              <>
                <TextInput
                  value={input}
                  onChangeText={(t) => setInput(t.slice(0, MAX_CHARS))}
                  placeholder="Bugün ne yaptın? İngilizce 1 cümle..."
                  placeholderTextColor={tokens.text.tertiary}
                  style={styles.input}
                  multiline
                  numberOfLines={3}
                  maxLength={MAX_CHARS}
                  autoFocus={!todayEntry}
                  editable={!saving}
                />
                <Text style={styles.charCount}>
                  {input.length}/{MAX_CHARS}
                </Text>
                <View style={styles.actionRow}>
                  {todayEntry !== null && (
                    <Pressable
                      onPress={handleCancel}
                      style={styles.cancelBtn}
                      hitSlop={8}
                      accessibilityRole="button"
                      accessibilityLabel="İptal"
                    >
                      <Text style={styles.cancelBtnText}>İptal</Text>
                    </Pressable>
                  )}
                  <View style={{ flex: 1 }}>
                    <Button
                      label={saving ? "..." : "Kaydet"}
                      onPress={handleSave}
                      disabled={!input.trim() || saving}
                      stacked
                    />
                  </View>
                </View>
              </>
            ) : (
              <>
                <Text style={styles.todayText}>{todayEntry?.text}</Text>
                <Pressable
                  onPress={handleEdit}
                  style={styles.editBtn}
                  hitSlop={8}
                  accessibilityRole="button"
                  accessibilityLabel="Düzenle"
                >
                  <Text style={styles.editBtnText}>Düzenle</Text>
                </Pressable>
              </>
            )}
          </View>

          {/* Geçmiş entry'ler — timeline */}
          {pastEntries.length > 0 && (
            <View style={styles.timelineSection}>
              <Text style={styles.timelineHeader}>Geçmiş</Text>
              {pastEntries.map((entry) => (
                <View key={entry.date} style={styles.entryRow}>
                  <View style={styles.entryDateCol}>
                    <Text style={styles.entryDate}>
                      {formatDate(entry.date)}
                    </Text>
                  </View>
                  <View style={styles.entryTextCol}>
                    <Text style={styles.entryText}>{entry.text}</Text>
                  </View>
                </View>
              ))}
            </View>
          )}

          {pastEntries.length === 0 && !editing && todayEntry && (
            <View style={styles.emptyHint}>
              <Text style={styles.emptyHintText}>
                Yarın aynı saatte tekrar gel — geçmiş cümlelerin burada
                birikecek.
              </Text>
            </View>
          )}

          {pastEntries.length === 0 && !todayEntry && editing && (
            <View style={styles.emptyHint}>
              <Text style={styles.emptyHintText}>
                İlk cümlen burada başlar. Türkçe değil — İngilizce yazmaya
                çalış. Yanlış olsa da olur, sonra düzelirsin.
              </Text>
            </View>
          )}
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: tokens.bg.app },

  // ─── Header ───────────────────────────────────────────────
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
  backText: {
    fontSize: 30,
    fontWeight: tokens.weight.bold,
    color: tokens.text.primary,
    lineHeight: 34,
  },
  headerTitle: {
    fontSize: 17,
    fontWeight: tokens.weight.extrabold,
    color: tokens.text.primary,
    letterSpacing: -0.3,
    fontFamily: tokens.font.display,
  },

  scroll: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 36,
  },

  // ─── Bugünün entry'si (hero) ──────────────────────────────
  todayCard: {
    padding: 22,
    borderRadius: tokens.radius.lg,
    backgroundColor: tokens.brand.primarySoft,
    borderWidth: 2,
    borderColor: tokens.brand.primary,
    shadowColor: tokens.brand.primary,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.4,
    shadowRadius: 18,
    elevation: 8,
    gap: 6,
    marginBottom: 28,
  },
  todayLabel: {
    fontSize: 10,
    fontWeight: tokens.weight.extrabold,
    color: tokens.brand.primary,
    letterSpacing: 1.6,
  },
  todayDate: {
    fontSize: 22,
    fontWeight: tokens.weight.black,
    color: tokens.text.primary,
    letterSpacing: -0.5,
    fontFamily: tokens.font.display,
    marginBottom: 8,
  },
  todayText: {
    fontSize: 18,
    lineHeight: 25,
    color: tokens.text.primary,
    fontWeight: tokens.weight.medium,
    letterSpacing: -0.2,
    marginTop: 4,
    marginBottom: 6,
  },
  input: {
    fontSize: 17,
    lineHeight: 24,
    color: tokens.text.primary,
    fontWeight: tokens.weight.medium,
    backgroundColor: tokens.bg.surfaceContainer,
    borderRadius: tokens.radius.base,
    paddingHorizontal: 14,
    paddingVertical: 14,
    marginTop: 4,
    minHeight: 92,
    textAlignVertical: "top",
    borderWidth: 1,
    borderColor: tokens.border.outlineVariant,
  },
  charCount: {
    fontSize: 11,
    color: tokens.text.tertiary,
    textAlign: "right",
    marginTop: 4,
    letterSpacing: 0.3,
  },
  actionRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginTop: 14,
  },
  cancelBtn: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: tokens.radius.base,
    borderWidth: 1,
    borderColor: tokens.border.outline,
  },
  cancelBtnText: {
    fontSize: 14,
    fontWeight: tokens.weight.bold,
    color: tokens.text.secondary,
  },
  editBtn: {
    alignSelf: "flex-start",
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: tokens.radius.full,
    borderWidth: 1,
    borderColor: tokens.brand.primary,
    backgroundColor: tokens.bg.surfaceContainer,
    marginTop: 6,
  },
  editBtnText: {
    fontSize: 13,
    fontWeight: tokens.weight.bold,
    color: tokens.brand.primary,
    letterSpacing: 0.3,
  },

  // ─── Timeline (geçmiş) ─────────────────────────────────────
  timelineSection: {
    gap: 14,
  },
  timelineHeader: {
    fontSize: 11,
    fontWeight: tokens.weight.extrabold,
    color: tokens.text.tertiary,
    letterSpacing: 1.6,
    marginBottom: 4,
  },
  entryRow: {
    flexDirection: "row",
    gap: 14,
    paddingVertical: 12,
    paddingHorizontal: 14,
    backgroundColor: tokens.bg.surfaceContainer,
    borderRadius: tokens.radius.lg,
    borderWidth: 1,
    borderColor: tokens.border.outlineVariant,
    // Premium polish — floating depth (Linear/Notion tactile)
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.22,
    shadowRadius: 10,
    elevation: 3,
  },
  entryDateCol: {
    width: 64,
  },
  entryDate: {
    fontSize: 12,
    fontWeight: tokens.weight.bold,
    color: tokens.brand.tertiary,
    letterSpacing: 0.2,
  },
  entryTextCol: {
    flex: 1,
  },
  entryText: {
    fontSize: 14,
    lineHeight: 20,
    color: tokens.text.primary,
    fontWeight: tokens.weight.regular,
  },

  emptyHint: {
    marginTop: 18,
    padding: 14,
    borderRadius: tokens.radius.base,
    borderLeftWidth: 3,
    borderLeftColor: tokens.brand.tertiary,
    backgroundColor: tokens.bg.surfaceContainer,
  },
  emptyHintText: {
    fontSize: 13,
    lineHeight: 19,
    color: tokens.text.secondary,
  },
});
