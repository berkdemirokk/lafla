// Specialized C1 lessons — senior tech professionals, founders, engineers.
// 10 lessons. Silicon Valley / startup register. Technical precision.
//
// Skill: professional.c1.spec-<topic>
// Each lesson: 1-2 vocab_tile, 1-2 translate, 1 fill_blank, 1 spot_mistake,
//              1 roleplay_chat (10-18 turns), optional 1 pronounce_phrase.

import type { BundledLesson } from "./cafe-lesson";

// ============================================================
// 1 — Technical system design interview
// ============================================================
export const specC1Lesson_1: BundledLesson = {
  id: "professional.c1.spec-sysdesign.1",
  skill_id: "professional.c1.spec-sysdesign",
  index: 1,
  title: "System Design Interview",
  description:
    "Senior+ system design interview. Clarify requirements, propose architecture, defend trade-offs without dying on a hill.",
  estimated_minutes: 12,
  exercises: [
    {
      id: "ex.sc1.1.1",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "table stakes",
      tr_translation: "Olmazsa olmaz, baseline gereksinim",
      example:
        "Idempotency on the write path is table stakes here — without it, retries blow up the ledger.",
      example_tr:
        "Yazma yolunda idempotency burada olmazsa olmaz — onsuz retry'lar ledger'i patlatir.",
    },
    {
      id: "ex.sc1.1.2",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "punt on",
      tr_translation: "Su an icin erteleme, sonraya birakma",
      example:
        "Let me punt on multi-region for now and come back to it if we have time.",
      example_tr:
        "Multi-region'i simdilik erteleyeyim, vakit kalirsa donerim.",
    },
    {
      id: "ex.sc1.1.3",
      type: "translate",
      difficulty: 5,
      direction: "tr_to_en",
      source:
        "Once gereksinimleri netlestirmek istiyorum — okuma-yazma orani ne, peak QPS ne kadar?",
      target:
        "Before I dive in, I'd like to clarify the requirements — what's the read/write ratio, and what kind of peak QPS are we designing for?",
      accepted_variants: [
        "Let me clarify a few things first — what's the read-to-write ratio, and what's the peak QPS?",
        "First, a couple of clarifying questions — read/write split, and peak QPS we should handle?",
        "Before I jump into the design, can I get a sense of the read/write mix and the peak QPS target?",
        "Quick clarifying question — what's the expected read/write ratio and the peak QPS?",
      ],
      tr_hint:
        "Interview ilk hamle = clarify. 'Read/write ratio' ve 'peak QPS' interview jargonu.",
    },
    {
      id: "ex.sc1.1.4",
      type: "translate",
      difficulty: 5,
      direction: "tr_to_en",
      source:
        "Bu trade-off'ta latency icin tutarliligi feda etmeye hazirim — eventually consistent gidiyorum.",
      target:
        "I'm willing to trade consistency for latency here — I'd go eventually consistent.",
      accepted_variants: [
        "I'd trade strong consistency for lower latency here — eventual consistency works.",
        "Given the trade-off, I'd lean eventually consistent to keep latency down.",
        "I'd give up strict consistency for latency in this case and go with an eventually consistent model.",
        "Happy to relax consistency in favor of latency — eventually consistent fits the use case.",
      ],
      tr_hint:
        "Trade-off ifadesi: 'trade X for Y'. 'Eventually consistent' = distribütif sistemlerde standart terim.",
    },
    {
      id: "ex.sc1.1.5",
      type: "fill_blank",
      difficulty: 4,
      sentence_template:
        "I'd ___ on multi-region for now and revisit it once we've nailed the single-region story.",
      answer: "punt",
      distractors: ["pass", "step", "fold", "bail"],
      tr_hint:
        "'Punt on X' = X'i simdilik bir kenara birak. Interview'da scope kontrolu icin standart.",
    },
    {
      id: "ex.sc1.1.6",
      type: "spot_mistake",
      difficulty: 5,
      incorrect_sentence:
        "I will use Kafka because Kafka is best for everything.",
      correct_sentence:
        "I'd reach for Kafka here — durable log, replay semantics, fits our event-driven path. The trade-off is operational overhead, which I think is worth it at this scale.",
      tr_explanation:
        "'X is best for everything' = junior sinyali. Senior cevap = secim + sebep + trade-off + scale gerekcesi. 'Reach for' = senior kelime kullanimi.",
    },
    {
      id: "ex.sc1.1.7",
      type: "pronounce_phrase",
      difficulty: 4,
      phrase:
        "Let me clarify the requirements before I jump into the architecture.",
      tr_hint:
        "Interview acilis cumlesi. 'Clarify' /ˈklær.ə.faɪ/, 'architecture' /ˈɑːr.kɪ.tek.tʃər/.",
    },
    {
      id: "ex.sc1.1.8",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "FAANG-tipi sirkette senior backend interview. Interviewer 'design a URL shortener at billion-request scale' dedi.",
      npc_role: "Senior Engineer Interviewer",
      setting: "Virtual whiteboard, 60-minute system design loop",
      turns: [
        {
          speaker: "npc",
          message:
            "Alright — I'd like you to design a URL shortener. Assume billion-request-per-day scale. Take it from the top.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(let me|i'?d like to|first,?) clarify",
            "(before i (dive|jump) in|couple of (clarifying )?questions)",
            "(read.?to.?write|read.?write|qps|latency|sla)",
            "(scope|requirements|constraints)",
          ],
          hint_tr:
            "Direkt design'a dalma. Clarify ile basla: read/write ratio, QPS, latency budget.",
        },
        {
          speaker: "npc",
          message:
            "Good instinct. Read-heavy, roughly 100:1. P99 read latency under 50ms. Writes are bursty around marketing campaigns.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(api|interface|endpoints?)",
            "(post|get|shorten|redirect)",
            "(start with|sketch|outline) (the )?api",
            "(short.?code|hash|base ?62|key generation)",
            "(custom alias|vanity url)",
          ],
          hint_tr:
            "API surface'i ciz: POST /shorten + GET /:code. Short code uretimi (base62, key gen service) konus.",
        },
        {
          speaker: "npc",
          message:
            "Sketch the API and the short-code generation. How are you avoiding collisions?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(base ?62|counter|snowflake|range|zookeeper|key generation service)",
            "(pre.?generate|batch|allocate)",
            "(collision|conflict|uniqueness)",
            "(hash|md5|sha|truncate)",
          ],
          hint_tr:
            "Iki yaklasim: (1) counter + base62 encode, (2) hash + retry-on-collision. Trade-off'lari ac.",
        },
        {
          speaker: "npc",
          message:
            "Counter-based is clean. How do you scale the counter across writers?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(range|batch|allocate)",
            "(key generation service|kgs)",
            "(pre.?allocate|chunks?|blocks?)",
            "(zookeeper|coordination|consensus|single source)",
          ],
          hint_tr:
            "Key Generation Service: her writer batch alir (mesela 10k ID), local'de tuketir. Coordination zookeeper veya benzeri.",
        },
        {
          speaker: "npc",
          message:
            "Makes sense. Storage layer — relational, KV, document? Defend the choice.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(kv|key.?value|dynamo|cassandra|redis)",
            "(read.?heavy|point lookup|simple schema)",
            "(no joins?|denormali[sz]ed)",
            "(trade.?off|because|since|given)",
          ],
          hint_tr:
            "KV store (Dynamo/Cassandra) — point lookup, read-heavy, no joins. Sebep + trade-off ac.",
        },
        {
          speaker: "npc",
          message:
            "Sure. What does the read path look like at P99 under 50ms?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(cache|redis|memcached|cdn|edge)",
            "(hot keys?|long tail|popularity)",
            "(ttl|invalidation|warm)",
            "(p99|latency budget)",
          ],
          hint_tr:
            "Cache layer (Redis) + edge cache (CDN) hot URL'ler icin. TTL, hot key, long tail ekonomisi konus.",
        },
        {
          speaker: "npc",
          message:
            "One more — analytics. We want per-link click counts. How do you not bottleneck the read path?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(async|fire and forget|kafka|queue|stream)",
            "(decouple|out of band|background)",
            "(aggregate|batch|sample)",
            "(eventually consistent|approximate)",
          ],
          hint_tr:
            "Click event'leri async log (Kafka) → background aggregation. Read path'i bloke etme.",
        },
        {
          speaker: "npc",
          message:
            "Last question — if you had 10 more minutes, what would you push on?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(abuse|rate.?limit|malicious)",
            "(multi.?region|disaster recovery|dr)",
            "(security|auth|spam)",
            "(custom alias|vanity)",
            "(analytics dashboard|admin)",
          ],
          hint_tr:
            "Geri donus alanlari: abuse/rate-limiting, multi-region DR, custom alias, security.",
        },
        {
          speaker: "npc",
          message:
            "Great. You scoped well, defended trade-offs, and knew where you punted. Solid loop.",
        },
      ],
    },
    {
      id: "ex.sc1.1.9",
      type: "pronounce_phrase",
      difficulty: 5,
      phrase: "For context, the methodology I'd reach for is sharding by tenant.",
      ipa: "fər ˈkɒntɛkst ðə ˌmɛθəˈdɒlədʒi aɪd riːtʃ fər ɪz ˈʃɑːrdɪŋ baɪ ˈtɛnənt",
      tr_hint:
        "Sistem tasarım yaklaşımı. 'Reach for' = başvurmak (idiyom). 'Sharding by tenant' birleşik. Düşünceli, kararlı.",
    },
    {
      id: "ex.sc1.1.10",
      type: "speech_shadowing",
      difficulty: 5,
      native_text:
        "I'd push back on the framing that this is a database problem — for context, the bottleneck is the read pattern.",
      voice_hint: "male_us",
      tr_hint:
        "Sistem dizaynında reframe. 'Push back on the framing' = çerçeveye itiraz. 'Bottleneck is the read pattern' = darboğaz okuma örüntüsünde.",
    },
    {
      id: "ex.sc1.1.11",
      type: "listen_and_transcribe",
      difficulty: 5,
      audio_text:
        "I'd be doing you a disservice if I claimed we could ship that scope in a quarter — the honest estimate is six months.",
      transcription_target:
        "I'd be doing you a disservice if I claimed we could ship that scope in a quarter — the honest estimate is six months.",
      tr_hint:
        "Mühendislik dürüstlük. 'Ship that scope' = bu kapsamı yetiştir. 'Honest estimate' = dürüst tahmin.",
    },
    {
      id: "ex.sc1.1.12",
      type: "vocab_tile",
      difficulty: 5,
      word_or_phrase: "I'd push back on the framing",
      tr_translation: "Çerçeveye itiraz ederim",
      example:
        "I'd push back on the framing that this is a 'simple migration' — for context, we're changing the data model and the API surface in one move.",
      example_tr:
        "Bunun 'basit bir geçiş' olarak çerçevelenmesine itiraz ederim — veri modelini ve API yüzeyini aynı anda değiştiriyoruz.",
    },
    {
      id: "ex.sc1.1.13",
      type: "spot_mistake",
      difficulty: 5,
      incorrect_sentence:
        "This architecture is bad and the person who designed is not good engineer, we should rewrite everything.",
      correct_sentence:
        "I'd push back on the current architecture for two reasons — for context, neither is a criticism of the original engineer; the load profile has changed since then.",
      tr_explanation:
        "'Person who designed is not good engineer' = peer review'da kariyer bitirir, kişisel. Senior mühendis dili: 'push back on the architecture' (fikre değil sisteme), 'not a criticism of the original engineer' (peer korunması), 'load profile has changed' (bağlam değişimi gerekçesi). Mühendislikte sistemi eleştir, insanı değil.",
    },
  ],
};

// ============================================================
// 2 — Architectural review push-back
// ============================================================
export const specC1Lesson_2: BundledLesson = {
  id: "professional.c1.spec-archreview.1",
  skill_id: "professional.c1.spec-archreview",
  index: 2,
  title: "Pushing Back in Arch Review",
  description:
    "Senior architect's proposal has a hole. Push back hard but without burning the room. Use evidence, not ego.",
  estimated_minutes: 11,
  exercises: [
    {
      id: "ex.sc1.2.1",
      type: "vocab_tile",
      difficulty: 5,
      word_or_phrase: "I'd hate to over-rotate",
      tr_translation:
        "Bir konuya gereginden fazla agirlik vermek istemiyorum",
      example:
        "I'd hate to over-rotate on yesterday's incident — let's see if the pattern actually repeats.",
      example_tr:
        "Dunku incident'a fazla agirlik vermek istemiyorum — pattern gercekten tekrarliyor mu bakalim.",
    },
    {
      id: "ex.sc1.2.2",
      type: "vocab_tile",
      difficulty: 5,
      word_or_phrase: "the load-bearing assumption",
      tr_translation: "Tum mimariyi tutan kritik varsayim",
      example:
        "The load-bearing assumption here is that writes are uniformly distributed — I don't think that holds.",
      example_tr:
        "Burada her seyi tutan varsayim yazmalarin homojen dagildigi — bence bu gecmez.",
    },
    {
      id: "ex.sc1.2.3",
      type: "translate",
      difficulty: 5,
      direction: "tr_to_en",
      source:
        "Bu yaklasimda bir kor nokta gorebiliyorum — fan-out write'lari hot partition yaratabilir.",
      target:
        "I think I'm seeing a blind spot in this approach — the fan-out writes could create a hot partition.",
      accepted_variants: [
        "There's a blind spot here I want to flag — fan-out writes could hot-partition us.",
        "I'd push back on one piece — the fan-out write pattern looks like it'd cause a hot partition.",
        "One concern I want to raise — the fan-out writes feel like they'd hot-partition the cluster.",
        "I see a gap here — fan-out writes are going to land on a single partition.",
      ],
      tr_hint:
        "'Blind spot' + spesifik teknik endise. Saldiri degil — gozlem cercevesi.",
    },
    {
      id: "ex.sc1.2.4",
      type: "fill_blank",
      difficulty: 5,
      sentence_template:
        "I'd ___ back on the caching layer — I don't think the invalidation story holds at scale.",
      answer: "push",
      distractors: ["fall", "pull", "step", "lean"],
      tr_hint:
        "'Push back on' = profesyonel karsi cikis kalibi. Konu + spesifik endise.",
    },
    {
      id: "ex.sc1.2.5",
      type: "spot_mistake",
      difficulty: 5,
      incorrect_sentence: "This design is wrong. You didn't think about scale.",
      correct_sentence:
        "I'd push back on one piece — at the scale we're targeting, I think the cache invalidation story falls over. Want to walk you through what I'm worried about?",
      tr_explanation:
        "'This is wrong' + 'you didn't think' = saldiri, room kapanir. Senior cevap: 'one piece' (scope kucult) + spesifik teknik endise + 'walk you through' (davet).",
    },
    {
      id: "ex.sc1.2.6",
      type: "pronounce_phrase",
      difficulty: 5,
      phrase:
        "I'd push back on the consistency model — eventual won't cut it for the billing path.",
      tr_hint:
        "'Push back' = pat-aksanli. 'Consistency' /kənˈsɪs.tən.si/. 'Won't cut it' tek soluk soylenir.",
    },
    {
      id: "ex.sc1.2.7",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Principal architect bir design doc paylasti. Sen senior engineer'sin ve fan-out problemini gordun. Arch review'da kibarca ama net karsi cikiyorsun.",
      npc_role: "Principal Architect",
      setting: "Architecture review, 8 engineers on the call",
      turns: [
        {
          speaker: "npc",
          message:
            "Alright, so the proposal is: write to the user's timeline on every follower fan-out, async. Anyone want to push on this before we move to phase two?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i('d| would) push back|i want to push|one concern|i see a (blind spot|gap))",
            "(fan.?out|hot partition|tail|celebrity|whale)",
            "(can i walk you through|mind if i share|let me explain)",
          ],
          hint_tr:
            "Kapida net duruyorsun: 'I'd push back on one piece' + spesifik konu (fan-out tail problem).",
        },
        {
          speaker: "npc",
          message:
            "Sure, push on it. What's the specific worry?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(celebrity|whale|long tail|skew)",
            "(million followers?|high.?fanout)",
            "(hot partition|hotspot|backpressure)",
            "(p99|latency)",
          ],
          hint_tr:
            "Sebep ac: celebrity / whale users (milyonlarca follower) → tek partition'a milyon write → hotspot.",
        },
        {
          speaker: "npc",
          message:
            "Fair, but we've got rate limiting on the producer side. Doesn't that absorb it?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(rate limit|throttle).{0,30}(shed|drop|delay)",
            "(degrades?|latency|backlog)",
            "(doesn't solve|kicks the can|moves the problem)",
            "(symptom|root cause)",
          ],
          hint_tr:
            "Rate limit semptomu gizler, kok problemi cozmez. Backlog buyur, tail latency patlar.",
        },
        {
          speaker: "npc",
          message:
            "Okay, what would you do differently? Don't just poke holes.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(hybrid|push.?pull|pull.?on.?read)",
            "(celebrity|threshold|cutoff|switch)",
            "(materiali[sz]e on read|fanout.on.read)",
            "(small accounts? .{0,20}push|large accounts? .{0,20}pull)",
          ],
          hint_tr:
            "Hybrid model: kucuk hesaplar fan-out-on-write, celebrity hesaplar fan-out-on-read. Threshold ile switch.",
        },
        {
          speaker: "npc",
          message:
            "Hybrid adds complexity. Are we sure the celebrity problem is real for our user base?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(data|numbers|metrics|distribution)",
            "(top 0\\.\\d+%|top 1%|power law|long tail)",
            "(account size|follower count|p99 .{0,15}fanout)",
            "(quick check|pull the data|run the numbers)",
          ],
          hint_tr:
            "Data ile destekle: 'top 0.1% accounts X% of fan-out volume'. Hipotezi data'ya bagla.",
        },
        {
          speaker: "npc",
          message:
            "If the data backs you up, I'm open to it. What's the smallest experiment that would prove it out?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(replay|shadow|dark traffic|offline simulation)",
            "(staging|canary)",
            "(one.?week|short|bounded)",
            "(measure|baseline)",
          ],
          hint_tr:
            "Smallest experiment: production traffic replay against shadow stack, bir hafta, fan-out p99 olc.",
        },
        {
          speaker: "npc",
          message:
            "Good — write up the proposal, I'll review it Friday. Appreciate you pushing on this rather than nodding along.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks|appreciate|will do|ill write it up|on it)",
            "(send|share|circulate).{0,20}(friday|tomorrow|eod)",
            "(happy to|glad|sounds good)",
          ],
          hint_tr:
            "Profesyonel kapanis: 'Will do, I'll have it in your inbox by Thursday EOD.'",
        },
      ],
    },
    {
      id: "ex.sc1.2.8",
      type: "pronounce_phrase",
      difficulty: 5,
      phrase: "With respect, I'd push back on the synchronous approach.",
      ipa: "wɪð rɪˈspɛkt aɪd pʊʃ bæk ɒn ðə ˈsɪŋkrənəs əˈproʊtʃ",
      tr_hint:
        "Tasarım itirazı. 'Synchronous' = 'SİN-krı-nıs'. Saygılı + kararlı + spesifik.",
    },
    {
      id: "ex.sc1.2.9",
      type: "speech_shadowing",
      difficulty: 5,
      native_text:
        "For context, the methodology we used last time bit us — I'd want to revisit the dependency graph before we commit.",
      voice_hint: "female_uk",
      tr_hint:
        "Architecture review reframe. 'Bit us' = bizi vurdu (idiyom). 'Dependency graph' = bağımlılık grafiği.",
    },
    {
      id: "ex.sc1.2.10",
      type: "listen_and_transcribe",
      difficulty: 5,
      audio_text:
        "I'd be doing the team a disservice if I rubber-stamped this without flagging the operational cost.",
      transcription_target:
        "I'd be doing the team a disservice if I rubber-stamped this without flagging the operational cost.",
      tr_hint:
        "Senior mühendis itirazı. 'Rubber-stamped' = göstermelik onayla (idiyom). 'Operational cost' = operasyonel maliyet.",
    },
    {
      id: "ex.sc1.2.11",
      type: "vocab_tile",
      difficulty: 5,
      word_or_phrase: "for context",
      tr_translation: "Bağlam vermek gerekirse",
      example:
        "For context, we tried a similar approach in 2023 and the operational toil ate the team alive — I'd want to know what's different this time.",
      example_tr:
        "Bağlam: 2023'te benzer bir yaklaşım denedik, operasyonel yük ekibi bitirdi — bu sefer ne farklı, bilmek isterim.",
    },
    {
      id: "ex.sc1.2.12",
      type: "spot_mistake",
      difficulty: 5,
      incorrect_sentence:
        "This RFC is bad, you don't understand distributed systems, please redesign before I approve.",
      correct_sentence:
        "I'd push back on the consistency model — for context, what you're proposing is causal, but the SLA requires linearisability for these endpoints.",
      tr_explanation:
        "'You don't understand distributed systems' = peer review'da kariyer bitirir. Mühendislik review dili: somut konuyu adlandır ('consistency model'), bağlam ver ('SLA requires linearisability'), spesifik teknik karşılaştırma. Yetersizlik etiketi değil, teknik denklik.",
    },
  ],
};

