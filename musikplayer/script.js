const image = document.querySelector("img");
const prevBtn = document.getElementById("prev");
const music = document.querySelector("audio");
const playBtn = document.getElementById("play");
const nextBtn = document.getElementById("next");

let isPalying = false;

function playSong() {
  isPlaying = true;
  playBtn.classList.replace("fa-play", "fa-pause");
  playBtn.setAttribute("title", "Pause");
  music.play();
}

function pauseSong() {
  isPlaying = false;
  playBtn.classList.replace("fa-pause", "fa-play");
  playBtn.setAttribute("title", "Play");
  music.pause();
}

// Play or Pause eventListener

playBtn.addEventListerner("click", () =>
  isPlaying ? pauseSong() : playSong()
);
