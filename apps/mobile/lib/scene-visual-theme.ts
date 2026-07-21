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

// High-resolution (1600px width), optimized for premium mobile OLED screens (q=90)
const IMG = (photoId: string) =>
  `https://images.unsplash.com/${photoId}?auto=format&fit=crop&w=1600&q=90`;

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
    IMG("photo-1542291026-7eec264c27ff"), // modern terminal neon glow
    IMG("photo-1490430657723-4d607c1503fc"), // airport sunset runway
    IMG("photo-1436491865332-7a61a109cc05"), // plane passenger window
    IMG("photo-1506012787146-f92b2d7d6d96"), // luxury airplane cabin
    IMG("photo-1530521954074-e64f6810b32d"), // luggage passport
    IMG("photo-1483450388369-9ed95738483c"), // night airport tarmac lights
  ],
  immigration: [
    IMG("photo-1436491865332-7a61a109cc05"),
    IMG("photo-1517400508447-f8dd518b86db"), // travel checkpoint
    IMG("photo-1522071820081-009f0129c71c"), // official counter
  ],
  bar: [
    IMG("photo-1514362545857-3bc16c4c7d1b"), // bartender pouring cocktail
    IMG("photo-1470337458703-46ad1756a187"), // moody neon bar counter
    IMG("photo-1572116469696-31de0f17cc34"), // craft beer taps
    IMG("photo-1566417713940-fe7c737a9ef2"), // luxury pub interior
    IMG("photo-1510812431401-41d2bd2722f3"), // wine glasses moody light
    IMG("photo-1528605248644-14dd04022da1"), // dynamic night pub crowd
  ],
  cafe: [
    IMG("photo-1501339847302-ac426a4a7cbb"), // aesthetic warm cafe
    IMG("photo-1495474472287-4d71bcdd2085"), // cozy coffee table
    IMG("photo-1559925393-8be0ec4767c8"), // warm light window cafe
    IMG("photo-1509042239860-f550ce710b93"), // pour-over coffee close-up
    IMG("photo-1442512595331-e89e73853f31"), // espresso machine bar
    IMG("photo-1453614512568-c4024d13c247"), // rustic coffee shop
    IMG("photo-1554118811-1e0d58224f24"), // minimalist urban cafe
    IMG("photo-1525648199074-cee30ba79a4a"), // coffee shop interior design
  ],
  restaurant: [
    IMG("photo-1517248135467-4c7edcad34c4"), // premium modern dining interior
    IMG("photo-1414235077428-338989a2e8c0"), // fine dining plate
    IMG("photo-1544025162-d76694265947"), // gourmet steak
    IMG("photo-1504674900247-0877df9cc836"), // dynamic kitchen plating
    IMG("photo-1550966871-3ed3cdb5ed0c"), // moody table setup
    IMG("photo-1551218808-94e220e084d2"), // fresh restaurant serve
    IMG("photo-1559339352-11d035aa65de"), // cozy romantic restaurant lights
  ],
  fastfood: [
    IMG("photo-1568901346375-23c9450c58cd"), // high quality burger
    IMG("photo-1768204039041-bbb7adf98078"), // modern fastfood counter
    IMG("photo-1746023790231-d6d87d1dfeab"), // gourmet pizza slice
    IMG("photo-1763689389824-dd2cea2e5772"), // fries and diner style
  ],
  bill: [
    IMG("photo-1556742049-0cfed4f6a45d"), // paying with card
    IMG("photo-1563013544-824ae1b704d3"), // POS terminal
    IMG("photo-1517248135467-4c7edcad34c4"), // restaurant receipt
  ],
  delivery: [
    IMG("photo-1566576721346-d4a3b4eaeb55"), // courier close up
    IMG("photo-1586528116311-ad8dd3c8310d"), // delivery box parcel
    IMG("photo-1768204039041-bbb7adf98078"), // takeout box delivery
  ],
  grocery: [
    IMG("photo-1542838132-92c53300491e"), // supermarket fresh alley
    IMG("photo-1579113800032-c38bd7635818"), // organic vegetables shop
    IMG("photo-1607082348824-0a96f2a4b9da"), // checkout counter payment
  ],
  taxi: [
    IMG("photo-1449965408869-eaa3f722e40d"), // taxi passenger perspective
    IMG("photo-1485291571150-772bcfc10da5"), // cab dashboard at night
    IMG("photo-1503376780353-7e6692767b70"), // yellow cab nyc
  ],
  transit: [
    IMG("photo-1544620347-c4fd4a3d5957"), // modern bus interior/stop
    IMG("photo-1474487548417-781cb71495f3"), // subway metro train platform
  ],
  directions: [
    IMG("photo-1524661135-423995f22d0b"), // map GPS routing
    IMG("photo-1519501025264-65ba15a82390"), // night city lights navigation
    IMG("photo-1480714378408-67cf0d13bc1b"), // city block street signs
    IMG("photo-1517732306149-e8f829eb588a"), // pedestrian crossing
  ],
  hotel: [
    IMG("photo-1566073771259-6a8506099945"), // luxury hotel lobby
    IMG("photo-1590490360182-c33d57733427"), // neat double hotel room
    IMG("photo-1542314831-068cd1dbfeeb"), // receptionist desk checkin
    IMG("photo-1618773928121-c32242e63f39"), // premium bed close up
  ],
  housing: [
    IMG("photo-1560448204-e02f11c3d0e2"), // clean modern apartment interior
    IMG("photo-1560185127-6ed189bf02f4"), // living room cozy warm
    IMG("photo-1582407947304-fd86f028f716"), // apartment hunting keys
  ],
  pharmacy: [
    IMG("photo-1584308666744-24d5c474f2ae"), // pharmacist shelves
    IMG("photo-1585435557343-3b092031a831"), // pills prescription counter
    IMG("photo-1587854692152-cbe660dbde88"), // medical drug package
    IMG("photo-1579684385127-1ef15d508118"), // clinic reception
  ],
  doctor: [
    IMG("photo-1576091160550-2173dba999ef"), // stethoscope checkup
    IMG("photo-1580281658223-9b93f18ae9ae"), // doctor discussing with patient
    IMG("photo-1530026405186-ed1f139313f8"), // modern hospital exam room
  ],
  dentist: [
    IMG("photo-1606811971618-4486d14f3f99"), // dentist office chair
    IMG("photo-1588776814546-1ffcf47267a5"), // dental tools checkup
  ],
  optician: [
    IMG("photo-1574258495973-f010dfbb5371"), // glasses frames display
    IMG("photo-1511499767150-a48a237f0083"), // eye exam chart clinic
  ],
  vet: [
    IMG("photo-1576201836106-db1758fd1c97"), // puppy veterinary checkup
    IMG("photo-1583337130417-3346a1be7dee"), // cat in clinic exam
  ],
  emergency: [
    IMG("photo-1587745416684-47953f16f02f"), // flashing emergency lights
    IMG("photo-1504439468489-c8920d796a29"), // hospital trauma room
    IMG("photo-1527613426441-4da17471b66d"), // ambulance interior
  ],
  shopping: [
    IMG("photo-1481437156560-3205f6a55735"), // modern clothing store
    IMG("photo-1441986300917-64674bd600d8"), // boutique checkout rack
    IMG("photo-1555529669-e69e7aa0ba9a"), // aesthetic shopping bags
    IMG("photo-1472851294608-062f824d29cc"), // store window displays
    IMG("photo-1483985988355-763728e1935b"), // luxury shopping street
    IMG("photo-1489987707025-afc232f7ea0f"), // fitting room mirrors
  ],
  bank: [
    IMG("photo-1563013544-824ae1b704d3"),
    IMG("photo-1556742049-0cfed4f6a45d"),
    IMG("photo-1554224155-6726b3ff858f"), // bank clerk office
  ],
  service_counter: [
    IMG("photo-1556742049-0cfed4f6a45d"),
    IMG("photo-1556740749-887f6717d7e4"),
    IMG("photo-1454165804606-c3d57bc86b40"), // office registry desk
  ],
  package: [
    IMG("photo-1566576721346-d4a3b4eaeb55"),
    IMG("photo-1586528116311-ad8dd3c8310d"),
  ],
  library: [
    IMG("photo-1521587760476-6c12a4b040da"), // dark academia library
    IMG("photo-1524995997946-a1c2e315a42f"), // library study tables
    IMG("photo-1456324504439-367cee3b3c32"), // bookshelf books close up
  ],
  worship: [
    IMG("photo-1774191442045-64515a9c61d7"),
    IMG("photo-1542810634-71277d95dcbb"),
  ],
  gym: [
    IMG("photo-1534438327276-14e5300c3a48"), // gym barbell plates
    IMG("photo-1526506118085-60ce8714f8c5"), // modern treadmill rows
    IMG("photo-1605296867304-46d5465a13f1"), // athletic training weights
    IMG("photo-1517836357463-d25dfeac3438"), // fitness weights rack
    IMG("photo-1540497077202-7c8a3999166f"), // yoga dumbbells aesthetic
  ],
  salon: [
    IMG("photo-1503951914875-452162b0f3f1"), // barber shop styling
    IMG("photo-1585747860715-2ba37e788b70"), // beauty salon mirror
    IMG("photo-1521590832167-7bcbfaa6381f"), // hair cutting styling
    IMG("photo-1600948836101-f9ffda59d250"), // premium hair care products
  ],
  phone: [
    IMG("photo-1586953208448-b95a79798f07"),
    IMG("photo-1523206489230-c012c64b2b48"), // screen call app
    IMG("photo-1553775282-20af80779df7"), // dialing contact
    IMG("photo-1534536281715-e28d76689b4d"), // mobile workspace phone
    IMG("photo-1616348436168-de43ad0db179"), // charging phone on stand
  ],
  tech_support: [
    IMG("photo-1516321318423-f06f85e504b3"),
    IMG("photo-1580894894513-541e068a3e2b"), // call center setup
    IMG("photo-1497366216548-37526070297c"), // server hardware cabinet
    IMG("photo-1504384308090-c894fdcc538d"), // tech helpdesk support
  ],
  ielts: [
    IMG("photo-1434030216411-0b793f4b4173"), // student workspace notebook
    IMG("photo-1501504905252-473c47e087f8"), // exam sheet test preparation
    IMG("photo-1513258496099-48168024aec0"), // library studying
    IMG("photo-1524178232363-1fb2b075b655"), // mock test notes
  ],
  university: [
    IMG("photo-1562774053-701939374585"), // university classic lecture hall
    IMG("photo-1523580846011-d3a5bc25702b"), // graduation student caps
    IMG("photo-1523240795612-9a054b0db644"), // group discussion campus
    IMG("photo-1521587760476-6c12a4b040da"), // university historical library
  ],
  writing: [
    IMG("photo-1456324504439-367cee3b3c32"),
    IMG("photo-1501504905252-473c47e087f8"),
    IMG("photo-1488190211105-8b0e65b80b4e"), // writing letter desk
  ],
  dating_app: [
    IMG("photo-1586953208448-b95a79798f07"),
    IMG("photo-1516589178581-6cd7833ae3b2"), // texting boyfriend
    IMG("photo-1495474472287-4d71bcdd2085"), // coffee cups phone
  ],
  date_cafe: [
    IMG("photo-1516589178581-6cd7833ae3b2"), // happy couple laughing in cafe
    IMG("photo-1509042239860-f550ce710b93"), // warm coffee table sharing
    IMG("photo-1517248135467-4c7edcad34c4"), // dinner reservation date
    IMG("photo-1514362545857-3bc16c4c7d1b"), // cocktails date close up
    IMG("photo-1464746133101-a2c3f88e0dd9"), // sunset date walk
    IMG("photo-1522673607200-164d1b6ce486"), // dinner date fairy lights
  ],
  relationship: [
    IMG("photo-1516589178581-6cd7833ae3b2"),
    IMG("photo-1495474472287-4d71bcdd2085"),
    IMG("photo-1517248135467-4c7edcad34c4"),
    IMG("photo-1516450360452-9312f5e86fc7"), // romantic home date
    IMG("photo-1518199266791-5375a83190b7"), // couple holding hands close up
  ],
  party: [
    IMG("photo-1516450360452-9312f5e86fc7"),
    IMG("photo-1510812431401-41d2bd2722f3"),
    IMG("photo-1514362545857-3bc16c4c7d1b"),
  ],
  work_meeting: [
    IMG("photo-1517245386807-bb43f82c33c4"), // office board meeting
    IMG("photo-1522071820081-009f0129c71c"), // creative design discussion
    IMG("photo-1519389950473-47ba0277781c"), // technology team meeting
    IMG("photo-1454165804606-c3d57bc86b40"), // modern corporate meeting
    IMG("photo-1531538606174-0f90ff5dce83"), // board strategy discussion
  ],
  work_interview: [
    IMG("photo-1553877522-43269d4ea984"), // job interview resume review
    IMG("photo-1454165804606-c3d57bc86b40"),
    IMG("photo-1504384308090-c894fdcc538d"),
  ],
  work_code: [
    IMG("photo-1516321318423-f06f85e504b3"),
    IMG("photo-1515879218367-8466d910aaa4"), // programming coding setup
    IMG("photo-1498050108023-c5249f4df085"), // laptop developer workspace
  ],
  work_email: [
    IMG("photo-1499750310107-5fef28a66643"), // laptop screen emails inbox
    IMG("photo-1516321318423-f06f85e504b3"),
    IMG("photo-1488190211105-8b0e65b80b4e"),
  ],
  work_networking: [
    IMG("photo-1556761175-b413da4baf72"), // conference hall networking
    IMG("photo-1515187029135-18ee286d815b"), // business chat lounge
    IMG("photo-1522071820081-009f0129c71c"),
  ],
  work_remote: [
    IMG("photo-1497366811353-6870744d04b2"), // remote coding cafe setup
    IMG("photo-1516321318423-f06f85e504b3"),
    IMG("photo-1499750310107-5fef28a66643"),
  ],
  work_presentation: [
    IMG("photo-1475721027785-f74eccf877e2"), // presentation key speaker
    IMG("photo-1517048676732-d65bc937f952"), // team slideshow presenter
    IMG("photo-1515187029135-18ee286d815b"),
  ],
  daily_conversation: [
    IMG("photo-1519501025264-65ba15a82390"), // cozy street cafe chatting
    IMG("photo-1480714378408-67cf0d13bc1b"), // park walk chatting
    IMG("photo-1501339847302-ac426a4a7cbb"), // talking over drinks
    IMG("photo-1517248135467-4c7edcad34c4"), // dining conversations
  ],
  family: [
    IMG("photo-1511895426328-dc8714191300"), // parents child picnic
    IMG("photo-1529156069898-49953e39b3ac"), // family dinner table
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
    IMG("photo-1506126613408-eca07ce68773"), // yoga breathing self care
    IMG("photo-1526506118085-60ce8714f8c5"),
    IMG("photo-1495474472287-4d71bcdd2085"),
  ],
};

