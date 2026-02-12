import { useState, useEffect } from "react";
import "../styles/masonry.css";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("*");
  const [portfolioItems, setPortfolioItems] = useState([]);

  const filters = [
    { key: "*", label: "All Projects" },
    { key: "filter-web", label: "Web Design" },
    { key: "filter-mobile", label: "Mobile App" },
    { key: "filter-branding", label: "Branding" },
  ];

  const portfolioData = [
  {
    id: 1,
    category: "filter-web",
    image: "/assets/img/portfolio/semudahApp-mockup.png",
    title: "SemudahApp",
    stack: "React | React Router | Firebase | Cloudflare | Font Awesome | TailwindCSS",
    url: "https://semudahapp.web.app/",
    size: "large",
  },
  {
    id: 2,
    category: "filter-web",
    image: "/assets/img/portfolio/paskibsmas12-mockup.png",
    title: "Paskibra Smas 12",
    stack: "React | React Router | AOS | Vercel | Font Awesome | TailwindCSS",
    url: "https://paskib-smas12.vercel.app/",
    size: "tall",
  },
  {
    id: 3,
    category: "filter-mobile",
    image: "/assets/img/portfolio/antarbang.png",
    title: "AntarBang",
    stack: "React | React Router | Framer motion | Vercel | TailwindCSS",
    url: "https://antarbang.vercel.app/",
    size: "tall",
  },
  {
    id: 4,
    category: "filter-web",
    image: "/assets/img/portfolio/loginZeta.png",
    title: "Login & Register Design",
    stack: "Java Script | HTML | CSS | Vercel",
    url: "https://semudahapp.web.app/",
    size: "large",
  },
];

  useEffect(() => {
    setPortfolioItems(portfolioData);

    const initLightbox = async () => {
      if (typeof window !== "undefined") {
        const GLightbox = (await import("glightbox")).default;
        GLightbox({ selector: ".glightbox" });
      }
    };

    initLightbox();
  }, []);

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);

    if (filter === "*") {
      setPortfolioItems(portfolioData);
    } else {
      setPortfolioItems(
        portfolioData.filter((item) => item.category === filter),
      );
    }
  };

  return (
    <section id="portfolio" className="portfolio section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Featured Work</h2>
        <p>Selected projects I’ve worked on</p>
      </div>

      <div className="container">
        {/* Masonry Grid */}
        <div className="portfolio-masonry" data-aos="fade-up">
          {portfolioItems.map((item) => (
            <div key={item.id} className={`portfolio-item ${item.size}`}>
              <div
                className="portfolio-card"
                onClick={() => window.open(item.url, "_blank")}
                style={{ cursor: "pointer" }}
              >
                <img src={item.image} alt={item.title} />

                <div className="overlay">
                  <h3>{item.title}</h3>
                  <p className="stack">{item.stack}</p>


                  <div className="actions">
                    <a
                      href={item.image}
                      className="glightbox"
                      title={item.title}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <i className="bi bi-zoom-in"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
