/**
 * Deep link parsing + routing for Lafla.
 *
 * Supports two equivalent link surfaces:
 *   1. Custom URL scheme: lafla://...   (in-app, push notifications)
 *   2. iOS Universal Links: https://lafla.app/...   (web, email, social shares)
 *
 * Both shapes resolve to the same parsed result so callers can treat the
 * source uniformly.
 *
 * URL parsing relies on the WHATWG `URL` global. RN doesn't ship one by
 * default; `react-native-url-polyfill/auto` is already imported at app
 * bootstrap (it's listed in package.json deps). If you're adding the first
 * usage of this module outside that bootstrap path, make sure the polyfill
 * is imported before `parseDeepLink` runs.
 *
 * See: docs/DEEP_LINKING.md
 */

export type DeepLinkType = 'scenario' | 'referral' | 'paywall' | 'unknown';

export interface ParsedDeepLink {
  type: DeepLinkType;
  params: Record<string, string>;
}

const UNKNOWN: ParsedDeepLink = { type: 'unknown', params: {} };

/**
 * Parse a deep link URL into a typed route descriptor.
 *
 * Supported routes:
 *   - lafla://scenario/<id>             → { type: 'scenario', params: { id } }
 *   - https://lafla.app/scenario/<id>   → { type: 'scenario', params: { id } }
 *   - lafla://referral?code=ABC123      → { type: 'referral', params: { code } }
 *   - https://lafla.app/?ref=ABC123     → { type: 'referral', params: { code } }
 *   - lafla://paywall                   → { type: 'paywall',  params: {} }
 *   - https://lafla.app/paywall         → { type: 'paywall',  params: {} }
 *
 * Anything else → { type: 'unknown', params: {} }. The caller decides how
 * to handle unknown links (typically: ignore, or surface a generic error).
 */
export function parseDeepLink(url: string): ParsedDeepLink {
  if (!url || typeof url !== 'string') return UNKNOWN;

  let parsed: URL;
  try {
    parsed = new URL(url);
  } catch {
    return UNKNOWN;
  }

  const protocol = parsed.protocol.toLowerCase();
  const isCustomScheme = protocol === 'lafla:';
  const isUniversalLink =
    (protocol === 'https:' || protocol === 'http:') &&
    parsed.hostname.toLowerCase() === 'lafla.app';

  if (!isCustomScheme && !isUniversalLink) return UNKNOWN;

  // For the custom scheme `lafla://scenario/abc`, RN's URL polyfill puts
  // "scenario" in `hostname` and "/abc" in `pathname`. For universal links
  // (https://lafla.app/scenario/abc), hostname is "lafla.app" and the route
  // lives entirely in `pathname`. Normalize both shapes into a single
  // segments array.
  const segments: string[] = [];
  if (isCustomScheme) {
    if (parsed.hostname) segments.push(parsed.hostname.toLowerCase());
    for (const seg of parsed.pathname.split('/')) {
      if (seg) segments.push(seg);
    }
  } else {
    for (const seg of parsed.pathname.split('/')) {
      if (seg) segments.push(seg);
    }
  }

  // --- Route: scenario ---
  // lafla://scenario/<id>  OR  https://lafla.app/scenario/<id>
  if (segments[0] === 'scenario' && segments[1]) {
    return { type: 'scenario', params: { id: segments[1] } };
  }

  // --- Route: referral ---
  // Custom scheme uses ?code=, universal link uses ?ref= (web-friendly).
  // Both are accepted on either surface to keep callers simple.
  if (segments[0] === 'referral') {
    const code = parsed.searchParams.get('code') || parsed.searchParams.get('ref');
    if (code) return { type: 'referral', params: { code } };
    return { type: 'referral', params: {} };
  }
  // Universal-link root form: https://lafla.app/?ref=ABC123
  if (segments.length === 0 && isUniversalLink) {
    const code = parsed.searchParams.get('ref') || parsed.searchParams.get('code');
    if (code) return { type: 'referral', params: { code } };
  }

  // --- Route: paywall ---
  if (segments[0] === 'paywall') {
    return { type: 'paywall', params: {} };
  }

  return UNKNOWN;
}

/**
 * Parse and dispatch a deep link to the appropriate expo-router route.
 *
 * Pass the `router` object from `import { router } from 'expo-router'` (or
 * the result of `useRouter()` if calling from a component). Typed as `any`
 * to avoid coupling this module to expo-router's internal types.
 *
 * Returns `true` if the link was recognized and routed, `false` if the link
 * was malformed or pointed at an unknown route — caller may then fall back
 * to a default behavior (e.g., open home).
 */
export function handleDeepLink(url: string, router: any): boolean {
  const { type, params } = parseDeepLink(url);

  switch (type) {
    case 'scenario':
      router.push(`/scenario/${params.id}`);
      return true;

    case 'referral':
      // The referral screen reads the code from route params; if absent it
      // falls back to the user's own code. Either way, just navigate.
      if (params.code) {
        router.push({ pathname: '/referral', params: { code: params.code } });
      } else {
        router.push('/referral');
      }
      return true;

    case 'paywall':
      router.push('/paywall');
      return true;

    case 'unknown':
    default:
      return false;
  }
}
