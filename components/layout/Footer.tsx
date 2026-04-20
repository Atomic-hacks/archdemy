import TransitionLink from "@/components/ui/TransitionLink";

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="mx-auto grid max-w-[1296px] gap-14 px-6 py-20 md:px-10 lg:grid-cols-[1.25fr_0.95fr_0.7fr_0.7fr_0.7fr]">
        <div className="space-y-16">
          <TransitionLink href="/" className="inline-flex items-center gap-3">
            <img src="/logo.png" alt="logo" className="h-16 w-auto" />
            <div className="flex flex-col leading-tight">
              <span className="text-[1.35rem] font-semibold tracking-[0.28em] uppercase text-amber-700">
                Archademy
              </span>
              <span className="text-[0.6rem] tracking-[0.22em] text-white/50 uppercase">
                Design Company Limited
              </span>
            </div>
          </TransitionLink>
          <div className="space-y-2 text-[1rem] leading-8 text-white/68">
            <p>© 2026 Archademy.</p>
            <p>Work by Archademy. Crafted with precision.</p>
          </div>
        </div>

        <div className="space-y-10 text-[1rem]">
          <div>
            <p className="mb-3 text-[0.82rem] uppercase tracking-[0.08em] text-white/50">
              Address
            </p>
            <p className="max-w-[240px] leading-8 text-white/82">
              KM15 East-West Road, Port Harcourt, Rivers State, Nigeria
            </p>
          </div>
          <div>
            <p className="mb-3 text-[0.82rem] uppercase tracking-[0.08em] text-white/50">
              Email
            </p>
            <a
              href="mailto:info@archademyltd.com"
              className="leading-8 text-white/82 transition-colors hover:text-[var(--burnt-orange)]"
            >
              info@archademyltd.com
            </a>
          </div>
          <div>
            <p className="mb-3 text-[0.82rem] uppercase tracking-[0.08em] text-white/50">
              Contact Us
            </p>
            <a
              href="tel:+2340000000000"
              className="leading-8 text-white/82 transition-colors hover:text-[var(--burnt-orange)]"
            >
              +234 000 000 0000
            </a>
          </div>
        </div>

        <div>
          <p className="mb-5 text-[0.82rem] uppercase tracking-[0.08em] text-white/50">
            Menu
          </p>
          <div className="space-y-3 text-[1rem]">
            <TransitionLink
              href="/work"
              className="block text-white/82 transition-colors hover:text-[var(--burnt-orange)]"
            >
              Works
            </TransitionLink>
            <TransitionLink
              href="/contact"
              className="block text-white/82 transition-colors hover:text-[var(--burnt-orange)]"
            >
              Contact
            </TransitionLink>
          </div>
        </div>

        <div>
          <p className="mb-5 text-[0.82rem] uppercase tracking-[0.08em] text-white/50">
            Support
          </p>
          <div className="space-y-3 text-[1rem] text-white/82">
            <p>Terms & Conditions</p>
            <p>Privacy Policy</p>
            <p>Studio Notes</p>
          </div>
        </div>

        <div>
          <p className="mb-5 text-[0.82rem] uppercase tracking-[0.08em] text-white/50">
            Social
          </p>
          <div className="space-y-3 text-[1rem] text-white/82">
            <p>@instagram</p>
            <p>#facebook</p>
            <p>#linkedin</p>
            <p>@x</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
