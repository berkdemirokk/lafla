-- Lafla - verified entitlements, atomic LLM quotas, and webhook processing.

-- 1. RevenueCat-backed subscription state.
create table public.user_subscriptions (
  user_id uuid primary key references auth.users(id) on delete cascade,
  is_premium boolean default false not null,
  expires_at timestamptz,
  last_event_timestamp timestamptz not null,
  created_at timestamptz default now() not null,
  updated_at timestamptz default now() not null
);

alter table public.user_subscriptions enable row level security;

create policy "Users read own subscription"
  on public.user_subscriptions
  for select
  to authenticated
  using (auth.uid() = user_id);

-- 2. Processed webhook event IDs provide transaction-level idempotency.
create table public.revenuecat_events (
  event_id text primary key,
  created_at timestamptz default now() not null
);

alter table public.revenuecat_events enable row level security;

-- 3. Daily successful/pending free-chat reservations.
create table public.freechat_usage (
  user_id uuid references auth.users(id) on delete cascade not null,
  usage_date date not null,
  turns_count integer default 0 not null check (turns_count >= 0),
  primary key (user_id, usage_date)
);

alter table public.freechat_usage enable row level security;

create policy "Users read own daily usage"
  on public.freechat_usage
  for select
  to authenticated
  using (auth.uid() = user_id);

-- 4. Reservations make provider failures refundable.
create table public.freechat_reservations (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete cascade not null,
  usage_date date not null,
  status text default 'pending' not null
    check (status in ('pending', 'finalized', 'released')),
  expires_at timestamptz default (now() + interval '5 minutes') not null,
  created_at timestamptz default now() not null
);

create index freechat_reservations_pending_user
  on public.freechat_reservations (user_id, expires_at)
  where status = 'pending';

alter table public.freechat_reservations enable row level security;

create policy "Users read own reservations"
  on public.freechat_reservations
  for select
  to authenticated
  using (auth.uid() = user_id);

-- 5. Per-user leaky token bucket: at most 10 accepted attempts per minute.
create table public.user_rate_limits (
  user_id uuid primary key references auth.users(id) on delete cascade,
  tokens numeric default 0 not null check (tokens >= 0),
  last_leak_at timestamptz default now() not null
);

alter table public.user_rate_limits enable row level security;

create policy "Users read own rate limits"
  on public.user_rate_limits
  for select
  to authenticated
  using (auth.uid() = user_id);

-- Explicit table privileges. RLS still restricts SELECT to the caller's rows.
revoke all on public.user_subscriptions from anon, authenticated;
revoke all on public.revenuecat_events from anon, authenticated;
revoke all on public.freechat_usage from anon, authenticated;
revoke all on public.freechat_reservations from anon, authenticated;
revoke all on public.user_rate_limits from anon, authenticated;

grant select on public.user_subscriptions to authenticated;
grant select on public.freechat_usage to authenticated;
grant select on public.freechat_reservations to authenticated;
grant select on public.user_rate_limits to authenticated;

-- Premium and leaderboard fields are server-owned.
revoke update on public.profiles from authenticated;
grant update (
  display_name,
  interests,
  onboarding_completed_at
) on public.profiles to authenticated;

-- 6. Mirror authoritative subscription state to the existing profile contract.
create or replace function public.sync_profile_subscription()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  update public.profiles
  set
    is_premium = new.is_premium,
    premium_expires_at = new.expires_at
  where id = new.user_id;
  return new;
end;
$$;

revoke all on function public.sync_profile_subscription() from public;

create trigger on_subscription_change
  after insert or update on public.user_subscriptions
  for each row execute function public.sync_profile_subscription();

-- 7. Return today's usage. Expired reservations are released first so a
-- worker crash cannot leave the client permanently paywalled.
create or replace function public.get_freechat_usage()
returns integer
language plpgsql
security definer
set search_path = public
as $$
declare
  v_user_id uuid := auth.uid();
  v_today date := (now() at time zone 'UTC')::date;
  v_turns integer;
