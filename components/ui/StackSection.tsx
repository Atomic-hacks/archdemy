"use client";

/**
 * StackSection
 * ─────────────────────────────────────────────────────────────────────────────
 * Wrap each page section with this component.
 * As the user scrolls through a section it pins to the top of the viewport,
 * then the NEXT section scrolls up on top of it — creating a stacking effect.
 *
 * Usage:
 *   <StackSection>
 *     <HeroSection />
 *   </StackSection>
 *   <StackSection>
 *     <AboutSection />
 *   </StackSection>
 *   <StackSection>
 *     <WorkSection />
 *   </StackSection>
 *
 * Props:
 *   index      – z-index layer (pass 0,1,2… so later sections sit on top)
 *   className  – extra classes on the outer wrapper
 */

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface StackSectionProps {
  children: React.ReactNode;
  /** Stack order — higher index = renders on top. Default 0. */
  index?: number;
  className?: string;
}

export default function StackSection({
  children,
  index = 0,
  className = "",
}: StackSectionProps) {
  const outerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const outer = outerRef.current;
    const inner = innerRef.current;
    if (!outer || !inner) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: outer,
        start: "bottom bottom",
        end: "bottom top",
        pin: inner,
        pinSpacing: false,
      });
    }, outer);

    return () => ctx.revert();
  }, []);

  return (
    // Outer div: establishes the scroll distance for this section
    <div
      ref={outerRef}
      className={`relative ${className}`}
      style={{ zIndex: index }}
    >
      {/* Inner div: what actually gets pinned and sits on screen */}
      <div
        ref={innerRef}
        className="relative w-full"
        style={{ zIndex: index }}
      >
        {children}
      </div>
    </div>
  );
}
