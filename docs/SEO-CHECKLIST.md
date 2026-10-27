# SEO Checklist — Hinduka For Life

Before launch, complete the following items:

1. **Set `site.url`** in `lib/content.js` to the real domain, for example `https://example.org`.
   - Until it is set, `metadataBase`, canonical URLs, absolute logo/image URLs in JSON-LD, the sitemap base URL, and the robots.txt sitemap reference are all skipped.
2. **Add real social links** in `site.social` (Facebook, Instagram, X, YouTube, LinkedIn) in `lib/content.js`. WhatsApp is already set to `https://wa.me/250735753524`. Only non-empty social URLs appear in Organization `sameAs`.
3. **Add the phone and email** if they change: `site.phone`, `site.phoneLink`, `site.email`, `site.emailLink` in `lib/content.js` are used across the contact page, footer, and Organization JSON-LD.
4. **Replace placeholders**: fill in `[placeholder]` values such as `site.hours`, `contact.directions`, program schedule fields, FAQ answers about costs, and leadership bios before launch. Placeholder answers are excluded from FAQPage JSON-LD.
5. **Submit the sitemap** in Google Search Console once `site.url` is set: `https://<your-domain>/sitemap.xml`.
6. **Verify**: run `npm run lint` and `npm run build`, then check each page's `<title>`, meta description, canonical link, Open Graph tags, and JSON-LD blocks in the rendered HTML.
