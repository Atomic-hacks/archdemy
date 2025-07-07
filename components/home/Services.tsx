"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, Compass, Palette, Building, Users } from "lucide-react";

export default function Services() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const services = [
    {
      title: "Architectural Design",
      description:
        "Comprehensive architectural design services. We work closely with stakeholders to ensure timely and excellent delivery of every project.",
      icon: Building,
    },
    {
      title: "Interior Design",
      description:
        "Interior design services for all project types and scope. Creating functional and aesthetically pleasing spaces that enhance user experience.",
      icon: Palette,
    },
    {
      title: "Urban Planning",
      description:
        "Urban design projects that promote sustainable communities. We focus on smart growth principles and functional networks for facilities and social relations.",
      icon: Compass,
    },
    {
      title: "Consulting",
      description:
        "From Project Feasibility Study through all project management stages. Our team of experts are available to guide you through your vision.",
      icon: Users,
    },
  ];

  return (
    <div className="relative min-h-screen bg-stone-50">
      {/* Subtle Background Texture */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute w-full h-full opacity-5"
          style={{
            background: `
              radial-gradient(ellipse 80% 50% at 20% 40%, rgba(180, 83, 9, 0.08) 0%, transparent 50%),
              radial-gradient(ellipse 60% 80% at 80% 20%, rgba(146, 64, 14, 0.06) 0%, transparent 50%),
              radial-gradient(ellipse 100% 70% at 40% 80%, rgba(120, 53, 15, 0.04) 0%, transparent 50%)
            `,
          }}
        />
      </div>

      {/* Main Services Section */}
      <section className="relative min-h-screen bg-transparent flex items-center justify-center py-20 px-8 md:px-16 lg:px-24">
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Left Side - Text Content */}
            <div
              className={`space-y-8 transform transition-all duration-2000 ease-out ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-16 opacity-0"
              }`}
            >
              <div className="space-y-8">
                {/* Refined accent */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-px bg-gradient-to-r from-amber-600 to-amber-700 mt-8"></div>
                  <span className="text-sm font-medium text-amber-700 tracking-[0.15em] uppercase mt-6">
                    Our Services
                  </span>
                </div>

                <h1
                  className="text-4xl md:text-5xl lg:text-6xl font-light text-stone-900 leading-[0.9] tracking-tight"
                  style={{
                    letterSpacing: "-0.03em",
                    fontWeight: "300",
                  }}
                >
                  <span className="inline-block bg-gradient-to-r from-amber-600 via-amber-700 to-amber-600 bg-clip-text text-transparent">
                    Designing
                  </span>
                  <br />
                  <span className="text-stone-800">Tomorrow&apos;s Spaces</span>
                </h1>

                <div className="w-32 h-0.5 bg-gradient-to-r from-amber-700 via-amber-600 to-amber-700"></div>

                <h2
                  className="text-2xl md:text-3xl lg:text-4xl font-light text-stone-700 leading-tight"
                  style={{
                    fontWeight: "300",
                    letterSpacing: "-0.02em",
                  }}
                >
                  Where Innovation Meets Excellence
                </h2>
              </div>

              <div className="max-w-lg space-y-6">
                <p
                  className="text-base md:text-lg text-stone-600 leading-relaxed font-light"
                  style={{
                    lineHeight: "1.7",
                    letterSpacing: "0.005em",
                  }}
                >
                  We offer comprehensive design and consulting services that
                  transform visions into reality through innovative
                  architectural solutions.
                </p>

                <p
                  className="text-base md:text-lg text-stone-600 leading-relaxed font-light"
                  style={{
                    lineHeight: "1.7",
                    letterSpacing: "0.005em",
                  }}
                >
                  From initial concept to final delivery, our expert team
                  ensures every project meets the highest standards of design
                  excellence and functionality.
                </p>
              </div>

              <div className="pt-8">
                <button className="group relative px-10 py-4 bg-amber-600 text-stone-900 font-medium text-lg hover:bg-amber-700 transition-all duration-500 overflow-hidden shadow-lg">
                  <div className="absolute inset-0 bg-amber-700 scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out origin-left"></div>
                  <span
                    className="relative z-10 transition-colors duration-700 flex items-center space-x-3"
                    style={{
                      fontWeight: "500",
                      letterSpacing: "0.05em",
                    }}
                  >
                    <span>START YOUR PROJECT</span>
                    <ArrowUpRight className="w-5 h-5" />
                  </span>
                </button>
              </div>
            </div>

            {/* Right Side - Services Grid */}
            <div
              className={`transform transition-all duration-2000 ease-out delay-500 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-16 opacity-0"
              }`}
            >
              <div className="grid grid-cols-1 gap-6">
                {services.map((service, index) => {
                  const IconComponent = service.icon;
                  return (
                    <div
                      key={index}
                      className="group bg-white/60 backdrop-blur-sm p-8 border border-stone-200/50 shadow-sm hover:shadow-xl hover:border-amber-200/50 transition-all duration-500 hover:-translate-y-2"
                      style={{
                        animationDelay: `${index * 150}ms`,
                      }}
                    >
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-amber-600 to-amber-700 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-500">
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>

                        <div className="flex-1 space-y-3">
                          <h3
                            className="text-xl font-medium text-stone-900 group-hover:text-amber-700 transition-colors duration-500"
                            style={{ letterSpacing: "0.02em" }}
                          >
                            {service.title}
                          </h3>
                          <p className="text-stone-600 leading-relaxed font-light text-sm">
                            {service.description}
                          </p>
                        </div>

                        <div className="flex-shrink-0">
                          <div className="w-8 h-8 flex items-center justify-center group-hover:bg-amber-600 transition-all duration-500 cursor-pointer rounded-full border border-amber-200 group-hover:border-amber-600">
                            <ArrowUpRight className="w-4 h-4 text-amber-600 group-hover:text-white transition-colors duration-500" />
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="relative bg-black  overflow-hidden">
        <div className="relative">
          <div className="relative h-96">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center space-y-8 max-w-4xl mx-auto px-8">
                <div className="space-y-6">
                  <div className="flex items-center justify-center space-x-4">
                    <div className="w-16 h-px bg-gradient-to-r from-amber-600/60 to-amber-700/80"></div>
                    <span className="text-sm font-medium text-amber-600/90 tracking-[0.15em] uppercase">
                      Get In Touch
                    </span>
                    <div className="w-16 h-px bg-gradient-to-r from-amber-600/80 to-amber700/60"></div>
                  </div>

                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-amber-50 leading-tight tracking-tight">
                    Have a Vision for a Project?
                  </h2>

                  <div className="w-32 h-0.5 bg-gradient-to-r from-amber-700 via-amber-600 to-amber-800 mx-auto"></div>

                  <p className="text-lg text-amber-100/90 font-light leading-relaxed max-w-2xl mx-auto">
                    Reach out to us at{" "}
                    <span className="text-amber-600 font-medium">
                      Info@archademyltd.com
                    </span>
                  </p>
                </div>

                <div className="pt-4">
                  <button className="group relative px-10 py-4 bg-amber-600/20 backdrop-blur-sm border border-amber-400/30 text-amber-100 font-medium text-lg hover:bg-amber-600/30 transition-all duration-500 overflow-hidden">
                    <div className="absolute inset-0 bg-amber-600/80 scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out origin-left"></div>
                    <span
                      className="relative z-10 transition-colors duration-700"
                      style={{ letterSpacing: "0.05em" }}
                    >
                      CONTACT US TODAY
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
