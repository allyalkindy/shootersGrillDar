import Image from "next/image";
import { ButtonLink } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-ink px-6">
      <Image
        src="/images/gallery/000-DcvDmZMt-gn.webp"
        alt=""
        fill
        className="object-cover opacity-20"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/85 to-ink/70" />
      <div className="relative z-10 flex flex-col items-center gap-6 text-center">
        <span className="font-accent text-xs uppercase tracking-[0.4em] text-ember">
          404
        </span>
        <h1 className="font-display text-balance text-4xl text-cream md:text-5xl">
          This table isn&apos;t set.
        </h1>
        <p className="max-w-md text-base leading-relaxed text-stone">
          The page you&apos;re looking for has wandered off the rooftop. Let&apos;s get you
          back to the grill.
        </p>
        <ButtonLink href="/" className="mt-2">
          Back to Home
        </ButtonLink>
      </div>
    </section>
  );
}
