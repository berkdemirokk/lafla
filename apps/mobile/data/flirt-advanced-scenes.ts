// Flört Advanced — 35 new B1-B2 scenes extending the existing flirt mode.
// Covers UNCOVERED ground beyond openers/banter/voice/first-date/cancel/define/rejection/recovery:
// long-distance, app-dating profiles, meeting their friends, cultural translation,
// real disagreements, modern dating dynamics, and romance escalation moves.
// Voice: adult, modern, candid — not pickup-artist, not school textbook.

import type { Scene } from "./scenes";

export const flirtAdvancedScenes: ReadonlyArray<Scene> = [
  // ─────────────────────────────────────────────────────────────
  // LONG-DISTANCE RELATIONSHIP (7 scenes, B1-B2)
  // skillId: flirt.ldr
  // ─────────────────────────────────────────────────────────────
  {
    id: "scene-flirt-ldr-9-1",
    emoji: "🌙",
    title: "Saat 2'de\nFaceTime —\ndoğru ses tonu",
    description:
      "Sen uyumadan o uyanıyor. 'Did I wake you?' + alçak ses + 'go back to sleep, I'll be here'.",
    durationMin: 8,
    mode: "flirt",
    cefrLevel: "B1",
    skillId: "flirt.ldr",
    lessonId: "flirt.ldr.9.1",
    isNew: true,
    progressLabel: "1/7 ders · B1",
  },
  {
    id: "scene-flirt-ldr-9-2",
    emoji: "💭",
    title: "Klişesiz\n'seni özledim' —\nspesifik anılarla",
    description:
      "'Miss you' tek başına ucuz. 'I keep thinking about that thing you said about your dad' — somut, gerçek.",
    durationMin: 8,
    mode: "flirt",
    cefrLevel: "B2",
    skillId: "flirt.ldr",
    lessonId: "flirt.ldr.9.2",
    isNew: true,
    progressLabel: "2/7 ders · B2",
  },
  {
    id: "scene-flirt-ldr-9-3",
    emoji: "🕐",
    title: "Timezone matematiği —\n'your evening,\nmy morning'",
    description:
      "'Can we do 7 your time? That's 2 a.m. mine, but I'm up.' + 'when works for you this week'.",
    durationMin: 7,
    mode: "flirt",
    cefrLevel: "B1",
    skillId: "flirt.ldr",
    lessonId: "flirt.ldr.9.3",
    isNew: true,
    progressLabel: "3/7 ders · B1",
  },
  {
    id: "scene-flirt-ldr-9-4",
    emoji: "📅",
    title: "Bir sonraki ziyaret —\nflight booking,\n'I want a date on the calendar'",
    description:
      "LDR'da en güçlü cümle: 'a date on the calendar'. Belirsizlik zehir, takvim ilaç.",
    durationMin: 8,
    mode: "flirt",
    cefrLevel: "B2",
    skillId: "flirt.ldr",
    lessonId: "flirt.ldr.9.4",
    isNew: true,
    progressLabel: "4/7 ders · B2",
  },
  {
    id: "scene-flirt-ldr-9-5",
    emoji: "😬",
    title: "Kıskançlık —\n'who was that\nin your story?'",
    description:
      "Stalker olmadan sor: 'I caught myself wondering — totally my stuff, but who's Alex?' Sahiplenme, suçlama yok.",
    durationMin: 10,
    mode: "flirt",
    cefrLevel: "B2",
    skillId: "flirt.ldr",
    lessonId: "flirt.ldr.9.5",
    isNew: true,
    progressLabel: "5/7 ders · B2",
  },
  {
    id: "scene-flirt-ldr-9-6",
    emoji: "📦",
    title: "Mesafe yorgunluğu —\n'I'm running on\nfumes this week'",
    description:
      "Her gece görüşmek tükenebilir. 'I love our calls but I'm fried — can we just text tonight?' Sınır + sevgi.",
    durationMin: 9,
    mode: "flirt",
    cefrLevel: "B2",
    skillId: "flirt.ldr",
    lessonId: "flirt.ldr.9.6",
    isNew: true,
    progressLabel: "6/7 ders · B2",
  },
  {
    id: "scene-flirt-ldr-9-7",
    emoji: "🎁",
    title: "Sürpriz teslimat —\n'sent you something,\ndon't open till Friday'",
    description:
      "Küçük jest İngilizcesi: 'tracking number incoming' + 'it's silly but it made me think of you'.",
    durationMin: 6,
    mode: "flirt",
    cefrLevel: "B1",
    skillId: "flirt.ldr",
    lessonId: "flirt.ldr.9.7",
    isNew: true,
    progressLabel: "7/7 ders · B1 ✓",
  },

  // ─────────────────────────────────────────────────────────────
  // APP DATING — Hinge / Bumble profiles & openers (7 scenes, B1-B2)
  // skillId: flirt.apps
  // ─────────────────────────────────────────────────────────────
  {
    id: "scene-flirt-apps-10-1",
    emoji: "📝",
    title: "Hinge prompt —\n'Two truths\nand a lie'",
    description:
      "Üç cümle, ikisi gerçek bir tanesi yalan. Spesifik + biraz garip = match magneti.",
    durationMin: 7,
    mode: "flirt",
    cefrLevel: "B1",
    skillId: "flirt.apps",
    lessonId: "flirt.apps.10.1",
    isNew: true,
    progressLabel: "1/7 ders · B1",
  },
  {
    id: "scene-flirt-apps-10-2",
    emoji: "🪝",
    title: "Bio'dan kanca bul —\nspesifik detayı\nyakala",
    description:
      "'Cats > dogs (sorry)' parantez = hook. Tartışmaya dal: 'Sorry for who exactly?'",
    durationMin: 8,
    mode: "flirt",
    cefrLevel: "B2",
    skillId: "flirt.apps",
    lessonId: "flirt.apps.10.2",
    isNew: true,
    progressLabel: "2/7 ders · B2",
  },
  {
    id: "scene-flirt-apps-10-3",
    emoji: "✍️",
    title: "Kendi profilin —\n'About me' değil,\n3 spesifik şey",
    description:
      "Genel kelime yasak ('adventurous', 'foodie'). Yerine: 'I learn one weird skill per year — last year was juggling'.",
    durationMin: 9,
    mode: "flirt",
    cefrLevel: "B2",
    skillId: "flirt.apps",
    lessonId: "flirt.apps.10.3",
    isNew: true,
    progressLabel: "3/7 ders · B2",
  },
  {
    id: "scene-flirt-apps-10-4",
    emoji: "💡",
    title: "Prompt cevabı —\n'Together we could'\nyaratıcılık testi",
    description:
      "Klişeyi atla: 'open a terrible café and only serve oat milk in shot glasses' — komik + spesifik.",
    durationMin: 8,
    mode: "flirt",
    cefrLevel: "B2",
    skillId: "flirt.apps",
    lessonId: "flirt.apps.10.4",
    isNew: true,
    progressLabel: "4/7 ders · B2",
  },
  {
    id: "scene-flirt-apps-10-5",
    emoji: "📸",
    title: "Foto seçimi feedback —\n'photo 3 is the\nonly real one'",
    description:
      "Arkadaşına İngilizce profil yorumu: 'group shot — which one is you?' + 'ditch the gym mirror'.",
    durationMin: 7,
    mode: "flirt",
    cefrLevel: "B1",
    skillId: "flirt.apps",
    lessonId: "flirt.apps.10.5",
    isNew: true,
    progressLabel: "5/7 ders · B1",
  },
  {
    id: "scene-flirt-apps-10-6",
    emoji: "🎯",
    title: "Bumble'da kadın\nilk yazıyor —\nmomentum'u sen tut",
    description:
      "İlk mesaj 'Hey' geldi — kurtarmak senin işin. 'Hey yourself. Your dog or your roommate's?'",
    durationMin: 7,
    mode: "flirt",
    cefrLevel: "B1",
    skillId: "flirt.apps",
    lessonId: "flirt.apps.10.6",
    isNew: true,
    progressLabel: "6/7 ders · B1",
  },
  {
    id: "scene-flirt-apps-10-7",
    emoji: "🚩",
    title: "Profilde red flag —\n'no drama,\ngood vibes only'",
    description:
      "Karşı tarafın bio'sundaki uyarı işaretleri. 'Looking for my queen' okurken: nazikçe pas geç.",
    durationMin: 8,
    mode: "flirt",
    cefrLevel: "B2",
    skillId: "flirt.apps",
    lessonId: "flirt.apps.10.7",
    isNew: true,
    progressLabel: "7/7 ders · B2 ✓",
  },

  // ─────────────────────────────────────────────────────────────
  // MEETING THEIR FRIENDS (5 scenes, B1)
  // skillId: flirt.friends
  // ─────────────────────────────────────────────────────────────
  {
    id: "scene-flirt-friends-11-1",
    emoji: "🥳",
    title: "Parti tanıştırma —\n'this is my\n+1, [Adın]'",
    description:
      "İlk 30 saniye: el sıkış, ismini net söyle, ortak tanıdığa referans ver. Sessiz kalma tuzağı yok.",
    durationMin: 7,
    mode: "flirt",
    cefrLevel: "B1",
    skillId: "flirt.friends",
    lessonId: "flirt.friends.11.1",
    isNew: true,
    progressLabel: "1/5 ders · B1",
  },
  {
    id: "scene-flirt-friends-11-2",
    emoji: "🍝",
    title: "Akşam yemeği —\ngrubun esprisine\ngül + iz bırak",
    description:
      "İçeri-şaka anlamasan da: 'Okay I need the backstory on this' — merak göster, dışlanma.",
    durationMin: 8,
    mode: "flirt",
    cefrLevel: "B1",
    skillId: "flirt.friends",
    lessonId: "flirt.friends.11.2",
    isNew: true,
    progressLabel: "2/5 ders · B1",
  },
  {
    id: "scene-flirt-friends-11-3",
    emoji: "🤝",
    title: "En yakın arkadaş\nseni süzüyor —\nsınavı geç",
    description:
      "Best friend onay komitesi. Spesifik soru sor: 'How did you two actually meet?' — saygı kazanır.",
    durationMin: 8,
    mode: "flirt",
    cefrLevel: "B1",
    skillId: "flirt.friends",
    lessonId: "flirt.friends.11.3",
    isNew: true,
    progressLabel: "3/5 ders · B1",
  },
  {
    id: "scene-flirt-friends-11-4",
    emoji: "🍻",
    title: "Grup içinde\nflörtleşme —\n'PDA' dozu",
    description:
      "Arkadaşların önünde el tutuş vs öpüş — kültür ayarı. 'Hey, save it for the cab' kalıbı.",
    durationMin: 7,
    mode: "flirt",
    cefrLevel: "B1",
    skillId: "flirt.friends",
    lessonId: "flirt.friends.11.4",
    isNew: true,
    progressLabel: "4/5 ders · B1",
  },
  {
    id: "scene-flirt-friends-11-5",
    emoji: "📞",
    title: "Sonradan rapor —\n'they actually\nliked you'",
    description:
      "Partiden sonra debrief: 'Sarah said you were genuinely funny — and she hates everyone.' Tatlı geri bildirim.",
    durationMin: 6,
    mode: "flirt",
    cefrLevel: "B1",
    skillId: "flirt.friends",
    lessonId: "flirt.friends.11.5",
    isNew: true,
    progressLabel: "5/5 ders · B1 ✓",
  },

  // ─────────────────────────────────────────────────────────────
  // CULTURAL TRANSLATION — Turkish customs to partner (5 scenes, B1-B2)
  // skillId: flirt.culture
  // ─────────────────────────────────────────────────────────────
  {
    id: "scene-flirt-culture-12-1",
    emoji: "🇹🇷",
    title: "Türk geleneğini anlat —\negzotikleştirme,\nmistik yapma",
    description:
      "'It's basically X but with Y' kalıbı. Egzotikleştirme yok. 'Think Thanksgiving energy but louder'.",
    durationMin: 9,
    mode: "flirt",
    cefrLevel: "B2",
    skillId: "flirt.culture",
    lessonId: "flirt.culture.12.1",
    isNew: true,
    progressLabel: "1/5 ders · B2",
  },
  {
    id: "scene-flirt-culture-12-2",
    emoji: "👵",
    title: "Annenle telefon —\nyanında çevir,\nutanma",
    description:
      "Türkçe konuşurken İngilizce özetle: 'She's asking if you've eaten — yes, that's a love language here'.",
    durationMin: 8,
    mode: "flirt",
    cefrLevel: "B1",
    skillId: "flirt.culture",
    lessonId: "flirt.culture.12.2",
    isNew: true,
    progressLabel: "2/5 ders · B1",
  },
  {
    id: "scene-flirt-culture-12-3",
    emoji: "🌙",
    title: "Ramazan ya da bayram —\n'I won't be drinking\nthis month'",
    description:
      "Dini/kültürel pratiği savunmasız anlat: 'I don't expect you to do it, but it matters to me'.",
    durationMin: 9,
    mode: "flirt",
    cefrLevel: "B2",
    skillId: "flirt.culture",
    lessonId: "flirt.culture.12.3",
    isNew: true,
    progressLabel: "3/5 ders · B2",
  },
  {
    id: "scene-flirt-culture-12-4",
    emoji: "👨‍👩‍👧",
    title: "Aileyi tanıtmaya hazırla —\n'they're loud,\nthey'll feed you'",
    description:
      "Briefing: 'Dad will ask about politics, just deflect. Mom hugs everyone. Don't refuse food twice'.",
    durationMin: 9,
    mode: "flirt",
    cefrLevel: "B2",
    skillId: "flirt.culture",
    lessonId: "flirt.culture.12.4",
    isNew: true,
    progressLabel: "4/5 ders · B2",
  },
  {
    id: "scene-flirt-culture-12-5",
    emoji: "🎁",
    title: "Onların bayramı —\nNoel, Hanukkah,\nThanksgiving",
    description:
      "İlk yabancı tatil ziyareti: 'walk me through it' + 'what do I bring?' + uygun selamlama.",
    durationMin: 8,
    mode: "flirt",
    cefrLevel: "B1",
    skillId: "flirt.culture",
    lessonId: "flirt.culture.12.5",
    isNew: true,
    progressLabel: "5/5 ders · B1 ✓",
  },

  // ─────────────────────────────────────────────────────────────
  // REAL DISAGREEMENTS (5 scenes, B2)
  // skillId: flirt.conflict
  // ─────────────────────────────────────────────────────────────
  {
    id: "scene-flirt-conflict-13-1",
    emoji: "🗣️",
    title: "'We need to talk' —\nkorku salmadan\nkonuyu aç",
    description:
      "Klişe cümlenin yumuşatması: 'Nothing scary — just want to talk through something when you have 20 min'.",
    durationMin: 10,
    mode: "flirt",
    cefrLevel: "B2",
    skillId: "flirt.conflict",
    lessonId: "flirt.conflict.13.1",
    isNew: true,
    progressLabel: "1/5 ders · B2",
  },
  {
    id: "scene-flirt-conflict-13-2",
    emoji: "🧊",
    title: "Tartışma sonrası\nsoğukluk —\nilk hamleyi yap",
    description:
      "'I've been sitting with what you said' + 'you weren't wrong about X' — gurur değil, ilişki.",
    durationMin: 10,
    mode: "flirt",
    cefrLevel: "B2",
    skillId: "flirt.conflict",
    lessonId: "flirt.conflict.13.2",
    isNew: true,
    progressLabel: "2/5 ders · B2",
  },
  {
    id: "scene-flirt-conflict-13-3",
    emoji: "💢",
    title: "İhtiyacını söyle —\n'I need' demek\nsuçlama değil",
    description:
      "'You never' yerine 'I need more X' formülü. Karşı taraf savunmaya geçmez.",
    durationMin: 11,
    mode: "flirt",
    cefrLevel: "B2",
    skillId: "flirt.conflict",
    lessonId: "flirt.conflict.13.3",
    isNew: true,
    progressLabel: "3/5 ders · B2",
  },
  {
    id: "scene-flirt-conflict-13-4",
    emoji: "⏸️",
    title: "Mola iste —\n'I need 10 minutes\nbefore I respond'",
    description:
      "Sinirliyken konuşma. 'I'm too heated to be useful right now — let me come back to this'. Olgun ayar.",
    durationMin: 9,
    mode: "flirt",
    cefrLevel: "B2",
    skillId: "flirt.conflict",
    lessonId: "flirt.conflict.13.4",
    isNew: true,
    progressLabel: "4/5 ders · B2",
  },
  {
    id: "scene-flirt-conflict-13-5",
    emoji: "🤲",
    title: "Özür — gerçek vs.\n'sorry you feel\nthat way'",
    description:
      "Sahte özür tuzağı. Gerçek özür: ne yaptın + etkisi + ne yapacaksın. 'I was dismissive. That was on me'.",
    durationMin: 10,
    mode: "flirt",
    cefrLevel: "B2",
    skillId: "flirt.conflict",
    lessonId: "flirt.conflict.13.5",
    isNew: true,
    progressLabel: "5/5 ders · B2 ✓",
  },

  // ─────────────────────────────────────────────────────────────
  // MODERN DATING DYNAMICS (3 scenes, B2)
  // skillId: flirt.modern
  // ─────────────────────────────────────────────────────────────
  {
    id: "scene-flirt-modern-14-1",
    emoji: "👻",
    title: "Ghosting toparlama —\n'I'm not going to\nchase this'",
    description:
      "Birkaç hafta sonra dönen kişiye: 'Glad you're okay. I've moved on from the conversation though.' Net + temiz.",
    durationMin: 9,
    mode: "flirt",
    cefrLevel: "B2",
    skillId: "flirt.modern",
    lessonId: "flirt.modern.14.1",
    isNew: true,
    progressLabel: "1/3 ders · B2",
  },
  {
    id: "scene-flirt-modern-14-2",
    emoji: "🍞",
    title: "Breadcrumbing call-out —\n'this feels like\nlow effort'",
    description:
      "Haftada bir 'hey stranger' atan kişi. 'I'm noticing a pattern — you reach out when it's convenient'. Sınır.",
    durationMin: 10,
    mode: "flirt",
    cefrLevel: "B2",
    skillId: "flirt.modern",
    lessonId: "flirt.modern.14.2",
    isNew: true,
    progressLabel: "2/3 ders · B2",
  },
  {
    id: "scene-flirt-modern-14-3",
    emoji: "🔀",
    title: "Situationship\nya da ENM —\nnetlik konuşması",
    description:
      "'Are we labelling this?' + 'I'm not poly, just want to be clear.' Yargısız, açık, doğrudan dil.",
    durationMin: 11,
    mode: "flirt",
    cefrLevel: "B2",
    skillId: "flirt.modern",
    lessonId: "flirt.modern.14.3",
    isNew: true,
    progressLabel: "3/3 ders · B2 ✓",
  },

  // ─────────────────────────────────────────────────────────────
  // ROMANCE ESCALATION (3 scenes, B1-B2)
  // skillId: flirt.escalation
  // ─────────────────────────────────────────────────────────────
  {
    id: "scene-flirt-escalation-15-1",
    emoji: "❤️",
    title: "İlk 'I love you' —\nzamanlama + cesaret,\nağzına yapıştırmadan",
    description:
      "Romantik anı değil sıradan an seç. 'I wasn't planning to say this yet, but — I love you.' Karşılık beklemeden.",
    durationMin: 10,
    mode: "flirt",
    cefrLevel: "B2",
    skillId: "flirt.escalation",
    lessonId: "flirt.escalation.15.1",
    isNew: true,
    progressLabel: "1/3 ders · B2",
  },
  {
    id: "scene-flirt-escalation-15-2",
    emoji: "👋",
    title: "Onun ailesiyle\ntanışma —\n'firm handshake,\nask follow-ups'",
    description:
      "Ebeveyn izlenimi: isimleri tekrarla, küçük detayları hatırla, telefonu uzak tut. 'Thank you for having me'.",
    durationMin: 9,
    mode: "flirt",
    cefrLevel: "B1",
    skillId: "flirt.escalation",
    lessonId: "flirt.escalation.15.2",
    isNew: true,
    progressLabel: "2/3 ders · B1",
  },
  {
    id: "scene-flirt-escalation-15-3",
    emoji: "🔑",
    title: "Birlikte yaşamak —\nkira, eşya, sınır\nkonuşması",
    description:
      "'Should we look at places?' + 'how do you feel about chores?' — romantik değil pratik dil. Beklenti yönetimi.",
    durationMin: 12,
    mode: "flirt",
    cefrLevel: "B2",
    skillId: "flirt.escalation",
    lessonId: "flirt.escalation.15.3",
    isNew: true,
    progressLabel: "3/3 ders · B2 ✓",
  },
];
