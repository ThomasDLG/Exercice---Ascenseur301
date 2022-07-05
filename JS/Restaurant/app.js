let person = document.querySelectorAll(".list ul li a");

for (let i = 0; i < person.length; i++) {
  person[i].addEventListener("click", function (evt) {
    console.log("click");
    for (let i = 0; i < person.length; i++) {
      person[i].classList.remove("blue");
    }
    person[i].classList.add("blue");
  });
}
