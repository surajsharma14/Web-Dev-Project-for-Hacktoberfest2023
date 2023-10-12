const inputEl = document.getElementById("input");
const infoEl = document.getElementById("info-text");
const meaningContainerEl = document.getElementById("meaning-container");
const titleEl = document.getElementById("title");
const meaningEl = document.getElementById("meaning");
const audioEl = document.getElementById("audio");
const linkEl = document.getElementById("link");
const favoriteButtonEl = document.getElementById("favorite-button");
const favoritesContainerEl = document.getElementById("favorites-container");
const favoritesListEl = document.getElementById("favorites-list");

const favorites = [];

function addToFavorites() {
  const word = titleEl.textContent;
  const meaning = meaningEl.textContent;
  favorites.push({ word, meaning });
  updateFavoritesUI();
}

function removeFromFavorites(index) {
  favorites.splice(index, 1);
  updateFavoritesUI();
}

function updateFavoritesUI() {
  favoritesListEl.innerHTML = "";
  favorites.forEach((favorite, index) => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `
      <span>${favorite.word}: ${favorite.meaning}</span>
      <button class="remove-favorite" data-index="${index}">Remove</button>
    `;
    favoritesListEl.appendChild(listItem);
  });

  const removeFavoriteButtons = document.querySelectorAll(".remove-favorite");
  removeFavoriteButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      const index = e.target.getAttribute("data-index");
      removeFromFavorites(index);
    });
  });

  if (favorites.length > 0) {
    favoritesContainerEl.style.display = "block";
  } else {
    favoritesContainerEl.style.display = "none";
  }
}

async function fetchAPI(word) {
  try {
    infoEl.style.display = "block";
    meaningContainerEl.style.display = "none";

    infoEl.innerText = `Searching the meaning of "${word}"`;

    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    const result = await fetch(url).then((response) => response.json());
    inputEl.value = "";

    if (result.title === "No Definitions Found") {
      infoEl.style.display = "none";
      meaningContainerEl.style.display = "block";
      titleEl.innerText = word;
      audioEl.style.display = "none";
      meaningEl.innerText = "N/A";
      linkEl.innerHTML = `Not Found`;
    } else {
      infoEl.style.display = "none";
      meaningContainerEl.style.display = "block";
      titleEl.innerText = result[0].word;
      meaningEl.innerText = result[0].meanings[0].definitions[0].definition;
      audioEl.style.display = "inline-flex";
      audioEl.src = result[0].phonetics[0].audio;
      linkEl.innerHTML = `<a href=${result[0].sourceUrls[0]} target="_blank">Read More</a>`;
      favoriteButtonEl.style.display = "inline-block";
    }
  } catch (error) {
    infoEl.innerText = "An error occurred, try again later";
  }
}

inputEl.addEventListener("keyup", async (e) => {
  if (e.target.value && e.key === "Enter") {
    fetchAPI(e.target.value);
  }
});

favoriteButtonEl.addEventListener("click", () => {
  addToFavorites();
  favoriteButtonEl.style.display = "none";
});

// Preload a smaller version of the image
const preloadImage = new Image();
preloadImage.src = 'https://source.unsplash.com/800x450/?nature';

// Once the smaller image is preloaded, set it as the background
preloadImage.onload = () => {
  document.body.style.backgroundImage = "url('https://source.unsplash.com/800x450/?nature')";
};

// Function to set the background image based on screen size
function setRandomBackground() {
  const screenWidth = window.innerWidth;
  let imageUrl;

  if (screenWidth > 768) {
    imageUrl = 'https://source.unsplash.com/1600x900/?nature';
  } else if (screenWidth > 576) {
    imageUrl = 'https://source.unsplash.com/1200x800/?nature';
  } else {
    imageUrl = 'https://source.unsplash.com/800x600/?nature';
  }

  document.body.style.backgroundImage = `url('${imageUrl}')`;
}

// Call the function to set the initial background
setRandomBackground();

// Listen for window resize events and update the background accordingly
window.addEventListener('resize', setRandomBackground);
