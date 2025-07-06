/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export default function About() {
  const videoRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (videoRef.current) {
      (videoRef.current as HTMLVideoElement).play().catch((error: Error) => {
        console.error("Video play failed:", error);
      });
    }

    const timer = setTimeout(() => setIsVisible(true), 300);
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
              left: `${10 + i * 12}%`,
              top: `${15 + i * 10}%`,
              transform: `rotate(${i * 45}deg)`,
              animation: `float ${6 + (i % 3)}s ease-in-out infinite ${
                i * 0.8
              }s`,
            }}
          >
            <div
              className="w-16 h-16 border border-green-400/30 transform-gpu"
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
        {[...Array(25)].map((_, i) => (
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

      {/* Main Welcome Section */}
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
                {/* Decorative accent */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-px bg-gradient-to-r from-green-600 to-green-700 mt-8"></div>
                  <span className="text-sm font-medium text-green-700 tracking-[0.15em] uppercase mt-6">
                    Excellence in Design
                  </span>
                </div>

                <h1
                  className="text-4xl md:text-5xl lg:text-6xl font-thin text-black leading-[0.9] tracking-tight"
                  style={{
                    letterSpacing: "-0.03em",
                  }}
                >
                  <span className="inline-block bg-gradient-to-r from-green-600 via-green-700 to-green-600 bg-clip-text text-transparent">
                    Welcome to
                  </span>
                  <br />
                  <span className="text-black/80">SparkHouse Limited</span>
                </h1>

                <div className="w-32 h-0.5 bg-gradient-to-r from-green-700 via-green-600 to-green-700"></div>

                <h2
                  className="text-2xl md:text-3xl lg:text-4xl font-light text-black/80 leading-tight"
                  style={{
                    fontWeight: "300",
                    letterSpacing: "-0.02em",
                  }}
                >
                  Where We Build Your Visions
                </h2>
              </div>

              <div className="max-w-lg space-y-6">
                <p
                  className="text-base md:text-lg text-black/70 leading-relaxed font-light"
                  style={{
                    lineHeight: "1.7",
                    letterSpacing: "0.005em",
                  }}
                >
                  Established over a decade ago, Sparkhouse Designs &
                  Construction has been a cornerstone of innovative
                  architectural solutions.
                </p>

                <p
                  className="text-base md:text-lg text-black/70 leading-relaxed font-light"
                  style={{
                    lineHeight: "1.7",
                    letterSpacing: "0.005em",
                  }}
                >
                  In 2017, we formalized our operations as a corporate
                  organization in Nigeria, while maintaining our core ethos of
                  delivering timeless structures and support services within the
                  AEC industry.
                </p>
              </div>

              <div className="pt-8">
                <div className="space-y-6">
                  <div className="bg-green-50/30 backdrop-blur-sm rounded-sm p-6 border border-green-100/50">
                    <h3
                      className="text-lg font-medium text-black mb-2"
                      style={{
                        fontWeight: "400",
                        letterSpacing: "-0.01em",
                      }}
                    >
                      📋 Ready to Start Your Project?
                    </h3>
                    <p className="text-black/70 font-light text-sm leading-relaxed">
                      Schedule a consultation today and let&apos;s bring your
                      vision to life.
                    </p>
                  </div>

                  <button className="group relative px-8 py-4 bg-green-600 text-white font-light text-lg hover:bg-green-700 transition-all duration-500 overflow-hidden">
                    <div className="absolute inset-0 bg-green-700 scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out origin-left"></div>
                    <span
                      className="relative z-10 transition-colors duration-700"
                      style={{
                        fontWeight: "300",
                        letterSpacing: "0.02em",
                      }}
                    >
                      Book Consultation Now
                    </span>
                  </button>
                </div>
              </div>
            </div>

            {/* Right Side - Image */}
            <motion.div
              className={`transform transition-all duration-2000 ease-out delay-500 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-16 opacity-0"
              }`}
            >
              <div className="relative">
                <div className="relative overflow-hidden">
                  <img
                    src="/house10.jpg"
                    alt="Architectural Excellence - SparkHouse Limited"
                    className="w-full h-auto shadow-2xl transition-transform duration-700 hover:scale-105"
                    style={{
                      aspectRatio: "3/2",
                      objectFit: "cover",
                    }}
                  />
                  {/* Refined accent border with glow effect */}
                  <div className="absolute -bottom-6 -right-6 w-full h-full border border-green-600/30 -z-10 bg-gradient-to-br from-green-100/20 to-transparent backdrop-blur-sm"></div>
                </div>

                {/* Floating accent elements */}
                <div className="absolute -top-4 -left-4 w-8 h-8 border-2 border-green-600/40 transform rotate-45 animate-pulse"></div>
                <div
                  className="absolute -bottom-2 -right-2 w-6 h-6 bg-green-600/20 rounded-full animate-bounce"
                  style={{ animationDelay: "1s" }}
                ></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Enhanced Video Section */}
      <section className="sticky top-40 overflow-hidden">
        <div className="relative">
          {/* Video background with overlay */}
          <div className="relative h-screen">
            <video
              ref={videoRef}
              className="absolute inset-0 w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
            >
              <source src="/sky4.mp4" type="video/mp4" />
            </video>

            {/* Enhanced overlay with gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60"></div>

            {/* Floating overlay elements */}
            <div className="absolute inset-0">
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="absolute opacity-20"
                  style={{
                    left: `${20 + i * 15}%`,
                    top: `${30 + i * 8}%`,
                    animation: `float ${8 + (i % 2)}s ease-in-out infinite ${
                      i * 1.2
                    }s`,
                  }}
                >
                  <div className="w-12 h-12 border border-white/30 rounded-full"></div>
                </div>
              ))}
            </div>

            {/* Content overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center space-y-8 max-w-4xl mx-auto px-8">
                <div className="space-y-6">
                  <div className="flex items-center justify-center space-x-4">
                    <div className="w-16 h-px bg-gradient-to-r from-white/60 to-white/80"></div>
                    <span className="text-sm font-medium text-white/90 tracking-[0.15em] uppercase">
                      Our Vision
                    </span>
                    <div className="w-16 h-px bg-gradient-to-r from-white/80 to-white/60"></div>
                  </div>

                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-thin text-white leading-tight tracking-tight">
                    Crafting Tomorrow&apos;s
                    <br />
                    <span className="bg-gradient-to-r from-green-400 to-green-300 bg-clip-text text-transparent">
                      Architectural Legacy
                    </span>
                  </h2>

                  <div className="w-32 h-0.5 bg-gradient-to-r from-green-400 via-white to-green-400 mx-auto"></div>

                  <p className="text-lg md:text-xl text-white/90 font-light leading-relaxed max-w-2xl mx-auto">
                    Every structure we create tells a story of innovation,
                    sustainability, and timeless design excellence.
                  </p>
                </div>

                <div className="pt-8">
                  <button className="group relative px-10 py-4 bg-white/10 backdrop-blur-sm border border-white/30 text-white font-light text-lg hover:bg-white/20 transition-all duration-500 overflow-hidden">
                    <div className="absolute inset-0 bg-green-600/80 scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out origin-left"></div>
                    <span className="relative z-10 transition-colors duration-700">
                      Explore Our Portfolio
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
