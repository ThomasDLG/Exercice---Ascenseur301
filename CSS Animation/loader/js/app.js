let loading;

function load() {
  loading = setTimeout(showPage, 2500);
}

function showPage() {
  document.getElementById("header").classList.add("show");
  document.querySelector(".title").classList.add("show");
  document.querySelector(".cercle").classList.add("show");
  document.querySelector(".loader").style.display = "none";
}
