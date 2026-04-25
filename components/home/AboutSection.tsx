"use client";

import { useEffect, useRef, useState } from "react";
import RevealImage from "@/components/ui/RevealImage";

// ─────────────────────────────────────────────
// Animated counter hook
// ─────────────────────────────────────────────
function useCountUp(
  target: number,
  suffix = "",
  inView = false,
  duration = 1800,
) {
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!inView) return;
    let start: number | null = null;
    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.floor(eased * target) + (progress === 1 ? suffix : ""));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, target, suffix, duration]);

  return display;
}

// ─────────────────────────────────────────────
// Stat cell
// ─────────────────────────────────────────────
function StatCell({
  value,
  suffix = "",
  label,
  inView,
}: {
  value: number;
  suffix?: string;
  label: string;
  inView: boolean;
}) {
  const count = useCountUp(value, suffix, inView);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100%",
        padding: "2rem",
      }}
      className="bg-burnt-orange"
    >
      <span
        style={{
          fontSize: "clamp(3.5rem, 6vw, 5.5rem)",
          fontWeight: 300,
          letterSpacing: "-0.04em",
          lineHeight: 1,
          color: "#ffffff",
        }}
      >
        {count}
      </span>
      <span
        style={{
          marginTop: "0.6rem",
          fontSize: "0.75rem",
          letterSpacing: "0.02em",
          color: "rgba(255,255,255,0.55)",
          fontWeight: 400,
        }}
      >
        {label}
      </span>
    </div>
  );
}

// ─────────────────────────────────────────────
// Article data
// ─────────────────────────────────────────────
const articles = [
  {
    date: "Nov 24, 2025",
    title: "When Walls Become Words – buildings as silent storytellers.",
    img: "/house8.jpg",
    alt: "Woman silhouette portrait",
  },
  {
    date: "Nov 24, 2025",
    title:
      "Fragments of Infinity – architecture as humanity's attempt at permanence.",
    img: "/house9.jpg",
    alt: "Two silhouettes in an office",
  },
  {
    date: "Nov 24, 2025",
    title: "The Weight of Empty Space – understanding the poetry of voids.",
    img: "/house10.jpg",
    alt: "Hand touching a topographic map",
  },
  {
    date: "Nov 24, 2025",
    title: "Matter and Meaning – why materials carry more than texture.",
    img: "/house11.jpg",
    alt: "Blurred portrait with white band",
  },
];

const BORDER = "1px solid rgba(255,255,255,0.08)";

// ─────────────────────────────────────────────
// Main export
// ─────────────────────────────────────────────
export default function StatsAndArticlesSection() {
  const statsRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section style={{ backgroundColor: "#0a0a0a", width: "100%" }}>
      {/* ══════════════════════════════════════
          PART 1 — STATS BENTO GRID
      ══════════════════════════════════════ */}
      <div ref={statsRef} className="mb-48">
        {/* Row 1: image | stat | image | stat */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            borderBottom: BORDER,
          }}
        >
          {/* image */}
          <div
            style={{ borderRight: BORDER, overflow: "hidden", lineHeight: 0 }}
          >
            <RevealImage
              src="/work1.jpg"
              alt="Dark modern house by water"
              className="w-full h-full object-cover"
              style={{ aspectRatio: "4/3.2", width: "100%", display: "block" }}
              direction="right"
            />
          </div>

          {/* 78 */}
          <div style={{ borderRight: BORDER, minHeight: "220px" }}>
            <StatCell value={78} label="Projects Finished" inView={inView} />
          </div>

          {/* image */}
          <div
            style={{ borderRight: BORDER, overflow: "hidden", lineHeight: 0 }}
          >
            <RevealImage
              src="/work2.jpg"
              alt="House in forest at night"
              className="w-full h-full object-cover"
              style={{ aspectRatio: "4/3.2", width: "100%", display: "block" }}
              direction="left"
            />
          </div>

          {/* 45 */}
          <div style={{ minHeight: "220px" }}>
            <StatCell value={45} label="Worldwide Partners" inView={inView} />
          </div>
        </div>

        {/* Row 2: stat | image | stat | image */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            borderBottom: BORDER,
          }}
        >
          {/* 115+ */}
          <div style={{ borderRight: BORDER, minHeight: "220px" }}>
            <StatCell
              value={115}
              suffix="+"
              label="Happy Clients"
              inView={inView}
            />
          </div>

          {/* image */}
          <div
            style={{ borderRight: BORDER, overflow: "hidden", lineHeight: 0 }}
          >
            <RevealImage
              src="/work3.jpg"
              alt="Concrete house at dusk"
              className="w-full h-full object-cover"
              style={{ aspectRatio: "4/3.2", width: "100%", display: "block" }}
              direction="right"
            />
          </div>

          {/* 29 */}
          <div style={{ borderRight: BORDER, minHeight: "220px" }}>
            <StatCell value={29} label="Countries Visited" inView={inView} />
          </div>

          {/* image */}
          <div style={{ overflow: "hidden", lineHeight: 0 }}>
            <RevealImage
              src="/work4.jpg"
              alt="Glass house in nature"
              className="w-full h-full object-cover"
              style={{ aspectRatio: "4/3.2", width: "100%", display: "block" }}
              direction="left"
            />
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════
          PART 2 — ARTICLES GRID
      ══════════════════════════════════════ */}
      <div className="mb-48">
        {/* 4-column article grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            borderBottom: BORDER,
          }}
        >
          {articles.map((article, i) => (
            <div
              key={i}
              style={{
                borderRight: i < articles.length - 1 ? BORDER : "none",
                cursor: "pointer",
              }}
            >
              {/* Image — full bleed, tall */}
              <div style={{ overflow: "hidden", lineHeight: 0 }}>
                <RevealImage
                  src={article.img}
                  alt={article.alt}
                  className="w-full object-cover"
                  style={{
                    aspectRatio: "3/3.6",
                    width: "100%",
                    display: "block",
                  }}
                  direction={i % 2 === 0 ? "right" : "left"}
                />
              </div>

              {/* Text block */}
              <div
                style={{
                  padding: "1.1rem 1.25rem 1.4rem",
                  borderTop: BORDER,
                }}
              >
                <p
                  style={{
                    fontSize: "0.7rem",
                    color: "rgba(255,255,255,0.45)",
                    marginBottom: "0.45rem",
                    fontWeight: 400,
                    letterSpacing: "0.01em",
                  }}
                >
                  {article.date}
                </p>
                <p
                  style={{
                    fontSize: "0.82rem",
                    color: "#ffffff",
                    lineHeight: 1.5,
                    fontWeight: 400,
                    letterSpacing: "-0.01em",
                    margin: 0,
                  }}
                >
                  {article.title}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* All Articles ↗ footer row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "1.75rem 0",
          }}
        >
          <a
            href="/articles"
            style={{
              color: "rgba(255,255,255,0.85)",
              fontSize: "0.85rem",
              letterSpacing: "0.02em",
              fontWeight: 400,
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              gap: "0.3rem",
            }}
          >
            All Articles
            <span style={{ fontSize: "1rem", lineHeight: 1 }}>↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}
