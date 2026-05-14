// Lafla — "Apple ile devam et" button.
//
// Follows Apple HIG for Sign in with Apple:
//   - Solid black background, white text & logo
//   - Min 44pt tall (we use 50pt to match the email pill height)
//   - Rounded corners (we use 12 to fit our token system)
//   - Uses the SF Symbol "applelogo" for the mark (no copyrighted asset shipped)
//   - Localised label in Turkish per ADR-003 (Turkish-first)
//
// Renders a no-op when not on iOS or when expo-apple-authentication is missing,
// so it's safe to drop into any layout without a Platform.OS guard.

import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { tokens } from "../theme";
import {
  isAppleSignInAvailable,
  signInWithApple,
  type AppleAuthResult,
} from "../lib/auth-apple";

interface Props {
  /** Called after Supabase successfully signs in. Caller usually routes away. */
  onSuccess?: (result: AppleAuthResult) => void;
  /** User-facing Turkish error message. Cancellations do NOT trigger this. */
  onError?: (message: string) => void;
  /** Override the default label. */
  label?: string;
}

function errorToTurkish(code?: string): string {
  switch (code) {
    case "module-missing":
      return "Apple Sign-In bu sürümde aktif değil.";
    case "unavailable":
      return "Bu cihazda Apple Sign-In kullanılamıyor.";
    case "ios-only":
      return "Apple Sign-In sadece iOS'ta çalışır.";
    case "missing-identity-token":
      return "Apple kimlik tokenı alınamadı. Tekrar dene.";
    default:
      return code ?? "Apple ile giriş başarısız.";
  }
}

export function AppleSignInButton({ onSuccess, onError, label }: Props) {
  const [available, setAvailable] = useState(false);
  const [loading, setLoading] = useState(false);
  const [pressed, setPressed] = useState(false);

  useEffect(() => {
    let cancelled = false;
    isAppleSignInAvailable().then((v) => {
      if (!cancelled) setAvailable(v);
    });
    return () => {
      cancelled = true;
    };
  }, []);

  // Hide entirely when Apple Sign-In isn't usable — no point showing a dead button.
  if (Platform.OS !== "ios" || !available) {
    return null;
  }

  const handlePress = async () => {
    if (loading) return;
    setLoading(true);
    try {
      const result = await signInWithApple();
      if (result.ok) {
        onSuccess?.(result);
      } else if (result.cancelled) {
        // User tapped cancel — silently ignore.
      } else {
        onError?.(errorToTurkish(result.error));
      }
    } catch (e: any) {
      onError?.(e?.message ?? "Apple ile giriş başarısız.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Pressable
      style={[styles.btn, pressed && styles.btnPressed, loading && styles.btnDisabled]}
      onPress={handlePress}
      onPressIn={() => setPressed(true)}
      onPressOut={() => setPressed(false)}
      disabled={loading}
      accessibilityRole="button"
      accessibilityLabel={label ?? "Apple ile devam et"}
    >
      {loading ? (
        <ActivityIndicator color="#ffffff" />
      ) : (
        <View style={styles.row}>
          {/* SF Symbol "applelogo" — rendered as a Unicode glyph (U+F8FF, Apple
              private-use Apple logo). On iOS this resolves to the bitten apple
              mark in the system font; on other platforms the button is hidden
              before render, so the glyph never appears. */}
          <Text style={styles.logo}></Text>
          <Text style={styles.label}>{label ?? "Apple ile devam et"}</Text>
        </View>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  btn: {
    height: 50,
    backgroundColor: "#000000",
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 24,
  },
  btnPressed: {
    opacity: 0.85,
  },
  btnDisabled: {
    opacity: 0.6,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    color: "#ffffff",
    fontSize: 19,
    marginRight: 8,
    // Nudge the glyph onto the text baseline.
    marginTop: -2,
  },
  label: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: tokens.weight.semibold,
    letterSpacing: 0.2,
  },
});
