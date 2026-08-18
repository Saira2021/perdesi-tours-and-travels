import Link from "next/link";
import { MAPS_URL, SITE_NAME, WHATSAPP_URL } from "@/lib/seo";
import { TOURS_INDEX_PATH } from "@/lib/site";
import { MapPinIcon } from "@/components/OfficeMap";
import { SiteLogo } from "@/components/SiteLogo";

const destinations = [
  { href: TOURS_INDEX_PATH, label: "All destinations" },
  { href: "/tours/hunza-valley-5-days", label: "Hunza Valley" },
  { href: "/tours/skardu-valley-6-days", label: "Skardu Valley" },
  { href: "/tours/hunza-skardu-8-days", label: "Hunza & Skardu" },
  { href: "/tours/swat-kalam-3-days", label: "Kalam & Swat" },
  { href: "/tours/naran-kaghan-3-days", label: "Naran–Kaghan" },
  { href: "/tours/kashmir-valley-3-days", label: "Kashmir Valley" },
  { href: "/tours/fairy-meadows-5-days", label: "Fairy Meadows" },
  { href: "/tours/kumrat-valley-3-days", label: "Kumrat Valley" },
  { href: "/tours/murree-3-days", label: "Murree & Galiyat" },
  { href: "/tours/shogran-valley-2-days", label: "Shogran" },
  { href: "/tours/musa-ka-musala-summit", label: "Musa Ka Musala" },
] as const;

const socials = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/p/Perdesi-Tours-61573871982489/",
    icon: FacebookIcon,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/perdesi_tours",
    icon: InstagramIcon,
  },
  {
    name: "TikTok",
    href: "https://www.tiktok.com/@perdesi_tours",
    icon: TikTokIcon,
  },
] as const;

export function SiteFooter() {
  return (
    <footer className="bg-ink text-cream py-16 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
        <div>
          <SiteLogo variant="footer" />
          <p className="max-w-xs text-cream/60 text-sm leading-relaxed">
            A boutique, woman-led travel agency revealing the hidden valleys of Pakistan&apos;s
            Northern Areas with safety, warmth and care.
          </p>
          <div className="mt-8 flex items-center gap-3">
            {socials.map(({ name, href, icon: Icon }) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Follow ${SITE_NAME} on ${name}`}
                className="grid size-10 place-items-center rounded-full border border-cream/20 text-cream/80 transition-all duration-300 hover:border-accent hover:bg-accent hover:text-ink hover:-translate-y-0.5"
              >
                <Icon className="size-[18px]" />
              </a>
            ))}
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${SITE_NAME} office on Google Maps`}
              className="grid size-10 place-items-center rounded-full border border-cream/20 text-cream/80 transition-all duration-300 hover:border-accent hover:bg-accent hover:text-ink hover:-translate-y-0.5"
            >
              <MapPinIcon className="size-[18px]" />
            </a>
          </div>
        </div>
        <div>
          <h4 className="text-xs uppercase tracking-[0.22em] font-bold mb-5 text-accent">Destinations</h4>
          <ul className="space-y-3 text-sm text-cream/80">
            {destinations.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-accent transition-colors">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-xs uppercase tracking-[0.22em] font-bold mb-5 text-accent">Connect</h4>
          <ul className="space-y-3 text-sm text-cream/80">
            <li>
              <Link href="/about" className="hover:text-accent transition-colors">
                About us
              </Link>
            </li>
            <li>
              <a href={WHATSAPP_URL} className="hover:text-accent transition-colors">
                WhatsApp: +92 336 4572568
              </a>
            </li>
            <li>
              <a href="mailto:travelwithperdesi@gmail.com" className="hover:text-accent transition-colors">
                travelwithperdesi@gmail.com
              </a>
            </li>
            <li>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-start gap-2.5 hover:text-accent transition-colors"
              >
                <MapPinIcon className="mt-0.5 size-4 shrink-0" />
                <span>
                  Sheikhupura Stadium, Khalid Road
                  <span className="mt-1 block text-[11px] uppercase tracking-[0.16em] text-accent">
                    Open in Google Maps
                  </span>
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-cream/10 flex flex-wrap justify-between gap-3 text-[10px] uppercase tracking-[0.22em] text-cream/40">
        <span>© 2025 {SITE_NAME}</span>
        <span>Designed for adventure, made with care</span>
      </div>
    </footer>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M14.5 8.5V6.7c0-.7.5-1.2 1.2-1.2h1.3V3h-2.3C12.2 3 10.5 4.8 10.5 7v1.5H8.5V11h2v10h3.5V11h2.4l.6-2.5h-3Z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="12" cy="12" r="3.6" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" />
    </svg>
  );
}

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M18.7 8.3a6.4 6.4 0 0 1-3.7-1.2v7.4a5.5 5.5 0 1 1-5.5-5.5c.3 0 .6 0 .9.1v2.7a2.8 2.8 0 1 0 2 2.7V2.5h2.6a6.4 6.4 0 0 0 3.7 3.6V8.3Z" />
    </svg>
  );
}
