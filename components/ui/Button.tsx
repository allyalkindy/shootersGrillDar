import Link from "next/link";
import { clsx } from "clsx";
import type { ReactNode } from "react";

type Variant = "primary" | "outline" | "ghost";

const base =
  "inline-flex items-center justify-center gap-2 font-accent uppercase tracking-[0.18em] text-xs font-medium transition-all duration-300 whitespace-nowrap";

const variants: Record<Variant, string> = {
  primary:
    "bg-crimson text-cream px-8 py-4 hover:bg-crimson-2 shadow-[0_10px_30px_-10px_rgba(125,26,31,0.6)]",
  outline:
    "border border-line text-cream px-8 py-4 hover:border-ember hover:text-ember",
  ghost: "text-cream/80 hover:text-ember px-2 py-2",
};

interface CommonProps {
  variant?: Variant;
  className?: string;
  children: ReactNode;
}

interface LinkButtonProps extends CommonProps {
  href: string;
  external?: boolean;
}

export function ButtonLink({ href, variant = "primary", className, children, external }: LinkButtonProps) {
  const cls = clsx(base, variants[variant], className);
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}
