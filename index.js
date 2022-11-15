const song = [
  {
    song_name: "lamborhini",
    singer: "Jass Manak",
    image: "lamborghini.jpg",
    song: "lamborghini.mp3",
  },
  {
    song_name: "we_rollin",
    singer: "Subh",
    image: "we_rollin.png",
    song: "we_rollin.mp3",
  },
  {
    song_name: "yarra",
    singer: "Jass Manak",
    image: "yarra.png",
    song: "yarra.mp3",
  },
];

let isPlay = false;

const music = document.getElementById("audio");
const img = document.querySelector("img");
const play = document.getElementById("play");
const singer = document.getElementById("singer");
const song_name = document.getElementById("song_name");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

const playMusic = () => {
  music.play();
  isPlay = true;
  play.classList.replace("fa-play", "fa-pause");
  img.classList.add("anime");
};
const pauseMusic = () => {
  music.pause();
  isPlay = false;
  play.classList.replace("fa-pause", "fa-play");
  img.classList.remove("anime");
};

play.addEventListener("click", () => {
  isPlay ? pauseMusic() : playMusic();
});

const loadSong = (song) => {
  singer.textContent = song.singer;
  song_name.textContent = song.song_name;
  music.src = `music/${song.song}`;
  img.src = `images/${song.image}`;
};
let songIndex = 2;

next.addEventListener("click", nextSong);
prev.addEventListener("click", prevSong());
const prevSong = () => {
  loadSong(song[songIndex]);
};
const nextSong = () => {
  songIndex += 1;
  loadSong(song[songIndex]);
};
