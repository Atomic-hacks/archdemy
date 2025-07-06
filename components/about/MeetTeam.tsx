"use client";
import React, { useState, useEffect, useRef } from "react";

interface TeamMember {
  id: number;
  name: string;
  position: string;
  image: string;
  stickyTop: string;
  left: string;
}

interface ScrollProgress {
  progress: number;
  isInView: boolean;
}

const MeetTheTeam: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState<ScrollProgress>({
    progress: 0,
    isInView: false,
  });
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: "Alexandra Chen",
      position: "Creative Director",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=400&fit=crop&crop=face",
      stickyTop: "15vh",
      left: "40%",
    },
    {
      id: 2,
      name: "Marcus Rodriguez",
      position: "Lead Developer",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=400&fit=crop&crop=face",
      stickyTop: "15vh",
      left: "60%",
    },
    {
      id: 3,
      name: "Sarah Kim",
      position: "UX Designer",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=400&fit=crop&crop=face",
      stickyTop: "25vh",
      left: "20%",
    },
    {
      id: 4,
      name: "David Thompson",
      position: "Product Manager",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop&crop=face",
      stickyTop: "25vh",
      left: "80%",
    },
  ];

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const containerRect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const containerHeight = containerRef.current.offsetHeight;

      const isInView =
        containerRect.top < windowHeight && containerRect.bottom > 0;

      if (isInView) {
        const scrollStart = Math.max(0, -containerRect.top);
        const scrollRange = Math.max(1, containerHeight - windowHeight);
        const progress = Math.max(0, Math.min(1, scrollStart / scrollRange));

        setScrollProgress({
          progress,
          isInView: true,
        });
      } else {
        setScrollProgress((prev) => ({
          ...prev,
          isInView: false,
        }));
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getImageOpacity = (index: number): number => {
    if (!scrollProgress.isInView) return 0;

    const delay = index * 0.15;
    const adjustedProgress = Math.max(0, scrollProgress.progress - delay);
    const memberProgress = Math.min(1, adjustedProgress * 2);

    return memberProgress;
  };

  const getImageScale = (index: number): number => {
    if (!scrollProgress.isInView) return 0.7;

    const delay = index * 0.15;
    const adjustedProgress = Math.max(0, scrollProgress.progress - delay);
    const memberProgress = Math.min(1, adjustedProgress * 2);

    return 0.7 + memberProgress * 0.3;
  };

  if (isMobile) {
    return (
      <div className="min-h-screen" style={{ backgroundColor: "#166534" }}>
        <div
          ref={containerRef}
          className="relative min-h-[200vh] px-4"
          style={{ backgroundColor: "#166534" }}
        >
          {/* Fixed "MEET THE TEAM" Text for Mobile */}
          <div className="sticky top-16 inset-0 flex items-start justify-center pointer-events-none z-0 pt-8">
            <div className="text-center">
              <h1
                className="font-black text-white leading-none tracking-tighter"
                style={{
                  fontSize: "clamp(2.5rem, 12vw, 4rem)",
                  WebkitTextStroke: "1px rgba(255,255,255,0.1)",
                }}
              >
                MEET
              </h1>
              <h1
                className="font-black text-white leading-none tracking-tighter -mt-2"
                style={{
                  fontSize: "clamp(2.5rem, 12vw, 4rem)",
                  WebkitTextStroke: "1px rgba(255,255,255,0.1)",
                }}
              >
                THE TEAM
              </h1>
            </div>
          </div>

          {/* Team Images - Mobile Layout */}
          <div className="flex flex-col items-center space-y-8 pt-32 pb-16 z-20 relative">
            {teamMembers.map((member, index) => (
              <div
                key={member.id}
                className="w-64 max-w-[80vw]"
                style={{
                  transform: `scale(${getImageScale(index)})`,
                  opacity: getImageOpacity(index),
                  transition: "all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                }}
              >
                <div className="relative bg-white overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 group">
                  <div className="aspect-[3/4] overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                  </div>

                  {/* Name overlay */}
                  <div
                    className="absolute bottom-0 left-0 right-0 p-4"
                    style={{
                      background:
                        "linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 50%, transparent 100%)",
                    }}
                  >
                    <h3 className="text-lg font-bold text-white mb-1">
                      {member.name}
                    </h3>
                    <p className="text-green-200 text-sm font-medium">
                      {member.position}
                    </p>
                  </div>

                  {/* Decorative dot */}
                  <div
                    className="absolute top-3 right-3 w-6 h-6 rounded-full opacity-90"
                    style={{ backgroundColor: "#4ade80" }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Desktop layout (original)
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#166534" }}>
      {/* Team Section */}
      <div
        ref={containerRef}
        className="relative min-h-[300vh]"
        style={{ backgroundColor: "#166534" }}
      >
        {/* Fixed "MEET THE TEAM" Text */}
        <div className="sticky top-1/2 inset-0 flex items-center justify-center pointer-events-none z-0 transform -translate-y-1/2">
          <div className="text-center">
            <h1
              className="font-black text-white leading-none tracking-tighter"
              style={{
                fontSize: "clamp(4rem, 15vw, 12rem)",
                WebkitTextStroke: "2px rgba(255,255,255,0.1)",
              }}
            >
              MEET
            </h1>
            <h1
              className="font-black text-white leading-none tracking-tighter -mt-4"
              style={{
                fontSize: "clamp(4rem, 15vw, 12rem)",
                WebkitTextStroke: "2px rgba(255,255,255,0.1)",
              }}
            >
              THE TEAM
            </h1>
          </div>
        </div>

        {/* Team Images - Using Sticky Positioning */}
        {teamMembers.map((member, index) => (
          <div
            key={member.id}
            className="sticky w-60 z-20"
            style={{
              top: member.stickyTop,
              left: member.left,
              transform: `translateX(-50%) scale(${getImageScale(index)})`,
              opacity: getImageOpacity(index),
              transition: "all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
            }}
          >
            <div className="relative bg-white overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 group">
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
              </div>

              {/* Name overlay */}
              <div
                className="absolute bottom-0 left-0 right-0 p-4"
                style={{
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 50%, transparent 100%)",
                }}
              >
                <h3 className="text-lg font-bold text-white mb-1">
                  {member.name}
                </h3>
                <p className="text-green-200 text-sm font-medium">
                  {member.position}
                </p>
              </div>

              {/* Decorative dot */}
              <div
                className="absolute top-3 right-3 w-6 h-6 rounded-full opacity-90"
                style={{ backgroundColor: "#4ade80" }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MeetTheTeam;
