import Image from "next/image";
import { MapPin, Clock, MessageCircle } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { siteConfig } from "@/lib/site-config";

export function ReserveBanner() {
  return (
    <section className="relative overflow-hidden bg-ink py-28">
      <div className="absolute inset-0">
        <Image
          src="/images/gallery/000-DcvDmZMt-gn.webp"
          alt="Steak forged over open flame at Shooters Grill"
          fill
          className="object-cover opacity-25"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/85 to-ink/70" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center gap-8 px-6 text-center">
        <span className="font-accent text-xs uppercase tracking-[0.4em] text-ember">
          Your Table Is Waiting
        </span>
        <h2 className="font-display text-balance text-4xl text-cream md:text-5xl">
          Reserve your evening above the city
        </h2>

        <div className="mt-4 grid gap-8 sm:grid-cols-2">
          <div className="flex items-start gap-3 text-left">
            <MapPin className="mt-1 h-5 w-5 shrink-0 text-ember" />
            <p className="text-sm leading-relaxed text-stone">
              {siteConfig.address.line1}
              <br />
              {siteConfig.address.line2}, {siteConfig.neighborhood}
            </p>
          </div>
          <div className="flex items-start gap-3 text-left">
            <Clock className="mt-1 h-5 w-5 shrink-0 text-ember" />
            <div className="text-sm leading-relaxed text-stone">
              {siteConfig.hours.map((h) => (
                <p key={h.label}>
                  {h.label}: <span className="text-cream/80">{h.value}</span>
                </p>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-5">
          <ButtonLink href="/reservations">Book a Table</ButtonLink>
          <ButtonLink
            href={`https://wa.me/${siteConfig.phone.whatsapp}?text=${encodeURIComponent(
              "Hi Shooters Grill, I'd like to make a reservation.",
            )}`}
            variant="outline"
            external
          >
            <MessageCircle className="h-4 w-4" />
            WhatsApp Us
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
