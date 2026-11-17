# Content Expansion Plan (2026-05-24)

**Karar:** A+C — Dikey genişleme (sahne 3 dk → 10 dk) + Yapısal genişleme (yeni egzersiz türleri).
**Üretim:** Claude in-session (API yok), paralel agent'larla.
**Hedef:** Roleplay'in tek başına zor + sıkıcı olduğu hissini ortadan kaldır. Kullanıcı sahneye girdiğinde önce **doyurucu öğrenme**, sonra **kademeli roleplay**.

## Mevcut state (v0.9.6 launched, v0.9.7 cancelled)

```
SETUP (6 vocab × 10sn = 60sn)
  ↓
DRILL (4-6 egzersiz: translate / fill_blank / word_order / spot_mistake)
  ↓
SCENE (roleplay — free mode, 4-8 turn)
  ↓
VERDICT
```

Sorun: SETUP yüzeysel (sadece tanıt-geç), DRILL kelime test eder ama cümle yapısını öğretmez, SCENE direkt "free-form" — kullanıcı yetersiz hazırlık.

## Hedef state

```
SETUP-1: Vocab teaching (~12 kart × 10sn)
SETUP-2: Sentence Pattern (~4 pattern × 30sn) — YENİ
SETUP-3: Mini Dialogue Example (~2 örnek × 30sn) — YENİ
DRILL: translate + fill_blank + word_order + spot_mistake + NEW (sentence_builder + dialogue_gap)
PRE-SCENE: Listen-Pause-Respond (3 turn rehearsal) — YENİ
SCENE-1: Roleplay multi-choice (4-6 turn, "select the best reply")
SCENE-2: Roleplay hinted (Türkçe ipucu var)
SCENE-3: Roleplay free (kendin yaz/söyle) — ESKİ HALIYLA
VERDICT + RECALL (5 hızlı flashcard, 1 dk) — YENİ
```

Toplam: ~10-12 dakika/sahne, kademeli zorluk.

## Yeni exercise types (Phase 1)

5 yeni egzersiz tipi:

1. **`sentence_pattern`** — Şablonu doldur ("I'd like to ___ because ___"). Çoklu boşluk, kullanıcı seçer/yazar.
   ```ts
   { type: "sentence_pattern", template: string, slots: [{ accepted: string[] }], tr_hint, example_filled }
   ```

2. **`dialogue_gap`** — Yarım diyalog, eksik replikayı tamamla.
   ```ts
   { type: "dialogue_gap", turns: [{ speaker, text? }], missing_at: number, accepted_patterns: string[], tr_hint }
   ```

3. **`listen_respond`** — NPC der + 3 saniye düşün + sen söyle. Voice-first, pre-scene rehearsal.
   ```ts
   { type: "listen_respond", npc_line: string, accepted_patterns: string[], think_seconds: 3, tr_hint }
   ```

4. **`recall_quiz`** — Sahnenin sonunda 5 hızlı soru. Verdict öncesi.
   ```ts
   { type: "recall_quiz", items: [{ q: string, options: string[], correct: number, tr_explanation }] }
   ```

5. **`thinking_trap`** — Türk düşünce kalıbı vs İngilizce karşılığı yan yana.
   ```ts
   { type: "thinking_trap", tr_thought: string, wrong_en: string, right_en: string, why_tr: string }
   ```

## Phase 1: Schema + components + integration (paralel agent'lar)

| Agent | Görev | Dosyalar | Bağımsız mı |
|---|---|---|---|
| **A** | 4 yeni exercise component yaz | `components/exercises/SentencePattern.tsx`, `DialogueGap.tsx`, `ListenRespond.tsx`, `ThinkingTrap.tsx`, `RecallQuiz.tsx` | Evet (yeni dosya) |
| **B** | `lib/scenario.ts` redesign | `lib/scenario.ts` — setup zenginleştir, sentence_pattern/dialogue → setup, recall_quiz → post-scene | Evet (mevcut file edit) |
| **C** | `scenario/[id].tsx` DrillRenderer + verdict recall + setup phase updates | `app/scenario/[id].tsx` | B'ye sıralı bağımlı |

## Phase 2: Sample lesson migration + smoke test

Bir lesson dosyasında (örn. `flirt-opener-lesson.ts` lesson 1.1) yeni egzersiz tiplerini ekleyerek migration template'i oluştur. Test:
- App'te aç, akış doğru mu
- Yeni egzersizler render oluyor mu
- Score hesaplama doğru mu
- Verdict recall quiz çalışıyor mu

## Phase 3: Bulk migration (paralel agent'lar by mode)

| Agent | Mode | Lesson sayısı | Görev |
|---|---|---|---|
| **D** | flirt | 10 lesson | Her lesson'a 2 sentence_pattern + 1 dialogue_gap + 1 listen_respond + 1 thinking_trap + recall_quiz ekle |
| **E** | work | 14 lesson | aynı |
| **F** | bar | 4 lesson | aynı |
| **G** | airport | 5 lesson | aynı |
| **H** | daily | 20+ lesson | aynı |
| **I** | order | 8 lesson | aynı |
| **J** | ielts | 2 lesson | aynı |

Toplam ~65 lesson file × ~5 yeni exercise = ~325 yeni egzersiz veri.

