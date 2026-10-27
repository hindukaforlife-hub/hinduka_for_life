import Image from "next/image";
import Link from "next/link";
import SocialIcons from "./SocialIcons";
import { MapPin, Phone, Mail } from "lucide-react";
import { footer, site } from "../lib/content";

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Four columns of links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          {/* Column 1: Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/logos/hfl-icon.png"
                alt="Hinduka For Life icon"
                width={40}
                height={40}
                sizes="40px"
                className="rounded-full ring-2 ring-white"
                style={{ width: "auto", height: "auto" }}
              />
              <div>
                <span className="font-semibold text-white text-lg tracking-tight block">
                  Hinduka For Life
                </span>
                <span className="text-white/80 text-sm">{site.tagline}</span>
              </div>
            </div>

            {/* Social icons row */}
            <div className="flex flex-wrap gap-3">
              <SocialIcons
                className="w-9 h-9 bg-white/10 text-white transition-colors hover:bg-brand-gold hover:text-charcoal"
                size={18}
              />
            </div>
          </div>

          {/* Column 2: Quick links */}
          <div>
            <h3 className="text-brand-gold font-semibold text-base tracking-tight mb-6">
              Quick links
            </h3>
            <ul className="space-y-3">
              {footer.columns.quickLinks.links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/80 hover:text-white hover:underline transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Our programs */}
          <div>
            <h3 className="text-brand-gold font-semibold text-base tracking-tight mb-6">
              Our programs
            </h3>
            <ul className="space-y-3">
              {footer.columns.ourPrograms.links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/80 hover:text-white hover:underline transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact us */}
          <div>
            <h3 className="text-brand-gold font-semibold text-base tracking-tight mb-6">
              Contact us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 break-words">
                <MapPin className="shrink-0 w-5 h-5 text-brand-gold mt-0.5" aria-hidden="true" />
                <span className="text-white/80 text-sm leading-relaxed">
                  {site.address}
                </span>
              </li>
              <li className="flex items-start gap-3 break-words">
                <Phone className="shrink-0 w-5 h-5 text-brand-gold mt-0.5" aria-hidden="true" />
                {site.phoneLink ? (
                  <a
                    href={`tel:${site.phoneLink}`}
                    className="text-sm text-white/80 hover:text-white transition-colors leading-relaxed"
                  >
                    Phone / WhatsApp: {site.phone}
                  </a>
                ) : (
                  <span className="text-sm text-white/80 leading-relaxed">
                    Phone / WhatsApp: {site.phone}
                  </span>
                )}
              </li>
              <li className="flex items-start gap-3 break-words">
                <Mail className="shrink-0 w-5 h-5 text-brand-gold mt-0.5" aria-hidden="true" />
                {site.emailLink ? (
                  <a
                    href={`mailto:${site.emailLink}`}
                    className="text-sm text-white/80 hover:text-white transition-colors leading-relaxed break-words"
                  >
                    Email: {site.email}
                  </a>
                ) : (
                  <span className="text-sm text-white/80 leading-relaxed break-words">
                    Email: {site.email}
                  </span>
                )}
              </li>
            </ul>
          </div>
        </div>

        {/* Thin divider */}
        <div className="border-t border-white/10 mt-10 pt-8" />

        {/* Bottom bar: copyright + legal links */}
        <div className="flex flex-col md:flex-row justify-between gap-4">
          <p className="text-xs text-white/60">{footer.copyright}</p>
          <div className="flex items-center gap-4 text-xs text-white/60">
            <Link
              href={footer.privacyHref}
              className="hover:text-white transition-colors"
            >
              {footer.privacyLabel}
            </Link>
            <Link
              href={footer.termsHref}
              className="hover:text-white transition-colors"
            >
              {footer.termsLabel}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}