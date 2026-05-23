// Lafla — App Store Connect API sync (metadata text only).
//
// 2026-05-23 — "asc'ye bağlan choremedan halletmek" istendi. Bu script ASC
// REST API'sine JWT auth ile bağlanıp text metadata'yı push eder. Manuel
// web UI'ye girip 18 alana copy-paste yapmaktan kurtaran chore automation.
//
// NE YAPAR (otomatik):
//   • App name / subtitle / promo text (TR + EN locale)
//   • Description / keywords / what's new (TR + EN)
//   • Latest TestFlight build'i bir App Store version'a attach
//
// NE YAPMAZ (kasıtlı; user/Apple constraint):
//   • Submit for Review (irreversible — sen tıklarsın)
//   • IAP product create (price = financial; manuel ASC'de güvenli)
//   • Privacy Nutrition Label (Apple API'den settable değil, sadece web)
//   • Age rating questionnaire (aynı sebep)
//   • Screenshot upload (multipart upload daha sonraki iterasyon)
//
// AUTH:
//   - APP_STORE_CONNECT_KEY_ID
//   - APP_STORE_CONNECT_ISSUER_ID
//   - APP_STORE_CONNECT_PRIVATE_KEY (.p8 içeriği veya path)
//
// Bunlar GitHub Actions secrets'ta. Local çalıştırmak istersen .env'e koy:
//   ASC_KEY_ID=
//   ASC_ISSUER_ID=
//   ASC_PRIVATE_KEY_PATH=AuthKey_XXXX.p8
//
// KULLANIM:
//   pnpm --filter mobile run asc:sync          # dry-run, print diff
//   pnpm --filter mobile run asc:sync -- --apply  # gerçek push
//
// VEYA GitHub Actions:
//   gh workflow run asc-sync.yml
//
// ÖNCE NEYİ DOĞRULA:
//   1. App Store Connect'te app oluşturulmuş ve bundleId match
//   2. Bir "1.0 — Prepare for Submission" version yaratılmış
//   3. TR + EN locale'leri eklenmiş

import { readFileSync } from "node:fs";
import { createSign } from "node:crypto";
import { resolve } from "node:path";

// ─────────────────────────────────────────────────────────────────
// Metadata source — TEK KAYNAK docs/APP_STORE_METADATA.md ama
// markdown parse etmek kırılgan. Bu dosyada inline tutuyoruz;
// metadata güncellemesi → bu dosyayı edit et + docs/APP_STORE_METADATA.md.
// İkisi drift ederse: bu dosya kod tarafı (production push)
// kaynağı, docs review/onboarding kaynağı.
// ─────────────────────────────────────────────────────────────────

