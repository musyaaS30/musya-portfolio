import React from 'react';
import { useNavigate } from 'react-router-dom';
import FileUi from './ui/fileUi';

const PortfolioCta = () => {
  const navigate = useNavigate();

  return (
    <section id="portfolio" className="portfolio section position-relative overflow-hidden py-16 sm:py-24">
      <div className="container position-relative">
        <div className="row align-items-center gx-5 gy-5">
          {/* Left Column: CTA Text Content */}
          <div className="col-lg-6 col-md-12">
            <div className="portfolio-cta-content text-start" data-aos="fade-right" data-aos-delay="100">
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2 mb-3">
                <span
                  className="size-2 rounded-full"
                  style={{ background: 'var(--accent-color)' }}
                ></span>
                <span className="font-semibold uppercase tracking-wider text-xs text-[var(--default-color)]">
                  Featured Works & Projects
                </span>
              </div>

              {/* Headline */}
              <h2 className="mb-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[var(--heading-color)] font-[var(--heading-font)]">
                Explore My Creative Digital Archive
              </h2>

              {/* Lead Paragraph */}
              <p className="mb-4 text-base sm:text-lg text-[var(--default-color)] leading-relaxed max-w-xl">
                Dive into a curated repository of real-world applications, interactive UI systems,
                and full-stack solutions built with React, Next.js, modern CSS, and cloud technologies.
              </p>

              {/* Highlight Badges */}
              <div className="flex flex-wrap gap-2 mb-5">
                {['4+ Production Apps', 'React & Next.js Ecosystem', 'Interactive UI/UX'].map((label) => (
                  <span
                    key={label}
                    className="px-3 py-2 rounded-full text-xs font-medium bg-[var(--liquid-glass-bg-subtle)] text-[var(--default-color)] border border-[var(--liquid-glass-border)]"
                  >
                    {label}
                  </span>
                ))}
              </div>

              {/* CTA Button Group */}
              <div className="flex flex-wrap items-center gap-3">

                <a
                  href="https://github.com/musyaaS30"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 text-lg font-semibold bg-black hover:bg-zinc-900 py-3 px-8 rounded-full text-white no-underline !no-underline transition-all duration-300 hover:scale-105 shadow-md hover:shadow-zinc-800/50"
                >
                  <i className="bi bi-github text-xl transition-transform duration-300 group-hover:scale-125 group-hover:text-[var(--accent-color,#00d084)] transition-all"></i>
                  <span>GitHub Repositories</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: FileUi Component */}
          <div className="col-lg-6 col-md-12">
            <div
              className="relative flex flex-col items-center justify-center"
              data-aos="fade-left"
              data-aos-delay="200"
              style={{ minHeight: '320px' }}
            >
              <div className="w-full flex justify-center py-6">
                <FileUi navigateTo="/portfolio" delay={1800} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioCta;