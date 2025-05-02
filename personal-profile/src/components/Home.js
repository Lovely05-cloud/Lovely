import React from 'react';
import './Pages.css';

function Home() {
  return (
    <div className="page home-page">
      <div className="container">
        <div className="hero-section">
          <div className="profile-image">
            <img 
              src="/images/love.jpg" 
              alt="Profile" 
              className="actual-image"
            />
          </div>
          <div className="hero-text">
            <h1>Lovely Anne O. Castillano</h1>
            <h3>Information Technology Student</h3>
            <p>
              Welcome to my professional profile! I am passionate about technology, innovation, and creating impactful solutions. 
              Explore my journey, projects, and achievements as I continue to grow in the field of IT.
            </p>
            <a href="/projects" className="cta-button">Explore My Work</a>
          </div>
        </div>

        <div className="quick-links">
          <h2>Explore</h2>
          <ul>
            <li><a href="/about">About Me</a></li>
            <li><a href="/education">Education</a></li>
            <li><a href="/projects">Projects</a></li>
            <li><a href="/contact">Contact Me</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Home;