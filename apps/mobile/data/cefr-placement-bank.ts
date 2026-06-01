// CEFR Placement question bank (Adım: 2026-05-21, 2026-05-25 revize).
//
// Adaptive test havuzu — her CEFR seviyesi için 8 multiple-choice soru.
// Sorular Türk öğrencisinin sıklıkla yanılgıya düştüğü noktalardan
// seçildi (mistake-patterns.ts ile aynı pedagojik yatak).
//
// Her seviyede çeşitlilik var:
//   - Grammar gap (boşluk doldurma) — ~3/8
//   - Türkçe → English çeviri seçimi — ~2/8
//   - Vocabulary / idiom seçimi — ~2/8
//   - "Spot the error" (yanlış cümleyi seç) — ~1/8
// Bu karışım, sadece grammar'da iyi olan kullanıcıların testi "oyun"
// olarak geçmesini engeller.
//
// Adaptive algoritma (Phase 5B — 2026-05-25):
//   - B1 ile başla (median)
//   - Tek cevapla zıplamaz; arka arkaya iki doğru → bir üst seviye,
//     arka arkaya iki yanlış → bir alt seviye
//   - 12 soru sonra final = son 6 soruda adaptive'in oturduğu dominant seviye,
//     son pencere doğruluğu çok yüksek/düşükse ±1 band kalibrasyon.
//   - Edge cases:
//     * 12/12 doğru → adaptive C2'de tıkanır → dominant C2 → final C2
//     * 12/12 yanlış → adaptive A1'de tıkanır → dominant A1 → final A1
//   - Bu yaklaşım tek bir şanslı yüksek seviye doğruyu fazla ödüllendirmez;
//     son pencerenin seviye dağılımı + doğruluk oranını birlikte ölçer.
//
// 48 soru total — 12 soru görür kullanıcı, sıkça oynanan placement test
// olarak hızlı + bilgi sızdırmaz.

import type { CefrLevel } from "../lib/cefr-level";

export interface PlacementQuestion {
  id: string;
  level: CefrLevel;
  /** Soru cümlesi (Türkçe veya İngilizce — type'a göre değişir). */
  prompt: string;
  /** Türkçe ipucu — opsiyonel, kafa karışıklığını azaltır. */
  prompt_tr?: string;
  /** 4 seçenek. */
  options: string[];
  /** options[] içindeki doğru index. */
  correct_index: number;
  /** Sonradan kullanıcıya "neden yanlış" gösterilir. */
  explanation_tr: string;
}

// ============================================================
// A1 — başlangıç
// ============================================================
const A1: PlacementQuestion[] = [
  {
    id: "a1.1",
    level: "A1",
    prompt: "She ___ a teacher.",
    options: ["is", "are", "am", "be"],
    correct_index: 0,
    explanation_tr: "Tekil 3. şahıs (she/he/it) → 'is'. 'Are' çoğul için.",
  },
  {
    id: "a1.2",
    level: "A1",
    prompt: "Türkçe 'Adım Berk' karşılığı?",
    options: [
      "I am Berk.",
      "My is Berk.",
      "Me Berk.",
      "I have Berk.",
    ],
    correct_index: 0,
    explanation_tr: "'My name is Berk' veya kısaca 'I am Berk'. 'Me' özne değil.",
  },
  {
    id: "a1.3",
    level: "A1",
    prompt: "___ you from Istanbul?",
    options: ["Are", "Is", "Do", "Have"],
    correct_index: 0,
    explanation_tr: "'You' için her zaman 'Are'. 'Is' tekil 3. şahıs.",
  },
  {
    id: "a1.4",
    level: "A1",
    prompt: "Türkçe 'iki kedim var' karşılığı?",
    options: [
      "I have two cats.",
      "I have two cat.",
      "I am two cats.",
      "Two cats my.",
    ],
    correct_index: 0,
    explanation_tr: "Çoğul → 'cats' (-s). 'I have' sahiplik için.",
  },
  {
    id: "a1.5",
    level: "A1",
    prompt: "He has ___ apple.",
    options: ["an", "a", "the", "—"],
    correct_index: 0,
    explanation_tr:
      "Sesli harfle başlayan tekil isim (apple → 'a' sesi) → 'an'. Türk öğrenciler 'a apple' der ama bu yanlış; sesli harf öncesi 'an' kullanılır.",
  },
  {
    id: "a1.6",
    level: "A1",
    prompt: "Türkçe 'Onlar mutlu' karşılığı?",
    options: [
      "They are happy.",
      "They is happy.",
      "They happy.",
      "Them are happy.",
    ],
    correct_index: 0,
    explanation_tr:
      "'They' çoğul → 'are'. Türkçede yardımcı fiil yok ('Onlar mutlu') ama İngilizce'de 'be' fiili şart: They ARE happy.",
  },
  {
    id: "a1.7",
    level: "A1",
    prompt: "Hangi cümle GRAMER OLARAK YANLIŞ?",
    options: [
      "She have a dog.",
      "She has a dog.",
      "I have a dog.",
      "They have a dog.",
    ],
    correct_index: 0,
    explanation_tr:
      "Tekil 3. şahıs (he/she/it) → 'has', diğerleri → 'have'. 'She have' Türk öğrencilerin klasik hatası; doğrusu 'She HAS'.",
  },
  {
    id: "a1.8",
    level: "A1",
    prompt: "Türkçe 'okula gitmem' karşılığı?",
    options: [
      "I don't go to school.",
      "I no go to school.",
      "I am not go to school.",
      "I don't going to school.",
    ],
    correct_index: 0,
    explanation_tr:
      "Geniş zaman (alışkanlık) olumsuz: don't + fiilin yalın hali. 'I no go' Türkçe düşünme hatasıdır; doğrusu 'I don't go'.",
  },
];

