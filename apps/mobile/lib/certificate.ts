// Lafla — CEFR Certificate generation + persistence.
//
// When a user reaches a CEFR level (via placement test or organic progression
// in cefr-level.ts), we mint a personalised certificate signed by "Maya, Lafla
// Coach". The certificate is:
//   1. Persisted locally (no network) under K_CERTS.
//   2. Renderable in-app via CertificatePreview.
//   3. Exportable as a PDF (expo-print) for LinkedIn / professional sharing.
//   4. Bilingual (TR primary, EN subtitles) — Turkish identity formation +
//      international shareability.
//
// REQUIRED PACKAGE (NOT in package.json yet — must be added by the host app):
//   - expo-print     (HTML→PDF rendering)
//   - expo-sharing   (native share sheet for the PDF)
//
// Install command:
//   npx expo install expo-print expo-sharing
//
// All certificate state is local-first. There's no server validation — the
// serial number is deterministic-ish (year + level + 6 hex chars) and the
// "credential" lives in the social proof, not in a cryptographic guarantee.
// This is intentional: low ops cost, instant award, ready for LinkedIn.
//
// =========================================================================
// INTEGRATION NOTES (changes required in files that are out of this PR's
// scope — apply manually).
//
// 1) apps/mobile/app/_layout.tsx — register the new routes inside <Stack>:
//      <Stack.Screen name="certificate" />
//      <Stack.Screen name="certificate/[id]" />
//
// 2) apps/mobile/app/settings.tsx — add a row inside the "Profil" or
//    "Hesap" section that pushes to the gallery:
//      <Row
//        label="Sertifikalarım"
//        sub="CEFR yetkinlik belgelerin"
//        onPress={() => router.push("/certificate")}
//      />
//
// 3) apps/mobile/app/profile.tsx — same idea, ideally near the metrics
//    dashboard or above the lesson stats:
//      <Pressable onPress={() => router.push("/certificate")}>
//        <Text>Sertifikalarım →</Text>
//      </Pressable>
//
// 4) apps/mobile/app/placement-test.tsx — at the end of the test (when
//    the detected level is saved via setCefrLevel), also call:
//      await onLevelAdvanced(detectedLevel);   // from lib/cefr-level
//    so the user gets their starter certificate immediately.
//
// 5) (Optional) pkg install — add to apps/mobile/package.json:
//      npx expo install expo-print expo-sharing
//    Without these, the share/PDF actions surface a friendly Alert that
//    points to the missing package.
// =========================================================================

import AsyncStorage from "@react-native-async-storage/async-storage";
import { getCefrLevel, type CefrLevel } from "./cefr-level";
import { getCoachState } from "./coach";
import { computeMetrics } from "./metrics";

// ---------------------------------------------------------------------------
// Types & storage
// ---------------------------------------------------------------------------

export interface CertificateData {
  id: string;
  recipientName: string;
  level: "A1" | "A2" | "B1" | "B2" | "C1" | "C2";
  awardedAt: string; // ISO
  practiceHours: number;
  vocabCount: number;
  coachSessions: number;
  serialNumber: string; // "LAFLA-2026-A1B2-XYZ123" style
  issuerName: string; // "Maya, Lafla Coach"
}

const K_CERTS = "lafla.certificates.earned";

// ---------------------------------------------------------------------------
// Persistence helpers
// ---------------------------------------------------------------------------

async function readCerts(): Promise<CertificateData[]> {
  try {
    const raw = await AsyncStorage.getItem(K_CERTS);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as CertificateData[];
    if (!Array.isArray(parsed)) return [];
    return parsed;
  } catch {
    return [];
  }
}

async function writeCerts(certs: CertificateData[]): Promise<void> {
  try {
    await AsyncStorage.setItem(K_CERTS, JSON.stringify(certs));
  } catch {
    // best-effort
  }
}

// ---------------------------------------------------------------------------
// Public — list
// ---------------------------------------------------------------------------

export async function getEarnedCertificates(): Promise<CertificateData[]> {
  const certs = await readCerts();
  // Sort newest-first for the gallery list.
  return certs.slice().sort((a, b) => {
    const ta = new Date(a.awardedAt).getTime();
    const tb = new Date(b.awardedAt).getTime();
    return tb - ta;
  });
}

