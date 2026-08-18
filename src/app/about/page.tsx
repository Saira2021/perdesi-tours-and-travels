import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { JsonLd } from "@/components/JsonLd";
import { OfficeMap } from "@/components/OfficeMap";
import founder from "@/assets/founder.png";
import heroKalam from "@/assets/hero-kalam.png";
import {
  absoluteUrl,
  breadcrumbJsonLd,
  pageMetadata,
  travelAgencyJsonLd,
  websiteJsonLd,
  WHATSAPP_URL,
} from "@/lib/seo";

const title = "About Us";
const description =
  "Woman-led travel agency in Sheikhupura, founded by Maryam Arif. Safe Hunza, Skardu, Swat and Kashmir tours.";

export const metadata: Metadata = pageMetadata({
  title,
  description,
  path: "/about",
  image: heroKalam,
  imageAlt: "Northern Pakistan scenery featured on the Perdesi Tours about page",
  keywords: [
    "About Perdesi Tours",
    "Maryam Arif",
    "Arif Ali Pardesi",
    "woman led travel agency Pakistan",
    "Sheikhupura tour operator",
  ],
});

const whyChooseUs = [
  {
    title: "Expertly Curated Itineraries",
    text: "Our trips are carefully planned to offer the perfect balance of adventure, relaxation and cultural exploration, so you experience the very best of Pakistan's northern areas.",
  },
  {
    title: "Safety & Comfort Guaranteed",
    text: "From reliable transportation to quality accommodations, we prioritise your safety and comfort so you can travel with peace of mind.",
  },
  {
    title: "Quality at Honest Prices",
    text: "We offer top-notch travel experiences at competitive prices — great value without compromising on service or experience.",
  },
  {
    title: "Experienced & Friendly Team",
    text: "Our knowledgeable guides and dedicated team ensure a smooth, enjoyable and hassle-free journey, making every trip memorable.",
  },
];

const vision = [
  "To inspire travellers to explore the breathtaking northern areas of Pakistan with comfort, safety and authenticity — creating unforgettable experiences that highlight the region's landscapes, culture and warm hospitality.",
  "To promote sustainable tourism by preserving nature, supporting local communities and ensuring responsible travel.",
];

