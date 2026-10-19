import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://gaddyh.dev", lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    { url: "https://gaddyh.dev/work/tamitor", lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
  ];
}
