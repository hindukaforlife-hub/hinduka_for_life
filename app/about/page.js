import Image from "next/image";
import Link from "next/link";
import {
  about,
  programs,
  images,
  home,
  themes,
  site,
  nav,
  seo,
} from "@/lib/content";
import Button from "@/components/Button";
import SocialIcons from "@/components/SocialIcons";
import JsonLd from "@/components/JsonLd";
import {
  Building2,
  MapPin,
  Grid,
  Users,
  BookOpen,
  Handshake,
  GraduationCap,
  Shield,
  Home as HomeIcon,
  Phone,
  Mail,
  Clock,
  UserPlus,
  HandHeart,
  ChevronDown,
  Check,
  Target,
} from "lucide-react";

const navToSection = {
  "Our story": "story",
  Mission: "mission",
  "Who we serve": "who",
  "Our programs": "programs",
  "Our approach": "approach",
  "Our team": "team",
  FAQ: "faq",
};

const galleryAlts = {
  "/images/image1.png": "Hinduka For Life participants and community members",
  "/images/image2.png": "Community in Rwanda",
  "/images/image3.png": "Young people learning rabbit farming",
  "/images/image4.png": "Gira Neza participants",
  "/images/image5.png": "Women learning tailoring",
  "/images/image6.png": "Abigail Textiles participants",
  "/images/image7.png": "Young people playing basketball",
  "/images/image8.png": "Impano Hoops participants",
};

const groupBorder = {
  "Children and teenagers": "border-brand-green",
  "Young women and single mothers": "border-abigail-accent",
  "Families and the wider community": "border-impano-accent",
};

const focusIcons = [BookOpen, Handshake, GraduationCap];
const stepIcons = [Users, HomeIcon, Handshake];

export const metadata = {
  title: { absolute: seo.pages.about.title },
  description: seo.pages.about.description,
  ...(site.url ? { alternates: { canonical: `${site.url}/about` } } : {}),
  openGraph: {
    title: seo.pages.about.title,
    description: seo.pages.about.description,
    images: [{ url: seo.pages.about.ogImage }],
  },
  twitter: {
    card: "summary",
  },
};

