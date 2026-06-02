import * as fs from 'node:fs';
import * as path from 'node:path';
import fetch from 'node-fetch';
import { SAMPLE_SCENES } from '../data/scenes';

const MOBILE_DIR = path.basename(process.cwd()) === 'mobile'
  ? process.cwd()
  : path.join(process.cwd(), 'apps', 'mobile');

// Helper to delay between requests to avoid rate limits on DDG
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// Map of skillId prefixes/categories to search queries
function getSearchQuery(skillId: string, title: string, desc: string): string {
  const t = title.toLowerCase();
  const d = desc.toLowerCase();
  const s = skillId.toLowerCase();

  // Custom overrides for specific skills
  if (s.startsWith('order.cafe')) return 'coffee cup barista espresso cafe';
  if (s.startsWith('order.restaurant')) return 'fine dining restaurant table meal';
  if (s.startsWith('order.custom') || t.includes('alerji') || t.includes('gluten')) return 'food allergy healthy organic meal';
  if (s.startsWith('order.bill') || t.includes('hesap')) return 'restaurant bill credit card payment';
  if (s.startsWith('order.complaint') || t.includes('şikayet') || t.includes('soğuk')) return 'unhappy customer service complaint';
  if (s.startsWith('order.tipping') || t.includes('bahşiş')) return 'tipping money cash restaurant';
  if (s.startsWith('order.bar') || s.startsWith('bar.approach') || t.includes('bira') || t.includes('cocktail')) return 'cocktail bar drinks bartender neon';
  if (s.startsWith('order.delivery') || t.includes('kurye')) return 'food delivery courier phone';
  
  if (s.startsWith('flirt.opener')) return 'smartphone texting chatting smiling';
  if (s.startsWith('flirt.banter') || s.startsWith('flirt.voice')) return 'person laughing looking at phone screen';
  if (s.startsWith('flirt.date') || s.startsWith('flirt.firstdate') || s.startsWith('personal.b1.first-date')) return 'couple romantic first date cafe';
  if (s.startsWith('flirt.cancel')) return 'sad person phone disappointed';
  if (s.startsWith('flirt.define') || s.startsWith('flirt.intimacy') || s.startsWith('personal.b1.we-need-to-talk')) return 'couple serious conversation intimate talking';
  if (s.startsWith('flirt.rejection')) return 'sad heart looking at phone screen';
  if (s.startsWith('flirt.recovery')) return 'person smiling reading text message';
  if (s.startsWith('flirt.midrel')) return 'happy couple walking holding hands';
  if (s.startsWith('flirt.crisis') || s.startsWith('personal.b1.breakup')) return 'sad couple breakup argument conflict';

  if (s.startsWith('work.slack') || s.startsWith('work.remote')) return 'laptop home office developer coding';
  if (s.startsWith('work.meeting') || s.startsWith('work.meeting2') || s.startsWith('work.standup')) return 'business office meeting presentation whiteboard';
  if (s.startsWith('work.email')) return 'typing on keyboard monitor office email';
  if (s.startsWith('work.review')) return 'performance review office paper contract';
  if (s.startsWith('work.coffeechat')) return 'coworkers talking coffee break office';
  if (s.startsWith('work.interview') || s.startsWith('work.hire')) return 'job interview interview candidate handshake';
  if (s.startsWith('work.codereview') || t.includes('coder')) return 'developer screen code programming syntax';
  if (s.startsWith('work.crisis')) return 'stressed worker laptop office deadline';
  if (s.startsWith('work.feedback_giving')) return 'one on one meeting feedback supervisor';
  if (s.startsWith('work.promotion_ask') || s.startsWith('work.salary_neg')) return 'salary negotiation money contract signing';
  if (s.startsWith('work.networking') || s.startsWith('work.network')) return 'networking business card professional meeting';
  
  if (s.startsWith('daily.directions') || t.includes('yol') || t.includes('kaybol')) return 'city map pin compass street direction';
  if (s.startsWith('daily.transport') || s.startsWith('daily.taxi') || s.startsWith('daily.a2.taxi')) return 'yellow taxi cab city street traffic';
  if (s.startsWith('daily.shopping') || s.startsWith('daily.a2.shopping')) return 'shopping cart bags mall boutique clothes';
  if (s.startsWith('daily.pharmacy') || s.startsWith('daily.a2.pharmacy')) return 'pharmacy store medicine bottles pills';
  if (s.startsWith('daily.hotel') || s.startsWith('daily.a2.hotel')) return 'hotel lobby reception bed keys';
  if (s.startsWith('daily.phone')) return 'person speaking on phone call';
  if (s.startsWith('daily.emergency') || t.includes('polis') || t.includes('ambulans')) return 'police car siren warning hazard lights';
  if (s.startsWith('daily.smalltalk')) return 'two people talking smiling walking';
  if (s.startsWith('daily.salon')) return 'hair salon haircut scissors barber';
  if (s.startsWith('daily.gym') || t.includes('gym') || t.includes('workout')) return 'gym weights dumbbell athletic training';
  
  if (s.startsWith('airport') || t.includes('uçuş') || t.includes('airport')) return 'airplane airport gate boarding pass passport';
  if (s.startsWith('ielts')) return 'books studying library exam pencil';
  
  // Specific story arcs
  if (s.includes('erasmus')) return 'amsterdam canals bike university student';
  if (s.includes('london') || s.includes('junior_dev')) return 'london street office developer programming';
  if (s.includes('nyc') || s.includes('ny_tech')) return 'new york central park manhattan tech conference';
  if (s.includes('immigration')) return 'passport control border officer airport';
  if (s.includes('japan') || s.includes('solo_japan')) return 'tokyo shibuya kyoto temple street japan';
  if (s.includes('doctor')) return 'doctor consultation clinic patient visit';
  if (s.includes('apartment')) return 'apartment key house viewing keys landlord';
  
  // Fallbacks by category
  if (s.includes('flirt')) return 'couple romance love dating';
  if (s.includes('work') || s.includes('career') || s.includes('professional')) return 'modern office corporate business laptop';
  if (s.includes('order')) return 'cafe restaurant food drinks';
  if (s.includes('airport') || s.includes('travel')) return 'travel luggage flight airplane';
  if (s.includes('bar')) return 'cocktail bar drinks nightlife';
  
  return 'neon modern dark city';
}

