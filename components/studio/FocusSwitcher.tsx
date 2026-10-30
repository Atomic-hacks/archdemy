"use client";
import { usePathname } from "next/navigation";
import Link from "@/components/ui/TransitionLink";
import { practiceAreas } from "@/lib/studio";
export default function FocusSwitcher() {
  const pathname = usePathname();
  if (!pathname.startsWith("/focus/")) return null;
  return (
    <nav className="focus-switcher" aria-label="Shift your focus">
      <span>Shift your focus</span>
      <div>
        {practiceAreas.map((area) => (
          <Link
            key={area.slug}
            href={`/focus/${area.slug}`}
            aria-current={
              pathname === `/focus/${area.slug}` ? "page" : undefined
            }
            aria-label={area.title}
            style={{ background: area.color, color: area.foreground }}
          >
            <span>{area.title}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
}
