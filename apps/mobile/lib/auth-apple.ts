// Lafla — Apple Sign-In (iOS only)
//
// Wraps `expo-apple-authentication` and exchanges the returned identity token
// with Supabase via `signInWithIdToken({ provider: "apple" })`.
//
// App Store Guideline 4.8 requires Sign in with Apple if any other social
// auth is offered. Even before we add Google/Facebook, shipping this keeps
// us ready and gives Turkish users a one-tap option that hides their email
// via Apple's private relay.
//
// -----------------------------------------------------------------------------
// Integration snippet (DO NOT auto-merge — leave this for manual review):
//
//   // In apps/mobile/app/auth.tsx, near the existing email form:
//   import { Platform } from "react-native";
//   import { AppleSignInButton } from "../components/AppleSignInButton";
//
//   {Platform.OS === "ios" && (
//     <AppleSignInButton
//       onSuccess={() => router.replace("/onboarding")}
//       onError={(msg) => setError(msg)}
//     />
//   )}
//
// Note: `apps/mobile/lib/auth.ts` already exports a low-level helper named
// `signInWithApple(identityToken, nonce?)`. To avoid a name clash when both
// modules are imported in the same file, import this module's helper with an
// alias, e.g. `import { signInWithApple as signInWithAppleNative } from
// "../lib/auth-apple"`.
// -----------------------------------------------------------------------------

import { Platform } from "react-native";
import * as SecureStore from "expo-secure-store";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Constants from "expo-constants";
import { supabase } from "./supabase";
import { captureException, captureMessage } from "./sentry";

// 2026-05-23 — Apple Sign-In token exchange edge function endpoint.
// Backend supabase/functions/apple-token-exchange'i çağırır.
const SUPABASE_URL =
  (Constants.expoConfig?.extra?.supabaseUrl as string | undefined) ??
  process.env.EXPO_PUBLIC_SUPABASE_URL ??
  "";

/**
 * Backend'e Apple authorization code'u gönder → backend Apple ile token
 * exchange yapar → refresh_token DB'ye yazılır. Account deletion'da
 * revoke edilecek (Guideline 5.1.1(v)).
 *
 * Best-effort: hata fırlatmaz, sadece resolved Boolean döner. Sign-in
 * flow'un kritik path'ini bloke etmez. Backend env (.p8 / Service ID)
 * yoksa 503 döner, biz "false" ile geri döneriz.
 *
 * 2026-05-23 (v0.9.3) — Audit fix: cold sign-in'de Supabase'in SecureStore
 * session yazımı async; getSession() ilk çağrıda null dönebiliyor →
 * exchange fail oluyordu → Apple refresh_token kaybedildi → revoke'da
 * 5.1.1(v) ihlali. Çözüm: 3×200ms retry loop.
 */
async function exchangeAppleAuthorizationCode(
  authorizationCode: string,
): Promise<boolean> {
  if (!SUPABASE_URL) return false;

  // SecureStore yazımı async — session token tâ ki disk'e düşene kadar
  // bekle. Her sleep 200ms × 3 deneme = max 600ms gecikme. Tipik 1.
  // denemede dolu (sign-in çağrısı çok yakın zamanda resolve etti).
  let token: string | undefined;
  for (let i = 0; i < 3 && !token; i++) {
    try {
      const { data: sessionData } = await supabase.auth.getSession();
      token = sessionData.session?.access_token;
    } catch {
      token = undefined;
    }
    if (!token && i < 2) {
      await new Promise((resolve) => setTimeout(resolve, 200));
    }
  }
  if (!token) return false;

  try {
    const res = await fetch(
      `${SUPABASE_URL.replace(/\/$/, "")}/functions/v1/apple-token-exchange`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ authorization_code: authorizationCode }),
      },
    );
    return res.ok;
  } catch {
    return false;
  }
}

// Defensive require — module is optional until `expo install expo-apple-authentication`
// is run. We do this at runtime so a missing native module never crashes JS.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
let AppleAuthentication: any = null;
try {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  AppleAuthentication = require("expo-apple-authentication");
} catch {
  AppleAuthentication = null;
}

const STORAGE_KEY = "lafla.apple.credentials.v1";

export interface AppleStoredCredentials {
  appleUserId: string;
  email?: string;
}

export interface AppleAuthResult {
  ok: boolean;
  error?: string;
  cancelled?: boolean;
  user?: {
    appleUserId: string;
    email?: string;
    fullName?: string;
    identityToken: string;
  };
}

/**
 * True if Sign in with Apple can be used on this device. Always false on
 * Android, web, and iOS Simulator (Apple ID is not available there).
 */
export async function isAppleSignInAvailable(): Promise<boolean> {
  if (Platform.OS !== "ios") return false;
  if (!AppleAuthentication) return false;
  try {
    return await AppleAuthentication.isAvailableAsync();
  } catch {
    return false;
  }
}

/**
 * Read the locally-cached `{ appleUserId, email }` from a previous sign-in.
 * Apple only returns the email/full name the FIRST time a user authorises the
 * app, so we persist it to use for later UI ("Welcome back, berk@...").
 */
