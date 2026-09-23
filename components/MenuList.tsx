import type { MenuCategory } from "@/lib/menu-data";

export function MenuCategoryBlock({ category }: { category: MenuCategory }) {
  return (
    <div id={category.id} className="scroll-mt-28">
      <div className="flex flex-col items-center text-center">
        <span className="font-accent text-xs uppercase tracking-[0.4em] text-ember">
          {category.eyebrow}
        </span>
        <h2 className="font-display mt-3 text-3xl text-cream md:text-4xl">{category.title}</h2>
        <div className="divider-mark w-11 mt-4" />
        {category.note ? (
          <p className="mt-4 max-w-lg text-sm leading-relaxed text-stone">{category.note}</p>
        ) : null}
      </div>

      <ul className="mx-auto mt-10 flex max-w-3xl flex-col gap-8">
        {category.items.map((item) => (
          <li key={item.name} className="flex flex-col gap-1">
            <div className="flex items-baseline gap-3">
              <span className="font-display text-lg text-cream md:text-xl">{item.name}</span>
              <span className="flex-1 border-b border-dotted border-line translate-y-[-4px]" />
              <span className="font-accent whitespace-nowrap text-sm text-ember">
                {item.price}
                <span className="ml-1 text-[10px] text-stone">TZS</span>
              </span>
            </div>
            <div className="flex items-center gap-3">
              <p className="text-sm leading-relaxed text-stone">{item.description}</p>
              {item.tag ? (
                <span className="shrink-0 border border-ember/40 px-2 py-0.5 font-accent text-[10px] uppercase tracking-[0.15em] text-ember">
                  {item.tag}
                </span>
              ) : null}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
