import { notFound } from "next/navigation";
import {
  CalendarDays,
  LayoutGrid,
  MapPin,
  PencilRuler,
  UserRound,
} from "lucide-react";
import CollaborationCta from "@/components/ui/CollaborationCta";
import RevealImage from "@/components/ui/RevealImage";
import SectionMarker from "@/components/ui/SectionMarker";
import TransitionLink from "@/components/ui/TransitionLink";
import { getProjectBySlug, projects } from "@/lib/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

const metaItems = [
  { key: "client", label: "Client", icon: UserRound },
  { key: "service", label: "Service", icon: PencilRuler },
  { key: "location", label: "Location", icon: MapPin },
  { key: "category", label: "Category", icon: LayoutGrid },
  { key: "completed", label: "Completed", icon: CalendarDays },
] as const;

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const relatedProjects = projects.filter((item) => item.slug !== project.slug).slice(0, 2);

  return (
    <main className="bg-white text-black">
      <section className="mx-auto max-w-[1296px] px-6 pb-24 pt-40 md:px-10 md:pt-44">
        <SectionMarker letter="A" label="Work" />

        <div className="grid gap-12 lg:grid-cols-[1fr_0.95fr]">
          <h1 className="max-w-[34rem] text-[4.3rem] font-medium leading-[0.96] tracking-[-0.06em]">
            {project.title}
          </h1>
          <div className="max-w-[40rem] justify-self-end text-[1.05rem] leading-9 text-black/58">
            <p>{project.description}</p>
            <p className="mt-6 inline-flex items-center gap-2 text-black">
              {project.intro}
              <span className="text-[var(--burnt-orange)]">↓</span>
            </p>
          </div>
        </div>

        <div className="mt-12">
          <RevealImage
            src={project.heroImage}
            alt={project.title}
            className="aspect-[1.92] bg-neutral-100"
            imgClassName="select-none"
          />
        </div>

        <div className="mt-12 grid gap-8 border-b border-black/10 pb-16 md:grid-cols-2 xl:grid-cols-5">
          {metaItems.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.key} className="flex items-start gap-4">
                <Icon className="mt-1 h-5 w-5 text-black/42" />
                <div>
                  <p className="text-[0.82rem] uppercase tracking-[0.05em] text-black/42">
                    {item.label}
                  </p>
                  <p className="mt-1 text-[1rem] font-medium text-black">
                    {project[item.key]}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mx-auto max-w-[72rem] py-24">
          <div className="space-y-14">
            <div>
              <h2 className="text-[3.5rem] font-medium tracking-[-0.05em]">
                Project Overview
              </h2>
              <p className="mt-5 max-w-[64rem] text-[1.08rem] leading-10 text-black/62">
                {project.overview}
              </p>
            </div>

            <div>
              <h2 className="text-[3.2rem] font-medium tracking-[-0.05em]">
                Archademy Vision
              </h2>
              <p className="mt-5 max-w-[64rem] text-[1.08rem] leading-10 text-black/62">
                {project.vision}
              </p>
              <blockquote className="mt-8 border-l border-black pl-6 text-[1.9rem] leading-[1.7] tracking-[-0.03em]">
                “{project.quote}”
              </blockquote>
            </div>

            <div>
              <RevealImage
                src={project.detailImage}
                alt={`${project.title} detail`}
                className="aspect-[1.52] bg-neutral-100"
                imgClassName="select-none"
                direction="right"
              />
              <p className="mt-2 text-center text-[0.82rem] uppercase tracking-[0.06em] text-black/56">
                A softer side of sophistication.
              </p>
            </div>

            <div>
              <h2 className="text-[3.2rem] font-medium tracking-[-0.05em]">
                Key Features
              </h2>
              <p className="mt-5 max-w-[64rem] text-[1.08rem] leading-10 text-black/62">
                {project.title} exemplifies modern design innovation with
                tailored structures, strategic layouts, and attention-grabbing
                visuals that create a seamless brand-to-customer connection.
              </p>
              <ul className="mt-8 space-y-3 text-[1.02rem] leading-9 text-black/62">
                {project.features.map((feature) => (
                  <li key={feature}>• {feature}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <SectionMarker letter="B" label="Gallery" />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {project.gallery.map((image, index) => (
            <RevealImage
              key={image}
              src={image}
              alt={`${project.title} gallery ${index + 1}`}
              className="aspect-[0.95] bg-neutral-100"
              imgClassName="select-none"
              direction={
                index % 3 === 0 ? "up" : index % 3 === 1 ? "left" : "right"
              }
            />
          ))}
        </div>

        <div className="mt-24">
          <SectionMarker letter="C" label="Explore" />
          <h2 className="mb-10 text-[3.5rem] font-medium tracking-[-0.05em]">
            Explore More Projects
          </h2>

          <div className="border-t border-black/10">
            {relatedProjects.map((item, index) => (
              <article
                key={item.slug}
                className="grid gap-10 border-b border-black/10 py-16 lg:grid-cols-[0.88fr_1fr_0.74fr]"
              >
                <div className="flex flex-col justify-between gap-12">
                  <div>
                    <p className="text-[0.92rem] uppercase tracking-[0.04em] text-black/52">
                      {item.location} - {item.completed}
                    </p>
                    <h3 className="mt-4 max-w-[18rem] text-[3rem] font-medium leading-[1.05] tracking-[-0.05em]">
                      {item.title}
                    </h3>
                  </div>

                  <TransitionLink
                    href={`/work/${item.slug}`}
                    className="inline-flex items-center gap-3 text-[0.95rem] uppercase tracking-[0.04em] text-black"
                  >
                    Read More
                    <span className="tracking-[0.3em] text-[var(--burnt-orange)]">
                      ...
                    </span>
                  </TransitionLink>
                </div>

                <RevealImage
                  src={item.heroImage}
                  alt={item.title}
                  className="aspect-[1.5] bg-neutral-100"
                  direction={index % 2 === 0 ? "left" : "right"}
                />

                <div className="grid content-start gap-10 text-[1.05rem] leading-9 text-black/58">
                  <p>{item.description}</p>
                  <dl className="grid grid-cols-[auto_1fr] gap-x-10 gap-y-6 text-[0.98rem]">
                    <dt className="uppercase tracking-[0.04em] text-black/42">
                      Category
                    </dt>
                    <dd className="font-medium text-black">{item.category}</dd>
                    <dt className="uppercase tracking-[0.04em] text-black/42">
                      Size
                    </dt>
                    <dd className="font-medium text-black">{item.size}</dd>
                    <dt className="uppercase tracking-[0.04em] text-black/42">
                      Service
                    </dt>
                    <dd className="font-medium text-black">{item.service}</dd>
                  </dl>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CollaborationCta />
    </main>
  );
}
