import { useEffect, useRef, useState } from "react";

const Skills = () => {
  const containerRef = useRef(null);
  const tooltipRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({ img: "", text: "" });

  const skillsData = [
    {
      src: "/assets/img/skills/html-logo.png",
      alt: "HTML",
      info: "<b>HTML - </b><br>Bahasa markup untuk membuat struktur website",
    },
    {
      src: "/assets/img/skills/js-logo.png",
      alt: "JavaScript",
      info: "<b>JavaScript - </b><br>Bahasa pemrograman interaktif untuk web",
    },
    {
      src: "/assets/img/skills/node-logo.png",
      alt: "Node.js",
      info: "<b>Node.js - </b><br>JavaScript runtime untuk backend",
    },
    {
      src: "/assets/img/skills/react-logo.png",
      alt: "React",
      info: "<b>React - </b><br>Library frontend untuk UI interaktif",
    },
    {
      src: "/assets/img/skills/tailwind-logo.png",
      alt: "Tailwind CSS",
      info: "<b>Tailwind CSS - </b><br>Framework CSS untuk desain cepat",
    },
    {
      src: "/assets/img/skills/cloudflare-logo.png",
      alt: "Cloudflare",
      info: "<b>Cloudflare - </b><br>CDN dan layanan keamanan untuk website",
    },
    {
      src: "/assets/img/skills/github-logo.png",
      alt: "GitHub",
      info: "<b>GitHub - </b><br>Platform untuk version control dan kolaborasi menggunakan Git",
    },
    {
      src: "/assets/img/skills/claude-logo.png",
      alt: "Claude AI",
      info: "<b>Claude AI - </b><br>AI assistant untuk coding, penulisan, dan produktivitas",
    },
    {
      src: "/assets/img/skills/css-logo.png",
      alt: "CSS",
      info: "<b>CSS - </b><br>Bahasa stylesheet untuk mendesain tampilan website",
    },
    {
      src: "/assets/img/skills/mysql-logo.png",
      alt: "MySQL",
      info: "<b>MySQL - </b><br>Sistem manajemen basis data relasional (RDBMS)",
    },
  ];

  const skillBlocks = [
    {
      title: "Frontend Development",
      level: "Advanced",
      description:
        "Developing responsive and interactive web interfaces with a strong focus on user experience.",
      progress: 88,
      delay: 150,
    },
    {
      title: "UI/UX Design",
      level: "Advanced",
      description:
        "Designing user interfaces and user flows using Figma with a user-centered design approach.",
      progress: 85,
      delay: 200,
    },
    {
      title: "HTML, CSS & Tailwind",
      level: "Expert",
      description:
        "Building clean, responsive, and consistent website layouts and styles using HTML, CSS, and Tailwind CSS.",
      progress: 92,
      delay: 250,
    },
    {
      title: "JavaScript",
      level: "Advanced",
      description:
        "Implementing dynamic interactions and frontend logic using modern JavaScript (ES6+).",
      progress: 80,
      delay: 150,
    },
    {
      title: "React.js",
      level: "Intermediate",
      description:
        "Building scalable and reusable UI components with React for modern web applications.",
      progress: 75,
      delay: 200,
    },
    {
      title: "AI-Assisted Coding",
      level: "Strong",
      description:
        "Enhancing development workflows using AI tools for debugging, optimization, and refactoring.",
      progress: 82,
      delay: 250,
    },
  ];

  const toolboxItems = [
    "Figma, Canva",
    "HTML, CSS, Tailwind CSS",
    "JavaScript, React.js",
    "Git, GitHub, Vite",
    "Visual Studio Code",
  ];

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 480);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    const loadAnimations = async () => {
      try {
        const gsap = await import("gsap");

        const images =
          containerRef.current?.querySelectorAll(".floating-image");
        const tooltip = tooltipRef.current;

        if (!images || images.length === 0) return;

        // Ambil dimensi kontainer. Fallback ke window jika container belum dirender dengan benar.
        const containerWidth = containerRef.current
          ? containerRef.current.offsetWidth
          : window.innerWidth;
        const containerHeight = containerRef.current
          ? containerRef.current.offsetHeight
          : window.innerHeight;

        // Hitung titik tengah kontainer
        const centerX = containerWidth / 2;
        const centerY = containerHeight / 2;

        // Mendefinisikan margin aman agar gambar tidak terlalu dekat tepi atau keluar
        const padding = 50; // Jarak minimal dari tepi kontainer
        const imageSize = 50; // Perkiraan ukuran gambar, sesuaikan jika gambar Anda lebih besar

        // PERUBAHAN UTAMA DI SINI:
        // Entrance animation - Mulai dari area tengah, dan menyebar lebih luas ke posisi acak.
        gsap.default.fromTo(
          images,
          // FROM state (Mulai dari Area Tengah yang Sedikit Acak)
          {
            opacity: 0,
            scale: 0.5,
            // Beri sedikit keacakan pada titik awal di sekitar tengah
            x: () => gsap.default.utils.random(centerX - 50, centerX + 50),
            y: () => gsap.default.utils.random(centerY - 50, centerY + 50),
          },
          // TO state (Berakhir di Posisi Acak yang Lebih Menyebar)
          {
            duration: 1.8, // Sedikit lebih lama untuk efek menyebar
            opacity: 1,
            scale: 1,
            // Tentukan posisi akhir secara acak di dalam rentang kontainer
            // Menggunakan padding untuk memastikan gambar tidak keluar batas
            x: () =>
              gsap.default.utils.random(
                padding,
                containerWidth - imageSize - padding,
              ),
            y: () =>
              gsap.default.utils.random(
                padding,
                containerHeight - imageSize - padding,
              ),
            ease: "power2.out", // Ease yang berbeda bisa memberi kesan menyebar yang lebih halus
            stagger: 0.15, // Sedikit lebih cepat untuk stagger agar tidak terlalu lambat menyebarnya
          },
        );

        images.forEach((img) => {
          // Floating animation (Pergerakan) - Rentang pergerakan acak yang lebih besar
          gsap.default.to(img, {
            x: "+=" + gsap.default.utils.random(-550, 350), // Rentang X lebih besar
            y: "+=" + gsap.default.utils.random(-500, 300), // Rentang Y lebih besar
            duration: gsap.default.utils.random(8, 16), // Durasi tetap atau sedikit lebih lama
            ease: "sine.inOut",
            repeat: -1,
            yoyo: true,
          });

          // Rotation animation - Rentang rotasi acak yang lebih besar
          gsap.default.to(img, {
            rotation: () => gsap.default.utils.random(-25, 25), // Rentang rotasi lebih besar
            duration: gsap.default.utils.random(5, 80),
            ease: "power1.inOut",
            repeat: -1,
            yoyo: true,
          });

          // Pulse scale effect - Rentang skala pulse sedikit lebih besar
          gsap.default.to(img, {
            scale: () => gsap.default.utils.random(0.8, 1.2), // Rentang skala pulse lebih besar
            duration: gsap.default.utils.random(3, 5),
            ease: "sine.inOut",
            repeat: -1,
            yoyo: true,
          });

          // Hover tooltip for desktop
          if (!isMobile) {
            const handleMouseEnter = (e) => {
              if (tooltip) {
                tooltip.innerHTML = img.dataset.info;
                const rect = img.getBoundingClientRect();
                tooltip.style.left = rect.left + rect.width / 2 + "px";
                tooltip.style.top = rect.top - 10 + "px";

                gsap.default.to(tooltip, {
                  opacity: 1,
                  y: -10,
                  duration: 0.3,
                  display: "block",
                });
              }
            };

            const handleMouseLeave = () => {
              if (tooltip) {
                gsap.default.to(tooltip, {
                  opacity: 0,
                  y: 0,
                  duration: 0.3,
                  onComplete: () => {
                    tooltip.style.display = "none";
                  },
                });
              }
            };

            img.addEventListener("mouseenter", handleMouseEnter);
            img.addEventListener("mouseleave", handleMouseLeave);

            return () => {
              img.removeEventListener("mouseenter", handleMouseEnter);
              img.removeEventListener("mouseleave", handleMouseLeave);
            };
          }
        });
      } catch (error) {
        console.warn("GSAP failed to load or animate:", error);
      }
    };

    loadAnimations();

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, [isMobile]);

  const handleImageClick = (skill) => {
    if (isMobile) {
      setModalContent({
        img: skill.src,
        text: skill.info,
      });
      setModalOpen(true);
    }
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleModalClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <section id="skills" className="skills section">
      {/* Floating Skills Icons Section */}
      <div className="skillIcon">
        <h1 className="lead">Technologies I Use</h1>
        {/* Pastikan #container memiliki position: relative dan tinggi yang cukup */}
        <div id="container" ref={containerRef}>
          {skillsData.map((skill, index) => (
            <img
              key={index}
              src={skill.src}
              alt={skill.alt}
              data-info={skill.info}
              className="floating-image"
              onClick={() => handleImageClick(skill)}
              style={{ opacity: 0, display: "block" }} // Pastikan initial state adalah tersembunyi
            />
          ))}

          <div id="tooltip" className="tooltip" ref={tooltipRef}></div>
        </div>
      </div>
      {/* Modal for Mobile */}
      {modalOpen && (
        <div
          className="skill-modal-overlay"
          id="skillModal"
          onClick={handleModalClick}
          style={{ display: "flex" }}
        >
          <div className="skill-modal" id="skillContent">
            <img
              id="modalImg"
              className="modal-img"
              src={modalContent.img}
              alt={modalContent.text.split(" - ")[0]}
            />
            <div
              id="modalText"
              dangerouslySetInnerHTML={{ __html: modalContent.text }}
            ></div>
            <button
              className="skill-modal-close"
              id="modalClose"
              onClick={closeModal}
              aria-label="Close modal"
            >
              Close
            </button>
          </div>
        </div>
      )}
      {/* Skills Progress Section */}
      <div className="container z-10" data-aos="fade-up" data-aos-delay="100">
        {/* First Row */}
        <div className="row gy-4">
          {skillBlocks.slice(0, 3).map((skill, index) => (
            <div
              key={index}
              className="col-lg-4"
              data-aos="fade-up"
              data-aos-delay={skill.delay}
            >
              <article className="skill-block skills-animation">
                <header className="d-flex align-items-center justify-content-between mb-2">
                  <h3 className="skill-title">{skill.title}</h3>
                  <span className="skill-badge">{skill.level}</span>
                </header>
                <p className="skill-desc">{skill.description}</p>
                <div className="progress slim">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: `${skill.progress}%` }}
                    aria-valuenow={skill.progress}
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </article>
            </div>
          ))}
        </div>

        {/* Second Row */}
        <div className="row gy-4 mt-1">
          {skillBlocks.slice(3).map((skill, index) => (
            <div
              key={index}
              className="col-lg-4"
              data-aos="fade-up"
              data-aos-delay={skill.delay}
            >
              <article className="skill-block skills-animation">
                <header className="d-flex align-items-center justify-content-between mb-2">
                  <h3 className="skill-title">{skill.title}</h3>
                  <span className="skill-badge">{skill.level}</span>
                </header>
                <p className="skill-desc">{skill.description}</p>
                <div className="progress slim">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: `${skill.progress}%` }}
                    aria-valuenow={skill.progress}
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
