const images = [
  '../Assets/Images/Items/1.jpg',
  '../Assets/Images/Items/2.jpg',
  '../Assets/Images/Items/3.jpg',
  '../Assets/Images/Items/4.jpg',
  '../Assets/Images/Items/5.jpg',
];

const imgEl = document.querySelector('#sliderImg');
const subImgEl = document.querySelector('#sliderSubImg');
const prevBtn = document.querySelector('#sliderPrev');
const nextBtn = document.querySelector('#sliderNext');
const imgWrapper = document.querySelector('.welcome__slider-img-wrapper');

let currentIndex = 0;

function updateImage() {
  imgEl.src = images[currentIndex];
  subImgEl.src = images[currentIndex];

  imgWrapper.classList.toggle('animated');

  setTimeout(() => {
    imgWrapper.classList.toggle('animated');
  }, 150);
}

nextBtn.addEventListener('click', () => {
  currentIndex++;

  if (currentIndex >= images.length) {
    currentIndex = 0;
  }

  updateImage();
});

prevBtn.addEventListener('click', () => {
  currentIndex--;

  if (currentIndex < 0) {
    currentIndex = images.length - 1;
  }

  updateImage();
});
