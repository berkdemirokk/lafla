# Apple Sign-In Setup

Lafla supports "Sign in with Apple" on iOS. App Store Review Guideline 4.8
requires it whenever any other third-party login (Google, Facebook, etc.) is
offered, so we ship it even before adding other social providers.

This doc covers the one-time configuration on the Apple Developer Console,
Supabase, and the local Expo project. The code lives in:

- `apps/mobile/lib/auth-apple.ts` — native flow + Supabase token exchange
- `apps/mobile/components/AppleSignInButton.tsx` — "Apple ile devam et" UI

## 1. Apple Developer Console

1. Sign in at https://developer.apple.com/account.
2. **Identifiers → App IDs → `com.lafla.app`** → enable the **Sign In with
   Apple** capability. Save.
3. **Keys → +** → name it `Lafla Sign In with Apple`, tick **Sign in with
   Apple**, configure it to the primary App ID `com.lafla.app`, then
   **Continue → Register**.
4. Download the `.p8` private key file. **You can only download it once** —
   stash it in 1Password under `Lafla / Apple Sign In Key`.
5. Note the **Key ID** (10 characters, e.g. `ABCD1234EF`) and your **Team
   ID** (top-right of the developer portal).
6. (Optional but recommended) Create a **Services ID** if you ever need
   web-based Apple Sign-In. The mobile-only flow does NOT need this, but
   Supabase asks for it — pass the App ID `com.lafla.app` as the Services ID
   when only mobile is in scope.

## 2. Supabase

1. Open the Lafla Supabase project →
   **Authentication → Providers → Apple → Enable**.
2. Fill in:
   - **Services ID** → `com.lafla.app` (the App ID acts as the audience).
   - **Team ID** → 10-character team id from step 1.5.
   - **Key ID** → 10-character key id from step 1.5.
   - **Secret Key (PKCS#8)** → paste the full contents of the `.p8` file,
     including the `-----BEGIN PRIVATE KEY-----` / `-----END PRIVATE KEY-----`
     wrapper lines.
3. Save. Supabase will mint and rotate the client_secret JWT for you.
4. Under **Authentication → URL Configuration**, confirm `lafla://` is in
   the allow-list (already present for password reset).

## 3. Install the Expo module

From `apps/mobile/`:

```sh
npx expo install expo-apple-authentication
```

This adds the dependency to `package.json` and updates `package-lock`. Do
**not** install with plain `npm install` — `expo install` picks the SDK-52
compatible version.

## 4. `app.json` plugin

Add `"expo-apple-authentication"` to the `plugins` array. The full block
should look like:

```json
"plugins": [
  "expo-router",
  "expo-secure-store",
  "expo-apple-authentication"
]
```

The plugin auto-injects the `com.apple.developer.applesignin` entitlement
into the iOS build. No manual `entitlements.plist` edits required.

## 5. Re-build via EAS

`expo-apple-authentication` is a native module, so the Expo Go sandbox
cannot run it. You must produce a new dev/preview/production build:

```sh
eas build --platform ios --profile preview
```

Wait for the build to finish, install the IPA on a real device, then test.

## 6. Test on a real iOS device

The iOS Simulator does **not** support Apple ID — `isAvailableAsync()`
returns `false` and the button hides itself. Use a physical iPhone/iPad
signed into iCloud.

## 7. Test scenarios

Cover these three on at least one device each before submitting to App
Review:

1. **First-time login** — completely new Apple ID for this app.
   - Expect: the system sheet shows your name + email.
   - After tap: Supabase row exists, `display_name` populated from
     `fullName`, locally-cached credentials saved via SecureStore.
2. **Repeat login** — same Apple ID, fresh app install.
   - Expect: no name/email shown in the sheet (Apple only sends them once).
   - After tap: Supabase auth succeeds via OIDC; `getStoredAppleCredentials`
     still returns the cached `{ appleUserId, email }`.
3. **"Hide my email"** (Apple Private Relay).
   - On the Apple sheet, choose **Hide My Email**.
   - Expect: Supabase user row has `..@privaterelay.appleid.com` address.
     Lafla treats this like any other email; deliverability is Apple's
     problem, not ours. Confirm transactional emails (password resets, etc.)
     are NOT sent to Apple Sign-In users.

## Revoking access

If a user deletes their Lafla account, also revoke their Apple token via
the [Apple Token Revocation endpoint](https://developer.apple.com/documentation/sign_in_with_apple/revoke_tokens).
Required by App Store Guideline 5.1.1(v). We do not yet automate this;
track follow-up in `docs/ADR-001-data-flywheel.md`.
