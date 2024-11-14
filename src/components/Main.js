import React, { useState, useEffect } from "react";
import "./Main.css";
import Contact from "../Contact/Contact";

function Main() {
  const [displayText, setDisplayText] = useState("");
  const fullText =
    "Experienced Developer with 2 years specializing in JavaScript, Node.js, and Express.js. Proficient in MongoDB, MySQL, Git, Docker, Jenkins, and Socket.IO. Dedicated to creating scalable and efficient web applications with a focus on delivering high-quality user experiences.";

  useEffect(() => {
    let index = 0;
    const intervalId = setInterval(() => {
      setDisplayText((prev) => prev + fullText[index]);
      index++;
      if (index === fullText.length) {
        clearInterval(intervalId);
      }
    }, 80);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <main className="Main">
      <section id="about">
        <h2>About Me</h2>
        <p className="typing-text">{displayText}</p>
      </section>
      <section id="projects">
        <h2>Projects</h2>
        <div className="projects-container">
          <div className="project">
            <div className="project-content">
              <h3>Project Management Tool</h3>
              <a
                href="https://github.com/SimanchalaSethi/Project-Management-Tool.git"
                target="_blank"
                rel="noopener noreferrer"
              >
                View on GitHub
              </a>
            </div>
          </div>
          <div className="project">
            <div className="project-content">
              <h3>Rating Management in Hotel</h3>
              <a
                href="https://github.com/SimanchalaSethi/Hotel-User-Rating-Management"
                target="_blank"
                rel="noopener noreferrer"
              >
                View on GitHub
              </a>
            </div>
          </div>
          <div className="project">
            <div className="project-content">
              <h3>Banking Application</h3>
              <a
                href="https://github.com/SimanchalaSethi/Back-End-Bank-Application.git"
                target="_blank"
                rel="noopener noreferrer"
              >
                View on GitHub
              </a>
            </div>
          </div>
        </div>
      </section>
      <section id="contact">
        <Contact /> {/* Render the Contact component here */}
      </section>
    </main>
  );
}

export default Main;
