// Work - Feedback Giving lessons
// Skill: work.feedback_giving (4 lessons)
// Constructive feedback to peers / reports: SBI, negative delivery, positive praise, action + follow-up.

import type { BundledLesson } from "./cafe-lesson";

// ============================================================
// Lesson 37.1 — SBI Yontemi
// ============================================================
export const workFeedbackGivingLesson_37_1: BundledLesson = {
  id: "work.feedback_giving.37.1",
  skill_id: "work.feedback_giving",
  index: 1,
  title: "SBI Yontemi",
  description:
    "Geri bildirim icin altin standart cerceve: Situation (durum) + Behavior (davranis) + Impact (etki). Yargi yok, gozlem var.",
  estimated_minutes: 6,
  exercises: [
    {
      id: "ex.wfg37.1.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "Situation, Behavior, Impact",
      tr_translation: "Durum, Davranis, Etki (SBI cercevesi)",
      example:
        "In yesterday's review (S), when you interrupted Berk (B), it made him hesitant to speak up (I).",
      example_tr:
        "Dunku review'da (durum), Berk'in sozunu kestiginde (davranis), konusmaktan cekindi (etki).",
    },
    {
      id: "ex.wfg37.1.2",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source:
        "Dunku standup'ta, Maya'nin sunusunu yarida kestin — geri kalan ekip onun adina huzursuz oldu.",
      target:
        "In yesterday's standup, when you cut off Maya's update, the rest of the team got uncomfortable on her behalf.",
      accepted_variants: [
        "In yesterday's standup, you interrupted Maya mid-update — the room felt uncomfortable.",
        "Quick feedback on yesterday's standup: when you cut Maya off, the team noticed and got a bit awkward.",
        "Yesterday's standup — when you talked over Maya, it made the team visibly uncomfortable.",
        "In standup yesterday, cutting Maya off during her update made the team uneasy.",
      ],
      tr_hint:
        "SBI: 'In [situation], when you [behavior], it [impact]'. Yargi yok — gozlem ve sonuc.",
    },
    {
      id: "ex.wfg37.1.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "In yesterday's review, ___ you interrupted Berk, it made him hesitant.",
      answer: "when",
      distractors: ["that", "if", "since"],
      tr_hint:
        "SBI'nin orta kismi: 'when you [behavior]'. 'When' = spesifik moment'i isaret eder.",
    },
    {
      id: "ex.wfg37.1.4",
      type: "word_order",
      difficulty: 4,
      scrambled_tokens: [
        "When",
        "you",
        "interrupted",
        "Berk",
        "it",
        "shut",
        "him",
        "down",
      ],
      correct_sentence: "When you interrupted Berk it shut him down",
      tr_translation: "Berk'in sozunu kestiginde, onu susturdu.",
    },
    {
      id: "ex.wfg37.1.5",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "You're rude in meetings.",
      correct_sentence:
        "In yesterday's review, when you cut Berk off mid-sentence, it made him hesitant to share again.",
      tr_explanation:
        "'You're rude' = etiket = karakter saldirisi = defansif yanit. SBI: spesifik durum + spesifik davranis + spesifik etki = degistirilebilir geri bildirim.",
    },
    {
      id: "ex.wfg37.1.6",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "1:1'inde report'una dunku toplantida ekibi kestigi icin SBI cercevesiyle geri bildirim veriyorsun.",
      npc_role: "Report",
      setting: "Weekly 1:1",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(quick (feedback|note|thing)|wanted to share|something on my mind)",
            "(in (yesterday's|the) (review|standup|meeting|sync))",
            "(when you (interrupted|cut off|talked over))",
            "(it (made|shut|caused)|the (impact|effect|result))",
            "(hesitant|uncomfortable|shut down|didn't speak)",
          ],
          hint_tr:
            "SBI acilis: 'Quick feedback — in yesterday's review, when you cut Berk off, he got hesitant to speak up.'",
        },
        {
          speaker: "npc",
          message:
            "Oh — I didn't realize. I just wanted to keep things moving.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(totally get|i hear you|makes sense)",
            "(intent (was good|wasn't bad)|not (questioning|doubting) the why)",
            "(just (wanted|flagging)|sharing the impact)",
            "(next time|going forward|in future)",
            "(let people (finish|wrap up)|hear them out|wait for the gap)",
          ],
          hint_tr:
            "Niyeti tanı, etkiyi vurgula: 'Totally get the intent — just wanted to flag the impact. Next time, let folks wrap up first?'",
        },
        {
          speaker: "npc",
          message:
            "Yeah, fair. I'll watch for that. Anything else?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(that's (it|the main one)|just that)",
            "(appreciate (you|the openness)|thanks for hearing)",
            "(rest is (going well|solid)|good (otherwise|overall))",
            "(let's (revisit|check back)|in a couple weeks)",
          ],
          hint_tr:
            "Kapan: 'That's the main one — appreciate you hearing it. Let's revisit in 2 weeks.'",
        },
        {
          speaker: "npc",
          message:
            "Sounds good. Thanks for being direct.",
        },
      ],
    },
    {
      id: "ex.wfg37.1.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "SBI cercevesi ne icin?",
          options: [
            "Manager'a yaranma",
            "Geri bildirim: Situation + Behavior + Impact = yargi yerine gozlem + sonuc",
            "Self-review yazmak",
            "Toplanti notu almak",
          ],
          correct_index: 1,
          tr_explanation:
            "S = spesifik moment. B = gozlemlenebilir davranis. I = somut etki. Etiket / karakter yargisi yok = degistirilebilir.",
        },
        {
          question: "'You're rude in meetings' niye kotu geri bildirim?",
          options: [
            "Cok kibar",
            "Karakter etiketi = defansif yanit + degistirilemez (kim oldugunu degistirme istegi)",
            "Cok uzun",
            "Yararsiz cunku TR",
          ],
          correct_index: 1,
          tr_explanation:
            "Karakter saldirisi = kişilik sorgulamasi = ego tehlikede = savunma modu. SBI = davranis sorgulamasi = degistirilebilir.",
        },
        {
          question: "SBI'nin EN onemli avantaji?",
          options: [
            "Kisa",
            "Spesifik + gozlemlenebilir = report 'evet, ben de gordum' diyebilir = ortak gercege oturur",
            "Yararsiz",
            "Manager'i mutlu eder",
          ],
          correct_index: 1,
          tr_explanation:
            "Belirsiz feedback ('be more collaborative') = ne yapacagini bilmez. SBI = spesifik moment + spesifik davranis = net aksiyon.",
        },
      ],
    },
    {
      id: "ex.wfg37.1.8",
      type: "pronounce_phrase",
      difficulty: 4,
      phrase: "In yesterday's standup, when you cut Berk off, it shut him down.",
      tr_translation: "Dünkü standup'ta Berk'in sözünü kestiğinde, onu susturdu.",
      ipa: "/ɪn ˈjɛstədeɪz ˈstændʌp wɛn ju kʌt bɛrk ɒf ɪt ʃʌt hɪm daʊn/",
    },
    {
      id: "ex.wfg37.1.9",
      type: "speech_shadowing",
      difficulty: 4,
      native_text: "Quick feedback — I want to share something that's been on my mind.",
      voice_hint: "female_us",
    },
    {
      id: "ex.wfg37.1.10",
      type: "listen_and_transcribe",
      difficulty: 4,
      audio_text: "When you interrupted Maya, the team got uncomfortable on her behalf.",
      target: "When you interrupted Maya, the team got uncomfortable on her behalf.",
    },
    {
      id: "ex.wfg37.1.11",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "circle back",
      tr_translation: "Geri dönmek (iş kalıbı)",
      example: "Let's circle back on this in our next 1:1.",
      example_tr: "Bir sonraki 1:1'imizde buna geri dönelim.",
    },
    {
      id: "ex.wfg37.1.12",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "You are interrupting in meetings since long time, I want make feedback.",
      correct_sentence: "You've been interrupting in meetings for a while — I want to give you feedback.",
      tr_explanation:
        "'You are interrupting' = anlık; süregelen kalıp için 'you've been interrupting'. 'Since long time' yanlış — süre için 'for a while'. 'I want make feedback' yanlış — 'I want to give feedback' (mastar + 'give' work register).",
    },
  ],
};