// ============================================================
// 3 — Code review
// ============================================================
export const specC1Lesson_3: BundledLesson = {
  id: "professional.c1.spec-codereview.1",
  skill_id: "professional.c1.spec-codereview",
  index: 3,
  title: "Code Review — Giving + Taking",
  description:
    "Code review English: comment severity (nit/suggestion/blocking), receive feedback without going defensive.",
  estimated_minutes: 10,
  exercises: [
    {
      id: "ex.sc1.3.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "nit",
      tr_translation: "Kucuk, opsiyonel oneri (block etmez)",
      example: "Nit: this could be a one-liner with `Array.from`.",
      example_tr:
        "Kucuk bir oneri: bunu `Array.from` ile tek satira indirebilirsin.",
    },
    {
      id: "ex.sc1.3.2",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "blocking",
      tr_translation: "Cozulmeden merge edilemez",
      example:
        "Blocking — we shouldn't ship this without a fallback for the auth timeout.",
      example_tr:
        "Blocking — auth timeout icin fallback olmadan bunu ship edemeyiz.",
    },
    {
      id: "ex.sc1.3.3",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source:
        "Bu valid bir endise, ama scope disi — ayri PR'da ele alalim mi?",
      target:
        "That's a fair concern, but I'd argue it's out of scope here — could we tackle it in a follow-up PR?",
      accepted_variants: [
        "Valid point, though I think it's out of scope for this PR — happy to spin up a follow-up.",
        "Good catch, but feels out of scope — want me to open a follow-up issue?",
        "Fair, but out of scope for this change — let's track it as a follow-up.",
        "Agreed it's worth fixing, but I'd punt it to a separate PR.",
      ],
      tr_hint:
        "Scope yonetimi: valid endiseyi kabul + 'follow-up PR' kalibi. 'Out of scope' anahtarsoz.",
    },
    {
      id: "ex.sc1.3.4",
      type: "fill_blank",
      difficulty: 3,
      sentence_template:
        "___: this could be simpler, but it's fine as-is.",
      answer: "Nit",
      distractors: ["Blocking", "Question", "Major", "Critical"],
      tr_hint:
        "'Nit:' = severity prefix. Reviewer block etmiyor, opsiyonel polish.",
    },
    {
      id: "ex.sc1.3.5",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "Why did you write it like this?? This is bad code.",
      correct_sentence:
        "Question: could you walk me through the choice here? I'd have reached for a Map — curious what I'm missing.",
      tr_explanation:
        "'Why?? Bad code' = saldiri, defensive cevap getirir. Senior reviewer: 'Question:' prefix + 'walk me through' + 'curious what I'm missing' (humility).",
    },
    {
      id: "ex.sc1.3.6",
      type: "translate",
      difficulty: 5,
      direction: "tr_to_en",
      source:
        "Hakli yorum — duzelttim. Edge case'i kacirmisim, gozun keskinmis.",
      target:
        "Fair point — fixed. I missed the edge case, good catch.",
      accepted_variants: [
        "Good call — pushed a fix. Totally missed that edge case.",
        "You're right — addressed it. Nice catch on the edge case.",
        "Valid — updated. Edge case was a blind spot, thanks for flagging.",
        "Yep, fair — fixed in the latest push. Appreciate the catch.",
      ],
      tr_hint:
        "Feedback alma: ego biraz on, fix yap, 'good catch' ile reviewer'a kredi ver.",
    },
    {
      id: "ex.sc1.3.7",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Junior engineer'in PR'ina yorum yapiyorsun, sonra senior bir reviewer senin PR'inda push-back veriyor. Iki taraf da.",
      npc_role: "Mixed: junior PR author + senior reviewer",
      setting: "GitHub PR thread",
      turns: [
        {
          speaker: "npc",
          message:
            "(Junior PR author) Pushed the migration logic — let me know what you think!",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(nit|suggestion|question|blocking)",
            "(consider|could|might want|what if)",
            "(reach for|switch to|simpler|cleaner)",
            "(walk me through|curious|wondering)",
          ],
          hint_tr:
            "Severity prefix kullan: 'Nit:' / 'Suggestion:' / 'Question:'. Direkt 'bad' deme.",
        },
        {
          speaker: "npc",
          message:
            "(Junior) Hmm, I chose that because I thought it'd be faster. Is the readability win worth the perf hit?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(measure|benchmark|profile|numbers)",
            "(premature|hot path|cold path)",
            "(unless.{0,10}hot path|in this code path)",
            "(maintain.{0,10}years|long.term)",
          ],
          hint_tr:
            "Performans iddialarini olc, premature optimization tuzagini ac. 'Unless it's a hot path' kalibi.",
        },
        {
          speaker: "npc",
          message:
            "(Junior) Makes sense — I'll benchmark and report back.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(sounds good|sgtm|nice|appreciate)",
            "(ping me|tag me|let me know)",
            "(once you have numbers|when you have data)",
            "(happy to (re|)review)",
          ],
          hint_tr:
            "Kapanis: 'SGTM — ping me once you have numbers.' (sounds good to me)",
        },
        {
          speaker: "npc",
          message:
            "(Switching to senior reviewer on YOUR PR) Blocking: the retry loop has no backoff, this will hammer the upstream if it ever degrades.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(fair|good catch|valid|right)",
            "(missed|blind spot|overlooked)",
            "(fix(ing|ed)?|update|push)",
            "(exponential|jitter|backoff)",
          ],
          hint_tr:
            "Defensive olma. 'Fair / good catch' + somut aksiyon (exponential backoff + jitter).",
        },
        {
          speaker: "npc",
          message:
            "Also nit: the variable name `data` doesn't tell me what's in it.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yeah|true|fair|agreed)",
            "(rename|renamed|switching|switched)",
            "(more (descriptive|specific)|clearer)",
            "(payload|response|record)",
          ],
          hint_tr:
            "Nit kabul: 'Yeah, fair — renamed to `auditPayload`.' Detay bazli + spesifik.",
        },
        {
          speaker: "npc",
          message:
            "One more — why not use the shared retry util? We'd lose the consistency if everyone rolls their own.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(didn't know|wasn't aware|missed|didn't realize)",
            "(switching|using|pulling in) the (shared|util|library)",
            "(thanks|appreciate|good (call|catch))",
            "(consolidate|reuse|standard)",
          ],
          hint_tr:
            "Bilmiyordun, problem yok — kabul et + util'i kullan. 'Didn't know that existed, switching to it now.'",
        },
        {
          speaker: "npc",
          message:
            "Cool. Once those are in, I'll stamp it.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks|appreciate)",
            "(pushing|will push|on it)",
            "(give me|in a few|shortly)",
            "(tag you|ping you|re.?request)",
          ],
          hint_tr:
            "Profesyonel kapanis: 'Thanks — pushing the fixes in a few, will re-request review.'",
        },
      ],
    },
    {
      id: "ex.sc1.3.8",
      type: "pronounce_phrase",
      difficulty: 5,
      phrase: "I'd push back on that nit, with respect — the convention is local to this module.",
      ipa: "aɪd pʊʃ bæk ɒn ðæt nɪt wɪð rɪˈspɛkt",
      tr_hint:
        "Code review itirazı. 'Nit' = küçük itiraz (mühendislik jargonu). 'Convention is local to' = bu module özgü.",
    },
    {
      id: "ex.sc1.3.9",
      type: "speech_shadowing",
      difficulty: 5,
      native_text:
        "For context, I'd be doing future-maintainers a disservice if I let this land without the regression test.",
      voice_hint: "male_us",
      tr_hint:
        "Code review titizliği. 'Future-maintainers' = gelecekteki bakımcılar. 'Regression test' = regresyon testi.",
    },
    {
      id: "ex.sc1.3.10",
      type: "listen_and_transcribe",
      difficulty: 5,
      audio_text:
        "With respect, the methodology in this PR doesn't match how we handle errors elsewhere — could you align it?",
      transcription_target:
        "With respect, the methodology in this PR doesn't match how we handle errors elsewhere — could you align it?",
      tr_hint:
        "Senior reviewer kalıbı. 'How we handle errors elsewhere' = başka yerde nasıl ele alıyoruz. 'Align it' = uydur.",
    },
    {
      id: "ex.sc1.3.11",
      type: "vocab_tile",
      difficulty: 5,
      word_or_phrase: "with respect",
      tr_translation: "Saygıyla (formal yumuşatma)",
      example:
        "With respect, the trade-off you've made here optimises for the wrong thing — I'd want to revisit it.",
      example_tr:
        "Saygıyla — burada yaptığın takas yanlış şeyi optimize ediyor; yeniden ele almak isterim.",
    },
    {
      id: "ex.sc1.3.12",
      type: "spot_mistake",
      difficulty: 5,
      incorrect_sentence:
        "This code is messy and very bad, who taught you to write like this, please fix everything before I approve.",
      correct_sentence:
        "I'd push back on a few patterns here — for context, the error handling and the variable naming are out of step with how we do things in this repo. Happy to pair on it if useful.",
      tr_explanation:
        "'Who taught you to write like this' = kişisel saldırı, kariyer bitirir. Senior code review: spesifik konuyu adlandır ('error handling and naming'), bağlam ver ('out of step with this repo'), destek sun ('pair on it if useful'). Eleştiri sistemi geliştirir, insanı küçültmez.",
    },
  ],
};

// ============================================================
// 4 — Hiring decision discussion
// ============================================================
export const specC1Lesson_4: BundledLesson = {
  id: "professional.c1.spec-hiring.1",
  skill_id: "professional.c1.spec-hiring",
  index: 4,
  title: "Hiring Debrief — Vote + Defend",
  description:
    "Loop closing. Hire / no-hire / lean call. Defend your read with evidence from the interview, not vibes.",
  estimated_minutes: 11,
  exercises: [
    {
      id: "ex.sc1.4.1",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "we have to make a call here",
      tr_translation: "Burada karar vermek zorundayiz",
      example:
        "We have to make a call here — the loop is split, and we can't punt forever.",
      example_tr:
        "Burada karar vermek zorundayiz — loop bolundu, sonsuza kadar erteleyemeyiz.",
    },
    {
      id: "ex.sc1.4.2",
      type: "vocab_tile",
      difficulty: 5,
      word_or_phrase: "raise the bar",
      tr_translation: "Cubuk yukseltmek; hiring standardini koru",
      example:
        "I think this is a no-hire — they'd be a fine engineer, but they don't raise the bar.",
      example_tr:
        "Bence no-hire — iyi muhendis olurlar, ama cubugu yukseltmiyorlar.",
    },
    {
      id: "ex.sc1.4.3",
      type: "translate",
      difficulty: 5,
      direction: "tr_to_en",
      source:
        "Lean hire. Sistem tasarimi guclu, ama coding round'da bir buyuk endise gordum — corner case'leri kacirdi.",
      target:
        "Lean hire. Strong on system design, but I have one real concern from the coding round — they missed the corner cases.",
      accepted_variants: [
        "Soft hire. System design was solid, but the coding round flagged something — corner cases were missed.",
        "I'm at lean-hire. Loved the design discussion, but I'm worried about the coding signal — the edge cases didn't get caught.",
        "Lean yes, with a caveat. System design was a clear yes; coding was shakier — corner cases blew up.",
        "Tentative hire. Design was strong, but coding had a gap on edge case coverage.",
      ],
      tr_hint:
        "Hiring jargon: 'lean hire' / 'lean no-hire'. 'Corner case' / 'edge case' interchangeable.",
    },
    {
      id: "ex.sc1.4.4",
      type: "fill_blank",
      difficulty: 4,
      sentence_template:
        "I don't think they ___ the bar — they'd be solid, but not a level-up for the team.",
      answer: "raise",
      distractors: ["pass", "meet", "clear", "lift"],
      tr_hint:
        "'Raise the bar' = standardi yukseltmek. Hiring debrief'in temel sorusu.",
    },
    {
      id: "ex.sc1.4.5",
      type: "spot_mistake",
      difficulty: 5,
      incorrect_sentence:
        "I have bad vibes from this candidate, no hire.",
      correct_sentence:
        "I'm a no-hire — and I want to be specific about why. In the design round they couldn't articulate trade-offs, even when I prompted. That's the signal I'm anchored to.",
      tr_explanation:
        "'Vibes' = bias sinyali, anti-pattern. Senior debrief: somut interview moment + 'signal I'm anchored to' (kanitla).",
    },
    {
      id: "ex.sc1.4.6",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Senior backend pozisyonu icin debrief. Loop 4 interviewer: 2 hire, 1 lean-hire (sen), 1 no-hire. Hiring manager mod tutuyor.",
      npc_role: "Hiring Manager",
      setting: "Debrief room, 4 interviewers",
      turns: [
        {
          speaker: "npc",
          message:
            "Okay, going around the room. You're up — what's your read?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(lean hire|soft hire|tentative)",
            "(strong on|solid on|good signal on)",
            "(one (real )?concern|one worry|caveat)",
            "(coding|design|behavioral)",
          ],
          hint_tr:
            "Acik pozisyon + alanlari ayir. 'Lean hire — strong on X, one concern on Y.'",
        },
        {
          speaker: "npc",
          message:
            "Walk me through the concern. Give me a specific moment.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(in the coding round|during the design|on the second question)",
            "(when i asked|when i prompted|when i pushed)",
            "(missed|stumbled|didn't catch|didn't get)",
            "(edge case|corner case|null|empty|overflow)",
          ],
          hint_tr:
            "Spesifik moment + ne sordugun + ne kacirildi. 'When I asked X, they Y.'",
        },
        {
          speaker: "npc",
          message:
            "Fair. Anyone want to push back on that read?",
        },
        {
          speaker: "npc",
          message:
            "(No-hire interviewer chimes in) I agree with the coding concern, but for me it's bigger — they couldn't reason about scale at all in the design round. That's not a lean-hire for me, that's a hard no.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(fair|hear you|see your point|that's fair)",
            "(steelman|to push on that|though|that said)",
            "(prompted|nudged|with a hint)",
            "(growth|junior to senior|stretch)",
          ],
          hint_tr:
            "Karsi gorus dinle, steelman et. 'Fair — though when I nudged on scale, they got there with a hint. That's still a yes for me, but barely.'",
        },
        {
          speaker: "npc",
          message:
            "The two hires think we're being too tight. What would change your mind?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(level|seniority|expectations)",
            "(if (this were|for) a (junior|mid|l4))",
            "(at this bar|at this level)",
            "(another signal|reference|second loop)",
          ],
          hint_tr:
            "Level-based reasoning: 'At a senior bar, the gap matters. For a mid-level, this is a clear hire.'",
        },
        {
          speaker: "npc",
          message:
            "Okay, we have to make a call here. Are we comfortable downleveling and extending?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(comfortable|i'?m good with|works for me|fine with)",
            "(downlevel|down.?level|mid|l4)",
            "(stretch|growth|ramp)",
            "(yes|agreed|sounds right)",
          ],
          hint_tr:
            "Downlevel + extend, makul kompromis. 'I'm good with downleveling — clear signal at that bar.'",
        },
        {
          speaker: "npc",
          message:
            "What's your one-line summary I can put in the packet?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(strong on|solid on)",
            "(needs (growth|ramp)|stretch on)",
            "(extend at|recommend.{0,15}mid|fits at)",
            "(hire at .{0,10}level)",
          ],
          hint_tr:
            "Tek satir: 'Strong design fundamentals, needs growth on edge-case rigor — hire at L4 with senior mentorship.'",
        },
        {
          speaker: "npc",
          message:
            "Good — that's the writeup. Send it over by EOD.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(will do|on it|sending|sent)",
            "(by .{0,10}eod|by .{0,10}tonight|in an hour)",
            "(thanks|appreciate)",
          ],
          hint_tr:
            "Kapanis: 'Will do — in your inbox by EOD.'",
        },
      ],
    },
    {
      id: "ex.sc1.4.7",
      type: "pronounce_phrase",
      difficulty: 5,
      phrase: "For context, I'd push back on the system design score.",
      ipa: "fər ˈkɒntɛkst aɪd pʊʃ bæk ɒn ðə ˈsɪstəm dɪˈzaɪn skɔːr",
      tr_hint:
        "Hiring committee itirazı. Sakin, kararlı, somut. Spesifik karara işaret et.",
    },
    {
      id: "ex.sc1.4.8",
      type: "speech_shadowing",
      difficulty: 5,
      native_text:
        "With respect, the methodology she walked through was non-standard — that's not a weakness, it's a different approach.",
      voice_hint: "female_us",
      tr_hint:
        "Aday savunması. 'Non-standard, not a weakness' = standart dışı, zayıflık değil. Çerçeve değişimi.",
    },
    {
      id: "ex.sc1.4.9",
      type: "listen_and_transcribe",
      difficulty: 5,
      audio_text:
        "I'd be doing the team a disservice if I voted hire on someone who couldn't recover from the curveball.",
      transcription_target:
        "I'd be doing the team a disservice if I voted hire on someone who couldn't recover from the curveball.",
      tr_hint:
        "İşe alma debrief. 'Voted hire' = işe al oyu. 'Curveball' = beklenmedik soru (idiyom).",
    },
    {
      id: "ex.sc1.4.10",
      type: "vocab_tile",
      difficulty: 5,
      word_or_phrase: "for context",
      tr_translation: "Bağlam vermek gerekirse",
      example:
        "For context, the last three engineers we hired off this signal didn't ramp — I'd want stronger evidence here.",
      example_tr:
        "Bağlam: bu sinyalle aldığımız son üç mühendis hızlanamadı — burada daha güçlü kanıt isterim.",
    },
    {
      id: "ex.sc1.4.11",
      type: "spot_mistake",
      difficulty: 5,
      incorrect_sentence:
        "This candidate is amazing, I love everything about her, she is perfect for our team, we must hire.",
      correct_sentence:
        "I'd push back on hire — for context, the system design depth concerns me, even though her communication and ownership signals were strong.",
      tr_explanation:
        "'Amazing, perfect, must hire' = işe alma debrief'inde sinyal değil, gürültü. Senior committee dili: net pozisyon ('push back on hire'), spesifik endişe ('system design depth'), denge ('communication and ownership were strong'). Mühendislik kararı duyguyla değil, sinyalin yapısıyla alınır.",
    },
  ],
};

