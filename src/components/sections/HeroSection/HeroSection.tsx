import Link from "next/link";
import styles from "./HeroSection.module.css";

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={`container ${styles.heroContent}`}>
        <div className={styles.textContent}>
          <div className={styles.badge}>🟢 PROTOTYPE ACTIVE</div>

          <h1 className={styles.title}>
            <span className="gradient-text">ALGAIR</span>
          </h1>

          <p className={styles.subtitle}>
            Capturing emissions at the source with biological engineering
          </p>

          <p className={styles.description}>
            ALGAIR is a prototype device that uses algae-based biological technology
            to capture and condition vehicle exhaust. By combining living biology with
            precision engineering, we're researching a new approach to emission reduction—
            working directly at the vehicle level.
          </p>

          <div className={styles.ctaButtons}>
            <Link href="/prototype" className="btn btn-primary">
              Explore ALGAIR
            </Link>
            <Link href="/technology" className="btn btn-secondary">
              See How It Works
            </Link>
          </div>

          <div className={styles.stats}>
            <div className={styles.stat}>
              <div className={styles.statNumber}>2026</div>
              <div className={styles.statLabel}>Prototype Built</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statNumber}>Active</div>
              <div className={styles.statLabel}>Testing Phase</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statNumber}>6</div>
              <div className={styles.statLabel}>Research Parameters</div>
            </div>
          </div>
        </div>

        <div className={styles.visualContent}>
          <div className={styles.prototypeVisualization}>
            <div className={styles.prototypePlaceholder}>
              <svg
                viewBox="0 0 300 400"
                xmlns="http://www.w3.org/2000/svg"
                className={styles.prototypeSvg}
              >
                {/* Main chamber */}
                <rect
                  x="100"
                  y="80"
                  width="100"
                  height="200"
                  fill="none"
                  stroke="#4cb8a5"
                  strokeWidth="2"
                />

                {/* Cooling fins */}
                <rect x="90" y="120" width="10" height="80" fill="#6a6a6a" />
                <rect x="200" y="120" width="10" height="80" fill="#6a6a6a" />

                {/* Bio chamber */}
                <circle cx="150" cy="180" r="35" fill="none" stroke="#3a8a73" strokeWidth="2" />

                {/* Inlet */}
                <line x1="70" y1="100" x2="100" y2="100" stroke="#4cb8a5" strokeWidth="3" />
                <text x="50" y="105" fill="#4cb8a5" fontSize="12">
                  Inlet
                </text>

                {/* Outlet */}
                <line x1="200" y1="280" x2="230" y2="280" stroke="#5dd4b4" strokeWidth="3" />
                <text x="235" y="285" fill="#5dd4b4" fontSize="12">
                  Outlet
                </text>

                {/* Flow particles animation */}
                <circle cx="150" cy="60" r="3" fill="#5dd4b4" className={styles.particle} />
              </svg>
            </div>
            <p className={styles.visualCaption}>
              Prototype schematic showing core components
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
