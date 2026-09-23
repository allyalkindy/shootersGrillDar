import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const panels = [
  {
    title: "The Rooftop",
    description:
      "Six floors above Oyster Bay, our terrace opens onto an unbroken view of the city and the Indian Ocean beyond. Sundown is when it truly comes alive.",
    image: "/images/gallery/062-DUshMiKDTfJ.jpg",
    href: "/gallery",
    cta: "See the Space",
  },
  {
    title: "The Bar",
    description:
      "Hand-built cocktails, a serious spirits list, and a back bar that doesn't slow down. Pull up a stool before your table's ready.",
    image: "/images/gallery/067-DVIKxC8iM7T.jpg",
    href: "/menu#signature-cocktails",
    cta: "View Bar Menu",
  },
];

export function ExperienceSplit() {
  return (
    <section className="grid lg:grid-cols-2">
      {panels.map((panel) => (
        <Link
          key={panel.title}
          href={panel.href}
          className="group relative flex min-h-[520px] items-end overflow-hidden"
        >
          <Image
            src={panel.image}
            alt={panel.title}
            fill
            quality={90}
            className="object-cover transition-transform duration-[1400ms] group-hover:scale-110"
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
          <div className="grain absolute inset-0" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-ink/10" />
          <div className="relative z-10 flex w-full flex-col gap-4 p-10 lg:p-14">
            <h3 className="font-display text-3xl text-cream md:text-4xl">{panel.title}</h3>
            <p className="max-w-sm text-sm leading-relaxed text-stone">{panel.description}</p>
            <span className="font-accent flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-ember">
              {panel.cta}
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </span>
          </div>
        </Link>
      ))}
    </section>
  );
}
