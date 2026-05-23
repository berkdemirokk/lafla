// Settings screen — preferences, privacy, account, support, about.
//
// Layout: five sections each rendered as a card on bg.surfaceContainerLow.
// Section labels are small-caps tertiary text. Rows give opacity feedback
// on press. Toggle component wraps native Switch with brand colors.
//
// IMPORTANT: lib/sfx.ts is being created by a parallel agent in this same
// wave — we MUST tolerate it not existing yet. See defensive require
// pattern below. Same for expo-store-review (not in package.json).

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
  previewWhatWillBeDeleted,
  deleteAccountInstant,
  type DeletePreview,
} from "../lib/delete-account";
import { hapticImpact, hapticSelection, hapticSuccess } from "../lib/feedback";
import { restorePurchases } from "../lib/iap";
import { redeemReferralCode, getRedeemedCode } from "../lib/referral";
import { tokens } from "../theme";

const K_AUTO_SPEAK = "lafla.settings.autoSpeak";

// ===== Defensive dynamic loaders =====================================
// `lib/sfx.ts` ships in this same wave from a sibling agent. If the file
// is absent at runtime, require() throws — we swallow it and the Ses
// efektleri row is hidden. Compile-time we can't import the path because
// the file might not yet exist.
let setSfxEnabledFn: ((b: boolean) => Promise<void>) | null = null;
let isSfxEnabledFn: (() => Promise<boolean>) | null = null;
try {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const sfx = require("../lib/sfx");
  setSfxEnabledFn = sfx.setSfxEnabled ?? null;
  isSfxEnabledFn = sfx.isSfxEnabled ?? null;
} catch {
  // sfx module not present — row will be hidden.
}

// `expo-store-review` is optional. If installed, we use the native
// in-app review prompt; otherwise we fall back to a mailto.
let storeReviewRequest: (() => Promise<void>) | null = null;
let storeReviewIsAvailable: (() => Promise<boolean>) | null = null;
try {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const sr = require("expo-store-review");
  storeReviewRequest = sr.requestReview ?? null;
  storeReviewIsAvailable = sr.isAvailableAsync ?? null;
} catch {
  // module not installed — mailto fallback used.
}

const APPLE_SUBS_URL = "https://apps.apple.com/account/subscriptions";
const PRIVACY_URL = "https://berkdemirokk.github.io/lafla/privacy.html";
const TERMS_URL = "https://berkdemirokk.github.io/lafla/terms.html";

