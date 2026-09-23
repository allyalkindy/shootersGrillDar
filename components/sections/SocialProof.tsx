import { Quote } from "lucide-react";
import { InstagramIcon } from "@/components/ui/InstagramIcon";
import { siteConfig } from "@/lib/site-config";

const quotes = [
  {
    text: "Hands down, the juiciest steak I've ever had.",
    source: "Dave, via Instagram",
  },
  {
    text: "There's no debate: this is exactly how a steak should be.",
    source: siteConfig.instagram.handle,
  },
  {
    text: "If looks could kill, this steak would be dangerous.",
    source: siteConfig.instagram.handle,
  },
];

export function SocialProof() {
  return (
    <section className="border-y border-line bg-ink-2 py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col items-center gap-2 text-center">
          <InstagramIcon className="h-5 w-5 text-ember" />
          <a
            href={siteConfig.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            className="font-accent text-xs uppercase tracking-[0.3em] text-stone hover:text-ember transition-colors"
          >
            {siteConfig.instagram.handle}
          </a>
        </div>

        <div className="mt-12 grid gap-10 md:grid-cols-3">
          {quotes.map((q) => (
            <figure key={q.text} className="flex flex-col items-center gap-4 text-center">
              <Quote className="h-6 w-6 text-crimson-2" />
              <blockquote className="font-display text-xl leading-snug text-cream text-balance">
                &ldquo;{q.text}&rdquo;
              </blockquote>
              <figcaption className="font-accent text-xs uppercase tracking-[0.2em] text-stone">
                {q.source}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
