import SectionMarker from "@/components/ui/SectionMarker";
import RevealContent from "@/components/ui/RevealContent";
import AnimatedPillButton from "@/components/ui/AnimatedPillButton";
import Image from "next/image";

const teamMembers = [
  {
    name: "Ma Yansong",
    role: "Founder & Principal Architect",
    bio: "Born in Beijing, with visionary leadership across 3 continents",
    image: "/team1.jpg",
  },
  {
    name: "Dang Qun",
    role: "Design Director",
    bio: "Shanghai-based, driving design excellence and innovation",
    image: "/team2.jpg",
  },
  {
    name: "Yosuke Hayano",
    role: "Senior Architect",
    bio: "Tokyo-focused expertise in sustainable urban design",
    image: "/team3.jpg",
  },
  {
    name: "Alex Chen",
    role: "Project Manager",
    bio: "Leading construction oversight with precision and care",
    image: "/team4.jpg",
  },
  {
    name: "Sarah Martinez",
    role: "Interior Designer",
    bio: "Specializing in spatial experience and material selection",
    image: "/team5.jpg",
  },
  {
    name: "James Wilson",
    role: "Urban Planner",
    bio: "Strategic planning for sustainable community development",
    image: "/team6.jpg",
  },
  {
    name: "Emma Johnson",
    role: "Design Associate",
    bio: "Fresh perspectives on contemporary architectural forms",
    image: "/team7.jpg",
  },
  {
    name: "Michael Zhang",
    role: "Technical Director",
    bio: "Building information modeling and technical expertise",
    image: "/team8.jpg",
  },
];

