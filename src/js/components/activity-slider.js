import Swiper, { Navigation, Pagination, Autoplay } from 'swiper';

Swiper.use([Navigation, Pagination, Autoplay]);
new Swiper('.activities__content', {
  slidesPerView: 1,
  spaceBetween: 25,
  autoplay: {
    delay: 5000,
    pauseOnMouseEnter: true,
  },
  navigation: {
    nextEl: '.activities__button-next',
    prevEl: '.activities__button-prev',
  },
  breakpoints: {
    320: {
      slidesPerView: 2,
    },
    576: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    },
  },
});
