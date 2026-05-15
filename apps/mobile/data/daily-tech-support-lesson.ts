// Daily - Tech Support lessons
// Skill: daily.tech_support (4 lessons)

import type { BundledLesson } from "./cafe-lesson";

// ============================================================
// Lesson 36.1 — Sorunu Tarif Et
// ============================================================
export const dailyTechSupportLesson_36_1: BundledLesson = {
  id: "daily.tech_support.36.1",
  skill_id: "daily.tech_support",
  index: 1,
  title: "Sorunu Tarif Et",
  description:
    "Tech support'a sorununu net anlat: 'my internet is down', 'the screen is frozen', error code'lar, 'ever since the update'.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.dts36.1.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "my internet is down",
      tr_translation: "İnternetim çalışmıyor / kesik",
      example: "Hi, my internet is down — it's been out for about an hour.",
      example_tr: "Merhaba, internetim kesik — yaklaşık bir saattir yok.",
    },
    {
      id: "ex.dts36.1.2",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Güncellemeden beri ekran donuyor.",
      target: "The screen has been freezing ever since the update.",
      accepted_variants: [
        "Screen keeps freezing since the last update.",
        "Ever since the update, the screen freezes.",
        "The screen freezes — started after the update.",
        "My screen has been freezing since I updated.",
        "Since the update, the screen keeps freezing.",
      ],
      tr_hint:
        "'Ever since the update' = guncellemeden beri. Sebep + zaman = agent hizli anlar.",
    },
    {
      id: "ex.dts36.1.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "I'm getting an error ___ — it says E-404.",
      answer: "code",
      distractors: ["number", "message", "sign", "alert"],
      tr_hint:
        "'Error code' = hata kodu. Agent ilk soracagi sey — hazir tut.",
    },
    {
      id: "ex.dts36.1.4",
      type: "word_order",
      difficulty: 3,
      scrambled_tokens: [
        "The",
        "app",
        "keeps",
        "crashing",
        "when",
        "I",
        "open",
        "it",
      ],
      correct_sentence: "The app keeps crashing when I open it",
      tr_translation: "Uygulama her açtığımda çöküyor.",
    },
    {
      id: "ex.dts36.1.5",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "Not working.",
      correct_sentence:
        "Hi, my Wi-Fi has been down since 9am — modem lights are red. Error code says E-404.",
      tr_explanation:
        "'Not working' = ne calismiyor belli degil + zaman yok + detay yok. Doğru: ne + ne zaman + gozlemledigin detay + error code.",
    },
    {
      id: "ex.dts36.1.6",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "ISP tech support'unu aradın — internet yok. Sorunu hizla + net anlatmalisin.",
      npc_role: "Tech Support Agent",
      setting: "Customer support phone call",
      turns: [
        {
          speaker: "npc",
          message:
            "Tech support, this is Sarah. What's going on today?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(hi|hello|hey)",
            "(my (internet|wi-?fi|connection|router|modem)) (is|has been) (down|out|not working)",
            "(no internet|can'?t connect|connection (dropped|lost))",
            "(since|for) (about |around )?(\\d+ (hour|minute|day)|this morning|last night|yesterday)",
            "(modem|router) (lights?|is|shows)",
            "(red|blinking|off|not on)",
          ],
          hint_tr:
            "Net: 'Hi, my internet has been down since 9am. Modem lights are red.'",
        },
        {
          speaker: "npc",
          message:
            "Got it. Any error message on screen, or is it just no connection?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(there'?s|i'?m getting|i see) an? (error|message|code)",
            "(it says|says|reads|displays)",
            "(e-?\\d+|error \\d+|code \\d+|\\d{3})",
            "(no error|nothing on screen|just blank|just no connection)",
            "(ever since|after|started (with|after)) (the update|reboot|last night)",
            "(no signal|won'?t connect)",
          ],
          hint_tr:
            "Error code varsa hemen ver: 'It says E-404. Started after last night's update.'",
        },
        {
          speaker: "npc",
          message:
            "Perfect, that helps narrow it down. Let me check the line on my end.",
        },
      ],
    },
    {
      id: "ex.dts36.1.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Tech support'a sorunu tarif ederken EN onemli ne?",
          options: [
            "Cok bagir",
            "Ne + ne zaman + error code + ne degisti (update vs.) — 4 nokta",
            "Sadece 'broken'",
            "Hicbir sey",
          ],
          correct_index: 1,
          tr_explanation:
            "Agent tahmin oyunu oynamaz. 4 nokta verirsen 5 dakikada cozulur.",
        },
        {
          question: "'Ever since the update' niye onemli?",
          options: [
            "Yararsiz",
            "Sebep-sonuc kuruyor — agent doğrudan update bug'ina bakar",
            "Cok agir",
            "Hicbir sey",
          ],
          correct_index: 1,
          tr_explanation:
            "Update sonrasi bozulan sey = known issue olabilir. Agent hemen bilgi tabanini acar.",
        },
        {
          question: "Error code niye yazip / okurken onemli?",
          options: [
            "Onemsiz",
            "Spesifik tani — agent tam o hatayi arar",
            "Yararsiz",
            "Hicbir sey",
          ],
          correct_index: 1,
          tr_explanation:
            "'It doesn't work' vs 'E-404 = DNS resolution fail' — ikincisi 30 saniyede cozulur.",
        },
      ],
    },
    {
      id: "ex.dts36.1.8",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase: "My internet has been down since this morning.",
      ipa: "maɪ ˈɪntərnɛt həz bɪn daʊn sɪns ðɪs ˈmɔːrnɪŋ",
      tr_hint:
        "Tech support acilis. 'Has been down' = present perfect (kesik durumda). 'Since this morning' = sabahtan beri.",
    },
    {
      id: "ex.dts36.1.9",
      type: "speech_shadowing",
      difficulty: 4,
      native_text: "I'm getting an error code that says E four oh four.",
      voice_hint: "male_us",
      tr_hint:
        "Error code okuma. 'E four oh four' = E-404. Tek tek harf+rakam = net.",
    },
    {
      id: "ex.dts36.1.10",
      type: "listen_and_transcribe",
      difficulty: 5,
      audio_text: "Can you describe exactly what happens when it crashes?",
      transcription_target: "Can you describe exactly what happens when it crashes?",
      tr_hint:
        "Agent klasik sorusu. 'Describe exactly' = tam tarif et. 'When it crashes' = çöktüğünde.",
    },
    {
      id: "ex.dts36.1.11",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "error code",
      tr_translation: "Hata kodu",
      example: "The error code reads E-404 — DNS resolution.",
      example_tr: "Hata kodu E-404 — DNS çözümleme.",
    },
    {
      id: "ex.dts36.1.12",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "Broken now. Fix.",
      correct_sentence:
        "My Wi-Fi has been down for two hours — modem shows a red light and no error code yet.",
      tr_explanation:
        "Tek kelime + emir. Doğru: ne (Wi-Fi) + ne kadar (two hours) + gözlem (red light) + kanit (no error code).",
    },
  ],
};

