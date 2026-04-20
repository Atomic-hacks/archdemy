type SectionMarkerProps = {
  letter: string;
  label: string;
};

export default function SectionMarker({
  letter,
  label,
}: SectionMarkerProps) {
  return (
    <div className="mb-10 flex items-center gap-5">
      <div className="flex h-10 w-10 items-center justify-center border border-black text-[0.72rem]">
        {letter}
      </div>
      <span className="text-[0.72rem] uppercase tracking-[0.12em] text-black/78">
        {label}
      </span>
      <div className="h-px flex-1 bg-black/10" />
    </div>
  );
}
