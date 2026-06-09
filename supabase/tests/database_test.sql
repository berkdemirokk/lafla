begin;

create extension if not exists pgtap;
select plan(24);

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
  ('22222222-2222-2222-2222-222222222222', 'user2@example.com'),
  ('33333333-3333-3333-3333-333333333333', 'user3@example.com')
on conflict (id) do nothing;

insert into public.profiles (id, display_name)
values
  ('11111111-1111-1111-1111-111111111111', 'User One'),
  ('22222222-2222-2222-2222-222222222222', 'User Two'),
  ('33333333-3333-3333-3333-333333333333', 'User Three')
on conflict (id) do nothing;

select test_login('11111111-1111-1111-1111-111111111111');

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

select results_eq(
  $$ select public.get_freechat_usage() $$,
  $$ select 0 $$,
  'initial usage for the current UTC day is zero'
);

select results_eq(
  $$ select (public.reserve_usage()->>'allowed')::boolean $$,
  $$ select true $$,
  'reserve_usage allows the first free request'
);

select results_eq(
  $$ select (public.reserve_usage()->>'current_turns')::integer $$,
  $$ select 2 $$,
  'reserve_usage returns the authoritative current turn count'
);

select results_eq(
  $$ select count(*)::integer from public.freechat_reservations where user_id = '11111111-1111-1111-1111-111111111111' and status = 'pending' $$,
  $$ select 2 $$,
  'new reservations start as pending'
);

select test_service_role();

select results_eq(
  $$ select public.release_usage((select id from public.freechat_reservations where user_id = '11111111-1111-1111-1111-111111111111' order by id limit 1)) $$,
  $$ select true $$,
  'service role can release a pending reservation'
);

select results_eq(
  $$ select status from public.freechat_reservations where id = (select id from public.freechat_reservations where user_id = '11111111-1111-1111-1111-111111111111' order by id limit 1) $$,
  $$ select 'released'::text $$,
  'released reservations are marked released'
);

select test_login('11111111-1111-1111-1111-111111111111');

select results_eq(
  $$ select public.get_freechat_usage() $$,
  $$ select 1 $$,
  'released reservation decrements only the released turn'
);

select test_login('33333333-3333-3333-3333-333333333333');

select lives_ok(
  $$ select public.reserve_usage() from generate_series(1, 5) $$,
  'free users can reserve exactly five turns'
);

select results_eq(
  $$ select public.get_freechat_usage() $$,
  $$ select 5 $$,
  'free usage count reaches five'
);

select results_eq(
  $$ select (public.reserve_usage()->>'allowed')::boolean $$,
  $$ select false $$,
  'sixth free request is rejected'
);

select results_eq(
  $$ select public.reserve_usage()->>'reason' $$,
  $$ select 'paywall_limit_reached'::text $$,
  'sixth free request is rejected by paywall limit'
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

select test_login('22222222-2222-2222-2222-222222222222');

select lives_ok(
  $$ select public.reserve_usage() from generate_series(1, 10) $$,
  'premium users can fill the burst bucket without the daily free cap'
);

select results_eq(
  $$ select public.get_freechat_usage() $$,
  $$ select 10 $$,
  'premium usage records ten accepted requests'
);

select results_eq(
  $$ select (public.reserve_usage()->>'allowed')::boolean $$,
  $$ select false $$,
  'eleventh request in a minute is rate limited'
);

select results_eq(
  $$ select public.reserve_usage()->>'reason' $$,
  $$ select 'rate_limit_exceeded'::text $$,
  'burst rejection reports rate_limit_exceeded'
);

select test_service_role();

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

select has_function(
  'public',
  'reserve_usage',
  array[]::name[],
  'reserve_usage no longer accepts a caller-controlled date parameter'
);

select * from finish();
rollback;
