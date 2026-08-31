import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { ArrowUp } from 'lucide-react';

const TopBtn = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility, { passive: true });
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <StyledWrapper $isVisible={isVisible}>
      <button
        type="button"
        className="scroll-top-btn"
        aria-label="Scroll to top"
        onClick={scrollToTop}
      >
        <ArrowUp className="arrow-icon" size={20} />
      </button>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  position: fixed;
  bottom: 30px;
  right: 30px;
  z-index: 99;
  opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
  visibility: ${({ $isVisible }) => ($isVisible ? 'visible' : 'hidden')};
  transform: translateY(${({ $isVisible }) => ($isVisible ? '0' : '20px')});
  transition: all 0.4s ease-in-out;

  .scroll-top-btn {
    --spread: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 44px;
    height: 44px;
    background: #090c13;
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 50%;
    color: #ffffff;
    cursor: pointer;
    outline: none;
    box-shadow: -6px -6px var(--spread) 0px #00d084,
      0 -6px var(--spread) 0px #10b981, 
      6px -6px var(--spread) 0px #06b6d4,
      6px 0 var(--spread) 0px #3b82f6, 
      6px 6px var(--spread) 0px #ffffff,
      0 6px var(--spread) 0px #00d084, 
      -6px 6px var(--spread) 0px #000000;
    transition: transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease;

    &:hover {
      transform: translateY(-4px) scale(1.05);
      background: #000000;
      box-shadow: -8px -8px 18px 0px #00d084, 
        0 -8px 18px 0px #10b981,
        8px -8px 18px 0px #06b6d4, 
        8px 0 18px 0px #3b82f6,
        8px 8px 18px 0px #ffffff, 
        0 8px 18px 0px #00d084,
        -8px 8px 18px 0px #000000;
    }

    &:active {
      transform: scale(0.95);
    }
  }

  .arrow-icon {
    transition: transform 0.2s ease;
  }

  .scroll-top-btn:hover .arrow-icon {
    transform: translateY(-2px);
  }
`;

export default TopBtn;