// Scrape Unsplash short IDs from DuckDuckGo search results page HTML (unblocked)
async function getUnsplashIdsForQuery(query: string): Promise<string[]> {
  try {
    const fullQuery = `site:unsplash.com/photos ${query}`;
    const url = `https://html.duckduckgo.com/html/?q=${encodeURIComponent(fullQuery)}`;
    const res = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8'
      }
    });
    
    if (res.status !== 200) {
      console.warn(`DDG returned status ${res.status} for query "${query}".`);
      return [];
    }

    const html = await res.text();
    const regex = /unsplash\.com\/photos\/([a-zA-Z0-9_-]+)/g;
    let match;
    const ids = new Set<string>();
    while ((match = regex.exec(html)) !== null) {
      const slug = match[1]!;
      const parts = slug.split('-');
      const shortId = parts[parts.length - 1];
      if (shortId && shortId.length >= 6) {
        ids.add(shortId);
      }
    }
    return Array.from(ids);
  } catch (err) {
    console.error(`Error searching images for query "${query}":`, err);
  }
  return [];
}

async function main() {
  console.log('Generating unique images database for scenes...');
  
  // Group scenes by skillId
  const skillGroups = new Map<string, typeof SAMPLE_SCENES[number][]>();
  for (const scene of SAMPLE_SCENES) {
    const s = scene.skillId || 'unknown';
    const arr = skillGroups.get(s) ?? [];
    arr.push(scene);
    skillGroups.set(s, arr);
  }
  
  console.log(`Grouped scenes into ${skillGroups.size} unique skill sets.`);
  
  const mapping: Record<string, string> = {};
  let processed = 0;
  
  // To avoid triggering DDG rate limit, we can query only once per skill ID
  // and distribute the results. Since each skill typically has 1-10 scenes,
  // 10-15 returned Unsplash IDs are more than enough to give each scene a unique image!
  for (const [skillId, scenes] of skillGroups) {
    processed++;
    const sample = scenes[0]!;
    const query = getSearchQuery(skillId, sample.title, sample.description);
    
    console.log(`[${processed}/${skillGroups.size}] Fetching images for skill "${skillId}" using query: "${query}"...`);
    
    let ids = await getUnsplashIdsForQuery(query);
    console.log(`  Found ${ids.length} Unsplash images.`);
    
    // Fallback if no images found
    if (ids.length === 0) {
      console.log(`  Fallback: Using generic query for mode: "${sample.mode}"`);
      ids = await getUnsplashIdsForQuery(sample.mode);
    }
    
    // Distribute unique images to scenes
    for (let i = 0; i < scenes.length; i++) {
      const scene = scenes[i]!;
      if (ids.length > 0) {
        // Pick ID based on index
        const idx = i % ids.length;
        const shortId = ids[idx]!;
        mapping[scene.id] = `https://unsplash.com/photos/${shortId}/download?w=900&q=80`;
      }
    }
    
    // Sleep to prevent DDG block
    await delay(600);
  }
  
  // Output result to apps/mobile/data/scene-images.ts
  const outputPath = path.join(MOBILE_DIR, 'data', 'scene-images.ts');
  const fileContent = `// Lafla — Direct Unsplash Redirect Image URLs Mapping (AUTO-GENERATED).
//
// Generated on ${new Date().toISOString()}
// Map of scene.id to a completely unique, highly relevant direct Unsplash image URL.

export const SCENE_IMAGES: Record<string, string> = ${JSON.stringify(mapping, null, 2)};
`;

  fs.writeFileSync(outputPath, fileContent);
  console.log(`Successfully wrote ${Object.keys(mapping).length} mappings to:`);
  console.log(`  ${outputPath}`);
}

main();
