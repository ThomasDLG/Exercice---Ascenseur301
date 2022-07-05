let burger = document.querySelector(".burger");
let menu = document.querySelector("header nav ul");

burger.addEventListener("click", function (evt) {
  console.log("click");
  menu.classList.toggle("active");
});
