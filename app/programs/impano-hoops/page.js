import { programs, seo, site } from "@/lib/content";
import ProgramPage from "@/components/ProgramPage";

const program = programs.find((p) => p.slug === "impano-hoops");

export const metadata = {
  title: { absolute: seo.pages.impanoHoops.title },
  description: seo.pages.impanoHoops.description,
  ...(
    site.url
      ? { alternates: { canonical: `${site.url}/programs/impano-hoops` } }
      : {}
  ),
  openGraph: {
    title: seo.pages.impanoHoops.title,
    description: seo.pages.impanoHoops.description,
    images: [{ url: seo.pages.impanoHoops.ogImage }],
  },
  twitter: {
    card: "summary",
  },
};

export default function ImpanoHoopsPage() {
  return <ProgramPage program={program} />;
}
