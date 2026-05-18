// Settings screen — preferences, links, account.

import { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
  Switch,
  Alert,
  Linking,
  Modal,
  TextInput,
  ActivityIndicator,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Constants from "expo-constants";
import {
  isAnalyticsEnabled,
  setAnalyticsEnabled,
} from "../lib/analytics";
import {
  disableReminders,
  enableDailyReminder,
  isNotificationsEnabled,
} from "../lib/notifications";
import {
  previewWhatWillBeDeleted,
  deleteAccountInstant,
  type DeletePreview,
} from "../lib/delete-account";
import { hapticImpact, hapticSelection } from "../lib/feedback";
import { tokens } from "../theme";

const K_AUTO_SPEAK = "lafla.settings.autoSpeak";

export default function SettingsScreen() {
  const router = useRouter();
  const [autoSpeak, setAutoSpeak] = useState(true);
  const [remindersOn, setRemindersOn] = useState(false);
  // "Analytics olmadan kullan" — ON means opted OUT of analytics.
  // We store the inverse internally for clearer call-site semantics.
  const [analyticsOptOut, setAnalyticsOptOut] = useState(false);

  // Account-deletion flow state.
  const [deleteStep, setDeleteStep] = useState<
    "idle" | "preview" | "typing" | "deleting"
  >("idle");
  const [deletePreview, setDeletePreview] = useState<DeletePreview | null>(null);
  const [deleteConfirmText, setDeleteConfirmText] = useState("");
  const [deleteError, setDeleteError] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      const v = await AsyncStorage.getItem(K_AUTO_SPEAK).catch(() => null);
      if (v === "false") setAutoSpeak(false);
      setRemindersOn(await isNotificationsEnabled());
      try {
        const enabled = await isAnalyticsEnabled();
        setAnalyticsOptOut(!enabled);
      } catch {
        // ignore
      }
    })();
  }, []);

  const handleAnalyticsToggle = async (optOut: boolean) => {
    hapticSelection();
    setAnalyticsOptOut(optOut);
    try {
      await setAnalyticsEnabled(!optOut);
    } catch {
      // ignore — opt-out remains in local state, persistence error is non-fatal
    }
  };

  const openDeleteFlow = async () => {
    setDeleteError(null);
    setDeleteConfirmText("");
    setDeleteStep("preview");
    try {
      const p = await previewWhatWillBeDeleted();
      setDeletePreview(p);
    } catch {
      setDeletePreview({
        scenes_completed: 0,
        hours_practiced: 0,
        premium_active: false,
      });
    }
  };

  const cancelDeleteFlow = () => {
    setDeleteStep("idle");
    setDeleteConfirmText("");
    setDeleteError(null);
  };

  const proceedToTyping = () => {
    setDeleteStep("typing");
    setDeleteError(null);
  };

  const confirmDelete = async () => {
    // Accept both "SİL" (Turkish dotted) and "SIL" (ASCII fallback) so
    // keyboards without a Turkish locale can still confirm.
    const t = deleteConfirmText.trim();
    if (t !== "SİL" && t !== "SIL" && t !== "sil" && t !== "sİl" && t !== "sil".toLocaleUpperCase("tr")) {
      setDeleteError('Onaylamak için "SİL" yazmalısın.');
      return;
    }
    hapticImpact("heavy");
    setDeleteStep("deleting");
    setDeleteError(null);
    const res = await deleteAccountInstant();
    if (res.ok) {
      // Success — wipe local + sign out already done inside lib.
      setDeleteStep("idle");
      router.replace("/" as never);
    } else {
      setDeleteStep("typing");
      setDeleteError(res.error ?? "Bilinmeyen hata.");
    }
  };

  const openMailtoFallback = () => {
    Linking.openURL(
      "mailto:hello@lafla.app?subject=Hesap silme talebi&body=Otomatik silme başarısız oldu, hesabımın manuel olarak silinmesini talep ediyorum.",
    ).catch(() => Alert.alert("Hata", "Mail uygulaması açılamadı."));
  };

  const setAutoSpeakValue = async (v: boolean) => {
    hapticSelection();
    setAutoSpeak(v);
    await AsyncStorage.setItem(K_AUTO_SPEAK, v ? "true" : "false").catch(() => {});
  };

  const toggleReminders = async () => {
    hapticSelection();
    if (remindersOn) {
      await disableReminders();
      setRemindersOn(false);
    } else {
      const ok = await enableDailyReminder(19);
      setRemindersOn(ok);
      if (!ok) {
        Alert.alert(
          "İzin reddedildi",
          "Ayarlar > Lafla > Bildirimler yolundan açabilirsin.",
        );
      }
    }
  };

  return (
    <SafeAreaView style={styles.safe} edges={["top", "bottom"]}>
      <StatusBar style="light" />

      <View style={styles.header}>
        <Pressable onPress={() => router.back()} style={styles.backBtn} hitSlop={12} accessibilityRole="button" accessibilityLabel="Geri">
          <Text style={styles.backText}>← Geri</Text>
        </Pressable>
        <Text style={styles.title}>Ayarlar</Text>
        <View style={styles.spacer} />
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        <Section title="TERCİHLER">
          <Toggle
            label="Otomatik telaffuz"
            description="Yeni kelimelerde sesli okuma"
            value={autoSpeak}
            onValueChange={setAutoSpeakValue}
          />
          {/* Daily reminder toggle hidden until the notifications backend
              ships — currently lib/notifications.ts is a no-op stub and the
              UI would lie about granting permissions. Restore once
              expo-notifications wiring is real. */}
        </Section>

        <Section title="GİZLİLİK">
          <Toggle
            label="Analytics olmadan kullan"
            description="Anonim kullanım verisi gönderme. Çökme raporları etkilenmez."
            value={analyticsOptOut}
            onValueChange={handleAnalyticsToggle}
          />
        </Section>

        <Section title="HESAP">
          <Row
            label="Profil"
            onPress={() => router.push("/profile" as never)}
          />
          {/* "Seviyemi değiştir" hidden — re-running onboarding traps the
              user with no exit, and the rewind would reset track + name.
              Restore when a dedicated level-change screen exists. */}
          <Row
            label="Hesabımı sil"
            onPress={openDeleteFlow}
          />
        </Section>

        <Section title="DESTEK">
          <Row
            label="Bize yaz"
            onPress={() =>
              Linking.openURL("mailto:hello@lafla.app?subject=Lafla geribildirim").catch(() =>
                Alert.alert("Hata", "Mail uygulaması açılamadı."),
              )
            }
          />
          <Row
            label="App Store'da değerlendir"
            onPress={() =>
              Alert.alert(
                "Teşekkürler",
                "App Store'da yayınlandığında ratings alacağız.",
              )
            }
          />
          <Row
            label="Gizlilik Politikası"
            onPress={() =>
              Linking.openURL(
                "https://berkdemirokk.github.io/lafla/privacy.html",
              ).catch(() => Alert.alert("Hata", "Tarayıcı açılamadı."))
            }
          />
          <Row
            label="Kullanım Koşulları"
            onPress={() =>
              Linking.openURL(
                "https://berkdemirokk.github.io/lafla/terms.html",
              ).catch(() => Alert.alert("Hata", "Tarayıcı açılamadı."))
            }
          />
        </Section>

        <View style={styles.footer}>
          <Text style={styles.version}>
            Lafla v{Constants.expoConfig?.version ?? "0.1.0"}
          </Text>
          <Text style={styles.tagline}>Konuş, çalış.</Text>
        </View>
      </ScrollView>

      {/* ===================== Account Deletion Modal ===================== */}
      <Modal
        visible={deleteStep !== "idle"}
        transparent
        animationType="fade"
        onRequestClose={cancelDeleteFlow}
      >
        <View style={styles.modalBackdrop}>
          <View style={styles.modalCard}>
            {deleteStep === "preview" && (
              <>
                <Text style={styles.modalTitle}>Hesabını silmek üzeresin</Text>
                <Text style={styles.modalBody}>
                  Bu işlem GERİ ALINAMAZ. Aşağıdakiler kalıcı olarak silinecek:
                </Text>
                <View style={styles.modalList}>
                  <Text style={styles.modalListItem}>
                    • {deletePreview?.scenes_completed ?? 0} tamamlanmış sahne
                  </Text>
                  <Text style={styles.modalListItem}>
                    • {(deletePreview?.hours_practiced ?? 0).toFixed(1)} saat pratik
                  </Text>
                  <Text style={styles.modalListItem}>
                    • Tüm ilerleme, XP ve seri kayıtların
                  </Text>
                  <Text style={styles.modalListItem}>
                    • Yedeklerin ve sesli oturum geçmişin
                  </Text>
                  {deletePreview?.premium_active && (
                    <Text style={[styles.modalListItem, styles.modalWarn]}>
                      • UYARI: Premium aboneliğin aktif. App Store/Google Play
                      iptali ayrıca gereklidir.
                    </Text>
                  )}
                </View>
                <View style={styles.modalActions}>
                  <Pressable
                    style={[styles.modalBtn, styles.modalBtnGhost]}
                    onPress={cancelDeleteFlow}
                  >
                    <Text style={styles.modalBtnGhostText}>Vazgeç</Text>
                  </Pressable>
                  <Pressable
                    style={[styles.modalBtn, styles.modalBtnDanger]}
                    onPress={proceedToTyping}
                  >
                    <Text style={styles.modalBtnDangerText}>Devam et</Text>
                  </Pressable>
                </View>
              </>
            )}

            {deleteStep === "typing" && (
              <>
                <Text style={styles.modalTitle}>Son onay</Text>
                <Text style={styles.modalBody}>
                  Onaylamak için aşağıya{" "}
                  <Text style={styles.modalCode}>SİL</Text> yaz.
                </Text>
                <TextInput
                  value={deleteConfirmText}
                  onChangeText={setDeleteConfirmText}
                  autoCapitalize="characters"
                  autoCorrect={false}
                  placeholder="SİL"
                  placeholderTextColor={tokens.text.tertiary}
                  style={styles.modalInput}
                />
                {deleteError && (
                  <Text style={styles.modalError}>{deleteError}</Text>
                )}
                <View style={styles.modalActions}>
                  <Pressable
                    style={[styles.modalBtn, styles.modalBtnGhost]}
                    onPress={cancelDeleteFlow}
                  >
                    <Text style={styles.modalBtnGhostText}>Vazgeç</Text>
                  </Pressable>
                  <Pressable
                    style={[styles.modalBtn, styles.modalBtnDanger]}
                    onPress={confirmDelete}
                  >
                    <Text style={styles.modalBtnDangerText}>
                      Hesabımı kalıcı olarak sil
                    </Text>
                  </Pressable>
                </View>
                {deleteError && (
                  <Pressable
                    style={styles.modalFallback}
                    onPress={openMailtoFallback}
                  >
                    <Text style={styles.modalFallbackText}>
                      Otomatik silme başarısız. Manuel destek için: hello@lafla.app
                    </Text>
                  </Pressable>
                )}
              </>
            )}

            {deleteStep === "deleting" && (
              <View style={styles.modalDeleting}>
                <ActivityIndicator size="large" color={tokens.brand.primary} />
                <Text style={styles.modalBody}>Hesabın siliniyor…</Text>
              </View>
            )}
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionLabel}>{title}</Text>
      <View style={styles.sectionInner}>{children}</View>
    </View>
  );
}

