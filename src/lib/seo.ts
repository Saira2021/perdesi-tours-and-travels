import type { Metadata } from "next";
import type { StaticImageData } from "next/image";
import heroImage from "@/assets/hero-kalam.png";
import { SITE_URL, assetUrl, siteUrl } from "@/lib/site";
import type { Tour } from "@/data/tours";

export const SITE_NAME = "Perdesi Tours";
export const PHONE_DISPLAY = "+92 336 4572568";
export const PHONE_E164 = "+923364572568";
export const WHATSAPP_NUMBER = "923364572568";
export const EMAIL = "travelwithperdesi@gmail.com";

export function whatsappUrl(context?: string) {
  const detail = context
    ? ` I'm interested in ${context}.`
    : " I'm interested in booking a tour.";
  const message = `Hi Maryam, I visited perdesitours.com and${detail} Please share details.`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const WHATSAPP_URL = whatsappUrl();
export const MAPS_URL = "https://share.google/d8slExiAI51WJCtTW";
export const DEFAULT_DESCRIPTION =
  "Woman-led tours of Pakistan's Northern Areas — Kalam, Hunza, Skardu, Naran and Fairy Meadows. Safe family, honeymoon and solo-women trips by CEO Maryam Arif.";

export const ADDRESS = {
  streetAddress: "Sheikhupura Stadium, Khalid Road, Gol Masjid, near Dar-ul-Shifa Hospital",
  addressLocality: "Sheikhupura",
  addressRegion: "Punjab",
  addressCountry: "PK",
} as const;

export const KEYWORDS = [
  "Perdesi Tours",
  "Pakistan northern areas tours",
  "Kalam tour package",
  "Hunza tour from Lahore",
  "Skardu tour package",
  "Naran Kaghan tour",
  "Fairy Meadows trek",
  "Swat valley tour",
  "women only tours Pakistan",
  "family tours northern Pakistan",
  "Maryam Arif",
  "Sheikhupura travel agency",
];

export function absoluteUrl(path = "/"): string {
  if (path.startsWith("http")) return path;
  return siteUrl(path);
}

export function ogImage(image: StaticImageData | string, alt: string) {
  const src = typeof image === "string" ? image : image.src;
  const width = typeof image === "string" ? 1200 : image.width;
  const height = typeof image === "string" ? 630 : image.height;
  return {
    url: assetUrl(src),
    width,
    height,
    alt,
  };
}

export const defaultOgImage = ogImage(
  heroImage,
  "Northern Pakistan landscapes featured by Perdesi Tours",
);

export function pageMetadata({
  title,
  description,
  path,
  image = heroImage,
  imageAlt = defaultOgImage.alt,
  keywords,
  type = "website",
  noIndex = false,
  absoluteTitle = false,
}: {
  title: string;
  description: string;
  path: string;
  image?: StaticImageData | string;
  imageAlt?: string;
  keywords?: string[];
  type?: "website" | "article";
  noIndex?: boolean;
  absoluteTitle?: boolean;
}): Metadata {
  const url = absoluteUrl(path);
  const images = [ogImage(image, imageAlt)];
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    keywords: keywords ?? KEYWORDS,
    alternates: { canonical: url },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true, googleBot: { index: true, follow: true } },
    openGraph: {
      type,
      locale: "en_PK",
      siteName: SITE_NAME,
      title,
      description,
      url,
      images,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [images[0].url],
    },
  };
}

export function travelAgencyJsonLd() {
  return {
    "@type": "TravelAgency",
    "@id": `${absoluteUrl("/")}#agency`,
    name: SITE_NAME,
    legalName: SITE_NAME,
    url: absoluteUrl("/"),
    image: assetUrl(heroImage.src),
    logo: assetUrl(heroImage.src),
    description: DEFAULT_DESCRIPTION,
    telephone: PHONE_E164,
    email: EMAIL,
    foundingDate: "2019",
    priceRange: "$$",
    currenciesAccepted: "PKR",
    paymentAccepted: "Cash, Bank Transfer, JazzCash, Easypaisa, SadaPay",
    areaServed: [
      { "@type": "Country", name: "Pakistan" },
      { "@type": "AdministrativeArea", name: "Gilgit-Baltistan" },
      { "@type": "AdministrativeArea", name: "Khyber Pakhtunkhwa" },
    ],
    knowsAbout: [
      "Northern Pakistan tours",
      "Hunza",
      "Skardu",
      "Kalam",
      "Swat",
      "Naran Kaghan",
      "Fairy Meadows",
    ],
    founder: {
      "@type": "Person",
      "@id": `${absoluteUrl("/about")}#maryam`,
      name: "Maryam Arif",
      jobTitle: "Founder & CEO",
    },
    address: {
      "@type": "PostalAddress",
      ...ADDRESS,
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: PHONE_E164,
      contactType: "customer service",
      availableLanguage: ["English", "Urdu"],
      areaServed: "PK",
    },
    sameAs: [
      "https://www.facebook.com/p/Perdesi-Tours-61573871982489/",
      "https://www.instagram.com/perdesi_tours",
      "https://www.tiktok.com/@perdesi_tours",
    ],
    hasMap: MAPS_URL,
  };
}

export function websiteJsonLd() {
  return {
    "@type": "WebSite",
    "@id": `${absoluteUrl("/")}#website`,
    url: absoluteUrl("/"),
    name: SITE_NAME,
    description: DEFAULT_DESCRIPTION,
    inLanguage: "en-PK",
    publisher: { "@id": `${absoluteUrl("/")}#agency` },
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function faqJsonLd(faqs: { question: string; answer: string }[]) {
  return {
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
}

export function tourJsonLd(tour: Tour, slug: string) {
  const url = absoluteUrl(`/tours/${slug}`);
  return {
    "@type": "TouristTrip",
    name: `${tour.name} Tour Package`,
    description: tour.summary,
    url,
    image: assetUrl(tour.img.src),
    touristType: tour.audience.split(" • "),
    itinerary: tour.itinerary?.map((day, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: `${day.day}: ${day.title}`,
      description: day.text,
    })),
    provider: { "@id": `${absoluteUrl("/")}#agency` },
    offers: {
      "@type": "Offer",
      url,
      availability: "https://schema.org/InStock",
      priceCurrency: "PKR",
      description: `${tour.days}. Transport, hotel, breakfast and dinner, bonfire and a professional guide included.`,
    },
  };
}

export const HOME_FAQS = [
  {
    question: "How do I book a tour with Perdesi Tours?",
    answer:
      "Share your name, WhatsApp number, CNIC and group size. Choose a package, pay a 50% advance, and send the payment screenshot to confirm your seat. Maryam typically replies within 24 hours.",
  },
  {
    question: "Do you offer women-only and family tours in northern Pakistan?",
    answer:
      "Yes. Perdesi Tours is a woman-led agency offering women-only groups, family trips, honeymoons, corporate retreats and custom itineraries across Kalam, Hunza, Skardu, Naran and Fairy Meadows.",
  },
  {
    question: "What is included in Perdesi Tours packages?",
    answer:
      "Standard packages include transport with tolls and taxes, hotel stay, breakfast and dinner, a bonfire and a professional tour guide. Lunch, entry fees and personal expenses are not included.",
  },
  {
    question: "Where is Perdesi Tours based?",
    answer:
      "Our office is at Sheikhupura Stadium, Khalid Road, Gol Masjid, near Dar-ul-Shifa Hospital, Sheikhupura, Punjab. We depart for northern Pakistan from Lahore and Islamabad.",
  },
];

export const SITE_ORIGIN = SITE_URL;
