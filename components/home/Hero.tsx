"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { projects } from "@/lib/projects";

const heroProjectLinks = projects.slice(0, 7).map((project) => ({
  href: `/work/${project.slug}`,
}));

const PROJECTS = [
  {
    id: "top-center",
    src: "/house2.jpg",
    alt: "Forest Villa",
    href: heroProjectLinks[0]?.href ?? "/work",
    depth: 0.06,
    from: { x: 0, y: -60 },
    className:
      "absolute top-[2%] left-1/2 -translate-x-1/2 w-[160px] h-[190px]",
  },
  {
    id: "top-right",
    src: "/house3.jpg",
    alt: "Glass House",
    href: heroProjectLinks[1]?.href ?? "/work",
    depth: 0.04,
    from: { x: 80, y: 0 },
    className: "absolute top-[1%] right-0 w-[290px] h-[200px]",
  },
  {
    id: "mid-left-top",
    src: "/house4.jpg",
    alt: "Canopy Residence",
    href: heroProjectLinks[2]?.href ?? "/work",
    depth: 0.09,
    from: { x: -60, y: 0 },
    className: "absolute top-[18%] left-[6%] w-[110px] h-[110px]",
  },
  {
    id: "mid-left-bot",
    src: "/house5.jpg",
    alt: "Lakeside Pavilion",
    href: heroProjectLinks[3]?.href ?? "/work",
    depth: 0.07,
    from: { x: -60, y: 0 },
    className: "absolute top-[58%] left-[4%] w-[118px] h-[118px]",
  },
  {
    id: "bot-center-left",
    src: "/house6.jpg",
    alt: "Hillside Retreat",
    href: heroProjectLinks[4]?.href ?? "/work",
    depth: 0.05,
    from: { x: 0, y: 80 },
    className: "absolute bottom-[2%] left-[14%] w-[210px] h-[185px]",
  },
  {
    id: "bot-right-1",
    src: "/house7.jpg",
    alt: "Timber Gate House",
    href: heroProjectLinks[5]?.href ?? "/work",
    depth: 0.08,
    from: { x: 0, y: 80 },
    className: "absolute bottom-[6%] right-[18%] w-[150px] h-[175px]",
  },
  {
    id: "bot-right-2",
    src: "/house8.jpg",
    alt: "Vertical Screen Tower",
    href: heroProjectLinks[6]?.href ?? "/work",
    depth: 0.05,
    from: { x: 80, y: 0 },
    className: "absolute bottom-[1%] right-0 w-[195px] h-[310px]",
  },
];

const WIPE_DIRS = [
  "inset(0 100% 0 0)", // wipe from left
  "inset(0 0 0 100%)", // wipe from right
  "inset(100% 0 0 0)", // wipe from top
] as const;

