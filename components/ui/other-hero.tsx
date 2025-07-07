"use client";
import React, { useEffect, useRef, useState, useCallback } from "react";
import { Plus } from "lucide-react";

// Type definitions
type ContentAlignment = "left" | "center" | "right";
type ImagePosition = "left" | "right";
type OverlayType = "gradient" | "solid" | "radial" | "vignette" | "none";

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

  // Overlay options for better readability
  overlayType?: OverlayType;
  overlayOpacity?: number;
  overlayColor?: string;
  overlayBlur?: boolean;

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
  backgroundColor = "bg-white",
  containerClassName = "",
  imagePosition = "right",
  contentAlignment = "center",
  overlayType = "gradient",
  overlayOpacity = 0.6,
  overlayColor = "black",
  overlayBlur = false,
  titleId,
  descriptionId,
}) => {
  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const headerRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const iconRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const readabilityOverlayRef = useRef<HTMLDivElement>(null);
  const accentRef = useRef<HTMLDivElement>(null);

  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [screenHeight, setScreenHeight] = useState(0);

  // Detect mobile and screen dimensions
  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 768;
      const height = window.innerHeight;
      setIsMobile(mobile);
      setScreenHeight(height);
    };

    checkMobile();
    setMounted(true);

    window.addEventListener("resize", checkMobile);
    window.addEventListener("orientationchange", () => {
      setTimeout(checkMobile, 100);
    });

    return () => {
      window.removeEventListener("resize", checkMobile);
      window.removeEventListener("orientationchange", checkMobile);
    };
  }, []);

  // Generate overlay styles based on type
  const getOverlayStyles = useCallback(() => {
    const opacity = overlayOpacity;
    const color = overlayColor;

    switch (overlayType) {
      case "gradient":
        return {
          background: `linear-gradient(135deg, ${color}/${
            opacity * 0.8
          } 0%, transparent 50%, ${color}/${opacity * 0.4} 100%)`,
        };
      case "solid":
        return {
          backgroundColor: `${color}`,
          opacity: opacity * 0.5,
        };
      case "radial":
        return {
          background: `radial-gradient(circle at center, transparent 20%, ${color}/${
            opacity * 0.7
          } 80%)`,
        };
      case "vignette":
        return {
          background: `radial-gradient(ellipse at center, transparent 0%, transparent 30%, ${color}/${
            opacity * 0.3
          } 70%, ${color}/${opacity * 0.8} 100%)`,
        };
      case "none":
        return {
          display: "none",
        };
      default:
        return {};
    }
  }, [overlayType, overlayOpacity, overlayColor]);

  // Optimized scroll handler with mobile considerations
  const handleScroll = useCallback(() => {
    if (!heroRef.current) return;

    const scrolled = window.pageYOffset;
    const heroHeight = heroRef.current.offsetHeight;
    const scrollProgress = Math.min(scrolled / (heroHeight * 0.8), 1);

    // Reduce parallax intensity on mobile for better performance
    const parallaxIntensity = isMobile ? 0.4 : 0.8;

    // Background parallax - subtle movement
    if (backgroundRef.current) {
      const backgroundMove = scrolled * 0.15 * parallaxIntensity;
      const backgroundScale = 1 + scrollProgress * 0.05;
      backgroundRef.current.style.transform = `translate3d(0, ${backgroundMove}px, 0) scale(${backgroundScale})`;

      // Subtle blur and brightness change
      const blurAmount = scrollProgress * (isMobile ? 0.5 : 1);
      const brightness = 1 - scrollProgress * 0.1;
      const filterBlur = overlayBlur
        ? `blur(${blurAmount + 1}px)`
        : `blur(${blurAmount}px)`;
      backgroundRef.current.style.filter = `${filterBlur} brightness(${brightness})`;
    }

    // Content container parallax
    if (contentRef.current) {
      const contentMove = scrolled * 0.3 * parallaxIntensity;
      const contentScale = Math.max(1 - scrollProgress * 0.1, 0.9);
      const contentOpacity = Math.max(1 - scrollProgress * 0.8, 0);
      contentRef.current.style.transform = `translate3d(0, ${contentMove}px, 0) scale(${contentScale})`;
      contentRef.current.style.opacity = contentOpacity.toString();
    }

    // Header parallax
    if (headerRef.current) {
      const headerMove = scrolled * 0.2 * parallaxIntensity;
      const headerOpacity = Math.max(1 - scrollProgress * 0.6, 0);
      headerRef.current.style.transform = `translate3d(0, ${headerMove}px, 0)`;
      headerRef.current.style.opacity = headerOpacity.toString();
    }

    // Description parallax
    if (descriptionRef.current) {
      const descMove = scrolled * 0.35 * parallaxIntensity;
      const descOpacity = Math.max(1 - scrollProgress * 0.9, 0);
      descriptionRef.current.style.transform = `translate3d(0, ${descMove}px, 0)`;
      descriptionRef.current.style.opacity = descOpacity.toString();
    }

    // Icon parallax
    if (iconRef.current) {
      const iconMove = scrolled * 0.25 * parallaxIntensity;
      const iconRotate = scrollProgress * (isMobile ? 45 : 90);
      const iconScale = Math.max(1 - scrollProgress * 0.3, 0.7);
      iconRef.current.style.transform = `translate3d(0, ${iconMove}px, 0) rotate(${iconRotate}deg) scale(${iconScale})`;
    }

    // Title parallax - background title
    if (titleRef.current) {
      const titleMove = scrolled * 0.1 * parallaxIntensity;
      const titleOpacity = Math.max(1 - scrollProgress * 0.4, 0);
      titleRef.current.style.transform = `translate3d(0, ${titleMove}px, 0)`;
      titleRef.current.style.opacity = titleOpacity.toString();
    }

    // Accent line parallax
    if (accentRef.current) {
      const accentMove = scrolled * 0.4 * parallaxIntensity;
      const accentOpacity = Math.max(1 - scrollProgress * 0.7, 0);
      accentRef.current.style.transform = `translate3d(0, ${accentMove}px, 0)`;
      accentRef.current.style.opacity = accentOpacity.toString();
    }

    // Original overlay effect
    if (overlayRef.current) {
      const overlayOpacity = Math.min(scrollProgress * 0.2, 0.15);
      overlayRef.current.style.opacity = overlayOpacity.toString();
    }

    // Readability overlay - slightly increases opacity on scroll for better text contrast
    if (readabilityOverlayRef.current && overlayType !== "none") {
      const baseOpacity = overlayOpacity * 0.7;
      const scrollOpacity = Math.min(scrollProgress * 0.3, 0.2);
      readabilityOverlayRef.current.style.opacity = (
        baseOpacity + scrollOpacity
      ).toString();
    }
  }, [isMobile, overlayBlur, overlayOpacity, overlayType]);

  useEffect(() => {
    if (!mounted) return;

    let rafId: number;
    const optimizedHandler = () => {
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
      rafId = requestAnimationFrame(handleScroll);
    };

    window.addEventListener("scroll", optimizedHandler, {
      passive: true,
      capture: false,
    });

    handleScroll();

    return () => {
      window.removeEventListener("scroll", optimizedHandler);
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
    };
  }, [mounted, handleScroll]);

  if (!mounted) {
    return (
      <div className="relative h-screen overflow-hidden bg-white">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-neutral-900 text-xl font-light">Loading...</div>
        </div>
      </div>
    );
  }

  const contentAlignClass: Record<ContentAlignment, string> = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  };

  return (
    <div
      ref={heroRef}
      className={`relative overflow-hidden ${backgroundColor} ${containerClassName}`}
      style={{
        height: isMobile ? `${Math.max(screenHeight, 600)}px` : "100vh",
        willChange: "transform",
        perspective: "1000px",
      }}
    >
      {/* Background image with subtle overlay */}
      {backgroundImage && (
        <div
          ref={backgroundRef}
          className="absolute inset-0 z-0"
          style={{
            transform: "scale(1.05)",
            willChange: "transform, filter",
            transformOrigin: "center center",
          }}
        >
          <img
            src={backgroundImage}
            alt="Hero background"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      )}

      {/* Readability Overlay - New configurable overlay */}
      {overlayType !== "none" && (
        <div
          ref={readabilityOverlayRef}
          className="absolute inset-0 z-5"
          style={{
            ...getOverlayStyles(),
            willChange: "opacity",
            backdropFilter: overlayBlur ? "blur(2px)" : "none",
          }}
        />
      )}

      {/* Original subtle overlay for better contrast */}
      <div
        ref={overlayRef}
        className="absolute inset-0 bg-gradient-to-br from-black/10 via-transparent to-amber-900/5 z-6"
        style={{ willChange: "opacity" }}
      />

      {/* Mobile Layout */}
      <div className="absolute inset-0 z-10 md:hidden">
        <div className="flex flex-col h-full justify-center items-center px-6 py-8">
          {/* Accent Line */}
          <div
            ref={accentRef}
            className="mb-8"
            style={{ willChange: "transform, opacity" }}
          >
            <div className="w-16 h-px bg-gradient-to-r from-amber-600 to-amber-700 drop-shadow-sm"></div>
          </div>

          {/* Content Container */}
          <div
            ref={contentRef}
            className="text-center max-w-sm"
            style={{
              willChange: "transform, opacity",
              transformStyle: "preserve-3d",
            }}
          >
            {/* Header */}
            <div
              ref={headerRef}
              className="mb-6"
              style={{ willChange: "transform, opacity" }}
            >
              <h1
                className="text-lg font-light text-amber-900 tracking-widest mb-4 drop-shadow-sm"
                style={{
                  fontWeight: "300",
                  letterSpacing: "0.15em",
                  textShadow: "0 1px 2px rgba(0,0,0,0.1)",
                }}
              >
                {descriptionHeader}
              </h1>
            </div>

            {/* Description */}
            <div
              ref={descriptionRef}
              className="mb-8"
              style={{ willChange: "transform, opacity" }}
            >
              <p
                id={descriptionId}
                className={`text-base text-neutral-300 leading-relaxed font-light ${contentAlignClass[contentAlignment]} ${descriptionClassName} drop-shadow-sm`}
                style={{
                  fontWeight: "300",
                  letterSpacing: "0.01em",
                  lineHeight: "1.6",
                  textShadow: "0 1px 2px rgba(0,0,0,0.1)",
                }}
              >
                {description}
              </p>
            </div>

            {/* Icon */}
            {imagePosition === "right" && (
              <div
                ref={iconRef}
                className="flex justify-center"
                style={{ willChange: "transform" }}
              >
                <div className="p-4 border border-amber-600/30 rounded-full backdrop-blur-sm drop-shadow-md">
                  <LeftIcon className="w-6 h-6 text-amber-800" />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="absolute inset-0 z-10 hidden md:block">
        <div className="h-full flex items-center">
          <div className="max-w-7xl mx-auto px-12 lg:px-20 xl:px-32 w-full">
            <div className="grid grid-cols-12 gap-8 items-center">
              {/* Left Side - Content */}
              <div className="col-span-7 lg:col-span-8">
                {/* Accent Line */}
                <div
                  ref={accentRef}
                  className="mb-8"
                  style={{ willChange: "transform, opacity" }}
                >
                  <div className="w-24 h-px bg-gradient-to-r from-amber-600 to-amber-700 drop-shadow-sm"></div>
                </div>

                {/* Content Container */}
                <div
                  ref={contentRef}
                  className="max-w-2xl"
                  style={{
                    willChange: "transform, opacity",
                    transformStyle: "preserve-3d",
                  }}
                >
                  {/* Header */}
                  <div
                    ref={headerRef}
                    className="mb-8"
                    style={{ willChange: "transform, opacity" }}
                  >
                    <h1
                      className="text-2xl lg:text-3xl font-light text-amber-900 tracking-widest mb-6 drop-shadow-sm"
                      style={{
                        fontWeight: "300",
                        letterSpacing: "0.12em",
                        textShadow: "0 1px 3px rgba(0,0,0,0.1)",
                      }}
                    >
                      {descriptionHeader}
                    </h1>
                  </div>

                  {/* Description */}
                  <div
                    ref={descriptionRef}
                    className="mb-12"
                    style={{ willChange: "transform, opacity" }}
                  >
                    <p
                      id={descriptionId}
                      className={`text-lg lg:text-xl text-neutral-200 leading-relaxed font-light ${contentAlignClass[contentAlignment]} ${descriptionClassName} drop-shadow-sm`}
                      style={{
                        fontWeight: "300",
                        letterSpacing: "0.01em",
                        lineHeight: "1.7",
                        textShadow: "0 1px 3px rgba(0,0,0,0.1)",
                      }}
                    >
                      {description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Side - Icon */}
              <div className="col-span-5 lg:col-span-4 flex justify-center lg:justify-end">
                {imagePosition === "right" && (
                  <div ref={iconRef} style={{ willChange: "transform" }}>
                    <div className="p-8 border border-amber-600/30 rounded-full backdrop-blur-sm hover:bg-amber-100/90 transition-all duration-500 drop-shadow-lg">
                      <LeftIcon className="w-12 h-12 lg:w-16 lg:h-16 text-amber-800" />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Title - Subtle Typography */}
      <div className="absolute inset-0 z-5 pointer-events-none overflow-hidden flex items-center justify-center">
        <h1
          ref={titleRef}
          id={titleId}
          className={`text-amber-900/10 font-extralight tracking-widest select-none ${titleClassName}`}
          style={{
            fontSize: "clamp(4rem, 15vw, 20rem)",
            fontWeight: "100",
            letterSpacing: "0.2em",
            lineHeight: "0.9",
            willChange: "transform, opacity",
            transformStyle: "preserve-3d",
          }}
        >
          {title}
        </h1>
      </div>

      {/* Subtle grid pattern overlay */}
      <div
        className="absolute inset-0 z-0 opacity-3"
        style={{
          backgroundImage: `
            linear-gradient(rgba(120, 53, 15, 0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(120, 53, 15, 0.04) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />
    </div>
  );
};

export default ArchitectureHero;
