let petit = document.querySelectorAll(".little");
let grand = document.querySelector(".big");
let popup = document.querySelector(".view");
let closed = document.querySelector(".cross");
let right = document.querySelector(".right");
let left = document.querySelector(".left");

let indexImage = 0;
function changeImage(index) {
  let source = petit[index].getAttribute("src");
  grand.setAttribute("src", source);
}

for (let index = 0; index < petit.length; index++) {
  petit[index].addEventListener("click", function (evt) {
    popup.classList.add("active");
    indexImage = index;
    changeImage(index);
  });
  closed.addEventListener("click", function (evt) {
    popup.classList.remove("active");
  });
}

right.addEventListener("click", function (evt) {
  indexImage++;
  let nbimage = petit.length - 1;
  if (indexImage > nbimage) {
    indexImage = nbimage;
  }
  changeImage(indexImage);
});

left.addEventListener("click", function (evt) {
  indexImage--;
  if (indexImage < 0) {
    indexImage = 0;
  }
  changeImage(indexImage);
});

document.addEventListener("keyup", function (evt) {
  let touche = evt.key;
  if (touche == "ArrowRight") {
    indexImage++;
    let nbimage = petit.length - 1;
    if (indexImage > nbimage) {
      indexImage = nbimage;
    }
    changeImage(indexImage);
  }
  if (touche == "ArrowLeft") {
    indexImage--;
    if (indexImage < 0) {
      indexImage = 0;
    }
    changeImage(indexImage);
  }
});
