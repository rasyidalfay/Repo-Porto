// src/components/MagangSection.jsx
import React, { useState, useEffect } from 'react';

import esaUnggul1 from '../../assets/edukator-1.jpg';
import esaUnggul2 from '../../assets/edukator-2.jpg';
import transkrip2 from '../../assets/edukator-3.jpeg';
import edukator4 from '../../assets/edukator-4.jpeg';
import edukator5 from '../../assets/edukator-5.jpeg';
import nxu1 from '../../assets/kurator-1.jpeg';
import nxu2 from '../../assets/kurator-3.jpeg';
import nxu3 from '../../assets/kurator-2.jpeg';
import nxu4 from '../../assets/kurator-4.png';
import nxu5 from '../../assets/nxu-5.jpg';
import nxu6 from '../../assets/nxu-6.jpg';
import hsk1 from '../../assets/konservator-1.jpeg';
import hsk2 from '../../assets/konservator-2.jpeg';
import hsk3 from '../../assets/konservator-3.jpeg';
import hsk4 from '../../assets/konservator-4.jpg';
import hsk5 from '../../assets/konservator-5.jpg';
import esaUnggulLogo from '../../assets/icon-educator.png';
import nanjingXiaozhuangLogo from '../../assets/icon-curator.jpg';
import fotosma1 from '../../assets/fotosma1.webp';
import tamnel1 from '../../assets/tamnel-1.jpeg';
import hsk3Logo from '../../assets/icon-conservator.png';

// 👇 OPTIONAL: uncomment & adjust if your video is a LOCAL file
import edukatorVideo from '../../assets/edukator-67.mp4';
import edukatorVideo2 from '../../assets/edukator-7.mp4';

const MagangSection = () => {
  const [bgImage, setBgImage] = useState('indonesia');
  const [modalState, setModalState] = useState({
    isOpen: false,
    currentIndex: 0,
    gallery: []
  });

  const bgImages = {
    indonesia: esaUnggul1,
    china: nxu2,
    hsk: hsk2,
  };

  const imageKeys = ['indonesia', 'china', 'hsk'];

  // Gallery data for each stat with multiple images
  const galleryData = {
    indonesia: {
      title: 'Working as Educator',
      images: [
        {
          url: esaUnggul1,
          caption: 'I guided community group visits and presented the historical narratives of the collection interactively'
        },
        {
          url: esaUnggul2,
          caption: 'I researched collection items as the basis for educational materials, exhibition narratives, and display labels'
        },
        {
          url: transkrip2,
          caption: 'I led guided tours for international visitors in English'
        },
        {
          url: edukator4,
          caption: 'I also guided the Deputy Minister of Culture, Giring Ganesha Djumaryo, during his visit to the museum'
        },
        {
          url: edukator5,
          caption: 'Besides the Deputy Minister of Culture Giring Ganesha, I also guided Esti Nurjadin, who at that time was the head of the Indonesian   		    Heritage Agency, during her visit together with the Deputy Minister of Culture.'
        },
        // ✅ VIDEO ENTRY — only change url (and poster if you want a thumbnail)
        {
          type: 'video',
          url: edukatorVideo,     
          poster: tamnel1,                 // 👈 optional thumbnail before play (can remove)
          caption: 'Documentation of my guided tour session'
        },
        {
          type: 'video',
          url: edukatorVideo2,     
          poster: tamnel1,                 // 👈 optional thumbnail before play (can remove)
          caption: 'Documentation of my guided tour session'
        },
      ]
    },
    china: {
      title: 'Working as Curator',
      images: [
        {
          url: nxu1,
          caption: 'I assisted the curatorial team in documenting museum collections'
        },
        {
          url: nxu2,
          caption: 'I researched collection items to support exhibition narratives and display labels'
        },
        {
          url: nxu3,
          caption: 'I helped ensure the historical accuracy of the information presented to visitors'
        },
        {
          url: nxu4,
          caption: 'I also recorded and documented the museum collection development and data into Excel for digital record-keeping, transferring entries from the collection ledger into Excel worksheets'
        },
      ]
    },
    hsk: {
      title: 'Working as Conservator',
      images: [
        {
          url: hsk1,
          caption: 'I cleaned the paintings as a preventive measure to mitigate the fading of colors, the distortion of shapes, and the deterioration of the artworks'
        },
        {
          url: hsk2,
          caption: 'I handled collection items carefully, following proper handling procedures'
        },
        {
          url: hsk3,
          caption: 'I conducted detailed examinations and documented all areas requiring restoration prior to carrying out any direct conservation treatment'
        },
        {
          url: hsk4,
          caption: 'I carried out routine condition checks on collection items'
        },
        {
          url: hsk5,
          caption: 'I recorded the condition of collection items as part of ongoing care and monitoring'
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
    <section id="about" className="about">
      <div
        className="about-background"
        style={{
          backgroundImage: `url(${bgImages[bgImage]})`
        }}
      ></div>
      <div className="container">
        <h2>Work Experience</h2>
        <div className="about-content">
          <p>
            Intern, at National Awakening Museum, from Februari 2025 - June 2025
          </p>
          <p>
            During my internship, I worked directly on curatorial and visitor education tasks. I developed educational programs and learning modules for visitors, assisted the curatorial team in documenting the collection, and researched collection items to support exhibition narratives and labels. I also carried out routine condition checks on the collection.
          </p>
          <div className="about-stats">
            <div
              className="stat-item"
              onMouseEnter={() => setBgImage('indonesia')}
              onMouseLeave={() => setBgImage('indonesia')}
              onClick={() => openModal('indonesia')}
              style={{ cursor: 'pointer' }}
            >
              <div className="stat-left">
                <span className="stat-number" style={{ fontSize: "1.6rem" }}>Educator</span>
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
              onMouseEnter={() => setBgImage('china')}
              onMouseLeave={() => setBgImage('china')}
              onClick={() => openModal('china')}
              style={{ cursor: 'pointer' }}
            >
              <div className="stat-left">
                <span className="stat-number" style={{ fontSize: "1.6rem" }}>Curator</span>
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
              onMouseEnter={() => setBgImage('hsk')}
              onMouseLeave={() => setBgImage('hsk')}
              onClick={() => openModal('hsk')}
              style={{ cursor: 'pointer' }}
            >
              <div className="stat-left">
                <span className="stat-number" style={{ fontSize: "1.6rem" }}>Conservator</span>
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

            {/* Main Image / Video */}
            <div className="modal-image-container">
              {modalState.gallery.images[modalState.currentIndex].type === 'video' ? (
                <video
                  key={modalState.currentIndex}
                  src={modalState.gallery.images[modalState.currentIndex].url}
                  poster={modalState.gallery.images[modalState.currentIndex].poster}
                  className="modal-image"
                  controls
                  autoPlay
                  playsInline
                />
              ) : (
                <img
                  src={modalState.gallery.images[modalState.currentIndex].url}
                  alt={modalState.gallery.title}
                  className="modal-image"
                />
              )}
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
                    {img.type === 'video' ? (
                      <div className="thumbnail-video">
                        {img.poster ? <img src={img.poster} alt={`Thumbnail ${index + 1}`} /> : null}
                        <span className="video-play-icon">▶</span>
                      </div>
                    ) : (
                      <img src={img.url} alt={`Thumbnail ${index + 1}`} />
                    )}
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

export default MagangSection;