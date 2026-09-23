import { clsx } from "clsx";

export function HornMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 42"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={clsx("text-crimson", className)}
      aria-hidden="true"
    >
      <path
        d="M32 36 C23 31 13 29 7.5 17 C4.5 10.5 5.5 5 10 2.5"
        stroke="currentColor"
        strokeWidth="4.5"
        strokeLinecap="round"
      />
      <path
        d="M32 36 C41 31 51 29 56.5 17 C59.5 10.5 58.5 5 54 2.5"
        stroke="currentColor"
        strokeWidth="4.5"
        strokeLinecap="round"
      />
      <path d="M32 34.5 L32 40" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

export function BrandLockup({
  className,
  markClassName,
  size = "md",
}: {
  className?: string;
  markClassName?: string;
  size?: "sm" | "md" | "lg";
}) {
  const sizes = {
    sm: { mark: "h-6 w-9", word: "text-lg", sub: "text-[9px] tracking-[0.35em]" },
    md: { mark: "h-8 w-12", word: "text-2xl", sub: "text-[10px] tracking-[0.4em]" },
    lg: { mark: "h-12 w-[4.5rem]", word: "text-4xl md:text-5xl", sub: "text-xs tracking-[0.5em]" },
  }[size];

  return (
    <div className={clsx("flex flex-col items-center text-center", className)}>
      <HornMark className={clsx(sizes.mark, markClassName)} />
      <span className={clsx("font-accent uppercase text-cream leading-none mt-1", sizes.word)}>
        Shooters Grill
      </span>
      <span className={clsx("font-accent uppercase text-ember mt-1", sizes.sub)}>
        Steakhouse &amp; Bar
      </span>
    </div>
  );
}
