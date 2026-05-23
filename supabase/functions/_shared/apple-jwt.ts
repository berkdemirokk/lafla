// Lafla — Apple Sign-In JWT helper (shared between edge functions).
//
// Deno Web Crypto kullanarak Apple'ın client_secret JWT'sini imzalar.
// ES256 algoritması: ECDSA + SHA-256, P-256 curve. Apple .p8 key'i bunu
// kullanır.
//
// JWT claims (Apple spec):
//   - iss: Team ID
//   - iat: now (seconds)
//   - exp: now + max 6 months (15777000s) — biz 1 saat kullanıyoruz
//   - aud: "https://appleid.apple.com"
//   - sub: Service ID
//
// Header:
//   - alg: "ES256"
//   - kid: Apple Sign-In Key ID

export interface AppleJwtConfig {
  teamId: string;
  serviceId: string;
  keyId: string;
  /** .p8 file contents (PEM with -----BEGIN PRIVATE KEY----- header). */
  privateKeyPem: string;
}

function base64UrlEncode(input: ArrayBuffer | Uint8Array | string): string {
  let bytes: Uint8Array;
  if (typeof input === "string") {
    bytes = new TextEncoder().encode(input);
  } else if (input instanceof ArrayBuffer) {
    bytes = new Uint8Array(input);
  } else {
    bytes = input;
  }
  let bin = "";
  for (let i = 0; i < bytes.length; i++) bin += String.fromCharCode(bytes[i]);
  return btoa(bin)
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");
}

/** Strip "-----BEGIN PRIVATE KEY-----" wrappers and decode base64 to DER. */
function pemToPkcs8(pem: string): Uint8Array {
  const b64 = pem
    .replace(/-----BEGIN [^-]+-----/g, "")
    .replace(/-----END [^-]+-----/g, "")
    .replace(/\s+/g, "");
  const bin = atob(b64);
  const buf = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) buf[i] = bin.charCodeAt(i);
  return buf;
}

/**
 * Generate Apple's client_secret JWT. Valid for 1 hour. Apple accepts up
 * to 6 months but shorter is safer in case key rotation happens.
 */
export async function generateAppleClientSecret(
  cfg: AppleJwtConfig,
): Promise<string> {
  const header = { alg: "ES256", kid: cfg.keyId, typ: "JWT" };
  const now = Math.floor(Date.now() / 1000);
  const payload = {
    iss: cfg.teamId,
    iat: now,
    exp: now + 3600, // 1 saat
    aud: "https://appleid.apple.com",
    sub: cfg.serviceId,
  };
  const headerB64 = base64UrlEncode(JSON.stringify(header));
  const payloadB64 = base64UrlEncode(JSON.stringify(payload));
  const unsigned = `${headerB64}.${payloadB64}`;

  const pkcs8 = pemToPkcs8(cfg.privateKeyPem);
  const key = await crypto.subtle.importKey(
    "pkcs8",
    pkcs8.buffer,
    { name: "ECDSA", namedCurve: "P-256" },
    false,
    ["sign"],
  );
  const sig = await crypto.subtle.sign(
    { name: "ECDSA", hash: "SHA-256" },
    key,
    new TextEncoder().encode(unsigned),
  );
  return `${unsigned}.${base64UrlEncode(sig)}`;
}

/**
 * Apple's required form encoder — application/x-www-form-urlencoded
 * with their specific param naming convention.
 */
export function formUrlEncode(params: Record<string, string>): string {
  return Object.entries(params)
    .map(
      ([k, v]) =>
        `${encodeURIComponent(k)}=${encodeURIComponent(v)}`,
    )
    .join("&");
}

/**
 * Load Apple Sign-In config from Deno env. Returns null if any required
 * env is missing — caller should treat as "not configured" and skip.
 */
export function loadAppleConfig(): AppleJwtConfig | null {
  const teamId = Deno.env.get("APPLE_TEAM_ID");
  const serviceId = Deno.env.get("APPLE_SIGNIN_SERVICE_ID");
  const keyId = Deno.env.get("APPLE_SIGNIN_KEY_ID");
  const privateKeyPem = Deno.env.get("APPLE_SIGNIN_PRIVATE_KEY");
  if (!teamId || !serviceId || !keyId || !privateKeyPem) return null;
  return { teamId, serviceId, keyId, privateKeyPem };
}
