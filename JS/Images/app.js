let petit = document.querySelectorAll(".little");
let grand = document.querySelector(".big");

for (let i = 0; i < petit.length; i++) {
  petit[i].addEventListener("click", function (evt) {
    console.log(petit[i]);
    let source = petit[i].getAttribute("src");
    console.log(source);
    grand.setAttribute("src", source);
  });
}