const METADATA = {
  bundleId: "com.lafla.app",
  // Apple "App Store Connect" version string (CFBundleShortVersionString).
  // app.json'daki version ile aynı olmalı.
  appStoreVersion: "0.9.1",

  // tr-TR primary
  tr: {
    name: "Lafla: İngilizce Konuşma",
    subtitle: "Donma. Konuş. Türkçe ipuçlu.",
    promotionalText:
      "Lafla geldi. 7 mod, 935 sahne, IELTS Speaking, fonem drill, akıllı NPC konuşmaları. Türkçe ipuçlu hata feedback. Flörtten mülakata, donma. Konuş.",
    description: [
      "Yabancıyla İngilizce konuşurken donmak yok. Lafla, Türkçe düşünen birine göre tasarlanmış konuşma pratiği uygulaması.",
      "",
      "Her sahne 60 saniyenin altında. Telefonun kasarsa kasasın — Lafla beklemiyor, anında geri bildirim veriyor.",
      "",
      "✨ NE BULURSUN",
      "",
      "🎯 7 mod, tek akış: Flört, İş, Bar, Havaalanı, Günlük, Sipariş, IELTS Speaking",
      "🎬 935 gerçek sahne — A1 başlangıçtan C1 ileri seviyeye CEFR haritası",
      "🎙️ Phoneme Drill — Türk kulağı için zor sesleri (th, æ, v/w) targetli alıştırmalar",
      "🎧 Dinleme + yazım modu — sessiz ortamda da pratik yap",
      "🇹🇷 Türkçeye özel hata yakalama — article eksik, \"I am go\" hatası, \"make picture\" tuzakları",
      "⚡ 3 saniyenin altında geri bildirim — donduğunda Lafla zaten yanıt vermiş",
      "🧠 Akıllı konuşma — NPC karakterler doğal \"Hmm, evet,...\" başlangıçlarla cevap veriyor",
      "💭 Voice Journal — kendi sesini kaydet, 1 hafta sonraki sesinle karşılaştır",
      "🎨 Karanlık, premium tasarım — gözünüzü yormaz, gece de çalışır",
      "",
      "🤔 BU UYGULAMA NEDİR?",
      "",
      "Lafla, \"İngilizceyi bilmek\" ile \"İngilizce konuşmak\" arasındaki uçurumu kapatır. Sınav notun yüksek ama kafedeki Amerikalıyla 30 saniye sonra terliyorsun. Match'te mesaj geldi, 5 dakika düşünüyorsun. Lafla bu boşluğu kapatmak için var — 935 gerçek senaryo, hepsi ön-üretilmiş, hiçbiri AI hallüsinasyonu değil. Hiçbir cevabın internete gönderilmiyor.",
      "",
      "🚀 NEDEN LAFLA?",
      "",
      "Çoğu uygulama İngilizceyi çeviri olarak öğretir. Lafla, Türk düşünce yapısının nerede tıkandığını bilir:",
      "",
      "• \"Want make appointment\" → \"I'd like to make an appointment\"",
      "• \"I have problem\" → \"I'm having an issue with...\"",
      "• \"I am go to home\" → \"I'm going home\"",
      "",
      "Her sahnede bu spesifik tuzaklar hedef alınmış. Her düzeltme Türkçe açıklamalı — \"neden hata olduğunu\" anla, ezberleme.",
      "",
      "🎓 IELTS Speaking moduyla Part 1, 2, 3 simulasyonu — band 7+ için gerekli yapıyı kazan.",
      "",
      "💎 LAFLA PRO ÜYELİK",
      "",
      "Tüm 935 sahneye erişim, sınırsız tekrar, derin telaffuz analizi, IELTS Band tahmini, kişisel zayıflık raporu ve gelişmiş ilerleme paneli.",
      "",
      "📋 Fiyat: ₺99/ay veya ₺999/yıl (yıllık planda %16 tasarruf)",
      "🔄 Otomatik yenilenir; iPhone Ayarlar → Apple Kimliği → Abonelikler menüsünden istediğin zaman iptal edebilirsin",
      "⏰ İptal etmediğin sürece dönem sonunda otomatik yenilenir",
      "📜 Şartlar: lafla.app/terms · Gizlilik: lafla.app/privacy",
      "",
      "Destek: hello@lafla.app",
    ].join("\n"),
    keywords:
      "ingilizce konuşma,ielts speaking,flört ingilizcesi,yds,toefl,mülakat,telaffuz,akıcı,fonem",
    whatsNew: [
      "Lafla — ilk sürüm. Konuş, çalış.",
      "",
      "🎯 7 mod, tek akış: Flört, İş, Bar, Havaalanı, Günlük, Sipariş, IELTS",
      "🎬 935 oynanabilir sahne — A1'den C1'e CEFR ile haritalı",
      "🎙️ Phoneme Drill — Türk kulağı için zor sesleri targetli alıştır",
      "🎧 Dinle + yaz modu — sessiz ortamda da pratik",
      "🇹🇷 Türkçeye özel hata geri bildirimi (article, doğrudan çeviri tuzakları)",
      "⚡ Sub-3-saniye geri bildirim — donduğunda Lafla zaten cevap vermiş",
      "🧠 Akıllı konuşma — NPC karakterler doğal başlangıçlarla konuşuyor",
      "💭 Voice Journal — kendi sesini kaydet, ilerlemeyi duy",
      "🌙 Neon Noir tema — premium, gece dostu",
      "",
      "Geri bildirim: hello@lafla.app",
    ].join("\n"),
  },

  // en-US secondary
  en: {
    name: "Lafla: English Speaking",
    subtitle: "Stop freezing. Speak. Turkish hints.",
    promotionalText:
      "Lafla just launched. 7 modes, 935 scenarios, IELTS Speaking, phoneme drills, smart NPC conversations. Turkish-language error feedback. Stop freezing.",
    description: [
      "Stop freezing when you have to speak English. Lafla is built for Turkish speakers who can read English but lock up the moment a conversation starts.",
      "",
      "Every scene runs under 60 seconds. Real moments, real corrections, sub-3-second feedback.",
      "",
      "✨ WHAT YOU GET",
      "",
      "🎯 7 modes, one feed: Dating, Work, Bar, Airport, Daily, Ordering, IELTS Speaking",
      "🎬 935 real scenarios — CEFR-mapped from A1 to C1",
      "🎙️ Phoneme Drill — targeted practice for sounds Turkish ears confuse (th, æ, v/w)",
      "🎧 Listen & Transcribe — practice in silent environments too",
      "🇹🇷 Turkish-tailored error feedback — dropped articles, \"I am go\" mistakes, \"make picture\" traps",
      "⚡ Sub-3-second feedback loop — corrections land before the freeze sets in",
      "🧠 Smart conversation — NPCs reply with natural \"Hmm, yes,...\" openers; less scripted feel",
      "💭 Voice Journal — record yourself, compare your voice from a week ago",
      "🎨 Dark, premium design — readable at night, no eye fatigue",
      "",
      "🤔 WHAT IS THIS?",
      "",
      "Lafla closes the gap between \"knowing English\" and \"speaking English.\" You scored high on a translation test but you sweat 30 seconds into a conversation with an American. A Match wrote, you spent five minutes drafting one reply. Lafla is built for that gap — 935 real scenarios, all pre-authored, zero runtime AI hallucination. Nothing you type or say leaves your device.",
      "",
      "🚀 WHY LAFLA?",
      "",
      "Most apps teach English as translation. Lafla knows where Turkish thinking gets stuck:",
      "",
      "• \"Want make appointment\" → \"I'd like to make an appointment\"",
      "• \"I have problem\" → \"I'm having an issue with...\"",
      "• \"I am go to home\" → \"I'm going home\"",
      "",
      "Every scene targets these specific traps. Every correction is explained in Turkish — understand the \"why,\" don't just memorize.",
      "",
      "🎓 IELTS Speaking mode covers Parts 1, 2, and 3 — the structure you need for band 7+.",
      "",
      "💎 LAFLA PRO MEMBERSHIP",
      "",
      "All 935 scenes unlocked, unlimited replays, deep pronunciation analysis, IELTS Band estimate, personal weakness report, advanced progress dashboard.",
      "",
      "📋 Pricing: ₺99/month or ₺999/year (16% savings on annual)",
      "🔄 Auto-renews; cancel anytime in iPhone Settings → Apple ID → Subscriptions",
      "⏰ Renewal continues at the end of each period unless cancelled",
      "📜 Terms: lafla.app/terms · Privacy: lafla.app/privacy",
      "",
      "Support: hello@lafla.app",
    ].join("\n"),
    keywords:
      "speak english,esl turkish,fluency,pronunciation,phoneme,ielts,toefl,conversation,interview",
    whatsNew: [
      "Lafla — first launch. Speak. Work.",
      "",
      "🎯 7 modes, one feed: Dating, Work, Bar, Airport, Daily, Ordering, IELTS",
      "🎬 935 scenarios playable at launch — CEFR-mapped A1 to C1",
      "🎙️ Phoneme Drill — targeted practice for sounds Turkish ears confuse",
      "🎧 Listen & Transcribe — practice in silent environments",
      "🇹🇷 Turkish-tailored error feedback (articles, direct-translation traps)",
      "⚡ Sub-3-second feedback loop",
      "🧠 Smart conversation — NPCs reply with natural openers",
      "💭 Voice Journal — record yourself, hear your progress",
      "🌙 Neon Noir theme — premium, night-friendly",
      "",
      "Feedback: hello@lafla.app",
    ].join("\n"),
  },
} as const;

