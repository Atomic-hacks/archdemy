import CollaborationCta from "@/components/ui/CollaborationCta";
import RevealImage from "@/components/ui/RevealImage";
import SectionMarker from "@/components/ui/SectionMarker";
import TransitionLink from "@/components/ui/TransitionLink";
import { projects } from "@/lib/projects";

export default function WorkPage() {
  return (
    <main className="bg-white text-black">
      <section className="mx-auto max-w-[1296px] px-6 pb-24 pt-40 md:px-10 md:pt-44">
        <SectionMarker letter="A" label="Work" />

        <div className="grid gap-12 pb-16 lg:grid-cols-[1fr_0.95fr]">
          <h1 className="text-[4.4rem] font-medium leading-[0.95] tracking-[-0.06em] text-black">
            Our Projects
          </h1>
          <div className="max-w-[38rem] justify-self-end text-[1.05rem] leading-9 text-black/58">
            <p>
              Discover our portfolio of completed projects, showcasing a
              variety of styles and functionalities.
            </p>
            <TransitionLink
              href="#projects"
              disabledTransition
              className="mt-6 inline-flex items-center gap-2 text-black"
            >
              Check out all Projects.
              <span className="text-[var(--burnt-orange)]">↓</span>
            </TransitionLink>
          </div>
        </div>

        <div id="projects" className="border-t border-black/10">
          {projects.map((project, index) => (
            <article
              key={project.slug}
              className="grid gap-10 border-b border-black/10 py-16 lg:grid-cols-[0.88fr_1fr_0.74fr]"
            >
              <div className="flex flex-col justify-between gap-12">
                <div>
                  <p className="text-[0.92rem] uppercase tracking-[0.04em] text-black/52">
                    {project.location} - {project.completed}
                  </p>
                  <h2 className="mt-4 max-w-[18rem] text-[3rem] font-medium leading-[1.05] tracking-[-0.05em] text-black">
                    {project.title}
                  </h2>
                </div>

                <TransitionLink
                  href={`/work/${project.slug}`}
                  className="inline-flex items-center gap-3 text-[0.95rem] uppercase tracking-[0.04em] text-black"
                >
                  Read More
                  <span className="tracking-[0.3em] text-[var(--burnt-orange)]">
                    ...
                  </span>
                </TransitionLink>
              </div>

              <RevealImage
                src={project.heroImage}
                alt={project.title}
                className="aspect-[1.5] bg-neutral-100"
                imgClassName="select-none"
                direction={index % 2 === 0 ? "up" : "left"}
              />

              <div className="grid content-start gap-10 text-[1.05rem] leading-9 text-black/58">
                <p>{project.description}</p>

                <dl className="grid grid-cols-[auto_1fr] gap-x-10 gap-y-6 text-[0.98rem]">
                  <dt className="uppercase tracking-[0.04em] text-black/42">
                    Category
                  </dt>
                  <dd className="font-medium text-black">{project.category}</dd>
                  <dt className="uppercase tracking-[0.04em] text-black/42">
                    Size
                  </dt>
                  <dd className="font-medium text-black">{project.size}</dd>
                  <dt className="uppercase tracking-[0.04em] text-black/42">
                    Service
                  </dt>
                  <dd className="font-medium text-black">{project.service}</dd>
                </dl>
              </div>
            </article>
          ))}
        </div>
      </section>

      <CollaborationCta />
    </main>
  );
}
