import type { NextConfig } from "next";

/**
 * Two build targets share this config:
 *
 *  - `npm run build`        → vinext / Cloudflare Worker build (unchanged, default).
 *  - `npm run build:pages`  → `next build` with STATIC_EXPORT=1, emitting a fully
 *                             static `out/` directory for GitHub Pages.
 *
 * GitHub Pages serves a project site from a sub-path, so the static export needs a
 * basePath. Set PAGES_BASE_PATH="" when publishing to a user/apex domain instead.
 */
const isStaticExport = process.env.STATIC_EXPORT === "1";

const basePath =
  process.env.PAGES_BASE_PATH !== undefined
    ? process.env.PAGES_BASE_PATH
    : "/my-portfolio";

/**
 * Canonical ORIGIN (no path) for the published static site. `metadataBase` must
 * stay origin-only, because asset() below is what applies the base path — putting
 * the path in both double-prefixes every Open Graph URL.
 */
const siteOrigin =
  process.env.PAGES_SITE_URL ?? "https://debster9755.github.io";

const nextConfig: NextConfig = isStaticExport
  ? {
      output: "export",
      basePath,
      assetPrefix: basePath || undefined,
      trailingSlash: true,
      images: { unoptimized: true },
      // Next prefixes /_next assets with basePath automatically, but not paths
      // written by hand in `metadata` (icons, OG images). Expose both so the
      // layout can build absolute, base-path-correct URLs.
      env: {
        NEXT_PUBLIC_BASE_PATH: basePath,
        NEXT_PUBLIC_SITE_URL: siteOrigin,
      },
      // The Cloudflare Worker entry needs Workers-only globals that this build
      // does not load, so the static export type-checks the app tree only.
      typescript: { tsconfigPath: "tsconfig.pages.json" },
    }
  : {};

export default nextConfig;