// ─────────────────────────────────────────────────────────────────
// JWT auth — Apple App Store Connect API requires ES256 JWT with
// specific claims. Validity max 20 min per Apple docs.
// ─────────────────────────────────────────────────────────────────

interface JwtConfig {
  keyId: string;
  issuerId: string;
  privateKey: string; // PEM-formatted .p8 contents
}

function base64UrlEncode(buf: Buffer | string): string {
  const b = typeof buf === "string" ? Buffer.from(buf) : buf;
  return b
    .toString("base64")
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");
}

function generateJwt(cfg: JwtConfig): string {
  const header = base64UrlEncode(
    JSON.stringify({ alg: "ES256", kid: cfg.keyId, typ: "JWT" }),
  );
  const now = Math.floor(Date.now() / 1000);
  const payload = base64UrlEncode(
    JSON.stringify({
      iss: cfg.issuerId,
      iat: now,
      exp: now + 1200, // 20 min cap
      aud: "appstoreconnect-v1",
    }),
  );
  const unsigned = `${header}.${payload}`;
  const signer = createSign("SHA256");
  signer.update(unsigned);
  signer.end();
  const sig = signer.sign({ key: cfg.privateKey, dsaEncoding: "ieee-p1363" });
  return `${unsigned}.${base64UrlEncode(sig)}`;
}

