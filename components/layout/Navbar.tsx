"use client";

import { useEffect, useState } from "react";
import TransitionLink from "@/components/ui/TransitionLink";

const links = [
  { name: "Projects", href: "/work" },
  { name: "About", href: "/about" },
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
      {/* ── Bar ──────────────────────────────────────────────────────────────── */}
      <nav className="fixed inset-x-0 top-10 z-50 bg-white/10 backdrop-blur-xl max-w-[500px] mx-auto">
        <div className="mx-auto flex w-full items-center justify-between px-6 py-2 ">
          {/* Logo + name */}
          <TransitionLink href="/" className="flex items-center gap-2 md:gap-3">
            <img
              src="/logo.png"
              alt="Archademy logo"
              className="h-10 w-auto md:h-16"
            />
            <div className="flex flex-col leading-tight">
              <span className="text-[0.85rem] font-semibold uppercase tracking-[0.28em] text-[var(--burnt-orange)] md:text-[1.35rem]">
                Archademy
              </span>
              <span className="text-[0.45rem] uppercase tracking-[0.22em] text-black/50 md:text-[0.6rem]">
                Design Company Limited
              </span>
            </div>
          </TransitionLink>

          {/* Hamburger */}
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setIsMenuOpen((o) => !o)}
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
      </nav>

      {/* ── Full-screen overlay ───────────────────────────────────────────────── */}
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
                className="block border-b border-white/20 pb-4 text-3xl tracking-[-0.04em] text-white transition-colors duration-200 hover:text-[var(--burnt-orange)] sm:text-4xl md:text-5xl"
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
