"use client";
import { useRef, useState } from "react";
import Image from "next/image";
import Link from "@/components/ui/TransitionLink";
import { ArrowUpRight } from "lucide-react";
import { journal } from "@/lib/studio";
export default function JournalList() {
  const [hover, setHover] = useState<number | null>(null);
  const preview = useRef<HTMLDivElement>(null);
  return (
    <section className="site-gutter journal-list-section">
      <h2 data-reveal="text">Studio journal</h2>
      <div
        className="journal-rows"
        onPointerMove={(event) => {
          if (event.pointerType === "touch") return;
          if (preview.current) {
            preview.current.style.left = `${event.clientX}px`;
            preview.current.style.top = `${event.clientY}px`;
          }
        }}
        onPointerLeave={() => setHover(null)}
      >
        {journal.map((post, index) => (
          <Link
            key={post.slug}
            href={`/journal/${post.slug}`}
            className="journal-row"
            onPointerEnter={(event) => {
              if (event.pointerType !== "touch") setHover(index);
            }}
            onFocus={() => setHover(null)}
            onClick={() => setHover(null)}
          >
            <span>{post.category}</span>
            <h3>{post.title}</h3>
            <p>{post.summary}</p>
            <span className="journal-row-arrow">
              <ArrowUpRight size={16} />
            </span>
          </Link>
        ))}
      </div>
      <Link href="/journal" className="editorial-link journal-all">
        All journal entries{" "}
        <span>
          <ArrowUpRight size={14} />
        </span>
      </Link>
      <div
        ref={preview}
        aria-hidden="true"
        className={`journal-hover-image ${hover !== null ? "is-visible" : ""}`}
      >
        {hover !== null && (
          <Image
            src={journal[hover].image}
            alt=""
            fill
            sizes="300px"
            className="object-cover"
          />
        )}
      </div>
    </section>
  );
}
