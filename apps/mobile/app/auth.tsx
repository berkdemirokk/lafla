// Auth — premium landing for email + Apple sign-in.
//
// Visual structure:
//   1. Skip (top-right "Atla →")           — quick exit to onboarding
//   2. Hero (wordmark + glow line + tagline) — Reanimated entrance
//   3. Segmented mode switcher (Giriş / Kayıt) — top of form, animated indicator
//      (forgot mode is reached via "Şifremi unuttum" link, not a top tab)
//   4. Form (email + password) with inline icon prefixes + focused pink glow
//   5. Error chip — red rounded chip with soft background, appears below form
//   6. Primary CTA (Devam et / Hesap aç / Reset linki gönder)
//   7. Apple Sign-In block — polished divider, prominent button, iCloud hint
//   8. Footer link — only "Şifremi unuttum" in signin, "Geri dön" in forgot
//
// Animation choices (Reanimated 3.17):
//   - Hero wordmark: opacity 0→1, translateY 12→0, 240ms easeOutCubic
//   - Accent glow line: scaleX 0→1, 280ms easeOutCubic, delay 140ms
//   - Tagline + subtitle: opacity 0→1, translateY 8→0, 220ms, delay 320ms
//   - Form: opacity 0→1, translateY 16→0, 320ms easeOutCubic, delay 440ms
//   - Mode indicator: spring translateX (damping 18, stiffness 220)
//   - Input focused border: opacity 0→1 of glowing pink ring, 160ms
//   - Press scale (CTA + Apple + skip): 0.97 with spring back
//   - Error chip: opacity + translateY entrance, 200ms
//
// Auth logic, AsyncStorage onboarded check, Apple success route, and the
// lib/auth.ts imports are untouched — this is pure presentation.

import { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
  KeyboardAvoidingView,
  Linking,
  Platform,
  ScrollView,
  type LayoutChangeEvent,
} from "react-native";
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withSequence,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import { ThemedStatusBar } from "../components/ThemedStatusBar";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AppleSignInButton } from "../components/AppleSignInButton";
import {
  signInWithEmail,
  signUpWithEmail,
  sendPasswordReset,
  getCurrentProfile,
} from "../lib/auth";
import { isSupabaseConfigured } from "../lib/supabase";
import { useTranslation } from "../lib/i18n";
import { tokens } from "../theme";

// 2026-05-25 — Routing helper: sign-in sonrası returning user'ı /today'e,
// yeni user'ı /onboarding'e yönlendir.
//
// SORUN: önceki versiyon sign-in başarılı olunca koşulsuz /onboarding'e
// gidiyordu. Returning user'lar (zaten profili olan) tekrar baştan
// onboarding görüyordu → "girdim ama hala başlangıçta" hissi.
//
// MANTIK:
//   1. Sunucu profili check (onboarding_completed_at) — auth completed
//   2. Local AsyncStorage check (lafla.onboarded === "true") — offline-first
//   3. İkisi de değilse → /onboarding (gerçekten yeni kullanıcı)
async function decidePostAuthRoute(): Promise<"/today" | "/onboarding"> {
  // 2026-05-25 — Server profile authoritative. Local "lafla.onboarded"
  // başka hesaptan kalan stale state olabilir; signed-in user için
  // sadece offline-fallback olarak kullan.
  try {
    const profile = await getCurrentProfile();
    return profile?.onboarding_completed_at ? "/today" : "/onboarding";
  } catch {
    // Network fail — offline fallback.
  }
  try {
    const localOnboarded = await AsyncStorage.getItem("lafla.onboarded");
    if (localOnboarded === "true") return "/today";
  } catch {
    // ignore
  }
  return "/onboarding";
}

type Mode = "signin" | "signup" | "forgot";

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

// ============================================================
// PressScale — wraps children with a small press-in scale spring.
// Used for CTA + Apple button + skip button. Keeps the press interaction
// consistent and avoids re-implementing scale logic three times.
// ============================================================
function PressScale({
  onPress,
  disabled,
  style,
  accessibilityLabel,
  accessibilityRole,
  hitSlop,
  children,
}: {
  onPress: () => void;
  disabled?: boolean;
  style?: any;
  accessibilityLabel?: string;
  accessibilityRole?: "button" | "link";
  hitSlop?: number;
  children: React.ReactNode;
}) {
  const scale = useSharedValue(1);
  const animStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));
  return (
    <AnimatedPressable
      onPress={onPress}
      onPressIn={() => {
        scale.value = withTiming(0.97, {
          duration: 90,
          easing: Easing.out(Easing.quad),
        });
      }}
      onPressOut={() => {
        scale.value = withSpring(1, { damping: 14, stiffness: 240 });
      }}
      disabled={disabled}
      style={[style, animStyle, disabled && { opacity: 0.5 }]}
      accessibilityRole={accessibilityRole ?? "button"}
      accessibilityLabel={accessibilityLabel}
      hitSlop={hitSlop}
    >
      {children}
    </AnimatedPressable>
  );
}

