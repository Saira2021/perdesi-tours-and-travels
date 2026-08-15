import { MapPin } from "lucide-react";
import { MAPS_URL } from "@/lib/seo";

const ADDRESS =
  "Sheikhupura Stadium, Khalid Road, Gol Masjid, near Dar-ul-Shifa Hospital, Sheikhupura";

const EMBED_SRC =
  "https://maps.google.com/maps?q=Sheikhupura%20Stadium%20Khalid%20Road%20Gol%20Masjid%20Sheikhupura&z=16&output=embed";

export function MapPinIcon({ className }: { className?: string }) {
  return <MapPin className={className} strokeWidth={1.75} aria-hidden="true" />;
}

export function MapDirectionsLink({
  className,
  label = "Get directions",
}: {
  className?: string;
  label?: string;
}) {
  return (
    <a
      href={MAPS_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      <MapPinIcon className="size-4 shrink-0" />
      <span>{label}</span>
    </a>
  );
}

export function OfficeMap({ compact = false }: { compact?: boolean }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-border/70 bg-card shadow-sm">
      <div className={compact ? "h-48" : "h-64 sm:h-72"}>
        <iframe
          title="Perdesi Tours office location on Google Maps"
          src={EMBED_SRC}
          className="h-full w-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>
      <a
        href={MAPS_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-start gap-3 px-5 py-4 transition-colors hover:bg-sage/[0.06]"
      >
        <span className="mt-0.5 grid size-10 shrink-0 place-items-center rounded-full bg-sage/10 text-sage">
          <MapPinIcon className="size-5" />
        </span>
        <span className="min-w-0 flex-1 text-left">
          <span className="block text-[10px] font-bold uppercase tracking-[0.2em] text-foreground/50">
            Visit our office
          </span>
          <span className="mt-1 block text-sm leading-relaxed text-foreground/80">{ADDRESS}</span>
          <span className="mt-2 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-accent">
            Open in Google Maps
          </span>
        </span>
      </a>
    </div>
  );
}
