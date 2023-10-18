let count = 0;
const countElement= document.querySelector('.hits');

function increaseCount() {
  count++;
  countElement.textContent=count;
}

function resetHits() {
  count = 0;
  countElement.textContent=count;
}

document.addEventListener('keydown', function(event) {
  if (event.code === 'Space') {
    increaseCount();
  }
});

