// Listening Mode dramas — TTS-driven audio comprehension content for Lafla.
// 15 short dialogues across CEFR A1 → C1.
// Each drama: setup vocab → audio (TTS-rendered from `lines`) → 3-5 questions.
//
// Voice hints map to TTS voices on the client; the speaker label is shown
// in the transcript. Do not edit lessons.ts or scenes.ts to wire these up.

// ============================================================
// Types
// ============================================================
export interface ListeningLine {
  speaker: string;
  voice_hint?: "male_us" | "female_us" | "male_uk" | "female_uk" | "neutral";
  text: string;
}

export interface ListeningQuestion {
  question_tr: string;
  question_en: string;
  options: string[];
  correct_index: number;
  tr_explanation: string;
}

export interface ListeningDrama {
  id: string;
  title: string;
  description: string;
  emoji: string;
  cefrLevel: "A1" | "A2" | "B1" | "B2" | "C1";
  durationSec: number;
  lines: ListeningLine[];
  vocab_preview: { en: string; tr: string }[];
  questions: ListeningQuestion[];
  transcript_visible: boolean;
}

// ============================================================
// A1 — 2 dramas
// ============================================================

const cafeEncounter: ListeningDrama = {
  id: "listen.cafe-encounter.a1",
  title: "Kafede Basit Sipariş",
  description:
    "Sarah bir kafede kahve sipariş ediyor. Kısa cümleler, net sorular.",
  emoji: "☕",
  cefrLevel: "A1",
  durationSec: 35,
  vocab_preview: [
    { en: "small / medium / large", tr: "küçük / orta / büyük" },
    { en: "for here", tr: "burada içeceğim" },
    { en: "to go", tr: "paket" },
    { en: "card or cash", tr: "kart mı, nakit mi" },
  ],
  lines: [
    { speaker: "Barista", voice_hint: "female_us", text: "Hi! What can I get you?" },
    { speaker: "Sarah", voice_hint: "female_uk", text: "Hi. One coffee, please." },
    { speaker: "Barista", voice_hint: "female_us", text: "Small, medium, or large?" },
    { speaker: "Sarah", voice_hint: "female_uk", text: "Medium, please." },
    { speaker: "Barista", voice_hint: "female_us", text: "For here or to go?" },
    { speaker: "Sarah", voice_hint: "female_uk", text: "To go." },
    { speaker: "Barista", voice_hint: "female_us", text: "Okay. That's four dollars. Card or cash?" },
    { speaker: "Sarah", voice_hint: "female_uk", text: "Card, please." },
    { speaker: "Barista", voice_hint: "female_us", text: "Thank you. Have a nice day!" },
  ],
  questions: [
    {
      question_tr: "Sarah ne sipariş etti?",
      question_en: "What did Sarah order?",
      options: ["Tea", "Coffee", "Water", "Juice"],
      correct_index: 1,
      tr_explanation: "Sarah 'One coffee, please' dedi.",
    },
    {
      question_tr: "Hangi boyutu istedi?",
      question_en: "Which size did she choose?",
      options: ["Small", "Medium", "Large", "Extra large"],
      correct_index: 1,
      tr_explanation: "'Medium, please' = orta boy.",
    },
    {
      question_tr: "Kahveyi nerede içecek?",
      question_en: "Where will she drink it?",
      options: ["Kafede", "Paket — dışarıda", "Evde mutlaka", "Söylemedi"],
      correct_index: 1,
      tr_explanation: "'To go' = paket, dışarıda içeceğim.",
    },
    {
      question_tr: "Nasıl ödedi?",
      question_en: "How did she pay?",
      options: ["Nakit", "Kart", "Apple Pay", "Bedava"],
      correct_index: 1,
      tr_explanation: "Barista 'Card or cash?' diye sordu, Sarah 'Card, please' dedi.",
    },
  ],
  transcript_visible: false,
};

const streetDirections: ListeningDrama = {
  id: "listen.street-directions.a1",
  title: "Sokakta Yol Sormak",
  description:
    "Tom turist. Yerel birine eczaneyi soruyor. Basit yön ifadeleri.",
  emoji: "🗺️",
  cefrLevel: "A1",
  durationSec: 30,
  vocab_preview: [
    { en: "excuse me", tr: "affedersiniz" },
    { en: "go straight", tr: "düz git" },
    { en: "turn left / right", tr: "sola / sağa dön" },
    { en: "next to", tr: "yanında" },
  ],
  lines: [
    { speaker: "Tom", voice_hint: "male_us", text: "Excuse me, where is the pharmacy?" },
    { speaker: "Local", voice_hint: "female_uk", text: "The pharmacy? It's close. Go straight." },
    { speaker: "Tom", voice_hint: "male_us", text: "Straight. Okay." },
    { speaker: "Local", voice_hint: "female_uk", text: "Then turn left at the bank." },
    { speaker: "Tom", voice_hint: "male_us", text: "Left at the bank." },
    { speaker: "Local", voice_hint: "female_uk", text: "Yes. The pharmacy is next to a small park." },
    { speaker: "Tom", voice_hint: "male_us", text: "Thank you very much!" },
    { speaker: "Local", voice_hint: "female_uk", text: "You're welcome." },
  ],
  questions: [
    {
      question_tr: "Tom ne arıyor?",
      question_en: "What is Tom looking for?",
      options: ["Banka", "Park", "Eczane", "Otel"],
      correct_index: 2,
      tr_explanation: "İlk cümle: 'Where is the pharmacy?'",
    },
    {
      question_tr: "Bankada ne yapması gerek?",
      question_en: "What does he do at the bank?",
      options: ["Sağa dön", "Sola dön", "Düz devam et", "Geri dön"],
      correct_index: 1,
      tr_explanation: "'Turn left at the bank' = bankada sola dön.",
    },
    {
      question_tr: "Eczane neyin yanında?",
      question_en: "What is the pharmacy next to?",
      options: ["Büyük bir cafe", "Küçük bir park", "Okul", "Hastane"],
      correct_index: 1,
      tr_explanation: "'Next to a small park' = küçük bir parkın yanında.",
    },
  ],
  transcript_visible: false,
};

// ============================================================
// A2 — 3 dramas
// ============================================================

const supermarketExchange: ListeningDrama = {
  id: "listen.supermarket-exchange.a2",
  title: "Süpermarkette Değişim",
  description:
    "Bir müşteri yanlış aldığı sütü değiştirmek istiyor. Basit sorun çözme.",
  emoji: "🛒",
  cefrLevel: "A2",
  durationSec: 45,
  vocab_preview: [
    { en: "exchange / swap", tr: "değiştirmek" },
    { en: "receipt", tr: "fiş" },
    { en: "expired", tr: "süresi geçmiş" },
    { en: "aisle", tr: "reyon, koridor" },
    { en: "shelf", tr: "raf" },
  ],
  lines: [
    { speaker: "Customer", voice_hint: "male_us", text: "Hi, I bought this milk yesterday but it's expired." },
    { speaker: "Clerk", voice_hint: "female_us", text: "Oh, I'm sorry about that. Do you have your receipt?" },
    { speaker: "Customer", voice_hint: "male_us", text: "Yes, here it is." },
    { speaker: "Clerk", voice_hint: "female_us", text: "Thank you. Would you like to exchange it or get a refund?" },
    { speaker: "Customer", voice_hint: "male_us", text: "I'd like to exchange it, please." },
    { speaker: "Clerk", voice_hint: "female_us", text: "Sure. The milk is in aisle four, on the bottom shelf." },
    { speaker: "Customer", voice_hint: "male_us", text: "Aisle four. Got it." },
    { speaker: "Clerk", voice_hint: "female_us", text: "Please check the date on the new one before you come back." },
    { speaker: "Customer", voice_hint: "male_us", text: "Good idea. Thanks for your help." },
  ],
  questions: [
    {
      question_tr: "Müşterinin sorunu nedir?",
      question_en: "What is the customer's problem?",
      options: ["Sütü bozulmuş", "Süt çok pahalı", "Yanlış marka süt almış", "Süt yetmedi"],
      correct_index: 0,
      tr_explanation: "'It's expired' = süresi geçmiş, bozulmuş.",
    },
    {
      question_tr: "Müşteri ne istiyor?",
      question_en: "What does the customer want?",
      options: ["Para iadesi", "Değişim", "Müdürle konuşmak", "Yeni bir ürün satın almak"],
      correct_index: 1,
      tr_explanation: "Görevli iki seçenek sundu, müşteri 'exchange' dedi.",
    },
    {
      question_tr: "Süt hangi reyonda?",
      question_en: "Which aisle is the milk in?",
      options: ["Reyon 2", "Reyon 3", "Reyon 4", "Reyon 5"],
      correct_index: 2,
      tr_explanation: "'Aisle four' = 4. reyon.",
    },
    {
      question_tr: "Müşteri ne kontrol etmeli?",
      question_en: "What should the customer check?",
      options: ["Fiyatı", "Markayı", "Son kullanma tarihini", "Kapağı"],
      correct_index: 2,
      tr_explanation: "'Check the date' = tarihi kontrol et.",
    },
  ],
  transcript_visible: false,
};

