// Story Arc lessons V2 — 15 new multi-scene narratives (role-based).
// Total: 132 scenes. Continuity within each arc (recurring NPCs, consequences).
// CEFR progression: each arc starts ~A2-B1 and climbs to B1-B2 within the situation.
//
// Arcs:
//   1.  Erasmus Amsterdam (10) — Annika, prof. Visser, Tom (group project)
//   2.  Junior dev London startup (10) — Sarah (manager), Raj (senior), Emily (PM)
//   3.  NY tech conference (8) — Alex (recurring contact)
//   4.  Customer support agent — your job (8) — Mr. Brennan (boss), Priya (new hire)
//   5.  US immigration interview (8) — Officer Wallace
//   6.  Doctor visit English country (8) — Dr. Patel, Nurse Karen
//   7.  Apartment hunting London (8) — Daniel (agent), Mrs. Pemberton (landlord)
//   8.  Online dating (10) — Emma
//   9.  Work conflict resolution (8) — James (colleague), Lisa (manager)
//  10.  Salary negotiation (8) — Megan (HR), David (hiring manager)
//  11.  Freelance client management (10) — Carlos (client)
//  12.  Solo travel Japan (10) — Yuki (innkeeper), Hiro (bar)
//  13.  Tech support call you=customer (8) — Tier-1 Brad, Supervisor Linda
//  14.  University admission interview (8) — Prof. Hartwell
//  15.  Long-haul flight to NY (10) — Gate agent Marta, seatmate Robert

import type { BundledLesson } from "../lib/engine";

// ============================================================
// ARC 1 — ERASMUS IN AMSTERDAM (10 sahne)
// Recurring NPCs: Annika (Dutch friend from café), Prof. Visser, Tom (groupmate)
// ============================================================

export const erasmusAmsterdam01: BundledLesson = {
  id: "arc.erasmus_amsterdam.1",
  skill_id: "arc.erasmus_amsterdam",
  index: 1,
  title: "Sahne 1 — Erasmus orientation: hangi modülleri seçeyim?",
  description:
    "UvA International Office. Orientation lead'in karşısında, kursları kayıt etmen lazım.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.arc.erasmus_amsterdam.1.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "to sign up for",
      tr_translation: "Kayıt olmak (ders, etkinlik)",
      example: "I'd like to sign up for the linguistics module.",
      example_tr: "Dilbilim modülüne kayıt olmak istiyorum.",
    },
    {
      id: "ex.arc.erasmus_amsterdam.1.2",
      type: "roleplay_chat",
      difficulty: 2,
      scenario_description:
        "International Office, sıra sana geldi. Orientation lead form uzatıyor — modül seçimi.",
      npc_role: "Erasmus orientation lead (Dutch, friendly)",
      setting: "University of Amsterdam, International Office, Monday morning",
      turns: [
        {
          speaker: "npc",
          message:
            "So — you're the new arrival from Turkey. Have you decided which modules you want?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i'?ve|i have) (a |some |a few )?(in mind|options)",
            "(still )?(figuring it out|deciding)",
            "(i'?d like to|i want to) sign up for",
            "(not yet|honestly not)(,)? (could you (recommend|help))",
            "(can|could) (you|i) (walk through|see) (the )?options",
          ],
          hint_tr:
            "'Sign up for' = kayıt olmak. Türk: 'I want to register' resmi, 'I'd like to sign up' daha doğal/kibar.",
        },
        {
          speaker: "npc",
          message:
            "Sure. Your home university approved four modules — that's 24 credits. Any preferences?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i'?m (interested|leaning) towards) (linguistics|econ|history)",
            "(my (focus|major) (is|'?s) (in )?)",
            "(anything (lighter|practical|seminar(-| )?based))",
            "(could i mix|can i take across)",
            "(what'?s the (workload|usual load))",
          ],
          hint_tr:
            "İlgi alanı: 'I'm leaning towards linguistics.' Türk: 'I like' yetersiz, 'leaning towards' daha olgun.",
        },
        {
          speaker: "npc",
          message:
            "Lots of Erasmus students take 'Dutch Society Today' — it's in English, fun, easy attendance grade.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(sounds (good|interesting|perfect))",
            "(i'?ll add (that|it) (to my list|in))",
            "(is it (worth the credits|recommended))",
            "(what'?s the (assessment|grading) like)",
            "(any (reading|prep) before week one)",
          ],
          hint_tr:
            "'I'll add it in' = bunu eklerim. Türk: 'I will take it' yetersiz, 'add it to my list' karar verirken doğal.",
        },
        {
          speaker: "npc",
          message:
            "Mostly group work and a final paper. Speaking of — group projects are huge here. Get used to it.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(good to know|noted)",
            "(i'?m used to (group work|teamwork))",
            "(not my (favourite|favorite)|i prefer solo)",
            "(how do (groups|teams) get (assigned|formed))",
            "(any (tips|advice) for surviving them)",
          ],
          hint_tr:
            "Honest: 'Not my favourite but I'll manage.' Türk: 'Yes I like' düz, dürüst karışık reaksiyon daha doğal.",
        },
        {
          speaker: "npc",
          message:
            "Random pairings, usually. Speak up early — Dutch students will, too.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(got it|noted)",
            "(thanks for the heads(-| )?up)",
            "(i'?ll (push myself|make sure) to speak up)",
            "(any (other |last )?(advice|tips))",
            "(does (attendance|punctuality) matter a lot)",
          ],
          hint_tr:
            "'Heads-up' = uyarı/önceden bilgi. Türk: 'Thanks for warning' eksik, 'thanks for the heads-up' daha doğal.",
        },
        {
          speaker: "npc",
          message:
            "Show up, hand things in on time, you'll be fine. Welcome to Amsterdam.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks|thank you)( so much| really)?",
            "(appreciate (it|the help))",
            "(excited to be here)",
            "(see you (around|at the welcome event))",
          ],
          hint_tr:
            "Kapanış: 'Thanks, excited to be here!' Türk: 'OK bye' soğuk, enerji ekle.",
        },
      ],
    },
  ],
};

export const erasmusAmsterdam02: BundledLesson = {
  id: "arc.erasmus_amsterdam.2",
  skill_id: "arc.erasmus_amsterdam",
  index: 2,
  title: "Sahne 2 — Yurt: çamaşır makinesini birlikte kullanmak",
  description:
    "Yurt çamaşır odası. Bir Hollandalı kız (Annika) makineyi paylaşmak istiyor. (Recurring NPC ilk sahne.)",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.arc.erasmus_amsterdam.2.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "to split a load",
      tr_translation: "Çamaşırı paylaşmak (aynı makinede)",
      example: "Want to split a load? Saves a few euros.",
      example_tr: "Çamaşırı paylaşalım mı? Birkaç euro kalır.",
    },
    {
      id: "ex.arc.erasmus_amsterdam.2.2",
      type: "roleplay_chat",
      difficulty: 2,
      scenario_description:
        "Yurt çamaşır odası, akşam. Sen tek bir küçük yığınla geldin. Annika dolu sepetle geliyor.",
      npc_role: "Annika (Dutch dorm neighbor, friendly)",
      setting: "Student dormitory laundry room, Amsterdam, 7pm",
      turns: [
        {
          speaker: "npc",
          message:
            "Hey — you've barely got anything in there. Wanna split a load? Cheaper for both of us.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yeah|sure|why not)(,)? (good idea|that works)",
            "(i'?m down|i'?m in)",
            "(let'?s do it)",
            "(as long as (it'?s|the colours are) (okay|safe))",
            "(any (whites|delicates)|colours only)",
          ],
          hint_tr:
            "'I'm down' = varım (samimi). Türk: 'OK yes' düz, 'I'm in' veya 'I'm down' daha doğal.",
        },
        {
          speaker: "npc",
          message:
            "All colours, nothing delicate. I'm Annika by the way — third floor.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(hey|hi)(,)? (i'?m|my name'?s) [a-z]+",
            "(nice to meet you)(,)? annika",
            "(fourth|fifth|second) floor",
            "(i'?m new (here|to amsterdam))",
            "(erasmus from turkey)",
          ],
          hint_tr:
            "Tanışma + 'fourth floor.' Türk: 'My name is...' düz, kısa 'I'm Burak, fourth floor.' doğal.",
        },
        {
          speaker: "npc",
          message:
            "Turkey, cool. How long have you been here?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(just |only )?(a (few|couple of) days)",
            "(i (got|arrived) (in|here) (last|on) (sunday|monday))",
            "(a week (or so|max))",
            "(still (settling in|jet(-| )?lagged))",
            "(literally just (moved in|got my key))",
          ],
          hint_tr:
            "'Just a few days' = sadece birkaç gün. Türk: 'Three days ago I come' yanlış, 'I arrived three days ago' veya 'just a few days'.",
        },
        {
          speaker: "npc",
          message:
            "Welcome! What do you think so far?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(it'?s|amsterdam is) (beautiful|amazing|smaller than i thought)",
            "(loving it|it'?s growing on me)",
            "(still (adjusting|finding my way))",
            "(the (bikes|canals|english level) (surprised|caught) me)",
            "(everyone speaks (such good )?english)",
          ],
          hint_tr:
            "Reaksiyon: 'Loving it — but the bikes scare me.' Türk: 'Good' yetersiz, somut detay (bikes, English).",
        },
        {
          speaker: "npc",
          message:
            "Ha, the bikes. Just don't walk in the red lane. We will run you over.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(noted|got it|will avoid)",
            "(i (almost|nearly) got hit (yesterday|already))",
            "(i'?ll stay (alive|on the sidewalk))",
            "(any (other |more )?survival tips)",
            "(the red lane (is|equals) (death|danger))",
          ],
          hint_tr:
            "'I almost got hit' = neredeyse çarpılıyordum. Türk: 'I was hit' yanlış, 'almost got hit' = yaklaştı ama olmadı.",
        },
        {
          speaker: "npc",
          message:
            "Stick around — there's a group going for drinks Friday. You should come.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yeah|sure|i'?d love to)",
            "(sounds (good|great|fun))",
            "(send me the (place|details))",
            "(count me in)",
            "(what time)",
          ],
          hint_tr:
            "Davet kabul: 'Count me in!' Türk: 'OK I come' düz, 'Count me in' kararlı + samimi.",
        },
      ],
    },
  ],
};

export const erasmusAmsterdam03: BundledLesson = {
  id: "arc.erasmus_amsterdam.3",
  skill_id: "arc.erasmus_amsterdam",
  index: 3,
  title: "Sahne 3 — Professor Visser ile ofis saati: tez konusu",
  description:
    "Prof. Visser'in ofisi. Yarıyıl projesi için danışman. Türk perspektifi katmak istiyorsun.",
  estimated_minutes: 6,
  exercises: [
    {
      id: "ex.arc.erasmus_amsterdam.3.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "to narrow down",
      tr_translation: "Daraltmak (konu, seçenek)",
      example: "I'm trying to narrow down my topic.",
      example_tr: "Konumu daraltmaya çalışıyorum.",
    },
    {
      id: "ex.arc.erasmus_amsterdam.3.2",
      type: "roleplay_chat",
      difficulty: 3,
      scenario_description:
        "Prof. Visser'in ofisi, kitaplarla dolu. Tez fikrini sunacaksın — feedback al.",
      npc_role: "Professor Visser (academic advisor, direct but kind)",
      setting: "UvA, professor's office, Wednesday 2pm",
      turns: [
        {
          speaker: "npc",
          message:
            "So — you wanted to talk about your semester project. What's on your mind?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i'?ve|i have) (a |some )?(ideas|topics)",
            "(i'?m (thinking|considering)) (about|of)",
            "(i'?d like to (focus|work) on)",
            "(could i (run|bounce) (an idea|something) (by|past) you)",
            "(i'?m trying to narrow down)",
          ],
          hint_tr:
            "Açılış: 'I'd like to run an idea by you.' Türk: 'I have idea' eksik, 'run an idea by you' akademik kalıbı.",
        },
        {
          speaker: "npc",
          message:
            "Go ahead. The broader, the harder to defend — keep that in mind.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(noted|good point)",
            "(i was thinking|i wanted to look at) (turkish|the turkish (case|experience))",
            "(comparing (turkey|istanbul) (and|with) (amsterdam|the netherlands))",
            "(specifically (on|about)) (migration|urbanization|youth (culture|trends))",
            "(does that (sound|feel) (focused|narrow) enough)",
          ],
          hint_tr:
            "Konu sunma: 'I wanted to look at the Turkish case in...' Türk: 'My idea is...' düz, 'I wanted to look at' daha akademik.",
        },
        {
          speaker: "npc",
          message:
            "Interesting angle. But what's the question? A topic isn't a question.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(fair (point|enough))",
            "(let me (rephrase|reframe))",
            "(the question would be|how would i ask it)",
            "(why does (x) (lead to|differ from))",
            "(maybe (something like|along the lines of)) (why|how|to what extent)",
          ],
          hint_tr:
            "Yeniden çerçeve: 'Let me reframe — why does X differ from Y?' Türk: 'OK I change' eksik, 'reframe' akademik.",
        },
        {
          speaker: "npc",
          message:
            "Better. 'Why does X differ' is a real question. Now — sources. What languages can you work in?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(turkish and english)",
            "(i can read (some |basic )?dutch)",
            "(all (my )?academic work (is|has been) in english)",
            "(turkish for primary sources)",
            "(could i (work with|use) translations)",
          ],
          hint_tr:
            "Avantaj: 'Turkish for primary sources, English for academic.' Türk: 'I know English' yetersiz, dil + işlev.",
        },
        {
          speaker: "npc",
          message:
            "Turkish primary sources are a real advantage. Lean into it.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(will do|that'?s the plan)",
            "(any (recommended|specific) sources)",
            "(should i (start with|prioritize)) (interviews|archives|press))",
            "(thanks)(,)? (that'?s helpful)",
            "(could i email you a draft outline)",
          ],
          hint_tr:
            "'Lean into it' = bunu vurgula/güçlendir. Türk: 'I will use' düz, 'lean into it' daha doğal akademik tavsiye.",
        },
        {
          speaker: "npc",
          message:
            "Outline first. Two pages. By next Friday.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(noted|got it|will do)",
            "(next friday)(,)? (locked in|on it)",
            "(thanks for (the time|your guidance))",
            "(see you (at|in) (the seminar|class))",
            "(i'?ll have it (in your inbox|ready))",
          ],
          hint_tr:
            "Onay: 'Locked in — Friday.' Türk: 'OK I will write' eksik, 'locked in' kesin onay.",
        },
      ],
    },
  ],
};

export const erasmusAmsterdam04: BundledLesson = {
  id: "arc.erasmus_amsterdam.4",
  skill_id: "arc.erasmus_amsterdam",
  index: 4,
  title: "Sahne 4 — Group project: Tom hiçbir şey yapmıyor",
  description:
    "Grup ödevi son hafta, Tom (Dutch) hâlâ kendi kısmını teslim etmedi. Konfrontasyon — kibar ama net.",
  estimated_minutes: 6,
  exercises: [
    {
      id: "ex.arc.erasmus_amsterdam.4.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "to pull your weight",
      tr_translation: "Üzerine düşeni yapmak",
      example: "We need everyone to pull their weight.",
      example_tr: "Herkesin üzerine düşeni yapması lazım.",
    },
    {
      id: "ex.arc.erasmus_amsterdam.4.2",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Kütüphane çalışma odası. Tom geç geldi, hâlâ slayt yok. Direk konuş.",
      npc_role: "Tom (Dutch groupmate, has been slacking)",
      setting: "UvA library group room, deadline 48h away",
      turns: [
        {
          speaker: "npc",
          message:
            "Sorry I'm late, traffic was insane. So where are we?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(we'?re behind|we'?re running short on time)",
            "(actually )?(we need to talk about) (your slides|the section you took)",
            "(tom)(,)? (where are we with) (your part|the slides)",
            "(deadline is (in|under) (48 hours|two days))",
            "(can we (be honest|cut to it))",
          ],
          hint_tr:
            "Net giriş: 'Tom, where are we with your slides?' Türk: 'Do you finish?' eksik, isim + spesifik soru.",
        },
        {
          speaker: "npc",
          message:
            "I'm still working on them. Don't worry, it'll be fine.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i'?m (a bit|honestly) worried)",
            "(we'?re (running out of|short on) time)",
            "(what does still working on mean)",
            "(can you (send|share) what you have)",
            "(we need everyone to pull their weight)",
          ],
          hint_tr:
            "Direkt: 'We need everyone to pull their weight.' Türk: 'You need to work' suçlayıcı, kalıp ifade daha kibar/net.",
        },
        {
          speaker: "npc",
          message:
            "Look, I've had a rough week. I'll have something by tonight.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i hear you)(,)? (but the (deadline|grade) affects us all)",
            "(by tonight)(,)? (can we hold you to that)",
            "(what (does|do) (something|the slides) (mean|look like))",
            "(let'?s (set|agree on) a (specific time|hard deadline))",
            "(if not tonight)(,)? (what'?s plan b)",
          ],
          hint_tr:
            "Empati + sınır: 'I hear you, but the grade affects us all.' Türk: 'You must finish' eksik, empati + sınır olgun.",
        },
        {
          speaker: "npc",
          message:
            "Fine. Tonight at 10. I'll send a draft.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(perfect|works for me|let'?s do that)",
            "(i'?ll review (it )?(first thing|tomorrow morning))",
            "(can we plan to (sync|meet) tomorrow)",
            "(thanks)(,)? (this is the (energy|effort) we need)",
            "(can we (also )?(clarify|nail down) (the structure|references))",
          ],
          hint_tr:
            "Onay: 'Perfect — I'll review first thing.' Türk: 'OK' düz, plan + responsibility.",
        },
        {
          speaker: "npc",
          message:
            "Hey — I know I've been MIA. I'm sorry. I'll make it right.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(appreciate (it|you saying that))",
            "(we'?re a team)(,)? (let'?s (finish strong|nail this))",
            "(no hard feelings)",
            "(let'?s (move forward|focus on the deadline))",
            "(thanks for (owning it|being honest))",
          ],
          hint_tr:
            "'MIA' = missing in action (kayıp). 'Thanks for owning it' = sorumluluğu kabul ettiğin için. Türk: 'OK' düz, ilişki tamir et.",
        },
        {
          speaker: "npc",
          message:
            "Deal. Coffee after we send it?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(deal|done|locked in)",
            "(after submit|once it'?s in)",
            "(let'?s celebrate (surviving|making it))",
            "(coffee or (beer|something stronger))",
            "(see you tomorrow)",
          ],
          hint_tr:
            "Kapanış olumlu: 'Deal — coffee after.' Türk: 'OK' düz, ilişki onarımı + sosyal devam.",
        },
      ],
    },
  ],
};

export const erasmusAmsterdam05: BundledLesson = {
  id: "arc.erasmus_amsterdam.5",
  skill_id: "arc.erasmus_amsterdam",
  index: 5,
  title: "Sahne 5 — Cafe'de Annika ile: hayallerden konuşmak",
  description:
    "Annika ile favorisi olan kafede. Konuşma derinleşti — geleceğe dair. (Recurring NPC.)",
  estimated_minutes: 6,
  exercises: [
    {
      id: "ex.arc.erasmus_amsterdam.5.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "to figure things out",
      tr_translation: "Bir şeyleri çözmek/anlamak (kararsızlık)",
      example: "I'm still figuring things out.",
      example_tr: "Hâlâ bir şeyleri çözmeye çalışıyorum.",
    },
    {
      id: "ex.arc.erasmus_amsterdam.5.2",
      type: "roleplay_chat",
      difficulty: 3,
      scenario_description:
        "Jordaan'da küçük bir kafe. Yağmur yağıyor. Annika ile masada — derin sohbet.",
      npc_role: "Annika (Dutch friend, getting closer)",
      setting: "Cosy café in Jordaan district, rainy Saturday afternoon",
      turns: [
        {
          speaker: "npc",
          message:
            "So — what do you want to do after Erasmus? Like, actually?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(honestly|to be honest)(,)? (i'?m not sure|i don'?t know yet)",
            "(i'?m still figuring (things|it) out)",
            "(part of me wants to|i'?m considering)",
            "(i go back and forth between)",
            "(ask me in (a month|six months))",
          ],
          hint_tr:
            "Dürüst: 'Honestly, still figuring it out.' Türk: 'I don't know' soğuk, 'figuring it out' süreç gösterir.",
        },
        {
          speaker: "npc",
          message:
            "Fair. Do you want to stay in Europe? Or go home?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(part of me wants to (stay|go home))",
            "(it depends on (the job|opportunities|family))",
            "(istanbul has (this pull|something))",
            "(europe feels (easier|safer|more open))",
            "(i don'?t want to (choose|close any doors) yet)",
          ],
          hint_tr:
            "İki yönlü düşünme: 'Istanbul has this pull, but Europe feels more open.' Türk: 'I want stay' tek yön, çelişki daha olgun.",
        },
        {
          speaker: "npc",
          message:
            "I get that. I've thought about leaving the Netherlands. Everyone says my job is too easy here.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(easy isn'?t (always )?bad)",
            "(grass is greener|the other side seems shinier)",
            "(do you (want to|need to) leave)",
            "(what'?s pulling you elsewhere)",
            "(maybe you (just need a |a different )?challenge)",
          ],
          hint_tr:
            "Soruyla karşı: 'What's pulling you elsewhere?' Türk: 'Yes leave' yetersiz, soru ile dahil ol.",
        },
        {
          speaker: "npc",
          message:
            "I don't know. Maybe just the idea that I haven't really tried anything difficult.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i get that|that resonates)",
            "(comfort can feel like (a trap|stagnation))",
            "(sometimes you (need to|have to) (break|leave) (your bubble|comfort))",
            "(have you (considered|thought about)) (a project|a country))",
            "(what would (feel|be) hard for you)",
          ],
          hint_tr:
            "Validasyon: 'Comfort can feel like a trap.' Türk: 'OK' soğuk, deep listening gerek.",
        },
        {
          speaker: "npc",
          message:
            "Maybe a year in Asia. Or just doing something that actually scares me.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(you should (look into|seriously consider))",
            "(life is long but also)( weirdly short)",
            "(what'?s stopping you)",
            "(i (admire|envy) (people who do that|that mindset))",
            "(let'?s both (do it|jump))",
          ],
          hint_tr:
            "Cesaret: 'What's stopping you?' Türk: 'OK do it' düz, soru = düşündürür.",
        },
        {
          speaker: "npc",
          message:
            "I needed this conversation. Thanks for not giving me a lecture.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(any time|anytime)",
            "(no lectures (here|from me))",
            "(i needed it too)",
            "(this is (why|what i love about) our talks)",
            "(let'?s do this again soon)",
          ],
          hint_tr:
            "Sıcak: 'I needed it too.' Türk: 'OK welcome' düz, karşılıklılık gösterir.",
        },
      ],
    },
  ],
};

export const erasmusAmsterdam06: BundledLesson = {
  id: "arc.erasmus_amsterdam.6",
  skill_id: "arc.erasmus_amsterdam",
  index: 6,
  title: "Sahne 6 — Sınıfta tartışma: Türk perspektifini savun",
  description:
    "Seminer. Konu göç. Dutch öğrenci yanlış bir genelleme yaptı. Sen kibarca düzelt.",
  estimated_minutes: 6,
  exercises: [
    {
      id: "ex.arc.erasmus_amsterdam.6.1",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "I'd push back on that",
      tr_translation: "Buna karşı çıkarım (akademik nazik)",
      example: "I'd push back on that — it's more nuanced.",
      example_tr: "Buna karşı çıkarım — daha nüanslı bir konu.",
    },
    {
      id: "ex.arc.erasmus_amsterdam.6.2",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Seminer odası, 15 kişi. Bir öğrenci 'Turks come for welfare' dedi. Söz sırası senin.",
      npc_role: "Seminar discussion (professor + classmate)",
      setting: "UvA Migration Studies seminar, 15 students, heated debate",
      turns: [
        {
          speaker: "npc",
          message:
            "Professor: We have someone from Turkey in the room. Would you like to respond?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks|yes)(,)? (i'?d like to (push back|respond))",
            "(if i may|let me jump in)",
            "(i'?d (push back|respectfully disagree) on that)",
            "(the picture is (a lot )?more (complicated|nuanced))",
            "(may i offer (a different|another) perspective)",
          ],
          hint_tr:
            "Akademik giriş: 'I'd respectfully disagree.' Türk: 'You are wrong' agresif, 'push back respectfully' olgun.",
        },
        {
          speaker: "npc",
          message:
            "Classmate: I didn't mean it that way — just what the data shows.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i hear you|i get that)",
            "(but the data (depends on|is shaped by)) (which years|definitions))",
            "(turkish migration to (the netherlands|europe) is largely (labour-based|family reunification))",
            "(welfare dependency rates are (much (lower|smaller)|comparable))",
            "(it'?s worth (separating|distinguishing) (causes from outcomes))",
          ],
          hint_tr:
            "Veri ile karşı çıkış: 'It's worth distinguishing causes from outcomes.' Türk: 'No' düz, veri + nüans.",
        },
        {
          speaker: "npc",
          message:
            "Professor: That's a fair distinction. Can you give a concrete example?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(sure|of course|absolutely)",
            "(take the first wave in the (1960s|sixties))",
            "(my (grandfather|family) came (to) work (in)? (factories|mines))",
            "(those were (active recruitment|guest worker) programmes)",
            "(framing it as (welfare-seeking|opportunistic) erases that history)",
          ],
          hint_tr:
            "Kişisel + tarihsel: 'My grandfather came to work in factories.' Türk: somut örnek = güvenilir argüman.",
        },
        {
          speaker: "npc",
          message:
            "Classmate: I didn't know that. I'll think about how I phrased it.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(appreciate (that|you saying that))",
            "(no hard feelings)",
            "(we all (carry|inherit) (assumptions|gaps))",
            "(thanks for being (open|willing) to (rethink|listen))",
            "(this is the kind of (exchange|dialogue) i came here for)",
          ],
          hint_tr:
            "Açıklığı onurlandır: 'Thanks for being open to rethink.' Türk: 'OK' düz, geri dönüşü değerli kıl.",
        },
        {
          speaker: "npc",
          message:
            "Professor: Excellent exchange. This is what good seminars look like.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thank you|thanks)",
            "(glad i (spoke up|said something))",
            "(it'?s easier to (engage|push back) (in this seminar|here))",
            "(appreciate (your prompting|the space))",
            "(let'?s keep it going)",
          ],
          hint_tr:
            "Profesörü teşekkür et: 'Glad I spoke up.' Türk: 'OK thanks' kuru, ortamı değerli kıl.",
        },
      ],
    },
  ],
};

export const erasmusAmsterdam07: BundledLesson = {
  id: "arc.erasmus_amsterdam.7",
  skill_id: "arc.erasmus_amsterdam",
  index: 7,
  title: "Sahne 7 — Annika ile bisiklet kazası: 911 değil 112",
  description:
    "Annika ile bisiklet turunda yağmurlu yolda kayma. Hafif yara. Birinin yardımı lazım.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.arc.erasmus_amsterdam.7.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "Are you okay?",
      tr_translation: "İyi misin?",
      example: "Are you okay? Can you stand up?",
      example_tr: "İyi misin? Ayağa kalkabiliyor musun?",
    },
    {
      id: "ex.arc.erasmus_amsterdam.7.2",
      type: "roleplay_chat",
      difficulty: 3,
      scenario_description:
        "Vondelpark çıkışı. Annika kaymış, dizinden kan akıyor. Geçen biri yardıma koştu.",
      npc_role: "Dutch passerby helping out",
      setting: "Wet street near Vondelpark, after a fall, 6pm",
      turns: [
        {
          speaker: "npc",
          message:
            "Hey — is she okay? Should I call someone?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(she'?s (bleeding|hurt) (but )?(conscious|talking))",
            "(her (knee|elbow) is bad)",
            "(let me check|hold on)",
            "(can we (call (an )?ambulance|112))",
            "(she (says|says she'?s) okay (but))",
          ],
          hint_tr:
            "Hızlı durum: 'She's bleeding but conscious.' Türk: 'She fell' eksik, durum (bleeding/conscious) + yardım istemi.",
        },
        {
          speaker: "npc",
          message:
            "Sit her down. There's a bench right there. I'll grab tissues from my bag.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks|thank you)(,)? (lifesaver|that helps)",
            "(annika)(,)? (can you (stand|walk) (a bit|to the bench))",
            "(careful|lean on me)",
            "(let me (hold|carry) your bike)",
            "(do you feel (dizzy|nauseous))",
          ],
          hint_tr:
            "Annika'ya konuş: 'Can you stand?' + 'Lean on me.' Türk: 'You stand' direkt, soru daha kibar.",
        },
        {
          speaker: "npc",
          message:
            "Here. Looks deep — should we go to a doctor?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i think so|probably yes)",
            "(let me check|let me look)",
            "(if it'?s (deeper than|that bad)) we should",
            "(annika)(,)? (what do you (think|want to do))",
            "(is there a (gp|clinic|huisarts) nearby)",
          ],
          hint_tr:
            "Karar paylaş: 'Annika, what do you think?' Türk: tek başına karar verme, dahil et.",
        },
        {
          speaker: "npc",
          message:
            "There's a huisartsenpost ten minutes away. I can drive you.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(would you|that would be amazing)",
            "(thank you (so much|really))",
            "(we don'?t want to (impose|take your time))",
            "(only if (it'?s not too much|you'?re sure))",
            "(let me grab my (phone|wallet))",
          ],
          hint_tr:
            "Minnet: 'That would be amazing — only if it's not too much.' Türk: 'Yes drive' direkt, kibar + onay.",
        },
        {
          speaker: "npc",
          message:
            "Not at all. Bike's stay here, I'll text my partner.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thank you|appreciate (it|you so much))",
            "(you'?re (a saint|a literal angel))",
            "(let me (pay you|cover something)) for (the trouble|gas)",
            "(annika)(,)? (we'?re moving)",
            "(i (owe you|will buy you a coffee))",
          ],
          hint_tr:
            "Borç ödeme: 'Let me cover gas.' Türk: 'Thanks' yetersiz, materyal teklif uygun.",
        },
        {
          speaker: "npc",
          message:
            "Don't worry about it. Just pay it forward someday.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(deal|promise)",
            "(i will|i absolutely will)",
            "(this won'?t be forgotten)",
            "(thank you (again|truly))",
            "(annika and i (both )?(owe you|appreciate this))",
          ],
          hint_tr:
            "'Pay it forward' = iyiliği başkasına aktar. Türk kültürüne yabancı kavram — kabul et 'I will.'",
        },
      ],
    },
  ],
};

export const erasmusAmsterdam08: BundledLesson = {
  id: "arc.erasmus_amsterdam.8",
  skill_id: "arc.erasmus_amsterdam",
  index: 8,
  title: "Sahne 8 — Bürokrasi: BSN kayıt — gemeente",
  description:
    "Gemeente Amsterdam, BSN kayıt randevusu. Türk pasaport, oturum izni.",
  estimated_minutes: 6,
  exercises: [
    {
      id: "ex.arc.erasmus_amsterdam.8.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "to register my address",
      tr_translation: "Adres kaydı yaptırmak",
      example: "I'm here to register my address.",
      example_tr: "Adres kaydı yaptırmak için geldim.",
    },
    {
      id: "ex.arc.erasmus_amsterdam.8.2",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Gemeente kontuarı. Memur belgelerini istiyor. Türk öğrenci visa — net cevap ver.",
      npc_role: "Gemeente registration officer",
      setting: "Gemeente Amsterdam, registration desk, 9am appointment",
      turns: [
        {
          speaker: "npc",
          message:
            "Good morning. What's the appointment for?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i'?m here to (register|do)) (my address|the bsn registration)",
            "(i need (a |my )?bsn number)",
            "(first(-| )?time registration)",
            "(i'?m an erasmus student)",
            "(i moved (in|here) (last week|two weeks ago))",
          ],
          hint_tr:
            "Açılış: 'I'm here to register my address.' Türk: 'I want number' eksik, 'register my address' tam ifade.",
        },
        {
          speaker: "npc",
          message:
            "Passport, visa, and proof of address please.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(here you go|here'?s everything)",
            "(passport|visa|the (rental|housing) contract)(,)? (right here|got it)",
            "(let me grab (them|those))",
            "(do you need (the original|copies))",
            "(one second)",
          ],
          hint_tr:
            "Belge: 'Here's everything.' Türk: 'I have' eksik, 'here you go' uzatırken doğru.",
        },
        {
          speaker: "npc",
          message:
            "I'll need to verify your address. Is the landlord listed on this contract?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|yeah)(,)? (it'?s on (page (two|three)|the second page))",
            "(the (landlord|owner) is (the )?university)",
            "(it'?s a (student|university) dorm)",
            "(let me (point|show) (where|it))",
            "(do you need their (signature|contact))",
          ],
          hint_tr:
            "Yardımcı ol: 'It's on page two.' Türk: 'Yes' yetersiz, nerede olduğunu söyle.",
        },
        {
          speaker: "npc",
          message:
            "Got it. Your visa expires in June — registration will be valid until then.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(okay|understood|noted)",
            "(what (happens|do i do) if i (extend|renew)) (the visa)?",
            "(do i need to (come back|reregister))",
            "(thanks for (explaining|clarifying))",
            "(can you (also )?(set up|create) (my )?digid)",
          ],
          hint_tr:
            "Pratik soru: 'What if I extend my visa?' Türk: 'OK' düz, gelecek senaryolarını sor.",
        },
        {
          speaker: "npc",
          message:
            "If you extend, you'll need to update us. DigiD comes by mail in two weeks.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(by mail)(,)? (got it|noted)",
            "(does (it|the letter) have (a tracking|something secure))",
            "(what if i (don'?t receive|miss) (the letter|it))",
            "(thanks)(,)? (this is helpful)",
            "(should i (set up|activate) anything else)",
          ],
          hint_tr:
            "Bilgi al: 'What if I miss the letter?' Türk: 'OK' düz, neyle karşılaşacağını öğren.",
        },
        {
          speaker: "npc",
          message:
            "All registered. Your BSN: 123456789. Welcome to the Netherlands.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks|thank you)( so much)?",
            "(appreciate (it|the help))",
            "(have a (good|nice) (day|one))",
            "(this was (smoother|easier) than expected)",
            "(could you (send|email) me the (confirmation|number))",
          ],
          hint_tr:
            "Kapanış: 'Thanks, this was smoother than expected.' Türk: 'OK bye' düz, deneyim hakkında yorum daha doğal.",
        },
      ],
    },
  ],
};

export const erasmusAmsterdam09: BundledLesson = {
  id: "arc.erasmus_amsterdam.9",
  skill_id: "arc.erasmus_amsterdam",
  index: 9,
  title: "Sahne 9 — Final presentation: profesörün soruları",
  description:
    "Yarıyıl projesi sunumu. Prof. Visser zor sorular soruyor — savun.",
  estimated_minutes: 7,
  exercises: [
    {
      id: "ex.arc.erasmus_amsterdam.9.1",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "That's a fair point",
      tr_translation: "Bu yerinde bir nokta",
      example: "That's a fair point — let me address it.",
      example_tr: "Bu yerinde bir nokta — buna cevap vereyim.",
    },
    {
      id: "ex.arc.erasmus_amsterdam.9.2",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Sunum bitti. Prof. Visser sorulara geçti. Sert ama adil. Savun.",
      npc_role: "Prof. Visser (final defense Q&A)",
      setting: "UvA presentation room, end of semester, 12 students watching",
      turns: [
        {
          speaker: "npc",
          message:
            "Strong opening. But your sample size is 23. Why should we trust your conclusions?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(that'?s a fair (point|critique))",
            "(you'?re right (that|to push))",
            "(it'?s qualitative work)(,)? (not meant to (generalise|generalize))",
            "(the goal was (depth|texture))(,)? (not breadth)",
            "(future work could (scale|expand))",
          ],
          hint_tr:
            "Eleştiriyi kabul + savun: 'Fair point — it's qualitative, not meant to generalize.' Türk: 'You are wrong' agresif, kalıbı kullan.",
        },
        {
          speaker: "npc",
          message:
            "Fair enough. But why these 23? How did you recruit them?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(snowball sampling|through (community contacts|networks))",
            "(my (own )?network in (turkey|the diaspora))",
            "(i acknowledge (the bias|that this introduces bias))",
            "(it'?s (limitation|trade-off) of (qualitative|small-n) work)",
            "(future iterations would (diversify|widen the net))",
          ],
          hint_tr:
            "Yöntem savun: 'Snowball sampling — acknowledge the bias.' Türk: 'My friends' eksik, akademik term + zayıf yön kabul.",
        },
        {
          speaker: "npc",
          message:
            "You also keep saying 'Turkish community' as if it's one thing. Is it?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(another fair (push|critique))",
            "(no)(,)? (it'?s not (monolithic|homogeneous))",
            "(i could'?ve (been more specific|disaggregated))",
            "(by (region|class|generation))",
            "(let me (revise|tighten) (that|the language) in the final draft)",
          ],
          hint_tr:
            "Düzelt: 'I should've disaggregated by region/class/generation.' Türk: 'Yes one community' yanlış, nüansa açık ol.",
        },
        {
          speaker: "npc",
          message:
            "Good. One last — what would change your mind?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(strong question)",
            "(if i found (counter(-| )?evidence|consistent counterexamples))",
            "(quantitative data showing the opposite trend)",
            "(interviews from (newer|second(-| )?generation)) (subjects)?",
            "(i should be falsifiable on this)",
          ],
          hint_tr:
            "Bilim: 'I should be falsifiable.' Türk: 'I am right' eksik, ne yanlışlatır söyle.",
        },
        {
          speaker: "npc",
          message:
            "Excellent. That's the answer I was looking for. Well done.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thank you|thanks)(,)? (that means a lot)",
            "(appreciate (the questions|the pushback))",
            "(this (sharpened|improved) the work)",
            "(any (final |last )?suggestions for the (write(-| )?up|draft))",
            "(thanks for the (semester|guidance))",
          ],
          hint_tr:
            "Profesörü onurla: 'Appreciate the pushback.' Türk: 'OK thanks' düz, intelektüel ortaklığı kabul.",
        },
      ],
    },
  ],
};

export const erasmusAmsterdam10: BundledLesson = {
  id: "arc.erasmus_amsterdam.10",
  skill_id: "arc.erasmus_amsterdam",
  index: 10,
  title: "Sahne 10 — Veda partisi: Annika ile son konuşma",
  description:
    "ESN veda partisi. Yarın gidiyorsun. Annika köşede — son samimi konuşma. (Recurring NPC son.)",
  estimated_minutes: 6,
  exercises: [
    {
      id: "ex.arc.erasmus_amsterdam.10.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "Let's stay in touch",
      tr_translation: "İletişimde kalalım",
      example: "Let's actually stay in touch — not just say it.",
      example_tr: "İletişimde kalalım — sadece lafta değil.",
    },
    {
      id: "ex.arc.erasmus_amsterdam.10.2",
      type: "roleplay_chat",
      difficulty: 3,
      scenario_description:
        "Veda partisi, çatı katı. Annika yanına geldi, son şişe bira.",
      npc_role: "Annika (final goodbye, real talk)",
      setting: "ESN farewell party, rooftop, midnight, night before departure",
      turns: [
        {
          speaker: "npc",
          message:
            "So this is it. Tomorrow morning, just like that, you're gone.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yeah)(,)? (feels (unreal|surreal))",
            "(this semester (flew|disappeared))",
            "(i can'?t believe (it'?s over|tomorrow))",
            "(i'?m not ready)",
            "(don'?t make me think about it)",
          ],
          hint_tr:
            "Duygusal kabul: 'Feels surreal.' Türk: 'Yes' düz, hisset.",
        },
        {
          speaker: "npc",
          message:
            "We always say 'let's stay in touch' and then never do.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(not us|not this time)",
            "(let'?s (actually|really) stay in touch)",
            "(i mean it)",
            "(monthly calls|i'?ll text you (every|on) (sunday))",
            "(you'?re (not getting rid of|stuck with) me)",
          ],
          hint_tr:
            "Söz ver: 'You're stuck with me.' Türk: 'OK we keep talk' eksik, kararlı söz.",
        },
        {
          speaker: "npc",
          message:
            "Pinky promise?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(pinky promise)",
            "(absolutely)",
            "(deal)",
            "(no take(-| )?backs)",
            "(here)(,)? (locked in)",
          ],
          hint_tr:
            "Çocuksu samimi: 'Pinky promise.' Türk: 'Yes' düz, samimi gestür.",
        },
        {
          speaker: "npc",
          message:
            "What was the best moment?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(honestly|that'?s hard)",
            "(the (laundry day|bike crash|café conversations))",
            "(meeting you|getting to know you)",
            "(too many to (pick|choose))",
            "(maybe the (small|quiet) ones — not the parties)",
          ],
          hint_tr:
            "Anı seç: 'The café conversations.' Türk: 'I like everything' yetersiz, somut an seç.",
        },
        {
          speaker: "npc",
          message:
            "Come back. Soon. Not as a tourist — as a visitor.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i will|i promise)",
            "(spring|summer|next year)",
            "(i'?ll book (the ticket|something) soon)",
            "(only if you (host me|let me crash))",
            "(it'?s a (deal|date))",
          ],
          hint_tr:
            "Plan: 'I'll book the ticket soon.' Türk: 'Yes I come' düz, somut plan.",
        },
        {
          speaker: "npc",
          message:
            "And come visit Istanbul. We talked about it — make it happen.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(you better|you'?re on)",
            "(i'?ll send you the dates)",
            "(my (mom|family) will love you)",
            "(consider it (booked|happening))",
            "(can'?t wait to (show you|host you))",
          ],
          hint_tr:
            "Karşılıklı: 'My family will love you.' Türk: 'Yes come' düz, davet etrafını çiz.",
        },
        {
          speaker: "npc",
          message:
            "Okay. Last drink. To Amsterdam.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(to amsterdam)",
            "(to (us|new friendships|this semester))",
            "(to (more chapters|the next time))",
            "(cheers|proost)",
            "(i love you (guys|man))",
          ],
          hint_tr:
            "Kadeh kaldır: 'To us.' Türk: 'Cheers' yeter, 'proost' Hollandaca onurlandır.",
        },
      ],
    },
  ],
};

// ============================================================
// ARC 2 — JUNIOR DEV AT LONDON STARTUP (10 sahne)
// Recurring NPCs: Sarah (manager), Raj (senior dev), Emily (PM)
// ============================================================

export const juniorDevLondon01: BundledLesson = {
  id: "arc.junior_dev_london.1",
  skill_id: "arc.junior_dev_london",
  index: 1,
  title: "Sahne 1 — İlk gün: HR + manager Sarah ile setup",
  description:
    "Shoreditch ofisi, ilk gün. HR kart veriyor, sonra Sarah (yöneticin) seni karşılıyor.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.arc.junior_dev_london.1.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "I'm excited to be here",
      tr_translation: "Burada olmaktan heyecanlıyım",
      example: "Honestly, I'm excited to be here.",
      example_tr: "Açıkçası burada olmaktan heyecanlıyım.",
    },
    {
      id: "ex.arc.junior_dev_london.1.2",
      type: "roleplay_chat",
      difficulty: 2,
      scenario_description:
        "Ofis lobisi, sabah 9. Sarah (yöneticin) seni karşılıyor. Önce küçük sohbet.",
      npc_role: "Sarah (engineering manager, warm but professional)",
      setting: "Tech startup office in Shoreditch, first day, 9am",
      turns: [
        {
          speaker: "npc",
          message:
            "Welcome! How was the commute?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(not bad|surprisingly smooth)",
            "(the tube was|northern line was) (busy|packed|fine)",
            "(took (longer|less) than i expected)",
            "(i'?m still figuring out (the (lines|routes)))",
            "(thanks for (asking|the welcome))",
          ],
          hint_tr:
            "Küçük sohbet: 'Tube was packed but smooth.' Türk: 'OK' yetersiz, detay ekle.",
        },
        {
          speaker: "npc",
          message:
            "Good — Mondays can be brutal. So, how are you feeling? Nervous?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(honestly|to be honest)(,)? (a (bit|little) nervous)",
            "(excited and nervous|good kind of nerves)",
            "(more excited than nervous)",
            "(i'?m (mostly )?ready)",
            "(first(-| )?day jitters but)",
          ],
          hint_tr:
            "Dürüst: 'Honestly, a bit nervous but excited.' Türk: 'No I am OK' düz, dürüst.",
        },
        {
          speaker: "npc",
          message:
            "Totally normal. Don't worry — first two weeks are just onboarding. No pressure to ship anything.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(good to know|that helps)",
            "(thanks for (the framing|saying that))",
            "(what does (onboarding|the first week) look like)",
            "(any (specific|particular) goals)",
            "(i'?ll do my best)",
          ],
          hint_tr:
            "Soru: 'What does onboarding look like?' Türk: 'OK' düz, bilgi al.",
        },
        {
          speaker: "npc",
          message:
            "Week one: read the codebase, shadow Raj on pull requests. Week two: small first ticket. We'll see how it goes.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(sounds (good|reasonable|like a plan))",
            "(who'?s raj)(,)? (senior dev|the tech lead)",
            "(what stack (do you|are we) using)",
            "(any (docs|readmes) i should (start with|prioritize))",
            "(i'?ll (read|dig) into the codebase first)",
          ],
          hint_tr:
            "Plan onayı + soru: 'Any docs to prioritize?' Türk: 'OK' düz, sonra ne yapacağını sor.",
        },
        {
          speaker: "npc",
          message:
            "I'll send you a Notion link with everything. Raj will introduce himself at standup tomorrow.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(perfect|thanks)",
            "(looking forward to (standup|meeting (him|the team)))",
            "(let me know if i can (help|jump in) before then)",
            "(should i (book|set up) (1:1s|coffees))",
            "(when (does|do) standup (start|happen))",
          ],
          hint_tr:
            "Aktif: 'Should I set up 1:1s with the team?' Türk: 'OK I wait' eksik, inisiyatif göster.",
        },
        {
          speaker: "npc",
          message:
            "Standups are 10am daily. Let's get you set up — desk's right over here.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(lead the way|after you)",
            "(thanks (again|for everything))",
            "(excited to be here)",
            "(let'?s do it)",
          ],
          hint_tr:
            "Kapanış: 'Lead the way — excited to be here.' Türk: 'OK go' düz, enerji.",
        },
      ],
    },
  ],
};

export const juniorDevLondon02: BundledLesson = {
  id: "arc.junior_dev_london.2",
  skill_id: "arc.junior_dev_london",
  index: 2,
  title: "Sahne 2 — İlk standup: 'I'm onboarding'",
  description:
    "İlk daily standup. Slack huddle. Sıra sana — ne diyeceksin?",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.arc.junior_dev_london.2.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "to onboard",
      tr_translation: "Yeni işe alıştırma süreci",
      example: "I'm still onboarding — reading docs this week.",
      example_tr: "Hâlâ onboarding sürecindeyim — bu hafta dokümanları okuyorum.",
    },
    {
      id: "ex.arc.junior_dev_london.2.2",
      type: "roleplay_chat",
      difficulty: 3,
      scenario_description:
        "Slack huddle standup. 7 kişi. Raj round-robin başlattı. Sıra sende.",
      npc_role: "Raj (senior dev, running standup)",
      setting: "Daily standup, 10am, Slack huddle",
      turns: [
        {
          speaker: "npc",
          message:
            "Alright, last one — new starter. Quick intro then your update.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(hi everyone|hey team)",
            "(i'?m|my name'?s) [a-z]+",
            "(just joined (yesterday|monday))",
            "(joining (from|out of) (istanbul|turkey))",
            "(excited to (be here|work with you all))",
          ],
          hint_tr:
            "Tanıtım: 'Hi, I'm Burak, joining from Istanbul.' Türk: uzun monolog değil, 2-3 cümle.",
        },
        {
          speaker: "npc",
          message:
            "Welcome aboard. What did you do yesterday?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i (got|did) (the )?onboarding (set ?up|paperwork))",
            "(started reading (the )?(codebase|docs))",
            "(set up my (machine|dev environment))",
            "(read through (the readme|the architecture doc))",
            "(mostly setup yesterday)",
          ],
          hint_tr:
            "Format: 'Yesterday I + verb.' Türk: 'I did setup' eksik, fiil + nesne.",
        },
        {
          speaker: "npc",
          message:
            "Cool. What's the plan for today?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(today i'?ll (continue|keep) (reading|onboarding))",
            "(planning to (shadow|sit with) raj on (a pr|reviews))",
            "(want to (get|finish) the (auth|payments) module overview)",
            "(also (booking|setting up) (1:1s|coffees))",
            "(reading the (api|backend) docs)",
          ],
          hint_tr:
            "Plan: 'Today I'll shadow Raj on a PR.' Türk: 'I will read' yetersiz, somut + isim.",
        },
        {
          speaker: "npc",
          message:
            "Any blockers?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(no blockers|nothing blocking me)",
            "(none from my end)",
            "(actually |yes )?(my (vpn|github) access (isn'?t|still not) working)",
            "(could someone (help|pair) on the (vpn|environment))",
            "(no blockers yet)",
          ],
          hint_tr:
            "Engel rapor: 'My VPN access still isn't working.' Türk: 'I have problem' eksik, somut + kim yardım edebilir.",
        },
        {
          speaker: "npc",
          message:
            "Raj here — ping me after this, I'll fix the VPN thing. Anything else?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks|appreciate it)",
            "(that'?s it from me)",
            "(no)(,)? (i'?m good)",
            "(over to (the next|whoever)|back to you)",
            "(thanks raj)",
          ],
          hint_tr:
            "Kapanış: 'That's it from me.' Türk: 'OK no' düz, takıma bırak.",
        },
      ],
    },
  ],
};

export const juniorDevLondon03: BundledLesson = {
  id: "arc.junior_dev_london.3",
  skill_id: "arc.junior_dev_london",
  index: 3,
  title: "Sahne 3 — Raj ile pair programming: takıldın",
  description:
    "Raj ile screen-share, ilk ticket'ı çözmeye çalışıyorsun. Anlamadığını söyle.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.arc.junior_dev_london.3.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "I'm stuck on",
      tr_translation: "Şurada takıldım",
      example: "I'm stuck on the authentication flow.",
      example_tr: "Auth akışında takıldım.",
    },
    {
      id: "ex.arc.junior_dev_london.3.2",
      type: "roleplay_chat",
      difficulty: 3,
      scenario_description:
        "Pair programming. Raj sabırlı ama yoğun. Takılı olduğunu söyle — net.",
      npc_role: "Raj (senior dev, patient mentor)",
      setting: "Pair programming session, screen share, afternoon",
      turns: [
        {
          speaker: "npc",
          message:
            "Alright, you've been quiet. What's going on?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(honestly|to be honest)(,)? (i'?m (stuck|lost))",
            "(i'?m (not (following|getting it)|losing the thread))",
            "(can we (slow down|rewind))",
            "(could you (explain|walk through) (the (auth|token|flow)) (again|once more))",
            "(i don'?t understand why we (need|do))",
          ],
          hint_tr:
            "Dürüst: 'I'm stuck on the auth flow.' Türk: 'I don't know' kapalı, 'stuck on X' net.",
        },
        {
          speaker: "npc",
          message:
            "No worries — auth's confusing. What specifically?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i (don'?t see|can'?t (figure|tell)) (why|how) the (token|cookie) is)",
            "(where does (the request|the redirect) come from)",
            "(why do we (need|use) (two|both) tokens)",
            "(can we (trace|follow) one request end(-| )?to(-| )?end)",
            "(i (lost|missed) you at (the refresh|the middleware))",
          ],
          hint_tr:
            "Spesifik: 'Why do we need both tokens?' Türk: 'I don't understand' kapalı, nokta soru.",
        },
        {
          speaker: "npc",
          message:
            "Good question. Refresh token is for long-lived sessions, access is short. Make sense?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(that helps|that clicks)",
            "(so the (refresh|long-lived one) is (only used|just for))",
            "(let me make sure i (got|follow))",
            "(can i (try|repeat) that back)",
            "(half (way|there))",
          ],
          hint_tr:
            "Anladığını test et: 'Can I repeat that back?' Türk: 'OK' yetersiz, kendi cümlenle özetle.",
        },
        {
          speaker: "npc",
          message:
            "Go for it.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(so we (send|store) the refresh on (the cookie|server side))",
            "(access token (lives|stays) in memory for (15|five) minutes)",
            "(when it (expires|times out)) (we (hit|call) the refresh endpoint)",
            "(and the server (returns|issues) a new access)",
            "(does that (sound right|track))",
          ],
          hint_tr:
            "Geri ver: 'So we send refresh on cookie...' Türk: kendi cümlenle = anladım demektir.",
        },
        {
          speaker: "npc",
          message:
            "Spot on. You got it.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks (for the patience|raj))",
            "(that (clicked|makes way more sense))",
            "(can i (try|take a stab at) the (next bit|implementation))",
            "(appreciate (the walkthrough|you slowing down))",
            "(noted|keeping the diagram you drew)",
          ],
          hint_tr:
            "Minnet: 'Thanks for the patience.' Türk: 'OK thanks' düz, samimi.",
        },
      ],
    },
  ],
};

export const juniorDevLondon04: BundledLesson = {
  id: "arc.junior_dev_london.4",
  skill_id: "arc.junior_dev_london",
  index: 4,
  title: "Sahne 4 — İlk code review: eleştiriyi nasıl kabul edersin",
  description:
    "İlk PR açtın. Raj 12 yorum bıraktı. Bazıları sert. Kabul et + tartış.",
  estimated_minutes: 6,
  exercises: [
    {
      id: "ex.arc.junior_dev_london.4.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "Good catch",
      tr_translation: "İyi yakaladın (kod review)",
      example: "Good catch — I'll fix it.",
      example_tr: "İyi yakaladın — düzelteceğim.",
    },
    {
      id: "ex.arc.junior_dev_london.4.2",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "PR yorumlarını birlikte gözden geçiriyorsunuz. Raj ekran paylaşıyor.",
      npc_role: "Raj (reviewing your first PR)",
      setting: "Code review session, screen share, GitHub PR open",
      turns: [
        {
          speaker: "npc",
          message:
            "First thing — this nested if. We could flatten it with early returns. Thoughts?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(good (call|point|catch))",
            "(yeah|you'?re right)(,)? (much cleaner)",
            "(i'?ll (refactor|flatten) (it|that))",
            "(makes sense|i can see that)",
            "(let me (push|update) (it|that change))",
          ],
          hint_tr:
            "Kabul: 'Good call — I'll flatten it.' Türk: 'OK' düz, terim + aksiyon.",
        },
        {
          speaker: "npc",
          message:
            "Second — naming. 'data' and 'result' don't tell me anything. Rename.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(fair|absolutely|guilty)",
            "(any (preference|naming convention))",
            "(i'?ll (rename to|switch to)) (userprofile|fetched user))",
            "(noted)(,)? (i tend to default to (data|result))",
            "(will (clean|tighten) (it|the names))",
          ],
          hint_tr:
            "'Guilty' = suçluyum (samimi/eğlenceli). Türk: 'OK' düz, sorumluluk göster.",
        },
        {
          speaker: "npc",
          message:
            "Third — bigger one. Why are you catching the error and swallowing it?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(honestly|to be honest)(,)? (i wasn'?t sure (what|how) to (handle|return))",
            "(let me push back (a (little|bit)|gently))",
            "(my (thinking|intent) was to (prevent|guard against))",
            "(i (took the lazy|did the wrong) path there)",
            "(what would (you prefer|the convention be))",
          ],
          hint_tr:
            "Defens + dürüst: 'Honestly, I wasn't sure how to handle it.' Türk: 'I am sorry' düz, motivasyon + soru.",
        },
        {
          speaker: "npc",
          message:
            "Throw it up. Let the caller decide. Silent failures kill on-call.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(got it|understood)",
            "(makes sense|that lands)",
            "(noted — (rethrow|propagate) up)",
            "(i'?ll add (logging|context) before re(-| )?throwing)",
            "(any (specific|standard) error class)",
          ],
          hint_tr:
            "Öğrenme: 'Silent failures kill on-call.' = anladım. Türk: 'OK' düz, ilkesini içselleştir.",
        },
        {
          speaker: "npc",
          message:
            "Solid. Last comment — overall this is a strong first PR.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks (so much|raj))",
            "(appreciate (the feedback|the time))",
            "(i'?ll (push|address) the (changes|comments)) (tonight|today)",
            "(let me know once you (re(-| )?review|look again))",
            "(this (helped|sharpened) (a lot|my approach))",
          ],
          hint_tr:
            "Minnet + aksiyon: 'I'll push the changes today.' Türk: 'OK thanks' düz, ne yapacağını söyle.",
        },
      ],
    },
  ],
};

export const juniorDevLondon05: BundledLesson = {
  id: "arc.junior_dev_london.5",
  skill_id: "arc.junior_dev_london",
  index: 5,
  title: "Sahne 5 — Takımla öğle yemeği: küçük sohbet pratiği",
  description:
    "Ekipten 4 kişiyle pub'a öğle yemeğine. Konu iş değil. İletişim kurma.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.arc.junior_dev_london.5.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "What do you usually do for fun?",
      tr_translation: "Boş zamanında ne yaparsın?",
      example: "What do you usually do for fun outside work?",
      example_tr: "İş dışında boş zamanın ne yaparsın?",
    },
    {
      id: "ex.arc.junior_dev_london.5.2",
      type: "roleplay_chat",
      difficulty: 3,
      scenario_description:
        "Ofis yakını pub, Emily (PM), Raj, Sarah ve sen. Yemek söyledin. Sohbet.",
      npc_role: "Emily (PM, friendly, asks lots of questions)",
      setting: "Pub lunch near the Shoreditch office, Wednesday 1pm",
      turns: [
        {
          speaker: "npc",
          message:
            "So — Istanbul. I've never been. Tell me one thing I'd love about it.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(one thing)(,)? (that'?s hard)",
            "(probably|honestly|i'?d say) (the food|the bosphorus)",
            "(the chaos has (a charm|character))",
            "(everyone (treats you like family|will feed you))",
            "(you have to (cross the bosphorus|see both sides))",
          ],
          hint_tr:
            "Spesifik: 'You have to cross the Bosphorus.' Türk: 'It is beautiful' düz, tek somut.",
        },
        {
          speaker: "npc",
          message:
            "Sold. Adding to the list. Anyway — what do you usually do for fun?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i'?m (into|big on)) (gaming|football|reading|climbing|cycling)",
            "(honestly )?(too much (gaming|netflix))",
            "(i (started|got into) (climbing|running) recently)",
            "(weekend (hikes|walks|park))",
            "(what about you)",
          ],
          hint_tr:
            "Hobi + soru iade: 'I got into climbing recently — you?' Türk: cevap ver + soru iade.",
        },
        {
          speaker: "npc",
          message:
            "Climbing? There's a great gym in Hackney. Have you been?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(no)(,)? (haven'?t (yet|made it))",
            "(been meaning to (check it out|go))",
            "(any (other|good) ones)",
            "(do you (climb (regularly|often))|are you a climber))",
            "(send me the (name|link))",
          ],
          hint_tr:
            "Soru: 'Send me the link.' Türk: 'OK' düz, davet kabul = ilişki kur.",
        },
        {
          speaker: "npc",
          message:
            "I'll drop it in Slack. Want to come Saturday?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yeah|sure|i'?d love to)",
            "(what time)",
            "(count me in)",
            "(let me check (with|my flatmate))",
            "(only if you don'?t mind a (beginner|noob))",
          ],
          hint_tr:
            "Davet kabul: 'Count me in.' Türk: 'OK' düz, kararlı + sıcak.",
        },
        {
          speaker: "npc",
          message:
            "Beginners are the best — less ego.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(haha|ego (in check|left at home))",
            "(challenge accepted)",
            "(i'?ll (bring my shoes|rent shoes))",
            "(see you (saturday|then))",
            "(looking forward to it)",
          ],
          hint_tr:
            "Hafif şaka: 'Ego left at home.' Türk: 'OK' düz, oyunlu cevap.",
        },
      ],
    },
  ],
};

export const juniorDevLondon06: BundledLesson = {
  id: "arc.junior_dev_london.6",
  skill_id: "arc.junior_dev_london",
  index: 6,
  title: "Sahne 6 — Sprint retrospektif: bir şey yanlış gitti",
  description:
    "Sprint retro. Senin task'ın gecikti. Sebebini dürüst söyle, çözüm öner.",
  estimated_minutes: 6,
  exercises: [
    {
      id: "ex.arc.junior_dev_london.6.1",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "I underestimated the scope",
      tr_translation: "Kapsamı küçümsedim",
      example: "I underestimated the scope — that was on me.",
      example_tr: "Kapsamı küçümsedim — benim hatamdı.",
    },
    {
      id: "ex.arc.junior_dev_london.6.2",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Retro toplantısı. 'What went wrong?' sırası sana geldi. Defansif olma.",
      npc_role: "Sarah (manager, running retro)",
      setting: "Sprint retrospective, Friday afternoon, hybrid (3 remote)",
      turns: [
        {
          speaker: "npc",
          message:
            "Alright — your turn. The auth ticket slipped. What happened?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yeah|honestly)(,)? (i (underestimated|misjudged) the scope)",
            "(that one is on me)",
            "(i (thought|figured) it was straightforward (until|but))",
            "(the (edge cases|legacy code) blew it up)",
            "(i should'?ve (flagged|raised) it earlier)",
          ],
          hint_tr:
            "Sorumluluk: 'That one is on me — I underestimated scope.' Türk: 'It was hard' bahane, 'on me' olgun.",
        },
        {
          speaker: "npc",
          message:
            "When did you know it was going to slip?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(probably (wednesday|two days in))",
            "(honestly|in hindsight)(,)? (sooner than i (said|admitted))",
            "(i kept thinking i could (push through|catch up))",
            "(the (real|first) signal was (the (database|migration) issue))",
            "(should have raised it (on day three|in the standup))",
          ],
          hint_tr:
            "Dürüst zaman: 'In hindsight, sooner than I admitted.' Türk: 'I didn't know' eksik, 'in hindsight' özeleştiri.",
        },
        {
          speaker: "npc",
          message:
            "Okay — what'll you do differently next sprint?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(raise (the flag|risk) (sooner|the moment i'?m unsure))",
            "(break (the ticket|scope) into smaller (chunks|sub-tickets))",
            "(daily (check-in|gut(-| )?check) on (timing|estimate))",
            "(ask for (a sanity check|input) (early|on day one))",
            "(no more (silent struggling|heroics))",
          ],
          hint_tr:
            "Aksiyon: 'No more silent struggling.' Türk: 'I will try' eksik, somut davranış.",
        },
        {
          speaker: "npc",
          message:
            "Great answer. And from us — was there anything blocking you we should've caught?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(honestly|maybe)(,)? (the (legacy|old) code (lacked|had no) docs)",
            "(it would'?ve (helped|been faster) if (raj|someone) (paired|sat with me))",
            "(estimating with (more context|the legacy code in mind))",
            "(no)(,)? (the team was great)",
            "(maybe (more upfront context|earlier reviews))",
          ],
          hint_tr:
            "Dürüst feedback: 'The legacy code lacked docs.' Türk: 'No nothing' kapalı, takıma da öneri.",
        },
        {
          speaker: "npc",
          message:
            "Noted. That's a real fix on our side. Thanks for being honest.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks|appreciate (it|that))",
            "(thanks for (the space|asking))",
            "(i (learned|got) a lot)",
            "(see you (in monday|next sprint))",
            "(let'?s (close|wrap) this sprint and (start fresh|reset))",
          ],
          hint_tr:
            "Kapanış: 'Thanks for the space.' Türk: 'OK' düz, retro değerini onurla.",
        },
      ],
    },
  ],
};

export const juniorDevLondon07: BundledLesson = {
  id: "arc.junior_dev_london.7",
  skill_id: "arc.junior_dev_london",
  index: 7,
  title: "Sahne 7 — Slack DM krizi: production down",
  description:
    "Cuma 4pm. Slack mesajı: 'production down — can you help?' Panikleme, yapılı tepki.",
  estimated_minutes: 6,
  exercises: [
    {
      id: "ex.arc.junior_dev_london.7.1",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "I'm on it",
      tr_translation: "Üzerinde çalışıyorum (acil)",
      example: "I'm on it — checking logs now.",
      example_tr: "Üzerinde çalışıyorum — şu an loglara bakıyorum.",
    },
    {
      id: "ex.arc.junior_dev_london.7.2",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Slack incident channel. Sarah ping atmış. Raj telefonda. Sen hızlı + net cevap ver.",
      npc_role: "Raj (on-call lead, calm but urgent)",
      setting: "Production incident, Friday 4pm, Slack incident channel + voice",
      turns: [
        {
          speaker: "npc",
          message:
            "Hey — you with us? Need eyes on the auth service. 500s spiking.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i'?m on it)",
            "(here|with you|standing by)",
            "(checking (logs|grafana) now)",
            "(give me (two|sixty) (seconds|min))",
            "(what (have you|do we) (seen|tried) so far)",
          ],
          hint_tr:
            "İlk: 'I'm on it.' Türk: 'OK I look' eksik, kalıp ifade güven verir.",
        },
        {
          speaker: "npc",
          message:
            "Errors started 15 minutes ago. Database connection refused.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(could be (the |a )?(deploy|migration) (we ran|earlier))",
            "(any (recent|fresh) deploys)",
            "(is the db (responsive|up) directly)",
            "(let me (rule out|check) (network|dns))",
            "(rolling back is (an option|on the table))",
          ],
          hint_tr:
            "Hipotez + soru: 'Could be the deploy — any recent deploys?' Türk: 'I don't know' eksik, teori öner.",
        },
        {
          speaker: "npc",
          message:
            "We deployed 30 min ago. Roll back?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|let'?s)(,)? (roll (it )?back)",
            "(roll back first|stop the bleeding (first|now))",
            "(can (i|you) (kick|trigger) the rollback)",
            "(while we (debug|investigate) (the cause)?)",
            "(any objections|anyone disagree)",
          ],
          hint_tr:
            "Karar: 'Roll back first — stop the bleeding.' Türk: 'Maybe' eksik, kararlı.",
        },
        {
          speaker: "npc",
          message:
            "Triggering rollback. 90 seconds. Stay on it.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(watching grafana)",
            "(refreshing the (dashboard|graph))",
            "(monitoring (error rate|p99))",
            "(call out (the moment|when) (it recovers|errors drop))",
            "(on (the channel|standby))",
          ],
          hint_tr:
            "Aktif: 'Watching Grafana.' Türk: 'OK wait' eksik, ne izlediğini söyle.",
        },
        {
          speaker: "npc",
          message:
            "Rollback done. Errors dropping. We good?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(errors (back to baseline|down))",
            "(we'?re (out of|clear of) (the woods|the fire))",
            "(p99 (recovering|back under))",
            "(let'?s (write|start) the (postmortem|incident doc))",
            "(i'?ll (open|start) the (incident doc|writeup))",
          ],
          hint_tr:
            "Onay: 'Errors back to baseline.' Türk: 'OK good' eksik, ölçüm bazlı.",
        },
        {
          speaker: "npc",
          message:
            "Solid. First incident. You held up.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks (raj|for the calm|for walking through))",
            "(learned a lot)",
            "(adrenaline (still going|crashing))",
            "(can'?t lie)(,)? (heart rate was high)",
            "(i'?ll (start|own) the postmortem)",
          ],
          hint_tr:
            "Dürüst: 'Heart rate was high.' Türk: 'OK' düz, insan ol.",
        },
      ],
    },
  ],
};

export const juniorDevLondon08: BundledLesson = {
  id: "arc.junior_dev_london.8",
  skill_id: "arc.junior_dev_london",
  index: 8,
  title: "Sahne 8 — Sarah ile 1:1: ilk 90 günün özeti",
  description:
    "İlk 1:1 90-day review. Sarah ne öğrendin, ne istiyorsun diye soruyor.",
  estimated_minutes: 6,
  exercises: [
    {
      id: "ex.arc.junior_dev_london.8.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "I'd like to grow into",
      tr_translation: "Şuna doğru gelişmek istiyorum",
      example: "I'd like to grow into a mid-level role.",
      example_tr: "Mid-level pozisyonuna doğru gelişmek istiyorum.",
    },
    {
      id: "ex.arc.junior_dev_london.8.2",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Sarah ile huddle. 1:1, 30 dk. Açık, hazır cevap ver.",
      npc_role: "Sarah (manager, 90-day check-in)",
      setting: "Manager 1:1, conference room, after 90 days",
      turns: [
        {
          speaker: "npc",
          message:
            "So — 90 days. How is this going for you, really?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(honestly|to be honest)(,)? (really well|better than expected)",
            "(i feel (more confident|like i belong))",
            "(the (incident|production) really (tested|stretched) me)",
            "(some hard moments|the auth ticket was tough)",
            "(can'?t complain — (loving it|in a good place))",
          ],
          hint_tr:
            "Dürüst: 'Better than expected — incident stretched me.' Türk: 'Good' yetersiz, somut.",
        },
        {
          speaker: "npc",
          message:
            "What's been the hardest part?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(the (codebase|legacy code) (curve|complexity))",
            "(saying (i don'?t know|i'?m stuck))",
            "(navigating reviews early on)",
            "(language(-| )?wise)(,)? (some idioms still throw me)",
            "(speaking up in (meetings|standup))",
          ],
          hint_tr:
            "Spesifik: 'Saying I'm stuck.' Türk: 'Everything hard' kapalı, bir şey seç.",
        },
        {
          speaker: "npc",
          message:
            "Anything you wish you'd done differently?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(probably |i wish )?(asked for help (sooner|faster))",
            "(been less afraid (to (sound stupid|ask))",
            "(set up 1:1s (earlier|sooner))",
            "(asked more (questions|clarifying) in (sprint planning))",
            "(been (more vocal|louder) in retros)",
          ],
          hint_tr:
            "Özeleştiri: 'Asked for help sooner.' Türk: 'Nothing' kapalı, bir şey seç.",
        },
        {
          speaker: "npc",
          message:
            "Got it. What about growth — where do you want to be in a year?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i'?d like to grow into (mid(-| )?level|owning features))",
            "(more (system design|architecture) exposure)",
            "(less hand(-| )?holding)(,)? (more (autonomy|ownership))",
            "(maybe (mentoring|onboarding) the next junior)",
            "(better at (estimating|breaking down) (scope|tickets))",
          ],
          hint_tr:
            "Hedef: 'Grow into mid-level — owning features.' Türk: 'I want promote' eksik, yetenek + sorumluluk.",
        },
        {
          speaker: "npc",
          message:
            "That's exactly the right framing. Let me put a plan around that.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks|appreciate (it|that))",
            "(would (it )?(make sense|help) to (define|write down) (concrete (milestones|goals)))",
            "(any (areas|skills) you'?d (push|stretch) me on)",
            "(let'?s (sync|book) (monthly|biweekly))",
            "(thanks for (the support|believing in me))",
          ],
          hint_tr:
            "Aktif: 'Would it help to define concrete milestones?' Türk: 'OK thanks' düz, ortak plan iste.",
        },
      ],
    },
  ],
};

export const juniorDevLondon09: BundledLesson = {
  id: "arc.junior_dev_london.9",
  skill_id: "arc.junior_dev_london",
  index: 9,
  title: "Sahne 9 — Maaş zammı isteme: 'about my compensation'",
  description:
    "9 ayda büyük teslimat yaptın. Sarah ile maaş konuşması — nasıl açarsın?",
  estimated_minutes: 7,
  exercises: [
    {
      id: "ex.arc.junior_dev_london.9.1",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "I'd like to revisit my compensation",
      tr_translation: "Maaşımı yeniden ele almak istiyorum",
      example: "I'd like to revisit my compensation given my growth.",
      example_tr: "Gelişimimi göz önünde tutarak maaşımı yeniden ele almak istiyorum.",
    },
    {
      id: "ex.arc.junior_dev_london.9.2",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Sarah ile özel toplantı, ajandayı sen koydun. Net açıl — defansif olma.",
      npc_role: "Sarah (manager, salary conversation)",
      setting: "Private 1:1 booked for compensation discussion, 9 months in",
      turns: [
        {
          speaker: "npc",
          message:
            "You booked this — what's on your mind?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks for (the time|making time))",
            "(i'?d like to (revisit|discuss) (my )?compensation)",
            "(i wanted to (talk|open a conversation) about (pay|salary))",
            "(based on (the last|nine months) (of growth|delivery))",
            "(i think it'?s (the right time|worth (a look|reviewing)))",
          ],
          hint_tr:
            "Net giriş: 'I'd like to revisit my compensation.' Türk: 'I want more money' direkt, kalıp ifade kibar.",
        },
        {
          speaker: "npc",
          message:
            "Okay — make the case.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(in the last (nine|six) months i'?ve)",
            "(owned (the auth migration|the incident response))",
            "(shipped (the payments|the v2) (refactor|feature))",
            "(the market for (junior|engineers) my level is)",
            "(in london (the going rate|comparable roles))",
          ],
          hint_tr:
            "Kanıt: 'Owned the auth migration, shipped payments.' Türk: 'I work hard' belirsiz, somut.",
        },
        {
          speaker: "npc",
          message:
            "Do you have a specific number in mind?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|i do)",
            "(based on (data|research))(,)? (i'?d like to (move to|land at))",
            "(a (12|15)(-| )?(percent|%) increase|something in the (55|60)k range)",
            "(happy to (share|walk through) the research)",
            "(i looked at (levels|glassdoor|comparables))",
          ],
          hint_tr:
            "Rakam: 'I'd like to land at 55k.' Türk: 'I want more' belirsiz, sayı + veri.",
        },
        {
          speaker: "npc",
          message:
            "That's at the top of band. We typically wait for the annual cycle.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i hear (you|that))",
            "(i'?d push back (gently|respectfully))",
            "(the (scope|impact) i'?ve (taken on|delivered) (warrants|justifies))",
            "(could we (revisit|land at) a (midpoint|number) (now|today))",
            "(is there room (to bring (this|it) forward|to make an exception))",
          ],
          hint_tr:
            "Push back: 'I'd push back gently.' Türk: 'OK wait' kabul, dengeli karşıt argüman.",
        },
        {
          speaker: "npc",
          message:
            "Let me take this to leadership. I'll come back to you within two weeks.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thank you (for taking it seriously))",
            "(appreciate (that|the push))",
            "(two weeks works (for me)?)",
            "(should i (send|share) the (research|data) (in writing))",
            "(thanks for (hearing me out|the support))",
          ],
          hint_tr:
            "Onay: 'Appreciate the push.' Türk: 'OK' düz, partner gör.",
        },
      ],
    },
  ],
};

export const juniorDevLondon10: BundledLesson = {
  id: "arc.junior_dev_london.10",
  skill_id: "arc.junior_dev_london",
  index: 10,
  title: "Sahne 10 — Mid-level promo onayı: kutlama",
  description:
    "Sarah haberi verdi: promosyon + zam onaylandı. Reaksiyon + sonraki adımlar.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.arc.junior_dev_london.10.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "I'm thrilled",
      tr_translation: "Çok mutluyum",
      example: "Thank you — I'm thrilled.",
      example_tr: "Teşekkürler — çok mutluyum.",
    },
    {
      id: "ex.arc.junior_dev_london.10.2",
      type: "roleplay_chat",
      difficulty: 3,
      scenario_description:
        "Sarah ile 1:1. Haberi verdi — promo onaylandı. Reaksiyonun.",
      npc_role: "Sarah (delivering promo news)",
      setting: "Manager 1:1, good news delivery",
      turns: [
        {
          speaker: "npc",
          message:
            "Leadership approved. Mid-level. Effective next month.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thank you (so much|sarah))",
            "(i'?m (thrilled|over the moon|delighted))",
            "(this (means|matters) a lot)",
            "(wow|that'?s amazing)",
            "(i appreciate (everything|the fight))",
          ],
          hint_tr:
            "Reaksiyon: 'I'm thrilled.' Türk: 'OK thanks' eksik, samimi sevinç.",
        },
        {
          speaker: "npc",
          message:
            "You earned it. The case was strong. Salary bump too.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thank you|appreciate that)",
            "(could you (share|send) the (numbers|breakdown))",
            "(what does the (new|updated) (band|role) look like)",
            "(any (new|added) (responsibilities|expectations))",
            "(i won'?t let you down)",
          ],
          hint_tr:
            "Detay sor: 'What does the new role look like?' Türk: 'OK' düz, ne değişeceğini sor.",
        },
        {
          speaker: "npc",
          message:
            "Bigger ownership — feature lead on the new payments module.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(that'?s (perfect|exactly what i wanted))",
            "(i'?ve been wanting that)",
            "(when do (i|we) (start|kick off))",
            "(is (raj|anyone) (on|with) me)",
            "(can'?t wait)",
          ],
          hint_tr:
            "Heyecan: 'Exactly what I wanted.' Türk: 'OK' düz, hedefle eşleşme.",
        },
        {
          speaker: "npc",
          message:
            "One more thing — you'll be mentoring our next junior.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(oh wow|i'?d love that)",
            "(any (tips|advice) (going in|on day one))",
            "(remember how (raj|you) (handled|guided) me)",
            "(i'?ll (channel|pay forward) what raj did)",
            "(this (closes a loop|feels full circle))",
          ],
          hint_tr:
            "Tam çember: 'Pay forward what Raj did.' Türk: 'OK I help' düz, döngü kapanışı.",
        },
        {
          speaker: "npc",
          message:
            "Exactly. Welcome to the next chapter.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thank you (sarah|for everything))",
            "(this (year|journey) has been (real|something))",
            "(let'?s (go|do this))",
            "(see you at standup)",
            "(time to (call my (mom|family)|tell the team))",
          ],
          hint_tr:
            "Kapanış: 'Time to call my mom!' Türk: 'OK' düz, samimi sonra.",
        },
      ],
    },
  ],
};

// ============================================================
// ARC 3 — NY TECH CONFERENCE (8 sahne)
// Recurring NPC: Alex (you exchange info with at hallway track)
// ============================================================

export const nyTechConf01: BundledLesson = {
  id: "arc.ny_tech_conf.1",
  skill_id: "arc.ny_tech_conf",
  index: 1,
  title: "Sahne 1 — Konferans kaydı: badge + welcome bag",
  description:
    "Javits Center, registration desk. Sıra. İsim, şirket, badge.",
  estimated_minutes: 4,
  exercises: [
    {
      id: "ex.arc.ny_tech_conf.1.1",
      type: "vocab_tile",
      difficulty: 1,
      word_or_phrase: "I'm here for the conference",
      tr_translation: "Konferans için geldim",
      example: "Hi, I'm here for the conference — pre-registered.",
      example_tr: "Merhaba, konferans için geldim — önceden kayıt oldum.",
    },
    {
      id: "ex.arc.ny_tech_conf.1.2",
      type: "roleplay_chat",
      difficulty: 2,
      scenario_description:
        "Javits Center, registration. Hızlı işlem — net cevap ver.",
      npc_role: "Conference registration staff",
      setting: "Javits Center, conference registration desk, morning",
      turns: [
        {
          speaker: "npc",
          message:
            "Hi! Pre-registered?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|yeah)(,)? (pre(-| )?registered)",
            "(under the name )?[a-z]+",
            "(i (have|got) my (qr|confirmation) (email|code))",
            "(here'?s the code)",
            "(checked in online)",
          ],
          hint_tr:
            "Hızlı: 'Yes, pre-registered.' Türk: 'I registered' eksik, kısa onay.",
        },
        {
          speaker: "npc",
          message:
            "Last name?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "([a-z]+)",
            "(it'?s )?[a-z]+",
            "(let me spell it)",
            "([a-z]+)(,)? (here'?s )?(the email|qr)",
          ],
          hint_tr:
            "Sade: '[Last name].' Türk: 'My last name is...' uzun, tek kelime.",
        },
        {
          speaker: "npc",
          message:
            "Got you. Company name on the badge — looks correct?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yep|looks good|correct)",
            "(actually )?(could you (fix|update)) (it|the spelling))",
            "(no)(,)? (it should be)",
            "(can we (change|edit) it to)",
            "(perfect|all good)",
          ],
          hint_tr:
            "Onay/düzelt: 'Could you fix the spelling?' Türk: 'Yes' veya somut düzeltme.",
        },
        {
          speaker: "npc",
          message:
            "Here's your bag and lanyard. Wifi password is in the program.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks|appreciate it)",
            "(where (does|do)) (the keynote|registration coffee) (start|happen)",
            "(any (recommended|must(-| )?see) tracks)",
            "(thanks )?(have a (good|nice) (day|one))",
            "(see you (around|inside))",
          ],
          hint_tr:
            "Bonus soru: 'Any must-see tracks?' Türk: 'Thanks' düz, ek bilgi al.",
        },
        {
          speaker: "npc",
          message:
            "Keynote at 10. Room 1A. Enjoy!",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks)",
            "(room 1a)(,)? (got it)",
            "(see you (around|there))",
            "(appreciate it)",
          ],
          hint_tr:
            "Kapanış: 'Room 1A — got it.' Türk: 'OK' düz, tekrar et = aklında kalır.",
        },
      ],
    },
  ],
};

export const nyTechConf02: BundledLesson = {
  id: "arc.ny_tech_conf.2",
  skill_id: "arc.ny_tech_conf",
  index: 2,
  title: "Sahne 2 — Networking break: 'what brings you here?'",
  description:
    "Coffee break. Tanımadığın biriyle sohbet aç. Klişe sorulara cevap.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.arc.ny_tech_conf.2.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "What brings you here?",
      tr_translation: "Buraya geliş sebebin nedir?",
      example: "What brings you to the conference?",
      example_tr: "Bu konferansa katılma sebebin nedir?",
    },
    {
      id: "ex.arc.ny_tech_conf.2.2",
      type: "roleplay_chat",
      difficulty: 3,
      scenario_description:
        "Coffee station. Senin yanındaki kişi kahve dolduruyor — aç sohbeti.",
      npc_role: "Random conference attendee",
      setting: "Conference coffee break, between sessions",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(busy line|tough crowd this morning)",
            "(any luck with the (coffee|sessions))",
            "(first time at this conference)",
            "(what (brings|brought) you here)",
            "(quick (question|one))",
          ],
          hint_tr:
            "Buz kırma: 'Busy line, huh?' Türk: 'Hello' eksik, durum yorumu.",
        },
        {
          speaker: "npc",
          message:
            "Tell me about it — third coffee. I'm Daniel, by the way. From Toronto.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(hey|hi)(,)? (i'?m|my name'?s) [a-z]+",
            "(nice to meet you)(,)? daniel",
            "(toronto|cool)",
            "(i'?m here from (istanbul|turkey))",
            "(any luck with the city so far)",
          ],
          hint_tr:
            "Karşı tanıt: 'Hi, I'm Burak — from Istanbul.' Türk: kısa + şehir.",
        },
        {
          speaker: "npc",
          message:
            "Istanbul, nice. What brought you all the way here?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(my company sent me|i convinced my boss)",
            "(i'?m (looking to|hoping to)) (learn|connect|meet))",
            "(speaking on (a panel|the dev track))",
            "(checking out (the keynote|the ai sessions))",
            "(scoping (clients|tools))",
          ],
          hint_tr:
            "Net amaç: 'I convinced my boss — I'm looking to learn about X.' Türk: 'I came to learn' eksik, somut amaç.",
        },
        {
          speaker: "npc",
          message:
            "Same boat. What do you do back home?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i'?m a (developer|engineer|pm|designer|founder))",
            "(i work (at|for) (a fintech|a startup|enterprise))",
            "(building (b2b|developer tools|ai products))",
            "(part of the (data|platform|frontend) team)",
            "(what about you)",
          ],
          hint_tr:
            "Format + iade: 'I'm an engineer at a fintech — you?' Türk: cevap + soru iade.",
        },
        {
          speaker: "npc",
          message:
            "I lead engineering at a logistics startup. Always looking for talent.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(remote(-| )?friendly)",
            "(hiring (junior|senior) engineers)",
            "(let'?s (swap|exchange) (contacts|cards|linkedins))",
            "(my (deck|team) might be interested)",
            "(send me your (linkedin|card))",
          ],
          hint_tr:
            "Fırsat yakala: 'Let's exchange LinkedIns.' Türk: 'OK nice' eksik, fırsatı somutlaştır.",
        },
        {
          speaker: "npc",
          message:
            "Yeah, let's do that.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(scanning your (badge|qr) now)",
            "(let me (send|drop) you a (linkedin|message))",
            "(here'?s (mine|my qr))",
            "(catch you (later|at the next session))",
            "(enjoy the rest)",
          ],
          hint_tr:
            "Kapanış pratik: 'Catch you at the next session.' Türk: 'OK bye' düz, devam vaadi.",
        },
      ],
    },
  ],
};

export const nyTechConf03: BundledLesson = {
  id: "arc.ny_tech_conf.3",
  skill_id: "arc.ny_tech_conf",
  index: 3,
  title: "Sahne 3 — Q&A: sahnedeki konuşmacıya soru sor",
  description:
    "Panel sonu Q&A. Mikrofon. 500 kişi. Sen elini kaldırdın — sıra senin.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.arc.ny_tech_conf.3.1",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "Quick question on",
      tr_translation: "Şu konuda kısa bir soru",
      example: "Quick question on the auth piece — how do you scale it?",
      example_tr: "Auth kısmı için kısa bir soru — nasıl ölçeklendiriyorsunuz?",
    },
    {
      id: "ex.arc.ny_tech_conf.3.2",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Sahnede 3 kişi panel. Q&A başladı. Mikrofon sana geldi — yarım dakikan var.",
      npc_role: "Panel moderator + speaker",
      setting: "Q&A after keynote panel, 500 attendees, hot mic",
      turns: [
        {
          speaker: "npc",
          message:
            "Moderator: Next question — back of the room.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks|hi)(,)? (great panel)",
            "(i'?m [a-z]+ from (a fintech|istanbul))",
            "(quick question on)",
            "(this is for (the panel|maria|the speaker))",
            "(loved your point about)",
          ],
          hint_tr:
            "Açılış: 'Hi, great panel — quick question on.' Türk: direkt soru değil, kısa kredi + soru.",
        },
        {
          speaker: "npc",
          message:
            "Speaker: Go ahead.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(you mentioned (scaling|auth|the migration))",
            "(how did you handle (the legacy systems|breaking changes))",
            "(curious about (the rollback|fallback) strategy)",
            "(what was your (team size|timeline))",
            "(any (lessons|surprises) (you didn'?t see (coming|expected)))",
          ],
          hint_tr:
            "Spesifik: 'You mentioned X — how did you handle Y?' Türk: belirsiz değil, somut.",
        },
        {
          speaker: "npc",
          message:
            "Speaker: Great question. We staged it in three phases over six months.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks)",
            "(quick follow(-| )?up)",
            "(was there a (point|moment) (you (almost|considered)))",
            "(how did you (communicate|sell) it (internally|to leadership))",
            "(appreciate the (answer|color))",
          ],
          hint_tr:
            "Takip: 'Quick follow-up — how did you sell it internally?' Türk: 'Thanks' yetersiz, derinleş.",
        },
        {
          speaker: "npc",
          message:
            "Speaker: We wrote a one-pager. Honest tradeoffs. Leadership signed off in a week.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(love that|that'?s gold)",
            "(stealing the one(-| )?pager idea)",
            "(thanks (so much|for the detail))",
            "(huge takeaway)",
            "(can we (connect|chat) (after|later))",
          ],
          hint_tr:
            "Pratik kapanış: 'Stealing the one-pager idea.' Türk: 'Thanks' düz, taşınabilir öğrenme.",
        },
        {
          speaker: "npc",
          message:
            "Moderator: Thank you. Next question, please.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks)",
            "(appreciate it)",
            "(passing the mic)",
            "(great answer)",
          ],
          hint_tr:
            "Veda: 'Passing the mic.' Türk: 'OK' düz, kibar.",
        },
      ],
    },
  ],
};

export const nyTechConf04: BundledLesson = {
  id: "arc.ny_tech_conf.4",
  skill_id: "arc.ny_tech_conf",
  index: 4,
  title: "Sahne 4 — Hallway track: Alex ile tanışma",
  description:
    "Q&A sonrası sahne arkası lobisi. Alex (konuşmacının arkadaşı) seni tebrik etti. (Recurring NPC ilk.)",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.arc.ny_tech_conf.4.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "That was a great question",
      tr_translation: "Çok iyi bir soruydu",
      example: "That was a great question you asked.",
      example_tr: "Sorduğun çok iyi bir soruydu.",
    },
    {
      id: "ex.arc.ny_tech_conf.4.2",
      type: "roleplay_chat",
      difficulty: 3,
      scenario_description:
        "Lobide kahve. Birisi (Alex) sana yaklaştı: 'That was a great question.'",
      npc_role: "Alex (PM at a US scale-up, recurring)",
      setting: "Hallway track outside main hall, post-Q&A",
      turns: [
        {
          speaker: "npc",
          message:
            "Hey — that was a great question you asked back there.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(oh|thanks|appreciate that)",
            "(it'?s been (on my mind|something we'?re wrestling with))",
            "(i'?m glad it (landed|resonated))",
            "(easy when (the speaker|maria) (set it up so well))",
            "(i'?m [a-z]+ by the way)",
          ],
          hint_tr:
            "Kabul + kendini tanıt: 'Thanks — I'm Burak by the way.' Türk: kompliman sonrası tanıtım.",
        },
        {
          speaker: "npc",
          message:
            "Alex. We just shipped something similar. Painful.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(oh wow|tell me more)",
            "(how (did|long did) it take)",
            "(was the (one(-| )?pager|stakeholder management) (the hardest|the bottleneck))",
            "(what was the (one thing|biggest surprise))",
            "(any (war stories|battle scars))",
          ],
          hint_tr:
            "Konuyu aç: 'What was the biggest surprise?' Türk: 'Yes' yetersiz, derinleş.",
        },
        {
          speaker: "npc",
          message:
            "Honestly, the cultural piece was harder than the tech. Half the org wanted the old way.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(that resonates|exactly what i'?m worried about)",
            "(how did you (win them over|build buy(-| )?in))",
            "(was there (a moment|a breaking point))",
            "(stories like (yours|that) (help|are gold))",
            "(we'?re mid-fight on this right now)",
          ],
          hint_tr:
            "Bağlantı: 'We're mid-fight on this right now.' Türk: 'OK' düz, ortak deneyim göster.",
        },
        {
          speaker: "npc",
          message:
            "Are you in town long? We should grab a coffee.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yeah|sure)(,)? (i'?m here (through|until) (friday|the weekend))",
            "(i'?d love to)",
            "(when works (for you|on your side))",
            "(let me check my (calendar|schedule))",
            "(definitely|let'?s do it)",
          ],
          hint_tr:
            "Kabul: 'I'd love to — when works?' Türk: 'OK' düz, kararlı + esnek.",
        },
        {
          speaker: "npc",
          message:
            "Thursday morning? There's a place near my office in SoHo.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thursday works)",
            "(send me the (address|details))",
            "(i'?ll be there)",
            "(perfect|locked in)",
            "(text me)",
          ],
          hint_tr:
            "Onay: 'Locked in.' Türk: 'OK' düz, kesin.",
        },
        {
          speaker: "npc",
          message:
            "Let's swap LinkedIns now so we don't lose track.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(scanning|let me pull it up)",
            "(here'?s mine)",
            "(sent the request)",
            "(catch you thursday)",
            "(real pleasure)",
          ],
          hint_tr:
            "Pratik: 'Scanning your QR.' Türk: 'OK' düz, somut adım.",
        },
      ],
    },
  ],
};

export const nyTechConf05: BundledLesson = {
  id: "arc.ny_tech_conf.5",
  skill_id: "arc.ny_tech_conf",
  index: 5,
  title: "Sahne 5 — After-party: konuşmacılarla tanışma",
  description:
    "VIP after-party. Dün soru sorduğun konuşmacı Maria köşede. Yaklaş.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.arc.ny_tech_conf.5.1",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "I won't take much of your time",
      tr_translation: "Vaktinizi fazla almayacağım",
      example: "I won't take much of your time — just one question.",
      example_tr: "Vaktinizi fazla almayacağım — sadece bir soru.",
    },
    {
      id: "ex.arc.ny_tech_conf.5.2",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "After-party, çatı katı. Maria tek başına ayakta. Yaklaş — etkili konuş.",
      npc_role: "Maria (the keynote speaker, polite but tired)",
      setting: "Conference after-party, rooftop bar, 9pm",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(maria)(,)? (hi)",
            "(i won'?t take much of your time)",
            "(loved your (talk|keynote))",
            "(i was the (back of the room|question on auth) (this morning|earlier))",
            "(do you have (a moment|two minutes))",
          ],
          hint_tr:
            "Saygılı yaklaşım: 'I won't take much of your time.' Türk: 'Hi' eksik, sınır + kompliman.",
        },
        {
          speaker: "npc",
          message:
            "Oh hi! Yes — I remember. What's up?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i wanted to (thank you|follow up))",
            "(your point on (the one(-| )?pager|cultural piece) (stuck with me))",
            "(we'?re (going through|in the middle of) something (similar))",
            "(would you be open to (a quick chat|sharing the deck|connecting on linkedin))",
            "(any (resources|books) you'?d recommend)",
          ],
          hint_tr:
            "Net istek: 'We're going through something similar — any resources?' Türk: 'I have question' eksik, bağlam + istek.",
        },
        {
          speaker: "npc",
          message:
            "Of course. Let me think — there's a book and a substack.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(amazing|i'?ll (find|note) them)",
            "(could you (send|drop) (them )?on linkedin)",
            "(any specific (chapter|piece) you'?d (start with|prioritize))",
            "(thank you (so much|seriously))",
            "(this is (gold|hugely helpful))",
          ],
          hint_tr:
            "Pratik: 'Could you drop them on LinkedIn?' Türk: 'OK' yetersiz, takip planı.",
        },
        {
          speaker: "npc",
          message:
            "Sure. What's your background? Engineering?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yeah|yes)(,)? (engineer at (a fintech|a startup))",
            "(seven years (in|of) (tech|backend))",
            "(in london|in istanbul)",
            "(we'?re (about (50|100)|a similar (stage|size)))",
            "(building (b2b|enterprise) (products|tools))",
          ],
          hint_tr:
            "Kısa: 'Engineer at a fintech in London.' Türk: 'I am developer' eksik, rol + bağlam.",
        },
        {
          speaker: "npc",
          message:
            "Nice — connect with me. I'm always happy to chat.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thank you (so much|seriously))",
            "(i (really )?appreciate (this|the time))",
            "(letting you (enjoy the party|go))",
            "(catch you (online|on linkedin))",
            "(safe travels)",
          ],
          hint_tr:
            "Çekilme: 'Letting you enjoy the party.' Türk: 'OK bye' düz, sınır onurla.",
        },
      ],
    },
  ],
};

export const nyTechConf06: BundledLesson = {
  id: "arc.ny_tech_conf.6",
  skill_id: "arc.ny_tech_conf",
  index: 6,
  title: "Sahne 6 — Alex ile coffee meeting (Thursday)",
  description:
    "SoHo'da kafe. Alex ile network kahvesi. Birbirine değer kat. (Recurring NPC.)",
  estimated_minutes: 6,
  exercises: [
    {
      id: "ex.arc.ny_tech_conf.6.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "How can I be useful to you?",
      tr_translation: "Sana nasıl faydalı olabilirim?",
      example: "Before I take more — how can I be useful to you?",
      example_tr: "Daha fazlasını almadan — sana nasıl faydalı olabilirim?",
    },
    {
      id: "ex.arc.ny_tech_conf.6.2",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "SoHo kafe. Alex işaret etti. Konuşma derinleşiyor — değer ver, sadece al değil.",
      npc_role: "Alex (PM, second meeting)",
      setting: "SoHo café, Thursday 10am, second meeting",
      turns: [
        {
          speaker: "npc",
          message:
            "So — how's the conference been?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(honestly|really) (productive|valuable|surprising)",
            "(more (energizing|exhausting) than i thought)",
            "(some real (gems|standouts))",
            "(meeting (people|you) was the (highlight|win))",
            "(too much (coffee|talking))",
          ],
          hint_tr:
            "Dürüst: 'Meeting you was the highlight.' Türk: 'OK' düz, dönüşlü.",
        },
        {
          speaker: "npc",
          message:
            "Same. What are you taking back home?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(the (one(-| )?pager|cultural piece) idea)",
            "(rethinking (how|the way) we (do|handle) (rollouts|migrations))",
            "(a (handful|short list) of (people|tools) to (try|follow up with))",
            "(the (importance|reality) of (alignment|stakeholder work))",
            "(less is more energy)",
          ],
          hint_tr:
            "Somut: 'The one-pager idea.' Türk: 'I learned' düz, taşınabilir.",
        },
        {
          speaker: "npc",
          message:
            "Good. What can I help with?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(honestly|first off)(,)? (how can i be useful to you)",
            "(intros|warm intros) to (anyone|someone))",
            "(insight on (the us market|hiring))",
            "(any (open|specific) (questions|gaps) i can help on))",
            "(before you (help|give))(,)? (let me know what you (need|want))",
          ],
          hint_tr:
            "Karşılıklı: 'How can I be useful to you?' Türk: tek yönlü değil, karşılık ver.",
        },
        {
          speaker: "npc",
          message:
            "Oh — you're playing the long game. I respect that.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(it'?s (the only way|how i was raised))",
            "(networks are (two|both)(-| )?way)",
            "(no (favors|asks) without (giving|listening))",
            "(haha|guilty)",
            "(let'?s (figure out|find) the win(-| )?win)",
          ],
          hint_tr:
            "Felsefe: 'Networks are two-way.' Türk: 'OK' düz, değer çerçevesi.",
        },
        {
          speaker: "npc",
          message:
            "Actually, yes — we're looking at expanding into Europe. Any leads on hiring?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i can (intro|connect you to) (a few|two or three))",
            "(my (network|team) in (london|berlin))",
            "(let me think (about it|who fits))",
            "(send me (the brief|what you'?re looking for))",
            "(can do)",
          ],
          hint_tr:
            "Aksiyon: 'Send me the brief.' Türk: 'Yes I help' eksik, somut.",
        },
        {
          speaker: "npc",
          message:
            "Email it tonight. And let me know how I can help you back.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(deal|done)",
            "(i'?ll (think|come back) (about|with) (some asks|something specific))",
            "(let me (be intentional|not waste your time))",
            "(thanks for (the time|making this work))",
            "(this was the best (meeting|hour) of the trip)",
          ],
          hint_tr:
            "Kapanış: 'Best meeting of the trip.' Türk: 'OK thanks' düz, sıcak overrate ok.",
        },
      ],
    },
  ],
};

export const nyTechConf07: BundledLesson = {
  id: "arc.ny_tech_conf.7",
  skill_id: "arc.ny_tech_conf",
  index: 7,
  title: "Sahne 7 — Konferans son günü: contact info exchange",
  description:
    "Son gün. Listede 8 kişi var — herkese veda + LinkedIn iste.",
  estimated_minutes: 4,
  exercises: [
    {
      id: "ex.arc.ny_tech_conf.7.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "Let's stay in touch",
      tr_translation: "İletişimde kalalım",
      example: "Let's stay in touch — I'll send a follow-up.",
      example_tr: "İletişimde kalalım — takip mesajı atarım.",
    },
    {
      id: "ex.arc.ny_tech_conf.7.2",
      type: "roleplay_chat",
      difficulty: 3,
      scenario_description:
        "Son tur lobide. Daniel ve birkaç kişi vedalaşıyor — veda + somut takip.",
      npc_role: "Daniel (Toronto founder, met day 1)",
      setting: "Conference final day, closing reception",
      turns: [
        {
          speaker: "npc",
          message:
            "Last day! What's the plan back home?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(flying out (tonight|tomorrow morning))",
            "(landing back in (london|istanbul) (saturday|monday))",
            "(catching up on (sleep|emails) before work monday)",
            "(processing (all of this|the notes))",
            "(yours)",
          ],
          hint_tr:
            "Soru iade: 'Flying out tomorrow — yours?' Türk: cevap + soru iade.",
        },
        {
          speaker: "npc",
          message:
            "Same. Hey — that intro you mentioned would be huge.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(consider it (done|sent))",
            "(i'?ll (send|do) it (this week|by friday))",
            "(can you (remind|nudge) me (if i forget))",
            "(double opt(-| )?in (works|okay))",
            "(send me (a one(-| )?liner|context))",
          ],
          hint_tr:
            "Söz: 'Consider it done.' Türk: 'OK' düz, kesin teslim.",
        },
        {
          speaker: "npc",
          message:
            "Perfect. Anything I can do for you?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(now that you ask|honestly))",
            "(i'?d love (an intro|connect) to)",
            "(any thoughts on (breaking into|the toronto market))",
            "(i'?ll send you (a list|something specific))",
            "(thinking about it)",
          ],
          hint_tr:
            "Karşı: 'I'd love an intro to X.' Türk: 'No nothing' yetersiz, somut.",
        },
        {
          speaker: "npc",
          message:
            "Easy. Email tonight, I'll respond Monday.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(perfect|deal)",
            "(thanks (so much|for everything))",
            "(let'?s (actually )?stay in touch)",
            "(see you (at the next one|in toronto))",
            "(safe travels)",
          ],
          hint_tr:
            "Veda: 'Let's actually stay in touch.' Türk: 'OK bye' düz, 'actually' önemli.",
        },
        {
          speaker: "npc",
          message:
            "Safe flight, Burak.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(you too|same)",
            "(take care)",
            "(catch you online)",
            "(till the next one)",
          ],
          hint_tr:
            "Sıcak son: 'Till the next one.' Türk: 'Bye' düz, devam vaadi.",
        },
      ],
    },
  ],
};

export const nyTechConf08: BundledLesson = {
  id: "arc.ny_tech_conf.8",
  skill_id: "arc.ny_tech_conf",
  index: 8,
  title: "Sahne 8 — Follow-up email taslağı: Alex'e",
  description:
    "Eve döndün. Alex'e takip emaili yazıyorsun — sıcak ama net.",
  estimated_minutes: 6,
  exercises: [
    {
      id: "ex.arc.ny_tech_conf.8.1",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "It was great connecting",
      tr_translation: "Tanışmak çok güzeldi",
      example: "It was great connecting last week.",
      example_tr: "Geçen hafta tanışmak çok güzeldi.",
    },
    {
      id: "ex.arc.ny_tech_conf.8.2",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Email taslağı için danışmana açıklıyorsun. Her cümleyi sesli kuruyorsun.",
      npc_role: "Writing coach helping you craft the email",
      setting: "Working on follow-up email draft, day after returning home",
      turns: [
        {
          speaker: "npc",
          message:
            "Okay — open. How do you start the email?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(hi alex)",
            "(it was great connecting (last week|in new york))",
            "(thanks for (the time|the coffee|making time))",
            "(hope (you (made it back|are well|landed))",
            "(quick (follow(-| )?up|note))",
          ],
          hint_tr:
            "Açılış: 'It was great connecting.' Türk: 'Dear Alex' resmi, 'Hi Alex' modern.",
        },
        {
          speaker: "npc",
          message:
            "Good. Now — the substance. You promised something. What?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(as promised|to follow up on (what we discussed))",
            "(here are (the three|a few) candidates)",
            "(introducing you to)",
            "(attached is (the brief|the one(-| )?pager))",
            "(double opt(-| )?in)",
          ],
          hint_tr:
            "Vaat tut: 'As promised, here are the three candidates.' Türk: 'I send' düz, 'as promised' güvenilir.",
        },
        {
          speaker: "npc",
          message:
            "Now ask for your thing. Without being awkward.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(separately|on my (side|end))",
            "(would love (an intro|to be introduced) to)",
            "(no rush|whenever it (works|fits))",
            "(happy to (send|draft) a (forwardable|short) note)",
            "(if it (lands wrong|doesn'?t feel right) — no pressure)",
          ],
          hint_tr:
            "İstek: 'Would love an intro to X — no rush.' Türk: 'I want' agresif, 'no rush' yumuşatır.",
        },
        {
          speaker: "npc",
          message:
            "Strong. Now — close warmly without being clingy.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(really enjoyed (the conversation|our coffee))",
            "(let'?s keep (this going|in touch))",
            "(rooting for (your launch|the european push))",
            "(see you at (the next conference|re:invent))",
            "(thanks again|appreciate you)",
          ],
          hint_tr:
            "Kapanış: 'Rooting for your European push.' Türk: 'Best regards' resmi, 'rooting for' sıcak.",
        },
        {
          speaker: "npc",
          message:
            "Subject line — make it scannable.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(three candidates as promised|from the alex coffee))",
            "(follow(-| )?up.*conference|ny conference follow(-| )?up))",
            "(intros + an ask)",
            "(re: european hiring)",
            "(nice meeting you — quick follow(-| )?up)",
          ],
          hint_tr:
            "Subject: 'Three candidates as promised.' Türk: 'Hello' boş, içerik özet.",
        },
        {
          speaker: "npc",
          message:
            "Send it. Mark this conversation as a win.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(sent|on its way)",
            "(thanks for (the help|walking through))",
            "(now we (wait|see))",
            "(fingers crossed)",
            "(closing the loop on (new york|the trip))",
          ],
          hint_tr:
            "Aksiyon: 'Sent.' Türk: 'OK' düz, kararlı.",
        },
      ],
    },
  ],
};

// ============================================================
// ARC 4 — CUSTOMER SUPPORT AGENT — YOUR JOB (8 sahne)
// Recurring NPCs: Mr. Brennan (boss), Priya (new hire you train)
// ============================================================

export const customerSupport01: BundledLesson = {
  id: "arc.customer_support.1",
  skill_id: "arc.customer_support",
  index: 1,
  title: "Sahne 1 — Sinirli müşteri: 'I want to speak to your manager'",
  description:
    "Sabah 9, telefon. Müşteri öfkeli — paket gelmemiş. Sakinleştir.",
  estimated_minutes: 6,
  exercises: [
    {
      id: "ex.arc.customer_support.1.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "I completely understand your frustration",
      tr_translation: "Sinirinizi tamamen anlıyorum",
      example: "I completely understand your frustration — let me help.",
      example_tr: "Sinirinizi tamamen anlıyorum — yardımcı olayım.",
    },
    {
      id: "ex.arc.customer_support.1.2",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Şikayet hattı. Yaşlıca bir bey bağırıyor. Sakinleştirme + somut yardım.",
      npc_role: "Angry customer (package never arrived)",
      setting: "Customer support phone line, Monday 9am",
      turns: [
        {
          speaker: "npc",
          message:
            "This is the third time I'm calling! Where is my package?!",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i'?m (so |really )?sorry (about|to hear) (this|that))",
            "(i (completely|totally) understand your frustration)",
            "(let me (look into|pull up) (your account|the order) right away)",
            "(could (i|you) give me (your |the )(order number|reference))",
            "(i'?m here to help)",
          ],
          hint_tr:
            "Empati önce: 'I completely understand your frustration.' Türk: 'Don't yell' yanlış, doğrula + çöz.",
        },
        {
          speaker: "npc",
          message:
            "Order number is 4471. It was supposed to arrive last Wednesday.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thank you|got it)",
            "(let me (pull (it )?up|find your order))",
            "(one (moment|second))",
            "(i (see|have) (the order|it) (in front of me|here))",
            "(i can (see|understand) why you'?re (calling|upset))",
          ],
          hint_tr:
            "Hareket: 'Let me pull it up.' Türk: 'Wait' eksik, ne yaptığını söyle.",
        },
        {
          speaker: "npc",
          message:
            "Well? Where is it?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i can see (the package|it) was (delayed|held) at)",
            "(it looks like|i can see) (the tracking shows))",
            "(here'?s what (happened|i found))",
            "(the (warehouse|carrier) (flagged|misrouted) it)",
            "(this should'?ve been (communicated|escalated) (sooner|earlier))",
          ],
          hint_tr:
            "Şeffaf: 'Here's what happened.' Türk: 'It is in warehouse' eksik, neden + sahiplen.",
        },
        {
          speaker: "npc",
          message:
            "So what are you going to do about it?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(here'?s what i'?ll do)",
            "(i'?m going to (refund|expedite|reship) (it|the order))",
            "(let me (escalate|flag) (this|the case))",
            "(within (24|48) hours)",
            "(i can also (waive|comp) the (shipping|next order))",
          ],
          hint_tr:
            "Çözüm: 'Here's what I'll do — reship, waive shipping.' Türk: 'I am sorry' eksik, somut adım.",
        },
        {
          speaker: "npc",
          message:
            "Fine. But I'm not happy.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i (hear|appreciate) (you|that))",
            "(you have every right to be (upset|frustrated))",
            "(i'?ll (personally|stay on this) (follow up|see this through))",
            "(here'?s my (direct|extension) (line|number))",
            "(thank you for (your patience|sticking with us))",
          ],
          hint_tr:
            "Sahiplen: 'I'll personally follow up.' Türk: 'OK' düz, kişisel sahiplik.",
        },
        {
          speaker: "npc",
          message:
            "Alright. Just don't make me call back.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(you won'?t (have to|need to))",
            "(i'?ve (logged|noted) (everything|the case))",
            "(expect (an email|a confirmation) within the hour)",
            "(thank you for (the call|raising this))",
            "(have a (good|better) (rest of your day|one))",
          ],
          hint_tr:
            "Söz: 'You won't have to call back.' Türk: 'OK bye' düz, kararlı vaat.",
        },
      ],
    },
  ],
};

export const customerSupport02: BundledLesson = {
  id: "arc.customer_support.2",
  skill_id: "arc.customer_support",
  index: 2,
  title: "Sahne 2 — İade isteği: politikayı esnetmek",
  description:
    "Müşteri 35 günlük ürünü iade etmek istiyor. Politika 30. Esnek + adil.",
  estimated_minutes: 6,
  exercises: [
    {
      id: "ex.arc.customer_support.2.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "I'll make an exception",
      tr_translation: "İstisna yapacağım",
      example: "I'll make an exception this time.",
      example_tr: "Bu sefer istisna yapacağım.",
    },
    {
      id: "ex.arc.customer_support.2.2",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Politika 30 gün, müşteri 35. Sınır + esneklik.",
      npc_role: "Customer wanting late refund",
      setting: "Customer support chat, 11am Tuesday",
      turns: [
        {
          speaker: "npc",
          message:
            "I bought this 35 days ago. Doesn't fit. I want a refund.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(let me (look|pull) (it|that) up)",
            "(i'?m sorry it (didn'?t work out|wasn'?t the right fit))",
            "(could you give me the order number)",
            "(thanks for (reaching out|letting us know))",
            "(let me see what (i can do|options we have))",
          ],
          hint_tr:
            "Empati + bilgi: 'Let me see what options we have.' Türk: 'No can't' eksik, dene önce.",
        },
        {
          speaker: "npc",
          message:
            "Order 9821. It's only five days past — surely you can be flexible?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i (see|hear) that)",
            "(our (policy|standard) is (30|thirty) days)",
            "(but )?(i can see) (you'?ve been (a customer|with us) (a long time|loyal))",
            "(let me see (what i can do|if i can make this work))",
            "(give me one (moment|second))",
          ],
          hint_tr:
            "Politika + dene: 'Policy is 30, but let me see.' Türk: 'No I can't' kapalı, dene.",
        },
        {
          speaker: "npc",
          message:
            "Look — five days. Come on.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i hear you)",
            "(given (the circumstances|your history))",
            "(i'?ll make an exception (this time)?)",
            "(i can offer (you|the refund) (as a one(-| )?off|just this once))",
            "(the (refund|return) is approved)",
          ],
          hint_tr:
            "Karar: 'I'll make an exception this time.' Türk: 'OK yes' düz, sınır + esneklik.",
        },
        {
          speaker: "npc",
          message:
            "Finally. Thank you.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(you'?re welcome)",
            "(here'?s what (happens|comes) next)",
            "(i'?ll (send|email) you (a return label|the steps))",
            "(once we receive (the item|it)) (refund processes in (3|five) days)",
            "(any questions before we (close|wrap))",
          ],
          hint_tr:
            "Sonraki adım: 'Here's what happens next.' Türk: 'OK' düz, süreç anlat.",
        },
        {
          speaker: "npc",
          message:
            "Just send the label.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(label sent|going out now)",
            "(check your inbox in (a few minutes|five))",
            "(thanks for (being patient|the call))",
            "(have a (good|better) one)",
            "(anything else (i can help with|on your end))",
          ],
          hint_tr:
            "Sade kapanış: 'Label sent.' Türk: 'OK' düz, kararlı.",
        },
      ],
    },
  ],
};

export const customerSupport03: BundledLesson = {
  id: "arc.customer_support.3",
  skill_id: "arc.customer_support",
  index: 3,
  title: "Sahne 3 — Tier-2 escalation: 'I need to loop in our tech team'",
  description:
    "Karmaşık bir vaka. Tek başına çözemiyorsun. Tier-2'ye devret — bilgiyi düzgün geç.",
  estimated_minutes: 6,
  exercises: [
    {
      id: "ex.arc.customer_support.3.1",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "I'm going to loop in",
      tr_translation: "Şu kişiyi/ekibi dahil edeceğim",
      example: "I'm going to loop in our tech team.",
      example_tr: "Teknik ekibi dahil edeceğim.",
    },
    {
      id: "ex.arc.customer_support.3.2",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Müşteri telefonda bekliyor. Tier-2 colleague Slack'te — vakayı özet geç.",
      npc_role: "Tier-2 colleague (technical, busy)",
      setting: "Internal Slack DM while customer is on hold",
      turns: [
        {
          speaker: "npc",
          message:
            "Hey — what's the situation? Customer waiting?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|yeah)(,)? (on hold|waiting))",
            "(quick context — (the customer|she) has a)",
            "(it'?s a (billing|account|api) issue)",
            "(i'?ve tried (the standard|basic) (steps|playbook))",
            "(this is (beyond|outside) my (level|scope))",
          ],
          hint_tr:
            "Hızlı bağlam: 'On hold — billing issue.' Türk: 'Customer angry' eksik, kategori + adım.",
        },
        {
          speaker: "npc",
          message:
            "What have you ruled out?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i (verified|confirmed) (the account|the payment))",
            "(i (cleared|reset) (the cache|her session))",
            "(no (open|active) (issues|incidents) on (status page|grafana))",
            "(rebooted (the integration|nothing helped))",
            "(she'?s the only one (affected|reporting))",
          ],
          hint_tr:
            "Liste: 'I verified payment, cleared session.' Türk: 'I tried' yetersiz, neyi denediğini liste.",
        },
        {
          speaker: "npc",
          message:
            "Okay. Anything weird in her account history?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(she (migrated|upgraded) (last week|recently))",
            "(double charge (in march|on file))",
            "(her (plan|subscription) shows (mismatched|inconsistent))",
            "(i'?ll (drop|share) (the screenshots|the logs))",
            "(let me (forward|push) (the tickets|history))",
          ],
          hint_tr:
            "Detay: 'She migrated last week.' Türk: 'Maybe' eksik, gözlem rapor.",
        },
        {
          speaker: "npc",
          message:
            "Migration is the smoking gun. Send me the customer's email and case number.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(sending now|on it|just dropped)",
            "(case (number )?[a-z0-9]+)",
            "(email is (in the dm|attached))",
            "(let me know (when you'?re live|once you take over))",
            "(i'?ll (warm transfer|hold the line) until)",
          ],
          hint_tr:
            "Veri ver: 'Sending now — case 4471.' Türk: 'OK' düz, somut + numara.",
        },
        {
          speaker: "npc",
          message:
            "Got it. I'll take it from here. Tell her I'm on it.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks|appreciate it)",
            "(i'?ll (pass|relay) the message)",
            "(i'?ll (stay on|warm transfer))",
            "(she'?ll be (relieved|happy))",
            "(you'?re a (lifesaver|legend))",
          ],
          hint_tr:
            "Minnet: 'You're a lifesaver.' Türk: 'OK' düz, ekipdaşlık.",
        },
      ],
    },
  ],
};

export const customerSupport04: BundledLesson = {
  id: "arc.customer_support.4",
  skill_id: "arc.customer_support",
  index: 4,
  title: "Sahne 4 — Yeni stajyer Priya'yı eğitmek",
  description:
    "Priya ilk haftada. İlk gerçek call'ı dinlettin. Feedback ver. (Recurring NPC ilk.)",
  estimated_minutes: 6,
  exercises: [
    {
      id: "ex.arc.customer_support.4.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "Walk me through what happened",
      tr_translation: "Ne olduğunu anlat",
      example: "Walk me through what happened step by step.",
      example_tr: "Adım adım ne olduğunu anlat.",
    },
    {
      id: "ex.arc.customer_support.4.2",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Priya ile 1:1. Call'ı birlikte dinlediniz. Önce o ne düşünüyor sor — sonra ekle.",
      npc_role: "Priya (new hire, nervous, eager)",
      setting: "Mentor session, post-call review, Wednesday afternoon",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(so|alright)(,)? (walk me through what happened)",
            "(how did (that|the call) feel)",
            "(before i (jump in|give feedback)) — (what'?s your read)",
            "(what (went well|did you (struggle|stumble) on))",
            "(i want (your take|your assessment) first)",
          ],
          hint_tr:
            "Önce dinle: 'What's your read first?' Türk: direkt eleştiri yanlış, soru.",
        },
        {
          speaker: "npc",
          message:
            "Honestly, I panicked when she said 'manager.' I didn't know what to say.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(totally normal|happens to (everyone|all of us))",
            "(i still freeze on (that|those))",
            "(here'?s (a phrase|something) that helps)",
            "(let me (share|teach) you a (script|template))",
            "(you'?re doing better than you think)",
          ],
          hint_tr:
            "Normalize + öğret: 'Happens to all of us — here's what helps.' Türk: 'Don't worry' düz, tip + araç.",
        },
        {
          speaker: "npc",
          message:
            "What should I have said?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(try)(,)? (i hear you. let me see what i can do (myself )?first)",
            "(don'?t (escalate|hand off) immediately)",
            "(buy yourself (time|a beat) with (an empathy line|a clarifying question))",
            "(the (script|magic phrase) is (acknowledge + reframe))",
            "(if she still insists)(,)? (then loop in your manager)",
          ],
          hint_tr:
            "Somut: 'Let me see what I can do first.' Türk: 'You can say...' eksik, formül + örnek.",
        },
        {
          speaker: "npc",
          message:
            "That makes sense. But what if I really can't fix it?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(then escalation is the (right|correct) move)",
            "(the goal isn'?t to (avoid|skip) (managers|escalation))",
            "(it'?s to (slow down|exhaust) (your own )?options first)",
            "(when you (do|need to) escalate (own it|stay warm))",
            "(say 'i'?m going to loop in (my manager|a specialist)')",
          ],
          hint_tr:
            "Çerçeve: 'Goal isn't to avoid escalation.' Türk: 'Always you fix' yanlış, ne zaman aktar.",
        },
        {
          speaker: "npc",
          message:
            "Got it. One more — she swore at me. What do I do?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(that'?s (hard|tough)|sorry that happened)",
            "(say (i)? (want to help you|will stay on the call)(,)? but i need us to (lower the (heat|volume)|keep it civil))",
            "(don'?t take it (personally|home))",
            "(you can warn (once)(,)? then disconnect)",
            "(flag it (to me|to the team) after)",
          ],
          hint_tr:
            "Sınır: 'I want to help, but we need to keep it civil.' Türk: 'You hang up' eksik, sınır + uyarı.",
        },
        {
          speaker: "npc",
          message:
            "Thank you. This actually helps a lot.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(any time)",
            "(you'?re going to be (great|fine))",
            "(ping me (any time|after any hard call))",
            "(let'?s (do this|review) again on friday)",
            "(proud of you for (asking|engaging))",
          ],
          hint_tr:
            "Destek: 'Ping me after any hard call.' Türk: 'OK welcome' düz, açık kapı.",
        },
      ],
    },
  ],
};

export const customerSupport05: BundledLesson = {
  id: "arc.customer_support.5",
  skill_id: "arc.customer_support",
  index: 5,
  title: "Sahne 5 — Patron Mr. Brennan ile aylık review",
  description:
    "Mr. Brennan ile aylık 1:1. Sayılar iyi ama bir vaka kötü gitti. Dürüst ol.",
  estimated_minutes: 6,
  exercises: [
    {
      id: "ex.arc.customer_support.5.1",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "I dropped the ball on",
      tr_translation: "Şu konuda topu kaçırdım/hata yaptım",
      example: "I dropped the ball on the refund case last week.",
      example_tr: "Geçen haftaki iade vakasında topu kaçırdım.",
    },
    {
      id: "ex.arc.customer_support.5.2",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Mr. Brennan ile huddle. Çoğunlukla iyi, ama bir vaka kötü. Aç + sahiplen.",
      npc_role: "Mr. Brennan (your manager, fair but blunt)",
      setting: "Monthly 1:1 with manager",
      turns: [
        {
          speaker: "npc",
          message:
            "Numbers look good. CSAT up. But the Williams case — what happened?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i (dropped the ball|messed up) on that)",
            "(i (want to|need to) own (that one|williams))",
            "(it'?s on me)",
            "(let me walk you through what happened)",
            "(you'?re right to (flag|ask) — i (saw it coming|missed it))",
          ],
          hint_tr:
            "Sahiplen: 'I dropped the ball.' Türk: 'It was hard' bahane, sahiplik göster.",
        },
        {
          speaker: "npc",
          message:
            "Walk me through it.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i (took|handled) the (first|initial) call)",
            "(she asked (about|for) (a refund|a callback))",
            "(i (forgot|didn'?t) (escalate|log) it)",
            "(by the time (i remembered|the second call came)) — (she'?d (cancelled|left))",
            "(i should'?ve (looped in|escalated) (sooner|right away))",
          ],
          hint_tr:
            "Olgu: 'I forgot to escalate.' Türk: 'I was busy' bahane, kronoloji + hata.",
        },
        {
          speaker: "npc",
          message:
            "Okay. What's the lesson?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(no callback promise without (a calendar|a ticket) reminder)",
            "(escalations get (logged|noted) immediately)",
            "(i'?ll (build|put in place) (a (sanity|callback) check))",
            "(end of (day|shift) review for (open|hanging) cases)",
            "(no more (mental notes|relying on memory))",
          ],
          hint_tr:
            "Sistem: 'No more relying on memory.' Türk: 'I will try' yetersiz, somut süreç.",
        },
        {
          speaker: "npc",
          message:
            "Good. I want to see that in writing by end of week.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(you'?ll have it)",
            "(i'?ll (send|share) (the playbook|the writeup) by (friday|thursday))",
            "(would (it )?help if i (presented|walked the team through))",
            "(noted — friday)",
            "(consider it done)",
          ],
          hint_tr:
            "Söz: 'Consider it done.' Türk: 'OK' düz, kararlı.",
        },
        {
          speaker: "npc",
          message:
            "Last thing — how are you, actually?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(honestly|to be honest)",
            "(some weeks (hit|wear) harder than others)",
            "(this one (rattled|got to) me)",
            "(i'?m (good|okay) overall)",
            "(taking (the lessons|my breaks))",
          ],
          hint_tr:
            "Dürüst: 'This one rattled me.' Türk: 'I am good' yüzeysel, gerçek.",
        },
        {
          speaker: "npc",
          message:
            "Take Friday afternoon. You earned it.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thank you (so much))",
            "(appreciate (it|that))",
            "(that means a lot)",
            "(see you (monday|next week))",
            "(thanks for (the trust|seeing me))",
          ],
          hint_tr:
            "Kapanış: 'Thanks for seeing me.' Türk: 'OK' düz, görüldüğünü hisset.",
        },
      ],
    },
  ],
};

export const customerSupport06: BundledLesson = {
  id: "arc.customer_support.6",
  skill_id: "arc.customer_support",
  index: 6,
  title: "Sahne 6 — Win-back email: ayrılan müşteriyi geri kazan",
  description:
    "İptal eden müşteriye sıcak email yazıyorsun. Suçlama yok — kapı aç.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.arc.customer_support.6.1",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "I'd love to hear what happened",
      tr_translation: "Ne olduğunu duymak isterim",
      example: "I'd love to hear what happened — your feedback matters.",
      example_tr: "Ne olduğunu duymak isterim — geri bildiriminiz önemli.",
    },
    {
      id: "ex.arc.customer_support.6.2",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Email taslağı kuruyorsun. Mr. Brennan onaylayacak — bu yüzden sesli kur.",
      npc_role: "Mr. Brennan (reviewing your draft)",
      setting: "Reviewing win-back email draft with manager",
      turns: [
        {
          speaker: "npc",
          message:
            "Show me your draft. Start with the subject.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(subject is)",
            "(we miss you — and want to make it right)",
            "(quick question (after|since) you (left|cancelled))",
            "(a candid (note|hello) from)",
            "(would you (give|share) us five minutes)",
          ],
          hint_tr:
            "Subject: 'Quick question after you cancelled.' Türk: 'Hello' boş, neden açtırır.",
        },
        {
          speaker: "npc",
          message:
            "Good. Opening?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(hi (sarah|name))",
            "(i (saw|noticed) you (closed|cancelled) (your|the) account)",
            "(no (sales pitch|pressure))",
            "(i'?m (your former|the rep you spoke to) (rep|agent))",
            "(i (just|wanted to) (wanted to|check in) (about|on))",
          ],
          hint_tr:
            "Sıcak: 'No sales pitch.' Türk: 'Dear customer' resmi, isim + sınır.",
        },
        {
          speaker: "npc",
          message:
            "The ask?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i'?d love to hear what happened)",
            "(your (feedback|honest take) matters)",
            "(no (template|form) — just a (reply|short answer))",
            "(was it (price|service|something else))",
            "(would (you|fifteen minutes) (be open|work))",
          ],
          hint_tr:
            "Açık istek: 'No template — just a reply.' Türk: 'Tell me why' agresif, sıcak.",
        },
        {
          speaker: "npc",
          message:
            "What about the offer?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(no offer yet|i'?m not (leading|opening) with (an offer|a coupon))",
            "(want to (understand|hear) first)",
            "(if there'?s a (path back|way to fix it) — i can do (a lot|some))",
            "(if you (return|come back)) (here'?s|i can) (do (a discount|two months free)))",
            "(let me know — (no pressure either way))",
          ],
          hint_tr:
            "Strateji: 'No offer yet — understand first.' Türk: 'Discount' düz, ilişki önce.",
        },
        {
          speaker: "npc",
          message:
            "Smart. Close?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks for (giving us a try|the time))",
            "(either way — (i wish you well|good luck))",
            "(here'?s my (direct|cell) (line|number))",
            "(no hard feelings)",
            "(rooting for you)",
          ],
          hint_tr:
            "Sıcak son: 'No hard feelings.' Türk: 'Best' düz, ilişki kapı açık.",
        },
        {
          speaker: "npc",
          message:
            "Send it. Track the reply rate.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(sent|going out tonight)",
            "(i'?ll (share|report) (the data|results) in (a week|two))",
            "(thanks for (the eyes|the help|reviewing))",
            "(here we go)",
            "(fingers crossed)",
          ],
          hint_tr:
            "Aksiyon: 'Sent — I'll share data.' Türk: 'OK' düz, ölçüm.",
        },
      ],
    },
  ],
};

export const customerSupport07: BundledLesson = {
  id: "arc.customer_support.7",
  skill_id: "arc.customer_support",
  index: 7,
  title: "Sahne 7 — VIP müşteri özel istek: 'I need this today'",
  description:
    "VIP müşteri (büyük hesap) imkansız bir şey istiyor. Sınır + yaratıcı çözüm.",
  estimated_minutes: 6,
  exercises: [
    {
      id: "ex.arc.customer_support.7.1",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "Here's what I can do",
      tr_translation: "Yapabileceğim şu",
      example: "Here's what I can do — and what I can't.",
      example_tr: "Yapabileceğim şu — yapamayacağım da bu.",
    },
    {
      id: "ex.arc.customer_support.7.2",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "VIP arıyor. Cuma 4pm. 'Today' diyor. Sen dürüst + yaratıcı.",
      npc_role: "VIP customer demanding impossible turnaround",
      setting: "VIP support line, Friday 4pm",
      turns: [
        {
          speaker: "npc",
          message:
            "I need this resolved before close of business today. It's critical.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i hear you|i understand)",
            "(let me see what (we can|i can) do)",
            "(can you (walk me through|tell me) what'?s (critical|urgent))",
            "(give me (the context|the stakes))",
            "(i want to (get this right|find a path))",
          ],
          hint_tr:
            "Aciliyet onayla: 'Let me see what we can do.' Türk: 'I can't' kapalı, dene.",
        },
        {
          speaker: "npc",
          message:
            "We have a client demo at 9 tomorrow. The integration is broken.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(got it|now i understand)",
            "(that'?s a real stakes situation)",
            "(here'?s what i (can|need to) do)",
            "(let me (loop in|get) (engineering|our tech lead))",
            "(give me (15|30) minutes to (assess|get options))",
          ],
          hint_tr:
            "Çerçeve: 'Here's what I can do.' Türk: 'OK' düz, somut adım.",
        },
        {
          speaker: "npc",
          message:
            "I don't have 30 minutes.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i understand|i hear that)",
            "(if you want (the (right|complete) fix|a workaround))",
            "(i need (some time|fifteen) to (loop in|escalate))",
            "(here'?s what i can (do|offer) right now)",
            "(would (a workaround|temporary fix) (work|help) for the demo)",
          ],
          hint_tr:
            "Pazarlık: 'Would a workaround help?' Türk: 'No' kapalı, alternatif.",
        },
        {
          speaker: "npc",
          message:
            "A workaround would work — just for the demo.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(perfect|deal)",
            "(give me (15|twenty) minutes — i'?ll have (a workaround|steps) (sent|sent over))",
            "(i'?ll (text|call|email) you)",
            "(in the meantime — (could you|please) (share|send) (the error|screenshots))",
            "(don'?t (go anywhere|hang up))",
          ],
          hint_tr:
            "Plan: 'Give me 15 minutes.' Türk: 'OK' düz, somut süre.",
        },
        {
          speaker: "npc",
          message:
            "Okay. You're my hero if this works.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(haha|no pressure (then|now))",
            "(i'?ll (do my best|move fast))",
            "(call back in (15|20))",
            "(hang tight)",
            "(let'?s (make this work|fix this))",
          ],
          hint_tr:
            "Hafiflik + söz: 'No pressure then.' Türk: 'OK' düz, espri hafifletir.",
        },
      ],
    },
  ],
};

export const customerSupport08: BundledLesson = {
  id: "arc.customer_support.8",
  skill_id: "arc.customer_support",
  index: 8,
  title: "Sahne 8 — Priya'nın ilk başarılı eskalasyonu: tebrik",
  description:
    "Priya zor bir vakayı tek başına çözdü. Tebrik + büyütme. (Recurring NPC son.)",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.arc.customer_support.8.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "I'm proud of you",
      tr_translation: "Seninle gurur duyuyorum",
      example: "Seriously — I'm proud of you for handling that.",
      example_tr: "Gerçekten — onu çözdüğün için seninle gurur duyuyorum.",
    },
    {
      id: "ex.arc.customer_support.8.2",
      type: "roleplay_chat",
      difficulty: 3,
      scenario_description:
        "Priya ile post-call. Zor müşteriyi yönetti. Tebrik + büyütme.",
      npc_role: "Priya (now 2 months in, growing fast)",
      setting: "Post-call debrief, 5pm",
      turns: [
        {
          speaker: "npc",
          message:
            "Did you hear that call? I think I handled it.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i did|listened to the (last bit|whole thing))",
            "(you (crushed|nailed) it)",
            "(seriously — (you handled that beautifully|that was a hard one))",
            "(i'?m (proud|impressed))",
            "(walk me through (your call|what you (did|said)))",
          ],
          hint_tr:
            "Tebrik önce: 'You crushed it.' Türk: 'OK good' düz, somut övgü.",
        },
        {
          speaker: "npc",
          message:
            "I used the empathy line first. Then I bought time. Just like you said.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(exactly|that'?s the playbook)",
            "(and you (made it|adapted it) your own)",
            "(what was the (turning point|inflection))",
            "(how did it feel (this time))",
            "(no panic — i could (tell|hear))",
          ],
          hint_tr:
            "Validasyon: 'You made it your own.' Türk: 'OK' düz, gelişimi yansıt.",
        },
        {
          speaker: "npc",
          message:
            "Honestly? I felt calm. First time.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(that'?s (the moment|huge|the breakthrough))",
            "(remember this (feeling|day))",
            "(this is (how|when) (it gets easier|the muscle builds))",
            "(you (earned|deserve) (this|that calm))",
            "(i (knew|told you) you'?d get here)",
          ],
          hint_tr:
            "Anı çerçeveler: 'Remember this feeling.' Türk: 'OK' düz, an = öğrenme.",
        },
        {
          speaker: "npc",
          message:
            "Could I start handling Tier-1 escalations on my own?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|absolutely)",
            "(i think (you'?re ready|it'?s time))",
            "(let'?s (talk to|loop in) brennan)",
            "(let me (back you up|sponsor that))",
            "(give it a (week|sprint) — see how it (feels|goes))",
          ],
          hint_tr:
            "Sponsorlık: 'Let me back you up.' Türk: 'OK try' düz, aktif destek.",
        },
        {
          speaker: "npc",
          message:
            "Thank you. For everything.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(any time)",
            "(you'?ve (done the work|earned this))",
            "(now (pay it forward|train the next one))",
            "(seriously — proud (of|to mentor) you)",
            "(let'?s celebrate (friday|after work))",
          ],
          hint_tr:
            "Döngü: 'Now pay it forward.' Türk: 'Welcome' düz, mentor zinciri.",
        },
      ],
    },
  ],
};

// ============================================================
// 11 arcs (96 scenes) extended in 2026-05-23 pass — schema/style
// matches arcs 1-4 above. Arcs 5-15 below.
// ============================================================

// ============================================================
// ARC 5 — US IMMIGRATION INTERVIEW (8 sahne)
// Recurring NPC: Officer Wallace (CBP, then USCIS)
// ============================================================

export const usImmigration01: BundledLesson = {
  id: "arc.us_immigration.1",
  skill_id: "arc.us_immigration",
  index: 1,
  title: "Sahne 1 — JFK CBP: ilk karşılaşma",
  description: "JFK varış, CBP kontuarı. Officer Wallace pasaportunu inceliyor.",
  estimated_minutes: 4,
  exercises: [
    {
      id: "ex.arc.us_immigration.1.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "the purpose of my visit",
      tr_translation: "Ziyaret amacım",
      example: "The purpose of my visit is tourism.",
      example_tr: "Ziyaret amacım turizm.",
    },
    {
      id: "ex.arc.us_immigration.1.2",
      type: "roleplay_chat",
      difficulty: 2,
      scenario_description:
        "JFK Terminal 4, CBP booth. Officer Wallace ciddi ama nazik. Net, kısa cevap ver — uzatma.",
      npc_role: "Officer Wallace (CBP, professional)",
      setting: "JFK CBP booth, after a 10-hour flight",
      turns: [
        {
          speaker: "npc",
          message: "Passport. What's the purpose of your visit?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(tourism|business|visiting (family|a friend))",
            "(the purpose of my visit is)",
            "(i'?m here (for|on)) (a conference|vacation|business)",
            "(both — (tourism and)? a short conference)",
            "(visiting (new york|a friend) for a week)",
          ],
          hint_tr:
            "Kısa + net: 'Tourism.' veya 'Business — a short conference.' Türk uzun cümle kurma — tek kelime/kısa kalıp.",
        },
        {
          speaker: "npc",
          message: "How long are you staying?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "((seven|ten|fourteen) days|a week|two weeks)",
            "(i'?m (here|staying) (for|until)) ([a-z]+ \\d+|the (5th|10th))",
            "(returning on [a-z]+ \\d+|flying out (next|on)) [a-z]+",
            "(just (a week|over a week))",
          ],
          hint_tr:
            "Süre + dönüş: 'Ten days — flying out on the 5th.' Türk: 'Maybe' belirsiz, kesin sayı + tarih.",
        },
        {
          speaker: "npc",
          message: "Where are you staying?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(at (a hotel|the marriott|an airbnb)) in (manhattan|brooklyn)",
            "(with (a friend|family))(,)? (in queens|brooklyn))",
            "(i have the (address|booking) (right here|on my phone))",
            "(let me (pull up|show) (the confirmation|booking))",
          ],
          hint_tr:
            "Yer + spesifik: 'At the Marriott in Manhattan.' Türk: 'In New York' yetersiz, otel + bölge.",
        },
        {
          speaker: "npc",
          message: "Anything to declare?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(no(,)? (nothing|nothing to declare))",
            "(just (personal (items|effects)|gifts under \\$100))",
            "(some (turkish (delight|sweets))|food (for personal use)))",
            "(nothing over the limit)",
          ],
          hint_tr:
            "Kısa: 'Nothing to declare.' Türk: yiyecek varsa söyle — 'Some Turkish sweets, personal use.'",
        },
        {
          speaker: "npc",
          message: "Welcome to the United States. Enjoy your stay.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thank you(,)? officer)",
            "(thanks|appreciate it)",
            "(have a (good|nice) (day|one))",
          ],
          hint_tr:
            "Kapanış kibar: 'Thank you, officer.' Türk: 'OK' soğuk, 'officer' saygı.",
        },
      ],
    },
  ],
};

export const usImmigration02: BundledLesson = {
  id: "arc.us_immigration.2",
  skill_id: "arc.us_immigration",
  index: 2,
  title: "Sahne 2 — Officer Wallace ek soru: 'step aside'",
  description: "Officer Wallace daha fazla soru sormak istiyor. Panik etme — net cevap.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.arc.us_immigration.2.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "Could you clarify?",
      tr_translation: "Açıklar mısın?",
      example: "Sorry, could you clarify what you mean?",
      example_tr: "Pardon, ne demek istediğini açıklar mısın?",
    },
    {
      id: "ex.arc.us_immigration.2.2",
      type: "roleplay_chat",
      difficulty: 3,
      scenario_description:
        "Officer ek inceleme istiyor. Sakin, net, dürüst kal. Aşırı açıklama yapma.",
      npc_role: "Officer Wallace (digging deeper)",
      setting: "JFK CBP secondary, small room",
      turns: [
        {
          speaker: "npc",
          message: "I have a few more questions. You said tourism, but you have a laptop and conference materials. Which is it?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(both|honestly)(,)? (a short conference and tourism)",
            "(mostly tourism)(,)? (but i'?m attending (one|a) (day|event))",
            "(let me clarify)",
            "(i should have (said|mentioned) (both)|the conference is only (one|two) (days|sessions))",
            "(the conference is unpaid — networking only)",
          ],
          hint_tr:
            "Düzelt: 'Let me clarify — mostly tourism, one conference day.' Türk: 'I lied' panik, sakin düzeltme.",
        },
        {
          speaker: "npc",
          message: "Why didn't you mention the conference initially?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(honestly|i (apologize|apologise))(,)? (i was (rushed|nervous|jet(-| )?lagged))",
            "(i didn'?t think (one day|networking) counted as business)",
            "(no (intent|attempt) to mislead)",
            "(i thought (tourism|leisure) was the (closer|simpler) answer)",
            "(should i have (declared|filled out) something)",
          ],
          hint_tr:
            "Dürüst + saygılı: 'I apologize — I was jet-lagged, no intent to mislead.' Türk: 'I forget' eksik, sebep + niyet yok.",
        },
        {
          speaker: "npc",
          message: "Who's paying for the conference fee?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(my (company|employer) in (istanbul|turkey))",
            "(i (paid|registered) myself)",
            "(it'?s (free|complimentary) for (community )?attendees)",
            "(i have the (invoice|registration) (in my email|right here))",
            "(no us (entity|company) is paying)",
          ],
          hint_tr:
            "Para kim öder = vize tipi. 'My employer in Istanbul paid.' Türk: 'I don't know' tehlikeli, ödeyen kim açık.",
        },
        {
          speaker: "npc",
          message: "Will you be doing any paid work while here?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(no(,)? (no paid work|nothing paid))",
            "(absolutely not)",
            "(i (continue|stay) on payroll in (istanbul|turkey))",
            "(nothing for (a us employer|us clients))",
            "(i'?m fully aware (that'?s|it'?d be) (not allowed|prohibited))",
          ],
          hint_tr:
            "Net 'no': 'No paid work — I'm aware that's prohibited.' Türk: 'Maybe' tehlikeli, kesin red + farkındalık.",
        },
        {
          speaker: "npc",
          message: "Okay. I'm going to let you through. Be more thorough next time.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thank you(,)? officer)",
            "(understood|i will)",
            "(noted|appreciated|that'?s on me)",
            "(thanks for (your patience|hearing me out))",
            "(have a (good|nice) day)",
          ],
          hint_tr:
            "Sorumluluk: 'Understood — that's on me.' Türk: 'OK thanks' düz, hatayı kabul = saygı.",
        },
      ],
    },
  ],
};

export const usImmigration03: BundledLesson = {
  id: "arc.us_immigration.3",
  skill_id: "arc.us_immigration",
  index: 3,
  title: "Sahne 3 — Bagaj inceleme: Türk yemekleri",
  description: "Customs inceleme — Türk gümüş tatlıları, çay. Beyan + sakinlik.",
  estimated_minutes: 4,
  exercises: [
    {
      id: "ex.arc.us_immigration.3.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "These are gifts for",
      tr_translation: "Bunlar şuna hediye",
      example: "These are gifts for my friend in Brooklyn.",
      example_tr: "Bunlar Brooklyn'deki arkadaşıma hediye.",
    },
    {
      id: "ex.arc.us_immigration.3.2",
      type: "roleplay_chat",
      difficulty: 3,
      scenario_description:
        "Bagaj X-ray sonrası açıldı. Türk lokumu, çay, baklava. Açıkla.",
      npc_role: "Customs agent",
      setting: "JFK customs inspection area",
      turns: [
        {
          speaker: "npc",
          message: "Open the bag. What's in these boxes?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(turkish (delight|lokum)|some sweets)",
            "(black tea|herbal tea)",
            "(baklava|nuts|dried fruit)",
            "(these are (gifts|presents) for)",
            "(all (sealed|packaged|store(-| )?bought))",
          ],
          hint_tr:
            "İçerik + durum: 'Turkish delight, all sealed.' Türk: 'It's food' belirsiz, isim + paket.",
        },
        {
          speaker: "npc",
          message: "Any meat or dairy?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(no(,)? (no meat|no dairy))",
            "(only (sweets|tea|dried) (and|or) nuts)",
            "(nothing fresh)",
            "(i checked the (rules|cbp site) before flying)",
            "(let me know if any of (it|these) are restricted)",
          ],
          hint_tr:
            "Net 'no' + farkındalık: 'No meat or dairy — I checked the CBP site.' Türk: 'I don't know' eksik, hazırlanmış cevap.",
        },
        {
          speaker: "npc",
          message: "Total value?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(around (fifty|forty) dollars)",
            "(maybe \\$\\d+ total)",
            "(well under the (limit|hundred))",
            "(receipts (are )?(in the bag|on my phone))",
            "(less than a hundred (combined|altogether))",
          ],
          hint_tr:
            "Yaklaşık rakam: 'Around fifty dollars total.' Türk: 'I don't know price' tehlikeli, tahmin ver.",
        },
        {
          speaker: "npc",
          message: "Okay. Repack and move along.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thank you|thanks)",
            "(appreciate it)",
            "(have a (good|nice) day)",
            "(am i (good|cleared) to go)",
          ],
          hint_tr:
            "Kapanış: 'Thank you, have a good day.' Türk: kısa + nazik.",
        },
      ],
    },
  ],
};

export const usImmigration04: BundledLesson = {
  id: "arc.us_immigration.4",
  skill_id: "arc.us_immigration",
  index: 4,
  title: "Sahne 4 — USCIS visa extension: randevu açılışı",
  description: "Konferans uzadı. USCIS office, visa extension randevusu. Officer Wallace yine karşında.",
  estimated_minutes: 6,
  exercises: [
    {
      id: "ex.arc.us_immigration.4.1",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "to file an extension",
      tr_translation: "Uzatma başvurusu yapmak",
      example: "I'd like to file for an extension.",
      example_tr: "Bir uzatma başvurusu yapmak istiyorum.",
    },
    {
      id: "ex.arc.us_immigration.4.2",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "USCIS field office, NY. Sıra geldi. Belgelerin hazır. Officer Wallace'a açıkla.",
      npc_role: "Officer Wallace (USCIS desk, recurring)",
      setting: "USCIS New York field office, appointment slot",
      turns: [
        {
          speaker: "npc",
          message: "Take a seat. What are we doing today?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i'?d like to (file (for|an)|apply for) (an )?extension)",
            "(i'?m here to extend (my )?(b(-| )?(1|2)|visitor) (status|visa))",
            "(my (status|i-94) expires)",
            "(this is for (an i(-| )?539|extension))",
            "(i have the forms (filled out|ready))",
          ],
          hint_tr:
            "Açılış: 'I'd like to file for an extension.' Türk: 'I want stay longer' eksik, resmi terim.",
        },
        {
          speaker: "npc",
          message: "Why the extension?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(the conference (was extended|added a second week))",
            "(i was (invited|asked) to (speak|attend) (an additional session))",
            "(family (joining|visiting) for a few more days)",
            "(medical (delay|reason) — i have documentation)",
            "(business (closed|wrapped up) slower than expected)",
          ],
          hint_tr:
            "Spesifik sebep + kanıt: 'Conference added a second week — here's the letter.' Türk: 'I want more time' belirsiz, somut + belge.",
        },
        {
          speaker: "npc",
          message: "How will you support yourself during the extension?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(savings|i have funds)",
            "(my (employer|family) (covers|sponsors))",
            "(bank statements (are |right )?here)",
            "(the (hotel|stay) is prepaid)",
            "(i can show (three months|the funds))",
          ],
          hint_tr:
            "Finansal kanıt: 'Savings — bank statements right here.' Türk: 'I have money' eksik, kanıt + belge.",
        },
        {
          speaker: "npc",
          message: "And your return ticket?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(already (changed|rebooked) — for [a-z]+ \\d+)",
            "(i'?ll (rebook|update) (once|after) (the extension|approval))",
            "(here'?s the (new|updated) itinerary)",
            "(i have (proof of|the )?return)",
            "(my employer (booked|holds) the return)",
          ],
          hint_tr:
            "Dönüş planı: 'Already rebooked for the 15th.' Türk: 'I will go back' belirsiz, somut tarih.",
        },
        {
          speaker: "npc",
          message: "Submit your forms. Processing takes 4-6 weeks.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(understood|noted)",
            "(can i (stay|remain) (legally )?while (it'?s )?pending)",
            "(will i get (a receipt|confirmation))",
            "(what happens if (it'?s denied|i need to leave))",
            "(thanks for (the clarity|walking me through))",
          ],
          hint_tr:
            "Pratik soru: 'Can I stay legally while pending?' Türk: 'OK' düz, gri alanları öğren.",
        },
      ],
    },
  ],
};

export const usImmigration05: BundledLesson = {
  id: "arc.us_immigration.5",
  skill_id: "arc.us_immigration",
  index: 5,
  title: "Sahne 5 — Kayıp pasaport: konsoloshane çağrısı",
  description: "Pasaport kayıp. Türk konsoloshanesi + USCIS info. Acil durum.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.arc.us_immigration.5.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "to report a lost passport",
      tr_translation: "Kayıp pasaport bildirimi yapmak",
      example: "I need to report a lost passport.",
      example_tr: "Kayıp pasaport bildirimi yapmam lazım.",
    },
    {
      id: "ex.arc.us_immigration.5.2",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Türk konsoloshanesini aradın, hızlı işlem lazım. Net + sakin.",
      npc_role: "Turkish consulate emergency line",
      setting: "Phone call to Turkish consulate NYC",
      turns: [
        {
          speaker: "npc",
          message: "Consulate, how can I help?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(hi|good (morning|afternoon))",
            "(i need to report a lost passport)",
            "(i (lost|misplaced) my (turkish )?passport (yesterday|this morning))",
            "(can you (walk me through|guide me on) (next steps|the process))",
            "(this is (urgent|time(-| )?sensitive)) — (my flight is)",
          ],
          hint_tr:
            "Net başlangıç: 'I need to report a lost passport — this is urgent.' Türk: 'Help me' eksik, durum + aciliyet.",
        },
        {
          speaker: "npc",
          message: "Did you file a police report?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|i did)(,)? (this morning|two hours ago)",
            "(not yet — should i (do it|go now))",
            "(i have the (case|report) number)",
            "(at the (nypd|local precinct))",
            "(where (should i|do i) file (one|it))",
          ],
          hint_tr:
            "Belge varsa söyle: 'Yes, I have the case number.' Türk: 'I don't know' kapalı, hazırlık göster.",
        },
        {
          speaker: "npc",
          message: "Okay — you need to come in person. Bring police report, ID, two photos, fee.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(noted|got it)",
            "(let me write (this|that) down)",
            "(what'?s the (earliest|first available) (appointment|slot))",
            "(is there (an emergency|same(-| )?day) option)",
            "(do you accept (card|cash))",
          ],
          hint_tr:
            "Liste tekrar: 'Let me write that down.' Türk: 'OK' düz, listeyi onayla.",
        },
        {
          speaker: "npc",
          message: "Walk-ins for emergencies. Come before 2pm.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i'?ll be (there|on my way) (within the hour|by noon))",
            "(thank you (so much|for the help))",
            "(one more (thing|question))",
            "(can i (board|fly) without (the new one|emergency travel doc))",
            "(any (other|additional) (documents|requirements))",
          ],
          hint_tr:
            "Plan + ek soru: 'I'll be there by noon — one more question.' Türk: 'OK bye' düz, kritik bilgi devam.",
        },
        {
          speaker: "npc",
          message: "Emergency travel doc takes a day. Plan accordingly.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(understood|noted)",
            "(thank you — (this helps a lot|that'?s exactly what i needed))",
            "(i'?ll (move|push) my flight)",
            "(see you (within the hour|shortly))",
            "(appreciate (the clarity|you taking my call))",
          ],
          hint_tr:
            "Kapanış: 'That's exactly what I needed.' Türk: 'OK thanks' düz, sürecin değerini onurla.",
        },
      ],
    },
  ],
};

export const usImmigration06: BundledLesson = {
  id: "arc.us_immigration.6",
  skill_id: "arc.us_immigration",
  index: 6,
  title: "Sahne 6 — Airbnb host'la 30-day rule",
  description: "Airbnb host meraklı: 'Are you a citizen?' Diplomatic + dürüst cevap.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.arc.us_immigration.6.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "I'm here on a visa",
      tr_translation: "Vize ile buradayım",
      example: "I'm here on a tourist visa for a few weeks.",
      example_tr: "Birkaç haftalığına turist vizesi ile buradayım.",
    },
    {
      id: "ex.arc.us_immigration.6.2",
      type: "roleplay_chat",
      difficulty: 3,
      scenario_description:
        "Brooklyn Airbnb. Host kapıyı açtı, sohbete daldı. Saygı + sınır.",
      npc_role: "Airbnb host (curious, friendly)",
      setting: "Brooklyn brownstone, check-in moment",
      turns: [
        {
          speaker: "npc",
          message: "Welcome! Are you staying long? You sound foreign — where you from?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks|hi)(,)? (about (two|three) weeks)",
            "(i'?m from (turkey|istanbul))",
            "(here on a (tourist|business) visa)",
            "(just (visiting|attending a conference))",
            "(this is my (first|second) (time|trip))",
          ],
          hint_tr:
            "Açık + sınırlı: 'Three weeks — here on a tourist visa.' Türk: 'I am Turkish' yetersiz, durumu sınırla.",
        },
        {
          speaker: "npc",
          message: "Turkey — cool! My ex was Turkish. So you a citizen here yet?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(no(,)? (just visiting|tourist visa only))",
            "(haha|nope) — (not yet|not anytime soon)",
            "(i'?m here on a short(-| )?term visa)",
            "(no plans to (settle|emigrate))",
            "(my (life|work) is back in istanbul)",
          ],
          hint_tr:
            "Yumuşak deflect: 'Nope — life is in Istanbul.' Türk: 'No why?' agresif, kibar açıklama.",
        },
        {
          speaker: "npc",
          message: "Ah okay. Are you allowed to work here?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(no — i'?m not allowed to (work|earn) here)",
            "(just tourism|just attending events)",
            "(my (job|paycheck) (is|stays) in (turkey|istanbul))",
            "(it'?d be (against|outside) (my visa|the rules))",
            "(strictly leisure)",
          ],
          hint_tr:
            "Kesin: 'No — strictly leisure.' Türk: 'Maybe' tehlikeli, host hostili olmasa bile kayıtlı duruş.",
        },
        {
          speaker: "npc",
          message: "Right. Anyway — wifi's in the welcome packet. Need anything?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks)(,)? (i'?ll (text|message)) (if i need anything)",
            "(could you recommend (a (coffee|breakfast)) (nearby|on the block))",
            "(all good for now)",
            "(appreciate (the welcome|the warmth))",
            "(thanks (again|so much))",
          ],
          hint_tr:
            "Konuyu değiştir: 'Could you recommend coffee nearby?' Türk: 'OK bye' düz, sohbeti güvenli yere.",
        },
      ],
    },
  ],
};

export const usImmigration07: BundledLesson = {
  id: "arc.us_immigration.7",
  skill_id: "arc.us_immigration",
  index: 7,
  title: "Sahne 7 — Çıkış: 'why was your extension denied?'",
  description: "JFK çıkış. Officer Wallace yine. Extension reddedildi — neden gecikti sor.",
  estimated_minutes: 6,
  exercises: [
    {
      id: "ex.arc.us_immigration.7.1",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "I overstayed by",
      tr_translation: "Şu kadar fazla kaldım",
      example: "I overstayed by three days — here's the documentation.",
      example_tr: "Üç gün fazla kaldım — belgelerim burada.",
    },
    {
      id: "ex.arc.us_immigration.7.2",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Çıkışta CBP secondary. Officer Wallace ekrana bakıyor — extension reddi görünüyor.",
      npc_role: "Officer Wallace (CBP exit, serious)",
      setting: "JFK CBP exit checkpoint, departure",
      turns: [
        {
          speaker: "npc",
          message: "Your extension was denied. You overstayed. Explain.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes officer)(,)? (i'?m aware)",
            "(i overstayed by (three|five) days)",
            "(the denial (notice|letter) (arrived|came) (late|after my original date))",
            "(i have (the (notice|paperwork)|documentation))",
            "(no (intent|attempt) to overstay)",
          ],
          hint_tr:
            "Kabul + kanıt: 'I overstayed by three days — notice came late.' Türk: 'It was not my fault' agresif, kabul + belge.",
        },
        {
          speaker: "npc",
          message: "When did you learn the extension was denied?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i (received|got) the notice on)",
            "(it (showed up|hit my mailbox) (two|four) days ago)",
            "(i (booked|rebooked) the next available flight)",
            "(here'?s the (envelope|timestamp))",
            "(i acted within (\\d+|three) (hours|days))",
          ],
          hint_tr:
            "Zaman çizelgesi: 'Notice arrived two days ago — booked next flight.' Türk: 'I don't remember' belirsiz, somut + hızlı tepki.",
        },
        {
          speaker: "npc",
          message: "Why didn't you depart on your original date as a precaution?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(fair (question|point))",
            "(in (hindsight|retrospect))(,)? (i should have)",
            "(uscis (guidance|website) (said|stated) (i could stay (while )?pending))",
            "(i (took|followed) (the official|that) guidance)",
            "(i acknowledge (the lapse|the mistake))",
          ],
          hint_tr:
            "Resmi rehber + özeleştiri: 'In hindsight, I should have left earlier.' Türk: 'I followed rules' defansif, kabul.",
        },
        {
          speaker: "npc",
          message: "This will be on your record. May affect future entries.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(understood|i (understand|accept) that)",
            "(is there (a way to|anything i can do to) (mitigate|appeal))",
            "(should i (file|submit) anything (proactively|in writing))",
            "(thank you for (explaining|being direct))",
            "(i'?ll (consult|reach out to) an (immigration )?attorney)",
          ],
          hint_tr:
            "Kabul + sonraki adım: 'Should I file anything proactively?' Türk: 'Please don't' yalvarış, prosedür sor.",
        },
        {
          speaker: "npc",
          message: "Consult an attorney. You may proceed today.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thank you(,)? officer)",
            "(appreciate (the time|the professionalism))",
            "(noted — i'?ll (follow up|consult counsel))",
            "(have a (good|safe) (day|shift))",
          ],
          hint_tr:
            "Saygılı kapanış: 'Appreciate the professionalism.' Türk: 'Thanks bye' düz, durum ciddi, ton ciddi.",
        },
      ],
    },
  ],
};

export const usImmigration08: BundledLesson = {
  id: "arc.us_immigration.8",
  skill_id: "arc.us_immigration",
  index: 8,
  title: "Sahne 8 — Yeniden giriş: 6 ay sonra",
  description: "Hata sonrası yeniden başvuru. Officer Wallace son kez — geçmişi anlat.",
  estimated_minutes: 6,
  exercises: [
    {
      id: "ex.arc.us_immigration.8.1",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "I learned from that",
      tr_translation: "Ondan ders aldım",
      example: "I overstayed once — I learned from that.",
      example_tr: "Bir kez fazla kaldım — ondan ders aldım.",
    },
    {
      id: "ex.arc.us_immigration.8.2",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "6 ay sonra JFK. Wallace seni tanıdı. Açık, hazırlıklı, dürüst.",
      npc_role: "Officer Wallace (CBP, remembers you)",
      setting: "JFK CBP, return visit",
      turns: [
        {
          speaker: "npc",
          message: "I remember you. Last time was complicated.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes officer)(,)? (i remember (too|as well))",
            "(i (came|came back) prepared this time)",
            "(thanks for (recognizing|remembering))",
            "(i'?ve (taken steps|consulted counsel) since)",
            "(i have (everything|the documentation) (in order|here))",
          ],
          hint_tr:
            "Kabul: 'I came prepared this time.' Türk: 'I don't remember' kaçış, hatırla + hazırlık.",
        },
        {
          speaker: "npc",
          message: "What's different this time?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i'?m (only here|staying) for (\\d+|five) days)",
            "(no extensions (planned|considered))",
            "(return ticket (already )?(booked|here))",
            "(i consulted (an immigration )?attorney before (this )?trip)",
            "(everything (over(-| )?documented|thoroughly documented))",
          ],
          hint_tr:
            "Somut farklar: 'Five days only, return ticket here, attorney consulted.' Türk: 'I'm careful now' belirsiz, liste.",
        },
        {
          speaker: "npc",
          message: "Did you address the overstay on record?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|i did)",
            "(i (filed|submitted) (a |an )?(explanation|nunc pro tunc))",
            "(my attorney (filed|wrote) (a letter|the response))",
            "(here'?s the (receipt|confirmation))",
            "(i learned from that)",
          ],
          hint_tr:
            "Kanıt + öğrenme: 'I learned from that.' Türk: 'It's not my fault' defansif, sahiplen + belge.",
        },
        {
          speaker: "npc",
          message: "Honesty helps. Anything else I should know?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(no(,)? (everything'?s|it'?s) (on the table|disclosed))",
            "(i'?ve (nothing|no information) to hide)",
            "(i (appreciate|value) (the chance to|being able to) (return|come back))",
            "(happy to answer (anything|more questions))",
            "(my (record|file) is (open|transparent))",
          ],
          hint_tr:
            "Şeffaflık: 'Nothing to hide — record is open.' Türk: 'Just trust me' eksik, açıklık göster.",
        },
        {
          speaker: "npc",
          message: "Welcome back. Five days. Don't make me regret it.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(you won'?t|i won'?t)",
            "(thank you (so much|officer))",
            "(this means a lot)",
            "(appreciate the (second chance|trust))",
            "(i'?ll (be out|fly out) on time)",
          ],
          hint_tr:
            "Onur: 'I appreciate the second chance.' Türk: 'OK thanks' düz, fırsatın değerini anla.",
        },
      ],
    },
  ],
};

// ============================================================
// ARC 6 — DOCTOR VISIT IN ENGLISH COUNTRY (8 sahne)
// Recurring NPCs: Dr. Patel (GP), Nurse Karen
// ============================================================

export const doctorVisit01: BundledLesson = {
  id: "arc.doctor_visit.1",
  skill_id: "arc.doctor_visit",
  index: 1,
  title: "Sahne 1 — Resepsiyon: kayıt + sigorta",
  description: "GP surgery resepsiyonu. Walk-in. Sigorta kartı + form.",
  estimated_minutes: 4,
  exercises: [
    {
      id: "ex.arc.doctor_visit.1.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "I have an appointment with",
      tr_translation: "Şununla randevum var",
      example: "I have an appointment with Dr. Patel at 10.",
      example_tr: "Dr. Patel ile 10'da randevum var.",
    },
    {
      id: "ex.arc.doctor_visit.1.2",
      type: "roleplay_chat",
      difficulty: 2,
      scenario_description:
        "GP surgery, sabah 9:50. Resepsiyonist Nurse Karen. Sıra sende.",
      npc_role: "Nurse Karen (reception, warm)",
      setting: "GP surgery reception, Tuesday morning",
      turns: [
        {
          speaker: "npc",
          message: "Morning — name and appointment?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(morning|hi)",
            "([a-z]+)(,)? (10am|at ten)",
            "(i have an appointment with (dr )?patel)",
            "(first(-| )?time (here|patient))",
            "(my name'?s [a-z]+)",
          ],
          hint_tr:
            "Açılış: 'Hi — name, 10am with Dr. Patel.' Türk: 'Hello I come' uzun, kısa veri.",
        },
        {
          speaker: "npc",
          message: "Got you. Do you have your insurance card?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|here you go)",
            "(here'?s (the card|my insurance))",
            "(i (have|got) (private|nhs|travel) (insurance|coverage))",
            "(let me (grab|pull) it (out|up))",
            "(it'?s on (my phone|the app))",
          ],
          hint_tr:
            "Belge uzat: 'Here you go.' Türk: 'Yes I have' eksik, fiziksel hareket + dil.",
        },
        {
          speaker: "npc",
          message: "Fill in this form. Take a seat — Dr. Patel will call you.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks)",
            "(any (sections|fields) i can (skip|leave))",
            "(should i (write|include) (my passport (number|details)))",
            "(approximately how long is the wait)",
            "(appreciate it)",
          ],
          hint_tr:
            "Form sor: 'Any sections I can skip?' Türk: 'OK' düz, belirsizlikleri sor.",
        },
        {
          speaker: "npc",
          message: "Skip anything that doesn't apply. About 10 minutes wait.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks)",
            "(got it)",
            "(i'?ll be in the (waiting room|chair))",
            "(appreciate the (info|help))",
          ],
          hint_tr:
            "Kapanış: 'Got it — I'll be in the waiting room.' Türk: 'OK' düz, nereye gideceğini söyle.",
        },
      ],
    },
  ],
};

export const doctorVisit02: BundledLesson = {
  id: "arc.doctor_visit.2",
  skill_id: "arc.doctor_visit",
  index: 2,
  title: "Sahne 2 — Dr. Patel: 'what brings you in?'",
  description: "Muayene odasında. Dr. Patel sorunu öğrenmek istiyor. Spesifik ol.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.arc.doctor_visit.2.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "It's been going on for",
      tr_translation: "Şu kadar süredir devam ediyor",
      example: "It's been going on for about a week.",
      example_tr: "Yaklaşık bir haftadır devam ediyor.",
    },
    {
      id: "ex.arc.doctor_visit.2.2",
      type: "roleplay_chat",
      difficulty: 3,
      scenario_description:
        "Muayene odası. Dr. Patel sandalyede, not defteri. Şikayetini anlat.",
      npc_role: "Dr. Patel (GP, calm, asks structured questions)",
      setting: "GP consultation room, first visit",
      turns: [
        {
          speaker: "npc",
          message: "So — what brings you in today?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i'?ve been having (a sore throat|stomach pain|headaches))",
            "(i'?ve had (a |this )?(cough|fever|rash))",
            "(my (throat|stomach|back) (hurts|has been (sore|painful)))",
            "(it'?s been (going on|happening) for (a week|five days))",
            "(persistent (cough|nausea|fatigue))",
          ],
          hint_tr:
            "Şikayet + süre: 'A sore throat — about a week.' Türk: 'I am sick' belirsiz, somut + süre.",
        },
        {
          speaker: "npc",
          message: "How would you describe the pain — sharp, dull, throbbing?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(more (dull|sharp|burning) (than|like))",
            "(it'?s a (throbbing|stabbing|aching) (pain|feeling))",
            "(comes and goes|on and off)",
            "(worse (in the morning|after eating|at night))",
            "(it (radiates|spreads) (to|toward) (my (neck|shoulder)))",
          ],
          hint_tr:
            "Ağrı kalibresi: 'Throbbing, worse in the morning.' Türk: 'It hurts' yetersiz, sıfat + zaman.",
        },
        {
          speaker: "npc",
          message: "On a scale of 1 to 10?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(about|maybe) (a )?(\\d+|seven|five|four)",
            "(\\d+ out of ten|six out of ten)",
            "(varies (between|from)) \\d+ (to|and) \\d+",
            "(a (solid|tough) (six|seven))",
            "(annoying not unbearable)",
          ],
          hint_tr:
            "Sayı: 'A solid six.' Türk: 'It is bad' kapalı, 1-10 evrensel.",
        },
        {
          speaker: "npc",
          message: "Any fever, nausea, anything else?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(no (fever|nausea) — just (the cough|the pain))",
            "(yes|some) (mild fever|fatigue|loss of appetite)",
            "(only (when i|after i)) (eat|drink) (something))",
            "(no other symptoms)",
            "(now that you mention it — (slight )?(dizziness|chills))",
          ],
          hint_tr:
            "Ek belirti tara: 'Now that you mention it — slight dizziness.' Türk: 'I don't know' kapalı, listeyi tara.",
        },
        {
          speaker: "npc",
          message: "Any medications? Allergies?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(only (paracetamol|ibuprofen) for (the pain|fever))",
            "(i'?m on (no medications|nothing regular))",
            "(allergic to (penicillin|nuts|nothing))",
            "(no known allergies)",
            "(i (take|use) (a multivitamin|antihistamines (seasonally)?))",
          ],
          hint_tr:
            "Liste: 'Allergic to penicillin.' Türk: 'I don't take' eksik, açık liste.",
        },
        {
          speaker: "npc",
          message: "Let's have a look. Open your mouth, please.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(of course|sure)",
            "(go ahead)",
            "(let me know if you need (me to|anything))",
            "(should i (lean back|sit forward))",
          ],
          hint_tr:
            "İşbirliği: 'Should I lean back?' Türk: 'OK' düz, doktora yardım sor.",
        },
      ],
    },
  ],
};

export const doctorVisit03: BundledLesson = {
  id: "arc.doctor_visit.3",
  skill_id: "arc.doctor_visit",
  index: 3,
  title: "Sahne 3 — Diagnosis + reçete: 'I'd like a second opinion?'",
  description: "Dr. Patel teşhis verdi. Anlamadığını söyle, ikinci görüş iste.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.arc.doctor_visit.3.1",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "Could you walk me through",
      tr_translation: "Bunu açıklar mısın",
      example: "Could you walk me through the treatment?",
      example_tr: "Tedaviyi adım adım açıklar mısın?",
    },
    {
      id: "ex.arc.doctor_visit.3.2",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Dr. Patel teşhis koydu — sinüsit. Açıkla iste, alternatifleri sor.",
      npc_role: "Dr. Patel (explaining diagnosis)",
      setting: "GP consultation, diagnosis phase",
      turns: [
        {
          speaker: "npc",
          message: "Looks like a sinus infection. I'll prescribe antibiotics.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(okay)",
            "(could you (walk me through|explain) (the (next steps|treatment)))",
            "(what'?s the (course|duration))",
            "(any (side effects|alternatives) i should (know|consider))",
            "(do i (definitely|absolutely) need (antibiotics|them))",
          ],
          hint_tr:
            "Açıklama iste: 'Could you walk me through it?' Türk: 'OK' pasif, soru sor.",
        },
        {
          speaker: "npc",
          message: "Seven days. Twice daily. Side effects: mild stomach upset, possibly drowsiness.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(noted|got it)",
            "(should i (take it|have it) with (food|water))",
            "(can i (drive|drink alcohol))",
            "(what if (the side effects|i feel) (worsen|are severe))",
            "(when should i (see improvement|expect (it to|to feel) better))",
          ],
          hint_tr:
            "Pratik soru: 'With food? Can I drive?' Türk: 'OK' düz, yaşam fonksiyonu sor.",
        },
        {
          speaker: "npc",
          message: "With food. No alcohol. If symptoms worsen — come back.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(understood|will do)",
            "(actually — would (it be okay|you mind) if i (got|sought) (a )?second opinion)",
            "(i (just want to|like to) be (thorough|certain))",
            "(no offense — (it'?s a habit|i'?m new to this system))",
            "(could you (recommend|refer me to) a specialist)",
          ],
          hint_tr:
            "İkinci görüş iste: 'Would you mind if I sought a second opinion?' Türk: 'I don't trust' agresif, kibar + niyet.",
        },
        {
          speaker: "npc",
          message: "Of course — not at all. I can refer you to ENT if you'd like.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thank you (for understanding|so much))",
            "(that would be (helpful|great))",
            "(can i (start|wait on) the antibiotics (in the meantime|until then))",
            "(no rush — just (peace of mind|due diligence))",
            "(appreciate (you not taking it personally|the openness))",
          ],
          hint_tr:
            "Minnet: 'Thanks for not taking it personally.' Türk: 'OK thanks' düz, ilişkiyi koru.",
        },
      ],
    },
  ],
};

export const doctorVisit04: BundledLesson = {
  id: "arc.doctor_visit.4",
  skill_id: "arc.doctor_visit",
  index: 4,
  title: "Sahne 4 — Nurse Karen ile injection: 'will it hurt?'",
  description: "Karen aşı yapacak. Türk korkusu — net konuş, sakin kal.",
  estimated_minutes: 4,
  exercises: [
    {
      id: "ex.arc.doctor_visit.4.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "I'm a bit nervous about",
      tr_translation: "Bu konuda biraz tedirginim",
      example: "I'm a bit nervous about needles.",
      example_tr: "İğnelerden biraz tedirginim.",
    },
    {
      id: "ex.arc.doctor_visit.4.2",
      type: "roleplay_chat",
      difficulty: 3,
      scenario_description:
        "Treatment odası. Karen iğne hazırlıyor. Dürüst — endişeni söyle.",
      npc_role: "Nurse Karen (injection, friendly)",
      setting: "Treatment room, preparing for injection",
      turns: [
        {
          speaker: "npc",
          message: "Right — sleeve up. Have you had this jab before?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(no|never)",
            "(first time)",
            "(i had (the other one|a flu shot) (last year|years ago))",
            "(i'?m a bit nervous about (needles|injections))",
            "(can you (warn me|count) before)",
          ],
          hint_tr:
            "Dürüst: 'I'm nervous about needles.' Türk: 'I'm fine' bastırma, dürüst = bakım.",
        },
        {
          speaker: "npc",
          message: "Totally normal. Will it hurt? Honestly, a quick pinch.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(okay|that helps)",
            "(should i (look away|distract myself))",
            "(thanks for (the honesty|warning))",
            "(let'?s (just|get this) (do it|over with))",
            "(can i (have a moment|breathe (first|deep)))",
          ],
          hint_tr:
            "Strateji: 'Should I look away?' Türk: 'OK' pasif, başa çıkma sor.",
        },
        {
          speaker: "npc",
          message: "Take a deep breath. Three, two, one.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(okay|i'?m ready)",
            "(breathing|here we go)",
            "(quick (one|pinch))",
            "(that wasn'?t (bad|so bad))",
            "(thank you|done)",
          ],
          hint_tr:
            "Hızlı tepki: 'That wasn't so bad!' Türk: 'OK' düz, doğal hafifletme.",
        },
        {
          speaker: "npc",
          message: "All done. Any side effects to watch for?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(what should i (watch for|expect))",
            "(any (common|typical) reactions)",
            "(when do (i call|i come back) if)",
            "(can i (work out|drive|drink) after)",
            "(thanks)",
          ],
          hint_tr:
            "Sonrası sor: 'What should I watch for?' Türk: 'OK thanks' düz, post-care.",
        },
        {
          speaker: "npc",
          message: "Some soreness. If you spike a fever over 38, call us.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(noted|got it)",
            "(thanks (karen|so much))",
            "(over 38 — i'?ll (call|come in))",
            "(appreciate (the calm|being so patient))",
          ],
          hint_tr:
            "Minnet: 'Appreciate the calm.' Türk: 'Thanks bye' düz, samimi ekle.",
        },
      ],
    },
  ],
};

export const doctorVisit05: BundledLesson = {
  id: "arc.doctor_visit.5",
  skill_id: "arc.doctor_visit",
  index: 5,
  title: "Sahne 5 — Eczane: 'is this safe with my other meds?'",
  description: "Eczane. Reçete + OTC. Eczacıya etkileşim sor.",
  estimated_minutes: 4,
  exercises: [
    {
      id: "ex.arc.doctor_visit.5.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "Is this safe to take with",
      tr_translation: "Şununla almak güvenli mi",
      example: "Is this safe to take with ibuprofen?",
      example_tr: "İbuprofenle birlikte almak güvenli mi?",
    },
    {
      id: "ex.arc.doctor_visit.5.2",
      type: "roleplay_chat",
      difficulty: 3,
      scenario_description:
        "Boots eczanesi. Reçetelerini uzattın. Bir de OTC al — etkileşim sor.",
      npc_role: "Pharmacist (Boots, helpful)",
      setting: "Boots pharmacy counter, after GP visit",
      turns: [
        {
          speaker: "npc",
          message: "Got your prescription. Anything else?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|actually)(,)? (something for (a sore throat|cough|congestion))",
            "(could you (recommend|suggest) (a (cough|throat) (syrup|lozenge)))",
            "(is (paracetamol|ibuprofen) safe with (these|the antibiotics))",
            "(any (otc|over the counter) (decongestants|sprays))",
            "(what'?s (best|safest) for (sleep|congestion))",
          ],
          hint_tr:
            "Ek istek + soru: 'Could you recommend something — is it safe with these?' Türk: 'I need medicine' belirsiz, somut.",
        },
        {
          speaker: "npc",
          message: "These lozenges work well. Won't interact.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(great|perfect)",
            "(how often (can|should) i (take|use) (them|these))",
            "(any (sugar(-| )?free|alcohol(-| )?free) options)",
            "(can i (combine|alternate) (with paracetamol|with something))",
            "(safe (during the day|to drive on))",
          ],
          hint_tr:
            "Pratik soru: 'Can I combine with paracetamol?' Türk: 'OK' düz, dozaj sor.",
        },
        {
          speaker: "npc",
          message: "Up to six a day. Drowsy version exists if you'd prefer.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i'?ll (skip|pass on) the drowsy)",
            "(the non(-| )?drowsy is better — i'?m at work)",
            "(could i (try|get) (both|the drowsy for nights))",
            "(thanks for (the heads(-| )?up|the options))",
            "(that'?s it|that'?s all)",
          ],
          hint_tr:
            "Tercih: 'Non-drowsy — I'm at work.' Türk: 'OK' düz, hayat tarzına göre seç.",
        },
        {
          speaker: "npc",
          message: "That'll be £12.50. Pay at the till.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks)",
            "(card or contactless)",
            "(can i (get|have) a receipt for insurance)",
            "(appreciate the (help|advice))",
            "(have a (good|nice) one)",
          ],
          hint_tr:
            "Ödeme: 'Card — can I get a receipt for insurance?' Türk: 'OK bye' düz, fatura iste.",
        },
      ],
    },
  ],
};

export const doctorVisit06: BundledLesson = {
  id: "arc.doctor_visit.6",
  skill_id: "arc.doctor_visit",
  index: 6,
  title: "Sahne 6 — Karen geri arıyor: kan testi sonuçları",
  description: "Karen seni aradı — sonuçlarda bir anomali. Sakin dinle, sor.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.arc.doctor_visit.6.1",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "Should I be worried?",
      tr_translation: "Endişelenmeli miyim?",
      example: "Should I be worried about the results?",
      example_tr: "Sonuçlar için endişelenmeli miyim?",
    },
    {
      id: "ex.arc.doctor_visit.6.2",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Telefon. Karen sonuçları söylüyor — vitamin D düşük + bir flag. Sakin sor.",
      npc_role: "Nurse Karen (delivering results by phone)",
      setting: "Phone call, mid-afternoon",
      turns: [
        {
          speaker: "npc",
          message: "Hi — your blood work is back. Mostly fine, but a couple of flags.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(okay|i'?m listening)",
            "(go ahead)",
            "(what (came up|stood out))",
            "(should i be (worried|concerned))",
            "(thanks for (the call|reaching out so soon))",
          ],
          hint_tr:
            "Sakin: 'Okay — go ahead.' Türk: panik soru, dinleme moduna geç.",
        },
        {
          speaker: "npc",
          message: "Your vitamin D is very low. And one inflammation marker is mildly elevated.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(what does (that|mildly elevated) (mean|imply))",
            "(is (the inflammation|that) (concerning|something serious))",
            "(could it be (linked to|from) the (sinus|infection))",
            "(any (next steps|further tests))",
            "(how do i (address|raise) the (vitamin d|d))",
          ],
          hint_tr:
            "Açıklama iste: 'What does that mean?' Türk: 'OK' panik, somut soru.",
        },
        {
          speaker: "npc",
          message: "Likely just the infection. Dr. Patel wants you to retest in two weeks.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(noted|will do)",
            "(can i (book|schedule) the retest now)",
            "(should i (start|take) (vitamin d|supplements))",
            "(any (lifestyle|dietary) changes)",
            "(should i (worry|be concerned) in the meantime)",
          ],
          hint_tr:
            "Aksiyon + endişe: 'Should I start vitamin D?' Türk: 'OK' pasif, somut adım.",
        },
        {
          speaker: "npc",
          message: "Start a daily D3 — 1000 IU. And rest. We'll know more in two weeks.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks (karen|for the call))",
            "(noted — d3 daily)",
            "(should i (avoid|skip) (anything|exercise))",
            "(if symptoms (return|change) — should i call)",
            "(appreciate (the warmth|you walking me through))",
          ],
          hint_tr:
            "Plan onayı: 'D3 daily — noted.' Türk: 'OK thanks' düz, tekrar et = anladım.",
        },
        {
          speaker: "npc",
          message: "Call us anytime. Take care.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thank you (so much|again))",
            "(have a (good|nice) (afternoon|one))",
            "(speak soon)",
          ],
          hint_tr:
            "Kapanış: 'Speak soon.' Türk: 'Bye' düz, doktor ilişkisi devam.",
        },
      ],
    },
  ],
};

export const doctorVisit07: BundledLesson = {
  id: "arc.doctor_visit.7",
  skill_id: "arc.doctor_visit",
  index: 7,
  title: "Sahne 7 — ER: 'I think I'm having an allergic reaction'",
  description: "Acil servis. Yeni ilaca alerji. Hızlı, net, hayati bilgi.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.arc.doctor_visit.7.1",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "I think I'm having a reaction",
      tr_translation: "Sanırım bir reaksiyon yaşıyorum",
      example: "I think I'm having an allergic reaction to the antibiotics.",
      example_tr: "Sanırım antibiyotiğe alerjik reaksiyon yaşıyorum.",
    },
    {
      id: "ex.arc.doctor_visit.7.2",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "A&E (ER) triage. Yüzünde kızarıklık, soluk daralıyor. Çabuk net konuş.",
      npc_role: "ER triage nurse",
      setting: "A&E triage desk, evening, urgent",
      turns: [
        {
          speaker: "npc",
          message: "What's going on?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i think i'?m having (a|an) (allergic )?reaction)",
            "(rash on (my face|my arms))",
            "(my (throat|lips) (feel|are) (tight|swelling))",
            "(breathing (is getting|feels) (harder|tight))",
            "(took (a new antibiotic|amoxicillin) (an hour|two hours) ago)",
          ],
          hint_tr:
            "Hızlı + spesifik: 'Allergic reaction — took amoxicillin an hour ago.' Türk: 'I feel bad' kapalı, somut.",
        },
        {
          speaker: "npc",
          message: "When did it start?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(about (twenty|thirty) minutes ago)",
            "(within (an hour|forty minutes) of (taking|the dose))",
            "(started (slow|with the rash) — then (worsened|spread))",
            "(progressing fast)",
            "(i'?ve been (getting|feeling) worse (the last|in the past) (\\d+|fifteen) minutes)",
          ],
          hint_tr:
            "Zaman çizelgesi: 'Twenty minutes ago — progressing fast.' Türk: 'Just now' yetersiz, dakika + trend.",
        },
        {
          speaker: "npc",
          message: "Any history of allergies?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(no known allergies before)",
            "(this is the first (reaction|time))",
            "(i (had|got) penicillin once — fine)",
            "(none on (file|record))",
            "(no (epi(-| )?pen|history))",
          ],
          hint_tr:
            "Geçmiş: 'No known allergies before — this is the first.' Türk: 'I don't remember' yetersiz, ER'da net.",
        },
        {
          speaker: "npc",
          message: "Sit down. We're getting you back now. Any breathing trouble — tell me immediately.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(okay|will do)",
            "(it'?s getting (harder|tighter))",
            "(throat (still )?(tightening|tight))",
            "(can'?t (take a full|breathe deep) breath)",
            "(rash spreading)",
          ],
          hint_tr:
            "Sürekli rapor: 'It's getting tighter.' Türk: 'I'm fine' bastırma, sürekli güncelle.",
        },
        {
          speaker: "npc",
          message: "Hold tight. Doctor's coming. We'll give you epinephrine.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(okay|thank you)",
            "(thanks for moving (fast|quickly))",
            "(my (partner|emergency contact) is [a-z]+ — (number|please call) ...)",
            "(i'?m on antibiotics — (please log|note))",
            "(do what you need (to do)?)",
          ],
          hint_tr:
            "Acil bilgi: 'My emergency contact is...' Türk: panik, evden kim aranacak söyle.",
        },
      ],
    },
  ],
};

export const doctorVisit08: BundledLesson = {
  id: "arc.doctor_visit.8",
  skill_id: "arc.doctor_visit",
  index: 8,
  title: "Sahne 8 — Follow-up: Dr. Patel ile sonuç değerlendirme",
  description: "ER sonrası Dr. Patel ile takip. Olanları özetle, ileriyi planla.",
  estimated_minutes: 6,
  exercises: [
    {
      id: "ex.arc.doctor_visit.8.1",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "to flag in my file",
      tr_translation: "Dosyaya not düşmek",
      example: "Could you flag the allergy in my file?",
      example_tr: "Alerjiyi dosyama not düşer misin?",
    },
    {
      id: "ex.arc.doctor_visit.8.2",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Dr. Patel'in odası, bir hafta sonra. Sakin, hazırlıklı. Geleceği planla.",
      npc_role: "Dr. Patel (post-ER follow-up, apologetic)",
      setting: "GP consultation, one week after ER visit",
      turns: [
        {
          speaker: "npc",
          message: "I'm so sorry about what happened. Are you feeling better?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks for asking|i appreciate it)",
            "(much better now|fully recovered)",
            "(still (a bit )?(shaken|tired) but stable)",
            "(no need to apologize — (it wasn'?t (predictable|on file))|(it happens))",
            "(i wanted to (talk through|debrief))",
          ],
          hint_tr:
            "Olgun: 'No need to apologize — wasn't predictable.' Türk: 'It's OK' yetersiz, doktoru rahatla.",
        },
        {
          speaker: "npc",
          message: "Did the ER discharge with a plan?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|they (gave|sent) me a (summary|discharge note))",
            "(no more penicillin(-| )?based (drugs|antibiotics))",
            "(epi(-| )?pen prescribed)",
            "(they (recommend|suggested) allergy testing)",
            "(i have the (notes|paperwork) (here|with me))",
          ],
          hint_tr:
            "Plan özeti: 'Epi-pen prescribed, allergy testing recommended.' Türk: 'They said something' eksik, somut.",
        },
        {
          speaker: "npc",
          message: "Good. I'll refer you to allergy specialist. Anything else worrying you?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(could you (flag|add) (the allergy|this) (in|to) my file)",
            "(should i (carry|wear) (a medic alert|something))",
            "(when can i (resume|return to) (normal life|exercise))",
            "(what (other|similar) (drugs|medications) should i avoid)",
            "(i (want to|wanted to) (understand|map out) (triggers))",
          ],
          hint_tr:
            "Sistematik: 'Could you flag this in my file?' Türk: 'OK' pasif, takım çalışması.",
        },
        {
          speaker: "npc",
          message: "Flagged already. I'll print a list of related drugs to avoid.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thank you|appreciate (it|that))",
            "(that'?s (proactive|exactly what i needed))",
            "(should i (share|carry) (the list|a copy))",
            "(any (lifestyle|food) (triggers|advice))",
            "(this (helps|reassures me) (a lot))",
          ],
          hint_tr:
            "Minnet: 'That's proactive.' Türk: 'OK thanks' düz, doktor inisiyatifini onurla.",
        },
        {
          speaker: "npc",
          message: "Come back in a month. Any questions — call. Don't hesitate.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thank you (so much|dr patel))",
            "(this whole experience — (i'?ve|i feel) (well taken care of|grateful))",
            "(i (will|definitely) come back)",
            "(thanks for (everything|the follow(-| )?through))",
            "(see you in a month)",
          ],
          hint_tr:
            "Hasta-doktor ilişki: 'Well taken care of.' Türk: 'Thanks bye' düz, ilişki kalitesi.",
        },
      ],
    },
  ],
};

// ============================================================
// ARC 7 — APARTMENT HUNTING LONDON (8 sahne)
// Recurring NPCs: Daniel (estate agent), Mrs. Pemberton (landlord)
// ============================================================

export const apartmentHunt01: BundledLesson = {
  id: "arc.apartment_hunt.1",
  skill_id: "arc.apartment_hunt",
  index: 1,
  title: "Sahne 1 — Daniel'a ilk arama: budget + criteria",
  description: "Foxtons Shoreditch. Daniel telefonda — bütçeni ve kriterlerini söyle.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.arc.apartment_hunt.1.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "My budget is around",
      tr_translation: "Bütçem yaklaşık şu",
      example: "My budget is around £1500 per month.",
      example_tr: "Bütçem aylık yaklaşık 1500 sterlin.",
    },
    {
      id: "ex.arc.apartment_hunt.1.2",
      type: "roleplay_chat",
      difficulty: 3,
      scenario_description:
        "Daniel ile telefon görüşmesi. Hızlı sorular — net cevaplar lazım.",
      npc_role: "Daniel (estate agent, efficient)",
      setting: "Phone call to Foxtons Shoreditch, Tuesday morning",
      turns: [
        {
          speaker: "npc",
          message: "Foxtons, Daniel speaking. What can I help with?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(hi|hello) (daniel)",
            "(i'?m looking (for|to rent) a (one(-| )?bed|studio))",
            "(starting (next month|in october))",
            "(could you (walk me through|tell me about)) (your listings|available units)",
            "(new to (london|the area) — need (a place|something))",
          ],
          hint_tr:
            "Net açılış: 'Looking for a one-bed, starting next month.' Türk: 'I need house' eksik, oda + zaman.",
        },
        {
          speaker: "npc",
          message: "Sure — budget?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(my budget is around) (£\\d+|fifteen hundred|two thousand))",
            "(up to (£\\d+|two grand) (pcm|a month))",
            "(somewhere (between) £\\d+ (and|to) £\\d+)",
            "(i'?d like to (stay under|cap at) £\\d+)",
            "(flexible — depends on (location|the place))",
          ],
          hint_tr:
            "Bütçe: 'Up to £1800 PCM.' Türk: 'Not much' belirsiz, sayı + 'PCM' = per calendar month.",
        },
        {
          speaker: "npc",
          message: "Areas you're looking at?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(shoreditch|hackney|dalston|angel))",
            "(zone (1|2) (ideally|preferably))",
            "(close to (liverpool street|the office in shoreditch))",
            "(commute under (\\d+|twenty) minutes)",
            "(open to suggestions — i'?m (still mapping|new))",
          ],
          hint_tr:
            "Bölge: 'Zone 1 or 2, near Liverpool Street.' Türk: 'Center' belirsiz, semt + bölge.",
        },
        {
          speaker: "npc",
          message: "Move-in date?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(first of (next month|october))",
            "(flexible — anywhere from (the 1st|mid-month))",
            "(asap if (the place|right))",
            "(start of [a-z]+)",
            "(i'?ve got (two|three) weeks before)",
          ],
          hint_tr:
            "Tarih: 'Flexible — first of October ideally.' Türk: 'Soon' belirsiz, ay + esneklik.",
        },
        {
          speaker: "npc",
          message: "I'll send three options today. Want to view this weekend?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|absolutely)",
            "(saturday (works|is good))",
            "(send me the (addresses|listings) first)",
            "(can we (do back-to-back|line them up))",
            "(thanks (daniel|in advance))",
          ],
          hint_tr:
            "Plan: 'Can we do back-to-back?' Türk: 'OK' düz, verimli zaman planı.",
        },
      ],
    },
  ],
};

export const apartmentHunt02: BundledLesson = {
  id: "arc.apartment_hunt.2",
  skill_id: "arc.apartment_hunt",
  index: 2,
  title: "Sahne 2 — İlk viewing: 'this isn't quite what I expected'",
  description: "Daniel ilk daireyi gösteriyor. İlanda yazandan farklı. Diplomatic feedback.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.arc.apartment_hunt.2.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "It's smaller than I expected",
      tr_translation: "Beklediğimden küçük",
      example: "Honestly, it's smaller than I expected.",
      example_tr: "Açıkçası beklediğimden küçük.",
    },
    {
      id: "ex.arc.apartment_hunt.2.2",
      type: "roleplay_chat",
      difficulty: 3,
      scenario_description:
        "Hackney 1-bed. İçeri girdin — küçük, eski. Daniel beklentide. Dürüst + saygılı.",
      npc_role: "Daniel (estate agent, gauging your reaction)",
      setting: "First flat viewing, Hackney, Saturday 11am",
      turns: [
        {
          speaker: "npc",
          message: "So — what do you think? Cosy, right?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(honestly|to be honest)(,)? (smaller than i expected)",
            "(it'?s (compact|tight))",
            "(the (kitchen|bathroom) is (tinier|cramped))",
            "(the listing (looked|seemed) (more spacious|bigger))",
            "(cosy is one word — (cramped|tiny) is another)",
          ],
          hint_tr:
            "Dürüst: 'Cosy is one word — cramped is another.' Türk: 'Not good' kapalı, mizahlı dürüstlük.",
        },
        {
          speaker: "npc",
          message: "Fair. What's a dealbreaker?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(no (natural light|window in the kitchen))",
            "(no (washer|dishwasher|storage))",
            "(the (kitchen|bedroom) (size|layout) (kills it|won'?t work))",
            "(mould|damp|the smell)",
            "(too far from (the tube|station))",
          ],
          hint_tr:
            "Dealbreaker net: 'No washer — won't work.' Türk: 'I don't like' belirsiz, somut neden.",
        },
        {
          speaker: "npc",
          message: "Got it. What's must-have for the next ones?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(natural light|south(-| )?facing)",
            "(washer in (the unit|the flat))",
            "(real kitchen — (not a kitchenette|enough counter space))",
            "(under (\\d+|fifteen) minutes (walk )?from (the tube|the station))",
            "(separate bedroom — (no studios|not open(-| )?plan))",
          ],
          hint_tr:
            "Must-have liste: 'Washer, natural light, separate bedroom.' Türk: 'Bigger' belirsiz, somut özellik.",
        },
        {
          speaker: "npc",
          message: "Got it. Two more today — let's recalibrate.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks (for taking my notes|for adjusting))",
            "(let'?s (see them|head to the next))",
            "(appreciate (the flexibility|you adjusting))",
            "(let'?s (move|keep going))",
            "(no offense on this one — (it'?s just not me|it'?s a no))",
          ],
          hint_tr:
            "Plan onayı: 'Let's recalibrate.' Türk: 'OK' düz, agent'la beraber.",
        },
      ],
    },
  ],
};

export const apartmentHunt03: BundledLesson = {
  id: "arc.apartment_hunt.3",
  skill_id: "arc.apartment_hunt",
  index: 3,
  title: "Sahne 3 — Mrs. Pemberton ile tanışma: landlord interview",
  description: "İlginç daire — landlord Mrs. Pemberton şahsen görüşmek istiyor. Profesyonel + samimi.",
  estimated_minutes: 6,
  exercises: [
    {
      id: "ex.arc.apartment_hunt.3.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "I work as",
      tr_translation: "Şu olarak çalışıyorum",
      example: "I work as a software engineer at a fintech.",
      example_tr: "Bir fintech'te yazılım mühendisi olarak çalışıyorum.",
    },
    {
      id: "ex.arc.apartment_hunt.3.2",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Islington 1-bed. Mrs. Pemberton (75, eski tarz) seni süzüyor. Net + kibar.",
      npc_role: "Mrs. Pemberton (landlord, traditional, careful)",
      setting: "Islington flat viewing, landlord present, Saturday afternoon",
      turns: [
        {
          speaker: "npc",
          message: "I like to meet my tenants. Tell me about yourself.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(of course|happy to)",
            "(i'?m [a-z]+|i moved to london (last month|recently))",
            "(originally from (turkey|istanbul))",
            "(i work as (a software engineer|an engineer) at (a fintech|a startup))",
            "(it'?s nice to meet you)",
          ],
          hint_tr:
            "Profesyonel tanıtım: 'I'm Burak — work as engineer at fintech.' Türk: uzun monolog, 2-3 cümle.",
        },
        {
          speaker: "npc",
          message: "Do you smoke? Pets?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(no|absolutely not)",
            "(neither — no smoke, no pets)",
            "(i don'?t smoke (and|nor) have pets)",
            "(very low(-| )?maintenance tenant)",
            "(quiet — usually working or out)",
          ],
          hint_tr:
            "Kısa + net: 'Neither — no smoke, no pets.' Türk: 'No' yetersiz, ek bilgi.",
        },
        {
          speaker: "npc",
          message: "How long do you plan to stay?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(at least (a year|twelve months))",
            "(ideally (long(-| )?term|two years))",
            "(my (job|contract) is (long(-| )?term|permanent))",
            "(i'?m (settled|here to stay))",
            "(no plans to (move on|leave london))",
          ],
          hint_tr:
            "İstikrar: 'Long-term — job is permanent.' Türk: 'I don't know' kapalı, ev sahibi istikrar arar.",
        },
        {
          speaker: "npc",
          message: "References? Previous landlord?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|i have)",
            "(employer reference (ready|on the way))",
            "(my previous landlord (in turkey|will write))",
            "(i can (provide|send) (within|in) (24 hours|a day))",
            "(would (an HR letter|payslips) (also work|help))",
          ],
          hint_tr:
            "Hazır: 'Employer reference ready — 24 hours.' Türk: 'I will get' yetersiz, hızlı + somut.",
        },
        {
          speaker: "npc",
          message: "I appreciate that. Any questions for me?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|i do)",
            "(how do you (typically|usually) handle (repairs|maintenance))",
            "(any (rules|preferences) about (guests|deliveries))",
            "(how (does|do) (rent|the deposit) (work|get paid))",
            "(could you tell me a bit about (the neighbours|the building))",
          ],
          hint_tr:
            "Karşılıklı: 'How do you handle repairs?' Türk: 'OK' pasif, kira ilişkisini öğren.",
        },
        {
          speaker: "npc",
          message: "I respond within 48 hours. Deposit is six weeks, capped by law.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(perfect|that works)",
            "(thanks for (the clarity|being so direct))",
            "(i (appreciate|like) (the structure|your approach))",
            "(when would you (decide|let me know))",
            "(can i (give you|share) the references (now|today))",
          ],
          hint_tr:
            "Sonraki adım: 'When would you decide?' Türk: 'OK' düz, zaman çizelgesi sor.",
        },
      ],
    },
  ],
};

export const apartmentHunt04: BundledLesson = {
  id: "arc.apartment_hunt.4",
  skill_id: "arc.apartment_hunt",
  index: 4,
  title: "Sahne 4 — Daniel: 'rent fiyatı için pazarlık'",
  description: "Daire iyi ama fiyat 100 fazla. Daniel'a teklif sun. Profesyonel.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.arc.apartment_hunt.4.1",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "Is there any flexibility on",
      tr_translation: "Şu konuda esneklik var mı",
      example: "Is there any flexibility on the rent?",
      example_tr: "Kirada herhangi bir esneklik var mı?",
    },
    {
      id: "ex.arc.apartment_hunt.4.2",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Daniel ile telefonda. İslington daire ilgini çekti — pazarlık zamanı.",
      npc_role: "Daniel (estate agent, negotiating with landlord)",
      setting: "Phone call, after viewing, Monday morning",
      turns: [
        {
          speaker: "npc",
          message: "Mrs. Pemberton liked you. The flat's yours if you want it.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(great news|thanks)",
            "(i'?m (interested|keen) — (with one ask|with one thought))",
            "(is there any flexibility on (the rent|the price))",
            "(could we (talk about|discuss) (the asking price))",
            "(it'?s £100 over my (target|budget))",
          ],
          hint_tr:
            "Pazarlık açış: 'Interested — with one ask.' Türk: 'Yes but cheaper' kaba, kibar açıl.",
        },
        {
          speaker: "npc",
          message: "She's firm on price. What's your case?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(comparable units in the area (go for|list at) £\\d+)",
            "(i'?d be (a long(-| )?term|reliable) tenant)",
            "(i could (offer|pay) (3 months upfront|a longer lease))",
            "(would (she )?(consider|accept) £\\d+)",
            "(in exchange for (longer term|early move(-| )?in))",
          ],
          hint_tr:
            "Kanıt + teklif: 'Comparable units go for less — I'd be long-term.' Türk: 'Just give discount' belirsiz, somut.",
        },
        {
          speaker: "npc",
          message: "Three months upfront is interesting. Let me ask.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks|appreciate (you taking it back|the effort))",
            "(let me know (the response|how she lands))",
            "(i'?m (flexible|open) on (move(-| )?in|some terms))",
            "(no rush — (just want to find common ground))",
            "(i can have funds (ready|by friday))",
          ],
          hint_tr:
            "Sabır: 'No rush — common ground.' Türk: 'Hurry' baskı, agent'a saygı.",
        },
        {
          speaker: "npc",
          message: "Back in an hour.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks|sounds good)",
            "(i'?ll (stand by|wait for the call))",
            "(speak soon)",
            "(let me know either way)",
          ],
          hint_tr:
            "Kapanış: 'Speak soon.' Türk: 'OK bye' düz, kısa.",
        },
        {
          speaker: "npc",
          message: "She agreed — £50 off if you do 3 months upfront. Deal?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(deal|i'?ll take it)",
            "(works for me)",
            "(let'?s (lock it in|get the paperwork going))",
            "(thanks (daniel|for the push))",
            "(send the (contract|paperwork))",
          ],
          hint_tr:
            "Kapatma: 'Let's lock it in.' Türk: 'OK' düz, kesin onay.",
        },
      ],
    },
  ],
};

export const apartmentHunt05: BundledLesson = {
  id: "arc.apartment_hunt.5",
  skill_id: "arc.apartment_hunt",
  index: 5,
  title: "Sahne 5 — Contract review: 'this clause concerns me'",
  description: "Sözleşmede şüpheli madde — Daniel'a sor. Net + ihtiyatlı.",
  estimated_minutes: 6,
  exercises: [
    {
      id: "ex.arc.apartment_hunt.5.1",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "Could we clarify this clause?",
      tr_translation: "Bu maddeyi netleştirebilir miyiz?",
      example: "Could we clarify this clause about deposits?",
      example_tr: "Depozito ile ilgili bu maddeyi netleştirebilir miyiz?",
    },
    {
      id: "ex.arc.apartment_hunt.5.2",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Daniel'ın ofisinde sözleşme. Bir madde kafanı karıştırdı. Net sor.",
      npc_role: "Daniel (going through contract)",
      setting: "Foxtons office, contract signing meeting",
      turns: [
        {
          speaker: "npc",
          message: "Ready to sign? Any questions?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes — actually|before we sign))",
            "(a few questions)",
            "(could we (go through|clarify) clause (\\d+|the deposit one))",
            "(this section about (early termination|repairs) — (worries me|is unclear))",
            "(can we walk through the (contract|key terms))",
          ],
          hint_tr:
            "İmza önce: 'Before we sign — a few questions.' Türk: 'OK sign' acele, dur + sor.",
        },
        {
          speaker: "npc",
          message: "Of course — which clause?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(the (early termination|break clause) (says|states))",
            "(if i (need to|have to) leave early)",
            "(am i (liable|on the hook) for the (full|remaining) rent)",
            "(what counts as (notice|valid reason))",
            "(could you (explain|walk through) (the break terms))",
          ],
          hint_tr:
            "Spesifik: 'If I need to leave early — am I liable?' Türk: 'I don't understand' kapalı, hipotez ver.",
        },
        {
          speaker: "npc",
          message: "Six months minimum, then two months' notice. Standard.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(noted|got it)",
            "(could we (write|add) (an exception for) (job loss|relocation))",
            "(is that (negotiable|adjustable))",
            "(any (penalty|fee) (beyond|on top of) (the notice))",
            "(can we (clarify|specify) what counts as (notice))",
          ],
          hint_tr:
            "Sınırı zorla: 'Could we write an exception for relocation?' Türk: 'OK' kabul, opsiyonu sor.",
        },
        {
          speaker: "npc",
          message: "I can ask, but Mrs. Pemberton is conservative on this.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(understood)",
            "(could we at least (add|include) (a |the )?cap on (the penalty|liability))",
            "(if not — (i need to think|i'?ll consult counsel) before signing)",
            "(walk me through (worst case|the typical scenarios))",
            "(let'?s (ask|test) the (relocation|emergency) angle)",
          ],
          hint_tr:
            "Sınır koy: 'I need to consult counsel before signing.' Türk: 'OK sign' uzlaşma, sınır kur.",
        },
        {
          speaker: "npc",
          message: "Fair. Take it home, run it by someone. I'll wait.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks (for the patience|daniel))",
            "(i'?ll (look at|review) (it overnight|tonight))",
            "(back to you (tomorrow|by friday))",
            "(appreciate (not being rushed|the space))",
            "(would (twenty(-| )?four|forty(-| )?eight) hours work)",
          ],
          hint_tr:
            "Saygı: 'Appreciate not being rushed.' Türk: 'OK bye' düz, profesyonelliği onurla.",
        },
      ],
    },
  ],
};

export const apartmentHunt06: BundledLesson = {
  id: "arc.apartment_hunt.6",
  skill_id: "arc.apartment_hunt",
  index: 6,
  title: "Sahne 6 — Move-in day: 'the boiler is broken'",
  description: "Taşındın. İlk gece boiler bozuk. Mrs. Pemberton'a mesaj — net, kibar.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.arc.apartment_hunt.6.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "There's an issue with",
      tr_translation: "Şununla ilgili bir sorun var",
      example: "There's an issue with the boiler — no hot water.",
      example_tr: "Boiler ile ilgili bir sorun var — sıcak su yok.",
    },
    {
      id: "ex.arc.apartment_hunt.6.2",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Mrs. Pemberton'a telefon. Boiler çalışmıyor, sıcak su yok. Sakin + somut.",
      npc_role: "Mrs. Pemberton (landlord, by phone)",
      setting: "Phone call, evening of move-in day",
      turns: [
        {
          speaker: "npc",
          message: "Hello — is everything alright?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(hi mrs pemberton)",
            "(sorry to call (so soon|on day one))",
            "(there'?s an issue with (the boiler|the heating))",
            "(no hot water|no heat)",
            "(i wanted to flag it (right away|immediately))",
          ],
          hint_tr:
            "Sakin açılış: 'Sorry to call on day one — issue with the boiler.' Türk: 'Help broken' panik, sakin + bilgi.",
        },
        {
          speaker: "npc",
          message: "Oh dear. Did you try the reset button?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|i tried (it|the reset)) (twice|a few times))",
            "(no luck|same result)",
            "(the (display|light) (is showing|reads) (\\d+|an error))",
            "(let me (read|tell you) (the code|the model))",
            "(no response — completely (off|dead))",
          ],
          hint_tr:
            "Hata kod: 'Tried twice — display shows F22.' Türk: 'It doesn't work' kapalı, kod oku.",
        },
        {
          speaker: "npc",
          message: "I'll send my engineer tomorrow. 9am okay?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(9am works)",
            "(thanks (so much|for the quick response))",
            "(i'?ll (work from home|stay in) tomorrow)",
            "(could you (text|send) me the engineer'?s (name|number))",
            "(any (workaround|tips) for tonight)",
          ],
          hint_tr:
            "Plan + bonus: 'Any workaround for tonight?' Türk: 'OK 9am' düz, geceyi çöz.",
        },
        {
          speaker: "npc",
          message: "Boil a kettle for now. Sorry for the trouble.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(no worries|these things happen)",
            "(thanks for (responding so fast|moving on this))",
            "(i appreciate (the quick fix|how you handled it))",
            "(see you (tomorrow morning|at 9))",
            "(have a (good|nice) (night|evening))",
          ],
          hint_tr:
            "İlişki: 'These things happen — appreciate the quick fix.' Türk: 'OK bye' düz, anlayış göster.",
        },
      ],
    },
  ],
};

export const apartmentHunt07: BundledLesson = {
  id: "arc.apartment_hunt.7",
  skill_id: "arc.apartment_hunt",
  index: 7,
  title: "Sahne 7 — Komşu şikayeti: 'gürültü'",
  description: "Daireye taşınalı 2 ay. Üst kat şikayet — Türk müziği yüksek. Çöz.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.arc.apartment_hunt.7.1",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "I had no idea",
      tr_translation: "Hiç farkında değildim",
      example: "I had no idea it carried that much.",
      example_tr: "O kadar duyulduğunun hiç farkında değildim.",
    },
    {
      id: "ex.arc.apartment_hunt.7.2",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Üst kat komşusu kapına geldi — gergin ama nazik. Türk müziği geceleri yüksek.",
      npc_role: "Upstairs neighbour (tense, polite)",
      setting: "Doorstep encounter, Saturday morning",
      turns: [
        {
          speaker: "npc",
          message: "Hi — sorry to bother. The music last night was quite loud.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(oh|i'?m so sorry)",
            "(i had no idea (it carried|that)) (so much|through the floor))",
            "(i (didn'?t realize|wasn'?t aware) — my (fault|bad))",
            "(thanks for (telling me|coming to me first))",
            "(let me (apologize|make it right))",
          ],
          hint_tr:
            "Hızlı özür: 'I had no idea — thanks for coming to me.' Türk: 'I didn't' defansif, sorumlu + minnet.",
        },
        {
          speaker: "npc",
          message: "No worries, just — past midnight is rough.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(completely fair)",
            "(you'?re right — past midnight (was inconsiderate|crossed a line))",
            "(it won'?t happen again)",
            "(i'?ll (keep|turn) (it|the volume) (down|low) after (10|eleven))",
            "(if it happens again — (knock immediately|let me know))",
          ],
          hint_tr:
            "Söz: 'It won't happen again.' Türk: 'OK' yetersiz, somut taahhüt.",
        },
        {
          speaker: "npc",
          message: "Appreciate that. I work early shifts.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(of course|understood)",
            "(i'?ll be (mindful|considerate) — especially weeknights)",
            "(could i (give you|share) my number)",
            "(send a text — i'?ll fix it immediately)",
            "(again — thanks for (approaching me|not going to the landlord))",
          ],
          hint_tr:
            "Pratik: 'Could I give you my number?' Türk: 'Sorry' yetersiz, sistem kur.",
        },
        {
          speaker: "npc",
          message: "That'd actually help. I'm Sam, by the way.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(hi sam|nice to (meet|finally meet) you)",
            "(i'?m [a-z]+ — (sorry it took an awkward intro|wish it was a better start))",
            "(let me (grab|send) my (number|whatsapp))",
            "(if you ever need a (cup of sugar|favor) — knock)",
            "(thanks for (the kindness|being so reasonable))",
          ],
          hint_tr:
            "İlişki kur: 'Wish it was a better start.' Türk: 'OK Sam' düz, ilişki başlat.",
        },
      ],
    },
  ],
};

export const apartmentHunt08: BundledLesson = {
  id: "arc.apartment_hunt.8",
  skill_id: "arc.apartment_hunt",
  index: 8,
  title: "Sahne 8 — Kontrat yenileme: rent artışı",
  description: "1 yıl sonra. Mrs. Pemberton kira artışı önerdi. Pazarlık.",
  estimated_minutes: 6,
  exercises: [
    {
      id: "ex.arc.apartment_hunt.8.1",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "I'd like to discuss the renewal",
      tr_translation: "Yenileme konusunu konuşmak istiyorum",
      example: "I'd like to discuss the renewal terms.",
      example_tr: "Yenileme şartlarını konuşmak istiyorum.",
    },
    {
      id: "ex.arc.apartment_hunt.8.2",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Mrs. Pemberton ile tea, 1 yıl sonra. %8 artış istiyor. Sen %3 öneriyorsun.",
      npc_role: "Mrs. Pemberton (renewal negotiation)",
      setting: "Mrs. Pemberton's flat, tea, lease renewal discussion",
      turns: [
        {
          speaker: "npc",
          message: "I'm thinking 8% increase this year. Market is up.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks for (being upfront|the heads(-| )?up))",
            "(i'?d like to (discuss|push back on) the (renewal|number))",
            "(8(%| percent) (is steep|feels high))",
            "(i was thinking (something closer to) (3|4)(%| percent))",
            "(could we (find a middle ground|land somewhere in between))",
          ],
          hint_tr:
            "Karşı teklif: 'I was thinking 3%.' Türk: 'No too much' agresif, sayı + sebep.",
        },
        {
          speaker: "npc",
          message: "Inflation's been 7%. I'm not even keeping pace.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i hear (you|that))",
            "(but rent inflation in (this area|hackney) is closer to (\\d+|four)(%| percent))",
            "(i'?ve been (a clean|a reliable) tenant)",
            "(zero (late payments|issues) over the year)",
            "(turnover costs (you|the landlord) (more than)|finding new tenants is (expensive|risky))",
          ],
          hint_tr:
            "Veri + ilişki: 'Zero late payments — turnover costs you more.' Türk: 'I am good' belirsiz, sayı + risk.",
        },
        {
          speaker: "npc",
          message: "True. But 3% won't cover my costs.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(let'?s (split|meet in the middle))",
            "(would (5|5%|five percent) work)",
            "(\\d+(%)? — and i'?ll (commit|sign) for two years)",
            "(in exchange (for longer term|for stability) you get (less risk|guaranteed income))",
            "(no(-| )?break clause for (year two))",
          ],
          hint_tr:
            "Yaratıcı orta: '5% for two years, no break clause.' Türk: 'Yes OK' kabul, ortak kazanç çerçevele.",
        },
        {
          speaker: "npc",
          message: "Two-year lock at 5%. I can live with that.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(deal|let'?s do it)",
            "(thank you (for being open|for meeting me halfway))",
            "(i'?ll (sign|come by) (this week|whenever))",
            "(this works for both of us)",
            "(appreciate (the trust|how reasonable you'?ve been))",
          ],
          hint_tr:
            "Kapanış: 'Appreciate how reasonable you've been.' Türk: 'OK done' düz, ilişkiyi besle.",
        },
        {
          speaker: "npc",
          message: "You've been a wonderful tenant. Glad to keep you.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(that means a lot)",
            "(thank you|thank you mrs pemberton)",
            "(this has been (a great year|the easiest landlord experience))",
            "(see you for tea next month)",
            "(let'?s (toast|cheers))",
          ],
          hint_tr:
            "Sıcak: 'This has been the easiest landlord experience.' Türk: 'Thanks' düz, ilişki tarih.",
        },
      ],
    },
  ],
};

// ============================================================
// ARC 8 — ONLINE DATING (10 sahne)
// Recurring NPC: Emma (match, develops)
// ============================================================

export const onlineDating01: BundledLesson = {
  id: "arc.online_dating.1",
  skill_id: "arc.online_dating",
  index: 1,
  title: "Sahne 1 — İlk mesaj: Hinge match Emma",
  description: "Emma sağdan kaydı. İlk mesaj — profilinden bir şey yakala.",
  estimated_minutes: 4,
  exercises: [
    {
      id: "ex.arc.online_dating.1.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "I noticed you mentioned",
      tr_translation: "Şunu yazdığını fark ettim",
      example: "I noticed you mentioned Murakami — favorite book?",
      example_tr: "Murakami yazdığını fark ettim — favori kitap?",
    },
    {
      id: "ex.arc.online_dating.1.2",
      type: "roleplay_chat",
      difficulty: 3,
      scenario_description:
        "Hinge chat. Emma'yla matchledin. Profilinde 'Murakami fan.' Mesajla.",
      npc_role: "Emma (match, witty, responsive)",
      setting: "Hinge chat, first messages",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(hey|hi)(,)? (emma)",
            "(i noticed you mentioned (murakami|the bookstore))",
            "(have you read (kafka on the shore|norwegian wood))",
            "(quick question — which (book|murakami) (do you recommend|hooked you))",
            "(what'?s your favorite (line|quote))",
          ],
          hint_tr:
            "Profilden hook: 'Noticed you mentioned Murakami — which book hooked you?' Türk: 'Hi how are you' düz, somut soru.",
        },
        {
          speaker: "npc",
          message: "Ha — finally someone who's actually read him. Norwegian Wood first, but Kafka stuck.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(same|i'?m with you))",
            "(kafka is the (one|wild ride))",
            "(have you (tried|read) (the wind(-| )?up bird|1q84))",
            "(i (avoided|skipped) norwegian wood for years — (regretted it|loved it))",
            "(any (other authors|writers) you (lean toward|love))",
          ],
          hint_tr:
            "İade + spesifik: 'Kafka is the wild ride — any other authors?' Türk: 'Me too' düz, sohbeti uzat.",
        },
        {
          speaker: "npc",
          message: "Ishiguro is up there. You?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(remains of the day) (is a gut punch|undid me)",
            "(i'?m (more into|leaning toward) (orhan pamuk|chekhov))",
            "(reading (\\w+ \\w+) (right now|currently))",
            "(funny you mention — (i just started|i'?m in the middle of) something)",
            "(do you (read|like) translated (turkish|fiction))",
          ],
          hint_tr:
            "Kişisel + soru: 'I'm into Pamuk — do you read translated Turkish?' Türk: 'I like X' kapalı, soru iade.",
        },
        {
          speaker: "npc",
          message: "Never tried Pamuk. Worth it?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(absolutely|highly recommend)",
            "(start with (snow|my name is red))",
            "(if you liked (ishiguro|murakami)(,)? (pamuk hits similar))",
            "(want me to (send you|drop) a title)",
            "(could be (a fun|the right) (next read|book club))",
          ],
          hint_tr:
            "Davet: 'Could be a fun book club.' Türk: 'Yes good' düz, ortak aktivite öner.",
        },
      ],
    },
  ],
};

export const onlineDating02: BundledLesson = {
  id: "arc.online_dating.2",
  skill_id: "arc.online_dating",
  index: 2,
  title: "Sahne 2 — Buluşmaya davet: 'coffee or cocktails?'",
  description: "Birkaç gün mesajlaştık. Şimdi buluşma teklif et — düşük baskı.",
  estimated_minutes: 4,
  exercises: [
    {
      id: "ex.arc.online_dating.2.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "Would you want to grab a drink?",
      tr_translation: "Bir şeyler içmeye gider misin?",
      example: "Would you want to grab a drink sometime?",
      example_tr: "Yakında bir şeyler içmeye gider misin?",
    },
    {
      id: "ex.arc.online_dating.2.2",
      type: "roleplay_chat",
      difficulty: 3,
      scenario_description:
        "Emma ile chat 3. gün. Hala mesajlaşma. Buluşma teklif et — kibar + güvenli.",
      npc_role: "Emma (still chatting, warming up)",
      setting: "Hinge chat, third day of messaging",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(honestly|so)(,)? (we'?ve been (texting|chatting) for days)",
            "(this is (fun|easy) — but)",
            "(would you (want|be down) to (grab a drink|meet up))",
            "(coffee|drinks|tea) (this week|sometime soon))",
            "(your call — happy to (do|try) (a coffee or cocktails))",
          ],
          hint_tr:
            "Düşük baskı: 'Would you be down to grab a drink — your call.' Türk: 'Let's meet' direkt, opsiyon sun.",
        },
        {
          speaker: "npc",
          message: "Yes — I was wondering when you'd ask. Drinks. When?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(haha|that'?s the energy)",
            "(thursday|friday) evening)",
            "(how does (thursday at 7|friday post-work) sound)",
            "(any (area|neighbourhood) (you (prefer|usually go))",
            "(i'?ll (suggest|propose) a (place|wine bar))",
          ],
          hint_tr:
            "Liderlik et: 'Thursday at 7 — any area you prefer?' Türk: 'OK when' belirsiz, gün + saat.",
        },
        {
          speaker: "npc",
          message: "Thursday works. Soho?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(soho works)",
            "(there'?s (a place|swift) on old compton)",
            "(i'?ve been wanting to try)",
            "(want me to (book|reserve))",
            "(or you (pick|choose) the spot)",
          ],
          hint_tr:
            "Somut: 'Swift on Old Compton — want me to book?' Türk: 'OK Soho' düz, mekan öner.",
        },
        {
          speaker: "npc",
          message: "You pick. I'm easy.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(deal|booking now)",
            "(swift|the place) (at 7|sharp))",
            "(i'?ll (text|send) you (the address|the booking))",
            "(looking forward (to it|to thursday))",
            "(if anything (changes|comes up) — let me know)",
          ],
          hint_tr:
            "Plan kilitle: 'Booking now — text you the address.' Türk: 'OK' düz, somut adım.",
        },
        {
          speaker: "npc",
          message: "Thursday it is.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(can'?t wait)",
            "(see you thursday)",
            "(don'?t (cancel on me|ghost))",
            "(low bar — (just show up|just be you))",
          ],
          hint_tr:
            "Hafif espri: 'Don't ghost.' Türk: 'OK bye' düz, eğlenceli sınır.",
        },
      ],
    },
  ],
};

export const onlineDating03: BundledLesson = {
  id: "arc.online_dating.3",
  skill_id: "arc.online_dating",
  index: 3,
  title: "Sahne 3 — İlk randevu: 'so tell me about yourself'",
  description: "Swift bar, Soho. Emma karşında. İlk gerçek konuşma — derinleş.",
  estimated_minutes: 6,
  exercises: [
    {
      id: "ex.arc.online_dating.3.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "What's your story?",
      tr_translation: "Hikayen ne?",
      example: "What's your story — how'd you end up in London?",
      example_tr: "Hikayen ne — nasıl Londra'ya geldin?",
    },
    {
      id: "ex.arc.online_dating.3.2",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Swift bar. İki kokteyl. Klişe sorulardan kaç — gerçek konuş.",
      npc_role: "Emma (in person, observant)",
      setting: "Swift bar Soho, first date, Thursday 7pm",
      turns: [
        {
          speaker: "npc",
          message: "Okay — so tell me about yourself. The non-Hinge version.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(non(-| )?hinge — i like that)",
            "(i'?ll (try|attempt) (something honest))",
            "(grew up in (istanbul|izmir)|moved here (for) work)",
            "(too curious for my own good)",
            "(i (love|chase) (small details|good conversations))",
          ],
          hint_tr:
            "Klişeden kaç: 'I'll try something honest.' Türk: 'I am 28 engineer' özgeçmiş, kişilik göster.",
        },
        {
          speaker: "npc",
          message: "What does 'too curious' mean?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i (talk to|ask) cab drivers (way too much|every ride))",
            "(i'?ll (rabbit(-| )?hole|fall into) a topic for (hours|days))",
            "(strangers (find me|open up))",
            "(i (read way too much|chase tangents))",
            "(my (mom|family) calls it (annoying|charming))",
          ],
          hint_tr:
            "Somut hikaye: 'I talk to cab drivers way too much.' Türk: 'I like to ask' belirsiz, anekdot.",
        },
        {
          speaker: "npc",
          message: "Same. What's the most interesting thing a stranger ever told you?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(oh|let me think)",
            "(a (driver|barber|grandma) once said)",
            "(it was a (line|story) about (regret|joy|fear))",
            "(it stuck with me because)",
            "(funnier — (turn it on you|your most interesting))",
          ],
          hint_tr:
            "Hikaye anlat: 'A barber once said...' Türk: 'I don't remember' kapanış, bir kez sahnele.",
        },
        {
          speaker: "npc",
          message: "I love that. Okay — your turn to ask me something.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(deal|let me think))",
            "(what'?s something (you used to believe|you'?ve changed your mind on))",
            "(what does (a perfect|your ideal) sunday look like)",
            "(if you could (have dinner with anyone|live anywhere) — who/where)",
            "(what'?s a (small|tiny) thing that (makes you irrationally happy))",
          ],
          hint_tr:
            "İyi soru: 'What's something you've changed your mind on?' Türk: 'Where you from' klişe, derin soru.",
        },
        {
          speaker: "npc",
          message: "Wow — that's a good one. Let me think.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(take your time)",
            "(i (love|love when) people (actually think|pause))",
            "(no rush)",
            "(in the meantime — (cheers|to thursday))",
          ],
          hint_tr:
            "Sabır: 'I love when people actually think.' Türk: 'OK' düz, an'ı koru.",
        },
      ],
    },
  ],
};

export const onlineDating04: BundledLesson = {
  id: "arc.online_dating.4",
  skill_id: "arc.online_dating",
  index: 4,
  title: "Sahne 4 — Awkward moment: 'do you want kids?'",
  description: "Bir saat sonra. Konu derinleşti. Emma direkt sordu — net + dürüst.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.arc.online_dating.4.1",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "I'm open to it",
      tr_translation: "Açığım buna",
      example: "Honestly, I'm open to it — but not in a rush.",
      example_tr: "Açıkçası buna açığım — ama acelem yok.",
    },
    {
      id: "ex.arc.online_dating.4.2",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "İkinci kokteyl. Emma direkt sordu. Defansif değil — dürüst + net konuş.",
      npc_role: "Emma (digging deeper)",
      setting: "Same bar, late evening, conversation getting real",
      turns: [
        {
          speaker: "npc",
          message: "Random — but I'm 32. Do you want kids?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(not random at all — fair question)",
            "(honestly|i'?ll be honest))",
            "(i'?m open to it)",
            "(yes — (not (in a rush|tomorrow))|but (later|right person))",
            "(probably yes — (you))",
          ],
          hint_tr:
            "Açık: 'Open to it — not in a rush.' Türk: 'Maybe' kaçış, net pozisyon.",
        },
        {
          speaker: "npc",
          message: "I want them. Within the next few years.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(noted|appreciate (the directness|you saying that))",
            "(that'?s a (clear|honest) timeline)",
            "(i'?d need to (think|sit with that))",
            "(it doesn'?t scare me — (just want to (be honest))",
            "(could (we|i) ask (what brought it up|why now))",
          ],
          hint_tr:
            "Hızlı yargı yok: 'Doesn't scare me — sit with that.' Türk: 'OK' panik, sakin işleme.",
        },
        {
          speaker: "npc",
          message: "I just don't want to waste my time.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(totally fair)",
            "(no time(-| )?wasting from my end (either))",
            "(if we keep (going|seeing each other) — let'?s keep (this honesty|the lines open))",
            "(i (respect|admire) the (clarity|directness))",
            "(want to (revisit|circle back) on (date three|after we know each other))",
          ],
          hint_tr:
            "Saygı + sınır: 'Let's keep the lines open.' Türk: 'OK' düz, plan + onur.",
        },
        {
          speaker: "npc",
          message: "Deal. Okay — lighter topic. Worst date you've been on?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(oh god|where do i start)",
            "(there was (a girl|someone) who (talked about her ex|brought her mum))",
            "(i'?ve had (some|a few))",
            "(your turn first|i'?ll trade you one)",
            "(laughing thinking about it)",
          ],
          hint_tr:
            "Geçiş: 'I'll trade you one.' Türk: 'I had bad date' eksik, story-swap.",
        },
      ],
    },
  ],
};

export const onlineDating05: BundledLesson = {
  id: "arc.online_dating.5",
  skill_id: "arc.online_dating",
  index: 5,
  title: "Sahne 5 — İkinci randevu: 'meet my friend group'",
  description: "İkinci randevu. Emma seni arkadaş grubuna davet etti — sosyal yorgun ama git.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.arc.online_dating.5.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "I'm a bit of an introvert",
      tr_translation: "Biraz içe dönüğüm",
      example: "Heads up — I'm a bit of an introvert.",
      example_tr: "Şunu bil — biraz içe dönüğüm.",
    },
    {
      id: "ex.arc.online_dating.5.2",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Emma'nın arkadaşı 30. yaşı pub'da. 8 kişi. Yeni insanlarla küçük sohbet.",
      npc_role: "Emma's friend (curious, friendly)",
      setting: "Pub, friend's 30th birthday, second date context",
      turns: [
        {
          speaker: "npc",
          message: "So you're the guy! Emma's been talking. Where'd you two meet?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(haha|hopefully (good things|nothing too damning))",
            "(hinge — the (classic|usual) story)",
            "(we bonded over (murakami|books))",
            "(she'?s (the best|been telling me about you))",
            "(nice to (finally )?(put a face to|meet)) (the name|the group)",
          ],
          hint_tr:
            "Hafif: 'Nothing too damning, I hope.' Türk: 'Yes she told' düz, espri.",
        },
        {
          speaker: "npc",
          message: "She doesn't usually bring people. So what's your deal?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(no pressure or anything)",
            "(i'?m [a-z]+ — moved (here|to london) (from istanbul) (last year))",
            "(software engineer at (a fintech))",
            "(big reader|outdoors|gym))",
            "(heads up — (i'?m a bit of an introvert|i warm up slow))",
          ],
          hint_tr:
            "Dürüst + hazır: 'Heads up — I warm up slow.' Türk: 'I am quiet' düz, beklenti yönet.",
        },
        {
          speaker: "npc",
          message: "Cool. Cool. So how long are you two?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(early days|second date actually)",
            "(too soon to (label|name) it)",
            "(it'?s going well so far)",
            "(ask me in (six weeks|a month))",
            "(you tell me — should i be (worried|excited))",
          ],
          hint_tr:
            "Sınır + espri: 'Ask me in six weeks.' Türk: 'I don't know' kapalı, sınır + oyun.",
        },
        {
          speaker: "npc",
          message: "Emma's great. Be good to her.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(noted|that'?s the (intention|plan))",
            "(she'?s (clearly|lucky to have) good friends)",
            "(appreciate (the (protectiveness|love)))",
            "(i (intend|hope) to)",
            "(if i mess up — (you'?ll let me know|come for me))",
          ],
          hint_tr:
            "Sıcak yanıt: 'Appreciate the love.' Türk: 'OK I will' düz, koruyuculuğu onurla.",
        },
      ],
    },
  ],
};

export const onlineDating06: BundledLesson = {
  id: "arc.online_dating.6",
  skill_id: "arc.online_dating",
  index: 6,
  title: "Sahne 6 — DTR konuşması: 'are we exclusive?'",
  description: "5. randevu. Define the relationship. Açık + dürüst — defansif değil.",
  estimated_minutes: 6,
  exercises: [
    {
      id: "ex.arc.online_dating.6.1",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "Where do you see this going?",
      tr_translation: "Bunu nereye gitti görüyorsun?",
      example: "Where do you see this going, honestly?",
      example_tr: "Bunu nereye gittiğini görüyorsun, dürüstçe?",
    },
    {
      id: "ex.arc.online_dating.6.2",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Emma'nın evi, akşam yemeği sonrası kanepe. Sessizlik kırıldı.",
      npc_role: "Emma (DTR conversation initiator)",
      setting: "Emma's flat, post-dinner, fifth date",
      turns: [
        {
          speaker: "npc",
          message: "I want to ask you something. Are we — exclusive?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i was (going to|hoping to) bring it up)",
            "(i (already am|stopped (swiping|seeing others)) (a while ago|after date two))",
            "(yes — (if you want|that'?s where i'?m at))",
            "(i (want|would like) us to (be|be exclusive))",
            "(what (does|do) (you|that mean) for (you))",
          ],
          hint_tr:
            "Açık: 'I stopped swiping after date two.' Türk: 'Maybe' kaçış, somut + niyet.",
        },
        {
          speaker: "npc",
          message: "Okay. Same. But where do you see this going?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(honestly|i'?ll be honest)(,)? (i can see (this|us) (lasting|going somewhere))",
            "(i'?m not (here for|playing) (anything casual|games))",
            "(if (i'?m honest|in my gut) — (i (could see|would want)) (the next chapters))",
            "(it'?s (early|new) but the (instinct|feeling) is (strong|there))",
            "(where do you see (us|it) going)",
          ],
          hint_tr:
            "Vizyon: 'I can see this lasting — not playing games.' Türk: 'I like you' eksik, gelecek görüş.",
        },
        {
          speaker: "npc",
          message: "Same. Just — I've been hurt before. I want to be careful.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i hear (you|that))",
            "(no rush from my side)",
            "(let'?s (build it|move at your pace))",
            "(i'?ll (earn|show) (the trust|it))",
            "(if i ever (slip|miss something) — (say it|tell me directly))",
          ],
          hint_tr:
            "Empati + söz: 'I'll earn the trust.' Türk: 'OK' yetersiz, somut taahhüt.",
        },
        {
          speaker: "npc",
          message: "Thanks. That's exactly what I needed to hear.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks for (asking|the courage to bring it up))",
            "(this is (the easiest|how it should feel))",
            "(i'?m (in|here|all in))",
            "(so — (boyfriend and girlfriend|official))",
            "(officially|then it'?s official)",
          ],
          hint_tr:
            "Kapanış: 'So — officially.' Türk: 'OK' düz, an'ı işaretle.",
        },
      ],
    },
  ],
};

export const onlineDating07: BundledLesson = {
  id: "arc.online_dating.7",
  skill_id: "arc.online_dating",
  index: 7,
  title: "Sahne 7 — İlk kavga: 'you've been distant'",
  description: "3 ay birlikte. Emma 'you've been distant' dedi. Defansif değil, dinle.",
  estimated_minutes: 6,
  exercises: [
    {
      id: "ex.arc.online_dating.7.1",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "Help me understand",
      tr_translation: "Anlamama yardım et",
      example: "Help me understand what you're feeling.",
      example_tr: "Ne hissettiğini anlamama yardım et.",
    },
    {
      id: "ex.arc.online_dating.7.2",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Emma'nın mutfağında. Gergin. Eleştiriyi dinle. Defansif olma.",
      npc_role: "Emma (raising a concern, vulnerable)",
      setting: "Emma's kitchen, three months in, tense moment",
      turns: [
        {
          speaker: "npc",
          message: "I need to say something. You've felt distant the last two weeks.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(okay|i'?m listening)",
            "(thanks for (saying|raising) it)",
            "(help me understand (what you'?re feeling|where you'?re coming from))",
            "(i'?d rather (hear it|know now))",
            "(tell me what you (noticed|saw))",
          ],
          hint_tr:
            "Dinle önce: 'Help me understand.' Türk: 'No I'm not' defansif, dinleme moduna geç.",
        },
        {
          speaker: "npc",
          message: "You've been on your phone, half-listening. It feels like work has taken you.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(you'?re (right|not wrong))",
            "(i didn'?t realize (how much|it was that visible))",
            "(work has been (intense|a lot))",
            "(that'?s no excuse — (you (deserve|notice) my attention))",
            "(thanks for (naming|calling) it)",
          ],
          hint_tr:
            "Kabul + minnet: 'Thanks for naming it.' Türk: 'I'm busy' bahane, sorumluluk al.",
        },
        {
          speaker: "npc",
          message: "I don't want to be the work-widow girlfriend.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(and you won'?t be|that'?s the last thing i want)",
            "(here'?s what i'?ll (change|commit to))",
            "(phone (down|off) at dinner — every night)",
            "(weekly date night — non(-| )?negotiable)",
            "(if i (slip|fall back) — (call me out (sooner)?))",
          ],
          hint_tr:
            "Somut taahhüt: 'Phone off at dinner.' Türk: 'I will be better' belirsiz, spesifik.",
        },
        {
          speaker: "npc",
          message: "Thank you. That means a lot.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thank you (for not bottling it))",
            "(this is (how|why) we'?ll last)",
            "(i'?m (sorry|in your corner))",
            "(can i (hug|come here))",
            "(let'?s (cook|skip the work talk) tonight)",
          ],
          hint_tr:
            "Onarım: 'This is how we'll last.' Türk: 'OK sorry' düz, çiftlik vizyonu.",
        },
      ],
    },
  ],
};

export const onlineDating08: BundledLesson = {
  id: "arc.online_dating.8",
  skill_id: "arc.online_dating",
  index: 8,
  title: "Sahne 8 — Emma'yı Türk arkadaşlarıyla tanıştırma",
  description: "Türk arkadaş yemeği. Emma ilk kez geliyor. Kültürel köprü.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.arc.online_dating.8.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "She means a lot to me",
      tr_translation: "O benim için çok önemli",
      example: "Heads up — she means a lot to me.",
      example_tr: "Şunu bil — o benim için çok önemli.",
    },
    {
      id: "ex.arc.online_dating.8.2",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Türk arkadaşın evinde. Emma yanında. Sen iki kültürün arasında köprüsün.",
      npc_role: "Turkish friend (testing, friendly)",
      setting: "Turkish friend's flat, Saturday dinner, Emma's first visit",
      turns: [
        {
          speaker: "npc",
          message: "So this is the famous Emma. How long now?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(four months — yeah)",
            "(she means a lot to me)",
            "(be (gentle|nice|good))",
            "(she'?s (the (real )?deal|special))",
            "(don'?t (embarrass me|scare her))",
          ],
          hint_tr:
            "Önemli ol: 'She means a lot to me.' Türk: 'Just girlfriend' düz, sahiplen.",
        },
        {
          speaker: "npc",
          message: "Emma, has he taken you to Istanbul yet?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(not yet|in the works)",
            "(planning (it for|a trip in) (summer|may))",
            "(we'?re (saving|holding off) for a (longer trip|right time))",
            "(she'?s never been — (i'?m excited|big plans))",
            "(emma — you'?re going to love it)",
          ],
          hint_tr:
            "Plan: 'Planning for summer.' Türk: 'No' yetersiz, gelecek + heyecan.",
        },
        {
          speaker: "npc",
          message: "Emma — what'd you think of the meze?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(emma)(,)? (you'?ll (love|crush) the (haydari|babaganush))",
            "(try the (cigara böreği|stuffed grape leaves))",
            "(she'?s (already convinced|a convert))",
            "(let me (translate|introduce her to) (this))",
            "(emma — what'?s your (favorite so far))",
          ],
          hint_tr:
            "Köprü ol: 'Let me translate this.' Türk: pasif izleme, aktif aracılık.",
        },
        {
          speaker: "npc",
          message: "She's a keeper. Good choice.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks|i know)",
            "(she'?s (the best|spoiling me))",
            "(i (got|am) (lucky|punching above my weight))",
            "(she (lights up|completes) the table)",
            "(don'?t (tell her too much|inflate her ego))",
          ],
          hint_tr:
            "Gurur + espri: 'Punching above my weight.' Türk: 'Yes she is good' düz, samimi övgü.",
        },
      ],
    },
  ],
};

export const onlineDating09: BundledLesson = {
  id: "arc.online_dating.9",
  skill_id: "arc.online_dating",
  index: 9,
  title: "Sahne 9 — Birlikte taşınma konuşması",
  description: "8 ay birlikte. Beraber yaşama konusu. Net + gerçekçi konuş.",
  estimated_minutes: 6,
  exercises: [
    {
      id: "ex.arc.online_dating.9.1",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "I think we're ready",
      tr_translation: "Sanırım hazırız",
      example: "Honestly, I think we're ready to move in.",
      example_tr: "Açıkçası sanırım taşınmaya hazırız.",
    },
    {
      id: "ex.arc.online_dating.9.2",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Pazar sabahı kahve. Emma kira yenileme zamanı dedi — fırsat.",
      npc_role: "Emma (raising the move-in possibility)",
      setting: "Sunday morning coffee at Emma's, lease renewal discussion",
      turns: [
        {
          speaker: "npc",
          message: "Lease renewal's coming. I have to decide soon.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(noted)",
            "(can we (talk|think) about (this together|something))",
            "(what if (we|i moved in))",
            "(i think (we'?re ready|it'?s time))",
            "(would you (want to|consider) living together)",
          ],
          hint_tr:
            "Açık: 'I think we're ready — would you consider living together?' Türk: 'Maybe' kaçış, net soru.",
        },
        {
          speaker: "npc",
          message: "I've been thinking about it too. But honestly — terrified.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(same|i hear (you|that))",
            "(it'?s (a huge|a real) step)",
            "(let'?s (talk through|map out) (the (worries|practical))",
            "(what (specifically )?(scares you|the worry))",
            "(no rush — (let'?s think|just (test|float) it))",
          ],
          hint_tr:
            "Empati + sondaj: 'What specifically scares you?' Türk: 'Why scared' agresif, kibar derinleş.",
        },
        {
          speaker: "npc",
          message: "What if it ruins what we have? Living with someone is different.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(fair (worry|fear))",
            "(let'?s (set|build) (a few|some) (ground rules|safety nets))",
            "(separate (closets|workspaces))",
            "(weekly (check(-| )?in|temperature check))",
            "(if it doesn'?t work — (we (revisit|reassess))(,)? (no shame))",
          ],
          hint_tr:
            "Yapı: 'Let's build safety nets.' Türk: 'It will be fine' tatmin, somut plan.",
        },
        {
          speaker: "npc",
          message: "What about logistics? Rent? Chores?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(let'?s (split|share) (rent|costs) (proportionally|fairly))",
            "(chores — (rotation|whoever (sees|notices) it))",
            "(separate (accounts|cards) for (now|the first year))",
            "(let'?s (write|put) (it down|the agreement) on paper)",
            "(we (revisit|review) in (six months|three months))",
          ],
          hint_tr:
            "Pratik: 'Let's write it down.' Türk: 'We will see' belirsiz, somut sistem.",
        },
        {
          speaker: "npc",
          message: "Okay. Let's do this — but carefully.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(carefully|together)",
            "(let'?s (start (looking|searching)|find a place))",
            "(this (feels|is) (right|the next chapter))",
            "(i (love|adore) you)",
            "(let'?s (make this work|do it right))",
          ],
          hint_tr:
            "Kapanış: 'Together — let's do it right.' Türk: 'OK' düz, an'ı işaretle.",
        },
      ],
    },
  ],
};

export const onlineDating10: BundledLesson = {
  id: "arc.online_dating.10",
  skill_id: "arc.online_dating",
  index: 10,
  title: "Sahne 10 — 1. yıldönümü: gerçek konuşma",
  description: "1 yıl. Romantik akşam. Geriye bak, ileriye bak. Olgun + samimi.",
  estimated_minutes: 6,
  exercises: [
    {
      id: "ex.arc.online_dating.10.1",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "I'm grateful for",
      tr_translation: "Şuna minnettarım",
      example: "I'm grateful for every day with you.",
      example_tr: "Seninle geçen her güne minnettarım.",
    },
    {
      id: "ex.arc.online_dating.10.2",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Restoran. 1. yıldönümü. Şarap. Geriye + ileriye dönüş.",
      npc_role: "Emma (one-year anniversary, reflective)",
      setting: "Anniversary dinner, candlelit restaurant",
      turns: [
        {
          speaker: "npc",
          message: "One year. Can you believe it?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(no|honestly no)",
            "(feels like (six months|three))",
            "(and (also|somehow) (a lifetime|forever))",
            "(i (remember|still see) (that first night at swift))",
            "(cheers — (to us|to year one))",
          ],
          hint_tr:
            "Zaman duygusu: 'Feels like six months — and a lifetime.' Türk: 'One year fast' düz, paradoks.",
        },
        {
          speaker: "npc",
          message: "What's the best part of this year?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(honestly|that'?s hard))",
            "(the (small stuff|tuesday nights))",
            "(when you (laugh at|tolerate) my (jokes|chaos))",
            "(istanbul (trip|with my family))",
            "(every (sunday morning|coffee))",
          ],
          hint_tr:
            "Somut anlar: 'Tuesday nights — small stuff.' Türk: 'Everything' yetersiz, küçük anlar.",
        },
        {
          speaker: "npc",
          message: "I'm grateful. I really am.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(same|me too)",
            "(i'?m grateful for (you|this))",
            "(this year (changed|made) (me|my life))",
            "(you (taught|showed) me (how to (slow down|trust)))",
            "(here'?s to year two)",
          ],
          hint_tr:
            "Karşılık: 'You taught me how to slow down.' Türk: 'I love you' yetersiz, dönüşümü adlandır.",
        },
        {
          speaker: "npc",
          message: "What do you want from year two?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(more (of this|tuesday nights))",
            "(a trip (somewhere we'?ve never been))",
            "(less (work stress|phone))",
            "(maybe (start (looking at|talking about)) (the bigger picture))",
            "(everything you do — and a bit more (us))",
          ],
          hint_tr:
            "Vizyon: 'Start talking about the bigger picture.' Türk: 'More love' düz, somut hedef.",
        },
        {
          speaker: "npc",
          message: "Bigger picture sounds good. Let's keep going.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(let'?s)",
            "(i'?m (here|in) for (all of it))",
            "(to (year two|chapter two))",
            "(to (us|the next one))",
            "(i love you)",
          ],
          hint_tr:
            "Onay: 'I'm here for all of it.' Türk: 'Cheers' düz, taahhüt + duygu.",
        },
      ],
    },
  ],
};

// ============================================================
// ARC 9 — WORK CONFLICT RESOLUTION (8 sahne)
// Recurring NPCs: James (colleague), Lisa (manager)
// ============================================================

export const workConflict01: BundledLesson = {
  id: "arc.work_conflict.1",
  skill_id: "arc.work_conflict",
  index: 1,
  title: "Sahne 1 — James'in passive-aggressive emaili",
  description: "James CC'li email attı — kibar görünüp suçluyor. Telefonla cevap ver, yazıyla değil.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.arc.work_conflict.1.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "Could we hop on a call?",
      tr_translation: "Bir telefona geçelim mi?",
      example: "Could we hop on a quick call instead?",
      example_tr: "Onun yerine kısa bir telefon görüşmesi yapalım mı?",
    },
    {
      id: "ex.arc.work_conflict.1.2",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "James'i telefona aldın. Emaili kaldır, yüzleş — kibar ama net.",
      npc_role: "James (colleague, defensive)",
      setting: "Phone call, after receiving a passive-aggressive email CC'd to manager",
      turns: [
        {
          speaker: "npc",
          message: "Hey — saw your call request. What's up?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(hey james|thanks for picking up)",
            "(wanted to (chat|address) (your email|the thread))",
            "(felt (easier|better) on a call than (over email|in writing))",
            "(could we (clear|talk through) (the issue|something))",
            "(i think (we got|there'?s) crossed wires)",
          ],
          hint_tr:
            "Açılış: 'Felt easier on a call than over email.' Türk: 'You wrote bad' agresif, kanal değiştir.",
        },
        {
          speaker: "npc",
          message: "I just laid out the facts. Nothing personal.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i hear you)",
            "(reading it (back )?— it landed (differently|a bit pointed))",
            "(maybe i (read it wrong|took it personally))",
            "(could you (help me|walk me through) (the intent))",
            "(loop(-| )?in to lisa (felt|read as) escalation)",
          ],
          hint_tr:
            "Hisset: 'It landed a bit pointed — maybe I read it wrong.' Türk: 'You attacked' agresif, hisset + soru.",
        },
        {
          speaker: "npc",
          message: "I CC'd Lisa because I needed her to know the timing was off.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(that'?s (fair|reasonable))",
            "(next time — (could we (talk first|raise it 1:1))",
            "(loop her in (with both names|together))",
            "(the (cc|email) (felt|read like) it (skipped) a step)",
            "(i'?d (do the same|want a heads(-| )?up first))",
          ],
          hint_tr:
            "Sınır + alternatif: 'Could we talk first, then loop her in together?' Türk: 'Don't do that' düz, alternatif.",
        },
        {
          speaker: "npc",
          message: "Okay — fair. I didn't see it that way.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(appreciate (that|you saying that))",
            "(no hard feelings)",
            "(let'?s (start fresh|reset))",
            "(we'?re (on the same team|building the same thing))",
            "(should we (also )?(loop in lisa|tell lisa together))",
          ],
          hint_tr:
            "Onarım: 'Let's reset — same team.' Türk: 'OK' düz, ileriyi çiz.",
        },
        {
          speaker: "npc",
          message: "Let's just keep it 1:1 going forward.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(deal|agreed)",
            "(text|slack) (works|fine) for quick stuff",
            "(thanks for (the chat|hearing me out))",
            "(see you (at standup|in the office))",
            "(let'?s (grab coffee|debrief) (this week|tomorrow))",
          ],
          hint_tr:
            "Plan: 'Let's grab coffee this week.' Türk: 'OK bye' düz, ilişkiyi besle.",
        },
      ],
    },
  ],
};

export const workConflict02: BundledLesson = {
  id: "arc.work_conflict.2",
  skill_id: "arc.work_conflict",
  index: 2,
  title: "Sahne 2 — Toplantıda kesinti: 'let me finish'",
  description: "Stand-up'ta James sürekli sözünü kesiyor. Net + saygılı: 'let me finish.'",
  estimated_minutes: 4,
  exercises: [
    {
      id: "ex.arc.work_conflict.2.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "Let me finish",
      tr_translation: "Bitirmeme izin ver",
      example: "Hold on — let me finish my point.",
      example_tr: "Bekle — fikrimi bitirmeme izin ver.",
    },
    {
      id: "ex.arc.work_conflict.2.2",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Toplantı. James 3. kez kestin. Sınır koy — net, kibar, profesyonel.",
      npc_role: "James (interrupting in meeting)",
      setting: "Team meeting, third interruption in a row",
      turns: [
        {
          speaker: "npc",
          message: "Yeah but the real issue is —",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(james — hold on|sorry james))",
            "(let me finish (my point|the thought))",
            "(thirty seconds and i'?m done)",
            "(i wasn'?t (finished|done) — give me (a sec|a moment))",
            "(can you (let me wrap|hold that thought))",
          ],
          hint_tr:
            "Sınır: 'Let me finish — thirty seconds.' Türk: 'Don't interrupt' agresif, ad + zaman.",
        },
        {
          speaker: "npc",
          message: "Sorry — go ahead.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks|no worries)",
            "(as i was saying)",
            "(to (finish|wrap) the (thought|point))",
            "(my point was)",
            "(picking up where i left off)",
          ],
          hint_tr:
            "Devam: 'As I was saying.' Türk: 'OK' kapanış, kaldığın yerden devam.",
        },
        {
          speaker: "npc",
          message: "Got it. So what would you propose?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i'?d propose)",
            "(my (recommendation|suggestion) is)",
            "(two options — (one|first))",
            "(let'?s (test|prototype) (option a|the simpler version))",
            "(james — curious what you think now)",
          ],
          hint_tr:
            "Çözüm: 'I'd propose two options.' Türk: 'I don't know' eksik, yapı.",
        },
        {
          speaker: "npc",
          message: "Solid. Sorry for jumping in earlier.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(appreciate (that|you saying that))",
            "(no hard feelings)",
            "(let'?s (keep building|push it forward))",
            "(we'?re (on the same page|aligned))",
            "(can you (own|take) the prototype)",
          ],
          hint_tr:
            "Onarım: 'No hard feelings — keep building.' Türk: 'OK' düz, ileriye.",
        },
      ],
    },
  ],
};

export const workConflict03: BundledLesson = {
  id: "arc.work_conflict.3",
  skill_id: "arc.work_conflict",
  index: 3,
  title: "Sahne 3 — Lisa'ya escalate: 'I need your help'",
  description: "James devam ediyor. Lisa (yönetici) ile 1:1 — drama değil, fakt.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.arc.work_conflict.3.1",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "I want to flag a pattern",
      tr_translation: "Bir örüntüyü dikkatine sunmak istiyorum",
      example: "I want to flag a pattern, not a person.",
      example_tr: "Bir kişiyi değil, bir örüntüyü dikkatine sunmak istiyorum.",
    },
    {
      id: "ex.arc.work_conflict.3.2",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Lisa ile 1:1. Sakin, hazırlıklı, kanıtlı. Drama yapma — fakt sun.",
      npc_role: "Lisa (manager, listening carefully)",
      setting: "1:1 with manager, booked specifically",
      turns: [
        {
          speaker: "npc",
          message: "You said you wanted to talk about something. Floor's yours.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks for (making time|the space))",
            "(i want to flag a pattern (with james|on the team))",
            "(this isn'?t (about him personally|personal))",
            "(i'?ve (tried (to address it|1:1)) (a few times))",
            "(i need your (read|perspective))",
          ],
          hint_tr:
            "Drama yok: 'Flag a pattern, not a person.' Türk: 'James is bad' suçlama, sistem dili.",
        },
        {
          speaker: "npc",
          message: "Walk me through it.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(three (incidents|examples) — (recent|last two weeks))",
            "(the cc'?d email|the meeting interruptions))",
            "(i (handled|addressed) (the first two) (1:1|directly))",
            "(the (pattern|behavior) continues)",
            "(i (kept|tracked) (a paper trail|notes))",
          ],
          hint_tr:
            "Kanıt: 'Three incidents — I have notes.' Türk: 'He is rude' belirsiz, somut + tarih.",
        },
        {
          speaker: "npc",
          message: "What outcome do you want?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(not punishment — (just (alignment|a shift)))",
            "(a (group|team) (norm|conversation) (around interruption|email))",
            "(maybe (you (mediate|sit in)) on (a chat))",
            "(i don'?t want (to be the one always raising it))",
            "(could (we|you) (frame|address) (it as a team) (thing|norm))",
          ],
          hint_tr:
            "Sonuç istek: 'Not punishment — team norm.' Türk: 'Fire him' aşırı, sistem değişimi.",
        },
        {
          speaker: "npc",
          message: "Fair. I'll talk to him separately and we'll bring it up in retro.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thank you|appreciate (it|that))",
            "(could we (keep|frame) it (anonymized|not attributable to me))",
            "(let me know if you need (the notes|specifics))",
            "(i (trust|appreciate) (you|how you handle this))",
            "(thanks for (taking it seriously))",
          ],
          hint_tr:
            "Operasyonel: 'Could we keep it anonymized?' Türk: 'OK thanks' düz, korunma iste.",
        },
      ],
    },
  ],
};

export const workConflict04: BundledLesson = {
  id: "arc.work_conflict.4",
  skill_id: "arc.work_conflict",
  index: 4,
  title: "Sahne 4 — James'ten özür: kabul + ileri",
  description: "James direkt geldi: 'I overstepped.' Onurla kabul et + ileri planı kur.",
  estimated_minutes: 4,
  exercises: [
    {
      id: "ex.arc.work_conflict.4.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "Apology accepted",
      tr_translation: "Özür kabul edildi",
      example: "Apology accepted — let's move forward.",
      example_tr: "Özür kabul edildi — ileriye bakalım.",
    },
    {
      id: "ex.arc.work_conflict.4.2",
      type: "roleplay_chat",
      difficulty: 3,
      scenario_description:
        "James 1:1 istedi. Geldi. Saygılı kabul et — sahiplenmesini onurla.",
      npc_role: "James (genuinely apologizing)",
      setting: "1:1 booked by James, conference room",
      turns: [
        {
          speaker: "npc",
          message: "Hey — Lisa talked to me. I want to apologize properly.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks for (coming|reaching out))",
            "(that means (a lot|something))",
            "(i'?m listening)",
            "(appreciate (you owning it|the move))",
            "(go ahead)",
          ],
          hint_tr:
            "Yer aç: 'I'm listening — that means a lot.' Türk: 'OK' kapanış, ona alan.",
        },
        {
          speaker: "npc",
          message: "I was stressed about a deadline and took it out on you. That wasn't fair.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thank you for (saying|owning) that)",
            "(i (get it|hear that) — (deadlines are brutal))",
            "(it (hit harder than|landed worse than) you (intended))",
            "(apology accepted)",
            "(now i (know|understand) (the context))",
          ],
          hint_tr:
            "Kabul + bağlam: 'Apology accepted — deadlines are brutal.' Türk: 'OK' soğuk, empati + kabul.",
        },
        {
          speaker: "npc",
          message: "Going forward — let's just talk directly.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(deal|agreed)",
            "(if (i ever) (rub you wrong|frustrate you) — (slack me|tap me))",
            "(same here — (i'?ll come to you))",
            "(no (cc'?s|email tennis))",
            "(let'?s (work this|build) better)",
          ],
          hint_tr:
            "Yeni norm: 'No email tennis.' Türk: 'OK' düz, ortak ilke.",
        },
        {
          speaker: "npc",
          message: "Thanks for being so cool about it.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(we (all|both) have (off|tough) weeks)",
            "(i (respect|appreciate) (the apology|you showing up))",
            "(let'?s grab (a coffee|a beer))",
            "(no big deal — (just glad it'?s out))",
            "(see you at standup)",
          ],
          hint_tr:
            "Sıcaklık: 'Let's grab a coffee.' Türk: 'OK' düz, ilişki onarımı.",
        },
      ],
    },
  ],
};

export const workConflict05: BundledLesson = {
  id: "arc.work_conflict.5",
  skill_id: "arc.work_conflict",
  index: 5,
  title: "Sahne 5 — Lisa'dan eleştiri: 'you push back too hard'",
  description: "Lisa 1:1. 'Sometimes you push back too hard.' Defansif olma — keşfet.",
  estimated_minutes: 6,
  exercises: [
    {
      id: "ex.arc.work_conflict.5.1",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "Can you give me an example?",
      tr_translation: "Bir örnek verir misin?",
      example: "Could you give me a specific example?",
      example_tr: "Bana spesifik bir örnek verir misin?",
    },
    {
      id: "ex.arc.work_conflict.5.2",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Lisa eleştiri veriyor — kabul + sondaj. Defansif olma.",
      npc_role: "Lisa (giving feedback)",
      setting: "1:1, Lisa giving constructive feedback",
      turns: [
        {
          speaker: "npc",
          message: "I want to give you some feedback. Sometimes you push back too hard.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks for (raising|telling me))",
            "(can you (give me|share) a (specific|recent) example)",
            "(i want to (understand|hear) (the context|what landed))",
            "(i'?d rather (hear it|know))",
            "(let me (sit with that|listen first))",
          ],
          hint_tr:
            "Defansif değil: 'Can you give me a specific example?' Türk: 'No I don't' bahane, somut iste.",
        },
        {
          speaker: "npc",
          message: "Last week's planning meeting. You shut down two ideas in 30 seconds.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i (remember|see what you mean))",
            "(i (thought i was|in my head was) (being efficient|raising flags))",
            "(it (probably|likely) (felt|read) as (dismissive|harsh))",
            "(that'?s (not the intent|on me))",
            "(how would you have (wanted|liked) (me to handle it))",
          ],
          hint_tr:
            "Kabul + soru: 'How would you have wanted me to handle it?' Türk: 'I was right' defansif, öğrenmeye aç.",
        },
        {
          speaker: "npc",
          message: "Even just one extra sentence — 'I see the appeal, but here's my concern.'",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(that'?s (a great|simple) reframe)",
            "(noted — (acknowledge first|build a bridge))",
            "(i'?ll (practice|try) that)",
            "(can you (catch me|flag me) (in the moment if i miss it))",
            "(thanks for (the specific|the tool))",
          ],
          hint_tr:
            "Pratik: 'Acknowledge first — build a bridge.' Türk: 'OK' düz, tekrar et = içselleştir.",
        },
        {
          speaker: "npc",
          message: "Will do. I respect the directness — just want it to land better.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(appreciate (that|that framing))",
            "(directness is something i (value|don'?t want to lose))",
            "(but i hear (the delivery|the how))",
            "(let'?s (review|check in) in (a few weeks|next 1:1))",
            "(thanks for (caring enough|making me better))",
          ],
          hint_tr:
            "Sentez: 'Directness is something I value — but I hear the delivery.' Türk: 'OK' düz, kim olduğu + ne öğrendi.",
        },
      ],
    },
  ],
};

export const workConflict06: BundledLesson = {
  id: "arc.work_conflict.6",
  skill_id: "arc.work_conflict",
  index: 6,
  title: "Sahne 6 — James'in büyük hatası: nasıl ele alırsın",
  description: "James büyük bir hata yaptı — production etkilendi. Onu suçlama, ona destek ol.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.arc.work_conflict.6.1",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "We've all been there",
      tr_translation: "Hepimizin başına geldi",
      example: "Don't beat yourself up — we've all been there.",
      example_tr: "Kendini suçlama — hepimizin başına geldi.",
    },
    {
      id: "ex.arc.work_conflict.6.2",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "James DM atmış — hata yaptı, panikte. Sen ona ulaş — yardım et.",
      npc_role: "James (panicking after mistake)",
      setting: "Slack DM after James caused a production issue",
      turns: [
        {
          speaker: "npc",
          message: "I screwed up. Bad. Production went down because of me.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(hey — breathe)",
            "(let'?s (work this|focus) first)",
            "(we'?ll (debrief|process) after)",
            "(what'?s the (current state|status))",
            "(i'?m (with you|on the channel))",
          ],
          hint_tr:
            "Sakinleştir: 'Breathe — let's work this first.' Türk: 'You did wrong' yetersiz, panik kıs.",
        },
        {
          speaker: "npc",
          message: "Lisa is going to fire me.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(stop — (no she'?s not))",
            "(let'?s (fix it first|stabilize) — (worry later))",
            "(we'?ve all been there)",
            "(this happens — (not the end))",
            "(let me (jump in|help (pair on this)))",
          ],
          hint_tr:
            "Empati: 'We've all been there.' Türk: 'You will be OK' belirsiz, kalıp.",
        },
        {
          speaker: "npc",
          message: "Thanks. Can you really pair right now?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|of course)",
            "(jumping into the (channel|call) now)",
            "(let'?s (share screens|figure this out))",
            "(what do you (already (see|know|tried)))",
            "(i'?m clearing (my afternoon|this hour))",
          ],
          hint_tr:
            "Aksiyon: 'Clearing this hour.' Türk: 'OK' düz, somut zaman.",
        },
        {
          speaker: "npc",
          message: "I appreciate this — really.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(no need|come on)",
            "(this is (what we do|the team))",
            "(you'?d do the (same|same for me))",
            "(let'?s (focus|debug) — apologies later)",
            "(we got this)",
          ],
          hint_tr:
            "Takım: 'You'd do the same.' Türk: 'OK' düz, karşılıklılık göster.",
        },
      ],
    },
  ],
};

export const workConflict07: BundledLesson = {
  id: "arc.work_conflict.7",
  skill_id: "arc.work_conflict",
  index: 7,
  title: "Sahne 7 — Lisa'dan promosyon: 'you handled that well'",
  description: "Lisa 1:1. 'You handled that conflict maturely.' Övgüyü kabul et — büyütme.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.arc.work_conflict.7.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "I learned a lot from",
      tr_translation: "Şundan çok şey öğrendim",
      example: "I learned a lot from how you coached me.",
      example_tr: "Beni nasıl yönlendirdiğinden çok şey öğrendim.",
    },
    {
      id: "ex.arc.work_conflict.7.2",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Lisa övüyor. Türk içgüdüsü: minimize et. Sahiplen.",
      npc_role: "Lisa (positive feedback)",
      setting: "1:1 with manager, after handling conflict well",
      turns: [
        {
          speaker: "npc",
          message: "I want to say — you handled the James situation maturely. Both ends.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thank you|that means (a lot|something))",
            "(i (tried|worked at) (it|being intentional))",
            "(i learned (a lot|loads) from (your feedback|the coaching))",
            "(it took (a few takes|some pushing))",
            "(i wouldn'?t have (handled it|landed it) without (your input|the framing))",
          ],
          hint_tr:
            "Kabul + büyütme: 'It took a few takes — your feedback helped.' Türk: 'No it was easy' minimize, sahiplen.",
        },
        {
          speaker: "npc",
          message: "That's exactly the maturity I look for in senior engineers.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(that'?s (a lot to hear|a great compliment))",
            "(does that mean (i'?m (on track|near a promo)))",
            "(i'?d love to (talk about|hear) (the next steps|the path))",
            "(noted — (it gives me|i have) more (to build on|fuel))",
            "(thanks for (saying so|the read))",
          ],
          hint_tr:
            "Fırsat yakala: 'Does that mean I'm on track?' Türk: 'OK thanks' düz, kariyer sor.",
        },
        {
          speaker: "npc",
          message: "Let's start putting together a promo case.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|i'?d love that)",
            "(what (should i|do you want me to) (write|prepare|gather))",
            "(any (specific|key) (criteria|examples) to (highlight|hit))",
            "(can we (target|aim) (the next cycle|q4))",
            "(thanks for (advocating|sponsoring))",
          ],
          hint_tr:
            "Plan: 'What should I prepare?' Türk: 'Wow OK' düz, aktif katıl.",
        },
        {
          speaker: "npc",
          message: "I'll send a doc. Let's draft it together.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thank you (so much|lisa))",
            "(i won'?t let you down)",
            "(this (means|matters)) (a lot|the world))",
            "(when works for the (first|draft) session)",
            "(let'?s (build|do) this)",
          ],
          hint_tr:
            "Söz: 'I won't let you down.' Türk: 'OK thanks' düz, taahhüt.",
        },
      ],
    },
  ],
};

export const workConflict08: BundledLesson = {
  id: "arc.work_conflict.8",
  skill_id: "arc.work_conflict",
  index: 8,
  title: "Sahne 8 — James'le mentor anı: tam çember",
  description: "James yeni juniora pasif-agresif davranıyor — onu uyar, mentor ol.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.arc.work_conflict.8.1",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "I've been there",
      tr_translation: "Ben de yaşadım",
      example: "Listen — I've been there. Can I share?",
      example_tr: "Dinle — ben de yaşadım. Paylaşabilir miyim?",
    },
    {
      id: "ex.arc.work_conflict.8.2",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "James junior'a sert davrandı. Onu kenara çek — empati + sınır.",
      npc_role: "James (now in your shoes from arc start)",
      setting: "Quick aside after team meeting where James was harsh",
      turns: [
        {
          speaker: "npc",
          message: "What's up?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(hey — can we (chat|step away))",
            "(noticed (you were|how you came at) (a bit harsh|sharp) with (the new junior))",
            "(can i (flag|share) something))",
            "(i wanted to (catch|talk to) you (quickly|before it spreads))",
            "(don'?t (kill me|take this wrong))",
          ],
          hint_tr:
            "Yumuşak açıl: 'Don't take this wrong.' Türk: 'You were mean' agresif, çerçevele.",
        },
        {
          speaker: "npc",
          message: "Was I? I didn't realize.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yeah — (it landed (sharp|harsh)))",
            "(i'?ve been there — (i did the same thing))",
            "(when (i was new|i didn'?t know))",
            "(the (interruption|tone) (felt|read) like (it'?s) over)",
            "(no judgment — (just want to (catch|name) it))",
          ],
          hint_tr:
            "Empati: 'I've been there.' Türk: 'You did wrong' suçlama, kendi tecrübeni paylaş.",
        },
        {
          speaker: "npc",
          message: "Thanks for telling me 1:1. Like we agreed.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(of course|that'?s our deal)",
            "(no email tennis)",
            "(want me to (introduce|smooth it over) with (the junior|her))",
            "(any (way i can|thing i can) help (recover|repair))",
            "(circle (back to her|with a (kinder )?word))",
          ],
          hint_tr:
            "Onarım: 'Want me to smooth it over?' Türk: 'OK' düz, ekip iyileştir.",
        },
        {
          speaker: "npc",
          message: "I'll go talk to her myself. Thanks for the heads up.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(any time)",
            "(that'?s (the move|the right call))",
            "(closes (a loop|the circle))",
            "(we'?re (better|a better team) (for this|because of these talks))",
            "(see you (at lunch|tomorrow))",
          ],
          hint_tr:
            "Tam çember: 'Closes a loop.' Türk: 'OK' düz, döngü adlandır.",
        },
      ],
    },
  ],
};

// ============================================================
// ARC 10 — SALARY NEGOTIATION (8 sahne)
// Recurring NPCs: Megan (HR), David (hiring manager)
// ============================================================

export const salaryNeg01: BundledLesson = {
  id: "arc.salary_neg.1",
  skill_id: "arc.salary_neg",
  index: 1,
  title: "Sahne 1 — Megan (HR) ilk arama: range",
  description: "Recruiter Megan ilk arama. 'What are you targeting?' — net + esnek.",
  estimated_minutes: 4,
  exercises: [
    {
      id: "ex.arc.salary_neg.1.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "I'm looking in the range of",
      tr_translation: "Şu aralığa bakıyorum",
      example: "I'm looking in the range of 80-90.",
      example_tr: "80-90 aralığına bakıyorum.",
    },
    {
      id: "ex.arc.salary_neg.1.2",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Megan ile telefon. İlk discovery call. Range sor — ama önce sen söyleme.",
      npc_role: "Megan (HR / recruiter)",
      setting: "Recruiter screening call, first contact",
      turns: [
        {
          speaker: "npc",
          message: "So — what are you targeting in terms of comp?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(great question|happy to (talk through that|share))",
            "(before i (commit|share)) — (could you (share the band|tell me the range))",
            "(i'?m flexible — (depends on (total comp|equity|benefits)))",
            "(i'?m looking in the range of (\\d+|eighty)(-| to )(\\d+|ninety))",
            "(want to make sure we'?re (in the same ballpark|aligned))",
          ],
          hint_tr:
            "Önce sen: 'Could you share the band?' Türk: ilk sayıyı söyle = kaybetme. Soru iade.",
        },
        {
          speaker: "npc",
          message: "Band is 75-95. Where do you sit?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks for (sharing|the range))",
            "(i'?m looking at the (upper|top) (end|half) (of that|of 95))",
            "(given my (experience|background)) (i'?d target around (90))",
            "(depends on (the (full package|equity|sign(-| )?on)))",
            "(let'?s (talk numbers|drill in) (later|after the interview))",
          ],
          hint_tr:
            "Üst banta yakın: 'Upper end — given my background.' Türk: orta düz, kanıtlı üst.",
        },
        {
          speaker: "npc",
          message: "Reasonable. What about benefits — anything must-have?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(equity (matters|is important))",
            "(remote (flexibility|days))",
            "(learning (budget|stipend))",
            "(visa support (if relevant|if i need it))",
            "(what does the (full|standard) package look like)",
          ],
          hint_tr:
            "Liste: 'Equity, remote, visa support.' Türk: 'Just salary' kısıtlı, yan haklar.",
        },
        {
          speaker: "npc",
          message: "Standard equity, 2 days remote, 1500 learning budget.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(noted|appreciate (the transparency))",
            "(could we (revisit|discuss) (the equity vesting|the schedule))",
            "(2 days remote — (is that (negotiable|flexible)))",
            "(makes sense — (let'?s (continue|push forward)))",
            "(when'?s the next (step|round))",
          ],
          hint_tr:
            "Detay sor: 'Is remote negotiable?' Türk: 'OK good' düz, somut sor.",
        },
        {
          speaker: "npc",
          message: "Let me schedule you with the hiring manager. David.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(perfect|let'?s do it)",
            "(what (should i|do you recommend i) (prep|read))",
            "(any (advice|insider) on david)",
            "(thanks (megan|for the smooth (chat|process)))",
            "(send the calendar (invite|link))",
          ],
          hint_tr:
            "Hazırlık: 'What should I prep?' Türk: 'OK thanks' düz, içeri bilgi al.",
        },
      ],
    },
  ],
};

export const salaryNeg02: BundledLesson = {
  id: "arc.salary_neg.2",
  skill_id: "arc.salary_neg",
  index: 2,
  title: "Sahne 2 — David ile teknik mülakat: kişilik göster",
  description: "Hiring manager David. Teknik + kültür. Kendi hikayeni anlat.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.arc.salary_neg.2.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "Walk me through",
      tr_translation: "Adım adım anlat",
      example: "Could you walk me through your last project?",
      example_tr: "Son projeni adım adım anlatır mısın?",
    },
    {
      id: "ex.arc.salary_neg.2.2",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "David ile video. Klasik open: 'tell me about yourself.' STAR formatı.",
      npc_role: "David (hiring manager)",
      setting: "Video interview with hiring manager",
      turns: [
        {
          speaker: "npc",
          message: "Great to meet you. Walk me through your background.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks (david|for the time))",
            "(quick (three-line|short) version)",
            "(started in (istanbul|turkey) at (a fintech))",
            "(moved to london (two years ago))",
            "(most recently (owned|led) (the payments (refactor|migration)))",
          ],
          hint_tr:
            "Yapı: 'Quick three-line version.' Türk: uzun monolog değil, paragraf.",
        },
        {
          speaker: "npc",
          message: "Walk me through the payments refactor — biggest challenge?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(situation — (legacy code with (no docs|hidden coupling)))",
            "(task — (cut latency by 40%|migrate without downtime))",
            "(action — (i (proposed|designed) (a phased approach|three phases)))",
            "(result — (shipped (under (the deadline|budget)|on time)))",
            "(biggest challenge (was|came from) (stakeholder alignment|legacy edge cases))",
          ],
          hint_tr:
            "STAR: Situation/Task/Action/Result. Türk: 'It was hard' eksik, yapılı.",
        },
        {
          speaker: "npc",
          message: "How did you handle pushback on the design?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(one senior (was skeptical|pushed back))",
            "(i (set up|booked) a (1:1|whiteboard))",
            "(walked through (the tradeoffs|the alternatives))",
            "(incorporated (their input|two of their concerns))",
            "(the (revised|final) design (won them over|got buy(-| )?in))",
          ],
          hint_tr:
            "Kişilik: 'Walked through tradeoffs — incorporated their input.' Türk: 'I convinced' yetersiz, süreç.",
        },
        {
          speaker: "npc",
          message: "What about us interests you?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(two things — (the (problem|space)) and (the team))",
            "(your (engineering culture|writing) (stood out|caught me))",
            "(i (read|listened to) the (recent (talk|podcast|blog)))",
            "(i want to (work on|build) (something|a product) at (scale))",
            "(what excites you about the (role|team) right now)",
          ],
          hint_tr:
            "Spesifik: 'Read the recent blog — what excites you?' Türk: 'Good company' belirsiz, somut + iade.",
        },
        {
          speaker: "npc",
          message: "I love that you've done your homework. What questions for me?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(several|a few))",
            "(how (do you|does the team) (define|measure) success (for this role))",
            "(what'?s (your biggest|the team'?s biggest) (challenge|frustration) right now)",
            "(walk me through (a typical week|the first 90 days))",
            "(if i looked back in a year — what would (a great hire|i have done))",
          ],
          hint_tr:
            "Derin soru: 'What would a great hire have done?' Türk: 'No questions' yetersiz, projektif.",
        },
      ],
    },
  ],
};

export const salaryNeg03: BundledLesson = {
  id: "arc.salary_neg.3",
  skill_id: "arc.salary_neg",
  index: 3,
  title: "Sahne 3 — Megan'dan offer: 'we'd like to extend'",
  description: "Megan offer veriyor — 82k. Sen 90 hedefliyorsun. Önce dinle.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.arc.salary_neg.3.1",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "I appreciate the offer",
      tr_translation: "Teklifi takdir ediyorum",
      example: "I appreciate the offer — let me digest.",
      example_tr: "Teklifi takdir ediyorum — biraz düşüneyim.",
    },
    {
      id: "ex.arc.salary_neg.3.2",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Megan'dan teklif. Sevin ama hemen kabul etme. Detay sor.",
      npc_role: "Megan (HR, delivering offer)",
      setting: "Phone call from recruiter with offer",
      turns: [
        {
          speaker: "npc",
          message: "Great news — David loved you. We'd like to extend an offer of 82.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thank you (so much|that'?s great news))",
            "(i'?m (excited|thrilled))",
            "(appreciate the (offer|trust))",
            "(could you (walk me through|share) the (full package|written details))",
            "(when do you need (a decision|me to respond))",
          ],
          hint_tr:
            "Heyecan + soğukkanlı: 'Excited — could you share the full package?' Türk: 'Yes I accept' acele, detay sor.",
        },
        {
          speaker: "npc",
          message: "82 base, 10% bonus, standard equity vest.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(noted|got it)",
            "(could you (send|email) (it|that) in writing)",
            "(what'?s the (equity (cliff|vesting)))",
            "(any (sign(-| )?on|relocation) bonus)",
            "(let me (digest|sit with this) — back to you (tomorrow|in 24 hours))",
          ],
          hint_tr:
            "Zaman al: 'Let me digest — back to you in 24 hours.' Türk: 'OK yes' acele, alan iste.",
        },
        {
          speaker: "npc",
          message: "Of course. Want to ask anything before we get off?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes — (is there (flexibility|room) on the base))",
            "(i was (targeting|looking at) (closer to|something around) 90)",
            "(i'?m (excited about the role|on board with the team))",
            "(want to (make the package work|land somewhere we both feel good))",
            "(could we (revisit|talk about) the (sign(-| )?on|equity))",
          ],
          hint_tr:
            "İlk pazarlık seed: 'Is there flexibility on the base?' Türk: 'It is low' belirsiz, soru.",
        },
        {
          speaker: "npc",
          message: "Let me check with David. I'll come back tomorrow.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(perfect|that works)",
            "(thanks (megan|for taking it back))",
            "(if (it helps|context (matters)) — (i have (a competing offer|market data)))",
            "(no rush from my side — (i want this to work))",
            "(speak tomorrow)",
          ],
          hint_tr:
            "Tutum: 'I want this to work.' Türk: 'I want more money' kaba, ortak çıkar.",
        },
      ],
    },
  ],
};

export const salaryNeg04: BundledLesson = {
  id: "arc.salary_neg.4",
  skill_id: "arc.salary_neg",
  index: 4,
  title: "Sahne 4 — David ile direkt pazarlık: 'I want this role'",
  description: "David seni aradı. Direkt pazarlık. Net + saygılı.",
  estimated_minutes: 6,
  exercises: [
    {
      id: "ex.arc.salary_neg.4.1",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "I want this role",
      tr_translation: "Bu rolü istiyorum",
      example: "I want this role — let's make the package work.",
      example_tr: "Bu rolü istiyorum — paketi birlikte halledelim.",
    },
    {
      id: "ex.arc.salary_neg.4.2",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "David ile telefon. Direkt sayı pazarlığı. Veri + tutum.",
      npc_role: "David (hiring manager, direct)",
      setting: "Direct call with hiring manager, negotiation",
      turns: [
        {
          speaker: "npc",
          message: "Megan tells me you'd like to revisit comp. Where are you?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks for (calling|making time))",
            "(first — (i want this role|i'?m excited about the team))",
            "(on base — (i'?m looking at|i was targeting) (90|something closer to 90))",
            "(let'?s (make the package work|find common ground))",
            "(here'?s (the case|why) i think 90 is fair)",
          ],
          hint_tr:
            "Önce taahhüt: 'I want this role.' Türk: 'I want more' agresif, niyet + sayı.",
        },
        {
          speaker: "npc",
          message: "What's your case?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(three things — (delivery|leverage|market))",
            "(i'?ve (owned|delivered) (the payments refactor|a 7-figure migration))",
            "(comparable roles in london (sit at|range to) (90-100))",
            "(i'?m (interviewing|fielding offers) at (similar bands))",
            "(the (data|comparables) (support|justify) 90)",
          ],
          hint_tr:
            "Veri: 'Comparable roles at 90-100, similar offers.' Türk: 'I deserve' belirsiz, kanıt + market.",
        },
        {
          speaker: "npc",
          message: "We can stretch to 86, plus a 5k sign-on.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks for (the move|coming back))",
            "(let me push (gently|a bit further))",
            "(could we (land|meet) at 88 base — i'?ll (waive the sign(-| )?on|take a smaller sign(-| )?on))",
            "(equity (could close|covers) the gap — what'?s flexible there)",
            "(would (additional vacation|more remote days) (sweeten this|be on the table))",
          ],
          hint_tr:
            "Yaratıcı orta: '88 base, waive sign-on.' Türk: 'Yes OK' uzlaşma, alternatif eksenleri kullan.",
        },
        {
          speaker: "npc",
          message: "88 base, 3k sign-on. Final.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(works for me)",
            "(deal — (let'?s do it|i'?m in))",
            "(thanks (david|for meeting me))",
            "(let'?s (lock|finalize) the paperwork)",
            "(i won'?t let you down)",
          ],
          hint_tr:
            "Kapatma: 'Deal — I'm in.' Türk: 'OK' düz, kararlı.",
        },
      ],
    },
  ],
};

export const salaryNeg05: BundledLesson = {
  id: "arc.salary_neg.5",
  skill_id: "arc.salary_neg",
  index: 5,
  title: "Sahne 5 — Counter-offer dengeleme: 'I value loyalty'",
  description: "Eski şirket counter sundu. Megan'a sakin bilgi ver — ama kararlı dur.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.arc.salary_neg.5.1",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "It's not just about money",
      tr_translation: "Sadece para meselesi değil",
      example: "Honestly, it's not just about money.",
      example_tr: "Açıkçası sadece para meselesi değil.",
    },
    {
      id: "ex.arc.salary_neg.5.2",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Megan'la telefon. Eski şirket counter sundu. Onu bilgilendir, ama kararlı dur.",
      npc_role: "Megan (HR, sensing wavering)",
      setting: "Follow-up call, after old company counter-offered",
      turns: [
        {
          speaker: "npc",
          message: "Just checking in — are we still on for signing tomorrow?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes — (with one thing to share))",
            "(my (current|existing) company (came back with a counter|matched the offer))",
            "(i (wanted to be transparent|owed you a heads(-| )?up))",
            "(no change of (heart|plans) — but i wanted you to know)",
            "(let me (walk you through|share) the situation)",
          ],
          hint_tr:
            "Şeffaflık: 'I owed you a heads-up.' Türk: gizle, eşit oyun.",
        },
        {
          speaker: "npc",
          message: "What did they offer?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(a (3k|5%) bump to my (current|existing) base)",
            "(plus (a title|some equity))",
            "(it'?s (flattering|not nothing))",
            "(but i'?m (still on board|leaning toward you))",
            "(it'?s not just about money)",
          ],
          hint_tr:
            "Sayı + tutum: 'It's not just about money.' Türk: 'They offered more' tehdit, sakin.",
        },
        {
          speaker: "npc",
          message: "What would close it for you?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(honestly — (you'?re already there))",
            "(the (role|growth|product) is (what i want|the bigger story))",
            "(i value (loyalty|the team i already have)) — but (the new chapter (pulls|wins))",
            "(if (the (sign(-| )?on)) (could move to|stretches to) 5)",
            "(no change needed — (just being honest about (the counter|context)))",
          ],
          hint_tr:
            "Hafif baskı: 'If sign-on could stretch to 5.' Türk: 'Match them' agresif, esnek.",
        },
        {
          speaker: "npc",
          message: "Let me see if I can push the sign-on to 5.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks (megan|for the effort))",
            "(either way (i'?m signing|i'?m in))",
            "(appreciate (you advocating))",
            "(i'?ll wait for (the (final|updated) offer letter))",
            "(this (won'?t affect|isn'?t about) (my decision))",
          ],
          hint_tr:
            "Güven ver: 'Either way I'm signing.' Türk: 'OK match' baskı, kararlı + esnek.",
        },
      ],
    },
  ],
};

export const salaryNeg06: BundledLesson = {
  id: "arc.salary_neg.6",
  skill_id: "arc.salary_neg",
  index: 6,
  title: "Sahne 6 — Equity sorusu: 'walk me through vesting'",
  description: "Equity detayları. Megan ile. Soru sor — anladığını göster.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.arc.salary_neg.6.1",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "Could you walk me through the vesting?",
      tr_translation: "Vesting'i adım adım anlatır mısın?",
      example: "Could you walk me through the vesting schedule?",
      example_tr: "Vesting takvimini adım adım anlatır mısın?",
    },
    {
      id: "ex.arc.salary_neg.6.2",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Megan ile equity konuşması. Türkler: equity'yi tam anlamayız. Sor.",
      npc_role: "Megan (explaining equity)",
      setting: "Phone call dedicated to equity details",
      turns: [
        {
          speaker: "npc",
          message: "Equity — your grant is 0.05% of the company.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks — (could you walk me through (the vesting|the schedule)))",
            "(what does that translate to in (units|shares|dollar value))",
            "(what'?s the (cliff|standard vesting))",
            "(any (preferred|common) stock)",
            "(what'?s the (last|recent) (valuation|409a))",
          ],
          hint_tr:
            "Sondaj: 'Translate to dollar value?' Türk: 'OK' kabul, somut soru.",
        },
        {
          speaker: "npc",
          message: "Four-year vest, one-year cliff. At last round, that's about 50k worth.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(noted)",
            "(so (12.5k/year|12500 a year) (in (vested )?value))",
            "(if i (leave|exit) at (year 2|the 2-year mark) — what (do i (get|keep)))",
            "(any (option pool|refresh) (grants|after))",
            "(can i (early(-| )?exercise|get an 83b))",
          ],
          hint_tr:
            "Anla göster: 'So 12.5k a year vested.' Türk: 'OK' düz, matematiği yap.",
        },
        {
          speaker: "npc",
          message: "Early exercise yes. Refresh after 2 years if you're a strong performer.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(makes sense)",
            "(could you (send|share) (the (option grant|stock) (agreement|doc)))",
            "(any (resources|reading) (on|to understand) (us startup equity))",
            "(thanks for (the patience|walking me through))",
            "(any (tax|withholding) gotchas i should know)",
          ],
          hint_tr:
            "Riski sor: 'Tax gotchas?' Türk: 'OK' düz, görünmeyen sor.",
        },
        {
          speaker: "npc",
          message: "I'll send a 1-pager. Tax-wise, talk to an accountant.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(perfect|appreciate that)",
            "(any (accountant|firm) you (recommend|trust))",
            "(thanks (so much|for the transparency))",
            "(speak (after i digest|in a day or two))",
            "(this (helps|clarifies))",
          ],
          hint_tr:
            "Network: 'Any accountant you recommend?' Türk: 'OK bye' düz, ek değer al.",
        },
      ],
    },
  ],
};

export const salaryNeg07: BundledLesson = {
  id: "arc.salary_neg.7",
  skill_id: "arc.salary_neg",
  index: 7,
  title: "Sahne 7 — Visa konusu: 'sponsorship details'",
  description: "Türk vatandaşı — visa lazım. Megan ile sponsorship sürecini netleştir.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.arc.salary_neg.7.1",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "I'll need sponsorship",
      tr_translation: "Sponsorluk gerekecek",
      example: "I'll need visa sponsorship — what's the process?",
      example_tr: "Vize sponsorluğu gerekecek — süreç nasıl?",
    },
    {
      id: "ex.arc.salary_neg.7.2",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Visa süreci kritik. Net + hazırlıklı. Maliyet kim öder, kim destekler.",
      npc_role: "Megan (HR, handling visa logistics)",
      setting: "Visa sponsorship logistics call",
      turns: [
        {
          speaker: "npc",
          message: "We need to talk visa. You're on a Turkish passport, right?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|that'?s right)",
            "(i'?ll need (visa )?sponsorship)",
            "(currently on (a skilled worker|tier 2) visa with my employer)",
            "(this would be a (transfer|new application))",
            "(i'?ve done (this before|been through this))",
          ],
          hint_tr:
            "Net: 'I'll need sponsorship — done it before.' Türk: 'I don't know' kapalı, deneyimi göster.",
        },
        {
          speaker: "npc",
          message: "Do you have a current sponsor license number?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes — (here'?s|i'?ll send) the (license number|cos))",
            "(my (current|existing) sponsor is)",
            "(i (have|will share) (my (cos|certificate)) (number)?)",
            "(would you (need|like) (the brp|bpr) details)",
            "(i can (forward|loop you in) on the (timeline|paperwork))",
          ],
          hint_tr:
            "Belgeler: 'Here's the CoS number.' Türk: 'I have papers' eksik, terimler.",
        },
        {
          speaker: "npc",
          message: "Who covers the visa fees — us or you?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(my understanding is (the company (covers|sponsors) (the fees|costs)))",
            "(typically the (sponsor|employer) (pays|covers))",
            "(could you (confirm|put that in writing))",
            "(any (relocation|cost) (support|allowance))",
            "(let'?s (clarify|include) that (in the offer))",
          ],
          hint_tr:
            "Standart bekleyiş: 'Typically employer covers — could you confirm in writing?' Türk: 'How much?' eksik, norm.",
        },
        {
          speaker: "npc",
          message: "We cover. Standard package — IHS, application, biometrics.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(perfect|thanks for (clarifying|confirming))",
            "(any (timeline|how long) for (cos issuance|the application))",
            "(when (can|should) i (give notice|submit))",
            "(what (about|about my (dependents|partner))",
            "(thanks (so much|for the smooth (handling|process)))",
          ],
          hint_tr:
            "Zaman + bağımlı: 'Timeline? Dependents?' Türk: 'OK' düz, eksik soru.",
        },
        {
          speaker: "npc",
          message: "Two weeks to CoS. We can do dependents — extra paperwork.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(noted|got it)",
            "(thanks (megan|for the help))",
            "(i'?ll (start gathering|line up) the (documents|paperwork))",
            "(let'?s (sync|catch up) (next week|on the cos))",
            "(this (helps|makes this real))",
          ],
          hint_tr:
            "Aksiyon: 'I'll start gathering paperwork.' Türk: 'OK' düz, ileri adım.",
        },
      ],
    },
  ],
};

export const salaryNeg08: BundledLesson = {
  id: "arc.salary_neg.8",
  skill_id: "arc.salary_neg",
  index: 8,
  title: "Sahne 8 — Offer kabul + David'le 'thank you'",
  description: "İmzalandı. David'i ara, samimi teşekkür. İlişki kur.",
  estimated_minutes: 4,
  exercises: [
    {
      id: "ex.arc.salary_neg.8.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "I'm all in",
      tr_translation: "Tam içindeyim",
      example: "I signed today — I'm all in.",
      example_tr: "Bugün imzaladım — tam içindeyim.",
    },
    {
      id: "ex.arc.salary_neg.8.2",
      type: "roleplay_chat",
      difficulty: 3,
      scenario_description:
        "David'i ara. Profesyonel + samimi teşekkür. Sonraki adımlar.",
      npc_role: "David (welcoming you on)",
      setting: "Call to hiring manager after signing",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(hey david|good (afternoon|morning))",
            "(quick (call|note) — (i signed|the offer is signed))",
            "(wanted to thank you (personally|directly))",
            "(i'?m all in)",
            "(looking forward to (working together|joining))",
          ],
          hint_tr:
            "Açılış: 'Wanted to thank you personally.' Türk: 'I signed' düz, samimi.",
        },
        {
          speaker: "npc",
          message: "Fantastic news. Welcome aboard. Excited to have you.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thank you|that means a lot)",
            "(i appreciate (you fighting|the team going to bat))",
            "(when (does day one|do i start))",
            "(any (prep|reading) before (i join|day one))",
            "(can'?t wait)",
          ],
          hint_tr:
            "Hazır: 'Any prep before day one?' Türk: 'OK thanks' düz, aktif.",
        },
        {
          speaker: "npc",
          message: "We'll send onboarding docs. First-day lunch on me.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(deal|love that)",
            "(thanks (david|for the warm start))",
            "(see you (on the 1st|day one))",
            "(i (won'?t (let you down|disappoint))",
            "(let'?s build (something|good things))",
          ],
          hint_tr:
            "Söz: 'Let's build something.' Türk: 'OK bye' düz, vizyon paylaş.",
        },
        {
          speaker: "npc",
          message: "Looking forward to it. Talk soon.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(talk soon|speak soon)",
            "(thanks (again|for everything))",
            "(have a (good|great) (weekend|day))",
          ],
          hint_tr:
            "Kapanış: 'Speak soon.' Türk: kısa + sıcak.",
        },
      ],
    },
  ],
};

// ============================================================
// ARC 11 — FREELANCE CLIENT MANAGEMENT (10 sahne)
// Recurring NPC: Carlos (client, US-based agency owner)
// ============================================================

export const freelance01: BundledLesson = {
  id: "arc.freelance.1",
  skill_id: "arc.freelance",
  index: 1,
  title: "Sahne 1 — Discovery call: 'tell me about the project'",
  description: "Carlos ilk arama. Upwork üzerinden tanıştık. İlk discovery call.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.arc.freelance.1.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "Could you give me some context?",
      tr_translation: "Biraz bağlam verir misin?",
      example: "Could you give me some context on the project?",
      example_tr: "Proje hakkında biraz bağlam verir misin?",
    },
    {
      id: "ex.arc.freelance.1.2",
      type: "roleplay_chat",
      difficulty: 3,
      scenario_description:
        "Carlos ile Zoom. İlk discovery. Sen kapsam ve bağlam topluyorsun.",
      npc_role: "Carlos (US client, agency owner)",
      setting: "Discovery call on Zoom, first contact",
      turns: [
        {
          speaker: "npc",
          message: "Thanks for jumping on. I've got a project I need help with — fast.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks (carlos|for the time))",
            "(could you give me some context|walk me through it)",
            "(what'?s the (project|scope))",
            "(what does (fast|the timeline) mean (to you))",
            "(let'?s (start with|cover) (the (basics|big picture)))",
          ],
          hint_tr:
            "Bağlam topla: 'Could you give me context?' Türk: 'OK what do you want?' düz, soru yapısı.",
        },
        {
          speaker: "npc",
          message: "I run an agency. We need a custom dashboard for a client. Two months.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(noted|got it)",
            "(could you (share|send) (a (brief|spec|mockup)))",
            "(what'?s the (existing|tech) stack)",
            "(any (data sources|integrations) i should know about)",
            "(what would (success|done) look like)",
          ],
          hint_tr:
            "Spesifik: 'What would success look like?' Türk: 'OK I do' eksik, hedef sor.",
        },
        {
          speaker: "npc",
          message: "Done means — client approves and uses it daily.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(makes sense)",
            "(any (existing|current) (dashboards|tools) (they use))",
            "(who'?s (the (end user|decision maker)))",
            "(would i (talk directly|interact) with (the client))",
            "(what'?s your (involvement|role) (during the build))",
          ],
          hint_tr:
            "Karar verici: 'Who's the decision maker?' Türk: 'Just you?' yetersiz, ekosistem.",
        },
        {
          speaker: "npc",
          message: "You'd talk to me. I handle the client. Any questions on budget?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes — (what'?s the (range|ballpark) you'?re working with))",
            "(i (typically (charge|work)) (project(-| )?based|on a fixed))",
            "(could we (define|scope) (in stages|with milestones))",
            "(i'?ll (send|put together) a proposal (within 24 hours|by friday))",
            "(any (constraints|red lines) i should know about)",
          ],
          hint_tr:
            "Bütçe sondaj: 'What's the range you're working with?' Türk: 'How much?' kaba, ranga + yapı.",
        },
        {
          speaker: "npc",
          message: "Send me a proposal. I'll review by Friday.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(deal|on it)",
            "(any (anything|areas|edge cases) i should (emphasize|address))",
            "(thanks (carlos|for the (time|context)))",
            "(speak (friday|after you review))",
          ],
          hint_tr:
            "Kapanış: 'On it.' Türk: 'OK bye' düz, kısa + kararlı.",
        },
      ],
    },
  ],
};

export const freelance02: BundledLesson = {
  id: "arc.freelance.2",
  skill_id: "arc.freelance",
  index: 2,
  title: "Sahne 2 — Carlos proposal'ı pazarlık: 'too high'",
  description: "Carlos proposal'ı yüksek buldu — 'cut 30%.' Net kal, değer savun.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.arc.freelance.2.1",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "Let me explain my pricing",
      tr_translation: "Fiyatlandırmamı açıklayayım",
      example: "Let me explain how I priced this.",
      example_tr: "Bunu nasıl fiyatlandırdığımı açıklayayım.",
    },
    {
      id: "ex.arc.freelance.2.2",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Carlos pazarlık. Sen net kal — discount ver de değer azalt.",
      npc_role: "Carlos (negotiating proposal)",
      setting: "Follow-up call after sending proposal",
      turns: [
        {
          speaker: "npc",
          message: "Saw the proposal. Number's higher than I expected.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks for (the read|coming back))",
            "(let me explain (how|my) (pricing|the breakdown))",
            "(could you (share|tell me) (what range you were expecting))",
            "(what would (close it|make it work) for you)",
            "(happy to (walk through|adjust))",
          ],
          hint_tr:
            "Açıklama + sondaj: 'What range were you expecting?' Türk: 'OK I cut' acele, bağlam.",
        },
        {
          speaker: "npc",
          message: "I had 8k in mind. You're at 12.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(noted)",
            "(the 12 (covers|reflects) (full scope|build + 2 weeks support))",
            "(at 8 — (we'?d need to cut (scope|polish|support)))",
            "(could we (drop|defer) (scope|the deluxe features))",
            "(i (can'?t go below|my floor is) (\\d+|10) (for full scope))",
          ],
          hint_tr:
            "Değer + sınır: 'At 8 we'd cut scope.' Türk: 'OK 8' kabul, sınır + alternatif.",
        },
        {
          speaker: "npc",
          message: "What gets cut at 10?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(the (advanced filtering|export pdf|user roles))",
            "(post(-| )?launch support drops from (2 weeks|14 days) to (1|7))",
            "(no (custom theming|branding) — (stock components))",
            "(i'?d (keep|preserve) (the core build|the must(-| )?haves))",
            "(want me to (send|put together) (a revised proposal))",
          ],
          hint_tr:
            "Spesifik: 'PDF export, support drops.' Türk: 'Less work' belirsiz, kalem kalem.",
        },
        {
          speaker: "npc",
          message: "Let's do 10 — keep the core. Send updated terms.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(deal|sounds good)",
            "(i'?ll (send|share) (the (revised|updated)) (proposal|sow) (today|by tonight))",
            "(payment terms — 50% upfront, 50% on (delivery|approval))",
            "(let'?s (lock in|sign) this week)",
            "(thanks for (working with me|meeting in the middle))",
          ],
          hint_tr:
            "Profesyonel: '50/50 payment terms.' Türk: 'OK' düz, sınır + plan.",
        },
      ],
    },
  ],
};

export const freelance03: BundledLesson = {
  id: "arc.freelance.3",
  skill_id: "arc.freelance",
  index: 3,
  title: "Sahne 3 — Scope creep: 'one quick add'",
  description: "Carlos 'just one small thing' istiyor. Scope creep. Politely sınır koy.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.arc.freelance.3.1",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "That's outside our current scope",
      tr_translation: "Bu mevcut kapsamımızın dışında",
      example: "Happy to look — but that's outside our current scope.",
      example_tr: "Bakmaktan mutluluk duyarım — ama bu mevcut kapsamımızın dışında.",
    },
    {
      id: "ex.arc.freelance.3.2",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Carlos Slack DM. 'Just one quick thing — add user roles?' Sınır + alternatif.",
      npc_role: "Carlos (scope creep, casual)",
      setting: "Slack DM mid-project",
      turns: [
        {
          speaker: "npc",
          message: "Quick one — can you add user roles? Should be small.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(happy to (look|scope))",
            "(quick (heads(-| )?up|caveat) — (user roles (isn'?t|aren'?t) (small|trivial)))",
            "(that'?s (outside|beyond) (our current|the agreed) scope)",
            "(want me to (send|spin up) a (mini|change) (estimate|order))",
            "(it (touches|breaks into) (auth|permissions|db))",
          ],
          hint_tr:
            "Net + yardımcı: 'Outside current scope — want a mini estimate?' Türk: 'OK I do' tehlikeli, sınır + opsiyon.",
        },
        {
          speaker: "npc",
          message: "Really? It's just a checkbox.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(in the ui — (yes|that part'?s easy))",
            "(behind the scenes (it'?s|that touches) (auth|state|all queries))",
            "(let me (estimate|put a number))",
            "(probably (an extra (\\d+ days|2-3 days)|two days of work))",
            "(would (you (rather|prefer)) (skip|defer (to v2)))",
          ],
          hint_tr:
            "Eğit: 'In UI yes, behind the scenes — auth.' Türk: 'It's hard' yetersiz, neden açıkla.",
        },
        {
          speaker: "npc",
          message: "Hmm. Can we squeeze it in for free?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i hear you)",
            "(i can'?t (do it (for free|on the house)))",
            "(it (sets a precedent|expands beyond our agreement))",
            "(could we (defer|push) to (v2|phase 2))",
            "(or (i can quote|let me cost) it (\\d+|800))",
          ],
          hint_tr:
            "Sınır + esneklik: 'I can't do it for free — could we defer?' Türk: 'No' agresif, alternatif.",
        },
        {
          speaker: "npc",
          message: "Fine — let's defer to v2.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(perfect)",
            "(i'?ll (add|log) it to (the v2 backlog))",
            "(noted in (the doc|our shared roadmap))",
            "(thanks for (being reasonable|the flexibility))",
            "(let'?s (stay focused on|nail) v1)",
          ],
          hint_tr:
            "Belge: 'Logged to v2 backlog.' Türk: 'OK' düz, kayıt + ileri.",
        },
      ],
    },
  ],
};

export const freelance04: BundledLesson = {
  id: "arc.freelance.4",
  skill_id: "arc.freelance",
  index: 4,
  title: "Sahne 4 — Geç ödeme: 'just following up'",
  description: "Fatura 2 hafta geçti. Carlos sessiz. Profesyonel takip.",
  estimated_minutes: 4,
  exercises: [
    {
      id: "ex.arc.freelance.4.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "Just following up on",
      tr_translation: "Şunla ilgili sadece takipte",
      example: "Just following up on the invoice from the 1st.",
      example_tr: "1'inde gönderdiğim fatura ile ilgili sadece takipte.",
    },
    {
      id: "ex.arc.freelance.4.2",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Email + Slack takibi. Sakin + profesyonel — pasif-agresif olma.",
      npc_role: "Carlos (delayed on payment)",
      setting: "Email + Slack follow-up, 2 weeks past invoice",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(hey carlos|hi)",
            "(just following up on (invoice #|the invoice) (from|sent) (the 1st))",
            "(no rush — (just wanted to confirm it'?s in your queue))",
            "(any (issues|questions) (with the invoice))",
            "(let me know if (anything needs|i need to (resend)))",
          ],
          hint_tr:
            "Yumuşak: 'Just following up — any issues?' Türk: 'You didn't pay' agresif, kibar takip.",
        },
        {
          speaker: "npc",
          message: "Oh — yeah, sorry. Cash flow's tight this month. Can you wait two weeks?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks for (the (heads(-| )?up|honesty)))",
            "(i (can|appreciate)) (work with that)",
            "(could we (split|pay) (in two|half now half later))",
            "(let'?s (set|agree on) (a (firm|concrete) date))",
            "(any (interim|partial) payment (this week))",
          ],
          hint_tr:
            "Esneklik + sınır: 'Could we split in two?' Türk: 'OK wait' tatmin, yapı koy.",
        },
        {
          speaker: "npc",
          message: "Half now, half in two weeks?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(works for me)",
            "(perfect — (half by friday|wire today))",
            "(i'?ll (send|share) the (updated|partial) invoice)",
            "(thanks for (the (workaround|partial)))",
            "(let'?s (lock in|schedule) the (second half) for (the 14th))",
          ],
          hint_tr:
            "Pratik: 'Lock in second half for the 14th.' Türk: 'OK' düz, tarih + kayıt.",
        },
        {
          speaker: "npc",
          message: "Appreciate the flexibility.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(of course|any time)",
            "(communication is (everything|the key))",
            "(thanks for (looping me in|the honesty))",
            "(let'?s (keep|stay) in touch (on this))",
          ],
          hint_tr:
            "İlişki: 'Communication is everything.' Türk: 'OK' düz, ilkesel.",
        },
      ],
    },
  ],
};

export const freelance05: BundledLesson = {
  id: "arc.freelance.5",
  skill_id: "arc.freelance",
  index: 5,
  title: "Sahne 5 — Carlos eleştiri: 'I expected more polish'",
  description: "Sunum sonrası. Carlos eleştiri etti. Defansif değil — keşfet.",
  estimated_minutes: 6,
  exercises: [
    {
      id: "ex.arc.freelance.5.1",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "Could you be more specific?",
      tr_translation: "Daha spesifik olur musun?",
      example: "Could you be more specific about what's missing?",
      example_tr: "Neyin eksik olduğu konusunda daha spesifik olur musun?",
    },
    {
      id: "ex.arc.freelance.5.2",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Carlos dashboard'a 'I expected more polish' dedi. Belirsiz eleştiriyi netleştir.",
      npc_role: "Carlos (vague critique)",
      setting: "Review call, after first demo",
      turns: [
        {
          speaker: "npc",
          message: "I expected more polish. It feels rough.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks for (the feedback|naming it))",
            "(could you (be more specific|point to (where|examples)))",
            "(which (screens|parts) (feel rough|stand out))",
            "(polish (means different things to different people) — help me (align|understand))",
            "(want to (close the gap|nail the polish))",
          ],
          hint_tr:
            "Belirsizi netleştir: 'Could you point to examples?' Türk: 'OK I fix' tehlikeli, somut iste.",
        },
        {
          speaker: "npc",
          message: "The buttons feel cheap. The transitions are abrupt.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(got it|noted)",
            "(let me (revisit|sharpen) (the buttons|the transitions))",
            "(could you (send|share) (a (reference|example) you (admire|love)))",
            "(any (design system|brand) you want me to (mirror|reference))",
            "(give me (a day|48 hours) — (i'?ll (send|push) (a polished pass))",
          ],
          hint_tr:
            "Aksiyon + kanıt iste: 'Send a reference you admire.' Türk: 'OK' belirsiz, örnek iste.",
        },
        {
          speaker: "npc",
          message: "Linear's design — that's what I want.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(noted — linear is a (high|great) bar)",
            "(realistically — (linear-level polish (takes) longer))",
            "(at this budget — (we (can hit|get) (80%) of that))",
            "(if you want (true) linear (parity) — (i'?d quote (\\d+|2k) more))",
            "(let me (mock|prototype) one pass — (see if you'?re happy))",
          ],
          hint_tr:
            "Beklenti yönet: '80% at this budget — 2k more for full Linear.' Türk: 'OK I make' yetersiz, ekonomik gerçek.",
        },
        {
          speaker: "npc",
          message: "Fair. Let's do one polish pass — then revisit.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(deal|works for me)",
            "(i'?ll (send|push) the pass (by friday))",
            "(let'?s (schedule|book) (the review|a 30 min slot))",
            "(thanks for (the reset|the directness))",
            "(this (helps|sharpens) the brief)",
          ],
          hint_tr:
            "Profesyonel: 'This sharpens the brief.' Türk: 'OK' düz, eleştiriyi değere.",
        },
      ],
    },
  ],
};

export const freelance06: BundledLesson = {
  id: "arc.freelance.6",
  skill_id: "arc.freelance",
  index: 6,
  title: "Sahne 6 — Yeni client referral: 'do you have capacity?'",
  description: "Carlos referral verdi. Doluyu kabul et — kapasiteyi söyle.",
  estimated_minutes: 4,
  exercises: [
    {
      id: "ex.arc.freelance.6.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "I have capacity for",
      tr_translation: "Şu kadar kapasitem var",
      example: "I have capacity for one more project starting in March.",
      example_tr: "Mart'tan itibaren bir proje daha için kapasitem var.",
    },
    {
      id: "ex.arc.freelance.6.2",
      type: "roleplay_chat",
      difficulty: 3,
      scenario_description:
        "Carlos mesaj attı. Arkadaşı için referral. Sen yoğunsun — net karşıla.",
      npc_role: "Carlos (referring you to a friend)",
      setting: "Slack DM, mid-project, new opportunity",
      turns: [
        {
          speaker: "npc",
          message: "Hey — friend of mine needs your kind of work. Can I intro?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(absolutely|appreciate (you thinking of me))",
            "(yes — (please intro|happy to chat))",
            "(quick heads(-| )?up — (i'?m at (capacity|near full) (until|through))",
            "(i could (start|onboard) (in march|in 4 weeks))",
            "(send me (some context|the brief) first)",
          ],
          hint_tr:
            "Esnek + dürüst: 'I'm near full — could start in March.' Türk: 'Yes I do' acele, sınır + zaman.",
        },
        {
          speaker: "npc",
          message: "They're on a tight timeline. ASAP.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(noted)",
            "(honestly — (i can'?t (give them|do justice to it) right now))",
            "(want me to (refer|recommend) (someone) (i (trust|vouch for)))",
            "(if they (can wait|push to march) — i'?m (in|happy to))",
            "(i (could do|squeeze in) (a (consult|discovery) only))",
          ],
          hint_tr:
            "Net 'no' + alternatif: 'I can refer someone I trust.' Türk: 'OK I try' aşırı söz, network yardım.",
        },
        {
          speaker: "npc",
          message: "A referral would be amazing.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(perfect — (let me intro you to (sarah|alex)))",
            "(i'?ve worked (with|alongside) her — (she'?s (solid|excellent)))",
            "(i'?ll (cc|loop) you both (in an email))",
            "(any (constraints|preferences) (i should mention))",
            "(thanks for (thinking of me anyway))",
          ],
          hint_tr:
            "Profesyonel: 'I'll loop you both in an email.' Türk: 'OK she good' düz, aksiyon.",
        },
        {
          speaker: "npc",
          message: "Appreciate you. I'll send anyone your way going forward.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(means a lot)",
            "(any time)",
            "(this (network|relationship) is (the (real )?value))",
            "(thanks for (the trust|sending people my way))",
          ],
          hint_tr:
            "İlişki: 'This network is the real value.' Türk: 'Thanks' düz, vizyon paylaş.",
        },
      ],
    },
  ],
};

export const freelance07: BundledLesson = {
  id: "arc.freelance.7",
  skill_id: "arc.freelance",
  index: 7,
  title: "Sahne 7 — Carlos sürpriz fikri: 'partnership?'",
  description: "Carlos partnership önerdi. Olası — ama detay sor. Acele kabul yok.",
  estimated_minutes: 6,
  exercises: [
    {
      id: "ex.arc.freelance.7.1",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "I'm intrigued",
      tr_translation: "İlgimi çekti",
      example: "I'm intrigued — tell me more.",
      example_tr: "İlgimi çekti — anlat daha.",
    },
    {
      id: "ex.arc.freelance.7.2",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Carlos Zoom: 'thinking about partnership.' Açık ol — ama sondaj.",
      npc_role: "Carlos (proposing partnership)",
      setting: "Carlos's surprise call about working more closely",
      turns: [
        {
          speaker: "npc",
          message: "I've been thinking — what if you came on as a partner? Equity stake.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(wow|that'?s (a big ask|unexpected))",
            "(i'?m intrigued — (tell me more))",
            "(what does (partnership|that) (look like|mean in practice))",
            "(i want to (understand|sit with) (the shape|the details))",
            "(thanks for (thinking of me|the trust))",
          ],
          hint_tr:
            "Soğukkanlı + ilgi: 'I'm intrigued — tell me more.' Türk: 'Yes!' acele, sondaj.",
        },
        {
          speaker: "npc",
          message: "5% equity, you lead engineering, smaller cash but upside.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(noted)",
            "(could you (share|send) (the (numbers|cap table|financials)))",
            "(what'?s the (current|recent) (revenue|valuation))",
            "(vesting (schedule|terms))",
            "(what does (my (week|role)) (look like))",
          ],
          hint_tr:
            "Detay sor: 'Send cap table.' Türk: 'How much money?' yetersiz, yapı.",
        },
        {
          speaker: "npc",
          message: "Revenue's 800k ARR. Vesting over 3 years. Salary 60k.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks for the (transparency|numbers))",
            "(let me (digest|sit with this))",
            "(i'?d want to (chat with|consult) (my (accountant|advisor)))",
            "(60k feels (light|low) — (could we (revisit|stretch)))",
            "(could we (talk through|map out) (the partnership doc|terms) (next week))",
          ],
          hint_tr:
            "Profesyonel: 'Let me consult my advisor.' Türk: 'OK yes' acele, alan iste.",
        },
        {
          speaker: "npc",
          message: "Of course. Take a week. I'm here for any question.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks (carlos|for the patience))",
            "(this (could be|might be) (the right next chapter))",
            "(i (value|appreciate) the (offer|trust))",
            "(i'?ll come back (by (next friday|the 14th)))",
            "(let'?s (keep (the conversation|talking)|stay in touch))",
          ],
          hint_tr:
            "Yön: 'I'll come back by next Friday.' Türk: 'OK think' belirsiz, deadline.",
        },
      ],
    },
  ],
};

export const freelance08: BundledLesson = {
  id: "arc.freelance.8",
  skill_id: "arc.freelance",
  index: 8,
  title: "Sahne 8 — Partnership red: 'I value our working relationship'",
  description: "Düşündün — partnership uygun değil. Carlos'a nazik ama net reddet.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.arc.freelance.8.1",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "It's not the right fit for me",
      tr_translation: "Bana uygun değil",
      example: "I've decided it's not the right fit for me.",
      example_tr: "Bana uygun olmadığına karar verdim.",
    },
    {
      id: "ex.arc.freelance.8.2",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Carlos'a karar veriyorsun — hayır. Nedenleri samimi söyle, ilişkiyi koru.",
      npc_role: "Carlos (waiting for your answer)",
      setting: "Follow-up call, decision time",
      turns: [
        {
          speaker: "npc",
          message: "So — partnership. Have you decided?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks for (the patience|the time))",
            "(i thought (long|hard) about it)",
            "(it'?s not (the right fit|right) for me (right now))",
            "(i (came close|nearly said yes))",
            "(want to (share|walk you through) the (why|thinking))",
          ],
          hint_tr:
            "Sakin red: 'Not the right fit right now.' Türk: 'No' kapalı, açıklama önerisi.",
        },
        {
          speaker: "npc",
          message: "Walk me through it.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(60k base (would be|is) (a step down|too aggressive))",
            "(family (situation|considerations))",
            "(i value (independence|optionality) right now)",
            "(equity (risk|illiquidity) isn'?t (where i (need to|can))",
            "(it'?s (the timing|the structure), not you)",
          ],
          hint_tr:
            "Spesifik sebep: 'Not the timing, not you.' Türk: 'I don't want' belirsiz, somut + ilişki koruma.",
        },
        {
          speaker: "npc",
          message: "I understand. I'm disappointed but I get it.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i (value|cherish) our working relationship)",
            "(i'?d love to (keep|continue) (freelancing for you))",
            "(if (the structure|something) (changes (in a year|down the line)) — (let'?s revisit))",
            "(thanks for (taking it well|the respect))",
            "(it (means|matters) (you (asked|saw me in that role)))",
          ],
          hint_tr:
            "İlişki koru: 'I value our working relationship.' Türk: 'Sorry' düz, gelecek köprü.",
        },
        {
          speaker: "npc",
          message: "Door's open. Keep the freelance going.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thank you (carlos|for everything))",
            "(this (was|is) (a generous|big) (offer|gesture))",
            "(let'?s (keep building|stay (in motion|tight)))",
            "(grateful (for (the consideration|the trust)))",
          ],
          hint_tr:
            "Onur: 'Grateful for the trust.' Türk: 'Thanks' düz, ağır kabul.",
        },
      ],
    },
  ],
};

export const freelance09: BundledLesson = {
  id: "arc.freelance.9",
  skill_id: "arc.freelance",
  index: 9,
  title: "Sahne 9 — Carlos'tan büyük proje teklifi",
  description: "Carlos uzun vadeli retainer önerdi. Net pazarlık + sınır.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.arc.freelance.9.1",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "Let's structure this",
      tr_translation: "Bunu yapılandıralım",
      example: "Let's structure this with clear deliverables.",
      example_tr: "Net teslimatlarla bunu yapılandıralım.",
    },
    {
      id: "ex.arc.freelance.9.2",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Carlos: '6 ay retainer.' Profesyonel pazarlık + yapı.",
      npc_role: "Carlos (offering a retainer)",
      setting: "Project planning call",
      turns: [
        {
          speaker: "npc",
          message: "I want to lock you in for 6 months. Retainer model.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(intriguing|let'?s talk it through))",
            "(i'?m open to retainer))",
            "(let'?s (structure|frame) this (carefully))",
            "(what'?s (the hours|the commitment) (you'?re thinking))",
            "(what'?s the (scope|kind of work) — (ongoing or projects))",
          ],
          hint_tr:
            "Yapı talep: 'Let's structure this carefully.' Türk: 'Yes I do' acele, çerçeve önce.",
        },
        {
          speaker: "npc",
          message: "20 hours a week. Mix of projects and consulting.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(noted)",
            "(at 20 hours — (my rate would be (\\d+|3500|4k)/month))",
            "(could we (define|cap) (overflow|on(-| )?call hours))",
            "(let'?s (agree on|nail) (priorities|how decisions get made))",
            "(i'?d (want|need) a (30-day|month) (cancellation|notice) clause)",
          ],
          hint_tr:
            "Maliyet + yapı: '30-day cancellation clause.' Türk: 'OK price' eksik, korunma.",
        },
        {
          speaker: "npc",
          message: "Fair. Anything else?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(let'?s (define|set) what (counts as|is) a (priority))",
            "(can we (have|book) a (weekly|monthly) (sync|sit(-| )?down))",
            "(i (don'?t take|avoid) on(-| )?call (outside) (working hours))",
            "(any (vacation|out(-| )?of(-| )?office) (policy))",
            "(want me to (draft|put together) (the (sow|retainer (doc|agreement))))",
          ],
          hint_tr:
            "Sınır: 'No on-call outside working hours.' Türk: 'OK' kabul, korunma.",
        },
        {
          speaker: "npc",
          message: "Draft it. Looking forward to a longer run.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(on it|will do)",
            "(thanks (carlos|for the trust))",
            "(i'?ll (send|share) (the draft) (by tomorrow|by friday))",
            "(here'?s to (a great chapter|year two together))",
            "(let'?s (build|nail) this)",
          ],
          hint_tr:
            "Profesyonel: 'Send draft by Friday.' Türk: 'OK' düz, deadline.",
        },
      ],
    },
  ],
};

export const freelance10: BundledLesson = {
  id: "arc.freelance.10",
  skill_id: "arc.freelance",
  index: 10,
  title: "Sahne 10 — Yıllık review: Carlos ile özet",
  description: "1 yıllık iş. Carlos teşekkür ediyor. Karşılıklı gelişimi konuş.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.arc.freelance.10.1",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "Looking back",
      tr_translation: "Geriye bakınca",
      example: "Looking back, the project taught me a lot.",
      example_tr: "Geriye bakınca proje bana çok şey öğretti.",
    },
    {
      id: "ex.arc.freelance.10.2",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Carlos yıllık görüşme istedi. Geriye bak, ileri planı kur.",
      npc_role: "Carlos (annual review)",
      setting: "Annual relationship review call",
      turns: [
        {
          speaker: "npc",
          message: "Hard to believe — a year. What's working, what's not?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(looking back — (this has been (one of the better|the best) chapters))",
            "(what'?s (working|landing) — (the (weekly syncs|direct feedback)))",
            "(what could (sharpen|improve) — (handoffs|scope creep))",
            "(i (value|appreciate) (your (directness|honesty)))",
            "(i'?ve (learned|grown) (a lot|from you))",
          ],
          hint_tr:
            "Olgun: 'What's working/what could improve.' Türk: 'Good' yetersiz, çerçeveli.",
        },
        {
          speaker: "npc",
          message: "Same. You've grown. I'd like to renew.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i'?d love (that|to renew))",
            "(should we (discuss|talk) (rate|structure) (changes))",
            "(my rate (has moved|is up) (since last year) — (could we revisit))",
            "(any (new|fresh) (scope|projects) (in the pipeline))",
            "(let'?s (set|book) (a renewal session) (next week))",
          ],
          hint_tr:
            "Pazarlık seed: 'My rate has moved.' Türk: 'OK yes' düz, ücret artışı seed.",
        },
        {
          speaker: "npc",
          message: "Rate increase reasonable — what are you thinking?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(market (has shifted|moved)) (10-15%|since last year))",
            "(i was thinking (a 12%|10%) bump)",
            "(i'?ll (send|share) (the (rationale|case)) (in writing))",
            "(could we (also )?(structure|tier) (the (next phase|year)))",
            "(want to (find|land) (a number we both feel good about))",
          ],
          hint_tr:
            "Veri: 'Market has shifted 10-15%.' Türk: 'I want more' kaba, kanıt.",
        },
        {
          speaker: "npc",
          message: "Send the case. We'll lock in for year two.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(perfect)",
            "(thanks (carlos|for the chapter))",
            "(here'?s to (year two|chapter two))",
            "(i'?ll (have|send) (the case|the proposal) by (tomorrow|friday))",
            "(let'?s (keep building|do this))",
          ],
          hint_tr:
            "Kapanış: 'Here's to year two.' Türk: 'OK' düz, kadeh kaldır.",
        },
      ],
    },
  ],
};

// ============================================================
// ARC 12 — SOLO TRAVEL JAPAN (10 sahne)
// Recurring NPCs: Yuki (ryokan innkeeper), Hiro (bartender in Kyoto)
// ============================================================

export const soloJapan01: BundledLesson = {
  id: "arc.solo_japan.1",
  skill_id: "arc.solo_japan",
  index: 1,
  title: "Sahne 1 — Narita to Tokyo: yön sorma",
  description: "Narita havalimanı. JR train counter. Tokyo'ya nasıl gidilir — net sor.",
  estimated_minutes: 4,
  exercises: [
    {
      id: "ex.arc.solo_japan.1.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "Could you help me with",
      tr_translation: "Şu konuda yardım eder misin",
      example: "Could you help me with directions?",
      example_tr: "Yön konusunda yardım eder misin?",
    },
    {
      id: "ex.arc.solo_japan.1.2",
      type: "roleplay_chat",
      difficulty: 3,
      scenario_description:
        "Narita JR counter. Personel sınırlı İngilizce. Yavaş + net konuş.",
      npc_role: "JR train station staff (limited English)",
      setting: "Narita JR ticket counter, evening arrival",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(excuse me|sumimasen)",
            "(could you help me)",
            "(i need to (get|travel) to (tokyo|shibuya))",
            "(which (train|line) (do i take|should i))",
            "(do you (speak|have) english))",
          ],
          hint_tr:
            "Yavaş + kibar: 'Excuse me — could you help me?' Türk: hızlı konuşma, sınırlı İngilizce için yavaşlat.",
        },
        {
          speaker: "npc",
          message: "Yes, little English. Tokyo — Narita Express. Track 4.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thank you|arigato)",
            "(how much (is the ticket|does it cost))",
            "(can i (pay|use) (card|credit card))",
            "(how long (is the trip|to tokyo))",
            "(any (specific|reserved) seat)",
          ],
          hint_tr:
            "Tek kelimelik soru: 'How much? Card?' Türk: uzun cümle değil, isim.",
        },
        {
          speaker: "npc",
          message: "3070 yen. Card okay. One hour.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(one ticket please)",
            "(to (tokyo station|shibuya))",
            "(thank you)",
            "(what time (is the next|does it leave))",
            "(non(-| )?reserved (is fine|please))",
          ],
          hint_tr:
            "Satın al: 'One ticket — to Tokyo Station.' Türk: 'I want' eksik, sayı + hedef.",
        },
        {
          speaker: "npc",
          message: "Next train 15 minutes. Track 4.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thank you (so much|very much))",
            "(arigato gozaimasu)",
            "(track 4|noted)",
            "(have a (good|nice) (evening|day))",
          ],
          hint_tr:
            "Tekrar et: 'Track 4 — arigato gozaimasu.' Türk: 'OK bye' düz, dili karıştır.",
        },
      ],
    },
  ],
};

export const soloJapan02: BundledLesson = {
  id: "arc.solo_japan.2",
  skill_id: "arc.solo_japan",
  index: 2,
  title: "Sahne 2 — Yuki (ryokan) ile check-in: dil bariyeri",
  description: "Kyoto ryokan. Yuki (sahibi) çok az İngilizce. Yavaş + nazik.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.arc.solo_japan.2.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "I'm sorry, I don't speak Japanese",
      tr_translation: "Üzgünüm, Japonca bilmiyorum",
      example: "I'm sorry — I don't speak Japanese. Just English.",
      example_tr: "Üzgünüm — Japonca bilmiyorum. Sadece İngilizce.",
    },
    {
      id: "ex.arc.solo_japan.2.2",
      type: "roleplay_chat",
      difficulty: 3,
      scenario_description:
        "Yuki gülüyor, jest yapıyor. Sen kibar + net, kısa cümle.",
      npc_role: "Yuki (ryokan owner, limited English)",
      setting: "Kyoto ryokan reception, check-in",
      turns: [
        {
          speaker: "npc",
          message: "Konnichiwa! Check-in?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(konnichiwa|hello)",
            "(yes — check(-| )?in)",
            "(i'?m sorry — i don'?t speak japanese)",
            "(my name is [a-z]+|reservation under [a-z]+)",
            "(thank you for having me)",
          ],
          hint_tr:
            "Kısa kalıp: 'Yes — check-in.' Türk: 'I want to' uzun, basit.",
        },
        {
          speaker: "npc",
          message: "Ah — yes. Three night?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|three nights)",
            "(checking out (on (saturday|the 5th)))",
            "(is that (right|correct))",
            "(thank you)",
          ],
          hint_tr:
            "Onayla + sor: 'Three nights — is that right?' Türk: 'Yes' yetersiz, tekrar et.",
        },
        {
          speaker: "npc",
          message: "Yes. Passport, please.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(here you go|here it is)",
            "(passport — (right here))",
            "(let me (grab|get) it)",
            "(thank you)",
            "(do you need anything else)",
          ],
          hint_tr:
            "Belge uzat: 'Here you go.' Türk: 'I have' eksik, fiziksel uzat.",
        },
        {
          speaker: "npc",
          message: "Breakfast — 7 to 9. Bath — onsen, 6 to 11.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(noted|thank you)",
            "(7 to 9 breakfast — got it)",
            "(any (rules|etiquette) for (the onsen|bath))",
            "(can i (use|wear) (the yukata) (outside the room))",
            "(arigato)",
          ],
          hint_tr:
            "Tekrar + rules sor: 'Onsen etiquette?' Türk: 'OK' düz, kültür sor.",
        },
        {
          speaker: "npc",
          message: "Yukata fine. Onsen — no clothes, no tattoos visible.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(understood|noted)",
            "(thank you (yuki|very much))",
            "(can you (recommend|suggest) (dinner|a place))",
            "(any (specific|local) (recommendations))",
            "(arigato gozaimasu)",
          ],
          hint_tr:
            "Kapanış + öneri sor: 'Any local recommendations?' Türk: 'OK' düz, deneyimden faydalan.",
        },
      ],
    },
  ],
};

export const soloJapan03: BundledLesson = {
  id: "arc.solo_japan.3",
  skill_id: "arc.solo_japan",
  index: 3,
  title: "Sahne 3 — Restoran rezervasyon: 'do you have a table?'",
  description: "Küçük izakaya. Telefon yok — yüz yüze. Yer var mı sor.",
  estimated_minutes: 4,
  exercises: [
    {
      id: "ex.arc.solo_japan.3.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "Do you have a table for one?",
      tr_translation: "Bir kişilik yer var mı?",
      example: "Excuse me — do you have a table for one?",
      example_tr: "Affedersiniz — bir kişilik yer var mı?",
    },
    {
      id: "ex.arc.solo_japan.3.2",
      type: "roleplay_chat",
      difficulty: 3,
      scenario_description:
        "İzakaya kapısı. Personel ufak bir Japonca konuşuyor. Sen tek başınasın.",
      npc_role: "Izakaya staff (limited English)",
      setting: "Small izakaya in Pontocho, evening",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(excuse me|sumimasen)",
            "(do you have a table (for one|just me))",
            "(reservation — no))",
            "(walk(-| )?in (okay|possible))",
            "(one person — (any (counter|seat) seat))",
          ],
          hint_tr:
            "Net: 'Table for one — counter okay.' Türk: 'I want to eat' eksik, sayı + tercih.",
        },
        {
          speaker: "npc",
          message: "One? Counter seat — ten minute wait.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(ten minutes — (fine|that'?s okay))",
            "(should i (wait outside|sit here))",
            "(can i (put my name|leave a name))",
            "(thank you)",
            "(i (can (come back|return))",
          ],
          hint_tr:
            "Esnek: 'Ten minutes is fine.' Türk: 'OK' düz, kabul göster.",
        },
        {
          speaker: "npc",
          message: "Name?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "([a-z]+)",
            "(it'?s [a-z]+)",
            "(let me spell it)",
          ],
          hint_tr:
            "Sade: '[Name].' Türk: 'My name is...' uzun, tek kelime.",
        },
        {
          speaker: "npc",
          message: "Okay. I call you.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thank you|arigato)",
            "(i'?ll be (right outside|over here))",
            "(i'?ll (wait|stay close))",
          ],
          hint_tr:
            "Plan + söz: 'I'll be right outside.' Türk: 'OK' düz, nerede olacağını söyle.",
        },
      ],
    },
  ],
};

export const soloJapan04: BundledLesson = {
  id: "arc.solo_japan.4",
  skill_id: "arc.solo_japan",
  index: 4,
  title: "Sahne 4 — Hiro (bar) ile küçük sohbet",
  description: "Pontocho bar. Bartender Hiro. İlk gerçek sohbet — yavaş İngilizce.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.arc.solo_japan.4.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "What would you recommend?",
      tr_translation: "Ne önerirsin?",
      example: "I'm new — what would you recommend?",
      example_tr: "Yeniyim — ne önerirsin?",
    },
    {
      id: "ex.arc.solo_japan.4.2",
      type: "roleplay_chat",
      difficulty: 3,
      scenario_description:
        "Bar 7-koltuklu. Hiro karşında. Yavaş, samimi konuşma.",
      npc_role: "Hiro (bartender, decent English, curious)",
      setting: "Small whisky bar in Pontocho, late evening",
      turns: [
        {
          speaker: "npc",
          message: "Welcome. First time here?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|first time)",
            "(i (heard|read) (good things|about this place))",
            "(walked in (on a whim|by accident))",
            "(what would you recommend)",
            "(thanks for (squeezing|having) me in)",
          ],
          hint_tr:
            "Açık: 'What would you recommend?' Türk: 'I want drink' eksik, deneyimden faydalan.",
        },
        {
          speaker: "npc",
          message: "First time in Kyoto?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|first trip)",
            "(arrived (two days ago|on monday))",
            "(third day in japan (total))",
            "(love it (so far|already))",
            "(where i (should go|must see))",
          ],
          hint_tr:
            "Duruma cevap + soru: 'Third day in Japan — where I must see?' Türk: 'Yes' yetersiz, sohbet aç.",
        },
        {
          speaker: "npc",
          message: "Have you been to Fushimi Inari?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(tomorrow morning)",
            "(yes — went (this morning|today))",
            "(any (tips|advice|secrets))",
            "(it'?s on my list)",
            "(what time (should i go|did you go))",
          ],
          hint_tr:
            "Plan paylaş: 'Tomorrow morning — any tips?' Türk: 'No' kapalı, soru iade.",
        },
        {
          speaker: "npc",
          message: "Go before 6am. Light, no crowds.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(noted|good tip)",
            "(6am — (i'?ll set the alarm))",
            "(thanks (so much|hiro))",
            "(any (other|local) (favorites|hidden gems))",
            "(this (is exactly why|the kind of) (i came to ask))",
          ],
          hint_tr:
            "Minnet: 'I'll set the alarm.' Türk: 'OK' düz, somut taahhüt.",
        },
        {
          speaker: "npc",
          message: "Tell me — where are you from?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(istanbul — (turkey))",
            "(originally turkey — (now (london|berlin)))",
            "(have you (been|traveled there))",
            "(big city — (chaotic|beautiful))",
            "(it'?s (a long flight|on the other side))",
          ],
          hint_tr:
            "Kişisel: 'Istanbul — have you been?' Türk: 'I am Turkish' düz, soru iade.",
        },
      ],
    },
  ],
};

export const soloJapan05: BundledLesson = {
  id: "arc.solo_japan.5",
  skill_id: "arc.solo_japan",
  index: 5,
  title: "Sahne 5 — Hasta olmak: pharmacy + Yuki yardım",
  description: "Mide bulantısı. Ryokan'a dönüş. Yuki'den ilaç önerisi al.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.arc.solo_japan.5.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "I'm not feeling well",
      tr_translation: "Kendimi iyi hissetmiyorum",
      example: "I'm not feeling well — stomach issue.",
      example_tr: "Kendimi iyi hissetmiyorum — mide sorunu.",
    },
    {
      id: "ex.arc.solo_japan.5.2",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Yuki resepsiyonda. Mide bulantısı. Net + kibar — yardım iste.",
      npc_role: "Yuki (helpful, concerned)",
      setting: "Ryokan reception, evening, traveler unwell",
      turns: [
        {
          speaker: "npc",
          message: "You look pale. Are you okay?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(honestly — not (great|feeling well))",
            "(stomach (issue|problems))",
            "(too much (raw fish|tempura))",
            "(could you (recommend|help with) (a pharmacy|medicine))",
            "(do you have (anything|medicine) (for nausea))",
          ],
          hint_tr:
            "Dürüst: 'Stomach issue — could you recommend a pharmacy?' Türk: 'I am fine' bastırma, yardım.",
        },
        {
          speaker: "npc",
          message: "Oh — pharmacy 5 minute walk. I write address.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thank you (so much|that helps))",
            "(could you also (write|tell me) (the medicine name|in japanese))",
            "(so i can (show|point) at the pharmacy)",
            "(arigato)",
            "(is it (still |open) (this late|now))",
          ],
          hint_tr:
            "Pratik: 'Write the medicine name in Japanese.' Türk: 'Where?' eksik, dilbariyeri çöz.",
        },
        {
          speaker: "npc",
          message: "I write — show this card. Open until 11.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thank you (yuki|very much))",
            "(this is (so kind|a lifesaver))",
            "(i'?ll (head out|go now))",
            "(arigato gozaimasu)",
            "(any (food|drink) i should (avoid|stick with))",
          ],
          hint_tr:
            "Bonus soru: 'Any food I should avoid?' Türk: 'OK thanks' düz, ek tavsiye.",
        },
        {
          speaker: "npc",
          message: "Plain rice. Tea. No oil. Feel better soon.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(noted|will do)",
            "(thank you (again|so much))",
            "(you'?re (the best|a lifesaver))",
            "(i'?ll (let you know|update you))",
            "(arigato gozaimasu)",
          ],
          hint_tr:
            "Sıcaklık: 'You're a lifesaver.' Türk: 'Thanks bye' düz, abart.",
        },
      ],
    },
  ],
};

export const soloJapan06: BundledLesson = {
  id: "arc.solo_japan.6",
  skill_id: "arc.solo_japan",
  index: 6,
  title: "Sahne 6 — Hiro ile derin sohbet: 'why are you traveling alone?'",
  description: "Bar'a geri döndün. Hiro samimi soru sordu. Dürüst + derin.",
  estimated_minutes: 6,
  exercises: [
    {
      id: "ex.arc.solo_japan.6.1",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "I needed some space",
      tr_translation: "Biraz alana ihtiyacım vardı",
      example: "Honestly, I needed some space from everything.",
      example_tr: "Açıkçası her şeyden biraz alana ihtiyacım vardı.",
    },
    {
      id: "ex.arc.solo_japan.6.2",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Hiro samimi soru sordu. Dürüst — derin paylaşıma aç.",
      npc_role: "Hiro (deeper conversation)",
      setting: "Same bar, late night, second visit",
      turns: [
        {
          speaker: "npc",
          message: "Tell me — why traveling alone? Most people come with someone.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(honestly — (i needed some space|i needed to think))",
            "(came out of (a long relationship|a tough year))",
            "(i (kept|always) (saying|telling people) i would (do this))",
            "(easier (to think|to be) (alone))",
            "(sometimes (solo travel|the silence) is (the (best|most honest)) (teacher|therapy))",
          ],
          hint_tr:
            "Dürüst derin: 'Solo travel is the most honest teacher.' Türk: 'I like alone' düz, derin paylaş.",
        },
        {
          speaker: "npc",
          message: "Brave. Most people run away from themselves.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(or (sit with|to sit with) (themselves))",
            "(that hits)",
            "(some days (it works|i face it))",
            "(some days (i (run|avoid)))",
            "(this trip — (i'?m doing more (sitting|facing) than (running)))",
          ],
          hint_tr:
            "Filozofik: 'Sit with themselves.' Türk: 'I am brave' düz, içsel paylaş.",
        },
        {
          speaker: "npc",
          message: "What have you learned?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(that i (can|do) (enjoy my own company))",
            "(that (silence|stillness) is (a luxury|something i avoid))",
            "(that japan (slows me down|teaches patience))",
            "(that i need (less|more))",
            "(ask me in (a week|when i'?m home))",
          ],
          hint_tr:
            "İçsel: 'I enjoy my own company.' Türk: 'I learn many things' belirsiz, somut.",
        },
        {
          speaker: "npc",
          message: "Cheers to that. Drink's on me.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thank you (hiro|that means a lot))",
            "(this is (the (kind of|reason) (i came|i needed)))",
            "(cheers)",
            "(arigato — (next round on me))",
            "(this (bar|conversation) (is (the trip|why i (came))))",
          ],
          hint_tr:
            "Onurla kabul: 'This conversation is why I came.' Türk: 'Thanks free drink' düz, an'ı işaretle.",
        },
      ],
    },
  ],
};

export const soloJapan07: BundledLesson = {
  id: "arc.solo_japan.7",
  skill_id: "arc.solo_japan",
  index: 7,
  title: "Sahne 7 — Kayıp tren bileti: 'I lost my JR Pass'",
  description: "Kyoto stasyonu. JR Pass kayboldu. Sakin + net yardım iste.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.arc.solo_japan.7.1",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "I think I lost my",
      tr_translation: "Galiba kaybettim",
      example: "I think I lost my JR Pass — what should I do?",
      example_tr: "Galiba JR Pass'imi kaybettim — ne yapmalıyım?",
    },
    {
      id: "ex.arc.solo_japan.7.2",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Kyoto JR ofisi. Personel sınırlı İngilizce. Sakin + spesifik.",
      npc_role: "JR office staff",
      setting: "JR office at Kyoto Station, missing pass",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(excuse me|sumimasen)",
            "(i think i lost my jr pass)",
            "(do you have (a (lost|found) office|lost and found))",
            "(what should i do)",
            "(can i (replace|reissue) it)",
          ],
          hint_tr:
            "Net: 'I think I lost my JR Pass.' Türk: 'Help' kapalı, durum + soru.",
        },
        {
          speaker: "npc",
          message: "Lost? When? Where?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(this morning — (on the (train|platform)))",
            "(probably (on the line from|at) (nara|osaka))",
            "(between (8 and 10) am)",
            "(i (last had it|remember it) (at fushimi inari))",
            "(could you (check|search) (the lost and found))",
          ],
          hint_tr:
            "Zaman çizelge: 'Last had it at Fushimi Inari.' Türk: 'I don't remember' kapalı, son nokta.",
        },
        {
          speaker: "npc",
          message: "Let me check. Passport please.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(here you go|here'?s my passport)",
            "(also — (do you need|i have) (the receipt|the activation slip))",
            "(when (do you know|will you know))",
            "(thank you for (looking|checking))",
            "(if not — (what'?s the process))",
          ],
          hint_tr:
            "Hazırlık: 'I have the activation slip.' Türk: 'OK' düz, belge sun.",
        },
        {
          speaker: "npc",
          message: "Sorry — no JR Pass found. Cannot reissue.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(understood — (thank you for checking))",
            "(what'?s my (best|alternative) (option))",
            "(can i (buy|pay) (single|individual) tickets for (the remaining trips))",
            "(would (insurance|my travel insurance) cover this)",
            "(thanks (anyway|for the help))",
          ],
          hint_tr:
            "Alternatif: 'Best option? Single tickets?' Türk: 'OK bad' kapalı, çözüm sor.",
        },
        {
          speaker: "npc",
          message: "Yes — individual tickets. Card or cash.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(card|cash))",
            "(thank you (very much|for the help))",
            "(could you (write|note) (the (routes|stations) (you recommend))",
            "(arigato gozaimasu)",
            "(this (is (a good lesson|on me)))",
          ],
          hint_tr:
            "Olgun: 'This is a good lesson.' Türk: 'OK' düz, ders.",
        },
      ],
    },
  ],
};

export const soloJapan08: BundledLesson = {
  id: "arc.solo_japan.8",
  skill_id: "arc.solo_japan",
  index: 8,
  title: "Sahne 8 — Yuki'den davet: Türk hediye + onur",
  description: "Veda günü. Yuki sana yemek hazırladı. Türk hediyesi ile karşılık.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.arc.solo_japan.8.1",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "I brought this for you",
      tr_translation: "Bunu sana getirdim",
      example: "I brought this for you — from Turkey.",
      example_tr: "Bunu sana getirdim — Türkiye'den.",
    },
    {
      id: "ex.arc.solo_japan.8.2",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Yuki'nin küçük yemeği. Sen Türk lokumu uzat. Saygılı + samimi.",
      npc_role: "Yuki (small farewell)",
      setting: "Ryokan, last evening, small farewell dinner",
      turns: [
        {
          speaker: "npc",
          message: "Small dinner — to say goodbye.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thank you (so much|yuki))",
            "(this is (too kind|so generous))",
            "(i (brought|have) something (for you|too) — (from turkey))",
            "(it'?s called (turkish delight|lokum))",
            "(arigato gozaimasu)",
          ],
          hint_tr:
            "Karşılıklı: 'I brought something — from Turkey.' Türk: 'Thanks' düz, hediye etiket.",
        },
        {
          speaker: "npc",
          message: "Oh — beautiful. Try later.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(please (try one|share with your family))",
            "(it'?s (rose|pistachio) — (very turkish))",
            "(it'?s (sweet|chewy))",
            "(this stay (has been|was) (unforgettable|wonderful))",
            "(thank you for (everything|the welcome))",
          ],
          hint_tr:
            "Bağlam: 'Sweet, chewy — very Turkish.' Türk: 'Eat' eksik, kültür anlat.",
        },
        {
          speaker: "npc",
          message: "Will you come back?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i (hope|plan) to)",
            "(this place has (stolen my heart|made a mark))",
            "(absolutely — (next time with (family|friends)))",
            "(spring|cherry blossom season|autumn)",
            "(i won'?t (forget|miss) (this stay|the hospitality))",
          ],
          hint_tr:
            "Söz: 'This place has stolen my heart.' Türk: 'Yes' yetersiz, duygusal.",
        },
        {
          speaker: "npc",
          message: "You always welcome. Like family.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(that (means the world|touches me))",
            "(thank you (yuki|truly))",
            "(you have (a home|a friend) in turkey)",
            "(arigato gozaimasu)",
            "(this (is what (travel|hospitality) is))",
          ],
          hint_tr:
            "Karşılık: 'You have a home in Turkey.' Türk: 'Thanks' düz, davet aç.",
        },
      ],
    },
  ],
};

export const soloJapan09: BundledLesson = {
  id: "arc.solo_japan.9",
  skill_id: "arc.solo_japan",
  index: 9,
  title: "Sahne 9 — Hiro ile veda: 'come back'",
  description: "Son gece. Hiro bar'da. Veda — derin + samimi.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.arc.solo_japan.9.1",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "This trip changed me",
      tr_translation: "Bu seyahat beni değiştirdi",
      example: "Honestly — this trip changed me.",
      example_tr: "Açıkçası — bu seyahat beni değiştirdi.",
    },
    {
      id: "ex.arc.solo_japan.9.2",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Bar son ziyaret. Hiro samimi soru. Sen samimi cevap.",
      npc_role: "Hiro (last visit)",
      setting: "Same bar, last night, farewell",
      turns: [
        {
          speaker: "npc",
          message: "Last night. How was the trip?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(honestly — (this trip changed me))",
            "(better than (i expected|i could have hoped))",
            "(harder (in some ways) (than i thought))",
            "(slowed me down)",
            "(found (something|things) i (didn'?t know|wasn'?t looking for))",
          ],
          hint_tr:
            "Yansıma: 'Found things I wasn't looking for.' Türk: 'It was good' yetersiz, derin.",
        },
        {
          speaker: "npc",
          message: "Like what?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(patience)",
            "(comfort (with being alone|in silence))",
            "(clarity (about (the next chapter|what i want)))",
            "(that (slow|small) is (better|enough))",
            "(this (conversation|bar) (was|is) (part of it))",
          ],
          hint_tr:
            "Spesifik: 'Comfort in silence.' Türk: 'Many things' belirsiz, somut.",
        },
        {
          speaker: "npc",
          message: "Come back. We always here.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i will|i promise)",
            "(next year — (with friends|with stories))",
            "(this (chair|seat) (has my name|is mine))",
            "(thank you (hiro|for everything))",
            "(arigato — (this (place|bar) (means|matters)))",
          ],
          hint_tr:
            "Söz: 'This chair has my name.' Türk: 'Yes I come' düz, oyunlu söz.",
        },
        {
          speaker: "npc",
          message: "One last drink. On the house.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(to (this trip|next time))",
            "(to (you|the bar|kyoto))",
            "(cheers|kanpai)",
            "(to (slowing down|finding it))",
            "(arigato gozaimasu — (truly))",
          ],
          hint_tr:
            "Kadeh: 'Kanpai — to slowing down.' Türk: 'Cheers' düz, kalıbı + temayı al.",
        },
      ],
    },
  ],
};

export const soloJapan10: BundledLesson = {
  id: "arc.solo_japan.10",
  skill_id: "arc.solo_japan",
  index: 10,
  title: "Sahne 10 — Havalimanı: yabancıyla derin sohbet",
  description: "Narita uçağı bekleyiş. Yan koltukta İngiliz turist. Son derin sohbet.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.arc.solo_japan.10.1",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "What's the one thing that stays with you?",
      tr_translation: "Sende kalan tek şey ne?",
      example: "After a trip — what's the one thing that stays with you?",
      example_tr: "Bir seyahatten sonra — sende kalan tek şey ne?",
    },
    {
      id: "ex.arc.solo_japan.10.2",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Boarding gate. Yan koltuk açık sohbet aç. Veda olarak derin.",
      npc_role: "British traveler at gate (curious)",
      setting: "Narita departure gate, waiting to board",
      turns: [
        {
          speaker: "npc",
          message: "First time in Japan or seasoned?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(first time)",
            "(definitely (won'?t be|not) the last)",
            "(you)",
            "(it (changed me|got me))",
            "(longer than i thought — (still buzzing|still processing))",
          ],
          hint_tr:
            "Açık iade: 'First time — won't be the last. You?' Türk: 'Yes' kapanış, soru iade.",
        },
        {
          speaker: "npc",
          message: "Third time. Different every visit. What's the one thing that stays with you?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(honestly — (the (silence|attention to detail)))",
            "(the way (strangers (treat you|treat each other)))",
            "(how (food|tea|bowing) (becomes|is) (a ritual))",
            "(how (small|quiet) feels (enough|complete))",
            "(an old bartender (in pontocho|kyoto) — (a conversation))",
          ],
          hint_tr:
            "Somut + derin: 'Small feels enough.' Türk: 'Food was good' yetersiz, derin.",
        },
        {
          speaker: "npc",
          message: "Mine's always the trains. So quiet. So civil.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes — (the trains))",
            "(no (phone calls|loud talking))",
            "(it (taught me|made me) (about (consideration|public space)))",
            "(i'?ll (miss|carry) that)",
            "(coming home (will be|is going to be) (a shock|loud))",
          ],
          hint_tr:
            "Bağlantı: 'Coming home will be a shock.' Türk: 'Yes me too' düz, somut + içsel.",
        },
        {
          speaker: "npc",
          message: "Have a safe flight.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(you too|same to you)",
            "(safe travels)",
            "(it (was great|nice) chatting)",
            "(thanks for (the (chat|exchange)))",
            "(see you (in the next chapter|out there))",
          ],
          hint_tr:
            "Kapanış: 'See you out there.' Türk: 'Bye' düz, devam çağrısı.",
        },
      ],
    },
  ],
};

// ============================================================
// ARC 13 — TECH SUPPORT CALL (you = customer) (8 sahne)
// Recurring NPCs: Brad (tier-1 support), Linda (supervisor)
// ============================================================

export const techSupport01: BundledLesson = {
  id: "arc.tech_support.1",
  skill_id: "arc.tech_support",
  index: 1,
  title: "Sahne 1 — Brad ile ilk arama: 'I'm having an issue'",
  description: "İnternet bozuk. Tier-1 Brad. Sakin + spesifik problem tarifi.",
  estimated_minutes: 4,
  exercises: [
    {
      id: "ex.arc.tech_support.1.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "I'm having an issue with",
      tr_translation: "Şunla ilgili bir sorun yaşıyorum",
      example: "I'm having an issue with my internet.",
      example_tr: "İnternetimle ilgili bir sorun yaşıyorum.",
    },
    {
      id: "ex.arc.tech_support.1.2",
      type: "roleplay_chat",
      difficulty: 3,
      scenario_description:
        "Brad scripted tier-1. Sen sakin + spesifik. Hızlı çözüme git.",
      npc_role: "Brad (Tier-1 support, script-driven)",
      setting: "Phone call to ISP customer service",
      turns: [
        {
          speaker: "npc",
          message: "Thanks for calling. This is Brad. How can I help?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(hi brad)",
            "(i'?m having (an issue|trouble) with my (internet|connection))",
            "(it'?s been (down|spotty) (since (this morning|two days ago)))",
            "(account under [a-z]+|customer id))",
            "(can you (look up|pull up) my (account))",
          ],
          hint_tr:
            "Spesifik: 'Internet — down since this morning.' Türk: 'Doesn't work' kapalı, durum + ne zaman.",
        },
        {
          speaker: "npc",
          message: "Let me pull up your account. Can I have your name and address?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "([a-z]+)",
            "(my address is)",
            "(account number ends in (\\d+))",
            "(let me (give you|spell)) (the address))",
            "(the postcode is)",
          ],
          hint_tr:
            "Net bilgi: Address + account number. Türk: tek tek + harfle.",
        },
        {
          speaker: "npc",
          message: "Got you. Have you tried restarting the router?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes — twice)",
            "(i (unplugged|power-cycled) (for 30 seconds|properly))",
            "(no luck|same issue)",
            "(i (already tried|did) (that))",
            "(can we (skip ahead|go further))",
          ],
          hint_tr:
            "Önce hazırlık: 'Already tried — twice.' Türk: pasif bekle, hazırlanmış yanıt.",
        },
        {
          speaker: "npc",
          message: "Okay. Can you check the lights on the router?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(let me check|hold on)",
            "(power green — internet red)",
            "(only (the (power|wifi)) is on)",
            "(internet light is (blinking|off))",
            "(i'?m (in front of|next to) the router)",
          ],
          hint_tr:
            "Spesifik: 'Power green — internet red.' Türk: 'No light' belirsiz, renk + ışık.",
        },
        {
          speaker: "npc",
          message: "Sounds like a line issue. I'll create a ticket.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(noted)",
            "(could you (send|email) (the ticket number))",
            "(when'?s the (eta|engineer))",
            "(any (workaround|tethering option) for tonight)",
            "(thanks brad)",
          ],
          hint_tr:
            "Ticket: 'Could you email the ticket number?' Türk: 'OK' düz, kayıt iste.",
        },
      ],
    },
  ],
};

export const techSupport02: BundledLesson = {
  id: "arc.tech_support.2",
  skill_id: "arc.tech_support",
  index: 2,
  title: "Sahne 2 — Aynı problem, ertesi gün: 'this is the third call'",
  description: "Hala bozuk. Brad yine açtı. Frustrasyonu profesyonel ifade et.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.arc.tech_support.2.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "This is my third call",
      tr_translation: "Bu üçüncü aramam",
      example: "Brad — this is my third call this week.",
      example_tr: "Brad — bu hafta üçüncü aramam.",
    },
    {
      id: "ex.arc.tech_support.2.2",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Brad yine. Sen frustrasyonlu — ama profesyonel. Eskalasyon iste.",
      npc_role: "Brad (still tier-1, script-driven)",
      setting: "Third support call in 48 hours",
      turns: [
        {
          speaker: "npc",
          message: "Thanks for calling. Brad here. How can I help?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(hi brad)",
            "(this is my (third|3rd) call (this week))",
            "(same issue — internet still down)",
            "(ticket #(\\d+|abc-) still open)",
            "(i'?d like to (escalate|speak to a supervisor))",
          ],
          hint_tr:
            "Önemli bağlam: 'Third call this week.' Türk: 'Same problem' yetersiz, sayı + tarih.",
        },
        {
          speaker: "npc",
          message: "Let me check the ticket. Can I troubleshoot again?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(brad — with respect)",
            "(i'?ve done (this|the troubleshooting) twice)",
            "(i don'?t want to (repeat|go in circles))",
            "(can we (escalate|move to (tier 2|a supervisor)))",
            "(i'?d like (to speak (to|with) (a supervisor|linda)))",
          ],
          hint_tr:
            "Profesyonel sınır: 'With respect — let's escalate.' Türk: 'You are stupid' agresif, kibar + net.",
        },
        {
          speaker: "npc",
          message: "I understand. Let me transfer you to my supervisor, Linda.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thank you (brad|that helps))",
            "(appreciate the (transfer|move))",
            "(could you (brief|tell) her (the (background|history)))",
            "(so we don'?t (start over|repeat))",
            "(thanks for (escalating|helping))",
          ],
          hint_tr:
            "Brad'i de onurla: 'Brief her on the history.' Türk: 'OK transfer' düz, devamlılık.",
        },
        {
          speaker: "npc",
          message: "Will do. Brief hold.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks (brad|i'?ll wait))",
            "(no problem)",
            "(holding)",
            "(thanks for (your patience))",
          ],
          hint_tr:
            "Sabır: 'Thanks for your patience.' Türk: 'OK' düz, ilişki sürdür.",
        },
      ],
    },
  ],
};

export const techSupport03: BundledLesson = {
  id: "arc.tech_support.3",
  skill_id: "arc.tech_support",
  index: 3,
  title: "Sahne 3 — Linda (supervisor): 'I'd like a credit'",
  description: "Linda telefonda. Sakin + net — kredi istiyorsun, baskı kur.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.arc.tech_support.3.1",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "I'd like a credit",
      tr_translation: "Bir kredi/iade istiyorum",
      example: "I'd like a credit for the days without service.",
      example_tr: "Servis olmayan günler için bir kredi istiyorum.",
    },
    {
      id: "ex.arc.tech_support.3.2",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Linda yetkili. Frustrasyonu hak iddiasına dönüştür — net + olgun.",
      npc_role: "Linda (supervisor, has authority)",
      setting: "Escalated to supervisor",
      turns: [
        {
          speaker: "npc",
          message: "This is Linda. I see your case. I apologize.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks linda)",
            "(i appreciate (the (apology|escalation)))",
            "(i'?d (like to|want to) (focus on) (a resolution))",
            "(it'?s been (4|five) days without (proper )?internet)",
            "(i'?d like a (credit|refund) (for the (downtime|outage)))",
          ],
          hint_tr:
            "Hak: 'I'd like a credit for the downtime.' Türk: 'Sorry not enough' agresif, somut talep.",
        },
        {
          speaker: "npc",
          message: "I can issue a 25% credit for this month.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(linda — (with respect)) (that doesn'?t (cover|reflect) (the impact))",
            "(four days of (outage|no internet)) (is (more than|over) 25%))",
            "(could we (do|move to) (50%|a full month credit))",
            "(i (work from home — (this affected (my work|my income)))",
            "(could we (also (add|include) a (free month|upgrade))",
          ],
          hint_tr:
            "Karşı teklif: 'Four days of outage is over 25%.' Türk: 'Not enough' kapanış, matematik.",
        },
        {
          speaker: "npc",
          message: "Let me check what I can offer. 40% — that's my ceiling.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thank you for (stretching|pushing))",
            "(could we (also (waive|drop) (the next month'?s fee|installation)))",
            "(40% works (if you (also (commit|guarantee)) (engineer by tomorrow)))",
            "(could you (put|confirm) (it in writing))",
            "(deal)",
          ],
          hint_tr:
            "Anlaşma + ek: 'Could we also waive next month?' Türk: 'OK 40%' acele, fırsat artır.",
        },
        {
          speaker: "npc",
          message: "Done — 40% credit. Engineer tomorrow 8am. Confirmation email sent.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thank you (linda|so much))",
            "(this (resolves|works for) me)",
            "(appreciate (you taking it seriously))",
            "(let'?s (make this the last call) (for a while))",
            "(have a (good|nice) (day|one))",
          ],
          hint_tr:
            "Onurla kapanış: 'Appreciate you taking it seriously.' Türk: 'OK bye' düz, ilişki onurla.",
        },
      ],
    },
  ],
};

export const techSupport04: BundledLesson = {
  id: "arc.tech_support.4",
  skill_id: "arc.tech_support",
  index: 4,
  title: "Sahne 4 — Engineer evde: pratik konuşma",
  description: "Engineer geldi. Türk evi — kabin nerede, kablo nerede açıkla.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.arc.tech_support.4.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "Let me show you",
      tr_translation: "Sana göstereyim",
      example: "Let me show you where the cable runs.",
      example_tr: "Sana kablonun nereden geçtiğini göstereyim.",
    },
    {
      id: "ex.arc.tech_support.4.2",
      type: "roleplay_chat",
      difficulty: 3,
      scenario_description:
        "Engineer kapıda. Tour ver, problem anlat.",
      npc_role: "Field engineer",
      setting: "Engineer visit at home, 8am",
      turns: [
        {
          speaker: "npc",
          message: "Good morning. Internet engineer. Where's the router?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(morning|come in)",
            "(it'?s (in (the living room|the hallway)))",
            "(let me show you)",
            "(this way|follow me)",
            "(thanks for (coming|the quick visit))",
          ],
          hint_tr:
            "Davet: 'Let me show you — this way.' Türk: 'It is there' eksik, hareket dili.",
        },
        {
          speaker: "npc",
          message: "What's been happening?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(internet (light|red) (since saturday|four days))",
            "(power on — (no internet))",
            "(i'?ve (restarted|cycled) (twice|many times))",
            "(tier 1 (sent me|escalated)) (to a supervisor))",
            "(40% credit (already issued))",
          ],
          hint_tr:
            "Hızlı brief: 'Power on — no internet — restarted twice.' Türk: uzun anlatım, kısa fakt.",
        },
        {
          speaker: "npc",
          message: "Could be the line outside. Mind if I check the box?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(of course|go ahead)",
            "(the (box|junction) is (out front|in the back))",
            "(let me (unlock|open) (the gate))",
            "(do you need (anything from me|me to step out))",
            "(take your time)",
          ],
          hint_tr:
            "Yardım: 'Do you need anything from me?' Türk: 'OK' düz, aktif yardım.",
        },
        {
          speaker: "npc",
          message: "All set. Wire was damaged — replaced. Test now.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(let me check)",
            "(green light — (working))",
            "(streaming (loads|works) now)",
            "(thank you (so much|for the fix))",
            "(any (tips|advice) (to (prevent|avoid)) (this))",
          ],
          hint_tr:
            "Test: 'Green light — working.' Türk: 'OK' düz, doğrula.",
        },
        {
          speaker: "npc",
          message: "If lights flash again — call. Stay safe.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thank you (again|so much))",
            "(have a (good|nice) (day|shift))",
            "(noted — (i'?ll call if))",
            "(appreciate (the quick work|the patience))",
          ],
          hint_tr:
            "Kapanış: 'Appreciate the quick work.' Türk: 'OK bye' düz, işi onurla.",
        },
      ],
    },
  ],
};

export const techSupport05: BundledLesson = {
  id: "arc.tech_support.5",
  skill_id: "arc.tech_support",
  index: 5,
  title: "Sahne 5 — Bill hatası: 'I was overcharged'",
  description: "Faturada ek ücret. Yine Brad. Net + sayılı talep.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.arc.tech_support.5.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "I was overcharged",
      tr_translation: "Fazla ücretlendirildim",
      example: "I was overcharged on this month's bill.",
      example_tr: "Bu ayki faturada fazla ücretlendirildim.",
    },
    {
      id: "ex.arc.tech_support.5.2",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Brad yeniden. Bu kez billing. Sakin + sayılı.",
      npc_role: "Brad (billing query)",
      setting: "New call about billing issue",
      turns: [
        {
          speaker: "npc",
          message: "Hi Brad. How can I help?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(hey brad)",
            "(i was overcharged on (this month'?s|the latest) bill)",
            "(my (statement|bill) shows (\\d+|85))",
            "(should be (\\d+|65) (after the credit))",
            "(can you (pull up|check) (my (account|invoice)))",
          ],
          hint_tr:
            "Spesifik sayı: 'Statement shows 85 — should be 65.' Türk: 'Wrong bill' belirsiz, sayı.",
        },
        {
          speaker: "npc",
          message: "Let me look. Yes — the credit wasn't applied. Sorry.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(appreciate (you finding|spotting) it)",
            "(could you (apply|process) (the credit|the difference) (today))",
            "(when will (i see|it reflect) (on (the next|the current) bill))",
            "(could you (send|email) (a confirmation))",
            "(can we (also|automatically) (avoid this next month))",
          ],
          hint_tr:
            "Aksiyon: 'When will I see it reflected?' Türk: 'OK' düz, zaman + onay.",
        },
        {
          speaker: "npc",
          message: "Credit will apply within 5 business days.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(noted|5 business days)",
            "(could you (set|put it on) (a reminder|note))",
            "(if it doesn'?t apply — (i'?ll (call back|reach out)))",
            "(thanks brad — (this was (easy|smooth)))",
            "(have a (good|nice) (one|day))",
          ],
          hint_tr:
            "Plan: 'If it doesn't apply — I'll reach out.' Türk: 'OK' düz, sigorta.",
        },
        {
          speaker: "npc",
          message: "Anything else?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(no — (that'?s it))",
            "(thanks for (the quick fix))",
            "(have a (good|great) (day|one))",
          ],
          hint_tr:
            "Kapanış: 'Thanks for the quick fix.' Türk: 'No bye' düz, takdir.",
        },
      ],
    },
  ],
};

export const techSupport06: BundledLesson = {
  id: "arc.tech_support.6",
  skill_id: "arc.tech_support",
  index: 6,
  title: "Sahne 6 — Upgrade pazarlığı: 'I'm thinking about switching'",
  description: "Sözleşme bitiyor. Kalmak için pazarlık.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.arc.tech_support.6.1",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "What can you do to keep me?",
      tr_translation: "Beni elinde tutmak için ne yapabilirsin?",
      example: "Honestly — what can you do to keep me?",
      example_tr: "Açıkçası — beni elinde tutmak için ne yapabilirsin?",
    },
    {
      id: "ex.arc.tech_support.6.2",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Retention team. Pazarlık — kalmak için.",
      npc_role: "Retention specialist",
      setting: "Call to retention department",
      turns: [
        {
          speaker: "npc",
          message: "I see you're thinking of leaving. What's driving that?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(honestly — (a few things))",
            "(price (has gone up|is high))",
            "(a competitor (offered me) (cheaper|faster) (terms))",
            "(reliability (has been|was) (poor) (recently))",
            "(what can you do to keep me)",
          ],
          hint_tr:
            "Direkt: 'What can you do to keep me?' Türk: 'Maybe I leave' belirsiz, leverage.",
        },
        {
          speaker: "npc",
          message: "I can offer 20% off for 12 months. Stay with us.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks)",
            "(could you (also|add) (upgrade my speed|throw in (a free month)))",
            "(competitor is at (\\d+|45))",
            "(could you (match|beat))",
            "(let me (think|chat with my partner))",
          ],
          hint_tr:
            "Sondaj: 'Could you match?' Türk: 'OK 20%' acele, ek talep.",
        },
        {
          speaker: "npc",
          message: "30% off plus speed upgrade. Final.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(deal|works for me)",
            "(could you (put|send) (it in writing))",
            "(when does (the new rate|the upgrade) (kick in|start))",
            "(thanks for (the move|stretching))",
            "(let'?s (lock|book) it in)",
          ],
          hint_tr:
            "Yazılı onay: 'Send it in writing.' Türk: 'OK' düz, kayıt.",
        },
        {
          speaker: "npc",
          message: "Confirmation in your email in 10 minutes.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks (so much|i'?ll watch for it))",
            "(have a (good|great) (day|one))",
            "(appreciate (the (offer|work)))",
            "(if anything (changes|comes up) — (i'?ll call back))",
          ],
          hint_tr:
            "Kapanış: 'I'll watch for it.' Türk: 'OK bye' düz, takipte.",
        },
      ],
    },
  ],
};

export const techSupport07: BundledLesson = {
  id: "arc.tech_support.7",
  skill_id: "arc.tech_support",
  index: 7,
  title: "Sahne 7 — Brad ile küçük şaka: 'we meet again'",
  description: "Yine Brad'a denk geldin. İlişki kurmuşsun — küçük sohbet.",
  estimated_minutes: 4,
  exercises: [
    {
      id: "ex.arc.tech_support.7.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "Long time no speak",
      tr_translation: "Uzun zaman oldu",
      example: "Brad — long time no speak!",
      example_tr: "Brad — uzun zaman oldu!",
    },
    {
      id: "ex.arc.tech_support.7.2",
      type: "roleplay_chat",
      difficulty: 3,
      scenario_description:
        "Brad tanıdı seni. Tanıdık bir sohbet — ama hızlı sorununu çöz.",
      npc_role: "Brad (recognizes you)",
      setting: "Routine call, fourth or fifth interaction",
      turns: [
        {
          speaker: "npc",
          message: "Hey — is this who I think? Mr. [name]?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(brad|long time no speak)",
            "(haha — (you remember))",
            "(yes — (it'?s me))",
            "(can'?t escape (you|each other))",
            "(at this point — (i should be on your team))",
          ],
          hint_tr:
            "Hafif: 'I should be on your team.' Türk: 'Yes' düz, espri.",
        },
        {
          speaker: "npc",
          message: "What's the trouble today?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(small one — (wifi (speed|slow)))",
            "(getting (50 mbps|half) of (advertised|paid for))",
            "(speed test confirms (it))",
            "(can we (check|verify) (the line|connection))",
            "(account on file)",
          ],
          hint_tr:
            "Net + veri: 'Speed test confirms — 50 mbps.' Türk: 'Slow' belirsiz, sayı.",
        },
        {
          speaker: "npc",
          message: "Let me check. Could be the router placement.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks)",
            "(router (is in|sits in) (the living room|center))",
            "(testing (right next to|on cable))",
            "(any (suggestions|tips) for placement)",
            "(should i (upgrade|switch) (to the new|to wifi 6))",
          ],
          hint_tr:
            "Veri: 'Testing on cable.' Türk: 'OK' düz, troubleshooting bilgisi.",
        },
        {
          speaker: "npc",
          message: "On cable — should be full. I'll schedule a diagnostic.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(perfect)",
            "(thanks brad — (always smooth with you))",
            "(when (is the diagnostic|will i hear back))",
            "(send me the (ticket|confirmation))",
            "(catch you later)",
          ],
          hint_tr:
            "Sıcak: 'Always smooth with you.' Türk: 'OK' düz, ilişki büyüt.",
        },
      ],
    },
  ],
};

export const techSupport08: BundledLesson = {
  id: "arc.tech_support.8",
  skill_id: "arc.tech_support",
  index: 8,
  title: "Sahne 8 — Linda'dan teşekkür araması: 'how was your experience?'",
  description: "Linda sonra arayıp deneyim soruyor. Yapıcı feedback ver.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.arc.tech_support.8.1",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "Constructive feedback",
      tr_translation: "Yapıcı geri bildirim",
      example: "I'd like to share some constructive feedback.",
      example_tr: "Biraz yapıcı geri bildirim paylaşmak isterim.",
    },
    {
      id: "ex.arc.tech_support.8.2",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Linda survey araması. Honest + yapıcı geri bildirim.",
      npc_role: "Linda (follow-up survey)",
      setting: "Linda calling for customer experience survey",
      turns: [
        {
          speaker: "npc",
          message: "Hi — Linda again. Calling for feedback on your last few months.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(hi linda|good to hear from you)",
            "(happy to (share|help))",
            "(i'?d like to give (honest|constructive) feedback)",
            "(some (highs|lows) — (a few of each))",
            "(go ahead|fire away)",
          ],
          hint_tr:
            "Açık: 'Happy to share honest feedback.' Türk: 'Good' yetersiz, denge sözü.",
        },
        {
          speaker: "npc",
          message: "What worked? What didn't?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(what worked — (brad was patient|the engineer was fast))",
            "(your (escalation|credit) (was quick|easy))",
            "(what didn'?t — (3 calls to (get) (the right person)))",
            "(billing (errors|repeats))",
            "(some (gaps|handoffs) (between tiers))",
          ],
          hint_tr:
            "Yapı: 'What worked / what didn't.' Türk: 'All bad' veya 'All good' uçlar, denge.",
        },
        {
          speaker: "npc",
          message: "That's useful. Anything we could do better?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(tier 1 (could (escalate|move)) (faster) (for repeat callers))",
            "(automatic credits for (downtime over (24 hours)))",
            "(a (status|ticket) (dashboard for customers))",
            "(brad (deserves a raise|did great))",
            "(if (the (engineer|field) (call|appointment)) (was (proactive))",
          ],
          hint_tr:
            "Somut: 'Tier 1 could escalate faster for repeat callers.' Türk: 'Faster help' belirsiz, sistem.",
        },
        {
          speaker: "npc",
          message: "I'll share with the team. Thank you for the candor.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thank you (linda|for asking))",
            "(this is (how|why) (you (improve|stay)))",
            "(let'?s (talk again|stay (in touch)))",
            "(appreciate (you (taking|spending) the time))",
            "(have a (good|nice) (day|one))",
          ],
          hint_tr:
            "Onurla: 'This is why you stay.' Türk: 'Welcome bye' düz, prensip.",
        },
      ],
    },
  ],
};

// ============================================================
// ARC 14 — UNIVERSITY ADMISSION INTERVIEW (8 sahne)
// Recurring NPC: Prof. Hartwell (admissions chair)
// ============================================================

export const uniAdmission01: BundledLesson = {
  id: "arc.uni_admission.1",
  skill_id: "arc.uni_admission",
  index: 1,
  title: "Sahne 1 — Prof. Hartwell ile ilk arama: 'why us?'",
  description: "Master's program interview ilk turu. Hartwell direkt — neden bu okul.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.arc.uni_admission.1.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "What drew me to your program",
      tr_translation: "Beni programınıza çeken şey",
      example: "What drew me to your program was the research focus.",
      example_tr: "Beni programınıza çeken şey araştırma odağıydı.",
    },
    {
      id: "ex.arc.uni_admission.1.2",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Zoom interview. Hartwell formel ama nazik. Yapı + spesifiklik.",
      npc_role: "Prof. Hartwell (admissions chair)",
      setting: "First-round Zoom interview, master's program",
      turns: [
        {
          speaker: "npc",
          message: "Good morning. Let's start with — why us?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thank you|good morning))",
            "(what drew me to your program (was|is))",
            "(specifically — (dr. (smith)'?s work on (x))",
            "(the (interdisciplinary|small cohort) (model|setup))",
            "(i (read|listened to|attended) (the recent (lecture|paper)))",
          ],
          hint_tr:
            "Spesifik: 'Dr. Smith's work on X drew me.' Türk: 'Good school' belirsiz, isim + iş.",
        },
        {
          speaker: "npc",
          message: "You mentioned Dr. Smith's work. Which paper?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(the (2024|recent) paper on)",
            "(her (work|approach) to (x))",
            "(what (struck|caught) me was (the methodology|the framing))",
            "(it (resonates|connects) with (my (own|recent) (work|interest))",
            "(i (cited|drew on) it in (my application))",
          ],
          hint_tr:
            "Derinleş: 'Cited it in my application.' Türk: 'I read' yetersiz, somut + kullanım.",
        },
        {
          speaker: "npc",
          message: "Tell me about your research interest.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(in one sentence — (i'?m interested in))",
            "(it (started with|grew out of) (my (undergrad|thesis)))",
            "(specifically — (the (intersection|application) of) (x and y))",
            "(in the turkish context — (a particular angle))",
            "(open question — (how does (x) (affect|relate to) (y)))",
          ],
          hint_tr:
            "Yapı: 'One sentence — interest.' Türk: uzun monolog, kısa + soru.",
        },
        {
          speaker: "npc",
          message: "Interesting framing. What would you study here that you couldn't elsewhere?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(two things — (your (lab|seminar)|specific (faculty|resources)))",
            "(access to (the (archive|dataset)))",
            "(the (peer cohort|community))",
            "(your (methodology|approach) is (rare|unusual))",
            "(other places (cover|teach) the topic — (none in this way))",
          ],
          hint_tr:
            "Karşılaştırma: 'Other places teach — none in this way.' Türk: 'Yours is best' düz, somut fark.",
        },
        {
          speaker: "npc",
          message: "Solid answer. Let's continue.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thank you)",
            "(happy to (go deeper|continue))",
            "(any (specific|areas) you (want me to|expand on))",
          ],
          hint_tr:
            "Sıra: 'Happy to go deeper.' Türk: 'OK' düz, kontrolü teslim et.",
        },
      ],
    },
  ],
};

export const uniAdmission02: BundledLesson = {
  id: "arc.uni_admission.2",
  skill_id: "arc.uni_admission",
  index: 2,
  title: "Sahne 2 — Zorlu soru: 'why this gap year?'",
  description: "1 yıl gap var. Hartwell sordu. Defansif değil — sahip çık + büyüt.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.arc.uni_admission.2.1",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "I used the year to",
      tr_translation: "O yılı şuna kullandım",
      example: "I used the year to clarify what I want.",
      example_tr: "O yılı ne istediğimi netleştirmek için kullandım.",
    },
    {
      id: "ex.arc.uni_admission.2.2",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Hartwell zorlu soru sordu. Sahiplen + sahnele — defansif olma.",
      npc_role: "Prof. Hartwell (digging)",
      setting: "Same interview, harder questions",
      turns: [
        {
          speaker: "npc",
          message: "There's a gap year in your CV. Why?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks for asking — (i (welcome|expected) the question))",
            "(i used the year to (clarify|test))",
            "(worked at (a startup|a research lab))",
            "(ran (a project|a side study))",
            "(came (out of it|back to research) with (more clarity))",
          ],
          hint_tr:
            "Sahiplen: 'I used the year to clarify.' Türk: 'I needed break' defansif, aktif çerçeve.",
        },
        {
          speaker: "npc",
          message: "Be specific. What did you do?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(three things)",
            "(worked at (a startup) — (learned (engineering|industry)))",
            "(self(-| )?studied (in the area))",
            "(wrote (a paper|a draft) (in (turkish|english)))",
            "(volunteered (mentoring|teaching) (younger students))",
          ],
          hint_tr:
            "Spesifik: 'Three things.' Türk: 'I did many things' belirsiz, liste.",
        },
        {
          speaker: "npc",
          message: "Did the year change what you want to study?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes — (significantly|in a good way))",
            "(i (came in|started) (with broader|with vague))",
            "(the year (narrowed|sharpened) (the focus))",
            "(specifically — (the question is (now)) (\\w+ \\w+))",
            "(without the year — (i'?d be (less ready|here for the wrong reasons))",
          ],
          hint_tr:
            "Evrim göster: 'The year sharpened the focus.' Türk: 'No same' düz, gelişimi göster.",
        },
        {
          speaker: "npc",
          message: "Good. Could you have done that within a program?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(arguably — (yes))",
            "(but i (wanted|needed) (the (industry|real-world) lens))",
            "(coming back (with conviction|with a stronger why))",
            "(i'?m (more ready|a better student) now)",
            "(no regrets — (it'?s (the foundation|the runway)))",
          ],
          hint_tr:
            "Olgun: 'No regrets — it's the foundation.' Türk: 'Yes I could' kabul, savun.",
        },
        {
          speaker: "npc",
          message: "Fair. Let's go to next question.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thank you|happy to (continue|keep going))",
          ],
          hint_tr:
            "Sıra: 'Happy to continue.' Türk: 'OK' düz, kontrolü teslim.",
        },
      ],
    },
  ],
};

export const uniAdmission03: BundledLesson = {
  id: "arc.uni_admission.3",
  skill_id: "arc.uni_admission",
  index: 3,
  title: "Sahne 3 — Teknik soru: methodology",
  description: "Hartwell yöntem sorusu sordu. Bilmiyorsan onu da net söyle.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.arc.uni_admission.3.1",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "Honestly, I'm not sure",
      tr_translation: "Açıkçası emin değilim",
      example: "Honestly, I'm not sure — let me think out loud.",
      example_tr: "Açıkçası emin değilim — sesli düşüneyim.",
    },
    {
      id: "ex.arc.uni_admission.3.2",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Hartwell teknik soru. Sen bir şeyi bilmiyorsun — dürüst + düşün.",
      npc_role: "Prof. Hartwell (technical questions)",
      setting: "Interview methodology section",
      turns: [
        {
          speaker: "npc",
          message: "How would you design a study to test that claim?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(let me (think out loud|walk through it))",
            "(first — (define the (dependent|outcome) variable))",
            "(then — (the (sampling|comparison) frame))",
            "(i'?d (run|use) (mixed methods|a quasi(-| )?experimental design))",
            "(open to (other approaches|alternatives))",
          ],
          hint_tr:
            "Yapılı düşün: 'Let me think out loud — first define DV.' Türk: 'I don't know' kapanış, süreç.",
        },
        {
          speaker: "npc",
          message: "What about sample size? Power analysis?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(honestly — (i (haven'?t done|am rusty on) power analysis))",
            "(i (could (work it out|brush up))",
            "(my (instinct|rough estimate) would be (\\d+|100-200))",
            "(would depend on (effect size|variance))",
            "(could you (point|share) (a reference|recommend reading))",
          ],
          hint_tr:
            "Dürüst + öğrenmeye aç: 'Honestly — rusty.' Türk: 'I don't know' kapalı, dürüst + plan.",
        },
        {
          speaker: "npc",
          message: "Good honesty. What's the biggest threat to validity?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(probably — (selection bias|reverse causality))",
            "(in this (population|setting) — (specifically (x)))",
            "(could (control|mitigate) (with (matched|control) groups))",
            "(i'?d also worry about (measurement (error|invariance)))",
            "(any (specific|particular) threat (you would|you'?d) (flag))",
          ],
          hint_tr:
            "Tehlike: 'Selection bias.' Türk: 'I don't know' kapalı, terim ver.",
        },
        {
          speaker: "npc",
          message: "Excellent. Let's see how you handle the writing sample.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thank you|ready)",
            "(happy to (walk through|defend) (my (writing|sample)))",
            "(thanks for (the rigor|the depth))",
          ],
          hint_tr:
            "Hazır: 'Ready.' Türk: 'OK' düz, devam.",
        },
      ],
    },
  ],
};

export const uniAdmission04: BundledLesson = {
  id: "arc.uni_admission.4",
  skill_id: "arc.uni_admission",
  index: 4,
  title: "Sahne 4 — Yazılı örnek savunma: 'defend your conclusion'",
  description: "Yazılı çalışmanı sundun. Hartwell sonucuna karşı çıkıyor.",
  estimated_minutes: 6,
  exercises: [
    {
      id: "ex.arc.uni_admission.4.1",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "Let me defend that point",
      tr_translation: "O noktayı savunayım",
      example: "Let me defend that point — here's my reasoning.",
      example_tr: "O noktayı savunayım — gerekçem şu.",
    },
    {
      id: "ex.arc.uni_admission.4.2",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Hartwell yazılı çalışmana karşı çıktı. Net savun + nüans.",
      npc_role: "Prof. Hartwell (academic challenge)",
      setting: "Interview, writing sample defense",
      turns: [
        {
          speaker: "npc",
          message: "Your conclusion overreaches. You can't claim causation here.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(you'?re right (to push|to flag))",
            "(let me (defend|clarify) (the (point|claim)))",
            "(i (intended|wrote) it as (association|suggestive)) — (not causation)",
            "(the language (could be|was) (tighter|more careful))",
            "(in the revised version — (i'?d (soften|qualify)) (it))",
          ],
          hint_tr:
            "Kabul + savun: 'Wrote it as association — not causation.' Türk: 'I am right' direkt, nüans + kabul.",
        },
        {
          speaker: "npc",
          message: "Even association — what's the mechanism?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(strong question)",
            "(the (proposed|likely) mechanism is)",
            "(i (lean toward|favor) (the (selection|signaling)) explanation)",
            "(though (alternative|competing) (mechanisms) (could (account|explain)))",
            "(the data doesn'?t (cleanly|fully) (separate|distinguish))",
          ],
          hint_tr:
            "Hipotez yarış: 'Lean toward selection — competing mechanisms.' Türk: 'I think it is X' düz, alternatifler.",
        },
        {
          speaker: "npc",
          message: "What evidence would change your mind?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(falsifiability — (i welcome the (frame|question)))",
            "(a (natural experiment|randomized design) showing (the opposite))",
            "(longitudinal data (showing) (no effect))",
            "(replication (in another (population|setting)))",
            "(i should be (open|movable) on this)",
          ],
          hint_tr:
            "Bilim: 'I should be movable on this.' Türk: 'I am right' eksik, falsifiability.",
        },
        {
          speaker: "npc",
          message: "Good. You handled that maturely.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thank you|that means a lot)",
            "(appreciate (the rigor|the questions))",
            "(this is (the kind of (exchange|conversation)) i (want|came here for))",
            "(i'?m (sharper for it|better for the pushback))",
          ],
          hint_tr:
            "Onurla: 'I'm better for the pushback.' Türk: 'OK' düz, eleştiriyi değere.",
        },
      ],
    },
  ],
};

export const uniAdmission05: BundledLesson = {
  id: "arc.uni_admission.5",
  skill_id: "arc.uni_admission",
  index: 5,
  title: "Sahne 5 — Hartwell: 'tell me about a failure'",
  description: "Failure sorusu. Türklerin zayıf noktası. Olgun + öğrenme çerçeve.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.arc.uni_admission.5.1",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "It taught me to",
      tr_translation: "Bana şunu öğretti",
      example: "It taught me to ask earlier.",
      example_tr: "Bana daha erken sormayı öğretti.",
    },
    {
      id: "ex.arc.uni_admission.5.2",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Hartwell klasik soru. Spesifik + öğrenme + büyüme.",
      npc_role: "Prof. Hartwell (behavioral question)",
      setting: "Interview behavioral section",
      turns: [
        {
          speaker: "npc",
          message: "Tell me about a project that failed.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(good question)",
            "(my (undergrad|first) thesis (proposal|draft))",
            "(i (took on|chose) (too broad|an unwieldy topic))",
            "(by month (three|four) — (i was (drowning|stuck)))",
            "(it (didn'?t|wouldn'?t) (cohere|come together))",
          ],
          hint_tr:
            "Somut: 'Undergrad thesis — too broad.' Türk: 'No failure' yalan, gerçek + sahip çık.",
        },
        {
          speaker: "npc",
          message: "What did you do?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i (asked|approached) (my advisor) (late))",
            "(we (had to|ended up) (narrowing|scrapping (most of it)))",
            "(i (rewrote|started over) (in the (final) months))",
            "(barely (made|hit) (the deadline))",
            "(it (taught me) to (ask earlier|narrow earlier))",
          ],
          hint_tr:
            "Süreç: 'Taught me to ask earlier.' Türk: 'I worked hard' belirsiz, ders.",
        },
        {
          speaker: "npc",
          message: "What's different now?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i (start|begin) with (smaller|tighter) (questions))",
            "(i (ask|check in) (early|every two weeks))",
            "(i (welcome|invite) (feedback|pushback) (sooner))",
            "(i (test|prototype) (the framing|the question) (with peers) first)",
            "(no more (silent struggling|heroics))",
          ],
          hint_tr:
            "Davranış: 'No more silent struggling.' Türk: 'I am better' belirsiz, somut.",
        },
        {
          speaker: "npc",
          message: "That's the maturity I look for.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thank you|appreciate (you saying))",
            "(it (cost me|took) (a few sleepless months))",
            "(but (worth) the (lesson|growth))",
            "(i (welcome|will (welcome|invite)) (the pushback) (here too))",
          ],
          hint_tr:
            "Olgun: 'I welcome pushback here too.' Türk: 'Thanks' düz, gelecek bağlanma.",
        },
      ],
    },
  ],
};

export const uniAdmission06: BundledLesson = {
  id: "arc.uni_admission.6",
  skill_id: "arc.uni_admission",
  index: 6,
  title: "Sahne 6 — 'Why not a PhD direct?'",
  description: "Hartwell zor soru: 'neden direkt PhD değil master?' Net + olgun.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.arc.uni_admission.6.1",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "I want to test the fit",
      tr_translation: "Uyumu test etmek istiyorum",
      example: "Honestly — I want to test the fit before a PhD.",
      example_tr: "Açıkçası — PhD'den önce uyumu test etmek istiyorum.",
    },
    {
      id: "ex.arc.uni_admission.6.2",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Hartwell stratejik. Sen dürüst — niyetini açıkla.",
      npc_role: "Prof. Hartwell (strategic question)",
      setting: "Interview, strategic question",
      turns: [
        {
          speaker: "npc",
          message: "Why master's first? Why not direct PhD?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(honest answer — (i want to test the fit))",
            "(research (is) (a long road) — (i want to (commit (with conviction))))",
            "(i (haven'?t had|need) (more (immersion|exposure)) (to the field))",
            "(the master'?s (lets me|gives me) (room to (refine|narrow)))",
            "(also — (i (want|need) to (find the right) advisor))",
          ],
          hint_tr:
            "Dürüst: 'Want to test fit.' Türk: 'Not ready' negatif, aktif.",
        },
        {
          speaker: "npc",
          message: "And if you decide PhD isn't for you after?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(then (i (won'?t do it|move on)))",
            "(the master'?s (is valuable|stands alone))",
            "(industry|policy|teaching) (are (also paths|on the table))",
            "(i'?d (rather (know|find out)) (than (force it|sunk-cost)))",
            "(but my (intent|hypothesis) is (the phd is the right next step))",
          ],
          hint_tr:
            "Açık: 'Industry, policy, teaching also on the table.' Türk: 'Yes PhD' tek yön, esnek.",
        },
        {
          speaker: "npc",
          message: "What's your fit hypothesis for this department?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(three things)",
            "(your (cohort|methodology) (matches|fits) my (interest))",
            "(dr. (smith|name) (could be (an advisor|a mentor) — (i'?ve emailed (her|him))))",
            "(the (placement|outcomes) (track record|history) (gives me) confidence)",
            "(i'?d (test it|stress test) (in the first year))",
          ],
          hint_tr:
            "Spesifik: 'Emailed Dr. Smith.' Türk: 'I like the school' belirsiz, hareket.",
        },
        {
          speaker: "npc",
          message: "Good answer. Anything you want to ask me?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes — (a few))",
            "(what does (a great|the best) (master'?s student) (look like) (in your experience))",
            "(what'?s the (typical|usual) (first(-| )?year) (workload))",
            "(any (advisors|faculty) you'?d (recommend|introduce) (i (reach out to|chat with)))",
            "(if i'?m admitted — (when does decision-making happen))",
          ],
          hint_tr:
            "Soru iade: 'What does a great student look like?' Türk: 'No questions' yetersiz, kalibre.",
        },
      ],
    },
  ],
};

export const uniAdmission07: BundledLesson = {
  id: "arc.uni_admission.7",
  skill_id: "arc.uni_admission",
  index: 7,
  title: "Sahne 7 — Funding sorusu: 'how will you support yourself?'",
  description: "Hartwell finansman sordu. Net + onurlu — yardım istemek.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.arc.uni_admission.7.1",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "I'm exploring funding options",
      tr_translation: "Finansman opsiyonlarını araştırıyorum",
      example: "I'm exploring several funding options.",
      example_tr: "Birkaç finansman opsiyonunu araştırıyorum.",
    },
    {
      id: "ex.arc.uni_admission.7.2",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Hartwell finansman sordu. Türklerde tabu — dürüst + plan.",
      npc_role: "Prof. Hartwell (funding question)",
      setting: "Interview, funding section",
      turns: [
        {
          speaker: "npc",
          message: "How will you fund this? Scholarships?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i'?m (exploring|pursuing) (several|multiple) funding options)",
            "(applied to (turkiye burslari|chevening|fulbright))",
            "(self-funded (partly) — (family support|savings))",
            "(have a (small) loan (pre-approved|in reserve))",
            "(any (department|university) (aid|scholarships) (i should know about))",
          ],
          hint_tr:
            "Liste: 'Multiple options.' Türk: 'My family pays' tek yön, çoklu strateji.",
        },
        {
          speaker: "npc",
          message: "Do you have a backup if scholarships fall through?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes — (i'?ve planned (multiple scenarios)))",
            "(a deferral — (if (funding) (doesn'?t come))",
            "(part(-| )?time (i can|i'?m willing to) (work during studies))",
            "(my family (has (committed|saved up) some))",
            "(i wouldn'?t (start|enroll) without (a solid plan))",
          ],
          hint_tr:
            "Planlı: 'Wouldn't start without a solid plan.' Türk: 'I hope OK' belirsiz, plan B.",
        },
        {
          speaker: "npc",
          message: "Smart. Any concerns about the cost of London living?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes — (i'?ve (researched|budgeted))",
            "(rent (alone) is (the (biggest|largest) (line item))))",
            "(i'?ve (looked|surveyed) at (student housing))",
            "(any (department|university) (subsidized|affordable) housing)",
            "(i'?d need to (find|rely on) (a (shared|cheaper) (place|flat)))",
          ],
          hint_tr:
            "Araştırma: 'I've budgeted.' Türk: 'It's hard' kapanış, hazırlık.",
        },
        {
          speaker: "npc",
          message: "Glad to see you've thought it through.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thank you|appreciate (you asking))",
            "(any (specific|concrete) (resources|leads) (you can (point me to|share))",
            "(it'?d (mean a lot|help) (to know))",
            "(thanks for (the directness|the practical))",
          ],
          hint_tr:
            "Aktif: 'Any specific leads?' Türk: 'OK' düz, network al.",
        },
      ],
    },
  ],
};

export const uniAdmission08: BundledLesson = {
  id: "arc.uni_admission.8",
  skill_id: "arc.uni_admission",
  index: 8,
  title: "Sahne 8 — Kabul email + Hartwell teşekkür",
  description: "Kabul aldın. Hartwell'e samimi + profesyonel teşekkür email + kısa call.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.arc.uni_admission.8.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "I want to thank you personally",
      tr_translation: "Sana şahsen teşekkür etmek istiyorum",
      example: "I want to thank you personally for the chance.",
      example_tr: "Bana verilen şans için sana şahsen teşekkür etmek istiyorum.",
    },
    {
      id: "ex.arc.uni_admission.8.2",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Hartwell ile telefon. Kabul kutlaması + sonraki adımlar.",
      npc_role: "Prof. Hartwell (admit conversation)",
      setting: "Acceptance follow-up call",
      turns: [
        {
          speaker: "npc",
          message: "Congratulations. We're delighted to admit you.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thank you (so much|professor))",
            "(this (means|matters) (a lot))",
            "(i want to thank you (personally|directly))",
            "(i won'?t (let you down|disappoint))",
            "(this (is|feels like) (the next chapter))",
          ],
          hint_tr:
            "Şahsi: 'Thank you personally.' Türk: 'OK thanks' düz, samimi.",
        },
        {
          speaker: "npc",
          message: "We saw something in your interview. Maturity, mostly.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(that (means a lot|hits))",
            "(i (worked|prepared) (hard for it))",
            "(i'?m (grateful|honored) (you (saw|gave me) the chance))",
            "(i (came in|walked in) with (the question (more refined)))",
            "(i (hope|plan) to (live up to|earn) (the trust))",
          ],
          hint_tr:
            "Olgun: 'I plan to earn the trust.' Türk: 'Thanks' düz, vaad.",
        },
        {
          speaker: "npc",
          message: "What questions do you have about next steps?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(funding (offer|details|timeline))",
            "(housing (assistance|priority|guidance))",
            "(any (recommended|suggested) (reading|prep) (before september))",
            "(should i (reach out|connect) (with (any (faculty|advisors))))",
            "(when (does the cohort) (gather|meet))",
          ],
          hint_tr:
            "Pratik: 'Recommended reading?' Türk: 'When start?' düz, prep al.",
        },
        {
          speaker: "npc",
          message: "I'll send a packet. Come find me first day.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thank you (so much|again))",
            "(i'?ll (be there|find you) (day one))",
            "(this (won'?t|won'?t be forgotten))",
            "(see you in (september|the autumn))",
            "(let'?s (build (something|good things)))",
          ],
          hint_tr:
            "Söz: 'I'll find you day one.' Türk: 'OK bye' düz, taahhüt.",
        },
      ],
    },
  ],
};

// ============================================================
// ARC 15 — LONG-HAUL FLIGHT TO NY (10 sahne)
// Recurring NPCs: Marta (gate agent), Robert (seatmate)
// ============================================================

export const longHaul01: BundledLesson = {
  id: "arc.long_haul.1",
  skill_id: "arc.long_haul",
  index: 1,
  title: "Sahne 1 — Marta (gate agent) ile seat değişimi",
  description: "Gate. Marta'dan windows seat iste — kibar + esnek.",
  estimated_minutes: 4,
  exercises: [
    {
      id: "ex.arc.long_haul.1.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "Is there any chance",
      tr_translation: "Şu ihtimal var mı",
      example: "Is there any chance of a window seat?",
      example_tr: "Cam kenar koltuk ihtimali var mı?",
    },
    {
      id: "ex.arc.long_haul.1.2",
      type: "roleplay_chat",
      difficulty: 3,
      scenario_description:
        "Marta meşgul ama nazik. Kibar + spesifik istek.",
      npc_role: "Marta (gate agent)",
      setting: "Departure gate, boarding starts in 20 min",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(hi marta|good (morning|afternoon))",
            "(is there any chance (of (a window|an aisle) seat))",
            "(my (current|assigned) seat is (middle))",
            "(quick (long(-| )?shot|request))",
            "(thank you for (any help|checking))",
          ],
          hint_tr:
            "Esnek istek: 'Is there any chance of a window?' Türk: 'Give me window' direkt, hipotez.",
        },
        {
          speaker: "npc",
          message: "Let me check. Flight's full but — one moment.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks (so much|appreciate it))",
            "(no rush)",
            "(if it'?s (not possible|locked in) — (no worries))",
            "(only if (it'?s easy|on the same row))",
          ],
          hint_tr:
            "Sabır: 'No rush.' Türk: 'Hurry' baskı, kibar.",
        },
        {
          speaker: "npc",
          message: "I have one — 22A. Want it?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes — (please|that'?d be perfect))",
            "(thank you (so much))",
            "(you (made my day|saved my flight))",
            "(window — (perfect))",
            "(any (other|extra) (charge|fee))",
          ],
          hint_tr:
            "Minnet: 'You made my day.' Türk: 'OK' düz, abart.",
        },
        {
          speaker: "npc",
          message: "No charge. Updated boarding pass — here.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thank you (marta|so much))",
            "(have a (great|good) (rest of (your shift|day)))",
            "(you (are|made it) (the (best))",
            "(see you (on the (flight|other side)))",
          ],
          hint_tr:
            "Kapanış: 'Have a great rest of your shift.' Türk: 'Thanks bye' düz, insan ol.",
        },
      ],
    },
  ],
};

export const longHaul02: BundledLesson = {
  id: "arc.long_haul.2",
  skill_id: "arc.long_haul",
  index: 2,
  title: "Sahne 2 — Robert (seatmate) ile tanışma",
  description: "Window seat, yan koltuk Robert. 8 saatlik uçuş — küçük sohbet.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.arc.long_haul.2.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "Mind if I squeeze past?",
      tr_translation: "Yanından geçebilir miyim?",
      example: "Mind if I squeeze past?",
      example_tr: "Yanından geçebilir miyim?",
    },
    {
      id: "ex.arc.long_haul.2.2",
      type: "roleplay_chat",
      difficulty: 3,
      scenario_description:
        "Robert (60'lar) gazete okuyor. Yanına geçtin — kısa selam.",
      npc_role: "Robert (American seatmate, 60s)",
      setting: "Seated next to seatmate, just boarded",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(hi|hey)",
            "(mind if i (squeeze past|sneak in))",
            "(window seat — (lucky me))",
            "(long flight (ahead|coming))",
            "(sorry to (squeeze past|trouble you))",
          ],
          hint_tr:
            "Kibar geçiş: 'Mind if I squeeze past?' Türk: sessiz geç, kibar selamla.",
        },
        {
          speaker: "npc",
          message: "Of course. Robert. New York or beyond?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(nice to meet you (robert))",
            "(i'?m [a-z]+)",
            "(new york (only|first) — (then onwards|then home))",
            "(business|family|tourism)",
            "(you))",
          ],
          hint_tr:
            "Kısa + iade: 'NY first — you?' Türk: uzun açıklama, kısa + soru.",
        },
        {
          speaker: "npc",
          message: "Heading home. Been in London for a wedding.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(oh nice|love that)",
            "(whose wedding|family))",
            "(was it (a good|fun) (one|day))",
            "(london (is) (a great wedding city))",
            "(any (highlights|stories))",
          ],
          hint_tr:
            "İlgi: 'Was it a good one?' Türk: 'OK' düz, derinleş.",
        },
        {
          speaker: "npc",
          message: "My nephew's. Beautiful. Long day. What's in NY for you?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(work — (a conference|meetings))",
            "(visiting (a friend|family))",
            "(tourism (mostly|primarily))",
            "(first time|been many times))",
            "(any (must-do|recommendations))",
          ],
          hint_tr:
            "Cevap + iade: 'Conference — any must-do?' Türk: cevap düz, soru iade.",
        },
        {
          speaker: "npc",
          message: "What part are you staying in?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(midtown|brooklyn|the village))",
            "(near (times square|the conference))",
            "(staying with (a friend) in (queens))",
            "(any (good|local) (suggestions))",
            "(what'?s your (favorite|best) (part of town))",
          ],
          hint_tr:
            "Spesifik + iade: 'Midtown — what's your favorite part?' Türk: 'Hotel' düz, semt + soru.",
        },
      ],
    },
  ],
};

export const longHaul03: BundledLesson = {
  id: "arc.long_haul.3",
  skill_id: "arc.long_haul",
  index: 3,
  title: "Sahne 3 — Kabin görevlisinden yardım: 'I need water'",
  description: "İlk 2 saat. Su + tahta gerek. Sakin + kibar.",
  estimated_minutes: 4,
  exercises: [
    {
      id: "ex.arc.long_haul.3.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "Could I get some water?",
      tr_translation: "Biraz su alabilir miyim?",
      example: "Sorry to bother — could I get some water?",
      example_tr: "Rahatsız ettiğim için pardon — biraz su alabilir miyim?",
    },
    {
      id: "ex.arc.long_haul.3.2",
      type: "roleplay_chat",
      difficulty: 3,
      scenario_description:
        "FA geçti. Düğmeye bas, kibar iste.",
      npc_role: "Flight attendant",
      setting: "In-flight, 2 hours in",
      turns: [
        {
          speaker: "npc",
          message: "Yes — how can I help?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(sorry to bother (you|trouble))",
            "(could i get (some |a bottle of) water)",
            "(also — (a (blanket|pillow)) if (possible))",
            "(thank you)",
            "(no rush)",
          ],
          hint_tr:
            "Birden çok: 'Water — also a blanket.' Türk: bir tek, ihtiyaçları paketle.",
        },
        {
          speaker: "npc",
          message: "Of course. Anything else?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(actually — (a snack|some headphones))",
            "(do you have (extra (snacks|pretzels)))",
            "(when is (the next meal|dinner))",
            "(no (that'?s it|nothing else))",
            "(thanks (so much|appreciate it))",
          ],
          hint_tr:
            "Önceden plan: 'When is the next meal?' Türk: 'OK' düz, info al.",
        },
        {
          speaker: "npc",
          message: "Dinner in an hour. I'll bring the water now.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(perfect|thank you)",
            "(appreciate (it|the kindness))",
            "(have a (good|smooth) (rest of the flight|shift))",
            "(no rush)",
          ],
          hint_tr:
            "Onurlu: 'Have a smooth rest of your shift.' Türk: 'OK' düz, insan ol.",
        },
      ],
    },
  ],
};

export const longHaul04: BundledLesson = {
  id: "arc.long_haul.4",
  skill_id: "arc.long_haul",
  index: 4,
  title: "Sahne 4 — Robert ile derin sohbet: hayat",
  description: "Yemekten sonra. Robert açıldı. Derin + samimi.",
  estimated_minutes: 6,
  exercises: [
    {
      id: "ex.arc.long_haul.4.1",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "What's your story?",
      tr_translation: "Hikayen ne?",
      example: "What's your story — what brought you to where you are?",
      example_tr: "Hikayen ne — seni şu ana ne getirdi?",
    },
    {
      id: "ex.arc.long_haul.4.2",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Robert ile uçakta nadir bir sohbet açıldı.",
      npc_role: "Robert (opening up)",
      setting: "Mid-flight, after dinner",
      turns: [
        {
          speaker: "npc",
          message: "So — what's your story? Real version.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(real version — (longer than 8 hours))",
            "(grew up in (istanbul) — (left for) (london|work))",
            "(came (out of|through) (a tough year|a divorce|a layoff))",
            "(rebuilding — (slowly))",
            "(currently — (chasing|figuring out) (what'?s next))",
          ],
          hint_tr:
            "Açık: 'Rebuilding — slowly.' Türk: 'I am OK' kapanış, dürüst.",
        },
        {
          speaker: "npc",
          message: "Sounds heavy. I've been there.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yeah — (most people have))",
            "(what got you through)",
            "(your story — (what'?s the chapter you'?re in))",
            "(it (gets better|softens) (i hope|over time))",
            "(thanks for (being open|making space))",
          ],
          hint_tr:
            "Karşılıklı: 'What got you through?' Türk: 'Yes hard' düz, soru iade.",
        },
        {
          speaker: "npc",
          message: "Lost my wife five years ago. Slowly came back.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i'?m (so sorry|truly sorry))",
            "(that (must have been|sounds) (impossibly hard))",
            "(thank you for (sharing|trusting me))",
            "(how (do you|did you) (find your way back))",
            "(does (it (ever (lift|ease)) ?)",
          ],
          hint_tr:
            "Saygılı: 'Truly sorry — thank you for sharing.' Türk: 'OK' düz, derin saygı.",
        },
        {
          speaker: "npc",
          message: "Slowly. People helped. Strangers on planes, sometimes.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(this (is|might be) one of those (moments|conversations))",
            "(i'?m glad (we sat (together|next to each other)))",
            "(you (gave me) (perspective))",
            "(thank you (robert))",
            "(this (is the (gift|luxury) of (long flights)))",
          ],
          hint_tr:
            "Saygı: 'This is the gift of long flights.' Türk: 'Thanks' düz, an'ı işaretle.",
        },
      ],
    },
  ],
};

export const longHaul05: BundledLesson = {
  id: "arc.long_haul.5",
  skill_id: "arc.long_haul",
  index: 5,
  title: "Sahne 5 — Türbülans + endişe: 'are we okay?'",
  description: "Sert türbülans. Robert sakin. Sen endişeli — destek al.",
  estimated_minutes: 4,
  exercises: [
    {
      id: "ex.arc.long_haul.5.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "I'm a nervous flyer",
      tr_translation: "Uçuş kaygım var",
      example: "Heads up — I'm a nervous flyer.",
      example_tr: "Şunu bil — uçuş kaygım var.",
    },
    {
      id: "ex.arc.long_haul.5.2",
      type: "roleplay_chat",
      difficulty: 3,
      scenario_description:
        "Türbülans. Sen gerginsin. Robert deneyimli. Konuşarak rahatla.",
      npc_role: "Robert (calm)",
      setting: "Mid-flight turbulence",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(robert — (is this normal))",
            "(heads up — (i'?m a nervous flyer))",
            "(my hands (are sweaty|shaking))",
            "(distract me — (talk about (anything)))",
            "(are we (okay|safe))",
          ],
          hint_tr:
            "Dürüst: 'I'm a nervous flyer.' Türk: 'I am OK' bastırma, açık.",
        },
        {
          speaker: "npc",
          message: "Completely normal. Wings are designed to flex.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks|good to hear)",
            "(that (helps|grounds me))",
            "(have you been in (worse|rougher))",
            "(distract me — (tell me about (your wedding)))",
            "(breathe (with me|deep)))",
          ],
          hint_tr:
            "Strateji: 'Distract me — tell me about wedding.' Türk: 'OK' pasif, kontrol kaza.",
        },
        {
          speaker: "npc",
          message: "Want to hear about the worst flight I ever took?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(haha|wait no))",
            "(hmm — (depends on the (ending|outcome)))",
            "(let me (steel myself|breathe))",
            "(go ahead — (distract me))",
            "(this is (a weird|the (kindest)) distraction))",
          ],
          hint_tr:
            "Espri: 'Depends on the ending.' Türk: 'Yes' düz, hafifletme.",
        },
        {
          speaker: "npc",
          message: "Made it. Twice as bad as this. And here I am.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(that (helps|is a hopeful ending))",
            "(thanks for (talking|distracting))",
            "(your (presence|calm) is (helping))",
            "(turbulence (easing|easing up))",
            "(deep breath))",
          ],
          hint_tr:
            "Minnet: 'Your calm is helping.' Türk: 'OK' düz, takdir.",
        },
      ],
    },
  ],
};

export const longHaul06: BundledLesson = {
  id: "arc.long_haul.6",
  skill_id: "arc.long_haul",
  index: 6,
  title: "Sahne 6 — Yemek talebi: 'special meal didn't come'",
  description: "Halal special meal sipariş etmiştin. Gelmedi. FA'ya sor.",
  estimated_minutes: 4,
  exercises: [
    {
      id: "ex.arc.long_haul.6.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "I had requested a special meal",
      tr_translation: "Özel yemek talep etmiştim",
      example: "I had requested a halal meal — could you check?",
      example_tr: "Halal yemek talep etmiştim — kontrol eder misin?",
    },
    {
      id: "ex.arc.long_haul.6.2",
      type: "roleplay_chat",
      difficulty: 3,
      scenario_description:
        "Yemek geldi — normal. Sen halal istedin. Net + sakin.",
      npc_role: "Flight attendant",
      setting: "Meal service, special meal missing",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(excuse me)",
            "(i had requested a (halal|special) meal)",
            "(it'?s on (the booking|my (record|ticket)))",
            "(could you (check|verify))",
            "(thanks for (looking))",
          ],
          hint_tr:
            "Net: 'I had requested halal — on my booking.' Türk: 'I want different' eksik, talep tarih.",
        },
        {
          speaker: "npc",
          message: "Let me check the manifest. One moment.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(of course|take your time)",
            "(if it didn'?t (load|board) — (no problem))",
            "(any (vegetarian|fish) (option) (would work))",
            "(thanks for (checking))",
          ],
          hint_tr:
            "Esnek: 'Any vegetarian would work.' Türk: 'I want halal' direkt, plan B.",
        },
        {
          speaker: "npc",
          message: "Sorry — it wasn't loaded. I have a vegetarian.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(perfect — (vegetarian works))",
            "(thank you (for sorting))",
            "(could you also (flag|note) this (for the (return|return flight)))",
            "(no hard feelings)",
            "(have a (good|smooth) (rest of (the (flight|shift))))",
          ],
          hint_tr:
            "İleri: 'Could you flag for the return flight?' Türk: 'OK' düz, gelecek tut.",
        },
        {
          speaker: "npc",
          message: "I'll log a note. Apologies.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(no need|happens)",
            "(thank you (so much))",
            "(appreciate (you sorting|the fix))",
          ],
          hint_tr:
            "Esnek: 'Happens.' Türk: 'OK bye' düz, FA hafif.",
        },
      ],
    },
  ],
};

export const longHaul07: BundledLesson = {
  id: "arc.long_haul.7",
  skill_id: "arc.long_haul",
  index: 7,
  title: "Sahne 7 — Robert ile film tartışması",
  description: "Film bittiği. Robert benim de seyrediyordu. Eleştir, derinleş.",
  estimated_minutes: 4,
  exercises: [
    {
      id: "ex.arc.long_haul.7.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "What did you make of",
      tr_translation: "Buna ne dedin?",
      example: "What did you make of the ending?",
      example_tr: "Sona ne dedin?",
    },
    {
      id: "ex.arc.long_haul.7.2",
      type: "roleplay_chat",
      difficulty: 3,
      scenario_description:
        "İkiniz de Oppenheimer izlediniz. Tartış.",
      npc_role: "Robert (film discussion)",
      setting: "After watching same in-flight movie",
      turns: [
        {
          speaker: "npc",
          message: "You watched it too?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(just (finished|ended))",
            "(what did you make of (it|the ending))",
            "(loved (the (pacing|score|cinematography)))",
            "(thought (it (dragged|lost me) (at the (end|middle))))",
            "(curious for (your read|the older perspective))",
          ],
          hint_tr:
            "Soru iade: 'What did you make of the ending?' Türk: 'Yes good' düz, yargı + soru.",
        },
        {
          speaker: "npc",
          message: "Dragged in places. But the moral weight — heavy.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(agreed)",
            "(the (last act|trial scene) (felt|landed) (different))",
            "(does (it (resonate|hit) (more|differently)) (for your generation))",
            "(i wonder how (someone in (turkey|the global south)) (would (read|see) it))",
            "(any film (you'?d compare) it (to))",
          ],
          hint_tr:
            "Perspektif: 'How would someone in Turkey see it?' Türk: 'Yes long' düz, kültür.",
        },
        {
          speaker: "npc",
          message: "I lived through the cold war. Different lens.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(wow — (i (forget|miss) that perspective))",
            "(what (lands|hits) for you (most))",
            "(does it (capture|miss) (the real fear))",
            "(this is (better than (the film))",
            "(any (under(-| )?told|missed) part)",
          ],
          hint_tr:
            "Sondaj: 'Better than the film.' Türk: 'Cool' düz, deneyim onurla.",
        },
        {
          speaker: "npc",
          message: "It missed how ordinary the fear was. Daily.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(that (lands|hits))",
            "(thank you for (the (perspective|story)))",
            "(this (is (the reason|why) i (love long flights)))",
            "(noted — (the (daily|ordinary) fear))",
            "(now i (want to (rewatch|see it again))",
          ],
          hint_tr:
            "Saygı: 'This is why I love long flights.' Türk: 'OK' düz, an'ı işaretle.",
        },
      ],
    },
  ],
};

export const longHaul08: BundledLesson = {
  id: "arc.long_haul.8",
  skill_id: "arc.long_haul",
  index: 8,
  title: "Sahne 8 — İniş öncesi: 'sıvı dolma'",
  description: "İniş 30 dk. Robert tavsiye veriyor. Pratik karşılıklılık.",
  estimated_minutes: 4,
  exercises: [
    {
      id: "ex.arc.long_haul.8.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "Any last tips?",
      tr_translation: "Son tavsiyen var mı?",
      example: "Any last tips before we land?",
      example_tr: "İnmeden önce son tavsiyen var mı?",
    },
    {
      id: "ex.arc.long_haul.8.2",
      type: "roleplay_chat",
      difficulty: 3,
      scenario_description:
        "Robert NY hakkında tavsiye veriyor. Pratik öğren.",
      npc_role: "Robert (giving tips)",
      setting: "30 min before landing",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(any last tips (for ny))",
            "(what (should i (avoid|skip)))",
            "(local (must(-| )?do|things))",
            "(walk me through (your favorite (block|street)))",
            "(coffee|food) (suggestions))",
          ],
          hint_tr:
            "Aktif: 'Any last tips for NY?' Türk: 'OK' pasif, info al.",
        },
        {
          speaker: "npc",
          message: "Avoid Times Square food. Walk the High Line. Eat at Russ & Daughters.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(noting (all of it|down))",
            "(russ and daughters — (i'?ve (heard|read of) it))",
            "(high line — (on my list))",
            "(times square (yes — (avoiding|skipping) eat))",
            "(anything (under(-| )?the(-| )?radar))",
          ],
          hint_tr:
            "Aktif: 'Anything under-the-radar?' Türk: 'OK' düz, gizli kaliteyi sor.",
        },
        {
          speaker: "npc",
          message: "Walk the Brooklyn Bridge at dusk. Take the F to Coney Island.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(noted)",
            "(brooklyn bridge — (at (dusk|sunset)))",
            "(thanks (so much))",
            "(any (final|local) (place|spot) — (off the (map|grid)))",
            "(robert — (you'?re my (guide|tour)))",
          ],
          hint_tr:
            "Minnet: 'You're my guide.' Türk: 'OK thanks' düz, samimi.",
        },
        {
          speaker: "npc",
          message: "That's my city. Treat her right.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(deal|will do)",
            "(i (will|promise))",
            "(thank you for (sharing|the tour))",
            "(text (me|us) (your story|how it (went)))",
          ],
          hint_tr:
            "Söz: 'Treat her right — will do.' Türk: 'OK' düz, taahhüt.",
        },
      ],
    },
  ],
};

export const longHaul09: BundledLesson = {
  id: "arc.long_haul.9",
  skill_id: "arc.long_haul",
  index: 9,
  title: "Sahne 9 — JFK kapısında veda: 'keep in touch'",
  description: "Gate'te veda. Robert numaranı istiyor. Samimi.",
  estimated_minutes: 4,
  exercises: [
    {
      id: "ex.arc.long_haul.9.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "It was a pleasure",
      tr_translation: "Memnun oldum",
      example: "Robert — it was a pleasure.",
      example_tr: "Robert — memnun oldum.",
    },
    {
      id: "ex.arc.long_haul.9.2",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "JFK arrival lobisi. Veda. Robert teklif etti.",
      npc_role: "Robert (final goodbye)",
      setting: "JFK arrival, after landing",
      turns: [
        {
          speaker: "npc",
          message: "Look — give me your email. Send me your story.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(absolutely|i'?d love that)",
            "(here'?s my (email|card))",
            "(let me (text|drop) it (to you))",
            "(i'?ll (write|send) you (after (the trip|i settle in)))",
            "(you (won'?t (get rid of|escape) me))",
          ],
          hint_tr:
            "Söz: 'You won't escape me.' Türk: 'OK' düz, oyunlu söz.",
        },
        {
          speaker: "npc",
          message: "Come visit. I'm in Westchester.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(deal)",
            "(westchester (sounds beautiful|i'?ll be there))",
            "(send me (a date|the (best) season))",
            "(once (i'?m (settled|done) with the (conference)) — (i'?ll (drive|train) up))",
            "(this is (a real (invitation|promise)))",
          ],
          hint_tr:
            "Söz: 'This is a real promise.' Türk: 'OK' düz, niyet vurgu.",
        },
        {
          speaker: "npc",
          message: "It was a pleasure. Truly.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(robert — (truly|pleasure was mine))",
            "(this (flight (gave me|delivered)) (more than (i expected)))",
            "(thank you for (the (conversation|company)))",
            "(safe (drive|train) home)",
            "(speak (soon|tomorrow))",
          ],
          hint_tr:
            "Onurla: 'This flight delivered more than I expected.' Türk: 'Bye' düz, somut.",
        },
        {
          speaker: "npc",
          message: "Until next time.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(until next time)",
            "(see you (in westchester|soon))",
            "(safe travels)",
            "(take care (robert))",
          ],
          hint_tr:
            "Kapanış: 'Until next time.' Türk: 'Bye' düz, tekrar.",
        },
      ],
    },
  ],
};

export const longHaul10: BundledLesson = {
  id: "arc.long_haul.10",
  skill_id: "arc.long_haul",
  index: 10,
  title: "Sahne 10 — Customs sonrası taksi: 'long day?'",
  description: "JFK taksi. Şoför yorgun + sohbete açık. Küçük insanlık.",
  estimated_minutes: 4,
  exercises: [
    {
      id: "ex.arc.long_haul.10.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "Long day?",
      tr_translation: "Uzun gün mü?",
      example: "Hey — long day?",
      example_tr: "Selam — uzun bir gün mü?",
    },
    {
      id: "ex.arc.long_haul.10.2",
      type: "roleplay_chat",
      difficulty: 3,
      scenario_description:
        "Taksi şoförü. Yorgun. Sen küçük sohbet aç — vakitli.",
      npc_role: "Yellow cab driver",
      setting: "Taxi from JFK to Manhattan",
      turns: [
        {
          speaker: "npc",
          message: "Where to?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(midtown|the marriott in midtown)",
            "(address is)",
            "(here'?s the (booking|address))",
            "(any way (we avoid|to skip) traffic)",
            "(how'?s the (drive|road) tonight)",
          ],
          hint_tr:
            "Net + iade: 'Midtown — how's the drive?' Türk: 'There' eksik, insan ol.",
        },
        {
          speaker: "npc",
          message: "Traffic's a mess. Hour to midtown.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(oh well|all good)",
            "(no rush)",
            "(long day on your end))",
            "(how long (have you been) (driving|on shift))",
            "(i (just got off|flew in from london))",
          ],
          hint_tr:
            "İnsan: 'Long day on your end?' Türk: pasif izle, sohbete aç.",
        },
        {
          speaker: "npc",
          message: "12 hours. London — that's a haul.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yeah — (8 (hours|hour) (flight)))",
            "(longer than (i remembered|expected))",
            "(but (good|smooth) flight)",
            "(any (good|local) (food) (still open at this hour))",
            "(what city would you (rather drive in))",
          ],
          hint_tr:
            "Aktif: 'Local food still open?' Türk: 'Yes long' düz, info al.",
        },
        {
          speaker: "npc",
          message: "Hala — 53rd and 6th. 24 hours.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(noted|adding to (my list))",
            "(thanks)",
            "(where (are you|do you live) — (queens|brooklyn))",
            "(what (do you (rather|prefer)) about (this city))",
            "(safe (drive|shift))",
          ],
          hint_tr:
            "Devam: 'What do you prefer about this city?' Türk: 'OK' düz, sohbet uzat.",
        },
        {
          speaker: "npc",
          message: "Queens. 20 years. New York's noise — I love it.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(love that)",
            "(20 years — (you'?ve (seen) (everything)))",
            "(noise — (a sign of life))",
            "(thanks for (the welcome|the drive))",
            "(safe rest after)",
          ],
          hint_tr:
            "Saygı: 'Noise — a sign of life.' Türk: 'OK' düz, an'ı işaretle.",
        },
      ],
    },
  ],
};

// ============================================================
// EXPORT — 15 tamamlanan arc, 132 sahne.
// ============================================================

export const storyArcV2Lessons: BundledLesson[] = [
  // ARC 1 — Erasmus Amsterdam (10 sahne)
  erasmusAmsterdam01,
  erasmusAmsterdam02,
  erasmusAmsterdam03,
  erasmusAmsterdam04,
  erasmusAmsterdam05,
  erasmusAmsterdam06,
  erasmusAmsterdam07,
  erasmusAmsterdam08,
  erasmusAmsterdam09,
  erasmusAmsterdam10,
  // ARC 2 — Junior Dev London Startup (10 sahne)
  juniorDevLondon01,
  juniorDevLondon02,
  juniorDevLondon03,
  juniorDevLondon04,
  juniorDevLondon05,
  juniorDevLondon06,
  juniorDevLondon07,
  juniorDevLondon08,
  juniorDevLondon09,
  juniorDevLondon10,
  // ARC 3 — NY Tech Conference (8 sahne)
  nyTechConf01,
  nyTechConf02,
  nyTechConf03,
  nyTechConf04,
  nyTechConf05,
  nyTechConf06,
  nyTechConf07,
  nyTechConf08,
  // ARC 4 — Customer Support Agent (8 sahne)
  customerSupport01,
  customerSupport02,
  customerSupport03,
  customerSupport04,
  customerSupport05,
  customerSupport06,
  customerSupport07,
  customerSupport08,
  // ARC 5 — US Immigration Interview (8 sahne)
  usImmigration01,
  usImmigration02,
  usImmigration03,
  usImmigration04,
  usImmigration05,
  usImmigration06,
  usImmigration07,
  usImmigration08,
  // ARC 6 — Doctor Visit (8 sahne)
  doctorVisit01,
  doctorVisit02,
  doctorVisit03,
  doctorVisit04,
  doctorVisit05,
  doctorVisit06,
  doctorVisit07,
  doctorVisit08,
  // ARC 7 — Apartment Hunting London (8 sahne)
  apartmentHunt01,
  apartmentHunt02,
  apartmentHunt03,
  apartmentHunt04,
  apartmentHunt05,
  apartmentHunt06,
  apartmentHunt07,
  apartmentHunt08,
  // ARC 8 — Online Dating (10 sahne)
  onlineDating01,
  onlineDating02,
  onlineDating03,
  onlineDating04,
  onlineDating05,
  onlineDating06,
  onlineDating07,
  onlineDating08,
  onlineDating09,
  onlineDating10,
  // ARC 9 — Work Conflict Resolution (8 sahne)
  workConflict01,
  workConflict02,
  workConflict03,
  workConflict04,
  workConflict05,
  workConflict06,
  workConflict07,
  workConflict08,
  // ARC 10 — Salary Negotiation (8 sahne)
  salaryNeg01,
  salaryNeg02,
  salaryNeg03,
  salaryNeg04,
  salaryNeg05,
  salaryNeg06,
  salaryNeg07,
  salaryNeg08,
  // ARC 11 — Freelance Client Management (10 sahne)
  freelance01,
  freelance02,
  freelance03,
  freelance04,
  freelance05,
  freelance06,
  freelance07,
  freelance08,
  freelance09,
  freelance10,
  // ARC 12 — Solo Travel Japan (10 sahne)
  soloJapan01,
  soloJapan02,
  soloJapan03,
  soloJapan04,
  soloJapan05,
  soloJapan06,
  soloJapan07,
  soloJapan08,
  soloJapan09,
  soloJapan10,
  // ARC 13 — Tech Support Call (8 sahne)
  techSupport01,
  techSupport02,
  techSupport03,
  techSupport04,
  techSupport05,
  techSupport06,
  techSupport07,
  techSupport08,
  // ARC 14 — University Admission Interview (8 sahne)
  uniAdmission01,
  uniAdmission02,
  uniAdmission03,
  uniAdmission04,
  uniAdmission05,
  uniAdmission06,
  uniAdmission07,
  uniAdmission08,
  // ARC 15 — Long-Haul Flight to NY (10 sahne)
  longHaul01,
  longHaul02,
  longHaul03,
  longHaul04,
  longHaul05,
  longHaul06,
  longHaul07,
  longHaul08,
  longHaul09,
  longHaul10,
];
