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

import { useCallback, useEffect, useState } from "react";
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
import { ThemedStatusBar } from "../components/ThemedStatusBar";
import { useFocusEffect, useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withSequence,
  withTiming,
} from "react-native-reanimated";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { tokens } from "../theme";
import { Button } from "../components/Button";
import { hapticImpact, hapticSuccess } from "../lib/feedback";
import { trackEvent } from "../lib/analytics";
import {
  getAllEntries,
  getEntryCountLastDays,
  getTodayEntry,
  setTodayEntry,
  type DiaryEntry,
} from "../lib/daily-diary";
import { useTranslation, type Locale } from "../lib/i18n";
import { AsyncScreenState, type AsyncScreenStatus } from "../components/AsyncScreenState";

// 2026-05-24 — Diary milestone celebration. Kullanıcı 3/7/30 gün üst üste
// (last N gün count) entry yazdığında inline pill fade-in olur, 3 saniye
// görünür, fade-out. Persist edilen "claimed" set sayesinde aynı milestone
// tekrar gösterilmez.
const K_DIARY_CLAIMED = "lafla.diary.milestones.claimed";
const DIARY_MILESTONES = [3, 7, 30, 100] as const;

async function getClaimedMilestones(): Promise<Set<number>> {
  try {
    const raw = await AsyncStorage.getItem(K_DIARY_CLAIMED);
    if (!raw) return new Set();
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? new Set(parsed as number[]) : new Set();
  } catch {
    return new Set();
  }
}

async function claimMilestone(days: number): Promise<void> {
  try {
    const set = await getClaimedMilestones();
    set.add(days);
    await AsyncStorage.setItem(K_DIARY_CLAIMED, JSON.stringify([...set]));
  } catch {
    // best effort
  }
}

const MAX_CHARS = 200;

function formatDate(dateKey: string, locale: Locale): string {
  const [y, m, d] = dateKey.split("-");
  if (!y || !m || !d) return dateKey;
  const date = new Date(Number(y), Number(m) - 1, Number(d), 12);
  if (Number.isNaN(date.getTime())) return dateKey;
  return new Intl.DateTimeFormat(locale === "tr" ? "tr-TR" : "en-US", {
    day: "numeric",
    month: "long",
  }).format(date);
}

function isToday(dateKey: string): boolean {
  const d = new Date();
  const today = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
  return dateKey === today;
}

