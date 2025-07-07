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
  const accentRef = useRef<HTMLDivElement>(null);
  const addressRef = useRef<HTMLDivElement>(null);
  const textBackdropRef = useRef<HTMLDivElement>(null);

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
      setTimeout(checkMobile, 100);
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
      const blurAmount = scrollProgress * (isMobile ? 1 : 2);
      const brightness = 1 - scrollProgress * 0.2;
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

    // Accent line parallax
    if (accentRef.current) {
      const accentMove = scrolled * 0.25 * parallaxIntensity;
      const accentOpacity = Math.max(1 - scrollProgress * 0.8, 0);
      accentRef.current.style.transform = `translate3d(0, ${accentMove}px, 0)`;
      accentRef.current.style.opacity = accentOpacity.toString();
    }

    // Address parallax
    if (addressRef.current) {
      const addressMove = scrolled * 0.35 * parallaxIntensity;
      const addressOpacity = Math.max(1 - scrollProgress * 0.9, 0);
      addressRef.current.style.transform = `translate3d(0, ${addressMove}px, 0)`;
      addressRef.current.style.opacity = addressOpacity.toString();
    }

    // Text backdrop parallax
    if (textBackdropRef.current) {
      const backdropMove = scrolled * 0.45 * parallaxIntensity;
      const backdropOpacity = Math.max(1 - scrollProgress * 0.8, 0);
      textBackdropRef.current.style.transform = `translate3d(0, ${backdropMove}px, 0)`;
      textBackdropRef.current.style.opacity = backdropOpacity.toString();
    }

    // Overlay effect - subtle
    if (overlayRef.current) {
      const overlayOpacity = Math.min(scrollProgress * 0.3, 0.2);
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
        <div className="relative h-screen overflow-hidden bg-white">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-neutral-900 text-xl font-light">
              Loading...
            </div>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="sticky top-0">
      <div
        ref={heroRef}
        className="relative overflow-hidden bg-white"
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
                src: "/innov2.mp4",
                alt: "innov1",
              },
            ]}
            className=""
          />
        </div>

        {/* Clean Overlay for Better Contrast */}
        <div
          ref={overlayRef}
          className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/20 z-5"
          style={{ willChange: "opacity" }}
        />

        {/* Mobile Layout - Clean and Simple */}
        <div className="absolute inset-0 z-10 md:hidden">
          <div className="flex flex-col h-full justify-center items-center px-8 py-8">
            {/* Content Container */}
            <div className="relative z-10 text-center">
              {/* Accent Line */}
              <div
                ref={accentRef}
                className="mb-8"
                style={{ willChange: "transform, opacity" }}
              >
                <div className="w-16 h-px bg-gradient-to-r from-amber-500 to-amber-600"></div>
              </div>

              {/* Company Name */}
              <div
                ref={companyRef}
                className="text-center mb-8"
                style={{
                  willChange: "transform, opacity",
                  transformStyle: "preserve-3d",
                }}
              >
                <h1
                  className="text-4xl font-extralight text-white tracking-wide leading-none"
                  style={{
                    fontWeight: "200",
                    letterSpacing: "0.1em",
                    textShadow: "0 2px 4px rgba(0,0,0,0.8)",
                  }}
                >
                  ARCHADEMY
                </h1>
                <p className="text-sm text-amber-200 font-light mt-2 tracking-widest">
                  ARCHITECTURAL FIRM
                </p>
              </div>

              {/* Content */}
              <div
                ref={contentRef}
                className="text-center max-w-sm"
                style={{
                  willChange: "transform, opacity",
                  transformStyle: "preserve-3d",
                }}
              >
                {/* Main Headline */}
                <div
                  ref={titleRef}
                  className="mb-6"
                  style={{ willChange: "transform" }}
                >
                  <h2
                    className="text-2xl font-light text-white leading-tight mb-4"
                    style={{
                      fontWeight: "300",
                      letterSpacing: "0.02em",
                      textShadow: "0 1px 3px rgba(0,0,0,0.8)",
                    }}
                  >
                    Excellence Driven Design Company!
                  </h2>
                </div>

                {/* Subtitle */}
                <div
                  ref={subtitleRef}
                  className="mb-8"
                  style={{ willChange: "transform, opacity" }}
                >
                  <p
                    className="text-base text-gray-200 leading-relaxed font-light mb-4"
                    style={{
                      fontWeight: "300",
                      letterSpacing: "0.01em",
                      lineHeight: "1.6",
                      textShadow: "0 1px 2px rgba(0,0,0,0.7)",
                    }}
                  >
                    Discover Archademy, where architecture communicates your
                    vernacular
                  </p>
                </div>

                {/* Button */}
                <div
                  ref={buttonsRef}
                  className="mb-8"
                  style={{ willChange: "transform" }}
                >
                  <button
                    className="px-8 py-3 bg-amber-600 text-white font-medium text-sm hover:bg-amber-700 transition-all duration-300 active:scale-95"
                    style={{
                      fontWeight: "400",
                      letterSpacing: "0.08em",
                      minHeight: "48px",
                    }}
                  >
                    SEE OUR PROJECTS
                  </button>
                </div>

                {/* Address */}
                <div
                  ref={addressRef}
                  className="text-center"
                  style={{ willChange: "transform, opacity" }}
                >
                  <p
                    className="text-sm text-gray-300 font-light leading-relaxed"
                    style={{
                      fontWeight: "300",
                      letterSpacing: "0.01em",
                      lineHeight: "1.5",
                      textShadow: "0 1px 2px rgba(0,0,0,0.6)",
                    }}
                  >
                    No.5 Pius Wuchendu Street, NTA Road, Port Harcourt
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Layout - Clean and Professional */}
        <div className="absolute inset-0 z-10 hidden md:block">
          <div className="h-full flex items-center">
            <div className="max-w-7xl mx-auto px-12 lg:px-20 xl:px-32 w-full">
              <div className="grid grid-cols-12 gap-8 items-center">
                {/* Left Side - Content */}
                <div className="col-span-7 lg:col-span-6 xl:col-span-5">
                  {/* Content Container */}
                  <div className="relative z-10">
                    {/* Accent Line */}
                    <div
                      ref={accentRef}
                      className="mb-8"
                      style={{ willChange: "transform, opacity" }}
                    >
                      <div className="w-24 h-px bg-gradient-to-r from-amber-500 to-amber-600"></div>
                    </div>

                    {/* Company Name */}
                    <div
                      ref={companyRef}
                      className="mb-12"
                      style={{
                        willChange: "transform, opacity",
                        transformStyle: "preserve-3d",
                      }}
                    >
                      <h1
                        className="text-6xl lg:text-7xl xl:text-8xl font-extralight text-white tracking-wide leading-none"
                        style={{
                          fontWeight: "200",
                          letterSpacing: "0.08em",
                          textShadow: "0 2px 6px rgba(0,0,0,0.8)",
                        }}
                      >
                        ARCHADEMY
                      </h1>
                      <p className="text-base text-amber-700 font-light mt-4 tracking-widest">
                        ARCHITECTURAL FIRM BASED IN NIGERIA
                      </p>
                    </div>

                    {/* Content Container */}
                    <div
                      ref={contentRef}
                      className="max-w-lg"
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
                          className="text-3xl lg:text-4xl xl:text-5xl font-light text-white leading-tight mb-6"
                          style={{
                            fontWeight: "300",
                            letterSpacing: "0.02em",
                            textShadow: "0 2px 4px rgba(0,0,0,0.8)",
                          }}
                        >
                          Excellence Driven Design Company!
                        </h2>
                      </div>

                      {/* Subtitle */}
                      <div
                        ref={subtitleRef}
                        className="mb-12"
                        style={{ willChange: "transform, opacity" }}
                      >
                        <p
                          className="text-lg lg:text-xl text-gray-200 leading-relaxed font-light"
                          style={{
                            fontWeight: "300",
                            letterSpacing: "0.01em",
                            lineHeight: "1.7",
                            textShadow: "0 1px 3px rgba(0,0,0,0.7)",
                          }}
                        >
                          Discover Archademy, where architecture communicates
                          your vernacular
                        </p>
                      </div>

                      {/* Button */}
                      <div
                        ref={buttonsRef}
                        className="mb-10"
                        style={{ willChange: "transform" }}
                      >
                        <button
                          className="px-12 py-4 bg-amber-600 text-white font-medium text-base hover:bg-amber-700 transition-all duration-300 transform hover:scale-105"
                          style={{
                            fontWeight: "400",
                            letterSpacing: "0.08em",
                          }}
                        >
                          SEE OUR PROJECTS
                        </button>
                      </div>

                      {/* Address */}
                      <div
                        ref={addressRef}
                        style={{ willChange: "transform, opacity" }}
                      >
                        <p
                          className="text-base text-gray-300 font-light leading-relaxed"
                          style={{
                            fontWeight: "300",
                            letterSpacing: "0.01em",
                            lineHeight: "1.6",
                            textShadow: "0 1px 2px rgba(0,0,0,0.6)",
                          }}
                        >
                          No.5 Pius Wuchendu Street, NTA Road, Port Harcourt
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Side - Video space */}
                <div className="col-span-5 lg:col-span-6 xl:col-span-7">
                  {/* Clean space for video */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