// ============================================================
// Lesson 36.2 — Doğrulama Süreci
// ============================================================
export const dailyTechSupportLesson_36_2: BundledLesson = {
  id: "daily.tech_support.36.2",
  skill_id: "daily.tech_support",
  index: 2,
  title: "Doğrulama Süreci",
  description:
    "Agent 'have you tried...?' diyor — neyi denedigini soyleyip vakit kaybetme: 'I've already tried restarting', 'I've cleared the cache', 'I rebooted twice'.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.dts36.2.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "I've already tried",
      tr_translation: "Zaten denedim",
      example: "I've already tried restarting the router — no luck.",
      example_tr: "Modemi yeniden başlatmayı zaten denedim — işe yaramadı.",
    },
    {
      id: "ex.dts36.2.2",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source: "Önbelleği temizledim ve uygulamayı yeniden yükledim — hala aynı sorun.",
      target: "I've cleared the cache and reinstalled the app — same issue.",
      accepted_variants: [
        "Already cleared the cache and reinstalled — still broken.",
        "Cleared cache, reinstalled app — no change.",
        "Tried clearing cache and a fresh install — same problem.",
        "Done the cache clear and reinstall — issue persists.",
      ],
      tr_hint:
        "'I've cleared the cache' = present perfect — denedigini gosterir. Agent ayni adimi tekrarlatmasin.",
    },
    {
      id: "ex.dts36.2.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "I ___ the router twice already.",
      answer: "rebooted",
      distractors: ["restart", "open", "shut", "fixed"],
      tr_hint:
        "'Reboot' = yeniden baslatmak (cihaz). 'Restart' de olur ama 'reboot' tech kelimesi.",
    },
    {
      id: "ex.dts36.2.4",
      type: "word_order",
      difficulty: 3,
      scrambled_tokens: [
        "I've",
        "tried",
        "that",
        "already",
        "twice",
      ],
      correct_sentence: "I've tried that already twice",
      tr_translation: "Onu zaten iki kez denedim.",
    },
    {
      id: "ex.dts36.2.5",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "I do not know what is restart.",
      correct_sentence:
        "I've already rebooted the modem twice — unplugged for 30 seconds each time. Still no connection.",
      tr_explanation:
        "Belirsiz cevap = agent ayni adimdan basa donduruyor. Doğru: spesifik adim + kac kez + sonuc.",
    },
    {
      id: "ex.dts36.2.6",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Agent troubleshooting basliyor — sen zaten temel adimlari yaptin, vakit kaybetme.",
      npc_role: "Tech Support Agent",
      setting: "Customer support phone call",
      turns: [
        {
          speaker: "npc",
          message:
            "Okay, first thing — can you try restarting your router for me?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i'?ve|i have) (already|just) (tried|done|rebooted|restarted)",
            "(rebooted|restarted|unplugged|power cycled) (it|the (router|modem)) (twice|three times|several times|already)",
            "(unplugged for|left it off for) (30 seconds|a minute|\\d+ (seconds|minutes))",
            "(still|same) (no (connection|signal|internet)|issue|problem|broken)",
            "(no luck|didn'?t (work|help)|no change)",
            "(what'?s next|anything else)",
          ],
          hint_tr:
            "Yaptigini soyle: 'Already rebooted twice — unplugged 30 seconds each. Still no signal.'",
        },
        {
          speaker: "npc",
          message:
            "Good, that saves time. Have you cleared the cache on the device?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|yep|yeah|done that)",
            "(i'?ve|i have) (cleared|wiped|reset)",
            "(the cache|cache|app data|browser data)",
            "(and|also) (reinstalled|did a fresh install|uninstalled)",
            "(no change|still (same|broken|no luck))",
            "(what (else|now)|next step|where to from here)",
          ],
          hint_tr:
            "Liste seklinde: 'Yes — cleared cache, reinstalled the app. No change.'",
        },
        {
          speaker: "npc",
          message:
            "Alright, let me run a line test from our side then.",
        },
      ],
    },
    {
      id: "ex.dts36.2.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Agent 'have you tried X?' diyince ne yapmali?",
          options: [
            "Sus",
            "Spesifik soyle: 'Yes, tried twice — 30 sec unplug each.' Vakit kaybetme.",
            "Kapat",
            "Bagir",
          ],
          correct_index: 1,
          tr_explanation:
            "Standart troubleshooting script var. Onun disina cikmak icin yaptigini spesifik kanitla.",
        },
        {
          question: "'I've already tried' kalibinin AVANTAJI?",
          options: [
            "Yararsiz",
            "Present perfect = zaman belirsiz ama hala etkili. Agent ayni adimi tekrarlatmaz.",
            "Cok agir",
            "Hicbir sey",
          ],
          correct_index: 1,
          tr_explanation:
            "Direkt 'try X' demek yerine 'Already tried X' = bir ust adima geceriz.",
        },
        {
          question: "'Reboot' ve 'restart' farki?",
          options: [
            "Aynisi",
            "Tech contextinde 'reboot' = cihazi tamamen kapat-ac. 'Restart' yazilim katmaninda olabilir.",
            "Hicbir sey",
            "Yararsiz",
          ],
          correct_index: 1,
          tr_explanation:
            "'Reboot the router' = elektrigi kes. 'Restart the app' = uygulamayi kapat-ac. Ust ust farkli.",
        },
      ],
    },
    {
      id: "ex.dts36.2.8",
      type: "pronounce_phrase",
      difficulty: 4,
      phrase: "I've already rebooted the router twice.",
      ipa: "aɪv ɔːlˈrɛdi riːˈbuːtɪd ðə ˈruːtər twaɪs",
      tr_hint:
        "Present perfect kalibi. 'I've already' bağlanır → 'ayv-ɔl-rə-di'. 'Rebooted twice' net biten.",
    },
    {
      id: "ex.dts36.2.9",
      type: "speech_shadowing",
      difficulty: 4,
      native_text: "I've cleared the cache and reinstalled the app.",
      voice_hint: "female_us",
      tr_hint:
        "Iki adim ozeti. 'Cleared the cache' birleşik. 'Reinstalled the app' bağlanır.",
    },
    {
      id: "ex.dts36.2.10",
      type: "listen_and_transcribe",
      difficulty: 5,
      audio_text: "Let me put you on a brief hold while I run diagnostics.",
      transcription_target: "Let me put you on a brief hold while I run diagnostics.",
      tr_hint:
        "Agent gecis cumlesi. 'Brief hold' = kisa bekleme. 'Run diagnostics' = tani calistir.",
    },
    {
      id: "ex.dts36.2.11",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "power cycle",
      tr_translation: "Elektriği kes-aç (cihazi tamamen yeniden başlat)",
      example: "I already power cycled the modem for sixty seconds.",
      example_tr: "Modeme zaten 60 saniyelik power cycle yaptım.",
    },
    {
      id: "ex.dts36.2.12",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "Restart yes did. Same broken.",
      correct_sentence:
        "I've already restarted twice — unplugged for thirty seconds each time. Still no connection.",
      tr_explanation:
        "Belirsiz + grammatik degil. Doğru: present perfect + spesifik adim (unplugged 30s) + sonuc (still no connection).",
    },
  ],
};