// ============================================================
// A2 — temel
// ============================================================
const A2: PlacementQuestion[] = [
  {
    id: "a2.1",
    level: "A2",
    prompt: "I ___ a movie last night.",
    options: ["watched", "watch", "am watching", "will watch"],
    correct_index: 0,
    explanation_tr:
      "'Last night' geçmiş zaman ifadesi → past simple → 'watched'.",
  },
  {
    id: "a2.2",
    level: "A2",
    prompt: "There ___ many people at the party.",
    options: ["were", "was", "is", "are"],
    correct_index: 0,
    explanation_tr:
      "'Many people' çoğul + 'at the party' geçmiş (was/were) — 'were'.",
  },
  {
    id: "a2.3",
    level: "A2",
    prompt: "Türkçe 'her sabah koşarım' karşılığı?",
    options: [
      "I run every morning.",
      "I am running every morning.",
      "I will run every morning.",
      "I ran every morning.",
    ],
    correct_index: 0,
    explanation_tr:
      "Sürekli alışkanlık → present simple. 'I am running' şu an oluyor.",
  },
  {
    id: "a2.4",
    level: "A2",
    prompt: "She doesn't ___ coffee.",
    options: ["drink", "drinks", "drinking", "drank"],
    correct_index: 0,
    explanation_tr:
      "'Doesn't' var → fiil sade (drink). 'Doesn't drinks' yanlış.",
  },
  {
    id: "a2.5",
    level: "A2",
    prompt: "I ___ to Paris last summer.",
    options: ["went", "goed", "go", "have gone"],
    correct_index: 0,
    explanation_tr:
      "'Go' düzensiz fiil: go → went → gone. 'Goed' diye bir kelime yok; Türk öğrenciler düzensiz fiilleri ezberlemediği için '-ed' eklemeye çalışır.",
  },
  {
    id: "a2.6",
    level: "A2",
    prompt: "The meeting is ___ Monday.",
    options: ["on", "in", "at", "to"],
    correct_index: 0,
    explanation_tr:
      "Günler için 'on' (on Monday), aylar/yıllar için 'in' (in May), saatler için 'at' (at 3pm). Türkçede tek edat ('Pazartesi') olduğu için karıştırılır.",
  },
  {
    id: "a2.7",
    level: "A2",
    prompt: "Türkçe 'Bu çocukları tanıyor musun?' karşılığı?",
    options: [
      "Do you know these children?",
      "Do you know this children?",
      "Are you know these children?",
      "Do you know these childs?",
    ],
    correct_index: 0,
    explanation_tr:
      "Çoğul → 'these' (this değil). 'Child' düzensiz çoğul: childs DEĞİL, 'children'. Soru kalıbı 'Do you...?' — 'Are you know' yanlış.",
  },
  {
    id: "a2.8",
    level: "A2",
    prompt: "Hangi cümle GRAMER OLARAK YANLIŞ?",
    options: [
      "I can to swim.",
      "I can swim.",
      "She can dance.",
      "Can you help me?",
    ],
    correct_index: 0,
    explanation_tr:
      "Modal fiillerden sonra (can, will, must, should) 'to' GELMEZ — direkt base form. 'I can to swim' yaygın Türk hatası; doğrusu 'I can swim'.",
  },
];