export async function getCertificateById(
  id: string,
): Promise<CertificateData | null> {
  const certs = await readCerts();
  return certs.find((c) => c.id === id) ?? null;
}

// ---------------------------------------------------------------------------
// Serial number generator
// Format: LAFLA-YYYY-LEVEL-6HEX
//   LAFLA-2026-A1B2-XYZ123   (B2 example: LAFLA-2026-00B2-7F3A2C)
// Level is left-padded with 0 so the serial is always fixed-width.
// ---------------------------------------------------------------------------

function buildSerial(level: CertificateData["level"], at: Date): string {
  const yyyy = at.getFullYear();
  // Random suffix — 6 chars from a base32-ish alphabet (no I/O/0/1 confusion).
  const alpha = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let suffix = "";
  for (let i = 0; i < 6; i++) {
    suffix += alpha[Math.floor(Math.random() * alpha.length)];
  }
  // Mid-block: pad to 4 chars so all serials line up.
  const lvl = level.length === 2 ? level.padStart(4, "0") : level;
  return `LAFLA-${yyyy}-${lvl}-${suffix}`;
}

// ---------------------------------------------------------------------------
// Award a certificate from the current user state.
// Idempotent only at the "human" level — calling awardCertificate twice for
// the same level WILL mint two certs (matches re-issuance for renewal /
// re-takes after a long break). The list screen de-dupes by level for display.
// ---------------------------------------------------------------------------

export async function awardCertificate(
  level: CertificateData["level"],
): Promise<CertificateData> {
  const [coach, metrics] = await Promise.all([
    getCoachState(),
    computeMetrics().catch(() => null),
  ]);

  const recipientName =
    coach.userDisplayName?.trim() || "Lafla öğrencisi";

  const practiceMinutes = metrics?.totalPracticeMinutes ?? 0;
  const practiceHours = Math.max(0, Math.round((practiceMinutes / 60) * 10) / 10);
  const vocabCount = metrics?.activeVocabSize ?? 0;
  const coachSessions = metrics?.coachMessagesTotal ?? 0;

  const awardedAtDate = new Date();
  const cert: CertificateData = {
    id: `cert-${awardedAtDate.getTime()}-${Math.random()
      .toString(36)
      .slice(2, 8)}`,
    recipientName,
    level,
    awardedAt: awardedAtDate.toISOString(),
    practiceHours,
    vocabCount,
    coachSessions,
    serialNumber: buildSerial(level, awardedAtDate),
    issuerName: `${coach.name || "Maya"}, Lafla Coach`,
  };

  const existing = await readCerts();
  await writeCerts([...existing, cert]);
  return cert;
}

// ---------------------------------------------------------------------------
// Display helpers (shared between RN preview and the HTML/PDF renderer)
// ---------------------------------------------------------------------------

export const LEVEL_LABELS_TR: Record<CertificateData["level"], string> = {
  A1: "A1 — Başlangıç",
  A2: "A2 — Temel",
  B1: "B1 — Orta",
  B2: "B2 — Orta-üstü",
  C1: "C1 — İleri",
  C2: "C2 — Ustalık",
};

export const LEVEL_LABELS_EN: Record<CertificateData["level"], string> = {
  A1: "A1 — Beginner",
  A2: "A2 — Elementary",
  B1: "B1 — Intermediate",
  B2: "B2 — Upper-Intermediate",
  C1: "C1 — Advanced",
  C2: "C2 — Proficiency",
};

export function formatAwardedDate(iso: string): string {
  const d = new Date(iso);
  const months = [
    "Ocak",
    "Şubat",
    "Mart",
    "Nisan",
    "Mayıs",
    "Haziran",
    "Temmuz",
    "Ağustos",
    "Eylül",
    "Ekim",
    "Kasım",
    "Aralık",
  ];
  return `${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}`;
}

