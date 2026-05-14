// Lafla — Backup + Cloud Restore (Premium).
//
// Serializes the user's local progress (AsyncStorage `lafla.*` keys) into a
// portable JSON snapshot, uploads to Supabase Storage as a Pro-only feature,
// and restores on a new device. Important for premium retention.
//
// SUPABASE SETUP (one-time, done via SQL editor or migration file):
//
//   1. Storage bucket: create a bucket named "user-backups" (Private).
//      In the Supabase dashboard:
//        Storage → New bucket → name=user-backups, public=false.
//
//   2. RLS policies on storage.objects:
//        - Authenticated user can INSERT into bucket "user-backups"
//          when the object path begins with `users/{auth.uid()}/`.
//        - Authenticated user can SELECT objects under the same prefix.
//        - Authenticated user can DELETE objects under the same prefix.
//        - No public access.
//
//   3. Migration file: see supabase/migrations/00002_backups_bucket.sql
//      (added alongside this module).
//
//   4. SDK note: the `@supabase/supabase-js` Storage API works in React
//      Native against the same bucket. We use base64 strings for uploads
//      since we don't have a Blob polyfill in RN for arbitrary content.
//
// LOCAL STATE:
//   - lafla.backup.lastAt     ISO string of most recent successful upload
//   - lafla.backup.deviceId   UUID generated on first run; embedded in
//                             every snapshot for "Which device made this?"
//   - lafla.backup.autoMode   "off" | "daily" | "weekly" — preference only;
//                             actual scheduling is out of scope here.
//
// SAFETY:
//   - restoreFromCloud / restoreFromJSON OVERWRITES local AsyncStorage for
//     any backed-up key present in the snapshot. Callers MUST gate this
//     with explicit user confirmation. The UI in app/backup.tsx does this.
//   - The IAP mock key (`lafla.premium.mock`) is excluded from backups so a
//     user cannot smuggle premium across devices via export/import.

import AsyncStorage from "@react-native-async-storage/async-storage";
import Constants from "expo-constants";
import { supabase, isSupabaseConfigured } from "./supabase";
import { isPremium } from "./iap";
import {
  shouldBackupKey,
  bucketForKey,
  type BackupBuckets,
} from "./backup-keys";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface BackupSnapshot {
  version: "1.0";
  createdAt: string;
  deviceId: string;
  appVersion: string;
  data: {
    profile: unknown;
    lessons: unknown;
    cefr: unknown;
    coach: unknown;
    program: unknown;
    mission: unknown;
    bookmarks: unknown;
    achievements: unknown;
    dailyquests: unknown;
    journal: unknown;
    certificates: unknown;
    mistakes: unknown;
    metrics: unknown;
    voiceSessions: unknown;
    listening: unknown;
    reading: unknown;
    decks: unknown;
    settings: unknown;
  };
  meta: {
    totalKeys: number;
    sizeBytes: number;
  };
}

export interface CloudBackupListItem {
  fileName: string;
  createdAt: string;
  sizeKb: number;
}

export interface UploadResult {
  ok: boolean;
  url?: string;
  error?: string;
}

export interface RestoreResult {
  ok: boolean;
  restoredKeys: number;
  error?: string;
}

export type AutoBackupMode = "off" | "daily" | "weekly";

// ---------------------------------------------------------------------------
// Storage keys (own — never backed up; see backup-keys EXCLUDED_KEYS).
// ---------------------------------------------------------------------------

const K_LAST_AT = "lafla.backup.lastAt";
const K_DEVICE_ID = "lafla.backup.deviceId";
const K_AUTO_MODE = "lafla.backup.autoMode";

const BUCKET_NAME = "user-backups";
const MAX_BACKUPS_PER_USER = 5;

// ---------------------------------------------------------------------------
// Device ID (stable across reinstalls would require SecureStore; AsyncStorage
// is sufficient here because losing it just means a "new" device which is
// already the new-device experience.)
// ---------------------------------------------------------------------------

function generateUuidV4(): string {
  // RFC 4122 v4 generator using Math.random — fine for non-crypto device tag.
  // Format: xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx, y in [8,9,a,b]
  let out = "";
  for (let i = 0; i < 36; i++) {
    if (i === 8 || i === 13 || i === 18 || i === 23) {
      out += "-";
    } else if (i === 14) {
      out += "4";
    } else if (i === 19) {
      out += ((Math.random() * 4) | 0 | 8).toString(16);
    } else {
      out += ((Math.random() * 16) | 0).toString(16);
    }
  }
  return out;
}

