"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type RevealDirection = "up" | "left" | "right";

type RevealImageProps = {
  src: string;
  alt?: string;
  className?: string;
  imgClassName?: string;
  direction?: RevealDirection;
};

const offsets: Record<RevealDirection, { xPercent: number; yPercent: number }> = {
  up: { xPercent: 0, yPercent: 100 },
  left: { xPercent: -100, yPercent: 0 },
  right: { xPercent: 100, yPercent: 0 },
};

export default function RevealImage({
  src,
  alt = "",
  className = "",
  imgClassName = "",
  direction = "up",
}: RevealImageProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const image = imageRef.current;

    if (!container || !image) {
      return;
    }

    const offset = offsets[direction];

    const ctx = gsap.context(() => {
      gsap.set(image, {
        xPercent: offset.xPercent,
        yPercent: offset.yPercent,
        force3D: true,
      });

      gsap.to(image, {
        xPercent: 0,
        yPercent: 0,
        duration: 1.25,
        ease: "power4.out",
        force3D: true,
        scrollTrigger: {
          trigger: container,
          start: "top 82%",
          once: true,
        },
      });
    }, container);

    return () => ctx.revert();
  }, [direction]);

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden ${className}`}
      data-gsap="reveal-image"
    >
      <img
        ref={imageRef}
        src={src}
        alt={alt}
        className={`h-full w-full object-cover ${imgClassName}`}
        draggable={false}
        loading="lazy"
      />
    </div>
  );
}
