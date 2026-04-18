import Swiper from 'swiper';
import 'swiper/css/bundle';

const featuresDots = document.querySelectorAll('.features-dot');

let featuresSwiper;

featuresSwiper = new Swiper('.features-swiper-container', {
  direction: 'horizontal',
  loop: false,
  centeredSlides: true,
  slidesPerView: 1,
  slidesPerGroup: 1,
  initialSlide: 0,
  spaceBetween: 12,
  speed: 500,
  allowTouchMove: true,
  grabCursor: true,
  watchOverflow: true,
  breakpoints: {
    1440: {
      centeredSlides: false,
      slidesPerView: 'auto',
      spaceBetween: 24,
    },
  },

  on: {
    init(swiper) {
      document
        .querySelector('.features-swiper-container')
        .classList.add('show');
    },
    slideChange(swiper) {
      updateFeaturesDots(swiper.realIndex);
    },
  },
});

function updateFeaturesDots(index) {
  featuresDots.forEach((dot, i) => {
    dot.classList.toggle('active', i === index);
  });
}

featuresDots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    featuresSwiper.slideTo(index);
  });
});
