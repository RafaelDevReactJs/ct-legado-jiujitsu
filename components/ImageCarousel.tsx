"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { academyConfig } from "@/lib/academy";

export default function ImageCarousel() {
  const images = academyConfig.carousel;
  const [current, setCurrent] = useState(0);

  const goTo = useCallback(
    (index: number) => {
      setCurrent((index + images.length) % images.length);
    },
    [images.length],
  );

  const next = useCallback(() => goTo(current + 1), [current, goTo]);
  const prev = useCallback(() => goTo(current - 1), [current, goTo]);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section id="galeria" className="py-20 sm:py-28">
      <div className="section-container">
        <div className="mb-12 text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-legado-gold">
            Nossa academia
          </p>
          <h2 className="mt-2 text-3xl font-bold sm:text-4xl">
            Conheça o nosso espaço
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-400">
            Tatame, treinos e comunidade — veja um pouco do ambiente onde você
            vai construir seu legado.
          </p>
        </div>

        <div className="relative mx-auto max-w-4xl overflow-hidden rounded-2xl shadow-2xl shadow-black/50">
          <div className="relative aspect-[16/10] w-full">
            {images.map((image, index) => (
              <div
                key={image.src}
                className={`absolute inset-0 transition-opacity duration-700 ${
                  index === current ? "opacity-100" : "opacity-0"
                }`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  priority={index === 0}
                  sizes="(max-width: 768px) 100vw, 896px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <p className="absolute bottom-4 left-4 text-sm font-medium text-white/90 sm:bottom-6 sm:left-6 sm:text-base">
                  {image.alt}
                </p>
              </div>
            ))}
          </div>

          <button
            type="button"
            onClick={prev}
            aria-label="Imagem anterior"
            className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2.5 text-white backdrop-blur-sm transition hover:bg-black/70 sm:left-4 sm:p-3"
          >
            <ChevronLeft />
          </button>

          <button
            type="button"
            onClick={next}
            aria-label="Próxima imagem"
            className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2.5 text-white backdrop-blur-sm transition hover:bg-black/70 sm:right-4 sm:p-3"
          >
            <ChevronRight />
          </button>

          <div className="absolute bottom-4 right-4 flex gap-2 sm:bottom-6 sm:right-6">
            {images.map((_, index) => (
              <button
                key={index}
                type="button"
                aria-label={`Ir para imagem ${index + 1}`}
                onClick={() => goTo(index)}
                className={`h-2 rounded-full transition-all ${
                  index === current
                    ? "w-8 bg-legado-gold"
                    : "w-2 bg-white/50 hover:bg-white/80"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ChevronLeft() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
      <path
        d="M15 18l-6-6 6-6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ChevronRight() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
      <path
        d="M9 18l6-6-6-6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
