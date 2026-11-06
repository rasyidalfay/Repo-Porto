// src/components/AboutSection.jsx
import React, { useState, useEffect } from 'react';

import esaUnggul1 from '../../assets/foto-kampus-ui.jpeg';
import esaUnggul2 from '../../assets/transkrip1.jpg';
import transkrip2 from '../../assets/transkrip2.jpg';
import fotogedungsma from '../../assets/fotogedungsma1.jpg';
import nxu1 from '../../assets/transkripsma.jpg';
import hsk1 from '../../assets/sertif1.jpg';
import sertif2 from '../../assets/sertif2.jpg';
import sertif3 from '../../assets/sertif3.jpg';
import sertif4 from '../../assets/sertif4.jpg';
import esaUnggulLogo from '../../assets/logo-ui.jpg';
import nanjingXiaozhuangLogo from '../../assets/logo-sma.jpg';
import fotosma1 from '../../assets/fotosma1.webp';
import fotogedungfib from '../../assets/fotogedungfib.jpg';

import hsk3Logo from '../../assets/logo-sertif.png';

const AboutSection = () => {
  const [bgImage, setBgImage] = useState('indonesia');

  // TAMBAHAN: state untuk melacak konten mana yang sedang aktif
  const [activeContent, setActiveContent] = useState('indonesia');

  const [modalState, setModalState] = useState({
    isOpen: false,
    currentIndex: 0,
    gallery: []
  });

  const bgImages = {
    indonesia: esaUnggul1,
    china: fotosma1,
    hsk: fotogedungfib,
  };

  const imageKeys = ['indonesia', 'china', 'hsk'];

  // TAMBAHAN: data konten untuk tiap kotak
  const contentData = {
    indonesia: {
      paragraphs: [
        "Bachelor of Arts in History, 2022-2026, awarded cum laude with GPA 3.66/4.00",
        "I have skills in conducting research, processing and organizing information, and writing. I'm comfortable working both independently and as part of a team, and I value collaboration, curiosity, and attention to detail in everything I do."
      ]
    },
    china: {
      paragraphs: [
        "Social Science, 2019-2022, graduated with score 76.18",

        "Focused on social studies, civic education, and analytical writing. Developed strong teamwork and communication skills through group projects and presentations."
      ]
    },
    hsk: {
      paragraphs: [
        "Certificates & Professional Development",
        "Completed internships and courses including: National Awakening Museum Intern Certificate, EF Set English Certificate, and Communicating with Data course."
      ]
    }
  };

  // Gallery data for each stat with multiple images
  const galleryData = {
    indonesia: {
      title: 'Universitas Indonesia',
      images: [
        {
          url: esaUnggul1, 
          caption: 'Campus'
        },
        {
          url: esaUnggul2, 
          caption: 'Transcripts-1'
        },
 {
          url: transkrip2, 
          caption: 'Transcripts-2'
        },

      
      ]
    },
    china: {
      title: 'SMA Negeri 57 Jakarta',
      images: [
        {
          url: fotogedungsma,
          caption: 'School Building'
        },
        {
          url: nxu1,
          caption: 'Transcripts'
        },
      ]
    },
    hsk: {
      title: 'Certificate',
      images: [
        {
          url: hsk1,
           caption: 'Intern Certificate at National Awakening Museum'
        },
       {
          url: sertif2,
           caption: 'EF Set English Certificate'
        },
	{
          url: sertif3,
           caption: 'Course Completion: Communicating with Data'
        },
	{
          url: sertif4,
           caption: 'Course Completion: Communicating with Data'
        },

      ]
    }
  };

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % imageKeys.length;
      setBgImage(imageKeys[currentIndex]);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Open modal with specific gallery
  const openModal = (galleryKey) => {
    setModalState({
      isOpen: true,
      currentIndex: 0,
      gallery: galleryData[galleryKey]
    });
    document.body.style.overflow = 'hidden';
  };

  // Close modal
  const closeModal = () => {
    setModalState({
      isOpen: false,
      currentIndex: 0,
      gallery: []
    });
    document.body.style.overflow = 'auto';
  };

  // Navigate to next image
  const nextImage = () => {
    setModalState(prev => ({
      ...prev,
      currentIndex: (prev.currentIndex + 1) % prev.gallery.images.length
    }));
  };

  // Navigate to previous image
  const prevImage = () => {
    setModalState(prev => ({
      ...prev,
      currentIndex: prev.currentIndex === 0 
        ? prev.gallery.images.length - 1 
        : prev.currentIndex - 1
    }));
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!modalState.isOpen) return;
      
      if (e.key === 'Escape') {
        closeModal();
      } else if (e.key === 'ArrowRight') {
        nextImage();
      } else if (e.key === 'ArrowLeft') {
        prevImage();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [modalState.isOpen]);

  return (
    <section id="about2" className="about">
      <div 
        className="about-background" 
        style={{ 
          backgroundImage: `url(${bgImages[bgImage]})`
        }}
      ></div>
      <div className="container">
        <h2>Education</h2>
        <div className="about-content">
          {/* DIUBAH: paragraf statis diganti konten dinamis sesuai hover */}
          <div className="about-description">
            {contentData[activeContent].paragraphs.map((text, i) => (
              <p key={`${activeContent}-${i}`}>{text}</p>
            ))}
          </div>
          <div className="about-stats">
            <div 
              className="stat-item"
              onMouseEnter={() => {
                setBgImage('indonesia');
                setActiveContent('indonesia');
              }}
              onMouseLeave={() => setBgImage('indonesia')}
              onClick={() => openModal('indonesia')}
              style={{ cursor: 'pointer' }}
            >
              <div className="stat-left">
                <span className="stat-number">3.66</span>
                <span className="stat-label">University GPA</span>
              </div>
              <div className="stat-right">
                <img 
                  src={esaUnggulLogo} 
                  alt="Universitas Esa Unggul" 
                  className="university-logo"
                />
              </div>
            </div>
            <div 
              className="stat-item"
              onMouseEnter={() => {
                setBgImage('china');
                setActiveContent('china');
              }}
              onMouseLeave={() => setBgImage('china')}
              onClick={() => openModal('china')}
              style={{ cursor: 'pointer' }}
            >
              <div className="stat-left">
                <span className="stat-number">76.18</span>
                <span className="stat-label">Social Science</span>
              </div>
              <div className="stat-right">
                <img 
                  src={nanjingXiaozhuangLogo} 
                  alt="Nanjing Xiaozhuang University" 
                  className="university-logo"
                />
              </div>
            </div>
            <div 
              className="stat-item"
              onMouseEnter={() => {
                setBgImage('hsk');
                setActiveContent('hsk');
              }}
              onMouseLeave={() => setBgImage('hsk')}
              onClick={() => openModal('hsk')}
              style={{ cursor: 'pointer' }}
            >
              <div className="stat-left">
                <span className="stat-number">Certificate</span>
                <span className="stat-label"></span>
              </div>
              <div className="stat-right">
                <img 
                  src={hsk3Logo} 
                  alt="HSK" 
                  className="university-logo"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Gallery Modal */}
      {modalState.isOpen && modalState.gallery.images && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>×</button>
            
            {/* Navigation Arrows */}
            <button 
              className="modal-nav modal-nav-prev" 
              onClick={prevImage}
              aria-label="Previous image"
            >
              ❮
            </button>
            
            <button 
              className="modal-nav modal-nav-next" 
              onClick={nextImage}
              aria-label="Next image"
            >
              ❯
            </button>

            {/* Main Image */}
            <div className="modal-image-container">
              <img 
                src={modalState.gallery.images[modalState.currentIndex].url} 
                alt={modalState.gallery.title}
                className="modal-image"
              />
            </div>

            {/* Image Info */}
            <div className="modal-info">
              <h3>{modalState.gallery.title}</h3>
              <div className="modal-caption">
                {modalState.gallery.images[modalState.currentIndex].caption}
              </div>
              
              {/* Thumbnails */}
              <div className="modal-thumbnails">
                {modalState.gallery.images.map((img, index) => (
                  <div
                    key={index}
                    className={`thumbnail-item ${index === modalState.currentIndex ? 'active' : ''}`}
                    onClick={() => setModalState(prev => ({
                      ...prev,
                      currentIndex: index
                    }))}
                  >
                    <img src={img.url} alt={`Thumbnail ${index + 1}`} />
                  </div>
                ))}
              </div>

              {/* Image Counter */}
              <div className="modal-counter">
                {modalState.currentIndex + 1} / {modalState.gallery.images.length}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default AboutSection;
