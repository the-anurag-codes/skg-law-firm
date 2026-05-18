# S.K. Gambhir & Co. — Website

**Production-ready marketing website** for S.K. Gambhir & Co., a Tax & Corporate Law firm established in New Delhi in 1987.

**Stack:** Next.js 14 App Router · TypeScript (strict) · Tailwind CSS · Framer Motion · React Hook Form + Zod · Resend (email) · MDX (Insights articles)

---

## Screenshot

```
[Replace this section with a screenshot once the site is running locally]
Design: monochrome editorial — deep navy accent, warm off-white paper background,
Fraunces serif headings, Inter sans body. No rounded corners. No stock photos.
```

---

## 1. Local Setup

**Requirements:** Node.js ≥ 18.17, npm ≥ 9

```bash
# 1. Clone / download the project
git clone <your-repo-url> skg-law-firm
cd skg-law-firm

# 2. Install dependencies
npm install

# 3. Copy environment variables and fill them in
cp .env.example .env.local

# 4. Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

For a production build:

```bash
npm run build
npm start
```

---

## 2. Environment Variables

Copy `.env.example` to `.env.local` and set the following:

| Variable | Required | Description |
|---|---|---|
| `RESEND_API_KEY` | Yes (for email) | Your Resend API key. Get one free at [resend.com](https://resend.com). |
| `CONTACT_EMAIL` | Yes | The address that receives consultation form submissions. Currently `skgambhir@hotmail.com`. |
| `FROM_EMAIL` | Yes | The "From" address in outbound emails. Must be a verified domain in Resend. E.g. `noreply@skgambhir.in`. |
| `NEXT_PUBLIC_SITE_URL` | Yes | The live domain, e.g. `https://skgambhir.in`. Used for OG metadata. |

**Without a Resend key:** form submissions are saved to `data/leads.json` as a fallback. The file is `.gitignore`d — treat it as sensitive.

### Setting up Resend (5 minutes)

