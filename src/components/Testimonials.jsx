import { useEffect, useRef } from 'react';

const Testimonials = () => {
  const swiperRef = useRef(null);

  const testimonialsData = [
    {
      id: 1,
      image: '/assets/img/person/person-m-9.webp',
      name: 'Adam Aderson',
      quote: '“There live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.”'
    },
    {
      id: 2,
      image: '/assets/img/person/person-f-5.webp',
      name: 'Lukas Devlin',
      quote: '“There live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.”'
    },
    {
      id: 3,
      image: '/assets/img/person/person-f-12.webp',
      name: 'Kayla Bryant',
      quote: '“There live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.”'
    }
  ];

  useEffect(() => {
    const initSwiper = async () => {
      if (typeof window !== 'undefined') {
        const Swiper = await import('swiper');
        const { Navigation, Pagination, Autoplay } = await import('swiper/modules');
        
        Swiper.default.use([Navigation, Pagination, Autoplay]);

        const swiper = new Swiper.default(swiperRef.current, {
          loop: true,
          speed: 600,
          autoplay: {
            delay: 5000,
            disableOnInteraction: false,
          },
          slidesPerView: 'auto',
          pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
          },
          breakpoints: {
            320: {
              slidesPerView: 1,
              spaceBetween: 40,
            },
            1200: {
              slidesPerView: 1,
              spaceBetween: 1,
            },
          },
        });

        // Cleanup function
        return () => {
          if (swiper) {
            swiper.destroy(true, true);
          }
        };
      }
    };

    initSwiper();
  }, []);

  return (
    <section id="testimonials" className="testimonials section">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Testimonials</h2>
        <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
      </div>

      <div className="container" data-aos="fade-up">
        <div className="row justify-content-center">
          <div className="col-lg-7">
            <div className="swiper init-swiper" ref={swiperRef}>
              <div className="swiper-wrapper">
                {testimonialsData.map((testimonial) => (
                  <div key={testimonial.id} className="swiper-slide">
                    <div className="testimonial mx-auto">
                      <figure className="img-wrap">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name} 
                          className="img-fluid"
                          onError={(e) => {
                            e.target.src = 'https://via.placeholder.com/100x100/f8f9fa/6c757d?text=Avatar';
                          }}
                        />
                      </figure>
                      <h3 className="name">{testimonial.name}</h3>
                      <blockquote>
                        <p>{testimonial.quote}</p>
                      </blockquote>
                    </div>
                  </div>
                ))}
              </div>
              <div className="swiper-pagination"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;