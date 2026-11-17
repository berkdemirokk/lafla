# Loading & empty states in Lafla

Lafla has three reusable building blocks for async-data UI:

1. `Skeleton` — pulsing placeholder blocks while content loads.
2. `LoadingDots` — three-dot "thinking" indicator for short async work.
3. `EmptyState` — centered emoji + copy + optional CTA for "no data yet"
   screens.

All three live in `apps/mobile/components/` and use only React Native's
built-in `Animated` API (no Reanimated). They are styled with the
Cyber-Electric design tokens (`apps/mobile/theme/index.ts`).

---

## 1. `Skeleton` — content placeholders

`components/Skeleton.tsx`. A pulsing block (opacity 0.4 → 1.0 → 0.4,
1200 ms loop) sized to the shape of the content it will eventually hold.

### Props

```ts
type SkeletonProps = {
  width: number | string;       // any DimensionValue ("100%" works)
  height: number;
  radius?: number;              // default tokens.radius.base (16)
  style?: StyleProp<ViewStyle>;
};
```

### Where to use it

- **Feed cards while loading.** Render a stack of `<Skeleton>` blocks
  sized like real `SceneCard` / `InterestCard` items so the layout
  doesn't jump when data arrives.
- **Profile stats.** Replace numeric stat tiles with `<Skeleton>` blocks
  on first paint of the profile screen.
- **Achievements grid initial render.** Show a grid of square skeletons
  matching the badge tile size before `achievements` data resolves.

### Example

```tsx
import { Skeleton } from "@/components/Skeleton";

function FeedSkeleton() {
  return (
    <View style={{ gap: 12, padding: 16 }}>
      <Skeleton width="100%" height={140} />
      <Skeleton width="100%" height={140} />
      <Skeleton width="60%" height={20} radius={8} />
    </View>
  );
}
```

---

## 2. `LoadingDots` — short async signal

`components/LoadingDots.tsx`. Three dots that fade in sequence, 200 ms
stagger per dot. Compact — fits inline next to or below text.

### Props

```ts
type LoadingDotsProps = {
  color?: string;   // default tokens.text.secondary
  size?: number;    // default 8 (pt diameter)
};
```

### Where to use it

- **Local generation.** For operations that include a storage read or content
  compilation, show a brief neutral "Preparing…" state. Do not imply that a
  remote model is thinking; Free Chat and Real Life generation are on-device.
- **Network requests.** Inline indicator for "submitting…", "fetching
  next scene…" etc. — anywhere `ActivityIndicator` would feel too
  generic and a full `Skeleton` would be overkill.

### Example

```tsx
import { LoadingDots } from "@/components/LoadingDots";

function ThinkingBubble() {
  return (
    <View style={{ flexDirection: "row", gap: 8, alignItems: "center" }}>
      <Text>Yanıt hazırlanıyor</Text>
      <LoadingDots />
    </View>
  );
}
```

---

## 3. `EmptyState` — "no data yet" screens

`components/EmptyState.tsx`. Centered emoji (64 pt) + bold title
(24 pt) + secondary description (16 pt) + optional pill `Button` CTA.

### Props

```ts
type EmptyStateProps = {
  emoji: string;
  title: string;
  description: string;
  ctaLabel?: string;
  onCtaPress?: () => void;
};
```

The CTA renders only when **both** `ctaLabel` and `onCtaPress` are
supplied — pass neither for a pure informational empty state.

### Where to use it

- **Empty achievements** — user hasn't earned any badges yet.
  ```tsx
  <EmptyState
    emoji="🏆"
    title="Henüz başarım yok"
    description="Sahneleri tamamladıkça rozetler buraya gelecek."
    ctaLabel="Sahnelere git"
    onCtaPress={() => router.push("/feed")}
  />
  ```
- **Empty journal** — no lessons completed today.
  ```tsx
  <EmptyState
    emoji="📓"
    title="Günlüğün bugün boş"
    description="Bir sahne bitir, sana özel notlar burada görünsün."
    ctaLabel="Bugünün sahnesi"
    onCtaPress={() => router.push("/feed")}
  />
  ```
- **Empty scoreboard** — no scenes completed yet.
  ```tsx
  <EmptyState
    emoji="📊"
    title="Skor tablosu boş"
    description="İlk sahneni bitirince puanların burada görünecek."
  />
  ```

---

## When to use which

| Situation                            | Component        |
| ------------------------------------ | ---------------- |
| Known shape, content loading         | `Skeleton`       |
| Short async task, "thinking…"        | `LoadingDots`    |
| Async finished, zero results         | `EmptyState`     |
| Inline button-internal spinner       | `ActivityIndicator` (built into `Button`) |

A typical async screen flows: render `Skeleton`s while fetching → on
success swap in real content → on success-but-zero-rows swap in
`EmptyState`. Errors are handled separately (toast / retry UI), not by
these components.

---

## Constraints & gotchas

- **No Reanimated.** All three use the built-in `Animated` API with
  `useNativeDriver: true` so loops run off the JS thread.
- **Theme-only colors.** Always pass tokens (`tokens.text.secondary`,
  etc.) rather than hex strings, so dark-accent surfaces stay legible.
- **Don't nest Skeletons inside Skeletons.** One pulse per region — if
  you need a complex shape, compose flat `Skeleton`s in a `View`.
- **Stop animations on unmount.** The components already clean up via
  `useEffect` return functions; you don't have to manage this.
