"use client";

import { useEffect, useRef } from "react";
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
  const labelRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    const fill = fillRef.current;
    const icon = iconRef.current;
    const labelEl = labelRef.current;

    if (!root || !fill || !icon || !labelEl) return;

    gsap.set(fill, { width: 44 });
    gsap.set(icon, { rotate: -45 });

    const enter = () => {
      gsap.to(fill, { width: "100%", duration: 0.42, ease: "power3.inOut" });
      gsap.to(icon, { rotate: 45, duration: 0.42, ease: "power3.inOut" });
      gsap.to(labelEl, {
        color: "#ffffff",
        duration: 0.2,
        ease: "power2.inOut",
      });
    };

    const leave = () => {
      gsap.to(fill, { width: 44, duration: 0.42, ease: "power3.inOut" });
      gsap.to(icon, { rotate: 45, duration: 0.42, ease: "power3.inOut" });
      gsap.to(labelEl, {
        color: "#000000",
        duration: 0.3,
        ease: "power2.inOut",
      });
    };

    root.addEventListener("mouseenter", enter);
    root.addEventListener("mouseleave", leave);

    return () => {
      root.removeEventListener("mouseenter", enter);
      root.removeEventListener("mouseleave", leave);
    };
  }, []);

  return (
    <TransitionLink
      href={href}
      ref={rootRef}
      className={`relative inline-flex items-center overflow-hidden rounded-full border px-3 py-2 text-[0.72rem] uppercase tracking-[0.12em] ${
        light
          ? "border-white/35 bg-white text-black"
          : "border-black/20 bg-white text-black"
      } ${className}`}
    >
      <span
        ref={fillRef}
        className={`absolute left-0 top-0 h-full rounded-full ${
          light ? "bg-black" : "bg-[var(--burnt-orange)]"
        }`}
      />
      <span className="relative z-10 mr-3 flex h-6 w-6 items-center justify-center rounded-full text-white">
        <span ref={iconRef} className="inline-flex">
          <ArrowUpRight className="h-3.5 w-3.5" />
        </span>
      </span>
      <span ref={labelRef} className="relative z-10 text-black">
        {label}
      </span>
    </TransitionLink>
  );
}
