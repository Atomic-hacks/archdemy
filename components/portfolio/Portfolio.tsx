"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface Project {
  id: number;
  title: string;
  location: string;
  year: string;
  category: string;
  image: string;
  description: string;
  area: string;
}

export default function Portfolio() {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const projects: Project[] = [
    {
      id: 1,
      title: "Residential Complex",
      location: "Lagos, Nigeria",
      year: "2023",
      category: "Residential",
      image: "/work1.jpg",
      description: "A modern residential complex that seamlessly blends contemporary design with traditional Nigerian architectural elements.",
      area: "2,500 sqm"
    },
    {
      id: 2,
      title: "Cultural Heritage Center",
      location: "Abuja, Nigeria",
      year: "2023",
      category: "Cultural",
      image: "/work2.jpg",
      description: "Celebrating local culture through sustainable design and innovative use of indigenous materials.",
      area: "3,200 sqm"
    },
    {
      id: 3,
      title: "Commercial Plaza",
      location: "Port Harcourt, Nigeria",
      year: "2022",
      category: "Commercial",
      image: "/const1.jpg",
      description: "A mixed-use development fostering community interaction while maintaining environmental consciousness.",
      area: "4,800 sqm"
    },
    {
      id: 4,
      title: "Educational Facility",
      location: "Kano, Nigeria",
      year: "2022",
      category: "Educational",
      image: "/work1.jpg",
      description: "Innovative learning spaces designed to inspire creativity and accommodate diverse educational needs.",
      area: "1,800 sqm"
    },
    {
      id: 5,
      title: "Healthcare Center",
      location: "Enugu, Nigeria",
      year: "2023",
      category: "Healthcare",
      image: "/work2.jpg",
      description: "Healing-focused architecture emphasizing natural light, ventilation, and patient comfort.",
      area: "2,100 sqm"
    },
    {
      id: 6,
      title: "Urban Housing",
      location: "Ibadan, Nigeria",
      year: "2021",
      category: "Residential",
      image: "/const1.jpg",
      description: "Affordable housing solutions that prioritize community building and sustainable living practices.",
      area: "3,600 sqm"
    }
  ];

  const categories: string[] = ["All", "Residential", "Commercial", "Cultural", "Educational", "Healthcare"];
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filteredProjects: Project[] = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  const handleCategoryClick = (category: string): void => {
    setActiveCategory(category);
  };

  const handleProjectClick = (project: Project): void => {
    setSelectedProject(project);
  };

  const handleCloseModal = (): void => {
    setSelectedProject(null);
  };

  return (
    <div className="relative min-h-screen bg-white">
      {/* Main Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-24 py-20">
          <div className="max-w-7xl mx-auto w-full">
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
                      OUR
                      <br />
                      <span className="font-light">PORTFOLIO</span>
                    </h1>

                    <p className="text-lg md:text-xl text-neutral-600 font-light tracking-wide max-w-2xl mx-auto">
                      A Collection of Architectural Excellence
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
                <div className="max-w-3xl mx-auto">
                  <p className="text-base md:text-lg text-neutral-700 leading-relaxed font-light">
                    Each project reflects our commitment to creating spaces that honor cultural heritage, 
                    embrace sustainability, and serve communities with timeless design solutions.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Background Text for Portfolio Section */}
        <section className="relative bg-neutral-50 py-24 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 select-none">
              <h1
                className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-thin text-neutral-100 whitespace-nowrap"
                style={{
                  letterSpacing: "0.05em",
                  fontWeight: "100",
                }}
              >
                COMPLETED PROJECTS
              </h1>
            </div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-4 mb-16">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => handleCategoryClick(category)}
                  className={`px-6 py-2 text-sm font-light tracking-widest uppercase transition-all duration-300 ${
                    activeCategory === category
                      ? "border-b-2 border-amber-600 text-amber-700"
                      : "text-neutral-600 hover:text-amber-700"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group cursor-pointer"
                  onClick={() => handleProjectClick(project)}
                >
                  <div className="space-y-6">
                    <div className="relative overflow-hidden aspect-[4/3]">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500"></div>
                      
                      {/* Overlay on hover */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div className="text-center text-white">
                          <div className="w-12 h-px bg-white mx-auto mb-4"></div>
                          <p className="text-sm font-light tracking-widest uppercase">VIEW PROJECT</p>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-xl font-light text-black group-hover:text-amber-700 transition-colors duration-300">
                            {project.title}
                          </h3>
                          <p className="text-sm text-neutral-600 font-light">
                            {project.location} • {project.year}
                          </p>
                        </div>
                        <span className="text-xs text-neutral-500 font-light tracking-wide uppercase">
                          {project.category}
                        </span>
                      </div>
                      
                      <div className="w-8 h-px bg-neutral-300 group-hover:bg-amber-600 transition-colors duration-300"></div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Project Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
            <div className="bg-white max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="relative">
                <button
                  onClick={handleCloseModal}
                  className="absolute top-6 right-6 z-10 text-white hover:text-amber-300 transition-colors duration-300"
                  aria-label="Close modal"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                
                <div className="aspect-[16/9] overflow-hidden">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="p-8 lg:p-12 space-y-8">
                  <div className="space-y-6">
                    <div className="w-16 h-px bg-amber-600"></div>
                    <h2 className="text-3xl md:text-4xl font-extralight text-black tracking-tight">
                      {selectedProject.title}
                    </h2>
                    <div className="flex flex-wrap gap-6 text-sm text-neutral-600">
                      <span>Location: {selectedProject.location}</span>
                      <span>Year: {selectedProject.year}</span>
                      <span>Area: {selectedProject.area}</span>
                      <span>Category: {selectedProject.category}</span>
                    </div>
                  </div>
                  
                  <p className="text-lg text-neutral-700 font-light leading-relaxed">
                    {selectedProject.description}
                  </p>
                  
                  <div className="pt-4">
                    <button
                      onClick={handleCloseModal}
                      className="px-8 py-3 border border-amber-600 text-amber-700 font-light text-sm tracking-widest uppercase hover:bg-amber-600 hover:text-white transition-all duration-500"
                    >
                      CLOSE
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Call to Action */}
        <section className="relative bg-black text-white py-24">
          <div className="max-w-4xl mx-auto px-6 md:px-12 lg:px-24 text-center space-y-8">
            <div className="space-y-6">
              <div className="w-16 h-px bg-amber-600 mx-auto"></div>
              <h2 className="text-3xl md:text-4xl font-extralight tracking-tight">
                Ready to Begin Your Project?
              </h2>
            </div>
            <p className="text-lg text-neutral-300 font-light">
              Let us create something extraordinary together that honors your vision and serves your community.
            </p>
            <button className="group relative px-12 py-4 bg-amber-600 text-white font-light text-sm tracking-widest uppercase hover:bg-amber-700 transition-all duration-500">
              <span className="relative z-10">START YOUR PROJECT</span>
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}