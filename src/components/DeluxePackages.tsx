"use client";

import { useState } from "react";
import Image from "next/image";
import { Mail, Users } from "lucide-react";
import { getTour } from "@/data/tours";
import {
  deluxeCouplesPrice,
  deluxeDestinations,
  deluxeGroupPrice,
  deluxeWhatsAppUrl,
} from "@/data/deluxe";
import { EMAIL } from "@/lib/seo";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export function DeluxePackages() {
  const [selected, setSelected] = useState<(typeof deluxeDestinations)[number] | "group" | null>(
    null,
  );

  const destinations = deluxeDestinations
    .map((item) => {
      const tour = getTour(item.slug);
      return tour ? { ...item, tour } : null;
    })
    .filter((item): item is NonNullable<typeof item> => item !== null);

  const selectedName =
    selected === "group" ? "the 5-person Private Deluxe deal" : selected ? selected.title : undefined;

  return (
    <section id="deluxe" className="relative overflow-hidden bg-ink text-cream">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 -top-24 size-[28rem] rounded-full bg-sage/20 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 -left-16 size-[22rem] rounded-full bg-blush/15 blur-3xl"
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-24">
        <div className="mx-auto max-w-3xl mb-14 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-cream/15 bg-cream/5 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.22em] text-blush mb-5">
            <span aria-hidden>🇵🇰</span>
            Private Deluxe Tour Deals
          </span>
          <h2 className="text-4xl md:text-5xl font-display leading-tight">
            Exclusive Private Tours — Deluxe Category
          </h2>
          <p className="mt-5 mx-auto text-cream/70 leading-relaxed max-w-xl">
            Enjoy comfortable, private and memorable trips to Pakistan&apos;s most beautiful
            destinations.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-4 lg:gap-6 mb-8">
          {destinations.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setSelected(item)}
              className="group relative isolate overflow-hidden rounded-2xl min-h-[22rem] text-left cursor-pointer"
            >
              <Image
                src={item.tour.img}
                alt={`${item.title} — private deluxe tour by Perdesi Tours`}
                className="absolute inset-0 size-full object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(min-width: 640px) 33vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/45 to-ink/10" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <p className="text-[10px] uppercase tracking-[0.22em] text-cream/65 mb-2">
                  Private Deluxe Tour
                </p>
                <h3 className="font-display text-3xl">{item.title}</h3>
                <p className="mt-4 text-sm text-cream/80">
                  For couples: <span className="font-semibold text-blush">{deluxeCouplesPrice}</span>
                </p>
              </div>
            </button>
          ))}
        </div>

        <button
          type="button"
          onClick={() => setSelected("group")}
          className="w-full text-left rounded-2xl bg-cream text-ink p-7 md:p-8 mb-8 cursor-pointer hover:bg-cream/95 transition-colors"
        >
          <div className="flex flex-wrap items-start justify-between gap-6">
            <div className="max-w-xl">
              <span className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-sage mb-3">
                <Users className="size-3.5" />
                Special Deal — 5 Persons
              </span>
              <p className="text-lg md:text-xl font-display leading-snug">
                For a group of 5 persons, enjoy the same private deluxe tour experience.
              </p>
              <p className="mt-3 text-sm text-ink/65">
                Available destinations: Naran — 3 Days · Kalam — 3 Days · Kashmir — 3 Days
              </p>
            </div>
            <div>
              <p className="font-display text-4xl tracking-tight">{deluxeGroupPrice}</p>
              <p className="mt-1 text-[11px] uppercase tracking-[0.18em] font-bold text-ink/50">
                Per package
              </p>
            </div>
          </div>
        </button>

        <p className="text-center text-[11px] font-semibold uppercase tracking-[0.22em] text-cream/45">
          Comfortable Travel <span className="mx-2 text-blush">|</span> Exclusive Experience
        </p>
      </div>

      <Dialog open={selected !== null} onOpenChange={(open) => !open && setSelected(null)}>
        <DialogContent className="max-w-md rounded-2xl border-border bg-card text-foreground">
          <DialogHeader>
            <DialogTitle className="font-display text-2xl font-normal leading-snug">
              For Private Tour Details Contact Us
            </DialogTitle>
            <DialogDescription className="text-foreground/70 leading-relaxed">
              {selectedName
                ? `Message Maryam on WhatsApp or email for details on ${selectedName}.`
                : "Message Maryam on WhatsApp or email for private deluxe tour details."}
            </DialogDescription>
          </DialogHeader>
          <div className="flex items-center justify-center gap-3 pt-2">
            <a
              href={deluxeWhatsAppUrl(selectedName)}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contact us on WhatsApp"
              className="grid size-12 place-items-center rounded-full bg-[#25D366] text-white hover:scale-105 transition-transform"
            >
              <WhatsAppIcon className="size-6" />
            </a>
            <a
              href={`mailto:${EMAIL}?subject=${encodeURIComponent("Private Deluxe Tour Details")}`}
              aria-label="Email us"
              className="grid size-12 place-items-center rounded-full bg-sage text-cream hover:scale-105 transition-transform"
            >
              <Mail className="size-5" />
            </a>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
