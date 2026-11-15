-- Leaderboard reads go through the bounded RPC; raw profiles remain private.
drop policy if exists "Authenticated users read profiles for leaderboard"
  on public.profiles;

-- This owner-backed view can bypass RLS. No mobile caller uses it.
revoke all on public.leaderboard_view from public, anon, authenticated;

create or replace function public.get_leaderboard(row_limit integer default 50)
returns table (
  id uuid,
  display_name text,
  total_xp integer,
  current_streak integer,
  longest_streak integer
)
language sql
security definer
set search_path = public
as $$
  select p.id, p.display_name, p.total_xp, p.current_streak, p.longest_streak
  from public.profiles p
  order by p.total_xp desc, p.id
  limit greatest(1, least(coalesce(row_limit, 50), 100));
$$;

revoke all on function public.get_leaderboard(integer) from public, anon;
grant execute on function public.get_leaderboard(integer) to authenticated;
