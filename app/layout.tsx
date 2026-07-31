import type { Metadata } from "next";
import Script from "next/script";
import {
  Bricolage_Grotesque,
  Instrument_Serif,
  JetBrains_Mono,
} from "next/font/google";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://tenzorlabs.cl"),
  title: "Tenzor Labs | Software que hace crecer tu negocio",
  description:
    "Sitios que convierten, software a medida y automatización para PyMEs y empresas chilenas que necesitan más clientes, no solo una web más bonita.",
  openGraph: {
    title: "Tenzor Labs | Software que hace crecer tu negocio",
    description:
      "Sitios que convierten, software a medida y automatización para PyMEs y empresas chilenas que necesitan más clientes, no solo una web más bonita.",
    url: "https://tenzorlabs.cl",
    siteName: "Tenzor Labs",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Tenzor Labs | Software que hace crecer tu negocio",
      },
    ],
    locale: "es_CL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tenzor Labs | Software que hace crecer tu negocio",
    description:
      "Sitios que convierten, software a medida y automatización para PyMEs y empresas chilenas que necesitan más clientes, no solo una web más bonita.",
    images: ["/og-image.svg"],
  },
};

const umamiSrc = process.env.NEXT_PUBLIC_UMAMI_SRC;
const umamiWebsiteId = process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${bricolage.variable} ${instrumentSerif.variable} ${jetbrainsMono.variable} scroll-smooth`}
    >
      <body className="bg-shell text-ink antialiased">
        {children}
        {umamiSrc && umamiWebsiteId && (
          <Script
            src={umamiSrc}
            data-website-id={umamiWebsiteId}
            strategy="afterInteractive"
          />
        )}
      </body>
    </html>
  );
}