const mission = [
  "To provide well-organised, comfortable and memorable trips that showcase the beauty and culture of Pakistan's northern areas.",
  "To ensure a secure, hassle-free journey through quality transportation, accommodation and expert guidance.",
  "To promote eco-friendly travel, preserve natural landscapes and support local communities through ethical tourism.",
  "To deliver personalised experiences with professionalism, transparency and a commitment to customer satisfaction.",
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <JsonLd
        data={[
          websiteJsonLd(),
          travelAgencyJsonLd(),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
          ]),
          {
            "@type": "AboutPage",
            "@id": `${absoluteUrl("/about")}#page`,
            url: absoluteUrl("/about"),
            name: title,
            description,
            mainEntity: { "@id": `${absoluteUrl("/")}#agency` },
          },
          {
            "@type": "Person",
            "@id": `${absoluteUrl("/about")}#maryam`,
            name: "Maryam Arif",
            jobTitle: "Founder & CEO",
            worksFor: { "@id": `${absoluteUrl("/")}#agency` },
            address: {
              "@type": "PostalAddress",
              addressLocality: "Sheikhupura",
              addressRegion: "Punjab",
              addressCountry: "PK",
            },
          },
        ]}
      />
      <SiteNav active="About Us" />
      <main>

      <header className="max-w-6xl mx-auto px-6 lg:px-8 pt-14 pb-20 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7">
          <span className="text-accent font-semibold tracking-[0.22em] uppercase text-[11px] mb-5 block">
            A Welcome from Maryam Arif
          </span>
          <h1 className="text-4xl lg:text-6xl font-display leading-[1.08] mb-8">
            Every journey with us <span className="italic">feels like home.</span>
          </h1>
          <div className="space-y-5 text-foreground/75 leading-relaxed max-w-prose">
            <p>
              At Perdesi Tours we believe travel is not just about visiting new places — it&apos;s about
              experiencing the magic, culture and breathtaking beauty that makes each destination
              unique. We specialise in organising unforgettable trips to the northern areas of
              Pakistan, including the stunning valleys of Hunza, Skardu, Swat and Kashmir.
            </p>
            <p>
              Whether you&apos;re an adventure enthusiast, a nature lover or someone seeking peace and
              serenity, our well-planned itineraries offer the perfect blend of exploration, comfort
              and excitement. From the snow-capped peaks of the Karakoram and Himalayan ranges to
              lush green meadows and crystal-clear lakes, every journey is designed to immerse you in
              the natural wonders of Pakistan.
            </p>
            <p className="font-display italic text-xl text-sage">— Maryam Arif, Founder &amp; CEO</p>
          </div>
        </div>
        <div className="lg:col-span-5">
          <Image
            src={founder}
            alt="Maryam Arif, founder and CEO of Perdesi Tours, at her office desk"
            className="w-full aspect-[4/5] object-cover object-top rounded-2xl shadow-xl"
            sizes="(min-width: 1024px) 40vw, 100vw"
            priority
          />
        </div>
      </header>

      <section className="bg-sage/[0.05] border-y border-border/60 py-24 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <span className="text-accent font-semibold tracking-[0.22em] uppercase text-[11px] mb-3 block">
            Since 2019
          </span>
          <h2 className="text-4xl md:text-5xl font-display mb-10">Our Story</h2>
          <div className="space-y-5 text-foreground/75 leading-relaxed">
            <p>
              My father, <strong>Arif Ali Pardesi</strong>, had a deep love for exploration and
              adventure. He was passionate about discovering the hidden beauty of Pakistan and
              sharing it with others. His dream was to make travel accessible and enjoyable for
              families, ensuring they could experience the magic of nature, culture and adventure
              safely.
            </p>
            <p>
              After his passing, I took it upon myself to continue his legacy. I founded Perdesi
              Tours with the goal of providing safe, comfortable and memorable travel experiences —
              especially for families and women. Every journey we offer reflects his passion for
              exploration and love for nature.
            </p>
            <p>
              Through this company I strive to keep his spirit alive, not only by showcasing the
              breathtaking beauty of Pakistan but also by fostering a deeper connection with its
              diverse cultures. Our mission is to make travel accessible, enjoyable and responsible,
              so every traveller leaves with cherished memories while respecting the places they
              visit.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl font-display mb-8">Our Vision</h2>
            <ul className="space-y-5 text-foreground/75 leading-relaxed">
              {vision.map((v) => (
                <li key={v} className="flex gap-4">
                  <span className="mt-2.5 size-1.5 rounded-full bg-accent flex-shrink-0" />
                  <span>{v}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-4xl font-display mb-8">Our Mission</h2>
            <ul className="space-y-5 text-foreground/75 leading-relaxed">
              {mission.map((m) => (
                <li key={m} className="flex gap-4">
                  <span className="mt-2.5 size-1.5 rounded-full bg-sage flex-shrink-0" />
                  <span>{m}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-secondary/40 border-y border-border/60 py-24 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-display mb-14">Why Choose Us?</h2>
          <div className="grid sm:grid-cols-2 gap-10">
            {whyChooseUs.map((w, i) => (
              <div key={w.title}>
                <div className="text-[10px] uppercase tracking-[0.22em] font-bold text-accent mb-3">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="text-2xl font-display mb-3">{w.title}</h3>
                <p className="text-foreground/70 leading-relaxed">{w.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-display mb-10">Contact Us</h2>
          <div className="grid sm:grid-cols-2 gap-8 text-left">
            <div className="bg-card border border-border rounded-xl p-6">
              <div className="text-[10px] uppercase tracking-[0.2em] font-bold text-foreground/50 mb-2">
                Phone / WhatsApp
              </div>
              <a href={WHATSAPP_URL} className="font-display text-xl hover:text-accent">
                +92 336 4572568
              </a>
            </div>
            <div className="bg-card border border-border rounded-xl p-6">
              <div className="text-[10px] uppercase tracking-[0.2em] font-bold text-foreground/50 mb-2">Email</div>
              <a
                href="mailto:travelwithperdesi@gmail.com"
                className="font-display text-xl hover:text-accent break-all"
              >
                travelwithperdesi@gmail.com
              </a>
            </div>
            <div className="sm:col-span-2">
              <OfficeMap />
            </div>
          </div>
          <Link
            href="/tours/hunza-skardu-8-days"
            className="inline-block mt-12 bg-sage text-cream px-8 py-4 rounded-full text-xs font-bold uppercase tracking-[0.22em] hover:bg-ink transition-colors"
          >
            See our 8-Day Hunza &amp; Skardu Tour
          </Link>
        </div>
      </section>
      </main>

      <SiteFooter />
    </div>
  );
}
