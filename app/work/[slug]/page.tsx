import type { Metadata } from "next";
import { notFound } from "next/navigation";
import AnimatedPillButton from "@/components/ui/AnimatedPillButton";
import RevealImage from "@/components/ui/RevealImage";
import TransitionLink from "@/components/ui/TransitionLink";
import {
  getNextProject,
  getProjectBySlug,
  projects,
  type Project,
} from "@/lib/projects";

type WorkDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

type DetailMetaItemProps = {
  label: string;
  value: string;
};

const detailMetaItems = (project: Project) => [
  { label: "Year", value: project.completed },
  { label: "Category", value: project.category },
  { label: "Size", value: project.size },
  { label: "Location", value: project.location },
];

const scopeItems = (project: Project) => [
  { label: "Scope", value: project.scopeDetail ?? project.service },
  { label: "Structure", value: project.structure ?? "—" },
  { label: "Facade", value: project.facade ?? "—" },
  { label: "Contractor", value: project.contractor ?? "—" },
];

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: WorkDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found | Archademy",
    };
  }

  return {
    title: `${project.title} | Archademy`,
    description: project.description,
  };
}

function DetailMetaItem({ label, value }: DetailMetaItemProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <span className="text-[0.62rem] uppercase tracking-[0.08em] text-white/45">
        [{label}]
      </span>
      <span className="text-[0.72rem] leading-6 text-white/72">{value}</span>
    </div>
  );
}

export default async function WorkDetailPage({
  params,
}: WorkDetailPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const nextProject = getNextProject(slug);

  return (
    <main className="min-h-screen bg-[#0f0f0f] text-white">
      <div className="relative overflow-hidden">
        <RevealImage
          src={project.heroImage}
          alt={project.title}
          className="relative aspect-[16/9] w-full md:aspect-[16/7]"
          imgClassName="object-center"
          direction="right"
        />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[40%] bg-gradient-to-b from-transparent to-[#0f0f0f]" />
      </div>

      <section className="mx-auto max-w-[1400px] px-6 pb-16 pt-10 md:px-10 md:pb-20 md:pt-12">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:gap-20">
          <div>
            <h1 className="text-[1.55rem] font-medium leading-[1.02] tracking-[-0.04em] md:text-[2.2rem]">
              {project.title}
            </h1>
            <p className="mt-5 max-w-[32rem] text-[0.86rem] leading-7 text-white/72 md:mt-6 md:text-[0.95rem] md:leading-8">
              {project.overview}
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">
            {detailMetaItems(project).map((item) => (
              <DetailMetaItem
                key={item.label}
                label={item.label}
                value={item.value}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="grid md:grid-cols-2">
        <RevealImage
          src={project.gallery[0] ?? project.heroImage}
          alt={`${project.title} exterior view`}
          className="aspect-[3/3.4] w-full"
          direction="right"
        />
        <RevealImage
          src={project.gallery[1] ?? project.detailImage}
          alt={`${project.title} secondary view`}
          className="aspect-[3/3.4] w-full"
          direction="left"
        />
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-16 md:px-10 md:py-20">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-20">
          <div>
            <p className="text-[0.62rem] uppercase tracking-[0.08em] text-white/45">
              [Design Vision]
            </p>
            <p className="mt-4 max-w-[30rem] text-[0.86rem] leading-7 text-white/72 md:text-[0.95rem] md:leading-8">
              {project.vision}
            </p>

            <blockquote className="mt-10 border-l border-white/12 pl-5">
              <p className="text-[0.92rem] italic leading-7 text-white/78 md:text-[1rem]">
                &quot;{project.quote}&quot;
              </p>
            </blockquote>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {scopeItems(project).map((item) => (
              <div
                key={item.label}
                className="border-b border-white/8 pb-3 sm:pb-5"
              >
                <p className="text-[0.62rem] uppercase tracking-[0.08em] text-white/45">
                  [{item.label}]
                </p>
                <p className="mt-2 text-[0.8rem] leading-6 text-white/72">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="grid md:grid-cols-2">
        <RevealImage
          src={project.gallery[2] ?? project.detailImage}
          alt={`${project.title} interior view`}
          className="aspect-[3/2.8] w-full"
          direction="right"
        />
        <RevealImage
          src={project.gallery[3] ?? project.heroImage}
          alt={`${project.title} landscape view`}
          className="aspect-[3/2.8] w-full"
          direction="left"
        />
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-16 md:px-10 md:py-20">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-20">
          <div>
            <p className="text-[0.62rem] uppercase tracking-[0.08em] text-white/45">
              [Project Story]
            </p>
            <p className="mt-4 max-w-[30rem] text-[0.86rem] leading-7 text-white/72 md:text-[0.95rem] md:leading-8">
              {project.intro}
            </p>
            <p className="mt-6 max-w-[30rem] text-[0.86rem] leading-7 text-white/72 md:text-[0.95rem] md:leading-8">
              {project.description}
            </p>
            <div className="mt-10">
              <AnimatedPillButton
                href="/contact"
                label="Discuss a Similar Project"
                light
                className="max-w-[28rem]"
              />
            </div>
          </div>

          <div>
            <p className="text-[0.62rem] uppercase tracking-[0.08em] text-white/45">
              [Key Features]
            </p>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {project.features.map((feature) => (
                <div key={feature} className="border border-white/8 p-4">
                  <p className="text-[0.8rem] leading-6 text-white/72">
                    {feature}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {nextProject ? (
        <section className="border-t border-white/8">
          <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-6 px-6 py-12 md:px-10 md:py-14">
            <div>
              <p className="text-[0.62rem] uppercase tracking-[0.08em] text-white/45">
                [Next Project]
              </p>
              <TransitionLink
                href={`/work/${nextProject.slug}`}
                className="mt-3 inline-block text-[1.45rem] font-medium tracking-[-0.04em] text-white transition-colors hover:text-[var(--burnt-orange)] md:text-[2rem]"
              >
                {nextProject.title}
              </TransitionLink>
            </div>
            <span className="hidden text-[0.7rem] uppercase tracking-[0.12em] text-white/42 md:block">
              {nextProject.category}
            </span>
          </div>
        </section>
      ) : null}
    </main>
  );
}
