# Subscription State — Lifecycle & StoreKit Mapping

Lafla ships a **mock subscription layer** today
(`apps/mobile/lib/subscription-state.ts`) that models the full lifecycle
of an auto-renewable subscription: trial, active, cancellation, grace
period, expiration. The rest of the app (paywall copy, settings screen,
"Manage subscription" CTAs, deep-link banners) reads from this layer so
the UI behaves correctly long before the App Store agreement is live.

This doc explains:

1. Why we have two modules (`iap.ts` vs `subscription-state.ts`).
2. The state machine: how a user moves through the lifecycle.
3. How each state field maps to **Apple StoreKit 2** / **RevenueCat
   `CustomerInfo`** in production.
4. How to test each state path against the mock.

If you're swapping the mock for RevenueCat for real, read this in parallel
with [`REVENUECAT.md`](./REVENUECAT.md) — that file covers the SDK install
+ dashboard config; this one covers the data shape.

---

## 1. Why two modules

| Module                        | Question it answers                                | Surface                                                        |
| ----------------------------- | -------------------------------------------------- | -------------------------------------------------------------- |
| `lib/iap.ts`                  | "Can this user use a premium feature right *now*?" | `isPremium(): Promise<boolean>`                                |
| `lib/subscription-state.ts`   | "What is the shape of this user's subscription?"   | `SubscriptionState { tier, isActive, expiresAt, inTrial, … }`  |

`iap.isPremium` is a **derived boolean** over the richer state. The
identity holds:

```
isPremium  ===  state.isActive  &&  state.tier !== 'free'
```

We keep them separate so:

- Feature gates stay one cheap AsyncStorage read — no JSON-shape coupling.
- Paywall / settings get the full picture without the gate code needing
  to grow new branches every time we add a state (grace period, refund,
  family-sharing pause, etc.).
- The contracts evolve independently. `iap.ts` is a stable boolean
  forever; `subscription-state.ts` is allowed to grow new fields as
  Apple ships new entitlement types.

`subscription-state.ts` does **not** import `iap.ts` and `iap.ts` does
**not** import `subscription-state.ts`. They both read AsyncStorage —
different keys (`lafla.premium.mock` vs `lafla.subscription`). In
production both will be backed by the same RevenueCat `CustomerInfo`
object and the two storage keys collapse into one.

---

## 2. State machine

```
                   ┌────────────────┐
                   │      free      │ ◀──────────────────────────────┐
                   │  isActive=false│                                │
                   └───────┬────────┘                                │
                           │ startTrial('monthly' | 'yearly')        │
                           ▼                                         │
                   ┌────────────────┐                                │
                   │     trial      │   inTrial=true                 │
                   │  isActive=true │   trialEndsAt=+7d              │
                   │  willRenew=true│   expiresAt=trialEndsAt        │
                   └───────┬────────┘                                │
              cancelSub  ─ │ ─  trial elapses (7d)                   │
                ┌──────────┴────────────┐                            │
                ▼                       ▼                            │
        ┌──────────────┐         ┌────────────────┐                  │
        │ trial (won't │         │     active     │  paid period     │
        │   renew)     │         │  isActive=true │  starts; isActive│
        │ willRenew=fa │         │  inTrial=false │  stays true,     │
        └──────┬───────┘         │  willRenew=true│  expiresAt rolls │
               │                 └───────┬────────┘  on renewal      │
               │ trialEndsAt elapses     │                           │
               │                         │ cancelSubscription()      │
               │                         ▼                           │
               │                 ┌────────────────┐                  │
               │                 │   cancelled    │ willRenew=false  │
               │                 │  isActive=true │ user keeps access│
               │                 │  willRenew=false│ until expiresAt │
               │                 └───────┬────────┘                  │
               │                         │ expiresAt elapses         │
               │                         │ (no Apple grace)          │
               └─────────────────────────┴───────────────────────────┘
                              drop back to free
```

### State definitions

