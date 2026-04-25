type SectionMarkerProps = {
  letter: string;
  label: string;
  dark?: boolean;
};

export default function SectionMarker({
  letter,
  label,
  dark = false,
}: SectionMarkerProps) {
  return (
    <div className="mb-10 flex items-center gap-5">
      <div
        className={`flex h-10 w-10 items-center justify-center border text-[0.72rem] ${
          dark ? "border-white/25 text-white" : "border-black text-black"
        }`}
      >
        {letter}
      </div>
      <span
        className={`text-[0.72rem] uppercase tracking-[0.12em] ${
          dark ? "text-white/72" : "text-black/78"
        }`}
      >
        {label}
      </span>
      <div className={`h-px flex-1 ${dark ? "bg-white/12" : "bg-black/10"}`} />
    </div>
  );
}
