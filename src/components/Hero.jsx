'use client';
import { useEffect, useState } from 'react';
import DotGrid from "../../public/assets/elements/dotGrid";

const Hero = () => {
  const [username, setUsername] = useState("Guest");

  useEffect(() => {
    // Client-side only untuk localStorage
    const storedUsername = localStorage.getItem("username") || "Guest";
    setUsername(storedUsername);
  }, []);

  return (
    <section id="hero" className="hero section position-relative overflow-hidden">
      {/* Background Gradient Overlay */}
      <div className="dot-grid-background">
        <DotGrid 
          dotSize={4}
          gap={28}
          baseColor="#eaeaea" // Soft blue untuk light mode
          activeColor="#777777"
          proximity={100}
          speedTrigger={50}
          shockStrength={1.5}
          maxSpeed={2000}
          resistance={850}
          returnDuration={1.8}
          className="dot-grid-background"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%'
          }}
        />
      </div>
      
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row align-items-center gx-5 gy-5">
          <div className="col-lg-7">
            <div className="intro" data-aos="fade-right" data-aos-delay="150">
              <div className="eyebrow d-inline-flex align-items-center gap-2 mb-3">
                <span className="dot"></span>
                <span className="text">Halo <span id="displayName">{username}</span></span>
              </div>

              <h1 className="display-heading mb-3">
                Crafting creative digital projects with passion and innovation
              </h1>

              <p className="lead mb-4">
                I'm a student at SMKN 12 Jakarta, focused on programming, web development, and technology. I'm always
                striving to learn new things, create useful applications, and develop creative ideas in the IT field.
              </p>

              <div className="cta-group d-flex flex-wrap align-items-center gap-3" data-aos="zoom-in" data-aos-delay="250">
                <a href="#portfolio" className="btn btn-ghost">
                  View Selected Work
                  <i className="bi bi-arrow-right ms-2"></i>
                </a>
                <a href="#contact" className="btn link-underline">
                  Get in touch
                  <i className="bi bi-envelope ms-2"></i>
                </a>
              </div>

              <div className="meta mt-4 d-flex flex-wrap align-items-center gap-4" data-aos="fade-up" data-aos-delay="300">
                <div className="meta-item d-flex align-items-center gap-2">
                  <i className="bi bi-geo-alt"></i>
                  <span>San Francisco, CA</span>
                </div>
                <div className="meta-item d-flex align-items-center gap-2">
                  <i className="bi bi-circle"></i>
                  <span>Available for freelance</span>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-5">
            <figure className="portrait-wrap position-relative" data-aos="fade-left" data-aos-delay="200">
              <img src="assets/img/profile/profile.jpg" alt="Profile Portrait" className="img-fluid portrait-img" />
              <figcaption className="visually-hidden">Minimal portrait preview</figcaption>

              <div className="badge note" data-aos="zoom-in" data-aos-delay="300">
                <i className="bi bi-star"></i>
                <span>10+ yrs building elegant UIs</span>
              </div>
            </figure>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero