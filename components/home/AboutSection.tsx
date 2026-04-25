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
        padding: "2rem 1rem",
        minHeight: "180px",
      }}
      className="bg-burnt-orange"
    >
      <span
        style={{
          fontSize: "clamp(2.8rem, 8vw, 5.5rem)",
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
          fontSize: "clamp(0.65rem, 1.5vw, 0.75rem)",
          letterSpacing: "0.02em",
          color: "rgba(255,255,255,0.55)",
          fontWeight: 400,
          textAlign: "center",
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
      <style>{`
        /* ── Stats grid ── */
        .stats-row {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          border-bottom: ${BORDER};
        }
        .stats-cell-border-right {
          border-right: ${BORDER};
        }

        /* ── Articles grid ── */
        .articles-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          border-bottom: ${BORDER};
        }
        .article-card-border-right {
          border-right: ${BORDER};
        }

        /* ── Tablet: 768px–1023px → articles go 2 columns, stats stay 4 ── */
        @media (max-width: 1023px) {
          .articles-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .article-card-border-right {
            border-right: none;
          }
          .articles-grid > *:nth-child(odd) {
            border-right: ${BORDER};
          }
          .articles-grid > *:nth-child(n+3) {
            border-top: ${BORDER};
          }
        }

        /* ── Mobile: <640px → 2 columns for stats, 1 column for articles ── */
        @media (max-width: 639px) {
          .stats-row {
            grid-template-columns: repeat(2, 1fr);
          }
          .stats-row > *:nth-child(odd) {
            border-right: ${BORDER};
          }
          .stats-row > *:nth-child(even) {
            border-right: none;
          }
          .stats-row > *:nth-child(n+3) {
            border-top: ${BORDER};
          }

          .articles-grid {
            grid-template-columns: 1fr;
          }
          .article-card-border-right,
          .articles-grid > * {
            border-right: none !important;
            border-top: ${BORDER};
          }
          .articles-grid > *:first-child {
            border-top: none;
          }

          /* On single-column, images don't need forced aspect ratio that's too tall */
          .article-img-wrap img {
            aspect-ratio: 16/9 !important;
          }
        }
      `}</style>

      {/* ══════════════════════════════════════
          INTRO WRITE-UP
      ══════════════════════════════════════ */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          padding: "7rem 1.5rem 5rem",
          maxWidth: "540px",
          margin: "0 auto",
        }}
      >
        <p
          style={{
            fontSize: "0.65rem",
            letterSpacing: "0.18em",
            color: "rgba(255,255,255,0.35)",
            fontWeight: 400,
            textTransform: "uppercase",
            marginBottom: "1.5rem",
          }}
        >
          Our Commitment
        </p>
        <h2
          style={{
            fontSize: "clamp(1.4rem, 3vw, 2rem)",
            fontWeight: 300,
            color: "#ffffff",
            lineHeight: 1.45,
            letterSpacing: "-0.025em",
            margin: "0 0 1.5rem",
          }}
        >
          We believe great architecture is built on trust, intention, and an
          unrelenting pursuit of the essential.
        </h2>
        <p
          style={{
            fontSize: "0.8rem",
            color: "rgba(255,255,255,0.45)",
            lineHeight: 1.8,
            fontWeight: 400,
            maxWidth: "400px",
            margin: 0,
          }}
        >
          Every project we take on is a long-term relationship. We listen
          carefully, design deliberately, and stand behind our work long after
          the doors open.
        </p>
      </div>

      {/* ══════════════════════════════════════
          PART 1 — STATS BENTO GRID
      ══════════════════════════════════════ */}
      <div ref={statsRef} className="mb-48">
        {/* Row 1: image | stat | image | stat */}
        <div className="stats-row">
          <div
            className="stats-cell-border-right"
            style={{ overflow: "hidden", lineHeight: 0 }}
          >
            <RevealImage
              src="/work1.jpg"
              alt="Dark modern house by water"
              className="w-full h-full object-cover"
              style={{ aspectRatio: "4/3.2", width: "100%", display: "block" }}
              direction="right"
            />
          </div>

          <div
            className="stats-cell-border-right"
            style={{ minHeight: "180px" }}
          >
            <StatCell value={78} label="Projects Finished" inView={inView} />
          </div>

          <div
            className="stats-cell-border-right"
            style={{ overflow: "hidden", lineHeight: 0 }}
          >
            <RevealImage
              src="/work2.jpg"
              alt="House in forest at night"
              className="w-full h-full object-cover"
              style={{ aspectRatio: "4/3.2", width: "100%", display: "block" }}
              direction="left"
            />
          </div>

          <div style={{ minHeight: "180px" }}>
            <StatCell value={45} label="Worldwide Partners" inView={inView} />
          </div>
        </div>

        {/* Row 2: stat | image | stat | image */}
        <div className="stats-row">
          <div
            className="stats-cell-border-right"
            style={{ minHeight: "180px" }}
          >
            <StatCell
              value={115}
              suffix="+"
              label="Happy Clients"
              inView={inView}
            />
          </div>

          <div
            className="stats-cell-border-right"
            style={{ overflow: "hidden", lineHeight: 0 }}
          >
            <RevealImage
              src="/work3.jpg"
              alt="Concrete house at dusk"
              className="w-full h-full object-cover"
              style={{ aspectRatio: "4/3.2", width: "100%", display: "block" }}
              direction="right"
            />
          </div>

          <div
            className="stats-cell-border-right"
            style={{ minHeight: "180px" }}
          >
            <StatCell value={29} label="Countries Visited" inView={inView} />
          </div>

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
        <div className="articles-grid">
          {articles.map((article, i) => (
            <div
              key={i}
              className={
                i < articles.length - 1 ? "article-card-border-right" : ""
              }
              style={{ cursor: "pointer" }}
            >
              {/* Image */}
              <div
                className="article-img-wrap"
                style={{ overflow: "hidden", lineHeight: 0 }}
              >
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
            padding: "1.75rem 1rem",
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
