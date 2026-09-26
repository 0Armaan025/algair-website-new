export default function ResearchPage() {
  return (
    <div>
      <section className="section" style={{ background: "linear-gradient(135deg, rgba(26, 58, 58, 0.5) 0%, rgba(45, 95, 79, 0.3) 100%)" }}>
        <div className="container">
          <h1 style={{ marginBottom: "var(--spacing-lg)" }}>Research & Experiments</h1>
          <p style={{ fontSize: "1.25rem", color: "var(--color-accent-green)" }}>
            Data-driven development of ALGAIR technology
          </p>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container">
          <h2 style={{ textAlign: "center", marginBottom: "var(--spacing-2xl)" }}>
            Live Results Dashboard
          </h2>

          <p style={{
            textAlign: "center",
            color: "rgba(255, 255, 255, 0.7)",
            marginBottom: "var(--spacing-2xl)",
            maxWidth: "700px",
            margin: "0 auto var(--spacing-2xl)"
          }}>
            Real-time measurements from our prototype testing. We show only actual experimental data.
            Measurements marked <span style={{ color: "var(--color-accent-green)" }}>🟢 VERIFIED</span> have
            been validated. Ongoing tests marked <span style={{ color: "#ffc107" }}>🟡 TESTING</span>.
          </p>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "var(--spacing-lg)",
            marginBottom: "var(--spacing-3xl)"
          }}>
            {[
              { title: "Temperature Reduction", before: "250°C", after: "30°C", status: "🟢 VERIFIED", desc: "Inlet to outlet temperature drop" },
            ].map((item, idx) => (
              <div key={idx} style={{
                background: "linear-gradient(135deg, rgba(77, 184, 165, 0.05) 0%, rgba(45, 95, 79, 0.05) 100%)",
                border: "1px solid rgba(77, 184, 165, 0.2)",
                borderRadius: "var(--radius-lg)",
                padding: "var(--spacing-lg)",
                transition: "all var(--transition-base)"
              }}>
                <h3 style={{ color: "var(--color-accent-green)", marginBottom: "var(--spacing-md)" }}>
                  {item.title}
                </h3>
                {item.before ? (
                  <div style={{ marginBottom: "var(--spacing-md)" }}>
                    <p style={{ fontSize: "0.9rem", color: "rgba(255, 255, 255, 0.6)" }}>Before: {item.before}</p>
                    <p style={{ fontSize: "0.9rem", color: "rgba(255, 255, 255, 0.6)" }}>After: {item.after}</p>
                  </div>
                ) : (
                  <></>
                )}
                <p style={{ fontSize: "0.85rem", color: "rgba(255, 255, 255, 0.5)", marginBottom: "var(--spacing-md)" }}>
                  {item.desc}
                </p>
                <span style={{
                  display: "inline-block",
                  padding: "4px 12px",
                  background: item.status.includes("VERIFIED") ? "rgba(77, 184, 165, 0.2)" : "rgba(255, 193, 7, 0.2)",
                  color: item.status.includes("VERIFIED") ? "var(--color-accent-green)" : "#ffc107",
                  borderRadius: "var(--radius-md)",
                  fontSize: "0.75rem",
                  fontWeight: "600"
                }}>
                  {item.status}
                </span>
              </div>
            ))}
          </div>

          <div style={{
            background: "rgba(255, 193, 7, 0.05)",
            border: "1px solid rgba(255, 193, 7, 0.2)",
            borderRadius: "var(--radius-lg)",
            padding: "var(--spacing-lg)",
            marginBottom: "var(--spacing-2xl)"
          }}>
            <p style={{ margin: 0 }}>
              <strong style={{ color: "rgba(255, 193, 7, 0.8)" }}>Last Updated:</strong> Testing in progress (September 2026).
              New measurement batches added weekly. Full dataset available to research partners.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-accent">
        <div className="container">
          <h2 style={{ textAlign: "center", marginBottom: "var(--spacing-2xl)" }}>
            Research Focus Areas
          </h2>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "var(--spacing-lg)"
          }}>
            <div style={{
              background: "rgba(26, 26, 26, 0.5)",
              borderLeft: "3px solid var(--color-accent-green)",
              borderRadius: "var(--radius-md)",
              padding: "var(--spacing-lg)"
            }}>
              <h3 style={{ color: "var(--color-accent-green)", marginBottom: "var(--spacing-md)" }}>
                🌱 Biology
              </h3>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                <li style={{ marginBottom: "0.5rem" }}>Algae strain optimization</li>
                <li style={{ marginBottom: "0.5rem" }}>CO₂ fixation rates</li>
                <li style={{ marginBottom: "0.5rem" }}>Gas toxicity thresholds</li>
                <li>Cultivation and harvesting methods</li>
              </ul>
            </div>

            <div style={{
              background: "rgba(26, 26, 26, 0.5)",
              borderLeft: "3px solid var(--color-accent-green)",
              borderRadius: "var(--radius-md)",
              padding: "var(--spacing-lg)"
            }}>
              <h3 style={{ color: "var(--color-accent-green)", marginBottom: "var(--spacing-md)" }}>
                ⚙️ Engineering
              </h3>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                <li style={{ marginBottom: "0.5rem" }}>Heat exchange efficiency</li>
                <li style={{ marginBottom: "0.5rem" }}>Gas distribution optimization</li>
                <li style={{ marginBottom: "0.5rem" }}>Fouling prevention</li>
                <li>System scalability</li>
              </ul>
            </div>

            <div style={{
              background: "rgba(26, 26, 26, 0.5)",
              borderLeft: "3px solid var(--color-accent-green)",
              borderRadius: "var(--radius-md)",
              padding: "var(--spacing-lg)"
            }}>
              <h3 style={{ color: "var(--color-accent-green)", marginBottom: "var(--spacing-md)" }}>
                📊 Data
              </h3>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                <li style={{ marginBottom: "0.5rem" }}>Real-time monitoring systems</li>
                <li style={{ marginBottom: "0.5rem" }}>Statistical analysis of results</li>
                <li style={{ marginBottom: "0.5rem" }}>Long-term trend tracking</li>
                <li>Comparative benchmarking</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container">
          <h2 style={{ textAlign: "center", marginBottom: "var(--spacing-2xl)" }}>
            Roadmap
          </h2>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "var(--spacing-lg)"
          }}>
            {[
              { phase: "1", title: "Prototype", status: "🟢 COMPLETE", desc: "Lab-scale prototype built and tested" },
              { phase: "2", title: "Controlled Testing", status: "🟡 ACTIVE", desc: "Systematic testing in progress" },
              { phase: "3", title: "Optimization", status: "🟡 ACTIVE", desc: "Parameter refinement ongoing" },
              { phase: "4", title: "Vehicle Testing", status: "🔵 PLANNED", desc: "Integration testing preparation" },
              { phase: "5", title: "Scaling", status: "🔵 FUTURE", desc: "Production-scale development" },
            ].map((item, idx) => (
              <div key={idx} style={{
                background: "linear-gradient(135deg, rgba(77, 184, 165, 0.05) 0%, rgba(45, 95, 79, 0.05) 100%)",
                border: "1px solid rgba(77, 184, 165, 0.2)",
                borderRadius: "var(--radius-lg)",
                padding: "var(--spacing-lg)",
                textAlign: "center"
              }}>
                <div style={{
                  width: "40px",
                  height: "40px",
                  margin: "0 auto var(--spacing-md)",
                  background: "linear-gradient(135deg, var(--color-bright-algae), var(--color-accent-green))",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--color-dark-bg)",
                  fontWeight: "700",
                  fontSize: "1.25rem"
                }}>
                  {item.phase}
                </div>
                <h3 style={{ color: "var(--color-accent-green)", marginBottom: "var(--spacing-md)" }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: "0.85rem", marginBottom: "var(--spacing-md)" }}>
                  {item.desc}
                </p>
                <span style={{
                  display: "inline-block",
                  padding: "4px 12px",
                  background: item.status.includes("COMPLETE") ? "rgba(77, 184, 165, 0.2)" :
                    item.status.includes("ACTIVE") ? "rgba(255, 193, 7, 0.2)" : "rgba(59, 130, 246, 0.2)",
                  color: item.status.includes("COMPLETE") ? "var(--color-accent-green)" :
                    item.status.includes("ACTIVE") ? "#ffc107" : "#3b82f6",
                  borderRadius: "var(--radius-md)",
                  fontSize: "0.75rem",
                  fontWeight: "600"
                }}>
                  {item.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
