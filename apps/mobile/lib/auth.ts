// Lafla — Auth helpers built on Supabase.
//
// Apple Sign-In NOTE: the high-level orchestrator (request id_token from the
// native module, hand it to Supabase, persist credentials) lives in
// ./auth-apple.ts. The low-level Supabase wrapper `signInWithApple` below
// only exists because some older call sites still use it directly — prefer
// `signInWithApple` from `./auth-apple.ts` for new code.

import { supabase } from "./supabase";

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
