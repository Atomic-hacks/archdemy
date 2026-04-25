import RevealImage from "@/components/ui/RevealImage";
import TransitionLink from "@/components/ui/TransitionLink";
import type { Project } from "@/lib/projects";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

type ProjectCardProps = {
  project: Project;
  className?: string;
  imageClassName?: string;
  direction?: "up" | "left" | "right";
};

export default function ProjectCard({
  project,
  className,
  imageClassName,
  direction = "up",
}: ProjectCardProps) {
  return (
    <TransitionLink
      href={`/work/${project.slug}`}
      className={cn(
        "group relative block overflow-hidden bg-neutral-900",
        className,
      )}
    >
      <RevealImage
        src={project.heroImage}
        alt={project.title}
        direction={direction}
        className={cn("absolute inset-0 h-full w-full", imageClassName)}
        imgClassName="brightness-[0.82] transition-[transform,filter] duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-[1.05] group-hover:brightness-[0.45]"
      />

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/75 to-transparent" />

      <div className="absolute bottom-0 left-0 p-4 pb-[18px]">
        <p className="text-[13px] leading-none font-normal tracking-wide text-white">
          {project.title}
          <span className="ml-2 text-[10.5px] font-light uppercase tracking-[0.1em] text-white/40">
            {project.category}
          </span>
        </p>
      </div>

      <div className="absolute top-4 right-4 flex h-8 w-8 translate-y-1 items-center justify-center rounded-full border border-white/20 bg-burnt-orange opacity-0 backdrop-blur-sm transition-all duration-300 ease-out group-hover:translate-y-0 group-hover:opacity-100">
        <ArrowRight className="h-4 w-4 text-white rotate-315" />
      </div>
    </TransitionLink>
  );
}
