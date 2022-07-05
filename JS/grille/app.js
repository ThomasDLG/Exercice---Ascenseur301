let gridactive = document.querySelector(".btngridactive");
let listactive = document.querySelector(".btnlistactive");
let grid = document.querySelector(".btngrid");
let list = document.querySelector(".btnlist");
let card = document.querySelectorAll(".card");

list.addEventListener("click", function (evt) {
  list.classList.add("hide");
  listactive.classList.remove("hide");
  gridactive.classList.add("hide");
  grid.classList.remove("hide");
  for (let i = 0; i < card.length; i++) {
    card[i].classList.add("list");
  }
});

grid.addEventListener("click", function (evt) {
  list.classList.remove("hide");
  listactive.classList.add("hide");
  gridactive.classList.remove("hide");
  grid.classList.add("hide");
  for (let i = 0; i < card.length; i++) {
    card[i].classList.remove("list");
  }
});
