import { clsx } from "clsx";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  tone = "light",
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  tone?: "light" | "dark";
  className?: string;
}) {
  return (
    <div
      className={clsx(
        "flex flex-col gap-4",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className,
      )}
    >
      {eyebrow ? (
        <span className="font-accent uppercase tracking-[0.4em] text-xs text-ember">
          {eyebrow}
        </span>
      ) : null}
      <h2
        className={clsx(
          "font-display text-4xl md:text-5xl text-balance",
          tone === "light" ? "text-cream" : "text-ink",
        )}
      >
        {title}
      </h2>
      <div className={clsx("divider-mark w-11", align === "left" && "self-start")} />
      {description ? (
        <p
          className={clsx(
            "max-w-xl text-base leading-relaxed",
            tone === "light" ? "text-stone" : "text-ink/70",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
