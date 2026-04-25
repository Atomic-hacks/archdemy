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
  const labelRef = useRef<HTMLSpanElement>(null);

  useLayoutEffect(() => {
    const root = rootRef.current;
    const fill = fillRef.current;
    const icon = iconRef.current;
    const labelEl = labelRef.current;

    if (!root || !fill || !icon || !labelEl) return;

    const ctx = gsap.context(() => {
      gsap.set(fill, { width: 44 });
      gsap.set(icon, { rotate: -45 });
    }, root);

    const enter = () => {
      gsap.to(fill, { width: "100%", duration: 0.42, ease: "power3.inOut" });
      gsap.to(icon, { rotate: 45, duration: 0.42, ease: "power3.inOut" });
      gsap.to(labelEl, {
        color: "#050505",
        duration: 0.2,
        ease: "power2.inOut",
      });
    };

    const leave = () => {
      gsap.to(fill, { width: 44, duration: 0.42, ease: "power3.inOut" });
      gsap.to(icon, { rotate: 45, duration: 0.42, ease: "power3.inOut" });
      gsap.to(labelEl, {
        color: "#ffffff",
        duration: 0.3,
        ease: "power2.inOut",
      });
    };

    root.addEventListener("mouseenter", enter);
    root.addEventListener("mouseleave", leave);

    return () => {
      root.removeEventListener("mouseenter", enter);
      root.removeEventListener("mouseleave", leave);
      gsap.killTweensOf([fill, icon, labelEl]);
      ctx.revert();
    };
  }, []);

  return (
    <TransitionLink
      href={href}
      ref={rootRef}
      className={`relative inline-flex w-full items-center justify-between gap-4 overflow-hidden rounded-full border px-4 py-3 text-[0.72rem] uppercase tracking-[0.12em] sm:px-6 lg:px-10 ${
        light
          ? "border-white/12 bg-black text-white"
          : "border-black/10 bg-black text-white"
      } ${className}`}
    >
      <span
        ref={fillRef}
        className="absolute left-0 top-0 h-full rounded-full bg-[var(--burnt-orange)]"
      />
      <span className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--burnt-orange)] text-black">
        <span ref={iconRef} className="inline-flex">
          <ArrowUpRight className="h-3.5 w-3.5" />
        </span>
      </span>
      <span ref={labelRef} className="relative z-10 flex-1 text-left text-white">
        {label}
      </span>
    </TransitionLink>
  );
}
