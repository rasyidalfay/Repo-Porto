// src/components/SkillsSection.jsx
import React, { useState } from 'react';

import backgroundDefault from '../../assets/background-blue.jpg';
const SkillsSection =() =>{
    return(
<section id="skills" className="skills-container" style={{ backgroundImage: `url(${backgroundDefault})`, backgroundSize: "cover", backgroundPosition: "center" }}>
          <div className="container">
            <h2>Skills & Expertise</h2>
            <div className="skills-grid">
              <div className="skill-category">
                <h3>Reserach Skill</h3>
                <ul>
                  <li>Historical Research</li>
                  <li>Archival Research</li>
                  <li>Qualitative Research</li>
                  <li>Literature Review</li>
                  <li>Data Collection & Analysis</li>
                </ul>
              </div>
              <div className="skill-category">
                <h3>Personal Skill</h3>
                <ul>
                  <li>Critical Thinking</li>
                  <li>Analytical Thinking</li>
                  <li>Problem Solving</li>
                  <li>Decision Making</li>
                  <li>Logical Reasoning</li>
                </ul>
              </div>
              <div className="skill-category">
                <h3>Tools</h3>
                <ul>
                  <li>Microsoft Office (Word, Excel, PowerPoint)</li>
                  <li>Google Workspace (Docs, Sheets, Slides)</li>
                  <li>Adobe Photoshop</li>
                </ul>
              </div>
              <div className="skill-category">
                <h3>Language</h3>
                <ul>
                  <li>Bahasa Indonesia</li>
                  <li>English</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
    );
}

export default SkillsSection;