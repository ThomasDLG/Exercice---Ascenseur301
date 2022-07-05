const menu = document.querySelector(".nav ul");
const menuItems = document.querySelectorAll(".menuItem");
const hamburger = document.querySelector(".hamburger");
const closeIcon = document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");

hamburger.addEventListener("click", function (evt) {
  menu.classList.toggle("active");
});
