# Account Deletion — In-App, Instant, Irreversible

## Why this exists (Apple compliance)

App Store Review Guideline **5.1.1(v)** requires that any app supporting
account creation **must offer in-app account deletion**:

> Apps that support account creation must also offer account deletion within
> the app. Apps may provide users the choice to temporarily deactivate or
> suspend their account, but they must delete the account and personal data
> upon request, even if there is an outstanding balance or active subscription.

The previous Lafla flow only sent the user a `mailto:berkkdemirok@gmail.com` link
and promised manual deletion within 7 days. That is a guaranteed reject
under 5.1.1(v) because the delete is not initiated nor confirmed in-app.

This document describes the new in-app instant deletion path.

---

## Files involved

| Path | Role |
| --- | --- |
| `supabase/functions/delete-account/index.ts` | Edge function — irreversible server-side delete (DB rows, storage objects, auth.users). |
| `supabase/migrations/00003_delete_account_function.sql` | Audit log table + `log_account_deletion` RPC + cascade documentation. |
| `apps/mobile/lib/delete-account.ts` | Client wrapper: `previewWhatWillBeDeleted` + `deleteAccountInstant`. |
| `apps/mobile/app/settings.tsx` | Three-step in-app modal: preview → typed "SİL" confirmation → execute. |

---

## User flow

1. **Settings → Hesap → "Hesabımı sil"** — opens the modal (no email step).
2. **Step 1 — Preview**. The modal shows what will be deleted:
   - Number of completed scenes (`scenes_completed`)
   - Hours practiced (`hours_practiced`)
   - A warning if a Premium subscription is active (the user is told they
     must cancel via App Store / Google Play separately — Apple does not
     allow apps to cancel subscriptions directly).
3. **Step 2 — Typed confirmation**. The user types `SİL` (Turkish for
   "delete") into a text box. We do not accept a single button tap for
   irreversible actions; this matches Apple's "explicit confirmation"
   expectation.
4. **Step 3 — Execute**. We `POST /functions/v1/delete-account` with the
   user's access token. On success:
   - All `lafla.*` AsyncStorage keys are cleared.
   - `supabase.auth.signOut()` drops the SecureStore session.
   - The router navigates to `/` (welcome / splash).
5. **Error path**. If the server call fails (network or partial error),
   the user stays on the typing step and sees:
   - The error message returned by the edge function (e.g.
     `storage_remove: ...`, `auth_delete: ...`).
   - A fallback link: `berkkdemirok@gmail.com` for manual cleanup. The fallback
     is no longer the primary path — only a safety net.

---

## What the edge function does

`supabase/functions/delete-account/index.ts` performs in order:

1. Validate the JWT against the anon client; resolve `user.id`.
2. List all objects under `user-backups/users/{uid}/` (and the nested
   `backups/` folder) and remove them in one batched `remove(paths[])`.
3. Delete rows from `attempts`, `lesson_state`, `skill_mastery`,
   `daily_activity` (`user_id` = uid) and `profiles` (`id` = uid).
   Explicit deletes are used even though the FK chain cascades — it makes
   per-table errors observable and the function defense-in-depth against
   future tables added without `ON DELETE CASCADE`.
4. Call `supabaseAdmin.auth.admin.deleteUser(uid)` — this is what makes
   the action permanent and frees the email for re-signup.
5. Return `{ ok: true, partial_errors: [...] }`. Partial errors mean some
   non-auth cleanup failed but the auth row was still removed (delete is
   considered effective once the auth row is gone — the user can no longer
   sign in to recover anything).

---

## Deployment

```bash
# From repo root
supabase db push   # applies migration 00003
supabase functions deploy delete-account --project-ref <your-ref>
```

Required function secrets (set automatically on Supabase-managed projects;
verify in dashboard → Edge Functions → delete-account → Secrets):

- `SUPABASE_URL`
- `SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`

---

## Test plan

1. **Sandbox setup**
   - Create a test Supabase user (`apptest+delete@lafla.app`).
   - Complete onboarding and 2–3 scenes inside the app.
   - Confirm rows exist in `profiles`, `lesson_state`, `attempts`,
     `daily_activity`, `skill_mastery`.
   - If Premium, also create one backup so `user-backups` has objects.

2. **Happy path**
   - Open Settings → Hesabımı sil.
   - Verify the preview shows non-zero scenes and hours.
   - Tap "Devam et" → type `SİL` → tap "Hesabımı kalıcı olarak sil".
   - Expect: spinner, then navigation to `/`.
   - In Supabase Studio: verify all the above rows are gone, and that
     `auth.users` no longer contains the test uid.
   - Verify the email is re-usable for a new signup.

3. **Network failure path**
   - Disable network mid-flow (airplane mode after typing).
   - Tap "Hesabımı kalıcı olarak sil".
   - Expect: error message and the mailto fallback link.

4. **Anonymous / no-session path**
   - Sign out, then re-open Settings (in anonymous mode the option may be
     hidden — but if reachable, `deleteAccountInstant` returns `ok: true`
     after only clearing local data; there is no server side to delete).

5. **Subscription warning**
   - As a Premium user, verify the preview shows the warning about
     cancelling via App Store / Google Play.

6. **Audit log**
   - After a successful delete, query `account_deletion_log` (service
     role only). Confirm a row exists with the hashed uid and `actor =
     'self'`. (Note: the edge function does not yet RPC into
     `log_account_deletion` — that wiring is a follow-up, the table and
     RPC are pre-created so we don't ship without an audit trail.)

---

## Known follow-ups

- Wire the edge function to call `log_account_deletion` via
  `supabaseAdmin.rpc()` before returning so audit rows are written.
- Add an in-app "Export my data first" link next to the delete button
  (Settings → Hesap) to satisfy GDPR Article 20 (data portability) in
  addition to the right-to-erasure 5.1.1(v) flow.
- Localise the modal copy when `i18n.ts` supports English fall-through
  (currently Turkish-only).
