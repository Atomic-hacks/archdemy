import AnimatedPillButton from "@/components/ui/AnimatedPillButton";
import RevealImage from "@/components/ui/RevealImage";
import SectionMarker from "@/components/ui/SectionMarker";

export default function ContactPage() {
  return (
    <main className="bg-white text-black">
      <section className="mx-auto max-w-[1296px] px-6 pb-24 pt-40 md:px-10 md:pt-44">
        <SectionMarker letter="A" label="Contact" />

        <div className="grid gap-12 lg:grid-cols-[1fr_0.92fr]">
          <div>
            <h1 className="max-w-[34rem] text-2xl font-medium leading-[0.96] tracking-[-0.06em] sm:text-3xl md:text-[4.4rem]">
              Let&apos;s Discuss Your Next Project
            </h1>
            <p className="mt-6 max-w-[40rem] text-sm leading-6 text-black/62 md:mt-8 md:text-[1.08rem] md:leading-10">
              Whether you&apos;re beginning with a sketch, a site, or a clear
              business objective, we&apos;re ready to help shape the next step
              with precision and care.
            </p>

            <div className="mt-10 grid gap-8 md:mt-14 md:gap-10 md:grid-cols-2">
              <div>
                <p className="text-[0.75rem] uppercase tracking-[0.05em] text-black/42 md:text-[0.82rem]">
                  Email
                </p>
                <a
                  href="mailto:info@archademyltd.com"
                  className="mt-2 block text-sm font-medium tracking-[-0.03em] text-black md:text-[1.4rem]"
                >
                  info@archademyltd.com
                </a>
              </div>
              <div>
                <p className="text-[0.75rem] uppercase tracking-[0.05em] text-black/42 md:text-[0.82rem]">
                  Phone
                </p>
                <a
                  href="tel:+2340000000000"
                  className="mt-2 block text-sm font-medium tracking-[-0.03em] text-black md:text-[1.4rem]"
                >
                  +234 000 000 0000
                </a>
              </div>
              <div>
                <p className="text-[0.75rem] uppercase tracking-[0.05em] text-black/42 md:text-[0.82rem]">
                  Address
                </p>
                <p className="mt-2 max-w-[18rem] text-sm leading-6 text-black/68 md:text-[1.1rem] md:leading-8">
                  KM15 East-West Road, Port Harcourt, Rivers State, Nigeria
                </p>
              </div>
              <div>
                <p className="text-[0.82rem] uppercase tracking-[0.05em] text-black/42">
                  Studio Hours
                </p>
                <p className="mt-2 text-[1.1rem] leading-8 text-black/68">
                  Monday - Friday
                  <br />
                  10:00 AM - 5:00 PM
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-black/10 p-8 md:p-10">
            <form className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <label className="block">
                  <span className="mb-2 block text-[0.82rem] uppercase tracking-[0.05em] text-black/42">
                    Full Name
                  </span>
                  <input
                    type="text"
                    className="h-14 w-full border border-black/12 px-4 text-[1rem] outline-none transition-colors focus:border-[var(--burnt-orange)]"
                    placeholder="Your name"
                  />
                </label>
                <label className="block">
                  <span className="mb-2 block text-[0.82rem] uppercase tracking-[0.05em] text-black/42">
                    Email
                  </span>
                  <input
                    type="email"
                    className="h-14 w-full border border-black/12 px-4 text-[1rem] outline-none transition-colors focus:border-[var(--burnt-orange)]"
                    placeholder="Your email"
                  />
                </label>
              </div>

              <label className="block">
                <span className="mb-2 block text-[0.82rem] uppercase tracking-[0.05em] text-black/42">
                  Project Type
                </span>
                <input
                  type="text"
                  className="h-14 w-full border border-black/12 px-4 text-[1rem] outline-none transition-colors focus:border-[var(--burnt-orange)]"
                  placeholder="Residential, hospitality, retail..."
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-[0.82rem] uppercase tracking-[0.05em] text-black/42">
                  Message
                </span>
                <textarea
                  rows={7}
                  className="w-full border border-black/12 px-4 py-4 text-[1rem] outline-none transition-colors focus:border-[var(--burnt-orange)]"
                  placeholder="Tell us about your project goals, timeline, and any key constraints."
                />
              </label>

              <AnimatedPillButton
                href="mailto:info@archademyltd.com"
                label="Send Inquiry"
              />
            </form>
          </div>
        </div>

        <div className="mt-24 grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <RevealImage
            src="/work1.jpg"
            alt="Contact preview space"
            className="aspect-[1.55] bg-neutral-100"
            direction="up"
          />
          <div className="flex items-center">
            <p className="max-w-[30rem] text-[1.18rem] leading-10 text-black/62">
              We approach every conversation with the same care we bring to our
              projects: clear thinking, strong collaboration, and a commitment
              to meaningful spaces.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