export default function SettingsScreen() {
  const router = useRouter();
  const [autoSpeak, setAutoSpeak] = useState(true);
  const [sfxOn, setSfxOn] = useState(true);
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
      try {
        const enabled = await isAnalyticsEnabled();
        setAnalyticsOptOut(!enabled);
      } catch {
        // ignore
      }
      if (isSfxEnabledFn) {
        try {
          setSfxOn(await isSfxEnabledFn());
        } catch {
          // ignore — keep default ON
        }
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

  const handleSfxToggle = async (v: boolean) => {
    hapticSelection();
    setSfxOn(v);
    if (setSfxEnabledFn) {
      try {
        await setSfxEnabledFn(v);
      } catch {
        // non-fatal
      }
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
    if (
      t !== "SİL" &&
      t !== "SIL" &&
      t !== "sil" &&
      t !== "sİl" &&
      t !== "sil".toLocaleUpperCase("tr")
    ) {
      setDeleteError('Onaylamak için "SİL" yazmalısın.');
      return;
    }
    hapticImpact("heavy");
    setDeleteStep("deleting");
    setDeleteError(null);
    const res = await deleteAccountInstant();
    if (res.ok) {
      setDeleteStep("idle");
      router.replace("/" as never);
    } else {
      setDeleteStep("typing");
      setDeleteError(res.error ?? "Bilinmeyen hata.");
    }
  };

  const openMailtoFallback = () => {
    Linking.openURL(
      "mailto:berkkdemirok@gmail.com?subject=Hesap silme talebi&body=Otomatik silme başarısız oldu, hesabımın manuel olarak silinmesini talep ediyorum.",
    ).catch(() => Alert.alert("Hata", "Mail uygulaması açılamadı."));
  };

  const setAutoSpeakValue = async (v: boolean) => {
    hapticSelection();
    setAutoSpeak(v);
    await AsyncStorage.setItem(K_AUTO_SPEAK, v ? "true" : "false").catch(() => {});
  };

  // Apple Guideline 3.1.1 — Restore Purchases ulaşılabilirlik. Settings'ten
  // tetiklenir; paywall'da ayrı bir buton zaten var. SDK live değilse "aktif
  // abonelik bulunamadı" gibi kibar bir mesaj döner.
  const handleRestorePurchases = async () => {
    hapticImpact("light");
    try {
      const restored = await restorePurchases();
      if (restored) {
        hapticSuccess();
        Alert.alert(
          "Geri yüklendi",
          "Premium özellikler tekrar aktif.",
        );
      } else {
        Alert.alert(
          "Aktif abonelik bulunamadı",
          "Bu Apple ID üzerinde aktif bir Lafla aboneliği bulamadık.",
        );
      }
    } catch {
      Alert.alert("Hata", "Geri yükleme başarısız. Tekrar dene.");
    }
  };

  // Referral code redemption — Adım 7 (2026-05-20).
  // Kullanıcı önceden redeem etmişse "Davet kodu kullanıldı" gösterir,
  // yoksa Alert.prompt ile kod ister, validate eder, redeemReferralCode'a
  // yedirir. Bonus award manuel (Supabase'den admin / cron).
  const handleReferralRedeem = async () => {
    const existing = await getRedeemedCode().catch(() => null);
    if (existing) {
      Alert.alert(
        "Davet kodu kullanıldı",
        `${existing} kodu redeem edildi. 1 ay Lafla Pro bonusu en geç 24 saat içinde aktif olur.`,
      );
      return;
    }
    Alert.prompt?.(
      "Davet kodu",
      "Arkadaşının verdiği 6 karakterlik kodu gir.",
      [
        { text: "Vazgeç", style: "cancel" },
        {
          text: "Redeem et",
          onPress: async (input) => {
            const code = (input ?? "").trim().toUpperCase();
            const ok = await redeemReferralCode(code).catch(() => false);
            if (ok) {
              hapticSuccess();
              Alert.alert(
                "Kod kabul edildi",
                "Senin ve arkadaşının +1 ay Lafla Pro bonusu 24 saat içinde işlenir.",
              );
            } else {
              Alert.alert(
                "Geçersiz kod",
                "Kod geçersiz veya zaten kullanılmış. Tekrar dene.",
              );
            }
          },
        },
      ],
      "plain-text",
    );
  };

  const handleRate = async () => {
    hapticSelection();
    if (storeReviewRequest && storeReviewIsAvailable) {
      try {
        const ok = await storeReviewIsAvailable();
        if (ok) {
          await storeReviewRequest();
          return;
        }
      } catch {
        // fall through to mailto
      }
    }
    Linking.openURL(
      "mailto:berkkdemirok@gmail.com?subject=Lafla geri bildirim",
    ).catch(() => Alert.alert("Hata", "Mail uygulaması açılamadı."));
  };

  const openUrl = (url: string) => {
    hapticSelection();
    Linking.openURL(url).catch(() =>
      Alert.alert("Hata", "Bağlantı açılamadı."),
    );
  };

  const sfxAvailable = setSfxEnabledFn !== null && isSfxEnabledFn !== null;

  const version = Constants.expoConfig?.version ?? "0.1.0";
  // buildNumber lives in expoConfig.ios.buildNumber (iOS) or
  // expoConfig.android.versionCode (Android). Display whichever is set.
  const iosBuild = Constants.expoConfig?.ios?.buildNumber;
  const androidBuild = Constants.expoConfig?.android?.versionCode;
  const build = iosBuild ?? (androidBuild ? String(androidBuild) : null);

  return (
    <SafeAreaView style={styles.safe} edges={["top", "bottom"]}>
      <StatusBar style="light" />

      <View style={styles.header}>
        <Pressable
          onPress={() => router.back()}
          style={styles.backBtn}
          hitSlop={12}
          accessibilityRole="button"
          accessibilityLabel="Geri"
        >
          <Text style={styles.backText}>← Geri</Text>
        </Pressable>
        <Text style={styles.title}>Ayarlar</Text>
        <View style={styles.spacer} />
      </View>

      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        {/* ===================== TERCİHLER ===================== */}
        <Section title="TERCİHLER">
          <Toggle
            icon="🔊"
            label="Otomatik telaffuz"
            description="Yeni kelimelerde sesli okuma"
            value={autoSpeak}
            onValueChange={setAutoSpeakValue}
            isLast={!sfxAvailable}
          />
          {sfxAvailable && (
            <Toggle
              icon="🎵"
              label="Ses efektleri"
              description="Doğru / yanlış cevap tıkları"
              value={sfxOn}
              onValueChange={handleSfxToggle}
              isLast
            />
          )}
        </Section>

        {/* ===================== GİZLİLİK ===================== */}
        <Section title="GİZLİLİK">
          <Toggle
            icon="📊"
            label="Analytics olmadan kullan"
            description="Anonim kullanım verisi gönderme. Çökme raporları etkilenmez."
            value={analyticsOptOut}
            onValueChange={handleAnalyticsToggle}
          />
          <Row
            icon="🔒"
            label="Gizlilik politikası"
            onPress={() => openUrl(PRIVACY_URL)}
          />
          <Row
            icon="📄"
            label="Kullanım koşulları"
            onPress={() => openUrl(TERMS_URL)}
            isLast
          />
        </Section>

        {/* ===================== HESAP ===================== */}
        <Section title="HESAP">
          <Row
            icon="👤"
            label="Profil"
            onPress={() => {
              hapticSelection();
              router.push("/profile" as never);
            }}
          />
          <Row
            icon="✨"
            label="Lafla Pro Aboneliği"
            onPress={() => {
              hapticSelection();
              router.push("/paywall" as never);
            }}
          />
          <Row
            icon="💳"
            label="Aboneliğim"
            onPress={() => openUrl(APPLE_SUBS_URL)}
          />
          {/* Apple Guideline 3.1.1 — Restore Purchases ulaşılabilir hem
              paywall'dan hem Settings'ten. APP_REVIEW_NOTES'un bu iddiası
              2026-05-20'ye kadar koddan eksikti, şimdi karşılığı var. */}
          <Row
            icon="🔄"
            label="Satın alımları geri yükle"
            onPress={handleRestorePurchases}
          />
          {/* Referral code redeem — Adım 7. */}
          <Row
            icon="🎁"
            label="Bir davet kodum var"
            onPress={handleReferralRedeem}
          />
          <Row
            icon="🗑️"
            label="Hesabımı sil"
            onPress={openDeleteFlow}
            danger
            isLast
          />
        </Section>

        {/* ===================== DESTEK ===================== */}
        <Section title="DESTEK">
          <Row
            icon="💬"
            label="Bize yaz"
            onPress={() =>
              Linking.openURL(
                "mailto:berkkdemirok@gmail.com?subject=Lafla geri bildirim",
              ).catch(() =>
                Alert.alert("Hata", "Mail uygulaması açılamadı."),
              )
            }
          />
          <Row
            icon="⭐"
            label="App Store'da değerlendir"
            onPress={handleRate}
            isLast
          />
        </Section>

        {/* ===================== HAKKINDA ===================== */}
        <Section title="HAKKINDA">
          <View style={styles.aboutBox}>
            <Text style={styles.aboutVersion}>
              Sürüm {version}
              {build ? `  ·  Build ${build}` : ""}
            </Text>
            <Text style={styles.aboutCopyright}>
              Lafla © 2026 Berk Demirok
            </Text>
            <Text style={styles.aboutTagline}>Konuş, çalış.</Text>
          </View>
        </Section>
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
                      Otomatik silme başarısız. Manuel destek için: berkkdemirok@gmail.com
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

// ===== Section ========================================================
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

// ===== Row (tappable navigation) =====================================
function Row({
  icon,
  label,
  onPress,
  isLast,
  danger,
}: {
  icon?: string;
  label: string;
  onPress: () => void;
  isLast?: boolean;
  danger?: boolean;
}) {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.row,
        isLast && styles.rowLast,
        pressed && styles.rowPressed,
      ]}
      onPress={onPress}
      accessibilityRole="button"
      accessibilityLabel={label}
    >
      {icon ? <Text style={styles.rowIcon}>{icon}</Text> : null}
      <Text style={[styles.rowLabel, danger && styles.rowLabelDanger]}>
        {label}
      </Text>
      <Text style={styles.rowChevron}>›</Text>
    </Pressable>
  );
}

// ===== Toggle =========================================================
function Toggle({
  icon,
  label,
  description,
  value,
  onValueChange,
  isLast,
}: {
  icon?: string;
  label: string;
  description?: string;
  value: boolean;
  onValueChange: (v: boolean) => void;
  isLast?: boolean;
}) {
  return (
    <View style={[styles.row, isLast && styles.rowLast]}>
      {icon ? <Text style={styles.rowIcon}>{icon}</Text> : null}
      <View style={styles.toggleText}>
        <Text style={styles.rowLabel}>{label}</Text>
        {description && <Text style={styles.rowSub}>{description}</Text>}
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
    marginBottom: tokens.spacing.md,
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
    backgroundColor: tokens.bg.surfaceContainerLow,
    borderRadius: tokens.radius.lg,
    borderWidth: 1,
    borderColor: tokens.border.outlineVariant,
    overflow: "hidden",
    // Faz 1 premium polish — settings sections lift off bg
    ...tokens.shadow.card,
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
  rowLast: {
    borderBottomWidth: 0,
  },
  rowPressed: {
    opacity: 0.7,
  },
  rowIcon: {
    fontSize: 18,
    width: 24,
    textAlign: "center",
  },
  rowLabel: {
    flex: 1,
    fontSize: 15,
    fontWeight: tokens.weight.semibold,
    color: tokens.text.primary,
  },
  rowLabelDanger: {
    color: tokens.semantic.error,
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
  // ---- About card ----
  aboutBox: {
    paddingHorizontal: 14,
    paddingVertical: 18,
    alignItems: "center",
    gap: 6,
  },
  aboutVersion: {
    color: tokens.text.secondary,
    fontSize: 13,
    fontWeight: tokens.weight.semibold,
  },
  aboutCopyright: {
    color: tokens.text.tertiary,
    fontSize: 12,
  },
  aboutTagline: {
    color: tokens.text.tertiary,
    fontSize: 11,
    fontStyle: "italic",
    marginTop: 4,
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
