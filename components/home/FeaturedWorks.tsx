import ProjectCard from "@/components/work/ProjectCard";
import RevealImage from "@/components/ui/RevealImage";

import { projects } from "@/lib/projects";
import AnimatedPillButton from "../ui/AnimatedPillButton";

const homepageProjects = projects.slice(0, 7);

// ─── Section ──────────────────────────────────────────────────────────────────
export default function FeaturedWorksSection() {
  const [p0, p1, p2, p3, p4, p5, p6] = homepageProjects;

  return (
    <section className="bg-[#0f0f0f] w-full">
      {/* ── Intro ──────────────────────────────────────────────────────────── */}
      <div className="max-w-2xl mx-auto px-6 md:px-10 pt-24 pb-20 text-center">
        
        <p className="text-white/75 text-3xl md:text-[1.80rem] font-light leading-[1.75] tracking-[-0.01em]">
          at <span className="text-burnt-orange">Archademy</span> we create design beyond visuals — environments that
          <br className="hidden md:block" />
          enhance human experience.
        </p>

        {/* Thin divider */}
        <div className="w-px h-10 bg-white/12 mx-auto mt-12" />

        <p className="mt-12 text-white/38 text-[13px] md:text-[20px] font-light leading-[1.95] max-w-lg mx-auto">
          From residential and commercial developments to bespoke architectural
          concepts — each project shaped by context, purpose, and craft.
        </p>

        <p className="mt-8 text-burnt-orange text-[18px] font-light tracking-[0.04em]">
          Here&apos;s a look at some of our best work.
        </p>
      </div>

      {/* ── Grid ───────────────────────────────────────────────────────────── */}
      <div className="grid gap-[3px]">
        {/* Row 1 — 4 cols on md+, 2 on mobile */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-[3px]">
          <ProjectCard project={p0} className="h-[50vw] md:h-[500px]" />
          <ProjectCard
            project={p1}
            className="h-[50vw] md:h-[650px] md:-mb-[140px] md:z-10 md:relative"
          />
          <ProjectCard project={p2} className="h-[50vw] md:h-[600px]" />
          <ProjectCard project={p3} className="h-[50vw] md:h-[500px]" />
        </div>

        {/* Row 2 — 3 cols on md+, 2 on mobile */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-[3px] md:mt-[140px]">
          <ProjectCard project={p4} className="h-[50vw] md:h-[580px]" />
          <ProjectCard project={p5} className="h-[50vw] md:h-[580px]" />
          {p6 && (
            <ProjectCard
              project={p6}
              className="col-span-2 md:col-span-1 h-[40vw] md:h-[580px]"
            />
          )}
        </div>
      </div>

      {/* ── All Projects link ───────────────────────────────────────────────── */}
      <div className="flex justify-center py-20">
        <AnimatedPillButton href="/work" label="All Projects" />
      </div>

      {/* ── Full-bleed atmospheric image ─────────────────────────────────────── */}
      <div className="w-full h-[56vw] max-h-[800px] min-h-[280px] relative overflow-hidden">
        <RevealImage
          src="/house9.jpg"
          alt="Archademy atmosphere"
          className="absolute inset-0 w-full h-full object-cover brightness-[0.5]"
        />
      </div>
    </section>
  );
}
