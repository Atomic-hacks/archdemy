"use client";

import { useState, useMemo } from "react";
import CollaborationCta from "@/components/ui/CollaborationCta";
import RevealContent from "@/components/ui/RevealContent";
import SectionMarker from "@/components/ui/SectionMarker";
import ProjectModal from "@/components/ui/ProjectModal";
import { projects, Project } from "@/lib/projects";
import Image from "next/image";

const ALL = "All";

export default function WorkPage() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(ALL);

  const categories = useMemo(() => {
    const cats = Array.from(new Set(projects.map((p) => p.category)));
    return [ALL, ...cats];
  }, []);

  const countByCategory = useMemo(() => {
    const map: Record<string, number> = { [ALL]: projects.length };
    projects.forEach((p) => {
      map[p.category] = (map[p.category] ?? 0) + 1;
    });
    return map;
  }, []);

  const filtered = useMemo(
    () =>
      activeCategory === ALL
        ? projects
        : projects.filter((p) => p.category === activeCategory),
    [activeCategory],
  );

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProject(null), 300);
  };

  const heights = ["aspect-square", "aspect-[0.85]", "aspect-[1.15]"];

  return (
    <main className="bg-white text-black">
      <section className="mx-auto px-6 pb-24 pt-40 md:px-10 md:pt-44">
        <SectionMarker letter="A" label="Work" />

        <div className="grid gap-12 pb-16 lg:grid-cols-[1fr_0.95fr]">
          <div>
            <h1 className="text-2xl font-medium leading-[0.95] tracking-[-0.06em] text-black sm:text-3xl md:text-[4.4rem]">
              Our Projects
            </h1>
            <p className="mt-6 text-sm leading-6 text-black/58 md:text-[1.05rem] md:leading-9">
              Discover our portfolio of completed projects, showcasing a variety
              of styles and functionalities across residential, commercial, and
              hospitality sectors.
            </p>
          </div>
        </div>

        {/* Filter tabs */}
        <div id="projects" className="border-t border-black/10 pt-10">
          <div className="flex gap-0 border-b border-black/10 mb-10 overflow-x-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`
                  shrink-0 text-[11px] uppercase tracking-[0.07em] px-5 py-3
                  border-b-[1.5px] -mb-px transition-colors duration-200
                  ${
                    activeCategory === cat
                      ? "text-black border-black"
                      : "text-black/40 border-transparent hover:text-black/70"
                  }
                `}
              >
                {cat}
                <span
                  className={`
                    inline-flex items-center justify-center ml-2 text-[10px]
                    rounded-full px-1.5 min-w-[18px] h-[18px]
                    ${activeCategory === cat ? "bg-black/8 text-black/60" : "bg-black/5 text-black/35"}
                  `}
                >
                  {countByCategory[cat] ?? 0}
                </span>
              </button>
            ))}
          </div>

          {/* Results count */}
          <p className="text-[11px] tracking-wide text-black/35 uppercase mb-8">
            {activeCategory === ALL
              ? `All ${filtered.length} projects`
              : `${filtered.length} ${activeCategory.toLowerCase()} project${filtered.length !== 1 ? "s" : ""}`}
          </p>

          {/* Grid */}
          <div className="grid gap-6 md:gap-8 auto-rows-max md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((project, index) => (
              <RevealContent key={project.slug} delay={index * 0.06}>
                <article
                  onClick={() => handleProjectClick(project)}
                  className="group cursor-pointer h-full"
                >
                  {/* Image */}
                  <div
                    className={`relative overflow-hidden bg-neutral-100 mb-4 ${heights[index % heights.length]}`}
                  >
                    <Image
                      src={project.heroImage}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-[1.04]"
                    />
                    {/* Index marker */}
                    <span className="absolute top-3 left-3 text-[10px] tracking-[0.08em] text-white/65">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="space-y-2">
                    <p className="text-[11px] uppercase tracking-[0.06em] text-black/40">
                      {project.location} · {project.completed}
                    </p>
                    <h2 className="text-base md:text-lg font-medium leading-snug tracking-[-0.025em] group-hover:text-[var(--burnt-orange)] transition-colors duration-200">
                      {project.title}
                    </h2>
                    <p className="text-sm leading-6 text-black/55 line-clamp-2">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      <span className="text-[11px] bg-black/[0.04] text-black/55 px-2.5 py-1 rounded-full">
                        {project.category}
                      </span>
                      <span className="text-[11px] bg-black/[0.04] text-black/55 px-2.5 py-1 rounded-full">
                        {project.service}
                      </span>
                    </div>
                  </div>
                </article>
              </RevealContent>
            ))}
          </div>
        </div>
      </section>

      <CollaborationCta />

      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </main>
  );
}
