"use client";

import TechMarquee from "./TechMarquee";
import { Code2, Palette, Layers, Sparkles, Zap, Cpu } from "lucide-react";

const Skills = () => {

  const bentoSkills = [
    {
      id: "frontend",
      span: "col-span-12 lg:col-span-7",
      accent: true,
      label: "Primary focus",
      title: "Frontend Architecture & React.js",
      description:
        "Building reactive, component-driven web applications with React 19, modern state architectures, and robust lifecycle hooks.",
      icon: Code2,
      stat: 92,
      statSuffix: "%",
      tags: ["React 19", "TypeScript", "Next.js", "REST APIs", "Custom Hooks"],
      delay: 150,
    },
    {
      id: "uiux",
      span: "col-span-12 lg:col-span-5",
      label: "Design to code",
      title: "UI/UX & Design Systems",
      description:
        "Translating Figma mockups into accessible, pixel-perfect interfaces with consistent design tokens.",
      icon: Palette,
      stat: 88,
      statSuffix: "%",
      tags: ["Figma", "Design Tokens", "Wireframing"],
      delay: 200,
    },
    {
      id: "styling",
      span: "col-span-12 md:col-span-6 lg:col-span-4",
      label: "Styling & motion",
      title: "Tailwind CSS & Motion",
      description:
        "Responsive grids and smooth keyframe animation using Tailwind v4, Framer Motion, and GSAP.",
      icon: Layers,
      stat: 94,
      statSuffix: "%",
      tags: ["Tailwind v4", "Framer Motion", "GSAP"],
      delay: 250,
    },
    {
      id: "ai",
      span: "col-span-12 md:col-span-6 lg:col-span-4",
      label: "Workflow",
      title: "AI-Augmented Engineering",
      description:
        "AI pair-programming for debugging, performance profiling, and rapid prototyping.",
      icon: Sparkles,
      stat: 86,
      statSuffix: "%",
      tags: ["Prompt Engineering", "Refactoring"],
      delay: 300,
    },
    {
      id: "performance",
      span: "col-span-12 md:col-span-12 lg:col-span-4",
      label: "Speed & reliability",
      title: "Performance & Code Quality",
      description:
        "Fast load times, semantic HTML5, and clean, maintainable codebases.",
      icon: Zap,
      stat: 98,
      statSuffix: "/100",
      tags: ["Core Web Vitals", "SEO", "Clean Architecture"],
      delay: 350,
    },
  ];

  return (
    <section id="services" className="skills section relative overflow-hidden py-16">
      <TechMarquee />

      <div className="container relative z-10 mt-12 px-4 mx-auto max-w-7xl" data-aos="fade-up" data-aos-delay="100">
        {/* Section heading */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-[var(--liquid-glass-bg-subtle)] border border-[var(--liquid-glass-border)] text-[var(--accent-color)] backdrop-blur-md mb-3">
            <Cpu className="size-3.5" />
            <span>Competency Matrix</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[var(--heading-color)] font-[var(--heading-font)] mb-3">
            Technical Expertise & Craft
          </h2>
          <p className="text-sm sm:text-base text-[var(--default-color)] font-normal leading-relaxed">
            A comprehensive overview of my core frontend capabilities, design workflow, and engineering standards.
          </p>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-12 gap-4">
          {bentoSkills.map((card) => {
            const Icon = card.icon;

            return (
              <div
                key={card.id}
                className={`${card.span} flex`}
                data-aos="fade-up"
                data-aos-delay={card.delay}
              >
                <article
                  className={`relative flex flex-col justify-between w-full p-6 sm:p-7 rounded-2xl overflow-hidden
                    border transition-colors duration-200
                    ${
                      card.accent
                        ? "bg-[var(--liquid-glass-bg)] border-[var(--accent-color)]/30"
                        : "bg-[var(--liquid-glass-bg-subtle)] border-[var(--liquid-glass-border)]"
                    }
                    backdrop-blur-2xl
                    hover:border-[var(--accent-color)]/50`}
                >
                  {/* Faint diagonal texture on the featured card only — echoes the reference's accent panel */}
                  {card.accent && (
                    <div
                      className="pointer-events-none absolute inset-0 opacity-[0.06]"
                      style={{
                        backgroundImage:
                          "repeating-linear-gradient(135deg, var(--heading-color) 0px, var(--heading-color) 1px, transparent 1px, transparent 14px)",
                      }}
                    />
                  )}

                  <div className="relative">
                    {/* Label pill */}
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-black/5 dark:bg-white/10 text-[var(--default-color)]">
                        {card.label}
                      </span>
                      <Icon className="size-4 text-[var(--default-color)] opacity-40" />
                    </div>

                    {/* Hero stat — the one focal number per card, no gradient/glow */}
                    {/* <div className="mb-3 flex items-baseline gap-1">
                      <span className="text-4xl sm:text-5xl font-bold tabular-nums text-[var(--heading-color)] font-[var(--heading-font)]">
                        {card.stat}
                      </span>
                      <span className="text-lg font-semibold text-[var(--default-color)]">
                        {card.statSuffix}
                      </span>
                    </div> */}

                    <h3 className="text-base sm:text-lg font-bold text-[var(--heading-color)] font-[var(--heading-font)] mb-2">
                      {card.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-[var(--default-color)] leading-relaxed">
                      {card.description}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="relative flex flex-wrap gap-1.5 mt-6 pt-4 border-t border-black/5 dark:border-white/10">
                    {card.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-lg text-[11px] font-medium bg-black/5 dark:bg-white/5 text-[var(--default-color)]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;