export default function DiaryScreen() {
  const router = useRouter();
  const { t, locale } = useTranslation();
  const [input, setInput] = useState("");
  const [editing, setEditing] = useState(false);
  const [todayEntry, setTodayEntryState] = useState<DiaryEntry | null>(null);
  const [entries, setEntries] = useState<DiaryEntry[]>([]);
  const [saving, setSaving] = useState(false);
  const [status, setStatus] = useState<AsyncScreenStatus>("loading");
  // 2026-05-24 — Celebration pill state. Hidden by default; save sonrası
  // milestone hit'inde set edilir, 3 saniye sonra otomatik temizlenir.
  const [celebrationCopy, setCelebrationCopy] = useState<string | null>(null);
  const celebrationOpacity = useSharedValue(0);
  const celebrationScale = useSharedValue(0.85);

  useEffect(() => {
    if (!celebrationCopy) return;
    celebrationOpacity.value = withSequence(
      withTiming(1, { duration: 360, easing: Easing.out(Easing.cubic) }),
      withDelay(2400, withTiming(0, { duration: 420, easing: Easing.in(Easing.cubic) })),
    );
    celebrationScale.value = withSequence(
      withTiming(1, { duration: 360, easing: Easing.out(Easing.cubic) }),
      withDelay(2400, withTiming(0.92, { duration: 420, easing: Easing.in(Easing.cubic) })),
    );
    const t = setTimeout(() => setCelebrationCopy(null), 3000);
    return () => clearTimeout(t);
  }, [celebrationCopy, celebrationOpacity, celebrationScale]);

  const celebrationStyle = useAnimatedStyle(() => ({
    opacity: celebrationOpacity.value,
    transform: [{ scale: celebrationScale.value }],
  }));

  const load = useCallback(async () => {
    setStatus("loading");
    try {
      const [today, all] = await Promise.all([getTodayEntry(), getAllEntries()]);
      setTodayEntryState(today);
      setEntries(all);
      setInput(today?.text ?? "");
      setEditing(today === null);
      setStatus("ready");
    } catch {
      setStatus("error");
    }
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
      const wasUpdate = todayEntry !== null;
      await setTodayEntry(text);
      hapticSuccess();
      void trackEvent("diary_entry_saved", {
        chars: text.length,
        was_update: wasUpdate,
      }).catch(() => {});
      await load();
      // 2026-05-24 — Milestone celebration. Yalnız yeni entry'lerde tetiklenir
      // (edit'te değil; aynı gün tekrar yazımda milestone'u re-trigger etmek
      // istemiyoruz). 3/7/30/100 gün eşiklerinden henüz claim edilmemiş olanı
      // hit'lerse pill göster + claim et.
      if (!wasUpdate) {
        try {
          const claimed = await getClaimedMilestones();
          for (const days of DIARY_MILESTONES) {
            if (claimed.has(days)) continue;
            const count = await getEntryCountLastDays(days);
            if (count >= days) {
              setCelebrationCopy(t("diary.milestone", { days: String(days) }));
              await claimMilestone(days);
              void trackEvent("diary_milestone_celebrated", {
                days,
              }).catch(() => {});
              break; // Bir milestone yeter; aynı save'de iki birden yakalanmasın.
            }
          }
        } catch {
          // celebration failure non-critical
        }
      }
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
      <ThemedStatusBar />

      {/* Milestone celebration pill — header altında floating overlay.
          pointerEvents: none → kullanıcı altındaki içeriği tıklayabilsin. */}
      {celebrationCopy ? (
        <Animated.View
          style={[diaryCelebrationStyles.wrap, celebrationStyle]}
          pointerEvents="none"
        >
          <View style={diaryCelebrationStyles.pill}>
            <Text style={diaryCelebrationStyles.text}>{celebrationCopy}</Text>
          </View>
        </Animated.View>
      ) : null}

      {/* Header — top bar */}
      <View style={styles.header}>
        <Pressable
          onPress={() => router.back()}
          style={styles.backBtn}
          hitSlop={12}
          accessibilityRole="button"
          accessibilityLabel={t("common.back")}
        >
          <Text style={styles.backText}>‹</Text>
        </Pressable>
        <Text style={styles.headerTitle}>{t("diary.title")}</Text>
        <View style={{ width: 40 }} />
      </View>

      {status !== "ready" ? (
        <AsyncScreenState status={status} onRetry={() => void load()} />
      ) : <KeyboardAvoidingView
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
            <Text style={styles.todayLabel}>{t("diary.today")}</Text>
            <Text style={styles.todayDate}>
              {formatDate(
                `${new Date().getFullYear()}-${String(new Date().getMonth() + 1).padStart(2, "0")}-${String(new Date().getDate()).padStart(2, "0")}`,
                locale,
              )}
            </Text>

            {editing ? (
              <>
                <TextInput
                  value={input}
                  onChangeText={(t) => setInput(t.slice(0, MAX_CHARS))}
                  placeholder={t("diary.placeholder")}
                  placeholderTextColor={tokens.text.tertiary}
                  style={styles.input}
                  multiline
                  numberOfLines={3}
                  maxLength={MAX_CHARS}
                  autoFocus={!todayEntry}
                  editable={!saving}
                  accessibilityLabel={t("diary.input_label")}
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
                      accessibilityLabel={t("common.cancel")}
                    >
                      <Text style={styles.cancelBtnText}>{t("common.cancel")}</Text>
                    </Pressable>
                  )}
                  <View style={{ flex: 1 }}>
                    <Button
                      label={saving ? "..." : t("diary.save")}
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
                  accessibilityLabel={t("diary.edit")}
                >
                  <Text style={styles.editBtnText}>{t("diary.edit")}</Text>
                </Pressable>
              </>
            )}
          </View>

          {/* Geçmiş entry'ler — timeline */}
          {pastEntries.length > 0 && (
            <View style={styles.timelineSection}>
              <Text style={styles.timelineHeader}>{t("diary.history")}</Text>
              {pastEntries.map((entry) => (
                <View key={entry.date} style={styles.entryRow}>
                  <View style={styles.entryDateCol}>
                    <Text style={styles.entryDate}>
                      {formatDate(entry.date, locale)}
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
                {t("diary.return_hint")}
              </Text>
            </View>
          )}

          {pastEntries.length === 0 && !todayEntry && editing && (
            <View style={styles.emptyHint}>
              <Text style={styles.emptyHintText}>
                {t("diary.first_hint")}
              </Text>
            </View>
          )}
        </ScrollView>
      </KeyboardAvoidingView>}
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

// 2026-05-24 — Milestone celebration pill styles.
// Top floating overlay, header altında, content üstünde. Pembe pembe glow
// kullanmıyoruz — diary tonu daha sakin (Day One referansı). Cyan accent.
const diaryCelebrationStyles = StyleSheet.create({
  wrap: {
    position: "absolute",
    top: 70,
    left: 0,
    right: 0,
    alignItems: "center",
    zIndex: 100,
  },
  pill: {
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: tokens.radius.full,
    backgroundColor: tokens.brand.tertiarySoft,
    borderWidth: 1,
    borderColor: tokens.brand.tertiary,
    shadowColor: tokens.brand.tertiary,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 14,
    elevation: 8,
  },
  text: {
    fontSize: 14,
    color: tokens.brand.tertiary,
    fontFamily: tokens.font.sansExtra,
    letterSpacing: 0.4,
  },
});
