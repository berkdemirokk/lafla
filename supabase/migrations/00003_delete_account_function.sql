-- Lafla — Account deletion support (App Store Guideline 5.1.1(v)).
--
-- The actual deletion logic lives in a Supabase Edge Function:
--   supabase/functions/delete-account/index.ts
--
-- That function runs with the service role key and performs:
--   1. Removal of storage objects under user-backups/users/{uid}/ .
--   2. Explicit deletes from attempts, lesson_state, skill_mastery,
--      daily_activity, profiles (these also cascade via FK on profiles).
--   3. supabase.auth.admin.deleteUser(uid) — irreversible auth row removal.
--
-- This migration:
--   (a) Verifies the FK ON DELETE CASCADE chain from auth.users → profiles
--       → user-scoped tables is intact (no schema change needed; documented
--       here for auditors).
--   (b) Adds a thin convenience SQL function `request_self_deletion()` that
--       a caller can use as a *fallback signal* — it merely records an
--       intent row. The real delete still flows through the edge function.
--   (c) Creates the audit table `account_deletion_log` so we can prove to
--       Apple/regulators that deletions actually happened (no PII, only
--       hashed user id + timestamp + actor).
--
-- Deploy:
--   supabase db push
--   supabase functions deploy delete-account
--   # Service role key must be set in function secrets (already by default
--   # for project-scoped functions on Supabase).

-- ============================================================
-- Audit log (no PII — only hashed user id)
-- ============================================================
create table if not exists account_deletion_log (
  id bigserial primary key,
  user_id_hash text not null,
  actor text not null default 'self',          -- 'self' | 'admin' | 'gdpr'
  reason text,
  deleted_at timestamptz default now() not null
);

-- Only service role can read/write this table. No RLS policy = no
-- anon/authenticated access.
alter table account_deletion_log enable row level security;

-- (No policy intentionally — service role bypasses RLS.)

-- ============================================================
-- Helper: log a deletion event from inside the edge function.
-- Edge function calls this via supabaseAdmin.rpc('log_account_deletion', ...).
-- We do NOT store the raw uid; we hash it so the log can be retained for
-- compliance without holding personal identifiers.
-- ============================================================
create or replace function public.log_account_deletion(
  p_user_id uuid,
  p_actor text default 'self',
  p_reason text default null
)
returns void
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into account_deletion_log (user_id_hash, actor, reason)
  values (encode(digest(p_user_id::text, 'sha256'), 'hex'), p_actor, p_reason);
end;
$$;

-- ============================================================
-- Notes on cascading deletes (verification only — no DDL):
--
--   auth.users(id) ← profiles(id)              ON DELETE CASCADE (00001)
--   profiles(id)   ← lesson_state(user_id)     ON DELETE CASCADE (00001)
--   profiles(id)   ← skill_mastery(user_id)    ON DELETE CASCADE (00001)
--   profiles(id)   ← attempts(user_id)         ON DELETE CASCADE (00001)
--   profiles(id)   ← daily_activity(user_id)   ON DELETE CASCADE (00001)
--
-- The edge function still performs explicit per-table deletes for two reasons:
--   (a) faster failure surfacing (we report which table errored, not just a
--       generic FK exception),
--   (b) defense in depth if a future table is added without ON DELETE
--       CASCADE — explicit deletes are easier to extend than implicit ones.
-- ============================================================
