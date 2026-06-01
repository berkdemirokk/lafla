import type { Scene, SceneMode } from "../data/scenes";

export type VisualTheme =
  | "airport"
  | "immigration"
  | "bar"
  | "cafe"
  | "restaurant"
  | "fastfood"
  | "bill"
  | "delivery"
  | "grocery"
  | "taxi"
  | "transit"
  | "directions"
  | "hotel"
  | "housing"
  | "pharmacy"
  | "doctor"
  | "dentist"
  | "optician"
  | "vet"
  | "emergency"
  | "shopping"
  | "bank"
  | "service_counter"
  | "package"
  | "library"
  | "worship"
  | "gym"
  | "salon"
  | "phone"
  | "tech_support"
  | "ielts"
  | "university"
  | "writing"
  | "dating_app"
  | "date_cafe"
  | "relationship"
  | "party"
  | "work_meeting"
  | "work_interview"
  | "work_code"
  | "work_email"
  | "work_networking"
  | "work_remote"
  | "work_presentation"
  | "daily_conversation"
  | "family"
  | "hobbies"
  | "weather"
  | "self_care";

type VisualScene = Pick<Scene, "mode" | "skillId"> &
  Partial<Pick<Scene, "id" | "lessonId" | "title" | "description">>;

const IMG = (photoId: string) =>
  `https://images.unsplash.com/${photoId}?auto=format&fit=crop&w=900&q=85`;

const FALLBACK_BY_MODE: Record<SceneMode, VisualTheme> = {
  flirt: "date_cafe",
  work: "work_meeting",
  bar: "bar",
  airport: "airport",
  daily: "daily_conversation",
  order: "restaurant",
  ielts: "ielts",
};

