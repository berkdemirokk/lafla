// Lafla — Auth helpers built on Supabase.

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

export async function signInWithApple(identityToken: string, nonce: string) {
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
  return updateProfile({
    interests,
    onboarding_completed_at: new Date().toISOString(),
  });
}
