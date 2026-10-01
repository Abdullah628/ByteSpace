/**
 * Absolute site URL for metadata (Open Graph, sitemap). Vercel sets
 * VERCEL_PROJECT_PRODUCTION_URL at build time; NEXT_PUBLIC_SITE_URL overrides it.
 */
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");