// ============================================================
// B1 — orta
// ============================================================
const B1: PlacementQuestion[] = [
  {
    id: "b1.1",
    level: "B1",
    prompt: "I ___ here for 3 years.",
    options: [
      "have lived",
      "live",
      "am living",
      "lived",
    ],
    correct_index: 0,
    explanation_tr:
      "'For 3 years' süresince devam ediyor → present perfect. 'I live' sadece şimdiyi söyler.",
  },
  {
    id: "b1.2",
    level: "B1",
    prompt: "If I ___ rich, I would travel.",
    options: ["were", "was", "am", "will be"],
    correct_index: 0,
    explanation_tr:
      "Hayal/şart cümlesi (2nd conditional) → if + were/was + would. Formal İngilizcede 'were'.",
  },
  {
    id: "b1.3",
    level: "B1",
    prompt: "Türkçe 'sıkıldım senden' karşılığı?",
    options: [
      "I'm bored of you.",
      "I'm bored from you.",
      "I bored you.",
      "I'm boring of you.",
    ],
    correct_index: 0,
    explanation_tr:
      "'Bored OF' veya 'bored WITH'. 'From' Türkçe etkisi. 'I'm boring' = 'sen sıkıcısın'.",
  },
  {
    id: "b1.4",
    level: "B1",
    prompt: "She told me ___ wait.",
    options: ["to", "for", "that", "—"],
    correct_index: 0,
    explanation_tr:
      "'Tell someone TO do' kalıbı. 'For' yanlış prep.",
  },
  {
    id: "b1.5",
    level: "B1",
    prompt: "I ___ Paris twice in my life.",
    options: [
      "have visited",
      "visited",
      "have been visited",
      "am visiting",
    ],
    correct_index: 0,
    explanation_tr:
      "'In my life' = hayat tecrübesi (henüz biten bir zaman değil) → present perfect. Türk öğrenciler 'visited' der (past simple) ama 'in my life' present perfect tetikleyicisi.",
  },
  {
    id: "b1.6",
    level: "B1",
    prompt: "I enjoy ___ books in the evening.",
    options: ["reading", "to read", "read", "to reading"],
    correct_index: 0,
    explanation_tr:
      "'Enjoy' + V-ing (gerund). enjoy/finish/avoid/mind hep gerund alır. 'Enjoy to read' yaygın Türk hatası — doğrusu 'enjoy READING'.",
  },
  {
    id: "b1.7",
    level: "B1",
    prompt: "Türkçe 'Bu ev tahtadan yapılmış' karşılığı?",
    options: [
      "This house is made of wood.",
      "This house is made by wood.",
      "This house is made from wood.",
      "This house made wood.",
    ],
    correct_index: 0,
    explanation_tr:
      "Malzeme + görünür → 'made OF'. 'Made by' = kişi/aktör (made by my father). 'Made from' = işlenmiş/dönüşmüş malzeme (wine is made from grapes). Çoğu Türk öğrenci 'made by' der — yanlış.",
  },
  {
    id: "b1.8",
    level: "B1",
    prompt: "If it rains tomorrow, we ___ stay home.",
    options: ["will", "would", "are", "—"],
    correct_index: 0,
    explanation_tr:
      "1st conditional (gerçekçi gelecek): if + present, WILL + base. 'Would' 2nd conditional için (hayali). Türk öğrenciler ikisini karıştırır.",
  },
];

