let bouton = document.querySelector(".btn");
let hauteurPage = document.body.clientHeight;
let hauteurEcran = window.innerHeight;
let hauteur = hauteurPage - hauteurEcran;
let progress = 0;
let bar = document.querySelector(".progress");

window.addEventListener("scroll", function (evt) {
  console.log(window.scrollY);
  if (this.window.scrollY > 4700) {
    bouton.classList.add("active");
  } else {
    bouton.classList.remove("active");
  }
  let postionScroll = window.scrollY;
  progress = Math.round(postionScroll * 100) / hauteur;
  bar.style.width = progress + "%";
});
