"use client";
import { cn } from "@/lib/utils";
import { motion, MotionValue, useTransform } from "framer-motion";
import React from "react";

export interface MediaItem {
  type: "image" | "video";
  src: string;
  alt?: string;
  className?: string;
}

export const VideoParallax = ({
  scrollY,
  title,
  description,
  className,
  mediaItems = [],
}: {
  scrollY: MotionValue<number>;
  title?: string;
  description?: string;
  className?: string;
  mediaItems?: MediaItem[];
}) => {
  // Stronger vertical parallax
  const videoY = useTransform(scrollY, [0, 1000, 2000], [0, -60, -120]);

  // More dramatic organic scaling
  const videoScale = useTransform(scrollY, [0, 1000, 2000], [1, 1.08, 1.15]);

  // Quicker and deeper text fade
  const textOpacity = useTransform(scrollY, [0, 400, 800], [1, 0.3, 0]);

  // Text moves slightly faster than background for depth
  const textY = useTransform(scrollY, [0, 2000], [0, -40]);

  // Subtle overlay that barely changes

  return (
    <div className={cn("relative w-full h-screen overflow-hidden", className)}>
      {/* Video/Image Layer with transforms */}
      <div className="absolute inset-0 w-full h-full">
        {mediaItems.map((item, index) => (
          <motion.div
            key={index}
            className={cn("absolute inset-0 w-full h-full", item.className)}
            style={{
              y: videoY,
              scale: videoScale,

              transformOrigin: "center center",
            }}
          >
            {item.type === "image" ? (
              <img
                src={item.src}
                alt={item.alt || `Parallax image ${index + 1}`}
                className="w-full h-full object-cover"
                loading="lazy"
                style={{
                  willChange: "transform",
                  backfaceVisibility: "hidden",
                }}
              />
            ) : (
              <video
                src={item.src}
                className="w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                style={{
                  willChange: "transform",
                  backfaceVisibility: "hidden",
                }}
              />
            )}
          </motion.div>
        ))}

        {/* Enhanced fallback background */}
        {mediaItems.length === 0 && (
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900"
            style={{
              y: videoY,
              scale: videoScale,
            }}
          />
        )}
      </div>

      <motion.div
        className="relative z-[60] flex flex-col items-center justify-center h-full text-center px-8"
        style={{
          y: textY,
          opacity: textOpacity,
        }}
      >
        {title && (
          <motion.h1
            className="text-4xl md:text-6xl lg:text-8xl font-bold text-white mb-6"
            style={{
              textShadow: "0 4px 20px rgba(0,0,0,0.3)",
              fontWeight: 700,
              letterSpacing: "-0.02em",
            }}
          >
            {title}
          </motion.h1>
        )}
        {description && (
          <motion.p
            className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed"
            style={{
              textShadow: "0 2px 10px rgba(0,0,0,0.3)",
              fontWeight: 400,
            }}
          >
            {description}
          </motion.p>
        )}
      </motion.div>

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-transparent to-black/10" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-transparent to-black/20" />
      </div>
    </div>
  );
};
