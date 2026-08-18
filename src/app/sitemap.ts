import type { MetadataRoute } from "next";
import { getSitemapEntries } from "@/lib/sitemap-entries";
import { submitIndexNow } from "@/lib/indexnow";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const entries = getSitemapEntries();
  await submitIndexNow(entries.map((entry) => entry.url));
  return entries;
}
