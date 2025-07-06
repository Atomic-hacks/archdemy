/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useEffect, useState, useRef, ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface VideoSource {
  src: string;
  type?: string;
}

interface HeroParallaxProps {
  videos: readonly [VideoSource, VideoSource, VideoSource]; // Exactly 3 videos
  children?: ReactNode;
  className?: string;
  autoPlay?: boolean;
  muted?: boolean;
  loop?: boolean;
  playsInline?: boolean;
  poster?: string;
}

const HeroParallax: React.FC<HeroParallaxProps> = ({
  videos,
  children,
  className = "",
  autoPlay = true,
  muted = true,
  loop = true,
  playsInline = true,
  poster,
}) => {
  const [animationPhase, setAnimationPhase] = useState<
    "initial" | "stacking" | "finalScale" | "complete"
  >("initial");
  const [videosLoaded, setVideosLoaded] = useState<boolean[]>([
    false,
    false,
    false,
  ]);
  const [hasError, setHasError] = useState(false);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Handle video loading with index tracking
  const handleVideoLoad = (index: number) => {
    setVideosLoaded((prev) => {
      const newState = [...prev];
      newState[index] = true;
      console.log(`Video ${index} loaded. State:`, newState);
      return newState;
    });
  };

  // Handle video errors
  const handleVideoError = (index: number, error: any) => {
    console.error(`Video ${index} failed to load:`, error);
    setHasError(true);
  };

  // Check if all videos are loaded
  const allVideosLoaded = videosLoaded.every((loaded) => loaded === true);

  // Start animation sequence when all videos are loaded OR after timeout
  useEffect(() => {
    if (allVideosLoaded) {
      console.log("All videos loaded, starting animation");
      const timer = setTimeout(() => {
        setAnimationPhase("stacking");
      }, 500);

      return () => clearTimeout(timer);
    } else {
      // Fallback: Start animation after 5 seconds even if videos aren't fully loaded
      timeoutRef.current = setTimeout(() => {
        console.log("Timeout reached, forcing animation start");
        setAnimationPhase("stacking");
      }, 5000);

      return () => {
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
          timeoutRef.current = null;
        }
      };
    }
  }, [allVideosLoaded]);

  // Animation sequence timing
  useEffect(() => {
    if (animationPhase === "stacking") {
      // Wait for stacking animation to complete (last video appears at 1.2s)
      const timer = setTimeout(() => {
        setAnimationPhase("finalScale");
      }, 2000);

      return () => clearTimeout(timer);
    } else if (animationPhase === "finalScale") {
      // Wait for scale animation to complete
      const timer = setTimeout(() => {
        setAnimationPhase("complete");
      }, 1200);

      return () => clearTimeout(timer);
    }
  }, [animationPhase]);

  // Custom easing function for smooth natural transitions
  const customEasing = [0.25, 0.1, 0.25, 1]; // ease-in-out cubic-bezier

  // Animation variants for the videos
  const videoVariants = {
    initial: {
      scale: 0.7,
      opacity: 0,
      y: 100,
      zIndex: 10,
    },
    stacking: (index: number) => ({
      scale: 0.8,
      opacity: 1,
      y: index * 60, // Vertical offset: 0px, 60px, 120px
      zIndex: 10 + index, // Proper stacking order
      transition: {
        duration: 0.8,
        delay: index * 0.4, // Staggered appearance: 0s, 0.4s, 0.8s
        ease: customEasing,
      },
    }),
    finalScale: (index: number) => ({
      scale: index === 2 ? 1.05 : 0.8, // Bottom video scales up slightly
      opacity: index === 2 ? 1 : 0.3, // Bottom video becomes prominent
      y: index === 2 ? 0 : index * 60, // Bottom video centers, others stay stacked
      zIndex: index === 2 ? 30 : 10 + index,
      transition: {
        duration: 1.0,
        ease: customEasing,
      },
    }),
    complete: (index: number) => ({
      // The main video (index 2) scales just enough to fill the screen
      scale: index === 2 ? 1.4 : 0.8, // Scale up minimally to fill entire screen
      opacity: index === 2 ? 1 : 0,
      y: index === 2 ? 0 : index * 60,
      zIndex: index === 2 ? 30 : 10 + index,
      transition: {
        duration: 0.8,
        ease: customEasing,
      },
    }),
  };

  // Content overlay variants
  const contentVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 1.2,
        delay: 0.5, // Appears shortly after final scale animation starts
        ease: customEasing,
      },
    },
  };

  // Loading overlay variants
  const loadingVariants = {
    visible: {
      opacity: 1,
      transition: { duration: 0.3 },
    },
    hidden: {
      opacity: 0,
      transition: { duration: 0.8, ease: customEasing },
    },
  };

  return (
    <div
      className={`relative w-full h-screen overflow-hidden bg-black ${className}`}
    >
      {/* Loading Indicator */}
      <AnimatePresence>
        {!allVideosLoaded && animationPhase === "initial" && (
          <motion.div
            className="absolute inset-0 z-50 flex items-center justify-center bg-black"
            variants={loadingVariants}
            initial="visible"
            exit="hidden"
          >
            <div className="flex flex-col items-center space-y-4">
              <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
              <p className="text-white text-lg font-medium">
                Loading Experience...
              </p>
              {/* Debug info */}
              <div className="text-white text-sm opacity-70">
                Videos loaded: {videosLoaded.filter(Boolean).length}/3
              </div>
              {hasError && (
                <div className="text-red-400 text-sm">
                  Some videos failed to load, continuing anyway...
                </div>
                )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Video Layers Container */}
      <div className="absolute inset-0 flex items-center justify-center">
        {videos.map((video, index) => (
          <motion.div
            key={index}
            className="absolute w-4/5 h-4/5" // Smaller initial size for stacking effect
            custom={index}
            variants={videoVariants}
            initial="initial"
            animate={animationPhase}
            style={{
              transformOrigin: "center center",
            }}
          >
            <video
              ref={(el) => {
                videoRefs.current[index] = el;
              }}
              className={`w-full h-full object-cover shadow-2xl ${
                animationPhase === "complete" && index === 2 
                  ? "" // Remove rounded corners when scaling to full screen
                  : "rounded-lg"
              }`}
              autoPlay={autoPlay}
              muted={muted}
              loop={loop}
              playsInline={playsInline}
              poster={poster}
              onCanPlay={() => handleVideoLoad(index)}
              onLoadedData={() => handleVideoLoad(index)}
              onLoadedMetadata={() => handleVideoLoad(index)}
              onError={(e) => handleVideoError(index, e)}
              preload="auto"
            >
              <source src={video.src} type={video.type || "video/mp4"} />
              Your browser does not support the video tag.
            </video>

            {/* Video overlay for depth and visual separation */}
            <motion.div
              className={`absolute inset-0 bg-black ${
                animationPhase === "complete" && index === 2 
                  ? "" // Remove rounded corners when scaling to full screen
                  : "rounded-lg"
              }`}
              initial={{ opacity: 0 }}
              animate={{
                opacity:
                  animationPhase === "complete" && index === 2
                    ? 0
                    : index === 2
                    ? 0.1
                    : 0.4,
              }}
              transition={{
                duration: 0.8,
                ease: customEasing,
              }}
            />

            {/* Subtle border for stacked videos - only show when not in complete state */}
            {index !== 2 && animationPhase !== "complete" && (
              <div className="absolute inset-0 border-2 border-white/20 rounded-lg" />
            )}
          </motion.div>
        ))}
      </div>

      {/* Content Overlay */}
      <motion.div
        className="absolute inset-0 z-40 flex items-center justify-center"
        variants={contentVariants}
        initial="hidden"
        animate={
          animationPhase === "finalScale" || animationPhase === "complete"
            ? "visible"
            : "hidden"
        }
      >
        <div className="text-center px-4 max-w-4xl mx-auto">{children}</div>
      </motion.div>

      {/* Gradient Overlay for better text readability */}
      <motion.div
        className="absolute inset-0 z-35 bg-gradient-to-b from-black/40 via-transparent to-black/60"
        initial={{ opacity: 0 }}
        animate={{
          opacity:
            animationPhase === "finalScale" || animationPhase === "complete"
              ? 1
              : 0,
          transition: { duration: 1.2, ease: customEasing },
        }}
      />
    </div>
  );
};

export default HeroParallax;