const taxiConversation: ListeningDrama = {
  id: "listen.taxi-conversation.a2",
  title: "Taksi Sohbeti",
  description:
    "Havaalanından otele taksi. Sürücü ve yolcu arasında basit sohbet.",
  emoji: "🚖",
  cefrLevel: "A2",
  durationSec: 50,
  vocab_preview: [
    { en: "drop off", tr: "indirmek" },
    { en: "traffic", tr: "trafik" },
    { en: "around", tr: "civarında, yaklaşık" },
    { en: "keep the change", tr: "üstü kalsın" },
  ],
  lines: [
    { speaker: "Driver", voice_hint: "male_us", text: "Good evening. Where to?" },
    { speaker: "Passenger", voice_hint: "female_uk", text: "The Riverside Hotel, please. Do you know it?" },
    { speaker: "Driver", voice_hint: "male_us", text: "Yes, I know it. It's about twenty minutes from here." },
    { speaker: "Passenger", voice_hint: "female_uk", text: "Is there a lot of traffic right now?" },
    { speaker: "Driver", voice_hint: "male_us", text: "A little, but not too bad. First time in town?" },
    { speaker: "Passenger", voice_hint: "female_uk", text: "Yes. I'm here for a conference." },
    { speaker: "Driver", voice_hint: "male_us", text: "Nice. The weather is great this week." },
    { speaker: "Passenger", voice_hint: "female_uk", text: "I hope so. How much will it be, around?" },
    { speaker: "Driver", voice_hint: "male_us", text: "Around twenty-five dollars." },
    { speaker: "Passenger", voice_hint: "female_uk", text: "Okay. Can you drop me at the main entrance?" },
    { speaker: "Driver", voice_hint: "male_us", text: "Of course. We're almost there." },
  ],
  questions: [
    {
      question_tr: "Yolcu nereye gidiyor?",
      question_en: "Where is the passenger going?",
      options: ["Havaalanı", "Riverside Hotel", "Bir restoran", "Ofis"],
      correct_index: 1,
      tr_explanation: "'The Riverside Hotel, please.'",
    },
    {
      question_tr: "Yolculuk yaklaşık ne kadar sürecek?",
      question_en: "How long is the trip?",
      options: ["10 dakika", "15 dakika", "20 dakika", "30 dakika"],
      correct_index: 2,
      tr_explanation: "'About twenty minutes from here.'",
    },
    {
      question_tr: "Yolcu şehre niye geldi?",
      question_en: "Why is the passenger in town?",
      options: ["Tatil", "Konferans", "Aile ziyareti", "İş görüşmesi"],
      correct_index: 1,
      tr_explanation: "'I'm here for a conference.'",
    },
    {
      question_tr: "Sürücü nerede indirmesini istedi?",
      question_en: "Where does she want to be dropped off?",
      options: ["Otel arkası", "Ana giriş", "Garaj", "Yan kapı"],
      correct_index: 1,
      tr_explanation: "'Drop me at the main entrance' = ana girişte indir.",
    },
  ],
  transcript_visible: false,
};

const doctorVisit: ListeningDrama = {
  id: "listen.doctor-visit.a2",
  title: "Doktor Muayenesi",
  description:
    "Hasta boğaz ağrısı için doktora gidiyor. Belirti tanımlama.",
  emoji: "🩺",
  cefrLevel: "A2",
  durationSec: 55,
  vocab_preview: [
    { en: "sore throat", tr: "boğaz ağrısı" },
    { en: "fever", tr: "ateş" },
    { en: "cough", tr: "öksürük" },
    { en: "prescription", tr: "reçete" },
    { en: "pharmacy", tr: "eczane" },
  ],
  lines: [
    { speaker: "Doctor", voice_hint: "female_us", text: "Hello. What seems to be the problem today?" },
    { speaker: "Patient", voice_hint: "male_us", text: "I have a really bad sore throat." },
    { speaker: "Doctor", voice_hint: "female_us", text: "How long have you had it?" },
    { speaker: "Patient", voice_hint: "male_us", text: "About three days now." },
    { speaker: "Doctor", voice_hint: "female_us", text: "Do you have a fever or a cough?" },
    { speaker: "Patient", voice_hint: "male_us", text: "A little cough, but no fever." },
    { speaker: "Doctor", voice_hint: "female_us", text: "Okay, let me take a look. Open your mouth, please." },
    { speaker: "Patient", voice_hint: "male_us", text: "Ahhh." },
    { speaker: "Doctor", voice_hint: "female_us", text: "It looks red. I'll give you a prescription for some antibiotics." },
    { speaker: "Patient", voice_hint: "male_us", text: "Thank you. Where do I pick it up?" },
    { speaker: "Doctor", voice_hint: "female_us", text: "Any pharmacy. Take one pill twice a day for seven days." },
    { speaker: "Patient", voice_hint: "male_us", text: "Got it. Twice a day, seven days." },
  ],
  questions: [
    {
      question_tr: "Hastanın belirtisi ne?",
      question_en: "What is the patient's symptom?",
      options: ["Baş ağrısı", "Boğaz ağrısı", "Karın ağrısı", "Sırt ağrısı"],
      correct_index: 1,
      tr_explanation: "'A really bad sore throat' = çok kötü boğaz ağrısı.",
    },
    {
      question_tr: "Bu belirti ne zamandır var?",
      question_en: "How long has he had it?",
      options: ["1 gün", "2 gün", "3 gün", "1 hafta"],
      correct_index: 2,
      tr_explanation: "'About three days now.'",
    },
    {
      question_tr: "Hastanın ateşi var mı?",
      question_en: "Does he have a fever?",
      options: ["Evet, çok yüksek", "Evet, hafif", "Hayır", "Bilmiyor"],
      correct_index: 2,
      tr_explanation: "'A little cough, but no fever' = öksürük var, ateş yok.",
    },
    {
      question_tr: "İlacı nasıl alacak?",
      question_en: "How should he take the medicine?",
      options: [
        "Günde 1 kere, 5 gün",
        "Günde 2 kere, 7 gün",
        "Günde 3 kere, 10 gün",
        "İhtiyacı olunca",
      ],
      correct_index: 1,
      tr_explanation: "'One pill twice a day for seven days.'",
    },
  ],
  transcript_visible: false,
};

// ============================================================
// B1 — 4 dramas
// ============================================================

