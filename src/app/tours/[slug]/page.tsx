import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { JsonLd } from "@/components/JsonLd";
import {
  breadcrumbJsonLd,
  pageMetadata,
  tourJsonLd,
  tourMetaDescription,
  travelAgencyJsonLd,
  whatsappUrl,
} from "@/lib/seo";
import { TOURS_INDEX_PATH } from "@/lib/site";
import { TourCard } from "@/components/TourCard";
import {
  getTour,
  getRelatedTours,
  tours,
  includedServices,
  excludedServices,
  bookingSteps,
  termsAndConditions,
} from "@/data/tours";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return tours.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const t = getTour(slug);
  if (!t) {
    return pageMetadata({
      title: "Tour not found",
      description: "This Perdesi Tours package is no longer listed.",
      path: `/tours/${slug}`,
      noIndex: true,
    });
  }
  return pageMetadata({
    title: t.name,
    description: tourMetaDescription(t),
    path: `/tours/${slug}`,
    image: t.img,
    imageAlt: `${t.name} in ${t.region} — Perdesi Tours Pakistan`,
    keywords: [t.name, t.region, "Pakistan tour package", "Perdesi Tours", t.audience],
  });
}

export default async function TourPage({ params }: PageProps) {
  const { slug } = await params;
  const tour = getTour(slug);
  if (!tour) notFound();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <JsonLd
        data={[
          travelAgencyJsonLd(),
          tourJsonLd(tour, slug),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Destinations", path: TOURS_INDEX_PATH },
            { name: tour.name, path: `/tours/${slug}` },
          ]),
        ]}
      />
      <SiteNav active="Destinations" />
      <main>

      <header className="max-w-7xl mx-auto px-6 lg:px-8 pt-10 pb-16">
        <nav aria-label="Breadcrumb" className="text-[11px] uppercase tracking-[0.2em] text-foreground/50 mb-6">
          <Link href="/" className="hover:text-accent">
            Home
          </Link>
          <span className="mx-2">/</span>
          <Link href={TOURS_INDEX_PATH} className="hover:text-accent">
            Destinations
          </Link>
          <span className="mx-2">/</span>
          <span className="text-foreground/80">{tour.name}</span>
        </nav>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-accent font-semibold tracking-[0.22em] uppercase text-[11px] mb-4 block">
              {tour.region}
            </span>
            <h1 className="text-4xl lg:text-6xl font-display leading-[1.08] mb-6">{tour.name}</h1>
            <p className="text-lg text-foreground/70 leading-relaxed max-w-lg mb-8">{tour.summary}</p>
            <div className="flex flex-wrap gap-x-10 gap-y-5 mb-10">
              <div>
                <div className="text-[10px] uppercase tracking-[0.2em] font-bold text-foreground/50 mb-1">
                  Duration
                </div>
                <div className="font-display text-xl">{tour.days}</div>
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-[0.2em] font-bold text-foreground/50 mb-1">
                  Best for
                </div>
                <div className="font-display text-xl">{tour.audience}</div>
              </div>
            </div>
            <a
              href={whatsappUrl(tour.name)}
              className="inline-block bg-sage text-cream px-8 py-4 rounded-full text-xs font-bold uppercase tracking-[0.22em] hover:bg-ink transition-colors"
            >
              Reserve Your Seat
            </a>
          </div>
          <Image
            src={tour.img}
            alt={`${tour.name} tour in ${tour.region}, Pakistan — Perdesi Tours package`}
            className="w-full aspect-square object-cover rounded-2xl shadow-xl"
            sizes="(min-width: 1024px) 50vw, 100vw"
            priority
          />
        </div>
      </header>

      <section className="bg-sage/[0.05] border-y border-border/60 py-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-12">
          {tour.highlights && (
            <div>
              <h2 className="text-3xl font-display mb-6">Trip Highlights</h2>
              <ul className="space-y-3 text-foreground/75">
                {tour.highlights.map((h) => (
                  <li key={h} className="flex gap-3">
                    <span className="mt-2 size-1.5 rounded-full bg-accent flex-shrink-0" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          <div>
            <h2 className="text-3xl font-display mb-6">Services Included</h2>
            <ul className="space-y-3 text-foreground/75">
              {includedServices.map((s) => (
                <li key={s} className="flex gap-3">
                  <span className="mt-2 size-1.5 rounded-full bg-sage flex-shrink-0" />
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-3xl font-display mb-6">Not Included</h2>
            <ul className="space-y-3 text-foreground/60">
              {excludedServices.map((s) => (
                <li key={s} className="flex gap-3">
                  <span className="mt-2 size-1.5 rounded-full bg-foreground/25 flex-shrink-0" />
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {tour.itinerary && (
        <section className="py-24 px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <span className="text-accent font-semibold tracking-[0.22em] uppercase text-[11px] mb-3 block">
              Day by Day
            </span>
            <h2 className="text-4xl md:text-5xl font-display mb-14">Your Itinerary</h2>
            <ol className="relative border-l border-border pl-8 space-y-10">
              {tour.itinerary.map((d) => (
                <li key={d.day} className="relative">
                  <span className="absolute -left-[41px] top-1.5 size-4 rounded-full bg-sage border-4 border-background" />
                  <div className="text-[10px] uppercase tracking-[0.22em] font-bold text-accent mb-2">{d.day}</div>
                  <h3 className="text-2xl font-display mb-2">{d.title}</h3>
                  <p className="text-foreground/70 leading-relaxed">{d.text}</p>
                </li>
              ))}
            </ol>
            {tour.note ? (
              <p className="mt-12 rounded-2xl border border-border/60 bg-secondary/40 px-6 py-5 text-sm text-foreground/70 leading-relaxed">
                <span className="font-bold uppercase tracking-[0.16em] text-foreground/50">Note: </span>
                {tour.note}
              </p>
            ) : null}
          </div>
        </section>
      )}

      {getRelatedTours(slug).length > 0 && (
        <section className="py-24 px-6 lg:px-8 bg-sage/[0.04] border-t border-border/60">
          <div className="max-w-7xl mx-auto">
            <span className="text-accent font-semibold tracking-[0.22em] uppercase text-[11px] mb-3 block">
              Keep exploring
            </span>
            <h2 className="text-4xl font-display mb-12">Related tours</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
              {getRelatedTours(slug).map((related) => (
                <TourCard key={related.slug} tour={related} />
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="bg-secondary/40 border-y border-border/60 py-24 px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-display mb-10">Simple &amp; Fast Booking</h2>
          <ol className="space-y-6">
            {bookingSteps.map((b) => (
              <li key={b.step} className="flex gap-5">
                <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-accent pt-1.5 w-14 flex-shrink-0">
                  {b.step}
                </span>
                <div>
                  <h3 className="font-display text-xl mb-1">{b.title}</h3>
                  <p className="text-sm text-foreground/70">{b.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="py-24 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-display mb-10">Terms &amp; Conditions</h2>
          <ul className="space-y-3 text-foreground/70">
            {termsAndConditions.map((t) => (
              <li key={t} className="flex gap-3">
                <span className="mt-2 size-1.5 rounded-full bg-foreground/30 flex-shrink-0" />
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
      </main>

      <SiteFooter />
    </div>
  );
}