// ============================================================
// Lesson 36.3 — Eskalasyon
// ============================================================
export const dailyTechSupportLesson_36_3: BundledLesson = {
  id: "daily.tech_support.36.3",
  skill_id: "daily.tech_support",
  index: 3,
  title: "Eskalasyon",
  description:
    "Agent çözemiyor — saygılı ama net: 'can I speak to your supervisor', 'escalate this', 'transfer me to billing'.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.dts36.3.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "escalate this",
      tr_translation: "Bunu üst kademeye taşı / yükselt",
      example: "Could we escalate this to your supervisor, please?",
      example_tr: "Bunu amirine yükseltebilir miyiz, lütfen?",
    },
    {
      id: "ex.dts36.3.2",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source: "Beni faturalandırma bölümüne yönlendirebilir misin?",
      target: "Could you transfer me to billing, please?",
      accepted_variants: [
        "Can you put me through to billing?",
        "Transfer me to the billing department, please.",
        "Could I be transferred to billing?",
        "Mind transferring me to billing?",
        "Put me through to billing, please.",
      ],
      tr_hint:
        "'Transfer me to X' = beni X'e yonlendir. Yanlis departmandaysan kullan.",
    },
    {
      id: "ex.dts36.3.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "Can I speak to your ___, please?",
      answer: "supervisor",
      distractors: ["boss", "chief", "head", "leader"],
      tr_hint:
        "'Supervisor' = amir, sef. Customer service'de standart eskalasyon kelimesi.",
    },
    {
      id: "ex.dts36.3.4",
      type: "word_order",
      difficulty: 3,
      scrambled_tokens: [
        "I'd",
        "like",
        "to",
        "escalate",
        "this",
        "please",
      ],
      correct_sentence: "I'd like to escalate this please",
      tr_translation: "Bunu yukseltmek istiyorum, lutfen.",
    },
    {
      id: "ex.dts36.3.5",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "Give me your boss now!",
      correct_sentence:
        "I appreciate your help, but could we escalate this to a supervisor? This needs a higher-level fix.",
      tr_explanation:
        "Saldirgan ton + 'boss' kelimesi = agent direnir. Doğru: tesekkur + sebep + saygili eskalasyon.",
    },
    {
      id: "ex.dts36.3.6",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Agent yetkisi yetmiyor — sorunu cozemedi. Saygili bir sekilde eskalasyon isteyeceksin.",
      npc_role: "Tech Support Agent",
      setting: "Customer support phone call",
      turns: [
        {
          speaker: "npc",
          message:
            "Unfortunately I can't authorize a refund on this — that's outside my access.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i (understand|get it|hear you)|that'?s fair|makes sense|no problem)",
            "(could|can) (we|i) (escalate|speak to|talk to|have)",
            "(your )?(supervisor|manager|someone (with|who has) (authority|access))",
            "(can you (transfer|put me through to))",
            "(would|could) you (escalate|bump this up)",
            "(higher-?level|next tier|someone who can)",
          ],
          hint_tr:
            "Saygili: 'I understand. Could we escalate this to your supervisor?'",
        },
        {
          speaker: "npc",
          message:
            "Sure, let me transfer you. May I get a brief on what's been done so they can pick up?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(absolutely|of course|sure|happy to)",
            "(so far|up to now|to recap)",
            "(i'?ve|i have) (tried|done|cleared|rebooted|reinstalled)",
            "(error code|case number|reference number) (is|was)",
            "(\\w+-?\\d+|\\d{4,})",
            "(no resolution|still (broken|no fix|same))",
          ],
          hint_tr:
            "Ozet ver: 'Sure — tried reboot twice, cleared cache, error code E-404. No resolution.'",
        },
        {
          speaker: "npc",
          message:
            "Got it. Transferring you to a Tier 2 specialist now. Please hold.",
        },
      ],
    },
    {
      id: "ex.dts36.3.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Eskalasyonun SAYGILI formulu?",
          options: [
            "'Give me boss now'",
            "'I appreciate your help, but could we escalate to a supervisor?' = tesekkur + saygili istek",
            "'You suck'",
            "Bagir",
          ],
          correct_index: 1,
          tr_explanation:
            "Agent senin yerine supervisor'a iyi referans verir = daha hizli cozum.",
        },
        {
          question: "Transfer öncesi 'brief' niye verilir?",
          options: [
            "Yararsiz",
            "Yeni kisinin bastan baslamasini engeller = ikinci kez ayni hikayeyi anlatmazsin",
            "Cok agir",
            "Hicbir sey",
          ],
          correct_index: 1,
          tr_explanation:
            "Reference number + denedigin adimlar + error code = supervisor 30 saniyede yetisir.",
        },
        {
          question: "'Escalate' vs 'transfer' farki?",
          options: [
            "Aynisi",
            "'Escalate' = ust seviyeye (supervisor). 'Transfer' = yan departmana (billing, tech).",
            "Hicbir sey",
            "Yararsiz",
          ],
          correct_index: 1,
          tr_explanation:
            "Yetki sorunu = 'escalate'. Yanlis departman = 'transfer'. Doğru kelimeyi sec = direkt yere gider.",
        },
      ],
    },
    {
      id: "ex.dts36.3.8",
      type: "pronounce_phrase",
      difficulty: 4,
      phrase: "Could I speak to a supervisor, please?",
      ipa: "kʊd aɪ spiːk tə ə ˈsuːpərvaɪzər pliːz",
      tr_hint:
        "Saygili eskalasyon. 'Could I speak to' birleşik. 'Supervisor' vurgu ilk hece: SU-per-vay-zer.",
    },
    {
      id: "ex.dts36.3.9",
      type: "speech_shadowing",
      difficulty: 5,
      native_text: "I appreciate your help, but I'd like to escalate this.",
      voice_hint: "male_us",
      tr_hint:
        "Diplomatik eskalasyon. 'I appreciate your help' önce tesekkur. 'I'd like to escalate' = saygili istek.",
    },
    {
      id: "ex.dts36.3.10",
      type: "listen_and_transcribe",
      difficulty: 5,
      audio_text: "I'll transfer you to our tier two support team.",
      transcription_target: "I'll transfer you to our tier two support team.",
      tr_hint:
        "Agent gecis cumlesi. 'Tier two' = ikinci seviye (üst). 'Support team' = destek ekibi.",
    },
    {
      id: "ex.dts36.3.11",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "escalate this",
      tr_translation: "Bunu üst kademeye taşı",
      example: "Could we escalate this to someone with refund authority?",
      example_tr: "Bunu iade yetkisi olan birine yükseltebilir miyiz?",
    },
    {
      id: "ex.dts36.3.12",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "Boss now! You no help!",
      correct_sentence:
        "I appreciate your time, but this needs higher-level access — could you transfer me to a supervisor?",
      tr_explanation:
        "Saldırgan + 'boss'. Doğru: tesekkur + sebep (higher-level access) + saygili transfer istegi.",
    },
  ],
};

