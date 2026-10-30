"use client";

import { useLayoutEffect, useRef, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function MotionSurface({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const root = useRef<HTMLDivElement>(null);
  useLayoutEffect(() => {
    const media = gsap.matchMedia();
    media.add("(prefers-reduced-motion: no-preference)", () => {
      const context = gsap.context(() => {
        root.current
          ?.querySelectorAll<HTMLElement>("[data-reveal]")
          .forEach((element) => {
            if (element.closest("[data-motion-surface]") !== root.current)
              return;
            const image = element.dataset.reveal === "image";
            const entry = element.hasAttribute("data-entry");
            const config = entry
              ? {}
              : {
                  scrollTrigger: {
                    trigger: element,
                    start: "top 90%",
                    once: true,
                  },
                };
            if (image) {
              gsap.fromTo(
                element,
                { clipPath: "inset(0% 0% 100% 0%)" },
                {
                  clipPath: "inset(0% 0% 0% 0%)",
                  clearProps: "clipPath",
                  duration: 1.25,
                  ease: "power3.inOut",
                  ...config,
                },
              );
              const img = element.querySelector("img");
              if (img)
                gsap.fromTo(
                  img,
                  { scale: 1.14 },
                  { scale: 1, duration: 1.5, ease: "power3.out", ...config },
                );
            } else {
              gsap.fromTo(
                element,
                { y: 35, opacity: 0, filter: "blur(10px)" },
                {
                  y: 0,
                  opacity: 1,
                  filter: "blur(0px)",
                  duration: 1.05,
                  delay: entry ? 0.12 : 0,
                  ease: "power3.out",
                  ...config,
                },
              );
            }
          });
      }, root);
      return () => context.revert();
    });
    return () => media.revert();
  }, []);
  return (
    <div ref={root} data-motion-surface className={className}>
      {children}
    </div>
  );
}
