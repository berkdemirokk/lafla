begin;

create extension if not exists pgtap;
select plan(19);

create or replace function test_login(p_user_id uuid) returns void as $$
begin
  perform set_config('role', 'authenticated', true);
  perform set_config('request.jwt.claim.sub', p_user_id::text, true);
  perform set_config(
    'request.jwt.claims',
    json_build_object('sub', p_user_id::text)::text,
    true
  );
end;
$$ language plpgsql;

create or replace function test_service_role() returns void as $$
begin
  perform set_config('role', 'service_role', true);
  perform set_config('request.jwt.claim.sub', '', true);
  perform set_config('request.jwt.claims', '{}'::text, true);
end;
$$ language plpgsql;

insert into auth.users (id, email)
values
  ('11111111-1111-1111-1111-111111111111', 'user1@example.com'),
  ('22222222-2222-2222-2222-222222222222', 'user2@example.com')
on conflict (id) do nothing;

insert into public.profiles (id, display_name)
values
  ('11111111-1111-1111-1111-111111111111', 'User One'),
  ('22222222-2222-2222-2222-222222222222', 'User Two')
on conflict (id) do nothing;

select test_login('11111111-1111-1111-1111-111111111111');

select ok(public.consume_pronunciation_quota(),
  'authenticated user can consume pronunciation quota');

select throws_ok(
  $$ select count(*) from public.pronunciation_rate_limits $$,
  '42501',
  null,
  'authenticated user cannot read private pronunciation quota rows'
);

select lives_ok(
  $$ select public.consume_pronunciation_quota() from generate_series(1, 11) $$,
  'pronunciation quota permits the first twelve requests in a window'
);

select isnt(public.consume_pronunciation_quota(), true,
  'pronunciation quota rejects the thirteenth request in a window');

select lives_ok(
  $$ update public.profiles set display_name = 'Updated One' where id = '11111111-1111-1111-1111-111111111111' $$,
  'authenticated user can update editable profile columns'
);

select throws_ok(
  $$ update public.profiles set is_premium = true where id = '11111111-1111-1111-1111-111111111111' $$,
  '42501',
  null,
  'authenticated user cannot update server-owned premium columns'
);

select throws_ok(
  $$ insert into public.user_subscriptions (user_id, is_premium, last_event_timestamp) values ('11111111-1111-1111-1111-111111111111', true, now()) $$,
  '42501',
  null,
  'authenticated user cannot write subscription rows directly'
);

select test_service_role();

select lives_ok(
  $$ select public.process_revenuecat_event('evt_user2_premium', '22222222-2222-2222-2222-222222222222', true, now() + interval '1 month', now()) $$,
  'service role can process a RevenueCat event'
);

select results_eq(
  $$ select is_premium from public.profiles where id = '22222222-2222-2222-2222-222222222222' $$,
  $$ select true $$,
  'subscription trigger mirrors premium state to profiles'
);

select results_eq(
  $$ select public.process_revenuecat_event('evt_user2_premium', '22222222-2222-2222-2222-222222222222', false, now() - interval '1 day', now() + interval '1 minute') $$,
  $$ select false $$,
  'duplicate RevenueCat event ID is idempotent'
);

select lives_ok(
  $$ select public.process_revenuecat_event('evt_user2_old', '22222222-2222-2222-2222-222222222222', false, now() - interval '1 day', now() - interval '1 hour') $$,
  'older out-of-order RevenueCat event is recorded without raising'
);

select results_eq(
  $$ select is_premium from public.user_subscriptions where user_id = '22222222-2222-2222-2222-222222222222' $$,
  $$ select true $$,
  'older out-of-order event does not overwrite newer premium state'
);

select hasnt_function('public', 'get_freechat_usage', array[]::name[],
  'runtime LLM usage reader is retired');
select hasnt_function('public', 'reserve_usage', array[]::name[],
  'runtime LLM reservation function is retired');
select hasnt_function('public', 'finalize_usage', array['uuid']::name[],
  'runtime LLM finalizer is retired');
select hasnt_function('public', 'release_usage', array['uuid']::name[],
  'runtime LLM refund function is retired');
select hasnt_table('public', 'freechat_usage',
  'runtime LLM usage table is retired');
select hasnt_table('public', 'freechat_reservations',
  'runtime LLM reservation table is retired');
select hasnt_table('public', 'user_rate_limits',
  'runtime LLM token bucket is retired');

select * from finish();
rollback;
