import type { ReactNode } from "react";
import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import {
  DEFAULT_DESCRIPTION,
  KEYWORDS,
  SITE_NAME,
  SITE_ORIGIN,
  TITLE_BRAND,
  defaultOgImage,
} from "@/lib/seo";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-jakarta",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#5a6f5e",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_ORIGIN),
  title: {
    default: `${TITLE_BRAND} | Northern Pakistan Tours`,
    template: `%s | ${TITLE_BRAND}`,
  },
  description: DEFAULT_DESCRIPTION,
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME }, { name: "Maryam Arif" }],
  creator: "Maryam Arif",
  publisher: SITE_NAME,
  category: "travel",
  keywords: KEYWORDS,
  formatDetection: { telephone: true, email: true, address: true },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  openGraph: {
    type: "website",
    locale: "en_PK",
    siteName: SITE_NAME,
    title: `${TITLE_BRAND} | Northern Pakistan Tours`,
    description: DEFAULT_DESCRIPTION,
    images: [defaultOgImage],
  },
  twitter: {
    card: "summary_large_image",
    title: `${TITLE_BRAND} | Northern Pakistan Tours`,
    description: DEFAULT_DESCRIPTION,
    images: [defaultOgImage.url],
  },
  verification: {
    google: "4HmOq-wR9LlKdhXLH2K0qYoyxADYRD9AQx_fL6Kk3m8",
    other: {
      "ahrefs-site-verification": "eb2b79aa727c0347097a788e788b55a208baf01fc26dc66a4bd11f35fa7e9e99",
    },
  },
  icons: {
    icon: [{ url: "/favicon.png", type: "image/png" }],
    apple: [{ url: "/favicon.png", type: "image/png" }],
  },
  other: {
    "geo.region": "PK-PB",
    "geo.placename": "Sheikhupura",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en-PK" className={`${playfair.variable} ${jakarta.variable}`} suppressHydrationWarning>
      <body className="font-sans antialiased" suppressHydrationWarning>
        <Script
          src="https://analytics.ahrefs.com/analytics.js"
          data-key="VloE+CIB8rqISH+cgiPSvw"
          strategy="afterInteractive"
        />
        <GoogleAnalytics />
        {children}
        <WhatsAppFloat />
      </body>
    </html>
  );
}
