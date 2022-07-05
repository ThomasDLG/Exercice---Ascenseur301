let job = document.querySelectorAll(".list ul li a");

for (let i = 0; i < job.length; i++) {
  job[i].addEventListener("click", function (evt) {
    console.log("click");
    job[i].classList.toggle("blue");
  });
}
