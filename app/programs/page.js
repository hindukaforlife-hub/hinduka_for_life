import { programs, home, seo, site } from "@/lib/content";
import ProgramCard from "@/components/ProgramCard";

const themes = {
  gira: {
    border: "border-gira-accent",
    tint: "bg-gira-tint",
    heading: "text-gira-dark",
    accentText: "text-gira-accent",
    tintText: "text-gira-dark",
    button: "bg-gira-accent text-white",
    buttonHover: "hover:bg-gira-dark",
  },
  abigail: {
    border: "border-abigail-accent",
    tint: "bg-abigail-tint",
    heading: "text-abigail-dark",
    accentText: "text-abigail-accent",
    tintText: "text-abigail-dark",
    button: "bg-abigail-accent text-white",
    buttonHover: "hover:bg-abigail-dark",
  },
  impano: {
    border: "border-impano-accent",
    tint: "bg-impano-tint",
    heading: "text-impano-dark",
    accentText: "text-impano-accent",
    tintText: "text-impano-dark",
    button: "bg-impano-accent text-white",
    buttonHover: "hover:bg-impano-dark",
  },
};

export const metadata = {
  title: { absolute: seo.pages.programs.title },
  description: seo.pages.programs.description,
  ...(site.url ? { alternates: { canonical: `${site.url}/programs` } } : {}),
  openGraph: {
    title: seo.pages.programs.title,
    description: seo.pages.programs.description,
    images: [{ url: seo.pages.programs.ogImage }],
  },
  twitter: {
    card: "summary",
  },
};

export default function ProgramsPage() {
  return (
    <section className="bg-light-green py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1
          className="text-2xl md:text-3xl font-bold text-brand-green text-center mb-12"
        >
          {home.programsTitle}
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((program) => (
            <ProgramCard
              key={program.slug}
              program={program}
              theme={themes[program.theme]}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
