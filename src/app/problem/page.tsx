export default function ProblemPage() {
  return (
    <div>
      <section className="section" style={{ background: "linear-gradient(135deg, rgba(26, 58, 58, 0.5) 0%, rgba(45, 95, 79, 0.3) 100%)" }}>
        <div className="container">
          <h1 style={{ marginBottom: "var(--spacing-lg)" }}>The Problem</h1>
          <p style={{ fontSize: "1.25rem", color: "var(--color-accent-green)" }}>
            Understanding the emissions challenge we're working to solve
          </p>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container">
          <h2 style={{ textAlign: "center", marginBottom: "var(--spacing-2xl)" }}>
            Vehicle Emissions Impact
          </h2>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "var(--spacing-lg)",
            marginBottom: "var(--spacing-3xl)"
          }}>
            <div style={{
              background: "linear-gradient(135deg, rgba(77, 184, 165, 0.05) 0%, rgba(45, 95, 79, 0.05) 100%)",
              border: "1px solid rgba(77, 184, 165, 0.2)",
              borderRadius: "var(--radius-lg)",
              padding: "var(--spacing-lg)",
              textAlign: "center"
            }}>
              <div style={{ fontSize: "2rem", marginBottom: "var(--spacing-md)" }}>🚗</div>
              <h3 style={{ color: "var(--color-accent-green)", marginBottom: "var(--spacing-md)" }}>
                ~1.2 Billion Vehicles
              </h3>
              <p>Currently operating globally, with numbers rising steadily</p>
            </div>

            <div style={{
              background: "linear-gradient(135deg, rgba(77, 184, 165, 0.05) 0%, rgba(45, 95, 79, 0.05) 100%)",
              border: "1px solid rgba(77, 184, 165, 0.2)",
              borderRadius: "var(--radius-lg)",
              padding: "var(--spacing-lg)",
              textAlign: "center"
            }}>
              <div style={{ fontSize: "2rem", marginBottom: "var(--spacing-md)" }}>💨</div>
              <h3 style={{ color: "var(--color-accent-green)", marginBottom: "var(--spacing-md)" }}>
                27% of CO₂ Emissions
              </h3>
              <p>Transportation accounts for over one-quarter of global emissions</p>
            </div>

            <div style={{
              background: "linear-gradient(135deg, rgba(77, 184, 165, 0.05) 0%, rgba(45, 95, 79, 0.05) 100%)",
              border: "1px solid rgba(77, 184, 165, 0.2)",
              borderRadius: "var(--radius-lg)",
              padding: "var(--spacing-lg)",
              textAlign: "center"
            }}>
              <div style={{ fontSize: "2rem", marginBottom: "var(--spacing-md)" }}>🫁</div>
              <h3 style={{ color: "var(--color-accent-green)", marginBottom: "var(--spacing-md)" }}>
                ~7 Million Deaths
              </h3>
              <p>Annual deaths attributable to air pollution (WHO estimate)</p>
            </div>
          </div>

          <h2 style={{ textAlign: "center", marginBottom: "var(--spacing-2xl)" }}>
            What's in Vehicle Exhaust?
          </h2>

          <div style={{
            background: "rgba(26, 58, 58, 0.4)",
            border: "1px solid rgba(77, 184, 165, 0.1)",
            borderRadius: "var(--radius-lg)",
            padding: "var(--spacing-2xl)"
          }}>
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "var(--spacing-lg)"
            }}>
              <div style={{
                background: "rgba(26, 26, 26, 0.5)",
                borderLeft: "3px solid #e74c3c",
                borderRadius: "var(--radius-md)",
                padding: "var(--spacing-lg)"
              }}>
                <h3 style={{ color: "#e74c3c", marginBottom: "var(--spacing-md)" }}>
                  Carbon Dioxide (CO₂)
                </h3>
                <p style={{ marginBottom: "var(--spacing-md)" }}>
                  Primary greenhouse gas. ~120g per liter of fuel burned.
                </p>
                <p style={{ fontSize: "0.9rem", color: "rgba(255, 255, 255, 0.6)" }}>
                  Primary contributor to climate change
                </p>
              </div>

              <div style={{
                background: "rgba(26, 26, 26, 0.5)",
                borderLeft: "3px solid #f39c12",
                borderRadius: "var(--radius-md)",
                padding: "var(--spacing-lg)"
              }}>
                <h3 style={{ color: "#f39c12", marginBottom: "var(--spacing-md)" }}>
                  Nitrogen Oxides (NOx)
                </h3>
                <p style={{ marginBottom: "var(--spacing-md)" }}>
                  Formed from high-temperature combustion. Health hazard in urban areas.
                </p>
                <p style={{ fontSize: "0.9rem", color: "rgba(255, 255, 255, 0.6)" }}>
                  Contributes to respiratory disease and smog
                </p>
              </div>

              <div style={{
                background: "rgba(26, 26, 26, 0.5)",
                borderLeft: "3px solid #3498db",
                borderRadius: "var(--radius-md)",
                padding: "var(--spacing-lg)"
              }}>
                <h3 style={{ color: "#3498db", marginBottom: "var(--spacing-md)" }}>
                  Particulate Matter (PM)
                </h3>
                <p style={{ marginBottom: "var(--spacing-md)" }}>
                  Microscopic particles from incomplete combustion and wear.
                </p>
                <p style={{ fontSize: "0.9rem", color: "rgba(255, 255, 255, 0.6)" }}>
                  PM2.5 penetrates deep into lungs
                </p>
              </div>

              <div style={{
                background: "rgba(26, 26, 26, 0.5)",
                borderLeft: "3px solid #9b59b6",
                borderRadius: "var(--radius-md)",
                padding: "var(--spacing-lg)"
              }}>
                <h3 style={{ color: "#9b59b6", marginBottom: "var(--spacing-md)" }}>
                  Volatile Organic Compounds (VOCs)
                </h3>
                <p style={{ marginBottom: "var(--spacing-md)" }}>
                  Unburned fuel molecules that form ground-level ozone.
                </p>
                <p style={{ fontSize: "0.9rem", color: "rgba(255, 255, 255, 0.6)" }}>
                  Secondary pollutant hazard
                </p>
              </div>

              <div style={{
                background: "rgba(26, 26, 26, 0.5)",
                borderLeft: "3px solid #1abc9c",
                borderRadius: "var(--radius-md)",
                padding: "var(--spacing-lg)"
              }}>
                <h3 style={{ color: "#1abc9c", marginBottom: "var(--spacing-md)" }}>
                  Sulfur Dioxide (SO₂)
                </h3>
                <p style={{ marginBottom: "var(--spacing-md)" }}>
                  From sulfur in fuel. Forms acid rain when oxidized.
                </p>
                <p style={{ fontSize: "0.9rem", color: "rgba(255, 255, 255, 0.6)" }}>
                  Respiratory hazard and acid rain contributor
                </p>
              </div>

              <div style={{
                background: "rgba(26, 26, 26, 0.5)",
                borderLeft: "3px solid #e67e22",
                borderRadius: "var(--radius-md)",
                padding: "var(--spacing-lg)"
              }}>
                <h3 style={{ color: "#e67e22", marginBottom: "var(--spacing-md)" }}>
                  Water Vapor & Heat
                </h3>
                <p style={{ marginBottom: "var(--spacing-md)" }}>
                  Exhaust contains condensed water droplets at high temperature.
                </p>
                <p style={{ fontSize: "0.9rem", color: "rgba(255, 255, 255, 0.6)" }}>
                  Forms visible plumes, carries pollutants upward
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-accent">
        <div className="container">
          <h2 style={{ textAlign: "center", marginBottom: "var(--spacing-2xl)" }}>
            Current Solutions & Their Limits
          </h2>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "var(--spacing-lg)"
          }}>
            <div style={{
              background: "rgba(26, 26, 26, 0.5)",
              borderRadius: "var(--radius-lg)",
              padding: "var(--spacing-lg)"
            }}>
              <h3 style={{ color: "var(--color-accent-green)", marginBottom: "var(--spacing-md)" }}>
                ⚗️ Catalytic Converters
              </h3>
              <p>Chemically transform some pollutants into less harmful substances</p>
              <h4 style={{ marginTop: "var(--spacing-lg)", marginBottom: "var(--spacing-sm)", fontSize: "0.95rem" }}>
                Limitations:
              </h4>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                <li style={{ marginBottom: "0.5rem", paddingLeft: "1.25rem", position: "relative" }}>
                  <span style={{ position: "absolute", left: 0 }}>✗</span>
                  Don't capture CO₂—only convert NOx and particulates
                </li>
                <li style={{ marginBottom: "0.5rem", paddingLeft: "1.25rem", position: "relative" }}>
                  <span style={{ position: "absolute", left: 0 }}>✗</span>
                  Degrade over time
                </li>
                <li style={{ paddingLeft: "1.25rem", position: "relative" }}>
                  <span style={{ position: "absolute", left: 0 }}>✗</span>
                  Expensive heavy metals (platinum, palladium)
                </li>
              </ul>
            </div>

            <div style={{
              background: "rgba(26, 26, 26, 0.5)",
              borderRadius: "var(--radius-lg)",
              padding: "var(--spacing-lg)"
            }}>
              <h3 style={{ color: "var(--color-accent-green)", marginBottom: "var(--spacing-md)" }}>
                ⚡ Electric Vehicles
              </h3>
              <p>Shift emissions from tailpipe to power grid</p>
              <h4 style={{ marginTop: "var(--spacing-lg)", marginBottom: "var(--spacing-sm)", fontSize: "0.95rem" }}>
                Limitations:
              </h4>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                <li style={{ marginBottom: "0.5rem", paddingLeft: "1.25rem", position: "relative" }}>
                  <span style={{ position: "absolute", left: 0 }}>✗</span>
                  Decades needed for full fleet conversion
                </li>
                <li style={{ marginBottom: "0.5rem", paddingLeft: "1.25rem", position: "relative" }}>
                  <span style={{ position: "absolute", left: 0 }}>✗</span>
                  Battery production environmental cost
                </li>
                <li style={{ paddingLeft: "1.25rem", position: "relative" }}>
                  <span style={{ position: "absolute", left: 0 }}>✗</span>
                  Doesn't help existing vehicle fleet
                </li>
              </ul>
            </div>

            <div style={{
              background: "rgba(26, 26, 26, 0.5)",
              borderRadius: "var(--radius-lg)",
              padding: "var(--spacing-lg)"
            }}>
              <h3 style={{ color: "var(--color-accent-green)", marginBottom: "var(--spacing-md)" }}>
                🌍 Atmospheric Carbon Capture
              </h3>
              <p>Remove CO₂ directly from the air after dispersion</p>
              <h4 style={{ marginTop: "var(--spacing-lg)", marginBottom: "var(--spacing-sm)", fontSize: "0.95rem" }}>
                Limitations:
              </h4>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                <li style={{ marginBottom: "0.5rem", paddingLeft: "1.25rem", position: "relative" }}>
                  <span style={{ position: "absolute", left: 0 }}>✗</span>
                  Highly energy-intensive process
                </li>
                <li style={{ marginBottom: "0.5rem", paddingLeft: "1.25rem", position: "relative" }}>
                  <span style={{ position: "absolute", left: 0 }}>✗</span>
                  Requires massive infrastructure
                </li>
                <li style={{ paddingLeft: "1.25rem", position: "relative" }}>
                  <span style={{ position: "absolute", left: 0 }}>✗</span>
                  Expensive at scale
                </li>
              </ul>
            </div>
          </div>

          <p style={{
            textAlign: "center",
            marginTop: "var(--spacing-2xl)",
            padding: "var(--spacing-lg)",
            background: "rgba(255, 193, 7, 0.05)",
            border: "1px solid rgba(255, 193, 7, 0.2)",
            borderRadius: "var(--radius-lg)",
            fontSize: "0.95rem"
          }}>
            <strong>The Gap:</strong> No current solution captures emissions at the vehicle level 
            while the transition to electric transport occurs. ALGAIR is designed to fill this gap 
            during the regulatory transition period.
          </p>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container">
          <h2 style={{ textAlign: "center", marginBottom: "var(--spacing-2xl)" }}>
            Why ALGAIR Matters
          </h2>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "var(--spacing-lg)"
          }}>
            <div style={{
              background: "linear-gradient(135deg, rgba(77, 184, 165, 0.1) 0%, rgba(45, 95, 79, 0.1) 100%)",
              border: "2px solid rgba(77, 184, 165, 0.2)",
              borderRadius: "var(--radius-lg)",
              padding: "var(--spacing-lg)",
              textAlign: "center"
            }}>
              <div style={{ fontSize: "2.5rem", marginBottom: "var(--spacing-md)" }}>📍</div>
              <h3 style={{ color: "var(--color-accent-green)", marginBottom: "var(--spacing-md)" }}>
                Capture at Source
              </h3>
              <p>
                Emissions are handled where they're generated—at the vehicle's exhaust—not after dispersal into the atmosphere.
              </p>
            </div>

            <div style={{
              background: "linear-gradient(135deg, rgba(77, 184, 165, 0.1) 0%, rgba(45, 95, 79, 0.1) 100%)",
              border: "2px solid rgba(77, 184, 165, 0.2)",
              borderRadius: "var(--radius-lg)",
              padding: "var(--spacing-lg)",
              textAlign: "center"
            }}>
              <div style={{ fontSize: "2.5rem", marginBottom: "var(--spacing-md)" }}>🔄</div>
              <h3 style={{ color: "var(--color-accent-green)", marginBottom: "var(--spacing-md)" }}>
                Renewable Solution
              </h3>
              <p>
                Living algae regenerates and responds to its environment, providing an active and renewable approach.
              </p>
            </div>

            <div style={{
              background: "linear-gradient(135deg, rgba(77, 184, 165, 0.1) 0%, rgba(45, 95, 79, 0.1) 100%)",
              border: "2px solid rgba(77, 184, 165, 0.2)",
              borderRadius: "var(--radius-lg)",
              padding: "var(--spacing-lg)",
              textAlign: "center"
            }}>
              <div style={{ fontSize: "2.5rem", marginBottom: "var(--spacing-md)" }}>🚗</div>
              <h3 style={{ color: "var(--color-accent-green)", marginBottom: "var(--spacing-md)" }}>
                Vehicle-Level Impact
              </h3>
              <p>
                Works on existing vehicles without waiting for fleet-wide transitions or infrastructure changes.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
