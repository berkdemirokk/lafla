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
import { moveLegacyEntriesToAccountDirectory } from "./voice-journal";

// 2026-05-25 — signOut sırasında temizlenecek user-data anahtarları.
// signOut bu key'leri silmediği için: User1 onboarding bitirir →
// lafla.onboarded="true" → çıkar → Auth ekranında "Atla" görür → skipAuth
// onboarded="true" gördüğü için /today'e atlar → User2 hesap açamaz.
// Aşağıdaki key'ler hesap-bağlı (cihaz-bağlı değil); signOut'ta clear.
// Not: lafla.intro.match.completed, lafla.cefr.* gibi progress key'leri
// burada CLEAR EDİLMEZ — kullanıcı tekrar girince devam etsin diye.
const K_ONBOARDED = "lafla.onboarded";
const K_ONBOARDING_STEP = "lafla.onboarding.step";
const K_DISPLAY_NAME = "lafla.displayName";
const K_INTERESTS = "lafla.interests";
const K_LOCAL_OWNER = "lafla.local.owner";
const K_SWITCH_JOURNAL = "lafla.local.switch-journal";
const K_ACCOUNT_DATA_PREFIX = "lafla.account-data.";
const ANONYMOUS_OWNER = "anonymous";
let localDataSwitch: Promise<void> = Promise.resolve();

const USER_BOUND_KEYS = [
  K_ONBOARDED,
  K_ONBOARDING_STEP,
  K_DISPLAY_NAME,
  K_INTERESTS,
];
const SECURE_STORE_USER_KEYS = [
  "lafla.apple.credentials.v1",
];

function accountDataKey(ownerId: string, key: string): string {
  return `${K_ACCOUNT_DATA_PREFIX}${encodeURIComponent(ownerId)}.${key}`;
}

type LocalSwitchJournal = {
  from: string;
  to: string;
  active: [string, string][];
  target: [string, string][];
  targetKeys: string[];
  adopting: boolean;
};

// Replay uses the persisted snapshots, never the possibly half-switched active
// keys. Each operation is idempotent, including after the owner marker changes.
async function finishLocalSwitch(journal: LocalSwitchJournal): Promise<void> {
  if (!journal.adopting && journal.active.length) {
    await AsyncStorage.multiSet(journal.active.map(([key, value]) =>
      [accountDataKey(journal.from, key), value],
    ));
  }
  const keys = await AsyncStorage.getAllKeys();
  const activeKeys = keys.filter(isActiveLocalKey);
  if (activeKeys.length) await AsyncStorage.multiRemove(activeKeys);
  const restored = journal.target.length ? journal.target : journal.adopting ? journal.active : [];
  if (restored.length) await AsyncStorage.multiSet(restored);
  await AsyncStorage.setItem(K_LOCAL_OWNER, journal.to);
  if (journal.targetKeys.length) await AsyncStorage.multiRemove(journal.targetKeys);
  await AsyncStorage.removeItem(K_SWITCH_JOURNAL);
}

function isActiveLocalKey(key: string): boolean {
  return key.startsWith("lafla.") && key !== K_LOCAL_OWNER &&
    key !== K_SWITCH_JOURNAL && !key.startsWith(K_ACCOUNT_DATA_PREFIX);
}

/** Keep the existing unscoped AsyncStorage keys active for legacy modules,
 * while moving their values into per-account snapshots at auth boundaries. */
async function switchLocalUserDataUnlocked(
  previousUserId: string | null,
  nextUserId: string | null,
): Promise<void> {
  const pending = await AsyncStorage.getItem(K_SWITCH_JOURNAL);
  if (pending !== null) {
    // Invalid journal must fail closed; guessing ownership risks data leakage.
    const journal: LocalSwitchJournal = JSON.parse(pending);
    if (typeof journal.from !== "string" || typeof journal.to !== "string" ||
        !Array.isArray(journal.active) || !Array.isArray(journal.target) ||
        !Array.isArray(journal.targetKeys) || typeof journal.adopting !== "boolean") {
      throw new Error("Invalid local account switch journal");
    }
    await finishLocalSwitch(journal);
  }
  const nextOwner = nextUserId ?? ANONYMOUS_OWNER;
  const recordedOwner = await AsyncStorage.getItem(K_LOCAL_OWNER);
  const currentOwner = recordedOwner ?? previousUserId ?? ANONYMOUS_OWNER;
  if (currentOwner === nextOwner) {
    await AsyncStorage.setItem(K_LOCAL_OWNER, nextOwner);
    if (nextUserId !== null) await moveLegacyEntriesToAccountDirectory();
    return;
  }

  const allKeys = await AsyncStorage.getAllKeys();
  const activeKeys = allKeys.filter(isActiveLocalKey);
  const activeValues = await AsyncStorage.multiGet(activeKeys);
  const currentSnapshot = activeValues.filter(
    (item): item is [string, string] => item[1] !== null,
  );
  const adoptingAnonymousData =
    currentOwner === ANONYMOUS_OWNER && nextUserId !== null;
  const targetPrefix = `${K_ACCOUNT_DATA_PREFIX}${encodeURIComponent(nextOwner)}.`;
  const targetKeys = allKeys.filter((key) =>
    key.startsWith(targetPrefix),
  );
  const targetValues = await AsyncStorage.multiGet(targetKeys);
  const target = targetValues.flatMap(([key, value]) => value === null ? [] :
    [[key.slice(targetPrefix.length), value] as [string, string]]);
  const journal: LocalSwitchJournal = {
    from: currentOwner, to: nextOwner, active: currentSnapshot,
    target, targetKeys, adopting: adoptingAnonymousData,
  };
  await AsyncStorage.setItem(K_SWITCH_JOURNAL, JSON.stringify(journal));
  await finishLocalSwitch(journal);
  if (nextUserId !== null) await moveLegacyEntriesToAccountDirectory();
}

