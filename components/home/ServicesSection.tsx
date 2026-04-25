import AnimatedPillButton from "@/components/ui/AnimatedPillButton";
import RevealImage from "@/components/ui/RevealImage";
import RevealContent from "@/components/ui/RevealContent";
import TransitionLink from "@/components/ui/TransitionLink";
import SectionLabel from "@/components/ui/SectionLabel";

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

export default function ServicesSection() {
  return (
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
            <AnimatedPillButton
              href="/contact"
              label="Get In Touch"
              className="max-w-[24rem]"
            />
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
  );
}
