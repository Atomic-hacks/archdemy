import Image from "next/image";
import MotionSurface from "@/components/ui/MotionSurface";

export const metadata = {
  title: "Contact | Archademy",
  description: "Contact Archademy Design Company Limited in Port Harcourt to discuss your next project.",
};

export default function ContactPage() {
  return (
    <main className="contact-dark">
      <MotionSurface className="site-gutter contact-layout">
        <section className="contact-top">
          <h1 data-reveal="text" data-entry>
            Contact
          </h1>
          <div data-reveal="text" data-entry>
            <h2>Port Harcourt</h2>
            <p>
              KM15 East-West Road,
              <br />
              Port Harcourt, Rivers State, Nigeria
            </p>
            <a className="contact-email" href="mailto:info@archademyltd.com">
              info@archademyltd.com
            </a>
          </div>
          <div data-reveal="text" data-entry>
            <h2>Studio hours</h2>
            <p>
              Monday – Friday
              <br />
              10:00 AM – 5:00 PM
            </p>
          </div>
        </section>
        <section className="contact-message" data-reveal="text">
          <p>Let’s discuss your next project.</p>
          <p>
            Whether you’re beginning with a sketch, a site, or a clear business
            objective, we’re ready to help shape the next step.
          </p>
        </section>
        <div className="contact-photo" data-reveal="image">
          <Image
            src="/work4.jpg"
            alt="A sketch taking shape during the design process"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
      </MotionSurface>
    </main>
  );
}
