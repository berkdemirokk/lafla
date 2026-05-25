// Lafla — Auth helpers built on Supabase.
//
// Apple Sign-In NOTE: the high-level orchestrator (request id_token from the
// native module, hand it to Supabase, persist credentials) lives in
// ./auth-apple.ts. The low-level Supabase wrapper `signInWithApple` below
// only exists because some older call sites still use it directly — prefer
// `signInWithApple` from `./auth-apple.ts` for new code.

import AsyncStorage from "@react-native-async-storage/async-storage";
import * as SecureStore from "expo-secure-store";
import { supabase } from "./supabase";

// 2026-05-25 — signOut sırasında temizlenecek user-data anahtarları.
// signOut bu key'leri silmediği için: User1 onboarding bitirir →
// lafla.onboarded="true" → çıkar → Auth ekranında "Atla" görür → skipAuth
// onboarded="true" gördüğü için /today'e atlar → User2 hesap açamaz.
// Aşağıdaki key'ler hesap-bağlı (cihaz-bağlı değil); signOut'ta clear.
// Not: lafla.intro.match.completed, lafla.cefr.* gibi progress key'leri
// burada CLEAR EDİLMEZ — kullanıcı tekrar girince devam etsin diye.
const USER_BOUND_KEYS = [
  "lafla.onboarded",
  "lafla.onboarding.step",
  "lafla.displayName",
  "lafla.interests",
];
const SECURE_STORE_USER_KEYS = [
  "lafla.apple.credentials.v1",
];

export type Profile = {
  id: string;
  display_name: string | null;
  interests: string[];
  onboarding_completed_at: string | null;
  is_premium: boolean;
  premium_expires_at: string | null;
  total_xp: number;
  current_streak: number;
  longest_streak: number;
  last_lesson_at: string | null;
};

export async function signUpWithEmail(email: string, password: string) {
  const { data, error } = await supabase.auth.signUp({ email, password });
  if (error) throw error;
  return data;
}

export async function signInWithEmail(email: string, password: string) {
  const { data, error } = await supabase.auth.signInWithPassword({ email, password });
  if (error) throw error;
  return data;
}

export async function signInWithApple(identityToken: string, nonce?: string) {
  const { data, error } = await supabase.auth.signInWithIdToken({
    provider: "apple",
    token: identityToken,
    nonce,
  });
  if (error) throw error;
  return data;
}

export async function signOut() {
  // Local user-bound storage'ı önce temizle ki Supabase callback'i bir sonraki
  // mount'ı yanlış yere yönlendirmesin (B-AUTH-1).
  await Promise.all([
    AsyncStorage.multiRemove(USER_BOUND_KEYS).catch(() => {}),
    ...SECURE_STORE_USER_KEYS.map((k) =>
      SecureStore.deleteItemAsync(k).catch(() => {}),
    ),
  ]);
  const { error } = await supabase.auth.signOut();
  if (error) throw error;
}

export async function sendPasswordReset(email: string) {
  const { error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: "lafla://reset-password",
  });
  if (error) throw error;
}

export async function getCurrentProfile(): Promise<Profile | null> {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return null;
  const { data, error } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", user.id)
    .single();
  if (error) {
    console.warn("[Lafla] getCurrentProfile error:", error.message);
    return null;
  }
  return data as Profile;
}

export async function updateProfile(updates: Partial<Profile>) {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) throw new Error("Not authenticated");
  const { data, error } = await supabase
    .from("profiles")
    .update(updates)
    .eq("id", user.id)
    .select()
    .single();
  if (error) throw error;
  return data as Profile;
}

export async function completeOnboarding(interests: string[]) {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return null; // anonymous mode — local-only
  return updateProfile({
    interests,
    onboarding_completed_at: new Date().toISOString(),
  });
}
