"use client";

import { useEffect, useRef, useState, type KeyboardEvent } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight, ArrowUpRight, X } from "lucide-react";
import { processSteps } from "@/lib/studio";

function ProcessDrawing({ index }: { index: number }) {
  return (
    <svg
      viewBox="0 0 260 240"
      fill="none"
      className="process-drawing"
      aria-hidden="true"
    >
      <g stroke="currentColor" strokeWidth=".8">
        {index === 0 ? (
          <>
            {[0, 1, 2, 3].map((i) => (
              <ellipse
                key={i}
                cx={130}
                cy={120}
                rx={24 + i * 16}
                ry={87}
                transform={`rotate(${i * 21} 130 120)`}
              />
            ))}
            <circle cx="130" cy="33" r="5" fill="currentColor" />
          </>
        ) : index === 1 ? (
          <>
            {[0, 1, 2, 3].map((i) => (
              <circle key={i} cx={80 + i * 28} cy={120} r={63} />
            ))}
            <circle cx="130" cy="120" r="93" />
          </>
        ) : index === 2 ? (
          <>
            <path d="m130 35 85 85-85 85-85-85Z" />
            {[
              [130, 35],
              [215, 120],
              [130, 205],
              [45, 120],
            ].map(([cx, cy]) => (
              <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="27" />
            ))}
            <circle cx="130" cy="120" r="68" />
          </>
        ) : index === 3 ? (
          <>
            {[0, 1, 2, 3, 4].map((i) => (
              <path
                key={i}
                d={`M${40 + i * 20} ${180 - i * 20}h100v-100h-100Z`}
              />
            ))}
            <path d="m40 180 80-80m20 80 80-80" />
          </>
        ) : (
          <>
            {[0, 1, 2, 3, 4].map((i) => (
              <circle key={i} cx="130" cy="120" r={20 + i * 18} />
            ))}
            <path d="M40 120h180M130 30v180" />
          </>
        )}
      </g>
    </svg>
  );
}

export default function ProcessSection() {
  const [selected, setSelected] = useState<number | null>(null);
  const [active, setActive] = useState(0);
  const rail = useRef<HTMLDivElement>(null);
  const userScroll = useRef(false);
  const dialog = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLElement | null>(null);
  useEffect(() => {
    if (selected !== null) {
      setActive(selected);
      if (!dialog.current?.open) dialog.current?.showModal();
    } else if (dialog.current?.open) dialog.current.close();
  }, [selected]);
  useEffect(() => {
    if (selected === null) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [selected]);
  const show = (index: number) => {
    trigger.current = document.activeElement as HTMLElement;
    setActive(index);
    setSelected(index);
  };
  const close = () => {
    setSelected(null);
    trigger.current?.focus({ preventScroll: true });
  };
  const go = (index: number) => {
    const safe = Math.max(0, Math.min(processSteps.length - 1, index));
    userScroll.current = false;
    setActive(safe);
    rail.current?.children[safe]?.scrollIntoView({
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "instant"
        : "smooth",
      block: "nearest",
      inline: "start",
    });
  };
  const keys = (event: KeyboardEvent<HTMLDialogElement>) => {
    if (event.key === "ArrowRight")
      setSelected((value) =>
        value === null ? null : (value + 1) % processSteps.length,
      );
    if (event.key === "ArrowLeft")
      setSelected((value) =>
        value === null
          ? null
          : (value + processSteps.length - 1) % processSteps.length,
      );
  };
  return (
    <section className="site-gutter process-section">
      <div className="process-ground">
        <div className="section-rule">Workflow</div>
        <p className="process-caption">The Archademy design process</p>
        <div className="process-composition">
          <aside>
            <p>Phases</p>
            {processSteps.map((step, index) => (
              <button
                type="button"
                key={step.title}
                onClick={() => go(index)}
                aria-pressed={active === index}
              >
                <span>{String(index + 1).padStart(2, "0")}</span>
                {step.title}
              </button>
            ))}
          </aside>
          <div className="process-main">
            <h2 data-reveal="text">Our process</h2>
            <div
              ref={rail}
              className="process-rail"
              onPointerDown={() => {
                userScroll.current = true;
              }}
              onWheel={() => {
                userScroll.current = true;
              }}
              onScroll={() => {
                if (!userScroll.current) return;
                const element = rail.current;
                if (!element) return;
                const first = element.children[0] as HTMLElement;
                setActive(
                  Math.min(
                    processSteps.length - 1,
                    Math.round(element.scrollLeft / (first.offsetWidth + 12)),
                  ),
                );
              }}
            >
              {processSteps.map((step, index) => (
                <button
                  type="button"
                  key={step.title}
                  onClick={() => show(index)}
                  className={`process-card process-card-${index}`}
                >
                  <div className="process-card-top">
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <p>{step.line}</p>
                  </div>
                  <ProcessDrawing index={index} />
                  <div className="process-card-bottom">
                    <h3>{step.title}</h3>
                    <ArrowUpRight size={22} strokeWidth={1} />
                  </div>
                </button>
              ))}
            </div>
            <div className="process-controls">
              <button
                type="button"
                disabled={active === 0}
                aria-label="Previous phase"
                onClick={() => go(active - 1)}
              >
                <ArrowLeft size={18} />
              </button>
              <button
                type="button"
                disabled={active === processSteps.length - 1}
                aria-label="Next phase"
                onClick={() => go(active + 1)}
              >
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
      <dialog
        data-lenis-prevent
        ref={dialog}
        className="process-dialog"
        aria-labelledby="process-title"
        onKeyDown={keys}
        onCancel={(event) => {
          event.preventDefault();
          close();
        }}
        onClick={(event) => {
          if (event.target === dialog.current) close();
        }}
        onClose={() => setSelected(null)}
      >
        {selected !== null && (
          <div className="process-dialog-body">
            <button
              type="button"
              className="process-dialog-close"
              onClick={close}
              aria-label="Close phase"
            >
              <X size={25} strokeWidth={1} />
            </button>
            <div className="process-dialog-photo">
              <Image
                src={processSteps[selected].image}
                alt=""
                fill
                sizes="(max-width: 767px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="process-dialog-copy">
              <span>Phase {String(selected + 1).padStart(2, "0")} / 05</span>
              <h2 id="process-title">{processSteps[selected].title}</h2>
              <p>{processSteps[selected].description}</p>
              <div className="process-controls">
                <button
                  type="button"
                  aria-label="Previous phase"
                  onClick={() => setSelected((selected + 4) % 5)}
                >
                  <ArrowLeft size={18} />
                </button>
                <button
                  type="button"
                  aria-label="Next phase"
                  onClick={() => setSelected((selected + 1) % 5)}
                >
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          </div>
        )}
      </dialog>
    </section>
  );
}
