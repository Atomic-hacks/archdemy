"use client";
import React, { useEffect, useState } from "react";
import {
  ArrowUpRight,
  Users,
  Briefcase,
  Clock,
  Facebook,
  Twitter,
  Linkedin,
  Home,
} from "lucide-react";

interface OurStoryProps {
  containerClassName?: string;
}

const OurStory: React.FC<OurStoryProps> = ({ containerClassName = "" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState(0);
  //const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  // Auto-cycling active section
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSection((prev) => (prev + 1) % 3);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const stats = [
    { number: "50", label: "Projects Completed", icon: Briefcase },
    { number: "15+", label: "Clients", icon: Users },
    { number: "1", label: "Years In Service", icon: Clock },
  ];

  const socialLinks = [
    { icon: Home, label: "Houzz" },
    { icon: Facebook, label: "Facebook" },
    { icon: Twitter, label: "Twitter" },
    { icon: Linkedin, label: "LinkedIn" },
  ];

  return (
    <div className={`relative min-h-screen bg-white ${containerClassName}`}>
      {/* Main Content */}
      <div className="relative z-10">
        {/* About Section */}
        <section className="relative bg-neutral-50 py-24 overflow-hidden">
          {/* Background Text */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 select-none">
              <h1
                className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-thin text-neutral-100 whitespace-nowrap"
                style={{
                  letterSpacing: "0.05em",
                  fontWeight: "100",
                }}
              >
                ABOUT US
              </h1>
            </div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
            <div className="text-center space-y-12">
              <div
                className={`transform transition-all duration-1000 ease-out ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }`}
              >
                <div className="space-y-6">
                  <div className="w-16 h-px bg-amber-600 mx-auto"></div>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-extralight text-black tracking-tight">
                    About Us
                  </h2>
                </div>
              </div>

              <div
                className={`transform transition-all duration-1000 ease-out delay-300 ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }`}
              >
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-extralight text-black leading-[0.9] tracking-tight mb-8">
                  ARCHADEMY
                </h1>
              </div>

              <div
                className={`transform transition-all duration-1000 ease-out delay-500 ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }`}
              >
                <div className="max-w-4xl mx-auto">
                  <p className="text-xl md:text-2xl text-neutral-700 font-light leading-relaxed">
                    At <span className="text-amber-600">ADCL</span>, we are
                    dedicated to creating unique and innovative designs using
                    social peculiarities and sustainable practices. We are on a
                    mission to produce flexible, relatable, timeless designers
                    and designs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="relative bg-white py-24">
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
            <div
              className={`transform transition-all duration-1000 ease-out delay-700 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className={`text-center space-y-6 transition-all duration-500 ${
                      activeSection === index ? "transform scale-105" : ""
                    }`}
                    onMouseEnter={() => setActiveSection(index)}
                  >
                    <div className="flex justify-center">
                      <div
                        className={`w-16 h-16 rounded-full flex items-center justify-center transition-all duration-500 ${
                          activeSection === index
                            ? "bg-amber-600 text-white"
                            : "bg-neutral-100 text-amber-600"
                        }`}
                      >
                        <stat.icon className="w-8 h-8" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-4xl md:text-5xl font-extralight text-black">
                        {stat.number}
                      </h3>
                      <p className="text-sm font-light text-neutral-600 tracking-wide uppercase">
                        {stat.label}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Get In Touch Section */}
        <section className="relative bg-black text-white py-24">
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
            <div
              className={`transform transition-all duration-1000 ease-out delay-900 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
            >
              <div className="text-center space-y-12">
                <div className="space-y-6">
                  <div className="w-16 h-px bg-black mx-auto"></div>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-extralight tracking-tight">
                    Get In Touch
                  </h2>
                </div>

                <div className="space-y-8">
                  <h3 className="text-2xl md:text-3xl font-light text-neutral-300">
                    Ready to create something extraordinary?
                  </h3>

                  <div className="flex items-center justify-center space-x-3 text-amber-600 group cursor-pointer">
                    <span className="text-lg font-light tracking-wide">
                      CONTACT US
                    </span>
                    <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                  </div>
                </div>

                <div className="flex justify-center space-x-8 pt-8">
                  {socialLinks.map((social, index) => (
                    <div
                      key={index}
                      className="w-12 h-12 border border-neutral-700 flex items-center justify-center hover:border-amber-600 transition-all duration-300 cursor-pointer group"
                    >
                      <social.icon className="w-5 h-5 text-neutral-400 group-hover:text-amber-600 transition-colors duration-300" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default OurStory;
