import Image from "next/image";
import MotionSurface from "@/components/ui/MotionSurface";
import PageHero from "@/components/ui/PageHero";
import Link from "@/components/ui/TransitionLink";
import { journal } from "@/lib/studio";
export const metadata = {
  title: "Studio journal | Archademy",
  description: "Ideas and observations on architecture, interiors, and the places we inhabit.",
};

export default function JournalPage() {
  return (
    <main>
      <MotionSurface>
        <PageHero
          title="Studio journal"
          image="/house3.jpg"
          left="Ideas and observations"
          right="Archademy"
        />
        <section id="page-content" className="site-gutter journal-overview">
          {journal.map((post) => (
            <Link
              key={post.slug}
              href={`/journal/${post.slug}`}
              className="journal-story"
            >
              <div
                data-reveal="image"
                data-cursor="Read story"
                className="journal-story-image"
              >
                <Image
                  src={post.image}
                  alt=""
                  fill
                  sizes="(max-width: 767px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <p>{post.category}</p>
              <h2>{post.title}</h2>
              <p>{post.summary}</p>
            </Link>
          ))}
        </section>
      </MotionSurface>
    </main>
  );
}