// ============================================================
// B2 — orta-üstü
// ============================================================
const B2: PlacementQuestion[] = [
  {
    id: "b2.1",
    level: "B2",
    prompt: "By the time we arrived, the movie ___.",
    options: [
      "had started",
      "started",
      "has started",
      "was starting",
    ],
    correct_index: 0,
    explanation_tr:
      "Geçmişte bir olaydan önce olan başka bir olay → past perfect (had + V3).",
  },
  {
    id: "b2.2",
    level: "B2",
    prompt: "He suggested ___ a break.",
    options: ["taking", "to take", "take", "we take"],
    correct_index: 0,
    explanation_tr:
      "'Suggest' + V-ing (gerund). 'To take' yanlış. ('We take' da olur ama subordinate clause olur.)",
  },
  {
    id: "b2.3",
    level: "B2",
    prompt: "A: Can I use your laptop for a minute?\nB: Actually, I'd rather you ___.",
    options: ["didn't", "don't", "won't", "not"],
    correct_index: 0,
    explanation_tr:
      "Diyalogda kibar reddetme: 'I'd rather you didn't' (Yapmasan daha iyi olur). 'I'd rather' kalıbından sonra başka bir özne geliyorsa Past Simple yardımcı fiili (didn't) kullanılır.",
  },
  {
    id: "b2.4",
    level: "B2",
    prompt: "Türkçe 'bunu yaparsam, daha iyi olur' karşılığı?",
    options: [
      "If I do this, it'll be better.",
      "If I would do this, it would be better.",
      "I do this, it better.",
      "When I will do this, it better.",
    ],
    correct_index: 0,
    explanation_tr:
      "1st conditional: if + present simple, will + base. 'Would' her iki yerde fazla.",
  },
  {
    id: "b2.5",
    level: "B2",
    prompt: "She said she ___ tired the day before.",
    options: [
      "had been",
      "has been",
      "was",
      "is",
    ],
    correct_index: 0,
    explanation_tr:
      "Reported speech: direkt 'I was tired yesterday' → indirekt 'she HAD BEEN tired the day before'. Past → past perfect kayar. 'Yesterday' → 'the day before' de değişir.",
  },
  {
    id: "b2.6",
    level: "B2",
    prompt: "You ___ told me earlier — now it's too late!",
    options: [
      "should have",
      "should",
      "must have",
      "should had",
    ],
    correct_index: 0,
    explanation_tr:
      "Geçmişte yapılmayan tavsiye/pişmanlık → 'should have + V3'. 'Must have' = geçmiş çıkarım ('mutlaka söylemiştir'). 'Should had' diye bir kalıp YOK.",
  },
  {
    id: "b2.7",
    level: "B2",
    prompt: "Türkçe 'Konferans 200 kişi tarafından izlendi' karşılığı?",
    options: [
      "The conference was watched by 200 people.",
      "The conference watched by 200 people.",
      "The conference is watched by 200 people.",
      "200 people watched by the conference.",
    ],
    correct_index: 0,
    explanation_tr:
      "Passive voice geçmiş: was/were + V3 + by. 'Conference watched' (auxiliary olmadan) yanlış. 'Is watched' geniş zaman olur — Türkçedeki '-di' geçmiş tetikleyicisi.",
  },
  {
    id: "b2.8",
    level: "B2",
    prompt: "Hangi cümle GRAMER OLARAK YANLIŞ?",
    options: [
      "If I would have known, I would have called.",
      "If I had known, I would have called.",
      "Had I known, I would have called.",
      "I wish I had known.",
    ],
    correct_index: 0,
    explanation_tr:
      "3rd conditional: if + PAST PERFECT (had + V3), would have + V3. 'If I would have' İngilizce'de YANLIŞ (yaygın hata olsa da). Doğrusu 'If I HAD known'.",
  },
];

