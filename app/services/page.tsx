import ConstructionServicesPage from "@/components/services/OurServices";
import SpecializationComp from "@/components/services/Specialization";
import ArchitectureHero from "@/components/ui/other-hero";
import React from "react";

const page = () => {
  return (
    <div className="">
      <div className="sticky top-0">
        <ArchitectureHero
          descriptionHeader="Broad Vision. Exceptional Service. Lasting Value."
          title="Services"
          description="We are driven by a passion for creativity, a dedication to precision, and a relentless pursuit of excellence. Every project, regardless of scale or complexity, is approached with meticulous attention to detail and a focus on exceeding our clients’ expectations."
          backgroundImage="/house7.jpg"
          titleId="hero-title"
          descriptionId="hero-description"
          titleClassName=" md:text-[15vw] lg:text-[12vw]"
          descriptionClassName="leading-tight"
        />
      </div>
      <ConstructionServicesPage />
      <SpecializationComp />
    </div>
  );
};

export default page;
