"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { nav, site } from "../lib/content";
import Button from "./Button";
import SocialIcons from "./SocialIcons";

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  // Determine if "Programs" should be highlighted (program pages match /programs/<slug>)
  const isProgramsPage = pathname === "/programs" || pathname.startsWith("/programs/");

  return (
    <>
      {/* Skip to content link for keyboard users */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-white focus:text-charcoal focus:px-4 focus:py-2 focus:rounded focus:border-brand-green focus:border-2"
      >
        Skip to content
      </a>

      <header
        className="sticky top-0 z-40 bg-white border-b border-charcoal/[0.1] shadow-sm"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Brand: logo + name */}
            <Link
              href="/"
              className="flex items-center gap-3"
              aria-label="Hinduka For Life homepage"
            >
              <Image
                src="/logos/hfl-icon.png"
                alt="Hinduka For Life icon"
                width={48}
                height={48}
                sizes="48px"
                className="rounded-full"
                style={{ width: "auto", height: "auto" }}
              />
              <span className="font-semibold text-brand-green text-lg tracking-tight">
                Hinduka For Life
              </span>
            </Link>

            {/* Desktop menu + button */}
            <div className="hidden md:flex items-center gap-6">
              <nav className="flex gap-6 text-sm font-medium text-charcoal">
                {nav.items.map((item) => {
                  const isActive =
                    item.label === "Programs"
                      ? isProgramsPage
                      : pathname === item.href;
                  return (
                    <Link
                      key={item.label}
                      href={item.href}
                      className={`${
                        isActive
                          ? "text-brand-green underline"
                          : "text-charcoal hover:text-brand-green"
                      } transition-colors`}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </nav>
              <Button variant="gold" href={nav.button.href}>
                {nav.button.label}
              </Button>
            </div>

            {/* Mobile hamburger */}
            <button
              className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-charcoal hover:bg-charcoal/[0.05] focus-visible:ring-2 focus-visible:ring-brand-green"
              aria-expanded={isOpen}
              aria-label="Toggle navigation menu"
              onClick={() => setIsOpen((prev) => !prev)}
            >
              {isOpen ? (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile dropdown menu */}
        {isOpen && (
          <div className="md:hidden bg-white border-b border-charcoal/[0.05]">
            <div className="px-4 pt-2 pb-6 space-y-2">
              <nav className="flex flex-col gap-1">
                {nav.items.map((item) => {
                  const isActive =
                    item.label === "Programs"
                      ? isProgramsPage
                      : pathname === item.href;
                  return (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`block px-4 py-2 text-sm font-medium rounded-lg ${
                        isActive
                          ? "bg-light-green text-brand-green"
                          : "text-charcoal hover:bg-charcoal/[0.05] hover:text-brand-green"
                      }`}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </nav>
              <div className="pt-4">
                <Button
                  variant="gold"
                  href={nav.button.href}
                  className="w-full"
                  onClick={() => setIsOpen(false)}
                >
                  {nav.button.label}
                </Button>
              </div>
              <div className="pt-4 border-t border-charcoal/[0.05]">
                <SocialIcons />
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}