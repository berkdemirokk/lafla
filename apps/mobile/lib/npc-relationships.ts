// Lafla — NPC İlişki Tracker.
//
// 2026-05-23 — Engagement #6. Lafla'ya ÖZGÜ feature. Roleplay app'in
// USP'si: sahnede karşılaştığın NPC'ler — Mia (barista), Sam (date),
// Erin (boss) — sahne sayısı ile "tanıdık → arkadaş → yakın" ilişki
// seviyesine geliyor.
//
// Brand:
//   • XP yok, level-up animasyonu yok, confetti yok
//   • Türkçe yetişkin label'lar (Tanıdık / Arkadaş / Yakın)
//   • "Yabancı" seviyesi UI'da gösterilmez — sadece yeni karşılaşma
//
// Identity kuralı:
//   • NPC name (nameForNpc) bizim key'imiz. "Mia" hep aynı kişi.
//   • Aynı isim farklı senaryolarda → aynı NPC kabul edilir (intentional)
//   • Bu özellikle small pools'da uyumlu — Mia (barista pool) tek isim
//
// Storage: AsyncStorage `lafla.npc.relationships` (capsız — 30-40 max NPC).

import AsyncStorage from "@react-native-async-storage/async-storage";

import { isObject, parseSafe } from "./json-safe";

const K_REL = "lafla.npc.relationships";

export interface NpcRelationship {
  /** NPC name — "Mia", "Sam", "Dr. Chen". Identity. */
  name: string;
  /** Toplam karşılaşma sayısı (sahne completion). */
  sceneCount: number;
  /** En son ne zaman konuştun. ISO. */
  lastInteraction: string;
  /** İlk karşılaşma. ISO. */
  firstMet: string;
  /** Hangi modlarda karşılaştığın — UI'da "Bar + Cafe" tarzı renderler. */
  modes: string[];
}

export type RelationshipTier = "acquaintance" | "friend" | "close";

export interface TierInfo {
  tier: RelationshipTier;
  labelTr: string;
  description: string;
}

/**
 * Sahne sayısından ilişki seviyesi.
 *   1-3 → Tanıdık
 *   4-9 → Arkadaş
 *   10+ → Yakın
 *
 * Eşikler intuitive: 3 sahne = "birkaç kez konuştum", 10 sahne = "uzun
 * süredir konuşuyoruz". Türk kullanıcı için anlamlı segmentasyon.
 */
export function tierFor(sceneCount: number): TierInfo {
  if (sceneCount >= 10) {
    return {
      tier: "close",
      labelTr: "Yakın",
      description: "Hatırlamadığı şey yok — eski bir dostluk gibi.",
    };
  }
  if (sceneCount >= 4) {
    return {
      tier: "friend",
      labelTr: "Arkadaş",
      description: "Birbirinizi tanıyorsunuz, rahatsınız.",
    };
  }
  return {
    tier: "acquaintance",
    labelTr: "Tanıdık",
    description: "Birkaç kez konuştunuz, yüz tanıdık.",
  };
}

function isRelationship(x: unknown): x is NpcRelationship {
  if (!isObject(x)) return false;
  const o = x as Record<string, unknown>;
  return (
    typeof o.name === "string" &&
    typeof o.sceneCount === "number" &&
    typeof o.lastInteraction === "string" &&
    typeof o.firstMet === "string" &&
    Array.isArray(o.modes)
  );
}

async function readAll(): Promise<NpcRelationship[]> {
  try {
    const raw = await AsyncStorage.getItem(K_REL);
    if (!raw) return [];
    const parsed = parseSafe<unknown[]>(raw, [], Array.isArray, {
      source: "npc-relationships.readAll",
    });
    return parsed.filter(isRelationship);
  } catch {
    return [];
  }
}

async function writeAll(list: NpcRelationship[]): Promise<void> {
  try {
    await AsyncStorage.setItem(K_REL, JSON.stringify(list));
  } catch {
    // Best effort.
  }
}

/**
 * Bir NPC ile sahne tamamlandığında çağrılır. Yeni NPC ise oluşturur,
 * mevcut NPC ise sceneCount artırır + lastInteraction günceller.
 */
export async function recordInteraction(args: {
  npcName: string;
  mode: string;
}): Promise<NpcRelationship> {
  const name = args.npcName.trim();
  if (!name) {
    // Sentinel — invalid input. Throw'lamıyoruz çünkü call site
    // her zaman fire-and-forget; sessiz no-op return ediyoruz.
    return {
      name: "unknown",
      sceneCount: 0,
      lastInteraction: new Date().toISOString(),
      firstMet: new Date().toISOString(),
      modes: [],
    };
  }
  const list = await readAll();
  const now = new Date().toISOString();
  const idx = list.findIndex((r) => r.name === name);
  if (idx >= 0) {
    const existing = list[idx]!;
    const modes = existing.modes.includes(args.mode)
      ? existing.modes
      : [...existing.modes, args.mode];
    const updated: NpcRelationship = {
      ...existing,
      sceneCount: existing.sceneCount + 1,
      lastInteraction: now,
      modes,
    };
    list[idx] = updated;
    await writeAll(list);
    return updated;
  }
  // Yeni NPC.
  const created: NpcRelationship = {
    name,
    sceneCount: 1,
    lastInteraction: now,
    firstMet: now,
    modes: [args.mode],
  };
  list.push(created);
  await writeAll(list);
  return created;
}

/**
 * Tek NPC'nin mevcut ilişki state'i — sahne başında banner için.
 * NPC daha hiç görülmediyse null döner (UI banner göstermez, sahne
 * "yabancı" hissi ile başlar — natural).
 */
export async function getRelationship(
  npcName: string,
): Promise<NpcRelationship | null> {
  const list = await readAll();
  return list.find((r) => r.name === npcName) ?? null;
}

/**
 * Tüm NPC'leri — son etkileşime göre yeni → eski. Profile sayfası
 * timeline için.
 */
export async function getAllRelationships(): Promise<NpcRelationship[]> {
  const list = await readAll();
  return [...list].sort((a, b) =>
    a.lastInteraction < b.lastInteraction ? 1 : -1,
  );
}

/**
 * Settings → reset entry. Çok kişisel veri — yalnız kullanıcı isteğiyle.
 */
export async function clearAll(): Promise<void> {
  try {
    await AsyncStorage.removeItem(K_REL);
  } catch {
    // ignore
  }
}
