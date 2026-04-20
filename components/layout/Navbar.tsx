"use client";

import { useEffect, useState } from "react";
import TransitionLink from "@/components/ui/TransitionLink";

const links = [
  { name: "Work", href: "/work" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <>
      <nav className="fixed inset-x-0 top-0 z-50 border-b border-black/10 bg-white/96 backdrop-blur-xl">
        <div className="mx-auto flex h-[5.75rem] max-w-[1296px] items-center justify-between px-6 md:px-10">
          <div className="hidden items-center gap-10 md:flex">
            {links.map((link) => (
              <TransitionLink
                key={link.name}
                href={link.href}
                className="text-[0.88rem] uppercase tracking-[0.06em] text-black transition-colors hover:text-[var(--burnt-orange)]"
              >
                {link.name}
              </TransitionLink>
            ))}
          </div>
          <TransitionLink
            href="/"
            className="absolute left-1/2 -translate-x-1/2 flex items-center gap-3"
          >
            <img src="/logo.png" alt="logo" className="h-16 w-auto" />
            <div className="flex flex-col leading-tight">
              <span className="text-[1.35rem] font-semibold tracking-[0.28em] text-amber-700 uppercase">
                Archademy
              </span>
              <span className="text-[0.6rem] tracking-[0.22em] text-black/50 uppercase">
                Design Company Limited
              </span>
            </div>
          </TransitionLink>

          <div className="ml-auto flex items-center gap-6">
            <TransitionLink
              href="/contact"
              className="hidden text-[0.88rem] uppercase tracking-[0.06em] text-black transition-colors hover:text-[var(--burnt-orange)] md:inline-flex"
            >
              Contact Us
            </TransitionLink>

            <button
              type="button"
              aria-label="Toggle menu"
              onClick={() => setIsMenuOpen((open) => !open)}
              className="grid h-9 w-9 place-items-center text-black"
            >
              <div className="space-y-1">
                <span
                  className={`block h-0.5 w-5 bg-current transition-transform duration-300 ${
                    isMenuOpen ? "translate-y-1.5 rotate-45" : ""
                  }`}
                />
                <span
                  className={`block h-0.5 w-5 bg-current transition-opacity duration-300 ${
                    isMenuOpen ? "opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`block h-0.5 w-5 bg-current transition-transform duration-300 ${
                    isMenuOpen ? "-translate-y-1.5 -rotate-45" : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </nav>

      <div
        className={`fixed inset-0 z-40 bg-black transition-opacity duration-300 ${
          isMenuOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <div className="mx-auto flex h-full max-w-[1296px] flex-col justify-center px-6 md:px-10">
          <div className="space-y-6">
            {links.map((link) => (
              <TransitionLink
                key={link.name}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="block border-b border-white/20 pb-4 text-5xl tracking-[-0.04em] text-white"
              >
                {link.name}
              </TransitionLink>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
