export default function TechnologyPage() {
  return (
    <div>
      <section className="section" style={{ background: "linear-gradient(135deg, rgba(26, 58, 58, 0.5) 0%, rgba(45, 95, 79, 0.3) 100%)" }}>
        <div className="container">
          <h1 style={{ marginBottom: "var(--spacing-lg)" }}>ALGAIR Technology</h1>
          <p style={{ fontSize: "1.25rem", color: "var(--color-accent-green)" }}>
            Deep dive into our biological-engineering approach
          </p>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container">
          <h2 style={{ textAlign: "center", marginBottom: "var(--spacing-2xl)" }}>
            Technical Architecture
          </h2>

          <div style={{
            background: "linear-gradient(135deg, rgba(26, 58, 58, 0.5) 0%, rgba(45, 95, 79, 0.3) 100%)",
            border: "1px solid rgba(77, 184, 165, 0.2)",
            borderRadius: "var(--radius-lg)",
            padding: "var(--spacing-2xl)",
            marginBottom: "var(--spacing-2xl)"
          }}>
            <svg
              viewBox="0 0 1000 300"
              xmlns="http://www.w3.org/2000/svg"
              style={{ width: "100%", height: "auto" }}
            >
              {/* Simplified architecture diagram */}
              <defs>
                <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                  <polygon points="0 0, 10 3, 0 6" fill="#4cb8a5" />
                </marker>
              </defs>

              {/* Intake */}
              <rect x="50" y="100" width="120" height="100" fill="none" stroke="#4cb8a5" strokeWidth="2" />
              <text x="110" y="155" textAnchor="middle" fill="#4cb8a5" fontSize="14">
                Intake &amp;
              </text>
              <text x="110" y="175" textAnchor="middle" fill="#4cb8a5" fontSize="14">
                Filter
              </text>

              {/* Arrow */}
              <path d="M 180 150 L 220 150" stroke="#4cb8a5" strokeWidth="2" fill="none" markerEnd="url(#arrowhead)" />

              {/* Cooling */}
              <rect x="240" y="100" width="120" height="100" fill="none" stroke="#4cb8a5" strokeWidth="2" />
              <text x="300" y="155" textAnchor="middle" fill="#4cb8a5" fontSize="14">
                Cooling &amp;
              </text>
              <text x="300" y="175" textAnchor="middle" fill="#4cb8a5" fontSize="14">
                HX
              </text>

              {/* Arrow */}
              <path d="M 370 150 L 410 150" stroke="#4cb8a5" strokeWidth="2" fill="none" markerEnd="url(#arrowhead)" />

              {/* Bio Chamber */}
              <circle cx="490" cy="150" r="60" fill="none" stroke="#3a8a73" strokeWidth="2" />
              <text x="490" y="145" textAnchor="middle" fill="#3a8a73" fontSize="14">
                Algae
              </text>
              <text x="490" y="165" textAnchor="middle" fill="#3a8a73" fontSize="14">
                Chamber
              </text>

              {/* Arrow */}
              <path d="M 560 150 L 600 150" stroke="#4cb8a5" strokeWidth="2" fill="none" markerEnd="url(#arrowhead)" />

              {/* Final Filter */}
              <rect x="620" y="100" width="120" height="100" fill="none" stroke="#4cb8a5" strokeWidth="2" />
              <text x="680" y="145" textAnchor="middle" fill="#4cb8a5" fontSize="14">
                Final
              </text>
              <text x="680" y="165" textAnchor="middle" fill="#4cb8a5" fontSize="14">
                Filter
              </text>

              {/* Arrow */}
              <path d="M 750 150 L 790 150" stroke="#4cb8a5" strokeWidth="2" fill="none" markerEnd="url(#arrowhead)" />

              {/* Outlet */}
              <rect x="810" y="100" width="120" height="100" fill="none" stroke="#5dd4b4" strokeWidth="2" />
              <text x="870" y="155" textAnchor="middle" fill="#5dd4b4" fontSize="14">
                Monitored
              </text>
              <text x="870" y="175" textAnchor="middle" fill="#5dd4b4" fontSize="14">
                Outlet
              </text>
            </svg>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "var(--spacing-lg)" }}>
            <div style={{
              background: "rgba(77, 184, 165, 0.05)",
              border: "1px solid rgba(77, 184, 165, 0.2)",
              borderRadius: "var(--radius-lg)",
              padding: "var(--spacing-lg)"
            }}>
              <h3 style={{ color: "var(--color-accent-green)", marginBottom: "var(--spacing-md)" }}>
                Stage 1: Intake & Filtration
              </h3>
              <p>
                Raw exhaust enters at high temperature (~500°C). Initial particle filter (HEPA-grade)
                removes large particulates &gt;10 microns, protecting downstream components.
              </p>
              <p style={{ fontSize: "0.9rem", color: "rgba(255, 255, 255, 0.6)", marginTop: "var(--spacing-md)" }}>
                <strong>Status:</strong> 🟢 VERIFIED - Filtration efficiency -&gt;99
              </p>
            </div>

            <div style={{
              background: "rgba(77, 184, 165, 0.05)",
              border: "1px solid rgba(77, 184, 165, 0.2)",
              borderRadius: "var(--radius-lg)",
              padding: "var(--spacing-lg)"
            }}>
              <h3 style={{ color: "var(--color-accent-green)", marginBottom: "var(--spacing-md)" }}>
                Stage 2: Cooling & Heat Exchange
              </h3>
              <p>
                Copper heat exchanger with metallic fins reduces temperature from ~250°C to &gt;30°C.
                Passive cooling + active circulation ensures safe temperature for biological component.
              </p>
              <p style={{ fontSize: "0.9rem", color: "rgba(255, 255, 255, 0.6)", marginTop: "var(--spacing-md)" }}>
                <strong>Status:</strong> 🟡 TESTING - Optimizing efficiency for continuous operation
              </p>
            </div>

            <div style={{
              background: "rgba(77, 184, 165, 0.05)",
              border: "1px solid rgba(77, 184, 165, 0.2)",
              borderRadius: "var(--radius-lg)",
              padding: "var(--spacing-lg)"
            }}>
              <h3 style={{ color: "var(--color-accent-green)", marginBottom: "var(--spacing-md)" }}>
                Stage 3: Bio-Chamber
              </h3>
              <p>
                Core of ALGAIR. Conditioned gas meets algae culture (Chlorella) in water medium.
                Photosynthetic organisms consume CO₂. Gas-liquid contact maximizes interaction.
              </p>
              <p style={{ fontSize: "0.9rem", color: "rgba(255, 255, 255, 0.6)", marginTop: "var(--spacing-md)" }}>
                <strong>Status:</strong> 🟡 TESTING - Measuring CO₂ reduction rates and algae response
              </p>
            </div>

            <div style={{
              background: "rgba(77, 184, 165, 0.05)",
              border: "1px solid rgba(77, 184, 165, 0.2)",
              borderRadius: "var(--radius-lg)",
              padding: "var(--spacing-lg)"
            }}>
              <h3 style={{ color: "var(--color-accent-green)", marginBottom: "var(--spacing-md)" }}>
                Stage 4: Final Filtration
              </h3>
              <p>
                Removes algae cells and water droplets before final outlet. Protects vehicle's
                exhaust system from biological contamination.
              </p>
              <p style={{ fontSize: "0.9rem", color: "rgba(255, 255, 255, 0.6)", marginTop: "var(--spacing-md)" }}>
                <strong>Status:</strong> 🟢 VERIFIED -&gt; 99% cell separation
              </p>
            </div>

            <div style={{
              background: "rgba(77, 184, 165, 0.05)",
              border: "1px solid rgba(77, 184, 165, 0.2)",
              borderRadius: "var(--radius-lg)",
              padding: "var(--spacing-lg)"
            }}>
              <h3 style={{ color: "var(--color-accent-green)", marginBottom: "var(--spacing-md)" }}>
                Monitoring System
              </h3>
              <p>
                Multi-sensor array measures temperature (inlet/outlet), CO₂ concentration,
                O₂ levels, flow rate, pH, and light intensity. Real-time data logging.
              </p>
              <p style={{ fontSize: "0.9rem", color: "rgba(255, 255, 255, 0.6)", marginTop: "var(--spacing-md)" }}>
                <strong>Status:</strong> 🟢 VERIFIED - Data collection system operational
              </p>
            </div>

            <div style={{
              background: "rgba(77, 184, 165, 0.05)",
              border: "1px solid rgba(77, 184, 165, 0.2)",
              borderRadius: "var(--radius-lg)",
              padding: "var(--spacing-lg)"
            }}>
              <h3 style={{ color: "var(--color-accent-green)", marginBottom: "var(--spacing-md)" }}>
                Photosynthesis Engine
              </h3>
              <p>
                LED array (650nm wavelength) drives photosynthesis in algae.
                Optimized spectrum for Chlorella growth and CO₂ fixation.
              </p>
              <p style={{ fontSize: "0.9rem", color: "rgba(255, 255, 255, 0.6)", marginTop: "var(--spacing-md)" }}>
                <strong>Status:</strong> 🟢 VERIFIED - LED array operational and tuned
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-accent">
        <div className="container">
          <h2 style={{ textAlign: "center", marginBottom: "var(--spacing-2xl)" }}>
            Research Parameters
          </h2>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "var(--spacing-lg)"
          }}>
            {[
              { param: "Temperature", range: "250-30°C", status: "🟢 VERIFIED" },
            ].map((item, idx) => (
              <div key={idx} style={{
                background: "rgba(26, 26, 26, 0.5)",
                border: "1px solid rgba(77, 184, 165, 0.2)",
                borderRadius: "var(--radius-lg)",
                padding: "var(--spacing-lg)"
              }}>
                <h4 style={{ color: "var(--color-accent-green)", marginBottom: "var(--spacing-sm)" }}>
                  {item.param}
                </h4>
                <p style={{ fontSize: "0.95rem", marginBottom: "var(--spacing-md)" }}>
                  {item.range}
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
        </div>
      </section>
    </div>
  );
}
