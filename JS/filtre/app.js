let infoClass = document.querySelectorAll(".info");
let identiteClass = document.querySelectorAll(".identite");
let printClass = document.querySelectorAll(".print");
let illustrationClass = document.querySelectorAll(".illustration");
let isometriesClass = document.querySelectorAll(".isometries");
let storyboardClass = document.querySelectorAll(".storyboard");

let card = document.querySelectorAll(".card");
let btn = document.querySelectorAll(".btn");
let btnburger = document.querySelectorAll(".btnburger");
let svg = document.querySelector(".svg");
let menu = document.querySelector(".menu");
let thumb = document.querySelectorAll(".card");
let grand = document.querySelector(".big");
let popup = document.querySelector(".popup");
let closed = document.querySelector(".cross");
let right = document.querySelector(".right");
let left = document.querySelector(".left");

let indexImage = 0;
function changeImage(index) {
  console.log(thumb[index].querySelector("img").getAttribute("src"));
  let source = thumb[index].querySelector("img").getAttribute("src");
  grand.setAttribute("src", source);
}

for (let index = 0; index < thumb.length; index++) {
  thumb[index].addEventListener("click", function (evt) {
    console.log("click");
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
  let nbimage = thumb.length - 1;
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
    let nbimage = thumb.length - 1;
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

for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", function (evt) {
    for (let i = 0; i < btn.length; i++) {
      btn[i].classList.remove("active");
    }
    btn[i].classList.add("active");
    let source = btn[i].getAttribute("id");
    console.log(source);

    for (let f = 0; f < card.length; f++) {
      if (source == "all") {
        card[f].classList.remove("hide");
      } else {
        if (card[f].classList.contains(source)) {
          console.log(card[f]);
          card[f].classList.remove("hide");
        } else {
          card[f].classList.add("hide");
        }
      }
    }
  });
}

for (let i = 0; i < btnburger.length; i++) {
  btnburger[i].addEventListener("click", function (evt) {
    for (let i = 0; i < btnburger.length; i++) {
      btnburger[i].classList.remove("active");
    }
    btnburger[i].classList.add("active");
    let source = btnburger[i].getAttribute("id");
    console.log(source);

    for (let f = 0; f < card.length; f++) {
      if (source == "all") {
        card[f].classList.remove("hide");
      } else {
        if (card[f].classList.contains(source)) {
          console.log(card[f]);
          card[f].classList.remove("hide");
        } else {
          card[f].classList.add("hide");
        }
      }
    }
  });
}

svg.addEventListener("click", function (evt) {
  menu.classList.toggle("open");
});
