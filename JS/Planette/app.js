let planet = document.getElementById("planet");
let day = document.getElementById("day");
let night = document.getElementById("night");
let btnswitch = document.getElementById("btnswitch");
let jours = document.getElementById("jours");
let title = document.getElementById("title");

day.addEventListener("click", function (evt) {
  evt.preventDefault();
  planet.classList.remove("nuit");
  jours.classList.remove("on");
  title.classList.add("black");
});

night.addEventListener("click", function (evt) {
  evt.preventDefault();
  planet.classList.add("nuit");
  jours.classList.add("on");
  title.classList.remove("black");
});

btnswitch.addEventListener("click", function (evt) {
  evt.preventDefault();
  planet.classList.toggle("nuit");
  jours.classList.toggle("on");
  title.classList.toggle("black");
});
