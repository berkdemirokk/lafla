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

export interface NpcEpisode {
  scenarioId: string;
  title: string;
  mode: string;
  outcome: "goal_met" | "close" | "retry";
  userSummary?: string;
  occurredAt: string;
}

export interface NpcRelationship {
  /** Composite identity key: `${bucket}:${name}` — "barista:Mia",
   *  "romantic:Sam". 2026-05-23 fix: name alone collided because pools
   *  share names (Sam in romantic+family, Theo in barista+workplace). */
  id: string;
  /** NPC name — "Mia", "Sam", "Dr. Chen". For display. */
  name: string;
  /** Bucket/context — "romantic", "barista", "workplace", etc. Used to
   *  disambiguate same-named NPCs from different pools. */
  bucket: string;
  /** Toplam karşılaşma sayısı (sahne completion). */
  sceneCount: number;
  /** En son ne zaman konuştun. ISO. */
  lastInteraction: string;
  /** İlk karşılaşma. ISO. */
  firstMet: string;
  /** Hangi modlarda karşılaştığın — UI'da "Bar + Cafe" tarzı renderler. */
  modes: string[];
  /** Last three completed conversations with this character. */
  episodes?: NpcEpisode[];
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
    typeof o.id === "string" &&
    typeof o.name === "string" &&
    typeof o.bucket === "string" &&
    typeof o.sceneCount === "number" &&
    typeof o.lastInteraction === "string" &&
    typeof o.firstMet === "string" &&
    Array.isArray(o.modes) &&
    (o.episodes === undefined ||
      (Array.isArray(o.episodes) &&
        o.episodes.every(
          (episode) =>
            isObject(episode) &&
            typeof episode.scenarioId === "string" &&
            typeof episode.title === "string" &&
            typeof episode.mode === "string" &&
            typeof episode.outcome === "string" &&
            typeof episode.occurredAt === "string",
        )))
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
 *
 * 2026-05-23 fix: `npcBucket` parametresi ZORUNLU oldu. İki farklı pool'da
 * aynı isim olabiliyor (Sam: romantic+family, Theo: barista+workplace).
 * Composite id `${bucket}:${name}` ile ayrılırlar.
 */
export async function recordInteraction(args: {
  npcName: string;
  npcBucket: string;
  mode: string;
  episode?: Omit<NpcEpisode, "occurredAt" | "mode">;
}): Promise<NpcRelationship> {
  const name = args.npcName.trim();
  const bucket = args.npcBucket.trim() || "generic";
  if (!name) {
    // Sentinel — invalid input. Throw'lamıyoruz çünkü call site
    // her zaman fire-and-forget; sessiz no-op return ediyoruz.
    return {
      id: `${bucket}:unknown`,
      name: "unknown",
      bucket,
      sceneCount: 0,
      lastInteraction: new Date().toISOString(),
      firstMet: new Date().toISOString(),
      modes: [],
    };
  }
  const compositeId = `${bucket}:${name}`;
  const list = await readAll();
  const now = new Date().toISOString();
  const idx = list.findIndex((r) => r.id === compositeId);
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
      episodes: args.episode
        ? [
            {
              ...args.episode,
              mode: args.mode,
              occurredAt: now,
            },
            ...(existing.episodes ?? []),
          ].slice(0, 3)
        : existing.episodes,
    };
    list[idx] = updated;
    await writeAll(list);
    return updated;
  }
  // Yeni NPC.
  const created: NpcRelationship = {
    id: compositeId,
    name,
    bucket,
    sceneCount: 1,
    lastInteraction: now,
    firstMet: now,
    modes: [args.mode],
    episodes: args.episode
      ? [
          {
            ...args.episode,
            mode: args.mode,
            occurredAt: now,
          },
        ]
      : [],
  };
  list.push(created);
  await writeAll(list);
  return created;
}

export function memoryPromptForRelationship(
  relationship: NpcRelationship | null,
): string | null {
  const last = relationship?.episodes?.[0];
  if (!last) return null;
  const mode = last.mode.toLowerCase();
  if (/work|career|interview|meeting/.test(mode)) {
    return "Good to see you again — I remember you were preparing for an important work conversation.";
  }
  if (/flirt|date|social|friend/.test(mode)) {
    return "Good to see you again — I remember we talked about your plans last time.";
  }
  if (/travel|airport|hotel/.test(mode)) {
    return "Welcome back — I remember you were sorting out a travel situation last time.";
  }
  return "Good to see you again — I remember our last conversation.";
}

/**
 * Tek NPC'nin mevcut ilişki state'i — sahne başında banner için.
 * NPC daha hiç görülmediyse null döner (UI banner göstermez, sahne
 * "yabancı" hissi ile başlar — natural).
 *
 * Bucket-aware lookup — recordInteraction ile aynı composite key.
 * Eski caller'lar bucket parametresi vermezse "generic" varsayılır
 * (eski davranış değişmez ama collision riskinden uzaklaşır).
 */
export async function getRelationship(
  npcName: string,
  npcBucket = "generic",
): Promise<NpcRelationship | null> {
  const list = await readAll();
  const compositeId = `${npcBucket}:${npcName}`;
  return list.find((r) => r.id === compositeId) ?? null;
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
