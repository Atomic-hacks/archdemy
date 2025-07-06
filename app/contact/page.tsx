import ContactPage from "@/components/contact/Contact";
import ArchitectureHero from "@/components/ui/other-hero";
import React from "react";

const page = () => {
  return (
    <div>
      <div className="sticky top-0">
        <ArchitectureHero
          descriptionHeader="Let’s Build Something Remarkable Together"
          title="Contact Us"
          description="Have a vision in mind or simply want to learn more about what we do? We're here to listen, collaborate, and create. Reach out to Spark House to start a conversation — whether it's a new project, a partnership, or a simple inquiry, we’re ready when you are."
          backgroundImage="/house9.jpg"
          titleId="hero-title"
          descriptionId="hero-description"
        />
      </div>
      <ContactPage />
    </div>
  );
};

export default page;