// ============================================================
// GlowInput — text input with leading icon prefix and a focused
// pink glow ring. The ring fades in on focus via Reanimated.
// ============================================================
function GlowInput({
  icon,
  value,
  onChangeText,
  placeholder,
  secureTextEntry,
  keyboardType,
  autoComplete,
  accessibilityLabel,
  autoCapitalize,
  autoCorrect,
  onSubmitEditing,
  returnKeyType,
}: {
  icon: string;
  value: string;
  onChangeText: (v: string) => void;
  placeholder: string;
  secureTextEntry?: boolean;
  keyboardType?: "default" | "email-address";
  autoComplete?: "email" | "new-password" | "current-password";
  accessibilityLabel: string;
  autoCapitalize?: "none" | "sentences";
  autoCorrect?: boolean;
  onSubmitEditing?: () => void;
  returnKeyType?: "next" | "done" | "go";
}) {
  const focusProgress = useSharedValue(0);
  const ringStyle = useAnimatedStyle(() => ({
    opacity: focusProgress.value,
  }));
  const borderStyle = useAnimatedStyle(() => ({
    borderColor:
      focusProgress.value > 0.5
        ? tokens.brand.primary
        : tokens.border.outlineVariant,
  }));

  return (
    <View style={inputStyles.wrap}>
      {/* Outer glow ring — fades in on focus */}
      <Animated.View
        pointerEvents="none"
        style={[inputStyles.glowRing, ringStyle]}
      />
      <Animated.View style={[inputStyles.inputRow, borderStyle]}>
        <Text style={inputStyles.icon}>{icon}</Text>
        <TextInput
          style={inputStyles.input}
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor={tokens.text.tertiary}
          secureTextEntry={secureTextEntry}
          keyboardType={keyboardType}
          autoComplete={autoComplete}
          autoCapitalize={autoCapitalize ?? "none"}
          autoCorrect={autoCorrect ?? false}
          accessibilityLabel={accessibilityLabel}
          onFocus={() => {
            focusProgress.value = withTiming(1, {
              duration: 160,
              easing: Easing.out(Easing.cubic),
            });
          }}
          onBlur={() => {
            focusProgress.value = withTiming(0, {
              duration: 160,
              easing: Easing.out(Easing.cubic),
            });
          }}
          onSubmitEditing={onSubmitEditing}
          returnKeyType={returnKeyType}
        />
      </Animated.View>
    </View>
  );
}

// ============================================================
// ModeTabs — segmented control for signin / signup with a sliding
// pink pill behind the active label. Width is measured on layout so
// the indicator animates between exact half-widths.
// ============================================================
function ModeTabs({
  mode,
  onChange,
  labels,
}: {
  mode: Mode;
  onChange: (m: Mode) => void;
  labels: {
    signin: string;
    signup: string;
    signinAccessibility: string;
    signupAccessibility: string;
  };
}) {
  const [width, setWidth] = useState(0);
  const indicatorX = useSharedValue(0);
  // Only "signin" / "signup" live in the tabs; "forgot" keeps the signin tab lit.
  const activeIndex = mode === "signup" ? 1 : 0;

  useEffect(() => {
    if (width === 0) return;
    const target = activeIndex * (width / 2);
    indicatorX.value = withSpring(target, {
      damping: 18,
      stiffness: 220,
      mass: 0.6,
    });
  }, [activeIndex, width, indicatorX]);

  const indicatorStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: indicatorX.value }],
  }));

  const onLayout = (e: LayoutChangeEvent) => {
    setWidth(e.nativeEvent.layout.width);
  };

  return (
    <View style={tabStyles.wrap} onLayout={onLayout}>
      {width > 0 && (
        <Animated.View
          style={[
            tabStyles.indicator,
            { width: width / 2 - 4 },
            indicatorStyle,
          ]}
          pointerEvents="none"
        />
      )}
      <Pressable
        style={tabStyles.tab}
        onPress={() => onChange("signin")}
        accessibilityRole="button"
        accessibilityLabel={labels.signinAccessibility}
        hitSlop={8}
      >
        <Text
          style={[
            tabStyles.label,
            mode !== "signup" && tabStyles.labelActive,
          ]}
        >
          {labels.signin}
        </Text>
      </Pressable>
      <Pressable
        style={tabStyles.tab}
        onPress={() => onChange("signup")}
        accessibilityRole="button"
        accessibilityLabel={labels.signupAccessibility}
        hitSlop={8}
      >
        <Text
          style={[
            tabStyles.label,
            mode === "signup" && tabStyles.labelActive,
          ]}
        >
          {labels.signup}
        </Text>
      </Pressable>
    </View>
  );
}

