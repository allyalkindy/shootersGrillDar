import type { Metadata } from "next";
import Image from "next/image";
import { PageBanner } from "@/components/sections/PageBanner";
import { StoryStats } from "@/components/sections/StoryStats";
import { Values } from "@/components/sections/Values";
import { ReserveBanner } from "@/components/sections/ReserveBanner";

export const metadata: Metadata = {
  title: "Our Story",
  description:
    "Since 2002, Shooters Grill has been Dar es Salaam's rooftop steakhouse — open-flame cooking, prime cuts, and a view of the city from Oyster Bay.",
};

export default function AboutPage() {
  return (
    <>
      <PageBanner
        image="/images/gallery/042-DXJwIbcEjnU.jpg"
        alt="Table of grilled specialities overlooking Dar es Salaam"
        eyebrow="Since 2002"
        title="A rooftop institution, built on fire."
      />

      <StoryStats />

      <section className="bg-ink py-24 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:items-center lg:px-10">
          <div className="flex flex-col gap-6">
            <span className="font-accent text-xs uppercase tracking-[0.4em] text-ember">
              Our Story
            </span>
            <h2 className="font-display text-balance text-4xl leading-tight text-cream md:text-5xl">
              Good food. Good times. Every time.
            </h2>
            <div className="divider-mark w-11 self-start" />
            <p className="text-base leading-relaxed text-stone">
              Shooters Grill opened its doors in Dar es Salaam in 2002 with a simple idea:
              cook great meat properly, over real fire, and treat every guest like they&apos;ve
              booked the best seat in the city. More than two decades later, that idea
              hasn&apos;t changed — even as the rooftop terrace at Oyster Plaza has become
              one of Dar&apos;s most sought-after tables.
            </p>
            <p className="text-base leading-relaxed text-stone">
              We&apos;re a steakhouse first. Our grill runs on open flame, our cuts are
              chosen for marbling over shortcuts, and our kitchen takes its time with the
              things that need it — ribs that fall off the bone, oxtail braised for hours,
              a T-bone seared exactly the way you ordered it. Above it all sits our rooftop
              bar and terrace, six floors above Haile Selassie Road, where the Oyster Bay
              skyline turns gold at sundown.
            </p>
            <p className="text-base leading-relaxed text-stone">
              Today, Shooters Grill is where Dar es Salaam comes to celebrate — a
              milestone, a Friday night, a long-overdue dinner with people worth the trip.
              We&apos;re glad to have you at our table.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="relative aspect-[3/4] overflow-hidden translate-y-8">
              <Image
                src="/images/gallery/016-Dbdpqnotipl.jpg"
                alt="Chef finishing a steak with fresh rosemary"
                fill
                className="object-cover"
                sizes="25vw"
              />
            </div>
            <div className="relative aspect-[3/4] overflow-hidden">
              <Image
                src="/images/gallery/049-DWqwkAxjaBd.jpg"
                alt="Shooters Grill team member on the rooftop terrace"
                fill
                className="object-cover"
                sizes="25vw"
              />
            </div>
          </div>
        </div>
      </section>

      <Values />

      <section className="relative overflow-hidden bg-ink py-24 lg:py-32">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-10">
          <span className="font-accent text-xs uppercase tracking-[0.4em] text-ember">
            Part of the Neighbourhood
          </span>
          <h2 className="font-display mt-4 text-balance text-3xl text-cream md:text-4xl">
            We show up for Dar es Salaam — from Nane Nane to Iftar, New Year&apos;s Eve to
            an ordinary Tuesday.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-stone">
            Shooters Grill has always been more than a restaurant to the Oyster Bay
            community — it&apos;s where teams celebrate wins, where friends mark
            birthdays, and where the doors stay open through Ramadan for guests breaking
            their fast. We&apos;re proud to be part of the city&apos;s story, one table
            at a time.
          </p>
        </div>
      </section>

      <ReserveBanner />
    </>
  );
}
