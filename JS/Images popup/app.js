let petit = document.querySelectorAll(".little");
let grand = document.querySelector(".big");
let popup = document.querySelector(".view");
let closed = document.querySelector(".cross");

for (let i = 0; i < petit.length; i++) {
  petit[i].addEventListener("click", function (evt) {
    let source = petit[i].getAttribute("src");
    popup.classList.add("active");
    grand.setAttribute("src", source);
  });
  closed.addEventListener("click", function (evt) {
    popup.classList.remove("active");
  });
}
