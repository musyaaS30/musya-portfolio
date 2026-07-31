import { useState, useEffect } from "react";
import "../styles/skillsIcon.css";

const skillsData = [
  { src: "/assets/img/skills/html-logo.png", alt: "HTML", info: "<b>HTML</b><br>Markup language for creating website structure" },
  { src: "/assets/img/skills/js-logo.png", alt: "JavaScript", info: "<b>JavaScript</b><br>Interactive programming language for the web" },
  { src: "/assets/img/skills/node-logo.png", alt: "Node.js", info: "<b>Node.js</b><br>JavaScript runtime for backend development" },
  { src: "/assets/img/skills/react-logo.png", alt: "React", info: "<b>React</b><br>Frontend library for interactive UI" },
  { src: "/assets/img/skills/tailwind-logo.png", alt: "Tailwind CSS", info: "<b>Tailwind CSS</b><br>CSS framework for rapid design" },
  { src: "/assets/img/skills/cloudflare-logo.png", alt: "Cloudflare", info: "<b>Cloudflare</b><br>CDN and website security" },
  { src: "/assets/img/skills/github-logo.png", alt: "GitHub", info: "<b>GitHub</b><br>Version control and collaboration" },
  { src: "/assets/img/skills/claude-logo.png", alt: "Claude AI", info: "<b>Claude AI</b><br>AI assistant for productivity" },
  { src: "/assets/img/skills/css-logo.png", alt: "CSS", info: "<b>CSS</b><br>Stylesheet language for Web UI" },
  { src: "/assets/img/skills/mysql-logo.png", alt: "MySQL", info: "<b>MySQL</b><br>Popular relational database" },
];

const FloatingIcons = () => {
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth <= 480);
  }, []);

  const openModal = (skill) => {
    if (isMobile) setSelectedSkill(skill);
  };

  const closeModal = () => setSelectedSkill(null);

  return (
    <div className="skillIcon">
      <h1 className="lead">Technologies I Use</h1>

      <div id="container">
        {skillsData.map((skill, index) => (
          <div className="skill-item" key={index}>
            <img
              src={skill.src}
              alt={skill.alt}
              className="floating-image"
              onClick={() => openModal(skill)}
            />
            <span
              className="tooltip"
              dangerouslySetInnerHTML={{ __html: skill.info }}
            />
          </div>
        ))}

        {selectedSkill && (
          <div className="skill-modal-overlay" onClick={closeModal}>
            <div className="skill-modal" onClick={(e) => e.stopPropagation()}>
              <img className="modal-img" src={selectedSkill.src} alt={selectedSkill.alt} />
              <div
                className="modal-text"
                dangerouslySetInnerHTML={{ __html: selectedSkill.info }}
              ></div>
            </div>
            <div className="skill-modal-close" onClick={closeModal}>Close</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FloatingIcons;
