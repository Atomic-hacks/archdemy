import AnimatedPillButton from "@/components/ui/AnimatedPillButton";
import RevealContent from "@/components/ui/RevealContent";
import Link from "next/link";
import SectionLabel from "@/components/ui/SectionLabel";

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

export default function InsightsSection() {
  return (
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
          <AnimatedPillButton
            href="/work"
            label="View All"
            className="max-w-[22rem]"
          />
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
  );
}
