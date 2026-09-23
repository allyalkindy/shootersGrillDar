import type { Metadata } from "next";
import { PageBanner } from "@/components/sections/PageBanner";
import { MenuNav } from "@/components/MenuNav";
import { MenuCategoryBlock } from "@/components/MenuList";
import { ReserveBanner } from "@/components/sections/ReserveBanner";
import { menuCategories, cocktailMenu } from "@/lib/menu-data";

export const metadata: Metadata = {
  title: "Menu",
  description:
    "Prime steaks, slow-cooked ribs, surf & turf, and a full cocktail and wine list from Shooters Grill, Dar es Salaam's rooftop steakhouse.",
};

export default function MenuPage() {
  const groups = [
    { label: "Kitchen", categories: menuCategories },
    { label: "Bar", categories: cocktailMenu },
  ];

  return (
    <>
      <PageBanner
        image="/images/gallery/038-DXWmdO1kfZl.jpg"
        alt="Steaks searing over open flame at Shooters Grill"
        eyebrow="The Menu"
        title="Fire-grilled, always."
        description="Every steak is cut in-house and grilled over open flame. Prices are listed in Tanzanian Shillings."
      />

      <MenuNav groups={groups} />

      <section className="bg-ink py-20 lg:py-28">
        <div className="mx-auto flex max-w-7xl flex-col gap-24 px-6 lg:px-10">
          {menuCategories.map((category) => (
            <MenuCategoryBlock key={category.id} category={category} />
          ))}
        </div>
      </section>

      <section className="border-t border-line bg-ink-2 py-20 lg:py-28">
        <div className="mx-auto flex max-w-7xl flex-col gap-24 px-6 lg:px-10">
          <div className="flex flex-col items-center text-center">
            <span className="font-accent text-xs uppercase tracking-[0.4em] text-ember">
              The Bar
            </span>
            <h2 className="font-display mt-3 text-4xl text-cream md:text-5xl">
              Cocktails &amp; Cellar
            </h2>
            <div className="divider-mark w-11 mt-4" />
          </div>
          {cocktailMenu.map((category) => (
            <MenuCategoryBlock key={category.id} category={category} />
          ))}
        </div>
      </section>

      <ReserveBanner />
    </>
  );
}
