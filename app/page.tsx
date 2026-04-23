import AnimatedPillButton from "@/components/ui/AnimatedPillButton";
import ParallaxHero from "@/components/ui/ParallaxHero";
import RevealImage from "@/components/ui/RevealImage";
import RevealContent from "@/components/ui/RevealContent";
import TransitionLink from "@/components/ui/TransitionLink";
import Link from "next/link";
import { projects } from "@/lib/projects";

const homepageProjects = projects.slice(0, 6).map((project) => ({
  location: project.location,
  year: project.completed,
  title: project.title,
  description: project.description,
  category: project.category,
  size: project.size,
  service: project.service,
  image: project.heroImage,
  slug: project.slug,
}));

const services = [
  {
    title: "Project Management",
    description:
      "End-to-end project leadership that keeps timelines, consultants, and construction standards tightly aligned.",
    image: "/work5.jpg",
  },
  {
    title: "Feasibility Studies",
    description:
      "Early-stage assessment of site potential, use cases, and commercial viability before major commitments are made.",
    image: "/const1.jpg",
  },
  {
    title: "Architectural Design",
    description:
      "Context-aware architecture that blends clarity, functionality, and a memorable spatial identity.",
    image: "/work4.jpg",
  },
  {
    title: "Urban Planning",
    description:
      "Scalable planning strategies for sustainable communities, mixed-use growth, and stronger public experience.",
    image: "/work2.jpg",
  },
  {
    title: "Interior Renovation",
    description:
      "Strategic interior redesign that enhances functionality, aesthetics, and user experience for residential and commercial spaces.",
    image: "/const1.jpg",
  },
  {
    title: "Structural Engineering",
    description:
      "Advanced structural solutions that ensure safety, longevity, and innovative design possibilities within technical constraints.",
    image: "/const1.jpg",
  },
  {
    title: "Sustainability Consulting",
    description:
      "Integrated sustainable design strategies that reduce environmental impact while improving building performance and occupant wellbeing.",
    image: "/const1.jpg",
  },
];

const posts = [
  {
    date: "May 13, 2025",
    category: "Architectural Trends",
    title: "Designing For Warm Climates Without Sacrificing Elegance",
    description:
      "How passive cooling, layered shading, and material discipline can produce architecture that feels both modern and deeply livable.",
    image: "/house2.jpg",
  },
  {
    date: "Jun 10, 2025",
    category: "Cultural Architecture",
    title: "Spaces That Reflect Place, Memory, And Local Identity",
    description:
      "A closer look at how context-sensitive architecture can honor culture while still feeling contemporary.",
    image: "/work1.jpg",
  },
  {
    date: "Feb 27, 2025",
    category: "Structural Design",
    title: "Why Clean Geometry Still Matters In Premium Building Design",
    description:
      "Examining the value of disciplined forms, expressive massing, and material restraint in high-end projects.",
    image: "/house3.jpg",
  },
];

function SectionLabel({
  letter,
  title,
  dark = false,
}: {
  letter: string;
  title: string;
  dark?: boolean;
}) {
  return (
    <div className="mb-10 flex items-center gap-4">
      <div
        className={`flex h-8 w-8 items-center justify-center border text-[0.72rem] ${
          dark
            ? "border-white/30 text-white"
            : "border-neutral-400 text-neutral-950"
        }`}
      >
        {letter}
      </div>
      <span
        className={`text-[0.7rem] uppercase tracking-[0.16em] ${
          dark ? "text-white/75" : "text-neutral-700"
        }`}
      >
        {title}
      </span>
      <div
        className={`h-px flex-1 ${dark ? "bg-white/20" : "bg-neutral-200"}`}
      />
    </div>
  );
}

