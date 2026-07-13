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
import { useTranslation, type Locale } from "../lib/i18n";
import { tokens } from "../theme";

const K_AUTO_SPEAK = "lafla.settings.autoSpeak";
const THEME_OPTIONS: Array<{
  value: AppThemePreference;
  labelKey: string;
  icon: string;
}> = [
  { value: "system", labelKey: "settings.theme.system", icon: "⚙️" },
  { value: "dark", labelKey: "settings.theme.dark", icon: "🌙" },
  { value: "light", labelKey: "settings.theme.light", icon: "☀️" },
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
  const { t, locale, setLocale } = useTranslation();
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
    const previous = analyticsOptOut;
    setAnalyticsOptOut(optOut);
    try {
      await setAnalyticsEnabled(!optOut);
    } catch {
      setAnalyticsOptOut(previous);
      Alert.alert(t("common.error_title"), t("settings.alert.save_failed"));
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
          t("settings.reminder.permission_title"),
          t("settings.reminder.permission_body"),
        );
        return;
      }
      setReminderOn(true);
      hapticSuccess();
    } else {
      try {
        await disableReminders();
        setReminderOn(false);
      } catch {
        setReminderOn(true);
        Alert.alert(t("common.error_title"), t("settings.alert.save_failed"));
      }
    }
  };

  // 2026-05-24 — Reminder hour preset selector. Toggle ON iken görünür.
  // 3 preset: Sabah 09:00, Öğle 13:00, Akşam 19:00. Custom saat (TimePicker)
  // ileride v2; preset'ler kullanıcı çoğunluğunu kapsar.
  const handleReminderHourChange = async (hour: number) => {
    if (hour === reminderHour) return;
    hapticSelection();
    const previous = reminderHour;
    setReminderHour(hour);
    if (reminderOn) {
      // 2026-05-26 (P1 audit fix) — enableDailyReminder helper'ın idempotent
      // olup olmadığı belirsiz; eski schedule iptal edilmeden yeni eklenirse
      // user her saat değişiminde çoklu bildirim alır. Önce explicit cancel,
      // sonra reschedule. disableReminders cancelAll API'sini garantili
      // tetikler.
      try {
        await disableReminders();
        const enabled = await enableDailyReminder(hour);
        if (!enabled) throw new Error("Reminder could not be scheduled");
      } catch {
        setReminderHour(previous);
        await enableDailyReminder(previous).catch(() => false);
        Alert.alert(t("common.error_title"), t("settings.alert.save_failed"));
      }
    }
  };

  const handleSfxToggle = async (v: boolean) => {
    hapticSelection();
    const previous = sfxOn;
    setSfxOn(v);
    if (setSfxEnabledFn) {
      try {
        await setSfxEnabledFn(v);
      } catch {
        setSfxOn(previous);
        Alert.alert(t("common.error_title"), t("settings.alert.save_failed"));
        // non-fatal
      }
    }
  };

  const handleThemeChange = async (preference: AppThemePreference) => {
    if (preference === themePreference) return;
    hapticSelection();
    const previous = themePreference;
    setThemePreferenceState(preference);
    try {
      await setThemePreference(preference);
    } catch {
      setThemePreferenceState(previous);
      await setThemePreference(previous).catch(() => {});
      Alert.alert(t("common.error_title"), t("settings.alert.save_failed"));
    }
  };

  const handleLocaleChange = async (nextLocale: Locale) => {
    if (nextLocale === locale) return;
    hapticSelection();
    try {
      await setLocale(nextLocale);
    } catch {
      Alert.alert(t("common.error_title"), t("settings.alert.save_failed"));
    }
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
    const confirmation = deleteConfirmText.trim();
    const expectedKeyword = t("settings.delete.keyword");
    if (
      confirmation.toLocaleUpperCase(locale) !==
        expectedKeyword.toLocaleUpperCase(locale) &&
      confirmation.toLocaleUpperCase("tr") !== "SİL" &&
      confirmation.toUpperCase() !== "SIL"
    ) {
      setDeleteError(t("settings.delete.keyword_error", { keyword: expectedKeyword }));
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
      setDeleteError(res.error ?? t("settings.delete.unknown_error"));
    }
  };

  const openMailtoFallback = () => {
    const subject = encodeURIComponent(t("settings.delete.mail_subject"));
    const body = encodeURIComponent(t("settings.delete.mail_body"));
    Linking.openURL(
      `mailto:berkkdemirok@gmail.com?subject=${subject}&body=${body}`,
    ).catch(() => Alert.alert(t("common.error"), t("settings.alert.mail_failed")));
  };

  const setAutoSpeakValue = async (v: boolean) => {
    hapticSelection();
    const previous = autoSpeak;
    setAutoSpeak(v);
    try {
      await AsyncStorage.setItem(K_AUTO_SPEAK, v ? "true" : "false");
    } catch {
      setAutoSpeak(previous);
      Alert.alert(t("common.error_title"), t("settings.alert.save_failed"));
    }
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
          t("settings.alert.restore_failed_title"),
          t("settings.alert.restore_failed_body"),
        );
        return;
      }
      if (result.active) {
        hapticSuccess();
        Alert.alert(
          t("settings.alert.restore_success_title"),
          t("settings.alert.restore_success_body"),
        );
      } else {
        Alert.alert(
          t("settings.alert.restore_none_title"),
          t("settings.alert.restore_none_body"),
        );
      }
    } catch {
      Alert.alert(
        t("common.error"),
        t("settings.alert.restore_failed_body"),
      );
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
        t("settings.alert.referral_used_title"),
        t("settings.alert.referral_used_body", { code: existing }),
      );
      return;
    }
    Alert.prompt?.(
      t("settings.referral_prompt_title"),
      t("settings.referral_prompt_body"),
      [
        { text: t("common.cancel"), style: "cancel" },
        {
          text: t("settings.referral_redeem"),
          onPress: async (input) => {
            const code = (input ?? "").trim().toUpperCase();
            const ok = await redeemReferralCode(code).catch(() => false);
            if (ok) {
              hapticSuccess();
              Alert.alert(
                t("settings.referral_success_title"),
                t("settings.referral_success_body"),
              );
            } else {
              Alert.alert(
                t("settings.referral_invalid_title"),
                t("settings.referral_invalid_body"),
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
    ).catch(() => Alert.alert(t("common.error"), t("settings.alert.mail_failed")));
  };

  const openUrl = (url: string) => {
    hapticSelection();
    Linking.openURL(url).catch(() =>
      Alert.alert(t("common.error"), t("settings.alert.link_failed")),
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
          accessibilityLabel={t("common.back")}
        >
          <Text style={styles.backText}>← {t("common.back")}</Text>
        </Pressable>
        <Text style={styles.title}>{t("settings.title")}</Text>
        <View style={styles.spacer} />
      </View>

      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        {/* ===================== TERCİHLER ===================== */}
        <Section title={t("settings.section.preferences")}>
          <LanguagePicker value={locale} onChange={handleLocaleChange} />
          <ThemePreferencePicker
            value={themePreference}
            onChange={handleThemeChange}
          />
          <Toggle
            icon="🔊"
            label={t("settings.auto_speak.label")}
            description={t("settings.auto_speak.description")}
            value={autoSpeak}
            onValueChange={setAutoSpeakValue}
          />
          <Toggle
            icon="🔔"
            label={t("settings.reminder.label")}
            description={t("settings.reminder.description", {
              hour: String(reminderHour).padStart(2, "0"),
            })}
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
              label={t("settings.sfx.label")}
              description={t("settings.sfx.description")}
              value={sfxOn}
              onValueChange={handleSfxToggle}
              isLast
            />
          )}
        </Section>

        {/* ===================== GİZLİLİK ===================== */}
        <Section title={t("settings.section.privacy")}>
          <Toggle
            icon="📊"
            label={t("settings.analytics.label")}
            description={t("settings.analytics.description")}
            value={analyticsOptOut}
            onValueChange={handleAnalyticsToggle}
          />
          <Row
            icon="🔒"
            label={t("settings.privacy_policy")}
            onPress={() => openUrl(PRIVACY_URL)}
          />
          <Row
            icon="📄"
            label={t("settings.terms")}
            onPress={() => openUrl(TERMS_URL)}
            isLast
          />
        </Section>

        {/* ===================== HESAP ===================== */}
        <Section title={t("settings.section.account")}>
          <Row
            icon="👤"
            label={t("settings.profile")}
            onPress={() => {
              hapticSelection();
              router.push("/profile" as never);
            }}
          />
          <Row
            icon="✨"
            label={t("settings.pro")}
            onPress={() => {
              hapticSelection();
              router.push("/paywall" as never);
            }}
          />
          <Row
            icon="💳"
            label={t("settings.subscription")}
            onPress={() => openUrl(APPLE_SUBS_URL)}
          />
          {/* Apple Guideline 3.1.1 — Restore Purchases ulaşılabilir hem
              paywall'dan hem Settings'ten. APP_REVIEW_NOTES'un bu iddiası
              2026-05-20'ye kadar koddan eksikti, şimdi karşılığı var. */}
          <Row
            icon="🔄"
            label={t("settings.restore")}
            onPress={handleRestorePurchases}
          />
          {/* Referral code redeem — Adım 7. */}
          <Row
            icon="🎁"
            label={t("settings.referral")}
            onPress={handleReferralRedeem}
          />
          {/* Çıkış yap — Apple review pattern Settings → Account → Sign Out
              beklediği için profile.tsx'tekine ek olarak buraya da eklendi. */}
          <Row
            icon="🚪"
            label={t("settings.sign_out")}
            onPress={() => {
              hapticSelection();
              Alert.alert(
                t("settings.alert.sign_out_title"),
                t("settings.alert.sign_out_body"),
                [
                  { text: t("common.cancel"), style: "cancel" },
                  {
                    text: t("settings.sign_out"),
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
            label={t("settings.delete_account")}
            onPress={openDeleteFlow}
            danger
            isLast
          />
        </Section>

        {/* ===================== DESTEK ===================== */}
        <Section title={t("settings.section.support")}>
          <Row
            icon="💬"
            label={t("settings.write_us")}
            onPress={() =>
              Linking.openURL(
                "mailto:berkkdemirok@gmail.com?subject=Lafla geri bildirim",
              ).catch(() =>
                Alert.alert(t("common.error"), t("settings.alert.mail_failed")),
              )
            }
          />
          <Row
            icon="⭐"
            label={t("settings.rate")}
            onPress={handleRate}
            isLast
          />
        </Section>

        {/* ===================== HAKKINDA ===================== */}
        <Section title={t("settings.section.about")}>
          <View style={styles.aboutBox}>
            <Text style={styles.aboutVersion}>
              {t("settings.version", { version })}
              {build ? `  ·  Build ${build}` : ""}
            </Text>
            <Text style={styles.aboutCopyright}>
              {t("settings.copyright")}
            </Text>
            <Text style={styles.aboutTagline}>{t("settings.tagline")}</Text>
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
                <Text style={styles.modalTitle}>{t("settings.delete.preview_title")}</Text>
                {deleteAccountEmail ? (
                  <Text style={styles.modalAccount}>
                    {t("settings.delete.account_label")}{" "}
                    <Text style={styles.modalAccountEmail}>
                      {deleteAccountEmail}
                    </Text>
                  </Text>
                ) : null}
                <Text style={styles.modalBody}>
                  {t("settings.delete.irreversible")}
                </Text>
                <View style={styles.modalList}>
                  <Text style={styles.modalListItem}>
                    {t("settings.delete.scenes", {
                      count: String(deletePreview?.scenes_completed ?? 0),
                    })}
                  </Text>
                  <Text style={styles.modalListItem}>
                    {t("settings.delete.hours", {
                      count: (deletePreview?.hours_practiced ?? 0).toFixed(1),
                    })}
                  </Text>
                  <Text style={styles.modalListItem}>
                    {t("settings.delete.progress")}
                  </Text>
                  <Text style={styles.modalListItem}>
                    {t("settings.delete.backups")}
                  </Text>
                  {deletePreview?.premium_active && (
                    <Text style={[styles.modalListItem, styles.modalWarn]}>
                      {t("settings.delete.premium_warning")}
                    </Text>
                  )}
                </View>
                <View style={styles.modalActions}>
                  <Pressable
                    style={[styles.modalBtn, styles.modalBtnGhost]}
                    onPress={cancelDeleteFlow}
                    accessibilityRole="button"
                    accessibilityLabel={t("settings.delete.cancel_label")}
                  >
                    <Text style={styles.modalBtnGhostText}>{t("common.cancel")}</Text>
                  </Pressable>
                  <Pressable
                    style={[styles.modalBtn, styles.modalBtnDanger]}
                    onPress={proceedToTyping}
                    accessibilityRole="button"
                    accessibilityLabel={t("settings.delete.continue_label")}
                  >
                    <Text style={styles.modalBtnDangerText}>{t("common.continue")}</Text>
                  </Pressable>
                </View>
              </>
            )}

            {deleteStep === "typing" && (
              <>
                <Text style={styles.modalTitle}>{t("settings.delete.final_title")}</Text>
                <Text style={styles.modalBody}>
                  {t("settings.delete.type_prefix")}{" "}
                  <Text style={styles.modalCode}>{t("settings.delete.keyword")}</Text>{" "}
                  {t("settings.delete.type_suffix")}
                </Text>
                <TextInput
                  value={deleteConfirmText}
                  onChangeText={setDeleteConfirmText}
                  autoCapitalize="characters"
                  autoCorrect={false}
                  placeholder={t("settings.delete.keyword")}
                  placeholderTextColor={tokens.text.tertiary}
                  style={styles.modalInput}
                  accessibilityLabel={t("settings.delete.confirm_label")}
                  accessibilityHint={t("settings.delete.confirm_hint", {
                    keyword: t("settings.delete.keyword"),
                  })}
                />
                {deleteError && (
                  <Text style={styles.modalError}>{deleteError}</Text>
                )}
                <View style={styles.modalActions}>
                  <Pressable
                    style={[styles.modalBtn, styles.modalBtnGhost]}
                    onPress={cancelDeleteFlow}
                    accessibilityRole="button"
                    accessibilityLabel={t("settings.delete.cancel_label")}
                  >
                    <Text style={styles.modalBtnGhostText}>{t("common.cancel")}</Text>
                  </Pressable>
                  <Pressable
                    style={[styles.modalBtn, styles.modalBtnDanger]}
                    onPress={confirmDelete}
                    accessibilityRole="button"
                    accessibilityLabel={t("settings.delete.permanent_label")}
                  >
                    <Text style={styles.modalBtnDangerText}>
                      {t("settings.delete.permanent_cta")}
                    </Text>
                  </Pressable>
                </View>
                {deleteError && (
                  <Pressable
                    style={styles.modalFallback}
                    onPress={openMailtoFallback}
                    accessibilityRole="link"
                    accessibilityLabel={t("settings.delete.manual_label")}
                  >
                    <Text style={styles.modalFallbackText}>
                      {t("settings.delete.manual_body")}
                    </Text>
                  </Pressable>
                )}
              </>
            )}

            {deleteStep === "deleting" && (
              <View style={styles.modalDeleting}>
                <ActivityIndicator size="large" color={tokens.brand.primary} />
                <Text style={styles.modalBody}>{t("settings.delete.deleting")}</Text>
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

function LanguagePicker({
  value,
  onChange,
}: {
  value: Locale;
  onChange: (value: Locale) => void;
}) {
  const { t } = useTranslation();
  const options: Array<{ value: Locale; label: string }> = [
    { value: "tr", label: t("common.turkish") },
    { value: "en", label: t("common.english") },
  ];
  return (
    <View style={styles.themePickerRow}>
      <View style={styles.themePickerHeader}>
        <Text style={styles.rowIcon}>🌐</Text>
        <View style={styles.toggleText}>
          <Text style={styles.rowLabel}>{t("common.language")}</Text>
          <Text style={styles.rowSub}>{t("settings.language.description")}</Text>
        </View>
      </View>
      <View style={styles.themeSegment}>
        {options.map((option) => {
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
              accessibilityLabel={`${t("common.language")}: ${option.label}`}
              accessibilityState={{ selected }}
            >
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
        thumbColor={value ? tokens.brand.onPrimary : tokens.text.primary}
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
  const { t } = useTranslation();
  return (
    <View style={styles.themePickerRow}>
      <View style={styles.themePickerHeader}>
        <Text style={styles.rowIcon}>🎨</Text>
        <View style={styles.toggleText}>
          <Text style={styles.rowLabel}>{t("settings.theme.label")}</Text>
          <Text style={styles.rowSub}>{t("settings.theme.description")}</Text>
        </View>
      </View>
      <View style={styles.themeSegment}>
        {THEME_OPTIONS.map((option) => {
          const selected = option.value === value;
          const label = t(option.labelKey);
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
              accessibilityLabel={`${t("settings.theme.label")}: ${label}`}
              accessibilityState={{ selected }}
            >
              <Text style={styles.themeOptionIcon}>{option.icon}</Text>
              <Text
                style={[
                  styles.themeOptionText,
                  selected && styles.themeOptionTextSelected,
                ]}
              >
                {label}
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
const REMINDER_PRESETS: Array<{
  labelKey: string;
  hour: number;
  icon: string;
}> = [
  { labelKey: "settings.reminder.morning", hour: 9, icon: "☀️" },
  { labelKey: "settings.reminder.noon", hour: 13, icon: "☕" },
  { labelKey: "settings.reminder.evening", hour: 19, icon: "🌙" },
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
  const { t } = useTranslation();
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
          const label = t(p.labelKey);
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
              accessibilityLabel={t("settings.reminder.hour_label", {
                label,
                hour: String(p.hour),
              })}
              accessibilityState={{ selected: active }}
            >
              <Text style={styles.reminderChipIcon}>{p.icon}</Text>
              <Text
                style={[
                  styles.reminderChipLabel,
                  active && styles.reminderChipLabelActive,
                ]}
              >
                {label}
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
    color: tokens.semantic.warning,
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
    color: tokens.semantic.error,
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
    backgroundColor: tokens.semantic.error,
  },
  modalBtnDangerText: {
    color: tokens.semantic.onError,
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
