# Deep Linking

Lafla supports two link surfaces that resolve to the same in-app destinations:

1. **iOS Universal Links** — `https://lafla.app/...` — for web, email, and social shares.
2. **Custom URL Scheme** — `lafla://...` — for in-app navigation, push notification payloads, and intra-app redirects.

The parsing/routing logic lives in [`apps/mobile/lib/deep-links.ts`](../apps/mobile/lib/deep-links.ts). Both link shapes normalize to the same `{ type, params }` descriptor, so consumers don't need to branch on the source.

---

## 1. iOS Universal Links

Universal Links are HTTPS URLs that open the Lafla app directly when it's installed, and gracefully fall through to the marketing site when it isn't. This is the surface we hand out to friends, email recipients, and ad clickers.

Key properties:

- The link looks like a normal web URL — no scary `lafla://` in WhatsApp previews.
- iOS verifies ownership of `lafla.app` by fetching a signed Apple App Site Association (AASA) file from the domain. If verification fails, the link opens in Safari instead of the app — so the marketing landing page should always be a viable fallback.
- Works from Safari, Mail, Messages, WhatsApp, Slack, etc. **Does not** work from arbitrary in-app browsers that intercept HTTPS clicks (rare today, but Instagram historically did this).

### Supported paths

| URL | In-app destination |
| --- | --- |
| `https://lafla.app/scenario/<id>` | Scenario detail (`/scenario/[id]`) |
| `https://lafla.app/?ref=<code>` | Referral screen with code prefilled |
| `https://lafla.app/paywall` | Paywall |

---

## 2. Apple App Site Association (AASA) file

Apple fetches this file once when the app is installed (and periodically afterward) to confirm the app is allowed to handle `lafla.app` links.

**Location (mandatory):** `https://lafla.app/.well-known/apple-app-site-association`

**Requirements:**

- Served over HTTPS with a valid certificate.
- `Content-Type: application/json` (Apple is lenient but stick to this).
- **No** `.json` file extension — Apple requests the exact path above.
- **No** redirect — Apple follows zero redirects on this fetch.
- File size under 128 KB.

**File contents:**

```json
{
  "applinks": {
    "apps": [],
    "details": [
      {
        "appID": "<TEAM_ID>.com.lafla.app",
        "paths": ["/scenario/*", "/?ref=*", "/paywall"]
      }
    ]
  }
}
```

Replace `<TEAM_ID>` with the Apple Developer Team ID (visible in the Apple Developer portal under Membership). The bundle identifier is `com.lafla.app` (already configured in `app.json`).

Once deployed, validate with Apple's tool: <https://search.developer.apple.com/appsearch-validation-tool/> — enter `lafla.app` and confirm the AASA file is reachable and parses.

---

## 3. Custom URL Scheme

The `lafla://` scheme is registered (via the existing `"scheme": "lafla"` entry in `app.json`) and is used for:

- **Push notification deep links** — APNs payload `link: "lafla://scenario/order.cafe.1.1"` opens that scenario when tapped.
- **In-app redirects** that need a URL-shaped value (e.g., a returnTo after auth).
- **Local development / Expo Go testing** — `npx uri-scheme open lafla://paywall --ios` from a dev machine.

### Supported paths

| URL | In-app destination |
| --- | --- |
| `lafla://scenario/<id>` | Scenario detail |
| `lafla://referral?code=<code>` | Referral screen with code prefilled |
| `lafla://paywall` | Paywall |

The custom scheme should **not** be used for share/marketing links — see section 7.

---

## 4. app.json wiring

The Expo config needs one addition under the `ios` block to advertise the associated domain to iOS. The custom scheme is already present.

```json
"ios": {
  "associatedDomains": ["applinks:lafla.app"]
}
```

After adding this, run `expo prebuild --clean` (or rely on EAS Build) to regenerate the iOS project. The setting writes into `Lafla.entitlements` as `com.apple.developer.associated-domains` and is what tells iOS to start enforcing AASA verification.

Note: `associatedDomains` requires the Associated Domains capability to be enabled on the App ID in the Apple Developer portal. EAS handles this automatically; manual signing flows need to enable it once.

---

## 5. Testing

### Universal Links

