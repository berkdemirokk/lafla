# RevenueCat — Production Wiring Guide

**STATUS (May 2026, updated):**
- ✅ `react-native-purchases` SDK wired in `lib/iap.ts`
- ✅ Production iOS API key live in `apps/mobile/app.json`
  (`appl_bqTdlDWgyIlphLIlVGGRuNDtuIu`)
- ✅ RC entitlement `Lafla Pro` exists; `PREMIUM_ENTITLEMENT` constant in
  `lib/iap.ts` matches it exactly (note the space + caps — RC identifiers
  are immutable, code follows the dashboard)
- ✅ RC offering `default` exists with `$rc_monthly` + `$rc_annual` packages
- ⚠️  **App Store Connect IAP products NOT yet created**. The two RC products
  (`monthly`, `yearly`) currently point at RC's internal **Test Store**, not
  real App Store products. Sandbox / production purchases will fail until
  the App Store side is wired (see §1 below).

**Remaining steps to go live:**
1. In App Store Connect: create `lafla.premium.monthly` + `lafla.premium.yearly`
   as auto-renewable subscriptions in the same group (see §1)
2. In RC dashboard → Products → "Lafla (App Store)" → **+ New** (or **Import**)
   → add both product IDs from step 1
3. Attach both products to the `Lafla Pro` entitlement
4. In the `default` offering: replace the Test Store packages with App Store
   ones (or create new packages bound to the App Store products)
5. EAS dev build → sandbox test → submit for review

Until step 1 lands, the paywall shows real UI but `purchasePackage()` will
return `{ ok: false, error: "..." }`. Mock fallback (Expo Go) still works.

---

## Original setup runbook (4 sections, ~10 min):

The public surface of `lib/iap.ts` and `lib/premium-gate.ts` is the contract.
**Do not change those signatures** — change the bodies.

---

## 0. Prerequisites

- Apple Developer account with **Paid Apps Agreement** signed and tax/banking
  forms completed in App Store Connect. RevenueCat cannot read products
  before this is green.
- App created in App Store Connect with the production bundle identifier
  (e.g. `com.berk.lafla`). The same bundle ID goes into the RevenueCat
  iOS app config.
- RevenueCat account at https://app.revenuecat.com.

---

## 1. Configure products in App Store Connect

Create two **auto-renewable subscriptions** in the same subscription group:

| Product ID            | Type      | Price (TR) | Duration |
| --------------------- | --------- | ---------- | -------- |
| `lafla.premium.monthly` | Auto-renew | 99 ₺      | 1 month  |
| `lafla.premium.yearly`  | Auto-renew | 599 ₺     | 1 year   |

Mirror the localized name / description per locale (Turkish first,
English fallback). Submit for review **with the first build that includes
RevenueCat** — products stay `Waiting for Review` until then.

---

## 2. Configure RevenueCat dashboard

1. **Project → Apps → + New** → iOS. Paste the bundle ID. Upload the
   App Store Connect **in-app purchase shared secret**
   (App Store Connect → Users and Access → Integrations → App-Specific
   Shared Secret).
2. **Products** → import from App Store Connect. Both
   `lafla.premium.monthly` and `lafla.premium.yearly` should appear.
3. **Entitlements** → entitlement identifier `Lafla Pro` already exists.
   Attach the two App Store products created in step 1 to it. This
   string is mirrored in `PREMIUM_ENTITLEMENT` in `lib/iap.ts`. Note:
   identifiers are immutable in RC — if you want a different one
   (e.g. `premium`), delete + recreate AND update the constant.
4. **Offerings** → create the default offering `default`. Add two packages:
   - Identifier `monthly` (or `$rc_monthly`) → `lafla.premium.monthly`
   - Identifier `yearly`  (or `$rc_annual` ) → `lafla.premium.yearly`
   The identifier strings here are what `purchasePackage('monthly' | 'yearly')`
   maps to in `lib/iap.ts`.
