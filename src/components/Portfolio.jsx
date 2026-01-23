import { useState, useEffect } from 'react';
import "../styles/masonry.css"

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('*');
  const [portfolioItems, setPortfolioItems] = useState([]);

  const filters = [
    { key: '*', label: 'All Projects' },
    { key: 'filter-web', label: 'Web Design' },
    { key: 'filter-mobile', label: 'Mobile App' },
    { key: 'filter-branding', label: 'Branding' }
  ];

  const portfolioData = [
    {
      id: 1,
      category: 'filter-web',
      image: '/assets/img/portfolio/portfolio-3.webp',
      title: 'Clinico',
      description: 'Front End Development - 2025',
      size: 'large'
    },
    {
      id: 2,
      category: 'filter-web',
      image: '/assets/img/portfolio/portfolio-7.webp',
      title: 'SMDPrints',
      description: 'Front End Development - 2023',
      size: 'tall'
    },
    {
      id: 3,
      category: 'filter-mobile',
      image: '/assets/img/portfolio/portfolio-portrait-5.webp',
      title: 'Mobile App',
      description: 'UI Mobile Design',
      size: 'wide'
    },
    {
      id: 4,
      category: 'filter-web',
      image: '/assets/img/portfolio/portfolio-8.webp',
      title: 'IT Club',
      description: 'Landing Page',
      size: 'normal'
    }
  ];

  useEffect(() => {
    setPortfolioItems(portfolioData);

    const initLightbox = async () => {
      if (typeof window !== 'undefined') {
        const GLightbox = (await import('glightbox')).default;
        GLightbox({ selector: '.glightbox' });
      }
    };

    initLightbox();
  }, []);

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);

    if (filter === '*') {
      setPortfolioItems(portfolioData);
    } else {
      setPortfolioItems(
        portfolioData.filter(item => item.category === filter)
      );
    }
  };

  return (
    <section id="portfolio" className="portfolio section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Portfolio</h2>
        <p>Selected projects I’ve worked on</p>
      </div>

      <div className="container">
        {/* Filters */}
        <ul className="portfolio-filters" data-aos="fade-up">
          {filters.map(filter => (
            <li
              key={filter.key}
              className={activeFilter === filter.key ? 'filter-active' : ''}
              onClick={() => handleFilterClick(filter.key)}
            >
              {filter.label}
            </li>
          ))}
        </ul>

        {/* Masonry Grid */}
        <div className="portfolio-masonry" data-aos="fade-up">
          {portfolioItems.map(item => (
            <div
              key={item.id}
              className={`portfolio-item ${item.size}`}
            >
              <div className="portfolio-card">
                <img src={item.image} alt={item.title} />

                <div className="overlay">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>

                  <div className="actions">
                    <a
                      href={item.image}
                      className="glightbox"
                      title={item.title}
                    >
                      <i className="bi bi-zoom-in"></i>
                    </a>
                    <a href="#">
                      <i className="bi bi-arrow-right"></i>
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
