const forwardBtnEl = document.querySelector('#carouselForward');
const backBtnEl = document.querySelector('#carouselBack');
const carouselEl = document.querySelector('#carousel');

const gap = 28;
const itemsLength = 5;

// Расчёт ширины одного айтема:
function getItemWidth() {
  const carouselWidth = carouselEl.clientWidth;
  return (carouselWidth - (itemsLength - 1) * gap) / itemsLength;
}

let imgIndex = 0;

function updateCarousel() {
  const itemWidth = getItemWidth();
  console.log(itemWidth);
  const moveStep = itemWidth + gap;
  const translateX = -(imgIndex * moveStep);
  carouselEl.style.transform = `translateX(${translateX}px)`;
}

forwardBtnEl.addEventListener('click', () => {
  imgIndex++;

  if (imgIndex >= itemsLength) {
    imgIndex = 0;
  }

  updateCarousel();
});

backBtnEl.addEventListener('click', () => {
  imgIndex--;

  if (imgIndex < 0) {
    imgIndex = itemsLength - 1;
  }

  updateCarousel();
});

// Чтобы при загрузке страницы всё посчиталось правильно:
updateCarousel();
