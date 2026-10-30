import Image from "next/image";
import Link from "@/components/ui/TransitionLink";
import type { Project } from "@/lib/projects";
import { cn } from "@/lib/utils";

type Props = {
  project: Project;
  className?: string;
  imageClassName?: string;
  direction?: "up" | "left" | "right";
};
export default function ProjectCard({
  project,
  className,
  imageClassName,
}: Props) {
  return (
    <Link
      href={`/work/${project.slug}`}
      className={cn("project-card group block", className)}
    >
      <div
        data-cursor="View project"
        data-reveal="image"
        className={cn(
          "project-image relative aspect-[4/3] overflow-hidden bg-neutral-100",
          imageClassName,
        )}
      >
        <Image
          src={project.heroImage}
          alt={project.title}
          fill
          sizes="(max-width: 767px) 100vw, 50vw"
          className="object-cover "
        />
      </div>
      <div className="flex items-start justify-between gap-4 pt-4">
        <div>
          <h3 className="text-base leading-snug tracking-[-0.015em] group-hover:underline md:text-lg">
            {project.title}
          </h3>
          <p className="mt-1 text-sm text-neutral-600">{project.location}</p>
        </div>
        <span className="pt-1 text-xs text-neutral-600">
          {project.category}
        </span>
      </div>
    </Link>
  );
}
