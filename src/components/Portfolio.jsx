import { useEffect, useState, useMemo } from "react";
import "../styles/masonry.css";

const Portfolio = () => {
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
        url: "https://semudahapp.web.app/",
        size: "large",
      },
      {
        id: 5,
        image: "/assets/img/portfolio/kishoot.webp",
        title: "Kishoot",
        stack: "Vite | ReactJS | TailwindCss | firebase | ThreeJS",
        description: "Designing and building the Kishoot website as a platform for showcasing motorcycle, rider, and street culture photography through a distinct visual narrative.",
        url: "https://semudahapp.web.app/",
        size: "large",
      },
      {
        id: 6,
        image: "/assets/img/portfolio/sima.webp",
        title: "SIMA",
        stack: "JavaScript | HTML5 | CSS3 | Vercel",
        description: "Developed the frontend of the SIMA (Asset Management System) website with a focus on optimal user interface (UI) and user experience (UX) design.",
        url: "https://semudahapp.web.app/",
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

  useEffect(() => {
    let lightboxInstance = null;
    const initLightbox = async () => {
      if (typeof window !== "undefined") {
        const GLightbox = (await import("glightbox")).default;
        lightboxInstance = GLightbox({ selector: ".glightbox" });
      }
    };

    initLightbox();

    return () => {
      if (lightboxInstance) {
        lightboxInstance.destroy();
      }
    };
  }, [columnCount]);

  // Distribute items round-robin across columns to keep chronological order & balanced heights
  const columns = useMemo(() => {
    const cols = Array.from({ length: columnCount }, () => []);
    portfolioData.forEach((item, index) => {
      cols[index % columnCount].push(item);
    });
    return cols;
  }, [portfolioData, columnCount]);

  return (
    <section id="portfolio-list" className="portfolio section py-3">
      <div className="container">
        {/* Pinterest-style Masonry Grid */}
        <div className="portfolio-masonry" data-aos="fade-up" data-aos-delay="100">
          {columns.map((colItems, colIndex) => (
            <div key={colIndex} className="portfolio-column">
              {colItems.map((item) => (
                <div key={item.id} className={`portfolio-item ${item.size || ""}`}>
                  <div
                    className="portfolio-card group"
                    onClick={() => window.open(item.url, "_blank")}
                    style={{ cursor: "pointer" }}
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-auto block"
                      loading="lazy"
                    />

                    <div className="overlay p-4 sm:p-6 flex flex-col justify-end">
                      <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
                      <p className="stack text-xs text-[var(--accent-color,#00d084)] font-medium mb-3">{item.stack}</p>
                      
                      {item.description && (
                        <p className="text-xs text-zinc-300 line-clamp-2 mb-3">
                          {item.description}
                        </p>
                      )}

                      <div className="actions flex items-center gap-2 mt-auto">
                        <a
                          href={item.image}
                          className="glightbox flex items-center justify-center size-8 rounded-full bg-white/20 hover:bg-white/40 text-white backdrop-blur-sm transition-colors"
                          title={item.title}
                          onClick={(e) => e.stopPropagation()}
                        >
                          <i className="bi bi-zoom-in text-sm"></i>
                        </a>
                        
                        <a
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[var(--accent-color,#00d084)] hover:bg-[var(--accent-color,#00d084)]/90 text-black text-xs font-bold transition-colors no-underline hover:no-underline"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <span>Live Demo</span>
                          <i className="bi bi-box-arrow-up-right text-[10px]"></i>
                        </a>
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