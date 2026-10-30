import TransitionLink from "@/components/ui/TransitionLink";

type Props = { href: string; label: string; light?: boolean; className?: string };
export default function AnimatedPillButton({ href, label, className = "" }: Props) {
  return <TransitionLink href={href} className={`text-link ${className}`}>{label}<span aria-hidden="true">↗</span></TransitionLink>;
}
