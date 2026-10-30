"use client";
import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import MotionSurface from "@/components/ui/MotionSurface";
import PageHero from "@/components/ui/PageHero";
import ProjectCard from "@/components/work/ProjectCard";
import { projectCategories, projects } from "@/lib/projects";

function WorkContent() {
  const search = useSearchParams();
  const [category, setCategory] = useState("All");
  useEffect(() => {
    const sync = () => {
      const value = new URLSearchParams(window.location.search).get("category");
      setCategory(value && projectCategories.includes(value) ? value : "All");
    };
    sync();
    window.addEventListener("popstate", sync);
    return () => window.removeEventListener("popstate", sync);
  }, [search]);
  const filtered =
    category === "All"
      ? projects
      : projects.filter((p) => p.category === category);
  return (
    <section id="page-content" className="site-gutter portfolio-content">
      <div
        role="group"
        aria-label="Filter projects"
        className="mb-10 flex flex-wrap gap-x-7 gap-y-2 border-b border-black/15"
      >
        {projectCategories.map((item) => (
          <button
            key={item}
            type="button"
            aria-pressed={category === item}
            onClick={() => {
              setCategory(item);
              window.history.replaceState(
                null,
                "",
                item === "All"
                  ? "/work"
                  : `/work?category=${encodeURIComponent(item)}`,
              );
            }}
            className={`min-h-12 border-b pb-3 text-sm ${category === item ? "border-[#252525] text-[#252525]" : "border-transparent text-neutral-600 hover:text-black"}`}
          >
            {item}
            <sup className="ml-1 text-[10px]">
              {item === "All"
                ? projects.length
                : projects.filter((p) => p.category === item).length}
            </sup>
          </button>
        ))}
      </div>
      <p className="sr-only" role="status">
        {filtered.length} projects shown
      </p>
      <MotionSurface key={category} className="editorial-project-grid">
        {filtered.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </MotionSurface>
    </section>
  );
}

export default function WorkPage() {
  return (
    <main>
      <MotionSurface>
        <PageHero
          title="Portfolio"
          image="/house2.jpg"
          left="Our work"
          right="Overview"
        />
        <Suspense
          fallback={
            <section id="page-content" className="site-gutter portfolio-content" aria-busy="true">
              <div className="editorial-project-grid">
                {projects.map((project) => (
                  <ProjectCard key={project.slug} project={project} />
                ))}
              </div>
            </section>
          }
        >
          <WorkContent />
        </Suspense>
      </MotionSurface>
    </main>
  );
}
