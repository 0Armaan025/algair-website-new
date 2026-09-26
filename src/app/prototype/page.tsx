import styles from "./page.module.css";

export default function PrototypePage() {
  const specifications = [
    { label: "Chamber Diameter", value: "0.12m", status: "verified" },
    { label: "System Type", value: "Closed-loop with cooling", status: "verified" },
    { label: "Algae Strain", value: "Spirulina", status: "verified" },
    { label: "Cooling Approach", value: "Chamber and Metallic fins -> Copper Cooling", status: "testing" },
  ];

  const galleryItems = [
    {
      type: "image",
      title: "Prototype Overview - Photo 1",
      description: "Close-up view of the prototype assembly and cooling integration.",
      src: "/image1.jpeg",
    },
    {
      type: "image",
      title: "Prototype Overview - Photo 2",
      description: "Detailed view of the algae chamber and inline filtration pathways.",
      src: "/image2.jpeg",
    },
    {
      type: "video",
      title: "ALGAIR Demonstration Video",
      description: "Demonstration of exhaust flow management and system operation.",
      src: "/demo_video.mp4",
    },
    {
      type: "video",
      title: "Team & Project Interview - Part 1",
      description: "Interview covering the research methodology, concept, and technical challenges.",
      src: "/interview1.mp4",
    },
    {
      type: "video",
      title: "Team & Project Interview - Part 2",
      description: "In-depth discussion on prototype results, future testing, and roadmap vision.",
      src: "/interview2.mp4",
    },
  ];

  const roadmapSteps = [
    { year: "2026", title: "Build" },
    { year: "2027", title: "Test" },
    { year: "2028", title: "Refine" },
    { year: "2029", title: "Pilot" },
    { year: "2030+", title: "Scale" },
  ];

  const phases = [
    {
      phase: "Phase 1 — Concept & Prototype",
      year: "2026",
      status: "🟢",
      badgeClass: "badge-verified",
      items: [
        "Identify the problem: vehicle exhaust emissions",
        "Develop the ALGAIR concept",
        "Design the exhaust-treatment pathway",
        "Build the first physical prototype",
        "Integrate particle filtration, cooling, algae chamber and final filtration",
        "Develop the ALGAIR website",
        "Conduct initial laboratory/controlled experiments",
        "Participate in student innovation competitions"
      ]
    },
    {
      phase: "Phase 2 — Testing & Validation",
      year: "2027",
      status: "🔵",
      badgeClass: "badge-testing",
      items: [
        "Improve prototype reliability and safety",
        "Test different algae conditions",
        "Measure temperature before and after cooling",
        "Study CO₂ uptake and oxygen production under controlled conditions",
        "Test gas flow and algae-chamber performance",
        "Compare results across different operating conditions",
        "Document experimental data",
        "Refine the design based on results"
      ]
    },
    {
      phase: "Phase 3 — Product Development",
      year: "2028",
      status: "🟣",
      badgeClass: "badge-testing",
      items: [
        "Develop a more compact and durable design",
        "Improve cooling and gas-flow management",
        "Develop a practical algae maintenance system",
        "Reduce manufacturing cost",
        "Develop modular versions for different vehicle categories",
        "Conduct longer-duration testing",
        "Begin discussions with vehicle/fleet operators",
        "Work toward relevant technical and regulatory requirements"
      ]
    },
    {
      phase: "Phase 4 — Pilot & Commercialization",
      year: "2029",
      status: "🟠",
      badgeClass: "badge-testing",
      items: [
        "Build pilot units",
        "Conduct controlled real-world trials",
        "Collect performance and maintenance data",
        "Improve manufacturing process",
        "Develop supplier and manufacturing partnerships",
        "Establish pricing and business model",
        "Launch pilot programs with selected fleet operators",
        "Prepare for commercial deployment"
      ]
    },
    {
      phase: "Long-Term Vision",
      year: "2030+",
      status: "🌍",
      badgeClass: "badge-testing",
      items: [
        "Expand ALGAIR to larger vehicle fleets",
        "Develop multiple product sizes",
        "Explore industrial exhaust applications where technically and legally appropriate",
        "Scale manufacturing",
        "Expand into additional markets",
        "Continue improving algae-based carbon-management technology"
      ]
    }
  ];

  return (
    <div>
      <section className={`section ${styles.prototypeHero}`}>
        <div className="container">
          <h1>The ALGAIR Prototype</h1>
          <p className={styles.subtitle}>
            Our current research prototype—actively built, tested, and refined
          </p>
        </div>
      </section>

      <section className={`section section-dark ${styles.specificationsSection}`}>
        <div className="container">
          <h2>Current Specifications</h2>
          <p className={styles.sectionNote}>
            These specifications describe our working prototype.
            <span className="badge badge-verified">🟢 VERIFIED</span>
            indicates measurements taken during testing.
            <span className="badge badge-testing">🟡 UNDER TESTING</span>
            indicates ongoing optimization.
          </p>

          <div className={styles.specsGrid}>
            {specifications.map((spec, index) => (
              <div key={index} className={styles.specCard}>
                <h3>{spec.label}</h3>
                <div className={styles.specValue}>{spec.value}</div>
                <span className={spec.status === "verified" ? "badge badge-verified" : "badge badge-testing"}>
                  {spec.status === "verified" ? "🟢 VERIFIED" : "🟡 TESTING"}
                </span>
              </div>
            ))}
          </div>

          <div className={styles.specNote}>
            <strong>Note:</strong> All specifications are subject to refinement during testing.
            Future iterations may have different dimensions or component choices.
          </div>
        </div>
      </section>

      {/* Development Roadmap & Timeline Section */}
      <section className={`section ${styles.roadmapSection}`} style={{ background: "rgba(15, 23, 23, 0.8)", padding: "var(--spacing-3xl) 0" }}>
        <div className="container">
          <h2 style={{ textAlign: "center", marginBottom: "var(--spacing-sm)" }}>Development Roadmap</h2>
          <p className={styles.sectionNote} style={{ textAlign: "center", marginBottom: "var(--spacing-2xl)" }}>
            Idea → Prototype → Testing → Validation → Product Development → Pilot → Commercialization → Scale
          </p>

          {/* Horizontal Overview Bar */}
          <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            maxWidth: "900px",
            margin: "0 auto var(--spacing-3xl) auto",
            position: "relative",
            padding: "0 var(--spacing-md)",
            flexWrap: "wrap",
            gap: "var(--spacing-md)"
          }}>
            {roadmapSteps.map((step, idx) => (
              <div key={idx} style={{ display: "flex", alignItems: "center", gap: "var(--spacing-md)" }}>
                <div style={{ textAlign: "center" }}>
                  <div style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "50%",
                    background: idx === 0 ? "var(--color-accent-green)" : "rgba(255, 255, 255, 0.1)",
                    border: "2px solid var(--color-accent-green)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: "bold",
                    color: idx === 0 ? "#121212" : "#fff",
                    margin: "0 auto var(--spacing-xs) auto"
                  }}>
                    {step.year}
                  </div>
                  <span style={{ fontSize: "0.85rem", color: "rgba(255, 255, 255, 0.8)", fontWeight: "600" }}>
                    {step.title}
                  </span>
                </div>
                {idx < roadmapSteps.length - 1 && (
                  <span style={{ fontSize: "1.2rem", color: "var(--color-accent-green)", opacity: 0.6 }}>→</span>
                )}
              </div>
            ))}
          </div>

          {/* Detailed Phase Cards */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "var(--spacing-xl)"
          }}>
            {phases.map((phase, index) => (
              <div key={index} style={{
                background: "rgba(26, 38, 38, 0.6)",
                border: "1px solid rgba(77, 184, 165, 0.25)",
                borderRadius: "var(--radius-lg)",
                padding: "var(--spacing-xl)",
                display: "flex",
                flexDirection: "column"
              }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "var(--spacing-md)" }}>
                  <span style={{ fontSize: "1.5rem" }}>{phase.status}</span>
                  <span style={{
                    padding: "4px 12px",
                    borderRadius: "20px",
                    background: "rgba(77, 184, 165, 0.15)",
                    border: "1px solid var(--color-accent-green)",
                    color: "var(--color-accent-green)",
                    fontWeight: "bold",
                    fontSize: "0.85rem"
                  }}>
                    {phase.year}
                  </span>
                </div>

                <h3 style={{ color: "var(--color-accent-green)", marginBottom: "var(--spacing-md)", fontSize: "1.2rem" }}>
                  {phase.phase}
                </h3>

                <ul style={{
                  listStyleType: "none",
                  padding: 0,
                  margin: 0,
                  fontSize: "0.9rem",
                  color: "rgba(255, 255, 255, 0.8)",
                  lineHeight: "1.6"
                }}>
                  {phase.items.map((item, itemIdx) => (
                    <li key={itemIdx} style={{ marginBottom: "var(--spacing-xs)", paddingLeft: "1.2rem", position: "relative" }}>
                      <span style={{ position: "absolute", left: 0, color: "var(--color-accent-green)" }}>•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className={`section ${styles.gallerySection}`}>
        <div className="container">
          <h2>Prototype Gallery & Media</h2>
          <p className={styles.sectionNote}>
            Explore photos, video demonstrations, and team interviews documenting our current ALGAIR prototype.
          </p>

          <div className={styles.galleryGrid} style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "var(--spacing-xl)",
            marginTop: "var(--spacing-xl)"
          }}>
            {galleryItems.map((item, index) => (
              <div key={index} className={styles.galleryItem} style={{
                background: "rgba(26, 38, 38, 0.5)",
                border: "1px solid rgba(77, 184, 165, 0.2)",
                borderRadius: "var(--radius-lg)",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column"
              }}>
                <div style={{ width: "100%", height: "220px", background: "#000", overflow: "hidden" }}>
                  {item.type === "image" ? (
                    <img
                      src={item.src}
                      alt={item.title}
                      style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                  ) : (
                    <video
                      controls
                      preload="metadata"
                      style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    >
                      <source src={item.src} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  )}
                </div>

                <div style={{ padding: "var(--spacing-lg)", flexGrow: 1 }}>
                  <h3 style={{ color: "var(--color-accent-green)", marginBottom: "var(--spacing-xs)", fontSize: "1.15rem" }}>
                    {item.title}
                  </h3>
                  <p style={{ fontSize: "0.9rem", color: "rgba(255, 255, 255, 0.75)", margin: 0, lineHeight: "1.5" }}>
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <p className={styles.galleryNote} style={{ marginTop: "var(--spacing-2xl)", textAlign: "center" }}>
            High-resolution assets, raw experimental footage, and component CAD files are available upon request for research collaborators.
          </p>
        </div>
      </section>

      <section className={`section section-dark ${styles.visionSection}`}>
        <div className="container">
          <h2>Prototype vs Vision</h2>

          <div className={styles.comparisonGrid}>
            <div className={styles.comparisonCard}>
              <h3>🟢 Current Prototype</h3>
              <ul>
                <li>Bench-scale laboratory model</li>
                <li>Passive + active cooling system</li>
                <li>Single algae chamber</li>
                <li>Manual monitoring and sampling</li>
                <li>Fixed to testing rig</li>
                <li>Research and validation focus</li>
                <li>Designed for controlled testing</li>
              </ul>
            </div>

            <div className={styles.arrow}>→</div>

            <div className={styles.comparisonCard}>
              <h3>🔵 Future Vision</h3>
              <ul>
                <li>Vehicle-integrated exhaust unit</li>
                <li>Compact, lightweight design</li>
                <li>Multiple modular chambers</li>
                <li>Real-time automated monitoring</li>
                <li>Direct vehicle mounting</li>
                <li>Commercial deployment ready</li>
                <li>Optimized for field conditions</li>
              </ul>
            </div>
          </div>

          <p className={styles.visionNote}>
            Our current prototype serves as a research platform to understand the biology and engineering
            required for exhaust treatment. Future versions will be designed for real-world deployment,
            but significant optimization and testing remain before that stage.
          </p>
        </div>
      </section>
    </div>
  );
}
