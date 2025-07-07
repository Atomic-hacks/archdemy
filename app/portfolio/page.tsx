import Portfolio from "@/components/portfolio/Portfolio";
import ArchitectureHero from "@/components/ui/other-hero";
import React from "react";

const page = () => {
  return (
    <div>
      <div className="sticky top-0">
        <ArchitectureHero
          overlayType="solid"
          overlayOpacity={0.6}
          overlayColor="black"
          overlayBlur={true}
          descriptionHeader="Let’s Build Something Remarkable Together"
          title="Portfolio"
          description="Have a vision in mind or simply want to learn more about what we do? We're here to listen, collaborate, and create. Reach out to Archademy to start a conversation — whether it's a new project, a partnership, or a simple inquiry, we’re ready when you are."
          backgroundImage="/house1.jpg"
          titleId="hero-title"
          descriptionId="hero-description"
        />
      </div>
      <Portfolio />
    </div>
  );
};

export default page;
