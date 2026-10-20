import type { Metadata } from "next";
import { images } from "@/data/site";

/** Metadata padrão de cada rota: title, description, canonical, robots e Open Graph. */
export function pageMeta({
  title,
  description,
  path,
  image = images.clinic,
}: {
  title: string;
  description: string;
  path: string;
  image?: string;
}): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    robots: { index: true, follow: true },
    openGraph: {
      title: `${title} | Fisiohaus`,
      description,
      url: path,
      images: [{ url: image }],
    },
  };
}