5. **API Keys** → copy the **public SDK key** for iOS
   (`appl_xxxxxxxxxxxxxxxx`). This is safe to embed in the client.
   The **secret key** is server-only — do NOT put it in the app.

---

## 3. Wire keys into the app

The mock today reads nothing. Production needs the public SDK key visible
at runtime. Add it to `app.json` under `expo.extra`:

```jsonc
{
  "expo": {
    "extra": {
      "revenuecatIosKey": "appl_xxxxxxxxxxxxxxxx",
      "revenuecatEntitlement": "premium"
    }
  }
}
```

Read it in `lib/iap.ts` via:

```ts
import Constants from "expo-constants";
const RC_KEY = Constants.expoConfig?.extra?.revenuecatIosKey as string;
```

For separate dev / prod keys, branch on `process.env.EAS_BUILD_PROFILE`
or split via `app.config.ts` — RevenueCat has a single SDK that talks to
the same backend, but you typically want a separate **project** per env
so sandbox testers don't pollute production analytics.

---

## 4. Install + initialize the SDK

```bash
pnpm --filter mobile add react-native-purchases
```

`react-native-purchases` ships native modules, so this requires a **dev
client** (`expo prebuild` + `eas build --profile development`) or EAS
build — it does not run in Expo Go.

Add a one-time init at app start (e.g. in `app/_layout.tsx`):

```ts
import Purchases, { LOG_LEVEL } from "react-native-purchases";
import Constants from "expo-constants";

useEffect(() => {
  if (__DEV__) Purchases.setLogLevel(LOG_LEVEL.DEBUG);
  Purchases.configure({
    apiKey: Constants.expoConfig?.extra?.revenuecatIosKey as string,
    // appUserID: omit to let RevenueCat generate an anonymous ID,
    // OR pass your Supabase user.id once the user is signed in to
    // share entitlements across devices.
  });
}, []);
```

If the user signs in **after** Purchases is configured, call
`Purchases.logIn(supabaseUserId)` so anonymous-purchase history merges
into the authenticated account.

---

## 5. Replace mock bodies in `lib/iap.ts`

Keep the function signatures identical. Sketch:

```ts
import Purchases from "react-native-purchases";

export async function isPremium(): Promise<boolean> {
  const info = await Purchases.getCustomerInfo();
  return info.entitlements.active[PREMIUM_ENTITLEMENT] !== undefined;
}

export async function purchasePackage(id: PackageId): Promise<PurchaseResult> {
  try {
    const offerings = await Purchases.getOfferings();
    const pkg = offerings.current?.availablePackages.find(
      (p) => p.identifier === id || p.packageType.toLowerCase() === id,
    );
    if (!pkg) return { ok: false, error: `Package not found: ${id}` };
    const { customerInfo } = await Purchases.purchasePackage(pkg);
    const active = customerInfo.entitlements.active[PREMIUM_ENTITLEMENT];
    return active
      ? { ok: true, entitlement: PREMIUM_ENTITLEMENT }
      : { ok: false, error: "Entitlement not active after purchase" };
  } catch (err: any) {
    if (err?.userCancelled) return { ok: false, error: "cancelled" };
    return { ok: false, error: err?.message ?? "Purchase failed" };
  }
}

export async function restorePurchases(): Promise<boolean> {
  const info = await Purchases.restorePurchases();
  return info.entitlements.active[PREMIUM_ENTITLEMENT] !== undefined;
}
```

The mock `__setMockPremium` / `__clearMockPremium` helpers can stay as
no-ops in production (or be guarded behind `__DEV__`) so debug menus
keep compiling.

---

## 6. Sandbox testing in App Store Connect

1. **App Store Connect → Users and Access → Sandbox → Testers** → create
   a sandbox tester with a fresh email (NOT a real Apple ID). Region: Türkiye.
2. On the test device: **Settings → App Store → Sandbox Account** → sign
   in with the sandbox tester.