async function getOrCreateDeviceId(): Promise<string> {
  try {
    const existing = await AsyncStorage.getItem(K_DEVICE_ID);
    if (existing && existing.length > 0) return existing;
    const fresh = generateUuidV4();
    await AsyncStorage.setItem(K_DEVICE_ID, fresh);
    return fresh;
  } catch {
    // If AsyncStorage is hosed, return a transient ID so the snapshot still
    // serializes; we just won't have device identity persistence.
    return generateUuidV4();
  }
}

// ---------------------------------------------------------------------------
// Snapshot builder
// ---------------------------------------------------------------------------

function appVersion(): string {
  return (
    (Constants.expoConfig?.version as string | undefined) ??
    "0.0.0-unknown"
  );
}

function emptyBuckets(): BackupBuckets {
  return {
    profile: {},
    lessons: {},
    cefr: {},
    coach: {},
    program: {},
    mission: {},
    bookmarks: {},
    achievements: {},
    dailyquests: {},
    journal: {},
    certificates: {},
    mistakes: {},
    metrics: {},
    voiceSessions: {},
    listening: {},
    reading: {},
    decks: {},
    settings: {},
  };
}

/**
 * Reads ALL AsyncStorage keys whose prefix is in BACKUPABLE_KEYS_PREFIXES,
 * organizes them into named buckets, and returns a self-describing snapshot.
 *
 * Values are kept as raw strings (the original serialized form) so that
 * restore is a byte-for-byte rewrite — no JSON re-encoding, no shape drift.
 */
export async function buildBackupSnapshot(): Promise<BackupSnapshot> {
  const deviceId = await getOrCreateDeviceId();
  const buckets = emptyBuckets();
  let totalKeys = 0;

  try {
    const allKeys = await AsyncStorage.getAllKeys();
    const eligible = allKeys.filter(shouldBackupKey);
    if (eligible.length > 0) {
      const entries = await AsyncStorage.multiGet(eligible);
      for (const [key, value] of entries) {
        if (value === null) continue;
        const bucket = bucketForKey(key);
        buckets[bucket][key] = value; // store raw string
        totalKeys++;
      }
    }
  } catch {
    // best effort — partial snapshot is still better than nothing
  }

  const snapshot: BackupSnapshot = {
    version: "1.0",
    createdAt: new Date().toISOString(),
    deviceId,
    appVersion: appVersion(),
    data: buckets,
    meta: {
      totalKeys,
      sizeBytes: 0, // patched after stringify below
    },
  };

  const serialized = JSON.stringify(snapshot);
  snapshot.meta.sizeBytes = serialized.length;
  return snapshot;
}

/**
 * Serialize a fresh snapshot to a JSON string. Suitable for sharing via
 * expo-sharing (when installed) or copy-to-clipboard.
 */
export async function exportBackupAsJSON(): Promise<string> {
  const snap = await buildBackupSnapshot();
  return JSON.stringify(snap);
}

// ---------------------------------------------------------------------------
// Restore (write back to AsyncStorage)
// ---------------------------------------------------------------------------

function isBackupSnapshot(v: unknown): v is BackupSnapshot {
  if (!v || typeof v !== "object") return false;
  const o = v as Record<string, unknown>;
  if (o.version !== "1.0") return false;
  if (typeof o.createdAt !== "string") return false;
  if (typeof o.deviceId !== "string") return false;
  if (typeof o.appVersion !== "string") return false;
  if (!o.data || typeof o.data !== "object") return false;
  return true;
}

async function writeSnapshotToStorage(
  snap: BackupSnapshot,
): Promise<number> {
  const pairs: [string, string][] = [];
  for (const bucketName of Object.keys(snap.data) as (keyof BackupSnapshot["data"])[]) {
    const bucket = snap.data[bucketName];
    if (!bucket || typeof bucket !== "object") continue;
    for (const [key, raw] of Object.entries(bucket as Record<string, unknown>)) {
      if (typeof raw !== "string") continue;
      // Guard: never write back to an excluded key (defense-in-depth in case
      // an older snapshot was generated before EXCLUDED_KEYS expanded).
      if (!shouldBackupKey(key)) continue;
      pairs.push([key, raw]);
    }
  }
  if (pairs.length === 0) return 0;
  try {
    await AsyncStorage.multiSet(pairs);
  } catch {
    // partial write may have happened; multiSet is best-effort atomic.
    return 0;
  }
  return pairs.length;
}

/**
 * Restore from a JSON string (e.g. dropped from a file picker).
 * WARNING: overwrites local state for every key present in the snapshot.
 */
