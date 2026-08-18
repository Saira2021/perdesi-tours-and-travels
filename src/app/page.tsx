import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { JsonLd } from "@/components/JsonLd";
import { OfficeMap } from "@/components/OfficeMap";
import { GoogleReviews } from "@/components/GoogleReviews";
import { DeluxePackages } from "@/components/DeluxePackages";
import founder from "@/assets/founder.png";
import heroImage from "@/assets/hero-kalam.png";
import { tours } from "@/data/tours";
import { TourCard } from "@/components/TourCard";
import { TOURS_INDEX_PATH } from "@/lib/site";
import {
  EMAIL,
  SITE_NAME,
  TITLE_BRAND,
  WHATSAPP_URL,
  absoluteUrl,
  HOME_FAQS,
  breadcrumbJsonLd,
  faqJsonLd,
  pageMetadata,
  travelAgencyJsonLd,
  websiteJsonLd,
} from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: `${TITLE_BRAND} | Northern Pakistan Tours`,
  description:
    "Book Kalam, Hunza, Skardu and Naran tours. Woman-led trips by Maryam Arif from Lahore and Islamabad.",
  path: "/",
  image: heroImage,
  imageAlt: "Collage of Pakistan's northern mountains, valleys and landmarks with Perdesi Tours",
  absoluteTitle: true,
});

