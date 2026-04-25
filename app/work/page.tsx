"use client";

import { useMemo, useState } from "react";
import AnimatedPillButton from "@/components/ui/AnimatedPillButton";
import RevealImage from "@/components/ui/RevealImage";
import SectionMarker from "@/components/ui/SectionMarker";
import TransitionLink from "@/components/ui/TransitionLink";
import ProjectCard from "@/components/work/ProjectCard";
import { projectCategories, projects } from "@/lib/projects";
import { cn } from "@/lib/utils";

const columnOffsets = ["md:pt-0", "md:pt-16", "md:pt-0", "md:pt-8"] as const;

function buildColumns<T>(items: T[], count: number) {
  return items.reduce<T[][]>(
    (columns, item, index) => {
      columns[index % count].push(item);
      return columns;
    },
    Array.from({ length: count }, () => []),
  );
}

export default function WorkPage() {
  const [activeCategory, setActiveCategory] =
    useState<(typeof projectCategories)[number]>("All");
  const [view, setView] = useState<"grid" | "list">("grid");

  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") {
      return projects;
    }

    return projects.filter((project) => project.category === activeCategory);
  }, [activeCategory]);

  const projectColumns = useMemo(
    () => buildColumns(filteredProjects, 4),
    [filteredProjects],
  );

  return (
    <main className="bg-[#0f0f0f] text-white">
      <section className="mx-auto max-w-[1400px] px-6 pb-24 pt-40 md:px-10 md:pb-32 md:pt-44">
        <SectionMarker letter="A" label="Projects" dark />

        <div className="mb-14 flex flex-col gap-10 md:mb-16 md:flex-row md:items-start md:justify-between">
          <div className="max-w-[30rem]">
            <h1 className="text-2xl font-medium leading-[0.96] tracking-[-0.06em] sm:text-3xl md:text-[4.4rem]">
              Featured Works and Ongoing Exploration
            </h1>
            <p className="mt-6 max-w-[34rem] text-sm leading-6 text-white/62 md:mt-8 md:text-[1.08rem] md:leading-10">
              A selection of residential, commercial, and hospitality work
              shaped by context, material clarity, and careful execution.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 md:min-w-[23rem] md:gap-10">
            <div>
              <p className="mb-3 text-[0.72rem] uppercase tracking-[0.12em] text-white/42">
                Categories
              </p>
              <div className="flex flex-col items-start gap-1.5">
                {projectCategories.map((category) => {
                  const isActive = activeCategory === category;

                  return (
                    <button
                      key={category}
                      type="button"
                      onClick={() => setActiveCategory(category)}
                      className={cn(
                        "text-left text-[0.78rem] leading-7 transition-colors hover:text-[var(--burnt-orange)]",
                        isActive ? "font-medium text-white" : "text-white/65",
                      )}
                    >
                      {category}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="sm:text-right">
              <p className="mb-3 text-[0.72rem] uppercase tracking-[0.12em] text-white/42">
                View
              </p>
              <div className="flex flex-col items-start gap-1.5 sm:items-end">
                {(["grid", "list"] as const).map((option) => {
                  const isActive = view === option;

                  return (
                    <button
                      key={option}
                      type="button"
                      onClick={() => setView(option)}
                      className={cn(
                        "text-[0.78rem] uppercase leading-7 tracking-[0.08em] transition-colors hover:text-[var(--burnt-orange)]",
                        isActive ? "font-medium text-white" : "text-white/65",
                      )}
                    >
                      {option}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {view === "grid" ? (
          <div className="grid gap-[3px] md:grid-cols-4">
            {projectColumns.map((column, columnIndex) => (
              <div
                key={`column-${columnIndex}`}
                className={cn("grid gap-[3px]", columnOffsets[columnIndex])}
              >
                {column.map((project, projectIndex) => (
                  <ProjectCard
                    key={project.slug}
                    project={project}
                    className={cn(
                      "h-[68vw] min-h-[220px] max-h-[460px] md:h-[27vw] md:min-h-[320px] md:max-h-[520px]",
                      projectIndex % 3 === 1 && "md:h-[33vw] md:max-h-[620px]",
                      projectIndex % 4 === 3 && "md:h-[24vw] md:min-h-[280px]",
                    )}
                    direction={columnIndex % 2 === 0 ? "right" : "left"}
                  />
                ))}
              </div>
            ))}
          </div>
        ) : (
          <div className="border-t border-white/8">
            {filteredProjects.map((project, index) => (
              <TransitionLink
                key={project.slug}
                href={`/work/${project.slug}`}
                className="flex items-center justify-between gap-6 border-b border-white/8 py-4 text-white/78 transition-colors hover:text-white"
              >
                <span className="text-[0.92rem] tracking-[-0.02em] md:text-[1.02rem]">
                  {String(index + 1).padStart(2, "0")}. {project.title}
                </span>
                <span className="text-[0.72rem] uppercase tracking-[0.1em] text-white/42">
                  {project.category}
                </span>
              </TransitionLink>
            ))}
          </div>
        )}
      </section>

      <section className="relative overflow-hidden">
        <RevealImage
          src="/house9.jpg"
          alt="Archademy project atmosphere"
          className="relative h-[58vw] min-h-[320px] w-full max-h-[800px]"
          imgClassName="brightness-[0.5]"
          direction="up"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.28),rgba(0,0,0,0.55)_80%,rgba(0,0,0,0.72))]" />
        <div className="absolute inset-x-0 bottom-0 mx-auto flex max-w-[1296px] flex-col items-start justify-end gap-5 px-6 pb-10 md:px-10 md:pb-14">
          <p className="max-w-[32rem] text-[1rem] leading-7 text-white/78 md:text-[1.3rem] md:leading-10">
            Every commission begins with close reading: site, climate,
            circulation, and the way people actually want to live or work.
          </p>
          <AnimatedPillButton
            href="/contact"
            label="Start a Project"
            light
            className="max-w-[26rem]"
          />
        </div>
      </section>
    </main>
  );
}