export async function restoreFromJSON(json: string): Promise<RestoreResult> {
  let parsed: unknown;
  try {
    parsed = JSON.parse(json);
  } catch {
    return { ok: false, restoredKeys: 0, error: "JSON parse failed" };
  }
  if (!isBackupSnapshot(parsed)) {
    return {
      ok: false,
      restoredKeys: 0,
      error: "Yedek formatı tanınamadı (version != 1.0).",
    };
  }
  try {
    const n = await writeSnapshotToStorage(parsed);
    return { ok: n > 0, restoredKeys: n };
  } catch (err) {
    return {
      ok: false,
      restoredKeys: 0,
      error: err instanceof Error ? err.message : "Yedek yazılamadı.",
    };
  }
}

// ---------------------------------------------------------------------------
// Cloud — Supabase Storage (premium-gated)
// ---------------------------------------------------------------------------

async function getAuthUserId(): Promise<string | null> {
  try {
    const { data } = await supabase.auth.getUser();
    return data.user?.id ?? null;
  } catch {
    return null;
  }
}

function objectPath(userId: string, fileName: string): string {
  return `users/${userId}/backups/${fileName}`;
}

function backupFileNameFor(snap: BackupSnapshot): string {
  // ISO timestamp + short device tag, sanitized for path safety
  const ts = snap.createdAt.replace(/[:.]/g, "-");
  const tag = snap.deviceId.slice(0, 8);
  return `${ts}_${tag}.json`;
}

async function setLastBackupAt(iso: string): Promise<void> {
  try {
    await AsyncStorage.setItem(K_LAST_AT, iso);
  } catch {
    // ignore
  }
}

export async function getLastBackupAt(): Promise<string | null> {
  try {
    return await AsyncStorage.getItem(K_LAST_AT);
  } catch {
    return null;
  }
}

/**
 * Upload a fresh snapshot to Supabase Storage under
 * `users/{auth.uid()}/backups/{timestamp}.json`. Requires:
 *   - Supabase configured (URL + anon key present)
 *   - User signed in (auth.getUser() returns a row)
 *   - isPremium() === true
 *
 * After a successful upload, prunes older backups so each user keeps at
 * most MAX_BACKUPS_PER_USER files server-side.
 */
export async function uploadBackupToCloud(): Promise<UploadResult> {
  if (!isSupabaseConfigured) {
    return { ok: false, error: "Bulut yedek için Supabase yapılandırılmamış." };
  }
  const premium = await isPremium().catch(() => false);
  if (!premium) {
    return {
      ok: false,
      error: "Bulut yedek Pro üyelik gerektirir.",
    };
  }
  const userId = await getAuthUserId();
  if (!userId) {
    return {
      ok: false,
      error: "Yedek yüklemek için giriş yapmalısın.",
    };
  }

  let snap: BackupSnapshot;
  try {
    snap = await buildBackupSnapshot();
  } catch (err) {
    return {
      ok: false,
      error:
        err instanceof Error ? `Yedek oluşturulamadı: ${err.message}` : "Yedek oluşturulamadı.",
    };
  }

  const fileName = backupFileNameFor(snap);
  const path = objectPath(userId, fileName);
  const body = JSON.stringify(snap);

  try {
    const { error } = await supabase.storage
      .from(BUCKET_NAME)
      .upload(path, body, {
        contentType: "application/json",
        upsert: false,
        cacheControl: "no-store",
      });
    if (error) {
      return { ok: false, error: error.message };
    }
  } catch (err) {
    return {
      ok: false,
      error:
        err instanceof Error
          ? `Yükleme hatası: ${err.message}`
          : "Yükleme hatası.",
    };
  }

  await setLastBackupAt(snap.createdAt);
  await pruneOldBackups(userId).catch(() => {
    // pruning is best-effort; don't fail the user-visible result on it
  });

  // Best-effort signed URL for verification — don't fail the upload if this errors.
  let signedUrl: string | undefined;
  try {
    const { data } = await supabase.storage
      .from(BUCKET_NAME)
      .createSignedUrl(path, 3600);
    if (data?.signedUrl) signedUrl = data.signedUrl;
  } catch {
    // ignore
  }

  return { ok: true, url: signedUrl };
}

async function pruneOldBackups(userId: string): Promise<void> {
  const list = await listCloudBackupsForUser(userId);
  if (list.length <= MAX_BACKUPS_PER_USER) return;
  // sort newest first by createdAt — list is already sorted that way, but
  // be defensive in case the server returns an unsorted listing.
  const sorted = [...list].sort((a, b) =>
    a.createdAt < b.createdAt ? 1 : -1,
  );
  const toDelete = sorted.slice(MAX_BACKUPS_PER_USER);
  if (toDelete.length === 0) return;
  const paths = toDelete.map((f) => objectPath(userId, f.fileName));
  try {
    await supabase.storage.from(BUCKET_NAME).remove(paths);
  } catch {
    // ignore
  }
}

