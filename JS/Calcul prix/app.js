let click = 1;
let castor = 99;
let prix = document.getElementById("prix");
let compteur = document.getElementById("compteur");
let bouton = document.getElementById("plus");
let moins = document.getElementById("moins");
let reset = document.getElementById("reset");
let totalHtml = document.getElementById("total");

compteur.innerHTML = 1;
totalHtml.innerHTML = castor;
prix.innerHTML = castor;

bouton.addEventListener("click", function (evt) {
  click = click + 1;
  total = click * castor;
  console.log(total);
  compteur.innerHTML = click;
  totalHtml.innerHTML = total;
});

moins.addEventListener("click", function (evt) {
  click = click - 1;
  if (click < 1) {
    click = 1;
  }

  total = click * castor;
  console.log(total);
  compteur.innerHTML = click;
  totalHtml.innerHTML = total;
});

reset.addEventListener("click", function (evt) {
  click = 1;
  total = castor;

  compteur.innerHTML = click;
  totalHtml.innerHTML = total;
});
