"use client";

import { useState, useRef, useEffect, JSX } from "react";

interface VisionItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  detail: string;
  image: string;
  imageAlt: string;
}

interface MousePosition {
  x: number;
  y: number;
}

export default function VisionSection(): JSX.Element {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [mousePosition, setMousePosition] = useState<MousePosition>({
    x: 0,
    y: 0,
  });
  const sectionRef = useRef<HTMLElement>(null);

  // Mouse tracking for hover effects
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent): void => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const visionItems: VisionItem[] = [
    {
      id: "vision",
      title: "Our Vision",
      subtitle: "Industry Leadership",
      description:
        "At Spark House Limited, our vision is to be a leader in the construction and project management industry, known for our innovative solutions, unwavering commitment to quality, and superior client service.",
      detail:
        "We strive to exceed expectations, setting new benchmarks for excellence in every project we undertake.",
      image: "/innov1.jpg",
      imageAlt: "Modern architectural vision",
    },
    {
      id: "mission",
      title: "Our Mission",
      subtitle: "Excellence Delivered",
      description:
        "Our mission is simple yet powerful: to deliver outstanding construction and project management services that transform visions into reality.",
      detail:
        "We are driven by a passion for creativity, a dedication to precision, and a relentless pursuit of excellence in every project, regardless of scale or complexity.",
      image: "/innov2.jpg",
      imageAlt: "Construction excellence mission",
    },
    {
      id: "output",
      title: "We Deliver Best Output",
      subtitle: "Innovation & Technology",
      description:
        "We embrace innovation and technology to enhance our processes and deliver cutting-edge solutions.",
      detail:
        "From advanced project management tools to sustainable construction practices, we are at the forefront of industry trends, with our clients at the heart of everything we do.",
      image: "/innov3.jpg",
      imageAlt: "Best output delivery",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-16 sm:py-20 md:py-24 lg:py-32 bg-gradient-to-br from-stone-50 via-white to-green-50 overflow-hidden"
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, rgb(34 197 94 / 0.1) 0%, transparent 50%),
                           radial-gradient(circle at 75% 75%, rgb(21 128 61 / 0.1) 0%, transparent 50%)`,
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24">
        {/* Section Header */}
        <div className="mb-16 sm:mb-20 md:mb-24">
          <div className="max-w-4xl">
            {/* Decorative accent */}
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-px bg-gradient-to-r from-green-600 to-green-700" />
              <span className="text-sm font-medium text-green-700 tracking-[0.15em] uppercase">
                SparkHouse Operations
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-gray-900 leading-[0.9] tracking-tight mb-8">
              Simple, Minimalistic,
              <br />
              <span className="text-gray-600">Sustainable</span>
            </h2>

            <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed font-light max-w-3xl">
              Our operational philosophy is centered on simplicity, minimalism,
              and sustainability. We believe in using these principles to guide
              our work, ensuring that we deliver projects that are not only
              visually stunning but also environmentally conscious and
              efficient.
            </p>
          </div>
        </div>

        {/* Vision Cards Grid */}
        <div className="space-y-12 md:space-y-16 lg:space-y-20">
          {visionItems.map((item: VisionItem, index: number) => (
            <div
              key={item.id}
              className="group relative"
              onMouseEnter={() => setHoveredCard(item.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
                  index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                }`}
              >
                {/* Image Section */}
                <div
                  className={`relative overflow-hidden bg-gray-100 ${
                    index % 2 === 1 ? "lg:col-start-2" : ""
                  }`}
                >
                  <div className="aspect-[4/3] relative">
                    <img
                      src={item.image}
                      alt={item.imageAlt}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    {/* Subtle overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-900/20 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />

                    {/* Image accent */}
                    <div className="absolute top-6 right-6">
                      <div className="w-8 h-8 relative">
                        <div className="absolute top-1/2 left-0 w-full h-px bg-white/60 transform -translate-y-1/2" />
                        <div className="absolute left-1/2 top-0 w-px h-full bg-white/60 transform -translate-x-1/2" />
                        <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-white/60 transform -translate-x-1/2 -translate-y-1/2" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div
                  className={`space-y-6 ${
                    index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""
                  }`}
                >
                  {/* Card number and subtitle */}
                  <div className="flex items-center space-x-6">
                    <span className="text-sm font-medium text-gray-400 tracking-[0.2em]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div className="w-8 h-px bg-gray-200 group-hover:bg-green-300 transition-colors duration-300" />
                    <span className="text-sm font-medium text-green-600 tracking-[0.15em] uppercase">
                      {item.subtitle}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight tracking-tight group-hover:text-green-700 transition-colors duration-300">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-base sm:text-lg text-gray-600 leading-relaxed font-light">
                    {item.description}
                  </p>

                  {/* Detail text */}
                  <p className="text-base text-gray-500 leading-relaxed font-light border-l-2 border-gray-200 pl-6 group-hover:border-green-300 transition-colors duration-300">
                    {item.detail}
                  </p>

                  {/* Hover indicator */}
                  <div className="flex items-center space-x-4 pt-4">
                    <div className="w-12 h-px bg-gradient-to-r from-green-600 to-green-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                    <div className="w-2 h-2 bg-green-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>
              </div>

              {/* Separator line */}
              {index < visionItems.length - 1 && (
                <div className="mt-12 md:mt-16 lg:mt-20">
                  <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
                </div>
              )}

              {/* Hover preview for desktop */}
              {hoveredCard === item.id &&
                typeof window !== "undefined" &&
                window.innerWidth > 768 && (
                  <div
                    className="fixed pointer-events-none z-50 opacity-0 animate-fade-in"
                    style={{
                      left: `${mousePosition.x + 20}px`,
                      top: `${mousePosition.y - 100}px`,
                      transform: "translate(0, 0)",
                    }}
                  >
                    <div className="bg-white/95 backdrop-blur-sm border border-gray-200 p-4 shadow-lg max-w-xs">
                      <p className="text-sm text-gray-600 font-medium">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>
                )}
            </div>
          ))}
        </div>

        {/* Bottom section */}
        <div className="mt-20 sm:mt-24 md:mt-28">
          <div className="text-center space-y-6">
            <div className="flex items-center justify-center space-x-8">
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-green-600 to-transparent" />
              <div className="w-3 h-3 border border-green-600 transform rotate-45" />
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-green-600 to-transparent" />
            </div>
            <p className="text-sm text-gray-500 font-light tracking-[0.15em] uppercase">
              Excellence Through Innovation
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
