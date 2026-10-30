import Link from "@/components/ui/TransitionLink";
import { ArrowUpRight } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="studio" className="site-gutter studio-introduction">
      <h2 data-reveal="text">
        Design beyond visuals.
        <br />
        Environments that enhance
        <br className="hidden md:block" /> human experience.
      </h2>
      <div className="studio-introduction-body">
        <p>Our approach</p>
        <div>
          <p>
            From residential and commercial developments to bespoke
            architectural concepts, each project is shaped by context, purpose,
            and craft.
          </p>
          <Link href="/about" className="editorial-link">
            More about Archademy{" "}
            <span>
              <ArrowUpRight size={14} />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
