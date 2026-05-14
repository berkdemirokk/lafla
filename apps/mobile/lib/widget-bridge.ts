// Lafla — Native bridge stub for the iOS Home Screen Widget.
//
// The companion native module `LaflaWidgetBridge` will be added inside the
// iOS widget target (see `apps/mobile/widget/` and `docs/WIDGETS.md`). It
// exposes a single async method:
//
//   writeSnapshot(json: string): Promise<void>
//
// The native side writes the JSON blob to `UserDefaults(suiteName:
// "group.com.lafla.app")` under the key `lafla.widget.snapshot`, then calls
// `WidgetCenter.shared.reloadAllTimelines()` so iOS picks up the new data.
//
// Until the native target is wired up (post `expo prebuild` + Xcode setup),
// `NativeModules.LaflaWidgetBridge` is undefined. We resolve it lazily and
// no-op when missing so the JS-side caller (`writeWidgetSnapshot`) keeps
// working in dev and on Android.

import { NativeModules, Platform } from "react-native";

interface WidgetBridge {
  writeSnapshot(json: string): Promise<void>;
}

// Resolve once at module load. The bridge cannot be hot-swapped at runtime;
// if the iOS target is added after the JS bundle is built, a full reload is
// required to pick it up (which happens naturally after an EAS build).
const Bridge: WidgetBridge | null =
  Platform.OS === "ios"
    ? ((NativeModules as Record<string, unknown>).LaflaWidgetBridge as
        | WidgetBridge
        | undefined) ?? null
    : null;

/**
 * Forward a freshly-built widget snapshot JSON to the native App Group store.
 *
 * Never throws. Returns synchronously-resolved void when:
 *   - we're on Android (no widget target on Android right now)
 *   - the native module isn't registered yet (pre-Xcode setup)
 *   - the native call itself errors (App Group not configured, disk full, …)
 *
 * The caller (`widget-data.ts`) always also writes to AsyncStorage, so the
 * snapshot is never lost — only the iOS home-screen widget refresh is.
 */
export async function writeToWidgetStorage(json: string): Promise<void> {
  if (!Bridge) return;
  try {
    await Bridge.writeSnapshot(json);
  } catch {
    // Swallow — widget freshness is best-effort.
  }
}

/** Whether the native bridge is currently available. Useful for diagnostics. */
export function isWidgetBridgeAvailable(): boolean {
  return Bridge !== null;
}
