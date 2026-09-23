import Image from "next/image";

export function PageBanner({
  image,
  alt,
  eyebrow,
  title,
  description,
}: {
  image: string;
  alt: string;
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <section className="relative flex h-[52vh] min-h-[380px] w-full items-end overflow-hidden bg-ink">
      <Image
        src={image}
        alt={alt}
        fill
        priority
        quality={90}
        className="object-cover"
        sizes="100vw"
      />
      <div className="grain absolute inset-0" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-ink/30" />
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-16 pt-32 lg:px-10">
        <span className="font-accent block text-xs uppercase tracking-[0.4em] text-ember">
          {eyebrow}
        </span>
        <h1 className="font-display mt-4 max-w-2xl text-balance text-5xl text-cream md:text-6xl">
          {title}
        </h1>
        {description ? (
          <p className="mt-5 max-w-xl text-base leading-relaxed text-stone">{description}</p>
        ) : null}
      </div>
    </section>
  );
}
