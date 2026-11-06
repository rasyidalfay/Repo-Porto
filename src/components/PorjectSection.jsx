// src/components/ProjectsSection.jsx
import React, { useState } from 'react';

import backgroundDefault from '../../assets/background_2.jpg';

import civic6 from '../../assets/civic-6.png';
import civic7 from '../../assets/civic-7.png';
import civic1 from '../../assets/civic-1.png';
import civic2 from '../../assets/civic-2.png';
import civic3 from '../../assets/civic-3.png';
import civic4 from '../../assets/civic-4.png';
import civic8 from '../../assets/civic-8.png';
import civic5 from '../../assets/civic-5.png';
import civic9 from '../../assets/civic-9.png';
import gym1 from '../../assets/gym-1.png';
import gym2 from '../../assets/gym-2.png';
import gym21 from '../../assets/gym-2-1.png';
import gym3 from '../../assets/gym-3.png';
import gym31 from '../../assets/gym-3-1.png';
import gym4 from '../../assets/gym-4.png';
import gym5 from '../../assets/gym-5.png';
import gym6 from '../../assets/gym-6.png';
import app from '../../assets/app.png';
import game1 from '../../assets/game-1.jpg';
import game2 from '../../assets/game-2.jpg';
import game3 from '../../assets/game-3.jpg';
import game4 from '../../assets/game-4.jpg';
import game5 from '../../assets/game-5.jpg';
import game6 from '../../assets/game-6.jpg';
import game7 from '../../assets/game-7.jpg';

const projectImages = {
  civic: [
    civic6,
    civic7,
    civic1,
    civic2,
    civic3,
    civic4,
    civic8,
    civic5,
    civic9,
  ],
  fitness: [
    gym1,
    gym2,
    gym21,
    gym3,
    gym31,
    gym4,
    gym5,
    gym6,
  ],
   game: [
    game1,
    game2,
    game3,
    game4,
    game5,
    game6,
    game7,
  ],
  database: [
    app,
  ]
};

const ProjectsSection = () => {
  const [activeProject, setActiveProject] = useState('civic');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [expandedHighlight, setExpandedHighlight] = useState(null);

  const projects = [
    {
      id: 'civic',
      title: 'Crowdsourced Civic Reporting System',
      description: "Develops a full-stack automated triaging system using a Flutter cross-platform mobile frontend.  AI-assisted content verification, A proff-of-concept for a scalable civic reporting triage.",
      highlight: 'Secures with JWT authentication, Uses TensorFlow NLP to auto-draft formal reports, Deploys on Cloudflare Workers for serverless scalability, Include 1-week live deployment for testing and data collection, and open rest API for the data collected during live test in https://reportcivicthesis.my.id/reports/all',
      tags: [ 'Bachelor Thesis Projects','Flutter', 'FastAPI','Python', 'TensorFlow', 'Cloudflare','Local Ai-Assisted Report Draft', 'Multi Layer Validation Pipeline Artifacts']
    },
    {
      id: 'fitness',
      title: 'Fitness Tracking Application',
      description: 'Local Java application to log daily expenditures, gym progress, calorie intake, and monitor sleep patterns',
      highlight: null,
      tags: ['Java', 'Local Storage', 'SQLite', 'MVC Architecture', 'JavaFX']
    },
    {
      id: 'game',
      title: 'Text-game',
      description: 'Project to design, implement and iteract with SQLite database in android app. wuth real economy charaacter progression and game state',
      highlight: null,
      tags: ['Java', 'SQLite', 'Android Studio']
    },
    {
      id: 'database',
      title: 'Full-Stack Database Application',
      description: 'Built full-stack CRUD applications using Java and MySQL with MVC architecture',
      highlight: 'Structured applications using Model-View-Controller patterns and JDBC',
      tags: ['Java', 'MySQL', 'JDBC', 'MVC']
    }
  ];

  const handleProjectClick = (projectId) => {
    setActiveProject(projectId);
    setCurrentImageIndex(0);
    setExpandedHighlight(null);
  };

  const toggleHighlight = (projectId) => {
    setExpandedHighlight(expandedHighlight === projectId ? null : projectId);
  };

  const nextImage = () => {
    const images = projectImages[activeProject];
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    const images = projectImages[activeProject];
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const currentImages = projectImages[activeProject];

  return (
    <section id="projects" className="projects">
      <div className="container projects-container" style={{ backgroundImage: `url(${backgroundDefault})`, backgroundSize: "cover", backgroundPosition: "center" }}>
        <h2>Mobile Projects</h2>
        <div className="projects-wrapper">
          {/* Vertical Project List */}
          <div className="project-list">
            {projects.map((project) => (
              <div 
                key={project.id}
                className={`project-card ${activeProject === project.id ? 'active' : ''}`}
                onClick={() => handleProjectClick(project.id)}
              > 
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                {project.highlight && (
                  <div className="highlight-wrapper">
                    <div 
                      className={`highlight-header ${expandedHighlight === project.id ? 'expanded' : ''}`}
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleHighlight(project.id);
                      }}
                    >
                      <span className="highlight-label">▼ Highlights</span>
                      <span className="highlight-toggle">{expandedHighlight === project.id ? '▲' : '▼'}</span>
                    </div>
                    <div className={`highlight-content ${expandedHighlight === project.id ? 'open' : ''}`}>
                      <p>{project.highlight}</p>
                    </div>
                  </div>
                )}
                <div className="tech-tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tech-tag">{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Phone Display with Slider */}
          <div className="phone-container">
            <div className="phone">
              <div className="phone-notch"></div>
              <div className="phone-screen">
                <div className="slider-container">
                  <img 
                    src={currentImages[currentImageIndex]} 
                    alt={`${activeProject} project screenshot ${currentImageIndex + 1}`}
                    className="phone-image"
                  />
                  
                  {/* Navigation Arrows */}
                  {currentImages.length > 1 && (
                    <>
                      <button 
                        className="slider-arrow prev"
                        onClick={(e) => {
                          e.stopPropagation();
                          prevImage();
                        }}
                      >
                        ‹
                      </button>
                      <button 
                        className="slider-arrow next"
                        onClick={(e) => {
                          e.stopPropagation();
                          nextImage();
                        }}
                      >
                        ›
                      </button>
                      
                      {/* Dots Indicator */}
                      <div className="slider-dots">
                        {currentImages.map((_, index) => (
                          <span 
                            key={index}
                            className={`dot ${index === currentImageIndex ? 'active' : ''}`}
                            onClick={(e) => {
                              e.stopPropagation();
                              setCurrentImageIndex(index);
                            }}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </div>
              </div>
              <div className="phone-home-indicator"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;