// ============================================================
// 5 — PIP conversation (manager side)
// ============================================================
export const specC1Lesson_5: BundledLesson = {
  id: "professional.c1.spec-pip.1",
  skill_id: "professional.c1.spec-pip",
  index: 5,
  title: "PIP Conversation (Manager)",
  description:
    "Performance improvement plan — managers must be clear, kind, and final. No mixed signals. No false hope.",
  estimated_minutes: 11,
  exercises: [
    {
      id: "ex.sc1.5.1",
      type: "vocab_tile",
      difficulty: 5,
      word_or_phrase: "this conversation isn't a surprise, I hope",
      tr_translation:
        "Umarim bu konusma sana surpriz degildir (signal verilmis olmali)",
      example:
        "I want to start by saying this conversation isn't a surprise, I hope — we've been flagging these gaps for two cycles.",
      example_tr:
        "Sunla baslayayim: umarim bu konusma sana surpriz degildir — bu gap'leri iki donemdir konusuyoruz.",
    },
    {
      id: "ex.sc1.5.2",
      type: "vocab_tile",
      difficulty: 5,
      word_or_phrase: "the bar I need you to clear",
      tr_translation: "Asman gereken cubuk",
      example:
        "Here's the bar I need you to clear by end of quarter — let's walk through each piece.",
      example_tr:
        "Ceyrek sonuna kadar asman gereken cubuk su — her parcayi tek tek gecelim.",
    },
    {
      id: "ex.sc1.5.3",
      type: "translate",
      difficulty: 5,
      direction: "tr_to_en",
      source:
        "Bu yolda olduguna yatirim yapiyorum, ama netlik gerekli — onumuzdeki 60 gun belirleyici.",
      target:
        "I'm invested in seeing you succeed on this, but I need to be clear with you — the next 60 days are make-or-break.",
      accepted_variants: [
        "I want you to succeed here, but I owe you the truth — the next 60 days will decide it.",
        "I'm in your corner on this, but I have to be direct — 60 days, and the outcome matters.",
        "Look, I want this to work out, but I need to be honest — these 60 days are the inflection point.",
        "I'm committed to helping you turn this around, but I have to be straight — 60 days, no extensions.",
      ],
      tr_hint:
        "Manager dilinde: empati + 'but I need to be clear' + somut zaman cercevesi. Karisik sinyal vermez.",
    },
    {
      id: "ex.sc1.5.4",
      type: "fill_blank",
      difficulty: 4,
      sentence_template:
        "I want to be ___ with you so there's no ambiguity about where we stand.",
      answer: "direct",
      distractors: ["nice", "friendly", "polite", "soft"],
      tr_hint:
        "PIP konusmasinda 'direct' anahtarsoz. 'Nice' / 'soft' = false hope sinyali.",
    },
    {
      id: "ex.sc1.5.5",
      type: "spot_mistake",
      difficulty: 5,
      incorrect_sentence:
        "Don't worry, this isn't a big deal, just some paperwork — I'm sure you'll be fine.",
      correct_sentence:
        "I want to be direct: this is a formal performance plan, and the outcome is consequential. I'll support you in every way I can, but I won't soften the stakes.",
      tr_explanation:
        "PIP'i 'big deal degil' diye sunmak yasal ve etik felaket. Manager net olmali: formal + consequential + 'won't soften the stakes'.",
    },
    {
      id: "ex.sc1.5.6",
      type: "pronounce_phrase",
      difficulty: 5,
      phrase:
        "I want to be direct with you — the next 60 days are make-or-break.",
      tr_hint:
        "Aciklik tonu, hizli degil. 'Make-or-break' tek soluk, vurgu 'break'te. Yumusatma.",
    },
    {
      id: "ex.sc1.5.7",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Direct report'unla planlanmis 1:1 — PIP'i sundugun gun. HR temsilcisi de odada (sessiz). Net, empatik, yumusatmadan.",
      npc_role: "Direct Report (on PIP)",
      setting: "Closed-door 1:1, HR partner present",
      turns: [
        {
          speaker: "npc",
          message:
            "Hey — you said this would be a longer one-on-one. Everything okay?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks for|appreciate|let me|i want to)",
            "(direct|straight|clear|honest)",
            "(formal performance plan|pip|performance improvement)",
            "(jenny|hr|partner) (is here|joined)",
          ],
          hint_tr:
            "Kapidan net. 'I want to be direct with you — I'm putting you on a formal performance plan.' HR varsa belirt.",
        },
        {
          speaker: "npc",
          message:
            "A PIP? I — okay. Wow. Can I ask what triggered this?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(not a surprise|been flagging|talked about)",
            "(last (one|two) cycles?|past .{0,15}quarters?)",
            "(specific|concrete|the pattern)",
            "(let me walk you through|here's what i'?m seeing)",
          ],
          hint_tr:
            "'Bu surpriz olmamali' + son 1-2 cycle'i hatirlat + somut pattern soyle. Senin yazili feedback'lerin var.",
        },
        {
          speaker: "npc",
          message:
            "Honestly, I thought we were past that. I've been trying.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(hear you|see (the )?effort|effort is real)",
            "(but|however|that said|the trajectory)",
            "(closing the gap|moving the needle|trajectory)",
            "(not (fast enough|where we need)|haven't (closed|seen))",
          ],
          hint_tr:
            "Cabayi gor, sonucu ayir. 'I see the effort — the trajectory hasn't moved enough.'",
        },
        {
          speaker: "npc",
          message:
            "What does this plan actually require? Be specific.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(three|two|four) (concrete|specific|measurable)",
            "(by (end of |q)|in (the next |) 60 days|within)",
            "(ship|deliver|lead|own)",
            "(weekly|biweekly|check.?in|sync)",
          ],
          hint_tr:
            "3 somut, olculebilir hedef + zaman cercevesi (60-90 gun) + weekly check-in ritmi.",
        },
        {
          speaker: "npc",
          message:
            "And if I don't hit it?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(separation|exit|let go|part ways|terminate)",
            "(end of (employment|the road)|won'?t continue)",
            "(consequential|stakes)",
            "(want to be (clear|honest) (with you )?(about|on))",
          ],
          hint_tr:
            "Sonucu YUMUSATMA. 'If the bar isn't met, this ends in separation.' Acik soyle.",
        },
        {
          speaker: "npc",
          message:
            "Is there any version where I get more time?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(no|i can'?t|won'?t)",
            "(extend|extension|more time)",
            "(the .{0,15} (window|timeframe) is (set|fixed|final))",
            "(fair to|setting you up|both of us)",
          ],
          hint_tr:
            "False hope verme. 'No, the 60-day window is fixed. Extending it wouldn't be fair to you or the team.'",
        },
        {
          speaker: "npc",
          message:
            "Okay. I need a minute. Can I get the written plan and come back tomorrow?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(absolutely|of course|yes|take the time)",
            "(written plan|document|email)",
            "(by .{0,10}eod|tonight|this afternoon)",
            "(tomorrow|reconvene|come back)",
          ],
          hint_tr:
            "Insani ol. 'Absolutely — written plan in your inbox by EOD. We'll reconvene tomorrow.'",
        },
        {
          speaker: "npc",
          message:
            "Thanks for not sugarcoating it.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(owe you|wouldn'?t|won'?t)",
            "(straight|honest|direct|truth)",
            "(in your corner|want you to succeed|here to support)",
            "(see you tomorrow|talk tomorrow)",
          ],
          hint_tr:
            "Kapanis: 'I owe you straight talk. I want this to work out — see you tomorrow.'",
        },
      ],
    },
    {
      id: "ex.sc1.5.8",
      type: "pronounce_phrase",
      difficulty: 5,
      phrase: "I'd be doing you a disservice if I delayed this conversation.",
      ipa: "aɪd bi ˈduːɪŋ juː ə dɪsˈsɜːrvɪs ɪf aɪ dɪˈleɪd ðɪs ˌkɒnvərˈseɪʃən",
      tr_hint:
        "PIP açılış. Ölçülü + içten. Hızlı geçme — kelime ağırlığını taşı.",
    },
    {
      id: "ex.sc1.5.9",
      type: "speech_shadowing",
      difficulty: 5,
      native_text:
        "With respect, the gap isn't effort — it's the methodology you're applying to the design problem.",
      voice_hint: "male_uk",
      tr_hint:
        "PIP teşhis. 'Gap isn't effort' = eksiklik çaba değil. 'Methodology you're applying' = uyguladığın yöntem.",
    },
    {
      id: "ex.sc1.5.10",
      type: "listen_and_transcribe",
      difficulty: 5,
      audio_text:
        "For context, this isn't a referendum on you as a person — it's a fit conversation about this role.",
      transcription_target:
        "For context, this isn't a referendum on you as a person — it's a fit conversation about this role.",
      tr_hint:
        "PIP çerçeveleme. 'Referendum on you as a person' = kişiliğin üzerinde oylama. 'Fit conversation' = uyum konuşması.",
    },
    {
      id: "ex.sc1.5.11",
      type: "vocab_tile",
      difficulty: 5,
      word_or_phrase: "I'd be doing you a disservice",
      tr_translation: "Sana iyilik etmemiş olurum",
      example:
        "I'd be doing you a disservice if I gave you a 'meets' on this review — the data says otherwise, and you deserve straight talk.",
      example_tr:
        "Bu değerlendirmede 'karşılıyor' versem sana iyilik etmemiş olurum — veriler aksini söylüyor ve sen dürüst söze layıksın.",
    },
    {
      id: "ex.sc1.5.12",
      type: "spot_mistake",
      difficulty: 5,
      incorrect_sentence:
        "You are not doing well, you must improve quickly or I will fire you next month.",
      correct_sentence:
        "I want to put us on a formal plan — for context, you've missed expectations for two consecutive quarters, and I owe you both clarity and a real shot at recovery.",
      tr_explanation:
        "'Must improve or I will fire' = tehdit, hukuki risk + güven kaybı. Olgun PIP: 'put us on a formal plan' (sistem), 'two consecutive quarters' (veri), 'clarity and a real shot at recovery' (saygı). Yönetici hem sınır hem destek sunar.",
    },
  ],
};

// ============================================================
// 6 — Layoff conversation
// ============================================================
export const specC1Lesson_6: BundledLesson = {
  id: "professional.c1.spec-layoff.1",
  skill_id: "professional.c1.spec-layoff",
  index: 6,
  title: "Layoff Conversation (Manager)",
  description:
    "The hardest manager script. Empathetic, final, no negotiation. Performance is not the reason — role is.",
  estimated_minutes: 10,
  exercises: [
    {
      id: "ex.sc1.6.1",
      type: "vocab_tile",
      difficulty: 5,
      word_or_phrase: "your role is being eliminated",
      tr_translation:
        "Pozisyonun kapatiliyor (sen kotusun degil — rol gidiyor)",
      example:
        "I need to tell you that your role is being eliminated as part of a broader restructure.",
      example_tr:
        "Sana sunu soylemem gerekiyor: daha genis bir yeniden yapilanmanin parcasi olarak rolun kapatiliyor.",
    },
    {
      id: "ex.sc1.6.2",
      type: "vocab_tile",
      difficulty: 5,
      word_or_phrase: "this is final, and it isn't about your performance",
      tr_translation: "Karar kesin, performansla ilgili degil",
      example:
        "I want to say this clearly: this is final, and it isn't about your performance.",
      example_tr:
        "Sunu net soylemek istiyorum: karar kesin ve performansinla ilgili degil.",
    },
    {
      id: "ex.sc1.6.3",
      type: "translate",
      difficulty: 5,
      direction: "tr_to_en",
      source:
        "Bu konusma kisa olacak ve duyacaklarin agir — onceden hazirlanmis bilgi var, soracaklarina cevap verecegim.",
      target:
        "This conversation is going to be short, and what you hear is hard — I have prepared information, and I'll answer what I can.",
      accepted_variants: [
        "I'll keep this short because the news is hard — I've got the details written down, and I'll walk you through them.",
        "This will be a brief call, and I'm sorry for that — what I have to share is difficult. I'll cover what I know.",
        "I'm going to keep this short, and what I'm sharing is heavy — I have a packet with details I'll go through.",
        "This conversation will be brief, and I won't pretend it's easy — I'll share what I have.",
      ],
      tr_hint:
        "Layoff dili: KISA + ONCEDEN HAZIRLANMIS + ZOR HABER. Pazarlik degil, bilgilendirme.",
    },
    {
      id: "ex.sc1.6.4",
      type: "fill_blank",
      difficulty: 5,
      sentence_template:
        "This decision is ___ — there isn't anything we can revisit today.",
      answer: "final",
      distractors: ["pending", "soft", "tentative", "open"],
      tr_hint:
        "'Final' = kesinlik sinyali. Layoff konusmasinda yumusatma alani yok.",
    },
    {
      id: "ex.sc1.6.5",
      type: "spot_mistake",
      difficulty: 5,
      incorrect_sentence:
        "Maybe we can find you another role, let's see what happens — try not to worry.",
      correct_sentence:
        "I won't give you false hope: today the decision is final, and there isn't another role to move into. What I can do is help you transition — references, network intros, anything within reason.",
      tr_explanation:
        "'Maybe' / 'see what happens' = sahte umut, etik felaket. Manager net olur + somut aksiyon (reference, network) onerir.",
    },
    {
      id: "ex.sc1.6.6",
      type: "translate",
      difficulty: 5,
      direction: "tr_to_en",
      source:
        "Bunu boyle ogrenmen lazim oldugu icin gercekten uzgunum — yasayacagin emek harcamana saygim sonsuz.",
      target:
        "I'm genuinely sorry you're hearing it this way — I have a lot of respect for the work you've put in.",
      accepted_variants: [
        "I'm truly sorry this is how you're finding out — the work you've done here mattered.",
        "I want to say I'm sorry — this isn't the way I'd want anyone to hear this, and your contributions mattered.",
        "I'm sorry you're getting this news today — I want to acknowledge everything you've put into the team.",
        "I'm sorry — and I want you to know I respect the work you've done.",
      ],
      tr_hint:
        "Insani an. 'Genuinely sorry' + 'respect for the work' — kisilik sinyali, role tartismasi degil.",
    },
    {
      id: "ex.sc1.6.7",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Restructure'in parcasi olarak takimindan birine layoff veriyorsun. HR temsilcisi videoda. 10 dakika.",
      npc_role: "Affected Employee",
      setting: "Video call, HR partner on screen",
      turns: [
        {
          speaker: "npc",
          message:
            "Hey — I saw this got marked urgent. What's going on?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(jenny|hr|partner) (is on|joining|with us)",
            "(short|brief|won'?t take long)",
            "(your role is being eliminated|role .{0,10}elimina|position .{0,10}elimina)",
            "(restructure|reorg|broader change)",
          ],
          hint_tr:
            "HR'i belirt + KISA + 'your role is being eliminated' kalibi. Performans degil, ROL.",
        },
        {
          speaker: "npc",
          message:
            "Wait — is this about my performance? Did I do something wrong?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(no|not at all|nothing to do)",
            "(not about (your )?performance|isn'?t (about|because))",
            "(restructure|business decision|role)",
            "(want to say (this )?clearly|to be clear)",
          ],
          hint_tr:
            "Bu noktayi NET kapat. 'No — this isn't about your performance. The role is being eliminated.'",
        },
        {
          speaker: "npc",
          message:
            "Is there anything I can do? Another team? A different role?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i won'?t|i can'?t) (give you|offer) (false hope|that)",
            "(the decision is final|no other role|isn'?t (a |an )(open|other))",
            "(what i can do|here'?s what i can offer)",
            "(reference|intro|transition (support|help))",
          ],
          hint_tr:
            "Sahte umut YOK. 'I won't give you false hope — the decision is final.' Sonra: 'What I can do is...' (references, intros).",
        },
        {
          speaker: "npc",
          message:
            "Okay. What about severance, benefits — when does this take effect?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(jenny|hr|partner) (will|can) (walk|cover|go through)",
            "(severance|package|benefits)",
            "(details|specifics|written)",
            "(today is your last day|effective|notice period)",
          ],
          hint_tr:
            "Logistic detay HR'a devret. 'Jenny will walk you through severance, benefits, and the timeline.'",
        },
        {
          speaker: "npc",
          message:
            "I... appreciate you telling me directly. This is a lot.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(genuinely|truly|really) sorry",
            "(respect|appreciate) (the )?work",
            "(matter(ed|s)|contribution)",
            "(here for|in your corner|reach out)",
          ],
          hint_tr:
            "Insani an. 'I'm genuinely sorry. I have a lot of respect for the work you've done — that's separate from this decision.'",
        },
        {
          speaker: "npc",
          message:
            "Can I get a few days before I have to tell anyone?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(absolutely|of course|yes)",
            "(your story|your news|how you tell)",
            "(when you'?re ready|on your timeline|your call)",
            "(announce|notify|share)",
          ],
          hint_tr:
            "Insanin haberi paylasma haklari onun. 'Absolutely — it's your story, on your timeline.'",
        },
        {
          speaker: "npc",
          message:
            "Will you write me a reference?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|absolutely|of course|happy to)",
            "(reference|recommend|introduce)",
            "(network|intros?|connections)",
            "(reach out|email me|stay in touch)",
          ],
          hint_tr:
            "Somut destek. 'Yes — references, intros to my network, anything within reason. Email me anytime.'",
        },
        {
          speaker: "npc",
          message:
            "Thanks. I'm going to log off.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(take care|wishing you)",
            "(i('m| am) (here|sorry))",
            "(reach out|email|when you'?re ready)",
            "(genuinely|truly)",
          ],
          hint_tr:
            "Sade kapanis. 'Take care. I'm sorry — reach out when you're ready.'",
        },
      ],
    },
    {
      id: "ex.sc1.6.8",
      type: "pronounce_phrase",
      difficulty: 5,
      phrase: "I'd be doing you a disservice if I sugar-coated this.",
      ipa: "aɪd bi ˈduːɪŋ juː ə dɪsˈsɜːrvɪs ɪf aɪ ˈʃʊgərˌkoʊtɪd ðɪs",
      tr_hint:
        "Layoff açılışı. 'Sugar-coated' = tatlandırılmış. Ölçülü, duygusal kontrol.",
    },
    {
      id: "ex.sc1.6.9",
      type: "speech_shadowing",
      difficulty: 5,
      native_text:
        "With respect, this decision is about role-fit at the company level — it isn't a verdict on your work.",
      voice_hint: "female_us",
      tr_hint:
        "Layoff şefkat. 'Role-fit at the company level' = şirket seviyesinde rol-uyum. 'Verdict on your work' = işine dair hüküm.",
    },
    {
      id: "ex.sc1.6.10",
      type: "listen_and_transcribe",
      difficulty: 5,
      audio_text:
        "For context, the methodology we used to scope this round was based on workload, not performance.",
      transcription_target:
        "For context, the methodology we used to scope this round was based on workload, not performance.",
      tr_hint:
        "Layoff şeffaflığı. 'Scope this round' = bu turu kapsama. 'Workload, not performance' = iş yükü, performans değil.",
    },
    {
      id: "ex.sc1.6.11",
      type: "vocab_tile",
      difficulty: 5,
      word_or_phrase: "for context",
      tr_translation: "Bağlam vermek gerekirse",
      example:
        "For context, we made this call at the executive level last week — I wanted you to hear it from me, not from HR.",
      example_tr:
        "Bağlam: bu kararı geçen hafta üst yönetim seviyesinde verdik — bunu İK'dan değil, benden duymanı istedim.",
    },
    {
      id: "ex.sc1.6.12",
      type: "spot_mistake",
      difficulty: 5,
      incorrect_sentence:
        "Sorry but we don't need you anymore, please clean your desk by tomorrow, thank you for your time.",
      correct_sentence:
        "I have a hard message — your role is being eliminated as part of a reduction. For context, this isn't about your performance; it's a company-level call. I want to walk you through what comes next.",
      tr_explanation:
        "'Don't need you, clean your desk' = yıkıcı, hukuki risk + onur kaybı. Olgun layoff: 'hard message' (önbildirim), pasif yumuşatma ('role is being eliminated'), bağlam ('not about performance'), aksiyon ('what comes next'). İnsana saygı sistem işini geri vermez ama yaşatır.",
    },
  ],
};

