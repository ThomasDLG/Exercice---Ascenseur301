let now = new Date();
let lesMinutes = now.getMinutes();
let body = document.querySelector("body");
let hello = document.getElementById("hello");

if (lesMinutes > 45 && lesMinutes < 50) {
  console.log("Bonjour");
  hello.innerHTML = "Bonjour";
  body.classList.add("orange");
} else {
  console.log("Bonne nuit");
  hello.innerHTML = "Bonsoir";
  body.classList.add("bleu");
}
