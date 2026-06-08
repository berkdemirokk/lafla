-- Lafla — Push token storage for server-side notifications
--
-- Stores Expo push tokens so a backend (cron / edge function) can
-- send re-engagement pushes to churned users even if the app is
-- force-closed.

create table push_tokens (
  user_id uuid references profiles(id) on delete cascade,
  token text not null,
  platform text not null default 'ios',  -- 'ios' | 'android'
  created_at timestamptz default now() not null,
  updated_at timestamptz default now() not null,
  primary key (user_id, token)
);

-- RLS: users can only manage their own tokens
alter table push_tokens enable row level security;

create policy "Users manage own push tokens"
  on push_tokens for all
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

-- Auto-update timestamp
create trigger push_tokens_updated_at
  before update on push_tokens
  for each row execute function public.tick_updated_at();
