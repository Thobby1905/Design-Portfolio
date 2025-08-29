// Dark mode toggle
const toggleBtn = document.getElementById("toggle-theme");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  // change icon between moon and sun
  if (document.body.classList.contains("dark")) {
    toggleBtn.textContent = "☀️";
  } else {
    toggleBtn.textContent = "🌙";
  }
});

// Mobile nav toggle
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("show");

  // Toggle hamburger icon
  if (navLinks.classList.contains("show")) {
    hamburger.textContent = "✖";
  } else {
    hamburger.textContent = "☰";
  }
});

// Close menu when a nav link is clicked (mobile)
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("show");
    hamburger.textContent = "☰"; // reset icon
  });
});
