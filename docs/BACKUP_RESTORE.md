# Backup + Cloud Restore

Premium feature that lets users protect their local progress and restore it
on a new device.

## What gets backed up

A snapshot is a single JSON document (typically 5–200 KB) that contains the
raw `AsyncStorage` values for every key whose prefix is allow-listed in
[`apps/mobile/lib/backup-keys.ts`](../apps/mobile/lib/backup-keys.ts).
Top-level buckets:

| Bucket          | Source                              |
| --------------- | ----------------------------------- |
| `profile`       | `lafla.profile` (XP, streak, name)  |
| `lessons`       | `lafla.lessons`, `lafla.skills`, `lafla.daily`, `lafla.mode_fluency` |
| `cefr`          | `lafla.cefr.level`                  |
| `coach`         | `lafla.coach.state` (Maya memory)   |
| `program`       | `lafla.program.state` + plan progress |
| `mission`       | `lafla.mission.*`                   |
| `bookmarks`     | `lafla.bookmarks.*`                 |
| `achievements`  | `lafla.achievements.*`              |
| `dailyquests`   | `lafla.dailyquests.*`, `lafla.streak.*` |
| `journal`       | `lafla.journal.*`                   |
| `certificates`  | `lafla.certificate.*`               |
| `mistakes`      | `lafla.mistake.*`                   |
| `metrics`       | `lafla.metrics.*`, `lafla.speech_metrics.*` |
| `voiceSessions` | `lafla.voice.*`                     |
| `listening`     | `lafla.listening.*`                 |
| `reading`       | `lafla.reading.*`                   |
| `decks`         | `lafla.deck.*`, `lafla.cards.*`, `lafla.vocab.*` |
| `settings`      | `lafla.settings.*`, `lafla.onboarded`, `lafla.interests`, etc. |

### Explicitly excluded

These never appear in a snapshot — they would either leak debug state or
allow premium spoofing across devices:

- `lafla.premium.mock` (IAP mock state)
- `lafla.debug.*`
- `lafla.backup.*` (the backup metadata itself)
- `lafla.cache.*`, `lafla.audio_cache.*`
- `lafla.dev.*`

## Snapshot schema

```ts
interface BackupSnapshot {
  version: "1.0";
  createdAt: string;     // ISO8601
  deviceId: string;      // UUID v4, stable across launches on the device
  appVersion: string;    // from expo Constants
  data: { /* 18 buckets above, raw string values keyed by AsyncStorage key */ };
  meta: {
    totalKeys: number;
    sizeBytes: number;
  };
}
```

Restore is a byte-for-byte `multiSet` of every backed-up key — no JSON
re-encoding, no shape drift. Keys that are no longer on the backup list (e.g.
removed since the snapshot was made) are skipped defensively.

## Supabase setup

### 1. Storage bucket

Run [`supabase/migrations/00002_backups_bucket.sql`](../supabase/migrations/00002_backups_bucket.sql):

```bash
supabase db push
# or via SQL editor
```

The migration:

- Creates a private bucket `user-backups`.
- Adds four RLS policies on `storage.objects` scoped to the bucket and the
  `users/{auth.uid()}/` prefix, allowing the user to upload, list, download,
  and delete only their own files. No public access.

### 2. Client wiring

`apps/mobile/lib/backup.ts` reads the standard `EXPO_PUBLIC_SUPABASE_URL` and
`EXPO_PUBLIC_SUPABASE_ANON_KEY` via the existing `lib/supabase.ts` client.
No new env vars are needed.

### 3. Path layout

```
user-backups/
  users/
    {auth.uid()}/
      backups/
        2026-05-14T12-34-56-789Z_a1b2c3d4.json
        ...
```

Client-side pruning keeps the last 5 backups per user (`MAX_BACKUPS_PER_USER`
in `backup.ts`).

## UX flow

The Backup screen at `/backup` exposes:

1. **Status row** — "Son yedek: 2 saat önce" or "Henüz yedek yok".
2. **Pro gate** — if `isPremium()` is false, a yellow CTA card pushes to
   `/paywall`.
3. **Bulut yedek** — "Şimdi yedekle" button + list of cloud backups with
   per-row "Geri yükle" / "Sil". Auto-cadence toggle stored as a preference
   only; scheduling is out of scope.
4. **Dosya olarak** — Export the snapshot as JSON text (future: hand off to
   `expo-sharing`). Paste-import for restore.
5. **Tehlikeli bölge** — "Tüm verilerimi sil" requires typing `SİL` to
   confirm before wiping every backed-up key.

## Public API (lib/backup.ts)

```ts
buildBackupSnapshot(): Promise<BackupSnapshot>
exportBackupAsJSON(): Promise<string>
uploadBackupToCloud(): Promise<{ ok: boolean; url?: string; error?: string }>
listCloudBackups(): Promise<{ fileName: string; createdAt: string; sizeKb: number }[]>
restoreFromCloud(fileName: string): Promise<{ ok: boolean; restoredKeys: number; error?: string }>
restoreFromJSON(json: string): Promise<{ ok: boolean; restoredKeys: number; error?: string }>
deleteCloudBackup(fileName: string): Promise<{ ok: boolean; error?: string }>
getLastBackupAt(): Promise<string | null>
getAutoBackupMode(): Promise<"off" | "daily" | "weekly">
setAutoBackupMode(mode: "off" | "daily" | "weekly"): Promise<void>
wipeAllLocalData(): Promise<{ removed: number }>
```

`uploadBackupToCloud` short-circuits unless:

- Supabase is configured.
- `auth.getUser()` returns a signed-in user.
- `isPremium()` returns true.

## Safety rules

- Every destructive action in the UI requires an explicit Alert
  confirmation. The wipe path additionally requires the user to type `SİL`.
- Restore overwrites the local AsyncStorage value for each backed-up key
  present in the snapshot, but leaves untouched any local key not covered.
- The IAP mock key is excluded from backups, so a user cannot smuggle Pro
  status across devices via export/import.
- All UI copy is adult Turkish, safety-first
  ("Bu işlem mevcut verilerini değiştirecek. Devam mı?").

## Integration TODO

`apps/mobile/app/settings.tsx` should expose the new route. Add a row in
the "HESAP" section:

```tsx
<Row label="Yedek + Geri Yükleme" onPress={() => router.push("/backup" as never)} />
```

(Intentionally not edited from this change — covered by a separate task.)

## Future work

- Plug `expo-sharing` + `expo-document-picker` so export becomes a real
  file-system flow instead of paste-text.
- Wire actual scheduling for the daily/weekly auto-backup preference using
  `expo-task-manager` / `expo-background-fetch`.
- Compress snapshots with `pako`/`gzip` before upload (10–40% smaller for
  typical sizes).
- Server-side retention cap (currently client-side only).
