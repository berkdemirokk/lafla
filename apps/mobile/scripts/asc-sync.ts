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

// 2026-05-24 — Sahne sayısı tek kaynak: lib/scene-counts.ts → SAMPLE_SCENES.length.
// Paywall, Today, ASC metadata: hepsi aynı sayıyı görür. Yeni sahne paketi
// eklendiğinde manuel update yok.
import {
  MODE_COUNT_DISPLAY,
  SCENE_COUNT_DISPLAY,
} from "../lib/scene-counts";

const APP_STORE_PUBLIC_URL = "https://berkdemirokk.github.io/lafla/";

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
  appStoreVersion: "1.0.3",

  // tr-TR primary
  tr: {
    name: "Lafla: İngilizce Konuşma",
    subtitle: "Donma. Konuş.",
    promotionalText:
      `Lafla geldi. ${MODE_COUNT_DISPLAY} mod, ${SCENE_COUNT_DISPLAY} sahne, IELTS Speaking, fonem drill, akıllı NPC konuşmaları. Türkçeye özel hata feedback. Flörtten mülakata, donma. Konuş.`,
    description: [
      "Yabancıyla İngilizce konuşurken donmak yok. Lafla, Türkçe düşünen birine göre tasarlanmış konuşma pratiği uygulaması.",
      "",
      "Her sahne 60 saniyenin altında. Telefonun kasarsa kasasın — Lafla beklemiyor, anında geri bildirim veriyor.",
      "",
      "✨ NE BULURSUN",
      "",
      `🎯 ${MODE_COUNT_DISPLAY} mod, tek akış: Flört, İş, Bar, Havaalanı, Günlük, Sipariş, IELTS Speaking`,
      `🎬 ${SCENE_COUNT_DISPLAY} gerçek sahne — A1 başlangıçtan C1 ileri seviyeye CEFR haritası`,
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
      `Lafla, "İngilizceyi bilmek" ile "İngilizce konuşmak" arasındaki uçurumu kapatır. Sınav notun yüksek ama kafedeki Amerikalıyla 30 saniye sonra terliyorsun. Match'te mesaj geldi, 5 dakika düşünüyorsun. Lafla bu boşluğu kapatmak için var — ${SCENE_COUNT_DISPLAY} gerçek senaryo, hepsi ön-üretilmiş, hiçbiri AI hallüsinasyonu değil. Hiçbir cevabın internete gönderilmiyor.`,
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
      `Tüm ${SCENE_COUNT_DISPLAY} sahneye erişim, sınırsız tekrar, derin telaffuz analizi, IELTS Band tahmini, kişisel zayıflık raporu ve gelişmiş ilerleme paneli.`,
      "",
      "📋 Fiyat: ₺99/ay veya ₺999/yıl (yıllık planda %16 tasarruf)",
      "🔄 Otomatik yenilenir; iPhone Ayarlar → Apple Kimliği → Abonelikler menüsünden istediğin zaman iptal edebilirsin",
      "⏰ İptal etmediğin sürece dönem sonunda otomatik yenilenir",
      "📜 Şartlar: https://berkdemirokk.github.io/lafla/terms.html · Gizlilik: https://berkdemirokk.github.io/lafla/privacy.html",
      "",
      "Destek: berkkdemirok@gmail.com",
    ].join("\n"),
    keywords:
      "ingilizce konuşma,ielts speaking,flört ingilizcesi,yds,toefl,mülakat,telaffuz,akıcı,fonem",
    whatsNew: [
      "Lafla — ilk sürüm. Donma. Konuş.",
      "",
      `🎯 ${MODE_COUNT_DISPLAY} mod, tek akış: Flört, İş, Bar, Havaalanı, Günlük, Sipariş, IELTS`,
      `🎬 ${SCENE_COUNT_DISPLAY} oynanabilir sahne — A1'den C1'e CEFR ile haritalı`,
      "🎙️ Phoneme Drill — Türk kulağı için zor sesleri targetli alıştır",
      "🎧 Dinle + yaz modu — sessiz ortamda da pratik",
      "🇹🇷 Türkçeye özel hata geri bildirimi (article, doğrudan çeviri tuzakları)",
      "⚡ Sub-3-saniye geri bildirim — donduğunda Lafla zaten cevap vermiş",
      "🧠 Akıllı konuşma — NPC karakterler doğal başlangıçlarla konuşuyor",
      "💭 Voice Journal — kendi sesini kaydet, ilerlemeyi duy",
      "🌙 Neon Noir tema — premium, gece dostu",
      "",
      "Geri bildirim: berkkdemirok@gmail.com",
    ].join("\n"),
  },

  // en-US secondary
  en: {
    name: "Lafla: English Speaking",
    subtitle: "Stop freezing. Speak.",
    promotionalText:
      `Lafla just launched. ${MODE_COUNT_DISPLAY} modes, ${SCENE_COUNT_DISPLAY} scenarios, IELTS Speaking, phoneme drills, smart NPC conversations. Turkish-language error feedback. Stop freezing.`,
    description: [
      "Stop freezing when you have to speak English. Lafla is built for Turkish speakers who can read English but lock up the moment a conversation starts.",
      "",
      "Every scene runs under 60 seconds. Real moments, real corrections, sub-3-second feedback.",
      "",
      "✨ WHAT YOU GET",
      "",
      `🎯 ${MODE_COUNT_DISPLAY} modes, one feed: Dating, Work, Bar, Airport, Daily, Ordering, IELTS Speaking`,
      `🎬 ${SCENE_COUNT_DISPLAY} real scenarios — CEFR-mapped from A1 to C1`,
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
      `Lafla closes the gap between "knowing English" and "speaking English." You scored high on a translation test but you sweat 30 seconds into a conversation with an American. A Match wrote, you spent five minutes drafting one reply. Lafla is built for that gap — ${SCENE_COUNT_DISPLAY} real scenarios, all pre-authored, zero runtime AI hallucination. Nothing you type or say leaves your device.`,
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
      `All ${SCENE_COUNT_DISPLAY} scenes unlocked, unlimited replays, deep pronunciation analysis, IELTS Band estimate, personal weakness report, advanced progress dashboard.`,
      "",
      "📋 Pricing: ₺99/month or ₺999/year (16% savings on annual)",
      "🔄 Auto-renews; cancel anytime in iPhone Settings → Apple ID → Subscriptions",
      "⏰ Renewal continues at the end of each period unless cancelled",
      "📜 Terms: https://berkdemirokk.github.io/lafla/terms.html · Privacy: https://berkdemirokk.github.io/lafla/privacy.html",
      "",
      "Support: berkkdemirok@gmail.com",
    ].join("\n"),
    keywords:
      "speak english,esl turkish,fluency,pronunciation,phoneme,ielts,toefl,conversation,interview",
    whatsNew: [
      "Lafla — first launch. Stop freezing. Speak.",
      "",
      `🎯 ${MODE_COUNT_DISPLAY} modes, one feed: Dating, Work, Bar, Airport, Daily, Ordering, IELTS`,
      `🎬 ${SCENE_COUNT_DISPLAY} scenarios playable at launch — CEFR-mapped A1 to C1`,
      "🎙️ Phoneme Drill — targeted practice for sounds Turkish ears confuse",
      "🎧 Listen & Transcribe — practice in silent environments",
      "🇹🇷 Turkish-tailored error feedback (articles, direct-translation traps)",
      "⚡ Sub-3-second feedback loop",
      "🧠 Smart conversation — NPCs reply with natural openers",
      "💭 Voice Journal — record yourself, hear your progress",
      "🌙 Neon Noir theme — premium, night-friendly",
      "",
      "Feedback: berkkdemirok@gmail.com",
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
  const editableStates = new Set([
    "PREPARE_FOR_SUBMISSION",
    "DEVELOPER_REJECTED",
    "REJECTED",
    "METADATA_REJECTED",
  ]);
  const list = (await ascFetch(
    token,
    `/apps/${appId}/appStoreVersions?limit=10`,
  )) as JsonApiList;
  const states = list.data
    ?.map((version) => {
      const state = String(version.attributes?.appStoreState ?? "unknown");
      const versionString = String(version.attributes?.versionString ?? "unknown");
      return `${versionString}:${state}`;
    })
    .join(", ");
  if (states) console.log(`  appStoreVersions: ${states}`);
  const editable = list.data?.find((version) =>
    editableStates.has(String(version.attributes?.appStoreState ?? "")),
  );
  if (editable) {
    const state = String(editable.attributes?.appStoreState ?? "unknown");
    const version = String(editable.attributes?.versionString ?? "unknown");
    console.log(`  editable version: ${version} (${state})`);
  }
  return editable?.id ?? null;
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

// ─────────────────────────────────────────────────────────────────
// App Store Review Detail — demo account + contact + reviewer notes
// ─────────────────────────────────────────────────────────────────

const REVIEW_NOTES = [
  "Lafla is a Turkish-first English speaking-practice app. Demo credentials in the Demo Account fields work end-to-end (Speak+ entitlement granted via RevenueCat).",
  "",
  "Once signed in, you land on the Akış (feed) — a TikTok-style vertical swipe of full-screen scene cards. Each card belongs to one of seven modes: Flört (dating), İş (work), Bar, Havaalanı (airport), Günlük (daily), Sipariş (ordering), IELTS Speaking.",
  "",
  "Tap 'Konuş ▶' on any card → scenario flow (SETUP → DRILL → SCENE → VERDICT). Exercise types in mix: vocab_tile, translate, fill_blank, word_order, spot_mistake, pronounce_phrase, speech_shadowing, roleplay_chat, recap_quiz, listen_and_transcribe.",
  "",
  "Two iOS permissions (Microphone, Speech Recognition) are requested lazily — only when the user first taps a voice exercise. Denying either still leaves the rest of the app usable; we present a graceful 'go to Settings' prompt.",
  "",
  "Two In-App Purchases ship: lafla.premium.monthly (₺99/mo) and lafla.premium.yearly (₺999/yr) — both via RevenueCat. Restore Purchases is reachable from both the paywall and Settings.",
  "",
  "App Tracking Transparency (ATT) prompt is shown on first launch, as soon as the app becomes foreground-active. AdMob initialization is sequenced AFTER the ATT response, and PostHog analytics are gated by ATT — users who deny tracking get zero tracking and the IDFA is never read before the user responds to the prompt.",
  "",
  "Side-rail practice modes for silent environments:",
  "- Phoneme Drill (/phoneme-drill): targeted pronunciation practice for sounds Turkish ears confuse (th, æ, v/w)",
  "- Listen & Transcribe (/listen-mode): hear a sentence, type what you heard",
  "- Voice Journal (/voice-journal): up to 2-min audio entries stored LOCALLY only (no cloud sync)",
  "",
  "Account deletion: Settings → Hesabımı Sil → type 'SİL' → immediate deletion via Supabase edge function. Apple Sign-In refresh_token is revoked server-side (POST appleid.apple.com/auth/revoke) before auth.users deletion. No 30-day grace.",
  "",
  "No runtime LLM. All NPC dialogue and feedback is pre-authored TypeScript; runtime 'smart conversation' uses a deterministic mini-Markov for bridge phrases (lib/npc-bridge.ts), not an external API. Voice Journal audio never leaves the device.",
  "",
  "IELTS Band Estimator displays a clear in-app disclaimer that it is Lafla's internal scoring model, NOT an official IELTS score (not affiliated with British Council/IDP/Cambridge English Assessment).",
  "",
  "Questions during review: berkkdemirok@gmail.com (Istanbul business hours, <4h response).",
].join("\n");

interface ReviewDetailAttrs {
  contactFirstName?: string;
  contactLastName?: string;
  contactPhone?: string;
  contactEmail?: string;
  demoAccountName?: string;
  demoAccountPassword?: string;
  demoAccountRequired?: boolean;
  notes?: string;
}

async function getReviewDetailId(
  token: string,
  versionId: string,
): Promise<string | null> {
  try {
    const res = (await ascFetch(
      token,
      `/appStoreVersions/${versionId}/appStoreReviewDetail`,
    )) as { data?: Resource };
    return res.data?.id ?? null;
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    // 404 = doesn't exist yet
    if (msg.includes("404") || msg.includes("Not Found")) return null;
    throw err;
  }
}

async function createReviewDetail(
  token: string,
  versionId: string,
  attrs: ReviewDetailAttrs,
  dryRun: boolean,
): Promise<string> {
  if (dryRun) {
    console.log(
      `  [dry-run] POST appStoreReviewDetail for version ${versionId} →`,
      Object.keys(attrs),
    );
    return "dry-run-id";
  }
  const res = (await ascFetch(token, `/appStoreReviewDetails`, {
    method: "POST",
    body: JSON.stringify({
      data: {
        type: "appStoreReviewDetails",
        attributes: attrs,
        relationships: {
          appStoreVersion: {
            data: { type: "appStoreVersions", id: versionId },
          },
        },
      },
    }),
  })) as { data: Resource };
  console.log(`  ✅ CREATE appStoreReviewDetail ${res.data.id}`);
  return res.data.id;
}

async function patchReviewDetail(
  token: string,
  reviewDetailId: string,
  attrs: ReviewDetailAttrs,
  dryRun: boolean,
): Promise<void> {
  if (dryRun) {
    console.log(
      `  [dry-run] PATCH appStoreReviewDetail ${reviewDetailId} →`,
      Object.keys(attrs),
    );
    return;
  }
  await ascFetch(token, `/appStoreReviewDetails/${reviewDetailId}`, {
    method: "PATCH",
    body: JSON.stringify({
      data: {
        id: reviewDetailId,
        type: "appStoreReviewDetails",
        attributes: attrs,
      },
    }),
  });
  console.log(
    `  ✅ PATCH appStoreReviewDetail ${reviewDetailId} → ${Object.keys(attrs).join(", ")}`,
  );
}

async function syncReviewDetail(
  token: string,
  versionId: string,
  dryRun: boolean,
): Promise<void> {
  // `||` (not `??`) — GitHub Actions empty-secret = "" değil undefined değil,
  // empty string'in default'a düşmesini sağla
  const demoEmail =
    process.env.DEMO_ACCOUNT_EMAIL || "apple_reviewer_2026_05@lafla.app";
  const demoPassword = process.env.DEMO_ACCOUNT_PASSWORD;
  const contactFirst = process.env.CONTACT_FIRST_NAME || "Berk";
  const contactLast = process.env.CONTACT_LAST_NAME || "Demirok";
  const contactEmail = process.env.CONTACT_EMAIL || "berkkdemirok@gmail.com";
  const contactPhone = process.env.CONTACT_PHONE;

  console.log(`\n[review-detail] Sync App Store Review Information`);

  // Apple zorunlu fields (CREATE için):
  // contactFirstName, contactLastName, contactPhone, contactEmail
  // Eğer phone yoksa CREATE fail eder — gracefully skip et, sen ASC web UI'da gir.
  const existingId = await getReviewDetailId(token, versionId);

  if (!existingId && !contactPhone) {
    console.log(
      "  ⏭️  CREATE skipped — CONTACT_PHONE env yok ve Apple CREATE için phone zorunlu.",
    );
    console.log(
      "      Çözüm: ASC web UI → Version 1.0 → App Review Information → manuel doldur.",
    );
    console.log(
      "      VEYA: GitHub secret CONTACT_PHONE ekle (örn '+90 555 123 4567'), workflow tekrar çalıştır.",
    );
    return;
  }

  // PATCH path — sadece set olan field'ları gönder
  const attrs: ReviewDetailAttrs = {};
  attrs.contactFirstName = contactFirst;
  attrs.contactLastName = contactLast;
  attrs.contactEmail = contactEmail;
  attrs.demoAccountName = demoEmail;
  attrs.demoAccountRequired = true;
  attrs.notes = REVIEW_NOTES;
  if (contactPhone) attrs.contactPhone = contactPhone;
  if (demoPassword) attrs.demoAccountPassword = demoPassword;

  if (!demoPassword) {
    console.log(
      "  ⚠️  DEMO_ACCOUNT_PASSWORD env yok — demoAccountPassword skipped",
    );
  }
  if (!contactPhone) {
    console.log(
      "  ⚠️  CONTACT_PHONE env yok — contactPhone skipped (Apple required field, sen ASC web UI'da elden gir)",
    );
  }

  if (existingId) {
    await patchReviewDetail(token, existingId, attrs, dryRun);
  } else {
    // Bu noktada contactPhone garantili (yukarıda check var)
    await createReviewDetail(token, versionId, attrs, dryRun);
  }
}

// ─────────────────────────────────────────────────────────────────
// Build attach — find latest TestFlight build, attach to version
// ─────────────────────────────────────────────────────────────────

interface BuildIncluded {
  type: string;
  id: string;
  attributes?: { version?: string };
}

async function findLatestBuildForVersion(
  token: string,
  appId: string,
  appVersion: string,
): Promise<string | null> {
  // Latest 20 builds sorted by upload date desc, include preReleaseVersion
  // (which has the CFBundleShortVersionString — e.g. "0.9.4")
  const res = (await ascFetch(
    token,
    `/builds?filter[app]=${appId}&sort=-uploadedDate&limit=20&include=preReleaseVersion`,
  )) as { data: Resource[]; included?: BuildIncluded[] };

  for (const build of res.data) {
    // Build's preReleaseVersion relationship → preReleaseVersion.attributes.version
    const preRel = build.relationships?.preReleaseVersion as
      | { data?: { id: string } }
      | undefined;
    const preReleaseId = preRel?.data?.id;
    if (!preReleaseId) continue;
    const preRes = res.included?.find(
      (r) => r.type === "preReleaseVersions" && r.id === preReleaseId,
    );
    const buildAppVersion = String(preRes?.attributes?.version ?? "");
    if (buildAppVersion === appVersion) {
      const buildNumber = String(build.attributes?.version ?? "");
      console.log(`  Found: build ${buildNumber} (app version ${buildAppVersion}) id=${build.id}`);
      return build.id;
    }
  }
  return null;
}

async function attachBuildToVersion(
  token: string,
  versionId: string,
  buildId: string,
  dryRun: boolean,
): Promise<void> {
  if (dryRun) {
    console.log(
      `  [dry-run] PATCH version ${versionId} relationships/build → ${buildId}`,
    );
    return;
  }
  await ascFetch(
    token,
    `/appStoreVersions/${versionId}/relationships/build`,
    {
      method: "PATCH",
      body: JSON.stringify({
        data: { type: "builds", id: buildId },
      }),
    },
  );
  console.log(`  ✅ Attached build ${buildId} to version ${versionId}`);
}

async function syncBuildAttach(
  token: string,
  appId: string,
  versionId: string,
  dryRun: boolean,
): Promise<void> {
  console.log(`\n[build-attach] Looking for build matching ${METADATA.appStoreVersion}…`);
  const buildId = await findLatestBuildForVersion(
    token,
    appId,
    METADATA.appStoreVersion,
  );
  if (!buildId) {
    console.log(
      `  ⚠️  No build found with version ${METADATA.appStoreVersion}. Skip — sen ASC web UI'dan Build ekle.`,
    );
    return;
  }
  await attachBuildToVersion(token, versionId, buildId, dryRun);
}

async function main(): Promise<void> {
  const apply = process.argv.includes("--apply");
  const dryRun = !apply;
  console.log(
    `[asc-sync] ${dryRun ? "DRY-RUN (no writes)" : "APPLY (will push)"} ${METADATA.appStoreVersion}`,
  );

  const cfg = loadConfig();
  const token = generateJwt(cfg);

  console.log(`[asc-sync] Looking up app ${METADATA.bundleId}…`);
  const appId = await findAppId(token, METADATA.bundleId);
  console.log(`  app id: ${appId}`);

  const versionId = await findPrepareVersion(token, appId);
  if (!versionId) {
    console.error(
      "\n❌ Editable version yok. App Store Connect'te düzenlenebilir bir sürüm yarat veya mevcut rejected sürümü aç, sonra tekrar çalıştır.",
    );
    process.exit(1);
  }
  console.log(`  version id: ${versionId}`);

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
          marketingUrl: APP_STORE_PUBLIC_URL,
          promotionalText: stripEmojis(METADATA.tr.promotionalText),
          supportUrl: APP_STORE_PUBLIC_URL,
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
          marketingUrl: APP_STORE_PUBLIC_URL,
          promotionalText: stripEmojis(METADATA.en.promotionalText),
          supportUrl: APP_STORE_PUBLIC_URL,
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

  // ─── App Store Review Detail (demo account + contact + notes) ───
  await syncReviewDetail(token, versionId, dryRun);

  // ─── Build attach (latest TestFlight build matching app.json version) ───
  await syncBuildAttach(token, appId, versionId, dryRun);

  console.log(
    `\n[asc-sync] ${dryRun ? "Dry-run complete. Add --apply to push." : "Done."}`,
  );
  console.log(
    "\n⚠️  MANUEL ADIMLAR (script'ten YAPILMIYOR):",
  );
  console.log("  • IAP product create + pricing — ASC web UI (financial)");
  console.log("  • Privacy Nutrition Label — Apple API'den settable değil");
  console.log("  • Age Rating questionnaire — aynı");
  console.log("  • DSA Trader labels — sensitive PII, sen elden gir");
  console.log("  • Screenshot upload — bu script'in v2 hedefi");
  console.log("  • Submit for Review — irreversible, sen tıklarsın");
}

main().catch((err) => {
  console.error("\n❌ asc-sync failed:", err.message ?? err);
  process.exit(1);
});
