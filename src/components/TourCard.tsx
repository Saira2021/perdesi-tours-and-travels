import Link from "next/link";
import Image from "next/image";
import { includedServices, type Tour } from "@/data/tours";

export function TourCard({ tour }: { tour: Tour }) {
  return (
    <Link href={`/tours/${tour.slug}`} className="group block h-full">
      <div className="overflow-hidden rounded-2xl mb-6">
        <Image
          src={tour.img}
          alt={`${tour.name} tour package in ${tour.region}, Pakistan — Perdesi Tours`}
          className="w-full aspect-[4/5] object-cover group-hover:scale-105 transition-transform duration-700"
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        />
      </div>
      <p className="text-[10px] uppercase tracking-[0.2em] text-foreground/50 mb-2">{tour.region}</p>
      <h3 className="text-2xl font-display mb-3">{tour.name}</h3>
      <div className="text-sm text-foreground/70 mb-4">
        {tour.days} <span className="mx-1.5 text-foreground/30">•</span> {tour.audience}
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
  );
}
