-- Run against a disposable local Supabase database after all migrations.
-- psql "$LOCAL_DATABASE_URL" -v ON_ERROR_STOP=1 -f supabase/tests/leaderboard_privacy.sql
begin;

insert into auth.users (id)
select ('10000000-0000-0000-0000-' || lpad(n::text, 12, '0'))::uuid
from generate_series(1, 110) n;

do $$
begin
  if has_function_privilege('anon', 'public.get_leaderboard(integer)', 'execute') then
    raise exception 'anonymous leaderboard RPC access';
  end if;
  if has_table_privilege('anon', 'public.leaderboard_view', 'select')
    or has_table_privilege('authenticated', 'public.leaderboard_view', 'select') then
    raise exception 'owner-backed leaderboard view exposed';
  end if;
  if has_column_privilege('authenticated', 'public.profiles', 'total_xp', 'update') then
    raise exception 'authenticated users can update server-owned XP';
  end if;
  if not has_column_privilege('authenticated', 'public.profiles', 'display_name', 'update') then
    raise exception 'authenticated users cannot update their display name';
  end if;
end $$;

set local role authenticated;
select set_config('request.jwt.claim.sub', '10000000-0000-0000-0000-000000000001', true);
select set_config('request.jwt.claims', '{"sub":"10000000-0000-0000-0000-000000000001","role":"authenticated"}', true);

do $$
declare count_rows integer;
        denied boolean := false;
begin
  select count(*) into count_rows from public.profiles;
  if count_rows <> 1 then raise exception 'profiles RLS expected own row only, got %', count_rows; end if;
  select count(*) into count_rows from public.get_leaderboard(1000000);
  if count_rows <> 100 then raise exception 'upper bound failed: %', count_rows; end if;
  select count(*) into count_rows from public.get_leaderboard(-1);
  if count_rows <> 1 then raise exception 'lower bound failed: %', count_rows; end if;
  select count(*) into count_rows from public.get_leaderboard(null);
  if count_rows <> 50 then raise exception 'null default failed: %', count_rows; end if;
  begin
    update public.profiles set total_xp = 999999
    where id = '10000000-0000-0000-0000-000000000001';
  exception when insufficient_privilege then
    denied := true;
  end;
  if not denied then raise exception 'client changed server-owned XP'; end if;
  update public.profiles set display_name = 'Allowed update'
  where id = '10000000-0000-0000-0000-000000000001';
end $$;

rollback;