const jobInterview: ListeningDrama = {
  id: "listen.job-interview.b1",
  title: "İş Görüşmesi",
  description:
    "Aday geliştirici pozisyonu için görüşmede. Tipik 'tell me about yourself' formatı.",
  emoji: "💼",
  cefrLevel: "B1",
  durationSec: 80,
  vocab_preview: [
    { en: "background", tr: "geçmiş, özgeçmiş" },
    { en: "responsibility", tr: "sorumluluk" },
    { en: "team player", tr: "takım oyuncusu" },
    { en: "challenge", tr: "zorluk, meydan okuma" },
    { en: "get back to you", tr: "size geri döneceğim" },
  ],
  lines: [
    { speaker: "Interviewer", voice_hint: "female_us", text: "Thanks for coming in today. Could you start by telling me a bit about your background?" },
    { speaker: "Candidate", voice_hint: "male_uk", text: "Of course. I'm a software developer with about four years of experience, mostly in backend Python." },
    { speaker: "Interviewer", voice_hint: "female_us", text: "Great. What's your current role like?" },
    { speaker: "Candidate", voice_hint: "male_uk", text: "I work on payment systems. My main responsibility is making sure transactions are fast and reliable." },
    { speaker: "Interviewer", voice_hint: "female_us", text: "Sounds challenging. Can you tell me about a difficult problem you solved recently?" },
    { speaker: "Candidate", voice_hint: "male_uk", text: "Yes. We had an issue where some payments were timing out under heavy load. I rewrote the queue logic and reduced failures by ninety percent." },
    { speaker: "Interviewer", voice_hint: "female_us", text: "Impressive. Why are you looking to leave your current job?" },
    { speaker: "Candidate", voice_hint: "male_uk", text: "Honestly, I'm looking for more growth. Your team works on bigger systems, and I want that challenge." },
    { speaker: "Interviewer", voice_hint: "female_us", text: "Makes sense. Do you have any questions for me?" },
    { speaker: "Candidate", voice_hint: "male_uk", text: "Yes. What does a typical week look like on this team?" },
    { speaker: "Interviewer", voice_hint: "female_us", text: "Good question. We have two team meetings, lots of focused coding time, and a code review culture." },
    { speaker: "Candidate", voice_hint: "male_uk", text: "Sounds good. Thank you." },
    { speaker: "Interviewer", voice_hint: "female_us", text: "We'll review everything and get back to you by Friday." },
  ],
  questions: [
    {
      question_tr: "Adayın kaç yıllık deneyimi var?",
      question_en: "How many years of experience does the candidate have?",
      options: ["2 yıl", "3 yıl", "4 yıl", "5 yıl"],
      correct_index: 2,
      tr_explanation: "'About four years of experience.'",
    },
    {
      question_tr: "Şu anki işinde ne yapıyor?",
      question_en: "What does he do at his current job?",
      options: [
        "Frontend tasarım",
        "Ödeme sistemleri",
        "Mobil uygulama",
        "Veri analizi",
      ],
      correct_index: 1,
      tr_explanation: "'I work on payment systems.'",
    },
    {
      question_tr: "Hangi sorunu çözdü?",
      question_en: "What problem did he solve?",
      options: [
        "Yavaş veritabanı",
        "Zaman aşımına uğrayan ödemeler",
        "Hatalı kullanıcı kayıtları",
        "Güvenlik açıkları",
      ],
      correct_index: 1,
      tr_explanation: "'Payments were timing out under heavy load.'",
    },
    {
      question_tr: "Niye iş değiştirmek istiyor?",
      question_en: "Why does he want to change jobs?",
      options: [
        "Maaş yetersiz",
        "Yöneticisini sevmiyor",
        "Daha fazla gelişim arıyor",
        "Şehir değiştirecek",
      ],
      correct_index: 2,
      tr_explanation: "'I'm looking for more growth' = daha fazla gelişim arıyorum.",
    },
    {
      question_tr: "Görüşmeci ne zaman geri dönecek?",
      question_en: "When will the interviewer get back?",
      options: ["Yarın", "Pazartesi", "Cuma", "İki hafta içinde"],
      correct_index: 2,
      tr_explanation: "'Get back to you by Friday' = cumaya kadar.",
    },
  ],
  transcript_visible: false,
};

const awkwardPartyTalk: ListeningDrama = {
  id: "listen.awkward-party.b1",
  title: "Partide Tuhaf Sohbet",
  description:
    "Birini ortak bir arkadaşın partisinde tanıyıp tanımadığını çözmeye çalışırken.",
  emoji: "🎉",
  cefrLevel: "B1",
  durationSec: 65,
  vocab_preview: [
    { en: "have we met", tr: "tanışmış mıyız" },
    { en: "ring a bell", tr: "kulağıma tanıdık geliyor" },
    { en: "mutual friend", tr: "ortak arkadaş" },
    { en: "small world", tr: "dünya küçük" },
    { en: "catch up", tr: "yetişmek, sohbet etmek" },
  ],
  lines: [
    { speaker: "Mark", voice_hint: "male_us", text: "Hey, sorry, this is going to sound weird, but have we met before?" },
    { speaker: "Anna", voice_hint: "female_uk", text: "Maybe? You do look familiar, actually." },
    { speaker: "Mark", voice_hint: "male_us", text: "Right? I'm Mark. I came with Julie." },
    { speaker: "Anna", voice_hint: "female_uk", text: "Oh, Julie from the marketing team?" },
    { speaker: "Mark", voice_hint: "male_us", text: "Yeah, that's the one. How do you know her?" },
    { speaker: "Anna", voice_hint: "female_uk", text: "We were roommates at uni. I'm Anna, by the way." },
    { speaker: "Mark", voice_hint: "male_us", text: "Anna — that name rings a bell. Were you at her birthday last year?" },
    { speaker: "Anna", voice_hint: "female_uk", text: "Yes! The Italian place near the river. Now I remember you." },
    { speaker: "Mark", voice_hint: "male_us", text: "Small world. I think we spent twenty minutes arguing about pizza toppings." },
    { speaker: "Anna", voice_hint: "female_uk", text: "Ha, that was probably me. Pineapple on pizza is fine, by the way." },
    { speaker: "Mark", voice_hint: "male_us", text: "Wow. Okay. Maybe we shouldn't catch up after all." },
    { speaker: "Anna", voice_hint: "female_uk", text: "Too late. Get me a drink and let's argue properly." },
  ],
  questions: [
    {
      question_tr: "Mark Julie'yi nereden tanıyor?",
      question_en: "How does Mark know Julie?",
      options: [
        "Birlikte geldiler partiye",
        "Komşular",
        "Eski sevgilisi",
        "Akrabalar",
      ],
      correct_index: 0,
      tr_explanation: "'I came with Julie' = Julie ile birlikte geldim.",
    },
    {
      question_tr: "Anna Julie'yi nereden tanıyor?",
      question_en: "How does Anna know Julie?",
      options: [
        "İş arkadaşları",
        "Çocukluk arkadaşları",
        "Üniversitede oda arkadaşıydılar",
        "Komşular",
      ],
      correct_index: 2,
      tr_explanation: "'We were roommates at uni' = üniversitede oda arkadaşıydık.",
    },
    {
      question_tr: "Daha önce nerede karşılaşmışlar?",
      question_en: "Where did they meet before?",
      options: [
        "Julie'nin doğum gününde",
        "Üniversitede",
        "Bir iş toplantısında",
        "Bir konsere"
      ],
      correct_index: 0,
      tr_explanation: "'Were you at her birthday last year?' = geçen yıl doğum günü.",
    },
    {
      question_tr: "Ne hakkında tartışmışlardı?",
      question_en: "What did they argue about?",
      options: [
        "Politika",
        "Müzik tercihleri",
        "Pizza malzemeleri",
        "Spor takımları",
      ],
      correct_index: 2,
      tr_explanation: "'Arguing about pizza toppings.'",
    },
    {
      question_tr: "Anna'nın pizza üzerine sevdiği şey?",
      question_en: "What does Anna like on pizza?",
      options: ["Sucuk", "Mantar", "Ananas", "Sadece peynir"],
      correct_index: 2,
      tr_explanation: "'Pineapple on pizza is fine.'",
    },
  ],
  transcript_visible: false,
};

