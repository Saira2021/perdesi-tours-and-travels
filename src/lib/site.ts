export const SITE_URL = String(
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://perdesitours.com",
).replace(/\/$/, "");

export function siteUrl(path = "/"): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${normalized === "/" ? "/" : normalized}`;
}

export function assetUrl(src: string | { src: string }): string {
  return siteUrl(typeof src === "string" ? src : src.src);
}
