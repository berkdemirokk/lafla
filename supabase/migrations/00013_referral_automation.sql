-- Lafla growth automation: atomic referral redemption and a durable reward queue.
create table if not exists public.referral_reward_jobs (
  id bigint generated always as identity primary key,
  redeemer_id uuid not null references public.profiles(id) on delete cascade,
  referrer_id uuid not null references public.profiles(id) on delete cascade,
  referral_code text not null,
  status text not null default 'pending' check (status in ('pending', 'processing', 'fulfilled', 'failed')),
  attempts integer not null default 0,
  last_error text,
  fulfilled_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (redeemer_id)
);

create index if not exists referral_reward_jobs_pending_idx
  on public.referral_reward_jobs (created_at) where status = 'pending';

alter table public.referral_reward_jobs enable row level security;

create trigger referral_reward_jobs_updated_at
  before update on public.referral_reward_jobs
  for each row execute function public.tick_updated_at();

create or replace function public.redeem_referral_code(input_code text)
returns boolean
language plpgsql security definer set search_path = public
as $$
declare
  normalized_code text := upper(trim(input_code));
  caller_id uuid := auth.uid();
  referrer_id uuid;
begin
  if caller_id is null or normalized_code !~ '^[ABCDEFGHJKLMNPQRSTUVWXYZ23456789]{6}$' then return false; end if;
  perform 1 from public.profiles where id = caller_id for update;
  if not found then return false; end if;
  if exists (select 1 from public.profiles where id = caller_id and redeemed_referral_code is not null) then return false; end if;
  select id into referrer_id from public.profiles where referral_code = normalized_code;
  if referrer_id is null or referrer_id = caller_id then return false; end if;
  update public.profiles set redeemed_referral_code = normalized_code where id = caller_id;
  insert into public.referral_reward_jobs (redeemer_id, referrer_id, referral_code)
  values (caller_id, referrer_id, normalized_code);
  return true;
end;
$$;

revoke all on function public.redeem_referral_code(text) from public;
grant execute on function public.redeem_referral_code(text) to authenticated;
