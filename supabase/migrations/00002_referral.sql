-- Adım 7 (2026-05-20) — Referral altyapısı
-- MVP: code generation + tracking. Otomatik bonus award manuel
-- (günlük cron veya admin script). Branch.io / Adjust kurulması v1.1 işi.

alter table profiles add column if not exists referral_code text unique;
alter table profiles add column if not exists redeemed_referral_code text;
alter table profiles add column if not exists referral_bonus_awarded_at timestamptz;

create index if not exists profiles_referral_code_idx on profiles (referral_code);
create index if not exists profiles_redeemed_idx on profiles (redeemed_referral_code)
  where redeemed_referral_code is not null;

-- Award candidate query (admin/cron tarafı):
--   SELECT
--     redeemer.id           AS redeemer_id,
--     redeemer.redeemed_referral_code AS code,
--     referrer.id           AS referrer_id
--   FROM profiles redeemer
--   JOIN profiles referrer
--     ON referrer.referral_code = redeemer.redeemed_referral_code
--   WHERE redeemer.referral_bonus_awarded_at IS NULL
--     AND redeemer.redeemed_referral_code IS NOT NULL;
--
-- Award flow:
--   1. RevenueCat admin → grant 30-day Speak+ promo to both redeemer + referrer
--   2. UPDATE profiles SET referral_bonus_awarded_at = now() WHERE id IN (...)
