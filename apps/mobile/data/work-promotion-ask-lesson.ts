// Work - Promotion / Raise Ask lessons
// Skill: work.promotion_ask (4 lessons)
// Promotion/raise konusmasini aktif yonet: gorusme talebi, vaka sunma, maas muzakeresi, hayir cevabini yol haritasina cevirme.

import type { BundledLesson } from "./cafe-lesson";

// ============================================================
// Lesson 38.1 — Gorusme Talebi (Setting up the conversation)
// ============================================================
export const workPromotionAskLesson_38_1: BundledLesson = {
  id: "work.promotion_ask.38.1",
  skill_id: "work.promotion_ask",
  index: 1,
  title: "Gorusme Talebi",
  description:
    "Terfi konusmasini AC — kapida durmadan once randevu al. 'Career conversation' framing + agenda mail = manager hazirlikli gelir.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.wpa38.1.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "Set up time to talk about my growth",
      tr_translation: "Gelisimim hakkinda konusmak icin gorusme ayarlamak",
      example:
        "Hey — could we set up time to talk about my growth and what's next?",
      example_tr:
        "Selam — gelisimim ve sonraki adim hakkinda konusmak icin zaman ayarlayabilir miyiz?",
    },
    {
      id: "ex.wpa38.1.2",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source:
        "Onumuzdeki haftalarda kariyer konusmasi yapmak istiyorum — uygun bir zaman bulabilir miyiz?",
      target:
        "I'd like to have a career conversation in the next couple of weeks — could we find a time?",
      accepted_variants: [
        "Want to schedule a career conversation in the next few weeks — got a slot that works?",
        "Could we set up a career chat sometime in the next two weeks?",
        "Looking to put time on the calendar for a growth conversation — what works for you?",
        "Hoping to find 30 minutes for a career conversation — can we get something on the books?",
      ],
      tr_hint:
        "'Career conversation' = standart kurumsal kalip. Pasif degil — somut zaman dilimi ('next couple of weeks') ekle.",
    },
    {
      id: "ex.wpa38.1.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "I'd like to ___ time to talk about my growth.",
      answer: "set up",
      distractors: ["take up", "stand up", "open up"],
      tr_hint:
        "'Set up time' = (toplanti icin) zaman ayarlamak. Standart phrasal verb.",
    },
    {
      id: "ex.wpa38.1.4",
      type: "word_order",
      difficulty: 4,
      scrambled_tokens: [
        "Putting",
        "an",
        "agenda",
        "together",
        "for",
        "our",
        "chat",
      ],
      correct_sentence: "Putting an agenda together for our chat",
      tr_translation: "Konusmamiz icin bir agenda hazirliyorum.",
    },
    {
      id: "ex.wpa38.1.5",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "I want a promotion. When can we talk?",
      correct_sentence:
        "Could we set up time to talk about my growth and what's next? Happy to share an agenda beforehand.",
      tr_explanation:
        "'I want a promotion' = ham talep, manager hazirlik yapamaz. Doğru: 'growth' framing + onceden agenda = profesyonel + manager calismak ister.",
    },
    {
      id: "ex.wpa38.1.6",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Manager'a Slack'ten yaz: terfi/zam konusmasi icin randevu iste. Sebep + agenda ipucu ver.",
      npc_role: "Manager",
      setting: "Slack DM, normal hours",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(hey|hi|morning)",
            "(could we|can we|wanted to) (set up|schedule|find) (time|some time|30 min)",
            "(talk about|chat about|discuss) (my (growth|career|development|next steps|path))",
            "(career conversation|growth conversation|development chat)",
            "(in the next (week|couple of weeks|two weeks))",
            "(happy to|will) (share|send) (an agenda|some context|a few topics)",
          ],
          hint_tr:
            "Sablon: 'Hey — could we set up time to talk about my growth in the next couple of weeks? Happy to send an agenda.'",
        },
        {
          speaker: "npc",
          message:
            "Sure — what's on your mind specifically? Want to make sure I come prepared.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(want to|wanted to|planning to) (walk you through|share|cover)",
            "(impact|contributions|scope|results) (from|over) (the last|this) (quarter|6 months|year)",
            "(where I'd like to grow|next level|senior|path forward)",
            "(comp|compensation|level|title)",
            "(send (over|you) (the agenda|a doc|some notes) (today|by (tomorrow|friday|eod)))",
            "(want your honest read|open to hearing)",
          ],
          hint_tr:
            "Spesifik ol: 'Want to walk you through my Q3 impact and where I'd like to grow. Will send the agenda by EOD.'",
        },
        {
          speaker: "npc",
          message: "Got it — Thursday at 2 works. Send the agenda when ready.",
        },
      ],
    },
    {
      id: "ex.wpa38.1.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Terfi konusmasini ACMA-nin EN saglikli yolu?",
          options: [
            "Hallway'de yakalama",
            "Onceden randevu + 'career/growth conversation' framing + agenda",
            "Mail patlatma listesi",
            "Toplantida ima",
          ],
          correct_index: 1,
          tr_explanation:
            "Sürpriz konusma = manager hazirliksiz = 'let me think' cevabi. Randevu + agenda = profesyonel + cevap-li toplanti.",
        },
        {
          question: "Niye 'career conversation' framing 'I want a promotion'-dan IYI?",
          options: [
            "Cok kibar",
            "Genis kapı acar — manager savunmaya gecmez, ortak plan yapilir",
            "Yanlis ingilizce",
            "Daha agir gorunur",
          ],
          correct_index: 1,
          tr_explanation:
            "'I want X' = pozisyon talebi = manager 'no/yes' icin sikisir. 'Career conversation' = manager seninle birlikte dusunur.",
        },
        {
          question: "Agenda mailini onceden gondermek NEDEN onemli?",
          options: [
            "Manager veriyle gelir, anlik cevap baskisi yok = adil konusma",
            "Onemli degil",
            "Cok agir",
            "Standart degil",
          ],
          correct_index: 0,
          tr_explanation:
            "Hazirliksiz manager = 'let me get back to you'. Hazirlikli manager = somut cevap + ortak plan.",
        },
      ],
    },
    {
      id: "ex.wpa38.1.8",
      type: "pronounce_phrase",
      difficulty: 4,
      phrase:
        "Could we set up time to talk about my growth and what's next?",
      ipa: "/kʊd wi sɛt ʌp taɪm tə tɔːk əˈbaʊt maɪ ɡrəʊθ ənd wɒts nɛkst/",
      tr_hint:
        "'Could we set up time' bağlanır → 'kud-wi-set-ap-taim'. 'Growth' içinde 'th' net, 'what's next' kısa stop.",
    },
    {
      id: "ex.wpa38.1.9",
      type: "speech_shadowing",
      difficulty: 4,
      native_text:
        "Hey — wanted to put a career conversation on the calendar in the next two weeks. I'll send an agenda beforehand.",
      voice_hint: "neutral_us",
      tr_hint:
        "Manager'a Slack DM tonu — sakin, profesyonel. 'Wanted to' bağlı, 'agenda' düz vurguyla.",
    },
    {
      id: "ex.wpa38.1.10",
      type: "listen_and_transcribe",
      difficulty: 4,
      audio_text:
        "Sure — what's on your mind specifically? Want to make sure I come prepared.",
      transcription_target:
        "Sure — what's on your mind specifically? Want to make sure I come prepared.",
      tr_hint:
        "Manager'in standart cevabi. 'What's on your mind' = aklinda ne var. 'Come prepared' = hazirlikli gelmek.",
    },
    {
      id: "ex.wpa38.1.11",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "Put 30 minutes on the calendar",
      tr_translation: "Takvime 30 dakika koymak",
      example:
        "Can we put 30 minutes on the calendar this week for a growth conversation?",
      example_tr:
        "Bu hafta gelisim konusmasi icin takvime 30 dakika koyabilir miyiz?",
    },
    {
      id: "ex.wpa38.1.12",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence:
        "I want talk about promotion. You have time tomorrow?",
      correct_sentence:
        "Could we set up time this week to talk about my growth? Happy to share an agenda.",
      tr_explanation:
        "'I want talk' yapı bozuk — 'I want to talk' veya daha yumusak 'Could we set up'. 'You have time tomorrow' direkt baski — randevu icin 'this week' + agenda teklifi profesyonel.",
    },
  ],
};

