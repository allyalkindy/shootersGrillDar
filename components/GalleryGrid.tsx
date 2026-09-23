"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { clsx } from "clsx";
import { galleryImages, type GalleryCategory } from "@/lib/gallery-data";

const filters: { label: string; value: GalleryCategory | "all" }[] = [
  { label: "All", value: "all" },
  { label: "Steaks", value: "steak" },
  { label: "Plates", value: "plates" },
  { label: "Bar", value: "bar" },
  { label: "Ambiance", value: "ambiance" },
  { label: "The Grill", value: "kitchen" },
];

export function GalleryGrid() {
  const [active, setActive] = useState<GalleryCategory | "all">("all");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const images = useMemo(
    () => (active === "all" ? galleryImages : galleryImages.filter((i) => i.category === active)),
    [active],
  );

  useEffect(() => {
    if (openIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenIndex(null);
      if (e.key === "ArrowRight") setOpenIndex((i) => (i === null ? null : (i + 1) % images.length));
      if (e.key === "ArrowLeft")
        setOpenIndex((i) => (i === null ? null : (i - 1 + images.length) % images.length));
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [openIndex, images.length]);

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-3">
        {filters.map((f) => (
          <button
            key={f.value}
            onClick={() => setActive(f.value)}
            className={clsx(
              "font-accent border px-5 py-2 text-xs uppercase tracking-[0.2em] transition-colors",
              active === f.value
                ? "border-ember bg-ember text-ink"
                : "border-line text-cream/70 hover:border-ember hover:text-ember",
            )}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="mt-12 columns-2 gap-3 sm:columns-3 lg:columns-4">
        {images.map((img, idx) => (
          <button
            key={img.src}
            onClick={() => setOpenIndex(idx)}
            className="relative mb-3 block w-full overflow-hidden break-inside-avoid"
          >
            <Image
              src={img.src}
              alt={img.alt}
              width={img.width}
              height={img.height}
              className="w-full object-cover transition-transform duration-500 hover:scale-105"
              sizes="(min-width: 1024px) 24vw, 45vw"
            />
          </button>
        ))}
      </div>

      <AnimatePresence>
        {openIndex !== null ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/95 p-4 md:p-10"
            onClick={() => setOpenIndex(null)}
          >
            <button
              onClick={() => setOpenIndex(null)}
              aria-label="Close"
              className="absolute right-5 top-5 text-cream/70 hover:text-ember"
            >
              <X className="h-8 w-8" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setOpenIndex((i) => (i === null ? null : (i - 1 + images.length) % images.length));
              }}
              aria-label="Previous image"
              className="absolute left-3 text-cream/70 hover:text-ember md:left-8"
            >
              <ChevronLeft className="h-9 w-9" />
            </button>
            <motion.div
              key={images[openIndex].src}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-h-[85vh] max-w-4xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={images[openIndex].src}
                alt={images[openIndex].alt}
                width={images[openIndex].width}
                height={images[openIndex].height}
                className="max-h-[85vh] w-auto object-contain"
              />
              <p className="mt-3 text-center font-accent text-xs uppercase tracking-[0.15em] text-stone">
                {images[openIndex].alt}
              </p>
            </motion.div>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setOpenIndex((i) => (i === null ? null : (i + 1) % images.length));
              }}
              aria-label="Next image"
              className="absolute right-3 text-cream/70 hover:text-ember md:right-8"
            >
              <ChevronRight className="h-9 w-9" />
            </button>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
