import React, { useState } from "react";
import heroBackground from '../../assets/cover-bg-1.jpeg';
// Import additional images for accordion
import image2 from '../../assets/cover-bg-2.jpeg';
import image3 from '../../assets/cover-bg-3.jpeg';
import image4 from '../../assets/cover-bg-4.jpeg';


const HeroSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const images = [
    { id: 0, src: heroBackground, alt: "Hero image 1" },
    { id: 1, src: image2, alt: "Hero image 2" },
    { id: 2, src: image3, alt: "Hero image 3" },
    { id: 3, src: image4, alt: "Hero image 4" }
  ];

  return (
    <section id="hero" className="hero">
      <div className="hero-accordion">
        {images.map((image, index) => (
          <div
            key={image.id}
            className={`accordion-item ${activeIndex === index ? 'active' : ''}`}
            onMouseEnter={() => setActiveIndex(index)}
            onClick={() => setActiveIndex(index)}
            style={{
              backgroundImage: `url(${image.src})`,
            }}
          >
            <div className="accordion-label">
              <span>{index + 1}</span>
            </div>
          </div>
        ))}
      </div>
      
      {/* Hero content - stays in place */}
      <div className="hero-content">
        <h1>Hi, I'm 
          <br />Rasyid Al - Fayyed Manik</h1>
        <p className="subtitle">History Graduate</p>
        <p className="description">
          I'm a Bachelor of Arts in History from the University of Indonesia with a strong passion for history, culture, research, and 		  information management. 
        </p>
        <a href="#contact" className="cta-button">Get In Touch</a>
      </div>
    </section>
  );
};

export default HeroSection;