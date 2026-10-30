import Link from "@/components/ui/TransitionLink";
import { ArrowUpRight } from "lucide-react";
import ProjectCard from "@/components/work/ProjectCard";
import { projects } from "@/lib/projects";

export default function FeaturedWorks() {
  const selected = [
    projects[4],
    projects[1],
    projects[0],
    projects[3],
    projects[5],
    projects[6],
  ];
  return (
    <section id="selected-work" className="site-gutter featured-editorial">
      <h2>A selection of our work</h2>
      <div className="work-heading-row">
        <Link href="/work" className="editorial-link">
          All projects{" "}
          <span>
            <ArrowUpRight size={14} />
          </span>
        </Link>
        <nav aria-label="Explore project types">
          {["Residential", "Hospitality", "Retail", "Commercial"].map((category) => (
            <Link key={category} href={`/work?category=${category}`}>
              {category}
              <sup>
                {projects.filter((p) => p.category === category).length}
              </sup>
            </Link>
          ))}
        </nav>
      </div>
      <div className="editorial-project-grid">
        {selected.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}
