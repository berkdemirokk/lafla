# Lafla — Web (Marketing Landing)

Single-file static landing page for **lafla.app**. Pure HTML + Tailwind CDN, no build step.

- File: `index.html`
- Stack: HTML + Tailwind (CDN) + vanilla JS
- Domain: `lafla.app`

## Local preview

Just double-click `index.html`, or:

```bash
# Optional: serve over localhost (any of these)
python -m http.server 8080
npx serve .
```

Open `http://localhost:8080`.

## What's inside

- TR/EN language toggle (persists in `localStorage`)
- FAQ accordion (vanilla JS, `aria-expanded` accessible)
- Smooth-scroll anchor links
- Mobile-responsive (single column < md)
- Inline SVG favicon — no asset files needed

## Deployment

The site is **one HTML file**. Anywhere that serves static files will do.

### Option A — Vercel (recommended)

1. Install CLI: `npm i -g vercel`
2. From `apps/web/`: `vercel --prod`
3. First run will create the project and deploy.
4. **Custom domain:**
   - Vercel dashboard → Project → Settings → Domains → Add `lafla.app` and `www.lafla.app`.
   - At your domain registrar set:
     - `A` record on `@` (apex) → `76.76.21.21`
     - `CNAME` on `www` → `cname.vercel-dns.com`
   - SSL is automatic.

### Option B — Netlify (drag & drop)

1. Open https://app.netlify.com/drop
2. Drag the `apps/web/` folder onto the page. Done.
3. **Custom domain:**
   - Site settings → Domain management → Add custom domain → `lafla.app`.
   - Either move DNS to Netlify nameservers, or set:
     - `A` on `@` → `75.2.60.5`
     - `CNAME` on `www` → `<yoursite>.netlify.app`
   - HTTPS provisions automatically.

### Option C — Cloudflare Pages

1. https://dash.cloudflare.com → Workers & Pages → Create → Pages → **Upload assets**.
2. Upload contents of `apps/web/` (just `index.html`).
3. **Custom domain:** Project → Custom domains → Set up custom domain → `lafla.app`.
4. Cloudflare will configure DNS automatically if your domain is on Cloudflare. Otherwise add the `CNAME` it shows you.

### Option D — GitHub Pages

1. Push `index.html` to a repo (e.g. `lafla-web`) at the root.
2. Repo Settings → Pages → Branch: `main` / root → Save.
3. **Custom domain:** Pages settings → Custom domain → `lafla.app`. Add `CNAME` `lafla.app` containing `lafla.app` to repo. At registrar:
   - `A @` → `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - `CNAME www` → `<user>.github.io`

## TODO before public launch

- [ ] Replace 3 placeholder screenshot tiles with real app screenshots (9:19 aspect, ~1170×2470 ideal).
- [ ] Wire `#email-form` to a real backend (e.g. Vercel route → Resend/Mailchimp/Supabase). Currently it only shows a client-side success message — emails are NOT saved.
- [ ] Hook up real `/privacy` and `/terms` pages (footer links currently `#`).
- [ ] Replace social `href="#"` placeholders with real Twitter/Instagram/TikTok handles.
- [ ] Set `<meta property="og:image">` with a 1200×630 social card.
- [ ] Add `<meta name="apple-itunes-app">` with the App Store ID once approved.
- [ ] Consider self-hosting Tailwind (compile down to CSS) for production — current CDN script is fine for launch but adds ~50KB and a runtime compile step.
