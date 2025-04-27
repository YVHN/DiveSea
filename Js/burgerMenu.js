const burgerEl = document.querySelector('#burger');
const burgerOverlayEl = document.querySelector('#burgerOverlay');

const burgerActiveClass = 'burger-menu--active';
const burgerOverlayActiveClass = 'burger-menu__overlay--active';

burgerEl.addEventListener('pointerdown', () => {
  burgerEl.classList.toggle(burgerActiveClass);
  burgerOverlayEl.classList.toggle(burgerOverlayActiveClass);

  document.body.classList.toggle('no-scroll');
});
