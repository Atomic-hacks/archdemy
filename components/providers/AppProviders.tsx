"use client";

import { createContext, useContext, useEffect, useMemo, useRef } from "react";
import { usePathname, useRouter } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);

type TransitionContextValue = {
  navigate: (href: string) => void;
};

const TransitionContext = createContext<TransitionContextValue | null>(null);

export function usePageTransition() {
  const context = useContext(TransitionContext);

  if (!context) {
    throw new Error("usePageTransition must be used within AppProviders");
  }

  return context;
}

export default function AppProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const overlayRef = useRef<HTMLDivElement>(null);
  const pendingPathRef = useRef<string | null>(null);
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.1,
      smoothWheel: true,
      syncTouch: false,
      wheelMultiplier: 0.95,
      touchMultiplier: 1,
      easing: (t) => 1 - Math.pow(1 - t, 4),
    });

    lenisRef.current = lenis;

    const updateScrollTrigger = () => ScrollTrigger.update();
    lenis.on("scroll", updateScrollTrigger);

    let frame = 0;

    const raf = (time: number) => {
      lenis.raf(time);
      frame = window.requestAnimationFrame(raf);
    };

    frame = window.requestAnimationFrame(raf);

    ScrollTrigger.refresh();

    return () => {
      window.cancelAnimationFrame(frame);
      lenis.off("scroll", updateScrollTrigger);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  useEffect(() => {
    const overlay = overlayRef.current;

    if (!overlay) {
      return;
    }

    if (!pendingPathRef.current) {
      gsap.set(overlay, { yPercent: -100 });
      return;
    }

    gsap.to(overlay, {
      yPercent: 100,
      duration: 0.5,
      ease: "power3.inOut",
      onComplete: () => {
        gsap.set(overlay, { yPercent: -100 });
        pendingPathRef.current = null;
        ScrollTrigger.refresh();
      },
    });
  }, [pathname]);

  const value = useMemo(
    () => ({
      navigate: (href: string) => {
        if (href === pathname || pendingPathRef.current) {
          return;
        }

        const overlay = overlayRef.current;

        if (!overlay) {
          router.push(href);
          return;
        }

        pendingPathRef.current = href;

        gsap.killTweensOf(overlay);
        gsap.set(overlay, { yPercent: -100 });
        gsap.to(overlay, {
          yPercent: 0,
          duration: 0.42,
          ease: "power3.inOut",
          onComplete: () => {
            router.push(href);
          },
        });
      },
    }),
    [pathname, router],
  );

  return (
    <TransitionContext.Provider value={value}>
      {children}
      <div
        ref={overlayRef}
        className="pointer-events-none fixed inset-0 z-[100] bg-black"
        aria-hidden="true"
      />
    </TransitionContext.Provider>
  );
}