function Row({
  label,
  onPress,
}: {
  label: string;
  onPress: () => void;
}) {
  return (
    <Pressable style={styles.row} onPress={onPress}>
      <Text style={styles.rowLabel}>{label}</Text>
      <Text style={styles.rowChevron}>›</Text>
    </Pressable>
  );
}

function Toggle({
  label,
  description,
  value,
  onValueChange,
}: {
  label: string;
  description?: string;
  value: boolean;
  onValueChange: (v: boolean) => void;
}) {
  return (
    <View style={styles.row}>
      <View style={styles.toggleText}>
        <Text style={styles.rowLabel}>{label}</Text>
        {description && (
          <Text style={styles.rowSub}>{description}</Text>
        )}
      </View>
      <Switch
        value={value}
        onValueChange={onValueChange}
        trackColor={{
          false: tokens.bg.surfaceContainerHigh,
          true: tokens.brand.primary,
        }}
        thumbColor={value ? tokens.brand.secondary : "#fff"}
      />
    </View>
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
    fontSize: 20,
    fontWeight: tokens.weight.extrabold,
    color: tokens.text.primary,
  },
  spacer: { width: 70 },
  content: {
    padding: tokens.spacing.md,
    paddingBottom: 80,
  },
  section: {
    marginBottom: tokens.spacing.lg,
  },
  sectionLabel: {
    fontSize: 11,
    fontWeight: tokens.weight.bold,
    color: tokens.text.tertiary,
    letterSpacing: 1.4,
    marginBottom: 8,
    paddingLeft: 12,
  },
  sectionInner: {
    backgroundColor: tokens.bg.surfaceContainer,
    borderRadius: tokens.radius.base,
    overflow: "hidden",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 14,
    paddingVertical: 14,
    gap: 12,
    borderBottomWidth: 1,
    borderBottomColor: tokens.border.light,
  },
  rowLabel: {
    flex: 1,
    fontSize: 15,
    fontWeight: tokens.weight.semibold,
    color: tokens.text.primary,
  },
  rowSub: {
    fontSize: 12,
    color: tokens.text.secondary,
    marginTop: 2,
  },
  toggleText: {
    flex: 1,
  },
  rowChevron: {
    fontSize: 20,
    color: tokens.text.tertiary,
  },
  footer: {
    alignItems: "center",
    paddingTop: tokens.spacing.md,
    gap: 4,
  },
  version: {
    color: tokens.text.tertiary,
    fontSize: 13,
  },
  tagline: {
    color: tokens.text.tertiary,
    fontSize: 11,
    fontStyle: "italic",
  },
  // ---- Delete-account modal ----
  modalBackdrop: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.55)",
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
  },
  modalCard: {
    backgroundColor: tokens.bg.surfaceContainer,
    borderRadius: tokens.radius.base,
    padding: 20,
    width: "100%",
    maxWidth: 420,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: tokens.weight.extrabold,
    color: tokens.text.primary,
    marginBottom: 10,
  },
  modalBody: {
    fontSize: 14,
    color: tokens.text.secondary,
    lineHeight: 20,
    marginBottom: 12,
  },
  modalList: {
    marginBottom: 16,
    gap: 6,
  },
  modalListItem: {
    fontSize: 13,
    color: tokens.text.primary,
    lineHeight: 18,
  },
  modalWarn: {
    color: "#c2410c",
    fontWeight: tokens.weight.semibold,
  },
  modalCode: {
    fontWeight: tokens.weight.extrabold,
    color: tokens.text.primary,
  },
  modalInput: {
    borderWidth: 1,
    borderColor: tokens.border.light,
    backgroundColor: tokens.bg.surfaceContainerHigh,
    borderRadius: tokens.radius.base,
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: 16,
    fontWeight: tokens.weight.bold,
    color: tokens.text.primary,
    marginBottom: 8,
  },
  modalError: {
    color: "#b91c1c",
    fontSize: 13,
    marginBottom: 8,
  },
  modalActions: {
    flexDirection: "row",
    justifyContent: "flex-end",
    gap: 10,
    marginTop: 8,
    flexWrap: "wrap",
  },
  modalBtn: {
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: tokens.radius.base,
  },
  modalBtnGhost: {
    backgroundColor: "transparent",
  },
  modalBtnGhostText: {
    color: tokens.text.secondary,
    fontSize: 14,
    fontWeight: tokens.weight.semibold,
  },
  modalBtnDanger: {
    backgroundColor: "#b91c1c",
  },
  modalBtnDangerText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: tokens.weight.bold,
  },
  modalFallback: {
    marginTop: 12,
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: tokens.border.light,
  },
  modalFallbackText: {
    color: tokens.text.tertiary,
    fontSize: 12,
    textAlign: "center",
  },
  modalDeleting: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 24,
    gap: 16,
  },
});