export default function ZiloHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const imgRefs = useRef<(HTMLDivElement | null)[]>([]);
  const topRef = useRef<HTMLDivElement>(null); // always-on-top layer (wipes in)
  const botRef = useRef<HTMLDivElement>(null); // sits underneath
  const mouse = useRef({ x: 0, y: 0 });
  const rafRef = useRef<number | null>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const busyRef = useRef(false);
  const dirRef = useRef(0);
  const bgIdxRef = useRef(0);

  const [topSrc, setTopSrc] = useState(PROJECTS[0].src);
  const [botSrc, setBotSrc] = useState(PROJECTS[0].src);
  const [dotIdx, setDotIdx] = useState(0);

  // ── Shared wipe function ───────────────────────────────────────────────────
  // Wipes `topRef` in from a direction, then schedules next cycle.
  function wipeIn(src: string, idx: number, onDone?: () => void) {
    if (!topRef.current) return;

    const startClip = WIPE_DIRS[dirRef.current % WIPE_DIRS.length];
    dirRef.current++;

    // Load new image into top layer, start clipped
    setTopSrc(src);
    setDotIdx(idx);

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        if (!topRef.current) return;
        gsap.set(topRef.current, { clipPath: startClip, zIndex: 6 });
        gsap.to(topRef.current, {
          clipPath: "inset(0% 0% 0% 0%)",
          duration: 1.1,
          ease: "expo.inOut",
          onComplete: () => {
            // Promote: copy top src to bottom, reset top clip
            setBotSrc(src);
            gsap.set(topRef.current!, {
              clipPath: "inset(0% 0% 0% 0%)",
              zIndex: 5,
            });
            busyRef.current = false;
            onDone?.();
          },
        });
      });
    });
  }

  // ── Phase 1: Card entry ────────────────────────────────────────────────────
  useEffect(() => {
    PROJECTS.forEach((proj, i) => {
      const el = imgRefs.current[i];
      if (!el) return;
      gsap.set(el, { opacity: 0, x: proj.from.x, y: proj.from.y, scale: 0.88 });
    });

    const tl = gsap.timeline({ delay: 0.2 });
    PROJECTS.forEach((_, i) => {
      const el = imgRefs.current[i];
      if (!el) return;
      tl.to(
        el,
        { opacity: 1, x: 0, y: 0, scale: 1, duration: 1.0, ease: "expo.out" },
        i * 0.1,
      );
    });

    // Phase 2: random card expands to bg
    tl.call(
      () => {
        const chosen = Math.floor(Math.random() * PROJECTS.length);
        bgIdxRef.current = chosen;

        // Fade out chosen card, wipe its image into the background
        const cardEl = imgRefs.current[chosen];
        if (cardEl) gsap.to(cardEl, { opacity: 0, duration: 0.4 });

        wipeIn(PROJECTS[chosen].src, chosen, () => {
          revealText();
          scheduleNext();
        });
      },
      [],
      "+=0.5",
    );

    return () => {
      tl.kill();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function revealText() {
    gsap.to(".hero-line", {
      opacity: 1,
      y: 0,
      duration: 0.9,
      ease: "power3.out",
      stagger: 0.13,
    });
    gsap.to(".hero-cta", { opacity: 1, duration: 0.7, delay: 0.5 });
  }

  function scheduleNext() {
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      if (busyRef.current) return;
      busyRef.current = true;
      bgIdxRef.current = (bgIdxRef.current + 1) % PROJECTS.length;
      const next = bgIdxRef.current;
      wipeIn(PROJECTS[next].src, next, scheduleNext);
    }, 5000);
  }

  // ── Mouse parallax ─────────────────────────────────────────────────────────
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const onMove = (e: MouseEvent) => {
      const r = container.getBoundingClientRect();
      mouse.current.x = ((e.clientX - r.left) / r.width - 0.5) * 2;
      mouse.current.y = ((e.clientY - r.top) / r.height - 0.5) * 2;
    };

    const tick = () => {
      PROJECTS.forEach((proj, i) => {
        const el = imgRefs.current[i];
        if (!el) return;
        gsap.to(el, {
          x: -mouse.current.x * proj.depth * 90,
          y: -mouse.current.y * proj.depth * 90,
          duration: 1.6,
          ease: "power2.out",
          overwrite: "auto",
        });
      });
      rafRef.current = requestAnimationFrame(tick);
    };

    container.addEventListener("mousemove", onMove);
    rafRef.current = requestAnimationFrame(tick);

    return () => {
      container.removeEventListener("mousemove", onMove);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full h-[100svh] bg-black overflow-hidden select-none"
    >
      {/* ── Bottom bg layer (sits still) ──────────────────────────────────── */}
      <div ref={botRef} className="absolute inset-0 z-[4] overflow-hidden">
        <Image
          src={botSrc}
          alt=""
          fill
          sizes="100vw"
          priority
          className="object-cover brightness-[0.42]"
          draggable={false}
        />
      </div>

      {/* ── Top layer (wipes in over bottom) ──────────────────────────────── */}
      <div
        ref={topRef}
        className="absolute inset-0 z-[5] overflow-hidden"
        style={{ clipPath: "inset(0% 0% 0% 0%)" }}
      >
        <Image
          src={topSrc}
          alt=""
          fill
          sizes="100vw"
          className="object-cover brightness-[0.42]"
          draggable={false}
        />
      </div>

      {/* ── Vignette ──────────────────────────────────────────────────────── */}
      <div
        className="absolute inset-0 z-[7] pointer-events-none
                      bg-gradient-to-b from-black/30 via-transparent to-black/60"
      />

      {/* ── Floating cards ────────────────────────────────────────────────── */}
      {PROJECTS.map((proj, i) => (
        <div
          key={proj.id}
          ref={(el) => {
            imgRefs.current[i] = el;
          }}
          className={`${proj.className} z-[10] will-change-transform hidden sm:block`}
        >
          <Link
            href={proj.href}
            className="group block w-full h-full relative overflow-hidden"
            aria-label={`View project: ${proj.alt}`}
          >
            <Image
              src={proj.src}
              alt={proj.alt}
              fill
              sizes="20vw"
              className="object-cover grayscale brightness-75
                         group-hover:grayscale-0 group-hover:brightness-95
                         transition-all duration-700 ease-in-out"
              draggable={false}
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
            <span
              className="absolute bottom-0 left-0 right-0 text-center
              bg-black/60 backdrop-blur-sm text-white text-[8px] font-light
              tracking-[0.22em] uppercase px-2 py-[5px]
              translate-y-full group-hover:translate-y-0
              transition-transform duration-500 ease-out"
            >
              {proj.alt}
            </span>
          </Link>
        </div>
      ))}

      {/* ── Hero copy ─────────────────────────────────────────────────────── */}
      <div className="absolute inset-0 z-[20] flex flex-col items-center justify-center pointer-events-none gap-1 px-4">
        <h1
          className="hero-line text-white text-center font-extralight leading-[1.1]
                       tracking-tight opacity-0 translate-y-5"
          style={{ fontSize: "clamp(1.6rem, 4.5vw, 4.5rem)" }}
        >
          We make nature
        </h1>
        <h1
          className="hero-line text-white text-center font-extralight leading-[1.1]
                       tracking-tight opacity-0 translate-y-5"
          style={{ fontSize: "clamp(1.6rem, 4.5vw, 4.5rem)" }}
        >
          and architecture coexist
        </h1>
      </div>

      {/* ── CTA ───────────────────────────────────────────────────────────── */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-[20] hero-cta opacity-0">
        <Link
          href="/work"
          className="text-white text-[11px] font-light tracking-[0.3em] uppercase
                     flex items-center gap-2 group"
        >
          Learn More
          <span className="inline-block group-hover:-translate-x-1 transition-transform duration-300">
            ←
          </span>
        </Link>
      </div>

      {/* ── Indicator dots ────────────────────────────────────────────────── */}
      <div className="absolute bottom-8 right-6 sm:right-10 z-[20] flex gap-1.5 items-center">
        {PROJECTS.map((_, i) => (
          <div
            key={i}
            className={`h-[2px] rounded-full transition-all duration-500 ease-out ${
              i === dotIdx ? "w-6 bg-white" : "w-2 bg-white/20"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