function BentoCell({
  project,
  className,
}: {
  project: (typeof homepageProjects)[0];
  className: string;
}) {
  return (
    <TransitionLink
      href={`/work/${project.slug}`}
      className={`group relative overflow-hidden ${className}`}
    >
      <RevealImage
        src={project.image}
        alt={project.title}
        className="absolute inset-0 w-full h-full object-cover brightness-[0.88] transition-[transform,filter] duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-[1.04] group-hover:brightness-[0.5]"
      />

      {/* On touch devices (@media hover: none) the overlay is always partially visible */}
      <div className="absolute inset-0 flex flex-col justify-end p-[18px] opacity-100 [@media(hover:hover)]:opacity-0 group-hover:opacity-100 transition-opacity duration-400">
        <div className="border-t border-white/25 pt-3">
          <p className="text-[10px] uppercase tracking-[0.15em] text-white/50 mb-1.5">
            {project.location} · {project.year}
          </p>
          <p className="text-[15px] font-medium text-white leading-tight mb-2.5">
            {project.title}
          </p>
          <div className="flex items-center justify-between">
            <span className="text-[10px] uppercase tracking-[0.12em] text-white/45">
              {project.category}
            </span>
            <span className="w-7 h-7 border border-white/30 rounded-full flex items-center justify-center text-white text-[13px] group-hover:bg-white/10 group-hover:border-white/60 transition-all">
              →
            </span>
          </div>
        </div>
      </div>
    </TransitionLink>
  );
}

