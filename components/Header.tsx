"use client";

import { useState } from "react";
import { academyConfig } from "@/lib/academy";
import styles from "./Header.module.css";

const navLinks = [
  { href: "#inicio", label: "Início" },
  { href: "#horarios", label: "Horários" },
  { href: "#galeria", label: "Galeria" },
  { href: "#localizacao", label: "Localização" },
] as const;

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={styles.header}>
      <div className={`section-container ${styles.inner}`}>
        <a href="#inicio" className={styles.brand} onClick={closeMenu}>
          <img
            src="/assets/Legado.svg"
            alt={academyConfig.name}
            className={styles.logo}
          />
        </a>

        <nav className={styles.navDesktop} aria-label="Principal">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className={styles.navLink}>
              {link.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className={styles.menuButton}
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className={styles.menuIcon} data-open={menuOpen} />
        </button>
      </div>

      <nav
        id="mobile-nav"
        className={`${styles.navMobile} ${menuOpen ? styles.navMobileOpen : ""}`}
        aria-label="Menu mobile"
        aria-hidden={!menuOpen}
      >
        <div className={styles.navMobileInner}>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={styles.navMobileLink}
              onClick={closeMenu}
            >
              {link.label}
            </a>
          ))}
        </div>
      </nav>

      {menuOpen ? (
        <button
          type="button"
          className={styles.backdrop}
          aria-label="Fechar menu"
          onClick={closeMenu}
        />
      ) : null}
    </header>
  );
}