1. Deploy the AASA file to `https://lafla.app/.well-known/apple-app-site-association`.
2. Install a build that includes the `associatedDomains` entitlement (TestFlight or an internal EAS build — Expo Go cannot register universal links).
3. On the device, open **Notes** or **Messages** (not Safari's address bar — Safari treats typed URLs differently from tapped ones).
4. Paste `https://lafla.app/scenario/order.cafe.1.1` and tap. The app should open directly to that scenario.
5. If it opens Safari instead: long-press the link → "Open in Lafla" should appear. If it doesn't, AASA verification has failed — check `Console.app` connected to the device for `swcd` log lines.

### Custom scheme

From a dev machine with the device or simulator connected:

```bash
npx uri-scheme open "lafla://scenario/order.cafe.1.1" --ios
npx uri-scheme open "lafla://referral?code=ABC123" --ios
npx uri-scheme open "lafla://paywall" --ios
```

Or in the iOS Simulator: `xcrun simctl openurl booted "lafla://paywall"`.

### Programmatic test

In any screen, you can validate the parser without leaving the app:

```ts
import { parseDeepLink } from '@/lib/deep-links';

console.log(parseDeepLink('https://lafla.app/scenario/order.cafe.1.1'));
// → { type: 'scenario', params: { id: 'order.cafe.1.1' } }
```

---

## 6. Marketing use cases

| Use case | Link to hand out | Why HTTPS, not `lafla://` |
| --- | --- | --- |
| **Friend share via WhatsApp** | `https://lafla.app/scenario/<id>` | Friends without the app see a marketing preview; friends with the app jump straight in. |
| **Email campaign CTA — "Unlock everything"** | `https://lafla.app/paywall` | Email clients render web URLs; recipients without the app land on the marketing paywall page. |
| **Referral link** | `https://lafla.app/?ref=<code>` | Same — auto-opens the referral screen for installed users, marketing landing page for everyone else. The web landing page should read `?ref=` and pass the code through the App Store via a custom attribution mechanism (Branch, AppsFlyer, or a manual cookie-and-deferred-deep-link). |
| **Push notification payload** | `lafla://scenario/<id>` | Push is intra-app; user already has the app installed by definition. No web fallback needed. |
| **QR code on a poster** | `https://lafla.app/scenario/<id>` | A QR code is the canonical case for universal links — anyone can scan, app or not. |

Rule of thumb: **anything leaving the app uses the HTTPS URL; anything originating inside the app or its own infra uses `lafla://`**.

---

## 7. Integration into existing screens

### `apps/mobile/app/referral.tsx`

The Share sheet message currently needs to include the **HTTPS** URL, not the `lafla://` URL:

```ts
// Good — works for friends with or without the app
const shareUrl = `https://lafla.app/?ref=${myCode}`;

// Bad — fails on devices without the app (no handler for lafla://)
const shareUrl = `lafla://referral?code=${myCode}`;
```

The flow for a recipient:

1. Friend taps the HTTPS link in WhatsApp.
2. **App installed:** iOS routes to Lafla via Universal Link → `handleDeepLink` parses → push to `/referral?code=...` → screen autofills.
3. **App not installed:** Safari opens the marketing site, which surfaces an App Store button. After install, the marketing landing should pass `ref` through a deferred-deep-link mechanism (out of scope for this doc, but tracked separately).

### Root URL handler

A single listener at app start dispatches every incoming link. Typical wire-up (illustrative — actual placement is in `app/_layout.tsx`):

```ts
import * as Linking from 'expo-linking';
import { router } from 'expo-router';
import { handleDeepLink } from '@/lib/deep-links';

// Cold start: link that opened the app
Linking.getInitialURL().then((url) => {
  if (url) handleDeepLink(url, router);
});

// Warm: link delivered while app is running
const sub = Linking.addEventListener('url', ({ url }) => {
  handleDeepLink(url, router);
});
// → sub.remove() on cleanup
```

`handleDeepLink` returns `false` for unrecognized links so the caller can fall back to a default route (typically: do nothing and let the user stay where they are).

### Push notification handler

Notification payloads should set `data.link` to a `lafla://` URL. The notification tap handler calls `handleDeepLink(data.link, router)` — same code path as universal links.
