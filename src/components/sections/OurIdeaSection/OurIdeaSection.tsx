import styles from "./OurIdeaSection.module.css";

export default function OurIdeaSection() {
  const steps = [
    {
      number: "1",
      title: "Capture",
      description:
        "Vehicle exhaust is directed into our system through an intake pathway with initial particle filtration.",
      icon: "📥",
    },
    {
      number: "2",
      title: "Condition",
      description:
        "The exhaust passes through a cooling system with metallic fins and copper cooling to bring the temperature down to levels suitable for biological interaction.",
      icon: "❄️",
    },
    {
      number: "3",
      title: "Biological Interaction",
      description:
        "In our algae chamber, the conditioned gas contacts living algae and water. Algae naturally consumes CO₂ and some volatile compounds through photosynthesis and metabolic processes.",
      icon: "🌱",
    },
    {
      number: "4",
      title: "Study & Improve",
      description:
        "We measure temperature, gas flow, CO₂ levels, algae response, light exposure, and pH to understand the system's behavior and optimize the design.",
      icon: "📊",
    },
  ];

  return (
    <section className={`section ${styles.ourIdea}`}>
      <div className="container">
        <h2 className={styles.sectionTitle}>Our Idea: 4-Step Approach</h2>

        <p className={styles.sectionIntro}>
          ALGAIR combines biological and engineering processes to condition exhaust before it enters 
          the atmosphere. Here's how our prototype works:
        </p>

        <div className={styles.stepsContainer}>
          {steps.map((step, index) => (
            <div key={index} className={styles.stepCard}>
              <div className={styles.stepNumber}>{step.number}</div>
              <div className={styles.stepIcon}>{step.icon}</div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
              
              {index < steps.length - 1 && (
                <div className={styles.stepArrow}>
                  <span>↓</span>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className={styles.processVisualization}>
          <svg
            viewBox="0 0 1000 200"
            xmlns="http://www.w3.org/2000/svg"
            className={styles.processSvg}
          >
            {/* Capture box */}
            <rect x="50" y="50" width="150" height="100" fill="none" stroke="#4cb8a5" strokeWidth="2" />
            <text x="125" y="105" textAnchor="middle" fill="#4cb8a5" fontSize="14" fontWeight="600">
              Capture
            </text>

            {/* Arrow 1 */}
            <path
              d="M 220 100 L 260 100"
              stroke="#4cb8a5"
              strokeWidth="2"
              fill="none"
              markerEnd="url(#arrowhead)"
            />

            {/* Condition box */}
            <rect x="280" y="50" width="150" height="100" fill="none" stroke="#4cb8a5" strokeWidth="2" />
            <text x="355" y="105" textAnchor="middle" fill="#4cb8a5" fontSize="14" fontWeight="600">
              Condition
            </text>

            {/* Arrow 2 */}
            <path
              d="M 450 100 L 490 100"
              stroke="#4cb8a5"
              strokeWidth="2"
              fill="none"
              markerEnd="url(#arrowhead)"
            />

            {/* Bio Interaction box */}
            <rect x="510" y="50" width="150" height="100" fill="none" stroke="#4cb8a5" strokeWidth="2" />
            <text x="585" y="100" textAnchor="middle" fill="#4cb8a5" fontSize="12" fontWeight="600">
              Bio
            </text>
            <text x="585" y="115" textAnchor="middle" fill="#4cb8a5" fontSize="12" fontWeight="600">
              Interaction
            </text>

            {/* Arrow 3 */}
            <path
              d="M 680 100 L 720 100"
              stroke="#4cb8a5"
              strokeWidth="2"
              fill="none"
              markerEnd="url(#arrowhead)"
            />

            {/* Study & Improve box */}
            <rect x="740" y="50" width="150" height="100" fill="none" stroke="#4cb8a5" strokeWidth="2" />
            <text x="815" y="100" textAnchor="middle" fill="#4cb8a5" fontSize="12" fontWeight="600">
              Study &
            </text>
            <text x="815" y="115" textAnchor="middle" fill="#4cb8a5" fontSize="12" fontWeight="600">
              Improve
            </text>

            {/* Arrow marker definition */}
            <defs>
              <marker
                id="arrowhead"
                markerWidth="10"
                markerHeight="10"
                refX="9"
                refY="3"
                orient="auto"
              >
                <polygon points="0 0, 10 3, 0 6" fill="#4cb8a5" />
              </marker>
            </defs>
          </svg>
        </div>

        <div className={styles.disclaimer}>
          <span className="badge badge-testing">🟡 UNDER TESTING</span>
          <p>
            This 4-step process describes our current prototype research. We're actively testing each stage 
            to understand what works and what needs refinement. Not all claims are yet verified—we're being transparent 
            about our experimental status.
          </p>
        </div>
      </div>
    </section>
  );
}
