import { useState, useEffect } from "react";
import "../styles/skillsIcon.css";

const skillsData = [
  {
    id: "react",
    name: "React.js",
    category: "Frontend Library",
    src: "/assets/img/skills/react.svg",
    alt: "React",
    description:
      "Building reactive, high-performance, and modular user interfaces with modern React hooks, state management, and component architecture.",
    tag: "UI Library",
  },
  {
    id: "javascript",
    name: "JavaScript",
    category: "Core Language",
    src: "/assets/img/skills/javascript.svg",
    alt: "JavaScript",
    description:
      "Developing interactive web experiences, DOM manipulation, asynchronous logic, and modern ES6+ application workflows.",
    tag: "Language",
  },
  {
    id: "tailwind",
    name: "Tailwind CSS",
    category: "Styling Framework",
    src: "/assets/img/skills/tailwind-css.svg",
    alt: "Tailwind CSS",
    description:
      "Crafting rapid, pixel-perfect, responsive layouts and aesthetic designs with utility-first modern CSS architecture.",
    tag: "Styling",
  },
  {
    id: "nodejs",
    name: "Node.js",
    category: "Backend Runtime",
    src: "/assets/img/skills/nodejs.svg",
    alt: "Node.js",
    description:
      "Building scalable REST APIs, asynchronous server applications, and backend microservices using Node.js.",
    tag: "Backend",
  },
  {
    id: "html5",
    name: "HTML5",
    category: "Structure & Markup",
    src: "/assets/img/skills/html5.svg",
    alt: "HTML5",
    description:
      "Structuring semantic, accessible, SEO-optimized, and clean web layouts adhering to modern web standards.",
    tag: "Markup",
  },
  {
    id: "css3",
    name: "CSS3",
    category: "Stylesheet & Animations",
    src: "/assets/img/skills/css-new.svg",
    alt: "CSS3",
    description:
      "Creating modern responsive layouts with Flexbox, CSS Grid, custom properties, and fluid keyframe animations.",
    tag: "Styling",
  },
  {
    id: "mysql",
    name: "MySQL",
    category: "Relational Database",
    src: "/assets/img/skills/mysql-wordmark.svg",
    alt: "MySQL",
    description:
      "Designing structured relational database schemas, handling complex queries, joins, and optimizing database performance.",
    tag: "Database",
  },
  {
    id: "cloudflare",
    name: "Cloudflare",
    category: "CDN & Security",
    src: "/assets/img/skills/cloudflare.svg",
    alt: "Cloudflare",
    description:
      "Deploying global CDN caching, SSL encryption, DNS routing, and DDoS protection for web infrastructure.",
    tag: "Security & CDN",
  },
  {
    id: "github",
    name: "GitHub",
    category: "Version Control",
    src: "/assets/img/skills/github-mono.svg",
    alt: "GitHub",
    description:
      "Managing source code version control, collaborative branch workflows, review processes, and continuous integration.",
    tag: "DevOps",
  },
  {
    id: "claude",
    name: "Claude AI",
    category: "AI Productivity",
    src: "/assets/img/skills/claude-ai.svg",
    alt: "Claude AI",
    description:
      "Leveraging advanced AI assistance for intelligent code refactoring, problem solving, debugging, and productivity enhancement.",
    tag: "AI Assistant",
  },
  {
    id: "nestjs",
    name: "NestJS",
    category: "Backend Framework",
    src: "/assets/img/skills/nestjs.svg",
    alt: "NestJS",
    description:
      "Building scalable, modular server-side applications with TypeScript-first architecture, dependency injection, and enterprise-grade design patterns.",
    tag: "Backend",
  },
  {
    id: "firebase",
    name: "Firebase",
    category: "Backend as a Service",
    src: "/assets/img/skills/firebase.svg",
    alt: "Firebase",
    description:
      "Implementing real-time databases, authentication, cloud functions, and hosting for rapid full-stack application development.",
    tag: "BaaS",
  },
  {
    id: "redis",
    name: "Redis",
    category: "Database",
    src: "/assets/img/skills/redis.svg",
    alt: "Redis",
    description:
      "Utilizing in-memory data structures for caching, session management, and high-performance pub/sub messaging systems.",
    tag: "Caching",
  },
  {
    id: "tanstack",
    name: "TanStack Query",
    category: "State Management",
    src: "/assets/img/skills/tanstack.svg",
    alt: "TanStack",
    description:
      "Managing server state, caching, and data synchronization efficiently with declarative queries and mutations in React.",
    tag: "Data Fetching",
  },
];

