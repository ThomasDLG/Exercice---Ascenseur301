let player = document.querySelectorAll(".btn-blue");
let colere = document.getElementById("tout");
let audio = document.querySelectorAll("audio");

function son() {
  for (let index = 0; index < audio.length; index++) {
    audio[index].play();
  }
}

function son2() {
  for (let index = 0; index < audio.length; index++) {}
}

for (let i = 0; i < player.length; i++) {
  player[i].addEventListener("click", function (evt) {
    audio.forEach((son) => {
      if (son !== player[i]) {
        son.currentTime = 0;
        son.pause();
      }
    });
    let sono = player[i].querySelector("audio");
    sono.play();
  });
}

colere.addEventListener("click", function () {
  son();
});