function loadConfig(): JwtConfig {
  const keyId = process.env.ASC_KEY_ID ?? process.env.APP_STORE_CONNECT_KEY_ID;
  const issuerId =
    process.env.ASC_ISSUER_ID ?? process.env.APP_STORE_CONNECT_ISSUER_ID;
  const privateKeyEnv =
    process.env.ASC_PRIVATE_KEY ?? process.env.APP_STORE_CONNECT_PRIVATE_KEY;
  const privateKeyPath =
    process.env.ASC_PRIVATE_KEY_PATH ??
    process.env.APP_STORE_CONNECT_PRIVATE_KEY_PATH;

  if (!keyId) throw new Error("ASC_KEY_ID env eksik");
  if (!issuerId) throw new Error("ASC_ISSUER_ID env eksik");
  let privateKey: string | null = null;
  if (privateKeyEnv && privateKeyEnv.includes("PRIVATE KEY")) {
    privateKey = privateKeyEnv;
  } else if (privateKeyPath) {
    privateKey = readFileSync(resolve(privateKeyPath), "utf8");
  } else if (privateKeyEnv) {
    // Heuristic: maybe path was passed without flag
    try {
      privateKey = readFileSync(resolve(privateKeyEnv), "utf8");
    } catch {
      throw new Error(
        "ASC_PRIVATE_KEY env'i .p8 PEM içeriği değil ve ASC_PRIVATE_KEY_PATH boş",
      );
    }
  }
  if (!privateKey) throw new Error("ASC private key bulunamadı");
  return { keyId, issuerId, privateKey };
}

// ─────────────────────────────────────────────────────────────────
// Emoji strip — Apple ASC description/whatsNew alanlarında emoji
// kabul etmiyor (2026-05-23 ENTITY_ERROR.ATTRIBUTE.INVALID.INVALID_CHARACTERS).
// Web UI'da paste edebilirsin, ama API push'unda kaldırılmalı.
//
// Unicode aralıkları:
//   \u{1F300}-\u{1F9FF} — misc symbols, emoticons, transport, supplemental
//   \u{2600}-\u{27BF}   — misc symbols + dingbats (✨ ⚡ ✦ vs.)
//   \u{FE00}-\u{FE0F}   — variation selectors (text/emoji style)
//   \u{1F1E0}-\u{1F1FF} — regional indicators (flag halves)
//   \u{200D}            — ZWJ (composite emoji glue)
// ─────────────────────────────────────────────────────────────────

