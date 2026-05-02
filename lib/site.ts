/**
 * Single source of truth for site-wide URLs.
 * Override with env vars in production (Vercel → Settings → Environment Variables).
 */

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://ec99game.vercel.app";

/**
 * The official download / referral link.
 * Every primary "Download" CTA on the page points here, so changing
 * the referral code only needs to happen once.
 */
export const APK_URL =
  process.env.NEXT_PUBLIC_APK_URL ?? "https://ec99game.vercel.app/?r=ies2633";

/**
 * Build a fully-qualified URL for schema.org graphs.
 * Accepts either an absolute URL ("https://…") or a path ("/foo").
 */
export const absoluteUrl = (urlOrPath: string) =>
  urlOrPath.startsWith("http") ? urlOrPath : `${SITE_URL}${urlOrPath}`;
