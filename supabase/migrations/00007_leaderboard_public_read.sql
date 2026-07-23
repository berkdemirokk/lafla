-- Lafla - leaderboard read access
--
-- Keep profile table RLS private. The app reads leaderboard data through this
-- security-definer RPC, which exposes only the public leaderboard columns.

drop view if exists public.leaderboard_view;
drop policy if exists "Authenticated users read profiles for leaderboard" on public.profiles;

create or replace function public.get_leaderboard(row_limit integer default 50)
returns table (
  id uuid,
  display_name text,
  total_xp integer,
  current_streak integer,
  longest_streak integer
)
language sql
stable
security definer
set search_path = public
as $$
  select
    p.id,
    p.display_name,
    p.total_xp,
    p.current_streak,
    p.longest_streak
  from public.profiles p
  order by p.total_xp desc
  limit least(greatest(coalesce(row_limit, 50), 1), 100);
$$;

revoke all on function public.get_leaderboard(integer) from public;
revoke all on function public.get_leaderboard(integer) from anon;
grant execute on function public.get_leaderboard(integer) to authenticated;
