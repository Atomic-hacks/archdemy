"use client";

import { useState } from "react";

type ReadMoreTextProps = {
  children: string;
  lines?: number;
  className?: string;
};

export default function ReadMoreText({
  children,
  lines = 2,
  className = "",
}: ReadMoreTextProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const lineHeight = 1.75; // Approximate line height in rem
  const maxHeight = lines * lineHeight;

  return (
    <div className={className}>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isExpanded ? "" : `line-clamp-${lines}`
        }`}
        style={{
          maxHeight: isExpanded ? "none" : `${maxHeight}rem`,
        }}
      >
        {children}
      </div>

      {children.split("\n").length > lines && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="mt-3 inline-flex items-center gap-2 text-[0.78rem] uppercase tracking-[0.14em] text-neutral-800 hover:text-[var(--burnt-orange)] transition-colors"
        >
          {isExpanded ? "Read Less" : "Read More"}
          <span className="text-[var(--burnt-orange)]">
            {isExpanded ? "↑" : "↓"}
          </span>
        </button>
      )}
    </div>
  );
}
