export default function SectionLabel({
  letter,
  title,
  dark = false,
}: {
  letter: string;
  title: string;
  dark?: boolean;
}) {
  return (
    <div className="mb-10 flex items-center gap-4">
      <div
        className={`flex h-8 w-8 items-center justify-center border text-[0.72rem] ${
          dark
            ? "border-white/30 text-white"
            : "border-neutral-400 text-neutral-950"
        }`}
      >
        {letter}
      </div>
      <span
        className={`text-[0.7rem] uppercase tracking-[0.16em] ${
          dark ? "text-white/75" : "text-neutral-700"
        }`}
      >
        {title}
      </span>
      <div
        className={`h-px flex-1 ${dark ? "bg-white/20" : "bg-neutral-200"}`}
      />
    </div>
  );
}