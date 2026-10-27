import { site } from "@/lib/content";

// Public routes to include in the sitemap.
// Home: priority 1.0, about and programs: 0.8, contact: 0.7.
const routes = [
  { path: "/", changeFrequency: "weekly", priority: 1.0 },
  { path: "/about", changeFrequency: "monthly", priority: 0.8 },
  { path: "/programs", changeFrequency: "monthly", priority: 0.8 },
  { path: "/programs/gira-neza", changeFrequency: "monthly", priority: 0.8 },
  { path: "/programs/abigail-textiles", changeFrequency: "monthly", priority: 0.8 },
  { path: "/programs/impano-hoops", changeFrequency: "monthly", priority: 0.8 },
  { path: "/contact", changeFrequency: "monthly", priority: 0.7 },
];

export default function sitemap() {
  // Return an empty array until the real domain is configured in lib/content.js.
  if (!site.url) return [];

  return routes.map((route) => ({
    url: `${site.url}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
