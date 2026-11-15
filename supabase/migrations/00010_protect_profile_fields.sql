-- Clients may edit onboarding fields, but server-owned progress and billing
-- values must never be writable through the public Supabase client.
revoke update on table public.profiles from public, anon, authenticated;
revoke update (
  id, display_name, interests, onboarding_completed_at, is_premium,
  premium_expires_at, total_xp, current_streak, longest_streak,
  last_lesson_at, created_at, updated_at
) on table public.profiles from public, anon, authenticated;
grant update (display_name, interests, onboarding_completed_at)
  on table public.profiles to authenticated;

create or replace function public.protect_profile_server_fields()
returns trigger
language plpgsql
set search_path = public
as $$
begin
  if auth.uid() is not null and (
    new.id is distinct from old.id or
    new.is_premium is distinct from old.is_premium or
    new.premium_expires_at is distinct from old.premium_expires_at or
    new.total_xp is distinct from old.total_xp or
    new.current_streak is distinct from old.current_streak or
    new.longest_streak is distinct from old.longest_streak or
    new.last_lesson_at is distinct from old.last_lesson_at or
    new.created_at is distinct from old.created_at
  ) then
    raise exception 'profile contains server-managed fields';
  end if;
  return new;
end;
$$;

drop trigger if exists profiles_protect_server_fields on public.profiles;
create trigger profiles_protect_server_fields
  before update on public.profiles
  for each row execute function public.protect_profile_server_fields();
