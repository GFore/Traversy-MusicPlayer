const musicContainer = document.querySelector('.music-container');
const nextBtn = document.querySelector('#next');
const playBtn = document.querySelector('#play');
const prevBtn = document.querySelector('#prev');
const progress = document.querySelector('.progress');
const progressContainer = document.querySelector('.progress-container');
const audio = document.querySelector('#audio');
const cover = document.querySelector('#cover');
const title = document.querySelector('#title');

// Song titles
const songs = ['hey', 'summer', 'ukulele'];

// Keep track of song
let songIndex = 2;

// Initially load song details into DOM
loadSong(songs[songIndex]);

// Update song details
function loadSong(song) {
  title.innerText = song;
  audio.src = `./music/${song}.mp3`;
  cover.src = `./images/${song}.jpeg`;
};