// ============================================================
// 7 — Founder fundraising pitch
// ============================================================
export const specC1Lesson_7: BundledLesson = {
  id: "professional.c1.spec-fundraise.1",
  skill_id: "professional.c1.spec-fundraise",
  index: 7,
  title: "Founder VC Pitch",
  description:
    "Series A pitch. Traction, ask, terms. Confident without bullshit. Answer the hard question without dodging.",
  estimated_minutes: 12,
  exercises: [
    {
      id: "ex.sc1.7.1",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "we're raising a $X on a $Y pre",
      tr_translation: "$X yatirim aliyoruz, $Y pre-money valuation uzerinden",
      example:
        "We're raising a $12M Series A on a $48M pre — clean preferred, no participation.",
      example_tr:
        "12M Series A aliyoruz, 48M pre-money uzerinden — clean preferred, participation yok.",
    },
    {
      id: "ex.sc1.7.2",
      type: "vocab_tile",
      difficulty: 5,
      word_or_phrase: "the bull case / the bear case",
      tr_translation: "Iyimser senaryo / kotumser senaryo",
      example:
        "Bull case: we hit $20M ARR by next year. Bear case: enterprise sales cycle stretches and we land at $10M.",
      example_tr:
        "Iyimser: gelecek yil 20M ARR'a varariz. Kotumser: enterprise satis dongusu uzar, 10M'de kaliriz.",
    },
    {
      id: "ex.sc1.7.3",
      type: "translate",
      difficulty: 5,
      direction: "tr_to_en",
      source:
        "Son 9 ayda ARR'i 1M'den 6M'a cikardik, net retention 132% ve enterprise pipeline 4M.",
      target:
        "In the last nine months, we've taken ARR from $1M to $6M, net retention sits at 132%, and we've got $4M of qualified enterprise pipeline.",
      accepted_variants: [
        "Last nine months: ARR from $1M to $6M, NRR at 132%, and $4M in qualified pipeline.",
        "We're up from $1M to $6M ARR in nine months, net dollar retention is 132%, with $4M of pipeline behind us.",
        "ARR's grown 6x in nine months — $1M to $6M — NRR at 132%, and $4M sitting in pipeline.",
        "Nine-month story: $1M to $6M ARR, 132% NRR, $4M of enterprise pipeline qualified.",
      ],
      tr_hint:
        "Traction dili: somut sayilar + standart metrikler (ARR, NRR, pipeline). Saglam tek cumlede yogun.",
    },
    {
      id: "ex.sc1.7.4",
      type: "fill_blank",
      difficulty: 4,
      sentence_template:
        "Our ___ moat is the proprietary dataset we've built — we've labeled 40M anchor pairs no competitor has.",
      answer: "data",
      distractors: ["price", "feature", "design", "network"],
      tr_hint:
        "VC pitch'te 'moat' kategorileri: data moat, network moat, regulatory moat. Burada labeled dataset = data moat.",
    },
    {
      id: "ex.sc1.7.5",
      type: "spot_mistake",
      difficulty: 5,
      incorrect_sentence:
        "We have no competitors and the market is infinite.",
      correct_sentence:
        "Today we mostly compete against spreadsheets and Datadog's tangential offering. The market we're sizing is the $8B observability spend that's currently shadow-IT'd onto BI tools — that's our real TAM.",
      tr_explanation:
        "'No competitors' + 'infinite market' = founder anti-pattern, VC kapanir. Senior pitch: somut alternatives + sized TAM + 'real TAM' framing.",
    },
    {
      id: "ex.sc1.7.6",
      type: "pronounce_phrase",
      difficulty: 4,
      phrase:
        "We're raising twelve on a forty-eight pre, clean preferred, no participation.",
      tr_hint:
        "Terms tek cumlede akiciligi konusur. Rakamlari net soyle, 'clean preferred' tek soluk.",
    },
    {
      id: "ex.sc1.7.7",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Tier-1 VC ile Series A pitch — 30 dakikalik first meeting. Partner ve principal. Sen founder + CEO'sun.",
      npc_role: "VC Partner",
      setting: "Sand Hill Road conference room, 30-minute first meeting",
      turns: [
        {
          speaker: "npc",
          message:
            "Thanks for making the time. Why don't you give us the two-minute version, and then we'll dig in.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(we|i('m| am)) (build|building)",
            "(problem|pain|today)",
            "(customers?|teams?|companies)",
            "(arr|growing|traction)",
          ],
          hint_tr:
            "2-dakikalik pitch: problem + cozum + bugunku traction. Buzzword'siz, somut.",
        },
        {
          speaker: "npc",
          message:
            "What's the traction story since last raise?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(arr|revenue) (from|grew|up)",
            "(\\$\\d+m|\\d+x|months?)",
            "(net retention|nrr|expansion)",
            "(logos?|customers|enterprise)",
          ],
          hint_tr:
            "ARR delta + NRR + logo count. Bir nefeste, defansif degil.",
        },
        {
          speaker: "npc",
          message:
            "Who's winning when you lose? Be honest.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(usually|mostly|when we lose)",
            "(do nothing|status quo|spreadsheet|incumbent)",
            "(reason|why|price|integration)",
            "(we'?ve learned|the pattern)",
          ],
          hint_tr:
            "Lost deals = en sevdikleri soru. Honest: 'mostly to status quo / do-nothing', somut ornek + lesson.",
        },
        {
          speaker: "npc",
          message:
            "What's the moat once a fast-follower with deep pockets shows up?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(data|network|integration|switching costs?)",
            "(proprietary|labeled|trained on)",
            "(years to replicate|hard to copy)",
            "(deep .{0,15}workflow|embed)",
          ],
          hint_tr:
            "Moat = data + workflow embed + switching cost. Spesifik say.",
        },
        {
          speaker: "npc",
          message:
            "Walk me through the bull and bear cases for next year.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(bull case|in the bull|upside)",
            "(\\$\\d+m|\\d+x arr|hit)",
            "(bear case|downside|on the bear)",
            "(enterprise cycle|stretches|takes longer|lands at)",
          ],
          hint_tr:
            "Bull + bear ayri ayri, somut ARR rakami her birinde. Risk farkindaligi gosterir.",
        },
        {
          speaker: "npc",
          message:
            "What's the ask, and what are you running for terms?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(raising|raise) (\\$\\d+m|\\d+m)",
            "(on a |at a )?(\\$?\\d+m? )?(pre|pre.?money)",
            "(clean preferred|standard|1x non.?part)",
            "(no participation|no participating|no special)",
          ],
          hint_tr:
            "Net terms: 'Raising $X on $Y pre, clean preferred, 1x non-participating, no special board terms.'",
        },
        {
          speaker: "npc",
          message:
            "Why us? You're talking to four firms — why should we lead?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(specific|honest|why)",
            "(your (work|portfolio|thesis)|you'?ve (led|backed))",
            "(value.?add|help us with|where we need)",
            "(partner|board|operator)",
          ],
          hint_tr:
            "Generic 'sizi seviyoruz' degil — spesifik thesis fit + somut value-add ihtiyaci.",
        },
        {
          speaker: "npc",
          message:
            "What's the one thing that keeps you up at night?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(honestly|the truth|real answer)",
            "(hire|talent|leadership|gtm)",
            "(scale|process|culture)",
            "(working on|focused on|what i'?m doing)",
          ],
          hint_tr:
            "Honest cevap = trust sinyali. 'Honestly — hiring a head of GTM. Here's what I'm doing about it.'",
        },
        {
          speaker: "npc",
          message:
            "Good answer. We'll get back to you by end of week.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(appreciate|thanks)",
            "(timeline|moving|closing) (by|in)",
            "(diligence|data room|references)",
            "(look forward|talk soon)",
          ],
          hint_tr:
            "Kapanis + timeline pressure (sahte degil): 'Appreciate it — we're targeting term sheets by next Friday.'",
        },
      ],
    },
    {
      id: "ex.sc1.7.8",
      type: "pronounce_phrase",
      difficulty: 5,
      phrase: "For context, our last round was $5M seed at fifteen post.",
      ipa: "fər ˈkɒntɛkst aʊər læst raʊnd wəz faɪv ˈmɪljən siːd",
      tr_hint:
        "VC kalibrasyon. 'Five mil seed at fifteen post' = $5M tohum, $15M post-money. Akıcı, nötr ton.",
    },
    {
      id: "ex.sc1.7.9",
      type: "speech_shadowing",
      difficulty: 5,
      native_text:
        "I'd be doing you a disservice if I told you we have ten enterprise customers — we have three, and they're real.",
      voice_hint: "male_us",
      tr_hint:
        "VC dürüstlük. 'They're real' = gerçek (vurgu). Az ama dürüst, çok ama abartılı'dan iyi.",
    },
    {
      id: "ex.sc1.7.10",
      type: "listen_and_transcribe",
      difficulty: 5,
      audio_text:
        "With respect, I'd push back on the framing that this is a winner-take-all market — for context, three companies own different layers of the stack.",
      transcription_target:
        "With respect, I'd push back on the framing that this is a winner-take-all market — for context, three companies own different layers of the stack.",
      tr_hint:
        "VC reframe. 'Winner-take-all market' = kazananın her şeyi aldığı pazar. 'Different layers of the stack' = stack'in farklı katmanları.",
    },
    {
      id: "ex.sc1.7.11",
      type: "vocab_tile",
      difficulty: 5,
      word_or_phrase: "I'd push back on the framing",
      tr_translation: "Çerçeveye itiraz ederim",
      example:
        "I'd push back on the framing that this is a 'technology bet' — for context, the bet is on distribution.",
      example_tr:
        "Bunun 'teknoloji bahsi' olarak çerçevelenmesine itiraz ederim — asıl bahis dağıtım üzerine.",
    },
    {
      id: "ex.sc1.7.12",
      type: "spot_mistake",
      difficulty: 5,
      incorrect_sentence:
        "We are the best in this space, no one can compete with us, we will be the next unicorn for sure.",
      correct_sentence:
        "For context, the moat we're building is the dataset — I'd push back on anyone who says this is winner-take-all, but the early advantage compounds.",
      tr_explanation:
        "'Best in space, no one can compete, next unicorn for sure' = pitch klişesi, VC reddi. Founder dili: somut farklılaştırıcı ('dataset'), çerçeveye itiraz ('push back on winner-take-all'), gerçekçi iyimser ('early advantage compounds'). Spesifiklik ikna eder, slogan değil.",
    },
  ],
};

