# ka-tch.com (v2)

The Ka Technology marketing site: Astro (static output), Tailwind CSS v4, Noto Sans.
Built from `ka-technology-website-spec.md`.

```bash
cd site
npm install
npm run dev       # http://localhost:4321
npm run build     # static site in dist/
npm run preview   # serve the built site
```

## Adding content (no code changes needed)

Each item is one Markdown file. Copy an existing file, rename it and edit the front-matter.
The file name becomes the URL slug.

| To add a… | Put a file in | Shows up on |
|---|---|---|
| Case study | `src/content/projects/<slug>.md` | `/work`, `/work/<slug>`, home "Featured work" (sorted by `order`) |
| Product | `src/content/products/<slug>.md` | `/products`, `/products/<slug>`, home "Our software". `hidden: true` keeps it off the site |
| Team member | `src/content/team/<slug>.md` | `/about`. Set `current: false` to remove. `photo` is a path in `public/` (3:4, at least 720×960) |
| Job | `src/content/jobs/<slug>.md` | `/careers` when `open: true`. `example-role.md` is a template |
| Testimonial | an entry in `src/content/testimonials.json` | Home carousel and the matching case study (`quote_id`) |

The schemas for every field are in `src/content.config.ts`. A build fails if a required field is missing.

**Testimonials:** an entry with an empty `quote` is never rendered, so nothing unapproved ships. Paste
only verbatim, approved quotes. Never add a quote from Old Republic. For Google reviews, add
`"source": "Google"` and the reviewer's public name; never paraphrase.

**Images:** case-study covers use the names in `public/images/` (`svc-ai`, `svc-software`,
`svc-automation`, `svc-analytics`), each in `-800.webp` and `-1600.webp` sizes.

## Other settings

- **Contact form:** create a Formspree form that delivers to `info@ka-tch.com`, then set
  `PUBLIC_FORMSPREE_ID` (see `.env.example`) locally and in the host's environment variables.
  Without it, the form falls back to opening the visitor's email app.
- **Contact details, nav, services, client list, social links:** `src/data/site.ts`.
- **Open Graph images:** `python3 scripts/og.py` regenerates `public/og/*.png` (needs Pillow and
  Noto Sans Bold). Re-run it after adding a project or product.
- **Photo credits:** `src/data/credits.ts`, printed in the footer.
- **Theme:** follows the system setting; the toggle stores the visitor's choice in localStorage.
  Colours are tokens at the top of `src/styles/global.css`.

## Deploy

Vercel or Netlify: root directory `site`, build command `npm run build`, output directory `dist`.
Point `ka-tch.com` at it, then add `PUBLIC_FORMSPREE_ID`.
