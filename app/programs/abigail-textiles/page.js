import { programs, seo, site } from "@/lib/content";
import ProgramPage from "@/components/ProgramPage";

const program = programs.find((p) => p.slug === "abigail-textiles");

export const metadata = {
  title: { absolute: seo.pages.abigailTextiles.title },
  description: seo.pages.abigailTextiles.description,
  ...(
    site.url
      ? { alternates: { canonical: `${site.url}/programs/abigail-textiles` } }
      : {}
  ),
  openGraph: {
    title: seo.pages.abigailTextiles.title,
    description: seo.pages.abigailTextiles.description,
    images: [{ url: seo.pages.abigailTextiles.ogImage }],
  },
  twitter: {
    card: "summary",
  },
};

export default function AbigailTextilesPage() {
  return <ProgramPage program={program} />;
}
