import Image from "next/image";
import { ButtonLink } from "@/components/ui/Button";

export function IntroSection() {
  return (
    <section className="relative bg-ink py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:items-center lg:px-10">
        <div className="relative order-2 aspect-[4/5] w-full overflow-hidden lg:order-1">
          <Image
            src="/images/gallery/016-Dbdpqnotipl.jpg"
            alt="A Shooters Grill chef slicing a rosemary-crusted steak"
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 40vw, 90vw"
          />
          <div className="absolute inset-0 border border-ember/20" style={{ margin: "18px" }} />
        </div>

        <div className="order-1 flex flex-col items-start gap-6 lg:order-2">
          <span className="font-accent text-xs uppercase tracking-[0.4em] text-ember">
            Our Philosophy
          </span>
          <h2 className="font-display text-balance text-4xl leading-tight text-cream md:text-5xl">
            Forged in flame. Reared for flavor.
          </h2>
          <div className="divider-mark w-11 self-start" />
          <p className="max-w-lg text-base leading-relaxed text-stone">
            Since 2002, Shooters Grill has done one thing without compromise: prime cuts,
            grilled the honest way, over real open flame. No shortcuts, no gimmicks — just
            serious meat, mastered fire, and a rooftop room built for the moments that
            deserve it.
          </p>
          <p className="max-w-lg text-base leading-relaxed text-stone">
            From the first sizzle to the last pour at the bar, every plate that leaves our
            grill carries the same standard: quality you can taste, in a city view you
            won&apos;t forget.
          </p>
          <ButtonLink href="/about" variant="outline" className="mt-2">
            Our Story
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
