import { WhatsAppIcon } from "./WhatsAppIcon";

export function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/923364572568"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Message Perdesi Tours on WhatsApp"
      className="group fixed bottom-6 right-6 z-50"
    >
      <span className="pointer-events-none absolute right-[4.5rem] top-1/2 hidden -translate-y-1/2 whitespace-nowrap rounded-full border border-border/70 bg-card px-3.5 py-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-foreground shadow-lg opacity-0 transition-all duration-300 group-hover:opacity-100 md:block">
        Message us
      </span>

      <span className="relative grid size-14 place-items-center">
        <span className="absolute inset-0 rounded-full bg-[#25D366]/30 animate-ping [animation-duration:2.6s]" />
        <span className="relative grid size-14 place-items-center rounded-full bg-gradient-to-br from-[#25D366] to-[#0E9F56] text-white shadow-[0_10px_28px_rgba(14,159,86,0.38)] ring-[3px] ring-white transition-transform duration-300 group-hover:scale-[1.06] group-hover:shadow-[0_14px_32px_rgba(14,159,86,0.48)]">
          <WhatsAppIcon className="size-7" />
        </span>
        <span className="absolute right-0.5 top-0.5 size-3 rounded-full border-2 border-white bg-emerald-400" />
      </span>
    </a>
  );
}
