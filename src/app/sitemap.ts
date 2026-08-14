import type { MetadataRoute } from "next";
import { tours } from "@/data/tours";
import { assetUrl, siteUrl } from "@/lib/site";
import heroImage from "@/assets/hero-kalam.png";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl("/"),
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
      images: [assetUrl(heroImage.src)],
    },
    {
      url: siteUrl("/about"),
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...tours.map((t) => ({
      url: siteUrl(`/tours/${t.slug}`),
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.9,
      images: [assetUrl(t.img.src)],
    })),
  ];
}
