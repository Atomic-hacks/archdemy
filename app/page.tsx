import HeroSection from "@/components/home/Hero";
import FeaturedWorksSection from "@/components/home/FeaturedWorks";
import AboutSection from "@/components/home/AboutSection";

import StackSection from "@/components/ui/StackSection";

export default function HomePage() {
  return (
    <main className="bg-white text-black">
      <StackSection>
        <HeroSection />
      </StackSection>
      <StackSection>
        <FeaturedWorksSection />
      </StackSection>
      <StackSection>
        <AboutSection />
      </StackSection>
    </main>
  );
}
