export default function TeamPage() {
  const teamMembers = [
    {
      name: "Ayush Aggarwal",
      role: "Founder",
      image: "./ayush.jpeg",
    },
    {
      name: "Krishvee",
      role: "Founder",
      image: "./krishvee.jpeg",
    },
  ];

  return (
    <div>
      <section className="section" style={{ background: "linear-gradient(135deg, rgba(26, 58, 58, 0.5) 0%, rgba(45, 95, 79, 0.3) 100%)" }}>
        <div className="container">
          <h1 style={{ marginBottom: "var(--spacing-lg)" }}>The Team</h1>
          <p style={{ fontSize: "1.25rem", color: "var(--color-accent-green)" }}>
            Building ALGAIR through biology and engineering
          </p>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container">
          <h2 style={{ textAlign: "center", marginBottom: "var(--spacing-lg)" }}>
            Our Story
          </h2>

          <p style={{
            textAlign: "center",
            maxWidth: "700px",
            margin: "0 auto var(--spacing-3xl)",
            fontSize: "1.05rem",
            lineHeight: "1.8",
            color: "rgba(255, 255, 255, 0.75)"
          }}>
            A multi-disciplinary effort came together around a simple observation:
            vehicle emissions happen at a single point in space and time. What if we could capture them
            before they reached the atmosphere? That question led us to explore biological solutions and
            build the first prototype of ALGAIR.
          </p>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "var(--spacing-lg)"
          }}>
            {[
              { emoji: "🔍", title: "Noticed", desc: "Identified the gap between exhaust generation and atmospheric impact" },
              { emoji: "❓", title: "Questioned", desc: "Asked: why not capture emissions at the source?" },
              { emoji: "📚", title: "Researched", desc: "Explored biological and engineering solutions" },
              { emoji: "🎨", title: "Designed", desc: "Created the first system architecture" },
              { emoji: "🔨", title: "Built", desc: "Constructed our prototype" },
              { emoji: "🧪", title: "Testing", desc: "Running experiments and collecting data" },
            ].map((step, idx) => (
              <div key={idx} style={{
                textAlign: "center",
                padding: "var(--spacing-lg)"
              }}>
                <div style={{ fontSize: "3rem", marginBottom: "var(--spacing-md)" }}>
                  {step.emoji}
                </div>
                <h3 style={{ color: "var(--color-accent-green)", marginBottom: "var(--spacing-sm)" }}>
                  {step.title}
                </h3>
                <p style={{ fontSize: "0.95rem", color: "rgba(255, 255, 255, 0.7)", margin: 0 }}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="section section-accent">
        <div className="container">
          <h2 style={{ textAlign: "center", marginBottom: "var(--spacing-2xl)" }}>
            Founders
          </h2>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 400px))",
            gap: "var(--spacing-2xl)",
            justifyContent: "center"
          }}>
            {teamMembers.map((member, idx) => (
              <div key={idx} style={{
                background: "rgba(26, 26, 26, 0.5)",
                border: "1px solid rgba(77, 184, 165, 0.2)",
                borderRadius: "var(--radius-lg)",
                padding: "var(--spacing-2xl)",
                textAlign: "center",
                transition: "all var(--transition-base)"
              }}>
                <div style={{
                  width: "140px",
                  height: "140px",
                  borderRadius: "50%",
                  margin: "0 auto var(--spacing-lg)",
                  overflow: "hidden",
                  border: "3px solid var(--color-accent-green)",
                  background: "rgba(0, 0, 0, 0.2)"
                }}>
                  <img
                    src={member.image}
                    alt={member.name}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover"
                    }}
                  />
                </div>

                <h3 style={{ color: "var(--color-accent-green)", marginBottom: "var(--spacing-xs)", fontSize: "1.5rem" }}>
                  {member.name}
                </h3>

                <p style={{
                  color: "rgba(255, 255, 255, 0.6)",
                  fontSize: "0.9rem",
                  marginBottom: "var(--spacing-md)",
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                  fontWeight: "600"
                }}>
                  {member.role}
                </p>


              </div>
            ))}
          </div>

          <div style={{
            marginTop: "var(--spacing-3xl)",
            padding: "var(--spacing-2xl)",
            background: "linear-gradient(135deg, rgba(26, 58, 58, 0.5) 0%, rgba(45, 95, 79, 0.3) 100%)",
            border: "1px solid rgba(77, 184, 165, 0.2)",
            borderRadius: "var(--radius-lg)",
            textAlign: "center"
          }}>
            <h3 style={{ color: "var(--color-accent-green)", marginBottom: "var(--spacing-lg)" }}>
              Our Commitment
            </h3>
            <p style={{
              fontSize: "1.05rem",
              lineHeight: "1.8",
              color: "rgba(255, 255, 255, 0.75)",
              marginBottom: "var(--spacing-md)"
            }}>
              We believe engineering breakthroughs come from diverse thinking and rigorous experimentation.
              Our team combines biological expertise with precision engineering to tackle a problem that affects us all.
            </p>
            <p style={{
              fontSize: "0.95rem",
              color: "rgba(255, 255, 255, 0.6)",
              fontStyle: "italic",
              margin: 0
            }}>
              We're transparent about what works, what doesn't, and what we still need to learn.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container">
          <h2 style={{ textAlign: "center", marginBottom: "var(--spacing-2xl)" }}>
            Get In Touch
          </h2>

          <div style={{
            maxWidth: "600px",
            margin: "0 auto",
            textAlign: "center"
          }}>
            <p style={{
              fontSize: "1.05rem",
              lineHeight: "1.8",
              color: "rgba(255, 255, 255, 0.75)",
              marginBottom: "var(--spacing-2xl)"
            }}>
              Interested in ALGAIR? We'd love to hear from researchers, partners, and collaborators.
            </p>

            <div style={{
              display: "flex",
              gap: "var(--spacing-lg)",
              justifyContent: "center",
              flexWrap: "wrap"
            }}>
              <a
                href="mailto:algair@project.com"
                style={{
                  display: "inline-block",
                  padding: "var(--spacing-sm) var(--spacing-lg)",
                  background: "linear-gradient(135deg, var(--color-bright-algae) 0%, var(--color-accent-green) 100%)",
                  color: "var(--color-dark-bg)",
                  borderRadius: "var(--radius-md)",
                  fontWeight: "600",
                  textDecoration: "none",
                  transition: "all var(--transition-base)"
                }}
              >
                Email Us
              </a>
              <a
                href="/"
                style={{
                  display: "inline-block",
                  padding: "var(--spacing-sm) var(--spacing-lg)",
                  background: "transparent",
                  color: "var(--color-accent-green)",
                  border: "2px solid var(--color-accent-green)",
                  borderRadius: "var(--radius-md)",
                  fontWeight: "600",
                  textDecoration: "none",
                  transition: "all var(--transition-base)"
                }}
              >
                Visit Website
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
