"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
export default function StudioFilm() {
  const video = useRef<HTMLVideoElement>(null);
  const userPaused = useRef(false);
  const [playing, setPlaying] = useState(false);
  useEffect(() => {
    const element = video.current;
    if (!element) return;
    const reduced = matchMedia("(prefers-reduced-motion: reduce)");
    const observer = new IntersectionObserver(
      (entries) => {
        if (
          entries[0].isIntersecting &&
          !reduced.matches &&
          !userPaused.current
        )
          element.play().catch(() => {});
        else element.pause();
      },
      { threshold: 0.2 },
    );
    const motionChanged = () => {
      if (reduced.matches) element.pause();
    };
    reduced.addEventListener("change", motionChanged);
    observer.observe(element);
    return () => {
      reduced.removeEventListener("change", motionChanged);
      observer.disconnect();
      element.pause();
    };
  }, []);
  return (
    <div className="studio-film">
      <Image
        src="/architect.jpg"
        alt="An architectural study"
        fill
        sizes="100vw"
        className="object-cover"
      />
      <video
        ref={video}
        src="/hero-video.mp4"
        muted
        loop
        playsInline
        preload="metadata"
        onPlaying={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        className={playing ? "is-playing" : ""}
      />
      <button
        type="button"
        onClick={() => {
          if (playing) {
            userPaused.current = true;
            video.current?.pause();
          } else {
            userPaused.current = false;
            video.current?.play().catch(() => {});
          }
        }}
      >
        {playing ? "Pause film" : "Play film"}
      </button>
    </div>
  );
}
