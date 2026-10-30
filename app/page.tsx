import MotionSurface from "@/components/ui/MotionSurface";
import JournalList from "@/components/studio/JournalList";
import Hero from "@/components/home/Hero";
import FeaturedWorks from "@/components/home/FeaturedWorks";
import AboutSection from "@/components/home/AboutSection";
export default function HomePage() {
  return (
    <main>
      <Hero />
      <MotionSurface>
        <AboutSection />
        <FeaturedWorks />
        <JournalList />
      </MotionSurface>
    </main>
  );
}
