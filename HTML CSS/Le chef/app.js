let burger = document.querySelector(".fa-bars");
let list = document.querySelector(".burger ul");

burger.addEventListener("click", function () {
  list.classList.toggle("active");
  console.log("click");
});
