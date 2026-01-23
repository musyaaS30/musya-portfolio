import { useState } from "react";

const Resume = () => {
  const [activeTab, setActiveTab] = useState("experience");

  const experienceData = [
    {
      title: "Project Manager",
      company: "Kokurikuler – Website Sekatas (Second Shoes Marketplace)",
      period: "September 2025",
      description:
        "Memimpin tim dalam pengembangan website Sekatas, platform penjualan sepatu bekas, mengatur pembagian tugas, alur kerja proyek, serta memastikan kebutuhan fitur dan timeline terpenuhi.",
      delay: 400,
    },
    {
      title: "Frontend Developer",
      company: "Website SUDIN Pendidikan",
      period: "Agustus 2025 – September 2025",
      description:
        "Mengembangkan frontend website dengan tampilan responsif dan interaktif, serta memastikan pengalaman pengguna yang optimal.",
      delay: 450,
    },
    {
      title: "Freelance Frontend Developer",
      company: "Website Paskibra SMAS 12 Jakarta",
      period: "Juni 2025 – Juli 2025",
      description:
        "Mendesain dan membangun website Paskibra sebagai media informasi dan promosi kegiatan ekstrakurikuler.",
      delay: 500,
    },
    {
      title: "Peserta & Juara 2",
      company: "LKS 2025 IT Software for Business",
      period: "Mei 2025",
      description:
        "Mengembangkan aplikasi desktop berbasis e-commerce dalam kompetisi IT Software for Business dan meraih Juara 2.",
      delay: 550,
    },
    {
      title: "Juara 2 – Robothon Internasional",
      company: "International Robothon Competition",
      period: "November 2025",
      description:
        "Meraih Juara 2 dalam kompetisi robotik tingkat internasional melalui kolaborasi tim dan penyelesaian tantangan berbasis teknologi.",
      delay: 450,
    },
  ];

  const educationData = [
    {
      year: "2015",
      degree: "SD Negeri Kebon Bawang 03",
      institution: "",
      description:
        "Has completed six years of basic education at SDN Kebon Bawang 03, with a strong foundation of general knowledge and basic skills.",
      delay: 400,
    },
    {
      year: "2022",
      degree: "SMP Negeri 282 Jakarta",
      institution: "",
      description:
        "Graduated with outstanding results as the best graduating student. Active in both academic and non-academic activities.",
      delay: 450,
    },
    {
      year: "2024",
      degree: "SMK Negeri 12 Jakarta",
      institution: "Kejuruan Rekayasa Perangkat Lunak",
      description:
        "Currently studying at SMK Negeri 12 Jakarta, majoring in Software Engineering, with a focus on web development, programming, and software technology.",
      delay: 500,
    },
  ];

  const skillsData = [
    {
      category: "Technical Skills",
      tags: [
        "Frontend Development",
        "HTML, CSS, Tailwind CSS",
        "JavaScript",
        "React.js",
        "UI/UX Design",
      ],
      delay: 400,
    },
    {
      category: "Leadership",
      tags: [
        "Team Leadership",
        "Project Coordination",
        "Communication Skills",
        "Collaboration",
      ],
      delay: 450,
    },
    {
      category: "Tools & Platforms",
      tags: ["Figma", "Visual Studio Code", "Git & GitHub", "Vite", "AI Tools"],
      delay: 500,
    },
  ];

  const tabs = [
    { id: "experience", number: "01", label: "Experience" },
    { id: "education", number: "02", label: "Education" },
    { id: "skills", number: "03", label: "Skills" },
  ];

  return (
    <section id="resume" className="resume section">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Resume</h2>
        <span >
          Summary of my experience, projects, achievements and educational history
        </span>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row">
          <div className="col-lg-12">
            <ul
              className="nav nav-pills resume-navigation justify-content-center"
              role="tablist"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              {tabs.map((tab) => (
                <li key={tab.id} className="nav-item" role="presentation">
                  <button
                    className={`nav-link ${
                      activeTab === tab.id ? "active" : ""
                    }`}
                    onClick={() => setActiveTab(tab.id)}
                    type="button"
                    role="tab"
                  >
                    <span className="nav-number">{tab.number}</span>
                    <span className="nav-label">{tab.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="resume-content">
          {/* Experience Tab */}
          {activeTab === "experience" && (
            <div
              className="tab-pane fade show active"
              role="tabpanel"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="section-intro">
                <h2>Professional Experience</h2>
                <p>
                  A summary of my project experience, leadership roles, and
                  achievements in frontend development, web projects, and team
                  collaboration.
                </p>
              </div>

              <div className="experience-grid">
                {experienceData.map((exp, index) => (
                  <div
                    key={index}
                    className="experience-item"
                    data-aos="fade-up"
                    data-aos-delay={exp.delay}
                  >
                    <div className="item-header">
                      <div className="position-info">
                        <h3>{exp.title}</h3>
                        <div className="company">{exp.company}</div>
                      </div>
                      <div className="period">{exp.period}</div>
                    </div>
                    <div className="item-content">
                      <p>{exp.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Education Tab */}
          {activeTab === "education" && (
            <div
              className="tab-pane fade show active"
              role="tabpanel"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="section-intro">
                <h2>Educational Background</h2>
                <p>
                  An overview of my educational journey in Software Engineering
                  that supports my skills in web and application development.
                </p>
              </div>

              <div className="education-list">
                {educationData.map((edu, index) => (
                  <div
                    key={index}
                    className="education-entry"
                    data-aos="fade-up"
                    data-aos-delay={edu.delay}
                  >
                    <div className="degree-year">{edu.year}</div>
                    <div className="degree-details">
                      <h3>{edu.degree}</h3>
                      {edu.institution && (
                        <div className="institution">{edu.institution}</div>
                      )}
                      <p>{edu.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Skills Tab (Commented out for now) */}
          {activeTab === "skills" && (
            <div
              className="tab-pane fade show active"
              role="tabpanel"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="section-intro">
                <h2>Core Competencies</h2>
                <p>
                  Key strengths in frontend development, UI/UX design, modern
                  web tools, and effective communication and teamwork.
                </p>
              </div>

              <div className="skills-categories">
                {skillsData.map((skillCategory, index) => (
                  <div
                    key={index}
                    className="skill-category"
                    data-aos="fade-up"
                    data-aos-delay={skillCategory.delay}
                  >
                    <h3>{skillCategory.category}</h3>
                    <div className="skill-tags">
                      {skillCategory.tags.map((tag, tagIndex) => (
                        <span key={tagIndex} className="skill-tag">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Resume;
