import Image from "next/image";
import { home, images, programs, seo, site, themes } from "@/lib/content";
import Button from "@/components/Button";
import ProgramCard from "@/components/ProgramCard";
import { BookOpen, Users, Home as HomeIcon, Shield } from "lucide-react";

export const metadata = {
  title: { absolute: seo.pages.home.title },
  description: seo.pages.home.description,
  ...(site.url ? { alternates: { canonical: `${site.url}/` } } : {}),
  openGraph: {
    title: seo.pages.home.title,
    description: seo.pages.home.description,
    images: [{ url: seo.pages.home.ogImage }],
  },
  twitter: {
    card: "summary",
  },
};

const whyIcons = {
  "Learning by doing": BookOpen,
  "Women and youth first": Users,
  "Rooted in the community": HomeIcon,
  "Built to last": Shield,
};

export default function Home() {
  return (
    <>
      {/* 1. Hero */}
      <section className="bg-brand-green text-white py-16 md:py-24 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="order-2 md:order-1">
              <h1
                className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6"
              >
                {home.heroTitle}
              </h1>
              <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
                {home.heroText}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  variant="gold"
                  href={home.heroButtons[0].href}
                  className="w-full sm:w-auto"
                >
                  {home.heroButtons[0].label}
                </Button>
                <Button
                  variant="outline-white"
                  href={home.heroButtons[1].href}
                  className="w-full sm:w-auto"
                >
                  {home.heroButtons[1].label}
                </Button>
              </div>
            </div>
            <div className="order-1 md:order-2 relative">
              <Image
                src={images.home.hero.src}
                alt={images.home.hero.alt}
                width={600}
                height={400}
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="rounded-3xl shadow-xl object-cover w-full h-64 md:h-80 aspect-[3/2] relative z-10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Who we are */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-brand-green mb-4">
                {home.whoTitle}
              </h2>
              <p className="text-charcoal leading-relaxed mb-6">
                {home.whoText}
              </p>
              <Button variant="gold" href="/about" className="w-auto">
                Learn more about us
              </Button>
            </div>
            <div>
              <Image
                src={images.home.community.src}
                alt={images.home.community.alt}
                width={500}
                height={400}
                sizes="(max-width: 768px) 100vw, 50vw"
                className="rounded-xl shadow-lg object-cover w-full h-64 md:h-80 aspect-[5/4]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Our programs */}
      <section className="bg-light-green py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-2xl md:text-3xl font-bold text-brand-green text-center mb-12"
          >
            {home.programsTitle}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {programs.map((program) => {
              const theme = themes[program.theme];
              return (
                <ProgramCard
                  key={program.slug}
                  program={program}
                  theme={theme}
                />
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Why Hinduka For Life */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-2xl md:text-3xl font-bold text-brand-green text-center mb-12"
          >
            {home.whyTitle}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {home.whyItems.map((item) => {
              const Icon = whyIcons[item] || Shield;
              return (
                <div
                  key={item}
                  className="rounded-xl bg-light-green p-6 text-center border border-gira-tint hover:-translate-y-1 transition-transform duration-200 motion-reduce:duration-0 motion-reduce:hover:translate-y-0"
                >
                  <Icon
                    className="w-8 h-8 mx-auto mb-3 text-gira-dark"
                    aria-hidden="true"
                  />
                  <p className="text-sm font-medium text-charcoal">{item}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. Call to action */}
      <section className="bg-brand-gold text-charcoal py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">
            {home.cta.title}
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="green" href={home.cta.buttons[0].href}>
              {home.cta.buttons[0].label}
            </Button>
            <Button variant="outline-dark" href={home.cta.buttons[1].href}>
              {home.cta.buttons[1].label}
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
