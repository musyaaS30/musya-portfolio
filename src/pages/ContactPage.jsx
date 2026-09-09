import React, { useEffect, useRef } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ScrollTop from "../components/ScrollTop";
import CustomCursor from "../components/CustomCursor";

const ContactPage = () => {
  const cardRef = useRef(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  // 3D Tilt Effect on mouse move
  const handleCardMouseMove = (e) => {
    if (!cardRef.current) return;
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -9;
    const rotateY = ((x - centerX) / centerX) * 9;

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
  };

  const handleCardMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transform =
      "rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
  };

  const socialLinks = [
    {
      name: "Gmail",
      url: "mailto:mussforrttk@gmail.com",
      svg: (
        <svg
          className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8"
          viewBox="0 0 24 24"
          fill="currentColor"
          style={{ fill: "currentColor" }}
        >
          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
        </svg>
      ),
    },
    {
      name: "Facebook",
      url: "https://www.facebook.com/share/1KtsbCGuYP/",
      svg: (
        <svg
          className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8"
          viewBox="0 0 24 24"
          fill="currentColor"
          style={{ fill: "currentColor" }}
        >
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/musyahadat-545989343",
      svg: (
        <svg
          className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8"
          viewBox="0 0 24 24"
          fill="currentColor"
          style={{ fill: "currentColor" }}
        >
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
        </svg>
      ),
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/musyaa_3?igsh=MXFkMHh2empvbzRnbA==",
      svg: (
        <svg
          className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8"
          viewBox="0 0 24 24"
          fill="currentColor"
          style={{ fill: "currentColor" }}
        >
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      ),
    },
    {
      name: "GitHub",
      url: "https://github.com/musyaaS30",
      svg: (
        <svg
          className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8"
          viewBox="0 0 24 24"
          fill="currentColor"
          style={{ fill: "currentColor" }}
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
          />
        </svg>
      ),
    },
  ];

  return (
    <div className="contact-page min-h-screen flex flex-col bg-[var(--background-color)] text-[var(--default-color)]">
      <CustomCursor />
      <Header />

      <main className="main flex-grow pt-24 pb-16">
        {/* Page Hero Header */}
        <section className="contact-hero-banner py-8 sm:py-12 px-4">
          <div className="container mx-auto" data-aos="fade-up">

            {/* Title Section */}
            <div className="max-w-2xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 mb-3">
                <span
                  className="size-2 rounded-full"
                  style={{ background: "var(--accent-color)" }}
                />
                <span className="font-semibold uppercase tracking-wider text-xs text-[var(--default-color)]">
                  Contact & Socials
                </span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4 text-[var(--heading-color)] font-[var(--heading-font)]">
                Let's Connect
              </h1>

              <p className="text-sm sm:text-base text-[var(--default-color)] opacity-85 leading-relaxed">
                Reach out directly through any of the platforms below or send a
                direct email. Always open to new opportunities and collaborations.
              </p>
            </div>
          </div>
        </section>

        {/* Liquid Glass Showcase Section */}
        <section className="relative min-h-[580px] sm:min-h-[680px] md:min-h-[760px] py-20 sm:py-28 md:py-36 px-4 flex items-center justify-center">
          {/* Card & Spheres Stage Container */}
          <div
            className="relative flex items-center justify-center select-none my-auto"
            style={{ perspective: "1200px" }}
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            {/* 1. Bola Merah-Oranye (Kiri Atas) yang Bergerak */}
            <div
              className="absolute -top-10 -left-8 sm:-top-14 sm:-left-12 md:-top-16 md:-left-16 
                         w-36 h-36 sm:w-48 sm:h-48 md:w-56 md:h-56 
                         rounded-full sphere-green-gradient animate-sphere-red pointer-events-none z-0"
              aria-hidden="true"
            />

            {/* 2. Bola Biru Royal (Kanan Bawah) yang Bergerak */}
            <div
              className="absolute -bottom-10 -right-8 sm:-bottom-14 sm:-right-12 md:-bottom-16 md:-right-16 
                         w-40 h-40 sm:w-52 sm:h-52 md:w-60 md:h-60 
                         rounded-full sphere-blue-gradient animate-sphere-blue pointer-events-none z-0"
              aria-hidden="true"
            />

            {/* 3. Kartu Liquid Glass Utama */}
            <div
              ref={cardRef}
              onMouseMove={handleCardMouseMove}
              onMouseLeave={handleCardMouseLeave}
              className="contact-glass-card relative z-10 
                         w-[320px] sm:w-[460px] md:w-[530px] lg:w-[560px] 
                         aspect-[1.58/1] rounded-[28px] sm:rounded-[36px] overflow-hidden 
                         p-6 sm:p-9 flex flex-col justify-between
                         transition-transform duration-200 ease-out cursor-pointer"
            >
              {/* Watermark Garis Geometris Melengkung (Khas Kartu Referensi) */}
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none opacity-30 dark:opacity-15 text-white stroke-current"
                viewBox="0 0 500 316"
                fill="none"
                strokeWidth="12"
                strokeLinecap="round"
                aria-hidden="true"
              >
                <circle cx="190" cy="158" r="135" strokeOpacity="0.7" />
                <path d="M 55 158 H 325" strokeOpacity="0.5" />
                <path
                  d="M 190 23 C 130 68, 130 248, 190 293"
                  strokeOpacity="0.7"
                />
                <path
                  d="M 190 23 C 250 68, 250 248, 190 293"
                  strokeOpacity="0.7"
                />
                <path d="M 80 85 Q 190 158 300 231" strokeOpacity="0.4" />
              </svg>

              {/* Baris Atas: Contactless NFC Wave & Direct Status */}
              <div className="relative z-10 flex items-center justify-between">
                <span className="text-[10px] sm:text-xs font-bold tracking-widest uppercase text-neutral-700 dark:text-neutral-200 font-mono">
                  CONTACT PASSPORT
                </span>

                {/* NFC Wave Symbol */}
                <div
                  className="flex items-center text-neutral-300 opacity-90"
                  title="Contactless Signal"
                >
                  <svg
                    className="w-6 h-6 sm:w-8 sm:h-8"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  >
                    <path d="M8.5 16.5a5 5 0 0 1 0-9" />
                    <path d="M12 19a8.5 8.5 0 0 0 0-14" />
                    <path d="M15.5 21.5a12 12 0 0 0 0-19" />
                  </svg>
                </div>
              </div>

              {/* Baris Tengah: Icon-icon abu-abu tanpa background (Gmail, Facebook, LinkedIn, Instagram, GitHub) */}
              <div className="relative z-10 my-auto py-2">
                <div className="flex items-center justify-between sm:justify-around px-2 sm:px-6">
                  {socialLinks.map((item, idx) => (
                    <a
                      key={idx}
                      href={item.url}
                      target={item.name === "Gmail" ? "_self" : "_blank"}
                      rel="noopener noreferrer"
                      className="group/icon relative p-1.5 sm:p-2 !text-neutral-400 hover:!text-neutral-900 !no-underline transition-all duration-200 ease-out hover:scale-125 hover:-translate-y-1 drop-shadow-[0_2px_5px_rgba(0,0,0,0.12)] cursor-pointer"
                      style={{ color: "#6b7280", textDecoration: "none" }}
                      title={item.name}
                      aria-label={item.name}
                    >
                      {item.svg}
                      {/* Tooltip on hover */}
                      <span className="absolute -bottom-7 left-1/2 -translate-x-1/2 px-2 py-0.5 
                                       text-[10px] font-bold rounded-md bg-neutral-900 text-white 
                                       opacity-0 group-hover/icon:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-md">
                        {item.name}
                      </span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Baris Bawah: Info Pemilik & Tulisan "Musya" (Pengganti VISA) */}
              <div className="relative z-10 flex items-end justify-between">
                <div>
                  <span className="text-[9px] sm:text-[11px] font-mono uppercase tracking-widest text-neutral-600 dark:text-neutral-400 font-bold block">
                    CARDHOLDER
                  </span>
                  <span className="text-xs sm:text-sm md:text-base font-black text-neutral-300 tracking-wider font-mono">
                    MUSYAHADAT
                  </span>
                </div>

                {/* Tulisan Musya pengganti logo VISA */}
                <div className="text-right select-none">
                  <span className="text-2xl sm:text-3xl md:text-4xl font-black italic tracking-wider text-neutral-300 font-sans drop-shadow-sm">
                    Musya
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        
      </main>

      <Footer />
      <ScrollTop />
    </div>
  );
};

export default ContactPage;
