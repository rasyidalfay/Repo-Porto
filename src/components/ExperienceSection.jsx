import React, { useState } from "react";
import backgroundDefault from '../../assets/bggif1.gif';

function ExperienceSection() {
    const experiences = [
        {
            title: "Bimbingan Orientasi Sejarah UI (BOS UI) - Depok, Universitas Indonesia",
            date: "Aug 2023 - Nov 2023",
            role: "Discipline Commitee",
            points: [
                "Reviewing and implementing applicable disciplinary regulations and codes of ethics.",
                "Monitoring member attendance and discipline during plenary meetings and major committee activities.",
                "Handling cases of rule violations, ranging from unexcused absences to breaches of communication ethics.",
            ],
        },
        {
            title: "UI BattleGrounds - Depok, Universitas Indonesia",
            date: "July 2023 - Aug 2023",
            role: "Staff, Mobile Legend Division",
            points: [
                "Served as a match referee, ensuring all matches were conducted according to the official tournament rules and regulations",
                "Acted as the communication liaison between competing teams, facilitating clear and timely information exchange before, during, and after matches",
                "Recorded and documented ongoing matches in real time, including match results, scores, and key incidents, to maintain accurate tournament records",
            ],
        },
        {
            title: "OlimpiadeBudaya UI (Olimbud UI) - Depok, Universitas Indonesia",
            date: "Aug 2023 - Sep 2023",
            role: "Staff, Mobile Legend Division",
            points: [
                "Served as an online match referee, overseeing matches conducted remotely and ensuring all proceedings followed the official tournament rules and regulations",
                "Acted as the communication liaison between competing teams, coordinating through Discord and other online channels to relay schedules, rules, and match information clearly and promptly",
                "Recorded and documented ongoing matches in real time, including match results, scores, and key incidents, to maintain accurate tournament records",
                "Managed online lobby creation and match room settings, confirming that game modes, rules, and configurations matched tournament standards",
            ],
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const current = experiences[currentIndex];

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev === 0 ? experiences.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prev) => (prev === experiences.length - 1 ? 0 : prev + 1));
    };

    return(
     <section id="experience" className="experience" >
          <div
            className="container experience-section"
            style={{
              backgroundImage: `url(${backgroundDefault})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              color: "#ffffff",
            }}
          >
            <h2 style={{ color: "#ffffff" }}>Organizational Experience</h2>
            <div
              className="experience-card"
              style={{
                background: "rgba(255, 255, 255, 0.12)",
                backdropFilter: "blur(10px)",
                WebkitBackdropFilter: "blur(10px)",
                border: "1px solid rgba(255, 255, 255, 0.3)",
                borderRadius: "16px",
                padding: "24px",
                color: "#ffffff",
                boxShadow: "0 8px 32px rgba(0, 0, 0, 0.25)",
              }}
            >
              <div className="experience-header">
                <h3 style={{ color: "#ffffff" }}>{current.title}</h3>
                <span className="experience-date" style={{ color: "rgba(255, 255, 255, 0.8)" }}>{current.date}</span>
              </div>
              <p className="experience-role" style={{ color: "rgba(255, 255, 255, 0.9)" }}>{current.role}</p>
              <ul className="experience-list" style={{ color: "#ffffff" }}>
                {current.points.map((point, idx) => (
                  <li key={idx} style={{ color: "#ffffff" }}>{point}</li>
                ))}
              </ul>

              <div style={{ display: "flex", gap: "8px", marginTop: "16px" }}>
                <button
                  onClick={handlePrev}
                  style={{
                    padding: "6px 12px",
                    cursor: "pointer",
                    background: "rgba(255, 255, 255, 0.15)",
                    color: "#ffffff",
                    border: "1px solid rgba(255, 255, 255, 0.4)",
                    borderRadius: "8px",
                    backdropFilter: "blur(6px)",
                    WebkitBackdropFilter: "blur(6px)",
                  }}
                >
                  ‹ Prev
                </button>
                <button
                  onClick={handleNext}
                  style={{
                    padding: "6px 12px",
                    cursor: "pointer",
                    background: "rgba(255, 255, 255, 0.15)",
                    color: "#ffffff",
                    border: "1px solid rgba(255, 255, 255, 0.4)",
                    borderRadius: "8px",
                    backdropFilter: "blur(6px)",
                    WebkitBackdropFilter: "blur(6px)",
                  }}
                >
                  Next ›
                </button>
              </div>
            </div>
          </div>
        </section>
    )
}

export default ExperienceSection;