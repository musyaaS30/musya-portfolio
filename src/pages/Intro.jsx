import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import "../styles/intro.css";

// Register GSAP plugins
gsap.registerPlugin(TextPlugin);

const Intro = () => {
  const [username, setUsername] = useState("");
  const [showButton, setShowButton] = useState(false);
  const navigate = useNavigate();

  const heroRef = useRef(null);
  const h2Ref = useRef(null);
  const h1Ref = useRef(null);
  const nameTextRef = useRef(null);
  const cursorRef = useRef(null);
  const pRef = useRef(null);
  const inputRef = useRef(null);
  const buttonRef = useRef(null);

  // Clear any existing dark mode preference on intro
  useEffect(() => {
    // Set ke light mode saat masuk intro
    localStorage.setItem("darkMode", "false");
    document.body.classList.remove("dark-mode");
  }, []);

  useEffect(() => {
    const typingName = "Musyahadat Safitrah";

    // Reset text for animation
    if (nameTextRef.current) {
      nameTextRef.current.textContent = "";
    }

    // GSAP Animation Timeline
    const tl = gsap.timeline({
      defaults: {
        duration: 0.8,
        ease: "power2.out",
      },
    });

    tl.to(h2Ref.current, { opacity: 1, y: 0, visibility: "visible" })
      .to(h1Ref.current, { opacity: 1, y: 0, visibility: "visible" }, "<")
      .to(
        cursorRef.current,
        {
          opacity: 1,
          repeat: -1,
          yoyo: true,
          duration: 0.7,
          ease: "none",
        },
        "<"
      )
      .to(nameTextRef.current, {
        duration: typingName.length * 0.1,
        text: {
          value: typingName,
          delimiter: "",
        },
        ease: "none",
      })
      .to(cursorRef.current, {
        opacity: 0,
        duration: 0.5,
        onComplete: () => {
          if (cursorRef.current) cursorRef.current.style.visibility = "hidden";
        },
      })
      .to(pRef.current, { opacity: 1, y: 0, visibility: "visible" })
      .to(inputRef.current, { opacity: 1, y: 0, visibility: "visible" });
  }, []);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setUsername(value);

    if (value.trim() !== "") {
      setShowButton(true);
      gsap.to(buttonRef.current, {
        opacity: 1,
        y: 0,
        visibility: "visible",
        duration: 0.5,
      });
    } else {
      gsap.to(buttonRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.5,
        onComplete: () => setShowButton(false),
      });
    }
  };

  const handleGoClick = () => {
    if (username.trim()) {
      localStorage.setItem("username", username.trim());
      
      // Pastikan darkMode = false saat pertama masuk home
      localStorage.setItem("darkMode", "false");
      
      navigate("/home");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && username.trim()) {
      handleGoClick();
    }
  };

  return (
    <div className="intro-page">
      <div ref={heroRef} className="hero-container">
        <h2 ref={h2Ref} className="intro-h2 animated-element">
          Hello
        </h2>

        <h1 ref={h1Ref} className="intro-h1 animated-element">
          My name is{" "}
          <span ref={nameTextRef} className="outline-text name-text"></span>
          <span ref={cursorRef} className="cursor">
            _
          </span>
        </h1>

        <p ref={pRef} className="intro-p animated-element">
          Hello there 🧐, before we get started, what is your name?
        </p>

        {/* Input nama */}
        <input
          ref={inputRef}
          id="username"
          type="text"
          placeholder="Insert your name here ..."
          value={username}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
          className="intro-input animated-element"
        />

        {/* Tombol muncul setelah input diisi */}
        <button
          ref={buttonRef}
          id="goBtn"
          onClick={handleGoClick}
          className={`intro-button ${showButton ? "visible" : "hidden"}`}
        >
          Let's Go
        </button>
      </div>
    </div>
  );
};

export default Intro;