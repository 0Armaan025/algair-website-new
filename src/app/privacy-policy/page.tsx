import styles from "./page.module.css";

export default function PrivacyPolicyPage() {
  const lastUpdated = "September 2026";

  return (
    <div className="section section-dark">
      <div className="container" style={{ maxWidth: "800px", margin: "0 auto", padding: "var(--spacing-2xl) var(--spacing-md)" }}>

        <header style={{ marginBottom: "var(--spacing-2xl)", borderBottom: "1px solid rgba(77, 184, 165, 0.2)", paddingBottom: "var(--spacing-lg)" }}>
          <h1 style={{ color: "#fff", marginBottom: "var(--spacing-xs)" }}>Privacy Policy</h1>
          <p style={{ color: "var(--color-accent-green)", fontSize: "0.95rem" }}>
            Last Updated: {lastUpdated}
          </p>
        </header>

        <article style={{ lineHeight: "1.8", color: "rgba(255, 255, 255, 0.8)", fontSize: "1rem" }}>
          <p style={{ marginBottom: "var(--spacing-lg)" }}>
            At <strong>ALGAIR</strong>, we respect your privacy and are committed to protecting the information you share with us through our website and research communication channels.
          </p>

          <h2 style={{ color: "var(--color-accent-green)", marginTop: "var(--spacing-xl)", marginBottom: "var(--spacing-sm)", fontSize: "1.4rem" }}>
            1. Information We Collect
          </h2>
          <p style={{ marginBottom: "var(--spacing-md)" }}>
            As an open research and prototype development project, we minimize data collection. We may collect information in the following ways:
          </p>
          <ul style={{ paddingLeft: "1.5rem", marginBottom: "var(--spacing-lg)" }}>
            <li><strong>Direct Communications:</strong> Information you provide when contacting us via email or contact forms (e.g., name, email address, institutional affiliation, or message contents).</li>
            <li><strong>Technical & Usage Data:</strong> Standard server logs and website analytics (such as IP addresses, browser types, and visited pages) collected automatically to ensure website security and improve user experience.</li>
          </ul>

          <h2 style={{ color: "var(--color-accent-green)", marginTop: "var(--spacing-xl)", marginBottom: "var(--spacing-sm)", fontSize: "1.4rem" }}>
            2. How We Use Your Information
          </h2>
          <p style={{ marginBottom: "var(--spacing-md)" }}>
            We use the information collected solely for the following purposes:
          </p>
          <ul style={{ paddingLeft: "1.5rem", marginBottom: "var(--spacing-lg)" }}>
            <li>Responding to research inquiries, partnership requests, or feedback.</li>
            <li>Providing updates regarding ALGAIR prototypes, research publications, or milestones.</li>
            <li>Maintaining and optimizing performance and security for our website.</li>
          </ul>

          <h2 style={{ color: "var(--color-accent-green)", marginTop: "var(--spacing-xl)", marginBottom: "var(--spacing-sm)", fontSize: "1.4rem" }}>
            3. Data Sharing & Third Parties
          </h2>
          <p style={{ marginBottom: "var(--spacing-lg)" }}>
            We do not sell, rent, or trade your personal information. We only share information with service providers (such as web hosting or communication platforms) strictly necessary to operate our website and services, or if required by law.
          </p>

          <h2 style={{ color: "var(--color-accent-green)", marginTop: "var(--spacing-xl)", marginBottom: "var(--spacing-sm)", fontSize: "1.4rem" }}>
            4. Cookies
          </h2>
          <p style={{ marginBottom: "var(--spacing-lg)" }}>
            Our website may use basic operational cookies to enhance site navigation and measure traffic performance. You can disable cookies in your browser settings without affecting core site functionality.
          </p>

          <h2 style={{ color: "var(--color-accent-green)", marginTop: "var(--spacing-xl)", marginBottom: "var(--spacing-sm)", fontSize: "1.4rem" }}>
            5. Contact Us
          </h2>
          <p style={{ marginBottom: "var(--spacing-lg)" }}>
            If you have questions about this Privacy Policy or how your information is handled, please contact us at:
          </p>

        </article>

      </div>
    </div>
  );
}