// ============================================================
// 8 — Customer churn save call
// ============================================================
export const specC1Lesson_8: BundledLesson = {
  id: "professional.c1.spec-churnsave.1",
  skill_id: "professional.c1.spec-churnsave",
  index: 8,
  title: "Churn Save Call",
  description:
    "Customer signaled cancel. Find the real reason (it's never the stated one), present targeted save, know when to let go.",
  estimated_minutes: 10,
  exercises: [
    {
      id: "ex.sc1.8.1",
      type: "vocab_tile",
      difficulty: 5,
      word_or_phrase: "the stated reason is rarely the real reason",
      tr_translation:
        "Soylenen sebep nadiren gercek sebep — altina inmen lazim",
      example:
        "They said 'too expensive' but the stated reason is rarely the real reason — let me dig.",
      example_tr:
        "'Cok pahali' dediler ama soylenen sebep nadiren gercek sebep — kazmayim.",
    },
    {
      id: "ex.sc1.8.2",
      type: "vocab_tile",
      difficulty: 5,
      word_or_phrase: "I'd rather lose you than oversell you",
      tr_translation: "Seni kaybetmek, sana asiri satistan iyidir",
      example:
        "I'd rather lose you than oversell you — if this isn't the right time, let's pause and revisit Q3.",
      example_tr:
        "Seni kaybetmek sana asiri satistan iyidir — su an dogru zaman degilse, duralim Q3'te bakariz.",
    },
    {
      id: "ex.sc1.8.3",
      type: "translate",
      difficulty: 5,
      direction: "tr_to_en",
      source:
        "Iptal kararini duydum — anliyorum. Cikmadan once iki sey sorabilir miyim, gercekten ogrenmek istiyorum?",
      target:
        "I hear the cancel decision — totally fair. Before we wind things down, can I ask two questions? I'm asking to learn, not to talk you out of it.",
      accepted_variants: [
        "Got it on the cancel — I respect that. Two quick questions before we close it out, and I promise I'm not going to fight you on it.",
        "I hear you on canceling — that's your call. Can I ask two things before we wrap, just so I learn?",
        "I'm not going to argue the decision — but can I ask two questions before we end the relationship?",
        "Understood on the cancel. Mind if I ask a couple of questions before we wind down? Just trying to learn.",
      ],
      tr_hint:
        "Save call acilis: kararı kabul + 'two questions' + niyet acikla ('not to fight you'). Pushy degil.",
    },
    {
      id: "ex.sc1.8.4",
      type: "fill_blank",
      difficulty: 4,
      sentence_template:
        "Help me understand — what would have to be ___ for this to be a no-brainer for you?",
      answer: "true",
      distractors: ["fixed", "cheaper", "easier", "better"],
      tr_hint:
        "Senior save sorusu: 'what would have to be true' = root cause sorma sablonu.",
    },
    {
      id: "ex.sc1.8.5",
      type: "spot_mistake",
      difficulty: 5,
      incorrect_sentence:
        "Wait — please don't cancel! I can give you 50% off, please stay!",
      correct_sentence:
        "Before we go to pricing, help me understand what changed. If the answer is the product isn't pulling its weight, I'd rather lose you than discount you into resentment.",
      tr_explanation:
        "Hemen discount = panik + sebep ogrenmedin. Senior cevap: REASON onceligi + 'discount you into resentment' (uzun vade dusun).",
    },
    {
      id: "ex.sc1.8.6",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Mid-market customer (~$80k ARR) renewal'i 60 gun once iptal sinyali verdi. Sen Account Executive'sin, gercek sebebi bulmaya calisiyorsun.",
      npc_role: "Customer Decision-Maker",
      setting: "30-min Zoom",
      turns: [
        {
          speaker: "npc",
          message:
            "Look, I appreciate you setting this up, but the decision is made. Budget got cut and we have to consolidate vendors. Nothing personal.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(appreciate|hear you|fair|respect)",
            "(before we (wind|wrap|close)|two questions|learn)",
            "(promise|not (going to|here to) (fight|sell|argue))",
            "(genuinely|honestly|just to learn)",
          ],
          hint_tr:
            "Kararı kabul + 'two questions, not to fight you' niyeti acikla. Pushy degil.",
        },
        {
          speaker: "npc",
          message:
            "Okay, but I'm telling you — pricing is the deal-breaker.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(hear you|got it|fair)",
            "(before .{0,15}pricing|set pricing aside)",
            "(if .{0,20}free|hypothetical|magic wand)",
            "(would you (renew|stay|keep))",
          ],
          hint_tr:
            "'If it were free, would you stay?' — sahte hipotez ama gercek sebebi aciga cikarir.",
        },
        {
          speaker: "npc",
          message:
            "Honestly? Probably not. The team isn't using it as much as we expected.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(adoption|usage|engagement)",
            "(walk me through|help me understand|tell me about)",
            "(what'?s blocking|what'?s in the way|gap)",
            "(team|users?|workflow)",
          ],
          hint_tr:
            "Gercek sebep ortaya cikti: ADOPTION, fiyat degil. Kaz: 'Help me understand what's blocking adoption.'",
        },
        {
          speaker: "npc",
          message:
            "The integration with our ticketing system never really worked. People give up and go back to the spreadsheet.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(that('s| is)|this is) (a real|the real|valid)",
            "(integration|connector|sync)",
            "(thank you for|appreciate you (sharing|flagging))",
            "(ship(ped|ping)?|just (launched|released)|roadmap)",
          ],
          hint_tr:
            "Spesifik problemi kabul + kredibilite ile cevapla. 'That's a real one — we shipped a new connector in March, and...'",
        },
        {
          speaker: "npc",
          message:
            "Even if the integration worked, the team has moved on. I'm not sure it's worth restarting.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(what would have to be true|magic version|no.?brainer)",
            "(pilot|reset|fresh start|champion)",
            "(success criteria|defined outcome|measurable)",
            "(60.?day|90.?day|short window)",
          ],
          hint_tr:
            "'What would have to be true for this to be a no-brainer?' + 60-90 gun pilot offer.",
        },
        {
          speaker: "npc",
          message:
            "Honestly? I'd need a champion on my side internally — and a clear ROI by quarter end.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(what if|here'?s what i'?d propose|let me offer)",
            "(dedicated|named csm|hands.on)",
            "(measurable|tied to|defined|metric)",
            "(if we don'?t hit|otherwise|out clause)",
          ],
          hint_tr:
            "Tam offer: dedicated CSM + tanimli metrikler + 'if we don't hit it, you walk free' (out-clause).",
        },
        {
          speaker: "npc",
          message:
            "An out-clause if we don't hit the milestones? That's... actually interesting.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(in writing|happy to put|memo)",
            "(rather (lose|fail) you|than (oversell|disappoint))",
            "(skin in the game|aligned|on the line)",
            "(decision (maker|owner)|champion)",
          ],
          hint_tr:
            "'I'd rather lose you than oversell you' kalibi + yazili guvence + champion ile aligned.",
        },
        {
          speaker: "npc",
          message:
            "Send me a one-pager. If it's tight, I'll bring it to my VP.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(in your inbox|sending|today|eod)",
            "(one.?pager|memo|proposal)",
            "(thanks|appreciate)",
            "(circle back|follow up|tomorrow)",
          ],
          hint_tr:
            "Kapanis: 'One-pager in your inbox by EOD — thanks for the openness.'",
        },
      ],
    },
    {
      id: "ex.sc1.8.7",
      type: "pronounce_phrase",
      difficulty: 5,
      phrase: "I'd push back on the renewal pause — for context, here's what we're shipping next month.",
      ipa: "aɪd pʊʃ bæk ɒn ðə rɪˈnjuːəl pɔːz",
      tr_hint:
        "Churn save itirazı. 'Renewal pause' = yenileme durakla. 'What we're shipping' = neyi yayınlıyoruz.",
    },
    {
      id: "ex.sc1.8.8",
      type: "speech_shadowing",
      difficulty: 5,
      native_text:
        "With respect, I'd be doing you a disservice if I promised that feature for Q3 — the honest answer is Q4.",
      voice_hint: "female_uk",
      tr_hint:
        "Müşteri dürüstlüğü. 'Doing you a disservice' = sana iyilik etmemiş olurum. Q3 yerine Q4 sözü ver.",
    },
    {
      id: "ex.sc1.8.9",
      type: "listen_and_transcribe",
      difficulty: 5,
      audio_text:
        "For context, the methodology your team flagged is now configurable per workspace — that lands in next week's release.",
      transcription_target:
        "For context, the methodology your team flagged is now configurable per workspace — that lands in next week's release.",
      tr_hint:
        "Müşteri çözüm bildirimi. 'Configurable per workspace' = workspace bazında yapılandırılabilir. 'Lands in next week's release' = haftaya çıkan sürümde.",
    },
    {
      id: "ex.sc1.8.10",
      type: "vocab_tile",
      difficulty: 5,
      word_or_phrase: "with respect",
      tr_translation: "Saygıyla (formal yumuşatma)",
      example:
        "With respect, the comparison to Competitor X isn't apples-to-apples — we're solving a different problem.",
      example_tr:
        "Saygıyla — Rakip X ile karşılaştırma elma-elmaya değil; biz farklı bir problem çözüyoruz.",
    },
    {
      id: "ex.sc1.8.11",
      type: "spot_mistake",
      difficulty: 5,
      incorrect_sentence:
        "Please please don't leave, we will give you 50% discount and anything you want, just stay.",
      correct_sentence:
        "I hear the churn signal, and I'd want to understand what's underneath it before we talk price. For context, discount-first usually doesn't solve the real issue.",
      tr_explanation:
        "'Please don't leave, anything you want' = aciliyetli yalvarış, müşteri güvenini kaybeder. CS dili: 'hear the churn signal' (duyduğunu göster), 'understand what's underneath' (kök neden), 'discount-first doesn't solve' (sistematik). Müşteriyi indirimle değil, sorunu çözerek tut.",
    },
  ],
};

// ============================================================
// 9 — Customer escalation
// ============================================================
export const specC1Lesson_9: BundledLesson = {
  id: "professional.c1.spec-escalation.1",
  skill_id: "professional.c1.spec-escalation",
  index: 9,
  title: "C-Level Customer Escalation",
  description:
    "Enterprise customer's CTO went thermonuclear. Own it, contain it, commit to a number. Don't oversell the fix.",
  estimated_minutes: 11,
  exercises: [
    {
      id: "ex.sc1.9.1",
      type: "vocab_tile",
      difficulty: 5,
      word_or_phrase: "we own this",
      tr_translation: "Bu bizim sorumlulugumuz (deflection yok)",
      example:
        "Before anything else, we own this — full stop. Let me tell you what we're doing.",
      example_tr:
        "Her seyden once, bu bizim sorumlulugumuz — nokta. Sana ne yaptigimizi anlatayim.",
    },
    {
      id: "ex.sc1.9.2",
      type: "vocab_tile",
      difficulty: 5,
      word_or_phrase: "I won't oversell the fix",
      tr_translation: "Cozumu abartmayacagim",
      example:
        "I won't oversell the fix — here's what's confirmed, here's what's still in flight.",
      example_tr:
        "Cozumu abartmayacagim — soyle ki kesin, soyle ki hala hareket halinde.",
    },
    {
      id: "ex.sc1.9.3",
      type: "translate",
      difficulty: 5,
      direction: "tr_to_en",
      source:
        "Once dinleyim — biliyorum 6 saat boyunca production down'daydi ve cezaen bir cevap hak ediyorsunuz.",
      target:
        "Let me listen first — I know you were down for six hours, and you deserve a serious answer.",
      accepted_variants: [
        "Before I say anything, I want to listen — six hours of downtime, and you're owed a real response.",
        "Let me start by listening — you were down six hours, you've earned a substantive answer.",
        "I'd rather hear you out first — six hours of outage demands more than corporate talk.",
        "Let me hear what you've got first — six hours down, you deserve straight answers.",
      ],
      tr_hint:
        "Escalation acilis: KONUSMA, DINLE. 'You deserve' kalibi = saygi sinyali, defensive degil.",
    },
    {
      id: "ex.sc1.9.4",
      type: "fill_blank",
      difficulty: 5,
      sentence_template:
        "We ___ this — it's on us, and I'm not going to hand you to the support team.",
      answer: "own",
      distractors: ["fix", "see", "take", "have"],
      tr_hint:
        "'We own this' = senior escalation dilinde sorumluluk kabul kalibi. 'I'm not going to hand you to support' = ciddiyet sinyali.",
    },
    {
      id: "ex.sc1.9.5",
      type: "spot_mistake",
      difficulty: 5,
      incorrect_sentence:
        "I understand your frustration. Our team is working on it as fast as possible.",
      correct_sentence:
        "I won't tell you I understand the frustration — I haven't lost six hours of revenue today. What I can tell you is what we know, what we don't, and the next checkpoint you'll hear from me.",
      tr_explanation:
        "Generic 'I understand your frustration' = empty corporate. Senior escalation: kendi sinirini kabul + somut: 'what we know / what we don't / next checkpoint'.",
    },
    {
      id: "ex.sc1.9.6",
      type: "pronounce_phrase",
      difficulty: 5,
      phrase:
        "We own this — full stop. Let me tell you what we know and what we don't.",
      tr_hint:
        "'We own this' net, agir aksanli. 'Full stop' tek nefeste, nokta gibi.",
    },
    {
      id: "ex.sc1.9.7",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Senin urunun production'da 6 saat down kaldi. Enterprise customer'in CTO'su (yillik $1.2M) direkt CEO'na yazdi. CEO sana topu attiriyor — bridge call'a ciktın.",
      npc_role: "Enterprise CTO",
      setting: "Emergency bridge call, hour 7 of incident",
      turns: [
        {
          speaker: "npc",
          message:
            "I don't want PR. I don't want a 'we understand your frustration.' I want to know what the hell happened, and why I should keep paying you a million dollars a year.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(no pr|no scripts|won'?t hand you)",
            "(we own this|on us|fully)",
            "(let me listen|hear you out|before)",
            "(what we know|what we don'?t)",
          ],
          hint_tr:
            "Corporate dili HEMEN kapat. 'No PR, no scripts. We own this. Let me start with what we know and what we don't.'",
        },
        {
          speaker: "npc",
          message:
            "Fine. Start with what you know.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(\\d+:\\d+|at .{0,10}am|at .{0,10}pm)",
            "(deploy|rollout|change|migration)",
            "(triggered|caused|introduced)",
            "(database|connection|memory|cascade)",
          ],
          hint_tr:
            "Timeline + somut teknik sebep. Bullshit yok. 'At 09:12 UTC, a config change introduced a connection-pool leak.'",
        },
        {
          speaker: "npc",
          message:
            "How did this get past your testing?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(canary|staging|gradual rollout)",
            "(missed|gap|didn'?t catch)",
            "(load profile|production traffic|edge case)",
            "(honest|truth|the fact is)",
          ],
          hint_tr:
            "Defansif degil, honest gap. 'Canary caught no errors because load was 3% of production. That's our gap.'",
        },
        {
          speaker: "npc",
          message:
            "And what's the SLA credit?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(contractual|under (the )?contract)",
            "(\\d+%|standard credit|sla credit)",
            "(but|that said|on top of)",
            "(making (you )?(whole|right)|over and above)",
          ],
          hint_tr:
            "Contract say, sonra over-and-above offer ekle. 'Contractually 10%. We're proposing 30% — making you whole, not just compliant.'",
        },
        {
          speaker: "npc",
          message:
            "What's stopping this from happening again next quarter?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(three|four|four things)",
            "(canary|production.?load|shadow traffic)",
            "(circuit breaker|rate limit|kill switch)",
            "(post.?mortem|RCA|root cause)",
          ],
          hint_tr:
            "Numarali, somut. '3 things: (1) production-load canaries, (2) DB connection circuit breakers, (3) RCA in your inbox Friday.'",
        },
        {
          speaker: "npc",
          message:
            "How do I know you'll follow through? Last year I got promises from your last AE.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(in writing|memo|email)",
            "(weekly|every (week|friday)|cadence)",
            "(my (calendar|number|cell)|direct line)",
            "(escalate to me|skip your csm)",
          ],
          hint_tr:
            "Skin in the game. Yazili + weekly checkpoint + 'my cell' + 'escalate to me directly'.",
        },
        {
          speaker: "npc",
          message:
            "If you miss any of those checkpoints, we're done.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(understood|fair|hear you)",
            "(if we (miss|don'?t hit)|on me)",
            "(out clause|exit|walk)",
            "(in writing|in the memo)",
          ],
          hint_tr:
            "Sahte rahatlatma yok. Out-clause kabul: 'Fair. If we miss any checkpoint, you walk — and I'll put that in the memo.'",
        },
        {
          speaker: "npc",
          message:
            "Okay. Send me the post-mortem and the SLA proposal by Friday.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(in your inbox|sending|friday)",
            "(rca|post.?mortem)",
            "(sla|credit proposal)",
            "(thank|appreciate)",
          ],
          hint_tr:
            "Profesyonel kapanis. 'Both in your inbox by Thursday EOD — Friday morning if you want to discuss.'",
        },
      ],
    },
    {
      id: "ex.sc1.9.8",
      type: "pronounce_phrase",
      difficulty: 5,
      phrase: "For context, the incident was caused by a deploy that bypassed our gate.",
      ipa: "fər ˈkɒntɛkst ði ˈɪnsɪdənt wəz kɔːzd baɪ ə dɪˈplɔɪ",
      tr_hint:
        "Müşteri eskalasyon dürüstlüğü. 'Bypassed our gate' = kapımızı atladı. Net, savunmasız.",
    },
    {
      id: "ex.sc1.9.9",
      type: "speech_shadowing",
      difficulty: 5,
      native_text:
        "I'd be doing you a disservice if I gave you the marketing answer — the honest answer is we missed a check that should have caught this.",
      voice_hint: "male_us",
      tr_hint:
        "Eskalasyon çağrısı. 'Marketing answer' = pazarlama cevabı (içi boş). 'Missed a check' = kontrol atladık.",
    },
    {
      id: "ex.sc1.9.10",
      type: "listen_and_transcribe",
      difficulty: 5,
      audio_text:
        "With respect, the methodology in our incident-response runbook didn't account for this failure mode — that's on us, and we're fixing it.",
      transcription_target:
        "With respect, the methodology in our incident-response runbook didn't account for this failure mode — that's on us, and we're fixing it.",
      tr_hint:
        "Postmortem dili. 'Incident-response runbook' = olay müdahale kitabı. 'Failure mode' = arıza biçimi.",
    },
    {
      id: "ex.sc1.9.11",
      type: "vocab_tile",
      difficulty: 5,
      word_or_phrase: "I'd be doing you a disservice",
      tr_translation: "Sana iyilik etmemiş olurum",
      example:
        "I'd be doing you a disservice if I attributed this to a 'rare edge case' — it wasn't rare; it was a class of bug we hadn't tested for.",
      example_tr:
        "Buna 'nadir bir uç durum' dersem sana iyilik etmemiş olurum — nadir değildi, test etmediğimiz bir hata sınıfıydı.",
    },
    {
      id: "ex.sc1.9.12",
      type: "spot_mistake",
      difficulty: 5,
      incorrect_sentence:
        "Sorry for any problems, our system is usually very good, this was a small bug, please don't worry.",
      correct_sentence:
        "I want to own this directly. For context, our SLA was breached for forty-seven minutes — that's on us. The RCA and credit proposal will be in your inbox by Thursday EOD.",
      tr_explanation:
        "'Small bug, please don't worry' = küçümseme, müşteri öfkesini büyütür. Senior CS eskalasyon: 'own this directly' (sahiplenme), spesifik veri ('SLA breached for forty-seven minutes'), aksiyon ('RCA and credit proposal Thursday EOD'). Müşteri saygı + somutluk ister, rahatlatma değil.",
    },
  ],
};

