"use client";

import { useState } from "react";
import styles from "./HowItWorksSection.module.css";

export default function HowItWorksSection() {
  const [activeComponent, setActiveComponent] = useState<string | null>(null);

  const components = [
    {
      id: "inlet",
      name: "Particle Filter",
      description:
        "Initial stage removes large particulates and matter from the exhaust stream. 🟢 VERIFIED - tested in prototype",
      details: "Removes particles >10 microns, protecting downstream components",
    },
    {
      id: "cooling",
      name: "Copper Cooling",
      description:
        "Heat exchanger brings exhaust temperature from ~500°C to <50°C. 🟡 UNDER TESTING - optimizing efficiency",
      details: "Uses copper fins and passive cooling. Current: ~400°C reduction",
    },
    {
      id: "fins",
      name: "Metallic Fins",
      description:
        "Increase surface area for heat dissipation. 🟢 VERIFIED - dissipates ~75% of inlet heat",
      details: "Aluminum fins with protective coating resist corrosion",
    },
    {
      id: "chamber",
      name: "Algae Chamber",
      description:
        "Core biological component where gas contacts algae and water. 🟡 UNDER TESTING - measuring gas-algae interaction rates",
      details: "Contains living algae (Chlorella strain), water circulation system, lighting",
    },
    {
      id: "filter",
      name: "Final Filter",
      description:
        "Removes algae particles and water droplets before outlet. 🟢 VERIFIED - >99% algae separation",
      details: "HEPA-grade filter protects final stage",
    },
    {
      id: "outlet",
      name: "Outlet",
      description:
        "Conditioned gas exits the system. 🟡 UNDER TESTING - measuring final composition",
      details: "Direct measurement point for research data collection",
    },
  ];

  return (
    <section className={`section section-dark ${styles.howItWorks}`}>
      <div className="container">
        <h2 className={styles.sectionTitle}>Interactive: How It Works</h2>

        <p className={styles.sectionIntro}>
          Click on each component in the pipeline to learn about that stage of the process
        </p>

        <div className={styles.pipelineContainer}>
          <div className={styles.pipeline}>
            {components.map((component, index) => (
              <div key={component.id}>
                <button
                  className={`${styles.pipelineComponent} ${
                    activeComponent === component.id ? styles.active : ""
                  }`}
                  onClick={() => setActiveComponent(activeComponent === component.id ? null : component.id)}
                >
                  <span className={styles.componentName}>{component.name}</span>
                </button>
                {index < components.length - 1 && (
                  <span className={styles.arrow}>→</span>
                )}
              </div>
            ))}
          </div>

          {activeComponent && (
            <div className={styles.componentDetails}>
              <h3>{components.find((c) => c.id === activeComponent)?.name}</h3>
              <p className={styles.description}>
                {components.find((c) => c.id === activeComponent)?.description}
              </p>
              <p className={styles.details}>
                <strong>Details:</strong> {components.find((c) => c.id === activeComponent)?.details}
              </p>
              <button
                className={styles.closeButton}
                onClick={() => setActiveComponent(null)}
              >
                ✕
              </button>
            </div>
          )}
        </div>

        <div className={styles.bioChamberSection}>
          <h3>The Bio-Chamber: Where Biology Meets Engineering</h3>
          <div className={styles.bioChamberGrid}>
            <div className={styles.bioChamberVisual}>
              <svg
                viewBox="0 0 300 400"
                xmlns="http://www.w3.org/2000/svg"
                className={styles.bioChamberSvg}
              >
                {/* Main chamber */}
                <rect
                  x="50"
                  y="50"
                  width="200"
                  height="300"
                  fill="none"
                  stroke="#4cb8a5"
                  strokeWidth="3"
                />

                {/* Gas inlet */}
                <circle cx="150" cy="30" r="8" fill="#5dd4b4" />
                <line x1="150" y1="38" x2="150" y2="60" stroke="#5dd4b4" strokeWidth="2" />
                <text x="170" y="50" fill="#5dd4b4" fontSize="12">
                  Gas Inlet
                </text>

                {/* Distribution system */}
                <line x1="150" y1="60" x2="100" y2="120" stroke="#4cb8a5" strokeWidth="2" />
                <line x1="150" y1="60" x2="150" y2="120" stroke="#4cb8a5" strokeWidth="2" />
                <line x1="150" y1="60" x2="200" y2="120" stroke="#4cb8a5" strokeWidth="2" />
                <text x="155" y="85" fill="#4cb8a5" fontSize="11">
                  Distribution
                </text>

                {/* Algae-water zone */}
                <rect
                  x="80"
                  y="130"
                  width="140"
                  height="140"
                  fill="rgba(61, 138, 115, 0.2)"
                  stroke="#3a8a73"
                  strokeWidth="2"
                  rx="5"
                />
                <text x="150" y="165" textAnchor="middle" fill="#3a8a73" fontSize="12" fontWeight="600">
                  Algae + Water
                </text>
                <text x="150" y="185" textAnchor="middle" fill="#3a8a73" fontSize="10">
                  Gas-Biological
                </text>
                <text x="150" y="198" textAnchor="middle" fill="#3a8a73" fontSize="10">
                  Interaction Zone
                </text>

                {/* Light */}
                <circle cx="45" cy="200" r="5" fill="#ffc107" />
                <line x1="50" y1="200" x2="75" y2="200" stroke="#ffc107" strokeWidth="2" />
                <text x="20" y="195" fill="#ffc107" fontSize="11">
                  Light
                </text>

                {/* Gas outlet */}
                <line x1="150" y1="290" x2="150" y2="330" stroke="#5dd4b4" strokeWidth="2" />
                <circle cx="150" cy="340" r="8" fill="#5dd4b4" />
                <text x="170" y="345" fill="#5dd4b4" fontSize="12">
                  Gas Outlet
                </text>
              </svg>
            </div>

            <div className={styles.bioChamberDescription}>
              <div className={styles.bioChamberPoint}>
                <h4>Gas Inlet</h4>
                <p>Conditioned exhaust enters the chamber through a distribution system</p>
              </div>

              <div className={styles.bioChamberPoint}>
                <h4>Gas Distribution</h4>
                <p>Gas is dispersed evenly to maximize contact with the algae-water mixture</p>
              </div>

              <div className={styles.bioChamberPoint}>
                <h4>Algae-Water Zone</h4>
                <p>
                  Living algae (Chlorella) consumes CO₂ through photosynthesis. 
                  Water provides the medium for exchange.
                </p>
              </div>

              <div className={styles.bioChamberPoint}>
                <h4>Light</h4>
                <p>LED lighting drives photosynthetic activity. Wavelength ~650nm for algae growth</p>
              </div>

              <div className={styles.bioChamberPoint}>
                <h4>Gas Outlet</h4>
                <p>Exiting gas is measured for composition changes—this is where we gather research data</p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.note}>
          <p>
            <strong>Status:</strong> This visualization shows the current prototype design. 
            Some measurements are ongoing (🟡 UNDER TESTING), while others have been verified through testing (🟢 VERIFIED). 
            Future versions may have different geometry or biological approaches (🔵 FUTURE).
          </p>
        </div>
      </div>
    </section>
  );
}
