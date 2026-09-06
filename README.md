# La Botana website

Implementation of the **Market Counter, Made Clear** direction for La Botana in Lake Wales, Florida.

## Stack

- Astro static output
- Semantic HTML + custom CSS
- Minimal inline JavaScript only for the mobile navigation disclosure
- GitHub Pages deployment via GitHub Actions

## Local development

```bash
npm install
npm run dev
```

Build production output with:

```bash
npm run build
```

The project is configured for the GitHub project-site base path `/la-botana/`.

## Content decisions

- Public address and phone are based on current corroborated listings.
- The site labels 6:00 AM–9:00 PM daily as **current listed hours** rather than owner-confirmed hours because one older public listing differs.
- Menu prices are deliberately omitted from the owned site. DoorDash/Uber Eats links are provided for current platform availability and pricing.
- Alcohol service language is omitted because public sources conflict about on-premises alcohol service.

## Photography

The published UI uses **actual La Botana listing photography**, not generated or unrelated stock imagery. Current external image sources are:

- La Botana public Grubbio listing: storefront and food imagery
- Restaurantji public listing imagery: La Botana photo collage

These are referenced remotely so the repository does not repackage third-party image files. Replace the URLs with business-owned, rights-cleared originals when those files are available.

## Pages

- `/` — home / discovery
- `/menu/` — scannable menu highlights
- `/visit/` — directions, current listed hours, phone and ordering partners
- `/404.html` — recovery page

## Deployment

`.github/workflows/pages.yml` builds the Astro site and deploys `dist/` to GitHub Pages on every push to `main`. `actions/configure-pages` uses `enablement: true` so the first workflow run can enable Pages for the repository when the token permissions allow it.

Expected public URL:

`https://prithiraj.github.io/la-botana/`
