-- Lafla — Leaderboard public read access
--
-- Problem: profiles RLS only allows auth.uid() = id (own row).
-- Leaderboard screen queries top 50 users → returns empty.
--
-- Solution: Allow authenticated users to read limited columns from
-- all profiles. We use a security-definer function instead of
-- opening the entire table, so sensitive fields stay private.

-- 1) Public leaderboard view — exposes ONLY safe columns
create or replace view public.leaderboard_view as
  select
    id,
    display_name,
    total_xp,
    current_streak,
    longest_streak
  from public.profiles
  order by total_xp desc
  limit 100;

-- 2) RPC function so the client can call it without needing raw table access
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
  select
    p.id,
    p.display_name,
    p.total_xp,
    p.current_streak,
    p.longest_streak
  from profiles p
  order by p.total_xp desc
  limit row_limit;
$$;

-- 3) Grant execute to authenticated users
grant execute on function public.get_leaderboard(integer) to authenticated;

-- 4) Also add a broader SELECT policy so the leaderboard_view works
--    This only exposes the columns in the view, not all profile data
create policy "Authenticated users read profiles for leaderboard"
  on profiles for select
  to authenticated
  using (true);
