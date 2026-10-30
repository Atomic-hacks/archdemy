"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export default function ImageCursor() {
  const cursor = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  useEffect(() => {
    const element = cursor.current;
    if (!element) return;
    const media = window.matchMedia(
      "(pointer: fine) and (hover: hover) and (prefers-reduced-motion: no-preference)",
    );
    let frame = 0;
    let active: HTMLElement | null = null;
    let x = 0,
      y = 0;
    const hide = () => {
      element.dataset.show = "false";
      active = null;
    };
    const move = (event: PointerEvent) => {
      if (!media.matches || event.pointerType === "touch") {
        hide();
        return;
      }
      const target = (event.target as Element).closest<HTMLElement>(
        "[data-cursor]",
      );
      if (!target) {
        hide();
        return;
      }
      active = target;
      x = event.clientX;
      y = event.clientY;
      if (!frame)
        frame = requestAnimationFrame(() => {
          element.style.left = `${x}px`;
          element.style.top = `${y}px`;
          if (active) {
            element.textContent = active.dataset.cursor || "Explore";
            element.dataset.show = "true";
          }
          frame = 0;
        });
    };
    const leave = (event: PointerEvent) => {
      if (!event.relatedTarget) hide();
    };
    document.addEventListener("pointermove", move, { passive: true });
    document.addEventListener("pointerout", leave);

    window.addEventListener("scroll", hide, { passive: true });
    window.addEventListener("blur", hide);
    media.addEventListener("change", hide);
    return () => {
      cancelAnimationFrame(frame);
      hide();
      document.removeEventListener("pointermove", move);
      document.removeEventListener("pointerout", leave);
      window.removeEventListener("scroll", hide);
      window.removeEventListener("blur", hide);
      media.removeEventListener("change", hide);
    };
  }, [pathname]);
  return (
    <div
      ref={cursor}
      className="image-cursor"
      data-show="false"
      aria-hidden="true"
    />
  );
}