// ============================================================
// Lesson 37.2 — Olumsuz Geri Bildirim
// ============================================================
export const workFeedbackGivingLesson_37_2: BundledLesson = {
  id: "work.feedback_giving.37.2",
  skill_id: "work.feedback_giving",
  index: 2,
  title: "Olumsuz Geri Bildirim",
  description:
    "Zor geri bildirimi vermek: yumusatma degil, dogrudan ama insanca. 'Can I be candid?' + radical candor.",
  estimated_minutes: 6,
  exercises: [
    {
      id: "ex.wfg37.2.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "Can I be candid?",
      tr_translation: "Acik konusabilir miyim? (zor geri bildirim acilisi)",
      example: "Can I be candid? The deck didn't land the way we hoped.",
      example_tr: "Acik konusabilir miyim? Sunum umdugumuz gibi ic acmadi.",
    },
    {
      id: "ex.wfg37.2.2",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source:
        "Aklimda olan bir seyi paylasmak istiyorum — son birkac PR'da kalite dustu.",
      target:
        "I want to share something that's been on my mind — the quality on your last few PRs has slipped.",
      accepted_variants: [
        "Something I've been wanting to flag — the last few PRs felt rushed.",
        "Can I be candid? The quality on your recent PRs has dropped a bit.",
        "Wanted to share something — I'm seeing a quality dip on the last couple PRs.",
        "Been meaning to bring this up: PR quality has slipped over the past few.",
      ],
      tr_hint:
        "Acilis = nazikce uyari = report hazirlik yapar. 'Want to share' / 'on my mind' = yumusak ama dogrudan.",
    },
    {
      id: "ex.wfg37.2.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "Can I be ___ with you for a sec?",
      answer: "candid",
      distractors: ["honest", "real", "open"],
      tr_hint:
        "'Candid' = acik / dosdogru. Profesyonel dilde tercih edilen kelime. 'Honest' de gecer ama 'candid' daha kurumsal.",
    },
    {
      id: "ex.wfg37.2.4",
      type: "word_order",
      difficulty: 4,
      scrambled_tokens: [
        "I",
        "want",
        "to",
        "share",
        "something",
        "that's",
        "been",
        "on",
        "my",
        "mind",
      ],
      correct_sentence: "I want to share something that's been on my mind",
      tr_translation: "Aklimda olan bir seyi paylasmak istiyorum.",
    },
    {
      id: "ex.wfg37.2.5",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "I'm not sure how to say this, but maybe sometimes you should kind of try harder.",
      correct_sentence:
        "Can I be candid? I'm seeing a quality dip in the last few PRs — bugs are slipping past review.",
      tr_explanation:
        "'Kind of', 'maybe', 'sometimes' = belirsizlik = report mesaji ciddiye almaz. Radical candor = dosdogru + spesifik + insanca. Yumusatma degil, netlik.",
    },
    {
      id: "ex.wfg37.2.6",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Report'unun son sprintteki performansi dustu. 1:1'de dosdogru ama insanca geri bildirim veriyorsun.",
      npc_role: "Report",
      setting: "Weekly 1:1",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(can i be (candid|direct|straight)|want to (share|flag) something)",
            "(on my mind|been (thinking|meaning to bring up))",
            "(last (few|couple|two) (sprints?|prs?|weeks))",
            "(quality (dip|drop|slip)|seeing (a drop|slipping))",
            "(bugs (slipping|getting through)|missed (the|review))",
          ],
          hint_tr:
            "Acik acilis: 'Can I be candid? I'm seeing a quality dip in the last few PRs.'",
        },
        {
          speaker: "npc",
          message:
            "Oh. Yeah, I've been swamped. Didn't realize it was that noticeable.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(appreciate (the|you) (sharing|being honest|context))",
            "(hear you|get it|makes sense)",
            "(load (matters|is real)|workload (is a factor|matters))",
            "(but|still|that said|even so)",
            "(quality bar|standard|expectations)",
            "(can't (slip|drop)|need to (hold|maintain))",
          ],
          hint_tr:
            "Tanıma + standardı tut: 'Appreciate the context — load matters. That said, the quality bar still needs to hold.'",
        },
        {
          speaker: "npc",
          message:
            "Fair. What would help me here?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(let's (figure|sort|work) (it out|something out|through this))",
            "(can we (drop|defer|reprioritize))",
            "(scope (down|smaller)|fewer prs?|focus on one)",
            "(pair (review|on|with)|second set of eyes)",
            "(let's (revisit|check back|sync) (in|next))",
          ],
          hint_tr:
            "Aksiyon: 'Let's figure it out — can we scope down this sprint? Pair review on the trickier ones?'",
        },
        {
          speaker: "npc",
          message:
            "Yeah, that would help. Thanks for telling me straight.",
        },
      ],
    },
    {
      id: "ex.wfg37.2.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "'Can I be candid?' acilisinin amaci?",
          options: [
            "Vakit kazanmak",
            "Report'u hazirlamak = mesaj zor gelecek sinyali = defansif yerine acik dinleme modu",
            "Dolaylama",
            "Yararsiz",
          ],
          correct_index: 1,
          tr_explanation:
            "Insan beyni ani zor mesaja kapanir. Mini-uyari = zihinsel hazirlik = mesaj icin yer acilir.",
        },
        {
          question: "Radical candor = nedir?",
          options: [
            "Hakaret",
            "Personally care + Challenge directly = insanca ama dosdogru. Yumusatma + saldiri'nin ortasi.",
            "Sus",
            "Manager'a sikayet",
          ],
          correct_index: 1,
          tr_explanation:
            "Kim Scott cercevesi: ilgi + netlik. Yumusatma = manipulative empathy. Saldiri = obnoxious aggression. Ortasi = radical candor.",
        },
        {
          question: "'Maybe sometimes you should kind of try harder' niye kotu?",
          options: [
            "Cok uzun",
            "Yumusatma kelimeleri (maybe, sometimes, kind of) = mesajin agirligini sifirlar = report aksiyon almaz",
            "Cok dogrudan",
            "Yararsiz cunku TR",
          ],
          correct_index: 1,
          tr_explanation:
            "Hedge kelimeleri (yumusatici) hosgoru hissi verir ama gercekte: 'sorun yokmus gibi davraniyor' algisi. Net = saygi.",
        },
      ],
    },
    {
      id: "ex.wfg37.2.8",
      type: "pronounce_phrase",
      difficulty: 4,
      phrase: "Can I be candid? The deck didn't land the way we hoped.",
      tr_translation: "Açık konuşabilir miyim? Sunum umduğumuz gibi iz bırakmadı.",
      ipa: "/kən aɪ bi ˈkændɪd ðə dɛk ˈdɪdnt lænd ðə weɪ wi həʊpt/",
    },
    {
      id: "ex.wfg37.2.9",
      type: "speech_shadowing",
      difficulty: 4,
      native_text: "The quality bar still needs to hold — let's figure out what would help here.",
      voice_hint: "male_us",
    },
    {
      id: "ex.wfg37.2.10",
      type: "listen_and_transcribe",
      difficulty: 4,
      audio_text: "I'm seeing a quality dip on the last few PRs — bugs are slipping past review.",
      target: "I'm seeing a quality dip on the last few PRs — bugs are slipping past review.",
    },
    {
      id: "ex.wfg37.2.11",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "take ownership",
      tr_translation: "Sahiplenmek (iş kalıbı)",
      example: "I'd love to see you take ownership of the testing piece.",
      example_tr: "Test kısmını sahiplenmeni görmek isterim.",
    },
    {
      id: "ex.wfg37.2.12",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "Your quality is bad since 2 sprints, I want make serious talk.",
      correct_sentence: "Your quality has slipped over the last 2 sprints — I want to have a serious talk.",
      tr_explanation:
        "'Your quality is bad' = etiket + yargı (SBI'ye aykırı); 'has slipped' = davranış. 'Since 2 sprints' yanlış — süre için 'over the last 2 sprints'. 'I want make' yanlış — 'I want to have' (mastar). 'Make talk' Türkçe; 'have a talk' doğru.",
    },
  ],
};

