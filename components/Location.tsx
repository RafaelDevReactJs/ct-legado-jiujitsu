import { academyConfig } from "@/lib/academy";
import styles from "./Location.module.css";

export default function Location() {
  const { address, maps } = academyConfig;

  return (
    <section id="localizacao" className={styles.section}>
      <div className="section-container">
        <div className="section-header">
          <p className="section-eyebrow">Onde estamos</p>
          <h2 className="section-title">Venha nos visitar</h2>
          <p className="section-subtitle">
            Estamos de portas abertas para receber você. Confira o endereço e
            trace a rota até a academia.
          </p>
        </div>

        <div className={styles.grid}>
          <div className={styles.infoColumn}>
            <div className={styles.card}>
              <div className={styles.iconWrapper}>
                <MapPinIcon />
              </div>

              <h3 className={styles.cardTitle}>Endereço</h3>

              <address className={styles.address}>
                <p>{address.street}</p>
                <p>
                  {address.neighborhood} — {address.city}/{address.state}
                </p>
                {address.zipCode ? <p>CEP: {address.zipCode}</p> : null}
              </address>

              <a
                href={maps.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`btn btn-primary ${styles.directionsLink}`}
              >
                <NavigationIcon />
                Abrir rota no Google Maps
              </a>
            </div>
          </div>

          <div className={styles.mapWrapper}>
            <iframe
              title="Localização CT Legado Jiu-Jitsu no Google Maps"
              src={maps.embedUrl}
              width="100%"
              height="100%"
              className={styles.map}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function MapPinIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={styles.iconGold} aria-hidden="true">
      <path
        d="M12 21s7-4.5 7-11a7 7 0 10-14 0c0 6.5 7 11 7 11z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function NavigationIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={styles.icon} aria-hidden="true">
      <path
        d="M3 11l19-9-9 19-2-8-8-2z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}
