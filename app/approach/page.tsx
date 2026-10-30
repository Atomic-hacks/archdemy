import MotionSurface from "@/components/ui/MotionSurface";
import PageHero from "@/components/ui/PageHero";
import ProcessSection from "@/components/studio/ProcessSection";
import DesignPrinciples from "@/components/studio/DesignPrinciples";
export const metadata = {
  title: "Our approach | Archademy",
  description:
    "Context, collaboration, and craft guide Archademy’s design process.",
};
export default function ApproachPage() {
  return (
    <main>
      <MotionSurface>
        <PageHero
          title="Our approach"
          image="/work4.jpg"
          left="How we work"
          right="Context. Collaboration. Craft."
        />
        <section
          id="page-content"
          className="site-gutter approach-introduction"
        >
          <h2 data-reveal="text">
            We listen carefully,
            <br />
            design deliberately,
            <br />
            and stand behind our work.
          </h2>
          <p data-reveal="text">
            Every project is a long-term relationship. We align on goals, site
            realities, budget, and the atmosphere you want to create, then carry
            those decisions through the design.
          </p>
        </section>
        <ProcessSection />
        <DesignPrinciples />
      </MotionSurface>
    </main>
  );
}
