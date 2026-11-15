-- Referral codes and attribution are changed only by validated server calls.
revoke update (referral_code, redeemed_referral_code, referral_bonus_awarded_at)
  on table public.profiles from public, anon, authenticated;

create or replace function public.get_or_create_referral_code()
returns text
language plpgsql
security definer
set search_path = public
as $$
declare
  caller uuid := auth.uid();
  code text;
  attempt integer;
begin
  if caller is null then raise exception 'authentication required' using errcode = '42501'; end if;
  select referral_code into code from public.profiles where id = caller for update;
  if not found then raise exception 'profile not found'; end if;
  if code is not null then return code; end if;
  for attempt in 1..20 loop
    code := upper(substr(replace(gen_random_uuid()::text, '-', ''), 1, 6));
    begin
      update public.profiles set referral_code = code where id = caller;
      return code;
    exception when unique_violation then
      -- Another profile already owns this code; generate another.
    end;
  end loop;
  raise exception 'unable to allocate referral code';
end;
$$;

create or replace function public.redeem_referral_code(candidate text)
returns boolean
language plpgsql
security definer
set search_path = public
as $$
declare
  caller uuid := auth.uid();
  own_code text;
  existing_code text;
  normalized text := upper(trim(candidate));
begin
  if caller is null then raise exception 'authentication required' using errcode = '42501'; end if;
  if normalized is null or normalized !~ '^[A-Z0-9]{4,32}$' then return false; end if;
  select referral_code, redeemed_referral_code into own_code, existing_code
    from public.profiles where id = caller for update;
  if not found then raise exception 'profile not found'; end if;
  if existing_code is not null or own_code = normalized then return false; end if;
  if not exists (select 1 from public.profiles where referral_code = normalized and id <> caller) then
    return false;
  end if;
  update public.profiles set redeemed_referral_code = normalized where id = caller;
  return true;
end;
$$;

revoke all on function public.get_or_create_referral_code() from public, anon;
revoke all on function public.redeem_referral_code(text) from public, anon;
grant execute on function public.get_or_create_referral_code() to authenticated;
grant execute on function public.redeem_referral_code(text) to authenticated;
