import { useEffect, useState } from "react";
import { KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import * as Linking from "expo-linking";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

import { Button } from "../components/Button";
import { ThemedStatusBar } from "../components/ThemedStatusBar";
import { recoveryTokensFromUrl, validateNewPassword } from "../lib/auth-recovery";
import { useTranslation } from "../lib/i18n";
import { supabase } from "../lib/supabase";
import { tokens } from "../theme";

export default function ResetPasswordScreen() {
  const router = useRouter();
  const { t } = useTranslation();
  const [password, setPassword] = useState("");
  const [confirmation, setConfirmation] = useState("");
  const [linkReady, setLinkReady] = useState(false);
  const [linkError, setLinkError] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let active = true;
    const acceptUrl = async (url: string | null) => {
      if (!active || !url) return;
      const recovery = recoveryTokensFromUrl(url);
      if (!recovery) {
        setLinkError(true);
        return;
      }
      const { error: sessionError } = await supabase.auth.setSession({
        access_token: recovery.accessToken,
        refresh_token: recovery.refreshToken,
      });
      if (!active) return;
      setLinkError(Boolean(sessionError));
      setLinkReady(!sessionError);
    };
    void Linking.getInitialURL().then(acceptUrl).catch(() => setLinkError(true));
    const subscription = Linking.addEventListener("url", ({ url }) => {
      void acceptUrl(url);
    });
    return () => {
      active = false;
      subscription.remove();
    };
  }, []);

  const submit = async () => {
    if (!linkReady || saving) return;
    const validation = validateNewPassword(password, confirmation);
    if (validation) {
      setError(t(`auth.recovery.${validation}`));
      return;
    }
    setSaving(true);
    setError(null);
    const { error: updateError } = await supabase.auth.updateUser({ password });
    setSaving(false);
    if (updateError) {
      setError(t("auth.recovery.update_failed"));
      return;
    }
    router.replace("/today" as never);
  };

  return (
    <SafeAreaView style={styles.safe} edges={["top", "bottom"]}>
      <ThemedStatusBar />
      <KeyboardAvoidingView
        style={styles.flex}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <ScrollView
          contentContainerStyle={styles.body}
          contentInsetAdjustmentBehavior="automatic"
          keyboardShouldPersistTaps="handled"
        >
        <Text style={styles.title}>{t("auth.recovery.title")}</Text>
        <Text style={styles.subtitle}>{t("auth.recovery.subtitle")}</Text>
        {linkError ? (
          <View style={styles.errorBox} accessibilityLiveRegion="assertive">
            <Text selectable style={styles.errorText}>{t("auth.recovery.invalid_link")}</Text>
            <Button label={t("auth.recovery.back")} onPress={() => router.replace("/auth" as never)} />
          </View>
        ) : (
          <>
            <TextInput
              style={styles.input}
              value={password}
              onChangeText={setPassword}
              secureTextEntry
              textContentType="newPassword"
              autoCapitalize="none"
              placeholder={t("auth.recovery.password")}
              placeholderTextColor={tokens.text.tertiary}
              accessibilityLabel={t("auth.recovery.password")}
              editable={linkReady && !saving}
            />
            <TextInput
              style={styles.input}
              value={confirmation}
              onChangeText={setConfirmation}
              secureTextEntry
              textContentType="newPassword"
              autoCapitalize="none"
              placeholder={t("auth.recovery.confirm")}
              placeholderTextColor={tokens.text.tertiary}
              accessibilityLabel={t("auth.recovery.confirm")}
              editable={linkReady && !saving}
            />
            {error && <Text selectable style={styles.errorText} accessibilityRole="alert" accessibilityLiveRegion="assertive">{error}</Text>}
            <Button
              label={saving ? t("common.loading") : t("auth.recovery.save")}
              onPress={() => void submit()}
              disabled={!linkReady || saving || !password || !confirmation}
            />
            {!linkReady && <Text selectable style={styles.status}>{t("auth.recovery.verifying")}</Text>}
          </>
        )}
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: tokens.bg.app },
  flex: { flex: 1 },
  body: { flexGrow: 1, justifyContent: "center", padding: 24, gap: 14 },
  title: { color: tokens.text.primary, fontSize: 28, fontWeight: tokens.weight.black },
  subtitle: { color: tokens.text.secondary, fontSize: 15, lineHeight: 22, marginBottom: 12 },
  input: {
    minHeight: 52,
    borderWidth: 1,
    borderColor: tokens.border.outline,
    borderRadius: tokens.radius.base,
    backgroundColor: tokens.bg.surfaceContainerLowest,
    color: tokens.text.primary,
    paddingHorizontal: 16,
    fontSize: 16,
  },
  status: { color: tokens.text.secondary, textAlign: "center", fontSize: 13 },
  errorBox: { gap: 16, padding: 16, borderRadius: tokens.radius.base, backgroundColor: tokens.semantic.errorContainer },
  errorText: { color: tokens.semantic.error, fontSize: 14, lineHeight: 20 },
});
