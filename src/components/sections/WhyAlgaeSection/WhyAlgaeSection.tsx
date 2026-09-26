import styles from "./WhyAlgaeSection.module.css";

export default function WhyAlgaeSection() {
  const reasons = [
    {
      icon: "☀️",
      title: "Photosynthesis",
      description:
        "Algae converts light energy into chemical energy, consuming CO₂ and releasing O₂. This natural process happens at scale in the bio-chamber.",
      detail: "Photosynthesis occurs at rates of 5-20 mg CO₂/L/h depending on light and algae strain",
    },
    {
      icon: "♻️",
      title: "Carbon Utilization",
      description:
        "Algae uses CO₂ as its primary carbon source for growth. In our system, exhaust CO₂ becomes biological feedstock.",
      detail: "Algae biomass composition: ~50% carbon by dry weight",
    },
    {
      icon: "⚙️",
      title: "Biology + Engineering",
      description:
        "Unlike purely mechanical filters, our approach combines living systems with engineering precision. Algae actively responds to its environment.",
      detail: "Modular design allows easy cultivation, monitoring, and replacement of biological medium",
    },
    {
      icon: "🌍",
      title: "Sustainability",
      description:
        "Algae-based systems don't deplete resources. Biomass can be harvested and used for other applications (biofuels, fertilizer, protein).",
      detail: "Zero waste potential: harvested algae has commercial value",
    },
  ];

  return (
    <section className={`section ${styles.whyAlgae}`}>
      <div className="container">
        <h2 className={styles.sectionTitle}>Why Algae?</h2>

        <div className={styles.reasonsGrid}>
          {reasons.map((reason, index) => (
            <div key={index} className={styles.reasonCard}>
              <div className={styles.icon}>{reason.icon}</div>
              <h3>{reason.title}</h3>
              <p className={styles.description}>{reason.description}</p>
              <p className={styles.detail}>
                <strong>Research note:</strong> {reason.detail}
              </p>
            </div>
          ))}
        </div>

        <div className={styles.biologyEngineering}>
          <h3>A Hybrid Approach</h3>
          <div className={styles.hybridGrid}>
            <div className={styles.hybridCard}>
              <h4>🔬 Biology</h4>
              <ul>
                <li>Photosynthesis: Active CO₂ consumption</li>
                <li>Adaptation: Algae responds to conditions</li>
                <li>Growth: Renewable system</li>
                <li>Multiple benefits: Oxygen production, biomass</li>
              </ul>
            </div>

            <div className={styles.plusSign}>+</div>

            <div className={styles.hybridCard}>
              <h4>⚙️ Engineering</h4>
              <ul>
                <li>Temperature control: Precision cooling system</li>
                <li>Flow management: Optimized gas distribution</li>
                <li>Monitoring: Real-time data collection</li>
                <li>Scalability: Repeatable, modular design</li>
              </ul>
            </div>

            <div className={styles.equals}>=</div>

            <div className={styles.hybridCard + " " + styles.result}>
              <h4>✨ ALGAIR</h4>
              <p>
                A system that captures emissions at the source using living biology 
                guided by precision engineering—neither pure biology nor pure engineering, 
                but a combination of both.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.disclaimer}>
          <span className="badge badge-future">🔵 FUTURE</span>
          <p>
            While photosynthesis and algae cultivation are well-established biological processes, 
            our application to vehicle exhaust treatment is experimental. We're actively researching 
            effectiveness, scalability, and practical deployment—current results are preliminary.
          </p>
        </div>
      </div>
    </section>
  );
}
