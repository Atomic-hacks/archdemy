"use client";
import React, { useEffect, useRef, useState } from "react";
import { Plus } from "lucide-react";

// Type definitions
type ContentAlignment = "left" | "center" | "right";
type ImagePosition = "left" | "right";

interface HeroProps {
  title: string;
  description: string;
  descriptionHeader: string;
  backgroundImage?: string;
  leftIcon?: React.ComponentType<{ className?: string }>;

  // Styling
  titleClassName?: string;
  descriptionClassName?: string;
  backgroundColor?: string;
  textColor?: string;
  containerClassName?: string;

  // Layout
  imagePosition?: ImagePosition;
  contentAlignment?: ContentAlignment;

  // Accessibility
  titleId?: string;
  descriptionId?: string;
}

const ArchitectureHero: React.FC<HeroProps> = ({
  title,
  description,
  descriptionHeader,
  backgroundImage,
  leftIcon: LeftIcon = Plus,
  titleClassName = "",
  descriptionClassName = "",
  backgroundColor = "bg-gradient-to-br from-black via-gray-900 to-green-950",
  containerClassName = "",

  imagePosition = "right",
  contentAlignment = "center",
  titleId,
  descriptionId,
}) => {
  const [scrollY, setScrollY] = useState(0);
  const requestRef = useRef<number | null>(null);

  const handleScroll = () => {
    const newScrollY = window.scrollY;

    // Cancel any pending animation frame to avoid jank
    if (requestRef.current) {
      cancelAnimationFrame(requestRef.current);
    }

    requestRef.current = requestAnimationFrame(() => {
      setScrollY(newScrollY);
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, []);

  const displacement = Math.min(scrollY * 0.25, 100);

  const contentAlignClass: Record<ContentAlignment, string> = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  };

  return (
    <div
      className={`relative min-h-screen w-full overflow-hidden ${backgroundColor} ${containerClassName}`}
    >
      {/* Background image with green overlay */}
      {backgroundImage && (
        <div className="absolute inset-0 z-0">
          <img
            src={backgroundImage}
            alt="Hero background"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-green-900/40 to-black/80" />
        </div>
      )}

      {/* Decorative elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-green-400/5 rounded-full blur-2xl" />
      </div>

      {/* Main layout - Better mobile centering */}
      <main
        className="relative z-10 h-screen flex flex-col md:flex-row items-center justify-center md:justify-between px-4 sm:px-6 md:px-8 lg:px-16 xl:px-20 2xl:px-24 transition-transform duration-[30ms] ease-[cubic-bezier(0.25, 0.46, 0.45, 0.94)] will-change-transform pt-8 pb-24 sm:pt-12 sm:pb-28 md:pt-16 md:pb-16"
        style={{
          transform: `translateY(${displacement}px)`,
        }}
      >
        <div className="flex-1 mt-20 md:m-0 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-xl xl:max-w-2xl 2xl:max-w-4xl mx-auto md:mx-0 text-center md:text-left">
          <h1 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold leading-tight mb-2 sm:mb-3 md:mb-4 lg:mb-6 bg-gradient-to-r from-green-300 via-green-400 to-green-500 bg-clip-text text-transparent">
            {descriptionHeader}
          </h1>
          <p
            id={descriptionId}
            className={`text-base lg:text-lg xl:text-xl font-light leading-relaxed mb-4 sm:mb-6 md:mb-8 bg-gradient-to-r from-white via-green-100 to-green-200 bg-clip-text text-transparent ${contentAlignClass[contentAlignment]} ${descriptionClassName}`}
          >
            {description}
          </p>
        </div>

        {imagePosition === "right" && (
          <div className="flex-shrink-0 mt-2 md:mt-0 md:ml-6 lg:ml-8 xl:ml-12">
            <LeftIcon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 xl:w-10 xl:h-10 text-green-400 opacity-70 hover:opacity-100 transition-opacity" />
          </div>
        )}
      </main>

      {/* Title Overlay - Moved higher up on mobile */}
      <div className="fixed left-0 right-0 z-5 pointer-events-none overflow-hidden bottom-32 md:bottom-12 h-40">
        <h1
          id={titleId}
          className={`relative w-full text-center transition-transform duration-[30ms] ease-[cubic-bezier(0.25, 0.46, 0.45, 0.94)] will-change-transform font-bold  bg-gradient-to-br from-green-900/60 via-green-800/70 to-green-700/75 bg-clip-text text-transparent text-4xl md:text-5xl  ${titleClassName}`}
          style={{
            transform: `translateY(${displacement}px)`,
            textShadow: "0 0 40px rgba(34, 197, 94, 0.1)",
            fontSize: "clamp(2.5rem, 12vw, 12rem)",
            lineHeight: "0.85",
          }}
        >
          <span className="block max-w-full break-words hyphens-auto" lang="en">
            {title}
          </span>
        </h1>
      </div>

      {/* Subtle grid pattern overlay */}
      <div
        className="absolute inset-0 z-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(rgba(34, 197, 94, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(34, 197, 94, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />
    </div>
  );
};

export default ArchitectureHero;
