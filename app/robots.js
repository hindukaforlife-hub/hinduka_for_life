import { site } from "@/lib/content";

export default function robots() {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      { userAgent: "*", disallow: "/api/" },
      // Privacy Policy and Terms are allowed to crawl but are marked noindex
      // through their own page metadata.
    ],
    ...(site.url ? { sitemap: `${site.url}/sitemap.xml` } : {}),
  };
}