// ============================================================
// Lesson 37.3 — Olumlu Geri Bildirim
// ============================================================
export const workFeedbackGivingLesson_37_3: BundledLesson = {
  id: "work.feedback_giving.37.3",
  skill_id: "work.feedback_giving",
  index: 3,
  title: "Olumlu Geri Bildirim",
  description:
    "Vov gecmis ovgu degil — spesifik + zamaninda + dogru kanalda. 'Shoutout for X', public vs private kudos.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.wfg37.3.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "shoutout",
      tr_translation: "Acik takdir / aleni ovgu",
      example: "Quick shoutout to Maya for catching the regression before prod.",
      example_tr: "Maya'ya bug'i prod'a gitmeden yakaladigi icin acik takdir.",
    },
    {
      id: "ex.wfg37.3.2",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source:
        "Dun gecenin ozelligini lansman icin yetistirdigin icin tesekkur — RFC'yi yazarken gosterdigin titizlik ekibe ornek oldu.",
      target:
        "Thanks for getting last night's feature out for the launch — the rigor you showed writing the RFC set the bar for the team.",
      accepted_variants: [
        "Huge thanks for shipping the feature in time for launch — your RFC rigor really raised the bar.",
        "Want to call out the work last night — getting it out for launch + that RFC quality set a standard.",
        "Appreciate you pushing the feature through last night — the RFC was a model for the team.",
        "Shoutout for last night's ship — and the RFC was genuinely a high-water mark.",
      ],
      tr_hint:
        "Spesifik ovgu = NE yaptigi + NICIN onemli + ETKISI ne. 'Good job' = sifir sinyali. Bu = real signal.",
    },
    {
      id: "ex.wfg37.3.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "Quick ___ to Maya for catching that regression.",
      answer: "shoutout",
      distractors: ["yelling", "scream", "shouting"],
      tr_hint:
        "'Shoutout' (tek kelime) = acik takdir = Slack / standup'ta yaygin kalip.",
    },
    {
      id: "ex.wfg37.3.4",
      type: "word_order",
      difficulty: 3,
      scrambled_tokens: [
        "Want",
        "to",
        "call",
        "out",
        "the",
        "work",
        "on",
        "the",
        "auth",
        "migration",
      ],
      correct_sentence: "Want to call out the work on the auth migration",
      tr_translation: "Auth migration'daki calismayi ovmek istiyorum.",
    },
    {
      id: "ex.wfg37.3.5",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "Good job everyone, you guys are amazing.",
      correct_sentence:
        "Shoutout to Maya for catching the regression in the payment flow before it hit prod — saved us a Sunday firefight.",
      tr_explanation:
        "'Good job everyone' = jenerik = kimse ozumeger. Spesifik isim + spesifik aksiyon + spesifik etki = gercek takdir + diger ekip ogrenir.",
    },
    {
      id: "ex.wfg37.3.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Team channel'da bir peer'in cumartesi gecesi prod outage'i cozdugune ovgu yaziyorsun.",
      npc_role: "Peer (in Slack)",
      setting: "Team Slack channel",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(quick (shoutout|kudos|props)|want to (call out|recognize))",
            "(to |@?)(maya|alex|the team)",
            "(for (catching|fixing|debugging|jumping on))",
            "(saturday|weekend|late) (night|fire|incident)",
            "(payment|auth|api) (outage|incident|fire|prod)",
            "(saved us|prevented|kept (the|us) (alive|out of))",
          ],
          hint_tr:
            "Spesifik shoutout: 'Quick shoutout to Maya for jumping on the Saturday payment outage — saved us a Sunday firefight.'",
        },
        {
          speaker: "npc",
          message:
            "Aw thanks — just doing the job!",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(seriously|for real|truly|really)",
            "(above and beyond|extra mile|not in the job (desc|description)|wasn't yours)",
            "(noticed|seen|appreciated)",
            "(the (calm|cool|professionalism)|how you (handled|ran))",
            "(team (saw|noticed) too|everyone (saw|appreciated))",
          ],
          hint_tr:
            "Sunma'yi reddet: 'Seriously, that was above and beyond — the way you ran the incident was a standard for the team.'",
        },
        {
          speaker: "npc",
          message:
            "Means a lot to hear that — thanks.",
        },
      ],
    },
    {
      id: "ex.wfg37.3.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Olumlu geri bildirimde EN onemli sey?",
          options: [
            "Kisa olmasi",
            "Spesifik (kim + ne + neden onemli + etki) — jenerik ovgu sifir sinyali",
            "Manager'a kopyalamak",
            "Emoji",
          ],
          correct_index: 1,
          tr_explanation:
            "'Good job' = anlamsiz. 'Shoutout to X for catching Y before prod = saved us Z' = gercek takdir + diger ekip ogrenir.",
        },
        {
          question: "Public (Slack) vs Private (1:1) kudos — fark?",
          options: [
            "Fark yok",
            "Public = takım goren / motivasyon. Private = derin / kisisel olanlar. Ikisi de gerekli.",
            "Sadece public",
            "Sadece private",
          ],
          correct_index: 1,
          tr_explanation:
            "Public = davranis modellemesi (digerleri gorur, ogrenir). Private = kişisel guc noktasi, derin etki. Strateji: ikisi de.",
        },
        {
          question: "'Good job everyone' niye etkisiz?",
          options: [
            "Cok kisa",
            "Jenerik = kimse 'beni mi kastediyor' diye onumser = takdir bos kalir",
            "Cok uzun",
            "Yararsiz",
          ],
          correct_index: 1,
          tr_explanation:
            "Toplu ovgu = kimse uzerine almıyor. Isim + aksiyon + etki = takdirin agirligi olusur.",
        },
      ],
    },
    {
      id: "ex.wfg37.3.8",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase: "Quick shoutout to Maya for catching the regression before prod.",
      tr_translation: "Maya'ya bug'ı prod'a gitmeden yakaladığı için hızlı bir takdir.",
      ipa: "/kwɪk ˈʃaʊtaʊt tuː ˈmaɪə fə ˈkætʃɪŋ ðə rɪˈɡrɛʃən bɪˈfɔː prɒd/",
    },
    {
      id: "ex.wfg37.3.9",
      type: "speech_shadowing",
      difficulty: 3,
      native_text: "Want to call out the work on the auth migration — that was a high-water mark.",
      voice_hint: "female_uk",
    },
    {
      id: "ex.wfg37.3.10",
      type: "listen_and_transcribe",
      difficulty: 3,
      audio_text: "Saved us a Sunday firefight — seriously, above and beyond.",
      target: "Saved us a Sunday firefight — seriously, above and beyond.",
    },
    {
      id: "ex.wfg37.3.11",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "raise a flag",
      tr_translation: "Bayrak kaldırmak / dikkat çekmek (iş kalıbı)",
      example: "Wanted to raise a flag on how solid your runbook was.",
      example_tr: "Runbook'unun ne kadar sağlam olduğuna bayrak kaldırmak istedim.",
    },
    {
      id: "ex.wfg37.3.12",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "Maya is good in her work since 2 years, I will make a praise public.",
      correct_sentence: "Maya has been great at her work for 2 years — I'll give her public praise.",
      tr_explanation:
        "'Maya is good' yanlış zaman — süregelen için 'has been great'. 'Good in her work' Türkçe; 'great at her work' doğru. 'Since 2 years' yanlış — süre için 'for'. 'Make a praise' Türkçe; doğrusu 'give public praise'.",
    },
  ],
};

