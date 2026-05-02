import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

/**
 * Single-page site → one canonical URL in the sitemap.
 * Do NOT list anchor fragments (#download, #faq) here — Google Search
 * Console rejects fragments as invalid (they are not separate pages).
 */
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${SITE_URL}/`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
  ];
}
