import { useEffect, useRef, useState } from "react";

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
      delay: 120,
    },
    {
      icon: "bi-code-slash",
      title: "Frontend Development",
      description:
        "Building interactive websites using HTML, CSS, JavaScript, React.js, and Tailwind CSS.",
      delay: 180,
    },
    // {
    //   icon: "bi-hdd-network",
    //   title: "Backend & API Development",
    //   description:
    //     "Developing RESTful APIs using Node.js, Express, PHP, and integrating MySQL databases.",
    //   delay: 240,
    // },
    {
      icon: "bi-phone",
      title: "Responsive & Mobile-First Design",
      description:
        "Optimizing layouts to ensure excellent performance and usability across all devices, especially mobile.",
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

    // Observe semua text sections
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
        <h2>About</h2>
        <p>
          Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
          consectetur velit
        </p>
      </div>

      <div className="container">
        {/* Intro + Photo */}
        <div className="row align-items-center justify-content-between intro-wrap gy-5">
          <div className="col-lg-7">
            <div className="intro-content">
              {/* Headline - Section 1 */}
              <h2
                ref={headlineRef}
                data-section="headline"
                className={`headline text-step ${
                  visibleSections.headline ? "visible" : ""
                }`}
              >
                Hi, I'm Musyahadat Safitrah — a passionate student & aspiring
                developer crafting creative digital projects
              </h2>

              {/* Lead Paragraph - Section 2 */}
              <p
                ref={leadRef}
                data-section="lead"
                className={`lead text-step ${
                  visibleSections.lead ? "visible" : ""
                }`}
              >
                I'm a student at SMKN 12 Jakarta currently studying programming
                and application development. I enjoy learning new technologies,
                building IT projects, and continually honing my skills to become
                a professional programmer in the future.
              </p>

              {/* Paragraph - Section 3 */}
              <p
                ref={paragraphRef}
                data-section="paragraph"
                className={`text-step ${
                  visibleSections.paragraph ? "visible" : ""
                }`}
              >
                I believe that every line of code is not just an instruction for
                a computer, but also a work of art that can be useful for
                others.
              </p>

              {/* CTA - Section 4 */}
              <div
                ref={ctaRef}
                data-section="cta"
                className={`cta-group text-step ${
                  visibleSections.cta ? "visible" : ""
                }`}
              >
                <a href="#portfolio" className="btn btn-ghost">
                  View My Work <i className="bi bi-arrow-down"></i>
                </a>
                <a
                  href="/assets/cv/CV-Musyahadat.d5b6fc64ef903fc5a2a596809e6850c7.pdf"
                  download
                  className="btn link-underline"
                >
                  Download CV <i className="bi bi-download"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-5">
            <figure className="profile-figure text-center text-lg-end">
              <img
                src="/assets/img/profile/profile2.jpg"
                alt="Portrait of Musyahadat"
                className="img-fluid profile-photo"
                onError={(e) => {
                  e.target.src =
                    "https://via.placeholder.com/400x500/f8f9fa/6c757d?text=Profile+Image";
                }}
              />
            </figure>
          </div>
        </div>

        {/* Skills Grid - Section 5 */}
        <div
          ref={skillsRef}
          data-section="skills"
          className={`skills-wrap section-step ${
            visibleSections.skills ? "visible" : ""
          }`}
        >
          <div className="row justify-content-center g-4">
            {skills.map((skill, index) => (
              <div key={index} className="col-6 col-md-4 col-lg-3">
                <div className="skill-item">
                  <i className={`bi ${skill.icon}`}></i>
                  <h3>{skill.title}</h3>
                  <p>{skill.description}</p>
                </div>
              </div>
            ))}
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