begin
  if v_user_id is null then
    raise exception 'authentication required' using errcode = '42501';
  end if;

  perform pg_advisory_xact_lock(hashtextextended(v_user_id::text, 0));

  with released as (
    update public.freechat_reservations
    set status = 'released'
    where user_id = v_user_id
      and status = 'pending'
      and expires_at < now()
    returning usage_date
  ),
  released_counts as (
    select usage_date, count(*)::integer as count
    from released
    group by usage_date
  )
  update public.freechat_usage as usage
  set turns_count = greatest(0, usage.turns_count - released_counts.count)
  from released_counts
  where usage.user_id = v_user_id
    and usage.usage_date = released_counts.usage_date;

  select turns_count
  into v_turns
  from public.freechat_usage
  where user_id = v_user_id
    and usage_date = v_today;

  return coalesce(v_turns, 0);
end;
$$;

revoke all on function public.get_freechat_usage() from public;
revoke all on function public.get_freechat_usage() from anon;
grant execute on function public.get_freechat_usage() to authenticated;

-- 8. Atomically reserve one provider attempt for the authenticated user.
create or replace function public.reserve_usage()
returns jsonb
language plpgsql
security definer
set search_path = public
as $$
declare
  v_user_id uuid := auth.uid();
  v_today date := (now() at time zone 'UTC')::date;
  v_is_premium boolean := false;
  v_expires_at timestamptz;
  v_current_turns integer;
  v_daily_limit integer := 5;
  v_reservation_id uuid;
  v_tokens numeric;
  v_last_leak_at timestamptz;
  v_elapsed_seconds numeric;
  v_leak_rate numeric := 10.0 / 60.0;
  v_max_bucket numeric := 10.0;
begin
  if v_user_id is null then
    raise exception 'authentication required' using errcode = '42501';
  end if;

  -- Serializes cleanup, quota, and token-bucket mutations for this user.
  perform pg_advisory_xact_lock(hashtextextended(v_user_id::text, 0));

  with released as (
    update public.freechat_reservations
    set status = 'released'
    where user_id = v_user_id
      and status = 'pending'
      and expires_at < now()
    returning usage_date
  ),
  released_counts as (
    select usage_date, count(*)::integer as count
    from released
    group by usage_date
  )
  update public.freechat_usage as usage
  set turns_count = greatest(0, usage.turns_count - released_counts.count)
  from released_counts
  where usage.user_id = v_user_id
    and usage.usage_date = released_counts.usage_date;

  select is_premium, expires_at
  into v_is_premium, v_expires_at
  from public.user_subscriptions
  where user_id = v_user_id;

  if coalesce(v_is_premium, false)
    and (v_expires_at is null or v_expires_at > now()) then
    v_daily_limit := 1000;
  end if;

  insert into public.freechat_usage (user_id, usage_date, turns_count)
  values (v_user_id, v_today, 0)
  on conflict (user_id, usage_date) do nothing;

  select turns_count
  into v_current_turns
  from public.freechat_usage
  where user_id = v_user_id
    and usage_date = v_today
  for update;

  if v_current_turns >= v_daily_limit then
    return jsonb_build_object(
      'allowed', false,
      'reason', 'paywall_limit_reached',
      'current_turns', v_current_turns,
      'limit', v_daily_limit
    );
  end if;

  insert into public.user_rate_limits (user_id, tokens, last_leak_at)
  values (v_user_id, 0, now())
  on conflict (user_id) do nothing;

  select tokens, last_leak_at
  into v_tokens, v_last_leak_at
  from public.user_rate_limits
  where user_id = v_user_id
  for update;

  v_elapsed_seconds := extract(epoch from (now() - v_last_leak_at));
  v_tokens := greatest(0, v_tokens - (v_elapsed_seconds * v_leak_rate));

  if v_tokens + 1 > v_max_bucket then
    update public.user_rate_limits
    set tokens = v_tokens,
        last_leak_at = now()
    where user_id = v_user_id;

    return jsonb_build_object(
      'allowed', false,
      'reason', 'rate_limit_exceeded',
      'current_turns', v_current_turns,
      'limit', v_daily_limit
    );
  end if;

  update public.user_rate_limits
  set tokens = v_tokens + 1,
      last_leak_at = now()
  where user_id = v_user_id;

  update public.freechat_usage
  set turns_count = turns_count + 1
  where user_id = v_user_id
    and usage_date = v_today
  returning turns_count into v_current_turns;

  insert into public.freechat_reservations (
    user_id,
    usage_date,
    status
  )
  values (
    v_user_id,
    v_today,
    'pending'
  )
  returning id into v_reservation_id;

  return jsonb_build_object(
    'allowed', true,
    'reservation_id', v_reservation_id,
    'current_turns', v_current_turns,
    'limit', v_daily_limit
  );
