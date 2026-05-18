// Sport C1 lessons — pundit-level tactical analysis, coaching philosophy,
// athlete management, sports journalism, cross-sport literacy.
// Near-native register: idiomatic, hedged disagreement, cultural references.

import type { BundledLesson } from "./cafe-lesson";

// ============================================================
// Lesson C1.1 — Maç sonrası taktik (xG ve gegenpressing)
// ============================================================
export const sportC1Lesson_1: BundledLesson = {
  id: "sport.c1.tactics.1",
  skill_id: "sport.c1.tactics",
  index: 1,
  title: "Maç Sonrası Taktik — xG ve Gegenpressing",
  description:
    "Arkadaşlarla maç sonrası tartışma. 'They racked up 2.8 xG but the press got bypassed in midfield.' Şutta üstünlük, yapıda kırılma — pundit registeri.",
  estimated_minutes: 12,
  exercises: [
    {
      id: "ex.sport.c1.1.1",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "racked up xG",
      tr_translation: "xG (beklenen gol) biriktirmek / üst üste şans yaratmak",
      example: "They racked up 2.8 xG but couldn't find the back of the net.",
      example_tr:
        "2.8 xG biriktirdiler ama topu ağlara gönderemediler.",
    },
    {
      id: "ex.sport.c1.1.2",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "press got bypassed",
      tr_translation: "Pres atlandı / pres kırıldı (orta sahada)",
      example:
        "Their gegenpressing looked sharp on paper, but the press got bypassed every time the keeper went long.",
      example_tr:
        "Gegenpressing kâğıt üstünde keskin görünüyordu ama kaleci uzun attığında pres her seferinde atlandı.",
    },
    {
      id: "ex.sport.c1.1.3",
      type: "translate",
      difficulty: 5,
      direction: "tr_to_en",
      source:
        "Şutta üstündüler ama yapı orta sahada çöktü — xG yanıltıcı olabilir.",
      target:
        "They had the edge on shots, but the structure collapsed in midfield — xG can be misleading.",
      accepted_variants: [
        "They edged the shot count, but their shape fell apart in midfield — xG doesn't tell the whole story.",
        "They racked up the chances, but the midfield structure broke down — xG can flatter you.",
        "Shot-wise they were on top, but the midfield gave way — xG can be a bit deceptive.",
        "They dominated the xG column, but the midfield was overrun — numbers can lie.",
        "They had the upper hand on shots, but the structure crumbled centrally — xG isn't gospel.",
      ],
      tr_hint:
        "C1 register: 'had the edge', 'fell apart', 'xG can be misleading/flatter you'. Hedge ile cümleyi yumuşat.",
    },
    {
      id: "ex.sport.c1.1.4",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Bir taktik analisti arkadaşınla maç sonrası tartışma. xG üstün ama maç kaybedilmiş — sebebini birlikte çözüyorsunuz.",
      npc_role: "Tactics analyst",
      setting: "Post-match podcast booth",
      turns: [
        {
          speaker: "npc",
          message:
            "Alright, 2.8 xG and still no points — what's your read on that midfield?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i('d| would) say|honestly|frankly|to be fair|look)",
            "the (press|midfield|structure|shape).{0,40}(bypassed|broke down|fell apart|collapsed|overrun)",
            "(i'?d push back gently|i'?m not sure|i half.?agree|i'?d nuance that)",
            "xg.{0,40}(misleading|flatter|tell the whole story|gospel|deceptive)",
            "(numbers|stats|data).{0,30}(lie|misleading|flatter|don'?t tell)",
            "(they|the team).{0,40}(racked up|piled up|generated).{0,20}(shots|chances|xg)",
            "the build.?up.{0,30}(broke|stuttered|laboured)",
          ],
          hint_tr:
            "Hedged opener + okuma: 'I'd push back gently on the xG narrative — the press got bypassed too often.'",
        },
        {
          speaker: "npc",
          message:
            "Fair point. But surely the gegenpressing should've smothered them after losses of possession?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(in theory|on paper|nominally).{0,40}(but|however|though)",
            "the (counter.?press|gegenpress|first wave).{0,40}(fizzled|stalled|leaked|too slow)",
            "they (left|conceded) the (half.?space|channels|wide areas)",
            "(without|with no) (compactness|cover|second line)",
            "(when|once) (the )?(first line|first wave) (was|got) beaten",
            "the rest defence.{0,30}(exposed|outnumbered|undermanned|caught short)",
          ],
          hint_tr:
            "İdealden gerçekliğe geç: 'On paper, sure — but the counter-press fizzled the moment they broke the first line.'",
        },
        {
          speaker: "npc",
          message: "Where does that leave the coach? Tweak or rebuild?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(tweak|adjustment|fine.?tune).{0,40}(not|rather than|over)",
            "(i'?d hold off|i'?d resist|too early) (on|for) (the )?panic",
            "(personnel|profile).{0,40}(issue|mismatch|wrong fit)",
            "(a |the )?(double pivot|holding six|destroyer)",
            "(form curve|trend line|trajectory).{0,30}(suggests|points|favours)",
            "(i('d| would) lean) (toward|towards)",
            "(small|minor|surgical) (tweak|adjustment|fix)",
          ],
          hint_tr:
            "Nuanced öneri: 'I'd lean toward a surgical tweak — a proper holding six, not a full rebuild.'",
        },
        {
          speaker: "npc",
          message:
            "Last one — does the xG hide the real story here, or is it the story?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(both|a bit of both|it cuts both ways)",
            "xg.{0,40}(captures|flags|signals).{0,20}(shot quality|chance creation)",
            "(but|however|that said) it (misses|underweights|can'?t see) (the )?(transitions|context|structure)",
            "(numbers are|stats are) a (starting point|baseline|first draft)",
            "(it'?s|its) the story.{0,20}(told sideways|with caveats|with footnotes)",
            "you (need|have) to (pair|marry|read).{0,30}(eye test|tape|context)",
          ],
          hint_tr:
            "Sentez ver: 'Bit of both — xG flags the chance creation, but it can't see the rest-defence collapse.'",
        },
        {
          speaker: "npc",
          message: "Sharp stuff. Let's pin it there.",
        },
      ],
    },
    {
      id: "ex.sport.c1.1.5",
      type: "recap_quiz",
      difficulty: 4,
      questions: [
        {
          question: "'They racked up 2.8 xG' nasıl en doğru çevrilir?",
          options: [
            "2.8 gol attılar",
            "Beklenen gol değerinde 2.8'i biriktirdiler (şans üretimi yüksek)",
            "Maçı 2.8 ile kazandılar",
            "Yenildiler ama topu çok kullandılar",
          ],
          correct_index: 1,
          tr_explanation:
            "'Racked up' = biriktirmek, üst üste. xG = expected goals (şans kalitesi metriği).",
        },
        {
          question: "Hedged disagreement için en doğal C1 açılış?",
          options: [
            "You are completely wrong",
            "I'd push back gently on that",
            "No, that's false",
            "Disagree totally",
          ],
          correct_index: 1,
          tr_explanation:
            "'I'd push back gently' = nazikçe itiraz. Pundit registerinde standart hedged opener.",
        },
        {
          question: "'The press got bypassed' tam ne demek?",
          options: [
            "Pres takım hakemi geçti",
            "Rakip presi orta sahada kırdı/atladı",
            "Antrenör presi iptal etti",
            "Presi unuttular",
          ],
          correct_index: 1,
          tr_explanation:
            "'Bypass the press' = presi atlamak/kırmak (genelde uzun top ya da hızlı paslaşma ile).",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson C1.2 — NBA pick-and-roll
// ============================================================
export const sportC1Lesson_2: BundledLesson = {
  id: "sport.c1.tactics.2",
  skill_id: "sport.c1.tactics",
  index: 2,
  title: "NBA Pick-and-Roll — Drop vs Switch",
  description:
    "Basketbol pundit modu. 'They're hedging hard on the ball-screen, leaving the weak-side corner open.' Spacing ve rotasyon dili.",
  estimated_minutes: 11,
  exercises: [
    {
      id: "ex.sport.c1.2.1",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "hedging on the ball-screen",
      tr_translation: "Pick-and-roll'da büyük adamın ön çıkması (geçici defans)",
      example:
        "Their big is hedging hard on the ball-screen, which buys time for the guard to recover.",
      example_tr:
        "Pivot, blokta sert ön çıkıyor — bu da oyun kurucuya geri dönmesi için zaman kazandırıyor.",
    },
    {
      id: "ex.sport.c1.2.2",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "weak-side corner",
      tr_translation: "Zayıf taraf köşesi (boşta bırakılan üçlük noktası)",
      example:
        "When you hedge, you concede the weak-side corner — that's just geometry.",
      example_tr:
        "Hedge ettiğinde zayıf taraf köşesini boş bırakırsın — bu basit geometri.",
    },
    {
      id: "ex.sport.c1.2.3",
      type: "translate",
      difficulty: 5,
      direction: "tr_to_en",
      source:
        "Drop coverage'da büyük adam geri çekiliyor; switch'te pozisyonel uyumsuzluk doğuyor.",
      target:
        "In drop coverage, the big sags back; on a switch, you end up with positional mismatches.",
      accepted_variants: [
        "Drop means the big retreats; switching creates positional mismatches.",
        "With drop coverage the big drops off; switch and you're inviting mismatches.",
        "Drop has the big bailing out; switching exposes mismatches.",
        "In drop, the big plays soft; with a switch, you live with the mismatch.",
        "Drop coverage backs the big off; switching trades that for mismatch problems.",
      ],
      tr_hint:
        "'Sag back', 'invite mismatches', 'live with the mismatch' — pundit kalıpları.",
    },
    {
      id: "ex.sport.c1.2.4",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Bir basketbol gazetecisiyle playoff serisi konuşuyorsun. Defansif şema seçimi tartışmalı.",
      npc_role: "Sports journalist",
      setting: "Pre-game shootaround",
      turns: [
        {
          speaker: "npc",
          message:
            "Their bigs are hedging on every screen. Smart adjustment or asking for trouble?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(it cuts both ways|a bit of both|depends on)",
            "(hedging|the hedge).{0,40}(buys time|disrupts rhythm|takes the ball.?handler|gets the ball out)",
            "(but|however|the flip side) (you|they).{0,30}(concede|expose|leave open).{0,30}(corner|weak.?side|skip pass)",
            "(if|when) the (rotation|tag|x.?out).{0,30}(late|slow)",
            "(against|versus) (an elite|a top.?tier) shooter",
            "(i'?d call it|i'?d label that) (gamble|calculated risk|gut check)",
          ],
          hint_tr:
            "Trade-off göster: 'Cuts both ways — the hedge disrupts rhythm but you're conceding the weak-side corner.'",
        },
        {
          speaker: "npc",
          message:
            "What about going small and switching one-through-five — does that solve it?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(in theory|on paper|nominally) (yes|sure)",
            "(switch everything|switch one through five).{0,40}(elegant|clean|tempting)",
            "(but|however).{0,30}(post.?up|mismatch|seal)",
            "(when|once) (the )?big (gets|catches).{0,30}(deep|on the block|in the paint)",
            "(rim protection|interior defence|paint touches).{0,30}(falls off|drops|suffers)",
            "(it'?s|its) a (luxury|tax|cost) you (only|can only) pay (against|versus|with)",
          ],
          hint_tr:
            "Limitle nuance: 'In theory yes — but once their big seals on the block, you're paying a tax on rim protection.'",
        },
        {
          speaker: "npc",
          message: "Series prediction — what's the swing factor?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(swing factor|hinge|fulcrum).{0,30}(transition|bench|spacing|coverage)",
            "(if|when) the (bench|second unit) (can|stays|holds)",
            "(form curve|trend line).{0,30}(points|leans|favours)",
            "(i'?d give the edge|i'?d lean) (to|toward)",
            "(home court|the building) (matters|tilts|weighs)",
            "(load management|fatigue|legs) by game (five|six|seven)",
          ],
          hint_tr:
            "Decision factor isimlendir: 'Swing factor is bench minutes — if their second unit holds, they take it in six.'",
        },
        {
          speaker: "npc",
          message:
            "One more — is this a series where analytics or feel matters more?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(both|you need both|not either.?or)",
            "(analytics|the numbers) (set|build|frame) the (baseline|priors|menu)",
            "(but|though|that said) (feel|read|instinct).{0,30}(calls|decides|wins) the (moment|possession|series)",
            "(a coach who only) (reads the data|trusts the model).{0,30}(blind|caught short|out of step)",
            "(film|tape|eye test) (still|always) (matters|carries weight|earns its keep)",
          ],
          hint_tr:
            "Sentez: 'Both — analytics frames the priors, but feel wins the moment.'",
        },
        {
          speaker: "npc",
          message: "Cracking analysis. We'll circle back tomorrow.",
        },
      ],
    },
    {
      id: "ex.sport.c1.2.5",
      type: "recap_quiz",
      difficulty: 4,
      questions: [
        {
          question: "'Drop coverage' nedir?",
          options: [
            "Pivot bloğu yıkıp geri çekilir, kalkanı geride tutar",
            "Sayı atan oyuncuyu düşürür",
            "Topu yere bırakma kuralı",
            "Saha dışına çıkma savunması",
          ],
          correct_index: 0,
          tr_explanation:
            "Drop coverage: pivot bloğa karşı geri çekilir, üçlüğü kabul edip boyayı korur.",
        },
        {
          question: "'Living with the mismatch' ne demek?",
          options: [
            "Uyumsuz oyuncularla yaşamak",
            "Pozisyonel uyumsuzluğu kabullenip oynamaya devam etmek",
            "Takımı dağıtmak",
            "Antrenörle anlaşamamak",
          ],
          correct_index: 1,
          tr_explanation:
            "'Live with the mismatch' = uyumsuzluğa razı olmak (switch sonrası standart C1 deyim).",
        },
        {
          question: "'Asking for trouble' tonu nedir?",
          options: [
            "Şaka",
            "Riskli tercih için ihtiyatlı eleştiri",
            "Saldırgan suçlama",
            "Övgü",
          ],
          correct_index: 1,
          tr_explanation:
            "'Asking for trouble' = başını derde sokmak; hedged kritik registeri.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson C1.3 — Tenis maç analizi
// ============================================================
export const sportC1Lesson_3: BundledLesson = {
  id: "sport.c1.tactics.3",
  skill_id: "sport.c1.tactics",
  index: 3,
  title: "Tenis Maç Analizi — First-Serve % ve Return Depth",
  description:
    "Slam maç sonrası okuma. 'He's living off his second serve and the return is sitting too short.' İstatistikle hikâye anlat.",
  estimated_minutes: 10,
  exercises: [
    {
      id: "ex.sport.c1.3.1",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "living off the second serve",
      tr_translation: "İkinci servisten geçinmek (birinci servis yüzdesi düşük)",
      example:
        "He's living off his second serve at 48% first-in — that's not sustainable past round three.",
      example_tr:
        "%48 birinci servisle ikinci servisten geçiniyor — bu üçüncü turdan sonra sürdürülemez.",
    },
    {
      id: "ex.sport.c1.3.2",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "return sitting short",
      tr_translation: "Karşılaması kısa kalmak (rakibe forehand yiyim sunmak)",
      example:
        "Her return is sitting too short — she's spoon-feeding him forehands.",
      example_tr:
        "Karşılaması fazla kısa — adama forehand yedirivor.",
    },
    {
      id: "ex.sport.c1.3.3",
      type: "translate",
      difficulty: 5,
      direction: "tr_to_en",
      source:
        "Birinci servisi tutmadığında ikinci servisinden alıyor; karşılayan da kısa kalınca bedavaya geliyor.",
      target:
        "When the first serve isn't landing, he's bailed out by the second; and when the returner sits short, it's a freebie.",
      accepted_variants: [
        "If the first serve misfires, the second bails him out — and a short return is gift-wrapped.",
        "He leans on the second when the first won't go in; short returns just hand him free points.",
        "Without the first serve, the second carries him; a short return is a present.",
        "The first serve falters, the second props him up — and a short return is a giveaway.",
        "He's reliant on the second serve when the first misfires; shallow returns are basically donations.",
      ],
      tr_hint:
        "'Bail out', 'gift-wrapped', 'freebie', 'donations' — tenis pundit deyimleri.",
    },
    {
      id: "ex.sport.c1.3.4",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Bir tenis koçuyla Grand Slam maç sonrası konuşuyorsun. Servis ve return derinliği üzerine teknik tartışma.",
      npc_role: "Performance coach",
      setting: "Player's box, post-match",
      turns: [
        {
          speaker: "npc",
          message:
            "First-serve percentage sat at 51 today. How worried should we be?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(worried but not panicked|measured concern|amber not red)",
            "(51|fifty.?one).{0,30}(not catastrophic|workable|on the line)",
            "(but|however|the issue is).{0,30}(against|versus) (a top|an elite|a big returner)",
            "(it'?s|its) the (second|kick) (serve|delivery).{0,30}(propped|carried|bailed)",
            "(form curve|trajectory|trend) over the last (three|four|few) (rounds|matches)",
            "(let'?s|we should) (read|frame) it (against|in the context of)",
          ],
          hint_tr:
            "Hedged tone: 'Amber, not red — 51% is workable, but his second serve has been bailing him out.'",
        },
        {
          speaker: "npc",
          message:
            "Tomorrow's opponent crushes short returns. Tactical tweak?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(depth|deeper|further back).{0,40}(non.?negotiable|the priority|key)",
            "(take time away|earlier contact|step in)",
            "(target the body|jam serve|cramp him)",
            "(mix|vary).{0,30}(slice|kick|flat)",
            "(neutralise|reset).{0,30}(rally|exchange|baseline)",
            "(i'?d look at|i'?d consider|i'?d push) (a |the )?(chip.?and.?charge|slice return)",
          ],
          hint_tr:
            "Concrete fix: 'Depth is non-negotiable — chip-and-charge on the second serve, jam the body on the first.'",
        },
        {
          speaker: "npc",
          message: "Mentally, where's his head at after that fourth-set lapse?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(he('s| is)|the head'?s) (still in it|in a good place|managing)",
            "(but|though|that said).{0,30}(body language|posture|between points)",
            "(towel|sit.?down|change.?over) routine.{0,30}(longer|drawn out|sluggish)",
            "(scar tissue|baggage|hangover) from (the )?(loss|tiebreak|fourth)",
            "(a clean start|fresh slate|reset) in (the first|set one)",
            "(self.?talk|cues|mantras).{0,30}(crisp|sharp|loose)",
          ],
          hint_tr:
            "Psikolojik okuma: 'Head's still in it, but the between-points routine got sluggish — a bit of scar tissue from the tiebreak.'",
        },
        {
          speaker: "npc",
          message:
            "If you had to pick one number that tells tomorrow's story, what is it?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(return depth|depth on return|how deep his return)",
            "(first.?strike|first four shots|opening exchange) (numbers|tally|points won)",
            "(break points (converted|saved)|bp conversion)",
            "(unforced.?to.?winner ratio|free points)",
            "(second.?serve points won|2nd serve %)",
            "i('d| would) (watch|track|lock in on)",
          ],
          hint_tr:
            "Tek metrik seç: 'Return depth — if he can't get it past the service line, it's a freebie factory.'",
        },
        {
          speaker: "npc",
          message: "Good work. Let's regroup at the morning hit.",
        },
      ],
    },
    {
      id: "ex.sport.c1.3.5",
      type: "recap_quiz",
      difficulty: 4,
      questions: [
        {
          question: "'Living off the second serve' tam olarak ne anlatır?",
          options: [
            "Sadece ikinci servisini kullanır",
            "Birinci servisi düştüğünde ikinci servisin kurtardığı bir oyun",
            "Servis atmayı bırakmıştır",
            "İkinci servisi daha hızlı atar",
          ],
          correct_index: 1,
          tr_explanation:
            "Birinci servis yüzdesi düşükken ikinci servisin maçı taşıması — sürdürülebilir değil.",
        },
        {
          question: "'Gift-wrapped' return ne demek?",
          options: [
            "Hediye paketinde gelen raket",
            "Rakibe altın tepside sunulmuş kolay top",
            "İlk hediyeli set",
            "Tören öncesi paket",
          ],
          correct_index: 1,
          tr_explanation:
            "'Gift-wrapped' = bedavaya hazırlanmış; rakibin işini kolaylaştıran top.",
        },
        {
          question: "Hedge-kritik için en C1 ifade?",
          options: [
            "Total disaster",
            "Catastrophic",
            "Amber, not red",
            "Doomed",
          ],
          correct_index: 2,
          tr_explanation:
            "'Amber, not red' = endişe verici ama acil değil; nuanced hedged kritik.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson C1.4 — Pep vs Klopp felsefe
// ============================================================
export const sportC1Lesson_4: BundledLesson = {
  id: "sport.c1.coach.1",
  skill_id: "sport.c1.coach",
  index: 1,
  title: "Pep vs Klopp — Felsefe ve In-Possession Yapı",
  description:
    "Manager karşılaştırması. 'Pep wants positional purity; Klopp will eat chaos for breakfast.' İdeoloji ve uygulama dili.",
  estimated_minutes: 13,
  exercises: [
    {
      id: "ex.sport.c1.4.1",
      type: "vocab_tile",
      difficulty: 5,
      word_or_phrase: "positional purity",
      tr_translation: "Pozisyonel saflık (her oyuncunun kendi bölgesinde kalması)",
      example:
        "Pep is obsessed with positional purity — every player has a postcode.",
      example_tr:
        "Pep pozisyonel saflığa takıntılı — her oyuncunun bir posta kodu var.",
    },
    {
      id: "ex.sport.c1.4.2",
      type: "vocab_tile",
      difficulty: 5,
      word_or_phrase: "eat chaos for breakfast",
      tr_translation: "Kaosu kahvaltıda yemek (kaostan beslenmek)",
      example:
        "Klopp's teams eat chaos for breakfast — the messier, the better.",
      example_tr:
        "Klopp'un takımları kaosu kahvaltıda yer — ne kadar karışıksa o kadar iyi.",
    },
    {
      id: "ex.sport.c1.4.3",
      type: "translate",
      difficulty: 5,
      direction: "tr_to_en",
      source:
        "Pep yapıyı önemser, Klopp yoğunluğa güvenir; ikisi de bir şeyin diğerini ezmesini istiyor.",
      target:
        "Pep cares about structure, Klopp leans on intensity; both want one to overwhelm the other.",
      accepted_variants: [
        "Pep is a structure man, Klopp a believer in intensity — each wants their lever to dominate.",
        "Where Pep prizes shape, Klopp trusts ferocity; they're both betting on their edge winning out.",
        "Pep worships positional discipline, Klopp the press; both bet one will steamroll the other.",
        "Pep builds around structure, Klopp around energy — each backing their gospel to prevail.",
        "Pep's god is structure; Klopp's is intensity — they trust one will outweigh the other.",
      ],
      tr_hint:
        "'Lean on', 'overwhelm', 'gospel', 'steamroll' — felsefi/ideolojik registerden.",
    },
    {
      id: "ex.sport.c1.4.4",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Bir UEFA antrenörlük kursu sonrası bir hocayla felsefi tartışma. Pep ve Klopp karşılaştırması yapıyorsunuz.",
      npc_role: "Performance coach",
      setting: "Coaching conference, late evening",
      turns: [
        {
          speaker: "npc",
          message:
            "If you had to coach a young squad from scratch, Pep or Klopp as your template?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(honestly|frankly|in my book|truth be told)",
            "(i'?d lean|i'?d tilt) (toward|towards)",
            "(klopp|pep)('s| is)? (model|template|gospel|book).{0,30}(travels better|less brittle|easier to teach|more forgiving)",
            "(young|developing|raw) players (need|respond to)",
            "(positional purity|structure) (is|takes) (years|a decade|a long time) to (drill|coach|teach)",
            "(intensity|the press|chaos) (is|feels) (more transferable|portable|exportable)",
            "(it'?d depend on|the answer depends on) (the league|profile|culture)",
          ],
          hint_tr:
            "Position al + hedge: 'I'd lean Klopp — intensity is more portable; positional purity takes a decade to drill.'",
        },
        {
          speaker: "npc",
          message:
            "But Pep's teams win more silverware. Doesn't trophy count settle it?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i'?d push back gently|that'?s where i'?d nuance|i'?d challenge)",
            "(trophy count|silverware|cups) (flatters|tells half the story|conflates)",
            "(squad strength|wage bill|recruitment) (does the heavy lifting|carries water|matters more than)",
            "(pep at city|pep with that squad|pep with those resources)",
            "(klopp at|klopp with) (a tighter|a smaller|less)",
            "(context.?adjusted|all things equal|like.?for.?like)",
            "(it'?s not|its not) a (fair|clean) (comparison|like.?for.?like)",
          ],
          hint_tr:
            "Pushback: 'I'd push back gently — trophy count flatters Pep. Strip out the wage bill and it's a fairer fight.'",
        },
        {
          speaker: "npc",
          message:
            "Speaking of in-possession structure — does Pep's 3-2-5 still travel in 2026?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(it travels|it'?s portable|it'?s aged well)",
            "(but|however|the wrinkle is) (modern presses|the new wave|today'?s coaches)",
            "(adapted|caught up|figured it out)",
            "(the inverted full.?back|the false nine|the box midfield)",
            "(diminishing returns|the edge has narrowed|less of an outlier)",
            "(you (still |often )?see (echoes|fingerprints|shades) of it)",
            "(it'?s|its) (the lingua franca|the default|baseline) now",
          ],
          hint_tr:
            "Şema okuma: 'It travels — but it's the lingua franca now. The edge has narrowed.'",
        },
        {
          speaker: "npc",
          message: "Final question — whose ideas outlast them?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(pep('s| is)?|klopp('s| is)?) (legacy|imprint|fingerprint).{0,40}(deeper|longer|wider)",
            "(positional play|juego de posición) (will outlive|outlasts|outlives)",
            "(the press as a concept|gegenpressing) (has already|will continue to)",
            "(both will|both have).{0,30}(seep|filter|trickle) into",
            "(coaching trees|disciples|the next generation)",
            "(it'?s|its) the (vocabulary|grammar|operating system) of",
          ],
          hint_tr:
            "Tarihsel okuma: 'Pep's vocabulary outlasts him — positional play is the operating system now.'",
        },
        {
          speaker: "npc",
          message: "Brilliant discussion. Let's pick this up tomorrow.",
        },
      ],
    },
    {
      id: "ex.sport.c1.4.5",
      type: "recap_quiz",
      difficulty: 4,
      questions: [
        {
          question: "'Eat chaos for breakfast' deyiminin tonu?",
          options: [
            "Pasif kabullenme",
            "Kaostan beslenip avantaja çevirme",
            "Kahvaltıya geç kalma",
            "Beslenme planı",
          ],
          correct_index: 1,
          tr_explanation:
            "'Eat X for breakfast' = X ile kolayca baş etmek/beslenmek. Klopp'un kaosa karşı rahatlığı.",
        },
        {
          question: "'Trophy count flatters Pep' ne anlatır?",
          options: [
            "Pep çok kupa kazandığı için mütevazidir",
            "Kupa sayısı Pep'i olduğundan iyi gösteriyor (kadro gücü gizlenmiş)",
            "Kupalar Pep'e ait değil",
            "Pep kupa sayısını hatırlamıyor",
          ],
          correct_index: 1,
          tr_explanation:
            "'Flatter' = olduğundan iyi göstermek; hedged eleştirinin C1 anahtarı.",
        },
        {
          question: "'Lingua franca' burada ne demek?",
          options: [
            "Fransızca",
            "Ortak dil / herkesin konuştuğu standart",
            "Antrenör adı",
            "İtalya kökenli felsefe",
          ],
          correct_index: 1,
          tr_explanation:
            "'Lingua franca' = ortak dil; modern futbolda pozisyonel oyun 'standart dil' anlamında.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson C1.5 — Periodization
// ============================================================
export const sportC1Lesson_5: BundledLesson = {
  id: "sport.c1.coach.2",
  skill_id: "sport.c1.coach",
  index: 2,
  title: "Periodization — Yük Yönetimi ve Maç Ritmi",
  description:
    "Antrenman metodolojisi. 'They're tapering loads pre-international break — classic micro-cycle planning.' Bilim ve sezgi.",
  estimated_minutes: 12,
  exercises: [
    {
      id: "ex.sport.c1.5.1",
      type: "vocab_tile",
      difficulty: 5,
      word_or_phrase: "tapering loads",
      tr_translation: "Yükleri azaltma (taper — maç öncesi düşürme)",
      example:
        "They're tapering loads ahead of the international break — textbook micro-cycle planning.",
      example_tr:
        "Milli ara öncesi yükleri kıstılar — ders kitabı mikro-döngü planlaması.",
    },
    {
      id: "ex.sport.c1.5.2",
      type: "vocab_tile",
      difficulty: 5,
      word_or_phrase: "micro-cycle",
      tr_translation: "Mikro-döngü (haftalık antrenman planı)",
      example:
        "Every micro-cycle is built around the next fixture's demands.",
      example_tr:
        "Her mikro-döngü bir sonraki maçın gereksinimleri etrafında kurgulanır.",
    },
    {
      id: "ex.sport.c1.5.3",
      type: "translate",
      difficulty: 5,
      direction: "tr_to_en",
      source:
        "Sezgisel antrenör datayı küçümsemez ama datacı antrenör de oyuncunun yüzüne bakmayı unutmamalı.",
      target:
        "An intuitive coach doesn't dismiss the data, but the data-led coach mustn't forget to read the room.",
      accepted_variants: [
        "The instinctive coach respects the numbers, and the analytics coach can't lose the human read.",
        "Gut-feel coaches should mind the data; data-first coaches can't ignore the eye test.",
        "Intuition shouldn't sneer at numbers — and the data crowd needs to keep an eye on body language.",
        "A good gut coach reads the data too, and a stats-driven one still has to look players in the face.",
        "The feel coach can't dismiss the metrics; the spreadsheet coach can't forget the locker room.",
      ],
      tr_hint:
        "'Read the room', 'eye test', 'gut-feel', 'spreadsheet coach' — bilim/sezgi register.",
    },
    {
      id: "ex.sport.c1.5.4",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Bir performans koçuyla sezon programı hakkında ileri seviye tartışma. Yük yönetimi ve toparlanma penceresi.",
      npc_role: "Performance coach",
      setting: "Sports science lab",
      turns: [
        {
          speaker: "npc",
          message:
            "We've got three games in seven days. How would you sequence the load?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i'?d front.?load|i'?d load early|i'?d push the heavy work) (in|on) (day|matchday) ?(\\+1|one|two)",
            "(taper|drop) (the volume|intensity) (from|by) (matchday|md) ?-?(2|3|two|three)",
            "(recovery|regen) (day|session) (sandwiched|in between)",
            "(monitor|track) (rpe|cmj|wellness|hrv)",
            "(no two-?day|never two) high.?intensity in a row",
            "(it'?s|its) about the (window|delta|gap) between (peaks|spikes)",
          ],
          hint_tr:
            "Sequencing açıkla: 'I'd front-load on MD+1, taper from MD-2, and track RPE through the cycle.'",
        },
        {
          speaker: "npc",
          message: "What's your read on RPE versus GPS data — which leads?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(they'?re complementary|they sit alongside|not either.?or)",
            "(gps|the gps) (catches|flags|measures).{0,30}(external load|distance|sprint)",
            "(rpe|self.?reported|wellness) (catches|reveals|surfaces).{0,30}(internal|fatigue|mental)",
            "(when they diverge|on a mismatch|when the numbers don'?t agree)",
            "(that'?s|thats) the (interesting|telling|red flag) (moment|signal)",
            "(if forced to pick|if i had to choose)",
            "(i'?d trust rpe|i'?d weight wellness) (slightly|marginally) more",
          ],
          hint_tr:
            "Veri triangulation: 'Complementary — GPS flags external load, RPE catches internal. The divergence is where it gets interesting.'",
        },
        {
          speaker: "npc",
          message:
            "International break — taper, lay off, or push through with the ones who stay?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(for the ones (who )?stay|for the non.?internationals)",
            "(a mini.?camp|a controlled block|a top.?up phase)",
            "(rather than|instead of) (lay off|down tools|switch off)",
            "(form curve|fitness trajectory) (would dip|takes a hit|backslides)",
            "(maintain|preserve|hold) the (level|edge|sharpness)",
            "(for the travellers|the internationals)",
            "(communicate with|liaise with|coordinate with) (national team|fed|country)",
          ],
          hint_tr:
            "Iki gruplu plan: 'Mini-camp for the stayers — preserve sharpness. Coordinate with the federations on the travellers.'",
        },
        {
          speaker: "npc",
          message:
            "Last bit — overruling the GPS because a player 'feels fine' — yes or no?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(case.?by.?case|context.?dependent|it depends)",
            "(a senior player|a veteran|someone who knows their body)",
            "(i'?d give weight|i'?d listen|i'?d factor in) (the (self.?report|player'?s read))",
            "(but|however) (a young|an early.?career)",
            "(i'?d err on|i'?d default to|i'?d stick with) the (numbers|data|protocol)",
            "(injury history|recent layoff|red flags) (changes|flips|tilts) the call",
          ],
          hint_tr:
            "Conditional answer: 'Case-by-case — senior pros earn the benefit of the doubt; with younger players I'd err on the side of the data.'",
        },
        {
          speaker: "npc",
          message: "Sharp. Let's draft the cycle.",
        },
      ],
    },
    {
      id: "ex.sport.c1.5.5",
      type: "recap_quiz",
      difficulty: 4,
      questions: [
        {
          question: "'Tapering loads' ne demek?",
          options: [
            "Yükleri kademeli olarak azaltmak",
            "Yükleri arttırmak",
            "Yükleri ölçmemek",
            "Antrenmanı iptal etmek",
          ],
          correct_index: 0,
          tr_explanation:
            "'Taper' = kademeli düşürme; performans öncesi standart strateji.",
        },
        {
          question: "'Read the room' bağlamı nedir?",
          options: [
            "Odayı okumak (literal)",
            "Atmosferi/insan tepkisini sezmek; sosyal duyarlılık",
            "Antrenör panosunu okumak",
            "Maç raporu yazmak",
          ],
          correct_index: 1,
          tr_explanation:
            "'Read the room' = ortamın havasını sezmek; sezgi/insanı okuma deyimi.",
        },
        {
          question: "'Err on the side of the data' tavrı?",
          options: [
            "Veriyi yok say",
            "Şüphede kalınca data lehine karar ver",
            "Veriyi yanlış say",
            "Sezgiyi öne çıkar",
          ],
          correct_index: 1,
          tr_explanation:
            "'Err on the side of X' = şüphede X'i tercih et; ihtiyatlı karar deyimi.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson C1.6 — NFL defansif koordinatör
// ============================================================
export const sportC1Lesson_6: BundledLesson = {
  id: "sport.c1.coach.3",
  skill_id: "sport.c1.coach",
  index: 3,
  title: "Defansif Koordinatör — Zone vs Man (NFL)",
  description:
    "Amerikan futbolu derinliği. 'Their Cover-3 shell folds under play-action — coordinator's losing the room.' Şemalar ve adam.",
  estimated_minutes: 11,
  exercises: [
    {
      id: "ex.sport.c1.6.1",
      type: "vocab_tile",
      difficulty: 5,
      word_or_phrase: "Cover-3 shell",
      tr_translation: "Üçlü güvenlik bölge savunması (üst kademede üç adam paylaşır)",
      example:
        "Their Cover-3 shell folds under play-action — the safeties bite every time.",
      example_tr:
        "Cover-3 kabuğu play-action'a karşı çöküyor — güvenlikler her seferinde yutuyor.",
    },
    {
      id: "ex.sport.c1.6.2",
      type: "vocab_tile",
      difficulty: 5,
      word_or_phrase: "losing the room",
      tr_translation: "Soyunma odasını kaybetmek (oyuncuların inancını yitirmek)",
      example:
        "Whispers from the locker room — the coordinator's losing the room.",
      example_tr:
        "Soyunma odasından sızıntılar — koordinatör odayı kaybediyor.",
    },
    {
      id: "ex.sport.c1.6.3",
      type: "translate",
      difficulty: 5,
      direction: "tr_to_en",
      source:
        "Şema kâğıt üstünde güzel ama oyuncular inanmadığında her zayıflık iki katına çıkar.",
      target:
        "The scheme looks good on paper, but once the players stop buying in, every weakness gets doubled.",
      accepted_variants: [
        "On paper the scheme is sound; once belief evaporates, every crack widens.",
        "The scheme is fine in theory — but lose the room and every flaw is magnified.",
        "It's a tidy scheme on the whiteboard; the moment players check out, the holes double in size.",
        "Looks great in the playbook; without buy-in, every weakness is on a billboard.",
        "The blueprint reads well, but once players tune out, every flaw is exposed twice over.",
      ],
      tr_hint:
        "'Buy-in', 'tune out', 'on a billboard', 'magnified' — NFL pundit registeri.",
    },
    {
      id: "ex.sport.c1.6.4",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Bir NFL gazetecisiyle savunma koordinatörü tartışması. Şema mı, oyuncu mu, yoksa kültür mü problem?",
      npc_role: "Sports journalist",
      setting: "NFL combine press box",
      turns: [
        {
          speaker: "npc",
          message:
            "Three games in, the defence is giving up 30+ per game. Scheme or talent?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(neither in isolation|both, but)",
            "(the scheme isn'?t broken|the playbook isn'?t the problem)",
            "(but|though|however) (the personnel|the talent|the profile)",
            "(doesn'?t fit|mismatched|wrong shape)",
            "(a (cover|man|zone) (\\d|-\\d)) (needs|asks for) (a |the )?(rangy|long|twitchy)",
            "(you can'?t run|you can'?t ask) (this scheme|this shell|that coverage) (without|with no)",
            "(coordinator|dc) (inherited|got handed) (a roster|a unit) (built for|drafted for)",
          ],
          hint_tr:
            "Both/and answer: 'Both — the scheme isn't broken, but the personnel was drafted for a Cover-2 world, not Cover-3.'",
        },
        {
          speaker: "npc",
          message:
            "Play-action torches their Cover-3 every week. Why can't the safeties stay home?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(they'?re|theyre) (cheating up|biting|sucked in)",
            "(against|versus) the (run fit|run gap|playside gap)",
            "(by the time|once) (the ball is) (pulled|on the boot)",
            "(too late|out of the play|caught flat.?footed)",
            "(rep it on tape|drill it in practice|hammer it in film)",
            "(eye discipline|pre.?snap reads|key progression) (is the fix|holds the answer)",
            "(it'?s a coaching problem as much as a talent one)",
          ],
          hint_tr:
            "Mekanik analiz: 'They're biting on the run fit — by the time the ball's pulled, they're flat-footed. Eye discipline is the fix.'",
        },
        {
          speaker: "npc",
          message:
            "Veterans are venting anonymously. Has the coordinator lost the room?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(anonymous quotes|backgrounders|locker room leaks) (are a tell|signal something|don'?t come from nothing)",
            "(but|however|that said) (i'?d hold off|i'?d wait|too soon) (on|to declare)",
            "(the room can be reclaimed|it'?s recoverable|salvageable)",
            "(if|provided|so long as) (the head coach|the front office) (back|stand behind)",
            "(once the players see|once buy.?in returns|the moment the room flips back)",
            "(a (big|signature) win|a turnover.?fest|a goal.?line stand) (papers over|resets|reboots)",
          ],
          hint_tr:
            "Hedged judgment: 'Anonymous quotes don't come from nothing — but I'd hold off declaring it terminal. A goal-line stand can reset the room.'",
        },
        {
          speaker: "npc",
          message:
            "If you were the head coach, you fire him at bye or ride it out?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i'?d ride it out|i'?d stay the course|i'?d hold the line) (through|until)",
            "(mid.?season firings|in.?season changes) (rarely move the needle|seldom work|tend to backfire)",
            "(reshape the staff|add a graybeard|bring in an outside voice)",
            "(strip the playbook|simplify the call sheet|fewer concepts)",
            "(give them|hand them) (a defined identity|something to hang their hat on)",
            "(if|when) week (twelve|eleven|ten) (looks the same) — then (you act|the call is easy)",
          ],
          hint_tr:
            "Conditional decision: 'Ride it out — in-season firings rarely move the needle. Strip the playbook, add a graybeard. If week 12 looks the same, then act.'",
        },
        {
          speaker: "npc",
          message: "Solid. Let's pin a quote for the column.",
        },
      ],
    },
    {
      id: "ex.sport.c1.6.5",
      type: "recap_quiz",
      difficulty: 4,
      questions: [
        {
          question: "'Losing the room' NFL bağlamında ne demek?",
          options: [
            "Soyunma odası kilitlenmek",
            "Oyuncuların antrenöre inancını yitirmesi",
            "Otel rezervasyonu kaybı",
            "Toplantı odası küçülmesi",
          ],
          correct_index: 1,
          tr_explanation:
            "'Losing the room' = oyuncu inancını kaybetmek; soyunma odası kültürünün çatlaması.",
        },
        {
          question: "'Anonymous quotes don't come from nothing' tonu nedir?",
          options: [
            "Şüphesiz kabul",
            "Hedged işaret okuma — duman varsa ateş de vardır",
            "Komplo teorisi",
            "Kaba inkar",
          ],
          correct_index: 1,
          tr_explanation:
            "Hedged signal-reading: 'Where there's smoke...' formülü — duman ateş işareti.",
        },
        {
          question: "'Move the needle' deyiminin anlamı?",
          options: [
            "Pusulayı oynatmak",
            "Belirgin/ölçülebilir fark yaratmak",
            "İğne hareketi",
            "Sezon başlatmak",
          ],
          correct_index: 1,
          tr_explanation:
            "'Move the needle' = ölçülebilir etki yaratmak; iş/spor jargonunda standart.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson C1.7 — Bosman sonrası release clause
// ============================================================
export const sportC1Lesson_7: BundledLesson = {
  id: "sport.c1.contract.1",
  skill_id: "sport.c1.contract",
  index: 1,
  title: "Bosman Sonrası — Release Clause ve Serbest Transfer",
  description:
    "Sözleşme dili. 'His clause is north of 80 mil, but the agent is angling for a swap deal with add-ons.' Pazarlık registeri.",
  estimated_minutes: 12,
  exercises: [
    {
      id: "ex.sport.c1.7.1",
      type: "vocab_tile",
      difficulty: 5,
      word_or_phrase: "release clause",
      tr_translation: "Serbest kalma maddesi (bonservis bedeli tetikleyen rakam)",
      example:
        "His clause is north of 80 mil, but it triggers a clean break.",
      example_tr:
        "Maddesi 80 milyon üzeri ama tetiklendiğinde temiz kopuş sağlıyor.",
    },
    {
      id: "ex.sport.c1.7.2",
      type: "vocab_tile",
      difficulty: 5,
      word_or_phrase: "angling for a swap deal",
      tr_translation: "Takas anlaşması için manevra yapmak",
      example:
        "His agent is angling for a swap deal with add-ons rather than a cash transfer.",
      example_tr:
        "Menajeri nakit transfer yerine bonuslu bir takasın peşinde.",
    },
    {
      id: "ex.sport.c1.7.3",
      type: "translate",
      difficulty: 5,
      direction: "tr_to_en",
      source:
        "Sözleşmesinin son yılına girince eli güçleniyor; serbest kalmadan bir yıl önce kulüp masaya oturmak zorunda.",
      target:
        "Once he enters the final year, his hand strengthens — the club has to come to the table a year before he walks for free.",
      accepted_variants: [
        "In the last year of his deal, leverage swings his way; the club is forced to negotiate before he leaves on a free.",
        "Final-year status flips the power; the club must sit down before a Bosman move.",
        "Entering year one of free agency on the horizon, the leverage tilts his way; the club gets a year to decide.",
        "With twelve months left, he holds the cards — the club has to act before the free transfer.",
        "Once he's in his contract year, the leverage shifts; the club either renews or watches him walk.",
      ],
      tr_hint:
        "'Holds the cards', 'leverage tilts', 'walks for free', 'come to the table' — kontrat pazarlık deyimleri.",
    },
    {
      id: "ex.sport.c1.7.4",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Bir spor gazetecisiyle bir oyuncunun yaz transferini analiz ediyorsun. Menajer, kulüp, oyuncu üçgeninde pazarlık dinamiği.",
      npc_role: "Sports journalist",
      setting: "Transfer window press room",
      turns: [
        {
          speaker: "npc",
          message:
            "The agent's playing hardball — 100 mil or he walks next summer for free. Sustainable bluff?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(it depends on|hinges on|comes down to) (how many bidders|the suitor list|the asking market)",
            "(if there'?s genuine|with real|with serious) (interest from|competition from)",
            "(the threat|the leverage) (holds|has teeth|is credible)",
            "(but|however|that said) (if the market goes cold|if interest dries up)",
            "(the agent has to climb down|the price will soften|reality sets in)",
            "(brinkmanship works|hardball pays off) (only|when) (you have somewhere to go)",
          ],
          hint_tr:
            "Leverage analizi: 'Sustainable only with a real bidder list — brinkmanship works when you have somewhere to go.'",
        },
        {
          speaker: "npc",
          message:
            "Could a swap deal break the deadlock? Player-plus-cash with add-ons?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(it can|absolutely|in principle)",
            "(but|the catch is|the wrinkle) (valuing|pricing) the (makeweight|swap piece|player going the other way)",
            "(both clubs|each side) (overvalue|inflate|talk up) their (own|outgoing) player",
            "(add.?ons|performance bonuses|achievable triggers) (bridge|paper over|smooth) the gap",
            "(wage structure|after.?tax|net package) (often the real sticking point|hidden hurdle)",
            "(image rights|signing bonus|loyalty bonus) (sweeten|fill in|round out) the offer",
          ],
          hint_tr:
            "Mechanism breakdown: 'It can — but valuing the makeweight is where deals die. Both sides talk up their own asset.'",
        },
        {
          speaker: "npc",
          message: "Player power post-Bosman — overstated or here to stay?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(here to stay|entrenched|baked in)",
            "(the genie'?s|the genies) (out of the bottle|not going back)",
            "(but|that said|though) (it'?s|its) (overstated at the margins|less absolute than the headlines)",
            "(elite players|top tier|the top one percent) (call the shots|hold the cards|drive the bus)",
            "(but|whereas) (squad players|mid.?tier|the long tail) (still have to|are price.?takers)",
            "(financial fair play|cost controls|wage caps) (push back|create friction|trim the edges)",
          ],
          hint_tr:
            "Stratified view: 'Here to stay at the top — elite players call the shots. Squad players still price-take.'",
        },
        {
          speaker: "npc",
          message:
            "If you were the sporting director, do you let him run out or sell now at a discount?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(sell now|cash in|take the hit) (rather than|over) (losing him for nothing|a free)",
            "(a discount|a haircut|leaving money on the table) (is preferable to|beats) (zero|a Bosman)",
            "(unless|provided|on condition that) (the dressing room signal|the manager'?s read|the sporting case)",
            "(replacement plan|succession plan|the next man up) (is in place|sorted|teed up)",
            "(the optics|how it plays publicly|the message it sends) (matter|are part of the calculus)",
            "(i'?d look at|i'?d crunch) (the depreciation|the discount curve|amortisation)",
          ],
          hint_tr:
            "Sporting director hat: 'Cash in. A haircut beats a Bosman — provided the replacement is teed up.'",
        },
        {
          speaker: "npc",
          message: "Wise. Let's run that as the lead.",
        },
      ],
    },
    {
      id: "ex.sport.c1.7.5",
      type: "recap_quiz",
      difficulty: 4,
      questions: [
        {
          question: "'North of 80 mil' ne demek?",
          options: [
            "Kuzey bölgesinde 80 milyon",
            "80 milyondan fazla",
            "80 milyona kuzey gider",
            "Tam 80 milyon",
          ],
          correct_index: 1,
          tr_explanation:
            "'North of X' = X'in üstünde; 'south of X' = X'in altında. Finansal/sayısal deyim.",
        },
        {
          question: "'Brinkmanship' tam karşılığı?",
          options: [
            "Köprü inşası",
            "Uçurum kenarı pazarlığı / sınır taktiği",
            "Antlaşma",
            "Saha sınırı oyunu",
          ],
          correct_index: 1,
          tr_explanation:
            "'Brinkmanship' = uçurum kenarına kadar zorlayan pazarlık; risk yüksek.",
        },
        {
          question: "'Take a haircut' transferde ne demek?",
          options: [
            "Saç kestirmek",
            "Beklenen fiyatın altında satmak (zarara razı olmak)",
            "Saç kesimi izinli",
            "Bir oyuncuyu reddetmek",
          ],
          correct_index: 1,
          tr_explanation:
            "'Take a haircut' = indirim/zarara razı olmak; finans deyimi spora taşındı.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson C1.8 — FFP ve salary cap
// ============================================================
export const sportC1Lesson_8: BundledLesson = {
  id: "sport.c1.contract.2",
  skill_id: "sport.c1.contract",
  index: 2,
  title: "FFP ve Salary Cap — Kulüp Finansal Disiplini",
  description:
    "Financial Fair Play ve NBA luxury tax. 'They're hard-capped after the sign-and-trade — no MLE flexibility left.' Tavan altında manevra.",
  estimated_minutes: 13,
  exercises: [
    {
      id: "ex.sport.c1.8.1",
      type: "vocab_tile",
      difficulty: 5,
      word_or_phrase: "hard-capped",
      tr_translation: "Sert tavan limitine kilitlenmiş (NBA — aşılamaz seviye)",
      example:
        "They're hard-capped after the sign-and-trade — no mid-level exception, no buyout market.",
      example_tr:
        "Sign-and-trade sonrası sert tavana kilitlendiler — MLE yok, buyout yok.",
    },
    {
      id: "ex.sport.c1.8.2",
      type: "vocab_tile",
      difficulty: 5,
      word_or_phrase: "MLE flexibility",
      tr_translation: "Mid-level exception (orta seviye istisna) manevrası",
      example:
        "They burned the full MLE on a third guard — that flexibility's gone for the season.",
      example_tr:
        "Tam MLE'yi üçüncü guard'a yaktılar — bu sezon o manevra bitti.",
    },
    {
      id: "ex.sport.c1.8.3",
      type: "translate",
      difficulty: 5,
      direction: "tr_to_en",
      source:
        "Tavan üstüne çıktığında her hareketin bedeli var; lüks vergisi yalnızca bir hesap kalemi değil, bir felsefe kararı.",
      target:
        "Once you go over the cap, every move has a cost; the luxury tax isn't just a line item, it's a philosophical call.",
      accepted_variants: [
        "Above the cap, every transaction is priced in; the luxury tax is more than accounting — it's an ideology choice.",
        "When you cross the apron, every signing carries a tax bill; the lux tax is a worldview, not just a number.",
        "Past the threshold, you pay for every breath; the luxury tax tells you what kind of owner you are.",
        "Going over the cap means every move costs; the tax is a values statement, not just spreadsheet ink.",
        "Above the line, every contract has a multiplier; the luxury tax is a strategic posture, not bookkeeping.",
      ],
      tr_hint:
        "'Line item', 'philosophical call', 'apron', 'worldview' — cap mekaniği + felsefi register.",
    },
    {
      id: "ex.sport.c1.8.4",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Bir kulüp finans yöneticisiyle bütçe disiplini ve uzun vade planı tartışması. FFP, salary cap, akademi.",
      npc_role: "Tactics analyst",
      setting: "Front office briefing room",
      turns: [
        {
          speaker: "npc",
          message:
            "We're 20 mil over the soft cap. Sell to comply or eat the tax?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(it depends on|the answer hinges on|comes down to) (the window|the championship arc|the form curve)",
            "(if (you'?re|youre)|with) (in your window|peaking|contending)",
            "(eat the tax|pay the freight|absorb the hit)",
            "(but|however) (a rebuild|a reset|a transition year)",
            "(off.?loading|moving on from|cashing in)",
            "(the long.?term cap sheet|future flexibility|the apron in 2027)",
            "(repeater tax|repeat offender|escalating penalty) (changes the math|tilts the call)",
          ],
          hint_tr:
            "Window-based answer: 'If you're in your window, eat the tax. If it's a transition year, off-load — the repeater tax changes the math.'",
        },
        {
          speaker: "npc",
          message: "What's your read on FFP — punitive or paper tiger?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(somewhere in between|less than punitive, more than paper)",
            "(it has teeth|the enforcement is real|points deductions are credible)",
            "(but|though) (the loopholes|the workarounds|creative accounting)",
            "(sponsorship inflation|related party deals|amortisation tricks)",
            "(big clubs game it|the elite find lanes|state.?backed projects bend it)",
            "(it disciplines|it slows down|it acts as a soft brake on) (mid.?tier|the squeezed middle)",
            "(uefa is playing catch.?up|the rules evolve|enforcement is tightening)",
          ],
          hint_tr:
            "Hedged take: 'Less than punitive, more than paper — it disciplines the mid-tier; the elite find lanes.'",
        },
        {
          speaker: "npc",
          message:
            "Academy investment as cap relief — overrated as a strategy?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(underrated in some ways|undervalued|the smartest line on the balance sheet)",
            "(homegrown|academy graduates|own.?developed) (sit outside|don'?t count against|are exempt from)",
            "(amortisation|book value|cap charge) (rules)",
            "(but|however) (the lead time|the gestation|maturity arc)",
            "(seven to ten years|the better part of a decade|a long horizon)",
            "(only one in fifty|the hit rate|the conversion)",
            "(structural advantage|a moat|asymmetric returns) (when it works)",
          ],
          hint_tr:
            "Long-game answer: 'Underrated — homegrown sits outside the cap. But the gestation is a decade and the hit rate is brutal.'",
        },
        {
          speaker: "npc",
          message:
            "If you owned this club, would you push the cap or run a lean ship?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(a hybrid|both at different points|a barbell strategy)",
            "(lean in years (one|two)|build the foundation|stockpile picks)",
            "(then push|then go all.?in|spend when the window opens)",
            "(running lean forever|perpetual austerity) (is a way to lose your fanbase)",
            "(constantly tax.?paying|burning cash every year) (catches up|isn'?t sustainable)",
            "(read the championship arc|time the spike|pick your spots)",
            "(philosophically|as an owner|in principle) (i'?m closer to)",
          ],
          hint_tr:
            "Hybrid stance: 'Barbell — lean foundation years, then spike when the window opens. Perpetual austerity loses the fanbase.'",
        },
        {
          speaker: "npc",
          message: "Smart framework. Let's stress-test it.",
        },
      ],
    },
    {
      id: "ex.sport.c1.8.5",
      type: "recap_quiz",
      difficulty: 4,
      questions: [
        {
          question: "'Hard cap' ile 'soft cap' arasındaki fark?",
          options: [
            "Hard cap aşılamaz; soft cap istisnalarla aşılabilir",
            "Hard cap geceleri, soft cap gündüzleri",
            "İkisi de aynı",
            "Hard cap NBA dışı sporlarda olur",
          ],
          correct_index: 0,
          tr_explanation:
            "NBA'de hard cap (sert tavan): aşılması imkansız. Soft cap: istisnalarla esnetilebilir.",
        },
        {
          question: "'Paper tiger' deyiminin tonu?",
          options: [
            "Güçlü düşman",
            "Görünüşte korkutucu ama içi boş tehdit",
            "Origami sanatı",
            "Kağıt fabrikası",
          ],
          correct_index: 1,
          tr_explanation:
            "'Paper tiger' = kağıttan kaplan; görünüşte güçlü, gerçekte etkisiz.",
        },
        {
          question: "'Barbell strategy' transferi nasıl tanımlar?",
          options: [
            "Halterli antrenman",
            "İki uçta toplanmış strateji: ya çok ucuz ya çok pahalı, ortayı boşalt",
            "Sadece kuvvet odaklı",
            "Tek oyuncuya odaklanma",
          ],
          correct_index: 1,
          tr_explanation:
            "'Barbell' = iki uçta yoğun, ortası boş; portföy/strateji terimi.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson C1.9 — Maç raporu yazımı
// ============================================================
export const sportC1Lesson_9: BundledLesson = {
  id: "sport.c1.journalism.1",
  skill_id: "sport.c1.journalism",
  index: 1,
  title: "Maç Raporu Yazımı — Opening Lede ve Narrative Arc",
  description:
    "Gazete sütunu kurgusu. 'Bury the score in paragraph three; lead with the moment that turned the tie.' The Athletic registeri.",
  estimated_minutes: 14,
  exercises: [
    {
      id: "ex.sport.c1.9.1",
      type: "vocab_tile",
      difficulty: 5,
      word_or_phrase: "bury the lede",
      tr_translation: "Asıl haberi/skoru gömmek (gazete deyimi — başlığa koymamak)",
      example:
        "Don't bury the lede — but if the score isn't the story, push it down.",
      example_tr:
        "Asıl haberi gömme — ama skor 'hikâye' değilse, aşağıya it.",
    },
    {
      id: "ex.sport.c1.9.2",
      type: "vocab_tile",
      difficulty: 5,
      word_or_phrase: "narrative arc",
      tr_translation: "Anlatı yayı (girişten doruğa hikâye çizgisi)",
      example:
        "Every match report has a narrative arc — the moment the tie turned.",
      example_tr:
        "Her maç raporunun bir anlatı yayı vardır — beraberliği kıran an.",
    },
    {
      id: "ex.sport.c1.9.3",
      type: "translate",
      difficulty: 5,
      direction: "tr_to_en",
      source:
        "İyi bir maç raporu skorla değil, sahanın ortasındaki bir bakışla başlar; gerisi onun etrafına örülür.",
      target:
        "A good match report doesn't open with the score — it opens with a glance in the centre circle, and everything else weaves around it.",
      accepted_variants: [
        "The best match write-ups start with a moment, not a number — the rest is built around it.",
        "A strong report leads with a look in midfield, not the scoreline; the structure spirals out from there.",
        "Skip the score in the opening — find the moment and let the prose orbit it.",
        "A great report opens on the eyes that met in midfield, not the scoreboard — the rest scaffolds around it.",
        "The lede isn't the score; it's the moment. Everything else is connective tissue.",
      ],
      tr_hint:
        "'Lede', 'connective tissue', 'scaffolds around', 'orbit' — gazetecilik registeri.",
    },
    {
      id: "ex.sport.c1.9.4",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Editör'le maç raporunun yapısını tartışıyorsun. 30 dakika içinde 800 kelime teslim etmen gerekiyor.",
      npc_role: "Sports journalist",
      setting: "Press box, post-final-whistle",
      turns: [
        {
          speaker: "npc",
          message: "30 minutes to deadline. What's your opening line?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i'?d open on|i'?m leading with|i'?d lede with)",
            "(the moment|the look|the gesture|the second) (when|that|in which)",
            "(in (the )?(seventy.?third|injury time|stoppage time))",
            "(a single image|a frozen frame|a held breath)",
            "(the score is paragraph three|i'?ll bury the score|i'?ll get to the score later)",
            "(let the picture do the lifting|paint the moment|set the scene)",
          ],
          hint_tr:
            "Lede pitch: 'I'd lede on the look between the captain and the bench in the 73rd — the score sits in paragraph three.'",
        },
        {
          speaker: "npc",
          message:
            "Good. What's the narrative arc — what's the through-line you want readers to feel?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(the through.?line|the spine|the thread)",
            "(a manager (running out of|losing) (lives|cards|chances))",
            "(redemption|hubris|reckoning|comeuppance|vindication)",
            "(a young player (announcing|arriving|stepping up))",
            "(set the (table|stage|scene) in the first three|build|escalate)",
            "(the turn|the pivot|the hinge) (comes|lands) (around|near) (paragraph|the middle))",
            "(land it on|finish on|end with) (a quiet image|a single line|a small detail)",
          ],
          hint_tr:
            "Arc design: 'Through-line is a manager running out of lives — set the stage, the hinge is the substitution, land on the empty press box.'",
        },
        {
          speaker: "npc",
          message:
            "How much tactical detail? The reader is half-fan, half-tactician these days.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(layered|tiered|stepped) (writing|prose|access)",
            "(top layer|surface|first read) (works for|reads for|lands for) (the casual fan|the general reader)",
            "(deeper passages|the tactical interlude|the geek paragraph) (reward|sit waiting for) (the analyst|the tactical reader|the deeper dive)",
            "(don'?t patronise|never patronise|trust the reader)",
            "(but|nor) (lecture|dump jargon|baffle)",
            "(one tactical insight per piece|a single tactical idea|one schematic point)",
            "(carries the weight|earns its keep|is enough)",
          ],
          hint_tr:
            "Layered approach: 'Tiered prose — the surface reads for the casual fan, the tactical paragraph rewards the analyst. One schematic idea, no more.'",
        },
        {
          speaker: "npc",
          message: "Last call — what do you NEVER do in a match report?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(never|don'?t ever|cardinal sin) (use clichés|lean on clichés|reach for clichés)",
            "(passion|fighting spirit|110%) (without unpacking|as filler|as substitute for thought)",
            "(quote the manager wholesale|run the post.?match presser uncut|dump the quotes)",
            "(let the score (do all|carry) the work|hand the structure to the scoreline)",
            "(declare a verdict|hand down a judgment) (without showing your work|too early in the piece)",
            "(make it about you|the writer|first person without earning it)",
          ],
          hint_tr:
            "Don'ts list: 'Never lean on clichés. Never let the score do all the work. Never declare a verdict without showing your work.'",
        },
        {
          speaker: "npc",
          message: "Go write it. 28 minutes.",
        },
      ],
    },
    {
      id: "ex.sport.c1.9.5",
      type: "recap_quiz",
      difficulty: 4,
      questions: [
        {
          question: "'Bury the lede' gazetecilikte ne demek?",
          options: [
            "Asıl haberi başlığa koy",
            "Asıl haberi/skoru girişe değil sonraya koymak",
            "Haberi gizlemek",
            "Gazeteciyi gömmek",
          ],
          correct_index: 1,
          tr_explanation:
            "'Lede' = haberin başı; 'bury the lede' onu girişten uzağa atmak.",
        },
        {
          question: "'Tiered prose' ne demek?",
          options: [
            "Üst üste paragraflar",
            "Farklı okur seviyelerine farklı katmanlarda yazılmış metin",
            "Saçma süslü dil",
            "Sadece tek tip okur için",
          ],
          correct_index: 1,
          tr_explanation:
            "Layered/tiered: yüzey okuyucusu da derinine dalan da memnun olur — modern feature yazımı.",
        },
        {
          question: "'Show your work' ifadesinin spor yazımında karşılığı?",
          options: [
            "Maaşını göster",
            "Verdiğin yargıyı kanıtla, gerekçeleriyle savun",
            "Çalışma planını göster",
            "Antrenmanı izle",
          ],
          correct_index: 1,
          tr_explanation:
            "'Show your work' = sonuca götüren akıl yürütmeyi göstermek; matematik dersinden gelir, gazeteciliğe taşınır.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson C1.10 — Canlı yorum
// ============================================================
export const sportC1Lesson_10: BundledLesson = {
  id: "sport.c1.journalism.2",
  skill_id: "sport.c1.journalism",
  index: 2,
  title: "Canlı Yorum — Colour Commentary ve Play-by-Play",
  description:
    "Yayın diline geçiş. 'And he's bending it round the wall — oh, what a finish from the edge of the box!' Ritim ve tonlama.",
  estimated_minutes: 11,
  exercises: [
    {
      id: "ex.sport.c1.10.1",
      type: "vocab_tile",
      difficulty: 5,
      word_or_phrase: "colour commentary",
      tr_translation: "Renk yorumu (play-by-play yanında derinleştirici sesli yorum)",
      example:
        "Play-by-play calls the action; colour commentary brings the context.",
      example_tr:
        "Play-by-play eylemi anlatır; colour commentary bağlamı taşır.",
    },
    {
      id: "ex.sport.c1.10.2",
      type: "vocab_tile",
      difficulty: 5,
      word_or_phrase: "bending it round the wall",
      tr_translation: "Topu duvardan çevirmek (serbest vuruşta klasik kavis)",
      example:
        "And he's bending it round the wall — what a finish from the edge of the box!",
      example_tr:
        "Topu duvardan çeviriyor — ceza sahası kenarından harika bir bitiriş!",
    },
    {
      id: "ex.sport.c1.10.3",
      type: "translate",
      difficulty: 5,
      direction: "tr_to_en",
      source:
        "Play-by-play olayı anlatır, renk yorumu o olaya neden değer verdiğimizi söyler.",
      target:
        "Play-by-play tells you what happened; colour commentary tells you why it matters.",
      accepted_variants: [
        "PBP narrates the action; colour explains the meaning.",
        "Play-by-play calls the moment; colour gives it weight.",
        "The play-by-play describes; the colour commentator interprets.",
        "PBP says what's happening; colour says why it lands.",
        "Play-by-play is the lens; colour commentary is the depth of field.",
      ],
      tr_hint:
        "'Gives it weight', 'depth of field', 'why it lands' — yayıncılık registeri.",
    },
    {
      id: "ex.sport.c1.10.4",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Bir yayın yapımcısıyla çalışıyorsun. Final maçında colour commentary için ritim, duraklama ve klişe kaçınma üstüne brifing.",
      npc_role: "Sports journalist",
      setting: "Broadcast truck",
      turns: [
        {
          speaker: "npc",
          message:
            "You've got the colour mic for the final. What's your number-one rule?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(let the moment breathe|don'?t talk over|silence is a tool)",
            "(the picture (does|carries) the (lifting|work)|the image speaks)",
            "(only speak when (i'?m|i am) (adding|bringing) something|earn every word)",
            "(less is more|economy|restraint)",
            "(the play.?by.?play has the action|i ride alongside, not over)",
            "(my job is (context|texture|insight|the why), not (re.?stating|repeating))",
          ],
          hint_tr:
            "Core rule: 'Let the moment breathe — silence is a tool. I only speak when I'm adding something.'",
        },
        {
          speaker: "npc",
          message: "How do you handle a moment of pure drama — say, a 90th-minute winner?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i (stay |go )?silent|i let the crowd|i hold off)",
            "(for (three|four|a few) (beats|seconds|breaths))",
            "(let (the crowd|the stadium|the noise) (carry|do) the (work|telling))",
            "(then|after that|when i come back in) (a single line|one observation|a small detail)",
            "(no clichés|no rehearsed line|no canned exclamation)",
            "(name the detail no one else noticed|find the human moment|the small thing)",
            "(the bench reaction|the captain'?s eyes|the empty stand)",
          ],
          hint_tr:
            "Drama protocol: 'Silent for a few beats — let the stadium carry it. Then one detail no one else noticed: the bench reaction, the captain's eyes.'",
        },
        {
          speaker: "npc",
          message:
            "Avoiding clichés — easy to say, hard to do. What's your filter?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(if i'?ve heard it (this season|on three other broadcasts)|i kill it)",
            "(passion|fighting spirit|110 percent|character) (without context|as filler|by themselves) (don'?t make the cut|are out)",
            "(i prep (specific|fresh|tailored) lines|i write three or four|i bring options)",
            "(local detail|biographical hook|backstory|family connection)",
            "(literary references|cultural callbacks) (used sparingly|when they earn their keep|never to show off)",
            "(test it in my head|read it back|sense.?check before air)",
          ],
          hint_tr:
            "Filter rule: 'If I've heard it on three other broadcasts, I kill it. I prep four fresh lines and pick the one that fits.'",
        },
        {
          speaker: "npc",
          message:
            "How much do you lean on stats versus the eye test in live colour?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(stats as garnish|numbers as seasoning|data as a sprinkle, not the main dish)",
            "(one well.?chosen stat (lands|sticks|cuts through))",
            "(a wall of numbers (loses the room|drives viewers off|kills momentum))",
            "(the eye test (carries|drives|leads))",
            "(the right stat at the right moment|timing the number)",
            "(i save (the one big number|the deep cut) for (the turning point|the key moment))",
          ],
          hint_tr:
            "Stat strategy: 'Stats as garnish — one well-chosen number lands; a wall of them kills momentum. Save the deep cut for the turning point.'",
        },
        {
          speaker: "npc",
          message: "Good. Get to the booth.",
        },
      ],
    },
    {
      id: "ex.sport.c1.10.5",
      type: "recap_quiz",
      difficulty: 4,
      questions: [
        {
          question: "'Let the moment breathe' yayın felsefesi ne demek?",
          options: [
            "Stadyum havasını fizyolojik incele",
            "Susmayı bir araç olarak kullan, görüntü konuşsun",
            "Spor anına yakın çek",
            "Sürekli konuş",
          ],
          correct_index: 1,
          tr_explanation:
            "Sessizlik, profesyonel canlı yayında en güçlü vurgu aracı.",
        },
        {
          question: "'Stats as garnish' yaklaşımı?",
          options: [
            "Yemekle ilgili",
            "Sayıyı baş kahraman yapma, dramatik anı süsleyen detay olarak kullan",
            "İstatistiği yasakla",
            "Her cümlede sayı kullan",
          ],
          correct_index: 1,
          tr_explanation:
            "'Garnish' = süs/garnitür; ana yemek değil. Sayı seyrek ama isabetli kullanılır.",
        },
        {
          question: "Colour commentary'nin asıl rolü?",
          options: [
            "Skoru tekrar etmek",
            "Anlam, bağlam ve insan boyutu eklemek",
            "Maçı çevirmek",
            "Hakem hatalarını saymak",
          ],
          correct_index: 1,
          tr_explanation:
            "Play-by-play 'ne' der; colour 'niye önemli'yi ekler.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson C1.11 — F1'den NBA'e
// ============================================================
export const sportC1Lesson_11: BundledLesson = {
  id: "sport.c1.cross.1",
  skill_id: "sport.c1.cross",
  index: 1,
  title: "F1'den NBA'e — Stratejiyi Diller Arası Taşımak",
  description:
    "Bir konuşma, üç sahne. 'Verstappen's undercut was pure timing — same nerve as calling a 20-second timeout with the lead slipping.' Spor-arası analoji, ama tutarlı.",
  estimated_minutes: 12,
  exercises: [
    {
      id: "ex.sport.c1.11.1",
      type: "vocab_tile",
      difficulty: 5,
      word_or_phrase: "undercut",
      tr_translation: "F1'de erken pit ile rakibin önüne geçmek (zamanlama avantajı)",
      example:
        "Verstappen's undercut on lap 18 was textbook — fresh tyres, two seconds quicker on the out-lap.",
      example_tr:
        "Verstappen'in 18. turdaki undercut'ı ders kitabı — taze lastik, out-lap'ta iki saniye fark.",
    },
    {
      id: "ex.sport.c1.11.2",
      type: "vocab_tile",
      difficulty: 5,
      word_or_phrase: "calling a timeout with the lead slipping",
      tr_translation: "Üstünlük erirken mola almak (basketbolda klasik momentum kesme)",
      example:
        "Calling a 20-second timeout with the lead slipping is the NBA's version of an undercut — same nerve.",
      example_tr:
        "Üstünlük erirken 20 saniyelik mola — NBA'in undercut'ı, aynı cesaret.",
    },
    {
      id: "ex.sport.c1.11.3",
      type: "translate",
      difficulty: 5,
      direction: "tr_to_en",
      source:
        "Farklı sporlar aynı kararı farklı dillerle konuşur — ama altta yatan cesaret aynı.",
      target:
        "Different sports speak the same decision in different dialects — but the nerve underneath is the same.",
      accepted_variants: [
        "Each sport has its own vocabulary for the same call — but the underlying instinct doesn't change.",
        "Sports speak different languages for the same moment of courage.",
        "The dialects differ across codes; the conviction at the heart of the call is identical.",
        "Different codes, different grammar — same moment of nerve at the centre.",
        "The lexicon shifts sport to sport; the gut check at the core is the same.",
      ],
      tr_hint:
        "'Dialects', 'codes', 'gut check', 'lexicon' — sporlar arası analoji registeri.",
    },
    {
      id: "ex.sport.c1.11.4",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Bir taktik analistiyle sporlar arası karşılaştırma yapıyorsun. F1 undercut, NBA timeout, tenisteki challenge — hepsi aynı 'nerve moment'.",
      npc_role: "Tactics analyst",
      setting: "Crossover sports panel",
      turns: [
        {
          speaker: "npc",
          message:
            "Make the case that an F1 undercut and an NBA timeout are the same decision.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(at the core|underneath|stripped back)",
            "(it'?s|its) (the same call|the same gamble|the same gut decision)",
            "(both bet against|both wager on|both put chips on) (the current momentum|the present trajectory|the now)",
            "(both are|both rely on) (counter.?intuitive|pre.?emptive|the opposite of obvious)",
            "(rivals expect|the field expects) (the safe play|the conservative call)",
            "(you (zig|move|act) while they (zag|wait|coast))",
            "(timing the disruption|breaking the rhythm|interrupting the flow)",
          ],
          hint_tr:
            "Core analogy: 'Same gut decision underneath — both bet against current momentum, both zig while the field zags.'",
        },
        {
          speaker: "npc",
          message:
            "What about tennis — is there a moment that maps onto the undercut?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(coming in on the second serve|chip.?and.?charging|the surprise net rush)",
            "(approaching when the baseliner expects|disrupting the rally rhythm|breaking the pattern)",
            "(it'?s an undercut|same family|cousin to the undercut)",
            "(another option|or|alternatively) (a (drop shot|swinging volley|deep slice))",
            "(in the middle of a rally|on a routine baseline exchange)",
            "(you (change the surface|switch the speed|alter the geometry))",
          ],
          hint_tr:
            "Map across codes: 'Chip-and-charge on the second serve — same family. Disrupting the rhythm while the baseliner expects another long rally.'",
        },
        {
          speaker: "npc",
          message:
            "Why do these moments feel so satisfying to fans across sports?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(narrative|storytelling|story)",
            "(humans (read|process) (these moments|sport) as (narrative|stories))",
            "(the bold call|the unexpected move|the contrarian decision) (becomes|reads as) (character|agency|will)",
            "(the random|the entropy|the noise) (gets|is) (replaced by|swapped for) (intent|design|authorship)",
            "(it makes the (athlete|coach) the (author|protagonist|hero))",
            "(it'?s|its) (the moment (we|fans) feel) (alive|present|inside)",
            "(literary echoes|cultural resonance|same as a plot twist)",
          ],
          hint_tr:
            "Why it resonates: 'Humans read sport as narrative — the bold call swaps random for intent. It makes the athlete the author.'",
        },
        {
          speaker: "npc",
          message:
            "Is sport analytics flattening this — turning every decision into a probability?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(partly|in some ways|to a degree)",
            "(but|however|the catch is) (the model can'?t|analytics doesn'?t) (price in the moment|account for the courage|weight the human)",
            "(probability is a baseline|the model is a starting point|priors not verdicts)",
            "(the (best|elite) decision makers) (read the model and then deviate|use the priors as a floor)",
            "(an algorithm|a spreadsheet) (can'?t see) (the look in the rival'?s eye|body language|the room)",
            "(art and science|head and gut|both lobes) (still required|in tension|coexisting)",
          ],
          hint_tr:
            "Tension answer: 'Partly — but the model can't price the courage. The best read the priors and then deviate.'",
        },
        {
          speaker: "npc",
          message: "Beautifully framed. Let's pin it.",
        },
      ],
    },
    {
      id: "ex.sport.c1.11.5",
      type: "recap_quiz",
      difficulty: 4,
      questions: [
        {
          question: "'Zig while they zag' deyimi ne anlatır?",
          options: [
            "Zigzag çizmek",
            "Beklenenin tersini yapmak, karşı yönde hareket",
            "Dans hareketi",
            "Sahada yön kaybı",
          ],
          correct_index: 1,
          tr_explanation:
            "'Zig when they zag' = farklı yöne hareket; contrarian taktik deyimi.",
        },
        {
          question: "'Same family, different code' tonu?",
          options: [
            "Akrabalık vurgusu",
            "Farklı sporlarda aynı tipte karar/an",
            "Aynı yazılım",
            "Bilgisayar kodu",
          ],
          correct_index: 1,
          tr_explanation:
            "'Code' = spor dalı; 'family' = aynı tip karar. Sporlar arası analoji.",
        },
        {
          question: "'The model can't price the courage' eleştirisi?",
          options: [
            "Modeli iyi say",
            "Analitik hesap, kararın insan/cesaret boyutunu ölçemez",
            "Modeli sat",
            "Kararı yasakla",
          ],
          correct_index: 1,
          tr_explanation:
            "'Price something in' = bedelini hesaba katmak. Analytics'in sınırlarına işaret eden hedged eleştiri.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson C1.12 — Champions League, MLB, MotoGP
// ============================================================
export const sportC1Lesson_12: BundledLesson = {
  id: "sport.c1.cross.2",
  skill_id: "sport.c1.cross",
  index: 2,
  title: "Champions League, MLB, MotoGP — Tek Sohbet Akışı",
  description:
    "Pivot ustası ol. 'Real's away leg, the Dodgers' bullpen, and Marquez's late braking — pattern recognition across codes.' Akışkan geçiş.",
  estimated_minutes: 13,
  exercises: [
    {
      id: "ex.sport.c1.12.1",
      type: "vocab_tile",
      difficulty: 5,
      word_or_phrase: "pattern recognition across codes",
      tr_translation: "Sporlar arası örüntü tanıma",
      example:
        "Pundits with real range have pattern recognition across codes — the same instinct surfaces in Madrid, Dodger Stadium, and Mugello.",
      example_tr:
        "Gerçek genişlikteki yorumcular sporlar arası örüntü tanır — aynı içgüdü Madrid'de de, Dodger Stadium'da da, Mugello'da da yüzeye çıkar.",
    },
    {
      id: "ex.sport.c1.12.2",
      type: "vocab_tile",
      difficulty: 5,
      word_or_phrase: "late braking",
      tr_translation: "Geç fren (MotoGP'de virajda en son ana kadar gaz açıkken fren)",
      example:
        "Marquez's late braking into turn one is the same nerve as the Dodgers leaving the closer in for the seventh.",
      example_tr:
        "Marquez'in birinci virajdaki geç freni, Dodgers'ın kapanış adamını yedinci için bırakmasıyla aynı cesaret.",
    },
    {
      id: "ex.sport.c1.12.3",
      type: "translate",
      difficulty: 5,
      direction: "tr_to_en",
      source:
        "İyi pundit üç farklı sporun sohbetini bir akışta birleştirir — herkes anlasın, ama derinleşmek isteyen de bulsun.",
      target:
        "A good pundit weaves three sports into one flow — accessible to everyone, but with depth for those who want to go further.",
      accepted_variants: [
        "The best analysts braid multiple sports into a single conversation — surface-level for the casual, layered for the obsessive.",
        "Real pundits stitch three sports into one thread — entry-level on top, deep cuts underneath.",
        "A strong commentator threads three codes into one chat — readable for all, rich for the dedicated.",
        "The pundit who matters can move between sports in one breath — open on the surface, deep on the inside.",
        "Top-tier analysts knit different sports into one narrative — broad welcome up top, fine grain beneath.",
      ],
      tr_hint:
        "'Weave', 'braid', 'stitch', 'deep cuts' — multi-sport pundit registeri.",
    },
    {
      id: "ex.sport.c1.12.4",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Sabah spor programında üç farklı sporu tek bir akışta konuştuğun bir bölüm yapıyorsun. Geçişleri akışkan tut.",
      npc_role: "Sports journalist",
      setting: "Morning sports radio booth",
      turns: [
        {
          speaker: "npc",
          message:
            "Open the segment — Real's Champions League away leg last night. Set it up.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(away leg|on the road|in hostile territory)",
            "(real|madrid).{0,30}(controlled|managed|dictated)",
            "(possession statistics|the touch map|territorial dominance)",
            "(but|though|however) (the away goal|the away leg arithmetic|the tie aggregate)",
            "(reads|sits|stands) (\\d{1,2}.\\d{1,2}|on a knife.?edge|in the balance)",
            "(returning to|back at) (the bernabéu|the bernabeu|home)",
            "(advantage|edge|whip hand)",
          ],
          hint_tr:
            "Set the scene: 'Real dictated possession on the road, but the tie sits on a knife-edge — they take a slim edge back to the Bernabéu.'",
        },
        {
          speaker: "npc",
          message:
            "Now pivot to the Dodgers — the bullpen situation. Make the transition land.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(and (it'?s|its) the same|speaking of|funnily enough|on the topic of)",
            "(managing a lead|holding an edge|defending the position)",
            "(over (in|to) (los angeles|the dodgers|baseball|the show))",
            "(the bullpen|the relief corps|the back end of the staff)",
            "(running on fumes|stretched thin|leaning too heavily on)",
            "(the closer|the eighth.?inning guy|the high.?leverage arm)",
            "(roberts|the manager).{0,30}(call|decision|choice)",
          ],
          hint_tr:
            "Bridge the codes: 'And it's the same theme of managing a lead — over in LA, the Dodgers' bullpen is running on fumes.'",
        },
        {
          speaker: "npc",
          message:
            "Third pivot — MotoGP, Marquez at Mugello. Tie all three together at the end.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(and on two wheels|over in motogp|switching codes one more time)",
            "(marquez|márquez).{0,30}(late braking|going in deep|hanging it out)",
            "(into|at) (turn one|the first corner|san donato)",
            "(the common thread|the through.?line|what links all three)",
            "(holding (your nerve|the edge|composure) under pressure)",
            "(managing a lead vs |defending vs going for the kill)",
            "(courage to act|nerve to call it|conviction in the moment)",
          ],
          hint_tr:
            "Triple weave: 'And switching codes one more time — Marquez hanging it out at turn one. The through-line across all three: holding your nerve under pressure.'",
        },
        {
          speaker: "npc",
          message: "Close the segment — give listeners one thing to chew on.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(the takeaway|one thought to leave you with|the line i'?d leave you on)",
            "(whether (it'?s|its)|across (madrid|the dodgers|motogp))",
            "(the same instinct|the same nerve|the same authorship)",
            "(elite sport (rewards|favours|belongs to))",
            "(those who (act|move|decide) when others wait|the bold over the careful)",
            "(the model|the algorithm) (can describe|can map|can plot) (the move|the call)",
            "(but it can'?t|never could|never will) (manufacture|generate|produce) (it|the courage)",
          ],
          hint_tr:
            "Closing line: 'The takeaway — across Madrid, LA, and Mugello, the same instinct. The model can describe the move; it can't manufacture the courage.'",
        },
        {
          speaker: "npc",
          message: "Cracking segment. Cue the break.",
        },
      ],
    },
    {
      id: "ex.sport.c1.12.5",
      type: "recap_quiz",
      difficulty: 4,
      questions: [
        {
          question: "'Pattern recognition across codes' ne demek?",
          options: [
            "Şifre kırma",
            "Farklı sporlarda ortak örüntü/temaları görmek",
            "Reklam kodları",
            "Yazılım örüntüleri",
          ],
          correct_index: 1,
          tr_explanation:
            "'Code' = spor dalı. Sporlar arası ortak örüntü tanıma — pundit yetkinliği.",
        },
        {
          question: "'On a knife-edge' deyimi nerede kullanılır?",
          options: [
            "Mutfak bağlamı",
            "Sonucu çok belirsiz, ipince denge",
            "Tek kişilik karar",
            "Bıçak satışı",
          ],
          correct_index: 1,
          tr_explanation:
            "'On a knife-edge' = bıçak sırtında; çok dengesiz/belirsiz durum deyimi.",
        },
        {
          question: "Üç sporu tek akışta konuşmanın asıl tekniği nedir?",
          options: [
            "Hızlı konuşma",
            "Sporlardaki ortak tema veya duyguyu köprü olarak kullanmak",
            "Her sporun kendi terimini tekrar etmek",
            "İstatistik dökmek",
          ],
          correct_index: 1,
          tr_explanation:
            "Geçişler bağlam köprüsüyle akışkan olur: 'aynı tema/aynı içgüdü/aynı cesaret'.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson C1.13 — Federer'in geç dönemi
// ============================================================
export const sportC1Lesson_13: BundledLesson = {
  id: "sport.c1.bio.1",
  skill_id: "sport.c1.bio",
  index: 1,
  title: "Federer'in Geç Dönemi — Backing Down and Still Winning",
  description:
    "Kariyer yayı anlatımı. 'He shortened the points, took time away from the baseliner — old-master economy.' Düşüş, adaptasyon, miras.",
  estimated_minutes: 12,
  exercises: [
    {
      id: "ex.sport.c1.13.1",
      type: "vocab_tile",
      difficulty: 5,
      word_or_phrase: "old-master economy",
      tr_translation: "Eski usta ekonomisi (az hareketle çok iş — sanatsal tasarruf)",
      example:
        "Federer in his late twenties became all old-master economy — half-volleys where he used to drive, slice instead of topspin.",
      example_tr:
        "Yirmili yaşlarının sonunda Federer tam bir eski usta ekonomisine döndü — eskiden vurduğu yerde yarım vole, topspin yerine slice.",
    },
    {
      id: "ex.sport.c1.13.2",
      type: "vocab_tile",
      difficulty: 5,
      word_or_phrase: "took time away from the baseliner",
      tr_translation: "Baseliner'a zaman bırakmamak (erken vurarak ritmi bozmak)",
      example:
        "He took time away from the baseliner — half-step inside, ball on the rise.",
      example_tr:
        "Baseliner'a zaman bırakmadı — yarım adım içeri, top yükselirken vuruş.",
    },
    {
      id: "ex.sport.c1.13.3",
      type: "translate",
      difficulty: 5,
      direction: "tr_to_en",
      source:
        "Yaş ilerledikçe yeteneğin gücüyle değil, seçimlerinle oynamayı öğrenirsin — Federer bunun dersini iki kez verdi.",
      target:
        "As you age, you learn to play with your choices rather than your power — Federer taught that lesson twice over.",
      accepted_variants: [
        "Age forces you to play with selection over strength — Federer gave the masterclass on that, more than once.",
        "Late-career, you trade muscle for decision-making; Federer wrote the textbook.",
        "When the legs go, the brain has to take over — Federer made it look like a choice, not a concession.",
        "You stop overpowering and start outsmarting; Federer gave that lesson on two separate occasions.",
        "Time teaches you to win with intent over athleticism — Federer taught it twice, on different surfaces.",
      ],
      tr_hint:
        "'Selection over strength', 'made it look like a choice', 'masterclass', 'twice over' — biyografi registeri.",
    },
    {
      id: "ex.sport.c1.13.4",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Bir kıdemli spor gazetecisiyle Federer'in geç dönemini analiz ediyorsun. Düşüş, adaptasyon, miras üçgeni.",
      npc_role: "Sports journalist",
      setting: "Long-form feature commission meeting",
      turns: [
        {
          speaker: "npc",
          message:
            "Frame Federer's late career in one sentence — what's the thesis?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(the thesis|the through.?line|the spine of the piece)",
            "(graceful adaptation|economical reinvention|controlled retreat)",
            "(he stopped (overpowering|outhitting)|he shortened the points)",
            "(he chose|he opted for|he leaned into) (economy|efficiency|selection)",
            "(when the body asked|once the legs went|as the engine softened)",
            "(turning loss of step into a stylistic choice|making decline look like design)",
            "(half a step earlier|a foot inside the baseline)",
          ],
          hint_tr:
            "One-line thesis: 'Federer's late career: making decline look like design — half a step earlier, slice for topspin, every point shorter.'",
        },
        {
          speaker: "npc",
          message:
            "Where does he sit in the pantheon — pure ranking or something more layered?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(ranking misses the point|the slam count is half the story)",
            "(longevity|aesthetic|cultural reach) (matters|weighs|tilts the case)",
            "(djokovic|nadal) (will likely (have|own)|edge in slam count)",
            "(but|though|that said) (federer'?s influence|the imprint|the style)",
            "(on (a generation|the sport|how the game is taught)|on coaching|on academies)",
            "(numerically (third|second|trailing)|aesthetically (first|the gold standard|the benchmark))",
            "(it'?s|its) a category that resists ranking|some questions don'?t take numbers)",
          ],
          hint_tr:
            "Layered placement: 'Ranking misses the point — Djokovic may edge slam count, but Federer's imprint on how the game is taught is unmatched.'",
        },
        {
          speaker: "npc",
          message:
            "Pick one match that captures the late-career economy — and tell me why.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(wimbledon|melbourne|the 2017 (open|championship)|the indian wells run)",
            "(the (final|semi)|that (third|fifth) set)",
            "(every point ended in under four shots|the average rally length|short, sharp exchanges)",
            "(slice (kept) the baseliner deep|stack of short returns)",
            "(net rushes|chip.?and.?charge|first.?strike tennis)",
            "(he made the (court|surface|tour) come to him|drew (the opponent) (out of position|out of pattern))",
            "(it'?s the match where the (geometry|design|architecture) does the work)",
          ],
          hint_tr:
            "Match pick: 'The 2017 Melbourne final — every point ended in under four shots, slice kept Nadal deep, he made the court come to him.'",
        },
        {
          speaker: "npc",
          message:
            "Last bit — does the legacy outlive him? In what shape?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(it outlives him|the legacy compounds|the imprint deepens)",
            "(in two (forms|shapes|ways))",
            "(stylistic|aesthetic|on the court|in how the game is played)",
            "(cultural|institutional|off the court|in how the game is run)",
            "(every junior who chips and charges|every academy that teaches the slice)",
            "(the laver cup|the foundation|the businesses) (carry forward|extend the brand|institutionalise the influence)",
            "(it'?s|its) a legacy of (taste|design|generosity)",
          ],
          hint_tr:
            "Legacy shape: 'Outlives him in two forms — stylistic, in every junior who learns the slice, and institutional, through the Laver Cup.'",
        },
        {
          speaker: "npc",
          message: "Beautiful. Get the draft to me by Friday.",
        },
      ],
    },
    {
      id: "ex.sport.c1.13.5",
      type: "recap_quiz",
      difficulty: 4,
      questions: [
        {
          question: "'Old-master economy' tenis bağlamında ne anlatır?",
          options: [
            "Yaşlı oyuncunun yorgunluğu",
            "Az hareketle çok iş, sanatsal-bilgece kaynak kullanımı",
            "Eski raket tercihi",
            "Ekonomi profesörlüğü",
          ],
          correct_index: 1,
          tr_explanation:
            "'Old-master' = resim sanatında olgun usta. Az çizgi, çok anlam.",
        },
        {
          question: "'Making decline look like design' deyiminin tonu?",
          options: [
            "Kötümser",
            "Düşüşü estetik tercih gibi göstermek — saygılı/olgun övgü",
            "Açıklayıcı",
            "Mimari eleştiri",
          ],
          correct_index: 1,
          tr_explanation:
            "Bilinçli tasarım gibi sunulan adaptasyon — biyografik C1 övgü kalıbı.",
        },
        {
          question: "'Ranking misses the point' tavrı?",
          options: [
            "Sıralama önemli değildir",
            "Salt sayı sıralaması, mirasın bütününü kapsayamaz",
            "Hesap hatalıdır",
            "Sıralama yapılmamalıdır",
          ],
          correct_index: 1,
          tr_explanation:
            "Slam sayısı önemli ama estetik/kültürel etki sıralamayla yakalanmaz — nuanced hedged değerlendirme.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson C1.14 — LeBron'un dayanıklılığı
// ============================================================
export const sportC1Lesson_14: BundledLesson = {
  id: "sport.c1.bio.2",
  skill_id: "sport.c1.bio",
  index: 2,
  title: "LeBron'un Dayanıklılığı — Longevity ve Athletic Capital",
  description:
    "Comeback ve süreklilik. 'Twenty-plus seasons, mileage hidden by load management — a body curated, not just trained.' Biyografi derinliği.",
  estimated_minutes: 12,
  exercises: [
    {
      id: "ex.sport.c1.14.1",
      type: "vocab_tile",
      difficulty: 5,
      word_or_phrase: "load management",
      tr_translation: "Yük yönetimi (oyun başına dakikayı kısıtlama / DNP)",
      example:
        "Two decades in and the mileage is hidden by load management — a body curated, not just trained.",
      example_tr:
        "Yirmi yılın sonunda mesafe yük yönetimiyle gizlenmiş — sadece çalıştırılmış değil, küratörlüğü yapılmış bir beden.",
    },
    {
      id: "ex.sport.c1.14.2",
      type: "vocab_tile",
      difficulty: 5,
      word_or_phrase: "athletic capital",
      tr_translation: "Atletik sermaye (yıllar içinde biriken/erinen fiziksel yatırım)",
      example:
        "LeBron treats athletic capital like a hedge fund — diversified, monitored, never spent in a single quarter.",
      example_tr:
        "LeBron atletik sermayeyi bir hedge fon gibi yönetiyor — çeşitlendirilmiş, izlenen, tek çeyrekte harcanmayan.",
    },
    {
      id: "ex.sport.c1.14.3",
      type: "translate",
      difficulty: 5,
      direction: "tr_to_en",
      source:
        "Yetenek doğal kaynaktır; dayanıklılık ise sürekli yenilenen bir yatırım hesabı — LeBron bunu erken anladı.",
      target:
        "Talent is a natural resource; longevity is a continuously reinvested portfolio — and LeBron understood that early.",
      accepted_variants: [
        "Talent is what you're born with; longevity is what you compound — LeBron got that memo early.",
        "Talent is gifted; durability is curated. LeBron treated his body as an investment account.",
        "Talent arrives; longevity is engineered — LeBron grasped that before most of his peers.",
        "Natural ability hands you the keys; longevity demands constant capital investment — LeBron read the brief early.",
        "Talent opens the door; longevity is a discipline — LeBron understood the project from day one.",
      ],
      tr_hint:
        "'Compound', 'engineered', 'curated', 'capital investment', 'read the brief' — biyografik C1 deyimleri.",
    },
    {
      id: "ex.sport.c1.14.4",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Bir performans koçuyla LeBron'un yirmi yıllık sürekliliğini analiz ediyorsun. Bilim, alışkanlık, ego yönetimi.",
      npc_role: "Performance coach",
      setting: "High-performance institute",
      turns: [
        {
          speaker: "npc",
          message:
            "Twenty-plus seasons at this level. What's the single biggest variable?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(it'?s|its) (not one variable|a system|a stack)",
            "(but if i had to pick|if forced to choose|if you twisted my arm)",
            "(recovery infrastructure|the recovery stack|the day after the game)",
            "(sleep|nutrition|cryotherapy|hyperbaric|massage|mobility)",
            "(all of it ladders up to|all of it feeds into|all of it is in service of)",
            "(self.?monitoring|self.?awareness|knowing his own body)",
            "(the willingness to (sit out|skip|miss) when (most stars wouldn'?t|ego would push through))",
          ],
          hint_tr:
            "Stack answer: 'Not one variable — but if forced, self-monitoring. Willingness to sit out when ego would push through.'",
        },
        {
          speaker: "npc",
          message:
            "Load management — necessary medicine or branding genius?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(both|it'?s the same answer|necessity and posture)",
            "(the (medicine|biology|physiology) is real|the science holds up|the data supports it)",
            "(but|alongside|in parallel) (he reframed it|he normalised it|he made it palatable)",
            "(turned (rest|maintenance|skipped games) into|made (sitting out|skipping) into) (a virtue|a strategic asset|smart capital)",
            "(other stars now (cite him|follow the template|borrow the language))",
            "(branding genius (because|in that) the medicine sells itself when he says it)",
          ],
          hint_tr:
            "Dual framing: 'Both — the medicine is real, but he reframed it as a virtue. Other stars now follow the template.'",
        },
        {
          speaker: "npc",
          message:
            "Where does he sit in the all-time conversation — and how do you weight era?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(top two|in the conversation|on the shortlist of three or four)",
            "(jordan|mj) (gets the cultural slot|owns the mythology|holds the imagination)",
            "(but|however|on a flat basis|by the numbers) (lebron'?s longevity|the totals|the cumulative impact)",
            "(makes a different case|is its own argument|reframes the question)",
            "(era weighting|adjusting for era|the pace.?and.?space era) (cuts both ways)",
            "(better athletes today|deeper league|harder schedule)",
            "(versus easier rim protection|fewer enforcers|softer perimeter rules)",
          ],
          hint_tr:
            "Era-adjusted view: 'Top two — Jordan holds the mythology, but LeBron's longevity is its own argument. Era cuts both ways.'",
        },
        {
          speaker: "npc",
          message:
            "What does his late career teach the next generation specifically?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(treat your body as|invest in your body like) (a long.?term project|an asset|a portfolio)",
            "(the (recovery work|maintenance routine|injury prevention) (compounds|pays off) over (years|decades))",
            "(don'?t spend (your athleticism|your prime) (in single (seasons|quarters)|on (vanity|empty calorie) (stats|games)))",
            "(ego management|knowing when to (sit|rest|delegate))",
            "(diversification|don'?t bet everything on the one athletic gift)",
            "(brand, business, family|life off the court|the wider portfolio)",
          ],
          hint_tr:
            "Generational lesson: 'Treat your body like a long-term portfolio. The recovery work compounds. Don't spend your athleticism on vanity stats.'",
        },
        {
          speaker: "npc",
          message: "Excellent framework. Let's write it up.",
        },
      ],
    },
    {
      id: "ex.sport.c1.14.5",
      type: "recap_quiz",
      difficulty: 4,
      questions: [
        {
          question: "'A body curated, not just trained' deyiminin anlamı?",
          options: [
            "Müzede sergilenmiş",
            "Sadece çalıştırılmış değil, küratörlük gibi seçimle korunmuş beden",
            "Hasta",
            "Sergi nesnesi",
          ],
          correct_index: 1,
          tr_explanation:
            "'Curate' = küratörlük yapmak; bedeni özenle seçilmiş bir koleksiyon gibi yönetmek.",
        },
        {
          question: "'Athletic capital' yaklaşımı ne anlatır?",
          options: [
            "Spor sermayesi şirketi",
            "Fiziksel kapasiteyi yatırım hesabı gibi yöneten zihniyet",
            "Şehir adı",
            "Spor borsası",
          ],
          correct_index: 1,
          tr_explanation:
            "Atletik sermaye = harcanan/çoğaltılabilen yatırım. Finans dilini spora taşır.",
        },
        {
          question: "'Era cuts both ways' tonu nedir?",
          options: [
            "Net iddia",
            "Hedged çift yön — dönem karşılaştırmasını her iki tarafa da kullanabilirsin",
            "Kesin retı",
            "Şaka",
          ],
          correct_index: 1,
          tr_explanation:
            "'Cuts both ways' = iki yönlü keser; argümanın simetrik olduğunu söyleyen hedged ifade.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson C1.15 — VAR tartışması
// ============================================================
export const sportC1Lesson_15: BundledLesson = {
  id: "sport.c1.officiate.1",
  skill_id: "sport.c1.officiate",
  index: 1,
  title: "VAR Tartışması — 'Soft Penalty' Teknik Analizi",
  description:
    "Hakem kararı dissect. 'It's a clear and obvious threshold — minimal contact, but the boot does catch him.' Replay register ve protokol.",
  estimated_minutes: 11,
  exercises: [
    {
      id: "ex.sport.c1.15.1",
      type: "vocab_tile",
      difficulty: 5,
      word_or_phrase: "clear and obvious threshold",
      tr_translation: "Net ve aşikar eşiği (VAR müdahalesinin protokol kriteri)",
      example:
        "VAR only intervenes on a clear and obvious threshold — anything ambiguous stays with the on-field call.",
      example_tr:
        "VAR yalnızca 'net ve aşikar' eşikte müdahale eder — şüpheli durumlar saha kararında kalır.",
    },
    {
      id: "ex.sport.c1.15.2",
      type: "vocab_tile",
      difficulty: 5,
      word_or_phrase: "soft penalty",
      tr_translation: "Yumuşak penaltı (sınırda, abartılı denebilecek karar)",
      example:
        "It's a soft penalty — minimal contact, exaggerated fall, but the boot does catch him.",
      example_tr:
        "Yumuşak bir penaltı — temas minimum, düşüş abartılı ama ayak adamı buluyor.",
    },
    {
      id: "ex.sport.c1.15.3",
      type: "translate",
      difficulty: 5,
      direction: "tr_to_en",
      source:
        "Yumuşak bir penaltı verirsen taraftar bağırır, vermezsen saldıran taraftar bağırır — VAR bu çatallı sorunu çözmedi, sadece kaydırdı.",
      target:
        "Give a soft penalty and the fans howl; don't give one and the attacking side howls — VAR hasn't solved the fork, it's just relocated it.",
      accepted_variants: [
        "Award a soft penalty and you draw uproar; deny it and the attacking team uproars instead — VAR didn't fix the dilemma, it shifted it.",
        "Either way the crowd erupts on a soft pen — VAR moved the argument, it didn't resolve it.",
        "Give it, you anger one half; wave it on, you anger the other — VAR just shifted where the row happens.",
        "Soft pens are damned-if-you-do; VAR didn't dissolve the problem, it just changed the address.",
        "On marginal calls there's no winning the crowd — VAR rerouted the controversy, it didn't end it.",
      ],
      tr_hint:
        "'Howl', 'fork', 'relocated', 'damned-if-you-do', 'rerouted' — hakem/VAR registeri.",
    },
    {
      id: "ex.sport.c1.15.4",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Bir spor gazetecisiyle 87. dakika VAR penaltı kararını sahne sahne çözüyorsun. Protokol, eşik, hakem karakter.",
      npc_role: "Sports journalist",
      setting: "Replay analysis room",
      turns: [
        {
          speaker: "npc",
          message:
            "Watch the replay — frame by frame, was that a clear and obvious error?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(frame by frame|in slow motion|on the freeze frame)",
            "(there'?s contact|the boot does (catch|clip|graze)|minimal contact)",
            "(but (it'?s|its)|the issue is) (sufficient|enough|on the line|borderline) (for a penalty)",
            "(at full speed|in real time|live in the stadium)",
            "(the referee (saw it (one way|differently)|made the call he made))",
            "(clear and obvious is a high bar|the threshold isn'?t (any|some) contact|threshold isn'?t binary)",
            "(i wouldn'?t (overturn|reverse|intervene)|i'?d let the on.?field call stand)",
          ],
          hint_tr:
            "Threshold analysis: 'The boot does clip him, but clear-and-obvious is a high bar. I wouldn't overturn — let the on-field call stand.'",
        },
        {
          speaker: "npc",
          message:
            "The striker absolutely sells the contact. Does the dive change the legal call?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(strictly|by the letter of the law|on the rule book) (the exaggeration doesn'?t matter|the embellishment is separate)",
            "(if there'?s contact and it'?s a foul|a foul is a foul|the contact stands on its own)",
            "(but|in practice|in the real world)",
            "(theatre|theatrics|going to ground easily) (influences the referee|sways the perception|tilts the call)",
            "(the (camera|broadcast|optic) shows the dive|the slow.?mo (exposes|reveals|amplifies) the embellishment)",
            "(retrospective sanction|post.?match review|an FA charge) (could follow|might apply|sits in play)",
          ],
          hint_tr:
            "Law vs reality: 'By the letter, the dive doesn't matter — but theatre tilts perception. Retrospective sanction could follow.'",
        },
        {
          speaker: "npc",
          message:
            "VAR's purpose was to end this kind of argument. Has it failed or has it just changed it?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(it didn'?t end the argument|it never could|the row was always going to survive)",
            "(it (relocated|moved|rerouted) the controversy|shifted (the address|the venue|where) the argument lives)",
            "(from (the pitch|the moment) to (the booth|the screen|the review room))",
            "(in some categories|on certain calls) (it has improved|standards have risen|errors have fallen)",
            "(offside|goal.?line|clear handball) (objectively better|measurably tighter|more consistent)",
            "(but on (subjective|judgement|interpretive) calls) (the row continues|the dilemma persists)",
            "(part triumph, part theatre|mixed verdict|with caveats)",
          ],
          hint_tr:
            "Mixed verdict: 'Didn't end it — relocated it. Better on objective calls, but the row continues on subjective ones.'",
        },
        {
          speaker: "npc",
          message:
            "Last question — should referees announce their decisions to the crowd, NFL-style?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes, on balance|i'?d say yes|i'?m persuaded by it)",
            "(transparency is (the right currency|the missing piece|the legitimacy tool))",
            "(hearing the rationale|the public explanation|the stated reasoning)",
            "(deflates|disarms|takes the heat out of) (the conspiracy theory|the suspicion|the narrative)",
            "(it humanises the official|puts a face on the call|brings the (booth|review) into daylight)",
            "(but|the risk is) (referees (become performers|play to the camera|lose anonymity))",
            "(experiment with|pilot|trial) (in cup competitions|in lower tiers) (first|before rolling out)",
          ],
          hint_tr:
            "Reform position: 'Yes — transparency deflates conspiracy. But pilot it in cup competitions first; we don't want referees as performers.'",
        },
        {
          speaker: "npc",
          message: "Top analysis. Let's pin the verdict.",
        },
      ],
    },
    {
      id: "ex.sport.c1.15.5",
      type: "recap_quiz",
      difficulty: 4,
      questions: [
        {
          question: "VAR'da 'clear and obvious threshold' nedir?",
          options: [
            "Her temas için müdahale eşiği",
            "Yalnız 'net ve aşikar hata'da müdahale eden protokol kriteri",
            "Hakemin görüş açısı",
            "Saha çizgisi",
          ],
          correct_index: 1,
          tr_explanation:
            "Net ve aşikar = clear and obvious; sınırda kararlar saha hakemi kalır.",
        },
        {
          question: "'Soft penalty' nedir?",
          options: [
            "Yumuşak topla atılan penaltı",
            "Sınırda, abartılı veya tartışmalı verilen penaltı",
            "Çocuk maçı kuralı",
            "Yumuşak sert ayak",
          ],
          correct_index: 1,
          tr_explanation:
            "'Soft pen' = abartılı düşüş, minimum temas; futbol argosu.",
        },
        {
          question: "'Relocated the controversy' VAR eleştirisi ne anlatır?",
          options: [
            "Tartışmayı yok etti",
            "Tartışmayı sahadan kontrol odasına taşıdı, çözmedi",
            "Hakemi değiştirdi",
            "Maçı erteledi",
          ],
          correct_index: 1,
          tr_explanation:
            "'Relocate' = yer değiştirmek; VAR sorunu çözmedi, başka adrese taşıdı.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson registry
// ============================================================
export const sportC1Lessons: ReadonlyArray<BundledLesson> = [
  sportC1Lesson_1,
  sportC1Lesson_2,
  sportC1Lesson_3,
  sportC1Lesson_4,
  sportC1Lesson_5,
  sportC1Lesson_6,
  sportC1Lesson_7,
  sportC1Lesson_8,
  sportC1Lesson_9,
  sportC1Lesson_10,
  sportC1Lesson_11,
  sportC1Lesson_12,
  sportC1Lesson_13,
  sportC1Lesson_14,
  sportC1Lesson_15,
];

export function getSportC1Lesson(id: string): BundledLesson | undefined {
  return sportC1Lessons.find((l) => l.id === id);
}
