import { useState, useEffect } from 'react';
import '../styles/Preloader.css'; 

const Preloader = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [counter, setCounter] = useState(0);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    let progress = 0;
    const interval = setInterval(() => {
      progress++;
      setCounter(progress);

      if (progress >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          setIsFadingOut(true);
          setTimeout(() => {
            setIsVisible(false);
          }, 2000);
        }, 300);
      }
    }, 30);

    return () => clearInterval(interval);
  }, []);

  if (!isVisible) return null;

  return (
    <div id="preloader" className={isFadingOut ? 'fade-out' : ''}>
      <div className="letters">
        {['M', 'U', 'S', 'Y', 'A'].map((letter, index) => (
          <div key={index} style={{ animationDelay: `${index * 0.1}s` }}>
            {letter}
          </div>
        ))}
      </div>
      <div className="counter" id="preloader-counter">{counter}%</div>
    </div>
  );
};

export default Preloader;