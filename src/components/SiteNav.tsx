"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { TOURS_INDEX_PATH } from "@/lib/site";
import { WHATSAPP_URL } from "@/lib/seo";
import { SiteLogo } from "@/components/SiteLogo";

const links = [
  { label: "Destinations", href: TOURS_INDEX_PATH },
  { label: "Deluxe", href: "/#deluxe" },
  { label: "Tailored Trips", href: "/#categories" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/#contact" },
] as const;

export function SiteNav({ active }: { active?: string }) {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-40 backdrop-blur-md bg-background/80 border-b border-border/60">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4 grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 md:flex md:justify-between">
        <SiteLogo variant="nav" />

        <div className="hidden md:flex space-x-10 text-xs font-semibold uppercase tracking-[0.18em] text-foreground/80">
          {links.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              className={active === l.label ? "text-accent" : "hover:text-accent transition-colors"}
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <a
            href={WHATSAPP_URL}
            className="hidden sm:inline-block bg-sage text-cream px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-widest hover:bg-ink transition-all"
          >
            Book an Escape
          </a>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="md:hidden grid size-10 place-items-center rounded-full border border-border text-foreground/80"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-border/60 bg-background/95 px-6 py-4">
          <div className="flex flex-col gap-4 text-sm font-semibold uppercase tracking-[0.18em] text-foreground/80">
            {links.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                className={active === l.label ? "text-accent" : "hover:text-accent transition-colors"}
              >
                {l.label}
              </Link>
            ))}
            <a
              href={WHATSAPP_URL}
              className="sm:hidden mt-1 bg-sage text-cream px-5 py-3 rounded-full text-xs font-semibold uppercase tracking-widest text-center"
            >
              Book an Escape
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
