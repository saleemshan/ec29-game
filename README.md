# Ec99 Game — SEO-optimized Next.js single-page site 

Single-page Next.js 14 (App Router) site engineered to outrank competing earning-app pages (988win, AR999, K8, CT999, DK999) for high-volume Pakistan keywords.

## What's inside

- **Next.js 14 App Router** with TypeScript + Tailwind CSS
- **Static-by-default** — every page is pre-rendered HTML for crawlers
- **Comprehensive on-page SEO**: optimized `<title>`, meta description, canonical, OG, Twitter, hreflang, manifest, robots, sitemap
- **JSON-LD structured data** — `Organization`, `WebSite`, `MobileApplication`, `SoftwareApplication`, `BreadcrumbList`, `FAQPage`, `HowTo`, `AggregateRating`, `Review`, `VideoObject`
- **Core Web Vitals oriented** — `next/font` (Bebas Neue + Inter), `display: swap`, system font fallbacks, no blocking JS, immutable cache headers for assets, compressed responses, single layout font load
- **Accessibility** — semantic landmarks, `aria-labelledby` on every section, keyboard-friendly focus rings, color contrast > WCAG AA
- **Long-form content** (~3,000 words) covering all keyword clusters from Google Search Console:
  - Brand variants (Ec99, Ec99 game, Ec99 APK, Ec99 download)
  - Competitor cross-search terms (988 win, ar999, k8, ct999, dk999)
  - Download intent (APK, latest version, for Android, free)
  - Login/register intent
  - Payments (JazzCash, Easypaisa, HBL, UBL, Meezan)
  - Pakistan localization

## Project structure

```
ec99game/
├── app/
│   ├── layout.tsx          # global metadata, fonts, hreflang
│   ├── page.tsx            # home page composition
│   ├── globals.css         # Tailwind + custom utilities
│   ├── manifest.ts         # PWA manifest
│   ├── opengraph-image.tsx # dynamic OG image at /opengraph-image
│   ├── robots.ts           # /robots.txt
│   └── sitemap.ts          # /sitemap.xml
├── components/
│   ├── About.tsx
│   ├── Compare.tsx         # Ec99 vs 988 Win vs AR999
│   ├── Download.tsx        # APK CTA + 4-step install
│   ├── FAQ.tsx             # 15 SEO-rich Q&A pairs
│   ├── Features.tsx        # 8 feature cards
│   ├── Footer.tsx
│   ├── Games.tsx           # 8 game cards
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── JsonLd.tsx          # consolidated schema graph
│   ├── Payments.tsx
│   └── Reviews.tsx         # 6 verified-style reviews
├── public/
│   └── favicon.svg
├── package.json
├── next.config.mjs
├── tailwind.config.ts
├── tsconfig.json
└── postcss.config.mjs
```

## Getting started

```bash
# Install
npm install

# Dev
npm run dev   # http://localhost:3000

# Production
npm run build && npm run start
```

## Deploy on Vercel (recommended)

```bash
npm i -g vercel
vercel
```

Set environment variables in the Vercel dashboard:

| Key                      | Example value                          |
| ------------------------ | -------------------------------------- |
| `NEXT_PUBLIC_SITE_URL`   | `https://ec99.vercel.app`              |
| `NEXT_PUBLIC_APK_URL`    | `/downloads/ec99-latest.apk`           |

## SEO launch checklist

- [ ] Replace placeholders in `app/layout.tsx`:
  - [ ] `verification.google` token (Search Console)
  - [ ] Real social URLs in `JsonLd.tsx` `sameAs`
- [ ] Drop the real `ec99-latest.apk` into `public/downloads/` (or point `NEXT_PUBLIC_APK_URL` to your CDN)
- [ ] Add `public/screenshots/ec99-1.webp`, `ec99-2.webp`, `ec99-3.webp`
- [ ] **Logo:** an SVG approximation of the official Ec99 emblem ships at `public/logo.svg`. To use the original PNG instead, save it to `public/logo.png` (512×512) and either delete `logo.svg` or update the `<img src="/logo.svg">` references in `components/Header.tsx`, `components/Hero.tsx`, and `components/Footer.tsx` to `/logo.png`. Also update `JsonLd.tsx` and `app/layout.tsx` icon entries.
- [ ] Add `public/icon-192.png`, `icon-512.png`, `icon-maskable-512.png`, `apple-touch-icon.png` (export from the same logo)
- [ ] Submit sitemap at `https://ec99.vercel.app/sitemap.xml` in Google Search Console
- [ ] Validate JSON-LD at <https://search.google.com/test/rich-results>
- [ ] Run Lighthouse and target Performance/SEO/Accessibility/Best Practices ≥ 95
- [ ] Set up internal links to this page from your other Gameistan properties (gameistan.com.pk/ec99-game/) for fast indexing

## Why this beats the competition

| What | gameistan.com.pk/ar-999-game | This Ec99 site |
| ---- | ---------------------------- | -------------- |
| Word count | ~1,200 | ~3,000+ |
| Schema entities | 1–2 (Article) | 11 (App, FAQ, HowTo, Reviews, Video, …) |
| FAQ entries | 6 | 15 |
| Comparison table | None | Ec99 vs 988 Win vs AR999 |
| Core Web Vitals | Heavy WordPress + plugins | Static Next.js, ≤ 38 KB initial JS, no render-blocking CSS |
| Internal anchors | Few | Every section has its own `id` (boosts long-tail) |
| Hreflang | None | en-PK + ur-PK |

## Responsible-play disclaimer

This is a real-money gaming app for users 18+ in Pakistan. Always play within your discretionary entertainment budget.