const neighborDispute: ListeningDrama = {
  id: "listen.neighbor-dispute.b1",
  title: "Komşu Tartışması",
  description:
    "Geç saatte yapılan gürültü hakkında kibar ama gergin bir konuşma.",
  emoji: "🏠",
  cefrLevel: "B1",
  durationSec: 70,
  vocab_preview: [
    { en: "keep down", tr: "azaltmak (ses)" },
    { en: "thin walls", tr: "ince duvarlar" },
    { en: "weeknight", tr: "hafta içi gece" },
    { en: "appreciate it", tr: "minnettar olurum" },
    { en: "no hard feelings", tr: "kırgınlık yok, gücenmedim" },
  ],
  lines: [
    { speaker: "Diana", voice_hint: "female_us", text: "Hey, sorry to bother you so late. I'm in 4B, across the hall." },
    { speaker: "Chris", voice_hint: "male_us", text: "Oh, hi! Is everything okay?" },
    { speaker: "Diana", voice_hint: "female_us", text: "Yeah, well — kind of. The music has been pretty loud for the last hour or so." },
    { speaker: "Chris", voice_hint: "male_us", text: "Oh no, really? I had no idea it carried through the walls." },
    { speaker: "Diana", voice_hint: "female_us", text: "Yeah, these walls are super thin. I have an early meeting tomorrow." },
    { speaker: "Chris", voice_hint: "male_us", text: "I'm so sorry. I'll turn it down right now." },
    { speaker: "Diana", voice_hint: "female_us", text: "I'd really appreciate it. It's just a weeknight thing — feel free to crank it on Saturdays." },
    { speaker: "Chris", voice_hint: "male_us", text: "Fair enough. Honestly, I should have checked the time." },
    { speaker: "Diana", voice_hint: "female_us", text: "No worries. We've all been there." },
    { speaker: "Chris", voice_hint: "male_us", text: "Can I make it up with coffee sometime? There's a place downstairs." },
    { speaker: "Diana", voice_hint: "female_us", text: "Sure, that sounds nice. No hard feelings." },
    { speaker: "Chris", voice_hint: "male_us", text: "Great. And again, sorry — won't happen again on a weeknight." },
  ],
  questions: [
    {
      question_tr: "Diana niye geldi?",
      question_en: "Why did Diana come over?",
      options: [
        "Bir şey ödünç almak için",
        "Müzik çok sesli olduğu için",
        "Tanışmak için",
        "Bir paket teslim etmek için",
      ],
      correct_index: 1,
      tr_explanation: "'The music has been pretty loud.'",
    },
    {
      question_tr: "Diana hangi gün önemli?",
      question_en: "Which day is important for Diana?",
      options: ["Bugün (hafta içi)", "Yarın sabah erken toplantı", "Cumartesi", "Pazar"],
      correct_index: 1,
      tr_explanation: "'I have an early meeting tomorrow.'",
    },
    {
      question_tr: "Chris cumartesi için ne demiş Diana?",
      question_en: "What does Diana say about Saturdays?",
      options: [
        "Cumartesi de sessiz olsun",
        "Cumartesi gürültüye karışmaz, açabilir",
        "Cumartesi taşınacak",
        "Cumartesi parti yapacak",
      ],
      correct_index: 1,
      tr_explanation: "'Feel free to crank it on Saturdays' = cumartesi sesi açabilirsin.",
    },
    {
      question_tr: "Chris ne teklif ediyor?",
      question_en: "What does Chris offer?",
      options: [
        "Hediye almayı",
        "Aşağıdaki kafede kahve içmeyi",
        "Müziği tamamen kapatmayı",
        "Taşınmayı",
      ],
      correct_index: 1,
      tr_explanation: "'Make it up with coffee sometime' = kahveyle telafi etmek.",
    },
    {
      question_tr: "Konuşma nasıl bitiyor?",
      question_en: "How does the conversation end?",
      options: [
        "Kavgayla",
        "Diana'nın yöneticiye şikayetiyle",
        "Dostane şekilde, anlaşmayla",
        "Chris'in inkar etmesiyle",
      ],
      correct_index: 2,
      tr_explanation: "'No hard feelings' + kahve teklifi kabul edildi.",
    },
  ],
  transcript_visible: false,
};

const carrierComplaint: ListeningDrama = {
  id: "listen.carrier-complaint.b1",
  title: "Operatör Faturası Şikayeti",
  description:
    "Müşteri fatura hatası için müşteri hizmetlerini arıyor.",
  emoji: "📱",
  cefrLevel: "B1",
  durationSec: 75,
  vocab_preview: [
    { en: "overcharged", tr: "fazla ücret alındı" },
    { en: "data plan", tr: "data paketi" },
    { en: "credit your account", tr: "hesabına iade yapmak" },
    { en: "billing cycle", tr: "fatura dönemi" },
    { en: "case number", tr: "vaka numarası" },
  ],
  lines: [
    { speaker: "Agent", voice_hint: "female_us", text: "Thank you for calling Nova Mobile. How can I help you today?" },
    { speaker: "Customer", voice_hint: "male_uk", text: "Hi, I think I've been overcharged on my last bill." },
    { speaker: "Agent", voice_hint: "female_us", text: "I'm sorry to hear that. Could I have your phone number, please?" },
    { speaker: "Customer", voice_hint: "male_uk", text: "Sure. It's 555-219-3402." },
    { speaker: "Agent", voice_hint: "female_us", text: "Got it. I can see your account. What seems to be the issue?" },
    { speaker: "Customer", voice_hint: "male_uk", text: "My bill is fifty dollars higher than usual. I haven't changed anything." },
    { speaker: "Agent", voice_hint: "female_us", text: "Let me take a look. I see — your data plan was switched on the fifteenth." },
    { speaker: "Customer", voice_hint: "male_uk", text: "I never asked for that. I didn't agree to any change." },
    { speaker: "Agent", voice_hint: "female_us", text: "I understand. It looks like it was an error on our side. I'll switch you back and credit your account." },
    { speaker: "Customer", voice_hint: "male_uk", text: "How much will be credited?" },
    { speaker: "Agent", voice_hint: "female_us", text: "Fifty dollars, applied to your next billing cycle." },
    { speaker: "Customer", voice_hint: "male_uk", text: "Okay. Could you send me a confirmation email?" },
    { speaker: "Agent", voice_hint: "female_us", text: "Of course. You'll get an email today with your case number." },
    { speaker: "Customer", voice_hint: "male_uk", text: "Thank you. That was easier than I expected." },
  ],
  questions: [
    {
      question_tr: "Müşterinin asıl sorunu?",
      question_en: "What is the customer's main issue?",
      options: [
        "Telefonu kırıldı",
        "Faturasında fazla ücretlendirme",
        "İnternet hızı yavaş",
        "Numarası bloke edildi",
      ],
      correct_index: 1,
      tr_explanation: "'I've been overcharged on my last bill.'",
    },
    {
      question_tr: "Sorunun kaynağı ne?",
      question_en: "What caused the problem?",
      options: [
        "Müşteri data paketi değiştirdi",
        "Operatör yanlışlıkla planı değiştirdi",
        "Bayi hatası",
        "Müşteri faturayı geç ödedi",
      ],
      correct_index: 1,
      tr_explanation: "'It was an error on our side' = bizim taraftaki hata.",
    },
    {
      question_tr: "Operatör ne kadar iade yapacak?",
      question_en: "How much will be credited?",
      options: ["25 dolar", "40 dolar", "50 dolar", "75 dolar"],
      correct_index: 2,
      tr_explanation: "'Fifty dollars, applied to your next billing cycle.'",
    },
    {
      question_tr: "Müşteri ek olarak ne istiyor?",
      question_en: "What else does the customer want?",
      options: [
        "Mağazada görüşme",
        "Onay e-postası",
        "Telefon değişimi",
        "Müdürle konuşma",
      ],
      correct_index: 1,
      tr_explanation: "'Could you send me a confirmation email?'",
    },
    {
      question_tr: "'Credit your account' burada ne demek?",
      question_en: "What does 'credit your account' mean?",
      options: [
        "Hesabını kapatmak",
        "Hesabına para iadesi/kredi geçmek",
        "Kredi kartı vermek",
        "Hesaba borç eklemek",
      ],
      correct_index: 1,
      tr_explanation:
        "Telekom/banka bağlamında 'credit your account' = hesabına alacak/iade işlemek.",
    },
  ],
  transcript_visible: false,
};