// ============================================================
// Lesson 38.2 — Vaka Sun (Making the case)
// ============================================================
export const workPromotionAskLesson_38_2: BundledLesson = {
  id: "work.promotion_ask.38.2",
  skill_id: "work.promotion_ask",
  index: 2,
  title: "Vaka Sun",
  description:
    "Konusmada vakani sunarken: impact + sayilar + scope buyumesi. 'Helped' yerine 'led/drove/owned' + 'I've taken on X scope'.",
  estimated_minutes: 6,
  exercises: [
    {
      id: "ex.wpa38.2.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "Here's the impact I've had",
      tr_translation: "Iste yaptigim etki (vakanin acilisi)",
      example:
        "Here's the impact I've had this year — happy to walk through it.",
      example_tr:
        "Iste bu yil yaptigim etki — uzerinden geçmek isterim.",
    },
    {
      id: "ex.wpa38.2.2",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source:
        "Bu yil senior bir engineer'in kapsamini ustlendim — auth redesign'ini yonettim, %35 hata dususu sagladim.",
      target:
        "This year I've taken on senior-level scope — led the auth redesign and drove a 35% drop in errors.",
      accepted_variants: [
        "I've stepped into senior scope this year — owned the auth redesign, 35% error reduction.",
        "Took on the scope of a senior engineer — led auth redesign with 35% fewer errors.",
        "Operating at senior scope — drove auth redesign, errors down 35%.",
        "Picked up senior-level work this year — owned auth, cut errors by 35%.",
      ],
      tr_hint:
        "'Take on scope' = is yukunu/kapsamini ustlenmek. 'Led/Drove/Owned' = sahiplenme fiilleri. Sayi her cumlede.",
    },
    {
      id: "ex.wpa38.2.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "I've ___ on more scope this year.",
      answer: "taken",
      distractors: ["made", "put", "given"],
      tr_hint:
        "'Take on scope' = kapsami ustlenmek. Gecmis zaman: 'I've taken on'.",
    },
    {
      id: "ex.wpa38.2.4",
      type: "word_order",
      difficulty: 4,
      scrambled_tokens: [
        "Operating",
        "at",
        "the",
        "next",
        "level",
        "already",
      ],
      correct_sentence: "Operating at the next level already",
      tr_translation: "Zaten bir sonraki seviyede calisiyorum.",
    },
    {
      id: "ex.wpa38.2.5",
      type: "spot_mistake",
      difficulty: 5,
      incorrect_sentence:
        "I've been here three years and I work really hard, so I deserve a promotion.",
      correct_sentence:
        "Here's the impact I've had: led auth redesign (35% fewer errors), mentored two juniors, and owned the API migration end-to-end — operating at senior scope.",
      tr_explanation:
        "Sure + caba = sirket karari icin yeterli degil. Sayi + scope + sahiplenme fiilleri = vaka. 'Deserve' kelimesi = duygusal, kacin.",
    },
    {
      id: "ex.wpa38.2.6",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Career konusmasindasin. Manager 'walk me through your case' dedi. Veriyle sun.",
      npc_role: "Manager",
      setting: "Career conversation, in-person 1:1",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(here'?s|sharing|wanted to walk you through) (the (impact|case)|what I'?ve (delivered|done))",
            "(this year|over the last (6 months|year|quarter))",
            "(led|drove|owned|shipped|spearheaded) (\\w+)",
            "(resulted in|drove|delivered) (\\d+%|a \\d+|\\$\\d+)",
            "(taken on|stepped into|picked up) (senior(-?level)? scope|more scope|the scope of)",
            "(operating at|working at) (the next level|senior level)",
          ],
          hint_tr:
            "Acilis: 'Here's the impact I've had — led X (Y% lift), owned Z end-to-end. Operating at senior scope.'",
        },
        {
          speaker: "npc",
          message: "Solid numbers. What about scope outside your own work?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(mentored|onboarded|coached) (\\d+|two|three|a (few|couple)) (engineers|hires|juniors)",
            "(unblocked|enabled) (the (\\w+ )?team)",
            "(led|ran|drove) (the (weekly|biweekly) (sync|design review))",
            "(set the technical direction|owned the roadmap|drove the strategy) (for|on)",
            "(partnered (with|across) (design|product|data|infra))",
            "(established|wrote) (the (runbook|on-call (process|playbook)|standard))",
          ],
          hint_tr:
            "Cross-team etki: 'Mentored two juniors, drove the on-call playbook adoption, partnered with infra on the migration.'",
        },
        {
          speaker: "npc",
          message:
            "Compelling. Let me think about how to move this through HR.",
        },
      ],
    },
    {
      id: "ex.wpa38.2.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Vaka sunmanin temel formulu?",
          options: [
            "Caba + kidem",
            "Aksiyon fiili + olcum + scope (bireysel + cross-team)",
            "Sadece sayilar",
            "Iyimser ton",
          ],
          correct_index: 1,
          tr_explanation:
            "'Led X' (aksiyon) + '35% lift' (olcum) + 'mentored two juniors' (scope). Uc ayak olmadan vaka 'sense' yapmaz.",
        },
        {
          question: "'I deserve' kalibinin sorunu?",
          options: [
            "Kisisel hak iddiasi = sirket karari degil. Veri yerine duygusal argüman",
            "Sorun yok",
            "Cok kibar",
            "Standart",
          ],
          correct_index: 0,
          tr_explanation:
            "'Deserve' = subjektif. 'Here's what I delivered + here's the scope I'm operating at' = objektif. Manager'a ikincisi lazim.",
        },
        {
          question: "'I've taken on X scope' kalibi NIYE guclu?",
          options: [
            "Onemli degil",
            "Zaten next-level is yaptigini gosterir — terfi = mevcut durumu YAZILI hale getirme",
            "Cok agir",
            "Cok kibar",
          ],
          correct_index: 1,
          tr_explanation:
            "En guclu vaka: 'Already operating at the next level — let's make it official.' Manager risk almamis olur.",
        },
      ],
    },
    {
      id: "ex.wpa38.2.8",
      type: "pronounce_phrase",
      difficulty: 4,
      phrase:
        "I've taken on senior-level scope and led the auth redesign end-to-end.",
      ipa: "/aɪv ˈteɪkən ɒn ˈsiːnjər ˈlɛvəl skəʊp ənd lɛd ði ɔːθ riˈdɪzaɪn ɛnd tə ɛnd/",
      tr_hint:
        "Vaka acilis cumlesi — kararli ton. 'Senior-level' birleşik, 'end-to-end' uc kelime tek nefes.",
    },
    {
      id: "ex.wpa38.2.9",
      type: "speech_shadowing",
      difficulty: 5,
      native_text:
        "Here's the impact I've had this year — led the auth redesign with a 35% drop in errors, mentored two juniors, and owned the API migration end-to-end.",
      voice_hint: "confident_us",
      tr_hint:
        "Vaka sunumu ritmi — virguller arasi kisa nefes. Sayilar net ('thirty-five percent'). Liste ritmiyle calis.",
    },
    {
      id: "ex.wpa38.2.10",
      type: "listen_and_transcribe",
      difficulty: 5,
      audio_text:
        "Solid numbers. What about scope outside your own work?",
      transcription_target:
        "Solid numbers. What about scope outside your own work?",
      tr_hint:
        "Manager'in derinlesme sorusu. 'Scope outside your own work' = bireysel disinda kapsam. Bunu bekle.",
    },
    {
      id: "ex.wpa38.2.11",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "Drove a measurable impact",
      tr_translation: "Olculebilir bir etki yarattim",
      example:
        "Drove a measurable impact this year — 35% drop in error rates and two engineers ramped.",
      example_tr:
        "Bu yil olculebilir bir etki yarattim — hata oranlarinda %35 dusus ve iki engineer'i hizla yetistirme.",
    },
    {
      id: "ex.wpa38.2.12",
      type: "spot_mistake",
      difficulty: 5,
      incorrect_sentence:
        "I helped my team a lot and I am very dedicated worker.",
      correct_sentence:
        "I drove the auth redesign, mentored two juniors, and shipped the API migration — operating at senior scope.",
      tr_explanation:
        "'Helped' = pasif + olculemez. 'I am very dedicated worker' = oz-etiketleme, kanit yok. Doğru: 'Drove/led/owned' + spesifik sonuc + 'operating at X scope'. Aksiyon fiili + olcum sahiplik gosterir.",
    },
  ],
};

