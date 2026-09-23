import type { Metadata } from "next";
import { MapPin, Phone, Clock, MessageCircle } from "lucide-react";
import { PageBanner } from "@/components/sections/PageBanner";
import { InstagramIcon } from "@/components/ui/InstagramIcon";
import { ReservationForm } from "@/components/ReservationForm";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Reservations",
  description:
    "Book a table at Shooters Grill, Dar es Salaam's rooftop steakhouse in Oyster Bay. Call, WhatsApp, or request a reservation online.",
};

export default function ReservationsPage() {
  const mapQuery = encodeURIComponent(siteConfig.address.mapsQuery);

  return (
    <>
      <PageBanner
        image="/images/gallery/036-DX_yb2kNrL3.jpg"
        alt="Rooftop terrace at golden hour overlooking Dar es Salaam"
        eyebrow="Book a Table"
        title="Join us above the city."
      />

      <section className="bg-ink py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-[3fr_2fr] lg:px-10">
          <div>
            <h2 className="font-display text-3xl text-cream md:text-4xl">Request a Reservation</h2>
            <div className="divider-mark w-11 mt-4 mb-10" style={{ marginInline: 0 }} />
            <ReservationForm />
          </div>

          <div className="flex flex-col gap-10">
            <div className="border border-line p-8">
              <h3 className="font-accent text-xs uppercase tracking-[0.3em] text-ember">
                Prefer to Talk?
              </h3>
              <div className="mt-5 flex flex-col gap-4">
                <a
                  href={`tel:${siteConfig.phone.tel}`}
                  className="flex items-center gap-3 text-cream transition-colors hover:text-ember"
                >
                  <Phone className="h-4 w-4 text-ember" />
                  {siteConfig.phone.display}
                </a>
                <a
                  href={`https://wa.me/${siteConfig.phone.whatsapp}?text=${encodeURIComponent(
                    "Hi Shooters Grill, I'd like to make a reservation.",
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-cream transition-colors hover:text-ember"
                >
                  <MessageCircle className="h-4 w-4 text-ember" />
                  WhatsApp Us
                </a>
                <a
                  href={siteConfig.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-cream transition-colors hover:text-ember"
                >
                  <InstagramIcon className="h-4 w-4 text-ember" />
                  {siteConfig.instagram.handle}
                </a>
              </div>
            </div>

            <div className="border border-line p-8">
              <h3 className="font-accent text-xs uppercase tracking-[0.3em] text-ember">
                Find Us
              </h3>
              <div className="mt-5 flex items-start gap-3 text-sm leading-relaxed text-stone">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-ember" />
                <span>
                  {siteConfig.address.line1}
                  <br />
                  {siteConfig.address.line2}
                  <br />
                  {siteConfig.address.line3}
                </span>
              </div>
              <div className="mt-5 flex items-start gap-3 text-sm leading-relaxed text-stone">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-ember" />
                <div>
                  {siteConfig.hours.map((h) => (
                    <p key={h.label}>
                      {h.label}: <span className="text-cream/80">{h.value}</span>
                    </p>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative h-72 w-full overflow-hidden border border-line grayscale hover:grayscale-0 transition-all duration-500">
              <iframe
                title="Shooters Grill location map"
                src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
                className="h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="border border-ember/30 bg-ink-3 p-6 text-sm leading-relaxed text-stone">
              <p className="text-cream">Parties of 12 or more?</p>
              <p className="mt-2">
                Ask us about private dining and rooftop buyouts for celebrations, corporate
                dinners, and events. Call or WhatsApp our team to discuss.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
