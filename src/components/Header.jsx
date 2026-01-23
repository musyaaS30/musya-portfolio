import { useState, useEffect } from "react";
import { useDarkMode } from "../hooks/useDarkMode";
import DotGrid from "../../public/assets/elements/dotGrid";

const Header = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const username = localStorage.getItem("username") || "Guest";

  // Handle mobile nav toggle
  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
    // Toggle body overflow
    document.body.classList.toggle("mobile-nav-active", !isMobileNavOpen);
  };

  // Close mobile nav when clicking on a link
  const handleNavLinkClick = (e, href) => {
    if (href && href.startsWith("#")) {
      e.preventDefault();
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    }

    // Close mobile nav
    setIsMobileNavOpen(false);
    document.body.classList.remove("mobile-nav-active");
  };

  // Toggle dropdown
  const toggleDropdown = (dropdownName, e) => {
    if (e) e.preventDefault();
    setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName);
  };

  // Close mobile nav when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      const navmenu = document.querySelector(".navmenu");
      const toggleButton = document.querySelector(".mobile-nav-toggle");

      if (
        isMobileNavOpen &&
        navmenu &&
        !navmenu.contains(event.target) &&
        (!toggleButton || !toggleButton.contains(event.target))
      ) {
        setIsMobileNavOpen(false);
        document.body.classList.remove("mobile-nav-active");
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isMobileNavOpen]);

  // Handle escape key to close mobile nav
  useEffect(() => {
    const handleEscapeKey = (event) => {
      if (event.key === "Escape" && isMobileNavOpen) {
        setIsMobileNavOpen(false);
        document.body.classList.remove("mobile-nav-active");
      }
    };

    document.addEventListener("keydown", handleEscapeKey);

    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, [isMobileNavOpen]);

  return (
    <header
      id="header"
      className="header d-flex align-items-center position-relative"
    >

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

      <div className="container-fluid position-relative d-flex align-items-center justify-content-between">
        {/* Logo */}
        <span
          href="#hero"
          className="logo d-flex align-items-center"
          onClick={(e) => handleNavLinkClick(e, "#hero")}
        >
          <h1 className="sitename">Musyahadat</h1>
        </span>

        {/* Dark Mode Toggle */}
        <div className="toggle-container">
          <button
            id="darkModeToggle"
            className="toggle-switch"
            aria-label="Toggle dark mode"
            onClick={toggleDarkMode}
          >
            <span className="toggle-slider">{isDarkMode ? "☀️" : "🌙"}</span>
          </button>
        </div>

        {/* Mobile Nav Toggle - Always visible but positioned fixed */}
        <div className="mobile-nav-toggle" onClick={toggleMobileNav}>
          <i className={isMobileNavOpen ? "bi bi-x" : "bi bi-list"}></i>
        </div>

        {/* Navigation Menu */}
        <nav
          id="navmenu"
          className={`navmenu ${isMobileNavOpen ? "mobile-nav-active" : ""}`}
        >
          <ul>
            {/* Home */}
            <li>
              <a
                href="#hero"
                className="active"
                onClick={(e) => handleNavLinkClick(e, "#hero")}
              >
                Home
              </a>
            </li>

            {/* About */}
            <li>
              <a href="#about" onClick={(e) => handleNavLinkClick(e, "#about")}>
                About
              </a>
            </li>

            {/* Resume */}
            <li>
              <a
                href="#resume"
                onClick={(e) => handleNavLinkClick(e, "#resume")}
              >
                Resume
              </a>
            </li>

            {/* Portfolio */}
            <li>
              <a
                href="#portfolio"
                onClick={(e) => handleNavLinkClick(e, "#portfolio")}
              >
                Portfolio
              </a>
            </li>

            {/* Services */}
            <li>
              <a
                href="#services"
                onClick={(e) => handleNavLinkClick(e, "#services")}
              >
                Services
              </a>
            </li>

            {/* Dropdown Menu */}
            <li
              className={`dropdown ${
                activeDropdown === "main" ? "dropdown-active" : ""
              }`}
            >
              <a href="#" onClick={(e) => toggleDropdown("main", e)}>
                <span>Dropdown</span>
                <i className="bi bi-chevron-down"></i>
              </a>
              <ul
                className={activeDropdown === "main" ? "dropdown-active" : ""}
              >
                <li>
                  <a href="#" onClick={(e) => handleNavLinkClick(e, "#")}>
                    Dropdown 1
                  </a>
                </li>

                {/* Deep Dropdown */}
                <li
                  className={`dropdown ${
                    activeDropdown === "deep" ? "dropdown-active" : ""
                  }`}
                >
                  <a href="#" onClick={(e) => toggleDropdown("deep", e)}>
                    <span>Deep Dropdown</span>
                    <i className="bi bi-chevron-down"></i>
                  </a>
                  <ul
                    className={
                      activeDropdown === "deep" ? "dropdown-active" : ""
                    }
                  >
                    <li>
                      <a href="#" onClick={(e) => handleNavLinkClick(e, "#")}>
                        Deep Dropdown 1
                      </a>
                    </li>
                    <li>
                      <a href="#" onClick={(e) => handleNavLinkClick(e, "#")}>
                        Deep Dropdown 2
                      </a>
                    </li>
                    <li>
                      <a href="#" onClick={(e) => handleNavLinkClick(e, "#")}>
                        Deep Dropdown 3
                      </a>
                    </li>
                    <li>
                      <a href="#" onClick={(e) => handleNavLinkClick(e, "#")}>
                        Deep Dropdown 4
                      </a>
                    </li>
                    <li>
                      <a href="#" onClick={(e) => handleNavLinkClick(e, "#")}>
                        Deep Dropdown 5
                      </a>
                    </li>
                  </ul>
                </li>

                <li>
                  <a href="#" onClick={(e) => handleNavLinkClick(e, "#")}>
                    Dropdown 2
                  </a>
                </li>
                <li>
                  <a href="#" onClick={(e) => handleNavLinkClick(e, "#")}>
                    Dropdown 3
                  </a>
                </li>
                <li>
                  <a href="#" onClick={(e) => handleNavLinkClick(e, "#")}>
                    Dropdown 4
                  </a>
                </li>
              </ul>
            </li>

            {/* Contact */}
            <li>
              <a
                href="#contact"
                onClick={(e) => handleNavLinkClick(e, "#contact")}
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
