// App.jsx
import React from 'react';
import './App.css';
import AboutSection from './components/AboutSection';
import MagangSection from './components/MagangSection';
import ExperienceSection from './components/ExperienceSection';
import HeroSection from './components/HeroSection';
import SkillsSection from './components/SkillsSection';
function App() {
  return (
    <div className="app">
      <header className="header">
        <nav className="nav">
          <div className="logo">Portfolio</div>
          <ul className="nav-links">
            <li><a href="#about2">Education</a></li>
            <li><a href="#about">Work Experince</a></li>
            <li><a href="#experience">Organizational Experience</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>
      <main>
      <HeroSection />

      <AboutSection />
      <MagangSection />
      <ExperienceSection />
        <SkillsSection/>
        <section id="contact" className="contact">
          <div className="container">
            <h2>Contact</h2>
            <p className="contact-text">
              Interested in collaborating or have a question? Reach out to me.
            </p>
            <div className="contact-info">
              <a href="mailto:rasyidalfay@gmail.com" className="contact-link">
                rasyidalfay@gmail.com
              </a>
              <a href="https://www.linkedin.com/in/rasyid-al-fayyed-manik-346a32278" className="contact-link">
                LinkedIn
              </a>
              <a href="http://wa.me/085780426411" className="contact-link">
                Phone
              </a>
            </div>
          </div>
        </section>
        
      </main>

      <footer className="footer">
        <div className="container">
          <p>2026 Rasyid Al - Fayyed Manik. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;