export default function ImpactPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="section" style={{ background: "linear-gradient(135deg, rgba(26, 58, 58, 0.5) 0%, rgba(45, 95, 79, 0.3) 100%)" }}>
        <div className="container">
          <h1 style={{ marginBottom: "var(--spacing-lg)" }}>Impact & Market</h1>
          <p style={{ fontSize: "1.25rem", color: "var(--color-accent-green)" }}>
            The potential of biological emission capture at scale
          </p>
        </div>
      </section>

      {/* Why ALGAIR Section */}
      <section className="section section-dark">
        <div className="container">
          <h2 style={{ textAlign: "center", marginBottom: "var(--spacing-2xl)" }}>
            Why ALGAIR?
          </h2>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "var(--spacing-lg)",
            marginBottom: "var(--spacing-3xl)"
          }}>
            <div style={{
              background: "linear-gradient(135deg, rgba(77, 184, 165, 0.05) 0%, rgba(45, 95, 79, 0.05) 100%)",
              border: "1px solid rgba(77, 184, 165, 0.2)",
              borderRadius: "var(--radius-lg)",
              padding: "var(--spacing-lg)"
            }}>
              <h3 style={{ color: "var(--color-accent-green)", marginBottom: "var(--spacing-md)" }}>
                🎯 At the Source
              </h3>
              <p>
                Traditional solutions focus on grid-level or atmospheric capture.
                We capture where emissions are generated—directly at the vehicle exhaust.
              </p>
            </div>

            <div style={{
              background: "linear-gradient(135deg, rgba(77, 184, 165, 0.05) 0%, rgba(45, 95, 79, 0.05) 100%)",
              border: "1px solid rgba(77, 184, 165, 0.2)",
              borderRadius: "var(--radius-lg)",
              padding: "var(--spacing-lg)"
            }}>
              <h3 style={{ color: "var(--color-accent-green)", marginBottom: "var(--spacing-md)" }}>
                🌱 Biological Approach
              </h3>
              <p>
                Living systems adapt and respond. Algae doesn't just filter—it actively consumes CO₂
                and regenerates, making it a renewable solution.
              </p>
            </div>

            <div style={{
              background: "linear-gradient(135deg, rgba(77, 184, 165, 0.05) 0%, rgba(45, 95, 79, 0.05) 100%)",
              border: "1px solid rgba(77, 184, 165, 0.2)",
              borderRadius: "var(--radius-lg)",
              padding: "var(--spacing-lg)"
            }}>
              <h3 style={{ color: "var(--color-accent-green)", marginBottom: "var(--spacing-md)" }}>
                ⚙️ Modular Design
              </h3>
              <p>
                Our system can be retrofitted to existing vehicles or integrated into new designs.
                Modular components allow scaling from personal vehicles to commercial fleets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Business Model Section */}
      <section className="section section-accent">
        <div className="container">
          <h2 style={{ textAlign: "center", marginBottom: "var(--spacing-md)" }}>
            Business Model & Unit Economics
          </h2>
          <p style={{
            textAlign: "center",
            color: "rgba(255, 255, 255, 0.8)",
            maxWidth: "800px",
            margin: "0 auto var(--spacing-2xl)",
            lineHeight: "1.6"
          }}>
            ALGAIR is designed around an affordable hardware-plus-service business model. With an estimated manufacturing cost of ₹5,000 and a target selling price of ₹8,000 per unit, ALGAIR generates a ₹3,000 contribution per unit before operating expenses. Additional revenue opportunities include installation, maintenance, replacement components, upgrades, and fleet service contracts.
          </p>

          {/* Unit Economics Highlight Cards */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "var(--spacing-lg)",
            marginBottom: "var(--spacing-2xl)"
          }}>
            <div style={{
              background: "rgba(26, 26, 26, 0.6)",
              border: "1px solid rgba(77, 184, 165, 0.3)",
              borderRadius: "var(--radius-lg)",
              padding: "var(--spacing-lg)",
              textAlign: "center"
            }}>
              <span style={{ fontSize: "0.9rem", color: "rgba(255, 255, 255, 0.6)", textTransform: "uppercase" }}>Mfg. Cost</span>
              <h3 style={{ color: "#fff", fontSize: "1.8rem", margin: "0.5rem 0 0" }}>₹5,000</h3>
            </div>

            <div style={{
              background: "rgba(26, 26, 26, 0.6)",
              border: "1px solid rgba(77, 184, 165, 0.3)",
              borderRadius: "var(--radius-lg)",
              padding: "var(--spacing-lg)",
              textAlign: "center"
            }}>
              <span style={{ fontSize: "0.9rem", color: "rgba(255, 255, 255, 0.6)", textTransform: "uppercase" }}>Selling Price</span>
              <h3 style={{ color: "var(--color-accent-green)", fontSize: "1.8rem", margin: "0.5rem 0 0" }}>₹8,000</h3>
            </div>

            <div style={{
              background: "rgba(26, 26, 26, 0.6)",
              border: "1px solid rgba(77, 184, 165, 0.3)",
              borderRadius: "var(--radius-lg)",
              padding: "var(--spacing-lg)",
              textAlign: "center"
            }}>
              <span style={{ fontSize: "0.9rem", color: "rgba(255, 255, 255, 0.6)", textTransform: "uppercase" }}>Contribution / Unit</span>
              <h3 style={{ color: "var(--color-accent-green)", fontSize: "1.8rem", margin: "0.5rem 0 0" }}>₹3,000</h3>
            </div>

            <div style={{
              background: "rgba(26, 26, 26, 0.6)",
              border: "1px solid rgba(77, 184, 165, 0.3)",
              borderRadius: "var(--radius-lg)",
              padding: "var(--spacing-lg)",
              textAlign: "center"
            }}>
              <span style={{ fontSize: "0.9rem", color: "rgba(255, 255, 255, 0.6)", textTransform: "uppercase" }}>Contribution Margin</span>
              <h3 style={{ color: "var(--color-accent-green)", fontSize: "1.8rem", margin: "0.5rem 0 0" }}>37.5%</h3>
            </div>
          </div>

          {/* Unit Economics Breakdown Table */}
          <div style={{
            background: "rgba(26, 26, 26, 0.5)",
            border: "1px solid rgba(77, 184, 165, 0.2)",
            borderRadius: "var(--radius-lg)",
            padding: "var(--spacing-lg)",
            marginBottom: "var(--spacing-2xl)",
            overflowX: "auto"
          }}>
            <h3 style={{ color: "var(--color-accent-green)", marginBottom: "var(--spacing-md)" }}>
              📈 Projected Sales Scale
            </h3>
            <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left", color: "rgba(255, 255, 255, 0.9)" }}>
              <thead>
                <tr style={{ borderBottom: "1px solid rgba(255, 255, 255, 0.2)" }}>
                  <th style={{ padding: "12px 8px" }}>Units Sold</th>
                  <th style={{ padding: "12px 8px" }}>Revenue</th>
                  <th style={{ padding: "12px 8px" }}>Product Cost</th>
                  <th style={{ padding: "12px 8px" }}>Contribution</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: "1px solid rgba(255, 255, 255, 0.05)" }}>
                  <td style={{ padding: "12px 8px" }}>100</td>
                  <td style={{ padding: "12px 8px" }}>₹8 Lakh</td>
                  <td style={{ padding: "12px 8px" }}>₹5 Lakh</td>
                  <td style={{ padding: "12px 8px", color: "var(--color-accent-green)" }}>₹3 Lakh</td>
                </tr>
                <tr style={{ borderBottom: "1px solid rgba(255, 255, 255, 0.05)" }}>
                  <td style={{ padding: "12px 8px" }}>500</td>
                  <td style={{ padding: "12px 8px" }}>₹40 Lakh</td>
                  <td style={{ padding: "12px 8px" }}>₹25 Lakh</td>
                  <td style={{ padding: "12px 8px", color: "var(--color-accent-green)" }}>₹15 Lakh</td>
                </tr>
                <tr style={{ borderBottom: "1px solid rgba(255, 255, 255, 0.05)" }}>
                  <td style={{ padding: "12px 8px" }}>1,000</td>
                  <td style={{ padding: "12px 8px" }}>₹80 Lakh</td>
                  <td style={{ padding: "12px 8px" }}>₹50 Lakh</td>
                  <td style={{ padding: "12px 8px", color: "var(--color-accent-green)" }}>₹30 Lakh</td>
                </tr>
                <tr>
                  <td style={{ padding: "12px 8px" }}>5,000</td>
                  <td style={{ padding: "12px 8px" }}>₹4 Crore</td>
                  <td style={{ padding: "12px 8px" }}>₹2.5 Crore</td>
                  <td style={{ padding: "12px 8px", color: "var(--color-accent-green)" }}>₹1.5 Crore</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Revenue Streams Grid */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "var(--spacing-lg)"
          }}>
            <div style={{
              background: "rgba(26, 26, 26, 0.5)",
              border: "1px solid rgba(77, 184, 165, 0.2)",
              borderRadius: "var(--radius-lg)",
              padding: "var(--spacing-lg)"
            }}>
              <h3 style={{ color: "var(--color-accent-green)", marginBottom: "var(--spacing-md)" }}>
                Hardware Sales
              </h3>
              <p style={{ margin: 0 }}>
                Direct unit sales and OEM integrations priced at ₹8,000, establishing the foundation of our hardware distribution.
              </p>
            </div>

            <div style={{
              background: "rgba(26, 26, 26, 0.5)",
              border: "1px solid rgba(77, 184, 165, 0.2)",
              borderRadius: "var(--radius-lg)",
              padding: "var(--spacing-lg)"
            }}>
              <h3 style={{ color: "var(--color-accent-green)", marginBottom: "var(--spacing-md)" }}>
                Recurring Services
              </h3>
              <p style={{ margin: 0 }}>
                Ongoing value through algae replenishment, system maintenance packages, filter replacements, and fleet analytics contracts.
              </p>
            </div>

            <div style={{
              background: "rgba(26, 26, 26, 0.5)",
              border: "1px solid rgba(77, 184, 165, 0.2)",
              borderRadius: "var(--radius-lg)",
              padding: "var(--spacing-lg)"
            }}>
              <h3 style={{ color: "var(--color-accent-green)", marginBottom: "var(--spacing-md)" }}>
                Licensing
              </h3>
              <p style={{ margin: 0 }}>
                B2B technology licensing partnerships with vehicle manufacturers and tier-1 component suppliers for pre-integrated production.
              </p>
            </div>
          </div>

          <div style={{
            marginTop: "var(--spacing-2xl)",
            padding: "var(--spacing-lg)",
            background: "rgba(255, 193, 7, 0.05)",
            border: "1px solid rgba(255, 193, 7, 0.2)",
            borderRadius: "var(--radius-lg)"
          }}>
            <p style={{ margin: 0, fontSize: "0.9rem" }}>
              <strong style={{ color: "rgba(255, 193, 7, 0.8)" }}>Financial Disclaimer:</strong>
              {" "}Figures are based on direct manufacturing and retail pricing estimations. Contribution figures represent gross unit contribution before accounting for operational overhead, installation, logistics, taxes, warranties, and marketing expenses.
            </p>
          </div>
        </div>
      </section>

      {/* Market Opportunities & Phased Expansion */}
      <section className="section section-dark">
        <div className="container">
          <h2 style={{ textAlign: "center", marginBottom: "var(--spacing-md)" }}>
            Market Opportunities
          </h2>
          <p style={{
            textAlign: "center",
            color: "rgba(255, 255, 255, 0.8)",
            marginBottom: "var(--spacing-2xl)",
            maxWidth: "750px",
            margin: "0 auto var(--spacing-2xl)",
            lineHeight: "1.6"
          }}>
            ALGAIR addresses a broad opportunity in emissions-related vehicle technology, beginning with commercial and fleet operators and potentially expanding to institutional fleets, individual commercial vehicles, and suitable stationary exhaust applications. Our initial strategy is to validate the technology through controlled testing and pilot deployments before expanding into larger markets.
          </p>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "var(--spacing-lg)",
            marginBottom: "var(--spacing-3xl)"
          }}>
            <div style={{
              background: "rgba(26, 26, 26, 0.5)",
              borderRadius: "var(--radius-lg)",
              padding: "var(--spacing-lg)"
            }}>
              <h3 style={{ color: "var(--color-accent-green)", marginBottom: "var(--spacing-md)" }}>
                1. 🚚 Commercial Fleets
              </h3>
              <p>
                <strong>Initial Target:</strong> Logistics, delivery, and private bus operators. B2B deployments allow higher unit sales per client while providing immediate compliance value.
              </p>
            </div>

            <div style={{
              background: "rgba(26, 26, 26, 0.5)",
              borderRadius: "var(--radius-lg)",
              padding: "var(--spacing-lg)"
            }}>
              <h3 style={{ color: "var(--color-accent-green)", marginBottom: "var(--spacing-md)" }}>
                2. 🚌 Institutional Fleets
              </h3>
              <p>
                <strong>Expansion Market:</strong> Public transport, city buses, and government-owned vehicle fleets seeking validated emissions-reduction pilot programs.
              </p>
            </div>

            <div style={{
              background: "rgba(26, 26, 26, 0.5)",
              borderRadius: "var(--radius-lg)",
              padding: "var(--spacing-lg)"
            }}>
              <h3 style={{ color: "var(--color-accent-green)", marginBottom: "var(--spacing-md)" }}>
                3. 🚛 Individual Operators
              </h3>
              <p>
                <strong>Wider Market:</strong> Independent truck, taxi, and small business commercial vehicle owners looking for cost-effective aftermarket solutions.
              </p>
            </div>

            <div style={{
              background: "rgba(26, 26, 26, 0.5)",
              borderRadius: "var(--radius-lg)",
              padding: "var(--spacing-lg)"
            }}>
              <h3 style={{ color: "var(--color-accent-green)", marginBottom: "var(--spacing-md)" }}>
                4. 🏭 Industrial Applications
              </h3>
              <p>
                <strong>Long-term Goal:</strong> Adapting the underlying bio-capture system for stationary exhaust sources like boilers, generators, and industrial units.
              </p>
            </div>
          </div>

          {/* Phased Roadmap Visualization */}
          <h3 style={{ textAlign: "center", marginBottom: "var(--spacing-lg)", color: "var(--color-accent-green)" }}>
            📊 Market Expansion Roadmap
          </h3>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: "var(--spacing-md)",
            textAlign: "center"
          }}>
            <div style={{ background: "rgba(77, 184, 165, 0.1)", border: "1px solid rgba(77, 184, 165, 0.3)", padding: "var(--spacing-md)", borderRadius: "var(--radius-md)" }}>
              <strong style={{ color: "var(--color-accent-green)", display: "block", marginBottom: "4px" }}>Phase 1</strong>
              <span style={{ fontSize: "0.95rem" }}>Commercial Fleets</span>
            </div>
            <div style={{ background: "rgba(77, 184, 165, 0.1)", border: "1px solid rgba(77, 184, 165, 0.3)", padding: "var(--spacing-md)", borderRadius: "var(--radius-md)" }}>
              <strong style={{ color: "var(--color-accent-green)", display: "block", marginBottom: "4px" }}>Phase 2</strong>
              <span style={{ fontSize: "0.95rem" }}>Public & Institutional Fleets</span>
            </div>
            <div style={{ background: "rgba(77, 184, 165, 0.1)", border: "1px solid rgba(77, 184, 165, 0.3)", padding: "var(--spacing-md)", borderRadius: "var(--radius-md)" }}>
              <strong style={{ color: "var(--color-accent-green)", display: "block", marginBottom: "4px" }}>Phase 3</strong>
              <span style={{ fontSize: "0.95rem" }}>Wider Commercial Vehicle Market</span>
            </div>
            <div style={{ background: "rgba(77, 184, 165, 0.1)", border: "1px solid rgba(77, 184, 165, 0.3)", padding: "var(--spacing-md)", borderRadius: "var(--radius-md)" }}>
              <strong style={{ color: "var(--color-accent-green)", display: "block", marginBottom: "4px" }}>Phase 4</strong>
              <span style={{ fontSize: "0.95rem" }}>Stationary Industrial Applications</span>
            </div>
            <div style={{ background: "rgba(77, 184, 165, 0.1)", border: "1px solid rgba(77, 184, 165, 0.3)", padding: "var(--spacing-md)", borderRadius: "var(--radius-md)" }}>
              <strong style={{ color: "var(--color-accent-green)", display: "block", marginBottom: "4px" }}>Phase 5</strong>
              <span style={{ fontSize: "0.95rem" }}>Global Market Expansion</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
