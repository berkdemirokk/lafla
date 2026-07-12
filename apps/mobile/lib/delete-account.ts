// Lafla — In-app account deletion (App Store Guideline 5.1.1(v)).
//
// User-initiated, IRREVERSIBLE delete that runs end-to-end inside the app:
//   1. POST {SUPABASE_URL}/functions/v1/delete-account with the user's
//      access token. The edge function removes all DB rows, storage
//      objects, and the auth.users entry under service-role privilege.
//   2. On success, we clear every `lafla.*` AsyncStorage key locally so
//      no residual cached state leaks across re-installs on the same
//      device, and we sign out from Supabase to drop the SecureStore
//      session.
//   3. We never assume the call succeeds without proof — partial errors
//      come back in `partial_errors[]`. We surface the first one so the
//      UI can offer the mailto: fallback.
//
// USAGE (settings.tsx):
//   const preview = await previewWhatWillBeDeleted();
//   // ... show in confirm dialog ...
//   const res = await deleteAccountInstant();
//   if (res.ok) router.replace('/'); else Alert.alert('Hata', res.error);

import AsyncStorage from "@react-native-async-storage/async-storage";
import Constants from "expo-constants";
import * as SecureStore from "expo-secure-store";
import { supabase, isSupabaseConfigured } from "./supabase";
import { getLocalProfile, getAllLessonState } from "./local-progress";
import { isPremium, setUserId as setRevenueCatUserId } from "./iap";
import { clearAll as clearVoiceJournal } from "./voice-journal";

const SUPABASE_URL =
  Constants.expoConfig?.extra?.supabaseUrl ??
  process.env.EXPO_PUBLIC_SUPABASE_URL ??
  "";
const SUPABASE_ANON_KEY =
  Constants.expoConfig?.extra?.supabaseAnonKey ??
  process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY ??
  "";

// Fallback constant used when we can't match a completed lesson to a scene
// (mirrors metrics.ts; we don't import to avoid circular & to keep this lib
// lean enough to call from a teardown context).
const FALLBACK_LESSON_MINUTES = 4;
const SECURE_STORE_USER_KEYS = ["lafla.apple.credentials.v1"];

export interface DeletePreview {
  scenes_completed: number;
  hours_practiced: number;
  premium_active: boolean;
}

export interface DeleteResult {
  ok: boolean;
  error?: string;
}

// ---------------------------------------------------------------------------
// previewWhatWillBeDeleted
// ---------------------------------------------------------------------------
// Read-only — surfaces a short user-facing summary for the confirmation
// dialog. Never blocks deletion; on error we return zeros so the user can
// still proceed (their right to delete must not depend on stats loading).
export async function previewWhatWillBeDeleted(): Promise<DeletePreview> {
  let scenes_completed = 0;
  let hours_practiced = 0;
  let premium_active = false;

  try {
    const states = await getAllLessonState();
    for (const s of Object.values(states)) {
      if (s.completed_at) {
        scenes_completed += 1;
        hours_practiced += FALLBACK_LESSON_MINUTES / 60;
      }
    }
  } catch {
    // best effort — keep defaults
  }

  try {
    // Use profile.total_xp as a secondary signal of activity but don't
    // surface it directly; users care about scenes and hours.
    await getLocalProfile();
  } catch {}

  try {
    premium_active = await isPremium();
  } catch {
    premium_active = false;
  }

  return {
    scenes_completed,
    hours_practiced: Math.round(hours_practiced * 10) / 10,
    premium_active,
  };
}

// ---------------------------------------------------------------------------
// deleteAccountInstant
// ---------------------------------------------------------------------------
// Calls the edge function. Whether the call succeeds OR fails, we still
// purge local `lafla.*` keys at the end IF the server-side delete reports
// success — because once auth.users is gone, leftover device cache is the
// only thing that could re-create stale RLS hits on re-sign-in.
//
// If the server side fails, we DO NOT clear local data — the user might
// retry, and their progress should be preserved for that retry / for the
// mailto: fallback.
export async function deleteAccountInstant(): Promise<DeleteResult> {
  if (!isSupabaseConfigured || !SUPABASE_URL) {
    return {
      ok: false,
      error: "Supabase yapılandırılmamış. Lütfen destekle iletişime geç.",
    };
  }

  // Pull the current access token. If the user isn't signed in, there is
  // no server-side data to delete — clear local and return ok.
  const { data: sessionData } = await supabase.auth.getSession();
  const token = sessionData.session?.access_token;
  if (!token) {
    await clearAllLocalLaflaKeys();
    return { ok: true };
  }

  let response: Response;
  try {
    response = await fetch(
      `${SUPABASE_URL.replace(/\/$/, "")}/functions/v1/delete-account`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
          apikey: SUPABASE_ANON_KEY,
        },
        body: JSON.stringify({}),
      },
    );
  } catch (e) {
    return {
      ok: false,
      error: `Ağ hatası: ${(e as Error).message}`,
    };
  }

  let body: { ok?: boolean; error?: string; partial_errors?: string[] } = {};
  try {
    body = await response.json();
  } catch {
    // ignore parse failure; we'll fall through to the status check
  }

  if (!response.ok || body.ok === false) {
    const reason =
      body.error ??
      body.partial_errors?.[0] ??
      `HTTP ${response.status}`;
    return { ok: false, error: reason };
  }

  // Server-side delete succeeded. Now wipe device-side state.
  await clearAllLocalLaflaKeys();

  try {
    await supabase.auth.signOut();
  } catch {
    // signOut can fail if the session was already invalidated by the
    // deletion. Not fatal — we've already cleared everything.
  }

  return { ok: true };
}

// ---------------------------------------------------------------------------
// clearAllLocalLaflaKeys
// ---------------------------------------------------------------------------
// Removes every AsyncStorage key beginning with "lafla." so a re-install or
// re-signup starts clean. We use multiRemove for a single I/O batch.
async function clearAllLocalLaflaKeys(): Promise<void> {
  // The index is an AsyncStorage key, so remove physical recordings first.
  await clearVoiceJournal().catch(() => {});
  await Promise.all([
    (async () => {
      try {
        const allKeys = await AsyncStorage.getAllKeys();
        const ours = allKeys.filter((key) => key.startsWith("lafla."));
        if (ours.length > 0) await AsyncStorage.multiRemove(ours);
      } catch {
        // The server-side deletion has already succeeded; keep tearing down.
      }
    })(),
    setRevenueCatUserId(null).catch(() => {}),
    ...SECURE_STORE_USER_KEYS.map((key) =>
      SecureStore.deleteItemAsync(key).catch(() => {}),
    ),
  ]);
}
