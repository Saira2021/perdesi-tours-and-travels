import type { Metadata } from "next";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { JsonLd } from "@/components/JsonLd";
import { TourCard } from "@/components/TourCard";
import { tours } from "@/data/tours";
import { TOURS_INDEX_PATH } from "@/lib/site";
import {
  absoluteUrl,
  breadcrumbJsonLd,
  pageMetadata,
  travelAgencyJsonLd,
} from "@/lib/seo";
import heroImage from "@/assets/hero-kalam.png";

const title = "Book Northern Pakistan Tours — Hunza, Skardu, Kalam & More";
const description =
  "Book northern Pakistan tour packages with Perdesi Tours. Hunza, Skardu, Kalam, Naran, Fairy Meadows, Kashmir and Murree trips from Lahore and Islamabad. Woman-led, family and solo-women groups.";

export const metadata: Metadata = pageMetadata({
  title,
  description,
  path: TOURS_INDEX_PATH,
  image: heroImage,
  imageAlt: "Book northern Pakistan tour packages with Perdesi Tours",
  keywords: [
    "book northern Pakistan tours",
    "Pakistan tour packages",
    "northern areas tour packages",
    "Hunza tour from Lahore",
    "Skardu tour package",
    "Kalam tour",
    "Naran Kaghan tour",
    "Fairy Meadows trek",
    "Perdesi Tours destinations",
  ],
});

export default function ToursIndexPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <JsonLd
        data={[
          travelAgencyJsonLd(),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Destinations", path: TOURS_INDEX_PATH },
          ]),
          {
            "@type": "CollectionPage",
            "@id": `${absoluteUrl(TOURS_INDEX_PATH)}#page`,
            url: absoluteUrl(TOURS_INDEX_PATH),
            name: title,
            description,
            isPartOf: { "@id": `${absoluteUrl("/")}#website` },
            mainEntity: {
              "@type": "ItemList",
              name: "Northern Pakistan tour packages",
              numberOfItems: tours.length,
              itemListElement: tours.map((t, i) => ({
                "@type": "ListItem",
                position: i + 1,
                name: t.name,
                url: absoluteUrl(`/tours/${t.slug}`),
              })),
            },
          },
        ]}
      />
      <SiteNav active="Destinations" />
      <main>
        <header className="max-w-7xl mx-auto px-6 lg:px-8 pt-14 pb-10">
          <span className="text-accent font-semibold tracking-[0.22em] uppercase text-[11px] mb-3 block">
            Destinations
          </span>
          <h1 className="text-4xl md:text-6xl font-display leading-tight max-w-3xl">
            Book northern Pakistan tours
          </h1>
          <p className="mt-6 max-w-2xl text-foreground/70 leading-relaxed">
            Curated tour packages across Pakistan&apos;s northern valleys — from weekend escapes to
            Hunza, Skardu and Fairy Meadows expeditions. Choose a package to see the full itinerary.
          </p>
        </header>

        <section className="px-6 lg:px-8 pb-24">
          <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
            {tours.map((tour) => (
              <TourCard key={tour.slug} tour={tour} />
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
