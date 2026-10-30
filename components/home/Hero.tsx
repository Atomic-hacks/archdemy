"use client";

import { useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "@/components/ui/TransitionLink";
import { ArrowDown, ArrowUpRight, Plus } from "lucide-react";
import gsap from "gsap";
import { practiceAreas } from "@/lib/studio";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const focus = practiceAreas.map((area) => ({ ...area, text: area.foreground }));

export default function Hero() {
  const root = useRef<HTMLElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const video = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  useLayoutEffect(() => {
    const media = gsap.matchMedia();
    media.add(
      "(min-width: 900px) and (prefers-reduced-motion: no-preference)",
      () => {
        if (!root.current || !track.current) return;
        const distance = () => track.current!.scrollWidth - window.innerWidth;
        const tween = gsap.to(track.current, {
          x: () => -distance(),
          ease: "none",
          scrollTrigger: {
            trigger: root.current,
            start: "top top",
            end: () => `+=${distance()}`,
            pin: true,
            scrub: 0.8,
            invalidateOnRefresh: true,
          },
        });
        track.current
          .querySelectorAll<HTMLElement>(".focus-panel")
          .forEach((panel) => {
            const reveal = gsap.timeline({
              scrollTrigger: {
                trigger: panel,
                containerAnimation: tween,
                start: "left 92%",
                end: "left 27%",
                scrub: 0.65,
              },
            });
            reveal.fromTo(
              panel,
              { gridTemplateRows: "50% 50%" },
              { gridTemplateRows: "70% 30%", duration: 1, ease: "none" },
              0,
            );
            reveal.fromTo(
              panel.querySelector("img"),
              { scale: 1.3 },
              { scale: 1, duration: 1, ease: "none" },
              0,
            );
            gsap.fromTo(
              panel.querySelector("h2"),
              { y: 10, opacity: 0, filter: "blur(10px)" },
              {
                y: 0,
                opacity: 1,
                filter: "blur(0px)",
                duration: 0.9,
                ease: "power3.out",
                scrollTrigger: {
                  trigger: panel,
                  containerAnimation: tween,
                  start: "left 78%",
                  toggleActions: "play none none reverse",
                },
              },
            );
            gsap.fromTo(
              panel.querySelectorAll(
                ".focus-index, .focus-info p, .focus-open",
              ),
              { y: 10, opacity: 0 },
              {
                y: 0,
                opacity: 1,
                duration: 0.65,
                stagger: 0.07,
                ease: "power3.out",
                scrollTrigger: {
                  trigger: panel,
                  containerAnimation: tween,
                  start: "left 76%",
                  toggleActions: "play none none reverse",
                },
              },
            );
          });
        const links =
          track.current.querySelectorAll<HTMLAnchorElement>(".focus-panel");
        const revealFocused = (event: FocusEvent) => {
          const panel = event.currentTarget as HTMLAnchorElement;
          const trigger = tween.scrollTrigger;
          if (trigger)
            window.scrollTo({
              top: trigger.start + Math.min(panel.offsetLeft, distance()),
              behavior: "instant",
            });
        };
        links.forEach((link) => link.addEventListener("focus", revealFocused));
        return () =>
          links.forEach((link) =>
            link.removeEventListener("focus", revealFocused),
          );
      },
    );
    media.add(
      "(max-width: 899px) and (prefers-reduced-motion: no-preference)",
      () => {
        const cleanups: (() => void)[] = [];
        track.current
          ?.querySelectorAll<HTMLAnchorElement>(".focus-panel")
          .forEach((panel) => {
            const reveal = gsap.timeline({
              scrollTrigger: {
                trigger: panel,
                start: "top 92%",
                once: true,
              },
            });
            reveal.fromTo(
              panel.querySelector(".focus-photo"),
              { clipPath: "inset(0% 0% 100% 0%)" },
              {
                clipPath: "inset(0% 0% 0% 0%)",
                clearProps: "clipPath",
                duration: 1.1,
                ease: "power3.inOut",
              },
              0,
            );
            reveal.fromTo(
              panel.querySelector("img"),
              { scale: 1.22 },
              { scale: 1, duration: 1.3, ease: "power3.out" },
              0,
            );
            reveal.fromTo(
              panel.querySelector("h2"),
              { y: 18, opacity: 0, filter: "blur(10px)" },
              {
                y: 0,
                opacity: 1,
                filter: "blur(0px)",
                duration: 0.8,
                ease: "power3.out",
              },
              0.12,
            );
            reveal.fromTo(
              panel.querySelectorAll(".focus-index, .focus-info p, .focus-open"),
              { y: 12, opacity: 0 },
              {
                y: 0,
                opacity: 1,
                duration: 0.65,
                stagger: 0.06,
                ease: "power3.out",
              },
              0.25,
            );
            // Keyboard users should never land on an unrevealed card.
            const revealFocused = () => reveal.progress(1);
            panel.addEventListener("focus", revealFocused);
            cleanups.push(() => panel.removeEventListener("focus", revealFocused));
          });
        return () => cleanups.forEach((cleanup) => cleanup());
      },
    );
    media.add("(prefers-reduced-motion: no-preference)", () => {
      const context = gsap.context(() => {
        gsap.fromTo(
          ".focus-intro",
          { clipPath: "inset(15% 18% 15% 18%)" },
          {
            clipPath: "inset(0% 0% 0% 0%)",
            duration: 1.3,
            ease: "power4.inOut",
          },
        );
        gsap.fromTo(
          ".focus-intro h1",
          { y: 40, opacity: 0, filter: "blur(10px)" },
          {
            y: 0,
            opacity: 1,
            filter: "blur(0px)",
            duration: 1.1,
            delay: 0.55,
            ease: "power3.out",
          },
        );
        gsap.fromTo(
          ".focus-meta",
          { opacity: 0 },
          { opacity: 1, duration: 0.8, delay: 0.7 },
        );
      }, root);
      return () => context.revert();
    });
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!reduced.matches) video.current?.play().catch(() => {});
    const motionChanged = () => {
      if (reduced.matches) {
        video.current?.pause();
        setPlaying(false);
      }
    };
    reduced.addEventListener("change", motionChanged);
    return () => {
      media.revert();
      reduced.removeEventListener("change", motionChanged);
    };
  }, []);

  return (
    <section
      ref={root}
      className="focus-experience"
      aria-label="Architecture and areas of focus"
    >
      <div ref={track} className="focus-track">
        <div className="focus-intro">
          <Image
            src="/int1.jpg"
            alt="A light-filled interior opening to greenery"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <video
            ref={video}
            muted
            loop
            playsInline
            preload="metadata"
            onPlaying={() => setPlaying(true)}
            onPause={() => setPlaying(false)}
            aria-hidden="true"
            className={`focus-video ${playing ? "is-playing" : ""}`}
          >
            <source src="/hero-video.mp4" type="video/mp4" />
          </video>
          <div className="focus-shade" />
          <div className="focus-meta">
            <span>Architecture + Interiors</span>
            <span>Shaped by context, purpose, and craft.</span>
            <a href="#studio" className="focus-scroll">
              Scroll to explore{" "}
              <span>
                <ArrowDown size={15} />
              </span>
            </a>
          </div>
          <h1>
            We’re a process driven
            <br className="hidden md:block" /> architecture and
            <br className="hidden md:block" /> interior design company.
          </h1>
          <button
            type="button"
            className="video-toggle"
            onClick={() => {
              if (playing) {
                video.current?.pause();
                setPlaying(false);
              } else {
                video.current?.play().catch(() => {});
              }
            }}
          >
            {playing ? "Pause film" : "Play film"}
          </button>
        </div>
        {focus.map((item, index) => (
          <Link
            href={`/focus/${item.slug}`}
            key={item.title}
            className="focus-panel"
            style={{ backgroundColor: item.color, color: item.text }}
          >
            <div className="focus-photo" data-cursor="Explore">
              <Image
                src={item.image}
                alt={`${item.title} architecture and interiors`}
                fill
                sizes="(max-width: 899px) 35vw, 55vw"
                className="object-cover"
              />
            </div>
            <div className="focus-info">
              <span className="focus-open" aria-hidden="true">
                <Plus size={20} strokeWidth={1} />
              </span>
              <h2>{item.title}</h2>
              <span className="focus-index">
                {index + 1} / {focus.length}
              </span>
              <p>{item.description}</p>
              <ArrowUpRight
                className="focus-mobile-arrow"
                size={20}
                strokeWidth={1}
                aria-hidden="true"
              />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