## Phase 4: Final scan + commit + smoke

| Agent | Görev |
|---|---|
| **Z** | Comprehensive bug scan: typecheck, all new exercise types render, schema valid, no crashes |

## Session continuity protokolü

Eğer Claude session context'i dolarsa:
1. Yeni session aç
2. Şu komutu yapıştır: "Lafla projesinde content expansion'a kaldığım yerden devam et. Plan: `C:\Users\berk\eng\lafla\docs\CONTENT_EXPANSION_PLAN.md`. Memory'i oku, son commit'i incele, sıradaki Phase'i bul, devam et."
3. Memory `lafla_project.md`'de current phase yazılı olur.

## İlerleme tracking

Her agent commit attığında bu dosyayı güncelle:
- Phase 1 ✅ — when agents A+B+C done
- Phase 2 ✅ — when sample lesson tested
- Phase 3 ✅ — when bulk migration done (7 agents bittikten sonra)
- Phase 4 ✅ — when final scan + smoke pass

## Sonraki adımlar (bu plan bittikten sonra)

- v0.9.8 tag → TestFlight build
- ASC metadata refresh (yeni "10 dakikalık deep practice" copy)
- Yıllık fiyat ₺999/yıl korunur; indirim yerine 7 günlük intro offer A/B testi konuşulur.
- Soft launch

---

## HANDOFF — 2026-05-25 (yeni session bu noktadan devam)

**Origin master:** `59abe58` (push'lu, TAG YOK = TestFlight YOK)

**Tamamlanan ek fazlar (Phase 5 + Phase 6):**

### Phase 5 (kullanılmadı tag, ama tüm değişiklikler master'da):
- Vocab pool 12 → 25/lesson with cefr_band tagging
- Placement test 6Q → 12Q branching (lib/cefr-placement-bank.ts, app/placement.tsx)
- Adaptive setup filter (lib/cefr-level.ts bandFor + filterSetupByLevel)
- Rewarded ad 24h → 20 dk (lib/rewarded.ts, lib/ads.ts, app/today.tsx)
- Auth Supabase storage SecureStore → AsyncStorage (lib/supabase.ts)
- Auth post-login routing fix (app/auth.tsx decidePostAuthRoute)
- Swipe sensitivity tightening (components/SwipeSceneCard.tsx)

### Phase 6 (gap fix, master'da):
- 316 lesson coverage gap (~1,650 yeni egzersiz)
- Final: 966/966 lesson, 0 gap. Her lesson tam 5 set (sentence_pattern,
  dialogue_gap, listen_respond, thinking_trap, recall_quiz).
- 4 paralel agent: flirt (9 file), daily (15 file), CEFR+personal (4 file),
  custom (1 file).

## NEXT SESSION'DA İLK ADIM

1. Memory'i oku (lafla_project.md güncel).
2. `git log --oneline -15` ile son durumu gör.
3. `pnpm --filter @lafla/mobile run typecheck` ile temiz olduğunu doğrula.
4. **Deep bug scan agent başlat** — Reality Checker. Prompt scope:
   - Phase 5+6 schema conformance
   - sentence_pattern template ↔ slots match (M-1 risk repeated?)
   - filterSetupByLevel edge cases
   - Placement test integrity
   - Auth flow (decidePostAuthRoute + AsyncStorage migration)
   - Rewarded ad 20min backward compat
   - Swipe sensitivity user-friendly
   - 7-phase routing for old + new lessons
   - Build readiness (typecheck + expo-doctor + native modules)
5. Critical bug yoksa → `git tag lafla-v0.9.11 && git push --tags` →
   TestFlight CI tetiklenir (~30-45 dk).
6. CRITICAL bug varsa → fix → typecheck → tag.

## KULLANICI RAPORLU PROBLEMLER (master'da çözüldü, build bekliyor)

1. "kullanıcı girişi yapılmıyor" → SecureStore 2KB cap + post-login routing.
   Her ikisi master'da düzeltildi.
2. "akıştan flörte giriyorum, 1 cümle çıkıyo, direkt roleplay" → coverage gap
   (Phase 6 fix) + swipe sensitivity.
3. "rewarded 24h yerine 20 dk" → düzeltildi.

## PARKING LOT (yeni session'da yapılabilir)

- Light theme switch — Sıcak Pembe palette (#FF1493 / #fafaf7 / #00B8B8)
  user'ın Stitch mockup'ından onaylandı. theme/index.ts'e light variant +
  useColorScheme switch.
- ASC metadata refresh (yeni "10 dakikalık deep practice" copy).
- Yıllık fiyat ₺999/yıl korunur; indirim yerine 7 günlük intro offer A/B testi konuşulur.
- ASC: 7-day free trial intro offer (paywall pill otomatik canlanır).

## KULLANICI PRENSİPLERİ (UYULSUN)

- "ben demeden testflighta yollama" — TAG basmadan önce kullanıcıdan onay al.
- Local commit + master push OK. Tag = TestFlight tetikler → kullanıcı izni şart.
- pnpm kullan (NEVER npm).
- Windows + bash, yardımcı bash komutları için.
- TR locale primary (Türkiye-first); EN locale yok ASC'de henüz.
