"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { academyConfig } from "@/lib/academy";
import styles from "./ImageCarousel.module.css";

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
    <section id="galeria" className={styles.section}>
      <div className={`section-container ${styles.container}`}>
        <div className="section-header">
          <p className="section-eyebrow">Nossa academia</p>
          <h2 className="section-title">Conheça o nosso espaço</h2>
          <p className="section-subtitle">
            Tatame, treinos e comunidade — veja um pouco do ambiente onde você
            vai construir seu legado.
          </p>
        </div>

        <div className={styles.carousel}>
          <div className={styles.viewport}>
            {images.map((image, index) => (
              <div
                key={image.src}
                className={`${styles.slide} ${
                  index === current ? styles.slideActive : styles.slideHidden
                }`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  priority={index === 0}
                  sizes="(max-width: 768px) 100vw, 896px"
                  className={styles.image}
                />
                <div className={styles.overlay} />
                <p className={styles.caption}>{image.alt}</p>
              </div>
            ))}
          </div>

          <button
            type="button"
            onClick={prev}
            aria-label="Imagem anterior"
            className={`${styles.navButton} ${styles.navButtonPrev}`}
          >
            <ChevronLeft />
          </button>

          <button
            type="button"
            onClick={next}
            aria-label="Próxima imagem"
            className={`${styles.navButton} ${styles.navButtonNext}`}
          >
            <ChevronRight />
          </button>

          <div className={styles.dots}>
            {images.map((_, index) => (
              <button
                key={index}
                type="button"
                aria-label={`Ir para imagem ${index + 1}`}
                onClick={() => goTo(index)}
                className={`${styles.dot} ${
                  index === current ? styles.dotActive : ""
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
    <svg viewBox="0 0 24 24" fill="none" className={styles.icon} aria-hidden="true">
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
    <svg viewBox="0 0 24 24" fill="none" className={styles.icon} aria-hidden="true">
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