export function formatAwardedDateEN(iso: string): string {
  const d = new Date(iso);
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

// ---------------------------------------------------------------------------
// HTML certificate (A4 landscape, inline CSS)
// ---------------------------------------------------------------------------

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function generateCertificateHTML(
  cert: CertificateData,
): Promise<string> {
  const name = escapeHtml(cert.recipientName);
  const levelTr = LEVEL_LABELS_TR[cert.level];
  const levelEn = LEVEL_LABELS_EN[cert.level];
  const dateTr = formatAwardedDate(cert.awardedAt);
  const dateEn = formatAwardedDateEN(cert.awardedAt);
  const issuer = escapeHtml(cert.issuerName);
  const serial = escapeHtml(cert.serialNumber);

  // Cyber-Electric tokens mirrored here as literals — expo-print runs in a
  // sandboxed WebView that can't import our TS theme module.
  const PRIMARY = "#f6ff00";
  const SECONDARY = "#1a1c1c";
  const TERTIARY = "#1978e5";
  const SURFACE = "#fafbfc";
  const TEXT_SECONDARY = "#5d5f63";

  return `<!doctype html>
<html lang="tr">
  <head>
    <meta charset="utf-8" />
    <title>Lafla — Sertifika ${serial}</title>
    <style>
      @page { size: A4 landscape; margin: 0; }
      * { box-sizing: border-box; }
      html, body {
        margin: 0;
        padding: 0;
        background: #ffffff;
        color: ${SECONDARY};
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
          "Helvetica Neue", Arial, sans-serif;
        -webkit-print-color-adjust: exact;
        print-color-adjust: exact;
      }
      .page {
        width: 297mm;
        height: 210mm;
        position: relative;
        overflow: hidden;
        padding: 18mm 22mm;
        background:
          radial-gradient(circle at 6% 12%, rgba(246, 255, 0, 0.10) 0,
            rgba(246, 255, 0, 0) 28%),
          radial-gradient(circle at 94% 88%, rgba(25, 120, 229, 0.08) 0,
            rgba(25, 120, 229, 0) 30%),
          ${SURFACE};
      }
      /* Geometric pattern — subtle dotted grid */
      .pattern {
        position: absolute;
        inset: 0;
        opacity: 0.05;
        background-image:
          radial-gradient(circle, ${SECONDARY} 1.1px, transparent 1.2px);
        background-size: 18px 18px;
        background-position: 0 0;
        pointer-events: none;
      }
      .frame {
        position: absolute;
        inset: 12mm;
        border: 2px solid ${SECONDARY};
        border-radius: 6px;
      }
      .frame-inner {
        position: absolute;
        inset: 14mm;
        border: 1px solid ${SECONDARY};
        opacity: 0.35;
        border-radius: 4px;
      }
      .corner {
        position: absolute;
        width: 28px;
        height: 28px;
        background: ${PRIMARY};
      }
      .corner.tl { top: 12mm; left: 12mm; transform: translate(-50%, -50%) rotate(45deg); }
      .corner.tr { top: 12mm; right: 12mm; transform: translate(50%, -50%) rotate(45deg); }
      .corner.bl { bottom: 12mm; left: 12mm; transform: translate(-50%, 50%) rotate(45deg); }
      .corner.br { bottom: 12mm; right: 12mm; transform: translate(50%, 50%) rotate(45deg); }
      .content {
        position: relative;
        z-index: 2;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
      }
      .header {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 4mm;
      }
      .wordmark {
        font-size: 44pt;
        font-weight: 900;
        letter-spacing: -0.04em;
        color: ${SECONDARY};
        line-height: 1;
      }
      .wordmark .dot {
        display: inline-block;
        width: 14px;
        height: 14px;
        background: ${PRIMARY};
        border-radius: 50%;
        margin-left: 4px;
        transform: translateY(-2px);
      }
      .accent-line {
        margin-top: 10px;
        width: 80px;
        height: 4px;
        background: ${PRIMARY};
        border-radius: 2px;
      }
      .title-tr {
        margin-top: 10mm;
        font-size: 28pt;
        font-weight: 700;
        letter-spacing: 0.02em;
        color: ${SECONDARY};
      }
      .title-en {
        margin-top: 4px;
        font-size: 12pt;
        font-weight: 500;
        letter-spacing: 0.24em;
        text-transform: uppercase;
        color: ${TEXT_SECONDARY};
      }
      .preamble-tr {
        margin-top: 10mm;
        font-size: 13pt;
        color: ${TEXT_SECONDARY};
      }
      .preamble-en {
        margin-top: 2px;
        font-size: 10pt;
        font-style: italic;
        color: ${TEXT_SECONDARY};
      }
      .name {
        margin-top: 6mm;
        font-family: "Brush Script MT", "Lucida Handwriting", "Apple Chancery",
          cursive;
        font-size: 52pt;
        font-weight: 400;
        color: ${SECONDARY};
        line-height: 1.05;
      }
      .name-rule {
        margin-top: 4mm;
        width: 60%;
        height: 1px;
        background: ${SECONDARY};
        opacity: 0.25;
      }
      .body-tr {
        margin-top: 6mm;
        max-width: 78%;
        font-size: 13pt;
        line-height: 1.55;
        color: ${SECONDARY};
      }
      .body-tr .level {
        font-weight: 800;
        color: ${TERTIARY};
      }
      .body-en {
        margin-top: 3mm;
        max-width: 78%;
        font-size: 10pt;
        font-style: italic;
        line-height: 1.45;
        color: ${TEXT_SECONDARY};
      }
      .stats {
        margin-top: 8mm;
        display: flex;
        gap: 14mm;
        align-items: flex-start;
      }
      .stat {
        display: flex;
        flex-direction: column;
        align-items: center;
        min-width: 28mm;
      }
      .stat-value {
        font-size: 22pt;
        font-weight: 800;
        color: ${SECONDARY};
        line-height: 1;
      }
      .stat-label-tr {
        margin-top: 4px;
        font-size: 9pt;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.12em;
        color: ${SECONDARY};
      }
      .stat-label-en {
        font-size: 7.5pt;
        font-style: italic;
        color: ${TEXT_SECONDARY};
      }
      .footer {
        position: absolute;
        left: 22mm;
        right: 22mm;
        bottom: 16mm;
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
      }
      .corner-block {
        text-align: left;
        font-size: 8.5pt;
        color: ${TEXT_SECONDARY};
        line-height: 1.5;
      }
      .corner-block.right {
        text-align: right;
      }
      .corner-label {
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 0.14em;
        font-size: 7.5pt;
        color: ${SECONDARY};
      }
      .corner-value {
        font-size: 10pt;
        color: ${SECONDARY};
        font-weight: 600;
      }
      .signature {
        position: absolute;
        left: 50%;
        bottom: 16mm;
        transform: translateX(-50%);
        text-align: center;
      }
      .sig-name {
        font-family: "Brush Script MT", "Lucida Handwriting", "Apple Chancery",
          cursive;
        font-size: 24pt;
        color: ${SECONDARY};
        line-height: 1;
      }
      .sig-underline {
        margin: 6px auto 0;
        width: 56mm;
        height: 1.5px;
        background: ${SECONDARY};
      }
      .sig-title-tr {
        margin-top: 6px;
        font-size: 9pt;
        font-weight: 700;
        letter-spacing: 0.18em;
        text-transform: uppercase;
        color: ${SECONDARY};
      }
      .sig-title-en {
        font-size: 8pt;
        font-style: italic;
        color: ${TEXT_SECONDARY};
      }
    </style>
  </head>
  <body>
    <div class="page">
      <div class="pattern"></div>
      <div class="frame"></div>
      <div class="frame-inner"></div>
      <div class="corner tl"></div>
      <div class="corner tr"></div>
      <div class="corner bl"></div>
      <div class="corner br"></div>

      <div class="content">
        <div class="header">
          <div class="wordmark">Lafla<span class="dot"></span></div>
          <div class="accent-line"></div>
        </div>

        <div class="title-tr">Yetkinlik Sertifikası</div>
        <div class="title-en">Certificate of Proficiency</div>

        <div class="preamble-tr">İşbu belge ile onaylanır ki</div>
        <div class="preamble-en">This is to certify that</div>

        <div class="name">${name}</div>
        <div class="name-rule"></div>

        <div class="body-tr">
          Lafla'nın yapılandırılmış müfredatı boyunca düzenli pratik göstererek
          <span class="level">${escapeHtml(levelTr)}</span>
          düzeyinde İngilizce konuşma yetkinliği sergilemiştir.
        </div>
        <div class="body-en">
          has demonstrated <strong>${escapeHtml(levelEn)}</strong> level English
          speaking proficiency through Lafla's structured curriculum.
        </div>

        <div class="stats">
          <div class="stat">
            <div class="stat-value">${cert.practiceHours.toLocaleString(
              "tr-TR",
            )}</div>
            <div class="stat-label-tr">Saat Pratik</div>
            <div class="stat-label-en">practice hours</div>
          </div>
          <div class="stat">
            <div class="stat-value">${cert.vocabCount.toLocaleString(
              "tr-TR",
            )}</div>
            <div class="stat-label-tr">Aktif Kelime</div>
            <div class="stat-label-en">active vocabulary</div>
          </div>
          <div class="stat">
            <div class="stat-value">${cert.coachSessions.toLocaleString(
              "tr-TR",
            )}</div>
            <div class="stat-label-tr">Koç Seansı</div>
            <div class="stat-label-en">coach sessions</div>
          </div>
        </div>
      </div>

      <div class="footer">
        <div class="corner-block">
          <div class="corner-label">Verilme Tarihi · Issued</div>
          <div class="corner-value">${escapeHtml(dateTr)}</div>
          <div>${escapeHtml(dateEn)}</div>
        </div>
        <div class="corner-block right">
          <div class="corner-label">Sertifika No · Serial</div>
          <div class="corner-value">${serial}</div>
          <div>lafla.app/verify</div>
        </div>
      </div>

      <div class="signature">
        <div class="sig-name">${escapeHtml(cert.issuerName.split(",")[0] ?? "Maya")}</div>
        <div class="sig-underline"></div>
        <div class="sig-title-tr">${escapeHtml(issuer)}</div>
        <div class="sig-title-en">Issued by Lafla</div>
      </div>
    </div>
  </body>
</html>`;
}

// ---------------------------------------------------------------------------
// PDF generation via expo-print.
// We dynamically require expo-print so the file still type-checks if the
// package isn't installed yet (it's listed in the install-docs above).
// Returns the file URI of the generated PDF.
// ---------------------------------------------------------------------------

export async function generateCertificatePDF(
  cert: CertificateData,
): Promise<string> {
  const html = await generateCertificateHTML(cert);
  // Dynamic require keeps TypeScript happy when expo-print isn't yet wired up.
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const Print = require("expo-print") as {
    printToFileAsync: (opts: {
      html: string;
      width?: number;
      height?: number;
      base64?: boolean;
    }) => Promise<{ uri: string }>;
  };
  // A4 landscape in points (72pt = 1in): 842 × 595
  const { uri } = await Print.printToFileAsync({
    html,
    width: 842,
    height: 595,
    base64: false,
  });
  return uri;
}

// ---------------------------------------------------------------------------
// LinkedIn share URL helper
// LinkedIn's "share" endpoint accepts a URL — we share the certificate's
// public verify page (placeholder host) along with a pre-filled summary.
// ---------------------------------------------------------------------------

export function buildLinkedInShareURL(cert: CertificateData): string {
  const verifyUrl = `https://lafla.app/verify/${encodeURIComponent(
    cert.serialNumber,
  )}`;
  const summary = encodeURIComponent(
    `${cert.recipientName} earned the ${LEVEL_LABELS_EN[cert.level]} certificate from Lafla — issued by ${cert.issuerName}. Practice hours: ${cert.practiceHours}, active vocabulary: ${cert.vocabCount}.`,
  );
  return `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
    verifyUrl,
  )}&summary=${summary}`;
}

// Tiny utility — keeps the auto-award path strongly-typed against the
// canonical CefrLevel union without leaking the import everywhere.
export function isCertifiableLevel(
  level: CefrLevel,
): level is CertificateData["level"] {
  return (
    level === "A1" ||
    level === "A2" ||
    level === "B1" ||
    level === "B2" ||
    level === "C1" ||
    level === "C2"
  );
}

// Re-export the storage key so tests / debug screens can inspect it.
export const CERTIFICATES_STORAGE_KEY = K_CERTS;

// Convenience: has user already been awarded this level?
export async function hasCertificateForLevel(
  level: CertificateData["level"],
): Promise<boolean> {
  const certs = await readCerts();
  return certs.some((c) => c.level === level);
}

// Re-export getCefrLevel proxy so that callers building auto-award flows
// don't need a second import (keeps onLevelAdvanced one-liner clean).
export { getCefrLevel };