// ============================================================
// Lesson 36.4 — Çözüm + Onay
// ============================================================
export const dailyTechSupportLesson_36_4: BundledLesson = {
  id: "daily.tech_support.36.4",
  skill_id: "daily.tech_support",
  index: 4,
  title: "Çözüm + Onay",
  description:
    "Agent çözüm önerdi — test et + kanit al: 'let me test it', 'is there a ticket number?', 'when can I expect a refund'.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.dts36.4.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "let me test it",
      tr_translation: "Bir test edeyim",
      example: "Let me test it real quick before we hang up.",
      example_tr: "Telefonu kapatmadan önce hızlıca test edeyim.",
    },
    {
      id: "ex.dts36.4.2",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source: "İadeyi ne zaman bekleyebilirim?",
      target: "When can I expect the refund?",
      accepted_variants: [
        "When should I expect a refund?",
        "How long until the refund hits?",
        "What's the timeline for the refund?",
        "When will the refund go through?",
        "Any ETA on the refund?",
      ],
      tr_hint:
        "'When can I expect X' = X'i ne zaman beklemeliyim. Net timeline sormak icin standart kalip.",
    },
    {
      id: "ex.dts36.4.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "Is there a ___ number for this case?",
      answer: "ticket",
      distractors: ["account", "phone", "session", "call"],
      tr_hint:
        "'Ticket number' = destek talebi numarasi. Sorunsuz sonradan aramayi sagliyor.",
    },
    {
      id: "ex.dts36.4.4",
      type: "word_order",
      difficulty: 3,
      scrambled_tokens: [
        "Let",
        "me",
        "test",
        "it",
        "before",
        "we",
        "hang",
        "up",
      ],
      correct_sentence: "Let me test it before we hang up",
      tr_translation: "Telefonu kapatmadan once test edeyim.",
    },
    {
      id: "ex.dts36.4.5",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "Okay, bye.",
      correct_sentence:
        "Let me test the connection real quick — yes, it's working. Could I get a ticket number in case it breaks again?",
      tr_explanation:
        "Test etmeden kapatma + kanit istememe = sorun tekrar gelirse bastan basliyorsun. Doğru: test + ticket number.",
    },
    {
      id: "ex.dts36.4.6",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Agent fix uyguladi, calistigini soyluyor. Sen test edip kanit + timeline alacaksin.",
      npc_role: "Tech Support Agent",
      setting: "Customer support phone call",
      turns: [
        {
          speaker: "npc",
          message:
            "Okay, I've reset the line on our end. Should be back up — try it now.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(let me|i'?ll|give me a sec to) (test|check|try) (it|that|the connection)",
            "(one (sec|moment|minute)|hold on)",
            "(yes|yeah|yep|alright)",
            "(it'?s (working|up|back|fine)|connection'?s back|we'?re back)",
            "(loading|fast|connected)",
            "(thanks|appreciate (it|that))",
          ],
          hint_tr:
            "Hemen test: 'Let me test it real quick — one sec. Yes, it's working now.'",
        },
        {
          speaker: "npc",
          message:
            "Great. Anything else before we wrap up?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(could|can) (i (get|have)|you give me) (a )?(ticket|reference|case) number",
            "(is there a) (ticket|reference|case) number",
            "(in case|if) (it (breaks|comes back|happens) again|this happens again)",
            "(when (can|should) i expect|how long until|any eta on) (the refund|credit|adjustment)",
            "(will (the )?refund|when (will|does)) (show up|hit|go through|process)",
            "(get something in writing|email confirmation)",
          ],
          hint_tr:
            "Iki sey iste: ticket number + refund timeline. 'Could I get a ticket number? And when can I expect the refund?'",
        },
        {
          speaker: "npc",
          message:
            "Sure — ticket is TS-77821. Refund'll process in 3-5 business days.",
        },
      ],
    },
    {
      id: "ex.dts36.4.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Kapatmadan once HANGI 3 sey lazim?",
          options: [
            "Sus + kapa + git",
            "Test + ticket number + refund/timeline = 3 nokta. Geri donus icin temel.",
            "Sadece tesekkur",
            "Hicbir sey",
          ],
          correct_index: 1,
          tr_explanation:
            "Test etmeden = sorun devam ediyor olabilir. Ticket = geri ararken bastan baslamazsin. Timeline = beklenti net.",
        },
        {
          question: "'When can I expect the refund' niye onemli?",
          options: [
            "Yararsiz",
            "Net deadline yoksa agent unutur. 'In 3-5 days' = takip noktasi.",
            "Cok agir",
            "Hicbir sey",
          ],
          correct_index: 1,
          tr_explanation:
            "Belirsiz timeline = aramaya devam edersin. Net tarih = gun 6'da gelmemise yeniden arar, kanit gosterirsin.",
        },
        {
          question: "Ticket number'i ne icin saklarsin?",
          options: [
            "Onemsiz",
            "Sorun tekrar gelirse veya soz tutulmazsa hizla bagla = bastan anlatmazsin",
            "Yararsiz",
            "Hicbir sey",
          ],
          correct_index: 1,
          tr_explanation:
            "'Hi, calling about ticket TS-77821' = agent kaydi acar = 5 dakikada kaldigin yerden devam.",
        },
      ],
    },
    {
      id: "ex.dts36.4.8",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase: "Could I get a ticket number for this?",
      ipa: "kʊd aɪ ɡɛt ə ˈtɪkɪt ˈnʌmbər fər ðɪs",
      tr_hint:
        "Cagri kapanis. 'Could I get' bağlanır. 'Ticket number' birleşik vurgu. 'For this' net.",
    },
    {
      id: "ex.dts36.4.9",
      type: "speech_shadowing",
      difficulty: 4,
      native_text: "Let me test it before we hang up.",
      voice_hint: "female_us",
      tr_hint:
        "Test isteme kalibi. 'Let me test it' = bir test edeyim. 'Before we hang up' = kapatmadan önce.",
    },
    {
      id: "ex.dts36.4.10",
      type: "listen_and_transcribe",
      difficulty: 4,
      audio_text: "Your refund should process in three to five business days.",
      transcription_target: "Your refund should process in three to five business days.",
      tr_hint:
        "Iade timeline. 'Should process' = islenecek. 'Three to five business days' = 3-5 is günü.",
    },
    {
      id: "ex.dts36.4.11",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "ticket number",
      tr_translation: "Destek talep numarası",
      example: "Save your ticket number in case you need to call back.",
      example_tr: "Geri ararsan diye destek talep numaranı sakla.",
    },
    {
      id: "ex.dts36.4.12",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "Okay finish bye.",
      correct_sentence:
        "Let me test the connection — yes, it's back. Could I get a ticket number in case it breaks again?",
      tr_explanation:
        "Test etmeden + kanit istemeden kapanis. Doğru: test (yes back) + ticket number + 'in case' guvenligi.",
    },
  ],
};

// ============================================================
// Daily Tech Support lessons registry
// ============================================================
export const dailyTechSupportLessons: ReadonlyArray<BundledLesson> = [
  dailyTechSupportLesson_36_1,
  dailyTechSupportLesson_36_2,
  dailyTechSupportLesson_36_3,
  dailyTechSupportLesson_36_4,
];
