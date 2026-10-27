import { programs, seo, site } from "@/lib/content";
import ProgramPage from "@/components/ProgramPage";

const program = programs.find((p) => p.slug === "gira-neza");

export const metadata = {
  title: { absolute: seo.pages.giraNeza.title },
  description: seo.pages.giraNeza.description,
  ...(site.url ? { alternates: { canonical: `${site.url}/programs/gira-neza` } } : {}),
  openGraph: {
    title: seo.pages.giraNeza.title,
    description: seo.pages.giraNeza.description,
    images: [{ url: seo.pages.giraNeza.ogImage }],
  },
  twitter: {
    card: "summary",
  },
};

export default function GiraNezaPage() {
  return <ProgramPage program={program} />;
}
