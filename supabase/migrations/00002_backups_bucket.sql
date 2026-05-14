-- Lafla — Backup + Cloud Restore (Premium feature).
--
-- Creates a private storage bucket "user-backups" and the RLS policies that
-- let an authenticated user manage ONLY the files under their own prefix
-- (`users/{auth.uid()}/`). No public access. No cross-user reads or writes.
--
-- Storage objects layout:
--   users/{auth.uid()}/backups/{timestamp}_{deviceTag}.json
--
-- Pruning to MAX_BACKUPS_PER_USER (=5) happens client-side after each
-- successful upload — see apps/mobile/lib/backup.ts: pruneOldBackups().

-- ============================================================
-- Bucket
-- ============================================================
insert into storage.buckets (id, name, public)
values ('user-backups', 'user-backups', false)
on conflict (id) do nothing;

-- ============================================================
-- RLS policies on storage.objects, scoped to the user-backups bucket.
-- Path convention: users/{auth.uid()}/...
-- (storage.foldername(name)[1] = 'users'; ...[2] = auth.uid())
-- ============================================================

-- INSERT: user uploads their own backup
create policy "Users upload own backups"
  on storage.objects for insert
  with check (
    bucket_id = 'user-backups'
    and (storage.foldername(name))[1] = 'users'
    and (storage.foldername(name))[2] = auth.uid()::text
  );

-- SELECT: user lists/reads their own backups
create policy "Users read own backups"
  on storage.objects for select
  using (
    bucket_id = 'user-backups'
    and (storage.foldername(name))[1] = 'users'
    and (storage.foldername(name))[2] = auth.uid()::text
  );

-- UPDATE: user can replace metadata on their own objects (rarely needed,
-- but `upload(..., { upsert: true })` will use this path).
create policy "Users update own backups"
  on storage.objects for update
  using (
    bucket_id = 'user-backups'
    and (storage.foldername(name))[1] = 'users'
    and (storage.foldername(name))[2] = auth.uid()::text
  );

-- DELETE: user deletes their own backups (pruning + manual delete)
create policy "Users delete own backups"
  on storage.objects for delete
  using (
    bucket_id = 'user-backups'
    and (storage.foldername(name))[1] = 'users'
    and (storage.foldername(name))[2] = auth.uid()::text
  );