function hasAny(value: string, needles: readonly string[]): boolean {
  return needles.some((needle) => value.includes(needle));
}

function hasToken(value: string, token: string): boolean {
  return new RegExp(`(^|[._-])\\b${escapeRegExp(token)}\\b($|[._-])`, "i").test(value);
}

function escapeRegExp(value: string): string {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function hasWord(value: string, words: readonly string[]): boolean {
  return words.some((word) => new RegExp(`\\b${escapeRegExp(word)}\\b`, "i").test(value));
}

function textOf(scene: VisualScene): string {
  return [scene.skillId, scene.lessonId, scene.title, scene.description]
    .filter(Boolean)
    .join(" ")
    .toLowerCase();
}

function skillIs(skill: string, prefixes: readonly string[]): boolean {
  return prefixes.some(
    (prefix) =>
      skill === prefix ||
      skill.startsWith(`${prefix}.`) ||
      skill.startsWith(`${prefix}-`),
  );
}

function themeFromSkillId(skill: string): VisualTheme | null {
  // Skill IDs are the highest-confidence signal. They prevent broad text
  // matches from misclassifying scenes, e.g. "Flat White" => housing via
  // "flat", or restaurant scenes containing "sipariş" => delivery.
  if (skillIs(skill, ["order.cafe"])) return "cafe";
  if (skillIs(skill, ["order.fastfood"])) return "fastfood";
  if (skillIs(skill, ["order.delivery"])) return "delivery";
  if (skillIs(skill, ["order.grocery", "daily.a2.supermarket"])) {
    return "grocery";
  }
  if (skillIs(skill, ["order.bill", "order.tipping"])) return "bill";
  if (skillIs(skill, ["order.bar", "bar.approach"])) return "bar";
  if (skillIs(skill, ["order.restaurant", "order.custom", "order.complaint"])) {
    return "restaurant";
  }

  if (skillIs(skill, ["airport"])) return "airport";
  if (skillIs(skill, ["arc.us_immigration"])) return "immigration";

  if (skillIs(skill, ["daily.hotel", "daily.a2.hotel"])) return "hotel";
  if (
    skillIs(skill, [
      "daily.housing",
      "daily.expanded.landlord",
      "arc.apartment_hunt",
    ])
  ) {
    return "housing";
  }

  if (skillIs(skill, ["daily.pharmacy", "daily.a2.pharmacy"])) {
    return "pharmacy";
  }
  if (skillIs(skill, ["daily.health", "daily.a2.doctor", "arc.doctor_visit"])) {
    return "doctor";
  }
  if (skillIs(skill, ["daily.expanded.dentist"])) return "dentist";
  if (skillIs(skill, ["daily.expanded.optician"])) return "optician";
  if (skillIs(skill, ["daily.expanded.vet"])) return "vet";
  if (skillIs(skill, ["daily.emergency"])) return "emergency";

  if (
    skillIs(skill, [
      "daily.shopping",
      "daily.a2.shopping",
      "daily.expanded.drycleaner",
    ])
  ) {
    return "shopping";
  }
  if (skillIs(skill, ["daily.bank", "daily.expanded.bankopen"])) return "bank";
  if (
    skillIs(skill, [
      "daily.service",
      "daily.expanded.dmv",
      "daily.expanded.insurance",
      "daily.expanded.utilities",
    ])
  ) {
    return "service_counter";
  }
  if (
    skillIs(skill, [
      "daily.logistics",
      "daily.a2.micro-package",
      "daily.expanded.postoffice",
    ])
  ) {
    return "package";
  }
  if (skillIs(skill, ["daily.expanded.library"])) return "library";
  if (skillIs(skill, ["daily.expanded.worship"])) return "worship";
  if (
    skillIs(skill, [
      "daily.gym",
      "daily.expanded.gymsub",
      "daily.expanded.yogaclass",
    ])
  ) {
    return "gym";
  }
  if (skillIs(skill, ["daily.salon", "daily.expanded.salondetailed"])) {
    return "salon";
  }
  if (skillIs(skill, ["daily.phone", "arc.customer_support"])) return "phone";
  if (skillIs(skill, ["daily.tech_support", "arc.tech_support"])) {
    return "tech_support";
  }

  if (skillIs(skill, ["daily.taxi", "daily.a2.taxi"])) return "taxi";
  if (
    skillIs(skill, [
      "daily.transport",
      "daily.a2.transit",
      "daily.expanded.transitdelay",
    ])
  ) {
    return "transit";
  }
  if (skillIs(skill, ["daily.directions", "daily.a2.lost"])) {
    return "directions";
  }

  if (skillIs(skill, ["daily.a2.family", "personal.b1.in-laws"])) {
    return "family";
  }
  if (skillIs(skill, ["daily.a2.hobbies", "personal.b1.new-hobby"])) {
    return "hobbies";
  }
  if (skillIs(skill, ["daily.a2.weather", "daily.a2.weatherlikes"])) {
    return "weather";
  }
  if (skillIs(skill, ["personal.b1.self-care", "personal.b1.therapy"])) {
    return "self_care";
  }

  if (skillIs(skill, ["personal.b1.dating-app", "arc.online_dating", "flirt.opener"])) {
    return "dating_app";
  }
  if (
    skillIs(skill, [
      "flirt.firstdate",
      "flirt.second_date",
      "flirt.date",
      "personal.b1.first-date",
    ])
  ) {
    return "date_cafe";
  }
  if (skillIs(skill, ["daily.expanded.partytalk"])) return "party";
  if (
    skillIs(skill, [
      "flirt",
      "personal.b1.breakup",
      "personal.b1.long-distance",
      "personal.b1.love-boundaries",
      "personal.b1.repair",
      "personal.b1.we-need-to-talk",
      "personal.b1.apology",
    ])
  ) {
    return "relationship";
  }

  if (skillIs(skill, ["work.codereview", "work.tech", "arc.junior_dev_london"])) {
    return "work_code";
  }
  if (skillIs(skill, ["work.email"])) return "work_email";
  if (skillIs(skill, ["work.remote", "work.slack", "work.standup"])) {
    return "work_remote";
  }
  if (skillIs(skill, ["work.interview", "work.hire", "arc.salary_neg"])) {
    return "work_interview";
  }
  if (
    skillIs(skill, [
      "work.network",
      "work.networking",
      "work.coffeechat",
      "arc.ny_tech_conf",
    ])
  ) {
    return "work_networking";
  }
  if (
    skillIs(skill, [
      "work.1on1",
      "work.crisis",
      "work.disagree",
      "work.feedback_giving",
      "work.meeting",
      "work.meeting2",
      "work.promotion_ask",
      "work.review",
      "arc.work_conflict",
    ])
  ) {
    return "work_meeting";
  }

  if (skillIs(skill, ["ielts.w1", "ielts.w2"])) return "writing";
  if (skillIs(skill, ["arc.uni_admission", "arc.erasmus_amsterdam", "story.erasmus"])) {
    return "university";
  }
  if (skillIs(skill, ["ielts.p1", "ielts.p2", "ielts.p3", "story.ielts"])) {
    return "ielts";
  }

  return null;
}

function themeFromLessonId(lessonId: string | undefined): VisualTheme | null {
  if (!lessonId) return null;
  if (
    lessonId.startsWith("career.b2.salary_negotiation") ||
    lessonId.startsWith("career.b2.equity_negotiation")
  ) {
    return "work_interview";
  }
  if (lessonId.startsWith("career.b2.")) return "work_meeting";
  if (lessonId === "story.erasmus.5") return "party";
  if (lessonId === "story.nyc.8") return "bar";

  switch (lessonId) {
    case "daily.survival.a1.2":
      return "daily_conversation";
    case "daily.expand.22":
      return "bank";
    case "daily.expand.23":
      return "phone";
    default:
      return null;
  }
}

export function getVisualThemeForScene(scene: VisualScene): VisualTheme {
  const skill = (scene.skillId || "").toLowerCase();
  const text = textOf(scene);
  const lessonTheme = themeFromLessonId(scene.lessonId);
  if (lessonTheme) return lessonTheme;
  const skillTheme = themeFromSkillId(skill);
  if (skillTheme) return skillTheme;

  // Professional/B1-C1 scenes share broad skill IDs, so title/lesson text must
  // win before broad substring rules such as "tea" or generic
  // "professional => meeting". Otherwise a bank, police or municipality scene
  // can look like a random cafe/payment/office card.
  if (
    hasAny(skill, ["professional.b1", "professional.c1"]) ||
    hasAny(text, ["professional.b1", "professional.c1"])
  ) {
    if (
      hasAny(text, ["lease", "kira", "landlord", "ev sahibi", "faturalar"])
    ) {
      return "housing";
    }
    if (
      hasAny(text, ["bank", "banka", "hesap aç", "deposit", "depozit", "kart"])
    ) {
      return "bank";
    }
    if (
      hasAny(text, ["sick leave", "hastalık izni", "doctor", "doktor"])
    ) {
      return "doctor";
    }
    if (
      hasAny(text, [
        "insurance",
        "sigorta",
        "lawyer",
        "avukat",
        "witness",
        "tanık",
        "govoffice",
        "resmi belge",
        "police",
        "polis",
        "municipality",
        "belediye",
        "complaint",
        "şikayet",
        "legal",
        "hr soruşturması",
      ])
    ) {
      return "service_counter";
    }
    if (
      hasAny(text, ["sales call", "salescall", "cold call", "investor", "yatırımcı", "referral"])
    ) {
      return "work_networking";
    }
    if (
      hasAny(text, ["conflict", "çatış", "negotiation", "müzakere", "feedback", "geri bildirim"])
    ) {
      return "work_meeting";
    }
    if (
      hasAny(text, ["keynote", "sunum", "board", "kurul", "press", "basın", "all-hands", "pitch"])
    ) {
      return "work_presentation";
    }
  }

  // --- HAVAALANI & PASAPORT KONTROLÜ (Airport & Immigration) ---
  if (
    hasAny(skill, ["arc.us_immigration", "pasaport", "gurum"]) ||
    hasAny(text, ["immigration", "customs", "cbp", "passport", "visa", "jfk", "pasaport", "gümrük", "vize"])
  ) {
    return "immigration";
  }
  if (
    hasAny(skill, ["airport", "arc.long_haul", "havaalanı", "uçuş", "bilet"]) ||
    hasAny(text, ["flight", "gate", "baggage", "airline", "boarding", "havaalanı", "uçuş", "uçak", "terminal", "bilet"])
  ) {
    return "airport";
  }

  // --- OTEL & KONAKLAMA (Hotel & Housing) ---
  if (
    hasAny(skill, ["daily.hotel", "otel", "oda"]) ||
    hasAny(text, ["hotel", "check-in", "reservation under", "room key", "late checkout", "otel", "resepsiyon"]) ||
    hasWord(text, ["oda"])
  ) {
    return "hotel";
  }
  if (
    hasAny(skill, ["housing", "apartment_hunt", "landlord", "ev", "kira", "ev sahibi"]) ||
    hasAny(text, ["apartment", "landlord", "roommate", "utilities", "repairman", "apartman", "kira", "oda arkadaşı", "ev sahibi"]) ||
    hasWord(text, ["rent", "lease", "flat"])
  ) {
    return "housing";
  }

  // --- YEME-İÇME & HİZMETLER (Food, Drinks & Services) ---
  if (
    hasAny(skill, ["order.cafe", "kahve", "kafe", "barista"]) ||
    hasAny(text, ["barista", "flat white", "latte", "cappuccino"]) ||
    hasWord(text, ["coffee", "tea", "kahve", "kafe", "çay"])
  ) {
    return "cafe";
  }
  if (
    hasAny(skill, ["order.fastfood", "fastfood", "hamburger", "pizza"]) ||
    hasAny(text, ["burger", "pizza", "fries", "hotdog", "taco", "fastfood", "fast food"])
  ) {
    return "fastfood";
  }
  if (
    hasAny(skill, ["order.delivery", "kurye", "paket"]) ||
    hasAny(text, ["uber eats", "courier", "leave at door", "buzz apt", "delivery", "kurye", "teslimat"])
  ) {
    return "delivery";
  }
  if (
    hasAny(skill, ["order.grocery", "market", "manav"]) ||
    hasAny(text, ["grocery", "supermarket", "kasiyer", "market", "manav", "alışveriş"])
  ) {
    return "grocery";
  }
  if (
    hasAny(skill, ["order.bill", "order.tipping", "hesap", "bahşiş"]) ||
    hasAny(text, ["apple pay", "separate check", "kartla ödeme"]) ||
    hasWord(text, ["bill", "split", "tip", "receipt", "payment", "hesap", "bahşiş"])
  ) {
    return "bill";
  }
  if (
    hasAny(skill, ["order.bar", "bar.approach", "bar", "bira", "kokteyl", "pub"]) ||
    hasAny(text, ["cocktail", "wine", "beer", "whisky", "last call", "bira", "kokteyl", "şarap", "viski"]) ||
    hasWord(text, ["bar", "pub"])
  ) {
    return "bar";
  }
  if (
    hasAny(skill, ["order.restaurant", "order.custom", "order.complaint", "restoran", "yemek"]) ||
    hasAny(text, ["restaurant", "waiter", "menu", "dinner", "steak", "restoran", "garson", "yemek", "akşam yemeği"])
  ) {
    return "restaurant";
  }

  // --- SOSYALLEŞME & İLİŞKİLER (Social, Flirting & Relationships) ---
  if (
    hasAny(skill, ["dating-app", "online_dating", "opener", "tinder"]) ||
    hasAny(text, ["dating app", "hinge", "match", "bio", "opener", "tinder", "okcupid"])
  ) {
    return "dating_app";
  }
  if (
    hasAny(skill, ["firstdate", "first-date", "second_date", "date", "randevu", "buluşma"]) ||
    hasAny(text, ["first date", "second date", "coffee date", "dinner friday", "ilk buluşma", "ilk randevu"])
  ) {
    return "date_cafe";
  }
  if (
    hasAny(skill, ["partytalk", "parti", "kutlama"]) ||
    hasWord(text, ["party", "parti", "celebration", "kutlama"])
  ) {
    return "party";
  }
  if (
    hasAny(skill, ["flirt", "personal.b1.breakup", "personal.b1.long-distance", "personal.b1.love-boundaries", "personal.b1.repair", "sevgili", "aşk", "ilişki"]) ||
    hasToken(skill, "date")
  ) {
    return "relationship";
  }

  // --- İŞ & KARİYER (Work & Career) ---
  if (
    hasAny(skill, ["codereview", "work.tech", "junior_dev", "kod", "yazılım"]) ||
    hasAny(text, ["code review", "pr review", "pair programming", "github", "coding", "software", "yazılım", "kod"])
  ) {
    return "work_code";
  }
  if (
    hasAny(skill, ["work.email", "eposta"]) ||
    hasAny(text, ["email", "follow up", "subject", "bumping this", "e-posta", "eposta", "mail"])
  ) {
    return "work_email";
  }
  if (
    hasAny(skill, ["work.remote", "work.slack", "work.standup", "uzaktan"]) ||
    hasAny(text, ["slack", "async", "standup", "time zone", "remote work", "uzaktan çalışma", "evden çalışma"])
  ) {
    return "work_remote";
  }
  if (
    hasAny(skill, ["interview", "hire", "salary_neg", "mülakat", "iş görüşmesi"]) ||
    hasAny(text, ["interview", "salary", "tell me about yourself", "mülakat", "iş görüşmesi", "maaş"]) ||
    hasWord(text, ["hr"])
  ) {
    return "work_interview";
  }
  if (
    hasAny(skill, ["networking", "coffeechat", "ny_tech_conf"]) ||
    hasAny(text, ["networking", "conference", "linkedin", "coffee chat", "tanışma", "konferans"])
  ) {
    return "work_networking";
  }
  if (
    hasAny(skill, ["professional.c1", "presentation", "keynote", "sunum"]) ||
    hasAny(text, ["board", "keynote", "presentation", "public speaking", "sunum", "tahta", "slayt"])
  ) {
    return "work_presentation";
  }
  if (
    hasAny(skill, ["work", "professional", "career", "toplantı", "iş", "kariyer"]) ||
    hasAny(text, ["meeting", "manager", "feedback", "promotion", "1:1", "review", "toplantı", "yönetici", "geribildirim"])
  ) {
    return "work_meeting";
  }

  // --- EĞİTİM & IELTS (Education & IELTS) ---
  if (
    hasAny(skill, ["ielts.w1", "ielts.w2", "yazma"]) ||
    hasAny(text, ["writing t1", "writing t2", "essay", "bar chart", "line graph", "kompozisyon", "makale"])
  ) {
    return "writing";
  }
  if (
    hasAny(skill, ["uni_admission", "erasmus_amsterdam", "üniversite", "kampüs"]) ||
    hasAny(text, ["university", "campus", "professor", "office hour", "module", "orientation", "üniversite", "akademik", "kampüs"])
  ) {
    return "university";
  }
  if (
    hasAny(skill, ["ielts", "story.ielts", "sınav"]) ||
    hasAny(text, ["speaking part", "cue card", "mock test", "sınav", "ielts test"])
  ) {
    return "ielts";
  }

  // --- ULAŞIM & YOL YORDAM (Transportation & Directions) ---
  if (
    hasAny(skill, ["daily.taxi", "taksi"]) ||
    hasAny(text, ["taxi", "uber", "lyft", "driver", "license plate", "taksi", "şoför"])
  ) {
    return "taxi";
  }
  if (
    hasAny(skill, ["daily.transport", "metro", "otobüs", "tren"]) ||
    hasAny(text, ["metro", "train", "bus", "shuttle", "metro", "tren", "otobüs", "istasyon"]) ||
    hasWord(text, ["stops", "durak"])
  ) {
    return "transit";
  }
  if (
    hasAny(skill, ["directions", "wayfinding", "daily.a2.lost", "yol", "adres", "harita"]) ||
    hasAny(text, ["directions", "map", "turn left", "kaybol", "yol sor", "adres", "harita"])
  ) {
    return "directions";
  }

  // --- TELEFON & DESTEK (Phone & Support) ---
  if (
    hasAny(skill, ["daily.phone", "customer_support", "telefon", "müşteri"]) ||
    hasAny(text, ["phone", "voicemail", "call back", "customer service", "speak to your manager", "telefon", "müşteri hizmetleri", "sim kart"])
  ) {
    return "phone";
  }
  if (
    hasAny(skill, ["tech_support", "teknik"]) ||
    hasAny(text, ["tech support", "internet down", "error code", "restart", "cleared cache", "teknik destek", "arıza"])
  ) {
    return "tech_support";
  }

  // --- SAĞLIK & ACİL DURUM (Health, Doctor & Emergency) ---
  if (
    hasAny(skill, ["daily.emergency", "acil"]) ||
    hasAny(text, ["911", "999", "ambulance", "police report", "emergency", "unconscious", "acil", "ambulans", "polis"])
  ) {
    return "emergency";
  }
  if (
    hasAny(skill, ["dentist", "dişçi"]) ||
    hasAny(text, ["dentist", "tooth", "teeth", "cavity", "x-ray", "dişçi", "diş", "dolgu"])
  ) {
    return "dentist";
  }
  if (
    hasAny(skill, ["optician", "gözlükçü"]) ||
    hasAny(text, ["optician", "glasses", "frames", "eye exam", "gözlükçü", "gözlük", "göz muayenesi"])
  ) {
    return "optician";
  }
  if (
    hasAny(skill, ["vet", "veteriner"]) ||
    hasWord(text, ["vet", "pet", "vaccine", "dog", "cat", "veteriner", "köpek", "kedi", "evcil hayvan"])
  ) {
    return "vet";
  }
  if (
    hasAny(skill, ["doctor_visit", "daily.health", "daily.a2.doctor", "doktor", "hastane"]) ||
    hasAny(text, ["doctor", "clinic", "symptom", "diagnosis", "second opinion", "doktor", "klinik", "teşhis", "hastane", "sağlık"])
  ) {
    return "doctor";
  }
  if (
    hasAny(skill, ["pharmacy", "eczane"]) ||
    hasAny(text, ["pharmacy", "prescription", "medicine", "headache", "side effects", "eczane", "reçete", "ilaç", "ağrı kesici"])
  ) {
    return "pharmacy";
  }

  // --- YAŞAM TARZI & DİĞER (Lifestyle, Shopping & Gym) ---
  if (
    hasAny(skill, ["gym", "gymsub", "yogaclass", "spor", "fitness"]) ||
    hasAny(text, ["gym", "workout", "trainer", "yoga", "membership", "spor salonu", "fitness", "antrenman"])
  ) {
    return "gym";
  }
  if (
    hasAny(skill, ["salon", "salondetailed", "kuaför", "berber"]) ||
    hasAny(text, ["hair", "fade", "manicure", "pedicure", "kuaför", "berber", "saç kesimi"])
  ) {
    return "salon";
  }
  if (
    hasAny(skill, ["shopping", "drycleaner", "alışveriş", "mağaza"]) ||
    hasAny(text, ["shopping", "store", "size", "return", "refund", "tags still on", "dry cleaner", "alışveriş", "mağaza", "beden", "iade"])
  ) {
    return "shopping";
  }
  if (
    hasAny(skill, ["bank", "bankopen", "banka", "hesap"]) ||
    hasAny(text, ["bank", "atm", "debit", "iban", "currency", "cuzdan", "cüzdan", "banka", "hesap açma", "döviz"]) ||
    hasWord(text, ["account", "wallet"])
  ) {
    return "bank";
  }
  if (
    hasAny(skill, ["dmv", "insurance", "utilities", "sigorta", "kamu"]) ||
    hasAny(text, ["dmv", "license", "insurance", "deductible", "internet setup", "service plan", "ehliyet", "sigorta", "seçmen", "secmen", "voter", "belediye"])
  ) {
    return "service_counter";
  }
  if (
    hasAny(skill, ["library", "kütüphane"]) ||
    hasAny(text, ["library", "book", "reserve", "kütüphane", "kutuphane"])
  ) {
    return "library";
  }
  if (
    hasAny(skill, ["postoffice", "kargo", "postane"]) ||
    hasAny(text, ["post office", "package", "tracking", "priority mail", "paket", "kargo", "postane", "posta"])
  ) {
    return "package";
  }
  if (
    hasAny(skill, ["worship", "ibadet", "cami"]) ||
    hasAny(text, ["mosque", "church", "cami", "kilise", "prayer", "ibadet"])
  ) {
    return "worship";
  }

  // --- GÜNLÜK & AİLE & HOBİ (Daily, Family & Hobbies) ---
  if (
    hasAny(skill, ["family", "in-laws", "aile"]) ||
    hasAny(text, ["family", "mother", "father", "parents", "aile", "anne", "baba", "akraba"])
  ) {
    return "family";
  }
  if (
    hasAny(skill, ["hobbies", "new-hobby", "hobi"]) ||
    hasAny(text, ["hobby", "hobbies", "hobi", "aktivite"])
  ) {
    return "hobbies";
  }
  if (
    hasAny(skill, ["weather", "hava"]) ||
    hasAny(text, ["weather", "rain", "sunny", "hava", "yağmur", "güneş"])
  ) {
    return "weather";
  }
  if (
    hasAny(skill, ["self-care", "therapy", "kişisel bakım"]) ||
    hasAny(text, ["self-care", "therapy", "boundaries", "terapi", "kişisel bakım"])
  ) {
    return "self_care";
  }

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