// ============================================================
// 10 — All-hands speech
// ============================================================
export const specC1Lesson_10: BundledLesson = {
  id: "professional.c1.spec-allhands.1",
  skill_id: "professional.c1.spec-allhands",
  index: 10,
  title: "All-Hands Speech",
  description:
    "Quarterly all-hands. Mission update, the hard news, and answering the question you wish they hadn't asked.",
  estimated_minutes: 12,
  exercises: [
    {
      id: "ex.sc1.10.1",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "let me cut through the noise",
      tr_translation: "Gurultuyu kesip oze gelyim",
      example:
        "Before I get to slides, let me cut through the noise — here's the one number that matters this quarter.",
      example_tr:
        "Slaytlara gecmeden once, gurultuyu kesip oze geleyim — bu ceyrek tek onemli sayi su.",
    },
    {
      id: "ex.sc1.10.2",
      type: "vocab_tile",
      difficulty: 5,
      word_or_phrase: "I owe you a straight answer",
      tr_translation: "Sana acik bir cevap borcluyum",
      example:
        "I owe you a straight answer on the layoffs question, even if it's not the one you wanted.",
      example_tr:
        "Layoff sorusu konusunda sana acik bir cevap borcluyum — istedigin cevap olmasa bile.",
    },
    {
      id: "ex.sc1.10.3",
      type: "translate",
      difficulty: 5,
      direction: "tr_to_en",
      source:
        "Ceyrek hedeflerimize ulasamadik — bu rakami yumusatmayacagim ve niye boyle oldugunu acacagim.",
      target:
        "We missed our quarterly targets — I'm not going to soften that number, and I'm going to walk you through why.",
      accepted_variants: [
        "We came in under plan this quarter. I won't dress that up, and I'll be specific about what drove it.",
        "We missed the quarter. I'm not going to sugarcoat it, and I owe you the real explanation.",
        "We didn't hit plan. No spin — let me tell you what actually happened.",
        "Quarterly targets: missed. I'm going to be direct about the gap and the reasons behind it.",
      ],
      tr_hint:
        "All-hands en zor ani. 'Soften / dress up / sugarcoat' = anti-pattern. Direct + 'walk you through why'.",
    },
    {
      id: "ex.sc1.10.4",
      type: "fill_blank",
      difficulty: 4,
      sentence_template:
        "I want to ___ through the noise and give you the one thing that matters this quarter.",
      answer: "cut",
      distractors: ["go", "look", "see", "push"],
      tr_hint:
        "'Cut through the noise' = senior CEO opener kalibi. Generic update'i atla, signal'a gel.",
    },
    {
      id: "ex.sc1.10.5",
      type: "spot_mistake",
      difficulty: 5,
      incorrect_sentence:
        "Everything is going great! We're on track, no concerns!",
      correct_sentence:
        "I'd be lying if I said everything was on track. We missed Q3 by 14%, and I want to spend most of this all-hands telling you why and what we're doing about it.",
      tr_explanation:
        "'Everything great' = trust kaybi (calisanlar Slack'ten sayilari biliyor zaten). Senior leader: rakami soyle + zamani 'why + what we're doing'a ayir.",
    },
    {
      id: "ex.sc1.10.6",
      type: "pronounce_phrase",
      difficulty: 5,
      phrase:
        "I'm not going to soften the number — we missed by fourteen percent, and here's why.",
      tr_hint:
        "Aciklik + sayisal net. 'Fourteen percent' yavas, vurgu rakamda. 'Here's why' davet acici.",
    },
    {
      id: "ex.sc1.10.7",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Quarterly all-hands. CEO'sun. Q3 hedefinin %14 altinda kaldin, layoff soylentileri var, ekip endiseli. 250 kisi izliyor. AMA bolumune geldin.",
      npc_role: "Employee Asking Questions",
      setting: "Company all-hands, AMA portion",
      turns: [
        {
          speaker: "npc",
          message:
            "(Q1 from staff) Are there going to be layoffs? Just give us a straight answer.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(owe you|going to be|straight)",
            "(here'?s where (we are|i am))",
            "(no layoffs (planned|on the table)|not planning|aren'?t planning)",
            "(if (that|the picture) changes|conditions)",
            "(committed to (telling|sharing))",
          ],
          hint_tr:
            "Net cevap + 'if it changes, you'll hear from me first' kalibi. Yumusatma, ama panik de yaratma.",
        },
        {
          speaker: "npc",
          message:
            "(Q2) You said the same thing last year and then we lost 40 people in February. Why should we believe you now?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(fair|valid|hear you|deserved)",
            "(last year|february|that decision)",
            "(what i said|what i didn'?t know|i was wrong)",
            "(different|here'?s what'?s different|here'?s why)",
          ],
          hint_tr:
            "Defansif olma. Gecmisi kabul + 'here's what's different' + sebep ac. Sahte ozur yerine durust degerlendirme.",
        },
        {
          speaker: "npc",
          message:
            "(Q3) What does 'different' actually look like? Numbers.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(runway|cash|months of)",
            "(\\d+ months?|\\d+ quarters?)",
            "(burn|spending|revenue)",
            "(metric|trigger|when (that|we))",
          ],
          hint_tr:
            "Spesifik sayilar: runway aylar, burn, hangi metric'in tetikleyici olacagi. Spin yok.",
        },
        {
          speaker: "npc",
          message:
            "(Q4) Why did we miss Q3 by 14%? Was that not visible earlier?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(it was|we saw it|visible)",
            "(two (things|drivers)|three (things|reasons))",
            "(enterprise (cycle|slowdown)|customer concentration|deal slipped)",
            "(should have|in hindsight|we'?ll do differently)",
          ],
          hint_tr:
            "2-3 spesifik driver + 'should have'/'in hindsight' kalibi. Honest retrospective sinyali.",
        },
        {
          speaker: "npc",
          message:
            "(Q5) When will we know the company is okay? What's the metric?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(here'?s (what|the) (i'?m|we'?re) tracking)",
            "(net new arr|pipeline|gross retention)",
            "(over the next|by .{0,15}quarter)",
            "(share (with|across) (you|the team)|transparency|cadence)",
          ],
          hint_tr:
            "Hangi metric, hangi zaman cercevesi + share-out cadence. Trust = transparency.",
        },
        {
          speaker: "npc",
          message:
            "(Q6) Are leadership taking pay cuts before the company asks anything of us?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|already|signed off)",
            "(i'?m taking|leadership|exec team)",
            "(\\d+%|cash comp|salary)",
            "(disclosed|effective|in writing)",
          ],
          hint_tr:
            "Skin-in-the-game tanitla. 'Yes — I'm taking a 25% cut, exec team 15%. Effective last week, disclosed to the board.'",
        },
        {
          speaker: "npc",
          message:
            "(Q7) What's the one thing you wish you could say but feel like you can't?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(honest|truth|straight)",
            "(scared|nervous|hard|worry)",
            "(but|that said|here'?s why i (still|keep))",
            "(showing up|believe|conviction)",
          ],
          hint_tr:
            "Vulnerable + honest. 'Honestly — some weeks I'm scared. But I keep showing up because [conviction].'",
        },
        {
          speaker: "npc",
          message:
            "(Q8 — closing) Anything you want to leave us with?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thank you|grateful|appreciate)",
            "(hard quarter|tough|honest with you)",
            "(what (i can|we) commit|here'?s what i'?ll do)",
            "(see you|talk soon|next all.hands)",
          ],
          hint_tr:
            "Thanks + somut commit + next cadence. Generic 'great team' degil — spesifik bir sey birak.",
        },
      ],
    },
    {
      id: "ex.sc1.10.8",
      type: "pronounce_phrase",
      difficulty: 5,
      phrase: "I'd be doing this team a disservice if I dressed up a hard quarter.",
      ipa: "aɪd bi ˈduːɪŋ ðɪs tiːm ə dɪsˈsɜːrvɪs ɪf aɪ drɛst ʌp",
      tr_hint:
        "All-hands dürüstlüğü. 'Dressed up' = süslemek. Net, savunmasız, içten.",
    },
    {
      id: "ex.sc1.10.9",
      type: "speech_shadowing",
      difficulty: 5,
      native_text:
        "For context, we missed plan by twelve percent — I'd push back on anyone who tells you that's not significant.",
      voice_hint: "female_us",
      tr_hint:
        "All-hands dürüst veri. 'Missed plan by twelve percent' = plandan %12 sapma. 'Push back on anyone' = kim olursa olsun itiraz.",
    },
    {
      id: "ex.sc1.10.10",
      type: "listen_and_transcribe",
      difficulty: 5,
      audio_text:
        "With respect to the leadership team, I'm going to share two numbers we usually don't put on a slide.",
      transcription_target:
        "With respect to the leadership team, I'm going to share two numbers we usually don't put on a slide.",
      tr_hint:
        "All-hands ön bildirim. 'With respect to' = saygıyla (yapay olmayan açılış). 'Numbers we usually don't put on a slide' = slayta koymadığımız sayılar.",
    },
    {
      id: "ex.sc1.10.11",
      type: "vocab_tile",
      difficulty: 5,
      word_or_phrase: "for context",
      tr_translation: "Bağlam vermek gerekirse",
      example:
        "For context, the last time we shipped a quarter like this we doubled in the next two — I'm not promising that, but I see the same setup.",
      example_tr:
        "Bağlam: böyle bir çeyrek yaşadığımızda sonraki ikide ikiye katlanmıştık — söz vermiyorum ama aynı kurguyu görüyorum.",
    },
    {
      id: "ex.sc1.10.12",
      type: "spot_mistake",
      difficulty: 5,
      incorrect_sentence:
        "Hello team, everything is amazing, we are crushing it, please keep working hard and don't worry about anything.",
      correct_sentence:
        "Hi team — I want to be candid with you. For context, this was a hard quarter, and I'd be doing you a disservice if I papered over it. Here's what I'm seeing and what I'm asking of you.",
      tr_explanation:
        "'Everything is amazing, crushing it, don't worry' = senior team güvenini kaybeder, gerçeklikle çelişir. CEO all-hands dili: 'be candid' (önbildirim), 'hard quarter' (gerçek), 'doing you a disservice if I papered over' (öz-eleştiri), 'what I'm asking of you' (net çağrı). Olgun lider gerçekliği taşır.",
    },
  ],
};

// ============================================================
// 11 — Tech: system design interview (CAP, sharding, consistency)
// ============================================================
export const specC1Lesson_11: BundledLesson = {
  id: "professional.c1.spec-sysdesign-cap.1",
  skill_id: "professional.c1.spec-sysdesign-cap",
  index: 11,
  title: "Tech — System Design Interview",
  description:
    "Distributed-systems interview. Reason about CAP trade-offs, defend an eventually-consistent path, and pick a sharding strategy without flinching.",
  estimated_minutes: 12,
  exercises: [
    {
      id: "ex.sc1.11.1",
      type: "vocab_tile",
      difficulty: 5,
      word_or_phrase: "CAP theorem trade-offs",
      tr_translation: "CAP teoremi takasları (tutarlılık-erişilebilirlik-bölünme)",
      example:
        "I'd walk through the CAP theorem trade-offs before I commit to a quorum read — under a partition, we can't have both strong consistency and full availability.",
      example_tr:
        "Quorum read'e karar vermeden önce CAP teoremi takaslarını gözden geçiririm — partition sırasında hem strong consistency hem tam availability mümkün değil.",
    },
    {
      id: "ex.sc1.11.2",
      type: "vocab_tile",
      difficulty: 5,
      word_or_phrase: "eventually consistent",
      tr_translation:
        "Eninde sonunda tutarlı (yazma sonrası tüm replica'lar nihayetinde aynı değeri görür)",
      example:
        "For the social graph, eventually consistent is fine — for the billing ledger, it's a non-starter.",
      example_tr:
        "Social graph için eventually consistent yeterli — billing ledger için baştan dışarıda.",
    },
    {
      id: "ex.sc1.11.3",
      type: "vocab_tile",
      difficulty: 5,
      word_or_phrase: "sharding strategy",
      tr_translation: "Veriyi nodelara dağıtma stratejisi (hash, range, tenant bazlı)",
      example:
        "The sharding strategy I'd reach for is consistent hashing by tenant — it keeps the blast radius scoped when one shard goes hot.",
      example_tr:
        "Tercih edeceğim sharding strategy tenant bazlı consistent hashing — bir shard hot olduğunda etki yarıçapı sınırlı kalır.",
    },
    {
      id: "ex.sc1.11.4",
      type: "translate",
      difficulty: 5,
      direction: "tr_to_en",
      source:
        "Bu use-case'te CP yerine AP'ye kayardım — partition sirasinda yazmaya devam etmek tutarliliktan onemli.",
      target:
        "For this use case, I'd lean AP over CP — staying writable during a partition matters more than strict consistency.",
      accepted_variants: [
        "I'd pick AP over CP here — accepting writes through a partition is more valuable than strong consistency.",
        "Given the use case, AP is the right call — I'd take availability under partition over strict consistency.",
        "I'd skew toward AP — write availability under partition is the higher-order concern.",
        "Trade-off-wise I'd go AP — consistency we can reconcile later, availability we can't get back.",
      ],
      tr_hint:
        "CAP cevabi: AP vs CP secimi + sebep. 'Lean toward / skew toward' = senior tercih ifadesi. 'Reconcile later' jargonu.",
    },
    {
      id: "ex.sc1.11.5",
      type: "translate",
      difficulty: 5,
      direction: "tr_to_en",
      source:
        "Hot shard riskini azaltmak icin consistent hashing + virtual node kullanirim — rebalance maliyetini sinirli tutar.",
      target:
        "To mitigate hot-shard risk, I'd use consistent hashing with virtual nodes — it keeps the rebalance cost bounded.",
      accepted_variants: [
        "I'd reach for consistent hashing with vnodes to manage hot-shard risk and keep rebalances cheap.",
        "Consistent hashing plus virtual nodes — that bounds the rebalance cost and softens hotspots.",
        "Vnodes on top of consistent hashing — keeps rebalancing incremental and limits hotspots.",
        "I'd shard with consistent hashing and use virtual nodes to spread hot keys.",
      ],
      tr_hint:
        "Sharding cevabi: 'consistent hashing + virtual nodes' kalibi. 'Bounded rebalance' = senior precision.",
    },
    {
      id: "ex.sc1.11.6",
      type: "fill_blank",
      difficulty: 5,
      sentence_template:
        "For the social graph, ___ consistent is acceptable — we can reconcile on read.",
      answer: "eventually",
      distractors: ["strongly", "casually", "loosely", "eagerly"],
      tr_hint:
        "'Eventually consistent' birlesik terim. 'Reconcile on read' = okuma sirasinda uzlasma jargonu.",
    },
    {
      id: "ex.sc1.11.7",
      type: "spot_mistake",
      difficulty: 5,
      incorrect_sentence:
        "I will pick strong consistency because consistency is always better than availability.",
      correct_sentence:
        "I'd default to strong consistency for the billing path, but for the feed I'd accept eventual — the read path tolerates staleness, and CAP forces a choice under partition.",
      tr_explanation:
        "'Consistency is always better' = junior CAP yorumu. Senior cevap: path-by-path takas (billing vs feed), 'tolerates staleness' (somut gerekce), 'CAP forces a choice' (teori dogru cercevelenmis).",
    },
    {
      id: "ex.sc1.11.8",
      type: "pronounce_phrase",
      difficulty: 5,
      phrase:
        "I'd walk through the CAP theorem trade-offs before I commit to a sharding strategy.",
      ipa: "aɪd wɔːk θruː ðə kæp ˈθɪərəm ˈtreɪd ɒfs bɪˈfɔːr aɪ kəˈmɪt",
      tr_hint:
        "Interview opener. 'CAP theorem' /kæp ˈθɪərəm/, 'trade-offs' vurgulu, 'sharding' /ˈʃɑːrdɪŋ/. Kararli ton.",
    },
    {
      id: "ex.sc1.11.9",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Distributed systems interview. Interviewer 'design a globally distributed key-value store' dedi ve CAP/consistency/sharding sorularina dalmaya hazirlaniyor.",
      npc_role: "Staff Engineer Interviewer",
      setting: "Senior systems design loop, 75 minutes",
      turns: [
        {
          speaker: "npc",
          message:
            "Design a globally distributed KV store. Start where you want, but I'll push on consistency and partitioning.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(clarify|requirements|first|before)",
            "(read.?write|qps|latency|geo|tenants?)",
            "(consistency model|sla)",
            "(scope|use case)",
          ],
          hint_tr:
            "Clarify acilis: read/write profile, geo dagilim, latency SLA, consistency beklentisi. Dalmadan once kapsam.",
        },
        {
          speaker: "npc",
          message:
            "Read-heavy, multi-region, P99 reads under 80ms across continents. Writes are mixed — some need durability guarantees, some are best-effort telemetry.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(cap|trade.?off|partition)",
            "(two .?paths?|split|tier)",
            "(strong|linearizable|quorum) .{0,40}(durable|critical)",
            "(eventual|async) .{0,40}(telemetry|best.?effort)",
          ],
          hint_tr:
            "CAP takasini ac: durable write'lar icin CP path (quorum), telemetry icin AP path (eventually consistent). Iki tier.",
        },
        {
          speaker: "npc",
          message:
            "Good — two tiers. Walk me through the CAP trade-offs for the durable tier under a regional partition.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(partition|split.?brain)",
            "(majority|quorum|leader|raft|paxos)",
            "(unavailable|reject|stale reads?)",
            "(minority side|losing side)",
          ],
          hint_tr:
            "Partition altinda: majority quorum yazmaya devam eder, minority side write reddeder. Linearizability korunur, availability dusurulur.",
        },
        {
          speaker: "npc",
          message:
            "Sharding — how are you partitioning the key space?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(consistent hash|hash.based|range)",
            "(virtual node|vnode|token)",
            "(rebalance|reshard)",
            "(hotspot|hot shard|skew)",
          ],
          hint_tr:
            "Consistent hashing + virtual nodes. Rebalance maliyetini sinirla, hot shard skew'unu yumusat. Range partitioning trade-off'unu da kisa ac.",
        },
        {
          speaker: "npc",
          message:
            "What if a single tenant generates 40% of traffic? Consistent hashing alone won't save you.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(detect|monitor|profile)",
            "(split|sub.?shard|carve out|isolate)",
            "(dedicated|noisy neighbor)",
            "(adaptive|dynamic|rebalance)",
          ],
          hint_tr:
            "Hot tenant'i tespit + dedicated shard'a carve out. Noisy-neighbor isolation. Adaptive resharding sinyali ekle.",
        },
        {
          speaker: "npc",
          message:
            "Replication — across regions, how do you keep durable writes consistent without dying on cross-region latency?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(quorum|w \\+ r > n|majority)",
            "(local|regional|nearby).{0,20}(quorum|replicas?)",
            "(async|geo.?replicate).{0,30}(other regions?|far)",
            "(read.?your.?writes|session)",
          ],
          hint_tr:
            "Regional majority quorum (local replicas), cross-region async replication. Read-your-writes session consistency garanti et.",
        },
        {
          speaker: "npc",
          message:
            "Defend the choice to accept eventual consistency on the read replicas.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(read.?heavy|hot path|p99|latency budget)",
            "(staleness (bound|window)|seconds?|sub.?second)",
            "(reconcile|repair|anti.?entropy)",
            "(business|use case|tolerates?)",
          ],
          hint_tr:
            "Latency budget gerekce + bounded staleness (orn. 200ms). Anti-entropy / read repair ile reconcile. Use-case staleness'i tolere ediyor.",
        },
        {
          speaker: "npc",
          message:
            "If you had 10 more minutes, what would you push on?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(failure mode|chaos|partition test)",
            "(observability|tracing|tail latency)",
            "(schema|secondary index)",
            "(multi.?tenant isolation|noisy)",
          ],
          hint_tr:
            "Geri donus alanlari: failure mode drills, tail latency observability, secondary index, multi-tenant isolation. Bilincli punted maddeler.",
        },
        {
          speaker: "npc",
          message:
            "Good loop. You scoped, owned the trade-offs, and didn't pretend CAP was a thing you could finesse around.",
        },
      ],
    },
    {
      id: "ex.sc1.11.10",
      type: "vocab_tile",
      difficulty: 5,
      word_or_phrase: "bounded staleness",
      tr_translation: "Sinirli bayatlik (read'in en fazla X saniye geri olabilecegi garanti)",
      example:
        "For the catalog read path, I'd guarantee bounded staleness of 200ms — anything fresher costs us cross-region quorum latency.",
      example_tr:
        "Katalog read path'inde 200ms'lik bounded staleness garanti ederim — daha taze degerin maliyeti cross-region quorum latency'si.",
    },
    {
      id: "ex.sc1.11.11",
      type: "speech_shadowing",
      difficulty: 5,
      native_text:
        "For context, the sharding strategy I'd reach for is consistent hashing with virtual nodes — it bounds the rebalance cost when a hot shard appears.",
      voice_hint: "male_us",
      tr_hint:
        "Sharding savunmasi. 'Reach for' = baş̆vururum (idiyom). 'Bounds the rebalance cost' = rebalance maliyetini sinirlar. Olcumlu, kararli.",
    },
    {
      id: "ex.sc1.11.12",
      type: "spot_mistake",
      difficulty: 5,
      incorrect_sentence:
        "I will just use the database that is most popular, popular means it is the best for sharding.",
      correct_sentence:
        "I'd push back on picking the storage by popularity — for context, the sharding strategy has to match the access pattern. I'd profile the workload first and then choose between range and hash-based partitioning.",
      tr_explanation:
        "'Popular = best' = junior mantik. Senior cevap: erisim pattern'ina gore secim ('access pattern'), profil + sharding stratejisini somut adlandirma (range vs hash). 'Push back on picking by popularity' = system design dili.",
    },
  ],
};

