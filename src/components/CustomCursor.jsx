import { useEffect, useRef } from 'react';
import '../styles/customCursor.css';

const CustomCursor = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    let pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    let target = { x: pos.x, y: pos.y };
    const ease = 0.38;

    // Animation loop
    const rafLoop = () => {
      pos.x += (target.x - pos.x) * ease;
      pos.y += (target.y - pos.y) * ease;
      cursor.style.transform = `translate(${pos.x}px, ${pos.y}px) translate(-50%, -50%)`;
      requestAnimationFrame(rafLoop);
    };

    requestAnimationFrame(rafLoop);

    // Mouse move
    const handleMouseMove = (e) => {
      target.x = e.clientX;
      target.y = e.clientY;
      cursor.style.opacity = '1';
    };

    // Mouse leave/enter
    const handleMouseLeave = () => { cursor.style.opacity = '0'; };
    const handleMouseEnter = () => { cursor.style.opacity = '1'; };

    // Hover effects
    const handleMouseEnterElement = () => cursor.classList.add('hover');
    const handleMouseLeaveElement = () => cursor.classList.remove('hover');

    // Click effects
    const handleMouseDown = () => {
      cursor.style.transform += ' scale(0.92)';
      cursor.style.transition = 'transform 120ms cubic-bezier(.2,.9,.3,1)';
    };
    
    const handleMouseUp = () => {
      cursor.style.transition = 'transform 180ms cubic-bezier(.2,.9,.3,1)';
    };

    // Add event listeners
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('mouseenter', handleMouseEnter);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    // Add hover effects to interactive elements
    const interactors = ['a', 'button', 'input', 'textarea', 'select', '.hover-target'];
    interactors.forEach(selector => {
      document.querySelectorAll(selector).forEach(el => {
        el.addEventListener('mouseenter', handleMouseEnterElement);
        el.addEventListener('mouseleave', handleMouseLeaveElement);
      });
    });

    // Handle resize
    const handleResize = () => {
      pos.x = target.x = window.innerWidth / 2;
      pos.y = target.y = window.innerHeight / 2;
    };
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('mouseenter', handleMouseEnter);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('resize', handleResize);

      // Remove hover effects
      interactors.forEach(selector => {
        document.querySelectorAll(selector).forEach(el => {
          el.removeEventListener('mouseenter', handleMouseEnterElement);
          el.removeEventListener('mouseleave', handleMouseLeaveElement);
        });
      });
    };
  }, []);

  return (
    <div 
      id="cursor-filter" 
      ref={cursorRef}
      className="custom-cursor"
      aria-hidden="true"
    />
  );
};

export default CustomCursor;