"use client";

import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { Project } from "@/lib/projects";
import Image from "next/image";

type ProjectModalProps = {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
};

export default function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useLayoutEffect(() => {
    const overlay = overlayRef.current;
    const content = contentRef.current;

    if (!overlay || !content) {
      return;
    }

    if (isOpen) {
      setIsVisible(true);

      const scrollY = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = "100%";

      const ctx = gsap.context(() => {
        gsap.set(overlay, { opacity: 0 });
        gsap.set(content, { opacity: 0, y: 24 });
        gsap.to(overlay, { opacity: 1, duration: 0.3, ease: "power2.out" });
        gsap.to(content, {
          opacity: 1,
          y: 0,
          duration: 0.45,
          ease: "power2.out",
          delay: 0.08,
        });
      }, overlay);

      return () => ctx.revert();
    }

    const scrollY = document.body.style.top;
    document.body.style.position = "";
    document.body.style.top = "";
    document.body.style.width = "";
    window.scrollTo(0, parseInt(scrollY || "0", 10) * -1);

    const ctx = gsap.context(() => {
      gsap.to(overlay, {
        opacity: 0,
        duration: 0.2,
        ease: "power2.in",
        onComplete: () => setIsVisible(false),
      });
      gsap.to(content, {
        opacity: 0,
        y: 24,
        duration: 0.2,
        ease: "power2.in",
      });
    }, overlay);

    return () => ctx.revert();
  }, [isOpen]);

  if (!isVisible || !project) return null;

  return (
    // Scroll happens HERE on the overlay, not on the inner panel
    <div
      ref={overlayRef}
      className="fixed inset-0 z-50 overflow-y-auto bg-black/40 backdrop-blur-sm"
      style={{ overscrollBehavior: "contain" }}
      onClick={onClose}
    >
      {/* Centering wrapper — not the scroll container */}
      <div className="flex min-h-full items-end justify-center p-0 md:items-center md:p-6">
        <div
          ref={contentRef}
          className="relative w-full max-w-5xl  bg-white "
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 flex h-8 w-8 items-center justify-center rounded-full border border-black/15 bg-white text-black/50 hover:bg-black/5 transition-colors text-lg"
          >
            ×
          </button>

          {/* Hero — split header */}
          <div className="grid md:grid-cols-[1fr_1.3fr] border-b border-black/8">
            <div className="flex flex-col justify-between p-8 md:p-10 border-b md:border-b-0 md:border-r border-black/8">
              <div>
                <p className="text-[10px] uppercase tracking-[0.1em] text-black/35 mb-3">
                  {project.category} · {project.location}
                </p>
                <h2 className="text-2xl md:text-3xl font-medium leading-tight tracking-[-0.04em] mb-5">
                  {project.title}
                </h2>
                <p className="text-sm leading-7 text-black/58">{project.description}</p>
              </div>
              <div className="flex flex-wrap gap-2 mt-8">
                <span className="text-[11px] bg-[#f5ece6] text-[#a04b1e] px-3 py-1 rounded-full">
                  {project.service}
                </span>
                <span className="text-[11px] border border-black/12 text-black/50 px-3 py-1 rounded-full">
                  {project.category}
                </span>
                <span className="text-[11px] border border-black/12 text-black/50 px-3 py-1 rounded-full">
                  {project.completed}
                </span>
              </div>
            </div>
            <div className="relative aspect-[1.4] md:aspect-auto md:min-h-[320px] overflow-hidden bg-neutral-100">
              <Image src={project.heroImage} alt={project.title} fill className="object-cover" />
            </div>
          </div>

          {/* Stats bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 border-b border-black/8">
            {[
              { label: "Floor area", value: project.size },
              { label: "Duration", value: project.duration ?? "—" },
              { label: "Service", value: project.service },
              { label: "Client", value: project.client },
            ].map(({ label, value }, i) => (
              <div
                key={label}
                className={`px-6 py-4 border-r border-black/8 last:border-r-0 ${i < 2 ? "border-b md:border-b-0" : ""}`}
              >
                <p className="text-[10px] uppercase tracking-[0.08em] text-black/35 mb-1.5">{label}</p>
                <p className="text-sm font-medium text-black">{value}</p>
              </div>
            ))}
          </div>

          <div className="p-8 md:p-10 space-y-12">

            {/* Overview + Scope */}
            <div className="grid md:grid-cols-2 gap-10">
              <div>
                <p className="text-[10px] uppercase tracking-[0.1em] text-black/35 mb-4">Overview</p>
                <p className="text-sm leading-7 text-black/60">{project.overview}</p>

                {project.timeline && (
                  <div className="mt-8">
                    <p className="text-[10px] uppercase tracking-[0.1em] text-black/35 mb-4">Timeline</p>
                    <div className="flex gap-0">
                      {project.timeline.map((phase, i) => (
                        <div key={i} className="flex-1">
                          <div
                            className={`w-1.5 h-1.5 rounded-full mb-2 ${
                              i <= (project.currentPhase ?? 99)
                                ? "bg-[var(--burnt-orange)]"
                                : "bg-black/15"
                            }`}
                          />
                          <p className="text-[10px] text-black/35 uppercase tracking-[0.06em]">{phase.label}</p>
                          <p className="text-xs font-medium text-black mt-0.5">{phase.date}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div>
                <p className="text-[10px] uppercase tracking-[0.1em] text-black/35 mb-4">Project scope</p>
                <dl className="space-y-0">
                  {[
                    { k: "Scope", v: project.scopeDetail ?? project.service },
                    { k: "Structure", v: project.structure ?? "—" },
                    { k: "Façade", v: project.facade ?? "—" },
                    { k: "Contractor", v: project.contractor ?? "—" },
                  ].map(({ k, v }) => (
                    <div key={k} className="flex justify-between items-center py-2.5 border-b border-black/6 last:border-b-0">
                      <dt className="text-xs text-black/40">{k}</dt>
                      <dd className="text-xs font-medium text-black text-right max-w-[55%]">{v}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>

            {/* Vision + detail image */}
            <div className="grid md:grid-cols-2 gap-10 items-start pt-2 border-t border-black/8">
              <div>
                <p className="text-[10px] uppercase tracking-[0.1em] text-black/35 mb-4">Design vision</p>
                <p className="text-sm leading-7 text-black/60">{project.vision}</p>
                <blockquote className="mt-8 border-l-2 border-[var(--burnt-orange)] pl-5">
                  <p className="text-sm leading-7 italic text-black/70">&quot;{project.quote}&quot;</p>
                  <cite className="block mt-3 text-[10px] uppercase tracking-[0.06em] text-black/35 not-italic">
                    — Lead Designer, Studio
                  </cite>
                </blockquote>
              </div>
              <div className="relative aspect-[1.1] overflow-hidden rounded-xl bg-neutral-100">
                <Image src={project.detailImage} alt={`${project.title} detail`} fill className="object-cover" />
                <span className="absolute bottom-3 left-4 text-[10px] uppercase tracking-[0.08em] text-white/65">
                  Interior detail
                </span>
              </div>
            </div>

            {/* Key features */}
            <div className="pt-2 border-t border-black/8">
              <p className="text-[10px] uppercase tracking-[0.1em] text-black/35 mb-5">Key features</p>
              <div className="grid sm:grid-cols-2 gap-3">
                {project.features.map((feature, i) => (
                  <div key={i} className="flex gap-3 items-start p-3.5 border border-black/8 rounded-lg">
                    <span className="mt-1 w-1.5 h-1.5 rounded-full bg-[var(--burnt-orange)] flex-shrink-0" />
                    <p className="text-xs leading-6 text-black/58">{feature}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Gallery */}
            <div className="pt-2 border-t border-black/8">
              <p className="text-[10px] uppercase tracking-[0.1em] text-black/35 mb-5">Gallery</p>
              <div className="grid grid-cols-[1.4fr_1fr] gap-3">
                <div className="relative aspect-[0.8] overflow-hidden rounded-xl bg-neutral-100">
                  <Image src={project.gallery[0]} alt={`${project.title} 1`} fill className="object-cover" />
                </div>
                <div className="grid grid-rows-2 gap-3">
                  {project.gallery.slice(1, 3).map((img, i) => (
                    <div key={i} className="relative overflow-hidden rounded-xl bg-neutral-100">
                      <Image src={img} alt={`${project.title} ${i + 2}`} fill className="object-cover" />
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