// ============================================================
// Lesson 38.3 — Maas Muzakeresi (Compensation negotiation)
// ============================================================
export const workPromotionAskLesson_38_3: BundledLesson = {
  id: "work.promotion_ask.38.3",
  skill_id: "work.promotion_ask",
  index: 3,
  title: "Maas Muzakeresi",
  description:
    "Sayi konusmasi — 'I'm looking for X-Y range' + market rate + 'what's the band?' soru kalibi. Tek rakam degil, range ver.",
  estimated_minutes: 6,
  exercises: [
    {
      id: "ex.wpa38.3.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "I'm looking for X-Y range",
      tr_translation: "X-Y arasi bir rakam icin gorusuyorum (muzakere acilisi)",
      example:
        "Based on market data, I'm looking for a 175-190K range for this role.",
      example_tr:
        "Piyasa verilerine gore, bu rol icin 175-190K araligi icin gorusuyorum.",
    },
    {
      id: "ex.wpa38.3.2",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source:
        "Piyasa verisi senior pozisyon icin 175 ile 195 arasini gosteriyor — bu seviyenin band'i nedir?",
      target:
        "Market data shows senior comp landing between 175 and 195 — what's the band for this level here?",
      accepted_variants: [
        "Levels.fyi puts senior between 175 and 195 — what's the internal band?",
        "Market rate for senior sits at 175-195 — what does your band look like for this level?",
        "Based on market data, senior is in the 175-195 range — could you share what the band is internally?",
        "Industry data has senior at 175-195 — curious what the band is for this role.",
      ],
      tr_hint:
        "'Market rate' = piyasa rate'i. 'Band' = sirket icindeki maas araligi. Bunu sormak agresif degil — standart muzakere.",
    },
    {
      id: "ex.wpa38.3.3",
      type: "fill_blank",
      difficulty: 4,
      sentence_template: "What's the ___ for this level?",
      answer: "band",
      distractors: ["range", "level", "tier"],
      tr_hint:
        "'Band' = sirket icindeki resmi maas araligi. HR'da bu kelime kullanilir.",
    },
    {
      id: "ex.wpa38.3.4",
      type: "word_order",
      difficulty: 4,
      scrambled_tokens: [
        "Looking",
        "for",
        "a",
        "number",
        "in",
        "the",
        "175-190",
        "range",
      ],
      correct_sentence: "Looking for a number in the 175-190 range",
      tr_translation: "175-190 araliginda bir rakam icin bakiyorum.",
    },
    {
      id: "ex.wpa38.3.5",
      type: "spot_mistake",
      difficulty: 5,
      incorrect_sentence: "I want 200K. Can you do that?",
      correct_sentence:
        "Market data puts senior comp at 175-195 — I'm looking for the upper end of that range given my impact. What's the band for this level?",
      tr_explanation:
        "Tek rakam = donmus pozisyon. Range + market kaynagi + 'what's the band?' sorusu = muzakereye yer acmis pozisyon. HR'a oynayacak alan birakirsin.",
    },
    {
      id: "ex.wpa38.3.6",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Manager 'let's talk numbers' dedi. Range ver, market kaynagini bagla, band'i sor.",
      npc_role: "Manager",
      setting: "Comp negotiation, follow-up 1:1",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(based on|grounded in|looking at) (market data|levels\\.fyi|industry data|external benchmarks)",
            "(market rate|industry rate|comp rate) (for senior|for this role|for this level)",
            "(sits at|lands (between|at)|is in the) (\\d+ ?-? ?\\d+|\\d+k ?-? ?\\d+k)",
            "(looking for|targeting|aiming for) (a (number|range)|the (upper|higher) end|\\d+k? ?-? ?\\d+k?)",
            "(what'?s the band|what does the band look like|where does the band) (for this (level|role))",
          ],
          hint_tr:
            "Yapi: 'Market data shows 175-195 for senior — I'm looking at the upper end. What's the band for this level?'",
        },
        {
          speaker: "npc",
          message:
            "The band for senior is 165-195. I can probably get you to 180.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(appreciate (that|the transparency)|thanks for sharing)",
            "(given|considering|based on) (the impact|my (case|track record)|q3 numbers)",
            "(closer to|toward the (top|upper end) of|in the 185-190)",
            "(could we|is there room to) (land at|push (to|toward)|aim for)",
            "(equity|sign-on|bonus|title) (component|piece|adjustment)",
            "(what would it take|what's possible|where's the flex)",
          ],
          hint_tr:
            "Karsi teklif: 'Appreciate that — given the impact, could we land closer to 187? Open to equity/bonus too.'",
        },
        {
          speaker: "npc",
          message:
            "Fair ask. Let me see what I can do on the base — I'll get back to you Friday.",
        },
      ],
    },
    {
      id: "ex.wpa38.3.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Sayi vermenin EN saglikli yolu?",
          options: [
            "Tek rakam at",
            "Range ver + market kaynagini bagla + sirket band'ini sor",
            "Hic sayi verme — once manager soylesin",
            "En yuksek rakami soyle",
          ],
          correct_index: 1,
          tr_explanation:
            "Tek rakam = take-or-leave. Range = muzakere. Market kaynagi = objektif zemin. Band sorusu = sirket icini gor.",
        },
        {
          question: "'What's the band?' sorusu NEDEN onemli?",
          options: [
            "Sirket maas araliklarini bilirsen muzakere alanini gorursun — bilgi asimmetrisini kapatir",
            "Onemli degil",
            "Cok agir bir soru",
            "HR'a hakaret",
          ],
          correct_index: 0,
          tr_explanation:
            "Tum buyuk sirketlerde band'lar var. Sormak STANDART. Bilmeden muzakere = karanlikta atis.",
        },
        {
          question: "'I need more money' kalibinin sorunu?",
          options: [
            "Sorun yok",
            "Sirket arz/talep. 'Ihtiyac' kisiseldir, 'market rate + impact' is karari = ikincisini kullan",
            "Cok kibar",
            "Cok agir",
          ],
          correct_index: 1,
          tr_explanation:
            "Sirket 'need'-e cevap vermez — 'market value + delivery' verisine cevap verir. Duygusal vs is dili farki.",
        },
      ],
    },
    {
      id: "ex.wpa38.3.8",
      type: "pronounce_phrase",
      difficulty: 4,
      phrase:
        "Market data puts senior comp at 175 to 195 — what's the band for this level?",
      ipa: "/ˈmɑːkɪt ˈdeɪtə pʊts ˈsiːnjər kɒmp æt wʌn ˈsɛvənti faɪv tə wʌn ˈnaɪnti faɪv — wɒts ðə bænd fər ðɪs ˈlɛvəl/",
      tr_hint:
        "Sayilari net soyle — '175 to 195'. 'Band' = kisa, vurgulu. Cumle sonu yukseltme = soru hissi.",
    },
    {
      id: "ex.wpa38.3.9",
      type: "speech_shadowing",
      difficulty: 5,
      native_text:
        "Based on market data, I'm looking at the upper end of the range given my impact. Could we land closer to one-ninety?",
      voice_hint: "calm_us",
      tr_hint:
        "Muzakere tonu — sakin + kararli, savunmaci degil. 'Upper end' birleşik, 'one-ninety' tek nefes.",
    },
    {
      id: "ex.wpa38.3.10",
      type: "listen_and_transcribe",
      difficulty: 5,
      audio_text:
        "The band for senior is 165 to 195. I can probably get you to 180.",
      transcription_target:
        "The band for senior is 165 to 195. I can probably get you to 180.",
      tr_hint:
        "Manager'in band acikladigi an. Sayilari yaz. 'Get you to 180' = seni 180'a tasiyabilirim.",
    },
    {
      id: "ex.wpa38.3.11",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "Where's the flex?",
      tr_translation: "Esneklik nerede? (muzakere alani sorusu)",
      example:
        "Appreciate the transparency — where's the flex? Equity, sign-on, or base?",
      example_tr:
        "Seffafliga minnet — esneklik nerede? Equity mi, sign-on mu, baz mi?",
    },
    {
      id: "ex.wpa38.3.12",
      type: "spot_mistake",
      difficulty: 5,
      incorrect_sentence:
        "Your offer too low. I expected more money for this position.",
      correct_sentence:
        "Appreciate the offer — based on market data, senior sits at 175 to 195. Is there room to land closer to the upper end?",
      tr_explanation:
        "'Too low' + 'expected more money' = duygusal + kisisel. Doğru: 'Appreciate the offer' (saygi) + market data (objektif) + 'is there room?' (kapi aralik tutar). HR oynamak ister, kavga etmek istemez.",
    },
  ],
};

