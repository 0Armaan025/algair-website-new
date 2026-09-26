import Link from "next/link";
import styles from "./CTASection.module.css";

export default function CTASection() {
  return (
    <section className={`section section-accent ${styles.cta}`}>
      <div className="container">
        <div className={styles.ctaContent}>
          <h2 className={styles.title}>Engineering Meets Biology</h2>

          <p className={styles.subtitle}>
            ALGAIR is an active research prototype exploring biological solutions to emission challenges. 
            We're building, testing, and learning in real-time—and we're inviting you to follow our journey.
          </p>

          <div className={styles.ctaButtons}>
            <Link href="/prototype" className="btn btn-primary">
              Explore the Prototype
            </Link>
            <Link href="/research" className="btn btn-secondary">
              View Research Data
            </Link>
          </div>

          <div className={styles.quickLinks}>
            <div className={styles.quickLink}>
              <Link href="/technology">
                <span className={styles.linkIcon}>🔬</span>
                <span className={styles.linkText}>Technology</span>
              </Link>
            </div>
            <div className={styles.quickLink}>
              <Link href="/prototype">
                <span className={styles.linkIcon}>🏗️</span>
                <span className={styles.linkText}>Prototype</span>
              </Link>
            </div>
            <div className={styles.quickLink}>
              <Link href="/team">
                <span className={styles.linkIcon}>👥</span>
                <span className={styles.linkText}>Team</span>
              </Link>
            </div>
            <div className={styles.quickLink}>
              <Link href="/impact">
                <span className={styles.linkIcon}>🌍</span>
                <span className={styles.linkText}>Impact</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
