# Lafla — Static Web (GitHub Pages)

Static pages served from this folder via **GitHub Pages → Deploy from a branch → `master` / `/docs/web`**.

Live URL: <https://berkdemirokk.github.io/lafla/>

## Files

| File | Purpose |
| --- | --- |
| `index.html` | Landing page (TR). Hero, 3-feature row, App Store CTA, stats strip, footer. |
| `privacy.html` | Privacy Policy — bilingual TR + EN. KVKK / GDPR / Apple ATT compliant. |
| `terms.html` | Terms of Service — bilingual TR + EN. Apple IAP renewal terms included. |
| `delete-account.html` | **Account deletion landing** — required by Apple Guideline 5.1.1(v). No login required. |

All four HTML files share the same inline-CSS style system: black background (`#000`), white text, pink brand (`#FF067A`), cyan accent (`#00FFFF`), system font stack, max-width 720px, mobile-first. No framework, no build step.

## One-time GitHub Pages setup

1. Push these files to the `master` branch.
2. Go to <https://github.com/berkdemirokk/lafla/settings/pages>.
3. Under **Source**, choose **Deploy from a branch**.
4. **Branch** → `master`, **Folder** → `/docs/web`. Save.
5. **Enforce HTTPS** → on.
6. Wait ~2 minutes, then visit:
   - <https://berkdemirokk.github.io/lafla/>
   - <https://berkdemirokk.github.io/lafla/privacy.html>
   - <https://berkdemirokk.github.io/lafla/terms.html>
   - <https://berkdemirokk.github.io/lafla/delete-account.html>

All four should return **200 OK**.

## Updating content

Edit the HTML directly in this folder, commit, and push to `master`. GitHub Pages redeploys automatically within a minute. There is no build pipeline.

When updating legal copy, also bump the “Last updated / Son güncelleme” date inside each file.

## URLs referenced from the mobile app

These pages are linked from `apps/mobile/app/paywall.tsx` and `apps/mobile/app/settings.tsx` via `Linking.openURL(...)`. If you ever migrate to the `lafla.app` custom domain, update those `openURL` strings in lockstep (see `docs/GITHUB_PAGES_SETUP.md` for the full migration steps).

## Verification before App Store submission

- [ ] All four pages return 200 over HTTPS.
- [ ] `privacy.html` lists every third party currently in the app (Supabase, Apple IAP, RevenueCat, Sentry, PostHog).
- [ ] `delete-account.html` does NOT require a login or app reinstall.
- [ ] `terms.html` covers Apple IAP auto-renewal, cancellation via Apple Settings, and refund routing through `reportaproblem.apple.com`.
- [ ] All `mailto:berkkdemirok@gmail.com` links work in Safari mobile.
