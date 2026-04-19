import Swiper from 'swiper';
import 'swiper/css/bundle';

const gameplayDots = document.querySelectorAll('.gameplay-dot');

let gameplaySwiper;

gameplaySwiper = new Swiper('.gameplay-swiper-container', {
  direction: 'horizontal',
  loop: false,
  centeredSlides: true,
  slidesPerView: 1,
  slidesPerGroup: 1,
  initialSlide: 0,
  spaceBetween: 20,
  speed: 500,
  allowTouchMove: true,
  grabCursor: true,
  watchOverflow: true,
  breakpoints: {
    1440: {
      slidesPerView: 4,
      centeredSlides: false,
      allowTouchMove: false,
      grabCursor: false,
      spaceBetween: 0,
    },
  },

  on: {
    init(swiper) {
      document
        .querySelector('.gameplay-swiper-container')
        .classList.add('show');
    },
    slideChange(swiper) {
      updateGameplayDots(swiper.realIndex);
    },
  },
});

function updateGameplayDots(index) {
  gameplayDots.forEach((dot, i) => {
    dot.classList.toggle('active', i === index);
  });
}

gameplayDots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    gameplaySwiper.slideTo(index);
  });
});
