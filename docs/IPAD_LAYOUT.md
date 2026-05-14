# iPad Layout — Implementation Guide

`apps/mobile/app.json` declares `"supportsTablet": true`, so the Lafla iOS
build installs on iPad as a first-class device. This document explains how
to use the responsive helpers in `apps/mobile/lib/responsive.ts` and the
companion components to make individual screens iPad-ready.

## Why iPad Matters for Lafla

- **Apple Education buyers.** Schools and language institutions buy iPads
  in bulk and consistently ask for "real iPad support" (not letterboxed
  phone apps) before they greenlight an app for student devices.
- **Coaching positioning.** Lafla's product story is "professional adult
  coaching for English." Adults working through a coaching session on the
  couch or at a kitchen table reach for an iPad more often than a phone.
  A polished iPad layout reinforces the "premium tool" framing that the
  paywall sells.
- **Roleplay surface area.** Scenario lessons and free-chat voice sessions
  benefit hugely from extra width — setup phrases can live next to the
  dialogue, the transcript can sit beside the coach avatar, and so on.
- **Apple review signal.** App Review penalises iPad apps that obviously
  ignore the form factor. Layouts that respect `useWindowDimensions` and
  centre content correctly are routine but expected.

## Responsive Primitives

All primitives live under `apps/mobile/`:

| File                                         | Purpose                                            |
| -------------------------------------------- | -------------------------------------------------- |
| `lib/responsive.ts`                          | `useDeviceClass`, `getColumnsFor`, `getMaxContentWidth`, `getPadding`, `getModalWidth` |
| `components/ResponsiveContainer.tsx`         | Centres + caps width, scales padding per device    |
| `components/TwoColumnLayout.tsx`             | Two columns on tablets, stacked on phones          |
| `hooks/useResponsiveValue.ts`                | Pick a value per device class with a fallback      |

### Device Classes

```
phone         <  480pt   iPhone SE / 12 / 15 portrait
phablet     480-767pt    Large phone landscape, iPad 1/3 split-view
tablet      768-1023pt   iPad mini, iPad 10.x portrait
tablet-large  1024+pt    iPad Pro 11"/13", iPad Air landscape
```

iPad split-view at 1/3 width is intentionally classified as `phablet`
because two-column layouts are not viable at that size, regardless of the
host device.

## Priority Order — Which Screens Need Tablet Treatment

Ordered by impact (user-visible weight × frequency of use):

1. **`app/feed.tsx`** — The first screen on every launch. Phone layout is
   a single vertical scroll; on tablet this leaves vast empty side
   margins. Highest visibility win.
2. **`app/paywall.tsx`** — Conversion screen. A full-screen paywall on a
   13" iPad reads as broken — adults expect a centred modal.
3. **`app/scenario/[id].tsx`** — Core coaching surface. Side-by-side
   dialogue + setup phrases is a meaningful pedagogical improvement, not
   just a cosmetic one.
4. **`app/freechat-voice.tsx`** — Long-form interactive screen; benefits
   from a larger avatar and a transcript drawer.
5. **`app/certificate.tsx`** — Already a "document" surface. iPad lets us
   show A4 landscape without scaling.

Lower-priority screens (onboarding flows, settings, profile) should
adopt `ResponsiveContainer` so they at least centre and cap width, but
don't need bespoke tablet layouts.

## Per-Screen Recommended Treatments

### `app/feed.tsx`

- Wrap the outer `ScrollView` in `ResponsiveContainer` with
  `maxWidth="wide"` so vertical scrolling stops feeling like a narrow
  tunnel on a 13" iPad.
- The "Curated Scenes" carousel should switch from `FlatList horizontal`
  to a grid using `getColumnsFor(device.class, { phone: 1, phablet: 1, tablet: 2, tabletLarge: 3 })`.
- Consider a `TwoColumnLayout` with the main feed on the left and an
  "Active Program" sidebar on the right at `tablet-large` only —
  collapse to stacked everywhere else.

### `app/paywall.tsx`

- On tablets, present as a centred modal — width capped at 600pt with
  the dimmed app behind it visible.
- Pseudocode:
  ```tsx
  const style = getModalWidth(device.class);
  if (style === "centered") {
    // wrap in <View align=center justify=center bg=dim> + max width 600
  }
  ```
- Feature grid (`FEATURES`) can render 2 columns on tablet (currently
  single column) — pair with `useResponsiveValue` for the column count.

### `app/scenario/[id].tsx`

- During the `setup` and `scene` phases, use `TwoColumnLayout`:
  - **Left (40%):** setup phrases / vocabulary card / scoring panel.
  - **Right (60%):** roleplay dialogue or active exercise component.
- The `drill` and `verdict` phases are single-focus — keep them centred
  with `ResponsiveContainer maxWidth="standard"`.

### `app/freechat-voice.tsx` (if/when added)

- Tablet layout: large coach avatar centred in the left ~55% of the
  screen, transcript drawer on the right ~45%.
- On phone: stacked, transcript collapses behind a button.
- Use `TwoColumnLayout` with `leftRatio={0.55}` and
  `collapseAtClass="phablet"`.

### `app/certificate.tsx`

- Force landscape A4 aspect ratio. Tablet has room to render this at
  natural 1x scale; phone needs to scale + rotate.
- `useResponsiveValue<"fit" | "natural">({ tablet: "natural", "tablet-large": "natural" }, "fit")`
  is the right shape.
- Bonus: enable a "Save to Files / AirDrop" toolbar on tablet that is
  hidden on phone.

## Testing Strategy

- **Xcode Simulator:** rotate between iPad portrait/landscape (Cmd+→ /
  Cmd+←) and toggle split view (drag from the right edge). Verify the
  layout responds without remount glitches.
- **iPad Pro 11" + iPad mini:** these are the two real devices to test.
  iPad mini hits the 744pt portrait width which is the `tablet`
  boundary — make sure layouts don't pop awkwardly across it.
- **Stage Manager:** test on iPadOS 17+ — Stage Manager arbitrary window
  sizing is the harshest stress test for responsive code.
- **Snapshot fixtures:** if you add a screen-level Detox or Playwright
  test, run it at three widths: 414 (iPhone), 820 (iPad portrait), 1366
  (iPad landscape). Diffs there catch regressions in the helper code.

## API Quick Reference

```ts
import {
  useDeviceClass,
  getColumnsFor,
  getMaxContentWidth,
  getPadding,
  getModalWidth,
} from "@/lib/responsive";
import { ResponsiveContainer } from "@/components/ResponsiveContainer";
import { TwoColumnLayout } from "@/components/TwoColumnLayout";
import { useResponsiveValue } from "@/hooks/useResponsiveValue";

function Screen() {
  const device = useDeviceClass();
  const cols = getColumnsFor(device.class, { tablet: 2, tabletLarge: 3 });
  const cardSize = useResponsiveValue({ phone: 140, tablet: 200 }, 180);

  return (
    <ResponsiveContainer maxWidth="standard" centered>
      {/* screen body */}
    </ResponsiveContainer>
  );
}
```

## Non-Goals

- **No web/Android branching.** Lafla is iOS-only (see `app.json`
  `"platforms": ["ios"]`). Helpers stay focused on iPhone/iPad metrics.
- **No design-token replacement.** The responsive helpers complement
  `theme/index.ts`; they do not encode colours, fonts, or radii.
- **No automatic screen migration.** Each screen opts in deliberately so
  we don't ship a half-tested rewrite.
