// Lafla — "Apple ile devam et" button.
//
// Uses Apple's OFFICIAL `AppleAuthenticationButton` from
// expo-apple-authentication so the mark, font, spacing and localisation are
// guaranteed to match Apple's Human Interface Guidelines for Sign in with
// Apple (App Store Guideline 4 — Design).
//
// Style choice: WHITE button (white background, black logo + label). Our app
// background is pure black (#000000); a black button would visually merge into
// it and "not look like a button" — which is exactly what App Review flagged.
// The white variant reads as an unmistakable, tappable control on dark UI.
//
// Renders nothing when not on iOS or when expo-apple-authentication is missing,
// so it's safe to drop into any layout without a Platform.OS guard.

import { useEffect, useState } from "react";
import { ActivityIndicator, Platform, StyleSheet, View } from "react-native";
import { getLocale } from "../lib/i18n";
import {
  isAppleSignInAvailable,
  signInWithApple,
  type AppleAuthResult,
} from "../lib/auth-apple";

// Defensive require — native module is optional until installed. Mirrors the
// pattern in lib/auth-apple.ts so a missing module can never crash JS.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
let AppleAuthentication: any = null;
try {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  AppleAuthentication = require("expo-apple-authentication");
} catch {
  AppleAuthentication = null;
}

interface Props {
  /** Called after Supabase successfully signs in. Caller usually routes away. */
  onSuccess?: (result: AppleAuthResult) => void;
  /** User-facing Turkish error message. Cancellations do NOT trigger this. */
  onError?: (message: string) => void;
}

function errorMessage(code: string | undefined, locale: "tr" | "en"): string {
  if (locale === "en") {
    switch (code) {
      case "module-missing":
        return "Apple Sign-In is not available in this build.";
      case "unavailable":
        return "Apple Sign-In is not available on this device.";
      case "ios-only":
        return "Apple Sign-In is iOS-only.";
      case "missing-identity-token":
        return "Couldn't obtain Apple identity token. Please try again.";
      default:
        return code ?? "Apple Sign-In failed.";
    }
  }
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

export function AppleSignInButton({ onSuccess, onError }: Props) {
  const [available, setAvailable] = useState(false);
  const [loading, setLoading] = useState(false);
  const locale = getLocale();

  useEffect(() => {
    let cancelled = false;
    isAppleSignInAvailable().then((v) => {
      if (!cancelled) setAvailable(v);
    });
    return () => {
      cancelled = true;
    };
  }, []);

  // Hide entirely when Apple Sign-In isn't usable — no point showing a dead
  // button. Also guards against the native button component being absent.
  if (
    Platform.OS !== "ios" ||
    !available ||
    !AppleAuthentication?.AppleAuthenticationButton
  ) {
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
        onError?.(errorMessage(result.error, locale));
      }
    } catch (e: any) {
      onError?.(e?.message ?? errorMessage(undefined, locale));
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.wrap}>
      <AppleAuthentication.AppleAuthenticationButton
        buttonType={
          AppleAuthentication.AppleAuthenticationButtonType.CONTINUE
        }
        buttonStyle={AppleAuthentication.AppleAuthenticationButtonStyle.WHITE}
        cornerRadius={12}
        style={styles.btn}
        onPress={handlePress}
      />
      {loading ? (
        <View style={styles.loadingOverlay}>
          <ActivityIndicator color="#000000" />
        </View>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    position: "relative",
    width: "100%",
  },
  btn: {
    height: 50,
    width: "100%",
  },
  // Covers the button while the Supabase exchange is in flight so the user
  // can't double-tap. Matches the WHITE button surface.
  loadingOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "#ffffff",
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
});
