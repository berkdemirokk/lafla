-- Lafla — Apple Sign-In credentials store (Guideline 5.1.1(v) compliance).
--
-- 2026-05-23 — Apple "must revoke tokens on account deletion" enforcement.
-- expo-apple-authentication returns authorizationCode at sign-in; backend
-- exchanges it for refresh_token via appleid.apple.com/auth/token, stores
-- here, then revokes via appleid.apple.com/auth/revoke at account deletion.
--
-- Refresh tokens are LONG-LIVED (no built-in expiry — they remain valid
-- until explicitly revoked or until the user revokes via Apple ID settings).
-- We never expose them outside the edge functions.

CREATE TABLE IF NOT EXISTS public.apple_credentials (
  user_id        UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  refresh_token  TEXT NOT NULL,
  created_at     TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at     TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- RLS — only service_role reads/writes. Users themselves never see this.
ALTER TABLE public.apple_credentials ENABLE ROW LEVEL SECURITY;

-- No policies = default deny. service_role bypasses RLS.

-- Auto-update updated_at on UPSERT.
CREATE OR REPLACE FUNCTION public.touch_apple_credentials_updated_at()
RETURNS TRIGGER
LANGUAGE plpgsql
AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS apple_credentials_touch_updated_at ON public.apple_credentials;
CREATE TRIGGER apple_credentials_touch_updated_at
  BEFORE UPDATE ON public.apple_credentials
  FOR EACH ROW
  EXECUTE FUNCTION public.touch_apple_credentials_updated_at();

COMMENT ON TABLE public.apple_credentials IS
  'Lafla v0.9.2: Apple Sign-In refresh tokens for Guideline 5.1.1(v) revoke-on-deletion compliance. Service-role only.';
