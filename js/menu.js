const menuToggle = document.querySelector(".menu-toggle");
const mobileMenu = document.querySelector(".mobile-menu");
const menuClose = document.querySelector(".menu-close");

menuToggle.addEventListener("click", () => {
  mobileMenu.classList.add("is-open");
});

menuClose.addEventListener("click", () => {
  mobileMenu.classList.remove("is-open");
});