// ============================================================
// Lesson 37.4 — Eylem + Takip
// ============================================================
export const workFeedbackGivingLesson_37_4: BundledLesson = {
  id: "work.feedback_giving.37.4",
  skill_id: "work.feedback_giving",
  index: 4,
  title: "Eylem + Takip",
  description:
    "Geri bildirimi havada birakma — somut aksiyon + tekrar kontrol tarihi. 'What would help here?' + 'let's revisit in 2 weeks'.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.wfg37.4.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "What would help here?",
      tr_translation: "Burada ne yararli olur? (aksiyon davet sorusu)",
      example:
        "I hear the load is real — what would help here? Pair review? Scope cut?",
      example_tr:
        "Is yukunun gercek oldugunu anliyorum — burada ne yararli olur? Pair review? Scope kisma?",
    },
    {
      id: "ex.wfg37.4.2",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source:
        "2 hafta sonra tekrar konusalim ve nereye geldigimizi gorelim.",
      target:
        "Let's revisit in 2 weeks and see where we've landed.",
      accepted_variants: [
        "Let's circle back in 2 weeks and check in.",
        "How about we revisit this in two weeks?",
        "Let's check in again in 2 weeks — see how it's tracking.",
        "Quick follow-up in 2 weeks to see where we are.",
      ],
      tr_hint:
        "Geri bildirim + tarihli takip = konu olu kalmaz. 'Revisit' / 'circle back' = sik kullanilir.",
    },
    {
      id: "ex.wfg37.4.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "Let's ___ in 2 weeks and see how it's tracking.",
      answer: "revisit",
      distractors: ["forget", "ignore", "delete"],
      tr_hint:
        "'Revisit' = tekrar ele alalim. Geri bildirim sonrasi takip kelimesi.",
    },
    {
      id: "ex.wfg37.4.4",
      type: "word_order",
      difficulty: 4,
      scrambled_tokens: [
        "What",
        "do",
        "you",
        "need",
        "from",
        "me",
        "to",
        "make",
        "this",
        "easier",
      ],
      correct_sentence: "What do you need from me to make this easier",
      tr_translation: "Bunu kolaylastirmak icin benden ne gerekli?",
    },
    {
      id: "ex.wfg37.4.5",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence:
        "Anyway, just do better next time.",
      correct_sentence:
        "What would help here? Let's pick one thing to try — and revisit in 2 weeks to see if it landed.",
      tr_explanation:
        "'Just do better' = sifir destek + sifir takip = geri bildirim olur. Aksiyon (NE deneyelim) + tarih (NE ZAMAN bakariz) = gercek degisim olusur.",
    },
    {
      id: "ex.wfg37.4.6",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Report'una zor geri bildirim verdin. Simdi konusmayi aksiyona ve takibe baglıyorsun.",
      npc_role: "Report",
      setting: "1:1 — wrap-up",
      turns: [
        {
          speaker: "npc",
          message:
            "Okay, I hear you. I want to be better at this — where do I start?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(great question|good (start|ask)|love that)",
            "(what (would|do you think would) help)",
            "(pick (one|a thing|the smallest))",
            "(experiment|try|test)",
            "(scope|focus on|narrow)",
          ],
          hint_tr:
            "Daveti geri ver: 'Love that — what do you think would help most? Let's pick one thing to try.'",
        },
        {
          speaker: "npc",
          message:
            "Maybe pair review on the trickier PRs? Catch stuff earlier.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(love it|sounds (good|right|like a plan)|that works)",
            "(let's (do that|try it|run with it))",
            "(commit to|stick to)",
            "(any pr (over|bigger than)|the trickier ones)",
            "(let's (revisit|circle back|check in)|in (2 weeks?|two weeks?))",
            "(see how it('s|s) (tracking|going|landing))",
          ],
          hint_tr:
            "Aksiyon + takip: 'Love it — let's commit to pair review on anything over 200 lines. Let's revisit in 2 weeks and see how it's tracking.'",
        },
        {
          speaker: "npc",
          message:
            "Sounds fair. Two weeks from today?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yep|yes|exactly|that works)",
            "(put it on (the|our) (calendar|cal)|i'll send the invite)",
            "(end of (1:1|the sync|our next))",
            "(thanks for being open|appreciate (you|the openness))",
          ],
          hint_tr:
            "Kapat: 'Yep — I'll send the invite. Appreciate you being open to this.'",
        },
        {
          speaker: "npc",
          message:
            "Likewise. Thanks for telling me straight.",
        },
      ],
    },
    {
      id: "ex.wfg37.4.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Geri bildirim sonrasi NE eklersin?",
          options: [
            "Hicbir sey — soyledigin yeter",
            "Aksiyon ('NE deneyelim?') + Takip ('NE ZAMAN bakariz?') = gercek degisim",
            "Daha cok elestiri",
            "Manager'a sikayet",
          ],
          correct_index: 1,
          tr_explanation:
            "Soylemek baslangic — degisim aksiyon + takiple olur. Tarihli check-in = konu hayatta kalir.",
        },
        {
          question: "'What would help here?' sorusu nicin guclu?",
          options: [
            "Yararsiz",
            "Cozumu report'a birakir = sahiplenme artar + senin perspektifin disinda alternatif acilir",
            "Manager rolu kaybedilir",
            "Yumusatma",
          ],
          correct_index: 1,
          tr_explanation:
            "'Sen yap X' = direktif = isteksizlik. 'Ne yararli olur?' = davet = report kendi cozumune sahip cikar.",
        },
        {
          question: "'Let's revisit in 2 weeks' niye onemli?",
          options: [
            "Vakit kaybi",
            "Konu olu kalmaz + degisim olculur + report onceligi anlar",
            "Yararsiz",
            "Pasif aggresif",
          ],
          correct_index: 1,
          tr_explanation:
            "Tarihsiz geri bildirim = unutulur. 2 hafta = davranis degismek icin zaman + olculmek icin yeterli.",
        },
      ],
    },
    {
      id: "ex.wfg37.4.8",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase: "What would help here? Let's pick one thing to try.",
      tr_translation: "Burada ne yararlı olur? Deneyecek bir şey seçelim.",
      ipa: "/wɒt wʊd hɛlp hɪər lɛts pɪk wʌn θɪŋ tuː traɪ/",
    },
    {
      id: "ex.wfg37.4.9",
      type: "speech_shadowing",
      difficulty: 3,
      native_text: "Let's revisit in two weeks and see how it's tracking.",
      voice_hint: "male_us",
    },
    {
      id: "ex.wfg37.4.10",
      type: "listen_and_transcribe",
      difficulty: 4,
      audio_text: "What do you need from me to make this easier?",
      target: "What do you need from me to make this easier?",
    },
    {
      id: "ex.wfg37.4.11",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "sync",
      tr_translation: "Kısa görüşme / hizalanmak (iş kalıbı)",
      example: "Let's do a quick sync in 2 weeks to see how it's tracking.",
      example_tr: "Nasıl gittiğini görmek için 2 hafta içinde hızlı bir sync yapalım.",
    },
    {
      id: "ex.wfg37.4.12",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "We talk about this issue since the last month, please we make plan.",
      correct_sentence: "We've been talking about this issue for the last month — let's make a plan.",
      tr_explanation:
        "'We talk' yanlış zaman; süregelen için 'we've been talking'. 'Since the last month' yanlış — süre için 'for the last month'. 'We make plan' yerine 'let's make a plan' (öneri + sayılabilir).",
    },
  ],
};

// ============================================================
// Work Feedback Giving lessons registry
// ============================================================
export const workFeedbackGivingLessons: ReadonlyArray<BundledLesson> = [
  workFeedbackGivingLesson_37_1,
  workFeedbackGivingLesson_37_2,
  workFeedbackGivingLesson_37_3,
  workFeedbackGivingLesson_37_4,
];