async function listCloudBackupsForUser(
  userId: string,
): Promise<CloudBackupListItem[]> {
  try {
    const { data, error } = await supabase.storage
      .from(BUCKET_NAME)
      .list(`users/${userId}/backups`, {
        limit: 100,
        sortBy: { column: "created_at", order: "desc" },
      });
    if (error || !data) return [];
    return data
      .filter((entry) => entry.name.endsWith(".json"))
      .map((entry) => ({
        fileName: entry.name,
        createdAt:
          (entry.created_at as string | undefined) ??
          (entry.updated_at as string | undefined) ??
          "",
        sizeKb: Math.max(
          1,
          Math.round(((entry.metadata?.size as number | undefined) ?? 0) / 1024),
        ),
      }));
  } catch {
    return [];
  }
}

export async function listCloudBackups(): Promise<CloudBackupListItem[]> {
  const userId = await getAuthUserId();
  if (!userId) return [];
  return listCloudBackupsForUser(userId);
}

export async function restoreFromCloud(
  fileName: string,
): Promise<RestoreResult> {
  if (!isSupabaseConfigured) {
    return {
      ok: false,
      restoredKeys: 0,
      error: "Bulut yedek için Supabase yapılandırılmamış.",
    };
  }
  const userId = await getAuthUserId();
  if (!userId) {
    return {
      ok: false,
      restoredKeys: 0,
      error: "Geri yüklemek için giriş yapmalısın.",
    };
  }
  const safeName = fileName.replace(/[^a-zA-Z0-9._-]/g, "");
  if (!safeName || !safeName.endsWith(".json")) {
    return { ok: false, restoredKeys: 0, error: "Geçersiz dosya adı." };
  }
  const path = objectPath(userId, safeName);

  let json: string;
  try {
    const { data, error } = await supabase.storage
      .from(BUCKET_NAME)
      .download(path);
    if (error || !data) {
      return {
        ok: false,
        restoredKeys: 0,
        error: error?.message ?? "Yedek indirilemedi.",
      };
    }
    // Blob → text. supabase-js returns a Blob even in RN.
    json = await (data as Blob).text();
  } catch (err) {
    return {
      ok: false,
      restoredKeys: 0,
      error:
        err instanceof Error ? err.message : "Yedek indirilemedi.",
    };
  }

  return restoreFromJSON(json);
}

export async function deleteCloudBackup(
  fileName: string,
): Promise<{ ok: boolean; error?: string }> {
  const userId = await getAuthUserId();
  if (!userId) return { ok: false, error: "Önce giriş yap." };
  const safeName = fileName.replace(/[^a-zA-Z0-9._-]/g, "");
  if (!safeName) return { ok: false, error: "Geçersiz dosya adı." };
  try {
    const { error } = await supabase.storage
      .from(BUCKET_NAME)
      .remove([objectPath(userId, safeName)]);
    if (error) return { ok: false, error: error.message };
    return { ok: true };
  } catch (err) {
    return {
      ok: false,
      error: err instanceof Error ? err.message : "Silme hatası.",
    };
  }
}

// ---------------------------------------------------------------------------
// Auto-backup preference (scheduling itself is not implemented here)
// ---------------------------------------------------------------------------

export async function getAutoBackupMode(): Promise<AutoBackupMode> {
  try {
    const raw = await AsyncStorage.getItem(K_AUTO_MODE);
    if (raw === "daily" || raw === "weekly") return raw;
    return "off";
  } catch {
    return "off";
  }
}

export async function setAutoBackupMode(mode: AutoBackupMode): Promise<void> {
  try {
    await AsyncStorage.setItem(K_AUTO_MODE, mode);
  } catch {
    // ignore
  }
}

// ---------------------------------------------------------------------------
// Danger zone — wipe all user data
// ---------------------------------------------------------------------------

/**
 * Remove every AsyncStorage key whose prefix is on the backup list. Does
 * NOT touch IAP mock state, debug flags, or other excluded keys. Intended
 * for the "Tüm verilerimi sil" action on the Backup screen.
 */
export async function wipeAllLocalData(): Promise<{ removed: number }> {
  try {
    const allKeys = await AsyncStorage.getAllKeys();
    const target = allKeys.filter(shouldBackupKey);
    if (target.length === 0) return { removed: 0 };
    await AsyncStorage.multiRemove(target);
    // Also clear the "last backup" marker since it's about the wiped state.
    await AsyncStorage.removeItem(K_LAST_AT).catch(() => {});
    return { removed: target.length };
  } catch {
    return { removed: 0 };
  }
}
