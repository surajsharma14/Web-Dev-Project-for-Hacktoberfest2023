const music = document.getElementById("music");
const playlist = document.getElementById("playlist");
const playButtons = document.querySelectorAll(".play-button");
const albumArtImages = document.querySelectorAll(".album-art");
const prevButton = document.getElementById("prev-button");
const nextButton = document.getElementById("next-button");
const shuffleButton = document.getElementById("shuffle-button");
const repeatButton = document.getElementById("repeat-button");
const repeatStatus = document.getElementById("repeat-status");
const songNameElement = document.getElementById("song-name");
const playSelectedButton = document.getElementById("play-selected-button");

let currentTrackIndex = 0;
let isShuffled = false;
let repeatMode = "all";

playButtons.forEach((button) =>
  button.addEventListener("click", () => {
    currentTrackIndex = Array.from(playButtons).indexOf(button);
    songNameElement.textContent = getSongName(button.getAttribute("data-src"));
  })
);

prevButton.addEventListener("click", () => playPreviousTrack());
nextButton.addEventListener("click", () => playNextTrack());
shuffleButton.addEventListener("click", () => toggleShuffle());
repeatButton.addEventListener("click", () => toggleRepeatMode());

playSelectedButton.addEventListener("click", () => playSelectedSong());

music.addEventListener("ended", () => handleTrackEnded());

const playSelectedSong = () => {
  // Play the song that corresponds to the current track index
  const selectedButton = playButtons[currentTrackIndex];
  if (selectedButton) {
    playTrack(selectedButton.getAttribute("data-src"));
  }
};

const playTrack = (src) => {
    music.src = src;
    music.play();
    songNameElement.textContent = getSongName(src);
    albumArtImages.forEach((img, index) => {
      img.style.display = index === currentTrackIndex ? "block" : "none";
    });
  };

const playPreviousTrack = () => {
  currentTrackIndex =
    (currentTrackIndex - 1 + playButtons.length) % playButtons.length;
  playTrack(playButtons[currentTrackIndex].getAttribute("data-src"));
};

const playNextTrack = () => {
  if (isShuffled) {
    currentTrackIndex = getRandomIndex();
  } else {
    currentTrackIndex = (currentTrackIndex + 1) % playButtons.length;
    playTrack(playButtons[currentTrackIndex].getAttribute("data-src"));
  }
};

const toggleShuffle = () => {
  isShuffled = !isShuffled;
  const shuffleIcon = document.querySelector(".fa-shuffle");
  const shuffleStatus = document.getElementById("shuffle-status");
  shuffleIcon.classList.toggle("active", isShuffled);
  shuffleStatus.textContent = isShuffled ? "On" : "Off";
};

const toggleRepeatMode = () => {
  if (repeatMode === "all") {
    repeatMode = "one";
    repeatStatus.textContent = "One";
  } else if (repeatMode === "one") {
    repeatMode = "none";
    repeatStatus.textContent = "None";
  } else {
    repeatMode = "all";
    repeatStatus.textContent = "All";
  }
};

const handleTrackEnded = () => {
  if (repeatMode === "one") {
    playTrack(playButtons[currentTrackIndex].getAttribute("data-src"));
  } else if (repeatMode === "all") {
    playNextTrack();
  }
};

const getRandomIndex = () => {
  let index;
  do {
    index = Math.floor(Math.random() * playButtons.length);
  } while (index === currentTrackIndex);
  return index;
};

const getSongName = (src) => {
  const parts = src.split("/");
  const filename = parts[parts.length - 1];
  return filename.replace(".mp3", "");
};
