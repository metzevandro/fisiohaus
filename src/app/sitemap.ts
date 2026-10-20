import type { MetadataRoute } from "next";
import { nav, site } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return nav.map((n) => ({
    url: `${site.url}${n.href === "/" ? "" : n.href}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: n.href === "/" ? 1 : 0.7,
  }));
}