function stripEmojis(s: string): string {
  return (
    s
      .replace(
        /[\u{1F300}-\u{1F9FF}\u{1FA00}-\u{1FAFF}]/gu,
        "",
      )
      .replace(/[\u{2600}-\u{27BF}]/gu, "")
      .replace(/[\u{1F1E0}-\u{1F1FF}]/gu, "")
      .replace(/[\u{FE00}-\u{FE0F}]/gu, "")
      .replace(/‍/g, "")
      // Toplama: arta kalan multi-space'leri tek space yap
      .replace(/ {2,}/g, " ")
      // Boş satır başı emoji silindiyse satır başını koru
      .replace(/^\s+$/gm, "")
      .trim()
  );
}

// ─────────────────────────────────────────────────────────────────
// HTTP — Apple ASC API v1, JSON:API spec'i (data/relationships).
// ─────────────────────────────────────────────────────────────────

const ASC_BASE = "https://api.appstoreconnect.apple.com/v1";

async function ascFetch(
  token: string,
  path: string,
  init: RequestInit = {},
): Promise<unknown> {
  const url = path.startsWith("http") ? path : `${ASC_BASE}${path}`;
  const headers: Record<string, string> = {
    Authorization: `Bearer ${token}`,
    Accept: "application/json",
    ...((init.headers as Record<string, string> | undefined) ?? {}),
  };
  if (init.body && !headers["Content-Type"]) {
    headers["Content-Type"] = "application/json";
  }
  const res = await fetch(url, { ...init, headers });
  if (!res.ok) {
    const text = await res.text().catch(() => "<no body>");
    throw new Error(`ASC ${res.status} ${res.statusText}: ${text}`);
  }
  if (res.status === 204) return null;
  return res.json();
}

// ─────────────────────────────────────────────────────────────────
// Sync workflow — yüksek seviyeden:
//   1. App ID'yi bundleId üzerinden bul
//   2. App'in latest "Prepare for Submission" version'unu bul
//      (preReleaseVersion + appStoreVersionsState=PREPARE_FOR_SUBMISSION)
//   3. Version localizations'ı (TR + EN) güncelle
//   4. (opsiyonel) Latest TestFlight build'i version'a attach et
// ─────────────────────────────────────────────────────────────────

interface Resource {
  id: string;
  type: string;
  attributes?: Record<string, unknown>;
  relationships?: Record<string, unknown>;
}
interface JsonApiList {
  data: Resource[];
}

async function findAppId(token: string, bundleId: string): Promise<string> {
  const list = (await ascFetch(
    token,
    `/apps?filter[bundleId]=${encodeURIComponent(bundleId)}&limit=1`,
  )) as JsonApiList;
  const first = list.data?.[0];
  if (!first) throw new Error(`App not found for bundleId ${bundleId}`);
  return first.id;
}

async function findPrepareVersion(
  token: string,
  appId: string,
): Promise<string | null> {
  // PREPARE_FOR_SUBMISSION → version'ı editliyoruz, henüz submitted değil
  const list = (await ascFetch(
    token,
    `/apps/${appId}/appStoreVersions?filter[appStoreState]=PREPARE_FOR_SUBMISSION&limit=1`,
  )) as JsonApiList;
  return list.data?.[0]?.id ?? null;
}

async function findVersionLocalizations(
  token: string,
  versionId: string,
): Promise<Resource[]> {
  const list = (await ascFetch(
    token,
    `/appStoreVersions/${versionId}/appStoreVersionLocalizations?limit=10`,
  )) as JsonApiList;
  return list.data;
}

async function patchLocalization(
  token: string,
  locId: string,
  attrs: Record<string, string>,
  dryRun: boolean,
): Promise<void> {
  if (dryRun) {
    console.log(`  [dry-run] PATCH localization ${locId} →`, Object.keys(attrs));
    return;
  }
  await ascFetch(token, `/appStoreVersionLocalizations/${locId}`, {
    method: "PATCH",
    body: JSON.stringify({
      data: {
        id: locId,
        type: "appStoreVersionLocalizations",
        attributes: attrs,
      },
    }),
  });
  console.log(`  ✅ PATCH localization ${locId} → ${Object.keys(attrs).join(", ")}`);
}