// ============================================================
// 12 — Finance: earnings call language
// ============================================================
export const specC1Lesson_12: BundledLesson = {
  id: "professional.c1.spec-earnings.1",
  skill_id: "professional.c1.spec-earnings",
  index: 12,
  title: "Finance — Earnings Call Language",
  description:
    "Public-company quarterly earnings call. Frame top-line growth, defend margin compression, and issue forward guidance without legal exposure.",
  estimated_minutes: 12,
  exercises: [
    {
      id: "ex.sc1.12.1",
      type: "vocab_tile",
      difficulty: 5,
      word_or_phrase: "top-line growth",
      tr_translation: "Gelir buyumesi (gelir tablosu ust satiri — net satislar)",
      example:
        "We delivered 18% top-line growth year-over-year, with strength across both enterprise and mid-market.",
      example_tr:
        "Yillik bazda %18 top-line buyume saglladik, hem enterprise hem mid-market segmentlerinde guc gosterdik.",
    },
    {
      id: "ex.sc1.12.2",
      type: "vocab_tile",
      difficulty: 5,
      word_or_phrase: "EBITDA margin compression",
      tr_translation: "FAVOK marjinda daralma (faiz/vergi/amortisman onceski operasyonel kar yuzdesi dustu)",
      example:
        "We saw 120 basis points of EBITDA margin compression this quarter, largely driven by elevated R&D investment.",
      example_tr:
        "Bu ceyrek 120 baz puanlik EBITDA margin compression yasadik — buyuk olcude artan Ar-Ge yatirimlari kaynakli.",
    },
    {
      id: "ex.sc1.12.3",
      type: "vocab_tile",
      difficulty: 5,
      word_or_phrase: "guidance for the next quarter",
      tr_translation: "Onumuzdeki ceyrek icin yatirimcilara verilen tahmin/yonlendirme",
      example:
        "Our guidance for the next quarter is revenue in the range of 510 to 525 million, reflecting continued enterprise momentum.",
      example_tr:
        "Onumuzdeki ceyrek icin guidance'imiz 510-525 milyon dolar gelir araliginda — devam eden enterprise momentumu yansitiyor.",
    },
    {
      id: "ex.sc1.12.4",
      type: "translate",
      difficulty: 5,
      direction: "tr_to_en",
      source:
        "Gelir buyumesi yillik bazda %22 oldu, fakat brut marjda 80 baz puanlik bir daralma gozledik.",
      target:
        "Top-line growth came in at 22% year-over-year, though we did see 80 basis points of gross margin compression.",
      accepted_variants: [
        "Top-line was up 22% year-over-year, partially offset by 80 bps of gross margin compression.",
        "Revenue grew 22% YoY, with gross margin compressing 80 basis points.",
        "We posted 22% top-line growth year-over-year alongside roughly 80 bps of gross margin compression.",
        "Top-line growth landed at 22% YoY, with 80 basis points of margin compression on the gross line.",
      ],
      tr_hint:
        "'Top-line growth came in at X%' = standart earnings call kalip. 'Basis points' / 'bps' = yuz baz puan = %1. Yillik buyume + marjda daralma birlikte sunulur.",
    },
    {
      id: "ex.sc1.12.5",
      type: "translate",
      difficulty: 5,
      direction: "tr_to_en",
      source:
        "Onumuzdeki ceyrek icin guidance'imizi 510 ila 525 milyon dolar araliginda yukseltiyoruz.",
      target:
        "We're raising our guidance for the next quarter to a range of 510 to 525 million dollars.",
      accepted_variants: [
        "We're taking up guidance for next quarter to a range of $510 to $525 million.",
        "Our updated guidance for Q-next is in the range of 510 to 525 million.",
        "We're guiding to 510 to 525 million for the next quarter, up from our prior range.",
        "Forward guidance moves up to a range of 510 to 525 million for the coming quarter.",
      ],
      tr_hint:
        "'Raising / taking up guidance' = guidance yukseltme kalip ifadesi. Aralik (range) ile sunulur — tek nokta degil. 'Forward guidance' senior register.",
    },
    {
      id: "ex.sc1.12.6",
      type: "fill_blank",
      difficulty: 5,
      sentence_template:
        "We saw 120 basis points of EBITDA margin ___ this quarter, driven by elevated R&D spend.",
      answer: "compression",
      distractors: ["depression", "deflation", "subtraction", "regression"],
      tr_hint:
        "'Margin compression' = standart finans kalibi. 'Depression / deflation' ekonomi terimleri, finansta margin'a bu sekilde uygulanmaz.",
    },
    {
      id: "ex.sc1.12.7",
      type: "spot_mistake",
      difficulty: 5,
      incorrect_sentence:
        "We will definitely make more money next quarter because everything is going great.",
      correct_sentence:
        "Looking ahead, our guidance for the next quarter reflects continued top-line momentum, partially offset by ongoing margin compression from R&D investment — we're guiding to a range of 510 to 525 million.",
      tr_explanation:
        "'Definitely make more money / everything great' = SEC ucretsiz secure haven sinyalsiz spekulasyon. Public company CFO dili: 'looking ahead', 'reflects', 'partially offset', spesifik aralik, 'guiding to'. Forward-looking statement disiplini.",
    },
    {
      id: "ex.sc1.12.8",
      type: "pronounce_phrase",
      difficulty: 5,
      phrase:
        "Our guidance for the next quarter reflects continued top-line momentum, partially offset by margin compression.",
      ipa: "ˈɑːr ˈɡaɪdəns fər ðə nɛkst ˈkwɔːrtər rɪˈflɛkts kənˈtɪnjuːd tɒp laɪn",
      tr_hint:
        "Earnings call cumlesi. 'Guidance' /ˈɡaɪdəns/, 'partially offset' birlikte. Sakin, kararli, defansif degil.",
    },
    {
      id: "ex.sc1.12.9",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Public sirketin CFO'susun. Q3 earnings call AMA bolumu, sell-side analistler agir sorular soracak. Top-line buyume guclu ama EBITDA margin daraldi. Q4 guidance yukseltiyorsun.",
      npc_role: "Sell-Side Analyst",
      setting: "Q3 Earnings Call, Analyst Q&A",
      turns: [
        {
          speaker: "npc",
          message:
            "Thanks for taking the question. Can you walk us through the drivers behind the top-line growth this quarter, and how durable you see that into Q4?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(top.?line|revenue) .{0,30}(driven by|attributable to)",
            "(enterprise|mid.?market|segment)",
            "(durable|sustainable|continued)",
            "(guidance|next quarter|q4)",
          ],
          hint_tr:
            "Buyume driver'larini somut isimlendir (enterprise + mid-market), durability sinyali ver, Q4 guidance'a kopru kur.",
        },
        {
          speaker: "npc",
          message:
            "On EBITDA margin — you compressed about 120 basis points. Is that one-time or structural?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(120 (bps|basis points))",
            "(r&?d|research.{0,10}development|investment)",
            "(elevated|deliberate|temporary)",
            "(returns?|payoff|operating leverage)",
          ],
          hint_tr:
            "120 bps'i sahiplen, 'elevated R&D investment' olarak cerceveye al, gecicilik + operating leverage geri donusu sinyali. 'Structural' degil 'deliberate'.",
        },
        {
          speaker: "npc",
          message:
            "Help me understand the guidance lift. What gives you confidence to take up the range when most peers are guiding cautiously?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(pipeline|coverage|bookings?)",
            "(visibility|line of sight|conviction)",
            "(\\d+%|\\d+x|coverage ratio)",
            "(prudent|measured|appropriately conservative)",
          ],
          hint_tr:
            "Conviction kaynagi: pipeline coverage, bookings visibility. Spesifik (orn. '2.5x pipeline coverage'). 'Prudent / measured' ile aşırılığı dengeye al.",
        },
        {
          speaker: "npc",
          message:
            "If macro deteriorates in Q1, how should we think about the downside scenario?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(downside|softer|deceleration)",
            "(levers?|cost discipline|operating leverage)",
            "(committed to|protect) .{0,20}(margin|profitability|bottom.?line)",
            "(scenario|stress.?test|playbook)",
          ],
          hint_tr:
            "Downside scenario'yu kabul et, kullanilabilir lever'lari adlandir (cost discipline, OpEx phasing), margin/EBITDA korumayi taahhüt et.",
        },
        {
          speaker: "npc",
          message:
            "One more — capital allocation. Buyback was light this quarter. Should we read into that?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(opportunistic|programmatic|disciplined)",
            "(m&?a|inorganic|organic investment)",
            "(balance sheet|cash position)",
            "(committed to (returning|capital return)|long.?term)",
          ],
          hint_tr:
            "Buyback'i 'opportunistic' olarak cerceveye al, M&A optionality'sini koru, long-term capital return commitment'ini tekrar et. Spekulasyon yok.",
        },
        {
          speaker: "npc",
          message:
            "Thanks — I'll get back in the queue.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks|appreciate)",
            "(question|follow.?up)",
            "(next (caller|question)|operator)",
          ],
          hint_tr:
            "Kibar kapanis: 'Thanks for the question — operator, next?' Tek satir, IR diline uygun.",
        },
      ],
    },
    {
      id: "ex.sc1.12.10",
      type: "vocab_tile",
      difficulty: 5,
      word_or_phrase: "forward-looking statement",
      tr_translation: "Ileriye donuk beyan (yasal disclaimer kapsamindaki tahmin)",
      example:
        "Before I begin, I'll remind you that today's call contains forward-looking statements subject to the risks outlined in our 10-K.",
      example_tr:
        "Baslamadan once hatirlatayim: bugunki call 10-K'mizdaki risklere tabi forward-looking statement icermektedir.",
    },
    {
      id: "ex.sc1.12.11",
      type: "speech_shadowing",
      difficulty: 5,
      native_text:
        "For context, our guidance for the next quarter reflects continued top-line momentum, partially offset by deliberate EBITDA margin compression from R&D investment.",
      voice_hint: "female_us",
      tr_hint:
        "CFO guidance cumlesi. 'Deliberate margin compression' = bilincli daralma (gecici degil savunma kelimesi). Olcumlu, defansif olmayan ton.",
    },
    {
      id: "ex.sc1.12.12",
      type: "spot_mistake",
      difficulty: 5,
      incorrect_sentence:
        "Our top-line growth is amazing, our EBITDA is going down a lot, but trust me everything will be fine next year.",
      correct_sentence:
        "Top-line growth came in at 22% year-over-year, with 120 basis points of EBITDA margin compression attributable to elevated R&D. Our guidance for the next quarter reflects continued momentum and disciplined cost management.",
      tr_explanation:
        "'Amazing / trust me / fine' = retail investor dili, sell-side analist tarafindan tehlikeli yorumlanir. CFO register: spesifik rakam (22%, 120 bps), 'attributable to' (drivers nedensellik), 'reflects / disciplined' (forward-looking kontrolu). Earnings call'da kelime secimi = sermaye maliyeti.",
    },
  ],
};

// ============================================================
// 13 — Legal: contract negotiation
// ============================================================
export const specC1Lesson_13: BundledLesson = {
  id: "professional.c1.spec-contract.1",
  skill_id: "professional.c1.spec-contract",
  index: 13,
  title: "Legal — Contract Negotiation",
  description:
    "Commercial contract redlining. Push back on an aggressive indemnification clause, hedge under privilege, and move toward standard terms without ceding leverage.",
  estimated_minutes: 12,
  exercises: [
    {
      id: "ex.sc1.13.1",
      type: "vocab_tile",
      difficulty: 5,
      word_or_phrase: "indemnification clause",
      tr_translation: "Tazminat / sorumluluk ustlenme maddesi",
      example:
        "The indemnification clause as drafted is broader than we can accept — it would have us indemnifying for third-party claims well outside our control.",
      example_tr:
        "Mevcut sekliyle indemnification clause kabul edebileceğimizden gen̄is — kontrolumuz disindaki ucuncu sahis taleplerinden bizi sorumlu tutuyor.",
    },
    {
      id: "ex.sc1.13.2",
      type: "vocab_tile",
      difficulty: 5,
      word_or_phrase: "without prejudice",
      tr_translation: "Haklarimizi sakli tutarak / on yargisiz (sonraki yargi sureclerinde aleyhe kullanilamaz)",
      example:
        "Without prejudice to our position on Section 9, we'd be open to discussing a mutual cap on liability.",
      example_tr:
        "Bolum 9'daki pozisyonumuza halel getirmeksizin, karsilikli bir sorumluluk tavani uzerinde gorusmeye aciğiz.",
    },
    {
      id: "ex.sc1.13.3",
      type: "vocab_tile",
      difficulty: 5,
      word_or_phrase: "subject to standard terms",
      tr_translation: "Standart sartlara tabi (sirketin tipik sablon hukumlerine uyumlu olmasi kosuluyla)",
      example:
        "We'd be willing to proceed on that price point, subject to our standard terms on data processing and audit rights.",
      example_tr:
        "Veri isleme ve denetim haklari konularinda standart sartlarimiza tabi olmak kaydiyla bu fiyat noktasinda ilerleyebiliriz.",
    },
    {
      id: "ex.sc1.13.4",
      type: "translate",
      difficulty: 5,
      direction: "tr_to_en",
      source:
        "Bu sekliyle indemnification clause'una karsi cikariz — ucuncu sahis taleplerini kapsam disinda tutmamiz gerekiyor.",
      target:
        "We'd push back on the indemnification clause as drafted — we'd need to carve out third-party claims.",
      accepted_variants: [
        "We can't accept the indemnification clause in its current form — third-party claims need to be carved out.",
        "We'll have to redline the indemnification provision — we'd want a carve-out for third-party claims.",
        "The indemnification language as written is outside what we can sign — we'd need to scope out third-party claims.",
        "We'd flag the indemnification clause for revision — a carve-out for third-party claims is required.",
      ],
      tr_hint:
        "'Push back / carve out / redline' = anlasma muzakeresi standart fiilleri. 'As drafted / as written / in its current form' = saglam itiraz cercevesi.",
    },
    {
      id: "ex.sc1.13.5",
      type: "translate",
      difficulty: 5,
      direction: "tr_to_en",
      source:
        "Karsilikli sorumluluk tavanini soz konusu bedeller paralelinde 12 aylik ucret toplamiyla sinirlamayi onerelim.",
      target:
        "We'd propose a mutual liability cap limited to the aggregate fees paid in the preceding twelve months.",
      accepted_variants: [
        "Our proposal would be a mutual cap on liability tied to the twelve months of fees paid prior.",
        "We'd suggest capping liability mutually at the total fees paid in the prior twelve-month period.",
        "We'd land on a mutual liability cap equal to the trailing twelve months of fees.",
        "We'd anchor the liability cap mutually to the aggregate twelve-month fees paid.",
      ],
      tr_hint:
        "'Mutual liability cap' = karsilikli sorumluluk tavani. 'Aggregate fees paid in the preceding twelve months' = hukuki standart formul. 'Tied to / anchored to' senior kalip.",
    },
    {
      id: "ex.sc1.13.6",
      type: "fill_blank",
      difficulty: 5,
      sentence_template:
        "Without ___ to our position on the IP clause, we'd consider a narrower indemnification scope.",
      answer: "prejudice",
      distractors: ["objection", "exception", "reservation", "qualification"],
      tr_hint:
        "'Without prejudice to' = pozisyonu koruyarak gorusmeye aciklik. Hukuki standart kalip. Sonraki yargi suresinde aleyhe kullanilamaz.",
    },
    {
      id: "ex.sc1.13.7",
      type: "spot_mistake",
      difficulty: 5,
      incorrect_sentence:
        "Your contract is unfair and we will not sign it unless you change everything.",
      correct_sentence:
        "We'd push back on three provisions in particular — the indemnification scope, the liability cap, and the audit rights. Without prejudice to our broader position, we'd be open to closing on the commercial terms subject to standard language on those points.",
      tr_explanation:
        "'Unfair / change everything' = muzakere kapatir, leverage kaybi. Hukuk muzakere dili: spesifik madde adlandirma (uc tane), 'without prejudice' (hak korumasi), 'subject to standard language' (cikis yolu acik). Genis itiraz degil, hedefli redline.",
    },
    {
      id: "ex.sc1.13.8",
      type: "pronounce_phrase",
      difficulty: 5,
      phrase:
        "Without prejudice to our position, we'd be open to a mutual liability cap subject to standard terms.",
      ipa: "wɪˈðaʊt ˈprɛdʒəˌdɪs tuː ˈɑːr pəˈzɪʃən",
      tr_hint:
        "Hukuk muzakere acilisi. 'Without prejudice' /wɪˈðaʊt ˈprɛdʒəˌdɪs/. Olcumlu, profesyonel, alttan tavizsiz. 'Subject to' vurgulu.",
    },
    {
      id: "ex.sc1.13.9",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Sirket avukatisin / commercial lead'sin. Buyuk muşteri MSA (master services agreement) muzakeresi. Karsi taraf agresif bir indemnification clause + uncapped liability getirdi. Standart sartlara cekmen lazim, deal'i kaybetmeden.",
      npc_role: "Counterparty's General Counsel",
      setting: "MSA redline negotiation call",
      turns: [
        {
          speaker: "npc",
          message:
            "Thanks for the redlines. Our position on Section 9 is firm — we expect broad indemnification given the nature of the engagement.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(push back|redline|cannot accept|cant sign)",
            "(indemnification|section 9)",
            "(as drafted|as written|in its current form)",
            "(carve.?out|narrow|scope)",
          ],
          hint_tr:
            "Pozisyonu net koy: 'as drafted' kabul edilemez, ucuncu sahis taleplerini carve out etmek gerek. Saldiri degil, hedefli madde itirazi.",
        },
        {
          speaker: "npc",
          message:
            "We've signed this language with comparable vendors. What specifically is the concern?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(third.?party|gross negligence|wilful misconduct)",
            "(outside our control|beyond our reasonable)",
            "(disproportionate|unbounded|uncapped)",
            "(specific|carve.?out|limited to)",
          ],
          hint_tr:
            "Spesifik endise: ucuncu sahis kaynakli, kontrol disi taleplere genis indemnification disproportionate. Carve-out talep et: 'limited to claims arising from our gross negligence or wilful misconduct'.",
        },
        {
          speaker: "npc",
          message:
            "We can't go uncapped on our side either. If we agree to a cap, where do you land?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(mutual (cap|liability))",
            "(aggregate fees|twelve months?|trailing|preceding)",
            "(carve.?out|excluding) .{0,40}(ip|confidentiality|gross negligence)",
            "(without prejudice|subject to)",
          ],
          hint_tr:
            "Mutual cap teklif: aggregate fees paid in preceding 12 months. Carve-out adlandir: IP infringement, breach of confidentiality, gross negligence. 'Without prejudice' ile pozisyonu koru.",
        },
        {
          speaker: "npc",
          message:
            "Twelve months is light. We'd want twenty-four, and uncapped on IP and confidentiality.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(meet.{0,5}(in the )?middle|land on|move to)",
            "(eighteen months?|1\\.5x|aggregate)",
            "(agree(d|able)? .{0,20}(uncapped|carve.?out) .{0,20}(ip|confidentiality))",
            "(reciprocal|symmetric)",
          ],
          hint_tr:
            "Orta yol: 18 ay veya 1.5x fees. IP + confidentiality carve-out'larini kabul et — bu standart. Reciprocal/symmetric vurgula.",
        },
        {
          speaker: "npc",
          message:
            "On Section 12, the audit rights. We're asking for quarterly with 48-hour notice.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(subject to (our )?standard terms|standard language)",
            "(annual|once.{0,5}per.{0,5}year|reasonable)",
            "(reasonable notice|thirty days|business days)",
            "(business hours|non.?disruptive)",
          ],
          hint_tr:
            "Standart terms'e cek: yillik denetim, 30 takvim gunu yazili bildirim, mesai saatleri, non-disruptive. 'Subject to standard terms' kalibi.",
        },
        {
          speaker: "npc",
          message:
            "Off-the-record — how much room do you actually have on the indemnification scope? Our commercial team is leaning on us.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(off.?the.?record|without prejudice|privilege)",
            "(im not able to|i can'?t|cannot)",
            "(formal|in (the )?document|on paper)",
            "(consult|come back|circle back)",
          ],
          hint_tr:
            "Kayit disi tuzaga girme. 'Without prejudice / privileged' cercevesi, formal pozisyonu sadece dokumanda. 'Let me circle back with my team' kapanis.",
        },
        {
          speaker: "npc",
          message:
            "Understood. Let's get a fresh redline by Thursday and aim to close next week.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thursday|by .{0,10}thursday|end of week)",
            "(turn (around|it)|fresh redline|clean version)",
            "(close|sign|execute) .{0,15}(next week|monday|tuesday)",
            "(thanks|appreciate)",
          ],
          hint_tr:
            "Profesyonel kapanis: 'We'll have a fresh redline back by Thursday — happy to aim for execution early next week.' Spesifik gun + commitment.",
        },
      ],
    },
    {
      id: "ex.sc1.13.10",
      type: "vocab_tile",
      difficulty: 5,
      word_or_phrase: "carve-out",
      tr_translation: "Istisna / kapsam disi birakma (madde kapsamindan cikarilan ozel durum)",
      example:
        "We'd want a carve-out for claims arising from the customer's own gross negligence.",
      example_tr:
        "Musterinin agir ihmalinden kaynaklanan taleplere yonelik bir carve-out talep ederdik.",
    },
    {
      id: "ex.sc1.13.11",
      type: "speech_shadowing",
      difficulty: 5,
      native_text:
        "Without prejudice to our broader position, we'd be open to a mutual liability cap subject to standard terms — provided IP and confidentiality remain carved out.",
      voice_hint: "female_us",
      tr_hint:
        "Hukuk muzakere ozeti. 'Without prejudice to our broader position' = genis pozisyonumuza halel getirmeksizin. 'Carved out' = kapsam disi tutulan. Olcumlu, tavizsiz.",
    },
    {
      id: "ex.sc1.13.12",
      type: "spot_mistake",
      difficulty: 5,
      incorrect_sentence:
        "Okay, fine, we agree to your indemnification clause as you wrote it, we just want to sign the contract quickly.",
      correct_sentence:
        "Without prejudice to our position on the scope, we'd be open to closing on the commercial terms — provided the indemnification is narrowed to claims arising from our gross negligence or wilful misconduct, and subject to our standard terms on liability.",
      tr_explanation:
        "'Fine, we agree, sign quickly' = leverage'in tamami carsiya cikar, ileride pricey hata. Hukuki muzakere dili: 'without prejudice' (hak korumasi), 'provided / subject to' (sartli kabul), 'narrowed to gross negligence or wilful misconduct' (spesifik carve-out). Acele = pahaliya patlar.",
    },
  ],
};