// ============================================================
// C1 — ileri
// ============================================================
const C1: PlacementQuestion[] = [
  {
    id: "c1.1",
    level: "C1",
    prompt: "Hardly ___ down when the phone rang.",
    options: [
      "had I sat",
      "I had sat",
      "I sat",
      "did I sit",
    ],
    correct_index: 0,
    explanation_tr:
      "Cümlenin başında negative/limiting adverb (hardly, scarcely, no sooner) → inversion: aux + subject + V.",
  },
  {
    id: "c1.2",
    level: "C1",
    prompt: "A: Why is John so persistent?\nB: He insisted that she ___ present at the meeting.",
    options: ["be", "is", "was", "would be"],
    correct_index: 0,
    explanation_tr:
      "Talep/ısrar bildiren fiillerden (insist, demand, recommend) sonra gelen 'that' cümleciğinde subjunctive (fiilin yalın hali - bare infinitive) kullanılır: 'insisted that she be'.",
  },
  {
    id: "c1.3",
    level: "C1",
    prompt: "The proposal, ___ was unexpected, was approved.",
    options: ["which", "that", "what", "who"],
    correct_index: 0,
    explanation_tr:
      "Non-defining relative clause (virgüllerle) → sadece 'which' kullanılır. 'That' restrictive için.",
  },
  {
    id: "c1.4",
    level: "C1",
    prompt: "Had I known, I ___ differently.",
    options: [
      "would have acted",
      "had acted",
      "would act",
      "will act",
    ],
    correct_index: 0,
    explanation_tr:
      "3rd conditional inversion: 'Had I known' = 'If I had known' → would have V3.",
  },
  {
    id: "c1.5",
    level: "C1",
    prompt: "If she had studied medicine, she ___ a doctor now.",
    options: [
      "would be",
      "would have been",
      "is",
      "will be",
    ],
    correct_index: 0,
    explanation_tr:
      "Mixed conditional: geçmiş şart (3rd if-clause) + şimdiki sonuç (2nd main clause). 'Had studied' geçmiş ama 'now' şimdi → would BE (would have been DEĞİL).",
  },
  {
    id: "c1.6",
    level: "C1",
    prompt: "The committee ___ of five members.",
    options: ["comprises", "comprises of", "is comprised", "comprised by"],
    correct_index: 0,
    explanation_tr:
      "'Comprise' kendisi 'içerir' demek, preposition ALMAZ. 'Comprises of' yaygın bir hata; doğrusu 'comprises' veya 'is composed of' / 'consists of'. C1 register'ında çok ayırt edici.",
  },
  {
    id: "c1.7",
    level: "C1",
    prompt: "Türkçe 'Bu rapor, durumu yeterince ortaya koymuyor' karşılığı?",
    options: [
      "This report does not adequately portray the situation.",
      "This report is not adequate to portray the situation.",
      "This report not portrays adequately the situation.",
      "This report doesn't portray adequate the situation.",
    ],
    correct_index: 0,
    explanation_tr:
      "Zarf yeri: 'adequately' (zarf) ana fiilin ÖNÜNE gelir → 'does not adequately portray'. 'Adequate' sıfat — yanlış kategori. C1 register'ında 'portray' resmi seçim.",
  },
  {
    id: "c1.8",
    level: "C1",
    prompt: "Hangi cümle GRAMER OLARAK YANLIŞ?",
    options: [
      "Despite of the rain, we went out.",
      "Despite the rain, we went out.",
      "In spite of the rain, we went out.",
      "Although it was raining, we went out.",
    ],
    correct_index: 0,
    explanation_tr:
      "'Despite' kendisi preposition — 'of' ALMAZ. 'In spite OF' alır ama 'despite OF' YANLIŞ. Türk öğrencilerin C1 seviyesinde dahi yaptığı klasik karışım.",
  },
];