export const VISUAL_THEME_IMAGES: Record<VisualTheme, string[]> = {
  airport: [
    IMG("photo-1530521954074-e64f6810b32d"),
    IMG("photo-1569154941061-e231b4725ef1"),
    IMG("photo-1517400508447-f8dd518b86db"),
    IMG("photo-1490430657723-4d607c1503fc"),
  ],
  immigration: [
    IMG("photo-1436491865332-7a61a109cc05"),
    IMG("photo-1517400508447-f8dd518b86db"),
    IMG("photo-1490430657723-4d607c1503fc"),
  ],
  bar: [
    IMG("photo-1514362545857-3bc16c4c7d1b"),
    IMG("photo-1470337458703-46ad1756a187"),
    IMG("photo-1572116469696-31de0f17cc34"),
    IMG("photo-1566417713940-fe7c737a9ef2"),
    IMG("photo-1510812431401-41d2bd2722f3"),
  ],
  cafe: [
    IMG("photo-1495474472287-4d71bcdd2085"),
    IMG("photo-1509042239860-f550ce710b93"),
    IMG("photo-1559925393-8be0ec4767c8"),
    IMG("photo-1501339847302-ac426a4a7cbb"),
    IMG("photo-1442512595331-e89e73853f31"),
    IMG("photo-1453614512568-c4024d13c247"),
  ],
  restaurant: [
    IMG("photo-1414235077428-338989a2e8c0"),
    IMG("photo-1544025162-d76694265947"),
    IMG("photo-1517248135467-4c7edcad34c4"),
    IMG("photo-1504674900247-0877df9cc836"),
    IMG("photo-1550966871-3ed3cdb5ed0c"),
    IMG("photo-1551218808-94e220e084d2"),
  ],
  fastfood: [
    IMG("photo-1768204039041-bbb7adf98078"),
    IMG("photo-1746023790231-d6d87d1dfeab"),
    IMG("photo-1763689389824-dd2cea2e5772"),
  ],
  bill: [
    IMG("photo-1556742049-0cfed4f6a45d"),
    IMG("photo-1563013544-824ae1b704d3"),
    IMG("photo-1517248135467-4c7edcad34c4"),
  ],
  delivery: [
    IMG("photo-1566576721346-d4a3b4eaeb55"),
    IMG("photo-1586528116311-ad8dd3c8310d"),
    IMG("photo-1768204039041-bbb7adf98078"),
  ],
  grocery: [
    IMG("photo-1542838132-92c53300491e"),
    IMG("photo-1579113800032-c38bd7635818"),
    IMG("photo-1607082348824-0a96f2a4b9da"),
  ],
  taxi: [
    IMG("photo-1449965408869-eaa3f722e40d"),
    IMG("photo-1485291571150-772bcfc10da5"),
    IMG("photo-1503376780353-7e6692767b70"),
  ],
  transit: [
    IMG("photo-1544620347-c4fd4a3d5957"),
    IMG("photo-1474487548417-781cb71495f3"),
  ],
  directions: [
    IMG("photo-1524661135-423995f22d0b"),
    IMG("photo-1519501025264-65ba15a82390"),
    IMG("photo-1480714378408-67cf0d13bc1b"),
    IMG("photo-1517732306149-e8f829eb588a"),
  ],
  hotel: [
    IMG("photo-1566073771259-6a8506099945"),
    IMG("photo-1590490360182-c33d57733427"),
    IMG("photo-1542314831-068cd1dbfeeb"),
    IMG("photo-1618773928121-c32242e63f39"),
  ],
  housing: [
    IMG("photo-1560448204-e02f11c3d0e2"),
    IMG("photo-1560185127-6ed189bf02f4"),
    IMG("photo-1582407947304-fd86f028f716"),
  ],
  pharmacy: [
    IMG("photo-1584308666744-24d5c474f2ae"),
    IMG("photo-1585435557343-3b092031a831"),
    IMG("photo-1587854692152-cbe660dbde88"),
    IMG("photo-1579684385127-1ef15d508118"),
  ],
  doctor: [
    IMG("photo-1576091160550-2173dba999ef"),
    IMG("photo-1580281658223-9b93f18ae9ae"),
    IMG("photo-1530026405186-ed1f139313f8"),
  ],
  dentist: [
    IMG("photo-1606811971618-4486d14f3f99"),
    IMG("photo-1588776814546-1ffcf47267a5"),
  ],
  optician: [
    IMG("photo-1574258495973-f010dfbb5371"),
    IMG("photo-1511499767150-a48a237f0083"),
  ],
  vet: [
    IMG("photo-1576201836106-db1758fd1c97"),
    IMG("photo-1583337130417-3346a1be7dee"),
  ],
  emergency: [
    IMG("photo-1587745416684-47953f16f02f"),
    IMG("photo-1504439468489-c8920d796a29"),
    IMG("photo-1527613426441-4da17471b66d"),
  ],
  shopping: [
    IMG("photo-1481437156560-3205f6a55735"),
    IMG("photo-1441986300917-64674bd600d8"),
    IMG("photo-1555529669-e69e7aa0ba9a"),
    IMG("photo-1472851294608-062f824d29cc"),
    IMG("photo-1483985988355-763728e1935b"),
    IMG("photo-1489987707025-afc232f7ea0f"),
  ],
  bank: [
    IMG("photo-1563013544-824ae1b704d3"),
    IMG("photo-1556742049-0cfed4f6a45d"),
    IMG("photo-1554224155-6726b3ff858f"),
  ],
  service_counter: [
    IMG("photo-1556742049-0cfed4f6a45d"),
    IMG("photo-1556740749-887f6717d7e4"),
    IMG("photo-1454165804606-c3d57bc86b40"),
  ],
  package: [
    IMG("photo-1566576721346-d4a3b4eaeb55"),
    IMG("photo-1586528116311-ad8dd3c8310d"),
  ],
  library: [
    IMG("photo-1521587760476-6c12a4b040da"),
    IMG("photo-1524995997946-a1c2e315a42f"),
    IMG("photo-1456324504439-367cee3b3c32"),
  ],
  worship: [
    IMG("photo-1774191442045-64515a9c61d7"),
    IMG("photo-1542810634-71277d95dcbb"),
  ],
  gym: [
    IMG("photo-1534438327276-14e5300c3a48"),
    IMG("photo-1526506118085-60ce8714f8c5"),
    IMG("photo-1605296867304-46d5465a13f1"),
    IMG("photo-1517836357463-d25dfeac3438"),
    IMG("photo-1540497077202-7c8a3999166f"),
  ],
  salon: [
    IMG("photo-1503951914875-452162b0f3f1"),
    IMG("photo-1585747860715-2ba37e788b70"),
    IMG("photo-1521590832167-7bcbfaa6381f"),
    IMG("photo-1600948836101-f9ffda59d250"),
  ],
  phone: [
    IMG("photo-1586953208448-b95a79798f07"),
    IMG("photo-1523206489230-c012c64b2b48"),
    IMG("photo-1553775282-20af80779df7"),
    IMG("photo-1534536281715-e28d76689b4d"),
    IMG("photo-1616348436168-de43ad0db179"),
  ],
  tech_support: [
    IMG("photo-1516321318423-f06f85e504b3"),
    IMG("photo-1580894894513-541e068a3e2b"),
    IMG("photo-1497366216548-37526070297c"),
    IMG("photo-1504384308090-c894fdcc538d"),
  ],
  ielts: [
    IMG("photo-1434030216411-0b793f4b4173"),
    IMG("photo-1501504905252-473c47e087f8"),
    IMG("photo-1513258496099-48168024aec0"),
    IMG("photo-1524178232363-1fb2b075b655"),
  ],
  university: [
    IMG("photo-1562774053-701939374585"),
    IMG("photo-1523580846011-d3a5bc25702b"),
    IMG("photo-1523240795612-9a054b0db644"),
    IMG("photo-1521587760476-6c12a4b040da"),
  ],
  writing: [
    IMG("photo-1456324504439-367cee3b3c32"),
    IMG("photo-1501504905252-473c47e087f8"),
    IMG("photo-1488190211105-8b0e65b80b4e"),
  ],
  dating_app: [
    IMG("photo-1586953208448-b95a79798f07"),
    IMG("photo-1516589178581-6cd7833ae3b2"),
    IMG("photo-1495474472287-4d71bcdd2085"),
  ],
  date_cafe: [
    IMG("photo-1495474472287-4d71bcdd2085"),
    IMG("photo-1509042239860-f550ce710b93"),
    IMG("photo-1517248135467-4c7edcad34c4"),
    IMG("photo-1514362545857-3bc16c4c7d1b"),
  ],
  relationship: [
    IMG("photo-1516589178581-6cd7833ae3b2"),
    IMG("photo-1495474472287-4d71bcdd2085"),
    IMG("photo-1517248135467-4c7edcad34c4"),
    IMG("photo-1516450360452-9312f5e86fc7"),
  ],
  party: [
    IMG("photo-1516450360452-9312f5e86fc7"),
    IMG("photo-1510812431401-41d2bd2722f3"),
    IMG("photo-1514362545857-3bc16c4c7d1b"),
  ],
  work_meeting: [
    IMG("photo-1517245386807-bb43f82c33c4"),
    IMG("photo-1522071820081-009f0129c71c"),
    IMG("photo-1519389950473-47ba0277781c"),
    IMG("photo-1454165804606-c3d57bc86b40"),
  ],
  work_interview: [
    IMG("photo-1553877522-43269d4ea984"),
    IMG("photo-1454165804606-c3d57bc86b40"),
    IMG("photo-1504384308090-c894fdcc538d"),
  ],
  work_code: [
    IMG("photo-1516321318423-f06f85e504b3"),
    IMG("photo-1515879218367-8466d910aaa4"),
    IMG("photo-1498050108023-c5249f4df085"),
  ],
  work_email: [
    IMG("photo-1499750310107-5fef28a66643"),
    IMG("photo-1516321318423-f06f85e504b3"),
    IMG("photo-1488190211105-8b0e65b80b4e"),
  ],
  work_networking: [
    IMG("photo-1556761175-b413da4baf72"),
    IMG("photo-1515187029135-18ee286d815b"),
    IMG("photo-1522071820081-009f0129c71c"),
  ],
  work_remote: [
    IMG("photo-1497366811353-6870744d04b2"),
    IMG("photo-1516321318423-f06f85e504b3"),
    IMG("photo-1499750310107-5fef28a66643"),
  ],
  work_presentation: [
    IMG("photo-1475721027785-f74eccf877e2"),
    IMG("photo-1517048676732-d65bc937f952"),
    IMG("photo-1515187029135-18ee286d815b"),
  ],
  daily_conversation: [
    IMG("photo-1519501025264-65ba15a82390"),
    IMG("photo-1480714378408-67cf0d13bc1b"),
    IMG("photo-1501339847302-ac426a4a7cbb"),
    IMG("photo-1517248135467-4c7edcad34c4"),
  ],
  family: [
    IMG("photo-1511895426328-dc8714191300"),
    IMG("photo-1529156069898-49953e39b3ac"),
    IMG("photo-1517248135467-4c7edcad34c4"),
  ],
  hobbies: [
    IMG("photo-1488190211105-8b0e65b80b4e"),
    IMG("photo-1495474472287-4d71bcdd2085"),
    IMG("photo-1534438327276-14e5300c3a48"),
  ],
  weather: [
    IMG("photo-1519501025264-65ba15a82390"),
    IMG("photo-1480714378408-67cf0d13bc1b"),
    IMG("photo-1477959858617-67f85cf4f1df"),
  ],
  self_care: [
    IMG("photo-1506126613408-eca07ce68773"),
    IMG("photo-1526506118085-60ce8714f8c5"),
    IMG("photo-1495474472287-4d71bcdd2085"),
  ],
};

