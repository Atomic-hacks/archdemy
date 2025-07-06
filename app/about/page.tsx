import OurStory from "@/components/about/AboutSpark";
import Contact from "@/components/about/ContactUs";
import MeetTheTeam from "@/components/about/MeetTeam";
import VisionSection from "@/components/about/OurMission";
import ArchitectureHero from "@/components/ui/other-hero";
import React from "react";

const page = () => {
  return (
    <main>
      <div className="sticky top-0">
        <ArchitectureHero
          descriptionHeader="Broad Vision. Exceptional Service. Lasting Value."
          title="About"
          description="Our mission,both then and now is to consistently deliver high-quality projects on time, while upholding the highest standards of professionalism, integrity, and client satisfaction."
          backgroundImage="/house3.jpg"
          titleId="hero-title"
          descriptionId="hero-description"
        />
      </div>
      <OurStory />
      <VisionSection />
      <MeetTheTeam />
      <Contact />
    </main>
  );
};

export default page;
