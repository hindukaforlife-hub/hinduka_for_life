import { Suspense } from "react";
import Link from "next/link";
import { contact, seo, site } from "@/lib/content";
import Button from "@/components/Button";
import SocialIcons from "@/components/SocialIcons";
import ContactForm from "@/components/ContactForm";
import { MapPin, Phone, Mail, Clock, Users, Scissors, Handshake } from "lucide-react";

export const metadata = {
  title: { absolute: seo.pages.contact.title },
  description: seo.pages.contact.description,
  ...(site.url ? { alternates: { canonical: `${site.url}/contact` } } : {}),
  openGraph: {
    title: seo.pages.contact.title,
    description: seo.pages.contact.description,
    images: [{ url: seo.pages.contact.ogImage }],
  },
  twitter: {
    card: "summary",
  },
};

const infoRows = [
  { label: "Address", value: site.address, Icon: MapPin, href: undefined },
  {
    label: "Phone / WhatsApp",
    value: site.phone,
    Icon: Phone,
    href: site.phoneLink ? `tel:${site.phoneLink}` : undefined,
  },
  {
    label: "Email",
    value: site.email,
    Icon: Mail,
    href: site.emailLink ? `mailto:${site.emailLink}` : undefined,
  },
  { label: "Opening hours", value: site.hours, Icon: Clock, href: undefined },
];

export default function ContactPage() {
  return (
    <>
      {/* 1. Hero */}
      <section className="bg-brand-green text-white py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-6">
            {contact.heroTitle}
          </h1>
          <p className="text-lg md:text-xl text-white mb-8 leading-relaxed">
            {contact.heroText}
          </p>
        </div>
      </section>

      {/* 2. Get in touch and form */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {/* Left column: Get in touch */}
            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold text-brand-green">
                {contact.getInTouchTitle}
              </h2>
              <div className="space-y-5">
                {infoRows.map((row) => (
                  <div key={row.label} className="flex items-start gap-4">
                    <div className="shrink-0 w-8 h-8 rounded-full bg-light-green flex items-center justify-center text-brand-green mt-0.5">
                      <row.Icon className="w-5 h-5" aria-hidden="true" />
                    </div>
                    <div className="text-charcoal leading-relaxed">
                      {row.href ? (
                        <Link
                          href={row.href}
                          className="hover:text-brand-green transition-colors"
                        >
                          {row.label}: {row.value}
                        </Link>
                      ) : (
                        <>
                          <span className="font-medium">{row.label}:</span>{" "}
                          {row.value}
                        </>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              <div className="pt-2">
                <Button
                  variant="gold"
                  href={
                    site.whatsappNumber
                      ? `https://wa.me/${site.whatsappNumber}`
                      : "#contact-form"
                  }
                  target={site.whatsappNumber ? "_blank" : undefined}
                  rel={site.whatsappNumber ? "noopener noreferrer" : undefined}
                >
                  {contact.whatsappButton}
                </Button>
              </div>
              <div className="pt-4 border-t border-charcoal/[0.05]">
                <SocialIcons />
              </div>
            </div>

            {/* Right column: Form */}
            <div className="bg-white rounded-3xl shadow-sm p-6 md:p-8" id="contact-form">
              <h2 className="text-xl md:text-2xl font-bold text-charcoal mb-6">
                {contact.formTitle}
              </h2>
              <Suspense fallback={<p className="text-charcoal">Loading form...</p>}>
                <ContactForm />
              </Suspense>
            </div>
          </div>
        </div>
      </section>
      {/* 3. How can we help */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-green text-center mb-12">
            {contact.helpTitle}
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {contact.helpCards.map((card, index) => {
              const icons = [Users, Scissors, Handshake];
              const btnClasses = [
                "bg-gira-accent text-white",
                "bg-abigail-accent text-white",
                "bg-impano-accent text-white",
              ];
              const Icon = icons[index] || Users;
              const btnClass = btnClasses[index] || "bg-brand-green text-white";
              return (
                <div
                  key={index}
                  className="bg-white rounded-3xl shadow-sm p-6 flex flex-col h-full"
                >
                  <div className="w-12 h-12 rounded-full bg-light-green flex items-center justify-center text-brand-green mb-6">
                    <Icon className="w-6 h-6" aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-bold text-charcoal mb-3">
                    {card.title}
                  </h3>
                  <p className="text-charcoal leading-relaxed mb-6 flex-1">
                    {card.text}
                  </p>
                  <Link
                    href={card.href}
                    className={`w-fit ${btnClass} px-4 py-2 rounded-full text-sm font-semibold hover:opacity-90 transition-colors`}
                  >
                    {card.button}
                  </Link>
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
            Be part of the change.
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="green"
              href="#contact-form"
              className="w-full sm:w-auto"
            >
              Get involved
            </Button>
            <Button
              variant="outline-dark"
              href="/programs"
              className="w-full sm:w-auto"
            >
              Explore our programs
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}