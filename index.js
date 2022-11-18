const songs = [
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
    song_name: "yaara",
    singer: "Jass Manak",
    image: "yarra.png",
    song: "yaara.mp3",
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

const loadSong = (songs) => {
  singer.textContent = songs.singer;
  song_name.textContent = songs.song_name;
  music.src = `music/${songs.song}`;
  img.src = `images/${songs.image}`;
};

songIndex = 1;
const prevSong = () => {
  songIndex = (songIndex - 1 + songs.length) % songs.length;
  loadSong(songs[songIndex]);
  playMusic();
};
const nextSong = () => {
  songIndex = (songIndex + 1) % songs.length;
  loadSong(songs[songIndex]);
  playMusic();
};
next.addEventListener("click", nextSong);
prev.addEventListener("click", prevSong);
