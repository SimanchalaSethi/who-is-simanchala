import React from "react";
import "./Main.css";

function Main() {
  return (
    <main className="Main">
      <section id="about">
        <h2>About Me</h2>
        <p>
          Experienced Developer with 2 years specializing in JavaScript,
          Node.js, and Express.js. Proficient in MongoDB, MySQL, Git, Docker,
          Jenkins, and Socket.IO. Dedicated to creating scalable and efficient
          web applications with a focus on delivering high-quality user
          experiences.
        </p>
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
              {/* <p>
                This project involved developing a comprehensive rating management
                system for a hotel chain. The system allows users to submit, view,
                and manage ratings for various services provided by the hotel. Key
                features include real-time updates, data visualization, and a
                user-friendly interface.
              </p> */}
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
              {/* <p>
                This project is a robust banking application developed using
                Spring Boot, JWT tokens for secure authentication, and MySQL for
                database management. It includes features like user
                authentication, transaction management, and account services.
              </p> */}
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
    </main>
  );
}

export default Main;