export default function AboutPage() {
  return (
    <main className="bg-white text-black">
      {/* Hero Section */}
      <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-black to-neutral-900 text-white flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: "url('/work1.jpg')",
          }}
        />
        <div className="relative mx-auto max-w-[1120px] px-6 md:px-10 lg:px-0 w-full">
          <RevealContent>
            <div>
              <p className="text-sm uppercase tracking-[0.12em] text-white/60 mb-6">
                About Our Studio
              </p>
              <h1 className="max-w-4xl text-5xl md:text-7xl font-medium leading-tight tracking-[-0.05em] mb-8">
                We exist at the intersection of nature and urban life
              </h1>
              <p className="max-w-2xl text-lg md:text-xl leading-8 text-white/75">
                MAD is composed of 150+ people across 3 continents. Our practice
                reimagines the built environment, creating spaces that provoke
                wonder while building deep connections between people and their
                surroundings.
              </p>
            </div>
          </RevealContent>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 md:py-32 bg-white">
        <div className="mx-auto max-w-[1120px] px-6 md:px-10 lg:px-0">
          <SectionMarker letter="A" label="About" />

          <div className="grid gap-16 lg:grid-cols-2 items-center">
            <RevealContent>
              <div>
                <h2 className="text-4xl md:text-5xl font-medium leading-tight tracking-[-0.05em] mb-6">
                  Our Philosophy
                </h2>
                <div className="space-y-6 text-lg leading-8 text-black/68">
                  <p>
                    We believe great architecture emerges from disciplined
                    thinking, contextual sensitivity, and a commitment to
                    material excellence.
                  </p>
                  <p>
                    Every project is an opportunity to create spaces that
                    enhance human experience while respecting the environment
                    and local culture.
                  </p>
                  <p>
                    Our team of architects, designers, and strategists
                    collaborate across disciplines to deliver projects that
                    endure.
                  </p>
                </div>
              </div>
            </RevealContent>

            <div className="relative aspect-square overflow-hidden rounded-3xl">
              <Image
                src="/work4.jpg"
                alt="Studio collaboration"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Stats */}
          <div className="mt-24 grid grid-cols-3 gap-12 border-t border-black/10 pt-16">
            <RevealContent delay={0.1}>
              <div>
                <p className="text-5xl md:text-6xl font-medium tracking-[-0.05em] text-[var(--burnt-orange)]">
                  150+
                </p>
                <p className="mt-4 text-sm md:text-base text-black/62">
                  Team members across 3 continents
                </p>
              </div>
            </RevealContent>
            <RevealContent delay={0.2}>
              <div>
                <p className="text-5xl md:text-6xl font-medium tracking-[-0.05em] text-[var(--burnt-orange)]">
                  25+
                </p>
                <p className="mt-4 text-sm md:text-base text-black/62">
                  Years of practice and innovation
                </p>
              </div>
            </RevealContent>
            <RevealContent delay={0.3}>
              <div>
                <p className="text-5xl md:text-6xl font-medium tracking-[-0.05em] text-[var(--burnt-orange)]">
                  200+
                </p>
                <p className="mt-4 text-sm md:text-base text-black/62">
                  Completed projects worldwide
                </p>
              </div>
            </RevealContent>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 md:py-32 bg-white">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 lg:px-0">
          <div className="mb-16">
            <SectionMarker letter="B" label="Team" />
            <h2 className="text-4xl md:text-5xl font-medium leading-tight tracking-[-0.05em]">
              Our Team
            </h2>
          </div>

          {/* Team Grid - Masonry style with larger cards */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 auto-rows-max">
            {teamMembers.map((member, index) => {
              // Create varying sizes for masonry effect (some larger cards)
              const isLarge = index % 6 === 0 || index % 6 === 1;
              const colSpan = isLarge ? "md:col-span-1" : "";

              return (
                <RevealContent key={member.name} delay={index * 0.06}>
                  <div className={`group ${colSpan}`}>
                    {/* Image */}
                    <div
                      className={`relative overflow-hidden rounded-xl md:rounded-2xl bg-neutral-200 mb-4 transition-transform duration-300 hover:scale-105 ${
                        isLarge
                          ? "aspect-square md:aspect-[0.9]"
                          : "aspect-square"
                      }`}
                    >
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                      />
                    </div>

                    {/* Info */}
                    <div className="space-y-2">
                      <div>
                        <h3 className="text-base md:text-lg font-medium tracking-[-0.02em] group-hover:text-[var(--burnt-orange)] transition-colors">
                          {member.name}
                        </h3>
                        <p className="text-xs md:text-sm text-black/52 uppercase tracking-[0.05em]">
                          {member.role}
                        </p>
                      </div>
                      <p className="text-xs md:text-sm leading-5 text-black/58 line-clamp-2">
                        {member.bio}
                      </p>
                    </div>
                  </div>
                </RevealContent>
              );
            })}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 md:py-32 bg-white">
        <div className="mx-auto max-w-[1120px] px-6 md:px-10 lg:px-0">
          <SectionMarker letter="C" label="Values" />

          <h2 className="text-4xl md:text-5xl font-medium leading-tight tracking-[-0.05em] mb-16">
            Our Core Values
          </h2>

          <div className="grid gap-16 lg:grid-cols-2">
            {[
              {
                title: "Integrity",
                description:
                  "We maintain the highest standards of honesty, transparency, and accountability in all our work and relationships.",
              },
              {
                title: "Excellence",
                description:
                  "Every detail matters. We pursue perfection in design, delivery, and client service without compromise.",
              },
              {
                title: "Innovation",
                description:
                  "We challenge conventions and explore new possibilities, using technology and creativity to advance architecture.",
              },
              {
                title: "Collaboration",
                description:
                  "Our best work emerges from diverse perspectives, deep listening, and genuine partnership with our teams and clients.",
              },
              {
                title: "Sustainability",
                description:
                  "We design with environmental responsibility and long-term impact, creating buildings that endure and respect nature.",
              },
              {
                title: "Craft",
                description:
                  "We celebrate the art of building, from initial sketches through final execution, with attention to every element.",
              },
            ].map((value, index) => (
              <RevealContent key={value.title} delay={index * 0.1}>
                <div className="border-l-4 border-[var(--burnt-orange)] pl-8">
                  <h3 className="text-2xl font-medium mb-4">{value.title}</h3>
                  <p className="text-lg leading-8 text-black/62">
                    {value.description}
                  </p>
                </div>
              </RevealContent>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 bg-black text-white">
        <div className="mx-auto max-w-[1120px] px-6 md:px-10 lg:px-0 text-center">
          <RevealContent>
            <h2 className="text-4xl md:text-6xl font-medium leading-tight tracking-[-0.05em] mb-8">
              Ready to Create Something Meaningful?
            </h2>
            <p className="text-lg md:text-xl leading-8 text-white/75 max-w-2xl mx-auto mb-12">
              Whether you have a specific project in mind or are exploring
              possibilities, we&apos;d love to discuss how we can help bring
              your vision to life.
            </p>
            <AnimatedPillButton href="/contact" label="Get In Touch" light />
          </RevealContent>
        </div>
      </section>
    </main>
  );
}
