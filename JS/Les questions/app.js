let questRep = [
  {
    question: "De quelle couleur était le cheval blanc d'Henri IV ?",
    réponse: "Blanc !",
  },
  {
    question: "Pourquoi les fantômes de fourmis n'existeraient-ils pas ?",
    réponse: "Bonne question",
  },
  {
    question:
      "Pourquoi paye t on des chercheurs alors que des trouveurs suffiraient ?",
    réponse: "C'est certainement plus cher",
  },
  {
    question:
      "Pourquoi au lotto ils disent ''ça n'arrive pas qu'aux autres'. Alors que ça n'arrive qu'aux autres ?",
    réponse: "Pas de chance",
  },
  {
    question:
      "Si on compte les moutons pour dormir, que comptent les moutons ?",
    réponse: "Les moutons ne comptent rien pour s'endormir.",
  },
  {
    question: "Que prend dans sa valise un pancakes qui va a Toronto ?",
    réponse: "La réponse D",
  },
];

let question = document.getElementById("question");
let reponse = document.querySelector(".reponse");
let previous = document.getElementById("previous");
let btn = document.getElementById("btn");
let next = document.getElementById("next");
let popup = document.querySelector(".popup");
let close = document.querySelector(".close");

let firstQuest = 0;

function showQuest(numeroQuest) {
  reponse.classList.remove("active");
  question.innerHTML = questRep[numeroQuest].question;
  reponse.innerHTML = questRep[numeroQuest].réponse;
}

btn.addEventListener("click", function (evt) {
  evt.preventDefault();
  reponse.classList.toggle("active");
});

next.addEventListener("click", function (evt) {
  evt.preventDefault();
  firstQuest++;
  if (firstQuest > questRep.length - 1) {
    firstQuest = 0;
    popup.classList.add("show");
  }
  showQuest(firstQuest);
});

close.addEventListener("click", function (evt) {
  popup.classList.remove("show");
});

showQuest(firstQuest);

previous.addEventListener("click", function (evt) {
  evt.preventDefault();
  firstQuest--;
  if (firstQuest < 0) {
    firstQuest = 0;
  }
  showQuest(firstQuest);
});
