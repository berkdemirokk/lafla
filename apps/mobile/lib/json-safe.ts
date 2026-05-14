// Lafla — Safe JSON parsing helper.
//
// Universal wrapper around JSON.parse for AsyncStorage payloads and other
// untrusted strings (LLM output, legacy blobs, corrupted writes). The native
// JSON.parse throws on malformed input, which has historically been a top
// source of "blank screen" crashes: a corrupt key bubbles all the way up
// to render code that never expected to see a SyntaxError.
//
// Contract:
//   parseSafe(raw, fallback, validate?)
//     - raw === null OR raw === ""              -> fallback (no breadcrumb)
//     - JSON.parse throws                       -> fallback + breadcrumb
//     - validate(parsed) returns false          -> fallback + breadcrumb
//     - otherwise                               -> parsed as T
//
// The Sentry breadcrumb is best-effort: we use a defensive dynamic require
// so this module can be imported by code paths that boot before sentry is
// initialised (and so jest tests don't need to mock sentry). Breadcrumbs
// log only the storage key / source label and the failure kind — NEVER the
// raw string, since it may contain user-typed Turkish or PII.
//
// Why a separate module:
//   - Centralises the "swallow JSON.parse" pattern that was duplicated in
//     ~20 places, each with subtly different fallback semantics.
//   - Gives us a single place to add telemetry / debugging without touching
//     every caller.
//   - Lets future validators (zod, ajv) plug in by swapping the implementation
//     here rather than refactoring every storage helper.

export interface ParseSafeOptions {
  /**
   * Short label for Sentry breadcrumbs ("local-progress.profile",
   * "iap.mock", etc). When omitted we fall back to "json-safe.parse".
   */
  source?: string;
}

/**
 * Try JSON.parse(raw); validate the shape; return fallback on any failure.
 * Captures a Sentry breadcrumb on parse/validate failure so we can see
 * how often corrupt storage actually fires in production.
 *
 * Generic T is the declared return type; the validator (if supplied) is
 * the only runtime guard. Callers that skip the validator are TRUSTING
 * the on-disk shape — fine for tightly-scoped keys we own end-to-end,
 * dangerous for anything the LLM or a future migration might touch.
 */
export function parseSafe<T>(
  raw: string | null | undefined,
  fallback: T,
  validate?: (x: unknown) => boolean,
  opts?: ParseSafeOptions,
): T {
  if (raw === null || raw === undefined || raw === "") {
    return fallback;
  }

  let parsed: unknown;
  try {
    parsed = JSON.parse(raw);
  } catch (err) {
    emitBreadcrumb({
      source: opts?.source ?? "json-safe.parse",
      kind: "parse_error",
      message: err instanceof Error ? err.message : String(err),
      rawLength: raw.length,
    });
    return fallback;
  }

  if (validate && !validate(parsed)) {
    emitBreadcrumb({
      source: opts?.source ?? "json-safe.parse",
      kind: "validate_failed",
      rawLength: raw.length,
    });
    return fallback;
  }

  return parsed as T;
}

// ---------------------------------------------------------------------------
// Common validators — exported so call sites can compose without re-deriving
// the same boilerplate. Each one is a TYPE GUARD that narrows `unknown` to a
// usable shape; they're intentionally minimal so we don't pay a deep-clone
// cost on every read.
// ---------------------------------------------------------------------------

export function isObject(x: unknown): x is Record<string, unknown> {
  return x !== null && typeof x === "object" && !Array.isArray(x);
}

export function isArray(x: unknown): x is unknown[] {
  return Array.isArray(x);
}

export function isStringArray(x: unknown): x is string[] {
  return Array.isArray(x) && x.every((v) => typeof v === "string");
}

/**
 * Returns a validator that asserts the parsed value is an object with EVERY
 * listed field present and of the right primitive type. Use this for the
 * common "AsyncStorage holds a typed record" pattern:
 *
 *   parseSafe(raw, DEFAULT, hasFields({ id: "string", count: "number" }))
 */
export function hasFields(
  fields: Record<string, "string" | "number" | "boolean" | "object" | "array">,
): (x: unknown) => boolean {
  return (x: unknown): boolean => {
    if (!isObject(x)) return false;
    for (const [name, kind] of Object.entries(fields)) {
      const v = x[name];
      switch (kind) {
        case "string":
          if (typeof v !== "string") return false;
          break;
        case "number":
          if (typeof v !== "number" || !Number.isFinite(v)) return false;
          break;
        case "boolean":
          if (typeof v !== "boolean") return false;
          break;
        case "object":
          if (!isObject(v)) return false;
          break;
        case "array":
          if (!Array.isArray(v)) return false;
          break;
      }
    }
    return true;
  };
}

// ---------------------------------------------------------------------------
// Sentry breadcrumb emitter — defensive dynamic require so this helper is
// safe to import from modules that load before sentry init, and so tests
// don't need a sentry mock. Any failure here is silently dropped.
// ---------------------------------------------------------------------------

interface BreadcrumbPayload {
  source: string;
  kind: "parse_error" | "validate_failed";
  message?: string;
  rawLength?: number;
}

function emitBreadcrumb(payload: BreadcrumbPayload): void {
  try {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const sentry = require("./sentry") as {
      addBreadcrumb?: (crumb: {
        category: string;
        message: string;
        data?: Record<string, unknown>;
      }) => void;
    };
    if (typeof sentry?.addBreadcrumb === "function") {
      sentry.addBreadcrumb({
        category: "json-safe",
        message: `${payload.source}: ${payload.kind}`,
        data: {
          // Deliberately omit the raw string — may contain PII / Turkish text.
          source: payload.source,
          kind: payload.kind,
          rawLength: payload.rawLength,
          parseMessage: payload.message,
        },
      });
    }
  } catch {
    // Never throw out of a defensive helper. If Sentry itself is sick,
    // there's literally nothing useful to do here.
  }
}
