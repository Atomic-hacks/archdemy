"use client";
import React, { useState, useEffect, useRef } from "react";
import { Building, Home, Hotel, Wrench } from "lucide-react";
import { ProjectCard } from "../ui/project-card";

interface Project {
  id: number;
  category: string;
  title: string;
  subtitle: string;
  description: string;
  location: string;
  status: string;
  image: string;
  icon: React.ComponentType<{ className?: string }>;
  gradient: string;
  accentColor: string;
}

const projects: Project[] = [
  {
    id: 1,
    category: "Residential Building",
    title: "Residential Duplex Eneka",
    subtitle: "Luxury Living Redefined",
    description:
      "We handled the development and project management of a 5 bedroom duplex in the city of Port Harcourt, Rivers State, Nigeria.",
    location: "Port Harcourt, Rivers State",
    status: "ongoing",
    image: "/house1.jpg",
    icon: Home,
    gradient: "from-green-600 via-green-500 to-teal-400",
    accentColor: "green",
  },
  {
    id: 2,
    category: "Commercial Property",
    title: "Shortlet Apartments",
    subtitle: "Modern Hospitality Solutions",
    description:
      "Development and Project management of 8 apartments serviced shortlets in the city of Port Harcourt, Rivers State, Nigeria.",
    location: "Port Harcourt, Rivers State",
    status: "ongoing",
    image: "/house1.jpg",
    icon: Building,
    gradient: "from-green-600 via-green-500 to-cyan-400",
    accentColor: "green",
  },
  {
    id: 3,
    category: "Commercial Properties",
    title: "Hotel Extension Project",
    subtitle: "Expanding Hospitality Excellence",
    description:
      "An extension or annex construction for a hotel in the city of Port Harcourt, Rivers State.",
    location: "Port Harcourt, Rivers State",
    status: "ongoing",
    image: "/house1.jpg",
    icon: Hotel,
    gradient: "from-teal-600 via-green-500 to-green-400",
    accentColor: "teal",
  },
  {
    id: 4,
    category: "Real Estate",
    title: "Workshop Project",
    subtitle: "Industrial Innovation Hub",
    description:
      "Development and Project management of workshop in Igbo Etche, Rivers State, Nigeria.",
    location: "Igbo Etche, Rivers State",
    status: "ongoing",
    image: "/house1.jpg",
    icon: Wrench,
    gradient: "from-cyan-600 via-green-500 to-green-400",
    accentColor: "cyan",
  },
  {
    id: 5,
    category: "Residential Properties",
    title: "2 Bedroom Residential Project",
    subtitle: "Compact Urban Living",
    description: "Development of a two bedroom residential apartment.",
    location: "Port Harcourt, Rivers State",
    status: "ongoing",
    image: "/house1.jpg",
    icon: Home,
    gradient: "from-green-600 via-teal-500 to-green-400",
    accentColor: "green",
  },
];

const Projects: React.FC = () => {
  const [, setHoveredProject] = useState<number | null>(null);
  const [activeSection, setActiveSection] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setActiveSection(true), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen py-24 md:py-32 lg:py-40 overflow-hidden bg-white"
    >
      {/* Dynamic Aurora Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute w-full h-full opacity-30"
          style={{
            background: `
              radial-gradient(ellipse 80% 50% at 20% 40%, rgba(16, 185, 129, 0.15) 0%, transparent 50%),
              radial-gradient(ellipse 60% 80% at 80% 20%, rgba(5, 150, 105, 0.1) 0%, transparent 50%),
              radial-gradient(ellipse 100% 70% at 40% 80%, rgba(6, 95, 70, 0.1) 0%, transparent 50%)
            `,
            animation: "aurora 20s ease-in-out infinite alternate",
          }}
        />
      </div>

      {/* Floating Geometric Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute opacity-5"
            style={{
              left: `${10 + i * 8}%`,
              top: `${15 + i * 7}%`,
              transform: `rotate(${i * 30}deg)`,
              animation: `float ${8 + (i % 4)}s ease-in-out infinite ${
                i * 0.5
              }s`,
            }}
          >
            <div
              className="w-24 h-24 border border-green-400/30 transform-gpu"
              style={{
                clipPath:
                  i % 3 === 0
                    ? "polygon(50% 0%, 0% 100%, 100% 100%)"
                    : i % 3 === 1
                    ? "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)"
                    : "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
              }}
            />
          </div>
        ))}
      </div>

      {/* Particle System */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-gradient-to-r from-green-400 to-teal-300 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `sparkle ${3 + Math.random() * 4}s linear infinite ${
                Math.random() * 3
              }s`,
              opacity: 0.6 + Math.random() * 0.4,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 lg:px-16">
        {/* Cinematic Header */}
        <div
          className={`text-center mb-20 md:mb-32 transform transition-all duration-2000 ease-out ${
            activeSection
              ? "translate-y-0 opacity-100"
              : "translate-y-16 opacity-0"
          }`}
        >
          <div className="relative inline-block mb-8">
            <div className="absolute -inset-4 bg-gradient-to-r from-green-700/20 via-green-500/30 to-green-700/20 blur-2xl rounded-full animate-pulse"></div>
            <span className="relative text-sm font-light text-green-700 tracking-[0.3em] uppercase backdrop-blur-sm">
              Portfolio Excellence
            </span>
          </div>

          <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-thin leading-[0.9] mb-8 tracking-tight">
            <span className="inline-block bg-gradient-to-r from-green-600 via-green-700 to-green-600 bg-clip-text text-transparent">
              Our
            </span>
            <br />
            <span className="inline-block bg-gradient-to-r from-green-600 via-green-800 to-green-600 bg-clip-text text-transparent font-light">
              Masterpieces
            </span>
          </h2>

          <div className="w-32 h-0.5 bg-gradient-to-r from-green-700 via-green-600 to-green-700 mx-auto mb-12" />

          <p className="text-lg md:text-xl text-gray-900 font-light leading-relaxed max-w-2xl mx-auto">
            Each project represents our commitment to architectural excellence,
            innovative design, and uncompromising quality in every detail.
          </p>
        </div>

        {/* Premium Projects Grid */}
        <div className="space-y-16 md:space-y-24">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              reversed={index % 2 === 1}
              onHover={setHoveredProject}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