end;
$$;

revoke all on function public.reserve_usage() from public;
revoke all on function public.reserve_usage() from anon;
grant execute on function public.reserve_usage() to authenticated;

-- 9. Only the service-role Edge Function can finalize or refund reservations.
create or replace function public.finalize_usage(p_reservation_id uuid)
returns boolean
language plpgsql
security definer
set search_path = public
as $$
declare
  v_row_count integer;
begin
  update public.freechat_reservations
  set status = 'finalized'
  where id = p_reservation_id
    and status = 'pending';

  get diagnostics v_row_count = row_count;
  return v_row_count > 0;
end;
$$;

revoke all on function public.finalize_usage(uuid) from public;
revoke all on function public.finalize_usage(uuid) from anon;
revoke all on function public.finalize_usage(uuid) from authenticated;
grant execute on function public.finalize_usage(uuid) to service_role;

create or replace function public.release_usage(p_reservation_id uuid)
returns boolean
language plpgsql
security definer
set search_path = public
as $$
declare
  v_user_id uuid;
  v_usage_date date;
  v_row_count integer;
begin
  select user_id, usage_date
  into v_user_id, v_usage_date
  from public.freechat_reservations
  where id = p_reservation_id;

  if v_user_id is null then
    return false;
  end if;

  perform pg_advisory_xact_lock(hashtextextended(v_user_id::text, 0));

  update public.freechat_reservations
  set status = 'released'
  where id = p_reservation_id
    and status = 'pending';

  get diagnostics v_row_count = row_count;

  if v_row_count > 0 then
    update public.freechat_usage
    set turns_count = greatest(0, turns_count - 1)
    where user_id = v_user_id
      and usage_date = v_usage_date;
  end if;

  return v_row_count > 0;
end;
$$;

revoke all on function public.release_usage(uuid) from public;
revoke all on function public.release_usage(uuid) from anon;
revoke all on function public.release_usage(uuid) from authenticated;
grant execute on function public.release_usage(uuid) to service_role;

-- 10. Idempotently apply authoritative RevenueCat subscriber state.
create or replace function public.process_revenuecat_event(
  p_event_id text,
  p_user_id uuid,
  p_is_premium boolean,
  p_expires_at timestamptz,
  p_event_timestamp timestamptz
)
returns boolean
language plpgsql
security definer
set search_path = public
as $$
declare
  v_inserted_event_id text;
begin
  if p_event_id is null or btrim(p_event_id) = '' then
    raise exception 'event id is required' using errcode = '22023';
  end if;

  insert into public.revenuecat_events (event_id)
  values (p_event_id)
  on conflict (event_id) do nothing
  returning event_id into v_inserted_event_id;

  if v_inserted_event_id is null then
    return false;
  end if;

  insert into public.user_subscriptions (
    user_id,
    is_premium,
    expires_at,
    last_event_timestamp
  )
  values (
    p_user_id,
    p_is_premium,
    p_expires_at,
    p_event_timestamp
  )
  on conflict (user_id) do update
  set
    is_premium = excluded.is_premium,
    expires_at = excluded.expires_at,
    last_event_timestamp = excluded.last_event_timestamp,
    updated_at = now()
  where excluded.last_event_timestamp >
    user_subscriptions.last_event_timestamp;

  return true;
end;
$$;

revoke all on function public.process_revenuecat_event(
  text,
  uuid,
  boolean,
  timestamptz,
  timestamptz
) from public;
revoke all on function public.process_revenuecat_event(
  text,
  uuid,
  boolean,
  timestamptz,
  timestamptz
) from anon;
revoke all on function public.process_revenuecat_event(
  text,
  uuid,
  boolean,
  timestamptz,
  timestamptz
) from authenticated;
grant execute on function public.process_revenuecat_event(
  text,
  uuid,
  boolean,
  timestamptz,
  timestamptz
) to service_role;
