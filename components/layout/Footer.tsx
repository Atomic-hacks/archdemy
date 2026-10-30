"use client";
import Image from "next/image";
import { useState } from "react";
import { Plus, ArrowUp } from "lucide-react";
import { practiceAreas } from "@/lib/studio";
import { usePathname } from "next/navigation";
import PreFooter from "@/components/layout/PreFooter";
import Link from "@/components/ui/TransitionLink";
export default function Footer() {
  const [focusOpen, setFocusOpen] = useState(false);
  const pathname = usePathname();
  const contact = pathname === "/contact";
  const imageNavigation = !contact && !pathname.startsWith("/work/");
  return (
    <>
      {imageNavigation && <PreFooter />}
      <footer
        className={`site-gutter studio-footer ${contact ? "is-contact-footer" : ""}`}
      >
        {!contact && (
          <>
            <div className="footer-top">
              <nav aria-label="Footer">
                <button
                  type="button"
                  className="footer-focus-toggle"
                  aria-expanded={focusOpen}
                  aria-controls="footer-focus-links"
                  onClick={() => setFocusOpen(!focusOpen)}
                >
                  Our focus{" "}
                  <Plus
                    size={15}
                    style={{ transform: focusOpen ? "rotate(45deg)" : "none" }}
                  />
                </button>
                <div
                  id="footer-focus-links"
                  className={`footer-focus-links ${focusOpen ? "is-open" : ""}`}
                  inert={!focusOpen}
                >
                  {practiceAreas.map((area) => (
                    <Link key={area.slug} href={`/focus/${area.slug}`}>
                      {area.title}
                    </Link>
                  ))}
                </div>
                <Link href="/work">Portfolio</Link>
                <Link href="/journal">Studio journal</Link>
                <Link href="/about">About</Link>
                <Link href="/approach">Our approach</Link>
                <Link href="/contact">Contact</Link>
              </nav>
              <Link href="/" className="footer-wordmark" aria-label="Archademy home">
                <Image src="/logo.png" alt="Archademy Design Company Limited" width={234} height={149} className="brand-logo" />
              </Link>
            </div>
            <div className="footer-studio">
              <p>Port Harcourt</p>
              <div>
                <p>
                  KM15 East-West Road,
                  <br />
                  Port Harcourt, Rivers State, Nigeria
                </p>
                <a href="mailto:info@archademyltd.com">info@archademyltd.com</a>
              </div>
            </div>
          </>
        )}
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Archademy</p>
          <a
            href="#top"
            onClick={(event) => {
              event.preventDefault();
              window.scrollTo({
                top: 0,
                behavior: window.matchMedia("(prefers-reduced-motion: reduce)")
                  .matches
                  ? "instant"
                  : "smooth",
              });
            }}
          >
            Back to top <ArrowUp size={13} />
          </a>
          <span>Design Company Limited</span>
        </div>
      </footer>
    </>
  );
}
