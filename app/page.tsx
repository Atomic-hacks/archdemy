import AnimatedPillButton from "@/components/ui/AnimatedPillButton";
import ParallaxHero from "@/components/ui/ParallaxHero";
import RevealImage from "@/components/ui/RevealImage";
import RevealContent from "@/components/ui/RevealContent";
import TransitionLink from "@/components/ui/TransitionLink";
import Link from "next/link";
import { projects } from "@/lib/projects";

const homepageProjects = projects.slice(0, 3).map((project) => ({
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

const processSteps = [
  {
    number: "#01",
    title: "Discovery & Consultation",
    description:
      "We align on goals, site realities, budget, and the atmosphere you want the project to carry.",
  },
  {
    number: "#02",
    title: "Concept Design",
    description:
      "We translate direction into bold architectural concepts, spatial stories, and early visual language.",
  },
  {
    number: "#03",
    title: "Design Development",
    description:
      "Layouts, materials, and technical decisions are refined into a buildable and coherent design system.",
  },
  {
    number: "#04",
    title: "Construction Management",
    description:
      "Our team coordinates delivery, reviews progress, and protects the design quality throughout execution.",
  },
  {
    number: "#05",
    title: "Project Handover",
    description:
      "We conclude with final reviews and a complete handover so the finished space performs as intended.",
  },
];

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
];

const testimonials = [
  {
    quote:
      "Archademy brought a timeless calm to our project. The result feels luxurious without losing practical clarity.",
    name: "Jonnathan Mitchell",
    role: "Mitchell & Co. Architects",
  },
  {
    quote:
      "Their perspective on materiality and proportion pushed our design much further than we initially imagined.",
    name: "Emily Chen",
    role: "Chen Design Group",
  },
  {
    quote:
      "We came for sustainable solutions and stayed for the rigor. Every decision felt innovative and grounded.",
    name: "Liam O'Reilly",
    role: "O'Reilly Urban Planning",
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

export default function HomePage() {
  return (
    <main className="bg-white text-black">
      <ParallaxHero videoSrc="/hero-video.mp4">
        <div className="max-w-[720px]">
          <p className="mb-4 text-[0.65rem] uppercase tracking-[0.16em] text-white/80 md:mb-6 md:text-[0.72rem]">
            #World&apos;s Number One
          </p>
          <h1 className="max-w-[820px] text-[2.5rem] font-medium leading-[0.98] tracking-[-0.04em] text-white sm:text-4xl md:text-7xl">
            Crafting <span className="text-amber-700">Unique</span> Spaces with
            Innovative <span className="text-amber-700">Architectural</span>{" "}
            Solutions
          </h1>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-4 border-t border-white/20 pt-4 md:mt-14 md:gap-6 md:pt-6 md:flex-row md:items-end">
          <div className="max-w-xs border-l border-[var(--burnt-orange)] pl-4 text-xs leading-6 text-white/82 md:text-sm md:leading-7">
            The power of architecture to transform lives and communities.
          </div>
          <AnimatedPillButton href="/work" label="Our Projects" light />
        </div>
      </ParallaxHero>

      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-[1120px] px-6 md:px-10 lg:px-0">
          <SectionLabel letter="A" title="About Us" />

          <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr_1fr]">
            <RevealContent className="flex flex-col justify-center">
              <h2 className="text-2xl font-medium leading-[1.05] tracking-[-0.04em] sm:text-3xl md:text-4xl lg:text-5xl">
                Discover Our Journey to Architectural Excellence
              </h2>
              <div className="mt-6 space-y-4 text-sm leading-6 text-neutral-600 md:mt-8 md:space-y-6 md:text-[1rem] md:leading-8">
                <p>
                  Archademy has evolved into a design practice known for clear
                  thinking, refined form-making, and architecture rooted in real
                  context.
                </p>
                <p>
                  We combine technical discipline with a strong artistic point
                  of view, shaping spaces that feel modern, warm, and built to
                  last.
                </p>
              </div>
              <div className="mt-8">
                <AnimatedPillButton href="/work" label="View All Projects" />
              </div>
            </RevealContent>

            <RevealImage
              src="/work4.jpg"
              alt="Vertical architectural facade"
              className="aspect-square bg-neutral-100"
              direction="up"
            />

            <RevealImage
              src="/const1.jpg"
              alt="Studio collaboration"
              className="aspect-square bg-neutral-100"
              direction="left"
            />
          </div>

          <div className="mt-20 grid gap-8 border-t border-neutral-200 pt-12 md:grid-cols-3">
            <RevealContent delay={0.1}>
              <div>
                <p className="text-5xl font-medium tracking-[-0.05em]">100%</p>
                <p className="mt-3 text-sm leading-6 text-neutral-600 max-w-xs">
                  Projects successfully delivered with a detail-driven studio
                  process
                </p>
              </div>
            </RevealContent>
            <RevealContent delay={0.2}>
              <div>
                <p className="text-5xl font-medium tracking-[-0.05em]">12+</p>
                <p className="mt-3 text-sm leading-6 text-neutral-600 max-w-xs">
                  Years shaping residential, commercial, and hospitality
                  experiences
                </p>
              </div>
            </RevealContent>
            <RevealContent delay={0.3}>
              <div>
                <p className="text-5xl font-medium tracking-[-0.05em]">50+</p>
                <p className="mt-3 text-sm leading-6 text-neutral-600 max-w-xs">
                  Completed projects across diverse sectors and geographies
                </p>
              </div>
            </RevealContent>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 md:py-32">
        <div className="mx-auto max-w-[1120px] px-6 md:px-10 lg:px-0">
          <SectionLabel letter="B" title="Work" />

          <div className="mb-16 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-4xl font-medium tracking-[-0.04em] md:text-5xl">
                Featured Projects
              </h2>
              <p className="mt-3 max-w-xl text-base leading-7 text-neutral-600">
                Discover a curated portfolio of completed projects, each shaped
                by atmosphere, precision, and a strong architectural identity.
              </p>
            </div>
            <AnimatedPillButton href="/work" label="View All Projects" />
          </div>

          <div className="space-y-20 border-t border-neutral-200">
            {homepageProjects.map((project, index) => (
              <RevealContent key={project.title} delay={index * 0.15}>
                <article className="grid gap-10 pt-20 lg:grid-cols-[1fr_1.4fr]">
                  <div className="flex flex-col justify-between gap-8">
                    <div>
                      <p className="text-[0.72rem] uppercase tracking-[0.16em] text-neutral-500">
                        {project.location} · {project.year}
                      </p>
                      <h3 className="mt-6 text-4xl font-medium leading-tight tracking-[-0.03em]">
                        {project.title}
                      </h3>
                      <p className="mt-6 text-base leading-7 text-neutral-600">
                        {project.description}
                      </p>
                    </div>
                    <div className="flex flex-col gap-4">
                      <dl className="grid grid-cols-[auto_1fr] gap-x-8 gap-y-4 text-sm">
                        <dt className="uppercase tracking-[0.16em] text-neutral-400">
                          Category
                        </dt>
                        <dd className="font-medium text-neutral-950">
                          {project.category}
                        </dd>
                        <dt className="uppercase tracking-[0.16em] text-neutral-400">
                          Size
                        </dt>
                        <dd className="font-medium text-neutral-950">
                          {project.size}
                        </dd>
                        <dt className="uppercase tracking-[0.16em] text-neutral-400">
                          Service
                        </dt>
                        <dd className="font-medium text-neutral-950">
                          {project.service}
                        </dd>
                      </dl>
                      <TransitionLink
                        href={`/work/${project.slug}`}
                        className="inline-flex items-center gap-3 text-[0.78rem] uppercase tracking-[0.14em] text-neutral-800 hover:text-[var(--burnt-orange)] transition-colors mt-4"
                      >
                        Explore Project
                        <span className="text-[var(--burnt-orange)]">→</span>
                      </TransitionLink>
                    </div>
                  </div>

                  <RevealImage
                    src={project.image}
                    alt={project.title}
                    className="aspect-square bg-neutral-100"
                    direction={index % 2 === 0 ? "up" : "left"}
                  />
                </article>
              </RevealContent>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black py-24 text-white md:py-32">
        <div className="mx-auto max-w-[1120px] px-6 md:px-10 lg:px-0">
          <SectionLabel letter="C" title="Process" dark />

          <div className="mb-20">
            <h2 className="text-4xl font-medium leading-[1.1] tracking-[-0.04em] md:text-5xl max-w-2xl">
              Our Collaborative Working Process
            </h2>
            <p className="mt-6 text-lg leading-8 text-white/60 max-w-2xl">
              From initial discovery through final delivery, we maintain a
              structured yet flexible approach that keeps you informed and
              engaged at every stage.
            </p>
          </div>

          <div className="grid gap-12 lg:grid-cols-5">
            {processSteps.map((step, index) => (
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
          <div className="mx-auto max-w-[1400px]">
            <SectionLabel letter="C" title="Services" />

            <div className="mb-20 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div>
                <h2 className="text-4xl font-medium tracking-[-0.04em] md:text-5xl">
                  Our Services
                </h2>
                <p className="mt-3 max-w-2xl text-base leading-7 text-neutral-600">
                  Specialized architectural and design services tailored to
                  ambitious clients seeking clarity, elegance, and dependable
                  delivery across all project scales.
                </p>
              </div>
              <AnimatedPillButton href="/contact" label="Get In Touch" />
            </div>

            <div className="grid gap-16 md:grid-cols-2">
              {services.map((service, index) => (
                <RevealContent key={service.title} delay={index * 0.12}>
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
        <div className="relative mx-auto max-w-[1120px] px-6 text-center md:px-10 lg:px-0">
          <RevealContent>
            <h2 className="mx-auto max-w-4xl text-4xl font-medium leading-tight tracking-[-0.04em] md:text-6xl">
              Let&apos;s Create Something Meaningful Together
            </h2>
            <p className="mt-6 mx-auto max-w-2xl text-lg leading-8 text-white/75">
              Whether you&apos;re beginning with a sketch, a site, or a clear
              vision, we&apos;re ready to help shape the next chapter.
            </p>
            <div className="mt-8">
              <AnimatedPillButton href="/contact" label="Contact Us" light />
            </div>
          </RevealContent>
        </div>
      </section>

      <section className="bg-black py-24 text-white md:py-32">
        <div className="mx-auto max-w-[1120px] px-6 md:px-10 lg:px-0">
          <SectionLabel letter="D" title="Testimonials" dark />

          <h2 className="mb-16 text-3xl font-medium leading-tight tracking-[-0.04em] md:text-5xl max-w-3xl">
            What Our Clients Say
          </h2>

          <div className="grid gap-8 lg:grid-cols-2">
            {testimonials.map((testimonial, index) => (
              <RevealContent
                key={testimonial.name}
                delay={index * 0.15}
                direction={index % 2 === 0 ? "up" : "left"}
              >
                <article className="bg-white/5 backdrop-blur-sm border border-white/10 p-10 text-white hover:border-white/30 transition-colors duration-300">
                  <p className="text-lg leading-8 text-white/90">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                  <div className="mt-10 pt-8 border-t border-white/10">
                    <p className="text-lg font-medium tracking-[-0.02em]">
                      {testimonial.name}
                    </p>
                    <p className="mt-2 text-sm text-white/60">
                      {testimonial.role}
                    </p>
                  </div>
                </article>
              </RevealContent>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 md:py-32">
        <div className="mx-auto max-w-[1120px] px-6 md:px-10 lg:px-0">
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

          <div className="space-y-16">
            {posts.map((post, index) => (
              <RevealContent key={post.title} delay={index * 0.15}>
                <article className="grid gap-10 items-center md:grid-cols-[1.2fr_1.3fr]">
                  <RevealImage
                    src={post.image}
                    alt={post.title}
                    className="aspect-square bg-neutral-100"
                    direction={index % 2 === 0 ? "left" : "up"}
                  />

                  <div className="flex flex-col justify-center gap-6">
                    <div>
                      <p className="text-sm text-neutral-500 uppercase tracking-[0.12em]">
                        {post.date} · {post.category}
                      </p>
                      <h3 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.03em] md:text-4xl">
                        {post.title}
                      </h3>
                      <p className="mt-6 text-lg leading-8 text-neutral-600 max-w-lg">
                        {post.description}
                      </p>
                    </div>

                    <Link
                      href="/about"
                      className="inline-flex items-center gap-3 text-[0.78rem] uppercase tracking-[0.14em] text-neutral-800 hover:text-[var(--burnt-orange)] transition-colors w-fit"
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
