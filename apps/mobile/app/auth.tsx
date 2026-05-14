// Auth — sign in / sign up with email. Cyber-Electric Modern theme.

import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Button } from "../components/Button";
import {
  signInWithEmail,
  signUpWithEmail,
  sendPasswordReset,
} from "../lib/auth";
import { tokens } from "../theme";

type Mode = "signin" | "signup" | "forgot";

export default function Auth() {
  const router = useRouter();
  const [mode, setMode] = useState<Mode>("signup");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const submit = async () => {
    if (!email.trim()) {
      setError("Email gerekli.");
      return;
    }
    if (mode !== "forgot" && password.length < 6) {
      setError("Parola en az 6 karakter olmalı.");
      return;
    }
    setLoading(true);
    setError(null);
    try {
      if (mode === "forgot") {
        await sendPasswordReset(email.trim());
        setError(
          "Email'ine parola sıfırlama linki gönderdik. Linke tıkla, yeni parola belirle, sonra giriş yap.",
        );
        setMode("signin");
        return;
      }
      if (mode === "signup") {
        const result = await signUpWithEmail(email.trim(), password);
        if (!result.session) {
          // Email confirmation enabled in Supabase
          setError(
            "Email'ine doğrulama linki gönderdik. Linke tıkladıktan sonra tekrar giriş yap.",
          );
          setMode("signin");
          return;
        }
      } else {
        await signInWithEmail(email.trim(), password);
      }
      router.replace("/onboarding");
    } catch (e: any) {
      const msg = e?.message ?? "Bir şeyler ters gitti";
      // Friendlier Turkish messages for common errors
      if (msg.toLowerCase().includes("invalid login credentials")) {
        setError("Email veya parola yanlış.");
      } else if (msg.toLowerCase().includes("already registered")) {
        setError("Bu email zaten kayıtlı. Giriş yapmayı dene.");
      } else if (msg.toLowerCase().includes("email not confirmed")) {
        setError("Email doğrulanmadı. Inbox'ı kontrol et.");
      } else {
        setError(msg);
      }
    } finally {
      setLoading(false);
    }
  };

  const skipAuth = async () => {
    const onboarded = await AsyncStorage.getItem("lafla.onboarded");
    router.replace(onboarded === "true" ? "/feed" : "/onboarding");
  };

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar style="dark" />
      <KeyboardAvoidingView
        style={styles.flex}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <ScrollView
          contentContainerStyle={styles.scroll}
          keyboardShouldPersistTaps="handled"
        >
          <Pressable style={styles.skipBtn} onPress={skipAuth}>
            <Text style={styles.skipText}>Atla →</Text>
          </Pressable>
          <View style={styles.header}>
            <Text style={styles.wordmark}>Lafla</Text>
            <View style={styles.accentLine} />
            <Text style={styles.tagline}>
              {mode === "signup"
                ? "Yeni hesap aç"
                : mode === "forgot"
                ? "Parolanı sıfırla"
                : "Tekrar hoş geldin"}
            </Text>
          </View>

          <View style={styles.form}>
            <Text style={styles.label}>Email</Text>
            <TextInput
              style={styles.input}
              value={email}
              onChangeText={setEmail}
              placeholder="berk@example.com"
              placeholderTextColor={tokens.text.tertiary}
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
              autoComplete="email"
            />

            {mode !== "forgot" && (
              <>
                <Text style={styles.label}>Parola</Text>
                <TextInput
                  style={styles.input}
                  value={password}
                  onChangeText={setPassword}
                  placeholder="En az 6 karakter"
                  placeholderTextColor={tokens.text.tertiary}
                  secureTextEntry
                  autoComplete={
                    mode === "signup" ? "new-password" : "current-password"
                  }
                />
              </>
            )}

            {error ? <Text style={styles.error}>{error}</Text> : null}

            <View style={{ marginTop: tokens.spacing.md }}>
              <Button
                label={
                  loading
                    ? "..."
                    : mode === "signup"
                    ? "Hesap aç"
                    : mode === "forgot"
                    ? "Reset linki gönder"
                    : "Giriş yap"
                }
                onPress={submit}
                disabled={loading}
              />
            </View>

            {mode === "signin" && (
              <Pressable
                onPress={() => {
                  setError(null);
                  setMode("forgot");
                }}
                style={styles.forgotRow}
              >
                <Text style={styles.forgotText}>Parolamı unuttum</Text>
              </Pressable>
            )}

            {loading ? (
              <ActivityIndicator
                style={{ marginTop: tokens.spacing.sm }}
                color={tokens.brand.tertiary}
              />
            ) : null}

            {/* Apple Sign-In stubbed in current build; restore once credentials refreshed */}

            <Pressable
              onPress={() => {
                setError(null);
                setMode(
                  mode === "signup"
                    ? "signin"
                    : mode === "forgot"
                    ? "signin"
                    : "signup",
                );
              }}
              style={styles.switchRow}
            >
              <Text style={styles.switchText}>
                {mode === "signup"
                  ? "Hesabın var mı? "
                  : mode === "forgot"
                  ? "Vazgeç? "
                  : "Hesabın yok mu? "}
                <Text style={styles.switchLink}>
                  {mode === "signup"
                    ? "Giriş yap"
                    : mode === "forgot"
                    ? "Geri dön"
                    : "Kayıt ol"}
                </Text>
              </Text>
            </Pressable>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: tokens.bg.app },
  flex: { flex: 1 },
  scroll: {
    padding: tokens.spacing.md,
    paddingTop: tokens.spacing.xl,
  },
  header: {
    alignItems: "center",
    marginBottom: tokens.spacing.xl,
  },
  wordmark: {
    fontSize: 56,
    fontWeight: tokens.weight.black,
    color: tokens.text.primary,
    letterSpacing: -2,
  },
  accentLine: {
    width: 48,
    height: 2,
    backgroundColor: tokens.brand.primary,
    borderRadius: 1,
    marginTop: tokens.spacing.xs,
    marginBottom: tokens.spacing.sm,
  },
  tagline: {
    fontSize: 18,
    color: tokens.text.secondary,
    fontWeight: tokens.weight.medium,
  },
  form: {
    gap: tokens.spacing.xs,
  },
  label: {
    fontSize: 14,
    fontWeight: tokens.weight.medium,
    color: tokens.text.secondary,
    marginTop: tokens.spacing.md,
    marginBottom: 4,
  },
  input: {
    backgroundColor: tokens.bg.surfaceContainer,
    borderWidth: 1,
    borderColor: tokens.border.light,
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: 16,
    color: tokens.text.primary,
  },
  error: {
    color: "#d93025",
    fontSize: 14,
    marginTop: tokens.spacing.sm,
    fontWeight: tokens.weight.medium,
  },
  switchRow: {
    alignItems: "center",
    marginTop: tokens.spacing.lg,
  },
  switchText: {
    color: tokens.text.secondary,
    fontSize: 15,
  },
  switchLink: {
    color: tokens.brand.tertiary,
    fontWeight: tokens.weight.bold,
  },
  forgotRow: {
    alignItems: "center",
    marginTop: tokens.spacing.sm,
  },
  forgotText: {
    color: tokens.brand.tertiary,
    fontSize: 14,
    fontWeight: tokens.weight.medium,
  },
  skipBtn: {
    alignSelf: "flex-end",
    paddingHorizontal: 14,
    paddingVertical: 8,
    marginBottom: 4,
  },
  skipText: {
    color: tokens.text.secondary,
    fontSize: 14,
    fontWeight: tokens.weight.medium,
  },
});
