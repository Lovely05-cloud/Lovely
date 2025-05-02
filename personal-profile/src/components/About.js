import React from 'react';
import './Pages.css';

function About() {
  return (
    <div className="page about-page">
      <div className="container">
        <div className="page-content">
          <h1 className="page-title">About Me</h1>
          
          <section className="about-section">
            <h2>Personal Background</h2>
            <p>
              I am <strong>Lovely Anne O. Castillano</strong>, a 3rd-year Information Technology student, 
              a dedicated and enthusiastic individual with a passion for technology 
              and problem-solving. Born and raised in the Philippines, I've always been 
              fascinated by how software can change the world. I aspire to make a meaningful impact 
              through innovation and creativity.
            </p>
          </section>
          
          <section className="about-section">
            <h2>Hobbies</h2>
            <ul className="hobbies-list">
              <li>Reading current trends</li>
              <li>Playing online games</li>
              <li>Playing softball</li>
              
            </ul>
          </section>
          
          <section className="about-section">
            <h2>Interests</h2>
            <ul className="interests-list">
              <li>Web Development (Front-end and Back-end)</li>
              
              <li>Database Management</li>
              <li>Exploring New Technologies</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}

export default About;