import React from "react";

const LiquidBackground = () => {
  return (
    <div
      className="liquid-bg-container fixed inset-0 pointer-events-none overflow-hidden -z-10"
      aria-hidden="true"
    >
      {/* Liquid Ambient Orb 1 - Top Left / Emerald & Cyan */}
      <div className="liquid-orb liquid-orb-1" />

      {/* Liquid Ambient Orb 2 - Center Right / Violet & Indigo */}
      <div className="liquid-orb liquid-orb-2" />

      {/* Liquid Ambient Orb 3 - Bottom Left / Rose & Amber */}
      <div className="liquid-orb liquid-orb-3" />

      {/* Liquid Ambient Orb 4 - Bottom Center / Teal & Sky */}
      <div className="liquid-orb liquid-orb-4" />

      {/* Glass Grid / Noise overlay for depth */}
      <div className="liquid-glass-overlay" />

      <style>{`
        .liquid-bg-container {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          width: 100vw;
          height: 100vh;
          overflow: hidden;
          pointer-events: none;
          z-index: 0;
        }

        .liquid-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(90px);
          opacity: 0.45;
          will-change: transform, opacity;
          mix-blend-mode: normal;
          transition: opacity 0.5s ease;
        }

        .dark-mode .liquid-orb {
          opacity: 0.32;
          filter: blur(100px);
        }

        /* Orb 1: Emerald & Cyan */
        .liquid-orb-1 {
          width: 550px;
          height: 550px;
          top: -100px;
          left: -100px;
          background: radial-gradient(circle, rgba(0, 208, 132, 0.45) 0%, rgba(6, 182, 212, 0.25) 50%, transparent 70%);
          animation: floatOrb1 24s ease-in-out infinite alternate;
        }

        .dark-mode .liquid-orb-1 {
          background: radial-gradient(circle, rgba(0, 208, 132, 0.35) 0%, rgba(6, 182, 212, 0.18) 50%, transparent 75%);
        }

        /* Orb 2: Violet & Indigo */
        .liquid-orb-2 {
          width: 600px;
          height: 600px;
          top: 30%;
          right: -150px;
          background: radial-gradient(circle, rgba(139, 92, 246, 0.35) 0%, rgba(99, 102, 241, 0.2) 50%, transparent 70%);
          animation: floatOrb2 28s ease-in-out infinite alternate;
        }

        .dark-mode .liquid-orb-2 {
          background: radial-gradient(circle, rgba(139, 92, 246, 0.25) 0%, rgba(99, 102, 241, 0.15) 50%, transparent 75%);
        }

        /* Orb 3: Rose & Amber */
        .liquid-orb-3 {
          width: 500px;
          height: 500px;
          bottom: 10%;
          left: -100px;
          background: radial-gradient(circle, rgba(244, 63, 94, 0.25) 0%, rgba(251, 146, 60, 0.18) 50%, transparent 70%);
          animation: floatOrb3 22s ease-in-out infinite alternate;
        }

        .dark-mode .liquid-orb-3 {
          background: radial-gradient(circle, rgba(244, 63, 94, 0.18) 0%, rgba(251, 146, 60, 0.12) 50%, transparent 75%);
        }

        /* Orb 4: Teal & Sky */
        .liquid-orb-4 {
          width: 650px;
          height: 650px;
          bottom: -150px;
          right: 20%;
          background: radial-gradient(circle, rgba(20, 184, 166, 0.3) 0%, rgba(14, 165, 233, 0.2) 50%, transparent 70%);
          animation: floatOrb4 26s ease-in-out infinite alternate;
        }

        .dark-mode .liquid-orb-4 {
          background: radial-gradient(circle, rgba(20, 184, 166, 0.2) 0%, rgba(14, 165, 233, 0.12) 50%, transparent 75%);
        }

        .liquid-glass-overlay {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 50% 50%, transparent 0%, rgba(255, 255, 255, 0.15) 100%);
          pointer-events: none;
        }

        .dark-mode .liquid-glass-overlay {
          background: radial-gradient(circle at 50% 50%, transparent 0%, rgba(0, 0, 0, 0.25) 100%);
        }

        @keyframes floatOrb1 {
          0% { transform: translate(0px, 0px) scale(1); }
          50% { transform: translate(80px, 60px) scale(1.12); }
          100% { transform: translate(-40px, 100px) scale(0.95); }
        }

        @keyframes floatOrb2 {
          0% { transform: translate(0px, 0px) scale(1); }
          50% { transform: translate(-90px, 80px) scale(1.08); }
          100% { transform: translate(40px, -60px) scale(0.92); }
        }

        @keyframes floatOrb3 {
          0% { transform: translate(0px, 0px) scale(1); }
          50% { transform: translate(70px, -80px) scale(1.1); }
          100% { transform: translate(-30px, 50px) scale(0.9); }
        }

        @keyframes floatOrb4 {
          0% { transform: translate(0px, 0px) scale(1); }
          50% { transform: translate(-80px, -50px) scale(1.15); }
          100% { transform: translate(60px, 40px) scale(0.95); }
        }
      `}</style>
    </div>
  );
};

export default LiquidBackground;
