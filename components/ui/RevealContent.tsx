"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type RevealContentProps = {
  children: React.ReactNode;
  className?: string;
  direction?: "up" | "down" | "left" | "right";
  delay?: number;
  duration?: number;
};

export default function RevealContent({
  children,
  className = "",
  direction = "up",
  delay = 0,
  duration = 1,
}: RevealContentProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;

    if (!container) {
      return;
    }

    const offsets: Record<
      string,
      { yPercent?: number; xPercent?: number; opacity?: number }
    > = {
      up: { yPercent: 30, opacity: 0 },
      down: { yPercent: -30, opacity: 0 },
      left: { xPercent: -30, opacity: 0 },
      right: { xPercent: 30, opacity: 0 },
    };

    const offset = offsets[direction] || offsets.up;

    const ctx = gsap.context(() => {
      gsap.set(container, {
        ...offset,
        force3D: true,
      });

      gsap.to(container, {
        yPercent: 0,
        xPercent: 0,
        opacity: 1,
        duration: duration,
        delay: delay,
        ease: "power4.out",
        force3D: true,
        scrollTrigger: {
          trigger: container,
          start: "top 85%",
          once: true,
        },
      });
    }, container);

    return () => ctx.revert();
  }, [direction, delay, duration]);

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  );
}
