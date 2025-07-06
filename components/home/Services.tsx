"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Award, Users, Target, Settings } from "lucide-react";

export default function Services() {
  const [activeSection, setActiveSection] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setActiveSection(true), 200);
    return () => clearTimeout(timer);
  }, []);

  const services = [
    {
      title: "Building Renovation Services",
      description:
        "Exterior/interior remodeling, landscape remodeling, and comprehensive project management to transform your spaces.",
      number: "01",
      subServices: [
        "Exterior/Interior Remodeling",
        "Landscape Remodeling",
        "Project Management",
      ],
      icon: Settings,
      gradient: "from-green-600 via-green-500 to-teal-400",
    },
    {
      title: "Consulting Services",
      description:
        "Expert guidance from government approvals to facility management, supporting your project at every stage.",
      number: "02",
      subServices: [
        "Government Approval/Permits",
        "Project Support Services",
        "Facility Management",
        "Real Estate Development/Management",
        "Training Services",
      ],
      icon: Target,
      gradient: "from-green-600 via-green-500 to-cyan-400",
    },
    {
      title: "Project Documentary",
      description:
        "Comprehensive documentation and showcase services including our signature 'Flip My Crib' program.",
      number: "03",
      subServices: ["Flip My Crib"],
      icon: Award,
      gradient: "from-teal-600 via-green-500 to-green-400",
    },
    {
      title: "Building Construction Services",
      description:
        "Full-scale construction solutions with dedicated project management and contracting expertise.",
      number: "04",
      subServices: ["Project Management", "Project Contracting"],
      icon: Users,
      gradient: "from-green-600 via-green-800 to-green-600",
    },
  ];

  const processSteps = [
    {
      phase: "Discovery",
      description: "Understanding vision, context, and aspirations",
    },
    {
      phase: "Conceptual Design",
      description: "Translating ideas into architectural poetry",
    },
    {
      phase: "Development",
      description: "Refining every detail with precision and care",
    },
    {
      phase: "Realization",
      description: "Bringing dreams to life with masterful execution",
    },
  ];

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

      {/* Hero Section */}
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
                    Service Excellence
                  </span>
                </div>

                <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-thin leading-[0.9] tracking-tight">
                  <span className="inline-block bg-gradient-to-r from-green-600 via-green-700 to-green-600 bg-clip-text text-transparent">
                    Our Services
                  </span>
                  <br />
                  <span className="inline-block text-gray-600 font-light">
                    inspire
                  </span>
                  <br />
                  <span className="inline-block bg-gradient-to-r from-green-600 via-green-800 to-green-600 bg-clip-text text-transparent font-light">
                    excellence
                  </span>
                </h1>

                <div className="w-32 h-0.5 bg-gradient-to-r from-green-700 via-green-600 to-green-700" />
              </div>

              <div className="space-y-8">
                <p className="text-lg md:text-xl text-gray-900 font-light leading-relaxed">
                  Our mission is simple: to ignite the spark of inspiration and
                  functionality in every project we undertake, leading the way
                  and reshaping the narrative of architectural brilliance.
                </p>

                {/* Stats */}
                <div className="flex items-center space-x-8 pt-4">
                  <div className="flex items-center space-x-3">
                    <Award className="w-5 h-5 text-green-600" />
                    <div>
                      <div className="text-2xl font-light text-green-700">
                        4
                      </div>
                      <div className="text-sm text-gray-500 uppercase tracking-wide">
                        Services
                      </div>
                    </div>
                  </div>
                  <div className="w-px h-12 bg-gray-200"></div>
                  <div className="flex items-center space-x-3">
                    <Users className="w-5 h-5 text-green-600" />
                    <div>
                      <div className="text-2xl font-light text-green-700">
                        100+
                      </div>
                      <div className="text-sm text-gray-500 uppercase tracking-wide">
                        Projects
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="relative py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-16">
          <div className="relative overflow-hidden bg-black/50 backdrop-blur-sm border border-green-500/20">
            <div className="aspect-video relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-green-600/60 via-green-700/40 to-green-800/60"></div>

              {/* Center Content */}
              <div className="absolute inset-0 flex items-center justify-center text-center text-white p-8">
                <div className="max-w-4xl space-y-8">
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight">
                    Philosophy
                  </h2>
                  <p className="text-lg md:text-xl font-light leading-relaxed opacity-90">
                    Every project begins with understanding the essence of space
                    and the souls who inhabit it. Architecture should transcend
                    the temporal, creating environments that resonate across
                    generations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
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
                  What We Offer
                </h2>
              </div>
              <div className="text-right space-y-2">
                <span className="text-xl md:text-2xl text-gray-400 font-light">
                  / {services.length}
                </span>
                <p className="text-sm text-green-600 font-medium tracking-wide uppercase">
                  Services
                </p>
              </div>
            </div>
          </div>

          {/* Services List */}
          <div className="space-y-16 md:space-y-24">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={service.number}
                  className="group"
                  style={{
                    animationDelay: `${index * 200}ms`,
                    animation: activeSection
                      ? "fadeInUp 1s ease-out forwards"
                      : "none",
                  }}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                    {/* Number & Icon */}
                    <div className="lg:col-span-2 flex items-center space-x-4">
                      <span className="text-6xl md:text-7xl lg:text-8xl font-light text-green-300 group-hover:text-green-400 transition-colors duration-700">
                        {service.number}
                      </span>
                      <div
                        className={`w-12 h-12 rounded-full bg-gradient-to-r ${service.gradient} flex items-center justify-center opacity-80 group-hover:opacity-100 transition-opacity duration-500`}
                      >
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="lg:col-span-9 space-y-6">
                      <h3 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight group-hover:text-green-700 transition-colors duration-500">
                        {service.title}
                      </h3>

                      <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-light max-w-4xl">
                        {service.description}
                      </p>

                      {/* Sub-services */}
                      <div className="pt-4">
                        <div className="flex flex-wrap gap-3">
                          {service.subServices.map((subService, subIndex) => (
                            <span
                              key={subIndex}
                              className="px-4 py-2 bg-green-100/80 text-green-700 rounded-full text-sm font-medium border border-green-100 hover:bg-green-100 hover:border-green-200 transition-colors duration-300"
                            >
                              {subService}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Arrow */}
                    <div className="lg:col-span-1 flex justify-center lg:justify-end">
                      <div className="w-12 h-12 flex items-center justify-center group-hover:bg-green-600 transition-all duration-500 cursor-pointer relative overflow-hidden rounded-full border border-green-200 group-hover:border-green-600">
                        <ArrowUpRight className="w-5 h-5 text-green-600 group-hover:text-white transition-colors duration-500" />
                      </div>
                    </div>
                  </div>

                  {/* Divider */}
                  {index < services.length - 1 && (
                    <div className="mt-16 md:mt-24">
                      <div className="w-full h-px bg-gradient-to-r from-transparent via-green-200/60 to-transparent"></div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
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
                Our Process
              </h2>
            </div>
            <div className="max-w-2xl">
              <p className="text-lg md:text-xl text-gray-900 font-light leading-relaxed">
                Crafting spaces that inspire and endure through meticulous
                attention to detail and unwavering commitment to excellence.
              </p>
            </div>
          </div>

          {/* Process Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {processSteps.map((step, index) => (
              <div
                key={step.phase}
                className={`group ${
                  index === 1 || index === 2 ? "md:translate-y-8" : ""
                }`}
              >
                <div className="bg-white/80 backdrop-blur-sm rounded-xs p-8 md:p-10 shadow-sm border border-green-100/50 hover:shadow-xl hover:border-green-200/50 transition-all duration-500 hover:-translate-y-2">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-3 h-3 bg-green-600 rounded-full group-hover:scale-150 transition-transform duration-500"></div>
                    <span className="text-sm text-green-600 font-medium tracking-wide uppercase">
                      Step {index + 1}
                    </span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-light text-gray-900 mb-4 group-hover:text-green-700 transition-colors duration-500">
                    {step.phase}
                  </h3>
                  <p className="text-base md:text-lg text-gray-700 leading-relaxed font-light">
                    {step.description}
                  </p>
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
}