const categories = [
  "Women-only",
  "Family Trips",
  "Honeymoon",
  "Corporate Retreats",
  "Solo Travel",
  "Custom Itineraries",
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <JsonLd
        data={[
          websiteJsonLd(),
          travelAgencyJsonLd(),
          breadcrumbJsonLd([{ name: "Home", path: "/" }]),
          {
            "@type": "ItemList",
            name: `${SITE_NAME} packages`,
            itemListElement: tours.slice(0, 3).map((t, i) => ({
              "@type": "ListItem",
              position: i + 1,
              name: t.name,
              item: absoluteUrl(`/tours/${t.slug}`),
            })),
          },
          faqJsonLd(HOME_FAQS),
        ]}
      />
      <SiteNav />
      <main>

        <header className="relative px-6 lg:px-8 pt-10 pb-24 max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <span className="text-accent font-semibold tracking-[0.22em] uppercase text-[11px] mb-5 block">
                Female-Led Expeditionary Travel
              </span>
              <h1 className="text-5xl lg:text-7xl font-display leading-[1.05]">
                Wander Pakistan&apos;s <br />
                <span className="italic font-light">Northern Peaks</span>
              </h1>
              <p className="text-lg text-foreground/70 mt-8 mb-10 max-w-md leading-relaxed">
                Curated, safe and soulful journeys through Kalam, Hunza, Skardu and beyond designed
                with a woman&apos;s eye for hospitality, detail and trust.
              </p>
              <div className="flex items-center flex-wrap gap-x-6 gap-y-4">
                <Link
                  href={TOURS_INDEX_PATH}
                  className="border-b-2 border-sage pb-1 font-bold text-sage hover:text-accent hover:border-accent transition-all text-sm uppercase tracking-widest"
                >
                  Explore Tours
                </Link>
                <span className="h-px w-12 bg-foreground/20" />
                <span className="text-sm italic text-foreground/70">
                  Featured: The Kalam Autumn Retreat
                </span>
              </div>
            </div>
            <div className="relative">
              <Image
                src={heroImage}
                alt="Perdesi Tours collage of Pakistan's northern areas, snow peaks, Kaghan river, cable car, Ayubia National Park and Faisal Mosque"
                className="w-full aspect-[4/5] object-cover rounded-2xl shadow-xl"
                sizes="(min-width: 1024px) 50vw, 100vw"
                priority
              />
              <div className="absolute -bottom-8 -left-4 md:-left-10 bg-card p-6 md:p-8 rounded-xl shadow-2xl max-w-xs border border-border/50">
                <p className="text-base md:text-lg italic font-display text-sage leading-snug mb-3">
                  &quot;I want to show you the side of Pakistan that feels like home no matter how far
                  you travel.&quot;
                </p>
                <p className="text-[10px] uppercase tracking-[0.18em] font-bold text-foreground/70">
                   Maryam Arif, Founder & CEO
                </p>
              </div>
            </div>
          </div>
        </header>

        <section id="categories" className="border-y border-border/60 py-10 px-6 lg:px-8 bg-secondary/40">
          <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-3">
            <span className="text-[10px] uppercase tracking-[0.22em] font-bold text-foreground/50 mr-2">
              Trip styles —
            </span>
            {categories.map((c) => (
              <span
                key={c}
                className="px-5 py-2 rounded-full bg-card border border-border text-xs font-semibold uppercase tracking-widest"
              >
                {c}
              </span>
            ))}
          </div>
        </section>

        <section id="tours" className="py-24 px-6 lg:px-8 bg-sage/[0.04]">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap items-end justify-between gap-6 mb-16">
              <div>
                <span className="text-accent font-semibold tracking-[0.22em] uppercase text-[11px] mb-3 block">
                  Signature Journeys
                </span>
                <h2 className="text-4xl md:text-5xl font-display max-w-xl">
                  Meticulously planned itineraries for every kind of traveler.
                </h2>
              </div>
              <Link
                href={TOURS_INDEX_PATH}
                className="text-xs font-bold uppercase tracking-[0.18em] border-b-2 border-foreground pb-1 hover:text-accent hover:border-accent transition-all"
              >
                View all destinations
              </Link>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
              {tours.slice(0, 3).map((t) => (
                <TourCard key={t.slug} tour={t} />
              ))}
            </div>

            <div className="mt-16 flex justify-center">
              <Link
                href={TOURS_INDEX_PATH}
                className="inline-flex items-center justify-center bg-sage text-cream px-8 py-4 rounded-full text-xs font-bold uppercase tracking-[0.22em] hover:bg-ink transition-colors"
              >
                Explore all tour packages
              </Link>
            </div>
          </div>
        </section>

        <DeluxePackages />

        <section id="about" className="py-28 px-6 lg:px-8">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-5">
              <Image
                src={founder}
                alt="Maryam Arif, CEO and founder of Perdesi Tours, at her office desk with Pakistan flag"
                className="w-full aspect-[3/4] object-cover object-top rounded-2xl shadow-xl"
                sizes="(min-width: 1024px) 40vw, 100vw"
              />
            </div>
            <div className="lg:col-span-7">
              <span className="text-accent font-semibold tracking-[0.22em] uppercase text-[11px] mb-5 block">
                The Heart of Perdesi
              </span>
              <h2 className="text-4xl md:text-5xl font-display leading-tight mb-8">
                Led by <span className="italic">Maryam Arif.</span>
              </h2>
              <div className="space-y-5 text-foreground/75 leading-relaxed max-w-prose">
                <p>
                  Founded and led by CEO <strong>Maryam Arif</strong>, Perdesi Tours was born from a
                  desire to make the majestic northern ranges of Pakistan accessible to everyone —
                  with a woman&apos;s touch for organization, safety and warm hospitality.
                </p>
                <p>
                  We don&apos;t just provide tours. We share the Pakistan we grew up in: hot chai at jeep
                  stops, hand-loomed shawls on cold Kalam mornings, and the quiet majesty of the
                  Karakoram. Every itinerary is curated as if for our own family.
                </p>
              </div>
              <div className="mt-10 flex items-center gap-12">
                <div>
                  <div className="text-3xl font-display text-sage">450+</div>
                  <div className="text-[10px] uppercase tracking-[0.2em] font-bold text-foreground/50 mt-1">
                    Guests Hosted
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-display text-sage">12</div>
                  <div className="text-[10px] uppercase tracking-[0.2em] font-bold text-foreground/50 mt-1">
                    Valleys Covered
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-display text-sage">100%</div>
                  <div className="text-[10px] uppercase tracking-[0.2em] font-bold text-foreground/50 mt-1">
                    Local Guides
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <GoogleReviews />

        <section id="contact" className="py-28 px-6 lg:px-8">
          <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div>
              <span className="text-accent font-semibold tracking-[0.22em] uppercase text-[11px] mb-5 block">
                Plan Your Journey
              </span>
              <h2 className="text-4xl md:text-5xl font-display leading-tight mb-6">
                Tell us where your heart wants to go.
              </h2>
              <p className="text-foreground/70 leading-relaxed mb-8">
                Message Maryam on WhatsApp or email for a custom itinerary, dates and transparent
                pricing usually within 24 hours.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-sage text-cream px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-[0.16em] hover:bg-ink transition-colors"
                >
                  WhatsApp +92 336 4572568
                </a>
                <a
                  href={`mailto:${EMAIL}`}
                  className="inline-flex items-center justify-center border border-border px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-[0.16em] hover:border-accent hover:text-accent transition-colors"
                >
                  Email us
                </a>
              </div>
            </div>
            <OfficeMap compact />
          </div>
        </section>

        <section id="faq" className="bg-sage/[0.04] border-t border-border/60 py-24 px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <span className="text-accent font-semibold tracking-[0.22em] uppercase text-[11px] mb-3 block">
              Good to know
            </span>
            <h2 className="text-4xl md:text-5xl font-display mb-12">Frequently asked questions</h2>
            <dl className="space-y-8">
              {HOME_FAQS.map((faq) => (
                <div key={faq.question}>
                  <dt className="text-xl font-display mb-2">{faq.question}</dt>
                  <dd className="text-foreground/70 leading-relaxed">{faq.answer}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
