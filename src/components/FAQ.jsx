"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const FAQ_ITEMS = [
  {
    id: "scratch",
    question: "Can you build a website from scratch?",
    answer:
      "Yes! I can build complete web solutions from UI/UX planning, responsive frontend architecture, to full backend APIs, databases, and deployment.",
  },
  {
    id: "tech-stack",
    question: "What technologies and frameworks do you use?",
    answer:
      "My core stack includes React.js, JavaScript (ES6+), Tailwind CSS, Node.js, HTML5/CSS3, MySQL, and modern cloud deployment tools like Vercel and Cloudflare.",
  },
  {
    id: "responsive",
    question: "Are your websites responsive across all devices?",
    answer:
      "Yes, every project is crafted with a mobile-first philosophy ensuring seamless performance, fluid layouts, and flawless interactions on smartphones, tablets, and large screens.",
  },
  {
    id: "custom-features",
    question: "Can you build custom features and integrations?",
    answer:
      "Absolutely! I can develop interactive features, authentication flows, custom dashboard UI, API integrations, animated components, and specialized web apps.",
  },
  {
    id: "workflow",
    question: "What is your typical project workflow?",
    answer:
      "We start with requirement discovery and user-flow mapping, proceed to Figma UI prototyping, develop the codebase with clean standards, test thoroughly, and deploy to production.",
  },
];

// Varian animasi Squash & Stretch untuk gelembung jawaban
const answerBubbleVariants = {
  hidden: {
    opacity: 0,
    y: -14,
    scaleX: 0.85,
    scaleY: 1.18, // Stretch vertikal saat mulai muncul
  },
  visible: {
    opacity: 1,
    y: 0,
    // Keyframes: Stretch -> Squash -> Normal
    scaleX: [0.85, 1.07, 0.98, 1],
    scaleY: [1.18, 0.91, 1.02, 1],
    transition: {
      duration: 0.42,
      times: [0, 0.45, 0.78, 1],
      ease: "easeOut",
    },
  },
  exit: {
    opacity: 0,
    y: -10,
    // Sedikit squash lalu menyusut saat menghilang
    scaleX: [1, 1.05, 0.88],
    scaleY: [1, 0.92, 1.1],
    transition: {
      duration: 0.24,
      times: [0, 0.35, 1],
      ease: "easeIn",
    },
  },
};

const FAQ = () => {
  const [activeId, setActiveId] = useState("scratch");

  const toggleFaq = (id) => {
    setActiveId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="section relative py-20 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 max-w-4xl" data-aos="fade-up">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[var(--heading-color)] font-[var(--heading-font)] mb-3">
            Frequently Asked Questions
          </h2>
          <p className="text-sm sm:text-base text-[var(--default-color)] font-normal">
            Common questions about my skillset, development workflow, and capabilities
          </p>
        </div>

        {/* Vertical Pill Button List */}
        <div className="flex flex-col items-start gap-y-6 sm:gap-y-7">
          {FAQ_ITEMS.map((item) => {
            const isOpen = activeId === item.id;

            return (
              <div key={item.id} className="flex flex-col items-start w-full">
                {/* Question Pill + Outside Action Icon Row */}
                <div className="inline-flex items-center gap-3">
                  <motion.button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => toggleFaq(item.id)}
                    // Squash & Stretch interaktif pada tombol pill
                    whileHover={{
                      scaleX: 1.03,
                      scaleY: 0.96,
                    }}
                    whileTap={{
                      scaleX: 1.08,
                      scaleY: 0.88,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 500,
                      damping: 18,
                      mass: 0.8,
                    }}
                    className="inline-flex items-center w-fit px-6 sm:px-7 py-3.5 sm:py-4 !rounded-full text-sm sm:text-base font-semibold text-neutral-100 bg-neutral-900/95 dark:bg-neutral-800/95 hover:bg-neutral-800 dark:hover:bg-neutral-700/90 transition-colors duration-200 cursor-pointer text-left shadow-sm outline-none focus-visible:ring-2 focus-visible:ring-blue-400 border-0 origin-center"
                    style={{ borderRadius: "9999px" }}
                  >
                    <span>{item.question}</span>
                  </motion.button>

                  <motion.button
                    type="button"
                    onClick={() => toggleFaq(item.id)}
                    aria-label={isOpen ? "Close answer" : "Open answer"}
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scaleX: 1.25, scaleY: 0.75 }}
                    transition={{ type: "spring", stiffness: 500, damping: 15 }}
                    className="flex size-8 sm:size-9 shrink-0 items-center justify-center !rounded-full text-neutral-400 hover:text-neutral-200 dark:text-neutral-500 dark:hover:text-neutral-300 transition-colors cursor-pointer outline-none border-0 bg-transparent"
                    style={{ borderRadius: "9999px" }}
                  >
                    <motion.span
                      key={isOpen ? "minus" : "plus"}
                      initial={{ rotate: -90, scale: 0.6 }}
                      animate={{ rotate: 0, scale: 1 }}
                      transition={{ type: "spring", stiffness: 450, damping: 18 }}
                    >
                      {isOpen ? (
                        <Minus className="size-5" />
                      ) : (
                        <Plus className="size-5" />
                      )}
                    </motion.span>
                  </motion.button>
                </div>

                {/* Offset Chat-Style Answer Bubble dengan Squash & Stretch */}
                <AnimatePresence mode="wait">
                  {isOpen && (
                    <motion.div
                      key={`answer-${item.id}`}
                      variants={answerBubbleVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      style={{
                        borderRadius: "28px",
                        transformOrigin: "top left",
                      }}
                      className="mt-3 ml-6 sm:ml-12 md:ml-16 max-w-md sm:max-w-lg p-5 sm:p-6 !rounded-3xl bg-[#07ffa4] text-neutral-950 shadow-md border-0"
                    >
                      <p className="text-sm sm:text-base font-medium leading-relaxed m-0 text-slate-950">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;