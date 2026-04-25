"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type ParallaxHeroProps = {
  videoSrc?: string;
  imageSrc?: string;
  children: React.ReactNode;
};

export default function ParallaxHero({
  videoSrc,
  imageSrc = "/work2.jpg",
  children,
}: ParallaxHeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mediaRef = useRef<HTMLVideoElement | HTMLDivElement>(null);

  useLayoutEffect(() => {
    const container = containerRef.current;
    const media = mediaRef.current;

    if (!container || !media) return;

    const ctx = gsap.context(() => {
      gsap.to(media, {
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: "bottom top",
          scrub: 0.5,
          markers: false,
        },
        y: (i, target) => {
          return (gsap.getProperty(target, "offsetHeight") as number) * 0.3;
        },
        force3D: true,
      });
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    // Section is exactly 100dvh — padding here creates the "inset" gap
    <section ref={containerRef} className="h-dvh w-full pt-20 pb-6 px-6">
      
      <div className="relative h-full w-full overflow-hidden rounded-2xl">
        {videoSrc ? (
          <video
            ref={mediaRef as React.RefObject<HTMLVideoElement>}
            src={videoSrc}
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 h-full w-full object-cover"
          />
        ) : (
          <div
            ref={mediaRef as React.RefObject<HTMLDivElement>}
            className="absolute inset-0 h-full w-full bg-cover bg-center"
            style={{ backgroundImage: `url('${imageSrc}')` }}
          />
        )}

        <div className="absolute inset-0 bg-black/15" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.45),rgba(0,0,0,0.35)_35%,rgba(0,0,0,0.62))]" />

        <div className="relative mx-auto flex h-full w-full max-w-[1120px] flex-col justify-end px-6 pb-10 pt-32 md:px-10 lg:px-0">
          {children}
        </div>
      </div>
    </section>
  );
}
