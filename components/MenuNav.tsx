"use client";

import { useState } from "react";
import { clsx } from "clsx";
import type { MenuCategory } from "@/lib/menu-data";

export function MenuNav({ groups }: { groups: { label: string; categories: MenuCategory[] }[] }) {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div className="sticky top-[64px] z-30 border-b border-line bg-ink/95 backdrop-blur-md">
      <div className="no-scrollbar mx-auto flex max-w-7xl gap-x-8 gap-y-2 overflow-x-auto px-6 py-4 lg:px-10">
        {groups.map((group) => (
          <div key={group.label} className="flex shrink-0 items-center gap-4">
            <span className="font-accent text-[10px] uppercase tracking-[0.2em] text-stone/60">
              {group.label}
            </span>
            {group.categories.map((cat) => (
              <a
                key={cat.id}
                href={`#${cat.id}`}
                onClick={() => setActive(cat.id)}
                className={clsx(
                  "font-accent whitespace-nowrap text-xs uppercase tracking-[0.15em] transition-colors",
                  active === cat.id ? "text-ember" : "text-cream/70 hover:text-ember",
                )}
              >
                {cat.title}
              </a>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
