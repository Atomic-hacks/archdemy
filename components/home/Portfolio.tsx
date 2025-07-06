"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  ArrowUpRight,
  Building,
  Home,
  Hotel,
  Award,
  Users,
} from "lucide-react";
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
];

const testimonials = [
  {
    id: 1,
    quote:
      "SparkHouse Limited delivered our dream home on time and within budget, exceeding our expectations. We highly recommend them for top-notch construction services.",
    author: "Sarah and John D.",
    role: "Homeowners",
    initials: "SD",
  },
  {
    id: 2,
    quote:
      "SparkHouse Limited transformed our office into a modern workspace. Their attention to detail was exceptional. Thank you for an exceptional job!",
    author: "Emily S.",
    role: "CEO",
    initials: "ES",
  },
  {
    id: 3,
    quote:
      "SparkHouse Limited's expertise and dedication kept our project on track and within budget. We highly recommend them for project management needs.",
    author: "Michael T.",
    role: "Project Investor",
    initials: "MT",
  },
];

const Portfolio: React.FC = () => {
  const [, setHoveredProject] = useState<number | null>(null);
  const [activeSection, setActiveSection] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setActiveSection(true), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen bg-white">
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
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute opacity-5"
            style={{
              left: `${15 + i * 12}%`,
              top: `${20 + i * 10}%`,
              transform: `rotate(${i * 45}deg)`,
              animation: `float ${6 + (i % 3)}s ease-in-out infinite ${
                i * 0.8
              }s`,
            }}
          >
            <div
              className="w-20 h-20 border border-green-400/30 transform-gpu"
              style={{
                clipPath:
                  i % 2 === 0
                    ? "polygon(50% 0%, 0% 100%, 100% 100%)"
                    : "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)",
              }}
            />
          </div>
        ))}
      </div>

      {/* Particle System */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-gradient-to-r from-green-400 to-teal-300 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `sparkle ${2 + Math.random() * 3}s linear infinite ${
                Math.random() * 2
              }s`,
              opacity: 0.4 + Math.random() * 0.4,
            }}
          />
        ))}
      </div>

      {/* Header Section */}
      <section
        ref={sectionRef}
        className="relative py-24 md:py-32 lg:py-40 overflow-hidden"
      >
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 lg:px-16">
          <div
            className={`mb-20 md:mb-32 transform transition-all duration-2000 ease-out ${
              activeSection
                ? "translate-y-0 opacity-100"
                : "translate-y-16 opacity-0"
            }`}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-end">
              <div className="space-y-8">
                {/* Decorative accent */}
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-px bg-gradient-to-r from-green-600 to-green-700"></div>
                  <span className="text-sm font-medium text-green-700 tracking-[0.15em] uppercase">
                    Portfolio Excellence
                  </span>
                </div>

                <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-thin leading-[0.9] tracking-tight">
                  <span className="inline-block bg-gradient-to-r from-green-600 via-green-700 to-green-600 bg-clip-text text-transparent">
                    Our work speaks
                  </span>
                  <br />
                  <span className="inline-block text-gray-600 font-light">
                    through
                  </span>
                  <br />
                  <span className="inline-block bg-gradient-to-r from-green-600 via-green-800 to-green-600 bg-clip-text text-transparent font-light">
                    design excellence
                  </span>
                </h1>

                <div className="w-32 h-0.5 bg-gradient-to-r from-green-700 via-green-600 to-green-700" />
              </div>

              <div className="space-y-8">
                <p className="text-lg md:text-xl text-gray-900 font-light leading-relaxed">
                  Each project represents our commitment to architectural
                  innovation, sustainable design, and the enhancement of urban
                  living through thoughtful, purposeful spaces.
                </p>

                {/* Stats */}
                <div className="flex items-center space-x-8 pt-4">
                  <div className="flex items-center space-x-3">
                    <Award className="w-5 h-5 text-green-600" />
                    <div>
                      <div className="text-2xl font-light text-green-700">
                        50+
                      </div>
                      <div className="text-sm text-gray-500 uppercase tracking-wide">
                        Projects
                      </div>
                    </div>
                  </div>
                  <div className="w-px h-12 bg-gray-200"></div>
                  <div className="flex items-center space-x-3">
                    <Users className="w-5 h-5 text-green-600" />
                    <div>
                      <div className="text-2xl font-light text-green-700">
                        15+
                      </div>
                      <div className="text-sm text-gray-500 uppercase tracking-wide">
                        Awards
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="relative py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-16">
          <div className="relative overflow-hidden bg-black/50 backdrop-blur-sm border border-green-500/20">
            <div className="aspect-video relative overflow-hidden">
              <video
                autoPlay
                muted
                loop
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-1000 ease-out"
              >
                <source src="/sky5.mp4" type="video/mp4" />
              </video>

              {/* Dynamic Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-600/40 via-transparent to-green-800/40 mix-blend-overlay" />

              {/* Center Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30">
                  <div className="w-0 h-0 border-l-8 border-l-white border-t-4 border-t-transparent border-b-4 border-b-transparent ml-1"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Projects Section */}
      <section className="relative py-24 md:py-32">
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 lg:px-16">
          {/* Section Header */}
          <div className="mb-20 md:mb-32">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
              <div className="flex items-center space-x-6">
                <div className="w-8 h-8 relative">
                  <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-green-600 to-green-700 transform -translate-y-1/2"></div>
                  <div className="absolute left-1/2 top-0 w-px h-full bg-gradient-to-b from-green-600 to-green-700 transform -translate-x-1/2"></div>
                  <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-green-600 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
                </div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 tracking-tight">
                  Featured Projects
                </h2>
              </div>
              <div className="text-right space-y-2">
                <span className="text-xl md:text-2xl text-gray-400 font-light">
                  / {projects.length}
                </span>
                <p className="text-sm text-green-600 font-medium tracking-wide uppercase">
                  Portfolio
                </p>
              </div>
            </div>
          </div>

          {/* Projects List */}
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

      {/* Testimonials Section */}
      <section className="relative py-24 md:py-32 bg-gradient-to-br from-green-50/50 to-white overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="grid grid-cols-8 md:grid-cols-12 gap-8">
              {Array.from({ length: 48 }).map((_, i) => (
                <div
                  key={i}
                  className="w-1 h-1 bg-green-600 rounded-full"
                  style={{
                    animationDelay: `${i * 0.2}s`,
                    animation: "float 4s ease-in-out infinite",
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 lg:px-16">
          {/* Section Header */}
          <div className="mb-20 md:mb-24">
            <div className="flex items-center space-x-6 mb-8">
              <div className="w-8 h-8 relative">
                <div className="absolute top-1/2 left-0 w-full h-px bg-green-600 transform -translate-y-1/2"></div>
                <div className="absolute left-1/2 top-0 w-px h-full bg-green-600 transform -translate-x-1/2"></div>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900">
                What Our Clients Say
              </h2>
            </div>
            <div className="max-w-2xl">
              <p className="text-lg md:text-xl text-gray-900 font-light leading-relaxed">
                See what our clients have to say about their experience with our
                architectural excellence and commitment to transforming spaces.
              </p>
            </div>
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`group ${index === 1 ? "md:translate-y-8" : ""}`}
              >
                <div className="bg-white/80 backdrop-blur-sm rounded-xs p-8 md:p-10 shadow-sm border border-green-100/50 hover:shadow-xl hover:border-green-200/50 transition-all duration-500 hover:-translate-y-2">
                  <div className="mb-6">
                    <svg
                      width="32"
                      height="24"
                      viewBox="0 0 32 24"
                      fill="none"
                      className="text-green-600"
                    >
                      <path
                        d="M0 24V12C0 5.4 5.4 0 12 0v4C7.6 4 4 7.6 4 12v2h6v10H0zm18 0V12c0-6.6 5.4-12 12-12v4c-4.4 0-8 3.6-8 8v2h6v10H18z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  <blockquote className="text-base md:text-lg text-gray-900 leading-relaxed mb-8 font-light">
                    &quot;{testimonial.quote}&quot;
                  </blockquote>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-medium text-sm">
                        {testimonial.initials}
                      </span>
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">
                        {testimonial.author}
                      </div>
                      <div className="text-sm text-gray-600">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-20 md:mt-24 text-center">
            <button className="group relative px-8 py-4 bg-transparent border border-green-600/30 text-green-600 font-light text-lg hover:border-green-600 transition-all duration-500 overflow-hidden">
              <div className="absolute inset-0 bg-green-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out origin-left"></div>
              <span className="relative z-10 group-hover:text-white transition-colors duration-700 flex items-center space-x-3">
                <span>Start Your Project Today</span>
                <ArrowUpRight className="w-5 h-5" />
              </span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
