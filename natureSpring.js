// hover para sa button

const sideButton = document.querySelectorAll(".glowing-btn");

sideButton.forEach((btn) => {
  btn.addEventListener("click", function () {
    this.classList.toggle("clicked");
  });
});

// toogle dito ah

const toggleButton = document.getElementById("sidebar-toggle");
const sidebar = document.getElementById("sidebar");

toggleButton.addEventListener("click", function () {
  sidebar.classList.toggle("shrunk");

  toggleButton.classList.toggle("active");
});

// darkmode
const darkModeButton = document.getElementById("darkmode-button");
const body = document.body;
const revealedArea = document.querySelector(".revealed-area");

revealedArea.style.display = "none";

darkModeButton.addEventListener("click", function () {
  darkModeButton.classList.toggle("dark");

  if (darkModeButton.classList.contains("dark")) {
    revealedArea.style.display = "block";
  } else {
    revealedArea.style.display = "none";
  }

  document.addEventListener("mousemove", (e) => {
    if (darkModeButton.classList.contains("dark")) {
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      const gradientCenterX = (mouseX / window.innerWidth) * 100;
      const gradientCenterY = (mouseY / window.innerHeight) * 100;

      revealedArea.style.background = `radial-gradient(
        circle 150px at ${gradientCenterX}% ${gradientCenterY}%,
        transparent 10%,
        rgba(0, 0, 0, 0.98)
      )`;
    }
  });
});

