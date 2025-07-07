"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function About() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen bg-white">
      {/* Main Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-24 py-20">
          <div className="max-w-7xl mx-auto w-full">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
              {/* Left Content */}
              <div className="lg:col-span-7 space-y-12">
                <motion.div
                  className={`transform transition-all duration-1000 ease-out ${
                    isVisible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-8 opacity-0"
                  }`}
                >
                  <div className="space-y-8">
                    {/* Minimal accent line */}
                    <div className="w-16 h-px bg-gradient-to-r from-amber-600 to-amber-700"></div>

                    <div className="space-y-6">
                      <h1 className="text-5xl md:text-6xl lg:text-7xl font-extralight text-black leading-[0.9] tracking-tight">
                        WELCOME TO
                        <br />
                        <span className="font-light">ARCHADEMY</span>
                      </h1>

                      <p className="text-lg md:text-xl text-neutral-600 font-light tracking-wide">
                        Architectural Firm Based in Nigeria
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
                  <div className="space-y-8 max-w-2xl">
                    <p className="text-base md:text-lg text-neutral-700 leading-relaxed font-light">
                      Architecture is beyond structures. It tells a story about
                      people while highlighting culture, environment and values.
                    </p>

                    <p className="text-base md:text-lg text-neutral-700 leading-relaxed font-light">
                      At ADCL, we are dedicated to creating unique and
                      innovative designs using social peculiarities and
                      sustainable practices. We are on a mission to produce
                      flexible, relatable, timeless designs and designers.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  className={`transform transition-all duration-1000 ease-out delay-500 ${
                    isVisible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-8 opacity-0"
                  }`}
                >
                  <button className="group relative px-8 py-3 border border-amber-600 text-amber-700 font-light text-sm tracking-widest uppercase hover:bg-amber-600 hover:text-white transition-all duration-500">
                    <span className="relative z-10">READ MORE</span>
                  </button>
                </motion.div>
              </div>

              {/* Right Image */}
              <div className="lg:col-span-5">
                <motion.div
                  className={`transform transition-all duration-1000 ease-out delay-700 ${
                    isVisible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-8 opacity-0"
                  }`}
                >
                  <div className="relative">
                    <div className="aspect-[3/4] overflow-hidden">
                      <img
                        src="/work2.jpg"
                        alt="Architectural Excellence - ADCL"
                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                      />
                    </div>
                    {/* Minimal shadow accent */}
                    <div className="absolute -bottom-4 -right-4 w-full h-full border border-neutral-200 -z-10"></div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="relative bg-neutral-50 py-24 overflow-hidden">
          {/* Background Text for Mission Section */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 select-none">
              <h1
                className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-thin text-neutral-100 whitespace-nowrap"
                style={{
                  letterSpacing: "0.05em",
                  fontWeight: "100",
                }}
              >
                ARCHADEMY LIMITED
              </h1>
            </div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
            <div className="text-center space-y-12">
              <div className="space-y-6">
                <div className="w-16 h-px bg-amber-600 mx-auto"></div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-extralight text-black tracking-tight">
                  Our Mission
                </h2>
              </div>

              <div className="max-w-4xl mx-auto">
                <p className="text-xl md:text-2xl text-neutral-700 font-light leading-relaxed">
                  We are dedicated to creating unique and innovative designs
                  using social peculiarities and sustainable practices.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="relative bg-black text-white py-24">
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              {/* Left - Image */}
              <div className="order-2 lg:order-1">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src="/const1.jpg"
                    alt="Architectural Vision"
                    className="w-full h-full object-cover filter brightness-75 contrast-110"
                  />
                </div>
              </div>

              {/* Right - Content */}
              <div className="order-1 lg:order-2 space-y-12">
                <div className="space-y-6">
                  <div className="w-16 h-px bg-amber-600"></div>
                  <h3 className="text-3xl md:text-4xl font-extralight tracking-tight">
                    Our Foundation
                  </h3>
                </div>

                <div className="space-y-8">
                  <div className="space-y-4">
                    <h4 className="text-xl font-light tracking-wide">
                      Social Peculiarities
                    </h4>
                    <p className="text-neutral-300 font-light leading-relaxed">
                      Understanding and incorporating local culture, traditions,
                      and social dynamics into every design.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-xl font-light tracking-wide">
                      Sustainable Practices
                    </h4>
                    <p className="text-neutral-300 font-light leading-relaxed">
                      Committed to environmentally responsible design solutions
                      that benefit both communities and the planet.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-xl font-light tracking-wide">
                      Timeless Design
                    </h4>
                    <p className="text-neutral-300 font-light leading-relaxed">
                      Creating flexible, relatable designs that transcend trends
                      and remain relevant across generations.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Leadership Section */}
        <section className="relative bg-white py-24">
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
            <div className="text-center space-y-12">
              <div className="space-y-6">
                <div className="w-16 h-px bg-amber-600 mx-auto"></div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-extralight text-black tracking-tight">
                  Leadership
                </h2>
              </div>

              <div className="max-w-2xl mx-auto space-y-8">
                <h3 className="text-2xl md:text-3xl font-light text-neutral-800">
                  Interior Solutions Owner & Co-Owner
                </h3>
                <p className="text-lg text-neutral-600 font-light leading-relaxed">
                  Leading the vision for innovative architectural solutions that
                  bridge traditional design with contemporary needs.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="relative bg-neutral-100 py-20">
          <div className="max-w-4xl mx-auto px-6 md:px-12 lg:px-24 text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-extralight text-black tracking-tight">
              Ready to Create Something Extraordinary?
            </h2>
            <p className="text-lg text-neutral-600 font-light">
              Let&apos;s discuss how we can bring your architectural vision to
              life.
            </p>
            <button className="group relative px-12 py-4 bg-amber-600 text-white font-light text-sm tracking-widest uppercase hover:bg-amber-700 transition-all duration-500">
              <span className="relative z-10">GET IN TOUCH</span>
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
