"use client";
import React, { useState, useEffect } from "react";
import { MapPin } from "lucide-react";

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

interface ProjectCardProps {
  project: Project;
  index?: number;
  reversed?: boolean;
  onHover?: (id: number | null) => void;
  className?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  index = 0,
  reversed = false,
  onHover,
  className = "",
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), index * 200);
    return () => clearTimeout(timer);
  }, [index]);

  return (
    <div
      className={`group relative transform transition-all duration-1500 ease-out ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-24 opacity-0"
      } ${className}`}
      onMouseEnter={() => onHover?.(project.id)}
      onMouseLeave={() => onHover?.(null)}
    >
      <div
        className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center ${
          reversed ? "lg:flex-row-reverse" : ""
        }`}
      >
        {/* Project Image */}
        <div
          className={`relative lg:col-span-7 ${reversed ? "lg:order-2" : ""}`}
        >
          <div className="relative group/image">
            {/* Glow Effect */}
            <div
              className={`absolute -inset-8 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-20 blur-3xl transition-all duration-1000 rounded-3xl`}
            />

            {/* Main Image Container */}
            <div className="relative overflow-hidden bg-black/50 backdrop-blur-sm border border-green-500/20">
              <div className="aspect-[4/3] relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000 ease-out"
                />

                {/* Dynamic Overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient} mix-blend-overlay opacity-40 group-hover:opacity-60 transition-opacity duration-700`}
                />

                {/* Geometric Overlay Pattern */}
                <div
                  className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-700"
                  style={{
                    backgroundImage: `
                      linear-gradient(45deg, rgba(255,255,255,0.1) 25%, transparent 25%),
                      linear-gradient(-45deg, rgba(255,255,255,0.1) 25%, transparent 25%),
                      linear-gradient(45deg, transparent 75%, rgba(255,255,255,0.1) 75%),
                      linear-gradient(-45deg, transparent 75%, rgba(255,255,255,0.1) 75%)
                    `,
                    backgroundSize: "30px 30px",
                    backgroundPosition: "0 0, 0 15px, 15px -15px, -15px 0px",
                  }}
                />
              </div>

              {/* Floating Status Badge */}
              <div className="absolute top-6 left-6 z-20">
                <div className="flex items-center space-x-2 bg-black/70 backdrop-blur-lg rounded-lg px-4 py-2 border border-green-400/30">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <span className="text-xs font-medium text-green-300 uppercase tracking-wider">
                    {project.status}
                  </span>
                </div>
              </div>

              {/* Project Icon */}
              <div className="absolute top-6 right-6 z-20">
                <div
                  className={`p-3 bg-gradient-to-br ${project.gradient} shadow-2xl transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-500`}
                >
                  <project.icon className="w-5 h-5 text-white" />
                </div>
              </div>
            </div>

            {/* Elegant Border Animation */}
            <div
              className={`absolute -z-50 inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r ${project.gradient} p-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-700`}
            >
              <div className="w-full h-full bg-transparent rounded-2xl" />
            </div>
          </div>
        </div>

        {/* Project Content */}
        <div
          className={`lg:col-span-5 space-y-8 ${reversed ? "lg:order-1" : ""}`}
        >
          <div className="space-y-6">
            {/* Category */}
            <div className="flex items-center space-x-3">
              <div
                className={`w-8 h-0.5 bg-gradient-to-r ${project.gradient}`}
              />
              <span className="text-xs font-medium text-green-700 tracking-[0.2em] uppercase">
                {project.category}
              </span>
            </div>

            {/* Title */}
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-light leading-tight">
              <span className="bg-gradient-to-r from-green-700 via-green-800 to-green-700 bg-clip-text text-transparent">
                {project.title}
              </span>
            </h3>

            {/* Subtitle */}
            <p
              className={`text-lg md:text-xl font-light bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`}
            >
              {project.subtitle}
            </p>

            {/* Divider */}
            <div
              className={`w-16 h-0.5 bg-gradient-to-r ${project.gradient}`}
            />
          </div>

          {/* Description */}
          <p className="text-gray-900 text-base md:text-lg leading-relaxed font-light">
            {project.description}
          </p>

          {/* Location */}
          <div className="flex items-center space-x-3 text-gray-600">
            <MapPin className="w-4 h-4 text-green-400" />
            <span className="text-sm font-light">{project.location}</span>
          </div>

          {/* Premium CTA */}
          <div className="pt-4">
            <button className="group relative px-8 py-3 bg-transparent border border-green-600/30 text-green-600 font-light text-base hover:border-green-600 transition-all duration-500 overflow-hidden">
              <div className="absolute inset-0 bg-green-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out origin-left"></div>
              <span
                className="relative z-10 group-hover:text-white transition-colors duration-700"
                style={{
                  fontWeight: "300",
                  letterSpacing: "0.02em",
                }}
              >
                Book Now
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export { ProjectCard };
export type { Project, ProjectCardProps };
