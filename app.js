const toggler = document.querySelector(".toggler");
const sideNav = document.querySelector(".nav-links");
const header = document.querySelector("header");

toggler.addEventListener("click", () => {
  sideNav.classList.toggle("transform-0");
});

let initial = 0;
window.addEventListener("scroll", (e) => {
  const offeset = window.pageYOffset;

  if (offeset > initial) {
    header.style.transform = "translateY(-200%)";
  } else {
    header.style.transform = "translateY(0)";
  }
  initial = window.pageYOffset;
});
