const menu = document.querySelector(".menu-bars-icon");
const drop = document.querySelector(".nav-links-dropdown");
const close = document.querySelector(".close-icon");
menu.addEventListener("click", function () {
  drop.classList.toggle("show");
});

close.addEventListener("click", function () {
  drop.classList.remove("show");
});
