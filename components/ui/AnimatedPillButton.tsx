"use client";

import { useLayoutEffect, useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import gsap from "gsap";
import TransitionLink from "@/components/ui/TransitionLink";

type AnimatedPillButtonProps = {
  href: string;
  label: string;
  light?: boolean;
  className?: string;
};

export default function AnimatedPillButton({
  href,
  label,
  light = false,
  className = "",
}: AnimatedPillButtonProps) {
  const rootRef = useRef<HTMLAnchorElement>(null);
  const fillRef = useRef<HTMLSpanElement>(null);
  const iconRef = useRef<HTMLSpanElement>(null);

  useLayoutEffect(() => {
    const root = rootRef.current;
    const fill = fillRef.current;
    const icon = iconRef.current;

    if (!root || !fill || !icon) return;

    const ctx = gsap.context(() => {
      gsap.set(fill, { width: 44 });
      gsap.set(icon, { rotate: -45 });
    }, root);

    const enter = () => {
      gsap.to(fill, { width: "100%", duration: 0.42, ease: "power3.inOut" });
      gsap.to(icon, { rotate: 0, duration: 0.42, ease: "power3.inOut" });
    };

    const leave = () => {
      gsap.to(fill, { width: 44, duration: 0.42, ease: "power3.inOut" });
      gsap.to(icon, { rotate: -45, duration: 0.42, ease: "power3.inOut" });
    };

    root.addEventListener("mouseenter", enter);
    root.addEventListener("mouseleave", leave);

    return () => {
      root.removeEventListener("mouseenter", enter);
      root.removeEventListener("mouseleave", leave);
      gsap.killTweensOf([fill, icon]);
      ctx.revert();
    };
  }, []);

  return (
    <TransitionLink
      href={href}
      ref={rootRef}
      className={`relative inline-flex items-center gap-3 overflow-hidden rounded-full border py-2.5 pl-2.5 pr-8 text-[0.72rem] uppercase tracking-[0.12em] ${
        light ? "border-white/12 bg-black" : "border-black/10 bg-black"
      } ${className}`}
    >
      {/* Expanding fill — starts at icon width, grows to full */}
      <span
        ref={fillRef}
        className="absolute left-0 top-0 h-full rounded-full bg-[var(--burnt-orange)]"
      />

      {/* Icon sits on top of the fill, always orange-backed */}
      <span className="relative z-10 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[var(--burnt-orange)] text-white">
        <span ref={iconRef} className="inline-flex">
          <ArrowUpRight className="h-3.5 w-3.5" />
        </span>
      </span>

      {/* Label — always white, the fill slides under it */}
      <span className="relative z-10 flex-1 text-left text-white">
        {label}
      </span>
    </TransitionLink>
  );
}