export async function getStoredAppleCredentials(): Promise<AppleStoredCredentials | null> {
  try {
    const raw = await SecureStore.getItemAsync(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as AppleStoredCredentials;
    if (!parsed?.appleUserId) return null;
    return parsed;
  } catch {
    return null;
  }
}

async function storeAppleCredentials(creds: AppleStoredCredentials): Promise<void> {
  try {
    await SecureStore.setItemAsync(STORAGE_KEY, JSON.stringify(creds));
  } catch {
    // SecureStore failures are non-fatal — Apple will hand us the userId again next time.
  }
}

/**
 * Trigger the native Apple Sign-In sheet, then sign the user into Supabase
 * via OIDC. Returns a typed result rather than throwing so callers can
 * branch on `cancelled` vs. real errors without try/catch noise.
 */
export async function signInWithApple(): Promise<AppleAuthResult> {
  if (Platform.OS !== "ios") {
    return { ok: false, error: "ios-only" };
  }
  if (!AppleAuthentication) {
    return { ok: false, error: "module-missing" };
  }

  let available = false;
  try {
    available = await AppleAuthentication.isAvailableAsync();
  } catch {
    available = false;
  }
  if (!available) {
    return { ok: false, error: "unavailable" };
  }

  let credential: any;
  try {
    credential = await AppleAuthentication.signInAsync({
      requestedScopes: [
        AppleAuthentication.AppleAuthenticationScope.FULL_NAME,
        AppleAuthentication.AppleAuthenticationScope.EMAIL,
      ],
    });
  } catch (e: any) {
    // ERR_REQUEST_CANCELED is the documented cancel code.
    const code = e?.code ?? "";
    if (code === "ERR_REQUEST_CANCELED" || code === "ERR_CANCELED") {
      return { ok: false, cancelled: true };
    }
    return { ok: false, error: e?.message ?? "apple-signin-failed" };
  }

  const identityToken: string | undefined = credential?.identityToken ?? undefined;
  if (!identityToken) {
    return { ok: false, error: "missing-identity-token" };
  }

  const appleUserId: string = credential.user;
  const email: string | undefined = credential.email ?? undefined;

  // Apple sends `fullName` only on first authorisation. Stitch the parts together.
  const givenName: string | undefined = credential?.fullName?.givenName ?? undefined;
  const familyName: string | undefined = credential?.fullName?.familyName ?? undefined;
  const fullName =
    [givenName, familyName].filter(Boolean).join(" ").trim() || undefined;

  // Sign Supabase. Nonce omitted — expo-apple-authentication does not surface
  // the raw nonce, and Supabase verifies the token against Apple's public key
  // regardless. Add `nonce` here if you switch to a manual native module.
  const { error: sbError } = await supabase.auth.signInWithIdToken({
    provider: "apple",
    token: identityToken,
  });

  if (sbError) {
    return { ok: false, error: sbError.message };
  }

  // 2026-05-25 — Stale user-data temizliği. Önceki kullanıcı (veya aynı
  // kullanıcının önceki test run'ı) `lafla.onboarded="true"` flag'i
  // bırakmış olabilir → yeni signed-in user yanlışlıkla /today'e gidip
  // onboarding'i atlatıyordu. signIn sonrası flag'i temizle ki splash
  // routing'i server profile'ından okusun.
  await AsyncStorage.multiRemove([
    "lafla.onboarded",
    "lafla.onboarding.step",
  ]).catch(() => {});

  // Cache PII for repeat sign-ins (Apple won't resend it).
  await storeAppleCredentials({ appleUserId, email });

  // 2026-05-23 — Guideline 5.1.1(v) compliance step 1/2.
  // Apple authorizationCode'u backend'e gönder, refresh_token ile değiştir
  // ve apple_credentials tablosunda sakla. Account deletion'da revoke
  // edilecek. Best-effort — fail olursa sign-in başarıyla tamamlanmış sayılır
  // (Apple revoke v2'de deneneecek).
  const authorizationCode: string | undefined =
    credential?.authorizationCode ?? undefined;
  if (authorizationCode) {
    // 2026-05-25 (B-AUTH-5) — eski versiyon sessizce yutuyordu. Apple 5.1.1(v)
    // revoke chain'i ileride bu refresh_token'a bağlı; backend env yoksa
    // veya 5xx dönerse account deletion patladığında Apple reject olur.
    // captureMessage ile Sentry'e P1 sinyal at; user'a hata göstermeye
    // gerek yok (sign-in başarılı sayılır, deletion path lazımken anlaşılır).
    void exchangeAppleAuthorizationCode(authorizationCode)
      .then((ok) => {
        if (!ok) {
          captureMessage("apple_token_exchange_failed", "warning");
        }
      })
      .catch((err: unknown) => {
        captureException(err);
      });
  }

  // If the user shared their name on first sign-in, push it onto the profile
  // so onboarding can pre-fill `display_name`. Errors here are non-fatal —
  // worst case the user types it themselves.
  if (fullName) {
    try {
      const { data: userData } = await supabase.auth.getUser();
      if (userData?.user?.id) {
        await supabase
          .from("profiles")
          .update({ display_name: fullName })
          .eq("id", userData.user.id);
      }
    } catch {
      // ignore — display_name is set during onboarding anyway.
    }
  }

  return {
    ok: true,
    user: {
      appleUserId,
      email,
      fullName,
      identityToken,
    },
  };
}
