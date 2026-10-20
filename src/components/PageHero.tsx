import type { ReactNode } from "react";
import Image from "next/image";

type Props = {
  title: string;
  lead?: ReactNode;
  image?: string;
  imageAlt?: string;
};

export default function PageHero({ title, lead, image, imageAlt = "" }: Props) {
  return (
    <header className="page-hero">
      <div className="container">
        <h1 className="ph-title">{title}</h1>
        {lead && <p className="ph-lead">{lead}</p>}
        {image && (
          <div className="ph-media">
            <Image
              quality={70}
              src={image}
              alt={imageAlt}
              fill
              sizes="(max-width: 1160px) 100vw, 1160px"
              priority
            />
          </div>
        )}
      </div>
    </header>
  );
}
