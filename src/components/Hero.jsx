"use client";
import DotGrid from "../../public/assets/elements/dotGrid";

const Hero = () => {
  return (
    <section
      id="hero"
      className="hero section position-relative overflow-hidden"
    >
      {/* Background Gradient Overlay */}
      <div className="dot-grid-background hidden lg:block">
        <DotGrid
          dotSize={4}
          gap={28}
          baseColor="#eaeaea"
          activeColor="#777777"
          proximity={100}
          speedTrigger={50}
          shockStrength={1.5}
          maxSpeed={2000}
          resistance={850}
          returnDuration={1.8}
          className="dot-grid-background"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
        />
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row align-items-center gx-5 gy-5">
          <div className="col-lg-7">
            <div className="intro text-start" data-aos="fade-right" data-aos-delay="150">
              <div className="eyebrow d-inline-flex align-items-center gap-2 mb-3 text-start">
                <span className="dot"></span>
                <span className="text font-semibold tracking-wide">Hello</span>
              </div>

              <h1 className="display-heading mb-3 text-start">
                Crafting creative digital projects with passion and innovation
              </h1>

              <p className="lead mb-4 text-start">
                I'm a student at SMKN 12 Jakarta, focused on programming, web
                development, and technology. I'm always striving to learn new
                things, create useful applications, and develop creative ideas
                in the IT field.
              </p>

              <div
                className="cta-group d-flex flex-wrap align-items-center justify-content-start gap-3 text-start"
                data-aos="fade-right"
                data-aos-delay="250"
              >
                <a href="#portfolio" className="btn btn-ghost d-inline-flex align-items-center justify-content-start text-start">
                  View Selected Work
                  <i className="bi bi-arrow-right ms-2"></i>
                </a>
                <a href="#about" className="btn link-underline d-inline-flex align-items-center justify-content-start text-start">
                  Learn About Me
                  <i className="bi bi-person ms-2"></i>
                </a>
              </div>

              <div
                className="meta mt-4 d-flex flex-wrap align-items-center justify-content-start gap-3 text-start"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div className="meta-item d-flex align-items-center gap-2">
                  <i className="bi bi-geo-alt text-[var(--accent-color)]"></i>
                  <span>Jakarta, Indonesia</span>
                </div>
                <div className="meta-item d-flex align-items-center gap-2">
                  <i className="bi bi-mortarboard text-[var(--accent-color)]"></i>
                  <span>Software Engineering Student</span>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-5">
            <figure
              className="portrait-wrap position-relative"
              data-aos="fade-left"
              data-aos-delay="200"
            >
              <img
                src="assets/img/profile/profile2.jpg"
                alt="Profile Portrait"
                className="img-fluid aspect-square object-cover portrait-img"
              />
              <figcaption className="visually-hidden">
                Minimal portrait preview
              </figcaption>

              <div
                className="badge note"
                data-aos="zoom-in"
                data-aos-delay="300"
              >
                <span className="d-flex align-items-center justify-content-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#00d084] animate-pulse"></span>
                  11th Grade Vocational Student • SMKN 12
                </span>
              </div>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
