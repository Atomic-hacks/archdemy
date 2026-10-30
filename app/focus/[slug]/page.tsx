import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { practiceAreas } from "@/lib/studio";
import { projects } from "@/lib/projects";
import MotionSurface from "@/components/ui/MotionSurface";
import DesignPrinciples from "@/components/studio/DesignPrinciples";
import ProcessSection from "@/components/studio/ProcessSection";
import ProjectCard from "@/components/work/ProjectCard";
import Link from "@/components/ui/TransitionLink";
export function generateStaticParams() {
  return practiceAreas.map((area) => ({ slug: area.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const area = practiceAreas.find((item) => item.slug === slug);
  return {
    title: `${area?.title ?? "Our focus"} | Archademy`,
    description: area?.introduction,
  };
}
export default async function FocusPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const area = practiceAreas.find((item) => item.slug === slug);
  if (!area) notFound();
  const work = projects.filter((project) => project.category === area.title);
  return (
    <main>
      <MotionSurface key={slug}>
        <section
          className="focus-page-heading site-gutter"
          style={{ background: area.color, color: area.foreground }}
        >
          <div className="focus-page-meta">
            <span>Our focus on</span>
            <span>{area.description}</span>
          </div>
          <h1 data-entry data-reveal="text">
            {area.title}
          </h1>
          <a
            href="#focus-content"
            className="page-hero-down"
            aria-label={`Explore ${area.title}`}
          >
            <ArrowDown size={18} strokeWidth={1} />
          </a>
        </section>
        <div className="focus-page-photo" data-reveal="image" data-entry>
          <Image
            src={area.image}
            alt={`${area.title} design`}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <section id="focus-content" className="site-gutter focus-page-intro">
          <p className="section-rule">{area.description}</p>
          <h2 data-reveal="text">{area.introduction}</h2>
          <p className="focus-body-copy" data-reveal="text">
            {area.body}
          </p>
        </section>
        <ProcessSection />
        <section className="site-gutter focus-expertise">
          <div>
            <p className="section-rule">Our focus</p>
            <h2 data-reveal="text">{area.title} design expertise</h2>
          </div>
          <div className="expertise-rows">
            {area.expertise.map((item) => (
              <article key={item.title} data-reveal="text">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>
        <DesignPrinciples />
        <section className="site-gutter focus-projects">
          <div className="focus-project-heading">
            <h2 data-reveal="text">Highlighted projects</h2>
            <Link
              href={`/work?category=${area.title}`}
              className="editorial-link"
            >
              All {area.title.toLowerCase()}{" "}
              <span>
                <ArrowUpRight size={15} />
              </span>
            </Link>
          </div>
          <div className="focus-project-grid">
            {work.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </section>
      </MotionSurface>
    </main>
  );
}
