import StudioFilm from "@/components/studio/StudioFilm";
import Image from "next/image";
import TransitionLink from "@/components/ui/TransitionLink";
import MotionSurface from "@/components/ui/MotionSurface";
import { ArrowDown, ArrowUpRight } from "lucide-react";

export const metadata = { title: "About | Archademy", description: "Archademy Design Company Limited — architecture, interiors, and planning in Port Harcourt, Nigeria." };

export default function AboutPage() {
  return (
    <main>
      <MotionSurface>
        <section className="about-split">
          <div className="about-split-copy">
            <div className="about-small-image" data-reveal="image" data-entry>
              <Image
                src="/architect.jpg"
                alt="Architectural design process"
                fill
                sizes="240px"
                className="object-cover"
              />
            </div>
            <p className="about-positioning" data-reveal="text" data-entry>
              Architecture, interiors, and the places we call home.
            </p>
            <h1 data-reveal="text" data-entry>
              About
            </h1>
            <a
              href="#page-content"
              className="page-hero-down"
              aria-label="About our studio"
            >
              <ArrowDown size={18} strokeWidth={1} />
            </a>
          </div>
          <div className="about-split-image" data-reveal="image" data-entry>
            <Image
              src="/int1.jpg"
              alt="A considered interior opening to its surroundings"
              fill
              priority
              sizes="(max-width: 767px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </section>
        <section id="page-content" className="site-gutter about-editorial">
          <p className="section-rule">About us</p>
          <h2 data-reveal="text">
            We are Archademy Design Company Limited, a Port Harcourt practice bringing architecture, interiors, and planning together.
          </h2>
          <div className="about-editorial-body" data-reveal="text">
            <p>
              Our work spans homes, hospitality, retail, and commercial spaces. We bring the building, its interior, and its surroundings into one considered whole.
            </p>
            <p>
              Based in Rivers State, Nigeria, we design with an understanding of place: its climate, culture, materials, and the everyday lives a space must accommodate.
            </p>
            <TransitionLink href="/work" className="editorial-link">
              Explore our projects{" "}
              <span>
                <ArrowUpRight size={15} />
              </span>
            </TransitionLink>
          </div>
        </section>
        <StudioFilm />
        <section className="site-gutter about-disciplines">
          <div className="about-disciplines-heading" data-reveal="text">
            <p className="section-rule">Our disciplines</p>
            <h2>A connected practice.</h2>
            <p>From the possibilities of a site to the detail of an interior, our services connect the different scales of a project.</p>
            <TransitionLink href="/approach" className="editorial-link">How we work <span><ArrowUpRight size={15} /></span></TransitionLink>
          </div>
          <div className="about-discipline-list">
            {[
              ["Architecture & planning", "Architectural design, urban planning, and feasibility studies that establish a clear direction for a site."],
              ["Interiors & renovation", "Interior design and renovation that bring material, light, and everyday use together."],
              ["Engineering & delivery", "Structural engineering and project management that carry design decisions through to construction."],
              ["Sustainability", "Consulting that considers environmental impact, building performance, and occupant wellbeing."],
            ].map(([title, description]) => (
              <article key={title} data-reveal="text"><h3>{title}</h3><p>{description}</p></article>
            ))}
          </div>
        </section>
        <section className="site-gutter about-place">
          <div className="about-place-image" data-reveal="image"><Image src="/house9.jpg" alt="A residence with shaded outdoor living spaces" fill sizes="(max-width: 767px) 100vw, 55vw" className="object-cover" /></div>
          <div className="about-place-copy" data-reveal="text">
            <p>Our studio</p><h2>Rooted in<br />Port Harcourt.</h2>
            <p>Good conversations are where new possibilities begin. Tell us about the place you have in mind.</p>
            <address>KM15 East-West Road,<br />Port Harcourt, Rivers State, Nigeria</address>
            <TransitionLink href="/contact" className="editorial-link">Start a conversation <span><ArrowUpRight size={15} /></span></TransitionLink>
          </div>
        </section>
      </MotionSurface>
    </main>
  );
}
