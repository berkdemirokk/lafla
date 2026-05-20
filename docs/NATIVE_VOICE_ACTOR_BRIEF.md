# Native Voice Actor Brief — Lafla v1.1

> **Status:** Draft (Adım 9, 2026-05-20). Aktif arayış değil — TestFlight launch sonrası beta feedback'ten gelen retention/CRR sayıları "native audio'ya yatırım yapma" kararını sürmüş olacak.

---

## 1. Aktör profili

- **Yaş:** 25-35
- **Aksent:** Casual American İngilizce (West Coast veya neutral; British değil)
- **Bilingüel tercih:** Türk-American (Türk hata desenlerini ses olarak da hissedebilen) — gerekli değil ama avantaj
- **Cinsiyet:** İdeal olarak 1 erkek + 1 kadın iki actor — sahnelere göre NPC seçimi
- **Studio:** Quiet room, condenser mic (Shure SM7B veya Rode NT1), 48kHz/24-bit, no reverb
- **Süre:** ~2-3 saatlik session, sahne başı ~10-15 NPC line + 2-3 setup phrase

## 2. Ses karakteristiği

Hedef: **modern, samimi, Tinder-Slack jenerasyonu** — formal/announcer tonundan KAÇIN.

- Tinder match: çekingen-ama-flörtöz, küçük gülmeler, "okay so..." gibi natural fillers
- Slack mesajı: rahat profesyonel, "hey just wanted to check in on..."
- Bar yaklaşma: yüksek-enerji, doğal smile-tone
- Havaalanı görevlisi: efficient, hafif sabırsız (hayat gibi)
- Kafe barista: friendly-rushed
- İş görüşmesi interviewer: dengeli formal-ama-warm

## 3. v1.1 hedef sahneleri (10 sahne, ~150 line)

> Manifest: `apps/mobile/data/native-audio-manifest.ts`'in target list yorumu

1. **intro.tinder.0.1** — Tinder ilk mesaj (90 saniyelik onboarding sahnesi)
2. **flirt.opener.1.1** — Tinder match opener (4 sub-lesson, ~16 line)
3. **flirt.opener.1.4** — Flirty opener
4. **flirt.date.13.1** — İlk randevu buluşması
5. **work.slack.16.1** — Slack mesajı atma
6. **work.meeting.17.1** — Toplantıda söz alma
7. **work.interview.21.1** — Mülakat: "tell me about yourself"
8. **bar.7.1** — Bar drink ordering
9. **bar.approach.24.1** — Bar yanaşma
10. **airport.44.1** — Check-in + bagaj

**Toplam tahmini line:** ~150 NPC line + 30 setup phrase = ~180 audio file.

## 4. Teknik teslim

- **Format:** WAV 48kHz/24-bit master + MP3 192kbps deploy version
- **Naming:** `${lesson.id}_${turnIdx}.mp3` (örn. `flirt.opener.1.1_0.mp3` = ilk NPC line)
- **Bundling:** `apps/mobile/assets/audio/native/${lesson.id}/${turnIdx}.mp3`
- **Manifest update:** Recording sonrası `native-audio-manifest.ts`'e entry eklenir

## 5. Fiyat / Yapı

- **Industry standard:** Türk pazarı ~₺3000-5000/saat actor + ₺1500-3000/saat studio
- **Toplam tahmini:** ₺25K-40K (2 actor × 4 saat session + studio + edit)
- **Karar tetikleyici:** Retention metric: post-launch D7 retention <%40 ise yatırım yap; ≥40% ise organic acquisition cost'a yatır

## 6. Rakibe karşı pozisyon

Speak, Lerna AI, Talkpal — hepsi TTS (ElevenLabs / OpenAI / Azure). **Hiçbiri native human voice yapmıyor** çünkü:
- Speak/Talkpal global: 30+ dile destek = TTS zorunlu
- Lerna AI cost: Türkiye için bile actor kontratı düşmez

Lafla Türk-niche + premium-positioning = native voice **moat**. Apple Editorial bunu featured eder, kullanıcı "real voice" hissini fark eder.

## 7. v1.1 sonrası

Native audio scope'unu genişletmek için:
- Tier 2 (50 sahne): flört'ün tamamı + iş'in en sık 20 sahnesi
- Tier 3 (100 sahne): tüm "Bugün için" daily exclusive havuzu

Her tier ~₺25K. ROI: native audio kullanıcı segment'inde D30 retention farkı 1.5-2x olursa yatırım kendini öder.
