# Family Plan — Apple Family Sharing Wiring

Apple Family Sharing is the only supported way to share an auto-renewable
subscription with up to 5 family members. Once enabled on each product,
the OS does the entitlement transfer for us. RevenueCat picks the
shared entitlement up on the family member's device the same way it
detects a normal purchase — no client code changes required.

The in-app `Aile Planı` screen (`apps/mobile/app/family.tsx`) is
**cosmetic**: it lets the organizer track who is on their family group,
since iOS provides no API to read the real Family Sharing roster.

---

## 1. App Store Connect — enable Family Sharing on each product

For both `lafla.premium.monthly` and `lafla.premium.yearly`:

1. App Store Connect → My Apps → Lafla → Subscriptions
2. Open each auto-renewable subscription product
3. Scroll to the **Family Sharing** section
4. Toggle **Family Sharing** ON
5. Save

The toggle is per-product. Both monthly and yearly need it.

Family Sharing **cannot be turned off** once turned on for a product;
this is a permanent App Store Connect choice. (It can be turned on later
for an existing live product, but never off.)

---

## 2. RevenueCat — confirm the entitlement honors family sharing

RevenueCat reads the Family Sharing flag straight from the App Store
Connect product metadata. No separate RC dashboard toggle exists at the
entitlement level today — once step 1 is done, the next time RC syncs
product metadata the `Lafla Pro` entitlement will surface on family
member accounts automatically.

To verify:

1. RevenueCat dashboard → Products → `lafla.premium.monthly`
2. Confirm the product card shows **Family Sharing: enabled** (it
   reflects what App Store Connect reports)
3. Same check for `lafla.premium.yearly`

If the indicator is stale, click **Refresh from App Store** at the
top of the Products page.

---

## 3. Testing end-to-end

Real testing requires:

- An Apple Family group with at least two real Apple IDs (sandbox testers
  cannot form a Family Sharing group — this is an Apple limitation)
- A TestFlight build on both devices

Steps:

1. **Organizer device** — sign in with the organizer's Apple ID.
   Open Lafla → paywall → buy `lafla.premium.monthly`.
2. **Family member device** — sign in with the second family Apple ID
   that is part of the same Family group in iOS Settings → Family.
3. After purchase the member should receive a system notification
   "Your family member shared a subscription" inside the App Store.
4. Member opens Lafla. `lib/iap.ts → isPremium()` returns `true` on
   first call because `getCustomerInfo()` reports the shared
   entitlement under `entitlements.active["Lafla Pro"]`. The paywall
   should no longer show; gated features unlock.

The detection on the member device is purely a RevenueCat call —
the existing `lib/iap.ts` already does the right thing, so no code
ships with this release.

---

## 4. iOS Settings deep link

The Family Plan screen exposes a "Family Sharing ayarlarına git" button
that opens `App-Prefs:FAMILY`. This is an unofficial URL scheme — Apple
has historically allowed it but does not guarantee long-term support.
If it stops working on a future iOS version, `Linking.openSettings()`
is the fallback (already wired in `family.tsx`).

Real family-member add / remove always happens in iOS Settings →
Family. We never try to manage that from inside the app — Apple would
reject it.

---

## 5. Pricing strategy

Keep the same Pro price (₺99/mo, ₺599/yr) for both individuals and
families. Reasons:

- Apple takes 30% (15% after year one) regardless of whether the
  subscription is shared. There is no rev share back to the developer
  for adding family members.
- Charging more for family-sharable subscriptions is technically
  possible (separate higher-tier product), but it splits the catalog
  and confuses TR users who are price-sensitive. Better to leave the
  price the same and use Family Sharing as a perceived-value boost
  ("5 üyeye kadar paylaşılabilir") on the paywall.
- Competitors (Duolingo, Babbel) sell separate family plans at a
  premium. Our reach is smaller; the conversion lift from a simple
  unified plan outweighs the per-seat revenue loss.

---

## 6. Known limitations

- **Cannot query other members' status.** RevenueCat's
  `getCustomerInfo()` reports only the *current* device's entitlement.
  There is no API call that returns "who else in my family has Pro
  active right now." The Aile Planı dashboard works around this by
  asking the organizer to enter family names manually; the "Pro aktif"
  pill is an **assumption** based on Family Sharing being enabled, not
  a verified status.
- **Sandbox testing limits.** Sandbox testers can purchase, but they
  cannot form a real Apple Family. End-to-end family-share testing
  requires production Apple IDs + TestFlight.
- **No mid-period grant.** If the organizer enables Family Sharing on
  a product *after* a purchase, existing buyers do not retroactively
  get shared entitlements — only purchases made while the flag was on
  are shareable.
- **One organizer per family.** The "Organizatör" toggle in the app is
  local-only — it does not change iOS-level Family Sharing roles.

---

## 7. Implementation files

| File                                             | Role                                       |
| ------------------------------------------------ | ------------------------------------------ |
| `apps/mobile/lib/family-plan.ts`                 | AsyncStorage CRUD for the local dashboard  |
| `apps/mobile/app/family.tsx`                     | Aile Planı screen                          |
| `apps/mobile/components/FamilyMemberRow.tsx`     | Reusable list row                          |
| `docs/FAMILY_PLAN.md`                            | This file                                  |

Storage key: `lafla.family.plan` (JSON: `{ organizerKnown, members: [] }`).

---

## 8. Integration to-do (manual, not automated)

These three edits aren't part of this change set. When ready to expose
the screen:

1. `apps/mobile/app/_layout.tsx` — add `<Stack.Screen name="family" />`
2. `apps/mobile/app/settings.tsx` — add an "Aile Planı" row that calls
   `router.push("/family")`. Only show the row when `isPremium()` is
   `true` (use `usePremium()` from `lib/premium-gate.ts`).
3. `apps/mobile/app/paywall.tsx` — add a small line near the disclaimer:
   `"Apple Family Sharing ile 5 üyeye kadar paylaşılabilir."`

Once App Store Connect step 1 is done, nothing else in the codebase
needs to change to support Family Sharing — it just starts working
on family members' devices.
