// Lafla — STT availability detection + typing-fallback contract.
//
// expo-speech-recognition is an iOS-17+ feature. A meaningful slice of our
// users (15-20%) still run iOS 15/16 and would otherwise hit dead-end
// "yakında" alerts when they tap mic buttons. This module:
//
//   1. Inspects the runtime to figure out *why* STT is or isn't usable.
//   2. Exposes a structured `STTCapability` so UI can branch cleanly
//      between "voice ready", "typing fallback offered", "fully offline".
//   3. Never imports the speech-recognition module directly at the top
//      level — it loads it lazily via require() in a try/catch, mirroring
//      the defensive pattern used in lib/speech-recognition.ts.
//
// The "typing fallback" is always available — there's no scenario where
// a user can't type the answer — so `supportsTypingFallback` is
// hard-coded `true` for every capability shape we return.

import { Platform } from "react-native";

// ============================================================
// Public types
// ============================================================

export type STTUnavailableReason =
  | "ok"
  | "permission-denied"
  | "ios-too-old"
  | "no-mic"
  | "module-missing";

export interface STTCapability {
  available: boolean;
  reason: STTUnavailableReason;
  /** Marketing-style OS version string ("16.4", "15.7.1") when known. */
  osVersion?: string;
  /** Always true — typing fallback has no hardware requirement. */
  supportsTypingFallback: true;
}

// ============================================================
// Internals
// ============================================================

// Minimum iOS version where expo-speech-recognition is supported. The
// package wraps SFSpeechRecognizer with on-device support flag, which
// landed in iOS 13 nominally, but the on-device-only path the app
// depends on (free-form English, no Apple server roundtrip) requires
// iOS 17+. See expo-speech-recognition README for the matrix.
const MIN_IOS_MAJOR = 17;

type SrModule = {
  isRecognitionAvailable?: () => boolean;
  getPermissionsAsync?: () => Promise<{ granted: boolean }>;
};

function loadSrModule(): SrModule | null {
  try {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const mod = require("expo-speech-recognition");
    return (
      (mod?.ExpoSpeechRecognitionModule as SrModule) ??
      (mod?.default as SrModule) ??
      (mod as SrModule) ??
      null
    );
  } catch {
    return null;
  }
}

/**
 * Parse iOS's Platform.Version into a major-version integer.
 * On iOS, Platform.Version is a string like "16.4" or "15.7.1". On
 * Android (not relevant here but handled for symmetry) it's a number.
 */
function parseOsMajor(raw: string | number | undefined): number | null {
  if (raw === undefined || raw === null) return null;
  if (typeof raw === "number") {
    return Number.isFinite(raw) ? Math.floor(raw) : null;
  }
  const head = String(raw).split(".")[0];
  const n = Number.parseInt(head ?? "", 10);
  return Number.isFinite(n) ? n : null;
}

function readOsVersionString(): string | undefined {
  const v = Platform.Version;
  if (v === undefined || v === null) return undefined;
  return String(v);
}

// ============================================================
// Public API
// ============================================================

/**
 * Inspect the device and figure out whether expo-speech-recognition
 * can be used right now. The function is async because the underlying
 * permission probe is async on some package versions, but the OS
 * version + module-presence checks are sync — the async signature
 * keeps callers uniform across the available/unavailable branches.
 *
 * Never throws. On unexpected failure it falls back to "module-missing"
 * so the UI always has a deterministic path.
 */
export async function detectSTTCapability(): Promise<STTCapability> {
  const osVersion = readOsVersionString();

  // iOS version gate is the dominant reason in production — check it
  // first so 15/16 users always get a clean, specific reason string
  // instead of being routed through the generic "module missing" path
  // in case the native module is shimmed.
  if (Platform.OS === "ios") {
    const major = parseOsMajor(Platform.Version);
    if (major !== null && major < MIN_IOS_MAJOR) {
      return {
        available: false,
        reason: "ios-too-old",
        osVersion,
        supportsTypingFallback: true,
      };
    }
  }

  const mod = loadSrModule();
  if (!mod) {
    return {
      available: false,
      reason: "module-missing",
      osVersion,
      supportsTypingFallback: true,
    };
  }

  // Probe the module's own availability flag if it exposes one. If the
  // flag is missing we treat the module as available (some older
  // versions don't ship isRecognitionAvailable).
  let nativeAvailable = true;
  try {
    if (typeof mod.isRecognitionAvailable === "function") {
      nativeAvailable = Boolean(mod.isRecognitionAvailable());
    }
  } catch {
    nativeAvailable = false;
  }

  if (!nativeAvailable) {
    return {
      available: false,
      reason: "no-mic",
      osVersion,
      supportsTypingFallback: true,
    };
  }

  // Best-effort permission peek. We deliberately call the *get* variant
  // (not request) so we don't trigger a system prompt before the user
  // taps the mic CTA. If the package doesn't expose getPermissionsAsync
  // we conservatively assume it's grantable later.
  try {
    if (typeof mod.getPermissionsAsync === "function") {
      const res = await mod.getPermissionsAsync();
      if (res && res.granted === false) {
        return {
          available: false,
          reason: "permission-denied",
          osVersion,
          supportsTypingFallback: true,
        };
      }
    }
  } catch {
    // Permission probe failed — fall through to "ok"; the actual
    // request flow inside startListening() will handle the deny case
    // with its own onError callback.
  }

  return {
    available: true,
    reason: "ok",
    osVersion,
    supportsTypingFallback: true,
  };
}

/**
 * Should the UI surface a "type instead of speak" affordance?
 *
 * Returns true whenever STT is *not* usable for any reason. The caller
 * doesn't care whether it's a permissions issue, OS version, or
 * missing module — typing works regardless.
 */
export function shouldOfferTypingFallback(cap: STTCapability): boolean {
  return !cap.available && cap.supportsTypingFallback;
}

/**
 * User-facing Turkish explanation of *why* speech is unavailable. The
 * tone is adult and matter-of-fact — no "yakında!" hype — and it
 * always points the user toward the typing alternative.
 *
 * Use this string as the body of an inline notice or banner; don't
 * use it as a title (it's a sentence, not a label).
 */
export function getFallbackPromptTr(cap: STTCapability): string {
  switch (cap.reason) {
    case "ok":
      // Defensive — callers shouldn't ask for a fallback prompt when
      // speech is working, but if they do, give them something useful.
      return "Sesli pratik aktif. Dilersen yazarak da pratik edebilirsin.";
    case "ios-too-old":
      return (
        "Sesli pratik için iOS 17 veya üstü gerekli" +
        (cap.osVersion ? ` (cihazın iOS ${cap.osVersion}).` : ".") +
        " iOS'unu güncelleyebilir ya da şimdilik yazarak pratik edebilirsin."
      );
    case "permission-denied":
      return (
        "Mikrofon izni verilmediği için sesli pratik çalışmıyor. " +
        "Ayarlar'dan izin verebilir ya da yazarak pratik edebilirsin."
      );
    case "no-mic":
      return (
        "Bu cihazda sesli pratik kullanılamıyor. " +
        "Yazarak pratik etmeye devam edebilirsin."
      );
    case "module-missing":
      return (
        "Sesli pratik bu sürümde hazır değil. " +
        "Şimdilik yazarak pratik edebilirsin — puanlama aynı şekilde çalışır."
      );
    default:
      return "Yazarak da pratik edebilirsin.";
  }
}