3. Launch a TestFlight or development build of Lafla. Hit the paywall →
   tap monthly → confirm the StoreKit prompt. Purchases in sandbox renew
   accelerated (1 month → ~5 min) so subscription expiry is testable in
   a single session.
4. Verify on RevenueCat dashboard → **Customers** → the test user's
   entitlement appears as `premium` with `Active`.

Common gotchas:
- Sandbox accounts can't be used in the real App Store; they fail silently
  if you try to "buy" in sandbox while signed in with a real Apple ID.
- The first sandbox purchase often shows `Cannot connect to iTunes Store`
  on simulator. Use a physical device.
- StoreKit Configuration files (`.storekit`) let you test offline in
  Xcode, but they bypass RevenueCat — useful for UI work, not for
  validating the wiring done above.

---

## 7. Environment differences

| Concern         | Dev (mock)                            | Sandbox / TestFlight                 | Production                       |
| --------------- | ------------------------------------- | ------------------------------------ | -------------------------------- |
| Backend         | AsyncStorage `lafla.premium.mock`     | RevenueCat + Apple sandbox           | RevenueCat + Apple production    |
| API key         | none                                  | iOS public SDK key (sandbox project) | iOS public SDK key (prod project)|
| Apple ID        | n/a                                   | Sandbox tester                       | Real Apple ID                    |
| Renewal speed   | instant (manual)                      | accelerated (~minutes)               | real (1 month / 1 year)          |
| Refund testing  | flip `__setMockPremium(false)`        | App Store Connect → refund request   | RevenueCat dashboard / Apple     |
| Receipt source  | local                                 | sandbox.itunes.apple.com             | buy.itunes.apple.com             |

The `EAS_BUILD_PROFILE` env var (`development` / `preview` / `production`)
is the cleanest switch — branch on it inside `iap.ts` if you want the
mock to remain available in dev builds even after the real SDK is wired.

---

## 8. Integration with `paywall.tsx`

`apps/mobile/app/paywall.tsx` currently shows an "Alert: yakında" message
when the CTA is tapped (function `handlePurchase`). When production is
ready:

```ts
import { purchasePackage, restorePurchases } from "../lib/iap";
import { usePremium } from "../lib/premium-gate";

const { refresh } = usePremium();

const handlePurchase = async () => {
  const result = await purchasePackage(plan); // plan is 'monthly' | 'yearly'
  if (result.ok) {
    await refresh();
    router.replace("/(tabs)"); // or wherever post-purchase lands
  } else if (result.error !== "cancelled") {
    Alert.alert("Satın alma başarısız", result.error ?? "Tekrar dene.");
  }
};
```

Add a "Satın alımları geri yükle" link that calls
`await restorePurchases()` — Apple requires this on every paywall.

---

## 9. Server-side validation (optional but recommended)

RevenueCat exposes **webhooks** (`INITIAL_PURCHASE`, `RENEWAL`,
`CANCELLATION`, `EXPIRATION`) — point them at a Supabase Edge Function
to mirror the `is_premium` / `premium_expires_at` columns on the
`profiles` table. This makes server-side gating (e.g. premium-only
scenarios) trivial and survives a re-install with no internet.

---

## 10. Checklist before shipping

- [ ] Paid Apps Agreement active in App Store Connect
- [ ] Both products `Ready to Submit`
- [ ] Entitlement `premium` configured in RevenueCat
- [ ] Offering `default` has both `monthly` and `yearly` packages
- [ ] Public SDK key in `app.json extra.revenuecatIosKey`
- [ ] `react-native-purchases` installed; dev client rebuilt
- [ ] Mock bodies in `lib/iap.ts` replaced
- [ ] Paywall calls `purchasePackage(plan)` and `restorePurchases()`
- [ ] Sandbox tester confirmed end-to-end on a physical device
- [ ] Privacy nutrition labels updated in App Store Connect
- [ ] Subscription terms / privacy / restore links visible on paywall