// ============================================================
// ErrorChip — animated red chip below form. Distinguishes between
// "destructive" errors (red) and "info" toasts (e.g. confirmation
// email sent — uses brand pink soft).
// ============================================================
function ErrorChip({
  text,
  tone,
}: {
  text: string;
  tone: "error" | "info";
}) {
  const opacity = useSharedValue(0);
  const translateY = useSharedValue(6);

  useEffect(() => {
    opacity.value = withTiming(1, {
      duration: 200,
      easing: Easing.out(Easing.cubic),
    });
    translateY.value = withTiming(0, {
      duration: 200,
      easing: Easing.out(Easing.cubic),
    });
  }, [text, opacity, translateY]);

  const animStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
    transform: [{ translateY: translateY.value }],
  }));

  return (
    <Animated.View
      style={[
        chipStyles.wrap,
        tone === "info" ? chipStyles.wrapInfo : chipStyles.wrapError,
        animStyle,
      ]}
      accessibilityLiveRegion="polite"
      accessibilityRole="alert"
    >
      <Text
        style={[
          chipStyles.text,
          tone === "info" ? chipStyles.textInfo : chipStyles.textError,
        ]}
      >
        {text}
      </Text>
    </Animated.View>
  );
}

// ============================================================
// AUTH SCREEN
// ============================================================

