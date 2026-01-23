// src/pages/NotFound.jsx (Enhanced)
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/NotFound.css";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.log("404 - Page not found:", location.pathname);
  }, [location]);

  // Enhanced particle generator with random properties
  const renderParticles = () => {
    const particles = [];
    const animations = ["float", "floatReverse", "float2", "floatReverse2"];

    // Generate all 80 particles with random properties
    for (let i = 1; i <= 80; i++) {
      const isFour = i <= 40; // First 40 are "4", next 40 are "0"
      const size = Math.floor(Math.random() * 20) + 10;
      const blur = i * 0.02;
      const speed = Math.floor(Math.random() * 20) + 20;
      const top = ((Math.random() * 100) / (100 + size / 8)) * 100;
      const left = ((Math.random() * 100) / (100 + size / 10)) * 100;
      const anim = animations[Math.floor(Math.random() * animations.length)];

      particles.push(
        <span
          key={i}
          className="particle"
          style={{
            top: `${top}%`,
            left: `${left}%`,
            fontSize: `${size}px`,
            filter: `blur(${blur}px)`,
            animation: `${speed}s ${anim} infinite`,
          }}
        >
          {isFour ? "4" : "0"}
        </span>
      );
    }

    return particles;
  };

  return (
    <div className="not-found-container">
      {/* Floating Particles Background */}
      {renderParticles()}

      {/* Content */}
      <article className="not-found-content">
        <p>Pilot, we’re off course!</p>
        <p>
          <strong>404</strong>: Unknown sector detected.
        </p>
        <p>
          <Link to="/" className="not-found-button">
            Engage hyperdrive → Return to Earth
          </Link>
        </p>

        {/* Optional: Show current path */}
        <div
          style={{
            marginTop: "1rem",
            fontSize: "0.9rem",
            opacity: 0.7,
            fontFamily: "monospace",
          }}
        >
          You tried to access:{" "}
          <code className="url-path">{location.pathname}</code>
        </div>
      </article>
    </div>
  );
};

export default NotFound;
