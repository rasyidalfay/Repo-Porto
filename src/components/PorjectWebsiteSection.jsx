import React, { useMemo, useState } from "react";

import kgc1 from "../../assets/kgc-web-1.png";
import kgc2 from "../../assets/kgc-web-2.png";
import kgc3 from "../../assets/kgc-web-3.png";
import kgc4 from "../../assets/kgc-web-4.png";
import kgc5 from "../../assets/kgc-web-5.png";
import iot1 from "../../assets/iot-1.png";
import iot2 from "../../assets/iot-2.png";
import iot3 from "../../assets/iot-3.png";
import backgroundDefault from "../../assets/background_4.jpg";
import sns1 from "../../assets/sns-1.png";
import sns2 from "../../assets/sns-2.png";
import sns3 from "../../assets/sns-3.png";
import sns4 from "../../assets/sns-4.png";
import sns5 from "../../assets/sns-5.png";

// Put all images for each project key here
const projectImages = {
  kgc: [kgc5 ,kgc1, kgc2, kgc3, kgc4],
  iot: [iot1, iot2, iot3],
  sns: [sns1, sns2, sns3, sns4, sns5],
};


const websiteProjects = [
  {
    id: 1,
    key: "kgc", 
    title: "Game Website",
    description: "King God Castle official website re-imagine",
    technologies: ["Html", "CSS", "JavaScript"],
    live: "https://oriza220.github.io/KGC/",
    github: "https://github.com/oriza220/KGC",

    
    showLive: true,
    showGithub: true,
  },
  {
    id: 2,
    key: "iot",
    title: "Traffic Signals",
    description: "Simple IOT Projects",
    technologies: ["IOT", "ESP32"],
    live: "", 
    github: "https://github.com/oriza220/simpletrafficesp32",

    showLive: false,
    showGithub: true,
  },
  {
    id: 3,
    key: "sns",
    title: "Godot Game",
    description: "Narrative Survival Strategic Game About Surviving in a Strange Alien Planet",
    technologies: ["Godot", "GDScript"],
    live: "", 
    github: "https://github.com/oriza220/Godot-Game",

    showLive: false,
    showGithub: false,
  },
];

function ProjectWebsiteSection() {
  const [activeImageIndex, setActiveImageIndex] = useState({});

  const imagesByProjectId = useMemo(() => {
    const map = {};
    for (const p of websiteProjects) {
      map[p.id] = projectImages[p.key] ?? [];
    }
    return map;
  }, []);

  const getIndex = (projectId) => activeImageIndex[projectId] ?? 0;

  const goPrev = (projectId) => {
    const imgs = imagesByProjectId[projectId] || [];
    if (imgs.length <= 1) return;

    setActiveImageIndex((prev) => {
      const curr = prev[projectId] ?? 0;
      const nextIndex = (curr - 1 + imgs.length) % imgs.length;
      return { ...prev, [projectId]: nextIndex };
    });
  };

  const goNext = (projectId) => {
    const imgs = imagesByProjectId[projectId] || [];
    if (imgs.length <= 1) return;

    setActiveImageIndex((prev) => {
      const curr = prev[projectId] ?? 0;
      const nextIndex = (curr + 1) % imgs.length;
      return { ...prev, [projectId]: nextIndex };
    });
  };

  return (
    <section className="website-project-section" id="website-project" style={{ backgroundImage: `url(${backgroundDefault})`, backgroundSize: "cover", backgroundPosition: "center" }}>
      <div className="website-project-container">
        <h2 className="website-project-title">Other Projects</h2>

        <div className="website-project-grid">
          {websiteProjects.map((websiteProject) => {
            const images = imagesByProjectId[websiteProject.id] || [];
            const idx = Math.min(getIndex(websiteProject.id), Math.max(images.length - 1, 0));
            const currentImage = images[idx];

            const hasMultiple = images.length > 1;

            // Button visibility rules:
            // - If you use showLive/showGithub: obey them
            // - Also require a non-empty URL (so you can just blank the URL to hide)
            const showLive = !!websiteProject.showLive && !!websiteProject.live;
            const showGithub = !!websiteProject.showGithub && !!websiteProject.github;

            return (
              <article className="website-project-card" key={websiteProject.id}>
                <div className="website-project-image-wrapper">
                  {currentImage ? (
                    <img
                      src={currentImage}
                      alt={`${websiteProject.title} screenshot ${idx + 1}`}
                      className="website-project-image"
                    />
                  ) : (
                    <div className="website-project-image website-project-image--placeholder">
                      No image
                    </div>
                  )}

                  {hasMultiple && (
                    <>
                      <button
                        type="button"
                        className="website-project-nav website-project-nav--prev"
                        onClick={() => goPrev(websiteProject.id)}
                        aria-label="Previous image"
                      >
                        ‹
                      </button>

                      <button
                        type="button"
                        className="website-project-nav website-project-nav--next"
                        onClick={() => goNext(websiteProject.id)}
                        aria-label="Next image"
                      >
                        ›
                      </button>

                      <div className="website-project-dots" aria-label="Image position">
                        {images.map((_, dotIndex) => (
                          <button
                            key={dotIndex}
                            type="button"
                            className={
                              "website-project-dot" + (dotIndex === idx ? " is-active" : "")
                            }
                            onClick={() =>
                              setActiveImageIndex((prev) => ({
                                ...prev,
                                [websiteProject.id]: dotIndex,
                              }))
                            }
                            aria-label={`Go to image ${dotIndex + 1}`}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </div>

                <div className="website-project-content">
                  <h3 className="website-project-name">{websiteProject.title}</h3>

                  <p className="website-project-description">{websiteProject.description}</p>

                  <div className="website-project-technologies">
                    {websiteProject.technologies.map((tech, index) => (
                      <span key={index}>{tech}</span>
                    ))}
                  </div>

                  {(showLive || showGithub) && (
                    <div className="website-project-buttons">
                      {showLive && (
                        <a href={websiteProject.live} target="_blank" rel="noreferrer">
                          Live Demo
                        </a>
                      )}
                      {showGithub && (
                        <a href={websiteProject.github} target="_blank" rel="noreferrer">
                          Github
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ProjectWebsiteSection;
