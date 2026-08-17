import Image from "next/image";
import Link from "next/link";
import { SITE_NAME } from "@/lib/seo";

const LOGO_LABEL = "Perdesi Tours";

type SiteLogoProps = {
  variant?: "nav" | "footer";
  asLink?: boolean;
};

export function SiteLogo({ variant = "nav", asLink = true }: SiteLogoProps) {
  const isFooter = variant === "footer";

  const inner = (
    <>
      <Image
        src="/logo-nobg.png"
        alt={`${SITE_NAME} logo`}
        width={1024}
        height={1024}
        className={
          isFooter
            ? "h-12 sm:h-14 w-auto shrink-0"
            : "h-11 sm:h-12 w-auto shrink-0"
        }
        priority={variant === "nav"}
      />
      <span
        className={
          isFooter
            ? "font-display text-xl sm:text-2xl italic font-bold text-cream leading-tight"
            : "font-display text-lg sm:text-xl md:text-2xl italic font-bold text-sage leading-tight"
        }
      >
        {LOGO_LABEL}
      </span>
    </>
  );

  const className = `flex items-center gap-3 min-w-0 ${isFooter ? "mb-5" : ""}`;

  if (!asLink) {
    return <div className={className}>{inner}</div>;
  }

  return (
    <Link href="/" className={`${className} hover:opacity-90 transition-opacity`}>
      {inner}
    </Link>
  );
}
