import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";
import { HornMark } from "@/components/ui/BrandMark";
import { InstagramIcon } from "@/components/ui/InstagramIcon";
import { navLinks, siteConfig } from "@/lib/site-config";

export function Footer() {
  return (
    <footer className="border-t border-line bg-ink">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-4 lg:px-10 lg:py-20">
        <div className="flex flex-col gap-4 lg:col-span-1">
          <div className="flex items-center gap-3">
            <HornMark className="h-8 w-12 text-crimson-2" />
            <span className="font-accent text-base uppercase tracking-[0.12em] text-cream">
              Shooters Grill
            </span>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-stone">
            {siteConfig.descriptor}
          </p>
          <a
            href={siteConfig.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-fit items-center gap-2 font-accent text-xs uppercase tracking-[0.2em] text-cream/80 hover:text-ember transition-colors"
          >
            <InstagramIcon className="h-4 w-4" />
            {siteConfig.instagram.handle}
          </a>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="font-accent text-xs uppercase tracking-[0.35em] text-ember">Explore</h3>
          <ul className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-stone transition-colors hover:text-cream"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="font-accent text-xs uppercase tracking-[0.35em] text-ember">Visit</h3>
          <div className="flex items-start gap-3 text-sm text-stone">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-ember" />
            <span>
              {siteConfig.address.line1}
              <br />
              {siteConfig.address.line2}
              <br />
              {siteConfig.address.line3}
            </span>
          </div>
          <a
            href={`tel:${siteConfig.phone.tel}`}
            className="flex items-center gap-3 text-sm text-stone transition-colors hover:text-cream"
          >
            <Phone className="h-4 w-4 shrink-0 text-ember" />
            {siteConfig.phone.display}
          </a>
          <a
            href={`mailto:${siteConfig.email}`}
            className="flex items-center gap-3 text-sm text-stone transition-colors hover:text-cream"
          >
            <Mail className="h-4 w-4 shrink-0 text-ember" />
            {siteConfig.email}
          </a>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="font-accent text-xs uppercase tracking-[0.35em] text-ember">Hours</h3>
          <ul className="flex flex-col gap-2">
            {siteConfig.hours.map((h) => (
              <li key={h.label} className="flex justify-between gap-4 text-sm text-stone">
                <span>{h.label}</span>
                <span className="text-cream/80">{h.value}</span>
              </li>
            ))}
          </ul>
          <p className="text-xs text-stone/70">{siteConfig.kitchenNote}</p>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-6 text-xs text-stone/70 lg:flex-row lg:px-10">
          <span>
            &copy; {new Date().getFullYear()} Shooters Grill Steakhouse &amp; Bar. Established{" "}
            {siteConfig.established}.
          </span>
          <span>Oyster Bay, Dar es Salaam</span>
        </div>
      </div>
    </footer>
  );
}