export default function AboutPage() {
  return (
    <>
      {/* 1. Hero */}
      <section
        id="hero"
        className="relative bg-gradient-to-br from-brand-green via-gira-dark to-brand-green text-white overflow-hidden py-16 md:py-24 scroll-mt-28"
        aria-labelledby="hero-title"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="order-2 md:order-1 space-y-6">
              <span className="inline-block px-3 py-1 rounded-full bg-brand-gold text-charcoal text-xs font-semibold tracking-wide uppercase">
                About us
              </span>
              <h1 id="hero-title" className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
                {about.heroTitle}
              </h1>
              <p className="text-lg md:text-xl leading-relaxed text-white/90 mb-8">
                {about.heroText}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="gold" href="/programs" className="w-full sm:w-auto">
                  Our programs
                </Button>
                <Button
                  variant="outline-white"
                  href="/contact"
                  className="w-full sm:w-auto"
                >
                  Contact us
                </Button>
              </div>
            </div>
            <div className="order-1 md:order-2 relative">
              <Image
                src={images.about.hero.src}
                alt={images.about.hero.alt}
                width={600}
                height={400}
                priority
                className="rounded-3xl shadow-2xl object-cover w-full h-64 md:h-80 aspect-[3/2] relative z-10"
              />
            </div>
          </div>
        </div>
      </section>
      {/* 2. Quick facts strip (overlaps hero bottom) */}
      <section className="px-4 sm:px-6 lg:px-8 scroll-mt-28">
        <div className="max-w-6xl mx-auto relative z-20 mt-[-80px] md:mt-[-100px]">
          <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-charcoal/[0.08]">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {about.quickFacts.map((fact, i) => (
                <div key={i} className="text-center">
                  <div className="mx-auto w-10 h-10 rounded-full bg-light-green flex items-center justify-center mb-3 text-brand-green">
                    {i === 0 && <Building2 className="w-5 h-5" />}
                    {i === 1 && <MapPin className="w-5 h-5" />}
                    {i === 2 && <Grid className="w-5 h-5" />}
                    {i === 3 && <Users className="w-5 h-5" />}
                  </div>
                  <p className="text-xs text-charcoal/60 uppercase tracking-wider font-medium mb-1">
                    {fact.label}
                  </p>
                  <p className="text-sm md:text-base font-bold text-charcoal">
                    {fact.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. In-page menu (desktop only, sticky below header) */}
      <nav
        className="hidden md:block sticky top-16 z-30 scroll-mt-28"
        aria-label="In-page navigation"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-sm border border-charcoal/[0.08] p-1">
            <div className="flex overflow-x-auto gap-2 pb-2">
              {about.nav.map((label) => (
                <Link
                  key={label}
                  href={`#${navToSection[label]}`}
                  className="px-5 py-2.5 text-xs font-medium rounded-lg text-charcoal bg-white border border-charcoal/[0.08] hover:bg-brand-green hover:text-white transition-colors whitespace-nowrap shrink-0 motion-reduce:hover:translate-y-0"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* 4. Our story */}
      <section
        id="story"
        className="bg-white py-16 md:py-24 scroll-mt-28"
        aria-labelledby="story-heading"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="relative">
              <div
                className="absolute inset-0 bg-light-green rounded-3xl -top-4 -left-4 z-0"
                aria-hidden="true"
              />
              <Image
                src={images.about.story.src}
                alt={images.about.story.alt}
                width={500}
                height={400}
                sizes="(max-width: 768px) 100vw, 50vw"
                className="relative z-10 rounded-3xl shadow-lg object-cover w-full h-64 md:h-80 aspect-[5/4]"
              />
            </div>
            <div className="space-y-6">
              <h2 id="story-heading" className="text-2xl md:text-3xl font-bold text-brand-green">
                {about.storyTitle}
              </h2>
              <p className="text-charcoal leading-relaxed text-lg">
                {about.storyText}
              </p>
              <p className="text-charcoal leading-relaxed text-lg">
                {about.storyExtra}
              </p>
              <blockquote className="border-l-4 border-brand-gold pl-6 bg-light-green rounded-r-xl p-6 my-2">
                <p className="italic text-brand-green text-lg font-semibold leading-relaxed">
                  “{about.storyHighlight}”
                </p>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Mission and focus */}
      <section
        id="mission"
        className="bg-light-green py-16 md:py-24 scroll-mt-28"
        aria-labelledby="mission-heading"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-16 md:mb-20">
            <div className="bg-white rounded-2xl shadow-sm p-8 md:p-10 border border-charcoal/[0.08] hover:-translate-y-1 transition-transform duration-200 motion-reduce:duration-0 motion-reduce:hover:translate-y-0">
              <div className="w-12 h-12 rounded-xl bg-brand-green flex items-center justify-center mb-6">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-3">
                {about.mission.title}
              </h3>
              <p className="text-charcoal leading-relaxed text-sm md:text-base">
                {about.mission.text}
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-sm p-8 md:p-10 border border-charcoal/[0.08] hover:-translate-y-1 transition-transform duration-200 motion-reduce:duration-0 motion-reduce:hover:translate-y-0">
              <div className="w-12 h-12 rounded-xl bg-brand-gold flex items-center justify-center mb-6 text-charcoal">
                <BookOpen className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-3">
                {about.whatWeDo.title}
              </h3>
              <p className="text-charcoal leading-relaxed text-sm md:text-base">
                {about.whatWeDo.text}
              </p>
            </div>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-brand-green text-center mb-10 md:mb-16">
            {about.focusTitle}
          </h2>
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {about.focusAreas.map((area, i) => {
              const Icon = focusIcons[i];
              return (
                <div
                  key={area.title}
                  className="bg-white rounded-2xl shadow-sm p-6 md:p-8 border border-charcoal/[0.08] hover:-translate-y-1 transition-transform duration-200 motion-reduce:duration-0 motion-reduce:hover:translate-y-0"
                >
                  <div className="w-10 h-10 rounded-xl bg-brand-green/10 flex items-center justify-center mb-5 text-brand-green">
                    <Icon className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <h3 className="font-bold text-charcoal mb-3">{area.title}</h3>
                  <p className="text-charcoal/80 leading-relaxed text-sm md:text-base">
                    {area.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. Who we serve */}
      <section
        id="who"
        className="bg-white py-16 md:py-24 scroll-mt-28"
        aria-labelledby="who-heading"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 id="who-heading" className="text-2xl md:text-3xl font-bold text-brand-green mb-4">
              {about.whoTitle}
            </h2>
            <p className="text-charcoal leading-relaxed text-lg max-w-2xl mx-auto">
              {about.whoIntro}
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {about.whoGroups.map((group) => {
              const icons = [Users, UserPlus, HomeIcon];
              const Icon = icons[about.whoGroups.indexOf(group)];
              return (
                <div
                  key={group.title}
                  className={`bg-white rounded-2xl shadow-sm p-6 md:p-8 border-t-4 ${groupBorder[group.title]} hover:-translate-y-1 transition-transform duration-200 motion-reduce:duration-0 motion-reduce:hover:translate-y-0`}
                >
                  <div className="w-12 h-12 rounded-xl bg-light-green flex items-center justify-center mb-5 text-brand-green">
                    <Icon className="w-6 h-6" aria-hidden="true" />
                  </div>
                  <h3 className="font-bold text-charcoal mb-3">{group.title}</h3>
                  <p className="text-charcoal/80 leading-relaxed text-sm md:text-base">
                    {group.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 7. Our programs */}
      <section
        id="programs"
        className="bg-light-green py-16 md:py-24 scroll-mt-28"
        aria-labelledby="programs-heading"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 id="programs-heading" className="text-2xl md:text-3xl font-bold text-brand-green mb-4">
              {about.programsTitle}
            </h2>
            <p className="text-charcoal leading-relaxed text-lg max-w-2xl mx-auto">
              {about.programsIntro}
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {programs.map((program) => {
              const theme = themes[program.theme];
              const highlights = about.programHighlights[program.slug] || [];
              return (
                <div
                  key={program.slug}
                  className={`bg-white rounded-2xl shadow-sm p-6 md:p-8 border-t-4 ${theme.border} hover:-translate-y-1 transition-transform duration-200 motion-reduce:duration-0 motion-reduce:hover:translate-y-0`}
                >
                  <div className="flex items-center gap-4 mb-6">
                    <Image
                      src={program.icon}
                      alt={`${program.name} icon`}
                      width={96}
                      height={96}
                      sizes="96px"
                      className="rounded-full bg-white p-1 shadow-sm"
                    />
                    <div className="flex flex-col">
                      <span className={`font-bold text-charcoal ${theme.heading} text-lg`}>
                        {program.name}
                      </span>
                      <span className={`text-xs ${theme.accentText} font-medium uppercase tracking-wider`}>
                        {program.theme}
                      </span>
                    </div>
                  </div>
                  <p className={`text-charcoal leading-relaxed text-sm md:text-base mb-6 ${theme.tintText}`}>
                    {program.cardText}
                  </p>
                  <ul className="space-y-3 mb-6">
                    {highlights.map((h, j) => (
                      <li key={j} className="flex items-start gap-3 text-sm text-charcoal/80 leading-relaxed">
                        <Check
                          className={`w-5 h-5 shrink-0 mt-0.5 ${theme.accentText}`}
                          aria-hidden="true"
                        />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                  <Button variant="gold" href={`/programs/${program.slug}`} className="w-full">
                    Learn more
                  </Button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 8. Our approach */}
      <section
        id="approach"
        className="bg-white py-16 md:py-24 scroll-mt-28"
        aria-labelledby="approach-heading"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 id="approach-heading" className="text-2xl md:text-3xl font-bold text-brand-green mb-4">
              {about.approachTitle}
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {about.approachItems.map((item, i) => {
              const icons = [BookOpen, Users, HomeIcon, Shield];
              const Icon = icons[i];
              return (
                <div
                  key={item.title}
                  className="bg-white rounded-2xl shadow-sm p-6 md:p-8 border border-charcoal/[0.08] flex flex-col items-center text-center hover:-translate-y-1 transition-transform duration-200 motion-reduce:duration-0 motion-reduce:hover:translate-y-0"
                >
                  <div className="w-12 h-12 rounded-xl bg-brand-green/10 flex items-center justify-center mb-5 text-brand-green">
                    <Icon className="w-6 h-6" aria-hidden="true" />
                  </div>
                  <h3 className="font-bold text-charcoal mb-3">{item.title}</h3>
                  <p className="text-charcoal/80 leading-relaxed text-sm md:text-base">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 9. How we work */}
      <section
        className="bg-brand-green text-white py-16 md:py-24 scroll-mt-28"
        aria-labelledby="how-heading"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 id="how-heading" className="text-2xl md:text-3xl font-bold mb-4">
              {about.howTitle}
            </h2>
          </div>
          <div className="relative">
            <div className="hidden lg:block absolute top-12 left-1/2 w-0.5 h-full bg-white/30 -z-10" aria-hidden="true" />
            <div className="grid md:grid-cols-3 gap-8 md:gap-12 items-start">
              {about.howSteps.map((step, i) => {
                const StepIcon = stepIcons[i];
                return (
                  <div key={step.title} className="relative text-center md:text-left">
                    <div className="mx-auto md:mx-0 w-10 h-10 rounded-full bg-brand-gold text-charcoal flex items-center justify-center font-bold mb-4 md:mb-0 md:ml-0">
                      {i + 1}
                    </div>
                    {StepIcon && (
                      <div className="mx-auto md:mx-0 w-8 h-8 rounded-full bg-white/20 flex items-center justify-center mb-4 md:mb-0 md:ml-0 -mt-3 md:-mt-0">
                        <StepIcon className="w-4 h-4 text-charcoal" aria-hidden="true" />
                      </div>
                    )}
                  <h3 className="font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-white/90 text-sm md:text-base leading-relaxed">
                    {step.text}
                  </p>
                </div>
              );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 10. Gallery */}
      <section
        className="bg-white py-16 md:py-24 scroll-mt-28"
        aria-labelledby="gallery-heading"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 id="gallery-heading" className="text-2xl md:text-3xl font-bold text-brand-green mb-4">
              {about.galleryTitle}
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {about.galleryImages.map((file, i) => {
              const src = `/images/${file}`;
              return (
                <Image
                  key={i}
                  src={src}
                  alt={galleryAlts[src] || `Community photo ${i + 1}`}
                  width={400}
                  height={400}
                  className="rounded-2xl object-cover w-full aspect-[4/3] hover:scale-105 transition-transform duration-300 motion-reduce:duration-0 motion-reduce:hover:scale-100"
                  sizes="(max-width: 768px) 50vw, (max-width: 1280px) 33vw, 25vw"
                  loading="lazy"
                />
              );
            })}
          </div>
        </div>
      </section>

      {/* 11. Our team */}
      <section
        id="team"
        className="bg-light-green py-16 md:py-24 scroll-mt-28"
        aria-labelledby="team-heading"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 id="team-heading" className="text-2xl md:text-3xl font-bold text-brand-green mb-4">
              {about.leadershipTitle}
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {about.leadership.map((person) => {
              const initials = person.name
                .split(" ")
                .map((part) => part[0])
                .join("")
                .toUpperCase();
              return (
                <div
                  key={person.name}
                  className="bg-white rounded-2xl shadow-sm p-8 md:p-10 flex flex-col items-center text-center border border-charcoal/[0.08] hover:-translate-y-1 transition-transform duration-200 motion-reduce:duration-0 motion-reduce:hover:translate-y-0"
                >
                  <div className="w-20 h-20 rounded-full bg-brand-green flex items-center justify-center mb-6 text-white font-bold text-xl">
                    {initials}
                  </div>
                  <h3 className="text-lg font-bold text-charcoal mb-2">
                    {person.name}
                  </h3>
                  <p className="text-brand-green font-medium mb-4">{person.role}</p>
                  <p className="text-charcoal leading-relaxed text-sm md:text-base">
                    {person.bio}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 12. Our impact so far */}
      <section
        className="bg-brand-gold text-charcoal py-16 md:py-24 scroll-mt-28"
        aria-labelledby="impact-heading"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 id="impact-heading" className="text-2xl md:text-3xl font-bold mb-4">
              {about.impactTitle}
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {about.impactItems.map((item, i) => {
              const Icon = impactIcons[i] || Users;
              return (
                <div key={item} className="text-center">
                  <Icon className="w-10 h-10 mx-auto mb-4 text-brand-green" aria-hidden="true" />
                  <p className="text-xl font-bold">{item}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 13. Visit or contact us */}
      <section
        className="bg-white py-16 md:py-24 scroll-mt-28"
        aria-labelledby="visit-heading"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 id="visit-heading" className="text-2xl md:text-3xl font-bold text-brand-green mb-4">
              {about.visitTitle}
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-6 md:gap-8 mb-10 md:mb-12">
            <div className="bg-white rounded-2xl shadow-sm p-6 md:p-8 border border-charcoal/[0.08] flex items-start gap-4 hover:-translate-y-1 transition-transform duration-200 motion-reduce:duration-0 motion-reduce:hover:translate-y-0">
              <MapPin className="w-6 h-6 shrink-0 mt-0.5 text-brand-green" aria-hidden="true" />
              <div>
                <p className="font-bold text-charcoal mb-1">Address</p>
                <p className="text-charcoal/80 text-sm leading-relaxed">{site.address}</p>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-sm p-6 md:p-8 border border-charcoal/[0.08] flex items-start gap-4 hover:-translate-y-1 transition-transform duration-200 motion-reduce:duration-0 motion-reduce:hover:translate-y-0">
              <Phone className="w-6 h-6 shrink-0 mt-0.5 text-brand-green" aria-hidden="true" />
              <div>
                <p className="font-bold text-charcoal mb-1">Phone / WhatsApp</p>
                <a href={`tel:${site.phoneLink}`} className="text-brand-gold font-medium text-sm hover:underline">{site.phone}</a>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-sm p-6 md:p-8 border border-charcoal/[0.08] flex items-start gap-4 hover:-translate-y-1 transition-transform duration-200 motion-reduce:duration-0 motion-reduce:hover:translate-y-0">
              <Mail className="w-6 h-6 shrink-0 mt-0.5 text-brand-green" aria-hidden="true" />
              <div>
                <p className="font-bold text-charcoal mb-1">Email</p>
                <a href={`mailto:${site.emailLink}`} className="text-brand-gold font-medium text-sm break-words hover:underline">{site.email}</a>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-sm p-6 md:p-8 border border-charcoal/[0.08] flex items-start gap-4 hover:-translate-y-1 transition-transform duration-200 motion-reduce:duration-0 motion-reduce:hover:translate-y-0">
              <Clock className="w-6 h-6 shrink-0 mt-0.5 text-brand-green" aria-hidden="true" />
              <div>
                <p className="font-bold text-charcoal mb-1">{about.visitHoursLabel}</p>
                <p className="text-charcoal/80 text-sm leading-relaxed">{about.visitHours}</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="gold" href={site.whatsapp} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              Chat on WhatsApp
            </Button>
          </div>
          <div className="mt-10 md:mt-12 flex justify-center">
            <SocialIcons className="gap-4" size={24} />
          </div>
        </div>
      </section>

      {/* 14. Ways to get involved */}
      <section
        className="bg-light-green py-16 md:py-24 scroll-mt-28"
        aria-labelledby="get-involved-heading"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 id="get-involved-heading" className="text-2xl md:text-3xl font-bold text-brand-green mb-4">
              {about.getInvolvedTitle}
            </h2>
            <p className="text-charcoal leading-relaxed text-lg max-w-2xl mx-auto">
              {about.getInvolvedIntro}
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {about.getInvolvedItems.map((item, i) => {
              const icons = [UserPlus, HandHeart, Handshake];
              const Icon = icons[i];
              return (
                <div
                  key={item.title}
                  className="bg-white rounded-2xl shadow-sm p-6 md:p-8 border border-charcoal/[0.08] hover:-translate-y-1 transition-transform duration-200 motion-reduce:duration-0 motion-reduce:hover:translate-y-0"
                >
                  <div className="w-12 h-12 rounded-xl bg-brand-green/10 flex items-center justify-center mb-5 text-brand-green">
                    <Icon className="w-6 h-6" aria-hidden="true" />
                  </div>
                  <h3 className="font-bold text-charcoal mb-3">{item.title}</h3>
                  <p className="text-charcoal/80 leading-relaxed text-sm md:text-base mb-6">
                    {item.text}
                  </p>
                  <Button variant="gold" href={item.href} className="w-full">
                    {item.button}
                  </Button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 15. FAQ */}
      <section
        id="faq"
        className="bg-white py-16 md:py-24 scroll-mt-28"
        aria-labelledby="faq-heading"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 id="faq-heading" className="text-2xl md:text-3xl font-bold text-brand-green mb-4">
              {about.faqTitle}
            </h2>
          </div>
          <div className="space-y-3">
            {about.faq.map((qa, i) => (
              <details key={i} className="group bg-white rounded-xl border border-charcoal/[0.12] overflow-hidden open:border-brand-green">
                <summary className="list-none flex items-center justify-between px-6 py-4 cursor-pointer font-bold text-charcoal hover:bg-brand-green/5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green">
                  <span>{qa.question}</span>
                  <ChevronDown className="w-4 h-4 text-brand-green group-open:rotate-180 transition-transform duration-200 motion-reduce:duration-0" aria-hidden="true" />
                </summary>
                <div className="px-6 pb-4 text-charcoal/80 leading-relaxed text-sm md:text-base">{qa.answer}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ structured data (built from the same Q&A data in lib/content.js,
         skipping any answer that still contains a placeholder in brackets) */}
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: about.faq
            .filter((qa) => !/\[[^\]]*\]/.test(qa.answer))
            .map((qa) => ({
              "@type": "Question",
              name: qa.question,
              acceptedAnswer: { "@type": "Answer", text: qa.answer },
            })),
        }}
      />

      {/* 16. Call to action */}
      <section
        className="bg-brand-green text-white py-16 md:py-24 scroll-mt-28"
        aria-labelledby="cta-heading"
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 id="cta-heading" className="text-2xl md:text-3xl font-bold mb-6">
            {home.cta.title}
          </h2>
          <p className="text-white/90 leading-relaxed text-lg mb-10 md:mb-12">
            Whether you want to enroll, volunteer, partner or support our work, we would love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="gold" href="/contact" className="w-full sm:w-auto">
              Get involved
            </Button>
            <Button variant="outline-white" href="/contact" className="w-full sm:w-auto">
              Contact us
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

const impactIcons = [Users, GraduationCap, HomeIcon];