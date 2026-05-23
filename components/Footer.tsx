import { academyConfig } from "@/lib/academy";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`section-container ${styles.inner}`}>
        <img
          src="/assets/Legado.svg"
          alt={academyConfig.name}
          className={styles.logo}
        />
        <p className={styles.copy}>
          &copy; {new Date().getFullYear()} {academyConfig.name}. Todos os
          direitos reservados.
        </p>
        <nav className={styles.links} aria-label="Rodapé">
          <a href="#inicio">Início</a>
          <a href="#galeria">Galeria</a>
          <a href="#localizacao">Localização</a>
        </nav>
      </div>
    </footer>
  );
}
