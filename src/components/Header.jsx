import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import Switch from "./ui/Switch";

const NAV_LINKS = [
  { label: "Home", href: "/home" },
  { label: "About", href: "#about" },
  { label: "Resume", href: "/resume" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

/* --- Small inline icons (no external icon dependency needed) --- */
const IconMenu = ({ open }) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
    {open ? (
      <>
        <line x1="6" y1="6" x2="18" y2="18" />
        <line x1="18" y1="6" x2="6" y2="18" />
      </>
    ) : (
      <>
        <line x1="4" y1="7" x2="20" y2="7" />
        <line x1="4" y1="12" x2="20" y2="12" />
        <line x1="4" y1="17" x2="20" y2="17" />
      </>
    )}
  </svg>
);

const IconHome = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 11.5 12 4l9 7.5" />
    <path d="M5.5 10v9a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-9" />
  </svg>
);

const IconSettings = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="3.2" />
    <path d="M19.4 13a7.7 7.7 0 0 0 0-2l2-1.5-2-3.4-2.3.9a7.6 7.6 0 0 0-1.7-1L15 3h-4l-.4 2.4a7.6 7.6 0 0 0-1.7 1l-2.3-.9-2 3.4L6.6 11a7.7 7.7 0 0 0 0 2l-2 1.5 2 3.4 2.3-.9c.5.4 1.1.75 1.7 1L10 21h4l.4-2.4c.6-.25 1.2-.6 1.7-1l2.3.9 2-3.4-2-1.5Z" />
  </svg>
);

const Header = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [activeHref, setActiveHref] = useState("/home");
  const { isDarkMode, toggleDarkMode } = useTheme();
  const location = useLocation();
  const navigate = useNavigate();

  // Sync activeHref with current route & hash
  useEffect(() => {
    const path = location.pathname;
    if (path === "/resume") {
      setActiveHref("/resume");
    } else if (path === "/home") {
      setActiveHref(location.hash || "/home");
    }
  }, [location.pathname, location.hash]);

  const toggleMobileNav = () => {
    setIsSettingsOpen(false);
    setIsMobileNavOpen((prev) => !prev);
  };

  const toggleSettings = () => {
    setIsMobileNavOpen(false);
    setIsSettingsOpen((prev) => !prev);
  };

  const handleNavLinkClick = (e, href) => {
    e.preventDefault();
    if (href.startsWith("#")) {
      if (location.pathname !== "/home") {
        navigate("/home", { state: { scrollTo: href.substring(1) } });
      } else {
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth" });
        }
      }
    } else if (href.startsWith("/")) {
      navigate(href);
    }
    setActiveHref(href);
    setIsMobileNavOpen(false);
    setIsSettingsOpen(false);
  };

  // Close mobile sheets when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      const dock = document.querySelector("#mobile-dock");
      const sheet = document.querySelector("#mobile-sheet");
      if (
        (isMobileNavOpen || isSettingsOpen) &&
        dock &&
        !dock.contains(event.target) &&
        (!sheet || !sheet.contains(event.target))
      ) {
        setIsMobileNavOpen(false);
        setIsSettingsOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isMobileNavOpen, isSettingsOpen]);

  // Escape key closes any open sheet
  useEffect(() => {
    const handleEscapeKey = (event) => {
      if (event.key === "Escape") {
        setIsMobileNavOpen(false);
        setIsSettingsOpen(false);
      }
    };
    document.addEventListener("keydown", handleEscapeKey);
    return () => document.removeEventListener("keydown", handleEscapeKey);
  }, []);

  return (
    <>
      {/* ============ DESKTOP: Glassmorphism navbar di tengah atas ============ */}
      <header className="hidden md:flex fixed top-6 inset-x-0 z-50 justify-center px-4">
        <nav className="flex items-center text-white gap-8 px-6 py-3 rounded-full bg-black/30 backdrop-blur-xl border border-white/20 dark:border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.12)]">
          <a
            href="/home"
            onClick={(e) => handleNavLinkClick(e, "/home")}
            className="text-lg font-semibold tracking-tight text-neutral-900 dark:text-white whitespace-nowrap no-underline hover:no-underline"
          >
            Musyahadat
          </a>

          <ul className="flex items-center m-0 p-0 gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => handleNavLinkClick(e, link.href)}
                  className={`relative p-2 text-sm rounded-full transition-all duration-200 no-underline hover:no-underline
                    ${
                      activeHref === link.href
                        ? "text-neutral-900 dark:text-white bg-white/30 dark:bg-black/20 shadow-sm"
                        : "text-neutral-900 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white hover:bg-white/20 dark:hover:bg-white/5"
                    }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="pl-4 border-l border-white/20 dark:border-white/10">
            <Switch isDarkMode={isDarkMode} onToggle={toggleDarkMode} />
          </div>
        </nav>
      </header>

      {/* ============ MOBILE: Bottom dock dengan glassmorphism ============ */}
      <div className="md:hidden fixed bottom-5 inset-x-0 z-50 flex justify-center px-6">
        <div id="mobile-dock" className="relative w-full max-w-xs">
          {/* Glassmorphism bottom bar */}
          <div className="flex items-center justify-around h-16 px-4 rounded-full bg-black/30 backdrop-blur-xl border border-white/20 dark:border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.15)]">
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                handleNavLinkClick(e, "/home");
              }}
              aria-label="Home"
              className="text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-colors p-2"
            >
              <IconHome />
            </button>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                toggleMobileNav();
              }}
              aria-label={isMobileNavOpen ? "Close menu" : "Open menu"}
              className="text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-colors p-2"
            >
              <IconMenu open={isMobileNavOpen} />
            </button>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                toggleSettings();
              }}
              aria-label="Settings"
              className={`transition-colors p-2 ${
                isSettingsOpen ? "text-neutral-900 dark:text-white" : "text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white"
              }`}
            >
              <IconSettings />
            </button>
          </div>
        </div>

        {/* Slide-up menu sheet */}
        {isMobileNavOpen && (
          <div
            id="mobile-sheet"
            className="fixed bottom-24 w-80 rounded-2xl p-3
                       bg-black/30 text-white backdrop-blur-xl
                       border border-white/20 dark:border-white/10 shadow-2xl
                       animate-[fadeIn_0.15s_ease-out]"
          >
            <ul className="flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavLinkClick(e, link.href)}
                    className={`block px-4 py-3 rounded-xl text-sm transition-all duration-200 no-underline hover:no-underline
                      ${
                        activeHref === link.href
                          ? "text-neutral-900 dark:text-white bg-neutral-100 dark:bg-white/10"
                          : "text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-50 dark:hover:bg-white/5"
                      }`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Settings sheet (dark mode toggle) */}
        {isSettingsOpen && (
          <div
            id="mobile-sheet"
            className="fixed bottom-24 w-80 rounded-2xl p-4
                       bg-black/30 backdrop-blur-xl
                       border border-white/20 dark:border-white/10 shadow-2xl
                       flex items-center justify-between
                       animate-[fadeIn_0.15s_ease-out]"
          >
            <span className="text-sm text-neutral-700 dark:text-neutral-200 font-medium">Dark Mode</span>
            <Switch isDarkMode={isDarkMode} onToggle={toggleDarkMode} />
          </div>
        )}
      </div>

      {/* CSS Animation & Link Reset */}
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        /* Reset default link styles */
        a {
          text-decoration: none !important;
          color: inherit !important;
        }
        
        a:hover {
          text-decoration: none !important;
        }
        
        a:visited {
          color: inherit !important;
        }
        
        a:active {
          color: inherit !important;
        }
      `}</style>
    </>
  );
};

export default Header;