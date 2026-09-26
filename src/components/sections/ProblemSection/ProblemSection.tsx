import styles from "./ProblemSection.module.css";

export default function ProblemSection() {
  return (
    <section className={`section section-dark ${styles.problem}`}>
      <div className="container">
        <h2 className={styles.sectionTitle}>The Challenge</h2>
        
        <div className={styles.problemGrid}>
          <div className={styles.problemCard}>
            <div className={styles.cardIcon}>🚗</div>
            <h3>Vehicles</h3>
            <p>Every day, millions of vehicles emit harmful gases and particulates into the atmosphere.</p>
          </div>

          <div className={styles.arrow}>→</div>

          <div className={styles.problemCard}>
            <div className={styles.cardIcon}>💨</div>
            <h3>Exhaust</h3>
            <p>These emissions contain CO₂, NOx, particulates, and other compounds affecting air quality and climate.</p>
          </div>

          <div className={styles.arrow}>→</div>

          <div className={styles.problemCard}>
            <div className={styles.cardIcon}>🌍</div>
            <h3>Atmosphere</h3>
            <p>Pollutants accumulate in the air, contributing to climate change and respiratory health issues.</p>
          </div>
        </div>

        <div className={styles.problemStatement}>
          <h3>Current Approaches Have Limits</h3>
          <div className={styles.limitations}>
            <div className={styles.limitItem}>
              <span className={styles.check}>✓</span>
              <p>Catalytic converters reduce some emissions but don't capture gases</p>
            </div>
            <div className={styles.limitItem}>
              <span className={styles.check}>✓</span>
              <p>Electric vehicles shift emissions to the power grid</p>
            </div>
            <div className={styles.limitItem}>
              <span className={styles.check}>✓</span>
              <p>Atmospheric capture requires massive infrastructure</p>
            </div>
            <div className={styles.limitItem}>
              <span className={styles.check}>✓</span>
              <p>No current solution captures at the vehicle level efficiently</p>
            </div>
          </div>
        </div>

        <div className={styles.ourApproach}>
          <h3>Our Idea: Capture at the Source</h3>
          <p>
            Instead of letting emissions disperse into the atmosphere, we're building a system 
            that works <strong>directly at the vehicle exhaust</strong>. By capturing exhaust and 
            using algae—a living organism that naturally consumes CO₂—we can condition emissions 
            before they reach the air.
          </p>
          <p className={styles.note}>
            This is a research prototype exploring biological approaches. We're transparent about 
            what is currently being tested and what represents future concepts.
          </p>
        </div>
      </div>
    </section>
  );
}
