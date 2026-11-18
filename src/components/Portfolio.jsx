import { useEffect, useState, useMemo, useRef } from "react";
import "glightbox/dist/css/glightbox.min.css"; // 1. Wajib import CSS GLightbox
import "../styles/masonry.css";

const Portfolio = () => {
  const lightboxRef = useRef(null); // 2. Simpan instance GLightbox di useRef

  const portfolioData = useMemo(
    () => [
      {
        id: 1,
        image: "/assets/img/portfolio/semudahApp-mockup.webp",
        title: "SemudahApp",
        stack: "React | React Router | Firebase | Cloudflare | TailwindCSS",
        description: "A comprehensive modern web application built for seamless productivity and utility services.",
        url: "https://semudahapp.web.app/",
        size: "large",
      },
      {
        id: 2,
        image: "/assets/img/portfolio/Hiraku.webp",
        title: "Hiraku",
        stack: "NextJS | Framer Motion | Firebase | TailwindCSS | Lenis",
        description: "Interactive mobile-responsive portfolio application with fluid kinetic typography and micro-interactions.",
        url: "https://hiraku-ca293.web.app/",
        size: "tall",
      },
      {
        id: 3,
        image: "/assets/img/portfolio/paskibsmas12-mockup.webp",
        title: "Paskibra Smas 12",
        stack: "React | React Router | AOS | Vercel | TailwindCSS",
        description: "Official school organization web portal featuring dynamic event schedules and recruitment modules.",
        url: "https://paskib-smas12.vercel.app/",
        size: "tall",
      },
      {
        id: 4,
        image: "/assets/img/portfolio/loginZeta.webp",
        title: "Login & Register UI Design",
        stack: "JavaScript | HTML5 | CSS3 | Vercel",
        description: "Clean, responsive authentication interface design with fluid feedback and modern input styling.",
        url: null,
        size: "large",
      },
      {
        id: 5,
        image: "/assets/img/portfolio/kishoot.webp",
        title: "Kishoot",
        stack: "Vite | ReactJS | TailwindCss | firebase | ThreeJS",
        description: "Designing and building the Kishoot website as a platform for showcasing motorcycle, rider, and street culture photography through a distinct visual narrative.",
        url: "https://kishoot.web.id/",
        size: "large",
      },
      {
        id: 6,
        image: "/assets/img/portfolio/sima.webp",
        title: "SIMA",
        stack: "JavaScript | HTML5 | CSS3 | Vercel",
        description: "Developed the frontend of the SIMA (Asset Management System) website with a focus on optimal user interface (UI) and user experience (UX) design.",
        url: null,
        size: "large",
      },
    ],
    []
  );

  const [columnCount, setColumnCount] = useState(() => {
    if (typeof window !== "undefined") {
      if (window.innerWidth < 640) return 1;
      if (window.innerWidth < 1024) return 2;
    }
    return 3;
  });

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setColumnCount(1);
      } else if (width < 1024) {
        setColumnCount(2);
      } else {
        setColumnCount(3);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // 3. Inisialisasi GLightbox menggunakan array elements (jauh lebih stabil di React)
  useEffect(() => {
    let isMounted = true;

    const initLightbox = async () => {
      if (typeof window !== "undefined") {
        const GLightbox = (await import("glightbox")).default;
        if (!isMounted) return;

        lightboxRef.current = GLightbox({
          elements: portfolioData.map((item) => ({
            href: item.image,
            type: "image",
            title: item.title,
            description: item.description,
          })),
          touchNavigation: true,
          loop: true,
        });
      }
    };

    initLightbox();

    return () => {
      isMounted = false;
      if (lightboxRef.current) {
        lightboxRef.current.destroy();
      }
    };
  }, [portfolioData]);

  // Fungsi helper untuk membuka lightbox berdasarkan ID item
  const openLightbox = (e, itemId) => {
    e.stopPropagation();
    const index = portfolioData.findIndex((p) => p.id === itemId);
    if (lightboxRef.current && index !== -1) {
      lightboxRef.current.openAt(index);
    }
  };

  // Distribute items round-robin across columns
  const columns = useMemo(() => {
    const cols = Array.from({ length: columnCount }, () => []);
    portfolioData.forEach((item, index) => {
      cols[index % columnCount].push(item);
    });
    return cols;
  }, [portfolioData, columnCount]);

  const handleCardClick = (e, item) => {
    if (item.url) {
      window.open(item.url, "_blank", "noopener,noreferrer");
    } else {
      openLightbox(e, item.id);
    }
  };

  return (
    <section id="portfolio-list" className="portfolio section py-3">
      <div className="container">
        <div className="portfolio-masonry" data-aos="fade-up" data-aos-delay="100">
          {columns.map((colItems, colIndex) => (
            <div key={colIndex} className="portfolio-column">
              {colItems.map((item) => (
                <div key={item.id} className={`portfolio-item ${item.size || ""}`}>
                  <div
                    className="portfolio-card group"
                    onClick={(e) => handleCardClick(e, item)}
                    style={{ cursor: "pointer" }}
                    title={item.url ? `Visit ${item.title}` : `Preview ${item.title}`}
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-auto block"
                      loading="lazy"
                    />

                    <div className="overlay p-4 sm:p-6 flex flex-col justify-end">
                      <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
                      <p className="stack text-xs text-[var(--accent-color,#00d084)] font-medium mb-3">
                        {item.stack}
                      </p>

                      {item.description && (
                        <p className="text-xs text-zinc-300 line-clamp-2 mb-3">
                          {item.description}
                        </p>
                      )}

                      <div className="actions flex items-center gap-2.5 mt-auto pt-2">
  {/* 1. Tombol Quick Zoom (Hanya muncul jika ada Live Demo agar fungsi tidak ganda) */}
  {item.url && (
    <button
      type="button"
      onClick={(e) => openLightbox(e, item.id)}
      className="group/zoom relative flex items-center justify-center w-9 h-9 rounded-full bg-zinc-950/60 hover:bg-white text-zinc-200 hover:text-zinc-950 border border-white/15 hover:border-white ring-1 ring-inset ring-white/10 backdrop-blur-md transition-all duration-300 ease-out hover:scale-105 active:scale-95 cursor-pointer shadow-lg"
      title={`Zoom ${item.title}`}
      aria-label={`Zoom ${item.title}`}
    >
      <i className="bi bi-zoom-in text-sm transition-transform duration-300 group-hover/zoom:scale-110"></i>
    </button>
  )}

  {/* 2. Tombol Utama (Live Demo atau Preview UI) */}
  {item.url ? (
    <a
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group/btn relative inline-flex items-center justify-center gap-2 h-9 px-4.5 rounded-full bg-[var(--accent-color,#00d084)] hover:brightness-110 text-zinc-950 text-xs font-bold tracking-wide ring-1 ring-inset ring-white/40 transition-all duration-300 ease-out shadow-[0_0_20px_-4px_rgba(0,208,132,0.5)] hover:shadow-[0_0_25px_-2px_rgba(0,208,132,0.75)] hover:-translate-y-0.5 active:translate-y-0 active:scale-95 no-underline"
      onClick={(e) => e.stopPropagation()}
    >
      <span>Live Demo</span>
      <i className="bi bi-arrow-up-right text-xs transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"></i>
    </a>
  ) : (
    <button
      type="button"
      onClick={(e) => openLightbox(e, item.id)}
      className="group/btn relative inline-flex items-center justify-center gap-2 h-9 px-4.5 rounded-full bg-zinc-900/80 hover:bg-zinc-800 text-zinc-100 hover:text-white text-xs font-semibold tracking-wide border border-white/15 hover:border-[var(--accent-color,#00d084)]/60 ring-1 ring-inset ring-white/10 backdrop-blur-md transition-all duration-300 ease-out shadow-lg hover:shadow-[0_0_20px_-5px_rgba(0,208,132,0.3)] hover:-translate-y-0.5 active:translate-y-0 active:scale-95 cursor-pointer"
    >
      <i className="bi bi-eye text-xs text-[var(--accent-color,#00d084)] transition-transform duration-300 group-hover/btn:scale-110"></i>
      <span>Preview UI</span>
    </button>
  )}
</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;