// ============================================================
// B2 — 4 dramas
// ============================================================

const salaryNegotiation: ListeningDrama = {
  id: "listen.salary-negotiation.b2",
  title: "Maaş Görüşmesi",
  description:
    "Çalışan yöneticisiyle terfi sonrası maaş zammı pazarlığı yapıyor.",
  emoji: "💰",
  cefrLevel: "B2",
  durationSec: 95,
  vocab_preview: [
    { en: "market rate", tr: "piyasa standardı" },
    { en: "compensation", tr: "ücretlendirme paketi" },
    { en: "in line with", tr: "uyumlu, paralel" },
    { en: "leverage", tr: "kullanmak, koz olarak değerlendirmek" },
    { en: "off the table", tr: "masada değil, kapalı" },
  ],
  lines: [
    { speaker: "Manager", voice_hint: "male_us", text: "Thanks for setting this up. I know you wanted to talk about your compensation." },
    { speaker: "Employee", voice_hint: "female_uk", text: "Yes. Now that the senior role is official, I'd like to revisit my salary." },
    { speaker: "Manager", voice_hint: "male_us", text: "Reasonable. We did include a fifteen percent bump with the promotion." },
    { speaker: "Employee", voice_hint: "female_uk", text: "I appreciate that, but based on the market data I've gathered, I'm still about ten percent below the rate for this level." },
    { speaker: "Manager", voice_hint: "male_us", text: "Where did you pull those numbers from?" },
    { speaker: "Employee", voice_hint: "female_uk", text: "Levels.fyi and two recruiter conversations from this quarter. Happy to share screenshots." },
    { speaker: "Manager", voice_hint: "male_us", text: "That's useful context. Honestly, the budget for raises this cycle is mostly locked." },
    { speaker: "Employee", voice_hint: "female_uk", text: "I understand. Could we look at non-cash adjustments — equity, a signing-style retention grant, anything along those lines?" },
    { speaker: "Manager", voice_hint: "male_us", text: "Equity is doable. I can probably push for an extra grant vesting over two years." },
    { speaker: "Employee", voice_hint: "female_uk", text: "That helps. What about revisiting base salary in six months instead of twelve?" },
    { speaker: "Manager", voice_hint: "male_us", text: "I can commit to a six-month checkpoint, with clear targets. If you hit them, we adjust." },
    { speaker: "Employee", voice_hint: "female_uk", text: "Targets in writing?" },
    { speaker: "Manager", voice_hint: "male_us", text: "In writing. I'll send a draft tomorrow." },
    { speaker: "Employee", voice_hint: "female_uk", text: "Then I think we have something workable. Thank you for actually engaging on this." },
    { speaker: "Manager", voice_hint: "male_us", text: "Of course. You've earned a real conversation, not a 'no, sorry.'" },
  ],
  questions: [
    {
      question_tr: "Çalışan piyasaya göre nerede?",
      question_en: "Where is the employee compared to the market?",
      options: [
        "Piyasa üstünde",
        "Piyasanın yaklaşık %10 altında",
        "Tam piyasa standardında",
        "Verisi yok",
      ],
      correct_index: 1,
      tr_explanation: "'About ten percent below the rate for this level.'",
    },
    {
      question_tr: "Yönetici niye baz maaşı arttıramıyor?",
      question_en: "Why can't the manager raise base salary now?",
      options: [
        "Çalışana güvenmiyor",
        "Bu döngüde bütçe kilitli",
        "Şirket küçülüyor",
        "Çalışan terfi almadı",
      ],
      correct_index: 1,
      tr_explanation: "'The budget for raises this cycle is mostly locked.'",
    },
    {
      question_tr: "Çalışan hangi alternatifi önerdi?",
      question_en: "What alternative did the employee propose?",
      options: [
        "Daha az çalışma saati",
        "Equity / hisse bazlı düzenlemeler",
        "Uzaktan çalışma",
        "Sınırsız izin",
      ],
      correct_index: 1,
      tr_explanation: "'Equity, a signing-style retention grant.'",
    },
    {
      question_tr: "Yönetici ne kadar süreli denetim noktası kabul etti?",
      question_en: "What review timing did the manager accept?",
      options: [
        "3 ay",
        "6 ay",
        "12 ay",
        "Belirsiz",
      ],
      correct_index: 1,
      tr_explanation: "'A six-month checkpoint, with clear targets.'",
    },
    {
      question_tr: "'Off the table' bu bağlamda ne anlamına gelir?",
      question_en: "What does 'off the table' mean here?",
      options: [
        "Masaya yatırılmış",
        "Görüşmenin dışında, mümkün değil",
        "Önemsiz",
        "Yazıya geçmiş",
      ],
      correct_index: 1,
      tr_explanation:
        "'Off the table' = artık seçenekler arasında değil, görüşme dışı.",
    },
  ],
  transcript_visible: false,
};

const customerEscalation: ListeningDrama = {
  id: "listen.customer-escalation.b2",
  title: "Müşteri Şikayeti — Müdüre İletildi",
  description:
    "Çözüm bulamayan müşteri müdürle konuşmak istiyor. Yüksek tansiyon, kibar dil.",
  emoji: "😤",
  cefrLevel: "B2",
  durationSec: 90,
  vocab_preview: [
    { en: "escalate", tr: "üst makama iletmek" },
    { en: "make this right", tr: "bunu düzeltmek" },
    { en: "policy", tr: "politika, kurallar" },
    { en: "as a one-off", tr: "tek seferliğine, istisna olarak" },
    { en: "goodwill gesture", tr: "iyi niyet jesti" },
  ],
  lines: [
    { speaker: "Manager", voice_hint: "female_uk", text: "Hello, I'm the duty manager. I understand you wanted to escalate this." },
    { speaker: "Customer", voice_hint: "male_us", text: "Yes. I've been here for nearly an hour and no one has been able to help." },
    { speaker: "Manager", voice_hint: "female_uk", text: "I'm sorry to hear that. Could you walk me through what happened?" },
    { speaker: "Customer", voice_hint: "male_us", text: "I bought this laptop three weeks ago. It's already failing to charge. Your associate said the return window is fourteen days." },
    { speaker: "Manager", voice_hint: "female_uk", text: "That's the standard return policy, yes. But a charging issue at three weeks is clearly a defect." },
    { speaker: "Customer", voice_hint: "male_us", text: "Exactly. I'm not asking for a refund just to be difficult. The product doesn't work." },
    { speaker: "Manager", voice_hint: "female_uk", text: "Completely understood. Let me have our technician take a quick look in the back, just to confirm." },
    { speaker: "Customer", voice_hint: "male_us", text: "Fine. But I don't want to leave here without a resolution today." },
    { speaker: "Manager", voice_hint: "female_uk", text: "I'll make sure of that. Two options: a swap for the same model, or store credit toward a different one." },
    { speaker: "Customer", voice_hint: "male_us", text: "Honestly, I've lost faith in this brand. Could we do a refund and credit, as a one-off?" },
    { speaker: "Manager", voice_hint: "female_uk", text: "Strictly speaking, we don't do refunds past fourteen days. But given how this has been handled, I can authorize it as a goodwill gesture." },
    { speaker: "Customer", voice_hint: "male_us", text: "Thank you. I appreciate you actually listening." },
    { speaker: "Manager", voice_hint: "female_uk", text: "Of course. I'll process the refund now. It'll show on your card in three to five business days." },
    { speaker: "Customer", voice_hint: "male_us", text: "Three to five days is fine. Sorry for the long fuse — I just hit the wall." },
    { speaker: "Manager", voice_hint: "female_uk", text: "No need to apologize. We didn't make it easy." },
  ],
  questions: [
    {
      question_tr: "Müşterinin sorunu nedir?",
      question_en: "What is the customer's problem?",
      options: [
        "Laptopun ekranı kırık",
        "Şarj olmuyor",
        "Yanlış renk geldi",
        "Yazılım sorunu",
      ],
      correct_index: 1,
      tr_explanation: "'It's already failing to charge.'",
    },
    {
      question_tr: "Standart iade süresi nedir?",
      question_en: "What is the standard return window?",
      options: ["7 gün", "14 gün", "21 gün", "30 gün"],
      correct_index: 1,
      tr_explanation: "'The return window is fourteen days.'",
    },
    {
      question_tr: "Müdürün ilk önerdiği iki seçenek?",
      question_en: "What two options did the manager first offer?",
      options: [
        "Para iadesi veya değişim",
        "Aynı modelle değişim veya mağaza kredisi",
        "Para iadesi veya kupon",
        "Tamir veya değişim",
      ],
      correct_index: 1,
      tr_explanation: "'A swap for the same model, or store credit.'",
    },
    {
      question_tr: "Müdür sonunda neyi onayladı?",
      question_en: "What did the manager finally approve?",
      options: [
        "Sadece değişim",
        "İyi niyet jesti olarak iade",
        "Tamir",
        "Hiçbir şey",
      ],
      correct_index: 1,
      tr_explanation: "'I can authorize it as a goodwill gesture.'",
    },
    {
      question_tr: "'I just hit the wall' burada ne anlamına geliyor?",
      question_en: "What does 'I just hit the wall' mean here?",
      options: [
        "Gerçek bir duvara çarptı",
        "Sabrı tükendi / dayanma noktasına geldi",
        "Yanlış yere geldi",
        "Bir engelle karşılaştı (fiziksel)",
      ],
      correct_index: 1,
      tr_explanation:
        "Deyim: 'Hit the wall' = limitime ulaştım, sabrım tükendi.",
    },
  ],
  transcript_visible: false,
};

