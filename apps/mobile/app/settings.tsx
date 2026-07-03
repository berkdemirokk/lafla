// Settings screen — preferences, privacy, account, support, about.
//
// Layout: five sections each rendered as a card on bg.surfaceContainerLow.
// Section labels are small-caps tertiary text. Rows give opacity feedback
// on press. Toggle component wraps native Switch with brand colors.
//
// IMPORTANT: lib/sfx.ts is being created by a parallel agent in this same
// wave — we MUST tolerate it not existing yet. See defensive require
// pattern below. Same for expo-store-review (not in package.json).

import { useEffect, useRef, useState } from "react";
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
import { ThemedStatusBar } from "../components/ThemedStatusBar";
import { useLocalSearchParams, useRouter } from "expo-router";
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
import { supabase } from "../lib/supabase";
import { hapticImpact, hapticSelection, hapticSuccess } from "../lib/feedback";
import { restorePurchasesDetailed } from "../lib/iap";
import {
  getThemePreference,
  setThemePreference,
  type AppThemePreference,
} from "../lib/theme-preference";
import {
  disableReminders,
  enableDailyReminder,
  getReminderHour,
  isNotificationsEnabled,
} from "../lib/notifications";
import { redeemReferralCode, getRedeemedCode } from "../lib/referral";
import { signOut } from "../lib/auth";
import { tokens } from "../theme";

