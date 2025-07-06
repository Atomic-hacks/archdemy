"use client";
import React, { useState, useEffect } from "react";

const Contact = () => {
  const [, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="w-full bg-white py-20"
      style={{
        position: "relative",
        zIndex: 1,
        contain: "layout style paint",
      }}
    >
      <div className="max-w-6xl mx-auto px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content - Removed parallax temporarily */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="w-16 h-px bg-green-300"></div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-green-900 leading-tight">
                Excellence in
                <span className="block text-green-700 italic">
                  Every Detail
                </span>
              </h1>

              <p className="text-lg text-green-800 leading-relaxed max-w-lg">
                Discover unparalleled service with Spark House Limited. Our
                expert team delivers tailored solutions that transform your
                vision into reality.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group relative overflow-hidden bg-green-800 text-white px-8 py-3 text-sm uppercase tracking-wide">
                <span className="relative z-10">Start Your Project</span>
                <div className="absolute inset-0 bg-green-900 -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></div>
              </button>

              <button className="group relative overflow-hidden text-green-800 px-8 py-3 text-sm uppercase tracking-wide border border-green-300">
                <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                  Learn More
                </span>
                <div className="absolute inset-0 bg-green-800 -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></div>
              </button>
            </div>
          </div>

          {/* Right Content - Video Section */}
          <div className="relative">
            <div className="relative aspect-[4/3] overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src="/house2.jpg"
                alt="house2"
              />

              {/* Elegant overlay rectangles */}
              <div className="absolute inset-0">
                {/* Main subtle overlay */}
                <div className="absolute inset-0 bg-green-900/20"></div>

                {/* Decorative geometric overlay */}
                <div className="absolute top-8 left-8 w-24 h-24 border-2 border-white/30"></div>
                <div className="absolute bottom-8 right-8 w-32 h-20 border-2 border-white/40"></div>

                {/* Elegant corner accent */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-white/20 to-transparent"></div>

                {/* Bottom gradient fade */}
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-green-900/30 to-transparent"></div>
              </div>
            </div>

            {/* Elegant border accent */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-green-500  -z-10"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
