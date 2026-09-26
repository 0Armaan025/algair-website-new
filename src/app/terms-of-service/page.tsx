import styles from "./page.module.css";

export default function TermsOfServicePage() {
  const lastUpdated = "September 2026";

  return (
    <div className="section section-dark">
      <div className="container" style={{ maxWidth: "800px", margin: "0 auto", padding: "var(--spacing-2xl) var(--spacing-md)" }}>

        <header style={{ marginBottom: "var(--spacing-2xl)", borderBottom: "1px solid rgba(77, 184, 165, 0.2)", paddingBottom: "var(--spacing-lg)" }}>
          <h1 style={{ color: "#fff", marginBottom: "var(--spacing-xs)" }}>Terms of Service</h1>
          <p style={{ color: "var(--color-accent-green)", fontSize: "0.95rem" }}>
            Last Updated: {lastUpdated}
          </p>
        </header>

        <article style={{ lineHeight: "1.8", color: "rgba(255, 255, 255, 0.8)", fontSize: "1rem" }}>
          <p style={{ marginBottom: "var(--spacing-lg)" }}>
            Welcome to <strong>ALGAIR</strong>. By accessing or using our website, documentation, or prototype information, you agree to comply with and be bound by the following Terms of Service.
          </p>

          <h2 style={{ color: "var(--color-accent-green)", marginTop: "var(--spacing-xl)", marginBottom: "var(--spacing-sm)", fontSize: "1.4rem" }}>
            1. Research & Informational Purpose
          </h2>
          <p style={{ marginBottom: "var(--spacing-lg)" }}>
            All information, specifications, data, and diagrams presented on this website regarding the ALGAIR algae-powered filtration technology represent ongoing research and prototype development. Specifications are subject to change as testing progresses.
          </p>

          <h2 style={{ color: "var(--color-accent-green)", marginTop: "var(--spacing-xl)", marginBottom: "var(--spacing-sm)", fontSize: "1.4rem" }}>
            2. Intellectual Property
          </h2>
          <p style={{ marginBottom: "var(--spacing-lg)" }}>
            Unless otherwise stated, all original content, branding, media, and design elements on this website are the intellectual property of the ALGAIR project team. Unauthorised reproduction or distribution of proprietary schematics without attribution or written permission is prohibited.
          </p>

          <h2 style={{ color: "var(--color-accent-green)", marginTop: "var(--spacing-xl)", marginBottom: "var(--spacing-sm)", fontSize: "1.4rem" }}>
            3. Disclaimer of Liability
          </h2>
          <p style={{ marginBottom: "var(--spacing-lg)" }}>
            The content and prototype specifications provided on this website are provided "as is" for informational purposes only. ALGAIR does not guarantee specific real-world outcomes outside our controlled test parameters, nor shall the team be held liable for third-party implementations based on our preliminary findings.
          </p>

          <h2 style={{ color: "var(--color-accent-green)", marginTop: "var(--spacing-xl)", marginBottom: "var(--spacing-sm)", fontSize: "1.4rem" }}>
            4. External Links
          </h2>
          <p style={{ marginBottom: "var(--spacing-lg)" }}>
            Our website may contain links to external websites, research papers, or third-party resources. ALGAIR is not responsible for the content, privacy practices, or availability of external sites.
          </p>

          <h2 style={{ color: "var(--color-accent-green)", marginTop: "var(--spacing-xl)", marginBottom: "var(--spacing-sm)", fontSize: "1.4rem" }}>
            5. Modifications to Terms
          </h2>
          <p style={{ marginBottom: "var(--spacing-lg)" }}>
            We reserve the right to update these terms at any time. Continued use of the website following changes constitutes acceptance of the revised terms.
          </p>

          <h2 style={{ color: "var(--color-accent-green)", marginTop: "var(--spacing-xl)", marginBottom: "var(--spacing-sm)", fontSize: "1.4rem" }}>
            6. Contact
          </h2>
          <p style={{ marginBottom: "var(--spacing-lg)" }}>
            For questions regarding these terms, please contact us at:
          </p>

        </article>

      </div>
    </div>
  );
}