export default function HomePage() {
  return (
    <main className="bg-white text-black">
      <ParallaxHero videoSrc="/hero-video.mp4">
        <div className="max-w-[820px]">
          <p className="mb-4 text-[0.65rem] uppercase tracking-[0.16em] text-white/80 md:mb-6 md:text-[0.72rem]">
            Creating Spaces of Wonder
          </p>
          <h1 className="max-w-[820px] text-[2.5rem] font-medium leading-[0.95] tracking-[-0.04em] text-white sm:text-4xl md:text-7xl">
            Reimagining the Built Environment
          </h1>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-4 border-t border-white/20 pt-4 md:mt-14 md:gap-6 md:pt-6 md:flex-row md:items-end">
          <div className="max-w-xs border-l border-[var(--burnt-orange)] pl-4 text-xs leading-6 text-white/82 md:text-sm md:leading-7">
            We create spaces that provoke wonder while building deep connections
            between people and their surroundings.
          </div>
          <AnimatedPillButton href="/work" label="View Work" light />
        </div>
      </ParallaxHero>
      <section className="bg-white py-20 md:py-32">
        <div className="mx-auto  px-6 md:px-10 ">
          <SectionLabel letter="B" title="Work" />
          <div className="mb-16 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-4xl font-medium tracking-[-0.04em] md:text-5xl">
                Featured Projects
              </h2>
              <p className="mt-3 max-w-xl text-base leading-7 text-neutral-600">
                Discover a selection of completed projects shaped by atmosphere,
                precision, and architectural clarity.
              </p>
            </div>
            <AnimatedPillButton href="/work" label="View All Projects" />
          </div>
          <section className="grid gap-[3px] p-[3px]">
            {/* Row 1 — 4 cols on xl, 2 on md, 1 on mobile */}
            <div
              className="grid gap-[3px] grid-cols-1 md:grid-cols-2 xl:grid-cols-4"
              style={{
                gridTemplateColumns: undefined, // let Tailwind classes take over on small screens
              }}
            >
              {homepageProjects.slice(0, 4).map((project) => (
                <BentoCell
                  key={project.slug}
                  project={project}
                  className="h-[56vw] md:h-[38vw] xl:h-[480px]"
                />
              ))}
            </div>

            {/* Row 2 — 2 cols on md+, 1 on mobile */}
            <div className="grid gap-[3px] grid-cols-1 md:grid-cols-2">
              {homepageProjects.slice(4, 6).map((project) => (
                <BentoCell
                  key={project.slug}
                  project={project}
                  className="h-[72vw] md:h-[48vw] xl:h-[620px]"
                />
              ))}
            </div>
          </section>
          see more -
        </div>
      </section>

      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto px-6 md:px-10 ">
          <SectionLabel letter="A" title="About" />

          <div className="grid gap-12 lg:grid-cols-2">
            <RevealContent className="flex flex-col justify-center">
              <h2 className="text-2xl font-medium leading-[1.1] tracking-[-0.04em] sm:text-3xl md:text-5xl">
                150+ people across 3 continents
              </h2>
              <div className="mt-6 space-y-4 text-sm leading-6 text-neutral-600 md:mt-8 md:space-y-6 md:text-base md:leading-8">
                <p>
                  Archademy is composed of architects, designers, and
                  specialists united by a shared vision of transforming the
                  built environment through disciplined creativity.
                </p>
                <p>
                  Our practice reimagines spaces that provoke wonder while
                  building deep connections between people and their
                  surroundings.
                </p>
              </div>
              <div className="mt-8">
                <AnimatedPillButton href="/about" label="Meet the Team" />
              </div>
            </RevealContent>

            <RevealImage
              src="/work1.jpg"
              alt="Team collaboration"
              className="aspect-square bg-neutral-100"
              direction="left"
            />
          </div>

          <div className="mt-20 mx-auto max-w-7xl grid gap-8 border-t border-neutral-200 pt-12 md:grid-cols-3">
            <RevealContent delay={0.1}>
              <div>
                <p className="text-5xl font-medium tracking-[-0.05em]">25+</p>
                <p className="mt-3 text-sm leading-6 text-neutral-600 max-w-xs">
                  Years of practice and innovation in architecture
                </p>
              </div>
            </RevealContent>
            <RevealContent delay={0.2}>
              <div>
                <p className="text-5xl font-medium tracking-[-0.05em]">200+</p>
                <p className="mt-3 text-sm leading-6 text-neutral-600 max-w-xs">
                  Completed projects across residential, commercial, and
                  hospitality
                </p>
              </div>
            </RevealContent>
            <RevealContent delay={0.3}>
              <div>
                <p className="text-5xl font-medium tracking-[-0.05em]">
                  Global
                </p>
                <p className="mt-3 text-sm leading-6 text-neutral-600 max-w-xs">
                  Practice with presence across Asia, Europe, and North America
                </p>
              </div>
            </RevealContent>
          </div>
        </div>
      </section>

      <section className="bg-black py-24 text-white md:py-32">
        <div className="mx-auto max-w-[1120px] px-6 md:px-10 lg:px-0">
          <SectionLabel letter="C" title="Approach" dark />

          <div className="mb-20">
            <h2 className="text-4xl font-medium leading-[1.1] tracking-[-0.04em] md:text-5xl max-w-2xl">
              Our Design Philosophy
            </h2>
            <p className="mt-6 text-lg leading-8 text-white/60 max-w-2xl">
              We believe great architecture emerges from disciplined thinking,
              contextual sensitivity, and a commitment to material excellence.
            </p>
          </div>

          <div className="grid gap-12 lg:grid-cols-5">
            {[
              {
                number: "01",
                title: "Discovery",
                description:
                  "We align on goals, site realities, budget, and the atmosphere you want to create.",
              },
              {
                number: "02",
                title: "Concept",
                description:
                  "We translate direction into bold architectural concepts and spatial stories.",
              },
              {
                number: "03",
                title: "Design",
                description:
                  "Layouts, materials, and technical decisions are refined into coherent systems.",
              },
              {
                number: "04",
                title: "Delivery",
                description:
                  "Our team coordinates delivery and protects design quality throughout execution.",
              },
              {
                number: "05",
                title: "Handover",
                description:
                  "We conclude with final reviews so the space performs as intended.",
              },
            ].map((step, index) => (
              <RevealContent
                key={step.number}
                delay={index * 0.12}
                direction="up"
              >
                <div className="flex flex-col gap-8 border-l border-white/20 pl-6">
                  <div>
                    <p className="text-5xl font-light tracking-[-0.04em] text-[var(--burnt-orange)] mb-4">
                      {step.number}
                    </p>
                    <h3 className="text-xl font-medium tracking-[-0.02em] leading-tight">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-sm leading-7 text-white/60 pr-4">
                    {step.description}
                  </p>
                </div>
              </RevealContent>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 md:py-32">
        <div className="w-full px-4 md:px-8 lg:px-12">
          <div className="mx-auto">
            <SectionLabel letter="D" title="Services" />

            <div className="mb-20 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div>
                <h2 className="text-4xl font-medium tracking-[-0.04em] md:text-5xl">
                  Our Services
                </h2>
                <p className="mt-3 max-w-2xl text-base leading-7 text-neutral-600">
                  Specialized architectural and design services tailored to
                  ambitious clients seeking clarity, elegance, and dependable
                  delivery.
                </p>
              </div>
              <AnimatedPillButton href="/contact" label="Get In Touch" />
            </div>

            <div className="grid gap-16 md:grid-cols-2">
              {services.map((service, index) => (
                <RevealContent key={`service-${index}`} delay={index * 0.12}>
                  <article className="flex flex-col h-full">
                    <RevealImage
                      src={service.image}
                      alt={service.title}
                      className="aspect-square w-full mb-8 bg-neutral-100"
                      direction={index % 2 === 0 ? "left" : "right"}
                    />
                    <div className="flex flex-col justify-between flex-grow gap-6">
                      <div>
                        <h3 className="text-3xl md:text-4xl font-medium tracking-[-0.03em]">
                          {service.title}
                        </h3>
                        <p className="mt-4 text-base md:text-lg leading-7 md:leading-8 text-neutral-600">
                          {service.description}
                        </p>
                      </div>
                      <TransitionLink
                        href="/contact"
                        className="inline-flex items-center gap-3 text-[0.78rem] uppercase tracking-[0.14em] text-neutral-800 hover:text-[var(--burnt-orange)] transition-colors w-fit"
                      >
                        Learn More
                        <span className="text-[var(--burnt-orange)]">→</span>
                      </TransitionLink>
                    </div>
                  </article>
                </RevealContent>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-black py-32 text-white">
        <div
          className="absolute inset-0 h-full w-full bg-cover bg-center"
          style={{
            backgroundImage: "url('/work1.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative mx-auto px-6 text-center md:px-10 lg:px-0">
          <RevealContent>
            <h2 className="mx-auto max-w-4xl text-4xl font-medium leading-tight tracking-[-0.04em] md:text-6xl">
              Ready to Create Something Meaningful?
            </h2>
            <p className="mt-6 mx-auto max-w-2xl text-lg leading-8 text-white/75">
              Whether you&apos;re beginning with a sketch, a site, or a clear
              vision, we&apos;re ready to help bring your next project to life.
            </p>
            <div className="mt-8">
              <AnimatedPillButton href="/contact" label="Contact Us" light />
            </div>
          </RevealContent>
        </div>
      </section>

      <section className="bg-white py-24 md:py-32">
        <div className="mx-auto px-6 md:px-10">
          <SectionLabel letter="E" title="Insights" />

          <div className="mb-20 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-4xl font-medium tracking-[-0.04em] md:text-5xl">
                Latest Insights
              </h2>
              <p className="mt-3 max-w-2xl text-base leading-7 text-neutral-600">
                Thoughts on architecture, design trends, and the principles that
                guide our creative process.
              </p>
            </div>
            <AnimatedPillButton href="/work" label="View All" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {posts.map((post, index) => (
              <RevealContent key={post.title} delay={index * 0.15}>
                <article className="group relative overflow-hidden aspect-[3/4] cursor-pointer">
                  {/* Image */}
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-[1.07]"
                  />

                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/[0.08] transition-all duration-400 group-hover:from-black/92 group-hover:via-black/55 group-hover:to-black/20" />

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-1 transition-transform duration-400 group-hover:translate-y-0">
                    {/* Meta */}
                    <p className="text-[11px] tracking-[0.12em] uppercase text-white/55 mb-2 transition-colors duration-400 group-hover:text-white/75">
                      {post.date} · {post.category}
                    </p>

                    {/* Title */}
                    <h3 className="text-base font-medium leading-snug text-white/88 transition-colors duration-400 group-hover:text-white">
                      {post.title}
                    </h3>

                    {/* Description — reveals on hover */}
                    <p className="mt-0 max-h-0 overflow-hidden text-[13px] leading-relaxed text-transparent transition-all duration-450 group-hover:mt-2 group-hover:max-h-20 group-hover:text-white/72">
                      {post.description}
                    </p>

                    {/* Link — reveals on hover */}
                    <Link
                      href="/about"
                      className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-[0.14em] text-transparent max-h-0 overflow-hidden transition-all duration-450 mt-0 group-hover:text-white/85 group-hover:max-h-8 group-hover:mt-3"
                    >
                      Read Article
                      <span className="text-[var(--burnt-orange)]">→</span>
                    </Link>
                  </div>
                </article>
              </RevealContent>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
