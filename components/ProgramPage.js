import Image from "next/image";
import {
  Target,
  Users,
  MapPin,
  Clock,
  DollarSign,
  ShieldCheck,
  Leaf,
  Store,
  ArrowRight,
  Book,
  Check,
  ChevronDown,
  Handshake,
  Heart,
  Building2,
  School,
} from "lucide-react";
import { programs, themes, images, site } from "@/lib/content";
import Button from "./Button";
import ProgramCard from "./ProgramCard";
import JsonLd from "./JsonLd";

// Map a learn-item title to a lucide icon element. Falls back to Target.
// Returns an element (not a component type) so nothing is created during render.
const learnIconFor = (title) => {
  const t = title.toLowerCase();
  if (t.includes("business") || t.includes("athletic")) return <Target className="w-6 h-6" />;
  if (t.includes("financial") || t.includes("tailoring")) return <DollarSign className="w-6 h-6" />;
  if (
    t.includes("responsibility") ||
    t.includes("quality") ||
    t.includes("discipline")
  )
    return <ShieldCheck className="w-6 h-6" />;
  if (t.includes("eco") || t.includes("healthy")) return <Leaf className="w-6 h-6" />;
  if (t.includes("market")) return <Store className="w-6 h-6" />;
  if (t.includes("pathways")) return <ArrowRight className="w-6 h-6" />;
  if (t.includes("academic")) return <Book className="w-6 h-6" />;
  if (t.includes("friendship")) return <Users className="w-6 h-6" />;
  return <Target className="w-6 h-6" />;
};