| State              | `tier`               | `isActive` | `inTrial` | `willRenew` |
| ------------------ | -------------------- | ---------- | --------- | ----------- |
| Free               | `free`               | false      | false     | false       |
| Trial              | `premium_*`          | true       | true      | true        |
| Trial (cancelled)  | `premium_*`          | true       | true      | false       |
| Active             | `premium_*`          | true       | false     | true        |
| Cancelled (grace)  | `premium_*`          | true       | false     | false       |
| Expired            | `free`               | false      | false     | false       |

`expiresAt` is non-null in every state except `free`/`expired`.
`trialEndsAt` is non-null only while `inTrial === true`.

### Transitions

| Trigger                   | From            | To                       |
| ------------------------- | --------------- | ------------------------ |
| `startTrial('monthly')`   | free            | Trial (monthly)          |
| `startTrial('yearly')`    | free            | Trial (yearly)           |
| `cancelSubscription()`    | Trial / Active  | Trial(c) / Cancelled     |
| time passes, trial ends   | Trial           | Active                   |
| time passes, trial ends   | Trial(c)        | Cancelled (grace)        |
| time passes, expires      | Cancelled       | Free                     |
| time passes, renews       | Active          | Active (expiresAt + 1mo) |
| `restorePurchases()`      | any             | unchanged (re-reads)     |

The reconciliation step inside `getSubscriptionState()` is what makes the
time-based transitions work without a background tick — every read
notices that the clock has crossed `trialEndsAt` or `expiresAt` and
mutates the snapshot in place. Production will get the same effect from
StoreKit's `Transaction.updates` stream and RevenueCat's
`addCustomerInfoUpdateListener`.

### Grace period note