// ============================================================
// 14 — Medical: case presentation
// ============================================================
export const specC1Lesson_14: BundledLesson = {
  id: "professional.c1.spec-medcase.1",
  skill_id: "professional.c1.spec-medcase",
  index: 14,
  title: "Medical — Case Presentation",
  description:
    "Morning rounds case presentation. Open with presenting symptoms, build a differential diagnosis, defend why a finding is clinically significant, and propose a workup.",
  estimated_minutes: 12,
  exercises: [
    {
      id: "ex.sc1.14.1",
      type: "vocab_tile",
      difficulty: 5,
      word_or_phrase: "presenting symptoms",
      tr_translation: "Basvuru semptomlari (hastanin ilk muracaatindaki sikayetler)",
      example:
        "The patient's presenting symptoms were acute-onset epigastric pain radiating to the back, nausea, and a low-grade fever.",
      example_tr:
        "Hastanin presenting symptoms'i sirta yayilan akut baslangicli epigastrik agri, bulanti ve hafif ateşti.",
    },
    {
      id: "ex.sc1.14.2",
      type: "vocab_tile",
      difficulty: 5,
      word_or_phrase: "differential diagnosis",
      tr_translation: "Ayirici tani (semptomlari aciklayabilecek aday tanilar listesi)",
      example:
        "My differential diagnosis includes acute pancreatitis, perforated ulcer, and inferior MI — I'd rule out cardiac first given the risk profile.",
      example_tr:
        "Ayirici tanimda akut pankreatit, perfore ulser ve inferior MI var — risk profili nedeniyle once kardiyaki dislama yaparim.",
    },
    {
      id: "ex.sc1.14.3",
      type: "vocab_tile",
      difficulty: 5,
      word_or_phrase: "clinically significant",
      tr_translation: "Klinik olarak anlamli (hasta yonetimini etkileyebilecek duzeyde)",
      example:
        "The lipase elevation is clinically significant — it's three times the upper limit of normal and supports pancreatitis.",
      example_tr:
        "Lipaz yuksekligi clinically significant — normalin ust sinirinin uc kati ve pankreatiti destekliyor.",
    },
    {
      id: "ex.sc1.14.4",
      type: "translate",
      difficulty: 5,
      direction: "tr_to_en",
      source:
        "Hasta sirta yayilan akut epigastrik agri ile basvurdu; ayirici tanida pankreatit, perfore ulser ve inferior MI'yi dusunuyorum.",
      target:
        "The patient presented with acute epigastric pain radiating to the back; my differential includes pancreatitis, perforated ulcer, and inferior MI.",
      accepted_variants: [
        "Presenting symptoms are acute-onset epigastric pain radiating to the back — the differential I'd build is pancreatitis, perforated ulcer, and inferior MI.",
        "The patient came in with acute epigastric pain radiating posteriorly; I'd put pancreatitis, perforated peptic ulcer, and inferior MI on the differential.",
        "Acute epigastric pain radiating to the back on presentation — differential diagnosis: pancreatitis, perforated ulcer, inferior MI.",
        "On presentation, the patient had acute epigastric pain radiating to the back; differential is pancreatitis, perforated ulcer, and inferior wall MI.",
      ],
      tr_hint:
        "Vaka sunumu acilisi: 'presented with' + presenting symptom + 'differential includes' kalibi. Sira: semptom -> differential. Senior register: 'inferior MI' / 'perforated ulcer'.",
    },
    {
      id: "ex.sc1.14.5",
      type: "translate",
      difficulty: 5,
      direction: "tr_to_en",
      source:
        "Lipaz duzeyindeki yukseliş klinik olarak anlamli — normalin uc kati ve pankreatiti destekliyor.",
      target:
        "The lipase elevation is clinically significant — it's three times the upper limit of normal and supports pancreatitis.",
      accepted_variants: [
        "Lipase is clinically significant at roughly three times the upper limit of normal — consistent with pancreatitis.",
        "The lipase elevation is clinically meaningful — three-fold over the upper limit, supporting a diagnosis of pancreatitis.",
        "Clinically, the lipase is significant — it's at three times the upper limit, in keeping with pancreatitis.",
        "Lipase at three times the upper limit of normal is clinically significant and supports pancreatitis as the leading diagnosis.",
      ],
      tr_hint:
        "Lab degerini cerceve: 'X times the upper limit of normal' kalibi. 'Supports / consistent with / in keeping with' = klinik korelasyon dili. 'Clinically significant' anahtarsoz.",
    },
    {
      id: "ex.sc1.14.6",
      type: "fill_blank",
      difficulty: 5,
      sentence_template:
        "My ___ diagnosis includes acute pancreatitis, perforated ulcer, and inferior MI.",
      answer: "differential",
      distractors: ["definitive", "primary", "tentative", "preliminary"],
      tr_hint:
        "'Differential diagnosis' = standart vaka sunumu terimi. Tek tani degil, aday liste. 'Definitive / primary' baska anlamlarda kullanilir.",
    },
    {
      id: "ex.sc1.14.7",
      type: "spot_mistake",
      difficulty: 5,
      incorrect_sentence:
        "The patient is sick with stomach pain so we think it is the stomach problem and we will give some medicine.",
      correct_sentence:
        "The patient presented with acute-onset epigastric pain radiating to the back. My differential includes pancreatitis, perforated ulcer, and inferior MI — I'd start with an ECG and a lipase to narrow it, given how clinically significant a missed cardiac diagnosis would be.",
      tr_explanation:
        "'Sick with stomach pain / stomach problem / some medicine' = laypereson dili, attending'in karsisinda guvenilirligi yer eder. Tibbi sunum: 'presented with' + spesifik anatomik dil ('epigastric, radiating to the back'), differential listesi, workup gerekcesi ('to narrow it'), miss riski ('clinically significant a missed diagnosis').",
    },
    {
      id: "ex.sc1.14.8",
      type: "pronounce_phrase",
      difficulty: 5,
      phrase:
        "My differential diagnosis includes pancreatitis, perforated ulcer, and inferior MI.",
      ipa: "maɪ ˌdɪfəˈrɛnʃəl ˌdaɪəɡˈnoʊsɪs ɪnˈkluːdz ˌpæŋkriəˈtaɪtɪs",
      tr_hint:
        "Rounds sunumu. 'Differential' /ˌdɪfəˈrɛnʃəl/, 'pancreatitis' /ˌpæŋkriəˈtaɪtɪs/ (kelime sonu -taɪtɪs vurgulu). Kararli, sirayla.",
    },
    {
      id: "ex.sc1.14.9",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Internal medicine residentisin. Sabah rounds, attending karsisindasin. 58 yas erkek hasta, acil servisten yeni yatti: sirta yayilan akut epigastrik agri, bulanti, lipaz 3x normal ust sinir. Vakayi sun, ayirici taniyi savun, workup'i oner.",
      npc_role: "Attending Physician",
      setting: "Internal medicine morning rounds, bedside",
      turns: [
        {
          speaker: "npc",
          message:
            "Alright, give me the bullet on bed 12 — keep it tight.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(58.?year.?old|male|m)",
            "(presented with|presenting (with|symptoms?))",
            "(acute|epigastric|radiating)",
            "(differential|workup|admitted)",
          ],
          hint_tr:
            "Bullet acilisi: yas/cins, presented with + presenting symptoms, kisa differential, admit nedeni. 'Keep it tight' = 30 saniyede.",
        },
        {
          speaker: "npc",
          message:
            "Walk me through your differential. Top three — what's leading, what would you not miss?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(leading|most likely|top)",
            "(pancreatitis|lipase|three .{0,10}upper limit)",
            "(not (miss|to miss)|cant miss|life.?threatening)",
            "(inferior mi|cardiac|aortic|perforated)",
          ],
          hint_tr:
            "Leading: pancreatitis (lipaz 3x). Not-miss tanilar: inferior MI, aortic catastrophe, perforated viscus. Risk profili nedeniyle cardiac dislama once.",
        },
        {
          speaker: "npc",
          message:
            "What in the workup tells you the lipase elevation is clinically significant rather than incidental?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(three.?(times|fold)|3x|upper limit)",
            "(clinical (correlation|context|picture)|consistent with)",
            "(presentation|symptoms?|fits)",
            "(specific|sensitive|amylase)",
          ],
          hint_tr:
            "3x ust sinir + klinik resme uyum (epigastrik agri, sirta yayilan, bulanti). Lipaz pankreatit icin sensitif + spesifik. 'Clinical correlation' anahtarsoz.",
        },
        {
          speaker: "npc",
          message:
            "If it's pancreatitis, etiology? Don't say 'gallstones or alcohol' and walk away.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(gallstones|alcohol|hypertriglyceridemia|medications?|post.?ercp|idiopathic)",
            "(ultrasound|rus|right upper quadrant)",
            "(history|social|medication list)",
            "(triglycerides?|calcium|iga)",
          ],
          hint_tr:
            "Etiology workup: RUQ ultrasound (gallstones), alcohol history, medication review, triglycerides, kalsiyum, IgG4 (otoimmun). Sadece iki sebepten ote.",
        },
        {
          speaker: "npc",
          message:
            "Severity stratification? How are you triaging this?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(bisap|ranson|apache|severity score)",
            "(sirs|organ failure|hemodynamic)",
            "(fluid resuscitation|crystalloid|ringer)",
            "(icu|step.?down|monitored bed)",
          ],
          hint_tr:
            "Severity: BISAP veya Ranson skoru, SIRS kriterleri, organ disfonksiyonu. Aggressive fluid resuscitation (Ringer's lactate). Severity'e gore step-down / ICU.",
        },
        {
          speaker: "npc",
          message:
            "What would change your mind toward the inferior MI?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(ecg|ekg|st elevation|reciprocal)",
            "(troponin|cardiac biomarkers?)",
            "(ii.{0,5}iii.{0,5}avf|inferior leads?)",
            "(rule out|workup|cath)",
          ],
          hint_tr:
            "Mind-change kriteri: ECG'de II/III/aVF ST elevasyonu, reciprocal change, troponin yuksekligi. Kardiyoloji konsultasyonu, cath lab.",
        },
        {
          speaker: "npc",
          message:
            "Plan for the next 24 hours?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(npo|bowel rest)",
            "(iv fluids?|ringer|crystalloid|aggressive)",
            "(serial (exams?|labs|abdominal))",
            "(pain (control|management)|analgesia)",
            "(reassess|trend)",
          ],
          hint_tr:
            "24 saat plan: NPO + aggressive IV resuscitation, pain control, serial abdominal exams, trend labs (lipaz, kreatinin, hematokrit, kalsiyum). Reassess severity.",
        },
        {
          speaker: "npc",
          message:
            "Good. Make sure the ECG is on the chart before I see the patient.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|will do|on it)",
            "(ecg|ekg|on the chart|order)",
            "(thanks|appreciate)",
          ],
          hint_tr:
            "Kisa, net kapanis: 'Will do — ECG already ordered, I'll make sure it's on the chart.'",
        },
      ],
    },
    {
      id: "ex.sc1.14.10",
      type: "vocab_tile",
      difficulty: 5,
      word_or_phrase: "rule out",
      tr_translation: "Olasilik disi birakmak / dislama yapmak (tani aday listesinden cikarmak)",
      example:
        "Given the risk profile, I'd rule out an inferior MI first with an ECG and troponin before committing to a GI workup.",
      example_tr:
        "Risk profili goz onunde tutuldugunda, GI workup'a baslamadan once ECG ve troponin ile once inferior MI'yi dislardim.",
    },
    {
      id: "ex.sc1.14.11",
      type: "speech_shadowing",
      difficulty: 5,
      native_text:
        "For context, the lipase is three times the upper limit of normal — clinically significant, and consistent with the presenting symptoms of acute pancreatitis.",
      voice_hint: "male_us",
      tr_hint:
        "Rounds savunmasi. 'Three times the upper limit of normal' kalibi. 'Consistent with' = klinik korelasyon. Olcumlu, kararli, hipotezi data'ya bagliyor.",
    },
    {
      id: "ex.sc1.14.12",
      type: "spot_mistake",
      difficulty: 5,
      incorrect_sentence:
        "I think maybe the patient has pancreas problem, the lab number is high, probably we will give pain medicine and see what happens.",
      correct_sentence:
        "The patient presented with acute-onset epigastric pain radiating to the back. Lipase is three times the upper limit of normal, which is clinically significant and consistent with acute pancreatitis. My differential still includes inferior MI and perforated ulcer — I'd rule out cardiac with an ECG and troponin before committing to the GI pathway.",
      tr_explanation:
        "'Pancreas problem / high lab number / see what happens' = belirsiz, lay dil, attending'de guvensizlik isareti. Tibbi sunum: 'presented with' + spesifik anatomi, lipaz '3x upper limit of normal' + 'clinically significant' + 'consistent with', differential acik tutma, dislama plani. Belirsizlik degil, yapilandirilmis muhakeme.",
    },
  ],
};

// ============================================================
// Registry
// ============================================================
export const specializedC1Lessons: BundledLesson[] = [
  specC1Lesson_1,
  specC1Lesson_2,
  specC1Lesson_3,
  specC1Lesson_4,
  specC1Lesson_5,
  specC1Lesson_6,
  specC1Lesson_7,
  specC1Lesson_8,
  specC1Lesson_9,
  specC1Lesson_10,
  specC1Lesson_11,
  specC1Lesson_12,
  specC1Lesson_13,
  specC1Lesson_14,
];
