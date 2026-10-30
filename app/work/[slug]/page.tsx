import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import MotionSurface from "@/components/ui/MotionSurface";
import PageHero from "@/components/ui/PageHero";
import ProjectIntroduction from "@/components/work/ProjectIntroduction";
import TransitionLink from "@/components/ui/TransitionLink";
import { ArrowUpRight } from "lucide-react";
import { getNextProject, getProjectBySlug, projects } from "@/lib/projects";

type Props = { params: Promise<{ slug: string }> };
export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  return {
    title: project
      ? `${project.title} | Archademy`
      : "Project not found | Archademy",
    description: project?.description,
  };
}

export default async function WorkDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();
  const next = getNextProject(slug);
  return (
    <main>
      <MotionSurface key={project.slug}>
        <PageHero
          title={project.title}
          image={project.heroImage}
          left={project.location}
          right={project.category}
          target="project-introduction"
          full
        />
        <TransitionLink href="/work" className="project-back">
          Portfolio
        </TransitionLink>
        <ProjectIntroduction project={project} />
        <div className="project-wide-photo" data-reveal="image">
          <Image
            src={project.detailImage}
            alt={`${project.title} design detail`}
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <section className="site-gutter project-narrative">
          <h2 data-reveal="text">{project.vision}</h2>
          <div className="project-narrative-bottom">
            <p data-reveal="text">{project.description}</p>
            <ul data-reveal="text">
              {project.features.slice(0, 4).map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </div>
        </section>
        <div className="site-gutter project-photo-pair">
          {project.gallery.slice(0, 2).map((src, index) => (
            <div key={`${src}-${index}`} data-reveal="image">
              <Image
                src={src}
                alt={`${project.title}, view ${index + 1}`}
                fill
                sizes="(max-width: 767px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>
        {next && (
          <section className="site-gutter next-project">
            <p>Next project</p>
            <TransitionLink
              href={`/work/${next.slug}`}
              className="next-project-link"
              data-cursor="View project"
            >
              <div className="next-project-image" data-reveal="image">
                <Image
                  src={next.heroImage}
                  alt={next.title}
                  fill
                  sizes="(max-width: 767px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <h2>
                {next.title}
                <ArrowUpRight size={28} strokeWidth={1} />
              </h2>
            </TransitionLink>
          </section>
        )}
      </MotionSurface>
    </main>
  );
}
