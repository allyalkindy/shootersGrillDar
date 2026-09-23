import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";

const preview = [
  { src: "/images/gallery/009-DdG8mF_NbT5.jpg", alt: "Steak flambeed over the open flame", span: "row-span-2" },
  { src: "/images/gallery/043-DW83BU-jNzO.jpg", alt: "Signature cocktail at the bar", span: "" },
  { src: "/images/gallery/023-DaNlM1_tmJn.jpg", alt: "Slow-roasted lamb shank", span: "" },
  { src: "/images/gallery/044-DXeaqmGjTAg.jpg", alt: "Grilled steak with fresh herb chimichurri", span: "row-span-2" },
  { src: "/images/gallery/072-DZ-XkU7N1qv.jpg", alt: "Shooters Grill smash burger", span: "" },
  { src: "/images/gallery/030-DYq6nE4NkBY.jpg", alt: "Steak searing over open flame on the grill", span: "" },
];

export function GalleryPreview() {
  return (
    <section className="bg-ink py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="A Closer Look"
          title="From Our Table"
          description="Fire, flavour, and the view that started it all — a glimpse of Shooters Grill."
        />

        <div className="mt-16 grid auto-rows-[140px] grid-cols-2 gap-3 sm:auto-rows-[180px] sm:grid-cols-3 md:auto-rows-[220px] lg:grid-cols-6">
          {preview.map((img) => (
            <div key={img.src} className={`relative overflow-hidden group ${img.span}`}>
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(min-width: 1024px) 16vw, 45vw"
              />
            </div>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <ButtonLink href="/gallery" variant="outline">
            View Full Gallery
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
