function toggleNavLinks() {
  const navLinks = document.querySelector(".nav-links");
  navLinks.classList.toggle("show");
}

const burgerIcon = document.querySelector(".burger-icon");
burgerIcon.addEventListener("click", toggleNavLinks);
