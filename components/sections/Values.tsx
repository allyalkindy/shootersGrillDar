import { Flame, Beef, Wine, Users } from "lucide-react";

const values = [
  {
    icon: Flame,
    title: "Open-Flame Mastery",
    description:
      "Every steak, chop, and rack of ribs is grilled the honest way — over real fire, watched closely by hands that have done it for years.",
  },
  {
    icon: Beef,
    title: "Serious About Sourcing",
    description:
      "From South African T-bones to locally raised beef, we choose cuts for marbling and flavour first, and we don't cut corners on either.",
  },
  {
    icon: Wine,
    title: "A Bar Worth Sitting At",
    description:
      "Hand-built cocktails and a spirits list deep enough to keep the regulars interested, poured by a team that knows the difference.",
  },
  {
    icon: Users,
    title: "Tanzanian Hospitality",
    description:
      "Warm, unhurried service in the local spirit — from a table for two to a rooftop full of friends celebrating late into the night.",
  },
];

export function Values() {
  return (
    <section className="bg-ink-2 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-x-10 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
          {values.map(({ icon: Icon, title, description }) => (
            <div key={title} className="flex flex-col items-start gap-4">
              <div className="flex h-12 w-12 items-center justify-center border border-ember/30">
                <Icon className="h-5 w-5 text-ember" strokeWidth={1.5} />
              </div>
              <h3 className="font-display text-xl text-cream">{title}</h3>
              <p className="text-sm leading-relaxed text-stone">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
