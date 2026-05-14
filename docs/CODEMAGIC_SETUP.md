# Codemagic Setup — Lafla iOS TestFlight Pipeline

**Why Codemagic:** EAS Free tier exhausted; Codemagic gives 500 macOS M2 minutes/month free (≈ 25-30 iOS builds/month), no credit card.

---

## STEP 1 — App Store Connect API Key (5 min)

Codemagic needs an ASC API Key to fetch signing files + upload to TestFlight. The `.p8` Subscription Key you already have is for in-app purchases — DIFFERENT thing.

1. Go to https://appstoreconnect.apple.com → **Users and Access** → **Integrations** → **App Store Connect API**
2. Click **+** to generate a new key
3. **Name:** "Codemagic CI"
4. **Access:** "Admin" (or "App Manager" if you want to scope)
5. Click **Generate**
6. **DOWNLOAD the .p8 file immediately** — you can only download once
7. Note the values shown:
   - **Issuer ID** (UUID at the top of the API Keys page)
   - **Key ID** (10-char alphanumeric, shown in the key's row)

You now have:
- `AuthKey_XXXXXXXXXX.p8` file
- Issuer ID (e.g. `69a6de6f-1234-5678-9abc-def012345678`)
- Key ID (e.g. `ABCDEFGHIJ`)

---

## STEP 2 — Create App in App Store Connect (3 min)

If you haven't already:

1. https://appstoreconnect.apple.com → **My Apps** → **+** → **New App**
2. **Platform:** iOS
3. **Name:** "Lafla"
4. **Primary Language:** Turkish
5. **Bundle ID:** select `com.lafla.app` from dropdown
6. **SKU:** `lafla-001` (any unique string)
7. **User Access:** Full Access
8. Click **Create**

The numeric **App ID** shown in the URL/details is your `ASC App ID` (e.g. `6630391133`).

---

## STEP 3 — Codemagic Account + Repo Connect (5 min)

1. Go to https://codemagic.io → **Sign up with GitHub**
2. Authorize Codemagic to access your repos
3. Find `berkdemirokk/lafla` → **Set up build**
4. Codemagic auto-detects `codemagic.yaml` from the repo root ✓

---

## STEP 4 — Environment Variables (5 min)

In Codemagic project settings → **Environment variables**:

Create a group called **`app_store_credentials`** with these 3 secrets:

| Variable | Value | Secure? |
|----------|-------|---------|
| `APP_STORE_CONNECT_PRIVATE_KEY` | Full contents of `AuthKey_XXXXXXXXXX.p8` (entire file, including `-----BEGIN PRIVATE KEY-----` lines) | ✅ Yes |
| `APP_STORE_CONNECT_KEY_IDENTIFIER` | Key ID from Step 1 (e.g. `ABCDEFGHIJ`) | No |
| `APP_STORE_CONNECT_ISSUER_ID` | Issuer ID UUID from Step 1 | No |

Save the group.

---

## STEP 5 — App Store Connect Integration (3 min)

In Codemagic → **Team settings** (top-right gear) → **Integrations** → **App Store Connect**:

1. **+ Add integration**
2. **Name:** `codemagic` (this matches `auth: integration` in codemagic.yaml — keep this exact name)
3. **Key ID:** Key ID from Step 1
4. **Issuer ID:** Issuer ID from Step 1
5. **Upload .p8 file:** the `AuthKey_XXXXXXXXXX.p8` you downloaded
6. **Save**

---

## STEP 6 — TestFlight Beta Group (Optional, 2 min)

In App Store Connect → **TestFlight** → **Internal Testing**:

1. **+ Group** → name it `Internal Testers`
2. Add your own Apple ID as a tester
3. (Optional) Add other testers

This matches the `beta_groups: - Internal Testers` line in `codemagic.yaml`. If you skip this, edit codemagic.yaml to remove that section.

---

## STEP 7 — Trigger First Build (1 min)

In Codemagic → your project → **Start new build**:

1. **Workflow:** `ios-testflight`
2. **Branch:** `master`
3. Click **Start new build**

Build will run for ~20-25 minutes. Watch logs in real time.

---

## EXPECTED OUTCOME

- ✅ `pnpm install` succeeds
- ✅ `expo prebuild` generates `apps/mobile/ios/` native project
- ✅ CocoaPods install all React Native dependencies
- ✅ Code signing configured via ASC API
- ✅ Build .ipa
- ✅ Upload to TestFlight automatically

Within ~10-30 minutes of upload, TestFlight processes the build and notifies your testers.

---

## TROUBLESHOOTING

**"Failed to fetch signing files"** → Step 4/5 ASC credentials wrong; double-check Issuer ID + Key ID exact match.

**"Workspace not found"** → expo prebuild failed. Check earlier logs; usually a pod install or dependency issue.

**"No matching provisioning profile"** → Bundle ID mismatch. Ensure ASC app uses exactly `com.lafla.app` AND your ASC API key has access.

**"500 minute quota exceeded"** → 25-30 builds/month free; if you exceed, $0.038/min after, or upgrade plan.

---

## ALTERNATIVE: GitHub Actions

If Codemagic doesn't work for you, GitHub Actions on private repos has ~200 macOS minutes/month free. See: https://github.com/TanayK07/expo-react-native-cicd for a reference workflow.

---

## ALTERNATIVE: Wait for EAS Reset

EAS Free tier resets June 1, 2026 (17 days). If you can wait, `eas build --profile production --platform ios` will work then with zero new setup since EAS already has your credentials.