export function switchLocalUserData(
  previousUserId: string | null,
  nextUserId: string | null,
): Promise<void> {
  const next = localDataSwitch.then(() =>
    switchLocalUserDataUnlocked(previousUserId, nextUserId),
  );
  localDataSwitch = next.catch(() => {});
  return next;
}

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

async function cacheProfileLocally(profile: Profile | null): Promise<void> {
  if (!profile) return;

  const writes: Array<Promise<void>> = [];
  if (profile.onboarding_completed_at) {
    writes.push(AsyncStorage.setItem(K_ONBOARDED, "true"));
  } else {
    writes.push(AsyncStorage.removeItem(K_ONBOARDED));
  }

  if (Array.isArray(profile.interests) && profile.interests.length > 0) {
    writes.push(
      AsyncStorage.setItem(K_INTERESTS, JSON.stringify(profile.interests)),
    );
  } else {
    writes.push(AsyncStorage.removeItem(K_INTERESTS));
  }

  const displayName = profile.display_name?.trim();
  if (displayName) {
    writes.push(AsyncStorage.setItem(K_DISPLAY_NAME, displayName));
  } else {
    writes.push(AsyncStorage.removeItem(K_DISPLAY_NAME));
  }

  await Promise.all(writes.map((p) => p.catch(() => {})));
}

export async function signUpWithEmail(email: string, password: string) {
  const { data: { session: previousSession } } = await supabase.auth.getSession();
  const { data, error } = await supabase.auth.signUp({ email, password });
  if (error) throw error;
  if (data.session) {
    await switchLocalUserData(previousSession?.user.id ?? null, data.session.user.id);
    await AsyncStorage.multiRemove(USER_BOUND_KEYS);
  }
  return data;
}

export async function signInWithEmail(email: string, password: string) {
  const { data: { session: previousSession } } = await supabase.auth.getSession();
  const { data, error } = await supabase.auth.signInWithPassword({ email, password });
  if (error) throw error;
  // 2026-05-26 — Cross-user data leak fix: önceki kullanıcının displayName +
  // interests'i de temizle. Server profile authoritative; today/profile ilk
  // mount'ta server'dan okur. Returning user için "ilk frame boş ad" tradeoff
  // — kabul edilebilir, leak'ten iyi.
  await switchLocalUserData(previousSession?.user.id ?? null, data.user.id);
  await AsyncStorage.multiRemove(USER_BOUND_KEYS).catch(() => {});
  return data;
}

export async function signInWithApple(identityToken: string, nonce?: string) {
  const { data: { session: previousSession } } = await supabase.auth.getSession();
  const { data, error } = await supabase.auth.signInWithIdToken({
    provider: "apple",
    token: identityToken,
    nonce,
  });
  if (error) throw error;
  try {
    await switchLocalUserData(previousSession?.user.id ?? null, data.user.id);
  } catch (switchError) {
    await supabase.auth.signOut().catch(() => {});
    throw switchError;
  }
  // 2026-05-26 — Cross-user data leak fix: tüm USER_BOUND_KEYS temizle.
  await AsyncStorage.multiRemove(USER_BOUND_KEYS).catch(() => {});
  return data;
}

export async function signOut() {
  const { data: { session } } = await supabase.auth.getSession();
  const { error } = await supabase.auth.signOut();
  if (error) throw error;
  // The SIGNED_OUT listener may start this transition first. The shared
  // switch queue makes both calls safe and keeps failed sign-outs untouched.
  await switchLocalUserData(session?.user.id ?? null, null);
  await Promise.all(SECURE_STORE_USER_KEYS.map((k) =>
    SecureStore.deleteItemAsync(k).catch(() => {}),
  ));
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
  const profile = data as Profile;
  await cacheProfileLocally(profile).catch(() => {});
  return profile;
}

export type EditableProfile = Partial<
  Pick<Profile, "display_name" | "interests" | "onboarding_completed_at">
>;

export async function updateProfile(updates: EditableProfile) {
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

export async function completeOnboarding(
  interests: string[],
  displayName?: string,
) {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return null; // anonymous mode — local-only
  const trimmedName = displayName?.trim();
  return updateProfile({
    interests,
    ...(trimmedName ? { display_name: trimmedName } : {}),
    onboarding_completed_at: new Date().toISOString(),
  });
}
