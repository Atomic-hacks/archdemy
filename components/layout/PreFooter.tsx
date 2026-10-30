"use client";

import { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import Link from "@/components/ui/TransitionLink";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function PreFooter() {
  const root = useRef<HTMLElement>(null);
  const image = useRef<HTMLDivElement>(null);
  useLayoutEffect(() => {
    const media = gsap.matchMedia();
    media.add("(prefers-reduced-motion: no-preference)", () => {
      const context = gsap.context(() => {
        gsap.fromTo(
          image.current,
          { yPercent: 10, scale: 1.4 },
          {
            yPercent: -12,
            scale: 1.4,
            ease: "none",
            scrollTrigger: {
              trigger: root.current,
              start: "top bottom",
              end: "bottom top",
              scrub: 1,
            },
          },
        );
        gsap.fromTo(
          root.current?.querySelector(".prefooter-rule") ?? null,
          { scaleX: 0, transformOrigin: "right center" },
          {
            scaleX: 1,
            duration: 1,
            ease: "power3.inOut",
            scrollTrigger: {
              trigger: root.current,
              start: "top 80%",
              once: true,
            },
          },
        );
        gsap.fromTo(
          root.current?.querySelectorAll("[data-prefooter-reveal]") ?? [],
          { y: 24, opacity: 0, filter: "blur(8px)" },
          {
            y: 0,
            opacity: 1,
            filter: "blur(0px)",
            duration: 1,
            stagger: 0.055,
            ease: "power3.out",
            scrollTrigger: {
              trigger: root.current,
              start: "top 75%",
              once: true,
            },
          },
        );
      }, root);
      return () => context.revert();
    });
    return () => media.revert();
  }, []);
  return (
    <section
      ref={root}
      className="prefooter-navigation site-gutter"
      aria-label="Explore Archademy"
    >
      <div ref={image} className="prefooter-image">
        <Image
          src="/int1.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>
      <div className="prefooter-shade" />
      <div className="prefooter-rule" />
      <nav className="prefooter-links" aria-label="Explore our work">
        <div>
          <p data-prefooter-reveal>Our focus</p>
          {["Residential", "Hospitality", "Retail", "Commercial"].map(
            (category) => (
              <Link
                key={category}
                href={`/focus/${category.toLowerCase()}`}
                data-prefooter-reveal
              >
                {category}
              </Link>
            ),
          )}
        </div>
        <div className="prefooter-portfolio">
          <p data-prefooter-reveal>Explore our</p>
          <Link href="/work" data-prefooter-reveal>
            Portfolio
          </Link>
        </div>
      </nav>
    </section>
  );
}
