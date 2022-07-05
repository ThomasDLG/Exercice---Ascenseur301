let quantite = document.getElementById("quantite");
let prix = document.getElementById("prix");
let total = document.getElementById("total");
let plus = document.getElementById("plus");
let moins = document.getElementById("moins");

function calculPrix() {
  if (quantite.value < 1) {
    quantite.value = 1;
  }
  prixTotal = quantite.value * prix.innerHTML;
  total.innerHTML = prixTotal;
}

let prixTotal = 0;

total.innerHTML = prixTotal;

quantite.addEventListener("change", function (evt) {
  calculPrix();
});

quantite.addEventListener("keyup", function (evt) {
  calculPrix();
});

plus.addEventListener("click", function (evt) {
  quantite.value = parseInt(quantite.value, 10) + 1;
  calculPrix();
});

moins.addEventListener("click", function (evt) {
  quantite.value = parseInt(quantite.value, 10) - 1;
  calculPrix();
});