const conferenceQA: ListeningDrama = {
  id: "listen.conference-qa.b2",
  title: "Konferans Soru-Cevap",
  description:
    "AI etiği paneli, salondan provoke edici bir soru. Konuşmacı dengeli cevap veriyor.",
  emoji: "🎤",
  cefrLevel: "B2",
  durationSec: 85,
  vocab_preview: [
    { en: "panelist / speaker", tr: "panelist / konuşmacı" },
    { en: "bias", tr: "önyargı, yanlılık" },
    { en: "stakeholders", tr: "paydaşlar" },
    { en: "trade-off", tr: "denge, ödün" },
    { en: "concrete example", tr: "somut örnek" },
  ],
  lines: [
    { speaker: "Moderator", voice_hint: "female_us", text: "We have time for one more question. Yes, the gentleman in the third row." },
    { speaker: "Audience Member", voice_hint: "male_us", text: "Thanks. My question is for Dr. Patel. You said your team audits for bias, but the recent report still flagged your hiring tool. How do you square that?" },
    { speaker: "Dr. Patel", voice_hint: "female_uk", text: "That's a fair challenge. I'd push back gently on one thing first — the report flagged a regional subset, not the global tool." },
    { speaker: "Audience Member", voice_hint: "male_us", text: "But the people in that region still got worse outcomes." },
    { speaker: "Dr. Patel", voice_hint: "female_uk", text: "Absolutely. And that's exactly the trade-off we're working through. Audits catch some patterns, not all." },
    { speaker: "Moderator", voice_hint: "female_us", text: "Could you give a concrete example of what you've changed?" },
    { speaker: "Dr. Patel", voice_hint: "female_uk", text: "Sure. After the report, we re-weighted the training data and required two human reviewers for any borderline case in that region." },
    { speaker: "Audience Member", voice_hint: "male_us", text: "And how often do reviewers actually overturn the system?" },
    { speaker: "Dr. Patel", voice_hint: "female_uk", text: "About eighteen percent of the borderline cases since we rolled it out. We publish those numbers monthly." },
    { speaker: "Audience Member", voice_hint: "male_us", text: "Eighteen percent is high. Doesn't that suggest the model is still wrong a lot?" },
    { speaker: "Dr. Patel", voice_hint: "female_uk", text: "It suggests the borderline category is where the model is least confident — which is precisely where human review should sit. The clear cases run at under two percent overturn." },
    { speaker: "Audience Member", voice_hint: "male_us", text: "Okay, that distinction is helpful. Thank you." },
    { speaker: "Moderator", voice_hint: "female_us", text: "Great exchange. Let's thank our panel." },
  ],
  questions: [
    {
      question_tr: "Salondaki soru neyi sorguluyor?",
      question_en: "What is the audience question challenging?",
      options: [
        "Şirketin reklam stratejisini",
        "Bias denetimi rağmen aracın hala işaretlenmiş olmasını",
        "Konuşmacının deneyimini",
        "Panelin uzunluğunu",
      ],
      correct_index: 1,
      tr_explanation:
        "Soru: 'Bias denetimi yapıyoruz dediniz ama rapor aracı işaretledi — bunu nasıl açıklarsınız?'",
    },
    {
      question_tr: "Dr. Patel raporun neyi işaretlediğini söyledi?",
      question_en: "What did Dr. Patel say the report actually flagged?",
      options: [
        "Global aracı",
        "Bölgesel bir alt küme",
        "Sadece test verisi",
        "Eski versiyon",
      ],
      correct_index: 1,
      tr_explanation: "'The report flagged a regional subset, not the global tool.'",
    },
    {
      question_tr: "Sınırda olan vakaların yüzde kaçı insan incelemesi tarafından değiştiriliyor?",
      question_en: "What percentage of borderline cases are overturned?",
      options: ["%2", "%10", "%18", "%30"],
      correct_index: 2,
      tr_explanation: "'About eighteen percent of the borderline cases.'",
    },
    {
      question_tr: "Net (clear) vakalarda insan değiştirme oranı?",
      question_en: "And for clear cases?",
      options: ["%2'nin altında", "%5", "%18", "Bilgi verilmedi"],
      correct_index: 0,
      tr_explanation: "'The clear cases run at under two percent overturn.'",
    },
    {
      question_tr: "Dr. Patel'in tonu nasıl tanımlanır?",
      question_en: "How can Dr. Patel's tone be described?",
      options: [
        "Savunmacı ve agresif",
        "Şeffaf ama kendine güvenli, somut",
        "Kayıtsız",
        "Belirsiz, dolambaçlı",
      ],
      correct_index: 1,
      tr_explanation:
        "Eleştiriyi kabul ediyor, ama somut sayılar veriyor ve nuance ekliyor.",
    },
  ],
  transcript_visible: false,
};

