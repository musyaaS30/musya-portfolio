import { useState, useEffect, useMemo, useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import {
  Home,
  User,
  FileText,
  Briefcase,
  Layers,
  Mail,
  ChevronDown,
  Check,
  Sparkles,
} from "lucide-react";
import {
  NotchLeftWing,
  NotchRightWing,
  NotchCornerLeftWing,
  NotchCornerRightWing,
  NotchItem,
} from "./ui/adaptive-notch-navigation-bar";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { id: "home", label: "Home", href: "/home", icon: Home },
  { id: "about", label: "About", href: "#about", icon: User },
  { id: "resume", label: "Resume", href: "/resume", icon: FileText },
  { id: "portfolio", label: "Portfolio", href: "#portfolio", icon: Briefcase },
  { id: "services", label: "Services", href: "#services", icon: Layers },
  { id: "contact", label: "Contact", href: "/contact", icon: Mail },
];

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const currentRouteId = useMemo(() => {
    if (location.pathname === "/resume") return "resume";
    if (location.pathname === "/portfolio") return "portfolio";
    if (location.pathname === "/contact") return "contact";
    if (location.hash) {
      const hashId = location.hash.replace("#", "");
      if (NAV_ITEMS.some((item) => item.id === hashId)) return hashId;
    }
    return "home";
  }, [location.pathname, location.hash]);

  const isNotHome = location.pathname !== "/" && location.pathname !== "/home";

  const [activeId, setActiveId] = useState(currentRouteId);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Sync with route navigation and scroll spy
  useEffect(() => {
    if (
      location.pathname === "/resume" ||
      location.pathname === "/portfolio" ||
      location.pathname === "/contact"
    ) {
      return;
    }

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 220;
      const sections = ["contact", "services", "portfolio", "about"];

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el && scrollPosition >= el.offsetTop) {
          setActiveId(sectionId);
          return;
        }
      }

      if (window.scrollY < 250) {
        setActiveId("home");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  const effectiveActiveId =
    location.pathname === "/resume"
      ? "resume"
      : location.pathname === "/portfolio"
      ? "portfolio"
      : location.pathname === "/contact"
      ? "contact"
      : activeId;

  const handleSelectNav = useCallback(
    (id) => {
      setActiveId(id);
      setIsDropdownOpen(false);

      const item = NAV_ITEMS.find((n) => n.id === id);
      if (!item) return;

      if (item.href.startsWith("#")) {
        if (location.pathname !== "/home") {
          navigate("/home", { state: { scrollTo: item.id } });
        } else {
          const el = document.getElementById(item.id);
          if (el) {
            el.scrollIntoView({ behavior: "smooth" });
          }
        }
      } else if (item.href.startsWith("/")) {
        navigate(item.href);
        if (item.id === "home") {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      }
    },
    [location.pathname, navigate]
  );

  // Close dropdown on outside click or Escape
  useEffect(() => {
    const handleClickOutside = (e) => {
      const notchContainer = document.getElementById("notch-mobile-nav");
      if (notchContainer && !notchContainer.contains(e.target)) {
        setIsDropdownOpen(false);
      }
    };

    const handleEscape = (e) => {
      if (e.key === "Escape") setIsDropdownOpen(false);
    };

    if (isDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleEscape);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isDropdownOpen]);

  const activeItem = useMemo(
    () => NAV_ITEMS.find((n) => n.id === effectiveActiveId) || NAV_ITEMS[0],
    [effectiveActiveId]
  );

  return (
    <>
      {/* ========================================================================= */}
      {/* 1. DESKTOP VIEW (>= 1280px / xl): SLEEK OBSIDIAN NOTCH SYSTEM             */}
      {/* ========================================================================= */}
      <motion.div
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
        className="hidden xl:block pointer-events-none fixed top-0 border-t-5 border-zinc-950/92 inset-x-0 z-50"
      >
        {/* 1.1 Left Logo Notch */}
        <aside
          aria-label="Brand logo notch"
          className={cn(
            "pointer-events-auto absolute left-0 top-0 z-50 h-11 px-5 select-none",
            "flex items-center rounded-br-[24px]",
            "bg-zinc-950/92 text-white backdrop-blur-2xl border-b border-r border-zinc-800/80 shadow-[0_12px_35px_rgba(0,0,0,0.3)]",
            "transition-colors duration-300"
          )}
        >
          <a
            href="/home"
            onClick={(e) => {
              e.preventDefault();
              handleSelectNav("home");
            }}
            title={isNotHome ? "Back to Home" : "Musyahadat"}
            aria-label={isNotHome ? "Back to Home" : "Musyahadat Home"}
            className="group relative flex items-center gap-2 text-sm font-bold tracking-tight text-white no-underline hover:no-underline"
          >
            <div className="relative flex size-7 items-center justify-center text-white">
              {/* Ambient light ripple on state transition */}
              <AnimatePresence>
                <motion.span
                  key={isNotHome ? "glow-home" : "glow-logo"}
                  initial={{ opacity: 0.5, scale: 0.7 }}
                  animate={{ opacity: 0, scale: 1.5 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.45, ease: "easeOut" }}
                  className="pointer-events-none absolute inset-0 rounded-full bg-white/20 blur-[5px]"
                />
              </AnimatePresence>

              {/* Seamless morph animation between Logo and Home Icon */}
              <AnimatePresence initial={false}>
                {isNotHome ? (
                  <motion.div
                    key="desktop-home-icon"
                    initial={{ opacity: 0, scale: 0.4, rotate: -60, filter: "blur(4px)" }}
                    animate={{ opacity: 1, scale: 1, rotate: 0, filter: "blur(0px)" }}
                    exit={{ opacity: 0, scale: 0.4, rotate: 60, filter: "blur(4px)" }}
                    transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <Home className="size-5.5 text-white stroke-[2.2] transition-transform duration-200 group-hover:scale-110" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="desktop-musya-logo"
                    initial={{ opacity: 0, scale: 0.4, rotate: 60, filter: "blur(4px)" }}
                    animate={{ opacity: 1, scale: 1, rotate: 0, filter: "blur(0px)" }}
                    exit={{ opacity: 0, scale: 0.4, rotate: -60, filter: "blur(4px)" }}
                    transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <img
                      src="/musyaLogo.png"
                      alt="Musyahadat"
                      className="w-full h-full object-contain transition-transform duration-200 group-hover:scale-105"
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            {/* <span>Musyahadat</span> */}
          </a>

          {/* Notch Wings */}
          <NotchRightWing
            position="top"
            className="text-zinc-950/92 dark:text-zinc-950/92 transition-colors duration-300"
          />
          <NotchCornerLeftWing
            position="top"
            className="text-zinc-950/92 dark:text-zinc-950/92 transition-colors duration-300"
          />
        </aside>

        {/* 1.2 Center Navigation Notch */}
        <header
          role="tablist"
          aria-orientation="horizontal"
          className={cn(
            "pointer-events-auto absolute left-1/2 -translate-x-1/2 top-0 z-50 h-11 px-3 select-none",
            "flex items-center rounded-b-[24px]",
            "bg-zinc-950/92 text-white backdrop-blur-2xl border-b border-x border-zinc-800/80 shadow-[0_12px_35px_rgba(0,0,0,0.3)]",
            "transition-colors duration-300"
          )}
        >
          <NotchLeftWing
            position="top"
            className="text-zinc-950/92 dark:text-zinc-950/92 transition-colors duration-300"
          />
          <NotchRightWing
            position="top"
            className="text-zinc-950/92 dark:text-zinc-950/92 transition-colors duration-300"
          />

          <LayoutGroup id="desktop-notch-nav">
            <div className="flex items-center gap-1">
              {NAV_ITEMS.map((item) => (
                <NotchItem
                  key={item.id}
                  id={item.id}
                  label={item.label}
                  icon={item.icon}
                  isActive={item.id === effectiveActiveId}
                  onSelect={handleSelectNav}
                  className={cn(
                    "h-8 px-3 text-xs font-semibold rounded-full transition-colors",
                    item.id === effectiveActiveId
                      ? "text-white font-bold"
                      : "text-zinc-400 hover:text-white"
                  )}
                />
              ))}
            </div>
          </LayoutGroup>
        </header>

        {/* 1.3 Right Action Notch */}
        <aside
          aria-label="User actions notch"
          className={cn(
            "pointer-events-auto absolute right-0 top-0 z-50 h-11 px-5 select-none",
            "flex items-center gap-3 rounded-bl-[24px]",
            "bg-zinc-950/92 text-white backdrop-blur-2xl border-b border-l border-zinc-800/80 shadow-[0_12px_35px_rgba(0,0,0,0.3)]",
            "transition-colors duration-300"
          )}
        >
          <NotchLeftWing
            position="top"
            className="text-zinc-950/92 dark:text-zinc-950/92 transition-colors duration-300"
          />
          <NotchCornerRightWing
            position="top"
            className="text-zinc-950/92 dark:text-zinc-950/92 transition-colors duration-300"
          />

          <div className="flex items-center gap-2">
            <a
              href="https://github.com/musyaaS30"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="flex items-center gap-2 px-3 text-l font-semibold text-white hover:border-white/30 transition-all duration-200 no-underline shadow-xs"
            >
              <svg
                viewBox="0 0 1024 1024"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="size-5.5 fill-current"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z"
                  transform="scale(64)"
                  fill="currentColor"
                />
              </svg>
            </a>
          </div>
        </aside>

      </motion.div>

      {/* ========================================================================= */}
      {/* 2. TABLET & MOBILE VIEW (< 1280px): COMPACT SLEEK DARK NOTCH ISLAND       */}
      {/* ========================================================================= */}
      <motion.div
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
        className="xl:hidden pointer-events-none fixed top-0 inset-x-0 z-50 flex justify-center px-4"
      >
        <div
          id="notch-mobile-nav"
          className={cn(
            "pointer-events-auto relative z-50 flex flex-col select-none",
            "rounded-b-[24px] px-4",
            "bg-zinc-950/95 text-white backdrop-blur-2xl border-b border-x border-zinc-800/80 shadow-[0_14px_40px_rgba(0,0,0,0.4)]",
            "transition-all duration-300 w-auto max-w-[95vw]"
          )}
        >
          {/* Notch Wings */}
          <NotchLeftWing
            position="top"
            className="text-zinc-950/95 dark:text-zinc-950/95 transition-colors duration-300"
          />
          <NotchRightWing
            position="top"
            className="text-zinc-950/95 dark:text-zinc-950/95 transition-colors duration-300"
          />

          {/* Unified Horizontal Bar */}
          <div className="flex h-11 items-center justify-between gap-3 sm:gap-5">
            {/* Left Brand Slot */}
            <a
              href="/home"
              onClick={(e) => {
                e.preventDefault();
                handleSelectNav("home");
              }}
              title={isNotHome ? "Back to Home" : "Musyahadat"}
              aria-label={isNotHome ? "Back to Home" : "Musyahadat Home"}
              className="flex items-center gap-1.5 text-xs sm:text-sm font-bold text-white no-underline group"
            >
              <div
                className={cn(
                  "relative flex size-5.5 items-center justify-center rounded-md transition-colors duration-300 overflow-hidden",
                  isNotHome
                    ? "bg-white/15 text-white group-hover:bg-white/25"
                    : "bg-[var(--accent-color)] text-black"
                )}
              >
                <AnimatePresence initial={false}>
                  {isNotHome ? (
                    <motion.div
                      key="mob-home"
                      initial={{ opacity: 0, scale: 0.4, rotate: -45 }}
                      animate={{ opacity: 1, scale: 1, rotate: 0 }}
                      exit={{ opacity: 0, scale: 0.4, rotate: 45 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="absolute inset-0 flex items-center justify-center"
                    >
                      <Home className="size-3.5 text-white stroke-[2.2]" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="mob-sparkles"
                      initial={{ opacity: 0, scale: 0.4, rotate: 45 }}
                      animate={{ opacity: 1, scale: 1, rotate: 0 }}
                      exit={{ opacity: 0, scale: 0.4, rotate: -45 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="absolute inset-0 flex items-center justify-center"
                    >
                      <Sparkles className="size-3" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <span className="hidden sm:inline relative overflow-hidden">
                <AnimatePresence mode="wait" initial={false}>
                  <motion.span
                    key={isNotHome ? "lbl-home" : "lbl-musya"}
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    transition={{ duration: 0.22, ease: "easeOut" }}
                    className="inline-block"
                  >
                    {isNotHome ? "Home" : "Musyahadat"}
                  </motion.span>
                </AnimatePresence>
              </span>
            </a>

            {/* Center Dropdown Trigger */}
            <button
              type="button"
              aria-expanded={isDropdownOpen}
              aria-haspopup="listbox"
              aria-label="Toggle navigation menu"
              onClick={() => setIsDropdownOpen((prev) => !prev)}
              className={cn(
                "flex h-8 items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold outline-none transition-colors",
                " hover:bg-white/15 text-white"
              )}
            >
              {activeItem?.icon && (
                <activeItem.icon className="size-3.5 text-[var(--accent-color)]" />
              )}
              <span>{activeItem?.label}</span>
              <ChevronDown
                className={cn(
                  "size-3.5 transition-transform duration-200 text-zinc-400",
                  isDropdownOpen && "rotate-180"
                )}
              />
            </button>

            {/* Right Action Slot */}
            <div className="flex items-center pl-1 border-l border-zinc-800">
              <a
                href="https://github.com/musyaaS30"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="flex items-center gap-1.5 px-2.5 text-[11px] font-semibold text-white transition-colors no-underline"
              >
                <svg
                  viewBox="0 0 1024 1024"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4.5 fill-current"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z"
                    transform="scale(64)"
                    fill="currentColor"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Expandable Dropdown Drawer */}
          <div
            role="listbox"
            aria-label="Navigation options"
            className={cn(
              "grid transition-[grid-template-rows,opacity] duration-200 ease-out w-full",
              isDropdownOpen
                ? "grid-rows-[1fr] opacity-100 pb-2.5 pt-1"
                : "grid-rows-[0fr] opacity-0 pointer-events-none"
            )}
          >
            <div className="overflow-hidden">
              <div className="flex flex-col gap-1 pt-1">
                {NAV_ITEMS.map((item) => {
                  const Icon = item.icon;
                  const isSelected = item.id === effectiveActiveId;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      role="option"
                      aria-selected={isSelected}
                      onClick={() => handleSelectNav(item.id)}
                      className={cn(
                        "flex w-full items-center justify-between gap-2.5 rounded-full px-3 py-2 text-left text-xs font-medium outline-none transition-colors",
                        isSelected
                          ? "bg-[var(--accent-color)] font-bold text-black shadow-xs"
                          : "text-zinc-300 hover:bg-white/10 hover:text-white"
                      )}
                    >
                      <div className="flex items-center gap-2">
                        {Icon && <Icon className="size-3.5 shrink-0" />}
                        <span>{item.label}</span>
                      </div>
                      {isSelected && <Check className="size-3.5" />}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Header;