export default function Auth() {
  const router = useRouter();
  const { t } = useTranslation();
  const [mode, setMode] = useState<Mode>("signup");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [errorTone, setErrorTone] = useState<"error" | "info">("error");
  const passwordRef = useRef<TextInput>(null);

  // -------- Entrance choreography --------
  const wordmarkOpacity = useSharedValue(0);
  const wordmarkTranslate = useSharedValue(12);
  const accentScale = useSharedValue(0);
  const taglineOpacity = useSharedValue(0);
  const taglineTranslate = useSharedValue(8);
  const formOpacity = useSharedValue(0);
  const formTranslate = useSharedValue(16);

  useEffect(() => {
    wordmarkOpacity.value = withTiming(1, {
      duration: 240,
      easing: Easing.out(Easing.cubic),
    });
    wordmarkTranslate.value = withTiming(0, {
      duration: 240,
      easing: Easing.out(Easing.cubic),
    });
    accentScale.value = withDelay(
      140,
      withTiming(1, {
        duration: 280,
        easing: Easing.out(Easing.cubic),
      }),
    );
    taglineOpacity.value = withDelay(
      320,
      withTiming(1, { duration: 220, easing: Easing.out(Easing.cubic) }),
    );
    taglineTranslate.value = withDelay(
      320,
      withTiming(0, { duration: 220, easing: Easing.out(Easing.cubic) }),
    );
    formOpacity.value = withDelay(
      440,
      withTiming(1, { duration: 320, easing: Easing.out(Easing.cubic) }),
    );
    formTranslate.value = withDelay(
      440,
      withTiming(0, { duration: 320, easing: Easing.out(Easing.cubic) }),
    );
  }, [
    wordmarkOpacity,
    wordmarkTranslate,
    accentScale,
    taglineOpacity,
    taglineTranslate,
    formOpacity,
    formTranslate,
  ]);

  const wordmarkStyle = useAnimatedStyle(() => ({
    opacity: wordmarkOpacity.value,
    transform: [{ translateY: wordmarkTranslate.value }],
  }));
  const accentStyle = useAnimatedStyle(() => ({
    transform: [{ scaleX: accentScale.value }],
  }));
  const taglineStyle = useAnimatedStyle(() => ({
    opacity: taglineOpacity.value,
    transform: [{ translateY: taglineTranslate.value }],
  }));
  const formStyle = useAnimatedStyle(() => ({
    opacity: formOpacity.value,
    transform: [{ translateY: formTranslate.value }],
  }));

  // -------- Mode-change subtle pulse on the form --------
  // When the user switches tabs the form crossfades a touch — keeps the
  // surface from feeling static.
  const formPulse = useSharedValue(1);
  useEffect(() => {
    formPulse.value = withSequence(
      withTiming(0.96, { duration: 90, easing: Easing.out(Easing.quad) }),
      withTiming(1, { duration: 180, easing: Easing.out(Easing.cubic) }),
    );
  }, [mode, formPulse]);
  const formPulseStyle = useAnimatedStyle(() => ({
    opacity: formPulse.value,
  }));

  // -------- Submit / business logic (preserved) --------
  const submit = async () => {
    // 2026-05-25 (B-AUTH-7) — Supabase config eksikse her submit "Bağlantı
    // problemi" mesajıyla biter; gerçek sebep env eksikliği. User'a
    // anlamlı sinyal ver, EAS Secret eksikliğini hızlı yakalamak için.
    if (!isSupabaseConfigured) {
      setErrorTone("error");
      setError(t("auth.error_config"));
      return;
    }
    if (!email.trim()) {
      setErrorTone("error");
      setError(t("auth.error_email_required"));
      return;
    }
    if (mode !== "forgot" && password.length < 6) {
      setErrorTone("error");
      setError(t("auth.error_password_short"));
      return;
    }
    setLoading(true);
    setError(null);
    try {
      if (mode === "forgot") {
        await sendPasswordReset(email.trim());
        setErrorTone("info");
        setError(t("auth.info_reset_sent"));
        setMode("signin");
        return;
      }
      let isNewSignup = false;
      if (mode === "signup") {
        const result = await signUpWithEmail(email.trim(), password);
        if (!result.session) {
          // Email confirmation enabled in Supabase
          setErrorTone("info");
          setError(t("auth.info_verification_sent"));
          setMode("signin");
          return;
        }
        isNewSignup = true;
      } else {
        await signInWithEmail(email.trim(), password);
      }
      // 2026-05-25 — Returning user routing fix. Yeni signup → her zaman
      // /onboarding. Sign-in → profile check + local check → /today veya
      // /onboarding. Bu olmadan zaten onboarded kullanıcılar tekrar baştan
      // başlatılıyordu.
      const route = isNewSignup
        ? "/onboarding"
        : await decidePostAuthRoute();
      router.replace(route as never);
    } catch (e: any) {
      const msg = e?.message ?? t("auth.error_generic");
      setErrorTone("error");
      // 2026-05-25 — Diagnostic için tam Supabase error'ını console'a düş.
      // Kullanıcıya friendly Türkçe çevirim, ama TestFlight log'undan
      // debug için orijinal hatayı görmek lazım.
      if (__DEV__) {
        // eslint-disable-next-line no-console
        console.warn("[auth] submit failed:", e);
      }
      // Friendlier Turkish messages for common errors
      if (msg.toLowerCase().includes("invalid login credentials")) {
        setError(t("auth.error_invalid_credentials"));
      } else if (msg.toLowerCase().includes("already registered")) {
        setError(t("auth.error_already_registered"));
      } else if (msg.toLowerCase().includes("email not confirmed")) {
        setError(t("auth.error_email_not_confirmed"));
      } else if (msg.toLowerCase().includes("network") || msg.toLowerCase().includes("fetch")) {
        setError(t("auth.error_network"));
      } else {
        setError(msg);
      }
    } finally {
      setLoading(false);
    }
  };

  // 2026-05-25 — Apple Sign-In success → returning user'ı /today'e yönlendir.
  // Önceki versiyon hep /onboarding'e gidiyordu.
  const handleAppleSuccess = async () => {
    const route = await decidePostAuthRoute();
    router.replace(route as never);
  };

  const skipAuth = async () => {
    // 2026-05-25 — "Atla" anonymous mode'a geçiş. Stale flag bypass'ini
    // önlemek için onboarded flag + interests check'i ikisini de yap.
    // 2026-05-26 — interests boş array ile onboarding atlandıysa kullanıcı
    // ASLA /today'e ulaşamıyordu (sonsuz onboarding loop). Şimdi: onboarded
    // flag yeterli; interests boş array kabul edilebilir (skip path).
    const onboarded = await AsyncStorage.getItem("lafla.onboarded").catch(() => null);
    router.replace((onboarded === "true" ? "/today" : "/onboarding") as never);
  };

  const switchMode = (next: Mode) => {
    setError(null);
    setMode(next);
  };

  // -------- Copy that varies by mode --------
  const ctaLabel =
    mode === "signup"
      ? t("auth.cta_signup")
      : mode === "forgot"
        ? t("auth.cta_forgot")
        : t("auth.cta_signin");

  const subtitle =
    mode === "forgot"
      ? t("auth.subtitle_forgot")
      : t("auth.subtitle_default");

  return (
    <SafeAreaView style={styles.safe}>
      <ThemedStatusBar />
      <KeyboardAvoidingView
        style={styles.flex}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <ScrollView
          contentContainerStyle={styles.scroll}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          {/* Skip — top right */}
          <PressScale
            style={styles.skipBtn}
            onPress={skipAuth}
            hitSlop={12}
            accessibilityRole="button"
            accessibilityLabel={t("auth.skip_label")}
          >
            <Text style={styles.skipText}>{t("auth.skip")}</Text>
          </PressScale>

          {/* Hero */}
          <View style={styles.hero}>
            <Animated.Text
              style={[styles.wordmark, wordmarkStyle]}
              accessibilityRole="header"
            >
              Lafla
            </Animated.Text>
            <Animated.View style={[styles.accentLine, accentStyle]} />
            <Animated.Text style={[styles.subtitle, taglineStyle]}>
              {subtitle}
            </Animated.Text>
          </View>

          {/* Form block */}
          <Animated.View style={[styles.formCard, formStyle, formPulseStyle]}>
            {/* Mode tabs — hidden in forgot mode (the link below acts as nav) */}
            {mode !== "forgot" ? (
              <ModeTabs
                mode={mode}
                onChange={switchMode}
                labels={{
                  signin: t("auth.signin_tab"),
                  signup: t("auth.signup_tab"),
                  signinAccessibility: t("auth.signin_tab_label"),
                  signupAccessibility: t("auth.signup_tab_label"),
                }}
              />
            ) : (
              <View style={styles.forgotHeader}>
                <Text style={styles.forgotHeaderTitle}>
                  {t("auth.forgot_header")}
                </Text>
              </View>
            )}

            <View style={styles.inputs}>
              <GlowInput
                icon="✉"
                value={email}
                onChangeText={setEmail}
                placeholder="email@adresin.com"
                keyboardType="email-address"
                autoComplete="email"
                accessibilityLabel={t("auth.email_label")}
                onSubmitEditing={() => {
                  if (mode === "forgot") {
                    void submit();
                  } else {
                    passwordRef.current?.focus();
                  }
                }}
                returnKeyType={mode === "forgot" ? "go" : "next"}
              />

              {mode !== "forgot" && (
                <GlowInputWithRef
                  inputRef={passwordRef}
                  icon="🔒"
                  value={password}
                  onChangeText={setPassword}
                  placeholder={t("auth.password_placeholder")}
                  secureTextEntry
                  autoComplete={
                    mode === "signup" ? "new-password" : "current-password"
                  }
                  accessibilityLabel={t("auth.password_label")}
                  onSubmitEditing={submit}
                  returnKeyType="go"
                />
              )}
            </View>

            {error ? <ErrorChip text={error} tone={errorTone} /> : null}

            {/* Primary CTA */}
            <PressScale
              style={[styles.cta, loading && styles.ctaLoading]}
              onPress={submit}
              disabled={loading}
              accessibilityLabel={ctaLabel}
            >
              <Text style={styles.ctaLabel}>{loading ? "..." : ctaLabel}</Text>
            </PressScale>

            {/* 2026-05-26 — Apple 5.1.1: hesap açma akışında ToS + Privacy
                rıza satırı görünür olmalı. Welcome ekranındaki block aynısı
                buraya da getirildi; signup mode'da görünür, signin'de değil. */}
            {mode === "signup" && (
              <View style={styles.signupTermsBlock}>
                <Text style={styles.signupTermsPrefix}>
                  {t("auth.terms_prefix")}
                </Text>
                <View style={styles.signupTermsRow}>
                  <Pressable
                    onPress={() =>
                      Linking.openURL(
                        "https://berkdemirokk.github.io/lafla/terms.html",
                      )
                    }
                    hitSlop={6}
                    accessibilityRole="link"
                    accessibilityLabel={t("auth.terms")}
                  >
                    <Text style={styles.signupTermsLink}>
                      {t("auth.terms")}
                    </Text>
                  </Pressable>
                  <Text style={styles.signupTermsDot}> · </Text>
                  <Pressable
                    onPress={() =>
                      Linking.openURL(
                        "https://berkdemirokk.github.io/lafla/privacy.html",
                      )
                    }
                    hitSlop={6}
                    accessibilityRole="link"
                    accessibilityLabel={t("auth.privacy")}
                  >
                    <Text style={styles.signupTermsLink}>
                      {t("auth.privacy")}
                    </Text>
                  </Pressable>
                </View>
              </View>
            )}

            {/* Forgot password — only in signin */}
            {mode === "signin" && (
              <Pressable
                onPress={() => switchMode("forgot")}
                style={styles.forgotLink}
                hitSlop={10}
                accessibilityRole="button"
                accessibilityLabel={t("auth.forgot_link_label")}
              >
                <Text style={styles.forgotLinkText}>
                  {t("auth.forgot_link")}
                </Text>
              </Pressable>
            )}

            {/* Forgot — back to signin */}
            {mode === "forgot" && (
              <Pressable
                onPress={() => switchMode("signin")}
                style={styles.forgotLink}
                hitSlop={10}
                accessibilityRole="button"
                accessibilityLabel={t("auth.back_to_signin_label")}
              >
                <Text style={styles.forgotLinkText}>
                  {t("auth.back_to_signin")}
                </Text>
              </Pressable>
            )}
          </Animated.View>

          {/* Apple Sign-In block — iOS only, the button hides itself
              on unsupported devices so the divider + hint disappear with it. */}
          {mode !== "forgot" && Platform.OS === "ios" ? (
            <View style={styles.appleBlock}>
              <View style={styles.divider}>
                <View style={styles.dividerLine} />
                <Text style={styles.dividerText}>{t("auth.apple_divider")}</Text>
                <View style={styles.dividerLine} />
              </View>
              <AppleSignInButton
                onSuccess={() => void handleAppleSuccess()}
                onError={(msg) => {
                  setErrorTone("error");
                  setError(msg);
                }}
              />
              <Text style={styles.appleHint}>{t("auth.apple_hint")}</Text>
            </View>
          ) : null}
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

// ============================================================
// GlowInputWithRef — same as GlowInput but forwards a TextInput ref so
// the email field can focus the password field on submit. Kept separate
// to avoid forwardRef boilerplate in the common case.
// ============================================================
function GlowInputWithRef({
  inputRef,
  icon,
  value,
  onChangeText,
  placeholder,
  secureTextEntry,
  keyboardType,
  autoComplete,
  accessibilityLabel,
  autoCapitalize,
  autoCorrect,
  onSubmitEditing,
  returnKeyType,
}: {
  inputRef: React.RefObject<TextInput | null>;
  icon: string;
  value: string;
  onChangeText: (v: string) => void;
  placeholder: string;
  secureTextEntry?: boolean;
  keyboardType?: "default" | "email-address";
  autoComplete?: "email" | "new-password" | "current-password";
  accessibilityLabel: string;
  autoCapitalize?: "none" | "sentences";
  autoCorrect?: boolean;
  onSubmitEditing?: () => void;
  returnKeyType?: "next" | "done" | "go";
}) {
  const focusProgress = useSharedValue(0);
  const ringStyle = useAnimatedStyle(() => ({
    opacity: focusProgress.value,
  }));
  const borderStyle = useAnimatedStyle(() => ({
    borderColor:
      focusProgress.value > 0.5
        ? tokens.brand.primary
        : tokens.border.outlineVariant,
  }));

  return (
    <View style={inputStyles.wrap}>
      <Animated.View
        pointerEvents="none"
        style={[inputStyles.glowRing, ringStyle]}
      />
      <Animated.View style={[inputStyles.inputRow, borderStyle]}>
        <Text style={inputStyles.icon}>{icon}</Text>
        <TextInput
          ref={inputRef}
          style={inputStyles.input}
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor={tokens.text.tertiary}
          secureTextEntry={secureTextEntry}
          keyboardType={keyboardType}
          autoComplete={autoComplete}
          autoCapitalize={autoCapitalize ?? "none"}
          autoCorrect={autoCorrect ?? false}
          accessibilityLabel={accessibilityLabel}
          onFocus={() => {
            focusProgress.value = withTiming(1, {
              duration: 160,
              easing: Easing.out(Easing.cubic),
            });
          }}
          onBlur={() => {
            focusProgress.value = withTiming(0, {
              duration: 160,
              easing: Easing.out(Easing.cubic),
            });
          }}
          onSubmitEditing={onSubmitEditing}
          returnKeyType={returnKeyType}
        />
      </Animated.View>
    </View>
  );
}

// ============================================================
// STYLES
// ============================================================

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: tokens.bg.app },
  flex: { flex: 1 },
  scroll: {
    paddingHorizontal: tokens.spacing.md,
    paddingTop: tokens.spacing.sm,
    paddingBottom: tokens.spacing.lg,
  },

  // Skip
  skipBtn: {
    alignSelf: "flex-end",
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: tokens.radius.full,
    backgroundColor: tokens.bg.surfaceContainerLow,
    borderWidth: 1,
    borderColor: tokens.border.outlineVariant,
  },
  skipText: {
    color: tokens.text.secondary,
    fontSize: 13,
    fontWeight: tokens.weight.semibold,
    letterSpacing: 0.2,
  },

  // Hero
  hero: {
    alignItems: "center",
    marginTop: tokens.spacing.md,
    marginBottom: tokens.spacing.md,
  },
  // 2026-05-24 — Wordmark Space Grotesk display font'una alındı (önceden
  // Inter sans'tı; brand wordmark için yanlış font). letterSpacing -2.4 →
  // -1.4 — SG Bold'da -2.4 aşırı sıkıştırıyordu, karakterler birbirine
  // bindiriyordu.
  wordmark: {
    fontSize: 64,
    fontWeight: tokens.weight.black,
    color: tokens.text.primary,
    letterSpacing: -1.4,
    fontFamily: tokens.font.display,
    textAlign: "center",
  },
  accentLine: {
    width: 72,
    height: 3,
    backgroundColor: tokens.brand.primary,
    borderRadius: 2,
    marginTop: 10,
    marginBottom: 14,
    // Pink glow halo
    shadowColor: tokens.brand.primary,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.85,
    shadowRadius: 16,
    elevation: 8,
  },
  subtitle: {
    fontSize: 16,
    color: tokens.text.secondary,
    fontWeight: tokens.weight.medium,
    textAlign: "center",
    letterSpacing: 0.1,
    maxWidth: 320,
    lineHeight: 22,
  },

  // Form card — subtle elevated surface so the form feels deliberate
  formCard: {
    backgroundColor: tokens.bg.surfaceContainerLow,
    borderRadius: tokens.radius.lg,
    borderWidth: 1,
    borderColor: tokens.border.outlineVariant,
    padding: tokens.spacing.md,
    marginTop: tokens.spacing.sm,
  },
  forgotHeader: {
    alignItems: "center",
    marginBottom: tokens.spacing.sm,
  },
  forgotHeaderTitle: {
    fontSize: 18,
    fontWeight: tokens.weight.bold,
    color: tokens.text.primary,
    fontFamily: tokens.font.display,
    letterSpacing: -0.3,
  },
  inputs: {
    gap: tokens.spacing.sm,
    marginTop: tokens.spacing.sm,
  },

  // CTA
  cta: {
    marginTop: tokens.spacing.md,
    backgroundColor: tokens.brand.primary,
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: tokens.radius.full,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: tokens.brand.primary,
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.35,
    shadowRadius: 14,
    elevation: 6,
  },
  ctaLoading: {
    opacity: 0.7,
  },
  ctaLabel: {
    color: tokens.text.onPrimary,
    fontSize: 16,
    fontWeight: tokens.weight.extrabold,
    letterSpacing: 0.3,
  },

  // Forgot link
  forgotLink: {
    alignSelf: "center",
    marginTop: tokens.spacing.sm,
    paddingVertical: 6,
    paddingHorizontal: 8,
  },
  forgotLinkText: {
    color: tokens.brand.tertiary,
    fontSize: 14,
    fontWeight: tokens.weight.semibold,
    letterSpacing: 0.1,
  },

  // Apple block — 2026-05-24 polish.
  // Divider sade kalsın diye altındaki ekstra marginBottom: 2 drop;
  // gap: tokens.spacing.sm zaten dengeli boşluk veriyor. Divider çizgisi
  // hairline (0.5 → 0.7 effective on retina); dividerText'in letterSpacing
  // 2 → 2.4 (daha air). Apple hint italic + display font 11pt — premium
  // sade okuma.
  appleBlock: {
    marginTop: tokens.spacing.md,
    gap: tokens.spacing.base,
  },
  divider: {
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: tokens.border.outlineVariant,
    opacity: 0.8,
  },
  dividerText: {
    color: tokens.text.tertiary,
    fontSize: 10,
    fontWeight: tokens.weight.extrabold,
    letterSpacing: 2.4,
  },
  appleHint: {
    color: tokens.text.tertiary,
    fontSize: 11,
    fontStyle: "italic",
    textAlign: "center",
    letterSpacing: 0.3,
    marginTop: 2,
  },

  // 2026-05-26 — Signup ToS + Privacy ack (Apple 5.1.1).
  signupTermsBlock: {
    alignItems: "center",
    marginTop: 14,
    gap: 4,
  },
  signupTermsPrefix: {
    fontSize: 11,
    color: tokens.text.tertiary,
    textAlign: "center",
    letterSpacing: 0.2,
  },
  signupTermsRow: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  signupTermsLink: {
    fontSize: 12,
    color: tokens.brand.tertiary,
    textDecorationLine: "underline",
    fontWeight: tokens.weight.semibold,
    letterSpacing: 0.2,
  },
  signupTermsDot: {
    fontSize: 12,
    color: tokens.text.tertiary,
  },
});