async function patchVersionWhatsNew(
  token: string,
  versionId: string,
  locId: string,
  whatsNew: string,
  dryRun: boolean,
): Promise<void> {
  // "What's New" appStoreVersionLocalizations'ın whatsNew attribute'unda.
  // Apple kuralı: ilk submission (1.0.0) için whatsNew edit edilemez — Apple
  // o version için "new app" framing'i otomatik kullanır. Sonraki sürümlerde
  // (v1.1+) edit'e açılır. Bu yüzden fail'i fatal yapma — warn + devam.
  try {
    await patchLocalization(token, locId, { whatsNew }, dryRun);
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    if (msg.includes("whatsNew") && msg.includes("cannot be edited")) {
      console.log(
        `  ⚠️  whatsNew skip: ${locId} — Apple ilk submission'da edit etmiyor (normal, v1.1+'dan itibaren çalışır)`,
      );
      return;
    }
    throw err; // başka error → propagate
  }
}

async function main(): Promise<void> {
  const apply = process.argv.includes("--apply");
  const dryRun = !apply;
  console.log(
    `[asc-sync] ${dryRun ? "DRY-RUN (no writes)" : "APPLY (will push)"} v0.9.1`,
  );

  const cfg = loadConfig();
  const token = generateJwt(cfg);

  console.log(`[asc-sync] Looking up app ${METADATA.bundleId}…`);
  const appId = await findAppId(token, METADATA.bundleId);
  console.log(`  app id: ${appId}`);

  const versionId = await findPrepareVersion(token, appId);
  if (!versionId) {
    console.error(
      "\n❌ Editable version yok. App Store Connect'te '1.0 — Prepare for Submission' yarat, sonra tekrar çalıştır.",
    );
    process.exit(1);
  }
  console.log(`  version id (PREPARE_FOR_SUBMISSION): ${versionId}`);

  const locs = await findVersionLocalizations(token, versionId);
  console.log(`  ${locs.length} localization(s) found`);

  for (const loc of locs) {
    const locale = String(loc.attributes?.locale ?? "");
    if (locale.startsWith("tr")) {
      console.log(`\n[TR] localization ${loc.id} (${locale}):`);
      await patchLocalization(
        token,
        loc.id,
        {
          description: stripEmojis(METADATA.tr.description),
          keywords: METADATA.tr.keywords,
          marketingUrl: "https://berkdemirokk.github.io/lafla/",
          promotionalText: stripEmojis(METADATA.tr.promotionalText),
          supportUrl: "https://berkdemirokk.github.io/lafla/",
        },
        dryRun,
      );
      await patchVersionWhatsNew(
        token,
        versionId,
        loc.id,
        stripEmojis(METADATA.tr.whatsNew),
        dryRun,
      );
    } else if (locale.startsWith("en")) {
      console.log(`\n[EN] localization ${loc.id} (${locale}):`);
      await patchLocalization(
        token,
        loc.id,
        {
          description: stripEmojis(METADATA.en.description),
          keywords: METADATA.en.keywords,
          marketingUrl: "https://berkdemirokk.github.io/lafla/",
          promotionalText: stripEmojis(METADATA.en.promotionalText),
          supportUrl: "https://berkdemirokk.github.io/lafla/",
        },
        dryRun,
      );
      await patchVersionWhatsNew(
        token,
        versionId,
        loc.id,
        stripEmojis(METADATA.en.whatsNew),
        dryRun,
      );
    } else {
      console.log(`  ⏭️  Skipping ${locale} (not TR or EN)`);
    }
  }

  console.log(
    `\n[asc-sync] ${dryRun ? "Dry-run complete. Add --apply to push." : "Done."}`,
  );
  console.log(
    "\n⚠️  MANUEL ADIMLAR (script'ten YAPILMIYOR):",
  );
  console.log("  • IAP product create + pricing — ASC web UI (financial)");
  console.log("  • Privacy Nutrition Label — Apple API'den settable değil");
  console.log("  • Age Rating questionnaire — aynı");
  console.log("  • Screenshot upload — bu script'in v2 hedefi");
  console.log("  • Submit for Review — irreversible, sen tıklarsın");
}

main().catch((err) => {
  console.error("\n❌ asc-sync failed:", err.message ?? err);
  process.exit(1);
});
