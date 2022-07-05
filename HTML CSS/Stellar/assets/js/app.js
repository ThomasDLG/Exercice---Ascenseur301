let popup = document.querySelector(".popup");
let cross = document.querySelector(".fa-square-xmark");

cross.addEventListener("click", function (evt) {
  popup.classList.add("display");
});