1. Sign up at [resend.com](https://resend.com) — free tier allows 100 emails/day.
2. Add and verify your domain (e.g. `skgambhir.in`) under Domains.
3. Create an API key under API Keys — copy it into `RESEND_API_KEY`.
4. Set `FROM_EMAIL` to an address at your verified domain (e.g. `noreply@skgambhir.in`).
5. Set `CONTACT_EMAIL` to the address that should receive leads.

---

## 3. Single Source of Truth

**All firm contact information lives in one file: [`lib/site-config.ts`](lib/site-config.ts)**

Edit it once, and the change propagates to the navbar, footer, contact page, utility bar, API route, JSON-LD schema, and partner cards simultaneously.

```typescript
// lib/site-config.ts
export const siteConfig = {
  name: 'S.K. Gambhir & Co.',
  email: 'skgambhir@hotmail.com',
  partners: [
    { name: 'S.K. Gambhir', phone: '+919810029705', ... },
    { name: 'Sumit Gambhir', phone: '+919999993339', ... },
  ],
  offices: {
    primary: { fullAddress: '4P9, 3rd Floor, Main Road, Jagriti Enclave, Delhi – 110 092', ... },
    chamber: { fullAddress: 'Plot No. 30, 4th Floor, Ch. N-02, D.D.U. Marg, Rouse Avenue, New Delhi – 110 002', ... },
  },
  // ...
};
```

---

## 4. Adding Insights Articles

Drop an `.mdx` file into `/content/insights/` with the following frontmatter:

```mdx
---
title: "Your Article Title"
date: "2026-01-15"
category: "Direct Tax"
excerpt: "A 1–2 sentence summary shown in the article list and OG metadata."
---

Your article body in Markdown / MDX...
```

Then add a matching entry to `lib/insights.ts`:

```typescript
{
  slug: 'your-article-slug',           // must match the filename (without .mdx)
  title: 'Your Article Title',
  date: '2026-01-15',
  category: 'Direct Tax',             // Direct Tax | GST | Corporate | Litigation | International
  excerpt: 'One-line excerpt...',
  readingTime: '5 min read',
  published: true,
},
```

**Category options:** `Direct Tax` · `GST` · `Corporate` · `Litigation` · `International`

Articles without an MDX file display a "coming soon" stub — useful for scheduling topics in advance.

---

## 5. Replacing Partner Photos

Place portrait images in `/public/images/`:

| Filename | Partner |
|---|---|
| `sk-gambhir.jpg` | S.K. Gambhir |
| `sumit-gambhir.jpg` | Sumit Gambhir |

**Recommended specifications:**
- Format: JPG or WebP
- Dimensions: 1200 × 1500 px (portrait orientation, 4:5 ratio)
- Colour: The site applies `filter: grayscale(100%) contrast(1.05)` site-wide — shoot in good natural light, plain neutral background (white or off-white wall). iPhone Portrait Mode works well.
- File size: keep under 400 KB — Next.js Image will handle optimisation and WebP conversion automatically.

The `PartnerCard` component shows a monogram placeholder until the image file is present.

---

## 6. Deployment

### Option A — Vercel (Recommended)

Vercel is built by the Next.js team and provides zero-config deployment.

1. Push the project to a GitHub repository.
2. Go to [vercel.com](https://vercel.com) → New Project → Import the repo.
3. Vercel auto-detects Next.js — click Deploy.
4. Under Settings → Environment Variables, add `RESEND_API_KEY`, `CONTACT_EMAIL`, `FROM_EMAIL`, `NEXT_PUBLIC_SITE_URL`.
5. Redeploy after adding variables.

**Free tier:** sufficient for a law firm website (100 GB bandwidth/month, unlimited builds).

### Option B — Netlify

1. Push to GitHub.
2. Go to [netlify.com](https://netlify.com) → New site from Git.
3. Build command: `npm run build`. Publish directory: `.next`.
4. Install the [Netlify Next.js plugin](https://github.com/netlify/netlify-plugin-nextjs): it handles server-side routes and API routes.
5. Set environment variables in Site Settings → Environment Variables.

### Option C — Self-hosted (VPS with Nginx)

```bash
# On the server
npm install
npm run build

# Run with PM2
npm install -g pm2
pm2 start npm --name "skg-law" -- start
pm2 save
pm2 startup
```

Nginx config (reverse proxy):

```nginx
server {
    listen 443 ssl;
    server_name skgambhir.in www.skgambhir.in;

    ssl_certificate     /etc/letsencrypt/live/skgambhir.in/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/skgambhir.in/privkey.pem;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    }
}
```

Use `certbot --nginx -d skgambhir.in` for a free Let's Encrypt SSL certificate.

---

## 7. Custom Domain

**Recommended domain names** (check availability before registering):
- `skgambhir.in` — most direct; `.in` signals Indian practice (~₹700/year)
- `skgambhirassociates.com` — traditional firm naming convention
- `skgco.in` — short, memorable

Register at [Hostinger India](https://www.hostinger.in), [GoDaddy India](https://in.godaddy.com), or [BigRock](https://www.bigrock.in).

### DNS — Vercel

In your registrar's DNS panel, add:
```
A      @      76.76.21.21
CNAME  www    cname.vercel-dns.com
```

Then in Vercel: Project → Settings → Domains → Add `skgambhir.in`.

### DNS — Netlify

```
A      @      75.2.60.5
CNAME  www    <your-netlify-subdomain>.netlify.app
```

---

## 8. Email Migration — Critical Recommendation

> **The firm's current email address is `skgambhir@hotmail.com`. This should be changed before the site goes live.**

A Hotmail address on a professional law firm website immediately undermines the credibility that 38 years of practice has built. A `contact@skgambhir.in` address signals that the firm owns its digital presence. This is the single highest-impact change the firm can make to its digital presence.

**Option 1 — Zoho Mail (most affordable)**
- Free tier: 5 GB, 1 user — sufficient to start
- Paid: ~₹40/user/month (Zoho Mail Lite), ~₹136/user/month (Zoho Workplace)
- Setup: Add domain in Zoho → update DNS MX records → done in ~30 minutes
- Website: [zoho.com/mail](https://www.zoho.com/mail/)

**Option 2 — Google Workspace**
- ~₹136/user/month (Business Starter), ~₹340/user/month (Business Standard)
- Full Google ecosystem: Docs, Drive, Meet
- Website: [workspace.google.com](https://workspace.google.com)

**Once email is migrated:** update `CONTACT_EMAIL` in `.env.local`, update `lib/site-config.ts`, and update the Resend `FROM_EMAIL` to the new domain address.

---

## 9. Bar Council of India — Rule 36 Compliance Checklist

The following have been implemented in the codebase. Verify each before going live:

- [x] **Disclaimer modal on first visit** — `DisclaimerModal.tsx` uses `localStorage` to show a full-screen disclaimer on first visit. User must click "I Agree & Enter" before accessing the site.
- [x] **Disclaimer page** — `/disclaimer` contains the full Bar Council Rule 36 text.
- [x] **Footer disclaimer link** — Every page footer links to the disclaimer.
- [x] **No claims of expertise or superiority** — Copy avoids "best," "top," "leading," "award-winning," or comparative claims. Review all body copy before going live.
- [x] **No client names or logos** — Testimonials are anonymised by sector only ("CFO, Listed Mid-Cap Manufacturing Company"). No logos or named clients used.
- [x] **No solicitation language** — CTAs say "Schedule a Consultation" and "Get in touch," not "Hire us" or "Retain us."
- [x] **Contact form confidentiality notice** — "All submissions are treated as privileged and confidential."

> **Before going live:** have a colleague or the Bar Council's compliance team review the full disclaimer text. Different State Bar Councils may require slightly different wording. The disclaimer in this codebase is based on the standard BCI Rule 36 template and should be verified by counsel.

---

## 10. Going-Live Checklist

Complete these steps before launching the site:

- [ ] Replace partner portrait placeholders with real B&W headshots (`/public/images/sk-gambhir.jpg`, `sumit-gambhir.jpg`)
- [ ] Write real partner bios — academic background, notable matters (anonymised), professional memberships, Bar Council enrolment numbers
- [ ] Set `RESEND_API_KEY` and verify domain email in Resend
- [ ] Update `CONTACT_EMAIL` to final email address (ideally `contact@skgambhir.in`)
- [ ] Set `NEXT_PUBLIC_SITE_URL` to the live domain
- [ ] Generate and replace `/public/og-image.png` (1200×630 px) — text "S.K. Gambhir & Co. — Tax & Corporate Law" on `--paper` background
- [ ] Replace `/public/favicon.ico` with a rasterised version of the SKG monogram (use [realfavicongenerator.net](https://realfavicongenerator.net))
- [ ] Replace `/public/apple-touch-icon.png` (180×180 px)
- [ ] Deploy to Vercel / Netlify and verify all pages load at the live URL
- [ ] Submit to Google Search Console — add property, upload sitemap (`/sitemap.xml`)
- [ ] Create Google Business Profile listing with the new website URL
- [ ] List on JustDial, Sulekha, and India Legal Service directories
- [ ] Have the Bar Council disclaimer text reviewed before go-live
- [ ] Test the consultation form end-to-end on the live URL

---

## 11. Analytics (Optional)

**Plausible Analytics is recommended** for a law firm — it is privacy-friendly (no cookies, GDPR-compliant, no data sold), and does not require a cookie consent banner.

To enable:
1. Sign up at [plausible.io](https://plausible.io) (~$9/month, or self-host)
2. Add your domain
3. In `app/layout.tsx`, uncomment the Plausible script block:

```tsx
<script
  defer
  data-domain="skgambhir.in"
  src="https://plausible.io/js/script.js"
/>
```

**Avoid Google Analytics 4** — GA4 processes and stores visitor data on Google's servers, which may be a concern for a firm where clients have an expectation of confidentiality.

---

## 12. Assumptions Made

1. **Fraunces and Inter fonts** — used via `next/font/google` (self-hosted, no CDN call at runtime). Fraunces is an open-source variable font by Undercase Type; Inter is by Rasmus Andersson. Both are free.

2. **Photography** — all `<Image>` tags reference paths in `/public/images/`. The site applies `filter: grayscale(100%) contrast(1.05)` site-wide via CSS. No stock photo URLs are embedded.

3. **Partner bios** — placeholder copy. The firm should replace these with real biographical text before going live. Placeholder sections are marked with `[Placeholder: ...]`.

4. **Professional affiliations** — listed as "Bar Council of Delhi · ITAT Bar · Supreme Court Bar Association" with a visible placeholder note. The client should confirm these before publishing.

5. **Google Maps** — location cards show a placeholder box with a link to Google Maps. To embed interactive maps, add a `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` env variable and replace the placeholder `<div>` with a `<iframe>` or a Maps API component.

6. **Testimonial** — anonymised and fictional for now. If the firm has a real client quote they wish to use, it should be anonymised to sector-level attribution only (Bar Council Rule 36 restriction).

7. **Email domain** — the codebase assumes `skgambhir.in`. If the firm chooses a different domain (e.g. `skgambhirassociates.com`), update `lib/site-config.ts` and the Resend settings.

8. **Rate limiting** — the API route uses in-memory rate limiting (5 requests per IP per hour). This resets on server restart. For a production deployment with multiple instances, replace with Redis-backed rate limiting (e.g. `@upstash/ratelimit`).

9. **Favicon/OG image** — placeholder SVG and sitemap entries provided. Final rasterised assets need to be generated before launch.

10. **MDX articles** — one full article provided (`itat-section-56-startup-valuations.mdx`). The remaining 7 articles in `lib/insights.ts` are stubs that display a "coming soon" message.

---

## File Structure

```
skg-law-firm/
├── app/
│   ├── globals.css               Design tokens, typography, utility classes
│   ├── layout.tsx                Root layout — fonts, metadata, JSON-LD, nav/footer
│   ├── page.tsx                  Homepage (7 sections)
│   ├── practice-areas/page.tsx  Full practice area descriptions
│   ├── about/page.tsx            Firm story, timeline, values, partner bios
│   ├── insights/
│   │   ├── page.tsx              Article index
│   │   └── [slug]/page.tsx       Individual article (MDX)
│   ├── contact/page.tsx          Locations + full consultation form
│   ├── disclaimer/page.tsx       Bar Council Rule 36 disclaimer
│   ├── not-found.tsx             Branded 404
│   └── api/contact/route.ts     Form handler → Resend + JSON fallback
├── components/
│   ├── SKGMonogram.tsx           Inline SVG heraldic monogram
│   ├── Navbar.tsx                Sticky nav + full-screen mobile overlay
│   ├── UtilityBar.tsx            32px top bar, hides on scroll
│   ├── Footer.tsx                4-column editorial footer
│   ├── Hero.tsx                  Full-viewport hero with ink-settle animation
│   ├── TrustStrip.tsx            Animated count-up stats strip
│   ├── PracticeAreasList.tsx     Numbered editorial row list
│   ├── PartnerCard.tsx           Editorial portrait cards with placeholder SVG
│   ├── ApproachSteps.tsx         4-step horizontal sequence on dark background
│   ├── InsightsTeaser.tsx        3-column article preview grid
│   ├── PullQuote.tsx             Single large testimonial with gold rules
│   ├── ConsultationForm.tsx      Full RHF+Zod form with honeypot
│   ├── DisclaimerModal.tsx       Bar Council Rule 36 modal (localStorage-gated)
│   ├── ScheduleFloater.tsx       Floating bottom-right pill CTA
│   ├── SectionLabel.tsx          "01 — SECTION NAME" eyebrow
│   ├── Hairline.tsx              Animated 1px dividing rule
│   ├── PaperNoise.tsx            SVG paper-texture overlay
│   └── ui/toaster.tsx            Toast root (replace with Radix Toast if needed)
├── lib/
│   ├── site-config.ts            SINGLE SOURCE OF TRUTH — all firm data
│   ├── practice-areas.ts         Full practice area content
│   ├── partners.ts               Partner bios (short + full)
│   ├── insights.ts               Article metadata index
│   ├── faqs.ts                   FAQ content (GEO-optimised)
│   └── utils.ts                  cn(), telLink(), formatDate(), slugify()
├── content/insights/             MDX article files
│   └── itat-section-56-startup-valuations.mdx  (full article — 600+ words)
├── public/
│   ├── robots.txt
│   ├── sitemap.xml
│   ├── manifest.json
│   ├── icon.svg
│   └── images/                   Drop partner portraits here
├── data/                         leads.json saved here (gitignored)
├── .env.example
├── .gitignore
├── tailwind.config.ts
├── next.config.js
├── tsconfig.json
└── package.json
```

---

*Built for S.K. Gambhir & Co. · Tax & Corporate Law · New Delhi · Est. 1987*
