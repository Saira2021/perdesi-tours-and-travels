import type { ReactNode } from "react";
import type { Metadata, Viewport } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { DEFAULT_DESCRIPTION, KEYWORDS, SITE_NAME, SITE_ORIGIN, defaultOgImage } from "@/lib/seo";
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
    default: `${SITE_NAME} | Pakistan Northern Areas Tours`,
    template: `%s | ${SITE_NAME}`,
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
    title: `${SITE_NAME} | Pakistan Northern Areas Tours`,
    description: DEFAULT_DESCRIPTION,
    images: [defaultOgImage],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} | Pakistan Northern Areas Tours`,
    description: DEFAULT_DESCRIPTION,
    images: [defaultOgImage.url],
  },
  verification: {
    google: "4HmOq-wR9LlKdhXLH2K0qYoyxADYRD9AQx_fL6Kk3m8",
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
        <GoogleAnalytics />
        {children}
        <WhatsAppFloat />
      </body>
    </html>
  );
}
