-- Lafla - explicit object privileges for current Supabase/Postgres roles.
--
-- RLS policies decide which rows a role may access, but PostgreSQL still
-- requires table/sequence privileges before RLS is evaluated. Do not rely on
-- CLI- or owner-specific default privileges: they have changed across local
-- Supabase versions and can make authenticated/service-role calls fail before
-- the policy layer is reached.

-- Older production history recorded 00003 before the audit table was added to
-- that migration. Repair that historical drift here instead of rewriting an
-- already-recorded migration.
create table if not exists public.account_deletion_log (
  id bigserial primary key,
  user_id_hash text not null,
  actor text not null default 'self',
  reason text,
  deleted_at timestamptz default now() not null
);

alter table public.account_deletion_log enable row level security;

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
  insert into public.account_deletion_log (user_id_hash, actor, reason)
  values (encode(digest(p_user_id::text, 'sha256'), 'hex'), p_actor, p_reason);
end;
$$;

grant usage on schema public to authenticated, service_role;

-- Public clients never access application tables anonymously.
revoke all on table
  public.profiles,
  public.lesson_state,
  public.skill_mastery,
  public.attempts,
  public.daily_activity,
  public.account_deletion_log,
  public.apple_credentials,
  public.push_tokens,
  public.user_subscriptions,
  public.revenuecat_events,
  public.freechat_usage,
  public.freechat_reservations,
  public.user_rate_limits
from anon;

-- Authenticated client access mirrors the existing RLS policies.
revoke all on table public.profiles from authenticated;
grant select on table public.profiles to authenticated;
grant update (
  display_name,
  interests,
  onboarding_completed_at
) on table public.profiles to authenticated;

grant select, insert, update, delete on table
  public.lesson_state,
  public.skill_mastery,
  public.daily_activity,
  public.push_tokens
to authenticated;

grant select, insert on table public.attempts to authenticated;
grant usage, select on sequence public.attempts_id_seq to authenticated;

revoke all on table
  public.account_deletion_log,
  public.apple_credentials,
  public.revenuecat_events
from authenticated;

revoke all on table
  public.user_subscriptions,
  public.freechat_usage,
  public.freechat_reservations,
  public.user_rate_limits
from authenticated;

grant select on table
  public.user_subscriptions,
  public.freechat_usage,
  public.freechat_reservations,
  public.user_rate_limits
to authenticated;

-- Edge Functions use service_role. RLS bypass alone does not grant object
-- privileges, so backend reads/writes must also be explicit.
grant all on table
  public.profiles,
  public.lesson_state,
  public.skill_mastery,
  public.attempts,
  public.daily_activity,
  public.account_deletion_log,
  public.apple_credentials,
  public.push_tokens,
  public.user_subscriptions,
  public.revenuecat_events,
  public.freechat_usage,
  public.freechat_reservations,
  public.user_rate_limits
to service_role;

grant all on sequence
  public.attempts_id_seq,
  public.account_deletion_log_id_seq
to service_role;

-- Trigger helpers are not public RPCs.
revoke all on function public.handle_new_user() from public;
revoke all on function public.tick_updated_at() from public;
revoke all on function public.touch_apple_credentials_updated_at() from public;

-- Only the deletion Edge Function may add compliance audit entries.
revoke all on function public.log_account_deletion(uuid, text, text) from public;
revoke all on function public.log_account_deletion(uuid, text, text) from anon;
revoke all on function public.log_account_deletion(uuid, text, text) from authenticated;
grant execute on function public.log_account_deletion(uuid, text, text) to service_role;