const motherInLawDinner: ListeningDrama = {
  id: "listen.mother-in-law.b2",
  title: "Kayınvalideyle Yemek",
  description:
    "İlk kez tanışılan yemek. Kibar ama gergin sorular, ince diplomatik dil.",
  emoji: "🍽️",
  cefrLevel: "B2",
  durationSec: 100,
  vocab_preview: [
    { en: "settle down", tr: "yerleşmek, hayatını kurmak" },
    { en: "down the line", tr: "ileride, zamanla" },
    { en: "no rush", tr: "acelesi yok" },
    { en: "wrap up", tr: "tamamlamak, bitirmek" },
    { en: "lovely to have you", tr: "seni ağırlamak güzel" },
  ],
  lines: [
    { speaker: "Margaret", voice_hint: "female_uk", text: "James has told us so much about you. It's lovely to finally have you over." },
    { speaker: "Emma", voice_hint: "female_us", text: "Thank you, Margaret. He's spoken very warmly about you too." },
    { speaker: "Margaret", voice_hint: "female_uk", text: "I do hope so. Now — Emma, James mentioned you're in publishing?" },
    { speaker: "Emma", voice_hint: "female_us", text: "Yes, I edit non-fiction. Mostly business and memoir." },
    { speaker: "Margaret", voice_hint: "female_uk", text: "How interesting. Is that something you see yourself doing long-term?" },
    { speaker: "Emma", voice_hint: "female_us", text: "I think so. The industry's changing fast, but I love the work." },
    { speaker: "Margaret", voice_hint: "female_uk", text: "Good for you. And do the two of you talk much about, well, settling down?" },
    { speaker: "James", voice_hint: "male_uk", text: "Mum, we've been together for eight months." },
    { speaker: "Margaret", voice_hint: "female_uk", text: "I'm only asking, darling. People wait too long these days." },
    { speaker: "Emma", voice_hint: "female_us", text: "It's a fair question. Honestly, we're not in a rush, but we have talked about what we want down the line." },
    { speaker: "Margaret", voice_hint: "female_uk", text: "That's sensible. And what does 'down the line' look like, if you don't mind me asking?" },
    { speaker: "Emma", voice_hint: "female_us", text: "Probably a couple of years before any big decisions. We both want to be sure rather than fast." },
    { speaker: "Margaret", voice_hint: "female_uk", text: "Wise. James's father and I made every decision twice as fast as we should have." },
    { speaker: "James", voice_hint: "male_uk", text: "And yet you're still here." },
    { speaker: "Margaret", voice_hint: "female_uk", text: "Through sheer stubbornness. Emma, please have more of the lamb." },
    { speaker: "Emma", voice_hint: "female_us", text: "I'd love some. It's wonderful." },
  ],
  questions: [
    {
      question_tr: "Emma ne iş yapıyor?",
      question_en: "What does Emma do?",
      options: [
        "Gazetecilik",
        "Kurgu olmayan kitap editörlüğü",
        "Pazarlama",
        "Öğretmenlik",
      ],
      correct_index: 1,
      tr_explanation: "'I edit non-fiction. Mostly business and memoir.'",
    },
    {
      question_tr: "Margaret'in sorduğu hassas soru neydi?",
      question_en: "What was Margaret's sensitive question?",
      options: [
        "Maaşı hakkında",
        "Hayatlarını kurma / evlilik niyeti",
        "Ailesi hakkında",
        "Siyasi görüşleri",
      ],
      correct_index: 1,
      tr_explanation: "'Do the two of you talk much about settling down?'",
    },
    {
      question_tr: "Emma ve James ne kadar süredir birlikte?",
      question_en: "How long have Emma and James been together?",
      options: ["3 ay", "6 ay", "8 ay", "1 yıl"],
      correct_index: 2,
      tr_explanation: "'We've been together for eight months.'",
    },
    {
      question_tr: "Emma 'down the line' için ne dedi?",
      question_en: "What did Emma say about 'down the line'?",
      options: [
        "Önümüzdeki ay büyük karar verecekler",
        "Birkaç yıl bekleyecekler",
        "Hiç düşünmüyorlar",
        "Hemen evlenecekler",
      ],
      correct_index: 1,
      tr_explanation: "'A couple of years before any big decisions.'",
    },
    {
      question_tr: "Margaret'in son sözünde tonu nasıl?",
      question_en: "What is Margaret's tone at the end?",
      options: [
        "Soğuk ve onaylamaz",
        "Sıcak ve şakacı, mizahla biten",
        "Hala şüpheli",
        "Resmi ve mesafeli",
      ],
      correct_index: 1,
      tr_explanation: "'Through sheer stubbornness' + tabağı doldurması: yumuşamış, sıcak.",
    },
  ],
  transcript_visible: false,
};

// ============================================================
// C1 — 2 dramas
// ============================================================

const boardMeetingArgument: ListeningDrama = {
  id: "listen.board-meeting.c1",
  title: "Yönetim Kurulu Tartışması",
  description:
    "Stratejik bir bütçe konusunda iki yönetici çatışıyor. CEO denge kurmaya çalışıyor.",
  emoji: "📊",
  cefrLevel: "C1",
  durationSec: 110,
  vocab_preview: [
    { en: "burn rate", tr: "nakit yakma hızı" },
    { en: "runway", tr: "kasadaki para ile çıkılacak süre" },
    { en: "double down", tr: "üstüne gitmek, yatırımı arttırmak" },
    { en: "punt", tr: "ötelemek, bir sonraki çeyreğe atmak" },
    { en: "pull the plug on", tr: "fişini çekmek, kapatmak" },
    { en: "dead weight", tr: "ölü yük, sıkıntı olan kısım" },
  ],
  lines: [
    { speaker: "CEO", voice_hint: "female_us", text: "Alright, let's get to the contested item. The enterprise pivot proposal. Raj, you're against. Walk us through it." },
    { speaker: "Raj (CFO)", voice_hint: "male_uk", text: "Thanks. My concern is simple: our burn rate is already aggressive, and the enterprise motion adds an eighteen-month sales cycle on top of that. We don't have the runway to absorb a second bet." },
    { speaker: "Lena (VP Product)", voice_hint: "female_uk", text: "I hear the runway argument, but framing it as a 'second bet' is misleading. Self-serve has plateaued for three quarters. We don't have the luxury of not making a second bet." },
    { speaker: "Raj (CFO)", voice_hint: "male_uk", text: "Plateaued, yes. Declining, no. There's still room to optimize what we have before we double down on something speculative." },
    { speaker: "Lena (VP Product)", voice_hint: "female_uk", text: "'Optimize what we have' is exactly the language we used eighteen months ago. We optimized our way into a flat line." },
    { speaker: "CEO", voice_hint: "female_us", text: "Both fair points. Raj, if the enterprise effort were funded out of existing headcount, would your view change?" },
    { speaker: "Raj (CFO)", voice_hint: "male_uk", text: "Partially. The cash side eases, but you're then asking a product team that's already underwater to absorb a second roadmap. That's how we end up shipping nothing well." },
    { speaker: "Lena (VP Product)", voice_hint: "female_uk", text: "That's where I'd push back. I'm not asking the whole team. I'm asking for a ringfenced pod of six, and I'd happily punt two self-serve features to make room." },
    { speaker: "Raj (CFO)", voice_hint: "male_uk", text: "Which two features?" },
    { speaker: "Lena (VP Product)", voice_hint: "female_uk", text: "The integrations marketplace and the second pass at notifications. Neither is moving retention." },
    { speaker: "Raj (CFO)", voice_hint: "male_uk", text: "On notifications I agree — that's been dead weight for a while. Marketplace I'd want to discuss separately, but not block on today." },
    { speaker: "CEO", voice_hint: "female_us", text: "Good. So the shape of a deal exists. Lena, you get the pod and notifications. Raj, you get a hard checkpoint at ninety days — if we're not landing meetings with the right buyer profile, we pull the plug on the enterprise track and the pod returns." },
    { speaker: "Lena (VP Product)", voice_hint: "female_uk", text: "I can live with ninety days, provided 'meetings' is defined sensibly. Not vanity logos." },
    { speaker: "Raj (CFO)", voice_hint: "male_uk", text: "Agreed. Qualified pipeline, not LinkedIn screenshots." },
    { speaker: "CEO", voice_hint: "female_us", text: "Sold. Let's get it written up. Next item." },
  ],
  questions: [
    {
      question_tr: "Raj'ın asıl endişesi ne?",
      question_en: "What is Raj's main concern?",
      options: [
        "Ürün ekibi yeterli değil",
        "Nakit yakma hızı + uzun satış döngüsü, runway'i tehlikeye atar",
        "Pazar yanlış",
        "CEO yanlış yönlendiriyor",
      ],
      correct_index: 1,
      tr_explanation:
        "'Burn rate is already aggressive, and the enterprise motion adds an eighteen-month sales cycle.'",
    },
    {
      question_tr: "Lena hangi argümanla karşı çıkıyor?",
      question_en: "What is Lena's counter-argument?",
      options: [
        "Self-serve büyüyor",
        "Self-serve düz çizgide, ikinci bahis lüks değil zorunluluk",
        "Yatırımcı baskısı var",
        "Rakipler aynısını yapıyor",
      ],
      correct_index: 1,
      tr_explanation:
        "'Self-serve has plateaued for three quarters. We don't have the luxury of not making a second bet.'",
    },
    {
      question_tr: "Lena hangi iki ürün özelliğini ertelemeyi öneriyor?",
      question_en: "Which two features does Lena propose to deprioritize?",
      options: [
        "Marketplace ve onboarding",
        "Integrations marketplace ve notifications'ın 2. iterasyonu",
        "Notifications ve search",
        "Search ve onboarding",
      ],
      correct_index: 1,
      tr_explanation:
        "'The integrations marketplace and the second pass at notifications.'",
    },
    {
      question_tr: "Vardıkları anlaşmanın 'checkpoint' süresi?",
      question_en: "What is the checkpoint duration?",
      options: ["30 gün", "60 gün", "90 gün", "180 gün"],
      correct_index: 2,
      tr_explanation: "'A hard checkpoint at ninety days.'",
    },
    {
      question_tr: "'Qualified pipeline, not LinkedIn screenshots' ne demek?",
      question_en: "What does 'qualified pipeline, not LinkedIn screenshots' imply?",
      options: [
        "Sadece büyük markalar olmalı",
        "Görsel sunum gerekli",
        "Gerçek satış fırsatları lazım, yüzeysel/marketing teşhir değil",
        "LinkedIn kullanmayalım",
      ],
      correct_index: 2,
      tr_explanation:
        "Yatırım kararı somut, ölçülebilir satış fırsatlarına bağlı olmalı — vitrin değil.",
    },
  ],
  transcript_visible: false,
};

