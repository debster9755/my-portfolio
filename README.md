# Debayan Roy — Executive Product & Technical Leadership Portfolio

<div align="center">

## 🔗 &nbsp;LIVE SITE

### **➡️ &nbsp;[https://debster9755.github.io/my-portfolio/](https://debster9755.github.io/my-portfolio/)&nbsp; ⬅️**

[![View the live portfolio](https://img.shields.io/badge/VIEW_LIVE_PORTFOLIO-2563EB?style=for-the-badge&logo=githubpages&logoColor=white)](https://debster9755.github.io/my-portfolio/)
[![Deploy status](https://github.com/debster9755/my-portfolio/actions/workflows/pages.yml/badge.svg)](https://github.com/debster9755/my-portfolio/actions/workflows/pages.yml)

</div>

---

An evidence-led portfolio covering enterprise product strategy, cloud and edge systems, security products, customer-success platforms and production agentic AI — presented as a product cockpit: a persistent sidebar, a card-grid canvas, and charts built from the portfolio's own data.

## Product coverage

- CS Intelligence Agent — Production AI System
- Domain Ownership Manager — Enterprise Production Product
- Cloud Access Manager 2.0 — Enterprise Product Strategy / Scoped MVP
- Brotli Compression — Enterprise Production Product
- TripGuardian — Functional Prototype / Portfolio Concept
- PFV Pulse — Functional Prototype / Live Personal Product
- MalwareGuard — Interactive Portfolio Demo / Research Build

The public copy deliberately distinguishes production products, scoped strategy, prototypes and fixture-backed demos. Every displayed outcome remains attached to its originating product.

## Interface

The site is laid out as a dashboard rather than a scrolling document:

- **Sidebar** — section navigation plus a flagship-product list carrying each product's headline outcome.
- **Overview card** — positioning statement, plus a lifecycle-coverage bar chart derived from the lifecycle table further down the page (21 of 24 stages led directly).
- **Impact board** — the four verified outcome metrics, each retaining its original scope and unit.
- **Impact × depth map** — qualitative placement of the four enterprise products. The plot area is zoomed to the occupied range so labels stay legible; relative ordering is unchanged, and this is not an external score.
- **Right rail** — impact snapshot, a portfolio-mix donut (3 production products, 2 prototypes, 1 scoped strategy, 1 research demo) and a status feed.

Every chart is computed from `app/portfolio-data.ts`. No figure is decorative.

## Deployment

Two build targets share one codebase:

| Target | Command | Output |
| --- | --- | --- |
| GitHub Pages (canonical) | `npm run build:pages` | static `out/` |
| Cloudflare Worker | `npm run build` | `dist/` worker bundle |

Pushing to `main` triggers [`.github/workflows/pages.yml`](.github/workflows/pages.yml), which runs the static export and publishes to GitHub Pages.

The static export uses a base path because Pages serves a project site from a sub-path. To publish at a domain root instead, build with `PAGES_BASE_PATH=""`.

## Local development

Requires Node.js `>=22.13.0`.

```bash
npm install
npm run dev
```

The development server runs at `http://localhost:3000/`.

To preview exactly what Pages will serve:

```bash
npm run build:pages
npx serve out            # then open http://localhost:3000/my-portfolio/
```

## Validation

```bash
npm run lint
npm test
```

`npm test` builds the site, server-renders the home page, verifies core portfolio content and checks public HTML for restricted names and local filesystem paths.

## Evidence policy

Private source notes live under the gitignored `research-private/` directory. They are not part of the public repository or deployment. Public case studies are synthesized from verified product scopes, architecture material, launch content, canonical CV evidence and inspected project repositories.
