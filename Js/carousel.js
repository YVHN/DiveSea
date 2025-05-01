const forwardBtnEl = document.querySelector("#carouselForward");
const backBtnEl = document.querySelector("#carouselBack");
const carouselEl = document.querySelector("#carousel");
const carouselWrapperEl = document.querySelector("#carouselWrapper");

const gap = 28;
const itemsLength = 5;

function getItemWidth() {
  const carouselWidth = carouselEl.clientWidth;
  return (carouselWidth - (itemsLength - 1) * gap) / itemsLength;
}

let imgIndex = 0;

function updateCarousel() {
  const itemWidth = getItemWidth();
  const moveStep = itemWidth + gap;
  const translateX = -(imgIndex * moveStep);
  carouselEl.style.transform = `translateX(${translateX}px)`;
  console.log("index:", imgIndex);
}

forwardBtnEl.addEventListener("click", () => {
  imgIndex = (imgIndex + 1) % itemsLength;
  updateCarousel();
});

backBtnEl.addEventListener("click", () => {
  imgIndex = (imgIndex - 1 + itemsLength) % itemsLength;
  updateCarousel();
});

// 📱 Свайп
let touchStartX = 0;
let touchEndX = 0;

carouselWrapperEl.addEventListener("touchstart", (e) => {
  touchStartX = e.changedTouches[0].clientX;
});

carouselWrapperEl.addEventListener("touchend", (e) => {
  touchEndX = e.changedTouches[0].clientX;
  handleSwipe();
});

function handleSwipe() {
  const swipeThreshold = 50;

  if (touchEndX < touchStartX - swipeThreshold) {
    // свайп влево (вперёд)
    imgIndex = (imgIndex + 1) % itemsLength;
    updateCarousel();
  } else if (touchEndX > touchStartX + swipeThreshold) {
    // свайп вправо (назад)
    imgIndex = (imgIndex - 1 + itemsLength) % itemsLength;
    updateCarousel();
  }
}

// Инициализация
updateCarousel();
