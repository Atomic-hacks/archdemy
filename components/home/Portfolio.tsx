"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function MinimalPortfolio() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredProject, setHoveredProject] = useState<Projects | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  interface Projects {
    id: number;
    title: string;
    location: string;
    year: string;
    image: string;
  }

  const projects: Projects[] = [
    {
      id: 1,
      title: "Residential Complex",
      location: "Lagos",
      year: "2023",
      image: "/work1.jpg",
    },
    {
      id: 2,
      title: "Cultural Heritage Center",
      location: "Abuja",
      year: "2023",
      image: "/work2.jpg",
    },
    {
      id: 3,
      title: "Commercial Plaza",
      location: "Port Harcourt",
      year: "2022",
      image: "/const1.jpg",
    },
    {
      id: 4,
      title: "Educational Facility",
      location: "Kano",
      year: "2022",
      image: "/work1.jpg",
    },
    {
      id: 5,
      title: "Healthcare Center",
      location: "Enugu",
      year: "2023",
      image: "/work2.jpg",
    },
    {
      id: 6,
      title: "Urban Housing",
      location: "Ibadan",
      year: "2021",
      image: "/const1.jpg",
    },
  ];

  return (
    <div className="relative min-h-screen bg-white">
      {/* Hover Image - Only on large screens */}
      {hoveredProject && (
        <div className="hidden lg:block fixed inset-0 pointer-events-none z-20">
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="relative"
            >
              <div className="w-96 h-72 overflow-hidden shadow-2xl">
                <img
                  src={hoveredProject.image}
                  alt={hoveredProject.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-24 py-20">
          <div className="max-w-4xl mx-auto w-full">
            <div className="text-center space-y-12">
              <motion.div
                className={`transform transition-all duration-1000 ease-out ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }`}
              >
                <div className="space-y-8">
                  {/* Minimal accent line */}
                  <div className="w-16 h-px bg-gradient-to-r from-amber-600 to-amber-700 mx-auto"></div>

                  <div className="space-y-6">
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-extralight text-black leading-[0.9] tracking-tight">
                      SELECTED
                      <br />
                      <span className="font-light">WORKS</span>
                    </h1>

                    <p className="text-lg md:text-xl text-neutral-600 font-light tracking-wide">
                      Archademy Portfolio
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className={`transform transition-all duration-1000 ease-out delay-300 ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }`}
              >
                <div className="max-w-2xl mx-auto">
                  <p className="text-base md:text-lg text-neutral-700 leading-relaxed font-light">
                    A curated collection of architectural projects that embody
                    our commitment to cultural sensitivity, sustainability, and
                    timeless design.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Projects List */}
        <section className="relative bg-white py-24">
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
            <div className="space-y-2">
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group cursor-pointer"
                  onMouseEnter={() => setHoveredProject(project)}
                  onMouseLeave={() => setHoveredProject(null)}
                >
                  <div className="py-6 border-b border-neutral-200 hover:border-amber-600 transition-colors duration-500">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-8">
                        <span className="text-sm text-neutral-500 font-light tracking-wider w-16">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <h3 className="text-2xl md:text-3xl font-extralight text-black group-hover:text-amber-700 transition-colors duration-300 tracking-tight">
                          {project.title}
                        </h3>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-neutral-600 font-light">
                          {project.location}
                        </p>
                        <p className="text-sm text-neutral-500 font-light">
                          {project.year}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Info */}
        <section className="relative bg-black py-20">
          <div className="max-w-4xl mx-auto px-6 md:px-12 lg:px-24 text-center space-y-8">
            <div className="space-y-6">
              <div className="w-16 h-px bg-amber-600 mx-auto"></div>
              <h2 className="text-2xl md:text-3xl font-extralight text-neutral-200 tracking-tight">
                Architecture Beyond Structures
              </h2>
            </div>
            <p className="text-lg text-neutral-600 font-light max-w-2xl mx-auto">
              Each project tells a story about people, highlighting culture,
              environment, and values through innovative and sustainable design
              solutions.
            </p>
            <Link href="/portfolio">
              <button className="group relative px-12 py-4 border border-amber-600 text-amber-700 font-light text-sm tracking-widest uppercase hover:bg-amber-600 hover:text-white transition-all duration-500">
                <span className="relative z-10">VIEW ALL PROJECTS</span>
              </button>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
