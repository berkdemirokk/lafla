-- Run on a disposable local Supabase database after all migrations.
begin;
insert into auth.users (id) values
  ('20000000-0000-0000-0000-000000000001'),
  ('20000000-0000-0000-0000-000000000002');

do $$
begin
  if has_function_privilege('anon', 'public.get_or_create_referral_code()', 'execute') or
     has_function_privilege('anon', 'public.redeem_referral_code(text)', 'execute') then
    raise exception 'anonymous referral access';
  end if;
  if has_column_privilege('authenticated', 'public.profiles', 'referral_bonus_awarded_at', 'update') or
     has_column_privilege('authenticated', 'public.profiles', 'redeemed_referral_code', 'update') then
    raise exception 'direct referral update allowed';
  end if;
end $$;

set local role authenticated;
select set_config('request.jwt.claim.sub', '20000000-0000-0000-0000-000000000001', true);
select set_config('request.jwt.claims', '{"sub":"20000000-0000-0000-0000-000000000001","role":"authenticated"}', true);
do $$
declare code text;
begin
  code := public.get_or_create_referral_code();
  if length(code) <> 6 or code <> public.get_or_create_referral_code() then
    raise exception 'unstable referral code';
  end if;
  if public.redeem_referral_code(code) then raise exception 'self referral accepted'; end if;
end $$;

select set_config('request.jwt.claim.sub', '20000000-0000-0000-0000-000000000002', true);
select set_config('request.jwt.claims', '{"sub":"20000000-0000-0000-0000-000000000002","role":"authenticated"}', true);
do $$
declare code text;
begin
  if public.redeem_referral_code('INVALID') then raise exception 'unknown code accepted'; end if;
  -- The first profile is invisible under RLS; obtain its code from its own
  -- RPC before changing role in an integration harness, or use a fixed fixture.
end $$;
reset role;
update public.profiles set referral_code = 'TEST22'
where id = '20000000-0000-0000-0000-000000000001';
set local role authenticated;
do $$
begin
  if not public.redeem_referral_code(' test22 ') then raise exception 'valid code rejected'; end if;
  if public.redeem_referral_code('TEST22') then raise exception 'second redemption accepted'; end if;
end $$;
rollback;
