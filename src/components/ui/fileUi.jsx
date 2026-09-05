import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const FileUi = ({
  navigateTo = '/portfolio',
  delay = 3500,
  onOpen,
  className = '',
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isRedirecting, setIsRedirecting] = useState(false);
  const navigate = useNavigate();

  const projectCards = [
    {
      id: 5,
      title: "Antarbang",
      tag: "Web • Platform",
      image: "/assets/img/portfolio/antarbang.webp",
      delay: "0s",
    },
    {
      id: 4,
      title: "Login Zeta",
      tag: "CSS • Auth UI",
      image: "/assets/img/portfolio/loginZeta.webp",
      delay: "0.03s",
    },
    {
      id: 3,
      title: "Paskibra Web",
      tag: "React • Portal",
      image: "/assets/img/portfolio/paskibsmas12-mockup.webp",
      delay: "0.07s",
    },
    {
      id: 2,
      title: "Hiraku App",
      tag: "Next.js • Mobile UI",
      image: "/assets/img/portfolio/Hiraku.webp",
      delay: "0.12s",
    },
    {
      id: 1,
      title: "SemudahApp",
      tag: "React • Web App",
      image: "/assets/img/portfolio/semudahApp-mockup.webp",
      delay: "0.18s",
    },
  ];

  const handleCardClick = (e) => {
    e.preventDefault();
    if (isOpen || isRedirecting) return;

    setIsOpen(true);
    setIsRedirecting(true);

    if (onOpen) onOpen();

    if (navigateTo) {
      setTimeout(() => {
        navigate(navigateTo);
      }, delay);
    }
  };

  const handleFileClick = (e) => {
    e.stopPropagation();
    if (!isOpen) {
      handleCardClick(e);
    } else {
      if (navigateTo) {
        navigate(navigateTo);0, 255, 157, 0.4
      }
    }
  };

  return (
    <StyledWrapper className={className}>
      <div 
        className={`folder-card ${isOpen ? 'is-open' : ''}`} 
        onClick={handleCardClick}
        role="button"
        tabIndex={0}
        aria-label="Interactive portfolio project folder"
      >
        <input
          type="checkbox"
          className="folder-toggle"
          checked={isOpen}
          readOnly
        />

        {/* 3D Folder Container */}
        <div className="folder-container">
          {/* Back of Folder */}
          <svg className="folder-back" viewBox="0 0 50 40" fill="none">
            <path d="M0 4C0 1.79086 1.79086 0 4 0H16.524C17.721 0 18.8415 0.54051 19.574 1.4673L22.426 5.0654C23.1585 5.99219 24.279 6.5327 25.476 6.5327H46C48.2091 6.5327 50 8.32356 50 10.5327V36C50 38.2091 48.2091 40 46 40H4C1.79086 40 0 38.2091 0 36V4Z" fill="#111827" stroke="rgba(255, 255, 255, 0.2)" strokeWidth={0.6} />
          </svg>
          
          {/* Project Image Cards */}
          {projectCards.map((card) => (
            <div 
              key={card.id} 
              className={`file file-${card.id}`} 
              onClick={handleFileClick}
              style={{ transitionDelay: card.delay }}
            >
              {/* Actual Project Mockup Image */}
              <img 
                src={card.image} 
                alt={card.title} 
                className="file-img"
                loading="lazy" 
              />
              
              {/* Gradient overlay for readability */}
              <div className="file-overlay" />
              
              {/* Shine sweep effect */}
              <div className="shine" />
              
              {/* Project Title and Tech Tag */}
              <div className="file-info">
                <div className="file-text">{card.title}</div>
              </div>
            </div>
          ))}

          {/* Front Flap of Folder */}
          <div className="folder-front-wrapper">
            <svg className="folder-front" viewBox="0 0 50 34" fill="none">
              <path d="M0 4C0 1.79086 1.79086 0 4 0H46C48.2091 0 50 1.79086 50 4V30C50 32.2091 48.2091 34 46 34H4C1.79086 34 0 32.2091 0 30V4Z" fill="rgba(0, 255, 128, 0.4)" stroke="rgba(255, 255, 255, 0.4)" strokeWidth={0.5} />
            </svg>
            <div className="folder-label" />
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  user-select: none;

  .folder-card {
    width: 240px;
    height: 180px;
    perspective: 1200px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    -webkit-tap-highlight-color: transparent;
    transition: transform 0.4s cubic-bezier(0.2, 0.8, 0.2, 1);
    outline: none;
  }

  .folder-card:hover {
    transform: scale(1.05);
  }

  .folder-toggle {
    display: none;
  }

  /* folder container */
  .folder-container {
    position: relative;
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    transition: transform 0.7s cubic-bezier(0.23, 1, 0.32, 1);
    backface-visibility: hidden;
    will-change: transform;
  }

  .folder-card.is-open .folder-container {
    transform: rotateX(15deg) rotateY(-8deg);
  }

  .folder-back {
    position: absolute;
    bottom: 0;
    width: 100%;
    filter: drop-shadow(0 20px 40px rgba(0, 0, 0, 0.7));
    border-radius: 8px;
  }

  .folder-front-wrapper {
    position: absolute;
    bottom: -7px;
    width: 100%;
    z-index: 90;
    transform-origin: bottom;
    transition: transform 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    border-radius: 12px;
    backdrop-filter: blur(12px);
  }

  .folder-label {
    position: absolute;
    top: 10px;
    left: 12px;
    width: 38px;
    height: 5px;
    background: rgba(255, 255, 255, 0.8);
    border-radius: 10px;
  }

  /* ------------------------------------------------------------- */
  /* CARDS EMERGENCE ANIMATION (WITH REAL PROJECT IMAGES)          */
  /* ------------------------------------------------------------- */
  .file {
    position: absolute;
    bottom: 6px;
    left: 8%;
    width: 84%;
    height: 115px;
    border-radius: 10px;
    overflow: hidden;
    box-shadow:
      inset 0 1px 1px rgba(255, 255, 255, 0.45),
      0 10px 25px rgba(0, 0, 0, 0.55);
    transition: all 0.75s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    z-index: 0;
    border: 1px solid rgba(255, 255, 255, 0.25);
    cursor: pointer;
    background: #18181b;
  }

  .file-img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top center;
    border-radius: 8px;
    transition: transform 0.4s ease;
  }

  .file-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.05) 0%,
      rgba(0, 0, 0, 0.45) 50%,
      rgba(9, 12, 19, 0.95) 100%
    );
    border-radius: 8px;
    pointer-events: none;
  }

  .file-1 { z-index: 25; }
  .file-2 { z-index: 24; }
  .file-3 { z-index: 23; }
  .file-4 { z-index: 22; }
  .file-5 { z-index: 21; }

  .shine {
    position: absolute;
    top: 0;
    left: -100%;
    width: 50%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.6),
      transparent
    );
    transform: skewX(-20deg);
    transition: none;
    z-index: 10;
  }

  .folder-card.is-open .folder-container .shine {
    left: 150%;
    transition: left 0.85s ease-in-out;
    transition-delay: 0.35s;
  }

  .file-info {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 8px 10px;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    z-index: 5;
  }

  .file-text {
    font-family: "Inter", sans-serif;
    font-size: 11px;
    color: #ffffff;
    font-weight: 800;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.8);
    opacity: 0;
    transform: translateY(5px);
    transition: all 0.35s ease 0.45s;
  }

  .folder-card.is-open .folder-container .file-text,
  .folder-card.is-open .folder-container .file-tag {
    opacity: 1;
    transform: translate(0);
  }

  /* When OPEN: Cards Spread Out in 3D fan effect */
  .folder-card.is-open .folder-container .folder-front-wrapper {
    transform: rotateX(-58deg);
  }

  .folder-card.is-open .folder-container .file-1 {
    transform: translateY(-92px) rotate(-11deg) translateX(-22px) translateZ(26px);
  }
  .folder-card.is-open .folder-container .file-2 {
    transform: translateY(-74px) rotate(9deg) translateX(24px) translateZ(16px);
  }
  .folder-card.is-open .folder-container .file-3 {
    transform: translateY(-56px) rotate(-15deg) translateX(-12px);
  }
  .folder-card.is-open .folder-container .file-4 {
    transform: translateY(-38px) rotate(13deg) translateX(16px);
  }
  .folder-card.is-open .folder-container .file-5 {
    transform: translateY(-18px) rotate(-6deg);
  }

  /* Hover when cards are already popped out */
  .folder-card.is-open .folder-container .file:hover {
    filter: brightness(1.15);
    z-index: 30;
  }

  .folder-card.is-open .folder-container .file:hover .file-img {
    transform: scale(1.08);
  }

  /* Status badge & Countdown bar */
  .status-container {
    width: 100%;
    max-width: 280px;
  }

  .status-badge {
    padding: 6px 14px;
    border-radius: 999px;
    font-size: 12px;
    font-weight: 500;
    background: rgba(24, 24, 27, 0.85);
    border: 1px solid rgba(63, 63, 70, 0.6);
    backdrop-filter: blur(8px);
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
  }

  .status-badge.before-open {
    flex-direction: row;
    gap: 8px;
    color: #a1a1aa;
  }

  .pulse-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: var(--accent-color, #00d084);
    animation: pulseDot 1.5s infinite;
  }

  @keyframes pulseDot {
    0% { transform: scale(1); opacity: 1; }
    50% { transform: scale(1.5); opacity: 0.5; }
    100% { transform: scale(1); opacity: 1; }
  }

  .progress-bar-track {
    width: 100%;
    height: 3px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 999px;
    overflow: hidden;
  }

  .progress-bar-fill {
    height: 100%;
    width: 0%;
    background: var(--accent-color, #00d084);
    border-radius: 999px;
    animation: fillProgress linear forwards;
  }

  @keyframes fillProgress {
    from { width: 0%; }
    to { width: 100%; }
  }

  @media (max-width: 576px) {
    .folder-card {
      width: 200px;
      height: 155px;
    }
  }
`;

export default FileUi;
