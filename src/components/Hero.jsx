"use client";
import { useState, useEffect, useRef } from "react";
import { MapPin, Clock, ArrowUpRight } from "lucide-react";

const Hero = () => {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateJakartaTime = () => {
      try {
        const now = new Date();
        const timeStr = new Intl.DateTimeFormat("en-US", {
          timeZone: "Asia/Jakarta",
          hour: "numeric",
          minute: "2-digit",
          hour12: true,
        }).format(now);
        setCurrentTime(`${timeStr} GMT+7`);
      } catch {
        setCurrentTime("11:20 AM GMT+7");
      }
    };

    updateJakartaTime();
    const timer = setInterval(updateJakartaTime, 1000);
    return () => clearInterval(timer);
  }, []);

  const cardRef = useRef(null);
  const glareRef = useRef(null);
  const imgRef = useRef(null);

  const handleCardMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    const rotateX = (-y / (rect.height / 2)) * 8;
    const rotateY = (x / (rect.width / 2)) * 8;

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
    if (imgRef.current) {
      imgRef.current.style.transform = `scale(1.12) translate(${x * -0.03}px, ${y * -0.03}px)`;
    }
    if (glareRef.current) {
      glareRef.current.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px) scale(1.1)`;
    }
  };

  const handleCardMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = "rotateX(0deg) rotateY(0deg) scale(1)";
    if (imgRef.current) {
      imgRef.current.style.transform = "scale(1.1) translate(0px, 0px)";
    }
    if (glareRef.current) {
      glareRef.current.style.transform = "translate(0px, 0px) scale(1)";
    }
  };

  const handleGetInTouch = (e) => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      e.preventDefault();
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="hero hero-liquid-container relative w-full min-h-[40vh] flex flex-col justify-between overflow-hidden pt-20 sm:pt-24 md:pt-28 pb-0 bg-neutral-50 dark:bg-neutral-950 text-neutral-900"
    >
      {/* SVG Filter untuk Distorsi Cair Realistis */}
      <svg className="hidden pointer-events-none" width="0" height="0" aria-hidden="true">
        <defs>
          <filter id="liquid-lens" x="-20%" y="-20%" width="140%" height="140%">
            <feTurbulence type="fractalNoise" baseFrequency="0.015 0.03" numOctaves="2" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="18" xChannelSelector="R" yChannelSelector="G" />
          </filter>
        </defs>
      </svg>

      {/* Main Content Area */}
      <div className="container mx-auto px-6 sm:px-8 md:px-12 flex-1 flex items-center justify-center relative z-10 py-6 md:py-8">
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 md:gap-10"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {/* Ultra Liquid Glass Profile Card */}
          <div className="relative z-10 shrink-0 select-none" style={{ perspective: "1200px" }}>
            {/* Ambient Light Studio Belakang */}
            <div className="absolute -inset-4 sm:-inset-6 pointer-events-none flex items-center justify-center -z-10">
              <div className="w-[170px] h-[170px] sm:w-[230px] sm:h-[230px] bg-gradient-to-tr from-amber-200/40 via-rose-100/30 to-sky-200/40 rounded-full blur-[35px] sm:blur-[50px]" />
            </div>

            {/* Profile Card Utama */}
            <div
              ref={cardRef}
              onMouseMove={handleCardMouseMove}
              onMouseLeave={handleCardMouseLeave}
              className="relative w-[150px] sm:w-[175px] md:w-[200px] lg:w-[230px] aspect-square rounded-[24px] sm:rounded-[28px] lg:rounded-[32px] overflow-hidden 
                     shadow-[0_20px_50px_-12px_rgba(40,30,20,0.25),0_10px_20px_-8px_rgba(0,0,0,0.12)]
                     border border-white/80 dark:border-white/30 transition-transform duration-200 ease-out cursor-pointer"
            >
              {/* 1. Foto Profil */}
              <img
                ref={imgRef}
                src="/assets/img/profile/profile2.jpg"
                alt="Musyahadat Safitrah"
                className="absolute inset-0 w-full h-full object-cover pointer-events-none scale-105 transition-transform duration-300 ease-out"
                onError={(e) => {
                  if (!e.target.dataset.fallback) {
                    e.target.dataset.fallback = "true";
                    e.target.src = "/assets/img/profile/profile2.jpg";
                  }
                }}
              />

              {/* 2. Distorsi Melengkung Kaca Cair di Bagian Bawah */}
              <div className="absolute -bottom-8 -left-8 -right-8 h-28 sm:h-32 lens-distortion opacity-70 pointer-events-none bg-gradient-to-t from-amber-400/25 via-white/20 to-transparent" />

              {/* 3. Liquid Rim Glow Pekat (Pendaran cairan hangat khas Midjourney) */}
              <div className="absolute -bottom-6 -left-6 -right-6 h-24 sm:h-28 liquid-caustic-glow pointer-events-none" />

              {/* 4. Gloss Sheen Overlay (Pantulan kaca mengilap di seluruh kartu) */}
              <div
                ref={glareRef}
                className="absolute inset-0 gloss-sheen pointer-events-none transition-transform duration-150 ease-out"
              />

              {/* 5. Tepi Refraksi Prisma Kaca */}
              <div className="absolute inset-0 rounded-[24px] sm:rounded-[28px] lg:rounded-[32px] glass-refraction-rim pointer-events-none" />

              {/* 6. Teks Langsung Berwarna Putih (Tanpa Kapsul) */}
              <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 pb-2 sm:pb-3 text-center z-10 flex flex-col items-center pointer-events-none">
                <p className="text-white text-[9px] sm:text-[11px] font-medium mt-0.5 tracking-normal opacity-95 drop-shadow-[0_2px_8px_rgba(0,0,0,0.55)]">
                  {/* Software Engineer */}
                </p>
              </div>
            </div>
          </div>

          {/* Name */}
          <div className="text-center sm:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-8xl lg:text-8xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50 m-0 select-none">
              Halo I'm Musyahadat
            </h1>
          </div>
        </div>
      </div>

      {/* Bottom Status / Info Bar */}
      <div
        className="hero-status-bar w-full relative z-10 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md md:backdrop-blur-xl border-t border-neutral-200 dark:border-neutral-800 shadow-sm"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <div className="container mx-auto px-6 sm:px-8 md:px-12 py-3 sm:py-3.5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs sm:text-sm tracking-wider uppercase font-mono">
          {/* Left Cluster */}
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2.5 sm:gap-3.5">
            <div className="inline-flex items-center gap-2 text-neutral-600 font-semibold">
              <MapPin className="w-3.5 h-3.5 text-neutral-500 shrink-0 stroke-[2]" />
              <span>JAKARTA, INDONESIA</span>
            </div>

            <span className="text-neutral-400 dark:text-neutral-600 select-none hidden sm:inline">
              /
            </span>

            <div className="inline-flex items-center gap-2 text-neutral-600 font-semibold">
              <Clock className="w-3.5 h-3.5 text-neutral-500 shrink-0 stroke-[2]" />
              <span>{currentTime || "11:20 AM GMT+7"}</span>
            </div>
          </div>

          {/* Right Cluster */}
          <div className="flex flex-wrap items-center justify-center sm:justify-end gap-3 sm:gap-4">
            <div className="flex items-center gap-3">
              {/* GitHub */}
              <a
                href="https://github.com/musyaaS30"
                target="_blank"
                rel="noopener noreferrer"
                className="!text-black hover:opacity-70 transition-opacity p-1 rounded hover:bg-black/5"
                aria-label="GitHub"
                title="GitHub"
              >
                <svg className="w-4 h-4 fill-current text-black" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/musyahadat-545989343"
                target="_blank"
                rel="noopener noreferrer"
                className="!text-black hover:opacity-70 transition-opacity p-1 rounded hover:bg-black/5"
                aria-label="LinkedIn"
                title="LinkedIn"
              >
                <svg className="w-3.5 h-3.5 fill-current text-black" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                </svg>
              </a>

              {/* X */}
              <a
                href="https://x.com/musyaaS30"
                target="_blank"
                rel="noopener noreferrer"
                className="!text-black hover:opacity-70 transition-opacity p-1 rounded hover:bg-black/5"
                aria-label="X (Twitter)"
                title="X (Twitter)"
              >
                <svg className="w-3.5 h-3.5 fill-current text-black" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>

            <span className="text-neutral-400 select-none hidden sm:inline">
              /
            </span>

            {/* Action CTA */}
            <a
              href="mailto:mussforrttk@gmail.com"
              onClick={handleGetInTouch}
              className="inline-flex items-center gap-1.5 !text-black hover:opacity-70 transition-opacity group !no-underline font-bold cursor-pointer"
            >
              <span>GET IN TOUCH</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 stroke-[2] text-black" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;