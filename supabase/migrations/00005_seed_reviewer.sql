-- Lafla — Apple Reviewer demo account seed (Guideline 2.1 mitigation).
--
-- 2026-05-23 (v0.9.3) — Audit fix: Reality Checker bulgusu R5. Apple reviewer
-- 5 dakika sign-in olur, boş profile görür (streak yok, scene history yok,
-- mode progress yok) → "couldn't evaluate premium features" → 2.1/3.1.2
-- reject. Bu migration reviewer account'u "lived-in" yapar.
--
-- ⚠️ MANUEL ÖNCELEMLİ ADIM (sen):
--   1. Supabase Dashboard → Authentication → Users → "Add user"
--      Email: apple_reviewer_2026_05@lafla.app
--      Password: (güçlü rastgele — bir kez kullanılacak)
--      Auto-confirm email: ON
--   2. Yeni yaratılan user'ın UUID'sini kopyala
--   3. Bu dosyada `:reviewer_id` placeholder'ını UUID ile değiştir VEYA
--      psql/Supabase SQL Editor'da çalıştır:
--        DO $$
--        DECLARE
--          reviewer_id UUID := '<YENİ UUID>'::uuid;
--        BEGIN
--          -- Aşağıdaki body'yi buraya yapıştır
--        END $$;
--
-- ⚠️ RevenueCat tarafı: ayrıca RevenueCat dashboard'unda bu user_id'ye
-- `Lafla Pro` entitlement grant et (manuel — financial decision, otomasyon
-- bilinçli olarak Claude'a kapalı).
--
-- 3-day streak history, 8 completed scene across 4 modes, 3 attempts.
-- ASC App Review Information → Notes alanında bu kullanıcının credentials'ı
-- paste'lenecek.

DO $$
DECLARE
  reviewer_id UUID;
  now_ts TIMESTAMPTZ := now();
BEGIN
  -- Reviewer user UUID'sini bul (email-based lookup)
  SELECT id INTO reviewer_id
  FROM auth.users
  WHERE email = 'apple_reviewer_2026_05@lafla.app'
  LIMIT 1;

  IF reviewer_id IS NULL THEN
    RAISE NOTICE 'Reviewer user not found. Create user in Supabase Auth UI first: apple_reviewer_2026_05@lafla.app';
    RETURN;
  END IF;

  RAISE NOTICE 'Seeding reviewer account: %', reviewer_id;

  -- 1. Profile — onboarding completed, name set, B1 level
  INSERT INTO profiles (
    id, display_name, interests,
    onboarding_completed_at, is_premium,
    total_xp, current_streak, longest_streak,
    last_lesson_at, created_at, updated_at
  )
  VALUES (
    reviewer_id, 'Reviewer', ARRAY['work', 'flirt', 'daily']::text[],
    now_ts - interval '3 days', true,
    450, 3, 3,
    now_ts - interval '4 hours', now_ts - interval '3 days', now_ts
  )
  ON CONFLICT (id) DO UPDATE SET
    display_name = EXCLUDED.display_name,
    interests = EXCLUDED.interests,
    onboarding_completed_at = EXCLUDED.onboarding_completed_at,
    is_premium = EXCLUDED.is_premium,
    total_xp = EXCLUDED.total_xp,
    current_streak = EXCLUDED.current_streak,
    longest_streak = EXCLUDED.longest_streak,
    last_lesson_at = EXCLUDED.last_lesson_at;

  -- 2. Daily activity — 3-day streak
  INSERT INTO daily_activity (user_id, activity_date, lessons_completed, total_xp_gained)
  VALUES
    (reviewer_id, (now_ts - interval '2 days')::date, 3, 150),
    (reviewer_id, (now_ts - interval '1 day')::date, 2, 100),
    (reviewer_id, now_ts::date, 3, 200)
  ON CONFLICT (user_id, activity_date) DO UPDATE SET
    lessons_completed = EXCLUDED.lessons_completed,
    total_xp_gained = EXCLUDED.total_xp_gained;

  -- 3. Lesson state — 8 completed scene across 4 modes
  INSERT INTO lesson_state (
    user_id, lesson_id, completed_at, total_attempts,
    last_accuracy, created_at, updated_at
  ) VALUES
    -- Daily
    (reviewer_id, 'daily.cafe.5.1', now_ts - interval '2 days', 1, 0.85, now_ts - interval '2 days', now_ts - interval '2 days'),
    (reviewer_id, 'daily.directions.2.1', now_ts - interval '2 days', 1, 0.92, now_ts - interval '2 days', now_ts - interval '2 days'),
    -- Work
    (reviewer_id, 'work.slack.1.1', now_ts - interval '2 days', 2, 0.78, now_ts - interval '2 days', now_ts - interval '2 days'),
    (reviewer_id, 'work.standup.1.1', now_ts - interval '1 day', 1, 0.88, now_ts - interval '1 day', now_ts - interval '1 day'),
    -- Flirt
    (reviewer_id, 'flirt.opener.1.1', now_ts - interval '1 day', 1, 0.81, now_ts - interval '1 day', now_ts - interval '1 day'),
    (reviewer_id, 'flirt.banter.1.1', now_ts - interval '4 hours', 1, 0.94, now_ts - interval '4 hours', now_ts - interval '4 hours'),
    -- Airport
    (reviewer_id, 'airport.checkin.1.1', now_ts - interval '6 hours', 1, 0.87, now_ts - interval '6 hours', now_ts - interval '6 hours'),
    (reviewer_id, 'airport.security.1.1', now_ts - interval '3 hours', 1, 0.79, now_ts - interval '3 hours', now_ts - interval '3 hours')
  ON CONFLICT (user_id, lesson_id) DO UPDATE SET
    completed_at = EXCLUDED.completed_at,
    total_attempts = EXCLUDED.total_attempts,
    last_accuracy = EXCLUDED.last_accuracy,
    updated_at = EXCLUDED.updated_at;

  -- 4. Skill mastery — 4 mod için tracking
  INSERT INTO skill_mastery (user_id, skill_id, mastery_score, attempts_count, last_practiced_at)
  VALUES
    (reviewer_id, 'daily.cafe', 0.85, 1, now_ts - interval '2 days'),
    (reviewer_id, 'daily.directions', 0.92, 1, now_ts - interval '2 days'),
    (reviewer_id, 'work.slack', 0.78, 2, now_ts - interval '2 days'),
    (reviewer_id, 'work.standup', 0.88, 1, now_ts - interval '1 day'),
    (reviewer_id, 'flirt.opener', 0.81, 1, now_ts - interval '1 day'),
    (reviewer_id, 'flirt.banter', 0.94, 1, now_ts - interval '4 hours'),
    (reviewer_id, 'airport.checkin', 0.87, 1, now_ts - interval '6 hours'),
    (reviewer_id, 'airport.security', 0.79, 1, now_ts - interval '3 hours')
  ON CONFLICT (user_id, skill_id) DO UPDATE SET
    mastery_score = EXCLUDED.mastery_score,
    attempts_count = EXCLUDED.attempts_count,
    last_practiced_at = EXCLUDED.last_practiced_at;

  -- 5. Attempts (sample of 3 — yeterli, anlamlı zaman damgalı)
  INSERT INTO attempts (user_id, lesson_id, exercise_id, accuracy, attempted_at)
  VALUES
    (reviewer_id, 'daily.cafe.5.1', 'ex.cafe.5.1.1', 0.85, now_ts - interval '2 days'),
    (reviewer_id, 'work.slack.1.1', 'ex.slack.1.1.1', 0.78, now_ts - interval '2 days'),
    (reviewer_id, 'flirt.banter.1.1', 'ex.banter.1.1.1', 0.94, now_ts - interval '4 hours');

  RAISE NOTICE 'Reviewer seed complete for user_id %', reviewer_id;
END $$;

-- Ek not (NOT a SQL statement, sadece reference):
-- Voice Journal entries: local-only (documentDirectory). Reviewer'ın cihazında
-- demo entries göstermek için bunlar app-side seed gerektirir. v1.0.1'de
-- "dev-only seed deep link" eklenecek (docs/APPLE_REJECTION_RISK_AUDIT.md).
-- Şimdilik Notes'ta açıkla:
--   "Voice Journal is local-only storage; demo entries not pre-seeded.
--   Reviewer can test by tapping record button — 30 sec audio saves locally."