// ============================================================
// Lesson 38.4 — Hayir Cevabi + Yol Haritasi (Turning a no into a plan)
// ============================================================
export const workPromotionAskLesson_38_4: BundledLesson = {
  id: "work.promotion_ask.38.4",
  skill_id: "work.promotion_ask",
  index: 4,
  title: "Hayir Cevabi + Yol Haritasi",
  description:
    "Manager 'henuz degil' dedi — drama yapma, plan iste. 'What would I need to demonstrate?' + 'let's revisit in Q3' + yazili sahiplen.",
  estimated_minutes: 6,
  exercises: [
    {
      id: "ex.wpa38.4.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "What would I need to demonstrate?",
      tr_translation: "Bana neyi gostermem gerektigini sor (no-yu plana cevir)",
      example:
        "Understood. What would I need to demonstrate over the next two quarters?",
      example_tr:
        "Anladim. Onumuzdeki iki çeyrekte neyi gostermem gerekiyor?",
    },
    {
      id: "ex.wpa38.4.2",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source:
        "Anladim — Q3'te tekrar konusmak icin neyi gostermem gerekir? Plani yazili sahiplenelim.",
      target:
        "Understood — what would I need to demonstrate to revisit this in Q3? Let's document the plan.",
      accepted_variants: [
        "Got it — what would success look like by Q3? Want to put it in writing.",
        "Hearing you — what evidence would move this in Q3? Happy to document.",
        "Fair — what concrete signals would you need to see by Q3? Let's get the plan down.",
        "Taking that in — what does the path to Q3 look like? Want to write it up so we're aligned.",
      ],
      tr_hint:
        "Iki anahtar: 'What would I need to demonstrate' (kanit sorusu) + 'let's document' (sozlu degil yazili). Yazili plan = ileride sahiplenecek olan.",
    },
    {
      id: "ex.wpa38.4.3",
      type: "fill_blank",
      difficulty: 4,
      sentence_template: "Let's ___ this in Q3 with concrete criteria.",
      answer: "revisit",
      distractors: ["repeat", "remind", "revise"],
      tr_hint:
        "'Revisit' = tekrar gozden gecirmek. Konusmaya tekrar acilis kalibi.",
    },
    {
      id: "ex.wpa38.4.4",
      type: "word_order",
      difficulty: 4,
      scrambled_tokens: [
        "Want",
        "to",
        "document",
        "the",
        "plan",
        "we",
        "just",
        "discussed",
      ],
      correct_sentence: "Want to document the plan we just discussed",
      tr_translation: "Az once konustugumuz plani yazili olarak sahiplenmek istiyorum.",
    },
    {
      id: "ex.wpa38.4.5",
      type: "spot_mistake",
      difficulty: 5,
      incorrect_sentence:
        "If you don't promote me now, I'll start looking elsewhere.",
      correct_sentence:
        "Understood — what would I need to demonstrate to revisit this in Q3? Want to write down the criteria so we're both aligned.",
      tr_explanation:
        "Tehdit = iliski yakar + sense of urgency yaratmaz, sadece guvensizlik. Olgun: 'no'-yu kabul + kriter sor + yazili plan = gercek ilerleme.",
    },
    {
      id: "ex.wpa38.4.6",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Manager 'I don't think we can do it this cycle' dedi. Hayir-i yol haritasina cevir.",
      npc_role: "Manager",
      setting: "Career conversation, after hearing 'not this cycle'",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(understood|got it|hearing you|that lands|fair|appreciate (the )?honesty)",
            "(what would I need to (demonstrate|show|prove)|what (would )?(success|the bar) look like)",
            "(by (q3|next cycle|six months|the next review))",
            "(concrete (criteria|signals|markers)|specific (evidence|examples))",
            "(let'?s (revisit|circle back|come back to (this|it))|want to set a follow-?up)",
            "(want to (document|write (this|it) down|put this in writing))",
          ],
          hint_tr:
            "Olgun acilis: 'Understood — what would I need to demonstrate to revisit this in Q3? Want to document the criteria.'",
        },
        {
          speaker: "npc",
          message:
            "Two things — drive a cross-team initiative end-to-end, and mentor at least one engineer through to ramp.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(that'?s (clear|workable|fair)|got it|noted)",
            "(will (own|lead|drive) (the (\\w+ )?initiative)|already (a (good|natural) candidate|looking at the))",
            "(will (write|send) (the (criteria|plan)|this) up)",
            "(send (you|the doc) by (eod|friday|end of week)|share a one-pager)",
            "(monthly check-?ins|biweekly progress|q1/q2 milestones)",
            "(if I hit (these|the criteria)|once these are in)",
          ],
          hint_tr:
            "Sahiplen: 'Clear. Will send you a doc by Friday with milestones — monthly check-ins, revisit Q3.'",
        },
        {
          speaker: "npc",
          message:
            "Great. Send it over, we'll align, and check in monthly.",
        },
      ],
    },
    {
      id: "ex.wpa38.4.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "'Not this cycle' duydugunda ILK adim?",
          options: [
            "Drama / tehdit / sus",
            "Kabul + 'what would I need to demonstrate?' + zaman cizgisi belirleme",
            "Hemen baska is arama",
            "Sessizce kabullen",
          ],
          correct_index: 1,
          tr_explanation:
            "No = veri. Plani yoksa = belirsizlik = bir sonraki cycle'da yine no. Kriter sor = aydinlanma.",
        },
        {
          question: "Plani 'document' etmek NEDEN onemli?",
          options: [
            "Onemli degil",
            "Manager degisirse / hatirlamazsa kanit = adil cycle. Sozlu plan = unutulur",
            "Cok agir bir istek",
            "HR'a hakaret",
          ],
          correct_index: 1,
          tr_explanation:
            "Yazili kriter = iki taraf icin de adillik. Manager degisebilir, hafiza zayif, yazili plan referans noktasi.",
        },
        {
          question: "Tehdit ('I'll leave if you don't') kalibinin sorunu?",
          options: [
            "Sorun yok — guc gosterisi",
            "Iliskiyi yakar + manager guvenmez = ayrilmasan da artik aday degilsin",
            "Cok kibar",
            "Onemli degil",
          ],
          correct_index: 1,
          tr_explanation:
            "Tehdit = tek atisli silah. Olgun yol: kriter al, plani uygula, gercek alternatif var ise sessizce hareket et.",
        },
      ],
    },
    {
      id: "ex.wpa38.4.8",
      type: "pronounce_phrase",
      difficulty: 4,
      phrase:
        "What would I need to demonstrate to revisit this in Q3?",
      ipa: "/wɒt wʊd aɪ niːd tə ˈdɛmənstreɪt tə riːˈvɪzɪt ðɪs ɪn kjuː θriː/",
      tr_hint:
        "Olgun cevap kalibi — duraksiz, sakin. 'Demonstrate' icinde 'dem' vurgulu. 'Q3' = 'kyu-three'.",
    },
    {
      id: "ex.wpa38.4.9",
      type: "speech_shadowing",
      difficulty: 5,
      native_text:
        "Understood — want to document the criteria so we're both aligned. I'll send a one-pager by Friday with milestones.",
      voice_hint: "professional_us",
      tr_hint:
        "Hayri kabul edip plana ceviren ton — kararli ama defansif degil. 'Document the criteria' = anahtar ifade.",
    },
    {
      id: "ex.wpa38.4.10",
      type: "listen_and_transcribe",
      difficulty: 5,
      audio_text:
        "Two things — drive a cross-team initiative end-to-end, and mentor at least one engineer through to ramp.",
      transcription_target:
        "Two things — drive a cross-team initiative end-to-end, and mentor at least one engineer through to ramp.",
      tr_hint:
        "Manager'in iki kriterli cevabi. 'Cross-team initiative' = ekipler arasi proje. 'Through to ramp' = hizlanip yetisene kadar.",
    },
    {
      id: "ex.wpa38.4.11",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "Concrete criteria",
      tr_translation: "Somut kriterler",
      example:
        "Could we put concrete criteria in writing so we both know the bar?",
      example_tr:
        "Somut kriterleri yazili hale getirsek — ikimiz de cizgiyi bilelim?",
    },
    {
      id: "ex.wpa38.4.12",
      type: "spot_mistake",
      difficulty: 5,
      incorrect_sentence:
        "Okay, I will wait next year. But this is not fair really.",
      correct_sentence:
        "Understood — what would I need to demonstrate to revisit in Q3? Want to document the path so we're aligned.",
      tr_explanation:
        "'I will wait' = pasif. 'Not fair' = duygusal. Doğru: kriter sor + zaman cizgisi belirle + yazili sahiplen. Olgun professional 'no'-yu calisma planına cevirir.",
    },
  ],
};

// ============================================================
// Work Promotion Ask lessons registry
// ============================================================
export const workPromotionAskLessons: ReadonlyArray<BundledLesson> = [
  workPromotionAskLesson_38_1,
  workPromotionAskLesson_38_2,
  workPromotionAskLesson_38_3,
  workPromotionAskLesson_38_4,
];
