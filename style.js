document.addEventListener("DOMContentLoaded", function () {
  const mobileMenu = document.querySelector(".navbar-mobile");
  const mobileToggle = document.querySelector(".mobile-menu-toggle");
  mobileToggle.addEventListener("click", function () {
    mobileMenu.classList.toggle("mobile-display");
  });
});
