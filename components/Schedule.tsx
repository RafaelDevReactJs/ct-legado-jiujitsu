import { academyConfig, getFreeClassWhatsAppUrl } from "@/lib/academy";
import styles from "./Schedule.module.css";

export default function Schedule() {
  return (
    <section id="horarios" className={styles.section}>
      <div className="section-container">
        <div className="section-header">
          <p className="section-eyebrow">Turmas e horários</p>
          <h2 className="section-title">Horários de Treino</h2>
          <p className={styles.jiuJitsuLabel}>Jiu-Jitsu</p>
          <p className="section-subtitle">
            Encontre a turma ideal para você ou para quem você ama. Venha
            experimentar uma aula gratuita.
          </p>
        </div>

        <div className={styles.blocks}>
          {academyConfig.schedule.map((block) => (
            <article key={block.days} className={styles.block}>
              <h3 className={styles.daysTitle}>{block.days}</h3>
              <ul className={styles.classList}>
                {block.classes.map((item) => (
                  <li key={`${block.days}-${item.time}`} className={styles.classRow}>
                    <div className={styles.timeCell}>
                      <ClockIcon />
                      <span>{item.time}</span>
                    </div>
                    <div className={styles.nameCell}>{item.name}</div>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className={styles.cta}>
          <a
            href={getFreeClassWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className={`btn btn-primary btn-cta-pulse ${styles.ctaButton}`}
          >
            <ChevronIcon />
            Agende agora uma aula grátis
          </a>
        </div>
      </div>
    </section>
  );
}

function ClockIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={styles.clockIcon} aria-hidden="true">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
      <path d="M12 7v5l3 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function ChevronIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={styles.chevronIcon} aria-hidden="true">
      <path d="M13 6l6 6-6 6V6zM5 6l6 6-6 6V6z" />
    </svg>
  );
}
