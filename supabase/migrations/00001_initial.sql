-- Lafla initial schema
-- User state only — lesson/skill content lives in app bundle, not DB.

-- ============================================================
-- profiles: extends auth.users
-- ============================================================
create table profiles (
  id uuid primary key references auth.users on delete cascade,
  display_name text,
  interests text[] default '{}',
  onboarding_completed_at timestamptz,
  is_premium boolean default false,
  premium_expires_at timestamptz,
  total_xp integer default 0 not null,
  current_streak integer default 0 not null,
  longest_streak integer default 0 not null,
  last_lesson_at timestamptz,
  created_at timestamptz default now() not null,
  updated_at timestamptz default now() not null
);

-- Auto-create profile when user signs up
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.profiles (id) values (new.id);
  return new;
end;
$$;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();

-- ============================================================
-- lesson_state: per-lesson SRS state
-- ============================================================
create table lesson_state (
  user_id uuid references profiles(id) on delete cascade,
  lesson_id text not null,
  completed_at timestamptz,
  next_review_at timestamptz,
  ease_factor real default 2.5 not null,
  interval_days integer default 0 not null,
  consecutive_correct integer default 0 not null,
  total_attempts integer default 0 not null,
  total_correct integer default 0 not null,
  last_attempt_at timestamptz,
  primary key (user_id, lesson_id)
);

create index lesson_state_next_review on lesson_state (user_id, next_review_at)
  where next_review_at is not null;

-- ============================================================
-- skill_mastery: per-skill aggregated mastery
-- ============================================================
create table skill_mastery (
  user_id uuid references profiles(id) on delete cascade,
  skill_id text not null,
  mastery_score real default 0 not null,
  lessons_completed integer default 0 not null,
  last_practiced_at timestamptz,
  primary key (user_id, skill_id)
);

-- ============================================================
-- attempts: exercise attempt log (analytics + SRS input)
-- ============================================================
create table attempts (
  id bigserial primary key,
  user_id uuid references profiles(id) on delete cascade not null,
  exercise_id text not null,
  lesson_id text not null,
  skill_id text not null,
  exercise_type text not null,
  is_correct boolean not null,
  response_time_ms integer,
  hints_used integer default 0,
  attempted_at timestamptz default now() not null
);

create index attempts_user_created on attempts (user_id, attempted_at desc);
create index attempts_lesson on attempts (user_id, lesson_id);

-- ============================================================
-- daily_activity: streak tracking
-- ============================================================
create table daily_activity (
  user_id uuid references profiles(id) on delete cascade,
  activity_date date not null,
  xp_earned integer default 0 not null,
  lessons_completed integer default 0 not null,
  primary key (user_id, activity_date)
);

-- ============================================================
-- Row Level Security
-- ============================================================
alter table profiles enable row level security;
alter table lesson_state enable row level security;
alter table skill_mastery enable row level security;
alter table attempts enable row level security;
alter table daily_activity enable row level security;

-- profiles: user can read+update own row
create policy "Users read own profile"
  on profiles for select using (auth.uid() = id);
create policy "Users update own profile"
  on profiles for update using (auth.uid() = id);

-- lesson_state: full CRUD on own rows
create policy "Users CRUD own lesson_state"
  on lesson_state for all using (auth.uid() = user_id) with check (auth.uid() = user_id);

-- skill_mastery: full CRUD on own rows
create policy "Users CRUD own skill_mastery"
  on skill_mastery for all using (auth.uid() = user_id) with check (auth.uid() = user_id);

-- attempts: insert + read own
create policy "Users insert own attempts"
  on attempts for insert with check (auth.uid() = user_id);
create policy "Users read own attempts"
  on attempts for select using (auth.uid() = user_id);

-- daily_activity: full CRUD on own rows
create policy "Users CRUD own daily_activity"
  on daily_activity for all using (auth.uid() = user_id) with check (auth.uid() = user_id);

-- ============================================================
-- Helper: update profile.updated_at on any change
-- ============================================================
create or replace function public.tick_updated_at()
returns trigger language plpgsql as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

create trigger profiles_updated_at
  before update on profiles
  for each row execute function public.tick_updated_at();