const K_AUTO_SPEAK = "lafla.settings.autoSpeak";
const THEME_OPTIONS: Array<{
  value: AppThemePreference;
  label: string;
  icon: string;
}> = [
  { value: "system", label: "Sistem", icon: "⚙️" },
  { value: "dark", label: "Dark", icon: "🌙" },
  { value: "light", label: "White", icon: "☀️" },
];

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
  // 2026-05-24 — Profile "Hesabımı sil" row'undan deep link.
  // ?action=delete → mount'ta openDeleteFlow tetiklenir; kullanıcı profile'den
  // beklediği UX'i Settings'e gelirken ALMIŞ olur, scroll-and-tap aramaz.
  const params = useLocalSearchParams<{ action?: string }>();
  const [autoSpeak, setAutoSpeak] = useState(true);
  const [sfxOn, setSfxOn] = useState(true);
  const [themePreference, setThemePreferenceState] =
    useState<AppThemePreference>("dark");
  // "Analytics olmadan kullan" — ON means opted OUT of analytics.
  // We store the inverse internally for clearer call-site semantics.
  const [analyticsOptOut, setAnalyticsOptOut] = useState(false);
  // 2026-05-24 — Daily reminder toggle. enable çağrısı iOS permission
  // prompt'unu tetikler; reddedilirse toggle silently false kalır.
  const [reminderOn, setReminderOn] = useState(false);
  const [reminderHour, setReminderHour] = useState(19);

  // Account-deletion flow state.
  const [deleteStep, setDeleteStep] = useState<
    "idle" | "preview" | "typing" | "deleting"
  >("idle");
  const [deletePreview, setDeletePreview] = useState<DeletePreview | null>(null);
  const [deleteConfirmText, setDeleteConfirmText] = useState("");
  const [deleteError, setDeleteError] = useState<string | null>(null);
  // 2026-05-26 — Hesap silme onay modalında "Hangi hesap siliniyor?" net
  // olsun diye giriş yapılmış email'i göster. Çok hesabı olan kullanıcı
  // yanlış hesabı silmesin.
  const [deleteAccountEmail, setDeleteAccountEmail] = useState<string | null>(
    null,
  );

  useEffect(() => {
    (async () => {
      const v = await AsyncStorage.getItem(K_AUTO_SPEAK).catch(() => null);
      if (v === "false") setAutoSpeak(false);
      try {
        setThemePreferenceState(await getThemePreference());
      } catch {
        // ignore — default dark keeps legacy behavior
      }
      // Daily reminder state
      try {
        const [enabled, hour] = await Promise.all([
          isNotificationsEnabled(),
          getReminderHour(),
        ]);
        setReminderOn(enabled);
        setReminderHour(hour);
      } catch {
        // ignore
      }
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

  // 2026-05-24 — Daily reminder toggle handler. enable çağrısı iOS
  // permission prompt'unu tetikler; reddedilirse Alert ile bilgilendir +
  // toggle false kalır. enable true ise mevcut reminderHour state'i kullanılır.
  const handleReminderToggle = async (v: boolean) => {
    hapticSelection();
    if (v) {
      const ok = await enableDailyReminder(reminderHour);
      if (!ok) {
        setReminderOn(false);
        Alert.alert(
          "Bildirim izni gerekli",
          "iOS Ayarlar → Lafla → Bildirimler yolundan açabilirsin.",
        );
        return;
      }
      setReminderOn(true);
      hapticSuccess();
    } else {
      await disableReminders();
      setReminderOn(false);
    }
  };

  // 2026-05-24 — Reminder hour preset selector. Toggle ON iken görünür.
  // 3 preset: Sabah 09:00, Öğle 13:00, Akşam 19:00. Custom saat (TimePicker)
  // ileride v2; preset'ler kullanıcı çoğunluğunu kapsar.
  const handleReminderHourChange = async (hour: number) => {
    if (hour === reminderHour) return;
    hapticSelection();
    setReminderHour(hour);
    if (reminderOn) {
      // 2026-05-26 (P1 audit fix) — enableDailyReminder helper'ın idempotent
      // olup olmadığı belirsiz; eski schedule iptal edilmeden yeni eklenirse
      // user her saat değişiminde çoklu bildirim alır. Önce explicit cancel,
      // sonra reschedule. disableReminders cancelAll API'sini garantili
      // tetikler.
      await disableReminders().catch(() => {});
      await enableDailyReminder(hour);
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

  const handleThemeChange = async (preference: AppThemePreference) => {
    if (preference === themePreference) return;
    hapticSelection();
    setThemePreferenceState(preference);
    await setThemePreference(preference);
  };

  const openDeleteFlow = async () => {
    setDeleteError(null);
    setDeleteConfirmText("");
    setDeleteStep("preview");
    // Email lookup defansif — anonim kullanıcı veya offline durumda null kalır.
    try {
      const { data } = await supabase.auth.getUser();
      setDeleteAccountEmail(data.user?.email ?? null);
    } catch {
      setDeleteAccountEmail(null);
    }
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

  // 2026-05-24 — Deep link handler: Profile → /settings?action=delete
  // openDeleteFlow'u mount'ta bir kere tetikler. Ref ile guard ediyoruz ki
  // param değişiminde (URL'i tekrar invalidate edip rerouting) tekrar
  // çağrılmasın. params'i de cleanup için drop ediyoruz.
  const deleteFlowAutoTriggered = useRef(false);
  useEffect(() => {
    if (deleteFlowAutoTriggered.current) return;
    if (params.action === "delete") {
      deleteFlowAutoTriggered.current = true;
      void openDeleteFlow();
      // URL param'i sil (Native back stack temizliği için).
      router.setParams({ action: undefined });
    }
  }, [params.action, router]);

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
  // tetiklenir; paywall'da ayrı bir buton zaten var. SDK/network hatası ile
  // "aktif abonelik yok" durumunu özellikle ayır.
  const handleRestorePurchases = async () => {
    hapticImpact("light");
    try {
      const result = await restorePurchasesDetailed();
      if (!result.ok) {
        Alert.alert(
          "Geri yükleme başarısız",
          "İnternet bağlantını kontrol edip tekrar dene.",
        );
        return;
      }
      if (result.active) {
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
      <ThemedStatusBar />

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
          <ThemePreferencePicker
            value={themePreference}
            onChange={handleThemeChange}
          />
          <Toggle
            icon="🔊"
            label="Otomatik telaffuz"
            description="Yeni kelimelerde sesli okuma"
            value={autoSpeak}
            onValueChange={setAutoSpeakValue}
          />
          <Toggle
            icon="🔔"
            label="Günlük hatırlatma"
            description={`Her gün ${String(reminderHour).padStart(2, "0")}:00'da bir sahne önerisi`}
            value={reminderOn}
            onValueChange={handleReminderToggle}
            isLast={!reminderOn && !sfxAvailable}
          />
          {reminderOn && (
            <ReminderHourPicker
              activeHour={reminderHour}
              onChange={handleReminderHourChange}
              isLast={!sfxAvailable}
            />
          )}
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
          {/* Çıkış yap — Apple review pattern Settings → Account → Sign Out
              beklediği için profile.tsx'tekine ek olarak buraya da eklendi. */}
          <Row
            icon="🚪"
            label="Çıkış yap"
            onPress={() => {
              hapticSelection();
              Alert.alert(
                "Hesap",
                "Çıkış yapmak istediğine emin misin?",
                [
                  { text: "Vazgeç", style: "cancel" },
                  {
                    text: "Çıkış",
                    style: "destructive",
                    onPress: async () => {
                      await signOut().catch(() => {});
                      router.replace("/auth" as never);
                    },
                  },
                ],
              );
            }}
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
                {deleteAccountEmail ? (
                  <Text style={styles.modalAccount}>
                    Silinecek hesap:{" "}
                    <Text style={styles.modalAccountEmail}>
                      {deleteAccountEmail}
                    </Text>
                  </Text>
                ) : null}
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
                    accessibilityRole="button"
                    accessibilityLabel="Hesap silme işleminden vazgeç"
                  >
                    <Text style={styles.modalBtnGhostText}>Vazgeç</Text>
                  </Pressable>
                  <Pressable
                    style={[styles.modalBtn, styles.modalBtnDanger]}
                    onPress={proceedToTyping}
                    accessibilityRole="button"
                    accessibilityLabel="Hesap silme onayına devam et"
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
                  accessibilityLabel="Hesap silme onayı"
                  accessibilityHint="Onaylamak için SİL yaz"
                />
                {deleteError && (
                  <Text style={styles.modalError}>{deleteError}</Text>
                )}
                <View style={styles.modalActions}>
                  <Pressable
                    style={[styles.modalBtn, styles.modalBtnGhost]}
                    onPress={cancelDeleteFlow}
                    accessibilityRole="button"
                    accessibilityLabel="Hesap silme işleminden vazgeç"
                  >
                    <Text style={styles.modalBtnGhostText}>Vazgeç</Text>
                  </Pressable>
                  <Pressable
                    style={[styles.modalBtn, styles.modalBtnDanger]}
                    onPress={confirmDelete}
                    accessibilityRole="button"
                    accessibilityLabel="Hesabımı kalıcı olarak sil"
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
                    accessibilityRole="link"
                    accessibilityLabel="Manuel hesap silme desteğine e-posta gönder"
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

function ThemePreferencePicker({
  value,
  onChange,
}: {
  value: AppThemePreference;
  onChange: (value: AppThemePreference) => void;
}) {
  return (
    <View style={styles.themePickerRow}>
      <View style={styles.themePickerHeader}>
        <Text style={styles.rowIcon}>🎨</Text>
        <View style={styles.toggleText}>
          <Text style={styles.rowLabel}>Tema</Text>
          <Text style={styles.rowSub}>Dark veya White görünüm seç</Text>
        </View>
      </View>
      <View style={styles.themeSegment}>
        {THEME_OPTIONS.map((option) => {
          const selected = option.value === value;
          return (
            <Pressable
              key={option.value}
              onPress={() => onChange(option.value)}
              style={({ pressed }) => [
                styles.themeOption,
                selected && styles.themeOptionSelected,
                pressed && styles.rowPressed,
              ]}
              accessibilityRole="button"
              accessibilityLabel={`Tema seçimi: ${option.label}`}
              accessibilityState={{ selected }}
            >
              <Text style={styles.themeOptionIcon}>{option.icon}</Text>
              <Text
                style={[
                  styles.themeOptionText,
                  selected && styles.themeOptionTextSelected,
                ]}
              >
                {option.label}
              </Text>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}

// 2026-05-24 — Reminder hour preset picker. Toggle ON iken Toggle altında
// görünür. 3 preset chip (Sabah/Öğle/Akşam). Custom saat picker v2
// hedefiyle ertelendi — preset'ler kullanıcı çoğunluğunu kapsar ve UI
// kompleksitesi minimum.
const REMINDER_PRESETS: Array<{ label: string; hour: number; icon: string }> = [
  { label: "Sabah", hour: 9, icon: "☀️" },
  { label: "Öğle", hour: 13, icon: "☕" },
  { label: "Akşam", hour: 19, icon: "🌙" },
];

function ReminderHourPicker({
  activeHour,
  onChange,
  isLast,
}: {
  activeHour: number;
  onChange: (h: number) => void;
  isLast?: boolean;
}) {
  return (
    <View
      style={[
        styles.row,
        styles.reminderPickerRow,
        isLast && styles.rowLast,
      ]}
    >
      <View style={styles.reminderPickerGrid}>
        {REMINDER_PRESETS.map((p) => {
          const active = p.hour === activeHour;
          return (
            <Pressable
              key={p.hour}
              onPress={() => onChange(p.hour)}
              style={({ pressed }) => [
                styles.reminderChip,
                active && styles.reminderChipActive,
                pressed && { opacity: 0.8 },
              ]}
              accessibilityRole="button"
              accessibilityLabel={`Hatırlatma saati: ${p.label} ${p.hour}:00`}
              accessibilityState={{ selected: active }}
            >
              <Text style={styles.reminderChipIcon}>{p.icon}</Text>
              <Text
                style={[
                  styles.reminderChipLabel,
                  active && styles.reminderChipLabelActive,
                ]}
              >
                {p.label}
              </Text>
              <Text
                style={[
                  styles.reminderChipHour,
                  active && styles.reminderChipHourActive,
                ]}
              >
                {String(p.hour).padStart(2, "0")}:00
              </Text>
            </Pressable>
          );
        })}
      </View>
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
    fontFamily: tokens.font.display,
    letterSpacing: -0.3,
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
  themePickerRow: {
    paddingHorizontal: 14,
    paddingVertical: 14,
    gap: 12,
    borderBottomWidth: 1,
    borderBottomColor: tokens.border.light,
  },
  themePickerHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  themeSegment: {
    flexDirection: "row",
    gap: 8,
    padding: 4,
    borderRadius: tokens.radius.full,
    backgroundColor: tokens.bg.surfaceContainer,
    borderWidth: 1,
    borderColor: tokens.border.outlineVariant,
  },
  themeOption: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 5,
    paddingVertical: 9,
    borderRadius: tokens.radius.full,
  },
  themeOptionSelected: {
    backgroundColor: tokens.brand.primary,
    shadowColor: tokens.brand.primary,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 7,
    elevation: 3,
  },
  themeOptionIcon: {
    fontSize: 13,
  },
  themeOptionText: {
    fontSize: 12,
    fontWeight: tokens.weight.extrabold,
    color: tokens.text.secondary,
    letterSpacing: 0.2,
  },
  themeOptionTextSelected: {
    color: tokens.brand.onPrimary,
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
  // 2026-05-26 — Hesap silme onay modalında email gösterimi.
  modalAccount: {
    fontSize: 13,
    color: tokens.text.secondary,
    marginBottom: 8,
  },
  modalAccountEmail: {
    color: tokens.text.primary,
    fontWeight: tokens.weight.bold,
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

  // 2026-05-24 — Reminder hour preset picker styles.
  // Settings row pattern'ine uyumlu. 3 chip grid (Sabah/Öğle/Akşam).
  // Aktif chip cyan filled, inaktif neutral border.
  reminderPickerRow: {
    paddingVertical: 12,
  },
  reminderPickerGrid: {
    flex: 1,
    flexDirection: "row",
    gap: 8,
  },
  reminderChip: {
    flex: 1,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderRadius: tokens.radius.base,
    backgroundColor: tokens.bg.surfaceContainer,
    borderWidth: 1,
    borderColor: tokens.border.outlineVariant,
    alignItems: "center",
    gap: 2,
  },
  reminderChipActive: {
    backgroundColor: tokens.brand.tertiarySoft,
    borderColor: tokens.brand.tertiary,
  },
  reminderChipIcon: {
    fontSize: 18,
  },
  reminderChipLabel: {
    fontSize: 12,
    fontFamily: tokens.font.sansBold,
    color: tokens.text.secondary,
    letterSpacing: 0.2,
  },
  reminderChipLabelActive: {
    color: tokens.brand.tertiary,
  },
  reminderChipHour: {
    fontSize: 11,
    color: tokens.text.tertiary,
    fontFamily: tokens.font.sans,
    letterSpacing: 0.3,
  },
  reminderChipHourActive: {
    color: tokens.brand.tertiary,
  },
});
