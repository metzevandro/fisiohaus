"use client";

import { useRef, type ReactNode } from "react";
import Image from "next/image";
import { gsap, useGSAP, MOTION_OK } from "@/lib/gsap";

type Props = {
  title: string;
  lead?: ReactNode;
  image?: string;
  imageAlt?: string;
};

export default function PageHero({ title, lead, image, imageAlt = "" }: Props) {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(MOTION_OK, () => {
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
        tl.from(".ph-title", { y: 36, opacity: 0, duration: 0.9 })
          .from(".ph-lead", { y: 20, opacity: 0, duration: 0.7 }, "-=0.55")
          .from(
            ".ph-media",
            { clipPath: "inset(0 0 100% 0 round 18px)", duration: 1.1 },
            "-=0.6",
          );
      });
    },
    { scope: root },
  );

  return (
    <header ref={root} className="page-hero">
      <div className="container">
        <h1 className="ph-title">{title}</h1>
        {lead && <p className="ph-lead">{lead}</p>}
        {image && (
          <div className="ph-media">
            <Image
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
