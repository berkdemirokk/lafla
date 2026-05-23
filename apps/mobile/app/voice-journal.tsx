// Lafla — Voice Journal screen.
//
// 2026-05-23 — Adult self-reflection feature. Kullanıcı manuel ses
// kaydı bırakıyor (30sn-2dk), zaman içinde "1 hafta önce ses tonum
// nasıldı" karşılaştırması yapıyor.
//
// Brand:
//   • Day One + Voice Memos hibrit, minimal
//   • Pembe accent record button, cyan playback waveform
//   • Confetti yok, mascot yok, fake "Streak!" badge yok
//
// UX akış:
//   1. Profile veya direkt link → /voice-journal
//   2. Boş state: büyük record button + "30 sn İngilizce konuş" hint
//   3. Recording: pulsing mic icon + elapsed timer + "Bitir" button
//   4. Recorded: play/pause + delete + note input + "Yeni kayıt" CTA
//   5. Timeline: önceki kayıtlar tarih ile listelenir, tap → play

import { useCallback, useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  ScrollView,
  Alert,
  TextInput,
  Platform,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { useFocusEffect, useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { Audio } from "expo-av";

import { tokens } from "../theme";
import { Button } from "../components/Button";
import { hapticImpact, hapticSuccess, hapticError } from "../lib/feedback";
import { trackEvent } from "../lib/analytics";
import { captureException } from "../lib/sentry";
import {
  preparePath,
  saveEntry,
  getEntries,
  deleteEntry,
  updateEntryNote,
  markRecordingActive,
  markRecordingInactive,
  type VoiceEntry,
} from "../lib/voice-journal";

// 2 dakika hard cap — daha uzun kayıt:
//   • Storage'ı agresif şişirir (30 entry × 2dk = 60dk audio ≈ 50MB)
//   • Türk kullanıcı için pratik dışı (cümle değil monolog olur)
// 30sn target, 2dk cap — UX dilimde "kısa düşünce".
const MAX_RECORD_MS = 120_000;

function formatDuration(ms: number): string {
  const totalSec = Math.floor(ms / 1000);
  const m = Math.floor(totalSec / 60);
  const s = totalSec % 60;
  return `${m}:${String(s).padStart(2, "0")}`;
}

function formatRelativeDate(iso: string): string {
  const t = new Date(iso).getTime();
  const now = Date.now();
  const diffMs = now - t;
  const diffHours = diffMs / (3600 * 1000);
  if (diffHours < 1) {
    const mins = Math.max(1, Math.floor(diffMs / 60000));
    return `${mins} dk önce`;
  }
  if (diffHours < 24) {
    return `${Math.floor(diffHours)} saat önce`;
  }
  const diffDays = Math.floor(diffHours / 24);
  if (diffDays < 7) return `${diffDays} gün önce`;
  if (diffDays < 30) return `${Math.floor(diffDays / 7)} hafta önce`;
  return `${Math.floor(diffDays / 30)} ay önce`;
}

export default function VoiceJournalScreen() {
  const router = useRouter();
  const [entries, setEntries] = useState<VoiceEntry[]>([]);
  const [permission, setPermission] = useState<boolean | null>(null);

  // Recording state.
  const [isRecording, setIsRecording] = useState(false);
  const [elapsedMs, setElapsedMs] = useState(0);
  const recordingRef = useRef<Audio.Recording | null>(null);
  const elapsedTimerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const targetPathRef = useRef<string | null>(null);

  // Playback state. Tek anda tek entry oynar — başka tap edildiğinde
  // mevcut oynatma durdurulur.
  const [playingId, setPlayingId] = useState<string | null>(null);
  const soundRef = useRef<Audio.Sound | null>(null);

  // Optional note edit state.
  const [editNoteId, setEditNoteId] = useState<string | null>(null);
  const [noteInput, setNoteInput] = useState("");

  const load = useCallback(async () => {
    const all = await getEntries().catch(() => [] as VoiceEntry[]);
    setEntries(all);
  }, []);

  useFocusEffect(
    useCallback(() => {
      void load();
      void trackEvent("voice_journal_opened").catch(() => {});
    }, [load]),
  );

  // Permission request — early so the user sees the prompt before they
  // tap record. iOS shows the prompt only on the first attempt.
  useEffect(() => {
    void (async () => {
      try {
        const { granted } = await Audio.requestPermissionsAsync();
        setPermission(granted);
      } catch {
        setPermission(false);
      }
    })();
    return () => {
      // Cleanup on unmount: stop any active recording + sound.
      if (recordingRef.current) {
        void recordingRef.current.stopAndUnloadAsync().catch(() => {});
      }
      if (soundRef.current) {
        void soundRef.current.unloadAsync().catch(() => {});
      }
      if (elapsedTimerRef.current) {
        clearInterval(elapsedTimerRef.current);
      }
    };
  }, []);

  const startRecording = async () => {
    if (permission === false) {
      Alert.alert(
        "Mikrofon izni gerekli",
        "Ses notu bırakabilmek için Ayarlar'dan mikrofon iznini aç.",
      );
      return;
    }
    try {
      // iOS'ta playsInSilentMode + allowsRecording'i ayarlamak gerek —
      // tts.ts allowsRecording:false default'unu burada toggle ediyoruz.
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: true,
        playsInSilentModeIOS: true,
      });
      const uri = await preparePath();
      targetPathRef.current = uri;
      // 2026-05-23 — sweep race fix: kayıt başlamadan önce active URI'yi
      // module-level register et. getEntries() sweep'i bu dosyayı skip eder.
      markRecordingActive(uri);
      const recording = new Audio.Recording();
      await recording.prepareToRecordAsync(
        Audio.RecordingOptionsPresets.HIGH_QUALITY,
      );
      await recording.startAsync();
      recordingRef.current = recording;
      setIsRecording(true);
      setElapsedMs(0);
      hapticImpact("medium");
      void trackEvent("voice_journal_record_start").catch(() => {});

      // Elapsed timer + 2dk auto-stop.
      const startedAt = Date.now();
      elapsedTimerRef.current = setInterval(() => {
        const ms = Date.now() - startedAt;
        setElapsedMs(ms);
        if (ms >= MAX_RECORD_MS) {
          // Cap'e ulaştık — otomatik durdur.
          void stopRecording();
        }
      }, 100);
    } catch (err) {
      hapticError();
      if (__DEV__) {
        // eslint-disable-next-line no-console
        console.warn("[voice-journal] startRecording failed:", err);
      }
      // Prod observability: mic init failures sessizce kullanıcıya "yine olmuyor"
      // diye düşündürüyordu. Sentry'ye düşür ki AudioSession config drift'ini
      // (background music çalarken kayıt başlatma vs.) tanıyabilelim.
      captureException(err, { source: "voice-journal.startRecording" });
      markRecordingInactive();
      Alert.alert("Kayıt başlamadı", "Mikrofon hazır değil, tekrar dene.");
    }
  };

  const stopRecording = async () => {
    const rec = recordingRef.current;
    if (!rec) return;
    if (elapsedTimerRef.current) {
      clearInterval(elapsedTimerRef.current);
      elapsedTimerRef.current = null;
    }
    setIsRecording(false);
    try {
      await rec.stopAndUnloadAsync();
      const status = await rec.getStatusAsync();
      const durationMs =
        status.isDoneRecording && "durationMillis" in status
          ? (status.durationMillis ?? 0)
          : 0;
      const uri = rec.getURI() ?? targetPathRef.current;
      if (!uri || durationMs < 1500) {
        // Çok kısa (1.5sn altı) — accidental tap, sessizce iptal.
        recordingRef.current = null;
        targetPathRef.current = null;
        if (durationMs < 1500 && durationMs > 0) {
          Alert.alert("Çok kısa", "En az 2 saniye konuşman gerek.");
        }
        return;
      }
      await saveEntry({ uri, durationMs });
      hapticSuccess();
      void trackEvent("voice_journal_record_saved", { duration_ms: durationMs }).catch(() => {});
      await load();
    } catch (err) {
      hapticError();
      if (__DEV__) {
        // eslint-disable-next-line no-console
        console.warn("[voice-journal] stopRecording failed:", err);
      }
      // Prod observability: kayıt bitirme fail'i = potansiyel data loss.
      // Hangi durumda olduğunu öğrenebilelim diye Sentry'ye düşür.
      captureException(err, { source: "voice-journal.stopRecording" });
      Alert.alert("Kaydedilemedi", "Bir şeyler ters gitti, tekrar dene.");
    } finally {
      recordingRef.current = null;
      targetPathRef.current = null;
      // Active URI tracking'i de temizle — sweep tekrar normal çalışsın.
      markRecordingInactive();
      // Restore audio mode for playback.
      void Audio.setAudioModeAsync({
        allowsRecordingIOS: false,
        playsInSilentModeIOS: true,
      }).catch(() => {});
    }
  };

  const togglePlay = async (entry: VoiceEntry) => {
    // Aynı entry tekrar tap → durdur.
    if (playingId === entry.id) {
      if (soundRef.current) {
        await soundRef.current.stopAsync().catch(() => {});
        await soundRef.current.unloadAsync().catch(() => {});
        soundRef.current = null;
      }
      setPlayingId(null);
      return;
    }
    // Farklı entry → mevcuti durdur, yenisini başlat.
    if (soundRef.current) {
      await soundRef.current.unloadAsync().catch(() => {});
      soundRef.current = null;
    }
    try {
      const { sound } = await Audio.Sound.createAsync({ uri: entry.uri });
      soundRef.current = sound;
      setPlayingId(entry.id);
      sound.setOnPlaybackStatusUpdate((status) => {
        if (!status.isLoaded) return;
        if (status.didJustFinish) {
          setPlayingId(null);
          void sound.unloadAsync().catch(() => {});
          if (soundRef.current === sound) soundRef.current = null;
        }
      });
      await sound.playAsync();
      hapticImpact("light");
    } catch (err) {
      hapticError();
      if (__DEV__) {
        // eslint-disable-next-line no-console
        console.warn("[voice-journal] playback failed:", err);
      }
      Alert.alert("Dinlenemedi", "Ses dosyası okunamadı.");
    }
  };

  const handleDelete = (entry: VoiceEntry) => {
    Alert.alert(
      "Ses notunu sil",
      `${formatRelativeDate(entry.recordedAt)} kaydı kalıcı olarak silinecek.`,
      [
        { text: "Vazgeç", style: "cancel" },
        {
          text: "Sil",
          style: "destructive",
          onPress: async () => {
            if (playingId === entry.id && soundRef.current) {
              await soundRef.current.unloadAsync().catch(() => {});
              soundRef.current = null;
              setPlayingId(null);
            }
            await deleteEntry(entry.id);
            hapticImpact("light");
            await load();
          },
        },
      ],
    );
  };

  const handleEditNote = (entry: VoiceEntry) => {
    setEditNoteId(entry.id);
    setNoteInput(entry.note ?? "");
  };

  const handleSaveNote = async () => {
    if (!editNoteId) return;
    await updateEntryNote(editNoteId, noteInput);
    setEditNoteId(null);
    setNoteInput("");
    hapticSuccess();
    await load();
  };

  return (
    <SafeAreaView style={styles.safe} edges={["top", "bottom"]}>
      <StatusBar style="light" />

      {/* Header */}
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
        <Text style={styles.headerTitle}>Sesli günlük</Text>
        <View style={{ width: 40 }} />
      </View>

      <ScrollView
        contentContainerStyle={styles.scroll}
        showsVerticalScrollIndicator={false}
      >
        {/* Recording hero — büyük record button + status */}
        <View style={styles.recordCard}>
          <Pressable
            onPress={isRecording ? stopRecording : startRecording}
            style={({ pressed }) => [
              styles.recordBtn,
              isRecording && styles.recordBtnActive,
              pressed && styles.recordBtnPressed,
            ]}
            disabled={permission === false}
            accessibilityRole="button"
            accessibilityLabel={isRecording ? "Kaydı bitir" : "Yeni kayıt"}
          >
            <Text style={styles.recordIcon}>{isRecording ? "■" : "●"}</Text>
          </Pressable>
          <Text style={styles.recordLabel}>
            {isRecording
              ? `Kaydediliyor · ${formatDuration(elapsedMs)}`
              : "Yeni kayıt"}
          </Text>
          <Text style={styles.recordHint}>
            {isRecording
              ? "Bitirmek için tekrar dokun"
              : "30 saniye İngilizce konuş — kendi tonunu duyabilirsin"}
          </Text>
        </View>

        {/* Timeline */}
        {entries.length === 0 ? (
          <View style={styles.emptyState}>
            <Text style={styles.emptyTitle}>Henüz kayıt yok</Text>
            <Text style={styles.emptyText}>
              İlk sesini kaydet. 1 hafta sonra geri gelip kendinle
              karşılaştır — gelişim duyulabilir bir şey.
            </Text>
          </View>
        ) : (
          <View style={styles.timeline}>
            <Text style={styles.timelineHeader}>Önceki kayıtlar</Text>
            {entries.map((entry) => {
              const isPlaying = playingId === entry.id;
              const isEditingNote = editNoteId === entry.id;
              return (
                <View key={entry.id} style={styles.entryCard}>
                  <View style={styles.entryRow}>
                    <Pressable
                      onPress={() => togglePlay(entry)}
                      style={styles.playBtn}
                      hitSlop={6}
                      accessibilityRole="button"
                      accessibilityLabel={isPlaying ? "Durdur" : "Çal"}
                    >
                      <Text style={styles.playIcon}>
                        {isPlaying ? "❚❚" : "▶"}
                      </Text>
                    </Pressable>
                    <View style={styles.entryMeta}>
                      <Text style={styles.entryDate}>
                        {formatRelativeDate(entry.recordedAt)}
                      </Text>
                      <Text style={styles.entryDuration}>
                        {formatDuration(entry.durationMs)}
                      </Text>
                    </View>
                    <Pressable
                      onPress={() => handleDelete(entry)}
                      style={styles.deleteBtn}
                      hitSlop={8}
                      accessibilityRole="button"
                      accessibilityLabel="Sil"
                    >
                      <Text style={styles.deleteIcon}>×</Text>
                    </Pressable>
                  </View>
                  {isEditingNote ? (
                    <View style={styles.noteEditRow}>
                      <TextInput
                        value={noteInput}
                        onChangeText={setNoteInput}
                        placeholder="Bu kayıt ne hakkındaydı?"
                        placeholderTextColor={tokens.text.tertiary}
                        style={styles.noteInput}
                        maxLength={80}
                        autoFocus
                      />
                      <Pressable
                        onPress={handleSaveNote}
                        style={styles.noteSaveBtn}
                        hitSlop={6}
                      >
                        <Text style={styles.noteSaveText}>✓</Text>
                      </Pressable>
                    </View>
                  ) : entry.note ? (
                    <Pressable
                      onPress={() => handleEditNote(entry)}
                      hitSlop={6}
                    >
                      <Text style={styles.noteText}>{entry.note}</Text>
                    </Pressable>
                  ) : (
                    <Pressable
                      onPress={() => handleEditNote(entry)}
                      hitSlop={6}
                    >
                      <Text style={styles.noteAddText}>+ Not ekle</Text>
                    </Pressable>
                  )}
                </View>
              );
            })}
          </View>
        )}

        {permission === false && (
          <View style={styles.permWarn}>
            <Text style={styles.permWarnText}>
              ⚠ Mikrofon izni reddedildi. Ayarlar &gt; Lafla &gt; Mikrofon ile
              etkinleştirebilirsin.
            </Text>
          </View>
        )}
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
    gap: 24,
  },

  // ─── Record hero ────────────────────────────────────────────
  recordCard: {
    alignItems: "center",
    paddingVertical: 24,
    paddingHorizontal: 18,
    backgroundColor: tokens.bg.surfaceContainer,
    borderRadius: tokens.radius.lg,
    borderWidth: 1,
    borderColor: tokens.border.outlineVariant,
    gap: 14,
  },
  recordBtn: {
    width: 96,
    height: 96,
    borderRadius: 48,
    backgroundColor: tokens.brand.primary,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: tokens.brand.primary,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.55,
    shadowRadius: 22,
    elevation: 10,
  },
  recordBtnActive: {
    backgroundColor: tokens.semantic.error,
    shadowColor: tokens.semantic.error,
  },
  recordBtnPressed: {
    opacity: 0.86,
    transform: [{ scale: 0.97 }],
  },
  recordIcon: {
    fontSize: 36,
    color: tokens.brand.onPrimary,
    fontWeight: tokens.weight.black,
    lineHeight: Platform.OS === "ios" ? 40 : 44,
  },
  recordLabel: {
    fontSize: 17,
    fontWeight: tokens.weight.extrabold,
    color: tokens.text.primary,
    letterSpacing: -0.3,
    fontFamily: tokens.font.display,
  },
  recordHint: {
    fontSize: 13,
    color: tokens.text.secondary,
    textAlign: "center",
    lineHeight: 18,
    paddingHorizontal: 8,
  },

  // ─── Empty state ────────────────────────────────────────────
  emptyState: {
    padding: 18,
    backgroundColor: tokens.bg.surfaceContainerLow,
    borderRadius: tokens.radius.base,
    borderLeftWidth: 3,
    borderLeftColor: tokens.brand.tertiary,
    gap: 4,
  },
  emptyTitle: {
    fontSize: 14,
    fontWeight: tokens.weight.extrabold,
    color: tokens.brand.tertiary,
    letterSpacing: 0.3,
  },
  emptyText: {
    fontSize: 13,
    lineHeight: 19,
    color: tokens.text.secondary,
  },

  // ─── Timeline ───────────────────────────────────────────────
  timeline: {
    gap: 12,
  },
  timelineHeader: {
    fontSize: 11,
    fontWeight: tokens.weight.extrabold,
    color: tokens.text.tertiary,
    letterSpacing: 1.4,
    marginBottom: 2,
  },
  entryCard: {
    paddingVertical: 12,
    paddingHorizontal: 14,
    backgroundColor: tokens.bg.surfaceContainer,
    borderRadius: tokens.radius.lg,
    borderWidth: 1,
    // 2026-05-23 premium polish: floating depth shadow + larger radius
    // (Apple HIG card pattern). Linear/Notion seviyesi tactile feel.
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.28,
    shadowRadius: 12,
    elevation: 4,
    borderColor: tokens.border.light,
    gap: 8,
  },
  entryRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  playBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: tokens.brand.tertiarySoft,
    borderWidth: 1,
    borderColor: tokens.brand.tertiary,
    alignItems: "center",
    justifyContent: "center",
  },
  playIcon: {
    fontSize: 14,
    color: tokens.brand.tertiary,
    fontWeight: tokens.weight.black,
  },
  entryMeta: {
    flex: 1,
    gap: 2,
  },
  entryDate: {
    fontSize: 14,
    fontWeight: tokens.weight.bold,
    color: tokens.text.primary,
    letterSpacing: -0.1,
  },
  entryDuration: {
    fontSize: 11,
    color: tokens.text.tertiary,
    letterSpacing: 0.3,
  },
  deleteBtn: {
    width: 32,
    height: 32,
    alignItems: "center",
    justifyContent: "center",
  },
  deleteIcon: {
    fontSize: 22,
    color: tokens.text.tertiary,
    fontWeight: tokens.weight.bold,
    lineHeight: 24,
  },

  // ─── Note edit ──────────────────────────────────────────────
  noteEditRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  noteInput: {
    flex: 1,
    fontSize: 13,
    color: tokens.text.primary,
    backgroundColor: tokens.bg.surfaceContainerHigh,
    borderRadius: tokens.radius.sm,
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
  noteSaveBtn: {
    width: 32,
    height: 32,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 16,
    backgroundColor: tokens.brand.primary,
  },
  noteSaveText: {
    fontSize: 14,
    color: tokens.brand.onPrimary,
    fontWeight: tokens.weight.black,
  },
  noteText: {
    fontSize: 13,
    color: tokens.text.secondary,
    fontStyle: "italic",
    paddingLeft: 52,
  },
  noteAddText: {
    fontSize: 12,
    color: tokens.text.tertiary,
    paddingLeft: 52,
  },

  // ─── Permission warning ─────────────────────────────────────
  permWarn: {
    padding: 12,
    borderRadius: tokens.radius.base,
    backgroundColor: tokens.semantic.warningContainer,
    borderWidth: 1,
    borderColor: tokens.semantic.warning,
  },
  permWarnText: {
    fontSize: 13,
    color: tokens.semantic.warning,
    lineHeight: 18,
  },
});
