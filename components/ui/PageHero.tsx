import Image from "next/image";
import { ArrowDown } from "lucide-react";

export default function PageHero({
  title,
  image,
  left,
  right,
  target = "page-content",
  full = false,
}: {
  title: string;
  image: string;
  left: string;
  right?: string;
  target?: string;
  full?: boolean;
}) {
  return (
    <section className={`page-image-hero ${full ? "is-full" : ""}`}>
      <div className="page-hero-image" data-reveal="image" data-entry>
        <Image
          src={image}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>
      <div className="page-hero-shade" />
      <div className="page-hero-meta">
        <span>{left}</span>
        {right && <span>{right}</span>}
      </div>
      <h1 data-reveal="text" data-entry>
        {title}
      </h1>
      <a
        href={`#${target}`}
        className="page-hero-down"
        aria-label="Explore page"
      >
        <ArrowDown size={18} strokeWidth={1} />
      </a>
    </section>
  );
}
