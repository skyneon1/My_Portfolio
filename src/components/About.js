import React from 'react';
import '../styles/About.css';

function About() {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <h2 className="about-heading">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              Hello! I am <strong>Aniket Babu</strong>, a passionate Web Designer specializing in creating visually captivating and responsive designs. 
              My aim is to transform ideas into seamless digital experiences.
            </p>
            <p>
              My expertise includes:
            </p>
            <ul>
              <li>Custom Website Designs</li>
              <li>Frontend Development</li>
              <li>UI/UX Design for exceptional user journeys</li>
            </ul>
            <p>
              I stay at the forefront of web development trends to deliver innovative, future-ready solutions. Let’s create something amazing together!
            </p>
          </div>
          <div className="about-image">
            <img src="https://img.freepik.com/free-photo/3d-render-little-boy-with-laptop-tools_1057-44642.jpg?uid=R140822190" alt="About Me" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