// ============================================================
// C2 — ustalık (mastery)
// ============================================================
// Native speaker bile bazılarını kaçırabilir. Cleft sentences,
// advanced subjunctive, nuanced collocations, register-discriminating
// idioms. Türk öğrencisinin C2 seviyesinde dahi tökezlediği noktalar.
const C2: PlacementQuestion[] = [
  {
    id: "c2.1",
    level: "C2",
    prompt: "___ for his timely intervention, the deal would have collapsed.",
    options: [
      "Were it not",
      "If it was not",
      "Was it not",
      "Had it not",
    ],
    correct_index: 0,
    explanation_tr:
      "Formal subjunctive inversion: 'Were it not for X' = 'If it were not for X'. 'Was it not' colloquial subjunctive, formal C2 register'da 'were' tercih edilir. 'Had it not' yalnızca past perfect ile çalışır (Had it not BEEN for...). 'Were it not for' kalıbı şart ifade eder.",
  },
  {
    id: "c2.2",
    level: "C2",
    prompt: "It was the manager ___ I spoke to, not the assistant.",
    options: ["whom", "who", "which", "that which"],
    correct_index: 0,
    explanation_tr:
      "Cleft sentence + preposition'un nesnesi → formal English'te 'whom' (object case). Spoken English'te 'who' yaygın ama formal register'da 'whom' doğru. 'Which' insanlar için yanlış. C2'de case ayrımı kritik.",
  },
  {
    id: "c2.3",
    level: "C2",
    prompt: "Such ___ that the entire ecosystem was transformed.",
    options: [
      "was the impact",
      "the impact was",
      "was impact",
      "had the impact been",
    ],
    correct_index: 0,
    explanation_tr:
      "'Such + be + subject + that' inversion: 'Such was the impact that...'. Normal sıra 'The impact was such that' olur ama 'Such' başa alındığında inversion ŞART. C2 edebi register.",
  },
  {
    id: "c2.4",
    level: "C2",
    prompt: "The evidence lent ___ to the prosecutor's theory.",
    options: [
      "credence",
      "credit",
      "credibility",
      "credentials",
    ],
    correct_index: 0,
    explanation_tr:
      "Sabit kolokasyon: 'lend credence TO' = inandırıcılık katmak. 'Credit' borç/övgü, 'credibility' kişinin güvenilirliği, 'credentials' belgeler. Anlam yakın ama collocation tek doğru: 'credence'. Bu tür incelikli kelime seçimi C2 ayırt edicisi.",
  },
  {
    id: "c2.5",
    level: "C2",
    prompt: "Türkçe 'Keşke gerçeği daha önce bilseydim' (edebi/yüksek register) karşılığı?",
    options: [
      "Would that I had known the truth sooner.",
      "I wish I would have known the truth sooner.",
      "If only I would know the truth sooner.",
      "I wish I knew the truth more before.",
    ],
    correct_index: 0,
    explanation_tr:
      "Edebi 'wish' alternatifi: 'Would that + past perfect' = geçmiş için pişmanlık (formal/literary). 'I wish I would have known' YANLIŞ — wish'ten sonra 'would have' kullanılmaz; 'had known' doğru. Standart versiyon: 'I wish I had known'.",
  },
  {
    id: "c2.6",
    level: "C2",
    prompt: "A: Why did she keep the contract locked in the safe?\nB: She was terrified ___ it fall into the wrong hands.",
    options: ["lest", "unless", "in case", "so that"],
    correct_index: 0,
    explanation_tr:
      "'Lest' = '-mesin diye' veya 'korkusuyla' anlamına gelen edebi bir bağlaçtır ve peşinden subjunctive fiil (yalın hali, 'fall' takısız) alır. 'Lest it fall' = 'yanlış ellere geçmesi korkusuyla'.",
  },
  {
    id: "c2.7",
    level: "C2",
    prompt: "Hangi cümle GRAMER VEYA REGISTER OLARAK YANLIŞ?",
    options: [
      "Whomever did this must come forward.",
      "Whoever did this must come forward.",
      "I'll give it to whoever wants it.",
      "She'll hire whomever she interviews.",
    ],
    correct_index: 0,
    explanation_tr:
      "'Whoever/whomever' içinden GEÇTİĞİ yan cümlenin rolü belirler, dış cümle değil. 'Did this' fiil → SUBJECT lazım → 'whoever' (object 'whomever' DEĞİL). Yaygın hyper-correction: insanlar 'whomever' daha 'eğitimli' duyduğu için yanlış yerlerde kullanır. C2 case-sensitivity testi.",
  },
  {
    id: "c2.8",
    level: "C2",
    prompt: "The findings, ___ controversial, were ultimately accepted by the academic community.",
    options: [
      "albeit",
      "although",
      "even though it was",
      "despite being",
    ],
    correct_index: 0,
    explanation_tr:
      "'Albeit' = -se de (concessive conjunction, formal). Tek başına sıfat/zarf/isim cümleciği önüne gelir — özne+fiil GEREKMEZ ('albeit controversial'). 'Although' tam cümle ister ('although they WERE controversial'). 'Despite being' de doğru olabilirdi ama 'albeit' tek kelime + ekonomik — C2 yazılı register'da tercih edilir. 'Even though it was' burada singular/plural uyumsuz (findings = plural).",
  },
];

export const PLACEMENT_BANK: Record<CefrLevel, PlacementQuestion[]> = {
  A1,
  A2,
  B1,
  B2,
  C1,
  C2,
};

// ============================================================
// Adaptive helpers
// ============================================================

export const CEFR_ORDER: CefrLevel[] = ["A1", "A2", "B1", "B2", "C1", "C2"];

export function nextLevelUp(l: CefrLevel): CefrLevel {
  const idx = CEFR_ORDER.indexOf(l);
  return CEFR_ORDER[Math.min(CEFR_ORDER.length - 1, idx + 1)]!;
}

export function nextLevelDown(l: CefrLevel): CefrLevel {
  const idx = CEFR_ORDER.indexOf(l);
  return CEFR_ORDER[Math.max(0, idx - 1)]!;
}

export function pickQuestionFromLevel(
  level: CefrLevel,
  usedIds: Set<string>,
): PlacementQuestion | null {
  const pool = PLACEMENT_BANK[level] ?? [];
  const candidates = pool.filter((q) => !usedIds.has(q.id));
  if (candidates.length === 0) return pool[0] ?? null;
  return candidates[Math.floor(Math.random() * candidates.length)]!;
}

