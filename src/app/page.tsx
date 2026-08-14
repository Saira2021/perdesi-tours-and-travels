import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { SiteNav } from "@/components/SiteNav";
import { InquiryForm } from "@/components/InquiryForm";
import { JsonLd } from "@/components/JsonLd";
import founder from "@/assets/founder.png";
import heroImage from "@/assets/hero-kalam.png";
import { tours, includedServices } from "@/data/tours";
import {
  absoluteUrl,
  HOME_FAQS,
  breadcrumbJsonLd,
  faqJsonLd,
  pageMetadata,
  travelAgencyJsonLd,
  websiteJsonLd,
} from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Perdesi Tours | Pakistan Northern Areas Tours — Kalam, Hunza & Skardu",
  description:
    "Book curated tours of Pakistan's Northern Areas — Kalam, Hunza, Skardu, Naran and Fairy Meadows. Woman-led agency by CEO Maryam Arif. Family, honeymoon and solo women trips.",
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
            name: "Perdesi Tours packages",
            itemListElement: tours.map((t, i) => ({
              "@type": "ListItem",
              position: i + 1,
              name: t.name,
              url: absoluteUrl(`/tours/${t.slug}`),
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
              Curated, safe and soulful journeys through Kalam, Hunza, Skardu and beyond — designed
              with a woman&apos;s eye for hospitality, detail and trust.
            </p>
            <div className="flex items-center flex-wrap gap-x-6 gap-y-4">
              <a
                href="#tours"
                className="border-b-2 border-sage pb-1 font-bold text-sage hover:text-accent hover:border-accent transition-all text-sm uppercase tracking-widest"
              >
                Explore Tours
              </a>
              <span className="h-px w-12 bg-foreground/20" />
              <span className="text-sm italic text-foreground/70">
                Featured: The Kalam Autumn Retreat
              </span>
            </div>
          </div>
          <div className="relative">
            <Image
              src={heroImage}
              alt="Perdesi Tours collage of Pakistan's northern areas — snow peaks, Kaghan river, cable car, Ayubia National Park and Faisal Mosque"
              className="w-full aspect-[4/5] object-cover rounded-2xl shadow-xl"
              sizes="(min-width: 1024px) 50vw, 100vw"
              priority
            />
            <div className="absolute -bottom-8 -left-4 md:-left-10 bg-card p-6 md:p-8 rounded-xl shadow-2xl max-w-xs border border-border/50">
              <p className="text-base md:text-lg italic font-display text-sage leading-snug mb-3">
                &quot;I want to show you the side of Pakistan that feels like home — no matter how far
                you travel.&quot;
              </p>
              <p className="text-[10px] uppercase tracking-[0.18em] font-bold text-foreground/70">
                — Maryam Arif, Founder & CEO
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
            <a
              href="#contact"
              className="text-xs font-bold uppercase tracking-[0.18em] border-b-2 border-foreground pb-1 hover:text-accent hover:border-accent transition-all"
            >
              Request a Custom Trip
            </a>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
            {tours.map((t) => (
              <Link key={t.slug} href={`/tours/${t.slug}`} className="group block">
                <div className="overflow-hidden rounded-2xl mb-6">
                  <Image
                    src={t.img}
                    alt={`${t.name} tour package in ${t.region}, Pakistan — Perdesi Tours`}
                    className="w-full aspect-[4/5] object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  />
                </div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-foreground/50 mb-2">{t.region}</p>
                <h3 className="text-2xl font-display mb-3">{t.name}</h3>
                <div className="text-sm text-foreground/70 mb-4">
                  {t.days} <span className="mx-1.5 text-foreground/30">•</span> {t.audience}
                </div>
                <div className="space-y-1.5">
                  <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-foreground/40">
                    Services Included:
                  </p>
                  <ul className="text-sm text-foreground/70 space-y-1">
                    {includedServices.map((s) => (
                      <li key={s} className="flex items-center gap-2">
                        <span className="size-1.5 rounded-full bg-accent/80 flex-shrink-0" />
                        <span>{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <span className="inline-block mt-5 text-[11px] font-bold uppercase tracking-[0.2em] text-sage border-b-2 border-sage pb-1 group-hover:text-accent group-hover:border-accent transition-colors">
                  View Package Details
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

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

      <section className="py-24 px-6 lg:px-8 bg-secondary/40 border-y border-border/60">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-accent font-semibold tracking-[0.22em] uppercase text-[11px] mb-3 block">
              Kind Words
            </span>
            <h2 className="text-4xl font-display">From our travelers</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                q: "As a solo woman traveler, I felt safe and looked after every single day. The Kalam trip was the highlight of my year.",
                n: "Hira A.",
                d: "Karachi · Solo, 2025",
              },
              {
                q: "We took our parents to Hunza and Perdesi made every detail effortless. From transport to food, nothing was missed.",
                n: "Bilal & Sana",
                d: "Lahore · Family of 6",
              },
              {
                q: "Our honeymoon in Skardu was straight out of a dream. Beautifully thought-out — quiet luxury done right.",
                n: "Mariam K.",
                d: "Islamabad · Honeymoon",
              },
            ].map((t) => (
              <figure key={t.n} className="bg-card p-8 rounded-2xl border border-border/60 shadow-sm">
                <blockquote className="font-display italic text-lg leading-snug text-foreground/85">
                  &quot;{t.q}&quot;
                </blockquote>
                <figcaption className="mt-6">
                  <div className="font-semibold text-sm">{t.n}</div>
                  <div className="text-[10px] uppercase tracking-[0.2em] text-foreground/50 mt-1">{t.d}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

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
              Share a few details and Maryam will personally reply with a custom itinerary, dates and
              transparent pricing — usually within 24 hours.
            </p>
            <div className="space-y-3 text-sm">
              <p>
                <span className="font-bold uppercase tracking-widest text-[10px] text-foreground/50 mr-3">
                  WhatsApp
                </span>
                +92 336 4572568
              </p>
              <p>
                <span className="font-bold uppercase tracking-widest text-[10px] text-foreground/50 mr-3">
                  Email
                </span>
                travelwithperdesi@gmail.com
              </p>
              <p>
                <span className="font-bold uppercase tracking-widest text-[10px] text-foreground/50 mr-3">
                  Office
                </span>
                Sheikhupura Stadium, Khalid Road, Gol Masjid, near Dar-ul-Shifa Hospital, Sheikhupura
              </p>
            </div>
          </div>
          <InquiryForm />
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

      <footer className="bg-ink text-cream py-16 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
          <div>
            <div className="text-3xl font-display italic mb-5">Perdesi Tours</div>
            <p className="max-w-xs text-cream/60 text-sm leading-relaxed">
              A boutique, woman-led travel agency revealing the hidden valleys of Pakistan&apos;s
              Northern Areas with safety, warmth and care.
            </p>
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-[0.22em] font-bold mb-5 text-accent">Destinations</h4>
            <ul className="space-y-3 text-sm text-cream/80">
              <li>
                <Link href="/tours/swat-kalam-3-days" className="hover:text-accent">
                  Kalam &amp; Swat Valley
                </Link>
              </li>
              <li>
                <Link href="/tours/hunza-skardu-8-days" className="hover:text-accent">
                  Hunza &amp; Gilgit
                </Link>
              </li>
              <li>
                <Link href="/tours/skardu-wilderness" className="hover:text-accent">
                  Skardu &amp; Shigar
                </Link>
              </li>
              <li>
                <Link href="/tours/naran-kaghan-3-days" className="hover:text-accent">
                  Naran–Kaghan
                </Link>
              </li>
              <li>
                <Link href="/tours/fairy-meadows-5-days" className="hover:text-accent">
                  Fairy Meadows
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-[0.22em] font-bold mb-5 text-accent">Connect</h4>
            <ul className="space-y-3 text-sm text-cream/80">
              <li>
                <a href="https://wa.me/923364572568">WhatsApp: +92 336 4572568</a>
              </li>
              <li>
                <a href="mailto:travelwithperdesi@gmail.com">travelwithperdesi@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-cream/10 flex flex-wrap justify-between gap-3 text-[10px] uppercase tracking-[0.22em] text-cream/40">
          <span>© 2026 Perdesi Tours Pakistan</span>
          <span>Designed for adventure, made with care</span>
        </div>
      </footer>
    </div>
  );
}
