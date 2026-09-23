import type { Metadata } from "next";
import { PageBanner } from "@/components/sections/PageBanner";
import { GalleryGrid } from "@/components/GalleryGrid";
import { ReserveBanner } from "@/components/sections/ReserveBanner";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "A look at Shooters Grill — the rooftop terrace, the open flame grill, the bar, and the plates that keep Dar es Salaam coming back.",
};

export default function GalleryPage() {
  return (
    <>
      <PageBanner
        image="/images/gallery/042-DXJwIbcEjnU.jpg"
        alt="Table of grilled specialities overlooking Dar es Salaam"
        eyebrow="Gallery"
        title="Fire, flavour, and the view."
      />

      <section className="bg-ink py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <GalleryGrid />
        </div>
      </section>

      <ReserveBanner />
    </>
  );
}
