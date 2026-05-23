// Lafla — Certificate library.
//
// 2026-05-21 — Retention için CEFR seviye atlamasında "ödül" hissi yarat.
// cefr-level.ts'in onLevelAdvanced() fonksiyonu burayı çağırıyor (dynamic
// require — circular dep'i önler). Bu dosya eksikti ki kullanıcı seviye
// atlasa da certificate alıyor gibi gözükmüyordu.
//
// Mekanik:
//   - awardCertificate(level) — idempotent, dedupe + AsyncStorage'a yazar
//   - hasCertificateForLevel(level) — varsa true
//   - getCertificates() — tüm certificate'ları döndür (galeri için)
//   - clearCertificates() — account reset

import AsyncStorage from "@react-native-async-storage/async-storage";
import type { CefrLevel } from "./cefr-level";
import { trackEvent } from "./analytics";

const K_CERTIFICATES = "lafla.certificates";

export interface Certificate {
  /** CEFR seviyesi (A1-C2). */
  level: CefrLevel;
  /** Verilme tarihi (ISO). */
  awardedAt: string;
  /** İsteğe bağlı display name (kullanıcı adı varsa içeride yazılı). */
  displayName?: string;
}

async function readCerts(): Promise<Certificate[]> {
  try {
    const raw = await AsyncStorage.getItem(K_CERTIFICATES);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as Certificate[];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

async function writeCerts(certs: Certificate[]): Promise<void> {
  try {
    await AsyncStorage.setItem(K_CERTIFICATES, JSON.stringify(certs));
  } catch {
    // best effort
  }
}

/**
 * Bu seviye için certificate var mı? cefr-level.ts buna sorar — idempotency.
 */
export async function hasCertificateForLevel(
  level: CefrLevel,
): Promise<boolean> {
  const certs = await readCerts();
  return certs.some((c) => c.level === level);
}

/**
 * Yeni certificate mint et. Aynı level'ı duplicate etmez (idempotent).
 * cefr-level.ts onLevelAdvanced() buna çağrı yapar.
 */
export async function awardCertificate(
  level: CefrLevel,
  displayName?: string,
): Promise<Certificate | null> {
  const existing = await readCerts();
  if (existing.some((c) => c.level === level)) return null; // already

  const cert: Certificate = {
    level,
    awardedAt: new Date().toISOString(),
    displayName,
  };
  const updated = [...existing, cert].sort((a, b) =>
    CEFR_ORDER.indexOf(a.level) - CEFR_ORDER.indexOf(b.level),
  );
  await writeCerts(updated);

  void trackEvent("certificate_awarded", { level }).catch(() => {});
  return cert;
}

/**
 * Tüm certificate'lar — galeri için.
 */
export async function getCertificates(): Promise<Certificate[]> {
  return await readCerts();
}

/**
 * Toplam certificate sayısı — profile özetinde rakam için.
 */
export async function getCertificateCount(): Promise<number> {
  const certs = await readCerts();
  return certs.length;
}

/**
 * Test / debug — sıfırla.
 */
export async function clearCertificates(): Promise<void> {
  try {
    await AsyncStorage.removeItem(K_CERTIFICATES);
  } catch {
    // ignore
  }
}

/**
 * Retroactive backfill — kullanıcı mevcut CEFR seviyesine sahip ama hiç
 * certificate'ı yoksa, A1'den o seviyeye kadar TÜM cert'leri mint et.
 * Sahne yapmış birinin profilini "yetişkin" göstermek için. İdempotent
 * (already varsa skip).
 *
 * App load'da bir kere çağrılmalı.
 */
export async function backfillCertificatesUpTo(
  currentLevel: CefrLevel,
  displayName?: string,
): Promise<number> {
  const targetIdx = CEFR_ORDER.indexOf(currentLevel);
  if (targetIdx < 0) return 0;
  let added = 0;
  for (let i = 0; i <= targetIdx; i++) {
    const level = CEFR_ORDER[i]!;
    const result = await awardCertificate(level, displayName);
    if (result) added++;
  }
  return added;
}

const CEFR_ORDER: CefrLevel[] = ["A1", "A2", "B1", "B2", "C1", "C2"];
