"use client";

import Image from "next/image";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "@/components/ui/TransitionLink";
import { X } from "lucide-react";
import gsap from "gsap";
import FocusSwitcher from "@/components/studio/FocusSwitcher";
import { practiceAreas } from "@/lib/studio";

const categories = ["Residential", "Hospitality", "Retail", "Commercial"];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [present, setPresent] = useState(false);
  const pathname = usePathname();
  const button = useRef<HTMLButtonElement>(null);
  const panel = useRef<HTMLDivElement>(null);
  const timeline = useRef<gsap.core.Timeline | null>(null);
  const practice = practiceAreas.find(
    (area) => pathname === `/focus/${area.slug}`,
  );
  const light =
    pathname === "/" ||
    pathname === "/contact" ||
    pathname.startsWith("/work") ||
    pathname.startsWith("/journal") ||
    pathname === "/approach" ||
    practice?.foreground === "#ffffff";
  const close = () => setOpen(false);

  useLayoutEffect(() => {
    const element = panel.current;
    if (!element || !present) return;
    timeline.current?.kill();
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const items = element.querySelectorAll("[data-menu-reveal]");
    const line = element.querySelector(".menu-top-rule");
    if (open) {
      const animation = gsap.timeline();
      timeline.current = animation;
      animation.fromTo(
        element,
        { yPercent: 100 },
        {
          yPercent: 0,
          duration: reduced ? 0 : 0.78,
          ease: "power4.inOut",
          onComplete: () => {
            element
              .querySelector<HTMLAnchorElement>(".menu-focus-link")
              ?.focus({ preventScroll: true });
          },
        },
        0,
      );
      animation.fromTo(
        line,
        { scaleX: 0, transformOrigin: "right center" },
        { scaleX: 1, duration: reduced ? 0 : 0.75, ease: "power3.inOut" },
        reduced ? 0 : 0.2,
      );
      animation.fromTo(
        items,
        { y: 18, opacity: 0, filter: "blur(8px)" },
        {
          y: 0,
          opacity: 1,
          filter: "blur(0px)",
          duration: reduced ? 0 : 0.65,
          stagger: reduced ? 0 : 0.035,
          ease: "power3.out",
        },
        reduced ? 0 : 0.35,
      );
    } else {
      timeline.current = gsap
        .timeline({
          onComplete: () => {
            setPresent(false);
            button.current?.focus({ preventScroll: true });
          },
        })
        .to(
          items,
          { opacity: 0, y: -8, duration: reduced ? 0 : 0.18, stagger: 0.012 },
          0,
        )
        .to(
          element,
          { yPercent: 100, duration: reduced ? 0 : 0.62, ease: "power4.inOut" },
          reduced ? 0 : 0.08,
        );
    }
    return () => {
      timeline.current?.kill();
    };
  }, [open, present]);

  useEffect(() => {
    if (!present) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const keydown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        close();
      }
      if (event.key !== "Tab") return;
      const elements = Array.from(
        panel.current?.querySelectorAll<HTMLElement>("a,button") ?? [],
      );
      if (!panel.current?.contains(document.activeElement)) {
        event.preventDefault();
        elements[0]?.focus();
        return;
      }
      const first = elements[0],
        last = elements.at(-1);
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last?.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first?.focus();
      }
    };
    document.addEventListener("keydown", keydown);
    return () => {
      document.body.style.overflow = previous;
      document.removeEventListener("keydown", keydown);
    };
  }, [present]);

  return (
    <>
      <header
        className={`site-gutter absolute inset-x-0 top-0 z-40 flex items-center justify-between py-6 md:py-8 ${light ? "text-white" : "text-[#252525]"}`}
      >
        <Link
          href="/"
          aria-label="Archademy home"
          tabIndex={present ? -1 : undefined}
          className="studio-brand"
        >
          <Image src="/logo.png" alt="Archademy Design Company Limited" width={234} height={149} priority className="brand-logo" />
        </Link>
        <FocusSwitcher />
        <button
          ref={button}
          type="button"
          aria-expanded={open}
          aria-controls={present ? "studio-menu" : undefined}
          aria-hidden={present || undefined}
          tabIndex={present ? -1 : undefined}
          onClick={() => {
            setPresent(true);
            setOpen(true);
          }}
          className="menu-control fixed right-[clamp(24px,3.3vw,64px)] top-6 flex min-h-9 items-center gap-3 rounded-[4px] bg-[#252525]/90 px-3 text-xs text-white md:top-8"
        >
          Menu
          <svg
            width="24"
            height="12"
            viewBox="0 0 24 12"
            fill="none"
            aria-hidden="true"
          >
            <path d="M0 2h24M0 10h24" stroke="currentColor" strokeWidth="1" />
          </svg>
        </button>
      </header>
      {present && (
        <div
          ref={panel}
          id="studio-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation"
          className="reference-menu site-gutter"
          data-lenis-prevent
        >
          <Link
            href="/"
            onClick={close}
            aria-label="Archademy home"
            className="studio-brand menu-brand"
          >
            <Image src="/logo.png" alt="Archademy Design Company Limited" width={234} height={149} className="brand-logo" />
          </Link>
          <button
            type="button"
            onClick={close}
            className="reference-menu-close"
          >
            <span>Close</span>
            <X size={23} strokeWidth={1} />
          </button>
          <div className="menu-top-rule" />
          <nav
            className="reference-menu-navigation"
            aria-label="Main navigation"
          >
            <div className="menu-focus">
              <p data-menu-reveal>Our focus</p>
              {categories.map((category) => (
                <Link
                  key={category}
                  href={`/focus/${category.toLowerCase()}`}
                  onClick={close}
                  className="menu-focus-link"
                  data-menu-reveal
                >
                  {category}
                </Link>
              ))}
            </div>
            <div className="menu-secondary">
              <div className="menu-explore">
                <p data-menu-reveal>Explore our</p>
                <Link
                  href="/work"
                  onClick={close}
                  className="menu-company-link"
                  data-menu-reveal
                >
                  Portfolio
                </Link>
              </div>
              <div>
                <p data-menu-reveal>Company</p>
                <Link
                  href="/journal"
                  onClick={close}
                  className="menu-company-link"
                  data-menu-reveal
                >
                  Studio journal
                </Link>
                <Link
                  href="/about"
                  onClick={close}
                  className="menu-company-link"
                  data-menu-reveal
                >
                  About
                </Link>
                <Link
                  href="/approach"
                  onClick={close}
                  className="menu-company-link"
                  data-menu-reveal
                >
                  Our approach
                </Link>
                <Link
                  href="/contact"
                  onClick={close}
                  className="menu-company-link"
                  data-menu-reveal
                >
                  Contact
                </Link>
              </div>
            </div>
          </nav>
          <div className="reference-menu-bottom">
            <Link
              href="/contact"
              onClick={close}
              className="menu-contact-link"
              data-menu-reveal
            >
              Start a project
            </Link>
            <div className="menu-office" data-menu-reveal>
              <div>
                <p>Port Harcourt</p>
                <address>
                  KM15 East-West Road,
                  <br />
                  Port Harcourt, Rivers State, Nigeria
                </address>
                <a href="mailto:info@archademyltd.com" onClick={close}>
                  E-mail
                </a>
              </div>
              <div>
                <p>Studio hours</p>
                <span>
                  Monday – Friday
                  <br />
                  10:00 AM – 5:00 PM
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
