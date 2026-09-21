# Paresh — Personal Portfolio Website

A cinematic, personal one-page site built with **React + Vite**, ready for **GitHub Pages**.

## Design direction

Dusk-road minimalism: a near-black canvas, headlight-amber accent, a dusk-blue
secondary, a warm serif display face (Fraunces) paired with a clean sans
(Manrope) and a mono utility face for labels (JetBrains Mono). The signature
element is the **journey rail** — a vertical highway-line scroll indicator on
the right edge of the screen that fills as you scroll, echoing the site's
road/travel theme. Dark and light mode are both supported (toggle in the nav).

## Getting started

```bash
npm install
npm run dev       # local dev server
npm run build      # production build → dist/
npm run preview    # preview the production build locally
```

## What's a placeholder right now

Nothing was invented. Anywhere real content wasn't provided, there's a clearly
marked placeholder instead:

| What | Where to fix it |
|---|---|
| Personal mark (smiley/emoji clipart) | `src/assets/paresh-mark.svg` → replace with your real image, update the import in `src/components/PersonalMark.jsx` |
| Hero background | `src/components/HeroBackground.jsx` — currently a generated SVG dusk-road scene. Swap for a real photo whenever you like. |
| Certification badge images | `src/config/certifications.js` (`image: "placeholder"`) + `src/assets/certifications/` — currently rendered as styled placeholder badges by `src/components/CertBadge.jsx` |
| 3rd certification (CSA) | `src/config/certifications.js` — add `issuer`, `verificationUrl`, and mark `comingSoon: false` once you have the badge |
| Email address | `src/config/profile.js` (`email: ""`) — shows `[Add email]` until set |
| LinkedIn URL | `src/config/socialLinks.js` — commented out, referenced in the footer once added |
| Real photos for Moments gallery | `src/config/photos.js` — add entries, drop files in `src/assets/images/` or `public/images/` |
| GA4 Measurement ID | `src/config/analytics.js` (`G-XXXXXXXXXX`) |
| GitHub Pages repo name | `vite.config.js` → `base: "/your-repo-name/"` |

## Content architecture

Nothing personal is hardcoded inside components — it all lives in:

- `src/config/` — profile, certifications, social links, projects, photos, analytics ID
- `src/content/` — longer verbatim copy (About, Work, Music, Travel, Things I Like, Skills), kept as plain paragraph arrays so tone/wording is easy to edit without touching JSX

To update your bio, journey, or any long section: edit the relevant file in
`src/content/`. To add a project, certification, or social link: edit the
matching file in `src/config/`.

## Analytics (GA4)

`src/utils/analytics.js` lazy-loads `gtag.js` using the ID in
`src/config/analytics.js` and exposes `trackEvent()` / `trackOutbound()`.
Every outbound link in the site goes through `src/components/ExternalLink.jsx`,
which fires a named event automatically (`github_click`, `instagram_click`,
`blog_click`, `travel_story_click`, `certification_click`, `email_click`,
`footer_link_click`, etc.) — so wiring a new tracked link anywhere just means
using that component instead of a raw `<a>`. Scroll-depth (25/50/75/100%) and
nav clicks are tracked from `src/App.jsx` and `src/components/Nav.jsx`.

## Deploying to GitHub Pages

1. Push this project to a GitHub repo.
2. In `vite.config.js`, set `base` to `"/your-repo-name/"` (skip this step —
   leave `base: "/"` — if the repo is named `<your-username>.github.io`).
3. Install the deploy helper (already in `devDependencies`) and publish:
   ```bash
   npm run build
   npm run deploy
   ```
   This runs `gh-pages -d dist`, which pushes the `dist/` folder to a `gh-pages`
   branch.
4. In the repo's **Settings → Pages**, set the source to the `gh-pages` branch
   (root).
5. Your site will be live at `https://<your-username>.github.io/<your-repo-name>/`.

## Accessibility & performance notes

- Semantic landmarks (`header`, `main`, `footer`), skip-to-content link, visible
  focus states throughout.
- `prefers-reduced-motion` is respected — hero entrance, reveal-on-scroll, and
  the journey rail all disable or simplify their animation.
- Photos lazy-load; the gallery only renders a lightbox once real photos exist.
- No backend, no database, minimal dependencies (React + Vite only).

## Project structure

```
src/
├── App.jsx, main.jsx, index.css, styles.css
├── components/       shared UI: Nav, PersonalMark, JourneyProgress (signature
│                      scroll rail), ExternalLink, Reveal, ThemeToggle,
│                      HeroBackground, CertBadge, PhotoLightbox
├── sections/          one file per page section (Hero, About, Work, Skills,
│                      Projects, Certifications, Stories, Music, Travel,
│                      Moments, ThingsILike, Social, Contact, Footer)
├── config/            editable data: profile, socialLinks, certifications,
│                      projects, photos, analytics
├── content/           longer verbatim copy: about, work, music, travel,
│                      thingsILike, skills
├── hooks/              useScrollProgress, useTheme, useReveal
├── utils/              analytics.js (GA4), text.jsx (bold-markdown renderer)
└── assets/             paresh-mark.svg (placeholder), certifications/, images/
```
