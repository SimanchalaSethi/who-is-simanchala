import React from "react";

const accentColor = "#00bcd4";

const styles = {
  body: {
    minHeight: "100vh",
    background: "#111",
    color: "#fff",
    fontFamily: "'Inter', 'Segoe UI', Arial, sans-serif",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "0 16px",
  },
  name: {
    fontSize: "2.5rem",
    fontWeight: "700",
    letterSpacing: "2px",
    color: accentColor,
    marginBottom: "0.5em",
    marginTop: "0.5em",
    textShadow: "0 2px 12px rgba(0,188,212,0.15)",
    textAlign: "center",
  },
  card: {
    background: "#181818",
    borderRadius: "14px",
    boxShadow: "0 2px 16px 0 rgba(0,0,0,0.12)",
    maxWidth: "420px",
    width: "100%",
    margin: "1.2em 0",
    padding: "1.3em 1em 1em 1em",
    textAlign: "center",
    borderTop: `3px solid ${accentColor}`,
    boxSizing: "border-box",
  },
  heading: {
    color: accentColor,
    fontSize: "1.15em",
    marginBottom: "0.5em",
    letterSpacing: "1px",
  },
  socialLinks: {
    display: "flex",
    justifyContent: "center",
    gap: "1.2em",
    marginTop: "1em",
    flexWrap: "wrap",
  },
  link: {
    color: accentColor,
    textDecoration: "none",
    fontSize: "1.05em",
    fontWeight: "500",
    padding: "6px 12px",
    borderRadius: "6px",
    transition: "background 0.2s, color 0.2s",
    display: "inline-block",
  },
  linkHover: {
    background: accentColor,
    color: "#111",
  },
};

function SocialLink({ href, children }) {
  const [hover, setHover] = React.useState(false);
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        ...styles.link,
        ...(hover ? styles.linkHover : {}),
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {children}
    </a>
  );
}

function App() {
  return (
    <>
      <style>
        {`
          @media (max-width: 600px) {
            .responsive-name {
              font-size: 1.5rem !important;
            }
            .responsive-card {
              padding: 1em 0.5em 0.7em 0.5em !important;
              max-width: 98vw !important;
            }
            .responsive-social {
              gap: 0.7em !important;
            }
          }
        `}
      </style>
      <div style={styles.body}>
        <div style={styles.name} className="responsive-name">
          Simanchala Sethi
        </div>

        <section style={styles.card} className="responsive-card">
          <h2 style={styles.heading}>About</h2>
          <p>
            Backend developer specializing in API design, deployment, and system
            architecture.
          </p>
        </section>

        <section style={styles.card} className="responsive-card">
          <h2 style={styles.heading}>Contact</h2>
          <p>
            For freelancing or collaboration, email:{" "}
            <a href="mailto:simanchalasethi.dev@gmail.com" style={styles.link}>
              simanchalasethi.dev@gmail.com
            </a>
          </p>
        </section>

        <section style={styles.card} className="responsive-card">
          <h2 style={styles.heading}>Connect</h2>
          <div style={styles.socialLinks} className="responsive-social">
            <SocialLink href="https://github.com/SimanchalaSethi">
              GitHub
            </SocialLink>
            <SocialLink href="https://www.linkedin.com/in/simanchala-sethi-672a5b166/">
              LinkedIn
            </SocialLink>
            <SocialLink href="https://dev.to/simanchala_sethi">DEV</SocialLink>
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
