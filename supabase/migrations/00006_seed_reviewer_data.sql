-- Lafla — Apple Reviewer demo data seed (corrected schema).
--
-- 2026-05-23 — Schema'ya birebir uyumlu UPSERT. 00001_initial.sql'deki
-- gerçek kolonlar:
--   daily_activity: xp_earned, lessons_completed
--   skill_mastery:  mastery_score, lessons_completed, last_practiced_at
--   lesson_state:   completed_at, next_review_at, ease_factor, interval_days,
--                    consecutive_correct, total_attempts, total_correct,
--                    last_attempt_at
--   attempts:       exercise_id, lesson_id, skill_id, exercise_type,
--                    is_correct, response_time_ms, hints_used, attempted_at
--   profiles:       display_name, interests, onboarding_completed_at,
--                    is_premium, premium_expires_at, total_xp,
--                    current_streak, longest_streak, last_lesson_at
--
-- Idempotent UPSERT'lar.

DO $$
DECLARE
  reviewer_id UUID;
  now_ts TIMESTAMPTZ := now();
BEGIN
  SELECT id INTO reviewer_id
  FROM auth.users
  WHERE email = 'apple_reviewer_2026_05@lafla.app'
  LIMIT 1;

  IF reviewer_id IS NULL THEN
    RAISE NOTICE 'Reviewer user not found. Skipping optional demo-data seed.';
    RETURN;
  END IF;

  RAISE NOTICE 'Seeding reviewer % with lived-in demo data', reviewer_id;

  -- 1. Profile
  INSERT INTO profiles (
    id, display_name, interests,
    onboarding_completed_at, is_premium, premium_expires_at,
    total_xp, current_streak, longest_streak,
    last_lesson_at, created_at, updated_at
  )
  VALUES (
    reviewer_id, 'Reviewer', ARRAY['work', 'flirt', 'daily']::text[],
    now_ts - interval '3 days', true, now_ts + interval '365 days',
    450, 3, 3,
    now_ts - interval '4 hours', now_ts - interval '3 days', now_ts
  )
  ON CONFLICT (id) DO UPDATE SET
    display_name = EXCLUDED.display_name,
    interests = EXCLUDED.interests,
    onboarding_completed_at = EXCLUDED.onboarding_completed_at,
    is_premium = EXCLUDED.is_premium,
    premium_expires_at = EXCLUDED.premium_expires_at,
    total_xp = EXCLUDED.total_xp,
    current_streak = EXCLUDED.current_streak,
    longest_streak = EXCLUDED.longest_streak,
    last_lesson_at = EXCLUDED.last_lesson_at;

  -- 2. Daily activity — 3-day streak (xp_earned, NOT total_xp_gained)
  INSERT INTO daily_activity (user_id, activity_date, xp_earned, lessons_completed)
  VALUES
    (reviewer_id, (now_ts - interval '2 days')::date, 150, 3),
    (reviewer_id, (now_ts - interval '1 day')::date, 100, 2),
    (reviewer_id, now_ts::date, 200, 3)
  ON CONFLICT (user_id, activity_date) DO UPDATE SET
    xp_earned = EXCLUDED.xp_earned,
    lessons_completed = EXCLUDED.lessons_completed;

  -- 3. Lesson state — 8 completed scene across 4 modes
  INSERT INTO lesson_state (
    user_id, lesson_id, completed_at,
    ease_factor, interval_days, consecutive_correct,
    total_attempts, total_correct, last_attempt_at
  ) VALUES
    (reviewer_id, 'daily.cafe.5.1',         now_ts - interval '2 days', 2.5, 1, 1, 1, 1, now_ts - interval '2 days'),
    (reviewer_id, 'daily.directions.2.1',   now_ts - interval '2 days', 2.5, 1, 1, 1, 1, now_ts - interval '2 days'),
    (reviewer_id, 'work.slack.1.1',         now_ts - interval '2 days', 2.3, 1, 1, 2, 2, now_ts - interval '2 days'),
    (reviewer_id, 'work.standup.1.1',       now_ts - interval '1 day',  2.5, 1, 1, 1, 1, now_ts - interval '1 day'),
    (reviewer_id, 'flirt.opener.1.1',       now_ts - interval '1 day',  2.5, 1, 1, 1, 1, now_ts - interval '1 day'),
    (reviewer_id, 'flirt.banter.1.1',       now_ts - interval '4 hours', 2.6, 1, 1, 1, 1, now_ts - interval '4 hours'),
    (reviewer_id, 'airport.checkin.1.1',    now_ts - interval '6 hours', 2.5, 1, 1, 1, 1, now_ts - interval '6 hours'),
    (reviewer_id, 'airport.security.1.1',   now_ts - interval '3 hours', 2.4, 1, 1, 1, 1, now_ts - interval '3 hours')
  ON CONFLICT (user_id, lesson_id) DO UPDATE SET
    completed_at = EXCLUDED.completed_at,
    total_attempts = EXCLUDED.total_attempts,
    total_correct = EXCLUDED.total_correct,
    last_attempt_at = EXCLUDED.last_attempt_at;

  -- 4. Skill mastery (lessons_completed, NOT attempts_count)
  INSERT INTO skill_mastery (user_id, skill_id, mastery_score, lessons_completed, last_practiced_at)
  VALUES
    (reviewer_id, 'daily.cafe',         0.85, 1, now_ts - interval '2 days'),
    (reviewer_id, 'daily.directions',   0.92, 1, now_ts - interval '2 days'),
    (reviewer_id, 'work.slack',         0.78, 1, now_ts - interval '2 days'),
    (reviewer_id, 'work.standup',       0.88, 1, now_ts - interval '1 day'),
    (reviewer_id, 'flirt.opener',       0.81, 1, now_ts - interval '1 day'),
    (reviewer_id, 'flirt.banter',       0.94, 1, now_ts - interval '4 hours'),
    (reviewer_id, 'airport.checkin',    0.87, 1, now_ts - interval '6 hours'),
    (reviewer_id, 'airport.security',   0.79, 1, now_ts - interval '3 hours')
  ON CONFLICT (user_id, skill_id) DO UPDATE SET
    mastery_score = EXCLUDED.mastery_score,
    lessons_completed = EXCLUDED.lessons_completed,
    last_practiced_at = EXCLUDED.last_practiced_at;

  -- 5. Attempts (is_correct boolean, not accuracy real)
  INSERT INTO attempts (
    user_id, exercise_id, lesson_id, skill_id, exercise_type,
    is_correct, response_time_ms, hints_used, attempted_at
  )
  VALUES
    (reviewer_id, 'ex.cafe.5.1.1',   'daily.cafe.5.1',     'daily.cafe',     'translate', true, 3200, 0, now_ts - interval '2 days'),
    (reviewer_id, 'ex.slack.1.1.1',  'work.slack.1.1',     'work.slack',     'roleplay_chat', true, 4800, 1, now_ts - interval '2 days'),
    (reviewer_id, 'ex.banter.1.1.1', 'flirt.banter.1.1',   'flirt.banter',   'roleplay_chat', true, 2900, 0, now_ts - interval '4 hours');

  RAISE NOTICE 'Reviewer seed complete for user_id %', reviewer_id;
END $$;
