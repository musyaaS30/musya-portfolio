window.onload = () => {
  const images = document.querySelectorAll(".floating-image");
  const tooltip = document.getElementById("tooltip");
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;

  // Entrance animation
  gsap.from(images, {
    duration: 1.5,
    opacity: 0,
    scale: 1,
    x: () => gsap.utils.random(0, windowWidth - 100),
    y: () => gsap.utils.random(0, windowHeight - 100),
    ease: "elastic.out(1, 0.75)",
    stagger: 0.2,
  });

  images.forEach((img) => {
    // Floating animation
    gsap.to(img, {
      x: "+=" + gsap.utils.random(-20, 50),
      y: "+=" + gsap.utils.random(-100, 50),
      duration: gsap.utils.random(3, 6),
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
    });

    // Rotation animation
    gsap.to(img, {
      rotation: () => gsap.utils.random(-15, 15),
      duration: gsap.utils.random(4, 8),
      ease: "power1.inOut",
      repeat: -1,
      yoyo: true,
    });

    // Pulse scale effect
    gsap.to(img, {
      scale: () => gsap.utils.random(0.9, 1.1),
      duration: gsap.utils.random(2, 4),
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
    });

    // Hover tooltip
    img.addEventListener("mouseenter", (e) => {
      tooltip.innerHTML = img.dataset.info; // pakai innerHTML agar HTML dirender
      const rect = img.getBoundingClientRect();
      tooltip.style.left = rect.left + rect.width / 2 + "px";
      tooltip.style.top = rect.top - 10 + "px";

      gsap.to(tooltip, { opacity: 1, y: -10, duration: 0.3 });
    });

    img.addEventListener("mouseleave", () => {
      gsap.to(tooltip, { opacity: 0, y: 0, duration: 0.3 });
    });
  });
};
