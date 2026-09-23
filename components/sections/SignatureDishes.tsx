import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";

const dishes = [
  {
    name: "The South African T-Bone",
    description: "450g bone-in classic, char-grilled to order",
    price: "58,000 TZS",
    image: "/images/gallery/022-DaajfEUNjYK.jpg",
  },
  {
    name: "The Tomahawk",
    description: "1kg dry-rubbed and fire-grilled, built to share",
    price: "145,000 TZS",
    image: "/images/gallery/038-DXWmdO1kfZl.jpg",
  },
  {
    name: "Fall-Off-The-Bone Ribs",
    description: "Slow-cooked, house glaze, hand-cut fries",
    price: "From 38,000 TZS",
    image: "/images/gallery/060-DUk2gbUDcIb.jpg",
  },
  {
    name: "Grilled Prawn Platter",
    description: "Flame-grilled, chilli lime butter, onion rings",
    price: "48,000 TZS",
    image: "/images/gallery/032-DZFeg2YNkel.jpg",
  },
];

export function SignatureDishes() {
  return (
    <section className="bg-ink-2 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="Off the Grill"
          title="Signature Cuts"
          description="A handful of the plates our regulars order on repeat — every one of them finished over open flame."
        />

        <div className="mt-16 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
          {dishes.map((dish) => (
            <div key={dish.name} className="group flex flex-col">
              <div className="relative aspect-[3/4] w-full overflow-hidden">
                <Image
                  src={dish.image}
                  alt={dish.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(min-width: 1024px) 24vw, (min-width: 640px) 45vw, 90vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />
              </div>
              <h3 className="font-display mt-5 text-xl text-cream">{dish.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-stone">{dish.description}</p>
              <span className="font-accent mt-3 text-xs uppercase tracking-[0.2em] text-ember">
                {dish.price}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <ButtonLink href="/menu">See the Full Menu</ButtonLink>
        </div>
      </div>
    </section>
  );
}
