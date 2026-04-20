import AnimatedPillButton from "@/components/ui/AnimatedPillButton";

export default function CollaborationCta() {
  return (
    <section
      className="relative overflow-hidden bg-black"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.58), rgba(0,0,0,0.58)), url('/work1.jpg')",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="mx-auto max-w-[1296px] px-6 py-28 text-center md:px-10">
        <h2 className="mx-auto max-w-5xl text-4xl font-medium leading-tight tracking-[-0.04em] text-white md:text-6xl">
          We are always open to collaboration and happy to welcome new
          projects.
        </h2>
        <div className="mt-8">
          <AnimatedPillButton href="/contact" label="Contact Us" light />
        </div>
      </div>
    </section>
  );
}
