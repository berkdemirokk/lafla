// Grammar Tips — 10-second dismissible pop-ups.
// 30 high-frequency grammar pain points for Turkish learners of English.
// Surfaced throughout the app (lesson interstitials, post-mistake nudges, daily review).

import type { CefrLevel } from "./scenes";

export interface GrammarTip {
  id: string;
  topic_tr: string;
  short_tr: string;
  example_wrong: string;
  example_right: string;
  example_tr: string;
  level: CefrLevel;
}

export const grammarTips: GrammarTip[] = [
  {
    id: "tip.present-perfect-since-for",
    topic_tr: "Present Perfect — 'since' vs 'for'",
    short_tr:
      "Süre devam ediyorsa: 'for + süre' (for 3 years), 'since + nokta tarih' (since 2020). 'Since 3 years' YANLIŞ.",
    example_wrong: "I am working here since 3 years.",
    example_right: "I have been working here for 3 years.",
    example_tr: "3 yıldır burada çalışıyorum.",
    level: "B1",
  },
  {
    id: "tip.articles-a-an",
    topic_tr: "Belirsiz tanımlık — a vs an",
    short_tr:
      "Sesli HARFLE değil, sesli SES ile belirlenir: 'an hour' (h okunmuyor), 'a university' (yu sesi).",
    example_wrong: "I waited a hour for a university interview.",
    example_right: "I waited an hour for a university interview.",
    example_tr: "Üniversite mülakatı için bir saat bekledim.",
    level: "A2",
  },
  {
    id: "tip.the-definite-article",
    topic_tr: "Belirli tanımlık — 'the' eksikliği",
    short_tr:
      "Türkçede 'the' yok, atlanır. Spesifik/tek olan şeyde zorunlu: 'the sun', 'the manager', 'the meeting room'.",
    example_wrong: "I sent email to manager about meeting.",
    example_right: "I sent the email to the manager about the meeting.",
    example_tr: "E-postayı yöneticiye toplantı hakkında gönderdim.",
    level: "A2",
  },
  {
    id: "tip.no-article-jobs",
    topic_tr: "Meslek söylerken 'a/an'",
    short_tr:
      "Türkçe: 'Mühendisim.' İngilizce: 'I am AN engineer.' Meslek tekilse 'a/an' zorunlu.",
    example_wrong: "I am engineer at a startup.",
    example_right: "I am an engineer at a startup.",
    example_tr: "Bir startup'ta mühendisim.",
    level: "A1",
  },
  {
    id: "tip.do-vs-make",
    topic_tr: "do vs make",
    short_tr:
      "Türkçe 'yapmak' ikisini kapsar. 'Make' = üretmek/yaratmak (make dinner, make a mistake). 'Do' = aktivite (do homework, do yoga).",
    example_wrong: "I will do a coffee and make my homework.",
    example_right: "I will make a coffee and do my homework.",
    example_tr: "Bir kahve yapacağım ve ödevimi yapacağım.",
    level: "A2",
  },
  {
    id: "tip.gerund-after-prepositions",
    topic_tr: "Edattan sonra -ing",
    short_tr:
      "Edattan (in, on, at, of, about, for) sonra fiil GELİYORSA -ing eki şart. 'To go' DEĞİL, 'going'.",
    example_wrong: "I am interested in to learn English.",
    example_right: "I am interested in learning English.",
    example_tr: "İngilizce öğrenmekle ilgileniyorum.",
    level: "B1",
  },
  {
    id: "tip.stop-doing-vs-to-do",
    topic_tr: "stop doing vs stop to do",
    short_tr:
      "'Stop smoking' = sigarayı bırakmak. 'Stop to smoke' = sigara içmek için durmak. Tamamen farklı anlam.",
    example_wrong: "I stopped to smoke last year. (Aslında bırakmak istiyor)",
    example_right: "I stopped smoking last year.",
    example_tr: "Geçen yıl sigarayı bıraktım.",
    level: "B1",
  },
  {
    id: "tip.conditional-1-2",
    topic_tr: "1. vs 2. Conditional",
    short_tr:
      "1. (gerçekçi): If I have time, I'll come. 2. (hayali): If I had time, I would come. 'Would have' ÜÇÜNCÜ koşul içindir.",
    example_wrong: "If I have time tomorrow, I would call you.",
    example_right: "If I have time tomorrow, I will call you.",
    example_tr: "Yarın vaktim olursa seni ararım.",
    level: "B1",
  },
  {
    id: "tip.conditional-3",
    topic_tr: "3. Conditional — geçmiş pişmanlık",
    short_tr:
      "Geçmişte olmadı, hayal: If + past perfect, would have + V3. 'If I knew' DEĞİL, 'If I had known'.",
    example_wrong: "If I knew you were sick, I would call.",
    example_right: "If I had known you were sick, I would have called.",
    example_tr: "Hasta olduğunu bilseydim, seni arardım.",
    level: "B2",
  },
  {
    id: "tip.reported-speech-tense-shift",
    topic_tr: "Reported speech — zaman kayması",
    short_tr:
      "'He said...' sonra zaman bir adım geri: 'I am tired' → 'He said he WAS tired.' Türkçede zaman değişmez, dikkat.",
    example_wrong: "He said he is tired and he will leave.",
    example_right: "He said he was tired and he would leave.",
    example_tr: "Yorgun olduğunu ve gideceğini söyledi.",
    level: "B1",
  },
  {
    id: "tip.say-vs-tell",
    topic_tr: "say vs tell",
    short_tr:
      "'Tell' SOMEONE alır (tell me, tell him). 'Say' kişi almaz veya 'to' ile: say something / say to me. 'Tell to me' YANLIŞ.",
    example_wrong: "He told to me that he was busy.",
    example_right: "He told me that he was busy.",
    example_tr: "Meşgul olduğunu bana söyledi.",
    level: "A2",
  },
  {
    id: "tip.phrasal-give-up",
    topic_tr: "Phrasal verb — give up",
    short_tr:
      "'Give up' = pes etmek/bırakmak. Nesne araya girebilir: 'give it up' veya 'give up smoking'. Sınava girmek 'take an exam'.",
    example_wrong: "Don't give in your dreams.",
    example_right: "Don't give up on your dreams.",
    example_tr: "Hayallerinden vazgeçme.",
    level: "B1",
  },
  {
    id: "tip.phrasal-pick-up",
    topic_tr: "Phrasal verb — pick up",
    short_tr:
      "'Pick up' = almak/uğrayıp almak, telefonu açmak, hızla öğrenmek. 'I'll pick you up at 8' = seni 8'de alacağım.",
    example_wrong: "I will take you from the airport at 8.",
    example_right: "I will pick you up from the airport at 8.",
    example_tr: "Seni havalimanından 8'de alacağım.",
    level: "B1",
  },
  {
    id: "tip.phrasal-look-for-after",
    topic_tr: "look for vs look after vs look at",
    short_tr:
      "Look FOR = aramak. Look AFTER = bakmak (çocuğa). Look AT = bakmak (görsel). Edat anlamı tamamen değiştirir.",
    example_wrong: "I am looking my keys.",
    example_right: "I am looking for my keys.",
    example_tr: "Anahtarlarımı arıyorum.",
    level: "A2",
  },
  {
    id: "tip.modal-must-vs-have-to",
    topic_tr: "must vs have to",
    short_tr:
      "'Must' = içsel zorunluluk/kural. 'Have to' = dış zorunluluk. Geçmişte 'must' yok, 'had to' kullan.",
    example_wrong: "Yesterday I must work late.",
    example_right: "Yesterday I had to work late.",
    example_tr: "Dün geç saate kadar çalışmak zorundaydım.",
    level: "B1",
  },
  {
    id: "tip.modal-should-shouldnt",
    topic_tr: "should — öneri kalıbı",
    short_tr:
      "'Should + V1' (V1 yalın hâl). 'Should to' veya 'should -ing' YOK. 'You should go' (doğru), 'should to go' (yanlış).",
    example_wrong: "You should to call him tomorrow.",
    example_right: "You should call him tomorrow.",
    example_tr: "Yarın onu aramalısın.",
    level: "A2",
  },
  {
    id: "tip.modal-could-might",
    topic_tr: "could vs might",
    short_tr:
      "'Could' = ihtimal/geçmiş yetenek. 'Might' = belki (zayıf ihtimal). 'It might rain' = belki yağar.",
    example_wrong: "Maybe will rain tomorrow.",
    example_right: "It might rain tomorrow.",
    example_tr: "Yarın yağmur yağabilir.",
    level: "B1",
  },
  {
    id: "tip.passive-voice-basic",
    topic_tr: "Passive voice — özne belirsiz",
    short_tr:
      "Kim yaptığı önemsizse: be + V3. 'They made it in Turkey' → 'It WAS MADE in Turkey'. Türkçe 'yapıldı' = passive.",
    example_wrong: "This phone made in China.",
    example_right: "This phone was made in China.",
    example_tr: "Bu telefon Çin'de yapıldı.",
    level: "B1",
  },
  {
    id: "tip.passive-by-agent",
    topic_tr: "Passive — 'by' eki",
    short_tr:
      "Failin önemli olduğu yerde: passive + by + fail. 'Hamlet was written BY Shakespeare.'",
    example_wrong: "Hamlet was written from Shakespeare.",
    example_right: "Hamlet was written by Shakespeare.",
    example_tr: "Hamlet, Shakespeare tarafından yazıldı.",
    level: "B1",
  },
  {
    id: "tip.question-tag-positive",
    topic_tr: "Question tag — pozitif cümle",
    short_tr:
      "Pozitif cümle → negatif tag. 'You're Turkish, AREN'T you?' Türkçe 'değil mi?' tek; İngilizcede fiil ve zamana göre değişir.",
    example_wrong: "You are Turkish, no?",
    example_right: "You are Turkish, aren't you?",
    example_tr: "Türk'sün, değil mi?",
    level: "B1",
  },
  {
    id: "tip.question-tag-negative",
    topic_tr: "Question tag — negatif cümle",
    short_tr:
      "Negatif cümle → pozitif tag. 'You don't smoke, DO you?' Negatifte tag pozitif olur.",
    example_wrong: "You don't smoke, don't you?",
    example_right: "You don't smoke, do you?",
    example_tr: "Sigara içmiyorsun, değil mi?",
    level: "B1",
  },
  {
    id: "tip.adjective-order",
    topic_tr: "Sıfat sıralaması",
    short_tr:
      "Sıra: opinion > size > age > shape > color > origin > material. 'Big old Turkish wooden table' (doğru sıra).",
    example_wrong: "I bought a Turkish nice big carpet.",
    example_right: "I bought a nice big Turkish carpet.",
    example_tr: "Güzel büyük bir Türk halısı aldım.",
    level: "B1",
  },
  {
    id: "tip.adverb-placement",
    topic_tr: "Sıklık zarfı yeri",
    short_tr:
      "always, never, often, sometimes: be fiilinden SONRA, diğer fiillerden ÖNCE gelir. 'I always am late' YANLIŞ.",
    example_wrong: "I always am late for meetings.",
    example_right: "I am always late for meetings.",
    example_tr: "Toplantılara hep geç kalırım.",
    level: "A2",
  },
  {
    id: "tip.word-order-sov-svo",
    topic_tr: "Kelime sırası — SVO",
    short_tr:
      "Türkçe: özne-nesne-fiil (SOV). İngilizce: özne-fiil-nesne (SVO). 'I book read' YANLIŞ; 'I read a book' doğru.",
    example_wrong: "I yesterday a book read.",
    example_right: "I read a book yesterday.",
    example_tr: "Dün bir kitap okudum.",
    level: "A1",
  },
  {
    id: "tip.past-vs-present-perfect",
    topic_tr: "Past simple vs Present perfect",
    short_tr:
      "Belli zaman var (yesterday, last week) → past simple. Zaman belirsiz / şimdiyi etkiliyor → present perfect.",
    example_wrong: "I have seen him yesterday.",
    example_right: "I saw him yesterday.",
    example_tr: "Onu dün gördüm.",
    level: "B1",
  },
  {
    id: "tip.been-vs-gone",
    topic_tr: "have been vs have gone",
    short_tr:
      "'Been to' = gidip dönmüş. 'Gone to' = gitti, hâlâ orada. 'She has GONE to Paris' (Paris'te), 'BEEN to Paris' (gitmiş, dönmüş).",
    example_wrong: "I have gone to London three times.",
    example_right: "I have been to London three times.",
    example_tr: "Londra'ya üç kez gittim.",
    level: "B1",
  },
  {
    id: "tip.much-many-a-lot",
    topic_tr: "much / many / a lot of",
    short_tr:
      "Çoğul sayılabilir → many. Sayılamayan → much. Pozitif cümlede ikisi de kulağa garip — 'a lot of' kullan.",
    example_wrong: "I have much friends in Istanbul.",
    example_right: "I have a lot of friends in Istanbul.",
    example_tr: "İstanbul'da çok arkadaşım var.",
    level: "A2",
  },
  {
    id: "tip.in-on-at-time",
    topic_tr: "in / on / at — zaman",
    short_tr:
      "AT saat (at 5pm). ON gün (on Monday). IN ay/yıl/dönem (in May, in 2026, in the morning).",
    example_wrong: "I have a meeting in Monday at the morning.",
    example_right: "I have a meeting on Monday in the morning.",
    example_tr: "Pazartesi sabah toplantım var.",
    level: "A2",
  },
  {
    id: "tip.its-vs-it-is",
    topic_tr: "its vs it's",
    short_tr:
      "'It's' = it is/has. 'Its' = onun (iyelik). 'The dog wagged its tail' (apostrofsuz iyelik).",
    example_wrong: "The cat licked it's paw.",
    example_right: "The cat licked its paw.",
    example_tr: "Kedi pençesini yaladı.",
    level: "A2",
  },
  {
    id: "tip.fun-vs-funny",
    topic_tr: "fun vs funny",
    short_tr:
      "'Fun' = eğlenceli/keyifli (aktivite). 'Funny' = komik (güldüren) veya garip. Parti FUN, şaka FUNNY.",
    example_wrong: "The party was funny — we danced all night.",
    example_right: "The party was fun — we danced all night.",
    example_tr: "Parti çok eğlenceliydi — bütün gece dans ettik.",
    level: "B1",
  },
];

export function getGrammarTip(id: string): GrammarTip | undefined {
  return grammarTips.find((t) => t.id === id);
}
