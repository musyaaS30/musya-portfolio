import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Portfolio from "../components/Portfolio";
import Footer from "../components/Footer";
import ScrollTop from "../components/ScrollTop";
import CustomCursor from "../components/CustomCursor";

const PortfolioPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <div className="portfolio-page min-h-screen flex flex-col bg-[var(--background-color)] text-[var(--default-color)]">
      <CustomCursor />
      <Header />

      <main className="main flex-grow pt-24 pb-16">
        {/* Page Hero Header */}
        <section className="portfolio-hero-banner py-12 px-4">
          <div className="container" data-aos="fade-up">

            {/* Title Section */}
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 mb-3">
                <span
                  className="size-2 rounded-full"
                  style={{ background: "var(--accent-color)" }}
                />
                <span className="font-semibold uppercase tracking-wider text-xs text-[var(--default-color)]">
                  Interactive Archive
                </span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4 text-[var(--heading-color)] font-[var(--heading-font)]">
                Featured Projects & Works
              </h1>

              <p className="text-base sm:text-lg text-[var(--default-color)] leading-relaxed">
                Explore a comprehensive collection of my web applications, client solutions,
                frontend experiments, and software engineering builds.
              </p>
            </div>
          </div>
        </section>

        {/* Portfolio Showcase Grid */}
        <Portfolio />

        {/* Collaboration Callout */}
        <section className="collaboration-cta py-12 px-4" data-aos="fade-up">
          <div className="container">
            <div className="rounded-3xl p-8 sm:p-12 text-center bg-[var(--liquid-glass-bg-subtle)] border border-[var(--liquid-glass-border)] backdrop-blur-2xl">
              <h3 className="text-2xl sm:text-3xl font-bold mb-3 text-[var(--heading-color)] font-[var(--heading-font)]">
                Have a project or idea in mind?
              </h3>
              <p className="text-sm sm:text-base text-[var(--default-color)] max-w-xl mx-auto mb-6">
                Let's collaborate to turn your concepts into impactful, high-performance web applications.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-3">
                <a
                  href="mailto:musyahadat30@gmail.com"
                  className="px-6 py-3 rounded-full bg-[var(--accent-color)] text-black font-bold text-sm transition-colors hover:brightness-95 no-underline inline-flex items-center gap-2"
                >
                  <i className="bi bi-envelope-fill"></i>
                  <span>Get in Touch</span>
                </a>
                <Link
                  to="/home"
                  className="px-6 py-3 rounded-full bg-[var(--liquid-glass-bg-subtle)] hover:border-[var(--accent-color)]/50 text-[var(--heading-color)] font-semibold text-sm transition-colors no-underline inline-flex items-center gap-2 border border-[var(--liquid-glass-border)]"
                >
                  <span>Explore Overview</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <ScrollTop />
    </div>
  );
};

export default PortfolioPage;