const founderPitchVC: ListeningDrama = {
  id: "listen.founder-pitch-vc.c1",
  title: "Kurucu — VC Pitch",
  description:
    "Erken aşama kurucu Series A turu için partnerle görüşüyor. Sert ama yapıcı sorular.",
  emoji: "🚀",
  cefrLevel: "C1",
  durationSec: 120,
  vocab_preview: [
    { en: "moat", tr: "rekabet avantajı, sahip olunan koruyucu kale" },
    { en: "CAC / payback", tr: "müşteri edinim maliyeti / geri ödeme" },
    { en: "ARR", tr: "yıllık tekrarlanan gelir" },
    { en: "fundamentally defensible", tr: "yapısal olarak savunulabilir" },
    { en: "category", tr: "pazar segmenti, kategori" },
    { en: "pass / opt out", tr: "geçmek, yatırıma katılmamak" },
  ],
  lines: [
    { speaker: "Partner", voice_hint: "male_us", text: "Thanks for coming back in. I've read the memo. Let's skip the slides and get into the real questions." },
    { speaker: "Founder", voice_hint: "female_uk", text: "Perfect. That's how I'd rather spend the time anyway." },
    { speaker: "Partner", voice_hint: "male_us", text: "Start with the moat. You've grown ARR three-x in twelve months, which is great, but I keep coming back to: what stops a well-resourced incumbent from doing this in eighteen months?" },
    { speaker: "Founder", voice_hint: "female_uk", text: "Honest answer — nothing fully stops them. But two things make it expensive. First, our data flywheel: every customer makes the model meaningfully better, and we have a structural head start of about two years of proprietary labelled data." },
    { speaker: "Partner", voice_hint: "male_us", text: "Two years isn't a moat. It's a lead." },
    { speaker: "Founder", voice_hint: "female_uk", text: "Agreed. Which is why I lead with 'expensive,' not 'impossible.' The second piece is workflow lock-in. We sit inside our customers' approval chain. Replacing us isn't a vendor swap — it's a process change involving three departments." },
    { speaker: "Partner", voice_hint: "male_us", text: "That's better. How does that translate to net retention?" },
    { speaker: "Founder", voice_hint: "female_uk", text: "Net dollar retention is one-thirty-two over the trailing twelve. Logo retention is ninety-seven percent." },
    { speaker: "Partner", voice_hint: "male_us", text: "Strong numbers. Now CAC payback?" },
    { speaker: "Founder", voice_hint: "female_uk", text: "Currently sitting at fourteen months blended, eight months on the mid-market motion. Enterprise drags it up because of longer cycles." },
    { speaker: "Partner", voice_hint: "male_us", text: "Fourteen blended is borderline for me at this stage. What's your plan to bring it under twelve?" },
    { speaker: "Founder", voice_hint: "female_uk", text: "Two levers. Channel partnerships — three signed, three more in negotiation — and shifting paid acquisition spend toward higher-intent inbound, which is already three points cheaper per qualified lead." },
    { speaker: "Partner", voice_hint: "male_us", text: "And if those don't deliver?" },
    { speaker: "Founder", voice_hint: "female_uk", text: "Then enterprise sales hiring slows for a quarter while we tighten the funnel. We've modelled it. We don't run out of road." },
    { speaker: "Partner", voice_hint: "male_us", text: "Last hard one. The category is getting noisy. Why you over the three other companies pitching me this month?" },
    { speaker: "Founder", voice_hint: "female_uk", text: "Two of them are features pretending to be companies. The third is real — I respect them — but they're optimising for breadth. We're optimising for depth in a workflow most generalists won't go near because it's regulated, slow to win, and sticky once you do." },
    { speaker: "Partner", voice_hint: "male_us", text: "That's the cleanest framing I've heard this quarter. I'll be straight with you — I'm a 'lean yes' pending one more conversation with our partnership. You'll hear from me by end of next week, either way." },
    { speaker: "Founder", voice_hint: "female_uk", text: "Appreciate the directness. Whichever way it lands, this was the conversation I wanted." },
  ],
  questions: [
    {
      question_tr: "Şirketin son 12 ayda ARR büyümesi?",
      question_en: "ARR growth over the last twelve months?",
      options: ["2x", "3x", "5x", "10x"],
      correct_index: 1,
      tr_explanation: "'Grown ARR three-x in twelve months.'",
    },
    {
      question_tr: "Kurucu 'moat' sorusuna nasıl yanıt veriyor?",
      question_en: "How does the founder answer the moat question?",
      options: [
        "Patent sahibi olduklarını söylüyor",
        "Hiç moat yok diyor",
        "Veri flywheel + workflow lock-in açıklıyor; tam moat olmadığını dürüstçe söylüyor",
        "Yöneticilerle ilişkileri olduğunu söylüyor",
      ],
      correct_index: 2,
      tr_explanation:
        "'Honest answer — nothing fully stops them' + iki yapısal engel: data ve workflow lock-in.",
    },
    {
      question_tr: "Net dollar retention oranı?",
      question_en: "Net dollar retention?",
      options: ["110%", "120%", "132%", "150%"],
      correct_index: 2,
      tr_explanation: "'Net dollar retention is one-thirty-two.'",
    },
    {
      question_tr: "CAC payback'in karışık (blended) ortalaması?",
      question_en: "Blended CAC payback?",
      options: ["8 ay", "10 ay", "14 ay", "18 ay"],
      correct_index: 2,
      tr_explanation: "'Fourteen months blended.'",
    },
    {
      question_tr: "Partner'ın son cevabı ne?",
      question_en: "What is the partner's final response?",
      options: [
        "Kesin evet, hemen sözleşme",
        "Kesin hayır, pas geçti",
        "Eğilimle 'evet' (lean yes), bir partner görüşmesi daha lazım",
        "Daha fazla data istiyor, 6 ay sonra konuşalım",
      ],
      correct_index: 2,
      tr_explanation: "'I'm a lean yes pending one more conversation with our partnership.'",
    },
  ],
  transcript_visible: false,
};

// ============================================================
// Registry
// ============================================================
export const listeningDramas: ReadonlyArray<ListeningDrama> = [
  // A1
  cafeEncounter,
  streetDirections,
  // A2
  supermarketExchange,
  taxiConversation,
  doctorVisit,
  // B1
  jobInterview,
  awkwardPartyTalk,
  neighborDispute,
  carrierComplaint,
  // B2
  salaryNegotiation,
  customerEscalation,
  conferenceQA,
  motherInLawDinner,
  // C1
  boardMeetingArgument,
  founderPitchVC,
];

export function getListeningDrama(id: string): ListeningDrama | undefined {
  return listeningDramas.find((d) => d.id === id);
}