const tabStyles = StyleSheet.create({
  wrap: {
    flexDirection: "row",
    backgroundColor: tokens.bg.surfaceContainerHigh,
    borderRadius: tokens.radius.full,
    padding: 4,
    position: "relative",
  },
  indicator: {
    position: "absolute",
    top: 4,
    bottom: 4,
    left: 4,
    backgroundColor: tokens.brand.primary,
    borderRadius: tokens.radius.full,
    shadowColor: tokens.brand.primary,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 8,
    elevation: 4,
  },
  tab: {
    flex: 1,
    paddingVertical: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  label: {
    fontSize: 14,
    fontWeight: tokens.weight.semibold,
    color: tokens.text.tertiary,
    letterSpacing: 0.2,
  },
  labelActive: {
    color: tokens.text.onPrimary,
    fontWeight: tokens.weight.extrabold,
  },
});

const inputStyles = StyleSheet.create({
  wrap: {
    position: "relative",
  },
  // The outer glowing ring — sits *behind* the input, only visible when focused.
  glowRing: {
    position: "absolute",
    top: -3,
    left: -3,
    right: -3,
    bottom: -3,
    borderRadius: tokens.radius.base + 3,
    borderWidth: 2,
    borderColor: tokens.brand.primarySoft,
    shadowColor: tokens.brand.primary,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.6,
    shadowRadius: 12,
    elevation: 5,
  },
  inputRow: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: tokens.bg.surfaceContainer,
    borderWidth: 1,
    borderColor: tokens.border.outlineVariant,
    borderRadius: tokens.radius.base,
    paddingHorizontal: 14,
    paddingVertical: Platform.OS === "ios" ? 14 : 6,
  },
  icon: {
    fontSize: 16,
    marginRight: 10,
    opacity: 0.85,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: tokens.text.primary,
    fontFamily: tokens.font.sans,
    paddingVertical: Platform.OS === "ios" ? 0 : 6,
  },
});

const chipStyles = StyleSheet.create({
  wrap: {
    marginTop: tokens.spacing.sm,
    borderRadius: tokens.radius.sm,
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderWidth: 1,
  },
  wrapError: {
    backgroundColor: tokens.semantic.errorContainer,
    borderColor: "rgba(255, 77, 109, 0.35)",
  },
  wrapInfo: {
    backgroundColor: tokens.brand.primarySoft,
    borderColor: "rgba(255, 6, 122, 0.35)",
  },
  text: {
    fontSize: 13,
    fontWeight: tokens.weight.medium,
    lineHeight: 18,
  },
  textError: {
    color: tokens.semantic.onErrorContainer,
  },
  textInfo: {
    color: "#ffb7d8",
  },
});
