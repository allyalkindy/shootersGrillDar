"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";

const slides = [
  {
    src: "/images/gallery/036-DX_yb2kNrL3.jpg",
    alt: "Shooters Grill rooftop terrace at golden hour over Dar es Salaam",
  },
  {
    src: "/images/gallery/009-DdG8mF_NbT5.jpg",
    alt: "Steak flambeed over the open flame at Shooters Grill",
  },
  {
    src: "/images/gallery/043-DW83BU-jNzO.jpg",
    alt: "Signature cocktail at the Shooters Grill bar",
  },
];

export function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % slides.length), 6000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative flex h-[100svh] min-h-[640px] w-full items-end overflow-hidden bg-ink">
      <div className="absolute inset-0">
        <AnimatePresence mode="sync">
          <motion.div
            key={slides[index].src}
            initial={{ opacity: 0, scale: 1.06 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.8, ease: "easeOut" }}
            className="absolute inset-0"
          >
            <Image
              src={slides[index].src}
              alt={slides[index].alt}
              fill
              priority={index === 0}
              quality={90}
              className="object-cover"
              sizes="100vw"
            />
          </motion.div>
        </AnimatePresence>
        <div className="grain absolute inset-0" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-ink/30" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-24 pt-40 lg:px-10 lg:pb-28">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-accent block text-xs uppercase tracking-[0.5em] text-ember"
        >
          Est. 2002 · Oyster Bay, Dar es Salaam
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35 }}
          className="font-display mt-5 max-w-3xl text-balance text-5xl leading-[1.05] text-cream sm:text-6xl lg:text-7xl"
        >
          Dine above the city, on fire from the flame.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5 }}
          className="mt-6 max-w-xl text-base leading-relaxed text-stone sm:text-lg"
        >
          Prime cuts, char-grilled to order, served six floors above Oyster Bay with the
          Indian Ocean skyline as your backdrop. This is Dar&apos;s original rooftop
          steakhouse.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.65 }}
          className="mt-10 flex flex-wrap items-center gap-5"
        >
          <ButtonLink href="/reservations">Reserve a Table</ButtonLink>
          <ButtonLink href="/menu" variant="outline">
            View the Menu
          </ButtonLink>
        </motion.div>
      </div>

      <div className="absolute inset-x-0 bottom-6 z-10 flex justify-center">
        <ChevronDown className="h-6 w-6 animate-bounce text-cream/60" />
      </div>

      <div className="absolute right-6 top-1/2 z-10 hidden -translate-y-1/2 flex-col gap-2 lg:flex">
        {slides.map((s, i) => (
          <button
            key={s.src}
            aria-label={`Show slide ${i + 1}`}
            onClick={() => setIndex(i)}
            className={`h-8 w-[2px] transition-all duration-500 ${
              i === index ? "bg-ember" : "bg-cream/25"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
