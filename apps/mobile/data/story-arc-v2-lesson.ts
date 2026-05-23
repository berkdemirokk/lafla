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
// EXPORT — 4 tamamlanan arc, 36 sahne.
//
// Not (2026-05-23): Bu modül agent yarıda kesildiğinde 15 arc'ın 4'ü
// yazılmıştı. Geri kalan 11 arc bir sonraki release'de eklenecek.
// 36 sahne yine de mevcut katalogu %5+ büyütüyor — register edip
// kayba uğratmıyoruz.
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
];
