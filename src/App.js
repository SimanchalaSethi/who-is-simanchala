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
    padding: "0 20px",
  },
  name: {
    fontSize: "2.8rem",
    fontWeight: "700",
    letterSpacing: "2px",
    color: accentColor,
    marginBottom: "0.5em",
    marginTop: "0.5em",
    textShadow: "0 2px 12px rgba(0,188,212,0.15)",
  },
  card: {
    background: "#181818",
    borderRadius: "14px",
    boxShadow: "0 2px 16px 0 rgba(0,0,0,0.12)",
    maxWidth: "420px",
    width: "100%",
    margin: "1.2em 0",
    padding: "2em 2em 1.5em 2em",
    textAlign: "center",
    borderTop: `3px solid ${accentColor}`,
  },
  heading: {
    color: accentColor,
    fontSize: "1.3em",
    marginBottom: "0.7em",
    letterSpacing: "1px",
  },
  socialLinks: {
    display: "flex",
    justifyContent: "center",
    gap: "1.5em",
    marginTop: "1em",
    flexWrap: "wrap",
  },
  link: {
    color: accentColor,
    textDecoration: "none",
    fontSize: "1.1em",
    fontWeight: "500",
    padding: "6px 12px",
    borderRadius: "6px",
    transition: "background 0.2s, color 0.2s",
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
    <div style={styles.body}>
      <div style={styles.name}>Simanchala Sethi</div>

      <section style={styles.card}>
        <h2 style={styles.heading}>About</h2>
        <p>
          Hello! I'm Simanchala, a backend specialist who loves turning complex
          ideas into robust, scalable systems.
          <br />
          <br />
          My expertise lies in designing and building efficient APIs,
          architecting reliable backend infrastructures, and deploying modern
          web applications. I enjoy solving real-world problems with clean code
          and thoughtful solutions.
        </p>
      </section>

      <section style={styles.card}>
        <h2 style={styles.heading}>Contact</h2>
        <p>
          Looking for someone to <b>deploy your project</b>, build a{" "}
          <b>complete backend solution</b>, or design a solid{" "}
          <b>system architecture</b>?<br />
          <br />
          Let's work together! Reach out for freelancing or collaboration at:{" "}
          <a href="mailto:simanchalasethi.dev@gmail.com" style={styles.link}>
            simanchalasethi.dev@gmail.com
          </a>
        </p>
      </section>

      <section style={styles.card}>
        <h2 style={styles.heading}>Connect</h2>
        <div style={styles.socialLinks}>
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
  );
}

export default App;