// A learn card: tinted circle with icon, title and description on white background.
const LearnCard = ({ item, theme }) => {
  const Icon = learnIconFor(item.title);
  return (
    <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-charcoal/[0.08] flex flex-col h-full">
      <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-6 ${theme.tint} ${theme.accentText}`}>
        {Icon}
      </div>
      <h3 className={`text-lg font-bold ${theme.heading} mb-3`}>{item.title}</h3>
      <p className="text-charcoal leading-relaxed">{item.description}</p>
    </div>
  );
};

// Build the learn-items grid: one column on phones, two on tablets, three on desktop.
function buildLearnGrid(detail, theme) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
      {detail.learnItems.map((item, index) => (
        <LearnCard key={index} item={item} theme={theme} />
      ))}
    </div>
  );
}

const photoOneBySlug = {
  "gira-neza": images.giraNeza.hero,
  "abigail-textiles": images.abigailTextiles.hero,
  "impano-hoops": images.impanoHoops.hero,
};
const photoTwoBySlug = {
  "gira-neza": images.giraNeza.why,
  "abigail-textiles": images.abigailTextiles.why,
  "impano-hoops": images.impanoHoops.why,
};

const factIcons = [
  <Target key="focus" className="w-6 h-6" />,
  <Users key="openTo" className="w-6 h-6" />,
  <MapPin key="location" className="w-6 h-6" />,
  <Clock key="schedule" className="w-6 h-6" />,
];

// Map an audience title to a lucide icon element. Falls back to Target.
// Returns an element (not a component type) so nothing is created during render.
const audienceIconFor = (title) => {
  const t = title.toLowerCase();
  if (t.includes("parent") || t.includes("guardian") || t.includes("woman") || t.includes("women"))
    return <Users className="w-6 h-6" />;
  if (t.includes("partner") || t.includes("buyer") || t.includes("sponsor")) return <Handshake className="w-6 h-6" />;
  if (t.includes("expert") || t.includes("volunteer") || t.includes("coach")) return <ShieldCheck className="w-6 h-6" />;
  if (t.includes("school")) return <School className="w-6 h-6" />;
  if (t.includes("business") || t.includes("institution")) return <Building2 className="w-6 h-6" />;
  if (t.includes("supporter")) return <Heart className="w-6 h-6" />;
  return <Target className="w-6 h-6" />;
};

// Consistent section heading used by every content section.
const SectionHeader = ({ title, intro, theme }) => (
  <div className="text-center mb-12 md:mb-16">
    <h2 className={`text-3xl md:text-4xl font-bold tracking-tight ${theme.heading} mb-4`}>{title}</h2>
    {intro && (
      <p className={`text-lg leading-relaxed ${theme.tintText} max-w-2xl mx-auto`}>{intro}</p>
    )}
  </div>
);

export default function ProgramPage({ program }) {
  const theme = themes[program.theme];
  const detail = program.detail;
  const photoOne = photoOneBySlug[program.slug];
  const photoTwo = photoTwoBySlug[program.slug];
  const factValues = [detail.focus, detail.openTo, detail.location, detail.schedule];

  // Service structured data for this program, with the organization as provider.
  const serviceUrl = site.url
    ? `${site.url.replace(/\/$/, "")}/programs/${program.slug}`
    : undefined;
  const service = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: program.name,
    description: program.subtext,
    areaServed: "Rwanda",
    provider: {
      "@type": "Organization",
      name: "Hinduka For Life Ltd",
    },
    ...(serviceUrl ? { url: serviceUrl } : {}),
  };

  // FAQ structured data built from the same Q&A data in lib/content.js,
  // skipping any answer that still contains a placeholder in brackets.
  const faqQuestions = detail.faq.filter(
    (qa) => !/\[[^\]]*\]/.test(qa.answer)
  );
  const faq =
    faqQuestions.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqQuestions.map((qa) => ({
            "@type": "Question",
            name: qa.question,
            acceptedAnswer: { "@type": "Answer", text: qa.answer },
          })),
        }
      : null;
  const facts = detail.factsLabels.map((label, index) => ({
    label,
    value: factValues[index],
    icon: factIcons[index],
  }));

  const learnGrid = buildLearnGrid(detail, theme);
  const otherPrograms = programs.filter((p) => p.slug !== program.slug);

  return (
    <>
      <JsonLd data={service} />
      {faq && <JsonLd data={faq} />}
      {/* 1. Hero */}
      <section className={`${theme.heroBg} ${theme.heroText} py-16 md:py-24`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-start">
            <div className="flex-1">
              <h1 className={`text-4xl md:text-5xl font-bold tracking-tight mb-6 leading-tight`}>
                {program.headline}
              </h1>
              <p className={`text-lg md:text-xl mb-10 leading-relaxed opacity-90`}>{program.subtext}</p>
              <Button
                variant="gold"
                href={program.joinHref}
                className="w-full sm:w-auto"
              >
                {program.joinButton}
              </Button>
            </div>
            <div className="flex-1 max-w-[560px] relative">
              <Image
                src={photoOne.src}
                alt={photoOne.alt}
                width={640}
                height={480}
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 560px, 640px"
                className="rounded-2xl object-cover w-full h-[500px] shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Program at a glance */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="Program at a glance" intro="Key facts at a glance." theme={theme} />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {facts.map((fact, index) => (
              <div key={index} className="rounded-2xl p-6 md:p-8 shadow-sm border border-charcoal/[0.08] bg-white flex flex-col items-center text-center">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-4 shrink-0 ${theme.tint} ${theme.accentText}`}>
                  {fact.icon}
                </div>
                <p className={`text-sm font-semibold uppercase tracking-wider text-charcoal/[0.6] mb-1`}>{fact.label}</p>
                <p className={`text-lg font-bold ${theme.heading}`}>{fact.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. About the program */}
      <section className={`${theme.tint} py-16 md:py-24`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div>
              <SectionHeader title={detail.overviewTitle} theme={theme} />
              <p className={`text-lg leading-relaxed ${theme.tintText} mb-6`}>{program.about}</p>
              {detail.overview?.map((paragraph, index) => (
                <p key={index} className={`text-lg leading-relaxed ${theme.tintText} mb-6 last:mb-0`}>
                  {paragraph}
                </p>
              ))}
            </div>
            <div className="relative">
              <Image
                src={photoTwo.src}
                alt={photoTwo.alt}
                width={560}
                height={420}
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                className="rounded-2xl object-cover w-full h-[480px] shadow-xl relative z-10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 4. Who it is for */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="Who it is for" intro="This program is designed for:" theme={theme} />
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
            <div className={`w-14 h-14 rounded-full flex items-center justify-center shrink-0 ${theme.tint} ${theme.accentText}`}>
              <Users className="w-7 h-7" />
            </div>
            <p className={`text-lg leading-relaxed ${theme.tintText} max-w-2xl text-center`}>{program.who}</p>
          </div>
        </div>
      </section>

      {/* 5. What participants learn */}
      <section className={`${theme.tint} py-16 md:py-24`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title={program.learnTitle} intro={detail.learnIntro} theme={theme} />
          {learnGrid}
        </div>
      </section>

      {/* 6. How it works */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title={detail.stepsTitle} theme={theme} />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {detail.steps.map((step, index) => (
              <div key={index} className="rounded-2xl p-6 md:p-8 shadow-sm border border-charcoal/[0.08] bg-white flex flex-col h-full">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-6 ${theme.border} ${theme.accentText} font-bold text-charcoal`}>
                  {index + 1}
                </div>
                <h3 className={`text-lg font-bold ${theme.heading} mb-3`}>{step.title}</h3>
                <p className="text-charcoal leading-relaxed">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. What you gain */}
      <section className={`${theme.tint} py-16 md:py-24`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title={detail.outcomesTitle} theme={theme} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {detail.outcomes.map((outcome, index) => (
              <div key={index} className="flex items-start gap-3">
                <Check className={`w-6 h-6 shrink-0 ${theme.accentText} mt-0.5`} />
                <span className={`text-lg leading-relaxed ${theme.tintText}`}>{outcome}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Why it matters */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <SectionHeader title={detail.whyTitle} theme={theme} />
              <p className={`text-lg leading-relaxed ${theme.tintText} mb-6`}>{program.why}</p>
              <p className={`text-lg leading-relaxed ${theme.tintText} mb-0 last:mb-0`}>{detail.whyExtra}</p>
            </div>
            <div className="relative">
              <Image
                src={photoOne.src}
                alt={photoOne.alt}
                width={560}
                height={420}
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                className="rounded-2xl object-cover w-full h-[480px] shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 9. FAQ */}
      <section className={`${theme.tint} py-16 md:py-24`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title={detail.faqTitle} theme={theme} />
          <div className="max-w-3xl mx-auto space-y-3">
            {detail.faq.map((item, index) => (
              <details
                key={index}
                className="group rounded-xl p-4 md:p-6 border border-charcoal/[0.12] open:border-charcoal/[0.4] open:bg-charcoal/[0.02]"
              >
                <summary className="flex items-center justify-between cursor-pointer list-none outline-none font-bold text-charcoal">
                  <span>{item.question}</span>
                  <ChevronDown
                    className="w-5 h-5 shrink-0 text-charcoal transition-transform duration-200 group-open:rotate-180"
                    aria-hidden="true"
                  />
                </summary>
                <p className="mt-3 text-charcoal leading-relaxed">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 10. Get involved */}
      <section className={`${theme.tint} py-16 md:py-24`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title={detail.getInvolvedTitle} intro={program.getInvolvedText} theme={theme} />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
            {detail.audiences.map((audience, index) => (
              <div key={index} className="rounded-2xl p-6 md:p-8 shadow-sm border border-charcoal/[0.08] bg-white">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-6 ${theme.tint} ${theme.accentText}`}>
                  {audienceIconFor(audience.title)}
                </div>
                <h3 className={`text-lg font-bold ${theme.heading} mb-3`}>{audience.title}</h3>
                <p className={`text-charcoal leading-relaxed ${theme.tintText}`}>{audience.text}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="gold"
              href={program.buttons[0].href}
              className="w-full sm:w-auto"
            >
              {program.buttons[0].label}
            </Button>
            <Button
              variant="program"
              className={`${theme.button} ${theme.buttonHover} w-full sm:w-auto`}
              href={program.buttons[1].href}
            >
              {program.buttons[1].label}
            </Button>
          </div>
        </div>
      </section>

      {/* 11. Explore our other programs */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title={detail.otherProgramsTitle} theme={{ ...theme, heading: "text-charcoal" }} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {otherPrograms.map((p) => {
              const pTheme = themes[p.theme];
              return <ProgramCard key={p.slug} program={p} theme={pTheme} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
}