/**
 * Pencere boyutu — son N cevabın "dominant level"'ı final için kullanılır.
 *
 * Neden 6? Tipik 12-soruluk akışta ilk 6 soru adaptive engine'in kullanıcı
 * seviyesini ARAMASI (B1'den ±1 kaybolarak gerçek seviyeye yaklaşır), son
 * 6 soru ise o seviyede OTURMASI. Final ölçümü "oturma" penceresinden alınır
 * — arama gürültüsü filtrelenir.
 */
export const PLACEMENT_FINAL_WINDOW = 6;

/**
 * Adaptive flow (Phase 5B — 2026-05-25, branching difficulty + dominant-level).
 *
 * Önceki sürümler:
 *   v1 (6 soru): "en yüksek doğru cevaplanan seviye" — kullanıcı şanslı tek
 *   doğru ile uçuyordu, üst seviyede yanlış olsa bile.
 *   v2 (10 soru): mastery-based (her seviyede correct/total ≥ 0.5) — daha
 *   güvenli ama 1/1 tek-shot doğru exception'ı hâlâ yukarıya kaçırıyordu.
 *
 * Yeni algoritma — settled-level + accuracy:
 *   1. Son PLACEMENT_FINAL_WINDOW (=6) cevabı al — yoksa hepsini al.
 *   2. Sorulan seviyelerin dağılımından adaptive engine'in oturduğu seviyeyi bul.
 *      Tie durumunda en son sorulan seviye kazanır; bu, aşağı inen kullanıcıyı
 *      gereksiz yüksek sınıflandırmayı engeller.
 *   3. Son pencere doğruluğu çok yüksekse +1, çok düşükse -1 band kalibre et.
 *
 * Edge cases:
 *   - 12/12 doğru → adaptive B1→C2'ye tırmanır, son 6 soru C2 (ya da C2'de
 *     takılan B1+B2+C1 mix) → dominant C2.
 *   - 12/12 yanlış → adaptive B1→A1'e iner, son 6 soru A1 → dominant A1.
 *   - Salınımlı performans (B1↔A2 arası) → son 6'da ikisi de var, tie →
 *     en güncel adaptive seviye seçilir.
 */
export function computeFinalLevel(
  history: { level: CefrLevel; correct: boolean }[],
): CefrLevel {
  if (history.length === 0) return "A1";

  // Son N cevap (yoksa hepsi)
  const window = history.slice(-PLACEMENT_FINAL_WINDOW);

  // 1) Adaptive engine'in son pencerede oturduğu seviyeyi bul.
  //    Sadece doğru cevaplara bakmak tek bir şanslı yüksek seviye doğruyu
  //    fazla ödüllendiriyordu; sorulan seviye dağılımı daha stabil sinyal.
  const askedCounts = new Map<CefrLevel, number>();
  for (const h of window) {
    askedCounts.set(h.level, (askedCounts.get(h.level) ?? 0) + 1);
  }

  let maxAskedCount = 0;
  for (const count of askedCounts.values()) {
    if (count > maxAskedCount) maxAskedCount = count;
  }

  let settledLevel: CefrLevel | undefined;
  for (let i = window.length - 1; i >= 0; i--) {
    const level = window[i]!.level;
    if ((askedCounts.get(level) ?? 0) === maxAskedCount) {
      settledLevel = level;
      break;
    }
  }
  settledLevel ??= history[history.length - 1]?.level;
  if (!settledLevel) return "A1";

  // 2) Son pencerenin doğruluğu seviyeyi bir band yukarı/aşağı kalibre eder.
  //    Konuşma + dinleme fazı bundan sonra yine aşağı yönlü güvenlik sağlar.
  const accuracy =
    window.filter((h) => h.correct).length / Math.max(1, window.length);
  if (accuracy >= 0.75) return nextLevelUp(settledLevel);
  if (accuracy <= 0.25) return nextLevelDown(settledLevel);
  return settledLevel;
}

// 2026-05-25 (Phase 5B): 10 → 12 (branching difficulty + dominant-of-last-6
// için window'un tam yarısını "arama" + diğer yarısını "oturma" olarak
// ayırabilmek için 12 ideal — son 6 = ölçüm penceresi).
export const PLACEMENT_QUESTION_COUNT = 12;
