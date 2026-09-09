import { useEffect, useRef, useState } from "react";
import AnimatedBorder from "./ui/AnimatedBorder";
import SwipeCardDeck from "./ui/SwipeCardDeck";
import designImage from "/assets/img/ilustration/designImage.webp";
import codeImage from "/assets/img/ilustration/codeImage.webp";
import performanceImage from "/assets/img/ilustration/performanceImage.webp";

const About = () => {
  const [visibleSections, setVisibleSections] = useState({
    headline: false,
    lead: false,
    paragraph: false,
    cta: false,
    skills: false,
    quote: false,
    facts: false,
  });

  const headlineRef = useRef(null);
  const leadRef = useRef(null);
  const paragraphRef = useRef(null);
  const ctaRef = useRef(null);
  const skillsRef = useRef(null);
  const quoteRef = useRef(null);
  const factsRef = useRef(null);

  const skills = [
    {
      icon: "bi-palette",
      title: "UI/UX Design",
      description:
        "Designing modern, responsive, and user-friendly interfaces with a strong focus on user experience.",
      image: designImage,
      delay: 120,
    },
    {
      icon: "bi-code-slash",
      title: "Frontend Development",
      description:
        "Building interactive websites using HTML, CSS, JavaScript, React.js, and Tailwind CSS.",
      image: codeImage,
      delay: 180,
    },
    {
      icon: "bi-speedometer2",
      title: "Performance Optimization",
      description:
        "Building fast-loading websites with optimized assets, clean code, and smooth user experiences.",
      image: performanceImage,
      delay: 300,
    },
  ];

  const funFacts = [
    {
      icon: "bi-magic",
      text: "Minimalism",
      delay: 120,
    },
    {
      icon: "bi-headphones",
      text: "Lo-fi Beats",
      delay: 160,
    },
    {
      icon: "bi-geo-alt",
      text: "City Walks",
      delay: 200,
    },
    {
      icon: "bi-brush",
      text: "Sketching",
      delay: 240,
    },
  ];

  useEffect(() => {
    const observerOptions = {
      threshold: 0.3,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const section = entry.target.getAttribute("data-section");
          setVisibleSections((prev) => ({
            ...prev,
            [section]: true,
          }));
        }
      });
    }, observerOptions);

    // Observe all text sections
    const textSections = [
      headlineRef.current,
      leadRef.current,
      paragraphRef.current,
      ctaRef.current,
      skillsRef.current,
      quoteRef.current,
      factsRef.current,
    ].filter(Boolean);

    textSections.forEach((section) => observer.observe(section));

    return () => {
      textSections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <section id="about" className="about section">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>About Me</h2>
        <p>
          Get to know more about my background, philosophy, and approach to development
        </p>
      </div>

      <div className="container">
        {/* Intro */}
        <div className="row justify-content-center intro-wrap gy-5">
          <div className="col-lg-9 col-xl-8">
            <div className="intro-content text-center">
              {/* Headline - Section 1 */}
              <h2
                ref={headlineRef}
                data-section="headline"
                className={`headline text-step ${
                  visibleSections.headline ? "visible" : ""
                }`}
              >
                Hi, I'm Musyahadat — a passionate student & aspiring
                developer crafting creative digital projects
              </h2>

              {/* Paragraph - Section 3 */}
              <p
                ref={paragraphRef}
                data-section="paragraph"
                className={`text-step ${
                  visibleSections.paragraph ? "visible" : ""
                }`}
              >
                I believe that every line of code is not just an instruction for
                a computer, but also a work of art that can be genuinely useful and
                delightful for others.
              </p>

              {/* CTA - Section 4 */}
              <div
                ref={ctaRef}
                data-section="cta"
                className={`cta-group text-step justify-content-center ${
                  visibleSections.cta ? "visible" : ""
                }`}
              >
                <a href="#portfolio" className="btn btn-ghost">
                  View My Work <i className="bi bi-arrow-down ms-1"></i>
                </a>
                <a
                  href="/assets/cv/CV-Musyahadat.d5b6fc64ef903fc5a2a596809e6850c7.pdf"
                  download
                  className="btn btn-ghost"
                >
                  Download CV <i className="bi bi-download ms-1"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Skills - Section 5 */}
        <div
          ref={skillsRef}
          data-section="skills"
          className={`skills-wrap section-step ${
            visibleSections.skills ? "visible" : ""
          }`}
        >
          {/* MOBILE: Swipe Card Deck */}
          <div className="d-md-none">
            <SwipeCardDeck
              items={skills}
              threshold={100}
              renderItem={(skill) => (
                <div className="skill-item relative">
                  {/* <AnimatedBorder /> */}
                  <div className="relative z-10 text-center flex flex-col items-center">
                    <img
                      className="w-20 object-cover aspect-square mb-3"
                      src={skill.image}
                      alt={skill.title}
                    />
                    <h3>{skill.title}</h3>
                    <p>{skill.description}</p>
                  </div>
                </div>
              )}
            />
          </div>

          {/* DESKTOP: Grid */}
          <div className="d-none d-md-block">
            <div className="row justify-content-center g-4">
              {skills.map((skill, index) => (
                <div key={index} className="col-md-4">
                  <div className="skill-item relative group">
                    {/* <AnimatedBorder /> */}
                    <div className="relative z-10 text-center flex flex-col items-center">
                      <img
                        className="w-20 object-cover aspect-square mb-3"
                        src={skill.image}
                        alt={skill.title}
                      />
                      <h3>{skill.title}</h3>
                      <p>{skill.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quote - Section 6 */}
        <blockquote
          ref={quoteRef}
          data-section="quote"
          className={`personal-quote section-step ${
            visibleSections.quote ? "visible" : ""
          }`}
        >
          <p>
            "Building clean and meaningful experiences through thoughtful code
            and quiet design."
          </p>
        </blockquote>

        {/* Fun Facts - Section 7 */}
        <div
          ref={factsRef}
          data-section="facts"
          className={`facts-wrap section-step ${
            visibleSections.facts ? "visible" : ""
          }`}
        >
          <div className="row g-3 justify-content-center">
            {funFacts.map((fact, index) => (
              <div key={index} className="col-6 col-md-3 col-lg-2">
                <div className="fact-pill">
                  <i className={`bi ${fact.icon}`}></i>
                  <span>{fact.text}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