Apple offers a **billing retry grace period** (up to 16 days) when a
renewal payment fails — the entitlement stays active while Apple retries
the card. We model this as the **Cancelled** state above: `isActive`
remains true, `willRenew` is false, `expiresAt` is set to the end of the
grace window. Whether the user truly cancelled vs. Apple is retrying is
indistinguishable for gating purposes; what differs is the *copy* we
show ("Renews on X" vs "Premium ends on X" vs "Update your payment
method to keep premium"). When wiring production, branch on
`customerInfo.entitlements.active[premium].billingIssueDetectedAt` to
distinguish the two and show the right banner.

---

## 3. StoreKit 2 / RevenueCat mapping

Production swaps the AsyncStorage mock for `Purchases.getCustomerInfo()`
(RevenueCat) which itself wraps StoreKit 2's `Transaction.currentEntitlements`
on iOS. Field-for-field:

| `SubscriptionState` field | RevenueCat (`CustomerInfo.entitlements.active['premium']`) | StoreKit 2                                                    |
| ------------------------- | ---------------------------------------------------------- | ------------------------------------------------------------- |
| `tier`                    | `productIdentifier` → map to `monthly`/`yearly`            | `Transaction.productID`                                       |
| `isActive`                | `isActive` (presence in `.active` map)                     | `Transaction.revocationDate === nil && expirationDate > now`  |
| `expiresAt`               | `expirationDate` (ISO)                                     | `Transaction.expirationDate`                                  |
| `inTrial`                 | `periodType === 'TRIAL'`                                   | `Transaction.offerType === .introductory`                     |
| `trialEndsAt`             | `expirationDate` while `inTrial`                           | `Transaction.expirationDate` during intro offer               |
| `willRenew`               | `willRenew`                                                | `Product.SubscriptionInfo.RenewalState.autoRenewing`          |

Sketch of the production `getSubscriptionState` body:

```ts
import Purchases from "react-native-purchases";
import { PREMIUM_ENTITLEMENT } from "./iap";

export async function getSubscriptionState(): Promise<SubscriptionState> {
  const info = await Purchases.getCustomerInfo();
  const ent = info.entitlements.active[PREMIUM_ENTITLEMENT];
  if (!ent) {
    return { tier: "free", isActive: false, expiresAt: null,
             inTrial: false, trialEndsAt: null, willRenew: false };
  }
  const inTrial = ent.periodType === "TRIAL";
  return {
    tier: ent.productIdentifier === "lafla.premium.yearly"
      ? "premium_yearly" : "premium_monthly",
    isActive: true,
    expiresAt: ent.expirationDate,
    inTrial,
    trialEndsAt: inTrial ? ent.expirationDate : null,
    willRenew: ent.willRenew,
  };
}
```

For `startTrial`, the production version is just a `purchasePackage` call
where the package has an introductory offer attached in App Store
Connect. RevenueCat handles the StoreKit `Transaction.offerType` plumbing
for us; we just observe `periodType === 'TRIAL'` on the resulting
`CustomerInfo`.

`cancelSubscription` is the only function that **cannot** be implemented
client-side: Apple requires the user to cancel via Settings → Apple ID →
Subscriptions, or via `manageSubscriptions(in:)` in StoreKit 2. The
production version of this function should `Linking.openURL(
'itms-apps://apps.apple.com/account/subscriptions')` and then poll
`Purchases.getCustomerInfo()` (or subscribe to its update listener) until
`willRenew` flips to false.

`restorePurchases` is a straight pass-through to
`Purchases.restorePurchases()` followed by a re-map to `SubscriptionState`.

---

## 4. Testing each state path

The mock exposes `__setMockSubscription(patch)` and
`__clearMockSubscription()` so you can drop the app into any leg of the
state machine without waiting seven days. Wire these into the existing
dev menu (next to `__setMockPremium`) and you can demo:

```ts
import { __setMockSubscription } from "../lib/subscription-state";

// Show the trial banner ending tomorrow.
await __setMockSubscription({
  tier: "premium_yearly",
  isActive: true,
  inTrial: true,
  trialEndsAt: new Date(Date.now() + 86_400_000).toISOString(),
  expiresAt:   new Date(Date.now() + 86_400_000).toISOString(),
  willRenew: true,
});

// Show the "premium ends on X" cancelled-grace banner.
await __setMockSubscription({
  tier: "premium_monthly",
  isActive: true,
  inTrial: false,
  trialEndsAt: null,
  expiresAt: new Date(Date.now() + 3 * 86_400_000).toISOString(),
  willRenew: false,
});

// Reset to "never subscribed".
await __clearMockSubscription();
```

The reconciliation pass inside `getSubscriptionState()` runs on every
read, so setting `expiresAt` to a past timestamp + `willRenew: false`
will *automatically* drop the user back to `free` on the next read — no
need to also flip `tier`.

---

## 5. Relationship to `iap.ts` and `premium-gate.ts`

- `iap.ts` is **the gate**. Feature code calls `isPremium()` once and
  proceeds or routes to `/paywall`. It is intentionally unaware of
  `inTrial`, `willRenew`, `expiresAt` — those are render-time concerns.
- `premium-gate.ts` is the React-side cache of that boolean. Pair it with
  `useSubscription()` when the screen needs both ("user has premium AND
  is currently in trial → show 'Trial ends in 3 days' badge").
- `subscription-state.ts` is **the description**. Paywall, settings,
  trial-ending push notifications, "manage subscription" CTAs all read
  from here.

In code:

```tsx
import { usePremium } from "../lib/premium-gate";
import { useSubscription } from "../lib/subscription-state";

function PremiumBadge() {
  const { isPremium } = usePremium();
  const { state } = useSubscription();
  if (!isPremium) return <Text>Free</Text>;
  if (state.inTrial)  return <Text>Trial — ends {state.trialEndsAt}</Text>;
  if (!state.willRenew) return <Text>Premium until {state.expiresAt}</Text>;
  return <Text>Premium · {state.tier === "premium_yearly" ? "Yearly" : "Monthly"}</Text>;
}
```

When swapping the mock for RevenueCat, both modules switch in lockstep —
their backing storage (`lafla.premium.mock`, `lafla.subscription`) is
replaced by reads against the same `CustomerInfo` object. No call sites
in feature code need to change.
