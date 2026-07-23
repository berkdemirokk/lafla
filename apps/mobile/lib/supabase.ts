// Lafla — Supabase client
//
// 2026-05-25 — Session storage SecureStore → AsyncStorage'a alındı.
//
// SORUN: iOS Keychain (SecureStore underlying) per-item ~2KB pratik limit.
// Supabase JWT session (access_token + refresh_token + user metadata) sıkışmış
// halde ~2.5-3KB. SecureStore.setItemAsync sessizce fail oluyordu → kullanıcı
// "girdi" görüyor ama session disk'e yazılmıyor → app reload'da auth state
// yok, kullanıcı tekrar login ekranıyla karşılaşıyor.
//
// ÇÖZÜM: AsyncStorage adapter. iOS App Sandbox + file protection (NSFileProtection
// CompleteUntilFirstUserAuthentication) → token data hâlâ disk'te encrypted
// (cihaz unlock olmadan okunmaz). Slight güvenlik tradeoff: SecureStore Keychain
// access control protections (örn. biometric gating) verirdi, AsyncStorage vermez.
// Pratikte token bir client-only auth artifact; risk düşük, fonksiyonellik
// kazancı yüksek.
//
// MIGRATION: SecureStore'da kayıtlı eski session'lar bu binary'de okunmaz —
// kullanıcı tekrar login olur. Tek seferlik UX hit. Çoğu kullanıcı zaten
// auth sorunu yüzünden henüz session sahibi değildi.

import "react-native-url-polyfill/auto";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createClient } from "@supabase/supabase-js";
import Constants from "expo-constants";

const SUPABASE_URL =
  Constants.expoConfig?.extra?.supabaseUrl ?? process.env.EXPO_PUBLIC_SUPABASE_URL ?? "";
const SUPABASE_ANON_KEY =
  Constants.expoConfig?.extra?.supabaseAnonKey ?? process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY ?? "";

const FALLBACK_SUPABASE_URL = "https://lafla-offline.supabase.co";
const FALLBACK_SUPABASE_ANON_KEY = "offline-anon-key";

if (__DEV__ && (!SUPABASE_URL || !SUPABASE_ANON_KEY)) {
  // eslint-disable-next-line no-console
  console.warn("[Lafla] Supabase URL or anon key missing — auth/persistence disabled.");
}

export const isSupabaseConfigured = Boolean(SUPABASE_URL && SUPABASE_ANON_KEY);

// createClient("", "") throws during module import. A missing Supabase config
// should disable network-backed features, not crash the app before fallback
// screens can render. Call sites must still check isSupabaseConfigured before
// auth/RPC flows that require the backend.
export const supabase = createClient(
  isSupabaseConfigured ? SUPABASE_URL : FALLBACK_SUPABASE_URL,
  isSupabaseConfigured ? SUPABASE_ANON_KEY : FALLBACK_SUPABASE_ANON_KEY,
  {
    auth: {
      storage: AsyncStorage,
      autoRefreshToken: true,
      persistSession: true,
      detectSessionInUrl: false,
    },
  },
);
