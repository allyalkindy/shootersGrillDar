"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { clsx } from "clsx";
import { Menu, X, Phone } from "lucide-react";
import { HornMark } from "@/components/ui/BrandMark";
import { navLinks, siteConfig } from "@/lib/site-config";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
    <header
      className={clsx(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled || open
          ? "bg-ink/95 backdrop-blur-md border-b border-line py-3"
          : "bg-gradient-to-b from-ink/70 via-ink/20 to-transparent py-5",
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-10">
        <Link href="/" className="group flex items-center gap-3">
          <HornMark className="h-8 w-12 text-crimson-2 transition-transform duration-500 group-hover:scale-105" />
          <span className="flex flex-col leading-none">
            <span className="font-accent text-lg uppercase tracking-[0.12em] text-cream">
              Shooters Grill
            </span>
            <span className="font-accent text-[9px] uppercase tracking-[0.35em] text-ember">
              Steakhouse &amp; Bar
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-10 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={clsx(
                "font-accent text-xs uppercase tracking-[0.22em] transition-colors duration-300",
                pathname === link.href ? "text-ember" : "text-cream/80 hover:text-ember",
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-6 lg:flex">
          <a
            href={`tel:${siteConfig.phone.tel}`}
            className="flex items-center gap-2 font-accent text-xs uppercase tracking-[0.15em] text-cream/80 hover:text-ember transition-colors"
          >
            <Phone className="h-3.5 w-3.5" />
            {siteConfig.phone.display}
          </a>
          <Link
            href="/reservations"
            className="bg-crimson px-6 py-3 font-accent text-xs uppercase tracking-[0.2em] text-cream transition-colors hover:bg-crimson-2"
          >
            Reserve a Table
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="text-cream lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </button>
      </div>
    </header>

    <div
      className={clsx(
        "fixed inset-0 z-40 flex flex-col bg-ink pt-20 transition-opacity duration-300 lg:hidden",
        open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
      )}
    >
      <nav className="flex flex-1 flex-col items-center justify-center gap-8">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={() => setOpen(false)}
            className={clsx(
              "font-display text-3xl",
              pathname === link.href ? "text-ember" : "text-cream",
            )}
          >
            {link.label}
          </Link>
        ))}
        <a
          href={`tel:${siteConfig.phone.tel}`}
          className="mt-4 font-accent text-sm uppercase tracking-[0.2em] text-stone"
        >
          {siteConfig.phone.display}
        </a>
        <Link
          href="/reservations"
          onClick={() => setOpen(false)}
          className="bg-crimson px-10 py-4 font-accent text-sm uppercase tracking-[0.2em] text-cream"
        >
          Reserve a Table
        </Link>
      </nav>
    </div>
    </>
  );
}
