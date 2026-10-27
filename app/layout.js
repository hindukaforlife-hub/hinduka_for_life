import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { site, seo } from "@/lib/content";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

const siteUrl = site.url ? site.url.replace(/\/$/, "") : undefined;

export const metadata = {
  ...(siteUrl ? { metadataBase: new URL(siteUrl) } : {}),
  title: {
    default: seo.defaultTitle,
    template: seo.defaultTitleTemplate,
  },
  description: seo.defaultDescription,
  applicationName: site.name,
  openGraph: {
    type: "website",
    siteName: site.name,
    locale: "en_RW",
    images: [{ url: "/logos/hfl-icon.png" }],
  },
  twitter: {
    card: "summary",
  },
  robots: {
    index: true,
    follow: true,
  },
};

// Organization structured data used on every page.
// Logo/image use the absolute URL only when site.url is set.
const logoUrl = siteUrl ? `${siteUrl}/logos/hfl-icon.png` : "/logos/hfl-icon.png";
const socialUrls = Object.values(site.social).filter((url) => Boolean(url));

const organization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Hinduka For Life Ltd",
  alternateName: "Hinduka For Life",
  description: seo.pages.home.description,
  logo: logoUrl,
  image: logoUrl,
  email: site.emailLink,
  telephone: site.phoneLink,
  address: {
    "@type": "PostalAddress",
    addressCountry: "RW",
  },
  areaServed: "Rwanda",
  ...(socialUrls.length > 0 ? { sameAs: socialUrls } : {}),
  ...(siteUrl ? { url: siteUrl } : {}),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.variable} h-full antialiased`}>
      <body className="min-h-screen flex flex-col font-sans bg-light-green text-charcoal">
        <JsonLd data={organization} />
        <Header />
        <main id="main-content" className="flex-1 w-full">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
