"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { VideoParallax } from "../ui/VideoParallax";
import { useScroll } from "framer-motion";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const companyRef = useRef<HTMLDivElement>(null);

  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [screenHeight, setScreenHeight] = useState(0);

  const { scrollY } = useScroll();

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
      setTimeout(checkMobile, 100); // Delay to get accurate dimensions after orientation change
    });

    return () => {
      window.removeEventListener("resize", checkMobile);
      window.removeEventListener("orientationchange", checkMobile);
    };
  }, []);

  // Optimized scroll handler with mobile considerations
  const handleScroll = useCallback(() => {
    if (!heroRef.current) return;

    const scrolled = window.pageYOffset;
    const heroHeight = heroRef.current.offsetHeight;
    const scrollProgress = Math.min(scrolled / (heroHeight * 0.8), 1);

    // Reduce parallax intensity on mobile for better performance
    const parallaxIntensity = isMobile ? 0.6 : 1;

    // Background parallax - reduced on mobile
    if (backgroundRef.current) {
      const backgroundMove = scrolled * 0.2 * parallaxIntensity;
      const backgroundScale = 1 + scrollProgress * 0.1 * parallaxIntensity;
      backgroundRef.current.style.transform = `translate3d(0, ${backgroundMove}px, 0) scale(${backgroundScale})`;

      // Lighter effects on mobile to preserve performance
      const blurAmount = scrollProgress * (isMobile ? 4 : 8);
      const brightness = 1 - scrollProgress * 0.3;
      backgroundRef.current.style.filter = `blur(${blurAmount}px) brightness(${brightness})`;
    }

    // Content container parallax
    if (contentRef.current) {
      const contentMove = scrolled * 0.5 * parallaxIntensity;
      const contentScale = Math.max(1 - scrollProgress * 0.2, 0.8);
      const contentOpacity = Math.max(1 - scrollProgress * 1.1, 0);
      contentRef.current.style.transform = `translate3d(0, ${contentMove}px, 0) scale(${contentScale})`;
      contentRef.current.style.opacity = contentOpacity.toString();
    }

    // Title parallax - subtle on mobile
    if (titleRef.current) {
      const titleMove = scrolled * 0.3 * parallaxIntensity;
      const titleRotate = scrollProgress * (isMobile ? -2 : -5);
      titleRef.current.style.transform = `translate3d(0, ${titleMove}px, 0) rotateX(${titleRotate}deg)`;
    }

    // Subtitle parallax
    if (subtitleRef.current) {
      const subtitleMove = scrolled * 0.4 * parallaxIntensity;
      const subtitleOpacity = Math.max(1 - scrollProgress * 1.3, 0);
      subtitleRef.current.style.transform = `translate3d(0, ${subtitleMove}px, 0)`;
      subtitleRef.current.style.opacity = subtitleOpacity.toString();
    }

    // Buttons parallax
    if (buttonsRef.current) {
      const buttonsMove = scrolled * 0.6 * parallaxIntensity;
      const buttonsScale = Math.max(1 - scrollProgress * 0.3, 0.7);
      buttonsRef.current.style.transform = `translate3d(0, ${buttonsMove}px, 0) scale(${buttonsScale})`;
    }

    // Company name parallax
    if (companyRef.current) {
      const companyMove = scrolled * 0.15 * parallaxIntensity;
      const companyOpacity = Math.max(1 - scrollProgress * 0.7, 0);
      companyRef.current.style.transform = `translate3d(0, ${companyMove}px, 0)`;
      companyRef.current.style.opacity = companyOpacity.toString();
    }

    // Overlay effect
    if (overlayRef.current) {
      const overlayOpacity = Math.min(scrollProgress * 0.6, 0.5);
      overlayRef.current.style.opacity = overlayOpacity.toString();
    }
  }, [isMobile]);

  useEffect(() => {
    if (!mounted) return;

    // Use passive listeners and requestAnimationFrame for smooth performance
    let rafId: number;
    const optimizedHandler = () => {
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
      rafId = requestAnimationFrame(handleScroll);
    };

    // Add scroll listener with passive flag for better mobile performance
    window.addEventListener("scroll", optimizedHandler, {
      passive: true,
      capture: false,
    });

    // Initial call
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
      <main>
        <div className="relative h-screen overflow-hidden bg-black">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-white text-xl">Loading...</div>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="sticky top-0">
      <div
        ref={heroRef}
        className="relative overflow-hidden"
        style={{
          height: isMobile ? `${Math.max(screenHeight, 600)}px` : "100vh",
          willChange: "transform",
          perspective: "1000px",
        }}
      >
        {/* Background Layer with Optimized Parallax */}
        <div
          ref={backgroundRef}
          className="absolute inset-0"
          style={{
            transform: "scale(1.1)",
            willChange: "transform, filter",
            transformOrigin: "center center",
          }}
        >
          <VideoParallax
            scrollY={scrollY}
            mediaItems={[
              {
                type: "video",
                src: "/sky2.mp4",
                alt: "sky2",
              },
            ]}
            className=" "
          />
        </div>

        {/* Dynamic Overlay - Enhanced for mobile */}
        <div
          ref={overlayRef}
          className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/70 z-5"
          style={{ willChange: "opacity" }}
        />

        {/* Mobile Layout - Stacked Vertically */}
        <div className="absolute inset-0 z-10 md:hidden">
          <div className="flex flex-col h-full justify-between px-4 py-8 safe-area-insets">
            {/* Company Name - Top */}
            <div
              ref={companyRef}
              className="text-center pt-4"
              style={{
                willChange: "transform, opacity",
                transformStyle: "preserve-3d",
              }}
            >
              <h1
                className="text-4xl xs:text-5xl sm:text-6xl font-extralight text-white tracking-tighter leading-none"
                style={{
                  fontWeight: "200",
                  textShadow: "0 4px 20px rgba(0,0,0,0.4)",
                  letterSpacing: "-0.06em",
                }}
              >
                <span className="block">SPARK</span>
                <span className="block text-white/95 -mt-2">HOUSE</span>
              </h1>
            </div>

            {/* Content - Center */}
            <div
              ref={contentRef}
              className="flex-1 flex flex-col justify-center px-2"
              style={{
                willChange: "transform, opacity",
                transformStyle: "preserve-3d",
              }}
            >
              {/* Main Headline */}
              <div
                ref={titleRef}
                className="mb-6 text-center"
                style={{ willChange: "transform" }}
              >
                <h2
                  className="text-xl xs:text-2xl sm:text-3xl font-light text-white/90 leading-tight"
                  style={{
                    fontWeight: "300",
                    textShadow: "0 2px 10px rgba(0,0,0,0.4)",
                    letterSpacing: "0.01em",
                  }}
                >
                  <span className="block mb-1">Broad Vision</span>
                  <span className="block mb-1 text-white/85">
                    Excellent Service
                  </span>
                  <span className="block text-white/80">Great Value</span>
                </h2>
              </div>

              {/* Subtitle */}
              <div
                ref={subtitleRef}
                className="mb-8 text-center px-4"
                style={{ willChange: "transform, opacity" }}
              >
                <p
                  className="text-sm sm:text-base text-white/70 leading-relaxed font-light max-w-sm mx-auto"
                  style={{
                    fontWeight: "300",
                    textShadow: "0 1px 6px rgba(0,0,0,0.4)",
                    letterSpacing: "0.01em",
                    lineHeight: "1.5",
                  }}
                >
                  Our goal then and now is to provide quality on time projects
                </p>
              </div>
            </div>

            {/* Buttons - Bottom */}
            <div
              ref={buttonsRef}
              className="flex flex-col gap-3 px-2 pb-4"
              style={{ willChange: "transform" }}
            >
              <button
                className="group px-6 py-4 bg-green-600 text-white font-medium text-sm hover:bg-green-700 transition-all duration-300 active:scale-95 shadow-lg touch-manipulation"
                style={{
                  fontWeight: "500",
                  letterSpacing: "0.05em",
                  minHeight: "48px", // Better touch target
                }}
              >
                <span className="relative z-10 uppercase tracking-wider">
                  Get Free Quote
                </span>
              </button>

              <button
                className="group px-6 py-4 border border-white/40 text-white/90 font-light text-sm hover:bg-white/5 hover:border-white/60 transition-all duration-300 active:scale-95 backdrop-blur-sm touch-manipulation"
                style={{
                  fontWeight: "300",
                  letterSpacing: "0.05em",
                  minHeight: "48px", // Better touch target
                }}
              >
                <span className="relative z-10 uppercase tracking-wider">
                  Get In Touch
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Desktop Layout - Side by Side */}
        <div className="absolute inset-0 z-10 hidden md:block">
          {/* Company Name - Left Side */}
          <div
            ref={companyRef}
            className="absolute left-8 lg:left-16 xl:left-24 top-1/2 transform -translate-y-1/2"
            style={{
              willChange: "transform, opacity",
              transformStyle: "preserve-3d",
            }}
          >
            <h1
              className="text-7xl lg:text-8xl xl:text-9xl 2xl:text-10xl font-extralight text-white tracking-tighter leading-none"
              style={{
                fontWeight: "200",
                textShadow: "0 4px 20px rgba(0,0,0,0.3)",
                letterSpacing: "-0.08em",
              }}
            >
              <span className="block">SPARK</span>
              <span className="block text-white/95">HOUSE</span>
            </h1>
          </div>

          {/* Content Container - Right Side */}
          <div
            ref={contentRef}
            className="absolute right-8 lg:right-16 xl:right-24 top-1/2 transform -translate-y-1/2 max-w-lg"
            style={{
              willChange: "transform, opacity",
              transformStyle: "preserve-3d",
            }}
          >
            {/* Main Headline */}
            <div
              ref={titleRef}
              className="mb-8"
              style={{ willChange: "transform" }}
            >
              <h2
                className="text-2xl lg:text-3xl xl:text-4xl font-light text-white/90 mb-4 leading-tight"
                style={{
                  fontWeight: "300",
                  textShadow: "0 2px 10px rgba(0,0,0,0.3)",
                  letterSpacing: "0.02em",
                }}
              >
                Broad Vision
                <span className="block mt-1 text-white/85">
                  Excellent Service
                </span>
                <span className="block mt-1 text-white/80">Great Value</span>
              </h2>
            </div>

            {/* Subtitle */}
            <div
              ref={subtitleRef}
              className="mb-12"
              style={{ willChange: "transform, opacity" }}
            >
              <p
                className="text-base lg:text-lg text-white/60 leading-relaxed font-light"
                style={{
                  fontWeight: "300",
                  textShadow: "0 1px 6px rgba(0,0,0,0.3)",
                  letterSpacing: "0.01em",
                  lineHeight: "1.6",
                }}
              >
                Our goal then and now is to provide quality on time projects
              </p>
            </div>

            {/* Buttons */}
            <div
              ref={buttonsRef}
              className="flex flex-col gap-4"
              style={{ willChange: "transform" }}
            >
              <button
                className="group px-8 py-3 bg-green-600 text-white font-medium text-base hover:bg-green-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                style={{
                  fontWeight: "500",
                  letterSpacing: "0.05em",
                }}
              >
                <span className="relative z-10 uppercase tracking-wider">
                  Get Free Quote
                </span>
              </button>

              <button
                className="group px-8 py-3 border border-white/30 text-white/90 font-light text-base hover:bg-white/5 hover:border-white/50 transition-all duration-300 transform hover:scale-105 backdrop-blur-sm"
                style={{
                  fontWeight: "300",
                  letterSpacing: "0.05em",
                }}
              >
                <span className="relative z-10 uppercase tracking-wider">
                  Get In Touch
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <div className="absolute bottom-6 md:bottom-12 left-1/2 transform -translate-x-1/2 z-20">
          <div className="flex flex-col items-center text-white/50 group cursor-pointer">
            <span
              className="text-xs mb-2 md:mb-3 font-light tracking-widest uppercase opacity-60 group-hover:opacity-90 transition-opacity"
              style={{
                letterSpacing: "0.15em",
              }}
            >
              Scroll
            </span>
            <div className="relative">
              <div className="w-5 h-8 md:w-6 md:h-10 border border-white/20 rounded-full flex justify-center group-hover:border-white/40 transition-colors">
                <div className="w-0.5 h-1.5 md:h-2 bg-white/40 rounded-full mt-1.5 md:mt-2 animate-bounce group-hover:bg-white/60 transition-colors" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
