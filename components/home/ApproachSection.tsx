import RevealContent from "@/components/ui/RevealContent";
import SectionLabel from "@/components/ui/SectionLabel";

const steps = [
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
];

export default function ApproachSection() {
  return (
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
          {steps.map((step, index) => (
            <RevealContent key={step.number} delay={index * 0.12} direction="up">
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
  );
}