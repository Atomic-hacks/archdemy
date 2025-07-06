import Projects from "@/components/projects/Proj";
import ArchitectureHero from "@/components/ui/other-hero";
import React from "react";

const page = () => {
  return (
    <div>
      <div className="sticky top-0">
        <ArchitectureHero
          descriptionHeader="Our work Speaks for itself"
          title="Projects"
          description="At Spark House, we bring visionary ideas to life through innovative design, precision craftsmanship, and a commitment to excellence. Explore a curated selection of our past and ongoing projects — each one a reflection of our passion for quality, functionality, and timeless architectural impact."
          backgroundImage="/house8.jpg"
          titleId="hero-title"
          descriptionId="hero-description"
        />
      </div>
      <Projects />
    </div>
  );
};

export default page;