// Row 1 skills and Row 2 skills (with shifted order for rich visual variety)
const row1Skills = skillsData.slice(0, 7); // React, JavaScript, Tailwind, Node.js, HTML5
const row2Skills = skillsData.slice(7, 14); // CSS3, MySQL, Cloudflare, GitHub, Claude AI

// Quadruple the arrays to guarantee an unbroken seamless loop across any screen resolution
const marqueeRow1 = [
  ...row1Skills,
  ...row1Skills,
  ...row1Skills,
  ...row1Skills,
];
const marqueeRow2 = [
  ...row2Skills,
  ...row2Skills,
  ...row2Skills,
  ...row2Skills,
];

const TechMarquee = () => {
  const [selectedTech, setSelectedTech] = useState(null);

  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setSelectedTech(null);
      }
    };
    if (selectedTech) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [selectedTech]);

  return (
    <div className="tech-marquee-section">
      {/* Section Header */}
      <div className="tech-marquee-header" data-aos="fade-up">
        <div className="tech-marquee-badge">
          <i className="bi bi-cpu"></i>
          <span>Stack & Tools</span>
        </div>
        <h2 className="tech-marquee-title">Technologies I Use</h2>
        <p className="tech-marquee-subtitle">
          A curated ecosystem of technologies, frameworks, and tools I use to craft fast, scalable, and delightful web solutions.
        </p>
      </div>

      {/* Horizontal Scrolling Marquee Container (Left to Right) */}
      <div
        className="tech-marquee-container"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        {/* Row 1 - Left to Right */}
        <div className="tech-marquee-track track-ltr">
          {marqueeRow1.map((tech, idx) => (
            <div
              key={`row1-${tech.id}-${idx}`}
              className="tech-card"
              onClick={() => setSelectedTech(tech)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setSelectedTech(tech);
                }
              }}
              title={`Click to view details about ${tech.name}`}
            >
              <div className="tech-card-icon-wrapper">
                <img
                  src={tech.src}
                  alt={tech.alt}
                  className="tech-card-icon"
                  loading="lazy"
                />
              </div>
              <div className="tech-card-content">
                <span className="tech-card-name">{tech.name}</span>
                <span className="tech-card-category">{tech.category}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Row 2 - Left to Right (staggered speed for depth) */}
        <div className="tech-marquee-track track-ltr-fast">
          {marqueeRow2.map((tech, idx) => (
            <div
              key={`row2-${tech.id}-${idx}`}
              className="tech-card"
              onClick={() => setSelectedTech(tech)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setSelectedTech(tech);
                }
              }}
              title={`Click to view details about ${tech.name}`}
            >
              <div className="tech-card-icon-wrapper">
                <img
                  src={tech.src}
                  alt={tech.alt}
                  className="tech-card-icon"
                  loading="lazy"
                />
              </div>
              <div className="tech-card-content">
                <span className="tech-card-name">{tech.name}</span>
                <span className="tech-card-category">{tech.category}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Detail Modal */}
      {selectedTech && (
        <div
          className="tech-modal-overlay"
          onClick={() => setSelectedTech(null)}
          role="dialog"
          aria-modal="true"
          aria-label={selectedTech.name}
        >
          <div
            className="tech-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="tech-modal-close-btn"
              onClick={() => setSelectedTech(null)}
              aria-label="Close modal"
            >
              <i className="bi bi-x-lg"></i>
            </button>

            <div className="tech-modal-header">
              <img
                src={selectedTech.src}
                alt={selectedTech.alt}
                className="tech-modal-img"
              />
              <div className="tech-modal-title-group">
                <h3>{selectedTech.name}</h3>
                <span className="tech-modal-badge">{selectedTech.tag}</span>
              </div>
            </div>

            <p className="tech-modal-desc">{selectedTech.description}</p>

            <div className="tech-modal-footer">
              <button
                className="tech-modal-btn"
                onClick={() => setSelectedTech(null)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TechMarquee;
