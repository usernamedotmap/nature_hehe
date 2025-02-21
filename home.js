document
  .getElementById("feedbackForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const feedback = document.getElementById("feedback").value;

    const data = { email, feedback };

    let storeData = JSON.parse(localStorage.getItem("userData")) || [];
    storeData.push(data);
    localStorage.setItem("userData", JSON.stringify(storeData));

    document.getElementById("feedbackForm").reset();
  });

// hover

const sideButton = document.querySelectorAll(".glowing-btn");

sideButton.forEach((btn) => {
  btn.addEventListener("click", function () {
    this.classList.toggle("clicked");
  });
});

// toogle

const toggleButton = document.getElementById("sidebar-toggle");
const sidebar = document.getElementById("sidebar");
const emailContainer = document.querySelector(".email-container");

toggleButton.addEventListener("click", function () {
  sidebar.classList.toggle("shrunk");

  toggleButton.classList.toggle("active");
  emailContainer.classList.toggle("move");
});

// darkmode
const darkModeButton = document.getElementById("darkmode-button");
const body = document.body;
const revealedArea = document.querySelector(".revealed-area");

revealedArea.style.display = "none"; 

darkModeButton.addEventListener("click", function () {
  darkModeButton.classList.toggle("dark");

  // Toggle visibility of the spotlight effect
  if (darkModeButton.classList.contains("dark")) {
    revealedArea.style.display = "block"; // Show spotlight when dark mode is on
  } else {
    revealedArea.style.display = "none"; // Hide spotlight when dark mode is off
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