function hasAny(value: string, needles: readonly string[]): boolean {
  return needles.some((needle) => value.includes(needle));
}

function hasToken(value: string, token: string): boolean {
  return new RegExp(`(^|[._-])${token}($|[._-])`).test(value);
}

function escapeRegExp(value: string): string {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function hasWord(value: string, words: readonly string[]): boolean {
  return words.some((word) => new RegExp(`\\b${escapeRegExp(word)}\\b`).test(value));
}

function textOf(scene: VisualScene): string {
  return [scene.skillId, scene.lessonId, scene.title, scene.description]
    .filter(Boolean)
    .join(" ")
    .toLowerCase();
}

export function getVisualThemeForScene(scene: VisualScene): VisualTheme {
  const skill = (scene.skillId || "").toLowerCase();
  const text = textOf(scene);

  if (hasAny(skill, ["arc.us_immigration"]) || hasAny(text, ["immigration", "customs", "cbp", "passport", "visa", "jfk"])) return "immigration";
  if (hasAny(skill, ["airport", "arc.long_haul"]) || hasAny(text, ["flight", "gate", "baggage", "airline", "boarding"])) return "airport";
  if (hasAny(skill, ["daily.hotel"])) return "hotel";

  if (hasAny(skill, ["order.cafe"]) || hasAny(text, ["barista", "flat white", "latte", "cappuccino"])) return "cafe";
  if (hasAny(skill, ["order.fastfood"])) return "fastfood";
  if (hasAny(skill, ["order.delivery"]) || hasAny(text, ["uber eats", "courier", "leave at door", "buzz apt"])) return "delivery";
  if (hasAny(skill, ["order.grocery"]) || hasAny(text, ["grocery", "supermarket", "kasiyer"])) return "grocery";
  if (hasAny(skill, ["order.bill", "order.tipping"]) || hasAny(text, ["bill", "split", "tip", "receipt", "apple pay", "separate check", "payment"])) return "bill";
  if (hasAny(skill, ["order.bar", "bar.approach"]) || hasAny(text, ["cocktail", "wine", "beer", "pub", "whisky", "last call"])) return "bar";
  if (hasAny(skill, ["order.restaurant", "order.custom", "order.complaint"]) || hasAny(text, ["restaurant", "waiter", "menu", "dinner", "steak"])) return "restaurant";

  if (hasAny(skill, ["dating-app", "online_dating", "opener"]) || hasAny(text, ["dating app", "hinge", "match", "bio", "opener"])) return "dating_app";
  if (hasAny(skill, ["firstdate", "first-date", "second_date", "date"]) || hasAny(text, ["first date", "second date", "coffee date", "dinner friday"])) return "date_cafe";
  if (hasAny(skill, ["partytalk"]) || hasWord(text, ["party"])) return "party";
  if (hasAny(skill, ["flirt", "personal.b1.breakup", "personal.b1.long-distance", "personal.b1.love-boundaries", "personal.b1.repair"]) || hasToken(skill, "date")) return "relationship";

  if (hasAny(skill, ["codereview", "work.tech", "junior_dev"]) || hasAny(text, ["code review", "pr review", "pair programming", "github"])) return "work_code";
  if (hasAny(skill, ["work.email"]) || hasAny(text, ["email", "follow up", "subject", "bumping this"])) return "work_email";
  if (hasAny(skill, ["work.remote", "work.slack", "work.standup"]) || hasAny(text, ["slack", "async", "standup", "time zone"])) return "work_remote";
  if (hasAny(skill, ["interview", "hire", "salary_neg", "career.b1", "career.b2"]) || hasAny(text, ["interview", "salary", "tell me about yourself"]) || hasWord(text, ["hr"])) return "work_interview";
  if (hasAny(skill, ["networking", "coffeechat", "ny_tech_conf"]) || hasAny(text, ["networking", "conference", "linkedin", "coffee chat"])) return "work_networking";
  if (hasAny(skill, ["professional.c1", "presentation", "keynote"]) || hasAny(text, ["board", "keynote", "presentation", "public speaking"])) return "work_presentation";
  if (hasAny(skill, ["work", "professional", "career"]) || hasAny(text, ["meeting", "manager", "feedback", "promotion", "1:1", "review"])) return "work_meeting";

  if (hasAny(skill, ["ielts.w1", "ielts.w2"]) || hasAny(text, ["writing t1", "writing t2", "essay", "bar chart", "line graph"])) return "writing";
  if (hasAny(skill, ["uni_admission", "erasmus_amsterdam"]) || hasAny(text, ["university", "campus", "professor", "office hour", "module", "orientation"])) return "university";
  if (hasAny(skill, ["ielts", "story.ielts"]) || hasAny(text, ["speaking part", "cue card", "mock test"])) return "ielts";

  if (hasAny(skill, ["daily.taxi"]) || hasAny(text, ["taxi", "uber", "lyft", "driver", "license plate"])) return "taxi";
  if (hasAny(skill, ["daily.transport"]) || hasAny(text, ["metro", "train", "bus", "shuttle"]) || hasWord(text, ["stops"])) return "transit";
  if (hasAny(skill, ["directions", "wayfinding", "daily.a2.lost"]) || hasAny(text, ["directions", "map", "turn left", "kaybol", "yol sor"])) return "directions";

  if (hasAny(text, ["hotel", "check-in", "reservation under", "room key", "late checkout"])) return "hotel";
  if (hasAny(skill, ["housing", "apartment_hunt", "landlord"]) || hasAny(text, ["apartment", "landlord", "roommate", "utilities", "repairman"]) || hasWord(text, ["rent"])) return "housing";

  if (hasAny(skill, ["daily.phone", "customer_support"]) || hasAny(text, ["phone", "voicemail", "call back", "customer service", "speak to your manager", "telefon hatt", "sim"])) return "phone";
  if (hasAny(skill, ["tech_support"]) || hasAny(text, ["tech support", "internet down", "error code", "restart", "cleared cache"])) return "tech_support";

  if (hasAny(skill, ["daily.emergency"]) || hasAny(text, ["911", "999", "ambulance", "police report", "emergency", "unconscious"])) return "emergency";
  if (hasAny(skill, ["dentist"]) || hasAny(text, ["dentist", "tooth", "teeth", "cavity", "x-ray"])) return "dentist";
  if (hasAny(skill, ["optician"]) || hasAny(text, ["optician", "glasses", "frames", "eye exam"])) return "optician";
  if (hasAny(skill, ["vet"]) || hasWord(text, ["vet", "pet", "vaccine", "dog", "cat"])) return "vet";
  if (hasAny(skill, ["doctor_visit", "daily.health", "daily.a2.doctor"]) || hasAny(text, ["doctor", "clinic", "symptom", "diagnosis", "second opinion"])) return "doctor";
  if (hasAny(skill, ["pharmacy"]) || hasAny(text, ["pharmacy", "prescription", "medicine", "headache", "side effects"])) return "pharmacy";

  if (hasAny(skill, ["gym", "gymsub", "yogaclass"]) || hasAny(text, ["gym", "workout", "trainer", "yoga", "membership"])) return "gym";
  if (hasAny(skill, ["salon", "salondetailed"]) || hasAny(text, ["hair", "fade", "manicure", "pedicure"])) return "salon";
  if (hasAny(skill, ["shopping", "drycleaner"]) || hasAny(text, ["shopping", "store", "size", "return", "refund", "tags still on", "dry cleaner"])) return "shopping";
  if (hasAny(skill, ["bank", "bankopen"]) || hasAny(text, ["bank", "atm", "debit", "iban", "currency", "cuzdan", "cüzdan"]) || hasWord(text, ["account"])) return "bank";
  if (hasAny(skill, ["dmv", "insurance", "utilities"]) || hasAny(text, ["dmv", "license", "insurance", "deductible", "internet setup", "service plan", "ehliyet", "sigorta", "seçmen", "secmen", "voter"])) return "service_counter";
  if (hasAny(skill, ["library"]) || hasAny(text, ["library", "book", "reserve", "kütüphane", "kutuphane"])) return "library";
  if (hasAny(skill, ["postoffice"]) || hasAny(text, ["post office", "package", "tracking", "priority mail", "paket", "kargo", "postane"])) return "package";
  if (hasAny(skill, ["worship"]) || hasAny(text, ["mosque", "church", "cami", "kilise", "prayer"])) return "worship";

  if (hasAny(skill, ["family", "in-laws"]) || hasAny(text, ["family", "mother", "father", "parents", "aile"])) return "family";
  if (hasAny(skill, ["hobbies", "new-hobby"]) || hasAny(text, ["hobby", "hobbies"])) return "hobbies";
  if (hasAny(skill, ["weather"]) || hasAny(text, ["weather", "rain", "sunny", "hava"])) return "weather";
  if (hasAny(skill, ["self-care", "therapy"]) || hasAny(text, ["self-care", "therapy", "boundaries"])) return "self_care";

  return FALLBACK_BY_MODE[scene.mode] ?? "daily_conversation";
}

export function getSceneVisualImage(scene: VisualScene): string {
  const theme = getVisualThemeForScene(scene);
  const list = VISUAL_THEME_IMAGES[theme] ?? VISUAL_THEME_IMAGES.daily_conversation;
  const key = scene.lessonId || scene.id || scene.skillId || scene.mode;
  let hash = 0;
  for (let i = 0; i < key.length; i++) {
    hash = (hash << 5) - hash + key.charCodeAt(i);
    hash |= 0;
  }
  return list[Math.abs(hash) % list.length];
}
