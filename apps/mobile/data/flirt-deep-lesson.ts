// Flort - Derinlesen Iliski Yayi (deep relationship arc) lessons
// Skills: flirt.firstdate, flirt.intimacy, flirt.midrel, flirt.crisis, flirt.recovery
// 50 lessons covering full relationship journey for Turk-abroad reality
//
// CEFR distribution: B1 (12) / B2 (28) / C1 (10)
// Each lesson: 1-2 vocab_tile + 1 roleplay_chat (10-12 turns)
// Voice-mode lenient: 5-7 acceptable_patterns per user turn

import type { BundledLesson } from "../lib/engine";

// ============================================================
// PHASE 1 — FIRST DATES (1-10) — skill: flirt.firstdate
// ============================================================

export const flirtDeep_1: BundledLesson = {
  id: "flirt.deep.1",
  skill_id: "flirt.firstdate",
  index: 1,
  title: "Randevu Plani — Kahve mi Aksam Yemegi mi",
  description: "Mesajlasmadan randevuya geciste 'kahve mi yemek mi' onerisini akiskan ver.",
  estimated_minutes: 6,
  exercises: [
    {
      id: "ex.fd1.1",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "B2",
      word_or_phrase: "low-key",
      tr_translation: "Sade, abartisiz, rahat (Gen-Z)",
      example: "Want to do something low-key this weekend?",
      example_tr: "Hafta sonu sade bir sey yapmak ister misin?",
    },
    {
      id: "ex.fd1.2",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "B2",
      word_or_phrase: "grab a drink",
      tr_translation: "Bir seyler icmeye gitmek (kahve veya alkol — esnek)",
      example: "We should grab a drink sometime this week.",
      example_tr: "Bu hafta bir seyler icmeye gitmeliyiz.",
    },
    {
      id: "ex.fd1.vt2",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B2",
      word_or_phrase: "down for that",
      tr_translation: "Varim, ben de istegim (modern kabul)",
      example: "Saturday coffee? Yeah, I'm down for that.",
      example_tr: "Cumartesi kahve? Evet, varim.",
    },
    {
      id: "ex.fd1.vt3",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B2",
      word_or_phrase: "free Friday",
      tr_translation: "Cuma bos musun (kisa randevu sorma kalibi)",
      example: "Are you free Friday? There's a place I want to try.",
      example_tr: "Cuma bos musun? Denemek istedigim bir yer var.",
    },
    {
      id: "ex.fd1.vt4",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B2",
      word_or_phrase: "lock it in",
      tr_translation: "Kesinlestirmek (planli, kararli)",
      example: "Let's lock it in — Saturday at three.",
      example_tr: "Kesinlestirelim — Cumartesi ucte.",
    },
    {
      id: "ex.fd1.vt5",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B2",
      word_or_phrase: "no pressure",
      tr_translation: "Baski yok (rahat ortam isareti)",
      example: "No pressure — if Friday doesn't work, we'll find another day.",
      example_tr: "Baski yok — Cuma olmazsa baska gun ayarlariz.",
    },
    {
      id: "ex.fd1.3",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description: "Bir hafta mesajlastiniz, simdi gercek randevu teklif edeceksin.",
      npc_role: "Match",
      setting: "dating app chat, switching to real plans",
      turns: [
        {
          speaker: "npc",
          message: "Okay so we've been texting for a week — at this point we should probably just meet, right?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yeah |honestly |literally )?(was about to|i was gonna) (suggest|ask|say) (the same|that)",
            "(reading my mind|exactly what i was thinking)",
            "(okay |alright )?(let'?s do it|i'?m in|down for that)",
            "(yes |definitely |hundred percent )(let'?s|we should)",
            "(was hoping you'?d say|finally — was waiting)",
            "(saving me the awkward ask|saved me the trouble)",
          ],
          model_answers: ["Honestly was about to suggest the same"],
          hint_tr: "Onayla + momentum: 'Honestly was about to suggest the same' veya 'Reading my mind.'",
        },
        {
          speaker: "npc",
          message: "Haha okay good. So what are you thinking — coffee, dinner, something else?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(how about |what about )?(a |grabbing )?(coffee|drink)",
            "(let'?s |maybe we )?(start with|do) coffee — (less pressure|low.?key|easy)",
            "(coffee first|coffee'?s easier) and (see how it goes|take it from there)",
            "(i'?m thinking |honestly )?(low.?key|something chill) — (coffee|a walk|a drink)",
            "(dinner feels |dinner sounds )?(too) (much|formal) for (a |the )first time",
            "(coffee is my go.?to|coffee'?s my move)",
          ],
          model_answers: ["How about coffee — low-key, easier to escape if it's weird, haha."],
          hint_tr: "Dusuk bahis oner: 'How about coffee — low-key, easier to escape if it's weird, haha.'",
        },
        {
          speaker: "npc",
          message: "Coffee works for me — although I have to warn you, I'm one of those annoying people who orders a weird oat milk thing.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(that'?s |honestly )?(allowed|fine|fair|valid)",
            "(no judgment|zero judgment) (here|from me)",
            "(oat milk )?(crew|squad|gang) — (welcome|respect)",
            "(should i be |am i )?(worried|scared) about the rest of the order",
            "(as long as you don'?t |unless you )order it in (latin|french)",
            "(takes one to know one|i'?m worse honestly)",
          ],
          model_answers: ["Allowed — as long as you don't order it in Latin."],
          hint_tr: "Sakaya gir: 'Allowed — as long as you don't order it in Latin.'",
        },
        {
          speaker: "npc",
          message: "Hahaha fair. There's this place near the river — Cafe Lumen. Have you been?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(walked past it|seen it) but (never |not yet )been (in|inside)",
            "(heard good things|heard it'?s good) — (let'?s try it|down to try)",
            "(no |not yet )— (you pick|i trust you|your call)",
            "(been there once|been a couple times) — (it'?s good|love it)",
            "(perfect |sounds )?(let'?s lock it in|let'?s do it)",
            "(works for me|i'?m in|sold)",
          ],
          model_answers: ["Walked past it, never been in. Let's try it."],
          hint_tr: "Bilmiyor numarasi yapma — durust: 'Walked past it, never been in. Let's try it.'",
        },
        {
          speaker: "npc",
          message: "Cool. Saturday afternoon? Like 3-ish?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(saturday |3.?ish )?(works|sounds good|i'?m in)",
            "(let'?s |let'?s lock it in|locking it in) (saturday|3)",
            "(3 |saturday )(it is|works for me)",
            "(perfect — see you )(saturday|then)",
            "(deal|done|consider it scheduled)",
            "(adding it to my calendar|in the calendar)",
          ],
          model_answers: ["Saturday at 3 works. Locking it in."],
          hint_tr: "Net onay: 'Saturday at 3 works. Locking it in.'",
        },
        {
          speaker: "npc",
          message: "Locked in. Don't bail on me, Turkey.",
        },
      ],
    },
    {
      id: "ex.fd1.4",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Ilk gercek randevu icin en guvenli format?",
          options: ["Aksam yemegi", "Kahve / icecek", "Sinema", "Ev davetimi"],
          correct_index: 1,
          tr_explanation: "Kahve = dusuk bahis, kacis kolay, doga + sohbet ortami yeterli.",
        },
      ],
    },
    {
      id: "ex.fd1.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      template: "How about ___ — ___, easier to escape if it's weird?",
      slots: [
        { accepted: ["coffee", "a quick drink", "a walk", "something low-key"] },
        { accepted: ["low-key", "less pressure", "more chill", "no commitment"] },
      ],
      tr_hint:
        "İlk randevu öneri formülü: dusuk bahis aktivite + neden dusuk bahis. Türk öğrenci 'Let's meet' diye direkt önerir — native casual: 'How about X — less pressure'. Self-deprecating mizah ('escape if weird') = rahatlık sinyali.",
      example_filled: "How about coffee — low-key, easier to escape if it's weird, haha.",
    },
    {
      id: "ex.fd1.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      turns: [
        { speaker: "npc", text: "Coffee works for me. Saturday afternoon, like 3-ish?" },
        { speaker: "user" },
        { speaker: "npc", text: "Locked in. Don't bail on me, Turkey." },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(saturday |3.?ish )?(works|sounds good|i'?m in)",
        "(let'?s |let'?s lock it in|locking it in)",
        "(3 |saturday )(it is|works for me)",
        "(perfect — see you )(saturday|then)",
        "(deal|done|consider it scheduled)",
        "(adding it to my calendar|in the calendar)",
      ],
      tr_hint:
        "Randevu kesinleşiyor — net onay ver. 'Maybe' veya 'I think so' = geri vites sinyali. Modern dating: kesin + heyecanlı. 'Saturday at 3 — locked in!' veya 'Adding it to my calendar'.",
      ideal_answer: "Saturday at 3 — locking it in. See you there.",
    },
    {
      id: "ex.fd1.lr1",
      type: "listen_respond",
      difficulty: 3,
      npc_line: "Okay so we've been texting forever — at this point we should probably just meet, right?",
      accepted_patterns: [
        "(yeah |honestly )?(was about to|i was gonna) (suggest|ask|say)",
        "(reading my mind|exactly what i was thinking)",
        "(okay |alright )?(let'?s do it|i'?m in|down for that)",
        "(yes |definitely )(let'?s|we should)",
        "(how about|what about) (coffee|a drink) (this|next) (week|weekend)",
      ],
      think_seconds: 3,
      tr_hint:
        "NPC çağrı yaptı — 'meet?' diye sordu. 3 saniye düşün, sonra GEÇ KALMA. Heyecan + somut öneri = ideal. 'Honestly, was about to suggest the same. Coffee Saturday?' gibi proaktif.",
      ideal_response: "Honestly, was about to suggest the same thing — coffee Saturday around 3?",
    },
    {
      id: "ex.fd1.tt1",
      type: "thinking_trap",
      difficulty: 3,
      tr_thought: "Bir hafta sonu kahve içmeye gidelim mi?",
      wrong_en: "Should we go to drink coffee on one weekend?",
      right_en: "Want to grab coffee this weekend? Low-key, no pressure.",
      why_tr:
        "Türk öğrenci kelime-kelime çevirir: 'Should we go' = robot. 'To drink coffee' = kitabi (native 'grab coffee'). 'On one weekend' = grammatik bozuk (native 'this weekend' veya 'sometime'). 'Want to + verb' = casual modern. 'Grab' fiili = düşük bahis dating davetinin standart kelimesi.",
    },
    {
      id: "ex.fd1.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "'Low-key' deyimi ne anlama gelir?",
          options: [
            "Düşük tuşa basmak",
            "Sade, abartısız, rahat",
            "Müzik düşük tonda",
            "Düşük seviye",
          ],
          correct: 1,
          tr_explanation: "'Low-key' = sade, gösterişsiz. Gen-Z dating dilinde sık kullanılır: 'low-key date' = düşük bahis randevu.",
        },
        {
          q: "'Grab a drink' nasıl çevirilir?",
          options: [
            "Bir içki kapmak",
            "İçkiyi hızlı içmek",
            "Bir şeyler içmeye gitmek (kahve veya alkol — esnek)",
            "Bir bardak kapmak",
          ],
          correct: 2,
          tr_explanation: "'Grab a drink' = kahve, çay, alkol — esnek. Dating'de düşük bahis davet kelimesi.",
        },
        {
          q: "İlk randevu için güvenli format?",
          options: [
            "Akşam yemeği (uzun + formal)",
            "Sinema (konuşamazsın)",
            "Kahve / içecek (1 saat, kaçış kolay)",
            "Ev daveti (riski yüksek)",
          ],
          correct: 2,
          tr_explanation: "Coffee = düşük bahis. Kötü giderse 1 saatte biter, iyi giderse 'walk?' uzatma.",
        },
        {
          q: "'Reading my mind' nasıl çevirilir?",
          options: [
            "Aklımı okuyorsun",
            "Düşüncelerimi anlıyorsun",
            "Aynı şeyi düşünüyorduk",
            "Hepsi doğru",
          ],
          correct: 3,
          tr_explanation: "'Reading my mind' = aynı şeyi düşünüyorduk. Casual + sıcak onay.",
        },
        {
          q: "Türk hatası: 'Should we go to drink coffee?' yerine?",
          options: [
            "Should we drink coffee?",
            "Want to grab coffee?",
            "We must go for coffee",
            "Going we to coffee?",
          ],
          correct: 1,
          tr_explanation: "'Want to grab coffee?' = modern + casual. 'Should we go to drink coffee' = okul kitabı + robotic.",
        },
      ],
    },
  ],
};

export const flirtDeep_2: BundledLesson = {
  id: "flirt.deep.2",
  skill_id: "flirt.firstdate",
  index: 2,
  title: "Son Dakika Iptal — Nazikce",
  description: "Gerçekten gelemiyorsun. Iptal et ama kapiyi kapatma.",
  estimated_minutes: 6,
  exercises: [
    {
      id: "ex.fd2.1",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B2",
      word_or_phrase: "raincheck",
      tr_translation: "Ertelemek, baska zamana birakmak (klise ama isler)",
      example: "Can I take a raincheck? Something just came up.",
      example_tr: "Erteleyebilir miyiz? Aniden bir sey cikti.",
    },
    {
      id: "ex.fd2.vt2",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B2",
      word_or_phrase: "something came up",
      tr_translation: "Bir sey cikti (acil iptal kalibi)",
      example: "I hate doing this, but something came up at work.",
      example_tr: "Bunu yapmaktan nefret ediyorum ama iste bir sey cikti.",
    },
    {
      id: "ex.fd2.vt3",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B2",
      word_or_phrase: "I owe you one",
      tr_translation: "Sana bir borcum var (telafi sozu)",
      example: "I owe you one — first round's on me next time.",
      example_tr: "Sana bir borcum var — sonraki sefer ilk icki benden.",
    },
    {
      id: "ex.fd2.vt4",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B2",
      word_or_phrase: "worst timing",
      tr_translation: "En kotu zamanlama (icten ozur)",
      example: "Worst timing — I was actually looking forward to today.",
      example_tr: "En kotu zamanlama — bugunu bekliyordum.",
    },
    {
      id: "ex.fd2.vt5",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B2",
      word_or_phrase: "push it to",
      tr_translation: "Ertelemek, oteye atmak (alternatif gun sunma)",
      example: "Can we push it to Wednesday? Same place, same time.",
      example_tr: "Carsamba'ya erteleyebilir miyiz? Ayni yer, ayni saat.",
    },
    {
      id: "ex.fd2.2",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description: "Randevuya 4 saat var, gelemiyorsun. Iptal et ama gercek niyeti gosterek.",
      npc_role: "Date",
      setting: "Text message — 4 hours before meet",
      turns: [
        {
          speaker: "npc",
          message: "Hey! Still on for 3? I'm leaving the office in like an hour.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(okay |hey )?(this is |i feel )(awful|terrible|so bad) (writing |saying )?this",
            "(i hate to|the worst — i have to) (do this|ask|say)",
            "(something just |something )?(came up|happened) (with work|with my family|today)",
            "(can we |any chance we can )(reschedule|push|move) (this|today)",
            "(i'?m so sorry |sorry )— (i can'?t make it|i can'?t do today)",
            "(genuinely the worst timing|worst possible timing)",
          ],
          model_answers: ["Hey — this is awful, but something came up with work."],
          hint_tr: "Acik baslama: 'Hey — this is awful, but something came up with work.'",
        },
        {
          speaker: "npc",
          message: "Oh no — everything okay?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yeah |yes )?(nothing serious|nothing major) — (just |it'?s just )(work|a deadline|family stuff)",
            "(my boss |a project )?(dropped|threw) (something |an emergency )(on me|today)",
            "(everything'?s fine|all good) — (just bad timing|just chaos)",
            "(family thing |a family )?(came up|from turkey)",
            "(annoying but |stressful but )?(nothing dramatic|nothing major)",
            "(i'?ll spare you|long story but) the details",
          ],
          model_answers: ["Nothing serious, just a work emergency."],
          hint_tr: "Detay ver ama drama yapma: 'Nothing serious, just a work emergency.'",
        },
        {
          speaker: "npc",
          message: "Okay no worries — these things happen. Want to do it another day?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes please |genuinely yes )— (i actually want to|i was looking forward)",
            "(absolutely |hundred percent )— (when'?s good for you|name the day)",
            "(saving the day|you'?re saving me) — (yes|let'?s do that)",
            "(tuesday |wednesday |this weekend )?(work better|good for you)",
            "(i owe you |first round'?s on me) (a coffee|next time)",
            "(seriously |genuinely )(want to make this up to you|making it up to you)",
          ],
          model_answers: ["Yes please — was actually looking forward. Wednesday work?"],
          hint_tr: "Niyetini goster: 'Yes please — was actually looking forward. Wednesday work?'",
        },
        {
          speaker: "npc",
          message: "Wednesday works. Same place, same time?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(perfect |yes )— (same place |let'?s do same )(same time)",
            "(locking it in|locked in) — wednesday (at )?3",
            "(thank you |seriously thank you )(for being chill|for understanding|about this)",
            "(i'?ll be there |you'?ll see me )(no excuses|for real this time)",
            "(consider it |it'?s )?(rescheduled|in the calendar)",
            "(first round on me |coffee'?s on me )(wednesday|this time)",
          ],
          model_answers: ["Perfect — Wednesday at 3, same place. Thank you for being chill about this."],
          hint_tr: "Net + minnet: 'Perfect — Wednesday at 3, same place. Thank you for being chill about this.'",
        },
        {
          speaker: "npc",
          message: "Don't sweat it. Hope the work stuff calms down.",
        },
      ],
    },
    {
      id: "ex.fd2.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      cefr_band: "B1",
      template: "Hey — ___, ___. Can we ___?",
      slots: [
        { accepted: ["this is awful", "I feel terrible", "worst timing", "the worst — I have to ask"] },
        { accepted: ["something came up at work", "a family thing came up", "I'm stuck at the office", "a deadline blew up"] },
        { accepted: ["reschedule for Wednesday", "push it to the weekend", "move it to Friday", "take a raincheck"] },
      ],
      tr_hint:
        "Son dakika iptal kalıbı: özür + somut sebep + somut alternatif. Türk öğrenci 'Sorry I can't' der; alternatif vermez = momentum öldürür.",
      example_filled:
        "Hey — this is awful, something came up at work. Can we reschedule for Wednesday?",
    },
    {
      id: "ex.fd2.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      cefr_band: "B1",
      turns: [
        { speaker: "npc", text: "Everything okay though?" },
        { speaker: "user" },
        { speaker: "npc", text: "Got it — Wednesday it is then." },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(yeah |yes |everything'?s )?(okay|fine|all good)",
        "(nothing serious|nothing major)",
        "(work emergency|deadline|family thing)",
        "(annoying but )(nothing dramatic|no drama)",
        "(genuinely want to|actually want to) (reschedule|do this)",
      ],
      tr_hint:
        "Endişe gider + niyet onayla. 'Yeah everything's fine — work emergency, nothing dramatic. Genuinely want to reschedule' tipi.",
      ideal_answer:
        "Yeah everything's fine — just a work emergency, nothing dramatic. Genuinely want to reschedule for Wednesday.",
    },
    {
      id: "ex.fd2.lr1",
      type: "listen_respond",
      difficulty: 3,
      cefr_band: "B1",
      npc_line: "Wait, you're canceling? Why?",
      accepted_patterns: [
        "(i know|i'?m so sorry)[,—-]? (.+) (just came up|happened)",
        "(work|family) (emergency|thing)",
        "(wouldn'?t cancel|wouldn'?t do this) (unless|except)",
        "(let me make|i'?ll make) (it )?(up|right)",
        "(first round on me|coffee on me)",
      ],
      think_seconds: 3,
      tr_hint:
        "Defansif olma — sebep + sahiplenme + telafi. 'I'm so sorry — work emergency, wouldn't cancel unless real. Coffee on me Wednesday?' tipi.",
      ideal_response:
        "I'm so sorry — work emergency just hit, wouldn't cancel unless real. Coffee on me Wednesday?",
    },
    {
      id: "ex.fd2.tt1",
      type: "thinking_trap",
      difficulty: 3,
      cefr_band: "B1",
      tr_thought: "Üzgünüm gelemem, işim var",
      wrong_en: "Sorry I can't come. I have work.",
      right_en: "Hey — this is awful, but a work emergency just hit. Can we push to Wednesday?",
      why_tr:
        "Türk öğrenci 'işim var' kalıbını birebir çevirir = generic + alternatifsiz. 'I can't come' kuru. Doğru: 'awful' (üzgünüm sahiplen) + spesifik sebep + somut yeni gün = saygılı iptal.",
    },
    {
      id: "ex.fd2.rq1",
      type: "recall_quiz",
      difficulty: 3,
      cefr_band: "B1",
      items: [
        {
          q: "'Raincheck' anlamı?",
          options: [
            "Yağmur kontrolü",
            "Ertelemek, başka zamana bırakma sözü",
            "Kuponu kontrol",
            "Şikayet",
          ],
          correct: 1,
          tr_explanation:
            "'Take a raincheck' = bugün hayır, başka zaman evet sözü. Klasik dating idiom.",
        },
        {
          q: "İptal mesajının zorunlu 3 öğesi?",
          options: [
            "Sadece özür",
            "Özür + somut sebep + somut alternatif",
            "Bahane",
            "Yalan",
          ],
          correct: 1,
          tr_explanation:
            "Üçü birden = saygılı + momentum koruyor. Eksik biri = ilişki riski.",
        },
        {
          q: "'Wouldn't cancel unless real' kalıbı:",
          options: [
            "Sahiplenme + dürüstlük sinyali",
            "Yapısal yanlış",
            "Çok formal",
            "Şüpheli",
          ],
          correct: 0,
          tr_explanation:
            "'Wouldn't cancel unless real' = bu gerçekten önemli, bahane değil sinyali.",
        },
        {
          q: "'First round on me' kalıbı:",
          options: [
            "İlk içkiyi ben ısmarlarım (telafi jest'i)",
            "İlk raunt benden (kavga)",
            "Önce ben içerim",
            "Yapısal yanlış",
          ],
          correct: 0,
          tr_explanation:
            "'First round on me' = ilk içki/kahve benden. Telafi jest'i.",
        },
        {
          q: "İptal sonrası en sık Türk hatası?",
          options: [
            "'Sorry I can't, work' (alternatifsiz)",
            "Çok özür",
            "Çok kelime",
            "İngilizce",
          ],
          correct: 0,
          tr_explanation:
            "Türk direkt çeviri 'Üzgünüm, işim var' = alternatif yok = momentum kaybı.",
        },
      ],
    },
  ],
};

export const flirtDeep_3: BundledLesson = {
  id: "flirt.deep.3",
  skill_id: "flirt.firstdate",
  index: 3,
  title: "Iptal Edileni Tekrar Ayarla",
  description: "Sen iptal etmistin. Simdi tekrar konusarak yeniden ayarliyorsun.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.fd3.1",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "B2",
      word_or_phrase: "circle back",
      tr_translation: "Tekrar donmek, kaldigimiz yere donmek",
      example: "Wanted to circle back about our coffee plan.",
      example_tr: "Kahve plani konusunda tekrar donmek istedim.",
    },
    {
      id: "ex.fd3.vt2",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B2",
      word_or_phrase: "round two",
      tr_translation: "Ikinci raunt (iptal sonrasi yeni deneme)",
      example: "Round two on the coffee plan — when works for you?",
      example_tr: "Kahve plani icin ikinci raunt — sana ne zaman uyar?",
    },
    {
      id: "ex.fd3.vt3",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B2",
      word_or_phrase: "not a flake",
      tr_translation: "Sozunden caymayan biri (kacak degil)",
      example: "Promise I'm not a flake — just had a real emergency.",
      example_tr: "Soz veriyorum, sozumden cayan biri degilim — gercek bir acil durum vardi.",
    },
    {
      id: "ex.fd3.vt4",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B2",
      word_or_phrase: "make it up to you",
      tr_translation: "Telafi etmek (jest sozu)",
      example: "Let me make it up to you — I'll pick the spot this time.",
      example_tr: "Telafi etmeme izin ver — mekani bu sefer ben secerim.",
    },
    {
      id: "ex.fd3.vt5",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B2",
      word_or_phrase: "name the day",
      tr_translation: "Gunu sec (esnek kontrol verme)",
      example: "Name the day — I'm flexible this week.",
      example_tr: "Gunu sec — bu hafta esnegim.",
    },
    {
      id: "ex.fd3.2",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description: "Iki gun once iptal ettin. Simdi yeniden ayarlamak icin yaziyorsun.",
      npc_role: "Date",
      setting: "Text — restarting the conversation",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(hey |okay )?(circling back |coming back )(about|on) (our|the) (coffee|plan)",
            "(hope your week|how'?s your week) (calmed down|going)",
            "(want to |should we )(reschedule|try again|lock in) (this week|something)",
            "(promise i'?m not |i'?m not actually )(flaky|a flake)",
            "(let me make it up to you|making it up to you) — (when'?s good|free this week)",
            "(round two|take two) on the coffee plan",
          ],
          model_answers: ["Hey — circling back about our coffee. Free this week?"],
          hint_tr: "Sen baslat: 'Hey — circling back about our coffee. Free this week?'",
        },
        {
          speaker: "npc",
          message: "Hey! I was wondering. Yeah, the week's been chaos but better now. What did you have in mind?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thursday |friday |saturday )(afternoon|evening|works for me)",
            "(let'?s try |let'?s do )(thursday|friday|saturday) (at )?(\\d+)",
            "(same plan|same place) — (just |different )?(different day|new day)",
            "(name the day|you pick) (this time|since i flaked)",
            "(i'?m flexible|whenever works) — (what'?s good|your call)",
            "(any chance |would )(thursday|friday|saturday) (works|work)",
          ],
          model_answers: ["Thursday afternoon? Same plan, just new day."],
          hint_tr: "Yeni gun oner: 'Thursday afternoon? Same plan, just new day.'",
        },
        {
          speaker: "npc",
          message: "Thursday's good. 4 instead of 3?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(4 |thursday at 4 )?(works|sounds good|i'?m in)",
            "(perfect|done|locked in) — (thursday|see you) (at 4)",
            "(even better — gives me time|gives me more time)",
            "(adding it to my calendar|it'?s in the calendar)",
            "(no flaking this time|promise — i'?ll be there)",
            "(consider it |officially )(rescheduled|locked in)",
          ],
          model_answers: ["Thursday at 4 — locked in. No flaking this time."],
          hint_tr: "Net onay + soz: 'Thursday at 4 — locked in. No flaking this time.'",
        },
        {
          speaker: "npc",
          message: "Haha you better. See you Thursday.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(see you thursday|thursday it is)",
            "(can'?t wait|looking forward)",
            "(text you |i'?ll text )?(thursday morning|before) (to confirm)?",
            "(don'?t let me |hold me to it)",
            "(thanks for |grateful for )?(being patient|being chill)",
            "(round two — let'?s go|here we go)",
          ],
          model_answers: ["See you Thursday — looking forward to round two."],
          hint_tr: "Kapanis: 'See you Thursday — looking forward to round two.'",
        },
        {
          speaker: "npc",
          message: "Likewise. Try not to have another emergency before then.",
        },
      ],
    },
    {
      id: "ex.fd3.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      cefr_band: "B1",
      template: "I want to ___ with you about ___ — ___?",
      slots: [
        { accepted: ["talk honestly", "be open", "share something", "have a real conversation"] },
        { accepted: ["this", "where we're at", "how I'm feeling", "what's going on"] },
        { accepted: ["is now a good time", "can we sit down for a bit", "are you up for it", "would that be okay"] },
      ],
      tr_hint:
        "Önemli konu açma kalıbı: niyet + konu + saygılı zaman sorusu. 'Iptal Edileni Tekrar Ayarla' bağlamında — Türk öğrenci direkt konuya girer; bu sağlam ilk cümle değil. Yumuşatma + zaman kontrolü = saygılı + güvenli alan.",
      example_filled:
        "I want to talk honestly with you about where we're at — is now a good time?",
    },
    {
      id: "ex.fd3.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      cefr_band: "B1",
      turns: [
        { speaker: "npc", text: "What's on your mind?" },
        { speaker: "user" },
        { speaker: "npc", text: "Okay — I'm listening." },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(been (thinking|sitting) with|wanted to talk about)",
        "(might sound|this might sound) (.+)",
        "(want to (open up|be honest|share))",
        "(no pressure|just|honestly) (.+)",
        "(can we|could we) (.+)",
      ],
      tr_hint:
        "Konuyu açma — yumuşatma + dürüst niyet. 'Iptal Edileni Tekrar Ayarla' senaryosunda 'Been thinking about us — wanted to be honest. Can we talk?' tarzı.",
      ideal_answer:
        "Been thinking about something — want to be honest with you. Can we talk through it?",
    },
    {
      id: "ex.fd3.lr1",
      type: "listen_respond",
      difficulty: 3,
      cefr_band: "B1",
      npc_line: "How are you actually feeling about this?",
      accepted_patterns: [
        "(honestly|truthfully) (.+) (good|complicated|mixed)",
        "(part of me|some of me) (.+)",
        "(been (processing|sitting with|figuring out))",
        "(still working through|day by day)",
        "(grateful (you asked|for the space))",
      ],
      think_seconds: 3,
      tr_hint:
        "Dürüst + olgun duygu paylaşımı. 'Iptal Edileni Tekrar Ayarla' bağlamında. Türk öğrenci 'fine' der; bunu yapma; SPESİFİK + dürüst.",
      ideal_response:
        "Honestly? Mixed — still processing parts of it. Day by day.",
    },
    {
      id: "ex.fd3.tt1",
      type: "thinking_trap",
      difficulty: 3,
      cefr_band: "B1",
      tr_thought: "Konuşmamız lazım, çok önemli",
      wrong_en: "We must talk, very important.",
      right_en: "I'd love to talk something through with you — is now a good time?",
      why_tr:
        "Türk öğrenci 'konuşmamız lazım + önemli' kalıbını birebir çevirir = emir tonu + 'must' baskı yaratır + 'very important' dramatik. 'Iptal Edileni Tekrar Ayarla' gibi hassas konuda yumuşatma şart: 'I'd love to talk' (davet) + 'is now a good time' (saygılı zaman kontrolü).",
    },
    {
      id: "ex.fd3.rq1",
      type: "recall_quiz",
      difficulty: 3,
      cefr_band: "B1",
      items: [
        {
          q: "Önemli konuyu açarken en olgun yaklaşım?",
          options: [
            "'We must talk' (emir)",
            "'I'd love to talk — good time?' (davet + saygı)",
            "Sus, bekle",
            "Direkt konuya gir",
          ],
          correct: 1,
          tr_explanation:
            "Davet + zaman kontrolü = saygılı + güvenli alan. Emir = baskı = savunmaya iter.",
        },
        {
          q: "Karşı taraf 'how are you feeling?' sorduğunda?",
          options: [
            "Tek kelime 'fine'",
            "Spesifik + dürüst + 'still processing'",
            "Yalan",
            "Konu değiştir",
          ],
          correct: 1,
          tr_explanation:
            "'Fine' = kapalı kapı. Modern dating: spesifik duygu paylaşımı = bağ kurma.",
        },
        {
          q: "'Day by day' kalıbı:",
          options: [
            "Günden güne (zaman içinde)",
            "Her gün ayrı",
            "Yapısal yanlış",
            "Hızla",
          ],
          correct: 0,
          tr_explanation:
            "'Day by day' = adım adım, zamanla. Zor süreçleri işlerken sağlıklı.",
        },
        {
          q: "'Been sitting with something' anlamı?",
          options: [
            "Bir şeyle oturmak",
            "Bir konuyu içselleştirmek/üzerinde düşünmek",
            "Beklemek",
            "Yapısal yanlış",
          ],
          correct: 1,
          tr_explanation:
            "'Sitting with' = düşünmek, sindirmek (mecaz). Olgun + öz farkındalık.",
        },
        {
          q: "Türk hatası: 'We must talk, very important'",
          options: [
            "Çok formal",
            "Emir + drama tonu = savunmaya iter",
            "Yapısal yanlış",
            "Çok kibar",
          ],
          correct: 1,
          tr_explanation:
            "'Must talk' = emir. 'Very important' = drama. Modern: davet + bağlam.",
        },
      ],
    },
  ],
};

export const flirtDeep_4: BundledLesson = {
  id: "flirt.deep.4",
  skill_id: "flirt.firstdate",
  index: 4,
  title: "Erken Geldim — Mekana Vardim",
  description: "Randevuya 15 dakika erken geldin. Cafe'de garson veya mekan sahibiyle small talk.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.fd4.1",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "B2",
      word_or_phrase: "waiting on someone",
      tr_translation: "Birini bekliyorum (cafe/restoran kalip)",
      example: "I'm just waiting on someone — I'll order when they get here.",
      example_tr: "Birini bekliyorum — geldiginde siparis veririm.",
    },
    {
      id: "ex.fd4.vt2",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B2",
      word_or_phrase: "table for two",
      tr_translation: "Iki kisilik masa (klasik restoran kalibi)",
      example: "Table for two, please — got here a bit early.",
      example_tr: "Iki kisilik masa lutfen — biraz erken geldim.",
    },
    {
      id: "ex.fd4.vt3",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B2",
      word_or_phrase: "I'll hold off",
      tr_translation: "Bekleyecegim (siparis ertelemek)",
      example: "I'll hold off ordering — they should be here any minute.",
      example_tr: "Siparis vermeyi erteliyorum — birazdan gelirler.",
    },
    {
      id: "ex.fd4.vt4",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "B2",
      word_or_phrase: "tucked away",
      tr_translation: "Kose, gizli yer (sessiz masa istemi)",
      example: "Do you have anything tucked away — quieter spot?",
      example_tr: "Daha sessiz, kose bir masa var mi?",
    },
    {
      id: "ex.fd4.vt5",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B2",
      word_or_phrase: "for now",
      tr_translation: "Suanlik (gecici cevap kalibi)",
      example: "Just water for now — thanks.",
      example_tr: "Suanlik sadece su — tesekkurler.",
    },
    {
      id: "ex.fd4.2",
      type: "roleplay_chat",
      difficulty: 3,
      scenario_description: "Cafe'ye 15 dakika erken geldin. Garson ne istedigini soruyor.",
      npc_role: "Barista",
      setting: "Cafe Lumen, 2:45pm",
      turns: [
        {
          speaker: "npc",
          message: "Hi there — welcome to Lumen. Table for one?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(actually |hi )(i'?m |i am )(waiting on someone|meeting someone)",
            "(table for two|two of us) — (i'?m just early|got here early)",
            "(i'?m a bit early|came early) — (meeting a friend|date|someone)",
            "(can i |could i )(sit and wait|grab a table)",
            "(meeting someone at 3|expecting someone)",
            "(two please |for two )— (running early|i'?m early)",
          ],
          model_answers: ["I'm waiting on someone — got here a bit early. Table for two please."],
          hint_tr: "Acikla: 'I'm waiting on someone — got here a bit early. Table for two please.'",
        },
        {
          speaker: "npc",
          message: "Of course. Window seat or somewhere quieter?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(window |the window )(would be great|sounds nice)",
            "(somewhere quieter|the quiet spot) — (easier to talk|less noise)",
            "(window please |window if possible )— (better view|nicer light)",
            "(whichever |either )(is fine|works)",
            "(do you |do you have )?(have one|anything) (in the corner|tucked away)",
            "(quieter |corner )?(if you have one|please)",
          ],
          model_answers: ["Somewhere quieter, please — easier to talk."],
          hint_tr: "Sec: 'Somewhere quieter, please — easier to talk.'",
        },
        {
          speaker: "npc",
          message: "Got it. Right this way. Can I get you anything while you wait?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(just water |water )?(for now|to start)",
            "(i'?ll wait |i'?ll hold off )(till they get here|till they arrive)",
            "(maybe |actually )(a glass of water|just water)",
            "(thanks |i'?m good )(for now)",
            "(i'?ll order |we'?ll order )(when they (arrive|get here))",
            "(no thanks — |just |i'?ll just )(have water)",
          ],
          model_answers: ["Just water for now — I'll order when they get here."],
          hint_tr: "Cikolata bekleme: 'Just water for now — I'll order when they get here.'",
        },
        {
          speaker: "npc",
          message: "Sounds good. I'll bring water over. Take your time.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thank you |thanks )(so much|appreciate it)",
            "(thanks |cheers )",
            "(appreciate |really appreciate )(it|that)",
            "(perfect |great )(thanks)",
            "(you'?re a |what a )(lifesaver|legend)",
            "(thanks |much appreciated )",
          ],
          model_answers: ["Thanks so much — appreciate it."],
          hint_tr: "Tesekkur: 'Thanks so much — appreciate it.'",
        },
        {
          speaker: "npc",
          message: "Anytime. First time at Lumen?",
        },
      ],
    },
    {
      id: "ex.fd4.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      cefr_band: "B1",
      template: "I want to ___ with you about ___ — ___?",
      slots: [
        { accepted: ["talk honestly", "be open", "share something", "have a real conversation"] },
        { accepted: ["this", "where we're at", "how I'm feeling", "what's going on"] },
        { accepted: ["is now a good time", "can we sit down for a bit", "are you up for it", "would that be okay"] },
      ],
      tr_hint:
        "Önemli konu açma kalıbı: niyet + konu + saygılı zaman sorusu. 'Erken Geldim — Mekana Vardim' bağlamında — Türk öğrenci direkt konuya girer; bu sağlam ilk cümle değil. Yumuşatma + zaman kontrolü = saygılı + güvenli alan.",
      example_filled:
        "I want to talk honestly with you about where we're at — is now a good time?",
    },
    {
      id: "ex.fd4.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      cefr_band: "B1",
      turns: [
        { speaker: "npc", text: "What's on your mind?" },
        { speaker: "user" },
        { speaker: "npc", text: "Okay — I'm listening." },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(been (thinking|sitting) with|wanted to talk about)",
        "(might sound|this might sound) (.+)",
        "(want to (open up|be honest|share))",
        "(no pressure|just|honestly) (.+)",
        "(can we|could we) (.+)",
      ],
      tr_hint:
        "Konuyu açma — yumuşatma + dürüst niyet. 'Erken Geldim — Mekana Vardim' senaryosunda 'Been thinking about us — wanted to be honest. Can we talk?' tarzı.",
      ideal_answer:
        "Been thinking about something — want to be honest with you. Can we talk through it?",
    },
    {
      id: "ex.fd4.lr1",
      type: "listen_respond",
      difficulty: 3,
      cefr_band: "B1",
      npc_line: "How are you actually feeling about this?",
      accepted_patterns: [
        "(honestly|truthfully) (.+) (good|complicated|mixed)",
        "(part of me|some of me) (.+)",
        "(been (processing|sitting with|figuring out))",
        "(still working through|day by day)",
        "(grateful (you asked|for the space))",
      ],
      think_seconds: 3,
      tr_hint:
        "Dürüst + olgun duygu paylaşımı. 'Erken Geldim — Mekana Vardim' bağlamında. Türk öğrenci 'fine' der; bunu yapma; SPESİFİK + dürüst.",
      ideal_response:
        "Honestly? Mixed — still processing parts of it. Day by day.",
    },
    {
      id: "ex.fd4.tt1",
      type: "thinking_trap",
      difficulty: 3,
      cefr_band: "B1",
      tr_thought: "Konuşmamız lazım, çok önemli",
      wrong_en: "We must talk, very important.",
      right_en: "I'd love to talk something through with you — is now a good time?",
      why_tr:
        "Türk öğrenci 'konuşmamız lazım + önemli' kalıbını birebir çevirir = emir tonu + 'must' baskı yaratır + 'very important' dramatik. 'Erken Geldim — Mekana Vardim' gibi hassas konuda yumuşatma şart: 'I'd love to talk' (davet) + 'is now a good time' (saygılı zaman kontrolü).",
    },
    {
      id: "ex.fd4.rq1",
      type: "recall_quiz",
      difficulty: 3,
      cefr_band: "B1",
      items: [
        {
          q: "Önemli konuyu açarken en olgun yaklaşım?",
          options: [
            "'We must talk' (emir)",
            "'I'd love to talk — good time?' (davet + saygı)",
            "Sus, bekle",
            "Direkt konuya gir",
          ],
          correct: 1,
          tr_explanation:
            "Davet + zaman kontrolü = saygılı + güvenli alan. Emir = baskı = savunmaya iter.",
        },
        {
          q: "Karşı taraf 'how are you feeling?' sorduğunda?",
          options: [
            "Tek kelime 'fine'",
            "Spesifik + dürüst + 'still processing'",
            "Yalan",
            "Konu değiştir",
          ],
          correct: 1,
          tr_explanation:
            "'Fine' = kapalı kapı. Modern dating: spesifik duygu paylaşımı = bağ kurma.",
        },
        {
          q: "'Day by day' kalıbı:",
          options: [
            "Günden güne (zaman içinde)",
            "Her gün ayrı",
            "Yapısal yanlış",
            "Hızla",
          ],
          correct: 0,
          tr_explanation:
            "'Day by day' = adım adım, zamanla. Zor süreçleri işlerken sağlıklı.",
        },
        {
          q: "'Been sitting with something' anlamı?",
          options: [
            "Bir şeyle oturmak",
            "Bir konuyu içselleştirmek/üzerinde düşünmek",
            "Beklemek",
            "Yapısal yanlış",
          ],
          correct: 1,
          tr_explanation:
            "'Sitting with' = düşünmek, sindirmek (mecaz). Olgun + öz farkındalık.",
        },
        {
          q: "Türk hatası: 'We must talk, very important'",
          options: [
            "Çok formal",
            "Emir + drama tonu = savunmaya iter",
            "Yapısal yanlış",
            "Çok kibar",
          ],
          correct: 1,
          tr_explanation:
            "'Must talk' = emir. 'Very important' = drama. Modern: davet + bağlam.",
        },
      ],
    },
  ],
};

export const flirtDeep_5: BundledLesson = {
  id: "flirt.deep.5",
  skill_id: "flirt.firstdate",
  index: 5,
  title: "Hesap Bolusmesi — Turk Erkek/Kadin Dinamigi",
  description: "Hesap geldi. Turk kulturu vs Bati kulturu farki yonet — odeme dansi.",
  estimated_minutes: 6,
  exercises: [
    {
      id: "ex.fd5.1",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "B2",
      word_or_phrase: "split the bill",
      tr_translation: "Hesabi bolmek (Bati'da default beklenti)",
      example: "Should we split the bill or get it next time?",
      example_tr: "Hesabi bolelim mi, yoksa sen sonraki sefer mi alirsin?",
    },
    {
      id: "ex.fd5.2",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B2",
      word_or_phrase: "I've got this one",
      tr_translation: "Bunu ben hallederim (zarif yon, kibar ustlenme)",
      example: "Please — I've got this one. Next round's on you.",
      example_tr: "Lutfen — bunu ben aliyorum. Sonraki sende.",
    },
    {
      id: "ex.fd5.vt2",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B2",
      word_or_phrase: "next round's on you",
      tr_translation: "Sonraki sende (sira ile odeme kalibi)",
      example: "Deal — next round's on you, then.",
      example_tr: "Tamam — o zaman sonraki sende.",
    },
    {
      id: "ex.fd5.vt3",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "my treat",
      tr_translation: "Benden olsun (jest kalibi)",
      example: "Don't even reach for your wallet — my treat tonight.",
      example_tr: "Cuzdanini cikarma bile — bu aksam benden.",
    },
    {
      id: "ex.fd5.vt4",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B2",
      word_or_phrase: "go halves",
      tr_translation: "Yari yariya bolmek (alternatif kalip)",
      example: "Easier if we just go halves and skip the math.",
      example_tr: "Yari yariya bolup hesabi karistirmasak daha kolay.",
    },
    {
      id: "ex.fd5.vt5",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B2",
      word_or_phrase: "it's a Turkish thing",
      tr_translation: "Turk adetidir (kulturel aciklama)",
      example: "Sorry — it's a Turkish thing. We don't really split.",
      example_tr: "Pardon — bu Turk adeti. Pek bolmeyiz.",
    },
    {
      id: "ex.fd5.3",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description: "Ilk randevu bitti. Hesap geldi. Hem Turk yetisini hem Bati esitligini koru.",
      npc_role: "Date",
      setting: "End of coffee date, bill arrives",
      turns: [
        {
          speaker: "npc",
          message: "Okay so the bill's here. Want to just split it?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(honestly |actually )(let me |i'?d like to )(get this one|take this one)",
            "(please |if it'?s okay )— (i'?ve got it|i'?ve got this)",
            "(it'?s only fair |since i suggested )— (i'?ll cover this|let me cover)",
            "(next round'?s on you|you can get the next one) — (deal\\?|fair\\?)",
            "(i'?d feel weird |it'?d feel weird )not (covering|getting it) — (turkish thing|how i was raised)",
            "(let me |allow me to )(get it|cover this)",
          ],
          model_answers: ["Honestly, let me get this one. Next round's on you."],
          hint_tr: "Turk yetisi: 'Honestly, let me get this one. Next round's on you.'",
        },
        {
          speaker: "npc",
          message: "Are you sure? I'm happy to split — I don't want you to feel like you have to.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i know |i hear you )— (genuinely want to|i actually want to)",
            "(not a have.?to thing|it'?s not obligation) — (it'?s a |genuinely a )(turkish thing|how i grew up)",
            "(if it makes you uncomfortable |if it'?s weird )we can split — (but i'?d love to|but i prefer)",
            "(call it |consider it )(my treat|on me) — (and you can get next time|you owe me next)",
            "(my mom would |my grandma would )(disown me|kill me) if i didn'?t",
            "(it'?s genuine |it'?s sincere )— (not a thing|no expectations)",
          ],
          model_answers: ["It's a Turkish thing — but if it makes you uncomfortable we can split."],
          hint_tr: "Aciklama + alternatif: 'It's a Turkish thing — but if it makes you uncomfortable we can split.'",
        },
        {
          speaker: "npc",
          message: "Hahaha okay — Turkish grandma trumps Western feminism. I'll let you have this one. But I'm getting next time.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(deal |done |sold )",
            "(noted |officially noted )— (next time'?s on you|round two is yours)",
            "(consider it |consider that )(locked in|a promise)",
            "(my grandma thanks you|nene approves)",
            "(setting a precedent |that'?s a precedent )(i'?m happy with|i can live with)",
            "(perfect — |i'?ll hold you to that)",
          ],
          model_answers: ["Deal — next time's on you. Officially noted."],
          hint_tr: "Kabul + ileri: 'Deal — next time's on you. Officially noted.'",
        },
        {
          speaker: "npc",
          message: "Speaking of next time — same place? Different place? You pick.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(let'?s |i want to )(try somewhere new|do somewhere different)",
            "(there'?s a place |i know a spot )(i'?ve been wanting to try)",
            "(your pick this time|you choose) — (since i'?m paying|since i picked this)",
            "(dinner |something else )(this time|next round)",
            "(let'?s actually |maybe we )(make it dinner|do dinner)",
            "(open to suggestions|i'?ll trust your taste)",
          ],
          model_answers: ["Let's try somewhere new — maybe dinner this time?"],
          hint_tr: "Sonraki adim: 'Let's try somewhere new — maybe dinner this time?'",
        },
        {
          speaker: "npc",
          message: "Dinner upgrade — I see we're escalating. I'm in.",
        },
      ],
    },
    {
      id: "ex.fd5.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      cefr_band: "B1",
      template: "I want to ___ with you about ___ — ___?",
      slots: [
        { accepted: ["talk honestly", "be open", "share something", "have a real conversation"] },
        { accepted: ["this", "where we're at", "how I'm feeling", "what's going on"] },
        { accepted: ["is now a good time", "can we sit down for a bit", "are you up for it", "would that be okay"] },
      ],
      tr_hint:
        "Önemli konu açma kalıbı: niyet + konu + saygılı zaman sorusu. 'Hesap Bolusmesi — Turk Erkek/Kadin Dinamigi' bağlamında — Türk öğrenci direkt konuya girer; bu sağlam ilk cümle değil. Yumuşatma + zaman kontrolü = saygılı + güvenli alan.",
      example_filled:
        "I want to talk honestly with you about where we're at — is now a good time?",
    },
    {
      id: "ex.fd5.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      cefr_band: "B1",
      turns: [
        { speaker: "npc", text: "What's on your mind?" },
        { speaker: "user" },
        { speaker: "npc", text: "Okay — I'm listening." },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(been (thinking|sitting) with|wanted to talk about)",
        "(might sound|this might sound) (.+)",
        "(want to (open up|be honest|share))",
        "(no pressure|just|honestly) (.+)",
        "(can we|could we) (.+)",
      ],
      tr_hint:
        "Konuyu açma — yumuşatma + dürüst niyet. 'Hesap Bolusmesi — Turk Erkek/Kadin Dinamigi' senaryosunda 'Been thinking about us — wanted to be honest. Can we talk?' tarzı.",
      ideal_answer:
        "Been thinking about something — want to be honest with you. Can we talk through it?",
    },
    {
      id: "ex.fd5.lr1",
      type: "listen_respond",
      difficulty: 3,
      cefr_band: "B1",
      npc_line: "How are you actually feeling about this?",
      accepted_patterns: [
        "(honestly|truthfully) (.+) (good|complicated|mixed)",
        "(part of me|some of me) (.+)",
        "(been (processing|sitting with|figuring out))",
        "(still working through|day by day)",
        "(grateful (you asked|for the space))",
      ],
      think_seconds: 3,
      tr_hint:
        "Dürüst + olgun duygu paylaşımı. 'Hesap Bolusmesi — Turk Erkek/Kadin Dinamigi' bağlamında. Türk öğrenci 'fine' der; bunu yapma; SPESİFİK + dürüst.",
      ideal_response:
        "Honestly? Mixed — still processing parts of it. Day by day.",
    },
    {
      id: "ex.fd5.tt1",
      type: "thinking_trap",
      difficulty: 3,
      cefr_band: "B1",
      tr_thought: "Konuşmamız lazım, çok önemli",
      wrong_en: "We must talk, very important.",
      right_en: "I'd love to talk something through with you — is now a good time?",
      why_tr:
        "Türk öğrenci 'konuşmamız lazım + önemli' kalıbını birebir çevirir = emir tonu + 'must' baskı yaratır + 'very important' dramatik. 'Hesap Bolusmesi — Turk Erkek/Kadin Dinamigi' gibi hassas konuda yumuşatma şart: 'I'd love to talk' (davet) + 'is now a good time' (saygılı zaman kontrolü).",
    },
    {
      id: "ex.fd5.rq1",
      type: "recall_quiz",
      difficulty: 3,
      cefr_band: "B1",
      items: [
        {
          q: "Önemli konuyu açarken en olgun yaklaşım?",
          options: [
            "'We must talk' (emir)",
            "'I'd love to talk — good time?' (davet + saygı)",
            "Sus, bekle",
            "Direkt konuya gir",
          ],
          correct: 1,
          tr_explanation:
            "Davet + zaman kontrolü = saygılı + güvenli alan. Emir = baskı = savunmaya iter.",
        },
        {
          q: "Karşı taraf 'how are you feeling?' sorduğunda?",
          options: [
            "Tek kelime 'fine'",
            "Spesifik + dürüst + 'still processing'",
            "Yalan",
            "Konu değiştir",
          ],
          correct: 1,
          tr_explanation:
            "'Fine' = kapalı kapı. Modern dating: spesifik duygu paylaşımı = bağ kurma.",
        },
        {
          q: "'Day by day' kalıbı:",
          options: [
            "Günden güne (zaman içinde)",
            "Her gün ayrı",
            "Yapısal yanlış",
            "Hızla",
          ],
          correct: 0,
          tr_explanation:
            "'Day by day' = adım adım, zamanla. Zor süreçleri işlerken sağlıklı.",
        },
        {
          q: "'Been sitting with something' anlamı?",
          options: [
            "Bir şeyle oturmak",
            "Bir konuyu içselleştirmek/üzerinde düşünmek",
            "Beklemek",
            "Yapısal yanlış",
          ],
          correct: 1,
          tr_explanation:
            "'Sitting with' = düşünmek, sindirmek (mecaz). Olgun + öz farkındalık.",
        },
        {
          q: "Türk hatası: 'We must talk, very important'",
          options: [
            "Çok formal",
            "Emir + drama tonu = savunmaya iter",
            "Yapısal yanlış",
            "Çok kibar",
          ],
          correct: 1,
          tr_explanation:
            "'Must talk' = emir. 'Very important' = drama. Modern: davet + bağlam.",
        },
      ],
    },
  ],
};

export const flirtDeep_6: BundledLesson = {
  id: "flirt.deep.6",
  skill_id: "flirt.firstdate",
  index: 6,
  title: "Ilk Randevu Bitisi — Opucuk Kararsizligi",
  description: "Cafe disinda durdunuz. Opucuk anini oku — fasizini at, geri cekil veya net oner.",
  estimated_minutes: 6,
  exercises: [
    {
      id: "ex.fd6.1",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B2",
      word_or_phrase: "I had a really good time",
      tr_translation: "Cok guzel vakit gecirdim (closer signal — opucuk acan kalip)",
      example: "I had a really good time tonight. Genuinely.",
      example_tr: "Bu aksam cok guzel vakit gecirdim. Gercekten.",
    },
    {
      id: "ex.fd6.vt2",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "Can I kiss you",
      tr_translation: "Opebilir miyim (rizali, saygili sorma kalibi)",
      example: "Before you go — can I kiss you?",
      example_tr: "Gitmeden once — opebilir miyim?",
    },
    {
      id: "ex.fd6.vt3",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "was hoping you'd ask",
      tr_translation: "Sormani umuyordum (yumusak onay)",
      example: "Honestly — was hoping you'd ask.",
      example_tr: "Aciklamali — sormani umuyordum.",
    },
    {
      id: "ex.fd6.vt4",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B2",
      word_or_phrase: "before you go",
      tr_translation: "Gitmeden once (durdurma kalibi)",
      example: "Hold on — before you go, can I ask one thing?",
      example_tr: "Dur — gitmeden once bir sey sorabilir miyim?",
    },
    {
      id: "ex.fd6.vt5",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B2",
      word_or_phrase: "text me when you get home",
      tr_translation: "Eve varinca yaz (ilgi sinyali)",
      example: "Text me when you get home — okay?",
      example_tr: "Eve varinca yaz — tamam mi?",
    },
    {
      id: "ex.fd6.2",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description: "Cafe disinda, ayak ayak ustunde duruyorsun. Opucuk ani — oku ve hareket et.",
      npc_role: "Date",
      setting: "Sidewalk outside cafe, end of first date",
      turns: [
        {
          speaker: "npc",
          message: "Okay so — this was really fun. I'm glad we finally did this.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(same here |me too )— (genuinely |honestly )(had a great time|really enjoyed this)",
            "(i had |this was )(such a good|a really good) (time|date)",
            "(way better than |much better than )(i expected|tinder usually goes)",
            "(glad we |so glad we )(stopped texting and met|did this)",
            "(this was |today was )(genuinely fun|the highlight of my week)",
            "(definitely |hundred percent )(want to do this again)",
          ],
          model_answers: ["Same here — had a really good time. Way better than I expected."],
          hint_tr: "Karsilik: 'Same here — had a really good time. Way better than I expected.'",
        },
        {
          speaker: "npc",
          message: "Yeah me too. So uh — which way are you walking?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i'?m |i am )(heading|going) (that way|toward the river|to the metro)",
            "(opposite directions |same direction )— (figures|of course)",
            "(metro'?s |my place is )(that way|just up the street)",
            "(can i walk you |let me walk you )(to the metro|home|partway)",
            "(actually before i go |hold on a second )",
            "(let me ask you something|wait one sec)",
          ],
          model_answers: ["Metro's that way — but actually, before I go..."],
          hint_tr: "Yon ver veya durdur: 'Metro's that way — but actually, before I go...'",
        },
        {
          speaker: "npc",
          message: "Yeah?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(can i |would it be weird if i )kiss you",
            "(is it okay if|would you be okay if) i (kiss you|kissed you)",
            "(i really want to |i'?d really like to )(kiss you|give you a kiss)",
            "(don'?t want to assume |not trying to assume )but (can i kiss you|i want to kiss you)",
            "(this might be |okay this is )(forward|bold) but",
            "(would you |would it be )(weird|okay) if i (leaned in|kissed you)",
          ],
          model_answers: ["Would it be weird if I kissed you?"],
          hint_tr: "Net + saygili: 'Can I kiss you?' veya 'Would it be weird if I kissed you?'",
        },
        {
          speaker: "npc",
          message: "I was hoping you'd ask.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thank god|finally|good)",
            "(was getting |starting to )(nervous|worried) (i misread|over there)",
            "(reading my mind |literally my line )",
            "(okay |alright )(here we go)",
            "(come here|come closer)",
            "(been the longest |the longest )(coffee of my life|two hours)",
          ],
          model_answers: ["Thank god — was starting to overthink it."],
          hint_tr: "Rahatla + an: 'Thank god — was starting to overthink it.'",
        },
        {
          speaker: "npc",
          message: "Okay that was nice. Text me when you get home, weirdo.",
        },
      ],
    },
    {
      id: "ex.fd6.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      cefr_band: "B1",
      template: "I want to ___ with you about ___ — ___?",
      slots: [
        { accepted: ["talk honestly", "be open", "share something", "have a real conversation"] },
        { accepted: ["this", "where we're at", "how I'm feeling", "what's going on"] },
        { accepted: ["is now a good time", "can we sit down for a bit", "are you up for it", "would that be okay"] },
      ],
      tr_hint:
        "Önemli konu açma kalıbı: niyet + konu + saygılı zaman sorusu. 'Ilk Randevu Bitisi — Opucuk Kararsizligi' bağlamında — Türk öğrenci direkt konuya girer; bu sağlam ilk cümle değil. Yumuşatma + zaman kontrolü = saygılı + güvenli alan.",
      example_filled:
        "I want to talk honestly with you about where we're at — is now a good time?",
    },
    {
      id: "ex.fd6.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      cefr_band: "B1",
      turns: [
        { speaker: "npc", text: "What's on your mind?" },
        { speaker: "user" },
        { speaker: "npc", text: "Okay — I'm listening." },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(been (thinking|sitting) with|wanted to talk about)",
        "(might sound|this might sound) (.+)",
        "(want to (open up|be honest|share))",
        "(no pressure|just|honestly) (.+)",
        "(can we|could we) (.+)",
      ],
      tr_hint:
        "Konuyu açma — yumuşatma + dürüst niyet. 'Ilk Randevu Bitisi — Opucuk Kararsizligi' senaryosunda 'Been thinking about us — wanted to be honest. Can we talk?' tarzı.",
      ideal_answer:
        "Been thinking about something — want to be honest with you. Can we talk through it?",
    },
    {
      id: "ex.fd6.lr1",
      type: "listen_respond",
      difficulty: 3,
      cefr_band: "B1",
      npc_line: "How are you actually feeling about this?",
      accepted_patterns: [
        "(honestly|truthfully) (.+) (good|complicated|mixed)",
        "(part of me|some of me) (.+)",
        "(been (processing|sitting with|figuring out))",
        "(still working through|day by day)",
        "(grateful (you asked|for the space))",
      ],
      think_seconds: 3,
      tr_hint:
        "Dürüst + olgun duygu paylaşımı. 'Ilk Randevu Bitisi — Opucuk Kararsizligi' bağlamında. Türk öğrenci 'fine' der; bunu yapma; SPESİFİK + dürüst.",
      ideal_response:
        "Honestly? Mixed — still processing parts of it. Day by day.",
    },
    {
      id: "ex.fd6.tt1",
      type: "thinking_trap",
      difficulty: 3,
      cefr_band: "B1",
      tr_thought: "Konuşmamız lazım, çok önemli",
      wrong_en: "We must talk, very important.",
      right_en: "I'd love to talk something through with you — is now a good time?",
      why_tr:
        "Türk öğrenci 'konuşmamız lazım + önemli' kalıbını birebir çevirir = emir tonu + 'must' baskı yaratır + 'very important' dramatik. 'Ilk Randevu Bitisi — Opucuk Kararsizligi' gibi hassas konuda yumuşatma şart: 'I'd love to talk' (davet) + 'is now a good time' (saygılı zaman kontrolü).",
    },
    {
      id: "ex.fd6.rq1",
      type: "recall_quiz",
      difficulty: 3,
      cefr_band: "B1",
      items: [
        {
          q: "Önemli konuyu açarken en olgun yaklaşım?",
          options: [
            "'We must talk' (emir)",
            "'I'd love to talk — good time?' (davet + saygı)",
            "Sus, bekle",
            "Direkt konuya gir",
          ],
          correct: 1,
          tr_explanation:
            "Davet + zaman kontrolü = saygılı + güvenli alan. Emir = baskı = savunmaya iter.",
        },
        {
          q: "Karşı taraf 'how are you feeling?' sorduğunda?",
          options: [
            "Tek kelime 'fine'",
            "Spesifik + dürüst + 'still processing'",
            "Yalan",
            "Konu değiştir",
          ],
          correct: 1,
          tr_explanation:
            "'Fine' = kapalı kapı. Modern dating: spesifik duygu paylaşımı = bağ kurma.",
        },
        {
          q: "'Day by day' kalıbı:",
          options: [
            "Günden güne (zaman içinde)",
            "Her gün ayrı",
            "Yapısal yanlış",
            "Hızla",
          ],
          correct: 0,
          tr_explanation:
            "'Day by day' = adım adım, zamanla. Zor süreçleri işlerken sağlıklı.",
        },
        {
          q: "'Been sitting with something' anlamı?",
          options: [
            "Bir şeyle oturmak",
            "Bir konuyu içselleştirmek/üzerinde düşünmek",
            "Beklemek",
            "Yapısal yanlış",
          ],
          correct: 1,
          tr_explanation:
            "'Sitting with' = düşünmek, sindirmek (mecaz). Olgun + öz farkındalık.",
        },
        {
          q: "Türk hatası: 'We must talk, very important'",
          options: [
            "Çok formal",
            "Emir + drama tonu = savunmaya iter",
            "Yapısal yanlış",
            "Çok kibar",
          ],
          correct: 1,
          tr_explanation:
            "'Must talk' = emir. 'Very important' = drama. Modern: davet + bağlam.",
        },
      ],
    },
  ],
};

export const flirtDeep_7: BundledLesson = {
  id: "flirt.deep.7",
  skill_id: "flirt.firstdate",
  index: 7,
  title: "Ertesi Gun Mesaji — Takip Etiketi",
  description: "Ilk randevu cok iyi gecti. Ertesi gun nasil yazarsin — cok erken/cok gec dengesi.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.fd7.1",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "B2",
      word_or_phrase: "thinking about you",
      tr_translation: "Seni dusunuyorum (yumusak takip — agir degil)",
      example: "Was just thinking about that thing you said yesterday.",
      example_tr: "Dun soyledigin o seyi dusunuyordum.",
    },
    {
      id: "ex.fd7.vt2",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B2",
      word_or_phrase: "not playing it cool",
      tr_translation: "Soguk davranmiyorum (acik niyet sinyali)",
      example: "Not playing it cool — yesterday was actually really fun.",
      example_tr: "Soguk davranmiyorum — dun gercekten cok eglenceliydi.",
    },
    {
      id: "ex.fd7.vt3",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "round two",
      tr_translation: "Ikinci tur (sonraki randevu kalibi)",
      example: "Round two this Friday? Dinner this time.",
      example_tr: "Bu Cuma ikinci tur? Bu sefer aksam yemegi.",
    },
    {
      id: "ex.fd7.vt4",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B2",
      word_or_phrase: "surprise me",
      tr_translation: "Beni sasirt (acik yetkilendirme)",
      example: "You pick the place — surprise me.",
      example_tr: "Mekani sen sec — beni sasirt.",
    },
    {
      id: "ex.fd7.vt5",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B2",
      word_or_phrase: "challenge accepted",
      tr_translation: "Meydan okumayi kabul ettim (eglenceli kabul)",
      example: "Surprise dinner? Challenge accepted.",
      example_tr: "Surpriz yemek? Meydan okumayi kabul ettim.",
    },
    {
      id: "ex.fd7.2",
      type: "roleplay_chat",
      difficulty: 3,
      scenario_description: "Ertesi sabah. Ilk mesaj atmak istiyorsun ama 'over-eager' gozukmek istemiyorsun.",
      npc_role: "Date",
      setting: "Text — morning after first date",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(morning|good morning) — (just wanted to say|wanted to text and say)",
            "(yesterday was |last night was )(actually really fun|the best)",
            "(hey |okay )(quick text |just popping in )to say",
            "(was thinking about |kept thinking about )(that thing|something you said)",
            "(hope your |how'?s your )(morning|day) (going|treating you)",
            "(not playing it cool |i'?m bad at playing cool )— (had fun|had a great time)",
          ],
          model_answers: ["Morning — not playing it cool, yesterday was actually really fun."],
          hint_tr: "Sen baslat: 'Morning — not playing it cool, yesterday was actually really fun.'",
        },
        {
          speaker: "npc",
          message: "Hahaha okay refreshing honestly. Same on my end.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(good — |okay good )was (a bit worried|slightly worried)",
            "(refreshing to hear|nice to hear)",
            "(was wondering if |kind of wondering if )(i misread|i was alone in that)",
            "(glad we'?re on |on the same page)",
            "(so we'?re doing this again |round two then\\?)",
            "(perfect |that'?s a relief )",
          ],
          model_answers: ["Good — was wondering if I misread. So round two?"],
          hint_tr: "Onaylanma: 'Good — was wondering if I misread. So round two?'",
        },
        {
          speaker: "npc",
          message: "Definitely round two. Were you serious about dinner?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(dead serious|hundred percent serious)",
            "(yes — |very much yes )— (i know a place|there'?s a place)",
            "(thursday |friday |saturday )(work|works) (for you)?",
            "(name the day |you pick the day )",
            "(let me think |give me a day )and (i'?ll send options|i'?ll text)",
            "(absolutely — |totally )(this week|next week)",
          ],
          model_answers: ["Dead serious. Thursday or Friday?"],
          hint_tr: "Net onay: 'Dead serious. Thursday or Friday?'",
        },
        {
          speaker: "npc",
          message: "Friday's better. Surprise me on the place?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(pressure'?s on |big pressure )now",
            "(challenge accepted|you got it)",
            "(i'?ll have |i'?ll send )(options by tomorrow|something good)",
            "(any dietary stuff |any allergies )i should know\\?",
            "(trusting me with the choice|big responsibility)",
            "(consider it |officially )(on me|my mission)",
          ],
          model_answers: ["Challenge accepted. Any allergies I should know about?"],
          hint_tr: "Kabul + sor: 'Challenge accepted. Any allergies I should know about?'",
        },
        {
          speaker: "npc",
          message: "Nope, total omnivore. Don't pick a fancy place though — I'm in jeans-mode all week.",
        },
      ],
    },
    {
      id: "ex.fd7.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      cefr_band: "B1",
      template: "I want to ___ with you about ___ — ___?",
      slots: [
        { accepted: ["talk honestly", "be open", "share something", "have a real conversation"] },
        { accepted: ["this", "where we're at", "how I'm feeling", "what's going on"] },
        { accepted: ["is now a good time", "can we sit down for a bit", "are you up for it", "would that be okay"] },
      ],
      tr_hint:
        "Önemli konu açma kalıbı: niyet + konu + saygılı zaman sorusu. 'Ertesi Gun Mesaji — Takip Etiketi' bağlamında — Türk öğrenci direkt konuya girer; bu sağlam ilk cümle değil. Yumuşatma + zaman kontrolü = saygılı + güvenli alan.",
      example_filled:
        "I want to talk honestly with you about where we're at — is now a good time?",
    },
    {
      id: "ex.fd7.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      cefr_band: "B1",
      turns: [
        { speaker: "npc", text: "What's on your mind?" },
        { speaker: "user" },
        { speaker: "npc", text: "Okay — I'm listening." },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(been (thinking|sitting) with|wanted to talk about)",
        "(might sound|this might sound) (.+)",
        "(want to (open up|be honest|share))",
        "(no pressure|just|honestly) (.+)",
        "(can we|could we) (.+)",
      ],
      tr_hint:
        "Konuyu açma — yumuşatma + dürüst niyet. 'Ertesi Gun Mesaji — Takip Etiketi' senaryosunda 'Been thinking about us — wanted to be honest. Can we talk?' tarzı.",
      ideal_answer:
        "Been thinking about something — want to be honest with you. Can we talk through it?",
    },
    {
      id: "ex.fd7.lr1",
      type: "listen_respond",
      difficulty: 3,
      cefr_band: "B1",
      npc_line: "How are you actually feeling about this?",
      accepted_patterns: [
        "(honestly|truthfully) (.+) (good|complicated|mixed)",
        "(part of me|some of me) (.+)",
        "(been (processing|sitting with|figuring out))",
        "(still working through|day by day)",
        "(grateful (you asked|for the space))",
      ],
      think_seconds: 3,
      tr_hint:
        "Dürüst + olgun duygu paylaşımı. 'Ertesi Gun Mesaji — Takip Etiketi' bağlamında. Türk öğrenci 'fine' der; bunu yapma; SPESİFİK + dürüst.",
      ideal_response:
        "Honestly? Mixed — still processing parts of it. Day by day.",
    },
    {
      id: "ex.fd7.tt1",
      type: "thinking_trap",
      difficulty: 3,
      cefr_band: "B1",
      tr_thought: "Konuşmamız lazım, çok önemli",
      wrong_en: "We must talk, very important.",
      right_en: "I'd love to talk something through with you — is now a good time?",
      why_tr:
        "Türk öğrenci 'konuşmamız lazım + önemli' kalıbını birebir çevirir = emir tonu + 'must' baskı yaratır + 'very important' dramatik. 'Ertesi Gun Mesaji — Takip Etiketi' gibi hassas konuda yumuşatma şart: 'I'd love to talk' (davet) + 'is now a good time' (saygılı zaman kontrolü).",
    },
    {
      id: "ex.fd7.rq1",
      type: "recall_quiz",
      difficulty: 3,
      cefr_band: "B1",
      items: [
        {
          q: "Önemli konuyu açarken en olgun yaklaşım?",
          options: [
            "'We must talk' (emir)",
            "'I'd love to talk — good time?' (davet + saygı)",
            "Sus, bekle",
            "Direkt konuya gir",
          ],
          correct: 1,
          tr_explanation:
            "Davet + zaman kontrolü = saygılı + güvenli alan. Emir = baskı = savunmaya iter.",
        },
        {
          q: "Karşı taraf 'how are you feeling?' sorduğunda?",
          options: [
            "Tek kelime 'fine'",
            "Spesifik + dürüst + 'still processing'",
            "Yalan",
            "Konu değiştir",
          ],
          correct: 1,
          tr_explanation:
            "'Fine' = kapalı kapı. Modern dating: spesifik duygu paylaşımı = bağ kurma.",
        },
        {
          q: "'Day by day' kalıbı:",
          options: [
            "Günden güne (zaman içinde)",
            "Her gün ayrı",
            "Yapısal yanlış",
            "Hızla",
          ],
          correct: 0,
          tr_explanation:
            "'Day by day' = adım adım, zamanla. Zor süreçleri işlerken sağlıklı.",
        },
        {
          q: "'Been sitting with something' anlamı?",
          options: [
            "Bir şeyle oturmak",
            "Bir konuyu içselleştirmek/üzerinde düşünmek",
            "Beklemek",
            "Yapısal yanlış",
          ],
          correct: 1,
          tr_explanation:
            "'Sitting with' = düşünmek, sindirmek (mecaz). Olgun + öz farkındalık.",
        },
        {
          q: "Türk hatası: 'We must talk, very important'",
          options: [
            "Çok formal",
            "Emir + drama tonu = savunmaya iter",
            "Yapısal yanlış",
            "Çok kibar",
          ],
          correct: 1,
          tr_explanation:
            "'Must talk' = emir. 'Very important' = drama. Modern: davet + bağlam.",
        },
      ],
    },
  ],
};

export const flirtDeep_8: BundledLesson = {
  id: "flirt.deep.8",
  skill_id: "flirt.firstdate",
  index: 8,
  title: "Cross-Cultural Randevu — Bayrami Anlat",
  description: "Bayram yaklasiyor. Randevuda 'why aren't you home for the holiday?' sorulduginda anlatma.",
  estimated_minutes: 7,
  exercises: [
    {
      id: "ex.fd8.1",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B2",
      word_or_phrase: "religious holiday",
      tr_translation: "Dini bayram (Bati'da nesnel anlatim icin)",
      example: "It's basically our biggest religious holiday.",
      example_tr: "Bizim en buyuk dini bayramimiz.",
    },
    {
      id: "ex.fd8.2",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B2",
      word_or_phrase: "the equivalent of",
      tr_translation: "...in karsiligi, esdegeri (Bati'liya cevirme kalibi)",
      example: "It's kind of the equivalent of Christmas for us — family, food, kids get money.",
      example_tr: "Bizim icin Noel'in karsiligi gibi — aile, yemek, cocuklara para.",
    },
    {
      id: "ex.fd8.vt3",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B2",
      word_or_phrase: "homesick",
      tr_translation: "Ozluyorum (memleket ozlemi)",
      example: "I'm a bit homesick this week — it's Bayram back home.",
      example_tr: "Bu hafta biraz memleketimi ozluyorum — Turkiye'de Bayram.",
    },
    {
      id: "ex.fd8.vt4",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "the whole thing",
      tr_translation: "Tum mesele, butun olay (kapsayici aciklama)",
      example: "Family, food, visits — the whole thing.",
      example_tr: "Aile, yemek, ziyaretler — tum mesele bu.",
    },
    {
      id: "ex.fd8.vt5",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B2",
      word_or_phrase: "in the deep end",
      tr_translation: "Derin sularda (yogun, tam deneyim)",
      example: "Come to the Turkish dinner — but fair warning, you'd be in the deep end.",
      example_tr: "Turk yemegine gel — ama uyari, derin sularda olursun.",
    },
    {
      id: "ex.fd8.vt6",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B2",
      word_or_phrase: "I miss home",
      tr_translation: "Evimi ozluyorum (sade, samimi paylasim)",
      example: "Hit me harder this year — I miss home.",
      example_tr: "Bu yil daha cok vurdu — evimi ozluyorum.",
    },
    {
      id: "ex.fd8.3",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description: "Ikinci randevu, aksam yemegi. Bayram yaklasiyor, evi ozluyorsun.",
      npc_role: "Date",
      setting: "Dinner, second date",
      turns: [
        {
          speaker: "npc",
          message: "You seem a bit distant tonight — everything okay?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yeah |yes )(sorry |sorry — )(just |kind of )(homesick|missing home)",
            "(it'?s |this week is )(bayram|eid|our religious holiday)",
            "(family'?s all together |everyone'?s home )(in turkey|except me)",
            "(don'?t mean to bring |sorry to bring )(the energy down|down the mood)",
            "(holiday week — |big holiday this week — )(makes it harder)",
            "(actually a bit |kind of feeling )homesick (tonight|today)",
          ],
          model_answers: ["Sorry — kind of homesick. It's Bayram this week."],
          hint_tr: "Durust: 'Sorry — kind of homesick. It's Bayram this week.'",
        },
        {
          speaker: "npc",
          message: "Oh — what's Bayram? Tell me.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(so |okay )(it'?s kind of |it'?s basically )(our biggest |the biggest )(religious holiday|family holiday)",
            "(the equivalent of |kind of like )christmas (for muslims|for us)",
            "(three or four days |a few days )(of |where )(family|eating|visiting)",
            "(everyone goes |you visit )(elders|family|grandparents)",
            "(kids get |children get )(money|gifts) — (it'?s a whole thing|big tradition)",
            "(food everywhere |non.?stop eating )(for four days|the whole week)",
          ],
          model_answers: ["It's basically our Christmas — three days of family, food, kids get money."],
          hint_tr: "Anlat: 'It's basically our Christmas — three days of family, food, kids get money.'",
        },
        {
          speaker: "npc",
          message: "That sounds lovely actually. Do you do anything to celebrate here?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(usually |normally )(i call |i video call )my family",
            "(my mom does |my grandma does )(this whole thing |the cooking )(over video)",
            "(there'?s a turkish |a few of us turkish )(group |students )(that does dinner)",
            "(honestly not enough |not as much as i should )— (just feels weird here)",
            "(this year |this time )i'?m (trying to |going to )(make it more special|do something)",
            "(it'?s not the same |never the same )(without family|abroad)",
          ],
          model_answers: ["I video call family. There's a Turkish group here that does dinner."],
          hint_tr: "Aciklama: 'I video call family. There's a Turkish group here that does dinner.'",
        },
        {
          speaker: "npc",
          message: "Would it be weird if I asked to join you for the Turkish dinner thing? I'd love to learn more.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(actually |that'?s |that would be )(really sweet|kind of you)",
            "(yes |i'?d love that )— (you'?d be |they'?d love )to meet you",
            "(fair warning |heads up )— (it gets loud|everyone speaks turkish)",
            "(you'?re |you would be )(officially in the deep end|getting the full experience)",
            "(absolutely |hundred percent )— (i'?ll text you details|when'?s next sunday)",
            "(my friends would |the group would )(adore you|love that)",
          ],
          model_answers: ["That's really sweet — yes, you'd be in the deep end though."],
          hint_tr: "Davet kabul: 'That's really sweet — yes, you'd be in the deep end though.'",
        },
        {
          speaker: "npc",
          message: "Deep end's my favorite end. Send me the details.",
        },
      ],
    },
    {
      id: "ex.fd8.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      cefr_band: "B1",
      template: "I want to ___ with you about ___ — ___?",
      slots: [
        { accepted: ["talk honestly", "be open", "share something", "have a real conversation"] },
        { accepted: ["this", "where we're at", "how I'm feeling", "what's going on"] },
        { accepted: ["is now a good time", "can we sit down for a bit", "are you up for it", "would that be okay"] },
      ],
      tr_hint:
        "Önemli konu açma kalıbı: niyet + konu + saygılı zaman sorusu. 'Cross-Cultural Randevu — Bayrami Anlat' bağlamında — Türk öğrenci direkt konuya girer; bu sağlam ilk cümle değil. Yumuşatma + zaman kontrolü = saygılı + güvenli alan.",
      example_filled:
        "I want to talk honestly with you about where we're at — is now a good time?",
    },
    {
      id: "ex.fd8.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      cefr_band: "B1",
      turns: [
        { speaker: "npc", text: "What's on your mind?" },
        { speaker: "user" },
        { speaker: "npc", text: "Okay — I'm listening." },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(been (thinking|sitting) with|wanted to talk about)",
        "(might sound|this might sound) (.+)",
        "(want to (open up|be honest|share))",
        "(no pressure|just|honestly) (.+)",
        "(can we|could we) (.+)",
      ],
      tr_hint:
        "Konuyu açma — yumuşatma + dürüst niyet. 'Cross-Cultural Randevu — Bayrami Anlat' senaryosunda 'Been thinking about us — wanted to be honest. Can we talk?' tarzı.",
      ideal_answer:
        "Been thinking about something — want to be honest with you. Can we talk through it?",
    },
    {
      id: "ex.fd8.lr1",
      type: "listen_respond",
      difficulty: 3,
      cefr_band: "B1",
      npc_line: "How are you actually feeling about this?",
      accepted_patterns: [
        "(honestly|truthfully) (.+) (good|complicated|mixed)",
        "(part of me|some of me) (.+)",
        "(been (processing|sitting with|figuring out))",
        "(still working through|day by day)",
        "(grateful (you asked|for the space))",
      ],
      think_seconds: 3,
      tr_hint:
        "Dürüst + olgun duygu paylaşımı. 'Cross-Cultural Randevu — Bayrami Anlat' bağlamında. Türk öğrenci 'fine' der; bunu yapma; SPESİFİK + dürüst.",
      ideal_response:
        "Honestly? Mixed — still processing parts of it. Day by day.",
    },
    {
      id: "ex.fd8.tt1",
      type: "thinking_trap",
      difficulty: 3,
      cefr_band: "B1",
      tr_thought: "Konuşmamız lazım, çok önemli",
      wrong_en: "We must talk, very important.",
      right_en: "I'd love to talk something through with you — is now a good time?",
      why_tr:
        "Türk öğrenci 'konuşmamız lazım + önemli' kalıbını birebir çevirir = emir tonu + 'must' baskı yaratır + 'very important' dramatik. 'Cross-Cultural Randevu — Bayrami Anlat' gibi hassas konuda yumuşatma şart: 'I'd love to talk' (davet) + 'is now a good time' (saygılı zaman kontrolü).",
    },
    {
      id: "ex.fd8.rq1",
      type: "recall_quiz",
      difficulty: 3,
      cefr_band: "B1",
      items: [
        {
          q: "Önemli konuyu açarken en olgun yaklaşım?",
          options: [
            "'We must talk' (emir)",
            "'I'd love to talk — good time?' (davet + saygı)",
            "Sus, bekle",
            "Direkt konuya gir",
          ],
          correct: 1,
          tr_explanation:
            "Davet + zaman kontrolü = saygılı + güvenli alan. Emir = baskı = savunmaya iter.",
        },
        {
          q: "Karşı taraf 'how are you feeling?' sorduğunda?",
          options: [
            "Tek kelime 'fine'",
            "Spesifik + dürüst + 'still processing'",
            "Yalan",
            "Konu değiştir",
          ],
          correct: 1,
          tr_explanation:
            "'Fine' = kapalı kapı. Modern dating: spesifik duygu paylaşımı = bağ kurma.",
        },
        {
          q: "'Day by day' kalıbı:",
          options: [
            "Günden güne (zaman içinde)",
            "Her gün ayrı",
            "Yapısal yanlış",
            "Hızla",
          ],
          correct: 0,
          tr_explanation:
            "'Day by day' = adım adım, zamanla. Zor süreçleri işlerken sağlıklı.",
        },
        {
          q: "'Been sitting with something' anlamı?",
          options: [
            "Bir şeyle oturmak",
            "Bir konuyu içselleştirmek/üzerinde düşünmek",
            "Beklemek",
            "Yapısal yanlış",
          ],
          correct: 1,
          tr_explanation:
            "'Sitting with' = düşünmek, sindirmek (mecaz). Olgun + öz farkındalık.",
        },
        {
          q: "Türk hatası: 'We must talk, very important'",
          options: [
            "Çok formal",
            "Emir + drama tonu = savunmaya iter",
            "Yapısal yanlış",
            "Çok kibar",
          ],
          correct: 1,
          tr_explanation:
            "'Must talk' = emir. 'Very important' = drama. Modern: davet + bağlam.",
        },
      ],
    },
  ],
};

export const flirtDeep_9: BundledLesson = {
  id: "flirt.deep.9",
  skill_id: "flirt.firstdate",
  index: 9,
  title: "Arkadas Wingman — Grup Randevusu",
  description: "Randevuya gidiyorsun, arkadasin 'kisaca ugrayim' deyip masaya dahil oldu.",
  estimated_minutes: 6,
  exercises: [
    {
      id: "ex.fd9.1",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B2",
      word_or_phrase: "third-wheel",
      tr_translation: "Ucuncu tekerlek (ciftin yaninda tek olan)",
      example: "Sorry to third-wheel — I'll only stay for one drink.",
      example_tr: "Ucuncu tekerlek olduguma uzgunum — sadece bir icki kalirim.",
    },
    {
      id: "ex.fd9.vt2",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B2",
      word_or_phrase: "best behavior",
      tr_translation: "En iyi davranis (uyari kalibi)",
      example: "Emre — best behavior tonight, please.",
      example_tr: "Emre — bu aksam en iyi davranis lutfen.",
    },
    {
      id: "ex.fd9.vt3",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "crashed the date",
      tr_translation: "Randevuyu basti (davetsiz katilim)",
      example: "He literally crashed the date — I had no warning.",
      example_tr: "Resmen randevuyu basti — hic haberim yoktu.",
    },
    {
      id: "ex.fd9.vt4",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B2",
      word_or_phrase: "consider yourself warned",
      tr_translation: "Uyarildigini farzet (sakali tehdit)",
      example: "Sure, meet my friend — but consider yourself warned.",
      example_tr: "Tabi arkadasimla tanis — ama uyarildigini farzet.",
    },
    {
      id: "ex.fd9.vt5",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B2",
      word_or_phrase: "swoop in",
      tr_translation: "Hizla katilmak (kurtarma sinyali)",
      example: "If it gets weird, swoop in and pull me away.",
      example_tr: "Tuhaflasirsa, hizla gel ve beni cek.",
    },
    {
      id: "ex.fd9.2",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description: "Bar'da randevudasin. Arkadasin Emre 'bes dakika' deyip oturdu. Date'i tanitiyorsun.",
      npc_role: "Date",
      setting: "Bar, friend interrupts date",
      turns: [
        {
          speaker: "npc",
          message: "Wait — is that your friend? Did you call him?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(no |i swear no )— (he literally |he just )(showed up|appeared)",
            "(this is so |this is genuinely )(not planned|random)",
            "(emre |that'?s emre — )(he texts me he'?s nearby|claims he was passing)",
            "(i promise this is not |swear this isn'?t )a setup",
            "(give me one sec |let me deal with this)",
            "(turkish friend group thing |my friends do this )",
          ],
          model_answers: ["I swear no — he literally just showed up. Give me one sec."],
          hint_tr: "Soruyu cevapla: 'I swear no — he literally just showed up. Give me one sec.'",
        },
        {
          speaker: "npc",
          message: "Haha okay — invite him over. I want to meet the friends.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(you sure |are you sure )\\?",
            "(brave |bold of you )— (you don'?t know what you'?re signing up for)",
            "(emre come |over here — meet )(emre|my friend)",
            "(okay |alright )— (consider yourself warned|on your head be it)",
            "(this is your call|remember you asked for this)",
            "(welcome to the |entering the )(turkish friend zone|chaos)",
          ],
          model_answers: ["You sure? Consider yourself warned."],
          hint_tr: "Onayla + uyar: 'You sure? Consider yourself warned.'",
        },
        {
          speaker: "npc",
          message: "I can handle it. Bring him over.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(emre this is |meet )(\\w+) — (we'?re on a date|first proper date)",
            "(so |alright )introductions",
            "(she'?s heard a |she'?s aware about )(few stories|some things) about you",
            "(behave |best behavior )(please)",
            "(she invited you |she wanted to meet you )— (don'?t make me regret it)",
            "(\\w+) (this is emre|this is the chaos friend i mentioned)",
          ],
          model_answers: ["Emre — meet [name]. Best behavior please."],
          hint_tr: "Tanit: 'Emre — meet [name]. Best behavior please.'",
        },
        {
          speaker: "npc",
          message: "(After 10 minutes of fun chaos) Okay your friend is hilarious — but he's eating your fries.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(emre |bro )— (the fries|those are ours)",
            "(every single time |classic emre )",
            "(this is exactly why |this is why )(i didn'?t invite him|we don'?t bring him)",
            "(at least one of us |you'?re lucky )(was watching|noticed)",
            "(thank you for the |i need a witness |finally an ally )",
            "(rules — one bite then leave|new rule for next time)",
          ],
          model_answers: ["Classic Emre — those are MY fries."],
          hint_tr: "Sakaya gir: 'Classic Emre — those are MY fries.'",
        },
        {
          speaker: "npc",
          message: "Okay one more round and then we kick him out — deal?",
        },
      ],
    },
    {
      id: "ex.fd9.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      cefr_band: "B1",
      template: "I want to ___ with you about ___ — ___?",
      slots: [
        { accepted: ["talk honestly", "be open", "share something", "have a real conversation"] },
        { accepted: ["this", "where we're at", "how I'm feeling", "what's going on"] },
        { accepted: ["is now a good time", "can we sit down for a bit", "are you up for it", "would that be okay"] },
      ],
      tr_hint:
        "Önemli konu açma kalıbı: niyet + konu + saygılı zaman sorusu. 'Arkadas Wingman — Grup Randevusu' bağlamında — Türk öğrenci direkt konuya girer; bu sağlam ilk cümle değil. Yumuşatma + zaman kontrolü = saygılı + güvenli alan.",
      example_filled:
        "I want to talk honestly with you about where we're at — is now a good time?",
    },
    {
      id: "ex.fd9.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      cefr_band: "B1",
      turns: [
        { speaker: "npc", text: "What's on your mind?" },
        { speaker: "user" },
        { speaker: "npc", text: "Okay — I'm listening." },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(been (thinking|sitting) with|wanted to talk about)",
        "(might sound|this might sound) (.+)",
        "(want to (open up|be honest|share))",
        "(no pressure|just|honestly) (.+)",
        "(can we|could we) (.+)",
      ],
      tr_hint:
        "Konuyu açma — yumuşatma + dürüst niyet. 'Arkadas Wingman — Grup Randevusu' senaryosunda 'Been thinking about us — wanted to be honest. Can we talk?' tarzı.",
      ideal_answer:
        "Been thinking about something — want to be honest with you. Can we talk through it?",
    },
    {
      id: "ex.fd9.lr1",
      type: "listen_respond",
      difficulty: 3,
      cefr_band: "B1",
      npc_line: "How are you actually feeling about this?",
      accepted_patterns: [
        "(honestly|truthfully) (.+) (good|complicated|mixed)",
        "(part of me|some of me) (.+)",
        "(been (processing|sitting with|figuring out))",
        "(still working through|day by day)",
        "(grateful (you asked|for the space))",
      ],
      think_seconds: 3,
      tr_hint:
        "Dürüst + olgun duygu paylaşımı. 'Arkadas Wingman — Grup Randevusu' bağlamında. Türk öğrenci 'fine' der; bunu yapma; SPESİFİK + dürüst.",
      ideal_response:
        "Honestly? Mixed — still processing parts of it. Day by day.",
    },
    {
      id: "ex.fd9.tt1",
      type: "thinking_trap",
      difficulty: 3,
      cefr_band: "B1",
      tr_thought: "Konuşmamız lazım, çok önemli",
      wrong_en: "We must talk, very important.",
      right_en: "I'd love to talk something through with you — is now a good time?",
      why_tr:
        "Türk öğrenci 'konuşmamız lazım + önemli' kalıbını birebir çevirir = emir tonu + 'must' baskı yaratır + 'very important' dramatik. 'Arkadas Wingman — Grup Randevusu' gibi hassas konuda yumuşatma şart: 'I'd love to talk' (davet) + 'is now a good time' (saygılı zaman kontrolü).",
    },
    {
      id: "ex.fd9.rq1",
      type: "recall_quiz",
      difficulty: 3,
      cefr_band: "B1",
      items: [
        {
          q: "Önemli konuyu açarken en olgun yaklaşım?",
          options: [
            "'We must talk' (emir)",
            "'I'd love to talk — good time?' (davet + saygı)",
            "Sus, bekle",
            "Direkt konuya gir",
          ],
          correct: 1,
          tr_explanation:
            "Davet + zaman kontrolü = saygılı + güvenli alan. Emir = baskı = savunmaya iter.",
        },
        {
          q: "Karşı taraf 'how are you feeling?' sorduğunda?",
          options: [
            "Tek kelime 'fine'",
            "Spesifik + dürüst + 'still processing'",
            "Yalan",
            "Konu değiştir",
          ],
          correct: 1,
          tr_explanation:
            "'Fine' = kapalı kapı. Modern dating: spesifik duygu paylaşımı = bağ kurma.",
        },
        {
          q: "'Day by day' kalıbı:",
          options: [
            "Günden güne (zaman içinde)",
            "Her gün ayrı",
            "Yapısal yanlış",
            "Hızla",
          ],
          correct: 0,
          tr_explanation:
            "'Day by day' = adım adım, zamanla. Zor süreçleri işlerken sağlıklı.",
        },
        {
          q: "'Been sitting with something' anlamı?",
          options: [
            "Bir şeyle oturmak",
            "Bir konuyu içselleştirmek/üzerinde düşünmek",
            "Beklemek",
            "Yapısal yanlış",
          ],
          correct: 1,
          tr_explanation:
            "'Sitting with' = düşünmek, sindirmek (mecaz). Olgun + öz farkındalık.",
        },
        {
          q: "Türk hatası: 'We must talk, very important'",
          options: [
            "Çok formal",
            "Emir + drama tonu = savunmaya iter",
            "Yapısal yanlış",
            "Çok kibar",
          ],
          correct: 1,
          tr_explanation:
            "'Must talk' = emir. 'Very important' = drama. Modern: davet + bağlam.",
        },
      ],
    },
  ],
};

export const flirtDeep_10: BundledLesson = {
  id: "flirt.deep.10",
  skill_id: "flirt.firstdate",
  index: 10,
  title: "Online'dan IRL — Ilk 5 Dakika",
  description: "Bir aydir mesajlasiyorsunuz. Ilk gercek bulusma. Ilk 5 dakika kritik.",
  estimated_minutes: 6,
  exercises: [
    {
      id: "ex.fd10.1",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "B2",
      word_or_phrase: "in person",
      tr_translation: "Yuz yuze, gercek hayatta",
      example: "You look exactly like your photos in person — relief.",
      example_tr: "Gercek hayatta da fotograflarin gibisin — rahatladim.",
    },
    {
      id: "ex.fd10.vt2",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B2",
      word_or_phrase: "hug or handshake",
      tr_translation: "Sarilma mi tokalasma mi (ilk an karari)",
      example: "Hi — quick question: hug or handshake?",
      example_tr: "Merhaba — kisa soru: sarilma mi tokalasma mi?",
    },
    {
      id: "ex.fd10.vt3",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "catfish",
      tr_translation: "Sahte profille kandirmak (online dating klasigi)",
      example: "At least I didn't catfish you — photos are accurate.",
      example_tr: "En azindan seni kandirmadim — fotograflar dogru.",
    },
    {
      id: "ex.fd10.vt4",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B2",
      word_or_phrase: "photos lie",
      tr_translation: "Fotograflar yalan soyler (saka itiraf)",
      example: "Photos lie about height — every single time.",
      example_tr: "Fotograflar boy konusunda yalan soyler — her zaman.",
    },
    {
      id: "ex.fd10.vt5",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B2",
      word_or_phrase: "off to a good start",
      tr_translation: "Iyi baslanmis (heyecanli onay)",
      example: "Okay — we're off to a good start.",
      example_tr: "Tamam — iyi basladik.",
    },
    {
      id: "ex.fd10.2",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description: "Mesajlasmadan IRL'a gectiniz. Cafe disinda gorduniz. Ilk 5 dakika tansiyon yonet.",
      npc_role: "Date",
      setting: "First IRL meet after a month of texting",
      turns: [
        {
          speaker: "npc",
          message: "Oh my god — okay — hi! This is so weird.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(hi |hey )— (yes — |okay )(this is wild|surreal)",
            "(why is this |this is genuinely )(weirder than i expected|so awkward already)",
            "(can i just |should we just )(hug|handshake|do the awkward thing)",
            "(do we hug |hug or handshake )\\?",
            "(you look |you actually look )(like your photos|exactly like i imagined)",
            "(i was nervous |kind of nervous )(walking over here|the whole way)",
          ],
          model_answers: ["Hi — this is genuinely weirder than I expected. Hug or handshake?"],
          hint_tr: "Tansiyonu tan: 'Hi — this is genuinely weirder than I expected. Hug or handshake?'",
        },
        {
          speaker: "npc",
          message: "Definitely hug. Okay — wow — you're shorter than I thought, sorry.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i was about to say |i was gonna say )(the same thing|you'?re taller)",
            "(photos lie |angles are deceptive )",
            "(yeah turkish height |i warned you my height )",
            "(rude |okay rude )— (true though|i'?ll allow it)",
            "(welcome to |this is )(the actual me|the in.?person experience)",
            "(at least i didn'?t |i hope i didn'?t )(catfish you)",
          ],
          model_answers: ["Rude but allowed. Photos lie about height."],
          hint_tr: "Sakaya cevap: 'Rude but allowed. Photos lie about height.'",
        },
        {
          speaker: "npc",
          message: "Hahaha okay we're already off to a great start. Should we go in?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes please |let'?s go )— (i need coffee |i need to sit down )",
            "(after you |lead the way )",
            "(i picked a table |i saved a spot )(by the window|in the corner)",
            "(lead the way |you first )— (i'?ll follow)",
            "(okay let'?s do this |alright let'?s commit )",
            "(coffee will fix |coffee will calm )(the nerves)",
          ],
          model_answers: ["Yes please — I need coffee for the nerves."],
          hint_tr: "Cabuk hareket: 'Yes please — I need coffee for the nerves.'",
        },
        {
          speaker: "npc",
          message: "Wait — before we go in, is this how you imagined it? After a month of texting?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(honestly |genuinely )(better|less weird than expected)",
            "(was worried |i was preparing )for (way more awkward|disaster mode)",
            "(you'?re |you seem )(exactly like your texts|less intimidating in person)",
            "(better |way better )— (texts don'?t do you |you'?re funnier irl)",
            "(this is going |it'?s going )(easier than i thought|smoothly)",
            "(check back in an hour |ask me again later )",
          ],
          model_answers: ["Better than I imagined — was preparing for disaster mode."],
          hint_tr: "Durust: 'Better than I imagined — was preparing for disaster mode.'",
        },
        {
          speaker: "npc",
          message: "Okay that's the right answer. Let's go before I get more nervous.",
        },
      ],
    },
    {
      id: "ex.fd10.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      cefr_band: "B1",
      template: "I want to ___ with you about ___ — ___?",
      slots: [
        { accepted: ["talk honestly", "be open", "share something", "have a real conversation"] },
        { accepted: ["this", "where we're at", "how I'm feeling", "what's going on"] },
        { accepted: ["is now a good time", "can we sit down for a bit", "are you up for it", "would that be okay"] },
      ],
      tr_hint:
        "Önemli konu açma kalıbı: niyet + konu + saygılı zaman sorusu. 'Online'dan IRL — Ilk 5 Dakika' bağlamında — Türk öğrenci direkt konuya girer; bu sağlam ilk cümle değil. Yumuşatma + zaman kontrolü = saygılı + güvenli alan.",
      example_filled:
        "I want to talk honestly with you about where we're at — is now a good time?",
    },
    {
      id: "ex.fd10.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      cefr_band: "B1",
      turns: [
        { speaker: "npc", text: "What's on your mind?" },
        { speaker: "user" },
        { speaker: "npc", text: "Okay — I'm listening." },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(been (thinking|sitting) with|wanted to talk about)",
        "(might sound|this might sound) (.+)",
        "(want to (open up|be honest|share))",
        "(no pressure|just|honestly) (.+)",
        "(can we|could we) (.+)",
      ],
      tr_hint:
        "Konuyu açma — yumuşatma + dürüst niyet. 'Online'dan IRL — Ilk 5 Dakika' senaryosunda 'Been thinking about us — wanted to be honest. Can we talk?' tarzı.",
      ideal_answer:
        "Been thinking about something — want to be honest with you. Can we talk through it?",
    },
    {
      id: "ex.fd10.lr1",
      type: "listen_respond",
      difficulty: 3,
      cefr_band: "B1",
      npc_line: "How are you actually feeling about this?",
      accepted_patterns: [
        "(honestly|truthfully) (.+) (good|complicated|mixed)",
        "(part of me|some of me) (.+)",
        "(been (processing|sitting with|figuring out))",
        "(still working through|day by day)",
        "(grateful (you asked|for the space))",
      ],
      think_seconds: 3,
      tr_hint:
        "Dürüst + olgun duygu paylaşımı. 'Online'dan IRL — Ilk 5 Dakika' bağlamında. Türk öğrenci 'fine' der; bunu yapma; SPESİFİK + dürüst.",
      ideal_response:
        "Honestly? Mixed — still processing parts of it. Day by day.",
    },
    {
      id: "ex.fd10.tt1",
      type: "thinking_trap",
      difficulty: 3,
      cefr_band: "B1",
      tr_thought: "Konuşmamız lazım, çok önemli",
      wrong_en: "We must talk, very important.",
      right_en: "I'd love to talk something through with you — is now a good time?",
      why_tr:
        "Türk öğrenci 'konuşmamız lazım + önemli' kalıbını birebir çevirir = emir tonu + 'must' baskı yaratır + 'very important' dramatik. 'Online'dan IRL — Ilk 5 Dakika' gibi hassas konuda yumuşatma şart: 'I'd love to talk' (davet) + 'is now a good time' (saygılı zaman kontrolü).",
    },
    {
      id: "ex.fd10.rq1",
      type: "recall_quiz",
      difficulty: 3,
      cefr_band: "B1",
      items: [
        {
          q: "Önemli konuyu açarken en olgun yaklaşım?",
          options: [
            "'We must talk' (emir)",
            "'I'd love to talk — good time?' (davet + saygı)",
            "Sus, bekle",
            "Direkt konuya gir",
          ],
          correct: 1,
          tr_explanation:
            "Davet + zaman kontrolü = saygılı + güvenli alan. Emir = baskı = savunmaya iter.",
        },
        {
          q: "Karşı taraf 'how are you feeling?' sorduğunda?",
          options: [
            "Tek kelime 'fine'",
            "Spesifik + dürüst + 'still processing'",
            "Yalan",
            "Konu değiştir",
          ],
          correct: 1,
          tr_explanation:
            "'Fine' = kapalı kapı. Modern dating: spesifik duygu paylaşımı = bağ kurma.",
        },
        {
          q: "'Day by day' kalıbı:",
          options: [
            "Günden güne (zaman içinde)",
            "Her gün ayrı",
            "Yapısal yanlış",
            "Hızla",
          ],
          correct: 0,
          tr_explanation:
            "'Day by day' = adım adım, zamanla. Zor süreçleri işlerken sağlıklı.",
        },
        {
          q: "'Been sitting with something' anlamı?",
          options: [
            "Bir şeyle oturmak",
            "Bir konuyu içselleştirmek/üzerinde düşünmek",
            "Beklemek",
            "Yapısal yanlış",
          ],
          correct: 1,
          tr_explanation:
            "'Sitting with' = düşünmek, sindirmek (mecaz). Olgun + öz farkındalık.",
        },
        {
          q: "Türk hatası: 'We must talk, very important'",
          options: [
            "Çok formal",
            "Emir + drama tonu = savunmaya iter",
            "Yapısal yanlış",
            "Çok kibar",
          ],
          correct: 1,
          tr_explanation:
            "'Must talk' = emir. 'Very important' = drama. Modern: davet + bağlam.",
        },
      ],
    },
  ],
};

// ============================================================
// PHASE 2 — BUILDING INTIMACY (11-20) — skill: flirt.intimacy
// ============================================================

export const flirtDeep_11: BundledLesson = {
  id: "flirt.deep.11",
  skill_id: "flirt.intimacy",
  index: 11,
  title: "Sesli Mesaj Degisimi — Kirilgan Paylasim",
  description: "WhatsApp'ta sesli mesajla kisisel bir sey paylas — derinligi ac.",
  estimated_minutes: 6,
  exercises: [
    {
      id: "ex.fd11.1",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B2",
      word_or_phrase: "open up",
      tr_translation: "Kalbini acmak, paylasmak (icsel)",
      example: "I don't open up like this often, just so you know.",
      example_tr: "Bilesin diye soyluyorum — boyle ic acmam genelde.",
    },
    {
      id: "ex.fd11.vt2",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "voice note",
      tr_translation: "Sesli mesaj (WhatsApp/iMessage kalibi)",
      example: "Sending a voice note — easier than typing this.",
      example_tr: "Sesli mesaj atiyorum — yazmaktan kolay.",
    },
    {
      id: "ex.fd11.vt3",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "C1",
      word_or_phrase: "dropping the ball",
      tr_translation: "Topu dusurmek (sorumluluk kacirmak)",
      example: "I feel like I'm dropping the ball on everything lately.",
      example_tr: "Son zamanlarda her seyde topu dusuruyorum gibi hissediyorum.",
    },
    {
      id: "ex.fd11.vt4",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "not dumping",
      tr_translation: "Yuk degil (samimi paylasim onayi)",
      example: "This isn't dumping — you're allowed to share with me.",
      example_tr: "Bu yuk degil — benimle paylasabilirsin.",
    },
    {
      id: "ex.fd11.vt5",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B2",
      word_or_phrase: "talk it through",
      tr_translation: "Konusarak cozmek (terapotik kalip)",
      example: "Do you want to talk it through, or just vent?",
      example_tr: "Konusarak cozmek mi istiyorsun, yoksa sadece bosanmak mi?",
    },
    {
      id: "ex.fd11.2",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description: "3. randevudan sonra. Voice note geldi — kisisel bir sey paylasti. Sira sende.",
      npc_role: "Partner",
      setting: "WhatsApp voice notes, evening",
      turns: [
        {
          speaker: "npc",
          message: "(voice note) Okay this is gonna sound dramatic but — I've been having a hard time at work lately and I just needed to tell someone who isn't my therapist.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(not dramatic at all|that'?s not dramatic)",
            "(thank you for |grateful that you )(telling me|trusted me with that)",
            "(i'?m glad you |glad you )(opened up|told me)",
            "(do you want to |would you rather )(talk about it|just vent)",
            "(no pressure |zero pressure )(to explain|to share more)",
            "(i'?m here |here for you )— (whatever you need|either way)",
          ],
          model_answers: ["Not dramatic at all. Do you want to talk about it or just vent?"],
          hint_tr: "Onay + alan: 'Not dramatic at all. Do you want to talk about it or just vent?'",
        },
        {
          speaker: "npc",
          message: "(voice note) Honestly just having you listen helps. I feel like I'm dropping the ball on everything.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(you'?re |you are )(not dropping |very much not dropping )(the ball|everything)",
            "(burnout feels |overwhelm feels )(exactly like that|like that)",
            "(can you tell me |what'?s making you feel )(that way|like that)",
            "(it sounds |that sounds )(genuinely exhausting|really heavy)",
            "(i hear you |that makes sense )— (and you'?re not alone in feeling that)",
            "(when you said |the dropping the ball thing )— (i'?ve been there)",
          ],
          model_answers: ["Burnout feels exactly like that. I hear you."],
          hint_tr: "Karsila + dogrulama: 'Burnout feels exactly like that. I hear you.'",
        },
        {
          speaker: "npc",
          message: "(voice note) Sorry — I always feel weird dumping this. Tell me something. How was your day?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(please don'?t apologize|don'?t apologize for that)",
            "(this isn'?t dumping|that wasn'?t dumping)",
            "(my day was |honestly today was )(weird actually|harder than expected)",
            "(since we'?re |okay since we'?re )(opening up|going there)",
            "(can i be |going to be )(honest with you|real for a sec)",
            "(actually — |i had a moment today where i )",
          ],
          model_answers: ["Don't apologize. Since we're opening up — can I be honest with you?"],
          hint_tr: "Karsi paylasim: 'Don't apologize. Since we're opening up — can I be honest with you?'",
        },
        {
          speaker: "npc",
          message: "(voice note) Please. Go.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i miss home |homesick today )(more than usual|in a weird way)",
            "(been thinking about |kept thinking about )(my mom |my family )(all day)",
            "(harder than i admit |i don'?t always say this )but (being abroad is)",
            "(you'?re the first person |you'?re actually the first )(i'?ve said this to)",
            "(i don'?t open up like this |not used to opening up )often",
            "(weird to say out loud |strange admitting this )(but here we are)",
          ],
          model_answers: ["Been homesick today. You're the first person I've said this to here."],
          hint_tr: "Derinlik: 'Been homesick today. You're the first person I've said this to here.'",
        },
        {
          speaker: "npc",
          message: "(voice note) Hey — thank you for telling me. Can I come over?",
        },
      ],
    },
    {
      id: "ex.fd11.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      cefr_band: "B1",
      template: "I want to ___ with you about ___ — ___?",
      slots: [
        { accepted: ["talk honestly", "be open", "share something", "have a real conversation"] },
        { accepted: ["this", "where we're at", "how I'm feeling", "what's going on"] },
        { accepted: ["is now a good time", "can we sit down for a bit", "are you up for it", "would that be okay"] },
      ],
      tr_hint:
        "Önemli konu açma kalıbı: niyet + konu + saygılı zaman sorusu. 'Sesli Mesaj Degisimi — Kirilgan Paylasim' bağlamında — Türk öğrenci direkt konuya girer; bu sağlam ilk cümle değil. Yumuşatma + zaman kontrolü = saygılı + güvenli alan.",
      example_filled:
        "I want to talk honestly with you about where we're at — is now a good time?",
    },
    {
      id: "ex.fd11.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      cefr_band: "B1",
      turns: [
        { speaker: "npc", text: "What's on your mind?" },
        { speaker: "user" },
        { speaker: "npc", text: "Okay — I'm listening." },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(been (thinking|sitting) with|wanted to talk about)",
        "(might sound|this might sound) (.+)",
        "(want to (open up|be honest|share))",
        "(no pressure|just|honestly) (.+)",
        "(can we|could we) (.+)",
      ],
      tr_hint:
        "Konuyu açma — yumuşatma + dürüst niyet. 'Sesli Mesaj Degisimi — Kirilgan Paylasim' senaryosunda 'Been thinking about us — wanted to be honest. Can we talk?' tarzı.",
      ideal_answer:
        "Been thinking about something — want to be honest with you. Can we talk through it?",
    },
    {
      id: "ex.fd11.lr1",
      type: "listen_respond",
      difficulty: 3,
      cefr_band: "B1",
      npc_line: "How are you actually feeling about this?",
      accepted_patterns: [
        "(honestly|truthfully) (.+) (good|complicated|mixed)",
        "(part of me|some of me) (.+)",
        "(been (processing|sitting with|figuring out))",
        "(still working through|day by day)",
        "(grateful (you asked|for the space))",
      ],
      think_seconds: 3,
      tr_hint:
        "Dürüst + olgun duygu paylaşımı. 'Sesli Mesaj Degisimi — Kirilgan Paylasim' bağlamında. Türk öğrenci 'fine' der; bunu yapma; SPESİFİK + dürüst.",
      ideal_response:
        "Honestly? Mixed — still processing parts of it. Day by day.",
    },
    {
      id: "ex.fd11.tt1",
      type: "thinking_trap",
      difficulty: 3,
      cefr_band: "B1",
      tr_thought: "Konuşmamız lazım, çok önemli",
      wrong_en: "We must talk, very important.",
      right_en: "I'd love to talk something through with you — is now a good time?",
      why_tr:
        "Türk öğrenci 'konuşmamız lazım + önemli' kalıbını birebir çevirir = emir tonu + 'must' baskı yaratır + 'very important' dramatik. 'Sesli Mesaj Degisimi — Kirilgan Paylasim' gibi hassas konuda yumuşatma şart: 'I'd love to talk' (davet) + 'is now a good time' (saygılı zaman kontrolü).",
    },
    {
      id: "ex.fd11.rq1",
      type: "recall_quiz",
      difficulty: 3,
      cefr_band: "B1",
      items: [
        {
          q: "Önemli konuyu açarken en olgun yaklaşım?",
          options: [
            "'We must talk' (emir)",
            "'I'd love to talk — good time?' (davet + saygı)",
            "Sus, bekle",
            "Direkt konuya gir",
          ],
          correct: 1,
          tr_explanation:
            "Davet + zaman kontrolü = saygılı + güvenli alan. Emir = baskı = savunmaya iter.",
        },
        {
          q: "Karşı taraf 'how are you feeling?' sorduğunda?",
          options: [
            "Tek kelime 'fine'",
            "Spesifik + dürüst + 'still processing'",
            "Yalan",
            "Konu değiştir",
          ],
          correct: 1,
          tr_explanation:
            "'Fine' = kapalı kapı. Modern dating: spesifik duygu paylaşımı = bağ kurma.",
        },
        {
          q: "'Day by day' kalıbı:",
          options: [
            "Günden güne (zaman içinde)",
            "Her gün ayrı",
            "Yapısal yanlış",
            "Hızla",
          ],
          correct: 0,
          tr_explanation:
            "'Day by day' = adım adım, zamanla. Zor süreçleri işlerken sağlıklı.",
        },
        {
          q: "'Been sitting with something' anlamı?",
          options: [
            "Bir şeyle oturmak",
            "Bir konuyu içselleştirmek/üzerinde düşünmek",
            "Beklemek",
            "Yapısal yanlış",
          ],
          correct: 1,
          tr_explanation:
            "'Sitting with' = düşünmek, sindirmek (mecaz). Olgun + öz farkındalık.",
        },
        {
          q: "Türk hatası: 'We must talk, very important'",
          options: [
            "Çok formal",
            "Emir + drama tonu = savunmaya iter",
            "Yapısal yanlış",
            "Çok kibar",
          ],
          correct: 1,
          tr_explanation:
            "'Must talk' = emir. 'Very important' = drama. Modern: davet + bağlam.",
        },
      ],
    },
  ],
};

export const flirtDeep_12: BundledLesson = {
  id: "flirt.deep.12",
  skill_id: "flirt.intimacy",
  index: 12,
  title: "Eski Iliskileri Paylasma",
  description: "Konu ondan acildi — eski iliskini ne kadar paylasacaksin, ne kadar saklayacaksin.",
  estimated_minutes: 6,
  exercises: [
    {
      id: "ex.fd12.1",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B2",
      word_or_phrase: "long-term",
      tr_translation: "Uzun donemli, ciddi (iliski kategorisi)",
      example: "It was long-term — we were together for four years.",
      example_tr: "Uzun donemliydi — dort yil birlikteydik.",
    },
    {
      id: "ex.fd12.vt2",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "C1",
      word_or_phrase: "grew apart",
      tr_translation: "Birbirimizden uzaklasik (drama yok ayrilik kalibi)",
      example: "No drama — we just grew apart.",
      example_tr: "Drama yok — sadece birbirimizden uzaklastik.",
    },
    {
      id: "ex.fd12.vt3",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "clean break",
      tr_translation: "Net kopus (saglikli son kalibi)",
      example: "We agreed on a clean break — no checking in.",
      example_tr: "Net kopusta anlastik — kontrole gerek yok.",
    },
    {
      id: "ex.fd12.vt4",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "did the work",
      tr_translation: "Calismamayi yaptim (terapi/kisisel gelisim sinyali)",
      example: "I did the work after — therapy, time, all of it.",
      example_tr: "Sonrasinda calismami yaptim — terapi, zaman, hepsi.",
    },
    {
      id: "ex.fd12.vt5",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "C1",
      word_or_phrase: "part of my story",
      tr_translation: "Hikayemin bir parcasi (olgun kabul)",
      example: "She's part of my story — not someone I avoid talking about.",
      example_tr: "O hikayemin bir parcasi — bahsetmekten kacindigim biri degil.",
    },
    {
      id: "ex.fd12.2",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description: "Yatakta yatip konusuyorsunuz. Soru geldi: 'Daha onceki ciddi iliskin?'",
      npc_role: "Partner",
      setting: "In bed, late-night conversation",
      turns: [
        {
          speaker: "npc",
          message: "Can I ask something? What was your last serious relationship like?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yeah |sure )— (you can ask anything|happy to talk about it)",
            "(let me think |okay where do i start )",
            "(she was |it was )(my college girlfriend|long term — four years)",
            "(it was |it was honestly )(my first real relationship|a long one)",
            "(ended |we ended )(a year before i moved here|two years ago)",
            "(can i be |going to be )(honest about it|real)",
          ],
          model_answers: ["Yeah, you can ask. It was four years — ended before I moved."],
          hint_tr: "Acik baslama: 'Yeah, you can ask. It was four years — ended before I moved.'",
        },
        {
          speaker: "npc",
          message: "Four years is long. What ended it?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(honestly |truthfully )(we grew apart|different paths)",
            "(she wanted to stay |i wanted to leave )(turkey|home) (and we couldn'?t agree)",
            "(it wasn'?t a |no big )(blowup|catastrophe) — (slow fade|gradual)",
            "(we still |we wanted )different (lives|things)",
            "(no drama |no cheating )— (just timing|just life)",
            "(by the end |toward the end )(we were more roommates|like friends)",
          ],
          model_answers: ["We grew apart — different paths. No drama."],
          hint_tr: "Sebep ver, drama yok: 'We grew apart — different paths. No drama.'",
        },
        {
          speaker: "npc",
          message: "Do you still talk?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(not anymore |not for over a year )",
            "(we tried |we did )(the friends thing|staying friends) — (didn'?t work|wasn'?t healthy)",
            "(occasional |sometimes a )(birthday text|happy birthday) — (that'?s it|nothing more)",
            "(clean break |proper closure )— (better for both of us)",
            "(she'?s |she has )(her life|moved on) — (good for her)",
            "(no contact for |it'?s been )(months|a year)",
          ],
          model_answers: ["Not anymore. We tried being friends — didn't work."],
          hint_tr: "Net: 'Not anymore. We tried being friends — didn't work.'",
        },
        {
          speaker: "npc",
          message: "Are you over it? Honestly.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(genuinely |honestly )(yes|over it)",
            "(i did the work |i went to therapy )(after it ended)",
            "(took |it took )(a while|a year) — (but yes)",
            "(if i wasn'?t |if i still wasn'?t i )(wouldn'?t be here|wouldn'?t do this to you)",
            "(thinking about her |she crosses my mind )(rarely now|barely)",
            "(she'?s |it'?s )(part of my story|in the past)",
          ],
          model_answers: ["Honestly yes — did the work. Wouldn't be here if I wasn't."],
          hint_tr: "Durustluk: 'Honestly yes — did the work. Wouldn't be here if I wasn't.'",
        },
        {
          speaker: "npc",
          message: "Thank you for not bullshitting me. Your turn — ask me whatever.",
        },
      ],
    },
    {
      id: "ex.fd12.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      cefr_band: "B1",
      template: "I want to ___ with you about ___ — ___?",
      slots: [
        { accepted: ["talk honestly", "be open", "share something", "have a real conversation"] },
        { accepted: ["this", "where we're at", "how I'm feeling", "what's going on"] },
        { accepted: ["is now a good time", "can we sit down for a bit", "are you up for it", "would that be okay"] },
      ],
      tr_hint:
        "Önemli konu açma kalıbı: niyet + konu + saygılı zaman sorusu. 'Eski Iliskileri Paylasma' bağlamında — Türk öğrenci direkt konuya girer; bu sağlam ilk cümle değil. Yumuşatma + zaman kontrolü = saygılı + güvenli alan.",
      example_filled:
        "I want to talk honestly with you about where we're at — is now a good time?",
    },
    {
      id: "ex.fd12.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      cefr_band: "B1",
      turns: [
        { speaker: "npc", text: "What's on your mind?" },
        { speaker: "user" },
        { speaker: "npc", text: "Okay — I'm listening." },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(been (thinking|sitting) with|wanted to talk about)",
        "(might sound|this might sound) (.+)",
        "(want to (open up|be honest|share))",
        "(no pressure|just|honestly) (.+)",
        "(can we|could we) (.+)",
      ],
      tr_hint:
        "Konuyu açma — yumuşatma + dürüst niyet. 'Eski Iliskileri Paylasma' senaryosunda 'Been thinking about us — wanted to be honest. Can we talk?' tarzı.",
      ideal_answer:
        "Been thinking about something — want to be honest with you. Can we talk through it?",
    },
    {
      id: "ex.fd12.lr1",
      type: "listen_respond",
      difficulty: 3,
      cefr_band: "B1",
      npc_line: "How are you actually feeling about this?",
      accepted_patterns: [
        "(honestly|truthfully) (.+) (good|complicated|mixed)",
        "(part of me|some of me) (.+)",
        "(been (processing|sitting with|figuring out))",
        "(still working through|day by day)",
        "(grateful (you asked|for the space))",
      ],
      think_seconds: 3,
      tr_hint:
        "Dürüst + olgun duygu paylaşımı. 'Eski Iliskileri Paylasma' bağlamında. Türk öğrenci 'fine' der; bunu yapma; SPESİFİK + dürüst.",
      ideal_response:
        "Honestly? Mixed — still processing parts of it. Day by day.",
    },
    {
      id: "ex.fd12.tt1",
      type: "thinking_trap",
      difficulty: 3,
      cefr_band: "B1",
      tr_thought: "Konuşmamız lazım, çok önemli",
      wrong_en: "We must talk, very important.",
      right_en: "I'd love to talk something through with you — is now a good time?",
      why_tr:
        "Türk öğrenci 'konuşmamız lazım + önemli' kalıbını birebir çevirir = emir tonu + 'must' baskı yaratır + 'very important' dramatik. 'Eski Iliskileri Paylasma' gibi hassas konuda yumuşatma şart: 'I'd love to talk' (davet) + 'is now a good time' (saygılı zaman kontrolü).",
    },
    {
      id: "ex.fd12.rq1",
      type: "recall_quiz",
      difficulty: 3,
      cefr_band: "B1",
      items: [
        {
          q: "Önemli konuyu açarken en olgun yaklaşım?",
          options: [
            "'We must talk' (emir)",
            "'I'd love to talk — good time?' (davet + saygı)",
            "Sus, bekle",
            "Direkt konuya gir",
          ],
          correct: 1,
          tr_explanation:
            "Davet + zaman kontrolü = saygılı + güvenli alan. Emir = baskı = savunmaya iter.",
        },
        {
          q: "Karşı taraf 'how are you feeling?' sorduğunda?",
          options: [
            "Tek kelime 'fine'",
            "Spesifik + dürüst + 'still processing'",
            "Yalan",
            "Konu değiştir",
          ],
          correct: 1,
          tr_explanation:
            "'Fine' = kapalı kapı. Modern dating: spesifik duygu paylaşımı = bağ kurma.",
        },
        {
          q: "'Day by day' kalıbı:",
          options: [
            "Günden güne (zaman içinde)",
            "Her gün ayrı",
            "Yapısal yanlış",
            "Hızla",
          ],
          correct: 0,
          tr_explanation:
            "'Day by day' = adım adım, zamanla. Zor süreçleri işlerken sağlıklı.",
        },
        {
          q: "'Been sitting with something' anlamı?",
          options: [
            "Bir şeyle oturmak",
            "Bir konuyu içselleştirmek/üzerinde düşünmek",
            "Beklemek",
            "Yapısal yanlış",
          ],
          correct: 1,
          tr_explanation:
            "'Sitting with' = düşünmek, sindirmek (mecaz). Olgun + öz farkındalık.",
        },
        {
          q: "Türk hatası: 'We must talk, very important'",
          options: [
            "Çok formal",
            "Emir + drama tonu = savunmaya iter",
            "Yapısal yanlış",
            "Çok kibar",
          ],
          correct: 1,
          tr_explanation:
            "'Must talk' = emir. 'Very important' = drama. Modern: davet + bağlam.",
        },
      ],
    },
  ],
};

export const flirtDeep_13: BundledLesson = {
  id: "flirt.deep.13",
  skill_id: "flirt.intimacy",
  index: 13,
  title: "Aile Konusu — Turk Aile Baglami",
  description: "Aileni anlatiyorsun — Turk aile yapisi vs Bati 'cool with parents' farki.",
  estimated_minutes: 7,
  exercises: [
    {
      id: "ex.fd13.1",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B2",
      word_or_phrase: "close-knit",
      tr_translation: "Sikica bagli, ic ice (aile icin klasik)",
      example: "Turkish families are pretty close-knit — even cousins feel like siblings.",
      example_tr: "Turk aileleri sikica baglidir — kuzenler bile kardes gibi.",
    },
    {
      id: "ex.fd13.2",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B2",
      word_or_phrase: "set in their ways",
      tr_translation: "Aliskanliklarinda inatci (yasli akraba klisesi)",
      example: "My grandparents are set in their ways — bless them.",
      example_tr: "Buyuklerim aliskanliklarinda direnir — kendilerine ozgu.",
    },
    {
      id: "ex.fd13.vt3",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B2",
      word_or_phrase: "family group chat",
      tr_translation: "Aile WhatsApp grubu (Turk klasigi)",
      example: "My family group chat is chaos — twenty messages an hour.",
      example_tr: "Aile grubumda kaos — saatte yirmi mesaj.",
    },
    {
      id: "ex.fd13.vt4",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "sixth sense",
      tr_translation: "Altinci his (anneler ozelligi sakasi)",
      example: "Turkish moms have a sixth sense for relationships.",
      example_tr: "Turk anneleri iliskiler icin altinci hisse sahiptir.",
    },
    {
      id: "ex.fd13.vt5",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "C1",
      word_or_phrase: "overinvolvement",
      tr_translation: "Asiri mudahale (sevgi ile kontrol arasi)",
      example: "We're close to the point of overinvolvement — it's a Turkish thing.",
      example_tr: "Asiri mudahale noktasinda yakiniz — Turk adeti.",
    },
    {
      id: "ex.fd13.vt6",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B2",
      word_or_phrase: "proud out loud, worried in private",
      tr_translation: "Disarida gururlu, icimizde endiseli (Turk anne baba klisesi)",
      example: "Classic Turkish parents — proud out loud, worried in private.",
      example_tr: "Klasik Turk anne baba — disarida gururlu, icimizde endiseli.",
    },
    {
      id: "ex.fd13.3",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description: "Aksam yemeginde. Aile sorusu acildi. Turkce aile yapisini Batili'ya anlat.",
      npc_role: "Partner",
      setting: "Dinner — getting to know each other",
      turns: [
        {
          speaker: "npc",
          message: "So tell me about your family. Are you close?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(very |extremely )(close|close.?knit)",
            "(turkish family thing |it'?s a turkish thing )— (we'?re basically obsessed with each other)",
            "(closer than what i see |closer than most families )(here|in europe)",
            "(we talk |we'?re on a family group chat )(every day|literally daily)",
            "(close in the sense |close to the point )(that boundaries are weird|of overinvolvement)",
            "(yes — |honestly yes — )(in the turkish way)",
          ],
          model_answers: ["Very close-knit — it's a Turkish thing. We talk every day."],
          hint_tr: "Yapilanma anlat: 'Very close-knit — it's a Turkish thing. We talk every day.'",
        },
        {
          speaker: "npc",
          message: "How big is your family — siblings, cousins?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(big — |huge — )(two siblings|three of us)",
            "(\\w+) (siblings|brothers|sisters) and (uncountable |a lot of )cousins",
            "(in turkey cousins |cousins are basically )(act like siblings|treated like siblings)",
            "(my mom has |my dad has )\\w+ (siblings|brothers)",
            "(every family gathering is |it'?s like )(thirty people|chaos)",
            "(i lose count of |genuinely can'?t count )(my cousins)",
          ],
          model_answers: ["Two siblings, uncountable cousins. Cousins are like siblings in Turkey."],
          hint_tr: "Buyuklugu anlat: 'Two siblings, uncountable cousins. Cousins are like siblings in Turkey.'",
        },
        {
          speaker: "npc",
          message: "Sounds chaotic. Are your parents like — supportive of you being abroad?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(mom yes |my mom yes )— (dad took longer|dad'?s coming around)",
            "(supportive but |proud but )(sad i'?m not there)",
            "(typical turkish parents |classic )— (proud out loud, worried in private)",
            "(they call |they video call )(constantly|too much honestly)",
            "(my mom cries |she cries )(every time we hang up)",
            "(supportive |they support me )(but it'?s complicated)",
          ],
          model_answers: ["Mom yes, dad took longer. Classic Turkish — proud out loud, worried in private."],
          hint_tr: "Karma cevap: 'Mom yes, dad took longer. Classic Turkish — proud out loud, worried in private.'",
        },
        {
          speaker: "npc",
          message: "Do they know about us yet?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(my mom |she )(suspects something|has asked)",
            "(she always knows |moms always know )",
            "(not officially |i haven'?t said it )(yet)",
            "(turkish moms have a |they have a )(sixth sense for this)",
            "(my sister |i told my sister )— (she'?s the family spy)",
            "(when do you |is it weird if )(want me to tell them|i tell them soon)",
          ],
          model_answers: ["My mom suspects — she always does. Turkish moms have a sixth sense."],
          hint_tr: "Aile bilgi durumu: 'My mom suspects — she always does. Turkish moms have a sixth sense.'",
        },
        {
          speaker: "npc",
          message: "Okay no pressure — but I'd be curious to meet them someday. Even by video.",
        },
      ],
    },
    {
      id: "ex.fd13.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      cefr_band: "B1",
      template: "I want to ___ with you about ___ — ___?",
      slots: [
        { accepted: ["talk honestly", "be open", "share something", "have a real conversation"] },
        { accepted: ["this", "where we're at", "how I'm feeling", "what's going on"] },
        { accepted: ["is now a good time", "can we sit down for a bit", "are you up for it", "would that be okay"] },
      ],
      tr_hint:
        "Önemli konu açma kalıbı: niyet + konu + saygılı zaman sorusu. 'Aile Konusu — Turk Aile Baglami' bağlamında — Türk öğrenci direkt konuya girer; bu sağlam ilk cümle değil. Yumuşatma + zaman kontrolü = saygılı + güvenli alan.",
      example_filled:
        "I want to talk honestly with you about where we're at — is now a good time?",
    },
    {
      id: "ex.fd13.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      cefr_band: "B1",
      turns: [
        { speaker: "npc", text: "What's on your mind?" },
        { speaker: "user" },
        { speaker: "npc", text: "Okay — I'm listening." },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(been (thinking|sitting) with|wanted to talk about)",
        "(might sound|this might sound) (.+)",
        "(want to (open up|be honest|share))",
        "(no pressure|just|honestly) (.+)",
        "(can we|could we) (.+)",
      ],
      tr_hint:
        "Konuyu açma — yumuşatma + dürüst niyet. 'Aile Konusu — Turk Aile Baglami' senaryosunda 'Been thinking about us — wanted to be honest. Can we talk?' tarzı.",
      ideal_answer:
        "Been thinking about something — want to be honest with you. Can we talk through it?",
    },
    {
      id: "ex.fd13.lr1",
      type: "listen_respond",
      difficulty: 3,
      cefr_band: "B1",
      npc_line: "How are you actually feeling about this?",
      accepted_patterns: [
        "(honestly|truthfully) (.+) (good|complicated|mixed)",
        "(part of me|some of me) (.+)",
        "(been (processing|sitting with|figuring out))",
        "(still working through|day by day)",
        "(grateful (you asked|for the space))",
      ],
      think_seconds: 3,
      tr_hint:
        "Dürüst + olgun duygu paylaşımı. 'Aile Konusu — Turk Aile Baglami' bağlamında. Türk öğrenci 'fine' der; bunu yapma; SPESİFİK + dürüst.",
      ideal_response:
        "Honestly? Mixed — still processing parts of it. Day by day.",
    },
    {
      id: "ex.fd13.tt1",
      type: "thinking_trap",
      difficulty: 3,
      cefr_band: "B1",
      tr_thought: "Konuşmamız lazım, çok önemli",
      wrong_en: "We must talk, very important.",
      right_en: "I'd love to talk something through with you — is now a good time?",
      why_tr:
        "Türk öğrenci 'konuşmamız lazım + önemli' kalıbını birebir çevirir = emir tonu + 'must' baskı yaratır + 'very important' dramatik. 'Aile Konusu — Turk Aile Baglami' gibi hassas konuda yumuşatma şart: 'I'd love to talk' (davet) + 'is now a good time' (saygılı zaman kontrolü).",
    },
    {
      id: "ex.fd13.rq1",
      type: "recall_quiz",
      difficulty: 3,
      cefr_band: "B1",
      items: [
        {
          q: "Önemli konuyu açarken en olgun yaklaşım?",
          options: [
            "'We must talk' (emir)",
            "'I'd love to talk — good time?' (davet + saygı)",
            "Sus, bekle",
            "Direkt konuya gir",
          ],
          correct: 1,
          tr_explanation:
            "Davet + zaman kontrolü = saygılı + güvenli alan. Emir = baskı = savunmaya iter.",
        },
        {
          q: "Karşı taraf 'how are you feeling?' sorduğunda?",
          options: [
            "Tek kelime 'fine'",
            "Spesifik + dürüst + 'still processing'",
            "Yalan",
            "Konu değiştir",
          ],
          correct: 1,
          tr_explanation:
            "'Fine' = kapalı kapı. Modern dating: spesifik duygu paylaşımı = bağ kurma.",
        },
        {
          q: "'Day by day' kalıbı:",
          options: [
            "Günden güne (zaman içinde)",
            "Her gün ayrı",
            "Yapısal yanlış",
            "Hızla",
          ],
          correct: 0,
          tr_explanation:
            "'Day by day' = adım adım, zamanla. Zor süreçleri işlerken sağlıklı.",
        },
        {
          q: "'Been sitting with something' anlamı?",
          options: [
            "Bir şeyle oturmak",
            "Bir konuyu içselleştirmek/üzerinde düşünmek",
            "Beklemek",
            "Yapısal yanlış",
          ],
          correct: 1,
          tr_explanation:
            "'Sitting with' = düşünmek, sindirmek (mecaz). Olgun + öz farkındalık.",
        },
        {
          q: "Türk hatası: 'We must talk, very important'",
          options: [
            "Çok formal",
            "Emir + drama tonu = savunmaya iter",
            "Yapısal yanlış",
            "Çok kibar",
          ],
          correct: 1,
          tr_explanation:
            "'Must talk' = emir. 'Very important' = drama. Modern: davet + bağlam.",
        },
      ],
    },
  ],
};

export const flirtDeep_14: BundledLesson = {
  id: "flirt.deep.14",
  skill_id: "flirt.intimacy",
  index: 14,
  title: "Din Konusu — Hassas Sohbet",
  description: "Erasmus klasik kopukluk: Musluman geleneksel aile vs ateist partner. Saygiyla konus.",
  estimated_minutes: 7,
  exercises: [
    {
      id: "ex.fd14.1",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B2",
      word_or_phrase: "raised Muslim",
      tr_translation: "Musluman olarak buyutuldum (kimlik ifadesi — pratiklik degil)",
      example: "I was raised Muslim, but I'd say I'm more cultural than practicing now.",
      example_tr: "Musluman buyutuldum ama simdi pratikten cok kulturel diyebilirim.",
    },
    {
      id: "ex.fd14.2",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "non-practicing",
      tr_translation: "Pratik etmeyen (inanca uygulamadan)",
      example: "Most of my friends back home are non-practicing.",
      example_tr: "Memleketteki arkadaslarimin cogu pratik etmiyor.",
    },
    {
      id: "ex.fd14.vt3",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "C1",
      word_or_phrase: "culturally Muslim",
      tr_translation: "Kulturel Musluman (kimlik degil pratik degil)",
      example: "I'd say I'm culturally Muslim — Eid matters, daily prayer doesn't.",
      example_tr: "Kulturel Musluman derim — Bayram onemli, gunluk namaz degil.",
    },
    {
      id: "ex.fd14.vt4",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "where you're coming from",
      tr_translation: "Nereden geldigin (perspektif saygisi)",
      example: "I get where you're coming from — and I respect it.",
      example_tr: "Nereden geldigini anliyorum — ve saygi duyuyorum.",
    },
    {
      id: "ex.fd14.vt5",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "C1",
      word_or_phrase: "compatible",
      tr_translation: "Uyumlu (iliski temellerinde)",
      example: "We're more compatible than you'd think on the big stuff.",
      example_tr: "Buyuk konularda dusundugunden daha uyumluyuz.",
    },
    {
      id: "ex.fd14.vt6",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "figure it out",
      tr_translation: "Cozeriz (gelecege guven kalibi)",
      example: "We'll figure it out — together.",
      example_tr: "Cozeriz — birlikte.",
    },
    {
      id: "ex.fd14.3",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description: "Yatakta yatip felsefe konusuyorsunuz. Soru: 'Sen Musluman misin?'",
      npc_role: "Partner",
      setting: "Late-night intimate conversation",
      turns: [
        {
          speaker: "npc",
          message: "Can I ask something maybe sensitive? Are you religious? Like — Muslim?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(not sensitive |happy to talk about it )",
            "(complicated answer |it'?s complicated )honestly",
            "(i was raised muslim |grew up muslim )",
            "(culturally yes |culturally yes — practicing not really )",
            "(somewhere between |it'?s somewhere between )(believer and non.?practicing)",
            "(it'?s a |the answer is )(layered|complicated)",
          ],
          model_answers: ["Not sensitive — complicated though. I was raised Muslim."],
          hint_tr: "Acik baslama: 'Not sensitive — complicated though. I was raised Muslim.'",
        },
        {
          speaker: "npc",
          message: "What does that look like for you day to day?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i don'?t pray |i don'?t practice )(daily|five times)",
            "(i fast |i do ramadan |sometimes during ramadan)",
            "(no alcohol thing |i drink so )— (so not strict)",
            "(i feel it |i connect with it )(culturally|on holidays)",
            "(it shows up |comes back )(around holidays|when family'?s around)",
            "(my mom would say |for my mom )(i'?m muslim — she'?d say i'?m lazy about it)",
          ],
          model_answers: ["I don't pray daily. I fast sometimes. Mostly cultural."],
          hint_tr: "Pratik anlatim: 'I don't pray daily. I fast sometimes. Mostly cultural.'",
        },
        {
          speaker: "npc",
          message: "And does it bother you that I'm — well — atheist?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(honestly |genuinely )(no|not at all)",
            "(half of |most of )(my friends in turkey|the people i know) (are atheist)",
            "(matters more |more important )(how you treat people|that we respect each other)",
            "(it would |would only )bother me if you were (disrespectful|judgmental)",
            "(we'?re |this is )(more compatible than you'?d think)",
            "(been there |i'?ve had this conversation )before — (it'?s fine)",
          ],
          model_answers: ["Genuinely no. Matters more how we treat each other."],
          hint_tr: "Saygiyla yatistir: 'Genuinely no. Matters more how we treat each other.'",
        },
        {
          speaker: "npc",
          message: "Would it bother your family? If they knew?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(my dad |my dad might )(struggle a bit|need time)",
            "(my mom would |she'?d )(care more about kindness|focus on you as a person)",
            "(it depends on |it'?d depend on )(how it'?s framed|how serious we get)",
            "(my generation |younger turks )(don'?t mind|are mostly past it)",
            "(it'?s complicated |it'?d be complicated )if (we got serious|talked marriage)",
            "(honest answer |to be honest )— (yes a little |maybe with my dad)",
          ],
          model_answers: ["Dad might struggle. Mom would care more about you as a person."],
          hint_tr: "Durustce: 'Dad might struggle. Mom would care more about you as a person.'",
        },
        {
          speaker: "npc",
          message: "Okay. Thank you for being honest with me. We'll figure it out, right?",
        },
      ],
    },
    {
      id: "ex.fd14.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      cefr_band: "B1",
      template: "I want to ___ with you about ___ — ___?",
      slots: [
        { accepted: ["talk honestly", "be open", "share something", "have a real conversation"] },
        { accepted: ["this", "where we're at", "how I'm feeling", "what's going on"] },
        { accepted: ["is now a good time", "can we sit down for a bit", "are you up for it", "would that be okay"] },
      ],
      tr_hint:
        "Önemli konu açma kalıbı: niyet + konu + saygılı zaman sorusu. 'Din Konusu — Hassas Sohbet' bağlamında — Türk öğrenci direkt konuya girer; bu sağlam ilk cümle değil. Yumuşatma + zaman kontrolü = saygılı + güvenli alan.",
      example_filled:
        "I want to talk honestly with you about where we're at — is now a good time?",
    },
    {
      id: "ex.fd14.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      cefr_band: "B1",
      turns: [
        { speaker: "npc", text: "What's on your mind?" },
        { speaker: "user" },
        { speaker: "npc", text: "Okay — I'm listening." },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(been (thinking|sitting) with|wanted to talk about)",
        "(might sound|this might sound) (.+)",
        "(want to (open up|be honest|share))",
        "(no pressure|just|honestly) (.+)",
        "(can we|could we) (.+)",
      ],
      tr_hint:
        "Konuyu açma — yumuşatma + dürüst niyet. 'Din Konusu — Hassas Sohbet' senaryosunda 'Been thinking about us — wanted to be honest. Can we talk?' tarzı.",
      ideal_answer:
        "Been thinking about something — want to be honest with you. Can we talk through it?",
    },
    {
      id: "ex.fd14.lr1",
      type: "listen_respond",
      difficulty: 3,
      cefr_band: "B1",
      npc_line: "How are you actually feeling about this?",
      accepted_patterns: [
        "(honestly|truthfully) (.+) (good|complicated|mixed)",
        "(part of me|some of me) (.+)",
        "(been (processing|sitting with|figuring out))",
        "(still working through|day by day)",
        "(grateful (you asked|for the space))",
      ],
      think_seconds: 3,
      tr_hint:
        "Dürüst + olgun duygu paylaşımı. 'Din Konusu — Hassas Sohbet' bağlamında. Türk öğrenci 'fine' der; bunu yapma; SPESİFİK + dürüst.",
      ideal_response:
        "Honestly? Mixed — still processing parts of it. Day by day.",
    },
    {
      id: "ex.fd14.tt1",
      type: "thinking_trap",
      difficulty: 3,
      cefr_band: "B1",
      tr_thought: "Konuşmamız lazım, çok önemli",
      wrong_en: "We must talk, very important.",
      right_en: "I'd love to talk something through with you — is now a good time?",
      why_tr:
        "Türk öğrenci 'konuşmamız lazım + önemli' kalıbını birebir çevirir = emir tonu + 'must' baskı yaratır + 'very important' dramatik. 'Din Konusu — Hassas Sohbet' gibi hassas konuda yumuşatma şart: 'I'd love to talk' (davet) + 'is now a good time' (saygılı zaman kontrolü).",
    },
    {
      id: "ex.fd14.rq1",
      type: "recall_quiz",
      difficulty: 3,
      cefr_band: "B1",
      items: [
        {
          q: "Önemli konuyu açarken en olgun yaklaşım?",
          options: [
            "'We must talk' (emir)",
            "'I'd love to talk — good time?' (davet + saygı)",
            "Sus, bekle",
            "Direkt konuya gir",
          ],
          correct: 1,
          tr_explanation:
            "Davet + zaman kontrolü = saygılı + güvenli alan. Emir = baskı = savunmaya iter.",
        },
        {
          q: "Karşı taraf 'how are you feeling?' sorduğunda?",
          options: [
            "Tek kelime 'fine'",
            "Spesifik + dürüst + 'still processing'",
            "Yalan",
            "Konu değiştir",
          ],
          correct: 1,
          tr_explanation:
            "'Fine' = kapalı kapı. Modern dating: spesifik duygu paylaşımı = bağ kurma.",
        },
        {
          q: "'Day by day' kalıbı:",
          options: [
            "Günden güne (zaman içinde)",
            "Her gün ayrı",
            "Yapısal yanlış",
            "Hızla",
          ],
          correct: 0,
          tr_explanation:
            "'Day by day' = adım adım, zamanla. Zor süreçleri işlerken sağlıklı.",
        },
        {
          q: "'Been sitting with something' anlamı?",
          options: [
            "Bir şeyle oturmak",
            "Bir konuyu içselleştirmek/üzerinde düşünmek",
            "Beklemek",
            "Yapısal yanlış",
          ],
          correct: 1,
          tr_explanation:
            "'Sitting with' = düşünmek, sindirmek (mecaz). Olgun + öz farkındalık.",
        },
        {
          q: "Türk hatası: 'We must talk, very important'",
          options: [
            "Çok formal",
            "Emir + drama tonu = savunmaya iter",
            "Yapısal yanlış",
            "Çok kibar",
          ],
          correct: 1,
          tr_explanation:
            "'Must talk' = emir. 'Very important' = drama. Modern: davet + bağlam.",
        },
      ],
    },
  ],
};

export const flirtDeep_15: BundledLesson = {
  id: "flirt.deep.15",
  skill_id: "flirt.intimacy",
  index: 15,
  title: "Politik Anlasmazlik — Saygiyla Yonet",
  description: "Birader olmadigi belli olan politik bir konu cikti. Saygi cercevesinde kal.",
  estimated_minutes: 6,
  exercises: [
    {
      id: "ex.fd15.1",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "see eye to eye",
      tr_translation: "Ayni gozle bakmak, anlasmak",
      example: "We don't see eye to eye on this, but I respect where you're coming from.",
      example_tr: "Bu konuda hemfikir degiliz ama nereden geldigini anliyorum.",
    },
    {
      id: "ex.fd15.vt2",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "C1",
      word_or_phrase: "push back",
      tr_translation: "Karsi cikmak, gorus belirtmek (saygili itiraz)",
      example: "Can I push back a little? It's more nuanced than that.",
      example_tr: "Biraz karsi cikabilir miyim? Bu daha nuansli bir konu.",
    },
    {
      id: "ex.fd15.vt3",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "C1",
      word_or_phrase: "agree to disagree",
      tr_translation: "Anlasmamakta anlasmak (medeni catisma cozumu)",
      example: "Let's agree to disagree on this one — it's not worth a fight.",
      example_tr: "Bu konuda anlasmamakta anlasalim — kavgaya degmez.",
    },
    {
      id: "ex.fd15.vt4",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "walking on eggshells",
      tr_translation: "Yumurta kabuklari uzerinde yurumek (kacinma sinyali)",
      example: "I don't want either of us walking on eggshells.",
      example_tr: "Iki birimizin de yumurta kabuklari uzerinde yurumesini istemiyorum.",
    },
    {
      id: "ex.fd15.vt5",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "C1",
      word_or_phrase: "land differently",
      tr_translation: "Farkli noktada durmak (saygili gorus ayriligi)",
      example: "We land differently on this — and that's okay.",
      example_tr: "Bu konuda farkli noktada duruyoruz — sorun yok.",
    },
    {
      id: "ex.fd15.2",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description: "Aksam yemeginde haberler acildi. Sert bir politik konu var. Anlasmiyorsunuz.",
      npc_role: "Partner",
      setting: "Dinner, news comes up",
      turns: [
        {
          speaker: "npc",
          message: "I just don't get how anyone can defend the policy on immigration. It's inhumane.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(can i |would you let me )(push back a little|complicate that)",
            "(i hear you |i agree on the human side )but",
            "(it'?s |the issue is )(more complicated|layered) (than that)",
            "(as someone who'?s |speaking as )(an immigrant|been on the other side)",
            "(i don'?t fully agree |i actually see it differently )— (can we talk about it)",
            "(maybe we don'?t see |we might not see )(eye to eye on this)",
          ],
          model_answers: ["Can I push back a little? It's more complicated as someone who's been on the other side."],
          hint_tr: "Esnek itiraz: 'Can I push back a little? It's more complicated as someone who's been on the other side.'",
        },
        {
          speaker: "npc",
          message: "Of course — go.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(the human side i agree |on humanity yes )— (the practical side is harder)",
            "(my view |where i land )is (somewhere in the middle)",
            "(having been |since i'?m here )on a visa myself",
            "(it'?s easy to |the easy thing is to )(simplify it|moralize it)",
            "(integration matters too |both sides have a point )",
            "(the truth is |reality is )somewhere between (both extremes)",
          ],
          model_answers: ["My view's in the middle. Integration matters too, having been a visa person."],
          hint_tr: "Kendi gorusunu anlat: 'My view's in the middle. Integration matters too, having been a visa person.'",
        },
        {
          speaker: "npc",
          message: "Hmm. I see what you mean but I still think the policies are too harsh.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(fair |that'?s fair )",
            "(i hear you |genuinely hear you )",
            "(we might just |maybe we just )(disagree on this|land differently)",
            "(can we both be |both can be )right (a little|to some extent)",
            "(i appreciate that |i respect that )(you care about this)",
            "(this is the |these are the )(conversations i wanted to have with you)",
          ],
          model_answers: ["Fair — we might land differently. I respect that you care about this."],
          hint_tr: "Kabul + saygi: 'Fair — we might land differently. I respect that you care about this.'",
        },
        {
          speaker: "npc",
          message: "Are we okay? I don't want to fight on date night.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(totally okay |we'?re great )",
            "(this wasn'?t |that wasn'?t )a fight",
            "(it'?s good we |i actually like that we can )(talk about hard stuff)",
            "(disagreeing is |healthy disagreement is )(not the same as fighting)",
            "(i'?d be more worried |scarier if we agreed on everything )",
            "(please don'?t walk on |you don'?t need to tiptoe around )(eggshells with me)",
          ],
          model_answers: ["Totally okay — it's good we can talk about hard stuff."],
          hint_tr: "Rahatlat: 'Totally okay — it's good we can talk about hard stuff.'",
        },
        {
          speaker: "npc",
          message: "Same. Okay — change subject. Tell me something stupid.",
        },
      ],
    },
    {
      id: "ex.fd15.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      cefr_band: "B1",
      template: "I want to ___ with you about ___ — ___?",
      slots: [
        { accepted: ["talk honestly", "be open", "share something", "have a real conversation"] },
        { accepted: ["this", "where we're at", "how I'm feeling", "what's going on"] },
        { accepted: ["is now a good time", "can we sit down for a bit", "are you up for it", "would that be okay"] },
      ],
      tr_hint:
        "Önemli konu açma kalıbı: niyet + konu + saygılı zaman sorusu. 'Politik Anlasmazlik — Saygiyla Yonet' bağlamında — Türk öğrenci direkt konuya girer; bu sağlam ilk cümle değil. Yumuşatma + zaman kontrolü = saygılı + güvenli alan.",
      example_filled:
        "I want to talk honestly with you about where we're at — is now a good time?",
    },
    {
      id: "ex.fd15.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      cefr_band: "B1",
      turns: [
        { speaker: "npc", text: "What's on your mind?" },
        { speaker: "user" },
        { speaker: "npc", text: "Okay — I'm listening." },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(been (thinking|sitting) with|wanted to talk about)",
        "(might sound|this might sound) (.+)",
        "(want to (open up|be honest|share))",
        "(no pressure|just|honestly) (.+)",
        "(can we|could we) (.+)",
      ],
      tr_hint:
        "Konuyu açma — yumuşatma + dürüst niyet. 'Politik Anlasmazlik — Saygiyla Yonet' senaryosunda 'Been thinking about us — wanted to be honest. Can we talk?' tarzı.",
      ideal_answer:
        "Been thinking about something — want to be honest with you. Can we talk through it?",
    },
    {
      id: "ex.fd15.lr1",
      type: "listen_respond",
      difficulty: 3,
      cefr_band: "B1",
      npc_line: "How are you actually feeling about this?",
      accepted_patterns: [
        "(honestly|truthfully) (.+) (good|complicated|mixed)",
        "(part of me|some of me) (.+)",
        "(been (processing|sitting with|figuring out))",
        "(still working through|day by day)",
        "(grateful (you asked|for the space))",
      ],
      think_seconds: 3,
      tr_hint:
        "Dürüst + olgun duygu paylaşımı. 'Politik Anlasmazlik — Saygiyla Yonet' bağlamında. Türk öğrenci 'fine' der; bunu yapma; SPESİFİK + dürüst.",
      ideal_response:
        "Honestly? Mixed — still processing parts of it. Day by day.",
    },
    {
      id: "ex.fd15.tt1",
      type: "thinking_trap",
      difficulty: 3,
      cefr_band: "B1",
      tr_thought: "Konuşmamız lazım, çok önemli",
      wrong_en: "We must talk, very important.",
      right_en: "I'd love to talk something through with you — is now a good time?",
      why_tr:
        "Türk öğrenci 'konuşmamız lazım + önemli' kalıbını birebir çevirir = emir tonu + 'must' baskı yaratır + 'very important' dramatik. 'Politik Anlasmazlik — Saygiyla Yonet' gibi hassas konuda yumuşatma şart: 'I'd love to talk' (davet) + 'is now a good time' (saygılı zaman kontrolü).",
    },
    {
      id: "ex.fd15.rq1",
      type: "recall_quiz",
      difficulty: 3,
      cefr_band: "B1",
      items: [
        {
          q: "Önemli konuyu açarken en olgun yaklaşım?",
          options: [
            "'We must talk' (emir)",
            "'I'd love to talk — good time?' (davet + saygı)",
            "Sus, bekle",
            "Direkt konuya gir",
          ],
          correct: 1,
          tr_explanation:
            "Davet + zaman kontrolü = saygılı + güvenli alan. Emir = baskı = savunmaya iter.",
        },
        {
          q: "Karşı taraf 'how are you feeling?' sorduğunda?",
          options: [
            "Tek kelime 'fine'",
            "Spesifik + dürüst + 'still processing'",
            "Yalan",
            "Konu değiştir",
          ],
          correct: 1,
          tr_explanation:
            "'Fine' = kapalı kapı. Modern dating: spesifik duygu paylaşımı = bağ kurma.",
        },
        {
          q: "'Day by day' kalıbı:",
          options: [
            "Günden güne (zaman içinde)",
            "Her gün ayrı",
            "Yapısal yanlış",
            "Hızla",
          ],
          correct: 0,
          tr_explanation:
            "'Day by day' = adım adım, zamanla. Zor süreçleri işlerken sağlıklı.",
        },
        {
          q: "'Been sitting with something' anlamı?",
          options: [
            "Bir şeyle oturmak",
            "Bir konuyu içselleştirmek/üzerinde düşünmek",
            "Beklemek",
            "Yapısal yanlış",
          ],
          correct: 1,
          tr_explanation:
            "'Sitting with' = düşünmek, sindirmek (mecaz). Olgun + öz farkındalık.",
        },
        {
          q: "Türk hatası: 'We must talk, very important'",
          options: [
            "Çok formal",
            "Emir + drama tonu = savunmaya iter",
            "Yapısal yanlış",
            "Çok kibar",
          ],
          correct: 1,
          tr_explanation:
            "'Must talk' = emir. 'Very important' = drama. Modern: davet + bağlam.",
        },
      ],
    },
  ],
};

export const flirtDeep_16: BundledLesson = {
  id: "flirt.deep.16",
  skill_id: "flirt.intimacy",
  index: 16,
  title: "Ilk Geceleme — Sabah Tuhafligi",
  description: "Ilk kez onda kaldin. Sabah uyandin. Ilk dakikalar — kahve veya kapidan ciksana?",
  estimated_minutes: 6,
  exercises: [
    {
      id: "ex.fd16.1",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "B2",
      word_or_phrase: "morning person",
      tr_translation: "Sabahci, sabah ayni canli",
      example: "Fair warning — I'm not exactly a morning person.",
      example_tr: "Uyari: cok sabahci sayilmam.",
    },
    {
      id: "ex.fd16.vt2",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B2",
      word_or_phrase: "groggy",
      tr_translation: "Mahmur, yari uykulu (sabah hali)",
      example: "Sorry I sound groggy — just woke up.",
      example_tr: "Sesim mahmur, uzgunum — yeni uyandim.",
    },
    {
      id: "ex.fd16.vt3",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B2",
      word_or_phrase: "dangerously comfy",
      tr_translation: "Tehlikeli derecede rahat (asiri ovgu kalibi)",
      example: "Your bed is dangerously comfy — I might never leave.",
      example_tr: "Yatakigin tehlikeli derecede rahat — belki hic gitmem.",
    },
    {
      id: "ex.fd16.vt4",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B2",
      word_or_phrase: "did I snore",
      tr_translation: "Horladim mi (sabah utangac sorusu)",
      example: "Be honest — did I snore last night?",
      example_tr: "Durust ol — dun gece horladim mi?",
    },
    {
      id: "ex.fd16.vt5",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B2",
      word_or_phrase: "speaking my love language",
      tr_translation: "Sevgi dilimi konusuyorsun (Gen-Z uzunsanma kalibi)",
      example: "Coffee in bed? You're speaking my love language.",
      example_tr: "Yatakta kahve mi? Sevgi dilimi konusuyorsun.",
    },
    {
      id: "ex.fd16.2",
      type: "roleplay_chat",
      difficulty: 3,
      scenario_description: "Ilk geceleme. Uyaniyorsun, onun yataginda. Ne soylenir?",
      npc_role: "Partner",
      setting: "Their bed, morning after first overnight",
      turns: [
        {
          speaker: "npc",
          message: "Morning. How did you sleep?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(surprisingly |actually )(well|great)",
            "(better than i |slept better than i )(thought i would|expected)",
            "(your bed |this bed )is (way too comfortable|dangerously comfy)",
            "(i don'?t |never )(usually sleep this well|sleep this hard)",
            "(what time is it |how late is it )",
            "(i think i drooled |did i snore )",
          ],
          model_answers: ["Surprisingly well — your bed is dangerously comfy."],
          hint_tr: "Yumusak baslama: 'Surprisingly well — your bed is dangerously comfy.'",
        },
        {
          speaker: "npc",
          message: "Coffee? I make a mean espresso.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes please |coffee yes )",
            "(you'?re |you are )(speaking my love language)",
            "(coffee'?s the |i need coffee to )(only way i become a person)",
            "(big claim |bold claim )— (let'?s test it|prove it)",
            "(fair warning |full disclosure )— (i'?m turkish — i have opinions about coffee)",
            "(you'?re my |you'?ve become my )(favorite host already)",
          ],
          model_answers: ["Yes please. Fair warning — I'm Turkish, I have opinions about coffee."],
          hint_tr: "Kabul + saka: 'Yes please. Fair warning — I'm Turkish, I have opinions about coffee.'",
        },
        {
          speaker: "npc",
          message: "Oh god — Turkish coffee opinions. What am I in for?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(don'?t worry |relax )— (i'?m forgiving|i adapt)",
            "(i drank instant for |my standards dropped in )europe (already|long ago)",
            "(espresso is |espresso passes the )(actually fine|test)",
            "(i'?ve made peace |i made peace )(with western coffee)",
            "(just don'?t put |as long as you don'?t put )(milk in turkish coffee|sugar in it)",
            "(your bar is |my standards now )(very low|on the floor)",
          ],
          model_answers: ["Don't worry — my standards dropped in Europe long ago."],
          hint_tr: "Sakaya gir: 'Don't worry — my standards dropped in Europe long ago.'",
        },
        {
          speaker: "npc",
          message: "Want toast? I have eggs too if you want a proper breakfast.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(eggs sound |yes to eggs )(amazing|great)",
            "(don'?t go to |you don'?t have to go to )(any trouble)",
            "(coffee'?s enough |honestly just coffee )",
            "(i can help |let me help )(if you let me)",
            "(turkish breakfast standards |if you knew turkish breakfast )(you would not offer)",
            "(toast is perfect |toast works )",
          ],
          model_answers: ["Toast works — don't go to any trouble. I can help."],
          hint_tr: "Mutevazi kabul: 'Toast works — don't go to any trouble. I can help.'",
        },
        {
          speaker: "npc",
          message: "Stay in bed five more minutes. I'll yell when it's ready.",
        },
      ],
    },
    {
      id: "ex.fd16.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      cefr_band: "B1",
      template: "I want to ___ with you about ___ — ___?",
      slots: [
        { accepted: ["talk honestly", "be open", "share something", "have a real conversation"] },
        { accepted: ["this", "where we're at", "how I'm feeling", "what's going on"] },
        { accepted: ["is now a good time", "can we sit down for a bit", "are you up for it", "would that be okay"] },
      ],
      tr_hint:
        "Önemli konu açma kalıbı: niyet + konu + saygılı zaman sorusu. 'Ilk Geceleme — Sabah Tuhafligi' bağlamında — Türk öğrenci direkt konuya girer; bu sağlam ilk cümle değil. Yumuşatma + zaman kontrolü = saygılı + güvenli alan.",
      example_filled:
        "I want to talk honestly with you about where we're at — is now a good time?",
    },
    {
      id: "ex.fd16.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      cefr_band: "B1",
      turns: [
        { speaker: "npc", text: "What's on your mind?" },
        { speaker: "user" },
        { speaker: "npc", text: "Okay — I'm listening." },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(been (thinking|sitting) with|wanted to talk about)",
        "(might sound|this might sound) (.+)",
        "(want to (open up|be honest|share))",
        "(no pressure|just|honestly) (.+)",
        "(can we|could we) (.+)",
      ],
      tr_hint:
        "Konuyu açma — yumuşatma + dürüst niyet. 'Ilk Geceleme — Sabah Tuhafligi' senaryosunda 'Been thinking about us — wanted to be honest. Can we talk?' tarzı.",
      ideal_answer:
        "Been thinking about something — want to be honest with you. Can we talk through it?",
    },
    {
      id: "ex.fd16.lr1",
      type: "listen_respond",
      difficulty: 3,
      cefr_band: "B1",
      npc_line: "How are you actually feeling about this?",
      accepted_patterns: [
        "(honestly|truthfully) (.+) (good|complicated|mixed)",
        "(part of me|some of me) (.+)",
        "(been (processing|sitting with|figuring out))",
        "(still working through|day by day)",
        "(grateful (you asked|for the space))",
      ],
      think_seconds: 3,
      tr_hint:
        "Dürüst + olgun duygu paylaşımı. 'Ilk Geceleme — Sabah Tuhafligi' bağlamında. Türk öğrenci 'fine' der; bunu yapma; SPESİFİK + dürüst.",
      ideal_response:
        "Honestly? Mixed — still processing parts of it. Day by day.",
    },
    {
      id: "ex.fd16.tt1",
      type: "thinking_trap",
      difficulty: 3,
      cefr_band: "B1",
      tr_thought: "Konuşmamız lazım, çok önemli",
      wrong_en: "We must talk, very important.",
      right_en: "I'd love to talk something through with you — is now a good time?",
      why_tr:
        "Türk öğrenci 'konuşmamız lazım + önemli' kalıbını birebir çevirir = emir tonu + 'must' baskı yaratır + 'very important' dramatik. 'Ilk Geceleme — Sabah Tuhafligi' gibi hassas konuda yumuşatma şart: 'I'd love to talk' (davet) + 'is now a good time' (saygılı zaman kontrolü).",
    },
    {
      id: "ex.fd16.rq1",
      type: "recall_quiz",
      difficulty: 3,
      cefr_band: "B1",
      items: [
        {
          q: "Önemli konuyu açarken en olgun yaklaşım?",
          options: [
            "'We must talk' (emir)",
            "'I'd love to talk — good time?' (davet + saygı)",
            "Sus, bekle",
            "Direkt konuya gir",
          ],
          correct: 1,
          tr_explanation:
            "Davet + zaman kontrolü = saygılı + güvenli alan. Emir = baskı = savunmaya iter.",
        },
        {
          q: "Karşı taraf 'how are you feeling?' sorduğunda?",
          options: [
            "Tek kelime 'fine'",
            "Spesifik + dürüst + 'still processing'",
            "Yalan",
            "Konu değiştir",
          ],
          correct: 1,
          tr_explanation:
            "'Fine' = kapalı kapı. Modern dating: spesifik duygu paylaşımı = bağ kurma.",
        },
        {
          q: "'Day by day' kalıbı:",
          options: [
            "Günden güne (zaman içinde)",
            "Her gün ayrı",
            "Yapısal yanlış",
            "Hızla",
          ],
          correct: 0,
          tr_explanation:
            "'Day by day' = adım adım, zamanla. Zor süreçleri işlerken sağlıklı.",
        },
        {
          q: "'Been sitting with something' anlamı?",
          options: [
            "Bir şeyle oturmak",
            "Bir konuyu içselleştirmek/üzerinde düşünmek",
            "Beklemek",
            "Yapısal yanlış",
          ],
          correct: 1,
          tr_explanation:
            "'Sitting with' = düşünmek, sindirmek (mecaz). Olgun + öz farkındalık.",
        },
        {
          q: "Türk hatası: 'We must talk, very important'",
          options: [
            "Çok formal",
            "Emir + drama tonu = savunmaya iter",
            "Yapısal yanlış",
            "Çok kibar",
          ],
          correct: 1,
          tr_explanation:
            "'Must talk' = emir. 'Very important' = drama. Modern: davet + bağlam.",
        },
      ],
    },
  ],
};

export const flirtDeep_17: BundledLesson = {
  id: "flirt.deep.17",
  skill_id: "flirt.intimacy",
  index: 17,
  title: "Arkadaslarim Ile Tanis — Grup Entegrasyonu",
  description: "Arkadaslarinla buyuk bir aksam plani. Hem onu tanitiyorsun hem koruyorsun.",
  estimated_minutes: 6,
  exercises: [
    {
      id: "ex.fd17.1",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B2",
      word_or_phrase: "ease them in",
      tr_translation: "Yavasca dahil etmek, ortama alistirmak",
      example: "Let's ease you in — small group first, big crew next time.",
      example_tr: "Yavasca dahil edelim — once kucuk grup, sonra buyuk ekip.",
    },
    {
      id: "ex.fd17.vt2",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B2",
      word_or_phrase: "quick rundown",
      tr_translation: "Hizli ozet (brief verme kalibi)",
      example: "Quick rundown — who's who at the table tonight.",
      example_tr: "Hizli ozet — bu aksam masada kim kimdir.",
    },
    {
      id: "ex.fd17.vt3",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B2",
      word_or_phrase: "the chaos friend",
      tr_translation: "Karisiklik yaratan arkadas (Turk grup klisesi)",
      example: "Emre is the chaos friend — you'll meet him eventually.",
      example_tr: "Emre karisiklik yaratan arkadas — bir gun tanisirsiniz.",
    },
    {
      id: "ex.fd17.vt4",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "C1",
      word_or_phrase: "interview you",
      tr_translation: "Seni sorgulamak (arkadas grubu klisesi)",
      example: "Deniz will absolutely interview you — be ready.",
      example_tr: "Deniz seni kesinlikle sorgulayacak — hazir ol.",
    },
    {
      id: "ex.fd17.vt5",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B2",
      word_or_phrase: "behave",
      tr_translation: "Uslu dur (saka uyari kalibi)",
      example: "Emre — behave tonight. Please.",
      example_tr: "Emre — bu aksam uslu dur. Lutfen.",
    },
    {
      id: "ex.fd17.2",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description: "Bar'da seninle bulustu — arkadaslar geliyor. Tanitma + koruma.",
      npc_role: "Partner",
      setting: "Bar — friends arrive to meet partner",
      turns: [
        {
          speaker: "npc",
          message: "Okay walk me through who's here. I'm nervous.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(don'?t be nervous |relax — )(they'?re excited to meet you)",
            "(okay quick rundown |let me brief you )",
            "(emre is |emre — )(loud|the loud one|will tease you)",
            "(deniz is |deniz will )(ask serious questions|interview you)",
            "(cansu is the chill |cansu'?s the )(one|safe one)",
            "(by midnight |give it an hour )(you'?ll feel like family)",
          ],
          model_answers: ["Quick rundown — Emre is loud, Deniz will interview you, Cansu's safe."],
          hint_tr: "Brief ver: 'Quick rundown — Emre is loud, Deniz will interview you, Cansu's safe.'",
        },
        {
          speaker: "npc",
          message: "And do I need to know any Turkish words?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(they all speak |everyone speaks )english (well|fine)",
            "(don'?t worry |you'?re safe )— (english only|they'?ll behave)",
            "(maybe |learn ) merhaba (— that'?s hello|just hello)",
            "(canim |hayatim )means (sweetheart|darling)",
            "(if they start switching |if turkish starts )(i'?ll translate|just hit me)",
            "(no homework |zero homework )required",
          ],
          model_answers: ["Everyone speaks English. Just learn merhaba — hello."],
          hint_tr: "Rahatlat: 'Everyone speaks English. Just learn merhaba — hello.'",
        },
        {
          speaker: "npc",
          message: "(later) Your friends are so loud — is that normal for Turks?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes |unfortunately yes )",
            "(volume is |loudness is )(a cultural feature|culturally embedded)",
            "(this is |this is honestly )(quiet for us)",
            "(welcome to |this is )(turkish friend group volume)",
            "(no one'?s actually arguing |everyone'?s having fun )(despite how it sounds)",
            "(get used to it |give it time )",
          ],
          model_answers: ["Yes — loudness is cultural. This is actually quiet for us."],
          hint_tr: "Kabul: 'Yes — loudness is cultural. This is actually quiet for us.'",
        },
        {
          speaker: "npc",
          message: "I like them. Emre asked when I'm moving in with you, by the way.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(oh god |i'?m going to kill him )",
            "(emre asks everyone |classic emre )(invasive questions)",
            "(welcome to the |this is exactly the )(turkish friend interview)",
            "(ignore him |zero pressure )— (we'?re fine)",
            "(he means well |it'?s well.?meaning )(but boundaries don'?t exist)",
            "(i'?ll yell at him |i'?m having a word )(later)",
          ],
          model_answers: ["Oh god — classic Emre. Welcome to the Turkish friend interview."],
          hint_tr: "Tepki + kanal: 'Oh god — classic Emre. Welcome to the Turkish friend interview.'",
        },
        {
          speaker: "npc",
          message: "It's okay — I told him 'when she asks me.' Just so you know.",
        },
      ],
    },
    {
      id: "ex.fd17.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      cefr_band: "B1",
      template: "I want to ___ with you about ___ — ___?",
      slots: [
        { accepted: ["talk honestly", "be open", "share something", "have a real conversation"] },
        { accepted: ["this", "where we're at", "how I'm feeling", "what's going on"] },
        { accepted: ["is now a good time", "can we sit down for a bit", "are you up for it", "would that be okay"] },
      ],
      tr_hint:
        "Önemli konu açma kalıbı: niyet + konu + saygılı zaman sorusu. 'Arkadaslarim Ile Tanis — Grup Entegrasyonu' bağlamında — Türk öğrenci direkt konuya girer; bu sağlam ilk cümle değil. Yumuşatma + zaman kontrolü = saygılı + güvenli alan.",
      example_filled:
        "I want to talk honestly with you about where we're at — is now a good time?",
    },
    {
      id: "ex.fd17.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      cefr_band: "B1",
      turns: [
        { speaker: "npc", text: "What's on your mind?" },
        { speaker: "user" },
        { speaker: "npc", text: "Okay — I'm listening." },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(been (thinking|sitting) with|wanted to talk about)",
        "(might sound|this might sound) (.+)",
        "(want to (open up|be honest|share))",
        "(no pressure|just|honestly) (.+)",
        "(can we|could we) (.+)",
      ],
      tr_hint:
        "Konuyu açma — yumuşatma + dürüst niyet. 'Arkadaslarim Ile Tanis — Grup Entegrasyonu' senaryosunda 'Been thinking about us — wanted to be honest. Can we talk?' tarzı.",
      ideal_answer:
        "Been thinking about something — want to be honest with you. Can we talk through it?",
    },
    {
      id: "ex.fd17.lr1",
      type: "listen_respond",
      difficulty: 3,
      cefr_band: "B1",
      npc_line: "How are you actually feeling about this?",
      accepted_patterns: [
        "(honestly|truthfully) (.+) (good|complicated|mixed)",
        "(part of me|some of me) (.+)",
        "(been (processing|sitting with|figuring out))",
        "(still working through|day by day)",
        "(grateful (you asked|for the space))",
      ],
      think_seconds: 3,
      tr_hint:
        "Dürüst + olgun duygu paylaşımı. 'Arkadaslarim Ile Tanis — Grup Entegrasyonu' bağlamında. Türk öğrenci 'fine' der; bunu yapma; SPESİFİK + dürüst.",
      ideal_response:
        "Honestly? Mixed — still processing parts of it. Day by day.",
    },
    {
      id: "ex.fd17.tt1",
      type: "thinking_trap",
      difficulty: 3,
      cefr_band: "B1",
      tr_thought: "Konuşmamız lazım, çok önemli",
      wrong_en: "We must talk, very important.",
      right_en: "I'd love to talk something through with you — is now a good time?",
      why_tr:
        "Türk öğrenci 'konuşmamız lazım + önemli' kalıbını birebir çevirir = emir tonu + 'must' baskı yaratır + 'very important' dramatik. 'Arkadaslarim Ile Tanis — Grup Entegrasyonu' gibi hassas konuda yumuşatma şart: 'I'd love to talk' (davet) + 'is now a good time' (saygılı zaman kontrolü).",
    },
    {
      id: "ex.fd17.rq1",
      type: "recall_quiz",
      difficulty: 3,
      cefr_band: "B1",
      items: [
        {
          q: "Önemli konuyu açarken en olgun yaklaşım?",
          options: [
            "'We must talk' (emir)",
            "'I'd love to talk — good time?' (davet + saygı)",
            "Sus, bekle",
            "Direkt konuya gir",
          ],
          correct: 1,
          tr_explanation:
            "Davet + zaman kontrolü = saygılı + güvenli alan. Emir = baskı = savunmaya iter.",
        },
        {
          q: "Karşı taraf 'how are you feeling?' sorduğunda?",
          options: [
            "Tek kelime 'fine'",
            "Spesifik + dürüst + 'still processing'",
            "Yalan",
            "Konu değiştir",
          ],
          correct: 1,
          tr_explanation:
            "'Fine' = kapalı kapı. Modern dating: spesifik duygu paylaşımı = bağ kurma.",
        },
        {
          q: "'Day by day' kalıbı:",
          options: [
            "Günden güne (zaman içinde)",
            "Her gün ayrı",
            "Yapısal yanlış",
            "Hızla",
          ],
          correct: 0,
          tr_explanation:
            "'Day by day' = adım adım, zamanla. Zor süreçleri işlerken sağlıklı.",
        },
        {
          q: "'Been sitting with something' anlamı?",
          options: [
            "Bir şeyle oturmak",
            "Bir konuyu içselleştirmek/üzerinde düşünmek",
            "Beklemek",
            "Yapısal yanlış",
          ],
          correct: 1,
          tr_explanation:
            "'Sitting with' = düşünmek, sindirmek (mecaz). Olgun + öz farkındalık.",
        },
        {
          q: "Türk hatası: 'We must talk, very important'",
          options: [
            "Çok formal",
            "Emir + drama tonu = savunmaya iter",
            "Yapısal yanlış",
            "Çok kibar",
          ],
          correct: 1,
          tr_explanation:
            "'Must talk' = emir. 'Very important' = drama. Modern: davet + bağlam.",
        },
      ],
    },
  ],
};

export const flirtDeep_18: BundledLesson = {
  id: "flirt.deep.18",
  skill_id: "flirt.intimacy",
  index: 18,
  title: "Kucuk Tartismadan Sonra Onarim",
  description: "Kucuk bir tartisma yasandi. Iki saat sonra konuyu yumusakca ac.",
  estimated_minutes: 6,
  exercises: [
    {
      id: "ex.fd18.1",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B2",
      word_or_phrase: "circle back",
      tr_translation: "Tekrar konuya donmek (calismadan da yatirim kalibi)",
      example: "Can we circle back to what happened earlier?",
      example_tr: "Demin yasanani konusmaya donelim mi?",
    },
    {
      id: "ex.fd18.vt2",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "I shouldn't have snapped",
      tr_translation: "Sinirimi bozmamaliydim (ozur kalibi)",
      example: "I shouldn't have snapped earlier — my tone was off.",
      example_tr: "Demin sinirim bozulmamaliydi — tonum yanlisti.",
    },
    {
      id: "ex.fd18.vt3",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "C1",
      word_or_phrase: "hit reset",
      tr_translation: "Sifirlama dugmesi (yenibastan baslamak)",
      example: "Can we hit reset on this morning?",
      example_tr: "Bu sabahi sifirlayabilir miyiz?",
    },
    {
      id: "ex.fd18.vt4",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B2",
      word_or_phrase: "call it even",
      tr_translation: "Beraberlik diyelim (esit hata kabulu)",
      example: "We were both off — let's call it even.",
      example_tr: "Ikimiz de hatalydik — beraberlik diyelim.",
    },
    {
      id: "ex.fd18.vt5",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B2",
      word_or_phrase: "leave things hanging",
      tr_translation: "Olayi muallakta birakmak (cozulmemis catisma kaybi)",
      example: "I hate leaving things hanging — can we talk?",
      example_tr: "Olayi muallakta birakmaktan nefret ediyorum — konusabilir miyiz?",
    },
    {
      id: "ex.fd18.2",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description: "Iki saat sustunuz, sehir gezisinde. Tartismayi sen baslat onarim icin.",
      npc_role: "Partner",
      setting: "Walking after tense lunch",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(hey |okay )(can we |can i )(talk about earlier|circle back)",
            "(i don'?t want to leave |hate leaving )(things like that|that conversation hanging)",
            "(was thinking about |kept thinking about )(what i said|the argument)",
            "(can we |should we )(reset|hit reset)",
            "(i want to apologize |i owe you )(for how i said|for how i reacted)",
            "(this might sound |feels a bit )awkward but (we should talk)",
          ],
          model_answers: ["Hey — can we talk about earlier? Don't want to leave things hanging."],
          hint_tr: "Sen ac: 'Hey — can we talk about earlier? Don't want to leave things hanging.'",
        },
        {
          speaker: "npc",
          message: "Yeah, please. I've also been thinking about it.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i shouldn'?t have |i was wrong to )(snap|react like that)",
            "(my tone was |how i said it was )off",
            "(the point was fine |what i meant was reasonable )but (how i said it wasn'?t)",
            "(i was |i was honestly )(stressed about something else)",
            "(you didn'?t deserve |that wasn'?t fair )(that energy)",
            "(can i try again |let me restart )(now that i'?ve cooled down)",
          ],
          model_answers: ["I shouldn't have snapped — my tone was off. You didn't deserve that."],
          hint_tr: "Sorumluluk al: 'I shouldn't have snapped — my tone was off. You didn't deserve that.'",
        },
        {
          speaker: "npc",
          message: "Okay. I also wasn't listening properly. I was already in my head.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thank you for saying that |appreciate you saying that )",
            "(this is the |these are the )(repair conversations|good fights)",
            "(both of us were |we were both )off (this morning|earlier)",
            "(can we |should we )(call it even|move on)",
            "(promise we'?ll |we should always )(do this — circle back)",
            "(this is what i want |this is the kind of partnership i want )",
          ],
          model_answers: ["Appreciate that. Both of us were off — let's call it even."],
          hint_tr: "Karsila: 'Appreciate that. Both of us were off — let's call it even.'",
        },
        {
          speaker: "npc",
          message: "Deal. Hug?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes |come here )",
            "(obviously |always )",
            "(thought you'?d never |waiting for you to )ask",
            "(big yes |huge yes )",
            "(non.?negotiable |required )",
            "(hug yes |hugs always )",
          ],
          model_answers: ["Yes — come here. Always."],
          hint_tr: "Kabul: 'Yes — come here. Always.'",
        },
        {
          speaker: "npc",
          message: "Okay. Let's get coffee and pretend the morning didn't happen.",
        },
      ],
    },
    {
      id: "ex.fd18.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      cefr_band: "B1",
      template: "I want to ___ with you about ___ — ___?",
      slots: [
        { accepted: ["talk honestly", "be open", "share something", "have a real conversation"] },
        { accepted: ["this", "where we're at", "how I'm feeling", "what's going on"] },
        { accepted: ["is now a good time", "can we sit down for a bit", "are you up for it", "would that be okay"] },
      ],
      tr_hint:
        "Önemli konu açma kalıbı: niyet + konu + saygılı zaman sorusu. 'Kucuk Tartismadan Sonra Onarim' bağlamında — Türk öğrenci direkt konuya girer; bu sağlam ilk cümle değil. Yumuşatma + zaman kontrolü = saygılı + güvenli alan.",
      example_filled:
        "I want to talk honestly with you about where we're at — is now a good time?",
    },
    {
      id: "ex.fd18.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      cefr_band: "B1",
      turns: [
        { speaker: "npc", text: "What's on your mind?" },
        { speaker: "user" },
        { speaker: "npc", text: "Okay — I'm listening." },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(been (thinking|sitting) with|wanted to talk about)",
        "(might sound|this might sound) (.+)",
        "(want to (open up|be honest|share))",
        "(no pressure|just|honestly) (.+)",
        "(can we|could we) (.+)",
      ],
      tr_hint:
        "Konuyu açma — yumuşatma + dürüst niyet. 'Kucuk Tartismadan Sonra Onarim' senaryosunda 'Been thinking about us — wanted to be honest. Can we talk?' tarzı.",
      ideal_answer:
        "Been thinking about something — want to be honest with you. Can we talk through it?",
    },
    {
      id: "ex.fd18.lr1",
      type: "listen_respond",
      difficulty: 3,
      cefr_band: "B1",
      npc_line: "How are you actually feeling about this?",
      accepted_patterns: [
        "(honestly|truthfully) (.+) (good|complicated|mixed)",
        "(part of me|some of me) (.+)",
        "(been (processing|sitting with|figuring out))",
        "(still working through|day by day)",
        "(grateful (you asked|for the space))",
      ],
      think_seconds: 3,
      tr_hint:
        "Dürüst + olgun duygu paylaşımı. 'Kucuk Tartismadan Sonra Onarim' bağlamında. Türk öğrenci 'fine' der; bunu yapma; SPESİFİK + dürüst.",
      ideal_response:
        "Honestly? Mixed — still processing parts of it. Day by day.",
    },
    {
      id: "ex.fd18.tt1",
      type: "thinking_trap",
      difficulty: 3,
      cefr_band: "B1",
      tr_thought: "Konuşmamız lazım, çok önemli",
      wrong_en: "We must talk, very important.",
      right_en: "I'd love to talk something through with you — is now a good time?",
      why_tr:
        "Türk öğrenci 'konuşmamız lazım + önemli' kalıbını birebir çevirir = emir tonu + 'must' baskı yaratır + 'very important' dramatik. 'Kucuk Tartismadan Sonra Onarim' gibi hassas konuda yumuşatma şart: 'I'd love to talk' (davet) + 'is now a good time' (saygılı zaman kontrolü).",
    },
    {
      id: "ex.fd18.rq1",
      type: "recall_quiz",
      difficulty: 3,
      cefr_band: "B1",
      items: [
        {
          q: "Önemli konuyu açarken en olgun yaklaşım?",
          options: [
            "'We must talk' (emir)",
            "'I'd love to talk — good time?' (davet + saygı)",
            "Sus, bekle",
            "Direkt konuya gir",
          ],
          correct: 1,
          tr_explanation:
            "Davet + zaman kontrolü = saygılı + güvenli alan. Emir = baskı = savunmaya iter.",
        },
        {
          q: "Karşı taraf 'how are you feeling?' sorduğunda?",
          options: [
            "Tek kelime 'fine'",
            "Spesifik + dürüst + 'still processing'",
            "Yalan",
            "Konu değiştir",
          ],
          correct: 1,
          tr_explanation:
            "'Fine' = kapalı kapı. Modern dating: spesifik duygu paylaşımı = bağ kurma.",
        },
        {
          q: "'Day by day' kalıbı:",
          options: [
            "Günden güne (zaman içinde)",
            "Her gün ayrı",
            "Yapısal yanlış",
            "Hızla",
          ],
          correct: 0,
          tr_explanation:
            "'Day by day' = adım adım, zamanla. Zor süreçleri işlerken sağlıklı.",
        },
        {
          q: "'Been sitting with something' anlamı?",
          options: [
            "Bir şeyle oturmak",
            "Bir konuyu içselleştirmek/üzerinde düşünmek",
            "Beklemek",
            "Yapısal yanlış",
          ],
          correct: 1,
          tr_explanation:
            "'Sitting with' = düşünmek, sindirmek (mecaz). Olgun + öz farkındalık.",
        },
        {
          q: "Türk hatası: 'We must talk, very important'",
          options: [
            "Çok formal",
            "Emir + drama tonu = savunmaya iter",
            "Yapısal yanlış",
            "Çok kibar",
          ],
          correct: 1,
          tr_explanation:
            "'Must talk' = emir. 'Very important' = drama. Modern: davet + bağlam.",
        },
      ],
    },
  ],
};

export const flirtDeep_19: BundledLesson = {
  id: "flirt.deep.19",
  skill_id: "flirt.intimacy",
  index: 19,
  title: "Tatil Plani — Ilk Yolculuk Birlikte",
  description: "Birlikte hafta sonu kacis plani. Butce + plan + heyecan dengele.",
  estimated_minutes: 6,
  exercises: [
    {
      id: "ex.fd19.1",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "B2",
      word_or_phrase: "split it down the middle",
      tr_translation: "Yari yariya bolusmek (butce icin)",
      example: "Let's split everything down the middle and not overthink it.",
      example_tr: "Her seyi yari yariya bolelim, ust ust dusunmeyelim.",
    },
    {
      id: "ex.fd19.vt2",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B2",
      word_or_phrase: "set a cap",
      tr_translation: "Ust sinir koymak (butce kalibi)",
      example: "Let's set a cap of 300 each — keeps it stress-free.",
      example_tr: "Kisi basi 300 ust sinir koyalim — stressiz olur.",
    },
    {
      id: "ex.fd19.vt3",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B2",
      word_or_phrase: "division of labor",
      tr_translation: "Is bolumu (gorev paylasimi)",
      example: "Perfect division of labor — you flights, me airbnbs.",
      example_tr: "Mukemmel is bolumu — sen ucuslar, ben airbnb.",
    },
    {
      id: "ex.fd19.vt4",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B2",
      word_or_phrase: "first weekend trip",
      tr_translation: "Ilk hafta sonu gezisi (kilometre tasi)",
      example: "Our first weekend trip — let's not stress it.",
      example_tr: "Ilk hafta sonu gezimiz — stresine girmeyelim.",
    },
    {
      id: "ex.fd19.vt5",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B2",
      word_or_phrase: "fair warning",
      tr_translation: "Uyari (samimi acilim kalibi)",
      example: "Fair warning — I take up the whole bed.",
      example_tr: "Uyari — tum yatagi kapliyorum.",
    },
    {
      id: "ex.fd19.2",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description: "Hafta sonu birlikte yolculuk plani. Bagcasi karistirmadan organize ol.",
      npc_role: "Partner",
      setting: "Sofa, planning weekend trip",
      turns: [
        {
          speaker: "npc",
          message: "Okay so where are we going? My vote is somewhere cheap and warm.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(cheap and warm |budget and sun )= (yes please|i'?m sold)",
            "(porto |lisbon |valencia |barcelona) (any of those|works for me)",
            "(i was thinking |what about )portugal",
            "(close by and cheap |budget and short flight )",
            "(no long flights |under two hours )",
            "(throw out three |give me three )(options)",
          ],
          model_answers: ["Porto or Valencia? Budget, short flight, sunny."],
          hint_tr: "Oneri ver: 'Porto or Valencia? Budget, short flight, sunny.'",
        },
        {
          speaker: "npc",
          message: "Porto sounds amazing. I've never been. What about budget — what's your range?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i can do |comfortable around )(\\d+) (euros|total)",
            "(low end |budget end ) — (hostel|airbnb) (under \\d+)",
            "(let'?s set |how about we set )(a cap of \\d+|a ceiling)",
            "(flights under |under \\d+ for flights )(\\d+)",
            "(student budget |grad student means )(modest|tight)",
            "(let'?s split everything |i prefer to split )(down the middle)",
          ],
          model_answers: ["Comfortable around 300 total. Let's split everything down the middle."],
          hint_tr: "Net butce: 'Comfortable around 300 total. Let's split everything down the middle.'",
        },
        {
          speaker: "npc",
          message: "300 works. Want me to handle flights, you do the airbnb?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(deal |perfect division of labor )",
            "(send me the |once you find flights )(options before you book)",
            "(i'?ll send |i'?ll find )(three airbnbs|three options) (you pick)",
            "(yes |that works )— (timing thursday to sunday\\?)",
            "(we should book |let'?s book )(in next two days|by friday)",
            "(should i look at |any neighborhood preferences )",
          ],
          model_answers: ["Deal — send me flights before you book. I'll find airbnbs."],
          hint_tr: "Onayla + son detay: 'Deal — send me flights before you book. I'll find airbnbs.'",
        },
        {
          speaker: "npc",
          message: "Got it. One more thing — I snore. Just so you know.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(noted |fair warning accepted )",
            "(thanks for the |earplugs added to packing list )",
            "(i'?ll bring |adding )earplugs (to my list|to packing)",
            "(equal opportunity |full disclosure ) — (i also do weird stuff in my sleep)",
            "(this is the |love a pre.?trip disclosure )",
            "(consider |consider this )(my warning too — i take up the whole bed)",
          ],
          model_answers: ["Noted. Equal disclosure — I take up the whole bed."],
          hint_tr: "Sakaya gir: 'Noted. Equal disclosure — I take up the whole bed.'",
        },
        {
          speaker: "npc",
          message: "Okay we're an honest mess. Booking the flight now.",
        },
      ],
    },
    {
      id: "ex.fd19.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      cefr_band: "B1",
      template: "I want to ___ with you about ___ — ___?",
      slots: [
        { accepted: ["talk honestly", "be open", "share something", "have a real conversation"] },
        { accepted: ["this", "where we're at", "how I'm feeling", "what's going on"] },
        { accepted: ["is now a good time", "can we sit down for a bit", "are you up for it", "would that be okay"] },
      ],
      tr_hint:
        "Önemli konu açma kalıbı: niyet + konu + saygılı zaman sorusu. 'Tatil Plani — Ilk Yolculuk Birlikte' bağlamında — Türk öğrenci direkt konuya girer; bu sağlam ilk cümle değil. Yumuşatma + zaman kontrolü = saygılı + güvenli alan.",
      example_filled:
        "I want to talk honestly with you about where we're at — is now a good time?",
    },
    {
      id: "ex.fd19.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      cefr_band: "B1",
      turns: [
        { speaker: "npc", text: "What's on your mind?" },
        { speaker: "user" },
        { speaker: "npc", text: "Okay — I'm listening." },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(been (thinking|sitting) with|wanted to talk about)",
        "(might sound|this might sound) (.+)",
        "(want to (open up|be honest|share))",
        "(no pressure|just|honestly) (.+)",
        "(can we|could we) (.+)",
      ],
      tr_hint:
        "Konuyu açma — yumuşatma + dürüst niyet. 'Tatil Plani — Ilk Yolculuk Birlikte' senaryosunda 'Been thinking about us — wanted to be honest. Can we talk?' tarzı.",
      ideal_answer:
        "Been thinking about something — want to be honest with you. Can we talk through it?",
    },
    {
      id: "ex.fd19.lr1",
      type: "listen_respond",
      difficulty: 3,
      cefr_band: "B1",
      npc_line: "How are you actually feeling about this?",
      accepted_patterns: [
        "(honestly|truthfully) (.+) (good|complicated|mixed)",
        "(part of me|some of me) (.+)",
        "(been (processing|sitting with|figuring out))",
        "(still working through|day by day)",
        "(grateful (you asked|for the space))",
      ],
      think_seconds: 3,
      tr_hint:
        "Dürüst + olgun duygu paylaşımı. 'Tatil Plani — Ilk Yolculuk Birlikte' bağlamında. Türk öğrenci 'fine' der; bunu yapma; SPESİFİK + dürüst.",
      ideal_response:
        "Honestly? Mixed — still processing parts of it. Day by day.",
    },
    {
      id: "ex.fd19.tt1",
      type: "thinking_trap",
      difficulty: 3,
      cefr_band: "B1",
      tr_thought: "Konuşmamız lazım, çok önemli",
      wrong_en: "We must talk, very important.",
      right_en: "I'd love to talk something through with you — is now a good time?",
      why_tr:
        "Türk öğrenci 'konuşmamız lazım + önemli' kalıbını birebir çevirir = emir tonu + 'must' baskı yaratır + 'very important' dramatik. 'Tatil Plani — Ilk Yolculuk Birlikte' gibi hassas konuda yumuşatma şart: 'I'd love to talk' (davet) + 'is now a good time' (saygılı zaman kontrolü).",
    },
    {
      id: "ex.fd19.rq1",
      type: "recall_quiz",
      difficulty: 3,
      cefr_band: "B1",
      items: [
        {
          q: "Önemli konuyu açarken en olgun yaklaşım?",
          options: [
            "'We must talk' (emir)",
            "'I'd love to talk — good time?' (davet + saygı)",
            "Sus, bekle",
            "Direkt konuya gir",
          ],
          correct: 1,
          tr_explanation:
            "Davet + zaman kontrolü = saygılı + güvenli alan. Emir = baskı = savunmaya iter.",
        },
        {
          q: "Karşı taraf 'how are you feeling?' sorduğunda?",
          options: [
            "Tek kelime 'fine'",
            "Spesifik + dürüst + 'still processing'",
            "Yalan",
            "Konu değiştir",
          ],
          correct: 1,
          tr_explanation:
            "'Fine' = kapalı kapı. Modern dating: spesifik duygu paylaşımı = bağ kurma.",
        },
        {
          q: "'Day by day' kalıbı:",
          options: [
            "Günden güne (zaman içinde)",
            "Her gün ayrı",
            "Yapısal yanlış",
            "Hızla",
          ],
          correct: 0,
          tr_explanation:
            "'Day by day' = adım adım, zamanla. Zor süreçleri işlerken sağlıklı.",
        },
        {
          q: "'Been sitting with something' anlamı?",
          options: [
            "Bir şeyle oturmak",
            "Bir konuyu içselleştirmek/üzerinde düşünmek",
            "Beklemek",
            "Yapısal yanlış",
          ],
          correct: 1,
          tr_explanation:
            "'Sitting with' = düşünmek, sindirmek (mecaz). Olgun + öz farkındalık.",
        },
        {
          q: "Türk hatası: 'We must talk, very important'",
          options: [
            "Çok formal",
            "Emir + drama tonu = savunmaya iter",
            "Yapısal yanlış",
            "Çok kibar",
          ],
          correct: 1,
          tr_explanation:
            "'Must talk' = emir. 'Very important' = drama. Modern: davet + bağlam.",
        },
      ],
    },
  ],
};

export const flirtDeep_20: BundledLesson = {
  id: "flirt.deep.20",
  skill_id: "flirt.intimacy",
  index: 20,
  title: "Dogum Gunu Plani — Surpriz Ipucu",
  description: "Sevgilinin dogum gunu yakin. Ne istedigini ortuk anla.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.fd20.1",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B2",
      word_or_phrase: "low-key birthday",
      tr_translation: "Sade dogum gunu (buyuk olay degil)",
      example: "I'm a low-key birthday person — just dinner and good company.",
      example_tr: "Sade dogum gunu severim — sadece yemek ve iyi insanlar.",
    },
    {
      id: "ex.fd20.vt2",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B2",
      word_or_phrase: "drop hints",
      tr_translation: "Ipuclari vermek (ortuk sorma kalibi)",
      example: "Drop hints — I need to plan something for you.",
      example_tr: "Ipuclari ver — senin icin bir sey planlayacagim.",
    },
    {
      id: "ex.fd20.vt3",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B2",
      word_or_phrase: "no flash mob",
      tr_translation: "Buyuk gosteri yok (mutevazi onay kalibi)",
      example: "No flash mob, no surprise party — got it.",
      example_tr: "Buyuk gosteri yok, surpriz parti yok — anladim.",
    },
    {
      id: "ex.fd20.vt4",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "C1",
      word_or_phrase: "center of attention",
      tr_translation: "Ilgi odagi (genelde olmaktan kacinma sinyali)",
      example: "I don't love being the center of attention — keep it small.",
      example_tr: "Ilgi odagi olmayi sevmem — kucuk tutalim.",
    },
    {
      id: "ex.fd20.vt5",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "no big production",
      tr_translation: "Buyuk olay yapmak yok (sadece tarz)",
      example: "Good food, two friends, no big production.",
      example_tr: "Iyi yemek, iki arkadas, buyuk olay yapmak yok.",
    },
    {
      id: "ex.fd20.2",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description: "Iki hafta var. Plani bos birak ki kendisi soylesin — ipucu ver.",
      npc_role: "Partner",
      setting: "Casual conversation, walking",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(so your birthday'?s |birthday'?s )(in two weeks|coming up)",
            "(what'?s the |what are )your (vibe|move) (for birthdays)",
            "(big party person |low.?key birthday person )\\?",
            "(do you like |how do you feel about )surprises",
            "(give me clues |drop hints )",
            "(i need intel |i'?m gathering intel)",
          ],
          model_answers: ["Your birthday's in two weeks — what's your vibe? Big party or low-key?"],
          hint_tr: "Aciklikla sor: 'Your birthday's in two weeks — what's your vibe? Big party or low-key?'",
        },
        {
          speaker: "npc",
          message: "Honestly low-key. I don't love being the center of attention.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(noted |good to know )",
            "(no flash mob then |canceling the flash mob )",
            "(dinner |small dinner )(with a few people\\?|good for you\\?)",
            "(do you want |would you prefer )just us",
            "(give me the |what would a perfect )(low.?key night )(look like)",
            "(what makes it special |what would feel right )",
          ],
          model_answers: ["Noted — no flash mob. What would a perfect low-key night look like?"],
          hint_tr: "Onayla + derinlestir: 'Noted — no flash mob. What would a perfect low-key night look like?'",
        },
        {
          speaker: "npc",
          message: "Honestly? Good food, two or three friends, no big production.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(consider it |done )",
            "(can i |do you trust me to )(plan it|handle the place)",
            "(any food vibes |any cuisine cravings )",
            "(should i invite |who should i tell to come )",
            "(perfect — |that'?s the easiest planning)",
            "(let me handle this |you'?ve given me everything i need)",
          ],
          model_answers: ["Can I plan it? Any food vibes you want?"],
          hint_tr: "Yetki al: 'Can I plan it? Any food vibes you want?'",
        },
        {
          speaker: "npc",
          message: "Italian. Always Italian. And maybe a small surprise — but small. I trust you.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(scope locked |parameters set )",
            "(small surprise |micro surprise ) — (got it|noted)",
            "(thin line between |i hear the constraint between ) small and big — (i'?ll stay small)",
            "(consider it |consider this conversation )my mandate",
            "(zero pressure |you'?ll like it)",
            "(this is now |officially )(my mission)",
          ],
          model_answers: ["Scope locked — small surprise, Italian. Mission accepted."],
          hint_tr: "Kabul: 'Scope locked — small surprise, Italian. Mission accepted.'",
        },
        {
          speaker: "npc",
          message: "Don't stress. I genuinely just want a good night with you.",
        },
      ],
    },
    {
      id: "ex.fd20.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      cefr_band: "B1",
      template: "I want to ___ with you about ___ — ___?",
      slots: [
        { accepted: ["talk honestly", "be open", "share something", "have a real conversation"] },
        { accepted: ["this", "where we're at", "how I'm feeling", "what's going on"] },
        { accepted: ["is now a good time", "can we sit down for a bit", "are you up for it", "would that be okay"] },
      ],
      tr_hint:
        "Önemli konu açma kalıbı: niyet + konu + saygılı zaman sorusu. 'Dogum Gunu Plani — Surpriz Ipucu' bağlamında — Türk öğrenci direkt konuya girer; bu sağlam ilk cümle değil. Yumuşatma + zaman kontrolü = saygılı + güvenli alan.",
      example_filled:
        "I want to talk honestly with you about where we're at — is now a good time?",
    },
    {
      id: "ex.fd20.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      cefr_band: "B1",
      turns: [
        { speaker: "npc", text: "What's on your mind?" },
        { speaker: "user" },
        { speaker: "npc", text: "Okay — I'm listening." },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(been (thinking|sitting) with|wanted to talk about)",
        "(might sound|this might sound) (.+)",
        "(want to (open up|be honest|share))",
        "(no pressure|just|honestly) (.+)",
        "(can we|could we) (.+)",
      ],
      tr_hint:
        "Konuyu açma — yumuşatma + dürüst niyet. 'Dogum Gunu Plani — Surpriz Ipucu' senaryosunda 'Been thinking about us — wanted to be honest. Can we talk?' tarzı.",
      ideal_answer:
        "Been thinking about something — want to be honest with you. Can we talk through it?",
    },
    {
      id: "ex.fd20.lr1",
      type: "listen_respond",
      difficulty: 3,
      cefr_band: "B1",
      npc_line: "How are you actually feeling about this?",
      accepted_patterns: [
        "(honestly|truthfully) (.+) (good|complicated|mixed)",
        "(part of me|some of me) (.+)",
        "(been (processing|sitting with|figuring out))",
        "(still working through|day by day)",
        "(grateful (you asked|for the space))",
      ],
      think_seconds: 3,
      tr_hint:
        "Dürüst + olgun duygu paylaşımı. 'Dogum Gunu Plani — Surpriz Ipucu' bağlamında. Türk öğrenci 'fine' der; bunu yapma; SPESİFİK + dürüst.",
      ideal_response:
        "Honestly? Mixed — still processing parts of it. Day by day.",
    },
    {
      id: "ex.fd20.tt1",
      type: "thinking_trap",
      difficulty: 3,
      cefr_band: "B1",
      tr_thought: "Konuşmamız lazım, çok önemli",
      wrong_en: "We must talk, very important.",
      right_en: "I'd love to talk something through with you — is now a good time?",
      why_tr:
        "Türk öğrenci 'konuşmamız lazım + önemli' kalıbını birebir çevirir = emir tonu + 'must' baskı yaratır + 'very important' dramatik. 'Dogum Gunu Plani — Surpriz Ipucu' gibi hassas konuda yumuşatma şart: 'I'd love to talk' (davet) + 'is now a good time' (saygılı zaman kontrolü).",
    },
    {
      id: "ex.fd20.rq1",
      type: "recall_quiz",
      difficulty: 3,
      cefr_band: "B1",
      items: [
        {
          q: "Önemli konuyu açarken en olgun yaklaşım?",
          options: [
            "'We must talk' (emir)",
            "'I'd love to talk — good time?' (davet + saygı)",
            "Sus, bekle",
            "Direkt konuya gir",
          ],
          correct: 1,
          tr_explanation:
            "Davet + zaman kontrolü = saygılı + güvenli alan. Emir = baskı = savunmaya iter.",
        },
        {
          q: "Karşı taraf 'how are you feeling?' sorduğunda?",
          options: [
            "Tek kelime 'fine'",
            "Spesifik + dürüst + 'still processing'",
            "Yalan",
            "Konu değiştir",
          ],
          correct: 1,
          tr_explanation:
            "'Fine' = kapalı kapı. Modern dating: spesifik duygu paylaşımı = bağ kurma.",
        },
        {
          q: "'Day by day' kalıbı:",
          options: [
            "Günden güne (zaman içinde)",
            "Her gün ayrı",
            "Yapısal yanlış",
            "Hızla",
          ],
          correct: 0,
          tr_explanation:
            "'Day by day' = adım adım, zamanla. Zor süreçleri işlerken sağlıklı.",
        },
        {
          q: "'Been sitting with something' anlamı?",
          options: [
            "Bir şeyle oturmak",
            "Bir konuyu içselleştirmek/üzerinde düşünmek",
            "Beklemek",
            "Yapısal yanlış",
          ],
          correct: 1,
          tr_explanation:
            "'Sitting with' = düşünmek, sindirmek (mecaz). Olgun + öz farkındalık.",
        },
        {
          q: "Türk hatası: 'We must talk, very important'",
          options: [
            "Çok formal",
            "Emir + drama tonu = savunmaya iter",
            "Yapısal yanlış",
            "Çok kibar",
          ],
          correct: 1,
          tr_explanation:
            "'Must talk' = emir. 'Very important' = drama. Modern: davet + bağlam.",
        },
      ],
    },
  ],
};

// ============================================================
// PHASE 3 — MID-RELATIONSHIP (21-30) — skill: flirt.midrel
// ============================================================

export const flirtDeep_21: BundledLesson = {
  id: "flirt.deep.21",
  skill_id: "flirt.midrel",
  index: 21,
  title: "DTR — Resmilesme Konusmasi",
  description: "Define The Relationship. Resmen sevgili mi, hala 'gorusuyor' mu? Sen ac.",
  estimated_minutes: 6,
  exercises: [
    {
      id: "ex.fd21.1",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B2",
      word_or_phrase: "exclusive",
      tr_translation: "Sadece birbirimizleyiz (DTR ana kelime)",
      example: "Are we exclusive at this point, or...?",
      example_tr: "Bu noktada sadece birbirimizleyiz, yoksa...?",
    },
    {
      id: "ex.fd21.2",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B2",
      word_or_phrase: "where we stand",
      tr_translation: "Nerede durdugumuz (durum sorgulama)",
      example: "I wanted to ask where we stand — no pressure either way.",
      example_tr: "Nerede durdugumuzu sormak istedim — iki taraftan baski yok.",
    },
    {
      id: "ex.fd21.vt3",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "C1",
      word_or_phrase: "DTR",
      tr_translation: "Iliskiyi tanimlama konusmasi (Define The Relationship)",
      example: "We had the DTR talk last night — finally.",
      example_tr: "Dun gece DTR konusmasini yaptik — nihayet.",
    },
    {
      id: "ex.fd21.vt4",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B2",
      word_or_phrase: "delete the apps",
      tr_translation: "Uygulamalari silmek (DTR sonrasi ritual)",
      example: "Let's delete the apps together — official move.",
      example_tr: "Birlikte uygulamalari silelim — resmi adim.",
    },
    {
      id: "ex.fd21.vt5",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "my read on us",
      tr_translation: "Bizimle ilgili gorusum (durum okumasi)",
      example: "Honestly? My read on us is this is something real.",
      example_tr: "Durust? Bizimle ilgili gorusum, bu gercek bir sey.",
    },
    {
      id: "ex.fd21.vt6",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "officially us",
      tr_translation: "Resmen biz (DTR sonrasi etiketleme)",
      example: "Officially us — I can say girlfriend out loud now.",
      example_tr: "Resmen biz — artik sevgili kelimesini sesli soyleyebilirim.",
    },
    {
      id: "ex.fd21.3",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description: "Iki aydir gorusuyorsunuz. Etiket sorusu. Sen ac, profesyonel git.",
      npc_role: "Partner",
      setting: "Evening at their place",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(hey |so )(can i ask you something|wanted to bring something up)",
            "(it'?s not a |this isn'?t a )(heavy thing|big deal)",
            "(but i want to know |i wanted to ask )(where we stand)",
            "(are we |are we exclusive|are we doing the relationship thing)",
            "(no pressure either way |genuine curiosity )",
            "(been wondering if |i was curious if )we should talk about it",
          ],
          model_answers: ["Can I ask something? Wanted to know where we stand. No pressure."],
          hint_tr: "Sen ac: 'Can I ask something? Wanted to know where we stand. No pressure.'",
        },
        {
          speaker: "npc",
          message: "Yeah — I've been thinking about it too. What's your read on us?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(my read |honestly my read )is (this is real|something serious)",
            "(i'?m not |i haven'?t been )(seeing anyone else|interested in other people)",
            "(i'?d like to be |would like to call this )exclusive",
            "(want to call you |would want the )(girlfriend|boyfriend) (label|word)",
            "(this feels |it feels )(real to me|like more than casual)",
            "(my answer is |where i land is )yes — (if you'?re open to it)",
          ],
          model_answers: ["My read is this is real. I'd like to be exclusive — if you're open."],
          hint_tr: "Net pozisyon: 'My read is this is real. I'd like to be exclusive — if you're open.'",
        },
        {
          speaker: "npc",
          message: "Okay good — same. So we're officially doing this then.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(officially official |officially us )",
            "(thank god |thought you'?d say that )",
            "(can i call you |so i can say )my girlfriend (now|out loud)",
            "(this is making |giving me unreasonable )(joy|happiness)",
            "(no |i need to hear )awkward (apps to delete|app deletion ceremony)",
            "(welcome to the team |let'?s celebrate)",
          ],
          model_answers: ["Officially us. Can I say girlfriend out loud now?"],
          hint_tr: "Kabul: 'Officially us. Can I say girlfriend out loud now?'",
        },
        {
          speaker: "npc",
          message: "Yes — you can. Want to delete apps together right now?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes |honestly yes )",
            "(big symbolic moment |let'?s ceremonialize this )",
            "(let'?s film it |let'?s do it on three )",
            "(showing me your |you show me yours |swap phones )",
            "(commitment ritual |relationship ritual )",
            "(let'?s do this |on three )",
          ],
          model_answers: ["Yes — let's ceremonialize this. On three."],
          hint_tr: "Devam: 'Yes — let's ceremonialize this. On three.'",
        },
        {
          speaker: "npc",
          message: "Three, two, one — bye dating app.",
        },
      ],
    },
    {
      id: "ex.fd21.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      cefr_band: "B1",
      template: "I want to ___ with you about ___ — ___?",
      slots: [
        { accepted: ["talk honestly", "be open", "share something", "have a real conversation"] },
        { accepted: ["this", "where we're at", "how I'm feeling", "what's going on"] },
        { accepted: ["is now a good time", "can we sit down for a bit", "are you up for it", "would that be okay"] },
      ],
      tr_hint:
        "Önemli konu açma kalıbı: niyet + konu + saygılı zaman sorusu. 'DTR — Resmilesme Konusmasi' bağlamında — Türk öğrenci direkt konuya girer; bu sağlam ilk cümle değil. Yumuşatma + zaman kontrolü = saygılı + güvenli alan.",
      example_filled:
        "I want to talk honestly with you about where we're at — is now a good time?",
    },
    {
      id: "ex.fd21.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      cefr_band: "B1",
      turns: [
        { speaker: "npc", text: "What's on your mind?" },
        { speaker: "user" },
        { speaker: "npc", text: "Okay — I'm listening." },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(been (thinking|sitting) with|wanted to talk about)",
        "(might sound|this might sound) (.+)",
        "(want to (open up|be honest|share))",
        "(no pressure|just|honestly) (.+)",
        "(can we|could we) (.+)",
      ],
      tr_hint:
        "Konuyu açma — yumuşatma + dürüst niyet. 'DTR — Resmilesme Konusmasi' senaryosunda 'Been thinking about us — wanted to be honest. Can we talk?' tarzı.",
      ideal_answer:
        "Been thinking about something — want to be honest with you. Can we talk through it?",
    },
    {
      id: "ex.fd21.lr1",
      type: "listen_respond",
      difficulty: 3,
      cefr_band: "B1",
      npc_line: "How are you actually feeling about this?",
      accepted_patterns: [
        "(honestly|truthfully) (.+) (good|complicated|mixed)",
        "(part of me|some of me) (.+)",
        "(been (processing|sitting with|figuring out))",
        "(still working through|day by day)",
        "(grateful (you asked|for the space))",
      ],
      think_seconds: 3,
      tr_hint:
        "Dürüst + olgun duygu paylaşımı. 'DTR — Resmilesme Konusmasi' bağlamında. Türk öğrenci 'fine' der; bunu yapma; SPESİFİK + dürüst.",
      ideal_response:
        "Honestly? Mixed — still processing parts of it. Day by day.",
    },
    {
      id: "ex.fd21.tt1",
      type: "thinking_trap",
      difficulty: 3,
      cefr_band: "B1",
      tr_thought: "Konuşmamız lazım, çok önemli",
      wrong_en: "We must talk, very important.",
      right_en: "I'd love to talk something through with you — is now a good time?",
      why_tr:
        "Türk öğrenci 'konuşmamız lazım + önemli' kalıbını birebir çevirir = emir tonu + 'must' baskı yaratır + 'very important' dramatik. 'DTR — Resmilesme Konusmasi' gibi hassas konuda yumuşatma şart: 'I'd love to talk' (davet) + 'is now a good time' (saygılı zaman kontrolü).",
    },
    {
      id: "ex.fd21.rq1",
      type: "recall_quiz",
      difficulty: 3,
      cefr_band: "B1",
      items: [
        {
          q: "Önemli konuyu açarken en olgun yaklaşım?",
          options: [
            "'We must talk' (emir)",
            "'I'd love to talk — good time?' (davet + saygı)",
            "Sus, bekle",
            "Direkt konuya gir",
          ],
          correct: 1,
          tr_explanation:
            "Davet + zaman kontrolü = saygılı + güvenli alan. Emir = baskı = savunmaya iter.",
        },
        {
          q: "Karşı taraf 'how are you feeling?' sorduğunda?",
          options: [
            "Tek kelime 'fine'",
            "Spesifik + dürüst + 'still processing'",
            "Yalan",
            "Konu değiştir",
          ],
          correct: 1,
          tr_explanation:
            "'Fine' = kapalı kapı. Modern dating: spesifik duygu paylaşımı = bağ kurma.",
        },
        {
          q: "'Day by day' kalıbı:",
          options: [
            "Günden güne (zaman içinde)",
            "Her gün ayrı",
            "Yapısal yanlış",
            "Hızla",
          ],
          correct: 0,
          tr_explanation:
            "'Day by day' = adım adım, zamanla. Zor süreçleri işlerken sağlıklı.",
        },
        {
          q: "'Been sitting with something' anlamı?",
          options: [
            "Bir şeyle oturmak",
            "Bir konuyu içselleştirmek/üzerinde düşünmek",
            "Beklemek",
            "Yapısal yanlış",
          ],
          correct: 1,
          tr_explanation:
            "'Sitting with' = düşünmek, sindirmek (mecaz). Olgun + öz farkındalık.",
        },
        {
          q: "Türk hatası: 'We must talk, very important'",
          options: [
            "Çok formal",
            "Emir + drama tonu = savunmaya iter",
            "Yapısal yanlış",
            "Çok kibar",
          ],
          correct: 1,
          tr_explanation:
            "'Must talk' = emir. 'Very important' = drama. Modern: davet + bağlam.",
        },
      ],
    },
  ],
};

export const flirtDeep_22: BundledLesson = {
  id: "flirt.deep.22",
  skill_id: "flirt.midrel",
  index: 22,
  title: "Annemle Video Tanistirma",
  description: "Annen Turkiye'de. Video aramada partnerini tanistir — kulturler kopruleyerek.",
  estimated_minutes: 7,
  exercises: [
    {
      id: "ex.fd22.1",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B2",
      word_or_phrase: "say hi",
      tr_translation: "Selam ver (yumusak tanitma giris)",
      example: "Come say hi — my mom won't bite, I promise.",
      example_tr: "Gel selam ver — annem isirmaz, soz.",
    },
    {
      id: "ex.fd22.vt2",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B2",
      word_or_phrase: "bonus points",
      tr_translation: "Ekstra puan (komik karsilik kalibi)",
      example: "Say merhaba — that gets you bonus points with my mom.",
      example_tr: "Merhaba de — annemden ekstra puan alirsin.",
    },
    {
      id: "ex.fd22.vt3",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "won't bite",
      tr_translation: "Isirmaz (rahatlatici klise)",
      example: "Come over — my mom won't bite, I promise.",
      example_tr: "Gel — annem isirmaz, soz.",
    },
    {
      id: "ex.fd22.vt4",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "do you eat enough",
      tr_translation: "Yeterince yiyor musun (Turk anne klisesi)",
      example: "She'll definitely ask if you eat enough — classic Turkish mom.",
      example_tr: "Yeterince yiyor musun diye soracak kesin — klasik Turk annesi.",
    },
    {
      id: "ex.fd22.vt5",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B2",
      word_or_phrase: "low stakes",
      tr_translation: "Dusuk bahis (riski az)",
      example: "Low stakes — just smile and wave.",
      example_tr: "Dusuk bahis — sadece gulumse ve el salla.",
    },
    {
      id: "ex.fd22.2",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description: "Annenle video. Partner cay yapiyor mutfakta. Cagiriyorsun, koprulu git.",
      npc_role: "Partner",
      setting: "Video call with mom, partner enters frame",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(hey |come here )(come |come over here )",
            "(my mom wants |annem ister )to say hi",
            "(annem |my mom )(is on video|wants to meet you)",
            "(don'?t panic |stay calm )— (it'?s just hello)",
            "(small wave is enough |you just wave )",
            "(she'?s been |my mom'?s been )(asking about you|wanting to see you)",
          ],
          model_answers: ["Come here — my mom wants to say hi. Don't panic, just hello."],
          hint_tr: "Davet: 'Come here — my mom wants to say hi. Don't panic, just hello.'",
        },
        {
          speaker: "npc",
          message: "Oh god — okay — what do I say? Do I say anything in Turkish?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(just |honestly just )(say hi|wave)",
            "(merhaba |say merhaba )= (hello in turkish|gets you bonus points)",
            "(she speaks |my mom speaks )(some english|okay english)",
            "(i'?ll translate |i'?m here to translate )",
            "(her english is |she'?s shy about )(better than she admits|her english)",
            "(low stakes |no exam )",
          ],
          model_answers: ["Just merhaba and wave. She speaks some English. I'll translate."],
          hint_tr: "Brief: 'Just merhaba and wave. She speaks some English. I'll translate.'",
        },
        {
          speaker: "npc",
          message: "(in frame, to phone) Merhaba! Hi — nice to meet you!",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(annem |mom — )this is (\\w+)",
            "(\\w+) — (my mom|meet mom)",
            "(she'?s been |annem wanted )(dying to meet you|to meet you for weeks)",
            "(go easy on her |be nice anne )",
            "(don'?t scare her off |be on best behavior )",
            "(she'?s smiling |look at that smile )",
          ],
          model_answers: ["Annem — this is [name]. She's been dying to meet you."],
          hint_tr: "Tanitma: 'Annem — this is [name]. She's been dying to meet you.'",
        },
        {
          speaker: "npc",
          message: "(after small talk) Your mom asked something — what did she say?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(she asked |annem )(if you eat enough|if i feed you)",
            "(turkish mom |classic turkish mom )(food question)",
            "(translation |loose translation )— (are you taking care of her)",
            "(she wants to know |she'?s asking )(if you cook|what you eat)",
            "(she'?s welcoming you |that means she likes you )",
            "(only mothers ask |only turkish moms ask )(things like that)",
          ],
          model_answers: ["Classic Turkish mom — she asked if you eat enough."],
          hint_tr: "Ceviri + baglam: 'Classic Turkish mom — she asked if you eat enough.'",
        },
        {
          speaker: "npc",
          message: "Tell her I eat too much, thanks to you. Was that okay to say?",
        },
      ],
    },
    {
      id: "ex.fd22.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      cefr_band: "B1",
      template: "I want to ___ with you about ___ — ___?",
      slots: [
        { accepted: ["talk honestly", "be open", "share something", "have a real conversation"] },
        { accepted: ["this", "where we're at", "how I'm feeling", "what's going on"] },
        { accepted: ["is now a good time", "can we sit down for a bit", "are you up for it", "would that be okay"] },
      ],
      tr_hint:
        "Önemli konu açma kalıbı: niyet + konu + saygılı zaman sorusu. 'Annemle Video Tanistirma' bağlamında — Türk öğrenci direkt konuya girer; bu sağlam ilk cümle değil. Yumuşatma + zaman kontrolü = saygılı + güvenli alan.",
      example_filled:
        "I want to talk honestly with you about where we're at — is now a good time?",
    },
    {
      id: "ex.fd22.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      cefr_band: "B1",
      turns: [
        { speaker: "npc", text: "What's on your mind?" },
        { speaker: "user" },
        { speaker: "npc", text: "Okay — I'm listening." },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(been (thinking|sitting) with|wanted to talk about)",
        "(might sound|this might sound) (.+)",
        "(want to (open up|be honest|share))",
        "(no pressure|just|honestly) (.+)",
        "(can we|could we) (.+)",
      ],
      tr_hint:
        "Konuyu açma — yumuşatma + dürüst niyet. 'Annemle Video Tanistirma' senaryosunda 'Been thinking about us — wanted to be honest. Can we talk?' tarzı.",
      ideal_answer:
        "Been thinking about something — want to be honest with you. Can we talk through it?",
    },
    {
      id: "ex.fd22.lr1",
      type: "listen_respond",
      difficulty: 3,
      cefr_band: "B1",
      npc_line: "How are you actually feeling about this?",
      accepted_patterns: [
        "(honestly|truthfully) (.+) (good|complicated|mixed)",
        "(part of me|some of me) (.+)",
        "(been (processing|sitting with|figuring out))",
        "(still working through|day by day)",
        "(grateful (you asked|for the space))",
      ],
      think_seconds: 3,
      tr_hint:
        "Dürüst + olgun duygu paylaşımı. 'Annemle Video Tanistirma' bağlamında. Türk öğrenci 'fine' der; bunu yapma; SPESİFİK + dürüst.",
      ideal_response:
        "Honestly? Mixed — still processing parts of it. Day by day.",
    },
    {
      id: "ex.fd22.tt1",
      type: "thinking_trap",
      difficulty: 3,
      cefr_band: "B1",
      tr_thought: "Konuşmamız lazım, çok önemli",
      wrong_en: "We must talk, very important.",
      right_en: "I'd love to talk something through with you — is now a good time?",
      why_tr:
        "Türk öğrenci 'konuşmamız lazım + önemli' kalıbını birebir çevirir = emir tonu + 'must' baskı yaratır + 'very important' dramatik. 'Annemle Video Tanistirma' gibi hassas konuda yumuşatma şart: 'I'd love to talk' (davet) + 'is now a good time' (saygılı zaman kontrolü).",
    },
    {
      id: "ex.fd22.rq1",
      type: "recall_quiz",
      difficulty: 3,
      cefr_band: "B1",
      items: [
        {
          q: "Önemli konuyu açarken en olgun yaklaşım?",
          options: [
            "'We must talk' (emir)",
            "'I'd love to talk — good time?' (davet + saygı)",
            "Sus, bekle",
            "Direkt konuya gir",
          ],
          correct: 1,
          tr_explanation:
            "Davet + zaman kontrolü = saygılı + güvenli alan. Emir = baskı = savunmaya iter.",
        },
        {
          q: "Karşı taraf 'how are you feeling?' sorduğunda?",
          options: [
            "Tek kelime 'fine'",
            "Spesifik + dürüst + 'still processing'",
            "Yalan",
            "Konu değiştir",
          ],
          correct: 1,
          tr_explanation:
            "'Fine' = kapalı kapı. Modern dating: spesifik duygu paylaşımı = bağ kurma.",
        },
        {
          q: "'Day by day' kalıbı:",
          options: [
            "Günden güne (zaman içinde)",
            "Her gün ayrı",
            "Yapısal yanlış",
            "Hızla",
          ],
          correct: 0,
          tr_explanation:
            "'Day by day' = adım adım, zamanla. Zor süreçleri işlerken sağlıklı.",
        },
        {
          q: "'Been sitting with something' anlamı?",
          options: [
            "Bir şeyle oturmak",
            "Bir konuyu içselleştirmek/üzerinde düşünmek",
            "Beklemek",
            "Yapısal yanlış",
          ],
          correct: 1,
          tr_explanation:
            "'Sitting with' = düşünmek, sindirmek (mecaz). Olgun + öz farkındalık.",
        },
        {
          q: "Türk hatası: 'We must talk, very important'",
          options: [
            "Çok formal",
            "Emir + drama tonu = savunmaya iter",
            "Yapısal yanlış",
            "Çok kibar",
          ],
          correct: 1,
          tr_explanation:
            "'Must talk' = emir. 'Very important' = drama. Modern: davet + bağlam.",
        },
      ],
    },
  ],
};

export const flirtDeep_23: BundledLesson = {
  id: "flirt.deep.23",
  skill_id: "flirt.midrel",
  index: 23,
  title: "Ilk 'I Love You' — Soyleyis Ani",
  description: "Uc aydan sonra ilk 'seni seviyorum' — durumu oku, dogru aniden kacma.",
  estimated_minutes: 6,
  exercises: [
    {
      id: "ex.fd23.1",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B2",
      word_or_phrase: "I love you",
      tr_translation: "Seni seviyorum (uc kelime cok agir gelmez)",
      example: "I'm just gonna say it — I love you.",
      example_tr: "Soyleyecegim — seni seviyorum.",
    },
    {
      id: "ex.fd23.vt2",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "no expectations",
      tr_translation: "Beklenti yok (baski kalibirsiz acilim)",
      example: "I love you — no expectations, just true.",
      example_tr: "Seni seviyorum — beklenti yok, sadece gercek.",
    },
    {
      id: "ex.fd23.vt3",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "C1",
      word_or_phrase: "internally screaming",
      tr_translation: "Icimde haykiriyorum (sakali kalp atislari)",
      example: "Looks calm — internally screaming.",
      example_tr: "Sakin gozukuyorum — icimde haykiriyorum.",
    },
    {
      id: "ex.fd23.vt4",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "say it back",
      tr_translation: "Geri soyle (asla zorlama yok)",
      example: "Don't feel like you have to say it back — just had to tell you.",
      example_tr: "Geri soylemek zorunda hissetme — sadece soylemem gerekiyordu.",
    },
    {
      id: "ex.fd23.vt5",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "sit with that",
      tr_translation: "Bu duyguyla otur (icsellesir)",
      example: "Can we just sit with that for a second?",
      example_tr: "Bir saniye bunla oturabilir miyiz?",
    },
    {
      id: "ex.fd23.2",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description: "Birlikte yemek pisirdiniz, ev sakin. Soyleme ani — net ve sade.",
      npc_role: "Partner",
      setting: "Quiet evening at home, after dinner",
      turns: [
        {
          speaker: "npc",
          message: "Why are you looking at me like that?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(no reason |just looking )",
            "(can i tell you |i want to tell you )something",
            "(don'?t make this |this is going to sound )(weird|cheesy)",
            "(i was thinking |kept thinking )(something all day|something this week)",
            "(promise you won'?t |don'?t freak out when i say this )",
            "(hold on |give me a sec )— (i need to say this right)",
          ],
          model_answers: ["I want to tell you something — don't freak out."],
          hint_tr: "Gerilim yarat: 'I want to tell you something — don't freak out.'",
        },
        {
          speaker: "npc",
          message: "Okay — say it.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i love you|i'?m in love with you)",
            "(i love you |seni seviyorum )",
            "(this is going to sound |okay here goes )— (i love you)",
            "(i'?ve been |i'?ve known )(wanting to say this|for a while)",
            "(no expectations |you don'?t have to say it back )— (just true)",
            "(i love you and i wanted you to know|that'?s the sentence)",
          ],
          model_answers: ["I love you. No expectations — just true."],
          hint_tr: "Net soyle: 'I love you. No expectations — just true.'",
        },
        {
          speaker: "npc",
          message: "Oh — okay — I love you too. Why are you so calm about this?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(calm on the outside |looks calm — i'?m a mess inside )",
            "(internally screaming |my heart is fine — externally )",
            "(took me a week |i practiced this in the shower )",
            "(do you think this is calm |i waited so long my whole body shut down )",
            "(rehearsed it |i thought about saying it on like four occasions )",
            "(thank god |relief )",
          ],
          model_answers: ["Internally screaming — I practiced this in the shower."],
          hint_tr: "Sahici reaksiyon: 'Internally screaming — I practiced this in the shower.'",
        },
        {
          speaker: "npc",
          message: "Hahaha — okay you cute weird person. Come here.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(can we |can we just )(sit with that for a second)",
            "(don'?t move |don'?t go anywhere )",
            "(this is the |this is officially the )best part of my week",
            "(i'?m officially |i'?m gonna remember this )",
            "(let'?s just |let'?s be quiet for a minute )",
            "(coming over |on my way )",
          ],
          model_answers: ["Can we sit with that for a second? Don't go anywhere."],
          hint_tr: "Romantik kalis: 'Can we sit with that for a second? Don't go anywhere.'",
        },
        {
          speaker: "npc",
          message: "Okay weirdo — but I love you also and we're not moving from this couch.",
        },
      ],
    },
    {
      id: "ex.fd23.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      cefr_band: "B1",
      template: "I want to ___ with you about ___ — ___?",
      slots: [
        { accepted: ["talk honestly", "be open", "share something", "have a real conversation"] },
        { accepted: ["this", "where we're at", "how I'm feeling", "what's going on"] },
        { accepted: ["is now a good time", "can we sit down for a bit", "are you up for it", "would that be okay"] },
      ],
      tr_hint:
        "Önemli konu açma kalıbı: niyet + konu + saygılı zaman sorusu. 'Ilk 'I Love You' — Soyleyis Ani' bağlamında — Türk öğrenci direkt konuya girer; bu sağlam ilk cümle değil. Yumuşatma + zaman kontrolü = saygılı + güvenli alan.",
      example_filled:
        "I want to talk honestly with you about where we're at — is now a good time?",
    },
    {
      id: "ex.fd23.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      cefr_band: "B1",
      turns: [
        { speaker: "npc", text: "What's on your mind?" },
        { speaker: "user" },
        { speaker: "npc", text: "Okay — I'm listening." },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(been (thinking|sitting) with|wanted to talk about)",
        "(might sound|this might sound) (.+)",
        "(want to (open up|be honest|share))",
        "(no pressure|just|honestly) (.+)",
        "(can we|could we) (.+)",
      ],
      tr_hint:
        "Konuyu açma — yumuşatma + dürüst niyet. 'Ilk 'I Love You' — Soyleyis Ani' senaryosunda 'Been thinking about us — wanted to be honest. Can we talk?' tarzı.",
      ideal_answer:
        "Been thinking about something — want to be honest with you. Can we talk through it?",
    },
    {
      id: "ex.fd23.lr1",
      type: "listen_respond",
      difficulty: 3,
      cefr_band: "B1",
      npc_line: "How are you actually feeling about this?",
      accepted_patterns: [
        "(honestly|truthfully) (.+) (good|complicated|mixed)",
        "(part of me|some of me) (.+)",
        "(been (processing|sitting with|figuring out))",
        "(still working through|day by day)",
        "(grateful (you asked|for the space))",
      ],
      think_seconds: 3,
      tr_hint:
        "Dürüst + olgun duygu paylaşımı. 'Ilk 'I Love You' — Soyleyis Ani' bağlamında. Türk öğrenci 'fine' der; bunu yapma; SPESİFİK + dürüst.",
      ideal_response:
        "Honestly? Mixed — still processing parts of it. Day by day.",
    },
    {
      id: "ex.fd23.tt1",
      type: "thinking_trap",
      difficulty: 3,
      cefr_band: "B1",
      tr_thought: "Konuşmamız lazım, çok önemli",
      wrong_en: "We must talk, very important.",
      right_en: "I'd love to talk something through with you — is now a good time?",
      why_tr:
        "Türk öğrenci 'konuşmamız lazım + önemli' kalıbını birebir çevirir = emir tonu + 'must' baskı yaratır + 'very important' dramatik. 'Ilk 'I Love You' — Soyleyis Ani' gibi hassas konuda yumuşatma şart: 'I'd love to talk' (davet) + 'is now a good time' (saygılı zaman kontrolü).",
    },
    {
      id: "ex.fd23.rq1",
      type: "recall_quiz",
      difficulty: 3,
      cefr_band: "B1",
      items: [
        {
          q: "Önemli konuyu açarken en olgun yaklaşım?",
          options: [
            "'We must talk' (emir)",
            "'I'd love to talk — good time?' (davet + saygı)",
            "Sus, bekle",
            "Direkt konuya gir",
          ],
          correct: 1,
          tr_explanation:
            "Davet + zaman kontrolü = saygılı + güvenli alan. Emir = baskı = savunmaya iter.",
        },
        {
          q: "Karşı taraf 'how are you feeling?' sorduğunda?",
          options: [
            "Tek kelime 'fine'",
            "Spesifik + dürüst + 'still processing'",
            "Yalan",
            "Konu değiştir",
          ],
          correct: 1,
          tr_explanation:
            "'Fine' = kapalı kapı. Modern dating: spesifik duygu paylaşımı = bağ kurma.",
        },
        {
          q: "'Day by day' kalıbı:",
          options: [
            "Günden güne (zaman içinde)",
            "Her gün ayrı",
            "Yapısal yanlış",
            "Hızla",
          ],
          correct: 0,
          tr_explanation:
            "'Day by day' = adım adım, zamanla. Zor süreçleri işlerken sağlıklı.",
        },
        {
          q: "'Been sitting with something' anlamı?",
          options: [
            "Bir şeyle oturmak",
            "Bir konuyu içselleştirmek/üzerinde düşünmek",
            "Beklemek",
            "Yapısal yanlış",
          ],
          correct: 1,
          tr_explanation:
            "'Sitting with' = düşünmek, sindirmek (mecaz). Olgun + öz farkındalık.",
        },
        {
          q: "Türk hatası: 'We must talk, very important'",
          options: [
            "Çok formal",
            "Emir + drama tonu = savunmaya iter",
            "Yapısal yanlış",
            "Çok kibar",
          ],
          correct: 1,
          tr_explanation:
            "'Must talk' = emir. 'Very important' = drama. Modern: davet + bağlam.",
        },
      ],
    },
  ],
};

export const flirtDeep_24: BundledLesson = {
  id: "flirt.deep.24",
  skill_id: "flirt.midrel",
  index: 24,
  title: "Gelecek Konusmasi — Uzun Vade",
  description: "Alti ay birlikte. Gelecek planlari hakkinda dogru bilmeniz gerek.",
  estimated_minutes: 6,
  exercises: [
    {
      id: "ex.fd24.1",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B2",
      word_or_phrase: "on the same page",
      tr_translation: "Ayni sayfada (uyumlu, ayni vizyonda)",
      example: "I want to make sure we're on the same page about the future.",
      example_tr: "Gelecek konusunda ayni sayfada oldugumuzdan emin olmak istiyorum.",
    },
    {
      id: "ex.fd24.vt2",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "C1",
      word_or_phrase: "future-proofing",
      tr_translation: "Gelecege guvence saglamak (planlama kalibi)",
      example: "Not a heavy talk — just future-proofing.",
      example_tr: "Agir bir konusma degil — sadece gelecege guvence.",
    },
    {
      id: "ex.fd24.vt3",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "C1",
      word_or_phrase: "see us together",
      tr_translation: "Bizi birlikte goruyorum (uzun vade sinyali)",
      example: "Honestly — I see us together long-term.",
      example_tr: "Durust — bizi uzun vadede birlikte goruyorum.",
    },
    {
      id: "ex.fd24.vt4",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "revisit",
      tr_translation: "Tekrar konusmak (esnek planlama)",
      example: "Let's revisit this every six months.",
      example_tr: "Bunu alti ayda bir tekrar konusalim.",
    },
    {
      id: "ex.fd24.vt5",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "somewhere we both choose",
      tr_translation: "Ikimizin de sectigi bir yer (esit karar kalibi)",
      example: "Long-term — somewhere we both choose, not just one of us.",
      example_tr: "Uzun vade — sadece birimizin degil, ikimizin sectigi bir yer.",
    },
    {
      id: "ex.fd24.2",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description: "Aksamleyin sakin sohbet. Uzun vade vizyonu hakkinda dogrulama.",
      npc_role: "Partner",
      setting: "Quiet conversation, six months in",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(can we talk |i want to talk )about (the long term|the future|big stuff)",
            "(no panic |not a heavy convo )— (just curiosity)",
            "(i want to be |let'?s be )on the same page",
            "(where do you see |what does the next |how do you imagine )(next two years|five years)",
            "(not asking |this isn'?t a proposal )(for plans|in writing)",
            "(this is the |these are the )(open conversations i want)",
          ],
          model_answers: ["Can we talk about the long term? No panic — just curiosity."],
          hint_tr: "Aciklamayla ac: 'Can we talk about the long term? No panic — just curiosity.'",
        },
        {
          speaker: "npc",
          message: "Sure. What's prompting it?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(my visa expires |residence is up )(in eighteen months)",
            "(i need to think |started thinking about) (staying|going back|next chapter)",
            "(doesn'?t feel right |felt weird ) (not knowing where you stand)",
            "(you'?re part of |you'?re in )my (future planning|decisions)",
            "(no major change |nothing immediate ) — (just future.?proofing)",
            "(i love |i love what we have ) (and want to be honest)",
          ],
          model_answers: ["My visa expires in eighteen months — you're in my planning."],
          hint_tr: "Sebep ver: 'My visa expires in eighteen months — you're in my planning.'",
        },
        {
          speaker: "npc",
          message: "Okay. Honestly — I see us together long-term. I don't know where yet.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(same |me too )",
            "(that'?s the |that'?s exactly what i wanted to hear )",
            "(are you open to |would you consider )(moving|relocating) (if needed)",
            "(would you ever |could you see yourself ) (in turkey|abroad)",
            "(or are we figuring out |we'?ll figure out where together)",
            "(i don'?t need an answer |we don'?t have to solve it today )",
          ],
          model_answers: ["Same. Would you ever consider moving if needed?"],
          hint_tr: "Karsila + sor: 'Same. Would you ever consider moving if needed?'",
        },
        {
          speaker: "npc",
          message: "Yes — I'd consider it. Not Istanbul forever, but somewhere we both choose.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(that'?s |that'?s honestly )(more than i hoped for|exactly the answer i wanted)",
            "(somewhere we both choose |a place we both choose ) — (i'?m here for that)",
            "(let'?s plan |should we revisit )(this once a year|every six months)",
            "(i'?ll do the |i'?ll be the same on my side )",
            "(thank you for |grateful for )(taking this seriously)",
            "(this is the |these are the )(conversations i wanted)",
          ],
          model_answers: ["Exactly the answer I wanted. Let's revisit this every six months."],
          hint_tr: "Onayla: 'Exactly the answer I wanted. Let's revisit this every six months.'",
        },
        {
          speaker: "npc",
          message: "Deal. I love that we can talk like this — most of my exes never could.",
        },
      ],
    },
    {
      id: "ex.fd24.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      cefr_band: "B1",
      template: "I want to ___ with you about ___ — ___?",
      slots: [
        { accepted: ["talk honestly", "be open", "share something", "have a real conversation"] },
        { accepted: ["this", "where we're at", "how I'm feeling", "what's going on"] },
        { accepted: ["is now a good time", "can we sit down for a bit", "are you up for it", "would that be okay"] },
      ],
      tr_hint:
        "Önemli konu açma kalıbı: niyet + konu + saygılı zaman sorusu. 'Gelecek Konusmasi — Uzun Vade' bağlamında — Türk öğrenci direkt konuya girer; bu sağlam ilk cümle değil. Yumuşatma + zaman kontrolü = saygılı + güvenli alan.",
      example_filled:
        "I want to talk honestly with you about where we're at — is now a good time?",
    },
    {
      id: "ex.fd24.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      cefr_band: "B1",
      turns: [
        { speaker: "npc", text: "What's on your mind?" },
        { speaker: "user" },
        { speaker: "npc", text: "Okay — I'm listening." },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(been (thinking|sitting) with|wanted to talk about)",
        "(might sound|this might sound) (.+)",
        "(want to (open up|be honest|share))",
        "(no pressure|just|honestly) (.+)",
        "(can we|could we) (.+)",
      ],
      tr_hint:
        "Konuyu açma — yumuşatma + dürüst niyet. 'Gelecek Konusmasi — Uzun Vade' senaryosunda 'Been thinking about us — wanted to be honest. Can we talk?' tarzı.",
      ideal_answer:
        "Been thinking about something — want to be honest with you. Can we talk through it?",
    },
    {
      id: "ex.fd24.lr1",
      type: "listen_respond",
      difficulty: 3,
      cefr_band: "B1",
      npc_line: "How are you actually feeling about this?",
      accepted_patterns: [
        "(honestly|truthfully) (.+) (good|complicated|mixed)",
        "(part of me|some of me) (.+)",
        "(been (processing|sitting with|figuring out))",
        "(still working through|day by day)",
        "(grateful (you asked|for the space))",
      ],
      think_seconds: 3,
      tr_hint:
        "Dürüst + olgun duygu paylaşımı. 'Gelecek Konusmasi — Uzun Vade' bağlamında. Türk öğrenci 'fine' der; bunu yapma; SPESİFİK + dürüst.",
      ideal_response:
        "Honestly? Mixed — still processing parts of it. Day by day.",
    },
    {
      id: "ex.fd24.tt1",
      type: "thinking_trap",
      difficulty: 3,
      cefr_band: "B1",
      tr_thought: "Konuşmamız lazım, çok önemli",
      wrong_en: "We must talk, very important.",
      right_en: "I'd love to talk something through with you — is now a good time?",
      why_tr:
        "Türk öğrenci 'konuşmamız lazım + önemli' kalıbını birebir çevirir = emir tonu + 'must' baskı yaratır + 'very important' dramatik. 'Gelecek Konusmasi — Uzun Vade' gibi hassas konuda yumuşatma şart: 'I'd love to talk' (davet) + 'is now a good time' (saygılı zaman kontrolü).",
    },
    {
      id: "ex.fd24.rq1",
      type: "recall_quiz",
      difficulty: 3,
      cefr_band: "B1",
      items: [
        {
          q: "Önemli konuyu açarken en olgun yaklaşım?",
          options: [
            "'We must talk' (emir)",
            "'I'd love to talk — good time?' (davet + saygı)",
            "Sus, bekle",
            "Direkt konuya gir",
          ],
          correct: 1,
          tr_explanation:
            "Davet + zaman kontrolü = saygılı + güvenli alan. Emir = baskı = savunmaya iter.",
        },
        {
          q: "Karşı taraf 'how are you feeling?' sorduğunda?",
          options: [
            "Tek kelime 'fine'",
            "Spesifik + dürüst + 'still processing'",
            "Yalan",
            "Konu değiştir",
          ],
          correct: 1,
          tr_explanation:
            "'Fine' = kapalı kapı. Modern dating: spesifik duygu paylaşımı = bağ kurma.",
        },
        {
          q: "'Day by day' kalıbı:",
          options: [
            "Günden güne (zaman içinde)",
            "Her gün ayrı",
            "Yapısal yanlış",
            "Hızla",
          ],
          correct: 0,
          tr_explanation:
            "'Day by day' = adım adım, zamanla. Zor süreçleri işlerken sağlıklı.",
        },
        {
          q: "'Been sitting with something' anlamı?",
          options: [
            "Bir şeyle oturmak",
            "Bir konuyu içselleştirmek/üzerinde düşünmek",
            "Beklemek",
            "Yapısal yanlış",
          ],
          correct: 1,
          tr_explanation:
            "'Sitting with' = düşünmek, sindirmek (mecaz). Olgun + öz farkındalık.",
        },
        {
          q: "Türk hatası: 'We must talk, very important'",
          options: [
            "Çok formal",
            "Emir + drama tonu = savunmaya iter",
            "Yapısal yanlış",
            "Çok kibar",
          ],
          correct: 1,
          tr_explanation:
            "'Must talk' = emir. 'Very important' = drama. Modern: davet + bağlam.",
        },
      ],
    },
  ],
};

export const flirtDeep_25: BundledLesson = {
  id: "flirt.deep.25",
  skill_id: "flirt.midrel",
  index: 25,
  title: "Para Konusmasi — Masraflari Bolusturme",
  description: "Birlikte yasamiyorsunuz ama paralar karisiyor. Net sistemi konus.",
  estimated_minutes: 6,
  exercises: [
    {
      id: "ex.fd25.1",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B2",
      word_or_phrase: "even out",
      tr_translation: "Esitlenmek, dengelenmek (uzun vade ayar)",
      example: "It evens out over time — don't keep score on every coffee.",
      example_tr: "Zamanla esitleniyor — her kahvenin hesabini tutma.",
    },
    {
      id: "ex.fd25.vt2",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B2",
      word_or_phrase: "keep score",
      tr_translation: "Hesap tutmak (saglikli olmayan dinamik)",
      example: "Let's not keep score — it kills the vibe.",
      example_tr: "Hesap tutmayalim — havayi oldurur.",
    },
    {
      id: "ex.fd25.vt3",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "splitwise",
      tr_translation: "Hesap paylasma uygulamasi (modern cift kalibi)",
      example: "We use splitwise — saves us the math.",
      example_tr: "Splitwise kullaniyoruz — hesabi kurtarir.",
    },
    {
      id: "ex.fd25.vt4",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "C1",
      word_or_phrase: "income difference",
      tr_translation: "Gelir farki (esit olmayan bolusme kalibi)",
      example: "We adjust for the income difference — it's not equal-equal.",
      example_tr: "Gelir farkina gore ayarliyoruz — birebir esit degil.",
    },
    {
      id: "ex.fd25.vt5",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "flag it",
      tr_translation: "Isaret koymak (rahatsizlik soyleme kalibi)",
      example: "Trust me to flag it if it ever feels unbalanced.",
      example_tr: "Dengesizlik hissedersem soyleyecegime guven.",
    },
    {
      id: "ex.fd25.2",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description: "Aksamleyin yemegi sen aldin yine. Para sistemi konusunda netlik gerekli.",
      npc_role: "Partner",
      setting: "Dinner — quiet money conversation",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(can we |we should )(talk about money|sort out the money thing)",
            "(not a big deal |relax — small thing )",
            "(i'?ve been getting |i keep getting )(most of the bills lately)",
            "(want to be |i need us to be )fair about this",
            "(let'?s set up |should we set up ) a system",
            "(we should figure out |i don'?t want resentment )",
          ],
          model_answers: ["We should talk about money — not a big deal, just want to be fair."],
          hint_tr: "Sen ac: 'We should talk about money — not a big deal, just want to be fair.'",
        },
        {
          speaker: "npc",
          message: "Yeah — sorry, I've meant to bring it up. What were you thinking?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(options are |basically two options )",
            "(splitting everything |just splitting it down the middle ) (every time)",
            "(turns paying |we alternate ) (\\w+) — (and let it even out)",
            "(shared spreadsheet |using splitwise )",
            "(my preference |i like ) (alternating with no math)",
            "(what feels |what works )fairer to you",
          ],
          model_answers: ["Alternating with no math, or splitwise — what feels fairer?"],
          hint_tr: "Secenek sun: 'Alternating with no math, or splitwise — what feels fairer?'",
        },
        {
          speaker: "npc",
          message: "Alternating sounds chill. But I want to make sure I'm not under-paying.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(trust me to |you can trust me to )(speak up if it'?s off)",
            "(i'?ll say something |i promise i'?ll flag )(if it gets unbalanced)",
            "(zero ego |no ego ) about saying (it'?s your turn)",
            "(if i feel |if it feels uneven ) (you'?ll know)",
            "(let'?s check in |we'?ll review )(monthly|every month or two)",
            "(it'?s also okay |sometimes one of us will pay more )(because of income difference)",
          ],
          model_answers: ["Trust me to speak up. We'll check in monthly."],
          hint_tr: "Soz ver: 'Trust me to speak up. We'll check in monthly.'",
        },
        {
          speaker: "npc",
          message: "Okay. And big trips — we split those down the middle, no rotating?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes |big stuff we split )",
            "(trips |big purchases ) — (\\d+/\\d+|half and half)",
            "(let'?s define |should we define )big (as anything over \\d+)",
            "(small stuff is rotating |daily stuff alternates )",
            "(big stuff is itemized |big stuff splits exactly )",
            "(makes sense |that'?s the right rule )",
          ],
          model_answers: ["Big stuff splits 50/50. Daily stuff alternates."],
          hint_tr: "Net kural: 'Big stuff splits 50/50. Daily stuff alternates.'",
        },
        {
          speaker: "npc",
          message: "Perfect. I feel weirdly more in love with you after this conversation.",
        },
      ],
    },
    {
      id: "ex.fd25.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      cefr_band: "B1",
      template: "I want to ___ with you about ___ — ___?",
      slots: [
        { accepted: ["talk honestly", "be open", "share something", "have a real conversation"] },
        { accepted: ["this", "where we're at", "how I'm feeling", "what's going on"] },
        { accepted: ["is now a good time", "can we sit down for a bit", "are you up for it", "would that be okay"] },
      ],
      tr_hint:
        "Önemli konu açma kalıbı: niyet + konu + saygılı zaman sorusu. 'Para Konusmasi — Masraflari Bolusturme' bağlamında — Türk öğrenci direkt konuya girer; bu sağlam ilk cümle değil. Yumuşatma + zaman kontrolü = saygılı + güvenli alan.",
      example_filled:
        "I want to talk honestly with you about where we're at — is now a good time?",
    },
    {
      id: "ex.fd25.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      cefr_band: "B1",
      turns: [
        { speaker: "npc", text: "What's on your mind?" },
        { speaker: "user" },
        { speaker: "npc", text: "Okay — I'm listening." },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(been (thinking|sitting) with|wanted to talk about)",
        "(might sound|this might sound) (.+)",
        "(want to (open up|be honest|share))",
        "(no pressure|just|honestly) (.+)",
        "(can we|could we) (.+)",
      ],
      tr_hint:
        "Konuyu açma — yumuşatma + dürüst niyet. 'Para Konusmasi — Masraflari Bolusturme' senaryosunda 'Been thinking about us — wanted to be honest. Can we talk?' tarzı.",
      ideal_answer:
        "Been thinking about something — want to be honest with you. Can we talk through it?",
    },
    {
      id: "ex.fd25.lr1",
      type: "listen_respond",
      difficulty: 3,
      cefr_band: "B1",
      npc_line: "How are you actually feeling about this?",
      accepted_patterns: [
        "(honestly|truthfully) (.+) (good|complicated|mixed)",
        "(part of me|some of me) (.+)",
        "(been (processing|sitting with|figuring out))",
        "(still working through|day by day)",
        "(grateful (you asked|for the space))",
      ],
      think_seconds: 3,
      tr_hint:
        "Dürüst + olgun duygu paylaşımı. 'Para Konusmasi — Masraflari Bolusturme' bağlamında. Türk öğrenci 'fine' der; bunu yapma; SPESİFİK + dürüst.",
      ideal_response:
        "Honestly? Mixed — still processing parts of it. Day by day.",
    },
    {
      id: "ex.fd25.tt1",
      type: "thinking_trap",
      difficulty: 3,
      cefr_band: "B1",
      tr_thought: "Konuşmamız lazım, çok önemli",
      wrong_en: "We must talk, very important.",
      right_en: "I'd love to talk something through with you — is now a good time?",
      why_tr:
        "Türk öğrenci 'konuşmamız lazım + önemli' kalıbını birebir çevirir = emir tonu + 'must' baskı yaratır + 'very important' dramatik. 'Para Konusmasi — Masraflari Bolusturme' gibi hassas konuda yumuşatma şart: 'I'd love to talk' (davet) + 'is now a good time' (saygılı zaman kontrolü).",
    },
    {
      id: "ex.fd25.rq1",
      type: "recall_quiz",
      difficulty: 3,
      cefr_band: "B1",
      items: [
        {
          q: "Önemli konuyu açarken en olgun yaklaşım?",
          options: [
            "'We must talk' (emir)",
            "'I'd love to talk — good time?' (davet + saygı)",
            "Sus, bekle",
            "Direkt konuya gir",
          ],
          correct: 1,
          tr_explanation:
            "Davet + zaman kontrolü = saygılı + güvenli alan. Emir = baskı = savunmaya iter.",
        },
        {
          q: "Karşı taraf 'how are you feeling?' sorduğunda?",
          options: [
            "Tek kelime 'fine'",
            "Spesifik + dürüst + 'still processing'",
            "Yalan",
            "Konu değiştir",
          ],
          correct: 1,
          tr_explanation:
            "'Fine' = kapalı kapı. Modern dating: spesifik duygu paylaşımı = bağ kurma.",
        },
        {
          q: "'Day by day' kalıbı:",
          options: [
            "Günden güne (zaman içinde)",
            "Her gün ayrı",
            "Yapısal yanlış",
            "Hızla",
          ],
          correct: 0,
          tr_explanation:
            "'Day by day' = adım adım, zamanla. Zor süreçleri işlerken sağlıklı.",
        },
        {
          q: "'Been sitting with something' anlamı?",
          options: [
            "Bir şeyle oturmak",
            "Bir konuyu içselleştirmek/üzerinde düşünmek",
            "Beklemek",
            "Yapısal yanlış",
          ],
          correct: 1,
          tr_explanation:
            "'Sitting with' = düşünmek, sindirmek (mecaz). Olgun + öz farkındalık.",
        },
        {
          q: "Türk hatası: 'We must talk, very important'",
          options: [
            "Çok formal",
            "Emir + drama tonu = savunmaya iter",
            "Yapısal yanlış",
            "Çok kibar",
          ],
          correct: 1,
          tr_explanation:
            "'Must talk' = emir. 'Very important' = drama. Modern: davet + bağlam.",
        },
      ],
    },
  ],
};

export const flirtDeep_26: BundledLesson = {
  id: "flirt.deep.26",
  skill_id: "flirt.midrel",
  index: 26,
  title: "Birlikte Yasama — Karar Konusmasi",
  description: "Cogu zaman birinin evinde kaliyorsunuz. Resmi 'move in' karari konus.",
  estimated_minutes: 7,
  exercises: [
    {
      id: "ex.fd26.1",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B2",
      word_or_phrase: "move in together",
      tr_translation: "Birlikte yasamaya baslamak (ortaklasik)",
      example: "Are we ready to talk about moving in together?",
      example_tr: "Birlikte yasamak hakkinda konusmaya hazir miyiz?",
    },
    {
      id: "ex.fd26.2",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B2",
      word_or_phrase: "stress test",
      tr_translation: "Test etmek (iliski dayanikliligi)",
      example: "Living together is the real stress test.",
      example_tr: "Birlikte yasamak iliskinin asil testidir.",
    },
    {
      id: "ex.fd26.vt3",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B2",
      word_or_phrase: "permanent toothbrush",
      tr_translation: "Surekli dis fircasi (yari yasama sinyali)",
      example: "I have a permanent toothbrush at your place — let's just commit.",
      example_tr: "Senin evde surekli dis fircam var — artik resmi olalim.",
    },
    {
      id: "ex.fd26.vt4",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "C1",
      word_or_phrase: "set ground rules",
      tr_translation: "Temel kurallari belirlemek (saglikli baslangic)",
      example: "Let's set ground rules before we sign a lease together.",
      example_tr: "Kira sozlesmesi imzalamadan once temel kurallari belirleyelim.",
    },
    {
      id: "ex.fd26.vt5",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "guest policy",
      tr_translation: "Misafir politikasi (birlikte yasama detayi)",
      example: "What's our guest policy? Family visits, friends crashing?",
      example_tr: "Misafir politikamiz ne? Aile ziyaretleri, arkadas kalmasi?",
    },
    {
      id: "ex.fd26.vt6",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B2",
      word_or_phrase: "checklist date",
      tr_translation: "Liste tarzi randevu (planlama sakasi)",
      example: "Let's do the checklist date — wine and a Google doc.",
      example_tr: "Liste tarzi randevu yapalim — sarap ve Google dokuman.",
    },
    {
      id: "ex.fd26.3",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description: "Sen 'iki gun digerinin evi' demekten yorgun. Birlikte yasama tartismasi.",
      npc_role: "Partner",
      setting: "Sunday morning, after another sleepover",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(this is the |it'?s like the )(third weekend in a row|the fourth time this month)",
            "(should we |is it time to )(talk about|consider) (moving in)",
            "(my bag is |i have a permanent toothbrush )here (anyway|at this point)",
            "(does it |does this )(make sense|feel right) (to combine)",
            "(separate places |two leases ) (feels wasteful)",
            "(have you thought |i'?ve been thinking )about (it)",
          ],
          model_answers: ["I have a permanent toothbrush here. Should we consider moving in?"],
          hint_tr: "Sen ac: 'I have a permanent toothbrush here. Should we consider moving in?'",
        },
        {
          speaker: "npc",
          message: "I've been thinking about it too. Are you sure though? It's a big step.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i'?m |i am )(genuinely ready|seriously thinking about it)",
            "(it'?s a |i know it'?s a )big step (— and i want to take it slowly)",
            "(let'?s talk about |what would the practicalities ) (look like)",
            "(it'?s also |it'?s the )(real stress test|biggest test)",
            "(can we |should we ) (set conditions|set ground rules)",
            "(i don'?t want to |if either of us has doubts) (rush this)",
          ],
          model_answers: ["Genuinely ready, but let's set conditions. It's the real stress test."],
          hint_tr: "Durust: 'Genuinely ready, but let's set conditions. It's the real stress test.'",
        },
        {
          speaker: "npc",
          message: "What do you mean — set conditions?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(stuff like |things like )(chores|cleanliness|sleep schedules)",
            "(how we handle |what we do when ) (one of us needs space)",
            "(rent split |bills split ) and (decoration veto power)",
            "(guest policies |what about when family visits )",
            "(can we afford it |the budget side )",
            "(the stuff that breaks |the stuff that destroys couples ) (when ignored)",
          ],
          model_answers: ["Chores, sleep schedules, what we do when one of us needs space."],
          hint_tr: "Detay sun: 'Chores, sleep schedules, what we do when one of us needs space.'",
        },
        {
          speaker: "npc",
          message: "Okay let's make a list this weekend. I want this to work.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(perfect — |love that )",
            "(we'?ll do the |let'?s do the )(weird checklist date)",
            "(make a |list with )(spreadsheet|google doc)",
            "(this is the |romantic checklist date — )(my favorite kind)",
            "(i'?ll bring wine |i'?ll do snacks )",
            "(turning logistics into |let'?s make this fun )",
          ],
          model_answers: ["Love that — we'll do the weird checklist date with wine."],
          hint_tr: "Kabul: 'Love that — we'll do the weird checklist date with wine.'",
        },
        {
          speaker: "npc",
          message: "You're the only person who'd call a checklist romantic. I love you.",
        },
      ],
    },
    {
      id: "ex.fd26.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      cefr_band: "B1",
      template: "I want to ___ with you about ___ — ___?",
      slots: [
        { accepted: ["talk honestly", "be open", "share something", "have a real conversation"] },
        { accepted: ["this", "where we're at", "how I'm feeling", "what's going on"] },
        { accepted: ["is now a good time", "can we sit down for a bit", "are you up for it", "would that be okay"] },
      ],
      tr_hint:
        "Önemli konu açma kalıbı: niyet + konu + saygılı zaman sorusu. 'Birlikte Yasama — Karar Konusmasi' bağlamında — Türk öğrenci direkt konuya girer; bu sağlam ilk cümle değil. Yumuşatma + zaman kontrolü = saygılı + güvenli alan.",
      example_filled:
        "I want to talk honestly with you about where we're at — is now a good time?",
    },
    {
      id: "ex.fd26.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      cefr_band: "B1",
      turns: [
        { speaker: "npc", text: "What's on your mind?" },
        { speaker: "user" },
        { speaker: "npc", text: "Okay — I'm listening." },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(been (thinking|sitting) with|wanted to talk about)",
        "(might sound|this might sound) (.+)",
        "(want to (open up|be honest|share))",
        "(no pressure|just|honestly) (.+)",
        "(can we|could we) (.+)",
      ],
      tr_hint:
        "Konuyu açma — yumuşatma + dürüst niyet. 'Birlikte Yasama — Karar Konusmasi' senaryosunda 'Been thinking about us — wanted to be honest. Can we talk?' tarzı.",
      ideal_answer:
        "Been thinking about something — want to be honest with you. Can we talk through it?",
    },
    {
      id: "ex.fd26.lr1",
      type: "listen_respond",
      difficulty: 3,
      cefr_band: "B1",
      npc_line: "How are you actually feeling about this?",
      accepted_patterns: [
        "(honestly|truthfully) (.+) (good|complicated|mixed)",
        "(part of me|some of me) (.+)",
        "(been (processing|sitting with|figuring out))",
        "(still working through|day by day)",
        "(grateful (you asked|for the space))",
      ],
      think_seconds: 3,
      tr_hint:
        "Dürüst + olgun duygu paylaşımı. 'Birlikte Yasama — Karar Konusmasi' bağlamında. Türk öğrenci 'fine' der; bunu yapma; SPESİFİK + dürüst.",
      ideal_response:
        "Honestly? Mixed — still processing parts of it. Day by day.",
    },
    {
      id: "ex.fd26.tt1",
      type: "thinking_trap",
      difficulty: 3,
      cefr_band: "B1",
      tr_thought: "Konuşmamız lazım, çok önemli",
      wrong_en: "We must talk, very important.",
      right_en: "I'd love to talk something through with you — is now a good time?",
      why_tr:
        "Türk öğrenci 'konuşmamız lazım + önemli' kalıbını birebir çevirir = emir tonu + 'must' baskı yaratır + 'very important' dramatik. 'Birlikte Yasama — Karar Konusmasi' gibi hassas konuda yumuşatma şart: 'I'd love to talk' (davet) + 'is now a good time' (saygılı zaman kontrolü).",
    },
    {
      id: "ex.fd26.rq1",
      type: "recall_quiz",
      difficulty: 3,
      cefr_band: "B1",
      items: [
        {
          q: "Önemli konuyu açarken en olgun yaklaşım?",
          options: [
            "'We must talk' (emir)",
            "'I'd love to talk — good time?' (davet + saygı)",
            "Sus, bekle",
            "Direkt konuya gir",
          ],
          correct: 1,
          tr_explanation:
            "Davet + zaman kontrolü = saygılı + güvenli alan. Emir = baskı = savunmaya iter.",
        },
        {
          q: "Karşı taraf 'how are you feeling?' sorduğunda?",
          options: [
            "Tek kelime 'fine'",
            "Spesifik + dürüst + 'still processing'",
            "Yalan",
            "Konu değiştir",
          ],
          correct: 1,
          tr_explanation:
            "'Fine' = kapalı kapı. Modern dating: spesifik duygu paylaşımı = bağ kurma.",
        },
        {
          q: "'Day by day' kalıbı:",
          options: [
            "Günden güne (zaman içinde)",
            "Her gün ayrı",
            "Yapısal yanlış",
            "Hızla",
          ],
          correct: 0,
          tr_explanation:
            "'Day by day' = adım adım, zamanla. Zor süreçleri işlerken sağlıklı.",
        },
        {
          q: "'Been sitting with something' anlamı?",
          options: [
            "Bir şeyle oturmak",
            "Bir konuyu içselleştirmek/üzerinde düşünmek",
            "Beklemek",
            "Yapısal yanlış",
          ],
          correct: 1,
          tr_explanation:
            "'Sitting with' = düşünmek, sindirmek (mecaz). Olgun + öz farkındalık.",
        },
        {
          q: "Türk hatası: 'We must talk, very important'",
          options: [
            "Çok formal",
            "Emir + drama tonu = savunmaya iter",
            "Yapısal yanlış",
            "Çok kibar",
          ],
          correct: 1,
          tr_explanation:
            "'Must talk' = emir. 'Very important' = drama. Modern: davet + bağlam.",
        },
      ],
    },
  ],
};

export const flirtDeep_27: BundledLesson = {
  id: "flirt.deep.27",
  skill_id: "flirt.midrel",
  index: 27,
  title: "Tartisma Sonrasi — Ozur Etiketi",
  description: "Tartisma bitti. Ozur dile — savunma deyil, kabul + tekrar etmeme niyeti.",
  estimated_minutes: 6,
  exercises: [
    {
      id: "ex.fd27.1",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B2",
      word_or_phrase: "I was out of line",
      tr_translation: "Sinirin disina ciktim (yetkili ozur kalibi)",
      example: "I was out of line earlier — no excuses.",
      example_tr: "Az once sinirin disina ciktim — bahane yok.",
    },
    {
      id: "ex.fd27.vt2",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "C1",
      word_or_phrase: "no buts",
      tr_translation: "Ama yok (sasiz, kosullsuz ozur)",
      example: "I'm sorry — no buts, no excuses.",
      example_tr: "Ozur dilerim — ama yok, bahane yok.",
    },
    {
      id: "ex.fd27.vt3",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "C1",
      word_or_phrase: "weaponized",
      tr_translation: "Silah olarak kullandi (kavga sirasinda zarar)",
      example: "I weaponized something you trusted me with — that wasn't okay.",
      example_tr: "Bana guvenip soyledigin bir seyi silah olarak kullandim — bu yanlisti.",
    },
    {
      id: "ex.fd27.vt4",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "do better",
      tr_translation: "Daha iyi yapmak (taahhut kalibi)",
      example: "I'm going to do better — that's a promise, not just words.",
      example_tr: "Daha iyi yapacagim — bu soz, sadece kelime degil.",
    },
    {
      id: "ex.fd27.vt5",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B2",
      word_or_phrase: "take what you need",
      tr_translation: "Ihtiyacin olani al (alan ver kalibi)",
      example: "Take whatever time you need — I'm not going anywhere.",
      example_tr: "Ne kadar zaman istersen al — hicbir yere gitmiyorum.",
    },
    {
      id: "ex.fd27.2",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description: "Sen yanlistin. Yarim saat sustu. Net ozur, savunma yok.",
      npc_role: "Partner",
      setting: "After a fight — you're apologizing",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(i was |i am )(wrong|out of line)",
            "(no excuse |zero excuse )",
            "(the way i |how i )spoke (to you was wrong|to you wasn'?t okay)",
            "(i'?m sorry |i apologize ) — (no buts)",
            "(i shouldn'?t have |should not have )(brought your mom |said that |yelled)",
            "(can i sit with you |may i come sit)",
          ],
          model_answers: ["I was out of line. No excuse — no buts."],
          hint_tr: "Net ozur: 'I was out of line. No excuse — no buts.'",
        },
        {
          speaker: "npc",
          message: "Okay. Tell me what you understood about why I'm upset.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(you'?re upset because |you'?re hurt because )(i used your weakness against you)",
            "(i used something |i used what )(you told me in confidence) (in an argument)",
            "(that'?s |that was )(a betrayal of trust|cruel)",
            "(you trusted me with |you opened up to me about ) (something private)",
            "(and i weaponized it |and i threw it back at you )",
            "(i hear that |you have every right to be hurt)",
          ],
          model_answers: ["You're hurt because I used what you told me privately against you."],
          hint_tr: "Anla + tekrarla: 'You're hurt because I used what you told me privately against you.'",
        },
        {
          speaker: "npc",
          message: "Yes. Exactly that. I felt humiliated.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i'?m so sorry |so deeply sorry ) — (you didn'?t deserve that)",
            "(it will not |i will never ) (happen again)",
            "(no |zero ) (excuses for that)",
            "(your trust is |what you share with me ) (sacred)",
            "(i need to |i'?m going to ) (do better)",
            "(thank you for |grateful you'?re ) (telling me|articulating it)",
          ],
          model_answers: ["So sorry — it will not happen again. Zero excuses."],
          hint_tr: "Sahici: 'So sorry — it will not happen again. Zero excuses.'",
        },
        {
          speaker: "npc",
          message: "Thank you. I need a few hours though.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(take whatever you |take the )time (you need)",
            "(i'?ll be |i'?ll just ) (in the other room|out for a walk)",
            "(no pressure |zero pressure )",
            "(i'?m here when |come find me when ) (you'?re ready)",
            "(i'?ll cook |let me make )(dinner if it helps)",
            "(thank you for |grateful you'?re still ) (talking to me)",
          ],
          model_answers: ["Take whatever time you need. I'm here when you're ready."],
          hint_tr: "Alan ver: 'Take whatever time you need. I'm here when you're ready.'",
        },
        {
          speaker: "npc",
          message: "Okay. We'll talk later. I still love you, just need to breathe.",
        },
      ],
    },
    {
      id: "ex.fd27.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      cefr_band: "B1",
      template: "I want to ___ with you about ___ — ___?",
      slots: [
        { accepted: ["talk honestly", "be open", "share something", "have a real conversation"] },
        { accepted: ["this", "where we're at", "how I'm feeling", "what's going on"] },
        { accepted: ["is now a good time", "can we sit down for a bit", "are you up for it", "would that be okay"] },
      ],
      tr_hint:
        "Önemli konu açma kalıbı: niyet + konu + saygılı zaman sorusu. 'Tartisma Sonrasi — Ozur Etiketi' bağlamında — Türk öğrenci direkt konuya girer; bu sağlam ilk cümle değil. Yumuşatma + zaman kontrolü = saygılı + güvenli alan.",
      example_filled:
        "I want to talk honestly with you about where we're at — is now a good time?",
    },
    {
      id: "ex.fd27.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      cefr_band: "B1",
      turns: [
        { speaker: "npc", text: "What's on your mind?" },
        { speaker: "user" },
        { speaker: "npc", text: "Okay — I'm listening." },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(been (thinking|sitting) with|wanted to talk about)",
        "(might sound|this might sound) (.+)",
        "(want to (open up|be honest|share))",
        "(no pressure|just|honestly) (.+)",
        "(can we|could we) (.+)",
      ],
      tr_hint:
        "Konuyu açma — yumuşatma + dürüst niyet. 'Tartisma Sonrasi — Ozur Etiketi' senaryosunda 'Been thinking about us — wanted to be honest. Can we talk?' tarzı.",
      ideal_answer:
        "Been thinking about something — want to be honest with you. Can we talk through it?",
    },
    {
      id: "ex.fd27.lr1",
      type: "listen_respond",
      difficulty: 3,
      cefr_band: "B1",
      npc_line: "How are you actually feeling about this?",
      accepted_patterns: [
        "(honestly|truthfully) (.+) (good|complicated|mixed)",
        "(part of me|some of me) (.+)",
        "(been (processing|sitting with|figuring out))",
        "(still working through|day by day)",
        "(grateful (you asked|for the space))",
      ],
      think_seconds: 3,
      tr_hint:
        "Dürüst + olgun duygu paylaşımı. 'Tartisma Sonrasi — Ozur Etiketi' bağlamında. Türk öğrenci 'fine' der; bunu yapma; SPESİFİK + dürüst.",
      ideal_response:
        "Honestly? Mixed — still processing parts of it. Day by day.",
    },
    {
      id: "ex.fd27.tt1",
      type: "thinking_trap",
      difficulty: 3,
      cefr_band: "B1",
      tr_thought: "Konuşmamız lazım, çok önemli",
      wrong_en: "We must talk, very important.",
      right_en: "I'd love to talk something through with you — is now a good time?",
      why_tr:
        "Türk öğrenci 'konuşmamız lazım + önemli' kalıbını birebir çevirir = emir tonu + 'must' baskı yaratır + 'very important' dramatik. 'Tartisma Sonrasi — Ozur Etiketi' gibi hassas konuda yumuşatma şart: 'I'd love to talk' (davet) + 'is now a good time' (saygılı zaman kontrolü).",
    },
    {
      id: "ex.fd27.rq1",
      type: "recall_quiz",
      difficulty: 3,
      cefr_band: "B1",
      items: [
        {
          q: "Önemli konuyu açarken en olgun yaklaşım?",
          options: [
            "'We must talk' (emir)",
            "'I'd love to talk — good time?' (davet + saygı)",
            "Sus, bekle",
            "Direkt konuya gir",
          ],
          correct: 1,
          tr_explanation:
            "Davet + zaman kontrolü = saygılı + güvenli alan. Emir = baskı = savunmaya iter.",
        },
        {
          q: "Karşı taraf 'how are you feeling?' sorduğunda?",
          options: [
            "Tek kelime 'fine'",
            "Spesifik + dürüst + 'still processing'",
            "Yalan",
            "Konu değiştir",
          ],
          correct: 1,
          tr_explanation:
            "'Fine' = kapalı kapı. Modern dating: spesifik duygu paylaşımı = bağ kurma.",
        },
        {
          q: "'Day by day' kalıbı:",
          options: [
            "Günden güne (zaman içinde)",
            "Her gün ayrı",
            "Yapısal yanlış",
            "Hızla",
          ],
          correct: 0,
          tr_explanation:
            "'Day by day' = adım adım, zamanla. Zor süreçleri işlerken sağlıklı.",
        },
        {
          q: "'Been sitting with something' anlamı?",
          options: [
            "Bir şeyle oturmak",
            "Bir konuyu içselleştirmek/üzerinde düşünmek",
            "Beklemek",
            "Yapısal yanlış",
          ],
          correct: 1,
          tr_explanation:
            "'Sitting with' = düşünmek, sindirmek (mecaz). Olgun + öz farkındalık.",
        },
        {
          q: "Türk hatası: 'We must talk, very important'",
          options: [
            "Çok formal",
            "Emir + drama tonu = savunmaya iter",
            "Yapısal yanlış",
            "Çok kibar",
          ],
          correct: 1,
          tr_explanation:
            "'Must talk' = emir. 'Very important' = drama. Modern: davet + bağlam.",
        },
      ],
    },
  ],
};

export const flirtDeep_28: BundledLesson = {
  id: "flirt.deep.28",
  skill_id: "flirt.midrel",
  index: 28,
  title: "Kiskanclik Konusmasi — Eski Sevgilisi Yazdi",
  description: "Eski sevgilisi yazdi — Instagram'da gordun. Kiskanma ama duzgun ifade et.",
  estimated_minutes: 6,
  exercises: [
    {
      id: "ex.fd28.1",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "rub me the wrong way",
      tr_translation: "Tedirgin etmek, rahatsiz etmek (kibar gucenme)",
      example: "It rubbed me the wrong way, even though I know it's nothing.",
      example_tr: "Bir sey olmadigini biliyorum ama yine de tedirgin etti.",
    },
    {
      id: "ex.fd28.vt2",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "spiral",
      tr_translation: "Endise sarmali (kotuye gitme dongusu)",
      example: "Transparency helps me not spiral.",
      example_tr: "Seffaflik endise sarmaline girmememi sagliyor.",
    },
    {
      id: "ex.fd28.vt3",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "C1",
      word_or_phrase: "stewing",
      tr_translation: "Icimde tutmak (sessiz huzursuzluk)",
      example: "Rather name it than keep stewing about it.",
      example_tr: "Icinde tutmak yerine konuyu acmayi tercih ederim.",
    },
    {
      id: "ex.fd28.vt4",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "heads up",
      tr_translation: "Onceden haber (rahatsizlik gidermek kalibi)",
      example: "All I need is a heads up next time she texts.",
      example_tr: "Tek istedigim sonraki yaztiginda onceden haber.",
    },
    {
      id: "ex.fd28.vt5",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "trust isn't the issue",
      tr_translation: "Guven sorun degil (kibar netlik)",
      example: "Trust isn't the issue — it just felt off.",
      example_tr: "Guven sorun degil — sadece tuhaf hissettim.",
    },
    {
      id: "ex.fd28.2",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description: "Eski sevgilisi mesaj atti, sen gordun. Drama yapmadan dile getir.",
      npc_role: "Partner",
      setting: "At home — bringing up a sensitive observation",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(can i bring up |something i wanted to ask )(something|about something)",
            "(it'?s |this is ) (small but it'?s bothering me)",
            "(i saw |i noticed ) (your ex|that name) (texted you)",
            "(not accusing |not trying to spiral )",
            "(just want to |i need to ) (name it instead of stewing)",
            "(this is more |this is about me )(my insecurity than you)",
          ],
          model_answers: ["Can I bring up something small? I saw your ex texted you."],
          hint_tr: "Aciklamali baslama: 'Can I bring up something small? I saw your ex texted you.'",
        },
        {
          speaker: "npc",
          message: "Yeah she did — she wanted a book back. Are you bothered?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(a little |a tiny bit )",
            "(rubbed me the wrong way |felt off ) — (not because of you)",
            "(i trust you |trust isn'?t the issue ) — (it'?s just emotional)",
            "(i didn'?t want |hate ) (to be the jealous one)",
            "(but i wanted to |so i wanted to ) (say it instead of bottle it)",
            "(can you tell me |would you mind telling me ) (when she reaches out)",
          ],
          model_answers: ["A little. Trust isn't the issue — just felt off. Can you tell me when she reaches?"],
          hint_tr: "Durust + olcumlu: 'A little. Trust isn't the issue — just felt off. Can you tell me when she reaches?'",
        },
        {
          speaker: "npc",
          message: "Yeah — that's fair. I didn't think to mention it because it was so neutral.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i get that |understandable )",
            "(it'?s |this isn'?t ) about (you doing anything wrong)",
            "(transparency makes |knowing about it makes ) (me not spiral)",
            "(thank you for |appreciate ) (not getting defensive)",
            "(this is how |this is how good couples handle it )",
            "(i feel better just |saying it out loud helps )",
          ],
          model_answers: ["Understandable — transparency makes me not spiral."],
          hint_tr: "Karsila: 'Understandable — transparency makes me not spiral.'",
        },
        {
          speaker: "npc",
          message: "Want to see the conversation? I'd rather you see it than imagine.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(no — |that'?s sweet but no )",
            "(i don'?t need to |won'?t need to see it )",
            "(your word is |i trust your word ) enough",
            "(the offer alone |you offering ) — (settled it for me)",
            "(only need |what i needed was ) (the heads up next time)",
            "(thank you though |that meant a lot)",
          ],
          model_answers: ["No — your word is enough. Just heads up next time."],
          hint_tr: "Olgun ret: 'No — your word is enough. Just heads up next time.'",
        },
        {
          speaker: "npc",
          message: "Deal. And just so you know — I love that you can bring this up calmly.",
        },
      ],
    },
    {
      id: "ex.fd28.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      cefr_band: "B1",
      template: "I want to ___ with you about ___ — ___?",
      slots: [
        { accepted: ["talk honestly", "be open", "share something", "have a real conversation"] },
        { accepted: ["this", "where we're at", "how I'm feeling", "what's going on"] },
        { accepted: ["is now a good time", "can we sit down for a bit", "are you up for it", "would that be okay"] },
      ],
      tr_hint:
        "Önemli konu açma kalıbı: niyet + konu + saygılı zaman sorusu. 'Kiskanclik Konusmasi — Eski Sevgilisi Yazdi' bağlamında — Türk öğrenci direkt konuya girer; bu sağlam ilk cümle değil. Yumuşatma + zaman kontrolü = saygılı + güvenli alan.",
      example_filled:
        "I want to talk honestly with you about where we're at — is now a good time?",
    },
    {
      id: "ex.fd28.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      cefr_band: "B1",
      turns: [
        { speaker: "npc", text: "What's on your mind?" },
        { speaker: "user" },
        { speaker: "npc", text: "Okay — I'm listening." },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(been (thinking|sitting) with|wanted to talk about)",
        "(might sound|this might sound) (.+)",
        "(want to (open up|be honest|share))",
        "(no pressure|just|honestly) (.+)",
        "(can we|could we) (.+)",
      ],
      tr_hint:
        "Konuyu açma — yumuşatma + dürüst niyet. 'Kiskanclik Konusmasi — Eski Sevgilisi Yazdi' senaryosunda 'Been thinking about us — wanted to be honest. Can we talk?' tarzı.",
      ideal_answer:
        "Been thinking about something — want to be honest with you. Can we talk through it?",
    },
    {
      id: "ex.fd28.lr1",
      type: "listen_respond",
      difficulty: 3,
      cefr_band: "B1",
      npc_line: "How are you actually feeling about this?",
      accepted_patterns: [
        "(honestly|truthfully) (.+) (good|complicated|mixed)",
        "(part of me|some of me) (.+)",
        "(been (processing|sitting with|figuring out))",
        "(still working through|day by day)",
        "(grateful (you asked|for the space))",
      ],
      think_seconds: 3,
      tr_hint:
        "Dürüst + olgun duygu paylaşımı. 'Kiskanclik Konusmasi — Eski Sevgilisi Yazdi' bağlamında. Türk öğrenci 'fine' der; bunu yapma; SPESİFİK + dürüst.",
      ideal_response:
        "Honestly? Mixed — still processing parts of it. Day by day.",
    },
    {
      id: "ex.fd28.tt1",
      type: "thinking_trap",
      difficulty: 3,
      cefr_band: "B1",
      tr_thought: "Konuşmamız lazım, çok önemli",
      wrong_en: "We must talk, very important.",
      right_en: "I'd love to talk something through with you — is now a good time?",
      why_tr:
        "Türk öğrenci 'konuşmamız lazım + önemli' kalıbını birebir çevirir = emir tonu + 'must' baskı yaratır + 'very important' dramatik. 'Kiskanclik Konusmasi — Eski Sevgilisi Yazdi' gibi hassas konuda yumuşatma şart: 'I'd love to talk' (davet) + 'is now a good time' (saygılı zaman kontrolü).",
    },
    {
      id: "ex.fd28.rq1",
      type: "recall_quiz",
      difficulty: 3,
      cefr_band: "B1",
      items: [
        {
          q: "Önemli konuyu açarken en olgun yaklaşım?",
          options: [
            "'We must talk' (emir)",
            "'I'd love to talk — good time?' (davet + saygı)",
            "Sus, bekle",
            "Direkt konuya gir",
          ],
          correct: 1,
          tr_explanation:
            "Davet + zaman kontrolü = saygılı + güvenli alan. Emir = baskı = savunmaya iter.",
        },
        {
          q: "Karşı taraf 'how are you feeling?' sorduğunda?",
          options: [
            "Tek kelime 'fine'",
            "Spesifik + dürüst + 'still processing'",
            "Yalan",
            "Konu değiştir",
          ],
          correct: 1,
          tr_explanation:
            "'Fine' = kapalı kapı. Modern dating: spesifik duygu paylaşımı = bağ kurma.",
        },
        {
          q: "'Day by day' kalıbı:",
          options: [
            "Günden güne (zaman içinde)",
            "Her gün ayrı",
            "Yapısal yanlış",
            "Hızla",
          ],
          correct: 0,
          tr_explanation:
            "'Day by day' = adım adım, zamanla. Zor süreçleri işlerken sağlıklı.",
        },
        {
          q: "'Been sitting with something' anlamı?",
          options: [
            "Bir şeyle oturmak",
            "Bir konuyu içselleştirmek/üzerinde düşünmek",
            "Beklemek",
            "Yapısal yanlış",
          ],
          correct: 1,
          tr_explanation:
            "'Sitting with' = düşünmek, sindirmek (mecaz). Olgun + öz farkındalık.",
        },
        {
          q: "Türk hatası: 'We must talk, very important'",
          options: [
            "Çok formal",
            "Emir + drama tonu = savunmaya iter",
            "Yapısal yanlış",
            "Çok kibar",
          ],
          correct: 1,
          tr_explanation:
            "'Must talk' = emir. 'Very important' = drama. Modern: davet + bağlam.",
        },
      ],
    },
  ],
};

export const flirtDeep_29: BundledLesson = {
  id: "flirt.deep.29",
  skill_id: "flirt.midrel",
  index: 29,
  title: "Cocuk Konusmasi — Aile Planlama",
  description: "Bir yil birlikte. Cocuk konusu cikti. Net ama esnek ol.",
  estimated_minutes: 6,
  exercises: [
    {
      id: "ex.fd29.1",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B2",
      word_or_phrase: "down the line",
      tr_translation: "Ilerleyen donemde, ileride",
      example: "Eventually yes — somewhere down the line.",
      example_tr: "Sonunda evet — ilerleyen bir donemde.",
    },
    {
      id: "ex.fd29.vt2",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "where do you land",
      tr_translation: "Sen nerede duruyorsun (gorus sorma kalibi)",
      example: "Where do you land on kids — eventually yes, maybe, no?",
      example_tr: "Cocuk konusunda nerede duruyorsun — sonunda evet, belki, hayir?",
    },
    {
      id: "ex.fd29.vt3",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "ideal number",
      tr_translation: "Ideal sayi (cocuk planlama detayi)",
      example: "What's your ideal number — one, two, more?",
      example_tr: "Senin ideal sayin ne — bir, iki, daha cok?",
    },
    {
      id: "ex.fd29.vt4",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "C1",
      word_or_phrase: "career stabilizes",
      tr_translation: "Kariyer oturmus (zaman planlamasi)",
      example: "Once my career stabilizes — then we talk timing seriously.",
      example_tr: "Kariyerim oturduktan sonra — o zaman ciddi konusuruz.",
    },
    {
      id: "ex.fd29.vt5",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "C1",
      word_or_phrase: "open question",
      tr_translation: "Cevapsiz soru (henuz karar verilmemis konu)",
      example: "Where we'd raise them is still an open question.",
      example_tr: "Nerede yetistirecegimiz hala cevapsiz bir soru.",
    },
    {
      id: "ex.fd29.2",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description: "Arkadasinizin bebegini gezdirdiniz. Konu kendiliginden acildi.",
      npc_role: "Partner",
      setting: "After visiting friends with a baby",
      turns: [
        {
          speaker: "npc",
          message: "Holding that baby today did weird things to my brain. Do you want kids?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(eventually yes |yes — eventually )",
            "(definitely down the line |yes, down the line )",
            "(not now |not soon ) — (but yes)",
            "(want kids |i do want kids ) — (in a few years)",
            "(how are you feeling |where do you land ) ((about it )?yourself)",
            "(it'?s a |i'?ve been thinking about this )big question (and i want to be honest)",
          ],
          model_answers: ["Eventually yes — definitely down the line, not now."],
          hint_tr: "Net ama esnek: 'Eventually yes — definitely down the line, not now.'",
        },
        {
          speaker: "npc",
          message: "Same. How many — is one enough, two, more?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(two ideally |two feels right )",
            "(growing up turkish |i grew up with siblings ) (and want that for kids)",
            "(one feels |only child feels ) (lonely to me)",
            "(open to two |between one and two )",
            "(if it ends up just one |one is fine if that'?s what happens )",
            "(what'?s your number |what'?s your ideal )",
          ],
          model_answers: ["Two ideally — growing up with siblings shaped me."],
          hint_tr: "Sayi ver: 'Two ideally — growing up with siblings shaped me.'",
        },
        {
          speaker: "npc",
          message: "I think two also. Timeline — like five years from now?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(roughly |sounds about right ) (yes)",
            "(somewhere |around ) (five|four to six)",
            "(career has to settle |after my career stabilizes )",
            "(let'?s not |i don'?t want to ) (set a year)",
            "(life moves |life happens )(— we revisit)",
            "(directional yes |as a target yes )",
          ],
          model_answers: ["Roughly yes — career settles first. We revisit."],
          hint_tr: "Esnek zaman: 'Roughly yes — career settles first. We revisit.'",
        },
        {
          speaker: "npc",
          message: "And where? In Turkey, here, somewhere else?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(honestly i don'?t know |that'?s the open question )",
            "(somewhere we both choose |a place we both want )",
            "(probably not |unlikely to be ) (turkey full time|here forever)",
            "(grandparents access matters |we need to consider both families )",
            "(part time turkey |split arrangement )",
            "(let'?s not lock |we don'?t need to lock that yet )",
          ],
          model_answers: ["Somewhere we both choose — grandparents access matters. We don't need to lock that yet."],
          hint_tr: "Esnek: 'Somewhere we both choose — grandparents access matters. We don't need to lock that yet.'",
        },
        {
          speaker: "npc",
          message: "Okay. I'm glad we agree on the big stuff. Five-year-baby-deadline activated.",
        },
      ],
    },
    {
      id: "ex.fd29.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      cefr_band: "B1",
      template: "I want to ___ with you about ___ — ___?",
      slots: [
        { accepted: ["talk honestly", "be open", "share something", "have a real conversation"] },
        { accepted: ["this", "where we're at", "how I'm feeling", "what's going on"] },
        { accepted: ["is now a good time", "can we sit down for a bit", "are you up for it", "would that be okay"] },
      ],
      tr_hint:
        "Önemli konu açma kalıbı: niyet + konu + saygılı zaman sorusu. 'Cocuk Konusmasi — Aile Planlama' bağlamında — Türk öğrenci direkt konuya girer; bu sağlam ilk cümle değil. Yumuşatma + zaman kontrolü = saygılı + güvenli alan.",
      example_filled:
        "I want to talk honestly with you about where we're at — is now a good time?",
    },
    {
      id: "ex.fd29.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      cefr_band: "B1",
      turns: [
        { speaker: "npc", text: "What's on your mind?" },
        { speaker: "user" },
        { speaker: "npc", text: "Okay — I'm listening." },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(been (thinking|sitting) with|wanted to talk about)",
        "(might sound|this might sound) (.+)",
        "(want to (open up|be honest|share))",
        "(no pressure|just|honestly) (.+)",
        "(can we|could we) (.+)",
      ],
      tr_hint:
        "Konuyu açma — yumuşatma + dürüst niyet. 'Cocuk Konusmasi — Aile Planlama' senaryosunda 'Been thinking about us — wanted to be honest. Can we talk?' tarzı.",
      ideal_answer:
        "Been thinking about something — want to be honest with you. Can we talk through it?",
    },
    {
      id: "ex.fd29.lr1",
      type: "listen_respond",
      difficulty: 3,
      cefr_band: "B1",
      npc_line: "How are you actually feeling about this?",
      accepted_patterns: [
        "(honestly|truthfully) (.+) (good|complicated|mixed)",
        "(part of me|some of me) (.+)",
        "(been (processing|sitting with|figuring out))",
        "(still working through|day by day)",
        "(grateful (you asked|for the space))",
      ],
      think_seconds: 3,
      tr_hint:
        "Dürüst + olgun duygu paylaşımı. 'Cocuk Konusmasi — Aile Planlama' bağlamında. Türk öğrenci 'fine' der; bunu yapma; SPESİFİK + dürüst.",
      ideal_response:
        "Honestly? Mixed — still processing parts of it. Day by day.",
    },
    {
      id: "ex.fd29.tt1",
      type: "thinking_trap",
      difficulty: 3,
      cefr_band: "B1",
      tr_thought: "Konuşmamız lazım, çok önemli",
      wrong_en: "We must talk, very important.",
      right_en: "I'd love to talk something through with you — is now a good time?",
      why_tr:
        "Türk öğrenci 'konuşmamız lazım + önemli' kalıbını birebir çevirir = emir tonu + 'must' baskı yaratır + 'very important' dramatik. 'Cocuk Konusmasi — Aile Planlama' gibi hassas konuda yumuşatma şart: 'I'd love to talk' (davet) + 'is now a good time' (saygılı zaman kontrolü).",
    },
    {
      id: "ex.fd29.rq1",
      type: "recall_quiz",
      difficulty: 3,
      cefr_band: "B1",
      items: [
        {
          q: "Önemli konuyu açarken en olgun yaklaşım?",
          options: [
            "'We must talk' (emir)",
            "'I'd love to talk — good time?' (davet + saygı)",
            "Sus, bekle",
            "Direkt konuya gir",
          ],
          correct: 1,
          tr_explanation:
            "Davet + zaman kontrolü = saygılı + güvenli alan. Emir = baskı = savunmaya iter.",
        },
        {
          q: "Karşı taraf 'how are you feeling?' sorduğunda?",
          options: [
            "Tek kelime 'fine'",
            "Spesifik + dürüst + 'still processing'",
            "Yalan",
            "Konu değiştir",
          ],
          correct: 1,
          tr_explanation:
            "'Fine' = kapalı kapı. Modern dating: spesifik duygu paylaşımı = bağ kurma.",
        },
        {
          q: "'Day by day' kalıbı:",
          options: [
            "Günden güne (zaman içinde)",
            "Her gün ayrı",
            "Yapısal yanlış",
            "Hızla",
          ],
          correct: 0,
          tr_explanation:
            "'Day by day' = adım adım, zamanla. Zor süreçleri işlerken sağlıklı.",
        },
        {
          q: "'Been sitting with something' anlamı?",
          options: [
            "Bir şeyle oturmak",
            "Bir konuyu içselleştirmek/üzerinde düşünmek",
            "Beklemek",
            "Yapısal yanlış",
          ],
          correct: 1,
          tr_explanation:
            "'Sitting with' = düşünmek, sindirmek (mecaz). Olgun + öz farkındalık.",
        },
        {
          q: "Türk hatası: 'We must talk, very important'",
          options: [
            "Çok formal",
            "Emir + drama tonu = savunmaya iter",
            "Yapısal yanlış",
            "Çok kibar",
          ],
          correct: 1,
          tr_explanation:
            "'Must talk' = emir. 'Very important' = drama. Modern: davet + bağlam.",
        },
      ],
    },
  ],
};

export const flirtDeep_30: BundledLesson = {
  id: "flirt.deep.30",
  skill_id: "flirt.midrel",
  index: 30,
  title: "Is Tasinma Catismasi — Uzun Mesafe Olasi",
  description: "Sen Berlin'e is teklifi aldin. Onun isi Lisbon'da. Catismayi konus.",
  estimated_minutes: 7,
  exercises: [
    {
      id: "ex.fd30.1",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "career-defining",
      tr_translation: "Kariyer belirleyici (firsat sinifi)",
      example: "It's career-defining — I can't just turn it down.",
      example_tr: "Kariyer belirleyici bir firsat — basitce reddedemem.",
    },
    {
      id: "ex.fd30.vt2",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "C1",
      word_or_phrase: "long distance",
      tr_translation: "Uzak mesafe iliski (modern dating gerceklik)",
      example: "Could we do long distance for eighteen months?",
      example_tr: "On sekiz ay uzak mesafe iliski yurutebilir miyiz?",
    },
    {
      id: "ex.fd30.vt3",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "C1",
      word_or_phrase: "end date",
      tr_translation: "Bitis tarihi (uzak mesafe icin sart)",
      example: "I can do long distance — but I need an end date.",
      example_tr: "Uzak mesafeyi yapabilirim — ama bitis tarihi gerek.",
    },
    {
      id: "ex.fd30.vt4",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "alternate weekends",
      tr_translation: "Birer hafta sonu (uzak mesafe ziyaret kalibi)",
      example: "Alternate weekends — whoever's flying that month picks the city.",
      example_tr: "Birer hafta sonu — o ay ucan kisi sehri seciyor.",
    },
    {
      id: "ex.fd30.vt5",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "C1",
      word_or_phrase: "time zones",
      tr_translation: "Saat dilimleri (LDR teknik zorluk)",
      example: "Two-hour time zone difference — we'll figure out call windows.",
      example_tr: "Iki saat zaman farki — gorusme zamani aralarini bulacagiz.",
    },
    {
      id: "ex.fd30.2",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description: "Sen Berlin teklifi aldin. Sevincle ama suclulukla soyluyorsun. Uzun mesafe konusu cikiyor.",
      npc_role: "Partner",
      setting: "Evening conversation — job offer announcement",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(i need to |i have to ) (tell you something)",
            "(this is |this might be ) (a lot)",
            "(i got |i was offered ) (the berlin job)",
            "(don'?t know how to |conflicted about how to ) (feel about it)",
            "(excited and terrified |it'?s career.?defining and complicated )",
            "(let'?s talk |we need to talk )(it through)",
          ],
          model_answers: ["I need to tell you something. I got the Berlin job. Career-defining and complicated."],
          hint_tr: "Acik baslama: 'I need to tell you something. I got the Berlin job. Career-defining and complicated.'",
        },
        {
          speaker: "npc",
          message: "Wow. Okay. Congratulations — and also okay let's talk.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(my first instinct |my reflex ) is (to be excited and then guilty)",
            "(i don'?t want to |this isn'?t me ) (choosing between you and the job)",
            "(i want to figure out |the question is how we both win )",
            "(how do you |what'?s your immediate reaction )",
            "(be honest |give me the honest version )",
            "(i need to know |i need to hear how you feel)",
          ],
          model_answers: ["I don't want to choose between you and the job. What's your immediate reaction?"],
          hint_tr: "Empati + sor: 'I don't want to choose between you and the job. What's your immediate reaction?'",
        },
        {
          speaker: "npc",
          message: "Honest? Scared. I can't move — my mom's just started chemo and I need to be near.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(of course you |obviously you need to ) (be here|stay)",
            "(that'?s |your mom is )(not up for debate|the priority)",
            "(let'?s think about |this means we'?re talking about ) (long distance)",
            "(berlin'?s |flight is ) (two hours from lisbon|short)",
            "(how do we |what would long distance ) (make this work)",
            "(it'?s not |you'?re not asking me ) (to choose between job and you)",
          ],
          model_answers: ["Of course you stay — your mom is priority. Let's talk long distance."],
          hint_tr: "Olgun: 'Of course you stay — your mom is priority. Let's talk long distance.'",
        },
        {
          speaker: "npc",
          message: "I can do long distance if there's an end date. Not open-ended.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(fair |that'?s reasonable )",
            "(the contract is |it'?s a ) (eighteen months)",
            "(let'?s call |eighteen months and we reassess )",
            "(weekends |alternate weekends ) (whenever possible)",
            "(non.?negotiable |unbreakable )(weekly call)",
            "(let'?s write down |we should write the rules down )",
          ],
          model_answers: ["Fair — eighteen months, then reassess. Alternate weekends."],
          hint_tr: "Net + plan: 'Fair — eighteen months, then reassess. Alternate weekends.'",
        },
        {
          speaker: "npc",
          message: "Okay. We can do this. Don't make me regret saying that.",
        },
      ],
    },
    {
      id: "ex.fd30.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      cefr_band: "B1",
      template: "I want to ___ with you about ___ — ___?",
      slots: [
        { accepted: ["talk honestly", "be open", "share something", "have a real conversation"] },
        { accepted: ["this", "where we're at", "how I'm feeling", "what's going on"] },
        { accepted: ["is now a good time", "can we sit down for a bit", "are you up for it", "would that be okay"] },
      ],
      tr_hint:
        "Önemli konu açma kalıbı: niyet + konu + saygılı zaman sorusu. 'Is Tasinma Catismasi — Uzun Mesafe Olasi' bağlamında — Türk öğrenci direkt konuya girer; bu sağlam ilk cümle değil. Yumuşatma + zaman kontrolü = saygılı + güvenli alan.",
      example_filled:
        "I want to talk honestly with you about where we're at — is now a good time?",
    },
    {
      id: "ex.fd30.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      cefr_band: "B1",
      turns: [
        { speaker: "npc", text: "What's on your mind?" },
        { speaker: "user" },
        { speaker: "npc", text: "Okay — I'm listening." },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(been (thinking|sitting) with|wanted to talk about)",
        "(might sound|this might sound) (.+)",
        "(want to (open up|be honest|share))",
        "(no pressure|just|honestly) (.+)",
        "(can we|could we) (.+)",
      ],
      tr_hint:
        "Konuyu açma — yumuşatma + dürüst niyet. 'Is Tasinma Catismasi — Uzun Mesafe Olasi' senaryosunda 'Been thinking about us — wanted to be honest. Can we talk?' tarzı.",
      ideal_answer:
        "Been thinking about something — want to be honest with you. Can we talk through it?",
    },
    {
      id: "ex.fd30.lr1",
      type: "listen_respond",
      difficulty: 3,
      cefr_band: "B1",
      npc_line: "How are you actually feeling about this?",
      accepted_patterns: [
        "(honestly|truthfully) (.+) (good|complicated|mixed)",
        "(part of me|some of me) (.+)",
        "(been (processing|sitting with|figuring out))",
        "(still working through|day by day)",
        "(grateful (you asked|for the space))",
      ],
      think_seconds: 3,
      tr_hint:
        "Dürüst + olgun duygu paylaşımı. 'Is Tasinma Catismasi — Uzun Mesafe Olasi' bağlamında. Türk öğrenci 'fine' der; bunu yapma; SPESİFİK + dürüst.",
      ideal_response:
        "Honestly? Mixed — still processing parts of it. Day by day.",
    },
    {
      id: "ex.fd30.tt1",
      type: "thinking_trap",
      difficulty: 3,
      cefr_band: "B1",
      tr_thought: "Konuşmamız lazım, çok önemli",
      wrong_en: "We must talk, very important.",
      right_en: "I'd love to talk something through with you — is now a good time?",
      why_tr:
        "Türk öğrenci 'konuşmamız lazım + önemli' kalıbını birebir çevirir = emir tonu + 'must' baskı yaratır + 'very important' dramatik. 'Is Tasinma Catismasi — Uzun Mesafe Olasi' gibi hassas konuda yumuşatma şart: 'I'd love to talk' (davet) + 'is now a good time' (saygılı zaman kontrolü).",
    },
    {
      id: "ex.fd30.rq1",
      type: "recall_quiz",
      difficulty: 3,
      cefr_band: "B1",
      items: [
        {
          q: "Önemli konuyu açarken en olgun yaklaşım?",
          options: [
            "'We must talk' (emir)",
            "'I'd love to talk — good time?' (davet + saygı)",
            "Sus, bekle",
            "Direkt konuya gir",
          ],
          correct: 1,
          tr_explanation:
            "Davet + zaman kontrolü = saygılı + güvenli alan. Emir = baskı = savunmaya iter.",
        },
        {
          q: "Karşı taraf 'how are you feeling?' sorduğunda?",
          options: [
            "Tek kelime 'fine'",
            "Spesifik + dürüst + 'still processing'",
            "Yalan",
            "Konu değiştir",
          ],
          correct: 1,
          tr_explanation:
            "'Fine' = kapalı kapı. Modern dating: spesifik duygu paylaşımı = bağ kurma.",
        },
        {
          q: "'Day by day' kalıbı:",
          options: [
            "Günden güne (zaman içinde)",
            "Her gün ayrı",
            "Yapısal yanlış",
            "Hızla",
          ],
          correct: 0,
          tr_explanation:
            "'Day by day' = adım adım, zamanla. Zor süreçleri işlerken sağlıklı.",
        },
        {
          q: "'Been sitting with something' anlamı?",
          options: [
            "Bir şeyle oturmak",
            "Bir konuyu içselleştirmek/üzerinde düşünmek",
            "Beklemek",
            "Yapısal yanlış",
          ],
          correct: 1,
          tr_explanation:
            "'Sitting with' = düşünmek, sindirmek (mecaz). Olgun + öz farkındalık.",
        },
        {
          q: "Türk hatası: 'We must talk, very important'",
          options: [
            "Çok formal",
            "Emir + drama tonu = savunmaya iter",
            "Yapısal yanlış",
            "Çok kibar",
          ],
          correct: 1,
          tr_explanation:
            "'Must talk' = emir. 'Very important' = drama. Modern: davet + bağlam.",
        },
      ],
    },
  ],
};

// ============================================================
// PHASE 4 — CRISIS (31-40) — skill: flirt.crisis
// ============================================================

export const flirtDeep_31: BundledLesson = {
  id: "flirt.deep.31",
  skill_id: "flirt.crisis",
  index: 31,
  title: "Kirilan Guven — Yuzlesme",
  description: "Telefonunda yalan bir mesaj gordun. Suclama yapmadan yuzlesme.",
  estimated_minutes: 7,
  exercises: [
    {
      id: "ex.fd31.1",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "blindside",
      tr_translation: "Hazirliksiz yakalamak (saskinlik + ihanet)",
      example: "Don't blindside me — tell me the truth now.",
      example_tr: "Beni hazirliksiz yakalama — simdi gercegi soyle.",
    },
    {
      id: "ex.fd31.vt2",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "C1",
      word_or_phrase: "happened to see",
      tr_translation: "Kazara gordum (suclama yapmadan kanit sunma)",
      example: "I happened to see a message — I'm not snooping.",
      example_tr: "Kazara bir mesaj gordum — gizli takip etmiyorum.",
    },
    {
      id: "ex.fd31.vt3",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "I deserve to know",
      tr_translation: "Bilmeyi hak ediyorum (haklilik kalibi)",
      example: "I deserve to know what's actually going on.",
      example_tr: "Aslinda neler oldugunu bilmeyi hak ediyorum.",
    },
    {
      id: "ex.fd31.vt4",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "tell me the truth",
      tr_translation: "Bana gercegi soyle (yuzlesme kalibi)",
      example: "Just tell me the truth — I can handle it.",
      example_tr: "Sadece gercegi soyle — kaldirabilirim.",
    },
    {
      id: "ex.fd31.vt5",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "C1",
      word_or_phrase: "trust is non-negotiable",
      tr_translation: "Guven pazarlik konusu degil (sinir koyma)",
      example: "Trust is non-negotiable for me — full stop.",
      example_tr: "Guven benim icin pazarlik konusu degil — nokta.",
    },
    {
      id: "ex.fd31.2",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description: "Telefonunda baska biriyle yakin bir mesaj gordun. Suclama atmadan, durust yuzlestir.",
      npc_role: "Partner",
      setting: "Tense conversation — confronting a trust issue",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(i need to ask you |i need to talk to you )(about something serious)",
            "(i saw |i happened to see )(a message)",
            "(don'?t lie to me |i need the truth ) — (please)",
            "(this isn'?t |i'?m not trying to be )accusatory yet",
            "(i need to understand |i deserve to understand )(what i saw)",
            "(my heart is pounding |my hands are shaking )(but i need to ask)",
          ],
          model_answers: ["I need to talk to you about something serious. I saw a message."],
          hint_tr: "Net girisim: 'I need to talk to you about something serious. I saw a message.'",
        },
        {
          speaker: "npc",
          message: "What did you see?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(a message from |something from )(\\w+) (saying|with the words)",
            "(you don'?t |i don'?t need to )read it back to you (— you know what it said)",
            "(the kind |the tone of message ) (that you don'?t send to a friend)",
            "(i'?m not going to |let'?s not ) (play guess what i saw)",
            "(can you tell me |tell me what it is ) (in your own words)",
            "(this is your chance |the next thing you say matters )",
          ],
          model_answers: ["Tell me what it is in your own words. This is your chance."],
          hint_tr: "Cevre yapma: 'Tell me what it is in your own words. This is your chance.'",
        },
        {
          speaker: "npc",
          message: "It's not what you think. There's been something going on but nothing physical.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(emotional is still |emotional cheating still hurts )",
            "(i don'?t |i'?m not interested in ) (a hierarchy of cheating)",
            "(how long has this |how long has it ) been (going on)",
            "(have you been |were you ) (lying about it to me)",
            "(i need the |give me the ) full picture (now)",
            "(my trust is |what'?s broken is ) (the lying not the kiss)",
          ],
          model_answers: ["Emotional is still emotional. How long has this been going on?"],
          hint_tr: "Hassasiyet: 'Emotional is still emotional. How long has this been going on?'",
        },
        {
          speaker: "npc",
          message: "Three months. I'm so sorry. I never meant for it to get there.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(three months |that'?s ninety days of looking me in the eye )",
            "(i need to leave |i need to be alone right now )",
            "(don'?t |please don'?t ) (follow me|explain right now)",
            "(i'?m not |i don'?t know if i'?m )(ending this — but i can'?t talk now)",
            "(i need space |give me a few days )",
            "(i can'?t |i won'?t ) (do this conversation tonight)",
          ],
          model_answers: ["I need to leave. Don't follow me. I can't do this conversation tonight."],
          hint_tr: "Sinir koy: 'I need to leave. Don't follow me. I can't do this conversation tonight.'",
        },
        {
          speaker: "npc",
          message: "Okay. I'll be here whenever you want to talk. I won't push.",
        },
      ],
    },
    {
      id: "ex.fd31.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      cefr_band: "B1",
      template: "I want to ___ with you about ___ — ___?",
      slots: [
        { accepted: ["talk honestly", "be open", "share something", "have a real conversation"] },
        { accepted: ["this", "where we're at", "how I'm feeling", "what's going on"] },
        { accepted: ["is now a good time", "can we sit down for a bit", "are you up for it", "would that be okay"] },
      ],
      tr_hint:
        "Önemli konu açma kalıbı: niyet + konu + saygılı zaman sorusu. 'Kirilan Guven — Yuzlesme' bağlamında — Türk öğrenci direkt konuya girer; bu sağlam ilk cümle değil. Yumuşatma + zaman kontrolü = saygılı + güvenli alan.",
      example_filled:
        "I want to talk honestly with you about where we're at — is now a good time?",
    },
    {
      id: "ex.fd31.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      cefr_band: "B1",
      turns: [
        { speaker: "npc", text: "What's on your mind?" },
        { speaker: "user" },
        { speaker: "npc", text: "Okay — I'm listening." },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(been (thinking|sitting) with|wanted to talk about)",
        "(might sound|this might sound) (.+)",
        "(want to (open up|be honest|share))",
        "(no pressure|just|honestly) (.+)",
        "(can we|could we) (.+)",
      ],
      tr_hint:
        "Konuyu açma — yumuşatma + dürüst niyet. 'Kirilan Guven — Yuzlesme' senaryosunda 'Been thinking about us — wanted to be honest. Can we talk?' tarzı.",
      ideal_answer:
        "Been thinking about something — want to be honest with you. Can we talk through it?",
    },
    {
      id: "ex.fd31.lr1",
      type: "listen_respond",
      difficulty: 3,
      cefr_band: "B1",
      npc_line: "How are you actually feeling about this?",
      accepted_patterns: [
        "(honestly|truthfully) (.+) (good|complicated|mixed)",
        "(part of me|some of me) (.+)",
        "(been (processing|sitting with|figuring out))",
        "(still working through|day by day)",
        "(grateful (you asked|for the space))",
      ],
      think_seconds: 3,
      tr_hint:
        "Dürüst + olgun duygu paylaşımı. 'Kirilan Guven — Yuzlesme' bağlamında. Türk öğrenci 'fine' der; bunu yapma; SPESİFİK + dürüst.",
      ideal_response:
        "Honestly? Mixed — still processing parts of it. Day by day.",
    },
    {
      id: "ex.fd31.tt1",
      type: "thinking_trap",
      difficulty: 3,
      cefr_band: "B1",
      tr_thought: "Konuşmamız lazım, çok önemli",
      wrong_en: "We must talk, very important.",
      right_en: "I'd love to talk something through with you — is now a good time?",
      why_tr:
        "Türk öğrenci 'konuşmamız lazım + önemli' kalıbını birebir çevirir = emir tonu + 'must' baskı yaratır + 'very important' dramatik. 'Kirilan Guven — Yuzlesme' gibi hassas konuda yumuşatma şart: 'I'd love to talk' (davet) + 'is now a good time' (saygılı zaman kontrolü).",
    },
    {
      id: "ex.fd31.rq1",
      type: "recall_quiz",
      difficulty: 3,
      cefr_band: "B1",
      items: [
        {
          q: "Önemli konuyu açarken en olgun yaklaşım?",
          options: [
            "'We must talk' (emir)",
            "'I'd love to talk — good time?' (davet + saygı)",
            "Sus, bekle",
            "Direkt konuya gir",
          ],
          correct: 1,
          tr_explanation:
            "Davet + zaman kontrolü = saygılı + güvenli alan. Emir = baskı = savunmaya iter.",
        },
        {
          q: "Karşı taraf 'how are you feeling?' sorduğunda?",
          options: [
            "Tek kelime 'fine'",
            "Spesifik + dürüst + 'still processing'",
            "Yalan",
            "Konu değiştir",
          ],
          correct: 1,
          tr_explanation:
            "'Fine' = kapalı kapı. Modern dating: spesifik duygu paylaşımı = bağ kurma.",
        },
        {
          q: "'Day by day' kalıbı:",
          options: [
            "Günden güne (zaman içinde)",
            "Her gün ayrı",
            "Yapısal yanlış",
            "Hızla",
          ],
          correct: 0,
          tr_explanation:
            "'Day by day' = adım adım, zamanla. Zor süreçleri işlerken sağlıklı.",
        },
        {
          q: "'Been sitting with something' anlamı?",
          options: [
            "Bir şeyle oturmak",
            "Bir konuyu içselleştirmek/üzerinde düşünmek",
            "Beklemek",
            "Yapısal yanlış",
          ],
          correct: 1,
          tr_explanation:
            "'Sitting with' = düşünmek, sindirmek (mecaz). Olgun + öz farkındalık.",
        },
        {
          q: "Türk hatası: 'We must talk, very important'",
          options: [
            "Çok formal",
            "Emir + drama tonu = savunmaya iter",
            "Yapısal yanlış",
            "Çok kibar",
          ],
          correct: 1,
          tr_explanation:
            "'Must talk' = emir. 'Very important' = drama. Modern: davet + bağlam.",
        },
      ],
    },
  ],
};

export const flirtDeep_32: BundledLesson = {
  id: "flirt.deep.32",
  skill_id: "flirt.crisis",
  index: 32,
  title: "Uzun Mesafe Baslangici — Vedasi",
  description: "Sen tasiniyorsun. Havalimaninda son veda. Duyguyu tasi, alarm yapma.",
  estimated_minutes: 6,
  exercises: [
    {
      id: "ex.fd32.1",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B2",
      word_or_phrase: "see you soon",
      tr_translation: "Yakinda goruseriz (uzun mesafede 'goodbye' yerine)",
      example: "It's not goodbye — see you soon, okay?",
      example_tr: "Hosca kal degil — yakinda goruseriz, tamam mi?",
    },
    {
      id: "ex.fd32.vt2",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "hand on heart",
      tr_translation: "Yurekten soz veriyorum (samimi soz kalibi)",
      example: "Hand on heart — I'll text every morning.",
      example_tr: "Yurekten soz veriyorum — her sabah yazacagim.",
    },
    {
      id: "ex.fd32.vt3",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "C1",
      word_or_phrase: "non-negotiable",
      tr_translation: "Pazarliga acik degil (kesinlikle yapacak)",
      example: "Weekly call — non-negotiable.",
      example_tr: "Haftalik gorusme — pazarliga acik degil.",
    },
    {
      id: "ex.fd32.vt4",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "miss you already",
      tr_translation: "Seni daha simdiden ozledim (vedanin agirligi)",
      example: "I miss you already — and I haven't boarded yet.",
      example_tr: "Seni daha simdiden ozledim — ucaga binmedim bile.",
    },
    {
      id: "ex.fd32.vt5",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "send me a stupid photo",
      tr_translation: "Bana sacma bir foto gonder (LDR baglanma araci)",
      example: "Send me a stupid photo from the lounge — proof of life.",
      example_tr: "Salonda sacma bir foto gonder — yasiyorum kaniti.",
    },
    {
      id: "ex.fd32.2",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description: "Havalimaninda son veda. 6 ay uzun mesafe baslayacak.",
      npc_role: "Partner",
      setting: "Airport farewell, long distance begins",
      turns: [
        {
          speaker: "npc",
          message: "Okay — your gate's calling. Three minutes.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(don'?t make this |let'?s not make this ) bigger than it is",
            "(six months is |it'?s only ) (not forever)",
            "(this isn'?t goodbye |it'?s see you soon )",
            "(weekly call non.?negotiable |weekend visits start in a month )",
            "(let me look at you |give me one more second )",
            "(i love you |seni seviyorum )(more than this airport scene allows)",
          ],
          model_answers: ["It's not goodbye. Six months — see you soon."],
          hint_tr: "Cerceveyi rahatlat: 'It's not goodbye. Six months — see you soon.'",
        },
        {
          speaker: "npc",
          message: "Promise me you'll actually text. Not just disappear into work.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i promise |hand on heart i promise )",
            "(text every |morning text every )day",
            "(call every |proper call every ) (sunday)",
            "(video |video call ) (twice a week minimum)",
            "(you'?ll get tired of |you'?ll get sick of me )",
            "(the rule is |the system is ) (no disappearing)",
          ],
          model_answers: ["Hand on heart — morning text every day, Sunday calls."],
          hint_tr: "Soz: 'Hand on heart — morning text every day, Sunday calls.'",
        },
        {
          speaker: "npc",
          message: "Okay. I really hate this. You know that, right?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i hate it |i hate it more than i'?m showing )(too)",
            "(if i let myself |if i feel it all ) (i won'?t get on the plane)",
            "(this is the |airports are the worst part )",
            "(it'?s temporary |this is the hard part )",
            "(we knew this |we agreed on this for a reason )",
            "(you'?re |you'?re still ) (worth the distance)",
          ],
          model_answers: ["I hate it too — if I feel it all I won't get on the plane."],
          hint_tr: "Karsila duygusal: 'I hate it too — if I feel it all I won't get on the plane.'",
        },
        {
          speaker: "npc",
          message: "Go before I cry in public. Text me when you land.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(going |i'?m going )",
            "(text the second |i'?ll text the moment ) (we land)",
            "(don'?t cry |okay don'?t cry — )(or do, i guess)",
            "(one more hug |last one )",
            "(see you soon |yakinda )",
            "(i love you |love you )",
          ],
          model_answers: ["Going. Text the moment we land. Love you."],
          hint_tr: "Kisa kapanis: 'Going. Text the moment we land. Love you.'",
        },
        {
          speaker: "npc",
          message: "Go. I love you. Send me a stupid photo from the lounge.",
        },
      ],
    },
    {
      id: "ex.fd32.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      cefr_band: "B1",
      template: "I want to ___ with you about ___ — ___?",
      slots: [
        { accepted: ["talk honestly", "be open", "share something", "have a real conversation"] },
        { accepted: ["this", "where we're at", "how I'm feeling", "what's going on"] },
        { accepted: ["is now a good time", "can we sit down for a bit", "are you up for it", "would that be okay"] },
      ],
      tr_hint:
        "Önemli konu açma kalıbı: niyet + konu + saygılı zaman sorusu. 'Uzun Mesafe Baslangici — Vedasi' bağlamında — Türk öğrenci direkt konuya girer; bu sağlam ilk cümle değil. Yumuşatma + zaman kontrolü = saygılı + güvenli alan.",
      example_filled:
        "I want to talk honestly with you about where we're at — is now a good time?",
    },
    {
      id: "ex.fd32.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      cefr_band: "B1",
      turns: [
        { speaker: "npc", text: "What's on your mind?" },
        { speaker: "user" },
        { speaker: "npc", text: "Okay — I'm listening." },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(been (thinking|sitting) with|wanted to talk about)",
        "(might sound|this might sound) (.+)",
        "(want to (open up|be honest|share))",
        "(no pressure|just|honestly) (.+)",
        "(can we|could we) (.+)",
      ],
      tr_hint:
        "Konuyu açma — yumuşatma + dürüst niyet. 'Uzun Mesafe Baslangici — Vedasi' senaryosunda 'Been thinking about us — wanted to be honest. Can we talk?' tarzı.",
      ideal_answer:
        "Been thinking about something — want to be honest with you. Can we talk through it?",
    },
    {
      id: "ex.fd32.lr1",
      type: "listen_respond",
      difficulty: 3,
      cefr_band: "B1",
      npc_line: "How are you actually feeling about this?",
      accepted_patterns: [
        "(honestly|truthfully) (.+) (good|complicated|mixed)",
        "(part of me|some of me) (.+)",
        "(been (processing|sitting with|figuring out))",
        "(still working through|day by day)",
        "(grateful (you asked|for the space))",
      ],
      think_seconds: 3,
      tr_hint:
        "Dürüst + olgun duygu paylaşımı. 'Uzun Mesafe Baslangici — Vedasi' bağlamında. Türk öğrenci 'fine' der; bunu yapma; SPESİFİK + dürüst.",
      ideal_response:
        "Honestly? Mixed — still processing parts of it. Day by day.",
    },
    {
      id: "ex.fd32.tt1",
      type: "thinking_trap",
      difficulty: 3,
      cefr_band: "B1",
      tr_thought: "Konuşmamız lazım, çok önemli",
      wrong_en: "We must talk, very important.",
      right_en: "I'd love to talk something through with you — is now a good time?",
      why_tr:
        "Türk öğrenci 'konuşmamız lazım + önemli' kalıbını birebir çevirir = emir tonu + 'must' baskı yaratır + 'very important' dramatik. 'Uzun Mesafe Baslangici — Vedasi' gibi hassas konuda yumuşatma şart: 'I'd love to talk' (davet) + 'is now a good time' (saygılı zaman kontrolü).",
    },
    {
      id: "ex.fd32.rq1",
      type: "recall_quiz",
      difficulty: 3,
      cefr_band: "B1",
      items: [
        {
          q: "Önemli konuyu açarken en olgun yaklaşım?",
          options: [
            "'We must talk' (emir)",
            "'I'd love to talk — good time?' (davet + saygı)",
            "Sus, bekle",
            "Direkt konuya gir",
          ],
          correct: 1,
          tr_explanation:
            "Davet + zaman kontrolü = saygılı + güvenli alan. Emir = baskı = savunmaya iter.",
        },
        {
          q: "Karşı taraf 'how are you feeling?' sorduğunda?",
          options: [
            "Tek kelime 'fine'",
            "Spesifik + dürüst + 'still processing'",
            "Yalan",
            "Konu değiştir",
          ],
          correct: 1,
          tr_explanation:
            "'Fine' = kapalı kapı. Modern dating: spesifik duygu paylaşımı = bağ kurma.",
        },
        {
          q: "'Day by day' kalıbı:",
          options: [
            "Günden güne (zaman içinde)",
            "Her gün ayrı",
            "Yapısal yanlış",
            "Hızla",
          ],
          correct: 0,
          tr_explanation:
            "'Day by day' = adım adım, zamanla. Zor süreçleri işlerken sağlıklı.",
        },
        {
          q: "'Been sitting with something' anlamı?",
          options: [
            "Bir şeyle oturmak",
            "Bir konuyu içselleştirmek/üzerinde düşünmek",
            "Beklemek",
            "Yapısal yanlış",
          ],
          correct: 1,
          tr_explanation:
            "'Sitting with' = düşünmek, sindirmek (mecaz). Olgun + öz farkındalık.",
        },
        {
          q: "Türk hatası: 'We must talk, very important'",
          options: [
            "Çok formal",
            "Emir + drama tonu = savunmaya iter",
            "Yapısal yanlış",
            "Çok kibar",
          ],
          correct: 1,
          tr_explanation:
            "'Must talk' = emir. 'Very important' = drama. Modern: davet + bağlam.",
        },
      ],
    },
  ],
};

export const flirtDeep_33: BundledLesson = {
  id: "flirt.deep.33",
  skill_id: "flirt.crisis",
  index: 33,
  title: "Ayrilik Dusunuyorum — On Yuzlesme",
  description: "Iliski yurumuyor. Yarini hazirlamak icin durumu sezdir.",
  estimated_minutes: 6,
  exercises: [
    {
      id: "ex.fd33.1",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "in a hard place",
      tr_translation: "Zor durumdayim (yarim acilim — daha agir konunun on isareti)",
      example: "I've been in a hard place about us — I need to talk.",
      example_tr: "Biz hakkinda zor bir durumdayim — konusmamiz lazim.",
    },
    {
      id: "ex.fd33.vt2",
      type: "vocab_tile",
      difficulty: 5,
      cefr_band: "C1",
      word_or_phrase: "couples therapy",
      tr_translation: "Cift terapisi (saglikli son care)",
      example: "Would you do couples therapy with me — eight sessions?",
      example_tr: "Benimle cift terapisi yapar misin — sekiz seans?",
    },
    {
      id: "ex.fd33.vt3",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "C1",
      word_or_phrase: "not in love",
      tr_translation: "Asik degilim (saygili ama net ifade)",
      example: "I love you — but I'm not sure I'm in love anymore.",
      example_tr: "Seni seviyorum — ama artik asik miyim emin degilim.",
    },
    {
      id: "ex.fd33.vt4",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "C1",
      word_or_phrase: "give us a real chance",
      tr_translation: "Bize gercek bir sans ver (umutlu kalip)",
      example: "I want to give us a real chance before deciding.",
      example_tr: "Karar vermeden once bize gercek bir sans vermek istiyorum.",
    },
    {
      id: "ex.fd33.vt5",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "C1",
      word_or_phrase: "something's been off",
      tr_translation: "Bir seyler ters (sezgisel sinyal)",
      example: "Something's been off for months — I can't pretend anymore.",
      example_tr: "Aylardir bir seyler ters — artik gizleyemem.",
    },
    {
      id: "ex.fd33.2",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description: "Ayrilmayi dusunuyorsun. Henuz karar net degil ama konusu acmak gerekiyor.",
      npc_role: "Partner",
      setting: "Serious evening conversation",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(can we |i need us to )talk (seriously)",
            "(i'?ve been |i'?m ) (in a hard place about us)",
            "(this isn'?t |i don'?t come ) (lightly)",
            "(i don'?t have a |i'?m not coming with a )(decision — i have a feeling)",
            "(i'?ve been struggling |something has been heavy )(for a while)",
            "(can you sit |can we sit ) (and just listen for a minute)",
          ],
          model_answers: ["I've been in a hard place about us. I don't have a decision — just a feeling."],
          hint_tr: "Ciddi ton: 'I've been in a hard place about us. I don't have a decision — just a feeling.'",
        },
        {
          speaker: "npc",
          message: "Okay. You're scaring me a little. Tell me.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i don'?t |i can'?t ) (feel what i used to feel)",
            "(something has been |there'?s a distance ) (off for months)",
            "(i'?ve tried |i keep trying ) (to talk myself out of feeling this)",
            "(i love you |it'?s not that i don'?t love you ) (— it'?s that i'?m not sure i'?m in love)",
            "(i'?m not sure |i don'?t know if ) (i can keep going)",
            "(i wanted to be |i thought it was fairer to be ) (honest now)",
          ],
          model_answers: ["Something's been off for months. I'm not sure I'm in love anymore."],
          hint_tr: "Durust: 'Something's been off for months. I'm not sure I'm in love anymore.'",
        },
        {
          speaker: "npc",
          message: "Have you decided already, or is this — is there a chance?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(genuinely |honestly ) (i don'?t know)",
            "(i didn'?t want |i don'?t want to ) (decide alone)",
            "(this is me |coming to you ) (before deciding)",
            "(we can try couples |would you do couples therapy )",
            "(i wanted to give us |i owe us both ) (a real chance)",
            "(i didn'?t walk in |i didn'?t come in here ) (with my mind made up)",
          ],
          model_answers: ["Genuinely I don't know. I didn't want to decide alone."],
          hint_tr: "Esnek: 'Genuinely I don't know. I didn't want to decide alone.'",
        },
        {
          speaker: "npc",
          message: "Okay. I appreciate that you didn't just blindside me. Can we try therapy?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes |absolutely )",
            "(i'?d like that |i was going to suggest the same )",
            "(let'?s give |let'?s give ourselves ) (eight sessions)",
            "(and we both |both of us ) (show up fully)",
            "(thank you for |grateful you'?re ) (not running)",
            "(this isn'?t |we may or may not save it — ) (but we tried)",
          ],
          model_answers: ["Yes — let's give ourselves eight sessions. Thank you for not running."],
          hint_tr: "Kabul: 'Yes — let's give ourselves eight sessions. Thank you for not running.'",
        },
        {
          speaker: "npc",
          message: "Okay. I'll find a therapist this week. And I love you, even now.",
        },
      ],
    },
    {
      id: "ex.fd33.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      cefr_band: "B1",
      template: "I want to ___ with you about ___ — ___?",
      slots: [
        { accepted: ["talk honestly", "be open", "share something", "have a real conversation"] },
        { accepted: ["this", "where we're at", "how I'm feeling", "what's going on"] },
        { accepted: ["is now a good time", "can we sit down for a bit", "are you up for it", "would that be okay"] },
      ],
      tr_hint:
        "Önemli konu açma kalıbı: niyet + konu + saygılı zaman sorusu. 'Ayrilik Dusunuyorum — On Yuzlesme' bağlamında — Türk öğrenci direkt konuya girer; bu sağlam ilk cümle değil. Yumuşatma + zaman kontrolü = saygılı + güvenli alan.",
      example_filled:
        "I want to talk honestly with you about where we're at — is now a good time?",
    },
    {
      id: "ex.fd33.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      cefr_band: "B1",
      turns: [
        { speaker: "npc", text: "What's on your mind?" },
        { speaker: "user" },
        { speaker: "npc", text: "Okay — I'm listening." },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(been (thinking|sitting) with|wanted to talk about)",
        "(might sound|this might sound) (.+)",
        "(want to (open up|be honest|share))",
        "(no pressure|just|honestly) (.+)",
        "(can we|could we) (.+)",
      ],
      tr_hint:
        "Konuyu açma — yumuşatma + dürüst niyet. 'Ayrilik Dusunuyorum — On Yuzlesme' senaryosunda 'Been thinking about us — wanted to be honest. Can we talk?' tarzı.",
      ideal_answer:
        "Been thinking about something — want to be honest with you. Can we talk through it?",
    },
    {
      id: "ex.fd33.lr1",
      type: "listen_respond",
      difficulty: 3,
      cefr_band: "B1",
      npc_line: "How are you actually feeling about this?",
      accepted_patterns: [
        "(honestly|truthfully) (.+) (good|complicated|mixed)",
        "(part of me|some of me) (.+)",
        "(been (processing|sitting with|figuring out))",
        "(still working through|day by day)",
        "(grateful (you asked|for the space))",
      ],
      think_seconds: 3,
      tr_hint:
        "Dürüst + olgun duygu paylaşımı. 'Ayrilik Dusunuyorum — On Yuzlesme' bağlamında. Türk öğrenci 'fine' der; bunu yapma; SPESİFİK + dürüst.",
      ideal_response:
        "Honestly? Mixed — still processing parts of it. Day by day.",
    },
    {
      id: "ex.fd33.tt1",
      type: "thinking_trap",
      difficulty: 3,
      cefr_band: "B1",
      tr_thought: "Konuşmamız lazım, çok önemli",
      wrong_en: "We must talk, very important.",
      right_en: "I'd love to talk something through with you — is now a good time?",
      why_tr:
        "Türk öğrenci 'konuşmamız lazım + önemli' kalıbını birebir çevirir = emir tonu + 'must' baskı yaratır + 'very important' dramatik. 'Ayrilik Dusunuyorum — On Yuzlesme' gibi hassas konuda yumuşatma şart: 'I'd love to talk' (davet) + 'is now a good time' (saygılı zaman kontrolü).",
    },
    {
      id: "ex.fd33.rq1",
      type: "recall_quiz",
      difficulty: 3,
      cefr_band: "B1",
      items: [
        {
          q: "Önemli konuyu açarken en olgun yaklaşım?",
          options: [
            "'We must talk' (emir)",
            "'I'd love to talk — good time?' (davet + saygı)",
            "Sus, bekle",
            "Direkt konuya gir",
          ],
          correct: 1,
          tr_explanation:
            "Davet + zaman kontrolü = saygılı + güvenli alan. Emir = baskı = savunmaya iter.",
        },
        {
          q: "Karşı taraf 'how are you feeling?' sorduğunda?",
          options: [
            "Tek kelime 'fine'",
            "Spesifik + dürüst + 'still processing'",
            "Yalan",
            "Konu değiştir",
          ],
          correct: 1,
          tr_explanation:
            "'Fine' = kapalı kapı. Modern dating: spesifik duygu paylaşımı = bağ kurma.",
        },
        {
          q: "'Day by day' kalıbı:",
          options: [
            "Günden güne (zaman içinde)",
            "Her gün ayrı",
            "Yapısal yanlış",
            "Hızla",
          ],
          correct: 0,
          tr_explanation:
            "'Day by day' = adım adım, zamanla. Zor süreçleri işlerken sağlıklı.",
        },
        {
          q: "'Been sitting with something' anlamı?",
          options: [
            "Bir şeyle oturmak",
            "Bir konuyu içselleştirmek/üzerinde düşünmek",
            "Beklemek",
            "Yapısal yanlış",
          ],
          correct: 1,
          tr_explanation:
            "'Sitting with' = düşünmek, sindirmek (mecaz). Olgun + öz farkındalık.",
        },
        {
          q: "Türk hatası: 'We must talk, very important'",
          options: [
            "Çok formal",
            "Emir + drama tonu = savunmaya iter",
            "Yapısal yanlış",
            "Çok kibar",
          ],
          correct: 1,
          tr_explanation:
            "'Must talk' = emir. 'Very important' = drama. Modern: davet + bağlam.",
        },
      ],
    },
  ],
};

export const flirtDeep_34: BundledLesson = {
  id: "flirt.deep.34",
  skill_id: "flirt.crisis",
  index: 34,
  title: "Ayrilik — Konusmanin Kendisi",
  description: "Karar verdin. Ayrilik konusmasini sen sahiplenip duruyorsun.",
  estimated_minutes: 7,
  exercises: [
    {
      id: "ex.fd34.1",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "this isn't working",
      tr_translation: "Bu yurumuyor (klasik ayrilik kalibi)",
      example: "This isn't working — and I think we both know it.",
      example_tr: "Bu yurumuyor — ve sanirim ikimiz de biliyoruz.",
    },
    {
      id: "ex.fd34.vt2",
      type: "vocab_tile",
      difficulty: 5,
      cefr_band: "C1",
      word_or_phrase: "love isn't enough",
      tr_translation: "Sevgi yeterli degil (olgun ayrilik kalibi)",
      example: "I love you — but love isn't enough here.",
      example_tr: "Seni seviyorum — ama burada sevgi yeterli degil.",
    },
    {
      id: "ex.fd34.vt3",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "C1",
      word_or_phrase: "not here to negotiate",
      tr_translation: "Pazarlik etmek icin gelmedim (kararli sinir)",
      example: "I didn't come to negotiate — I came to be honest.",
      example_tr: "Pazarlik etmek icin gelmedim — durust olmaya geldim.",
    },
    {
      id: "ex.fd34.vt4",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "C1",
      word_or_phrase: "the kindest thing",
      tr_translation: "En sefkatli sey (zor karar kalibi)",
      example: "The kindest thing I can do now is be clear.",
      example_tr: "Simdi yapabilecegim en sefkatli sey net olmak.",
    },
    {
      id: "ex.fd34.vt5",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "take care of yourself",
      tr_translation: "Kendine iyi bak (saygili kapanis)",
      example: "Take care of yourself — please. I mean it.",
      example_tr: "Kendine iyi bak — lutfen. Gercekten.",
    },
    {
      id: "ex.fd34.2",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description: "Karar net. Ayrilik konusmasi. Saygi + netlik + duygu birarada.",
      npc_role: "Partner",
      setting: "Living room — the breakup conversation",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(i need to say something |i have something to say )(and i need you to let me finish)",
            "(this isn'?t working |we can'?t keep doing this )",
            "(i'?m ending |i need to end )(this|us)",
            "(i love you |i still love you ) (but love isn'?t enough here)",
            "(i didn'?t come |i'?m not here ) (to negotiate)",
            "(this is the |i need to be ) (most honest version of me right now)",
          ],
          model_answers: ["I need to end this. I love you but love isn't enough here."],
          hint_tr: "Net + saygili: 'I need to end this. I love you but love isn't enough here.'",
        },
        {
          speaker: "npc",
          message: "Are you sure? Can we try one more thing?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(we tried |we tried )(everything we could)",
            "(i'?ve been |this has been ) (sure for months)",
            "(it would only |trying again would only ) (delay this)",
            "(i love you |i love you too much )(to keep half.?in)",
            "(this is the kindest |the kindest thing i can do )(now)",
            "(my answer is |the answer is ) (no, gently)",
          ],
          model_answers: ["I've been sure for months. The kindest thing now is to be honest."],
          hint_tr: "Net sinir: 'I've been sure for months. The kindest thing now is to be honest.'",
        },
        {
          speaker: "npc",
          message: "Is there someone else?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(no |genuinely no )",
            "(this is about |this is about us|me)",
            "(no one else |i didn'?t leave for someone )",
            "(it'?s not |this isn'?t about that )",
            "(i'?d tell you |i would tell you ) if (it was)",
            "(it'?s simpler |it'?s actually sadder than that )",
          ],
          model_answers: ["No one else. This is about us."],
          hint_tr: "Durust: 'No one else. This is about us.'",
        },
        {
          speaker: "npc",
          message: "What about — how do we do the logistics? The flat?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i'?ll stay with |i can stay with ) (a friend tonight)",
            "(i'?ll move out |i'?ll find a place ) (within two weeks)",
            "(let'?s not decide |we don'?t have to figure all that out ) (tonight)",
            "(i want you |i want this ) (to be fair to you)",
            "(no taking |nothing'?s taken ) (in anger)",
            "(we can sort logistics |the logistics can wait )(later)",
          ],
          model_answers: ["I'll stay with a friend tonight. Move out in two weeks. We'll sort logistics later."],
          hint_tr: "Lojistik net: 'I'll stay with a friend tonight. Move out in two weeks. We'll sort logistics later.'",
        },
        {
          speaker: "npc",
          message: "Okay. I don't think I can talk anymore tonight. Please go.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(okay |understood )",
            "(i'?m going |going now )",
            "(i'?m so sorry |i am so sorry )",
            "(i loved you |i loved you genuinely )",
            "(take care |please take care )(of yourself)",
            "(if you need |when you need ) (anything, i'?m reachable)",
          ],
          model_answers: ["Okay — going now. I loved you genuinely. Take care."],
          hint_tr: "Saygili cikis: 'Okay — going now. I loved you genuinely. Take care.'",
        },
        {
          speaker: "npc",
          message: "Just go.",
        },
      ],
    },
    {
      id: "ex.fd34.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      cefr_band: "B1",
      template: "I want to ___ with you about ___ — ___?",
      slots: [
        { accepted: ["talk honestly", "be open", "share something", "have a real conversation"] },
        { accepted: ["this", "where we're at", "how I'm feeling", "what's going on"] },
        { accepted: ["is now a good time", "can we sit down for a bit", "are you up for it", "would that be okay"] },
      ],
      tr_hint:
        "Önemli konu açma kalıbı: niyet + konu + saygılı zaman sorusu. 'Ayrilik — Konusmanin Kendisi' bağlamında — Türk öğrenci direkt konuya girer; bu sağlam ilk cümle değil. Yumuşatma + zaman kontrolü = saygılı + güvenli alan.",
      example_filled:
        "I want to talk honestly with you about where we're at — is now a good time?",
    },
    {
      id: "ex.fd34.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      cefr_band: "B1",
      turns: [
        { speaker: "npc", text: "What's on your mind?" },
        { speaker: "user" },
        { speaker: "npc", text: "Okay — I'm listening." },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(been (thinking|sitting) with|wanted to talk about)",
        "(might sound|this might sound) (.+)",
        "(want to (open up|be honest|share))",
        "(no pressure|just|honestly) (.+)",
        "(can we|could we) (.+)",
      ],
      tr_hint:
        "Konuyu açma — yumuşatma + dürüst niyet. 'Ayrilik — Konusmanin Kendisi' senaryosunda 'Been thinking about us — wanted to be honest. Can we talk?' tarzı.",
      ideal_answer:
        "Been thinking about something — want to be honest with you. Can we talk through it?",
    },
    {
      id: "ex.fd34.lr1",
      type: "listen_respond",
      difficulty: 3,
      cefr_band: "B1",
      npc_line: "How are you actually feeling about this?",
      accepted_patterns: [
        "(honestly|truthfully) (.+) (good|complicated|mixed)",
        "(part of me|some of me) (.+)",
        "(been (processing|sitting with|figuring out))",
        "(still working through|day by day)",
        "(grateful (you asked|for the space))",
      ],
      think_seconds: 3,
      tr_hint:
        "Dürüst + olgun duygu paylaşımı. 'Ayrilik — Konusmanin Kendisi' bağlamında. Türk öğrenci 'fine' der; bunu yapma; SPESİFİK + dürüst.",
      ideal_response:
        "Honestly? Mixed — still processing parts of it. Day by day.",
    },
    {
      id: "ex.fd34.tt1",
      type: "thinking_trap",
      difficulty: 3,
      cefr_band: "B1",
      tr_thought: "Konuşmamız lazım, çok önemli",
      wrong_en: "We must talk, very important.",
      right_en: "I'd love to talk something through with you — is now a good time?",
      why_tr:
        "Türk öğrenci 'konuşmamız lazım + önemli' kalıbını birebir çevirir = emir tonu + 'must' baskı yaratır + 'very important' dramatik. 'Ayrilik — Konusmanin Kendisi' gibi hassas konuda yumuşatma şart: 'I'd love to talk' (davet) + 'is now a good time' (saygılı zaman kontrolü).",
    },
    {
      id: "ex.fd34.rq1",
      type: "recall_quiz",
      difficulty: 3,
      cefr_band: "B1",
      items: [
        {
          q: "Önemli konuyu açarken en olgun yaklaşım?",
          options: [
            "'We must talk' (emir)",
            "'I'd love to talk — good time?' (davet + saygı)",
            "Sus, bekle",
            "Direkt konuya gir",
          ],
          correct: 1,
          tr_explanation:
            "Davet + zaman kontrolü = saygılı + güvenli alan. Emir = baskı = savunmaya iter.",
        },
        {
          q: "Karşı taraf 'how are you feeling?' sorduğunda?",
          options: [
            "Tek kelime 'fine'",
            "Spesifik + dürüst + 'still processing'",
            "Yalan",
            "Konu değiştir",
          ],
          correct: 1,
          tr_explanation:
            "'Fine' = kapalı kapı. Modern dating: spesifik duygu paylaşımı = bağ kurma.",
        },
        {
          q: "'Day by day' kalıbı:",
          options: [
            "Günden güne (zaman içinde)",
            "Her gün ayrı",
            "Yapısal yanlış",
            "Hızla",
          ],
          correct: 0,
          tr_explanation:
            "'Day by day' = adım adım, zamanla. Zor süreçleri işlerken sağlıklı.",
        },
        {
          q: "'Been sitting with something' anlamı?",
          options: [
            "Bir şeyle oturmak",
            "Bir konuyu içselleştirmek/üzerinde düşünmek",
            "Beklemek",
            "Yapısal yanlış",
          ],
          correct: 1,
          tr_explanation:
            "'Sitting with' = düşünmek, sindirmek (mecaz). Olgun + öz farkındalık.",
        },
        {
          q: "Türk hatası: 'We must talk, very important'",
          options: [
            "Çok formal",
            "Emir + drama tonu = savunmaya iter",
            "Yapısal yanlış",
            "Çok kibar",
          ],
          correct: 1,
          tr_explanation:
            "'Must talk' = emir. 'Very important' = drama. Modern: davet + bağlam.",
        },
      ],
    },
  ],
};

export const flirtDeep_35: BundledLesson = {
  id: "flirt.deep.35",
  skill_id: "flirt.crisis",
  index: 35,
  title: "Ayriliktan Sonra — Arkadas Destegi",
  description: "Ayrildin. En yakin Turk arkadasini ariyorsun. Cokmus halini ifade et.",
  estimated_minutes: 6,
  exercises: [
    {
      id: "ex.fd35.1",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B2",
      word_or_phrase: "falling apart",
      tr_translation: "Cokuyorum, parcaliyorum (yumusak duygu paylasimi)",
      example: "I'm falling apart a bit — can you come over?",
      example_tr: "Birazcik cokuyorum — gelir misin?",
    },
    {
      id: "ex.fd35.vt2",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "haven't cried yet",
      tr_translation: "Henuz aglamadim (sok hali kalibi)",
      example: "I haven't cried yet — that's weirding me out.",
      example_tr: "Henuz aglamadim — bu beni urkutuyor.",
    },
    {
      id: "ex.fd35.vt3",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "C1",
      word_or_phrase: "the right thing",
      tr_translation: "Dogru olan (zor karar kabulu)",
      example: "It was the right thing — but it's still terrible.",
      example_tr: "Dogru olan buydu — ama hala korkunc.",
    },
    {
      id: "ex.fd35.vt4",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B2",
      word_or_phrase: "come over",
      tr_translation: "Gel (samimi davet)",
      example: "Just come over — bring food, I'll explain when you get here.",
      example_tr: "Sadece gel — yemek getir, geldiginde anlatirim.",
    },
    {
      id: "ex.fd35.vt5",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "C1",
      word_or_phrase: "watch something stupid",
      tr_translation: "Sacma bir sey izle (terapotik basit aktivite)",
      example: "Let's just watch something stupid — I can't think anymore.",
      example_tr: "Sacma bir sey izleyelim — artik dusunemiyorum.",
    },
    {
      id: "ex.fd35.2",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description: "En yakin arkadasini telefonla ariyorsun. Iliski biraz once bitti.",
      npc_role: "Best friend",
      setting: "Phone call to best friend — after breakup",
      turns: [
        {
          speaker: "npc",
          message: "(answers) Hey — everything okay? You never call this late.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(we broke up |it'?s over )",
            "(i ended it |i did it )(tonight)",
            "(i'?m at |i'?m sitting at )(a bar|my flat) (alone)",
            "(falling apart a bit |kind of falling apart )",
            "(can you |would you )(come over|just talk to me)",
            "(i didn'?t know |you were the only person ) (who to call)",
          ],
          model_answers: ["We broke up. I'm falling apart a bit. Can you come over?"],
          hint_tr: "Direkt: 'We broke up. I'm falling apart a bit. Can you come over?'",
        },
        {
          speaker: "npc",
          message: "Oh god — okay — I'm getting in a taxi. Are you alone?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yeah |yes )",
            "(no one |nobody ) here",
            "(staying at |i'?m at )(emre'?s couch|a friend'?s)",
            "(haven'?t cried |i can'?t even cry yet )",
            "(everything feels |i feel )(weirdly fine|too quiet)",
            "(don'?t rush |don'?t speed )— (i'?m okay until you get here)",
          ],
          model_answers: ["Alone. Haven't cried yet — everything feels weirdly quiet."],
          hint_tr: "Durum: 'Alone. Haven't cried yet — everything feels weirdly quiet.'",
        },
        {
          speaker: "npc",
          message: "Have you eaten? Did you eat anything today?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(honestly |i don'?t even )remember",
            "(probably no |i don'?t think so )",
            "(bring food |yes please bring food )",
            "(my appetite is |i can'?t eat )(gone|right now)",
            "(maybe some |something simple ) — (bread|soup)",
            "(don'?t worry |whatever you bring is fine )",
          ],
          model_answers: ["Honestly don't remember. Bring something simple."],
          hint_tr: "Durust: 'Honestly don't remember. Bring something simple.'",
        },
        {
          speaker: "npc",
          message: "I'm bringing soup and bread. Talk to me while I'm in the cab.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(it was |it ended ) (the right thing but it'?s still terrible)",
            "(i don'?t feel |i didn'?t expect to feel ) (this empty)",
            "(my brain hasn'?t |i don'?t think it'?s hit me ) (yet)",
            "(everyone said |all the books say ) (it gets easier — )(today is not easier)",
            "(thank you for |i don'?t deserve how fast )(coming over)",
            "(can we just |let'?s just )(watch something stupid)",
          ],
          model_answers: ["It was the right thing but it's terrible. Thank you for coming."],
          hint_tr: "Acik paylasim: 'It was the right thing but it's terrible. Thank you for coming.'",
        },
        {
          speaker: "npc",
          message: "I'm five minutes away. Open the door and don't tidy up. I love you.",
        },
      ],
    },
    {
      id: "ex.fd35.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      cefr_band: "B1",
      template: "I want to ___ with you about ___ — ___?",
      slots: [
        { accepted: ["talk honestly", "be open", "share something", "have a real conversation"] },
        { accepted: ["this", "where we're at", "how I'm feeling", "what's going on"] },
        { accepted: ["is now a good time", "can we sit down for a bit", "are you up for it", "would that be okay"] },
      ],
      tr_hint:
        "Önemli konu açma kalıbı: niyet + konu + saygılı zaman sorusu. 'Ayriliktan Sonra — Arkadas Destegi' bağlamında — Türk öğrenci direkt konuya girer; bu sağlam ilk cümle değil. Yumuşatma + zaman kontrolü = saygılı + güvenli alan.",
      example_filled:
        "I want to talk honestly with you about where we're at — is now a good time?",
    },
    {
      id: "ex.fd35.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      cefr_band: "B1",
      turns: [
        { speaker: "npc", text: "What's on your mind?" },
        { speaker: "user" },
        { speaker: "npc", text: "Okay — I'm listening." },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(been (thinking|sitting) with|wanted to talk about)",
        "(might sound|this might sound) (.+)",
        "(want to (open up|be honest|share))",
        "(no pressure|just|honestly) (.+)",
        "(can we|could we) (.+)",
      ],
      tr_hint:
        "Konuyu açma — yumuşatma + dürüst niyet. 'Ayriliktan Sonra — Arkadas Destegi' senaryosunda 'Been thinking about us — wanted to be honest. Can we talk?' tarzı.",
      ideal_answer:
        "Been thinking about something — want to be honest with you. Can we talk through it?",
    },
    {
      id: "ex.fd35.lr1",
      type: "listen_respond",
      difficulty: 3,
      cefr_band: "B1",
      npc_line: "How are you actually feeling about this?",
      accepted_patterns: [
        "(honestly|truthfully) (.+) (good|complicated|mixed)",
        "(part of me|some of me) (.+)",
        "(been (processing|sitting with|figuring out))",
        "(still working through|day by day)",
        "(grateful (you asked|for the space))",
      ],
      think_seconds: 3,
      tr_hint:
        "Dürüst + olgun duygu paylaşımı. 'Ayriliktan Sonra — Arkadas Destegi' bağlamında. Türk öğrenci 'fine' der; bunu yapma; SPESİFİK + dürüst.",
      ideal_response:
        "Honestly? Mixed — still processing parts of it. Day by day.",
    },
    {
      id: "ex.fd35.tt1",
      type: "thinking_trap",
      difficulty: 3,
      cefr_band: "B1",
      tr_thought: "Konuşmamız lazım, çok önemli",
      wrong_en: "We must talk, very important.",
      right_en: "I'd love to talk something through with you — is now a good time?",
      why_tr:
        "Türk öğrenci 'konuşmamız lazım + önemli' kalıbını birebir çevirir = emir tonu + 'must' baskı yaratır + 'very important' dramatik. 'Ayriliktan Sonra — Arkadas Destegi' gibi hassas konuda yumuşatma şart: 'I'd love to talk' (davet) + 'is now a good time' (saygılı zaman kontrolü).",
    },
    {
      id: "ex.fd35.rq1",
      type: "recall_quiz",
      difficulty: 3,
      cefr_band: "B1",
      items: [
        {
          q: "Önemli konuyu açarken en olgun yaklaşım?",
          options: [
            "'We must talk' (emir)",
            "'I'd love to talk — good time?' (davet + saygı)",
            "Sus, bekle",
            "Direkt konuya gir",
          ],
          correct: 1,
          tr_explanation:
            "Davet + zaman kontrolü = saygılı + güvenli alan. Emir = baskı = savunmaya iter.",
        },
        {
          q: "Karşı taraf 'how are you feeling?' sorduğunda?",
          options: [
            "Tek kelime 'fine'",
            "Spesifik + dürüst + 'still processing'",
            "Yalan",
            "Konu değiştir",
          ],
          correct: 1,
          tr_explanation:
            "'Fine' = kapalı kapı. Modern dating: spesifik duygu paylaşımı = bağ kurma.",
        },
        {
          q: "'Day by day' kalıbı:",
          options: [
            "Günden güne (zaman içinde)",
            "Her gün ayrı",
            "Yapısal yanlış",
            "Hızla",
          ],
          correct: 0,
          tr_explanation:
            "'Day by day' = adım adım, zamanla. Zor süreçleri işlerken sağlıklı.",
        },
        {
          q: "'Been sitting with something' anlamı?",
          options: [
            "Bir şeyle oturmak",
            "Bir konuyu içselleştirmek/üzerinde düşünmek",
            "Beklemek",
            "Yapısal yanlış",
          ],
          correct: 1,
          tr_explanation:
            "'Sitting with' = düşünmek, sindirmek (mecaz). Olgun + öz farkındalık.",
        },
        {
          q: "Türk hatası: 'We must talk, very important'",
          options: [
            "Çok formal",
            "Emir + drama tonu = savunmaya iter",
            "Yapısal yanlış",
            "Çok kibar",
          ],
          correct: 1,
          tr_explanation:
            "'Must talk' = emir. 'Very important' = drama. Modern: davet + bağlam.",
        },
      ],
    },
  ],
};

export const flirtDeep_36: BundledLesson = {
  id: "flirt.deep.36",
  skill_id: "flirt.crisis",
  index: 36,
  title: "Eski Sevgili Kapanis Konusmasi",
  description: "Aylar sonra. Kapanis icin son bir kahve. Olgun, dramatik degil.",
  estimated_minutes: 6,
  exercises: [
    {
      id: "ex.fd36.1",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "closure",
      tr_translation: "Kapanis, anlasilma (psikolojik terim, modern dating'de yaygin)",
      example: "I'm here for closure — not to reopen anything.",
      example_tr: "Kapanis icin geldim — bir seyi tekrar acmak icin degil.",
    },
    {
      id: "ex.fd36.vt2",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "C1",
      word_or_phrase: "crosses the line",
      tr_translation: "Sinirla asar (uygunsuz soru kalibi)",
      example: "That question crosses the line for what this meeting is.",
      example_tr: "Bu soru bu bulusmanin sinirlarini asiyor.",
    },
    {
      id: "ex.fd36.vt3",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "C1",
      word_or_phrase: "shaped how I date",
      tr_translation: "Dating tarzimi sekillendirdi (gecmis dersi)",
      example: "Honestly, that breakup shaped how I date now.",
      example_tr: "Durust soylemek gerekirse, o ayrilik dating tarzimi sekillendirdi.",
    },
    {
      id: "ex.fd36.vt4",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "keep it clean",
      tr_translation: "Temiz tutalim (sinir koyma kalibi)",
      example: "Let's keep this hour clean — no drama.",
      example_tr: "Bu saati temiz tutalim — drama yok.",
    },
    {
      id: "ex.fd36.vt5",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "C1",
      word_or_phrase: "moved past it",
      tr_translation: "Asip gectim (iyilesme sinyali)",
      example: "I've moved past it — but it took real work.",
      example_tr: "Asip gectim — ama gercek bir calismayla.",
    },
    {
      id: "ex.fd36.2",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description: "Alti ay sonra. Eski sevgili kapanis icin kahve istedi. Sen kabul ettin — net sinirla.",
      npc_role: "Ex partner",
      setting: "Coffee shop — closure conversation six months after breakup",
      turns: [
        {
          speaker: "npc",
          message: "Thanks for coming. I wasn't sure you would.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i almost didn'?t |this took me a while to decide )",
            "(i'?m here for |i came for ) (closure — not reopening)",
            "(let'?s keep |i want to keep ) (this hour clean)",
            "(i don'?t |i'?m not here ) (to fight)",
            "(what did you |what made you ) (want to meet)",
            "(let'?s start with |you go first )",
          ],
          model_answers: ["I'm here for closure, not reopening. Let's keep this clean."],
          hint_tr: "Sinir net: 'I'm here for closure, not reopening. Let's keep this clean.'",
        },
        {
          speaker: "npc",
          message: "I wanted to say sorry — properly. For how I handled the end.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(okay |i hear you )",
            "(thank you for |i appreciate ) (saying that)",
            "(it took me |it took months ) (to be ready to hear it)",
            "(i don'?t |i'?m not going to )tell you it'?s (all forgiven|fine)",
            "(but i hear you |but i accept it )",
            "(what specifically |what part )(do you mean)",
          ],
          model_answers: ["I appreciate that. It took months to be ready to hear it."],
          hint_tr: "Acik kabul: 'I appreciate that. It took months to be ready to hear it.'",
        },
        {
          speaker: "npc",
          message: "Being dishonest at the end. Letting it drag instead of being clear.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yeah |that hurt most )",
            "(the dragging |the dishonesty ) (was the worst part)",
            "(i could |i'?d have respected ) (clean honesty)",
            "(i did the |i had to do the )(unlearning of my own anger about that)",
            "(i'?m past it |i'?ve moved past it )(— but it shaped how i date now)",
            "(thank you for naming |grateful you named ) (the actual thing)",
          ],
          model_answers: ["The dragging hurt most. I'd have respected clean honesty."],
          hint_tr: "Onayla: 'The dragging hurt most. I'd have respected clean honesty.'",
        },
        {
          speaker: "npc",
          message: "Can I ask — are you seeing someone?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i don'?t |this isn'?t )(want to answer that here)",
            "(that crosses |that'?s past )the line (for what this is)",
            "(let'?s |let'?s keep this )(focused)",
            "(no offense |no hostility ) but (i'?d rather not)",
            "(this isn'?t |i don'?t want this )(to become a check.?in)",
            "(let'?s leave |let'?s end ) (it where it is)",
          ],
          model_answers: ["Crosses the line for what this is. Let's keep it focused."],
          hint_tr: "Sinir koy: 'Crosses the line for what this is. Let's keep it focused.'",
        },
        {
          speaker: "npc",
          message: "Fair. Okay. Then — I hope you're well. Genuinely.",
        },
      ],
    },
    {
      id: "ex.fd36.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      cefr_band: "B1",
      template: "I want to ___ with you about ___ — ___?",
      slots: [
        { accepted: ["talk honestly", "be open", "share something", "have a real conversation"] },
        { accepted: ["this", "where we're at", "how I'm feeling", "what's going on"] },
        { accepted: ["is now a good time", "can we sit down for a bit", "are you up for it", "would that be okay"] },
      ],
      tr_hint:
        "Önemli konu açma kalıbı: niyet + konu + saygılı zaman sorusu. 'Eski Sevgili Kapanis Konusmasi' bağlamında — Türk öğrenci direkt konuya girer; bu sağlam ilk cümle değil. Yumuşatma + zaman kontrolü = saygılı + güvenli alan.",
      example_filled:
        "I want to talk honestly with you about where we're at — is now a good time?",
    },
    {
      id: "ex.fd36.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      cefr_band: "B1",
      turns: [
        { speaker: "npc", text: "What's on your mind?" },
        { speaker: "user" },
        { speaker: "npc", text: "Okay — I'm listening." },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(been (thinking|sitting) with|wanted to talk about)",
        "(might sound|this might sound) (.+)",
        "(want to (open up|be honest|share))",
        "(no pressure|just|honestly) (.+)",
        "(can we|could we) (.+)",
      ],
      tr_hint:
        "Konuyu açma — yumuşatma + dürüst niyet. 'Eski Sevgili Kapanis Konusmasi' senaryosunda 'Been thinking about us — wanted to be honest. Can we talk?' tarzı.",
      ideal_answer:
        "Been thinking about something — want to be honest with you. Can we talk through it?",
    },
    {
      id: "ex.fd36.lr1",
      type: "listen_respond",
      difficulty: 3,
      cefr_band: "B1",
      npc_line: "How are you actually feeling about this?",
      accepted_patterns: [
        "(honestly|truthfully) (.+) (good|complicated|mixed)",
        "(part of me|some of me) (.+)",
        "(been (processing|sitting with|figuring out))",
        "(still working through|day by day)",
        "(grateful (you asked|for the space))",
      ],
      think_seconds: 3,
      tr_hint:
        "Dürüst + olgun duygu paylaşımı. 'Eski Sevgili Kapanis Konusmasi' bağlamında. Türk öğrenci 'fine' der; bunu yapma; SPESİFİK + dürüst.",
      ideal_response:
        "Honestly? Mixed — still processing parts of it. Day by day.",
    },
    {
      id: "ex.fd36.tt1",
      type: "thinking_trap",
      difficulty: 3,
      cefr_band: "B1",
      tr_thought: "Konuşmamız lazım, çok önemli",
      wrong_en: "We must talk, very important.",
      right_en: "I'd love to talk something through with you — is now a good time?",
      why_tr:
        "Türk öğrenci 'konuşmamız lazım + önemli' kalıbını birebir çevirir = emir tonu + 'must' baskı yaratır + 'very important' dramatik. 'Eski Sevgili Kapanis Konusmasi' gibi hassas konuda yumuşatma şart: 'I'd love to talk' (davet) + 'is now a good time' (saygılı zaman kontrolü).",
    },
    {
      id: "ex.fd36.rq1",
      type: "recall_quiz",
      difficulty: 3,
      cefr_band: "B1",
      items: [
        {
          q: "Önemli konuyu açarken en olgun yaklaşım?",
          options: [
            "'We must talk' (emir)",
            "'I'd love to talk — good time?' (davet + saygı)",
            "Sus, bekle",
            "Direkt konuya gir",
          ],
          correct: 1,
          tr_explanation:
            "Davet + zaman kontrolü = saygılı + güvenli alan. Emir = baskı = savunmaya iter.",
        },
        {
          q: "Karşı taraf 'how are you feeling?' sorduğunda?",
          options: [
            "Tek kelime 'fine'",
            "Spesifik + dürüst + 'still processing'",
            "Yalan",
            "Konu değiştir",
          ],
          correct: 1,
          tr_explanation:
            "'Fine' = kapalı kapı. Modern dating: spesifik duygu paylaşımı = bağ kurma.",
        },
        {
          q: "'Day by day' kalıbı:",
          options: [
            "Günden güne (zaman içinde)",
            "Her gün ayrı",
            "Yapısal yanlış",
            "Hızla",
          ],
          correct: 0,
          tr_explanation:
            "'Day by day' = adım adım, zamanla. Zor süreçleri işlerken sağlıklı.",
        },
        {
          q: "'Been sitting with something' anlamı?",
          options: [
            "Bir şeyle oturmak",
            "Bir konuyu içselleştirmek/üzerinde düşünmek",
            "Beklemek",
            "Yapısal yanlış",
          ],
          correct: 1,
          tr_explanation:
            "'Sitting with' = düşünmek, sindirmek (mecaz). Olgun + öz farkındalık.",
        },
        {
          q: "Türk hatası: 'We must talk, very important'",
          options: [
            "Çok formal",
            "Emir + drama tonu = savunmaya iter",
            "Yapısal yanlış",
            "Çok kibar",
          ],
          correct: 1,
          tr_explanation:
            "'Must talk' = emir. 'Very important' = drama. Modern: davet + bağlam.",
        },
      ],
    },
  ],
};

export const flirtDeep_37: BundledLesson = {
  id: "flirt.deep.37",
  skill_id: "flirt.crisis",
  index: 37,
  title: "Ghost Edildim — Isleme",
  description: "Iki haftadir cevap yok. Bir Turk arkadasinla ne hissettigini konus.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.fd37.1",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B2",
      word_or_phrase: "ghosted",
      tr_translation: "Hayalete cevirildim, ortadan kayboldu (modern dating klasigi)",
      example: "She fully ghosted me after the third date.",
      example_tr: "Ucuncu randevudan sonra tamamen hayalete cevirdi.",
    },
    {
      id: "ex.fd37.vt2",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B2",
      word_or_phrase: "radio silence",
      tr_translation: "Tamamen sessizlik (ghosting sinyali)",
      example: "Radio silence for two weeks — that's my answer.",
      example_tr: "Iki haftadir tamamen sessizlik — cevap bu.",
    },
    {
      id: "ex.fd37.vt3",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "C1",
      word_or_phrase: "her silence is the answer",
      tr_translation: "Sessizligi cevap (olgun kabul)",
      example: "I'm not chasing — her silence is the answer.",
      example_tr: "Pesinden gitmiyorum — sessizligi cevap.",
    },
    {
      id: "ex.fd37.vt4",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "ego took a hit",
      tr_translation: "Ego'ma darbe geldi (samimi paylasim)",
      example: "More than hurt — my ego took a hit.",
      example_tr: "Acidan cok — ego'ma darbe geldi.",
    },
    {
      id: "ex.fd37.vt5",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "C1",
      word_or_phrase: "not about me",
      tr_translation: "Bu benimle ilgili degil (saglikli olgu)",
      example: "Reminding myself — her disappearing is not about me.",
      example_tr: "Kendime hatirlatiyorum — kaybolmasi benimle ilgili degil.",
    },
    {
      id: "ex.fd37.2",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description: "Brunch'ta arkadasinla. Iki hafta once ghost edildigini paylasiyorsun.",
      npc_role: "Best friend",
      setting: "Brunch — processing being ghosted",
      turns: [
        {
          speaker: "npc",
          message: "So have you heard back from her? It's been like two weeks now.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(nope |zero )",
            "(officially |i think i'?ve been ) ghosted",
            "(no reply |radio silence ) (for fourteen days)",
            "(she went from |she'?s gone from )(daily texting to nothing)",
            "(i think |my read is ) (she dipped)",
            "(haven'?t even seen |she'?s not even reading )(my last message)",
          ],
          model_answers: ["Officially ghosted. Fourteen days, radio silence."],
          hint_tr: "Durust: 'Officially ghosted. Fourteen days, radio silence.'",
        },
        {
          speaker: "npc",
          message: "Wow — that's brutal. How are you actually doing with it?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(honestly |truthfully ) (more annoyed than hurt)",
            "(it'?s the |the )(not knowing|silence) (that gets me)",
            "(i don'?t |i'?m not even )(miss her |upset about her — just confused)",
            "(my ego is more |my ego took the bigger ) (hit)",
            "(i thought we were |it felt mutual )(having a real thing)",
            "(it'?s the |hardest part is the )(disrespect|lack of basic decency)",
          ],
          model_answers: ["More annoyed than hurt. Hardest part is the disrespect."],
          hint_tr: "Sahici: 'More annoyed than hurt. Hardest part is the disrespect.'",
        },
        {
          speaker: "npc",
          message: "Have you been tempted to send a follow-up?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(every single |every other ) day",
            "(i drafted |i wrote a )(message|paragraph) (and deleted it)",
            "(i held |my fingers held ) (firm so far)",
            "(it'?s |the urge is ) (mostly ego)",
            "(no |won'?t do it ) — (her silence is the answer)",
            "(i decided |the new rule is ) (her silence is her message)",
          ],
          model_answers: ["Every day — but no. Her silence is her message."],
          hint_tr: "Olgun: 'Every day — but no. Her silence is her message.'",
        },
        {
          speaker: "npc",
          message: "Good. What helps when it hits you?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(gym |running ) (a lot)",
            "(calling my mom |my mom calls have increased )",
            "(turkish music |sad turkish music )(— let it out then move on)",
            "(deleting the app |took the apps off my phone for a week )",
            "(reminding myself |the reminder that ) (it'?s not about me)",
            "(brunch with you |these brunches )(help honestly)",
          ],
          model_answers: ["Gym, calling mom. Reminding myself it's not about me."],
          hint_tr: "Self-care: 'Gym, calling mom. Reminding myself it's not about me.'",
        },
        {
          speaker: "npc",
          message: "Proud of you. Want me to set you up with my coworker? She actually replies to messages.",
        },
      ],
    },
    {
      id: "ex.fd37.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      cefr_band: "B1",
      template: "I want to ___ with you about ___ — ___?",
      slots: [
        { accepted: ["talk honestly", "be open", "share something", "have a real conversation"] },
        { accepted: ["this", "where we're at", "how I'm feeling", "what's going on"] },
        { accepted: ["is now a good time", "can we sit down for a bit", "are you up for it", "would that be okay"] },
      ],
      tr_hint:
        "Önemli konu açma kalıbı: niyet + konu + saygılı zaman sorusu. 'Ghost Edildim — Isleme' bağlamında — Türk öğrenci direkt konuya girer; bu sağlam ilk cümle değil. Yumuşatma + zaman kontrolü = saygılı + güvenli alan.",
      example_filled:
        "I want to talk honestly with you about where we're at — is now a good time?",
    },
    {
      id: "ex.fd37.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      cefr_band: "B1",
      turns: [
        { speaker: "npc", text: "What's on your mind?" },
        { speaker: "user" },
        { speaker: "npc", text: "Okay — I'm listening." },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(been (thinking|sitting) with|wanted to talk about)",
        "(might sound|this might sound) (.+)",
        "(want to (open up|be honest|share))",
        "(no pressure|just|honestly) (.+)",
        "(can we|could we) (.+)",
      ],
      tr_hint:
        "Konuyu açma — yumuşatma + dürüst niyet. 'Ghost Edildim — Isleme' senaryosunda 'Been thinking about us — wanted to be honest. Can we talk?' tarzı.",
      ideal_answer:
        "Been thinking about something — want to be honest with you. Can we talk through it?",
    },
    {
      id: "ex.fd37.lr1",
      type: "listen_respond",
      difficulty: 3,
      cefr_band: "B1",
      npc_line: "How are you actually feeling about this?",
      accepted_patterns: [
        "(honestly|truthfully) (.+) (good|complicated|mixed)",
        "(part of me|some of me) (.+)",
        "(been (processing|sitting with|figuring out))",
        "(still working through|day by day)",
        "(grateful (you asked|for the space))",
      ],
      think_seconds: 3,
      tr_hint:
        "Dürüst + olgun duygu paylaşımı. 'Ghost Edildim — Isleme' bağlamında. Türk öğrenci 'fine' der; bunu yapma; SPESİFİK + dürüst.",
      ideal_response:
        "Honestly? Mixed — still processing parts of it. Day by day.",
    },
    {
      id: "ex.fd37.tt1",
      type: "thinking_trap",
      difficulty: 3,
      cefr_band: "B1",
      tr_thought: "Konuşmamız lazım, çok önemli",
      wrong_en: "We must talk, very important.",
      right_en: "I'd love to talk something through with you — is now a good time?",
      why_tr:
        "Türk öğrenci 'konuşmamız lazım + önemli' kalıbını birebir çevirir = emir tonu + 'must' baskı yaratır + 'very important' dramatik. 'Ghost Edildim — Isleme' gibi hassas konuda yumuşatma şart: 'I'd love to talk' (davet) + 'is now a good time' (saygılı zaman kontrolü).",
    },
    {
      id: "ex.fd37.rq1",
      type: "recall_quiz",
      difficulty: 3,
      cefr_band: "B1",
      items: [
        {
          q: "Önemli konuyu açarken en olgun yaklaşım?",
          options: [
            "'We must talk' (emir)",
            "'I'd love to talk — good time?' (davet + saygı)",
            "Sus, bekle",
            "Direkt konuya gir",
          ],
          correct: 1,
          tr_explanation:
            "Davet + zaman kontrolü = saygılı + güvenli alan. Emir = baskı = savunmaya iter.",
        },
        {
          q: "Karşı taraf 'how are you feeling?' sorduğunda?",
          options: [
            "Tek kelime 'fine'",
            "Spesifik + dürüst + 'still processing'",
            "Yalan",
            "Konu değiştir",
          ],
          correct: 1,
          tr_explanation:
            "'Fine' = kapalı kapı. Modern dating: spesifik duygu paylaşımı = bağ kurma.",
        },
        {
          q: "'Day by day' kalıbı:",
          options: [
            "Günden güne (zaman içinde)",
            "Her gün ayrı",
            "Yapısal yanlış",
            "Hızla",
          ],
          correct: 0,
          tr_explanation:
            "'Day by day' = adım adım, zamanla. Zor süreçleri işlerken sağlıklı.",
        },
        {
          q: "'Been sitting with something' anlamı?",
          options: [
            "Bir şeyle oturmak",
            "Bir konuyu içselleştirmek/üzerinde düşünmek",
            "Beklemek",
            "Yapısal yanlış",
          ],
          correct: 1,
          tr_explanation:
            "'Sitting with' = düşünmek, sindirmek (mecaz). Olgun + öz farkındalık.",
        },
        {
          q: "Türk hatası: 'We must talk, very important'",
          options: [
            "Çok formal",
            "Emir + drama tonu = savunmaya iter",
            "Yapısal yanlış",
            "Çok kibar",
          ],
          correct: 1,
          tr_explanation:
            "'Must talk' = emir. 'Very important' = drama. Modern: davet + bağlam.",
        },
      ],
    },
  ],
};

export const flirtDeep_38: BundledLesson = {
  id: "flirt.deep.38",
  skill_id: "flirt.crisis",
  index: 38,
  title: "Sen Ghost Etmistin — O Yazinca",
  description: "Bir ay once sen kayboldun. Ona durust ol — bahane uretme.",
  estimated_minutes: 6,
  exercises: [
    {
      id: "ex.fd38.1",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B2",
      word_or_phrase: "I owe you an explanation",
      tr_translation: "Sana aciklama borcum var (sorumluluk kalibi)",
      example: "I owe you an explanation — and an apology.",
      example_tr: "Sana aciklama borcum var — ve ozur de.",
    },
    {
      id: "ex.fd38.vt2",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "C1",
      word_or_phrase: "took the coward's way",
      tr_translation: "Korkak yolu sectim (sahiplenme kalibi)",
      example: "I took the coward's way — disappearing was wrong.",
      example_tr: "Korkak yolu sectim — kaybolmak yanlisti.",
    },
    {
      id: "ex.fd38.vt3",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "no excuse",
      tr_translation: "Bahane yok (savunma yapmadan)",
      example: "No excuse — I was the one who didn't reply.",
      example_tr: "Bahane yok — cevap vermeyen bendim.",
    },
    {
      id: "ex.fd38.vt4",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "C1",
      word_or_phrase: "deserve better",
      tr_translation: "Daha iyisini hakettin (kabul kalibi)",
      example: "You deserved better than radio silence — I'm sorry.",
      example_tr: "Sessizlikten daha iyisini hakettin — ozur dilerim.",
    },
    {
      id: "ex.fd38.vt5",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "C1",
      word_or_phrase: "ball is in your court",
      tr_translation: "Top sende (karar verme yetki ona)",
      example: "Ball is in your court — I won't reach again.",
      example_tr: "Top sende — bir daha ben ulasmam.",
    },
    {
      id: "ex.fd38.2",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description: "Bir ay once sen ghost ettin. Simdi o yazdi — surekli durust ol.",
      npc_role: "Past date",
      setting: "Text message exchange — they reached back",
      turns: [
        {
          speaker: "npc",
          message: "Hey. Don't know if you'll reply — but I wanted to ask why you disappeared.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(hey |i'?m so glad you wrote )",
            "(i owe you |you deserve ) (an explanation|an apology)",
            "(i was wrong to |it was wrong of me to ) (just disappear)",
            "(no excuses |zero excuses )(but i can give you the real reason)",
            "(i should have |the honest thing would have been to )(been honest at the time)",
            "(can i write |let me write ) (the longer message you deserve)",
          ],
          model_answers: ["You deserve an explanation. No excuses but I'll give you the real reason."],
          hint_tr: "Sorumluluk: 'You deserve an explanation. No excuses but I'll give you the real reason.'",
        },
        {
          speaker: "npc",
          message: "Please. I just want to understand.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i was |honestly i was )(scared of how fast it was getting serious)",
            "(it wasn'?t |it wasn'?t about )(you|anything you did)",
            "(my own |my own stuff )(got in the way)",
            "(i was coming |i had just come )(out of a bad relationship)",
            "(i panicked |i ran when i should have communicated )",
            "(the right thing was |what i should have done was )(told you i needed time)",
          ],
          model_answers: ["I panicked when I should have communicated. It wasn't about you."],
          hint_tr: "Durust: 'I panicked when I should have communicated. It wasn't about you.'",
        },
        {
          speaker: "npc",
          message: "Okay. That's clearer than I expected. Why now though? Why did you reply now?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(you reached out |you wrote first )(— i wasn'?t going to leave it ignored again)",
            "(i didn'?t want |couldn'?t live with ) (doing the same thing twice)",
            "(you deserved |you deserve ) (a response either way)",
            "(i'?ve been |i'?ve done some work )(on this since)",
            "(not avoiding hard conversations |facing the hard ones ) (is the new rule)",
            "(you reaching back |you taking the brave step )(forced me to be braver)",
          ],
          model_answers: ["You reaching out forced me to be braver. You deserve a response."],
          hint_tr: "Olgun: 'You reaching out forced me to be braver. You deserve a response.'",
        },
        {
          speaker: "npc",
          message: "Thank you. I'm not asking to restart anything. Just wanted to hear it from you.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(understood |that'?s fair )",
            "(i didn'?t |i'?m not assuming ) (anything about restarting)",
            "(i hope you |i wish you well genuinely )",
            "(if there'?s anything else |anything else you want to know )(i'?ll be honest)",
            "(thank you for |you gave me a chance to ) (be a better person than i was)",
            "(take care |seriously — take care )",
          ],
          model_answers: ["Understood. Thank you for giving me a chance to be better. Take care."],
          hint_tr: "Kapanis: 'Understood. Thank you for giving me a chance to be better. Take care.'",
        },
        {
          speaker: "npc",
          message: "You too. And — be braver next time, okay?",
        },
      ],
    },
    {
      id: "ex.fd38.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      cefr_band: "B1",
      template: "I want to ___ with you about ___ — ___?",
      slots: [
        { accepted: ["talk honestly", "be open", "share something", "have a real conversation"] },
        { accepted: ["this", "where we're at", "how I'm feeling", "what's going on"] },
        { accepted: ["is now a good time", "can we sit down for a bit", "are you up for it", "would that be okay"] },
      ],
      tr_hint:
        "Önemli konu açma kalıbı: niyet + konu + saygılı zaman sorusu. 'Sen Ghost Etmistin — O Yazinca' bağlamında — Türk öğrenci direkt konuya girer; bu sağlam ilk cümle değil. Yumuşatma + zaman kontrolü = saygılı + güvenli alan.",
      example_filled:
        "I want to talk honestly with you about where we're at — is now a good time?",
    },
    {
      id: "ex.fd38.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      cefr_band: "B1",
      turns: [
        { speaker: "npc", text: "What's on your mind?" },
        { speaker: "user" },
        { speaker: "npc", text: "Okay — I'm listening." },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(been (thinking|sitting) with|wanted to talk about)",
        "(might sound|this might sound) (.+)",
        "(want to (open up|be honest|share))",
        "(no pressure|just|honestly) (.+)",
        "(can we|could we) (.+)",
      ],
      tr_hint:
        "Konuyu açma — yumuşatma + dürüst niyet. 'Sen Ghost Etmistin — O Yazinca' senaryosunda 'Been thinking about us — wanted to be honest. Can we talk?' tarzı.",
      ideal_answer:
        "Been thinking about something — want to be honest with you. Can we talk through it?",
    },
    {
      id: "ex.fd38.lr1",
      type: "listen_respond",
      difficulty: 3,
      cefr_band: "B1",
      npc_line: "How are you actually feeling about this?",
      accepted_patterns: [
        "(honestly|truthfully) (.+) (good|complicated|mixed)",
        "(part of me|some of me) (.+)",
        "(been (processing|sitting with|figuring out))",
        "(still working through|day by day)",
        "(grateful (you asked|for the space))",
      ],
      think_seconds: 3,
      tr_hint:
        "Dürüst + olgun duygu paylaşımı. 'Sen Ghost Etmistin — O Yazinca' bağlamında. Türk öğrenci 'fine' der; bunu yapma; SPESİFİK + dürüst.",
      ideal_response:
        "Honestly? Mixed — still processing parts of it. Day by day.",
    },
    {
      id: "ex.fd38.tt1",
      type: "thinking_trap",
      difficulty: 3,
      cefr_band: "B1",
      tr_thought: "Konuşmamız lazım, çok önemli",
      wrong_en: "We must talk, very important.",
      right_en: "I'd love to talk something through with you — is now a good time?",
      why_tr:
        "Türk öğrenci 'konuşmamız lazım + önemli' kalıbını birebir çevirir = emir tonu + 'must' baskı yaratır + 'very important' dramatik. 'Sen Ghost Etmistin — O Yazinca' gibi hassas konuda yumuşatma şart: 'I'd love to talk' (davet) + 'is now a good time' (saygılı zaman kontrolü).",
    },
    {
      id: "ex.fd38.rq1",
      type: "recall_quiz",
      difficulty: 3,
      cefr_band: "B1",
      items: [
        {
          q: "Önemli konuyu açarken en olgun yaklaşım?",
          options: [
            "'We must talk' (emir)",
            "'I'd love to talk — good time?' (davet + saygı)",
            "Sus, bekle",
            "Direkt konuya gir",
          ],
          correct: 1,
          tr_explanation:
            "Davet + zaman kontrolü = saygılı + güvenli alan. Emir = baskı = savunmaya iter.",
        },
        {
          q: "Karşı taraf 'how are you feeling?' sorduğunda?",
          options: [
            "Tek kelime 'fine'",
            "Spesifik + dürüst + 'still processing'",
            "Yalan",
            "Konu değiştir",
          ],
          correct: 1,
          tr_explanation:
            "'Fine' = kapalı kapı. Modern dating: spesifik duygu paylaşımı = bağ kurma.",
        },
        {
          q: "'Day by day' kalıbı:",
          options: [
            "Günden güne (zaman içinde)",
            "Her gün ayrı",
            "Yapısal yanlış",
            "Hızla",
          ],
          correct: 0,
          tr_explanation:
            "'Day by day' = adım adım, zamanla. Zor süreçleri işlerken sağlıklı.",
        },
        {
          q: "'Been sitting with something' anlamı?",
          options: [
            "Bir şeyle oturmak",
            "Bir konuyu içselleştirmek/üzerinde düşünmek",
            "Beklemek",
            "Yapısal yanlış",
          ],
          correct: 1,
          tr_explanation:
            "'Sitting with' = düşünmek, sindirmek (mecaz). Olgun + öz farkındalık.",
        },
        {
          q: "Türk hatası: 'We must talk, very important'",
          options: [
            "Çok formal",
            "Emir + drama tonu = savunmaya iter",
            "Yapısal yanlış",
            "Çok kibar",
          ],
          correct: 1,
          tr_explanation:
            "'Must talk' = emir. 'Very important' = drama. Modern: davet + bağlam.",
        },
      ],
    },
  ],
};

export const flirtDeep_39: BundledLesson = {
  id: "flirt.deep.39",
  skill_id: "flirt.crisis",
  index: 39,
  title: "Aldatma Aciga Cikti — Yuzlesme",
  description: "Aldatildigini ogrendin. Saatler sonra evde yuzlestiriyorsun.",
  estimated_minutes: 8,
  exercises: [
    {
      id: "ex.fd39.1",
      type: "vocab_tile",
      difficulty: 5,
      cefr_band: "C1",
      word_or_phrase: "non-negotiable",
      tr_translation: "Pazarlik konusu degil (kirmizi cizgi)",
      example: "Honesty is non-negotiable for me — full stop.",
      example_tr: "Durustluk benim icin pazarlik konusu degil — nokta.",
    },
    {
      id: "ex.fd39.vt2",
      type: "vocab_tile",
      difficulty: 5,
      cefr_band: "C1",
      word_or_phrase: "leave the flat tonight",
      tr_translation: "Evi bu gece terk et (kararli sinir)",
      example: "I need you to leave the flat tonight — that's not a discussion.",
      example_tr: "Evi bu gece terk etmen lazim — bu tartisma konusu degil.",
    },
    {
      id: "ex.fd39.vt3",
      type: "vocab_tile",
      difficulty: 5,
      cefr_band: "C1",
      word_or_phrase: "I'm not deciding tonight",
      tr_translation: "Bu gece karar vermiyorum (zaman kazanma)",
      example: "I'm not deciding tonight — I'm collecting information.",
      example_tr: "Bu gece karar vermiyorum — bilgi topluyorum.",
    },
    {
      id: "ex.fd39.vt4",
      type: "vocab_tile",
      difficulty: 5,
      cefr_band: "C1",
      word_or_phrase: "weeks of decisions",
      tr_translation: "Haftalarca verdigin kararlar (tek hata degil sinyali)",
      example: "It wasn't a single mistake — it was weeks of decisions.",
      example_tr: "Tek bir hata degildi — haftalarca verdigin kararlardi.",
    },
    {
      id: "ex.fd39.vt5",
      type: "vocab_tile",
      difficulty: 5,
      cefr_band: "C1",
      word_or_phrase: "survival mode",
      tr_translation: "Hayatta kalma modu (kriz duygusu)",
      example: "I'm not calm — I'm in survival mode.",
      example_tr: "Sakin degilim — hayatta kalma modundayim.",
    },
    {
      id: "ex.fd39.2",
      type: "roleplay_chat",
      difficulty: 6,
      scenario_description: "Aldatildigini ogrendin (mesaj/foto). Evde duzgun, kontrollu yuzlesme.",
      npc_role: "Cheating partner",
      setting: "At home — confrontation about cheating",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(sit down |sit )",
            "(i know |i know about \\w+)",
            "(don'?t |please don'?t ) (lie to me anymore)",
            "(i have |i have proof — )(don'?t insult me)",
            "(this is the |this is your one ) (chance to be honest)",
            "(my voice is |i'?m calm now but ) (calm because i need it to be)",
          ],
          model_answers: ["Sit down. I know about [name]. Don't lie to me anymore."],
          hint_tr: "Kontrollu giris: 'Sit down. I know about [name]. Don't lie to me anymore.'",
        },
        {
          speaker: "npc",
          message: "How long have you known?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(three hours |since lunch )",
            "(does it matter |i don'?t think duration matters )",
            "(long enough |long enough to think )",
            "(long enough to |enough to have decided )(decide)",
            "(short enough |new enough )(that i'?m not in calm mode i'?m in survival mode)",
            "(answer my questions |i'?m asking the questions tonight)",
          ],
          model_answers: ["Three hours. I'm asking the questions tonight."],
          hint_tr: "Cevap + kontrol: 'Three hours. I'm asking the questions tonight.'",
        },
        {
          speaker: "npc",
          message: "I'm so sorry. It was a mistake — please, can we work through this?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(don'?t |stop ) (saying that word)",
            "(it wasn'?t |this wasn'?t ) (a single mistake)",
            "(it was |it took ) (weeks of decisions)",
            "(honesty is |trust is ) non.?negotiable for me",
            "(i'?m not deciding |i'?m not making decisions ) tonight",
            "(this is information |i'?m collecting information tonight — that'?s all )",
          ],
          model_answers: ["Honesty is non-negotiable. I'm not deciding anything tonight."],
          hint_tr: "Sinir net: 'Honesty is non-negotiable. I'm not deciding anything tonight.'",
        },
        {
          speaker: "npc",
          message: "What do you need from me right now?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(you to |i need you to ) (leave the flat tonight)",
            "(go to a |go to a hotel|a friend )",
            "(don'?t text |no texts ) (for forty.?eight hours)",
            "(give me |i need ) (silence to think)",
            "(do not |do not show up unannounced )",
            "(when i'?m ready |i'?ll reach out when i'?m ready )",
          ],
          model_answers: ["Leave the flat tonight. No texts for 48 hours. I'll reach out."],
          hint_tr: "Net ihtiyac: 'Leave the flat tonight. No texts for 48 hours. I'll reach out.'",
        },
        {
          speaker: "npc",
          message: "Okay. Anything you want me to bring back, take, or — ?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(just |just go )",
            "(take what you need |take a bag and go )",
            "(we'?ll deal with |the rest can wait )",
            "(stop |stop trying to be helpful )",
            "(close the door |please close the door behind you )",
            "(now |go now )",
          ],
          model_answers: ["Just go. Take what you need. Close the door behind you."],
          hint_tr: "Kapanis: 'Just go. Take what you need. Close the door behind you.'",
        },
        {
          speaker: "npc",
          message: "Okay. I'll go. I'm so sorry — I'll wait until you contact me.",
        },
      ],
    },
    {
      id: "ex.fd39.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      cefr_band: "B1",
      template: "I want to ___ with you about ___ — ___?",
      slots: [
        { accepted: ["talk honestly", "be open", "share something", "have a real conversation"] },
        { accepted: ["this", "where we're at", "how I'm feeling", "what's going on"] },
        { accepted: ["is now a good time", "can we sit down for a bit", "are you up for it", "would that be okay"] },
      ],
      tr_hint:
        "Önemli konu açma kalıbı: niyet + konu + saygılı zaman sorusu. 'Aldatma Aciga Cikti — Yuzlesme' bağlamında — Türk öğrenci direkt konuya girer; bu sağlam ilk cümle değil. Yumuşatma + zaman kontrolü = saygılı + güvenli alan.",
      example_filled:
        "I want to talk honestly with you about where we're at — is now a good time?",
    },
    {
      id: "ex.fd39.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      cefr_band: "B1",
      turns: [
        { speaker: "npc", text: "What's on your mind?" },
        { speaker: "user" },
        { speaker: "npc", text: "Okay — I'm listening." },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(been (thinking|sitting) with|wanted to talk about)",
        "(might sound|this might sound) (.+)",
        "(want to (open up|be honest|share))",
        "(no pressure|just|honestly) (.+)",
        "(can we|could we) (.+)",
      ],
      tr_hint:
        "Konuyu açma — yumuşatma + dürüst niyet. 'Aldatma Aciga Cikti — Yuzlesme' senaryosunda 'Been thinking about us — wanted to be honest. Can we talk?' tarzı.",
      ideal_answer:
        "Been thinking about something — want to be honest with you. Can we talk through it?",
    },
    {
      id: "ex.fd39.lr1",
      type: "listen_respond",
      difficulty: 3,
      cefr_band: "B1",
      npc_line: "How are you actually feeling about this?",
      accepted_patterns: [
        "(honestly|truthfully) (.+) (good|complicated|mixed)",
        "(part of me|some of me) (.+)",
        "(been (processing|sitting with|figuring out))",
        "(still working through|day by day)",
        "(grateful (you asked|for the space))",
      ],
      think_seconds: 3,
      tr_hint:
        "Dürüst + olgun duygu paylaşımı. 'Aldatma Aciga Cikti — Yuzlesme' bağlamında. Türk öğrenci 'fine' der; bunu yapma; SPESİFİK + dürüst.",
      ideal_response:
        "Honestly? Mixed — still processing parts of it. Day by day.",
    },
    {
      id: "ex.fd39.tt1",
      type: "thinking_trap",
      difficulty: 3,
      cefr_band: "B1",
      tr_thought: "Konuşmamız lazım, çok önemli",
      wrong_en: "We must talk, very important.",
      right_en: "I'd love to talk something through with you — is now a good time?",
      why_tr:
        "Türk öğrenci 'konuşmamız lazım + önemli' kalıbını birebir çevirir = emir tonu + 'must' baskı yaratır + 'very important' dramatik. 'Aldatma Aciga Cikti — Yuzlesme' gibi hassas konuda yumuşatma şart: 'I'd love to talk' (davet) + 'is now a good time' (saygılı zaman kontrolü).",
    },
    {
      id: "ex.fd39.rq1",
      type: "recall_quiz",
      difficulty: 3,
      cefr_band: "B1",
      items: [
        {
          q: "Önemli konuyu açarken en olgun yaklaşım?",
          options: [
            "'We must talk' (emir)",
            "'I'd love to talk — good time?' (davet + saygı)",
            "Sus, bekle",
            "Direkt konuya gir",
          ],
          correct: 1,
          tr_explanation:
            "Davet + zaman kontrolü = saygılı + güvenli alan. Emir = baskı = savunmaya iter.",
        },
        {
          q: "Karşı taraf 'how are you feeling?' sorduğunda?",
          options: [
            "Tek kelime 'fine'",
            "Spesifik + dürüst + 'still processing'",
            "Yalan",
            "Konu değiştir",
          ],
          correct: 1,
          tr_explanation:
            "'Fine' = kapalı kapı. Modern dating: spesifik duygu paylaşımı = bağ kurma.",
        },
        {
          q: "'Day by day' kalıbı:",
          options: [
            "Günden güne (zaman içinde)",
            "Her gün ayrı",
            "Yapısal yanlış",
            "Hızla",
          ],
          correct: 0,
          tr_explanation:
            "'Day by day' = adım adım, zamanla. Zor süreçleri işlerken sağlıklı.",
        },
        {
          q: "'Been sitting with something' anlamı?",
          options: [
            "Bir şeyle oturmak",
            "Bir konuyu içselleştirmek/üzerinde düşünmek",
            "Beklemek",
            "Yapısal yanlış",
          ],
          correct: 1,
          tr_explanation:
            "'Sitting with' = düşünmek, sindirmek (mecaz). Olgun + öz farkındalık.",
        },
        {
          q: "Türk hatası: 'We must talk, very important'",
          options: [
            "Çok formal",
            "Emir + drama tonu = savunmaya iter",
            "Yapısal yanlış",
            "Çok kibar",
          ],
          correct: 1,
          tr_explanation:
            "'Must talk' = emir. 'Very important' = drama. Modern: davet + bağlam.",
        },
      ],
    },
  ],
};

export const flirtDeep_40: BundledLesson = {
  id: "flirt.deep.40",
  skill_id: "flirt.crisis",
  index: 40,
  title: "Karsilikli Ayrilik — Olgun Anlasma",
  description: "Ikiniz de ayni anda 'bu yurumuyor'a vardiniz. Ortak karar verisi.",
  estimated_minutes: 6,
  exercises: [
    {
      id: "ex.fd40.1",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "amicable",
      tr_translation: "Dostane (ayrilik kategorisi)",
      example: "It was amicable — as amicable as breakups get.",
      example_tr: "Dostane bir ayrilik oldu — ayriliklarin dostane olabilecegi kadar.",
    },
    {
      id: "ex.fd40.vt2",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "C1",
      word_or_phrase: "grown into different people",
      tr_translation: "Farkli insanlara donustuk (drama yok ayrilik)",
      example: "We've grown into different people — it's nobody's fault.",
      example_tr: "Farkli insanlara donustuk — kimsenin sucu degil.",
    },
    {
      id: "ex.fd40.vt3",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "C1",
      word_or_phrase: "roommate energy",
      tr_translation: "Ev arkadasi enerjisi (romantik bitis sinyali)",
      example: "We've had roommate energy for months — it's time.",
      example_tr: "Aylardir ev arkadasi enerjisindeyiz — vakit geldi.",
    },
    {
      id: "ex.fd40.vt4",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "C1",
      word_or_phrase: "no villain story",
      tr_translation: "Suclu hikayesi yok (suc atmadan ayrilik)",
      example: "There's no villain story here — just two people changing.",
      example_tr: "Burada suclu hikayesi yok — sadece degisen iki insan.",
    },
    {
      id: "ex.fd40.vt5",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "stay friends eventually",
      tr_translation: "Zamanla arkadas kalmak (geleceğe ertelenmis ihtimal)",
      example: "Stay friends eventually — but not for at least six months.",
      example_tr: "Zamanla arkadas kalmak — ama en az alti ay sonra.",
    },
    {
      id: "ex.fd40.2",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description: "Ikiniz de ayni geceyi yasiyorsunuz. Saygiyla nihayetlenme.",
      npc_role: "Partner",
      setting: "Calm evening — mutual decision",
      turns: [
        {
          speaker: "npc",
          message: "I think we both know what we need to talk about.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yeah |i think we do )",
            "(it'?s been |this has been coming ) (for a while)",
            "(i'?m glad |grateful ) (we'?re doing this together)",
            "(neither of us is |this is mutual )",
            "(let'?s say |let'?s be honest ) it out loud",
            "(do you want to |should i start )",
          ],
          model_answers: ["Yeah — this has been coming. Grateful we're doing this together."],
          hint_tr: "Acik kabul: 'Yeah — this has been coming. Grateful we're doing this together.'",
        },
        {
          speaker: "npc",
          message: "I'll start. I think we've grown into different people and it's nobody's fault.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i agree |you'?re right )",
            "(nobody'?s the |it'?s not a villain story )",
            "(we loved each other |we did love each other ) (and we still do)",
            "(it'?s just |the thing is — ) (not romantic anymore)",
            "(we became roommates |it'?s been roommate energy ) (for months)",
            "(this is the |this is the kindest version of an ending )",
          ],
          model_answers: ["You're right. We did love each other. It became roommate energy."],
          hint_tr: "Onayla: 'You're right. We did love each other. It became roommate energy.'",
        },
        {
          speaker: "npc",
          message: "So how do we do this? Logistics-wise.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(let'?s be |i want us to be ) (practical)",
            "(thirty days |a month ) (to find separate places)",
            "(furniture we split |split furniture by who bought )",
            "(no fights |no resentment ) (over things)",
            "(i'?ll take |you take ) (the flat — i'?ll move)",
            "(let'?s set |should we set ) (a moveout date now)",
          ],
          model_answers: ["Thirty days to find places. No fights over things."],
          hint_tr: "Lojistik: 'Thirty days to find places. No fights over things.'",
        },
        {
          speaker: "npc",
          message: "Do we want to stay friends? Honestly — what do you want?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(eventually yes |yes — eventually )",
            "(not right away |not for at least six months )",
            "(we need |both of us need ) (real distance first)",
            "(forcing friendship |trying to be friends ) (now would be lying)",
            "(in a year |a year from now ) (let'?s check in)",
            "(i want you in |i want us in each other'?s lives — long term )",
          ],
          model_answers: ["Eventually yes. Six months distance first. Check in in a year."],
          hint_tr: "Net + esnek: 'Eventually yes. Six months distance first. Check in in a year.'",
        },
        {
          speaker: "npc",
          message: "That's wise. Okay. I love you in the way that's left to love you.",
        },
      ],
    },
    {
      id: "ex.fd40.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      cefr_band: "B1",
      template: "I want to ___ with you about ___ — ___?",
      slots: [
        { accepted: ["talk honestly", "be open", "share something", "have a real conversation"] },
        { accepted: ["this", "where we're at", "how I'm feeling", "what's going on"] },
        { accepted: ["is now a good time", "can we sit down for a bit", "are you up for it", "would that be okay"] },
      ],
      tr_hint:
        "Önemli konu açma kalıbı: niyet + konu + saygılı zaman sorusu. 'Karsilikli Ayrilik — Olgun Anlasma' bağlamında — Türk öğrenci direkt konuya girer; bu sağlam ilk cümle değil. Yumuşatma + zaman kontrolü = saygılı + güvenli alan.",
      example_filled:
        "I want to talk honestly with you about where we're at — is now a good time?",
    },
    {
      id: "ex.fd40.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      cefr_band: "B1",
      turns: [
        { speaker: "npc", text: "What's on your mind?" },
        { speaker: "user" },
        { speaker: "npc", text: "Okay — I'm listening." },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(been (thinking|sitting) with|wanted to talk about)",
        "(might sound|this might sound) (.+)",
        "(want to (open up|be honest|share))",
        "(no pressure|just|honestly) (.+)",
        "(can we|could we) (.+)",
      ],
      tr_hint:
        "Konuyu açma — yumuşatma + dürüst niyet. 'Karsilikli Ayrilik — Olgun Anlasma' senaryosunda 'Been thinking about us — wanted to be honest. Can we talk?' tarzı.",
      ideal_answer:
        "Been thinking about something — want to be honest with you. Can we talk through it?",
    },
    {
      id: "ex.fd40.lr1",
      type: "listen_respond",
      difficulty: 3,
      cefr_band: "B1",
      npc_line: "How are you actually feeling about this?",
      accepted_patterns: [
        "(honestly|truthfully) (.+) (good|complicated|mixed)",
        "(part of me|some of me) (.+)",
        "(been (processing|sitting with|figuring out))",
        "(still working through|day by day)",
        "(grateful (you asked|for the space))",
      ],
      think_seconds: 3,
      tr_hint:
        "Dürüst + olgun duygu paylaşımı. 'Karsilikli Ayrilik — Olgun Anlasma' bağlamında. Türk öğrenci 'fine' der; bunu yapma; SPESİFİK + dürüst.",
      ideal_response:
        "Honestly? Mixed — still processing parts of it. Day by day.",
    },
    {
      id: "ex.fd40.tt1",
      type: "thinking_trap",
      difficulty: 3,
      cefr_band: "B1",
      tr_thought: "Konuşmamız lazım, çok önemli",
      wrong_en: "We must talk, very important.",
      right_en: "I'd love to talk something through with you — is now a good time?",
      why_tr:
        "Türk öğrenci 'konuşmamız lazım + önemli' kalıbını birebir çevirir = emir tonu + 'must' baskı yaratır + 'very important' dramatik. 'Karsilikli Ayrilik — Olgun Anlasma' gibi hassas konuda yumuşatma şart: 'I'd love to talk' (davet) + 'is now a good time' (saygılı zaman kontrolü).",
    },
    {
      id: "ex.fd40.rq1",
      type: "recall_quiz",
      difficulty: 3,
      cefr_band: "B1",
      items: [
        {
          q: "Önemli konuyu açarken en olgun yaklaşım?",
          options: [
            "'We must talk' (emir)",
            "'I'd love to talk — good time?' (davet + saygı)",
            "Sus, bekle",
            "Direkt konuya gir",
          ],
          correct: 1,
          tr_explanation:
            "Davet + zaman kontrolü = saygılı + güvenli alan. Emir = baskı = savunmaya iter.",
        },
        {
          q: "Karşı taraf 'how are you feeling?' sorduğunda?",
          options: [
            "Tek kelime 'fine'",
            "Spesifik + dürüst + 'still processing'",
            "Yalan",
            "Konu değiştir",
          ],
          correct: 1,
          tr_explanation:
            "'Fine' = kapalı kapı. Modern dating: spesifik duygu paylaşımı = bağ kurma.",
        },
        {
          q: "'Day by day' kalıbı:",
          options: [
            "Günden güne (zaman içinde)",
            "Her gün ayrı",
            "Yapısal yanlış",
            "Hızla",
          ],
          correct: 0,
          tr_explanation:
            "'Day by day' = adım adım, zamanla. Zor süreçleri işlerken sağlıklı.",
        },
        {
          q: "'Been sitting with something' anlamı?",
          options: [
            "Bir şeyle oturmak",
            "Bir konuyu içselleştirmek/üzerinde düşünmek",
            "Beklemek",
            "Yapısal yanlış",
          ],
          correct: 1,
          tr_explanation:
            "'Sitting with' = düşünmek, sindirmek (mecaz). Olgun + öz farkındalık.",
        },
        {
          q: "Türk hatası: 'We must talk, very important'",
          options: [
            "Çok formal",
            "Emir + drama tonu = savunmaya iter",
            "Yapısal yanlış",
            "Çok kibar",
          ],
          correct: 1,
          tr_explanation:
            "'Must talk' = emir. 'Very important' = drama. Modern: davet + bağlam.",
        },
      ],
    },
  ],
};

// ============================================================
// PHASE 5 — RECOVERY / POST (41-50) — skill: flirt.recovery
// ============================================================

export const flirtDeep_41: BundledLesson = {
  id: "flirt.deep.41",
  skill_id: "flirt.recovery",
  index: 41,
  title: "Yeniden Dating'e Donus — Hazirim mi?",
  description: "Ayriliktan dort ay sonra. Hazir misin? Arkadasinla acik konus.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.fd41.1",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B2",
      word_or_phrase: "putting myself out there",
      tr_translation: "Kendimi acmak, dating'e geri donmek",
      example: "I think I'm ready to put myself out there again.",
      example_tr: "Sanirim kendimi tekrar acmaya hazirim.",
    },
    {
      id: "ex.fd41.vt2",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "C1",
      word_or_phrase: "without flinching",
      tr_translation: "Iclini cekmeden (gercek iyilesme sinyali)",
      example: "I'll know I'm ready when I can think of my ex without flinching.",
      example_tr: "Eksini iclini cekmeden dusunebildigim zaman hazir olacagim.",
    },
    {
      id: "ex.fd41.vt3",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "not date for loneliness",
      tr_translation: "Yalnizliktan dating yapmamak (saglikli kural)",
      example: "My rule — don't date for loneliness.",
      example_tr: "Kuralim — yalnizliktan dating yapmamak.",
    },
    {
      id: "ex.fd41.vt4",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "C1",
      word_or_phrase: "stop comparing",
      tr_translation: "Karsilastirmayi birakmak (iyilesme sinyali)",
      example: "When I stop comparing every match to my ex.",
      example_tr: "Her eslesmeyi eksimle karsilastirmayi biraktigimda.",
    },
    {
      id: "ex.fd41.vt5",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "curiosity, not loneliness",
      tr_translation: "Merak, yalnizlik degil (motivasyon ayrimi)",
      example: "Dating from curiosity, not loneliness — that's the move.",
      example_tr: "Merakla dating, yalnizlikla degil — dogru olan bu.",
    },
    {
      id: "ex.fd41.2",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description: "Arkadasinla kahvede. 'Ne zaman tekrar tanisacaksin' diye sordu.",
      npc_role: "Friend",
      setting: "Coffee with friend — checking in on dating",
      turns: [
        {
          speaker: "npc",
          message: "So — are you thinking about dating again? It's been a while.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thinking about it |it'?s crossed my mind )",
            "(some days |on good days ) i feel (ready)",
            "(other days |on bad days ) (i panic at the thought)",
            "(honestly |truthfully ) (no rush)",
            "(want to be |i want to actually be ready) (not just bored)",
            "(maybe in |i think in ) (a month or two)",
          ],
          model_answers: ["Crossed my mind. Some days ready, some days panic."],
          hint_tr: "Karma cevap: 'Crossed my mind. Some days ready, some days panic.'",
        },
        {
          speaker: "npc",
          message: "How do you know when you're ready though?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i'?m still |i don'?t know — )(figuring that out)",
            "(when i can |when i can think of my ex )(without flinching)",
            "(when i'?m not |when i stop ) (comparing)",
            "(when it'?s |when wanting to date is ) (curiosity, not loneliness)",
            "(my therapist says |the rule i set ) (don'?t date for loneliness)",
            "(i'?ll know |i'?ll feel it )(when it'?s right)",
          ],
          model_answers: ["When I can think of my ex without flinching. When it's curiosity, not loneliness."],
          hint_tr: "Olgun: 'When I can think of my ex without flinching. When it's curiosity, not loneliness.'",
        },
        {
          speaker: "npc",
          message: "Smart. Have you even re-downloaded any apps?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(downloaded |re.?downloaded ) (one)",
            "(deleted it |deleted within a day )",
            "(it felt too |felt too soon )",
            "(maybe |i'?ll try again next month )",
            "(i'?d rather meet someone |honestly i'?d prefer to meet someone )(through people)",
            "(apps feel like |the app energy is ) (a job interview)",
          ],
          model_answers: ["Downloaded one — deleted within a day. Too soon."],
          hint_tr: "Durust: 'Downloaded one — deleted within a day. Too soon.'",
        },
        {
          speaker: "npc",
          message: "Want me to ask around? See if anyone's looking?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(soft yes |sure, soft yes )",
            "(no pressure on |no urgency on me )",
            "(low key |no setups yet|low.?key only )",
            "(just |maybe — just )(keep your ears open)",
            "(can'?t hurt to |it can'?t hurt )(have you in my corner)",
            "(i appreciate |grateful you'?re looking out )",
          ],
          model_answers: ["Soft yes — no urgency. Just keep your ears open."],
          hint_tr: "Yumusak evet: 'Soft yes — no urgency. Just keep your ears open.'",
        },
        {
          speaker: "npc",
          message: "Got it. Low key scanning. No setups till you give the green light.",
        },
      ],
    },
    {
      id: "ex.fd41.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      cefr_band: "B1",
      template: "I want to ___ with you about ___ — ___?",
      slots: [
        { accepted: ["talk honestly", "be open", "share something", "have a real conversation"] },
        { accepted: ["this", "where we're at", "how I'm feeling", "what's going on"] },
        { accepted: ["is now a good time", "can we sit down for a bit", "are you up for it", "would that be okay"] },
      ],
      tr_hint:
        "Önemli konu açma kalıbı: niyet + konu + saygılı zaman sorusu. 'Yeniden Dating'e Donus — Hazirim mi?' bağlamında — Türk öğrenci direkt konuya girer; bu sağlam ilk cümle değil. Yumuşatma + zaman kontrolü = saygılı + güvenli alan.",
      example_filled:
        "I want to talk honestly with you about where we're at — is now a good time?",
    },
    {
      id: "ex.fd41.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      cefr_band: "B1",
      turns: [
        { speaker: "npc", text: "What's on your mind?" },
        { speaker: "user" },
        { speaker: "npc", text: "Okay — I'm listening." },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(been (thinking|sitting) with|wanted to talk about)",
        "(might sound|this might sound) (.+)",
        "(want to (open up|be honest|share))",
        "(no pressure|just|honestly) (.+)",
        "(can we|could we) (.+)",
      ],
      tr_hint:
        "Konuyu açma — yumuşatma + dürüst niyet. 'Yeniden Dating'e Donus — Hazirim mi?' senaryosunda 'Been thinking about us — wanted to be honest. Can we talk?' tarzı.",
      ideal_answer:
        "Been thinking about something — want to be honest with you. Can we talk through it?",
    },
    {
      id: "ex.fd41.lr1",
      type: "listen_respond",
      difficulty: 3,
      cefr_band: "B1",
      npc_line: "How are you actually feeling about this?",
      accepted_patterns: [
        "(honestly|truthfully) (.+) (good|complicated|mixed)",
        "(part of me|some of me) (.+)",
        "(been (processing|sitting with|figuring out))",
        "(still working through|day by day)",
        "(grateful (you asked|for the space))",
      ],
      think_seconds: 3,
      tr_hint:
        "Dürüst + olgun duygu paylaşımı. 'Yeniden Dating'e Donus — Hazirim mi?' bağlamında. Türk öğrenci 'fine' der; bunu yapma; SPESİFİK + dürüst.",
      ideal_response:
        "Honestly? Mixed — still processing parts of it. Day by day.",
    },
    {
      id: "ex.fd41.tt1",
      type: "thinking_trap",
      difficulty: 3,
      cefr_band: "B1",
      tr_thought: "Konuşmamız lazım, çok önemli",
      wrong_en: "We must talk, very important.",
      right_en: "I'd love to talk something through with you — is now a good time?",
      why_tr:
        "Türk öğrenci 'konuşmamız lazım + önemli' kalıbını birebir çevirir = emir tonu + 'must' baskı yaratır + 'very important' dramatik. 'Yeniden Dating'e Donus — Hazirim mi?' gibi hassas konuda yumuşatma şart: 'I'd love to talk' (davet) + 'is now a good time' (saygılı zaman kontrolü).",
    },
    {
      id: "ex.fd41.rq1",
      type: "recall_quiz",
      difficulty: 3,
      cefr_band: "B1",
      items: [
        {
          q: "Önemli konuyu açarken en olgun yaklaşım?",
          options: [
            "'We must talk' (emir)",
            "'I'd love to talk — good time?' (davet + saygı)",
            "Sus, bekle",
            "Direkt konuya gir",
          ],
          correct: 1,
          tr_explanation:
            "Davet + zaman kontrolü = saygılı + güvenli alan. Emir = baskı = savunmaya iter.",
        },
        {
          q: "Karşı taraf 'how are you feeling?' sorduğunda?",
          options: [
            "Tek kelime 'fine'",
            "Spesifik + dürüst + 'still processing'",
            "Yalan",
            "Konu değiştir",
          ],
          correct: 1,
          tr_explanation:
            "'Fine' = kapalı kapı. Modern dating: spesifik duygu paylaşımı = bağ kurma.",
        },
        {
          q: "'Day by day' kalıbı:",
          options: [
            "Günden güne (zaman içinde)",
            "Her gün ayrı",
            "Yapısal yanlış",
            "Hızla",
          ],
          correct: 0,
          tr_explanation:
            "'Day by day' = adım adım, zamanla. Zor süreçleri işlerken sağlıklı.",
        },
        {
          q: "'Been sitting with something' anlamı?",
          options: [
            "Bir şeyle oturmak",
            "Bir konuyu içselleştirmek/üzerinde düşünmek",
            "Beklemek",
            "Yapısal yanlış",
          ],
          correct: 1,
          tr_explanation:
            "'Sitting with' = düşünmek, sindirmek (mecaz). Olgun + öz farkındalık.",
        },
        {
          q: "Türk hatası: 'We must talk, very important'",
          options: [
            "Çok formal",
            "Emir + drama tonu = savunmaya iter",
            "Yapısal yanlış",
            "Çok kibar",
          ],
          correct: 1,
          tr_explanation:
            "'Must talk' = emir. 'Very important' = drama. Modern: davet + bağlam.",
        },
      ],
    },
  ],
};

export const flirtDeep_42: BundledLesson = {
  id: "flirt.deep.42",
  skill_id: "flirt.recovery",
  index: 42,
  title: "dating app'i Yeniden Indirdim — Tereddut",
  description: "App geri indirdin. Bir arkadasinla 'gercekten istiyor muyum' diye konus.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.fd42.1",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B2",
      word_or_phrase: "the apps",
      tr_translation: "Uygulamalar (dating app/dating app/dating app — toplu sohbet)",
      example: "Back on the apps — I forgot how exhausting they are.",
      example_tr: "Tekrar uygulamalardayim — ne kadar yorucu olduklarini unutmusum.",
    },
    {
      id: "ex.fd42.vt2",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "doom-swipe",
      tr_translation: "Sonsuz kaydirma (umutsuzca dating app)",
      example: "Don't doom-swipe at midnight — set a timer.",
      example_tr: "Gece yarisi sonsuzca kaydirma — kronometre kur.",
    },
    {
      id: "ex.fd42.vt3",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "C1",
      word_or_phrase: "algorithmic shopping",
      tr_translation: "Algoritmik alisveris (dating app modern elestiri)",
      example: "Swiping feels like algorithmic shopping for people.",
      example_tr: "Kaydirma sanki insan icin algoritmik alisveris gibi.",
    },
    {
      id: "ex.fd42.vt4",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B2",
      word_or_phrase: "the same six photos",
      tr_translation: "Ayni alti foto (dating app sablonu sikayet)",
      example: "Everyone has the same six photos — gym, dog, mountain.",
      example_tr: "Herkes ayni alti fotograf var — spor salonu, kopek, dag.",
    },
    {
      id: "ex.fd42.vt5",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B2",
      word_or_phrase: "part-time job",
      tr_translation: "Yari zamanli is (dating app yorgunlugu kalibi)",
      example: "Dating apps are basically a part-time job.",
      example_tr: "Dating uygulamalari ozunde yari zamanli is.",
    },
    {
      id: "ex.fd42.2",
      type: "roleplay_chat",
      difficulty: 3,
      scenario_description: "Arkadasinla WhatsApp. dating app'i yeniden indirdin, ikilemi paylasiyorsun.",
      npc_role: "Friend",
      setting: "WhatsApp conversation",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(i did it |i caved )",
            "(re.?downloaded |back on ) (tinder|the apps)",
            "(immediately regretting |questioning every choice )",
            "(why do i feel |why does this feel ) (like a chore)",
            "(everyone looks |the bios are )(the same)",
            "(send help |emotional support please )",
          ],
          model_answers: ["I caved — re-downloaded dating app. Immediately regretting."],
          hint_tr: "Sen baslat: 'I caved — re-downloaded dating app. Immediately regretting.'",
        },
        {
          speaker: "npc",
          message: "Hahaha — first day energy. What's making it weird?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(everyone'?s a |they all have ) (the same six photos)",
            "(my bio reads like |i can'?t write a bio that doesn'?t feel ) (a resume)",
            "(i forgot how |it'?s a part.?time job )",
            "(i keep |i'?ve already started )(comparing to my ex)",
            "(swiping feels like |it feels like ) (algorithmic shopping)",
            "(part of me wants |i wonder if i should ) (to delete it again)",
          ],
          model_answers: ["Everyone has the same six photos. Feels like algorithmic shopping."],
          hint_tr: "Acik dert: 'Everyone has the same six photos. Feels like algorithmic shopping.'",
        },
        {
          speaker: "npc",
          message: "Don't compare every match to your ex. That's the first rule.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(easier said than |easier to say than to do )",
            "(i'?ll try |okay i'?ll try )",
            "(catch me when |call me out when ) (i do it)",
            "(why is everyone |why does everyone look like a version of my ex )",
            "(i need a |my brain needs a ) (cleanse)",
            "(noted |rule one accepted )",
          ],
          model_answers: ["Easier said than done. Catch me when I do it."],
          hint_tr: "Kabul: 'Easier said than done. Catch me when I do it.'",
        },
        {
          speaker: "npc",
          message: "Set yourself a limit — like, ten minutes a day. Don't doom-swipe.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(good rule |fair rule )",
            "(ten minutes feels |that'?s strict but probably right )",
            "(deal — |fine — ) (timer set)",
            "(if i match with three |my goal is three good matches and then off the app )",
            "(no doom swiping |zero doom swiping )",
            "(this is good |i need this kind of structure )",
          ],
          model_answers: ["Fair — timer set. No doom swiping."],
          hint_tr: "Onayla: 'Fair — timer set. No doom swiping.'",
        },
        {
          speaker: "npc",
          message: "Send me the first weird bio you find. We need entertainment value.",
        },
      ],
    },
    {
      id: "ex.fd42.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      cefr_band: "B1",
      template: "I want to ___ with you about ___ — ___?",
      slots: [
        { accepted: ["talk honestly", "be open", "share something", "have a real conversation"] },
        { accepted: ["this", "where we're at", "how I'm feeling", "what's going on"] },
        { accepted: ["is now a good time", "can we sit down for a bit", "are you up for it", "would that be okay"] },
      ],
      tr_hint:
        "Önemli konu açma kalıbı: niyet + konu + saygılı zaman sorusu. 'dating app'i Yeniden Indirdim — Tereddut' bağlamında — Türk öğrenci direkt konuya girer; bu sağlam ilk cümle değil. Yumuşatma + zaman kontrolü = saygılı + güvenli alan.",
      example_filled:
        "I want to talk honestly with you about where we're at — is now a good time?",
    },
    {
      id: "ex.fd42.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      cefr_band: "B1",
      turns: [
        { speaker: "npc", text: "What's on your mind?" },
        { speaker: "user" },
        { speaker: "npc", text: "Okay — I'm listening." },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(been (thinking|sitting) with|wanted to talk about)",
        "(might sound|this might sound) (.+)",
        "(want to (open up|be honest|share))",
        "(no pressure|just|honestly) (.+)",
        "(can we|could we) (.+)",
      ],
      tr_hint:
        "Konuyu açma — yumuşatma + dürüst niyet. 'dating app'i Yeniden Indirdim — Tereddut' senaryosunda 'Been thinking about us — wanted to be honest. Can we talk?' tarzı.",
      ideal_answer:
        "Been thinking about something — want to be honest with you. Can we talk through it?",
    },
    {
      id: "ex.fd42.lr1",
      type: "listen_respond",
      difficulty: 3,
      cefr_band: "B1",
      npc_line: "How are you actually feeling about this?",
      accepted_patterns: [
        "(honestly|truthfully) (.+) (good|complicated|mixed)",
        "(part of me|some of me) (.+)",
        "(been (processing|sitting with|figuring out))",
        "(still working through|day by day)",
        "(grateful (you asked|for the space))",
      ],
      think_seconds: 3,
      tr_hint:
        "Dürüst + olgun duygu paylaşımı. 'dating app'i Yeniden Indirdim — Tereddut' bağlamında. Türk öğrenci 'fine' der; bunu yapma; SPESİFİK + dürüst.",
      ideal_response:
        "Honestly? Mixed — still processing parts of it. Day by day.",
    },
    {
      id: "ex.fd42.tt1",
      type: "thinking_trap",
      difficulty: 3,
      cefr_band: "B1",
      tr_thought: "Konuşmamız lazım, çok önemli",
      wrong_en: "We must talk, very important.",
      right_en: "I'd love to talk something through with you — is now a good time?",
      why_tr:
        "Türk öğrenci 'konuşmamız lazım + önemli' kalıbını birebir çevirir = emir tonu + 'must' baskı yaratır + 'very important' dramatik. 'dating app'i Yeniden Indirdim — Tereddut' gibi hassas konuda yumuşatma şart: 'I'd love to talk' (davet) + 'is now a good time' (saygılı zaman kontrolü).",
    },
    {
      id: "ex.fd42.rq1",
      type: "recall_quiz",
      difficulty: 3,
      cefr_band: "B1",
      items: [
        {
          q: "Önemli konuyu açarken en olgun yaklaşım?",
          options: [
            "'We must talk' (emir)",
            "'I'd love to talk — good time?' (davet + saygı)",
            "Sus, bekle",
            "Direkt konuya gir",
          ],
          correct: 1,
          tr_explanation:
            "Davet + zaman kontrolü = saygılı + güvenli alan. Emir = baskı = savunmaya iter.",
        },
        {
          q: "Karşı taraf 'how are you feeling?' sorduğunda?",
          options: [
            "Tek kelime 'fine'",
            "Spesifik + dürüst + 'still processing'",
            "Yalan",
            "Konu değiştir",
          ],
          correct: 1,
          tr_explanation:
            "'Fine' = kapalı kapı. Modern dating: spesifik duygu paylaşımı = bağ kurma.",
        },
        {
          q: "'Day by day' kalıbı:",
          options: [
            "Günden güne (zaman içinde)",
            "Her gün ayrı",
            "Yapısal yanlış",
            "Hızla",
          ],
          correct: 0,
          tr_explanation:
            "'Day by day' = adım adım, zamanla. Zor süreçleri işlerken sağlıklı.",
        },
        {
          q: "'Been sitting with something' anlamı?",
          options: [
            "Bir şeyle oturmak",
            "Bir konuyu içselleştirmek/üzerinde düşünmek",
            "Beklemek",
            "Yapısal yanlış",
          ],
          correct: 1,
          tr_explanation:
            "'Sitting with' = düşünmek, sindirmek (mecaz). Olgun + öz farkındalık.",
        },
        {
          q: "Türk hatası: 'We must talk, very important'",
          options: [
            "Çok formal",
            "Emir + drama tonu = savunmaya iter",
            "Yapısal yanlış",
            "Çok kibar",
          ],
          correct: 1,
          tr_explanation:
            "'Must talk' = emir. 'Very important' = drama. Modern: davet + bağlam.",
        },
      ],
    },
  ],
};

export const flirtDeep_43: BundledLesson = {
  id: "flirt.deep.43",
  skill_id: "flirt.recovery",
  index: 43,
  title: "Ayriliktan Sonraki Ilk Randevu",
  description: "Ayriliktan dort ay sonra ilk gercek randevu. Mesafe + acik olmak arasinda.",
  estimated_minutes: 6,
  exercises: [
    {
      id: "ex.fd43.1",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B2",
      word_or_phrase: "out of practice",
      tr_translation: "Aliskanlik kaybetmis, paslanmis",
      example: "Fair warning — I'm a bit out of practice at this.",
      example_tr: "Uyari: bu konuda biraz paslandim.",
    },
    {
      id: "ex.fd43.vt2",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "not a rebound",
      tr_translation: "Gecis iliskisi degil (samimi acilim)",
      example: "I promise you're not a rebound — I did the work first.",
      example_tr: "Soz veriyorum gecis iliskisi degilsin — once kendimi hazirladim.",
    },
    {
      id: "ex.fd43.vt3",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "C1",
      word_or_phrase: "flirting muscles are rusty",
      tr_translation: "Flort kaslarim paslanmis (sakali samimi kalip)",
      example: "Heads up — my flirting muscles are rusty.",
      example_tr: "Uyari — flort kaslarim paslanmis.",
    },
    {
      id: "ex.fd43.vt4",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "honesty as a feature",
      tr_translation: "Durustluk bir ozellik olarak (modern olgun ozellik sinyali)",
      example: "New rule — honesty as a feature, not a bug.",
      example_tr: "Yeni kural — durustluk hata degil ozellik.",
    },
    {
      id: "ex.fd43.vt5",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "C1",
      word_or_phrase: "bring baggage",
      tr_translation: "Yuk tasimak (eski iliski etkilenmesi)",
      example: "I'm not bringing baggage — I left it in therapy.",
      example_tr: "Yuk tasimiyorum — terapide biraktim.",
    },
    {
      id: "ex.fd43.2",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description: "Yeni biriyle ilk kahve. 'Neden uzun sure dating yapmadin' sorusu cikti.",
      npc_role: "New date",
      setting: "First post-breakup date — coffee shop",
      turns: [
        {
          speaker: "npc",
          message: "So can I ask — when was your last relationship?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(ended about |came out of a serious one )(four months ago)",
            "(don'?t worry |relax — ) (i did the work first)",
            "(was a |it was a ) (long one|three years)",
            "(took time off |needed real time off )(after)",
            "(this is technically |fair to say this is my first proper )(date since)",
            "(not bringing |i'?m not bringing baggage )(— promise)",
          ],
          model_answers: ["Ended four months ago. Did the work first. This is technically my first date since."],
          hint_tr: "Acik: 'Ended four months ago. Did the work first. This is technically my first date since.'",
        },
        {
          speaker: "npc",
          message: "Oh — am I the rebound test pilot then?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(no |not a rebound )",
            "(i don'?t |i wouldn'?t )(rebound on people)",
            "(if i wasn'?t ready |if i still wasn'?t ready ) (i'?d still be inside)",
            "(took the time |went to therapy ) before (showing up here)",
            "(fair warning |full disclosure ) — (i'?m out of practice)",
            "(you'?re here |you'?re here because i'?m genuinely interested )",
          ],
          model_answers: ["Not a rebound. Did the work. Out of practice — fair warning."],
          hint_tr: "Net + dustun: 'Not a rebound. Did the work. Out of practice — fair warning.'",
        },
        {
          speaker: "npc",
          message: "Out of practice how?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(forgot |i forgot how to do small talk )",
            "(small talk is |my flirting muscles ) (rusty)",
            "(might over.?share |i may over.?share or under.?share)",
            "(my jokes |the timing on my jokes ) (are stale)",
            "(bear with me |patience appreciated )",
            "(i'?m a bit |genuinely a bit ) (nervous)",
          ],
          model_answers: ["My flirting muscles are rusty. Patience appreciated."],
          hint_tr: "Sakaya gir: 'My flirting muscles are rusty. Patience appreciated.'",
        },
        {
          speaker: "npc",
          message: "Honestly that's refreshing. Most people pretend they're not nervous.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thank you |grateful )",
            "(i decided |my new rule is ) (no pretending)",
            "(pretending didn'?t |fake confidence didn'?t work for me )(in my last relationship)",
            "(honesty is |i'?m trying honesty as a feature )",
            "(it'?s |it'?s working so far )",
            "(can i ask |let me turn the question — )(what'?s your dating story)",
          ],
          model_answers: ["No pretending — new rule. What's your dating story?"],
          hint_tr: "Onayla + cevir: 'No pretending — new rule. What's your dating story?'",
        },
        {
          speaker: "npc",
          message: "Buckle in. It's also a saga.",
        },
      ],
    },
    {
      id: "ex.fd43.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      cefr_band: "B1",
      template: "I want to ___ with you about ___ — ___?",
      slots: [
        { accepted: ["talk honestly", "be open", "share something", "have a real conversation"] },
        { accepted: ["this", "where we're at", "how I'm feeling", "what's going on"] },
        { accepted: ["is now a good time", "can we sit down for a bit", "are you up for it", "would that be okay"] },
      ],
      tr_hint:
        "Önemli konu açma kalıbı: niyet + konu + saygılı zaman sorusu. 'Ayriliktan Sonraki Ilk Randevu' bağlamında — Türk öğrenci direkt konuya girer; bu sağlam ilk cümle değil. Yumuşatma + zaman kontrolü = saygılı + güvenli alan.",
      example_filled:
        "I want to talk honestly with you about where we're at — is now a good time?",
    },
    {
      id: "ex.fd43.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      cefr_band: "B1",
      turns: [
        { speaker: "npc", text: "What's on your mind?" },
        { speaker: "user" },
        { speaker: "npc", text: "Okay — I'm listening." },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(been (thinking|sitting) with|wanted to talk about)",
        "(might sound|this might sound) (.+)",
        "(want to (open up|be honest|share))",
        "(no pressure|just|honestly) (.+)",
        "(can we|could we) (.+)",
      ],
      tr_hint:
        "Konuyu açma — yumuşatma + dürüst niyet. 'Ayriliktan Sonraki Ilk Randevu' senaryosunda 'Been thinking about us — wanted to be honest. Can we talk?' tarzı.",
      ideal_answer:
        "Been thinking about something — want to be honest with you. Can we talk through it?",
    },
    {
      id: "ex.fd43.lr1",
      type: "listen_respond",
      difficulty: 3,
      cefr_band: "B1",
      npc_line: "How are you actually feeling about this?",
      accepted_patterns: [
        "(honestly|truthfully) (.+) (good|complicated|mixed)",
        "(part of me|some of me) (.+)",
        "(been (processing|sitting with|figuring out))",
        "(still working through|day by day)",
        "(grateful (you asked|for the space))",
      ],
      think_seconds: 3,
      tr_hint:
        "Dürüst + olgun duygu paylaşımı. 'Ayriliktan Sonraki Ilk Randevu' bağlamında. Türk öğrenci 'fine' der; bunu yapma; SPESİFİK + dürüst.",
      ideal_response:
        "Honestly? Mixed — still processing parts of it. Day by day.",
    },
    {
      id: "ex.fd43.tt1",
      type: "thinking_trap",
      difficulty: 3,
      cefr_band: "B1",
      tr_thought: "Konuşmamız lazım, çok önemli",
      wrong_en: "We must talk, very important.",
      right_en: "I'd love to talk something through with you — is now a good time?",
      why_tr:
        "Türk öğrenci 'konuşmamız lazım + önemli' kalıbını birebir çevirir = emir tonu + 'must' baskı yaratır + 'very important' dramatik. 'Ayriliktan Sonraki Ilk Randevu' gibi hassas konuda yumuşatma şart: 'I'd love to talk' (davet) + 'is now a good time' (saygılı zaman kontrolü).",
    },
    {
      id: "ex.fd43.rq1",
      type: "recall_quiz",
      difficulty: 3,
      cefr_band: "B1",
      items: [
        {
          q: "Önemli konuyu açarken en olgun yaklaşım?",
          options: [
            "'We must talk' (emir)",
            "'I'd love to talk — good time?' (davet + saygı)",
            "Sus, bekle",
            "Direkt konuya gir",
          ],
          correct: 1,
          tr_explanation:
            "Davet + zaman kontrolü = saygılı + güvenli alan. Emir = baskı = savunmaya iter.",
        },
        {
          q: "Karşı taraf 'how are you feeling?' sorduğunda?",
          options: [
            "Tek kelime 'fine'",
            "Spesifik + dürüst + 'still processing'",
            "Yalan",
            "Konu değiştir",
          ],
          correct: 1,
          tr_explanation:
            "'Fine' = kapalı kapı. Modern dating: spesifik duygu paylaşımı = bağ kurma.",
        },
        {
          q: "'Day by day' kalıbı:",
          options: [
            "Günden güne (zaman içinde)",
            "Her gün ayrı",
            "Yapısal yanlış",
            "Hızla",
          ],
          correct: 0,
          tr_explanation:
            "'Day by day' = adım adım, zamanla. Zor süreçleri işlerken sağlıklı.",
        },
        {
          q: "'Been sitting with something' anlamı?",
          options: [
            "Bir şeyle oturmak",
            "Bir konuyu içselleştirmek/üzerinde düşünmek",
            "Beklemek",
            "Yapısal yanlış",
          ],
          correct: 1,
          tr_explanation:
            "'Sitting with' = düşünmek, sindirmek (mecaz). Olgun + öz farkındalık.",
        },
        {
          q: "Türk hatası: 'We must talk, very important'",
          options: [
            "Çok formal",
            "Emir + drama tonu = savunmaya iter",
            "Yapısal yanlış",
            "Çok kibar",
          ],
          correct: 1,
          tr_explanation:
            "'Must talk' = emir. 'Very important' = drama. Modern: davet + bağlam.",
        },
      ],
    },
  ],
};

export const flirtDeep_44: BundledLesson = {
  id: "flirt.deep.44",
  skill_id: "flirt.recovery",
  index: 44,
  title: "FWB Anlasmasi — Net Sinirlar",
  description: "Friend with benefits oneriliyor. Sinirlar konus.",
  estimated_minutes: 6,
  exercises: [
    {
      id: "ex.fd44.1",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "no strings attached",
      tr_translation: "Hicbir bag yok (FWB ana cumlesi)",
      example: "It would be no strings attached — but we have to be honest about that.",
      example_tr: "Hicbir bag olmazdi — ama bu konuda durust olmaliyiz.",
    },
    {
      id: "ex.fd44.vt2",
      type: "vocab_tile",
      difficulty: 5,
      cefr_band: "C1",
      word_or_phrase: "non-exclusive",
      tr_translation: "Karsilikli sahiplenmeden (FWB temeli)",
      example: "Non-exclusive — clear rule from day one.",
      example_tr: "Karsilikli sahiplenmeden — birinci gunden net kural.",
    },
    {
      id: "ex.fd44.vt3",
      type: "vocab_tile",
      difficulty: 5,
      cefr_band: "C1",
      word_or_phrase: "secret feelings",
      tr_translation: "Gizli duygular (FWB tehlike alani)",
      example: "If either of us catches secret feelings, we say so.",
      example_tr: "Birimiz gizli duygu yakalarsa, soylemek lazim.",
    },
    {
      id: "ex.fd44.vt4",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "C1",
      word_or_phrase: "monthly check-in",
      tr_translation: "Aylik kontrol (FWB sagligi)",
      example: "Monthly check-in — how is this still working for you?",
      example_tr: "Aylik kontrol — bu hala senin icin calisiyor mu?",
    },
    {
      id: "ex.fd44.vt5",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "C1",
      word_or_phrase: "end it at any time",
      tr_translation: "Istedigin zaman bitirebilirsin (sinir kalibi)",
      example: "Either of us can end it at any time — no explanation needed.",
      example_tr: "Birimiz istedigi zaman bitirebilir — aciklamaya gerek yok.",
    },
    {
      id: "ex.fd44.2",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description: "Eski randevu, su an ikiniz de tek. 'Casual mi olsak' soru cikti. Sinirlar.",
      npc_role: "Casual partner",
      setting: "Late-night conversation about casual arrangement",
      turns: [
        {
          speaker: "npc",
          message: "Look — neither of us is ready for serious. Maybe we just do this casually?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i hear you |open to that conversation )",
            "(before we agree |before saying yes ) — (let'?s set rules)",
            "(casual works only |this only works ) (if we'?re both actually casual)",
            "(no jealousy |no secret feelings ) (rule one)",
            "(can we |should we ) (write the rules down)",
            "(i need this |my mental health needs this ) (clear)",
          ],
          model_answers: ["Casual only works if we set rules. Mental health needs clarity."],
          hint_tr: "Acik: 'Casual only works if we set rules. Mental health needs clarity.'",
        },
        {
          speaker: "npc",
          message: "Okay — fair. What rules do you need?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(no overnight stays |overnight stays are not the rule )(by default)",
            "(if either of us starts |either of us starts dating someone else, we tell each other )",
            "(no posting on |we don'?t post each other ) (social media)",
            "(check.?ins every month |monthly check.?in about feelings )",
            "(either can end this |either of us can end it )(at any time without explanation)",
            "(no shared friend group |we don'?t mix friend groups )",
          ],
          model_answers: ["No overnight by default. Monthly check-ins. Either can end it."],
          hint_tr: "Net kural: 'No overnight by default. Monthly check-ins. Either can end it.'",
        },
        {
          speaker: "npc",
          message: "Those are tighter rules than I expected — but I respect it. I can do all of those.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thank you |appreciate that )",
            "(your turn |what do you need from me )",
            "(what'?s missing |anything to add )",
            "(i want to hear |what'?s on your list )",
            "(let'?s |i want to negotiate this fully )",
            "(rules go both ways |both lists matter equally )",
          ],
          model_answers: ["Appreciate that. What's on your list?"],
          hint_tr: "Karsila + sor: 'Appreciate that. What's on your list?'",
        },
        {
          speaker: "npc",
          message: "I need honesty if feelings change. No ghosting. And no exclusivity assumptions.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(agreed |all of those )",
            "(non.?exclusivity |non.?exclusive ) — (clear)",
            "(no ghosting — |no ghosting is the highest rule for me too )",
            "(if i catch myself |if feelings shift on my end )(i'?ll say so immediately)",
            "(we have a real |this is a real adult agreement )",
            "(should we |let'?s shake on it )",
          ],
          model_answers: ["Agreed. No ghosting is highest rule for me too. We have a real adult agreement."],
          hint_tr: "Kabul: 'Agreed. No ghosting is highest rule for me too. We have a real adult agreement.'",
        },
        {
          speaker: "npc",
          message: "Okay. We're way more functional than most couples. Hilarious.",
        },
      ],
    },
    {
      id: "ex.fd44.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      cefr_band: "B1",
      template: "I want to ___ with you about ___ — ___?",
      slots: [
        { accepted: ["talk honestly", "be open", "share something", "have a real conversation"] },
        { accepted: ["this", "where we're at", "how I'm feeling", "what's going on"] },
        { accepted: ["is now a good time", "can we sit down for a bit", "are you up for it", "would that be okay"] },
      ],
      tr_hint:
        "Önemli konu açma kalıbı: niyet + konu + saygılı zaman sorusu. 'FWB Anlasmasi — Net Sinirlar' bağlamında — Türk öğrenci direkt konuya girer; bu sağlam ilk cümle değil. Yumuşatma + zaman kontrolü = saygılı + güvenli alan.",
      example_filled:
        "I want to talk honestly with you about where we're at — is now a good time?",
    },
    {
      id: "ex.fd44.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      cefr_band: "B1",
      turns: [
        { speaker: "npc", text: "What's on your mind?" },
        { speaker: "user" },
        { speaker: "npc", text: "Okay — I'm listening." },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(been (thinking|sitting) with|wanted to talk about)",
        "(might sound|this might sound) (.+)",
        "(want to (open up|be honest|share))",
        "(no pressure|just|honestly) (.+)",
        "(can we|could we) (.+)",
      ],
      tr_hint:
        "Konuyu açma — yumuşatma + dürüst niyet. 'FWB Anlasmasi — Net Sinirlar' senaryosunda 'Been thinking about us — wanted to be honest. Can we talk?' tarzı.",
      ideal_answer:
        "Been thinking about something — want to be honest with you. Can we talk through it?",
    },
    {
      id: "ex.fd44.lr1",
      type: "listen_respond",
      difficulty: 3,
      cefr_band: "B1",
      npc_line: "How are you actually feeling about this?",
      accepted_patterns: [
        "(honestly|truthfully) (.+) (good|complicated|mixed)",
        "(part of me|some of me) (.+)",
        "(been (processing|sitting with|figuring out))",
        "(still working through|day by day)",
        "(grateful (you asked|for the space))",
      ],
      think_seconds: 3,
      tr_hint:
        "Dürüst + olgun duygu paylaşımı. 'FWB Anlasmasi — Net Sinirlar' bağlamında. Türk öğrenci 'fine' der; bunu yapma; SPESİFİK + dürüst.",
      ideal_response:
        "Honestly? Mixed — still processing parts of it. Day by day.",
    },
    {
      id: "ex.fd44.tt1",
      type: "thinking_trap",
      difficulty: 3,
      cefr_band: "B1",
      tr_thought: "Konuşmamız lazım, çok önemli",
      wrong_en: "We must talk, very important.",
      right_en: "I'd love to talk something through with you — is now a good time?",
      why_tr:
        "Türk öğrenci 'konuşmamız lazım + önemli' kalıbını birebir çevirir = emir tonu + 'must' baskı yaratır + 'very important' dramatik. 'FWB Anlasmasi — Net Sinirlar' gibi hassas konuda yumuşatma şart: 'I'd love to talk' (davet) + 'is now a good time' (saygılı zaman kontrolü).",
    },
    {
      id: "ex.fd44.rq1",
      type: "recall_quiz",
      difficulty: 3,
      cefr_band: "B1",
      items: [
        {
          q: "Önemli konuyu açarken en olgun yaklaşım?",
          options: [
            "'We must talk' (emir)",
            "'I'd love to talk — good time?' (davet + saygı)",
            "Sus, bekle",
            "Direkt konuya gir",
          ],
          correct: 1,
          tr_explanation:
            "Davet + zaman kontrolü = saygılı + güvenli alan. Emir = baskı = savunmaya iter.",
        },
        {
          q: "Karşı taraf 'how are you feeling?' sorduğunda?",
          options: [
            "Tek kelime 'fine'",
            "Spesifik + dürüst + 'still processing'",
            "Yalan",
            "Konu değiştir",
          ],
          correct: 1,
          tr_explanation:
            "'Fine' = kapalı kapı. Modern dating: spesifik duygu paylaşımı = bağ kurma.",
        },
        {
          q: "'Day by day' kalıbı:",
          options: [
            "Günden güne (zaman içinde)",
            "Her gün ayrı",
            "Yapısal yanlış",
            "Hızla",
          ],
          correct: 0,
          tr_explanation:
            "'Day by day' = adım adım, zamanla. Zor süreçleri işlerken sağlıklı.",
        },
        {
          q: "'Been sitting with something' anlamı?",
          options: [
            "Bir şeyle oturmak",
            "Bir konuyu içselleştirmek/üzerinde düşünmek",
            "Beklemek",
            "Yapısal yanlış",
          ],
          correct: 1,
          tr_explanation:
            "'Sitting with' = düşünmek, sindirmek (mecaz). Olgun + öz farkındalık.",
        },
        {
          q: "Türk hatası: 'We must talk, very important'",
          options: [
            "Çok formal",
            "Emir + drama tonu = savunmaya iter",
            "Yapısal yanlış",
            "Çok kibar",
          ],
          correct: 1,
          tr_explanation:
            "'Must talk' = emir. 'Very important' = drama. Modern: davet + bağlam.",
        },
      ],
    },
  ],
};

export const flirtDeep_45: BundledLesson = {
  id: "flirt.deep.45",
  skill_id: "flirt.recovery",
  index: 45,
  title: "Eskiyle Arkadaslik Surdurme",
  description: "Eskiyle gercekten arkadas oldunuz. Yeni partner'in kiskanci. Bunu konus.",
  estimated_minutes: 6,
  exercises: [
    {
      id: "ex.fd45.1",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B2",
      word_or_phrase: "platonic",
      tr_translation: "Platonik, romantik degil (eski/arkadas etiketi)",
      example: "It's been fully platonic for years.",
      example_tr: "Yillardir tamamen platonik.",
    },
    {
      id: "ex.fd45.vt2",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "C1",
      word_or_phrase: "family at this point",
      tr_translation: "Artik aile (yillik arkadaslik aciklamasi)",
      example: "She's family at this point — not romantic, not weird.",
      example_tr: "Artik aile — romantik degil, tuhaf degil.",
    },
    {
      id: "ex.fd45.vt3",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "C1",
      word_or_phrase: "controlling partner",
      tr_translation: "Kontrolcu partner (kacindigi etiket)",
      example: "I don't want to be the controlling partner — but I have a worry.",
      example_tr: "Kontrolcu partner olmak istemiyorum — ama bir endisem var.",
    },
    {
      id: "ex.fd45.vt4",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "find what works",
      tr_translation: "Iseyareyi bulalim (esnek anlasma)",
      example: "Let's find what works for both of us.",
      example_tr: "Ikimize ne uydugunu bulalim.",
    },
    {
      id: "ex.fd45.vt5",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "this relationship matters more",
      tr_translation: "Bu iliski daha onemli (oncelik beyani)",
      example: "If you asked, I'd stop — this relationship matters more.",
      example_tr: "Istesen birakirdim — bu iliski daha onemli.",
    },
    {
      id: "ex.fd45.2",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description: "Yeni sevgilin eski arkadasligini kabul etmiyor. Acikla, esnek ol.",
      npc_role: "New partner",
      setting: "Tense conversation about ex-friendship",
      turns: [
        {
          speaker: "npc",
          message: "I just don't understand why you still need to be friends with your ex.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i hear you |fair question )",
            "(let me explain |can i explain ) (where i'?m at)",
            "(it'?s been |we'?ve been platonic ) (for years)",
            "(no romance |zero romantic stuff ) (since the breakup)",
            "(she'?s family at |she'?s like family at this point )",
            "(i understand why |i get why ) (you might be uncomfortable)",
          ],
          model_answers: ["Fully platonic for years. She's family at this point."],
          hint_tr: "Aciklama: 'Fully platonic for years. She's family at this point.'",
        },
        {
          speaker: "npc",
          message: "But how do I know that? You used to sleep together.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(that'?s fair |that'?s a fair worry )",
            "(my partner is |my partner has always been ) (welcome at our hangouts)",
            "(she has a |she'?s been with someone )(serious partner|of her own)",
            "(you can meet her |would meeting her help )",
            "(i won'?t |i wouldn'?t see her alone )(if you'?d rather not)",
            "(let'?s find what |we can find what works for us )",
          ],
          model_answers: ["Fair worry. Would meeting her help? I won't see her alone if you'd rather."],
          hint_tr: "Esnek: 'Fair worry. Would meeting her help? I won't see her alone if you'd rather.'",
        },
        {
          speaker: "npc",
          message: "Would you really stop seeing her alone if I asked?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes |genuinely yes )",
            "(if it really |if it genuinely matters to you )",
            "(this relationship matters |we matter more )(more than that)",
            "(i wouldn'?t want |it wouldn'?t be worth ) (you being uncomfortable)",
            "(it'?s not a |she'?s not so important that ) (this is at risk)",
            "(let'?s think about |we can figure out what feels right ) (together)",
          ],
          model_answers: ["Genuinely yes. This relationship matters more."],
          hint_tr: "Net: 'Genuinely yes. This relationship matters more.'",
        },
        {
          speaker: "npc",
          message: "I don't want to be the controlling partner. Let me think about it.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(you'?re not |you'?re not being controlling )",
            "(asking is |having the conversation is healthy )",
            "(take your time |whatever time you need )",
            "(i love that |grateful you'?re trying to be fair )",
            "(can we |let'?s revisit in a week )",
            "(thank you for |thank you for talking to me about it )",
          ],
          model_answers: ["Asking is healthy. Take your time. Revisit in a week."],
          hint_tr: "Rahatlat: 'Asking is healthy. Take your time. Revisit in a week.'",
        },
        {
          speaker: "npc",
          message: "Okay. Thank you for not getting defensive.",
        },
      ],
    },
    {
      id: "ex.fd45.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      cefr_band: "B1",
      template: "I want to ___ with you about ___ — ___?",
      slots: [
        { accepted: ["talk honestly", "be open", "share something", "have a real conversation"] },
        { accepted: ["this", "where we're at", "how I'm feeling", "what's going on"] },
        { accepted: ["is now a good time", "can we sit down for a bit", "are you up for it", "would that be okay"] },
      ],
      tr_hint:
        "Önemli konu açma kalıbı: niyet + konu + saygılı zaman sorusu. 'Eskiyle Arkadaslik Surdurme' bağlamında — Türk öğrenci direkt konuya girer; bu sağlam ilk cümle değil. Yumuşatma + zaman kontrolü = saygılı + güvenli alan.",
      example_filled:
        "I want to talk honestly with you about where we're at — is now a good time?",
    },
    {
      id: "ex.fd45.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      cefr_band: "B1",
      turns: [
        { speaker: "npc", text: "What's on your mind?" },
        { speaker: "user" },
        { speaker: "npc", text: "Okay — I'm listening." },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(been (thinking|sitting) with|wanted to talk about)",
        "(might sound|this might sound) (.+)",
        "(want to (open up|be honest|share))",
        "(no pressure|just|honestly) (.+)",
        "(can we|could we) (.+)",
      ],
      tr_hint:
        "Konuyu açma — yumuşatma + dürüst niyet. 'Eskiyle Arkadaslik Surdurme' senaryosunda 'Been thinking about us — wanted to be honest. Can we talk?' tarzı.",
      ideal_answer:
        "Been thinking about something — want to be honest with you. Can we talk through it?",
    },
    {
      id: "ex.fd45.lr1",
      type: "listen_respond",
      difficulty: 3,
      cefr_band: "B1",
      npc_line: "How are you actually feeling about this?",
      accepted_patterns: [
        "(honestly|truthfully) (.+) (good|complicated|mixed)",
        "(part of me|some of me) (.+)",
        "(been (processing|sitting with|figuring out))",
        "(still working through|day by day)",
        "(grateful (you asked|for the space))",
      ],
      think_seconds: 3,
      tr_hint:
        "Dürüst + olgun duygu paylaşımı. 'Eskiyle Arkadaslik Surdurme' bağlamında. Türk öğrenci 'fine' der; bunu yapma; SPESİFİK + dürüst.",
      ideal_response:
        "Honestly? Mixed — still processing parts of it. Day by day.",
    },
    {
      id: "ex.fd45.tt1",
      type: "thinking_trap",
      difficulty: 3,
      cefr_band: "B1",
      tr_thought: "Konuşmamız lazım, çok önemli",
      wrong_en: "We must talk, very important.",
      right_en: "I'd love to talk something through with you — is now a good time?",
      why_tr:
        "Türk öğrenci 'konuşmamız lazım + önemli' kalıbını birebir çevirir = emir tonu + 'must' baskı yaratır + 'very important' dramatik. 'Eskiyle Arkadaslik Surdurme' gibi hassas konuda yumuşatma şart: 'I'd love to talk' (davet) + 'is now a good time' (saygılı zaman kontrolü).",
    },
    {
      id: "ex.fd45.rq1",
      type: "recall_quiz",
      difficulty: 3,
      cefr_band: "B1",
      items: [
        {
          q: "Önemli konuyu açarken en olgun yaklaşım?",
          options: [
            "'We must talk' (emir)",
            "'I'd love to talk — good time?' (davet + saygı)",
            "Sus, bekle",
            "Direkt konuya gir",
          ],
          correct: 1,
          tr_explanation:
            "Davet + zaman kontrolü = saygılı + güvenli alan. Emir = baskı = savunmaya iter.",
        },
        {
          q: "Karşı taraf 'how are you feeling?' sorduğunda?",
          options: [
            "Tek kelime 'fine'",
            "Spesifik + dürüst + 'still processing'",
            "Yalan",
            "Konu değiştir",
          ],
          correct: 1,
          tr_explanation:
            "'Fine' = kapalı kapı. Modern dating: spesifik duygu paylaşımı = bağ kurma.",
        },
        {
          q: "'Day by day' kalıbı:",
          options: [
            "Günden güne (zaman içinde)",
            "Her gün ayrı",
            "Yapısal yanlış",
            "Hızla",
          ],
          correct: 0,
          tr_explanation:
            "'Day by day' = adım adım, zamanla. Zor süreçleri işlerken sağlıklı.",
        },
        {
          q: "'Been sitting with something' anlamı?",
          options: [
            "Bir şeyle oturmak",
            "Bir konuyu içselleştirmek/üzerinde düşünmek",
            "Beklemek",
            "Yapısal yanlış",
          ],
          correct: 1,
          tr_explanation:
            "'Sitting with' = düşünmek, sindirmek (mecaz). Olgun + öz farkındalık.",
        },
        {
          q: "Türk hatası: 'We must talk, very important'",
          options: [
            "Çok formal",
            "Emir + drama tonu = savunmaya iter",
            "Yapısal yanlış",
            "Çok kibar",
          ],
          correct: 1,
          tr_explanation:
            "'Must talk' = emir. 'Very important' = drama. Modern: davet + bağlam.",
        },
      ],
    },
  ],
};

export const flirtDeep_46: BundledLesson = {
  id: "flirt.deep.46",
  skill_id: "flirt.recovery",
  index: 46,
  title: "Eski Ask Tekrar Acildi — Eski Duygular",
  description: "Eski universite asgin geri ulasti. Eski duygular var. Mevcut hayatla denge.",
  estimated_minutes: 6,
  exercises: [
    {
      id: "ex.fd46.1",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "old flame",
      tr_translation: "Eski alev, eski ask",
      example: "It feels weird hearing from an old flame after this long.",
      example_tr: "Bu kadar yilin ardindan eski bir asktan haber almak tuhaf.",
    },
    {
      id: "ex.fd46.vt2",
      type: "vocab_tile",
      difficulty: 5,
      cefr_band: "C1",
      word_or_phrase: "mythologize it",
      tr_translation: "Mitlestirmek (gecmisi guzellestirme)",
      example: "Let's not mythologize that summer — we were young.",
      example_tr: "O yazi mitlestirmeyelim — gencdik.",
    },
    {
      id: "ex.fd46.vt3",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "C1",
      word_or_phrase: "in a healthy place",
      tr_translation: "Saglikli bir yerdeyim (su anki durum)",
      example: "I'm in a healthy place — let's not undo that.",
      example_tr: "Saglikli bir yerdeyim — bunu bozmayalim.",
    },
    {
      id: "ex.fd46.vt4",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "C1",
      word_or_phrase: "name intentions",
      tr_translation: "Niyetleri isimlendirmek (yetiskin acilim)",
      example: "Let's name intentions before we meet — coffee or something else?",
      example_tr: "Bulusmadan once niyetleri isimlendirelim — kahve mi baska sey mi?",
    },
    {
      id: "ex.fd46.vt5",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "eyes open",
      tr_translation: "Gozler acik (uyanik durmak)",
      example: "Coffee with eyes open — I'm not pretending it's neutral.",
      example_tr: "Gozler acik kahve — notr oldugunu farz etmiyorum.",
    },
    {
      id: "ex.fd46.2",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description: "Universite asgin Instagram'dan mesaj atti. Suan singlesin, durumlu cevap ver.",
      npc_role: "Old flame",
      setting: "Instagram DM — old college love reaches out",
      turns: [
        {
          speaker: "npc",
          message: "Hey — okay this is a random one. I was in town and saw a place we used to go.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(hey |well — )(this is a name i wasn'?t expecting )",
            "(wild |okay genuinely surprised )",
            "(which |which place |i'?m guessing )",
            "(seven years |how long has it been — )(too long)",
            "(thanks for the |kind of you to remember )",
            "(what'?s new |how have you been )",
          ],
          model_answers: ["Wild — this is a name I wasn't expecting. How have you been?"],
          hint_tr: "Saskinlik + acilim: 'Wild — this is a name I wasn't expecting. How have you been?'",
        },
        {
          speaker: "npc",
          message: "Good — different city, different life. I think about that summer sometimes though.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(me too |honestly me too )",
            "(it was |that summer was )(a good one)",
            "(don'?t |let'?s not ) (mythologize it though)",
            "(we were so |we were so young )",
            "(it shaped me |that summer shaped how i see things )",
            "(weird how |strange how memory works )",
          ],
          model_answers: ["Me too. Good one. Let's not mythologize — we were young."],
          hint_tr: "Saglikli: 'Me too. Good one. Let's not mythologize — we were young.'",
        },
        {
          speaker: "npc",
          message: "Are you in town long? Coffee for old times?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i'?m here |here through thursday )",
            "(coffee could |coffee would )(be nice — friendly, with my eyes open)",
            "(do you mean |how do you mean coffee )",
            "(i'?m good with |i'?m up for ) (catching up — that'?s it)",
            "(let me know |if your intention is friendly i'?m in )",
            "(let'?s name |let'?s be honest about the meeting first )",
          ],
          model_answers: ["Coffee could be nice — friendly, with my eyes open. Let's name intentions."],
          hint_tr: "Net sinir: 'Coffee could be nice — friendly, with my eyes open. Let's name intentions.'",
        },
        {
          speaker: "npc",
          message: "Honestly — I'm not sure what my intention is. Maybe just to see you?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(appreciate the |grateful for the )honesty",
            "(in that case |since we'?re being honest )",
            "(i'?ll meet you for |a one.?hour catch up )(coffee )",
            "(no late drinks |daytime only )",
            "(i'?m in a |i'?m in a healthy place — )(let'?s not undo that)",
            "(send the spot |pick the cafe )",
          ],
          model_answers: ["One-hour coffee, daytime only. Healthy place — let's not undo that."],
          hint_tr: "Olgun + sinir: 'One-hour coffee, daytime only. Healthy place — let's not undo that.'",
        },
        {
          speaker: "npc",
          message: "Cafe Lumen, Wednesday, 4pm. And — thanks for being clear with me.",
        },
      ],
    },
    {
      id: "ex.fd46.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      cefr_band: "B1",
      template: "I want to ___ with you about ___ — ___?",
      slots: [
        { accepted: ["talk honestly", "be open", "share something", "have a real conversation"] },
        { accepted: ["this", "where we're at", "how I'm feeling", "what's going on"] },
        { accepted: ["is now a good time", "can we sit down for a bit", "are you up for it", "would that be okay"] },
      ],
      tr_hint:
        "Önemli konu açma kalıbı: niyet + konu + saygılı zaman sorusu. 'Eski Ask Tekrar Acildi — Eski Duygular' bağlamında — Türk öğrenci direkt konuya girer; bu sağlam ilk cümle değil. Yumuşatma + zaman kontrolü = saygılı + güvenli alan.",
      example_filled:
        "I want to talk honestly with you about where we're at — is now a good time?",
    },
    {
      id: "ex.fd46.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      cefr_band: "B1",
      turns: [
        { speaker: "npc", text: "What's on your mind?" },
        { speaker: "user" },
        { speaker: "npc", text: "Okay — I'm listening." },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(been (thinking|sitting) with|wanted to talk about)",
        "(might sound|this might sound) (.+)",
        "(want to (open up|be honest|share))",
        "(no pressure|just|honestly) (.+)",
        "(can we|could we) (.+)",
      ],
      tr_hint:
        "Konuyu açma — yumuşatma + dürüst niyet. 'Eski Ask Tekrar Acildi — Eski Duygular' senaryosunda 'Been thinking about us — wanted to be honest. Can we talk?' tarzı.",
      ideal_answer:
        "Been thinking about something — want to be honest with you. Can we talk through it?",
    },
    {
      id: "ex.fd46.lr1",
      type: "listen_respond",
      difficulty: 3,
      cefr_band: "B1",
      npc_line: "How are you actually feeling about this?",
      accepted_patterns: [
        "(honestly|truthfully) (.+) (good|complicated|mixed)",
        "(part of me|some of me) (.+)",
        "(been (processing|sitting with|figuring out))",
        "(still working through|day by day)",
        "(grateful (you asked|for the space))",
      ],
      think_seconds: 3,
      tr_hint:
        "Dürüst + olgun duygu paylaşımı. 'Eski Ask Tekrar Acildi — Eski Duygular' bağlamında. Türk öğrenci 'fine' der; bunu yapma; SPESİFİK + dürüst.",
      ideal_response:
        "Honestly? Mixed — still processing parts of it. Day by day.",
    },
    {
      id: "ex.fd46.tt1",
      type: "thinking_trap",
      difficulty: 3,
      cefr_band: "B1",
      tr_thought: "Konuşmamız lazım, çok önemli",
      wrong_en: "We must talk, very important.",
      right_en: "I'd love to talk something through with you — is now a good time?",
      why_tr:
        "Türk öğrenci 'konuşmamız lazım + önemli' kalıbını birebir çevirir = emir tonu + 'must' baskı yaratır + 'very important' dramatik. 'Eski Ask Tekrar Acildi — Eski Duygular' gibi hassas konuda yumuşatma şart: 'I'd love to talk' (davet) + 'is now a good time' (saygılı zaman kontrolü).",
    },
    {
      id: "ex.fd46.rq1",
      type: "recall_quiz",
      difficulty: 3,
      cefr_band: "B1",
      items: [
        {
          q: "Önemli konuyu açarken en olgun yaklaşım?",
          options: [
            "'We must talk' (emir)",
            "'I'd love to talk — good time?' (davet + saygı)",
            "Sus, bekle",
            "Direkt konuya gir",
          ],
          correct: 1,
          tr_explanation:
            "Davet + zaman kontrolü = saygılı + güvenli alan. Emir = baskı = savunmaya iter.",
        },
        {
          q: "Karşı taraf 'how are you feeling?' sorduğunda?",
          options: [
            "Tek kelime 'fine'",
            "Spesifik + dürüst + 'still processing'",
            "Yalan",
            "Konu değiştir",
          ],
          correct: 1,
          tr_explanation:
            "'Fine' = kapalı kapı. Modern dating: spesifik duygu paylaşımı = bağ kurma.",
        },
        {
          q: "'Day by day' kalıbı:",
          options: [
            "Günden güne (zaman içinde)",
            "Her gün ayrı",
            "Yapısal yanlış",
            "Hızla",
          ],
          correct: 0,
          tr_explanation:
            "'Day by day' = adım adım, zamanla. Zor süreçleri işlerken sağlıklı.",
        },
        {
          q: "'Been sitting with something' anlamı?",
          options: [
            "Bir şeyle oturmak",
            "Bir konuyu içselleştirmek/üzerinde düşünmek",
            "Beklemek",
            "Yapısal yanlış",
          ],
          correct: 1,
          tr_explanation:
            "'Sitting with' = düşünmek, sindirmek (mecaz). Olgun + öz farkındalık.",
        },
        {
          q: "Türk hatası: 'We must talk, very important'",
          options: [
            "Çok formal",
            "Emir + drama tonu = savunmaya iter",
            "Yapısal yanlış",
            "Çok kibar",
          ],
          correct: 1,
          tr_explanation:
            "'Must talk' = emir. 'Very important' = drama. Modern: davet + bağlam.",
        },
      ],
    },
  ],
};

export const flirtDeep_47: BundledLesson = {
  id: "flirt.deep.47",
  skill_id: "flirt.recovery",
  index: 47,
  title: "Ortak Arkadas Grubunda Eski Tuhafligi",
  description: "Eski sevgilin grup partisinde. Ucuncu sahisla kibarca konus, sinir koy.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.fd47.1",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B2",
      word_or_phrase: "civil",
      tr_translation: "Medeni, kibar (eskiyle ortam icin)",
      example: "We're civil — that's all I'm aiming for tonight.",
      example_tr: "Medeniyiz — bu aksam hedefim sadece bu.",
    },
    {
      id: "ex.fd47.vt2",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "buffer",
      tr_translation: "Tampon (arkadasin koruyucu rolu)",
      example: "Be my buffer — stay close but not obvious.",
      example_tr: "Tamponum ol — yakinda dur ama belli olmasin.",
    },
    {
      id: "ex.fd47.vt3",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "C1",
      word_or_phrase: "code word",
      tr_translation: "Sifre kelime (kurtarma sinyali)",
      example: "Our code word — if I touch my ear, get me out.",
      example_tr: "Sifre kelimemiz — kulagima dokunursam beni kurtar.",
    },
    {
      id: "ex.fd47.vt4",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "brief hi and retreat",
      tr_translation: "Kisa merhaba ve cekilme (planli sinir)",
      example: "Plan is — brief hi and retreat. No long chats.",
      example_tr: "Plan — kisa merhaba ve cekilme. Uzun sohbet yok.",
    },
    {
      id: "ex.fd47.vt5",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B2",
      word_or_phrase: "stay sharp",
      tr_translation: "Tetikte kal (parti dikkat kalibi)",
      example: "Light pour — I need to stay sharp tonight.",
      example_tr: "Az koy — bu aksam tetikte kalmam gerek.",
    },
    {
      id: "ex.fd47.2",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description: "Mutual arkadas evinde. Eski sevgilin bes metre uzakta. Yan arkadasinla strategy konus.",
      npc_role: "Mutual friend",
      setting: "Friend's party — ex is across the room",
      turns: [
        {
          speaker: "npc",
          message: "Hey — I should've warned you he was coming. You okay?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(it'?s fine |i'?m okay )",
            "(i would have come |i would have come anyway )",
            "(took a deep breath |stayed in the bathroom for a minute ) (— recovering)",
            "(my plan is |plan is to ) (stay civil)",
            "(say hi |i'?ll say hi once and move on )",
            "(no avoiding |i'?m not going to avoid him )",
          ],
          model_answers: ["I'm okay. Plan is to stay civil. Say hi once and move on."],
          hint_tr: "Olgun: 'I'm okay. Plan is to stay civil. Say hi once and move on.'",
        },
        {
          speaker: "npc",
          message: "Do you want me to be your buffer?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(you'?re a |you'?re the best )",
            "(yes please |yes — but not obviously )",
            "(if i get |if you see me getting cornered, swoop in )",
            "(stay close |stay near me without making it weird )",
            "(my code word |i'?ll touch my ear if i need rescue )",
            "(thank you |grateful for the assist )",
          ],
          model_answers: ["Yes — but not obvious. If you see me cornered, swoop in."],
          hint_tr: "Strateji: 'Yes — but not obvious. If you see me cornered, swoop in.'",
        },
        {
          speaker: "npc",
          message: "Got it. I'll do my best to not stare every time you talk to him.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(please |for your sanity and mine )",
            "(act |pretend it'?s a normal party )",
            "(i'?ll do the |i'?ll do the brief hi and retreat )",
            "(remind me |if i seem to be lingering near him, drag me to the kitchen )",
            "(i can do this |we can do this )",
            "(two hours and we'?re out |give it two hours then we leave )",
          ],
          model_answers: ["Act like a normal party. Two hours and we leave."],
          hint_tr: "Plan kapanis: 'Act like a normal party. Two hours and we leave.'",
        },
        {
          speaker: "npc",
          message: "Deal. Drink?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes please |huge yes )",
            "(small one |just one )",
            "(not too strong |light pour )",
            "(i need to stay |i need to stay sharp )",
            "(white wine |whatever you have )",
            "(thanks |you'?re the best ally )",
          ],
          model_answers: ["Yes — small one. Need to stay sharp."],
          hint_tr: "Soft kabul: 'Yes — small one. Need to stay sharp.'",
        },
        {
          speaker: "npc",
          message: "On it. Hold this corner of the kitchen — I'll be back.",
        },
      ],
    },
    {
      id: "ex.fd47.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      cefr_band: "B1",
      template: "I want to ___ with you about ___ — ___?",
      slots: [
        { accepted: ["talk honestly", "be open", "share something", "have a real conversation"] },
        { accepted: ["this", "where we're at", "how I'm feeling", "what's going on"] },
        { accepted: ["is now a good time", "can we sit down for a bit", "are you up for it", "would that be okay"] },
      ],
      tr_hint:
        "Önemli konu açma kalıbı: niyet + konu + saygılı zaman sorusu. 'Ortak Arkadas Grubunda Eski Tuhafligi' bağlamında — Türk öğrenci direkt konuya girer; bu sağlam ilk cümle değil. Yumuşatma + zaman kontrolü = saygılı + güvenli alan.",
      example_filled:
        "I want to talk honestly with you about where we're at — is now a good time?",
    },
    {
      id: "ex.fd47.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      cefr_band: "B1",
      turns: [
        { speaker: "npc", text: "What's on your mind?" },
        { speaker: "user" },
        { speaker: "npc", text: "Okay — I'm listening." },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(been (thinking|sitting) with|wanted to talk about)",
        "(might sound|this might sound) (.+)",
        "(want to (open up|be honest|share))",
        "(no pressure|just|honestly) (.+)",
        "(can we|could we) (.+)",
      ],
      tr_hint:
        "Konuyu açma — yumuşatma + dürüst niyet. 'Ortak Arkadas Grubunda Eski Tuhafligi' senaryosunda 'Been thinking about us — wanted to be honest. Can we talk?' tarzı.",
      ideal_answer:
        "Been thinking about something — want to be honest with you. Can we talk through it?",
    },
    {
      id: "ex.fd47.lr1",
      type: "listen_respond",
      difficulty: 3,
      cefr_band: "B1",
      npc_line: "How are you actually feeling about this?",
      accepted_patterns: [
        "(honestly|truthfully) (.+) (good|complicated|mixed)",
        "(part of me|some of me) (.+)",
        "(been (processing|sitting with|figuring out))",
        "(still working through|day by day)",
        "(grateful (you asked|for the space))",
      ],
      think_seconds: 3,
      tr_hint:
        "Dürüst + olgun duygu paylaşımı. 'Ortak Arkadas Grubunda Eski Tuhafligi' bağlamında. Türk öğrenci 'fine' der; bunu yapma; SPESİFİK + dürüst.",
      ideal_response:
        "Honestly? Mixed — still processing parts of it. Day by day.",
    },
    {
      id: "ex.fd47.tt1",
      type: "thinking_trap",
      difficulty: 3,
      cefr_band: "B1",
      tr_thought: "Konuşmamız lazım, çok önemli",
      wrong_en: "We must talk, very important.",
      right_en: "I'd love to talk something through with you — is now a good time?",
      why_tr:
        "Türk öğrenci 'konuşmamız lazım + önemli' kalıbını birebir çevirir = emir tonu + 'must' baskı yaratır + 'very important' dramatik. 'Ortak Arkadas Grubunda Eski Tuhafligi' gibi hassas konuda yumuşatma şart: 'I'd love to talk' (davet) + 'is now a good time' (saygılı zaman kontrolü).",
    },
    {
      id: "ex.fd47.rq1",
      type: "recall_quiz",
      difficulty: 3,
      cefr_band: "B1",
      items: [
        {
          q: "Önemli konuyu açarken en olgun yaklaşım?",
          options: [
            "'We must talk' (emir)",
            "'I'd love to talk — good time?' (davet + saygı)",
            "Sus, bekle",
            "Direkt konuya gir",
          ],
          correct: 1,
          tr_explanation:
            "Davet + zaman kontrolü = saygılı + güvenli alan. Emir = baskı = savunmaya iter.",
        },
        {
          q: "Karşı taraf 'how are you feeling?' sorduğunda?",
          options: [
            "Tek kelime 'fine'",
            "Spesifik + dürüst + 'still processing'",
            "Yalan",
            "Konu değiştir",
          ],
          correct: 1,
          tr_explanation:
            "'Fine' = kapalı kapı. Modern dating: spesifik duygu paylaşımı = bağ kurma.",
        },
        {
          q: "'Day by day' kalıbı:",
          options: [
            "Günden güne (zaman içinde)",
            "Her gün ayrı",
            "Yapısal yanlış",
            "Hızla",
          ],
          correct: 0,
          tr_explanation:
            "'Day by day' = adım adım, zamanla. Zor süreçleri işlerken sağlıklı.",
        },
        {
          q: "'Been sitting with something' anlamı?",
          options: [
            "Bir şeyle oturmak",
            "Bir konuyu içselleştirmek/üzerinde düşünmek",
            "Beklemek",
            "Yapısal yanlış",
          ],
          correct: 1,
          tr_explanation:
            "'Sitting with' = düşünmek, sindirmek (mecaz). Olgun + öz farkındalık.",
        },
        {
          q: "Türk hatası: 'We must talk, very important'",
          options: [
            "Çok formal",
            "Emir + drama tonu = savunmaya iter",
            "Yapısal yanlış",
            "Çok kibar",
          ],
          correct: 1,
          tr_explanation:
            "'Must talk' = emir. 'Very important' = drama. Modern: davet + bağlam.",
        },
      ],
    },
  ],
};

export const flirtDeep_48: BundledLesson = {
  id: "flirt.deep.48",
  skill_id: "flirt.recovery",
  index: 48,
  title: "Rebound Iliskisi Farkindaligi",
  description: "Yeni iliskinin rebound oldugunu fark ettin. Ona durustce soyle.",
  estimated_minutes: 6,
  exercises: [
    {
      id: "ex.fd48.1",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "rebound",
      tr_translation: "Hizli toparlanma, gecis iliskisi",
      example: "I think I got into a rebound without realizing it.",
      example_tr: "Fark etmeden bir gecis iliskisine girdigimi dusunuyorum.",
    },
    {
      id: "ex.fd48.vt2",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "C1",
      word_or_phrase: "heart wasn't fully available",
      tr_translation: "Kalbim tam acik degildi (durust acilim)",
      example: "I genuinely liked you — but my heart wasn't fully available.",
      example_tr: "Seni gercekten sevdim — ama kalbim tam acik degildi.",
    },
    {
      id: "ex.fd48.vt3",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "C1",
      word_or_phrase: "wrong time, not wrong person",
      tr_translation: "Yanlis zaman, yanlis kisi degil (zarif ayrilik kalibi)",
      example: "Wrong time, not wrong person — that's the honest version.",
      example_tr: "Yanlis zaman, yanlis kisi degil — durust hali bu.",
    },
    {
      id: "ex.fd48.vt4",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "C1",
      word_or_phrase: "doing the hard thing",
      tr_translation: "Zoru yapmak (durust ayrilik takdiri)",
      example: "Appreciate you doing the hard thing — most people just disappear.",
      example_tr: "Zoru yaptigin icin tesekkurler — cogu insan sadece kaybolur.",
    },
    {
      id: "ex.fd48.vt5",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "the longer I pretend",
      tr_translation: "Daha cok rol yaparsam (samimi sebep kalibi)",
      example: "The longer I pretend, the more I hurt you — so I'm saying it now.",
      example_tr: "Ne kadar rol yaparsam o kadar incitirim — bu yuzden simdi soyluyorum.",
    },
    {
      id: "ex.fd48.2",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description: "Yeni partner'le konusuyorsun. Onun zarari minimum, durustlugu maksimum.",
      npc_role: "New partner",
      setting: "Difficult honesty conversation",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(i need to be |i have to be ) (honest about something)",
            "(this is going |this will sound )(hard|hard to hear)",
            "(i don'?t think i was |i wasn'?t actually ) (ready for this)",
            "(this might have been |i think this has been ) (a rebound)",
            "(none of this is |this isn'?t about ) (your fault)",
            "(you deserve |you deserve to know )(the truth from me)",
          ],
          model_answers: ["I have to be honest. I don't think I was ready. This was a rebound."],
          hint_tr: "Acik girisim: 'I have to be honest. I don't think I was ready. This was a rebound.'",
        },
        {
          speaker: "npc",
          message: "Oh. Okay. Why are you telling me now?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(because the longer |the longer i pretend )(the more i hurt you)",
            "(you deserve a |you deserve to be )(real choice|chosen properly)",
            "(i caught myself |last night i caught myself ) (still thinking about my ex)",
            "(it wouldn'?t be fair |continuing wouldn'?t be fair )(to either of us)",
            "(i wanted to tell you |this is me trying to be honest before we get deeper )",
            "(i respect you too much |i'?ve grown to care about you enough ) (to keep faking it)",
          ],
          model_answers: ["You deserve a real choice. Wouldn't be fair to continue."],
          hint_tr: "Sebep: 'You deserve a real choice. Wouldn't be fair to continue.'",
        },
        {
          speaker: "npc",
          message: "Did you ever actually like me, or was I just a distraction?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i genuinely |you weren'?t a distraction )(liked you)",
            "(it wasn'?t |it wasn'?t fake )",
            "(but my heart |my heart wasn'?t fully available )",
            "(that'?s on |that'?s entirely on me )",
            "(you weren'?t |you weren'?t the wrong person )(— it was the wrong time)",
            "(i should have |the mistake was mine — i should have waited )",
          ],
          model_answers: ["Genuinely liked you. Heart wasn't fully available. Wrong time, not wrong person."],
          hint_tr: "Net + durust: 'Genuinely liked you. Heart wasn't fully available. Wrong time, not wrong person.'",
        },
        {
          speaker: "npc",
          message: "Okay. I appreciate you doing the hard thing. I think I want you to leave now.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(understood |of course )",
            "(i'?m so sorry |i'?m genuinely sorry )",
            "(take whatever you |take whatever time you need )",
            "(i won'?t |i'?m not going to contact you )(— ball is in your court)",
            "(i hope |i wish you the best — genuinely )",
            "(thank you for |thank you for the months )",
          ],
          model_answers: ["Understood. Ball is in your court. Wish you the best."],
          hint_tr: "Saygili cikis: 'Understood. Ball is in your court. Wish you the best.'",
        },
        {
          speaker: "npc",
          message: "Just go. Don't say anything else.",
        },
      ],
    },
    {
      id: "ex.fd48.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      cefr_band: "B1",
      template: "I want to ___ with you about ___ — ___?",
      slots: [
        { accepted: ["talk honestly", "be open", "share something", "have a real conversation"] },
        { accepted: ["this", "where we're at", "how I'm feeling", "what's going on"] },
        { accepted: ["is now a good time", "can we sit down for a bit", "are you up for it", "would that be okay"] },
      ],
      tr_hint:
        "Önemli konu açma kalıbı: niyet + konu + saygılı zaman sorusu. 'Rebound Iliskisi Farkindaligi' bağlamında — Türk öğrenci direkt konuya girer; bu sağlam ilk cümle değil. Yumuşatma + zaman kontrolü = saygılı + güvenli alan.",
      example_filled:
        "I want to talk honestly with you about where we're at — is now a good time?",
    },
    {
      id: "ex.fd48.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      cefr_band: "B1",
      turns: [
        { speaker: "npc", text: "What's on your mind?" },
        { speaker: "user" },
        { speaker: "npc", text: "Okay — I'm listening." },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(been (thinking|sitting) with|wanted to talk about)",
        "(might sound|this might sound) (.+)",
        "(want to (open up|be honest|share))",
        "(no pressure|just|honestly) (.+)",
        "(can we|could we) (.+)",
      ],
      tr_hint:
        "Konuyu açma — yumuşatma + dürüst niyet. 'Rebound Iliskisi Farkindaligi' senaryosunda 'Been thinking about us — wanted to be honest. Can we talk?' tarzı.",
      ideal_answer:
        "Been thinking about something — want to be honest with you. Can we talk through it?",
    },
    {
      id: "ex.fd48.lr1",
      type: "listen_respond",
      difficulty: 3,
      cefr_band: "B1",
      npc_line: "How are you actually feeling about this?",
      accepted_patterns: [
        "(honestly|truthfully) (.+) (good|complicated|mixed)",
        "(part of me|some of me) (.+)",
        "(been (processing|sitting with|figuring out))",
        "(still working through|day by day)",
        "(grateful (you asked|for the space))",
      ],
      think_seconds: 3,
      tr_hint:
        "Dürüst + olgun duygu paylaşımı. 'Rebound Iliskisi Farkindaligi' bağlamında. Türk öğrenci 'fine' der; bunu yapma; SPESİFİK + dürüst.",
      ideal_response:
        "Honestly? Mixed — still processing parts of it. Day by day.",
    },
    {
      id: "ex.fd48.tt1",
      type: "thinking_trap",
      difficulty: 3,
      cefr_band: "B1",
      tr_thought: "Konuşmamız lazım, çok önemli",
      wrong_en: "We must talk, very important.",
      right_en: "I'd love to talk something through with you — is now a good time?",
      why_tr:
        "Türk öğrenci 'konuşmamız lazım + önemli' kalıbını birebir çevirir = emir tonu + 'must' baskı yaratır + 'very important' dramatik. 'Rebound Iliskisi Farkindaligi' gibi hassas konuda yumuşatma şart: 'I'd love to talk' (davet) + 'is now a good time' (saygılı zaman kontrolü).",
    },
    {
      id: "ex.fd48.rq1",
      type: "recall_quiz",
      difficulty: 3,
      cefr_band: "B1",
      items: [
        {
          q: "Önemli konuyu açarken en olgun yaklaşım?",
          options: [
            "'We must talk' (emir)",
            "'I'd love to talk — good time?' (davet + saygı)",
            "Sus, bekle",
            "Direkt konuya gir",
          ],
          correct: 1,
          tr_explanation:
            "Davet + zaman kontrolü = saygılı + güvenli alan. Emir = baskı = savunmaya iter.",
        },
        {
          q: "Karşı taraf 'how are you feeling?' sorduğunda?",
          options: [
            "Tek kelime 'fine'",
            "Spesifik + dürüst + 'still processing'",
            "Yalan",
            "Konu değiştir",
          ],
          correct: 1,
          tr_explanation:
            "'Fine' = kapalı kapı. Modern dating: spesifik duygu paylaşımı = bağ kurma.",
        },
        {
          q: "'Day by day' kalıbı:",
          options: [
            "Günden güne (zaman içinde)",
            "Her gün ayrı",
            "Yapısal yanlış",
            "Hızla",
          ],
          correct: 0,
          tr_explanation:
            "'Day by day' = adım adım, zamanla. Zor süreçleri işlerken sağlıklı.",
        },
        {
          q: "'Been sitting with something' anlamı?",
          options: [
            "Bir şeyle oturmak",
            "Bir konuyu içselleştirmek/üzerinde düşünmek",
            "Beklemek",
            "Yapısal yanlış",
          ],
          correct: 1,
          tr_explanation:
            "'Sitting with' = düşünmek, sindirmek (mecaz). Olgun + öz farkındalık.",
        },
        {
          q: "Türk hatası: 'We must talk, very important'",
          options: [
            "Çok formal",
            "Emir + drama tonu = savunmaya iter",
            "Yapısal yanlış",
            "Çok kibar",
          ],
          correct: 1,
          tr_explanation:
            "'Must talk' = emir. 'Very important' = drama. Modern: davet + bağlam.",
        },
      ],
    },
  ],
};

export const flirtDeep_49: BundledLesson = {
  id: "flirt.deep.49",
  skill_id: "flirt.recovery",
  index: 49,
  title: "Terapi Bahsetme — Acilim",
  description: "Yeni randevuda terapi gectigini sezdir. Bati'da bu artisi — Turk damgasi yok.",
  estimated_minutes: 6,
  exercises: [
    {
      id: "ex.fd49.1",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B2",
      word_or_phrase: "in therapy",
      tr_translation: "Terapide olmak (modern, saglikli paylasimi)",
      example: "I've been in therapy for about a year — best thing I ever did.",
      example_tr: "Yaklasik bir yildir terapidedim — yaptigim en iyi sey.",
    },
    {
      id: "ex.fd49.vt2",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "C1",
      word_or_phrase: "self-aware",
      tr_translation: "Oz farkindaligi olan (terapinin sonucu sinyali)",
      example: "You're so self-aware — therapy?",
      example_tr: "Cok oz farkindaligin var — terapi mi?",
    },
    {
      id: "ex.fd49.vt3",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "C1",
      word_or_phrase: "doing the work",
      tr_translation: "Calismami yapiyorum (kisisel gelisim kalibi)",
      example: "Self-work is attractive — I love that you're doing the work.",
      example_tr: "Oz calismasi cekici — calismami yaptigini sevdim.",
    },
    {
      id: "ex.fd49.vt4",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "C1",
      word_or_phrase: "normalize it",
      tr_translation: "Normallestirmek (Turk damgasi yikmak)",
      example: "I talk about therapy openly — to normalize it for Turkish guys.",
      example_tr: "Terapiyi acikca konusuyorum — Turk erkekleri icin normallestirmek icin.",
    },
    {
      id: "ex.fd49.vt5",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "C1",
      word_or_phrase: "saves us months",
      tr_translation: "Aylarca kurtariyor (bilincli erken acilim)",
      example: "Talking about therapy on date one saves us months of dancing.",
      example_tr: "Ilk randevuda terapiden bahsetmek aylarca dans etmekten kurtariyor.",
    },
    {
      id: "ex.fd49.2",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description: "Aksam yemegi. Konu acildi: 'Nasil baska bir insana donustun?' Terapiyi anlat.",
      npc_role: "Date",
      setting: "Dinner — opening up about therapy",
      turns: [
        {
          speaker: "npc",
          message: "You're so self-aware. How did you get like this?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(honest answer |full credit )— (therapy)",
            "(been in therapy |i'?ve been in therapy )(for about a year)",
            "(big change for me |best thing i ever did )",
            "(turkish guys don'?t |it'?s not common where i'?m from )(but i love it)",
            "(after my last relationship |after my breakup ) (i committed to therapy)",
            "(would recommend |genuinely would recommend ) to everyone",
          ],
          model_answers: ["Honest answer — therapy. Been in it about a year. Best thing I ever did."],
          hint_tr: "Acik: 'Honest answer — therapy. Been in it about a year. Best thing I ever did.'",
        },
        {
          speaker: "npc",
          message: "I love that you talk about it openly. Is it taboo in Turkey?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(getting better |it'?s changing )",
            "(older generation |my parents '?generation ) (doesn'?t love it)",
            "(my generation |younger turks ) (mostly open about it)",
            "(my dad still |my dad calls it )(unnecessary)",
            "(my mom is |my sister is ) (the supporter)",
            "(i don'?t hide it |i talk about it on purpose to normalize )",
          ],
          model_answers: ["Older generation doesn't love it. My generation mostly open."],
          hint_tr: "Kulturel baglam: 'Older generation doesn't love it. My generation mostly open.'",
        },
        {
          speaker: "npc",
          message: "Is it weird that I'm slightly attracted to the idea that you work on yourself?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(not weird at |not weird at all )",
            "(healthy is |self.?work is )(attractive)",
            "(thank you |that'?s a really kind thing to say )",
            "(it'?s also |it'?s a sign you do the work yourself )",
            "(are you in |have you been in therapy )",
            "(would love to hear |what does your work look like )",
          ],
          model_answers: ["Not weird at all. Healthy is attractive. Have you been in therapy?"],
          hint_tr: "Karsi soru: 'Not weird at all. Healthy is attractive. Have you been in therapy?'",
        },
        {
          speaker: "npc",
          message: "Yes — six years. Different reasons but yeah. It's nice meeting someone who gets it.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(genuinely nice |refreshing )",
            "(this might be |i'?ve never had this conversation on a first date )",
            "(saves us |saves us months of dancing around things )",
            "(this is the |this is the kind of conversation i wanted )",
            "(my therapist will |my therapist will be thrilled )",
            "(now i'?m more interested |you'?re more interesting by the minute )",
          ],
          model_answers: ["Refreshing. Saves months of dancing around things."],
          hint_tr: "Olumlu: 'Refreshing. Saves months of dancing around things.'",
        },
        {
          speaker: "npc",
          message: "Cheers to that. To therapy and not being weird about it.",
        },
      ],
    },
    {
      id: "ex.fd49.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      cefr_band: "B1",
      template: "I want to ___ with you about ___ — ___?",
      slots: [
        { accepted: ["talk honestly", "be open", "share something", "have a real conversation"] },
        { accepted: ["this", "where we're at", "how I'm feeling", "what's going on"] },
        { accepted: ["is now a good time", "can we sit down for a bit", "are you up for it", "would that be okay"] },
      ],
      tr_hint:
        "Önemli konu açma kalıbı: niyet + konu + saygılı zaman sorusu. 'Terapi Bahsetme — Acilim' bağlamında — Türk öğrenci direkt konuya girer; bu sağlam ilk cümle değil. Yumuşatma + zaman kontrolü = saygılı + güvenli alan.",
      example_filled:
        "I want to talk honestly with you about where we're at — is now a good time?",
    },
    {
      id: "ex.fd49.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      cefr_band: "B1",
      turns: [
        { speaker: "npc", text: "What's on your mind?" },
        { speaker: "user" },
        { speaker: "npc", text: "Okay — I'm listening." },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(been (thinking|sitting) with|wanted to talk about)",
        "(might sound|this might sound) (.+)",
        "(want to (open up|be honest|share))",
        "(no pressure|just|honestly) (.+)",
        "(can we|could we) (.+)",
      ],
      tr_hint:
        "Konuyu açma — yumuşatma + dürüst niyet. 'Terapi Bahsetme — Acilim' senaryosunda 'Been thinking about us — wanted to be honest. Can we talk?' tarzı.",
      ideal_answer:
        "Been thinking about something — want to be honest with you. Can we talk through it?",
    },
    {
      id: "ex.fd49.lr1",
      type: "listen_respond",
      difficulty: 3,
      cefr_band: "B1",
      npc_line: "How are you actually feeling about this?",
      accepted_patterns: [
        "(honestly|truthfully) (.+) (good|complicated|mixed)",
        "(part of me|some of me) (.+)",
        "(been (processing|sitting with|figuring out))",
        "(still working through|day by day)",
        "(grateful (you asked|for the space))",
      ],
      think_seconds: 3,
      tr_hint:
        "Dürüst + olgun duygu paylaşımı. 'Terapi Bahsetme — Acilim' bağlamında. Türk öğrenci 'fine' der; bunu yapma; SPESİFİK + dürüst.",
      ideal_response:
        "Honestly? Mixed — still processing parts of it. Day by day.",
    },
    {
      id: "ex.fd49.tt1",
      type: "thinking_trap",
      difficulty: 3,
      cefr_band: "B1",
      tr_thought: "Konuşmamız lazım, çok önemli",
      wrong_en: "We must talk, very important.",
      right_en: "I'd love to talk something through with you — is now a good time?",
      why_tr:
        "Türk öğrenci 'konuşmamız lazım + önemli' kalıbını birebir çevirir = emir tonu + 'must' baskı yaratır + 'very important' dramatik. 'Terapi Bahsetme — Acilim' gibi hassas konuda yumuşatma şart: 'I'd love to talk' (davet) + 'is now a good time' (saygılı zaman kontrolü).",
    },
    {
      id: "ex.fd49.rq1",
      type: "recall_quiz",
      difficulty: 3,
      cefr_band: "B1",
      items: [
        {
          q: "Önemli konuyu açarken en olgun yaklaşım?",
          options: [
            "'We must talk' (emir)",
            "'I'd love to talk — good time?' (davet + saygı)",
            "Sus, bekle",
            "Direkt konuya gir",
          ],
          correct: 1,
          tr_explanation:
            "Davet + zaman kontrolü = saygılı + güvenli alan. Emir = baskı = savunmaya iter.",
        },
        {
          q: "Karşı taraf 'how are you feeling?' sorduğunda?",
          options: [
            "Tek kelime 'fine'",
            "Spesifik + dürüst + 'still processing'",
            "Yalan",
            "Konu değiştir",
          ],
          correct: 1,
          tr_explanation:
            "'Fine' = kapalı kapı. Modern dating: spesifik duygu paylaşımı = bağ kurma.",
        },
        {
          q: "'Day by day' kalıbı:",
          options: [
            "Günden güne (zaman içinde)",
            "Her gün ayrı",
            "Yapısal yanlış",
            "Hızla",
          ],
          correct: 0,
          tr_explanation:
            "'Day by day' = adım adım, zamanla. Zor süreçleri işlerken sağlıklı.",
        },
        {
          q: "'Been sitting with something' anlamı?",
          options: [
            "Bir şeyle oturmak",
            "Bir konuyu içselleştirmek/üzerinde düşünmek",
            "Beklemek",
            "Yapısal yanlış",
          ],
          correct: 1,
          tr_explanation:
            "'Sitting with' = düşünmek, sindirmek (mecaz). Olgun + öz farkındalık.",
        },
        {
          q: "Türk hatası: 'We must talk, very important'",
          options: [
            "Çok formal",
            "Emir + drama tonu = savunmaya iter",
            "Yapısal yanlış",
            "Çok kibar",
          ],
          correct: 1,
          tr_explanation:
            "'Must talk' = emir. 'Very important' = drama. Modern: davet + bağlam.",
        },
      ],
    },
  ],
};

export const flirtDeep_50: BundledLesson = {
  id: "flirt.deep.50",
  skill_id: "flirt.recovery",
  index: 50,
  title: "Tekrar Asik Olma — Taninma Ani",
  description: "Yeni biriyle altinci hafta. Asik oldugunu fark ediyorsun. Soyleme zamani.",
  estimated_minutes: 7,
  exercises: [
    {
      id: "ex.fd50.1",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "I'm falling for you",
      tr_translation: "Sana asik oluyorum (asamali kalip, 'love' agirligi olmadan)",
      example: "I think I'm falling for you — and it surprised me.",
      example_tr: "Sana asik oluyorum sanirim — beni sasirtti.",
    },
    {
      id: "ex.fd50.2",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B2",
      word_or_phrase: "didn't see this coming",
      tr_translation: "Bunu beklemiyordum (yumusak surprise itirafi)",
      example: "I didn't see this coming. Honestly.",
      example_tr: "Bunu beklemiyordum. Gercekten.",
    },
    {
      id: "ex.fd50.vt3",
      type: "vocab_tile",
      difficulty: 5,
      cefr_band: "C1",
      word_or_phrase: "guarded",
      tr_translation: "Korunmak (eski iliski sonrasi varsayilan)",
      example: "Expected to feel more guarded — turns out, not with you.",
      example_tr: "Daha korunmali hissedecegimi sandim — meger, seninle degil.",
    },
    {
      id: "ex.fd50.vt4",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "C1",
      word_or_phrase: "its own thing",
      tr_translation: "Kendine ozgu seyimiz (eski ile karsilastirmadan)",
      example: "You're not a replacement — this is its own thing.",
      example_tr: "Sen yedek degilsin — bu kendine ozgu bir sey.",
    },
    {
      id: "ex.fd50.vt5",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "C1",
      word_or_phrase: "not match my pace",
      tr_translation: "Benim tempoma uymak zorunda degilsin (saygili davet)",
      example: "No pressure to match my pace — you say it when you say it.",
      example_tr: "Benim tempoma uymak zorunda degilsin — sen ne zaman dersen.",
    },
    {
      id: "ex.fd50.vt6",
      type: "vocab_tile",
      difficulty: 5,
      cefr_band: "C1",
      word_or_phrase: "this moment is enough",
      tr_translation: "Bu an yeterli (olgun varlik kalibi)",
      example: "Let's not say the bigger word yet — this moment is enough.",
      example_tr: "Buyuk kelimeyi henuz soylemeyelim — bu an yeterli.",
    },
    {
      id: "ex.fd50.3",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description: "Altinci haftada. Yatakta yatip konusuyorsunuz. Duygu cikti — fark ediyorsun.",
      npc_role: "New partner",
      setting: "Quiet evening — recognizing love after recovery",
      turns: [
        {
          speaker: "npc",
          message: "Why are you looking at me like you just realized something?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(because i |honestly because i )(just did)",
            "(didn'?t see |i didn'?t see this coming )",
            "(was thinking about |kept thinking about ) (this week)",
            "(after the year i had |after everything last year )(i didn'?t expect this)",
            "(i think i'?m |i'?m falling for you )",
            "(this is weird |it'?s weird ) (to say out loud)",
          ],
          model_answers: ["Just realized — I'm falling for you. Didn't see this coming."],
          hint_tr: "Itiraf: 'Just realized — I'm falling for you. Didn't see this coming.'",
        },
        {
          speaker: "npc",
          message: "Oh — okay — say more.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(after my last |after the year of healing ) (i thought i'?d be slower)",
            "(thought i'?d feel |expected to feel )(more guarded)",
            "(but you make it |it'?s easy with you )",
            "(don'?t feel |i don'?t feel like i'?m comparing )",
            "(it'?s not |you'?re not a replacement )",
            "(this is its own |it'?s its own thing)",
          ],
          model_answers: ["Expected to feel more guarded. You make it easy. It's its own thing."],
          hint_tr: "Detay: 'Expected to feel more guarded. You make it easy. It's its own thing.'",
        },
        {
          speaker: "npc",
          message: "I've been waiting for you to say something. I felt it but didn't want to push.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thank you for |grateful you )(waiting)",
            "(needed to get |had to get here on my own )",
            "(are you |you'?re falling too )\\?",
            "(can you say it |can i hear it back )",
            "(this is the moment |i think this is the moment we both name it )",
            "(no pressure |no pressure to match my pace )",
          ],
          model_answers: ["Grateful you waited. Can I hear it back?"],
          hint_tr: "Davet: 'Grateful you waited. Can I hear it back?'",
        },
        {
          speaker: "npc",
          message: "I'm falling for you too. Have been for weeks.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(this is the |this is the best version of a confession )",
            "(weeks |you'?ve been carrying this for weeks )",
            "(i'?m the slow one |i'?m the slow one — accepted )",
            "(thank you for |grateful you held it for both of us )",
            "(let'?s |let'?s not say the bigger word yet — just sit here )",
            "(this is enough |this moment is enough for tonight )",
          ],
          model_answers: ["You carried it for both of us. Let's sit here — this is enough for tonight."],
          hint_tr: "Olgun an: 'You carried it for both of us. Let's sit here — this is enough for tonight.'",
        },
        {
          speaker: "npc",
          message: "Yeah. Tonight we just sit with this. We have time.",
        },
      ],
    },
    {
      id: "ex.fd50.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      cefr_band: "B1",
      template: "I want to ___ with you about ___ — ___?",
      slots: [
        { accepted: ["talk honestly", "be open", "share something", "have a real conversation"] },
        { accepted: ["this", "where we're at", "how I'm feeling", "what's going on"] },
        { accepted: ["is now a good time", "can we sit down for a bit", "are you up for it", "would that be okay"] },
      ],
      tr_hint:
        "Önemli konu açma kalıbı: niyet + konu + saygılı zaman sorusu. 'Tekrar Asik Olma — Taninma Ani' bağlamında — Türk öğrenci direkt konuya girer; bu sağlam ilk cümle değil. Yumuşatma + zaman kontrolü = saygılı + güvenli alan.",
      example_filled:
        "I want to talk honestly with you about where we're at — is now a good time?",
    },
    {
      id: "ex.fd50.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      cefr_band: "B1",
      turns: [
        { speaker: "npc", text: "What's on your mind?" },
        { speaker: "user" },
        { speaker: "npc", text: "Okay — I'm listening." },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(been (thinking|sitting) with|wanted to talk about)",
        "(might sound|this might sound) (.+)",
        "(want to (open up|be honest|share))",
        "(no pressure|just|honestly) (.+)",
        "(can we|could we) (.+)",
      ],
      tr_hint:
        "Konuyu açma — yumuşatma + dürüst niyet. 'Tekrar Asik Olma — Taninma Ani' senaryosunda 'Been thinking about us — wanted to be honest. Can we talk?' tarzı.",
      ideal_answer:
        "Been thinking about something — want to be honest with you. Can we talk through it?",
    },
    {
      id: "ex.fd50.lr1",
      type: "listen_respond",
      difficulty: 3,
      cefr_band: "B1",
      npc_line: "How are you actually feeling about this?",
      accepted_patterns: [
        "(honestly|truthfully) (.+) (good|complicated|mixed)",
        "(part of me|some of me) (.+)",
        "(been (processing|sitting with|figuring out))",
        "(still working through|day by day)",
        "(grateful (you asked|for the space))",
      ],
      think_seconds: 3,
      tr_hint:
        "Dürüst + olgun duygu paylaşımı. 'Tekrar Asik Olma — Taninma Ani' bağlamında. Türk öğrenci 'fine' der; bunu yapma; SPESİFİK + dürüst.",
      ideal_response:
        "Honestly? Mixed — still processing parts of it. Day by day.",
    },
    {
      id: "ex.fd50.tt1",
      type: "thinking_trap",
      difficulty: 3,
      cefr_band: "B1",
      tr_thought: "Konuşmamız lazım, çok önemli",
      wrong_en: "We must talk, very important.",
      right_en: "I'd love to talk something through with you — is now a good time?",
      why_tr:
        "Türk öğrenci 'konuşmamız lazım + önemli' kalıbını birebir çevirir = emir tonu + 'must' baskı yaratır + 'very important' dramatik. 'Tekrar Asik Olma — Taninma Ani' gibi hassas konuda yumuşatma şart: 'I'd love to talk' (davet) + 'is now a good time' (saygılı zaman kontrolü).",
    },
    {
      id: "ex.fd50.rq1",
      type: "recall_quiz",
      difficulty: 3,
      cefr_band: "B1",
      items: [
        {
          q: "Önemli konuyu açarken en olgun yaklaşım?",
          options: [
            "'We must talk' (emir)",
            "'I'd love to talk — good time?' (davet + saygı)",
            "Sus, bekle",
            "Direkt konuya gir",
          ],
          correct: 1,
          tr_explanation:
            "Davet + zaman kontrolü = saygılı + güvenli alan. Emir = baskı = savunmaya iter.",
        },
        {
          q: "Karşı taraf 'how are you feeling?' sorduğunda?",
          options: [
            "Tek kelime 'fine'",
            "Spesifik + dürüst + 'still processing'",
            "Yalan",
            "Konu değiştir",
          ],
          correct: 1,
          tr_explanation:
            "'Fine' = kapalı kapı. Modern dating: spesifik duygu paylaşımı = bağ kurma.",
        },
        {
          q: "'Day by day' kalıbı:",
          options: [
            "Günden güne (zaman içinde)",
            "Her gün ayrı",
            "Yapısal yanlış",
            "Hızla",
          ],
          correct: 0,
          tr_explanation:
            "'Day by day' = adım adım, zamanla. Zor süreçleri işlerken sağlıklı.",
        },
        {
          q: "'Been sitting with something' anlamı?",
          options: [
            "Bir şeyle oturmak",
            "Bir konuyu içselleştirmek/üzerinde düşünmek",
            "Beklemek",
            "Yapısal yanlış",
          ],
          correct: 1,
          tr_explanation:
            "'Sitting with' = düşünmek, sindirmek (mecaz). Olgun + öz farkındalık.",
        },
        {
          q: "Türk hatası: 'We must talk, very important'",
          options: [
            "Çok formal",
            "Emir + drama tonu = savunmaya iter",
            "Yapısal yanlış",
            "Çok kibar",
          ],
          correct: 1,
          tr_explanation:
            "'Must talk' = emir. 'Very important' = drama. Modern: davet + bağlam.",
        },
      ],
    },
  ],
};

// ============================================================
// EXPORT ARRAY — all 50 lessons in arc order
// ============================================================

export const flirtDeepLessons: BundledLesson[] = [
  // Phase 1 — First Dates
  flirtDeep_1, flirtDeep_2, flirtDeep_3, flirtDeep_4, flirtDeep_5,
  flirtDeep_6, flirtDeep_7, flirtDeep_8, flirtDeep_9, flirtDeep_10,
  // Phase 2 — Building Intimacy
  flirtDeep_11, flirtDeep_12, flirtDeep_13, flirtDeep_14, flirtDeep_15,
  flirtDeep_16, flirtDeep_17, flirtDeep_18, flirtDeep_19, flirtDeep_20,
  // Phase 3 — Mid-Relationship
  flirtDeep_21, flirtDeep_22, flirtDeep_23, flirtDeep_24, flirtDeep_25,
  flirtDeep_26, flirtDeep_27, flirtDeep_28, flirtDeep_29, flirtDeep_30,
  // Phase 4 — Crisis
  flirtDeep_31, flirtDeep_32, flirtDeep_33, flirtDeep_34, flirtDeep_35,
  flirtDeep_36, flirtDeep_37, flirtDeep_38, flirtDeep_39, flirtDeep_40,
  // Phase 5 — Recovery
  flirtDeep_41, flirtDeep_42, flirtDeep_43, flirtDeep_44, flirtDeep_45,
  flirtDeep_46, flirtDeep_47, flirtDeep_48, flirtDeep_49, flirtDeep_50,
];
