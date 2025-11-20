// Menu Bar
const toggle = document.querySelector(".toggle");
const menu = document.querySelector(".nav-menu");

function toggleMenu() {
  if (menu.classList.contains("active")) {
    menu.classList.remove("active");

    // add menu icon
    toggle.innerHTML = `<i class="fas fa-bars">`;
  } else {
    menu.classList.add("active");

    // add x (close menu) icon
    toggle.innerHTML = `<i class="fas fa-times"></i>`;
  }
}

toggle.addEventListener("click", toggleMenu, false);

// Close mobile menu when a nav link is clicked
const navLinks = document.querySelectorAll(".nav-menu .nav-item a");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    menu.classList.remove("active");
    toggle.innerHTML = `<i class="fas fa-bars"></i>`;
  });
});
