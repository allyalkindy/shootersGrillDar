import type { Metadata } from "next";
import { Fraunces, Inter, Oswald } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { siteConfig } from "@/lib/site-config";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  axes: ["opsz", "SOFT", "WONK"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.shootersgrill.co.tz"),
  title: {
    default: `${siteConfig.name} | Steakhouse & Bar, Dar es Salaam`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.descriptor,
  keywords: [
    "Shooters Grill",
    "steakhouse Dar es Salaam",
    "rooftop restaurant Dar es Salaam",
    "Oyster Bay restaurant",
    "best steak Tanzania",
    "Haile Selassie Road restaurant",
  ],
  openGraph: {
    title: `${siteConfig.name} | Steakhouse & Bar`,
    description: siteConfig.descriptor,
    url: "https://www.shootersgrill.co.tz",
    siteName: siteConfig.name,
    locale: "en_US",
    type: "website",
  },
};

const restaurantJsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: siteConfig.name,
  servesCuisine: ["Steakhouse", "Grill", "Bar"],
  priceRange: "$$$",
  telephone: siteConfig.phone.tel,
  image: "https://www.shootersgrill.co.tz/images/gallery/036-DX_yb2kNrL3.jpg",
  url: "https://www.shootersgrill.co.tz",
  address: {
    "@type": "PostalAddress",
    streetAddress: `${siteConfig.address.line1}, ${siteConfig.address.line2}`,
    addressLocality: siteConfig.city,
    addressRegion: siteConfig.neighborhood,
    addressCountry: "TZ",
  },
  sameAs: [siteConfig.instagram.url],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"],
      opens: "12:00",
      closes: "23:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Friday", "Saturday"],
      opens: "12:00",
      closes: "01:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Sunday",
      opens: "12:00",
      closes: "22:30",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${fraunces.variable} ${inter.variable} ${oswald.variable} bg-ink text-cream antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantJsonLd) }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
