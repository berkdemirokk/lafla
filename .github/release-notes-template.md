# Release vX.Y.Z — <Short Theme>

<!--
GitHub release notes for Lafla mobile.

Audience: engineers, designers, ops, the future you trying to bisect a regression.
NOT the App Store. App Store copy lives in docs/RELEASE_NOTES.md.

Conventions:
- Use semver. Match the version in apps/mobile/package.json + apps/mobile/app.json.
- Always include the iOS buildNumber on its own line under the title.
- One bullet per change. Link to PR or commit where useful (#123 or full SHA).
- Group by Added / Changed / Fixed / Removed. Drop empty sections — don't leave "_None_".
- Mention breaking changes explicitly under a **Breaking** subsection inside Changed.
- If a change is user-visible, also note which App Store release notes line covers it (so the two stay in sync).
-->

**iOS build:** `<N>`
**Released:** `YYYY-MM-DD`
**Tag:** `vX.Y.Z`

## Summary

<!-- 1–3 sentences. What this release is about in plain English. The "why," not the "what." -->

<One paragraph framing the release. Example: "Polish pass after launch. Focused on the three crashes we saw in the first week and a faster scene load on older devices.">

## Added

<!-- New features, new scenes, new screens, new analytics events. -->

- <Feature or capability> (#PR)
- <New scene pack or content drop>

## Changed

<!-- Existing behavior modified. Tweaks to copy, layout, defaults, perf improvements. -->

- <What changed and why> (#PR)

### Breaking

<!-- Drop this subsection if no breaking changes. -->

- <API or storage shape change, migration notes, who needs to act>

## Fixed

<!-- Bugs. Be specific — link the issue or the report. -->

- <Bug description, root cause in parens if non-obvious> (#issue)

## Removed

<!-- Features, screens, dependencies, dead code that's gone. -->

- <What was removed and why>

## App Store release notes

<!-- Paste the final TR + EN strings that ship in App Store Connect, for the archive.
     Source of truth lives in docs/RELEASE_NOTES.md — copy verbatim. -->

**TR:**

```
<paste TR release notes>
```

**EN:**

```
<paste EN release notes>
```

## Contributors

<!-- @-mention humans. Skip if solo. -->

- @<handle>

---

<sub>Lafla mobile · iOS · See `docs/RELEASE_NOTES.md` for App Store copy and `apps/mobile/app.json` for the canonical version + buildNumber.</sub>
