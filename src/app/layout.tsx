import type { Metadata, Viewport } from "next";
import "@fontsource-variable/bricolage-grotesque";
import "@fontsource-variable/figtree";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { site } from "@/data/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Fisiohaus | Centro de Saúde em Estância Velha",
    template: "%s | Fisiohaus",
  },
  description:
    "Há mais de 27 anos cuidando da saúde de Estância Velha e região: fisioterapia, Pilates, ortopedia, nutrição, psicologia, pediatria e mais.",
  openGraph: {
    siteName: site.name,
    locale: "pt_BR",
    type: "website",
    images: [{ url: site.logo }],
  },
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = { themeColor: "#0b3a21" };

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalClinic",
  name: site.name,
  url: site.url,
  logo: `${site.url}${site.logo}`,
  telephone: "+55 51 3561 0933",
  email: site.email,
  foundingDate: String(site.since),
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    addressLocality: site.address.city,
    addressRegion: site.address.state,
    postalCode: site.address.zip,
    addressCountry: "BR",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "12:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "13:00",
      closes: "19:00",
    },
  ],
  sameAs: site.social.map((s) => s.href),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
