const Services = () => {
  const servicesData = [
    {
      id: 1,
      icon: 'bi-palette',
      title: 'Creative Design',
      description: 'Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Sed porttitor lectus nibh lorem ipsum dolor sit amet consectetur.',
      delay: 200
    },
    {
      id: 2,
      icon: 'bi-code-slash',
      title: 'Web Development',
      description: 'Nulla porttitor accumsan tincidunt. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem donec rutrum congue leo.',
      delay: 250
    },
    {
      id: 3,
      icon: 'bi-graph-up',
      title: 'Digital Marketing',
      description: 'Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Proin eget tortor risus pellentesque habitant morbi.',
      delay: 300
    },
    {
      id: 4,
      icon: 'bi-shield-check',
      title: 'Brand Strategy',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      delay: 200
    },
    {
      id: 5,
      icon: 'bi-people',
      title: 'Consulting',
      description: 'Donec sollicitudin molestie malesuada. Cras ultricies ligula sed magna dictum porta vivamus magna justo lacinia eget.',
      delay: 250
    },
    {
      id: 6,
      icon: 'bi-headset',
      title: 'Support Services',
      description: 'Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Mauris blandit aliquet elit eget tincidunt nibh pulvinar.',
      delay: 300
    }
  ];

  const handleServiceClick = (serviceTitle) => {
    // Handle service click - bisa untuk navigation atau modal
    console.log(`Service clicked: ${serviceTitle}`);
    // Contoh: navigate to service details page
    // navigate(`/services/${serviceTitle.toLowerCase().replace(/\s+/g, '-')}`);
  };

  return (
    <section id="services" className="services section">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Services</h2>
        <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row service-grid">
          {servicesData.map((service) => (
            <div 
              key={service.id}
              className="col-lg-4 col-md-6" 
              data-aos="fade-up" 
              data-aos-delay={service.delay}
            >
              <div className="service-item">
                <div className="service-icon">
                  <i className={`bi ${service.icon}`}></i>
                </div>
                <h3>
                  <button 
                    className="service-link-button"
                    onClick={() => handleServiceClick(service.title)}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: 'inherit',
                      cursor: 'pointer',
                      textAlign: 'left',
                      padding: 0,
                      fontSize: 'inherit',
                      fontWeight: 'inherit'
                    }}
                  >
                    {service.title}
                  </button>
                </h3>
                <p>{service.description}</p>
                <div className="service-link">
                  <button 
                    onClick={() => handleServiceClick(service.title)}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: 'inherit',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      padding: 0,
                      fontSize: 'inherit'
                    }}
                  >
                    <span>Explore</span>
                    <i className="bi bi-arrow-right"></i>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;